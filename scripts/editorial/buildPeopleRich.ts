import type { Emoji } from "../../src/data/emojis";
import { emojis } from "../../src/data/emojis";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";
import {
  buildEnhancedEnrichment,
  buildFromNativeBase,
  hasRichNative,
} from "./buildEnhancedEnrichment";
import { GESTURE_OVERRIDES, pointingOverride } from "./knowledge/peopleGestures";

const POINTING: Record<string, string> = {
  "backhand-index-pointing-down": "down",
  "backhand-index-pointing-left": "left",
  "backhand-index-pointing-right": "right",
  "backhand-index-pointing-up": "up",
  "index-pointing-up": "up",
};

const PROFESSION_HOOKS: Record<string, string> = {
  artist: "studio days, gallery openings, and creative block memes",
  astronaut: "space launches, NASA livestreams, and sci-fi watch parties",
  chef: "kitchen service, recipe drops, and restaurant review posts",
  cook: "home cooking, meal prep Sundays, and recipe TikTok",
  detective: "true crime podcasts, mystery games, and noir aesthetic",
  engineer: "hackathons, CAD jokes, and bridge-building puns",
  "factory-worker": "shift work, manufacturing pride, and overtime humor",
  farmer: "harvest season, farmers market runs, and rural life posts",
  firefighter: "hero appreciation, wildfire awareness, and station tours",
  "health-worker": "nurse life, hospital shifts, and healthcare hero posts",
  judge: "court drama, law school, and gavel memes",
  lawyer: "bar exam, contract jokes, and legal TikTok",
  mechanic: "car repair, garage life, and fix-it-yourself threads",
  nurse: "night shift, patient care wins, and nursing school",
  "office-worker": "corporate life, spreadsheet humor, and WFH desk setups",
  pilot: "aviation geekery, travel crew life, and flight deck photos",
  "police-officer": "community policing posts — avoid insensitive copaganda memes",
  scientist: "lab coat selfies, research papers, and science fair nostalgia",
  singer: "open mic, album drops, and karaoke night",
  student: "exam season, campus life, and all-nighter memes",
  teacher: "Teacher Appreciation Week, classroom wins, and grading marathons",
  technologist: "dev life, deploy day, and keyboard shortcut jokes",
  "construction-worker": "hard hat safety, build site updates, and trades pride",
  guard: "ceremonial guard tourism, security shift humor, and uniform cosplay",
};

const FAMILY_LABELS: Record<string, string> = {
  "family-man-man-boy": "two dads with a son",
  "family-man-man-girl": "two dads with a daughter",
  "family-man-woman-boy": "mother, father, and son",
  "family-man-woman-boy-boy": "mother, father, and two sons",
  "family-man-woman-girl": "mother, father, and daughter",
  "family-man-woman-girl-boy": "mother, father, son and daughter",
  "family-man-woman-girl-girl": "mother, father, and two daughters",
  "family-woman-woman-boy": "two moms with a son",
  "family-woman-woman-girl": "two moms with a daughter",
};

const PERSON_GESTURE: Record<string, { verb: string; social: string }> = {
  "person-bowing": { verb: "bow in respect or apology", social: "Japanese etiquette posts, apology threads, and thank-you bows" },
  "person-facepalming": { verb: "facepalm at absurdity", social: "fail compilations, cringe stories, and 'I can't' meme replies" },
  "person-gesturing-no": { verb: "signal no or stop", social: "boundary setting, veto votes, and hard pass memes" },
  "person-gesturing-ok": { verb: "OK maru circle gesture", social: "Japanese OK sign, scuba OK, and 'all good' posts" },
  "person-raising-hand": { verb: "volunteer or ask a question", social: "classroom memes, Zoom meetings, and 'pick me' humor" },
  "person-shrugging": { verb: "shrug 'idk'", social: "indifference memes, ¯\\_(ツ)_/¯ energy, and who knows posts" },
  "person-tipping-hand": { verb: "sassy hair-flip info desk", social: "sarcastic 'you're welcome' and info booth sass" },
};

