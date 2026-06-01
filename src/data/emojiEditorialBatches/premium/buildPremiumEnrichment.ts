import type { Emoji } from "@/data/emojis";
import { getEmojiBySlug } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "../types";
import {
  buildBatch,
  countryFromFlagSlug,
  humanize,
  humanizeSubgroup,
  isThinContentEmoji,
  parsePeopleSlug,
  pick,
  pickN,
  skinToneLabel,
} from "../generators/shared";
import { getBatchIdForCategory } from "../generators/shared";
import { getGestureKnowledge } from "./gestureKnowledge";
import {
  buildSemanticProfile,
  relatedSlugLabel,
  titleCaseContexts,
  type SemanticProfile,
} from "./semanticProfile";

const withUnicode = (emoji: Emoji, text: string) => text.replaceAll("{u}", emoji.unicode);

const injectExamples = (emoji: Emoji, templates: Array<{ context: string; text: string }>) =>
  templates.map((ex) => ({
    context: ex.context,
    text: ex.text.replaceAll("{u}", emoji.unicode).replaceAll("{name}", emoji.name.toLowerCase()),
  }));

const buildSearchIntents = (emoji: Emoji, profile: SemanticProfile, extra: string[] = []) => {
  const country = countryFromFlagSlug(emoji.slug);
  const base = [
    `${profile.subjectLower} emoji meaning`,
    `${emoji.unicode} meaning in texting`,
    `what does ${emoji.unicode} mean`,
    `${profile.subjectLower} emoji copy and paste`,
  ];
  if (country) {
    return [
      `${country} flag emoji meaning`,
      `${emoji.unicode} ${country} flag`,
      `${country} flag emoji copy`,
      ...base.slice(0, 2),
    ];
  }
  const kw = profile.keywords.slice(0, 3).map((k) => `${k} emoji meaning`);
  return [...new Set([...extra, ...base, ...kw])].slice(0, 6);
};

const relatedFaq = (emoji: Emoji, profile: SemanticProfile) => {
  const related = emoji.relatedEmojis[0];
  if (!related) return null;
  const rel = getEmojiBySlug(related);
  const relLabel = rel?.name ?? relatedSlugLabel(related);
  return {
    question: `When should I use ${emoji.unicode} instead of ${relLabel}?`,
    answer: `Pick ${emoji.unicode} when your message is specifically about ${profile.subjectLower}. Choose ${relLabel} when the visual metaphor or object fits that idea better — compare both pages if tone feels off.`,
  };
};

