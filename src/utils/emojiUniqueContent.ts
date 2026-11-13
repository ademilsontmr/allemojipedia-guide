import type { Emoji } from "@/data/emojis";
import { getEmojiBatchEnrichment } from "@/data/emojiEditorialBatches";
import { isCloneEnrichment } from "@/utils/cloneEnrichment";
import {
  composeUniqueContextBlocks,
  composeUniqueDepthParagraphs,
  composeUniqueDetailedParagraphs,
  composeUniqueExamples,
  composeUniqueFactParagraphs,
} from "@/utils/composeUniqueEmojiCopy";

export const MIN_INDEXABLE_EDITORIAL_WORDS = 180;
const MIN_SNIPPET_WORDS = 20;

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

const mergeFactParagraphs = (base: string[], extras: string[]): string[] => {
  const merged = [...base];
  const haystack = () => merged.join(" ").toLowerCase();
  for (const extra of extras) {
    if (merged.some((paragraph) => paragraph.toLowerCase() === extra.toLowerCase())) continue;
    if (extra.includes("stored in Unicode as") && haystack().includes("u+")) continue;
    if (extra.length > 48 && merged.some((paragraph) => paragraph.includes(extra.slice(0, 48)))) continue;
    merged.push(extra);
  }
  return merged.slice(0, 12);
};

const editorialWordCount = (
  snippet: string,
  paragraphs: string[],
  examples: Array<{ text: string }>
) =>
  [snippet, ...paragraphs, ...examples.map((example) => example.text)]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const paragraphAlreadyPresent = (paragraphs: string[], candidate: string): boolean => {
  const lower = candidate.toLowerCase();
  if (paragraphs.some((paragraph) => paragraph.toLowerCase() === lower)) return true;
  const prefix = candidate.slice(0, 52).toLowerCase();
  return paragraphs.some((paragraph) => paragraph.toLowerCase().includes(prefix));
};

const resolveExamplesForDepth = (emoji: Emoji) => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.examples?.length && !isCloneEnrichment(batch)) {
    return batch.examples;
  }
  if (!isThinEmojiContent(emoji) && emoji.examples.length >= 3) {
    return emoji.examples;
  }
  return composeUniqueExamples(emoji);
};

const resolveSnippetForDepth = (emoji: Emoji, paragraphs: string[]) => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.snippetAnswer && !isCloneEnrichment(batch)) {
    return batch.snippetAnswer;
  }
  return paragraphs[0] ?? `${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning}`;
};

const pickSubstantiveSnippet = (emoji: Emoji, paragraphs: string[], fallback: string) => {
  const rich =
    paragraphs.find((paragraph) => editorialWordCount(paragraph, [], []) >= MIN_SNIPPET_WORDS) ??
    fallback;
  if (editorialWordCount(rich, [], []) >= MIN_SNIPPET_WORDS) return rich;
  return pick(emoji.slug, [
    `${emoji.unicode} ${emoji.name} is the Unicode glyph searchers mean when they type "${emoji.name.toLowerCase()}" — use it when the visual topic matches that catalog label, not as random decoration in serious threads.`,
    `${emoji.unicode} marks ${emoji.name.toLowerCase()} in texting and social posts. The meaning stays informal; pair the emoji with a plain-language noun so friends, family, and coworkers read the same intent.`,
    `When people copy ${emoji.unicode}, they usually want the exact "${emoji.name}" character from the picker. Context from the message — not the icon alone — decides whether it reads playful, supportive, or purely literal.`,
  ], 19);
};

const padDetailedParagraphsForDepth = (
  emoji: Emoji,
  paragraphs: string[],
  snippet: string,
  examples: Array<{ text: string }>
) => {
  const merged = [...paragraphs];
  if (editorialWordCount(snippet, merged, examples) >= MIN_INDEXABLE_EDITORIAL_WORDS) {
    return merged;
  }

  for (const extra of composeUniqueDepthParagraphs(emoji)) {
    if (editorialWordCount(snippet, merged, examples) >= MIN_INDEXABLE_EDITORIAL_WORDS) break;
    if (paragraphAlreadyPresent(merged, extra)) continue;
    merged.push(extra);
  }
  return merged;
};

