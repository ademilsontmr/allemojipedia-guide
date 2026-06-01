import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, pick, pickN } from "./shared";

const batchId = "02-animals-remaining";

export const generateAnimalsBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning in Nature, Pets, and Texting`,
    snippetAnswer: `${u} ${name} tags ${kw} in messages about pets, wildlife, plants, and outdoor life. Animal emojis add personality — cute, wild, or symbolic depending on species reputation.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) helps readers instantly know a message involves ${label}. Pet parents use it in vet updates; hikers use it in trail sightings.`,
        `Metaphorical use borrows the animal's reputation — busy as a bee, quiet as a mouse — but literal animal posts dominate.`,
        `Conservation accounts pair ${u} with habitat facts; meme accounts pair it with jokes. Check which mode the sender uses.`,
      ],
      [
        `Instagram and TikTok nature creators place ${u} in captions for ${kw} photography. Followers expect animal or plant content before reading hashtags.`,
        `Kids' chats love ${u} for homework, zoo trips, and sticker battles — high innocent usage.`,
        `When discussing endangered ${label}, tone should stay respectful — not only cute emoji.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [`${u} in texting usually references ${label} literally or as a playful metaphor.`, `Friends send ${u} with animal videos and pet photos.`], 1),
    socialMeaning: pick(emoji.slug, [`${u} labels ${kw} content in wildlife and pet influencer feeds.`], 2),
    caution: pick(emoji.slug, [`Do not use ${u} to dehumanize people.`, `Wildlife safety: never encourage touching dangerous ${label}.`], 3),
    examples: pickN(emoji.slug, [
      { context: "Pet", text: `Look at this ${label} ${u}` },
      { context: "Nature", text: `Spotted on the trail ${u}` },
      { context: "Cute", text: `Obsessed ${u}` },
      { context: "Zoo", text: `Field trip ${u}` },
      { context: "Metaphor", text: `Feeling like a ${label} today ${u}` },
    ], 5, 4),
    contextBlocks: pickN(emoji.slug, [
      { title: "Pet culture", body: `${u} marks vet visits, adoption days, and pet birthdays.` },
      { title: "Outdoor posts", body: `Trail cameras and birders tag ${kw} with ${u}.` },
      { title: "Education", body: `Teachers use ${u} in biology and ecology units.` },
    ], 3, 5),
    searchIntents: [`${label} emoji meaning`, `${u} meaning`, `${name} copy paste`],
    whenNotToUse: [`Avoid ${u} when mocking people using animal comparisons.`],
    faqs: [{ question: `What does ${u} mean?`, answer: `Usually ${label} — pets, wildlife, plants, or nature content about ${kw}.` }],
  });
};
