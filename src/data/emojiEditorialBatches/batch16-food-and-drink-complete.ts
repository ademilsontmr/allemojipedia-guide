import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "16-food-and-drink-complete";

/** Completes category 4 — final thin food & drink page. */
export const batch16FoodAndDrinkComplete: Record<string, EmojiBatchEnrichment> = {
  "ear-of-corn": {
    batchId: BATCH_ID,
    searchTitle: "Ear of Corn Emoji (🌽) Meaning: Corn, BBQ, and Summer",
    snippetAnswer:
      "🌽 Ear of Corn means sweet corn — summer BBQs, elote, Midwest farm culture, and 'corny' jokes. Literal food emoji, not the 🌾 wheat stalk.",
    detailedParagraphs: [
      "Ear of Corn (🌽) shows yellow kernels on the cob — Unicode produce emoji for maize, not popcorn 🍿 or canned corn.",
      "US summer threads peak with 🌽: county fairs, grill nights, buttered corn on the cob, and farm stand hauls.",
      "Mexican street food fans tag elote and esquites with 🌽 in captions — often alongside 🌶️ and 🧀.",
      "Internet slang calls bad jokes 'corny' — friends react to puns with '🌽 couldn't help it' self-aware humor.",
    ],
    textingMeaning: "'BBQ sides 🌽', 'farmers market score 🌽', punny 'that was corny 🌽'.",
    socialMeaning: "Food TikTok, Midwest lifestyle creators, and fair season posts lead with 🌽.",
    caution: "🌽 is not 🌾 — wheat/grain discussions need the right emoji. Some regions say maize; emoji reads US 'corn on the cob'.",
    examples: [
      { context: "BBQ", text: "Grilled corn tonight 🌽" },
      { context: "Fair", text: "County fair essentials 🌽" },
      { context: "Elote", text: "Street corn fix 🌽" },
      { context: "Farm", text: "Fresh from the stand 🌽" },
      { context: "Pun", text: "Okay that was corny 🌽" },
    ],
    contextBlocks: [
      { title: "Summer cookouts", body: "🌽 is default side-dish emoji for July–September grill culture in the US." },
      { title: "Elote culture", body: "Latin American street corn posts pair 🌽 with crema, cotija, and chili." },
      { title: "Vs 🌾", body: "🌾 is wheat sheaf/grain harvest. 🌽 is sweet corn on the cob ready to eat." },
    ],
    searchIntents: [
      "corn emoji meaning",
      "🌽 ear of corn",
      "corn emoji copy paste",
      "corn on the cob emoji",
      "🌽 vs 🌾",
    ],
    whenNotToUse: [
      "Do not use 🌽 for wheat or bread grain topics — use 🌾 instead.",
      "Avoid in threads about corn allergies without a text warning.",
    ],
    faqs: [
      {
        question: "What does 🌽 mean in texting?",
        answer: "Usually literal corn — BBQ, fairs, elote, or joking that something was 'corny.'",
      },
      {
        question: "What is the difference between 🌽 and 🌾?",
        answer: "🌽 is corn on the cob (food). 🌾 is wheat/grain stalk — farming and harvest symbol.",
      },
      {
        question: "Does 🌽 mean popcorn?",
        answer: "Not usually — popcorn is 🍿. 🌽 is fresh corn on the cob.",
      },
    ],
  },
};
