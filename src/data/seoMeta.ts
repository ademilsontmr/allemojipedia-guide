import type { Emoji } from "./emojis";
import { getTopEmojiEditorial } from "./topEmojiEditorial";

const BRAND = "Allemojipedia";

export type PageSeoMeta = {
  title: string;
  description: string;
  ogTitle?: string;
};

export type EmojiSeoMeta = {
  metaTitle: string;
  metaDescription: string;
};

/** Lote 1 — highest search volume / CTR priority */
export const priorityEmojiSeo: Record<string, EmojiSeoMeta> = {
  "face-with-tears-of-joy": {
    metaTitle: "😂 Meaning in Texting: Funny, Memes & 😂 vs 💀",
    metaDescription:
      "What does 😂 mean in 2026? See texting, meme, and TikTok usage—plus when people use 💀 instead. Copy 😂 instantly with examples.",
  },
  "red-heart": {
    metaTitle: "❤️ Red Heart Meaning: Love, Texting & From a Girl",
    metaDescription:
      "What does ❤️ mean in texting? Learn love vs friendship signals, examples, and when it feels romantic. Copy ❤️ in one click.",
  },
  skull: {
    metaTitle: "💀 Emoji Meaning: Gen Z Slang, Texting & 💀 vs 😂",
    metaDescription:
      "What does 💀 mean? Usually 'I'm dead' from laughter—not danger. See Gen Z texting examples and copy 💀 instantly.",
  },
  "loudly-crying-face": {
    metaTitle: "😭 Emoji Meaning: Sad, Funny, or Overwhelmed?",
    metaDescription:
      "What does 😭 mean in texting? It can be sadness, laughter, or drama. See real examples and copy 😭 for WhatsApp and TikTok.",
  },
  fire: {
    metaTitle: "🔥 Fire Emoji Meaning: Hot, Compliment & Texting",
    metaDescription:
      "What does 🔥 mean? Attractive, impressive, or trending. Learn texting and Instagram tone, with examples. Copy 🔥 now.",
  },
  "pleading-face": {
    metaTitle: "🥺 Emoji Meaning in Texting: Cute, Flirty or Sad?",
    metaDescription:
      "What does 🥺 mean? Often cute, begging, or emotional. See flirty vs sad signals and copy 🥺 with real message examples.",
  },
  "smiling-face-with-heart-eyes": {
    metaTitle: "😍 Heart Eyes Meaning: Love, Crush & From a Girl",
    metaDescription:
      "What does 😍 mean? Love, admiration, or attraction. Learn texting and comment tone with examples. Copy 😍 instantly.",
  },
  "thinking-face": {
    metaTitle: "🤔 Thinking Emoji Meaning: Doubt, Sarcasm & Texting",
    metaDescription:
      "What does 🤔 mean in texting? Curiosity, doubt, or side-eye energy. See examples and when it feels sarcastic. Copy 🤔 now.",
  },
  "thumbs-up": {
    metaTitle: "👍 Thumbs Up Meaning: OK, Rude, or Passive-Aggressive?",
    metaDescription:
      "What does 👍 mean in texting and work chats? Approval—or cold? See WhatsApp tone tips and copy 👍 with better replies.",
  },
  "folded-hands": {
    metaTitle: "🙏 Folded Hands Meaning: Prayer, Thanks or High Five?",
    metaDescription:
      "What does 🙏 mean? Prayer, thanks, please, or hope. Learn WhatsApp and texting usage with examples. Copy 🙏 instantly.",
  },
  "winking-face": {
    metaTitle: "😉 Wink Emoji Meaning: Flirty, Joke or Friendly?",
    metaDescription:
      "What does 😉 mean in texting? Flirting, jokes, or playful tone. See when it feels romantic vs casual. Copy 😉 now.",
  },
  "rolling-on-the-floor-laughing": {
    metaTitle: "🤣 ROFL Emoji Meaning: Laughing Hard in Texting",
    metaDescription:
      "What does 🤣 mean? Extreme laughter—stronger than 😂 for many people. See examples and copy 🤣 for chats and memes.",
  },
  "purple-heart": {
    metaTitle: "💜 Purple Heart Meaning: Love, Friendship & Texting",
    metaDescription:
      "What does 💜 mean? Often affection, support, or BTS/army culture. See texting examples and copy 💜 with context tips.",
  },
  "blue-heart": {
    metaTitle: "💙 Blue Heart Meaning: Trust, Friendship & Texting",
    metaDescription:
      "What does 💙 mean? Usually trust, loyalty, or calm affection. See when it is romantic vs platonic. Copy 💙 instantly.",
  },
  "black-heart": {
    metaTitle: "🖤 Black Heart Meaning: Dark Humor, Love & Texting",
    metaDescription:
      "What does 🖤 mean? Can be dark humor, grief, style, or edgy affection. See texting examples and copy 🖤 now.",
  },
  "white-heart": {
    metaTitle: "🤍 White Heart Meaning: Pure Love & Texting",
    metaDescription:
      "What does 🤍 mean? Often pure, soft, or platonic love. Learn texting tone and when to use it vs ❤️. Copy 🤍 instantly.",
  },
  "broken-heart": {
    metaTitle: "💔 Broken Heart Meaning: Sadness, Breakup & Texting",
    metaDescription:
      "What does 💔 mean? Heartbreak, disappointment, or emotional pain. See real texting examples and copy 💔 in one click.",
  },
  "hundred-points": {
    metaTitle: "💯 100 Emoji Meaning: Real, Agreement & Texting",
    metaDescription:
      "What does 💯 mean? 'Keeping it real,' full agreement, or strong approval. See Gen Z examples and copy 💯 instantly.",
  },
  sparkles: {
    metaTitle: "✨ Sparkles Emoji Meaning: Aesthetic, Hype & Irony",
    metaDescription:
      "What does ✨ mean? Emphasis, celebration, aesthetic captions, or sarcasm. See Instagram and texting examples. Copy ✨ now.",
  },
  "clown-face": {
    metaTitle: "🤡 Clown Emoji Meaning: Self-Roast & Texting",
    metaDescription:
      "What does 🤡 mean? Often 'I'm the clown' after a mistake or crush fail. See meme examples and copy 🤡 instantly.",
  },
  eyes: {
    metaTitle: "👀 Eyes Emoji Meaning: Looking, Flirty & Suspicious",
    metaDescription:
      "What does 👀 mean in texting? 'I see that,' flirty attention, or suspicion. See examples and copy 👀 for chats.",
  },
  "melting-face": {
    metaTitle: "🫠 Melting Face Meaning: Embarrassed, Hot & Overwhelmed",
    metaDescription:
      "What does 🫠 mean? Embarrassment, heat, awkwardness, or 'I can't even.' See 2026 texting examples and copy 🫠 now.",
  },
  "upside-down-face": {
    metaTitle: "🙃 Upside-Down Face Meaning: Sarcasm & Passive-Aggressive",
    metaDescription:
      "What does 🙃 mean? Sarcasm, awkward humor, or passive-aggressive tone. See texting examples and copy 🙃 instantly.",
  },
  "smirking-face": {
    metaTitle: "😏 Smirk Emoji Meaning: Flirty, Smug & Texting",
    metaDescription:
      "What does 😏 mean? Flirting, confidence, or playful teasing. Learn when it feels romantic vs rude. Copy 😏 now.",
  },
  "face-blowing-a-kiss": {
    metaTitle: "😘 Kiss Emoji Meaning: Flirty, Love & Texting",
    metaDescription:
      "What does 😘 mean? Affection, flirting, or goodbye love. See examples from texting and DMs. Copy 😘 in one click.",
  },
};

