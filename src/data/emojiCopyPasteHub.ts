export type CopyPasteFeature = {
  unicode: string;
  label: string;
  href: string;
  blurb: string;
};

export const emojiCopyPasteHub = {
  path: "/emoji-copy-and-paste/",
  title: "Emoji Copy and Paste — Free Emoji Keyboard (2026)",
  description:
    "Copy and paste emojis instantly. Free emoji keyboard list for WhatsApp, Instagram, TikTok, and iMessage—tap any emoji to copy. No app install.",
  keywords:
    "emoji copy and paste, copy and paste emojis, emoji keyboard, emoji paste, free emoji copy, emoticon copy and paste",
  h1: "Emoji Copy and Paste — Free Emoji Keyboard",
  lead:
    "Need an emoji fast? Tap to copy, paste anywhere. Browse by platform, category, combo, or jump to a meaning guide when you care about tone—not just the glyph.",
  sections: [
    {
      heading: "How to copy and paste emojis",
      body:
        "1. Tap or click the emoji you want.\n2. It copies to your clipboard.\n3. Paste into WhatsApp, Instagram, TikTok, iMessage, email, or any text field.\n4. On desktop, use Ctrl+V (Windows) or Cmd+V (Mac).",
    },
    {
      heading: "Emoji keyboard without installing an app",
      body:
        "Allemojipedia works as a web emoji keyboard: no download, no signup. Use it when your phone keyboard hides rare symbols, or when you want the same emoji on desktop and mobile. For Apple-style lists see iPhone emojis; for Android see Google / Gboard.",
    },
    {
      heading: "Copy emojis by platform",
      body:
        "Looking for vendor look-and-feel? Use our Apple / iPhone, Google / Android, and Samsung hubs—each has one-click copy plus meanings. Unicode text is the same across platforms; only the artwork changes.",
    },
    {
      heading: "Copy emoji combos",
      body:
        "Couple, family, and Gen Z reaction stacks live in Emoji Combos and Emoji Kitchen. Copy the full sequence in one tap when a single emoji isn't enough.",
    },
  ],
  faqs: [
    {
      question: "How do I copy and paste emojis on iPhone?",
      answer:
        "Open Allemojipedia, tap an emoji to copy, then paste in Messages or any app. Or use our Copy iPhone Emojis hub for an Apple-focused list.",
    },
    {
      question: "How do I copy and paste emojis on Android?",
      answer:
        "Tap any emoji on this site, then paste in Gboard, WhatsApp, or Messages. Our Android emoji list mirrors Google-style symbols.",
    },
    {
      question: "Is this emoji keyboard free?",
      answer:
        "Yes. Copy and paste is free—no registration or paid app required.",
    },
    {
      question: "What's the difference between emoji and emoticon copy and paste?",
      answer:
        "Emojis are Unicode characters (😀). Emoticons are typed faces like :). This page focuses on emoji copy and paste; meanings help you pick the right tone.",
    },
  ],
};

/** Quick-start links for copy intent SERPs. */
export const copyPasteQuickLinks: CopyPasteFeature[] = [
  {
    unicode: "📱",
    label: "Copy iPhone Emojis",
    href: "/copy-iphone-emojis/",
    blurb: "One-click Apple emoji list for iMessage and social.",
  },
  {
    unicode: "🤖",
    label: "Copy Android Emojis",
    href: "/copy-android-emojis/",
    blurb: "Google / Gboard emoji copy for Android chats.",
  },
  {
    unicode: "✨",
    label: "Samsung Galaxy Emojis",
    href: "/copy-samsung-emojis/",
    blurb: "Galaxy One UI emoji copy list.",
  },
  {
    unicode: "👨‍👩‍👧",
    label: "Emoji Combos",
    href: "/emoji-combos/",
    blurb: "ZWJ sequences: couples, family, celebrations.",
  },
  {
    unicode: "🍳",
    label: "Emoji Kitchen",
    href: "/emoji-kitchen/",
    blurb: "Gboard mashups + copy-ready combo alternatives.",
  },
  {
    unicode: "🎵",
    label: "TikTok Emojis",
    href: "/tiktok-emojis/",
    blurb: "Viral reaction emojis with slang meanings.",
  },
];

/** Popular single emojis for instant copy + meaning. */
export const copyPastePopularEmojis: Array<{ slug: string; unicode: string; name: string }> = [
  { slug: "face-with-tears-of-joy", unicode: "😂", name: "Face With Tears of Joy" },
  { slug: "red-heart", unicode: "❤️", name: "Red Heart" },
  { slug: "skull", unicode: "💀", name: "Skull" },
  { slug: "loudly-crying-face", unicode: "😭", name: "Loudly Crying Face" },
  { slug: "fire", unicode: "🔥", name: "Fire" },
  { slug: "pleading-face", unicode: "🥺", name: "Pleading Face" },
  { slug: "thumbs-up", unicode: "👍", name: "Thumbs Up" },
  { slug: "folded-hands", unicode: "🙏", name: "Folded Hands" },
  { slug: "smiling-face-with-heart-eyes", unicode: "😍", name: "Heart Eyes" },
  { slug: "thinking-face", unicode: "🤔", name: "Thinking Face" },
  { slug: "sparkles", unicode: "✨", name: "Sparkles" },
  { slug: "hundred-points", unicode: "💯", name: "Hundred Points" },
  { slug: "eyes", unicode: "👀", name: "Eyes" },
  { slug: "party-popper", unicode: "🎉", name: "Party Popper" },
  { slug: "clown-face", unicode: "🤡", name: "Clown Face" },
  { slug: "melting-face", unicode: "🫠", name: "Melting Face" },
];
