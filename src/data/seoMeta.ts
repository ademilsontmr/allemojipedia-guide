import type { Emoji } from "./emojis";
import type { Category } from "./categories";
import type { EmojiContextPage } from "./emojiContextPages";
import type { EmojiIntentCluster } from "./emojiIntentClusters";
import { getPeopleSubcategoryEditorial } from "./peopleSubcategoryEditorial";
import { getTopEmojiEditorial } from "./topEmojiEditorial";
import { buildContextSeoMeta } from "@/utils/emojiContextSeoMeta";
import {
  buildEmojiDetailSeoMeta,
  isGenericEmojiSearchTitle,
} from "@/utils/emojiDetailSeoMeta";

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
    metaTitle: "😂 Face With Tears of Joy Meaning in Texting, Memes & WhatsApp",
    metaDescription:
      "What does 😂 mean? The classic laugh emoji for jokes, memes, and group chats. See real texting examples and copy 😂 instantly.",
  },
  "red-heart": {
    metaTitle: "❤️ Red Heart Meaning: Love, Texting & From a Girl",
    metaDescription:
      "What does ❤️ mean in texting? Learn love vs friendship signals, examples, and when it feels romantic. Copy ❤️ in one click.",
  },
  skull: {
    metaTitle: "💀 Skull Emoji Meaning in Gen Z Texting, TikTok & Instagram",
    metaDescription:
      "What does 💀 mean? Usually 'I'm dead' from laughter or shock—not danger. See Gen Z texting examples and copy 💀 instantly.",
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
  "pink-heart": {
    metaTitle: "💗 Pink Heart Meaning: Sweet Love & Texting",
    metaDescription:
      "What does 💗 mean? Soft romance, sweet affection, or playful love. See when it feels flirty vs friendly. Copy 💗 now.",
  },
  "green-heart": {
    metaTitle: "💚 Green Heart Meaning: Nature, Jealousy & Texting",
    metaDescription:
      "What does 💚 mean? Nature vibes, health, jealousy, or loyal friendship. See texting examples. Copy 💚 instantly.",
  },
  "yellow-heart": {
    metaTitle: "💛 Yellow Heart Meaning: Friendship & Sunshine Love",
    metaDescription:
      "What does 💛 mean? Best-friend energy, joy, and warm platonic love. See when to use it vs ❤️. Copy 💛 now.",
  },
  "orange-heart": {
    metaTitle: "🧡 Orange Heart Meaning: Warm Friendship & Texting",
    metaDescription:
      "What does 🧡 mean? Warm affection, autumn energy, or close friendship. See texting tone tips. Copy 🧡 instantly.",
  },
  "two-hearts": {
    metaTitle: "💕 Two Hearts Meaning: Love, Couples & Besties",
    metaDescription:
      "What does 💕 mean? Mutual love, cute couples, or close friendship. See romantic vs platonic signals. Copy 💕 now.",
  },
  "kissing-face": {
    metaTitle: "😗 Kissing Face Meaning: Flirty, Sweet or Friendly?",
    metaDescription:
      "What does 😗 mean in texting? A quick kiss, flirting, or affectionate goodbye. See real message examples. Copy 😗 now.",
  },
  "grinning-face": {
    metaTitle: "😀 Grinning Face Meaning: Happy, Friendly or Sarcastic?",
    metaDescription:
      "What does 😀 mean? Big smile energy—genuine happiness or awkward cheer. See texting examples. Copy 😀 instantly.",
  },
  "smiling-face": {
    metaTitle: "🙂 Smiling Face Meaning: Polite, Awkward or Cold?",
    metaDescription:
      "What does 🙂 mean in texting? Polite OK—or passive-aggressive depending on context. See tone tips. Copy 🙂 now.",
  },
  "smiling-face-with-hearts": {
    metaTitle: "🥰 Smiling Face with Hearts Meaning: Love & Crush",
    metaDescription:
      "What does 🥰 mean? Adoring, crush energy, or wholesome warmth. See flirty vs friendly examples. Copy 🥰 instantly.",
  },
  "hot-face": {
    metaTitle: "🥵 Hot Face Meaning: Attractive, Hot or Embarrassed?",
    metaDescription:
      "What does 🥵 mean? Attraction, heat, thirst, or embarrassment. See Gen Z and texting examples. Copy 🥵 now.",
  },
  "grinning-face-with-sweat": {
    metaTitle: "😅 Grinning Sweat Meaning: Nervous Laugh or Relief?",
    metaDescription:
      "What does 😅 mean? Awkward laugh, close call, or 'that was stressful.' See texting examples. Copy 😅 instantly.",
  },
  "crying-face": {
    metaTitle: "😢 Crying Face Meaning: Sad, Soft or Disappointed?",
    metaDescription:
      "What does 😢 mean in texting? Sadness, disappointment, or gentle upset—not always dramatic. Copy 😢 now.",
  },
  "pensive-face": {
    metaTitle: "😔 Pensive Face Meaning: Sad, Thoughtful or Quiet?",
    metaDescription:
      "What does 😔 mean? Quiet sadness, regret, or thoughtful mood. See when it feels serious vs casual. Copy 😔 instantly.",
  },
  "unamused-face": {
    metaTitle: "😒 Unamused Face Meaning: Annoyed, Bored or Judging?",
    metaDescription:
      "What does 😒 mean in texting? Bored, unimpressed, or side-eye energy. See sarcastic examples. Copy 😒 now.",
  },
  "face-with-rolling-eyes": {
    metaTitle: "🙄 Eye Roll Emoji Meaning: Sarcasm & Texting",
    metaDescription:
      "What does 🙄 mean? Classic eye-roll—annoyance, sarcasm, or 'seriously?' See chat examples. Copy 🙄 instantly.",
  },
  "raising-hands": {
    metaTitle: "🙌 Raising Hands Meaning: Praise, Hype or Celebration",
    metaDescription:
      "What does 🙌 mean? Praise, hype, gratitude, or 'we did it.' See texting and comment examples. Copy 🙌 now.",
  },
  "party-popper": {
    metaTitle: "🎉 Party Popper Meaning: Celebration & Birthday Hype",
    metaDescription:
      "What does 🎉 mean? Wins, birthdays, announcements, and good news. See caption and chat examples. Copy 🎉 instantly.",
  },
  "star-struck": {
    metaTitle: "🤩 Star-Struck Meaning: Amazed, Crush or Hype",
    metaDescription:
      "What does 🤩 mean? Amazement, celebrity crush, or glowing praise. See Instagram and texting tone. Copy 🤩 now.",
  },
  "zany-face": {
    metaTitle: "🤪 Zany Face Meaning: Goofy, Crazy or Excited?",
    metaDescription:
      "What does 🤪 mean? Silly energy, wild mood, or playful chaos. See Gen Z and group chat examples. Copy 🤪 instantly.",
  },
  "see-no-evil-monkey": {
    metaTitle: "🙈 See-No-Evil Monkey Meaning: Denial & Memes",
    metaDescription:
      "What does 🙈 mean? Playful denial, embarrassment, or 'I didn't see that.' See meme and texting examples. Copy 🙈 now.",
  },
  "heart-on-fire": {
    metaTitle: "❤️‍🔥 Heart on Fire Meaning: Passion, Obsession & Hype",
    metaDescription:
      "What does ❤️‍🔥 mean? Intense love, obsession, or strong approval. See flirty vs hype examples. Copy ❤️‍🔥 instantly.",
  },
  "mending-heart": {
    metaTitle: "❤️‍🩹 Mending Heart Meaning: Healing & Moving On",
    metaDescription:
      "What does ❤️‍🩹 mean? Recovery, healing, or getting better after hurt. See supportive texting examples. Copy ❤️‍🩹 now.",
  },
  "smiling-face-with-tear": {
    metaTitle: "🥲 Smiling with Tear Meaning: Grateful or Bittersweet?",
    metaDescription:
      "What does 🥲 mean? Touched, proud, bittersweet, or smiling through it. See emotional texting examples. Copy 🥲 instantly.",
  },
  "face-holding-back-tears": {
    metaTitle: "🥹 Holding Back Tears Meaning: Moved or Overwhelmed?",
    metaDescription:
      "What does 🥹 mean? Touched, grateful, sad, or overwhelmed—in a soft way. See message examples. Copy 🥹 now.",
  },
  "shushing-face": {
    metaTitle: "🤫 Shushing Face Meaning: Secret, Quiet or Flirty?",
    metaDescription:
      "What does 🤫 mean? Keep quiet, secret gossip, or playful shush. See texting and DM tone tips. Copy 🤫 instantly.",
  },
};

