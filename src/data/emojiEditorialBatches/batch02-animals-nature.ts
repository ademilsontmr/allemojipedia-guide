import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "02-animals-nature";

export const batch02AnimalsNature: Record<string, EmojiBatchEnrichment> = {
  monkey: {
    batchId: BATCH_ID,
    searchTitle: "Monkey Emoji Meaning: Playfulness, Mischief, and 'Monkey Mind'",
    snippetAnswer:
      "The monkey emoji often signals playfulness, mischief, or chaotic energy — and in mindfulness talk, 'monkey mind' (restless thoughts). Context decides whether it is cute or chaotic.",
    detailedParagraphs: [
      "Monkey (🐒) fits silly group chats — teasing friends, wild weekends, or kids acting hyper. It is less aggressive than 🦍 gorilla.",
      "Meditation and wellness posts use 'monkey mind' with 🐒 to describe racing thoughts — a different, calmer register.",
      "Zoo trips, wildlife documentaries, and primate conservation accounts use 🐒 literally for monkeys and apes in nature.",
    ],
    textingMeaning: "Friends send 🐒 when someone is clowning, copying behavior, or 'monkey see monkey do.'",
    socialMeaning: "Travel and wildlife creators tag 🐒 on rainforest and sanctuary content.",
    caution: "Avoid 🐒 as a slur or insult toward people — keep it playful among friends who understand the joke.",
    examples: [
      { context: "Mischief", text: "Stop copying me 🐒" },
      { context: "Kids", text: "They're climbing everything 🐒" },
      { context: "Zoo trip", text: "Primates were hilarious 🐒" },
      { context: "Chaos", text: "Monday energy 🐒" },
      { context: "Mindfulness", text: "Monkey mind today 🐒" },
    ],
    contextBlocks: [
      { title: "Playful teasing", body: "🐒 marks harmless mimicry and inside jokes in close friend groups." },
      { title: "Wildlife tourism", body: "Ethical sanctuaries share 🐒 with education about habitat loss." },
      { title: "Wellness language", body: "'Monkey mind' posts use 🐒 for distracted meditation days." },
    ],
    searchIntents: ["monkey emoji meaning", "🐒 playful emoji", "monkey mind emoji"],
    whenNotToUse: ["Do not use 🐒 to mock someone's appearance or ethnicity."],
    faqs: [{ question: "🐒 vs 🐵?", answer: "🐒 is monkey; 🐵 is monkey face — similar tone, pick either for playfulness." }],
  },

  tiger: {
    batchId: BATCH_ID,
    searchTitle: "Tiger Emoji Meaning: Strength, Zodiac, and Fierce Confidence",
    snippetAnswer:
      "The tiger emoji means tigers in nature, fierce confidence, sports mascots, or Chinese zodiac Tiger years — bold and powerful imagery.",
    detailedParagraphs: [
      "Tiger (🐅) tags wildlife photography, conservation fundraisers, and Bengal tiger documentaries.",
      "In Chinese zodiac threads, 🐅 marks Tiger birth years and Lunar New Year greetings.",
      "Compliments use 🐅 for 'fierce' outfits, athletic performance, or comeback energy — 'absolute tiger.'",
    ],
    textingMeaning: "Send 🐅 to hype someone's bold move or to share tiger conservation news.",
    socialMeaning: "Athletes and coaches use 🐅 for mascot culture and pre-game motivation.",
    caution: "Rarely negative — still avoid comparing people to tigers in condescending ways.",
    examples: [
      { context: "Hype", text: "You ate that performance 🐅" },
      { context: "Zodiac", text: "Year of the Tiger vibes 🐅" },
      { context: "Wildlife", text: "Safari highlight 🐅" },
      { context: "Fashion", text: "Fierce fit 🐅" },
      { context: "Sports", text: "Mascot energy tonight 🐅" },
    ],
    contextBlocks: [
      { title: "Lunar New Year", body: "🐅 appears in zodiac greetings and red-envelope seasons." },
      { title: "Conservation", body: "Wildlife NGOs use 🐅 for anti-poaching and habitat campaigns." },
      { title: "Compliments", body: "Friends drop 🐅 when someone is bold, unstoppable, or stylishly fierce." },
    ],
    searchIntents: ["tiger emoji meaning", "🐅 zodiac tiger", "fierce tiger emoji"],
    whenNotToUse: ["Skip in threads about tiger attacks or trauma unless reporting news respectfully."],
    faqs: [{ question: "What does 🐅 mean as a compliment?", answer: "You're fierce, powerful, dominating — in a positive hype way." }],
  },

  donkey: {
    batchId: BATCH_ID,
    searchTitle: "Donkey Emoji Meaning: Stubborn Jokes, Farm Life, and Political Symbols",
    snippetAnswer:
      "The donkey emoji can mean literal donkeys on farms, 'stubborn' humor, or U.S. political shorthand for the Democratic Party — tone depends entirely on the chat.",
    detailedParagraphs: [
      "Donkey (🫏) is newer in Unicode — farmers and rural creators use it for pack animals and trail rides.",
      "Friends tease 'stubborn as a donkey' with 🫏 when someone refuses to change their mind.",
      "In U.S. political memes, 🫏 sometimes stands in for the Democratic donkey symbol — know your audience before using it that way.",
    ],
    textingMeaning: "Often stubborn jokes or farm updates — clarify if you mean politics.",
    socialMeaning: "Rural lifestyle and hiking posts tag 🫏 for mule trains and countryside content.",
    caution: "Political use of 🫏 can start arguments — avoid in mixed-family chats unless intentional.",
    examples: [
      { context: "Stubborn", text: "You will not budge 🫏" },
      { context: "Farm", text: "Meet the new donkey 🫏" },
      { context: "Hiking", text: "Pack mule carried the gear 🫏" },
      { context: "Joke", text: "Ass… donkey energy today 🫏" },
      { context: "Politics", text: "Election night thread 🫏" },
    ],
    contextBlocks: [
      { title: "Farm and trail life", body: "🫏 marks working animals on ranches and backcountry trips." },
      { title: "Stubborn humor", body: "Light teasing among friends when someone digs in their heels." },
      { title: "U.S. politics", body: "Some accounts use 🫏 as party symbolism — highly contextual." },
    ],
    searchIntents: ["donkey emoji meaning", "🫏 stubborn emoji", "donkey emoji politics"],
    whenNotToUse: ["Never use 🫏 to insult someone's intelligence — that reads cruel, not funny."],
    faqs: [{ question: "Does 🫏 have a political meaning?", answer: "In U.S. contexts sometimes — but globally it usually means the animal or stubborn jokes." }],
  },

  horse: {
    batchId: BATCH_ID,
    searchTitle: "Horse Emoji Meaning: Riding, Racing, and 'Hold Your Horses'",
    snippetAnswer:
      "The horse emoji means horses — riding, racing, western culture — and idioms like 'hold your horses' (slow down). Strong in equestrian and Kentucky Derby circles.",
    detailedParagraphs: [
      "Horse (🐎) anchors equestrian posts: dressage, trail rides, and barn life.",
      "Racing fans flood timelines with 🐎 on Derby day and Grand National weekend.",
      "Idiom usage: 'hold your horses' 🐎 tells someone to wait — common in parent and coworker chats.",
    ],
    textingMeaning: "Send 🐎 for barn updates, betting talk, or telling someone to pause.",
    socialMeaning: "Western fashion and country music fandoms use 🐎 in aesthetic posts.",
    caution: "Gambling references with 🐎 may bother people in recovery — be mindful.",
    examples: [
      { context: "Riding", text: "Sunset ride was perfect 🐎" },
      { context: "Idiom", text: "Hold your horses — almost ready 🐎" },
      { context: "Racing", text: "Long shot won 🐎" },
      { context: "Barn life", text: "Early morning mucking 🐎" },
      { context: "Country vibe", text: "Boots and barns 🐎" },
    ],
    contextBlocks: [
      { title: "Equestrian sport", body: "🐎 tags competitions, training logs, and horse care tips." },
      { title: "Racing culture", body: "Major race days spike 🐎 usage in tips and celebration posts." },
      { title: "Everyday idioms", body: "'Hold your horses' keeps 🐎 relevant even without real horses." },
    ],
    searchIntents: ["horse emoji meaning", "🐎 hold your horses", "equestrian emoji"],
    whenNotToUse: ["Avoid 🐎 when discussing horse injury or abuse cases flippantly."],
    faqs: [{ question: "🐎 vs 🐴?", answer: "Both are horses — 🐴 is horse face, 🐎 full body. Similar meaning." }],
  },

  "water-buffalo": {
    batchId: BATCH_ID,
    searchTitle: "Water Buffalo Emoji Meaning: Asia, Agriculture, and Rural Life",
    snippetAnswer:
      "The water buffalo emoji represents the animal in farming, Southeast Asian rural life, and travel photos — grounded and regional rather than meme-heavy.",
    detailedParagraphs: [
      "Water Buffalo (🐃) appears in rice-paddy tourism, agricultural education, and South/Southeast Asia travel diaries.",
      "Farm accounts use it for draft animals and sustainable farming discussions.",
      "Unlike 🐂 ox, 🐃 specifically evokes tropical wetland farming imagery.",
    ],
    textingMeaning: "Share 🐃 after rural travel or when discussing Asian agricultural heritage.",
    socialMeaning: "Documentary and NGO pages tag 🐃 for farmer livelihood stories.",
    caution: "Do not use 🐃 as a vague stand-in for entire regions — be specific in captions.",
    examples: [
      { context: "Travel", text: "Paddy fields at dawn 🐃" },
      { context: "Farming", text: "Draft power still matters 🐃" },
      { context: "Documentary", text: "Powerful farmer portrait 🐃" },
      { context: "Tourism", text: "Village tour highlight 🐃" },
      { context: "Education", text: "Lesson on wetland agriculture 🐃" },
    ],
    contextBlocks: [
      { title: "Southeast Asia travel", body: "🐃 marks iconic paddy field photos and slow tourism." },
      { title: "Agricultural heritage", body: "Posts about traditional farming pair 🐃 with sustainability tags." },
      { title: "Conservation", body: "Rarely viral — used sincerely in rural development content." },
    ],
    searchIntents: ["water buffalo emoji meaning", "🐃 emoji asia", "buffalo farming emoji"],
    whenNotToUse: ["Avoid stereotyping countries with only 🐃 and no context."],
    faqs: [{ question: "🐃 vs 🐂?", answer: "🐃 is water buffalo (tropical wetlands). 🐂 is ox/bull — different animals and regions." }],
  },

  boar: {
    batchId: BATCH_ID,
    searchTitle: "Boar Emoji Meaning: Wild Hogs, Hunting, and Bold Attitude",
    snippetAnswer:
      "The boar emoji means wild boars, hunting and outdoors culture, or 'aggressive' attitude — tusks and wilderness energy.",
    detailedParagraphs: [
      "Boar (🐗) tags hunting seasons, wildlife camera traps, and forest hiking where hogs appear.",
      "Fantasy and RPG fans reference boar mounts and quests with 🐗.",
      "Metaphorically, 'boar-ish' behavior means blunt or charging ahead — niche slang among gamers.",
    ],
    textingMeaning: "Outdoors friends send 🐗 after trail cam footage or hunting camp weekends.",
    socialMeaning: "Bushcraft and survival channels use 🐗 for foraging and wildlife IDs.",
    caution: "Hunting content alienates some followers — tag sensitively.",
    examples: [
      { context: "Wildlife", text: "Trail cam caught a boar 🐗" },
      { context: "Hiking", text: "Keep distance in the woods 🐗" },
      { context: "Gaming", text: "Boar quest cleared 🐗" },
      { context: "Attitude", text: "Charging through the week 🐗" },
      { context: "Forest", text: "Tusks in the mist 🐗" },
    ],
    contextBlocks: [
      { title: "Hunting and outdoors", body: "🐗 marks wild hog management and camp stories." },
      { title: "Fantasy gaming", body: "RPG players reuse 🐗 for boar enemies and mounts." },
      { title: "Wildlife caution", body: "Trail advisory posts warn hikers about 🐗 encounters." },
    ],
    searchIntents: ["boar emoji meaning", "🐗 wild boar emoji", "boar hunting emoji"],
    whenNotToUse: ["Skip flippant 🐗 in animal cruelty or hunting debate threads."],
    faqs: [{ question: "What does 🐗 mean outdoors?", answer: "Wild boar sightings, hunting, or rugged forest vibes." }],
  },

  "pig-nose": {
    batchId: BATCH_ID,
    searchTitle: "Pig Nose Emoji Meaning: Cute Snout, Greedy Jokes, and Peppa Vibes",
    snippetAnswer:
      "The pig nose emoji is a playful snout — cute animal posts, 'greedy' food jokes, or cartoon pig humor. Silly and light, not insulting unless intended.",
    detailedParagraphs: [
      "Pig Nose (🐽) shows up in cute pet pig accounts and children's cartoon references.",
      "Friends tease 'snout first into dessert' with 🐽 after someone grabs the last slice.",
      "Costume and filter posts use 🐽 for instant pig transformation selfies.",
    ],
    textingMeaning: "Send 🐽 when someone dives into food or acts adorably greedy.",
    socialMeaning: "Mini pig influencers and farm sanctuaries tag 🐽 on snout closeups.",
    caution: "Calling someone 🐽 can insult if they do not know you well — keep among close friends.",
    examples: [
      { context: "Food joke", text: "Snout first in the cake 🐽" },
      { context: "Pet pig", text: "Booped the camera 🐽" },
      { context: "Costume", text: "Filter wins today 🐽" },
      { context: "Cute", text: "Too adorable 🐽" },
      { context: "Cartoon", text: "Full Peppa mood 🐽" },
    ],
    contextBlocks: [
      { title: "Pet content", body: "🐽 highlights pig snouts — mini pigs and sanctuary residents." },
      { title: "Food humor", body: "Playful greed jokes after shared meals or dessert raids." },
      { title: "Kids and cartoons", body: "Parent chats reference cartoon pigs with 🐽." },
    ],
    searchIntents: ["pig nose emoji meaning", "🐽 snout emoji", "pig nose cute"],
    whenNotToUse: ["Avoid 🐽 as a body-shaming insult — that harms rather than jokes."],
    faqs: [{ question: "Is 🐽 an insult?", answer: "Only if meant that way — default is cute or silly food humor." }],
  },

  ram: {
    batchId: BATCH_ID,
    searchTitle: "Ram Emoji Meaning: Aries Zodiac, Mountain Climbing, and Headbutt Energy",
    snippetAnswer:
      "The ram emoji means bighorn sheep, Aries zodiac sign, or 'headstrong' determination — horns and mountain imagery.",
    detailedParagraphs: [
      "Ram (🐏) marks Aries birthdays and horoscope memes — bold, initiating energy.",
      "Climbing and mountaineering posts use 🐏 for alpine wildlife and rocky terrain.",
      "'Ram through' metaphors describe pushing past obstacles — startup and gym culture pick it up.",
    ],
    textingMeaning: "Wish happy birthday to Aries friends with 🐏 or hype stubborn persistence.",
    socialMeaning: "Outdoor photographers tag 🐏 on bighorn sheep sightings.",
    caution: "Astrology jokes annoy skeptics — know your group.",
    examples: [
      { context: "Zodiac", text: "Aries season 🐏" },
      { context: "Climbing", text: "Summit push 🐏" },
      { context: "Determination", text: "Head down, keep going 🐏" },
      { context: "Wildlife", text: "Bighorn on the ridge 🐏" },
      { context: "Birthday", text: "Happy birthday ram friend 🐏" },
    ],
    contextBlocks: [
      { title: "Astrology", body: "🐏 is shorthand for Aries in horoscope posts and birthday stories." },
      { title: "Mountaineering", body: "Alpine content pairs 🐏 with peak photos and route beta." },
      { title: "Persistence metaphors", body: "Founders and athletes use 🐏 for 'push through' mindset." },
    ],
    searchIntents: ["ram emoji meaning", "🐏 aries emoji", "bighorn sheep emoji"],
    whenNotToUse: ["Skip 🐏 in religious contexts where ram sacrifice is discussed seriously."],
    faqs: [{ question: "Does 🐏 mean Aries?", answer: "Often in astrology contexts — otherwise it can mean the animal or determination." }],
  },

  "two-hump-camel": {
    batchId: BATCH_ID,
    searchTitle: "Two-Hump Camel Emoji Meaning: Desert Travel and Bactrian Camels",
    snippetAnswer:
      "The two-hump camel emoji means Bactrian camels, desert travel, Silk Road history, and Middle/Central Asian adventure content.",
    detailedParagraphs: [
      "Two-Hump Camel (🐫) distinguishes Bactrian camels from single-hump dromedaries — important for geography nerds.",
      "Desert expedition posts, Morocco and Mongolia travel, and caravan history use 🐫.",
      "Metaphorically rare — mostly literal travel and documentary content.",
    ],
    textingMeaning: "Share 🐫 after desert tours or when packing for harsh climate trips.",
    socialMeaning: "Adventure travel influencers tag 🐫 on camel trek reels.",
    caution: "Do not use 🐫 to genericize complex regions — name the place.",
    examples: [
      { context: "Travel", text: "Camel trek at sunset 🐫" },
      { context: "Desert", text: "Two humps, zero shade 🐫" },
      { context: "History", text: "Silk Road doc night 🐫" },
      { context: "Adventure", text: "Bucket list ride 🐫" },
      { context: "Geography", text: "Bactrian vs dromedary 🐫" },
    ],
    contextBlocks: [
      { title: "Desert tourism", body: "🐫 marks camel rides in Gobi, Sahara tours, and similar trips." },
      { title: "Educational content", body: "Teachers explain two-hump vs one-hump with 🐫." },
      { title: "Adventure packing", body: "Expedition groups joke about 🐫 levels of water carried." },
    ],
    searchIntents: ["two hump camel emoji", "🐫 bactrian camel", "desert camel emoji"],
    whenNotToUse: ["Avoid reducing cultures to camel clichés in captions."],
    faqs: [{ question: "🐫 vs 🐪?", answer: "🐫 has two humps (Bactrian). 🐪 has one hump (dromedary)." }],
  },

  mammoth: {
    batchId: BATCH_ID,
    searchTitle: "Mammoth Emoji Meaning: Ice Age, Extinction, and 'Huge' Slang",
    snippetAnswer:
      "The mammoth emoji references woolly mammoths, natural history museums, ice age education, and slang for something enormous — 'mammoth task.'",
    detailedParagraphs: [
      "Mammoth (🦣) surged with de-extinction news and museum exhibit openings.",
      "Teachers and science TikTok use 🦣 for paleontology lessons and glacier era timelines.",
      "'Mammoth' as adjective — huge projects, long to-do lists — appears in work Slack with 🦣.",
    ],
    textingMeaning: "Send 🦣 when a task feels enormous or after a natural history museum visit.",
    socialMeaning: "Paleontology fans and sci-news accounts lead with 🦣 for cloning headlines.",
    caution: "Science literacy varies — link sources when discussing de-extinction.",
    examples: [
      { context: "Work", text: "Mammoth spreadsheet day 🦣" },
      { context: "Museum", text: "Ice age hall 🦣" },
      { context: "Science news", text: "Wild headline 🦣" },
      { context: "Metaphor", text: "Mammoth cleanup ahead 🦣" },
      { context: "Kids", text: "Dino phase continues 🦣" },
    ],
    contextBlocks: [
      { title: "Paleontology", body: "🦣 tags fossils, exhibits, and educational reels." },
      { title: "Scale metaphors", body: "'Mammoth task' makes 🦣 useful in project management chats." },
      { title: "Pop science", body: "De-extinction debates spike 🦣 in comment sections." },
    ],
    searchIntents: ["mammoth emoji meaning", "🦣 woolly mammoth emoji", "ice age emoji"],
    whenNotToUse: ["Avoid 🦣 when discussing extinction in insensitive or joking ways about real crises."],
    faqs: [{ question: "What does 🦣 mean at work?", answer: "Often 'huge' — a mammoth amount of work or a giant project." }],
  },

  mouse: {
    batchId: BATCH_ID,
    searchTitle: "Mouse Emoji Meaning: Small, Quiet, and Computer Mouse Puns",
    snippetAnswer:
      "The mouse emoji can mean the animal, feeling 'small and quiet,' or computer mouse jokes — context separates nature from tech.",
    detailedParagraphs: [
      "Mouse (🐁) tags pet mice, field mice in gardens, and children's storybook content.",
      "Introverts joke they're 'quiet as a mouse' 🐁 in social plans they skip.",
      "Tech friends pun 🐁 with 🖱️ when peripherals break or desk setups change.",
    ],
    textingMeaning: "Use 🐁 for literal small rodents or self-deprecating 'I'm laying low' messages.",
    socialMeaning: "Pet rodent communities and wildlife rehab share 🐁 with care tips.",
    caution: "Some people fear rodents — don't surprise them with 🐁 in serious property damage chats.",
    examples: [
      { context: "Quiet", text: "I'll be quiet as a mouse 🐁" },
      { context: "Pet", text: "New rescue mouse 🐁" },
      { context: "Garden", text: "Tiny visitor in the herbs 🐁" },
      { context: "Tech pun", text: "Mouse died — need 🖱️ not 🐁" },
      { context: "Shy", text: "Hiding from plans 🐁" },
    ],
    contextBlocks: [
      { title: "Pet rodents", body: "🐁 marks mouse care, cages, and gentle handling content." },
      { title: "Personality jokes", body: "Introverts use 🐁 for low-key weekends and avoiding crowds." },
      { title: "Tech wordplay", body: "IT friends pun animal 🐁 vs computer mouse in desk setup posts." },
    ],
    searchIntents: ["mouse emoji meaning", "🐁 quiet as a mouse", "mouse animal emoji"],
    whenNotToUse: ["Avoid 🐁 when someone reports infestation stress — offer help, not jokes."],
    faqs: [{ question: "🐁 vs 🐭?", answer: "Both are mice — 🐭 is face, 🐁 full body. Similar usage." }],
  },

  beaver: {
    batchId: BATCH_ID,
    searchTitle: "Beaver Emoji Meaning: Busy Work, Dams, and Canadian Symbolism",
    snippetAnswer:
      "The beaver emoji means beavers in nature, 'busy as a beaver' work ethic, engineering pride, and Canadian national symbolism.",
    detailedParagraphs: [
      "Beaver (🦫) fits hustle culture ironically — 'busy as a beaver' on deadline weeks.",
      "Environmental posts highlight dam ecosystems and wetland restoration.",
      "Canadian users deploy 🦫 for patriotism and wildlife — less universal elsewhere.",
    ],
    textingMeaning: "Send 🦫 when grinding through work or sharing cottage country wildlife.",
    socialMeaning: "Ecology educators tag 🦫 for keystone species explainers.",
    caution: "Canadian symbolism may confuse international friends — add context.",
    examples: [
      { context: "Work", text: "Busy as a beaver 🦫" },
      { context: "Canada", text: "Cottage country 🦫" },
      { context: "Nature", text: "Dam engineering is wild 🦫" },
      { context: "Deadline", text: "Building all night 🦫" },
      { context: "Wildlife", text: "Spotting at the lake 🦫" },
    ],
    contextBlocks: [
      { title: "Work ethic idiom", body: "🦫 marks intense productivity — sometimes bragging, sometimes complaining." },
      { title: "Canadian identity", body: "🦫 appears on Canada Day and outdoor adventure posts." },
      { title: "Ecosystem science", body: "Conservation content explains how 🦫 shapes wetlands." },
    ],
    searchIntents: ["beaver emoji meaning", "🦫 busy beaver", "canada beaver emoji"],
    whenNotToUse: ["Skip 🦫 as crude slang — keep messages workplace-safe."],
    faqs: [{ question: "What does 'busy beaver' mean with 🦫?", answer: "Working hard, nonstop — often during crunch time." }],
  },

  "polar-bear": {
    batchId: BATCH_ID,
    searchTitle: "Polar Bear Emoji Meaning: Arctic Wildlife and Climate Change",
    snippetAnswer:
      "The polar bear emoji represents Arctic wildlife, climate change awareness, cold-weather humor, and white/cozy aesthetics — often sincere in conservation posts.",
    detailedParagraphs: [
      "Polar Bear (🐻‍❄️) anchors climate threads — melting ice, Arctic documentaries, and COP summit commentary.",
      "Winter humor: 'polar bear mode' with blankets and AC battles in apartment group chats.",
      "Zoo and documentary accounts use it literally for Ursus maritimus education.",
    ],
    textingMeaning: "Share 🐻‍❄️ after nature docs or when joking you're freezing indoors.",
    socialMeaning: "Activists pair 🐻‍❄️ with Arctic temperature data and fundraising.",
    caution: "Climate grief is real — don't meme 🐻‍❄️ during disaster news without care.",
    examples: [
      { context: "Climate", text: "Arctic report is grim 🐻‍❄️" },
      { context: "Cold joke", text: "Polar bear mode under blankets 🐻‍❄️" },
      { context: "Documentary", text: "Must watch 🐻‍❄️" },
      { context: "Winter", text: "Feels like the tundra 🐻‍❄️" },
      { context: "Fundraiser", text: "Donate for habitat 🐻‍❄️" },
    ],
    contextBlocks: [
      { title: "Climate advocacy", body: "🐻‍❄️ symbolizes Arctic vulnerability in awareness campaigns." },
      { title: "Cozy winter jokes", body: "Friends contrast freezing apartments with 🐻‍❄️ humor." },
      { title: "Wildlife education", body: "Zoos and NGOs share bear facts with 🐻‍❄️." },
    ],
    searchIntents: ["polar bear emoji meaning", "🐻‍❄️ climate emoji", "polar bear copy paste"],
    whenNotToUse: ["Avoid trivializing extinction discourse with only 🐻‍❄️ and no substance."],
    faqs: [{ question: "Does 🐻‍❄️ always mean climate?", answer: "Often in advocacy — but friends also use it for 'so cold' jokes." }],
  },

  otter: {
    batchId: BATCH_ID,
    searchTitle: "Otter Emoji Meaning: Playful Couples, River Wildlife, and Wholesome Energy",
    snippetAnswer:
      "The otter emoji tags otters in nature and, in relationship slang, 'otter' body type — but most mainstream use is wholesome playfulness and holding-hands memes.",
    detailedParagraphs: [
      "Otter (🦦) floods cute animal feeds — holding hands while sleeping, sliding on mud, aquarium live cams.",
      "LGBTQ+ slang uses 'otter' for a lean, hairy physique — know audience before assuming nature-only meaning.",
      "Couples adopt 🦦 for soft, playful relationship posts — less intense than ❤️.",
    ],
    textingMeaning: "Send 🦦 for aquarium trips, otter GIF reactions, or cute relationship vibes.",
    socialMeaning: "Wildlife livestreams and marine centers build engagement around 🦦.",
    caution: "Slang meanings differ by community — ambiguous DMs deserve words, not emoji alone.",
    examples: [
      { context: "Cute", text: "Otter live cam healing me 🦦" },
      { context: "Date", text: "Aquarium date 🦦" },
      { context: "Couple", text: "Holding hands like otters 🦦" },
      { context: "Travel", text: "River tour highlight 🦦" },
      { context: "Wholesome", text: "Soft weekend energy 🦦" },
    ],
    contextBlocks: [
      { title: "Wholesome memes", body: "🦦 marks gentle humor and comforting animal content." },
      { title: "Aquarium tourism", body: "Family trips and education programs tag 🦦." },
      { title: "Slang awareness", body: "Some communities use 'otter' as descriptor — context clarifies." },
    ],
    searchIntents: ["otter emoji meaning", "🦦 otter couple meme", "otter holding hands"],
    whenNotToUse: ["Avoid assuming slang in professional or unknown-audience posts."],
    faqs: [{ question: "Why do couples use 🦦?", answer: "Otters holding hands became a symbol of sticking together — cute, not necessarily romantic." }],
  },

  rooster: {
    batchId: BATCH_ID,
    searchTitle: "Rooster Emoji Meaning: Early Mornings, Farm Life, and Confidence",
    snippetAnswer:
      "The rooster emoji means roosters at dawn, farm routines, Chinese zodiac Rooster years, and 'cocky' confidence — loud morning energy.",
    detailedParagraphs: [
      "Rooster (🐓) marks 5 a.m. gym people, farmers on chore schedules, and 'early bird' brags.",
      "Chinese zodiac Rooster years bring 🐓 in Lunar New Year content.",
      "Metaphorically 'cock-a-doodle-doo' energy — announcing yourself boldly online.",
    ],
    textingMeaning: "Ping 🐓 when you're up absurdly early or tease someone's alarm habits.",
    socialMeaning: "Farmstead Instagram and homestead TikTok start mornings with 🐓.",
    caution: "English slang 'cock' has crude meanings — 🐓 is usually innocent animal context.",
    examples: [
      { context: "Early", text: "Why am I awake 🐓" },
      { context: "Farm", text: "Chores before coffee 🐓" },
      { context: "Zodiac", text: "Rooster year vibes 🐓" },
      { context: "Alarm", text: "Neighbor's rooster wins 🐓" },
      { context: "Bold", text: "Strutting into Monday 🐓" },
    ],
    contextBlocks: [
      { title: "Dawn routines", body: "🐓 tags early workouts, farming, and sunrise photos." },
      { title: "Zodiac culture", body: "Rooster years get 🐓 in LNY greetings." },
      { title: "Homestead life", body: "Backyard chicken keepers share 🐓 — roosters not always welcome in city limits." },
    ],
    searchIntents: ["rooster emoji meaning", "🐓 early morning emoji", "rooster zodiac"],
    whenNotToUse: ["Avoid crude puns in professional settings."],
    faqs: [{ question: "What does 🐓 mean in morning texts?", answer: "You're up early or something woke you at dawn — rooster alarm joke." }],
  },

  "hatching-chick": {
    batchId: BATCH_ID,
    searchTitle: "Hatching Chick Emoji Meaning: New Beginnings and Easter",
    snippetAnswer:
      "The hatching chick emoji means baby chicks emerging, Easter, spring, and 'just started' new projects — fresh and fragile energy.",
    detailedParagraphs: [
      "Hatching Chick (🐣) dominates Easter posts, spring classrooms, and incubator livestreams.",
      "Startups metaphorically 'hatch' ideas with 🐣 in launch teasers.",
      "Family chats share 🐣 when kids witness chicks at farms or science units.",
    ],
    textingMeaning: "Celebrate new beginnings — job starts, seedlings, or literal chicks.",
    socialMeaning: "Spring aesthetic boards combine 🐣 with flowers and pastels.",
    caution: "Live animal gifting at Easter is controversial — promote responsible care.",
    examples: [
      { context: "Easter", text: "Happy Easter 🐣" },
      { context: "Launch", text: "Idea finally hatching 🐣" },
      { context: "School", text: "Incubator day 🐣" },
      { context: "Spring", text: "New season energy 🐣" },
      { context: "Farm", text: "First chick of the year 🐣" },
    ],
    contextBlocks: [
      { title: "Easter and spring", body: "🐣 is core seasonal imagery — baskets, brunch, pastel feeds." },
      { title: "New projects", body: "Founders tease MVPs 'hatching' with 🐣." },
      { title: "Education", body: "Teachers document life-cycle units with 🐣." },
    ],
    searchIntents: ["hatching chick emoji", "🐣 easter emoji", "baby chick meaning"],
    whenNotToUse: ["Avoid promoting impulse chick purchases without care warnings."],
    faqs: [{ question: "🐣 vs 🐤?", answer: "🐣 is egg hatching. 🐤 is already hatched baby chick." }],
  },

  "baby-chick": {
    batchId: BATCH_ID,
    searchTitle: "Baby Chick Emoji Meaning: Cute, Spring, and Gentle Compliments",
    snippetAnswer:
      "The baby chick emoji signals cute spring vibes, baby animals, gentle compliments ('you're a chick'), and farm education content.",
    detailedParagraphs: [
      "Baby Chick (🐤) is soft aesthetic — pastel feeds, nursery themes, and wholesome compliments.",
      "Homesteaders document brooders and chick care with 🐤 threads.",
      "Occasionally vintage slang 'chick' for person — can feel dated; know your audience.",
    ],
    textingMeaning: "Send 🐤 for spring photos, tiny cute things, or farm updates.",
    socialMeaning: "Easter and kawaii communities overuse 🐤 — intentionally sweet.",
    caution: "Calling people 'chick' may feel patronizing — default to animal context.",
    examples: [
      { context: "Spring", text: "Everything blooming 🐤" },
      { context: "Farm", text: "Brooder is loud 🐤" },
      { context: "Cute", text: "Smol 🐤" },
      { context: "Easter", text: "Brunch crew 🐤" },
      { context: "Compliment", text: "Looking adorable 🐤" },
    ],
    contextBlocks: [
      { title: "Spring social", body: "🐤 pairs with flowers and light sweaters on Instagram." },
      { title: "Homesteading", body: "Chick care tips and brooder setups tag 🐤." },
      { title: "Wholesome tone", body: "Low-conflict emoji — rarely sarcastic." },
    ],
    searchIntents: ["baby chick emoji meaning", "🐤 spring emoji", "chick emoji cute"],
    whenNotToUse: ["Avoid patronizing nicknames in professional DMs."],
    faqs: [{ question: "Is 🐤 only for Easter?", answer: "Peak at Easter/spring but used anytime for cute baby animal content." }],
  },

  "front-facing-baby-chick": {
    batchId: BATCH_ID,
    searchTitle: "Front-Facing Baby Chick Emoji Meaning: Extra-Cute Reactions",
    snippetAnswer:
      "The front-facing baby chick emoji is a head-on cute chick — often a stronger 'aww' reaction than 🐤, popular in stickers and kawaii design.",
    detailedParagraphs: [
      "Front-Facing Baby Chick (🐥) appears in sticker packs and reaction images when something is unbearably cute.",
      "Teachers and parents use it for spring crafts and classroom bulletin boards.",
      "Design-wise the forward face reads more emoji-mascot than side-profile 🐤.",
    ],
    textingMeaning: "Drop 🐥 as a pure 'aww' reaction — baby photos, pet videos, tiny shoes.",
    socialMeaning: "Kawaii and scrapbooking Pinterest pins favor 🐥 for symmetry.",
    caution: "Interchangeable with 🐤 for most users — precision rarely matters.",
    examples: [
      { context: "Reaction", text: "STOP 🐥" },
      { context: "Baby photo", text: "Cannot handle 🐥" },
      { context: "Craft", text: "Bulletin board done 🐥" },
      { context: "Spring", text: "Peep season 🐥" },
      { context: "Pet", text: "Fluffy murder machine 🐥" },
    ],
    contextBlocks: [
      { title: "Reaction emoji", body: "🐥 functions like a sticker — immediate cute overload." },
      { title: "Classroom spring", body: "Teachers decorate with 🐥 for March/April themes." },
      { title: "Design symmetry", body: "Graphic posts choose 🐥 when a centered mascot fits layouts." },
    ],
    searchIntents: ["front facing baby chick emoji", "🐥 chick emoji", "🐥 vs 🐤"],
    whenNotToUse: ["Rarely problematic — still skip in serious news threads."],
    faqs: [{ question: "🐥 vs 🐤?", answer: "🐥 faces you; 🐤 is side view. Same spring/cute meaning." }],
  },

  dodo: {
    batchId: BATCH_ID,
    searchTitle: "Dodo Emoji Meaning: Extinction, Obsolescence, and 'Dead' Humor",
    snippetAnswer:
      "The dodo emoji references the extinct dodo bird, obsolete tech, cancelled trends, and ironic 'we're doomed' humor — niche but sharp.",
    detailedParagraphs: [
      "Dodo (🦤) educates on extinction — Mauritius history, human-caused loss, museum specimens.",
      "Tech workers call legacy systems 'dodos' with 🦤 when migration finally happens.",
      "Gen Z uses 🦤 for 'this trend is dead' — parallel to 💀 but more specific.",
    ],
    textingMeaning: "Send 🦤 when something is obsolete, cancelled, or historically extinct.",
    socialMeaning: "Science communicators and history TikTok anchor dodo facts with 🦤.",
    caution: "Extinction jokes can feel tasteless near environmental grief — read tone.",
    examples: [
      { context: "Tech debt", text: "Retiring the dodo server 🦤" },
      { context: "Trend", text: "That meme is extinct 🦤" },
      { context: "Museum", text: "Dodo exhibit 🦤" },
      { context: "History", text: "Lesson hit hard 🦤" },
      { context: "Ironic", text: "We are the dodo 🦤" },
    ],
    contextBlocks: [
      { title: "Extinction education", body: "🦤 introduces cautionary tales about habitat loss." },
      { title: "Obsolescence", body: "Dev teams label retiring tools as 🦤." },
      { title: "Trend commentary", body: "Commenters declare dead fads with 🦤." },
    ],
    searchIntents: ["dodo emoji meaning", "🦤 extinct emoji", "dodo obsolete slang"],
    whenNotToUse: ["Avoid 🦤 when discussing current extinction crises without respect."],
    faqs: [{ question: "What does 🦤 mean in tech slang?", answer: "Something outdated slated for removal — legacy code or hardware." }],
  },

  "black-bird": {
    batchId: BATCH_ID,
    searchTitle: "Black Bird Emoji Meaning: Crow, Blackbird, and Gothic Aesthetic",
    snippetAnswer:
      "The black bird emoji suggests crows, ravens, blackbirds, or moody gothic aesthetic — autumn, mystery, and poetry references.",
    detailedParagraphs: [
      "Black Bird (🐦‍⬛) fits Edgar Allan Poe memes, Halloween decor, and cottage goth fashion.",
      "Birdwatchers ID corvids and common blackbirds with 🐦‍⬛ in eBird celebration posts.",
      "Literary accounts quote 'blackbird singing' lyrics and poetry with 🐦‍⬛.",
    ],
    textingMeaning: "Share 🐦‍⬛ after spooky walks, corvid sightings, or moody playlist drops.",
    socialMeaning: "Autumn Instagram pivots to 🐦‍⬛ with fog and flannel.",
    caution: "Some cultures associate black birds with omens — be respectful in mixed company.",
    examples: [
      { context: "Birdwatch", text: "Corvid at the feeder 🐦‍⬛" },
      { context: "Gothic", text: "Cottage goth fall 🐦‍⬛" },
      { context: "Poetry", text: "Blackbird verse mood 🐦‍⬛" },
      { context: "Halloween", text: "Spooky season starter 🐦‍⬛" },
      { context: "Moody", text: "Rain and ravens 🐦‍⬛" },
    ],
    contextBlocks: [
      { title: "Gothic aesthetic", body: "🐦‍⬛ tags dark academia and autumn wardrobes." },
      { title: "Birding community", body: "Corvid fans celebrate intelligence posts with 🐦‍⬛." },
      { title: "Literature", body: "Poetry and song references revive 🐦‍⬛ in captions." },
    ],
    searchIntents: ["black bird emoji meaning", "🐦‍⬛ crow emoji", "raven emoji meaning"],
    whenNotToUse: ["Avoid superstitious mockery of cultural beliefs about birds."],
    faqs: [{ question: "Is 🐦‍⬛ a crow or raven?", answer: "Generic black bird — users mean corvids, ravens, or aesthetic mood." }],
  },

  phoenix: {
    batchId: BATCH_ID,
    searchTitle: "Phoenix Emoji Meaning: Rebirth, Comebacks, and Fantasy",
    snippetAnswer:
      "The phoenix emoji means rebirth, comeback stories, rising after failure, and fantasy/mythology content — powerful reset energy.",
    detailedParagraphs: [
      "Phoenix (🐦‍🔥) dominates comeback posts — athletes returning from injury, founders after failure, artists after hiatus.",
      "Fantasy readers tag 🐦‍🔥 for mythical firebirds, not real ornithology.",
      "Motivational accounts pair it with 'rise again' quotes — can feel cliché if overused.",
    ],
    textingMeaning: "Hype someone's return or your own fresh start with 🐦‍🔥.",
    socialMeaning: "BookTok fantasy and tattoo design boards love 🐦‍🔥 imagery.",
    caution: "Empty motivational 🐦‍🔥 without substance annoys skeptics.",
    examples: [
      { context: "Comeback", text: "Back stronger 🐦‍🔥" },
      { context: "Fantasy", text: "Chapter 40 chaos 🐦‍🔥" },
      { context: "Reset", text: "New era starting 🐦‍🔥" },
      { context: "Sports", text: "Returned from injury 🐦‍🔥" },
      { context: "Motivation", text: "Rise again 🐦‍🔥" },
    ],
    contextBlocks: [
      { title: "Comeback narratives", body: "🐦‍🔥 marks second acts — careers, teams, personal growth." },
      { title: "Fantasy fandom", body: "Mythical firebird lore and tattoo inspo use 🐦‍🔥." },
      { title: "Motivation culture", body: "Inspirational quotes stack 🐦‍🔥 — best paired with concrete plans." },
    ],
    searchIntents: ["phoenix emoji meaning", "🐦‍🔥 rebirth emoji", "phoenix comeback"],
    whenNotToUse: ["Skip hollow 🐦‍🔥 when friends share genuine setbacks — empathy first."],
    faqs: [{ question: "What does 🐦‍🔥 mean in texting?", answer: "Rebirth, comeback, starting over — often after hardship." }],
  },

  sauropod: {
    batchId: BATCH_ID,
    searchTitle: "Sauropod Emoji Meaning: Long-Neck Dinosaurs and Kid Obsessions",
    snippetAnswer:
      "The sauropod emoji means long-neck dinosaurs like Brachiosaurus — kid dino phases, museums, and playful 'something huge and ancient.'",
    detailedParagraphs: [
      "Sauropod (🦕) is parent code for dinosaur birthday parties, LEGO sets, and museum gift shops.",
      "Paleontology educators distinguish sauropods from 🦖 T-Rex in kid-friendly charts.",
      "Metaphorically rare — mostly literal dino joy and Natural History museum trips.",
    ],
    textingMeaning: "Send 🦕 after museum trips or when kids won't stop saying 'brachiosaurus.'",
    socialMeaning: "Dino TikTok and homeschool science units build around 🦕.",
    caution: "Don't correct kids' dino enthusiasm with pedantry — let 🦕 be fun.",
    examples: [
      { context: "Kids", text: "Dino phase never ends 🦕" },
      { context: "Museum", text: "Skeleton hall 🦕" },
      { context: "Party", text: "Jurassic birthday 🦕" },
      { context: "Gift", text: "New sauropod book 🦕" },
      { context: "Homeschool", text: "Mesozoic unit 🦕" },
    ],
    contextBlocks: [
      { title: "Parent life", body: "🦕 marks dino merch, repeats of the same facts, and toy clutter." },
      { title: "Museum visits", body: "Field trips and homeschool days tag 🦕." },
      { title: "Education", body: "Teachers compare herbivore giants vs 🦖 carnivores." },
    ],
    searchIntents: ["sauropod emoji meaning", "🦕 dinosaur emoji", "long neck dinosaur emoji"],
    whenNotToUse: ["Rarely sensitive — avoid mocking children's interests."],
    faqs: [{ question: "🦕 vs 🦖?", answer: "🦕 is long-neck sauropod. 🦖 is T-Rex style theropod." }],
  },

  whale: {
    batchId: BATCH_ID,
    searchTitle: "Whale Emoji Meaning: Ocean Giants, Crypto Slang, and Awe",
    snippetAnswer:
      "The whale emoji means whales in nature, whale-watching travel, and in crypto/finance 'whale' investors who move markets — context splits marine from money.",
    detailedParagraphs: [
      "Whale (🐋) tags whale-watching tours, marine conservation, and documentary nights.",
      "Crypto Twitter uses 'whale' for large wallet moves — 🐋 in charts and alert bots.",
      "Spiritual and awe-filled captions use 🐋 for feeling small against the ocean.",
    ],
    textingMeaning: "Clarify: ocean trip excitement or crypto market gossip.",
    socialMeaning: "Marine NGOs and aquariums lead with 🐋 for fundraising.",
    caution: "Crypto 🐋 confuses non-traders — spell it out.",
    examples: [
      { context: "Travel", text: "Whale breach!!! 🐋" },
      { context: "Crypto", text: "Whale moved coins 🐋" },
      { context: "Doc", text: "Blue planet night 🐋" },
      { context: "Conservation", text: "Protect migration routes 🐋" },
      { context: "Awe", text: "Humbling sight 🐋" },
    ],
    contextBlocks: [
      { title: "Ecotourism", body: "🐋 marks bucket-list whale watching and boat tours." },
      { title: "Crypto finance", body: "'Whale alert' channels use 🐋 for large transactions." },
      { title: "Marine conservation", body: "Plastic and shipping threads pair 🐋 with action links." },
    ],
    searchIntents: ["whale emoji meaning", "🐋 crypto whale", "whale watching emoji"],
    whenNotToUse: ["Don't mix crypto 🐋 jokes into marine conservation fundraisers without clarity."],
    faqs: [{ question: "Does 🐋 mean crypto?", answer: "In trading chats yes — 'whale' investor. Elsewhere it's the ocean animal." }],
  },

  seal: {
    batchId: BATCH_ID,
    searchTitle: "Seal Emoji Meaning: Cute Marine Mammals and Approval Slang",
    snippetAnswer:
      "The seal emoji usually means the marine animal — aquarium clips, coastal travel — not the 'seal of approval' phrase unless paired with words.",
    detailedParagraphs: [
      "Seal (🦭) powers cute animal compilations — clapping, banana pose, aquarium live cams.",
      "Coastal tourism from California to Scotland tags 🦭 on pier walks.",
      "Rarely confused with ✅ — different concept entirely.",
    ],
    textingMeaning: "Share 🦭 after beach trips or viral seal videos.",
    socialMeaning: "Marine rehab centers document rescues with 🦭.",
    caution: "Keep distance from wild seals — don't encourage unsafe selfies.",
    examples: [
      { context: "Cute", text: "Seal clap video 🦭" },
      { context: "Travel", text: "Harbor seals today 🦭" },
      { context: "Aquarium", text: "Feeding time 🦭" },
      { context: "Beach", text: "Pier walk 🦭" },
      { context: "Rescue", text: "Rehab release 🦭" },
    ],
    contextBlocks: [
      { title: "Viral cute content", body: "🦭 spreads in reaction GIFs and wholesome threads." },
      { title: "Coastal travel", body: "Wildlife tours highlight 🦭 haul-out spots." },
      { title: "Rehabilitation", body: "Sanctuaries share success stories with 🦭." },
    ],
    searchIntents: ["seal emoji meaning", "🦭 cute seal emoji", "seal animal emoji"],
    whenNotToUse: ["Avoid encouraging touching wild seals — dangerous for both sides."],
    faqs: [{ question: "Does 🦭 mean approved?", answer: "No — that's ✅. 🦭 is the animal except in explicit 'seal of approval' wordplay." }],
  },

  fish: {
    batchId: BATCH_ID,
    searchTitle: "Fish Emoji Meaning: Fishing, Seafood, Pisces, and 'Something Fishy'",
    snippetAnswer:
      "The fish emoji means fish literally — fishing trips, aquariums, seafood dinner — or idioms like 'something fishy' (suspicious).",
    detailedParagraphs: [
      "Fish (🐟) tags catch photos, sushi nights, and aquarium hobbyist tanks.",
      "Pisces astrology uses 🐟 in horoscope memes alongside ♓.",
      "'Something fishy' 🐟 flags suspicion in mystery podcasts and true crime chats.",
    ],
    textingMeaning: "Send 🐟 for dinner plans, fishing brags, or skeptical 'hmm' moments.",
    socialMeaning: "Fly fishing and reef diving communities build content around 🐟.",
    caution: "Christian fish symbol (ichthys) is different history — 🐟 is general.",
    examples: [
      { context: "Fishing", text: "Caught and released 🐟" },
      { context: "Dinner", text: "Sushi omakase 🐟" },
      { context: "Suspicious", text: "Story feels fishy 🐟" },
      { context: "Aquarium", text: "Tank cycling done 🐟" },
      { context: "Zodiac", text: "Pisces season 🐟" },
    ],
    contextBlocks: [
      { title: "Angling culture", body: "🐟 marks catch photos, gear talk, and catch-and-release ethics." },
      { title: "Seafood dining", body: "Restaurant posts and home cooking tag 🐟." },
      { title: "Idiom usage", body: "'Fishy' suspicion appears in mystery and gossip threads." },
    ],
    searchIntents: ["fish emoji meaning", "🐟 something fishy", "fishing emoji"],
    whenNotToUse: ["Skip 🐟 when discussing overfishing crises without serious captioning."],
    faqs: [{ question: "What does 'fishy' with 🐟 mean?", answer: "Suspicious, not quite adding up — skeptical tone." }],
  },

  blowfish: {
    batchId: BATCH_ID,
    searchTitle: "Blowfish Emoji Meaning: Pufferfish, Fugu, and 'Inflated' Ego Jokes",
    snippetAnswer:
      "The blowfish emoji means pufferfish — Japanese fugu cuisine, aquarium puff-ups, and jokes about being 'inflated' or full of air.",
    detailedParagraphs: [
      "Blowfish (🐡) appears in Japanese restaurant posts and risky-delicacy travel content.",
      "Aquarium fans capture puff moments with 🐡 — defensive inflation looks cartoonish.",
      "Metaphor: 'puffed up' ego or bloated after big meal — light humor among friends.",
    ],
    textingMeaning: "Share 🐡 after sushi adventures or when feeling stuffed post-dinner.",
    socialMeaning: "Travel food creators highlight fugu licensing and chef skill with 🐡.",
    caution: "Fugu toxicity is serious — don't treat real poison risk as pure joke.",
    examples: [
      { context: "Sushi", text: "Fugu course 🐡" },
      { context: "Aquarium", text: "Puffed up! 🐡" },
      { context: "Full", text: "So bloated 🐡" },
      { context: "Travel", text: "Osaka food tour 🐡" },
      { context: "Ego joke", text: "All puffed up 🐡" },
    ],
    contextBlocks: [
      { title: "Japanese cuisine", body: "🐡 tags licensed fugu restaurants and travel vlogs." },
      { title: "Aquarium moments", body: "Puffer inflation clips go viral with 🐡." },
      { title: "Body humor", body: "Post-feast 'balloon' jokes use 🐡 lightly." },
    ],
    searchIntents: ["blowfish emoji meaning", "🐡 pufferfish emoji", "fugu emoji"],
    whenNotToUse: ["Avoid minimizing fugu poisoning risks in travel advice."],
    faqs: [{ question: "🐡 vs 🐟?", answer: "🐡 is pufferfish/blowfish specifically — round, spiny, puff defense." }],
  },

  "spiral-shell": {
    batchId: BATCH_ID,
    searchTitle: "Spiral Shell Emoji Meaning: Beach, Collecting, and Calm Aesthetic",
    snippetAnswer:
      "The spiral shell emoji means seashells, beach vacations, ocean sound ASMR, and soft coastal aesthetic — calm and nostalgic.",
    detailedParagraphs: [
      "Spiral Shell (🐚) dominates beach vacation recaps — sand, boardwalks, collected shells.",
      "ASMR and wellness accounts pair 🐚 with ocean sounds and meditation prompts.",
      "Nautical decor Pinterest boards use 🐚 for bathroom and cottage styling.",
    ],
    textingMeaning: "Send 🐚 when sharing beach photos or planning seaside escapes.",
    socialMeaning: "Summer recap carousels start captions with 🐚.",
    caution: "Collecting live shells harms ecosystems — promote leave-no-trace.",
    examples: [
      { context: "Beach", text: "Shell hunting 🐚" },
      { context: "Vacation", text: "Salt air therapy 🐚" },
      { context: "Decor", text: "Bathroom refresh 🐚" },
      { context: "Calm", text: "Ocean sounds tonight 🐚" },
      { context: "Nostalgia", text: "Childhood beach days 🐚" },
    ],
    contextBlocks: [
      { title: "Vacation content", body: "🐚 marks coastal trips and sunset pier walks." },
      { title: "Wellness ASMR", body: "Shell ocean soundtracks tag 🐚." },
      { title: "Home decor", body: "Coastal grandmother aesthetic uses 🐚 in styling posts." },
    ],
    searchIntents: ["spiral shell emoji meaning", "🐚 seashell emoji", "beach shell emoji"],
    whenNotToUse: ["Avoid promoting taking live shells from protected beaches."],
    faqs: [{ question: "What vibe does 🐚 give?", answer: "Calm, beachy, nostalgic — slower than party emojis." }],
  },

  "lady-beetle": {
    batchId: BATCH_ID,
    searchTitle: "Lady Beetle Emoji Meaning: Luck, Gardens, and Gentle Cute",
    snippetAnswer:
      "The lady beetle emoji means ladybugs — garden luck, spring, harmless cute bugs, and childhood nostalgia.",
    detailedParagraphs: [
      "Lady Beetle (🐞) tags organic gardening (aphid eaters), spring picnics, and kids' bug hunts.",
      "Some cultures treat ladybugs as luck — 🐞 in well-wishes before exams or interviews.",
      "Design-wise popular in kawaii and stationery aesthetics.",
    ],
    textingMeaning: "Send 🐞 for garden wins, spring days, or 'good luck' nudges.",
    socialMeaning: "Permaculture and balcony garden posts celebrate 🐞 as pest control allies.",
    caution: "Invasive lady beetle species exist — science posts may clarify.",
    examples: [
      { context: "Garden", text: "Aphids beware 🐞" },
      { context: "Luck", text: "Good luck tomorrow 🐞" },
      { context: "Spring", text: "First ladybug of year 🐞" },
      { context: "Kids", text: "Bug hunt success 🐞" },
      { context: "Cute", text: "Tiny spotted friend 🐞" },
    ],
    contextBlocks: [
      { title: "Gardening", body: "🐞 signals beneficial insects and pesticide-free pride." },
      { title: "Luck symbolism", body: "Some send 🐞 before tests or first dates as charm." },
      { title: "Spring aesthetic", body: "Pastel feeds welcome 🐞 after winter." },
    ],
    searchIntents: ["lady beetle emoji meaning", "🐞 ladybug emoji", "ladybug luck emoji"],
    whenNotToUse: ["Rarely problematic — don't fake luck emoji instead of real support."],
    faqs: [{ question: "Is 🐞 good luck?", answer: "In many folk traditions yes — gentle encouragement emoji." }],
  },

  cricket: {
    batchId: BATCH_ID,
    searchTitle: "Cricket Emoji Meaning: Summer Nights, Sport, and Awkward Silence",
    snippetAnswer:
      "The cricket emoji can mean the insect (summer chirping), cricket the sport, or awkward silence — 'cricket sounds' after a bad joke.",
    detailedParagraphs: [
      "Cricket (🦗) insect posts peak in humid summer nights and camping audio.",
      "Commonwealth sports fans use 🦗 for cricket matches — wickets, tests, IPL season.",
      "Comedy trope: tumbleweed after silence — 🦗 chirping when nobody laughs.",
    ],
    textingMeaning: "Disambiguate: bug on porch, sport on TV, or 'awkward…' reaction.",
    socialMeaning: "IPL and Ashes Twitter live-tweets with 🦗.",
    caution: "Edible cricket protein posts exist — separate from sport and silence jokes.",
    examples: [
      { context: "Awkward", text: "… 🦗" },
      { context: "Sport", text: "What a catch 🦗" },
      { context: "Summer", text: "Chirping all night 🦗" },
      { context: "Camping", text: "Nature soundtrack 🦗" },
      { context: "Bad joke", text: "Tough crowd 🦗" },
    ],
    contextBlocks: [
      { title: "Cricket sport", body: "🦗 floods timelines during major matches in cricket-loving countries." },
      { title: "Silence meme", body: "After a flop joke, 🦗 implies crickets chirping." },
      { title: "Summer insects", body: "Rural nights and porch sitting tag 🦗." },
    ],
    searchIntents: ["cricket emoji meaning", "🦗 awkward silence", "cricket sport emoji"],
    whenNotToUse: ["Clarify sport vs insect vs silence — ambiguous alone."],
    faqs: [{ question: "What does 🦗 alone mean?", answer: "Often awkward silence — but could be the sport or insect. Context needed." }],
  },

  cockroach: {
    batchId: BATCH_ID,
    searchTitle: "Cockroach Emoji Meaning: Disgust, Urban Life, and 'Unkillable' Jokes",
    snippetAnswer:
      "The cockroach emoji means roaches — urban pest stress, disgust reactions, or 'survived anything' humor. Rarely positive.",
    detailedParagraphs: [
      "Cockroach (🪳) appears in roommate horror stories, NYC apartment searches, and pest control ads.",
      "Meme culture calls roaches unkillable — 🪳 after surviving chaos weeks.",
      "Landlords and tenants debate 🪳 in review threads — emotionally loaded.",
    ],
    textingMeaning: "Vent about pests, gross discoveries, or ironic resilience.",
    socialMeaning: "Exterminator marketing and tenant rights posts use 🪳 literally.",
    caution: "Disgust emoji — don't send to phobic friends without warning.",
    examples: [
      { context: "Pest", text: "Saw one in the kitchen 🪳" },
      { context: "Resilience joke", text: "Still standing 🪳" },
      { context: "Apartment hunt", text: "Red flag tour 🪳" },
      { context: "Disgust", text: "NOPE 🪳" },
      { context: "Roommates", text: "Clean the dishes 🪳" },
    ],
    contextBlocks: [
      { title: "Urban renting", body: "🪳 marks infestation fears and lease warnings." },
      { title: "Meme resilience", body: "'Cockroach of the friend group' survives everything 🪳." },
      { title: "Public health", body: "Serious pest posts use 🪳 with exterminator advice." },
    ],
    searchIntents: ["cockroach emoji meaning", "🪳 roach emoji", "cockroach disgust"],
    whenNotToUse: ["Avoid 🪳 to mock someone's home conditions cruelly."],
    faqs: [{ question: "Is 🪳 ever positive?", answer: "Usually no — disgust, stress, or dark humor survival jokes." }],
  },

  "spider-web": {
    batchId: BATCH_ID,
    searchTitle: "Spider Web Emoji Meaning: Halloween, Spiders, and Feeling Trapped",
    snippetAnswer:
      "The spider web emoji means spider webs — Halloween decor, spooky season, cobwebs in abandoned places, or feeling 'trapped' metaphorically.",
    detailedParagraphs: [
      "Spider Web (🕸️) peaks October through Halloween porch setups and haunted houses.",
      "Forgotten corners and 'needs cleaning' posts joke about 🕸️ accumulation.",
      "Metaphorically rare — caught in a web of drama — but words usually accompany.",
    ],
    textingMeaning: "Share 🕸️ for Halloween prep, spooky aesthetics, or dusty attic jokes.",
    socialMeaning: "Goth and horror fans use 🕸️ year-round in fashion and nail art.",
    caution: "Arachnophobia is common — don't jump-scare DMs with 🕸️🕷️.",
    examples: [
      { context: "Halloween", text: "Decor up 🕸️" },
      { context: "Spooky", text: "Haunted house ready 🕸️" },
      { context: "Cleaning joke", text: "Corner since 2019 🕸️" },
      { context: "Aesthetic", text: "Goth season 🕸️" },
      { context: "Costume", text: "Web nail art 🕸️" },
    ],
    contextBlocks: [
      { title: "Halloween industry", body: "🕸️ is default October storefront imagery." },
      { title: "Horror aesthetic", body: "Year-round goth fashion incorporates 🕸️." },
      { title: "Domestic humor", body: "Dusting neglect jokes pair 🕸️ with cobweb corners." },
    ],
    searchIntents: ["spider web emoji meaning", "🕸️ halloween emoji", "cobweb emoji"],
    whenNotToUse: ["Avoid sending to arachnophobic friends without consent."],
    faqs: [{ question: "🕸️ vs 🕷️?", answer: "🕸️ is the web. 🕷️ is the spider. Often used together for Halloween." }],
  },

  scorpion: {
    batchId: BATCH_ID,
    searchTitle: "Scorpion Emoji Meaning: Scorpio Zodiac, Desert Danger, and Sting",
    snippetAnswer:
      "The scorpion emoji means scorpions in nature, Scorpio zodiac sign, desert edge, or 'you stung me' relationship drama — intense undertones.",
    detailedParagraphs: [
      "Scorpion (🦂) marks Scorpio season horoscopes and birthday posts — intense, loyal, secretive stereotypes.",
      "Desert hikers warn about 🦂 in boot checks and trail advisory graphics.",
      "Relationship drama: 'stung' betrayal posts occasionally use 🦂 — less common than 🦂 for zodiac.",
    ],
    textingMeaning: "Wish Scorpios happy birthday or warn about desert critters.",
    socialMeaning: "Astrology meme pages dominate 🦂 every October/November.",
    caution: "Scorpion stings are medical emergencies — don't minimize in travel advice.",
    examples: [
      { context: "Zodiac", text: "Scorpio season 🦂" },
      { context: "Birthday", text: "Happy birthday scorpion 🦂" },
      { context: "Desert", text: "Shake out boots 🦂" },
      { context: "Intensity", text: "Scorpio rising energy 🦂" },
      { context: "Warning", text: "Trail advisory 🦂" },
    ],
    contextBlocks: [
      { title: "Astrology", body: "🦂 is Scorpio's symbol in memes and birthday stories." },
      { title: "Desert safety", body: "Outdoor education posts warn with 🦂." },
      { title: "Intensity trope", body: "Scorpio stereotypes use 🦂 for passion and secrecy." },
    ],
    searchIntents: ["scorpion emoji meaning", "🦂 scorpio emoji", "scorpion zodiac"],
    whenNotToUse: ["Avoid stereotyping people harshly with zodiac 🦂 insults."],
    faqs: [{ question: "Does 🦂 always mean Scorpio?", answer: "Often in astrology — otherwise desert animal or danger warning." }],
  },

  mosquito: {
    batchId: BATCH_ID,
    searchTitle: "Mosquito Emoji Meaning: Summer Annoyance and Disease Awareness",
    snippetAnswer:
      "The mosquito emoji means mosquitoes — summer bites, camping misery, and public health warnings about malaria or dengue.",
    detailedParagraphs: [
      "Mosquito (🦟) universal summer villain — porch complaints, bug spray reviews, camping fails.",
      "Health NGOs use 🦟 for World Mosquito Day and malaria prevention campaigns.",
      "Tropical travelers share 🦟 with DEET tips and net recommendations.",
    ],
    textingMeaning: "Complain about bites, warn travel buddies, or share itch memes.",
    socialMeaning: "Global health accounts run serious 🦟 threads with statistics.",
    caution: "Disease discussion needs accuracy — link reputable health sources.",
    examples: [
      { context: "Complaint", text: "They found me 🦟" },
      { context: "Camping", text: "Forgot spray 🦟" },
      { context: "Travel", text: "Pack nets 🦟" },
      { context: "Health", text: "Prevention saves lives 🦟" },
      { context: "Summer", text: "Season of suffering 🦟" },
    ],
    contextBlocks: [
      { title: "Everyday annoyance", body: "🦟 bonds anyone who summers outdoors." },
      { title: "Public health", body: "Malaria and dengue education uses 🦟 seriously." },
      { title: "Travel prep", body: "Tropical trip packing lists mention 🦟." },
    ],
    searchIntents: ["mosquito emoji meaning", "🦟 bug bite emoji", "mosquito health emoji"],
    whenNotToUse: ["Don't joke 🦟 about outbreaks affecting communities you're not part of."],
    faqs: [{ question: "Is 🦟 only a joke?", answer: "Often humorous locally — but also used in serious disease prevention posts." }],
  },

  fly: {
    batchId: BATCH_ID,
    searchTitle: "Fly Emoji Meaning: Pests, 'Fly on the Wall,' and Annoyance",
    snippetAnswer:
      "The fly emoji means houseflies and pests — gross annoyance, spoiled food, or idiom 'fly on the wall' when eavesdropping quietly.",
    detailedParagraphs: [
      "Fly (🪰) tags gross-out moments — picnic invaded, trash day, restaurant fails.",
      "'Fly on the wall' 🪰 means observing drama without participating.",
      "Less mascot energy than 🐝 — almost always negative or neutral observation.",
    ],
    textingMeaning: "React to gross scenes or admit you're silently watching group drama.",
    socialMeaning: "Food safety and restaurant inspection posts use 🪰 literally.",
    caution: "Weak emoji alone — pair with words for idiom vs literal pest.",
    examples: [
      { context: "Gross", text: "Why is there a 🪰" },
      { context: "Idiom", text: "Fly on the wall tonight 🪰" },
      { context: "Picnic fail", text: "Invaded 🪰" },
      { context: "Drama", text: "Just observing 🪰" },
      { context: "Trash", text: "Take it out please 🪰" },
    ],
    contextBlocks: [
      { title: "Disgust reaction", body: "🪰 marks unsanitary or annoying pest moments." },
      { title: "Social observation", body: "'Fly on the wall' gossip watching uses 🪰." },
      { title: "Food safety", body: "Health inspection content may show 🪰 seriously." },
    ],
    searchIntents: ["fly emoji meaning", "🪰 fly on the wall", "housefly emoji"],
    whenNotToUse: ["Avoid 🪰 in messages about someone's hygiene as an attack."],
    faqs: [{ question: "What is 'fly on the wall' with 🪰?", answer: "Quietly watching a situation without being involved." }],
  },

  worm: {
    batchId: BATCH_ID,
    searchTitle: "Worm Emoji Meaning: Garden Soil, Fishing Bait, and 'Early Bird'",
    snippetAnswer:
      "The worm emoji means earthworms — gardening, compost, fishing bait, and early-bird idiom 'the worm' jokes.",
    detailedParagraphs: [
      "Worm (🪱) supports composting threads, vermiculture TikTok, and kids' rain-on-sidewalk memories.",
      "Anglers reference 🪱 for bait stock and tackle box prep.",
      "'Early bird gets the worm' motivates morning posts with 🪱.",
    ],
    textingMeaning: "Share garden soil health, fishing prep, or early-morning brags.",
    socialMeaning: "Regenerative ag influencers tag 🪱 with soil biology explainers.",
    caution: "Parasite discourse sometimes hijacks 🪱 — rare in casual chat.",
    examples: [
      { context: "Garden", text: "Compost thriving 🪱" },
      { context: "Fishing", text: "Bait sorted 🪱" },
      { context: "Early", text: "Got the worm 🪱" },
      { context: "Rain", text: "Sidewalk friends 🪱" },
      { context: "Soil health", text: "Worms mean good dirt 🪱" },
    ],
    contextBlocks: [
      { title: "Compost culture", body: "🪱 celebrates healthy soil food web." },
      { title: "Fishing prep", body: "Tackle chats reference 🪱 bait." },
      { title: "Morning idioms", body: "'Early bird gets the worm' captions use 🪱." },
    ],
    searchIntents: ["worm emoji meaning", "🪱 compost emoji", "earthworm emoji"],
    whenNotToUse: ["Skip gross parasite jokes in medical anxiety threads."],
    faqs: [{ question: "What does 🪱 mean in gardening?", answer: "Healthy soil — earthworms indicate good compost and aeration." }],
  },

  rosette: {
    batchId: BATCH_ID,
    searchTitle: "Rosette Emoji Meaning: Awards, Ribbons, and Decorative Flourish",
    snippetAnswer:
      "The rosette emoji means ribbon rosettes — horse shows, prize ribbons, decorative crafts, and formal award ceremonies.",
    detailedParagraphs: [
      "Rosette (🏵️) appears at equestrian events, county fairs, and dog show Instagram.",
      "Craft and scrapbooking communities use 🏵️ for paper rosette tutorials.",
      "Less common than 🎀 but more 'official prize' energy.",
    ],
    textingMeaning: "Congratulate fair winners or share craft project photos.",
    socialMeaning: "Horse show and baking competition posts tag 🏵️.",
    caution: "Obscure emoji — many users won't recognize; pair with 'ribbon' text.",
    examples: [
      { context: "Fair", text: "Blue rosette! 🏵️" },
      { context: "Horse show", text: "Champion class 🏵️" },
      { context: "Craft", text: "Paper rosettes done 🏵️" },
      { context: "Bake off", text: "Judge's pick 🏵️" },
      { context: "Decor", text: "Gift wrap detail 🏵️" },
    ],
    contextBlocks: [
      { title: "Competition wins", body: "🏵️ marks official ribbon prizes at fairs and shows." },
      { title: "Equestrian culture", body: "Dressage and show jumping celebrate with 🏵️." },
      { title: "Paper crafts", body: "DIY decorators tutorial rosettes with 🏵️." },
    ],
    searchIntents: ["rosette emoji meaning", "🏵️ ribbon prize emoji", "rosette award"],
    whenNotToUse: ["Rarely problematic — clarify if friends don't know the emoji."],
    faqs: [{ question: "🏵️ vs 🎀?", answer: "🏵️ is circular prize rosette. 🎀 is bow — different occasions." }],
  },

  "wilted-flower": {
    batchId: BATCH_ID,
    searchTitle: "Wilted Flower Emoji Meaning: Sadness, Burnout, and Fading Beauty",
    snippetAnswer:
      "The wilted flower emoji means sadness, burnout, neglected plants, or fading romance — melancholy and tired aesthetics.",
    detailedParagraphs: [
      "Wilted Flower (🥀) contrasts 🌹 for breakups, depressive episodes, and 'I'm done' emotional posts.",
      "Plant parents shame themselves with 🥀 when succulents die despite promises.",
      "Poetry and sad girl autumn playlists adopt 🥀 without irony.",
    ],
    textingMeaning: "Express emotional exhaustion, heartbreak, or dead houseplants honestly.",
    socialMeaning: "Melancholy aesthetic Tumblr migrated 🥀 to Instagram captions.",
    caution: "Friends in crisis need words and support — 🥀 alone isn't enough.",
    examples: [
      { context: "Sad", text: "Feeling 🥀 today" },
      { context: "Burnout", text: "Brain is 🥀" },
      { context: "Plant fail", text: "I killed another one 🥀" },
      { context: "Breakup", text: "Chapter closed 🥀" },
      { context: "Tired", text: "Friday but make it 🥀" },
    ],
    contextBlocks: [
      { title: "Emotional honesty", body: "🥀 signals low mood without long explanations." },
      { title: "Plant humor", body: "Black thumb confessions use 🥀 self-deprecatingly." },
      { title: "Aesthetic sadness", body: "Melancholy fashion and music posts tag 🥀." },
    ],
    searchIntents: ["wilted flower emoji meaning", "🥀 sad emoji", "wilted rose meaning"],
    whenNotToUse: ["Don't respond to serious mental health disclosures with only 🥀 — engage kindly."],
    faqs: [{ question: "🥀 vs 💔?", answer: "🥀 is weary sadness or burnout. 💔 is sharp heartbreak — different shades." }],
  },
};
