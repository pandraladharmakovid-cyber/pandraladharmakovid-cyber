I see the exact issue now! GitHub's Markdown parser breaks whenever a Markdown code block (```` ```typescript ````) is placed inside an HTML table (`` `<td>` ``). That is why the code leaked out as raw text in your screenshot.

I have fixed the layout by un-nesting the TypeScript code block from the HTML table so it parses natively in GitHub with full syntax highlighting.

Here is the entire **single-file code block**. Click **"Copy code"** in the top right corner of the box below, paste it into your `README.md`, and save. It will render 100% perfectly without any code leaks or broken text!

```markdown
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24,30&height=280&section=header&text=DHARMA%20KOVIDH&fontSize=75&fontColor=ffffff&fontAlignY=38&desc=%E2%9A%A1%20AI%20DEVELOPER%20%E2%80%A2%20SOFTWARE%20BUILDER%20%E2%80%A2%20CODE%20ARTIST%20%E2%9A%A1&descSize=18&descAlignY=58&animation=twinkling&stroke=8B5CF6&strokeWidth=2" width="100%" alt="Cinematic Header"/>

<br>

<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=900&size=32&duration=2500&pause=800&color=22D3EE&background=00000000&center=true&vCenter=true&multiline=false&width=1000&height=70&lines=%E2%9A%A1+WELCOME+TO+MY+DIGITAL+UNIVERSE+%E2%9A%A1;%7B+CODE+%7C+CREATE+%7C+CONQUER+%7D;%3C+INITIALIZING+PORTFOLIO...+%2F%3E;%3E%3E%3E+SYSTEM+ONLINE+%E2%9C%93" alt="Hologram Title"/>

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=1800&pause=400&color=10B981&background=00000000&center=true&vCenter=true&width=900&height=35&lines=%5B+STATUS%3A+ONLINE+%5D+%E2%97%8F+%5B+MODE%3A+BUILDING+%5D+%E2%97%8F+%5B+COFFEE%3A+LOADED+%5D;%5B+LOCATION%3A+HYDERABAD+%5D+%E2%97%8F+%5B+ROLE%3A+DEVELOPER+%5D+%E2%97%8F+%5B+MISSION%3A+SHIP+%5D" alt="Status Bar"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber">
  <img src="https://img.shields.io/badge/-GITHUB-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=000000" alt="GitHub"/>
</a>
<a href="https://www.linkedin.com/in/pandrala-dharma-kovidh-0b1b36357/" target="_blank">
  <img src="https://img.shields.io/badge/-LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=000000" alt="LinkedIn"/>
</a>
<a href="https://www.instagram.com/pandraladharmakovidh/">
  <img src="https://img.shields.io/badge/-INSTAGRAM-E4405F?style=for-the-badge&logo=instagram&logoColor=white&labelColor=000000" alt="Instagram"/>
</a>
<a href="https://app.bytexl.ai/@pandraladharmakovidh">
  <img src="https://img.shields.io/badge/-BYTEXL-7C3AED?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=000000" alt="ByteXL"/>
</a>
<a href="mailto:pandraladharmakovid@gmail.com">
  <img src="https://img.shields.io/badge/-EMAIL-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=000000" alt="Email"/>
</a>

<br><br>

<img src="https://komarev.com/ghpvc/?username=pandraladharmakovid-cyber&style=for-the-badge&color=8B5CF6&label=VISITORS&labelColor=000000" alt="Views"/>
<img src="https://img.shields.io/github/followers/pandraladharmakovid-cyber?style=for-the-badge&color=22D3EE&labelColor=000000&label=FOLLOWERS" alt="Followers"/>
<img src="https://img.shields.io/github/stars/pandraladharmakovid-cyber?style=for-the-badge&color=EC4899&labelColor=000000&label=STARS" alt="Stars"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=F472B6&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%E2%9A%A1+01+%E2%80%94+THE+ORIGIN+%E2%9A%A1" alt="Section 01"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

</div>

<br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=19&duration=1500&pause=400&color=FACC15&background=00000000&center=true&vCenter=true&width=500&height=50&lines=%F0%9F%91%8B+HEY%2C+I'M+DHARMA;%F0%9F%8E%93+STUDENT+%26+BUILDER;%F0%9F%A4%96+AI-FOCUSED+DEV;%F0%9F%92%BB+CODE+ARTIST;%F0%9F%9A%80+IDEA+%E2%86%92+REALITY" alt="Intro"/>

<br><br>

<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="220" alt="Developer gif"/>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=15&duration=2200&pause=600&color=22D3EE&background=00000000&center=true&vCenter=true&width=500&height=35&lines=%22AI+is+my+co-pilot%2C+not+my+autopilot.%22" alt="Quote"/>

</div>

<br>

```typescript
const dharma = {
  name:       "Pandrala Dharma Kovidh",
  role:       "AI-Focused Developer",
  location:   "Hyderabad, India 📍",
  pronouns:   "he/him",
  status:     "Stuck btw thinking about new projects 😵",
  
  currentlyLearning: [
    "Advanced AI Agents",
    "System Architecture",
    "Scalable Backend Design"
  ],
  
  philosophy: [
    "Ship fast.",
    "Debug deeper.",
    "Build real things.",
    "AI as a weapon, not a crutch."
  ],
  
  workflow: "Idea → Prototype → Build → Break → Debug → Ship"
};
```

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=22D3EE&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%E2%9A%94%EF%B8%8F+02+%E2%80%94+THE+ARSENAL+%E2%9A%94%EF%B8%8F" alt="Section 02"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&duration=1500&pause=400&color=8B5CF6&background=00000000&center=true&vCenter=true&width=700&height=40&lines=%7B+LANGUAGES+%7D;%7B+FRAMEWORKS+%7D;%7B+DATABASES+%7D;%7B+TOOLS+%26+PLATFORMS+%7D;%7B+AI+%26+AUTOMATION+%7D" alt="Arsenal Categories"/>

<br>

### 💻 LANGUAGES

<img src="https://skillicons.dev/icons?i=js,ts,python,html,css&perline=5" alt="Languages"/>

<br>

### 🎨 FRONTEND

<img src="https://skillicons.dev/icons?i=react,tailwind,vite,vercel&perline=4" alt="Frontend"/>

<br>

### ⚙️ BACKEND & DATABASE

<img src="https://skillicons.dev/icons?i=nodejs,express,postgresql,mongodb&perline=4" alt="Backend"/>

<br>

### 🛠️ TOOLS & PLATFORMS

<img src="https://skillicons.dev/icons?i=git,github,vscode,docker,npm,linux,postman&perline=7" alt="Tools"/>

<br><br>

### 🤖 AI & SPECIALIZATION

<img src="https://img.shields.io/badge/AI%20%26%20LLMs-7C3AED?style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/AI%20Agents-4F46E5?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Prompt%20Engineering-DB2777?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Automation-0891B2?style=for-the-badge"/>
<img src="https://img.shields.io/badge/REST%20APIs-0EA5E9?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Full%20Stack-10B981?style=for-the-badge"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=10B981&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%F0%9F%9A%80+03+%E2%80%94+THE+PROJECTS+%F0%9F%9A%80" alt="Section 03"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=16&duration=800&pause=200&color=F472B6&background=00000000&center=true&vCenter=true&width=1000&height=40&lines=%3E+LOADING+PROJECTS...;%3E+FOUND+8+REPOSITORIES;%3E+RENDERING+SHOWCASE...;%3E+READY+%E2%9C%93" alt="Loading Projects"/>

<br>

</div>

### 🌟 FEATURED SHOWCASE

<table>
<tr>
<td width="50%" valign="top">

<div align="center">

#### 📊 FINSIGHT
<img src="https://img.shields.io/badge/STATUS-ACTIVE-10B981?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/Finsight">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=Finsight&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="Finsight"/>
</a>

<br><br>

<sub>💰 Full-stack personal finance dashboard. Track accounts, transactions, budgets, savings goals, debts & recurring payments. Built with React, Vite, Node.js, Express & PostgreSQL.</sub>

</div>

</td>
<td width="50%" valign="top">

<div align="center">

#### 🔍 FIND_OUT
<img src="https://img.shields.io/badge/STATUS-ACTIVE-10B981?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/Find_out">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=Find_out&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="Find_out"/>
</a>

<br><br>

<sub>🛡️ AI digital risk platform protecting brands from online impersonation. Scans social media, app stores & detects look-alike names or cloned accounts.</sub>

</div>

</td>
</tr>

<tr>
<td width="50%" valign="top">

<div align="center">

#### 🚗 RIDELINK
<img src="https://img.shields.io/badge/STATUS-SHIPPED-8B5CF6?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/book-ride-for-others">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=book-ride-for-others&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="RideLink"/>
</a>

<br><br>

<sub>🚕 Android app that simplifies booking Uber rides for others by turning shared location into ready-to-use pickup & destination data.</sub>

</div>

</td>
<td width="50%" valign="top">

<div align="center">

#### 🧠 AI DEVELOPER AGENT
<img src="https://img.shields.io/badge/LEVEL-2-EC4899?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/Ai-agent-developer">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=Ai-agent-developer&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="AI Agent"/>
</a>

<br><br>

<sub>🤖 Autonomous AI-powered software engineering system. Understands dev tasks, creates execution plans, analyzes files & runs development tools.</sub>

</div>

</td>
</tr>

<tr>
<td width="50%" valign="top">

<div align="center">

#### 🖥️ EDITOR X
<img src="https://img.shields.io/badge/STATUS-OPEN%20SOURCE-F59E0B?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/editor-x">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=editor-x&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="EDITOR X"/>
</a>

<br><br>

<sub>⚡ Browser-based development environment. Code anywhere, anytime. A full IDE experience in the browser.</sub>

</div>

</td>
<td width="50%" valign="top">

<div align="center">

#### 🧰 AI TOOLS DIRECTORY
<img src="https://img.shields.io/badge/1012-AI%20TOOLS-8B5CF6?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/ai-tools-directory">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=ai-tools-directory&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="AI Tools"/>
</a>

<br><br>

<sub>📚 A curated directory of 1,012 AI tools organized across 19 categories. The ultimate AI resource hub.</sub>

</div>

</td>
</tr>

<tr>
<td width="50%" valign="top">

<div align="center">

#### 🛡️ PHISHGUARD
<img src="https://img.shields.io/badge/SECURITY-RESEARCH-DC2626?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/phishguard-phishing-simulation">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=phishguard-phishing-simulation&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="PhishGuard"/>
</a>

<br><br>

<sub>🎣 Phishing simulation platform designed for security awareness training & cybersecurity education.</sub>

</div>

</td>
<td width="50%" valign="top">

<div align="center">

#### 🤖 UNRESTRICTED AI
<img src="https://img.shields.io/badge/EXPERIMENT-F97316?style=flat-square&labelColor=000000"/>

<br><br>

<a href="https://github.com/pandraladharmakovid-cyber/unrestricted-ai-interface">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=pandraladharmakovid-cyber&repo=unrestricted-ai-interface&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF" alt="Unrestricted AI"/>
</a>

<br><br>

<sub>⚡ Experimental AI interface — pushing boundaries of what's possible with AI-powered chat & interaction.</sub>

</div>

</td>
</tr>
</table>

<br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=800&pause=200&color=10B981&background=00000000&center=true&vCenter=true&width=1100&height=40&lines=%5B01%5D+FINSIGHT+%E2%97%86+%5B02%5D+FIND_OUT+%E2%97%86+%5B03%5D+RIDELINK+%E2%97%86+%5B04%5D+AI+AGENT;%5B05%5D+EDITOR+X+%E2%97%86+%5B06%5D+AI+TOOLS+DIR+%E2%97%86+%5B07%5D+PHISHGUARD+%E2%97%86+%5B08%5D+UNRESTRICTED+AI" alt="Project Ticker"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=F59E0B&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%F0%9F%93%8A+04+%E2%80%94+THE+METRICS+%F0%9F%93%8A" alt="Section 04"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

<img src="https://github-readme-stats.vercel.app/api?username=pandraladharmakovid-cyber&show_icons=true&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&icon_color=F472B6&text_color=FFFFFF&ring_color=8B5CF6" width="48%" alt="GitHub Stats"/>
<img src="https://github-readme-streak-stats.herokuapp.com/?user=pandraladharmakovid-cyber&theme=tokyonight&hide_border=true&background=000000&stroke=8B5CF6&ring=22D3EE&fire=F472B6&currStreakLabel=22D3EE&sideLabels=22D3EE&dates=FFFFFF" width="48%" alt="Streak"/>

<br><br>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pandraladharmakovid-cyber&layout=compact&theme=tokyonight&hide_border=true&bg_color=000000&title_color=22D3EE&text_color=FFFFFF&langs_count=10" width="48%" alt="Top Languages"/>
<img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=pandraladharmakovid-cyber&theme=tokyonight" width="48%" alt="Profile Summary"/>

<br><br>

<img src="https://github-profile-trophy.vercel.app/?username=pandraladharmakovid-cyber&theme=tokyonight&no-frame=true&no-bg=true&margin-w=10&row=1&column=7" width="98%" alt="Trophies"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=EC4899&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%F0%9F%90%8D+05+%E2%80%94+THE+JOURNEY+%F0%9F%90%8D" alt="Section 05"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

<img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg" width="100%" alt="Contribution Snake"/>

<br><br>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=pandraladharmakovid-cyber&bg_color=000000&color=22D3EE&line=8B5CF6&point=F472B6&area=true&hide_border=true&custom_title=%E2%9A%A1%20Commit%20Activity%20Pulse%20%E2%9A%A1" width="98%" alt="Activity Graph"/>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=1300&pause=350&color=22D3EE&background=00000000&center=true&vCenter=true&width=900&height=50&lines=EVERY+COMMIT+%3D+ONE+STEP+FORWARD;EVERY+BUG+%3D+ONE+LESSON+LEARNED;EVERY+SHIP+%3D+ONE+DREAM+REALIZED" alt="Journey Quotes"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=A78BFA&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%F0%9F%A7%A0+06+%E2%80%94+THE+PHILOSOPHY+%F0%9F%A7%A0" alt="Section 06"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

</div>

<table>
<tr>
<td width="33%" align="center" valign="top">

### 💡 THINK

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=13&duration=2000&pause=400&color=FACC15&background=00000000&center=true&vCenter=true&width=250&height=35&lines=Research+deeply.;Question+everything.;Prototype+fast." alt="Think"/>

<br>

Every project starts with a problem worth solving.

</td>
<td width="33%" align="center" valign="top">

### 🔨 BUILD

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=13&duration=2000&pause=400&color=22D3EE&background=00000000&center=true&vCenter=true&width=250&height=35&lines=Code+clean.;Scale+smart.;Debug+relentlessly." alt="Build"/>

<br>

Architecture matters. Details matter. Ship anyway.

</td>
<td width="33%" align="center" valign="top">

### 🚀 SHIP

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=13&duration=2000&pause=400&color=EC4899&background=00000000&center=true&vCenter=true&width=250&height=35&lines=Done+%3E+Perfect.;Users+%3E+Features.;Impact+%3E+Ideas." alt="Ship"/>

<br>

Nothing is real until it's live and used.

</td>
</tr>
</table>

<br>

<div align="center">

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight&border=true" alt="Random Dev Quote"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=10B981&background=00000000&center=true&vCenter=true&width=700&height=50&lines=%F0%9F%8E%AF+07+%E2%80%94+CURRENT+MISSION+%F0%9F%8E%AF" alt="Section 07"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

</div>

```yaml
MISSION_LOG:
  status:         "ACTIVE 🟢"
  current_focus:  "Building AI-first products that solve real problems"
  learning:       ["Advanced AI Agents", "System Design", "DevOps"]
  shipping:       ["New features", "Portfolio improvements", "Open source"]
  
