import type { Emoji } from "@/data/emojis";
import { getEmojiBySlug } from "@/data/emojis";
import { getFlagCountryFact, isoFromFlagEmoji } from "@/data/flagCountryFacts";
import { isThinPhrase } from "@/data/emojiEditorialBatches/premium/semanticProfile";

export type EmojiFactRow = { label: string; value: string };

const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

const pick = <T>(slug: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${slug}:${salt}`)) % items.length];

export const unicodeCodepoints = (unicode: string): string =>
  [...unicode]
    .map((char) => {
      const cp = char.codePointAt(0);
      return cp == null ? "" : `U+${cp.toString(16).toUpperCase()}`;
    })
    .filter(Boolean)
    .join(" ");

const cleanKeywords = (emoji: Emoji): string[] =>
  emoji.keywords.filter((keyword) => {
    const lower = keyword.toLowerCase();
    return (
      keyword.length > 1 &&
      !["unicode", "copy paste", "emoji", "emoji meaning", "flag:", "copy and paste"].some((skip) =>
        lower.includes(skip)
      ) &&
      lower !== emoji.categorySlug.replace(/-/g, " ") &&
      lower !== emoji.subgroup.replace(/-/g, " ")
    );
  });

const relatedLabels = (emoji: Emoji): string[] =>
  emoji.relatedEmojis
    .map((slug) => {
      const related = getEmojiBySlug(slug);
      return related ? `${related.unicode} ${related.name}` : slug.replace(/-/g, " ");
    })
    .filter(Boolean)
    .slice(0, 3);

const distinctiveNameBits = (emoji: Emoji): string =>
  emoji.name
    .replace(/^Flag:\s*/i, "")
    .replace(/\s+emoji$/i, "")
    .trim();

export const getEmojiFactRows = (emoji: Emoji): EmojiFactRow[] => {
  const rows: EmojiFactRow[] = [
    { label: "Unicode name", value: emoji.name },
    { label: "Code points", value: unicodeCodepoints(emoji.unicode) },
    { label: "Category", value: emoji.categorySlug.replace(/-/g, " ") },
    { label: "Subgroup", value: emoji.subgroup.replace(/-/g, " ") },
  ];

  const flag = getFlagCountryFact(emoji.slug, emoji.unicode);
  if (flag) {
    rows.push(
      { label: "ISO / region code", value: flag.iso },
      { label: "Capital or admin center", value: flag.capital },
      { label: "Demonym", value: flag.demonym },
      { label: "Languages", value: flag.languages },
    );
  } else {
    const iso = isoFromFlagEmoji(emoji.unicode);
    if (iso) rows.push({ label: "ISO region code", value: iso });
  }

  const keywords = cleanKeywords(emoji).slice(0, 6);
  if (keywords.length) rows.push({ label: "Also searched as", value: keywords.join(", ") });

  const related = relatedLabels(emoji);
  if (related.length) rows.push({ label: "Often compared with", value: related.join(", ") });

  return rows;
};

const sourceParagraphs = (emoji: Emoji): string[] =>
  emoji.detailedMeaning
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && !isThinPhrase(paragraph));

export const composeUniqueFactParagraphs = (emoji: Emoji): string[] => {
  const u = emoji.unicode;
  const name = distinctiveNameBits(emoji);
  const cps = unicodeCodepoints(u);
  const keywords = cleanKeywords(emoji);
  const related = relatedLabels(emoji);
  const flag = getFlagCountryFact(emoji.slug, emoji.unicode);
  const extras: string[] = [];

  extras.push(
    `${u} is stored in Unicode as ${cps}. Search pickers label it "${emoji.name}" in the ${emoji.subgroup.replace(/-/g, " ")} subgroup — that catalog name is the official meaning, not a nickname.`,
  );

  if (flag) {
    extras.push(
      `${u} maps to ISO region ${flag.iso}. ${flag.note} Capital or administrative center: ${flag.capital}. People described as ${flag.demonym} often write in ${flag.languages}.`,
    );
  }

  if (keywords.length) {
    extras.push(
      `People looking up ${u} usually type ${keywords.slice(0, 4).join(", ")}. Those queries are about ${name.toLowerCase()}, not a look-alike symbol with a different Unicode name.`,
    );
  }

  if (related.length) {
    extras.push(
      `If ${u} feels off, compare it with ${related.join(", ")}. Pick ${u} only when the message is specifically about ${name.toLowerCase()}.`,
    );
  } else if (emoji.usageContexts.length && !emoji.usageContexts.every((ctx) => isThinPhrase(ctx))) {
    const uses = emoji.usageContexts.filter((ctx) => !isThinPhrase(ctx)).slice(0, 3);
    if (uses.length) {
      extras.push(
        `${u} shows up most in ${uses.join(", ").toLowerCase()} messages. Add a noun next to the emoji so nobody has to guess.`,
      );
    }
  }

  const misunderstanding = emoji.misunderstandings.find((item) => !isThinPhrase(item));
  if (misunderstanding) {
    extras.push(`Common mix-up: ${misunderstanding.replace(/\.$/, "")}.`);
  }

  return extras;
};

export const composeUniqueDetailedParagraphs = (emoji: Emoji): string[] => {
  const existing = sourceParagraphs(emoji);
  const extras = composeUniqueFactParagraphs(emoji);
  const u = emoji.unicode;
  const name = distinctiveNameBits(emoji);
  const flag = getFlagCountryFact(emoji.slug, emoji.unicode);

  if (existing.length >= 2 && !isThinPhrase(emoji.shortMeaning)) {
    return mergeUniqueParagraphs([emoji.shortMeaning, ...existing], extras);
  }

  const opening = flag
    ? `${u} ${emoji.name} is the flag for ${name} (ISO ${flag.iso}). ${emoji.shortMeaning && !isThinPhrase(emoji.shortMeaning) ? emoji.shortMeaning : flag.note}`
    : `${u} ${emoji.name} — ${isThinPhrase(emoji.shortMeaning) ? `Unicode's ${name} in the ${emoji.subgroup.replace(/-/g, " ")} set.` : emoji.shortMeaning}`;

  const uses = emoji.usageContexts.filter((ctx) => !isThinPhrase(ctx)).slice(0, 3);
  const useLine = uses.length
    ? `Typical uses: ${uses.join("; ")}.`
    : pick(
        emoji.slug,
        [
          `In texting, ${u} is a visual shortcut for ${name.toLowerCase()} when the rest of the sentence already names the topic.`,
          `On Instagram and WhatsApp, ${u} tags posts about ${name.toLowerCase()} so followers can scan a busy feed.`,
          `Friends drop ${u} as a reaction when the conversation is already about ${name.toLowerCase()}.`,
        ],
        2,
      );

  return mergeUniqueParagraphs([opening, useLine], extras);
};

const alreadyCovers = (paragraphs: string[], extra: string): boolean => {
  const haystack = paragraphs.join(" ").toLowerCase();
  if (extra.includes("stored in Unicode as")) {
    return haystack.includes("unicode as u+") || haystack.includes("encodes") && haystack.includes("u+");
  }
  if (extra.length > 40 && paragraphs.some((paragraph) => paragraph.includes(extra.slice(0, 40)))) {
    return true;
  }
  return paragraphs.some((paragraph) => paragraph.toLowerCase() === extra.toLowerCase());
};

const mergeUniqueParagraphs = (base: string[], extras: string[]): string[] => {
  const merged = [...base];
  for (const extra of extras) {
    if (alreadyCovers(merged, extra)) continue;
    merged.push(extra);
  }
  return merged.slice(0, 8);
};

export const composeUniqueExamples = (
  emoji: Emoji,
): Array<{ context: string; text: string }> => {
  const usable = emoji.examples.filter(
    (example) =>
      !example.text.includes("Just posted my new photo") &&
      !example.text.includes("Can't wait to see you") &&
      !example.text.includes("That's amazing"),
  );
  if (usable.length >= 3) return usable.slice(0, 5);

  const u = emoji.unicode;
  const name = distinctiveNameBits(emoji).toLowerCase();
  const flag = getFlagCountryFact(emoji.slug, emoji.unicode);
  const keywords = cleanKeywords(emoji);

  if (flag) {
    return [
      { context: "Travel", text: `Landing near ${flag.capital} ${u}` },
      { context: "Identity", text: `${flag.demonym} family chat ${u}` },
      { context: "Sports", text: `Watching the ${name} match ${u}` },
      { context: "Language", text: `Practicing ${flag.languages.split(" and ")[0]} ${u}` },
      { context: "News", text: `Update from ${name} ${u}` },
    ];
  }

  const keyword = keywords[0] ?? name;
  return [
    { context: "Caption", text: `${keyword} mood ${u}` },
    { context: "Reply", text: `That's the ${name} energy ${u}` },
    { context: "Plan", text: `Adding ${name} to the list ${u}` },
    { context: "Question", text: `Did you mean ${name}? ${u}` },
    { context: "Note", text: `${emoji.name} copy: ${u}` },
  ];
};

