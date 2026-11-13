import type { EmojiContextPage, EmojiContextType } from "./emojiContextPages";
import { emojiContextPages, getContextLabel } from "./emojiContextPages";
import { topSearchEmojiSlugs } from "./topSearchEmojiSlugs";
import { isPriorityEmojiSlug } from "../utils/seoPolicy";

export const emojiContextHubPath = "/emoji-meanings-in-texting/";

export const emojiContextHubMeta = {
  title: "Emoji Meanings in Texting — From a Girl, Guy, WhatsApp, Instagram & TikTok",
  shortTitle: "Emoji Meanings in Texting",
  description:
    "See how top-searched emoji meanings change in texting: from a girl, from a guy, on WhatsApp, Instagram, and TikTok—with real examples.",
  keywords:
    "emoji meanings in texting, what does emoji mean from a girl, emoji meaning from a guy, whatsapp emoji meanings, instagram emoji meanings, tiktok emoji meanings",
};

export const contextHubOrder: EmojiContextType[] = [
  "from-a-girl",
  "from-a-guy",
  "whatsapp",
  "instagram",
  "tiktok",
];

const contextHubDescriptions: Record<EmojiContextType, string> = {
  "from-a-girl":
    "How to read emoji tone when a girl sends it—flirty, friendly, supportive, or ironic—with signals and message examples.",
  "from-a-guy":
    "What emojis often mean from a guy in DMs and private chats—compliment, flirt, joke, or casual reaction.",
  whatsapp:
    "WhatsApp emoji tone in family groups, friend chats, and private messages—including reactions that can sound blunt.",
  instagram:
    "Instagram emoji use in comments, story replies, captions, and DMs—public hype vs private intent.",
  tiktok:
    "TikTok emoji slang in comments and captions—Gen Z irony, exaggerated reactions, and meme-native tone.",
};

export type ContextHubSection = {
  context: EmojiContextType;
  title: string;
  description: string;
  anchor: string;
  pages: EmojiContextPage[];
};

const sortBySearchPriority = (a: EmojiContextPage, b: EmojiContextPage) => {
  const rankA = topSearchEmojiSlugs.indexOf(a.emojiSlug);
  const rankB = topSearchEmojiSlugs.indexOf(b.emojiSlug);
  const safeA = rankA === -1 ? 999 : rankA;
  const safeB = rankB === -1 ? 999 : rankB;
  if (safeA !== safeB) return safeA - safeB;
  return a.emojiSlug.localeCompare(b.emojiSlug);
};

export const getContextHubSections = (): ContextHubSection[] =>
  contextHubOrder.map((context) => ({
    context,
    title: getContextLabel(context),
    description: contextHubDescriptions[context],
    anchor: context,
    pages: emojiContextPages.filter((page) => page.context === context).sort(sortBySearchPriority),
  }));

export const getContextHubPageCount = () => emojiContextPages.length;

/** Unique priority emoji slugs on the hub — crawlable links go here, not to noindex context URLs. */
export const getContextHubPrioritySlugs = (): string[] => {
  const seen = new Set<string>();
  const slugs: string[] = [];
  for (const page of emojiContextPages) {
    if (seen.has(page.emojiSlug) || !isPriorityEmojiSlug(page.emojiSlug)) continue;
    seen.add(page.emojiSlug);
    slugs.push(page.emojiSlug);
  }
  return slugs;
};
