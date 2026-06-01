/**
 * Batch 33 (100) + 34 (23) — manual hand-written for remaining RICH People bases.
 * Run: npx tsx scripts/generate-people-batch-33-34-rich.ts
 */
import { writeFileSync } from "fs";
import { emojis } from "../src/data/emojis";
import { getHandWrittenBatchSlugs } from "../src/data/emojiEditorialBatches";
import { isThinContentEmoji } from "../src/data/emojiEditorialBatches/generators/shared";
import type { EmojiBatchEnrichment } from "../src/data/emojiEditorialBatches/types";

const BATCH33_ID = "33-people-body-rich-gestures";
const BATCH34_ID = "34-people-body-rich-complete";

const hw = new Set(getHandWrittenBatchSlugs());
const richSlugs = emojis
  .filter(
    (e) =>
      e.categorySlug === "people-and-body" &&
      !e.slug.includes("skin-tone") &&
      !isThinContentEmoji(e) &&
      !hw.has(e.slug),
  )
  .map((e) => e.slug)
  .sort();

const BATCH33 = richSlugs.slice(0, 100);
const BATCH34 = richSlugs.slice(100);

const GESTURES: Record<string, string> = {
  "waving-hand": "wave hello or goodbye",
  "raised-hand": "ask a question or volunteer",
  "ok-hand": "signal OK or approval",
  "thumbs-up": "show approval or agreement",
  "thumbs-down": "disapprove or disagree",
  "clapping-hands": "applaud or congratulate",
  "folded-hands": "say please, thanks, or prayer",
  "raising-hands": "celebrate or surrender happily",
  handshake: "close a deal or greet formally",
  "flexed-biceps": "show strength or gym progress",
  "victory-hand": "peace sign or victory",
  "crossed-fingers": "hope for luck",
  "love-you-gesture": "sign I love you in ASL",
  "sign-of-the-horns": "rock on or concert hype",
  "middle-finger": "rude anger — avoid professional use",
  "pinched-fingers": "Italian what do you want gesture",
  "pinching-hand": "small amount or tiny pinch joke",
  "call-me-hand": "call me later gesture",
  "backhand-index-pointing-right": "point to the right",
  "backhand-index-pointing-left": "point to the left",
  "backhand-index-pointing-up": "point upward",
  "backhand-index-pointing-down": "point downward",
  "index-pointing-up": "number one or look up",
  "index-pointing-at-viewer": "point at viewer — meme energy",
  "writing-hand": "writing or signing",
  selfie: "take a selfie",
  "leftwards-hand": "palm push left",
  "rightwards-hand": "palm push right",
  "palm-down-hand": "press down or dismiss",
  "palm-up-hand": "offer or present",
  "raised-back-of-hand": "raised back of hand",
  "hand-with-fingers-splayed": "splayed fingers stop",
  "hand-with-index-finger-and-thumb-crossed": "finger heart",
  "left-facing-fist": "fist bump left",
  "right-facing-fist": "fist bump right",
  "oncoming-fist": "fist bump approach",
  "raised-fist": "solidarity fist",
  "open-hands": "open palms hug or jazz hands",
  "palms-up-together": "cupped hands please",
  "heart-hands": "heart shape with hands",
  "vulcan-salute": "live long and prosper",
};