export const mainPagesSeo: Record<string, PageSeoMeta> = {
  "/": {
    title: `What Does That Emoji Mean? Copy 3,700+ Emojis Free | ${BRAND}`,
    description:
      "Search any emoji meaning in seconds. ❤️ 😂 💀 🥺 texting guides, Gen Z slang, copy-paste pages & WhatsApp tone tips. Free — no signup.",
    ogTitle: "What Does That Emoji Mean? Copy 3,700+ Emojis Free",
  },
  "/emoji-meanings/": {
    title: `Emoji Meanings by Intent — Hearts, Texting, Gen Z & More | ${BRAND}`,
    description:
      "Find the right emoji meaning fast: love, flirting, Gen Z slang, WhatsApp tone, flags, and work chats. Browse intent guides with real examples.",
    ogTitle: "Emoji Meanings by Intent — Hearts, Texting, Gen Z & More",
  },
  "/emoji-meanings-in-texting/": {
    title: `Emoji Meanings in Texting — Girl, Guy, WhatsApp, Instagram & TikTok | ${BRAND}`,
    description:
      "Browse 250 emoji guides for texting: what emojis mean from a girl, from a guy, on WhatsApp, Instagram, and TikTok. Real examples and tone signals.",
    ogTitle: "Emoji Meanings in Texting — Girl, Guy, WhatsApp, Instagram & TikTok",
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
  "/people/": {
    title: `People Emojis — Gestures, Family & Body Copy | ${BRAND}`,
    description:
      "Browse people and body emojis: hand gestures, professions, family, skin tones. Copy any human emoji with meanings.",
    ogTitle: "People Emojis — Gestures, Family & Body Copy",
  },
  "/platforms/apple/": {
    title: `Apple Emoji — iPhone & iOS Emoji List, Copy & Meanings | ${BRAND}`,
    description:
      "Copy every iPhone emoji in one click. Full Apple emoji list with meanings for iMessage, WhatsApp, Instagram, and TikTok.",
    ogTitle: "Apple Emoji — iPhone & iOS Copy Hub",
  },
  "/platforms/google/": {
    title: `Google Emoji — Android & Gboard Copy List | ${BRAND}`,
    description:
      "Copy Android emojis in Google Noto style. Gboard-friendly list with meanings for texting and social apps.",
    ogTitle: "Google / Android Emoji Copy Hub",
  },
  "/platforms/samsung/": {
    title: `Samsung Emoji — Galaxy One UI Copy List | ${BRAND}`,
    description:
      "Copy Samsung Galaxy emojis with meanings. One UI style characters for Messages, WhatsApp, and social media.",
    ogTitle: "Samsung Galaxy Emoji Copy Hub",
  },
  "/apple/": {
    title: `Apple Emoji — iPhone & iOS Emoji List | Copy Instantly | ${BRAND}`,
    description:
      "Browse Apple emoji for iPhone and iPad. Copy any iOS emoji in one click with meanings for texting and social media.",
    ogTitle: "Apple Emoji — iPhone & iOS",
  },
  "/iphone-emojis/": {
    title: `iPhone Emojis — Full List & Meanings (2026) | ${BRAND}`,
    description:
      "Complete iPhone emoji list with copy-paste and meanings. Every emoji your iOS keyboard uses—one click to copy.",
    ogTitle: "iPhone Emojis — Full List (2026)",
  },
  "/copy-iphone-emojis/": {
    title: `Copy iPhone Emojis — One-Click Apple Emoji Copy Paste | ${BRAND}`,
    description:
      "Copy iPhone emojis instantly. Tap any Apple emoji to paste into iMessage, WhatsApp, Instagram, or TikTok.",
    ogTitle: "Copy iPhone Emojis — One Click",
  },
  "/google-emojis/": {
    title: `Google Emoji — Android & Gboard Copy List | ${BRAND}`,
    description:
      "Browse Google Noto emojis for Android. Copy any Gboard emoji in one click with meanings for texting.",
    ogTitle: "Google Emoji — Android & Gboard",
  },
  "/android-emojis/": {
    title: `Android Emojis — Full List & Meanings (2026) | ${BRAND}`,
    description:
      "Complete Android emoji list with copy-paste and meanings for Gboard, WhatsApp, and social apps.",
    ogTitle: "Android Emojis — Full List (2026)",
  },
  "/copy-android-emojis/": {
    title: `Copy Android Emojis — One-Click Google Emoji Copy | ${BRAND}`,
    description:
      "Copy Android emojis instantly. Tap any Google/Gboard emoji to paste into Messages, WhatsApp, or Instagram.",
    ogTitle: "Copy Android Emojis — One Click",
  },
  "/samsung-emojis/": {
    title: `Samsung Emojis — Galaxy Full List (2026) | ${BRAND}`,
    description:
      "Complete Samsung Galaxy emoji list with copy-paste and meanings for One UI texting.",
    ogTitle: "Samsung Emojis — Galaxy List (2026)",
  },
  "/copy-samsung-emojis/": {
    title: `Copy Samsung Emojis — One-Click Galaxy Emoji Copy | ${BRAND}`,
    description:
      "Copy Samsung Galaxy emojis instantly for Messages, WhatsApp, and social media.",
    ogTitle: "Copy Samsung Emojis — One Click",
  },
  "/emoji-kitchen/": {
    title: `Emoji Kitchen — Gboard Guide & Popular Combos (2026) | ${BRAND}`,
    description:
      "What is Emoji Kitchen? How to use it on Gboard Android, plus copy-ready combo alternatives and base emoji links.",
    ogTitle: "Emoji Kitchen — Gboard Guide & Combos",
  },
  "/emoji-combos/": {
    title: `Emoji Combos — Copy ZWJ Sequences & Combinations | ${BRAND}`,
    description:
      "Copy emoji combos: couple, family, heart eyes kiss, birthday, and ZWJ sequences with meanings.",
    ogTitle: "Emoji Combos — Copy & Meaning",
  },
  "/tiktok-emojis/": {
    title: `TikTok Emojis — Meanings, Slang & Copy (2026) | ${BRAND}`,
    description:
      "What do TikTok emojis mean? Decode 💀 😭 🤡 🔥 👀 in comments, copy viral reactions, and learn Gen Z slang tone.",
    ogTitle: "TikTok Emojis — Meanings, Slang & Copy",
  },
  "/emoji-copy-and-paste/": {
    title: `Emoji Copy and Paste — Free Emoji Keyboard (2026) | ${BRAND}`,
    description:
      "Copy and paste emojis instantly. Free web emoji keyboard for WhatsApp, Instagram, TikTok & iMessage—tap any emoji to copy.",
    ogTitle: "Emoji Copy and Paste — Free Emoji Keyboard",
  },
};

const withBrand = (title: string) =>
  title.includes(BRAND) ? title : `${title} | ${BRAND}`;

const truncate = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trim()}…`;

/** Removes inline emoji copies so the page title can lead with a single unicode. */
const stripRedundantEmojiFromSearchTitle = (searchTitle: string, unicode: string): string => {
  const parenthetical = ` (${unicode})`;
  let cleaned = searchTitle.includes(parenthetical)
    ? searchTitle.replaceAll(parenthetical, "")
    : searchTitle;

  if (cleaned.startsWith(`${unicode} `)) {
    cleaned = cleaned.slice(unicode.length + 1);
  }

  return cleaned.trim();
};

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

  if (!isGenericEmojiSearchTitle(editorial.searchTitle, emoji.name)) {
    const searchTitle = stripRedundantEmojiFromSearchTitle(editorial.searchTitle, emoji.unicode);
    const title = `${emoji.unicode} ${searchTitle}`;
    return {
      title: withBrand(title),
      description: truncate(
        `What does ${emoji.unicode} mean? ${editorial.snippetAnswer} Copy ${emoji.unicode} for WhatsApp, Instagram & TikTok.`,
        160
      ),
      ogTitle: title,
    };
  }

  const generated = buildEmojiDetailSeoMeta(emoji, editorial);
  return {
    title: withBrand(generated.metaTitle),
    description: truncate(generated.metaDescription, 160),
    ogTitle: generated.metaTitle,
  };
};

/** Visible H1 — matches the page title (without site brand suffix). */
export const getEmojiPageH1 = (emoji: Emoji): string => {
  const seo = getEmojiSeoMeta(emoji);
  return seo.ogTitle ?? seo.title.replace(new RegExp(`\\s*\\|\\s*${BRAND}$`), "");
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
    metaTitle: "Flag Emojis: World Cup 2026, Countries & Copy Guide",
    metaDescription:
      "Country flag emojis for travel, heritage, and World Cup 2026. Copy 🇺🇸 🇧🇷 🇲🇽 flags and compare similar countries.",
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
  // Lote 3 — more high-intent comparisons
  "skull-vs-loudly-crying-face": {
    metaTitle: "💀 vs 😭: Skull or Crying Face — Gen Z Laugh Guide",
    metaDescription:
      "💀 vs 😭: deadpan laughter vs dramatic tears—or ironic Gen Z tone. See TikTok and texting examples.",
  },
  "face-with-tears-of-joy-vs-loudly-crying-face": {
    metaTitle: "😂 vs 😭: Laughing or Crying Emoji — Which Fits?",
    metaDescription:
      "😂 vs 😭: funny vs emotional overload. Learn when each reads as humor, sadness, or Gen Z irony.",
  },
  "clown-face-vs-skull": {
    metaTitle: "🤡 vs 💀: Clown vs Skull Emoji in Texting",
    metaDescription:
      "🤡 vs 💀: self-roast vs 'I'm dead' laughter. See meme and Gen Z examples for the right reaction emoji.",
  },
  "pleading-face-vs-face-holding-back-tears": {
    metaTitle: "🥺 vs 🥹: Pleading vs Holding Back Tears",
    metaDescription:
      "🥺 vs 🥹: cute begging vs emotional gratitude. Compare flirty, sweet, and sincere texting tone.",
  },
  "melting-face-vs-pleading-face": {
    metaTitle: "🫠 vs 🥺: Melting Face vs Pleading Face Meaning",
    metaDescription:
      "🫠 vs 🥺: embarrassment vs cute persuasion. See when each fits awkward, hot, or emotional messages.",
  },
  "eyes-vs-thinking-face": {
    metaTitle: "👀 vs 🤔: Eyes vs Thinking Emoji — Flirty or Suspicious?",
    metaDescription:
      "👀 vs 🤔: 'I see that' vs doubt. Learn flirty attention, suspicion, and curiosity in texts.",
  },
  "hundred-points-vs-fire": {
    metaTitle: "💯 vs 🔥: 100 vs Fire Emoji — Hype or Hot?",
    metaDescription:
      "💯 vs 🔥: full agreement vs impressive/hot. See Instagram, TikTok, and texting examples.",
  },
  "pink-heart-vs-red-heart": {
    metaTitle: "💗 vs ❤️: Pink Heart vs Red Heart — Softer Love?",
    metaDescription:
      "💗 vs ❤️: soft affection vs direct love. Learn romantic vs friendly signals with message examples.",
  },
  "yellow-heart-vs-red-heart": {
    metaTitle: "💛 vs ❤️: Yellow Heart vs Red Heart Meaning",
    metaDescription:
      "💛 vs ❤️: friendship and warmth vs romantic love. See when yellow is safer than red in texts.",
  },
  "broken-heart-vs-red-heart": {
    metaTitle: "💔 vs ❤️: Broken Heart vs Red Heart — Opposite Signals",
    metaDescription:
      "💔 vs ❤️: heartbreak vs love. Learn breakup, disappointment, and affection tone with examples.",
  },
  "thumbs-up-vs-folded-hands": {
    metaTitle: "👍 vs 🙏: Thumbs Up vs Folded Hands on WhatsApp",
    metaDescription:
      "👍 vs 🙏: OK vs thanks/prayer. See work-chat and WhatsApp tone—when each feels warm or cold.",
  },
  "neutral-face-vs-expressionless-face": {
    metaTitle: "😐 vs 😑: Neutral vs Expressionless Face",
    metaDescription:
      "😐 vs 😑: blank vs unimpressed. Learn cold, awkward, and passive-aggressive texting tone.",
  },
  // Lote 5 — flag comparisons
  "flag-united-states-vs-flag-canada": {
    metaTitle: "🇺🇸 vs 🇨🇦: US Flag vs Canada Flag Emoji",
    metaDescription:
      "Compare 🇺🇸 and 🇨🇦 flag emojis—meaning, copy tips, and when to use each for sports, travel, and identity.",
  },
  "flag-united-states-vs-flag-mexico": {
    metaTitle: "🇺🇸 vs 🇲🇽: USA vs Mexico Flag — World Cup 2026",
    metaDescription:
      "🇺🇸 vs 🇲🇽 for World Cup 2026 hosts and rivalry chats. Copy flags and see when each fits your message.",
  },
  "flag-brazil-vs-flag-argentina": {
    metaTitle: "🇧🇷 vs 🇦🇷: Brazil vs Argentina Flag Emoji",
    metaDescription:
      "Football's biggest flag rivalry: 🇧🇷 vs 🇦🇷 meanings, copy guide, and match-day texting examples.",
  },
  "flag-portugal-vs-flag-brazil": {
    metaTitle: "🇵🇹 vs 🇧🇷: Portugal vs Brazil Flag Meaning",
    metaDescription:
      "Language, culture, and football ties—when to use 🇵🇹 vs 🇧🇷 in bios, chats, and World Cup posts.",
  },
  "flag-spain-vs-flag-mexico": {
    metaTitle: "🇪🇸 vs 🇲🇽: Spain vs Mexico Flag Emoji",
    metaDescription:
      "Shared language, different flags—🇪🇸 vs 🇲🇽 for travel, heritage, and international event posts.",
  },
  "flag-united-kingdom-vs-flag-united-states": {
    metaTitle: "🇬🇧 vs 🇺🇸: UK vs US Flag Emoji Compared",
    metaDescription:
      "🇬🇧 vs 🇺🇸: British vs American flag use in texting, social bios, and event reactions—copy both instantly.",
  },
  "flag-france-vs-flag-germany": {
    metaTitle: "🇫🇷 vs 🇩🇪: France vs Germany Flag Emoji",
    metaDescription:
      "EU neighbors, football rivals—🇫🇷 vs 🇩🇪 flag meanings for matches, travel, and national pride posts.",
  },
  "flag-japan-vs-flag-south-korea": {
    metaTitle: "🇯🇵 vs 🇰🇷: Japan vs South Korea Flag Emoji",
    metaDescription:
      "Compare 🇯🇵 and 🇰🇷 for culture, sports, and travel captions—with copy-paste and tone tips.",
  },
  "flag-china-vs-flag-india": {
    metaTitle: "🇨🇳 vs 🇮🇳: China vs India Flag Emoji",
    metaDescription:
      "🇨🇳 vs 🇮🇳 flag emoji guide—population, events, and when each flag fits bios and group chats.",
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
  "college-student-emojis-decoded": {
    metaTitle: "College Student Emojis Decoded: 💀 😭 Campus Slang",
    metaDescription:
      "What university students really mean with 💀, 😭, and campus emoji slang. Real texting examples for 2026.",
  },
  "most-searched-emoji-questions-google": {
    metaTitle: "Most Googled Emoji Questions — Answers With Data",
    metaDescription:
      "Top emoji questions people search daily: 💀, ❤️, 👍, and more. Data-backed answers and real usage examples.",
  },
  "how-to-use-emojis-on-whatsapp-without-sounding-rude": {
    metaTitle: "WhatsApp Emojis Without Sounding Rude (2026)",
    metaDescription:
      "Stop accidental cold tone on WhatsApp. Learn 👍, hearts, and laugh emojis with real message examples.",
  },
  "how-to-use-emojis-in-professional-communication": {
    metaTitle: "Professional Emojis: Slack, Email & Teams Guide",
    metaDescription:
      "When workplace emojis help vs hurt. Rules for Slack, Teams, and email—with tone examples.",
  },
  "top-10-popular-emojis": {
    metaTitle: "Top 10 Most Popular Emojis & Hidden Meanings",
    metaDescription:
      "The world's most-used emojis and what they really signal in texts and social media. Copy any emoji free.",
  },
  "heart-emoji-meanings-guide": {
    metaTitle: "Heart Emoji Guide: Every Color Explained",
    metaDescription:
      "❤️ 💜 💙 💗 🖤 meanings by color—romantic, friendly, or ironic. Pick the right heart for your message.",
  },
  "copy-paste-emojis-guide": {
    metaTitle: "Copy & Paste Emojis: Fast Guide for Any Device",
    metaDescription:
      "Copy emojis on iPhone, Android, Windows, and Mac. One-click copy for texts, WhatsApp, and Instagram.",
  },
  "flag-emojis-complete-guide": {
    metaTitle: "Flag Emojis Guide: Every Country Flag Explained",
    metaDescription:
      "How flag emojis work, regional codes, and copy tips for WhatsApp, Instagram, and world events.",
  },
  "emoji-meanings-complete-dictionary": {
    metaTitle: "Emoji Meanings Dictionary — Search 3,700+ Emojis",
    metaDescription:
      "Full emoji dictionary with meanings, slang, and copy-paste. Find any emoji by name or intent fast.",
  },
  "gen-z-emoji-meanings-decoded": {
    metaTitle: "Gen Z Emoji Meanings Decoded: 💀 😭 🤡 Slang",
    metaDescription:
      "Gen Z emoji slang explained with irony, TikTok tone, and texting examples. Stop misreading 💀 and 😭.",
  },
  "emoji-meaning-texting-guide": {
    metaTitle: "Emoji Meaning in Texting: Tone & Misreads (2026)",
    metaDescription:
      "Decode texting emoji tone—flirting, sarcasm, cold replies. Practical guide with real chat examples.",
  },
  "emoji-meaning-at-work-professional-guide": {
    metaTitle: "Work Emoji Meanings: Professional Texting Guide",
    metaDescription:
      "Which emojis are safe at work and which feel passive-aggressive. Slack and email tone tips.",
  },
  "hidden-emoji-meanings-secrets": {
    metaTitle: "Hidden Emoji Meanings Most People Miss",
    metaDescription:
      "Secret, ironic, and double meanings behind popular emojis. Examples for texting and social media.",
  },
  "iphone-emoji-complete-guide": {
    metaTitle: "iPhone Emoji Guide: Keyboard, Meanings & Tips",
    metaDescription:
      "Master iPhone emojis—keyboard shortcuts, meanings, and copy tips for iMessage and social apps.",
  },
  "how-to-use-emojis-when-flirting": {
    metaTitle: "Flirting With Emojis: Subtle Signals That Work",
    metaDescription:
      "Best flirting emojis and tone tips for DMs and texts. Romantic vs too-strong—with message examples.",
  },
  "how-to-use-emojis-in-apologies": {
    metaTitle: "Sorry Emojis: How to Apologize in Texts (2026)",
    metaDescription:
      "Which emojis sound sincere vs dismissive in apologies. Digital sorry guide with real examples.",
  },
  "how-to-use-emojis-on-tiktok": {
    metaTitle: "TikTok Emojis: Comments, Captions & Gen Z Tone",
    metaDescription:
      "Use emojis on TikTok like Gen Z—💀 😭 ✨ 🔥 in comments and captions with tone examples.",
  },
  "how-to-use-emojis-on-iphone": {
    metaTitle: "How to Use Emojis on iPhone — Quick Setup Guide",
    metaDescription:
      "Enable and use the iPhone emoji keyboard fast. Copy, search, and recent emoji tips for 2026.",
  },
  "how-to-use-emoji-combos-like-gen-z": {
    metaTitle: "Gen Z Emoji Combos: Sequences That Hit",
    metaDescription:
      "Learn emoji combos and sequences Gen Z uses for humor, hype, and irony—with copy examples.",
  },
  "how-to-use-emojis-instagram-captions": {
    metaTitle: "Instagram Caption Emojis: Boost Engagement (2026)",
    metaDescription:
      "Best emojis for Instagram captions and stories—tone, aesthetics, and engagement tips with examples.",
  },
  // Lote 5 — World Cup 2026
  "world-cup-2026-emojis-guide": {
    metaTitle: "World Cup 2026 Emojis: Flags, Goals & Fan Reactions",
    metaDescription:
      "Best emojis for World Cup 2026—flags, ⚽, 🏆, and goal reactions for group chats and social posts.",
  },
  "world-cup-2026-emoji-guide": {
    metaTitle: "FIFA World Cup 2026 Emoji Guide — Hosts & Fans",
    metaDescription:
      "Complete World Cup 2026 emoji guide: USA, Mexico, Canada hosts, country flags, and celebration symbols.",
  },
  "world-cup-2026-goal-reactions-emojis": {
    metaTitle: "Goal Reaction Emojis for World Cup 2026 Chats",
    metaDescription:
      "Score a message that lands: 🔥 ⚽ 🎉 emojis for goals, upsets, and penalty drama in 2026.",
  },
  "world-cup-2026-predictions-country-emojis": {
    metaTitle: "World Cup 2026 Predictions — Country Flag Emojis",
    metaDescription:
      "Use flag emojis for bracket picks and predictions—🇧🇷 🇦🇷 🇫🇷 🇩🇪 with fan-chat examples.",
  },
  "usa-world-cup-2026-emojis-host-cities": {
    metaTitle: "USA World Cup 2026 Emojis — Host Cities & 🇺🇸",
    metaDescription:
      "American host cities and 🇺🇸 flag emoji use for World Cup 2026 posts, travel, and watch parties.",
  },
  "mexico-world-cup-2026-emojis-azteca": {
    metaTitle: "Mexico World Cup 2026 Emojis — 🇲🇽 & Azteca",
    metaDescription:
      "🇲🇽 flag, ⚽, and celebration emojis for Mexico as 2026 host—fan guides and copy tips.",
  },
  "canada-world-cup-2026-emojis-first-time": {
    metaTitle: "Canada World Cup 2026 Emojis — First-Time Host 🇨🇦",
    metaDescription:
      "🇨🇦 host nation pride: flag emoji, hockey-to-soccer fan tone, and World Cup 2026 message ideas.",
  },
  "world-cup-2026-host-cities-emojis": {
    metaTitle: "World Cup 2026 Host Cities — Emoji Travel Guide",
    metaDescription:
      "Emoji guide to 2026 host cities across USA, Mexico, and Canada—flags, travel, and watch-party posts.",
  },
  "world-cup-group-chat-emoji-etiquette": {
    metaTitle: "World Cup Group Chat Emoji Etiquette (2026)",
    metaDescription:
      "Avoid spam and rivalry fights in World Cup chats—flag, goal, and banter emoji rules with examples.",
  },
  "world-cup-2026-emoji-predictions": {
    metaTitle: "World Cup 2026 Emoji Predictions & Bracket Picks",
    metaDescription:
      "Predict winners with flag emojis—bracket culture, fan tone, and country flag copy guide for 2026.",
  },
  // Inspired high-volume keyword articles
  "fire-emoji-meaning": {
    metaTitle: "Fire Emoji Meaning: Hot, Compliment & Texting (2026)",
    metaDescription:
      "What does 🔥 mean? Attractive, impressive, or trending—with texting and Instagram examples. Copy fire emoji free.",
  },
  "smile-emoji-meaning": {
    metaTitle: "Smile Emoji Meaning: 😀 🙂 😊 Differences",
    metaDescription:
      "Not every smile emoji means the same. Compare grinning, slight, and warm smiles—with copy links.",
  },
  "laughing-emoji-meaning": {
    metaTitle: "Laughing Emoji: 😂 🤣 💀 Which to Use in 2026?",
    metaDescription:
      "Laughing emoji guide—😂 vs 🤣 vs 💀 for texts, memes, and TikTok. Gen Z slang explained.",
  },
  "cat-emoji-meaning": {
    metaTitle: "Cat Emoji Meaning: 🐱 😺 😹 Explained",
    metaDescription:
      "Cat emoji and cat face meanings for pets and meme reactions. Copy 🐱 😺 😹 instantly.",
  },
  "crying-emoji-meaning": {
    metaTitle: "Crying Emoji: 😢 vs 😭 — Sad or Funny?",
    metaDescription:
      "When crying emoji means sadness vs laughter. Guide to 😢 and 😭 in 2026 texts.",
  },
  "nerd-emoji-meaning": {
    metaTitle: "Nerd Emoji 🤓 Meaning: Smart, Proud, or Teasing?",
    metaDescription:
      "What does the nerd emoji mean in texting? Playful smart vs sarcasm—with examples.",
  },
  "thumbs-up-emoji-meaning": {
    metaTitle: "Thumbs Up Emoji 👍: OK or Passive-Aggressive?",
    metaDescription:
      "Thumbs up emoji on WhatsApp and texts—approval vs cold tone. When 👍 helps or hurts.",
  },
  "hand-emoji-meaning": {
    metaTitle: "Hand Emoji Meanings: 👋 👍 ✋ Gestures",
    metaDescription:
      "Wave, thumbs up, clap, and hand gesture emoji meanings. Copy hand emojis for chats.",
  },
  "sob-emoji-meaning": {
    metaTitle: "Sob Emoji 😭 Meaning: Crying from Laughter?",
    metaDescription:
      "Why sob emoji usually means 😭 online—not sadness. Gen Z examples and copy link.",
  },
  "sad-emoji-meaning": {
    metaTitle: "Sad Emoji Meanings: 😢 😞 😔 Guide",
    metaDescription:
      "Pick the right sad emoji for disappointment, regret, or sympathy—with sincere texting tips.",
  },
  "tired-emoji-meaning": {
    metaTitle: "Tired Emoji Meaning: 😫 😩 🥱 😴 Explained (2026)",
    metaDescription:
      "What does the tired emoji mean? Compare 😫 😩 🥱 😴 for exhaustion, boredom, and sleep—with examples and copy links.",
  },
  "emoji-keyboard-shortcut": {
    metaTitle: "Emoji Keyboard Shortcut: Win, Mac, iPhone, Android",
    metaDescription:
      "Open the emoji keyboard fast: Win+., Ctrl+Cmd+Space, iPhone & Gboard keys—plus a free web copy-paste keyboard.",
  },
  "red-circle-emoji-meaning": {
    metaTitle: "Red Circle Emoji Meaning: 🔴 Status, Lists & Copy",
    metaDescription:
      "What does 🔴 mean? Red circle for status dots, live markers, and bullets—plus copy tips for Discord and Slack.",
  },
  "moai-emoji-meaning": {
    metaTitle: "Moai Emoji Meaning: 🗿 Deadpan Gen Z Slang (2026)",
    metaDescription:
      "What does 🗿 mean? Moai emoji for deadpan, unfazed, stone-face vibes on TikTok and texts—with examples and copy.",
  },
  "nail-polish-emoji-meaning": {
    metaTitle: "Nail Polish Emoji Meaning: 💅 Unbothered (2026)",
    metaDescription:
      "What does 💅 mean? Nail polish emoji for unbothered, sassy Gen Z vibes on TikTok and texts—with examples and copy.",
  },
};

/** Lote 3 — emoji context pages (emojiSlug/context) */
export const priorityContextSeo: Record<string, EmojiSeoMeta> = {
  "red-heart/from-a-girl": {
    metaTitle: "❤️ From a Girl: What Red Heart Means in Texts",
    metaDescription:
      "What does ❤️ mean from a girl? Romantic, friendly, or supportive—see signals, examples, and when not to overread it.",
  },
  "red-heart/from-a-guy": {
    metaTitle: "❤️ From a Guy: Red Heart — Flirty or Just Nice?",
    metaDescription:
      "What does ❤️ mean from a guy? Learn affection vs casual tone with real texting examples and caution tips.",
  },
  "red-heart/whatsapp": {
    metaTitle: "❤️ on WhatsApp: Red Heart Meaning in Chats",
    metaDescription:
      "What does ❤️ mean on WhatsApp? Family, friends, or romance—see group vs private chat tone with examples.",
  },
  "fire/from-a-guy": {
    metaTitle: "🔥 From a Guy: Fire Emoji — Compliment or Flirty?",
    metaDescription:
      "What does 🔥 mean from a guy? Attractive, hype, or flirty—see DM vs comment tone with real examples.",
  },
  "fire/instagram": {
    metaTitle: "🔥 on Instagram: Fire Emoji in Comments & DMs",
    metaDescription:
      "What does 🔥 mean on Instagram? Hot, impressive, or trending—reels, stories, and comment examples.",
  },
  "skull/tiktok": {
    metaTitle: "💀 on TikTok: Skull Emoji Meaning (Gen Z Slang)",
    metaDescription:
      "What does 💀 mean on TikTok? Usually 'I'm dead' from laughing—not literal. See comment and caption examples.",
  },
  "skull/instagram": {
    metaTitle: "💀 on Instagram: Skull Emoji in Comments & DMs",
    metaDescription:
      "What does 💀 mean on Instagram? Laughing at chaos, memes, or awkward moments—with reel comment examples.",
  },
  "pleading-face/from-a-girl": {
    metaTitle: "🥺 From a Girl: Pleading Face — Flirty or Sweet?",
    metaDescription:
      "What does 🥺 mean from a girl? Cute request, emotion, or flirting—see signals and message examples.",
  },
  "pleading-face/from-a-guy": {
    metaTitle: "🥺 From a Guy: What Pleading Face Means in Texts",
    metaDescription:
      "What does 🥺 mean from a guy? Shy, apologetic, or flirty—learn tone with private message examples.",
  },
  "thumbs-up/whatsapp": {
    metaTitle: "👍 on WhatsApp: Thumbs Up — OK or Passive-Aggressive?",
    metaDescription:
      "What does 👍 mean on WhatsApp? Quick OK—or cold? See when a standalone thumbs up feels dismissive.",
  },
  "smiling-face-with-heart-eyes/from-a-girl": {
    metaTitle: "😍 From a Girl: Heart Eyes — Crush or Just Hype?",
    metaDescription:
      "What does 😍 mean from a girl? Admiration, attraction, or enthusiasm—see flirty vs friendly signals.",
  },
  "smiling-face-with-heart-eyes/instagram": {
    metaTitle: "😍 on Instagram: Heart Eyes Emoji Meaning",
    metaDescription:
      "What does 😍 mean on Instagram? Love, admiration, or hype under photos, reels, and DMs—with examples.",
  },
  "face-with-tears-of-joy/whatsapp": {
    metaTitle: "😂 on WhatsApp: Laughing Emoji Meaning in Chats",
    metaDescription:
      "What does 😂 mean on WhatsApp? Funny, teasing, or dismissive—family groups and friend chat examples.",
  },
  "face-with-tears-of-joy/tiktok": {
    metaTitle: "😂 on TikTok: Laugh Emoji vs 💀 in Gen Z Comments",
    metaDescription:
      "What does 😂 mean on TikTok—and when do people use 💀 instead? See Gen Z comment tone with examples.",
  },
  "loudly-crying-face/from-a-girl": {
    metaTitle: "😭 From a Girl: Crying Emoji — Sad, Funny or Drama?",
    metaDescription:
      "What does 😭 mean from a girl? Laughing, overwhelmed, or emotional—see signals and message examples.",
  },
  "loudly-crying-face/tiktok": {
    metaTitle: "😭 on TikTok: Loudly Crying Emoji in Gen Z Comments",
    metaDescription:
      "What does 😭 mean on TikTok? Extreme reactions, laughter, or chaos—with comment examples.",
  },
  "loudly-crying-face/whatsapp": {
    metaTitle: "😭 on WhatsApp: Crying Emoji in Chats & Groups",
    metaDescription:
      "What does 😭 mean on WhatsApp? Laughing, sympathy, or drama—family and friend chat examples.",
  },
  "winking-face/from-a-girl": {
    metaTitle: "😉 From a Girl: Wink Emoji — Flirty or Joke?",
    metaDescription:
      "What does 😉 mean from a girl? Playful flirting, teasing, or inside jokes—with texting examples.",
  },
  "winking-face/from-a-guy": {
    metaTitle: "😉 From a Guy: Wink Emoji Meaning in Texts",
    metaDescription:
      "What does 😉 mean from a guy? Flirting, confidence, or humor—see when it feels romantic.",
  },
  "smirking-face/from-a-girl": {
    metaTitle: "😏 From a Girl: Smirk Emoji — Flirty or Teasing?",
    metaDescription:
      "What does 😏 mean from a girl? Bold flirting, confidence, or sarcasm—with DM examples.",
  },
  "smirking-face/from-a-guy": {
    metaTitle: "😏 From a Guy: Smirk Emoji in Texting & DMs",
    metaDescription:
      "What does 😏 mean from a guy? Teasing, flirting, or challenge tone—with real examples.",
  },
  "folded-hands/whatsapp": {
    metaTitle: "🙏 on WhatsApp: Thanks, Please or Prayer?",
    metaDescription:
      "What does 🙏 mean on WhatsApp? Gratitude, hope, and cultural tone—with chat examples.",
  },
  "eyes/from-a-girl": {
    metaTitle: "👀 From a Girl: Eyes Emoji — Flirty or Curious?",
    metaDescription:
      "What does 👀 mean from a girl? She noticed something—flirty, gossip, or curiosity with examples.",
  },
  "eyes/instagram": {
    metaTitle: "👀 on Instagram: Eyes Emoji in Comments & DMs",
    metaDescription:
      "What does 👀 mean on Instagram? 'I see you', hype, or gossip—story and comment examples.",
  },
  "melting-face/tiktok": {
    metaTitle: "🫠 on TikTok: Melting Face Emoji Meaning (2026)",
    metaDescription:
      "What does 🫠 mean on TikTok? Embarrassment, heat, awkwardness—Gen Z comment examples.",
  },
};

/** Lote 4 — people subcategory hubs */
export const priorityPeopleSubSeo: Record<string, EmojiSeoMeta> = {
  gestures: {
    metaTitle: "👋 Gesture Emojis — Hands & Body Language Copy",
    metaDescription:
      "Wave, thumbs up, clap, and hand gesture emojis with meanings. Copy for WhatsApp, texts, and reactions.",
  },
  emotions: {
    metaTitle: "🤗 People Emotion Emojis — Faces & Feelings",
    metaDescription:
      "People showing emotions and expressions. Browse meanings and copy human emotion emojis instantly.",
  },
  professions: {
    metaTitle: "👨‍⚕️ Profession Emojis — Jobs & Careers Copy List",
    metaDescription:
      "Doctor, teacher, tech, and job emojis with meanings. Copy profession symbols for work chats and posts.",
  },
  family: {
    metaTitle: "👨‍👩‍👧 Family Emojis — Parents, Kids & Groups",
    metaDescription:
      "Family member emojis and group symbols. Copy for messages, announcements, and inclusive posts.",
  },
};

/** Lote 3 — category hubs */
export const priorityCategorySeo: Record<string, EmojiSeoMeta> = {
  "smileys-and-emotion": {
    metaTitle: "😀 Smileys & Emotion Emojis — Meanings & Copy",
    metaDescription:
      "Browse smileys, faces, and hearts. Copy any emoji and learn meanings for texting, memes, and social media.",
  },
  "people-and-body": {
    metaTitle: "👋 People & Body Emojis — Gestures & Copy List",
    metaDescription:
      "Hand gestures, people, family, and body emojis with meanings. Copy instantly for WhatsApp and Instagram.",
  },
  "animals-and-nature": {
    metaTitle: "🐱 Animal & Nature Emojis — Copy & Meanings",
    metaDescription:
      "Pets, wildlife, plants, and nature emojis. Find meanings and copy any animal or nature emoji in one click.",
  },
  "food-and-drink": {
    metaTitle: "🍕 Food & Drink Emojis — Copy All Food Symbols",
    metaDescription:
      "Fruits, meals, drinks, and snacks—browse food emoji meanings and copy for captions, texts, and posts.",
  },
  "travel-and-places": {
    metaTitle: "✈️ Travel & Places Emojis — Copy & Meanings",
    metaDescription:
      "Vehicles, buildings, landmarks, and weather emojis. Copy travel symbols for trips, posts, and messages.",
  },
  activities: {
    metaTitle: "⚽ Activity Emojis — Sports, Games & Hobbies",
    metaDescription:
      "Sports, games, arts, and event emojis with meanings. Copy activity symbols for chats and social posts.",
  },
  objects: {
    metaTitle: "💡 Object Emojis — Tech, Home & Everyday Items",
    metaDescription:
      "Phones, tools, clothes, and household object emojis. Browse meanings and copy any object emoji instantly.",
  },
  symbols: {
    metaTitle: "❤️ Symbol Emojis — Hearts, Signs & Arrows",
    metaDescription:
      "Hearts, arrows, warnings, and zodiac symbols. Copy symbol emojis and learn common texting meanings.",
  },
  flags: {
    metaTitle: "🏳️ Flag Emojis — Every Country Flag to Copy",
    metaDescription:
      "All country and regional flag emojis in one list. Copy any flag for WhatsApp, Instagram, and messages.",
  },
};

export const contextSeoKey = (emojiSlug: string, context: string) => `${emojiSlug}/${context}`;

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

  const title = `${left.unicode} vs ${right.unicode}: ${left.name} vs ${right.name}`;
  return {
    title: withBrand(`${title} — Which Should You Use?`),
    description: truncate(
      `What's the difference between ${left.unicode} and ${right.unicode}? Compare meanings, tone, and when to use each in texting.`,
      160
    ),
    ogTitle: `${left.name} vs ${right.name}`,
  };
};

