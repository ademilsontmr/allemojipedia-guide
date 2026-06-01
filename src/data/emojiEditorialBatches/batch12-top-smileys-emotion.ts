import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "12-top-smileys-emotion";

export const batch12TopSmileysEmotion: Record<string, EmojiBatchEnrichment> = {
  "fearful-face": {
    batchId: BATCH_ID,
    searchTitle: "Fearful Face Emoji (😨) Meaning: Scared, Shocked, and Anxious",
    snippetAnswer:
      "😨 Fearful Face shows fear or shock — wide eyes, raised brows, blue forehead. Used for scary news, jump scares, or 'I'm terrified' moments without full screaming.",
    detailedParagraphs: [
      "Fearful Face (😨) is Unicode's scared reaction — distinct from 😱 screaming terror by being slightly contained.",
      "Horror movie fans text 😨 after jump scares. Friends send it when someone shares creepy stories or risky plans.",
      "Financial and job anxiety threads use 😨 before big announcements — 'earnings call 😨'.",
      "Pair with words in real emergencies — emoji alone does not replace genuine concern.",
    ],
    textingMeaning: "'That sounds scary 😨', 'don't watch alone 😨', nervous anticipation.",
    socialMeaning: "Horror TikTok, true crime podcasts, and haunted house vlogs tag 😨.",
    caution: "Do not mock real victims of violence with 😨. Avoid during actual crises without support.",
    examples: [
      { context: "Horror", text: "Bad idea watching this alone 😨" },
      { context: "News", text: "This headline 😨" },
      { context: "Risk", text: "You're doing WHAT 😨" },
      { context: "Wait", text: "Results tomorrow 😨" },
      { context: "Story", text: "No way that happened 😨" },
    ],
    contextBlocks: [
      { title: "Horror fandom", body: "😨 is standard reaction emoji for scary content — faster than typing." },
      { title: "Anxiety overlap", body: "Sometimes 😨 means worried dread, not literal fear — read the thread." },
      { title: "Vs 😱", body: "😱 is screaming terror. 😨 is fearful shock still holding it together." },
    ],
    searchIntents: ["fearful face emoji", "😨 meaning", "scared emoji", "fear emoji 😨"],
    whenNotToUse: ["Avoid at real disaster news without empathy.", "Skip mocking phobias."],
    faqs: [
      { question: "What does 😨 mean?", answer: "Fear, shock, or anxious dread — often horror or bad news." },
      { question: "😨 vs 😰?", answer: "😰 is sweaty nervous tension. 😨 is wide-eyed fear." },
    ],
  },

  "disappointed-face": {
    batchId: BATCH_ID,
    searchTitle: "Disappointed Face Emoji (😞) Meaning: Letdown and Dejection",
    snippetAnswer:
      "😞 Disappointed Face is dejected letdown — plans fell through, hopes dashed, or quiet sadness. Downcast eyes sell the mood.",
    detailedParagraphs: [
      "Disappointed Face (😞) shows closed unhappy eyes and a frown — Unicode's disappointment symbol.",
      "Sports fans send 😞 after tough losses. Job seekers use it after rejections — shared commiseration.",
      "Less intense than 😭 crying; more specific than generic ☹️ — it is about unmet expectations.",
      "Support friends with empathy text, not only 😞 — ask what happened.",
    ],
    textingMeaning: "'Didn't get it 😞', 'was rooting for you 😞', sympathetic letdown.",
    socialMeaning: "Post-game threads and award show live tweets flood 😞 for near-misses.",
    caution: "😞 at someone's good news is cruel. Do not use to guilt-trip partners.",
    examples: [
      { context: "Loss", text: "So close 😞" },
      { context: "Reject", text: "Not this time 😞" },
      { context: "Cancel", text: "Trip postponed 😞" },
      { context: "Sympathy", text: "Sorry it didn't work 😞" },
      { context: "Mood", text: "Rough week 😞" },
    ],
    contextBlocks: [
      { title: "Expectations missed", body: "😞 centers on hopes not met — interviews, games, dates." },
      { title: "Quiet sadness", body: "Not meltdown energy — muted dejection friends recognize." },
      { title: "Vs 😔", body: "😔 is pensive sad thought. 😞 is disappointed outcome." },
    ],
    searchIntents: ["disappointed face emoji", "😞 meaning", "sad disappointed emoji"],
    whenNotToUse: ["Not for bereavement alone.", "Avoid sarcastic 😞 at celebrations."],
    faqs: [
      { question: "What does 😞 mean in texting?", answer: "Disappointment or dejection — something did not go as hoped." },
      { question: "Is 😞 depressing?", answer: "It expresses low mood — follow up with support if a friend sends it." },
    ],
  },

  "pensive-face": {
    batchId: BATCH_ID,
    searchTitle: "Pensive Face Emoji (😔) Meaning: Sad, Thoughtful, and Reflective",
    snippetAnswer:
      "😔 Pensive Face is quiet sadness or deep thought — reflective, lonely, or contemplative mood. Eyes closed downward, not angry.",
    detailedParagraphs: [
      "Pensive Face (😔) suggests inward emotion — thinking hard or feeling down without crying.",
      "Late-night texts use 😔 for existential vibes, missing someone, or regret — 'wish things were different 😔'.",
      "Poetry, breakup songs, and moody aesthetic posts on Tumblr-style feeds love 😔.",
      "Differs from 🤔 thinking curiosity — 😔 is emotional weight, not puzzle-solving.",
    ],
    textingMeaning: "'Can't sleep thinking about it 😔', 'miss those days 😔'.",
    socialMeaning: "Sad boy/girl aesthetic captions, rain window photos, and lo-fi playlists.",
    caution: "If someone hints at self-harm, respond seriously — not just 😔 back.",
    examples: [
      { context: "Reflect", text: "Lot on my mind 😔" },
      { context: "Miss", text: "Those summers 😔" },
      { context: "Regret", text: "Should've said something 😔" },
      { context: "Lonely", text: "Quiet night 😔" },
      { context: "Mood", text: "Just one of those days 😔" },
    ],
    contextBlocks: [
      { title: "Late-night mood", body: "😔 peaks in 2am chats when overthinking hits." },
      { title: "Aesthetic sadness", body: "Not always crisis — sometimes vibe posting." },
      { title: "Vs 😞", body: "😞 is specific disappointment. 😔 is broader melancholy." },
    ],
    searchIntents: ["pensive face emoji", "😔 meaning", "sad thoughtful emoji"],
    whenNotToUse: ["Don't minimize clinical depression with only 😔.", "Avoid at others' happy milestones."],
    faqs: [
      { question: "What does 😔 mean?", answer: "Sad reflection, loneliness, or quiet emotional weight." },
      { question: "😔 flirty?", answer: "Rarely — usually genuine low or thoughtful mood." },
    ],
  },

  "weary-face": {
    batchId: BATCH_ID,
    searchTitle: "Weary Face Emoji (😩) Meaning: Exhausted, Over It, Done",
    snippetAnswer:
      "😩 Weary Face is fed-up exhaustion — mental drain, 'I can't even', parenting burnout, or drama fatigue. More dramatic than 😫 tired.",
    detailedParagraphs: [
      "Weary Face (😩) shows squinted anguish — Unicode's 'done with this' face.",
      "Parents text 😩 after long days with kids. Students during finals week live on 😩.",
      "Also reacts to endless group chat drama — 'y'all still arguing? 😩'.",
      "Meme overlap with sexual innuendo exists online — default reading is still exhaustion.",
    ],
    textingMeaning: "'I'm so done 😩', 'why is this still happening 😩'.",
    socialMeaning: "Burnout posts, overtime rants, and customer service horror stories.",
    caution: "Sexual connotations in some communities — know your audience.",
    examples: [
      { context: "Burnout", text: "Third meeting today 😩" },
      { context: "Parent", text: "Bedtime took 2 hours 😩" },
      { context: "Drama", text: "Not this again 😩" },
      { context: "Work", text: "Friday can't come soon enough 😩" },
      { context: "Heat", text: "This weather 😩" },
    ],
    contextBlocks: [
      { title: "Burnout signal", body: "😩 invites friends to offer rest or help — venting emoji." },
      { title: "Drama fatigue", body: "Group chats use 😩 when threads won't die." },
      { title: "Vs 😫", body: "😫 is physical tired collapse. 😩 is fed-up weary." },
    ],
    searchIntents: ["weary face emoji", "😩 meaning", "exhausted emoji", "over it emoji"],
    whenNotToUse: ["Avoid sexual use with unclear consent.", "Don't 😩 at someone's serious plea for help."],
    faqs: [
      { question: "What does 😩 mean?", answer: "Exhausted and over it — mental or emotional drain." },
      { question: "😩 vs 😤?", answer: "😤 is frustrated huff. 😩 is depleted surrender." },
    ],
  },

  "tired-face": {
    batchId: BATCH_ID,
    searchTitle: "Tired Face Emoji (😫) Meaning: Worn Out and Drained",
    snippetAnswer:
      "😫 Tired Face is physical and mental exhaustion — long shifts, all-nighters, crying till empty. Mouth open like a groan.",
    detailedParagraphs: [
      "Tired Face (😫) depicts anguished fatigue — Unicode's drained energy symbol.",
      "Nurses, drivers, and gamers after marathons send 😫 — body and mind spent.",
      "Post-crying exhaustion also maps to 😫 — 'ugly cried now 😫'.",
      "Pair with sleep offers when friends send 😫 — 'go rest' lands better than jokes.",
    ],
    textingMeaning: "'Need sleep 😫', '12-hour shift 😫', 'brain fried 😫'.",
    socialMeaning: "Studyblr crash posts and 'day in my life' overtime vlogs.",
    caution: "Chronic 😫 from a friend may signal burnout — check in seriously.",
    examples: [
      { context: "Shift", text: "Just got home 😫" },
      { context: "Study", text: "All-nighter done 😫" },
      { context: "Cry", text: "No tears left 😫" },
      { context: "Travel", text: "Jet lag 😫" },
      { context: "Gym", text: "Leg day destroyed me 😫" },
    ],
    contextBlocks: [
      { title: "Physical drain", body: "😫 emphasizes body-level tired more than 😩 drama." },
      { title: "Recovery cue", body: "Friends should suggest rest when 😫 appears repeatedly." },
      { title: "Vs 😴", body: "😴 is sleepy calm. 😫 is suffering tired." },
    ],
    searchIntents: ["tired face emoji", "😫 meaning", "exhausted tired emoji"],
    whenNotToUse: ["Don't mock chronic illness fatigue.", "Avoid only 😫 when someone needs help."],
    faqs: [
      { question: "What does 😫 mean?", answer: "Extreme tiredness — physical exhaustion or emotional drain." },
      { question: "😫 vs 😩?", answer: "😩 is 'over it' weary. 😫 is groaning exhaustion." },
    ],
  },

  "yawning-face": {
    batchId: BATCH_ID,
    searchTitle: "Yawning Face Emoji (🥱) Meaning: Bored, Sleepy, and Unimpressed",
    snippetAnswer:
      "🥱 Yawning Face means boredom, sleepiness, or 'this is dull' — hand over mouth yawn. Newer emoji popular for boring meetings and late nights.",
    detailedParagraphs: [
      "Yawning Face (🥱) added in Emoji 12.0 — visual yawn with hand cover.",
      "Students yawn-react to long lectures in group chats — subtle shade.",
      "Also literal 'time for bed 🥱' — softer than 😴 for 'I'm fading'.",
      "Can dismiss someone's story as boring — potentially rude without humor rapport.",
    ],
    textingMeaning: "'So tired 🥱', 'this meeting 🥱', 'nothing going on 🥱'.",
    socialMeaning: "Meme for uneventful days and 'main character bored' posts.",
    caution: "🥱 at someone's excited news hurts feelings — use carefully.",
    examples: [
      { context: "Sleepy", text: "Can barely keep eyes open 🥱" },
      { context: "Bored", text: "This lecture 🥱" },
      { context: "Late", text: "2am still up 🥱" },
      { context: "Slow day", text: "Nothing happening 🥱" },
      { context: "Meeting", text: "Zoom could've been email 🥱" },
    ],
    contextBlocks: [
      { title: "Boredom shade", body: "🥱 tells friends the topic drags — keep it playful." },
      { title: "Sleep signal", body: "Partners read 🥱 as cue to end the call and sleep." },
      { title: "Vs 😪", body: "😪 is sleepy drool face. 🥱 is active yawn." },
    ],
    searchIntents: ["yawning face emoji", "🥱 meaning", "bored emoji yawn"],
    whenNotToUse: ["Don't 🥱 someone's achievement.", "Avoid in job interviews."],
    faqs: [
      { question: "What does 🥱 mean?", answer: "Boredom, sleepiness, or dullness — sometimes subtle insult." },
      { question: "Is 🥱 rude?", answer: "Can be if aimed at someone's story — fine among close friends joking." },
    ],
  },

  "sleepy-face": {
    batchId: BATCH_ID,
    searchTitle: "Sleepy Face Emoji (😪) Meaning: Tired, Sleepy, and Droopy",
    snippetAnswer:
      "😪 Sleepy Face shows sleepiness with bubble snot — drowsy, half-asleep, or needing rest. Cute tired more than suffering 😫.",
    detailedParagraphs: [
      "Sleepy Face (😪) includes a sleep bubble from nose — Unicode's drowsy cartoon.",
      "Kids' bedtime routines and 'five more minutes 😪' memes use it widely.",
      "Morning group chats after late parties — collective 😪 energy.",
      "The snot bubble reads childish/cute — not for formal tired complaints.",
    ],
    textingMeaning: "'Need nap 😪', 'couldn't sleep 😪', 'early class 😪'.",
    socialMeaning: "Wholesome tired posts — less burnout rage than 😩.",
    caution: "Some find snot bubble gross — know your audience.",
    examples: [
      { context: "Morning", text: "5am alarm 😪" },
      { context: "Nap", text: "Couch nap time 😪" },
      { context: "Party", text: "Last night caught up 😪" },
      { context: "Baby", text: "She finally slept 😪" },
      { context: "Study", text: "Library closing 😪" },
    ],
    contextBlocks: [
      { title: "Cute tired", body: "😪 softens complaints — friends send memes back." },
      { title: "Bedtime kids", body: "Parents negotiate sleep with toddlers using 😪 stickers." },
      { title: "Vs 🥱", body: "🥱 yawns actively. 😪 is already drifting off." },
    ],
    searchIntents: ["sleepy face emoji", "😪 meaning", "tired sleepy emoji snot"],
    whenNotToUse: ["Avoid in serious medical sleep disorder talks without words.", "Skip if recipient hates snot humor."],
    faqs: [
      { question: "Why does 😪 have a bubble?", answer: "Cartoon sleep symbol in Japanese emoji tradition — means drowsy, not sick." },
      { question: "😪 vs 😴?", answer: "😴 is fully asleep Zzz. 😪 is fighting sleepiness." },
    ],
  },

  "hot-face": {
    batchId: BATCH_ID,
    searchTitle: "Hot Face Emoji (🥵) Meaning: Hot, Attractive, and Overheated",
    snippetAnswer:
      "🥵 Hot Face means overheated OR slang 'so hot' attraction — tongue out, red face. Weather, gym, spicy food, and thirst traps share this emoji.",
    detailedParagraphs: [
      "Hot Face (🥵) added Emoji 11.0 — literal heat stress and internet thirst overlap.",
      "Summer heat waves fill group chats with 🥵 — AC broken, marathon in sun.",
      "Flirty comments on photos: 'you look 🥵' — attraction slang Gen Z uses widely.",
      "Spicy food challenges tag 🥵 literally — wings and hot sauce reels.",
    ],
    textingMeaning: "'It's 100° 🥵', 'spicy ramen 🥵', thirst compliment.",
    socialMeaning: "Fitness thirst traps and heat wave memes — dual meaning always possible.",
    caution: "Unsolicited 🥵 on strangers' photos is harassment. At work it's HR risk.",
    examples: [
      { context: "Weather", text: "No AC 🥵" },
      { context: "Gym", text: "Sauna after leg day 🥵" },
      { context: "Food", text: "Ghost pepper 🥵" },
      { context: "Flirt", text: "That outfit 🥵" },
      { context: "Run", text: "Midday jog mistake 🥵" },
    ],
    contextBlocks: [
      { title: "Dual meaning", body: "Always check thread — literal heat vs attraction slang." },
      { title: "Consent matters", body: "Compliments need welcome context — don't spam 🥵." },
      { title: "Vs 😍", body: "😍 is heart-eye love. 🥵 is heated attraction or temperature." },
    ],
    searchIntents: ["hot face emoji", "🥵 meaning", "thirst emoji", "🥵 flirty"],
    whenNotToUse: ["Never unsolicited on strangers.", "Avoid HR contexts."],
    faqs: [
      { question: "What does 🥵 mean from a guy or girl?", answer: "Often attraction 'you're hot' — or literal overheating. Context decides." },
      { question: "Is 🥵 inappropriate?", answer: "Can be — fine among consenting flirt; problematic unsolicited." },
    ],
  },

  "cold-face": {
    batchId: BATCH_ID,
    searchTitle: "Cold Face Emoji (🥶) Meaning: Freezing, Cold, and Shocked",
    snippetAnswer:
      "🥶 Cold Face means freezing — blue face, chattering teeth. Winter weather, cold takes, and 'that's cold' rejection humor.",
    detailedParagraphs: [
      "Cold Face (🥶) pairs with 🥵 as temperature extremes — Unicode winter suffering face.",
      "Blizzards, broken heaters, and outdoor sports in January get 🥶.",
      "Slang: brutal rejection or savage joke — 'that reply was 🥶'.",
      "Ice bath and cold plunge wellness trends adopted 🥶 literally.",
    ],
    textingMeaning: "'Freezing outside 🥶', 'need a jacket 🥶', 'cold blooded take 🥶'.",
    socialMeaning: "Winter fashion posts, ski trips, and cold shower challenge content.",
    caution: "🥶 about homelessness or frostbite victims is cruel.",
    examples: [
      { context: "Weather", text: "-10 wind chill 🥶" },
      { context: "Ski", text: "First run 🥶" },
      { context: "Shade", text: "Ice cold response 🥶" },
      { context: "Plunge", text: "Cold tub done 🥶" },
      { context: "Commute", text: "Bus stop 20 min 🥶" },
    ],
    contextBlocks: [
      { title: "Literal winter", body: "Northern cities unify around 🥶 all season." },
      { title: "Slang cold", body: "Playful 'cold' diss — know friendship limits." },
      { title: "Vs ❄️", body: "❄️ is snowflake object. 🥶 is human feeling cold." },
    ],
    searchIntents: ["cold face emoji", "🥶 meaning", "freezing emoji", "cold emoji"],
    whenNotToUse: ["Don't mock unhoused people in winter.", "Avoid during hypothermia emergencies as joke."],
    faqs: [
      { question: "What does 🥶 mean in slang?", answer: "Freezing weather OR metaphorically harsh/cold behavior." },
      { question: "🥶 vs 🧊?", answer: "🧊 is ice cube. 🥶 is you feeling frozen." },
    ],
  },

  "face-vomiting": {
    batchId: BATCH_ID,
    searchTitle: "Face Vomiting Emoji (🤮) Meaning: Sick, Gross, and Disgusted",
    snippetAnswer:
      "🤮 Face Vomiting means nausea, food poisoning, or strong disgust — 'that's disgusting'. Graphic; use carefully in mixed company.",
    detailedParagraphs: [
      "Face Vomiting (🤮) is explicit green sick — Unicode disgust at maximum visual.",
      "Hangover and food poisoning chats use 🤮 literally — 'never drinking again 🤮'.",
      "Figurative: revulsion at bad behavior, smells, or political takes — strong rejection.",
      "Too graphic for many workplaces — prefer 🤢 if you need softer gross.",
    ],
    textingMeaning: "'Feel awful 🤮', 'that smell 🤮', 'can't unsee 🤮'.",
    socialMeaning: "Reaction to gross-out challenge videos and bad food reviews.",
    caution: "Never at eating disorder recovery content. Avoid bullying appearance.",
    examples: [
      { context: "Sick", text: "Food poisoning 🤮" },
      { context: "Hangover", text: "Never again 🤮" },
      { context: "Gross", text: "Why would you 🤮" },
      { context: "Smell", text: "Elevator nightmare 🤮" },
      { context: "React", text: "That clip 🤮" },
    ],
    contextBlocks: [
      { title: "Literal illness", body: "Friends offer hydration and rest when 🤮 is medical." },
      { title: "Disgust metaphor", body: "Stronger than 🤢 — use when truly repulsed." },
      { title: "Vs 🤢", body: "🤢 is nauseated holding it in. 🤮 is active vomit." },
    ],
    searchIntents: ["vomiting face emoji", "🤮 meaning", "sick emoji vomit", "disgusted emoji"],
    whenNotToUse: ["Never toward someone's body or food culture.", "Skip in professional email."],
    faqs: [
      { question: "What does 🤮 mean?", answer: "Vomiting sickness or extreme disgust — very strong tone." },
      { question: "Is 🤮 too much?", answer: "Often yes in formal settings — fine among close friends venting." },
    ],
  },

  "sneezing-face": {
    batchId: BATCH_ID,
    searchTitle: "Sneezing Face Emoji (🤧) Meaning: Sick, Allergies, and Bless You",
    snippetAnswer:
      "🤧 Sneezing Face means colds, allergies, flu season, or 'I'm under the weather'. Tissue visible — polite sick signal.",
    detailedParagraphs: [
      "Sneezing Face (🤧) shows tissue and sneeze — Unicode health-season emoji.",
      "Cancel plans politely: 'won't make it 🤧 don't want to spread it'.",
      "Allergy sufferers post 🤧 during pollen season — literal and relatable.",
      "COVID-era made 🤧 sensitive — some prefer text clarity about contagion.",
    ],
    textingMeaning: "'Caught a cold 🤧', 'allergies killing me 🤧', staying home sick.",
    socialMeaning: "Flu season memes and wellness check-ins among friends.",
    caution: "Don't assume 🤧 is COVID — ask kindly. Don't mock illness.",
    examples: [
      { context: "Cancel", text: "Staying home today 🤧" },
      { context: "Allergy", text: "Pollen count 🤧" },
      { context: "Work", text: "WFH sick 🤧" },
      { context: "Season", text: "Flu season hits 🤧" },
      { context: "Update", text: "Feeling rough 🤧" },
    ],
    contextBlocks: [
      { title: "Polite cancel", body: "🤧 explains absence without long medical detail." },
      { title: "Seasonal rhythm", body: "Same friends trade 🤧 every spring — running joke." },
      { title: "Vs 🤒", body: "🤒 is fever thermometer face. 🤧 is sneeze/cold focus." },
    ],
    searchIntents: ["sneezing face emoji", "🤧 meaning", "sick cold emoji", "allergy emoji"],
    whenNotToUse: ["Avoid joking at immunocompromised friends.", "Don't use instead of testing guidance when serious."],
    faqs: [
      { question: "What does 🤧 mean in texting?", answer: "Sick with cold/allergies or politely canceling contagious meetups." },
      { question: "Is 🤧 COVID?", answer: "Not specifically — general illness emoji; clarify if needed." },
    ],
  },

  "face-with-head-bandage": {
    batchId: BATCH_ID,
    searchTitle: "Face With Head Bandage (🤕) Meaning: Injured, Hurt, and Ouch",
    snippetAnswer:
      "🤕 Face With Head Bandage means injury — bumped head, accident, surgery recovery, or figurative 'that hurt' after roast.",
    detailedParagraphs: [
      "Face With Head Bandage (🤕) wraps the head — Unicode minor injury symbol.",
      "Kids' sports parents text 🤕 when someone gets knocked — 'all okay 🤕?'.",
      "Figurative: ego bruised after criticism — 'my pride 🤕'.",
      "Not for severe trauma jokes — use sensitivity after real accidents.",
    ],
    textingMeaning: "'Walked into a door 🤕', 'concussion protocol 🤕', 'that stung 🤕'.",
    socialMeaning: "Skate fail videos and mosh pit stories collect 🤕.",
    caution: "Real head injuries need medical care, not only emoji.",
    examples: [
      { context: "Injury", text: "Stitches out tomorrow 🤕" },
      { context: "Sport", text: "Header gone wrong 🤕" },
      { context: "Oops", text: "Cabinet corner 🤕" },
      { context: "Recovery", text: "Taking it easy 🤕" },
      { context: "Joke hurt", text: "Roast too real 🤕" },
    ],
    contextBlocks: [
      { title: "Check-in cue", body: "🤕 prompts friends to ask if you're actually OK." },
      { title: "Sports culture", body: "Contact sports group chats normalize 🤕 updates." },
      { title: "Vs 🏥", body: "🏥 is hospital building. 🤕 is injured person emoji." },
    ],
    searchIntents: ["head bandage emoji", "🤕 meaning", "injured emoji", "hurt face emoji"],
    whenNotToUse: ["Don't mock disabled or injured people.", "Serious accidents need real support."],
    faqs: [
      { question: "What does 🤕 mean?", answer: "Head injury, recovery, or figurative emotional hurt." },
      { question: "Is 🤕 serious?", answer: "Can be literal injury — always ask if someone needs help." },
    ],
  },

  "cowboy-hat-face": {
    batchId: BATCH_ID,
    searchTitle: "Cowboy Hat Face Emoji (🤠) Meaning: Yeehaw, Country, and Irony",
    snippetAnswer:
      "🤠 Cowboy Hat Face is yeehaw energy — country culture, Western aesthetic, wholesome meme 'howdy', or ironic 'partner' jokes.",
    detailedParagraphs: [
      "Cowboy Hat Face (🤠) smiles under a brown hat — Unicode Western charm.",
      "Country music fans, rodeo trips, and Nashville bachelorettes use 🤠 sincerely.",
      "Internet meme: 🤠 as chaotic good or 'partner' TikTok sound — often ironic.",
      "Wholesome posting pairs 🤠 with golden retriever boyfriend energy jokes.",
    ],
    textingMeaning: "'Howdy 🤠', road trip through Texas 🤠, playful partner address.",
    socialMeaning: "Line dancing reels, boot shopping, and BBQ posts.",
    caution: "Mocking rural people with 🤠 is classist — celebrate don't punch down.",
    examples: [
      { context: "Country", text: "Nashville weekend 🤠" },
      { context: "Meme", text: "Partner 🤠" },
      { context: "Road trip", text: "Wide open roads 🤠" },
      { context: "Concert", text: "Stadium country night 🤠" },
      { context: "Howdy", text: "Howdy 🤠" },
    ],
    contextBlocks: [
      { title: "Country lifestyle", body: "Rodeo and ranch content uses 🤠 authentically." },
      { title: "Meme partner", body: "TikTok sound made 🤠 internet-famous beyond cowboys." },
      { title: "Vs 🧑‍🌾", body: "🧑‍🌾 is farmer profession. 🤠 is vibe/aesthetic face." },
    ],
    searchIntents: ["cowboy hat face", "🤠 meaning", "yeehaw emoji", "howdy emoji"],
    whenNotToUse: ["Avoid stereotyping rural communities mockingly.", "Skip in solemn Western history trauma contexts."],
    faqs: [
      { question: "What does 🤠 mean on TikTok?", answer: "Often ironic 'partner' meme or wholesome yeehaw — context varies." },
      { question: "Is 🤠 country only?", answer: "Started Western — now broader playful confident energy online." },
    ],
  },

  "lying-face": {
    batchId: BATCH_ID,
    searchTitle: "Lying Face Emoji (🤥) Meaning: Pinocchio, Cap, and Not True",
    snippetAnswer:
      "🤥 Lying Face means lying or exaggeration — long nose Pinocchio reference. Call out cap, joke fibs, or playful 'sure buddy'.",
    detailedParagraphs: [
      "Lying Face (🤥) grows an elongated nose — fairy-tale liar symbol in emoji form.",
      "Gen Z 'cap/no cap' culture maps to 🤥 — 'that's cap 🤥' when doubting stories.",
      "Playful between friends confessing white lies — 'okay I lied 🤥'.",
      "Accusing someone of lying with 🤥 can start fights — tone is everything.",
    ],
    textingMeaning: "'Cap 🤥', 'nice story 🤥', admitting a small fib.",
    socialMeaning: "Fact-check comment sections and drama recap threads.",
    caution: "False accusations harm relationships — verify before 🤥.",
    examples: [
      { context: "Cap", text: "No way that's true 🤥" },
      { context: "Confess", text: "Fine I lied 🤥" },
      { context: "Doubt", text: "Sure Jan 🤥" },
      { context: "Exaggerate", text: "I totally ran 20 miles 🤥" },
      { context: "Politics", text: "Fact check needed 🤥" },
    ],
    contextBlocks: [
      { title: "Cap culture", body: "🤥 visualizes calling BS without typing paragraphs." },
      { title: "Playful fibs", body: "Self-directed 🤥 admits joke lies — safer tone." },
      { title: "Vs 🤨", body: "🤨 is skeptical eyebrow. 🤥 explicitly claims lying." },
    ],
    searchIntents: ["lying face emoji", "🤥 meaning", "pinocchio emoji", "cap emoji lie"],
    whenNotToUse: ["Don't weaponize against abuse survivors' truths.", "Avoid HR accusations via emoji only."],
    faqs: [
      { question: "What does 🤥 mean?", answer: "Accusation or admission of lying — Pinocchio nose reference." },
      { question: "Is 🤥 aggressive?", answer: "Can be — playful among friends, hostile if serious accusation." },
    ],
  },

  "angry-face": {
    batchId: BATCH_ID,
    searchTitle: "Angry Face Emoji (😠) Meaning: Mad, Annoyed, and Frustrated",
    snippetAnswer:
      "😠 Angry Face shows controlled anger — annoyed, frustrated, or displeased without full rage. Red face on some platforms.",
    detailedParagraphs: [
      "Angry Face (😠) furrows brows — Unicode mid-level anger, not explosive 🤬.",
      "Use when plans fail, promises break, or disrespect happens — 'not okay 😠'.",
      "Parenting texts: kids acting up — 'clean your room 😠' without 🤬.",
      "Escalates conflict if spammed — explain why you're upset in words too.",
    ],
    textingMeaning: "'I'm mad 😠', 'not funny 😠', frustrated boundary.",
    socialMeaning: "Customer complaint tweets and sports officiating rage threads.",
    caution: "Anger emoji at partners during fights inflames — pause and talk.",
    examples: [
      { context: "Mad", text: "You said you'd be here 😠" },
      { context: "Boundary", text: "Don't do that again 😠" },
      { context: "Game", text: "Bad call 😠" },
      { context: "Work", text: "Missed deadline again 😠" },
      { context: "Parent", text: "Room. Now. 😠" },
    ],
    contextBlocks: [
      { title: "Controlled anger", body: "😠 warns you're upset before full blow-up — chance to repair." },
      { title: "Customer voice", body: "Public 😠 on brands demands response — companies monitor it." },
      { title: "Vs 😡", body: "😡 is redder furious face. 😠 is stern anger." },
    ],
    searchIntents: ["angry face emoji", "😠 meaning", "mad emoji", "annoyed emoji"],
    whenNotToUse: ["Avoid threatening harassment patterns.", "Don't replace abuse hotline outreach."],
    faqs: [
      { question: "What does 😠 mean in texting?", answer: "Anger, frustration, or strong displeasure — not joking." },
      { question: "😠 vs 🤬?", answer: "🤬 adds curse symbols — much stronger rage." },
    ],
  },

  "face-with-symbols-on-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Face With Symbols On Mouth (🤬) Meaning: Cursing, Rage, and Furious",
    snippetAnswer:
      "🤬 Face With Symbols On Mouth is cartoon cursing — extreme anger, rage, or comedic profanity bleep. Strongest standard anger emoji.",
    detailedParagraphs: [
      "This emoji (🤬) shows symbols over mouth like comic book cussing — Unicode peak anger face.",
      "Gamers and drivers vent with 🤬 after losses and traffic — cathartic hyperbole.",
      "Also ironic exaggeration — minor inconvenience 'wifi dropped 🤬'.",
      "Real harassment with 🤬 is toxic — vent to friends, not at strangers.",
    ],
    textingMeaning: "Venting rage, comedic overreaction, bleeped swearing energy.",
    socialMeaning: "Rage compilations and unfair referee montages.",
    caution: "Workplace 🤬 can become disciplinary evidence. Never abuse targets.",
    examples: [
      { context: "Rage", text: "Unbelievable 🤬" },
      { context: "Game", text: "Lag killed me 🤬" },
      { context: "Traffic", text: "45 min for 2 miles 🤬" },
      { context: "Irony", text: "Out of milk 🤬" },
      { context: "Vent", text: "Had to get it out 🤬" },
    ],
    contextBlocks: [
      { title: "Comic censor", body: "Symbols reference TV bleep — humor in exaggeration." },
      { title: "Vent vs attack", body: "Direct 🤬 at a person differs from yelling at situation." },
      { title: "Vs 😠", body: "😠 is angry. 🤬 is profane-level fury." },
    ],
    searchIntents: ["swearing face emoji", "🤬 meaning", "cursing emoji", "angry symbols mouth"],
    whenNotToUse: ["Never harass.", "Avoid professional contexts entirely."],
    faqs: [
      { question: "What does 🤬 mean?", answer: "Extreme anger with implied swearing — comic rage symbol." },
      { question: "Is 🤬 offensive?", answer: "The implied profanity can be — context and target matter." },
    ],
  },

  "angry-face-with-horns": {
    batchId: BATCH_ID,
    searchTitle: "Angry Face With Horns (👿) Meaning: Devil, Imp, and Mischief",
    snippetAnswer:
      "👿 Angry Face With Horns is imp/devil energy — mischief, villain roleplay, spicy anger, or Halloween devil. Purple angry face with horns.",
    detailedParagraphs: [
      "Angry Face With Horns (👿) is Unicode's imp — angrier cousin of 😈 smiling devil.",
      "Gaming 'playing the villain' and competitive trash talk use 👿 lightly.",
      "Halloween costumes and heavy metal aesthetics tag 👿 seasonally.",
      "Flirty spicy humor sometimes uses 👿 — know consent and audience.",
    ],
    textingMeaning: "'I'm evil today 👿', villain arc jokes, feigned anger.",
    socialMeaning: "Cosplay, anime antagonist edits, and spooky season posts.",
    caution: "Religious sensitivity in some cultures — avoid mocking beliefs.",
    examples: [
      { context: "Mischief", text: "Chaos mode 👿" },
      { context: "Game", text: "Villain arc 👿" },
      { context: "Halloween", text: "Costume ready 👿" },
      { context: "Joke angry", text: "Don't cross me 👿" },
      { context: "Metal", text: "Concert tonight 👿" },
    ],
    contextBlocks: [
      { title: "Imp vs devil", body: "👿 is angrier purple imp; 😈 is smug smiling devil." },
      { title: "Play villain", body: "Board game and RPG nights use 👿 for role flavor." },
      { title: "Seasonal spike", body: "October sees 👿 everywhere — literal costume context." },
    ],
    searchIntents: ["angry devil emoji", "👿 meaning", "imp emoji", "purple devil face"],
    whenNotToUse: ["Avoid religious mockery.", "Don't threaten with 👿."],
    faqs: [
      { question: "👿 vs 😈?", answer: "😈 is smiling mischief. 👿 is angry imp devil." },
      { question: "What does 👿 mean flirty?", answer: "Sometimes spicy mischief — must be mutual and consensual." },
    ],
  },

  ogre: {
    batchId: BATCH_ID,
    searchTitle: "Ogre Emoji (👹) Meaning: Japanese Oni, Monster, and Rage",
    snippetAnswer:
      "👹 Ogre is the red Japanese oni demon — festivals, anime, fierce rage, or calling someone a monster jokingly. Cultural symbol, not generic ogre Shrek.",
    detailedParagraphs: [
      "Ogre (👹) comes from Japanese folklore oni — horned demon masks at Setsubun bean-throwing festivals.",
      "Anime and gaming fans recognize 👹 instantly — boss fights, villain arcs.",
      "Western users may say 'ogre' like Shrek — but emoji design is specifically oni-red demon.",
      "Respect cultural origin — don't use 👹 to racist-caricature Asian people.",
    ],
    textingMeaning: "'Boss fight 👹', 'I'm fuming 👹', festival or anime reference.",
    socialMeaning: "Japan travel during festival season, cosplay, and manga fandom.",
    caution: "Never racist usage toward East Asian people. Learn oni context.",
    examples: [
      { context: "Game", text: "Final boss 👹" },
      { context: "Festival", text: "Setsubun 👹" },
      { context: "Anime", text: "Episode tonight 👹" },
      { context: "Rage joke", text: "Don't wake me 👹" },
      { context: "Cosplay", text: "Oni mask done 👹" },
    ],
    contextBlocks: [
      { title: "Oni folklore", body: "👹 represents traditional Japanese demon — beans keep it away in ritual." },
      { title: "Fandom literacy", body: "Gamers use 👹 for hard enemies — shared cultural shorthand online." },
      { title: "Vs 👺", body: "👺 is tengu goblin — different folklore creature." },
    ],
    searchIntents: ["ogre emoji meaning", "👹 oni emoji", "japanese demon emoji", "red ogre emoji"],
    whenNotToUse: ["Never racist caricature.", "Avoid mocking Japanese culture."],
    faqs: [
      { question: "Is 👹 Shrek?", answer: "Unicode name says ogre but design is Japanese oni — not green Shrek." },
      { question: "What is oni?", answer: "Japanese folklore demon — 👹 emoji is based on festival mask imagery." },
    ],
  },

  goblin: {
    batchId: BATCH_ID,
    searchTitle: "Goblin Emoji (👺) Meaning: Tengu, Goblin, and Japanese Folklore",
    snippetAnswer:
      "👺 Goblin is the long-nose tengu from Japanese folklore — supernatural trickster, angry red mask, anime and festival context.",
    detailedParagraphs: [
      "Goblin (👺) emoji depicts tengu — mountain goblin with long nose in Japanese tradition.",
      "Distinct from Western goblins — emoji name is simplified but art is tengu mask.",
      "Used in Japan-related content, martial arts dojo humor, and villain cosplay.",
      "Same cultural respect rules as 👹 — appreciation not mockery.",
    ],
    textingMeaning: "'Tengu vibes 👺', niche folklore reference, intense game opponent.",
    socialMeaning: "Kyoto travel, Noh theatre fans, and samurai anime communities.",
    caution: "Do not use to stereotype Japanese people.",
    examples: [
      { context: "Anime", text: "Arc starts 👺" },
      { context: "Travel", text: "Shrine hike 👺" },
      { context: "Game", text: "Mini-boss 👺" },
      { context: "Mask", text: "Festival gear 👺" },
      { context: "Joke", text: "Chaotic energy 👺" },
    ],
    contextBlocks: [
      { title: "Tengu lore", body: "👺 references supernatural trickster spirits — part of Shinto/Buddhist folklore." },
      { title: "Name confusion", body: "English 'goblin' label hides tengu — fans know the difference." },
      { title: "Vs 👹", body: "👹 oni is horned red demon. 👺 tengu has long nose." },
    ],
    searchIntents: ["goblin emoji", "👺 meaning", "tengu emoji", "japanese goblin emoji"],
    whenNotToUse: ["No racist usage.", "Don't confuse with Western fantasy goblins in educational content without note."],
    faqs: [
      { question: "What creature is 👺?", answer: "Japanese tengu — often called goblin in Unicode English name." },
      { question: "👺 vs 👹?", answer: "Different folklore beings — tengu vs oni." },
    ],
  },

  "alien-monster": {
    batchId: BATCH_ID,
    searchTitle: "Alien Monster Emoji (👾) Meaning: Space Invaders, Gaming, and Retro",
    snippetAnswer:
      "👾 Alien Monster is retro arcade alien — Space Invaders vibes, gaming, pixel aesthetic, and 'weird outsider' humor.",
    detailedParagraphs: [
      "Alien Monster (👾) purple pixel-style invader — Unicode nod to classic arcade games.",
      "Gamers tag 👾 for retro streams, indie pixel art, and clutch plays ironically.",
      "Nerd culture and 8-bit aesthetic posts use 👾 in bios since early internet.",
      "Different from 👽 gray alien — 👾 is specifically game monster cute style.",
    ],
    textingMeaning: "'Gaming tonight 👾', 'pixel era 👾', quirky weird mood.",
    socialMeaning: "Twitch retro nights, chiptune music, and vaporwave art.",
    caution: "Fine everywhere casual — still informal for investor decks.",
    examples: [
      { context: "Game", text: "Arcade night 👾" },
      { context: "Stream", text: "Live in 10 👾" },
      { context: "Aesthetic", text: "8-bit mood 👾" },
      { context: "Weird", text: "Feeling alien 👾" },
      { context: "Score", text: "New high score 👾" },
    ],
    contextBlocks: [
      { title: "Arcade legacy", body: "👾 instantly signals retro gaming without explaining Space Invaders." },
      { title: "Indie dev", body: "Pixel game launches use 👾 in marketing to fans." },
      { title: "Vs 👽", body: "👽 is gray UFO alien head. 👾 is game monster sprite." },
    ],
    searchIntents: ["alien monster emoji", "👾 meaning", "space invader emoji", "pixel alien emoji"],
    whenNotToUse: ["Avoid in formal B2B unless brand is gaming-native."],
    faqs: [
      { question: "What game is 👾 from?", answer: "Inspired by Space Invaders-style arcade aliens — retro gaming symbol." },
      { question: "👾 vs 👽?", answer: "👾 is purple game sprite. 👽 is classic gray alien." },
    ],
  },

  "skull-and-crossbones": {
    batchId: BATCH_ID,
    searchTitle: "Skull and Crossbones (☠️) Meaning: Danger, Poison, and Pirate",
    snippetAnswer:
      "☠️ Skull and Crossbones marks danger, poison labels, pirate flags, or edgy humor — more hazard-symbol than 💀 Gen Z 'I'm dead laughing'.",
    detailedParagraphs: [
      "Skull and Crossbones (☠️) is the classic Jolly Roger / poison sign — Unicode hazard emoji.",
      "Chemistry and lab jokes use ☠️ for toxic mixes — literal safety symbol roots.",
      "Pirate-themed parties and metal concerts tag ☠️ decoratively.",
      "Less meme 'I'm deceased' than 💀 — ☠️ reads darker or pirate unless context jokes.",
    ],
    textingMeaning: "'Toxic relationship ☠️', pirate theme, warning this is dangerous.",
    socialMeaning: "Halloween horror, punk aesthetic, and true crime irony (know sensitivity).",
    caution: "Suicide references with ☠️ need crisis support, not jokes.",
    examples: [
      { context: "Pirate", text: "Ahoy ☠️" },
      { context: "Warning", text: "Do not mix ☠️" },
      { context: "Edgy joke", text: "My sleep schedule ☠️" },
      { context: "Halloween", text: "Spooky decor ☠️" },
      { context: "Metal", text: "Mosh pit ☠️" },
    ],
    contextBlocks: [
      { title: "Hazard symbol", body: "☠️ on labels means poison — emoji carries that DNA." },
      { title: "Pirate flag", body: "Jolly Roger associations — fun in costume context." },
      { title: "Vs 💀", body: "💀 is Gen Z laugh/death humor. ☠️ is hazard/pirate heavier." },
    ],
    searchIntents: ["skull crossbones emoji", "☠️ meaning", "poison emoji", "pirate skull emoji"],
    whenNotToUse: ["Never encourage self-harm.", "Avoid at memorial services."],
    faqs: [
      { question: "☠️ vs 💀?", answer: "☠️ is crossbones hazard/pirate. 💀 is skull for laugh or shock memes." },
      { question: "What does ☠️ mean in texting?", answer: "Danger, poison joke, pirate vibe, or dark edgy humor." },
    ],
  },

  "jack-o-lantern": {
    batchId: BATCH_ID,
    searchTitle: "Jack-O-Lantern Emoji (🎃) Meaning: Halloween, Fall, and Pumpkin",
    snippetAnswer:
      "🎃 Jack-O-Lantern is Halloween and autumn — carved pumpkins, trick-or-treat, spooky season, and pumpkin spice culture every October.",
    detailedParagraphs: [
      "Jack-O-Lantern (🎃) is the carved pumpkin — Unicode Halloween anchor emoji.",
      "September–October social feeds switch to 🎃 — costumes, decor, candy, haunted houses.",
      "Also general fall aesthetic — pumpkin patches, not only scary.",
      "Pumpkin spice latte jokes pair 🎃 ☕ every year without fail.",
    ],
    textingMeaning: "'Trick or treat 🎃', 'costume party 🎃', fall plans.",
    socialMeaning: "Halloween Instagram, TikTok transitions, and retail marketing.",
    caution: "Off-season 🎃 for non-Halloween topics confuses — peak Aug–Nov.",
    examples: [
      { context: "Halloween", text: "Costume ready 🎃" },
      { context: "Party", text: "Saturday spooky 🎃" },
      { context: "Decor", text: "Porch is set 🎃" },
      { context: "Fall", text: "Patch visit 🎃" },
      { context: "Treats", text: "Candy stash 🎃" },
    ],
    contextBlocks: [
      { title: "Spooky season", body: "🎃 marks calendar shift — creators pivot content overnight." },
      { title: "Family tradition", body: "Carving night photos always lead with 🎃." },
      { title: "Vs 🎃 only fall", body: "Some use 🎃 for cozy autumn without horror — caption clarifies." },
    ],
    searchIntents: ["jack o lantern emoji", "🎃 meaning", "halloween pumpkin emoji", "pumpkin emoji"],
    whenNotToUse: ["Respect cultures that don't celebrate Halloween.", "Avoid 🎃 during solemn Oct events in your region."],
    faqs: [
      { question: "What does 🎃 mean outside Halloween?", answer: "Sometimes general fall/pumpkin — but mostly Halloween/spooky season." },
      { question: "🎃 vs 👻?", answer: "🎃 is pumpkin decor. 👻 is ghost/spooky humor." },
    ],
  },

  mouth: {
    batchId: BATCH_ID,
    searchTitle: "Mouth Emoji (👄) Meaning: Lips, Beauty, and Sensual",
    snippetAnswer:
      "👄 Mouth (lips) emoji highlights lips — makeup, kisses, sensual tone, or 'shut your mouth' jokes. More body-part literal than face emojis.",
    detailedParagraphs: [
      "Mouth (👄) shows red lips — Unicode body-part emoji used for beauty and flirt.",
      "Lipstick tutorials and lip sync TikToks tag 👄 consistently.",
      "Can imply silence 'my lips are sealed 👄' or gossip 'did you hear 👄'.",
      "Sensual DMs use 👄 — consent and context essential.",
    ],
    textingMeaning: "Beauty posts, flirt, 'zip it 👄', singing/lip sync.",
    socialMeaning: "MUAs, K-beauty, and music performance content.",
    caution: "Unsolicited sexual 👄 is harassment. Work inappropriate.",
    examples: [
      { context: "Beauty", text: "New lip color 👄" },
      { context: "Flirt", text: "Kisses 👄" },
      { context: "Secret", text: "Lips sealed 👄" },
      { context: "Sing", text: "Lip sync night 👄" },
      { context: "Gossip joke", text: "Spill tea 👄" },
    ],
    contextBlocks: [
      { title: "Beauty industry", body: "👄 is standard hashtag energy for lip products." },
      { title: "Sensual context", body: "Only welcome where flirt already mutual." },
      { title: "Vs 💋", body: "💋 is kiss mark lipstick print. 👄 is lips themselves." },
    ],
    searchIntents: ["mouth lips emoji", "👄 meaning", "lips emoji", "lip emoji copy paste"],
    whenNotToUse: ["No unsolicited sexual messages.", "Avoid objectifying comments on posts."],
    faqs: [
      { question: "What does 👄 mean in texting?", answer: "Lips focus — makeup, kisses, flirt, or silence jokes." },
      { question: "👄 vs 💋?", answer: "👄 shows lips. 💋 is a kiss stamp mark." },
    ],
  },

  "love-letter": {
    batchId: BATCH_ID,
    searchTitle: "Love Letter Emoji (💌) Meaning: Valentine, Crush, and Romance",
    snippetAnswer:
      "💌 Love Letter is a sealed heart envelope — romance, Valentine's Day, crush confessions, and wedding invites. Old-school love note aesthetic.",
    detailedParagraphs: [
      "Love Letter (💌) shows envelope with heart seal — Unicode romantic correspondence symbol.",
      "Valentine's season spikes 💌 in marketing and personal invites.",
      "Crush confession posts: 'writing my feelings 💌' before sending the text.",
      "Wedding save-the-dates and anniversary posts use 💌 for classy romance.",
    ],
    textingMeaning: "'Got your note 💌', 'be my valentine 💌', romantic invitation.",
    socialMeaning: "Stationery aesthetic, pen-pal nostalgia, and bridal Pinterest boards.",
    caution: "Unwanted romantic 💌 after rejection is pressure — respect no.",
    examples: [
      { context: "Valentine", text: "Be mine? 💌" },
      { context: "Crush", text: "Wrote this for you 💌" },
      { context: "Anniversary", text: "Ten years 💌" },
      { context: "Invite", text: "Save the date 💌" },
      { context: "Long distance", text: "Mail day 💌" },
    ],
    contextBlocks: [
      { title: "Valentine rhythm", body: "Retail and creators schedule 💌 content weeks ahead every February." },
      { title: "Slow romance", body: "💌 signals intentional romance — not casual hookup emoji." },
      { title: "Vs ❤️", body: "❤️ is love symbol. 💌 is love message delivery." },
    ],
    searchIntents: ["love letter emoji", "💌 meaning", "valentine envelope emoji", "💌 romance"],
    whenNotToUse: ["Don't pressure someone who said no.", "Avoid trivializing love in grief contexts."],
    faqs: [
      { question: "What does 💌 mean from a crush?", answer: "Romantic interest or formal affection — often Valentine or confession energy." },
      { question: "💌 vs 💕?", answer: "💌 is letter/envelope. 💕 is floating hearts decoration." },
    ],
  },
};
