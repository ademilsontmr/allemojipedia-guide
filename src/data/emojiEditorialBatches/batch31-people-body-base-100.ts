import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "31-people-body-base-100";

/** Batch 31 — 100 remaining People base thin slugs (100-slug batch format). */
export const batch31PeopleBodyBase100: Record<string, EmojiBatchEnrichment> = {
  "man-beard": {
    batchId: BATCH_ID,
    searchTitle: "Man: Beard Emoji (🧔‍♂️) Meaning: Beard, Facial Hair",
    snippetAnswer:
      "🧔‍♂️ man beard — Movember, barber, grooming.",
    detailedParagraphs: [
      "Man: Beard (🧔‍♂️) shows man-presenting figure — beard, facial hair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Movember and beard culture contexts.",
    ],
    textingMeaning: "'Beard 🧔‍♂️'",
    socialMeaning: "Movember and beard culture",
    caution: "Not masculinity gatekeeping.",
    examples: [
      { context: "Grooming", text: "🧔‍♂️" },
      { context: "Month", text: "Nov 🧔‍♂️" },
      { context: "Barber", text: "Trim 🧔‍♂️" },
      { context: "Pride", text: "🧔‍♂️" },
      { context: "Natural", text: "Me 🧔‍♂️" },
    ],
    contextBlocks: [
      { title: "Facial hair", body: "Male-presenting beard" },
      { title: "Vs 🧔", body: "Neutral bearded person base." },
    ],
    searchIntents: ["man-beard emoji", "🧔‍♂️ meaning"],
    whenNotToUse: ["Mockery."],
    faqs: [
      { question: "What does 🧔‍♂️ mean?", answer: "Man: Beard — facial hair representation." },
    ],
  },

  "woman-beard": {
    batchId: BATCH_ID,
    searchTitle: "Woman: Beard Emoji (🧔‍♀️) Meaning: Bearded Woman",
    snippetAnswer:
      "🧔‍♀️ bearded woman — inclusive representation; never mock.",
    detailedParagraphs: [
      "Woman: Beard (🧔‍♀️) shows woman-presenting figure — bearded woman.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Body positivity and hirsutism awareness contexts.",
    ],
    textingMeaning: "'Beard 🧔‍♀️'",
    socialMeaning: "Body positivity and hirsutism awareness",
    caution: "NEVER mock — PCOS/medical hair.",
    examples: [
      { context: "Grooming", text: "🧔‍♀️" },
      { context: "Month", text: "Nov 🧔‍♀️" },
      { context: "Barber", text: "Trim 🧔‍♀️" },
      { context: "Pride", text: "🧔‍♀️" },
      { context: "Natural", text: "Me 🧔‍♀️" },
    ],
    contextBlocks: [
      { title: "Facial hair", body: "Inclusive visibility" },
      { title: "Vs 🧔", body: "Neutral bearded person base." },
    ],
    searchIntents: ["woman-beard emoji", "🧔‍♀️ meaning"],
    whenNotToUse: ["Mockery."],
    faqs: [
      { question: "What does 🧔‍♀️ mean?", answer: "Woman: Beard — facial hair representation." },
    ],
  },

  "man-red-hair": {
    batchId: BATCH_ID,
    searchTitle: "Man: Red Hair Emoji (👨‍🦰) Meaning: Red Hair, Ginger",
    snippetAnswer:
      "👨‍🦰 Man red hair — ginger pride, dye, cosplay wig, fair-skin SPF meme.",
    detailedParagraphs: [
      "Man: Red Hair (👨‍🦰) shows man-presenting figure — red hair, ginger.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Redhead community, salon dye, St. Patrick's aesthetic contexts.",
    ],
    textingMeaning: "'red hair 👨‍🦰'",
    socialMeaning: "Redhead community, salon dye, St. Patrick's aesthetic tag 👨‍🦰.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👨‍🦰" },
      { context: "Salon", text: "New 👨‍🦰" },
      { context: "Natural", text: "Born 👨‍🦰" },
      { context: "Pride", text: "Love 👨‍🦰" },
      { context: "Style", text: "Look 👨‍🦰" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "red-hair variant — man presentation." },
      { title: "Vs neutral", body: "See person-red-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["man red hair emoji", "👨‍🦰 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👨‍🦰 mean?", answer: "👨‍🦰 Man red hair" },
    ],
  },

  "man-curly-hair": {
    batchId: BATCH_ID,
    searchTitle: "Man: Curly Hair Emoji (👨‍🦱) Meaning: Curly Hair, Curls",
    snippetAnswer:
      "👨‍🦱 Man curly hair — wash day, curl routine, natural texture pride.",
    detailedParagraphs: [
      "Man: Curly Hair (👨‍🦱) shows man-presenting figure — curly hair, curls.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Curly hair TikTok, deva cut, humidity frizz humor contexts.",
    ],
    textingMeaning: "'curly hair 👨‍🦱'",
    socialMeaning: "Curly hair TikTok, deva cut, humidity frizz humor tag 👨‍🦱.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👨‍🦱" },
      { context: "Salon", text: "New 👨‍🦱" },
      { context: "Natural", text: "Born 👨‍🦱" },
      { context: "Pride", text: "Love 👨‍🦱" },
      { context: "Style", text: "Look 👨‍🦱" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "curly-hair variant — man presentation." },
      { title: "Vs neutral", body: "See person-curly-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["man curly hair emoji", "👨‍🦱 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👨‍🦱 mean?", answer: "👨‍🦱 Man curly hair" },
    ],
  },

  "man-white-hair": {
    batchId: BATCH_ID,
    searchTitle: "Man: White Hair Emoji (👨‍🦳) Meaning: White Hair, Silver",
    snippetAnswer:
      "👨‍🦳 Man white/gray hair — silver fox, aging gracefully, platinum dye.",
    detailedParagraphs: [
      "Man: White Hair (👨‍🦳) shows man-presenting figure — white hair, silver.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Silver hair trend, wisdom meme, graceful aging contexts.",
    ],
    textingMeaning: "'white hair 👨‍🦳'",
    socialMeaning: "Silver hair trend, wisdom meme, graceful aging tag 👨‍🦳.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👨‍🦳" },
      { context: "Salon", text: "New 👨‍🦳" },
      { context: "Natural", text: "Born 👨‍🦳" },
      { context: "Pride", text: "Love 👨‍🦳" },
      { context: "Style", text: "Look 👨‍🦳" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "white-hair variant — man presentation." },
      { title: "Vs neutral", body: "See person-white-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["man white hair emoji", "👨‍🦳 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👨‍🦳 mean?", answer: "👨‍🦳 Man white/gray hair" },
    ],
  },

  "man-bald": {
    batchId: BATCH_ID,
    searchTitle: "Man: Bald Emoji (👨‍🦲) Meaning: Bald, Shaved Head",
    snippetAnswer:
      "👨‍🦲 Man bald — buzz cut, alopecia solidarity, bald pride.",
    detailedParagraphs: [
      "Man: Bald (👨‍🦲) shows man-presenting figure — bald, shaved head.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Shave head charity, bald confidence, chemo empathy contexts.",
    ],
    textingMeaning: "'bald 👨‍🦲'",
    socialMeaning: "Shave head charity, bald confidence, chemo empathy tag 👨‍🦲.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👨‍🦲" },
      { context: "Salon", text: "New 👨‍🦲" },
      { context: "Natural", text: "Born 👨‍🦲" },
      { context: "Pride", text: "Love 👨‍🦲" },
      { context: "Style", text: "Look 👨‍🦲" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "bald variant — man presentation." },
      { title: "Vs neutral", body: "See person-bald for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["man bald emoji", "👨‍🦲 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👨‍🦲 mean?", answer: "👨‍🦲 Man bald" },
    ],
  },

  "woman-red-hair": {
    batchId: BATCH_ID,
    searchTitle: "Woman: Red Hair Emoji (👩‍🦰) Meaning: Red Hair, Ginger",
    snippetAnswer:
      "👩‍🦰 Woman red hair — ginger pride, dye, cosplay wig, fair-skin SPF meme.",
    detailedParagraphs: [
      "Woman: Red Hair (👩‍🦰) shows woman-presenting figure — red hair, ginger.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Redhead community, salon dye, St. Patrick's aesthetic contexts.",
    ],
    textingMeaning: "'red hair 👩‍🦰'",
    socialMeaning: "Redhead community, salon dye, St. Patrick's aesthetic tag 👩‍🦰.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👩‍🦰" },
      { context: "Salon", text: "New 👩‍🦰" },
      { context: "Natural", text: "Born 👩‍🦰" },
      { context: "Pride", text: "Love 👩‍🦰" },
      { context: "Style", text: "Look 👩‍🦰" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "red-hair variant — woman presentation." },
      { title: "Vs neutral", body: "See person-red-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["woman red hair emoji", "👩‍🦰 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👩‍🦰 mean?", answer: "👩‍🦰 Woman red hair" },
    ],
  },

  "woman-curly-hair": {
    batchId: BATCH_ID,
    searchTitle: "Woman: Curly Hair Emoji (👩‍🦱) Meaning: Curly Hair, Curls",
    snippetAnswer:
      "👩‍🦱 Woman curly hair — wash day, curl routine, natural texture pride.",
    detailedParagraphs: [
      "Woman: Curly Hair (👩‍🦱) shows woman-presenting figure — curly hair, curls.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Curly hair TikTok, deva cut, humidity frizz humor contexts.",
    ],
    textingMeaning: "'curly hair 👩‍🦱'",
    socialMeaning: "Curly hair TikTok, deva cut, humidity frizz humor tag 👩‍🦱.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👩‍🦱" },
      { context: "Salon", text: "New 👩‍🦱" },
      { context: "Natural", text: "Born 👩‍🦱" },
      { context: "Pride", text: "Love 👩‍🦱" },
      { context: "Style", text: "Look 👩‍🦱" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "curly-hair variant — woman presentation." },
      { title: "Vs neutral", body: "See person-curly-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["woman curly hair emoji", "👩‍🦱 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👩‍🦱 mean?", answer: "👩‍🦱 Woman curly hair" },
    ],
  },

  "woman-white-hair": {
    batchId: BATCH_ID,
    searchTitle: "Woman: White Hair Emoji (👩‍🦳) Meaning: White Hair, Silver",
    snippetAnswer:
      "👩‍🦳 Woman white/gray hair — silver fox, aging gracefully, platinum dye.",
    detailedParagraphs: [
      "Woman: White Hair (👩‍🦳) shows woman-presenting figure — white hair, silver.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Silver hair trend, wisdom meme, graceful aging contexts.",
    ],
    textingMeaning: "'white hair 👩‍🦳'",
    socialMeaning: "Silver hair trend, wisdom meme, graceful aging tag 👩‍🦳.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👩‍🦳" },
      { context: "Salon", text: "New 👩‍🦳" },
      { context: "Natural", text: "Born 👩‍🦳" },
      { context: "Pride", text: "Love 👩‍🦳" },
      { context: "Style", text: "Look 👩‍🦳" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "white-hair variant — woman presentation." },
      { title: "Vs neutral", body: "See person-white-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["woman white hair emoji", "👩‍🦳 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👩‍🦳 mean?", answer: "👩‍🦳 Woman white/gray hair" },
    ],
  },

  "woman-bald": {
    batchId: BATCH_ID,
    searchTitle: "Woman: Bald Emoji (👩‍🦲) Meaning: Bald, Shaved Head",
    snippetAnswer:
      "👩‍🦲 Woman bald — buzz cut, alopecia solidarity, bald pride.",
    detailedParagraphs: [
      "Woman: Bald (👩‍🦲) shows woman-presenting figure — bald, shaved head.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Shave head charity, bald confidence, chemo empathy contexts.",
    ],
    textingMeaning: "'bald 👩‍🦲'",
    socialMeaning: "Shave head charity, bald confidence, chemo empathy tag 👩‍🦲.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👩‍🦲" },
      { context: "Salon", text: "New 👩‍🦲" },
      { context: "Natural", text: "Born 👩‍🦲" },
      { context: "Pride", text: "Love 👩‍🦲" },
      { context: "Style", text: "Look 👩‍🦲" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "bald variant — woman presentation." },
      { title: "Vs neutral", body: "See person-bald for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["woman bald emoji", "👩‍🦲 meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👩‍🦲 mean?", answer: "👩‍🦲 Woman bald" },
    ],
  },

  "woman-blond-hair": {
    batchId: BATCH_ID,
    searchTitle: "Woman: Blond Hair Emoji (👱‍♀️) Meaning: Blond Hair",
    snippetAnswer:
      "👱‍♀️ Woman blond hair — salon highlights, surfer aesthetic, hair color.",
    detailedParagraphs: [
      "Woman: Blond Hair (👱‍♀️) shows woman-presenting figure — blond hair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Balayage reveals, beach blond, hair transformation contexts.",
    ],
    textingMeaning: "'blond hair 👱‍♀️'",
    socialMeaning: "Balayage reveals, beach blond, hair transformation tag 👱‍♀️.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👱‍♀️" },
      { context: "Salon", text: "New 👱‍♀️" },
      { context: "Natural", text: "Born 👱‍♀️" },
      { context: "Pride", text: "Love 👱‍♀️" },
      { context: "Style", text: "Look 👱‍♀️" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "blond-hair variant — woman presentation." },
      { title: "Vs neutral", body: "See person-blond-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["woman blond hair emoji", "👱‍♀️ meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👱‍♀️ mean?", answer: "👱‍♀️ Woman blond hair" },
    ],
  },

  "man-blond-hair": {
    batchId: BATCH_ID,
    searchTitle: "Man: Blond Hair Emoji (👱‍♂️) Meaning: Blond Hair",
    snippetAnswer:
      "👱‍♂️ Man blond hair — salon highlights, surfer aesthetic, hair color.",
    detailedParagraphs: [
      "Man: Blond Hair (👱‍♂️) shows man-presenting figure — blond hair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Balayage reveals, beach blond, hair transformation contexts.",
    ],
    textingMeaning: "'blond hair 👱‍♂️'",
    socialMeaning: "Balayage reveals, beach blond, hair transformation tag 👱‍♂️.",
    caution: "Avoid hair color stereotypes and slurs.",
    examples: [
      { context: "Hair", text: "👱‍♂️" },
      { context: "Salon", text: "New 👱‍♂️" },
      { context: "Natural", text: "Born 👱‍♂️" },
      { context: "Pride", text: "Love 👱‍♂️" },
      { context: "Style", text: "Look 👱‍♂️" },
    ],
    contextBlocks: [
      { title: "Hair color", body: "blond-hair variant — man presentation." },
      { title: "Vs neutral", body: "See person-blond-hair for neutral base." },
      { title: "Representation", body: "Hair diversity in emoji keyboard." },
    ],
    searchIntents: ["man blond hair emoji", "👱‍♂️ meaning"],
    whenNotToUse: ["Mocking natural hair.", "Regional slurs for red hair."],
    faqs: [
      { question: "What does 👱‍♂️ mean?", answer: "👱‍♂️ Man blond hair" },
    ],
  },

  "man-frowning": {
    batchId: BATCH_ID,
    searchTitle: "Man Frowning Emoji (🙍‍♂️) Meaning: Frowning, Displeasure",
    snippetAnswer:
      "🙍‍♂️ Man frowning — disapproval, bad news reaction, disappointed face.",
    detailedParagraphs: [
      "Man Frowning (🙍‍♂️) shows man-presenting figure — frowning, displeasure.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Reaction posts and meme replies contexts.",
    ],
    textingMeaning: "'Mood 🙍‍♂️'",
    socialMeaning: "Reaction posts and meme replies",
    caution: "Context defines severity — not always serious anger.",
    examples: [
      { context: "Mood", text: "🙍‍♂️" },
      { context: "News", text: "Ugh 🙍‍♂️" },
      { context: "Sulk", text: "Fine 🙍‍♂️" },
      { context: "React", text: "🙍‍♂️" },
      { context: "Disapprove", text: "Nope 🙍‍♂️" },
    ],
    contextBlocks: [
      { title: "Gesture", body: "Frowning, Displeasure" },
      { title: "Vs person-*", body: "See person-frowning neutral form." },
    ],
    searchIntents: ["man-frowning emoji", "🙍‍♂️ meaning"],
    whenNotToUse: ["Mocking someone's valid upset."],
    faqs: [
      { question: "What does 🙍‍♂️ mean?", answer: "🙍‍♂️ Man frowning — disapproval, bad news reaction, disappointed face." },
    ],
  },

  "woman-frowning": {
    batchId: BATCH_ID,
    searchTitle: "Woman Frowning Emoji (🙍‍♀️) Meaning: Frowning, Displeasure",
    snippetAnswer:
      "🙍‍♀️ Woman frowning — disapproval, bad news reaction, disappointed face.",
    detailedParagraphs: [
      "Woman Frowning (🙍‍♀️) shows woman-presenting figure — frowning, displeasure.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Reaction posts and meme replies contexts.",
    ],
    textingMeaning: "'Mood 🙍‍♀️'",
    socialMeaning: "Reaction posts and meme replies",
    caution: "Context defines severity — not always serious anger.",
    examples: [
      { context: "Mood", text: "🙍‍♀️" },
      { context: "News", text: "Ugh 🙍‍♀️" },
      { context: "Sulk", text: "Fine 🙍‍♀️" },
      { context: "React", text: "🙍‍♀️" },
      { context: "Disapprove", text: "Nope 🙍‍♀️" },
    ],
    contextBlocks: [
      { title: "Gesture", body: "Frowning, Displeasure" },
      { title: "Vs person-*", body: "See person-frowning neutral form." },
    ],
    searchIntents: ["woman-frowning emoji", "🙍‍♀️ meaning"],
    whenNotToUse: ["Mocking someone's valid upset."],
    faqs: [
      { question: "What does 🙍‍♀️ mean?", answer: "🙍‍♀️ Woman frowning — disapproval, bad news reaction, disappointed face." },
    ],
  },

  "man-pouting": {
    batchId: BATCH_ID,
    searchTitle: "Man Pouting Emoji (🙎‍♂️) Meaning: Pouting, Sulk",
    snippetAnswer:
      "🙎‍♂️ Man pouting — sulk, petty mood, cute anger meme.",
    detailedParagraphs: [
      "Man Pouting (🙎‍♂️) shows man-presenting figure — pouting, sulk.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Reaction posts and meme replies contexts.",
    ],
    textingMeaning: "'Mood 🙎‍♂️'",
    socialMeaning: "Reaction posts and meme replies",
    caution: "Context defines severity — not always serious anger.",
    examples: [
      { context: "Mood", text: "🙎‍♂️" },
      { context: "News", text: "Ugh 🙎‍♂️" },
      { context: "Sulk", text: "Fine 🙎‍♂️" },
      { context: "React", text: "🙎‍♂️" },
      { context: "Disapprove", text: "Nope 🙎‍♂️" },
    ],
    contextBlocks: [
      { title: "Gesture", body: "Pouting, Sulk" },
      { title: "Vs person-*", body: "See person-pouting neutral form." },
    ],
    searchIntents: ["man-pouting emoji", "🙎‍♂️ meaning"],
    whenNotToUse: ["Mocking someone's valid upset."],
    faqs: [
      { question: "What does 🙎‍♂️ mean?", answer: "🙎‍♂️ Man pouting — sulk, petty mood, cute anger meme." },
    ],
  },

  "woman-pouting": {
    batchId: BATCH_ID,
    searchTitle: "Woman Pouting Emoji (🙎‍♀️) Meaning: Pouting, Sulk",
    snippetAnswer:
      "🙎‍♀️ Woman pouting — sulk, petty mood, cute anger meme.",
    detailedParagraphs: [
      "Woman Pouting (🙎‍♀️) shows woman-presenting figure — pouting, sulk.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Reaction posts and meme replies contexts.",
    ],
    textingMeaning: "'Mood 🙎‍♀️'",
    socialMeaning: "Reaction posts and meme replies",
    caution: "Context defines severity — not always serious anger.",
    examples: [
      { context: "Mood", text: "🙎‍♀️" },
      { context: "News", text: "Ugh 🙎‍♀️" },
      { context: "Sulk", text: "Fine 🙎‍♀️" },
      { context: "React", text: "🙎‍♀️" },
      { context: "Disapprove", text: "Nope 🙎‍♀️" },
    ],
    contextBlocks: [
      { title: "Gesture", body: "Pouting, Sulk" },
      { title: "Vs person-*", body: "See person-pouting neutral form." },
    ],
    searchIntents: ["woman-pouting emoji", "🙎‍♀️ meaning"],
    whenNotToUse: ["Mocking someone's valid upset."],
    faqs: [
      { question: "What does 🙎‍♀️ mean?", answer: "🙎‍♀️ Woman pouting — sulk, petty mood, cute anger meme." },
    ],
  },

  "man-wearing-turban": {
    batchId: BATCH_ID,
    searchTitle: "Man Wearing Turban Emoji (👳‍♂️) Meaning: Turban, Cultural Headwear",
    snippetAnswer:
      "👳‍♂️ Man wearing turban — Sikh/cultural headwear; use respectfully, not costume.",
    detailedParagraphs: [
      "Man Wearing Turban (👳‍♂️) shows man-presenting figure — turban, cultural headwear.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cultural and religious representation contexts.",
    ],
    textingMeaning: "'Turban 👳‍♂️'",
    socialMeaning: "Cultural and religious representation",
    caution: "Sacred for Sikhs — learn before posting.",
    examples: [
      { context: "Culture", text: "👳‍♂️" },
      { context: "Respect", text: "👳‍♂️" },
      { context: "Heritage", text: "👳‍♂️" },
      { context: "Vaisakhi", text: "👳‍♂️" },
      { context: "Learn", text: "👳‍♂️" },
    ],
    contextBlocks: [
      { title: "Turban", body: "Religious/cultural weight" },
      { title: "Vs 👳 person-*", body: "Neutral turban form." },
    ],
    searchIntents: ["man-wearing-turban emoji", "👳‍♂️ meaning"],
    whenNotToUse: ["Costume mockery.", "Stereotyping."],
    faqs: [
      { question: "What does 👳‍♂️ mean?", answer: "Turban headwear — respectful cultural/religious use." },
    ],
  },

  "woman-wearing-turban": {
    batchId: BATCH_ID,
    searchTitle: "Woman Wearing Turban Emoji (👳‍♀️) Meaning: Turban, Cultural Headwear",
    snippetAnswer:
      "👳‍♀️ Woman wearing turban — Sikh/cultural headwear; use respectfully, not costume.",
    detailedParagraphs: [
      "Woman Wearing Turban (👳‍♀️) shows woman-presenting figure — turban, cultural headwear.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cultural and religious representation contexts.",
    ],
    textingMeaning: "'Turban 👳‍♀️'",
    socialMeaning: "Cultural and religious representation",
    caution: "Sacred for Sikhs — learn before posting.",
    examples: [
      { context: "Culture", text: "👳‍♀️" },
      { context: "Respect", text: "👳‍♀️" },
      { context: "Heritage", text: "👳‍♀️" },
      { context: "Vaisakhi", text: "👳‍♀️" },
      { context: "Learn", text: "👳‍♀️" },
    ],
    contextBlocks: [
      { title: "Turban", body: "Religious/cultural weight" },
      { title: "Vs 👳 person-*", body: "Neutral turban form." },
    ],
    searchIntents: ["woman-wearing-turban emoji", "👳‍♀️ meaning"],
    whenNotToUse: ["Costume mockery.", "Stereotyping."],
    faqs: [
      { question: "What does 👳‍♀️ mean?", answer: "Turban headwear — respectful cultural/religious use." },
    ],
  },

  "man-in-tuxedo": {
    batchId: BATCH_ID,
    searchTitle: "Man In Tuxedo Emoji (🤵‍♂️) Meaning: Tuxedo, Formal",
    snippetAnswer:
      "🤵‍♂️ Man in tuxedo — black tie, wedding, prom formal wear.",
    detailedParagraphs: [
      "Man In Tuxedo (🤵‍♂️) shows man-presenting figure — tuxedo, formal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Wedding and gala content contexts.",
    ],
    textingMeaning: "'Formal 🤵‍♂️'",
    socialMeaning: "Wedding and gala content",
    caution: "Formal wear not gender-exclusive.",
    examples: [
      { context: "Wedding", text: "🤵‍♂️" },
      { context: "Prom", text: "🤵‍♂️" },
      { context: "Gala", text: "🤵‍♂️" },
      { context: "Black tie", text: "🤵‍♂️" },
      { context: "Suited", text: "🤵‍♂️" },
    ],
    contextBlocks: [
      { title: "Formal", body: "Tuxedo event" },
      { title: "Vs 🤵 person-*", body: "Neutral tux form." },
    ],
    searchIntents: ["man-in-tuxedo emoji", "🤵‍♂️ meaning"],
    whenNotToUse: ["Gender gatekeeping formal wear."],
    faqs: [
      { question: "What does 🤵‍♂️ mean?", answer: "Formal tuxedo — wedding, prom, black tie." },
    ],
  },

  "woman-in-tuxedo": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Tuxedo Emoji (🤵‍♀️) Meaning: Tuxedo, Formal",
    snippetAnswer:
      "🤵‍♀️ Woman in tuxedo — black tie, wedding, prom formal wear.",
    detailedParagraphs: [
      "Woman In Tuxedo (🤵‍♀️) shows woman-presenting figure — tuxedo, formal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Wedding and gala content contexts.",
    ],
    textingMeaning: "'Formal 🤵‍♀️'",
    socialMeaning: "Wedding and gala content",
    caution: "Formal wear not gender-exclusive.",
    examples: [
      { context: "Wedding", text: "🤵‍♀️" },
      { context: "Prom", text: "🤵‍♀️" },
      { context: "Gala", text: "🤵‍♀️" },
      { context: "Black tie", text: "🤵‍♀️" },
      { context: "Suited", text: "🤵‍♀️" },
    ],
    contextBlocks: [
      { title: "Formal", body: "Tuxedo event" },
      { title: "Vs 🤵 person-*", body: "Neutral tux form." },
    ],
    searchIntents: ["woman-in-tuxedo emoji", "🤵‍♀️ meaning"],
    whenNotToUse: ["Gender gatekeeping formal wear."],
    faqs: [
      { question: "What does 🤵‍♀️ mean?", answer: "Formal tuxedo — wedding, prom, black tie." },
    ],
  },

  "man-with-veil": {
    batchId: BATCH_ID,
    searchTitle: "Man With Veil Emoji (👰‍♂️) Meaning: Veil, Bridal",
    snippetAnswer:
      "👰‍♂️ Man with veil — bride, wedding veil, marriage celebration.",
    detailedParagraphs: [
      "Man With Veil (👰‍♂️) shows man-presenting figure — veil, bridal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Bridal and wedding content contexts.",
    ],
    textingMeaning: "'Bride 👰‍♂️'",
    socialMeaning: "Bridal and wedding content",
    caution: "Not all weddings use veils.",
    examples: [
      { context: "Wedding", text: "👰‍♂️" },
      { context: "Bride", text: "👰‍♂️" },
      { context: "Engaged", text: "👰‍♂️" },
      { context: "Shower", text: "👰‍♂️" },
      { context: "Love", text: "👰‍♂️" },
    ],
    contextBlocks: [
      { title: "Bridal", body: "Wedding veil" },
      { title: "Vs 👰 person-*", body: "Neutral veil form." },
    ],
    searchIntents: ["man-with-veil emoji", "👰‍♂️ meaning"],
    whenNotToUse: ["Marriage pressure narratives."],
    faqs: [
      { question: "What does 👰‍♂️ mean?", answer: "Person with wedding veil — bridal posts." },
    ],
  },

  "woman-with-veil": {
    batchId: BATCH_ID,
    searchTitle: "Woman With Veil Emoji (👰‍♀️) Meaning: Veil, Bridal",
    snippetAnswer:
      "👰‍♀️ Woman with veil — bride, wedding veil, marriage celebration.",
    detailedParagraphs: [
      "Woman With Veil (👰‍♀️) shows woman-presenting figure — veil, bridal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Bridal and wedding content contexts.",
    ],
    textingMeaning: "'Bride 👰‍♀️'",
    socialMeaning: "Bridal and wedding content",
    caution: "Not all weddings use veils.",
    examples: [
      { context: "Wedding", text: "👰‍♀️" },
      { context: "Bride", text: "👰‍♀️" },
      { context: "Engaged", text: "👰‍♀️" },
      { context: "Shower", text: "👰‍♀️" },
      { context: "Love", text: "👰‍♀️" },
    ],
    contextBlocks: [
      { title: "Bridal", body: "Wedding veil" },
      { title: "Vs 👰 person-*", body: "Neutral veil form." },
    ],
    searchIntents: ["woman-with-veil emoji", "👰‍♀️ meaning"],
    whenNotToUse: ["Marriage pressure narratives."],
    faqs: [
      { question: "What does 👰‍♀️ mean?", answer: "Person with wedding veil — bridal posts." },
    ],
  },

  "man-superhero": {
    batchId: BATCH_ID,
    searchTitle: "Man Superhero Emoji (🦸‍♂️) Meaning: Superhero, Hero",
    snippetAnswer:
      "🦸‍♂️ Man superhero — Marvel energy, hero arc, cosplay, save the day.",
    detailedParagraphs: [
      "Man Superhero (🦸‍♂️) shows man-presenting figure — superhero, hero.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in MCU hype, Halloween hero costumes contexts.",
    ],
    textingMeaning: "'superhero 🦸‍♂️'",
    socialMeaning: "MCU hype, Halloween hero costumes tag 🦸‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🦸‍♂️" },
      { context: "Meme", text: "Arc 🦸‍♂️" },
      { context: "Halloween", text: "🦸‍♂️" },
      { context: "Fandom", text: "🦸‍♂️" },
      { context: "Fantasy", text: "🦸‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Superhero, Hero" },
      { title: "Vs neutral", body: "See superhero for gender-neutral base." },
    ],
    searchIntents: ["man-superhero emoji", "🦸‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🦸‍♂️ mean?", answer: "🦸‍♂️ Man superhero — Marvel energy, hero arc, cosplay, save the day." },
    ],
  },

  "woman-superhero": {
    batchId: BATCH_ID,
    searchTitle: "Woman Superhero Emoji (🦸‍♀️) Meaning: Superhero, Hero",
    snippetAnswer:
      "🦸‍♀️ Woman superhero — Marvel energy, hero arc, cosplay, save the day.",
    detailedParagraphs: [
      "Woman Superhero (🦸‍♀️) shows woman-presenting figure — superhero, hero.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in MCU hype, Halloween hero costumes contexts.",
    ],
    textingMeaning: "'superhero 🦸‍♀️'",
    socialMeaning: "MCU hype, Halloween hero costumes tag 🦸‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🦸‍♀️" },
      { context: "Meme", text: "Arc 🦸‍♀️" },
      { context: "Halloween", text: "🦸‍♀️" },
      { context: "Fandom", text: "🦸‍♀️" },
      { context: "Fantasy", text: "🦸‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Superhero, Hero" },
      { title: "Vs neutral", body: "See superhero for gender-neutral base." },
    ],
    searchIntents: ["woman-superhero emoji", "🦸‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🦸‍♀️ mean?", answer: "🦸‍♀️ Woman superhero — Marvel energy, hero arc, cosplay, save the day." },
    ],
  },

  "man-supervillain": {
    batchId: BATCH_ID,
    searchTitle: "Man Supervillain Emoji (🦹‍♂️) Meaning: Supervillain, Villain Arc",
    snippetAnswer:
      "🦹‍♂️ Man supervillain — chaos meme, villain arc, antagonist cosplay.",
    detailedParagraphs: [
      "Man Supervillain (🦹‍♂️) shows man-presenting figure — supervillain, villain arc.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Villain arc TikTok, comic con contexts.",
    ],
    textingMeaning: "'supervillain 🦹‍♂️'",
    socialMeaning: "Villain arc TikTok, comic con tag 🦹‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🦹‍♂️" },
      { context: "Meme", text: "Arc 🦹‍♂️" },
      { context: "Halloween", text: "🦹‍♂️" },
      { context: "Fandom", text: "🦹‍♂️" },
      { context: "Fantasy", text: "🦹‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Supervillain, Villain Arc" },
      { title: "Vs neutral", body: "See supervillain for gender-neutral base." },
    ],
    searchIntents: ["man-supervillain emoji", "🦹‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🦹‍♂️ mean?", answer: "🦹‍♂️ Man supervillain — chaos meme, villain arc, antagonist cosplay." },
    ],
  },

  "woman-supervillain": {
    batchId: BATCH_ID,
    searchTitle: "Woman Supervillain Emoji (🦹‍♀️) Meaning: Supervillain, Villain Arc",
    snippetAnswer:
      "🦹‍♀️ Woman supervillain — chaos meme, villain arc, antagonist cosplay.",
    detailedParagraphs: [
      "Woman Supervillain (🦹‍♀️) shows woman-presenting figure — supervillain, villain arc.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Villain arc TikTok, comic con contexts.",
    ],
    textingMeaning: "'supervillain 🦹‍♀️'",
    socialMeaning: "Villain arc TikTok, comic con tag 🦹‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🦹‍♀️" },
      { context: "Meme", text: "Arc 🦹‍♀️" },
      { context: "Halloween", text: "🦹‍♀️" },
      { context: "Fandom", text: "🦹‍♀️" },
      { context: "Fantasy", text: "🦹‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Supervillain, Villain Arc" },
      { title: "Vs neutral", body: "See supervillain for gender-neutral base." },
    ],
    searchIntents: ["woman-supervillain emoji", "🦹‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🦹‍♀️ mean?", answer: "🦹‍♀️ Woman supervillain — chaos meme, villain arc, antagonist cosplay." },
    ],
  },

  "man-mage": {
    batchId: BATCH_ID,
    searchTitle: "Man Mage Emoji (🧙‍♂️) Meaning: Mage, Wizard",
    snippetAnswer:
      "🧙‍♂️ Man mage — D&D wizard, Harry Potter, spellcaster RPG.",
    detailedParagraphs: [
      "Man Mage (🧙‍♂️) shows man-presenting figure — mage, wizard.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in TTRPG and fantasy fandom contexts.",
    ],
    textingMeaning: "'mage 🧙‍♂️'",
    socialMeaning: "TTRPG and fantasy fandom tag 🧙‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧙‍♂️" },
      { context: "Meme", text: "Arc 🧙‍♂️" },
      { context: "Halloween", text: "🧙‍♂️" },
      { context: "Fandom", text: "🧙‍♂️" },
      { context: "Fantasy", text: "🧙‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Mage, Wizard" },
      { title: "Vs neutral", body: "See mage for gender-neutral base." },
    ],
    searchIntents: ["man-mage emoji", "🧙‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧙‍♂️ mean?", answer: "🧙‍♂️ Man mage — D&D wizard, Harry Potter, spellcaster RPG." },
    ],
  },

  "woman-mage": {
    batchId: BATCH_ID,
    searchTitle: "Woman Mage Emoji (🧙‍♀️) Meaning: Mage, Wizard",
    snippetAnswer:
      "🧙‍♀️ Woman mage — D&D wizard, Harry Potter, spellcaster RPG.",
    detailedParagraphs: [
      "Woman Mage (🧙‍♀️) shows woman-presenting figure — mage, wizard.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in TTRPG and fantasy fandom contexts.",
    ],
    textingMeaning: "'mage 🧙‍♀️'",
    socialMeaning: "TTRPG and fantasy fandom tag 🧙‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧙‍♀️" },
      { context: "Meme", text: "Arc 🧙‍♀️" },
      { context: "Halloween", text: "🧙‍♀️" },
      { context: "Fandom", text: "🧙‍♀️" },
      { context: "Fantasy", text: "🧙‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Mage, Wizard" },
      { title: "Vs neutral", body: "See mage for gender-neutral base." },
    ],
    searchIntents: ["woman-mage emoji", "🧙‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧙‍♀️ mean?", answer: "🧙‍♀️ Woman mage — D&D wizard, Harry Potter, spellcaster RPG." },
    ],
  },

  "man-fairy": {
    batchId: BATCH_ID,
    searchTitle: "Man Fairy Emoji (🧚‍♂️) Meaning: Fairy, Fantasy",
    snippetAnswer:
      "🧚‍♂️ Man fairy — wings aesthetic, enchanted forest, fantasy romance.",
    detailedParagraphs: [
      "Man Fairy (🧚‍♂️) shows man-presenting figure — fairy, fantasy.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Fantasy booktok and cosplay contexts.",
    ],
    textingMeaning: "'fairy 🧚‍♂️'",
    socialMeaning: "Fantasy booktok and cosplay tag 🧚‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧚‍♂️" },
      { context: "Meme", text: "Arc 🧚‍♂️" },
      { context: "Halloween", text: "🧚‍♂️" },
      { context: "Fandom", text: "🧚‍♂️" },
      { context: "Fantasy", text: "🧚‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Fairy, Fantasy" },
      { title: "Vs neutral", body: "See fairy for gender-neutral base." },
    ],
    searchIntents: ["man-fairy emoji", "🧚‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧚‍♂️ mean?", answer: "🧚‍♂️ Man fairy — wings aesthetic, enchanted forest, fantasy romance." },
    ],
  },

  "woman-fairy": {
    batchId: BATCH_ID,
    searchTitle: "Woman Fairy Emoji (🧚‍♀️) Meaning: Fairy, Fantasy",
    snippetAnswer:
      "🧚‍♀️ Woman fairy — wings aesthetic, enchanted forest, fantasy romance.",
    detailedParagraphs: [
      "Woman Fairy (🧚‍♀️) shows woman-presenting figure — fairy, fantasy.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Fantasy booktok and cosplay contexts.",
    ],
    textingMeaning: "'fairy 🧚‍♀️'",
    socialMeaning: "Fantasy booktok and cosplay tag 🧚‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧚‍♀️" },
      { context: "Meme", text: "Arc 🧚‍♀️" },
      { context: "Halloween", text: "🧚‍♀️" },
      { context: "Fandom", text: "🧚‍♀️" },
      { context: "Fantasy", text: "🧚‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Fairy, Fantasy" },
      { title: "Vs neutral", body: "See fairy for gender-neutral base." },
    ],
    searchIntents: ["woman-fairy emoji", "🧚‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧚‍♀️ mean?", answer: "🧚‍♀️ Woman fairy — wings aesthetic, enchanted forest, fantasy romance." },
    ],
  },

  "man-vampire": {
    batchId: BATCH_ID,
    searchTitle: "Man Vampire Emoji (🧛‍♂️) Meaning: Vampire, Halloween",
    snippetAnswer:
      "🧛‍♂️ Man vampire — Halloween, goth aesthetic, Twilight era nostalgia.",
    detailedParagraphs: [
      "Man Vampire (🧛‍♂️) shows man-presenting figure — vampire, halloween.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Spooky season and goth culture contexts.",
    ],
    textingMeaning: "'vampire 🧛‍♂️'",
    socialMeaning: "Spooky season and goth culture tag 🧛‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧛‍♂️" },
      { context: "Meme", text: "Arc 🧛‍♂️" },
      { context: "Halloween", text: "🧛‍♂️" },
      { context: "Fandom", text: "🧛‍♂️" },
      { context: "Fantasy", text: "🧛‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Vampire, Halloween" },
      { title: "Vs neutral", body: "See vampire for gender-neutral base." },
    ],
    searchIntents: ["man-vampire emoji", "🧛‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧛‍♂️ mean?", answer: "🧛‍♂️ Man vampire — Halloween, goth aesthetic, Twilight era nostalgia." },
    ],
  },

  "woman-vampire": {
    batchId: BATCH_ID,
    searchTitle: "Woman Vampire Emoji (🧛‍♀️) Meaning: Vampire, Halloween",
    snippetAnswer:
      "🧛‍♀️ Woman vampire — Halloween, goth aesthetic, Twilight era nostalgia.",
    detailedParagraphs: [
      "Woman Vampire (🧛‍♀️) shows woman-presenting figure — vampire, halloween.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Spooky season and goth culture contexts.",
    ],
    textingMeaning: "'vampire 🧛‍♀️'",
    socialMeaning: "Spooky season and goth culture tag 🧛‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧛‍♀️" },
      { context: "Meme", text: "Arc 🧛‍♀️" },
      { context: "Halloween", text: "🧛‍♀️" },
      { context: "Fandom", text: "🧛‍♀️" },
      { context: "Fantasy", text: "🧛‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Vampire, Halloween" },
      { title: "Vs neutral", body: "See vampire for gender-neutral base." },
    ],
    searchIntents: ["woman-vampire emoji", "🧛‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧛‍♀️ mean?", answer: "🧛‍♀️ Woman vampire — Halloween, goth aesthetic, Twilight era nostalgia." },
    ],
  },

  "man-elf": {
    batchId: BATCH_ID,
    searchTitle: "Man Elf Emoji (🧝‍♂️) Meaning: Elf, Christmas Fantasy",
    snippetAnswer:
      "🧝‍♂️ Man elf — Christmas helper, LOTR, pointy ears cosplay.",
    detailedParagraphs: [
      "Man Elf (🧝‍♂️) shows man-presenting figure — elf, christmas fantasy.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Holiday and fantasy RPG contexts.",
    ],
    textingMeaning: "'elf 🧝‍♂️'",
    socialMeaning: "Holiday and fantasy RPG tag 🧝‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧝‍♂️" },
      { context: "Meme", text: "Arc 🧝‍♂️" },
      { context: "Halloween", text: "🧝‍♂️" },
      { context: "Fandom", text: "🧝‍♂️" },
      { context: "Fantasy", text: "🧝‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Elf, Christmas Fantasy" },
      { title: "Vs neutral", body: "See elf for gender-neutral base." },
    ],
    searchIntents: ["man-elf emoji", "🧝‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧝‍♂️ mean?", answer: "🧝‍♂️ Man elf — Christmas helper, LOTR, pointy ears cosplay." },
    ],
  },

  "woman-elf": {
    batchId: BATCH_ID,
    searchTitle: "Woman Elf Emoji (🧝‍♀️) Meaning: Elf, Christmas Fantasy",
    snippetAnswer:
      "🧝‍♀️ Woman elf — Christmas helper, LOTR, pointy ears cosplay.",
    detailedParagraphs: [
      "Woman Elf (🧝‍♀️) shows woman-presenting figure — elf, christmas fantasy.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Holiday and fantasy RPG contexts.",
    ],
    textingMeaning: "'elf 🧝‍♀️'",
    socialMeaning: "Holiday and fantasy RPG tag 🧝‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧝‍♀️" },
      { context: "Meme", text: "Arc 🧝‍♀️" },
      { context: "Halloween", text: "🧝‍♀️" },
      { context: "Fandom", text: "🧝‍♀️" },
      { context: "Fantasy", text: "🧝‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Elf, Christmas Fantasy" },
      { title: "Vs neutral", body: "See elf for gender-neutral base." },
    ],
    searchIntents: ["woman-elf emoji", "🧝‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧝‍♀️ mean?", answer: "🧝‍♀️ Woman elf — Christmas helper, LOTR, pointy ears cosplay." },
    ],
  },

  "man-genie": {
    batchId: BATCH_ID,
    searchTitle: "Man Genie Emoji (🧞‍♂️) Meaning: Genie, Wishes",
    snippetAnswer:
      "🧞‍♂️ Man genie — Aladdin, three wishes joke, lamp magic.",
    detailedParagraphs: [
      "Man Genie (🧞‍♂️) shows man-presenting figure — genie, wishes.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Disney and wish-granting memes contexts.",
    ],
    textingMeaning: "'genie 🧞‍♂️'",
    socialMeaning: "Disney and wish-granting memes tag 🧞‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧞‍♂️" },
      { context: "Meme", text: "Arc 🧞‍♂️" },
      { context: "Halloween", text: "🧞‍♂️" },
      { context: "Fandom", text: "🧞‍♂️" },
      { context: "Fantasy", text: "🧞‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Genie, Wishes" },
      { title: "Vs neutral", body: "See genie for gender-neutral base." },
    ],
    searchIntents: ["man-genie emoji", "🧞‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧞‍♂️ mean?", answer: "🧞‍♂️ Man genie — Aladdin, three wishes joke, lamp magic." },
    ],
  },

  "woman-genie": {
    batchId: BATCH_ID,
    searchTitle: "Woman Genie Emoji (🧞‍♀️) Meaning: Genie, Wishes",
    snippetAnswer:
      "🧞‍♀️ Woman genie — Aladdin, three wishes joke, lamp magic.",
    detailedParagraphs: [
      "Woman Genie (🧞‍♀️) shows woman-presenting figure — genie, wishes.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Disney and wish-granting memes contexts.",
    ],
    textingMeaning: "'genie 🧞‍♀️'",
    socialMeaning: "Disney and wish-granting memes tag 🧞‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧞‍♀️" },
      { context: "Meme", text: "Arc 🧞‍♀️" },
      { context: "Halloween", text: "🧞‍♀️" },
      { context: "Fandom", text: "🧞‍♀️" },
      { context: "Fantasy", text: "🧞‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Genie, Wishes" },
      { title: "Vs neutral", body: "See genie for gender-neutral base." },
    ],
    searchIntents: ["woman-genie emoji", "🧞‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧞‍♀️ mean?", answer: "🧞‍♀️ Woman genie — Aladdin, three wishes joke, lamp magic." },
    ],
  },

  "man-zombie": {
    batchId: BATCH_ID,
    searchTitle: "Man Zombie Emoji (🧟‍♂️) Meaning: Zombie, Undead",
    snippetAnswer:
      "🧟‍♂️ Man zombie — Halloween, exhaustion zombie mode, horror.",
    detailedParagraphs: [
      "Man Zombie (🧟‍♂️) shows man-presenting figure — zombie, undead.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Horror fandom and tired Monday memes contexts.",
    ],
    textingMeaning: "'zombie 🧟‍♂️'",
    socialMeaning: "Horror fandom and tired Monday memes tag 🧟‍♂️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧟‍♂️" },
      { context: "Meme", text: "Arc 🧟‍♂️" },
      { context: "Halloween", text: "🧟‍♂️" },
      { context: "Fandom", text: "🧟‍♂️" },
      { context: "Fantasy", text: "🧟‍♂️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Zombie, Undead" },
      { title: "Vs neutral", body: "See zombie for gender-neutral base." },
    ],
    searchIntents: ["man-zombie emoji", "🧟‍♂️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧟‍♂️ mean?", answer: "🧟‍♂️ Man zombie — Halloween, exhaustion zombie mode, horror." },
    ],
  },

  "woman-zombie": {
    batchId: BATCH_ID,
    searchTitle: "Woman Zombie Emoji (🧟‍♀️) Meaning: Zombie, Undead",
    snippetAnswer:
      "🧟‍♀️ Woman zombie — Halloween, exhaustion zombie mode, horror.",
    detailedParagraphs: [
      "Woman Zombie (🧟‍♀️) shows woman-presenting figure — zombie, undead.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Horror fandom and tired Monday memes contexts.",
    ],
    textingMeaning: "'zombie 🧟‍♀️'",
    socialMeaning: "Horror fandom and tired Monday memes tag 🧟‍♀️.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Cosplay", text: "🧟‍♀️" },
      { context: "Meme", text: "Arc 🧟‍♀️" },
      { context: "Halloween", text: "🧟‍♀️" },
      { context: "Fandom", text: "🧟‍♀️" },
      { context: "Fantasy", text: "🧟‍♀️" },
    ],
    contextBlocks: [
      { title: "Fantasy role", body: "Zombie, Undead" },
      { title: "Vs neutral", body: "See zombie for gender-neutral base." },
    ],
    searchIntents: ["woman-zombie emoji", "🧟‍♀️ meaning"],
    whenNotToUse: ["Mocking cosplayers."],
    faqs: [
      { question: "What does 🧟‍♀️ mean?", answer: "🧟‍♀️ Woman zombie — Halloween, exhaustion zombie mode, horror." },
    ],
  },

  "man-getting-massage": {
    batchId: BATCH_ID,
    searchTitle: "Man Getting Massage Emoji (💆‍♂️) Meaning: Massage, Spa",
    snippetAnswer:
      "💆‍♂️ Man getting massage — spa day, tension relief, self-care.",
    detailedParagraphs: [
      "Man Getting Massage (💆‍♂️) shows man-presenting figure — massage, spa.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Massage, Spa content and fitness posts contexts.",
    ],
    textingMeaning: "'getting massage 💆‍♂️'",
    socialMeaning: "Massage, Spa content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "💆‍♂️" },
      { context: "Today", text: "💆‍♂️" },
      { context: "Weekend", text: "💆‍♂️" },
      { context: "Goals", text: "💆‍♂️" },
      { context: "Vibes", text: "💆‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Massage, Spa" },
      { title: "Vs person-*", body: "See person-getting-massage neutral." },
    ],
    searchIntents: ["man-getting-massage emoji", "💆‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 💆‍♂️ mean?", answer: "💆‍♂️ Man getting massage — spa day, tension relief, self-care." },
    ],
  },

  "woman-getting-massage": {
    batchId: BATCH_ID,
    searchTitle: "Woman Getting Massage Emoji (💆‍♀️) Meaning: Massage, Spa",
    snippetAnswer:
      "💆‍♀️ Woman getting massage — spa day, tension relief, self-care.",
    detailedParagraphs: [
      "Woman Getting Massage (💆‍♀️) shows woman-presenting figure — massage, spa.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Massage, Spa content and fitness posts contexts.",
    ],
    textingMeaning: "'getting massage 💆‍♀️'",
    socialMeaning: "Massage, Spa content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "💆‍♀️" },
      { context: "Today", text: "💆‍♀️" },
      { context: "Weekend", text: "💆‍♀️" },
      { context: "Goals", text: "💆‍♀️" },
      { context: "Vibes", text: "💆‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Massage, Spa" },
      { title: "Vs person-*", body: "See person-getting-massage neutral." },
    ],
    searchIntents: ["woman-getting-massage emoji", "💆‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 💆‍♀️ mean?", answer: "💆‍♀️ Woman getting massage — spa day, tension relief, self-care." },
    ],
  },

  "man-getting-haircut": {
    batchId: BATCH_ID,
    searchTitle: "Man Getting Haircut Emoji (💇‍♂️) Meaning: Haircut, Salon",
    snippetAnswer:
      "💇‍♂️ Man getting haircut — fresh cut, bangs regret, barber.",
    detailedParagraphs: [
      "Man Getting Haircut (💇‍♂️) shows man-presenting figure — haircut, salon.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Haircut, Salon content and fitness posts contexts.",
    ],
    textingMeaning: "'getting haircut 💇‍♂️'",
    socialMeaning: "Haircut, Salon content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "💇‍♂️" },
      { context: "Today", text: "💇‍♂️" },
      { context: "Weekend", text: "💇‍♂️" },
      { context: "Goals", text: "💇‍♂️" },
      { context: "Vibes", text: "💇‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Haircut, Salon" },
      { title: "Vs person-*", body: "See person-getting-haircut neutral." },
    ],
    searchIntents: ["man-getting-haircut emoji", "💇‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 💇‍♂️ mean?", answer: "💇‍♂️ Man getting haircut — fresh cut, bangs regret, barber." },
    ],
  },

  "woman-getting-haircut": {
    batchId: BATCH_ID,
    searchTitle: "Woman Getting Haircut Emoji (💇‍♀️) Meaning: Haircut, Salon",
    snippetAnswer:
      "💇‍♀️ Woman getting haircut — fresh cut, bangs regret, barber.",
    detailedParagraphs: [
      "Woman Getting Haircut (💇‍♀️) shows woman-presenting figure — haircut, salon.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Haircut, Salon content and fitness posts contexts.",
    ],
    textingMeaning: "'getting haircut 💇‍♀️'",
    socialMeaning: "Haircut, Salon content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "💇‍♀️" },
      { context: "Today", text: "💇‍♀️" },
      { context: "Weekend", text: "💇‍♀️" },
      { context: "Goals", text: "💇‍♀️" },
      { context: "Vibes", text: "💇‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Haircut, Salon" },
      { title: "Vs person-*", body: "See person-getting-haircut neutral." },
    ],
    searchIntents: ["woman-getting-haircut emoji", "💇‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 💇‍♀️ mean?", answer: "💇‍♀️ Woman getting haircut — fresh cut, bangs regret, barber." },
    ],
  },

  "man-walking": {
    batchId: BATCH_ID,
    searchTitle: "Man Walking Emoji (🚶‍♂️) Meaning: Walking, Steps",
    snippetAnswer:
      "🚶‍♂️ Man walking — commute, 10k steps, mindful walk.",
    detailedParagraphs: [
      "Man Walking (🚶‍♂️) shows man-presenting figure — walking, steps.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Walking, Steps content and fitness posts contexts.",
    ],
    textingMeaning: "'walking 🚶‍♂️'",
    socialMeaning: "Walking, Steps content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🚶‍♂️" },
      { context: "Today", text: "🚶‍♂️" },
      { context: "Weekend", text: "🚶‍♂️" },
      { context: "Goals", text: "🚶‍♂️" },
      { context: "Vibes", text: "🚶‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Walking, Steps" },
      { title: "Vs person-*", body: "See person-walking neutral." },
    ],
    searchIntents: ["man-walking emoji", "🚶‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🚶‍♂️ mean?", answer: "🚶‍♂️ Man walking — commute, 10k steps, mindful walk." },
    ],
  },

  "woman-walking": {
    batchId: BATCH_ID,
    searchTitle: "Woman Walking Emoji (🚶‍♀️) Meaning: Walking, Steps",
    snippetAnswer:
      "🚶‍♀️ Woman walking — commute, 10k steps, mindful walk.",
    detailedParagraphs: [
      "Woman Walking (🚶‍♀️) shows woman-presenting figure — walking, steps.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Walking, Steps content and fitness posts contexts.",
    ],
    textingMeaning: "'walking 🚶‍♀️'",
    socialMeaning: "Walking, Steps content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🚶‍♀️" },
      { context: "Today", text: "🚶‍♀️" },
      { context: "Weekend", text: "🚶‍♀️" },
      { context: "Goals", text: "🚶‍♀️" },
      { context: "Vibes", text: "🚶‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Walking, Steps" },
      { title: "Vs person-*", body: "See person-walking neutral." },
    ],
    searchIntents: ["woman-walking emoji", "🚶‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🚶‍♀️ mean?", answer: "🚶‍♀️ Woman walking — commute, 10k steps, mindful walk." },
    ],
  },

  "person-walking-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person Walking Facing Right Emoji (🚶‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🚶‍➡️ Person Walking Facing Right faces right — same meaning as Person Walking; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person Walking Facing Right (🚶‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-walking 🚶‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🚶‍➡️" },
      { context: "Layout", text: "Right 🚶‍➡️" },
      { context: "UI", text: "Mirror 🚶‍➡️" },
      { context: "Walk", text: "Heading 🚶‍➡️" },
      { context: "Note", text: "Direction 🚶‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-walking for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person walking facing right emoji", "🚶‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🚶‍➡️ mean?", answer: "Same as person-walking — facing-right variant." },
    ],
  },

  "woman-walking-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman Walking Facing Right Emoji (🚶‍♀️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🚶‍♀️‍➡️ Woman Walking Facing Right faces right — same meaning as Person Walking; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman Walking Facing Right (🚶‍♀️‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-walking 🚶‍♀️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🚶‍♀️‍➡️" },
      { context: "Layout", text: "Right 🚶‍♀️‍➡️" },
      { context: "UI", text: "Mirror 🚶‍♀️‍➡️" },
      { context: "Walk", text: "Heading 🚶‍♀️‍➡️" },
      { context: "Note", text: "Direction 🚶‍♀️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-walking for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman walking facing right emoji", "🚶‍♀️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🚶‍♀️‍➡️ mean?", answer: "Same as person-walking — facing-right variant." },
    ],
  },

  "man-walking-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man Walking Facing Right Emoji (🚶‍♂️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🚶‍♂️‍➡️ Man Walking Facing Right faces right — same meaning as Person Walking; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man Walking Facing Right (🚶‍♂️‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-walking 🚶‍♂️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🚶‍♂️‍➡️" },
      { context: "Layout", text: "Right 🚶‍♂️‍➡️" },
      { context: "UI", text: "Mirror 🚶‍♂️‍➡️" },
      { context: "Walk", text: "Heading 🚶‍♂️‍➡️" },
      { context: "Note", text: "Direction 🚶‍♂️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-walking for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man walking facing right emoji", "🚶‍♂️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🚶‍♂️‍➡️ mean?", answer: "Same as person-walking — facing-right variant." },
    ],
  },

  "man-standing": {
    batchId: BATCH_ID,
    searchTitle: "Man Standing Emoji (🧍‍♂️) Meaning: Standing, Waiting",
    snippetAnswer:
      "🧍‍♂️ Man standing — waiting in line, idle NPC meme.",
    detailedParagraphs: [
      "Man Standing (🧍‍♂️) shows man-presenting figure — standing, waiting.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Standing, Waiting content and fitness posts contexts.",
    ],
    textingMeaning: "'standing 🧍‍♂️'",
    socialMeaning: "Standing, Waiting content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧍‍♂️" },
      { context: "Today", text: "🧍‍♂️" },
      { context: "Weekend", text: "🧍‍♂️" },
      { context: "Goals", text: "🧍‍♂️" },
      { context: "Vibes", text: "🧍‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Standing, Waiting" },
      { title: "Vs person-*", body: "See person-standing neutral." },
    ],
    searchIntents: ["man-standing emoji", "🧍‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧍‍♂️ mean?", answer: "🧍‍♂️ Man standing — waiting in line, idle NPC meme." },
    ],
  },

  "woman-standing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Standing Emoji (🧍‍♀️) Meaning: Standing, Waiting",
    snippetAnswer:
      "🧍‍♀️ Woman standing — waiting in line, idle NPC meme.",
    detailedParagraphs: [
      "Woman Standing (🧍‍♀️) shows woman-presenting figure — standing, waiting.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Standing, Waiting content and fitness posts contexts.",
    ],
    textingMeaning: "'standing 🧍‍♀️'",
    socialMeaning: "Standing, Waiting content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧍‍♀️" },
      { context: "Today", text: "🧍‍♀️" },
      { context: "Weekend", text: "🧍‍♀️" },
      { context: "Goals", text: "🧍‍♀️" },
      { context: "Vibes", text: "🧍‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Standing, Waiting" },
      { title: "Vs person-*", body: "See person-standing neutral." },
    ],
    searchIntents: ["woman-standing emoji", "🧍‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧍‍♀️ mean?", answer: "🧍‍♀️ Woman standing — waiting in line, idle NPC meme." },
    ],
  },

  "man-kneeling": {
    batchId: BATCH_ID,
    searchTitle: "Man Kneeling Emoji (🧎‍♂️) Meaning: Kneeling, Proposal",
    snippetAnswer:
      "🧎‍♂️ Man kneeling — proposal, prayer, protest kneel.",
    detailedParagraphs: [
      "Man Kneeling (🧎‍♂️) shows man-presenting figure — kneeling, proposal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Kneeling, Proposal content and fitness posts contexts.",
    ],
    textingMeaning: "'kneeling 🧎‍♂️'",
    socialMeaning: "Kneeling, Proposal content and fitness posts",
    caution: "Protest kneel carries political weight.",
    examples: [
      { context: "Activity", text: "🧎‍♂️" },
      { context: "Today", text: "🧎‍♂️" },
      { context: "Weekend", text: "🧎‍♂️" },
      { context: "Goals", text: "🧎‍♂️" },
      { context: "Vibes", text: "🧎‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Kneeling, Proposal" },
      { title: "Vs person-*", body: "See person-kneeling neutral." },
    ],
    searchIntents: ["man-kneeling emoji", "🧎‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧎‍♂️ mean?", answer: "🧎‍♂️ Man kneeling — proposal, prayer, protest kneel." },
    ],
  },

  "woman-kneeling": {
    batchId: BATCH_ID,
    searchTitle: "Woman Kneeling Emoji (🧎‍♀️) Meaning: Kneeling, Proposal",
    snippetAnswer:
      "🧎‍♀️ Woman kneeling — proposal, prayer, protest kneel.",
    detailedParagraphs: [
      "Woman Kneeling (🧎‍♀️) shows woman-presenting figure — kneeling, proposal.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Kneeling, Proposal content and fitness posts contexts.",
    ],
    textingMeaning: "'kneeling 🧎‍♀️'",
    socialMeaning: "Kneeling, Proposal content and fitness posts",
    caution: "Protest kneel carries political weight.",
    examples: [
      { context: "Activity", text: "🧎‍♀️" },
      { context: "Today", text: "🧎‍♀️" },
      { context: "Weekend", text: "🧎‍♀️" },
      { context: "Goals", text: "🧎‍♀️" },
      { context: "Vibes", text: "🧎‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Kneeling, Proposal" },
      { title: "Vs person-*", body: "See person-kneeling neutral." },
    ],
    searchIntents: ["woman-kneeling emoji", "🧎‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧎‍♀️ mean?", answer: "🧎‍♀️ Woman kneeling — proposal, prayer, protest kneel." },
    ],
  },

  "person-kneeling-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person Kneeling Facing Right Emoji (🧎‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧎‍➡️ Person Kneeling Facing Right faces right — same meaning as Person Kneeling; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person Kneeling Facing Right (🧎‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-kneeling 🧎‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧎‍➡️" },
      { context: "Layout", text: "Right 🧎‍➡️" },
      { context: "UI", text: "Mirror 🧎‍➡️" },
      { context: "Walk", text: "Heading 🧎‍➡️" },
      { context: "Note", text: "Direction 🧎‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-kneeling for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person kneeling facing right emoji", "🧎‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧎‍➡️ mean?", answer: "Same as person-kneeling — facing-right variant." },
    ],
  },

  "woman-kneeling-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman Kneeling Facing Right Emoji (🧎‍♀️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧎‍♀️‍➡️ Woman Kneeling Facing Right faces right — same meaning as Person Kneeling; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman Kneeling Facing Right (🧎‍♀️‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-kneeling 🧎‍♀️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧎‍♀️‍➡️" },
      { context: "Layout", text: "Right 🧎‍♀️‍➡️" },
      { context: "UI", text: "Mirror 🧎‍♀️‍➡️" },
      { context: "Walk", text: "Heading 🧎‍♀️‍➡️" },
      { context: "Note", text: "Direction 🧎‍♀️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-kneeling for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman kneeling facing right emoji", "🧎‍♀️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧎‍♀️‍➡️ mean?", answer: "Same as person-kneeling — facing-right variant." },
    ],
  },

  "man-kneeling-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man Kneeling Facing Right Emoji (🧎‍♂️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧎‍♂️‍➡️ Man Kneeling Facing Right faces right — same meaning as Person Kneeling; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man Kneeling Facing Right (🧎‍♂️‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-kneeling 🧎‍♂️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧎‍♂️‍➡️" },
      { context: "Layout", text: "Right 🧎‍♂️‍➡️" },
      { context: "UI", text: "Mirror 🧎‍♂️‍➡️" },
      { context: "Walk", text: "Heading 🧎‍♂️‍➡️" },
      { context: "Note", text: "Direction 🧎‍♂️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-kneeling for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man kneeling facing right emoji", "🧎‍♂️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧎‍♂️‍➡️ mean?", answer: "Same as person-kneeling — facing-right variant." },
    ],
  },

  "person-with-white-cane-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person With White Cane Facing Right Emoji (🧑‍🦯‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧑‍🦯‍➡️ Person With White Cane Facing Right faces right — same meaning as Person With White Cane; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person With White Cane Facing Right (🧑‍🦯‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-with-white-cane 🧑‍🦯‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧑‍🦯‍➡️" },
      { context: "Layout", text: "Right 🧑‍🦯‍➡️" },
      { context: "UI", text: "Mirror 🧑‍🦯‍➡️" },
      { context: "Walk", text: "Heading 🧑‍🦯‍➡️" },
      { context: "Note", text: "Direction 🧑‍🦯‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-with-white-cane for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person with white cane facing right emoji", "🧑‍🦯‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧑‍🦯‍➡️ mean?", answer: "Same as person-with-white-cane — facing-right variant." },
    ],
  },

  "man-with-white-cane": {
    batchId: BATCH_ID,
    searchTitle: "Man With White Cane Emoji (👨‍🦯) Meaning: White Cane, Blind Mobility",
    snippetAnswer:
      "👨‍🦯 Man with white cane — blind/low-vision mobility; don't grab cane without permission.",
    detailedParagraphs: [
      "Man With White Cane (👨‍🦯) shows man-presenting figure — white cane, blind mobility.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Accessibility and blind community advocacy contexts.",
    ],
    textingMeaning: "'Cane 👨‍🦯'",
    socialMeaning: "Accessibility and blind community advocacy",
    caution: "Represent respectfully — never mock blindness.",
    examples: [
      { context: "Access", text: "👨‍🦯" },
      { context: "Mobility", text: "👨‍🦯" },
      { context: "Awareness", text: "👨‍🦯" },
      { context: "Travel", text: "👨‍🦯" },
      { context: "Respect", text: "👨‍🦯" },
    ],
    contextBlocks: [
      { title: "White cane", body: "Independence device" },
      { title: "Vs 🧑‍🦯", body: "Neutral cane user." },
    ],
    searchIntents: ["man-with-white-cane emoji", "👨‍🦯 meaning"],
    whenNotToUse: ["Blindness jokes.", "Touching someone's cane."],
    faqs: [
      { question: "What does 👨‍🦯 mean?", answer: "White cane user — blind/low-vision mobility." },
    ],
  },

  "man-with-white-cane-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man With White Cane Facing Right Emoji (👨‍🦯‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👨‍🦯‍➡️ Man With White Cane Facing Right faces right — same meaning as Person With White Cane; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man With White Cane Facing Right (👨‍🦯‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-with-white-cane 👨‍🦯‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👨‍🦯‍➡️" },
      { context: "Layout", text: "Right 👨‍🦯‍➡️" },
      { context: "UI", text: "Mirror 👨‍🦯‍➡️" },
      { context: "Walk", text: "Heading 👨‍🦯‍➡️" },
      { context: "Note", text: "Direction 👨‍🦯‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-with-white-cane for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man with white cane facing right emoji", "👨‍🦯‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👨‍🦯‍➡️ mean?", answer: "Same as person-with-white-cane — facing-right variant." },
    ],
  },

  "woman-with-white-cane": {
    batchId: BATCH_ID,
    searchTitle: "Woman With White Cane Emoji (👩‍🦯) Meaning: White Cane, Blind Mobility",
    snippetAnswer:
      "👩‍🦯 Woman with white cane — blind/low-vision mobility; don't grab cane without permission.",
    detailedParagraphs: [
      "Woman With White Cane (👩‍🦯) shows woman-presenting figure — white cane, blind mobility.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Accessibility and blind community advocacy contexts.",
    ],
    textingMeaning: "'Cane 👩‍🦯'",
    socialMeaning: "Accessibility and blind community advocacy",
    caution: "Represent respectfully — never mock blindness.",
    examples: [
      { context: "Access", text: "👩‍🦯" },
      { context: "Mobility", text: "👩‍🦯" },
      { context: "Awareness", text: "👩‍🦯" },
      { context: "Travel", text: "👩‍🦯" },
      { context: "Respect", text: "👩‍🦯" },
    ],
    contextBlocks: [
      { title: "White cane", body: "Independence device" },
      { title: "Vs 🧑‍🦯", body: "Neutral cane user." },
    ],
    searchIntents: ["woman-with-white-cane emoji", "👩‍🦯 meaning"],
    whenNotToUse: ["Blindness jokes.", "Touching someone's cane."],
    faqs: [
      { question: "What does 👩‍🦯 mean?", answer: "White cane user — blind/low-vision mobility." },
    ],
  },

  "woman-with-white-cane-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman With White Cane Facing Right Emoji (👩‍🦯‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👩‍🦯‍➡️ Woman With White Cane Facing Right faces right — same meaning as Person With White Cane; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman With White Cane Facing Right (👩‍🦯‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-with-white-cane 👩‍🦯‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👩‍🦯‍➡️" },
      { context: "Layout", text: "Right 👩‍🦯‍➡️" },
      { context: "UI", text: "Mirror 👩‍🦯‍➡️" },
      { context: "Walk", text: "Heading 👩‍🦯‍➡️" },
      { context: "Note", text: "Direction 👩‍🦯‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-with-white-cane for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman with white cane facing right emoji", "👩‍🦯‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👩‍🦯‍➡️ mean?", answer: "Same as person-with-white-cane — facing-right variant." },
    ],
  },

  "person-in-motorized-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person In Motorized Wheelchair Facing Right Emoji (🧑‍🦼‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧑‍🦼‍➡️ Person In Motorized Wheelchair Facing Right faces right — same meaning as Person In Motorized Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person In Motorized Wheelchair Facing Right (🧑‍🦼‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-motorized-wheelchair 🧑‍🦼‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧑‍🦼‍➡️" },
      { context: "Layout", text: "Right 🧑‍🦼‍➡️" },
      { context: "UI", text: "Mirror 🧑‍🦼‍➡️" },
      { context: "Walk", text: "Heading 🧑‍🦼‍➡️" },
      { context: "Note", text: "Direction 🧑‍🦼‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-motorized-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person in motorized wheelchair facing right emoji", "🧑‍🦼‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧑‍🦼‍➡️ mean?", answer: "Same as person-in-motorized-wheelchair — facing-right variant." },
    ],
  },

  "man-in-motorized-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Man In Motorized Wheelchair Emoji (👨‍🦼) Meaning: Power Wheelchair",
    snippetAnswer:
      "👨‍🦼 Man in motorized wheelchair — power chair user, accessibility, ramp access.",
    detailedParagraphs: [
      "Man In Motorized Wheelchair (👨‍🦼) shows man-presenting figure — power wheelchair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Disability rights and accessible travel contexts.",
    ],
    textingMeaning: "'Power chair 👨‍🦼'",
    socialMeaning: "Disability rights and accessible travel",
    caution: "Wheelchair ≠ tragedy — respect users.",
    examples: [
      { context: "Access", text: "👨‍🦼" },
      { context: "Ramp", text: "👨‍🦼" },
      { context: "Travel", text: "👨‍🦼" },
      { context: "Rights", text: "👨‍🦼" },
      { context: "Life", text: "👨‍🦼" },
    ],
    contextBlocks: [
      { title: "Power chair", body: "Motorized mobility" },
      { title: "Vs 🧑‍🦼", body: "Neutral form." },
    ],
    searchIntents: ["man-in-motorized-wheelchair emoji", "👨‍🦼 meaning"],
    whenNotToUse: ["Inspiration porn."],
    faqs: [
      { question: "What does 👨‍🦼 mean?", answer: "Person in motorized wheelchair — accessibility." },
    ],
  },

  "man-in-motorized-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man In Motorized Wheelchair Facing Right Emoji (👨‍🦼‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👨‍🦼‍➡️ Man In Motorized Wheelchair Facing Right faces right — same meaning as Person In Motorized Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man In Motorized Wheelchair Facing Right (👨‍🦼‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-motorized-wheelchair 👨‍🦼‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👨‍🦼‍➡️" },
      { context: "Layout", text: "Right 👨‍🦼‍➡️" },
      { context: "UI", text: "Mirror 👨‍🦼‍➡️" },
      { context: "Walk", text: "Heading 👨‍🦼‍➡️" },
      { context: "Note", text: "Direction 👨‍🦼‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-motorized-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man in motorized wheelchair facing right emoji", "👨‍🦼‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👨‍🦼‍➡️ mean?", answer: "Same as person-in-motorized-wheelchair — facing-right variant." },
    ],
  },

  "woman-in-motorized-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Motorized Wheelchair Emoji (👩‍🦼) Meaning: Power Wheelchair",
    snippetAnswer:
      "👩‍🦼 Woman in motorized wheelchair — power chair user, accessibility, ramp access.",
    detailedParagraphs: [
      "Woman In Motorized Wheelchair (👩‍🦼) shows woman-presenting figure — power wheelchair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Disability rights and accessible travel contexts.",
    ],
    textingMeaning: "'Power chair 👩‍🦼'",
    socialMeaning: "Disability rights and accessible travel",
    caution: "Wheelchair ≠ tragedy — respect users.",
    examples: [
      { context: "Access", text: "👩‍🦼" },
      { context: "Ramp", text: "👩‍🦼" },
      { context: "Travel", text: "👩‍🦼" },
      { context: "Rights", text: "👩‍🦼" },
      { context: "Life", text: "👩‍🦼" },
    ],
    contextBlocks: [
      { title: "Power chair", body: "Motorized mobility" },
      { title: "Vs 🧑‍🦼", body: "Neutral form." },
    ],
    searchIntents: ["woman-in-motorized-wheelchair emoji", "👩‍🦼 meaning"],
    whenNotToUse: ["Inspiration porn."],
    faqs: [
      { question: "What does 👩‍🦼 mean?", answer: "Person in motorized wheelchair — accessibility." },
    ],
  },

  "woman-in-motorized-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Motorized Wheelchair Facing Right Emoji (👩‍🦼‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👩‍🦼‍➡️ Woman In Motorized Wheelchair Facing Right faces right — same meaning as Person In Motorized Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman In Motorized Wheelchair Facing Right (👩‍🦼‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-motorized-wheelchair 👩‍🦼‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👩‍🦼‍➡️" },
      { context: "Layout", text: "Right 👩‍🦼‍➡️" },
      { context: "UI", text: "Mirror 👩‍🦼‍➡️" },
      { context: "Walk", text: "Heading 👩‍🦼‍➡️" },
      { context: "Note", text: "Direction 👩‍🦼‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-motorized-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman in motorized wheelchair facing right emoji", "👩‍🦼‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👩‍🦼‍➡️ mean?", answer: "Same as person-in-motorized-wheelchair — facing-right variant." },
    ],
  },

  "person-in-manual-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person In Manual Wheelchair Facing Right Emoji (🧑‍🦽‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🧑‍🦽‍➡️ Person In Manual Wheelchair Facing Right faces right — same meaning as Person In Manual Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person In Manual Wheelchair Facing Right (🧑‍🦽‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-manual-wheelchair 🧑‍🦽‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🧑‍🦽‍➡️" },
      { context: "Layout", text: "Right 🧑‍🦽‍➡️" },
      { context: "UI", text: "Mirror 🧑‍🦽‍➡️" },
      { context: "Walk", text: "Heading 🧑‍🦽‍➡️" },
      { context: "Note", text: "Direction 🧑‍🦽‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-manual-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person in manual wheelchair facing right emoji", "🧑‍🦽‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🧑‍🦽‍➡️ mean?", answer: "Same as person-in-manual-wheelchair — facing-right variant." },
    ],
  },

  "man-in-manual-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Man In Manual Wheelchair Emoji (👨‍🦽) Meaning: Manual Wheelchair",
    snippetAnswer:
      "👨‍🦽 Man in manual wheelchair — para sports, disability pride, step-free access.",
    detailedParagraphs: [
      "Man In Manual Wheelchair (👨‍🦽) shows man-presenting figure — manual wheelchair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Paralympics and accessibility advocacy contexts.",
    ],
    textingMeaning: "'Wheelchair 👨‍🦽'",
    socialMeaning: "Paralympics and accessibility advocacy",
    caution: "Don't pity wheelchair users.",
    examples: [
      { context: "Para", text: "👨‍🦽" },
      { context: "Access", text: "👨‍🦽" },
      { context: "Pride", text: "👨‍🦽" },
      { context: "Daily", text: "👨‍🦽" },
      { context: "Sports", text: "👨‍🦽" },
    ],
    contextBlocks: [
      { title: "Manual chair", body: "Self-propelled mobility" },
      { title: "Vs 🧑‍🦽", body: "Neutral form." },
    ],
    searchIntents: ["man-in-manual-wheelchair emoji", "👨‍🦽 meaning"],
    whenNotToUse: ["Wheelchair bound pity language."],
    faqs: [
      { question: "What does 👨‍🦽 mean?", answer: "Manual wheelchair user — mobility and para sports." },
    ],
  },

  "man-in-manual-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man In Manual Wheelchair Facing Right Emoji (👨‍🦽‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👨‍🦽‍➡️ Man In Manual Wheelchair Facing Right faces right — same meaning as Person In Manual Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man In Manual Wheelchair Facing Right (👨‍🦽‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-manual-wheelchair 👨‍🦽‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👨‍🦽‍➡️" },
      { context: "Layout", text: "Right 👨‍🦽‍➡️" },
      { context: "UI", text: "Mirror 👨‍🦽‍➡️" },
      { context: "Walk", text: "Heading 👨‍🦽‍➡️" },
      { context: "Note", text: "Direction 👨‍🦽‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-manual-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man in manual wheelchair facing right emoji", "👨‍🦽‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👨‍🦽‍➡️ mean?", answer: "Same as person-in-manual-wheelchair — facing-right variant." },
    ],
  },

  "woman-in-manual-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Manual Wheelchair Emoji (👩‍🦽) Meaning: Manual Wheelchair",
    snippetAnswer:
      "👩‍🦽 Woman in manual wheelchair — para sports, disability pride, step-free access.",
    detailedParagraphs: [
      "Woman In Manual Wheelchair (👩‍🦽) shows woman-presenting figure — manual wheelchair.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Paralympics and accessibility advocacy contexts.",
    ],
    textingMeaning: "'Wheelchair 👩‍🦽'",
    socialMeaning: "Paralympics and accessibility advocacy",
    caution: "Don't pity wheelchair users.",
    examples: [
      { context: "Para", text: "👩‍🦽" },
      { context: "Access", text: "👩‍🦽" },
      { context: "Pride", text: "👩‍🦽" },
      { context: "Daily", text: "👩‍🦽" },
      { context: "Sports", text: "👩‍🦽" },
    ],
    contextBlocks: [
      { title: "Manual chair", body: "Self-propelled mobility" },
      { title: "Vs 🧑‍🦽", body: "Neutral form." },
    ],
    searchIntents: ["woman-in-manual-wheelchair emoji", "👩‍🦽 meaning"],
    whenNotToUse: ["Wheelchair bound pity language."],
    faqs: [
      { question: "What does 👩‍🦽 mean?", answer: "Manual wheelchair user — mobility and para sports." },
    ],
  },

  "woman-in-manual-wheelchair-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Manual Wheelchair Facing Right Emoji (👩‍🦽‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "👩‍🦽‍➡️ Woman In Manual Wheelchair Facing Right faces right — same meaning as Person In Manual Wheelchair; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman In Manual Wheelchair Facing Right (👩‍🦽‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-in-manual-wheelchair 👩‍🦽‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 👩‍🦽‍➡️" },
      { context: "Layout", text: "Right 👩‍🦽‍➡️" },
      { context: "UI", text: "Mirror 👩‍🦽‍➡️" },
      { context: "Walk", text: "Heading 👩‍🦽‍➡️" },
      { context: "Note", text: "Direction 👩‍🦽‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-in-manual-wheelchair for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman in manual wheelchair facing right emoji", "👩‍🦽‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 👩‍🦽‍➡️ mean?", answer: "Same as person-in-manual-wheelchair — facing-right variant." },
    ],
  },

  "man-running": {
    batchId: BATCH_ID,
    searchTitle: "Man Running Emoji (🏃‍♂️) Meaning: Running, Marathon",
    snippetAnswer:
      "🏃‍♂️ Man running — marathon, late for work, cardio.",
    detailedParagraphs: [
      "Man Running (🏃‍♂️) shows man-presenting figure — running, marathon.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Running, Marathon content and fitness posts contexts.",
    ],
    textingMeaning: "'running 🏃‍♂️'",
    socialMeaning: "Running, Marathon content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🏃‍♂️" },
      { context: "Today", text: "🏃‍♂️" },
      { context: "Weekend", text: "🏃‍♂️" },
      { context: "Goals", text: "🏃‍♂️" },
      { context: "Vibes", text: "🏃‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Running, Marathon" },
      { title: "Vs person-*", body: "See person-running neutral." },
    ],
    searchIntents: ["man-running emoji", "🏃‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🏃‍♂️ mean?", answer: "🏃‍♂️ Man running — marathon, late for work, cardio." },
    ],
  },

  "woman-running": {
    batchId: BATCH_ID,
    searchTitle: "Woman Running Emoji (🏃‍♀️) Meaning: Running, Marathon",
    snippetAnswer:
      "🏃‍♀️ Woman running — marathon, late for work, cardio.",
    detailedParagraphs: [
      "Woman Running (🏃‍♀️) shows woman-presenting figure — running, marathon.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Running, Marathon content and fitness posts contexts.",
    ],
    textingMeaning: "'running 🏃‍♀️'",
    socialMeaning: "Running, Marathon content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🏃‍♀️" },
      { context: "Today", text: "🏃‍♀️" },
      { context: "Weekend", text: "🏃‍♀️" },
      { context: "Goals", text: "🏃‍♀️" },
      { context: "Vibes", text: "🏃‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Running, Marathon" },
      { title: "Vs person-*", body: "See person-running neutral." },
    ],
    searchIntents: ["woman-running emoji", "🏃‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🏃‍♀️ mean?", answer: "🏃‍♀️ Woman running — marathon, late for work, cardio." },
    ],
  },

  "person-running-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Person Running Facing Right Emoji (🏃‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🏃‍➡️ Person Running Facing Right faces right — same meaning as Person Running; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Person Running Facing Right (🏃‍➡️) shows figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-running 🏃‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🏃‍➡️" },
      { context: "Layout", text: "Right 🏃‍➡️" },
      { context: "UI", text: "Mirror 🏃‍➡️" },
      { context: "Walk", text: "Heading 🏃‍➡️" },
      { context: "Note", text: "Direction 🏃‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-running for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["person running facing right emoji", "🏃‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🏃‍➡️ mean?", answer: "Same as person-running — facing-right variant." },
    ],
  },

  "woman-running-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Woman Running Facing Right Emoji (🏃‍♀️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🏃‍♀️‍➡️ Woman Running Facing Right faces right — same meaning as Person Running; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Woman Running Facing Right (🏃‍♀️‍➡️) shows woman-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-running 🏃‍♀️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🏃‍♀️‍➡️" },
      { context: "Layout", text: "Right 🏃‍♀️‍➡️" },
      { context: "UI", text: "Mirror 🏃‍♀️‍➡️" },
      { context: "Walk", text: "Heading 🏃‍♀️‍➡️" },
      { context: "Note", text: "Direction 🏃‍♀️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-running for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["woman running facing right emoji", "🏃‍♀️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🏃‍♀️‍➡️ mean?", answer: "Same as person-running — facing-right variant." },
    ],
  },

  "man-running-facing-right": {
    batchId: BATCH_ID,
    searchTitle: "Man Running Facing Right Emoji (🏃‍♂️‍➡️) Meaning: Direction Variant",
    snippetAnswer:
      "🏃‍♂️‍➡️ Man Running Facing Right faces right — same meaning as Person Running; Unicode mirror for layout, not new semantics.",
    detailedParagraphs: [
      "Man Running Facing Right (🏃‍♂️‍➡️) shows man-presenting figure — direction variant.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Platform layout and bidirectional text — not a separate meme. contexts.",
    ],
    textingMeaning: "Same as person-running 🏃‍♂️‍➡️.",
    socialMeaning: "Platform layout and bidirectional text — not a separate meme.",
    caution: "Don't invent meaning from facing direction.",
    examples: [
      { context: "Variant", text: "Same as base 🏃‍♂️‍➡️" },
      { context: "Layout", text: "Right 🏃‍♂️‍➡️" },
      { context: "UI", text: "Mirror 🏃‍♂️‍➡️" },
      { context: "Walk", text: "Heading 🏃‍♂️‍➡️" },
      { context: "Note", text: "Direction 🏃‍♂️‍➡️" },
    ],
    contextBlocks: [
      { title: "Facing right", body: "Visual mirror — meaning unchanged." },
      { title: "Base", body: "See person-running for full meaning." },
      { title: "Unicode", body: "Bidirectional emoji variant." },
    ],
    searchIntents: ["man running facing right emoji", "🏃‍♂️‍➡️ meaning"],
    whenNotToUse: ["Over-interpreting direction."],
    faqs: [
      { question: "What does 🏃‍♂️‍➡️ mean?", answer: "Same as person-running — facing-right variant." },
    ],
  },

  "woman-dancing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Dancing Emoji (💃) Meaning: Dancing, Party",
    snippetAnswer:
      "💃 Woman dancing — party, wedding reception, dance class.",
    detailedParagraphs: [
      "Woman Dancing (💃) shows woman-presenting figure — dancing, party.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Dancing, Party content and fitness posts contexts.",
    ],
    textingMeaning: "'dancing 💃'",
    socialMeaning: "Dancing, Party content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "💃" },
      { context: "Today", text: "💃" },
      { context: "Weekend", text: "💃" },
      { context: "Goals", text: "💃" },
      { context: "Vibes", text: "💃" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Dancing, Party" },
      { title: "Vs person-*", body: "See person-dancing neutral." },
    ],
    searchIntents: ["woman-dancing emoji", "💃 meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 💃 mean?", answer: "💃 Woman dancing — party, wedding reception, dance class." },
    ],
  },

  "man-dancing": {
    batchId: BATCH_ID,
    searchTitle: "Man Dancing Emoji (🕺) Meaning: Dancing, Party",
    snippetAnswer:
      "🕺 Man dancing — party, wedding reception, dance class.",
    detailedParagraphs: [
      "Man Dancing (🕺) shows man-presenting figure — dancing, party.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Dancing, Party content and fitness posts contexts.",
    ],
    textingMeaning: "'dancing 🕺'",
    socialMeaning: "Dancing, Party content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🕺" },
      { context: "Today", text: "🕺" },
      { context: "Weekend", text: "🕺" },
      { context: "Goals", text: "🕺" },
      { context: "Vibes", text: "🕺" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Dancing, Party" },
      { title: "Vs person-*", body: "See person-dancing neutral." },
    ],
    searchIntents: ["man-dancing emoji", "🕺 meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🕺 mean?", answer: "🕺 Man dancing — party, wedding reception, dance class." },
    ],
  },

  "men-with-bunny-ears": {
    batchId: BATCH_ID,
    searchTitle: "Men With Bunny Ears Emoji (👯‍♂️) Meaning: Bunny Ears Party Duo",
    snippetAnswer:
      "👯‍♂️ two men with bunny ears — matching party duo, Halloween pair, bestie costume.",
    detailedParagraphs: [
      "Men With Bunny Ears (👯‍♂️) shows men-presenting figure — bunny ears party duo.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Coordinated costume and festival bestie posts contexts.",
    ],
    textingMeaning: "'Party duo 👯‍♂️'",
    socialMeaning: "Coordinated costume and festival bestie posts",
    caution: "Playboy association varies by audience.",
    examples: [
      { context: "Halloween", text: "👯‍♂️" },
      { context: "Matching", text: "👯‍♂️" },
      { context: "Party", text: "👯‍♂️" },
      { context: "Besties", text: "👯‍♂️" },
      { context: "Duo", text: "👯‍♂️" },
    ],
    contextBlocks: [
      { title: "Duo", body: "Two people bunny ears" },
      { title: "Vs 👯", body: "Neutral people bunny ears." },
    ],
    searchIntents: ["men-with-bunny-ears emoji", "👯‍♂️ meaning"],
    whenNotToUse: ["Sexualizing without consent."],
    faqs: [
      { question: "What does 👯‍♂️ mean?", answer: "Party duo with bunny ear headbands." },
    ],
  },

  "women-with-bunny-ears": {
    batchId: BATCH_ID,
    searchTitle: "Women With Bunny Ears Emoji (👯‍♀️) Meaning: Bunny Ears Party Duo",
    snippetAnswer:
      "👯‍♀️ two women with bunny ears — matching party duo, Halloween pair, bestie costume.",
    detailedParagraphs: [
      "Women With Bunny Ears (👯‍♀️) shows women-presenting figure — bunny ears party duo.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Coordinated costume and festival bestie posts contexts.",
    ],
    textingMeaning: "'Party duo 👯‍♀️'",
    socialMeaning: "Coordinated costume and festival bestie posts",
    caution: "Playboy association varies by audience.",
    examples: [
      { context: "Halloween", text: "👯‍♀️" },
      { context: "Matching", text: "👯‍♀️" },
      { context: "Party", text: "👯‍♀️" },
      { context: "Besties", text: "👯‍♀️" },
      { context: "Duo", text: "👯‍♀️" },
    ],
    contextBlocks: [
      { title: "Duo", body: "Two people bunny ears" },
      { title: "Vs 👯", body: "Neutral people bunny ears." },
    ],
    searchIntents: ["women-with-bunny-ears emoji", "👯‍♀️ meaning"],
    whenNotToUse: ["Sexualizing without consent."],
    faqs: [
      { question: "What does 👯‍♀️ mean?", answer: "Party duo with bunny ear headbands." },
    ],
  },

  "man-in-steamy-room": {
    batchId: BATCH_ID,
    searchTitle: "Man In Steamy Room Emoji (🧖‍♂️) Meaning: Sauna, Steam",
    snippetAnswer:
      "🧖‍♂️ Man in steamy room — sauna, onsen, spa steam.",
    detailedParagraphs: [
      "Man In Steamy Room (🧖‍♂️) shows man-presenting figure — sauna, steam.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Sauna, Steam content and fitness posts contexts.",
    ],
    textingMeaning: "'in steamy room 🧖‍♂️'",
    socialMeaning: "Sauna, Steam content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧖‍♂️" },
      { context: "Today", text: "🧖‍♂️" },
      { context: "Weekend", text: "🧖‍♂️" },
      { context: "Goals", text: "🧖‍♂️" },
      { context: "Vibes", text: "🧖‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Sauna, Steam" },
      { title: "Vs person-*", body: "See person-in-steamy-room neutral." },
    ],
    searchIntents: ["man-in-steamy-room emoji", "🧖‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧖‍♂️ mean?", answer: "🧖‍♂️ Man in steamy room — sauna, onsen, spa steam." },
    ],
  },

  "woman-in-steamy-room": {
    batchId: BATCH_ID,
    searchTitle: "Woman In Steamy Room Emoji (🧖‍♀️) Meaning: Sauna, Steam",
    snippetAnswer:
      "🧖‍♀️ Woman in steamy room — sauna, onsen, spa steam.",
    detailedParagraphs: [
      "Woman In Steamy Room (🧖‍♀️) shows woman-presenting figure — sauna, steam.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Sauna, Steam content and fitness posts contexts.",
    ],
    textingMeaning: "'in steamy room 🧖‍♀️'",
    socialMeaning: "Sauna, Steam content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧖‍♀️" },
      { context: "Today", text: "🧖‍♀️" },
      { context: "Weekend", text: "🧖‍♀️" },
      { context: "Goals", text: "🧖‍♀️" },
      { context: "Vibes", text: "🧖‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Sauna, Steam" },
      { title: "Vs person-*", body: "See person-in-steamy-room neutral." },
    ],
    searchIntents: ["woman-in-steamy-room emoji", "🧖‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧖‍♀️ mean?", answer: "🧖‍♀️ Woman in steamy room — sauna, onsen, spa steam." },
    ],
  },

  "man-climbing": {
    batchId: BATCH_ID,
    searchTitle: "Man Climbing Emoji (🧗‍♂️) Meaning: Climbing, Bouldering",
    snippetAnswer:
      "🧗‍♂️ Man climbing — rock gym, crag day, send it.",
    detailedParagraphs: [
      "Man Climbing (🧗‍♂️) shows man-presenting figure — climbing, bouldering.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Climbing, Bouldering content and fitness posts contexts.",
    ],
    textingMeaning: "'climbing 🧗‍♂️'",
    socialMeaning: "Climbing, Bouldering content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧗‍♂️" },
      { context: "Today", text: "🧗‍♂️" },
      { context: "Weekend", text: "🧗‍♂️" },
      { context: "Goals", text: "🧗‍♂️" },
      { context: "Vibes", text: "🧗‍♂️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Climbing, Bouldering" },
      { title: "Vs person-*", body: "See person-climbing neutral." },
    ],
    searchIntents: ["man-climbing emoji", "🧗‍♂️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧗‍♂️ mean?", answer: "🧗‍♂️ Man climbing — rock gym, crag day, send it." },
    ],
  },

  "woman-climbing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Climbing Emoji (🧗‍♀️) Meaning: Climbing, Bouldering",
    snippetAnswer:
      "🧗‍♀️ Woman climbing — rock gym, crag day, send it.",
    detailedParagraphs: [
      "Woman Climbing (🧗‍♀️) shows woman-presenting figure — climbing, bouldering.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Climbing, Bouldering content and fitness posts contexts.",
    ],
    textingMeaning: "'climbing 🧗‍♀️'",
    socialMeaning: "Climbing, Bouldering content and fitness posts",
    caution: "Keep context clear.",
    examples: [
      { context: "Activity", text: "🧗‍♀️" },
      { context: "Today", text: "🧗‍♀️" },
      { context: "Weekend", text: "🧗‍♀️" },
      { context: "Goals", text: "🧗‍♀️" },
      { context: "Vibes", text: "🧗‍♀️" },
    ],
    contextBlocks: [
      { title: "Activity", body: "Climbing, Bouldering" },
      { title: "Vs person-*", body: "See person-climbing neutral." },
    ],
    searchIntents: ["woman-climbing emoji", "🧗‍♀️ meaning"],
    whenNotToUse: ["Mocking disability when activity inappropriate."],
    faqs: [
      { question: "What does 🧗‍♀️ mean?", answer: "🧗‍♀️ Woman climbing — rock gym, crag day, send it." },
    ],
  },

  "man-golfing": {
    batchId: BATCH_ID,
    searchTitle: "Man Golfing Emoji (🏌️‍♂️) Meaning: Golf, Tee Time",
    snippetAnswer:
      "🏌️‍♂️ Man golfing — tee time, PGA, golf clap sarcasm.",
    detailedParagraphs: [
      "Man Golfing (🏌️‍♂️) shows man-presenting figure — golf, tee time.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Golf, Tee Time posts and sports Twitter contexts.",
    ],
    textingMeaning: "'golfing 🏌️‍♂️'",
    socialMeaning: "Golf, Tee Time posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏌️‍♂️" },
      { context: "Gym", text: "PR 🏌️‍♂️" },
      { context: "Game", text: "🏌️‍♂️" },
      { context: "Train", text: "🏌️‍♂️" },
      { context: "Team", text: "🏌️‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Golf, Tee Time" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-golfing emoji", "🏌️‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏌️‍♂️ mean?", answer: "🏌️‍♂️ Man golfing — tee time, PGA, golf clap sarcasm." },
    ],
  },

  "woman-golfing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Golfing Emoji (🏌️‍♀️) Meaning: Golf, Tee Time",
    snippetAnswer:
      "🏌️‍♀️ Woman golfing — tee time, PGA, golf clap sarcasm.",
    detailedParagraphs: [
      "Woman Golfing (🏌️‍♀️) shows woman-presenting figure — golf, tee time.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Golf, Tee Time posts and sports Twitter contexts.",
    ],
    textingMeaning: "'golfing 🏌️‍♀️'",
    socialMeaning: "Golf, Tee Time posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏌️‍♀️" },
      { context: "Gym", text: "PR 🏌️‍♀️" },
      { context: "Game", text: "🏌️‍♀️" },
      { context: "Train", text: "🏌️‍♀️" },
      { context: "Team", text: "🏌️‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Golf, Tee Time" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-golfing emoji", "🏌️‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏌️‍♀️ mean?", answer: "🏌️‍♀️ Woman golfing — tee time, PGA, golf clap sarcasm." },
    ],
  },

  "man-surfing": {
    batchId: BATCH_ID,
    searchTitle: "Man Surfing Emoji (🏄‍♂️) Meaning: Surf, Waves",
    snippetAnswer:
      "🏄‍♂️ Man surfing — barrel, beach lifestyle, surf trip.",
    detailedParagraphs: [
      "Man Surfing (🏄‍♂️) shows man-presenting figure — surf, waves.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Surf, Waves posts and sports Twitter contexts.",
    ],
    textingMeaning: "'surfing 🏄‍♂️'",
    socialMeaning: "Surf, Waves posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏄‍♂️" },
      { context: "Gym", text: "PR 🏄‍♂️" },
      { context: "Game", text: "🏄‍♂️" },
      { context: "Train", text: "🏄‍♂️" },
      { context: "Team", text: "🏄‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Surf, Waves" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-surfing emoji", "🏄‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏄‍♂️ mean?", answer: "🏄‍♂️ Man surfing — barrel, beach lifestyle, surf trip." },
    ],
  },

  "woman-surfing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Surfing Emoji (🏄‍♀️) Meaning: Surf, Waves",
    snippetAnswer:
      "🏄‍♀️ Woman surfing — barrel, beach lifestyle, surf trip.",
    detailedParagraphs: [
      "Woman Surfing (🏄‍♀️) shows woman-presenting figure — surf, waves.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Surf, Waves posts and sports Twitter contexts.",
    ],
    textingMeaning: "'surfing 🏄‍♀️'",
    socialMeaning: "Surf, Waves posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏄‍♀️" },
      { context: "Gym", text: "PR 🏄‍♀️" },
      { context: "Game", text: "🏄‍♀️" },
      { context: "Train", text: "🏄‍♀️" },
      { context: "Team", text: "🏄‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Surf, Waves" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-surfing emoji", "🏄‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏄‍♀️ mean?", answer: "🏄‍♀️ Woman surfing — barrel, beach lifestyle, surf trip." },
    ],
  },

  "man-rowing-boat": {
    batchId: BATCH_ID,
    searchTitle: "Man Rowing Boat Emoji (🚣‍♂️) Meaning: Rowing, Crew",
    snippetAnswer:
      "🚣‍♂️ Man rowing — crew team, kayak, lake paddle.",
    detailedParagraphs: [
      "Man Rowing Boat (🚣‍♂️) shows man-presenting figure — rowing, crew.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Rowing, Crew posts and sports Twitter contexts.",
    ],
    textingMeaning: "'boat 🚣‍♂️'",
    socialMeaning: "Rowing, Crew posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚣‍♂️" },
      { context: "Gym", text: "PR 🚣‍♂️" },
      { context: "Game", text: "🚣‍♂️" },
      { context: "Train", text: "🚣‍♂️" },
      { context: "Team", text: "🚣‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Rowing, Crew" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-rowing-boat emoji", "🚣‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚣‍♂️ mean?", answer: "🚣‍♂️ Man rowing — crew team, kayak, lake paddle." },
    ],
  },

  "woman-rowing-boat": {
    batchId: BATCH_ID,
    searchTitle: "Woman Rowing Boat Emoji (🚣‍♀️) Meaning: Rowing, Crew",
    snippetAnswer:
      "🚣‍♀️ Woman rowing — crew team, kayak, lake paddle.",
    detailedParagraphs: [
      "Woman Rowing Boat (🚣‍♀️) shows woman-presenting figure — rowing, crew.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Rowing, Crew posts and sports Twitter contexts.",
    ],
    textingMeaning: "'boat 🚣‍♀️'",
    socialMeaning: "Rowing, Crew posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚣‍♀️" },
      { context: "Gym", text: "PR 🚣‍♀️" },
      { context: "Game", text: "🚣‍♀️" },
      { context: "Train", text: "🚣‍♀️" },
      { context: "Team", text: "🚣‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Rowing, Crew" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-rowing-boat emoji", "🚣‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚣‍♀️ mean?", answer: "🚣‍♀️ Woman rowing — crew team, kayak, lake paddle." },
    ],
  },

  "man-swimming": {
    batchId: BATCH_ID,
    searchTitle: "Man Swimming Emoji (🏊‍♂️) Meaning: Swimming, Pool",
    snippetAnswer:
      "🏊‍♂️ Man swimming — laps, pool day, triathlon swim leg.",
    detailedParagraphs: [
      "Man Swimming (🏊‍♂️) shows man-presenting figure — swimming, pool.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Swimming, Pool posts and sports Twitter contexts.",
    ],
    textingMeaning: "'swimming 🏊‍♂️'",
    socialMeaning: "Swimming, Pool posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏊‍♂️" },
      { context: "Gym", text: "PR 🏊‍♂️" },
      { context: "Game", text: "🏊‍♂️" },
      { context: "Train", text: "🏊‍♂️" },
      { context: "Team", text: "🏊‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Swimming, Pool" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-swimming emoji", "🏊‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏊‍♂️ mean?", answer: "🏊‍♂️ Man swimming — laps, pool day, triathlon swim leg." },
    ],
  },

  "woman-swimming": {
    batchId: BATCH_ID,
    searchTitle: "Woman Swimming Emoji (🏊‍♀️) Meaning: Swimming, Pool",
    snippetAnswer:
      "🏊‍♀️ Woman swimming — laps, pool day, triathlon swim leg.",
    detailedParagraphs: [
      "Woman Swimming (🏊‍♀️) shows woman-presenting figure — swimming, pool.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Swimming, Pool posts and sports Twitter contexts.",
    ],
    textingMeaning: "'swimming 🏊‍♀️'",
    socialMeaning: "Swimming, Pool posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏊‍♀️" },
      { context: "Gym", text: "PR 🏊‍♀️" },
      { context: "Game", text: "🏊‍♀️" },
      { context: "Train", text: "🏊‍♀️" },
      { context: "Team", text: "🏊‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Swimming, Pool" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-swimming emoji", "🏊‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏊‍♀️ mean?", answer: "🏊‍♀️ Woman swimming — laps, pool day, triathlon swim leg." },
    ],
  },

  "man-bouncing-ball": {
    batchId: BATCH_ID,
    searchTitle: "Man Bouncing Ball Emoji (⛹️‍♂️) Meaning: Basketball, Dribble",
    snippetAnswer:
      "⛹️‍♂️ Man bouncing ball — hoops, pickup game, NBA playoffs.",
    detailedParagraphs: [
      "Man Bouncing Ball (⛹️‍♂️) shows man-presenting figure — basketball, dribble.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Basketball, Dribble posts and sports Twitter contexts.",
    ],
    textingMeaning: "'ball ⛹️‍♂️'",
    socialMeaning: "Basketball, Dribble posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "⛹️‍♂️" },
      { context: "Gym", text: "PR ⛹️‍♂️" },
      { context: "Game", text: "⛹️‍♂️" },
      { context: "Train", text: "⛹️‍♂️" },
      { context: "Team", text: "⛹️‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Basketball, Dribble" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-bouncing-ball emoji", "⛹️‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does ⛹️‍♂️ mean?", answer: "⛹️‍♂️ Man bouncing ball — hoops, pickup game, NBA playoffs." },
    ],
  },

  "woman-bouncing-ball": {
    batchId: BATCH_ID,
    searchTitle: "Woman Bouncing Ball Emoji (⛹️‍♀️) Meaning: Basketball, Dribble",
    snippetAnswer:
      "⛹️‍♀️ Woman bouncing ball — hoops, pickup game, NBA playoffs.",
    detailedParagraphs: [
      "Woman Bouncing Ball (⛹️‍♀️) shows woman-presenting figure — basketball, dribble.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Basketball, Dribble posts and sports Twitter contexts.",
    ],
    textingMeaning: "'ball ⛹️‍♀️'",
    socialMeaning: "Basketball, Dribble posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "⛹️‍♀️" },
      { context: "Gym", text: "PR ⛹️‍♀️" },
      { context: "Game", text: "⛹️‍♀️" },
      { context: "Train", text: "⛹️‍♀️" },
      { context: "Team", text: "⛹️‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Basketball, Dribble" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-bouncing-ball emoji", "⛹️‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does ⛹️‍♀️ mean?", answer: "⛹️‍♀️ Woman bouncing ball — hoops, pickup game, NBA playoffs." },
    ],
  },

  "man-lifting-weights": {
    batchId: BATCH_ID,
    searchTitle: "Man Lifting Weights Emoji (🏋️‍♂️) Meaning: Weightlifting, Gym",
    snippetAnswer:
      "🏋️‍♂️ Man lifting weights — gym PR, leg day, strength training.",
    detailedParagraphs: [
      "Man Lifting Weights (🏋️‍♂️) shows man-presenting figure — weightlifting, gym.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Weightlifting, Gym posts and sports Twitter contexts.",
    ],
    textingMeaning: "'weights 🏋️‍♂️'",
    socialMeaning: "Weightlifting, Gym posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏋️‍♂️" },
      { context: "Gym", text: "PR 🏋️‍♂️" },
      { context: "Game", text: "🏋️‍♂️" },
      { context: "Train", text: "🏋️‍♂️" },
      { context: "Team", text: "🏋️‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Weightlifting, Gym" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-lifting-weights emoji", "🏋️‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏋️‍♂️ mean?", answer: "🏋️‍♂️ Man lifting weights — gym PR, leg day, strength training." },
    ],
  },

  "woman-lifting-weights": {
    batchId: BATCH_ID,
    searchTitle: "Woman Lifting Weights Emoji (🏋️‍♀️) Meaning: Weightlifting, Gym",
    snippetAnswer:
      "🏋️‍♀️ Woman lifting weights — gym PR, leg day, strength training.",
    detailedParagraphs: [
      "Woman Lifting Weights (🏋️‍♀️) shows woman-presenting figure — weightlifting, gym.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Weightlifting, Gym posts and sports Twitter contexts.",
    ],
    textingMeaning: "'weights 🏋️‍♀️'",
    socialMeaning: "Weightlifting, Gym posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🏋️‍♀️" },
      { context: "Gym", text: "PR 🏋️‍♀️" },
      { context: "Game", text: "🏋️‍♀️" },
      { context: "Train", text: "🏋️‍♀️" },
      { context: "Team", text: "🏋️‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Weightlifting, Gym" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-lifting-weights emoji", "🏋️‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🏋️‍♀️ mean?", answer: "🏋️‍♀️ Woman lifting weights — gym PR, leg day, strength training." },
    ],
  },

  "man-biking": {
    batchId: BATCH_ID,
    searchTitle: "Man Biking Emoji (🚴‍♂️) Meaning: Cycling, Bike",
    snippetAnswer:
      "🚴‍♂️ Man biking — road ride, commute cycle, Peloton culture.",
    detailedParagraphs: [
      "Man Biking (🚴‍♂️) shows man-presenting figure — cycling, bike.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cycling, Bike posts and sports Twitter contexts.",
    ],
    textingMeaning: "'biking 🚴‍♂️'",
    socialMeaning: "Cycling, Bike posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚴‍♂️" },
      { context: "Gym", text: "PR 🚴‍♂️" },
      { context: "Game", text: "🚴‍♂️" },
      { context: "Train", text: "🚴‍♂️" },
      { context: "Team", text: "🚴‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Cycling, Bike" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-biking emoji", "🚴‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚴‍♂️ mean?", answer: "🚴‍♂️ Man biking — road ride, commute cycle, Peloton culture." },
    ],
  },

  "woman-biking": {
    batchId: BATCH_ID,
    searchTitle: "Woman Biking Emoji (🚴‍♀️) Meaning: Cycling, Bike",
    snippetAnswer:
      "🚴‍♀️ Woman biking — road ride, commute cycle, Peloton culture.",
    detailedParagraphs: [
      "Woman Biking (🚴‍♀️) shows woman-presenting figure — cycling, bike.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cycling, Bike posts and sports Twitter contexts.",
    ],
    textingMeaning: "'biking 🚴‍♀️'",
    socialMeaning: "Cycling, Bike posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚴‍♀️" },
      { context: "Gym", text: "PR 🚴‍♀️" },
      { context: "Game", text: "🚴‍♀️" },
      { context: "Train", text: "🚴‍♀️" },
      { context: "Team", text: "🚴‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Cycling, Bike" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-biking emoji", "🚴‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚴‍♀️ mean?", answer: "🚴‍♀️ Woman biking — road ride, commute cycle, Peloton culture." },
    ],
  },

  "man-mountain-biking": {
    batchId: BATCH_ID,
    searchTitle: "Man Mountain Biking Emoji (🚵‍♂️) Meaning: Mountain Biking, MTB",
    snippetAnswer:
      "🚵‍♂️ Man mountain biking — trail, downhill, MTB culture.",
    detailedParagraphs: [
      "Man Mountain Biking (🚵‍♂️) shows man-presenting figure — mountain biking, mtb.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Mountain Biking, MTB posts and sports Twitter contexts.",
    ],
    textingMeaning: "'biking 🚵‍♂️'",
    socialMeaning: "Mountain Biking, MTB posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚵‍♂️" },
      { context: "Gym", text: "PR 🚵‍♂️" },
      { context: "Game", text: "🚵‍♂️" },
      { context: "Train", text: "🚵‍♂️" },
      { context: "Team", text: "🚵‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Mountain Biking, MTB" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-mountain-biking emoji", "🚵‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚵‍♂️ mean?", answer: "🚵‍♂️ Man mountain biking — trail, downhill, MTB culture." },
    ],
  },

  "woman-mountain-biking": {
    batchId: BATCH_ID,
    searchTitle: "Woman Mountain Biking Emoji (🚵‍♀️) Meaning: Mountain Biking, MTB",
    snippetAnswer:
      "🚵‍♀️ Woman mountain biking — trail, downhill, MTB culture.",
    detailedParagraphs: [
      "Woman Mountain Biking (🚵‍♀️) shows woman-presenting figure — mountain biking, mtb.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Mountain Biking, MTB posts and sports Twitter contexts.",
    ],
    textingMeaning: "'biking 🚵‍♀️'",
    socialMeaning: "Mountain Biking, MTB posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🚵‍♀️" },
      { context: "Gym", text: "PR 🚵‍♀️" },
      { context: "Game", text: "🚵‍♀️" },
      { context: "Train", text: "🚵‍♀️" },
      { context: "Team", text: "🚵‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Mountain Biking, MTB" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-mountain-biking emoji", "🚵‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🚵‍♀️ mean?", answer: "🚵‍♀️ Woman mountain biking — trail, downhill, MTB culture." },
    ],
  },

  "man-cartwheeling": {
    batchId: BATCH_ID,
    searchTitle: "Man Cartwheeling Emoji (🤸‍♂️) Meaning: Cartwheel, Gymnastics",
    snippetAnswer:
      "🤸‍♂️ Man cartwheeling — gymnastics, playful energy, cheer.",
    detailedParagraphs: [
      "Man Cartwheeling (🤸‍♂️) shows man-presenting figure — cartwheel, gymnastics.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cartwheel, Gymnastics posts and sports Twitter contexts.",
    ],
    textingMeaning: "'cartwheeling 🤸‍♂️'",
    socialMeaning: "Cartwheel, Gymnastics posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🤸‍♂️" },
      { context: "Gym", text: "PR 🤸‍♂️" },
      { context: "Game", text: "🤸‍♂️" },
      { context: "Train", text: "🤸‍♂️" },
      { context: "Team", text: "🤸‍♂️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Cartwheel, Gymnastics" },
      { title: "Gender pair", body: "Same sport — man variant." },
    ],
    searchIntents: ["man-cartwheeling emoji", "🤸‍♂️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🤸‍♂️ mean?", answer: "🤸‍♂️ Man cartwheeling — gymnastics, playful energy, cheer." },
    ],
  },

  "woman-cartwheeling": {
    batchId: BATCH_ID,
    searchTitle: "Woman Cartwheeling Emoji (🤸‍♀️) Meaning: Cartwheel, Gymnastics",
    snippetAnswer:
      "🤸‍♀️ Woman cartwheeling — gymnastics, playful energy, cheer.",
    detailedParagraphs: [
      "Woman Cartwheeling (🤸‍♀️) shows woman-presenting figure — cartwheel, gymnastics.",
      "Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.",
      "Common in Cartwheel, Gymnastics posts and sports Twitter contexts.",
    ],
    textingMeaning: "'cartwheeling 🤸‍♀️'",
    socialMeaning: "Cartwheel, Gymnastics posts and sports Twitter",
    caution: "Don't mock athletes or beginners.",
    examples: [
      { context: "Sport", text: "🤸‍♀️" },
      { context: "Gym", text: "PR 🤸‍♀️" },
      { context: "Game", text: "🤸‍♀️" },
      { context: "Train", text: "🤸‍♀️" },
      { context: "Team", text: "🤸‍♀️" },
    ],
    contextBlocks: [
      { title: "Sport", body: "Cartwheel, Gymnastics" },
      { title: "Gender pair", body: "Same sport — woman variant." },
    ],
    searchIntents: ["woman-cartwheeling emoji", "🤸‍♀️ meaning"],
    whenNotToUse: ["Trash talk escalation."],
    faqs: [
      { question: "What does 🤸‍♀️ mean?", answer: "🤸‍♀️ Woman cartwheeling — gymnastics, playful energy, cheer." },
    ],
  },
};
