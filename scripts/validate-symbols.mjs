// Validates src/content/symbols/*.md against docs/symbol-page-brief.md and writes
// src/data/symbol-names.json (Unicode names for every single-character symbol, used as copy-button labels).
// Usage: node scripts/validate-symbols.mjs [slug ...]
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { parse } from "yaml";

const DIR = "src/content/symbols";
const SLUGS = [...readFileSync("docs/symbol-page-brief.md", "utf8").matchAll(/^\| ([a-z0-9-]+) \|/gm)].map((m) => m[1]).filter((s) => s !== "slug");
const curated = new Set(JSON.parse(readFileSync("src/data/curated.json", "utf8")));
const guides = [...readFileSync("docs/guide-list.md", "utf8").matchAll(/^\| ([a-z0-9-]+) \|/gm)].map((m) => m[1]).filter((s) => s !== "slug");
const CATS = ["smileys-and-emotion", "people-and-body", "animals-and-nature", "food-and-drink", "travel-and-places", "activities", "objects", "symbols", "flags"];
const STATIC = ["/", "/emojis/", "/categories/", "/guides/", "/flag-emoji-quiz/", "/emoji-copy-and-paste/", "/what-does-this-emoji-mean/", "/search/"];
const seg = (s) => [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(s)].map((x) => x.segment).filter((x) => x.trim());
const wc = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const files = readdirSync(DIR).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3));
const want = process.argv.slice(2).length ? process.argv.slice(2) : files;
let errors = 0;
const err = (s, m) => { errors++; console.log(`✗ ${s}: ${m}`); };
const range = (s, what, n, lo, hi) => { if (n < lo || n > hi) err(s, `${what} = ${n}, expected ${lo}-${hi}`); };

