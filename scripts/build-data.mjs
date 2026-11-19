// Builds src/data/emojis.json (every base emoji, from Unicode/CLDR via emojibase)
// and src/data/curated.json (the emojis that get their own in-depth page).
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const data = require("emojibase-data/en/data.json");
const meta = require("emojibase-data/meta/groups.json");
const sc = {
  github: require("emojibase-data/en/shortcodes/github.json"),
  slack: require("emojibase-data/en/shortcodes/iamcal.json"),
  discord: require("emojibase-data/en/shortcodes/joypixels.json"),
  cldr: require("emojibase-data/en/shortcodes/cldr.json"),
};
const CATEGORY = { 0: "smileys-and-emotion", 1: "people-and-body", 3: "animals-and-nature", 4: "food-and-drink", 5: "travel-and-places", 6: "activities", 7: "objects", 8: "symbols", 9: "flags" };
const YEAR = { 0.6: 2010, 0.7: 2014, 1: 2015, 2: 2015, 3: 2016, 4: 2016, 5: 2017, 11: 2018, 12: 2019, 12.1: 2019, 13: 2020, 13.1: 2020, 14: 2021, 15: 2022, 15.1: 2023, 16: 2024, 17: 2025, 18: 2026 };
const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'.]/g, "").replace(/&/g, "and").replace(/[^a-z0-9#*]+/g, "-").replace(/#/g, "hash").replace(/\*/g, "asterisk").replace(/^-|-$/g, "");
const titleCase = (s) => s.replace(/(^|[\s\-(“:])([a-z])/g, (_, a, b) => a + b.toUpperCase()).replace(/\b(Of|And|With|In|On|The|For|To|A)\b/g, (w, _1, off) => (off ? w.toLowerCase() : w));
const first = (v) => (Array.isArray(v) ? v[0] : v);
const seen = new Set();
const emojis = data.filter((e) => e.group !== undefined && e.group !== 2).map((e) => {
  let slug = slugify(e.label);
  if (seen.has(slug)) slug += "-" + e.hexcode.toLowerCase();
  seen.add(slug);
  const codes = {};
  for (const [k, m] of Object.entries(sc)) if (m[e.hexcode]) codes[k] = first(m[e.hexcode]);
  return {
    emoji: e.emoji, slug, name: titleCase(e.label.replace(/^flag: /, "Flag: ")), hex: e.hexcode,
    category: CATEGORY[e.group], subgroup: meta.subgroups[e.subgroup], version: e.version, year: YEAR[e.version] ?? null,
    tags: e.tags ?? [], shortcodes: codes, order: e.order,
    skins: (e.skins ?? []).map((s) => ({ emoji: s.emoji, tone: s.tone, hex: s.hexcode })),
  };
}).sort((a, b) => a.order - b.order);
writeFileSync("src/data/emojis.json", JSON.stringify(emojis));

const byChar = new Map(emojis.map((e) => [e.emoji.replace(/️/g, ""), e]));
const picks = readFileSync("scripts/curated-picks.txt", "utf8").split("\n").filter((l) => l && !l.startsWith("#")).join(" ").split(/\s+/).filter(Boolean);
const curated = []; const missing = [];
for (const p of picks) { const e = byChar.get(p.replace(/️/g, "")); if (!e) missing.push(p); else if (!curated.includes(e.slug)) curated.push(e.slug); }
// Every smiley/emotion emoji is high-intent, so the whole group is curated, except the newest
// releases: most phones cannot display them yet and there is no real usage to describe.
for (const e of emojis) if (e.category === "smileys-and-emotion" && e.version < 17 && !curated.includes(e.slug)) curated.push(e.slug);
writeFileSync("src/data/curated.json", JSON.stringify(curated));
console.log("all", emojis.length, "curated", curated.length, "missing", missing.join(" "));
const c = {}; for (const s of curated) { const e = emojis.find((x) => x.slug === s); c[e.category] = (c[e.category] || 0) + 1; } console.log(c);
