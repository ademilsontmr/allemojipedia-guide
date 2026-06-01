import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, humanizeSubgroup, pick, pickN } from "./shared";

const batchId = "06-symbols";

const subgroupAngles: Record<string, { role: string; caution: string }> = {
  "transport-sign": { role: "traffic and transport signage", caution: "misuse may confuse safety instructions" },
  warning: { role: "warnings, hazards, and alerts", caution: "do not joke about real danger or radioactive sites" },
  arrow: { role: "direction, navigation, and flow", caution: "arrows alone may confuse without labeled destinations" },
  religion: { role: "faith and religious symbols", caution: "use respectfully — not as casual decoration" },
  zodiac: { role: "astrology and zodiac signs", caution: "astrology skeptics may find heavy zodiac posts annoying" },
  "av-symbol": { role: "media controls and playback", caution: "fine for playlists; odd in solemn contexts" },
  gender: { role: "gender symbols and identity", caution: "sensitive topics deserve words, not emoji alone" },
  math: { role: "math and logic notation", caution: "students use literally; avoid mocking math struggle" },
  punctuation: { role: "punctuation and typographic symbols", caution: "emphasis emojis can feel aggressive if overused" },
  currency: { role: "money symbols and commerce", caution: "financial stress threads need tact" },
  "other-symbol": { role: "general symbols and signs", caution: "meaning varies by community — clarify intent" },
  keycap: { role: "keycap numbers and input", caution: "often used in passwords jokes — avoid real secrets" },
  alphanum: { role: "letters, numbers, and input symbols", caution: "keyboard and typing references" },
  geometric: { role: "shapes and geometric markers", caution: "design and bullet-point usage" },
};

export const generateSymbolsBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const angle = subgroupAngles[emoji.subgroup] ?? { role: "symbols and signs", caution: "verify audience understands your symbol" };
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Symbol Meaning and How to Use It Correctly`,
    snippetAnswer: `${u} ${name} functions as a ${angle.role} symbol. Communities assign shorthand meaning — approval, warning, direction, or emphasis — depending on ${humanizeSubgroup(emoji.subgroup)} context.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) is categorized under ${humanizeSubgroup(emoji.subgroup)} in Unicode. Symbol emojis behave like visual punctuation: they highlight, warn, or direct attention faster than words.`,
        `Designers and presenters use ${u} in slide titles and bullet lists. Gamers map ${u} to UI controls when streaming ${kw} content.`,
        `Before using ${u} with a new audience, check whether your circle reads it literally or ironically — symbol drift happens fast across age groups.`,
      ],
      [
        `Accessibility teams note that ${u} should accompany text labels in warnings — color and symbol alone may not convey meaning to all users.`,
        `In math and logic chats, ${u} carries technical meaning; in casual texting it might be decorative emphasis only.`,
        `Search interest for "${label} emoji meaning" often comes from people who saw ${u} in a comment and needed translation.`,
      ],
      [
        `${u} rarely replaces full sentences except in ultra-short replies. Pair with words when stakes are high (health, money, legal).`,
        `Meme pages repurpose ${u} sarcastically — if tone is unclear, ask before reacting.`,
        `Copy ${u} from this page when you need the exact Unicode symbol for posts, docs, or messages.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `${u} in texting often emphasizes ${angle.role}. Example: "${pickN(emoji.slug, [`See below ${u}`, `Important ${u}`, `This way ${u}`, `Heads up ${u}`], 1, 7)[0]}".`,
      `Groups develop local meaning for ${u} — confirm before assuming universal slang.`,
      `${u} works as a one-tap reaction when full words feel too heavy.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} appears in captions needing ${angle.role} — infographics, tutorials, and PSA posts.`,
      `Commenters spam ${u} during live streams to signal agreement or direction.`,
      `Educators use ${u} in carousel slides about ${kw}.`,
    ], 2),
    caution: pick(emoji.slug, [
      angle.caution,
      `${u} in warnings must match real risk — do not cry wolf.`,
      `Avoid ${u} when someone shares grief; symbols can feel cold.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Emphasis", text: `Read this ${u}` },
        { context: "Direction", text: `Link above ${u}` },
        { context: "Warning", text: `Be careful ${u}` },
        { context: "Design", text: `Slide marker ${u}` },
        { context: "Reply", text: `Noted ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        { title: "Visual punctuation", body: `${u} draws eyes to the next line — useful in long captions.` },
        { title: "Community shorthand", body: `Discord and Reddit servers may pin glossary entries for ${u}.` },
        { title: "Educational posts", body: `Teachers explain ${angle.role} with ${u} in study carousels.` },
      ],
      3,
      5
    ),
    searchIntents: [`${label} emoji meaning`, `${u} symbol meaning`, `${name} copy paste`, `${label} symbol emoji`],
    whenNotToUse: [angle.caution, `${u} is inappropriate as the only response to serious personal news.`],
    faqs: pickN(
      emoji.slug,
      [
        { question: `What type of symbol is ${u}?`, answer: `${name} — used for ${angle.role} in digital communication.` },
        { question: `Is ${u} universal?`, answer: `Mostly, but sarcasm and niche slang vary by community.` },
      ],
      2,
      6
    ),
  });
};
