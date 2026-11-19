// Validates src/content/guides/*.md against docs/guide-brief.md. Usage: node scripts/validate-guides.mjs [slug ...]
import { readFileSync, existsSync } from "node:fs";
const curated = new Set(JSON.parse(readFileSync("src/data/curated.json", "utf8")));
const allChars = new Set(JSON.parse(readFileSync("src/data/emojis.json", "utf8")).flatMap((e) => [e.emoji, ...e.skins.map((x) => x.emoji)]).map((c) => c.replace(/\uFE0F/g, "")));
const guides = [...readFileSync("docs/guide-list.md", "utf8").matchAll(/^\| ([a-z0-9-]+) \|/gm)].map((m) => m[1]).filter((s) => s !== "slug");
const CATS = ["smileys-and-emotion", "people-and-body", "animals-and-nature", "food-and-drink", "travel-and-places", "activities", "objects", "symbols", "flags"];
const want = process.argv.slice(2).length ? process.argv.slice(2) : guides;
let errors = 0, done = 0;
const err = (s, m) => { errors++; console.log(`✗ ${s}: ${m}`); };
for (const slug of want) {
  const f = `src/content/guides/${slug}.md`;
  if (!guides.includes(slug)) err(slug, "slug not in docs/guide-list.md");
  if (!existsSync(f)) { console.log(`- ${slug}: missing`); continue; }
  done++;
  const raw = readFileSync(f, "utf8"); const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { err(slug, "no frontmatter"); continue; }
  const [, fm, body] = m;
  for (const k of ["title", "description", "excerpt", "pubDate", "category", "heroEmoji", "keyTakeaways", "faqs", "related"]) if (!new RegExp(`^${k}:`, "m").test(fm)) err(slug, `frontmatter missing ${k}`);
  const title = (fm.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || ""; const tl = [...title].length; if (tl < 40 || tl > 64) err(slug, `title ${tl} chars (45-62)`);
  const desc = (fm.match(/^description:\s*"?(.*?)"?\s*$/m) || [])[1] || ""; const dl = [...desc].length; if (dl < 135 || dl > 165) err(slug, `description ${dl} chars (145-160)`);
  const cat = (fm.match(/^category:\s*"?([A-Za-z-]+)/m) || [])[1]; if (!["Meanings", "Platforms", "How-to", "Culture", "Flags", "Holidays"].includes(cat)) err(slug, `bad category ${cat}`);
  const nfaq = (fm.match(/^\s*- q:/gm) || []).length; if (nfaq < 5 || nfaq > 6) err(slug, `faqs = ${nfaq} (5-6)`);
  const words = body.replace(/\]\([^)]*\)/g, "]").split(/\s+/).filter(Boolean).length; if (words < 1800 || words > 3000) err(slug, `body ${words} words (1900-2700)`);
  if (/^# /m.test(body)) err(slug, "body contains an H1");
  const h2 = (body.match(/^## /gm) || []).length; if (h2 < 6 || h2 > 11) err(slug, `${h2} H2 sections (6-10)`);
  if (!/^\|.*\|\s*\n\|[\s:|-]+\|/m.test(body)) err(slug, "no markdown table");
  if (/^##+ .*(FAQ|Frequently Asked|Key Takeaways|Conclusion)/im.test(body)) err(slug, "body has FAQ/Key takeaways/Conclusion heading");
  const links = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((x) => x[1]);
  if (links.length < 12) err(slug, `only ${links.length} internal links (12-25)`);
  for (const l of links) {
    if (!l.endsWith("/")) err(slug, `link missing trailing slash: ${l}`);
    let x;
    if ((x = l.match(/^\/emojis\/([^/]+)\/$/))) { if (!curated.has(x[1])) err(slug, `emoji link not curated: ${l}`); }
    else if ((x = l.match(/^\/categories\/([^/]+)\/$/))) { if (!CATS.includes(x[1])) err(slug, `bad category link: ${l}`); }
    else if ((x = l.match(/^\/guides\/([^/]+)\/$/))) { if (!guides.includes(x[1])) err(slug, `bad guide link: ${l}`); }
    else if (!["/flag-emoji-quiz/", "/categories/", "/guides/", "/emojis/", "/"].includes(l)) err(slug, `unknown internal link: ${l}`);
  }
  for (const r of (fm.match(/^related:\s*\[(.*)\]/m) || ["", ""])[1].split(",").map((s) => s.trim().replace(/"/g, "")).filter(Boolean)) if (!guides.includes(r) || r === slug) err(slug, `bad related: ${r}`);
  for (const m of fm.matchAll(/^\s*emojis:\s*"(.*)"\s*$/gm)) {
    for (const g of new Intl.Segmenter("en", { granularity: "grapheme" }).segment(m[1])) {
      const c = g.segment.trim(); if (c && !allChars.has(c.replace(/\uFE0F/g, ""))) err(slug, `copyList has non-emoji or unknown: ${c}`);
    }
  }
  const ext = [...body.matchAll(/\]\((https?:[^)]*)\)/g)]; if (ext.length > 3) err(slug, `${ext.length} external links (max 3)`);
  for (const b of [/in today'?s digital/i, /let'?s dive/i, /game-?changer/i, /ever-evolving/i, /it'?s important to note/i]) if (b.test(body)) err(slug, `banned phrase ${b}`);
}
console.log(`\n${done}/${want.length} guides present, ${errors} errors`);
process.exit(errors ? 1 : 0);
