(() => {
  const intro = document.getElementById('intro');
  const video = document.getElementById('intro-video');
  const skip = document.getElementById('skip-intro');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let introTimer;
  let introClosed = false;
  let playbackClockStarted = false;

  function closeIntro() {
    if (introClosed) return;
    introClosed = true;
    window.clearTimeout(introTimer);
    intro.classList.add('is-leaving');
    document.body.classList.remove('intro-active');
    window.setTimeout(() => {
      video.pause();
      intro.remove();
    }, 400);
  }

  if (reducedMotion) {
    intro.remove();
  } else {
    document.body.classList.add('intro-active');
    introTimer = window.setTimeout(closeIntro, 7600);
    const showFallback = () => intro.classList.add('has-fallback');
    const showVideo = () => {
      intro.classList.add('has-video');
      intro.classList.remove('has-fallback');
      if (!playbackClockStarted) {
        playbackClockStarted = true;
        window.clearTimeout(introTimer);
        introTimer = window.setTimeout(closeIntro, 7600);
      }
    };
    video.addEventListener('error', showFallback, { once: true });
    video.addEventListener('playing', showVideo, { once: true });
    video.play().then(showVideo).catch(showFallback);
    skip.addEventListener('click', closeIntro);
  }

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }));

  function isWhatsAppDestination(destination) {
    if (!destination) return false;
    let url;
    try {
      url = new URL(destination, window.location.href);
    } catch {
      return false;
    }

    if (url.protocol === 'whatsapp:') return true;
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;

    const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
    return hostname === 'wa.me' || hostname.endsWith('.wa.me') ||
      hostname === 'whatsapp.com' || hostname.endsWith('.whatsapp.com');
  }

  document.addEventListener('click', (event) => {
    const control = event.target.closest?.('a[href], area[href], button');
    if (!control) return;

    if (control.dataset.track) {
      const detail = { event: control.dataset.track, origin: control.dataset.origin || 'unknown' };
      window.dispatchEvent(new CustomEvent('elbarbero:conversion', { detail }));
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
    }

    const destination = control.getAttribute('href') || control.getAttribute('data-href') || control.getAttribute('formaction');
    if (isWhatsAppDestination(destination) && typeof window.fbq === 'function') {
      window.fbq('track', 'Contact');
    }
  });

  const reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const carouselStates = [];
  const photoCarousel = document.querySelector('[data-carousel="gallery"]');
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  let photoIndex = 0;
  let returnFocusTo = null;
  let galleryState = null;

  function slidesVisible(carousel, viewport, slides) {
    if (!slides.length) return 1;
    return Math.max(1, viewport.clientWidth / slides[0].getBoundingClientRect().width);
  }

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-track]');
    const viewport = carousel.querySelector('.service-track-wrap, .photo-carousel__viewport, .review-carousel__viewport');
    const isGallery = carousel.dataset.carousel === 'gallery';
    const isReviews = carousel.dataset.carousel === 'reviews';
    const slides = Array.from(track.children);
    const loopSlides = isGallery ? slides.slice(0, 3).map((slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.clone = 'true';
      clone.setAttribute('aria-hidden', 'true');
      clone.tabIndex = -1;
      clone.style.pointerEvents = 'none';
      track.append(clone);
      return clone;
    }) : [];
    const navigableSlides = [...slides, ...loopSlides];
    const previous = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    const position = carousel.querySelector('[data-position]');
    const indicators = carousel.querySelector('[data-indicators]');
    if (carousel.dataset.carousel === 'services') {
      carousel.classList.toggle('service-lane--short-1', slides.length === 1);
      carousel.classList.toggle('service-lane--short-2', slides.length === 2);
      carousel.classList.toggle('service-lane--short-3', slides.length === 3);
    }
    let index = 0;
    let maximum = 0;
    let rotationTimer;
    let resumeTimer;
    let isInView = false;
    let isInteracting = false;
    let touchStartX = null;

    function measure() {
      const visible = slidesVisible(carousel, viewport, slides);
      const displayCount = carousel.dataset.carousel === 'services' && slides.length > 1
        ? Math.min(visible, slides.length - 1)
        : visible;
      maximum = Math.max(0, slides.length - Math.floor(displayCount + 0.01));
      index = Math.min(index, maximum);
      update();
      if (indicators) {
        indicators.replaceChildren();
        for (let dotIndex = 0; dotIndex <= maximum; dotIndex += 1) {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', isReviews ? `Mostrar conjunto de avaliações ${dotIndex + 1}` : `Mostrar conjunto de fotografias ${dotIndex + 1}`);
          dot.addEventListener('click', () => goTo(dotIndex, true));
          indicators.append(dot);
        }
      }
      update();
    }

    function update() {
      const first = navigableSlides[index];
      const offset = first ? first.offsetLeft : 0;
      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      const shownIndex = isGallery ? index % (maximum + 1) : index;
      if (position) position.textContent = `${String(shownIndex + 1).padStart(2, '0')} / ${String(maximum + 1).padStart(2, '0')}`;
      if (previous) previous.disabled = maximum === 0;
      if (next) next.disabled = maximum === 0;
      if (indicators) Array.from(indicators.children).forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', String(dotIndex === index));
      });
      if (isGallery) photoIndex = index;
    }

    function pause() {
      window.clearInterval(rotationTimer);
      rotationTimer = undefined;
      window.clearTimeout(resumeTimer);
    }

    function start() {
      pause();
      if (reducedMotionPreference.matches || !isInView || isInteracting || maximum === 0 || (isGallery && lightbox.open)) return;
      rotationTimer = window.setInterval(() => {
        if (isGallery) {
          if (index >= slides.length) {
            track.style.transition = 'none';
            index = 0;
            update();
            requestAnimationFrame(() => { track.style.transition = ''; });
          } else {
            index += 1;
            update();
          }
          return;
        }
        goTo(index >= maximum ? 0 : index + 1);
      }, isGallery ? 6500 : 7800);
    }

    function goTo(target, wasManual = false) {
      index = Math.max(0, Math.min(maximum, target));
      update();
      if (wasManual) {
        pause();
        resumeTimer = window.setTimeout(start, 4500);
      }
    }

    previous?.addEventListener('click', () => goTo(index <= 0 ? maximum : index - 1, true));
    next?.addEventListener('click', () => goTo(index >= maximum ? 0 : index + 1, true));
    carousel.addEventListener('mouseenter', () => { isInteracting = true; pause(); });
    carousel.addEventListener('mouseleave', () => { isInteracting = false; start(); });
    carousel.addEventListener('focusin', () => { isInteracting = true; pause(); });
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) { isInteracting = false; start(); }
    });
    carousel.addEventListener('pointerdown', () => { isInteracting = true; pause(); }, { passive: true });
    carousel.addEventListener('pointerdown', (event) => {
      if (isReviews && event.target.closest('.review-carousel__viewport')) {
        touchStartX = event.clientX;
        carousel.setPointerCapture?.(event.pointerId);
      }
    }, { passive: true });
    carousel.addEventListener('pointerup', () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => { isInteracting = false; start(); }, 4500);
    }, { passive: true });
    carousel.addEventListener('pointerup', (event) => {
      if (!isReviews || touchStartX === null) return;
      const delta = event.clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1), true);
    }, { passive: true });
    carousel.addEventListener('pointercancel', () => { touchStartX = null; }, { passive: true });
    carousel.addEventListener('keydown', (event) => {
      if ((isGallery || isReviews) && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        event.preventDefault();
        goTo(index + (event.key === 'ArrowRight' ? 1 : -1), true);
      }
    });

    const state = { element: carousel, measure, start, pause, getIndex: () => index, goTo };
    carouselStates.push(state);
    if (isGallery) galleryState = state;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) start(); else pause();
      }, { threshold: 0.12 });
      observer.observe(carousel);
    } else {
      isInView = true;
      start();
    }
    measure();
  });

  function showPhoto(index) {
    if (!photoCarousel || !lightbox) return;
    const photos = Array.from(photoCarousel.querySelectorAll('.photo-slide:not([data-clone])'));
    photoIndex = (index + photos.length) % photos.length;
    const photo = photos[photoIndex];
    const image = photo.querySelector('img');
    lightboxImage.src = photo.dataset.full;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = photo.querySelector('span').textContent;
    if (!lightbox.open) {
      returnFocusTo = photo;
      lightbox.showModal();
      galleryState?.pause();
    }
  }

  photoCarousel?.querySelectorAll('.photo-slide:not([data-clone])').forEach((photo, index) => {
    photo.addEventListener('click', () => showPhoto(index));
  });
  document.querySelector('[data-lightbox-close]')?.addEventListener('click', () => lightbox.close());
  document.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => showPhoto(photoIndex - 1));
  document.querySelector('[data-lightbox-next]')?.addEventListener('click', () => showPhoto(photoIndex + 1));
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showPhoto(photoIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(photoIndex + 1);
  });
  lightbox?.addEventListener('close', () => {
    returnFocusTo?.focus();
    galleryState?.start();
  });

  window.addEventListener('resize', () => carouselStates.forEach((state) => state.measure()));
  reducedMotionPreference.addEventListener?.('change', () => carouselStates.forEach((state) => {
    if (reducedMotionPreference.matches) state.pause(); else state.start();
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