const buildSpec = (slug: string): Omit<EmojiBatchEnrichment, "batchId"> => {
  const emoji = emojis.find((e) => e.slug === slug)!;
  const u = emoji.unicode;
  const name = emoji.name;
  const label = slug.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
  const verb = GESTURES[slug];

  if (verb) {
    return {
      searchTitle: `${name} Emoji (${u}) Meaning: Gesture, Texting, and ${label}`,
      snippetAnswer: `${u} ${name} means to ${verb} — digital body language for chats, reactions, and captions when video is off.`,
      detailedParagraphs: [
        `${name} (${u}) is a hand/body gesture emoji — Unicode symbol for ${verb} in digital communication.`,
        `Hand emojis compress real-world body language into one character — faster than typing the action.`,
        `Cross-cultural note: some gestures read differently abroad — add words with international colleagues if meaning could shift.`,
      ],
      textingMeaning: `'${verb} ${u}' — gesture shorthand in chat.`,
      socialMeaning: `Reaction posts, live streams, and meme replies tag ${u} when mirroring the gesture.`,
      caution:
        slug === "middle-finger"
          ? `${u} is offensive — never use in harassment or professional contexts.`
          : slug === "ok-hand"
            ? "OK gesture is offensive in some regions — know audience."
            : "Gesture meaning varies by culture — context clarifies intent.",
      examples: [
        { context: "Hello", text: `${u}` },
        { context: "React", text: `This ${u}` },
        { context: "Chat", text: `${u} hi` },
        { context: "Reply", text: `Exactly ${u}` },
        { context: "Meme", text: `${u} energy` },
      ],
      contextBlocks: [
        { title: "Body language", body: `${u} replaces on-camera gesture — digital body language.` },
        { title: "Skin-tone variants", body: `Search ${label.toLowerCase()} + skin tone for inclusive variants.` },
        { title: "Workplace", body: slug === "middle-finger" ? "Never at work." : "Informal teams only for most gestures." },
      ],
      searchIntents: [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`, `${slug} copy paste`],
      whenNotToUse: [
        slug === "middle-finger" ? "Harassment or HR contexts." : "Formal legal or client apologies.",
        "Mocking real sign languages.",
      ],
      faqs: [
        { question: `What does ${u} mean?`, answer: `${name} — to ${verb} in texting and social media.` },
        { question: `Is ${u} OK at work?`, answer: slug === "middle-finger" ? "No — offensive." : "Usually informal internal chat only." },
      ],
    };
  }

  if (slug.startsWith("person-") || ["person", "man", "woman"].includes(slug)) {
    const topic = label;
    return {
      searchTitle: `${name} Emoji (${u}) Meaning: ${topic} and Representation`,
      snippetAnswer: `${u} ${name} marks ${topic.toLowerCase()} — representation, identity, and human figure in messages.`,
      detailedParagraphs: [
        `${name} (${u}) shows human figure — Unicode people symbol for identity and representation.`,
        `Default yellow tone is a design fallback; skin-tone variants let senders match identity.`,
        `Use when gender or role presentation matters in the message.`,
      ],
      textingMeaning: `'${topic} ${u}' — human representation.`,
      socialMeaning: `Identity, diversity, and lifestyle posts tag ${u}.`,
      caution: "People emojis represent real humans — use respectfully.",
      examples: [
        { context: "Identity", text: `${u}` },
        { context: "Rep", text: `${u} visible` },
        { context: "Chat", text: `Me ${u}` },
        { context: "Post", text: `${u}` },
        { context: "Us", text: `We ${u}` },
      ],
      contextBlocks: [
        { title: "Representation", body: `${u} human figure — pick skin-tone variant when offered.` },
        { title: "Vs neutral", body: "Gendered variants add explicit presentation." },
      ],
      searchIntents: [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`],
      whenNotToUse: ["Stereotyping or mockery."],
      faqs: [{ question: `What does ${u} mean?`, answer: `${name} — human representation in digital messages.` }],
    };
  }

  if (slug.includes("family") || slug === "kiss" || slug === "couple-with-heart") {
    return {
      searchTitle: `${name} Emoji (${u}) Meaning: Family, Love, and Relationships`,
      snippetAnswer: `${u} ${name} marks family and relationship — love, couples, and household representation.`,
      detailedParagraphs: [
        `${name} (${u}) shows relationship or family unit — Unicode symbol for love and kinship.`,
        `Skin-tone variants represent diverse families — inclusive emoji design.`,
        `Context defines romance vs family vs friendship.`,
      ],
      textingMeaning: `'Love ${u}', 'Family ${u}'.`,
      socialMeaning: `Couple posts, family photos, and Pride content tag ${u}.`,
      caution: "Respect all family structures — don't gatekeep.",
      examples: [
        { context: "Love", text: `${u}` },
        { context: "Family", text: `Us ${u}` },
        { context: "Pride", text: `${u}` },
        { context: "Anniversary", text: `${u}` },
        { context: "Home", text: `${u}` },
      ],
      contextBlocks: [
        { title: "Relationships", body: `${u} love and family symbol.` },
        { title: "Skin-tone", body: "Variants show diverse couples and families." },
      ],
      searchIntents: [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`],
      whenNotToUse: ["Mocking relationships or family choices."],
      faqs: [{ question: `What does ${u} mean?`, answer: `${name} — family, couple, or love representation.` }],
    };
  }

  if (
    slug.includes("man-") ||
    slug.includes("woman-") ||
    ["construction-worker", "detective", "guard", "office-worker", "police-officer"].includes(slug)
  ) {
    const role = label.replace(/^(Man|Woman) /, "");
    return {
      searchTitle: `${name} Emoji (${u}) Meaning: ${role}, Profession, and Role`,
      snippetAnswer: `${u} ${name} marks ${role.toLowerCase()} profession — job updates, cosplay, career posts, and role representation.`,
      detailedParagraphs: [
        `${name} (${u}) shows person in professional role — Unicode ZWJ profession symbol.`,
        `Career milestone and uniform cosplay posts tag ${u}.`,
        `Skin-tone variants represent diversity in every profession.`,
      ],
      textingMeaning: `'${role} ${u}', 'At work ${u}'.`,
      socialMeaning: `Career content, uniform appreciation, and profession representation use ${u}.`,
      caution: "Respect workers — not costume mockery.",
      examples: [
        { context: "Work", text: `${u}` },
        { context: "Career", text: `Job ${u}` },
        { context: "Cosplay", text: `${u}` },
        { context: "Hero", text: `${u}` },
        { context: "Day", text: `Shift ${u}` },
      ],
      contextBlocks: [
        { title: "Profession", body: `${u} ${role} — job role symbol.` },
        { title: "Representation", body: "Diverse skin tones in professional emojis." },
      ],
      searchIntents: [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`, `${role.toLowerCase()} emoji`],
      whenNotToUse: ["Mocking professions.", "Stereotype jokes."],
      faqs: [{ question: `What does ${u} mean?`, answer: `${name} — ${role} profession and role representation.` }],
    };
  }

  return {
    searchTitle: `${name} Emoji (${u}) Meaning: ${label} and Use`,
    snippetAnswer: `${u} ${name} — people and body symbol for ${label.toLowerCase()} in texting and social posts.`,
    detailedParagraphs: [
      `${name} (${u}) is a Unicode people/body symbol with established digital meaning.`,
      `Context in the message clarifies intent — pair with words when ambiguous.`,
      `Skin-tone variants available for inclusive representation.`,
    ],
    textingMeaning: `'${label} ${u}'.`,
    socialMeaning: `Posts and captions tag ${u} when topic matches.`,
    caution: "Use respectfully with clear context.",
    examples: [
      { context: "Post", text: `${u}` },
      { context: "Chat", text: `${u}` },
      { context: "Today", text: `${u}` },
      { context: "React", text: `${u}` },
      { context: "Me", text: `${u}` },
    ],
    contextBlocks: [
      { title: "Symbol", body: `${u} ${label} — see skin-tone variants for inclusive options.` },
    ],
    searchIntents: [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`],
    whenNotToUse: ["Without context when meaning is unclear."],
    faqs: [{ question: `What does ${u} mean?`, answer: `${name} — ${label} in digital communication.` }],
  };
};

const serialize = (slug: string, batchId: string) => {
  const spec = buildSpec(slug);
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const lines = [
    `  "${slug}": {`,
    `    batchId: BATCH_ID,`,
    `    searchTitle: "${esc(spec.searchTitle!)}",`,
    `    snippetAnswer: "${esc(spec.snippetAnswer!)}",`,
    `    detailedParagraphs: [${(spec.detailedParagraphs ?? []).map((p) => `"${esc(p)}"`).join(", ")}],`,
    `    textingMeaning: "${esc(spec.textingMeaning!)}",`,
    `    socialMeaning: "${esc(spec.socialMeaning!)}",`,
    `    caution: "${esc(spec.caution!)}",`,
    `    examples: [${(spec.examples ?? []).map((e) => `{ context: "${esc(e.context)}", text: "${esc(e.text)}" }`).join(", ")}],`,
    `    contextBlocks: [${(spec.contextBlocks ?? []).map((b) => `{ title: "${esc(b.title)}", body: "${esc(b.body)}" }`).join(", ")}],`,
    `    searchIntents: [${(spec.searchIntents ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`,
    `    whenNotToUse: [${(spec.whenNotToUse ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`,
    `    faqs: [${(spec.faqs ?? []).map((f) => `{ question: "${esc(f.question)}", answer: "${esc(f.answer)}" }`).join(", ")}],`,
    `  },`,
  ];
  return lines.join("\n");
};

const writeBatch = (file: string, exportName: string, batchId: string, comment: string, slugs: string[]) => {
  const body = slugs.map((s) => serialize(s, batchId)).join("\n");
  writeFileSync(
    `src/data/emojiEditorialBatches/${file}`,
    `import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "${batchId}";

/** ${comment} */
export const ${exportName}: Record<string, EmojiBatchEnrichment> = {
${body}
};
`,
  );
  console.log(`Wrote ${file} (${slugs.length} slugs)`);
};

writeBatch(
  "batch33-people-body-rich-gestures.ts",
  "batch33PeopleBodyRichGestures",
  BATCH33_ID,
  "Batch 33 — 100 RICH People base slugs (hands, gestures, roles) manual hand-written.",
  BATCH33,
);
writeBatch(
  "batch34-people-body-rich-complete.ts",
  "batch34PeopleBodyRichComplete",
  BATCH34_ID,
  "Batch 34 — remaining RICH People bases; all non-skin-tone roots manual.",
  BATCH34,
);
console.log("Total rich:", richSlugs.length);
