import type { Emoji } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { getEmojiBatchEnrichment } from "@/data/emojiEditorialBatches";

export type EmojiEditorialContent = {
  slug: string;
  searchTitle: string;
  snippetAnswer: string;
  textingMeaning: string;
  socialMeaning: string;
  caution: string;
  searchIntents: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export type EmojiContextBlock = {
  title: string;
  body: string;
};

const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

const pick = <T>(slug: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${slug}:${salt}`)) % items.length];

const lowerFirst = (value: string) =>
  value ? value.charAt(0).toLowerCase() + value.slice(1) : value;

const stripTrailingPeriod = (value: string) => value.replace(/\.$/, "");

const isThinEmojiContent = (emoji: Emoji): boolean => {
  const thinMarkers = [
    "is used in digital communication to express",
    "is commonly used in texting, social media, and online communication",
    "Context matters - meaning can vary by platform and conversation",
    "Just posted my new photo",
    "Can't wait to see you",
    "That's amazing",
  ];

  return thinMarkers.some(
    (marker) =>
      emoji.detailedMeaning.includes(marker) ||
      emoji.shortMeaning.includes(marker) ||
      emoji.examples.some((example) => example.text.includes(marker))
  );
};

const countryFromFlagSlug = (slug: string): string | null => {
  if (!slug.startsWith("flag-")) return null;
  return slug
    .replace(/^flag-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const usagePhrase = (emoji: Emoji) => {
  const first = emoji.usageContexts[0]?.toLowerCase() ?? "express this feeling";
  return first.startsWith("to ") ? first : `to ${first}`;
};

export const getEnrichedDetailedParagraphs = (emoji: Emoji): string[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.detailedParagraphs?.length) {
    return batch.detailedParagraphs;
  }

  const existing = emoji.detailedMeaning
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!isThinEmojiContent(emoji) && existing.length >= 2) {
    return existing;
  }

  const category = getCategoryBySlug(emoji.categorySlug);
  const country = countryFromFlagSlug(emoji.slug);
  const label = emoji.name.toLowerCase();
  const keywordLine = emoji.keywords.slice(0, 4).join(", ");

  if (country) {
    return [
      `The ${emoji.name} emoji (${emoji.unicode}) represents ${country} in digital messages. People add it to show nationality, travel plans, sports support, cultural pride, or location-based jokes.`,
      `On WhatsApp and Instagram, ${emoji.unicode} often appears during international tournaments, holiday posts, or when someone mentions visiting ${country}. Pair it with place names, food, or event hashtags to make the context obvious.`,
      `Because flag emojis encode ISO country codes, ${emoji.unicode} should match the country you actually mean. Using the wrong flag by mistake is a common source of confusion in group chats.`,
    ];
  }

  switch (emoji.categorySlug) {
    case "food-and-drink":
      return [
        `${emoji.unicode} ${emoji.name} is a food and drink symbol people use when talking about meals, cravings, recipes, restaurants, or grocery plans. It turns a plain sentence into something visual and easy to scan.`,
        `In group chats, ${emoji.unicode} might mean you are eating ${label}, planning to cook it, or recommending a spot that serves it well. On Instagram and TikTok it often tags food photos, reviews, and "what I ate today" posts.`,
        `Tone stays casual. ${emoji.name} rarely carries hidden romantic meaning unless the conversation is already flirty and food is part of the date context.`,
      ];
    case "animals-and-nature":
      return [
        `${emoji.unicode} ${emoji.name} stands for ${keywordLine || "nature and animals"} in everyday texting. Users pick it when the topic is pets, wildlife, outdoor plans, or metaphorical comparisons ("busy like a...").`,
        `Animal emojis can feel playful, cute, or symbolic depending on the species. ${emoji.unicode} works in captions, reactions, and memes where the animal's reputation matches the joke.`,
        `If you are unsure how ${emoji.name} reads, anchor it with a noun in the same message — for example naming the pet, place, or habit you refer to.`,
      ];
    case "people-and-body":
      return [
        `${emoji.unicode} ${emoji.name} communicates a gesture or body signal. Gestures vary by culture, so the same emoji can mean approval, celebration, sarcasm, or emphasis depending on who sends it.`,
        `In texting, ${emoji.unicode} often replaces a short phrase — a wave hello, a thumbs-up agreement, or a dramatic reaction. On video-heavy platforms it mirrors body language people already use on camera.`,
        `Skin-tone and gender variants of people emojis should match how the sender identifies when possible, especially in messages about people directly.`,
      ];
    case "travel-and-places":
      return [
        `${emoji.unicode} ${emoji.name} helps describe places, transport, weather, or trips. Travel emojis compress context: a flight, a hotel, rain on vacation, or a landmark photo.`,
        `People use ${emoji.unicode} in itinerary messages, booking confirmations shared in chat, and holiday countdown posts. Combine it with dates and city names so nobody misreads the plan.`,
        `In professional travel updates, one ${emoji.name} emoji is usually enough — too many can make a work message feel informal.`,
      ];
    case "activities":
      return [
        `${emoji.unicode} ${emoji.name} tags hobbies, sports, games, and events. It signals "this message is about the activity itself," not just a generic mood.`,
        `Sports fans use ${emoji.unicode} during live matches, workout logs, and victory posts. In casual gaming chats it can mark achievements or invite friends to play.`,
        `When the activity has rules or safety concerns, keep wording clear — the emoji adds tone but does not replace details.`,
      ];
    case "symbols":
      return [
        `${emoji.unicode} ${emoji.name} functions like a visual punctuation mark. Symbols often carry shorthand meaning inside a community — approval, warning, luck, or irony.`,
        `Before using ${emoji.unicode} with a new audience, check whether your circle treats it literally or sarcastically. Symbol emojis change meaning fastest across age groups.`,
        `In design or math contexts, ${emoji.name} may be decorative. In texting it usually highlights emotion around the words nearby.`,
      ];
    case "flags":
      return [
        `${emoji.unicode} ${emoji.name} marks national or regional identity online. Flags appear in sports threads, travel updates, language-learning chats, and cultural celebrations.`,
        `Always match the flag to the country or region you reference. Autocorrect and search pickers make wrong-flag mistakes common.`,
        `Some platforms render flag emojis as two-letter codes on older devices — add the country name in text when clarity matters.`,
      ];
    default:
      return [
        `${emoji.unicode} ${emoji.name} adds a visual shortcut to messages about ${category?.name.toLowerCase() ?? "everyday topics"}. It helps readers grasp tone faster than text alone.`,
        `People commonly use ${emoji.unicode} ${usagePhrase(emoji)}. The surrounding sentence still decides whether the tone is sincere, joking, or exaggerated.`,
        existing[0] ??
          `${emoji.name} belongs to the ${emoji.subgroup.replace(/-/g, " ")} group in Unicode. Copy ${emoji.unicode} when it genuinely fits the story you tell — not every reply needs an emoji.`,
      ];
  }
};

