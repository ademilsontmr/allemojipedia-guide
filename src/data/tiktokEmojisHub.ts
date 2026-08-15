export type TikTokEmojiFeature = {
  slug: string;
  unicode: string;
  label: string;
  tiktokMeaning: string;
};

export const tiktokEmojisHub = {
  path: "/tiktok-emojis/",
  title: "TikTok Emojis — Meanings, Slang & Copy (2026)",
  description:
    "What do TikTok emojis mean? Decode 💀 😭 🤡 🔥 👀 in comments and captions, copy popular TikTok reaction emojis, and learn Gen Z slang tone.",
  keywords:
    "tiktok emojis, tiktok emoji meanings, tiktok emoji slang, skull emoji tiktok, crying emoji tiktok, copy tiktok emojis",
  h1: "TikTok Emojis — Meanings, Slang & Copy",
  lead:
    "TikTok comments run on ironic reactions. Skull, crying, clown, fire, and eyes often mean humor or hype—not the literal dictionary definition. Copy the emoji, then open the TikTok-specific meaning guide.",
  sections: [
    {
      heading: "What are TikTok emojis?",
      body:
        "TikTok doesn't invent a separate Unicode set—the same emojis as iPhone and Android appear in comments and captions. What changes is slang: 💀 often means \"I'm dead\" from laughing, 😭 can be comedy chaos, and 🤡 calls out clown behavior. Context in the video and comment thread decides the tone.",
    },
    {
      heading: "How to copy TikTok emojis",
      body:
        "1. Tap any emoji on this page to copy it.\n2. Paste into TikTok comments, captions, or DMs.\n3. For tone tips, open the \"on TikTok\" guide linked under each emoji.\n4. On mobile, long-press after paste if your keyboard suggests look-alike symbols.",
    },
    {
      heading: "TikTok emoji slang vs texting",
      body:
        "In private WhatsApp chats, 😭 may still mean sadness. On TikTok, the same emoji often marks exaggerated reactions to a clip. Read the caption before assuming romance, insult, or literal emotion—especially with 👀, 🫠, and 🙈.",
    },
    {
      heading: "Best TikTok reaction emojis",
      body:
        "High-frequency reactions: 💀 (dead from laughter), 😭 (chaos / overreact), 🔥 (hot or impressive), 🤡 (clown / self-roast), 👀 (I see you), ✨ (aesthetic or sarcastic sparkle), 💯 (real / agreed). Pair them with short comment text for clearer intent.",
    },
  ],
  faqs: [
    {
      question: "What does the skull emoji mean on TikTok?",
      answer:
        "Usually \"I'm dead\" from laughing or secondhand embarrassment—not a threat. See our skull TikTok guide for comment examples.",
    },
    {
      question: "Are TikTok emojis different from iPhone emojis?",
      answer:
        "No. TikTok uses the same Unicode characters; Apple, Google, and Samsung only change the artwork. Meanings shift with Gen Z comment culture.",
    },
    {
      question: "How do I copy emojis for TikTok captions?",
      answer:
        "Tap an emoji on Allemojipedia to copy, then paste into the TikTok caption or comment field. Works on iPhone and Android.",
    },
    {
      question: "Where can I learn more TikTok emoji slang?",
      answer:
        "Browse our TikTok emoji meanings cluster and Gen Z slang blog posts, or open each emoji's dedicated TikTok context page.",
    },
  ],
};

/** High-volume TikTok reaction emojis with short slang hooks. */
export const tiktokFeaturedEmojis: TikTokEmojiFeature[] = [
  {
    slug: "skull",
    unicode: "💀",
    label: "Skull",
    tiktokMeaning: "I'm dead laughing / cringe death",
  },
  {
    slug: "loudly-crying-face",
    unicode: "😭",
    label: "Loudly Crying",
    tiktokMeaning: "Chaos laugh, drama, or soft tears",
  },
  {
    slug: "face-with-tears-of-joy",
    unicode: "😂",
    label: "Tears of Joy",
    tiktokMeaning: "Classic laugh in comments",
  },
  {
    slug: "clown-face",
    unicode: "🤡",
    label: "Clown",
    tiktokMeaning: "Clown behavior or self-own",
  },
  {
    slug: "fire",
    unicode: "🔥",
    label: "Fire",
    tiktokMeaning: "Hot take, attractive, or hype",
  },
  {
    slug: "eyes",
    unicode: "👀",
    label: "Eyes",
    tiktokMeaning: "I see you / gossip alert",
  },
  {
    slug: "sparkles",
    unicode: "✨",
    label: "Sparkles",
    tiktokMeaning: "Aesthetic, sarcasm, or glow-up",
  },
  {
    slug: "hundred-points",
    unicode: "💯",
    label: "Hundred",
    tiktokMeaning: "Facts / keeping it real",
  },
  {
    slug: "melting-face",
    unicode: "🫠",
    label: "Melting Face",
    tiktokMeaning: "Embarrassed or overheating",
  },
  {
    slug: "pleading-face",
    unicode: "🥺",
    label: "Pleading",
    tiktokMeaning: "Cute ask or soft reaction",
  },
  {
    slug: "see-no-evil-monkey",
    unicode: "🙈",
    label: "See-No-Evil",
    tiktokMeaning: "Playful denial / I didn't see that",
  },
  {
    slug: "rolling-on-the-floor-laughing",
    unicode: "🤣",
    label: "ROFL",
    tiktokMeaning: "Hard laugh / extreme funny",
  },
];
