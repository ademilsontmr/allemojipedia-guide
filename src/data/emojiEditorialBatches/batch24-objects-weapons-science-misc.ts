import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "24-objects-weapons-science-misc";

/** Batch 24 P2 — final objects thin pages; completes category manual coverage. */
export const batch24ObjectsWeaponsScienceMisc: Record<string, EmojiBatchEnrichment> = {
  bomb: {
    batchId: BATCH_ID,
    searchTitle: "Bomb Emoji (💣) Meaning: Explosive, Gaming, and 'About to Drop'",
    snippetAnswer:
      "💣 Bomb marks explosives and hype — gaming bombs, 'drop incoming' memes, stressful deadlines, and cartoon slapstick (never real threats).",
    detailedParagraphs: [
      "Bomb (💣) shows round cartoon bomb with fuse — Unicode symbol for gaming, memes, and metaphorical 'explosive' moments.",
      "Gamers text 💣 when planting or throwing — CS and party game culture.",
      "'Album is a 💣' means masterpiece incoming — music and product hype slang.",
    ],
    textingMeaning: "'Plant the 💣', 'This slaps 💣', 'Deadline 💣'.",
    socialMeaning: "Gaming clips, album drop hype, and stress memes tag 💣 — cartoon tone.",
    caution: "Never use 💣 for real violence, threats, or during actual attacks — zero tolerance.",
    examples: [
      { context: "Gaming", text: "Planted 💣" },
      { context: "Music", text: "Track 💣" },
      { context: "Stress", text: "Inbox 💣" },
      { context: "Meme", text: "Cartoon 💣" },
      { context: "Hype", text: "Drops Friday 💣" },
    ],
    contextBlocks: [
      { title: "Gaming default", body: "💣 reads video game explosive — not realistic terrorism." },
      { title: "Hype slang", body: "'That's a 💣' = unexpectedly great — positive metaphor." },
      { title: "Zero threats", body: "Joking 💣 threats get bans and legal trouble — don't." },
    ],
    searchIntents: ["bomb emoji", "💣 meaning", "bomb emoji copy paste", "💣 gaming"],
    whenNotToUse: ["Real violence or threats — never.", "During bombing news — insensitive."],
    faqs: [
      { question: "What does 💣 mean?", answer: "Cartoon bomb — gaming, hype slang, stress metaphor — not real threats." },
      { question: "💣 for compliments?", answer: "Slang: 'this song is a bomb' = amazing — positive context." },
    ],
  },

  "bow-and-arrow": {
    batchId: BATCH_ID,
    searchTitle: "Bow and Arrow Emoji (🏹) Meaning: Archery, Sagittarius, and Precision",
    snippetAnswer:
      "🏹 Bow and Arrow marks archery and aim — Sagittarius zodiac, fantasy RPG rangers, Cupid love metaphors, and 'hit the target' posts.",
    detailedParagraphs: [
      "Bow and Arrow (🏹) shows drawn bow — Unicode symbol for archery sport, mythology, and precision.",
      "Sagittarius season floods 🏹 — horoscope and birthday posts November–December.",
      "Fantasy D&D rangers and Legolas memes default to 🏹 — ranged DPS identity.",
    ],
    textingMeaning: "'Archery 🏹', 'Sag season 🏹', 'On target 🏹'.",
    socialMeaning: "Olympic archery, zodiac content, and fantasy gaming tag 🏹.",
    caution: "Cupid 🏹 love metaphors fine among friends — consent in flirting.",
    examples: [
      { context: "Zodiac", text: "Sag ♐🏹" },
      { context: "Sport", text: "Range day 🏹" },
      { context: "RPG", text: "Ranger 🏹" },
      { context: "Target", text: "Nailed it 🏹" },
      { context: "Fantasy", text: "Elf 🏹" },
    ],
    contextBlocks: [
      { title: "Sagittarius", body: "🏹 archer symbol — zodiac posts dominate seasonal search." },
      { title: "Vs ⚔️", body: "⚔️ crossed swords melee. 🏹 ranged bow attack." },
      { title: "Cupid adjacency", body: "Love 'struck by arrow' metaphors borrow 🏹 lightly." },
    ],
    searchIntents: ["bow and arrow emoji", "🏹 meaning", "archery emoji", "🏹 sagittarius"],
    whenNotToUse: ["Real weapon threats.", "Hunting controversy threads without care."],
    faqs: [
      { question: "What does 🏹 mean?", answer: "Bow and arrow — archery, Sagittarius, fantasy, precision." },
      { question: "🏹 zodiac?", answer: "Sagittarius symbol is archer — 🏹 spikes in Nov–Dec." },
    ],
  },

  boomerang: {
    batchId: BATCH_ID,
    searchTitle: "Boomerang Emoji (🪃) Meaning: Returns, Australia, and Karma Comes Back",
    snippetAnswer:
      "🪃 Boomerang means return and karma — what goes around comes around, Australian culture, and 'it came back to bite you' memes.",
    detailedParagraphs: [
      "Boomerang (🪃) shows returning curved throw stick — Unicode symbol for Australian heritage and return metaphors.",
      "Argument threads use 🪃 when hypocrisy returns — karma dunk emoji.",
      "Travel content from Australia features 🪃 — souvenir and indigenous craft respect context.",
    ],
    textingMeaning: "'Karma 🪃', 'Returned 🪃', 'Australia 🪃'.",
    socialMeaning: "Karma memes, Australia travel, and 'comment came back' posts tag 🪃.",
    caution: "Indigenous boomerang craft is cultural — not only meme prop.",
    examples: [
      { context: "Karma", text: "Came back 🪃" },
      { context: "Travel", text: "Sydney 🪃" },
      { context: "Meme", text: "Returned 🪃" },
      { context: "Hypocrisy", text: "Boomerang 🪃" },
      { context: "Gift", text: "Souvenir 🪃" },
    ],
    contextBlocks: [
      { title: "Karma metaphor", body: "🪃 = action returns to sender — internet justice slang." },
      { title: "Australian icon", body: "🪃 tourist symbol — learn indigenous significance beyond gift shop." },
      { title: "Vs ↩️", body: "↩️ undo/return arrow. 🪃 physical returning throw object." },
    ],
    searchIntents: ["boomerang emoji", "🪃 meaning", "karma emoji", "🪃 copy paste"],
    whenNotToUse: ["Don't mock indigenous culture with 🪃 props alone."],
    faqs: [
      { question: "What does 🪃 mean?", answer: "Boomerang — returns, karma, Australia, what goes around." },
      { question: "🪃 karma meme?", answer: "Yes — 'boomerang' when consequences return to someone." },
    ],
  },

  dagger: {
    batchId: BATCH_ID,
    searchTitle: "Dagger Emoji (🗡️) Meaning: Fantasy, Betrayal, and RPG Combat",
    snippetAnswer:
      "🗡️ Dagger marks fantasy blades and betrayal — RPG rogues, 'backstab' drama, Shakespeare energy, and close combat gaming.",
    detailedParagraphs: [
      "Dagger (🗡️) shows short blade — Unicode symbol for fantasy RPG, betrayal metaphors, and medieval aesthetic.",
      "'Took a 🗡️ to the heart' means emotional betrayal — drama thread staple.",
      "TTRPG rogues and assassins build identity around 🗡️ — sneak attack culture.",
    ],
    textingMeaning: "'Rogue 🗡️', 'Backstab 🗡️', 'Betrayal 🗡️'.",
    socialMeaning: "Fantasy art, D&D character sheets, and relationship drama memes use 🗡️.",
    caution: "Real violence and threats forbidden — fantasy/drama metaphor only.",
    examples: [
      { context: "RPG", text: "Sneak attack 🗡️" },
      { context: "Drama", text: "Backstab 🗡️" },
      { context: "Fantasy", text: "Assassin 🗡️" },
      { context: "Meme", text: "Et tu 🗡️" },
      { context: "Cosplay", text: "Prop 🗡️" },
    ],
    contextBlocks: [
      { title: "Betrayal slang", body: "🗡️ in the back = classic betrayal metaphor — Shakespeare coded." },
      { title: "Vs ⚔️", body: "⚔️ crossed swords duel. 🗡️ single dagger stealth." },
      { title: "Vs 🔪", body: "🔪 kitchen knife. 🗡️ fantasy/historical dagger aesthetic." },
    ],
    searchIntents: ["dagger emoji", "🗡️ meaning", "fantasy dagger emoji", "🗡️ copy paste"],
    whenNotToUse: ["Real threats.", "Kitchen context — 🔪."],
    faqs: [
      { question: "What does 🗡️ mean?", answer: "Dagger — fantasy RPG, betrayal, rogue, close blade." },
      { question: "🗡️ backstab?", answer: "Metaphor for betrayal — gaming and drama threads." },
    ],
  },

  "crossed-swords": {
    batchId: BATCH_ID,
    searchTitle: "Crossed Swords Emoji (⚔️) Meaning: Battle, Debate, and Gaming Combat",
    snippetAnswer:
      "⚔️ Crossed Swords mean battle and conflict — RPG combat, heated debates, pirate aesthetic, and 'fight me' playful energy.",
    detailedParagraphs: [
      "Crossed Swords (⚔️) show two blades crossed — Unicode symbol for combat, duel, and opposition.",
      "Twitter debate threads escalate with ⚔️ — quote-tweet battle memes.",
      "Historical and pirate content uses ⚔️ — swashbuckler aesthetic without single blade.",
    ],
    textingMeaning: "'Debate ⚔️', 'Boss fight ⚔️', 'Duel ⚔️'.",
    socialMeaning: "Gaming boss fights, forum arguments, and medieval fair posts tag ⚔️.",
    caution: "Playful ⚔️ vs real harassment — know the line in debates.",
    examples: [
      { context: "Debate", text: "Threads ⚔️" },
      { context: "Game", text: "Boss ⚔️" },
      { context: "History", text: "Duel ⚔️" },
      { context: "Pirate", text: "Clash ⚔️" },
      { context: "Playful", text: "Fight me ⚔️" },
    ],
    contextBlocks: [
      { title: "Vs 🗡️", body: "🗡️ single dagger. ⚔️ crossed pair — open conflict." },
      { title: "Debate meme", body: "Quote-tweet wars = ⚔️ — internet battle shorthand." },
      { title: "RPG combat", body: "Turn-based attack UI borrowed ⚔️ iconography." },
    ],
    searchIntents: ["crossed swords emoji", "⚔️ meaning", "swords emoji", "⚔️ copy paste"],
    whenNotToUse: ["Real violence incitement.", "Sensitive war news without care."],
    faqs: [
      { question: "What does ⚔️ mean?", answer: "Crossed swords — battle, debate, duel, gaming combat." },
      { question: "⚔️ debate?", answer: "Common for heated Twitter/thread arguments — metaphorical fight." },
    ],
  },

  "white-cane": {
    batchId: BATCH_ID,
    searchTitle: "White Cane Emoji (🦯) Meaning: Blind Mobility, Accessibility, and White Cane Day",
    snippetAnswer:
      "🦯 White Cane marks blind and low-vision mobility — White Cane Day, accessibility awareness, and respect for cane users' independence.",
    detailedParagraphs: [
      "White Cane (🦯) shows mobility cane — Unicode symbol for blind and visually impaired navigation.",
      "Advocates educate on 🦯 right-of-way — don't grab cane without permission.",
      "White Cane Day (Oct 15) posts center 🦯 — awareness and policy threads.",
    ],
    textingMeaning: "'White Cane Day 🦯', 'Step-free route 🦯', 'Accessibility 🦯'.",
    socialMeaning: "Disability advocacy, urban planning accessibility, and blind creator content tag 🦯.",
    caution: "Never block or touch someone's 🦯 — serious safety and autonomy issue.",
    examples: [
      { context: "Advocacy", text: "Oct 15 🦯" },
      { context: "Access", text: "Curb cuts 🦯" },
      { context: "Awareness", text: "Learn 🦯" },
      { context: "Transit", text: "Stop announcements 🦯" },
      { context: "Policy", text: "Rights 🦯" },
    ],
    contextBlocks: [
      { title: "Mobility tool", body: "🦯 independence symbol — not pity icon." },
      { title: "Vs 🦽", body: "🦽 wheelchair mobility. 🦯 blind/low-vision navigation cane." },
      { title: "Etiquette", body: "Don't relocate user or grab 🦯 — ask before 'helping'." },
    ],
    searchIntents: ["white cane emoji", "🦯 meaning", "blind cane emoji", "🦯 accessibility"],
    whenNotToUse: ["Don't use to mock blindness.", "Old person generic — wrong symbol."],
    faqs: [
      { question: "What does 🦯 mean?", answer: "White cane — blind/low-vision mobility, accessibility awareness." },
      { question: "White Cane Day?", answer: "October 15 awareness day — 🦯 posts educate public." },
    ],
  },

  "broken-chain": {
    batchId: BATCH_ID,
    searchTitle: "Broken Chain Emoji (⛓️‍💥) Meaning: Freedom, Break Free, and Liberation",
    snippetAnswer:
      "⛓️‍💥 Broken Chain means breaking free — liberation metaphors, escaping toxic jobs, addiction recovery milestones, and unshackled posts.",
    detailedParagraphs: [
      "Broken Chain (⛓️‍💥) shows chain link snapping — Unicode symbol for freedom and breaking constraints.",
      "Quit job posts celebrate ⛓️‍💥 — left toxic workplace liberation narrative.",
      "Recovery communities mark ⛓️‍💥 sobriety anniversaries — chains of addiction broken.",
    ],
    textingMeaning: "'Free ⛓️‍💥', 'Left the job ⛓️‍💥', 'Break chains ⛓️‍💥'.",
    socialMeaning: "Motivational posts, labor quit stories, and recovery milestones tag ⛓️‍💥.",
    caution: "Serious trauma behind chains metaphor — don't minimize with glib memes.",
    examples: [
      { context: "Job", text: "Resigned ⛓️‍💥" },
      { context: "Recovery", text: "1 year ⛓️‍💥" },
      { context: "Freedom", text: "Unshackled ⛓️‍💥" },
      { context: "Move", text: "New chapter ⛓️‍💥" },
      { context: "Motivation", text: "Break it ⛓️‍💥" },
    ],
    contextBlocks: [
      { title: "Liberation", body: "⛓️‍💥 marks leaving constraining situation — job, habit, relationship." },
      { title: "Vs ⛓️", body: "⛓️ linked chains bound. ⛓️‍💥 broken — freedom." },
      { title: "Recovery", body: "Sobriety milestones respectfully use ⛓️‍💥 — community specific." },
    ],
    searchIntents: ["broken chain emoji", "⛓️‍💥 meaning", "break free emoji", "chain break emoji"],
    whenNotToUse: ["Slavery history trivialized — extreme care with metaphor.", "Joking addiction chains."],
    faqs: [
      { question: "What does ⛓️‍💥 mean?", answer: "Broken chain — freedom, break free, liberation, recovery." },
      { question: "⛓️‍💥 vs ⛓️?", answer: "⛓️ bound chains; broken variant shows snap/liberation." },
    ],
  },

  chains: {
    batchId: BATCH_ID,
    searchTitle: "Chains Emoji (⛓️) Meaning: Locked In, Supply Chain, and Bound",
    snippetAnswer:
      "⛓️ Chains mark being locked in or linked — supply chain memes, blockchain adjacency, bound metaphor, and heavy metal aesthetic.",
    detailedParagraphs: [
      "Chains (⛓️) show linked metal chains — Unicode symbol for connection, constraint, and industrial links.",
      "Logistics Twitter jokes about ⛓️ supply chain — port and shipping discourse.",
      "Crypto 'on-chain' posts pun ⛓️ — blockchain community wordplay.",
    ],
    textingMeaning: "'Supply ⛓️', 'Locked in ⛓️', 'On chain ⛓️'.",
    socialMeaning: "Logistics crisis memes, crypto threads, and gym 'chains' equipment posts use ⛓️.",
    caution: "Slavery and incarceration references with ⛓️ require gravity — never edgy jokes.",
    examples: [
      { context: "Logistics", text: "Broken ⛓️" },
      { context: "Crypto", text: "On-chain ⛓️" },
      { context: "Gym", text: "Plate ⛓️" },
      { context: "Contract", text: "Locked ⛓️" },
      { context: "Metal", text: "Aesthetic ⛓️" },
    ],
    contextBlocks: [
      { title: "Supply chain", body: "⛓️ shorthand for global logistics links — news cycle 2021–22 memes." },
      { title: "Vs ⛓️‍💥", body: "⛓️ linked bound. ⛓️‍💥 broken free." },
      { title: "Sensitive history", body: "⛓️ evokes bondage and slavery — handle with care in copy." },
    ],
    searchIntents: ["chains emoji", "⛓️ meaning", "chain link emoji", "⛓️ supply chain"],
    whenNotToUse: ["Mocking incarceration or slavery.", "Lighthearted during supply crisis affecting people."],
    faqs: [
      { question: "What does ⛓️ mean?", answer: "Chains — linked, locked in, supply chain, constraint metaphor." },
      { question: "⛓️ crypto?", answer: "Pun on 'on-chain' blockchain transactions in crypto Twitter." },
    ],
  },

  hook: {
    batchId: BATCH_ID,
    searchTitle: "Hook Emoji (🪝) Meaning: Fishing, Pirate, Crochet, and Catch",
    snippetAnswer:
      "🪝 Hook marks fishing and hooks — angling trips, pirate captain aesthetic, crochet hobby, and 'hook them in' marketing slang.",
    detailedParagraphs: [
      "Hook (🪝) shows curved metal hook — Unicode multi-context: fishing, pirates, crafts.",
      "Fishing opener posts lead 🪝 — lake dawn and tackle box content.",
      "Crochet TikTok reclaimed 🪝 — yarn hook tutorials and amigurumi.",
    ],
    textingMeaning: "'Fishing 🪝', 'Crochet 🪝', 'Hooked 🪝'.",
    socialMeaning: "Angler Instagram, pirate cosplay, and crochet community tag 🪝.",
    caution: "Marketing 'hook' manipulative tactics — ethical copy matters.",
    examples: [
      { context: "Fish", text: "Dawn 🪝" },
      { context: "Crochet", text: "WIP 🪝" },
      { context: "Pirate", text: "Captain 🪝" },
      { context: "Marketing", text: "Hook line 🪝" },
      { context: "Lake", text: "Weekend 🪝" },
    ],
    contextBlocks: [
      { title: "Fishing", body: "🪝 angler identity — catch and release ethics vary." },
      { title: "Crochet", body: "🪝 yarn hook — craft community distinct from fish hook." },
      { title: "Pirate trope", body: "Captain hook hand cosplay — 🪝 visual shorthand." },
    ],
    searchIntents: ["hook emoji", "🪝 meaning", "fishing hook emoji", "🪝 crochet"],
    whenNotToUse: ["Peter Pan trauma jokes at wrong audience.", "Manipulation glorification."],
    faqs: [
      { question: "What does 🪝 mean?", answer: "Hook — fishing, crochet, pirate, marketing hook metaphor." },
      { question: "🪝 contexts?", answer: "Angling, yarn craft, pirate — caption clarifies." },
    ],
  },

  alembic: {
    batchId: BATCH_ID,
    searchTitle: "Alembic Emoji (⚗️) Meaning: Alchemy, Chemistry, and Lab Aesthetic",
    snippetAnswer:
      "⚗️ Alembic marks alchemy and chemistry — potion brewing aesthetic, lab glassware, fantasy alchemist RP, and science history posts.",
    detailedParagraphs: [
      "Alembic (⚗️) shows distillation flask — Unicode symbol for alchemy, chemistry, and transformation metaphors.",
      "Fantasy alchemist characters brand ⚗️ — potion craft RPG aesthetic.",
      "Chemistry educators use ⚗️ for historical distillation lessons — pre-modern science.",
    ],
    textingMeaning: "'Alchemy ⚗️', 'Lab ⚗️', 'Brewing ⚗️'.",
    socialMeaning: "Fantasy art, chem history threads, and witchy aesthetic boards tag ⚗️.",
    caution: "Home distillation illegal in many places — don't encourage unsafe chemistry.",
    examples: [
      { context: "Fantasy", text: "Potion ⚗️" },
      { context: "Chem", text: "Distill ⚗️" },
      { context: "RP", text: "Alchemist ⚗️" },
      { context: "Aesthetic", text: "Witch ⚗️" },
      { context: "History", text: "Old lab ⚗️" },
    ],
    contextBlocks: [
      { title: "Alchemy lore", body: "⚗️ transformation symbol — lead to gold metaphor extended to self-improvement." },
      { title: "Vs 🧪", body: "🧪 test tube modern lab. ⚗️ classical alembic still." },
      { title: "Vs 🔬", body: "🔬 microscope research. ⚗️ distillation/brewing vessel." },
    ],
    searchIntents: ["alembic emoji", "⚗️ meaning", "alchemy emoji", "⚗️ copy paste"],
    whenNotToUse: ["Illegal drug production hints.", "Real lab without safety training."],
    faqs: [
      { question: "What does ⚗️ mean?", answer: "Alembic — alchemy, chemistry, potions, distillation aesthetic." },
      { question: "⚗️ vs 🧪?", answer: "⚗️ classical still; 🧪 modern test tube lab." },
    ],
  },

  "petri-dish": {
    batchId: BATCH_ID,
    searchTitle: "Petri Dish Emoji (🧫) Meaning: Lab Science, Biology, and Cultures",
    snippetAnswer:
      "🧫 Petri Dish marks lab biology — microbiology class, cell cultures, science fair projects, and 'something growing' humor.",
    detailedParagraphs: [
      "Petri Dish (🧫) shows culture dish with growth — Unicode symbol for microbiology and lab work.",
      "Bio students dread 🧫 contamination — lab partner meme culture.",
      "Metaphorical 🧫 for ideas 'growing in culture' — startup petri dish slang niche.",
    ],
    textingMeaning: "'Lab day 🧫', 'Culture growing 🧫', 'Bio hw 🧫'.",
    socialMeaning: "STEM student life, science fair Instagram, and lab mishap stories tag 🧫.",
    caution: "Real cultures can be hazardous — biosafety levels matter in actual labs.",
    examples: [
      { context: "Lab", text: "Contaminated 🧫" },
      { context: "Class", text: "Bio 🧫" },
      { context: "Fair", text: "Project 🧫" },
      { context: "Meme", text: "Growing 🧫" },
      { context: "Research", text: "Plate 🧫" },
    ],
    contextBlocks: [
      { title: "Microbiology", body: "🧫 standard intro bio lab imagery — bacteria colonies." },
      { title: "Vs 🧪", body: "🧪 liquid test. 🧫 agar plate culture growth." },
      { title: "Contamination joke", body: "Lab students unite over ruined 🧫 — shared trauma." },
    ],
    searchIntents: ["petri dish emoji", "🧫 meaning", "biology lab emoji", "🧫 copy paste"],
    whenNotToUse: ["Food growing mold joke — some audiences grossed out."],
    faqs: [
      { question: "What does 🧫 mean?", answer: "Petri dish — lab biology, cultures, microbiology, science fair." },
      { question: "🧫 contamination?", answer: "Lab meme when unwanted growth ruins experiment plate." },
    ],
  },

  "drop-of-blood": {
    batchId: BATCH_ID,
    searchTitle: "Drop of Blood Emoji (🩸) Meaning: Donation, Period, and Medical",
    snippetAnswer:
      "🩸 Drop of Blood marks blood context — donation drives, period talk, medical tests, horror aesthetic, and gaming HP.",
    detailedParagraphs: [
      "Drop of Blood (🩸) shows red blood droplet — Unicode symbol for medical, menstrual, and donation context.",
      "Blood drive posts lead 🩸 — Red Cross and hospital need campaigns.",
      "Period normalization threads use 🩸 openly — destigmatizing body talk.",
    ],
    textingMeaning: "'Donate 🩸', 'Period 🩸', 'Lab draw 🩸'.",
    socialMeaning: "Health advocacy, horror season, and gaming damage indicators use 🩸.",
    caution: "Gore and self-harm — never encourage; blood donation needs medical screening.",
    examples: [
      { context: "Donate", text: "Drive 🩸" },
      { context: "Period", text: "Cycle 🩸" },
      { context: "Lab", text: "Draw 🩸" },
      { context: "Horror", text: "Season 🩸" },
      { context: "Game", text: "Low HP 🩸" },
    ],
    contextBlocks: [
      { title: "Donation", body: "🩸 encourages blood donor signup — check eligibility locally." },
      { title: "Period destigmatization", body: "🩸 normalizes menstrual talk — health not shame." },
      { title: "Vs 💉", body: "💉 syringe vaccine/draw tool. 🩸 blood itself." },
    ],
    searchIntents: ["blood emoji", "🩸 meaning", "drop of blood emoji", "🩸 copy paste"],
    whenNotToUse: ["Self-harm content.", "Graphic violence glorification."],
    faqs: [
      { question: "What does 🩸 mean?", answer: "Blood drop — donation, period, medical, horror, gaming HP." },
      { question: "🩸 period?", answer: "Common in destigmatizing menstrual health conversations." },
    ],
  },

  headstone: {
    batchId: BATCH_ID,
    searchTitle: "Headstone Emoji (🪦) Meaning: Graveyard, Memorial, and Halloween",
    snippetAnswer:
      "🪦 Headstone marks graves and memorial — cemetery visits, Halloween decor, dark humor, and remembering lost loved ones.",
    detailedParagraphs: [
      "Headstone (🪦) shows grave marker — Unicode symbol for death, memorial, and spooky season.",
      "Día de los Muertos and memorial days use 🪦 respectfully — honor deceased.",
      "Halloween lawn decor posts stack 🪦 with 🎃 — seasonal not solemn.",
    ],
    textingMeaning: "'Cemetery 🪦', 'RIP 🪦', 'Spooky decor 🪦'.",
    socialMeaning: "Memorial tributes, horror aesthetic, and cemetery photography tag 🪦.",
    caution: "Grief sensitive — don't use 🪦 to mock deaths or harass.",
    examples: [
      { context: "Memorial", text: "Visit 🪦" },
      { context: "Halloween", text: "Yard 🪦" },
      { context: "Honor", text: "Remember 🪦" },
      { context: "Horror", text: "Set 🪦" },
      { context: "History", text: "Old graves 🪦" },
    ],
    contextBlocks: [
      { title: "Memorial tone", body: "🪦 for genuine remembrance — separate from Halloween kitsch." },
      { title: "Vs ⚰️", body: "⚰️ coffin burial. 🪦 grave marker headstone." },
      { title: "Vs 🏺", body: "🏺 funeral urn ashes. 🪦 ground burial marker." },
    ],
    searchIntents: ["headstone emoji", "🪦 meaning", "gravestone emoji", "🪦 copy paste"],
    whenNotToUse: ["Mocking someone's death.", "Casual during fresh grief to affected people."],
    faqs: [
      { question: "What does 🪦 mean?", answer: "Headstone — cemetery, memorial, Halloween, remembrance." },
      { question: "🪦 vs ⚰️?", answer: "🪦 grave marker; ⚰️ coffin — related death symbols." },
    ],
  },

  "funeral-urn": {
    batchId: BATCH_ID,
    searchTitle: "Funeral Urn Emoji (⚱️) Meaning: Cremation, Memorial, and Loss",
    snippetAnswer:
      "⚱️ Funeral Urn marks cremation and memorial — ash interment, loss remembrance, and solemn tribute posts.",
    detailedParagraphs: [
      "Funeral Urn (⚱️) shows cremation urn — Unicode symbol for memorial and end-of-life context.",
      "Anniversary of loss posts include ⚱️ — quiet remembrance among family.",
      "Genealogy and history accounts reference ⚱️ in burial records discussion.",
    ],
    textingMeaning: "'Memorial ⚱️', 'Anniversary ⚱️', 'Cremation ⚱️'.",
    socialMeaning: "Grief support communities, funeral planning info, and history posts use ⚱️ solemnly.",
    caution: "Extremely sensitive — never joke about someone's ⚱️ or ashes.",
    examples: [
      { context: "Memorial", text: "Miss you ⚱️" },
      { context: "Anniversary", text: "Years ⚱️" },
      { context: "Plan", text: "Wishes ⚱️" },
      { context: "History", text: "Record ⚱️" },
      { context: "Family", text: "Together ⚱️" },
    ],
    contextBlocks: [
      { title: "Cremation", body: "⚱️ holds ashes — cultural practices vary globally." },
      { title: "Vs 🪦", body: "🪦 ground headstone. ⚱️ urn cremation memorial." },
      { title: "Vs ⚰️", body: "⚰️ coffin burial vessel. ⚱️ post-cremation remains." },
    ],
    searchIntents: ["funeral urn emoji", "⚱️ meaning", "urn emoji", "⚱️ memorial"],
    whenNotToUse: ["Dark humor at strangers' expense.", "Halloween casual if audience grieving."],
    faqs: [
      { question: "What does ⚱️ mean?", answer: "Funeral urn — cremation, memorial, loss remembrance." },
      { question: "⚱️ sensitivity?", answer: "Use only with respect — grief context varies by audience." },
    ],
  },

  cigarette: {
    batchId: BATCH_ID,
    searchTitle: "Cigarette Emoji (🚬) Meaning: Smoking, Stress, and Quit Journey",
    snippetAnswer:
      "🚬 Cigarette marks smoking — stress memes, quit-smoking milestones, film noir aesthetic, and health warning context.",
    detailedParagraphs: [
      "Cigarette (🚬) shows lit cigarette — Unicode symbol for smoking culture and stress imagery.",
      "Quit journey posts contrast 🚬 with 🚭 — days smoke-free counters.",
      "Film noir and vintage aesthetic borrows 🚬 — doesn't endorse health-wise.",
    ],
    textingMeaning: "'Stress 🚬', 'Quit day 30 🚭 not 🚬', 'Noir 🚬'.",
    socialMeaning: "Quit support groups ironically reference past 🚬 — health advocacy prefers 🚭.",
    caution: "Smoking kills — don't glamorize to minors; trigger-aware posting.",
    examples: [
      { context: "Quit", text: "Day 100 🚭" },
      { context: "Stress", text: "Need break 🚬" },
      { context: "Noir", text: "Aesthetic 🚬" },
      { context: "Health", text: "Don't start 🚬" },
      { context: "Past", text: "Used to 🚬" },
    ],
    contextBlocks: [
      { title: "Health reality", body: "🚬 associated with cancer and addiction — platforms may restrict." },
      { title: "Vs 🚭", body: "🚭 no smoking sign. 🚬 active cigarette — opposite message." },
      { title: "Quit culture", body: "Ex-smokers celebrate leaving 🚬 behind — support not shame." },
    ],
    searchIntents: ["cigarette emoji", "🚬 meaning", "smoking emoji", "🚬 copy paste"],
    whenNotToUse: ["Promoting smoking to youth.", "Triggering quitters without content warning."],
    faqs: [
      { question: "What does 🚬 mean?", answer: "Cigarette — smoking, stress meme, noir aesthetic — health risks real." },
      { question: "🚬 vs 🚭?", answer: "🚬 smoking; 🚭 no smoking — prefer 🚭 for health messaging." },
    ],
  },

  placard: {
    batchId: BATCH_ID,
    searchTitle: "Placard Emoji (🪧) Meaning: Protest Signs, Picket, and Demonstrations",
    snippetAnswer:
      "🪧 Placard marks protest signs and picket boards — demonstrations, activism, march captions, and holding signs at rallies.",
    detailedParagraphs: [
      "Placard (🪧) shows sign on stick — Unicode symbol for protest, picket lines, and public demonstration.",
      "March organizers promote 🪧 for sign-making meetups — cardboard and marker culture.",
      "Labor strike threads feature 🪧 — union picket identity.",
    ],
    textingMeaning: "'March 🪧', 'Sign ready 🪧', 'Picket 🪧'.",
    socialMeaning: "Activism Instagram, protest livestreams, and union solidarity posts tag 🪧.",
    caution: "Know local protest laws — 🪧 doesn't replace safety planning.",
    examples: [
      { context: "March", text: "Signs up 🪧" },
      { context: "Strike", text: "Line 🪧" },
      { context: "Make", text: "Poster night 🪧" },
      { context: "Rally", text: "Demand 🪧" },
      { context: "Solidarity", text: "Together 🪧" },
    ],
    contextBlocks: [
      { title: "Protest symbol", body: "🪧 visual shorthand for demonstration — sign in hand." },
      { title: "Vs 📢", body: "📢 announcement loud. 🪧 written sign message." },
      { title: "Labor", body: "Picket 🪧 lines — union strike visual language." },
    ],
    searchIntents: ["placard emoji", "🪧 protest sign", "placard meaning emoji", "🪧 copy paste"],
    whenNotToUse: ["Clipboard checklist — 📋 different object."],
    faqs: [
      { question: "What does 🪧 mean?", answer: "Placard — protest/picket sign for demonstrations and activism." },
      { question: "🪧 vs 📋?", answer: "🪧 is protest sign on stick; 📋 is office clipboard." },
    ],
  },
};
