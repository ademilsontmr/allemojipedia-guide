import fs from 'fs';
import path from 'path';

const HOST = 'allemojipedia.com';
const KEY = 'b2ef5f757bfa3e8f959b365d1bbee491';
const SITEMAP = path.join(process.cwd(), 'public', 'sitemap.xml');

// Run after deploy: the key file must be live at https://allemojipedia.com/<KEY>.txt
const urls = [...fs.readFileSync(SITEMAP, 'utf-8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} (${urls.length} URLs)`);
if (!response.ok) {
  console.log(await response.text());
  process.exit(1);
}
