const { chromium } = require('playwright');
const path = require('path');
const sites = [
 ['neuron','https://neuron-drab.vercel.app'],
 ['findout','https://findout-henna.vercel.app'],
 ['aitools','https://aitoolsdirectory.bytexl.live/'],
];
(async () => {
 const browser = await chromium.launch();
 const ctx = await browser.newContext({ viewport:{width:1280,height:800}, deviceScaleFactor:1 });
 for (const [name,url] of sites) {
  const page = await ctx.newPage();
  try {
   await page.goto(url, { waitUntil:'domcontentloaded', timeout:25000 });
   await page.waitForTimeout(3500);
   await page.screenshot({ path: path.resolve(__dirname,'../sketchbook/assets/projects',name+'.jpg'), type:'jpeg', quality:82 });
   console.log('ok', name);
  } catch(e) { console.log('fail', name, e.message.split('\n')[0]); }
  await page.close();
 }
 await browser.close();
})();