export const getEnrichedExamples = (emoji: Emoji) => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.examples?.length) {
    return batch.examples;
  }

  if (!isThinEmojiContent(emoji) && emoji.examples.length >= 3) {
    return emoji.examples;
  }

  const country = countryFromFlagSlug(emoji.slug);
  const u = emoji.unicode;
  const name = emoji.name;

  if (country) {
    return [
      { context: "Sports support", text: `Rooting for ${country} tonight ${u}` },
      { context: "Travel", text: `Landing in ${country} tomorrow ${u}` },
      { context: "Culture", text: `Proud ${country} heritage ${u}` },
      { context: "Friends abroad", text: `Miss you from ${country} ${u}` },
      { context: "Event day", text: `Big day for ${country} ${u}` },
    ];
  }

  const pools: Record<string, Array<{ context: string; text: string }>> = {
    "food-and-drink": [
      { context: "Cooking", text: `Making ${name.toLowerCase()} for dinner ${u}` },
      { context: "Craving", text: `I need ${name.toLowerCase()} right now ${u}` },
      { context: "Restaurant", text: `Best ${name.toLowerCase()} in town ${u}` },
      { context: "Meal prep", text: `Added ${name.toLowerCase()} to the list ${u}` },
      { context: "Recipe share", text: `Try this ${name.toLowerCase()} recipe ${u}` },
      { context: "Rating", text: `10/10 ${name.toLowerCase()} ${u}` },
    ],
    "animals-and-nature": [
      { context: "Pet chat", text: `My pet would love this ${u}` },
      { context: "Outdoors", text: `Spotted one on the hike ${u}` },
      { context: "Cute reaction", text: `Look at this ${u}` },
      { context: "Metaphor", text: `Feeling like a ${name.toLowerCase()} today ${u}` },
      { context: "Nature photo", text: `Captured in the wild ${u}` },
    ],
    "people-and-body": [
      { context: "Greeting", text: `Hey! ${u}` },
      { context: "Agreement", text: `Exactly ${u}` },
      { context: "Thanks", text: `Appreciate you ${u}` },
      { context: "Celebration", text: `We did it ${u}` },
      { context: "Support", text: `You got this ${u}` },
    ],
    "travel-and-places": [
      { context: "Trip plan", text: `Tickets booked ${u}` },
      { context: "Weather", text: `Forecast looks rough ${u}` },
      { context: "Commute", text: `On my way ${u}` },
      { context: "Check-in", text: `Made it safely ${u}` },
    ],
    "activities": [
      { context: "Game day", text: `Let's go ${u}` },
      { context: "Training", text: `Session done ${u}` },
      { context: "Invite", text: `Join us ${u}` },
      { context: "Highlight", text: `Best play of the night ${u}` },
    ],
    default: [
      { context: "Texting", text: `${stripTrailingPeriod(emoji.shortMeaning)} ${u}` },
      { context: "Group chat", text: `Everyone agreed ${u}` },
      { context: "Caption", text: `Mood ${u}` },
      { context: "Reply", text: `That fits perfectly ${u}` },
      { context: "Reaction", text: `Exactly what I meant ${u}` },
    ],
  };

  const pool = pools[emoji.categorySlug] ?? pools.default;
  const start = Math.abs(hash(emoji.slug)) % pool.length;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  return rotated.slice(0, 5);
};

