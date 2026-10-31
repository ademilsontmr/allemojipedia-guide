import type { Emoji } from "./emojis";
import {
  buildUniqueEditorial,
  type EmojiEditorialContent,
} from "@/utils/emojiUniqueContent";

export type TopEmojiEditorial = EmojiEditorialContent;

export { topEmojiSlugs } from "./topEmojiSlugs";
import { topEmojiSlugs } from "./topEmojiSlugs";

const editorialOverrides: Record<string, Partial<TopEmojiEditorial>> = {
  "red-heart": {
    searchTitle: "Red Heart Emoji Meaning: Love, Friendship, Texting, and When to Use It",
    snippetAnswer:
      "The red heart emoji usually means love, affection, warmth, or strong appreciation. It can be romantic, but in close friendships and family chats it can simply show care.",
    searchIntents: ["red heart emoji meaning", "❤️ meaning from a girl", "red heart vs pink heart", "heart emoji meaning in texting"],
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

export const isTopEmoji = (slug: string): boolean => topEmojiSlugs.includes(slug as (typeof topEmojiSlugs)[number]);

export const getTopEmojiEditorial = (emoji: Emoji): TopEmojiEditorial => {
  const base = buildUniqueEditorial(emoji);
  const override = editorialOverrides[emoji.slug];
  if (!override) return base;

  return {
    ...base,
    ...override,
    slug: emoji.slug,
    faqs: override.faqs ?? base.faqs,
    searchIntents: override.searchIntents ?? base.searchIntents,
  };
};
