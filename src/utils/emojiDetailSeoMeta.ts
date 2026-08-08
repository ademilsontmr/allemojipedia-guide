import type { Emoji } from "@/data/emojis";
import type { EmojiSeoMeta } from "@/data/seoMeta";
import type { EmojiEditorialContent } from "@/utils/emojiUniqueContent";
import {
  getContextMeaningHint,
  getEmojiContextArchetype,
  type EmojiContextArchetype,
} from "@/utils/emojiContextPageContent";

const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

const pick = <T>(key: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${key}:${salt}`)) % items.length];

export const isGenericEmojiSearchTitle = (searchTitle: string, emojiName: string) => {
  const generic = `${emojiName} Emoji Meaning in Texting, Social Media, and Real Conversations`;
  return searchTitle === generic || searchTitle.includes("Texting, Social Media, and Real Conversations");
};

const titleHooks: Record<EmojiContextArchetype, string[]> = {
  heart: [
    "Love, Texting & What It Signals",
    "Meaning in Texts & DMs",
    "What It Means When Someone Sends It",
  ],
  laughter: ["Meaning in Texting & Memes", "Gen Z Slang & WhatsApp", "What It Means in Comments"],
  crying: ["Sad, Funny or Drama?", "Meaning in Texting & TikTok", "What It Really Means"],
  flirt: ["Flirty, Sweet or Playful?", "Meaning in Texting & DMs", "Crush or Just Friendly?"],
  gesture: ["Meaning in Texting & Work Chats", "OK, Rude or Supportive?", "WhatsApp Tone Guide"],
  hype: ["Hot, Hype or Compliment?", "Meaning in Texting & Instagram", "When to Use It"],
  skeptic: ["Sarcasm, Doubt or Joke?", "Meaning in Texting", "What It Signals"],
  primate: ["Playful or Shady?", "Meaning in Texting & Memes", "What It Means Online"],
  clown: ["Self-Roast or Joke?", "Meaning in Texting & Memes", "When Someone Sends It"],
  face: ["Texting Tone & Real Examples", "What It Means in Chats", "When People Send It"],
};

const slugTitleHooks: Record<string, string> = {
  "grinning-face": "Happy, Friendly or Sarcastic?",
  "smiling-face": "Polite, Awkward or Passive-Aggressive?",
  "unamused-face": "Annoyed, Bored or Judging?",
  "face-with-rolling-eyes": "Eye Roll Meaning in Texting",
  "shushing-face": "Secret, Quiet or Flirty?",
  "see-no-evil-monkey": "Playful Denial & Meme Meaning",
  "party-popper": "Celebration, Wins & Birthday Hype",
  "raising-hands": "Praise, Hype or Surrender?",
  "zany-face": "Goofy, Crazy or Excited?",
  "hot-face": "Attractive, Hot or Embarrassed?",
  "kissing-face": "Flirty Kiss or Friendly?",
  "crying-face": "Sad, Disappointed or Soft?",
  "pensive-face": "Sad, Thoughtful or Quiet?",
  "grinning-face-with-sweat": "Nervous Laugh or Relief?",
  "smiling-face-with-hearts": "Love, Crush or Wholesome?",
  "smiling-face-with-tear": "Grateful, Bittersweet or Moved?",
  "face-holding-back-tears": "Touched, Sad or Overwhelmed?",
  "heart-on-fire": "Passion, Obsession or Hype?",
  "mending-heart": "Healing, Moving On or Hope?",
  "two-hearts": "Love, Couples & Best Friends",
  "pink-heart": "Sweet Love & Soft Affection",
  "green-heart": "Nature, Jealousy or Friendship?",
  "yellow-heart": "Friendship, Joy & Sunshine",
  "orange-heart": "Warm Friendship & Autumn Vibes",
  "star-struck": "Amazed, Celebrity Crush or Hype",
  "camera-photo": "Photography & Taking Pictures",
  "video-camera-device": "Video Recording & Film",
};

const descriptionLead = (emoji: Emoji, editorial: EmojiEditorialContent) => {
  const hint = getContextMeaningHint(emoji);
  const snippet = editorial.snippetAnswer.replace(/\s+/g, " ").trim();
  const shortSnippet = snippet.length > 90 ? `${snippet.slice(0, 87).trim()}…` : snippet;

  return pick(emoji.slug, [
    `What does ${emoji.unicode} mean? ${shortSnippet}`,
    `What does ${emoji.unicode} mean in texting? Usually ${hint}.`,
    `${emoji.unicode} meaning explained: ${shortSnippet}`,
  ]);
};

/** CTR-focused title + description for emoji detail pages without manual SEO overrides. */
export const buildEmojiDetailSeoMeta = (
  emoji: Emoji,
  editorial: EmojiEditorialContent
): EmojiSeoMeta => {
  const archetype = getEmojiContextArchetype(emoji);
  const hook =
    slugTitleHooks[emoji.slug] ??
    pick(`${emoji.slug}:title`, titleHooks[archetype], 1);

  const label = emoji.name.replace(/\s+Emoji$/i, "").trim();

  const metaTitle = emoji.categorySlug === "flags"
    ? `${emoji.unicode} ${label} Flag Emoji — Copy & Meaning`
    : `${emoji.unicode} ${label} Meaning: ${hook}`;

  const lead = descriptionLead(emoji, editorial);
  const metaDescription =
    emoji.categorySlug === "flags"
      ? `Copy ${emoji.unicode} ${label} flag emoji for WhatsApp, Instagram, sports, travel & messages. ${lead.replace(/^What does .*?\? /, "")}`
      : `${lead} Copy ${emoji.unicode} for WhatsApp, Instagram & TikTok.`;

  return { metaTitle, metaDescription };
};
