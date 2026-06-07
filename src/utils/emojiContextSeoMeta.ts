import type { Emoji } from "@/data/emojis";
import type { EmojiContextPage, EmojiContextType } from "@/data/emojiContextPages";
import type { EmojiSeoMeta } from "@/data/seoMeta";
import {
  getContextMeaningHint,
  getEmojiContextArchetype,
  type EmojiContextArchetype,
} from "@/utils/emojiContextPageContent";

const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

const pick = <T>(key: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${key}:${salt}`)) % items.length];

const pageKey = (slug: string, context: EmojiContextType) => `${slug}/${context}`;

const shortLabel = (name: string) =>
  name
    .replace(/\s+Emoji$/i, "")
    .replace(/^Smiling Face with /i, "")
    .replace(/^Face with /i, "Face ")
    .trim();

const contextPhrase: Record<EmojiContextType, string> = {
  "from-a-girl": "from a girl",
  "from-a-guy": "from a guy",
  whatsapp: "on WhatsApp",
  instagram: "on Instagram",
  tiktok: "on TikTok",
};

const slugDescriptionHints: Record<string, string> = {
  "purple-heart": "BTS, compassion, or creative support",
  "blue-heart": "trust, friendship, or calm affection",
  "green-heart": "nature, health, or jealousy",
  "black-heart": "dark humor, grief, or alternative style",
  "yellow-heart": "friendship, joy, or sunshine warmth",
  "orange-heart": "warm friendship or autumn energy",
  "pink-heart": "sweet affection or soft romance",
  "white-heart": "pure, platonic, or gentle love",
  "broken-heart": "heartbreak, disappointment, or dramatic emphasis",
  "heart-on-fire": "passion, obsession, or intense approval",
  "mending-heart": "healing, recovery, or moving on",
  skull: "usually \"I'm dead\" from laughing—not literal danger",
  "face-with-tears-of-joy": "laughing at jokes, memes, or silly moments",
  "rolling-on-the-floor-laughing": "hard laughter or extreme amusement",
  "loudly-crying-face": "laughing, overwhelmed, or playful drama—not always sad",
  "thinking-face": "curiosity, doubt, or skeptical thinking",
  "thumbs-up": "quick OK—or cold if sent alone after a long message",
  "folded-hands": "thanks, please, hope, or spiritual gratitude",
  "party-popper": "celebration, wins, and birthday hype",
  "hundred-points": "perfect score, strong approval, or hype",
  "star-struck": "amazement, celebrity crush, or glowing praise",
  "clown-face": "clown behavior, self-own, or playful roast",
  "see-no-evil-monkey": "playful denial or \"I didn't see that\"",
  "melting-face": "embarrassment, heat, awkwardness, or overwhelm",
};

const titleHooks: Record<EmojiContextType, Record<EmojiContextArchetype, string[]>> = {
  "from-a-girl": {
    heart: ["Love, Crush or Just Friendly?", "Romantic or Supportive?", "Warm or Flirty?"],
    laughter: ["Laughing With You or At You?", "Funny or Dismissive?"],
    crying: ["Sad, Funny or Drama?", "Laughing or Actually Upset?"],
    flirt: ["Flirty or Just Sweet?", "Crush Energy or Playful?"],
    gesture: ["Friendly or Dismissive?", "What She Really Means"],
    hype: ["Compliment or Just Hype?", "Flirty or Impressed?"],
    skeptic: ["Skeptical or Teasing?", "Serious Doubt or Joke?"],
    primate: ["Playful or Shady?", "Joke or Real Denial?"],
    clown: ["Teasing or Self-Deprecating?", "Roast or Inside Joke?"],
    face: ["Friendly or Flirty?", "What She Really Means"],
  },
  "from-a-guy": {
    heart: ["Flirty or Just Nice?", "Romantic or Supportive?"],
    laughter: ["Joking or Being Rude?", "Laughing With You?"],
    crying: ["Upset or Exaggerating?", "Laughing or Emotional?"],
    flirt: ["Flirting or Just Confident?", "Crush or Playful?"],
    gesture: ["Approving or Dismissive?", "What He Really Means"],
    hype: ["Compliment or Flirty?", "Hype or Attraction?"],
    skeptic: ["Doubting or Teasing?", "Sarcastic or Serious?"],
    primate: ["Joking Denial or Awkward?", "Meme or Real Reaction?"],
    clown: ["Roast or Banter?", "Joke or Harsh?"],
    face: ["Flirty or Casual?", "What He Really Means"],
  },
  whatsapp: {
    heart: ["Love, Thanks or Support?", "Family, Friends or Romance?"],
    laughter: ["Laughing or Dismissive?", "Jokes & Group Chat Tone"],
    crying: ["Laughing, Sympathy or Drama?", "Groups & Voice Notes"],
    flirt: ["Flirty or Friendly?", "Private Chat Tone"],
    gesture: ["OK or Passive-Aggressive?", "Quick Reply Tone"],
    hype: ["Hype or Compliment?", "Good News & Celebrations"],
    skeptic: ["Skeptical Reply?", "Side-Eye in Group Chats"],
    primate: ["Playful Denial?", "Family Group Banter"],
    clown: ["Roast or Joke?", "Group Chat Humor"],
    face: ["What It Means in Chats", "Groups & Private Messages"],
  },
  instagram: {
    heart: ["Comments, Stories & DMs", "Admiration or Romance?"],
    laughter: ["Reel Comments & DMs", "Meme Reaction Tone"],
    crying: ["Wholesome or Chaotic?", "Comment & Story Replies"],
    flirt: ["DM vs Public Comment", "Flirty or Friendly?"],
    gesture: ["Quick Comment Reactions", "Story Reply Tone"],
    hype: ["Comments & Story Reactions", "Compliment Language"],
    skeptic: ["Sarcastic Comments?", "Call-Out or Joke?"],
    primate: ["Gossip & Subtext", "Story Reply Energy"],
    clown: ["Meme Comments?", "Roast or Self-Own?"],
    face: ["Comments, Stories & DMs", "Public vs Private Tone"],
  },
  tiktok: {
    heart: ["Gen Z Comments & Captions", "Ship Culture & Hype"],
    laughter: ["Gen Z Slang", "Comment Section Reactions"],
    crying: ["Gen Z Comments", "Extreme Reaction Tone"],
    flirt: ["Thirst Trap Comments?", "Parasocial or Flirty?"],
    gesture: ["Tutorial & Challenge Replies", "Quick Agreement"],
    hype: ["Comment Hype Language", "Viral Moment Reactions"],
    skeptic: ["Skeptical Comments?", "Call-Out Culture"],
    primate: ["Meme Denial Energy", "\"I Saw That\" Comments"],
    clown: ["Cringe & Delusion Comments", "Clown Behavior Memes"],
    face: ["TikTok Comment Meaning", "Gen Z Reaction Tone"],
  },
};

const slugTitleHooks: Record<string, Partial<Record<EmojiContextType, string>>> = {
  "thumbs-up": {
    whatsapp: "OK or Passive-Aggressive?",
  },
  skull: {
    tiktok: "Skull Emoji Meaning (Gen Z Slang)",
    instagram: "Skull Emoji in Comments & DMs",
  },
  "melting-face": {
    tiktok: "Melting Face Meaning (2026)",
  },
  "smiling-face-with-heart-eyes": {
    "from-a-girl": "Heart Eyes — Crush or Just Hype?",
    instagram: "Heart Eyes Emoji Meaning",
  },
  "face-with-tears-of-joy": {
    tiktok: "Laugh Emoji vs 💀 in Gen Z Comments",
    whatsapp: "Laughing Emoji Meaning in Chats",
  },
  "purple-heart": {
    tiktok: "Purple Heart in K-Pop & Fandom Comments",
  },
};

const buildMetaTitle = (
  emoji: Emoji,
  context: EmojiContextType,
  archetype: EmojiContextArchetype
): string => {
  const u = emoji.unicode;
  const label = shortLabel(emoji.name);
  const key = pageKey(emoji.slug, context);
  const slugHook = slugTitleHooks[emoji.slug]?.[context];

  if (slugHook) {
    if (slugHook.includes("Meaning") || slugHook.includes("Comments")) {
      return context === "tiktok"
        ? `${u} on TikTok: ${slugHook}`
        : context === "instagram"
          ? `${u} on Instagram: ${slugHook}`
          : `${u} ${slugHook}`;
    }
    return context === "from-a-girl"
      ? `${u} From a Girl: ${label} — ${slugHook}`
      : context === "from-a-guy"
        ? `${u} From a Guy: ${slugHook}`
        : `${u} on ${contextLabel(context)}: ${label} — ${slugHook}`;
  }

  const hook = pick(key, titleHooks[context][archetype], 1);

  switch (context) {
    case "from-a-girl":
      return `${u} From a Girl: ${label} — ${hook}`;
    case "from-a-guy":
      return hook.includes(label) || hook.includes("Emoji")
        ? `${u} From a Guy: ${hook}`
        : `${u} From a Guy: ${label} — ${hook}`;
    case "whatsapp":
      return hook.includes("Chats") || hook.includes("Tone") || hook.includes("Messages")
        ? `${u} on WhatsApp: ${label} ${hook}`
        : `${u} on WhatsApp: ${label} — ${hook}`;
    case "instagram":
      return `${u} on Instagram: ${label} ${hook.startsWith("in ") || hook.startsWith("&") ? hook : `— ${hook}`}`;
    case "tiktok":
      return hook.includes("Gen Z") || hook.includes("Meaning")
        ? `${u} on TikTok: ${label} ${hook}`
        : `${u} on TikTok: ${label} — ${hook}`;
  }
};

const contextLabel = (context: EmojiContextType) => {
  switch (context) {
    case "whatsapp":
      return "WhatsApp";
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
    default:
      return context;
  }
};

const buildDescriptionOneLiner = (
  emoji: Emoji,
  archetype: EmojiContextArchetype
): string => {
  const slugHint = slugDescriptionHints[emoji.slug];
  if (slugHint) return slugHint;

  const meaning = getContextMeaningHint(emoji);

  const archetypeHints: Record<EmojiContextArchetype, string[]> = {
    heart: [
      `warmth, affection, or closeness—often ${meaning}`,
      `love, support, or fandom-coded warmth around ${meaning}`,
    ],
    laughter: [
      `laughing at something funny or absurd—${meaning}`,
      `humor and meme reactions, not literal ${meaning}`,
    ],
    crying: [
      `strong reaction—${meaning}—not always sadness`,
      `exaggerated emotion around ${meaning}`,
    ],
    flirt: [
      `playful, flirty, or soft tone—${meaning}`,
      `personal energy around ${meaning}`,
    ],
    gesture: [
      `a quick gesture for ${meaning}`,
      `${meaning} in fast replies`,
    ],
    hype: [
      `impressive, attractive, or high-energy—${meaning}`,
      `compliment and hype around ${meaning}`,
    ],
    skeptic: [
      `doubt, irony, or side-eye—${meaning}`,
      `skeptical tone around ${meaning}`,
    ],
    primate: [
      `playful denial or "I didn't see that"—${meaning}`,
      `mischievous humor around ${meaning}`,
    ],
    clown: [
      `clown behavior or self-own humor—${meaning}`,
      `playful roast energy around ${meaning}`,
    ],
    face: [
      `${meaning} in everyday texting`,
      `tone tied to ${meaning}`,
    ],
  };

  return pick(emoji.slug, archetypeHints[archetype], 2);
};

const descriptionSuffixByArchetype: Partial<
  Record<EmojiContextType, Partial<Record<EmojiContextArchetype, string[]>>>
> = {
  "from-a-girl": {
    flirt: [
      "Learn flirty vs friendly signals with real message examples.",
      "See signals, examples, and when not to overread it.",
    ],
    heart: [
      "See romantic vs friendly signals with real message examples.",
      "Learn when not to overread warmth—with examples.",
    ],
  },
  "from-a-guy": {
    flirt: [
      "See when it feels romantic vs casual—with real examples.",
      "Learn flirty vs friendly tone with message examples.",
    ],
    heart: [
      "See affection vs casual tone—with real examples.",
      "Learn when it feels romantic vs friendly.",
    ],
  },
};

const descriptionSuffix: Record<EmojiContextType, string[]> = {
  "from-a-girl": [
    "See signals, examples, and when not to overread it.",
    "Learn tone and intent with real message examples.",
  ],
  "from-a-guy": [
    "Learn intent, tone, and conversation patterns.",
    "See signals and real message examples.",
  ],
  whatsapp: [
    "Family, friends, and private chat examples.",
    "See group vs private tone with real chat examples.",
  ],
  instagram: [
    "Reels, stories, and comment examples.",
    "See public comment vs DM tone with examples.",
  ],
  tiktok: [
    "Gen Z comment and caption examples.",
    "See meme tone with real TikTok comment examples.",
  ],
};

const buildMetaDescription = (
  emoji: Emoji,
  context: EmojiContextType,
  archetype: EmojiContextArchetype
): string => {
  const u = emoji.unicode;
  const phrase = contextPhrase[context];
  const oneLiner = buildDescriptionOneLiner(emoji, archetype);
  const archetypeSuffix = descriptionSuffixByArchetype[context]?.[archetype];
  const suffix = pick(
    pageKey(emoji.slug, context),
    archetypeSuffix ?? descriptionSuffix[context],
    3
  );

  return `What does ${u} mean ${phrase}? ${oneLiner.charAt(0).toUpperCase() + oneLiner.slice(1)}. ${suffix}`;
};

export const buildContextSeoMeta = (emoji: Emoji, page: EmojiContextPage): EmojiSeoMeta => {
  const archetype = getEmojiContextArchetype(emoji);

  return {
    metaTitle: buildMetaTitle(emoji, page.context, archetype),
    metaDescription: buildMetaDescription(emoji, page.context, archetype),
  };
};