const MISC_OVERRIDES: Record<string, Partial<EmojiBatchEnrichment>> = {
  baby: {
    snippetAnswer: "👶 Baby marks pregnancy announcements, newborn photos, baby shower invites, and 'baby fever' jokes.",
    detailedParagraphs: [
      "Baby (👶) tags newborn content — hospital announcements, gender reveals (use thoughtfully), and nursery prep.",
      "Expecting parents drop 👶 in group chats when sharing ultrasound news or due dates.",
      "Skin-tone variants let families represent their baby and identity inclusively.",
    ],
    examples: [
      { context: "Announce", text: "Due in June 👶" },
      { context: "Shower", text: "Baby shower 👶" },
      { context: "Visit", text: "Meeting niece 👶" },
      { context: "Wish", text: "Baby fever 👶" },
      { context: "Congrats", text: "Welcome little one 👶" },
    ],
  },
  kiss: {
    snippetAnswer: "💏 Kiss marks romance, affection, and make-out humor — couples, anniversaries, and flirty captions.",
    detailedParagraphs: [
      "Kiss (💏) shows two people kissing — default couple representation before gender/skin variants.",
      "Anniversary posts, Valentine's content, and ship culture tag 💏.",
      "Gendered and skin-tone ZWJ variants represent diverse couples — pick the match for who you reference.",
    ],
    examples: [
      { context: "Love", text: "Date night 💏" },
      { context: "Anniversary", text: "5 years 💏" },
      { context: "Flirt", text: "Missing you 💏" },
      { context: "Valentine", text: "Us 💏" },
      { context: "Pride", text: "Love wins 💏" },
    ],
  },
  "couple-with-heart": {
    snippetAnswer: "💑 Couple With Heart marks romantic partnership — relationship milestones, Pride, and 'taken' energy.",
    detailedParagraphs: [
      "Couple With Heart (💑) is classic in-love symbol — softer than 💏 for wholesome couple posts.",
      "Instagram soft-launch and anniversary captions use 💑 frequently.",
      "ZWJ variants specify gender mix and skin tones for inclusive representation.",
    ],
    examples: [
      { context: "Anniversary", text: "Together 💑" },
      { context: "Launch", text: "Soft launch 💑" },
      { context: "Pride", text: "Us 💑" },
      { context: "Travel", text: "Our trip 💑" },
      { context: "Engaged", text: "Fiancés 💑" },
    ],
  },
  "horse-racing": {
    snippetAnswer: "🏇 Horse Racing marks derby days, equestrian sport, track betting humor, and speed metaphors.",
    detailedParagraphs: [
      "Horse Racing (🏇) shows jockey on horse — Kentucky Derby, Melbourne Cup, and polo-adjacent culture.",
      "Sports betting memes and outfit posts tag 🏇 seasonally — gamble responsibly in copy.",
      "Skin-tone variants on the jockey represent diverse riders.",
    ],
    examples: [
      { context: "Derby", text: "Derby day 🏇" },
      { context: "Track", text: "At the track 🏇" },
      { context: "Speed", text: "Full speed 🏇" },
      { context: "Outfit", text: "Hat season 🏇" },
      { context: "Watch", text: "Photo finish 🏇" },
    ],
  },
  snowboarder: {
    snippetAnswer: "🏂 Snowboarder marks powder days, ski resort trips, and winter action-sport posts.",
    detailedParagraphs: [
      "Snowboarder (🏂) tags slope content — season openers, park tricks, and Olympic hype.",
      "Resort marketing and winter travel vlogs lead with 🏂.",
      "Skin-tone variants represent diverse riders on the mountain.",
    ],
    examples: [
      { context: "Trip", text: "Mountain weekend 🏂" },
      { context: "Powder", text: "Fresh snow 🏂" },
      { context: "Olympics", text: "Team 🏂" },
      { context: "Learn", text: "First run 🏂" },
      { context: "Stoke", text: "So stoked 🏂" },
    ],
  },
};

