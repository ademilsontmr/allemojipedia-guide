import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "25-people-body-roles-gestures";

/** Batch 25 P0 — neutral gestures, body, roles, fantasy (People & Body start). */
export const batch25PeopleBodyRolesGestures: Record<string, EmojiBatchEnrichment> = {
  "nail-polish": {
    batchId: BATCH_ID,
    searchTitle: "Nail Polish Emoji (💅) Meaning: Manicure, Self-Care, and Sassy Energy",
    snippetAnswer:
      "💅 Nail Polish marks manicures and self-care — salon days, GRWM beauty, 'periodt' sassy confidence, and treat-yourself posts.",
    detailedParagraphs: [
      "Nail Polish (💅) shows hand with painted nails — Unicode symbol for beauty routines and unbothered attitude.",
      "The 'nonchalant 💅' meme means unbothered excellence — drama doesn't stick.",
      "Salon and press-on nail TikTok builds entire channels around 💅 — color season drops.",
    ],
    textingMeaning: "'Mani day 💅', 'Unbothered 💅', 'Fresh set 💅'.",
    socialMeaning: "Beauty GRWM, drag culture flair, and confidence posts lead with 💅.",
    caution: "💅 sass can read dismissive — know audience before dunking threads.",
    examples: [
      { context: "Salon", text: "Gel set 💅" },
      { context: "Sassy", text: "Noted 💅" },
      { context: "GRWM", text: "Nails done 💅" },
      { context: "Self-care", text: "Sunday 💅" },
      { context: "Meme", text: "Periodt 💅" },
    ],
    contextBlocks: [
      { title: "Sassy meme", body: "💅 'okay' energy — unbothered response to drama." },
      { title: "Vs 💄", body: "💄 lipstick. 💅 nails specifically." },
      { title: "Beauty routine", body: "Full glam stacks 💅 with hair and makeup content." },
    ],
    searchIntents: ["nail polish emoji", "💅 meaning", "manicure emoji", "💅 copy paste"],
    whenNotToUse: ["Mocking someone's appearance.", "Dismissive in serious grief threads."],
    faqs: [
      { question: "What does 💅 mean?", answer: "Nail polish — manicure, self-care, sassy unbothered meme." },
      { question: "💅 periodt meme?", answer: "Slang for confident dismissal — 'I said what I said' energy." },
    ],
  },

  "anatomical-heart": {
    batchId: BATCH_ID,
    searchTitle: "Anatomical Heart Emoji (🫀) Meaning: Real Heart, Health, and Love Literal",
    snippetAnswer:
      "🫀 Anatomical Heart marks the real organ — cardiology, fitness heart rate, medical education, and literal love vs ❤️ romantic heart.",
    detailedParagraphs: [
      "Anatomical Heart (🫀) shows realistic heart organ — Unicode symbol for medical and fitness contexts.",
      "Nurses and med students use 🫀 in study threads — distinct from cartoon ❤️.",
      "Runners post 🫀 with HR zone screenshots — athletic cardiac focus.",
    ],
    textingMeaning: "'Cardio 🫀', 'Med school 🫀', 'Heart health 🫀'.",
    socialMeaning: "Health TikTok, anatomy education, and Valentine's literal pun posts tag 🫀.",
    caution: "Medical content needs accuracy — 🫀 doesn't replace doctor advice.",
    examples: [
      { context: "Med", text: "Anatomy lab 🫀" },
      { context: "Fitness", text: "Zone 4 🫀" },
      { context: "Health", text: "Checkup 🫀" },
      { context: "Valentine", text: "Literal ❤️🫀 pun" },
      { context: "Nurse", text: "Shift 🫀" },
    ],
    contextBlocks: [
      { title: "Vs ❤️", body: "❤️ romantic love symbol. 🫀 actual organ — medical/literal." },
      { title: "Fitness", body: "HR monitors and cardio posts prefer 🫀 over ❤️." },
      { title: "Education", body: "Med/anatomy creators distinguish 🫀 for accuracy." },
    ],
    searchIntents: ["anatomical heart emoji", "🫀 meaning", "real heart emoji", "🫀 copy paste"],
    whenNotToUse: ["Casual 'love you' — ❤️ fits better.", "Graphic injury without content warning."],
    faqs: [
      { question: "What does 🫀 mean?", answer: "Anatomical heart — medical, fitness, literal organ reference." },
      { question: "🫀 vs ❤️?", answer: "🫀 realistic organ; ❤️ stylized love heart." },
    ],
  },

  "biting-lip": {
    batchId: BATCH_ID,
    searchTitle: "Biting Lip Emoji (🫦) Meaning: Flirt, Nervous, and Anticipation",
    snippetAnswer:
      "🫦 Biting Lip marks flirt and tension — nervous habit, anticipation, spicy thirst posts, and 'I shouldn't say this but' energy.",
    detailedParagraphs: [
      "Biting Lip (🫦) shows lip bite expression — Unicode symbol for flirtation, anxiety, and restrained excitement.",
      "Thirst TikTok and romance reels use 🫦 — suggestive but platform-dependent.",
      "Anxiety posts also use 🫦 for nervous waiting — interview or results day.",
    ],
    textingMeaning: "'Nervous 🫦', 'The way I 🫦', 'Waiting 🫦'.",
    socialMeaning: "Flirt memes, K-drama reactions, and pre-announcement hype tag 🫦.",
    caution: "Unsolicited 🫦 DMs harass — consent matters.",
    examples: [
      { context: "Flirt", text: "Thinking 🫦" },
      { context: "Nervous", text: "Results 🫦" },
      { context: "Spicy", text: "That scene 🫦" },
      { context: "Wait", text: "Drop soon 🫦" },
      { context: "Meme", text: "Bite 🫦" },
    ],
    contextBlocks: [
      { title: "Dual tone", body: "🫦 flirts OR nerves — caption disambiguates." },
      { title: "Vs 😬", body: "😬 grimace awkward. 🫦 lip bite flirt/anxious." },
      { title: "Platform rules", body: "Suggestive 🫦 may hit moderation on strict apps." },
    ],
    searchIntents: ["biting lip emoji", "🫦 meaning", "lip bite emoji", "🫦 copy paste"],
    whenNotToUse: ["Harassment DMs.", "Minors context — never."],
    faqs: [
      { question: "What does 🫦 mean?", answer: "Biting lip — flirt, nervous, anticipation, tension." },
      { question: "🫦 flirt or anxiety?", answer: "Both common — context from chat clarifies." },
    ],
  },

  "people-hugging": {
    batchId: BATCH_ID,
    searchTitle: "People Hugging Emoji (🫂) Meaning: Comfort, Support, and Mental Health",
    snippetAnswer:
      "🫂 People Hugging means comfort and support — virtual hugs, grief support, friendship appreciation, and mental health check-ins.",
    detailedParagraphs: [
      "People Hugging (🫂) shows two figures embracing — Unicode symbol for emotional support when physical hug isn't possible.",
      "Therapists and support communities offer 🫂 in comments — safe virtual embrace.",
      "Reunion posts after long distance lead with 🫂 — airport hug energy in text.",
    ],
    textingMeaning: "'Sending 🫂', 'Needed this hug 🫂', 'Proud of you 🫂'.",
    socialMeaning: "Mental health threads, grief support, and best friend appreciation tag 🫂.",
    caution: "🫂 doesn't replace real support in crisis — share hotlines when needed.",
    examples: [
      { context: "Support", text: "Here 🫂" },
      { context: "Grief", text: "Thinking of you 🫂" },
      { context: "Reunion", text: "Finally 🫂" },
      { context: "Friend", text: "Proud 🫂" },
      { context: "Hard day", text: "Virtual 🫂" },
    ],
    contextBlocks: [
      { title: "Virtual hug", body: "🫂 standard text hug when you can't be there physically." },
      { title: "Vs 🤗", body: "🤗 open arms one person. 🫂 two people full hug." },
      { title: "Mental health", body: "Support replies use 🫂 with empathy — not dismissive." },
    ],
    searchIntents: ["people hugging emoji", "🫂 meaning", "hug emoji", "🫂 copy paste"],
    whenNotToUse: ["Touch-averse people — ask before hug IRL jokes.", "Minimizing trauma with hug only."],
    faqs: [
      { question: "What does 🫂 mean?", answer: "People hugging — comfort, support, virtual hug, friendship." },
      { question: "🫂 vs 🤗?", answer: "🫂 two-person embrace; 🤗 hugging face/open arms." },
    ],
  },

  "speaking-head": {
    batchId: BATCH_ID,
    searchTitle: "Speaking Head Emoji (🗣️) Meaning: Speech, Podcast, and Hot Take",
    snippetAnswer:
      "🗣️ Speaking Head marks speech and voice — podcasts, announcements, 'let me speak on this', and AI voiceover adjacency.",
    detailedParagraphs: [
      "Speaking Head (🗣️) shows head with sound waves — Unicode symbol for talking, ranting, and vocal content.",
      "Podcast launches promo 🗣️ — new episode out threads.",
      "Debate Twitter '🗣️🗣️🗣️' means someone has opinions incoming — loud thread energy.",
    ],
    textingMeaning: "'New pod 🗣️', 'Hear me out 🗣️', 'Speaking on it 🗣️'.",
    socialMeaning: "Podcast TikTok, keynote clips, and opinion thread intros tag 🗣️.",
    caution: "🗣️ spam caps energy annoys — use when actually adding value.",
    examples: [
      { context: "Podcast", text: "Ep live 🗣️" },
      { context: "Opinion", text: "Thread 🗣️" },
      { context: "Speech", text: "Keynote 🗣️" },
      { context: "AI", text: "Voice clone 🗣️" },
      { context: "Rant", text: "Let me 🗣️" },
    ],
    contextBlocks: [
      { title: "Podcast culture", body: "🗣️ default mic/speech symbol for audio shows." },
      { title: "Vs 🔊", body: "🔊 speaker volume. 🗣️ human speech specifically." },
      { title: "Hot take intro", body: "'🗣️🗣️' prefixes controversial thread drops." },
    ],
    searchIntents: ["speaking head emoji", "🗣️ meaning", "talking head emoji", "🗣️ copy paste"],
    whenNotToUse: ["When listening preferred over talking.", "Over others' marginalized voices."],
    faqs: [
      { question: "What does 🗣️ mean?", answer: "Speaking head — speech, podcast, announcement, hot take." },
      { question: "🗣️ repeated?", answer: "Emphasis — 'I need to say this' loud thread energy." },
    ],
  },

  family: {
    batchId: BATCH_ID,
    searchTitle: "Family Emoji (👪) Meaning: Family Unit, Parents, and Home",
    snippetAnswer:
      "👪 Family marks family unit — parents and kid posts, holiday gatherings, family group chat names, and wholesome home content.",
    detailedParagraphs: [
      "Family (👪) shows adult figures with child — Unicode generic family symbol before expanded family emoji set.",
      "Holiday cards and reunion posts use 👪 — Thanksgiving and summer trip albums.",
      "Parenting bloggers tag 👪 for family vlog content — daily chaos narrative.",
    ],
    textingMeaning: "'Family time 👪', 'Kids asleep 👪', 'Reunion 👪'.",
    socialMeaning: "Parenting Instagram, holiday photo dumps, and family milestone posts tag 👪.",
    caution: "Not all families look like 👪 default — expanded family emojis exist for representation.",
    examples: [
      { context: "Holiday", text: "Together 👪" },
      { context: "Parent", text: "Chaos 👪" },
      { context: "Reunion", text: "Home 👪" },
      { context: "Milestone", text: "First day 👪" },
      { context: "Chat", text: "Group name 👪" },
    ],
    contextBlocks: [
      { title: "Generic family", body: "👪 classic nuclear icon — many families use specific combo emojis now." },
      { title: "Vs 🧑‍🧑‍🧒", body: "Newer ZWJ family sequences allow diverse compositions." },
      { title: "Holiday spike", body: "Thanksgiving/Christmas 👪 usage surges seasonally." },
    ],
    searchIntents: ["family emoji", "👪 meaning", "family emoji copy paste", "👪 parents"],
    whenNotToUse: ["Assuming everyone has 👪 structure.", "Judging non-traditional families."],
    faqs: [
      { question: "What does 👪 mean?", answer: "Family — parents, kids, home, reunion, parenting." },
      { question: "👪 vs newer family emojis?", answer: "👪 generic; specific combos show different family makeup." },
    ],
  },

  footprints: {
    batchId: BATCH_ID,
    searchTitle: "Footprints Emoji (👣) Meaning: Walking, Tracking, and Following",
    snippetAnswer:
      "👣 Footprints mark walking and tracking — beach walks, step goals, detective following clues, and 'walked away' metaphors.",
    detailedParagraphs: [
      "Footprints (👣) show two foot prints — Unicode symbol for paths, journeys, and trail markers.",
      "True crime and mystery TikTok uses 👣 — following evidence trail aesthetic.",
      "Beach vacation posts photograph 👣 in sand — classic photo caption emoji.",
    ],
    textingMeaning: "'Walked away 👣', 'Trail 👣', 'Steps 👣'.",
    socialMeaning: "Hiking blogs, baby first steps, and detective meme accounts tag 👣.",
    caution: "Stalking metaphors with 👣 creepy toward real people — keep playful.",
    examples: [
      { context: "Beach", text: "Sand 👣" },
      { context: "Hike", text: "Trail 👣" },
      { context: "Baby", text: "First steps 👣" },
      { context: "Mystery", text: "Clues 👣" },
      { context: "Exit", text: "I'm out 👣" },
    ],
    contextBlocks: [
      { title: "Journey metaphor", body: "👣 path taken — literal walk or life direction." },
      { title: "Vs 🥾", body: "🥾 hiking boot. 👣 prints left behind." },
      { title: "Detective trope", body: "Follow the 👣 — investigation meme language." },
    ],
    searchIntents: ["footprints emoji", "👣 meaning", "foot steps emoji", "👣 copy paste"],
    whenNotToUse: ["Harassment tracking implications.", "Native cultural footprint art — respect context."],
    faqs: [
      { question: "What does 👣 mean?", answer: "Footprints — walking, trail, journey, detective follow." },
      { question: "👣 baby steps?", answer: "Common for first steps milestones and parenting posts." },
    ],
  },

  "santa-claus": {
    batchId: BATCH_ID,
    searchTitle: "Santa Claus Emoji (🎅) Meaning: Christmas, Holidays, and Gift Season",
    snippetAnswer:
      "🎅 Santa Claus marks Christmas — holiday wishes, gift lists, mall Santa posts, and December seasonal content explosion.",
    detailedParagraphs: [
      "Santa Claus (🎅) shows classic Santa figure — Unicode anchor for Christmas season digital communication.",
      "Retail and e-commerce spam 🎅 from November — holiday sale culture.",
      "Kids' letters and NORAD tracker posts share 🎅 — family tradition online.",
    ],
    textingMeaning: "'Merry Christmas 🎅', 'Santa came 🎅', 'Naughty list 🎅'.",
    socialMeaning: "Holiday Instagram, gift guide reels, and office Secret Santa chats tag 🎅.",
    caution: "December-only fatigue — 🎅 before Thanksgiving annoys some audiences.",
    examples: [
      { context: "Christmas", text: "Merry 🎅🎄" },
      { context: "Gifts", text: "Wrapped 🎅" },
      { context: "Kids", text: "Tracker 🎅" },
      { context: "Sale", text: "Holiday 🎅" },
      { context: "Costume", text: "Office party 🎅" },
    ],
    contextBlocks: [
      { title: "Seasonal spike", body: "🎅 search peaks Nov–Dec — plan content calendar." },
      { title: "Vs 🤶", body: "🤶 Mrs. Claus. 🎅 Santa — pair for couple costume." },
      { title: "Vs 🎄", body: "🎄 tree/decoration. 🎅 Santa character." },
    ],
    searchIntents: ["santa emoji", "🎅 meaning", "santa claus emoji", "🎅 copy paste"],
    whenNotToUse: ["Non-Christmas winter unless intentional.", "Commercial spam overload."],
    faqs: [
      { question: "What does 🎅 mean?", answer: "Santa Claus — Christmas, gifts, holiday season." },
      { question: "When to use 🎅?", answer: "Holiday season wishes, gift content, Christmas events." },
    ],
  },

  mermaid: {
    batchId: BATCH_ID,
    searchTitle: "Mermaid Emoji (🧜‍♀️) Meaning: Ocean Fantasy, Ariel, and Beach Aesthetic",
    snippetAnswer:
      "🧜‍♀️ Mermaid marks ocean fantasy — beach aesthetic, Disney Ariel culture, mermaid cosplay, and mystical feminine energy posts.",
    detailedParagraphs: [
      "Mermaid (🧜‍♀️) shows female merfolk — Unicode fantasy symbol tied to ocean and fairy tale.",
      "Mermaid cosplay and tail swimming communities center 🧜‍♀️ — niche but passionate.",
      "Beach vacation captions use 🧜‍♀️ for tropical goddess aesthetic — not literal claim.",
    ],
    textingMeaning: "'Beach mermaid 🧜‍♀️', 'Cosplay 🧜‍♀️', 'Ocean mood 🧜‍♀️'.",
    socialMeaning: "Disney fans, ocean conservation aesthetic, and festival mermaid performers tag 🧜‍♀️.",
    caution: "Disney IP adjacent — fan content not official branding.",
    examples: [
      { context: "Beach", text: "Tropical 🧜‍♀️" },
      { context: "Cosplay", text: "Tail 🧜‍♀️" },
      { context: "Disney", text: "Ariel era 🧜‍♀️" },
      { context: "Aesthetic", text: "Ocean 🧜‍♀️" },
      { context: "Pool", text: "Mermaid bar 🧜‍♀️" },
    ],
    contextBlocks: [
      { title: "Vs 🧜", body: "🧜 gender-neutral merperson. 🧜‍♀️ woman mermaid." },
      { title: "Vs 🐚", body: "🐚 seashell. 🧜‍♀️ mythical sea person." },
      { title: "Cosplay niche", body: "Silicone tail community uses 🧜‍♀️ heavily in hashtags." },
    ],
    searchIntents: ["mermaid emoji", "🧜‍♀️ meaning", "ariel emoji", "🧜‍♀️ copy paste"],
    whenNotToUse: ["Misgendering merfolk content creator's preferred emoji."],
    faqs: [
      { question: "What does 🧜‍♀️ mean?", answer: "Mermaid — ocean fantasy, beach aesthetic, cosplay, Ariel culture." },
      { question: "🧜‍♀️ vs 🧜‍♂️?", answer: "Female mermaid vs merman — pick matching gender presentation." },
    ],
  },

  superhero: {
    batchId: BATCH_ID,
    searchTitle: "Superhero Emoji (🦸) Meaning: Hero, Marvel, and Everyday Champion",
    snippetAnswer:
      "🦸 Superhero marks heroes — Marvel/DC culture, 'you're my hero' gratitude, kid costume posts, and main-character energy.",
    detailedParagraphs: [
      "Superhero (🦸) shows caped hero figure — Unicode symbol for comic culture and praise.",
      "Thank-you posts call nurses and teachers 🦸 — real-life hero metaphor.",
      "Comic con and movie premiere threads flood 🦸 — MCU release season.",
    ],
    textingMeaning: "'You're a 🦸', 'Hero mode 🦸', 'Premiere 🦸'.",
    socialMeaning: "Comic fandom, gratitude posts, and Halloween costume reveals tag 🦸.",
    caution: "Copyright characters differ from generic 🦸 — fan talk not official.",
    examples: [
      { context: "Thanks", text: "Real 🦸" },
      { context: "Comic", text: "Con 🦸" },
      { context: "Movie", text: "Premiere 🦸" },
      { context: "Kid", text: "Costume 🦸" },
      { context: "Work", text: "Saved the day 🦸" },
    ],
    contextBlocks: [
      { title: "Real-life hero", body: "🦸 thanks essential workers and friends who showed up." },
      { title: "Vs 🦹", body: "🦹 villain. 🦸 hero — narrative opposites." },
      { title: "Vs 🦸‍♀️/🦸‍♂️", body: "Gendered variants exist — 🦸 neutral default." },
    ],
    searchIntents: ["superhero emoji", "🦸 meaning", "hero emoji", "🦸 copy paste"],
    whenNotToUse: ["Trivializing real trauma with cape metaphors."],
    faqs: [
      { question: "What does 🦸 mean?", answer: "Superhero — comics, gratitude hero, costume, champion energy." },
      { question: "🦸 for thank you?", answer: "Yes — 'you're my hero' sincere or playful praise." },
    ],
  },

  genie: {
    batchId: BATCH_ID,
    searchTitle: "Genie Emoji (🧞) Meaning: Wishes, Aladdin, and Magic",
    snippetAnswer:
      "🧞 Genie marks wishes and magic — three wishes jokes, Aladdin nostalgia, 'your wish is granted' announcements, and fantasy RP.",
    detailedParagraphs: [
      "Genie (🧞) shows genie from lamp — Unicode symbol for wishes and magical fulfillment.",
      "Product launch hype 'genie granted 🧞' — your wish for this feature came true.",
      "Disney and Broadway Aladdin fans use 🧞 in trip and show posts.",
    ],
    textingMeaning: "'Three wishes 🧞', 'Granted 🧞', 'Magic 🧞'.",
    socialMeaning: "Disney travel, fantasy art, and giveaway winner announcements tag 🧞.",
    caution: "Cultural origins deeper than Disney — respect Arabian folklore roots.",
    examples: [
      { context: "Wish", text: "Granted 🧞" },
      { context: "Disney", text: "Agrabah 🧞" },
      { context: "Launch", text: "You asked 🧞" },
      { context: "Giveaway", text: "Winner 🧞" },
      { context: "RP", text: "Lamp 🧞" },
    ],
    contextBlocks: [
      { title: "Three wishes trope", body: "🧞 triggers lamp/wish folklore — punchline setup." },
      { title: "Vs 🧞‍♀️/🧞‍♂️", body: "Gendered genie variants — 🧞 neutral." },
      { title: "Product metaphor", body: "Startup 'wish granted' posts borrow 🧞 for feature drops." },
    ],
    searchIntents: ["genie emoji", "🧞 meaning", "aladdin genie emoji", "🧞 copy paste"],
    whenNotToUse: ["Stereotype jokes about Middle Eastern culture."],
    faqs: [
      { question: "What does 🧞 mean?", answer: "Genie — wishes, magic, Aladdin, granted request." },
      { question: "🧞 wishes meme?", answer: "Three wishes setup — what would you ask joke format." },
    ],
  },

  ninja: {
    batchId: BATCH_ID,
    searchTitle: "Ninja Emoji (🥷) Meaning: Stealth, Gaming, and Discipline",
    snippetAnswer:
      "🥷 Ninja marks stealth and skill — gaming stealth builds, 'silent but effective', martial arts respect, and meme 'disappeared' exits.",
    detailedParagraphs: [
      "Ninja (🥷) shows ninja figure — Unicode symbol for stealth, Japan martial culture, and gaming.",
      "Gamers main 🥷 for stealth class — Assassin's Creed and MMO rogues.",
      "'I'm a 🥷' means handled quietly without drama — office slang.",
    ],
    textingMeaning: "'Stealth mode 🥷', 'Ninja exit 🥷', 'GG 🥷'.",
    socialMeaning: "Gaming clips, martial arts dojo posts, and quiet achievement brags tag 🥷.",
    caution: "Respect Japanese ninja history — not only meme costume.",
    examples: [
      { context: "Gaming", text: "Stealth 🥷" },
      { context: "Work", text: "Done quietly 🥷" },
      { context: "Exit", text: "Left 🥷" },
      { context: "Dojo", text: "Training 🥷" },
      { context: "Meme", text: "Invisible 🥷" },
    ],
    contextBlocks: [
      { title: "Stealth gaming", body: "🥷 class identity in RPGs — rogue/assassin mains." },
      { title: "Quiet flex", body: "Completed task 🥷 without announcing — humble brag." },
      { title: "Cultural note", body: "Historical ninja ≠ cartoon only — depth in Japanese history." },
    ],
    searchIntents: ["ninja emoji", "🥷 meaning", "stealth emoji", "🥷 copy paste"],
    whenNotToUse: ["Racial caricature or mockery.", "Equating real martial artists with cartoon only."],
    faqs: [
      { question: "What does 🥷 mean?", answer: "Ninja — stealth, gaming, quiet skill, martial arts." },
      { question: "🥷 gaming?", answer: "Stealth gameplay and rogue class shorthand." },
    ],
  },

  princess: {
    batchId: BATCH_ID,
    searchTitle: "Princess Emoji (👸) Meaning: Royalty, Disney, and Queen Energy",
    snippetAnswer:
      "👸 Princess marks royalty aesthetic — Disney princess culture, birthday girl, 'treat like royalty', and self-worth affirmations.",
    detailedParagraphs: [
      "Princess (👸) shows tiara princess figure — Unicode symbol for fairy tale and pampering.",
      "Birthday posts crown 👸 the celebrant — main character day energy.",
      "Disney park trips default 👸 — princess meet-and-greet content.",
    ],
    textingMeaning: "'Birthday 👸', 'Princess treatment 👸', 'Disney 👸'.",
    socialMeaning: "Disney TikTok, spa day posts, and daughter birthday albums tag 👸.",
    caution: "'Princess' can patronize — context friendly vs condescending.",
    examples: [
      { context: "Birthday", text: "Her day 👸" },
      { context: "Disney", text: "Castle 👸" },
      { context: "Spa", text: "Treatment 👸" },
      { context: "Affirm", text: "You are 👸" },
      { context: "Party", text: "Theme 👸" },
    ],
    contextBlocks: [
      { title: "Disney culture", body: "👸 park visits and princess dress child content." },
      { title: "Vs 🤴", body: "🤴 prince. 👸 princess — pair royal couple." },
      { title: "Vs 🫅", body: "🫅 person with crown — less gendered royalty." },
    ],
    searchIntents: ["princess emoji", "👸 meaning", "disney princess emoji", "👸 copy paste"],
    whenNotToUse: ["Condescending 'princess' for demanding behavior insults."],
    faqs: [
      { question: "What does 👸 mean?", answer: "Princess — royalty, Disney, birthday, pampering aesthetic." },
      { question: "👸 birthday?", answer: "Common for birthday girl and celebration main-character energy." },
    ],
  },

  prince: {
    batchId: BATCH_ID,
    searchTitle: "Prince Emoji (🤴) Meaning: Prince, Charming, and Royalty",
    snippetAnswer:
      "🤴 Prince marks prince and royalty — fairy tale romance, little boy birthday king, Prince music tribute, and charming partner jokes.",
    detailedParagraphs: [
      "Prince (🤴) shows crowned prince figure — Unicode fairy tale royalty symbol.",
      "Partner praise 'my 🤴' — charming boyfriend meme affectionate.",
      "Royal wedding news spikes 🤴 usage — UK monarchy discourse.",
    ],
    textingMeaning: "'My 🤴', 'Little prince 🤴', 'Royal news 🤴'.",
    socialMeaning: "Disney content, baby boy announcements, and monarchy event threads tag 🤴.",
    caution: "Monarchy politics divisive — 🤴 celebrity vs political context differs.",
    examples: [
      { context: "Partner", text: "My 🤴" },
      { context: "Baby", text: "Little 🤴" },
      { context: "Disney", text: "Charming 🤴" },
      { context: "News", text: "Royal 🤴" },
      { context: "Birthday", text: "King day 🤴" },
    ],
    contextBlocks: [
      { title: "Romance meme", body: "'My prince 🤴' affection — fairy tale partner praise." },
      { title: "Vs 👸", body: "👸 princess. 🤴 prince — couple pairing." },
      { title: "Vs 🫅", body: "🫅 gender-neutral crown. 🤴 male prince specifically." },
    ],
    searchIntents: ["prince emoji", "🤴 meaning", "prince charming emoji", "🤴 copy paste"],
    whenNotToUse: ["Political monarchy debates without care for audience."],
    faqs: [
      { question: "What does 🤴 mean?", answer: "Prince — royalty, charming partner, fairy tale, baby boy." },
      { question: "🤴 vs musician Prince?", answer: "Different — emoji is fairy tale prince; purple music tribute uses other symbols." },
    ],
  },

  "person-with-crown": {
    batchId: BATCH_ID,
    searchTitle: "Person With Crown Emoji (🫅) Meaning: Royalty, Winner, and Main Character",
    snippetAnswer:
      "🫅 Person With Crown marks royalty and winning — crowned champion, main character energy, gender-neutral king/queen, and boss mode.",
    detailedParagraphs: [
      "Person With Crown (🫅) shows figure wearing crown — Unicode gender-neutral royalty symbol added for inclusive king/queen energy.",
      "Sports and esports winners get 🫅 — champion crowned posts.",
      "'Main character 🫅' TikTok trend — protagonist energy day.",
    ],
    textingMeaning: "'Crowned 🫅', 'Winner 🫅', 'Main character 🫅'.",
    socialMeaning: "Champion celebrations, promotion announcements, and self-worth posts tag 🫅.",
    caution: "Self-crown humblebrag tone — playful vs arrogant reads differently.",
    examples: [
      { context: "Win", text: "Crowned 🫅" },
      { context: "Promo", text: "New role 🫅" },
      { context: "Meme", text: "Main char 🫅" },
      { context: "Birthday", text: "Royal day 🫅" },
      { context: "Flex", text: "Boss 🫅" },
    ],
    contextBlocks: [
      { title: "Gender-neutral royalty", body: "🫅 avoids 👸/🤴 gender lock — inclusive crown." },
      { title: "Vs 👑", body: "👑 crown object. 🫅 person wearing crown." },
      { title: "Champion", body: "Tournament wins use 🫅 — esports and sports." },
    ],
    searchIntents: ["person with crown emoji", "🫅 meaning", "crown person emoji", "🫅 copy paste"],
    whenNotToUse: ["Mocking actual royalty victims in news."],
    faqs: [
      { question: "What does 🫅 mean?", answer: "Person with crown — royalty, winner, main character, champion." },
      { question: "🫅 vs 👑?", answer: "🫅 person crowned; 👑 crown icon alone." },
    ],
  },

  "pregnant-person": {
    batchId: BATCH_ID,
    searchTitle: "Pregnant Person Emoji (🫄) Meaning: Pregnancy, Expecting, and Inclusive Announce",
    snippetAnswer:
      "🫄 Pregnant Person marks pregnancy — gender-inclusive expecting announcements, bump updates, and baby-on-the-way posts.",
    detailedParagraphs: [
      "Pregnant Person (🫄) shows pregnant figure — Unicode inclusive pregnancy symbol beyond woman-only 🤰.",
      "Expecting parents share 🫄 in reveal posts — ultrasound and bump timeline.",
      "Healthcare and doula content uses 🫄 for inclusive prenatal care messaging.",
    ],
    textingMeaning: "'Expecting 🫄', 'Bump update 🫄', 'Reveal 🫄'.",
    socialMeaning: "Pregnancy announcements, trimester milestones, and inclusive parenting tag 🫄.",
    caution: "Pregnancy loss sensitive — don't assume 🫄 always happy news.",
    examples: [
      { context: "Reveal", text: "Coming 🫄" },
      { context: "Trimester", text: "Week 20 🫄" },
      { context: "Ultrasound", text: "First pic 🫄" },
      { context: "Support", text: "Congrats 🫄" },
      { context: "Doula", text: "Birth plan 🫄" },
    ],
    contextBlocks: [
      { title: "Inclusive pregnancy", body: "🫄 represents pregnant people beyond 🤰 woman-only default." },
      { title: "Vs 🤰", body: "🤰 woman pregnant. 🫄 gender-neutral pregnant person." },
      { title: "Announcement culture", body: "Creative reveals pair 🫄 with balloons and dates." },
    ],
    searchIntents: ["pregnant person emoji", "🫄 meaning", "pregnancy emoji inclusive", "🫄 copy paste"],
    whenNotToUse: ["Speculating on someone's pregnancy.", "Jokes about pregnancy without consent."],
    faqs: [
      { question: "What does 🫄 mean?", answer: "Pregnant person — expecting, bump, inclusive pregnancy announce." },
      { question: "🫄 vs 🤰?", answer: "🫄 neutral/inclusive; 🤰 woman pregnant specifically." },
    ],
  },

  "breast-feeding": {
    batchId: BATCH_ID,
    searchTitle: "Breast-Feeding Emoji (🤱) Meaning: Nursing, Parenting, and Normalization",
    snippetAnswer:
      "🤱 Breast-Feeding marks nursing — breastfeeding normalization, new parent life, pump schedule posts, and infant feeding support.",
    detailedParagraphs: [
      "Breast-Feeding (🤱) shows nursing parent with baby — Unicode symbol for breastfeeding visibility.",
      "Parenting communities normalize 🤱 in public nursing advocacy — rights and support.",
      "3am feed posts humorously tag 🤱 — newborn exhaustion solidarity.",
    ],
    textingMeaning: "'Nursing 🤱', 'Cluster feed 🤱', 'Support 🤱'.",
    socialMeaning: "Lactation consultant content, new mom groups, and normalize nursing posts use 🤱.",
    caution: "Fed is best — don't shame formula parents with 🤱 superiority.",
    examples: [
      { context: "Newborn", text: "3am 🤱" },
      { context: "Advocacy", text: "Normalize 🤱" },
      { context: "Support", text: "You got this 🤱" },
      { context: "LC", text: "Latch tips 🤱" },
      { context: "Tired", text: "Again 🤱" },
    ],
    contextBlocks: [
      { title: "Normalization", body: "🤱 fights stigma against public nursing — visibility matters." },
      { title: "Vs 🍼", body: "🍼 bottle feeding. 🤱 breast — both valid feeding." },
      { title: "Vs 👶", body: "👶 baby alone. 🤱 feeding act with parent." },
    ],
    searchIntents: ["breastfeeding emoji", "🤱 meaning", "nursing emoji", "🤱 copy paste"],
    whenNotToUse: ["Shaming non-breastfeeding parents.", "Sexualizing nursing content."],
    faqs: [
      { question: "What does 🤱 mean?", answer: "Breast-feeding — nursing, new parent, lactation support." },
      { question: "🤱 advocacy?", answer: "Used to normalize breastfeeding in public and workplace rights." },
    ],
  },

  "health-worker": {
    batchId: BATCH_ID,
    searchTitle: "Health Worker Emoji (🧑‍⚕️) Meaning: Nurse, Doctor, and Healthcare Heroes",
    snippetAnswer:
      "🧑‍⚕️ Health Worker marks healthcare staff — nurses, doctors, med students, hospital shifts, and thank-you hero posts.",
    detailedParagraphs: [
      "Health Worker (🧑‍⚕️) shows figure with medical cross — Unicode neutral healthcare professional symbol.",
      "Shift workers post 🧑‍⚕️ with coffee — 12-hour night shift culture.",
      "Public gratitude campaigns tagged healthcare 🧑‍⚕️ during crisis peaks — hero recognition.",
    ],
    textingMeaning: "'On shift 🧑‍⚕️', 'Med school 🧑‍⚕️', 'Thank you 🧑‍⚕️'.",
    socialMeaning: "Nurse TikTok, residency memes, and hospital appreciation weeks tag 🧑‍⚕️.",
    caution: "Hero worship without systemic support rings hollow — pay and staffing matter.",
    examples: [
      { context: "Shift", text: "Night 🧑‍⚕️" },
      { context: "Thanks", text: "Heroes 🧑‍⚕️" },
      { context: "Student", text: "Clinical 🧑‍⚕️" },
      { context: "Tired", text: "Post-call 🧑‍⚕️" },
      { context: "Grad", text: "White coat 🧑‍⚕️" },
    ],
    contextBlocks: [
      { title: "Neutral provider", body: "🧑‍⚕️ gender-neutral — 👩‍⚕️/👨‍⚕️ variants exist." },
      { title: "Vs 🏥", body: "🏥 hospital building. 🧑‍⚕️ staff person." },
      { title: "Shift culture", body: "Nursing memes bond over 🧑‍⚕️ exhaustion and patient stories (HIPAA safe)." },
    ],
    searchIntents: ["health worker emoji", "🧑‍⚕️ meaning", "nurse emoji", "doctor emoji"],
    whenNotToUse: ["Medical misinformation with 🧑‍⚕️ authority cosplay."],
    faqs: [
      { question: "What does 🧑‍⚕️ mean?", answer: "Health worker — nurse, doctor, med staff, hospital shift." },
      { question: "🧑‍⚕️ vs 👩‍⚕️?", answer: "Neutral default; gendered variants when specified." },
    ],
  },

  student: {
    batchId: BATCH_ID,
    searchTitle: "Student Emoji (🧑‍🎓) Meaning: School, Graduation, and Study Life",
    snippetAnswer:
      "🧑‍🎓 Student marks school and study — exam season, graduation, college life, and 'student loan pain' memes.",
    detailedParagraphs: [
      "Student (🧑‍🎓) shows figure in graduation cap — Unicode symbol for learners at any level.",
      "Finals week threads are 🧑‍🎓 season — library and caffeine culture.",
      "Graduation announcements lead 🧑‍🎓 — cap and gown photos.",
    ],
    textingMeaning: "'Finals 🧑‍🎓', 'Graduated 🧑‍🎓', 'Study 🧑‍🎓'.",
    socialMeaning: "College TikTok, back-to-school posts, and graduation Instagram tag 🧑‍🎓.",
    caution: "Academic stress real — 🧑‍🎓 memes shouldn't mock struggling students.",
    examples: [
      { context: "Finals", text: "Surviving 🧑‍🎓" },
      { context: "Grad", text: "Done 🧑‍🎓" },
      { context: "College", text: "Semester 🧑‍🎓" },
      { context: "Study", text: "All nighter 🧑‍🎓" },
      { context: "School", text: "First day 🧑‍🎓" },
    ],
    contextBlocks: [
      { title: "Graduation cap", body: "🧑‍🎓 includes mortarboard — grad association strong." },
      { title: "Vs 👨‍🎓/👩‍🎓", body: "Gendered student variants — 🧑‍🎓 neutral." },
      { title: "Seasonal", body: "May–June grad + August back-to-school 🧑‍🎓 spikes." },
    ],
    searchIntents: ["student emoji", "🧑‍🎓 meaning", "graduation emoji", "🧑‍🎓 copy paste"],
    whenNotToUse: ["Mocking education level.", "Fake student discount fraud jokes."],
    faqs: [
      { question: "What does 🧑‍🎓 mean?", answer: "Student — school, college, finals, graduation." },
      { question: "🧑‍🎓 only graduation?", answer: "Cap reads grad but used for general student life too." },
    ],
  },

  teacher: {
    batchId: BATCH_ID,
    searchTitle: "Teacher Emoji (🧑‍🏫) Meaning: Educators, School, and Teacher Appreciation",
    snippetAnswer:
      "🧑‍🏫 Teacher marks educators — Teacher Appreciation Week, classroom life, grading memes, and thank-you notes to mentors.",
    detailedParagraphs: [
      "Teacher (🧑‍🏫) shows figure at board — Unicode symbol for educators and instructors.",
      "May Teacher Appreciation Week floods 🧑‍🏫 — gift card and note culture.",
      "Teachers joke about 🧑‍🏫 summer break vs grading reality — meme divide.",
    ],
    textingMeaning: "'Best teacher 🧑‍🏫', 'Classroom 🧑‍🏫', 'Thank you 🧑‍🏫'.",
    socialMeaning: "Teacher TikTok, education policy threads, and end-of-year gifts tag 🧑‍🏫.",
    caution: "Underpaid profession — 🧑‍🏫 thanks need action not just emoji.",
    examples: [
      { context: "Thanks", text: "Changed my life 🧑‍🏫" },
      { context: "Week", text: "Appreciation 🧑‍🏫" },
      { context: "Classroom", text: "Monday 🧑‍🏫" },
      { context: "Grading", text: "Stack 🧑‍🏫" },
      { context: "Retire", text: "Legend 🧑‍🏫" },
    ],
    contextBlocks: [
      { title: "Appreciation Week", body: "US May 🧑‍🏫 spike — cards and classroom supplies gifts." },
      { title: "Vs 🧑‍🎓", body: "🧑‍🎓 student learns. 🧑‍🏫 teacher instructs." },
      { title: "Vs 📚", body: "📚 books. 🧑‍🏫 person teaching profession." },
    ],
    searchIntents: ["teacher emoji", "🧑‍🏫 meaning", "educator emoji", "🧑‍🏫 copy paste"],
    whenNotToUse: ["Blaming teachers for systemic education failures."],
    faqs: [
      { question: "What does 🧑‍🏫 mean?", answer: "Teacher — educator, classroom, appreciation, school." },
      { question: "Teacher Appreciation emoji?", answer: "🧑‍🏫 default during May appreciation posts." },
    ],
  },

  "person-frowning": {
    batchId: BATCH_ID,
    searchTitle: "Person Frowning Emoji (🙍) Meaning: Disappointed, Upset, and Concern",
    snippetAnswer:
      "🙍 Person Frowning marks disappointment and concern — bad news reaction, 'not this again', customer service frustration, neutral gender frown.",
    detailedParagraphs: [
      "Person Frowning (🙍) shows figure with frown — Unicode neutral alternative to gendered 🙍‍♂️/🙍‍♀️.",
      "Customer service vent threads open with 🙍 — billing and hold music pain.",
      "Friends react 🙍 to disappointing plot twists — watch party chat.",
    ],
    textingMeaning: "'Ugh 🙍', 'Disappointed 🙍', 'Not again 🙍'.",
    socialMeaning: "Reaction memes, service complaints, and empathetic concern posts use 🙍.",
    caution: "🙍 at someone's news — ensure empathy not dismissal.",
    examples: [
      { context: "Bad news", text: "Oh no 🙍" },
      { context: "Service", text: "On hold 🙍" },
      { context: "Show", text: "That ending 🙍" },
      { context: "Repeat", text: "Again? 🙍" },
      { context: "Concern", text: "Worried 🙍" },
    ],
    contextBlocks: [
      { title: "Neutral gesture", body: "🙍 default when gender unspecified — inherits to variants." },
      { title: "Vs 😞", body: "😞 sad face. 🙍 full person frowning gesture." },
      { title: "Vs 🙍‍♀️", body: "Gendered variants — same gesture different presentation." },
    ],
    searchIntents: ["person frowning emoji", "🙍 meaning", "frowning emoji", "🙍 copy paste"],
    whenNotToUse: ["Mocking someone's legitimate distress."],
    faqs: [
      { question: "What does 🙍 mean?", answer: "Person frowning — disappointed, upset, concerned reaction." },
      { question: "🙍 neutral?", answer: "Yes — gender-neutral frown before man/woman variants." },
    ],
  },

  "person-pouting": {
    batchId: BATCH_ID,
    searchTitle: "Person Pouting Emoji (🙎) Meaning: Sulk, Annoyed, and Petty",
    snippetAnswer:
      "🙎 Person Pouting marks sulking and petty annoyance — arms crossed pout, 'fine whatever', playful tantrum between friends.",
    detailedParagraphs: [
      "Person Pouting (🙎) shows figure in pout pose — Unicode neutral pout gesture.",
      "Playful couples send 🙎 after minor disagreements — not serious conflict.",
      "Meme culture uses 🙎 for petty refusal — 'I'm not talking to you' joke.",
    ],
    textingMeaning: "'Fine 🙎', 'Whatever 🙎', 'Sulking 🙎'.",
    socialMeaning: "K-drama reaction, petty meme accounts, and friend group banter tag 🙎.",
    caution: "Real anger needs words not 🙎 — don't stonewall with emoji.",
    examples: [
      { context: "Petty", text: "Fine 🙎" },
      { context: "Playful", text: "Mad at you 🙎" },
      { context: "Drama", text: "That scene 🙎" },
      { context: "Refuse", text: "Nope 🙎" },
      { context: "Sulk", text: "Corner 🙎" },
    ],
    contextBlocks: [
      { title: "Playful vs real", body: "🙎 often joke pout — tone from relationship context." },
      { title: "Vs 😤", body: "😤 huffing face. 🙎 full body pout pose." },
      { title: "Neutral base", body: "🙎 inherits meaning to gendered pout variants." },
    ],
    searchIntents: ["person pouting emoji", "🙎 meaning", "pouting emoji", "🙎 copy paste"],
    whenNotToUse: ["Dismissive response to serious hurt feelings."],
    faqs: [
      { question: "What does 🙎 mean?", answer: "Person pouting — sulking, annoyed, petty, playful tantrum." },
      { question: "🙎 vs 🙍?", answer: "🙎 pout/sulk; 🙍 frown disappointment — different upset flavors." },
    ],
  },

  "deaf-person": {
    batchId: BATCH_ID,
    searchTitle: "Deaf Person Emoji (🧏) Meaning: Deaf Community, Sign Language, and Accessibility",
    snippetAnswer:
      "🧏 Deaf Person marks Deaf identity and sign language — accessibility, Deaf culture pride, interpreter requests, and inclusive event planning.",
    detailedParagraphs: [
      "Deaf Person (🧏) shows figure signing — Unicode symbol for Deaf community and hearing accessibility.",
      "Event planners add 🧏 for ASL interpreter availability — inclusion signal.",
      "Deaf creators use 🧏 in content about sign language and Deaf culture — capital D identity.",
    ],
    textingMeaning: "'Interpreter 🧏', 'Deaf pride 🧏', 'Captions please 🧏'.",
    socialMeaning: "Accessibility advocacy, Deaf TikTok, and inclusive conference promo tag 🧏.",
    caution: "Deaf ≠ broken — respect Deaf culture; don't use 🧏 to pity.",
    examples: [
      { context: "Access", text: "ASL provided 🧏" },
      { context: "Pride", text: "Deaf joy 🧏" },
      { context: "Captions", text: "Need CC 🧏" },
      { context: "Event", text: "Interpreter 🧏" },
      { context: "Learn", text: "Sign class 🧏" },
    ],
    contextBlocks: [
      { title: "Deaf culture", body: "Capital-D Deaf community identity — not just hearing loss." },
      { title: "Vs 👂", body: "👂 ear body part. 🧏 Deaf person signing." },
      { title: "Vs 🦻", body: "🦻 ear with hearing aid. 🧏 Deaf signing identity." },
    ],
    searchIntents: ["deaf person emoji", "🧏 meaning", "sign language emoji", "🧏 copy paste"],
    whenNotToUse: ["Mocking sign language.", "Speaking over Deaf voices in advocacy."],
    faqs: [
      { question: "What does 🧏 mean?", answer: "Deaf person — sign language, Deaf culture, accessibility." },
      { question: "🧏 vs hearing aid emoji?", answer: "🧏 Deaf signing identity; 🦻 hearing technology focus." },
    ],
  },

  "leftwards-pushing-hand": {
    batchId: BATCH_ID,
    searchTitle: "Leftwards Pushing Hand Emoji (🫷) Meaning: Stop, Push Away, and Boundary",
    snippetAnswer:
      "🫷 Leftwards Pushing Hand means push away and boundary — 'stop there', rejection meme, keep distance, and new Unicode stop gesture.",
    detailedParagraphs: [
      "Leftwards Pushing Hand (🫷) shows palm pushing left — Unicode 15 gesture for stop/reject/push back.",
      "Boundary posts use 🫷 — 'not interested' dating and sales decline.",
      "Pairs with 🫸 for 'talk to the hand' directional memes.",
    ],
    textingMeaning: "'Stop 🫷', 'Not today 🫷', 'Boundary 🫷'.",
    socialMeaning: "Boundary setting TikTok, rejections memes, and distance humor tag 🫷.",
    caution: "Clear 🫷 better than ghosting — but still be kind in rejection.",
    examples: [
      { context: "Stop", text: "Nope 🫷" },
      { context: "Boundary", text: "Back up 🫷" },
      { context: "Dating", text: "Not interested 🫷" },
      { context: "Sales", text: "No thanks 🫷" },
      { context: "Meme", text: "Talk to hand 🫷" },
    ],
    contextBlocks: [
      { title: "New gesture", body: "🫷 added Unicode 15 — push/stop boundary signal." },
      { title: "Vs ✋", body: "✋ raised stop hand front. 🫷 lateral push away." },
      { title: "Vs 🫸", body: "🫷 pushes left. 🫸 pushes right — mirror pair." },
    ],
    searchIntents: ["leftwards pushing hand emoji", "🫷 meaning", "push hand emoji", "🫷 stop"],
    whenNotToUse: ["Rude dismissal without need.", "Physical push jokes toward real conflict."],
    faqs: [
      { question: "What does 🫷 mean?", answer: "Pushing hand left — stop, boundary, reject, keep away." },
      { question: "🫷 vs ✋?", answer: "🫷 lateral push-away; ✋ front-facing stop palm." },
    ],
  },

  "rightwards-pushing-hand": {
    batchId: BATCH_ID,
    searchTitle: "Rightwards Pushing Hand Emoji (🫸) Meaning: Push Away, Stop, and Reject",
    snippetAnswer:
      "🫸 Rightwards Pushing Hand marks push away right — boundary setting, 'nope', distance, and mirror pair to 🫷 stop gesture.",
    detailedParagraphs: [
      "Rightwards Pushing Hand (🫸) shows palm pushing right — Unicode companion to 🫷 for lateral rejection.",
      "Spam decline and unsubscribe energy gets 🫸 — leave me alone meme.",
      "Work boundaries: 🫸 after-hours emails — not engaging tonight.",
    ],
    textingMeaning: "'Push off 🫸', 'Boundary 🫸', 'Decline 🫸'.",
    socialMeaning: "Work-life boundary posts, meme rejections, and dating nope tag 🫸.",
    caution: "Professional rejection still needs clear words — 🫸 alone ambiguous.",
    examples: [
      { context: "Boundary", text: "After hours 🫸" },
      { context: "Reject", text: "Hard no 🫸" },
      { context: "Spam", text: "Unsubscribe 🫸" },
      { context: "Meme", text: "Away 🫸" },
      { context: "Space", text: "Need room 🫸" },
    ],
    contextBlocks: [
      { title: "Mirror pair", body: "🫸 right push — pair 🫷 left for directional memes." },
      { title: "Work boundary", body: "🫸 declining off-clock Slack — trending boundary culture." },
      { title: "Vs 🙅", body: "🙅 person gesturing no. 🫸 palm push specifically." },
    ],
    searchIntents: ["rightwards pushing hand emoji", "🫸 meaning", "push away emoji", "🫸 copy paste"],
    whenNotToUse: ["Harassment dismissiveness.", "Replacing clear communication in serious no's."],
    faqs: [
      { question: "What does 🫸 mean?", answer: "Pushing hand right — stop, reject, boundary, push away." },
      { question: "🫸 vs 🫷?", answer: "Direction mirror — same meaning, opposite push side." },
    ],
  },

  eye: {
    batchId: BATCH_ID,
    searchTitle: "Eye Emoji (👁️) Meaning: Watch, See, and Surveillance Meme",
    snippetAnswer:
      "👁️ Eye marks seeing and watching — 'I see you', surveillance humor, evil eye aesthetic, and conspiracy 'they're watching' memes.",
    detailedParagraphs: [
      "Eye (👁️) shows single eye — Unicode symbol for vision, attention, and watchfulness.",
      "👁️👄👁️ reaction meme means stunned speechless — iconic combo.",
      "Privacy threads ironically use 👁️ for surveillance capitalism — Big Brother vibes.",
    ],
    textingMeaning: "'Watching 👁️', 'I see 👁️', '👁️👄👁️'.",
    socialMeaning: "Reaction memes, horror aesthetic, and security cam humor tag 👁️.",
    caution: "Stalking undertones creepy — keep 👁️ playful among consenting friends.",
    examples: [
      { context: "Meme", text: "👁️👄👁️" },
      { context: "See", text: "Noticed 👁️" },
      { context: "Horror", text: "Watching 👁️" },
      { context: "Privacy", text: "They see 👁️" },
      { context: "Art", text: "Evil eye 👁️" },
    ],
    contextBlocks: [
      { title: "👁️👄👁️", body: "Stunned silence meme — three emoji combo viral format." },
      { title: "Vs 👀", body: "👀 eyes looking/shifty. 👁️ single intense eye." },
      { title: "Vs 🧿", body: "🧿 nazar amulet protection. 👁️ generic eye symbol." },
    ],
    searchIntents: ["eye emoji", "👁️ meaning", "single eye emoji", "👁️👄👁️"],
    whenNotToUse: ["Stalking implications toward real people.", "Surveillance glorification harmfully."],
    faqs: [
      { question: "What does 👁️ mean?", answer: "Eye — watching, seeing, 👁️👄👁️ meme, surveillance humor." },
      { question: "👁️👄👁️ meaning?", answer: "Speechless stunned reaction — iconic three-emoji meme." },
    ],
  },
};
