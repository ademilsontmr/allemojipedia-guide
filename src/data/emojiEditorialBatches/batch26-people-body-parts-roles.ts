import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "26-people-body-parts-roles";

/** Batch 26 P1 — body parts, professions, fantasy (People & Body). */
export const batch26PeopleBodyPartsRoles: Record<string, EmojiBatchEnrichment> = {
  leg: {
    batchId: BATCH_ID,
    searchTitle: "Leg Emoji (🦵) Meaning: Leg Day, Injury, and Body",
    snippetAnswer:
      "🦵 Leg marks legs and leg day — gym workouts, injury updates, shaved leg jokes, and 'break a leg' theater wishes.",
    detailedParagraphs: [
      "Leg (🦵) shows human leg — Unicode body part symbol for fitness, injury, and anatomy.",
      "Gym culture centers leg day 🦵 — squat and deadlift meme religion.",
      "Cast and crutch updates post 🦵 — broken leg solidarity.",
    ],
    textingMeaning: "'Leg day 🦵', 'Broke my 🦵', 'Break a leg 🦵'.",
    socialMeaning: "Fitness TikTok, sports injury threads, and theater good-luck posts tag 🦵.",
    caution: "Body part comments can objectify — keep fitness/injury context.",
    examples: [
      { context: "Gym", text: "Leg day 🦵" },
      { context: "Injury", text: "Crutches 🦵" },
      { context: "Theater", text: "Break a 🦵" },
      { context: "Run", text: "Sore 🦵" },
      { context: "Shave", text: "Smooth 🦵 meme" },
    ],
    contextBlocks: [
      { title: "Leg day", body: "🦵 gym meme — never skip leg day culture." },
      { title: "Vs 🦿", body: "🦿 mechanical/prosthetic leg. 🦵 natural leg." },
      { title: "Vs 🦶", body: "🦶 foot. 🦵 leg limb above ankle." },
    ],
    searchIntents: ["leg emoji", "🦵 meaning", "leg day emoji", "🦵 copy paste"],
    whenNotToUse: ["Unsolicited body commentary.", "Mocking disabilities — use 🦿 when prosthetic."],
    faqs: [
      { question: "What does 🦵 mean?", answer: "Leg — leg day, injury, anatomy, break a leg wish." },
      { question: "🦵 leg day?", answer: "Gym culture shorthand for lower body workout day." },
    ],
  },

  foot: {
    batchId: BATCH_ID,
    searchTitle: "Foot Emoji (🦶) Meaning: Feet, Podiatry, and Kick",
    snippetAnswer:
      "🦶 Foot means feet — pedicure posts, foot pain venting, 'put your foot down' assertiveness, and soccer kick memes.",
    detailedParagraphs: [
      "Foot (🦶) shows human foot — Unicode body part for podiatry, pedicure, and idioms.",
      "Runner black toenail posts warn 🦶 — marathon survivor badge.",
      "'Put your foot down 🦶' means set firm boundary — idiom in text.",
    ],
    textingMeaning: "'Pedicure 🦶', 'My feet 🦶', 'Foot down 🦶'.",
    socialMeaning: "Spa day content, hiking blister humor, and assertiveness memes use 🦶.",
    caution: "Foot fetish context exists — most uses innocent spa/sports.",
    examples: [
      { context: "Spa", text: "Pedi 🦶" },
      { context: "Hike", text: "Blisters 🦶" },
      { context: "Idiom", text: "Foot down 🦶" },
      { context: "Run", text: "Marathon 🦶" },
      { context: "Beach", text: "Sand 🦶" },
    ],
    contextBlocks: [
      { title: "Podiatry", body: "🦶 foot pain universal — runners and nurses on feet all day." },
      { title: "Vs 👣", body: "👣 footprints on ground. 🦶 foot body part." },
      { title: "Idiom", body: "'Put foot down' = assert boundary — 🦶 metaphor." },
    ],
    searchIntents: ["foot emoji", "🦶 meaning", "feet emoji", "🦶 copy paste"],
    whenNotToUse: ["Harassing foot content.", "Mocking foot conditions."],
    faqs: [
      { question: "What does 🦶 mean?", answer: "Foot — pedicure, pain, sports, put your foot down idiom." },
      { question: "🦶 vs 👣?", answer: "🦶 body part; 👣 prints left when walking." },
    ],
  },

  ear: {
    batchId: BATCH_ID,
    searchTitle: "Ear Emoji (👂) Meaning: Listening, Hearing, and Piercing",
    snippetAnswer:
      "👂 Ear marks listening and hearing — 'lend an ear', new piercing, eavesdropping memes, and audio accessibility.",
    detailedParagraphs: [
      "Ear (👂) shows human ear — Unicode body part for hearing and listening metaphors.",
      "'All ears 👂' means ready to listen — supportive friend energy.",
      "Piercing studios showcase 👂 — cartilage and lobe content.",
    ],
    textingMeaning: "'All ears 👂', 'New piercing 👂', 'Listen 👂'.",
    socialMeaning: "Podcast 'use your ears', piercing TikTok, and gossip 'ear perked' memes tag 👂.",
    caution: "Deaf/HoH community — 👂 alone doesn't represent Deaf identity; see 🧏.",
    examples: [
      { context: "Listen", text: "All ears 👂" },
      { context: "Piercing", text: "New stud 👂" },
      { context: "Gossip", text: "Heard 👂" },
      { context: "Support", text: "Talk to me 👂" },
      { context: "Podcast", text: "Tune in 👂" },
    ],
    contextBlocks: [
      { title: "Listening", body: "👂 'lend an ear' — emotional support offer." },
      { title: "Vs 🦻", body: "🦻 ear with hearing aid. 👂 natural ear." },
      { title: "Vs 👃", body: "👃 nose smell. 👂 hearing sense." },
    ],
    searchIntents: ["ear emoji", "👂 meaning", "listening emoji", "👂 copy paste"],
    whenNotToUse: ["Replacing Deaf representation — use 🧏 for signing identity."],
    faqs: [
      { question: "What does 👂 mean?", answer: "Ear — listening, hearing, piercing, all ears." },
      { question: "👂 all ears?", answer: "Idiom — ready and willing to listen carefully." },
    ],
  },

  "ear-with-hearing-aid": {
    batchId: BATCH_ID,
    searchTitle: "Ear With Hearing Aid Emoji (🦻) Meaning: Hearing Loss, Accessibility, and Aid",
    snippetAnswer:
      "🦻 Ear With Hearing Aid marks hearing aids and accessibility — audiology, Deaf/HoH community, volume up requests, and inclusive design.",
    detailedParagraphs: [
      "Ear With Hearing Aid (🦻) shows ear wearing hearing device — Unicode accessibility symbol.",
      "Audiology appointments and new aid fittings share 🦻 — life quality upgrade posts.",
      "Caption requests 'turn on CC 🦻' — advocacy for subtitles.",
    ],
    textingMeaning: "'New aids 🦻', 'Captions please 🦻', 'Audiology 🦻'.",
    socialMeaning: "Accessibility activism, hearing aid unboxing, and inclusive event promo tag 🦻.",
    caution: "Not all HoH people use aids — don't assume 🦻 for every deaf person.",
    examples: [
      { context: "New aid", text: "Fitted 🦻" },
      { context: "Access", text: "Need CC 🦻" },
      { context: "Advocacy", text: "Loop system 🦻" },
      { context: "Life", text: "Hear birds again 🦻" },
      { context: "Kids", text: "Pediatric audiology 🦻" },
    ],
    contextBlocks: [
      { title: "Accessibility", body: "🦻 represents hearing technology — inclusion in media matters." },
      { title: "Vs 👂", body: "👂 generic ear. 🦻 ear with hearing aid device." },
      { title: "Vs 🧏", body: "🧏 Deaf person signing. 🦻 hearing aid focus." },
    ],
    searchIntents: ["hearing aid emoji", "🦻 meaning", "ear with hearing aid", "🦻 copy paste"],
    whenNotToUse: ["Mocking hearing loss.", "Assuming all HoH use visible aids."],
    faqs: [
      { question: "What does 🦻 mean?", answer: "Ear with hearing aid — accessibility, audiology, captions advocacy." },
      { question: "🦻 vs 🧏?", answer: "🦻 hearing device; 🧏 Deaf signing person — different symbols." },
    ],
  },

  nose: {
    batchId: BATCH_ID,
    searchTitle: "Nose Emoji (👃) Meaning: Smell, Nosey, and Pinocchio",
    snippetAnswer:
      "👃 Nose marks smell and 'nosy' — scent posts, allergy season, mind your business memes, and Pinocchio lie jokes.",
    detailedParagraphs: [
      "Nose (👃) shows human nose — Unicode body part for smell and idioms.",
      "Allergy and cold season floods 👃 — congestion universal suffering.",
      "'Nosy 👃' means intrusive — gossip and boundary memes.",
    ],
    textingMeaning: "'Smells like 👃', 'Nosy 👃', 'Stuffy 👃'.",
    socialMeaning: "Perfume reviews, pollen misery tweets, and 'not your business' posts use 👃.",
    caution: "Ethnic nose mockery harmful — never use 👃 to insult features.",
    examples: [
      { context: "Allergy", text: "Pollen 👃" },
      { context: "Nosy", text: "Mind yours 👃" },
      { context: "Scent", text: "Smells good 👃" },
      { context: "Cold", text: "Blocked 👃" },
      { context: "Lie", text: "Pinocchio 👃" },
    ],
    contextBlocks: [
      { title: "Smell sense", body: "👃 perfume, food, smoke — scent description anchor." },
      { title: "Nosy idiom", body: "👃 in business that isn't yours — boundary meme." },
      { title: "Vs 👂", body: "👂 hear. 👃 smell — paired senses posts." },
    ],
    searchIntents: ["nose emoji", "👃 meaning", "nosy emoji", "👃 copy paste"],
    whenNotToUse: ["Racial/ethnic nose insults — never.", "Body shaming."],
    faqs: [
      { question: "What does 👃 mean?", answer: "Nose — smell, allergies, nosy, Pinocchio lie joke." },
      { question: "👃 nosy?", answer: "Slang for intrusive person — 'stay out of it'." },
    ],
  },

  lungs: {
    batchId: BATCH_ID,
    searchTitle: "Lungs Emoji (🫁) Meaning: Breathing, Respiratory Health, and COVID Era",
    snippetAnswer:
      "🫁 Lungs mark breathing and respiratory health — pulmonology, asthma, breathwork, and post-pandemic lung awareness posts.",
    detailedParagraphs: [
      "Lungs (🫁) show anatomical lungs — Unicode organ symbol for respiratory health.",
      "Asthma and COPD communities educate with 🫁 — inhaler and trigger awareness.",
      "Breathwork and meditation pair 🫁 with calm — box breathing content.",
    ],
    textingMeaning: "'Breathe 🫁', 'Lung check 🫁', 'Asthma 🫁'.",
    socialMeaning: "Health education, respiratory therapy, and mindfulness breath posts tag 🫁.",
    caution: "Medical serious — don't minimize lung disease with casual memes to affected folks.",
    examples: [
      { context: "Health", text: "X-ray clear 🫁" },
      { context: "Asthma", text: "Triggers 🫁" },
      { context: "Breath", text: "Box breathing 🫁" },
      { context: "Quit", text: "Smoke-free 🫁" },
      { context: "Med", text: "Pulmonology 🫁" },
    ],
    contextBlocks: [
      { title: "Respiratory", body: "🫁 lung health advocacy — smoking cessation, air quality." },
      { title: "Vs 🫀", body: "🫀 heart. 🫁 lungs — paired organ education." },
      { title: "Breathwork", body: "Wellness uses 🫁 for intentional breathing exercises." },
    ],
    searchIntents: ["lungs emoji", "🫁 meaning", "lung emoji", "🫁 copy paste"],
    whenNotToUse: ["COVID minimization.", "Graphic medical without warning."],
    faqs: [
      { question: "What does 🫁 mean?", answer: "Lungs — breathing, respiratory health, asthma, breathwork." },
      { question: "🫁 vs 🫀?", answer: "🫁 lungs respiratory; 🫀 heart circulatory." },
    ],
  },

  tooth: {
    batchId: BATCH_ID,
    searchTitle: "Tooth Emoji (🦷) Meaning: Dental, Tooth Fairy, and Smile",
    snippetAnswer:
      "🦷 Tooth marks dental care — dentist appointments, tooth fairy kid milestones, whitening posts, and 'sweet tooth' cravings.",
    detailedParagraphs: [
      "Tooth (🦷) shows molar tooth — Unicode symbol for dentistry and oral health.",
      "Parents photograph 🦷 under pillow — tooth fairy tradition content.",
      "Dentist fear memes open with 🦷 — drill sound trauma universal.",
    ],
    textingMeaning: "'Dentist 🦷', 'Tooth fairy 🦷', 'Sweet tooth 🦷'.",
    socialMeaning: "Dental hygiene TikTok, kid milestone posts, and candy craving tweets tag 🦷.",
    caution: "Dental anxiety real — don't mock phobia threads.",
    examples: [
      { context: "Dentist", text: "Cleaning 🦷" },
      { context: "Kid", text: "Fairy came 🦷" },
      { context: "Candy", text: "Sweet tooth 🦷" },
      { context: "Whitening", text: "Glow up 🦷" },
      { context: "Brace", text: "Ortho 🦷" },
    ],
    contextBlocks: [
      { title: "Tooth fairy", body: "🦷 kid lost first tooth — parenting milestone hashtag." },
      { title: "Vs 😁", body: "😁 smiling teeth face. 🦷 single tooth object." },
      { title: "Sweet tooth", body: "Craving dessert idiom uses 🦷 — sugar love." },
    ],
    searchIntents: ["tooth emoji", "🦷 meaning", "dental emoji", "🦷 copy paste"],
    whenNotToUse: ["Mocking dental appearance or missing teeth cruelly."],
    faqs: [
      { question: "What does 🦷 mean?", answer: "Tooth — dentist, tooth fairy, sweet tooth, oral health." },
      { question: "🦷 tooth fairy?", answer: "Common when kids lose baby teeth — tradition posts." },
    ],
  },

  bone: {
    batchId: BATCH_ID,
    searchTitle: "Bone Emoji (🦴) Meaning: Skeleton, Dog Treat, and Anatomy",
    snippetAnswer:
      "🦴 Bone marks bones and skeleton — Halloween decor, dog treat memes, anatomy class, and 'bone tired' exhaustion slang.",
    detailedParagraphs: [
      "Bone (🦴) shows femur-style bone — Unicode symbol for skeleton, pets, and anatomy.",
      "Dog owners spam 🦴 — treat time and good boy rewards.",
      "Halloween skeleton aesthetic builds on 🦴 — spooky season staple.",
    ],
    textingMeaning: "'Dog treat 🦴', 'Skeleton 🦴', 'Bone tired 🦴'.",
    socialMeaning: "Pet TikTok, Halloween crafts, and med student anatomy humor tag 🦴.",
    caution: "Real injury bones not funny to victims — context matters.",
    examples: [
      { context: "Dog", text: "Treat 🦴" },
      { context: "Halloween", text: "Decor 🦴" },
      { context: "Tired", text: "Bone tired 🦴" },
      { context: "Anatomy", text: "Lab 🦴" },
      { context: "Spooky", text: "Skelly 🦴" },
    ],
    contextBlocks: [
      { title: "Dog treat", body: "🦴 cartoon bone = dog reward in meme language." },
      { title: "Vs 💀", body: "💀 skull/death face. 🦴 single bone object." },
      { title: "Bone tired", body: "Slang exhausted to the bone — 🦴 emphasis." },
    ],
    searchIntents: ["bone emoji", "🦴 meaning", "skeleton bone emoji", "🦴 copy paste"],
    whenNotToUse: ["Real fracture humor toward injured person.", "Human remains disrespect."],
    faqs: [
      { question: "What does 🦴 mean?", answer: "Bone — dog treat, skeleton, Halloween, anatomy, bone tired." },
      { question: "🦴 dog?", answer: "Classic dog treat symbol in pet owner content." },
    ],
  },

  "mechanical-leg": {
    batchId: BATCH_ID,
    searchTitle: "Mechanical Leg Emoji (🦿) Meaning: Prosthetic, Amputee, and Mobility Tech",
    snippetAnswer:
      "🦿 Mechanical Leg marks prosthetics and mobility tech — amputee representation, Paralympics, adaptive athletes, and inclusive design.",
    detailedParagraphs: [
      "Mechanical Leg (🦿) shows prosthetic leg — Unicode symbol for amputee mobility and adaptive tech.",
      "Paralympic athletes and blade runners center 🦿 — sports representation pride.",
      "Disability advocates use 🦿 for prosthetic normalization — not pity narrative.",
    ],
    textingMeaning: "'New leg 🦿', 'Adaptive sports 🦿', 'Prosthetic 🦿'.",
    socialMeaning: "Amputee creator content, rehab milestones, and inclusive product design tag 🦿.",
    caution: "Don't inspirational-porn amputees — respect agency and full humanity.",
    examples: [
      { context: "Sport", text: "Blades 🦿" },
      { context: "Rehab", text: "Walking again 🦿" },
      { context: "Tech", text: "New socket 🦿" },
      { context: "Pride", text: "Unstoppable 🦿" },
      { context: "Design", text: "Accessible 🦿" },
    ],
    contextBlocks: [
      { title: "Prosthetics", body: "🦿 represents mechanical leg — diverse amputee experiences." },
      { title: "Vs 🦵", body: "🦵 biological leg. 🦿 prosthetic/mechanical leg." },
      { title: "Vs 🦽", body: "🦽 wheelchair mobility. 🦿 walking prosthetic — different aids." },
    ],
    searchIntents: ["mechanical leg emoji", "🦿 meaning", "prosthetic leg emoji", "🦿 copy paste"],
    whenNotToUse: ["Mocking disability.", "Fake disability jokes."],
    faqs: [
      { question: "What does 🦿 mean?", answer: "Mechanical/prosthetic leg — amputee mobility, adaptive sports." },
      { question: "🦿 representation?", answer: "Disability community uses for prosthetic pride and visibility." },
    ],
  },

  "person-feeding-baby": {
    batchId: BATCH_ID,
    searchTitle: "Person Feeding Baby Emoji (🧑‍🍼) Meaning: Parenting, Bottle, and Neutral Care",
    snippetAnswer:
      "🧑‍🍼 Person Feeding Baby marks feeding infant — bottle or nursing neutral parent, newborn life, and inclusive parenting posts.",
    detailedParagraphs: [
      "Person Feeding Baby (🧑‍🍼) shows adult feeding infant — Unicode gender-neutral parenting symbol.",
      "New parent exhaustion posts pair 🧑‍🍼 with 3am timestamp — solidarity.",
      "Inclusive parenting content prefers 🧑‍🍼 over gender-locked variants.",
    ],
    textingMeaning: "'Feeding 🧑‍🍼', '3am 🧑‍🍼', 'Newborn life 🧑‍🍼'.",
    socialMeaning: "Parenting TikTok, dad feeding normalization, and foster parent journeys tag 🧑‍🍼.",
    caution: "Fed is best — no shaming bottle vs breast with 🧑‍🍼.",
    examples: [
      { context: "Night", text: "3am feed 🧑‍🍼" },
      { context: "New", text: "Week one 🧑‍🍼" },
      { context: "Dad", text: "Bottle duty 🧑‍🍼" },
      { context: "Support", text: "You got this 🧑‍🍼" },
      { context: "Foster", text: "First night 🧑‍🍼" },
    ],
    contextBlocks: [
      { title: "Neutral parent", body: "🧑‍🍼 any caregiver feeding — inclusive family structures." },
      { title: "Vs 🤱", body: "🤱 breast-feeding specific. 🧑‍🍼 general feeding." },
      { title: "Vs 👶", body: "👶 baby alone. 🧑‍🍼 feeding act with caregiver." },
    ],
    searchIntents: ["person feeding baby emoji", "🧑‍🍼 meaning", "feeding baby emoji", "🧑‍🍼 copy paste"],
    whenNotToUse: ["Parenting judgment.", "Mocking sleep-deprived parents."],
    faqs: [
      { question: "What does 🧑‍🍼 mean?", answer: "Person feeding baby — parenting, bottle/feed, neutral caregiver." },
      { question: "🧑‍🍼 vs 🤱?", answer: "🧑‍🍼 general feed; 🤱 nursing-specific." },
    ],
  },

  "people-holding-hands": {
    batchId: BATCH_ID,
    searchTitle: "People Holding Hands Emoji (🧑‍🤝‍🧑) Meaning: Couples, Solidarity, and Connection",
    snippetAnswer:
      "🧑‍🤝‍🧑 People Holding Hands marks connection — couples, friends, pride solidarity, and 'we're in this together' posts.",
    detailedParagraphs: [
      "People Holding Hands (🧑‍🤝‍🧑) shows gender-neutral pair holding hands — Unicode inclusive hand-holding.",
      "Pride and allyship posts use 🧑‍🤝‍🧑 — love is love without specifying genders.",
      "Friendship appreciation tags 🧑‍🤝‍🧑 — platonic hand hold normalized.",
    ],
    textingMeaning: "'Together 🧑‍🤝‍🧑', 'Date night 🧑‍🤝‍🧑', 'Solidarity 🧑‍🤝‍🧑'.",
    socialMeaning: "Pride month, anniversary posts, and protest solidarity chains use 🧑‍🤝‍🧑.",
    caution: "Not everyone comfortable with PDA — IRL context differs from emoji.",
    examples: [
      { context: "Couple", text: "Anniversary 🧑‍🤝‍🧑" },
      { context: "Pride", text: "Love wins 🧑‍🤝‍🧑" },
      { context: "Friends", text: "Platonic 🧑‍🤝‍🧑" },
      { context: "Solidarity", text: "Together 🧑‍🤝‍🧑" },
      { context: "Protest", text: "Chain 🧑‍🤝‍🧑" },
    ],
    contextBlocks: [
      { title: "Inclusive default", body: "🧑‍🤝‍🧑 neutral pair — gender not specified in glyph." },
      { title: "Vs 👫/👭/👬", body: "Gendered couple variants exist — pick intentional representation." },
      { title: "Vs 🫂", body: "🫂 hug embrace. 🧑‍🤝‍🧑 holding hands walking." },
    ],
    searchIntents: ["people holding hands emoji", "🧑‍🤝‍🧑 meaning", "holding hands emoji", "🧑‍🤝‍🧑 copy paste"],
    whenNotToUse: ["Forced couple assumptions on friends.", "Erasing specific queer representation when 👭/👬 intended."],
    faqs: [
      { question: "What does 🧑‍🤝‍🧑 mean?", answer: "People holding hands — couples, friends, solidarity, connection." },
      { question: "🧑‍🤝‍🧑 gender?", answer: "Neutral — use gendered variants when specifying explicitly." },
    ],
  },

  firefighter: {
    batchId: BATCH_ID,
    searchTitle: "Firefighter Emoji (🧑‍🚒) Meaning: Fire Rescue, Heroes, and Emergency",
    snippetAnswer:
      "🧑‍🚒 Firefighter marks firefighters and rescue — wildfire season gratitude, fire safety education, and first responder appreciation.",
    detailedParagraphs: [
      "Firefighter (🧑‍🚒) shows figure in fire gear — Unicode neutral first responder symbol.",
      "Wildfire news triggers 🧑‍🚒 thank-you posts — climate and hero recognition.",
      "Fire safety week educates with 🧑‍🚒 — escape plans and alarm checks.",
    ],
    textingMeaning: "'Thank you 🧑‍🚒', 'Fire season 🧑‍🚒', 'Drill 🧑‍🚒'.",
    socialMeaning: "First responder appreciation, wildfire coverage, and career day posts tag 🧑‍🚒.",
    caution: "During active disasters — gratitude not performative while ignoring climate policy.",
    examples: [
      { context: "Thanks", text: "Heroes 🧑‍🚒" },
      { context: "Wildfire", text: "Stay safe 🧑‍🚒" },
      { context: "Career", text: "Academy 🧑‍🚒" },
      { context: "Safety", text: "Alarm check 🧑‍🚒" },
      { context: "Kids", text: "Truck day 🧑‍🚒" },
    ],
    contextBlocks: [
      { title: "First responder", body: "🧑‍🚒 fire rescue — wildfire and structure fire contexts." },
      { title: "Vs 👨‍🚒/👩‍🚒", body: "Gendered variants — 🧑‍🚒 neutral default." },
      { title: "Vs 🚒", body: "🚒 fire engine vehicle. 🧑‍🚒 firefighter person." },
    ],
    searchIntents: ["firefighter emoji", "🧑‍🚒 meaning", "fireman emoji", "🧑‍🚒 copy paste"],
    whenNotToUse: ["Trivializing wildfire devastation with casual 🧑‍🚒 memes."],
    faqs: [
      { question: "What does 🧑‍🚒 mean?", answer: "Firefighter — rescue, wildfire thanks, fire safety, hero." },
      { question: "🧑‍🚒 vs fire truck?", answer: "Person in gear vs 🚒 vehicle — pair in emergency context." },
    ],
  },

  technologist: {
    batchId: BATCH_ID,
    searchTitle: "Technologist Emoji (🧑‍💻) Meaning: Developer, Tech Worker, and Coding",
    snippetAnswer:
      "🧑‍💻 Technologist marks tech workers and coding — developers, IT support, hackathon grind, and 'touch grass' programmer memes.",
    detailedParagraphs: [
      "Technologist (🧑‍💻) shows person at laptop — Unicode symbol for software and IT professionals.",
      "Deploy night threads live in 🧑‍💻 — on-call and bug fix culture.",
      "Bootcamp grads celebrate first 🧑‍💻 job — career transition posts.",
    ],
    textingMeaning: "'Shipping 🧑‍💻', 'Debug 🧑‍💻', 'On call 🧑‍💻'.",
    socialMeaning: "Dev Twitter, hackathon recaps, and tech career advice tag 🧑‍💻.",
    caution: "Tech bro stereotype tired — 🧑‍💻 inclusive of all dev identities.",
    examples: [
      { context: "Deploy", text: "Friday 🧑‍💻" },
      { context: "Job", text: "Offer 🧑‍💻" },
      { context: "Hackathon", text: "48h 🧑‍💻" },
      { context: "Bug", text: "Fixed 🧑‍💻" },
      { context: "WFH", text: "Laptop 🧑‍💻" },
    ],
    contextBlocks: [
      { title: "Dev culture", body: "🧑‍💻 shorthand for programmer at keyboard — meme and serious." },
      { title: "Vs 👨‍💻/👩‍💻", body: "Gendered coder variants — 🧑‍💻 neutral." },
      { title: "Vs 💻", body: "💻 laptop object. 🧑‍💻 person using technology professionally." },
    ],
    searchIntents: ["technologist emoji", "🧑‍💻 meaning", "programmer emoji", "developer emoji"],
    whenNotToUse: ["Gatekeeping who counts as 🧑‍💻.", "Glorifying unhealthy crunch culture uncritically."],
    faqs: [
      { question: "What does 🧑‍💻 mean?", answer: "Technologist — developer, coder, IT worker, laptop professional." },
      { question: "🧑‍💻 vs 💻?", answer: "Person technologist vs computer device alone." },
    ],
  },

  astronaut: {
    batchId: BATCH_ID,
    searchTitle: "Astronaut Emoji (🧑‍🚀) Meaning: Space, NASA, and Dream Big",
    snippetAnswer:
      "🧑‍🚀 Astronaut marks space exploration — rocket launches, NASA fandom, 'reach for the stars', and childhood space dream posts.",
    detailedParagraphs: [
      "Astronaut (🧑‍🚀) shows figure in space suit — Unicode symbol for astronauts and space ambition.",
      "Launch livestreams flood 🧑‍🚀 — SpaceX and Artemis event days.",
      "Metaphorical 'shoot for 🧑‍🚀' means ambitious goals — career motivation.",
    ],
    textingMeaning: "'Launch day 🧑‍🚀', 'Space 🧑‍🚀', 'Dream big 🧑‍🚀'.",
    socialMeaning: "Space Twitter, science museums, and ambitious goal posts tag 🧑‍🚀.",
    caution: "Real astronauts train years — 🧑‍🚀 metaphor respects the profession.",
    examples: [
      { context: "Launch", text: "Liftoff 🧑‍🚀" },
      { context: "NASA", text: "Artemis 🧑‍🚀" },
      { context: "Kid", text: "Dream 🧑‍🚀" },
      { context: "Metaphor", text: "Sky limit 🧑‍🚀" },
      { context: "Museum", text: "Suit 🧑‍🚀" },
    ],
    contextBlocks: [
      { title: "Launch events", body: "🧑‍🚀 spikes during rocket launches — global livestream culture." },
      { title: "Vs 🚀", body: "🚀 rocket vehicle. 🧑‍🚀 astronaut person." },
      { title: "Vs 👽", body: "👽 alien. 🧑‍🚀 human space explorer." },
    ],
    searchIntents: ["astronaut emoji", "🧑‍🚀 meaning", "space emoji person", "🧑‍🚀 copy paste"],
    whenNotToUse: ["Flat earth bait threads.", "Minimizing space program costs without context."],
    faqs: [
      { question: "What does 🧑‍🚀 mean?", answer: "Astronaut — space, NASA, launches, ambitious dreams." },
      { question: "🧑‍🚀 launch day?", answer: "Common during live rocket launch watch parties." },
    ],
  },

  pilot: {
    batchId: BATCH_ID,
    searchTitle: "Pilot Emoji (🧑‍✈️) Meaning: Aviation, Captain, and Travel",
    snippetAnswer:
      "🧑‍✈️ Pilot marks aviators and flight — cockpit life, travel career, 'captain speaking', and aviation enthusiast posts.",
    detailedParagraphs: [
      "Pilot (🧑‍✈️) shows figure with captain hat — Unicode aviation professional symbol.",
      "Flight deck tour content flexes 🧑‍✈️ — aviation geek channels.",
      "Travelers thank 🧑‍✈️ after smooth landing — classic clap debate aside.",
    ],
    textingMeaning: "'Wheels up 🧑‍✈️', 'Captain 🧑‍✈️', 'Flight school 🧑‍✈️'.",
    socialMeaning: "Aviation Instagram, pilot training journeys, and airline career posts tag 🧑‍✈️.",
    caution: "Don't blame individual 🧑‍✈️ for airline industry failures broadly.",
    examples: [
      { context: "Flight", text: "Boarding 🧑‍✈️" },
      { context: "Career", text: "First solo 🧑‍✈️" },
      { context: "Travel", text: "Captain thanks 🧑‍✈️" },
      { context: "Training", text: "Sim hours 🧑‍✈️" },
      { context: "Geek", text: "Cockpit tour 🧑‍✈️" },
    ],
    contextBlocks: [
      { title: "Aviation career", body: "🧑‍✈️ pilot training long road — respect in posts." },
      { title: "Vs ✈️", body: "✈️ airplane. 🧑‍✈️ pilot person." },
      { title: "Vs 🛫", body: "🛫 takeoff event. 🧑‍✈️ aviator profession." },
    ],
    searchIntents: ["pilot emoji", "🧑‍✈️ meaning", "captain emoji", "🧑‍✈️ copy paste"],
    whenNotToUse: ["Harassing crew over delays — not one pilot's fault always."],
    faqs: [
      { question: "What does 🧑‍✈️ mean?", answer: "Pilot — aviation, captain, flight career, travel." },
      { question: "🧑‍✈️ vs flight attendant?", answer: "Pilot flies; cabin crew different role — don't conflate." },
    ],
  },

  scientist: {
    batchId: BATCH_ID,
    searchTitle: "Scientist Emoji (🧑‍🔬) Meaning: Lab Research, Science, and STEM",
    snippetAnswer:
      "🧑‍🔬 Scientist marks researchers and lab work — STEM careers, experiment fails, peer review pain, and science communication.",
    detailedParagraphs: [
      "Scientist (🧑‍🔬) shows figure with microscope — Unicode neutral researcher symbol.",
      "Failed experiment memes start 🧑‍🔬 — PCR and cell culture trauma.",
      "Science communicators brand 🧑‍🔬 — making research accessible online.",
    ],
    textingMeaning: "'In lab 🧑‍🔬', 'Paper submitted 🧑‍🔬', 'Experiment 🧑‍🔬'.",
    socialMeaning: "PhD life Twitter, STEM outreach, and lab mishap TikTok tag 🧑‍🔬.",
    caution: "Trust scientific consensus — 🧑‍🔬 not anti-science cosplay.",
    examples: [
      { context: "Lab", text: "Late night 🧑‍🔬" },
      { context: "PhD", text: "Thesis 🧑‍🔬" },
      { context: "Fail", text: "Contamination 🧑‍🔬" },
      { context: "Outreach", text: "Demo day 🧑‍🔬" },
      { context: "Paper", text: "Revise 🧑‍🔬" },
    ],
    contextBlocks: [
      { title: "Lab life", body: "🧑‍🔬 microscope icon — bench work identity." },
      { title: "Vs 🥼", body: "🥼 lab coat object/clothing. 🧑‍🔬 scientist person." },
      { title: "Vs 🔬", body: "🔬 microscope tool. 🧑‍🔬 person doing science." },
    ],
    searchIntents: ["scientist emoji", "🧑‍🔬 meaning", "lab emoji person", "🧑‍🔬 copy paste"],
    whenNotToUse: ["Anti-vax misinformation with 🧑‍🔬 authority aesthetic."],
    faqs: [
      { question: "What does 🧑‍🔬 mean?", answer: "Scientist — lab research, STEM, PhD life, experiments." },
      { question: "🧑‍🔬 vs 🥼?", answer: "Scientist person vs lab coat garment." },
    ],
  },

  artist: {
    batchId: BATCH_ID,
    searchTitle: "Artist Emoji (🧑‍🎨) Meaning: Painting, Creative Work, and Art Life",
    snippetAnswer:
      "🧑‍🎨 Artist marks creators and painters — studio days, commission open, paint-stained hands, and starving artist memes.",
    detailedParagraphs: [
      "Artist (🧑‍🎨) shows figure with palette — Unicode symbol for visual artists and creatives.",
      "Commission announcements lead 🧑‍🎨 — slots open threads on Art Twitter.",
      "Paint mess and canvas stack photos tag 🧑‍🎨 — process over polish.",
    ],
    textingMeaning: "'In studio 🧑‍🎨', 'Commission 🧑‍🎨', 'WIP 🧑‍🎨'.",
    socialMeaning: "Art TikTok, gallery openings, and freelance creative hustle use 🧑‍🎨.",
    caution: "Pay artists — 🧑‍🎨 exposure doesn't pay rent.",
    examples: [
      { context: "Commission", text: "Open 🧑‍🎨" },
      { context: "Studio", text: "All day 🧑‍🎨" },
      { context: "WIP", text: "Progress 🧑‍🎨" },
      { context: "Show", text: "Opening 🧑‍🎨" },
      { context: "Mess", text: "Paint hands 🧑‍🎨" },
    ],
    contextBlocks: [
      { title: "Palette icon", body: "🧑‍🎨 reads painter/visual artist — broader art sometimes." },
      { title: "Vs 🎨", body: "🎨 palette object. 🧑‍🎨 artist person." },
      { title: "Commissions", body: "Freelance artists signal availability with 🧑‍🎨 posts." },
    ],
    searchIntents: ["artist emoji", "🧑‍🎨 meaning", "painter emoji", "🧑‍🎨 copy paste"],
    whenNotToUse: ["Expecting free art.", "AI art debate bait without nuance."],
    faqs: [
      { question: "What does 🧑‍🎨 mean?", answer: "Artist — painting, studio, commissions, creative work." },
      { question: "🧑‍🎨 all artists?", answer: "Often visual art; musicians may use 🧑‍🎤 instead." },
    ],
  },

  farmer: {
    batchId: BATCH_ID,
    searchTitle: "Farmer Emoji (🧑‍🌾) Meaning: Agriculture, Harvest, and Rural Life",
    snippetAnswer:
      "🧑‍🌾 Farmer marks farming and agriculture — harvest season, farmers market, rural life vlogs, and food origin appreciation.",
    detailedParagraphs: [
      "Farmer (🧑‍🌾) shows figure with straw hat and wheat — Unicode agricultural worker symbol.",
      "Harvest moon posts celebrate 🧑‍🌾 — crop cycle gratitude.",
      "Farm-to-table restaurants tag 🧑‍🌾 — local producer credit.",
    ],
    textingMeaning: "'Harvest 🧑‍🌾', 'Market 🧑‍🌾', 'Early morning 🧑‍🌾'.",
    socialMeaning: "Ag TikTok, county fair content, and sustainability threads use 🧑‍🌾.",
    caution: "Romanticizing farm labor ignores hard economics — respect real farmers.",
    examples: [
      { context: "Harvest", text: "Long days 🧑‍🌾" },
      { context: "Market", text: "Saturday 🧑‍🌾" },
      { context: "Fair", text: "County 🧑‍🌾" },
      { context: "Dawn", text: "Before sun 🧑‍🌾" },
      { context: "Local", text: "Farm fresh 🧑‍🌾" },
    ],
    contextBlocks: [
      { title: "Agriculture", body: "🧑‍🌾 food system backbone — know your source posts." },
      { title: "Vs 🌾", body: "🌾 wheat crop. 🧑‍🌾 farmer person." },
      { title: "Vs 🚜", body: "🚜 tractor machine. 🧑‍🌾 farmer worker." },
    ],
    searchIntents: ["farmer emoji", "🧑‍🌾 meaning", "agriculture emoji", "🧑‍🌾 copy paste"],
    whenNotToUse: ["Urban cowboy cosplay mocking real ag work.", "Colonial farmer nostalgia uncritically."],
    faqs: [
      { question: "What does 🧑‍🌾 mean?", answer: "Farmer — agriculture, harvest, market, rural life." },
      { question: "🧑‍🌾 seasonal?", answer: "Harvest season and farmers market peaks usage." },
    ],
  },

  cook: {
    batchId: BATCH_ID,
    searchTitle: "Cook Emoji (🧑‍🍳) Meaning: Chef, Kitchen, and Cooking",
    snippetAnswer:
      "🧑‍🍳 Cook marks chefs and home cooking — recipe posts, line cook life, 'chef's kiss', and dinner party prep.",
    detailedParagraphs: [
      "Cook (🧑‍🍳) shows figure with chef hat — Unicode kitchen professional and home cook symbol.",
      "Recipe reel intros use 🧑‍🍳 — 60-second meal culture.",
      "Restaurant industry vents with 🧑‍🍳 — dinner rush trauma bonding.",
    ],
    textingMeaning: "'Chef mode 🧑‍🍳', 'Dinner 🧑‍🍳', 'Recipe 🧑‍🍳'.",
    socialMeaning: "Food TikTok, culinary school journeys, and meal prep Sunday tag 🧑‍🍳.",
    caution: "Kitchen work hard — don't glamorize unpaid recipe test labor only.",
    examples: [
      { context: "Home", text: "Cooking 🧑‍🍳" },
      { context: "Recipe", text: "New dish 🧑‍🍳" },
      { context: "Rush", text: "Service 🧑‍🍳" },
      { context: "School", text: "Culinary 🧑‍🍳" },
      { context: "Kiss", text: "Chef's kiss 🧑‍🍳" },
    ],
    contextBlocks: [
      { title: "Chef's kiss", body: "🧑‍🍳 pairs with 👌 for perfect dish approval — meme combo." },
      { title: "Vs 👨‍🍳/👩‍🍳", body: "Gendered chef variants — 🧑‍🍳 neutral." },
      { title: "Vs 🍳", body: "🍳 cooking pan. 🧑‍🍳 cook person." },
    ],
    searchIntents: ["cook emoji", "🧑‍🍳 meaning", "chef emoji", "🧑‍🍳 copy paste"],
    whenNotToUse: ["Food safety jokes during outbreaks.", "Cultural cuisine gatekeeping."],
    faqs: [
      { question: "What does 🧑‍🍳 mean?", answer: "Cook/chef — kitchen, recipes, restaurant, home cooking." },
      { question: "🧑‍🍳 chef's kiss?", answer: "Gesture of perfection — often with ok-hand near mouth metaphor." },
    ],
  },

  mechanic: {
    batchId: BATCH_ID,
    searchTitle: "Mechanic Emoji (🧑‍🔧) Meaning: Auto Repair, Trades, and Fix It",
    snippetAnswer:
      "🧑‍🔧 Mechanic marks auto repair and trades — car fixes, wrench life, DIY garage projects, and blue-collar respect posts.",
    detailedParagraphs: [
      "Mechanic (🧑‍🔧) shows figure with wrench — Unicode trade worker symbol for repair.",
      "Check engine light panic ends at 🧑‍🔧 — shop appointment relief.",
      "DIY car TikTok celebrates 🧑‍🔧 — oil change and brake pad content.",
    ],
    textingMeaning: "'At the shop 🧑‍🔧', 'Fixed 🧑‍🔧', 'DIY 🧑‍🔧'.",
    socialMeaning: "Trade worker appreciation, car repair vlogs, and garage project posts tag 🧑‍🔧.",
    caution: "Real repairs need safety — DIY limits beyond 🧑‍🔧 meme.",
    examples: [
      { context: "Shop", text: "Estimate 🧑‍🔧" },
      { context: "Fixed", text: "Runs 🧑‍🔧" },
      { context: "DIY", text: "Garage 🧑‍🔧" },
      { context: "Trade", text: "Respect 🧑‍🔧" },
      { context: "Wrench", text: "All day 🧑‍🔧" },
    ],
    contextBlocks: [
      { title: "Trade respect", body: "🧑‍🔧 skilled labor — automotive and general repair." },
      { title: "Vs 🔧", body: "🔧 wrench tool. 🧑‍🔧 mechanic person." },
      { title: "Vs 🛞", body: "🛞 tire/wheel. 🧑‍🔧 person fixing car." },
    ],
    searchIntents: ["mechanic emoji", "🧑‍🔧 meaning", "wrench worker emoji", "🧑‍🔧 copy paste"],
    whenNotToUse: ["Unsafe DIY brake/engine jokes.", "Mocking trade careers."],
    faqs: [
      { question: "What does 🧑‍🔧 mean?", answer: "Mechanic — auto repair, trades, wrench, garage DIY." },
      { question: "🧑‍🔧 vs 🔧?", answer: "Mechanic person vs wrench tool alone." },
    ],
  },

  judge: {
    batchId: BATCH_ID,
    searchTitle: "Judge Emoji (🧑‍⚖️) Meaning: Court, Law, and Judgment Meme",
    snippetAnswer:
      "🧑‍⚖️ Judge marks judges and law — courtroom drama, law school, 'don't judge me' wordplay, and legal news posts.",
    detailedParagraphs: [
      "Judge (🧑‍⚖️) shows figure with gavel scales — Unicode legal profession symbol.",
      "High-profile verdict days spike 🧑‍⚖️ — live courtroom coverage.",
      "Meme 'judging you 🧑‍⚖️' — playful criticism among friends.",
    ],
    textingMeaning: "'Court 🧑‍⚖️', 'Verdict 🧑‍⚖️', 'Law school 🧑‍⚖️'.",
    socialMeaning: "Legal Twitter, true crime podcasts, and debate 'court is adjourned' tag 🧑‍⚖️.",
    caution: "Real legal cases affect lives — serious tone during active trials.",
    examples: [
      { context: "News", text: "Verdict 🧑‍⚖️" },
      { context: "Law", text: "Bar exam 🧑‍⚖️" },
      { context: "Meme", text: "Judging 🧑‍⚖️" },
      { context: "Drama", text: "Objection 🧑‍⚖️" },
      { context: "School", text: "1L 🧑‍⚖️" },
    ],
    contextBlocks: [
      { title: "Legal profession", body: "🧑‍⚖️ judge/lawyer symbolism — scales and gavel association." },
      { title: "Vs ⚖️", body: "⚖️ balance scales justice symbol. 🧑‍⚖️ judge person." },
      { title: "Judging meme", body: "Playful 🧑‍⚖️ when friend makes questionable choice." },
    ],
    searchIntents: ["judge emoji", "🧑‍⚖️ meaning", "law emoji person", "🧑‍⚖️ copy paste"],
    whenNotToUse: ["Minimizing real injustice with cute 🧑‍⚖️ memes.", "Legal advice cosplay."],
    faqs: [
      { question: "What does 🧑‍⚖️ mean?", answer: "Judge — court, law, verdict, judgment meme." },
      { question: "🧑‍⚖️ vs ⚖️?", answer: "Judge person vs scales of justice symbol." },
    ],
  },

  singer: {
    batchId: BATCH_ID,
    searchTitle: "Singer Emoji (🧑‍🎤) Meaning: Music, Performance, and Karaoke",
    snippetAnswer:
      "🧑‍🎤 Singer marks vocalists and performance — karaoke night, album drops, open mic, and shower concert energy.",
    detailedParagraphs: [
      "Singer (🧑‍🎤) shows figure with microphone — Unicode performer and vocalist symbol.",
      "Karaoke parties default 🧑‍🎤 — drunk Adele attempts documented.",
      "Musicians announce tours and releases with 🧑‍🎤 — stage identity.",
    ],
    textingMeaning: "'Karaoke 🧑‍🎤', 'Open mic 🧑‍🎤', 'Album out 🧑‍🎤'.",
    socialMeaning: "Music release threads, choir posts, and idol fan culture tag 🧑‍🎤.",
    caution: "Don't use 🧑‍🎤 to mock bad singing cruelly at karaoke.",
    examples: [
      { context: "Karaoke", text: "Queue 🧑‍🎤" },
      { context: "Release", text: "Out now 🧑‍🎤" },
      { context: "Shower", text: "Concert 🧑‍🎤" },
      { context: "Tour", text: "Stage 🧑‍🎤" },
      { context: "Choir", text: "Rehearsal 🧑‍🎤" },
    ],
    contextBlocks: [
      { title: "Vs 🎤", body: "🎤 microphone object. 🧑‍🎤 singer person performing." },
      { title: "Karaoke", body: "🧑‍🎤 night out — party planning emoji." },
      { title: "Vs 🧑‍🎨", body: "🧑‍🎨 visual artist. 🧑‍🎤 vocal performer." },
    ],
    searchIntents: ["singer emoji", "🧑‍🎤 meaning", "microphone person emoji", "🧑‍🎤 copy paste"],
    whenNotToUse: ["Mocking amateur singers meanly."],
    faqs: [
      { question: "What does 🧑‍🎤 mean?", answer: "Singer — karaoke, performance, music, microphone." },
      { question: "🧑‍🎤 vs 🎤?", answer: "Person singer vs mic device." },
    ],
  },

  elf: {
    batchId: BATCH_ID,
    searchTitle: "Elf Emoji (🧝) Meaning: Fantasy, Christmas, and LOTR",
    snippetAnswer:
      "🧝 Elf marks fantasy elves — Christmas workshop, LOTR fandom, D&D campaigns, and pointed-ear aesthetic.",
    detailedParagraphs: [
      "Elf (🧝) shows fantasy elf figure — Unicode symbol for Tolkien-style and holiday elves.",
      "December 🧝 season doubles — Santa's helpers and fantasy cosplay.",
      "TTRPG character sheets stamp 🧝 — ranger and wizard elf builds.",
    ],
    textingMeaning: "'D&D 🧝', 'Holiday elf 🧝', 'LOTR 🧝'.",
    socialMeaning: "Fantasy conventions, Christmas job humor, and cosplay tag 🧝.",
    caution: "Holiday elf job jokes don't erase worker dignity — keep playful.",
    examples: [
      { context: "Christmas", text: "Workshop 🧝" },
      { context: "D&D", text: "Ranger 🧝" },
      { context: "LOTR", text: "Legolas 🧝" },
      { context: "Cosplay", text: "Ears 🧝" },
      { context: "Shelf", text: "On shelf 🧝" },
    ],
    contextBlocks: [
      { title: "Dual season", body: "🧝 Christmas elf vs fantasy elf — caption clarifies." },
      { title: "Vs 🧙", body: "🧙 wizard/mage. 🧝 elf humanoid fantasy race." },
      { title: "Vs 🎅", body: "🎅 Santa. 🧝 helper elf worker." },
    ],
    searchIntents: ["elf emoji", "🧝 meaning", "fantasy elf emoji", "🧝 copy paste"],
    whenNotToUse: ["Racial coding insults — fantasy only."],
    faqs: [
      { question: "What does 🧝 mean?", answer: "Elf — fantasy RPG, LOTR, Christmas helper, cosplay." },
      { question: "🧝 Christmas or fantasy?", answer: "Both — context from caption and season." },
    ],
  },

  vampire: {
    batchId: BATCH_ID,
    searchTitle: "Vampire Emoji (🧛) Meaning: Halloween, Gothic, and Night Owl",
    snippetAnswer:
      "🧛 Vampire marks vampires and gothic — Halloween costumes, night owl sleep schedule, Twilight nostalgia, and spooky aesthetic.",
    detailedParagraphs: [
      "Vampire (🧛) shows fanged cape figure — Unicode Halloween and gothic symbol.",
      "October 🧛 takeover — costume planning and horror movie marathons.",
      "'I'm a 🧛' means night person — stays up until 3am meme.",
    ],
    textingMeaning: "'Halloween 🧛', 'Night owl 🧛', 'Spooky 🧛'.",
    socialMeaning: "Goth TikTok, vampire romance books, and sleep schedule humor tag 🧛.",
    caution: "Real blood themes sensitive — keep fictional Halloween context.",
    examples: [
      { context: "Halloween", text: "Costume 🧛" },
      { context: "Night", text: "3am 🧛" },
      { context: "Goth", text: "Aesthetic 🧛" },
      { context: "Books", text: "Romantasy 🧛" },
      { context: "Party", text: "Spooky 🧛" },
    ],
    contextBlocks: [
      { title: "Night owl", body: "🧛 metaphor for nocturnal schedule — not literal undead." },
      { title: "Vs 🧟", body: "🧟 zombie. 🧛 vampire — different horror tropes." },
      { title: "Vs 🦇", body: "🦇 bat animal. 🧛 vampire person." },
    ],
    searchIntents: ["vampire emoji", "🧛 meaning", "dracula emoji", "🧛 copy paste"],
    whenNotToUse: ["Graphic blood content.", "Mocking goth subculture cruelly."],
    faqs: [
      { question: "What does 🧛 mean?", answer: "Vampire — Halloween, gothic, night owl, spooky." },
      { question: "🧛 night person?", answer: "Slang for staying up late — vampire schedule meme." },
    ],
  },

  fairy: {
    batchId: BATCH_ID,
    searchTitle: "Fairy Emoji (🧚) Meaning: Magic, Fantasy, and Whimsy",
    snippetAnswer:
      "🧚 Fairy marks fairies and whimsy — fantasy aesthetic, 'fairy godmother' help, sparkle energy, and ethereal cottagecore vibes.",
    detailedParagraphs: [
      "Fairy (🧚) shows winged fairy figure — Unicode magic and whimsy symbol.",
      "Cottagecore and ethereal girl aesthetic builds on 🧚 — garden and sparkle.",
      "'Fairy godmother 🧚' means unexpected help arrived — grateful posts.",
    ],
    textingMeaning: "'Fairy vibes 🧚', 'Magic 🧚', 'Help arrived 🧚'.",
    socialMeaning: "Fantasy art, Coachella fairy makeup, and whimsical lifestyle tag 🧚.",
    caution: "Don't reduce women to 'fairy' infantilizing — context playful self-describe OK.",
    examples: [
      { context: "Aesthetic", text: "Ethereal 🧚" },
      { context: "Help", text: "Godmother 🧚" },
      { context: "Garden", text: "Cottagecore 🧚" },
      { context: "Fest", text: "Wings 🧚" },
      { context: "Magic", text: "Sparkle 🧚" },
    ],
    contextBlocks: [
      { title: "Whimsy", body: "🧚 light magic — not dark horror fantasy." },
      { title: "Vs 🧝‍♀️", body: "🧚 fairy wings. 🧝 elf — different fantasy beings." },
      { title: "Vs ✨", body: "✨ sparkles effect. 🧚 fairy character person." },
    ],
    searchIntents: ["fairy emoji", "🧚 meaning", "fairy wings emoji", "🧚 copy paste"],
    whenNotToUse: ["Infantilizing others without consent."],
    faqs: [
      { question: "What does 🧚 mean?", answer: "Fairy — magic, whimsy, fantasy, fairy godmother help." },
      { question: "🧚 vs 🧚‍♀️?", answer: "🧚 default; gendered variants exist on platforms." },
    ],
  },
};