NEXT_UP:
  - "🚀 Launch next AI-powered product"
  - "🧠 Deepen expertise in autonomous agents"
  - "🤝 Collaborate with other builders"
  - "📝 Document the journey"

CONTACT_PROTOCOL:
  email:     "pandraladharmakovid@gmail.com"
  linkedin:  "pandrala-dharma-kovidh"
  response:  "Usually within 24 hours ⚡"
```

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=28&duration=2000&pause=500&color=22D3EE&background=00000000&center=true&vCenter=true&width=600&height=50&lines=%F0%9F%8C%90+08+%E2%80%94+LET'S+CONNECT+%F0%9F%8C%90" alt="Section 08"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Divider"/>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=1500&pause=400&color=F472B6&background=00000000&center=true&vCenter=true&width=800&height=50&lines=%E2%9A%A1+LET'S+BUILD+SOMETHING+LEGENDARY+%E2%9A%A1;%F0%9F%A4%9D+OPEN+TO+COLLABORATIONS;%F0%9F%92%AC+ALWAYS+DOWN+TO+TALK+TECH;%F0%9F%9A%80+READY+TO+SHIP+TOGETHER" alt="Connect"/>

<br><br>

<table>
<tr>
<td align="center">
<a href="https://github.com/pandraladharmakovid-cyber">
<img src="https://img.shields.io/badge/-GITHUB-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=000000" alt="GitHub"/>
<br><sub>pandraladharmakovid-cyber</sub>
</a>
</td>
<td align="center">
<a href="https://www.linkedin.com/in/pandrala-dharma-kovidh-0b1b36357/" target="_blank">
<img src="https://img.shields.io/badge/-LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=000000" alt="LinkedIn"/>
<br><sub>Pandrala Dharma Kovidh</sub>
</a>
</td>
<td align="center">
<a href="https://www.instagram.com/pandraladharmakovidh/">
<img src="https://img.shields.io/badge/-INSTAGRAM-E4405F?style=for-the-badge&logo=instagram&logoColor=white&labelColor=000000" alt="Instagram"/>
<br><sub>@pandraladharmakovidh</sub>
</a>
</td>
</tr>
<tr>
<td align="center">
<a href="https://app.bytexl.ai/@pandraladharmakovidh">
<img src="https://img.shields.io/badge/-BYTEXL-7C3AED?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=000000" alt="ByteXL"/>
<br><sub>@pandraladharmakovidh</sub>
</a>
</td>
<td align="center">
<a href="mailto:pandraladharmakovid@gmail.com">
<img src="https://img.shields.io/badge/-EMAIL-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=000000" alt="Email"/>
<br><sub>pandraladharmakovid@gmail.com</sub>
</a>
</td>
<td align="center">
<a href="https://github.com/pandraladharmakovid-cyber">
<img src="https://img.shields.io/badge/-LOCATION-10B981?style=for-the-badge&logo=googlemaps&logoColor=white&labelColor=000000" alt="Location"/>
<br><sub>Hyderabad, India 📍</sub>
</a>
</td>
</tr>
</table>

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=14&duration=2000&pause=500&color=A78BFA&background=00000000&center=true&vCenter=true&width=800&height=35&lines=%E2%9D%B6+DM's+open+for+interesting+projects;%E2%9D%B7+Collaboration+inquiries+welcome;%E2%9D%B8+Technical+discussions+encouraged;%E2%9D%B9+Coffee+chat+requests+accepted+%E2%98%95" alt="DM Info"/>

</div>

<br><br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Audiowide&size=24&duration=1800&pause=500&color=FFFFFF&background=00000000&center=true&vCenter=true&width=900&height=55&lines=%E2%9A%A1+THANKS+FOR+SCROLLING+THIS+FAR+%E2%9A%A1;%F0%9F%92%AB+MAY+YOUR+CODE+COMPILE+ON+FIRST+TRY+%F0%9F%92%AB;%F0%9F%9A%80+SEE+YOU+IN+THE+NEXT+COMMIT+%F0%9F%9A%80;%3C+EOF+%2F%3E" alt="Final Message"/>

<br>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" height="2" alt="Final Divider"/>

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=13&duration=1200&pause=300&color=10B981&background=00000000&center=true&vCenter=true&width=600&height=30&lines=%24+exit+0;%3E+Connection+closed.;%3E+Have+a+great+day+%E2%9C%93" alt="Exit"/>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24,30&height=200&section=footer&text=KEEP%20BUILDING&fontSize=40&fontColor=ffffff&fontAlignY=70&animation=twinkling" width="100%" alt="Footer Wave"/>

</div>
```
