#!/usr/bin/env python3
"""Render portfolio sketchbook spreads + clickable hotspot map."""
from pathlib import Path
import subprocess, os

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'sketchbook' / 'pages'
OUT.mkdir(parents=True, exist_ok=True)

CSS = r'''
@font-face{font-family:'Instrument Serif';src:url('../sketchbook/fonts/InstrumentSerif-Regular.ttf') format('truetype');font-weight:400;font-style:normal}
@font-face{font-family:'Newsreader';src:url('../sketchbook/fonts/Newsreader.ttf') format('truetype');font-weight:200 700;font-style:normal}
@font-face{font-family:'JetBrains Mono';src:url('../sketchbook/fonts/JetBrainsMono-Regular.ttf') format('truetype');font-weight:400}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:transparent}
.spread{width:1760px;height:1240px;position:relative;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;font-family:'Newsreader',Georgia,serif;color:#221c15;background:transparent}
.page{position:relative;overflow:hidden;background-color:#efe9dc;background:url('../sketchbook/assets/paper.jpg') center/cover no-repeat;padding:78px 72px 74px}
.page.left{border-radius:16px 3px 3px 16px;box-shadow:inset -30px 0 48px -24px rgba(58,44,26,.42), inset 0 0 70px rgba(154,106,62,.08)}
.page.right{border-radius:3px 16px 16px 3px;box-shadow:inset 30px 0 48px -24px rgba(58,44,26,.42), inset 0 0 70px rgba(154,106,62,.08)}
.page::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(255,252,244,.16),rgba(43,39,33,.03) 65%,rgba(43,39,33,.08));mix-blend-mode:multiply}
.page.left::before{content:"";position:absolute;right:0;top:0;bottom:0;width:16px;background:linear-gradient(90deg,rgba(43,39,33,0),rgba(43,39,33,.20));pointer-events:none;z-index:3}
.page.right::before{content:"";position:absolute;left:0;top:0;bottom:0;width:16px;background:linear-gradient(270deg,rgba(43,39,33,0),rgba(43,39,33,.20));pointer-events:none;z-index:3}
.edge{position:absolute;top:10px;bottom:10px;width:9px;pointer-events:none;opacity:.5;z-index:2}
.edge.l{left:5px;background:repeating-linear-gradient(180deg,rgba(43,39,33,.10) 0 2px,rgba(255,252,244,.35) 2px 4px)}
.edge.r{right:5px;background:repeating-linear-gradient(180deg,rgba(43,39,33,.10) 0 2px,rgba(255,252,244,.35) 2px 4px)}
.kicker{font-family:'JetBrains Mono',monospace;font-size:18px;letter-spacing:.26em;text-transform:uppercase;color:rgba(34,28,21,.62);margin-bottom:22px}
h1{font-family:'Instrument Serif',serif;font-weight:400;font-size:104px;line-height:1.0;letter-spacing:.01em;margin-bottom:22px}
h2{font-family:'Instrument Serif',serif;font-weight:400;font-size:66px;line-height:1.05;margin-bottom:18px}
h3{font-family:'Instrument Serif',serif;font-weight:400;font-size:44px;line-height:1.08;margin-bottom:8px}
p{font-size:28px;line-height:1.55;font-weight:380;color:rgba(34,28,21,.90);max-width:60ch}
.small{font-size:23px;line-height:1.5;color:rgba(34,28,21,.78)}
.mono{font-family:'JetBrains Mono',monospace}
.rule{height:1px;background:rgba(34,28,21,.22);margin:24px 0}
.seal{width:132px;height:132px;border-radius:50%;background:radial-gradient(circle at 38% 32%, #f0453e, #c81e18 70%);color:#fff7f0;display:flex;align-items:center;justify-content:center;font-family:'Instrument Serif',serif;font-size:56px;letter-spacing:.04em;box-shadow:0 12px 26px rgba(160,20,16,.34), inset 0 0 0 6px rgba(255,247,240,.16), inset 0 -8px 16px rgba(90,8,6,.30);transform:rotate(-6deg)}
.botanic{position:absolute;right:-24px;bottom:-16px;width:520px;opacity:.62;mix-blend-mode:multiply;pointer-events:none}
.botanic.top{right:auto;left:-34px;top:-26px;bottom:auto;transform:scaleX(-1) rotate(7deg);opacity:.48}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
.chip{font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:.03em;border:1px solid rgba(34,28,21,.32);border-radius:999px;padding:7px 14px;background:rgba(255,252,244,.5);color:rgba(34,28,21,.86)}
.group{margin-bottom:24px}
.group .label{font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:.2em;text-transform:uppercase;color:#8a5a30;margin-bottom:9px}
.plate{border-top:1px solid rgba(34,28,21,.22);padding:18px 0 16px}
.plate:last-child{border-bottom:1px solid rgba(34,28,21,.22)}
.plate .n{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.18em;color:rgba(34,28,21,.52);margin-bottom:6px}
.plate .desc{font-size:23px;line-height:1.45;color:rgba(34,28,21,.84);margin-top:7px;max-width:56ch}
.plate .meta{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.05em;color:#8a5a30;margin-top:8px}
.hot{cursor:pointer;position:relative}
.hot::after{content:"";position:absolute;inset:-6px -8px;border-radius:10px;border:1.5px dashed rgba(138,90,48,0);transition:border-color .15s,background .15s;pointer-events:none}
.hot:hover::after{border-color:rgba(138,90,48,.55);background:rgba(154,106,62,.07)}
.shot-wrap{position:relative;margin:10px 0 8px}
.shot{display:block;width:100%;height:220px;object-fit:cover;object-position:top center;border:1px solid rgba(34,28,21,.26);box-shadow:0 10px 22px rgba(34,28,21,.24);transform:rotate(-.35deg)}
.tape{position:absolute;width:86px;height:26px;background:rgba(232,222,192,.72);box-shadow:0 2px 5px rgba(34,28,21,.14);top:-11px;left:26px;transform:rotate(-5deg);z-index:2}
.tape.r{left:auto;right:26px;transform:rotate(5deg)}
.photo{width:270px;background:#fffdf8;padding:12px 12px 42px;box-shadow:0 14px 30px rgba(34,28,21,.28);transform:rotate(-2deg);margin-top:22px;position:relative}
.photo img{display:block;width:100%;height:auto;filter:saturate(.98) contrast(1.03)}
.photo .cap{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:rgba(34,28,21,.62)}
.photo .tape{left:50%;margin-left:-43px;top:-12px}
.statgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px}
.stat{border:1px solid rgba(34,28,21,.22);border-radius:14px;padding:18px 20px;background:rgba(255,252,244,.46)}
.stat b{display:block;font-family:'Instrument Serif',serif;font-size:50px;font-weight:400;line-height:1}
.stat span{font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:rgba(34,28,21,.62)}
.linklist{list-style:none;margin-top:14px}
.linklist li{display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid rgba(34,28,21,.18);padding:15px 0;font-size:25px}
.linklist .k{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:rgba(34,28,21,.58)}
.linklist .v{color:rgba(34,28,21,.92);text-align:right}
.quote{font-family:'Instrument Serif',serif;font-size:44px;line-height:1.22;color:rgba(34,28,21,.90);margin-top:22px}
.foot{position:absolute;left:72px;right:72px;bottom:30px;display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:rgba(34,28,21,.48);z-index:3}
.open-link{display:inline-block;margin-top:22px;font-family:'JetBrains Mono',monospace;font-size:18px;letter-spacing:.14em;text-transform:uppercase;color:#8a5a30;border-bottom:1.5px solid rgba(138,90,48,.5);padding-bottom:3px}
'''

