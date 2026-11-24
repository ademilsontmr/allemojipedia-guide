// Runs after `astro build`. Copies the Twemoji SVG for every emoji page to dist/img/emoji/ and renders
// a 1200x630 social/Article image for every emoji page and guide to dist/og/. Pages only reference
// these files when hasTwemoji() is true, so this script and the pages always agree.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";
import { twemojiFile, hasTwemoji } from "../src/lib/twemoji.mjs";

const emojis = JSON.parse(readFileSync("src/data/emojis.json", "utf8"));
const byChar = new Map(emojis.map((e) => [e.emoji.replace(/️/g, ""), e]));
const bySlug = new Map(emojis.map((e) => [e.slug, e]));
const pages = readdirSync("dist/emojis").filter((d) => existsSync(`dist/emojis/${d}/index.html`));
const guides = readdirSync("dist/guides").filter((d) => existsSync(`dist/guides/${d}/index.html`));
for (const d of ["dist/img/emoji", "dist/og/emojis", "dist/og/guides"]) mkdirSync(d, { recursive: true });

const inner = (hex) => readFileSync(twemojiFile(hex), "utf8").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const card = (hex, hue) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="hsl(${hue} 75% 92%)"/>
  <circle cx="600" cy="300" r="215" fill="#ffffff"/>
  <svg x="420" y="120" width="360" height="360" viewBox="0 0 36 36">${inner(hex)}</svg>
  <rect x="0" y="582" width="1200" height="48" fill="#4338ca"/>
</svg>`;
const HUE = { "smileys-and-emotion": 45, "people-and-body": 25, "animals-and-nature": 140, "food-and-drink": 10, "travel-and-places": 200, activities: 275, objects: 320, symbols: 165, flags: 230 };
const render = (svg, out) => writeFileSync(out, new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng());

let n = 0;
for (const slug of pages) {
  const e = bySlug.get(slug);
  if (!e || !hasTwemoji(e.hex)) continue;
  writeFileSync(`dist/img/emoji/${slug}.svg`, readFileSync(twemojiFile(e.hex)));
  render(card(e.hex, HUE[e.category] ?? 230), `dist/og/emojis/${slug}.png`);
  n++;
}
let g = 0;
for (const slug of guides) {
  const hero = (readFileSync(`src/content/guides/${slug}.md`, "utf8").match(/^heroEmoji:\s*"?([^"\n]+)"?/m) || [])[1];
  const e = hero && byChar.get(hero.trim().replace(/️/g, ""));
  if (!e || !hasTwemoji(e.hex)) continue;
  render(card(e.hex, 245), `dist/og/guides/${slug}.png`);
  g++;
}
// Blog posts: a collage of up to six hero emojis that have Twemoji artwork.
const seg = (str) => [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(str)].map((x) => x.segment).filter((x) => x.trim());
const collage = (hexes) => {
  const k = hexes.length, size = k <= 3 ? 250 : 200, gap = 40, perRow = k <= 3 ? k : Math.ceil(k / 2), rows = Math.ceil(k / perRow);
  const y0 = (582 - rows * size - (rows - 1) * gap) / 2;
  const tiles = hexes.map((h, i) => {
    const r = Math.floor(i / perRow), inRow = Math.min(perRow, k - r * perRow), c = i % perRow;
    const x = (1200 - inRow * size - (inRow - 1) * gap) / 2 + c * (size + gap), y = y0 + r * (size + gap), rot = [-8, 6, -4, 8, -6, 4][i % 6];
    return `<g transform="rotate(${rot} ${x + size / 2} ${y + size / 2})"><svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 36 36">${inner(h)}</svg></g>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="a" cx="15%" cy="20%" r="60%"><stop offset="0" stop-color="#ffd54a" stop-opacity=".45"/><stop offset="1" stop-color="#ffd54a" stop-opacity="0"/></radialGradient>
  <radialGradient id="b" cx="85%" cy="30%" r="60%"><stop offset="0" stop-color="#a5b4fc" stop-opacity=".7"/><stop offset="1" stop-color="#a5b4fc" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#eceafd"/><rect width="1200" height="630" fill="url(#a)"/><rect width="1200" height="630" fill="url(#b)"/>
  ${tiles}
  <rect x="0" y="582" width="1200" height="48" fill="#4338ca"/>
</svg>`;
};
let b = 0;
if (existsSync("dist/blog")) {
  mkdirSync("dist/og/blog", { recursive: true });
  for (const slug of readdirSync("dist/blog").filter((d) => existsSync(`dist/blog/${d}/index.html`))) {
    const hero = (readFileSync(`src/content/blog/${slug}.md`, "utf8").match(/^hero:\s*"?([^"\n]+)"?/m) || [])[1] || "";
    const hexes = seg(hero).map((c) => byChar.get(c.replace(/\uFE0F/g, ""))).filter((e) => e && hasTwemoji(e.hex)).map((e) => e.hex).slice(0, 6);
    if (!hexes.length) throw new Error(`blog/${slug}: hero has no emoji with Twemoji artwork`);
    render(collage(hexes), `dist/og/blog/${slug}.png`);
    b++;
  }
}
// Standalone pages with their own social image: a collage of the emojis they are about.
const PAGE_OG = { "what-does-this-emoji-mean": "💀🙂🫠🥺👀🫡" };
mkdirSync("dist/og/pages", { recursive: true });
for (const [slug, hero] of Object.entries(PAGE_OG)) {
  const hexes = seg(hero).map((c) => byChar.get(c.replace(/\uFE0F/g, ""))).filter((e) => e && hasTwemoji(e.hex)).map((e) => e.hex);
  render(collage(hexes), `dist/og/pages/${slug}.png`);
}
console.log(`images: ${n} emoji SVG + OG, ${g} guide OG, ${b} blog OG, ${Object.keys(PAGE_OG).length} page OG`);
