export type EmojiKitchenCombo = {
  id: string;
  label: string;
  unicode: string;
  description: string;
  baseEmojiSlugs: string[];
};

export const emojiKitchenGuide = {
  title: "Emoji Kitchen — Combine Emojis on Gboard (2026 Guide)",
  description:
    "Learn what Emoji Kitchen is, how to use it on Gboard Android, and copy popular emoji mashup combos. Google's sticker tool for creative emoji combinations.",
  keywords:
    "emoji kitchen, emoji kitchen gboard, google emoji kitchen, emoji combinations, emoji mashup, combine emojis",
  sections: [
    {
      heading: "What is Emoji Kitchen?",
      body:
        "Emoji Kitchen is a Google feature built into Gboard (Google Keyboard) on Android. When you select an emoji, Gboard suggests mashups—two concepts blended into one sticker-style image. It launched as a playful way to combine emojis without typing multiple characters.",
    },
    {
      heading: "How to use Emoji Kitchen on Gboard",
      body:
        "1. Open any app with text input (Messages, WhatsApp, Instagram).\n2. Switch to Gboard.\n3. Tap the emoji key and select a base emoji.\n4. Swipe or tap the sticker suggestions above the keyboard.\n5. Send the mashup as an image sticker (not always plain Unicode text).",
    },
    {
      heading: "Emoji Kitchen vs Unicode combos",
      body:
        "Emoji Kitchen creates image stickers. Unicode ZWJ sequences (like 👨‍👩‍👧) are real text characters that work across apps. Use our Emoji Combos section for copy-paste ZWJ strings; use Emoji Kitchen for visual mashups on Gboard.",
    },
    {
      heading: "Is Emoji Kitchen on iPhone?",
      body:
        "Emoji Kitchen is primarily an Android/Gboard feature. iPhone users can copy Unicode combos from Allemojipedia or use Memoji/Genmoji for custom images—but not Google's Kitchen mashups natively.",
    },
  ],
  faqs: [
    {
      question: "How do I open Emoji Kitchen?",
      answer: "On Android, install Gboard, open a keyboard, pick an emoji, and browse mashup stickers that appear above the keys.",
    },
    {
      question: "Can I copy Emoji Kitchen mashups as text?",
      answer: "Kitchen outputs are often images, not Unicode. For text combos, use our pre-made ZWJ combos in the Emoji Combos hub.",
    },
    {
      question: "What are the best Emoji Kitchen combos?",
      answer: "Popular bases include 😂, ❤️, 🔥, 💀, and 🥺—each spawns dozens of mashups. Browse our popular combos below for copy-ready alternatives.",
    },
  ],
};

export const emojiKitchenCombos: EmojiKitchenCombo[] = [
  {
    id: "laughing-skull",
    label: "Laughing + Skull vibe",
    unicode: "💀😂",
    description: "Gen Z 'I'm dead' laughing—pair skull with tears of joy for extreme humor.",
    baseEmojiSlugs: ["skull", "face-with-tears-of-joy"],
  },
  {
    id: "heart-fire",
    label: "Heart on fire",
    unicode: "❤️‍🔥",
    description: "Passionate love or intense hype—the heart on fire sequence.",
    baseEmojiSlugs: ["red-heart", "heart-on-fire"],
  },
  {
    id: "pleading-hearts",
    label: "Pleading + hearts",
    unicode: "🥺❤️",
    description: "Cute ask with warmth—soft request or flirty softness.",
    baseEmojiSlugs: ["pleading-face", "red-heart"],
  },
  {
    id: "eyes-fire",
    label: "Eyes + fire",
    unicode: "👀🔥",
    description: "Noticing something impressive—side eye meets hype.",
    baseEmojiSlugs: ["eyes", "fire"],
  },
  {
    id: "melting-laugh",
    label: "Melting + laugh",
    unicode: "🫠😂",
    description: "Awkward or overheated laughter—cringe meets funny.",
    baseEmojiSlugs: ["melting-face", "face-with-tears-of-joy"],
  },
  {
    id: "sparkle-heart",
    label: "Sparkle heart",
    unicode: "❤️✨",
    description: "Aesthetic love or celebration—common in captions.",
    baseEmojiSlugs: ["red-heart", "sparkles"],
  },
  {
    id: "100-fire",
    label: "100 + fire",
    unicode: "💯🔥",
    description: "Maximum approval—real talk plus hype.",
    baseEmojiSlugs: ["hundred-points", "fire"],
  },
  {
    id: "clown-skull",
    label: "Clown + skull",
    unicode: "🤡💀",
    description: "Self-roast after a fail—clown moment ended me.",
    baseEmojiSlugs: ["clown-face", "skull"],
  },
  {
    id: "kiss-heart-eyes",
    label: "Heart eyes + kiss",
    unicode: "😍😘",
    description: "Admiration plus affection—flirty combo chain.",
    baseEmojiSlugs: ["smiling-face-with-heart-eyes", "face-blowing-a-kiss"],
  },
  {
    id: "pray-heart",
    label: "Folded hands + heart",
    unicode: "🙏❤️",
    description: "Grateful thanks with warmth—supportive tone.",
    baseEmojiSlugs: ["folded-hands", "red-heart"],
  },
  {
    id: "party-100",
    label: "Party + 100",
    unicode: "🎉💯",
    description: "Celebration with full approval—birthday or win posts.",
    baseEmojiSlugs: ["party-popper", "hundred-points"],
  },
  {
    id: "sad-melt",
    label: "Crying + melting",
    unicode: "😭🫠",
    description: "Overwhelmed feelings—funny or stressed depending on context.",
    baseEmojiSlugs: ["loudly-crying-face", "melting-face"],
  },
];