const parsed = {};
for (const slug of files) {
  const raw = readFileSync(`${DIR}/${slug}.md`, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { err(slug, "no frontmatter"); continue; }
  try { parsed[slug] = { fm: parse(m[1]), body: m[2] }; } catch (e) { err(slug, "YAML: " + e.message); }
}

// Unicode data from Python's unicodedata: name and general category for every code point used.
const cps = new Set();
for (const { fm } of Object.values(parsed)) for (const s of fm.sets ?? []) for (const x of [...(s.chars ?? ""), ...(s.items ?? []).join("")]) cps.add(x.codePointAt(0));
const info = JSON.parse(execFileSync("python3", ["-I", "-c",
  "import json,sys,unicodedata as u\nprint(json.dumps({c:[u.name(chr(int(c)),''),u.category(chr(int(c)))] for c in json.load(sys.stdin)}))"],
  { input: JSON.stringify([...cps]) }).toString());
const bad = (str) => [...str].filter((ch) => { const c = info[ch.codePointAt(0)]?.[1]; return c === "Co" || c === "Cs" || (c === "Cn" && ch.codePointAt(0) < 0x1f000); });

const names = {};
for (const slug of want) {
  if (!SLUGS.includes(slug)) err(slug, "slug not listed in docs/symbol-page-brief.md");
  const p = parsed[slug];
  if (!p) { if (!existsSync(`${DIR}/${slug}.md`)) console.log(`- ${slug}: missing`); continue; }
  const { fm, body } = p;
  for (const k of ["title", "description", "h1", "lead", "hero", "keywords", "published", "sets", "faqs", "related"]) if (fm[k] === undefined) err(slug, `missing ${k}`);
  range(slug, "title chars", [...(fm.title ?? "")].length, 40, 64);
  range(slug, "description chars", [...(fm.description ?? "")].length, 135, 165);
  range(slug, "lead words", wc(fm.lead ?? ""), 25, 70);
  range(slug, "sets", fm.sets?.length ?? 0, 5, 12);
  const seenIds = new Set();
  for (const s of fm.sets ?? []) {
    if (!s.id || !/^[a-z0-9-]+$/.test(s.id) || seenIds.has(s.id)) err(slug, `set id missing, invalid or duplicated: ${s.id}`); seenIds.add(s.id);
    if (!s.title) err(slug, `set ${s.id} has no title`);
    if (!!s.chars === !!s.items) { err(slug, `set ${s.id} needs exactly one of chars or items`); continue; }
    const list = s.items ?? seg(s.chars);
    range(slug, `set ${s.id} size`, list.length, 6, 60);
    const dup = list.filter((x, i) => list.indexOf(x) !== i); if (dup.length) err(slug, `set ${s.id} duplicates: ${[...new Set(dup)].join(" ")}`);
    for (const x of list) {
      const b = bad(x); if (b.length) err(slug, `set ${s.id} has unassigned/private-use characters in ${x}`);
      if (s.items && [...x].length > 40) err(slug, `set ${s.id} item too long: ${x}`);
      const core = x.replace(/️/g, "");
      if ([...core].length === 1) { const n = info[core.codePointAt(0)]?.[0]; if (n) names[x] = n.toLowerCase(); }
    }
  }
  range(slug, "faqs", fm.faqs?.length ?? 0, 4, 6);
  (fm.faqs ?? []).forEach((f, i) => { if (!f.q || !f.a) err(slug, `faq ${i} needs q and a`); else range(slug, `faq ${i} answer words`, wc(f.a), 25, 90); });
  for (const r of fm.related ?? []) if (!SLUGS.includes(r) || r === slug) err(slug, `bad related: ${r}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.published ?? "")) err(slug, "published must be YYYY-MM-DD");
  const words = body.replace(/\]\([^)]*\)/g, "]").split(/\s+/).filter(Boolean).length; range(slug, "body words", words, 900, 1800);
  if (/^# /m.test(body)) err(slug, "body contains an H1");
  range(slug, "H2 sections", (body.match(/^## /gm) || []).length, 4, 8);
  if (/^##+ .*(FAQ|Frequently Asked|Conclusion)/im.test(body)) err(slug, "body has FAQ/Conclusion heading");
  const links = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((x) => x[1]);
  range(slug, "internal links", links.length, 6, 20);
  for (const l of links) {
    let x;
    if (!l.endsWith("/")) err(slug, `link missing trailing slash: ${l}`);
    else if ((x = l.match(/^\/emojis\/([^/]+)\/$/))) { if (!curated.has(x[1])) err(slug, `emoji link not curated: ${l}`); }
    else if ((x = l.match(/^\/categories\/([^/]+)\/$/))) { if (!CATS.includes(x[1])) err(slug, `bad category link: ${l}`); }
    else if ((x = l.match(/^\/guides\/([^/]+)\/$/))) { if (!guides.includes(x[1])) err(slug, `bad guide link: ${l}`); }
    else if ((x = l.match(/^\/([a-z0-9-]+)\/$/)) && SLUGS.includes(x[1])) { if (x[1] === slug) err(slug, "links to itself"); }
    else if (!STATIC.includes(l)) err(slug, `unknown internal link: ${l}`);
  }
  if ([...body.matchAll(/\]\((https?:[^)]*)\)/g)].length > 3) err(slug, "more than 3 external links");
  for (const b of [/in today'?s digital/i, /let'?s dive/i, /game-?changer/i, /ever-evolving/i, /it'?s important to note/i, /elevate your/i]) if (b.test(body + JSON.stringify(fm))) err(slug, `banned phrase ${b}`);
}
if (!process.argv.slice(2).length) {
  const keep = JSON.parse(readFileSync("src/data/symbol-names.json", "utf8"));
  writeFileSync("src/data/symbol-names.json", JSON.stringify({ ...keep, ...names }, null, 0) + "\n");
}
console.log(`\n${want.filter((s) => parsed[s]).length}/${want.length} symbol pages present, ${errors} errors`);
process.exit(errors ? 1 : 0);
