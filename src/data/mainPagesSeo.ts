const BRAND = "Allemojipedia";

export type PageSeoMeta = {
  title: string;
  description: string;
  ogTitle?: string;
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
  "/platforms/": {
    title: `Emoji Platforms — Apple, Google & Samsung | ${BRAND}`,
    description:
      "Copy emojis by platform: iPhone (Apple), Android (Google), and Samsung Galaxy—with meanings for each device style.",
    ogTitle: "Emoji Platforms — Apple, Google & Samsung",
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

export const getMainPageSeo = (path: string): PageSeoMeta => {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  const seo = mainPagesSeo[normalized];
  if (seo) return seo;

  return {
    title: `${BRAND} — Emoji Meanings, Names & Copy`,
    description: "Discover emoji meanings, copy and paste emojis, and learn how to use them in texting and social media.",
  };
};