export const mainPagesSeo: Record<string, PageSeoMeta> = {
  "/": {
    title: `Emoji Meanings & Names — Copy Any Emoji Instantly | ${BRAND}`,
    description:
      "What does that emoji mean? Search 3,700+ emoji meanings, slang, texting tone, and copy-paste pages. Free guides for ❤️ 😂 💀 🥺 and more.",
    ogTitle: "Emoji Meanings & Names — Copy Any Emoji Instantly",
  },
  "/emoji-meanings/": {
    title: `Emoji Meanings by Intent — Hearts, Texting, Gen Z & More | ${BRAND}`,
    description:
      "Find the right emoji meaning fast: love, flirting, Gen Z slang, WhatsApp tone, flags, and work chats. Browse intent guides with real examples.",
    ogTitle: "Emoji Meanings by Intent — Hearts, Texting, Gen Z & More",
  },
  "/categories/": {
    title: `Emoji Categories — Browse & Copy 3,700+ Emojis | ${BRAND}`,
    description:
      "Browse emoji by category: smileys, hearts, people, animals, food, flags, and more. Find meanings and copy any emoji instantly.",
    ogTitle: "Emoji Categories — Browse & Copy 3,700+ Emojis",
  },
  "/blog/": {
    title: `Emoji Blog — Texting, Gen Z Slang & Meanings | ${BRAND}`,
    description:
      "Expert emoji guides for texting, Instagram, TikTok, WhatsApp, and work. Learn what emojis really mean in 2026.",
    ogTitle: "Emoji Blog — Texting, Gen Z Slang & Meanings",
  },
  "/emoji-comparisons/": {
    title: `Emoji Comparisons — Which Emoji Should You Use? | ${BRAND}`,
    description:
      "Compare similar emojis side by side: 😂 vs 🤣, ❤️ vs 💜, 👍 tone, and more. Pick the right emoji for your message.",
    ogTitle: "Emoji Comparisons — Which Emoji Should You Use?",
  },
};

const withBrand = (title: string) =>
  title.includes(BRAND) ? title : `${title} | ${BRAND}`;

const truncate = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trim()}…`;

export const getMainPageSeo = (path: string): PageSeoMeta => {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  const seo = mainPagesSeo[normalized];
  if (seo) return seo;

  return {
    title: `${BRAND} — Emoji Meanings, Names & Copy`,
    description: "Discover emoji meanings, copy and paste emojis, and learn how to use them in texting and social media.",
  };
};

export const getEmojiSeoMeta = (emoji: Emoji): PageSeoMeta => {
  const priority = priorityEmojiSeo[emoji.slug];
  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(priority.metaDescription, 160),
      ogTitle: priority.metaTitle,
    };
  }

  const editorial = getTopEmojiEditorial(emoji);
  if (editorial) {
    const title = `${emoji.unicode} ${editorial.searchTitle}`;
    return {
      title: withBrand(title),
      description: truncate(
        `${editorial.snippetAnswer} Copy ${emoji.unicode} for texting, WhatsApp, Instagram, and TikTok.`,
        160
      ),
      ogTitle: title,
    };
  }

  const title = `${emoji.unicode} ${emoji.name} Emoji Meaning — Copy & Use`;
  return {
    title: withBrand(title),
    description: truncate(
      `What does ${emoji.unicode} mean? ${emoji.shortMeaning} See examples for texting and social media. Copy ${emoji.unicode} instantly.`,
      160
    ),
    ogTitle: title,
  };
};

export const isPriorityEmojiSeo = (slug: string): boolean => slug in priorityEmojiSeo;
