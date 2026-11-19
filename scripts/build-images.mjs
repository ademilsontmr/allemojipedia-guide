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
console.log(`images: ${n} emoji SVG + OG, ${g} guide OG`);