export const getContextSeoMeta = (emoji: Emoji, page: EmojiContextPage): PageSeoMeta => {
  const key = contextSeoKey(page.emojiSlug, page.context);
  const priority = priorityContextSeo[key];
  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(priority.metaDescription, 160),
      ogTitle: priority.metaTitle,
    };
  }

  const generated = buildContextSeoMeta(emoji, page);
  return {
    title: withBrand(generated.metaTitle),
    description: truncate(generated.metaDescription, 160),
    ogTitle: generated.metaTitle,
  };
};

export const getCategorySeoMeta = (category: Category, emojiCount?: number): PageSeoMeta => {
  const priority = priorityCategorySeo[category.slug];
  const countLine = emojiCount
    ? ` Browse ${emojiCount.toLocaleString()} emojis to copy free.`
    : "";

  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(`${priority.metaDescription}${countLine}`, 160),
      ogTitle: priority.metaTitle,
    };
  }

  const title = `${category.icon} ${category.name} Emojis — Copy & Meanings`;
  return {
    title: withBrand(title),
    description: truncate(
      `${category.description}${countLine || " Copy and paste instantly."}`,
      160
    ),
    ogTitle: title,
  };
};

const cleanBlogTitle = (title: string) =>
  title
    .replace(/^The\s+/i, "")
    .replace(/:\s*A Comprehensive Guide$/i, "")
    .replace(/:\s*A Complete Guide$/i, "")
    .replace(/:\s*Complete Guide$/i, "")
    .trim();