const findEmoji = (slug: string): Emoji => {
  const e = emojis.find((x) => x.slug === slug);
  if (!e) throw new Error(`Missing emoji: ${slug}`);
  return e;
};

const buildProfession = (emoji: Emoji, roleKey: string): Omit<EmojiBatchEnrichment, "batchId"> => {
  const u = emoji.unicode;
  const hook = PROFESSION_HOOKS[roleKey] ?? "career updates and uniform appreciation";
  const roleLabel = roleKey.replace(/-/g, " ");
  return buildFromNativeBase(emoji, {
    searchTitle: `${emoji.name} Emoji (${u}) Meaning: ${roleLabel.charAt(0).toUpperCase() + roleLabel.slice(1)} Profession`,
    extraParagraphs: [
      `${emoji.name} (${u}) is a ZWJ profession emoji — uniform and role visible at emoji size.`,
      `Common in ${hook}.`,
      `Skin-tone modifiers represent diversity in every profession — pick tone when identity is part of the message.`,
    ],
    textingMeaning: `'At work ${u}', 'Shift ${u}', '${roleLabel} life ${u}'.`,
    socialMeaning: `Career milestones, cosplay, and ${roleLabel} appreciation posts tag ${u}.`,
    extraExamples: [
      { context: "Work", text: `On shift ${u}` },
      { context: "Career", text: `Promoted ${u}` },
      { context: "Cosplay", text: `Uniform ${u}` },
      { context: "Thanks", text: `Heroes ${u}` },
      { context: "Day", text: `Long day ${u}` },
    ],
    extraWhenNotToUse: ["Mocking workers or stereotype jokes."],
    extraFaqs: [
      { question: `What does ${u} mean?`, answer: `${emoji.name} — ${roleLabel} profession representation.` },
    ],
  });
};

const buildFamily = (emoji: Emoji): Omit<EmojiBatchEnrichment, "batchId"> => {
  const u = emoji.unicode;
  const label = FAMILY_LABELS[emoji.slug] ?? "family unit";
  return buildFromNativeBase(emoji, {
    searchTitle: `${emoji.name} Emoji (${u}) Meaning: Family Representation`,
    extraParagraphs: [
      `${emoji.name} (${u}) shows ${label} — Unicode ZWJ family sequence for inclusive household representation.`,
      "Family emoji posts celebrate structure without gatekeeping — respect all family forms.",
      "Skin-tone variants assign tones to each family member — combinations can be mixed for real families.",
    ],
    textingMeaning: `'Our family ${u}', 'Us ${u}', 'Home ${u}'.`,
    socialMeaning: "Family photos, Pride families, and holiday reunion posts.",
    extraExamples: [
      { context: "Photo", text: `Family pic ${u}` },
      { context: "Holiday", text: `Reunion ${u}` },
      { context: "Pride", text: `Our family ${u}` },
      { context: "Home", text: `Weekend ${u}` },
      { context: "Love", text: `Blessed ${u}` },
    ],
    extraWhenNotToUse: ["Mocking family structures or parenting choices."],
  });
};