const buildEnrichedEditorialBody = (emoji: Emoji) => {
  const batch = getEmojiBatchEnrichment(emoji);
  const extras = composeUniqueFactParagraphs(emoji);

  let paragraphs: string[];
  if (batch?.detailedParagraphs?.length && !isCloneEnrichment(batch)) {
    paragraphs = mergeFactParagraphs(batch.detailedParagraphs, extras);
  } else {
    paragraphs = composeUniqueDetailedParagraphs(emoji);
  }

  let examples = resolveExamplesForDepth(emoji);
  if (examples.length < 5) {
    const composed = composeUniqueExamples(emoji);
    if (composed.length >= examples.length) examples = composed;
  }

  let snippet = resolveSnippetForDepth(emoji, paragraphs);
  if (editorialWordCount(snippet, [], []) < MIN_SNIPPET_WORDS) {
    snippet = pickSubstantiveSnippet(emoji, paragraphs, snippet);
  }

  paragraphs = padDetailedParagraphsForDepth(emoji, paragraphs, snippet, examples);
  return { paragraphs, examples, snippet };
};

export const getEnrichedDetailedParagraphs = (emoji: Emoji): string[] =>
  buildEnrichedEditorialBody(emoji).paragraphs;

export const getEnrichedExamples = (emoji: Emoji) => buildEnrichedEditorialBody(emoji).examples;

export const getAuditedEditorialSnippet = (emoji: Emoji): string =>
  buildEnrichedEditorialBody(emoji).snippet;

export const getUniqueContextBlocks = (emoji: Emoji): EmojiContextBlock[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.contextBlocks?.length && !isCloneEnrichment(batch)) {
    return batch.contextBlocks;
  }

  return composeUniqueContextBlocks(emoji);
};

export const getUniqueSearchIntents = (emoji: Emoji): string[] => {
  const batch = getEmojiBatchEnrichment(emoji);
  if (batch?.searchIntents?.length && !isCloneEnrichment(batch)) {
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
  if (batch?.whenNotToUse?.length && !isCloneEnrichment(batch)) {
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
  if (batch?.faqs?.length && !isCloneEnrichment(batch)) {
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
  const body = buildEnrichedEditorialBody(emoji);
  const primaryKeyword = emoji.keywords.find(
    (k) => !["unicode", "copy paste", "emoji"].some((skip) => k.includes(skip))
  );

  const base: EmojiEditorialContent = {
    slug: emoji.slug,
    searchTitle: `${emoji.name} Emoji Meaning in Texting, Social Media, and Real Conversations`,
    snippetAnswer: body.snippet,
    textingMeaning: pick(emoji.slug, [
      `In one-on-one texting, ${emoji.unicode} clarifies tone when messages are short. It can soften a reply, underline excitement, or show you are joking — especially alongside "${body.examples[0]?.text ?? emoji.shortMeaning}".`,
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

  if (!batch || isCloneEnrichment(batch)) return base;

  const batchSnippet =
    batch.snippetAnswer &&
    editorialWordCount(batch.snippetAnswer, [], []) >= MIN_SNIPPET_WORDS
      ? batch.snippetAnswer
      : base.snippetAnswer;

  return {
    ...base,
    searchTitle: batch.searchTitle ?? base.searchTitle,
    snippetAnswer: batchSnippet,
    textingMeaning: batch.textingMeaning ?? base.textingMeaning,
    socialMeaning: batch.socialMeaning ?? base.socialMeaning,
    caution: batch.caution ?? base.caution,
    searchIntents: batch.searchIntents ?? base.searchIntents,
    faqs: batch.faqs ?? base.faqs,
  };
};

export const getEmojiEditorial = (emoji: Emoji): EmojiEditorialContent => buildUniqueEditorial(emoji);