const buildFlagsPremium = (emoji: Emoji, profile: SemanticProfile, batchId: string): EmojiBatchEnrichment => {
  const country = countryFromFlagSlug(emoji.slug)!;
  const u = emoji.unicode;
  const kw = profile.keywords[0] ?? country;

  return buildBatch(emoji, batchId, {
    searchTitle: `${country} Flag Emoji (${u}): Meaning, Copy, Sports, and Travel Use`,
    snippetAnswer: `${u} is the official flag of ${country}. People add it when discussing travel to ${country}, cheering national teams, celebrating heritage, or marking location in family chats — always write "${country}" in text when clarity matters.`,
    detailedParagraphs: [
      `The ${emoji.name} (${u}) encodes ${country} using Unicode regional indicators. During World Cups, Olympics, and national holidays, ${u} floods live comment feeds because it communicates loyalty faster than typing the full country name.`,
      `Diaspora communities use ${u} in WhatsApp threads when sharing visa approvals, wedding streams from home, or recipes tied to ${country}. It signals belonging and pride — not just decoration.`,
      `Autocorrect and emoji search cause wrong-flag mistakes often. Before posting about sensitive news involving ${country}, verify you selected ${u}. Older Android phones may show letter codes instead of a colored flag — naming the country avoids confusion.`,
    ],
    textingMeaning: `In texting, ${u} usually anchors a message about ${country}: landing announcements, cheering a match, or telling friends where your family is from. Example: "Landing in ${country} tomorrow ${u}".`,
    socialMeaning: `Creators tag ${country}-themed food, music, and travel content with ${u} in captions and bios. Followers expect ${kw}-related themes when the flag leads the post.`,
    caution: `Do not use ${u} to mock ${country} during crises. Wrong flags misidentify nationality — double-check before posting.`,
    examples: injectExamples(emoji, [
      { context: "Sports", text: `Rooting for ${country} tonight {u}` },
      { context: "Travel", text: `Just landed in ${country} {u}` },
      { context: "Heritage", text: `Proud ${country} roots {u}` },
      { context: "Holiday", text: `Happy national day ${country} {u}` },
      { context: "Food", text: `Best meal in ${country} {u}` },
    ]),
    contextBlocks: [
      {
        title: `Sports and ${country}`,
        body: `${u} spikes during international tournaments when ${country} competes. Fans use it in live threads where speed beats long sentences.`,
      },
      {
        title: "Travel and relocation",
        body: `Travelers post ${u} with boarding passes and landmark photos so friends know the trip is in ${country}. Relocation updates often pair the flag with city names.`,
      },
      {
        title: "Cultural identity online",
        body: `Language learners and creators in the diaspora use ${u} when discussing heritage, holidays, and music from ${country}. It is a lightweight pride marker.`,
      },
    ],
    searchIntents: buildSearchIntents(emoji, profile, [`${country} flag in texting`, `${country} flag emoji copy paste`]),
    whenNotToUse: [
      `Avoid ${u} to ridicule ${country} during disasters or conflict.`,
      `Do not use ${u} alone in formal legal correspondence.`,
      `Verify the flag matches ${country} — wrong emoji misidentifies the country.`,
    ],
    faqs: [
      {
        question: `What country does ${u} represent?`,
        answer: `${u} is the flag emoji for ${country}. Use it when your message is about ${country}, its culture, sports teams, or travel.`,
      },
      {
        question: `Why does ${u} show as letters on some phones?`,
        answer: `Older systems render flags as regional indicator symbols. Type "${country}" in text when the graphic flag does not appear.`,
      },
      {
        question: `Is ${u} political?`,
        answer: `Flags can feel political in sensitive moments. In casual travel and sports chat, ${u} usually means a simple national reference.`,
      },
    ],
  });
};

