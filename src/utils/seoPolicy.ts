import type { Emoji } from "../data/emojis";

export const INDEX_FOLLOW_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const NOINDEX_FOLLOW_ROBOTS = "noindex, follow";

const GENERIC_EMOJI_PHRASES = [
  "is used in digital communication to express specific meaning",
  "a popular choice for messaging online",
  "expressing expressive feelings",
];

export const isGenericEmojiContent = (emoji: Emoji): boolean => {
  const text = [
    emoji.shortMeaning,
    emoji.detailedMeaning,
    ...emoji.usageContexts,
    ...emoji.misunderstandings,
  ]
    .join(" ")
    .toLowerCase();

  return GENERIC_EMOJI_PHRASES.some((phrase) => text.includes(phrase));
};

export const shouldIndexEmoji = (emoji: Emoji): boolean => {
  return !isGenericEmojiContent(emoji);
};

export const getEmojiRobots = (emoji: Emoji): string => {
  return shouldIndexEmoji(emoji) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;
};
