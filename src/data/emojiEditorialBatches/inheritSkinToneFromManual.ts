import type { Emoji } from "@/data/emojis";
import { emojis } from "@/data/emojis";
import type { EmojiBatchEnrichment } from "./types";
import {
  humanize,
  parsePeopleSlug,
  skinToneLabel,
  type ParsedPeopleSlug,
} from "./generators/shared";

const SKIN_TONE_BATCH_SUFFIX = "+skin-tone";

const SKIN_TONE_INFIX =
  /^(person|man|woman)-(light|medium-light|medium|medium-dark|dark)-skin-tone-(.+)$/;

/** Map phantom / legacy root slugs to hand-written base. */
const BASE_ALIASES: Record<string, string> = {
  "kiss-person-person": "kiss",
  "couple-with-heart-person-person": "couple-with-heart",
  "index-pointing-at-the-viewer": "index-pointing-at-viewer",
  "man-construction-worker": "construction-worker",
  "woman-construction-worker": "construction-worker",
  "man-chef": "man-cook",
  "woman-chef": "woman-cook",
  "person-biking": "man-biking",
  "person-swimming": "man-swimming",
  "person-cartwheeling": "man-cartwheeling",
  "person-lifting-weights": "man-lifting-weights",
  "person-mountain-biking": "man-mountain-biking",
  "person-in-lotus-position": "man-in-lotus-position",
};

export const resolveRootPeopleSlug = (slug: string): string => {
  let current = slug;
  for (let i = 0; i < 8; i++) {
    const { base, skinTone } = parsePeopleSlug(current);
    if (!skinTone) {
      if (current.endsWith("-medium")) current = current.slice(0, -"-medium".length);
      return current;
    }
    current = base;
  }
  return slug;
};

export const parseEmbeddedSkinToneSlug = (
  slug: string,
): { baseSlug: string; skinTone: ParsedPeopleSlug["skinTone"] } | null => {
  const match = slug.match(SKIN_TONE_INFIX);
  if (!match) return null;
  const [, role, tone, rest] = match;
  const baseSlug = `${role}-${rest}`;
  const skinTone = `${tone}-skin-tone` as ParsedPeopleSlug["skinTone"];
  return { baseSlug, skinTone };
};

const candidateSlugs = (slug: string): string[] => {
  const out: string[] = [];
  const add = (s: string) => {
    if (s && !out.includes(s)) out.push(s);
  };

  const embedded = parseEmbeddedSkinToneSlug(slug);
  if (embedded) add(embedded.baseSlug);

  const root = resolveRootPeopleSlug(slug);
  add(root);
  add(BASE_ALIASES[root] ?? "");
  if (root.endsWith("-medium")) add(root.slice(0, -"-medium".length));

  for (const s of [...out]) {
    add(s.replace(/^(man|woman)-/, "person-"));
  }

  return out.filter(Boolean);
};

/** Find hand-written base for a people emoji (skin-tone suffix, embedded tone, or alias). */
export const resolveManualBaseForEmoji = (
  emoji: Emoji,
  handWritten: Record<string, EmojiBatchEnrichment>,
): { resolvedSlug: string; skinTone: ParsedPeopleSlug["skinTone"] } | null => {
  if (emoji.slug in handWritten) return null;

  const embedded = parseEmbeddedSkinToneSlug(emoji.slug);
  const suffixTone = parsePeopleSlug(emoji.slug).skinTone;

  for (const candidate of candidateSlugs(emoji.slug)) {
    if (!(candidate in handWritten)) continue;

    let tone: ParsedPeopleSlug["skinTone"] = null;
    if (embedded?.baseSlug === candidate) tone = embedded.skinTone;
    else if (suffixTone && resolveRootPeopleSlug(emoji.slug) === candidate) tone = suffixTone;
    else if (suffixTone && candidate === resolveRootPeopleSlug(emoji.slug).replace(/-medium$/, ""))
      tone = suffixTone;

    return { resolvedSlug: candidate, skinTone: tone };
  }

  return null;
};

export const resolveManualBaseSlug = (
  base: string,
  handWritten: Record<string, EmojiBatchEnrichment>,
): string | null => {
  for (const candidate of candidateSlugs(base)) {
    if (candidate in handWritten) return candidate;
  }
  return null;
};

const adaptTextUnicode = (text: string, fromUnicode: string | undefined, toUnicode: string): string =>
  fromUnicode && fromUnicode !== toUnicode ? text.split(fromUnicode).join(toUnicode) : text;