const buildBlogFallbackSeo = (post: {
  slug: string;
  title: string;
  excerpt: string;
}): PageSeoMeta => {
  let ogTitle = cleanBlogTitle(post.title);
  if (ogTitle.length > 58) ogTitle = truncate(ogTitle, 58);

  const needsYear =
    !ogTitle.includes("?") &&
    !/202[4-9]/.test(ogTitle) &&
    (post.slug.includes("guide") || post.slug.includes("how-to") || post.slug.includes("meanings"));

  const metaTitle = needsYear ? `${ogTitle} (2026)` : ogTitle;

  return {
    title: withBrand(metaTitle),
    description: truncate(post.excerpt, 160),
    ogTitle: metaTitle,
  };
};

export const getPeopleSubSeoMeta = (
  sub: { slug: string; name: string; description: string },
  emojiCount?: number
): PageSeoMeta => {
  const priority = priorityPeopleSubSeo[sub.slug];
  const editorial = getPeopleSubcategoryEditorial(sub.slug);
  const countLine = emojiCount ? ` Browse ${emojiCount.toLocaleString()} emojis to copy.` : "";
  const descriptionBase = editorial?.lead ?? priority?.metaDescription ?? sub.description;

  if (priority) {
    return {
      title: withBrand(priority.metaTitle),
      description: truncate(`${descriptionBase}${countLine}`, 160),
      ogTitle: priority.metaTitle,
    };
  }

  const title = `${sub.name} Emojis — Copy & Meanings`;
  return {
    title: withBrand(title),
    description: truncate(`${sub.description}${countLine || " Copy instantly."}`, 160),
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

  return buildBlogFallbackSeo(post);
};
