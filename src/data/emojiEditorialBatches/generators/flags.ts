import type { Emoji } from "@/data/emojis";
import {
  buildBatch,
  cleanKeywords,
  countryFromFlagSlug,
  humanizeSubgroup,
  pick,
  pickN,
  lowerFirst,
} from "./shared";

const batchId = "08-flags";

export const generateFlagsBatch = (emoji: Emoji) => {
  const country = countryFromFlagSlug(emoji.slug) ?? humanizeSubgroup(emoji.slug.replace(/^flag-/, ""));
  const u = emoji.unicode;
  const kw = cleanKeywords(emoji)[0] ?? country;

  return buildBatch(emoji, batchId, {
    searchTitle: `${country} Flag Emoji (${u}) Meaning, Copy, and When to Use It`,
    snippetAnswer: `${u} is the flag of ${country}. People add it to messages about travel, sports, national holidays, heritage, or location — always pair it with the country name when clarity matters.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `The ${emoji.name} (${u}) encodes ${country} in Unicode flag sequences. During World Cup seasons, Olympic broadcasts, and independence days, ${u} floods comment sections as a visual cheer.`,
        `Diaspora communities use ${u} in WhatsApp family groups when sharing visa news, wedding livestreams from home, or recipes tied to ${country}. It is pride and belonging, not decoration alone.`,
        `Autocorrect and emoji search make wrong-flag mistakes common — double-check you picked ${country} before posting sensitive political or travel content.`,
      ],
      [
        `${u} represents ${country} on Instagram bios, language-learning profiles, and travel vlogs. Creators combine it with city names, airline tags, and event hashtags.`,
        `In international group chats, ${u} helps readers who skim quickly understand which country a story references. Accessibility-wise, write "${country}" in text alongside the flag.`,
        `Some older Android devices render ${u} as two-letter regional indicator codes instead of a colored flag — naming the country avoids confusion.`,
      ],
      [
        `Sports fans lead with ${u} during matches involving ${country}. Travelers pin it to boarding passes screenshots and "just landed" stories.`,
        `Language exchange apps show ${u} next to native speakers from ${country}. It signals locale, not fluent political commentary.`,
        `Avoid using ${u} to mock ${country} or its people during crises — flags carry real emotional weight for diaspora audiences.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `${u} in texting usually means ${country} — travel plans, cheering a team, or telling friends where you are from. Example: "Landing in ${country} tomorrow ${u}".`,
      `Family abroad send ${u} with voice notes and photos from ${country}. It anchors location faster than typing the full country name every message.`,
      `Friends use ${u} when planning trips to ${country} — visas, flights, and hotel pins in one thread.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `On TikTok and Instagram, ${u} tags content about ${country} — food, music, politics, or tourism. Followers expect ${kw} themes when they see the flag first.`,
      `Live event feeds mix languages; ${u} becomes a universal marker for ${country} during global broadcasts.`,
      `Creators in the ${country} diaspora use ${u} in captions about heritage language, holidays, and dual identity.`,
    ], 2),
    caution: pick(emoji.slug, [
      `Using the wrong flag for ${country} is a frequent mistake — verify ${u} before posting about sensitive news.`,
      `Do not use ${u} to impersonate nationality you do not hold in deceptive contexts.`,
      `${u} in formal diplomacy or legal documents should stay text-only — emojis are informal.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Sports", text: `Rooting for ${country} tonight ${u}` },
        { context: "Travel", text: `Just landed in ${country} ${u}` },
        { context: "Heritage", text: `Proud ${country} roots ${u}` },
        { context: "Holiday", text: `Happy national day ${country} ${u}` },
        { context: "Friends abroad", text: `Miss you from ${country} ${u}` },
        { context: "Event", text: `Big day for ${country} ${u}` },
        { context: "Food", text: `Best meal in ${country} ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        {
          title: `Sports and ${country}`,
          body: `${u} spikes during international tournaments when ${country} competes. Fans use it in live threads where speed beats long sentences.`,
        },
        {
          title: "Travel updates",
          body: `Travelers post ${u} with boarding passes and landmark photos so friends know the trip is in ${country}.`,
        },
        {
          title: "Cultural identity",
          body: `Diaspora creators use ${u} when discussing language, food, and holidays tied to ${country} — lightweight pride marker.`,
        },
        {
          title: "Language learning",
          body: `Learners add ${u} to profiles studying languages spoken in ${country}. It signals target locale to exchange partners.`,
        },
        {
          title: "News and solidarity",
          body: `During events affecting ${country}, ${u} appears in support posts — tone should match seriousness of the moment.`,
        },
      ],
      3,
      5
    ),
    searchIntents: [
      `${country} flag emoji`,
      `${u} ${country} flag meaning`,
      `${country} flag emoji copy paste`,
      `${country} flag in texting`,
      `${lowerFirst(country)} flag emoji meaning`,
      `${u} meaning`,
    ],
    whenNotToUse: [
      `Do not use ${u} to ridicule ${country} during disasters or conflict.`,
      `Avoid ${u} alone in official legal correspondence.`,
      `Wrong flag emoji misidentifies ${country} — verify before posting.`,
    ],
    faqs: pickN(
      emoji.slug,
      [
        {
          question: `What country does ${u} represent?`,
          answer: `${u} is the flag emoji for ${country}. Use it when your message is about ${country}, its culture, sports teams, or travel.`,
        },
        {
          question: `How do I copy the ${country} flag emoji?`,
          answer: `Copy ${u} from this page and paste into WhatsApp, iMessage, Instagram, or any app that supports Unicode flags.`,
        },
        {
          question: `Why does ${u} show as letters on some phones?`,
          answer: `Older systems render flags as regional indicator symbols. Type "${country}" in text when the graphic flag does not appear.`,
        },
        {
          question: `Is ${u} political?`,
          answer: `Flags can feel political in sensitive moments. In casual travel and sports chat, ${u} usually means simple national reference.`,
        },
      ],
      3,
      6
    ),
  });
};