const extractMeaningTopic = (searchTitle: string | undefined, fallback: string): string => {
  if (!searchTitle) return fallback;
  const afterMeaning = searchTitle.split("Meaning:")[1];
  if (!afterMeaning) return fallback;
  return afterMeaning.split("Emoji")[0]?.replace(/[()]/g, "").trim() || fallback;
};

/** Derive skin-tone (or embedded-tone) enrichment from a hand-written base entry. */
export const inheritSkinToneEnrichment = (
  emoji: Emoji,
  base: EmojiBatchEnrichment,
  resolvedBaseSlug: string,
  options?: { skinTone?: ParsedPeopleSlug["skinTone"] },
): EmojiBatchEnrichment => {
  const { base: baseSlug } = parsePeopleSlug(emoji.slug);
  const embedded = parseEmbeddedSkinToneSlug(emoji.slug);
  const skinTone =
    options?.skinTone ?? parsePeopleSlug(emoji.slug).skinTone ?? embedded?.skinTone ?? null;
  const toneLabel = skinToneLabel(skinTone);
  const u = emoji.unicode;
  const name = emoji.name;
  const baseEmoji = emojis.find((e) => e.slug === resolvedBaseSlug);
  const baseU = baseEmoji?.unicode;
  const displayBase = humanize(embedded?.baseSlug ?? baseSlug);
  const meaningTopic = extractMeaningTopic(base.searchTitle, displayBase);

  const toneParagraph = toneLabel
    ? `This variant uses ${toneLabel}. Unicode skin-tone modifiers let senders represent themselves or others respectfully when identity is part of the message — not just for decoration.`
    : "";

  const detailedParagraphs = [
    ...(base.detailedParagraphs ?? []).map((p) => adaptTextUnicode(p, baseU, u)),
    ...(toneParagraph && !(base.detailedParagraphs ?? []).some((p) => p.includes("skin-tone modifier"))
      ? [toneParagraph]
      : []),
  ];

  const snippetAnswer = toneLabel
    ? `${u} ${name} uses ${toneLabel} — same ${displayBase.toLowerCase()} meaning as ${humanize(resolvedBaseSlug)} with inclusive representation.`
    : adaptTextUnicode(base.snippetAnswer ?? "", baseU, u);

  const searchIntents = [
    ...(base.searchIntents ?? []).map((s) => adaptTextUnicode(s, baseU, u)),
    ...(toneLabel
      ? [
          `${baseSlug.replace(/-/g, " ")} ${toneLabel} emoji`,
          `${u} ${toneLabel} meaning`,
        ]
      : []),
  ];

  const inheritedFaqs = [...(base.faqs ?? [])];
  if (toneLabel) {
    inheritedFaqs.push({
      question: `Why pick ${toneLabel} for ${displayBase}?`,
      answer: `Skin-tone modifiers represent diversity. Choose the tone that matches you or the person you reference when identity is part of the message.`,
    });
  }

  return {
    ...base,
    batchId: `${base.batchId}${SKIN_TONE_BATCH_SUFFIX}`,
    searchTitle: `${name} Emoji (${u}) Meaning: ${meaningTopic}${toneLabel ? ` (${toneLabel})` : ""}`,
    snippetAnswer,
    detailedParagraphs,
    textingMeaning: adaptTextUnicode(base.textingMeaning ?? "", baseU, u),
    socialMeaning: adaptTextUnicode(base.socialMeaning ?? "", baseU, u),
    caution: base.caution,
    examples: (base.examples ?? []).map((ex) => ({
      context: ex.context,
      text: adaptTextUnicode(ex.text, baseU, u),
    })),
    contextBlocks: [
      ...(base.contextBlocks ?? []).map((b) => ({
        title: b.title,
        body: adaptTextUnicode(b.body, baseU, u),
      })),
      ...(toneLabel
        ? [
            {
              title: "Skin-tone variant",
              body: `${u} ${toneLabel} — inherits meaning from ${humanize(resolvedBaseSlug)}; tone matches identity when it matters.`,
            },
          ]
        : []),
    ],
    searchIntents: [...new Set(searchIntents)],
    whenNotToUse: base.whenNotToUse,
    faqs: inheritedFaqs,
  };
};

export const isSkinToneInheritedBatchId = (batchId: string): boolean =>
  batchId.endsWith(SKIN_TONE_BATCH_SUFFIX);
