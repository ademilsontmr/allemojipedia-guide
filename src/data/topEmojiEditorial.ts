import type { Emoji } from "./emojis";

export type TopEmojiEditorial = {
  slug: string;
  searchTitle: string;
  snippetAnswer: string;
  textingMeaning: string;
  socialMeaning: string;
  caution: string;
  searchIntents: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const topEmojiSlugs = [
  "face-with-tears-of-joy",
  "red-heart",
  "skull",
  "loudly-crying-face",
  "fire",
  "thumbs-up",
  "folded-hands",
  "pleading-face",
  "smiling-face-with-heart-eyes",
  "thinking-face",
  "hundred-points",
  "sparkles",
  "winking-face",
  "smiling-face-with-smiling-eyes",
  "rolling-on-the-floor-laughing",
  "melting-face",
  "smiling-face",
  "slightly-smiling-face",
  "upside-down-face",
  "face-with-rolling-eyes",
  "smirking-face",
  "grimacing-face",
  "neutral-face",
  "unamused-face",
  "face-blowing-a-kiss",
  "kiss-mark",
  "purple-heart",
  "blue-heart",
  "black-heart",
  "white-heart",
  "yellow-heart",
  "green-heart",
  "pink-heart",
  "broken-heart",
  "heart-hands",
  "eyes",
  "clapping-hands",
  "raising-hands",
  "handshake",
  "flexed-biceps",
  "victory-hand",
  "ok-hand",
  "check-mark",
  "party-popper",
  "star-struck",
  "clown-face",
  "ghost",
  "alien",
  "pile-of-poo",
  "see-no-evil-monkey",
] as const;

const editorialOverrides: Record<string, Partial<TopEmojiEditorial>> = {
  "face-with-tears-of-joy": {
    searchTitle: "Face With Tears of Joy Emoji Meaning in Texting, Memes, and Social Media",
    snippetAnswer:
      "The face with tears of joy emoji means something is very funny, amusing, or playfully ridiculous. In texting it usually signals laughter, but younger users may sometimes prefer the skull emoji for the same idea.",
    searchIntents: ["what does 😂 mean", "😂 meaning in texting", "😂 vs 💀", "laughing emoji meaning"],
  },
  "red-heart": {
    searchTitle: "Red Heart Emoji Meaning: Love, Friendship, Texting, and When to Use It",
    snippetAnswer:
      "The red heart emoji usually means love, affection, warmth, or strong appreciation. It can be romantic, but in close friendships and family chats it can simply show care.",
    searchIntents: ["red heart emoji meaning", "❤️ meaning from a girl", "red heart vs pink heart", "heart emoji meaning in texting"],
  },
  skull: {
    searchTitle: "Skull Emoji Meaning in Texting, Gen Z Slang, and Social Media",
    snippetAnswer:
      "The skull emoji usually means 'I'm dead' from laughter, shock, embarrassment, or disbelief. In Gen Z texting, it often replaces the crying laughing emoji to show that something is extremely funny.",
    searchIntents: ["skull emoji meaning", "💀 meaning in texting", "skull emoji Gen Z meaning", "💀 vs 😂"],
  },
  "loudly-crying-face": {
    searchTitle: "Loudly Crying Face Emoji Meaning: Sad, Funny, or Overwhelmed?",
    snippetAnswer:
      "The loudly crying face emoji can mean real sadness, intense emotion, or exaggerated laughter. In casual texting it is often dramatic rather than literally sad.",
    searchIntents: ["😭 meaning", "loudly crying emoji meaning", "😭 meaning in texting", "😭 vs 😂"],
  },
  fire: {
    searchTitle: "Fire Emoji Meaning: Hot, Attractive, Trending, or Impressive?",
    snippetAnswer:
      "The fire emoji means something is hot, impressive, exciting, attractive, or trending. It is commonly used for compliments, viral posts, sports moments, and high-energy reactions.",
    searchIntents: ["fire emoji meaning", "🔥 meaning in texting", "fire emoji from a guy", "fire emoji on Instagram"],
  },
  "thumbs-up": {
    searchTitle: "Thumbs Up Emoji Meaning: Approval, OK, or Passive-Aggressive?",
    snippetAnswer:
      "The thumbs up emoji usually means approval, agreement, or 'OK'. In some work chats or Gen Z texting, it can feel blunt or passive-aggressive if sent alone.",
    searchIntents: ["thumbs up emoji meaning", "👍 passive aggressive", "thumbs up meaning at work", "👍 meaning in texting"],
  },
  "folded-hands": {
    searchTitle: "Folded Hands Emoji Meaning: Prayer, Thanks, Please, or High Five?",
    snippetAnswer:
      "The folded hands emoji most often means prayer, thanks, please, hope, or gratitude. Some people use it as a high five, but context usually decides the meaning.",
    searchIntents: ["folded hands emoji meaning", "🙏 meaning", "prayer hands emoji", "🙏 high five meaning"],
  },
  "pleading-face": {
    searchTitle: "Pleading Face Emoji Meaning: Cute, Begging, Emotional, or Flirty?",
    snippetAnswer:
      "The pleading face emoji means begging, cuteness, vulnerability, or emotional appeal. In flirting, it can make a request feel softer, shy, or affectionate.",
    searchIntents: ["pleading face emoji meaning", "🥺 meaning in texting", "🥺 from a girl", "pleading emoji flirty meaning"],
  },
  "smiling-face-with-heart-eyes": {
    searchTitle: "Heart Eyes Emoji Meaning: Love, Crushes, Compliments, and Reactions",
    snippetAnswer:
      "The heart eyes emoji means love, admiration, attraction, or strong delight. It is used for crushes, compliments, cute photos, food, outfits, and anything someone adores.",
    searchIntents: ["heart eyes emoji meaning", "😍 meaning from a girl", "😍 meaning in texting", "heart eyes vs smiling face with hearts"],
  },
  "thinking-face": {
    searchTitle: "Thinking Face Emoji Meaning: Questioning, Doubt, Suspicion, or Curiosity",
    snippetAnswer:
      "The thinking face emoji means curiosity, doubt, suspicion, or 'I'm considering this.' It can be sincere, sarcastic, or skeptical depending on the message.",
    searchIntents: ["thinking emoji meaning", "🤔 meaning in texting", "thinking face sarcastic meaning", "🤔 from a guy"],
  },
};

const defaultIntent = (emoji: Emoji, label: string) => [
  `${label} emoji meaning`,
  `${emoji.unicode} meaning in texting`,
  `${label} emoji on Instagram`,
  `${label} emoji from someone`,
];

const defaultEditorial = (emoji: Emoji): TopEmojiEditorial => {
  const label = emoji.name.toLowerCase();

  return {
    slug: emoji.slug,
    searchTitle: `${emoji.name} Emoji Meaning in Texting, Social Media, and Real Conversations`,
    snippetAnswer: `${emoji.unicode} ${emoji.name} usually means ${emoji.shortMeaning.replace(/\.$/, "").toLowerCase()}. The exact tone depends on the relationship, platform, and surrounding message.`,
    textingMeaning: `In texting, ${emoji.unicode} helps add emotional tone to short messages. It can make a reply feel warmer, funnier, softer, more excited, or more sarcastic depending on the words around it.`,
    socialMeaning: `On Instagram, TikTok, X, and group chats, ${emoji.unicode} often works as a quick reaction. People use it in captions, comments, and replies when they want the feeling to be understood instantly.`,
    caution: `Avoid using ${emoji.unicode} in serious, formal, or sensitive messages unless the relationship is casual enough. The same emoji can feel friendly to one person and dismissive to another.`,
    searchIntents: defaultIntent(emoji, label),
    faqs: [
      {
        question: `What does ${emoji.unicode} mean in texting?`,
        answer: `${emoji.unicode} usually reflects ${emoji.keywords.slice(0, 3).join(", ")} or a related emotional tone. Read it with the full sentence, not as a standalone symbol.`,
      },
      {
        question: `Is ${emoji.unicode} flirty?`,
        answer: `It can be flirty if the conversation is already romantic or playful, but it can also be friendly, ironic, or casual depending on who sends it.`,
      },
    ],
  };
};

export const isTopEmoji = (slug: string): boolean => topEmojiSlugs.includes(slug as (typeof topEmojiSlugs)[number]);

export const getTopEmojiEditorial = (emoji: Emoji): TopEmojiEditorial | null => {
  if (!isTopEmoji(emoji.slug)) return null;

  return {
    ...defaultEditorial(emoji),
    ...editorialOverrides[emoji.slug],
    slug: emoji.slug,
  };
};
