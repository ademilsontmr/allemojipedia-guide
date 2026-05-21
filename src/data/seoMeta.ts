import type { Emoji } from "./emojis";
import type { EmojiIntentCluster } from "./emojiIntentClusters";
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

/** Lote 2 — intent cluster hubs */
export const priorityClusterSeo: Record<string, EmojiSeoMeta> = {
  "heart-emoji-meanings": {
    metaTitle: "Heart Emoji Colors: ❤️ 💜 💙 💗 Meaning & When to Use",
    metaDescription:
      "What does each heart emoji mean? Compare ❤️ 💜 💙 💗 🖤 and more—romantic vs friendly tone with real texting examples.",
  },
  "gen-z-emoji-meanings": {
    metaTitle: "Gen Z Emoji Meanings: 💀 😭 🤡 Slang Explained (2026)",
    metaDescription:
      "Decode Gen Z emoji slang: 💀 for laughter, ironic 😭, clown energy, and more. See TikTok and texting examples.",
  },
  "emoji-meaning-in-texting": {
    metaTitle: "Emoji Meaning in Texting: Tone, Flirting & Misreads",
    metaDescription:
      "What do emojis mean in texts? Learn flirty, sarcastic, cold, and friendly signals—with examples for dating and group chats.",
  },
  "flag-emojis": {
    metaTitle: "Flag Emojis: Country Flags, Meanings & Copy Guide",
    metaDescription:
      "Browse flag emoji meanings by country. Learn how flag emojis work on iPhone, Android, and WhatsApp—copy any flag instantly.",
  },
  "work-emojis": {
    metaTitle: "Work Emojis: Professional Tone for Slack & Email",
    metaDescription:
      "Which emojis are safe at work? See 👍 ✅ 😊 tone tips for Slack, Teams, and email—without sounding unprofessional.",
  },
  "flirty-emoji-meanings": {
    metaTitle: "Flirty Emoji Meanings: Romantic vs Friendly Signals",
    metaDescription:
      "Is that emoji flirting or just friendly? Learn 😘 😉 😏 tone with real DM examples and when to reply carefully.",
  },
  "passive-aggressive-emojis": {
    metaTitle: "Passive-Aggressive Emojis: 👍 🙃 😐 Tone Warning",
    metaDescription:
      "Emojis that can sound cold or sarcastic in texts—including 👍 and 🙃. See examples and safer alternatives.",
  },
  "emoji-meanings-from-a-girl": {
    metaTitle: "Emoji Meanings From a Girl: ❤️ 😊 🥺 Decoded",
    metaDescription:
      "What does her emoji mean? Read ❤️ 😊 🥺 and more with texting examples—romantic, friendly, or just polite.",
  },
  "emoji-meanings-from-a-guy": {
    metaTitle: "Emoji Meanings From a Guy: Flirty, Chill or Serious?",
    metaDescription:
      "What does his emoji mean? Decode guy texting tone with examples—when ❤️ is serious vs casual.",
  },
  "whatsapp-emoji-meanings": {
    metaTitle: "WhatsApp Emoji Meanings: Hearts, 👍 & Group Chat Tone",
    metaDescription:
      "How emojis read on WhatsApp—private chats vs groups. Learn heart, thumbs up, and laughing emoji tone with examples.",
  },
  "instagram-emoji-meanings": {
    metaTitle: "Instagram Emoji Meanings: Comments, DMs & Reels (2026)",
    metaDescription:
      "What do 🔥 😍 💀 ✨ mean on Instagram? Decode comments, story reactions, reels, and DM tone with examples.",
  },
  "tiktok-emoji-meanings": {
    metaTitle: "TikTok Emoji Meanings: 💀 😭 Gen Z Comments Decoded",
    metaDescription:
      "TikTok emoji slang explained: 💀 😭 😂 ✨ 🔥 in comments and captions. See Gen Z tone with real examples.",
  },
};

