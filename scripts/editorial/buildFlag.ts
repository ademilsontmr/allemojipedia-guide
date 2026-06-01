import type { Emoji } from "../../src/data/emojis";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";
import { buildFromNativeBase } from "./buildEnhancedEnrichment";

const countryFromFlagSlug = (slug: string): string => {
  if (!slug.startsWith("flag-")) return slug;
  return slug
    .replace(/^flag-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

/** Notable country hooks for richer copy — fallback template for others. */
const FLAG_HOOKS: Record<string, { sports: string; culture: string; travel: string }> = {
  Brazil: {
    sports: "World Cup, volleyball, and Olympics pride",
    culture: "Carnival, samba, and Portuguese-language identity",
    travel: "Rio beaches, Amazon trips, and São Paulo city breaks",
  },
  Portugal: {
    sports: "Euro and World Cup support for A Seleção",
    culture: "Fado, pastéis de nata, and Lusophone diaspora",
    travel: "Lisbon tiles, Porto wine, and Algarve coast",
  },
  "United States": {
    sports: "Super Bowl, NBA, and Fourth of July",
    culture: "melting-pot diaspora and regional identity debates",
    travel: "national parks, NYC, and road trip culture",
  },
  "United Kingdom": {
    sports: "Premier League, Wimbledon, and royal event memes",
    culture: "tea, pub culture, and Brexit-era flag discourse",
    travel: "London, Scotland highlands, and Wales coast",
  },
  Japan: {
    sports: "Olympics, baseball, and sumo",
    culture: "anime fandom, cherry blossom season, and tech exports",
    travel: "Tokyo, Kyoto temples, and rail travel",
  },
  Germany: {
    sports: "Bundesliga and national team",
    culture: "Oktoberfest, engineering pride, and EU leadership",
    travel: "Berlin history, Bavarian Alps, and Rhine cruises",
  },
  France: {
    sports: "Tour de France and Les Bleus",
    culture: "cuisine, fashion, and Francophone world",
    travel: "Paris, Provence, and ski resorts",
  },
  Argentina: {
    sports: "football passion and Messi-era pride",
    culture: "tango, asado, and Latin American identity",
    travel: "Patagonia, Buenos Aires, and Iguazu",
  },
  Mexico: {
    sports: "football and boxing",
    culture: "Día de Muertos, mariachi, and diaspora in US",
    travel: "Cancún, CDMX, and colonial towns",
  },
  Canada: {
    sports: "hockey and winter Olympics",
    culture: "bilingual identity and maple leaf branding",
    travel: "Rockies, Toronto, and northern lights",
  },
  Australia: {
    sports: "cricket, AFL, and Olympics",
    culture: "outdoor lifestyle and Indigenous recognition debates",
    travel: "Great Barrier Reef, Sydney, and outback",
  },
  Italy: {
    sports: "calcio and Giro d'Italia",
    culture: "food, Renaissance art, and regional rivalry",
    travel: "Rome, Amalfi, and Tuscany wine",
  },
  Spain: {
    sports: "La Liga and national team treble eras",
    culture: "flamenco, siesta memes, and regional flags discourse",
    travel: "Barcelona, Madrid, and Balearic islands",
  },
  India: {
    sports: "cricket dominance and hockey heritage",
    culture: "Diwali, Bollywood, and multilingual identity",
    travel: "Taj Mahal, Kerala backwaters, and Himalayas",
  },
  "South Korea": {
    sports: "Olympics and football resurgence",
    culture: "K-pop, K-drama, and tech exports",
    travel: "Seoul, Busan, and Jeju",
  },
};

export const buildFlagSpec = (emoji: Emoji, batchId: string): EmojiBatchEnrichment => {
  const u = emoji.unicode;
  const country = countryFromFlagSlug(emoji.slug);
  const hooks = FLAG_HOOKS[country] ?? {
    sports: "international tournaments and regional sports pride",
    culture: "national holidays, diaspora identity, and cultural exports",
    travel: "trip planning, expat life, and heritage visits",
  };

  const base = buildFromNativeBase(emoji, {
    searchTitle: `Flag of ${country} Emoji (${u}) Meaning: Country, Travel, and Pride`,
    extraParagraphs: [
      `The Flag of ${country} emoji (${u}) represents ${country} in digital messages — nationality, travel, sports support, and cultural pride.`,
      `During international tournaments and national holidays, ${u} spikes in posts from fans and diaspora communities.`,
      `Common uses: '${country} trip ${u}', '${country} team ${u}', and heritage pride in bios — always match the country you mean; wrong flags confuse group chats.`,
      `Flag emojis encode ISO region codes — ${u} is not decoration when someone shares migration, politics, or disaster news; read tone carefully.`,
    ],
    snippetAnswer: `${u} Flag of ${country} marks nationality, travel plans, sports support, and diaspora pride — verify you mean ${country}, not a lookalike flag.`,
    textingMeaning: `'From ${country} ${u}', 'Team ${country} ${u}', 'Landing in ${country} ${u}'.`,
    socialMeaning: `${hooks.sports}; ${hooks.culture}; travel content about ${hooks.travel}.`,
    caution: `Using ${u} mockingly during ${country}'s crises or elections reads hostile — respect context. Wrong flag = common mistake; double-check before sending.`,
    extraExamples: [
      { context: "Travel", text: `${country} bound ${u}` },
      { context: "Sports", text: `Go ${country}! ${u}` },
      { context: "Pride", text: `Proud ${u}` },
      { context: "Heritage", text: `${country} roots ${u}` },
      { context: "Event", text: `Holiday ${u}` },
      { context: "Food", text: `${country} night ${u}` },
    ],
    extraContextBlocks: [
      { title: "Travel", body: `${u} tags ${hooks.travel} — pair with city names for clarity.` },
      { title: "Sports", body: `${hooks.sports} — live match threads flood with ${u}.` },
      { title: "Diaspora", body: `Heritage posts and bilingual identity often include ${u} alongside other flags.` },
      { title: "Vs similar flags", body: "Many flags look alike at emoji size — spell country name in text too." },
    ],
    extraWhenNotToUse: [
      `Do not use ${u} to mock ${country} during natural disasters or conflict.`,
      "Avoid wrong flag when nationality is sensitive — verify ISO code.",
      "Political trolling with flags escalates fast — prefer words for debate.",
    ],
    extraFaqs: [
      { question: `What does ${u} mean?`, answer: `Flag of ${country} — nationality, travel, sports, and cultural identity.` },
      { question: `How to copy ${country} flag emoji?`, answer: `Copy ${u} from this page for WhatsApp, Instagram, and documents.` },
      { question: `${u} vs other flags?`, answer: `Each flag emoji maps to one ISO country/region — ${country} only.` },
    ],
  });

  return { batchId, ...base };
};
