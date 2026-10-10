/* Dependency-free scientific artwork. All scenes are conceptual, not research results. */
(function(global){
'use strict';
const TAU=Math.PI*2;
class ScientificField {
 constructor(canvas){
  this.canvas=canvas;this.ctx=canvas.getContext('2d',{alpha:false});
  this.mode='vortex';this.time=0;this.pointer={x:0,y:0};this.pulseAge=10;
  this.w=500;this.h=420;this.trajectory=[];
  let q=[.1,0,0];const dt=.006;
  const f=([x,y,z])=>[10*(y-x),x*(28-z)-y,x*y-(8/3)*z];
  const step=(q,k,s)=>q.map((v,i)=>v+s*k[i]);
  for(let i=0;i<7600;i++){
   const a=f(q),b=f(step(q,a,dt/2)),c=f(step(q,b,dt/2)),d=f(step(q,c,dt));
   q=q.map((v,j)=>v+dt*(a[j]+2*b[j]+2*c[j]+d[j])/6);
   if(i>800)this.trajectory.push([q[0]/12,(q[2]-25)/13,q[1]/17]);
  }
 }
 resize(w,h,dpr=1){this.w=w;this.h=h;this.canvas.width=Math.round(w*dpr);this.canvas.height=Math.round(h*dpr);this.ctx.setTransform(dpr,0,0,dpr,0,0)}
 setMode(mode){if(['vortex','waves','attractor'].includes(mode))this.mode=mode}
 pulse(){this.pulseAge=0}
 project(x,y,z){
  const yaw=(this.mode==='attractor'?.14:.48)+this.pointer.x*.25+Math.sin(this.time*.12)*.075;
  const pitch=(this.mode==='attractor'?.08:.55)+this.pointer.y*.17;
  const rx=x*Math.cos(yaw)-z*Math.sin(yaw),rz=x*Math.sin(yaw)+z*Math.cos(yaw);
  const ry=y*Math.cos(pitch)-rz*Math.sin(pitch),depth=y*Math.sin(pitch)+rz*Math.cos(pitch);
  const perspective=6/(6+depth),scale=Math.min(this.w*(this.mode==='waves'?.15:.205),this.h*.24);
  return {x:this.w/2+rx*scale*perspective,y:this.h*.49-ry*scale*perspective,z:depth,k:perspective};
 }
 color(warm,alpha){return warm?`rgba(239,185,130,${alpha})`:`rgba(130,227,215,${alpha})`}
 path(points,color,width=1){const c=this.ctx;c.beginPath();points.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.strokeStyle=color;c.lineWidth=width;c.stroke()}
 point(p,r,warm=false,alpha=.9){const c=this.ctx;c.fillStyle=this.color(warm,alpha);c.beginPath();c.arc(p.x,p.y,r,0,TAU);c.fill()}
 vortex(u,v){const t=this.time,R=1.22+.13*Math.sin(3*u+t*.4);let tube=.43+.05*Math.sin(4*u-2*v+t*.7);tube+=this.pulseStrength*.13*Math.sin(3*u-this.pulseAge*7);return [(R+tube*Math.cos(v))*Math.cos(u),tube*Math.sin(v)*1.2+.23*Math.sin(2*u+t*.35),(R+tube*Math.cos(v))*Math.sin(u)]}
 wave(x,z){const t=this.time;let y=(.58*Math.sin(2.3*x-t*.65)+.42*Math.cos(2*z+t*.45))*Math.exp(-.12*(x*x+z*z));y+=this.pulseStrength*.5*Math.sin(5*Math.hypot(x,z)-this.pulseAge*7);return [x,y,z]}
 background(){
  const c=this.ctx,w=this.w,h=this.h;c.fillStyle='#0b1015';c.fillRect(0,0,w,h);
  const glow=c.createRadialGradient(w*.52,h*.47,5,w*.52,h*.47,w*.49);glow.addColorStop(0,'#14312f');glow.addColorStop(.55,'#0e1d22');glow.addColorStop(1,'#0b1015');c.fillStyle=glow;c.fillRect(0,0,w,h);
  c.fillStyle='#435a613d';for(let x=18;x<w;x+=26)for(let y=20;y<h;y+=26)c.fillRect(x,y,1,1);
  for(const r of [1.95,2.2]){const pts=[];for(let i=0;i<=110;i++)pts.push(this.project(r*Math.cos(i/110*TAU),-1.1,r*Math.sin(i/110*TAU)));this.path(pts,'#607b8430',.7)}
  c.strokeStyle='#49616a';c.lineWidth=.7;for(const [x,y,dx,dy] of [[16,20,1,1],[w-16,20,-1,1],[16,h-20,1,-1],[w-16,h-20,-1,-1]]){c.beginPath();c.moveTo(x+12*dx,y);c.lineTo(x,y);c.lineTo(x,y+12*dy);c.stroke()}
 }
 drawVortex(){
  for(let j=0;j<27;j++){
   const v=j/27*TAU,pts=[];for(let i=0;i<=100;i++)pts.push(this.project(...this.vortex(i/100*TAU,v)));
   this.path(pts,this.color(j>19,.13+(Math.sin(v)+1)*.07),.7);
  }
  for(let j=0;j<30;j++){
   const u=j/30*TAU,pts=[];for(let i=0;i<=32;i++)pts.push(this.project(...this.vortex(u,i/32*TAU)));
   this.path(pts,'#71bebc24',.6);
  }
  const particles=[];
  for(let i=0;i<145;i++){
   const v=(i*.6180339%1)*TAU,u=(i*.381966+.055*this.time*(1+(i%5)*.08))%1*TAU;
   particles.push({p:this.project(...this.vortex(u,v)),u,v,warm:i%5===0});
  }
  particles.sort((a,b)=>b.p.z-a.p.z);
  for(const {p,u,v,warm} of particles){const tail=[];for(let i=0;i<7;i++)tail.push(this.project(...this.vortex(u-i*.023,v)));this.path(tail,this.color(warm,.24),.9);this.point(p,1.35*p.k,warm,.7);if(p.z<-.5)this.point(p,3.8,warm,.075)}
 }
 drawWaves(){
  for(let j=0;j<=30;j++){
   const z=-2+j/30*4,pts=[];for(let i=0;i<=68;i++)pts.push(this.project(...this.wave(-2+i/68*4,z)));
   this.path(pts,this.color(j>23,.22+j/120),.75);
  }
  for(let j=0;j<=28;j++){const x=-2+j/28*4,pts=[];for(let i=0;i<=50;i++)pts.push(this.project(...this.wave(x,-2+i/50*4)));this.path(pts,'#8bd5d033',.6)}
  for(let i=0;i<75;i++){const x=-2+((i*.618+.08*this.time)%1)*4,z=-2+(i*.383%1)*4,p=this.project(...this.wave(x,z));this.point(p,1.5*p.k,i%7===0,.85)}
 }
 drawAttractor(){
  const points=this.trajectory.map(q=>this.project(...q));
  for(let start=0;start<points.length-1;start+=60){const chunk=points.slice(start,start+61);this.path(chunk,this.color(this.trajectory[start][0]>0,.21),.7)}
  for(let i=0;i<20;i++){
   const n=Math.floor((i/20+this.time*.017)%1*(points.length-100));const tail=points.slice(n,n+65),warm=this.trajectory[n][0]>0;
   this.path(tail,this.color(warm,.78),1.15);this.point(tail[tail.length-1],2,warm,.95);
  }
 }
 draw(dt=0){
  this.time+=Math.min(dt,.05);this.pulseAge+=Math.min(dt,.05);this.pulseStrength=this.pulseAge<3?Math.exp(-this.pulseAge*1.3):0;
  this.background();if(this.mode==='vortex')this.drawVortex();else if(this.mode==='waves')this.drawWaves();else this.drawAttractor();
  if(this.pulseStrength>.025){const c=this.ctx;c.beginPath();c.ellipse(this.w/2,this.h*.49,15+this.pulseAge*95,8+this.pulseAge*48,-.1,0,TAU);c.strokeStyle=this.color(false,this.pulseStrength*.35);c.lineWidth=1;c.stroke()}
 }
}
global.ScientificField=ScientificField;
if(typeof document==='undefined')return;
const root=document.querySelector('[data-scientific-field]');if(!root)return;
const canvas=root.querySelector('canvas');let renderer;try{renderer=new ScientificField(canvas);if(!renderer.ctx)return}catch{return}
const reduce=global.matchMedia('(prefers-reduced-motion: reduce)'),pause=root.querySelector('[data-field-pause]'),pulse=root.querySelector('[data-field-pulse]');
const modes=root.querySelectorAll('[data-field-mode]'),caption=root.querySelector('[data-field-caption]');
const captions={vortex:'VORTEX · FLOW THROUGH A THREE-DIMENSIONAL FIELD',waves:'WAVES · INTERFERENCE ACROSS A CONTINUOUS SURFACE',attractor:'ATTRACTOR · A TRAJECTORY THROUGH A DYNAMICAL SYSTEM'};
let paused=false,visible=true,frame=null,last=0,target={x:0,y:0};
function active(){return !paused&&!reduce.matches&&visible&&!document.hidden}
function schedule(){if(active()&&frame===null)frame=global.requestAnimationFrame(tick)}
function tick(now){frame=null;if(!active()){last=0;return}const dt=last?(now-last)/1000:0;if(last&&dt<1/32){schedule();return}last=now;renderer.pointer.x+=(target.x-renderer.pointer.x)*.045;renderer.pointer.y+=(target.y-renderer.pointer.y)*.045;renderer.draw(dt);schedule()}
function refresh(){if(frame!==null)global.cancelAnimationFrame(frame);frame=null;last=0;renderer.draw();schedule()}
function resize(){const box=canvas.getBoundingClientRect();if(box.width<1||box.height<1)return;renderer.resize(box.width,box.height,Math.min(global.devicePixelRatio||1,1.75));refresh()}
function sync(){pause.textContent=paused?'Resume motion':'Pause motion';pause.setAttribute('aria-pressed',String(paused));pause.hidden=reduce.matches;pulse.hidden=reduce.matches;pulse.disabled=paused;root.querySelector('[data-field-hint]').textContent=reduce.matches?'STATIC VIEW · REDUCED MOTION':'MOVE TO EXPLORE · TAP TO SEND A PULSE';refresh()}
modes.forEach(button=>button.addEventListener('click',()=>{renderer.setMode(button.dataset.fieldMode);renderer.pulseAge=10;modes.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));caption.textContent=captions[renderer.mode];refresh()}));
pause.addEventListener('click',()=>{paused=!paused;sync()});
function sendPulse(){if(reduce.matches||paused)return;renderer.pulse();refresh()}
pulse.addEventListener('click',sendPulse);canvas.addEventListener('click',sendPulse);
canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||reduce.matches||paused)return;const b=canvas.getBoundingClientRect();target.x=(e.clientX-b.left)/b.width*2-1;target.y=(e.clientY-b.top)/b.height*2-1});canvas.addEventListener('pointerleave',()=>{target={x:0,y:0}});
reduce.addEventListener('change',()=>{target={x:0,y:0};if(reduce.matches){renderer.pointer={x:0,y:0};renderer.pulseAge=10}sync()});
document.addEventListener('visibilitychange',refresh);
if('IntersectionObserver' in global){const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;refresh()},{threshold:.05});observer.observe(root)}
if('ResizeObserver' in global)new ResizeObserver(resize).observe(canvas);else global.addEventListener('resize',resize);
root.classList.add('is-ready');root.querySelector('.field-controls').hidden=false;resize();sync();
})(typeof window!=='undefined'?window:globalThis);
