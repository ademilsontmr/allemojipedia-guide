import type { Emoji } from "../data/emojis";
import { topEmojiSlugs } from "../data/topEmojiEditorial";
import { trendingEmojiCards } from "../data/featuredEmojis";

export const INDEX_FOLLOW_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const NOINDEX_FOLLOW_ROBOTS = "noindex, follow";

/**
 * Seasonal + hub emojis kept indexable beyond the evergreen top list.
 * Reversible: remove from this set (or expand) when domain trust recovers.
 */
const SEASONAL_AND_HUB_EMOJI_SLUGS = [
  "christmas-tree",
  "santa-claus",
  "mrs-claus",
  "mx-claus",
  "wrapped-gift",
  "fireworks",
  "turkey",
  "clinking-glasses",
  "bottle-with-popping-cork",
  "snowflake",
  "snowman",
  "menorah",
  "deer",
  "cookie",
  "sparkler",
  "confetti-ball",
] as const;

/** Priority allowlist (~160–170). Everything else gets noindex until trust recovers. */
const priorityEmojiSlugSet: Set<string> = new Set([
  ...topEmojiSlugs,
  ...SEASONAL_AND_HUB_EMOJI_SLUGS,
  ...trendingEmojiCards.map((card) => card.slug),
]);

export const getPriorityEmojiSlugCount = (): number => priorityEmojiSlugSet.size;

export const isPriorityEmojiSlug = (slug: string | undefined | null): boolean => {
  if (!slug) return false;
  return priorityEmojiSlugSet.has(slug);
};

/**
 * Selective indexing: only priority emoji pages are indexable.
 * Long-tail (skin tones, rare roles, thin flags, etc.) stays crawlable with noindex
 * so equity can flow later when we re-open batches.
 */
export const shouldIndexEmoji = (emoji: Emoji): boolean => isPriorityEmojiSlug(emoji.slug);

export const shouldIndexEmojiSlug = (slug: string | undefined | null): boolean =>
  isPriorityEmojiSlug(slug);

/** Context pages (/emoji/x/from-a-girl/) only when the parent emoji is priority. */
export const shouldIndexEmojiContext = (emojiSlug: string): boolean =>
  isPriorityEmojiSlug(emojiSlug);

/** Comparison pages only when both sides are priority. */
export const shouldIndexEmojiComparison = (slug1: string, slug2: string): boolean =>
  isPriorityEmojiSlug(slug1) && isPriorityEmojiSlug(slug2);

export const getEmojiRobots = (emoji: Emoji): string =>
  shouldIndexEmoji(emoji) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiSlugRobots = (slug: string | undefined | null): string =>
  shouldIndexEmojiSlug(slug) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiContextRobots = (emojiSlug: string): string =>
  shouldIndexEmojiContext(emojiSlug) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiComparisonRobots = (slug1: string, slug2: string): string =>
  shouldIndexEmojiComparison(slug1, slug2) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;
