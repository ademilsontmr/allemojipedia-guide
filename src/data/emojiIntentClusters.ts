export type EmojiIntentCluster = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string;
  emojiSlugs: string[];
  blogSlugs: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const emojiIntentClusters: EmojiIntentCluster[] = [
  {
    slug: "heart-emoji-meanings",
    title: "Heart Emoji Meanings: Colors, Feelings, and When to Use Each Heart",
    shortTitle: "Heart Emoji Meanings",
    description:
      "Learn what each heart emoji means, from red heart and pink heart to purple, blue, black, white, and broken heart emojis.",
    keywords:
      "heart emoji meanings, red heart meaning, pink heart emoji, purple heart meaning, blue heart emoji, black heart emoji, broken heart emoji",
    emojiSlugs: [
      "red-heart",
      "pink-heart",
      "orange-heart",
      "yellow-heart",
      "green-heart",
      "blue-heart",
      "purple-heart",
      "black-heart",
      "white-heart",
      "brown-heart",
      "sparkling-heart",
      "two-hearts",
      "heart-hands",
      "heart-on-fire",
      "broken-heart",
      "mending-heart",
    ],
    blogSlugs: ["heart-emoji-meanings-guide"],
    sections: [
      {
        heading: "What heart emoji colors usually mean",
        body:
          "Heart colors often change the tone of a message. Red is direct love, pink is softer affection, purple can feel supportive or stylish, blue is calm loyalty, and black can be ironic, edgy, or grief-related depending on context.",
      },
      {
        heading: "How to avoid sending the wrong heart",
        body:
          "Choose the heart that matches the relationship and situation. A red heart can feel romantic, while a yellow or blue heart is often safer for friends, teams, and casual encouragement.",
      },
    ],
  },
  {
    slug: "gen-z-emoji-meanings",
    title: "Gen Z Emoji Meanings: Slang, Irony, and Texting Tone",
    shortTitle: "Gen Z Emoji Meanings",
    description:
      "Decode Gen Z emoji meanings, including skull, crying face, pleading face, clown face, fire, and other emojis used with slang or irony.",
    keywords:
      "Gen Z emoji meanings, emoji slang, skull emoji meaning, crying emoji meaning, clown emoji meaning, texting slang emojis",
    emojiSlugs: [
      "skull",
      "face-with-tears-of-joy",
      "loudly-crying-face",
      "pleading-face",
      "melting-face",
      "clown-face",
      "fire",
      "hundred-points",
      "eyes",
      "see-no-evil-monkey",
      "thumbs-up",
      "folded-hands",
    ],
    blogSlugs: ["gen-z-emoji-meanings-decoded", "college-student-emojis-decoded"],
    sections: [
      {
        heading: "Why Gen Z emoji meanings can feel reversed",
        body:
          "Many Gen Z emoji meanings rely on irony. A skull can mean something is hilarious, a crying face can mean affection or overwhelm, and a thumbs up can feel passive-aggressive in the wrong context.",
      },
      {
        heading: "Read the surrounding text first",
        body:
          "The same emoji can be sincere, sarcastic, flirty, or dismissive depending on the message around it. Tone, relationship, and platform matter more than the emoji alone.",
      },
    ],
  },
  {
    slug: "emoji-meaning-in-texting",
    title: "Emoji Meaning in Texting: How to Read Tone in Messages",
    shortTitle: "Emoji Meaning in Texting",
    description:
      "Understand what emojis mean in texting, dating, group chats, apologies, jokes, and everyday phone conversations.",
    keywords:
      "emoji meaning in texting, texting emoji guide, emoji tone, what does emoji mean in text, flirting emojis, passive aggressive emojis",
    emojiSlugs: [
      "smiling-face-with-heart-eyes",
      "winking-face",
      "smirking-face",
      "face-blowing-a-kiss",
      "kissing-face",
      "flushed-face",
      "thinking-face",
      "neutral-face",
      "slightly-smiling-face",
      "grimacing-face",
      "face-with-rolling-eyes",
      "unamused-face",
      "zipper-mouth-face",
    ],
    blogSlugs: ["emoji-meaning-texting-guide", "how-to-use-emojis-when-flirting", "how-to-use-emojis-in-apologies"],
    sections: [
      {
        heading: "Texting emojis add tone that words leave out",
        body:
          "In texts, emojis can soften a short reply, signal a joke, show affection, or make a message feel colder than intended. The safest interpretation comes from the full conversation.",
      },
      {
        heading: "Flirty, friendly, or passive-aggressive",
        body:
          "A wink or kiss can feel flirty, a slight smile can feel restrained, and an eye-roll is usually negative. When the relationship is unclear, choose simpler emojis with less emotional risk.",
      },
    ],
  },
  {
    slug: "flag-emojis",
    title: "Flag Emojis: Country Flags, Identity, Sports, and Travel",
    shortTitle: "Flag Emojis",
    description:
      "Browse the most useful flag emojis and learn how country flags are used for travel, sports, identity, language, and international events.",
    keywords:
      "flag emojis, country flag emojis, flag emoji meanings, world cup emojis, travel emojis, national flag emoji",
    emojiSlugs: [
      "flag-united-states",
      "flag-brazil",
      "flag-portugal",
      "flag-spain",
      "flag-mexico",
      "flag-canada",
      "flag-united-kingdom",
      "flag-france",
      "flag-germany",
      "flag-italy",
      "flag-argentina",
      "flag-japan",
      "flag-south-korea",
      "flag-china",
      "flag-india",
    ],
    blogSlugs: [
      "flag-emojis-complete-guide",
      "world-cup-2026-emojis-guide",
      "world-cup-2026-predictions-country-emojis",
    ],
    sections: [
      {
        heading: "When people use flag emojis",
        body:
          "Flag emojis usually signal country, language, travel, sports support, heritage, or international events. They can also be used in bios, captions, and event reactions.",
      },
      {
        heading: "Why flag meanings depend on context",
        body:
          "Most flag emojis do not have slang meanings by themselves. The meaning comes from the country, event, identity, or conversation around the flag.",
      },
    ],
  },
  {
    slug: "work-emojis",
    title: "Work Emojis: Professional Emoji Meanings for Slack, Teams, and Email",
    shortTitle: "Work Emojis",
    description:
      "Learn which emojis work best in professional messages, Slack, Teams, email, customer support, and workplace communication.",
    keywords:
      "work emojis, professional emoji meanings, emojis at work, Slack emojis, Teams emojis, business emoji guide",
    emojiSlugs: [
      "thumbs-up",
      "folded-hands",
      "handshake",
      "check-mark",
      "hundred-points",
      "fire",
      "eyes",
      "thinking-face",
      "person-shrugging",
      "briefcase",
      "laptop",
      "memo",
      "e-mail",
    ],
    blogSlugs: [
      "emoji-meaning-at-work-professional-guide",
      "how-to-use-emojis-at-work",
      "how-to-use-emojis-in-emails",
      "how-to-use-emojis-customer-support",
      "emoji-business-communication-guide",
    ],
    sections: [
      {
        heading: "Safe emojis for workplace communication",
        body:
          "Simple confirmation and appreciation emojis are usually safest at work. Thumbs up, folded hands, handshake, check mark, and memo can clarify tone without making a message feel too casual.",
      },
      {
        heading: "When to avoid emojis at work",
        body:
          "Avoid emojis in sensitive feedback, legal topics, formal client communication, layoffs, escalations, and messages where tone could be misunderstood.",
      },
    ],
  },
];

export const getEmojiIntentClusterBySlug = (slug: string): EmojiIntentCluster | undefined =>
  emojiIntentClusters.find((cluster) => cluster.slug === slug);

export const getEmojiIntentClustersForEmoji = (emojiSlug: string): EmojiIntentCluster[] =>
  emojiIntentClusters.filter((cluster) => cluster.emojiSlugs.includes(emojiSlug));
