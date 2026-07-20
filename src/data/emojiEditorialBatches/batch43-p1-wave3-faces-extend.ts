import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 3 — exclusivity for next face-extend emoji after Wave 2 faces-extend.
 * Differentiation focus: peeking 🫣 vs 🤭/🫢, zipper 🤐 vs 🤫, skepticism 🤨,
 * monocle 🧐 vs nerd 🤓, cool 😎, disguise 🥸, party 🥳 vs 🎉, confuse 😕 vs
 * worry 😟, frown ladder 🙁 vs ☹️, hush 😯 vs astonish 😲, flush 😳.
 */
const BATCH_ID = "43-p1-wave3-faces-extend";

export const batch43P1Wave3FacesExtend: Record<string, EmojiBatchEnrichment> = {
  "face-with-peeking-eye": {
    batchId: BATCH_ID,
    searchTitle: "Face with Peeking Eye Emoji Meaning: Curious, Scared, or Can't Look Away?",
    snippetAnswer:
      "🫣 Face with Peeking Eye means curious dread — peeking while half-hiding. It is less giggle than 🤭 and less open gasp than 🫢.",
    detailedParagraphs: [
      "Face with Peeking Eye (🫣) shows a face covering one eye while peeking through fingers. Unicode frames it as peeking; chat culture uses it for “I shouldn’t look… but I am.”",
      "People send 🫣 for horror movies, messy drama, and guilty fascination. The peek sells suspense more than pure shame or pure shock.",
      "Compared with 🤭, 🫣 is not coy laughter — it is watching through fingers. Compared with 🫢, the eyes are partly hidden, not fully open in a gasp.",
      "It rarely means “I’m crying.” If you need soft oops, use 🤭; if you need stunned disbelief, use 🫢. Keep 🫣 for can’t-look-away curiosity.",
    ],
    textingMeaning:
      "Use 🫣 when you are half-scared, half-hooked — spoilers, scary clips, or “tell me more even if I regret it.”",
    socialMeaning:
      "Reels, horror captions, and drama threads love 🫣. Brands use it sparingly for suspense teasers, not soft celebration.",
    caution:
      "Do not 🫣 someone’s real trauma like entertainment. Peeking energy can feel callous without caring words.",
    examples: [
      { context: "Horror night", text: "I can't watch but I am 🫣" },
      { context: "Drama", text: "What did they say next 🫣" },
      { context: "Spoiler bait", text: "Don't tell me… okay tell me 🫣" },
      { context: "Guilty scroll", text: "Still reading the comments 🫣" },
      { context: "Suspense", text: "Waiting for the results 🫣" },
      { context: "Caption", text: "True crime marathon 🫣" },
    ],
    contextBlocks: [
      {
        title: "🫣 vs 🤭",
        body: "🤭 is giggle, coy oops, or hand-over-mouth laugh. 🫣 is peeking through fear/curiosity — watching, not chuckling.",
      },
      {
        title: "🫣 vs 🫢",
        body: "🫢 is open-eyed gasp/shock. 🫣 hides behind fingers while still looking — suspense more than stunned silence.",
      },
      {
        title: "🫣 vs 🙈",
        body: "🙈 is playful “see no evil” cover-up. 🫣 still peeks — curiosity wins over full avoidance.",
      },
      {
        title: "Work chats",
        body: "Rarely fits formal threads. Fine for casual team suspense (“launch day…”) if the mood is light.",
      },
    ],
    searchIntents: [
      "face with peeking eye emoji meaning",
      "🫣 meaning in texting",
      "🫣 vs 🤭",
      "🫣 vs 🫢",
      "what does 🫣 mean",
      "🫣 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not treat someone’s crisis as peeking entertainment.",
      "Avoid when you mean shy giggle — use 🤭 instead.",
      "Skip as a substitute for checking if someone is okay.",
    ],
    faqs: [
      {
        question: "What does 🫣 mean in texting?",
        answer:
          "Curious dread or can’t-look-away peeking — half hiding, half watching.",
      },
      {
        question: "🫣 vs 🤭?",
        answer:
          "🤭 giggles or coy oops. 🫣 peeks through fingers with suspense or fear.",
      },
      {
        question: "🫣 vs 🫢?",
        answer:
          "🫢 is open-eyed shock/gasp. 🫣 keeps one eye covered while still looking.",
      },
      {
        question: "Is 🫣 the same as 🙈?",
        answer:
          "Related cover-face family, but 🙈 is more “I refuse to see.” 🫣 still peeks.",
      },
      {
        question: "Can I use 🫣 at work?",
        answer:
          "Only in very casual suspense moments. Prefer words for serious updates.",
      },
    ],
  },

  "zipper-mouth-face": {
    batchId: BATCH_ID,
    searchTitle: "Zipper-Mouth Face Emoji Meaning: Secret, Silent, or Sealed Lips?",
    snippetAnswer:
      "🤐 Zipper-Mouth Face means sealed lips — “I won’t say” or forced silence. It is a self-zip, not a shush aimed at others like 🤫.",
    detailedParagraphs: [
      "Zipper-Mouth Face (🤐) shows a mouth closed with a zipper. Unicode frames it as zipper-mouth; texting made it the “my lips are sealed” face.",
      "People send 🤐 for NDAs, spoilers they won’t spoil, awkward silence, and “I know something but I’m not telling.”",
      "Compared with 🤫, 🤐 is usually about your own mouth staying shut. 🤫 often tells someone else to quiet down or keep a secret together.",
      "It is rarely pure sadness. If you need soft quiet empathy, use words; if you need playful hush, use 🤫. Keep 🤐 for locked-secret energy.",
    ],
    textingMeaning:
      "Send 🤐 when you refuse to spill — secrets, surprises, or “I legally cannot comment.”",
    socialMeaning:
      "Captions use 🤐 for teaser marketing, spoiler blackouts, and “ask me nothing” vibes. Clearer than vague 😶 for intentional silence.",
    caution:
      "After someone confides in you, bare 🤐 can feel cold. Confirm you heard them before sealing the joke.",
    examples: [
      { context: "Secret", text: "I know but 🤐" },
      { context: "Spoiler", text: "No spoilers from me 🤐" },
      { context: "Work NDA", text: "Can't discuss that one 🤐" },
      { context: "Surprise", text: "You'll find out Saturday 🤐" },
      { context: "Awkward", text: "I said nothing 🤐" },
      { context: "Caption", text: "Big news soon 🤐" },
    ],
    contextBlocks: [
      {
        title: "🤐 vs 🤫",
        body: "🤫 often hushes others or shares a quiet secret vibe. 🤐 zips your own mouth — “I’m not talking.”",
      },
      {
        title: "🤐 vs 😶",
        body: "😶 is mouthless / speechless blankness. 🤐 is deliberate sealed silence with a zipper joke.",
      },
      {
        title: "🤐 vs 🙊",
        body: "🙊 is playful speak-no-evil monkey. 🤐 is a human face promising not to spill.",
      },
      {
        title: "Work chats",
        body: "Fine for light “can’t share yet.” Prefer clear policy language for real confidentiality.",
      },
    ],
    searchIntents: [
      "zipper mouth face emoji meaning",
      "🤐 meaning in texting",
      "🤐 vs 🤫",
      "🤐 vs 😶",
      "what does 🤐 mean",
      "🤐 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤐 someone who needs acknowledgment, not a joke seal.",
      "Avoid when you mean “be quiet” to others — use 🤫.",
      "Skip as the only reply to sensitive personal news.",
    ],
    faqs: [
      {
        question: "What does 🤐 mean in texting?",
        answer:
          "Sealed lips — keeping a secret, refusing spoilers, or staying silent on purpose.",
      },
      {
        question: "🤐 vs 🤫?",
        answer:
          "🤫 often shushes or conspires quietly. 🤐 means your mouth is zipped shut.",
      },
      {
        question: "Is 🤐 angry?",
        answer:
          "Not by default. It is secrecy or silence; tone comes from the surrounding words.",
      },
      {
        question: "🤐 vs 😶?",
        answer:
          "😶 feels blank or speechless. 🤐 feels intentional “I won’t say.”",
      },
      {
        question: "Can I use 🤐 at work?",
        answer:
          "Yes for casual “can’t share yet.” Use clear wording for real NDAs.",
      },
    ],
  },

  "face-with-raised-eyebrow": {
    batchId: BATCH_ID,
    searchTitle: "Face with Raised Eyebrow Emoji Meaning: Skeptical, Suspicious, or Side-Eye?",
    snippetAnswer:
      "🤨 Face with Raised Eyebrow means skepticism, doubt, or “hmm, really?” It is the classic side-eye challenge face.",
    detailedParagraphs: [
      "Face with Raised Eyebrow (🤨) lifts one brow in a questioning look. Unicode frames it as skeptical; chats use it for “I don’t buy that.”",
      "People send 🤨 for shady claims, awkward excuses, mild judgment, and playful suspicion among friends.",
      "It sits between neutral 😐 and full unamused 😒. The raised brow sells challenge more than boredom or anger.",
      "Rarely reads as pure confusion. If you are lost, use 😕; if you are inspecting details, use 🧐. Keep 🤨 for doubt and side-eye.",
    ],
    textingMeaning:
      "Use 🤨 to question a story, call out nonsense lightly, or show “I’m listening… skeptically.”",
    socialMeaning:
      "Comments drop 🤨 under suspicious posts, weird flexes, and questionable takes. Stronger judgment signal than a plain question mark.",
    caution:
      "In tense threads, bare 🤨 can feel accusatory. Soften with words if you still want dialogue.",
    examples: [
      { context: "Doubt", text: "You were \"stuck in traffic\" 🤨" },
      { context: "Suspicious", text: "Interesting timing 🤨" },
      { context: "Playful callout", text: "And you expect me to believe that 🤨" },
      { context: "Weird flex", text: "Okay sure 🤨" },
      { context: "News take", text: "Source? 🤨" },
      { context: "Caption", text: "Explain yourself 🤨" },
    ],
    contextBlocks: [
      {
        title: "🤨 vs 🧐",
        body: "🧐 inspects or analyzes with a monocle — curious scrutiny. 🤨 challenges with skepticism and side-eye.",
      },
      {
        title: "🤨 vs 😒",
        body: "😒 is bored/unimpressed annoyance. 🤨 is sharper “I doubt you” energy.",
      },
      {
        title: "🤨 vs 😕",
        body: "😕 is puzzled or mildly unhappy confusion. 🤨 assumes something is off, not just unclear.",
      },
      {
        title: "Work chats",
        body: "Risky in formal feedback. Prefer clear questions unless the team culture is meme-friendly.",
      },
    ],
    searchIntents: [
      "face with raised eyebrow emoji meaning",
      "🤨 meaning in texting",
      "🤨 vs 🧐",
      "🤨 vs 😒",
      "what does 🤨 mean",
      "🤨 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤨 a sincere apology if you still want repair.",
      "Avoid as the only feedback on someone’s work.",
      "Skip when you mean gentle confusion — use 😕.",
    ],
    faqs: [
      {
        question: "What does 🤨 mean in texting?",
        answer:
          "Skepticism, suspicion, or “really?” — a raised-eyebrow challenge.",
      },
      {
        question: "🤨 vs 🧐?",
        answer:
          "🧐 looks closely / analyzes. 🤨 doubts or side-eyes the claim.",
      },
      {
        question: "Is 🤨 rude?",
        answer:
          "It can feel judgmental. Soften with wording when the topic is sensitive.",
      },
      {
        question: "🤨 vs 😒?",
        answer:
          "😒 is unimpressed annoyance. 🤨 is more “I don’t believe that.”",
      },
      {
        question: "Can I use 🤨 at work?",
        answer:
          "Only in casual cultures. Prefer direct questions for professional doubt.",
      },
    ],
  },

  "face-with-monocle": {
    batchId: BATCH_ID,
    searchTitle: "Face with Monocle Emoji Meaning: Inspecting, Fancy, or Side-Eye Smart?",
    snippetAnswer:
      "🧐 Face with Monocle means close inspection, curious analysis, or fancy “hmm.” It is scrutiny, not goofy nerd pride like 🤓.",
    detailedParagraphs: [
      "Face with Monocle (🧐) wears a monocle and studies something carefully. Unicode frames it as monocle; chats use it for “let me examine this.”",
      "People send 🧐 for reading fine print, spotting plot holes, classy sarcasm, and detective-energy reactions.",
      "Compared with 🤓, 🧐 feels more analytical than enthusiastic-geek. Compared with 🤨, it inspects more than it accuses.",
      "It is rarely pure confusion. If you are lost, use 😕; if you are calling nonsense, use 🤨. Keep 🧐 for thoughtful scrutiny.",
    ],
    textingMeaning:
      "Send 🧐 when you are examining details, questioning quality, or playfully acting like a critic.",
    socialMeaning:
      "Thread replies use 🧐 for “interesting…,” product teardowns, and faux-aristocrat jokes. Less meme-chaos than 🤓.",
    caution:
      "Under someone’s personal post, bare 🧐 can feel coldly judgmental. Add kindness if you mean curiosity, not critique.",
    examples: [
      { context: "Fine print", text: "Reading the terms 🧐" },
      { context: "Plot hole", text: "Wait that doesn't add up 🧐" },
      { context: "Review", text: "Examining the evidence 🧐" },
      { context: "Sarcasm", text: "How fascinating 🧐" },
      { context: "Detail check", text: "Hmm look closer 🧐" },
      { context: "Caption", text: "Art museum mode 🧐" },
    ],
    contextBlocks: [
      {
        title: "🧐 vs 🤓",
        body: "🤓 is eager nerd/geek energy (often self-own). 🧐 is cooler inspection — monocle scrutiny, not bubbly smarts.",
      },
      {
        title: "🧐 vs 🤨",
        body: "🤨 challenges with skepticism. 🧐 analyzes or inspects — curious judgment more than side-eye accusation.",
      },
      {
        title: "🧐 vs 🤔",
        body: "🤔 is open pondering. 🧐 feels more precise, critical, or “detective” about a specific detail.",
      },
      {
        title: "Work chats",
        body: "Fine for light “reviewing this.” Prefer clear feedback language for real critiques.",
      },
    ],
    searchIntents: [
      "face with monocle emoji meaning",
      "🧐 meaning in texting",
      "🧐 vs 🤓",
      "🧐 vs 🤨",
      "what does 🧐 mean",
      "🧐 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🧐 someone’s feelings like a specimen.",
      "Avoid when you mean proud geek joy — use 🤓.",
      "Skip as a substitute for constructive written feedback.",
    ],
    faqs: [
      {
        question: "What does 🧐 mean in texting?",
        answer:
          "Close inspection, analysis, or fancy “hmm” — studying something carefully.",
      },
      {
        question: "🧐 vs 🤓?",
        answer:
          "🤓 is nerd/geek enthusiasm. 🧐 is monocle scrutiny and critical curiosity.",
      },
      {
        question: "Is 🧐 sarcastic?",
        answer:
          "Often playfully snobby, but it can also mean sincere close looking.",
      },
      {
        question: "🧐 vs 🤨?",
        answer:
          "🤨 doubts you. 🧐 examines the claim or detail more than it side-eyes.",
      },
      {
        question: "Can I use 🧐 at work?",
        answer:
          "Yes for casual review vibes. Pair with clear notes for real critique.",
      },
    ],
  },

  "nerd-face": {
    batchId: BATCH_ID,
    searchTitle: "Nerd Face Emoji Meaning: Geeky, Smart, or Self-Deprecating?",
    snippetAnswer:
      "🤓 Nerd Face means geeky pride, bookish enthusiasm, or playful self-own as a nerd. Warmer and goofier than analytical 🧐.",
    detailedParagraphs: [
      "Nerd Face (🤓) wears thick glasses with a buck-toothed grin. Unicode frames it as nerd; chat culture made it affectionate geek energy.",
      "People send 🤓 for study wins, niche hobbies, tech jokes, and “yes I’m that person” moments.",
      "Compared with 🧐, 🤓 is eager and cute, not coolly inspecting. Compared with 😎, it celebrates smarts/quirk, not chill cool.",
      "Tone depends on context — self-applied 🤓 is usually loving; aimed at others can feel teasing. Prefer consent and kindness.",
    ],
    textingMeaning:
      "Use 🤓 for geeky excitement, study mode, or owning your niche interests without needing monocle seriousness.",
    socialMeaning:
      "Captions and STEM posts love 🤓. Brands use it for educational content and playful “expert” framing.",
    caution:
      "Calling someone else 🤓 uninvited can land as an insult. Stick to self-description unless the vibe is mutual.",
    examples: [
      { context: "Study", text: "Library all night 🤓" },
      { context: "Hobby", text: "I made a spreadsheet for this 🤓" },
      { context: "Win", text: "Aced the quiz 🤓" },
      { context: "Tech joke", text: "Yes I read the docs 🤓" },
      { context: "Self-own", text: "Peak nerd moment 🤓" },
      { context: "Caption", text: "Museum + footnotes 🤓" },
    ],
    contextBlocks: [
      {
        title: "🤓 vs 🧐",
        body: "🧐 inspects with monocle cool. 🤓 grins as an eager geek — enthusiasm over scrutiny.",
      },
      {
        title: "🤓 vs 😎",
        body: "😎 is sunglasses cool confidence. 🤓 is smart/quirky pride, not aloof chill.",
      },
      {
        title: "🤓 vs 🥸",
        body: "🥸 is disguise/incognito joke. 🤓 is openly geeky identity energy.",
      },
      {
        title: "Work chats",
        body: "Fine for casual “diving into the docs.” Avoid labeling coworkers without invitation.",
      },
    ],
    searchIntents: [
      "nerd face emoji meaning",
      "🤓 meaning in texting",
      "🤓 vs 🧐",
      "🤓 vs 😎",
      "what does 🤓 mean",
      "🤓 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not call someone 🤓 as a dig.",
      "Avoid when you mean cool flex — use 😎.",
      "Skip when you mean critical inspection — use 🧐.",
    ],
    faqs: [
      {
        question: "What does 🤓 mean in texting?",
        answer:
          "Geeky pride, study energy, or playful nerd self-own.",
      },
      {
        question: "🤓 vs 🧐?",
        answer:
          "🧐 analyzes coolly. 🤓 is warmer geek enthusiasm with glasses grin.",
      },
      {
        question: "Is 🤓 an insult?",
        answer:
          "Self-use is usually affectionate. Aimed at others can feel mean without shared humor.",
      },
      {
        question: "🤓 vs 😎?",
        answer:
          "😎 is cool confidence. 🤓 celebrates smarts and niche passion.",
      },
      {
        question: "Can I use 🤓 at work?",
        answer:
          "Yes for light study/docs energy in casual teams. Keep it self-aimed.",
      },
    ],
  },

  "smiling-face-with-sunglasses": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Sunglasses Emoji Meaning: Cool, Confident, or Flex?",
    snippetAnswer:
      "😎 Smiling Face with Sunglasses means cool confidence, swagger, or “I got this.” It is chill flex energy, not geeky 🤓.",
    detailedParagraphs: [
      "Smiling Face with Sunglasses (😎) is a grin behind dark shades. Unicode frames it as cool; texting made it the swagger reaction.",
      "People send 😎 for wins, smooth exits, sunny vibes, and playful brags that stay light.",
      "Compared with 🤓, 😎 is style-cool, not study-cool. Compared with 🥳, it celebrates composure more than party chaos.",
      "Overuse can read as try-hard. One well-placed 😎 sells confidence; a stack can look ironic or awkward.",
    ],
    textingMeaning:
      "Send 😎 for confident yes, chill wins, or “handled it” energy without full party mode.",
    socialMeaning:
      "Captions, summer posts, and achievement flexes love 😎. Brands use it for sleek product cool.",
    caution:
      "After bad news, bare 😎 can look dismissive. Save cool for moments that actually feel smooth.",
    examples: [
      { context: "Win", text: "Nailed the interview 😎" },
      { context: "Plan", text: "Already booked 😎" },
      { context: "Summer", text: "Beach day unlocked 😎" },
      { context: "Smooth", text: "No notes 😎" },
      { context: "Reply", text: "I know 😎" },
      { context: "Caption", text: "Main character energy 😎" },
    ],
    contextBlocks: [
      {
        title: "😎 vs 🤓",
        body: "🤓 is geeky enthusiasm. 😎 is sunglasses cool — confidence and swagger over bookish pride.",
      },
      {
        title: "😎 vs 🥳",
        body: "🥳 is party celebration with hat and noise. 😎 is composed cool flex, not festive chaos.",
      },
      {
        title: "😎 vs 😏",
        body: "😏 is smirk/suggestive knowing. 😎 is brighter public cool confidence.",
      },
      {
        title: "Work chats",
        body: "Fine for casual wins. Prefer humble wording if the audience is formal.",
      },
    ],
    searchIntents: [
      "smiling face with sunglasses emoji meaning",
      "😎 meaning in texting",
      "😎 vs 🤓",
      "😎 vs 🥳",
      "what does 😎 mean",
      "😎 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😎 someone’s misfortune.",
      "Avoid spam stacks that look forced-cool.",
      "Skip when you mean soft kindness — use 😊.",
    ],
    faqs: [
      {
        question: "What does 😎 mean in texting?",
        answer:
          "Cool confidence, swagger, or chill “I got this” energy.",
      },
      {
        question: "😎 vs 🤓?",
        answer:
          "🤓 is geek pride. 😎 is sunglasses cool and confident flex.",
      },
      {
        question: "Is 😎 arrogant?",
        answer:
          "It can read cocky if overused. One purposeful 😎 usually stays playful.",
      },
      {
        question: "😎 vs 🥳?",
        answer:
          "🥳 parties hard. 😎 stays composed and cool about the win.",
      },
      {
        question: "Can I use 😎 at work?",
        answer:
          "Yes in casual team wins. Tone down for formal stakeholders.",
      },
    ],
  },

  "disguised-face": {
    batchId: BATCH_ID,
    searchTitle: "Disguised Face Emoji Meaning: Incognito, Undercover, or Fake Glasses Joke?",
    snippetAnswer:
      "🥸 Disguised Face means undercover vibes, silly disguise, or “you don’t recognize me.” Nose glasses and mustache sell the joke.",
    detailedParagraphs: [
      "Disguised Face (🥸) wears glasses, a nose, and a mustache like a novelty disguise. Unicode frames it as disguised; chats use it for incognito humor.",
      "People send 🥸 for sneaking into events, fake-identity jokes, “I’m lurking,” and playful undercover energy.",
      "Compared with 😎, 🥸 is costume disguise, not cool swagger. Compared with 🤓, it is hiding identity, not owning geek pride.",
      "It rarely means serious privacy anxiety alone. If you feel invisible/empty, 🫥 may fit better. Keep 🥸 for comic undercover.",
    ],
    textingMeaning:
      "Use 🥸 for sneaky plans, alt-account jokes, or “I’m here but undercover” moments.",
    socialMeaning:
      "Stories and memes use 🥸 for lurking, costume parties, and fake-serious detective bits. Clearer disguise cue than plain sunglasses.",
    caution:
      "Do not 🥸 real deception that harms someone. Keep the joke light and consensual.",
    examples: [
      { context: "Lurking", text: "In the group chat silently 🥸" },
      { context: "Costume", text: "Nobody will know it's me 🥸" },
      { context: "Sneaky plan", text: "Operation snack run 🥸" },
      { context: "Incognito", text: "Browsing undercover 🥸" },
      { context: "Joke ID", text: "Totally a different person 🥸" },
      { context: "Caption", text: "Spy mode activated 🥸" },
    ],
    contextBlocks: [
      {
        title: "🥸 vs 😎",
        body: "😎 is cool confidence with shades. 🥸 is novelty disguise — mustache/glasses undercover joke.",
      },
      {
        title: "🥸 vs 🤓",
        body: "🤓 owns geek identity. 🥸 hides behind a silly disguise persona.",
      },
      {
        title: "🥸 vs 🤡",
        body: "🤡 is clowning/fool energy. 🥸 is specifically “I’m in disguise,” not full clown chaos.",
      },
      {
        title: "Work chats",
        body: "Rarely fits formal threads. Okay for playful team “incognito review” jokes.",
      },
    ],
    searchIntents: [
      "disguised face emoji meaning",
      "🥸 meaning in texting",
      "🥸 vs 😎",
      "🥸 vs 🤓",
      "what does 🥸 mean",
      "🥸 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke-disguise harmful lying.",
      "Avoid when you mean cool flex — use 😎.",
      "Skip as a stand-in for real privacy concerns without words.",
    ],
    faqs: [
      {
        question: "What does 🥸 mean in texting?",
        answer:
          "Undercover or disguise humor — fake glasses/mustache “you don’t know me” energy.",
      },
      {
        question: "🥸 vs 😎?",
        answer:
          "😎 is cool. 🥸 is a novelty disguise, not swagger sunglasses.",
      },
      {
        question: "Is 🥸 the same as incognito?",
        answer:
          "Often used that way playfully — lurking, sneaking, or alt-persona jokes.",
      },
      {
        question: "🥸 vs 🤓?",
        answer:
          "🤓 is open nerd pride. 🥸 hides behind a costume face.",
      },
      {
        question: "Can I use 🥸 at work?",
        answer:
          "Only for light humor in casual teams. Not for serious identity topics.",
      },
    ],
  },

  "partying-face": {
    batchId: BATCH_ID,
    searchTitle: "Partying Face Emoji Meaning: Celebration, Birthday, or Hype?",
    snippetAnswer:
      "🥳 Partying Face means festive celebration — party hat, smile, and confetti energy. It is a face reacting, not the object 🎉 alone.",
    detailedParagraphs: [
      "Partying Face (🥳) wears a party hat with a joyful expression and often confetti vibes. Unicode frames it as partying; chats use it for birthdays and wins.",
      "People send 🥳 for promotions, launches, New Year, and “we’re celebrating” replies that feel personal.",
      "Compared with 🎉, 🥳 is a face saying “I’m celebrating with you.” 🎉 is the party popper object — great alone, but less “human reaction.”",
      "It is rarely sarcastic by default. If you need cool composure, use 😎; if you need quiet pride, use 😊. Keep 🥳 for loud festivity.",
    ],
    textingMeaning:
      "Send 🥳 for birthdays, big yes moments, and shared celebration without needing a full sticker pack.",
    socialMeaning:
      "Comments and captions flood 🥳 on milestones. Brands pair it with launches and holiday campaigns.",
    caution:
      "Do not 🥳 over news that isn’t good for the other person. Festivity needs shared joy.",
    examples: [
      { context: "Birthday", text: "Happy birthday 🥳" },
      { context: "Promotion", text: "You earned this 🥳" },
      { context: "Launch", text: "We shipped 🥳" },
      { context: "Weekend", text: "Party starts now 🥳" },
      { context: "Reply", text: "Congrats 🥳" },
      { context: "Caption", text: "New year energy 🥳" },
    ],
    contextBlocks: [
      {
        title: "🥳 vs 🎉",
        body: "🎉 is the party popper symbol. 🥳 is a celebrating face — more personal “I’m hyped with you.”",
      },
      {
        title: "🥳 vs 😎",
        body: "😎 is cool composure. 🥳 is loud festive celebration with hat energy.",
      },
      {
        title: "🥳 vs 😁",
        body: "😁 is beaming happy smile. 🥳 specifically marks party/celebration context.",
      },
      {
        title: "Work chats",
        body: "Great for team wins and birthdays. Soften for solemn company news.",
      },
    ],
    searchIntents: [
      "partying face emoji meaning",
      "🥳 meaning in texting",
      "🥳 vs 🎉",
      "🥳 vs 😎",
      "what does 🥳 mean",
      "🥳 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not celebrate someone’s bad news.",
      "Avoid spam stacks that drown a sincere message.",
      "Skip when quiet congratulations fit better — use 😊.",
    ],
    faqs: [
      {
        question: "What does 🥳 mean in texting?",
        answer:
          "Festive celebration — birthdays, wins, and party hype from a smiling face.",
      },
      {
        question: "🥳 vs 🎉?",
        answer:
          "🎉 is the popper object. 🥳 is the partying face reacting personally.",
      },
      {
        question: "Is 🥳 only for birthdays?",
        answer:
          "No — any shared celebration works: launches, graduations, holidays.",
      },
      {
        question: "🥳 vs 😎?",
        answer:
          "😎 is cool flex. 🥳 is festive party energy.",
      },
      {
        question: "Can I use 🥳 at work?",
        answer:
          "Yes for team wins and birthdays in casual cultures.",
      },
    ],
  },

  "confused-face": {
    batchId: BATCH_ID,
    searchTitle: "Confused Face Emoji Meaning: Puzzled, Unsure, or Mildly Upset?",
    snippetAnswer:
      "😕 Confused Face means puzzlement, mild disappointment, or “I don’t get it.” Less anxious than 😟, milder than a deep frown.",
    detailedParagraphs: [
      "Confused Face (😕) shows a slight frown with uncertain eyes. Unicode frames it as confused; texting uses it for “huh?” and soft letdown.",
      "People send 😕 when plans change oddly, instructions don’t land, or something feels off without full panic.",
      "Compared with 😟, 😕 is more puzzled than worried. Compared with 🙁, it leans confusion over simple sadness.",
      "It is not strong anger. If you need skepticism, use 🤨; if you need fear-worry, use 😟. Keep 😕 for mild “I’m lost / meh.”",
    ],
    textingMeaning:
      "Use 😕 for gentle confusion, soft disappointment, or “that doesn’t make sense” without escalating.",
    socialMeaning:
      "Comments drop 😕 under unclear posts and odd decisions. Softer pushback than 🤨 side-eye.",
    caution:
      "In conflict, bare 😕 can feel passive-aggressive. Add a clear question if you want answers.",
    examples: [
      { context: "Unclear", text: "Wait what does that mean 😕" },
      { context: "Plan change", text: "I thought we were meeting at 7 😕" },
      { context: "Mild letdown", text: "Oh they canceled 😕" },
      { context: "Odd take", text: "Not sure about that 😕" },
      { context: "Directions", text: "I'm lost already 😕" },
      { context: "Caption", text: "Monday mood 😕" },
    ],
    contextBlocks: [
      {
        title: "😕 vs 😟",
        body: "😟 is worried/anxious concern. 😕 is puzzled or mildly unhappy confusion — less fear.",
      },
      {
        title: "😕 vs 🤨",
        body: "🤨 challenges with skepticism. 😕 admits confusion without accusing.",
      },
      {
        title: "😕 vs 🙁",
        body: "🙁 is a soft frown of sadness. 😕 mixes uncertainty with a slight downturn.",
      },
      {
        title: "Work chats",
        body: "Fine for “I’m unclear.” Follow with a specific question for faster help.",
      },
    ],
    searchIntents: [
      "confused face emoji meaning",
      "😕 meaning in texting",
      "😕 vs 😟",
      "😕 vs 🤨",
      "what does 😕 mean",
      "😕 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😕 when you mean strong worry — use 😟.",
      "Avoid as vague criticism without saying what’s wrong.",
      "Skip if you need skeptical callout — use 🤨.",
    ],
    faqs: [
      {
        question: "What does 😕 mean in texting?",
        answer:
          "Puzzlement, mild disappointment, or “I don’t get it.”",
      },
      {
        question: "😕 vs 😟?",
        answer:
          "😟 is more anxious/worried. 😕 is confused or softly let down.",
      },
      {
        question: "Is 😕 rude?",
        answer:
          "Usually mild. It can feel passive if you never explain the confusion.",
      },
      {
        question: "😕 vs 🙁?",
        answer:
          "🙁 leans sad frown. 😕 leans “huh?” uncertainty.",
      },
      {
        question: "Can I use 😕 at work?",
        answer:
          "Yes to flag confusion — pair it with a clear question.",
      },
    ],
  },

  "worried-face": {
    batchId: BATCH_ID,
    searchTitle: "Worried Face Emoji Meaning: Anxious, Concerned, or Stressed?",
    snippetAnswer:
      "😟 Worried Face means concern, anxiety, or uneasy stress. More fearful care than puzzled 😕.",
    detailedParagraphs: [
      "Worried Face (😟) shows a concerned frown with uneasy eyes. Unicode frames it as worried; chats use it for “I’m stressed about this.”",
      "People send 😟 for health updates, late replies, risky plans, and soft “hope you’re okay” energy.",
      "Compared with 😕, 😟 carries more anxiety. Compared with 😨, it is milder worry, not full fright.",
      "It can empathize or self-report stress. If you only mean mild confusion, use 😕. Keep 😟 for real concern.",
    ],
    textingMeaning:
      "Send 😟 when you are anxious, concerned for someone, or uneasy about an outcome.",
    socialMeaning:
      "Support comments and personal captions use 😟 for vulnerable worry. Less meme-coded than panic faces.",
    caution:
      "If someone is in crisis, 😟 alone is not enough — ask and offer real help.",
    examples: [
      { context: "Concern", text: "Did you get home safe 😟" },
      { context: "Self stress", text: "This deadline has me 😟" },
      { context: "Bad weather", text: "Drive carefully 😟" },
      { context: "Waiting", text: "Still no update 😟" },
      { context: "Empathy", text: "That sounds rough 😟" },
      { context: "Caption", text: "Overthinking tonight 😟" },
    ],
    contextBlocks: [
      {
        title: "😟 vs 😕",
        body: "😕 is puzzled/mildly meh. 😟 is anxious concern — more emotional weight.",
      },
      {
        title: "😟 vs 🙁",
        body: "🙁 is a soft sad frown. 😟 adds uneasy worry about something specific.",
      },
      {
        title: "😟 vs 😨",
        body: "😨 is stronger fear. 😟 is worried/concerned without full scare intensity.",
      },
      {
        title: "Work chats",
        body: "Okay for flagging risk gently. State the issue clearly for action.",
      },
    ],
    searchIntents: [
      "worried face emoji meaning",
      "😟 meaning in texting",
      "😟 vs 😕",
      "😟 vs 🙁",
      "what does 😟 mean",
      "😟 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not stop at 😟 in a real emergency — call or help.",
      "Avoid when you only mean confusion — use 😕.",
      "Skip stacks that amplify panic without useful info.",
    ],
    faqs: [
      {
        question: "What does 😟 mean in texting?",
        answer:
          "Worry, concern, or uneasy anxiety about a situation or person.",
      },
      {
        question: "😟 vs 😕?",
        answer:
          "😕 is confused/mild letdown. 😟 is more anxious and caring-concerned.",
      },
      {
        question: "Is 😟 the same as scared?",
        answer:
          "Related, but milder than 😨/😱. It is worry more than terror.",
      },
      {
        question: "😟 vs 🙁?",
        answer:
          "🙁 is soft sadness. 😟 emphasizes uneasy concern.",
      },
      {
        question: "Can I use 😟 at work?",
        answer:
          "Yes to flag concern — add specifics so people can respond.",
      },
    ],
  },

  "slightly-frowning-face": {
    batchId: BATCH_ID,
    searchTitle: "Slightly Frowning Face Emoji Meaning: Soft Sad, Mild Disappointment?",
    snippetAnswer:
      "🙁 Slightly Frowning Face means mild sadness or soft disappointment. Gentler than full ☹️, clearer than plain confusion.",
    detailedParagraphs: [
      "Slightly Frowning Face (🙁) is a soft downward mouth without extreme distress. Unicode frames it as slightly frowning; chats use it for low-key “aw.”",
      "People send 🙁 for small letdowns, gentle empathy, and muted sadness that shouldn’t escalate.",
      "Compared with ☹️, 🙁 is lighter. Compared with 😕, it reads more sad than puzzled.",
      "It is not rage or panic. If you need worry, use 😟; if you need deep gloom, use ☹️. Keep 🙁 for soft frown moments.",
    ],
    textingMeaning:
      "Use 🙁 for mild disappointment, soft sympathy, or “that’s a bummer” without heavy drama.",
    socialMeaning:
      "Comments use 🙁 for gentle empathy under sad-but-not-tragic posts. Quieter than 😢.",
    caution:
      "For serious grief, 🙁 alone can feel too light. Pair with caring words or a stronger support signal.",
    examples: [
      { context: "Letdown", text: "Rain canceled the picnic 🙁" },
      { context: "Empathy", text: "Sorry that happened 🙁" },
      { context: "Missed plan", text: "Wish I could join 🙁" },
      { context: "Soft sad", text: "Feeling a bit down 🙁" },
      { context: "Reply", text: "Aw that's rough 🙁" },
      { context: "Caption", text: "Monday already 🙁" },
    ],
    contextBlocks: [
      {
        title: "🙁 vs ☹️",
        body: "☹️ is a deeper classic frown. 🙁 is the lighter, slightly frowning version for mild sadness.",
      },
      {
        title: "🙁 vs 😕",
        body: "😕 mixes confusion with a slight downturn. 🙁 is clearer soft sadness/disappointment.",
      },
      {
        title: "🙁 vs 😟",
        body: "😟 is anxious worry. 🙁 is sad or disappointed without the fear edge.",
      },
      {
        title: "Work chats",
        body: "Fine for mild setbacks. Escalate wording when the issue needs action.",
      },
    ],
    searchIntents: [
      "slightly frowning face emoji meaning",
      "🙁 meaning in texting",
      "🙁 vs ☹️",
      "🙁 vs 😕",
      "what does 🙁 mean",
      "🙁 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer major grief with only 🙁.",
      "Avoid when you mean confusion — use 😕.",
      "Skip if you need stronger sorrow — use ☹️ or 😢.",
    ],
    faqs: [
      {
        question: "What does 🙁 mean in texting?",
        answer:
          "Mild sadness or soft disappointment — a gentle frown.",
      },
      {
        question: "🙁 vs ☹️?",
        answer:
          "☹️ is a deeper frown. 🙁 is lighter and less intense.",
      },
      {
        question: "🙁 vs 😕?",
        answer:
          "😕 is puzzled. 🙁 is more clearly sad or disappointed.",
      },
      {
        question: "Is 🙁 the same as 😢?",
        answer:
          "No — 😢 shows a tear. 🙁 is a quieter frown without crying.",
      },
      {
        question: "Can I use 🙁 at work?",
        answer:
          "Yes for mild setbacks in casual chat. Add clear next steps when needed.",
      },
    ],
  },

  "frowning-face": {
    batchId: BATCH_ID,
    searchTitle: "Frowning Face Emoji Meaning: Sad, Upset, or Classic Unhappy?",
    snippetAnswer:
      "☹️ Frowning Face means clear sadness or unhappy disappointment. Deeper than soft 🙁, classic “I’m not okay” frown.",
    detailedParagraphs: [
      "Frowning Face (☹️) is the classic filled frown. Unicode frames it as frowning; texting uses it for stronger “this is sad/bad.”",
      "People send ☹️ for real letdowns, unhappy outcomes, and heavier empathy than a slight frown allows.",
      "Compared with 🙁, ☹️ hits harder. Compared with 😢, it has no tear — sad weight without crying visuals.",
      "Platform rendering can look bold. If you only mean mild meh, prefer 🙁. Keep ☹️ for unmistakable unhappy tone.",
    ],
    textingMeaning:
      "Send ☹️ when you are clearly sad, upset, or showing heavier disappointment than a slight frown.",
    socialMeaning:
      "Support replies and somber captions use ☹️ for unhappy moments. Stronger signal than 🙁 in most fonts.",
    caution:
      "Still add words for serious harm or grief. An emoji frown is not full emotional support.",
    examples: [
      { context: "Bad news", text: "That's really sad ☹️" },
      { context: "Outcome", text: "We lost the match ☹️" },
      { context: "Empathy", text: "I'm sorry you're going through this ☹️" },
      { context: "Cancel", text: "Trip got canceled ☹️" },
      { context: "Mood", text: "Feeling low today ☹️" },
      { context: "Caption", text: "Not the ending we wanted ☹️" },
    ],
    contextBlocks: [
      {
        title: "☹️ vs 🙁",
        body: "🙁 is slightly frowning — milder. ☹️ is the deeper classic frown for clearer sadness.",
      },
      {
        title: "☹️ vs 😟",
        body: "😟 emphasizes anxious worry. ☹️ emphasizes unhappy sadness/disappointment.",
      },
      {
        title: "☹️ vs 😢",
        body: "😢 shows a tear and crying. ☹️ is a frown without the tear stream.",
      },
      {
        title: "Work chats",
        body: "Okay for clear bad outcomes. Follow with facts and next steps.",
      },
    ],
    searchIntents: [
      "frowning face emoji meaning",
      "☹️ meaning in texting",
      "☹️ vs 🙁",
      "☹️ vs 😢",
      "what does ☹️ mean",
      "☹️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not rely on ☹️ alone for crisis support.",
      "Avoid when mild disappointment fits — use 🙁.",
      "Skip spam stacks that trivialize real pain.",
    ],
    faqs: [
      {
        question: "What does ☹️ mean in texting?",
        answer:
          "Clear sadness or unhappy disappointment — a classic deep frown.",
      },
      {
        question: "☹️ vs 🙁?",
        answer:
          "🙁 is lighter. ☹️ is stronger and more unmistakably unhappy.",
      },
      {
        question: "☹️ vs 😢?",
        answer:
          "😢 cries with a tear. ☹️ frowns without showing tears.",
      },
      {
        question: "Is ☹️ angry?",
        answer:
          "Usually sad/upset, not rage. Anger faces like 😠 are clearer for mad.",
      },
      {
        question: "Can I use ☹️ at work?",
        answer:
          "Yes for somber updates — add concrete information too.",
      },
    ],
  },

  "hushed-face": {
    batchId: BATCH_ID,
    searchTitle: "Hushed Face Emoji Meaning: Surprised, Quiet Shock, or Speechless?",
    snippetAnswer:
      "😯 Hushed Face means quiet surprise or stunned silence — open mouth, soft shock. Milder than wide-eyed 😲.",
    detailedParagraphs: [
      "Hushed Face (😯) shows rounded eyes and an open mouth in a subdued gasp. Unicode frames it as hushed; chats use it for “oh…” surprise.",
      "People send 😯 for unexpected news that isn’t full chaos — mild shock, quiet “wow,” or speechless pauses.",
      "Compared with 😲, 😯 is softer and less dramatic. Compared with 🫢, it has no hand over mouth — just a hushed open face.",
      "It is not embarrassment by default. If you mean flush/awkward, use 😳; if you mean big astonishment, use 😲. Keep 😯 for quiet surprise.",
    ],
    textingMeaning:
      "Use 😯 for soft shock, quiet “oh wow,” or speechless reactions that shouldn’t scream.",
    socialMeaning:
      "Comments use 😯 under surprising but not catastrophic posts. Less theatrical than 😲 or 😱.",
    caution:
      "For traumatic news, bare 😯 can feel thin. Acknowledge the person before reacting like an audience.",
    examples: [
      { context: "Surprise", text: "Oh I didn't know that 😯" },
      { context: "Reveal", text: "Wait they said yes 😯" },
      { context: "Plot twist", text: "I did not see that coming 😯" },
      { context: "Price", text: "It costs how much 😯" },
      { context: "News", text: "That's unexpected 😯" },
      { context: "Caption", text: "Speechless for a second 😯" },
    ],
    contextBlocks: [
      {
        title: "😯 vs 😲",
        body: "😲 is stronger astonishment with bigger shock. 😯 is quieter hushed surprise.",
      },
      {
        title: "😯 vs 🫢",
        body: "🫢 covers the mouth in a gasp. 😯 is open-mouthed hush without the hand.",
      },
      {
        title: "😯 vs 😮",
        body: "😮 is a common open-mouth surprise. 😯 reads more subdued/hushed on many platforms.",
      },
      {
        title: "Work chats",
        body: "Fine for mild unexpected updates. Prefer clear questions after the reaction.",
      },
    ],
    searchIntents: [
      "hushed face emoji meaning",
      "😯 meaning in texting",
      "😯 vs 😲",
      "😯 vs 😮",
      "what does 😯 mean",
      "😯 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not hushed-react to tragedy like entertainment.",
      "Avoid when you mean embarrassed flush — use 😳.",
      "Skip if you need big shock — use 😲.",
    ],
    faqs: [
      {
        question: "What does 😯 mean in texting?",
        answer:
          "Quiet surprise or stunned silence — soft open-mouth shock.",
      },
      {
        question: "😯 vs 😲?",
        answer:
          "😲 is bigger astonishment. 😯 is milder, hushed surprise.",
      },
      {
        question: "😯 vs 🫢?",
        answer:
          "🫢 gasps with a hand over the mouth. 😯 has no hand — just a hushed face.",
      },
      {
        question: "Is 😯 the same as 😮?",
        answer:
          "Close cousins; 😯 often feels quieter/more subdued than 😮.",
      },
      {
        question: "Can I use 😯 at work?",
        answer:
          "Yes for mild surprise in casual threads. Follow with substance.",
      },
    ],
  },

  "astonished-face": {
    batchId: BATCH_ID,
    searchTitle: "Astonished Face Emoji Meaning: Shocked, Amazed, or Mind-Blown?",
    snippetAnswer:
      "😲 Astonished Face means strong surprise or amazement — bigger shock than quiet 😯. Open mouth, wide eyes, “wow.”",
    detailedParagraphs: [
      "Astonished Face (😲) shows wide eyes and a gaping mouth in clear shock. Unicode frames it as astonished; chats use it for big “what?!” moments.",
      "People send 😲 for huge reveals, unbelievable scores, and dramatic plot twists that need more than a soft hush.",
      "Compared with 😯, 😲 is louder astonishment. Compared with 😱, it is surprise/amazement more than scream-fear.",
      "It is not embarrassment. If you mean blushing awkward, use 😳. Keep 😲 for high-voltage surprise.",
    ],
    textingMeaning:
      "Send 😲 when something truly shocks or amazes you — bigger than a mild “oh.”",
    socialMeaning:
      "Viral comments and reveal posts love 😲. Stronger wow signal than 😯 for highlights.",
    caution:
      "Using 😲 on sensitive trauma can feel sensational. Match the tone to the person’s needs.",
    examples: [
      { context: "Reveal", text: "They got married already 😲" },
      { context: "Score", text: "You got a perfect score 😲" },
      { context: "Twist", text: "The ending though 😲" },
      { context: "News", text: "I can't believe that 😲" },
      { context: "Price drop", text: "It's half off 😲" },
      { context: "Caption", text: "Speechless shock 😲" },
    ],
    contextBlocks: [
      {
        title: "😲 vs 😯",
        body: "😯 is quiet hushed surprise. 😲 is stronger astonishment with bigger wow energy.",
      },
      {
        title: "😲 vs 😱",
        body: "😱 leans scream/fear shock. 😲 is amazed/astonished surprise without the scream face.",
      },
      {
        title: "😲 vs 😳",
        body: "😳 is flushed/embarrassed wide eyes. 😲 is astonished shock, not blush awkwardness.",
      },
      {
        title: "Work chats",
        body: "Okay for big unexpected wins. Soften for serious incident channels.",
      },
    ],
    searchIntents: [
      "astonished face emoji meaning",
      "😲 meaning in texting",
      "😲 vs 😯",
      "😲 vs 😱",
      "what does 😲 mean",
      "😲 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not sensationalize someone’s pain with 😲.",
      "Avoid when mild surprise fits — use 😯.",
      "Skip if you mean embarrassed flush — use 😳.",
    ],
    faqs: [
      {
        question: "What does 😲 mean in texting?",
        answer:
          "Strong surprise or amazement — a big astonished “wow.”",
      },
      {
        question: "😲 vs 😯?",
        answer:
          "😯 is quieter. 😲 is louder astonishment.",
      },
      {
        question: "😲 vs 😱?",
        answer:
          "😱 is fear-scream shock. 😲 is amazed surprise without screaming.",
      },
      {
        question: "Is 😲 the same as mind-blown?",
        answer:
          "Often used that way; 🤯 is even more “mind exploded” literal.",
      },
      {
        question: "Can I use 😲 at work?",
        answer:
          "Yes for big surprises in casual chat. Read the room for serious topics.",
      },
    ],
  },

  "flushed-face": {
    batchId: BATCH_ID,
    searchTitle: "Flushed Face Emoji Meaning: Embarrassed, Awkward, or Caught Off Guard?",
    snippetAnswer:
      "😳 Flushed Face means embarrassment, awkward surprise, or “I got caught.” Wide eyes plus flush — not pure shock like 😲.",
    detailedParagraphs: [
      "Flushed Face (😳) shows wide eyes with a red flushed look. Unicode frames it as flushed; texting made it the awkward/embarrassed classic.",
      "People send 😳 for cringe moments, unexpected compliments, being called out, and shy “uh oh” energy.",
      "Compared with 😲, 😳 is less “wow event” and more “I’m flustered.” Compared with 🫣, it is face-forward embarrassment, not peeking dread.",
      "It can also mark secondhand awkwardness. If you mean quiet surprise only, use 😯. Keep 😳 for flush and social awkward heat.",
    ],
    textingMeaning:
      "Use 😳 when you feel embarrassed, flustered, or awkwardly put on the spot.",
    socialMeaning:
      "Comments drop 😳 under cringe clips, thirst traps (playfully), and “I can’t believe I said that” captions.",
    caution:
      "Do not 😳 someone’s sincere vulnerability into a joke if they need support, not spotlight.",
    examples: [
      { context: "Embarrassed", text: "I said that out loud 😳" },
      { context: "Compliment", text: "Stop you're too nice 😳" },
      { context: "Caught", text: "You saw that 😳" },
      { context: "Cringe", text: "Why did I post that 😳" },
      { context: "Awkward", text: "Wrong group chat 😳" },
      { context: "Caption", text: "Main character humiliation 😳" },
    ],
    contextBlocks: [
      {
        title: "😳 vs 😲",
        body: "😲 is astonished shock/amazement. 😳 is flushed embarrassment or awkward fluster.",
      },
      {
        title: "😳 vs 🫣",
        body: "🫣 peeks through fingers with curious dread. 😳 faces the awkward moment head-on with a flush.",
      },
      {
        title: "😳 vs 😅",
        body: "😅 is nervous/awkward grin relief. 😳 is wide-eyed embarrassed flush without the sweat smile.",
      },
      {
        title: "Work chats",
        body: "Use carefully — fine for light “oops.” Prefer apology words for real mistakes.",
      },
    ],
    searchIntents: [
      "flushed face emoji meaning",
      "😳 meaning in texting",
      "😳 vs 😲",
      "😳 vs 😅",
      "what does 😳 mean",
      "😳 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not mock someone’s vulnerability with only 😳.",
      "Avoid when you mean pure amazement — use 😲.",
      "Skip as a substitute for a real apology.",
    ],
    faqs: [
      {
        question: "What does 😳 mean in texting?",
        answer:
          "Embarrassment, awkward surprise, or flustered “I got caught” energy.",
      },
      {
        question: "😳 vs 😲?",
        answer:
          "😲 is astonished wow. 😳 is flushed/embarrassed awkwardness.",
      },
      {
        question: "Is 😳 flirty?",
        answer:
          "Sometimes under compliments, but the core read is blush/awkward, not always flirt.",
      },
      {
        question: "😳 vs 🫣?",
        answer:
          "🫣 peeks while half-hiding. 😳 shows open-faced embarrassed flush.",
      },
      {
        question: "Can I use 😳 at work?",
        answer:
          "Only for light oops moments. Own real mistakes with clear words.",
      },
    ],
  },
};
