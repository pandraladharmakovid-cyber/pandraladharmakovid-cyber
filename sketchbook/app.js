(() => {
'use strict';
const SPREADS = [
  { id:'cover', title:'Cover', img:'pages/spread-0.png' },
  { id:'about', title:'The Builder', img:'pages/spread-1.png' },
  { id:'skills', title:'The Arsenal', img:'pages/spread-2.png' },
  { id:'featured', title:'Featured', img:'pages/spread-3.png' },
  { id:'shelf', title:'The Shelf', img:'pages/spread-4.png' },
  { id:'contact', title:'Correspondence', img:'pages/spread-5.png' },
];
const N = 32, BETA = 0.62, VDIV = 12;
const K_COMMIT=170, C_COMMIT=26, K_CANCEL=150, C_CANCEL=24;
const GH='https://github.com/pandraladharmakovid-cyber';
const MODALS = {
  builder:{title:'Pandrala Dharma Kovidh', kicker:'The Builder', body:`<p>Software-engineering student (B.Tech CSE · AI &amp; ML) and full-stack developer in Hyderabad, India. I build private in-browser AI, autonomous developer agents, security platforms, and production dashboards.</p><p><b>Education:</b> SMEC Hyderabad, 2025–2029 · Class XII MPC, Sri Chaitanya, 74%.</p><p><b>Mission:</b> internships, freelance builds, and collaborations in full-stack and AI engineering.</p>`, links:[['Portfolio','https://kovidh-portfolio.vercel.app'],['Résumé','https://app.bytexl.ai/resumes/shared/611026827939610b4d9529c4'],['byteXL','https://app.bytexl.ai/@pandraladharmakovidh']]},
  neuron:{title:'NEURON', kicker:'Plate 01 · AI / ML', body:`<p>A local-first machine-learning workbench in the browser. Organize examples, train bounded models on-device, compare versions, and export only when you choose.</p><p class="stack">TypeScript · TensorFlow.js · WebRTC · IndexedDB</p>`, links:[['Live demo','https://neuron-drab.vercel.app'],['Source',GH+'/NEURON']]},
  findout:{title:'Find_out', kicker:'Plate 02 · Security', body:`<p>AI digital-risk platform protecting brands from online impersonation. Scans social media and app stores, detecting look-alike names and cloned accounts.</p><p class="stack">AI · Digital Risk · Brand Protection</p>`, links:[['Live demo','https://findout-henna.vercel.app'],['Source',GH+'/Find_out']]},
  aitools:{title:'AI Tools Directory', kicker:'Plate 03 · Directory', body:`<p>A curated directory of 1,012 AI tools organized across 19 categories — a practical map of the AI tool landscape.</p><p class="stack">JavaScript · Curation · Search</p>`, links:[['Live demo','https://aitoolsdirectory.bytexl.live/'],['Source',GH+'/ai-tools-directory']]},
  agent:{title:'AI Developer Agent', kicker:'Plate 04', body:`<p>Autonomous AI-powered software engineering system: understands tasks, plans execution, analyzes files, and runs dev tools.</p><p class="stack">Agents · Automation</p>`, links:[['Live demo','https://ai-agent-developer.vercel.app'],['Source',GH+'/Ai-agent-developer']]},
  finsight:{title:'FinSight', kicker:'Plate 05 · Finance', body:`<p>Full-stack personal finance dashboard: accounts, transactions, budgets, savings goals, debts, and recurring payments.</p><p class="stack">React · Node · PostgreSQL</p>`, links:[['Live demo','https://finsight-gamma-three.vercel.app/'],['Source',GH+'/Finsight']]},
  editorx:{title:'EDITOR X', kicker:'Plate 06', body:`<p>Browser-based development environment — a full IDE experience, anywhere.</p><p class="stack">Web IDE</p>`, links:[['Live demo','https://editor-x-seven.vercel.app'],['Source',GH+'/editor-x']]},
  phishguard:{title:'PhishGuard', kicker:'Plate 07', body:`<p>Phishing simulation platform for security-awareness training and cybersecurity education.</p><p class="stack">Security · Education</p>`, links:[['Live demo','https://phishing-simulation-tool.bytexl.live/'],['Source',GH+'/phishguard-phishing-simulation']]},
  ridelink:{title:'RideLink', kicker:'Plate 08', body:`<p>Android app that simplifies booking Uber rides for others by turning shared location into pickup and destination data.</p><p class="stack">Android · Location</p>`, links:[['Source',GH+'/book-ride-for-others']]},
  unrestricted:{title:'Unrestricted AI Interface', kicker:'Plate 09', body:`<p>Experimental AI interface exploring the boundaries of AI-powered chat and interaction.</p><p class="stack">Experiment · AI</p>`, links:[['Source',GH+'/unrestricted-ai-interface']]},
  pydsa:{title:'Python DSA', kicker:'Plate 10', body:`<p>A steady practice of data structures and algorithms in Python — the quiet gym behind the shipped work.</p><p class="stack">Python · DSA</p>`, links:[['Source',GH+'/py-dsa-']]},
  arsenal:{title:'The Arsenal', kicker:'30 skills · one craft', body:`<p><b>Frontend:</b> React.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Web Design.</p><p><b>Backend:</b> Node.js, Express.js, REST API, PostgreSQL, SQL, Database Design.</p><p><b>AI / ML:</b> Artificial Intelligence, Machine Learning, LLMs, AI Agents, Generative AI, TensorFlow, API Integration.</p><p><b>Engineering:</b> Full Stack Development, Software Engineering, Git, GitHub, Debugging, Testing/QA.</p><p><b>Additional:</b> React Native, Expo, Python, Web Development, Supabase.</p>`, links:[['Portfolio skill tree','https://kovidh-portfolio.vercel.app'],['GitHub',GH]]},
};
const READ = [
 `<h2>Cover</h2><p><b>Pandrala Dharma Kovidh</b> — AI Developer · Software Builder · Code Artist. Hyderabad, India.</p><p>“AI is my co-pilot, not my autopilot.”</p>`,
 `<h2>The Builder</h2><p>Software-engineering student (B.Tech CSE · AI &amp; ML) and full-stack developer shipping real, working systems.</p><p>10 shipped projects · 30 skills · 1,012 AI tools indexed · HacXLerate 2026 Round 2.</p><p>B.Tech CSE (AI &amp; ML), SMEC Hyderabad, 2025–2029. Open to internships, freelance builds, and collaborations.</p>`,
 `<h2>The Arsenal</h2><p><b>Frontend:</b> React.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Web Design.</p><p><b>Backend:</b> Node.js, Express.js, REST API, PostgreSQL, SQL, Database Design.</p><p><b>AI / ML:</b> Artificial Intelligence, Machine Learning, LLMs, AI Agents, Generative AI, TensorFlow, API Integration.</p><p><b>Engineering:</b> Full Stack Development, Git, GitHub, Debugging, Testing/QA, React Native, Expo, Python, Supabase.</p>`,
 `<h2>Featured Plates</h2><p><b>NEURON</b> — local-first ML workbench in the browser.</p><p><b>Find_out</b> — AI digital-risk / brand impersonation detection.</p><p><b>AI Tools Directory</b> — 1,012 tools across 19 categories.</p>`,
 `<h2>The Shelf</h2><p>AI Developer Agent · FinSight · EDITOR X · PhishGuard · RideLink · Unrestricted AI Interface · Python DSA.</p><p>Every commit = one step forward. Every ship = one dream realized.</p>`,
 `<h2>Correspondence</h2><p>Portfolio · GitHub · LinkedIn · Instagram · Email · Phone.</p><p>Open to interesting projects, collaboration inquiries, and technical discussions.</p>`,
];
const params=new URLSearchParams(location.search);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse=matchMedia('(pointer: coarse)').matches;
const shotMode=params.has('shot');
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const easeInOut=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const pad=n=>String(n).padStart(2,'0');
const $=id=>document.getElementById(id);
const stage=$('stage'), bookFrame=$('bookFrame'), bookZoom=$('bookZoom'), bookTilt=$('bookTilt'),
 pages=$('pages'), cast=$('cast'), caption=$('caption'), capTitle=$('capTitle'), capFolio=$('capFolio'),
 hint=$('hint'), loupe=$('loupe'), plateIndex=$('plateIndex'), loading=$('loading'),
 canvas=$('curlCanvas'), hotLayer=$('hotspots'), modal=$('modal'), modalCard=$('modalCard');
const ctx=canvas.getContext('2d');
let index=0, turning=false, dragging=false, turnDir=1, p=0, vel=0, raf=0;
let zoom=1, loupeOn=false, introActive=false, introCancelled=false;
let pagesW=0, pagesH=0, pw=0, sw=0, DPR=1;
let frontSpread=0, backSpread=0;
const IMAGES=[]; let HOTSPOTS=[];
const baseCanvas=document.createElement('canvas'); baseCanvas.width=1760; baseCanvas.height=1240;
const baseCtx=baseCanvas.getContext('2d');

function compositeBase(li,ri){
  const L=IMAGES[li], R=IMAGES[ri]; if(!L||!R) return;
  baseCtx.clearRect(0,0,1760,1240);
  baseCtx.drawImage(L,0,0,880,1240,0,0,880,1240);
  baseCtx.drawImage(R,880,0,880,1240,880,0,880,1240);
  pages.style.backgroundImage=`url(${baseCanvas.toDataURL('image/png')})`;
}
function layout(){
  pagesW=pages.clientWidth; pagesH=pages.clientHeight; pw=pagesW/2; sw=pw/N;
  DPR=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.round(pagesW*DPR); canvas.height=Math.round(pagesH*DPR);
  canvas.style.width=pagesW+'px'; canvas.style.height=pagesH+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  if(turning) drawCurl(p);
  renderHotspots(); sizeLoupe();
}
function setBase(i){ compositeBase(i,i); loupe.style.backgroundImage=`url('${SPREADS[i].img}')`; }
function updateUI(){
  capTitle.textContent=SPREADS[index].title;
  capFolio.textContent=`${pad(index+1)} / ${pad(SPREADS.length)}`;
  [...plateIndex.children].forEach((b,i)=>b.classList.toggle('active',i===index));
  $('btnPrev').disabled=index===0; $('btnNext').disabled=index===SPREADS.length-1;
  renderHotspots();
}
// ---- Canvas page curl ----
function proj(x,y,z){ const f=pagesW*1.55; const s=f/(f-z); return {x:pagesW/2+x*s, y:pagesH/2+(y-pagesH/2)*s, s}; }
function drawCurl(t){
  ctx.clearRect(0,0,pagesW,pagesH);
  const F=IMAGES[frontSpread], B=IMAGES[backSpread]; if(!F||!B) return;
  const th=turnDir===1?Math.PI*t:Math.PI*(1-t);
  const beta=BETA*Math.sin(Math.PI*t), tt=th+beta, td=2*beta/N;
  const xs=[0], zs=[0]; let x=0,z=0;
  for(let i=0;i<N;i++){ const a=tt-(i+.5)*td; x+=sw*Math.cos(a); z+=sw*Math.sin(a); xs.push(x); zs.push(z); }
  const shade=Math.sin(Math.PI*t);
  // cast shadow
  ctx.save(); ctx.filter='blur(14px)'; ctx.fillStyle=`rgba(0,0,0,${(shade*.30).toFixed(3)})`;
  ctx.beginPath();
  for(let i=0;i<=N;i++){ const q=proj(xs[i],0,zs[i]); i?ctx.lineTo(q.x+6,q.y+10):ctx.moveTo(q.x+6,q.y+10); }
  for(let i=N;i>=0;i--){ const q=proj(xs[i],pagesH,zs[i]); ctx.lineTo(q.x+6,q.y+10); }
  ctx.closePath(); ctx.fill(); ctx.restore();
  const swSrc=880/N, shSrc=1240, sliceH=shSrc/VDIV, ov=0.7;
  for(let i=0;i<N;i++){
    const a=tt-(i+.5)*td, c=Math.cos(a), lit=Math.abs(c), front=c>=0;
    const img=front?F:B;
    const sx=front?880+i*swSrc:880-(i+1)*swSrc;
    for(let j=0;j<VDIV;j++){
      const y0=pagesH*j/VDIV, y1=pagesH*(j+1)/VDIV;
      const TL=proj(xs[i],y0,zs[i]), TR=proj(xs[i+1],y0,zs[i+1]), BL=proj(xs[i],y1,zs[i]);
      const sy=Math.max(0,j*sliceH-ov), sh=Math.min(shSrc-sy,sliceH+ov*2);
      ctx.save();
      if(front){
        ctx.transform((TR.x-TL.x)/swSrc,(TR.y-TL.y)/swSrc,(BL.x-TL.x)/sliceH,(BL.y-TL.y)/sliceH,TL.x,TL.y);
      } else {
        ctx.transform(-(TR.x-TL.x)/swSrc,-(TR.y-TL.y)/swSrc,(BL.x-TL.x)/sliceH,(BL.y-TL.y)/sliceH,TR.x,TR.y);
      }
      ctx.drawImage(img,sx,sy,swSrc,sh,0,(sy-j*sliceH),swSrc,sh);
      ctx.restore();
    }
    // shading overlay
    const TL=proj(xs[i],0,zs[i]), TR=proj(xs[i+1],0,zs[i+1]), BR=proj(xs[i+1],pagesH,zs[i+1]), BL=proj(xs[i],pagesH,zs[i]);
    const alpha=(1-lit)*.40;
    const g=ctx.createLinearGradient(TL.x,TL.y,TR.x,TR.y);
    g.addColorStop(0,`rgba(0,0,0,${(alpha*1.15).toFixed(3)})`);
    g.addColorStop(.45,`rgba(255,255,255,${(lit*.07).toFixed(3)})`);
    g.addColorStop(1,`rgba(0,0,0,${(alpha*.85).toFixed(3)})`);
    ctx.fillStyle=g; ctx.beginPath(); ctx.moveTo(TL.x,TL.y); ctx.lineTo(TR.x,TR.y); ctx.lineTo(BR.x,BR.y); ctx.lineTo(BL.x,BL.y); ctx.closePath(); ctx.fill();
  }
  // free-edge thickness
  const eTop=proj(xs[N],0,zs[N]), eBot=proj(xs[N],pagesH,zs[N]);
  const dx=(turnDir===1?1:-1)*Math.max(1.5,3*Math.abs(Math.cos(th)));
  ctx.fillStyle='rgba(214,204,182,.95)';
  ctx.beginPath(); ctx.moveTo(eTop.x,eTop.y); ctx.lineTo(eTop.x+dx,eTop.y+1); ctx.lineTo(eBot.x+dx,eBot.y-1); ctx.lineTo(eBot.x,eBot.y); ctx.closePath(); ctx.fill();
  ctx.strokeStyle='rgba(60,45,25,.35)'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(eTop.x,eTop.y); ctx.lineTo(eBot.x,eBot.y); ctx.stroke();
}
function renderFrame(t){
  p=clamp(t,0,1);
  drawCurl(p);
  const shade=Math.sin(Math.PI*p);
  cast.style.opacity=(shade*.25).toFixed(3);
  const th=turnDir===1?Math.PI*p:Math.PI*(1-p);
  cast.style.transform=`scaleX(${Math.max(.12,Math.abs(Math.cos(th))).toFixed(3)})`;
  const op=p<.5?1-smooth(.10,.38,p):smooth(.56,.86,p);
  caption.style.opacity=op.toFixed(3);
  if(turning){ const ti=p<.5?index:clamp(index+turnDir,0,SPREADS.length-1); capTitle.textContent=SPREADS[ti].title; capFolio.textContent=`${pad(ti+1)} / ${pad(SPREADS.length)}`; }
}
function setupTurn(dir){
  const target=index+dir; if(target<0||target>=SPREADS.length) return false;
  turnDir=dir;
  frontSpread=dir===1?index:index-1;
  backSpread=dir===1?index+1:index;
  compositeBase(dir===1?index:index-1, dir===1?index+1:index);
  cast.className='cast '+(dir===1?'next':'prev');
  canvas.style.display='block'; hotLayer.style.display='none';
  turning=true; renderFrame(0); return true;
}
function finishTurn(commit){
  if(commit) index=clamp(index+turnDir,0,SPREADS.length-1);
  setBase(index); canvas.style.display='none'; ctx.clearRect(0,0,pagesW,pagesH);
  turning=false; dragging=false; caption.style.opacity=1; updateUI(); parkLoupe();
}
function springTo(target,k,c,v0){
  cancelAnimationFrame(raf);
  if(reduced){ renderFrame(target); finishTurn(target===1); return; }
  vel=v0||0; let last=performance.now();
  const step=now=>{ const dt=Math.min(.032,(now-last)/1000); last=now;
    const a=-k*(p-target)-c*vel; vel+=a*dt; p+=vel*dt;
    if(p<0){p=0;vel=0;} if(p>1){p=1;vel=0;}
    renderFrame(p);
    if(Math.abs(p-target)<.002&&Math.abs(vel)<.02){ renderFrame(target); finishTurn(target===1); return; }
    raf=requestAnimationFrame(step); };
  raf=requestAnimationFrame(step);
}
function turn(dir){ if(turning||dragging||introActive) return; if(!setupTurn(dir)) return; hint.style.opacity=0; springTo(1,K_COMMIT,C_COMMIT,2.4); }
function goTo(i){ if(i===index||turning||introActive) return; if(Math.abs(i-index)===1){turn(Math.sign(i-index));return;} index=i; setBase(index); updateUI(); parkLoupe(); }
// ---- Hotspots ----
function renderHotspots(){
  hotLayer.innerHTML='';
  if(turning||shotMode||!HOTSPOTS[index]) { hotLayer.style.display='none'; return; }
  hotLayer.style.display='block';
  for(const h of HOTSPOTS[index].items){
    const b=document.createElement('button'); b.className='hotspot'; b.type='button';
    b.style.left=h.x+'%'; b.style.top=h.y+'%'; b.style.width=h.w+'%'; b.style.height=h.h+'%';
    b.setAttribute('aria-label',h.label||'Open');
    b.title=h.label||'';
    b.addEventListener('pointerdown',e=>e.stopPropagation());
    b.addEventListener('click',e=>{ e.stopPropagation();
      if(h.href){ if(/^(mailto:|tel:)/.test(h.href)) location.href=h.href; else window.open(h.href,'_blank','noopener'); }
      else if(h.modal){ openModal(h.modal); }
    });
    hotLayer.appendChild(b);
  }
}
function openModal(key){
  const m=MODALS[key]; if(!m) return;
  modalCard.innerHTML=`<div class="m-kicker">${m.kicker||''}</div><h2>${m.title}</h2><div class="m-body">${m.body}</div><div class="m-links">${(m.links||[]).map(([t,u])=>`<a href="${u}" target="_blank" rel="noopener">${t} ↗</a>`).join('')}</div><button class="m-close" aria-label="Close">×</button>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  modalCard.querySelector('.m-close').onclick=closeModal;
}
function openRead(){
  modalCard.innerHTML=`<div class="m-kicker">Readable plate · ${pad(index+1)}</div><div class="m-body read">${READ[index]}</div><div class="m-links"><a href="${GH}" target="_blank" rel="noopener">GitHub ↗</a><a href="https://kovidh-portfolio.vercel.app" target="_blank" rel="noopener">Portfolio ↗</a></div><button class="m-close" aria-label="Close">×</button>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  modalCard.querySelector('.m-close').onclick=closeModal;
}
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
// ---- Drag / tilt / zoom / loupe ----
let startX=0,startY=0,lastT=0,lastP=0,moved=0;
bookFrame.addEventListener('pointerdown',e=>{
  if(shotMode||turning||modal.classList.contains('open')) return;
  if(introActive){introCancelled=true;return;}
  const r=pages.getBoundingClientRect();
  const dir=e.clientX<r.left+r.width/2?-1:1;
  if(index+dir<0||index+dir>=SPREADS.length) return;
  e.preventDefault(); setupTurn(dir);
  dragging=true; moved=0; startX=e.clientX; startY=e.clientY; lastT=performance.now(); lastP=0; vel=0;
  bookFrame.setPointerCapture(e.pointerId); hint.style.opacity=0;
});
stage.addEventListener('pointermove',e=>{
  if(dragging){ const dx=e.clientX-startX, dy=e.clientY-startY; moved=Math.max(moved,Math.abs(dx),Math.abs(dy));
    const np=clamp(turnDir===1?-dx/pw:dx/pw,0,1);
    const now=performance.now(), dt=(now-lastT)/1000; if(dt>0){const inst=(np-lastP)/dt; vel=vel*.7+inst*.3;}
    lastP=np; lastT=now; renderFrame(np); return; }
  if(shotMode) return;
  const r=bookFrame.getBoundingClientRect();
  const nx=(e.clientX-r.left)/r.width-.5, ny=(e.clientY-r.top)/r.height-.5;
  bookTilt.style.transform=`rotateX(${clamp(-ny*9,-4.5,4.5)}deg) rotateY(${clamp(nx*14,-7,7)}deg)`;
  if(loupeOn) moveLoupe(e);
});
function endDrag(e){ if(!dragging) return; dragging=false; try{bookFrame.releasePointerCapture(e.pointerId);}catch(_){}
  if(moved<6) springTo(1,K_COMMIT,C_COMMIT,2.0);
  else if(p>.42||vel>1.1) springTo(1,K_COMMIT,C_COMMIT,vel);
  else springTo(0,K_CANCEL,C_CANCEL,vel); }
bookFrame.addEventListener('pointerup',endDrag); bookFrame.addEventListener('pointercancel',endDrag);
stage.addEventListener('pointerleave',()=>{ if(!dragging){bookTilt.style.transform='rotateX(0deg) rotateY(0deg)'; parkLoupe();} });
function setZoom(z){ zoom=clamp(z,.9,1.6); bookZoom.style.transform=`scale(${zoom})`; }
$('btnZoomIn').onclick=()=>setZoom(zoom*1.16); $('btnZoomOut').onclick=()=>setZoom(zoom/1.16);
$('btnZoomReset').onclick=()=>{setZoom(1); bookTilt.style.transform='rotateX(0deg) rotateY(0deg)';};
bookFrame.addEventListener('dblclick',()=>{setZoom(1); bookTilt.style.transform='rotateX(0deg) rotateY(0deg)';});
stage.addEventListener('wheel',e=>{ if(e.ctrlKey){e.preventDefault(); setZoom(zoom*(e.deltaY<0?1.08:.92));} },{passive:false});
function sizeLoupe(){ const s=clamp(pagesW*.235,165,262); loupe.style.width=s+'px'; loupe.style.height=s+'px'; }
function loupeBg(x,y){ const s=parseFloat(loupe.style.width)||220, mag=2.3; loupe.style.backgroundSize=`${pagesW*mag}px ${pagesH*mag}px`; loupe.style.backgroundPosition=`${-(x*pagesW*mag-s/2)}px ${-(y*pagesH*mag-s/2)}px`; }
function moveLoupe(e){ const r=pages.getBoundingClientRect(); const x=clamp((e.clientX-r.left)/r.width,0,1), y=clamp((e.clientY-r.top)/r.height,0,1); loupe.style.display='block'; const s=parseFloat(loupe.style.width)||220; loupe.style.left=clamp(e.clientX+18,8,innerWidth-s-8)+'px'; loupe.style.top=clamp(e.clientY+18,8,innerHeight-s-8)+'px'; loupeBg(x,y); }
function parkLoupe(){ if(!loupeOn){loupe.style.display='none';return;} const s=parseFloat(loupe.style.width)||220; loupe.style.display='block'; loupe.style.left=(innerWidth*.88-s/2)+'px'; loupe.style.top=(innerHeight*.855-s/2)+'px'; loupeBg(.88,.855); }
$('btnLoupe').onclick=()=>{ loupeOn=!loupeOn; $('btnLoupe').setAttribute('aria-pressed',String(loupeOn)); loupeOn?parkLoupe():loupe.style.display='none'; };
$('btnRead').onclick=openRead;
$('btnPrev').onclick=()=>turn(-1); $('btnNext').onclick=()=>turn(1);
addEventListener('keydown',e=>{
  if(shotMode||modal.classList.contains('open')) return;
  if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();turn(1);}
  else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();turn(-1);}
  else if(e.key==='Home')goTo(0); else if(e.key==='End')goTo(SPREADS.length-1);
  else if(e.key==='l'||e.key==='L')$('btnLoupe').click();
  else if(e.key==='r'||e.key==='R')openRead();
  else if(e.key==='+'||e.key==='=')setZoom(zoom*1.16); else if(e.key==='-')setZoom(zoom/1.16); else if(e.key==='0')setZoom(1);
});
SPREADS.forEach((s,i)=>{ const b=document.createElement('button'); b.className='plate-dot'; b.setAttribute('aria-label',`Go to ${s.title}`); b.innerHTML=`<span class="lbl">${pad(i+1)} ${s.title}</span><span class="dot"></span>`; b.onclick=()=>goTo(i); plateIndex.appendChild(b); });
// ---- Intro / shot / boot ----
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function tween(from,to,dur){ return new Promise(res=>{ const t0=performance.now(); const step=now=>{ if(introCancelled){res();return;} const t=clamp((now-t0)/dur,0,1); renderFrame(from+(to-from)*easeInOut(t)); t<1?requestAnimationFrame(step):res(); }; requestAnimationFrame(step); }); }
async function riffle(){ if(reduced||coarse||params.has('nointro')||shotMode) return; introActive=true; const dirs=[1,1,-1,-1];
  for(let i=0;i<dirs.length;i++){ if(introCancelled) break; if(!setupTurn(dirs[i])) break; const bell=Math.sin(Math.PI*i/(dirs.length-1)); await tween(0,1,(0.26-0.19*bell)*1000); if(introCancelled){finishTurn(false);break;} finishTurn(true); await wait(35); }
  introActive=false; if(index!==0){index=0;setBase(0);updateUI();} }