export const composeUniqueContextBlocks = (
  emoji: Emoji,
): Array<{ title: string; body: string }> => {
  const u = emoji.unicode;
  const flag = getFlagCountryFact(emoji.slug, emoji.unicode);
  const examples = composeUniqueExamples(emoji);
  const cps = unicodeCodepoints(u);

  if (flag) {
    return [
      {
        title: `${flag.iso} in live chats`,
        body: `${u} spikes when ${distinctiveNameBits(emoji)} is in the news, on a pitch, or on a boarding pass. ${flag.note}`,
      },
      {
        title: `Language and diaspora`,
        body: `${flag.demonym} families mix ${u} with ${flag.languages}. Pair the flag with a city name — ${flag.capital} — so older phones that show ${cps} letters still make sense.`,
      },
      {
        title: "Wrong-flag mistakes",
        body: `Emoji search auto-suggests look-alike flags. Confirm ISO ${flag.iso} before posting about elections, disasters, or nationality.`,
      },
    ];
  }

  const exampleTone = examples[0]?.text ?? `${u} in context`;
  return [
    {
      title: `${emoji.subgroup.replace(/-/g, " ")} chats`,
      body: `${u} belongs to Unicode's ${emoji.subgroup.replace(/-/g, " ")} group. Example tone: "${exampleTone}".`,
    },
    {
      title: "Search and copy",
      body: `The picker label is "${emoji.name}" (${cps}). Copy ${u} from this page when you need the exact character, not a look-alike sticker.`,
    },
    {
      title: "Tone",
      body: `${u} stays informal. Add words in legal, medical, or HR threads even if the visual match is perfect.`,
    },
  ];
};
