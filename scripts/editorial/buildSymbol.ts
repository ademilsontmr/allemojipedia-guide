import type { Emoji } from "../../src/data/emojis";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";
import { buildFromNativeBase } from "./buildEnhancedEnrichment";

const SYMBOL_SUBGROUP: Record<
  string,
  { role: string; texting: string; social: string; caution: string }
> = {
  "transport-sign": {
    role: "public signage and wayfinding",
    texting: "location hints, accessibility, and facility directions",
    social: "travel tips, airport threads, and urban planning posts",
    caution: "Do not joke about accessibility signs in ableist ways.",
  },
  warning: {
    role: "warnings, prohibitions, and safety alerts",
    texting: "serious alerts, rules reminders, and 'don't do this' warnings",
    social: "safety campaigns, PSA posts, and meme rule signs",
    caution: "Never mock real hazards, disasters, or accessibility needs.",
  },
  arrow: {
    role: "direction and flow",
    texting: "scroll up/down, see above/below, and thread navigation",
    social: "carousel CTAs, tutorial steps, and link placement",
    caution: "Arrow alone may confuse — label destination in words.",
  },
  "av-symbol": {
    role: "media playback controls",
    texting: "playlist vibes, skip tracks, and 'play this next'",
    social: "DJ sets, streaming UI jokes, and retro media posts",
    caution: "Fine for music; odd in solemn contexts.",
  },
  currency: {
    role: "money and exchange",
    texting: "prices, forex jokes, and 'money moving'",
    social: "finance TikTok, travel cash tips, and side-hustle posts",
    caution: "Financial stress threads need tact — not flex emoji alone.",
  },
  gender: {
    role: "gender symbols",
    texting: "identity shorthand with care — always pair with respect",
    social: "Pride, trans visibility, and inclusive design posts",
    caution: "Never use to mock gender identity — words matter more than symbols.",
  },
  geometric: {
    role: "color squares and shapes",
    texting: "color coding, design systems, and bullet aesthetics",
    social: "brand palettes, mood boards, and organization hacks",
    caution: "Color alone isn't accessible — add text labels.",
  },
  keycap: {
    role: "keyboard keys and input",
    texting: "typing jokes, passwords humor (never real secrets), and shortcuts",
    social: "developer memes, gaming controls, and tech tutorials",
    caution: "Never share real passwords even as joke with keycap emojis.",
  },
  math: {
    role: "math notation",
    texting: "equations, balance jokes, and 'math is mathing'",
    social: "study threads, finance equality memes, and STEM posts",
    caution: "Students use literally — don't mock struggle.",
  },
  "other-symbol": {
    role: "special symbols and badges",
    texting: "badges, marks, and niche Unicode symbols",
    social: "medical awareness, beginner marks, and design posts",
    caution: "Verify symbol meaning — some are culturally or medically specific.",
  },
  punctuation: {
    role: "punctuation emphasis",
    texting: "dramatic questions, exclamations, and wavy dash ~ vibes ~",
    social: "aesthetic captions and ironic emphasis",
    caution: "Heavy punctuation emojis can feel aggressive in conflict.",
  },
  religion: {
    role: "faith and spiritual symbols",
    texting: "respectful faith references — not casual decoration",
    social: "holiday observance, interfaith education, and temple/mosque/church posts",
    caution: "Use respectfully — never mock religions or sacred symbols.",
  },
  alphanum: {
    role: "input symbols and Latin letters",
    texting: "keyboard layouts, CAPS jokes, and typing tutorials",
    social: "designer keyboard aesthetics and multilingual typing",
    caution: "Regional keyboard differences change which keys people recognize.",
  },
  zodiac: {
    role: "astrology Ophiuchus and zodiac culture",
    texting: "horoscope humor, star sign call-outs, and birthday astrology",
    social: "meme astrology Twitter and compatibility jokes",
    caution: "Astrology skeptics exist — playful tone helps.",
  },
};

