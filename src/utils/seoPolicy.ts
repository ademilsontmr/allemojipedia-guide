import type { Emoji } from "../data/emojis";

export const INDEX_FOLLOW_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/** All emoji pages are indexable for Google Search. */
export const shouldIndexEmoji = (_emoji: Emoji): boolean => true;

export const getEmojiRobots = (_emoji: Emoji): string => INDEX_FOLLOW_ROBOTS;
