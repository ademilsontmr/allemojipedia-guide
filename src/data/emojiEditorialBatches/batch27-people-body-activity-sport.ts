import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "27-people-body-activity-sport";

/** Batch 27 P1 — neutral person-activity, sport, fantasy, symbols (People & Body). */
export const batch27PeopleBodyActivitySport: Record<string, EmojiBatchEnrichment> = {
  "person-walking": {
    batchId: BATCH_ID,
    searchTitle: "Person Walking Emoji (🚶) Meaning: Walk, Steps, and Commute",
    snippetAnswer:
      "🚶 Person Walking marks walking and steps — daily commute, step-count goals, slow pace jokes, and 'going for a walk' mental-health breaks.",
    detailedParagraphs: [
      "Person Walking (🚶) shows gender-neutral figure mid-stride — Unicode activity symbol for pedestrian movement.",
      "Fitness apps celebrate 10k steps with 🚶 — Apple Watch and Fitbit culture shorthand.",
      "'I'll walk 🚶' means skip the ride — eco commute or need to think.",
    ],
    textingMeaning: "'Walking home 🚶', '10k steps 🚶', 'Slow 🚶'.",
    socialMeaning: "Step challenge posts, mindful walk reels, and 'touch grass' memes tag 🚶.",
    caution: "Facing-right variants exist — direction rarely changes meaning.",
    examples: [
      { context: "Commute", text: "Walking 🚶" },
      { context: "Steps", text: "10k 🚶" },
      { context: "Pace", text: "Slow 🚶" },
      { context: "Mental health", text: "Walk it off 🚶" },
      { context: "Eco", text: "No Uber 🚶" },
    ],
    contextBlocks: [
      { title: "Step culture", body: "🚶 daily step goals — fitness tracker badge of honor." },
      { title: "Vs 🏃", body: "🏃 running fast. 🚶 walking pace." },
      { title: "Neutral form", body: "🚶 person-* base — man/woman variants inherit meaning." },
    ],
    searchIntents: ["person walking emoji", "🚶 meaning", "walking emoji", "🚶 copy paste"],
    whenNotToUse: ["Mocking slow walkers.", "Replacing accessibility mobility aids — see wheelchair slugs."],
    faqs: [
      { question: "What does 🚶 mean?", answer: "Person walking — commute, steps, leisurely pace, mindful walk." },
      { question: "🚶 vs 🏃?", answer: "🚶 walk; 🏃 run — speed difference." },
    ],
  },

  "person-running": {
    batchId: BATCH_ID,
    searchTitle: "Person Running Emoji (🏃) Meaning: Run, Marathon, and Hurry",
    snippetAnswer:
      "🏃 Person Running means running and urgency — marathon training, late-for-work sprint, cardio posts, and 'running away from problems' memes.",
    detailedParagraphs: [
      "Person Running (🏃) shows gender-neutral figure in run stride — Unicode sport/activity symbol.",
      "Race bib photos and PR celebrations lead with 🏃 — runner Instagram staple.",
      "'Running late 🏃' doubles literal hurry and procrastination joke.",
    ],
    textingMeaning: "'Marathon 🏃', 'Late 🏃', 'Cardio 🏃'.",
    socialMeaning: "Parkrun posts, Couch-to-5K milestones, and escape memes use 🏃.",
    caution: "Injury posts need empathy — don't joke on serious harm threads.",
    examples: [
      { context: "Race", text: "PR 🏃" },
      { context: "Late", text: "Running 🏃" },
      { context: "Gym", text: "Treadmill 🏃" },
      { context: "Meme", text: "From problems 🏃" },
      { context: "Park", text: "Morning 🏃" },
    ],
    contextBlocks: [
      { title: "Marathon culture", body: "🏃 race day — bib, medal, chafing stories." },
      { title: "Vs 🚶", body: "🚶 walk. 🏃 run — faster locomotion." },
      { title: "Urgency", body: "'Running late' 🏃 — hurry without literal sprint." },
    ],
    searchIntents: ["person running emoji", "🏃 meaning", "running emoji", "🏃 copy paste"],
    whenNotToUse: ["Mocking someone's fitness level.", "Serious injury threads without care."],
    faqs: [
      { question: "What does 🏃 mean?", answer: "Person running — marathon, cardio, hurry, escape meme." },
      { question: "🏃 marathon?", answer: "Common tag for race training and finish-line posts." },
    ],
  },

  "person-standing": {
    batchId: BATCH_ID,
    searchTitle: "Person Standing Emoji (🧍) Meaning: Standing, Waiting, and Idle",
    snippetAnswer:
      "🧍 Person Standing marks standing still — waiting in line, idle pose, 'just standing here', and contrast to sitting/lying activity emojis.",
    detailedParagraphs: [
      "Person Standing (🧍) shows gender-neutral upright figure — Unicode pose for neutral idle state.",
      "Queue venting and airport waiting posts use 🧍 — nowhere to sit energy.",
      "Meme format: three 🧍 in row — awkward idle NPC crowd.",
    ],
    textingMeaning: "'Waiting 🧍', 'Just standing 🧍', 'Line 🧍'.",
    socialMeaning: "Concert queue posts, DMV humor, and idle game character memes tag 🧍.",
    caution: "Low semantic weight alone — pair with context.",
    examples: [
      { context: "Queue", text: "Still 🧍" },
      { context: "Idle", text: "Doing nothing 🧍" },
      { context: "Airport", text: "Gate 🧍" },
      { context: "Meme", text: "NPC 🧍🧍🧍" },
      { context: "Contrast", text: "Not sitting 🧍" },
    ],
    contextBlocks: [
      { title: "Waiting", body: "🧍 standing in line — universal boredom symbol." },
      { title: "Vs 🧎", body: "🧎 kneeling. 🧍 upright stand." },
      { title: "Vs 🛌", body: "🛌 in bed resting. 🧍 on feet." },
    ],
    searchIntents: ["person standing emoji", "🧍 meaning", "standing emoji", "🧍 copy paste"],
    whenNotToUse: ["Alone without context — vague.", "Mocking disability — standing isn't universal ability."],
    faqs: [
      { question: "What does 🧍 mean?", answer: "Person standing — waiting, idle, upright pose." },
      { question: "🧍 vs 🚶?", answer: "🧍 static stand; 🚶 walking motion." },
    ],
  },

  "person-kneeling": {
    batchId: BATCH_ID,
    searchTitle: "Person Kneeling Emoji (🧎) Meaning: Kneel, Proposal, and Protest",
    snippetAnswer:
      "🧎 Person Kneeling marks kneeling — marriage proposal pose, prayer, gardening, and solidarity kneel protest references.",
    detailedParagraphs: [
      "Person Kneeling (🧎) shows gender-neutral figure on one or both knees — Unicode pose symbol.",
      "Proposal stories sometimes open with 🧎 — ring reveal narrative.",
      "Sports and social justice contexts reference taking a knee 🧎 — know audience sensitivity.",
    ],
    textingMeaning: "'Proposal 🧎', 'Prayer 🧎', 'Garden 🧎'.",
    socialMeaning: "Engagement posts, yoga kneeling pose, and protest solidarity threads use 🧎.",
    caution: "Protest kneel carries political weight — don't trivialize.",
    examples: [
      { context: "Proposal", text: "She said yes 🧎" },
      { context: "Garden", text: "Weeding 🧎" },
      { context: "Prayer", text: "Kneel 🧎" },
      { context: "Yoga", text: "Low lunge 🧎" },
      { context: "Solidarity", text: "Take a knee 🧎" },
    ],
    contextBlocks: [
      { title: "Proposal", body: "🧎 classic one-knee ring ask — engagement content." },
      { title: "Vs 🧍", body: "🧍 standing. 🧎 knees down." },
      { title: "Protest", body: "Taking a knee 🧎 — Colin Kaepernick-era symbolism persists." },
    ],
    searchIntents: ["person kneeling emoji", "🧎 meaning", "kneeling emoji", "🧎 copy paste"],
    whenNotToUse: ["Mocking protest kneel.", "Forced religious imagery on others."],
    faqs: [
      { question: "What does 🧎 mean?", answer: "Person kneeling — proposal, prayer, gardening, protest kneel." },
      { question: "🧎 proposal?", answer: "Common shorthand for one-knee marriage ask stories." },
    ],
  },

  "person-getting-massage": {
    batchId: BATCH_ID,
    searchTitle: "Person Getting Massage Emoji (💆) Meaning: Spa, Tension, and Self-Care",
    snippetAnswer:
      "💆 Person Getting Massage marks spa and relief — massage appointment, headache tension, self-care Sunday, and 'rub my shoulders' jokes.",
    detailedParagraphs: [
      "Person Getting Massage (💆) shows figure receiving head/shoulder massage — Unicode wellness symbol.",
      "Spa day carousel posts lead 🧖‍♀️💆 — facial and massage combo.",
      "Stress vent 'need a 💆' — universal desk-job neck pain.",
    ],
    textingMeaning: "'Spa day 💆', 'So tense 💆', 'Massage booked 💆'.",
    socialMeaning: "Self-care TikTok, couples massage gifts, and headache memes tag 💆.",
    caution: "Keep wellness context — avoid unsolicited body comments.",
    examples: [
      { context: "Spa", text: "Booked 💆" },
      { context: "Stress", text: "Need 💆" },
      { context: "Gift", text: "Couples 💆" },
      { context: "Headache", text: "Temples 💆" },
      { context: "Sunday", text: "Self-care 💆" },
    ],
    contextBlocks: [
      { title: "Self-care", body: "💆 massage as reward — burnout recovery ritual." },
      { title: "Vs 🧖", body: "🧖 steamy room/sauna. 💆 hands-on massage." },
      { title: "Neutral form", body: "💆 person-* — gendered variants same spa meaning." },
    ],
    searchIntents: ["person getting massage emoji", "💆 meaning", "massage emoji", "💆 copy paste"],
    whenNotToUse: ["Sexualizing massage context.", "Unsolicited body commentary."],
    faqs: [
      { question: "What does 💆 mean?", answer: "Person getting massage — spa, tension relief, self-care." },
      { question: "💆 spa day?", answer: "Standard tag for massage and wellness appointments." },
    ],
  },

  "person-getting-haircut": {
    batchId: BATCH_ID,
    searchTitle: "Person Getting Haircut Emoji (💇) Meaning: Haircut, Salon, and New Look",
    snippetAnswer:
      "💇 Person Getting Haircut marks salon visits — fresh cut reveal, bangs regret, barber appointment, and 'big chop' transformation posts.",
    detailedParagraphs: [
      "Person Getting Haircut (💇) shows figure in salon chair — Unicode grooming symbol.",
      "Before/after hair transformation threads start 💇 — glow-up narrative.",
      "Post-breakup chop memes tag 💇 — emotional haircut trope.",
    ],
    textingMeaning: "'New cut 💇', 'Salon 💇', 'Bang regret 💇'.",
    socialMeaning: "Barber reel transitions, curly-hair routine, and makeover TikTok use 💇.",
    caution: "Hair texture comments can be microaggressions — celebrate without policing.",
    examples: [
      { context: "Reveal", text: "Fresh 💇" },
      { context: "Salon", text: "Appointment 💇" },
      { context: "Regret", text: "Bangs 💇" },
      { context: "Barber", text: "Fade 💇" },
      { context: "Chop", text: "Big 💇" },
    ],
    contextBlocks: [
      { title: "Glow-up", body: "💇 haircut as transformation — before/after staple." },
      { title: "Vs ✂️", body: "✂️ scissors tool. 💇 person in chair getting cut." },
      { title: "Emotional chop", body: "Breakup haircut 💇 — cultural meme of reinvention." },
    ],
    searchIntents: ["person getting haircut emoji", "💇 meaning", "haircut emoji", "💇 copy paste"],
    whenNotToUse: ["Mocking natural hair or protective styles.", "Unsolicited appearance critique."],
    faqs: [
      { question: "What does 💇 mean?", answer: "Person getting haircut — salon, new look, barber, transformation." },
      { question: "💇 big chop?", answer: "Tag for dramatic length change or curly-hair reset." },
    ],
  },

  "person-climbing": {
    batchId: BATCH_ID,
    searchTitle: "Person Climbing Emoji (🧗) Meaning: Rock Climbing, Bouldering, and Ascent",
    snippetAnswer:
      "🧗 Person Climbing marks rock climbing and bouldering — gym send posts, outdoor crag photos, metaphorical 'climbing the ladder', and obstacle overcome.",
    detailedParagraphs: [
      "Person Climbing (🧗) shows figure on vertical surface — Unicode sport/adventure symbol.",
      "Indoor bouldering gym check-ins tag 🧗 — chalk and crash pad culture.",
      "Career metaphor 'still climbing 🧗' — corporate ladder idiom.",
    ],
    textingMeaning: "'Sent it 🧗', 'Crag day 🧗', 'Climbing ranks 🧗'.",
    socialMeaning: "Climbing Instagram, Alex Honnold fandom, and hustle memes use 🧗.",
    caution: "Outdoor climbing posts should respect leave-no-trace — emoji doesn't imply skill level.",
    examples: [
      { context: "Gym", text: "V4 🧗" },
      { context: "Outdoor", text: "Crag 🧗" },
      { context: "Metaphor", text: "Ladder 🧗" },
      { context: "Fail", text: "Slipped 🧗" },
      { context: "Goal", text: "Summit 🧗" },
    ],
    contextBlocks: [
      { title: "Bouldering", body: "🧗 indoor gym culture — problems, grades, flappers." },
      { title: "Vs ⛰️", body: "⛰️ mountain scenery. 🧗 human on wall." },
      { title: "Metaphor", body: "'Climbing the ladder' 🧗 — career advancement idiom." },
    ],
    searchIntents: ["person climbing emoji", "🧗 meaning", "rock climbing emoji", "🧗 copy paste"],
    whenNotToUse: ["Mocking fear of heights.", "Claiming expert status you don't have."],
    faqs: [
      { question: "What does 🧗 mean?", answer: "Person climbing — bouldering, rock climb, career ascent metaphor." },
      { question: "🧗 bouldering?", answer: "Standard tag for gym and outdoor climbing posts." },
    ],
  },

  "person-in-steamy-room": {
    batchId: BATCH_ID,
    searchTitle: "Person in Steamy Room Emoji (🧖) Meaning: Sauna, Spa, and Steam",
    snippetAnswer:
      "🧖 Person in Steamy Room marks sauna and steam — spa day, onsen trip, hot towel relaxation, and post-workout steam room recovery.",
    detailedParagraphs: [
      "Person in Steamy Room (🧖) shows figure wrapped in towel amid steam — Unicode wellness symbol.",
      "Japanese onsen travel posts pair 🧖♨️ — bathing culture content.",
      "Gym steam room brag 🧖 — leg day recovery flex.",
    ],
    textingMeaning: "'Sauna 🧖', 'Onsen 🧖', 'Steam 🧖'.",
    socialMeaning: "Luxury spa reels, Nordic sauna culture, and bathhouse tourism tag 🧖.",
    caution: "Cultural bathing norms vary — onsen has etiquette rules beyond emoji.",
    examples: [
      { context: "Spa", text: "Day 🧖" },
      { context: "Onsen", text: "Japan 🧖" },
      { context: "Gym", text: "Steam 🧖" },
      { context: "Relax", text: "Unwind 🧖" },
      { context: "Hotel", text: "Spa access 🧖" },
    ],
    contextBlocks: [
      { title: "Onsen", body: "🧖 Japanese hot spring bathing — travel bucket list." },
      { title: "Vs ♨️", body: "♨️ hot springs symbol. 🧖 person in steam." },
      { title: "Vs 💆", body: "💆 massage hands. 🧖 steam room wrap." },
    ],
    searchIntents: ["person in steamy room emoji", "🧖 meaning", "sauna emoji", "🧖 copy paste"],
    whenNotToUse: ["Stereotyping bathing cultures.", "Sexualizing spa context."],
    faqs: [
      { question: "What does 🧖 mean?", answer: "Person in steamy room — sauna, spa, onsen, steam recovery." },
      { question: "🧖 vs ♨️?", answer: "🧖 human in steam; ♨️ hot springs icon." },
    ],
  },

  "person-taking-bath": {
    batchId: BATCH_ID,
    searchTitle: "Person Taking Bath Emoji (🛀) Meaning: Bath, Relax, and Tub",
    snippetAnswer:
      "🛀 Person Taking Bath marks bath time — bubble bath self-care, kid bedtime routine, sick-day soak, and 'need a long bath' unwind posts.",
    detailedParagraphs: [
      "Person Taking Bath (🛀) shows figure in bathtub — Unicode domestic relaxation symbol.",
      "Candle and wine bath aesthetic posts center 🛀 — Instagram self-care trope.",
      "Parent threads: toddler bath chaos vs peaceful 🛀 — relatable contrast.",
    ],
    textingMeaning: "'Long bath 🛀', 'Bubbles 🛀', 'Soak 🛀'.",
    socialMeaning: "Self-care Sunday, bath bomb reviews, and sick-day recovery use 🛀.",
    caution: "Child safety around water — don't glamorize unsupervised bath for kids.",
    examples: [
      { context: "Self-care", text: "Candles 🛀" },
      { context: "Sick", text: "Epsom 🛀" },
      { context: "Bedtime", text: "Kids 🛀" },
      { context: "Relax", text: "Hours 🛀" },
      { context: "Bomb", text: "Lush 🛀" },
    ],
    contextBlocks: [
      { title: "Self-care", body: "🛀 bath as reset — burnout recovery ritual." },
      { title: "Vs 🚿", body: "🚿 shower quick. 🛀 soak in tub." },
      { title: "Vs 🧖", body: "🧖 steam room. 🛀 home bathtub." },
    ],
    searchIntents: ["person taking bath emoji", "🛀 meaning", "bath emoji", "🛀 copy paste"],
    whenNotToUse: ["Sexualizing bath posts.", "Unsafe child bath content."],
    faqs: [
      { question: "What does 🛀 mean?", answer: "Person taking bath — bubble bath, soak, self-care, bedtime." },
      { question: "🛀 self-care?", answer: "Classic tag for relaxing tub soak content." },
    ],
  },

  "person-in-bed": {
    batchId: BATCH_ID,
    searchTitle: "Person in Bed Emoji (🛌) Meaning: Sleep, Sick Day, and Bed Rest",
    snippetAnswer:
      "🛌 Person in Bed marks sleep and bed rest — sick day off work, lazy morning, insomnia vent, and 'staying in bed all day' mood.",
    detailedParagraphs: [
      "Person in Bed (🛌) shows figure under covers — Unicode rest and illness symbol.",
      "Flu season posts lead 🛌🤒 — calling in sick narrative.",
      "Depression and burnout 'can't leave bed 🛌' — serious when literal, meme when hyperbolic.",
    ],
    textingMeaning: "'Sick day 🛌', 'Not getting up 🛌', 'Nap 🛌'.",
    socialMeaning: "Mental health bed rot discourse, cozy morning threads, and flu season use 🛌.",
    caution: "Mental health bed-bound posts need empathy — don't mock.",
    examples: [
      { context: "Sick", text: "Flu 🛌" },
      { context: "Lazy", text: "All day 🛌" },
      { context: "Sleep", text: "10 hours 🛌" },
      { context: "Burnout", text: "Can't 🛌" },
      { context: "Cozy", text: "Rain 🛌" },
    ],
    contextBlocks: [
      { title: "Sick day", body: "🛌 bed rest — work excuse and recovery." },
      { title: "Vs 😴", body: "😴 sleeping face. 🛌 person under duvet." },
      { title: "Vs 🧍", body: "🧍 standing. 🛌 horizontal rest." },
    ],
    searchIntents: ["person in bed emoji", "🛌 meaning", "bed emoji", "🛌 copy paste"],
    whenNotToUse: ["Mocking depression or chronic illness.", "Romanticizing unhealthy sleep habits."],
    faqs: [
      { question: "What does 🛌 mean?", answer: "Person in bed — sleep, sick day, bed rest, lazy morning." },
      { question: "🛌 sick day?", answer: "Common shorthand for too ill to leave bed." },
    ],
  },

  "person-fencing": {
    batchId: BATCH_ID,
    searchTitle: "Person Fencing Emoji (🤺) Meaning: Fencing, Sword Sport, and Duel",
    snippetAnswer:
      "🤺 Person Fencing marks Olympic fencing — épée foil sabre, sword fight memes, 'en garde' banter, and metaphorical verbal duels.",
    detailedParagraphs: [
      "Person Fencing (🤺) shows fencer in mask with foil — Unicode niche sport symbol.",
      "Olympics cycle revives 🤺 — niche sport mainstream moment.",
      "Debate thread 'verbal fencing 🤺' — intellectual spar metaphor.",
    ],
    textingMeaning: "'En garde 🤺', 'Fencing club 🤺', 'Parry 🤺'.",
    socialMeaning: "Olympic sport posts, historical duel aesthetics, and argument memes tag 🤺.",
    caution: "Don't confuse with medieval sword emoji ⚔️ — modern sport context.",
    examples: [
      { context: "Olympics", text: "Gold 🤺" },
      { context: "Club", text: "Practice 🤺" },
      { context: "Debate", text: "Verbal 🤺" },
      { context: "Meme", text: "En garde 🤺" },
      { context: "Parry", text: "Riposte 🤺" },
    ],
    contextBlocks: [
      { title: "Olympic sport", body: "🤺 fencing — mask, lame, piste terminology." },
      { title: "Vs ⚔️", body: "⚔️ crossed swords battle. 🤺 modern sport fencer." },
      { title: "Metaphor", body: "Verbal fencing 🤺 — witty argument exchange." },
    ],
    searchIntents: ["person fencing emoji", "🤺 meaning", "fencing emoji", "🤺 copy paste"],
    whenNotToUse: ["Glorifying real violence.", "Confusing with LARP battle posts."],
    faqs: [
      { question: "What does 🤺 mean?", answer: "Person fencing — Olympic sword sport, en garde, debate metaphor." },
      { question: "🤺 en garde?", answer: "French fencing command — ready to fight, used in banter." },
    ],
  },

  "person-golfing": {
    batchId: BATCH_ID,
    searchTitle: "Person Golfing Emoji (🏌️) Meaning: Golf, Tee Time, and Country Club",
    snippetAnswer:
      "🏌️ Person Golfing marks golf — tee time plans, PGA tour posts, business golf culture, and 'golf clap' sarcastic applause.",
    detailedParagraphs: [
      "Person Golfing (🏌️) shows figure mid-swing — Unicode sport/leisure symbol.",
      "Weekend tee time group chats open 🏌️ — country club and public course alike.",
      "'Golf clap 👏🏌️' — slow sarcastic applause meme origin.",
    ],
    textingMeaning: "'Tee time 🏌️', 'Fore 🏌️', '18 holes 🏌️'.",
    socialMeaning: "PGA Twitter, corporate outing posts, and retirement hobby content use 🏌️.",
    caution: "Golf elitism stereotypes exist — context varies by audience.",
    examples: [
      { context: "Weekend", text: "Tee 🏌️" },
      { context: "PGA", text: "Masters 🏌️" },
      { context: "Business", text: "Client 🏌️" },
      { context: "Clap", text: "Golf clap 🏌️" },
      { context: "Retire", text: "New hobby 🏌️" },
    ],
    contextBlocks: [
      { title: "Tee time", body: "🏌️ golf outing — early morning weekend ritual." },
      { title: "Vs ⛳", body: "⛳ flag in hole. 🏌️ person swinging club." },
      { title: "Golf clap", body: "Slow polite 👏 — sarcasm when paired with 🏌️." },
    ],
    searchIntents: ["person golfing emoji", "🏌️ meaning", "golf emoji", "🏌️ copy paste"],
    whenNotToUse: ["Mocking beginners learning the sport.", "Stereotyping all golfers as elite."],
    faqs: [
      { question: "What does 🏌️ mean?", answer: "Person golfing — tee time, PGA, country club, golf clap." },
      { question: "🏌️ vs ⛳?", answer: "🏌️ golfer swinging; ⛳ hole with flag." },
    ],
  },

  "person-surfing": {
    batchId: BATCH_ID,
    searchTitle: "Person Surfing Emoji (🏄) Meaning: Surf, Waves, and Beach",
    snippetAnswer:
      "🏄 Person Surfing marks surfing — wave riding, beach lifestyle, 'surf the web' pun, and California/Hawaii culture aesthetic.",
    detailedParagraphs: [
      "Person Surfing (🏄) shows figure on surfboard — Unicode ocean sport symbol.",
      "Dawn patrol and barrel photos caption 🏄 — surf Instagram language.",
      "Tech pun 'surf the net 🏄' — dated but still appears in copy.",
    ],
    textingMeaning: "'Surf's up 🏄', 'Barrel 🏄', 'Beach day 🏄'.",
    socialMeaning: "Surf film festivals, wetsuit season, and coastal travel reels tag 🏄.",
    caution: "Respect localism and ocean safety — emoji doesn't mean expert.",
    examples: [
      { context: "Waves", text: "Barrel 🏄" },
      { context: "Travel", text: "Bali 🏄" },
      { context: "Morning", text: "Dawn 🏄" },
      { context: "Learn", text: "First stand 🏄" },
      { context: "Pun", text: "Surf web 🏄" },
    ],
    contextBlocks: [
      { title: "Surf culture", body: "🏄 board, wetsuit, lineup — coastal lifestyle." },
      { title: "Vs 🌊", body: "🌊 water wave. 🏄 human riding it." },
      { title: "Tech pun", body: "'Surf the internet' 🏄 — 90s idiom persists." },
    ],
    searchIntents: ["person surfing emoji", "🏄 meaning", "surfing emoji", "🏄 copy paste"],
    whenNotToUse: ["Mocking learner wipeouts cruelly.", "Ignoring ocean danger in safety threads."],
    faqs: [
      { question: "What does 🏄 mean?", answer: "Person surfing — waves, beach lifestyle, surf trip." },
      { question: "🏄 surf's up?", answer: "Classic phrase — good waves, let's go surfing." },
    ],
  },

  "person-rowing-boat": {
    batchId: BATCH_ID,
    searchTitle: "Person Rowing Boat Emoji (🚣) Meaning: Rowing, Crew, and Paddle",
    snippetAnswer:
      "🚣 Person Rowing Boat marks rowing — crew team, kayak trip, 'row your own boat' independence, and calm lake paddling content.",
    detailedParagraphs: [
      "Person Rowing Boat (🚣) shows figure with oars in small boat — Unicode water activity symbol.",
      "Oxford-Cambridge boat race fans post 🚣 — collegiate rowing culture.",
      "Solo kayak adventure reels tag 🚣 — outdoor travel niche.",
    ],
    textingMeaning: "'Rowing 🚣', 'Crew practice 🚣', 'Kayak 🚣'.",
    socialMeaning: "Regatta season, lake vacation posts, and metaphor 'in same boat 🚣' use this emoji.",
    caution: "Life jacket safety on water — emoji doesn't imply safety gear.",
    examples: [
      { context: "Crew", text: "Regatta 🚣" },
      { context: "Lake", text: "Paddle 🚣" },
      { context: "Metaphor", text: "Same boat 🚣" },
      { context: "Solo", text: "Kayak 🚣" },
      { context: "Morning", text: "Calm water 🚣" },
    ],
    contextBlocks: [
      { title: "Crew team", body: "🚣 collegiate rowing — regatta, coxswain, erg." },
      { title: "Vs ⛵", body: "⛵ sailboat wind. 🚣 oar-powered small boat." },
      { title: "Idiom", body: "'In the same boat' 🚣 — shared situation metaphor." },
    ],
    searchIntents: ["person rowing boat emoji", "🚣 meaning", "rowing emoji", "🚣 copy paste"],
    whenNotToUse: ["Ignoring water safety advice.", "Confusing with 🛶 canoe variant contexts."],
    faqs: [
      { question: "What does 🚣 mean?", answer: "Person rowing boat — crew, kayak, lake paddle, same boat idiom." },
      { question: "🚣 crew?", answer: "Tag for collegiate rowing and regatta content." },
    ],
  },

  "person-bouncing-ball": {
    batchId: BATCH_ID,
    searchTitle: "Person Bouncing Ball Emoji (⛹️) Meaning: Basketball, Dribble, and Pickup Game",
    snippetAnswer:
      "⛹️ Person Bouncing Ball marks basketball and ball dribbling — pickup game, NBA fandom, gym shootaround, and generic ball sport.",
    detailedParagraphs: [
      "Person Bouncing Ball (⛹️) shows figure dribbling ball — Unicode basketball-adjacent sport symbol.",
      "March Madness and NBA playoffs spike ⛹️ — bracket season content.",
      "Generic 'ball is life ⛹️' — youth sports and hoop culture.",
    ],
    textingMeaning: "'Pickup 🏀⛹️', 'Gym 🛹⛹️', 'Bracket 🛹⛹️'.",
    socialMeaning: "Hoops Twitter, youth league proud parent posts, and gym rat content tag ⛹️.",
    caution: "Sport not limited to basketball in all platforms — context usually hoops.",
    examples: [
      { context: "Pickup", text: "Run 🏀⛹️" },
      { context: "NBA", text: "Playoffs ⛹️" },
      { context: "Gym", text: "Shootaround ⛹️" },
      { context: "Kids", text: "League ⛹️" },
      { context: "Bracket", text: "Madness ⛹️" },
    ],
    contextBlocks: [
      { title: "Basketball", body: "⛹️ dribbling figure — hoops primary association." },
      { title: "Vs 🏀", body: "🏀 ball object. ⛹️ person playing with ball." },
      { title: "Vs 🤾", body: "🤾 handball player. ⛹️ bounce dribble pose." },
    ],
    searchIntents: ["person bouncing ball emoji", "⛹️ meaning", "basketball player emoji", "⛹️ copy paste"],
    whenNotToUse: ["Trash talk escalating to harassment.", "Mocking youth sports kids."],
    faqs: [
      { question: "What does ⛹️ mean?", answer: "Person bouncing ball — basketball, dribble, pickup game, NBA." },
      { question: "⛹️ basketball?", answer: "Primary use — dribbling player for hoops content." },
    ],
  },

  "person-juggling": {
    batchId: BATCH_ID,
    searchTitle: "Person Juggling Emoji (🤹) Meaning: Juggling, Multitask, and Circus",
    snippetAnswer:
      "🤹 Person Juggling marks juggling and multitasking — circus performer, 'juggling too many tasks', side hustle overload, and skill showoff.",
    detailedParagraphs: [
      "Person Juggling (🤹) shows figure tossing multiple objects — Unicode circus and metaphor symbol.",
      "Burnout posts 'juggling everything 🤹' — work-life overload vent.",
      "Street performer and circus arts communities tag 🤹 — skill appreciation.",
    ],
    textingMeaning: "'Too much 🤹', 'Circus 🤹', 'Multitask 🤹'.",
    socialMeaning: "Side hustle culture, parent multitask humor, and circus fest promos use 🤹.",
    caution: "Overload memes can mask real burnout — check tone.",
    examples: [
      { context: "Work", text: "Three jobs 🤹" },
      { context: "Parent", text: "Kids + work 🤹" },
      { context: "Circus", text: "Skills 🤹" },
      { context: "Overload", text: "Can't 🤹" },
      { context: "Show", text: "Street 🤹" },
    ],
    contextBlocks: [
      { title: "Multitask", body: "🤹 juggling tasks — too many balls in air metaphor." },
      { title: "Vs 🎪", body: "🎪 circus tent. 🤹 juggler performing." },
      { title: "Burnout", body: "'Juggling it all' 🤹 — sympathetic overload vent." },
    ],
    searchIntents: ["person juggling emoji", "🤹 meaning", "juggling emoji", "🤹 copy paste"],
    whenNotToUse: ["Dismissing real burnout as funny.", "Mocking circus performers."],
    faqs: [
      { question: "What does 🤹 mean?", answer: "Person juggling — circus skill, multitasking, overload metaphor." },
      { question: "🤹 multitask?", answer: "Metaphor for handling many responsibilities at once." },
    ],
  },

  "people-wrestling": {
    batchId: BATCH_ID,
    searchTitle: "People Wrestling Emoji (🤼) Meaning: Wrestling, Grapple, and Debate",
    snippetAnswer:
      "🤼 People Wrestling marks wrestling sport — WWE fandom blur, amateur mat wrestling, sibling roughhousing joke, and heated debate metaphor.",
    detailedParagraphs: [
      "People Wrestling (🤼) shows two figures grappling — Unicode combat sport symbol.",
      "Olympic and collegiate wrestling communities use 🤼 — distinct from entertainment WWE.",
      "Twitter debate 'they're wrestling 🤼' — argument heat metaphor.",
    ],
    textingMeaning: "'Mat 🤼', 'WWE 🤼', 'Arguing 🤼'.",
    socialMeaning: "Wrestling meet results, WWE pay-per-view live tweets, and sibling fight memes tag 🤼.",
    caution: "WWE is scripted entertainment — don't confuse with amateur/Olympic wrestling athletes.",
    examples: [
      { context: "Sport", text: "Pin 🤼" },
      { context: "WWE", text: "PPV 🤼" },
      { context: "Siblings", text: "Stop 🤼" },
      { context: "Debate", text: "Threads 🤼" },
      { context: "Gym", text: "Practice 🤼" },
    ],
    contextBlocks: [
      { title: "Olympic sport", body: "🤼 amateur wrestling — weight class, mat, takedown." },
      { title: "Vs 🥊", body: "🥊 boxing gloves fight. 🤼 grappling hold." },
      { title: "WWE blur", body: "Entertainment wrestling fans also use 🤼 — know audience." },
    ],
    searchIntents: ["people wrestling emoji", "🤼 meaning", "wrestling emoji", "🤼 copy paste"],
    whenNotToUse: ["Mocking legitimate wrestlers.", "Encouraging real violence."],
    faqs: [
      { question: "What does 🤼 mean?", answer: "People wrestling — mat sport, WWE fandom, grapple debate metaphor." },
      { question: "🤼 WWE?", answer: "Fans use it though Olympic wrestling is the literal sport depiction." },
    ],
  },

  supervillain: {
    batchId: BATCH_ID,
    searchTitle: "Supervillain Emoji (🦹) Meaning: Villain, Anti-Hero, and Chaos",
    snippetAnswer:
      "🦹 Supervillain marks villains and chaotic energy — Marvel/DC antagonists, 'main character villain arc', Halloween costume, and playful menace.",
    detailedParagraphs: [
      "Supervillain (🦹) shows caped figure in villain pose — Unicode fantasy role symbol.",
      "Villain arc memes declare 🦹 — self-aware bad behavior joke.",
      "Cosplay and comic con posts tag 🦹 — Loki, Joker, Thanos energy.",
    ],
    textingMeaning: "'Villain arc 🦹', 'Evil plan 🦹', 'Cosplay 🦹'.",
    socialMeaning: "MCU villain hype, Halloween antagonist costumes, and chaotic friend group humor use 🦹.",
    caution: "'Villain arc' jokes trivialize real harm — read room.",
    examples: [
      { context: "Arc", text: "Villain 🦹" },
      { context: "Comic", text: "Loki 🦹" },
      { context: "Halloween", text: "Joker 🦹" },
      { context: "Plan", text: "Evil 🦹" },
      { context: "Chaos", text: "Menace 🦹" },
    ],
    contextBlocks: [
      { title: "Villain arc", body: "🦹 embracing bad choices — TikTok self-aware meme." },
      { title: "Vs 🦸", body: "🦸 superhero. 🦹 supervillain counterpart." },
      { title: "Neutral form", body: "🦹 person-* base — gendered variants same villain role." },
    ],
    searchIntents: ["supervillain emoji", "🦹 meaning", "villain emoji", "🦹 copy paste"],
    whenNotToUse: ["Glorifying real criminals.", "Serious abuse situations."],
    faqs: [
      { question: "What does 🦹 mean?", answer: "Supervillain — comic antagonist, villain arc meme, cosplay." },
      { question: "🦹 villain arc?", answer: "Meme for entering self-destructive or chaotic life phase." },
    ],
  },

  mage: {
    batchId: BATCH_ID,
    searchTitle: "Mage Emoji (🧙) Meaning: Wizard, Magic, and Fantasy",
    snippetAnswer:
      "🧙 Mage marks wizards and magic — D&D campaigns, Harry Potter fandom, 'work your magic', and fantasy RPG class posts.",
    detailedParagraphs: [
      "Mage (🧙) shows robed figure with staff — Unicode fantasy spellcaster symbol.",
      "TTRPG character sheets and session recaps lead 🧙 — wizard class iconic.",
      "'Be our guest 🧙' magic fix — helpful expert friend metaphor.",
    ],
    textingMeaning: "'Wizard 🧙', 'D&D 🧙', 'Magic 🧙'.",
    socialMeaning: "Fantasy book clubs, RPG Twitch streams, and tech 'it works like magic 🧙' use this emoji.",
    caution: "🧙 and 🧙‍♂️/♀️ share role — gender variants cosmetic.",
    examples: [
      { context: "D&D", text: "Cast 🧙" },
      { context: "HP", text: "Hogwarts 🧙" },
      { context: "Fix", text: "Work magic 🧙" },
      { context: "RPG", text: "Level 5 🧙" },
      { context: "Costume", text: "Robe 🧙" },
    ],
    contextBlocks: [
      { title: "D&D", body: "🧙 wizard class — fireball, spell slots, robe." },
      { title: "Vs 🪄", body: "🪄 magic wand tool. 🧙 spellcaster person." },
      { title: "Vs 🧝", body: "🧝 elf race. 🧙 mage profession/class." },
    ],
    searchIntents: ["mage emoji", "🧙 meaning", "wizard emoji", "🧙 copy paste"],
    whenNotToUse: ["Cultural appropriation of sacred traditions as costume.", "Mocking TTRPG players."],
    faqs: [
      { question: "What does 🧙 mean?", answer: "Mage — wizard, D&D, fantasy magic, work your magic idiom." },
      { question: "🧙 vs 🪄?", answer: "🧙 spellcaster character; 🪄 wand prop." },
    ],
  },

  zombie: {
    batchId: BATCH_ID,
    searchTitle: "Zombie Emoji (🧟) Meaning: Zombie, Undead, and Exhaustion",
    snippetAnswer:
      "🧟 Zombie marks undead horror — Halloween, The Walking Dead fandom, 'feeling like a zombie' exhaustion, and zombie walk events.",
    detailedParagraphs: [
      "Zombie (🧟) shows undead figure — Unicode horror/fantasy symbol.",
      "Monday morning 'zombie mode 🧟' — coffee before human conversation.",
      "Horror movie marathon threads and zombie run races tag 🧟.",
    ],
    textingMeaning: "'Undead 🧟', 'Tired 🧟', 'Horror 🧟'.",
    socialMeaning: "Halloween costume, apocalypse fiction fandom, and burnout zombie memes use 🧟.",
    caution: "Exhaustion humor fine; mental health crises need seriousness.",
    examples: [
      { context: "Tired", text: "Monday 🧟" },
      { context: "Halloween", text: "Costume 🧟" },
      { context: "Horror", text: "Marathon 🧟" },
      { context: "Run", text: "Zombie 5K 🧟" },
      { context: "Apocalypse", text: "Survival 🧟" },
    ],
    contextBlocks: [
      { title: "Exhaustion", body: "🧟 'running on zombie mode' — no sleep, no energy." },
      { title: "Vs 🧛", body: "🧛 vampire undead. 🧟 shambling corpse." },
      { title: "Horror", body: "🧟 Walking Dead era — undead pop culture staple." },
    ],
    searchIntents: ["zombie emoji", "🧟 meaning", "undead emoji", "🧟 copy paste"],
    whenNotToUse: ["Mocking chronic fatigue sufferers.", "Real disaster/apocalypse insensitivity."],
    faqs: [
      { question: "What does 🧟 mean?", answer: "Zombie — undead horror, Halloween, exhaustion meme." },
      { question: "🧟 tired?", answer: "Metaphor for functioning without rest — zombie mode." },
    ],
  },

  merperson: {
    batchId: BATCH_ID,
    searchTitle: "Merperson Emoji (🧜) Meaning: Mermaid/Merman, Ocean, and Fantasy",
    snippetAnswer:
      "🧜 Merperson marks mermaid and merman — ocean aesthetic, Little Mermaid fandom, gender-neutral merfolk, and beach fantasy cosplay.",
    detailedParagraphs: [
      "Merperson (🧜) shows human with fish tail — Unicode neutral merfolk symbol.",
      "Oceancore and siren aesthetic Pinterest boards center 🧜 — teal and shell motifs.",
      "Inclusive merfolk beyond 🧜‍♀️/♂️ — neutral form for nonbinary mer content.",
    ],
    textingMeaning: "'Merfolk 🧜', 'Ocean 🧜', 'Siren 🧜'.",
    socialMeaning: "Mermaid cosplay, aquarium visits, and fantasy romance readers tag 🧜.",
    caution: "🧜‍♀️ mermaid more common in search — neutral form same meaning.",
    examples: [
      { context: "Ocean", text: "Vibes 🧜" },
      { context: "Cosplay", text: "Tail 🧜" },
      { context: "Disney", text: "Ariel 🧜" },
      { context: "Beach", text: "Fantasy 🧜" },
      { context: "NB", text: "Mer 🧜" },
    ],
    contextBlocks: [
      { title: "Neutral mer", body: "🧜 merperson — gender-inclusive merfolk base form." },
      { title: "Vs 🧜‍♀️", body: "🧜‍♀️ mermaid woman. 🧜 neutral merperson." },
      { title: "Vs 🐚", body: "🐚 shell ocean. 🧜 human-fish fantasy being." },
    ],
    searchIntents: ["merperson emoji", "🧜 meaning", "mermaid emoji neutral", "🧜 copy paste"],
    whenNotToUse: ["Misgendering intentional mermaid/merman posts.", "Sexualizing cosplay without consent."],
    faqs: [
      { question: "What does 🧜 mean?", answer: "Merperson — neutral mermaid/merman, ocean fantasy, cosplay." },
      { question: "🧜 vs 🧜‍♀️?", answer: "🧜 gender-neutral; gendered variants add woman/man presentation." },
    ],
  },

  "baby-angel": {
    batchId: BATCH_ID,
    searchTitle: "Baby Angel Emoji (👼) Meaning: Angel Baby, Innocence, and Memorial",
    snippetAnswer:
      "👼 Baby Angel marks cherubs and innocence — newborn congratulations, 'little angel' nickname, Christmas nativity, and pregnancy loss memorial sensitivity.",
    detailedParagraphs: [
      "Baby Angel (👼) shows winged infant head — Unicode innocence and memorial symbol.",
      "New baby announcements use 👼 cautiously — sweet but know audience.",
      "Pregnancy and infant loss communities use 👼 — handle with extreme sensitivity.",
    ],
    textingMeaning: "'Little angel 👼', 'Heaven 👼', 'Cherub 👼'.",
    socialMeaning: "Christmas cards, baptism posts, and memorial tributes may include 👼.",
    caution: "NEVER use lightly on loss threads — memorial context only when appropriate.",
    examples: [
      { context: "Newborn", text: "Angel 👼" },
      { context: "Christmas", text: "Nativity 👼" },
      { context: "Sweet", text: "Sleeping 👼" },
      { context: "Memorial", text: "Forever 👼" },
      { context: "Nickname", text: "My 👼" },
    ],
    contextBlocks: [
      { title: "Innocence", body: "👼 cherub — sleeping baby, pure, sweet." },
      { title: "Memorial", body: "👼 angel baby — loss community symbol; use only with care." },
      { title: "Vs 😇", body: "😇 smiling halo face. 👼 winged baby cherub." },
    ],
    searchIntents: ["baby angel emoji", "👼 meaning", "cherub emoji", "👼 copy paste"],
    whenNotToUse: ["Joking on pregnancy loss posts.", "Sarcastic mockery of sincere memorial."],
    faqs: [
      { question: "What does 👼 mean?", answer: "Baby angel — cherub, newborn sweet, Christmas, loss memorial." },
      { question: "👼 memorial?", answer: "Used in infant loss tributes — only with sincere sensitivity." },
    ],
  },

  "factory-worker": {
    batchId: BATCH_ID,
    searchTitle: "Factory Worker Emoji (🧑‍🏭) Meaning: Factory, Manufacturing, and Labor",
    snippetAnswer:
      "🧑‍🏭 Factory Worker marks manufacturing and labor — industrial jobs, supply chain posts, Labor Day recognition, and 'on the line' work culture.",
    detailedParagraphs: [
      "Factory Worker (🧑‍🏭) shows person with hard hat at factory — Unicode ZWJ profession symbol.",
      "Labor Day and worker appreciation threads tag 🧑‍🏭 — manufacturing backbone.",
      "Supply chain explainer posts use 🧑‍🏭 — how goods get made narrative.",
    ],
    textingMeaning: "'Night shift 🧑‍🏭', 'Line 🧑‍🏭', 'Labor Day 🧑‍🏭'.",
    socialMeaning: "Union solidarity, manufacturing reshoring news, and essential worker posts use 🧑‍🏭.",
    caution: "Respect labor — don't romanticize unsafe conditions.",
    examples: [
      { context: "Shift", text: "Night 🧑‍🏭" },
      { context: "Labor Day", text: "Thanks 🧑‍🏭" },
      { context: "Union", text: "Solidarity 🧑‍🏭" },
      { context: "Plant", text: "Tour 🧑‍🏭" },
      { context: "Supply", text: "Made here 🧑‍🏭" },
    ],
    contextBlocks: [
      { title: "Manufacturing", body: "🧑‍🏭 factory floor — assembly, shift work, hard hat." },
      { title: "Vs 👷", body: "👷 construction builder. 🧑‍🏭 factory/industrial worker." },
      { title: "Labor Day", body: "🧑‍🏭 worker appreciation — manufacturing recognition." },
    ],
    searchIntents: ["factory worker emoji", "🧑‍🏭 meaning", "manufacturing emoji", "🧑‍🏭 copy paste"],
    whenNotToUse: ["Mocking manual labor.", "Dismissing worker safety concerns."],
    faqs: [
      { question: "What does 🧑‍🏭 mean?", answer: "Factory worker — manufacturing, shift work, Labor Day, union." },
      { question: "🧑‍🏭 vs 👷?", answer: "🧑‍🏭 factory line; 👷 construction site." },
    ],
  },

  "bust-in-silhouette": {
    batchId: BATCH_ID,
    searchTitle: "Bust in Silhouette Emoji (👤) Meaning: Profile, User, and Anonymous",
    snippetAnswer:
      "👤 Bust in Silhouette marks generic person — default user avatar, anonymous identity, profile placeholder, and 'someone' unspecified reference.",
    detailedParagraphs: [
      "Bust in Silhouette (👤) shows head-and-shoulders shadow figure — Unicode generic person symbol.",
      "App default profile pic aesthetic — 👤 universal placeholder.",
      "'Ask 👤' — referring to unnamed third party in gossip.",
    ],
    textingMeaning: "'Someone 👤', 'Profile 👤', 'User 👤'.",
    socialMeaning: "UX design mockups, anonymous tip posts, and generic account icons use 👤.",
    caution: "Alone it's vague — pair with context for clarity.",
    examples: [
      { context: "Avatar", text: "Default 👤" },
      { context: "Someone", text: "Person 👤" },
      { context: "UX", text: "Placeholder 👤" },
      { context: "Gossip", text: "Ask 👤" },
      { context: "Account", text: "New 👤" },
    ],
    contextBlocks: [
      { title: "Default avatar", body: "👤 generic user — apps and forums placeholder." },
      { title: "Vs 👥", body: "👥 two busts group. 👤 single person." },
      { title: "Anonymous", body: "👤 unnamed someone — third party reference." },
    ],
    searchIntents: ["bust in silhouette emoji", "👤 meaning", "profile emoji", "👤 copy paste"],
    whenNotToUse: ["Implying surveillance without context.", "Dehumanizing specific individuals."],
    faqs: [
      { question: "What does 👤 mean?", answer: "Bust in silhouette — generic person, profile placeholder, someone." },
      { question: "👤 vs 👥?", answer: "👤 one person; 👥 two people/group." },
    ],
  },

  "person-in-suit-levitating": {
    batchId: BATCH_ID,
    searchTitle: "Person in Suit Levitating Emoji (🕴️) Meaning: Levitate, Business, and Meme",
    snippetAnswer:
      "🕴️ Person in Suit Levitating marks the iconic levitating businessman — absurdist meme, corporate surrealism, 'rising above', and niche Unicode cult favorite.",
    detailedParagraphs: [
      "Person in Suit Levitating (🕴️) shows suited figure hovering — Unicode surreal business symbol.",
      "Meme culture treats 🕴️ as cursed favorite — inexplicable energy.",
      "Promotion post 'leveling up 🕴️' — surreal corporate hustle joke.",
    ],
    textingMeaning: "'Levitating 🕴️', 'Business 🕴️', 'Cursed 🕴️'.",
    socialMeaning: "Absurdist meme pages, corporate satire, and Unicode emoji deep-cut posts tag 🕴️.",
    caution: "Obscure emoji — audience may not recognize without context.",
    examples: [
      { context: "Meme", text: "🕴️🕴️🕴️" },
      { context: "Promo", text: "Level up 🕴️" },
      { context: "Surreal", text: "Vibes 🕴️" },
      { context: "Corporate", text: "Floating 🕴️" },
      { context: "Deep cut", text: "Unicode 🕴️" },
    ],
    contextBlocks: [
      { title: "Meme status", body: "🕴️ cult emoji — inexplicable levitating suit guy." },
      { title: "Vs 🧑‍💼", body: "🧑‍💼 office worker standing. 🕴️ suit hovering." },
      { title: "Surreal", body: "Corporate absurdist humor — 🕴️ defies physics." },
    ],
    searchIntents: ["person in suit levitating emoji", "🕴️ meaning", "levitating businessman emoji", "🕴️ copy paste"],
    whenNotToUse: ["Formal business where meme tone inappropriate.", "Assuming universal recognition."],
    faqs: [
      { question: "What does 🕴️ mean?", answer: "Person in suit levitating — absurdist meme, corporate surrealism." },
      { question: "Why is 🕴️ popular?", answer: "Cult favorite for inexplicable energy — Unicode deep-cut meme." },
    ],
  },
};
