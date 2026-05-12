export type FeaturedEmoji = {
  slug: string;
  unicode: string;
  name: string;
  shortMeaning: string;
};

export type EmojiCombo = {
  emojis: string;
  meaning: string;
};

export const trendingEmojiCards: FeaturedEmoji[] = [
  {
    slug: "face-with-tears-of-joy",
    unicode: "😂",
    name: "Face With Tears of Joy",
    shortMeaning: "Used for laughter, amusement, and playful exaggeration.",
  },
  {
    slug: "red-heart",
    unicode: "❤️",
    name: "Red Heart",
    shortMeaning: "Shows love, affection, support, or warm appreciation.",
  },
  {
    slug: "fire",
    unicode: "🔥",
    name: "Fire",
    shortMeaning: "Means hot, impressive, exciting, attractive, or trending.",
  },
  {
    slug: "loudly-crying-face",
    unicode: "😭",
    name: "Loudly Crying Face",
    shortMeaning: "Expresses intense emotion, sadness, or dramatic laughter.",
  },
  {
    slug: "smiling-face-with-heart-eyes",
    unicode: "😍",
    name: "Smiling Face With Heart-Eyes",
    shortMeaning: "Shows love, admiration, attraction, or strong delight.",
  },
  {
    slug: "thinking-face",
    unicode: "🤔",
    name: "Thinking Face",
    shortMeaning: "Signals curiosity, doubt, suspicion, or consideration.",
  },
  {
    slug: "skull",
    unicode: "💀",
    name: "Skull",
    shortMeaning: "Often means laughing hard, shock, or disbelief online.",
  },
  {
    slug: "sparkles",
    unicode: "✨",
    name: "Sparkles",
    shortMeaning: "Adds emphasis, magic, celebration, or aesthetic tone.",
  },
  {
    slug: "pleading-face",
    unicode: "🥺",
    name: "Pleading Face",
    shortMeaning: "Shows cuteness, begging, vulnerability, or emotional appeal.",
  },
  {
    slug: "hundred-points",
    unicode: "💯",
    name: "Hundred Points",
    shortMeaning: "Means agreement, excellence, authenticity, or full support.",
  },
  {
    slug: "thumbs-up",
    unicode: "👍",
    name: "Thumbs Up",
    shortMeaning: "Means OK, approval, agreement, or acknowledgment.",
  },
  {
    slug: "folded-hands",
    unicode: "🙏",
    name: "Folded Hands",
    shortMeaning: "Means thanks, prayer, please, hope, or gratitude.",
  },
];

export const popularEmojiCombos: EmojiCombo[] = [
  { emojis: "😂💀", meaning: "Dying laughing - something is extremely funny" },
  { emojis: "❤️‍🔥", meaning: "Intense passion or burning love" },
  { emojis: "🥺👉👈", meaning: "Shy or hesitant request, asking cutely" },
  { emojis: "✨💅", meaning: "Self-confidence and treating yourself" },
  { emojis: "🙈🙉🙊", meaning: "See no evil, hear no evil, speak no evil" },
  { emojis: "💀⚰️", meaning: "Dead from laughter or something shocking" },
  { emojis: "🔥💯", meaning: "Something is absolutely perfect and impressive" },
  { emojis: "🥹🫶", meaning: "Touched and showing love/appreciation" },
];
