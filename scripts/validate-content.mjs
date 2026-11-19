// Validates src/content/emoji/*.json against the writing brief. Usage: node scripts/validate-content.mjs [slug ...]
import { readFileSync, existsSync, readdirSync } from "node:fs";
const all = JSON.parse(readFileSync("src/data/emojis.json", "utf8"));
const curated = JSON.parse(readFileSync("src/data/curated.json", "utf8"));
const slugs = new Set(all.map((e) => e.slug));
const bySlug = new Map(all.map((e) => [e.slug, e]));
const want = process.argv.slice(2).length ? process.argv.slice(2) : curated;
const wc = (s) => String(s).trim().split(/\s+/).length;
const BANNED = [/in today'?s digital/i, /versatile emoji/i, /adds? a touch of/i, /digital communication landscape/i];
let errors = 0, done = 0; const missing = [];
const err = (slug, m) => { errors++; console.log(`✗ ${slug}: ${m}`); };
const range = (slug, name, n, lo, hi) => { if (n < lo || n > hi) err(slug, `${name} = ${n}, expected ${lo}-${hi}`); };
for (const slug of want) {
  const f = `src/content/emoji/${slug}.json`;
  if (!existsSync(f)) { missing.push(slug); continue; }
  let d; try { d = JSON.parse(readFileSync(f, "utf8")); } catch (e) { err(slug, "invalid JSON: " + e.message); continue; }
  done++;
  const e = bySlug.get(slug);
  if (d.slug !== slug) err(slug, "slug field does not match filename");
  for (const k of ["title", "description", "summary", "meaning", "contexts", "examples", "combos", "confusedWith", "avoid", "design", "faqs", "related"]) if (d[k] === undefined) err(slug, `missing ${k}`);
  if (errors && !d.meaning) continue;
  const tl = [...(d.title || "")].length; range(slug, "title chars", tl, 40, 62);
  if (!/emoji/i.test(d.title || "")) err(slug, "title must contain 'Emoji'");
  if (e && !(d.title || "").replace(/️/g, "").includes(e.emoji.replace(/️/g, ""))) err(slug, "title must contain the emoji character");
  range(slug, "description chars", [...(d.description || "")].length, 135, 165);
  range(slug, "summary words", wc(d.summary), 35, 65);
  range(slug, "meaning paragraphs", d.meaning?.length ?? 0, 3, 4);
  (d.meaning || []).forEach((p, i) => range(slug, `meaning[${i}] words`, wc(p), 50, 120));
  range(slug, "contexts", d.contexts?.length ?? 0, 3, 4);
  (d.contexts || []).forEach((c, i) => { if (!c.label || !c.body) err(slug, `contexts[${i}] needs label+body`); else range(slug, `contexts[${i}] words`, wc(c.body), 40, 100); });
  range(slug, "examples", d.examples?.length ?? 0, 5, 6);
  (d.examples || []).forEach((x, i) => { if (!x.text || !x.meaning) err(slug, `examples[${i}] needs text+meaning`); });
  range(slug, "combos", d.combos?.length ?? 0, 3, 4);
  range(slug, "confusedWith", d.confusedWith?.length ?? 0, 2, 3);
  (d.confusedWith || []).forEach((c) => { if (!slugs.has(c.slug)) err(slug, `confusedWith slug not found: ${c.slug}`); if (c.slug === slug) err(slug, "confusedWith lists itself"); });
  range(slug, "avoid", d.avoid?.length ?? 0, 2, 3);
  range(slug, "design words", wc(d.design), 30, 100);
  range(slug, "faqs", d.faqs?.length ?? 0, 4, 5);
  (d.faqs || []).forEach((x, i) => { if (!x.q || !x.a) err(slug, `faqs[${i}] needs q+a`); else range(slug, `faqs[${i}] answer words`, wc(x.a), 22, 80); });
  if ((d.related?.length ?? 0) !== 6) err(slug, `related = ${d.related?.length}, expected 6`);
  (d.related || []).forEach((r) => { if (!slugs.has(r)) err(slug, `related slug not found: ${r}`); if (r === slug) err(slug, "related lists itself"); });
  const text = JSON.stringify(d);
  for (const b of BANNED) if (b.test(text)) err(slug, `banned phrase ${b}`);
  if (/\]\(|<a |\*\*/.test(text)) err(slug, "contains markdown/HTML");
}
console.log(`\n${done}/${want.length} files present, ${errors} errors${missing.length ? `, missing: ${missing.slice(0, 40).join(", ")}${missing.length > 40 ? "…" : ""}` : ""}`);
process.exit(errors ? 1 : 0);