def page(side, inner, foot=None, botanic=None):
    b = f'<img class="botanic {botanic[1]}" src="../sketchbook/assets/botanic-clean.png" alt="">' if botanic else ''
    f = f'<div class="foot"><span>{foot[0]}</span><span>{foot[1]}</span></div>' if foot else ''
    return f'<div class="page {side}"><span class="edge {"l" if side=="left" else "r"}"></span>{b}{inner}{f}</div>'

def shot(src):
    return f'<div class="shot-wrap"><span class="tape"></span><span class="tape r"></span><img class="shot" src="../sketchbook/assets/projects/{src}" alt=""></div>'

def plate(n, title, desc, meta, modal, shot_src=None):
    s = shot(shot_src) if shot_src else ''
    m = f'<div class="meta">{meta}</div>' if meta else ''
    return f'<div class="plate hot" data-modal="{modal}" data-label="{title}"><div class="n">{n}</div><h3>{title}</h3>{s}<div class="desc">{desc}</div>{m}</div>'

spreads = []

left = '''
<div class="kicker">Portfolio Sketchbook · Vol. 01</div>
<h1>Pandrala<br>Dharma<br>Kovidh</h1>
<div class="rule"></div>
<p class="small mono">AI DEVELOPER · SOFTWARE BUILDER · CODE ARTIST</p>
<p class="small" style="margin-top:16px">Hyderabad, India — building private AI, autonomous agents, and production web apps.</p>
<span class="open-link hot" data-href="https://kovidh-portfolio.vercel.app" data-label="Open portfolio">Open portfolio ↗</span>
'''
right = '''
<div style="display:flex;justify-content:flex-end"><div class="seal">KD</div></div>
<h2 style="margin-top:54px">Ideas, turned<br>into working systems.</h2>
<p>A sketchbook of shipped projects, tools, and field notes. Turn the page to open the work.</p>
<div class="quote">“AI is my co-pilot,<br>not my autopilot.”</div>
'''
spreads.append(('cover', page('left', left, ('Pandrala Dharma Kovidh','01')), page('right', right, ('Portfolio','kovidh-portfolio.vercel.app'), ('','top'))))

