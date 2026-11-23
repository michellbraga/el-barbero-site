(() => {
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const nodes=document.querySelectorAll('main section');
 nodes.forEach(n=>n.classList.add('reveal-ready'));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.12});
 nodes.forEach(n=>io.observe(n));
})();