const buildPeoplePremium = (emoji: Emoji, profile: SemanticProfile, batchId: string): EmojiBatchEnrichment => {
  const { base, skinTone } = parsePeopleSlug(emoji.slug);
  const toneLabel = skinToneLabel(skinTone);
  const tonePhrase = toneLabel ? ` with ${toneLabel}` : "";
  const displayName = toneLabel ? `${humanize(base)} (${toneLabel})` : emoji.name;
  const gesture = getGestureKnowledge(base, humanize(base), emoji.subgroup);
  const u = emoji.unicode;
  const examples =
    gesture.examples.length > 0
      ? injectExamples(emoji, gesture.examples)
      : injectExamples(emoji, [
          { context: "Chat", text: `{u}` },
          { context: "React", text: `This {u}` },
          { context: "Reply", text: `Exactly {u}` },
          { context: "Support", text: `Got you {u}` },
          { context: "Invite", text: `Your turn {u}` },
        ]);

  const toneParagraph = toneLabel
    ? `This variant uses ${toneLabel}. Unicode skin-tone modifiers let senders represent themselves or others respectfully when identity is part of the message — not just for decoration.`
    : `Default yellow-toned people emojis are a design fallback; many users pick a skin-tone variant that matches identity when the platform offers one.`;

  return buildBatch(emoji, batchId, {
    searchTitle: `${displayName} Emoji (${u}): Gesture Meaning and Texting Guide`,
    snippetAnswer: `${u} shows ${displayName.toLowerCase()}${tonePhrase} — used to ${gesture.verb}. In chats it replaces body language; on social it tags ${gesture.socialUse}.`,
    detailedParagraphs: [
      `${displayName} (${u}) belongs to Unicode's ${profile.subgroupLabel} set. Hand and people emojis function as digital body language — they compress gestures you would make on camera into one character.`,
      toneParagraph,
      `In practice, ${u} fits ${gesture.textingUse}. Cross-cultural note: some ${humanize(base).toLowerCase()} gestures read differently abroad — add words with international colleagues if meaning could shift.`,
    ],
    textingMeaning: `In texting, ${u} usually means someone wants to ${gesture.verb}. ${gesture.textingUse.charAt(0).toUpperCase()}${gesture.textingUse.slice(1)}. Example: "${examples[0]?.text ?? `${u} in context`}".`,
    socialMeaning: `On TikTok and Instagram, ${u} tags ${gesture.socialUse}. Live streams see ${u} when viewers mirror what the host does on screen.`,
    caution:
      gesture.caution ??
      (base === "middle-finger"
        ? `${u} is offensive — never use in harassment or professional contexts.`
        : `${u} may be rude in some cultures. ${gesture.workNote}`),
    examples: examples.slice(0, 5),
    contextBlocks: [
      {
        title: "Gesture replacement",
        body: `${u} stands in for ${gesture.verb} when video is off — faster than typing a full reaction.`,
      },
      {
        title: toneLabel ? "Inclusive representation" : "Skin-tone options",
        body: toneLabel
          ? `${toneLabel} variants help readers see themselves in ${humanize(base)} gestures when identity matters.`
          : `Search this site for ${humanize(base)} plus light, medium, or dark skin tone to find matching variants.`,
      },
      {
        title: "Workplace norms",
        body: gesture.workNote,
      },
    ],
    searchIntents: buildSearchIntents(emoji, profile, [
      toneLabel ? `${base.replace(/-/g, " ")} ${toneLabel} emoji` : `${base.replace(/-/g, " ")} emoji`,
    ]),
    whenNotToUse: [
      base === "middle-finger" ? `Never use ${u} in harassment or HR contexts.` : `${u} is too casual for legal contracts and formal apologies.`,
      `Do not use ${u} to mock disabilities or real sign languages.`,
    ],
    faqs: [
      {
        question: `What does ${u} mean in texting?`,
        answer: `It mimics ${displayName.toLowerCase()} — typically to ${gesture.verb}. The surrounding chat clarifies sincerity versus sarcasm.`,
      },
      toneLabel
        ? {
            question: `Why pick ${toneLabel} for ${humanize(base)}?`,
            answer: `Skin-tone modifiers represent diversity. Choose the tone that matches you or the person you reference when identity is part of the message.`,
          }
        : {
            question: `Are there skin tone versions of ${humanize(base)}?`,
            answer: `Yes — search "${humanize(base)}" with light, medium, or dark skin tone on this site to find variants.`,
          },
      {
        question: `Is ${u} OK at work?`,
        answer: gesture.workNote,
      },
    ],
  });
};

const categoryTitleHooks: Record<string, (emoji: Emoji, p: SemanticProfile) => string> = {
  "smileys-and-emotion": (emoji, p) => {
    const hint = p.emotionHint ?? titleCaseContexts(p.contexts, "texting and reactions");
    return `${p.subject} Emoji (${emoji.unicode}): ${hint.charAt(0).toUpperCase()}${hint.slice(1)} — Meaning Guide`;
  },
  "travel-and-places": (emoji, p) => {
    const domain = p.travelDomain ?? p.subgroupLabel.toLowerCase();
    return `${p.subject} Emoji (${emoji.unicode}): ${domain} — Maps, Trips, and Texting`;
  },
  activities: (emoji, p) =>
    `${p.subject} Emoji (${emoji.unicode}): Sports, Hobbies, and When to Use It`,
  objects: (emoji, p) =>
    `${p.subject} Emoji (${emoji.unicode}): Everyday Use, Shopping, and Work Chats`,
  symbols: (emoji, p) =>
    `${p.subject} Emoji (${emoji.unicode}): Signs, Shortcuts, and Digital Meaning`,
  "food-and-drink": (emoji, p) =>
    `${p.subject} Emoji (${emoji.unicode}): Food, Recipes, and Texting Context`,
  "animals-and-nature": (emoji, p) =>
    `${p.subject} Emoji (${emoji.unicode}): Nature, Pets, and Online Meaning`,
};

