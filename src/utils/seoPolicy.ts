import type { Emoji } from "../data/emojis";
import { topEmojiSlugs } from "../data/topEmojiSlugs";
import { trendingEmojiCards } from "../data/featuredEmojis";

export const INDEX_FOLLOW_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const NOINDEX_FOLLOW_ROBOTS = "noindex, follow";

/** Seasonal + hub emojis featured in “most searched” modules beyond the evergreen top list. */
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

/** Most-searched set for hubs and “start here” modules — not the robots allowlist. */
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

/** Skin-tone modifier pages duplicate the base meaning (e.g. kiss-medium-skin-tone). */
export const isSkinToneVariantSlug = (slug: string | undefined | null): boolean =>
  Boolean(slug && slug.includes("skin-tone"));

/**
 * Index every emoji meaning page except skin-tone variants.
 * Context, comparison, and combo-detail URLs stay noindex until rewritten.
 */
export const shouldIndexEmoji = (emoji: Emoji): boolean => shouldIndexEmojiSlug(emoji.slug);

export const shouldIndexEmojiSlug = (slug: string | undefined | null): boolean =>
  Boolean(slug) && !isSkinToneVariantSlug(slug);

/**
 * Context pages (/emoji/x/from-a-girl/) and comparisons are templated, so they stay
 * noindex until the core emoji pages earn trust. Re-open per page once rewritten by hand.
 */
const INDEXABLE_CONTEXT_PAGES = new Set<string>();
const INDEXABLE_COMPARISONS = new Set<string>();

/** /emoji-combos/{slug}/ pages are short; re-open per page once rewritten by hand. */
const INDEXABLE_EMOJI_COMBOS = new Set<string>();

export const shouldIndexEmojiCombo = (slug: string): boolean => INDEXABLE_EMOJI_COMBOS.has(slug);

export const getEmojiComboRobots = (slug: string): string =>
  shouldIndexEmojiCombo(slug) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const shouldIndexEmojiContext = (emojiSlug: string, context?: string): boolean =>
  isPriorityEmojiSlug(emojiSlug) && INDEXABLE_CONTEXT_PAGES.has(`${emojiSlug}/${context ?? ""}`);

export const shouldIndexEmojiComparison = (slug1: string, slug2: string): boolean =>
  isPriorityEmojiSlug(slug1) &&
  isPriorityEmojiSlug(slug2) &&
  INDEXABLE_COMPARISONS.has(`${slug1}-vs-${slug2}`);

export const getEmojiRobots = (emoji: Emoji): string =>
  shouldIndexEmoji(emoji) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiSlugRobots = (slug: string | undefined | null): string =>
  shouldIndexEmojiSlug(slug) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiContextRobots = (emojiSlug: string, context?: string): string =>
  shouldIndexEmojiContext(emojiSlug, context) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;

export const getEmojiComparisonRobots = (slug1: string, slug2: string): string =>
  shouldIndexEmojiComparison(slug1, slug2) ? INDEX_FOLLOW_ROBOTS : NOINDEX_FOLLOW_ROBOTS;
