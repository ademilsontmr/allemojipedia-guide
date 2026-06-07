/**
 * Generates emojiContextPages.generated.ts — top 50 emojis × 5 contexts.
 * Manual entries in emojiContextPages.ts take precedence on merge.
 *
 * Run: npx tsx scripts/generate-context-pages.ts
 */
import fs from "fs";
import path from "path";
import { emojis, getEmojiBySlug } from "../src/data/emojis";
import { topSearchEmojiSlugs } from "../src/data/topSearchEmojiSlugs";
import type { EmojiContextPage, EmojiContextType } from "../src/data/emojiContextPages";

const CONTEXTS: EmojiContextType[] = ["from-a-girl", "from-a-guy", "whatsapp", "instagram", "tiktok"];

const contextMeta: Record<
  EmojiContextType,
  { shortTitle: string; titleSuffix: string; descPrefix: string; answerIntro: (u: string, name: string, meaning: string) => string }
> = {
  "from-a-girl": {
    shortTitle: "From a girl",
    titleSuffix: "From a Girl",
    descPrefix: "What",
    answerIntro: (u, name, meaning) =>
      `When a girl sends ${u}, it often signals ${meaning.toLowerCase().replace(/\.$/, "")}. Tone depends on your relationship and the words around the emoji.`,
  },
  "from-a-guy": {
    shortTitle: "From a guy",
    titleSuffix: "From a Guy",
    descPrefix: "How to read",
    answerIntro: (u, name, meaning) =>
      `When a guy sends ${u}, it usually reflects ${meaning.toLowerCase().replace(/\.$/, "")}. Private, consistent use carries more weight than a one-off group-chat reaction.`,
  },
  whatsapp: {
    shortTitle: "On WhatsApp",
    titleSuffix: "on WhatsApp",
    descPrefix: "What",
    answerIntro: (u, name, meaning) =>
      `On WhatsApp, ${u} commonly means ${meaning.toLowerCase().replace(/\.$/, "")}. Family groups, friend chats, and private messages all shape how it reads.`,
  },
  instagram: {
    shortTitle: "On Instagram",
    titleSuffix: "on Instagram",
    descPrefix: "How",
    answerIntro: (u, name, meaning) =>
      `On Instagram, ${u} is often used for ${meaning.toLowerCase().replace(/\.$/, "")}. Comments, story replies, and DMs can change the tone.`,
  },
  tiktok: {
    shortTitle: "On TikTok",
    titleSuffix: "on TikTok",
    descPrefix: "What",
    answerIntro: (u, name, meaning) =>
      `On TikTok, ${u} frequently appears in comments and captions for ${meaning.toLowerCase().replace(/\.$/, "")}. Gen Z slang and meme culture often amplify the tone.`,
  },
};

const buildPage = (slug: string, context: EmojiContextType): EmojiContextPage | null => {
  const emoji = getEmojiBySlug(slug);
  if (!emoji) return null;

  const meta = contextMeta[context];
  const meaning = emoji.shortMeaning || emoji.name;

  const signals: Record<EmojiContextType, string[]> = {
    "from-a-girl": [
      `She pairs ${emoji.unicode} with personal compliments or emotional wording`,
      `It appears in private chats more than cold group replies`,
      `The message already feels warm, playful, or supportive`,
    ],
    "from-a-guy": [
      `He uses ${emoji.unicode} with direct compliments or caring language`,
      `It shows up consistently in your private thread`,
      `The surrounding tone is personal rather than purely logistical`,
    ],
    whatsapp: [
      `Used after thanks, plans, jokes, or emotional updates`,
      `Appears in the flow of an active chat—not as a random spam reaction`,
      `Matches the group's usual emoji style and relationship norms`,
    ],
    instagram: [
      `Posted as a comment, story reply, or DM reaction`,
      `Paired with short hype words like "love this", "insane", or "need"`,
      `Fits the visual content (photo, reel, outfit, achievement)`,
    ],
    tiktok: [
      `Shows up under funny, chaotic, wholesome, or relatable clips`,
      `Used with internet-native phrases ("not me", "help", "I can't")`,
      `Signals exaggerated reaction rather than a formal statement`,
    ],
  };

  const examples: Record<EmojiContextType, string[]> = {
    "from-a-girl": [`That's so sweet ${emoji.unicode}`, `Miss you ${emoji.unicode}`, `You did amazing ${emoji.unicode}`],
    "from-a-guy": [`You killed it ${emoji.unicode}`, `Proud of you ${emoji.unicode}`, `Had to tell you ${emoji.unicode}`],
    whatsapp: [`Thanks so much ${emoji.unicode}`, `See you tomorrow ${emoji.unicode}`, `Got it ${emoji.unicode}`],
    instagram: [`This is everything ${emoji.unicode}`, `Need this ${emoji.unicode}`, `So good ${emoji.unicode}`],
    tiktok: [`The ending ${emoji.unicode}`, `Not me watching this 10 times ${emoji.unicode}`, `Why is this so real ${emoji.unicode}`],
  };

  const cautions: Record<EmojiContextType, string> = {
    "from-a-girl": `Do not read ${emoji.unicode} as automatically romantic or serious. One emoji rarely defines intent without context.`,
    "from-a-guy": `A single ${emoji.unicode} after a polite thank-you can still be friendly. Look for patterns, not one message.`,
    whatsapp: `WhatsApp tone varies by culture and family. Relationship history matters more than the emoji alone.`,
    instagram: `Public comments are often casual hype. Private DMs may carry more personal intent.`,
    tiktok: `${emoji.unicode} on TikTok is often ironic or exaggerated. It may confuse audiences outside meme-native spaces.`,
  };

  const otherContexts = CONTEXTS.filter((c) => c !== context);

  return {
    emojiSlug: slug,
    context,
    title: `${emoji.name} Emoji Meaning ${meta.titleSuffix}`,
    shortTitle: meta.shortTitle,
    description:
      context === "from-a-guy"
        ? `${meta.descPrefix} the ${emoji.name.toLowerCase()} emoji when a guy sends ${emoji.unicode} in texting or social media.`
        : `${meta.descPrefix} ${emoji.unicode} means ${context === "from-a-girl" ? "when a girl sends it" : context === "whatsapp" ? "in WhatsApp chats" : context === "instagram" ? "on Instagram" : "on TikTok"}—with real examples.`,
    answer: meta.answerIntro(emoji.unicode, emoji.name, meaning),
    signals: signals[context],
    examples: examples[context],
    caution: cautions[context],
    relatedContexts: otherContexts.slice(0, 3),
  };
};

const pages: EmojiContextPage[] = [];
const emojiSlugs = new Set(emojis.map((e) => e.slug));

for (const slug of topSearchEmojiSlugs) {
  if (!emojiSlugs.has(slug)) {
    console.warn(`Skipping missing slug: ${slug}`);
    continue;
  }
  for (const context of CONTEXTS) {
    const page = buildPage(slug, context);
    if (page) pages.push(page);
  }
}

const out = `// AUTO-GENERATED — do not edit. Run: npx tsx scripts/generate-context-pages.ts
import type { EmojiContextPage } from "./emojiContextPages";

export const emojiContextPagesGenerated: EmojiContextPage[] = ${JSON.stringify(pages, null, 2)};
`;

const outPath = path.join(process.cwd(), "src/data/emojiContextPages.generated.ts");
fs.writeFileSync(outPath, out);
console.log(`Generated ${pages.length} context pages → ${outPath}`);