/** Lote 2 — high-search comparison pages (slug1-vs-slug2) */
export const priorityComparisonSeo: Record<string, EmojiSeoMeta> = {
  "face-with-tears-of-joy-vs-rolling-on-the-floor-laughing": {
    metaTitle: "😂 vs 🤣: Which Laughing Emoji Should You Send?",
    metaDescription:
      "😂 or 🤣? Compare meanings, intensity, and Gen Z preference—with texting examples so you pick the right laugh emoji.",
  },
  "skull-vs-face-with-tears-of-joy": {
    metaTitle: "💀 vs 😂: Gen Z Laugh Emoji — Which One Fits?",
    metaDescription:
      "💀 vs 😂 in 2026: when skull means 'I'm dead' from laughter and when 😂 still wins. Examples for TikTok and texts.",
  },
  "red-heart-vs-purple-heart": {
    metaTitle: "❤️ vs 💜: Red Heart or Purple Heart — Which to Send?",
    metaDescription:
      "❤️ vs 💜: romantic love vs supportive affection. See when each heart feels right in texting and Instagram DMs.",
  },
  "red-heart-vs-blue-heart": {
    metaTitle: "❤️ vs 💙: Red Heart vs Blue Heart Meaning",
    metaDescription:
      "❤️ vs 💙: love vs trust and calm loyalty. Learn romantic vs platonic signals with real message examples.",
  },
  "red-heart-vs-pink-heart": {
    metaTitle: "❤️ vs 💗: Red Heart vs Pink Heart — What's the Difference?",
    metaDescription:
      "❤️ vs 💗: intense love vs softer affection. See when pink feels safer than red in texts and comments.",
  },
  "red-heart-vs-black-heart": {
    metaTitle: "❤️ vs 🖤: Red Heart vs Black Heart Meaning",
    metaDescription:
      "❤️ vs 🖤: classic love vs edgy, grief, or dark humor. Learn tone with texting and social media examples.",
  },
  "thumbs-up-vs-thumbs-down": {
    metaTitle: "👍 vs 👎: Thumbs Up vs Down — Tone in Texting",
    metaDescription:
      "👍 vs 👎: approval, dismissal, or passive-aggressive? Compare work-chat and WhatsApp tone with examples.",
  },
  "crying-face-vs-loudly-crying-face": {
    metaTitle: "😢 vs 😭: Crying Emoji — Sad or Funny?",
    metaDescription:
      "😢 vs 😭: subtle sadness vs dramatic tears—or ironic Gen Z tone. See when each crying emoji fits your message.",
  },
  "pleading-face-vs-crying-face": {
    metaTitle: "🥺 vs 😢: Pleading Face vs Crying Face Meaning",
    metaDescription:
      "🥺 vs 😢: cute begging vs sadness. Learn flirty, apology, and emotional tone with real texting examples.",
  },
  "smiling-face-with-hearts-vs-smiling-face-with-heart-eyes": {
    metaTitle: "🥰 vs 😍: Hearts Face vs Heart Eyes — Which to Use?",
    metaDescription:
      "🥰 vs 😍: warm affection vs crush energy. Compare romantic and friendly tone with copy-paste examples.",
  },
  "face-blowing-a-kiss-vs-kissing-face": {
    metaTitle: "😘 vs 😗: Kiss Emoji — Flirty or Friendly?",
    metaDescription:
      "😘 vs 😗: blown kiss vs simple kiss. See flirting, goodbye, and platonic tone with message examples.",
  },
  "winking-face-vs-smirking-face": {
    metaTitle: "😉 vs 😏: Wink vs Smirk — Flirty or Rude?",
    metaDescription:
      "😉 vs 😏: playful wink vs confident smirk. Learn when each feels flirty, teasing, or passive-aggressive.",
  },
  "broken-heart-vs-mending-heart": {
    metaTitle: "💔 vs ❤️‍🩹: Broken Heart vs Mending Heart Meaning",
    metaDescription:
      "💔 vs ❤️‍🩹: heartbreak vs healing. See breakup, disappointment, and recovery tone in texting examples.",
  },
  "thinking-face-vs-face-with-raised-eyebrow": {
    metaTitle: "🤔 vs 🤨: Thinking vs Raised Eyebrow Emoji",
    metaDescription:
      "🤔 vs 🤨: curiosity vs skepticism. Learn sarcasm and doubt tone with real chat examples.",
  },
  "upside-down-face-vs-slightly-smiling-face": {
    metaTitle: "🙃 vs 🙂: Upside-Down vs Slight Smile — Sarcasm?",
    metaDescription:
      "🙃 vs 🙂: sarcasm vs polite warmth. See passive-aggressive and friendly tone with texting examples.",
  },
};

