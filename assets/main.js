'use strict';
const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus()}});
const pause=document.querySelector('.pause');pause?.addEventListener('click',()=>{const paused=document.querySelector('.field').classList.toggle('paused');pause.textContent=paused?'Play motion':'Pause motion';pause.setAttribute('aria-pressed',String(paused))});
const search=document.querySelector('#publication-search'),filters=document.querySelectorAll('[data-filter]');let category='all';
function filterPublications(){const term=(search?.value||'').toLowerCase().trim();let shown=0;document.querySelectorAll('[data-publication]').forEach(row=>{const show=(category==='all'||row.dataset.category===category)&&row.textContent.toLowerCase().includes(term);row.hidden=!show;if(show)shown++});const count=document.querySelector('#result-count');if(count)count.textContent=shown+' publication'+(shown===1?'':'s');const empty=document.querySelector('#no-results');if(empty)empty.hidden=shown!==0}
filters.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filterPublications()}));search?.addEventListener('input',filterPublications);if(search)filterPublications();
document.querySelector('.print-button')?.addEventListener('click',()=>window.print());

// SPARKS plays once on entry, settles within 4.5 seconds, and can be replayed.
// With reduced motion or no JavaScript, the complete original identity stays visible.
const sparksMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-sparks]').forEach(stage=>{
  const replay=stage.querySelector('.sparks-replay');
  let timer=null;
  const settle=()=>{window.clearTimeout(timer);timer=null;stage.classList.remove('is-playing');replay.disabled=false;replay.textContent='Replay animation ↻'};
  const play=()=>{
    if(sparksMotion.matches)return;
    settle();void stage.offsetWidth;stage.classList.add('is-playing');
    replay.disabled=true;replay.textContent='Playing…';timer=window.setTimeout(settle,4500);
  };
  const syncPreference=()=>{replay.hidden=sparksMotion.matches;if(sparksMotion.matches)settle()};
  syncPreference();replay.addEventListener('click',play);
  sparksMotion.addEventListener('change',syncPreference);
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){play();observer.disconnect()}
    },{threshold:.4});observer.observe(stage);
  }else{play()}
});
