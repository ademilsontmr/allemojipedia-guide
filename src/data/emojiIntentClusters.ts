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
  {
    slug: "flirty-emoji-meanings",
    title: "Flirty Emoji Meanings: How to Read Romantic and Playful Texts",
    shortTitle: "Flirty Emoji Meanings",
    description:
      "Decode flirty emojis like wink, smirk, heart eyes, kiss face, pleading face, red heart, and eyes in dating or crush conversations.",
    keywords:
      "flirty emoji meanings, flirting emojis, emoji meaning from a crush, wink emoji meaning, smirk emoji meaning, heart eyes meaning",
    emojiSlugs: [
      "winking-face",
      "smirking-face",
      "face-blowing-a-kiss",
      "kissing-face",
      "smiling-face-with-heart-eyes",
      "flushed-face",
      "pleading-face",
      "red-heart",
      "kiss-mark",
      "eyes",
      "sparkling-heart",
    ],
    blogSlugs: ["how-to-use-emojis-when-flirting", "emoji-meaning-texting-guide"],
    sections: [
      {
        heading: "When an emoji is actually flirty",
        body:
          "An emoji becomes flirty when the message already has romantic, teasing, or affectionate context. A wink, smirk, kiss, or heart eyes can be playful from a crush, but may be harmless between close friends.",
      },
      {
        heading: "Look for repetition and timing",
        body:
          "One emoji does not prove attraction. Repeated use, quick replies, compliments, and matching energy are stronger signs that the emoji is being used flirtatiously.",
      },
    ],
  },
  {
    slug: "passive-aggressive-emojis",
    title: "Passive-Aggressive Emojis: Texting Tone, Hidden Meanings, and What to Avoid",
    shortTitle: "Passive-Aggressive Emojis",
    description:
      "Learn which emojis can feel passive-aggressive in texts and work chats, including thumbs up, slight smile, eye roll, neutral face, and upside-down face.",
    keywords:
      "passive aggressive emojis, thumbs up passive aggressive, slight smile meaning, eye roll emoji meaning, rude emojis in texting",
    emojiSlugs: [
      "thumbs-up",
      "slightly-smiling-face",
      "neutral-face",
      "face-with-rolling-eyes",
      "unamused-face",
      "upside-down-face",
      "grimacing-face",
      "clown-face",
      "skull",
      "zipper-mouth-face",
    ],
    blogSlugs: ["when-not-to-use-emojis-guide", "how-to-use-emojis-on-whatsapp-without-sounding-rude"],
    sections: [
      {
        heading: "Why some emojis feel passive-aggressive",
        body:
          "Short replies can feel cold when paired with certain emojis. A lone thumbs up, slight smile, or eye roll may look dismissive if the conversation is tense or professional.",
      },
      {
        heading: "How to make the tone clearer",
        body:
          "Add a few words before the emoji when the message matters. 'Sounds good, thanks' feels clearer than a standalone thumbs up in many work and group chat situations.",
      },
    ],
  },
  {
    slug: "emoji-meanings-from-a-girl",
    title: "Emoji Meanings From a Girl: How to Read Tone, Interest, and Context",
    shortTitle: "Emoji Meanings From a Girl",
    description:
      "Understand what emojis might mean when a girl sends them, including hearts, wink, smirk, pleading face, eyes, kiss, and laughing emojis.",
    keywords:
      "emoji meaning from a girl, what does emoji mean from a girl, heart emoji from a girl, wink emoji from a girl, skull emoji from a girl",
    emojiSlugs: [
      "red-heart",
      "pink-heart",
      "winking-face",
      "smirking-face",
      "face-blowing-a-kiss",
      "smiling-face-with-heart-eyes",
      "pleading-face",
      "flushed-face",
      "eyes",
      "face-with-tears-of-joy",
      "skull",
      "sparkles",
    ],
    blogSlugs: ["emoji-meaning-texting-guide", "hidden-emoji-meanings-secrets"],
    sections: [
      {
        heading: "Do not read one emoji in isolation",
        body:
          "An emoji from a girl can be friendly, flirty, ironic, or simply expressive. The strongest clues are the words around it, the relationship, and whether the same tone repeats over time.",
      },
      {
        heading: "Common signs of playful interest",
        body:
          "Hearts, winks, heart eyes, teasing faces, and quick replies can suggest interest when they appear with compliments, questions, or ongoing conversation.",
      },
    ],
  },
  {
    slug: "emoji-meanings-from-a-guy",
    title: "Emoji Meanings From a Guy: Flirty, Friendly, or Just Casual?",
    shortTitle: "Emoji Meanings From a Guy",
    description:
      "Decode emojis from a guy in texting, dating, friendships, and social media replies, including hearts, fire, eyes, skull, wink, and thumbs up.",
    keywords:
      "emoji meaning from a guy, what does emoji mean from a guy, heart emoji from a guy, fire emoji from a guy, wink emoji from a guy",
    emojiSlugs: [
      "red-heart",
      "fire",
      "eyes",
      "winking-face",
      "smirking-face",
      "face-blowing-a-kiss",
      "smiling-face-with-heart-eyes",
      "skull",
      "face-with-tears-of-joy",
      "thumbs-up",
      "hundred-points",
      "flexed-biceps",
    ],
    blogSlugs: ["emoji-meaning-texting-guide", "how-to-use-emojis-when-flirting"],
    sections: [
      {
        heading: "Friendly vs flirty depends on the message",
        body:
          "A guy sending a heart, fire, or eyes emoji may be flirting, complimenting, joking, or reacting casually. Look for direct compliments, teasing, and whether he keeps the conversation going.",
      },
      {
        heading: "Watch for effort, not just emojis",
        body:
          "Emojis are weak signals by themselves. Consistent questions, thoughtful replies, and clear plans matter more than a single symbol.",
      },
    ],
  },
  {
    slug: "whatsapp-emoji-meanings",
    title: "WhatsApp Emoji Meanings: Tone, Group Chats, Reactions, and What Not to Send",
    shortTitle: "WhatsApp Emoji Meanings",
    description:
      "Understand emoji meanings on WhatsApp, including reactions, family chats, group messages, flirting, apologies, and emojis that can sound rude.",
    keywords:
      "WhatsApp emoji meanings, emoji meaning on WhatsApp, WhatsApp reactions, rude WhatsApp emojis, texting emoji guide",
    emojiSlugs: [
      "face-with-tears-of-joy",
      "loudly-crying-face",
      "thumbs-up",
      "folded-hands",
      "red-heart",
      "winking-face",
      "thinking-face",
      "neutral-face",
      "upside-down-face",
      "face-with-rolling-eyes",
      "check-mark",
      "speech-balloon",
    ],
    blogSlugs: ["how-to-use-emojis-on-whatsapp-without-sounding-rude", "emoji-meaning-texting-guide"],
    sections: [
      {
        heading: "WhatsApp emojis are relationship-driven",
        body:
          "The same emoji can feel warm in a family chat, funny in a friend group, and too casual in a work group. WhatsApp tone depends heavily on who is in the conversation.",
      },
      {
        heading: "Use words with reactions when tone matters",
        body:
          "If the topic is sensitive, add a short sentence before the emoji. This avoids making a reaction look dismissive or sarcastic.",
      },
    ],
  },
  {
    slug: "instagram-emoji-meanings",
    title: "Instagram Emoji Meanings: Captions, Comments, DMs, and Reactions",
    shortTitle: "Instagram Emoji Meanings",
    description:
      "Learn how emojis work on Instagram in captions, comments, DMs, stories, compliments, aesthetics, and engagement.",
    keywords:
      "Instagram emoji meanings, emojis for Instagram captions, Instagram comments emojis, emoji meaning in DMs, aesthetic emojis",
    emojiSlugs: [
      "fire",
      "sparkles",
      "red-heart",
      "heart-hands",
      "smiling-face-with-heart-eyes",
      "eyes",
      "camera",
      "camera-with-flash",
      "clapping-hands",
      "party-popper",
      "hundred-points",
      "star-struck",
      "selfie",
    ],
    blogSlugs: ["how-to-use-emojis-instagram-captions", "emoji-social-media-engagement-guide"],
    sections: [
      {
        heading: "Instagram emojis often work as compliments",
        body:
          "Fire, heart eyes, red hearts, sparkles, and clapping hands often signal approval, attraction, style, or excitement in captions and comments.",
      },
      {
        heading: "Aesthetic emojis shape the caption mood",
        body:
          "Sparkles, cameras, hearts, stars, and music notes can make a caption feel softer, stylish, nostalgic, or celebratory before anyone reads the full text.",
      },
    ],
  },
  {
    slug: "tiktok-emoji-meanings",
    title: "TikTok Emoji Meanings: Comments, Slang, Reactions, and Viral Tone",
    shortTitle: "TikTok Emoji Meanings",
    description:
      "Decode TikTok emoji meanings in comments and captions, including skull, crying, clown, fire, eyes, sparkles, and viral reaction emojis.",
    keywords:
      "TikTok emoji meanings, TikTok emoji slang, skull emoji TikTok meaning, crying emoji TikTok, viral emoji meanings",
    emojiSlugs: [
      "skull",
      "loudly-crying-face",
      "face-with-tears-of-joy",
      "clown-face",
      "fire",
      "eyes",
      "sparkles",
      "hundred-points",
      "melting-face",
      "pleading-face",
      "see-no-evil-monkey",
      "musical-notes",
    ],
    blogSlugs: ["gen-z-emoji-meanings-decoded", "emoji-social-media-engagement-guide"],
    sections: [
      {
        heading: "TikTok emojis are often ironic",
        body:
          "TikTok comments use emojis for exaggeration, jokes, and shared slang. Skull, crying, clown, and melting face often signal humor or disbelief more than literal emotion.",
      },
      {
        heading: "Caption context changes everything",
        body:
          "A fire emoji can mean attractive, impressive, or viral. A skull can mean hilarious or embarrassing. Read the caption and comment thread before assuming one fixed meaning.",
      },
    ],
  },
];

export const getEmojiIntentClusterBySlug = (slug: string): EmojiIntentCluster | undefined =>
  emojiIntentClusters.find((cluster) => cluster.slug === slug);

export const getEmojiIntentClustersForEmoji = (emojiSlug: string): EmojiIntentCluster[] =>
  emojiIntentClusters.filter((cluster) => cluster.emojiSlugs.includes(emojiSlug));