/** Lote 2 — strategic blog posts */
export const priorityBlogSeo: Record<string, EmojiSeoMeta> = {
  "flirty-emoji-meanings-romantic-or-friendly": {
    metaTitle: "Flirty Emoji Meanings: Romantic or Just Friendly? (2026)",
    metaDescription:
      "Which emojis feel flirty vs friendly? Read 😘 😉 🥺 tone with DM examples—stop overthinking one emoji.",
  },
  "emoji-meanings-from-a-girl-or-guy": {
    metaTitle: "Emoji From a Girl or Guy: How to Read Sender Intent",
    metaDescription:
      "What does their emoji mean? Practical guide for reading a girl's or guy's texting tone without guessing wrong.",
  },
  "whatsapp-emoji-meanings-tone-guide": {
    metaTitle: "WhatsApp Emoji Meanings: Hearts, 👍 & Group Tone",
    metaDescription:
      "How emojis change tone on WhatsApp—private chats, family groups, and work threads. Real examples included.",
  },
  "instagram-emoji-meanings-comments-dms": {
    metaTitle: "Instagram Emoji Meanings: Comments, Stories & DMs",
    metaDescription:
      "Decode 🔥 😍 💀 ✨ on Instagram—comments, reels, story reactions, and DMs with 2026 examples.",
  },
  "tiktok-emoji-meanings-gen-z-slang": {
    metaTitle: "TikTok Emoji Meanings: 💀 😭 Gen Z Slang (2026)",
    metaDescription:
      "TikTok emoji slang decoded: 💀 😭 😂 ✨ in comments and captions. Gen Z tone with real examples.",
  },
  "trending-emojis-2026-meanings": {
    metaTitle: "Trending Emojis 2026: What They Really Mean",
    metaDescription:
      "Top trending emojis in 2026—from 😭 overtaking 😂 to 💀 as laughter. Meanings, slang, and copy tips.",
  },
};

export const comparisonSeoKey = (slug1: string, slug2: string) => `${slug1}-vs-${slug2}`;

export const getClusterSeoMeta = (cluster: EmojiIntentCluster): PageSeoMeta => {
  const priority = priorityClusterSeo[cluster.slug];
  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(priority.metaDescription, 160),
      ogTitle: priority.metaTitle,
    };
  }

  return {
    title: withBrand(cluster.title),
    description: truncate(cluster.description, 160),
    ogTitle: cluster.shortTitle,
  };
};

export const getComparisonSeoMeta = (left: Emoji, right: Emoji): PageSeoMeta => {
  const key = comparisonSeoKey(left.slug, right.slug);
  const priority = priorityComparisonSeo[key];
  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(priority.metaDescription, 160),
      ogTitle: priority.metaTitle,
    };
  }

  const title = `${left.unicode} ${left.name} vs ${right.unicode} ${right.name}`;
  return {
    title: withBrand(`${title} — Differences & When to Use`),
    description: truncate(
      `Compare ${left.name} and ${right.name}: meanings, tone, and when to use ${left.unicode} vs ${right.unicode}.`,
      160
    ),
    ogTitle: title,
  };
};

export const getBlogPostSeoMeta = (post: {
  slug: string;
  title: string;
  excerpt: string;
}): PageSeoMeta => {
  const priority = priorityBlogSeo[post.slug];
  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(priority.metaDescription, 160),
      ogTitle: priority.metaTitle,
    };
  }

  return {
    title: withBrand(post.title),
    description: truncate(post.excerpt, 160),
    ogTitle: post.title,
  };
};