left = '''
<div class="kicker">01 · The Builder</div>
<h2>A builder at the threshold of AI and the web.</h2>
<p>I’m a software-engineering student (B.Tech CSE · AI &amp; ML) and a full-stack developer who likes shipping real, working systems — not mockups.</p>
<div class="photo hot" data-modal="builder" data-label="About Pandrala Dharma Kovidh"><span class="tape"></span><img src="../sketchbook/assets/portrait.png" alt="Pandrala Dharma Kovidh"><span class="cap">Pandrala Dharma Kovidh</span></div>
'''
right = '''
<div class="kicker">Field Notes</div>
<p style="margin-bottom:4px">My work spans private in-browser AI, autonomous developer agents, security platforms, and production dashboards. I care about clean architecture, evidence-based AI, and performance under real constraints.</p>
<div class="statgrid">
  <div class="stat"><b>10</b><span>Shipped projects</span></div>
  <div class="stat"><b>30</b><span>Skills in the tree</span></div>
  <div class="stat"><b>1,012</b><span>AI tools indexed</span></div>
  <div class="stat"><b>R2</b><span>HacXLerate 2026</span></div>
</div>
<div class="rule"></div>
<h3>Education</h3>
<p class="small">B.Tech CSE (AI &amp; ML) — SMEC Hyderabad, 2025–2029.<br>Class XII MPC — Sri Chaitanya, 74%.</p>
<h3 style="margin-top:18px">Current mission</h3>
<p class="small">Open to internships, freelance builds, and collaborations in full-stack and AI engineering.</p>
'''
spreads.append(('about', page('left', left, ('About','02')), page('right', right, ('Field Notes','Hyderabad, IN'))))

