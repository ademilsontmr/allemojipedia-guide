import type { EmojiContextPage, EmojiContextType } from "./emojiContextPages";
import { emojiContextPages, getContextLabel } from "./emojiContextPages";
import { topSearchEmojiSlugs } from "./topSearchEmojiSlugs";

export const emojiContextHubPath = "/emoji-meanings-in-texting/";

export const emojiContextHubMeta = {
  title: "Emoji Meanings in Texting — From a Girl, Guy, WhatsApp, Instagram & TikTok",
  shortTitle: "Emoji Meanings in Texting",
  description:
    "Browse 250 emoji meaning guides for texting and social media. See what emojis mean from a girl, from a guy, on WhatsApp, Instagram, and TikTok—with real examples.",
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
