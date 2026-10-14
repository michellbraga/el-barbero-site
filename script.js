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

  document.querySelectorAll('[data-track]').forEach((link) => link.addEventListener('click', () => {
    const detail = { event: link.dataset.track, origin: link.dataset.origin || 'unknown' };
    window.dispatchEvent(new CustomEvent('elbarbero:conversion', { detail }));
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