left = '''
<div class="kicker">02 · The Arsenal</div>
<h2 class="hot" data-modal="arsenal" data-label="Open the full skill list">Tools of the craft.</h2>
<div class="group"><div class="label">Frontend</div><div class="chips"><span class="chip">React.js</span><span class="chip">JavaScript</span><span class="chip">TypeScript</span><span class="chip">HTML5</span><span class="chip">CSS3</span><span class="chip">Responsive Web Design</span></div></div>
<div class="group"><div class="label">Backend</div><div class="chips"><span class="chip">Node.js</span><span class="chip">Express.js</span><span class="chip">REST API</span><span class="chip">PostgreSQL</span><span class="chip">SQL</span><span class="chip">Database Design</span></div></div>
<div class="group"><div class="label">AI / ML</div><div class="chips"><span class="chip">Artificial Intelligence</span><span class="chip">Machine Learning</span><span class="chip">LLMs</span><span class="chip">AI Agents</span><span class="chip">Generative AI</span><span class="chip">TensorFlow</span><span class="chip">API Integration</span></div></div>
'''
right = '''
<div class="kicker hot" data-modal="arsenal" data-label="Open the full skill list">Branches · tap to read</div>
<div class="group"><div class="label">Software Engineering</div><div class="chips"><span class="chip">Full Stack Development</span><span class="chip">Software Engineering</span><span class="chip">Git</span><span class="chip">GitHub</span><span class="chip">Debugging</span><span class="chip">Testing/QA</span></div></div>
<div class="group"><div class="label">Additional</div><div class="chips"><span class="chip">React Native</span><span class="chip">Expo</span><span class="chip">Python</span><span class="chip">Web Development</span><span class="chip">Supabase</span></div></div>
<div class="rule"></div>
<h3>How I work</h3>
<p class="small">Think deeply. Build clean. Ship anyway. Every project starts with a problem worth solving; every commit is one step forward.</p>
<div class="quote">Done &gt; perfect.<br>Users &gt; features.<br>Impact &gt; ideas.</div>
'''
spreads.append(('skills', page('left', left, ('Skills','03')), page('right', right, ('The Arsenal','30 names'))))

left = f'''
<div class="kicker">03 · Featured Plates</div>
{plate('PLATE 01 · AI / ML','NEURON','A local-first machine-learning workbench in the browser. Organize examples, train bounded models on-device, compare versions, and export only when you choose.','TypeScript · TensorFlow.js · WebRTC · IndexedDB','neuron','neuron.jpg')}
{plate('PLATE 02 · SECURITY','Find_out','AI digital-risk platform protecting brands from online impersonation. Scans social media and app stores, detecting look-alike names and cloned accounts.','AI · Digital Risk · Brand Protection','findout','findout.jpg')}
'''
right = f'''
<div class="kicker">Main Doors</div>
{plate('PLATE 03 · DIRECTORY','AI Tools Directory','A curated directory of 1,012 AI tools organized across 19 categories — a practical map of the AI tool landscape.','JavaScript · Curation · Search','aitools','aitools.jpg')}
<div class="rule"></div>
<p class="small">These are the three big doors of the portfolio: open them to step inside the stack, the story, and the live build.</p>
<div class="quote">Ten doors.<br>Ten worlds I built.</div>
'''
spreads.append(('featured', page('left', left, ('Featured','04')), page('right', right, ('NEURON · Find_out · AI Tools','Live builds'))))

left = f'''
<div class="kicker">04 · The Shelf</div>
{plate('PLATE 04','AI Developer Agent','Autonomous AI-powered software engineering system: understands tasks, plans execution, analyzes files, and runs dev tools.','Agents · Automation','agent')}
{plate('PLATE 05 · FINANCE','FinSight','Full-stack personal finance dashboard: accounts, transactions, budgets, savings goals, debts, and recurring payments.','React · Node · PostgreSQL','finsight')}
{plate('PLATE 06','EDITOR X','Browser-based development environment — a full IDE experience, anywhere.','Web IDE','editorx')}
{plate('PLATE 07','PhishGuard','Phishing simulation platform for security-awareness training and cybersecurity education.','Security · Education','phishguard')}
'''
right = f'''
<div class="kicker">More Plates</div>
{plate('PLATE 08','RideLink','Android app that simplifies booking Uber rides for others by turning shared location into pickup and destination data.','Android · Location','ridelink')}
{plate('PLATE 09','Unrestricted AI Interface','Experimental AI interface exploring the boundaries of AI-powered chat and interaction.','Experiment · AI','unrestricted')}
{plate('PLATE 10','Python DSA','A steady practice of data structures and algorithms in Python — the quiet gym behind the shipped work.','Python · DSA','pydsa')}
<div class="rule"></div>
<p class="small mono">EVERY COMMIT = ONE STEP FORWARD · EVERY SHIP = ONE DREAM REALIZED</p>
'''
spreads.append(('shelf', page('left', left, ('Projects','05')), page('right', right, ('The Shelf','10 repositories'))))