export const getUniqueContextBlocks = (emoji: Emoji): EmojiContextBlock[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.contextBlocks?.length) {
    return batch.contextBlocks;
  }

  const examples = getEnrichedExamples(emoji);
  const exampleHint = examples[0]?.text ?? `${emoji.unicode} in context`;
  const country = countryFromFlagSlug(emoji.slug);

  if (country) {
    return [
      {
        title: "Sports and national events",
        body: `${emoji.unicode} spikes during international matches, Olympics, and holiday celebrations tied to ${country}. Fans use it in live threads where speed matters more than long sentences.`,
      },
      {
        title: "Travel and relocation",
        body: `People add ${emoji.unicode} when sharing flights, visa news, or photos from ${country}. It helps friends scan a long chat for location updates.`,
      },
      {
        title: "Cultural identity online",
        body: `Creators use ${emoji.unicode} in bios, usernames, and posts about language, food, and music from ${country}. It is a lightweight pride marker, not a full political statement.`,
      },
    ];
  }

  const blocksByCategory: Record<string, EmojiContextBlock[]> = {
    "smileys-and-emotion": [
      {
        title: "Private chats",
        body: `Close friends use ${emoji.unicode} to soften teasing, show empathy, or react without writing a paragraph. Example tone: "${exampleHint}".`,
      },
      {
        title: "Public comments",
        body: `On TikTok, Instagram, and X, ${emoji.unicode} works as a fast reaction when you agree, laugh, or want to show support without quoting the whole post.`,
      },
      {
        title: "Work Slack or Teams",
        body: emoji.usageContexts.some((ctx) => ctx.toLowerCase().includes("professional"))
          ? `${emoji.name} can appear in internal team channels with people you know well. Avoid it in client-facing email.`
          : `${emoji.unicode} is usually too casual for client email. Limit it to informal internal threads if your workplace culture allows emojis.`,
      },
    ],
    "food-and-drink": [
      {
        title: "Meal planning texts",
        body: `${emoji.unicode} shows up in grocery lists, dinner votes, and "what should we order?" messages. It saves time when everyone knows the dish.`,
      },
      {
        title: "Food photography",
        body: `Creators pair ${emoji.unicode} with ratings, recipes, and restaurant tags. The emoji tells followers the post is about ${emoji.name.toLowerCase()} before they read the caption.`,
      },
      {
        title: "Diet and fitness chats",
        body: `In health groups, ${emoji.unicode} can log meals or cravings. Combine it with portions and timing if the goal is accountability, not just humor.`,
      },
    ],
    "people-and-body": [
      {
        title: "Gesture replacement",
        body: `${emoji.unicode} often stands in for a physical gesture — waving, clapping, pointing. Example: "${exampleHint}".`,
      },
      {
        title: "Video and live streams",
        body: `Viewers spam ${emoji.unicode} to mirror what a host does on camera. It builds participation without typing full sentences.`,
      },
      {
        title: "Cross-cultural chats",
        body: `Hand and body emojis do not translate perfectly across cultures. When messaging someone from another region, add words if the gesture could be ambiguous.`,
      },
    ],
    flags: [
      {
        title: "International audiences",
        body: `${emoji.unicode} helps global followers instantly see which country a story references. Always name the country in text for accessibility.`,
      },
      {
        title: "Language exchange",
        body: `Learners use flag emojis in usernames and intros to show target languages and home countries.`,
      },
      {
        title: "Live events",
        body: `During worldwide broadcasts, ${emoji.unicode} becomes a visual cheer in comment feeds where many languages mix.`,
      },
    ],
  };

  return (
    blocksByCategory[emoji.categorySlug] ?? [
      {
        title: "Everyday messaging",
        body: `${emoji.unicode} fits casual chats when the topic already matches ${emoji.name.toLowerCase()}. Example: "${exampleHint}".`,
      },
      {
        title: "Social posts",
        body: `On public feeds, ${emoji.unicode} adds a visual hook in captions and replies about ${emoji.keywords[0] ?? emoji.name.toLowerCase()}.`,
      },
      {
        title: "Professional settings",
        body: emoji.usageContexts.some((ctx) => ctx.toLowerCase().includes("work") || ctx.toLowerCase().includes("professional"))
          ? `Some teams accept ${emoji.unicode} in internal updates. Skip it in formal documents.`
          : `Treat ${emoji.unicode} as informal by default. Use it at work only if your team already uses emojis freely.`,
      },
    ]
  );
};