export const buildPeopleRichSpec = (slug: string, batchId: string): EmojiBatchEnrichment => {
  const emoji = findEmoji(slug);
  const u = emoji.unicode;
  const name = emoji.name;

  if (GESTURE_OVERRIDES[slug]) {
    const base = buildFromNativeBase(emoji, {
      searchTitle: GESTURE_OVERRIDES[slug]!.searchTitle ?? `${name} Emoji (${u}) Meaning`,
    });
    return { batchId, ...buildEnhancedEnrichment(emoji, base, GESTURE_OVERRIDES[slug]) };
  }

  if (POINTING[slug]) {
    const dir = POINTING[slug];
    const base = buildFromNativeBase(emoji, {
      searchTitle: `${name} Emoji (${u}) Meaning: Point ${dir.charAt(0).toUpperCase() + dir.slice(1)}`,
    });
    return { batchId, ...buildEnhancedEnrichment(emoji, base, pointingOverride(dir)) };
  }

  if (MISC_OVERRIDES[slug]) {
    const base = buildFromNativeBase(emoji, {
      searchTitle: `${name} Emoji (${u}) Meaning`,
    });
    return { batchId, ...buildEnhancedEnrichment(emoji, base, MISC_OVERRIDES[slug]) };
  }

  if (slug.startsWith("family-")) {
    return { batchId, ...buildFamily(emoji) };
  }

  if (PERSON_GESTURE[slug]) {
    const { verb, social } = PERSON_GESTURE[slug];
    const base = buildFromNativeBase(emoji, {
      searchTitle: `${name} Emoji (${u}) Meaning: Gesture and Body Language`,
      extraParagraphs: [
        `${name} (${u}) shows full-body gesture — to ${verb} in digital chat.`,
        `Full-body emojis read clearer than hand-only when the pose matters.`,
        `Gendered variants (man/woman) add explicit presentation — neutral ${slug} when gender isn't the point.`,
      ],
      textingMeaning: `'${verb} ${u}' — body language shorthand.`,
      socialMeaning: social,
      extraExamples: [
        { context: "React", text: `${u} seriously` },
        { context: "Meme", text: `Mood ${u}` },
        { context: "Chat", text: `Same ${u}` },
        { context: "Story", text: `Today ${u}` },
        { context: "Reply", text: `Exactly ${u}` },
      ],
    });
    return { batchId, ...base };
  }

  const profMatch = slug.match(/^(?:man|woman)-(.+)$/) ?? slug.match(/^(.+)$/);
  const roleKey = profMatch?.[1] ?? slug;
  if (
    slug.includes("-") &&
    (slug.startsWith("man-") ||
      slug.startsWith("woman-") ||
      ["construction-worker", "detective", "guard", "office-worker", "police-officer", "engineer"].includes(slug))
  ) {
    const key = slug.startsWith("man-") || slug.startsWith("woman-") ? slug.replace(/^(man|woman)-/, "") : slug;
    if (PROFESSION_HOOKS[key] || slug.endsWith("-worker") || slug.endsWith("-officer")) {
      return { batchId, ...buildProfession(emoji, key) };
    }
  }

  if (["person", "man", "woman", "boy", "girl", "child", "older-person", "old-man", "old-woman"].includes(slug)) {
    const base = buildFromNativeBase(emoji, {
      searchTitle: `${name} Emoji (${u}) Meaning: Representation and Identity`,
      extraParagraphs: [
        `${name} (${u}) is a base human figure — gender and age presentation explicit in the glyph choice.`,
        "Default yellow tone is a design fallback; skin-tone variants represent identity when it matters.",
        "Use neutral 🧑 person when gender isn't relevant; man/woman when presentation is part of the message.",
      ],
      textingMeaning: `'Me ${u}', 'Us ${u}', 'Someone ${u}'.`,
      socialMeaning: "Identity, diversity, and representation posts.",
      extraExamples: [
        { context: "Identity", text: `This is me ${u}` },
        { context: "Group", text: `All of us ${u}` },
        { context: "Rep", text: `Visible ${u}` },
        { context: "Chat", text: `Person ${u}` },
        { context: "Post", text: `${u}` },
      ],
    });
    return { batchId, ...base };
  }

  if (hasRichNative(emoji)) {
    return {
      batchId,
      ...buildFromNativeBase(emoji, {
        searchTitle: `${name} Emoji (${u}) Meaning in Texting and Social Media`,
        extraParagraphs: [
          `Skin-tone variants extend ${name} (${u}) for inclusive representation — search ${slug.replace(/-/g, " ")} + skin tone.`,
        ],
      }),
    };
  }

  return {
    batchId,
    ...buildFromNativeBase(emoji, {
      searchTitle: `${name} Emoji (${u}) Meaning`,
      extraParagraphs: [
        `${name} (${u}) appears in people-and-body contexts — pair with words when meaning could shift.`,
      ],
    }),
  };
};
