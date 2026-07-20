import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 5 — exclusivity for next face-extend emoji after Wave 4 faces-extend.
 * Differentiation focus: 🤕 injury, 🤠 yeehaw/irony, 🤥 lie, 😠 vs 😡 vs 🤬,
 * 😈 vs 👿, 👹 vs 👺, 🤖 vs 👾, ☠️ vs 💀, 🎃 Halloween, 👄 lips/kissy slang.
 */
const BATCH_ID = "45-p1-wave5-faces-extend";

export const batch45P1Wave5FacesExtend: Record<string, EmojiBatchEnrichment> = {
  "face-with-head-bandage": {
    batchId: BATCH_ID,
    searchTitle: "Face with Head Bandage Emoji Meaning: Hurt, Injured, or Sick?",
    snippetAnswer:
      "🤕 Face with Head Bandage means injury, headache, or “I got hurt” — bandage energy, not fever like 🤒 or nausea like 🤢.",
    detailedParagraphs: [
      "Face with Head Bandage (🤕) shows a face wrapped in a bandage. Unicode frames it as hurt; chat culture uses it for bumps, bruises, migraines, and “I’m banged up.”",
      "People send 🤕 after sports wipeouts, clumsy accidents, bad headaches, and “don’t make me laugh, it hurts” moments.",
      "Compared with 🤒, 🤕 is injury or head pain — not thermometer illness. Compared with 😷, it is not “I’m contagious”; it’s “I’m wounded.”",
      "It is rarely pure emotional sadness. If you need sick-in-bed, use 🤒; if you need soft illness vibes, use 🤧. Keep 🤕 for hurt / bandage energy.",
    ],
    textingMeaning:
      "Send 🤕 when you are hurt, sore, or nursing a headache — “ouch, that left a mark.”",
    socialMeaning:
      "Captions use 🤕 for gym fails, clumsy stories, and migraine days. Clearer injury signal than plain 😢.",
    caution:
      "Do not 🤕 someone’s serious injury as a joke. Bandage emoji can feel flippant after real harm.",
    examples: [
      { context: "Sports", text: "Twisted my ankle at practice 🤕" },
      { context: "Clumsy", text: "Walked into the door frame 🤕" },
      { context: "Headache", text: "Migraine day cancel everything 🤕" },
      { context: "Recovery", text: "Still sore from yesterday 🤕" },
      { context: "Story", text: "That fall looked worse than it was 🤕" },
      { context: "Caption", text: "Weekend warrior regrets 🤕" },
    ],
    contextBlocks: [
      {
        title: "🤕 vs 🤒",
        body: "🤒 is thermometer / fever-sick. 🤕 is bandage injury — hurt head or physical ouch, not primarily illness.",
      },
      {
        title: "🤕 vs 😷",
        body: "😷 is medical mask / “I’m sick or cautious.” 🤕 is wounded — bandage, not germs.",
      },
      {
        title: "🤕 vs 😢",
        body: "😢 is sad tears. 🤕 can be emotional after pain, but the core read is physical hurt.",
      },
      {
        title: "Work chats",
        body: "Fine for casual “out with a migraine.” Prefer clear words for medical leave or serious injury.",
      },
    ],
    searchIntents: [
      "face with head bandage emoji meaning",
      "🤕 meaning in texting",
      "🤕 vs 🤒",
      "🤕 vs 😷",
      "what does 🤕 mean",
      "🤕 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke-🤕 someone’s real accident or trauma.",
      "Avoid when you mean fever — use 🤒.",
      "Skip as the only reply to serious medical news.",
    ],
    faqs: [
      {
        question: "What does 🤕 mean in texting?",
        answer:
          "Hurt, injured, or nursing a headache — bandage / ouch energy.",
      },
      {
        question: "🤕 vs 🤒?",
        answer:
          "🤒 is sick with a thermometer. 🤕 is injury or head pain with a bandage.",
      },
      {
        question: "Is 🤕 only for head injuries?",
        answer:
          "Often yes visually, but people also use it for general sore / banged-up feelings.",
      },
      {
        question: "🤕 vs 😷?",
        answer:
          "😷 signals illness or mask caution. 🤕 signals being hurt.",
      },
      {
        question: "Can I use 🤕 at work?",
        answer:
          "Yes for light “headache / sore.” Use clear language for formal sick leave.",
      },
    ],
  },

  "cowboy-hat-face": {
    batchId: BATCH_ID,
    searchTitle: "Cowboy Hat Face Emoji Meaning: Yeehaw, Irony, or Flirty?",
    snippetAnswer:
      "🤠 Cowboy Hat Face means yeehaw energy, ironic swagger, or playful “howdy” — hat humor more than plain smile 😊.",
    detailedParagraphs: [
      "Cowboy Hat Face (🤠) shows a smiling face under a cowboy hat. Unicode frames it as cowboy; chat culture uses it for Western jokes, chaotic confidence, and meme swagger.",
      "People send 🤠 for country music vibes, “partner” bits, ironic flexes, and “I’m doing this unhinged thing with style.”",
      "Compared with 😎, 🤠 is less cool-sunglasses and more costume swagger. Compared with 😏, it is less sly flirt and more yeehaw / bit character.",
      "It is rarely serious anger or sadness. If you need straight cool, use 😎; if you need soft smile, use 😊. Keep 🤠 for hat energy and ironic bravado.",
    ],
    textingMeaning:
      "Use 🤠 when you want playful cowboy energy — howdy, ironic confidence, or “yeehaw I’m in.”",
    socialMeaning:
      "Captions lean 🤠 for country nights, costume posts, and chaotic-main-character memes. Stronger bit signal than plain 😎.",
    caution:
      "Tone can read as try-hard or mocking if the audience isn’t in on the joke. Match the room.",
    examples: [
      { context: "Plans", text: "Road trip playlist locked in 🤠" },
      { context: "Irony", text: "Showing up late like a legend 🤠" },
      { context: "Music", text: "Country night with the crew 🤠" },
      { context: "Flex", text: "Finished the whole project solo 🤠" },
      { context: "Greeting", text: "Howdy partner 🤠" },
      { context: "Caption", text: "Main character energy this weekend 🤠" },
    ],
    contextBlocks: [
      {
        title: "🤠 vs 😎",
        body: "😎 is classic cool / sunglasses confidence. 🤠 is cowboy hat swagger — more costume, yeehaw, or ironic bit.",
      },
      {
        title: "🤠 vs 😏",
        body: "😏 is sly flirt or knowing smirk. 🤠 is broader playful bravado, not primarily flirty.",
      },
      {
        title: "🤠 vs 😊",
        body: "😊 is warm friendly smile. 🤠 adds hat humor and theatrical confidence.",
      },
      {
        title: "Work chats",
        body: "Only in very casual teams that share meme tone. Prefer plain wording for formal updates.",
      },
    ],
    searchIntents: [
      "cowboy hat face emoji meaning",
      "🤠 meaning in texting",
      "🤠 vs 😎",
      "yeehaw emoji meaning",
      "what does 🤠 mean",
      "🤠 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid in formal messages where costume humor feels odd.",
      "Do not use 🤠 to mock someone’s accent or culture.",
      "Skip when you mean simple friendliness — use 😊.",
    ],
    faqs: [
      {
        question: "What does 🤠 mean in texting?",
        answer:
          "Yeehaw / cowboy swagger — playful confidence, irony, or howdy humor.",
      },
      {
        question: "🤠 vs 😎?",
        answer:
          "😎 is cool sunglasses. 🤠 is hat-cowboy energy — more bit and yeehaw.",
      },
      {
        question: "Is 🤠 flirty?",
        answer:
          "Sometimes as playful swagger, but 😏 or 😉 usually read clearer as flirt.",
      },
      {
        question: "Is 🤠 always ironic?",
        answer:
          "Often meme-ironic, but people also use it sincerely for country / Western vibes.",
      },
      {
        question: "Can I use 🤠 at work?",
        answer:
          "Only with casual meme culture. Otherwise it can look unserious.",
      },
    ],
  },

  "lying-face": {
    batchId: BATCH_ID,
    searchTitle: "Lying Face Emoji Meaning: Liar, Joke, or Sarcasm?",
    snippetAnswer:
      "🤥 Lying Face means fibbing, calling out a lie, or playful “I’m lying” — Pinocchio nose energy, not confused 🤔.",
    detailedParagraphs: [
      "Lying Face (🤥) shows a face with a long nose. Unicode frames it as lying; chat culture uses it for white lies, sarcasm, and “that’s not true.”",
      "People send 🤥 to confess a tiny fib, tease a friend who stretched the truth, or mark obvious nonsense in a story.",
      "Compared with 😅, 🤥 is not awkward relief — it names the lie. Compared with 🤔, it is not curiosity; it is deception or calling deception out.",
      "It is rarely pure anger. If you need mad reaction, use 😠; if you need skeptical side-eye, use 😒. Keep 🤥 for lie / fib energy.",
    ],
    textingMeaning:
      "Send 🤥 when someone (or you) is fibbing — “sure Jan,” tiny lies, or playful dishonesty.",
    socialMeaning:
      "Captions use 🤥 for fake claims, influencer callouts, and “I definitely did my homework” irony. Clearer than vague 😏 for lying.",
    caution:
      "Calling someone 🤥 in a serious argument can escalate. Soften with words if the stakes are real.",
    examples: [
      { context: "Tease", text: "You were 'almost there' an hour ago 🤥" },
      { context: "Confess", text: "I said I left already 🤥" },
      { context: "Sarcasm", text: "Totally love Mondays 🤥" },
      { context: "Callout", text: "That story does not add up 🤥" },
      { context: "Joke", text: "I'll only eat one cookie 🤥" },
      { context: "Caption", text: "New year new me (for three days) 🤥" },
    ],
    contextBlocks: [
      {
        title: "🤥 vs 😅",
        body: "😅 is awkward chuckle-sweat. 🤥 specifically signals a lie or fake claim.",
      },
      {
        title: "🤥 vs 🤔",
        body: "🤔 is thinking / unsure. 🤥 is dishonesty — Pinocchio, not pondering.",
      },
      {
        title: "🤥 vs 😒",
        body: "😒 is unimpressed side-eye. 🤥 names the fib more directly.",
      },
      {
        title: "Work chats",
        body: "Risky — “lying” emoji can sound accusatory. Prefer careful wording for disputes.",
      },
    ],
    searchIntents: [
      "lying face emoji meaning",
      "🤥 meaning in texting",
      "🤥 vs 😅",
      "pinocchio emoji meaning",
      "what does 🤥 mean",
      "🤥 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤥 accuse someone of serious fraud as a joke.",
      "Avoid in sensitive trust conversations without clear words.",
      "Skip when you mean confusion — use 🤔.",
    ],
    faqs: [
      {
        question: "What does 🤥 mean in texting?",
        answer:
          "Lying or calling out a fib — playful or pointed “that’s not true.”",
      },
      {
        question: "Is 🤥 always mean?",
        answer:
          "No. Friends often use it for tiny white lies and sarcastic jokes.",
      },
      {
        question: "🤥 vs 😅?",
        answer:
          "😅 is awkward laughter. 🤥 specifically means lying / fake.",
      },
      {
        question: "Can 🤥 mean sarcasm?",
        answer:
          "Yes — people attach it to obviously false statements for irony.",
      },
      {
        question: "Can I use 🤥 at work?",
        answer:
          "Usually no. It can read as accusing a coworker of lying.",
      },
    ],
  },

  "angry-face": {
    batchId: BATCH_ID,
    searchTitle: "Angry Face Emoji Meaning: Mad, Annoyed, or Furious?",
    snippetAnswer:
      "😠 Angry Face means clear anger — mad frown without the red “steam” intensity of 😡 or the censored rant of 🤬.",
    detailedParagraphs: [
      "Angry Face (😠) shows furrowed brows and a frowning mouth. Unicode frames it as angry; texts use it for irritation, frustration, and “I’m mad.”",
      "People send 😠 for unfair treatment, rude replies, traffic rage (mild), and “that annoyed me” moments.",
      "Compared with 😡, 😠 is standard angry — less red-pouting fury. Compared with 🤬, it has no swearing symbols; cleaner anger, not cursing explosion.",
      "It is rarely playful teasing alone. If you need cute pout, use 😤 lightly; if you need nuclear rage, use 🤬. Keep 😠 for straightforward mad.",
    ],
    textingMeaning:
      "Use 😠 when you are angry or annoyed — “that made me mad” without full red fury.",
    socialMeaning:
      "Captions use 😠 for rant posts, customer-service fails, and “don’t test me” vibes. Milder than 😡 for many readers.",
    caution:
      "Bare 😠 in conflict can escalate. Soften with context if you still want to talk it out.",
    examples: [
      { context: "Rude", text: "They cut the line again 😠" },
      { context: "Work", text: "Another last-minute change 😠" },
      { context: "Traffic", text: "Been stuck for forty minutes 😠" },
      { context: "Message", text: "Don't talk to me like that 😠" },
      { context: "Sports", text: "That was a terrible call 😠" },
      { context: "Caption", text: "Customer service saga continues 😠" },
    ],
    contextBlocks: [
      {
        title: "😠 vs 😡",
        body: "😡 is pouting / redder fury — often reads hotter. 😠 is classic angry frown, a notch less explosive for many people.",
      },
      {
        title: "😠 vs 🤬",
        body: "🤬 is swearing / symbols-on-mouth rage. 😠 is angry without the censored curse energy.",
      },
      {
        title: "😠 vs 😤",
        body: "😤 is proud huff / “hmph” steam. 😠 is clearer straight anger.",
      },
      {
        title: "Work chats",
        body: "Risky. Prefer calm words for feedback; emoji anger can look unprofessional.",
      },
    ],
    searchIntents: [
      "angry face emoji meaning",
      "😠 meaning in texting",
      "😠 vs 😡",
      "😠 vs 🤬",
      "what does 😠 mean",
      "😠 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid as the only reply in a serious conflict.",
      "Do not 😠 someone for a vulnerable share.",
      "Skip when you mean cursing meltdown — use 🤬.",
    ],
    faqs: [
      {
        question: "What does 😠 mean in texting?",
        answer:
          "Anger or strong annoyance — “I’m mad about this.”",
      },
      {
        question: "😠 vs 😡?",
        answer:
          "😡 often feels hotter / poutier. 😠 is standard angry face.",
      },
      {
        question: "😠 vs 🤬?",
        answer:
          "🤬 adds swear-symbol rage. 😠 is angry without the curse censor.",
      },
      {
        question: "Is 😠 playful?",
        answer:
          "Sometimes between friends, but it usually still reads as real irritation.",
      },
      {
        question: "Can I use 😠 at work?",
        answer:
          "Better not. Clear, calm wording beats angry emoji in professional chats.",
      },
    ],
  },

  "pouting-face": {
    batchId: BATCH_ID,
    searchTitle: "Pouting Face Emoji Meaning: Furious, Mad, or Red Anger?",
    snippetAnswer:
      "😡 Pouting Face means hot anger or furious pout — redder intensity than 😠, still short of full swear-rage 🤬.",
    detailedParagraphs: [
      "Pouting Face (😡) shows a red-tinged angry face with a tight frown. Unicode frames it as pouting; chat culture treats it as furious or “I’m heated.”",
      "People send 😡 for bigger blowups, unfair fights, and “I am actually livid” reactions — stronger than everyday 😠 for many users.",
      "Compared with 😠, 😡 feels redder and more intense. Compared with 🤬, it is pure fury face without the @#$% symbols of verbal meltdown.",
      "It is rarely mild disappointment. If you need soft letdown, use 😞; if you need censored cursing, use 🤬. Keep 😡 for hot mad / pout fury.",
    ],
    textingMeaning:
      "Send 😡 when anger is boiling — bigger than mild annoyance, short of swear-symbol meltdown.",
    socialMeaning:
      "Rant captions, sports fury, and “enough is enough” posts lean on 😡. Hotter signal than 😠 in many feeds.",
    caution:
      "Rage emoji can shut down conversation. Use carefully if you still want repair.",
    examples: [
      { context: "Fight", text: "I can't believe they said that 😡" },
      { context: "News", text: "This policy is ridiculous 😡" },
      { context: "Sports", text: "Ref ruined the whole game 😡" },
      { context: "Betrayal", text: "They lied to my face 😡" },
      { context: "Service", text: "Charged me twice for nothing 😡" },
      { context: "Caption", text: "Absolutely done with this week 😡" },
    ],
    contextBlocks: [
      {
        title: "😡 vs 😠",
        body: "😠 is standard angry. 😡 is pouting / redder fury — usually reads as more intense heat.",
      },
      {
        title: "😡 vs 🤬",
        body: "🤬 is face with symbols — swearing rage. 😡 is furious face without the curse censor.",
      },
      {
        title: "😡 vs 😤",
        body: "😤 can be smug or frustrated huff. 😡 is clearer red anger / pout.",
      },
      {
        title: "Work chats",
        body: "Almost never. Red fury emoji looks unprofessional; use measured language.",
      },
    ],
    searchIntents: [
      "pouting face emoji meaning",
      "😡 meaning in texting",
      "😡 vs 😠",
      "😡 vs 🤬",
      "what does 😡 mean",
      "😡 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😡 escalate a calm discussion into a fight.",
      "Avoid when mild annoyance is enough — use 😠 or words.",
      "Skip in professional or customer-facing messages.",
    ],
    faqs: [
      {
        question: "What does 😡 mean in texting?",
        answer:
          "Hot anger or furious pout — stronger mad energy than everyday 😠 for many people.",
      },
      {
        question: "😡 vs 😠?",
        answer:
          "😠 is classic angry. 😡 usually feels redder and more intense.",
      },
      {
        question: "Why is it called pouting?",
        answer:
          "Unicode name is Pouting Face; in chat it mostly reads as fury, not cute pout.",
      },
      {
        question: "😡 vs 🤬?",
        answer:
          "🤬 implies swearing. 😡 is pure angry/pouting face without symbols.",
      },
      {
        question: "Can I use 😡 at work?",
        answer:
          "No — it signals uncontrolled rage. Prefer clear, calm feedback.",
      },
    ],
  },

  "face-with-symbols-on-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Face with Symbols on Mouth Emoji Meaning: Swearing or Rage?",
    snippetAnswer:
      "🤬 Face with Symbols on Mouth means cursing rage — @#$% meltdown. It is swearing anger, beyond plain mad 😠 or red 😡.",
    detailedParagraphs: [
      "Face with Symbols on Mouth (🤬) shows an angry face covered with grawlix symbols. Unicode frames it as swearing; texts use it for “I’m cursing” fury.",
      "People send 🤬 for explosive frustration, traffic meltdowns, game rage, and “I cannot believe this nonsense” moments.",
      "Compared with 😠 and 😡, 🤬 adds verbal swearing energy. Compared with 👿, it is human curse-rage, not devil-villain vibes.",
      "It is rarely light teasing. If you need mild mad, use 😠; if you need red pout, use 😡. Keep 🤬 for censored swear-level anger.",
    ],
    textingMeaning:
      "Use 🤬 when you are furious enough to swear — peak rant energy with censored curse symbols.",
    socialMeaning:
      "Captions use 🤬 for rage tweets, gaming tilt, and “everything is broken” posts. Strongest anger face in the 😠/😡/🤬 ladder.",
    caution:
      "Looks aggressive and unfiltered. Bad fit for anything professional or delicate.",
    examples: [
      { context: "Tech", text: "App crashed and deleted my draft 🤬" },
      { context: "Traffic", text: "Third red light in a row 🤬" },
      { context: "Gaming", text: "Lag stole that win 🤬" },
      { context: "Bills", text: "Fee for literally nothing 🤬" },
      { context: "Rant", text: "I am so done with this 🤬" },
      { context: "Caption", text: "Monday already tried it 🤬" },
    ],
    contextBlocks: [
      {
        title: "🤬 vs 😠",
        body: "😠 is angry. 🤬 is angry plus swearing symbols — curse-level meltdown.",
      },
      {
        title: "🤬 vs 😡",
        body: "😡 is red furious pout. 🤬 specifically signals verbal rage / censored swearing.",
      },
      {
        title: "🤬 vs 👿",
        body: "👿 is angry devil. 🤬 is human face mid-curse, not horned villain.",
      },
      {
        title: "Work chats",
        body: "Never for real workplace conflict. It reads as hostile and unprofessional.",
      },
    ],
    searchIntents: [
      "face with symbols on mouth emoji meaning",
      "🤬 meaning in texting",
      "🤬 vs 😡",
      "🤬 vs 😠",
      "what does 🤬 mean",
      "🤬 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 🤬 in professional or customer chats.",
      "Avoid when mild frustration is enough — use 😠.",
      "Skip as a reply to someone’s vulnerable message.",
    ],
    faqs: [
      {
        question: "What does 🤬 mean in texting?",
        answer:
          "Swearing rage — furious enough that the mouth is covered in curse symbols.",
      },
      {
        question: "🤬 vs 😡?",
        answer:
          "😡 is hot anger. 🤬 adds explicit swearing / grawlix energy.",
      },
      {
        question: "🤬 vs 😠?",
        answer:
          "😠 is basic mad. 🤬 is peak cursing meltdown.",
      },
      {
        question: "Is 🤬 always serious?",
        answer:
          "Often exaggerated for comedy, but it still reads as intense anger.",
      },
      {
        question: "Can I use 🤬 at work?",
        answer:
          "No. Use words — and keep them professional.",
      },
    ],
  },

  "smiling-face-with-horns": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Horns Emoji Meaning: Mischief or Evil?",
    snippetAnswer:
      "😈 Smiling Face with Horns means playful mischief, cheeky trouble, or flirty “I’m up to something” — smiling devil, not furious 👿.",
    detailedParagraphs: [
      "Smiling Face with Horns (😈) shows a purple devil face with a grin. Unicode frames it as smiling horns; chat culture uses it for mischief, temptation, and playful evil.",
      "People send 😈 for naughty plans, spicy jokes, scheming with friends, and “watch me be chaotic” energy.",
      "Compared with 👿, 😈 is smiling and fun — mischief more than rage. Compared with 😏, it adds devil costume to the sly vibe.",
      "It is rarely sincere kindness. If you need warm nice, use 😇; if you need angry devil, use 👿. Keep 😈 for grinning trouble.",
    ],
    textingMeaning:
      "Send 😈 for mischievous, flirty, or playfully wicked vibes — “I’m being bad (on purpose).”",
    socialMeaning:
      "Captions use 😈 for nightlife, spicy takes, and chaotic friend energy. Clearer mischief than plain 😏.",
    caution:
      "Can read as creepy or too sexual depending on context. Match tone with the relationship.",
    examples: [
      { context: "Plans", text: "Plotting something fun for Friday 😈" },
      { context: "Flirty", text: "Guess who is thinking about you 😈" },
      { context: "Joke", text: "I may have eaten the last slice 😈" },
      { context: "Challenge", text: "Dare accepted 😈" },
      { context: "Tease", text: "I know what you did 😈" },
      { context: "Caption", text: "Weekend mode: no rules 😈" },
    ],
    contextBlocks: [
      {
        title: "😈 vs 👿",
        body: "👿 is angry devil / mean energy. 😈 is smiling mischief — playful wickedness, not rage.",
      },
      {
        title: "😈 vs 😏",
        body: "😏 is sly smirk. 😈 adds horns and “little devil” trouble on top.",
      },
      {
        title: "😈 vs 😇",
        body: "😇 is innocent halo. 😈 is the opposite bit — temptation and mischief.",
      },
      {
        title: "Work chats",
        body: "Only for very casual joke culture. Easy to misread as inappropriate.",
      },
    ],
    searchIntents: [
      "smiling face with horns emoji meaning",
      "😈 meaning in texting",
      "😈 vs 👿",
      "devil emoji meaning",
      "what does 😈 mean",
      "😈 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid with people who may read it as creepy or sexual.",
      "Do not use 😈 when you mean angry devil — use 👿.",
      "Skip in formal or professional messages.",
    ],
    faqs: [
      {
        question: "What does 😈 mean in texting?",
        answer:
          "Playful mischief, naughty plans, or flirty “I’m up to no good.”",
      },
      {
        question: "😈 vs 👿?",
        answer:
          "😈 smiles — fun trouble. 👿 is angry / menacing devil.",
      },
      {
        question: "Is 😈 flirty?",
        answer:
          "Often yes, especially with teasing or spicy context.",
      },
      {
        question: "😈 vs 😏?",
        answer:
          "😏 is smirk alone. 😈 is smirk-plus-devil mischief.",
      },
      {
        question: "Can I use 😈 at work?",
        answer:
          "Rarely. It can feel unprofessional or suggestive.",
      },
    ],
  },

  "angry-face-with-horns": {
    batchId: BATCH_ID,
    searchTitle: "Angry Face with Horns Emoji Meaning: Evil Anger or Villain?",
    snippetAnswer:
      "👿 Angry Face with Horns means mean, villainous anger — angry devil, not the playful grin of 😈.",
    detailedParagraphs: [
      "Angry Face with Horns (👿) shows a frowning devil face. Unicode frames it as angry horns; chat culture uses it for malice, villain energy, and “I’m being evil.”",
      "People send 👿 for bitter rivals, petty schemes, and “enemy mode” jokes — darker than smiling 😈.",
      "Compared with 😈, 👿 drops the smile for hostility. Compared with 🤬, it is devil-character anger, not human swearing face.",
      "It is rarely lighthearted alone. If you need cute mischief, use 😈; if you need human curse rage, use 🤬. Keep 👿 for angry devil / villain vibes.",
    ],
    textingMeaning:
      "Use 👿 when anger feels mean or villainous — “evil mode,” not playful cheekiness.",
    socialMeaning:
      "Captions lean 👿 for rivalry posts, villain arcs, and dark humor. Meaner signal than 😈.",
    caution:
      "Can feel genuinely hostile. Soften if you are joking with someone sensitive to conflict.",
    examples: [
      { context: "Rivalry", text: "They started it so I finished it 👿" },
      { context: "Petty", text: "Blocked and thriving 👿" },
      { context: "Game", text: "Final boss energy activated 👿" },
      { context: "Mood", text: "Do not test me today 👿" },
      { context: "Joke", text: "Evil twin reporting for duty 👿" },
      { context: "Caption", text: "Villain era unlocked 👿" },
    ],
    contextBlocks: [
      {
        title: "👿 vs 😈",
        body: "😈 is smiling mischief. 👿 is angry devil — hostility and villain energy, not playful grin.",
      },
      {
        title: "👿 vs 🤬",
        body: "🤬 is human swearing rage. 👿 is horned devil anger / mean character.",
      },
      {
        title: "👿 vs 😡",
        body: "😡 is red human fury. 👿 adds demonic / villain framing to the anger.",
      },
      {
        title: "Work chats",
        body: "Poor fit. Devil-anger emoji can look threatening or immature at work.",
      },
    ],
    searchIntents: [
      "angry face with horns emoji meaning",
      "👿 meaning in texting",
      "👿 vs 😈",
      "angry devil emoji meaning",
      "what does 👿 mean",
      "👿 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 👿 threaten or intimidate someone.",
      "Avoid when you mean playful mischief — use 😈.",
      "Skip in professional communication.",
    ],
    faqs: [
      {
        question: "What does 👿 mean in texting?",
        answer:
          "Angry devil / villain anger — meaner than smiling 😈.",
      },
      {
        question: "👿 vs 😈?",
        answer:
          "😈 is playful mischief. 👿 is angry, hostile devil energy.",
      },
      {
        question: "Is 👿 the same as 😡?",
        answer:
          "No. 😡 is human red fury. 👿 is devil-horned anger.",
      },
      {
        question: "Can 👿 be a joke?",
        answer:
          "Yes among friends for villain-arc humor, but it still reads darker.",
      },
      {
        question: "Can I use 👿 at work?",
        answer:
          "No — it can seem aggressive or childish.",
      },
    ],
  },

  ogre: {
    batchId: BATCH_ID,
    searchTitle: "Ogre Emoji Meaning: Monster, Rage, or Japanese Oni?",
    snippetAnswer:
      "👹 Ogre means scary monster, oni folklore, or “beast mode” — red ogre face, distinct from tengu-mask 👺.",
    detailedParagraphs: [
      "Ogre (👹) shows a red horned ogre often tied to Japanese oni imagery. Unicode frames it as ogre; chat culture uses it for monsters, scary fun, and fierce energy.",
      "People send 👹 for Halloween vibes, “I’m a monster,” gaming intimidation, and chaotic strength jokes.",
      "Compared with 👺, 👹 is the ogre/oni creature; 👺 is goblin / tengu mask — different folklore face, often red-mask style. Compared with 👿, 👹 is monster creature, not purple devil smiley.",
      "It is rarely soft emotion. If you need devil mischief, use 😈; if you need tengu/goblin mask, use 👺. Keep 👹 for ogre / oni monster energy.",
    ],
    textingMeaning:
      "Send 👹 for monster, oni, or fierce “beast” vibes — scary-fun more than everyday anger faces.",
    socialMeaning:
      "Captions use 👹 for Halloween, sports intimidation, and “unhinged power” memes. Clearer monster signal than 👿.",
    caution:
      "Folklore roots differ by culture. Don’t reduce sacred or cultural symbols to empty jokes if the audience cares.",
    examples: [
      { context: "Halloween", text: "Costume night starts now 👹" },
      { context: "Sports", text: "Game face on 👹" },
      { context: "Gaming", text: "Raid boss incoming 👹" },
      { context: "Mood", text: "Slept wrong and woke up feral 👹" },
      { context: "Joke", text: "Hunger turned me into this 👹" },
      { context: "Caption", text: "Beast mode activated 👹" },
    ],
    contextBlocks: [
      {
        title: "👹 vs 👺",
        body: "👺 is goblin / tengu-style mask. 👹 is ogre / oni monster face — different creature tradition.",
      },
      {
        title: "👹 vs 👿",
        body: "👿 is angry purple devil. 👹 is red ogre monster, closer to folklore beast than chat-devil.",
      },
      {
        title: "👹 vs 😈",
        body: "😈 is smiling mischief devil. 👹 is scary ogre energy, less flirty.",
      },
      {
        title: "Work chats",
        body: "Only for casual Halloween or meme threads. Odd in serious updates.",
      },
    ],
    searchIntents: [
      "ogre emoji meaning",
      "👹 meaning in texting",
      "👹 vs 👺",
      "oni emoji meaning",
      "what does 👹 mean",
      "👹 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid mocking cultural festivals or religious imagery.",
      "Do not use 👹 when you mean tengu/goblin mask — use 👺.",
      "Skip in formal messages.",
    ],
    faqs: [
      {
        question: "What does 👹 mean in texting?",
        answer:
          "Ogre / oni monster energy — scary-fun, fierce, or Halloween beast vibes.",
      },
      {
        question: "👹 vs 👺?",
        answer:
          "👹 is ogre/oni. 👺 is goblin/tengu mask — related scary faces, different designs.",
      },
      {
        question: "Is 👹 Japanese?",
        answer:
          "The design is often linked to oni; usage online is broader monster slang too.",
      },
      {
        question: "👹 vs 👿?",
        answer:
          "👿 is angry devil emoji. 👹 is ogre creature / folklore monster.",
      },
      {
        question: "Can I use 👹 at work?",
        answer:
          "Only in light Halloween or joke contexts with a casual team.",
      },
    ],
  },

  goblin: {
    batchId: BATCH_ID,
    searchTitle: "Goblin Emoji Meaning: Tengu Mask, Anger, or Japanese Folklore?",
    snippetAnswer:
      "👺 Goblin means tengu-style mask, fierce scowl, or goblin face — red mask energy, not the ogre creature 👹.",
    detailedParagraphs: [
      "Goblin (👺) shows a red frowning mask often associated with Japanese tengu. Unicode frames it as goblin; chat culture uses it for fierce faces, folklore, and “angry mask” jokes.",
      "People send 👺 for cultural festival vibes, scary-mask humor, and sharp “don’t mess with me” looks.",
      "Compared with 👹, 👺 reads more as a mask / tengu face than a full ogre body-creature vibe. Compared with 😡, it is folklore mask, not human red pout.",
      "It is rarely soft cuteness. If you need ogre/oni, use 👹; if you need human anger, use 😠. Keep 👺 for goblin / tengu mask energy.",
    ],
    textingMeaning:
      "Use 👺 for tengu/goblin mask vibes — fierce folklore face more than everyday mad emoji.",
    socialMeaning:
      "Captions use 👺 for Japan travel, festival masks, and fierce aesthetic posts. Distinct from generic 👹 monster memes.",
    caution:
      "Respect cultural context. Tengu and festival masks aren’t just random “angry stickers” for every joke.",
    examples: [
      { context: "Travel", text: "Temple festival masks were wild 👺" },
      { context: "Mood", text: "Side-eye but make it folklore 👺" },
      { context: "Costume", text: "Mask check before the parade 👺" },
      { context: "Gaming", text: "Summon the red mask 👺" },
      { context: "Joke", text: "Manager face when deadlines slip 👺" },
      { context: "Caption", text: "Protective energy only 👺" },
    ],
    contextBlocks: [
      {
        title: "👺 vs 👹",
        body: "👹 is ogre/oni monster. 👺 is goblin/tengu-style mask — scowling red face with different folklore roots.",
      },
      {
        title: "👺 vs 😡",
        body: "😡 is human pouting fury. 👺 is mask/creature symbolism, not everyday chat anger.",
      },
      {
        title: "👺 vs 👿",
        body: "👿 is purple angry devil. 👺 is tengu/goblin mask tradition.",
      },
      {
        title: "Work chats",
        body: "Unusual outside travel or cultural chat. Prefer plain language for conflict.",
      },
    ],
    searchIntents: [
      "goblin emoji meaning",
      "👺 meaning in texting",
      "👺 vs 👹",
      "tengu emoji meaning",
      "what does 👺 mean",
      "👺 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not mock Japanese cultural or religious mask traditions.",
      "Avoid when you mean ogre/oni — use 👹.",
      "Skip as a casual stand-in for 😡 in serious fights.",
    ],
    faqs: [
      {
        question: "What does 👺 mean in texting?",
        answer:
          "Goblin / tengu-style mask — fierce folklore face or scary-mask vibe.",
      },
      {
        question: "👺 vs 👹?",
        answer:
          "👹 is ogre/oni. 👺 is goblin/tengu mask — similar scary lane, different design.",
      },
      {
        question: "Is 👺 a tengu?",
        answer:
          "Many platforms draw it like a tengu mask; Unicode names it Goblin.",
      },
      {
        question: "👺 vs 😡?",
        answer:
          "😡 is human anger. 👺 is mask/folklore imagery.",
      },
      {
        question: "Can I use 👺 at work?",
        answer:
          "Only in casual cultural or travel chat — not for real conflict.",
      },
    ],
  },

  robot: {
    batchId: BATCH_ID,
    searchTitle: "Robot Emoji Meaning: AI, Bot, or Automated?",
    snippetAnswer:
      "🤖 Robot means bot, AI, automation, or “I’m a machine” humor — robot face, not the arcade alien 👾.",
    detailedParagraphs: [
      "Robot (🤖) shows a classic robot head. Unicode frames it as robot; chat culture uses it for AI tools, chatbots, automation, and mechanical humor.",
      "People send 🤖 for “auto-reply energy,” tech demos, sci-fi vibes, and “I feel like a robot today” burnout jokes.",
      "Compared with 👾, 🤖 is robot/AI, not space-invader monster. Compared with 👽, it is machine, not extraterrestrial.",
      "It is rarely pure emotion. If you need alien creature game vibes, use 👾; if you need human feelings, use a face emoji. Keep 🤖 for bots and machines.",
    ],
    textingMeaning:
      "Send 🤖 for AI, bots, automation, or “running on autopilot” jokes.",
    socialMeaning:
      "Tech captions, AI announcements, and “NPC / robot mode” memes lean on 🤖. Clearer bot signal than 👾.",
    caution:
      "Calling a person 🤖 can feel dehumanizing. Soften if you mean burnout, not insult.",
    examples: [
      { context: "Tech", text: "Let the bot handle triage 🤖" },
      { context: "AI", text: "Drafted this with a little help 🤖" },
      { context: "Burnout", text: "Brain on autopilot today 🤖" },
      { context: "Sci-fi", text: "Future is already here 🤖" },
      { context: "Joke", text: "Beep boop need coffee 🤖" },
      { context: "Caption", text: "Shipping the new assistant 🤖" },
    ],
    contextBlocks: [
      {
        title: "🤖 vs 👾",
        body: "👾 is alien monster / retro game invader. 🤖 is robot / AI machine face.",
      },
      {
        title: "🤖 vs 👽",
        body: "👽 is alien being. 🤖 is built machine — tech and bots, not space visitor.",
      },
      {
        title: "🤖 vs 💻",
        body: "💻 is the computer device. 🤖 personifies the bot / AI agent.",
      },
      {
        title: "Work chats",
        body: "Great for labeling automated messages or AI features. Avoid calling coworkers robots.",
      },
    ],
    searchIntents: [
      "robot emoji meaning",
      "🤖 meaning in texting",
      "🤖 vs 👾",
      "AI emoji meaning",
      "what does 🤖 mean",
      "🤖 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤖 insult someone’s personality or empathy.",
      "Avoid when you mean space-invader creature — use 👾.",
      "Skip as a vague reaction with no tech context.",
    ],
    faqs: [
      {
        question: "What does 🤖 mean in texting?",
        answer:
          "Robot, bot, AI, or autopilot humor — machine energy.",
      },
      {
        question: "🤖 vs 👾?",
        answer:
          "👾 is alien monster / arcade invader. 🤖 is robot / AI.",
      },
      {
        question: "Is 🤖 used for ChatGPT?",
        answer:
          "Often yes — people tag AI tools and bot replies with 🤖.",
      },
      {
        question: "Can 🤖 mean burnout?",
        answer:
          "Yes — “I feel like a robot” / running on autopilot.",
      },
      {
        question: "Can I use 🤖 at work?",
        answer:
          "Yes for automation and AI topics. Don’t use it to belittle people.",
      },
    ],
  },

  "alien-monster": {
    batchId: BATCH_ID,
    searchTitle: "Alien Monster Emoji Meaning: Space Invader, Game, or Weird?",
    snippetAnswer:
      "👾 Alien Monster means retro space-invader creature, gaming chaos, or “weird boss” energy — not the robot 🤖 or classic alien 👽.",
    detailedParagraphs: [
      "Alien Monster (👾) shows a purple pixel-style alien creature. Unicode frames it as alien monster; chat culture ties it to arcade invaders, gaming, and quirky menace.",
      "People send 👾 for game nights, retro vibes, “this bug is an alien,” and playful monster chaos.",
      "Compared with 🤖, 👾 is creature/invader, not AI robot. Compared with 👽, it is monster arcade alien, not the big-eyed gray alien face.",
      "It is rarely sincere emotion. If you need bot/AI, use 🤖; if you need classic alien, use 👽. Keep 👾 for invader / game-monster energy.",
    ],
    textingMeaning:
      "Use 👾 for gaming, retro invaders, or quirky alien-monster chaos.",
    socialMeaning:
      "Gaming captions, pixel art posts, and “glitch in the matrix” jokes lean on 👾. Stronger arcade signal than 👽.",
    caution:
      "Easy to confuse with 👽 or 🤖. Pick the creature you actually mean.",
    examples: [
      { context: "Gaming", text: "Boss fight in ten 👾" },
      { context: "Retro", text: "Arcade night unlocked 👾" },
      { context: "Bug", text: "This error feels sentient 👾" },
      { context: "Party", text: "Costume is pure invader 👾" },
      { context: "Joke", text: "Brain has left the solar system 👾" },
      { context: "Caption", text: "High score or nothing 👾" },
    ],
    contextBlocks: [
      {
        title: "👾 vs 🤖",
        body: "🤖 is robot / AI. 👾 is alien monster — space-invader creature, not a machine head.",
      },
      {
        title: "👾 vs 👽",
        body: "👽 is classic alien face. 👾 is monster/invader design with arcade DNA.",
      },
      {
        title: "👾 vs 👹",
        body: "👹 is ogre/oni folklore. 👾 is sci-fi / game alien monster.",
      },
      {
        title: "Work chats",
        body: "Fine for game-night plans or bug humor on casual teams.",
      },
    ],
    searchIntents: [
      "alien monster emoji meaning",
      "👾 meaning in texting",
      "👾 vs 🤖",
      "👾 vs 👽",
      "what does 👾 mean",
      "👾 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid when you mean AI/bot — use 🤖.",
      "Do not confuse it with 👽 if you mean classic alien.",
      "Skip in formal business writing.",
    ],
    faqs: [
      {
        question: "What does 👾 mean in texting?",
        answer:
          "Alien monster / space-invader vibes — gaming and quirky chaos.",
      },
      {
        question: "👾 vs 🤖?",
        answer:
          "🤖 is robot. 👾 is alien monster creature.",
      },
      {
        question: "👾 vs 👽?",
        answer:
          "👽 is classic alien. 👾 is the arcade-style monster alien.",
      },
      {
        question: "Is 👾 from Space Invaders?",
        answer:
          "The look is widely associated with retro invader aliens, yes.",
      },
      {
        question: "Can I use 👾 at work?",
        answer:
          "Yes for casual gaming or bug jokes; not for formal docs.",
      },
    ],
  },

  "skull-and-crossbones": {
    batchId: BATCH_ID,
    searchTitle: "Skull and Crossbones Emoji Meaning: Danger, Poison, or Death?",
    snippetAnswer:
      "☠️ Skull and Crossbones means poison, danger, or deadly warning — hazard skull, not the slang-dead laugh of 💀.",
    detailedParagraphs: [
      "Skull and Crossbones (☠️) shows a skull over crossed bones. Unicode frames it as hazard / poison; chat culture uses it for danger labels, pirate bits, and “this will kill me” exaggeration.",
      "People send ☠️ for toxic warnings, pirate aesthetics, spicy food challenges, and “danger zone” jokes.",
      "Compared with 💀, ☠️ is the warning/poison emblem — more hazard than “I’m dead” comedy. Compared with pirate-flag vibes, ☠️ is the classic Jolly Roger skull itself.",
      "It is rarely soft sadness. If you need internet “I’m dead” laughter, use 💀; if you need spooky Halloween skull alone, 💀 still wins for slang. Keep ☠️ for danger / poison / crossbones warning.",
    ],
    textingMeaning:
      "Send ☠️ for poison, danger, or deadly-warning humor — hazard more than lol-dead slang.",
    socialMeaning:
      "Captions use ☠️ for toxic challenges, pirate themes, and warning aesthetics. Clearer hazard signal than 💀.",
    caution:
      "Do not joke-☠️ about real self-harm, violence, or suicide. Hazard humor has limits.",
    examples: [
      { context: "Warning", text: "That leftover is sketchy ☠️" },
      { context: "Spice", text: "Hot sauce challenge accepted ☠️" },
      { context: "Pirate", text: "Treasure hunt outfit locked ☠️" },
      { context: "Toxic", text: "Group chat turned poisonous ☠️" },
      { context: "Game", text: "One hit and you're done ☠️" },
      { context: "Caption", text: "Enter at your own risk ☠️" },
    ],
    contextBlocks: [
      {
        title: "☠️ vs 💀",
        body: "💀 is often “I’m dead” slang laughter. ☠️ is skull-and-crossbones hazard — poison/danger emblem.",
      },
      {
        title: "☠️ vs ⚠️",
        body: "⚠️ is generic warning. ☠️ specifically codes poison / deadly / pirate-skull danger.",
      },
      {
        title: "☠️ vs 🏴‍☠️",
        body: "🏴‍☠️ is pirate flag. ☠️ is the skull-and-bones symbol itself.",
      },
      {
        title: "Work chats",
        body: "OK for literal hazard jokes in lab/safety banter. Avoid around real emergencies.",
      },
    ],
    searchIntents: [
      "skull and crossbones emoji meaning",
      "☠️ meaning in texting",
      "☠️ vs 💀",
      "poison emoji meaning",
      "what does ☠️ mean",
      "☠️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke about real death, suicide, or violence.",
      "Avoid when you mean “I’m dead” laughing — use 💀.",
      "Skip as a flippant reply to real danger alerts.",
    ],
    faqs: [
      {
        question: "What does ☠️ mean in texting?",
        answer:
          "Poison, danger, or deadly warning — hazard skull with crossbones.",
      },
      {
        question: "☠️ vs 💀?",
        answer:
          "💀 often means “I’m dead” comedy. ☠️ reads more as poison/danger symbol.",
      },
      {
        question: "Is ☠️ a pirate emoji?",
        answer:
          "It can signal pirate aesthetics, but the core Unicode sense is hazard/poison.",
      },
      {
        question: "☠️ vs ⚠️?",
        answer:
          "⚠️ is general caution. ☠️ implies deadly / toxic / crossbones danger.",
      },
      {
        question: "Can I use ☠️ at work?",
        answer:
          "Only for light hazard humor or themed events — never around real crises.",
      },
    ],
  },

  "jack-o-lantern": {
    batchId: BATCH_ID,
    searchTitle: "Jack-O-Lantern Emoji Meaning: Halloween, Spooky, or Fall?",
    snippetAnswer:
      "🎃 Jack-O-Lantern means Halloween, pumpkin season, or spooky-fun autumn — carved pumpkin, not generic fall leaf 🍂 alone.",
    detailedParagraphs: [
      "Jack-O-Lantern (🎃) shows a carved Halloween pumpkin. Unicode frames it as jack-o-lantern; chat culture uses it for October vibes, costumes, and spooky parties.",
      "People send 🎃 for Halloween invites, pumpkin patches, candy runs, and “spooky season is here” posts.",
      "Compared with 👻, 🎃 is pumpkin holiday icon more than ghost character. Compared with 🍂, it is Halloween-specific, not general autumn.",
      "It is rarely year-round default. If you need ghost scare, use 👻; if you need fall foliage, use 🍂. Keep 🎃 for Halloween / jack-o-lantern energy.",
    ],
    textingMeaning:
      "Use 🎃 for Halloween plans, pumpkin season, and spooky-fun October energy.",
    socialMeaning:
      "Captions lean 🎃 for costume posts, candy hauls, and fall-Halloween branding. Stronger holiday signal than plain 🍂.",
    caution:
      "Fine for fun scares; still avoid trivializing real fear or cultural stereotypes around “scary” holidays.",
    examples: [
      { context: "Invite", text: "Costume party Saturday 🎃" },
      { context: "Season", text: "Spooky season has entered the chat 🎃" },
      { context: "Activity", text: "Pumpkin carving tonight 🎃" },
      { context: "Candy", text: "Trick-or-treat route mapped 🎃" },
      { context: "Decor", text: "Porch is fully decorated 🎃" },
      { context: "Caption", text: "October mood board 🎃" },
    ],
    contextBlocks: [
      {
        title: "🎃 vs 👻",
        body: "👻 is ghost character. 🎃 is jack-o-lantern / Halloween pumpkin icon.",
      },
      {
        title: "🎃 vs 🍂",
        body: "🍂 is autumn leaves. 🎃 is specifically Halloween pumpkin season.",
      },
      {
        title: "🎃 vs 🍬",
        body: "🍬 is candy. 🎃 is the holiday pumpkin symbol that often implies the whole Halloween vibe.",
      },
      {
        title: "Work chats",
        body: "Perfect for office Halloween events and seasonal reminders.",
      },
    ],
    searchIntents: [
      "jack-o-lantern emoji meaning",
      "🎃 meaning in texting",
      "🎃 vs 👻",
      "halloween pumpkin emoji",
      "what does 🎃 mean",
      "🎃 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid as a random reaction outside seasonal/Halloween context.",
      "Do not use 🎃 when you mean ghost — use 👻.",
      "Skip if the audience associates Halloween content with distress.",
    ],
    faqs: [
      {
        question: "What does 🎃 mean in texting?",
        answer:
          "Halloween, jack-o-lantern, or spooky pumpkin-season vibes.",
      },
      {
        question: "🎃 vs 👻?",
        answer:
          "👻 is a ghost. 🎃 is the carved pumpkin Halloween icon.",
      },
      {
        question: "Is 🎃 only for Halloween?",
        answer:
          "Mostly — people also use it for general October / pumpkin aesthetic.",
      },
      {
        question: "🎃 vs 🍂?",
        answer:
          "🍂 is fall foliage. 🎃 is Halloween pumpkin specifically.",
      },
      {
        question: "Can I use 🎃 at work?",
        answer:
          "Yes for seasonal events, parties, and October announcements.",
      },
    ],
  },

  mouth: {
    batchId: BATCH_ID,
    searchTitle: "Mouth Emoji Meaning: Lips, Kissy, or Beauty?",
    snippetAnswer:
      "👄 Mouth means lips, kissy slang, lipstick beauty, or “say it with your mouth” — lip icon, not the kiss mark 💋 alone.",
    detailedParagraphs: [
      "Mouth (👄) shows a pair of lips. Unicode frames it as mouth; chat culture uses it for beauty, lip-sync jokes, flirtation, and “zip it / speak up” bits depending on context.",
      "People send 👄 for makeup looks, kissy teasing, ASMR/lip focus jokes, and “read my lips” attitude.",
      "Compared with 💋, 👄 is the lips themselves; 💋 is a lipstick kiss mark print. Compared with 😘, 👄 is body-part icon, not a blowing-kiss face.",
      "It is rarely pure anger or sadness. If you need kiss seal, use 💋; if you need blowing kiss face, use 😘. Keep 👄 for lips / mouth / kissy-lip energy.",
    ],
    textingMeaning:
      "Send 👄 for lips, beauty, kissy slang, or mouth-focused jokes — lip icon energy.",
    socialMeaning:
      "Beauty captions, lip art, and flirt posts lean on 👄. Different from 💋, which reads more as a kiss stamp.",
    caution:
      "Can read as sexual depending on chat. Keep it appropriate for the relationship and platform.",
    examples: [
      { context: "Beauty", text: "New lip combo unlocked 👄" },
      { context: "Flirty", text: "Thinking about that smile 👄" },
      { context: "Joke", text: "Say less 👄" },
      { context: "Music", text: "Lip-sync battle tonight 👄" },
      { context: "Attitude", text: "Watch your mouth 👄" },
      { context: "Caption", text: "Gloss era 👄" },
    ],
    contextBlocks: [
      {
        title: "👄 vs 💋",
        body: "💋 is a kiss mark / lipstick print. 👄 is the mouth/lips themselves — beauty and lip slang.",
      },
      {
        title: "👄 vs 😘",
        body: "😘 is a face blowing a kiss. 👄 is just the lips icon, more beauty/object than action face.",
      },
      {
        title: "👄 vs 😝",
        body: "😝 is tongue-out face. 👄 isolates lips without a full facial expression.",
      },
      {
        title: "Work chats",
        body: "Usually odd unless discussing beauty products or creative assets. Easy to misread as flirtatious.",
      },
    ],
    searchIntents: [
      "mouth emoji meaning",
      "👄 meaning in texting",
      "👄 vs 💋",
      "lips emoji meaning",
      "what does 👄 mean",
      "👄 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid sending 👄 in ways that feel sexual without consent.",
      "Do not use 👄 when you mean kiss mark — use 💋.",
      "Skip in formal professional threads.",
    ],
    faqs: [
      {
        question: "What does 👄 mean in texting?",
        answer:
          "Lips / mouth — beauty, kissy slang, or lip-focused jokes.",
      },
      {
        question: "👄 vs 💋?",
        answer:
          "💋 is a kiss stamp. 👄 is the lips themselves.",
      },
      {
        question: "Is 👄 flirty?",
        answer:
          "Often yes, especially next to compliments or beauty talk.",
      },
      {
        question: "👄 vs 😘?",
        answer:
          "😘 is blowing a kiss face. 👄 is just the mouth icon.",
      },
      {
        question: "Can I use 👄 at work?",
        answer:
          "Only in beauty/creative contexts. Otherwise it can seem unprofessional.",
      },
    ],
  },
};
