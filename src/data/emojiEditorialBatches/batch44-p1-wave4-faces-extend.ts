import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 4 — exclusivity for next face-extend emoji after Wave 3 faces-extend.
 * Differentiation focus: 😰 vs 😨, 😞 vs 😔/😢, 😩 vs 😫, 🥱 vs 😴 vs 😪,
 * 😵 vs 🤯, 🥶 vs 🥵, 🤢 vs 🤮, 🤧 vs 🤒.
 */
const BATCH_ID = "44-p1-wave4-faces-extend";

export const batch44P1Wave4FacesExtend: Record<string, EmojiBatchEnrichment> = {
  "anxious-face-with-sweat": {
    batchId: BATCH_ID,
    searchTitle: "Anxious Face with Sweat Emoji Meaning: Nervous, Stressed, or Scared?",
    snippetAnswer:
      "😰 Anxious Face with Sweat means nervous dread with a cold sweat — worried anticipation more than sudden fright. It is sweat-stress, not pure fear like 😨.",
    detailedParagraphs: [
      "Anxious Face with Sweat (😰) shows a blue-tinged face with a sweat drop. Unicode frames it as anxious; chat culture uses it for “I’m stressed about what’s coming.”",
      "People send 😰 for interviews, waiting on results, awkward confrontations, and “please don’t let this go wrong” moments.",
      "Compared with 😨, 😰 leans into nervous anticipation and social stress. 😨 hits harder as sudden scare or raw fear without the same “waiting sweat” vibe.",
      "It is rarely playful celebration. If you need pure panic shock, use 😱; if you need mild worry, use 😟. Keep 😰 for sweaty anxiety.",
    ],
    textingMeaning:
      "Send 😰 when you are nervous about an outcome — deadlines, tough talks, or “I hope this works.”",
    socialMeaning:
      "Captions use 😰 for stress memes, exam season, and “adulting is hard” posts. Clearer stress signal than plain 😟.",
    caution:
      "Do not 😰 someone’s real panic attack as a joke. Nervous emoji energy can minimize serious anxiety.",
    examples: [
      { context: "Interview", text: "Waiting outside the room 😰" },
      { context: "Results", text: "Grades drop tomorrow 😰" },
      { context: "Awkward", text: "I have to apologize later 😰" },
      { context: "Deadline", text: "Two hours left and still editing 😰" },
      { context: "Social", text: "I left them on read by accident 😰" },
      { context: "Caption", text: "Monday energy 😰" },
    ],
    contextBlocks: [
      {
        title: "😰 vs 😨",
        body: "😨 is fearful / scared reaction. 😰 is anxious sweat — nervous stress about what might happen, not just fright.",
      },
      {
        title: "😰 vs 😅",
        body: "😅 is awkward relief grin with sweat. 😰 is colder, more worried — stress without the laugh.",
      },
      {
        title: "😰 vs 😟",
        body: "😟 is soft concern. 😰 adds visible sweat and higher-stakes nervous energy.",
      },
      {
        title: "Work chats",
        body: "Fine for casual “nervous about the demo.” Prefer clear words for real blockers or mental-health needs.",
      },
    ],
    searchIntents: [
      "anxious face with sweat emoji meaning",
      "😰 meaning in texting",
      "😰 vs 😨",
      "😰 vs 😅",
      "what does 😰 mean",
      "😰 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke-😰 someone’s panic or crisis.",
      "Avoid when you mean sudden scare — use 😨 or 😱.",
      "Skip as a substitute for saying you need help.",
    ],
    faqs: [
      {
        question: "What does 😰 mean in texting?",
        answer:
          "Nervous, stressed anticipation — sweaty anxiety about something upcoming.",
      },
      {
        question: "😰 vs 😨?",
        answer:
          "😨 reads as fear/scare. 😰 reads as anxious stress with a cold sweat.",
      },
      {
        question: "Is 😰 the same as 😅?",
        answer:
          "No. 😅 is awkward chuckle-sweat. 😰 is worried stress without the grin.",
      },
      {
        question: "😰 vs 😟?",
        answer:
          "😟 is milder worry. 😰 feels more intense and physically stressed.",
      },
      {
        question: "Can I use 😰 at work?",
        answer:
          "Yes for light “nervous about the pitch.” Use words for serious concerns.",
      },
    ],
  },

  "fearful-face": {
    batchId: BATCH_ID,
    searchTitle: "Fearful Face Emoji Meaning: Scared, Shocked, or Anxious?",
    snippetAnswer:
      "😨 Fearful Face means fear or fright — wide-eyed scare. It is more sudden fear than the sweaty nervousness of 😰.",
    detailedParagraphs: [
      "Fearful Face (😨) shows open eyes and a small open mouth in a scared look. Unicode frames it as fearful; texts use it for “I’m scared” or “that freaked me out.”",
      "People send 😨 for jump scares, bad news hits, creepy stories, and “wait… what just happened?” fear.",
      "Compared with 😰, 😨 is less about waiting-sweat anxiety and more about fear itself. Compared with 😱, it is quieter — scared, not full scream.",
      "Rarely means mild inconvenience. If you need soft worry, use 😟; if you need screaming panic, use 😱. Keep 😨 for genuine fright.",
    ],
    textingMeaning:
      "Use 😨 when something scared you — spooky clips, alarming updates, or “I’m actually afraid of that.”",
    socialMeaning:
      "Horror captions, true-crime teasers, and “this news is terrifying” posts lean on 😨. Stronger scare signal than 😰.",
    caution:
      "Do not 😨 someone’s real danger as entertainment. Fear emoji without care can feel dismissive.",
    examples: [
      { context: "Horror", text: "That jump scare got me 😨" },
      { context: "News", text: "Did you see what happened 😨" },
      { context: "Creepy", text: "Who is knocking at midnight 😨" },
      { context: "Story", text: "She heard footsteps behind her 😨" },
      { context: "Reaction", text: "I thought someone was in the house 😨" },
      { context: "Caption", text: "Never watching that alone again 😨" },
    ],
    contextBlocks: [
      {
        title: "😨 vs 😰",
        body: "😰 is nervous sweat / anxious stress. 😨 is fearful scare — fright more than waiting-nerves.",
      },
      {
        title: "😨 vs 😱",
        body: "😱 is screaming fear or shocked panic. 😨 is quieter fear — scared eyes without the full scream.",
      },
      {
        title: "😨 vs 😧",
        body: "😧 is anguished / distressed. 😨 centers fear; 😧 leans more pain and distress.",
      },
      {
        title: "Work chats",
        body: "Rarely fits unless the team is joking about a scary demo fail. Prefer calm wording for real incidents.",
      },
    ],
    searchIntents: [
      "fearful face emoji meaning",
      "😨 meaning in texting",
      "😨 vs 😰",
      "😨 vs 😱",
      "what does 😨 mean",
      "😨 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not treat someone’s real fear or danger as a meme.",
      "Avoid when you mean sweaty anxiety — use 😰.",
      "Skip as the only reply to urgent safety news.",
    ],
    faqs: [
      {
        question: "What does 😨 mean in texting?",
        answer:
          "Fear or fright — “that scared me” or “I’m afraid of this.”",
      },
      {
        question: "😨 vs 😰?",
        answer:
          "😰 is anxious nervous sweat. 😨 is fearful scare without the same stress-drop vibe.",
      },
      {
        question: "😨 vs 😱?",
        answer:
          "😱 is louder scream-shock. 😨 is scared but less theatrical.",
      },
      {
        question: "Is 😨 always serious?",
        answer:
          "Often yes for fright, but friends also use it playfully for mild jump scares.",
      },
      {
        question: "Can I use 😨 at work?",
        answer:
          "Only in very casual scare jokes. Use clear language for real problems.",
      },
    ],
  },

  "disappointed-face": {
    batchId: BATCH_ID,
    searchTitle: "Disappointed Face Emoji Meaning: Let Down, Sad, or Upset?",
    snippetAnswer:
      "😞 Disappointed Face means let-down sadness — expectations unmet. It is quieter than crying 😢 and less heavy-melancholy than 😔.",
    detailedParagraphs: [
      "Disappointed Face (😞) shows a downturned mouth and sad eyes. Unicode frames it as disappointed; chat culture uses it for “that didn’t go how I hoped.”",
      "People send 😞 for canceled plans, weak outcomes, mild heartbreak, and “I expected better” moments.",
      "Compared with 😔, 😞 is more clearly “disappointed by something.” 😔 can feel broader low mood. Compared with 😢, there are no tears — quieter letdown.",
      "It is rarely rage. If you need angry frustration, use 😤; if you need soft tears, use 😢. Keep 😞 for disappointed sadness.",
    ],
    textingMeaning:
      "Send 😞 when you feel let down — missed plans, bad news, or “I really wanted that to work.”",
    socialMeaning:
      "Captions use 😞 for soft failure posts, sports losses, and “not what I hoped” updates. Cleaner than vague 😔 for specific disappointment.",
    caution:
      "After someone shares big news, bare 😞 can feel cold. Add empathy words if they need support.",
    examples: [
      { context: "Plans", text: "They canceled last minute 😞" },
      { context: "Results", text: "Didn't get the spot 😞" },
      { context: "Food", text: "The restaurant was closed 😞" },
      { context: "Sports", text: "We were so close 😞" },
      { context: "Friend", text: "I thought you'd come 😞" },
      { context: "Caption", text: "Not the ending I wanted 😞" },
    ],
    contextBlocks: [
      {
        title: "😞 vs 😔",
        body: "😔 is pensive / low mood. 😞 is clearer disappointment — let down by a specific outcome.",
      },
      {
        title: "😞 vs 😢",
        body: "😢 shows tears. 😞 is tearless letdown — quieter sadness without crying.",
      },
      {
        title: "😞 vs 🙁",
        body: "🙁 is a mild frown. 😞 reads more emotionally disappointed, not just slightly unhappy.",
      },
      {
        title: "Work chats",
        body: "Okay for light “missed the mark.” Prefer constructive wording for feedback and reviews.",
      },
    ],
    searchIntents: [
      "disappointed face emoji meaning",
      "😞 meaning in texting",
      "😞 vs 😔",
      "😞 vs 😢",
      "what does 😞 mean",
      "😞 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😞 someone’s achievement to guilt them.",
      "Avoid when you mean tears — use 😢.",
      "Skip as a passive-aggressive dig without saying what you need.",
    ],
    faqs: [
      {
        question: "What does 😞 mean in texting?",
        answer:
          "Disappointed or let down — sad because something didn’t meet expectations.",
      },
      {
        question: "😞 vs 😔?",
        answer:
          "😔 is broader low/pensive mood. 😞 points more directly at disappointment.",
      },
      {
        question: "😞 vs 😢?",
        answer:
          "😢 includes tears. 😞 is quieter letdown without crying.",
      },
      {
        question: "Is 😞 angry?",
        answer:
          "Not by default. It is sadness from unmet hopes; anger needs other faces.",
      },
      {
        question: "Can I use 😞 at work?",
        answer:
          "Yes for casual letdown. Pair with clear feedback for serious issues.",
      },
    ],
  },

  "weary-face": {
    batchId: BATCH_ID,
    searchTitle: "Weary Face Emoji Meaning: Exhausted, Dramatic, or Over It?",
    snippetAnswer:
      "😩 Weary Face means drained exasperation — “I can’t with this.” It is more dramatic overwhelm than the raw exhaustion scream of 😫.",
    detailedParagraphs: [
      "Weary Face (😩) shows a tired, open-mouthed look of exhaustion. Unicode frames it as weary; texting made it the classic “I’m so done” face.",
      "People send 😩 for long days, annoying drama, emotional overload, and playful “why is life like this” moments.",
      "Compared with 😫, 😩 often feels more expressive / meme-dramatic. 😫 leans harder into pure tired pain and fatigue.",
      "Rarely means peaceful sleepiness. If you need sleepy, use 😪 or 😴; if you need soft sad, use 😔. Keep 😩 for weary overwhelm.",
    ],
    textingMeaning:
      "Use 😩 when you are emotionally wiped or dramatically over a situation — “this is too much.”",
    socialMeaning:
      "Reels and captions love 😩 for relatable burnout humor. Stronger “I’m done” signal than plain 😐.",
    caution:
      "In serious support chats, bare 😩 can sound like you are centering your drama. Match tone to their need.",
    examples: [
      { context: "Workday", text: "Nine meetings and counting 😩" },
      { context: "Drama", text: "I cannot deal with this again 😩" },
      { context: "Homework", text: "Still not done 😩" },
      { context: "Parenting", text: "They woke up at 5 again 😩" },
      { context: "Friend", text: "Why does everything happen at once 😩" },
      { context: "Caption", text: "End of semester energy 😩" },
    ],
    contextBlocks: [
      {
        title: "😩 vs 😫",
        body: "😫 is tired face — raw fatigue / “I’m exhausted.” 😩 is weary with more dramatic “I’m over it” energy.",
      },
      {
        title: "😩 vs 😮‍💨",
        body: "😮‍💨 is a sigh of relief or release. 😩 is ongoing weary overwhelm, not exhale.",
      },
      {
        title: "😩 vs 😪",
        body: "😪 is sleepy / drowsy. 😩 is emotional exhaustion more than bedtime sleepiness.",
      },
      {
        title: "Work chats",
        body: "Fine among close teammates for burnout jokes. Prefer clear capacity language with managers.",
      },
    ],
    searchIntents: [
      "weary face emoji meaning",
      "😩 meaning in texting",
      "😩 vs 😫",
      "😩 vs 😮‍💨",
      "what does 😩 mean",
      "😩 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😩 over someone’s serious problem as your main reaction.",
      "Avoid when you mean sleepy — use 😪 or 😴.",
      "Skip as a vague complaint when you need to ask for help.",
    ],
    faqs: [
      {
        question: "What does 😩 mean in texting?",
        answer:
          "Weary, overwhelmed, or dramatically “I’m so done” exhaustion.",
      },
      {
        question: "😩 vs 😫?",
        answer:
          "😫 feels like raw tired pain. 😩 often reads more expressive / over-it weary.",
      },
      {
        question: "Is 😩 always sad?",
        answer:
          "Not always — it can be playful exaggeration about a long day.",
      },
      {
        question: "😩 vs 😪?",
        answer:
          "😪 is drowsy sleepiness. 😩 is emotional or situational weariness.",
      },
      {
        question: "Can I use 😩 at work?",
        answer:
          "Casually with trusted teammates. Use clearer words for workload issues.",
      },
    ],
  },

  "tired-face": {
    batchId: BATCH_ID,
    searchTitle: "Tired Face Emoji Meaning: Exhausted, Frustrated, or Fed Up?",
    snippetAnswer:
      "😫 Tired Face means hard exhaustion — wiped out and strained. It is more raw fatigue than the dramatic weary vibe of 😩.",
    detailedParagraphs: [
      "Tired Face (😫) shows a scrunched, open-mouthed look of fatigue. Unicode frames it as tired; chats use it for “I have nothing left.”",
      "People send 😫 after all-nighters, tough workouts, emotional crying spells, and “I can’t keep going” moments.",
      "Compared with 😩, 😫 leans into physical/emotional depletion. 😩 often carries more meme-style exasperation.",
      "It is not peaceful sleep. If you need sleeping, use 😴; if you need a yawn, use 🥱. Keep 😫 for strained tiredness.",
    ],
    textingMeaning:
      "Send 😫 when you are genuinely exhausted or emotionally spent — harder than a casual yawn.",
    socialMeaning:
      "Gym captions, study grind posts, and “crying tired” memes use 😫. Stronger depletion signal than 😩 for many readers.",
    caution:
      "Do not 😫 someone’s illness as your punchline. Tired-face humor can land wrong near real health struggles.",
    examples: [
      { context: "All-nighter", text: "Finished at 4am 😫" },
      { context: "Gym", text: "Legs are gone 😫" },
      { context: "Kids", text: "No nap day 😫" },
      { context: "Cry", text: "I cried myself out 😫" },
      { context: "Travel", text: "Three layovers later 😫" },
      { context: "Caption", text: "Running on empty 😫" },
    ],
    contextBlocks: [
      {
        title: "😫 vs 😩",
        body: "😩 is weary / “I’m over it.” 😫 is tired face — more strained, depleted exhaustion.",
      },
      {
        title: "😫 vs 🥱",
        body: "🥱 is yawning / getting sleepy. 😫 is already wiped — fatigue pain, not a polite yawn.",
      },
      {
        title: "😫 vs 😴",
        body: "😴 is sleeping. 😫 is still awake and suffering through tiredness.",
      },
      {
        title: "Work chats",
        body: "Okay for “I’m wiped after launch.” Prefer rest/PTO language for real burnout conversations.",
      },
    ],
    searchIntents: [
      "tired face emoji meaning",
      "😫 meaning in texting",
      "😫 vs 😩",
      "😫 vs 🥱",
      "what does 😫 mean",
      "😫 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not mock someone’s fatigue or illness with bare 😫.",
      "Avoid when you mean peacefully asleep — use 😴.",
      "Skip if you only mean a light yawn — use 🥱.",
    ],
    faqs: [
      {
        question: "What does 😫 mean in texting?",
        answer:
          "Hard tiredness — exhausted, strained, or emotionally spent.",
      },
      {
        question: "😫 vs 😩?",
        answer:
          "😩 often feels dramatic/weary. 😫 feels more raw tired and depleted.",
      },
      {
        question: "😫 vs 🥱?",
        answer:
          "🥱 is yawning sleepiness. 😫 is deeper exhaustion already hitting.",
      },
      {
        question: "Is 😫 the same as 😴?",
        answer:
          "No. 😴 is sleeping. 😫 is awake and wiped out.",
      },
      {
        question: "Can I use 😫 at work?",
        answer:
          "Yes casually after crunch. Use words when you need real recovery time.",
      },
    ],
  },

  "yawning-face": {
    batchId: BATCH_ID,
    searchTitle: "Yawning Face Emoji Meaning: Bored, Sleepy, or Ready for Bed?",
    snippetAnswer:
      "🥱 Yawning Face means a yawn — sleepy or bored. It is mid-yawn, not already asleep like 😴 or tear-drowsy like 😪.",
    detailedParagraphs: [
      "Yawning Face (🥱) shows a face mid-yawn with a hand. Unicode frames it as yawning; texting uses it for boredom, late nights, and “I’m fading.”",
      "People send 🥱 for dull meetings, late texts, bedtime cues, and polite “this is putting me to sleep” jokes.",
      "Compared with 😴, 🥱 is still awake and yawning. Compared with 😪, it is less tear-bubble sleepy and more open-mouth yawn.",
      "Rarely means deep emotional exhaustion. If you need weary overwhelm, use 😩; if you need sleeping, use 😴. Keep 🥱 for yawns.",
    ],
    textingMeaning:
      "Use 🥱 to signal sleepiness or mild boredom — “I’m yawning through this.”",
    socialMeaning:
      "Captions use 🥱 for slow days, boring content callouts, and night-owl posts. Clearer yawn than 😪 for many.",
    caution:
      "Yawning at someone’s story can feel rude. Soften with words if you still care about the topic.",
    examples: [
      { context: "Bedtime", text: "Heading out soon 🥱" },
      { context: "Meeting", text: "This call is endless 🥱" },
      { context: "Night text", text: "Sorry I zoned out 🥱" },
      { context: "Class", text: "Lecture mode activated 🥱" },
      { context: "Friend", text: "Come over or I'm falling asleep 🥱" },
      { context: "Caption", text: "Sunday afternoon vibes 🥱" },
    ],
    contextBlocks: [
      {
        title: "🥱 vs 😴",
        body: "😴 is sleeping (zzz). 🥱 is yawning while still awake — sleepy or bored, not knocked out.",
      },
      {
        title: "🥱 vs 😪",
        body: "😪 is sleepy face with a tear-like bubble — drowsy sadness/sleepiness. 🥱 is an open yawn.",
      },
      {
        title: "🥱 vs 😩",
        body: "😩 is weary overwhelm. 🥱 is a yawn — sleepiness or boredom, not dramatic exhaustion.",
      },
      {
        title: "Work chats",
        body: "Risky in live meetings — can read as disrespect. Safer for after-hours “I’m signing off.”",
      },
    ],
    searchIntents: [
      "yawning face emoji meaning",
      "🥱 meaning in texting",
      "🥱 vs 😴",
      "🥱 vs 😪",
      "what does 🥱 mean",
      "🥱 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🥱 someone’s presentation if you want to stay polite.",
      "Avoid when you mean already asleep — use 😴.",
      "Skip as a substitute for saying the topic is unimportant.",
    ],
    faqs: [
      {
        question: "What does 🥱 mean in texting?",
        answer:
          "A yawn — sleepy, bored, or ready for bed.",
      },
      {
        question: "🥱 vs 😴?",
        answer:
          "😴 means sleeping. 🥱 means yawning while still awake.",
      },
      {
        question: "🥱 vs 😪?",
        answer:
          "😪 is drowsy/sleepy face. 🥱 is specifically a yawn.",
      },
      {
        question: "Does 🥱 always mean bored?",
        answer:
          "No — it often means tired. Context decides boredom vs bedtime.",
      },
      {
        question: "Can I use 🥱 at work?",
        answer:
          "Better for “signing off.” Avoid during someone’s live talk.",
      },
    ],
  },

  "sleeping-face": {
    batchId: BATCH_ID,
    searchTitle: "Sleeping Face Emoji Meaning: Asleep, Ignoring, or Dead Tired?",
    snippetAnswer:
      "😴 Sleeping Face means asleep — zzz out. It is fully sleeping, not mid-yawn like 🥱 or drowsy-tear like 😪.",
    detailedParagraphs: [
      "Sleeping Face (😴) shows a face with closed eyes and a sleep bubble. Unicode frames it as sleeping; chats use it for bedtime, naps, and “I’m out.”",
      "People send 😴 for goodnight texts, “I fell asleep,” quiet hours, and joking “mentally checked out.”",
      "Compared with 🥱, 😴 is already sleeping, not yawning. Compared with 😪, it is restful sleep more than sleepy-sad drowsiness.",
      "Rarely means emotional weariness alone. If you need “I’m over it,” use 😩; if you need a yawn, use 🥱. Keep 😴 for sleep.",
    ],
    textingMeaning:
      "Send 😴 for sleep, naps, or “I’m going offline for the night.”",
    socialMeaning:
      "Goodnight posts, nap selfies, and “do not disturb” captions use 😴. Clearest “asleep” face in the sleepy trio.",
    caution:
      "Do not 😴 someone’s emergency message. Sleeping emoji can look like you ignored them on purpose.",
    examples: [
      { context: "Goodnight", text: "Talk tomorrow 😴" },
      { context: "Nap", text: "Out for an hour 😴" },
      { context: "Late reply", text: "Sorry I passed out 😴" },
      { context: "Weekend", text: "Do not wake me 😴" },
      { context: "Travel", text: "Sleeping on the flight 😴" },
      { context: "Caption", text: "Early bedtime wins 😴" },
    ],
    contextBlocks: [
      {
        title: "😴 vs 🥱",
        body: "🥱 is yawning / getting sleepy. 😴 is already asleep with zzz.",
      },
      {
        title: "😴 vs 😪",
        body: "😪 is sleepy/drowsy (often with a tear bubble). 😴 is peaceful sleeping.",
      },
      {
        title: "😴 vs 💤",
        body: "💤 is the sleep symbol alone. 😴 is a sleeping face — more personal “I’m out.”",
      },
      {
        title: "Work chats",
        body: "Fine for “offline tonight.” Prefer status tools for real availability.",
      },
    ],
    searchIntents: [
      "sleeping face emoji meaning",
      "😴 meaning in texting",
      "😴 vs 🥱",
      "😴 vs 😪",
      "what does 😴 mean",
      "😴 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😴 urgent messages you should answer.",
      "Avoid when you mean bored yawn — use 🥱.",
      "Skip as a joke when someone needs you awake and present.",
    ],
    faqs: [
      {
        question: "What does 😴 mean in texting?",
        answer:
          "Sleeping or going to sleep — zzz, naps, goodnight.",
      },
      {
        question: "😴 vs 🥱?",
        answer:
          "🥱 is yawning. 😴 is already asleep.",
      },
      {
        question: "😴 vs 😪?",
        answer:
          "😪 is drowsy/sleepy. 😴 is fully sleeping.",
      },
      {
        question: "Can 😴 mean ignoring someone?",
        answer:
          "Sometimes people joke that way, but it usually means sleep. Tone matters.",
      },
      {
        question: "Can I use 😴 at work?",
        answer:
          "Yes for “signing off.” Don’t use it to dodge deadlines.",
      },
    ],
  },

  "sleepy-face": {
    batchId: BATCH_ID,
    searchTitle: "Sleepy Face Emoji Meaning: Drowsy, Tired, or About to Cry?",
    snippetAnswer:
      "😪 Sleepy Face means drowsy sleepiness — often with a tear-like bubble. It is sleepy, not fully asleep like 😴 or mid-yawn like 🥱.",
    detailedParagraphs: [
      "Sleepy Face (😪) shows a closed-eye drowsy face with a blue bubble (often read as a tear or snot of sleepiness). Unicode frames it as sleepy.",
      "People send 😪 for late-night drowsiness, emotional tiredness, and soft “I’m fading” texts that feel a bit sadder than a plain yawn.",
      "Compared with 😴, 😪 is still awake and drowsy. Compared with 🥱, it is less “open yawn” and more heavy-eyed sleepy.",
      "It can be mistaken for crying. If you need clear tears, use 😢; if you need sleeping, use 😴. Keep 😪 for drowsy sleepy.",
    ],
    textingMeaning:
      "Use 😪 when you are drowsy and fading — sleepiness with a soft, heavy feel.",
    socialMeaning:
      "Night-owl captions and “emotional exhaustion lite” posts use 😪. Less “knocked out” than 😴, less yawn-joke than 🥱.",
    caution:
      "Because of the bubble, some readers see crying. Clarify if you mean sleepy, not sad tears.",
    examples: [
      { context: "Late night", text: "Eyes won't stay open 😪" },
      { context: "After work", text: "I'm fading on the couch 😪" },
      { context: "Study", text: "One more page… maybe 😪" },
      { context: "Friend", text: "Too sleepy to go out 😪" },
      { context: "Morning", text: "Need coffee badly 😪" },
      { context: "Caption", text: "Monday morning brain 😪" },
    ],
    contextBlocks: [
      {
        title: "😪 vs 😴",
        body: "😴 is sleeping. 😪 is sleepy/drowsy while still (barely) awake.",
      },
      {
        title: "😪 vs 🥱",
        body: "🥱 is a clear yawn. 😪 is heavy-eyed sleepiness, sometimes misread as a tear.",
      },
      {
        title: "😪 vs 😢",
        body: "😢 is crying sadness. 😪’s bubble is sleepiness, not intentional tears — but confusion happens.",
      },
      {
        title: "Work chats",
        body: "Okay for “heading to bed.” Prefer clear wording if you might look upset.",
      },
    ],
    searchIntents: [
      "sleepy face emoji meaning",
      "😪 meaning in texting",
      "😪 vs 😴",
      "😪 vs 🥱",
      "what does 😪 mean",
      "😪 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not assume 😪 always means crying — clarify if needed.",
      "Avoid when you mean fully asleep — use 😴.",
      "Skip if a yawn joke fits better — use 🥱.",
    ],
    faqs: [
      {
        question: "What does 😪 mean in texting?",
        answer:
          "Sleepy or drowsy — fading, heavy-eyed, ready for rest.",
      },
      {
        question: "😪 vs 😴?",
        answer:
          "😴 is asleep. 😪 is sleepy but not fully out.",
      },
      {
        question: "Is 😪 crying?",
        answer:
          "Usually no — the bubble is sleepiness. Some people still misread it as tears.",
      },
      {
        question: "😪 vs 🥱?",
        answer:
          "🥱 is yawning. 😪 is drowsy sleepy face without the big yawn.",
      },
      {
        question: "Can I use 😪 at work?",
        answer:
          "Yes for casual “I’m wiped.” Add words so it doesn’t look like sadness.",
      },
    ],
  },

  "dizzy": {
    batchId: BATCH_ID,
    searchTitle: "Dizzy Face Emoji Meaning: Dizzy, Knocked Out, or Overwhelmed?",
    snippetAnswer:
      "😵 Dizzy Face means dizzy, stunned, or knocked silly. It is disoriented spiral energy — not the mind-blown revelation of 🤯.",
    detailedParagraphs: [
      "Dizzy Face (😵) shows X eyes (or spiral eyes on some platforms) and a stunned look. Unicode frames it as dizzy; chats use it for “I’m spinning” or “that wrecked me.”",
      "People send 😵 after wild nights, confusing news, motion sickness jokes, and “I can’t think straight” moments.",
      "Compared with 🤯, 😵 is disorientation / knockout more than exploding realization. 🤯 is “my mind blew”; 😵 is “I’m woozy.”",
      "Rarely means peaceful sleep. If you need sleeping, use 😴; if you need sick nausea, use 🤢. Keep 😵 for dizzy stun.",
    ],
    textingMeaning:
      "Send 😵 when you feel dizzy, overwhelmed into blankness, or jokingly knocked out by something.",
    socialMeaning:
      "Party aftermath posts, puzzle fails, and “brain left the chat” captions use 😵. Different from 🤯’s awe/shock genius vibe.",
    caution:
      "Do not 😵 someone’s real concussion or medical dizziness as a punchline.",
    examples: [
      { context: "Hangover", text: "Everything is spinning 😵" },
      { context: "News", text: "I can't process that 😵" },
      { context: "Workout", text: "Too many burpees 😵" },
      { context: "Study", text: "Brain is mush 😵" },
      { context: "Ride", text: "That roller coaster got me 😵" },
      { context: "Caption", text: "Monday scrambled my head 😵" },
    ],
    contextBlocks: [
      {
        title: "😵 vs 🤯",
        body: "🤯 is exploding head — shocked amazement or mind blown. 😵 is dizzy/stunned disorientation, not revelation.",
      },
      {
        title: "😵 vs 😵‍💫",
        body: "😵‍💫 is face with spiral eyes — similar dizzy cousin. 😵 is the classic X-eye / dizzy face many keyboards still use.",
      },
      {
        title: "😵 vs 🥴",
        body: "🥴 is woozy / drunk-uneven. 😵 is more knockout dizzy or stunned blank.",
      },
      {
        title: "Work chats",
        body: "Fine for light “that meeting spun me.” Prefer clear words for real capacity issues.",
      },
    ],
    searchIntents: [
      "dizzy face emoji meaning",
      "😵 meaning in texting",
      "😵 vs 🤯",
      "😵 vs 😵‍💫",
      "what does 😵 mean",
      "😵 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke-😵 real medical dizziness or head injury.",
      "Avoid when you mean mind-blown awe — use 🤯.",
      "Skip as the only reply to serious confusing news someone shared carefully.",
    ],
    faqs: [
      {
        question: "What does 😵 mean in texting?",
        answer:
          "Dizzy, stunned, or knocked silly — disoriented more than amazed.",
      },
      {
        question: "😵 vs 🤯?",
        answer:
          "🤯 is mind blown. 😵 is dizzy/stunned without the explosion of insight.",
      },
      {
        question: "Is 😵 the same as 😵‍💫?",
        answer:
          "Close cousins. 😵‍💫 emphasizes spiral eyes; 😵 is the classic dizzy face.",
      },
      {
        question: "Does 😵 mean dead?",
        answer:
          "Sometimes people joke that way with X eyes, but it usually means dizzy/stunned.",
      },
      {
        question: "Can I use 😵 at work?",
        answer:
          "Yes for casual overwhelm jokes. Use clear language for real problems.",
      },
    ],
  },

  "exploding-head": {
    batchId: BATCH_ID,
    searchTitle: "Exploding Head Emoji Meaning: Mind Blown, Shocked, or Overwhelmed?",
    snippetAnswer:
      "🤯 Exploding Head means mind blown — shocked amazement or overload. It is revelation/shock, not woozy dizzy like 😵.",
    detailedParagraphs: [
      "Exploding Head (🤯) shows a head bursting open. Unicode frames it as exploding head; internet culture made it the “mind blown” reaction.",
      "People send 🤯 for wild facts, plot twists, huge news, and “I never thought of that” moments.",
      "Compared with 😵, 🤯 is mental explosion — awe, shock, or information overload — not physical dizzy spin.",
      "Rarely means mild agreement. If you need soft wow, use 😮; if you need fear, use 😨. Keep 🤯 for blown-mind shock.",
    ],
    textingMeaning:
      "Use 🤯 when something shocks your brain — amazing, unbelievable, or too much to process.",
    socialMeaning:
      "Viral facts, product launches, and twist endings love 🤯. Stronger “wow my brain” than 😵’s knockout feel.",
    caution:
      "Spamming 🤯 on everything dilutes it. Save it for real surprise or overload.",
    examples: [
      { context: "Fact", text: "Wait that can't be real 🤯" },
      { context: "Twist", text: "The ending destroyed me 🤯" },
      { context: "News", text: "They actually did it 🤯" },
      { context: "Idea", text: "That solution is genius 🤯" },
      { context: "Price", text: "How is it that cheap 🤯" },
      { context: "Caption", text: "My brain needed a minute 🤯" },
    ],
    contextBlocks: [
      {
        title: "🤯 vs 😵",
        body: "😵 is dizzy/stunned disorientation. 🤯 is mind blown — shocked amazement or mental overload.",
      },
      {
        title: "🤯 vs 😲",
        body: "😲 is astonished face. 🤯 escalates to exploding-brain intensity.",
      },
      {
        title: "🤯 vs 😱",
        body: "😱 is screaming fear/shock. 🤯 is more “wow / brain melt” than terror.",
      },
      {
        title: "Work chats",
        body: "Great for celebrating breakthroughs. Avoid overusing on routine updates.",
      },
    ],
    searchIntents: [
      "exploding head emoji meaning",
      "🤯 meaning in texting",
      "🤯 vs 😵",
      "🤯 vs 😲",
      "what does 🤯 mean",
      "🤯 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤯 tragic news as entertainment.",
      "Avoid when you mean physical dizziness — use 😵.",
      "Skip if a simple 😮 wow is enough.",
    ],
    faqs: [
      {
        question: "What does 🤯 mean in texting?",
        answer:
          "Mind blown — shocked, amazed, or mentally overloaded.",
      },
      {
        question: "🤯 vs 😵?",
        answer:
          "😵 is dizzy/stunned. 🤯 is exploding realization or wow-shock.",
      },
      {
        question: "Is 🤯 always positive?",
        answer:
          "No — it can be positive awe or negative overwhelm. Words clarify.",
      },
      {
        question: "🤯 vs 😲?",
        answer:
          "😲 is astonished. 🤯 is louder “my head exploded” intensity.",
      },
      {
        question: "Can I use 🤯 at work?",
        answer:
          "Yes for big wins or wild insights. Don’t spam it on every email.",
      },
    ],
  },

  "cold-face": {
    batchId: BATCH_ID,
    searchTitle: "Cold Face Emoji Meaning: Freezing, Icy Reaction, or Weather?",
    snippetAnswer:
      "🥶 Cold Face means freezing cold — icy weather or “that was cold.” It is the chill opposite of hot 🥵.",
    detailedParagraphs: [
      "Cold Face (🥶) shows a blue freezing face with clenched teeth. Unicode frames it as cold; chats use it for weather and icy vibes.",
      "People send 🥶 for winter mornings, AC blast, brain-freeze, and “that burn was cold” social reactions.",
      "Compared with 🥵, 🥶 is cold/freezing. 🥵 is overheating. They are temperature twins with opposite meaning.",
      "Rarely means sadness alone. If you need emotional coldness in words, say it; emoji 🥶 is primarily temperature/chill reaction.",
    ],
    textingMeaning:
      "Send 🥶 when you are freezing, got brain freeze, or reacting to an icy comment.",
    socialMeaning:
      "Weather posts, winter fashion, and “cold take” replies use 🥶. Clear opposite of 🥵 heat complaints.",
    caution:
      "Joking 🥶 about someone’s cold home or hardship can feel tone-deaf. Check context.",
    examples: [
      { context: "Weather", text: "It's 10 degrees out 🥶" },
      { context: "AC", text: "Why is the office like this 🥶" },
      { context: "Drink", text: "Brain freeze 🥶" },
      { context: "Burn", text: "That reply was cold 🥶" },
      { context: "Pool", text: "Water is not warm yet 🥶" },
      { context: "Caption", text: "Winter mode unlocked 🥶" },
    ],
    contextBlocks: [
      {
        title: "🥶 vs 🥵",
        body: "🥵 is hot face — overheating. 🥶 is cold face — freezing. Same “extreme temperature” energy, opposite pole.",
      },
      {
        title: "🥶 vs ❄️",
        body: "❄️ is a snowflake symbol. 🥶 is a freezing face reacting to cold.",
      },
      {
        title: "🥶 vs 😨",
        body: "😨 is fearful. Blue tones can look similar at a glance, but 🥶 is cold, not scared.",
      },
      {
        title: "Work chats",
        body: "Fine for “office is freezing.” Prefer facilities requests in plain language.",
      },
    ],
    searchIntents: [
      "cold face emoji meaning",
      "🥶 meaning in texting",
      "🥶 vs 🥵",
      "🥶 vs ❄️",
      "what does 🥶 mean",
      "🥶 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🥶 someone’s real hardship as a weather joke.",
      "Avoid when you mean fear — use 😨.",
      "Skip if you mean hot/sweaty — use 🥵.",
    ],
    faqs: [
      {
        question: "What does 🥶 mean in texting?",
        answer:
          "Freezing cold — weather chill, brain freeze, or an icy reaction.",
      },
      {
        question: "🥶 vs 🥵?",
        answer:
          "🥵 is too hot. 🥶 is too cold. Temperature opposites.",
      },
      {
        question: "Can 🥶 mean a cold insult?",
        answer:
          "Yes sometimes — “that was cold” — but weather is the primary use.",
      },
      {
        question: "🥶 vs ❄️?",
        answer:
          "❄️ is snow/cold symbol. 🥶 is a freezing face.",
      },
      {
        question: "Can I use 🥶 at work?",
        answer:
          "Yes for casual temperature talk. Keep insults out of professional threads.",
      },
    ],
  },

  "nauseated-face": {
    batchId: BATCH_ID,
    searchTitle: "Nauseated Face Emoji Meaning: Sick, Grossed Out, or Queasy?",
    snippetAnswer:
      "🤢 Nauseated Face means queasy or disgusted — green sick feeling. It is nausea, not full vomiting like 🤮.",
    detailedParagraphs: [
      "Nauseated Face (🤢) shows a green face on the edge of sickness. Unicode frames it as nauseated; chats use it for “I feel sick” or “that’s gross.”",
      "People send 🤢 for bad food, motion sickness, cringey content, and “my stomach turned.”",
      "Compared with 🤮, 🤢 is pre-vomit queasiness or disgust. 🤮 is actively vomiting — stronger “I’m throwing up” energy.",
      "Rarely means mild dislike alone. If you need soft dislike, use 👎 or words; if you need full puke, use 🤮. Keep 🤢 for queasy disgust.",
    ],
    textingMeaning:
      "Use 🤢 when you feel queasy or something disgusts you — sick-to-stomach energy.",
    socialMeaning:
      "Gross-out videos, food fails, and hangover posts use 🤢. Softer than 🤮 for “almost sick.”",
    caution:
      "Do not 🤢 someone’s body, disability, or pregnancy symptoms as a joke.",
    examples: [
      { context: "Food", text: "That smell 🤢" },
      { context: "Hangover", text: "Stomach is not okay 🤢" },
      { context: "Cringe", text: "I can't watch this 🤢" },
      { context: "Car", text: "Winding roads got me 🤢" },
      { context: "News", text: "The details were too much 🤢" },
      { context: "Caption", text: "Tried the dare food 🤢" },
    ],
    contextBlocks: [
      {
        title: "🤢 vs 🤮",
        body: "🤮 is face vomiting — full throw-up. 🤢 is nauseated/queasy — sick feeling before or without vomiting.",
      },
      {
        title: "🤢 vs 😷",
        body: "😷 is face with medical mask — illness caution. 🤢 is green nausea/disgust.",
      },
      {
        title: "🤢 vs 😖",
        body: "😖 is distressed discomfort. 🤢 specifically sells queasy/gross stomach energy.",
      },
      {
        title: "Work chats",
        body: "Okay for “I’m sick today.” Prefer clear sick-day language with managers.",
      },
    ],
    searchIntents: [
      "nauseated face emoji meaning",
      "🤢 meaning in texting",
      "🤢 vs 🤮",
      "🤢 vs 😷",
      "what does 🤢 mean",
      "🤢 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤢 someone’s appearance or medical condition.",
      "Avoid when you mean full vomiting — use 🤮.",
      "Skip as a cruel reaction to someone’s food photo.",
    ],
    faqs: [
      {
        question: "What does 🤢 mean in texting?",
        answer:
          "Nauseated or disgusted — queasy, grossed out, sick to the stomach.",
      },
      {
        question: "🤢 vs 🤮?",
        answer:
          "🤮 is vomiting. 🤢 is nauseated/queasy without the full puke.",
      },
      {
        question: "Can 🤢 mean cringe?",
        answer:
          "Yes — people use it for secondhand embarrassment and gross content.",
      },
      {
        question: "🤢 vs 😷?",
        answer:
          "😷 suggests masked illness. 🤢 is green nausea/disgust.",
      },
      {
        question: "Can I use 🤢 at work?",
        answer:
          "Yes for “feeling sick.” Keep gross-out jokes out of formal threads.",
      },
    ],
  },

  "face-vomiting": {
    batchId: BATCH_ID,
    searchTitle: "Face Vomiting Emoji Meaning: Throwing Up, Gross, or That Bad?",
    snippetAnswer:
      "🤮 Face Vomiting means throwing up — extreme disgust or actual sickness. It is stronger than queasy 🤢.",
    detailedParagraphs: [
      "Face Vomiting (🤮) shows a face actively vomiting. Unicode frames it as vomiting; internet slang also uses it for “that’s vile.”",
      "People send 🤮 for food poisoning jokes, hangover puke, and extreme “I hate this” reactions.",
      "Compared with 🤢, 🤮 is the full event — vomit, not just nausea. Escalation from queasy to “I’m throwing up.”",
      "It is graphic. If you need soft dislike, use words or 🤢. Keep 🤮 for maximum gross or literal vomit.",
    ],
    textingMeaning:
      "Send 🤮 for literal vomiting or extreme disgust — the nuclear gross-out face.",
    socialMeaning:
      "Gross challenges, hangover memes, and “delete this” reactions use 🤮. Louder than 🤢 for emphatic rejection.",
    caution:
      "Graphic vomit emoji can upset people. Avoid around eating disorders, pregnancy, or illness sensitivity.",
    examples: [
      { context: "Sick", text: "Been throwing up all night 🤮" },
      { context: "Food", text: "That was not edible 🤮" },
      { context: "Hangover", text: "Never drinking again 🤮" },
      { context: "Cringe", text: "I actually can't 🤮" },
      { context: "Smell", text: "The fridge won 🤮" },
      { context: "Caption", text: "Dare gone wrong 🤮" },
    ],
    contextBlocks: [
      {
        title: "🤮 vs 🤢",
        body: "🤢 is nauseated/queasy. 🤮 is face vomiting — full throw-up or extreme “barf” reaction.",
      },
      {
        title: "🤮 vs 😷",
        body: "😷 is masked illness. 🤮 is explicit vomiting/disgust.",
      },
      {
        title: "🤮 vs 🥴",
        body: "🥴 is woozy/uneven. 🤮 is specifically vomit-level sickness or disgust.",
      },
      {
        title: "Work chats",
        body: "Only for clear “I’m sick / vomiting.” Too graphic for most professional banter.",
      },
    ],
    searchIntents: [
      "face vomiting emoji meaning",
      "🤮 meaning in texting",
      "🤮 vs 🤢",
      "🤮 vs 😷",
      "what does 🤮 mean",
      "🤮 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤮 someone’s body, meal, or medical issue as an insult.",
      "Avoid when mild queasy fits — use 🤢.",
      "Skip in sensitive health or food contexts without care.",
    ],
    faqs: [
      {
        question: "What does 🤮 mean in texting?",
        answer:
          "Vomiting or extreme disgust — stronger than nauseated 🤢.",
      },
      {
        question: "🤮 vs 🤢?",
        answer:
          "🤢 is queasy. 🤮 is throwing up / full barf energy.",
      },
      {
        question: "Is 🤮 only literal?",
        answer:
          "No — slang uses it for “that’s disgusting,” not only real vomit.",
      },
      {
        question: "🤮 vs 😷?",
        answer:
          "😷 suggests illness with a mask. 🤮 is graphic vomit/disgust.",
      },
      {
        question: "Can I use 🤮 at work?",
        answer:
          "Only if you are literally sick. Too graphic for casual office jokes.",
      },
    ],
  },

  "sneezing-face": {
    batchId: BATCH_ID,
    searchTitle: "Sneezing Face Emoji Meaning: Achoo, Allergies, or Getting Sick?",
    snippetAnswer:
      "🤧 Sneezing Face means a sneeze — achoo, allergies, or sniffles. It is sneeze action, not fever-sick like 🤒.",
    detailedParagraphs: [
      "Sneezing Face (🤧) shows a face mid-sneeze with a tissue. Unicode frames it as sneezing; chats use it for colds, allergies, and “achoo.”",
      "People send 🤧 for allergy season, dusty rooms, “someone’s talking about me” sneeze jokes, and early cold symptoms.",
      "Compared with 🤒, 🤧 is the sneeze itself. 🤒 is fever/illness with a thermometer — broader “I’m sick.”",
      "Rarely means nausea. If you need queasy, use 🤢; if you need fever, use 🤒. Keep 🤧 for sneezes and sniffles.",
    ],
    textingMeaning:
      "Use 🤧 for sneezing, allergies, or light cold vibes — “achoo / sniffles.”",
    socialMeaning:
      "Allergy memes, flu-season posts, and “bless you” threads use 🤧. Clearer sneeze than 🤒’s fever signal.",
    caution:
      "Don’t diagnose people with 🤧. A sneeze emoji isn’t medical advice.",
    examples: [
      { context: "Allergies", text: "Pollen is winning 🤧" },
      { context: "Cold", text: "Can't stop sneezing 🤧" },
      { context: "Dust", text: "Cleaning day 🤧" },
      { context: "Joke", text: "Were you talking about me 🤧" },
      { context: "Pet", text: "Cat hair everywhere 🤧" },
      { context: "Caption", text: "Spring hit different 🤧" },
    ],
    contextBlocks: [
      {
        title: "🤧 vs 🤒",
        body: "🤒 is face with thermometer — fever/illness. 🤧 is sneezing — achoo/allergies/sniffles.",
      },
      {
        title: "🤧 vs 😷",
        body: "😷 is wearing a mask. 🤧 is actively sneezing into a tissue.",
      },
      {
        title: "🤧 vs 🤢",
        body: "🤢 is nauseated. 🤧 is sneeze/cold allergy energy, not stomach sickness.",
      },
      {
        title: "Work chats",
        body: "Fine for “allergies today” or light sick notice. Prefer clear WFH/sick language when needed.",
      },
    ],
    searchIntents: [
      "sneezing face emoji meaning",
      "🤧 meaning in texting",
      "🤧 vs 🤒",
      "🤧 vs 😷",
      "what does 🤧 mean",
      "🤧 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤧 someone’s chronic illness as a joke.",
      "Avoid when you mean fever — use 🤒.",
      "Skip as a substitute for calling out of work properly.",
    ],
    faqs: [
      {
        question: "What does 🤧 mean in texting?",
        answer:
          "Sneezing — allergies, cold sniffles, or “achoo.”",
      },
      {
        question: "🤧 vs 🤒?",
        answer:
          "🤒 means fever/sick with a thermometer. 🤧 means sneezing.",
      },
      {
        question: "Can 🤧 mean “someone’s talking about me”?",
        answer:
          "Yes as a playful superstition joke after a sneeze.",
      },
      {
        question: "🤧 vs 😷?",
        answer:
          "😷 is masked. 🤧 is mid-sneeze with tissue energy.",
      },
      {
        question: "Can I use 🤧 at work?",
        answer:
          "Yes for light allergy/cold updates. Be clear if you need time off.",
      },
    ],
  },

  "face-with-thermometer": {
    batchId: BATCH_ID,
    searchTitle: "Face with Thermometer Emoji Meaning: Sick, Fever, or Under the Weather?",
    snippetAnswer:
      "🤒 Face with Thermometer means fever or illness — “I’m sick.” It is sick-day energy, not a sneeze like 🤧.",
    detailedParagraphs: [
      "Face with Thermometer (🤒) shows a face holding a thermometer with a flushed look. Unicode frames it as sick; chats use it for fever and calling out.",
      "People send 🤒 for colds, flu, “staying home,” and soft “I don’t feel well” updates.",
      "Compared with 🤧, 🤒 signals broader illness/fever, not just sneezing. Compared with 🤢, it is fever-sick more than nauseated green.",
      "It is not dramatic death. If you need vomit, use 🤮; if you need sneeze, use 🤧. Keep 🤒 for thermometer sick.",
    ],
    textingMeaning:
      "Send 🤒 when you have a fever or feel ill — classic “I’m sick today” face.",
    socialMeaning:
      "Sick-day stories, flu-season posts, and “canceling plans” captions use 🤒. Clearer illness than sneeze-only 🤧.",
    caution:
      "Emoji isn’t a diagnosis. Don’t 🤒 someone else’s symptoms without care, and follow real medical guidance when needed.",
    examples: [
      { context: "Sick day", text: "Staying home 🤒" },
      { context: "Fever", text: "Temp is up 🤒" },
      { context: "Plans", text: "Have to cancel tonight 🤒" },
      { context: "Work", text: "Won't make the standup 🤒" },
      { context: "Friend", text: "Bring soup please 🤒" },
      { context: "Caption", text: "Rest day forced on me 🤒" },
    ],
    contextBlocks: [
      {
        title: "🤒 vs 🤧",
        body: "🤧 is sneezing. 🤒 is thermometer sick — fever/illness beyond a single achoo.",
      },
      {
        title: "🤒 vs 🤢",
        body: "🤢 is nauseated/queasy. 🤒 is feverish illness with a thermometer.",
      },
      {
        title: "🤒 vs 😷",
        body: "😷 is masked (often illness caution). 🤒 explicitly shows fever/sick face.",
      },
      {
        title: "Work chats",
        body: "Perfect for short sick notices. Still send clear availability/coverage details.",
      },
    ],
    searchIntents: [
      "face with thermometer emoji meaning",
      "🤒 meaning in texting",
      "🤒 vs 🤧",
      "🤒 vs 🤢",
      "what does 🤒 mean",
      "🤒 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤒 fake illness to dodge plans without honesty.",
      "Avoid when you only mean a sneeze — use 🤧.",
      "Skip as medical advice for someone else’s symptoms.",
    ],
    faqs: [
      {
        question: "What does 🤒 mean in texting?",
        answer:
          "Sick or feverish — “I’m under the weather / staying home.”",
      },
      {
        question: "🤒 vs 🤧?",
        answer:
          "🤧 is sneezing. 🤒 is fever/illness with a thermometer.",
      },
      {
        question: "🤒 vs 🤢?",
        answer:
          "🤢 is queasy/disgusted. 🤒 is sick-fever energy.",
      },
      {
        question: "Is 🤒 only for fever?",
        answer:
          "Fever is the visual, but people use it for general “I’m sick.”",
      },
      {
        question: "Can I use 🤒 at work?",
        answer:
          "Yes — common for sick-day messages. Add clear next steps.",
      },
    ],
  },
};