const SYMBOL_OVERRIDES: Record<string, Partial<EmojiBatchEnrichment>> = {
  "atm-sign": {
    snippetAnswer: "🏧 ATM Sign marks cash machines, banking errands, and 'need money' humor — literal wayfinding for ATMs.",
    detailedParagraphs: [
      "ATM Sign (🏧) is standard public signage for automated teller machines — travel threads and city guides use it literally.",
      "Also slang: '🏧 run' means quick cash stop before going out.",
      "Pair with bank or map pin when giving directions to visitors.",
    ],
    examples: [
      { context: "Directions", text: "ATM around the corner 🏧" },
      { context: "Errand", text: "Quick 🏧 stop" },
      { context: "Travel", text: "Cash only — find 🏧" },
      { context: "Broke", text: "Time to visit 🏧" },
      { context: "Night", text: "24h 🏧" },
    ],
  },
  "wheelchair-symbol": {
    snippetAnswer: "♿ Wheelchair Symbol marks accessibility, disabled access routes, and disability community identity — use respectfully.",
    detailedParagraphs: [
      "Wheelchair Symbol (♿) is international accessibility signage — ramps, elevators, and reserved seating.",
      "Disability advocates use ♿ in bio and posts for visibility — not a joke icon.",
      "Never use ♿ to mock disability — literal access info or community identity only.",
    ],
    caution: "Ableist jokes with ♿ harm real people — accessibility is serious.",
  },
  "mens-room": {
    snippetAnswer: "🚹 Men's Room marks male restroom signage — wayfinding, travel, and venue maps.",
    detailedParagraphs: [
      "Men's Room (🚹) is standard restroom sign — airports, stadiums, and restaurant hunts.",
      "Trans and non-binary users may not align with binary signs — respect everyone's safety.",
    ],
  },
  "womens-room": {
    snippetAnswer: "🚺 Women's Room marks female restroom signage — wayfinding and travel logistics.",
    detailedParagraphs: [
      "Women's Room (🚺) helps locate facilities in unfamiliar venues.",
      "Queue humor is common — long lines at events tagged 🚺.",
    ],
  },
  "medical-symbol": {
    snippetAnswer: "⚕️ Medical Symbol marks healthcare, medicine, and caduceus-adjacent professional context — not casual decoration.",
    detailedParagraphs: [
      "Medical Symbol (⚕️) tags health posts, med school, and hospital wayfinding.",
      "Distinct from ♾️ or 🏥 — this is the staff/snake symbol.",
      "Do not use for fake medical claims — accuracy matters.",
    ],
  },
  "japanese-symbol-for-beginner": {
    snippetAnswer: "🔰 Japanese Symbol for Beginner marks newbie status — driving learner plates, tutorial posts, and 'day one' energy.",
    detailedParagraphs: [
      "Japanese Symbol for Beginner (🔰) is the shoshinsha mark on learner driver cars in Japan.",
      "Gaming and coding tutorials use 🔰 for beginner-friendly content.",
      "Wholesome 'just started' flex — learning something new.",
    ],
  },
  "check-box-with-check": {
    snippetAnswer: "☑️ Check Box With Check means done, selected, or task complete — lists, polls, and 'finished' updates.",
    detailedParagraphs: [
      "Check Box With Check (☑️) closes todo items in chat — migration checklists and shopping lists.",
      "Designers use for UI mockups; students for assignment tracking.",
    ],
  },
  "white-question-mark": {
    snippetAnswer: "❔ White Question Mark adds confusion, curiosity, or rhetorical doubt — softer than bold red ❓.",
    detailedParagraphs: [
      "White Question Mark (❔) tags genuine questions and 'wait what' reactions.",
      "Quiz promos and AMA announcements lead with ❔.",
    ],
  },
  "white-exclamation-mark": {
    snippetAnswer: "❕ White Exclamation Mark emphasizes announcements and surprise — alert without full 🚨 energy.",
    detailedParagraphs: [
      "White Exclamation Mark (❕) highlights important but not emergency news.",
      "Spoiler warnings and plot twists sometimes tag ❕.",
    ],
  },
  "heavy-equals-sign": {
    snippetAnswer: "🟰 Heavy Equals Sign marks balance, sameness, or 'math is mathing' memes — TikTok equality jokes.",
    detailedParagraphs: [
      "Heavy Equals Sign (🟰) trended in math meme format — both sides equal humor.",
      "Also literal balance in finance 'break even' posts.",
    ],
  },
  ophiuchus: {
    snippetAnswer: "⛎ Ophiuchus is the 13th zodiac constellation — astrology debate, snake bearer memes, and horoscope drama.",
    detailedParagraphs: [
      "Ophiuchus (⛎) sparks 'you're actually this sign' social posts every few years.",
      "Serpent bearer imagery — distinct from ♐ Sagittarius adjacent lore.",
    ],
  },
};

export const buildSymbolSpec = (emoji: Emoji, batchId: string): EmojiBatchEnrichment => {
  const u = emoji.unicode;
  const name = emoji.name;
  const slug = emoji.slug;
  const angle = SYMBOL_SUBGROUP[emoji.subgroup] ?? {
    role: "symbols and signs",
    texting: "emphasis and shorthand",
    social: "design and meme posts",
    caution: "Clarify intent — symbols drift across communities.",
  };

  const override = SYMBOL_OVERRIDES[slug];

  const base = buildFromNativeBase(emoji, {
    searchTitle: `${name} Emoji (${u}) Meaning: ${angle.role.charAt(0).toUpperCase() + angle.role.slice(1)}`,
    extraParagraphs: [
      `${name} (${u}) functions as ${angle.role} in Unicode — faster visual shorthand than spelling it out.`,
      `In texting, ${u} often signals ${angle.texting}.`,
      `On social, ${u} appears in ${angle.social}.`,
    ],
    textingMeaning: `'${name} ${u}' — ${angle.texting}.`,
    socialMeaning: `${angle.social} — ${u} tags relevant posts.`,
    caution: override?.caution ?? angle.caution,
    extraExamples: [
      { context: "Chat", text: `${u} noted` },
      { context: "Sign", text: `Look for ${u}` },
      { context: "Design", text: `${u} in layout` },
      { context: "Meme", text: `${u} energy` },
      { context: "Post", text: `${u}` },
    ],
    extraContextBlocks: [
      { title: "Subgroup", body: `${name} is grouped under ${emoji.subgroup.replace(/-/g, " ")} symbols.` },
      { title: "Literal vs meme", body: "Some readers use symbols literally (signage); others ironically — context decides." },
    ],
    extraWhenNotToUse: ["When a text label is required for accessibility or safety."],
    extraFaqs: [
      { question: `What does ${u} mean?`, answer: `${name} — ${angle.role} in digital messages.` },
      { question: `How to copy ${u}?`, answer: "Copy from this page for exact Unicode in posts and docs." },
    ],
  });

  if (override) {
    return {
      batchId,
      ...base,
      ...override,
      detailedParagraphs: override.detailedParagraphs ?? base.detailedParagraphs,
      examples: override.examples ?? base.examples,
      contextBlocks: override.contextBlocks ?? base.contextBlocks,
      faqs: override.faqs ?? base.faqs,
    };
  }

  return { batchId, ...base };
};