function initShot(){ document.body.classList.add('shot');
  let i=clamp(parseInt(params.get('shot')||'0',10),0,SPREADS.length-1);
  const dir=params.get('dir')==='prev'?-1:1;
  if(dir===1&&i>=SPREADS.length-1)i=SPREADS.length-2; if(dir===-1&&i<=0)i=1;
  index=i; setBase(index); updateUI(); layout();
  setupTurn(dir); renderFrame(clamp(parseFloat(params.get('t')||'0'),0,1));
  window.__shotReady=true; }
function preload(){ return Promise.all(SPREADS.map((s,i)=>new Promise(res=>{ const im=new Image(); im.onload=()=>{IMAGES[i]=im;res();}; im.onerror=res; im.src=s.img; }))); }
Promise.all([preload(), fetch('hotspots.json').then(r=>r.json()).catch(()=>[]) ]).then(([,hot])=>{
  HOTSPOTS=hot||[]; loading.style.display='none'; layout(); setBase(0); updateUI();
  new ResizeObserver(layout).observe(pages);
  if(shotMode){initShot();return;}
  if(params.has('plate')){ const i=clamp(parseInt(params.get('plate'),10),0,SPREADS.length-1); index=i; setBase(i); updateUI(); }
  setZoom(1.04);
  riffle();
});
})();
