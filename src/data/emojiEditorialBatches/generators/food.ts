import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, pick, pickN } from "./shared";

const batchId = "01-food-remaining";

export const generateFoodBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning in Cooking, Cravings, and Food Posts`,
    snippetAnswer: `${u} ${name} marks ${label} in meal planning, restaurant posts, and hunger texts. Food emojis are mostly literal — recipes, cravings, and grocery runs.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) turns food talk into a quick visual. Roommates vote on dinner with ${u}; food bloggers tag ${kw} reels.`,
        `Diet and fitness chats log meals with ${u} — combine with portions if accountability is the goal.`,
        `${label} rarely carries flirt code unless the date plan is explicitly dinner.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [`Send ${u} when cooking, ordering, or craving ${label}.`], 1),
    socialMeaning: pick(emoji.slug, [`${u} tags food photography and review content.`], 2),
    caution: pick(emoji.slug, [`Sensitive around food insecurity — read the room in charity threads.`], 3),
    examples: pickN(emoji.slug, [
      { context: "Craving", text: `Need ${label} ${u}` },
      { context: "Cooking", text: `Making ${label} tonight ${u}` },
      { context: "Rating", text: `10/10 ${label} ${u}` },
    ], 5, 4),
    contextBlocks: pickN(emoji.slug, [
      { title: "Meal planning", body: `${u} on grocery lists and dinner polls.` },
      { title: "Food content", body: `Creators lead captions with ${kw} and ${u}.` },
    ], 2, 5),
    searchIntents: [`${label} emoji meaning`, `${u} food emoji`, `${name} copy paste`],
    whenNotToUse: [`Avoid trivializing hunger crises with ${u} alone.`],
    faqs: [{ question: `What does ${u} mean in texting?`, answer: `Usually ${label} — eating, cooking, or craving ${kw}.` }],
  });
};
