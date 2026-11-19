// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
// Google does not use IndexNow; use Search Console for Google. Usage: node scripts/indexnow.mjs
const HOST = "allemojipedia.com";
const KEY = "b2ef5f757bfa3e8f959b365d1bbee491"; // served at /<KEY>.txt from public/
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${urls.length} URLs -> HTTP ${res.status} ${res.statusText}`);
