export type EmojiCombo = {
  slug: string;
  title: string;
  shortTitle: string;
  unicode: string;
  description: string;
  meaning: string;
  keywords: string;
  componentSlugs: string[];
  zwjNote: string;
  examples: string[];
  relatedComboSlugs: string[];
};

export const emojiCombos: EmojiCombo[] = [
  {
    slug: "heart-eyes-kiss-combo",
    title: "Heart Eyes + Kiss Emoji Combo — 😍😘 Copy & Meaning",
    shortTitle: "Heart Eyes Kiss Combo",
    unicode: "😍😘",
    description: "Copy the heart eyes and kiss emoji combo for flirty texts, compliments, and romantic DMs.",
    meaning:
      "😍😘 together usually signals strong attraction, admiration, and affection. Heart eyes show you love what you see; the kiss adds flirty or romantic intent. Common in dating chats and comment threads.",
    keywords: "heart eyes kiss combo, 😍😘 meaning, flirty emoji combo, kiss and heart eyes",
    componentSlugs: ["smiling-face-with-heart-eyes", "face-blowing-a-kiss"],
    zwjNote: "This combo chains two Unicode emojis—no ZWJ required. Paste both in order for the full effect.",
    examples: ["You look amazing 😍😘", "Obsessed with you 😍😘", "This photo tho 😍😘"],
    relatedComboSlugs: ["couple-emoji-combinations", "love-emoji-combo"],
  },
  {
    slug: "family-emoji-combo",
    title: "Family Emoji Combo — 👨‍👩‍👧 Copy ZWJ Sequence",
    shortTitle: "Family Combo",
    unicode: "👨‍👩‍👧",
    description: "Copy the family of three emoji ZWJ combo for announcements, posts, and group chats.",
    meaning:
      "👨‍👩‍👧 represents a family unit—man, woman, and girl joined by zero-width joiner (ZWJ) characters. Used for family posts, baby announcements, and inclusive messaging.",
    keywords: "family emoji combo, 👨‍👩‍👧 copy, family zwj emoji, family of three emoji",
    componentSlugs: ["man", "woman", "girl"],
    zwjNote: "ZWJ (U+200D) joins man + woman + girl into one family glyph on supported platforms.",
    examples: ["Family dinner tonight 👨‍👩‍👧", "So grateful for my crew 👨‍👩‍👧", "Weekend vibes 👨‍👩‍👧"],
    relatedComboSlugs: ["couple-emoji-combinations", "family-four-emoji-combo"],
  },
  {
    slug: "couple-emoji-combinations",
    title: "Couple Emoji Combinations — 👩‍❤️‍👨 Love ZWJ Copy",
    shortTitle: "Couple Combo",
    unicode: "👩‍❤️‍👨",
    description: "Copy couple with heart emoji combinations for romance, anniversaries, and relationship posts.",
    meaning:
      "👩‍❤️‍👨 is a ZWJ sequence: woman + red heart + man. It reads as a couple in love—stronger romance signal than ❤️ alone. Platform rendering may vary slightly.",
    keywords: "couple emoji combinations, 👩‍❤️‍👨 meaning, couple zwj emoji, relationship emoji combo",
    componentSlugs: ["woman", "red-heart", "man"],
    zwjNote: "Built with ZWJ between woman, heart, and man. Some apps show a single couple glyph; others show separate symbols.",
    examples: ["Date night 👩‍❤️‍👨", "Five years 👩‍❤️‍👨", "Love you both 👩‍❤️‍👨"],
    relatedComboSlugs: ["heart-eyes-kiss-combo", "love-emoji-combo"],
  },
  {
    slug: "love-emoji-combo",
    title: "Love Emoji Combo — ❤️‍🔥 Heart on Fire Copy",
    shortTitle: "Love on Fire",
    unicode: "❤️‍🔥",
    description: "Copy heart on fire emoji for passionate love, intense hype, and aesthetic captions.",
    meaning:
      "❤️‍🔥 combines red heart with fire for passionate love, desire, or intense enthusiasm. Popular in romance, fandom, and 'this is amazing' reactions.",
    keywords: "love emoji combo, heart on fire copy, ❤️‍🔥 meaning, passionate emoji",
    componentSlugs: ["red-heart", "heart-on-fire"],
    zwjNote: "Official Unicode sequence: red heart + ZWJ + fire. One copyable character on modern phones.",
    examples: ["So in love ❤️‍🔥", "This song ❤️‍🔥", "You and me ❤️‍🔥"],
    relatedComboSlugs: ["couple-emoji-combinations", "heart-eyes-kiss-combo"],
  },
  {
    slug: "family-four-emoji-combo",
    title: "Family of Four Combo — 👨‍👩‍👧‍👦 Copy",
    shortTitle: "Family of Four",
    unicode: "👨‍👩‍👧‍👦",
    description: "Copy family of four ZWJ emoji for parents with son and daughter.",
    meaning:
      "👨‍👩‍👧‍👦 shows a family of four—man, woman, girl, and boy linked by ZWJ. Used in parenting content, holiday cards, and family group names.",
    keywords: "family of four emoji, 👨‍👩‍👧‍👦 copy, family emoji zwj",
    componentSlugs: ["man", "woman", "girl", "boy"],
    zwjNote: "Long ZWJ chain joins four person emojis into one family glyph where supported.",
    examples: ["Our little team 👨‍👩‍👧‍👦", "Sunday funday 👨‍👩‍👧‍👦", "Blessed 👨‍👩‍👧‍👦"],
    relatedComboSlugs: ["family-emoji-combo"],
  },
  {
    slug: "birthday-emoji-combo",
    title: "Birthday Emoji Combo — 🎂🎉🥳 Copy & Paste",
    shortTitle: "Birthday Combo",
    unicode: "🎂🎉🥳",
    description: "Copy birthday emoji combo for wishes, posts, and party invitations.",
    meaning:
      "🎂🎉🥳 stacks cake, party popper, and party face for birthday hype. Common in wishes, Instagram stories, and group chat celebrations.",
    keywords: "birthday emoji combo, birthday emojis copy, 🎂🎉🥳",
    componentSlugs: ["birthday-cake", "party-popper", "partying-face"],
    zwjNote: "Three separate emojis—no ZWJ. Paste in sequence for the full birthday energy.",
    examples: ["Happy birthday! 🎂🎉🥳", "It's your day 🎂🎉🥳", "Let's celebrate 🎂🎉🥳"],
    relatedComboSlugs: ["party-celebration-combo"],
  },
  {
    slug: "party-celebration-combo",
    title: "Party Celebration Combo — 🥳🎊✨",
    shortTitle: "Party Combo",
    unicode: "🥳🎊✨",
    description: "Copy party celebration emoji combo for wins, launches, and hype posts.",
    meaning:
      "🥳🎊✨ combines party face, confetti ball, and sparkles for big wins and celebrations—not only birthdays.",
    keywords: "party emoji combo, celebration emojis, 🥳🎊✨ copy",
    componentSlugs: ["partying-face", "confetti-ball", "sparkles"],
    zwjNote: "Sequential emoji chain—works everywhere Unicode emojis are supported.",
    examples: ["We did it! 🥳🎊✨", "Launch day 🥳🎊✨", "Big news 🥳🎊✨"],
    relatedComboSlugs: ["birthday-emoji-combo"],
  },
  {
    slug: "thank-you-prayer-combo",
    title: "Thank You Prayer Combo — 🙏❤️✨",
    shortTitle: "Thanks Combo",
    unicode: "🙏❤️✨",
    description: "Copy thank-you emoji combo with folded hands, heart, and sparkles.",
    meaning:
      "🙏❤️✨ expresses grateful thanks with warmth and emphasis—common after favors, support, or good news.",
    keywords: "thank you emoji combo, 🙏❤️ meaning, grateful emoji combo",
    componentSlugs: ["folded-hands", "red-heart", "sparkles"],
    zwjNote: "Three-character chain. 🙏 meaning varies by culture (thanks vs prayer)—context clarifies.",
    examples: ["Thank you so much 🙏❤️✨", "Means the world 🙏❤️✨", "Grateful for you 🙏❤️✨"],
    relatedComboSlugs: ["love-emoji-combo"],
  },
];

export const getEmojiComboBySlug = (slug: string) => emojiCombos.find((c) => c.slug === slug);
