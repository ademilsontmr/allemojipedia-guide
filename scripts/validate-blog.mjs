// Validates src/content/blog/*.md against docs/blog-brief.md. Usage: node scripts/validate-blog.mjs [slug ...]
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { parse } from "yaml";
import { hasTwemoji } from "../src/lib/twemoji.mjs";

const DIR = "src/content/blog";
const emojis = JSON.parse(readFileSync("src/data/emojis.json", "utf8"));
const byChar = new Map(emojis.map((e) => [e.emoji.replace(/️/g, ""), e]));
const curated = new Set(JSON.parse(readFileSync("src/data/curated.json", "utf8")));
const guides = [...readFileSync("docs/guide-list.md", "utf8").matchAll(/^\| ([a-z0-9-]+) \|/gm)].map((m) => m[1]).filter((s) => s !== "slug");
const symbolPages = [...readFileSync("docs/symbol-page-brief.md", "utf8").matchAll(/^\| ([a-z0-9-]+) \|/gm)].map((m) => m[1]).filter((s) => s !== "slug");
const CATS = ["smileys-and-emotion", "people-and-body", "animals-and-nature", "food-and-drink", "travel-and-places", "activities", "objects", "symbols", "flags"];
const STATIC = ["/", "/emojis/", "/categories/", "/guides/", "/blog/", "/flag-emoji-quiz/", "/emoji-copy-and-paste/", "/what-does-this-emoji-mean/", "/search/", "/about/", "/editorial-policy/", "/contact/"];
const NEEDS_SOURCES = ["Unicode Emoji Update", "Platform Emoji Update"];
const seg = (s) => [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(s)].map((x) => x.segment).filter((x) => x.trim());
const wc = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const today = new Date().toISOString().slice(0, 10);
const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)) : [];
const want = process.argv.slice(2).length ? process.argv.slice(2) : files;
let errors = 0;
const err = (s, m) => { errors++; console.log(`✗ ${s}: ${m}`); };
const range = (s, what, n, lo, hi) => { if (n < lo || n > hi) err(s, `${what} = ${n}, expected ${lo}-${hi}`); };

for (const slug of want) {
  if (!files.includes(slug)) { console.log(`- ${slug}: missing`); continue; }
  const m = readFileSync(`${DIR}/${slug}.md`, "utf8").match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { err(slug, "no frontmatter"); continue; }
  let fm; try { fm = parse(m[1]); } catch (e) { err(slug, "YAML: " + e.message); continue; }
  const body = m[2];
  if (!/^[a-z0-9-]+$/.test(slug)) err(slug, "slug must be lowercase-hyphen");
  for (const k of ["title", "description", "dek", "category", "pubDate", "hero", "keywords"]) if (fm[k] === undefined) err(slug, `missing ${k}`);
  range(slug, "title chars", [...(fm.title ?? "")].length, 35, 65);
  range(slug, "description chars", [...(fm.description ?? "")].length, 135, 165);
  range(slug, "dek words", wc(fm.dek ?? ""), 15, 50);
  const pub = fm.pubDate instanceof Date ? fm.pubDate.toISOString().slice(0, 10) : String(fm.pubDate);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(pub)) err(slug, "pubDate must be YYYY-MM-DD");
  else if (pub > today) err(slug, `pubDate ${pub} is in the future`);
  const hero = seg(fm.hero ?? "");
  range(slug, "hero emojis", hero.length, 3, 8);
  for (const c of hero) { const e = byChar.get(c.replace(/️/g, "")); if (!e) err(slug, `hero ${c} is not an emoji`); else if (!hasTwemoji(e.hex)) err(slug, `hero ${c} has no Twemoji artwork (too new for the social image)`); }
  if (NEEDS_SOURCES.includes(fm.category) && !(fm.sources ?? []).length) err(slug, `${fm.category} posts need at least one source`);
  for (const r of fm.related ?? []) if (!files.includes(r) || r === slug) err(slug, `bad related: ${r}`);
  range(slug, "body words", wc(body.replace(/\]\([^)]*\)/g, "]")), 500, 1800);
  if (/^# /m.test(body)) err(slug, "body contains an H1");
  range(slug, "H2 sections", (body.match(/^## /gm) || []).length, 3, 8);
  const links = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((x) => x[1]);
  range(slug, "internal links", links.length, 4, 20);
  for (const l of links) {
    let x;
    if (!l.endsWith("/")) err(slug, `link missing trailing slash: ${l}`);
    else if ((x = l.match(/^\/emojis\/([^/]+)\/$/))) { if (!curated.has(x[1])) err(slug, `emoji link not curated: ${l}`); }
    else if ((x = l.match(/^\/categories\/([^/]+)\/$/))) { if (!CATS.includes(x[1])) err(slug, `bad category link: ${l}`); }
    else if ((x = l.match(/^\/guides\/([^/]+)\/$/))) { if (!guides.includes(x[1])) err(slug, `bad guide link: ${l}`); }
    else if ((x = l.match(/^\/blog\/([^/]+)\/$/))) { if (!files.includes(x[1])) err(slug, `bad blog link: ${l}`); }
    else if ((x = l.match(/^\/([a-z0-9-]+)\/$/)) && symbolPages.includes(x[1])) {}
    else if (!STATIC.includes(l)) err(slug, `unknown internal link: ${l}`);
  }
  if ([...body.matchAll(/\]\((https?:[^)]*)\)/g)].length > 4) err(slug, "more than 4 external links in the body");
  for (const b of [/in today'?s digital/i, /let'?s dive/i, /game-?changer/i, /ever-evolving/i, /it'?s important to note/i, /buckle up/i]) if (b.test(body)) err(slug, `banned phrase ${b}`);
}
console.log(`\n${want.filter((s) => files.includes(s)).length}/${want.length} blog posts present, ${errors} errors`);
process.exit(errors ? 1 : 0);