export const getUniqueSearchIntents = (emoji: Emoji): string[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.searchIntents?.length) {
    return batch.searchIntents;
  }

  const country = countryFromFlagSlug(emoji.slug);
  const base = [
    `${emoji.name.toLowerCase()} emoji meaning`,
    `${emoji.unicode} meaning in texting`,
    `what does ${emoji.unicode} mean`,
    `${emoji.name.toLowerCase()} emoji copy and paste`,
  ];

  if (country) {
    return [
      `${country} flag emoji meaning`,
      `${emoji.unicode} ${country} flag`,
      `${country} flag emoji copy`,
      `${country} flag in texting`,
      ...base.slice(0, 2),
    ];
  }

  const extras = emoji.keywords
    .filter((keyword) => !keyword.includes("unicode") && !keyword.includes("copy paste"))
    .slice(0, 3)
    .map((keyword) => `${keyword} emoji meaning`);

  return [...new Set([...base, ...extras])].slice(0, 6);
};

export const getUniqueWhenNotToUse = (emoji: Emoji): string[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.whenNotToUse?.length) {
    return batch.whenNotToUse;
  }

  const items = emoji.misunderstandings
    .filter((item) => !item.toLowerCase().includes("context matters"))
    .map((item) => item.replace(/\.$/, ""));

  const categoryNotes: Record<string, string> = {
    flags: `Do not use ${emoji.unicode} to mock a country or community during sensitive news events.`,
    "smileys-and-emotion": `Avoid ${emoji.unicode} when someone shares grief, medical results, or job loss — the tone may feel dismissive.`,
    "food-and-drink": `${emoji.unicode} can trivialise serious food insecurity topics. Read the room in charity or crisis threads.`,
    "people-and-body": `Gestures like ${emoji.unicode} may be rude in some cultures. Skip it with international clients unless you know the norm.`,
  };

  const note = categoryNotes[emoji.categorySlug];
  if (note) items.push(note);

  if (items.length === 0) {
    items.push(
      `${emoji.unicode} can feel out of place in legal, medical, or HR messages where neutral tone is expected.`
    );
  }

  return items.slice(0, 5);
};