const buildCategoryPremium = (emoji: Emoji, profile: SemanticProfile, batchId: string): EmojiBatchEnrichment => {
  const u = emoji.unicode;
  const hook = categoryTitleHooks[emoji.categorySlug]?.(emoji, profile);
  const searchTitle =
    hook ?? `${profile.subject} Emoji (${u}): Meaning in Texting and Social Media`;

  const contextLine = titleCaseContexts(profile.contexts, profile.subgroupLabel.toLowerCase());
  const kwLine = profile.keywords.slice(0, 3).join(", ") || profile.subjectLower;

  const snippetAnswer = (() => {
    switch (emoji.categorySlug) {
      case "smileys-and-emotion":
        return `${u} ${profile.subject} conveys ${profile.emotionHint ?? profile.coreMeaning.toLowerCase()}. Common in greetings, replies, and reactions — tone depends on who sends it and what came before in the thread.`;
      case "travel-and-places":
        return `${u} ${profile.subject} helps talk about ${profile.travelDomain ?? profile.subgroupLabel.toLowerCase()}. Travelers and commuters use it in itinerary chats, delay updates, and location-tagged posts about ${kwLine}.`;
      case "activities":
        return `${u} ${profile.subject} tags ${profile.activityHint ?? contextLine.toLowerCase()}. Fans and hobbyists use it during live events, workout logs, and invites to play.`;
      case "objects":
        return `${u} ${profile.subject} references ${profile.objectHint ?? profile.subjectLower}. It appears in shopping lists, desk setups, reviews, and chats about ${kwLine}.`;
      case "symbols":
        return `${u} ${profile.subject} works like visual punctuation for ${contextLine.toLowerCase() || "emphasis and shorthand"}. Communities may read it literally or ironically — check your audience.`;
      case "food-and-drink":
        return `${u} ${profile.subject} marks food talk: cravings, recipes, restaurants, and grocery runs. It is usually literal unless the chat is already joking.`;
      case "animals-and-nature":
        return `${u} ${profile.subject} stands for ${kwLine || "animals and nature"} in casual chat — pets, wildlife, outdoor plans, or playful metaphors.`;
      default:
        return `${u} ${profile.subject}: ${profile.coreMeaning}`;
    }
  })();

  const detailedParagraphs = (() => {
    const p1 = `${profile.subject} (${u}) sits in the ${profile.subgroupLabel} Unicode subgroup. ${profile.coreMeaning.charAt(0).toUpperCase()}${profile.coreMeaning.slice(1)}.`;
    const p2 = pick(emoji.slug, [
      `On WhatsApp and iMessage, ${u} saves typing when the topic is already ${profile.subjectLower}. Group chats combine it with dates, names, and short updates so nobody misreads the subject.`,
      `Creators on TikTok and Instagram place ${u} early in captions about ${kwLine} so followers know the reel or photo theme before swiping.`,
      `In busy comment sections, ${u} works as a fast reaction when full sentences feel too formal — especially for ${contextLine.toLowerCase()}.`,
    ], 0);
    const p3 = pick(emoji.slug, [
      emoji.misunderstandings.find((m) => !m.toLowerCase().includes("context matters")) ??
        `${profile.subject} reads informal. Skip ${u} in legal, medical, or HR messages where neutral tone is expected.`,
      `Autocorrect and emoji search make look-alike symbols easy to pick by mistake. Confirm you chose ${profile.subject} (${u}) before sending.`,
      `If ${u} feels too strong or too weak, compare similar symbols in the related emoji section on this page.`,
    ], 1);
    return [p1, p2, p3];
  })();

  const textingMeaning = (() => {
    const ex = pickN(
      emoji.slug,
      [
        `In texting, ${u} clarifies ${profile.emotionHint ?? profile.coreMeaning.toLowerCase()}. Example: "${profile.subject} energy {u}".`,
        `${u} often mid-sentence when friends react to voice notes, memes, or screenshots about ${kwLine}.`,
        `Close groups use ${u} as a complete reply when everyone already knows the ${profile.subjectLower} context.`,
      ],
      1,
      2
    )[0];
    return withUnicode(emoji, ex);
  })();

  const socialMeaning = pick(emoji.slug, [
    `On Instagram and TikTok, ${u} tags posts about ${kwLine}. It works in captions, replies, and story stickers when the visual topic is ${profile.subjectLower}.`,
    `${u} helps viewers scan feeds for ${contextLine.toLowerCase()} content before reading the full caption.`,
    `Community threads on X and Reddit use ${u} as a lightweight reaction tied to ${profile.subjectLower}.`,
  ], 3);

  const caution = pick(emoji.slug, [
    `${u} can land differently across age groups — playful to friends may look unprofessional to coworkers.`,
    `When someone shares grief, medical news, or job loss, ${u} alone may feel dismissive unless you know their style.`,
    emoji.categorySlug === "smileys-and-emotion"
      ? `Face emojis shift tone fast — a small change in ${profile.subject} can read as sarcasm. Add words when stakes are high.`
      : `Double-check you picked ${profile.subject} (${u}) — similar symbols change meaning.`,
  ], 4);

  const examplePool = (() => {
    const good = emoji.examples.filter((ex) => !ex.text.includes("Just posted my new photo"));
    if (good.length >= 3) {
      return good.slice(0, 5).map((ex) => ({ context: ex.context, text: ex.text }));
    }

    if (emoji.categorySlug === "travel-and-places" && emoji.slug.includes("train")) {
      return [
        { context: "Commute", text: "Train delayed 20 min {u}" },
        { context: "Trip", text: "Rail pass booked {u}" },
        { context: "Platform", text: "Meet at track 3 {u}" },
        { context: "Scenic", text: "Best window seat {u}" },
        { context: "Arrival", text: "Just pulled in {u}" },
      ];
    }

    const pools: Record<string, Array<{ context: string; text: string }>> = {
      "smileys-and-emotion": [
        { context: "Reply", text: `That made my day {u}` },
        { context: "Support", text: `Sending love {u}` },
        { context: "React", text: `Exactly {u}` },
        { context: "Greeting", text: `Hey! {u}` },
        { context: "Celebrate", text: `So happy for you {u}` },
      ],
      "travel-and-places": [
        { context: "Trip", text: `Tickets booked {u}` },
        { context: "Commute", text: `On my way {u}` },
        { context: "Weather", text: `Pack for rain {u}` },
        { context: "Arrival", text: `Just arrived {u}` },
        { context: "Plan", text: `Meet at the station {u}` },
      ],
      activities: [
        { context: "Game day", text: `Let's go {u}` },
        { context: "Training", text: `Session done {u}` },
        { context: "Invite", text: `Join us {u}` },
        { context: "Highlight", text: `Best play tonight {u}` },
        { context: "Watch party", text: `Kickoff soon {u}` },
      ],
      objects: [
        { context: "Shopping", text: `Need a new {name} {u}` },
        { context: "Review", text: `10/10 {name} {u}` },
        { context: "Setup", text: `Desk upgrade {u}` },
        { context: "Gift", text: `Added to wishlist {u}` },
        { context: "Work", text: `Meeting prep {u}` },
      ],
      symbols: [
        { context: "Emphasis", text: `Important {u}` },
        { context: "Warning", text: `Heads up {u}` },
        { context: "Done", text: `All set {u}` },
        { context: "Question", text: `Not sure {u}` },
        { context: "React", text: `Noted {u}` },
      ],
      "food-and-drink": [
        { context: "Cooking", text: `Making {name} for dinner {u}` },
        { context: "Craving", text: `Need {name} now {u}` },
        { context: "Restaurant", text: `Best {name} in town {u}` },
        { context: "Grocery", text: `Added {name} to the list {u}` },
        { context: "Rating", text: `10/10 {name} {u}` },
      ],
      "animals-and-nature": [
        { context: "Pet", text: `Look at this {u}` },
        { context: "Outdoors", text: `Spotted on the hike {u}` },
        { context: "Cute", text: `Too cute {u}` },
        { context: "Metaphor", text: `Feeling like a {name} today {u}` },
        { context: "Photo", text: `Nature shot {u}` },
      ],
    };
    return pools[emoji.categorySlug] ?? pools.symbols;
  })();

  const examples = injectExamples(emoji, pickN(emoji.slug, examplePool, 5, 5));

  const contextBlocks = [
    {
      title: pick(emoji.slug, ["Everyday messaging", "Private chats", "Quick reactions"], 6),
      body: `${u} fits casual chats when the topic matches ${profile.subjectLower}. Example tone: "${examples[0]?.text ?? `${u} in context`}".`,
    },
    {
      title: pick(emoji.slug, ["Social posts", "Public comments", "Creator captions"], 7),
      body: `On public feeds, ${u} adds a visual hook about ${kwLine}. Followers recognize the topic before reading the full caption.`,
    },
    {
      title: "Professional settings",
      body:
        emoji.categorySlug === "smileys-and-emotion"
          ? `${u} is usually too casual for client email. Limit to informal internal threads if your workplace already uses emojis.`
          : `${profile.subject} emojis are informal by default. Use ${u} at work only when your team culture allows it.`,
    },
  ];

  const faqs = [
    {
      question: `What does ${u} mean in texting?`,
      answer: `${u} usually points to ${profile.coreMeaning.toLowerCase()}. In practice: "${examples[0]?.text ?? `${u} in context`}".`,
    },
    {
      question: `How do people use ${u} on social media?`,
      answer: `${u} shows up in captions and comments about ${kwLine}. It helps viewers understand the topic before reading the full text.`,
    },
    {
      question: `Is ${u} informal?`,
      answer: `${profile.subject} is generally informal — fine with friends and relaxed coworkers, not for formal reports or contracts.`,
    },
  ];
  const rel = relatedFaq(emoji, profile);
  if (rel) faqs.push(rel);

  return buildBatch(emoji, batchId, {
    searchTitle,
    snippetAnswer,
    detailedParagraphs,
    textingMeaning,
    socialMeaning,
    caution,
    examples,
    contextBlocks,
    searchIntents: buildSearchIntents(emoji, profile),
    whenNotToUse: [
      emoji.categorySlug === "smileys-and-emotion"
        ? `Avoid ${u} when someone shares grief or bad news unless you know they prefer emoji-heavy comfort.`
        : `${u} can feel out of place in legal, medical, or HR messages.`,
      pick(emoji.slug, [
        `Autocorrect may swap a similar symbol — verify ${profile.subject} (${u}) before sending.`,
        `Do not rely on ${u} alone when clarity affects money, health, or safety.`,
      ], 8),
    ],
    faqs: faqs.slice(0, 5),
  });
};

export const buildPremiumEnrichment = (emoji: Emoji): EmojiBatchEnrichment | undefined => {
  if (!isThinContentEmoji(emoji)) return undefined;

  const batchId = getBatchIdForCategory(emoji.categorySlug);
  if (!batchId) return undefined;

  const profile = buildSemanticProfile(emoji);

  if (emoji.categorySlug === "flags") {
    return buildFlagsPremium(emoji, profile, batchId);
  }
  if (emoji.categorySlug === "people-and-body") {
    return buildPeoplePremium(emoji, profile, batchId);
  }
  return buildCategoryPremium(emoji, profile, batchId);
};
