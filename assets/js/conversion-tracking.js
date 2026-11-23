(() => {
 const started=Date.now(), dedupe=1800000, debounce=1000; let last=0;
 document.addEventListener('click',e=>{
  const a=e.target.closest('a[href]'); if(!a)return;
  let u;try{u=new URL(a.href)}catch{return}
  if(!['wa.me','api.whatsapp.com'].includes(u.hostname)||u.pathname!=='/5592981943510')return;
  const dl=Array.isArray(window.dataLayer)?window.dataLayer:null;
  if(dl)dl.push({event:'whatsapp_click_bruto',pagina:location.pathname});
  if(typeof window.fbq==='function')window.fbq('track','Contact');
  if(a.dataset.conv!=='agendar'||!e.isTrusted||Date.now()-started<5000||document.body.classList.contains('intro-active'))return;
  const key='elbarbero_booking_last';let previous=0;try{previous=Number(sessionStorage.getItem(key))||0}catch{}
  if(Date.now()-last<debounce||Date.now()-previous<dedupe)return;
  last=Date.now();try{sessionStorage.setItem(key,String(Date.now()))}catch{}
  const origins={hero:'hero',header:'header',servico:'servico',services:'servico',contact:'rodape',rodape:'rodape',footer:'rodape',landing:'landing'};
  const payload={event:'whatsapp_click',cta_local:origins[a.dataset.origin]||'landing',pagina:location.pathname};
  if(a.dataset.service)payload.servico=a.dataset.service;
  if(dl)dl.push(payload);window.dispatchEvent(new CustomEvent('elbarbero:conversion',{detail:payload}));
 },true);
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a)return;let n='';if(a.href.startsWith('tel:'))n='click_telefone';else if(a.href.includes('google.com/maps'))n='click_rota';else if(a.hostname==='www.instagram.com')n='click_instagram';else if(a.href.includes('google.com/search'))n='click_avaliacoes';if(n&&Array.isArray(window.dataLayer))window.dataLayer.push({event:n,pagina:location.pathname})});
})();