export const buildUniqueFaqs = (emoji: Emoji) => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.faqs?.length) {
    return batch.faqs.slice(0, 5);
  }

  const country = countryFromFlagSlug(emoji.slug);
  const examples = getEnrichedExamples(emoji);

  const faqs = [
    {
      question: `What does ${emoji.unicode} mean in texting?`,
      answer: `${emoji.unicode} usually points to ${lowerFirst(stripTrailingPeriod(emoji.shortMeaning))}. In practice, people use it when ${usagePhrase(emoji)} — for example: "${examples[0]?.text ?? emoji.shortMeaning}".`,
    },
    {
      question: `How do people use ${emoji.unicode} on social media?`,
      answer: pick(emoji.slug, [
        `${emoji.unicode} shows up in captions, comments, and replies when the post is about ${emoji.keywords[0] ?? emoji.name.toLowerCase()}. It helps viewers understand the topic before they read the full text.`,
        `Creators use ${emoji.unicode} as a visual hook in short-form video titles and thumbnails tied to ${emoji.name.toLowerCase()}.`,
        `Fans drop ${emoji.unicode} in live comment sections to react quickly while an event is happening.`,
      ], 4),
    },
    {
      question: `Is ${emoji.unicode} informal?`,
      answer: emoji.categorySlug === "flags"
        ? `Flag emojis like ${emoji.unicode} are common in casual and semi-formal posts about travel, sports, and culture. They are still emojis — avoid them in strict legal or official correspondence.`
        : `${emoji.name} is generally informal. It works in chats with friends, family, and relaxed coworkers, not in formal reports or contracts.`,
    },
  ];

  if (country) {
    faqs.push({
      question: `What country does ${emoji.unicode} represent?`,
      answer: `${emoji.unicode} is the flag emoji for ${country}. Use it when you talk about ${country}, its culture, sports teams, or travel — not as a generic decorative symbol.`,
    });
  }

  if (emoji.relatedEmojis[0]) {
    faqs.push({
      question: `When should I pick ${emoji.unicode} over similar emojis?`,
      answer: `Choose ${emoji.unicode} when your message is about ${lowerFirst(emoji.usageContexts[0] ?? emoji.shortMeaning)}. If tone feels off, compare nearby symbols in the related emoji section on this page.`,
    });
  }

  return faqs.slice(0, 5);
};

export const buildUniqueEditorial = (emoji: Emoji): EmojiEditorialContent => {
  const batch = getEmojiBatchEnrichment(emoji);
  const paragraphs = getEnrichedDetailedParagraphs(emoji);
  const primaryKeyword = emoji.keywords.find(
    (k) => !["unicode", "copy paste", "emoji"].some((skip) => k.includes(skip))
  );

  const base: EmojiEditorialContent = {
    slug: emoji.slug,
    searchTitle: `${emoji.name} Emoji Meaning in Texting, Social Media, and Real Conversations`,
    snippetAnswer: paragraphs[0] ?? `${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning}`,
    textingMeaning: pick(emoji.slug, [
      `In one-on-one texting, ${emoji.unicode} clarifies tone when messages are short. It can soften a reply, underline excitement, or show you are joking — especially alongside "${getEnrichedExamples(emoji)[0]?.text ?? emoji.shortMeaning}".`,
      `${emoji.unicode} often appears mid-sentence in SMS and WhatsApp when users want emotion without writing more words. Pair it with clear wording so sarcasm does not misfire.`,
      `Friends use ${emoji.unicode} as a reaction to voice notes, memes, and screenshots. The emoji tells the sender how the message landed before the conversation moves on.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `On Instagram and TikTok, ${emoji.unicode} tags posts about ${primaryKeyword ?? emoji.name.toLowerCase()}. Creators use it in captions, comment sections, and story stickers.`,
      `${emoji.unicode} works as a lightweight reaction on public posts — faster than typing a full comment and visible in busy feeds.`,
      `In community threads on X or Reddit, ${emoji.unicode} signals agreement, humor, or shared reference to ${emoji.name.toLowerCase()} without quoting an entire post.`,
    ], 2),
    caution: pick(emoji.slug, [
      `${emoji.unicode} can land differently across age groups. What feels playful to friends may look unprofessional to coworkers or relatives.`,
      `If the topic is serious — money, health, conflict — ${emoji.unicode} alone may seem dismissive. Add explicit words when stakes are high.`,
      `Autocorrect and emoji search make it easy to pick a look-alike symbol. Double-check you chose ${emoji.name} (${emoji.unicode}) before sending.`,
    ], 3),
    searchIntents: getUniqueSearchIntents(emoji),
    faqs: buildUniqueFaqs(emoji),
  };

  if (!batch) return base;

  return {
    ...base,
    searchTitle: batch.searchTitle ?? base.searchTitle,
    snippetAnswer: batch.snippetAnswer ?? base.snippetAnswer,
    textingMeaning: batch.textingMeaning ?? base.textingMeaning,
    socialMeaning: batch.socialMeaning ?? base.socialMeaning,
    caution: batch.caution ?? base.caution,
    searchIntents: batch.searchIntents ?? base.searchIntents,
    faqs: batch.faqs ?? base.faqs,
  };
};

export const getEmojiEditorial = (emoji: Emoji): EmojiEditorialContent => buildUniqueEditorial(emoji);
