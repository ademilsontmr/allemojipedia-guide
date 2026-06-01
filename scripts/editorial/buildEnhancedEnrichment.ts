import type { Emoji } from "../../src/data/emojis";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";
import { isThinContentEmoji } from "../../src/data/emojiEditorialBatches/generators/shared";

export type EditorialOverride = Partial<Omit<EmojiBatchEnrichment, "batchId">>;

const unique = <T>(items: T[]) => [...new Set(items)];

const nativeParagraphs = (emoji: Emoji) =>
  emoji.detailedMeaning
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

const hasRichNative = (emoji: Emoji) =>
  !isThinContentEmoji(emoji) && nativeParagraphs(emoji).length >= 1 && emoji.shortMeaning.length > 40;

/** Merge override onto defaults; override arrays replace when provided. */
export const buildEnhancedEnrichment = (
  emoji: Emoji,
  defaults: Omit<EmojiBatchEnrichment, "batchId">,
  override?: EditorialOverride,
): Omit<EmojiBatchEnrichment, "batchId"> => {
  if (!override) return defaults;

  return {
    searchTitle: override.searchTitle ?? defaults.searchTitle,
    snippetAnswer: override.snippetAnswer ?? defaults.snippetAnswer,
    detailedParagraphs: override.detailedParagraphs ?? defaults.detailedParagraphs,
    textingMeaning: override.textingMeaning ?? defaults.textingMeaning,
    socialMeaning: override.socialMeaning ?? defaults.socialMeaning,
    caution: override.caution ?? defaults.caution,
    examples: override.examples ?? defaults.examples,
    contextBlocks: override.contextBlocks ?? defaults.contextBlocks,
    searchIntents: override.searchIntents ?? defaults.searchIntents,
    whenNotToUse: override.whenNotToUse ?? defaults.whenNotToUse,
    faqs: override.faqs ?? defaults.faqs,
  };
};

export const buildFromNativeBase = (
  emoji: Emoji,
  opts: {
    searchTitle: string;
    extraParagraphs?: string[];
    extraContextBlocks?: EmojiBatchEnrichment["contextBlocks"];
    extraFaqs?: EmojiBatchEnrichment["faqs"];
    extraWhenNotToUse?: string[];
    socialMeaning?: string;
    textingMeaning?: string;
    caution?: string;
    extraExamples?: EmojiBatchEnrichment["examples"];
  },
): Omit<EmojiBatchEnrichment, "batchId"> => {
  const u = emoji.unicode;
  const rich = hasRichNative(emoji);
  const paragraphs = rich
    ? [...nativeParagraphs(emoji), ...(opts.extraParagraphs ?? [])]
    : opts.extraParagraphs?.length
      ? opts.extraParagraphs
      : [
          `${emoji.name} (${u}) is a Unicode symbol with specific meaning in digital messages — context in the thread clarifies intent.`,
          `Pair ${u} with words when stakes are high (health, money, legal, relationships).`,
          `Search interest for "${emoji.slug.replace(/-/g, " ")} meaning" usually means someone saw ${u} and needed a quick translation.`,
        ];

  const snippet = rich
    ? emoji.shortMeaning.endsWith(".")
      ? emoji.shortMeaning
      : `${emoji.shortMeaning}.`
    : opts.extraParagraphs?.[0]?.slice(0, 200) ?? `${u} ${emoji.name} — meaning depends on conversation context; see examples below.`;

  const examples =
    opts.extraExamples?.length && emoji.examples.length < 3
      ? [...emoji.examples, ...opts.extraExamples].slice(0, 6)
      : emoji.examples.length >= 3
        ? emoji.examples.slice(0, 6)
        : [
            ...(opts.extraExamples ?? []),
            { context: "Chat", text: `${u}` },
            { context: "Reply", text: `Noted ${u}` },
            { context: "Post", text: `${u}` },
          ].slice(0, 5);

  const caution =
    opts.caution ??
    (emoji.misunderstandings.length
      ? emoji.misunderstandings.join(". ") + "."
      : "Match tone to audience — emoji alone can misfire without context.");

  const texting =
    opts.textingMeaning ??
    (emoji.usageContexts.length
      ? emoji.usageContexts.slice(0, 3).map((c) => `'${c} ${u}'`).join(", ") + "."
      : `'${emoji.name} ${u}' — shorthand in chat.`);

  const social =
    opts.socialMeaning ??
    `Captions, reactions, and comment threads tag ${u} when the topic matches ${emoji.name.toLowerCase()}.`;

  const contextBlocks = unique([
    ...(opts.extraContextBlocks ?? []),
    ...(emoji.misunderstandings.length
      ? [{ title: "Common misreads", body: emoji.misunderstandings.join("; ") + "." }]
      : []),
    { title: "Skin-tone variants", body: `Search ${emoji.slug.replace(/-/g, " ")} + skin tone when Unicode offers inclusive variants.` },
  ] as NonNullable<EmojiBatchEnrichment["contextBlocks"]>);

  const faqs = unique([
    ...(opts.extraFaqs ?? []),
    { question: `What does ${u} mean?`, answer: rich ? emoji.shortMeaning : `${emoji.name} — see context and examples above.` },
    ...(emoji.misunderstandings[0]
      ? [{ question: `Can ${u} be misread?`, answer: emoji.misunderstandings[0] + "." }]
      : []),
  ] as NonNullable<EmojiBatchEnrichment["faqs"]>);

  return {
    searchTitle: opts.searchTitle,
    snippetAnswer: snippet,
    detailedParagraphs: paragraphs.slice(0, 5),
    textingMeaning: texting,
    socialMeaning: social,
    caution,
    examples,
    contextBlocks: contextBlocks.slice(0, 4),
    searchIntents: unique([
      `${emoji.slug.replace(/-/g, " ")} emoji`,
      `${u} meaning`,
      `${emoji.slug} copy paste`,
      `${u} emoji meaning`,
    ]),
    whenNotToUse: unique([
      ...(opts.extraWhenNotToUse ?? []),
      "Formal legal, medical, or HR threads without clarifying words.",
      "When emoji could mock identity, disability, or culture.",
    ]),
    faqs: faqs.slice(0, 4),
  };
};

export { hasRichNative, nativeParagraphs };
