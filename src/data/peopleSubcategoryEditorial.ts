export type PeopleSubcategoryEditorial = {
  slug: string;
  lead: string;
  sections: Array<{ heading: string; body: string }>;
  popularEmojiSlugs: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
};

export const peopleSubcategoryEditorial: PeopleSubcategoryEditorial[] = [
  {
    slug: "gestures",
    lead:
      "Gesture emojis are the fastest way to add tone to a text—wave hello, say thanks with a thumbs up, or react without writing a full sentence. This guide covers the most-used hand and body-language emojis and when each one feels warm, neutral, or passive-aggressive.",
    sections: [
      {
        heading: "Hand gestures people use every day",
        body:
          "Waving, thumbs up, clapping, OK, peace, and raised hands are among the most copied gesture emojis. On WhatsApp they often replace short replies; on Instagram they work as quick comment reactions.",
      },
      {
        heading: "When gesture emojis change tone",
        body:
          "A standalone 👍 can feel efficient or cold depending on the relationship. 🙏 may mean thanks, please, or respect depending on culture. 👋 is usually friendly; ✋ can mean stop or high-five depending on context.",
      },
      {
        heading: "Skin tone and direction variants",
        body:
          "Many gesture emojis support skin tone modifiers and left/right facing versions. Pick the variant that matches how you want the message to feel—especially in group chats and public comments.",
      },
    ],
    popularEmojiSlugs: [
      "waving-hand",
      "thumbs-up",
      "folded-hands",
      "clapping-hands",
      "raising-hands",
      "ok-hand",
      "victory-hand",
      "raised-hand",
    ],
    faqs: [
      {
        question: "What does 👍 mean in texting?",
        answer:
          "Usually agreement or 'got it.' Alone after a long message it can feel blunt—add a few words if tone matters.",
      },
      {
        question: "Is 🙏 a high five or prayer?",
        answer:
          "Both, depending on region and chat. On WhatsApp it often means thanks or please; elsewhere it can signal prayer or respect.",
      },
    ],
    relatedLinks: [
      { href: "/emoji/thumbs-up/", label: "👍 Thumbs Up meaning" },
      { href: "/emoji/folded-hands/", label: "🙏 Folded Hands meaning" },
      { href: "/emoji/thumbs-up/whatsapp/", label: "👍 on WhatsApp" },
      { href: "/emoji-comparisons/", label: "Emoji comparisons" },
    ],
  },
  {
    slug: "emotions",
    lead:
      "People emotion emojis show feelings through faces and body language—hugs, shrugs, gestures of love, and expressive reactions. They help messages feel human when words alone sound too flat or too harsh.",
    sections: [
      {
        heading: "Expressing feelings without a smiley face",
        body:
          "Not every emotional emoji is a classic smiley. Hugging face, shushing face, facepalm, and person gesturing emotions add nuance for support, embarrassment, or playful frustration.",
      },
      {
        heading: "Support vs sarcasm",
        body:
          "The same emoji can comfort or tease. A hug 🤗 after good news feels warm; after a mistake it may feel patronizing. Read the words around the emoji before replying.",
      },
      {
        heading: "Using emotion emojis in sensitive chats",
        body:
          "In apologies, grief, or conflict, simpler emojis (😔 🙏 🤗) often work better than loud laugh or hype symbols. Match the emotional weight of the conversation.",
      },
    ],
    popularEmojiSlugs: [
      "hugging-face",
      "shushing-face",
      "person-facepalming",
      "person-shrugging",
      "people-hugging",
    ],
    faqs: [
      {
        question: "What emoji is best for saying sorry?",
        answer:
          "😔 or 🙏 often read as sincere. Avoid 😂 or 🔥 in serious apologies—they can sound dismissive.",
      },
      {
        question: "Can people emojis replace words?",
        answer:
          "Sometimes—for quick reactions. For anything nuanced, pair one emoji with a short line of text.",
      },
    ],
    relatedLinks: [
      { href: "/blog/how-to-use-emojis-in-apologies/", label: "Apology emoji guide" },
      { href: "/emoji-meanings/emoji-meaning-in-texting/", label: "Emoji meaning in texting" },
      { href: "/emoji-meanings/passive-aggressive-emojis/", label: "Passive-aggressive emojis" },
    ],
  },
  {
    slug: "professions",
    lead:
      "Profession emojis represent jobs and roles—health workers, teachers, tech workers, artists, and more. They are popular in bios, LinkedIn-style posts, work group chats, and event announcements.",
    sections: [
      {
        heading: "Workplace and identity use",
        body:
          "Profession emojis often label who someone is or what team they are on: 👨‍⚕️ for medical topics, 👩‍💻 for tech, 🧑‍🏫 for education. In Slack or Teams they can soften announcements without feeling unprofessional.",
      },
      {
        heading: "Gender and skin tone options",
        body:
          "Most profession emojis offer gender-inclusive and skin-tone variants. Choose the version that fits your message and audience—especially for public posts and inclusive communication.",
      },
      {
        heading: "When to skip profession emojis at work",
        body:
          "In formal email to new clients or escalations, plain language is safer. In internal channels with known tone, a single relevant profession emoji can humanize the message.",
      },
    ],
    popularEmojiSlugs: [
      "man-health-worker",
      "woman-health-worker",
      "man-teacher",
      "woman-teacher",
      "man-technologist",
      "woman-technologist",
    ],
    faqs: [
      {
        question: "Are profession emojis professional enough for email?",
        answer:
          "In internal or casual threads, often yes. For cold outreach or legal topics, skip emojis unless the client uses them first.",
      },
      {
        question: "Why do profession emojis have gender variants?",
        answer:
          "Unicode supports inclusive representation. Pick the variant that matches the person or use neutral forms when gender is unknown.",
      },
    ],
    relatedLinks: [
      { href: "/emoji-meanings/work-emojis/", label: "Work emoji meanings" },
      { href: "/blog/emoji-meaning-at-work-professional-guide/", label: "Emojis at work guide" },
      { href: "/blog/how-to-use-emojis-in-professional-communication/", label: "Professional communication" },
    ],
  },
  {
    slug: "family",
    lead:
      "Family emojis represent parents, children, couples, and multi-person groups. They are widely used in announcements, holiday messages, WhatsApp family groups, and social posts about relationships.",
    sections: [
      {
        heading: "Announcing family news",
        body:
          "Baby, pregnancy, and family-group emojis are common for births, gender reveals, and milestones. Pair them with clear text so the message is accessible to everyone in the chat.",
      },
      {
        heading: "Inclusive family structures",
        body:
          "Unicode includes many family combinations. Choose the group that best reflects the people you are talking about, or describe the family in words if no single emoji fits.",
      },
      {
        heading: "Family emojis in group chats",
        body:
          "In family WhatsApp groups, heart and hug emojis often accompany photos and voice notes. Tone is usually warm—avoid sarcastic smileys in sensitive threads.",
      },
    ],
    popularEmojiSlugs: [
      "family-man-woman-boy",
      "family-man-woman-girl",
      "family-woman-woman-girl",
      "baby",
      "people-hugging",
    ],
    faqs: [
      {
        question: "Which emoji is best for a baby announcement?",
        answer:
          "👶 and 🍼 are common; many also use family-group emojis. Add the baby's name or date in text for clarity.",
      },
      {
        question: "Do family emojis imply a specific family type?",
        answer:
          "Each combo shows a structure, but meaning comes from your message. Use words if you need precision beyond the emoji.",
      },
    ],
    relatedLinks: [
      { href: "/emoji-meanings/heart-emoji-meanings/", label: "Heart emoji meanings" },
      { href: "/category/people-and-body/", label: "All people & body emojis" },
      { href: "/people/", label: "People emoji hub" },
    ],
  },
];

export const getPeopleSubcategoryEditorial = (slug: string) =>
  peopleSubcategoryEditorial.find((entry) => entry.slug === slug);