left = '''
<div class="kicker">05 · Correspondence</div>
<h2>Let’s build<br>what’s next.</h2>
<ul class="linklist">
  <li class="hot" data-href="https://kovidh-portfolio.vercel.app" data-label="Portfolio"><span class="k">Portfolio</span><span class="v">kovidh-portfolio.vercel.app</span></li>
  <li class="hot" data-href="https://github.com/pandraladharmakovid-cyber" data-label="GitHub"><span class="k">GitHub</span><span class="v">pandraladharmakovid-cyber</span></li>
  <li class="hot" data-href="https://www.linkedin.com/in/pandrala-dharma-kovidh-0b1b36357/" data-label="LinkedIn"><span class="k">LinkedIn</span><span class="v">Pandrala Dharma Kovidh</span></li>
  <li class="hot" data-href="https://www.instagram.com/pandraladharmakovidh/" data-label="Instagram"><span class="k">Instagram</span><span class="v">@pandraladharmakovidh</span></li>
  <li class="hot" data-href="mailto:pandraladharmakovidh@gmail.com" data-label="Email"><span class="k">Email</span><span class="v">pandraladharmakovidh@gmail.com</span></li>
  <li class="hot" data-href="tel:+917989509001" data-label="Phone"><span class="k">Phone</span><span class="v">+91 79895 09001</span></li>
</ul>
'''
right = '''
<div class="kicker">Colophon</div>
<p>This profile is bound as a sketchbook: paper, ink, and a few moving pages. The work inside is real — repositories, live demos, and field notes from Hyderabad.</p>
<div class="rule"></div>
<h3>Elsewhere</h3>
<p class="small">byteXL · HackerRank · HacXLerate 2026<br>Open to interesting projects, collaboration inquiries, and technical discussions.</p>
<div class="quote">See you in the<br>next commit.</div>
<div style="display:flex;justify-content:flex-end;margin-top:30px"><div class="seal">KD</div></div>
'''
spreads.append(('contact', page('left', left, ('Contact','06'), ('','top')), page('right', right, ('Colophon','EOF'))))

html = '<!doctype html><html><head><meta charset="utf-8"><style>' + CSS + '</style></head><body>'
for name, l, r in spreads:
    html += f'<div class="spread" id="{name}">{l}{r}</div>'
html += '</body></html>'
(ROOT/'tools'/'spreads.html').write_text(html)

script = r'''
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1800, height: 1300 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, 'spreads.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const ids = ['cover','about','skills','featured','shelf','contact'];
  const hotspots = [];
  for (let i = 0; i < ids.length; i++) {
    const el = await page.$('#' + ids[i]);
    await el.screenshot({ path: path.resolve(__dirname, '../sketchbook/pages', `spread-${i}.png`), omitBackground: true });
    const items = await page.evaluate((id) => {
      const s = document.getElementById(id);
      const sr = s.getBoundingClientRect();
      return [...s.querySelectorAll('.hot')].map(el => {
        const r = el.getBoundingClientRect();
        return {
          x: 100*(r.left-sr.left)/sr.width, y: 100*(r.top-sr.top)/sr.height,
          w: 100*r.width/sr.width, h: 100*r.height/sr.height,
          href: el.dataset.href || null, modal: el.dataset.modal || null,
          label: el.dataset.label || el.textContent.trim().slice(0,60)
        };
      });
    }, ids[i]);
    hotspots.push({ id: ids[i], items });
    console.log('rendered', ids[i], items.length, 'hotspots');
  }
  fs.writeFileSync(path.resolve(__dirname,'../sketchbook/hotspots.json'), JSON.stringify(hotspots, null, 2));
  await browser.close();
})();
'''
(ROOT/'tools'/'render_spreads.js').write_text(script)
env = dict(os.environ, NODE_PATH='/home/user/book-render/node_modules')
subprocess.run(['node', str(ROOT/'tools'/'render_spreads.js')], cwd=ROOT/'tools', check=True, env=env)
print('done')
