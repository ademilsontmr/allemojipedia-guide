import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 2 — exclusivity for next face-extend emoji after Wave 1 top-extend.
 * Differentiation focus: grin ladder (😃😄😁😆), halo innocence, kiss variants
 * (😙 vs 😚), food savor 😋, tongue trio (😛😜😝), money-mouth 🤑, hug 🤗,
 * giggle 🤭 vs gasp 🫢.
 */
const BATCH_ID = "42-p1-wave2-faces-extend";

export const batch42P1Wave2FacesExtend: Record<string, EmojiBatchEnrichment> = {
  "grinning-face-with-big-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Face with Big Eyes Emoji Meaning: Excited, Eager, or Over-Happy?",
    snippetAnswer:
      "😃 Grinning Face with Big Eyes means bright excitement or eager happiness. It is more “wow!” than plain 😀 and less tooth-gleeful than 😁.",
    detailedParagraphs: [
      "Grinning Face with Big Eyes (😃) is an open smile with wide, alert eyes. Unicode frames it as grinning; chat culture uses it for upbeat energy and “I’m pumped.”",
      "People send 😃 for good news, weekend hype, and friendly enthusiasm that feels a notch louder than a basic grin. Big eyes sell eagerness.",
      "Compared with 😀, 😃 usually reads more excited. Compared with 😄, it is less about smiling-eye warmth and more about open-eyed thrill.",
      "It is rarely ironic by default. If you need sarcasm, use 🙃; if you need soft kindness, use 😊. Keep 😃 for clear bright happiness.",
    ],
    textingMeaning:
      "Use 😃 to show eager joy or excited agreement. Alone it often means “awesome!” without laugh-cry chaos.",
    socialMeaning:
      "Captions and comments drop 😃 for wholesome hype — trips, wins, and cheerful brand replies. Safer than 🔥 for soft excitement.",
    caution:
      "A lone 😃 after serious bad news can look dismissive. Add real words when someone needs empathy, not cheer.",
    examples: [
      { context: "Good news", text: "You got the internship 😃" },
      { context: "Weekend hype", text: "Road trip tomorrow 😃" },
      { context: "Excited yes", text: "I'm in 😃" },
      { context: "Friendly reply", text: "That sounds perfect 😃" },
      { context: "Morning energy", text: "Happy Friday 😃" },
      { context: "Caption", text: "First day vibes 😃" },
    ],
    contextBlocks: [
      {
        title: "😃 vs 😀",
        body: "😀 is the classic open grin baseline. 😃 adds bigger eyes — often reads more excited and eager.",
      },
      {
        title: "😃 vs 😄",
        body: "😄 pairs the grin with smiling eyes (warmer joy). 😃 keeps eyes wide open for bright enthusiasm.",
      },
      {
        title: "😃 vs 😁",
        body: "😁 shows a beaming teeth smile with smiling eyes — gleeful. 😃 is open-mouthed excitement without that tooth-beam focus.",
      },
      {
        title: "Work chats",
        body: "Fine for casual team hype. Prefer calmer 😊 if the thread is formal or delicate.",
      },
    ],
    searchIntents: [
      "grinning face with big eyes emoji meaning",
      "😃 meaning in texting",
      "😃 vs 😀",
      "😃 vs 😄",
      "what does 😃 mean",
      "😃 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not reply to grief or anger with only 😃.",
      "Avoid spam stacks that look robotic or forced.",
      "Skip when you mean soft gratitude — use 😊 instead.",
    ],
    faqs: [
      {
        question: "What does 😃 mean in texting?",
        answer:
          "Bright excitement or eager happiness — a big grin with wide eyes.",
      },
      {
        question: "😃 vs 😀 — which is happier?",
        answer:
          "Both are happy; 😃 usually feels more excited because of the bigger eyes.",
      },
      {
        question: "Is 😃 sarcastic?",
        answer:
          "Rarely by default. Irony usually needs 🙃 or pointed wording.",
      },
      {
        question: "😃 vs 😁?",
        answer:
          "😁 is beaming with smiling eyes and teeth. 😃 is open-eyed eager grin energy.",
      },
      {
        question: "Can I use 😃 at work?",
        answer:
          "Yes in casual teams for clear positivity. Keep it purposeful.",
      },
    ],
  },

  "grinning-face-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Face with Smiling Eyes Emoji Meaning: Joyful, Warm, or Laughing?",
    snippetAnswer:
      "😄 Grinning Face with Smiling Eyes means warm, joyful happiness — a grin plus happy eye crinkles. Softer than loud 😆, brighter than quiet 😊.",
    detailedParagraphs: [
      "Grinning Face with Smiling Eyes (😄) combines an open grin with curved smiling eyes. Unicode treats it as happy; texting made it the “genuine joyful grin.”",
      "People send 😄 for good news, funny-but-not-ROFL moments, and friendly celebration. The smiling eyes make joy feel warmer than a plain open grin.",
      "It sits between soft 😊 and chaotic 😆. Use 😄 when you are clearly happy without needing tears-of-joy intensity.",
      "Rarely reads cold or ironic alone. If you need awkward relief, prefer 😅; if you need pure soft kindness, prefer 😊.",
    ],
    textingMeaning:
      "Send 😄 for warm joyful reactions — “that’s great,” “this made me happy,” or light laughs that are not full 😂.",
    socialMeaning:
      "Comments and captions use 😄 for wholesome wins, cute updates, and approachable brand cheer. Less meme-chaos than 😆.",
    caution:
      "Do not 😄 over someone’s serious problem. Warm joy only works when the topic is actually positive.",
    examples: [
      { context: "Good news", text: "So happy for you 😄" },
      { context: "Light laugh", text: "Okay that was funny 😄" },
      { context: "Thanks", text: "This made my day 😄" },
      { context: "Photo reply", text: "You look so happy 😄" },
      { context: "Plan confirmed", text: "See you Saturday 😄" },
      { context: "Caption", text: "Best brunch ever 😄" },
    ],
    contextBlocks: [
      {
        title: "😄 vs 😃",
        body: "😃 is wide-eyed eager excitement. 😄 adds smiling eyes — warmer, more “happy smile” than pure thrill.",
      },
      {
        title: "😄 vs 😁",
        body: "😁 is a beaming teeth smile — often gleeful or proud. 😄 is open-grin joy with soft eye crinkles.",
      },
      {
        title: "😄 vs 😆",
        body: "😆 squints hard — bigger laugh/chaos energy. 😄 is joyful without full squint-laugh intensity.",
      },
      {
        title: "😄 vs 😊",
        body: "😊 is a closed soft smile. 😄 is a bigger open grin that still feels sincere.",
      },
    ],
    searchIntents: [
      "grinning face with smiling eyes emoji meaning",
      "😄 meaning in texting",
      "😄 vs 😁",
      "😄 vs 😃",
      "what does 😄 mean",
      "😄 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer hard news with only 😄.",
      "Avoid when you mean quiet thanks — 😊 may fit better.",
      "Skip stacks that drown out a serious message.",
    ],
    faqs: [
      {
        question: "What does 😄 mean in texting?",
        answer:
          "Warm joyful happiness — a grin with smiling eyes, brighter than 😊.",
      },
      {
        question: "😄 vs 😁?",
        answer:
          "😁 often feels more beaming/gleeful with teeth. 😄 is open-grin warm joy.",
      },
      {
        question: "Is 😄 the same as laughing?",
        answer:
          "It can mark light amusement, but 😂/🤣 are clearer full laughs.",
      },
      {
        question: "😄 vs 😆?",
        answer:
          "😆 is stronger squint-laugh energy. 😄 is happier grin without that intensity.",
      },
      {
        question: "Can I use 😄 at work?",
        answer:
          "Yes for friendly celebration in casual chat. Keep tone appropriate.",
      },
    ],
  },

  "beaming-face-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Beaming Face with Smiling Eyes Emoji Meaning: Gleeful, Proud, or Extra Happy?",
    snippetAnswer:
      "😁 Beaming Face with Smiling Eyes usually means gleeful happiness, proud cheer, or “cheese” smile energy. It is more tooth-beam than open 😃.",
    detailedParagraphs: [
      "Beaming Face with Smiling Eyes (😁) shows a wide teeth smile with happy eyes. Unicode frames it as beaming; chats use it for gleeful or proud joy.",
      "People send 😁 for wins, “look at this” moments, and big happy reactions that feel a bit more posed or proud than a casual 😄.",
      "On some platforms the teeth look intense — so lone 😁 can read slightly awkward or “forced smile” to some Gen Z readers, even when meant sincerely.",
      "If you want soft warmth, use 😊. If you want open-eyed excitement, use 😃. Save 😁 for bright, toothy glee.",
    ],
    textingMeaning:
      "Use 😁 for gleeful or proud happiness — “we did it,” “so proud,” or big smile energy without full laugh tears.",
    socialMeaning:
      "Selfie captions, achievement posts, and cheer comments love 😁. Brands use it for bright promotional smiles.",
    caution:
      "After tense messages, bare 😁 can look like a gritted fake smile. Clarify with words if the mood is mixed.",
    examples: [
      { context: "Win", text: "We closed it 😁" },
      { context: "Proud", text: "So proud of you 😁" },
      { context: "Photo energy", text: "Cheese 😁" },
      { context: "Good news", text: "Accepted 😁" },
      { context: "Hype reply", text: "Let's gooo 😁" },
      { context: "Caption", text: "Graduation day 😁" },
    ],
    contextBlocks: [
      {
        title: "😁 vs 😄",
        body: "😄 is warm open-grin joy. 😁 emphasizes a beaming teeth smile — often prouder or more gleeful.",
      },
      {
        title: "😁 vs 😃",
        body: "😃 is wide-eyed excitement. 😁 is smiling-eyes tooth beam — less “wow eyes,” more “big smile.”",
      },
      {
        title: "😁 vs 😆",
        body: "😆 is squinting laugh/chaos. 😁 is beaming happiness that may not be a full laugh.",
      },
      {
        title: "Platform vibe",
        body: "Some art styles make 😁 look intense. If unsure, 😄 or 😊 can feel safer.",
      },
    ],
    searchIntents: [
      "beaming face with smiling eyes emoji meaning",
      "😁 meaning in texting",
      "😁 vs 😄",
      "😁 vs 😃",
      "what does 😁 mean",
      "😁 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not beam-smile over conflict with only 😁.",
      "Avoid if your audience reads 😁 as awkward grit-smile.",
      "Skip when soft empathy is needed — use words or 🥺.",
    ],
    faqs: [
      {
        question: "What does 😁 mean in texting?",
        answer:
          "Gleeful or proud happiness — a beaming smile with smiling eyes.",
      },
      {
        question: "Why does 😁 look awkward sometimes?",
        answer:
          "Platform art can make the teeth grin look forced. Intent is usually sincere joy.",
      },
      {
        question: "😁 vs 😄?",
        answer:
          "Both are happy; 😁 is more tooth-beam/glee, 😄 is warmer open-grin joy.",
      },
      {
        question: "Is 😁 laughing?",
        answer:
          "Not always — it can be proud or posed happy. 😆/😂 are clearer laughs.",
      },
      {
        question: "Can I use 😁 at work?",
        answer:
          "Yes for celebrating wins in casual teams. Soften for formal threads.",
      },
    ],
  },

  "grinning-squinting-face": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Squinting Face Emoji Meaning: Laughing Hard, Silly Joy, or Chaos?",
    snippetAnswer:
      "😆 Grinning Squinting Face usually means hard laughing, silly joy, or “I’m cracking up” energy. Stronger laugh vibe than 😄, lighter than 😂 tears.",
    detailedParagraphs: [
      "Grinning Squinting Face (😆) shows a big grin with tightly squinting eyes. Unicode links it to grinning; culture treats it as laughing-hard without tear streams.",
      "People send 😆 for jokes, chaotic fun, and “that was hilarious” replies when they do not want full 😂 or 🤣.",
      "Compared with 😄, 😆 is louder and more laugh-forward. Compared with 😝, it is joy/laugh rather than tongue-out teasing.",
      "It can also mark silly excitement, not only jokes. Context decides “laughing” vs “super happy squint.”",
    ],
    textingMeaning:
      "Use 😆 when something is funny or joyfully chaotic. Alone it often means “lol / I’m dying (happy).”",
    socialMeaning:
      "Comments spam 😆 under comedy clips and friend-group chaos. Captions use it for unserious fun posts.",
    caution:
      "😆 at someone’s embarrassment can feel mean if you are not close. Soften with support if they are actually hurt.",
    examples: [
      { context: "Joke reply", text: "Stop I'm crying 😆" },
      { context: "Chaos", text: "This group chat is unhinged 😆" },
      { context: "Self roast", text: "I tripped in public 😆" },
      { context: "Funny clip", text: "Send more 😆" },
      { context: "Excited silly", text: "We actually did that 😆" },
      { context: "Caption", text: "No thoughts just vibes 😆" },
    ],
    contextBlocks: [
      {
        title: "😆 vs 😄",
        body: "😄 is warm joyful grin. 😆 squints harder — stronger laugh/chaos energy.",
      },
      {
        title: "😆 vs 😂",
        body: "😂 adds tears of joy — classic “crying laughing.” 😆 is big squint-laugh without tear streams.",
      },
      {
        title: "😆 vs 🤣",
        body: "🤣 is rolling-on-floor intensity. 😆 is high laugh energy but usually a notch lighter.",
      },
      {
        title: "😆 vs 😝",
        body: "😝 sticks tongue out for teasing silliness. 😆 is grin-laugh, not tongue taunt.",
      },
    ],
    searchIntents: [
      "grinning squinting face emoji meaning",
      "😆 meaning in texting",
      "😆 vs 😂",
      "😆 vs 😄",
      "what does 😆 mean",
      "😆 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not laugh-emoji someone’s real crisis.",
      "Avoid as the only reply to a sincere apology.",
      "Skip in formal work mail where jokes need words first.",
    ],
    faqs: [
      {
        question: "What does 😆 mean in texting?",
        answer:
          "Hard laughing or silly joy — a squinting big grin, often “lol” energy.",
      },
      {
        question: "😆 vs 😂?",
        answer:
          "😂 is the classic tears-of-joy laugh. 😆 is squint-laugh without the tears.",
      },
      {
        question: "Is 😆 always a joke?",
        answer:
          "Usually amusement or chaotic fun, but it can also mean ecstatic happiness.",
      },
      {
        question: "😆 vs 😁?",
        answer:
          "😁 is beaming/proud smile. 😆 leans more toward laughing hard.",
      },
      {
        question: "Can I use 😆 at work?",
        answer:
          "In casual teams yes for light humor. Prefer clearer words in serious threads.",
      },
    ],
  },

  "smiling-face-with-halo": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Halo Emoji Meaning: Innocent, Angelic, or Fake Nice?",
    snippetAnswer:
      "😇 Smiling Face with Halo means innocence, angel energy, or “I’m being good” — sometimes sincere, sometimes cheeky fake-innocent.",
    detailedParagraphs: [
      "Smiling Face with Halo (😇) is a smile topped with a halo. Unicode frames it as angelic; texting stretched it to innocence, purity, and playful “who me?” vibes.",
      "People send 😇 after doing something sweet — or after doing something slightly naughty while pretending to be blameless.",
      "Tone splits hard: with kind words it reads wholesome; with mischief it reads ironic angel. Read the sentence around it.",
      "It is not the same as prayer 🙏 or blessing language alone. 😇 is a face claiming innocence or goodness, not a request.",
    ],
    textingMeaning:
      "Use 😇 for angelic sweetness, “I’m innocent,” or cheeky good-behavior jokes. Alone it can mean “angel mode” or “don’t blame me.”",
    socialMeaning:
      "Captions use 😇 for wholesome aesthetics, soft selfies, and ironic “I’m an angel” posts. Comments drop it under cute or suspiciously pure content.",
    caution:
      "Ironic 😇 after hurtful behavior can look gaslighting. If you messed up, apologize in words — do not hide behind the halo.",
    examples: [
      { context: "Sweet", text: "Brought you coffee 😇" },
      { context: "Fake innocent", text: "I would never do that 😇" },
      { context: "Good behavior", text: "Home by 10 I promise 😇" },
      { context: "Thanks", text: "Just trying to help 😇" },
      { context: "Flirty tease", text: "Thinking of you 😇" },
      { context: "Caption", text: "On my best behavior 😇" },
    ],
    contextBlocks: [
      {
        title: "😇 sincere vs ironic",
        body: "With kind acts it reads wholesome. With mischief it means “innocent face” on purpose.",
      },
      {
        title: "😇 vs 😊",
        body: "😊 is warm friendly smile. 😇 adds angel/innocence framing — sweeter or more performative.",
      },
      {
        title: "😇 vs 🥺",
        body: "🥺 is pleading/puppy-eyes soft ask. 😇 claims goodness or innocence rather than begging.",
      },
      {
        title: "Work chats",
        body: "Light 😇 after helping a teammate can feel cute. Avoid ironic halo after missed deadlines.",
      },
    ],
    searchIntents: [
      "smiling face with halo emoji meaning",
      "😇 meaning in texting",
      "😇 angel emoji meaning",
      "😇 fake innocent",
      "what does 😇 mean",
      "😇 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 😇 to dodge accountability after you hurt someone.",
      "Avoid as sarcasm with people who will take the halo literally and feel mocked.",
      "Skip stacking 😇 in serious apology threads.",
    ],
    faqs: [
      {
        question: "What does 😇 mean in texting?",
        answer:
          "Innocence, angel energy, or cheeky “I’m being good” — sincere or ironic.",
      },
      {
        question: "Is 😇 flirty?",
        answer:
          "It can be when paired with tease or affection. Alone it is more angel/innocent than overt flirt.",
      },
      {
        question: "Does 😇 mean lying?",
        answer:
          "Not always — but the fake-innocent reading is common after mischief.",
      },
      {
        question: "😇 vs 😊?",
        answer:
          "😊 is general warm happiness. 😇 specifically signals angelic or innocent tone.",
      },
      {
        question: "Can I use 😇 at work?",
        answer:
          "Sparingly for light kindness. Avoid ironic halo after mistakes.",
      },
    ],
  },

  "kissing-face-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face with Smiling Eyes Emoji Meaning: Sweet Kiss, Thanks, or Soft Love?",
    snippetAnswer:
      "😙 Kissing Face with Smiling Eyes is a happy affectionate kiss — warm thanks, soft love, or playful sweetness. Friendlier and less intense than 😘.",
    detailedParagraphs: [
      "Kissing Face with Smiling Eyes (😙) pairs puckered lips with smiling eyes. Unicode groups it with affection; chats use it for cheerful kiss energy.",
      "People send 😙 for grateful affection, cute goodbyes, and “miss you” notes that feel happy rather than heavy. The smiling eyes keep it light.",
      "Compared with 😚, 😙 looks more openly cheerful. Compared with 😘, it usually feels less romantic-flirty because there is no flying heart.",
      "It is still affectionate — fine for partners and close friends, risky with distant coworkers or strangers.",
    ],
    textingMeaning:
      "Use 😙 for warm kiss-and-smile affection — thanks, soft love, or happy “mwah.” Softer flirt than 😘 in many chats.",
    socialMeaning:
      "Couple and friendship posts use 😙 for wholesome affection. Comments drop it under cute reunions and pet content.",
    caution:
      "Do not use 😙 to paper over a serious fight. Affection without words can feel dismissive when accountability is needed.",
    examples: [
      { context: "Thanks", text: "You saved me today 😙" },
      { context: "Missing someone", text: "Wish you were here 😙" },
      { context: "Goodbye", text: "Drive safe 😙" },
      { context: "Sweet reply", text: "You're the best 😙" },
      { context: "Congrats", text: "So happy for you 😙" },
      { context: "Caption", text: "Date night leftovers 😙" },
    ],
    contextBlocks: [
      {
        title: "😙 vs 😚",
        body: "😚 closes the eyes — often reads more intimate/sincere. 😙 keeps smiling eyes for happier, lighter affection.",
      },
      {
        title: "😙 vs 😘",
        body: "😘 blows a kiss with a heart — usually stronger flirt/romance. 😙 is softer happy-affection kiss.",
      },
      {
        title: "😙 vs 😗",
        body: "😗 is a simpler kissing face, sometimes awkward or mild. 😙 adds smiling eyes for clearer warmth.",
      },
      {
        title: "Friends vs romance",
        body: "Close friends use 😙 platonically. With new matches it can still read romantic — match their tone.",
      },
    ],
    searchIntents: [
      "kissing face with smiling eyes emoji meaning",
      "😙 meaning in texting",
      "😙 vs 😘",
      "😙 vs 😚",
      "what does 😙 mean",
      "😙 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid with professional contacts you do not know well.",
      "Do not send 😙 when rejecting someone — mixed signals.",
      "Skip as the only reply when someone needs a real conversation.",
    ],
    faqs: [
      {
        question: "What does 😙 mean in texting?",
        answer:
          "Happy affectionate kiss — warm thanks, soft love, or playful sweetness.",
      },
      {
        question: "😙 vs 😘 — which is stronger?",
        answer:
          "😘 with the heart usually feels more romantic/flirty. 😙 is softer happy affection.",
      },
      {
        question: "Is 😙 romantic?",
        answer:
          "It can be, but close friends use it warmly too. Context decides.",
      },
      {
        question: "😙 vs 😚?",
        answer:
          "😚 often feels more tender/intimate. 😙 feels brighter and more cheerful.",
      },
      {
        question: "Can I use 😙 at work?",
        answer:
          "Usually no unless your team culture is extremely casual and close.",
      },
    ],
  },

  "kissing-face-with-closed-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face with Closed Eyes Emoji Meaning: Tender Kiss, Goodnight, or Intimate?",
    snippetAnswer:
      "😚 Kissing Face with Closed Eyes is a tender, sincere kiss — common in goodnight texts and “love you” notes. Closed eyes read more intimate than 😙.",
    detailedParagraphs: [
      "Kissing Face with Closed Eyes (😚) shows puckered lips and shut eyes — like leaning into a real kiss. Unicode places it with affection faces.",
      "People choose 😚 for intimate sign-offs, soft romance, and heartfelt thanks to partners or family. Closed eyes reduce “jokey kiss” readings.",
      "It is less meme-flirty than 😘 and quieter than smiling-eyed 😙. Think tenderness more than playful mwah.",
      "Still high-affection: great for established closeness, risky with acquaintances or cold professional threads.",
    ],
    textingMeaning:
      "Send 😚 to close loving messages — goodnight, miss you, love you. Alone it often means a sincere virtual kiss.",
    socialMeaning:
      "Couple captions and soft aesthetic posts use 😚 for understated romance. Less flashy than heart-eyes 😍.",
    caution:
      "Do not use 😚 to manipulate guilt (“fine 😚”) during conflict. Affection as a dodge feels worse than silence.",
    examples: [
      { context: "Goodnight", text: "Sweet dreams 😚" },
      { context: "Love", text: "Love you always 😚" },
      { context: "Miss you", text: "Can't wait to hug you 😚" },
      { context: "Thanks", text: "You're amazing 😚" },
      { context: "Anniversary", text: "Five years 😚" },
      { context: "Caption", text: "Slow mornings together 😚" },
    ],
    contextBlocks: [
      {
        title: "😚 vs 😙",
        body: "😙 shows smiling eyes — happier light affection. 😚 closes eyes for quieter, more intimate sincerity.",
      },
      {
        title: "😚 vs 😘",
        body: "😘 is playful blown kiss with heart. 😚 is tender closed-eye kiss without the flying heart.",
      },
      {
        title: "Goodnight ritual",
        body: "Partners often end the day with 😚 — a consistent safe, loving closer.",
      },
      {
        title: "Family use",
        body: "Parents and kids may use 😚 warmly. Still skip it with distant relatives who prefer words only.",
      },
    ],
    searchIntents: [
      "kissing face with closed eyes emoji meaning",
      "😚 meaning in texting",
      "😚 goodnight text",
      "😚 vs 😙",
      "what does 😚 mean",
      "😚 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid with strangers or new coworkers.",
      "Do not use during arguments as a substitute for apology.",
      "Skip if the other person has asked for less affectionate emoji.",
    ],
    faqs: [
      {
        question: "What does 😚 mean in texting?",
        answer:
          "A tender sincere kiss — often goodnight, love you, or intimate affection.",
      },
      {
        question: "Is 😚 more romantic than 😙?",
        answer:
          "Often yes — closed eyes usually read more intimate than smiling-eyed 😙.",
      },
      {
        question: "😚 vs 😘?",
        answer:
          "😘 is flirty blown-kiss energy. 😚 is quieter tenderness.",
      },
      {
        question: "Can friends use 😚?",
        answer:
          "Close friends and family sometimes do. With new friends it may feel romantic.",
      },
      {
        question: "Can I use 😚 at work?",
        answer:
          "Generally no — too affectionate for professional boundaries.",
      },
    ],
  },

  "face-savoring-food": {
    batchId: BATCH_ID,
    searchTitle: "Face Savoring Food Emoji Meaning: Yummy, Hungry, or Licking Lips?",
    snippetAnswer:
      "😋 Face Savoring Food means yummy approval, hunger, or playful “that looks delicious.” Tongue-out savoring — not the same as teasing 😛.",
    detailedParagraphs: [
      "Face Savoring Food (😋) shows a smile with tongue out as if tasting something good. Unicode frames it as savoring; chats made it the yummy face.",
      "People send 😋 for food pics, restaurant recs, “I’m starving,” and sometimes cheeky desire that is not about food at all.",
      "Compared with 😛, 😋 is appetite/pleasure-coded. Compared with 😜, it is less wink-flirt and more “mmm delicious.”",
      "In flirt contexts it can mean attraction, but food chat is still the default reading unless the words say otherwise.",
    ],
    textingMeaning:
      "Use 😋 for tasty reactions, hunger, or “I want that.” Alone under a meal pic it usually means “yum.”",
    socialMeaning:
      "Foodie captions, recipe Reels, and brunch posts are full of 😋. Comments use it as quick delicious praise.",
    caution:
      "Licking-lips flirt 😋 can feel creepy toward strangers. Keep food meaning clear unless you already flirt comfortably.",
    examples: [
      { context: "Food pic", text: "That pasta looks unreal 😋" },
      { context: "Hungry", text: "Need tacos rn 😋" },
      { context: "Recipe", text: "Making this tonight 😋" },
      { context: "Dessert", text: "Save me a slice 😋" },
      { context: "Plan", text: "Dinner at 7 😋" },
      { context: "Caption", text: "Street food tour complete 😋" },
    ],
    contextBlocks: [
      {
        title: "😋 vs 😛",
        body: "😛 is playful tongue-out teasing. 😋 is savoring/yummy — appetite and delicious vibes.",
      },
      {
        title: "😋 vs 😜",
        body: "😜 winks with tongue — mischievous flirt. 😋 is more about craving or tasting pleasure.",
      },
      {
        title: "Food vs flirt",
        body: "Default is culinary. Flirt reading needs romantic context or suggestive wording.",
      },
      {
        title: "Brand replies",
        body: "Restaurants and food brands love 😋 as a safe positive reaction to menu content.",
      },
    ],
    searchIntents: [
      "face savoring food emoji meaning",
      "😋 meaning in texting",
      "😋 yummy emoji",
      "😋 vs 😛",
      "what does 😋 mean",
      "😋 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😋 at people in a creepy way online.",
      "Avoid as the only reply to someone’s eating-disorder struggle.",
      "Skip if you mean silly tease without food — 😛/😜 may fit better.",
    ],
    faqs: [
      {
        question: "What does 😋 mean in texting?",
        answer:
          "Yummy approval, hunger, or craving — the savoring/delicious face.",
      },
      {
        question: "Is 😋 flirty?",
        answer:
          "Sometimes, but food is the default. Flirt needs matching context.",
      },
      {
        question: "😋 vs 😛?",
        answer:
          "😛 is goofy tongue tease. 😋 is specifically savoring something tasty.",
      },
      {
        question: "Can 😋 mean something non-food?",
        answer:
          "Yes — desire or “I want that” in general — but meals are still the top use.",
      },
      {
        question: "Can I use 😋 at work?",
        answer:
          "Fine for casual lunch threads and food planning. Avoid suggestive readings.",
      },
    ],
  },

  "face-with-tongue": {
    batchId: BATCH_ID,
    searchTitle: "Face with Tongue Emoji Meaning: Playful, Silly, or Light Tease?",
    snippetAnswer:
      "😛 Face with Tongue is playful silliness or a light tease — sticking your tongue out without a wink or hard squint. Calmer than 😜 or 😝.",
    detailedParagraphs: [
      "Face with Tongue (😛) is a simple tongue-out smile. Unicode keeps it playful; texting uses it for goofy energy and mild joking.",
      "People send 😛 after dumb jokes, silly selfies, or “bleh” moments that are not full roast mode. It marks unserious tone.",
      "It is the baseline tongue face: 😜 adds a wink (mischief/flirt), 😝 adds a squint (louder chaos tease), 😋 leans yummy.",
      "Rarely harsh alone. Aimed meanly at someone insecure, though, any tongue face can sting — soft words help.",
    ],
    textingMeaning:
      "Use 😛 for light playful teasing or silly mood. Alone it often means “just kidding / being goofy.”",
    socialMeaning:
      "Friend-group comments and casual captions use 😛 for low-stakes humor. Less iconic than wink 😜 in flirt posts.",
    caution:
      "Do not tongue-tease serious topics. In new chats, 😛 can feel childish or unclear — add a word.",
    examples: [
      { context: "Tease", text: "You're so dramatic 😛" },
      { context: "Silly", text: "Brain empty 😛" },
      { context: "Joke mark", text: "I meant the other one 😛" },
      { context: "Selfie", text: "Bad lighting king 😛" },
      { context: "Friend roast", text: "Nice excuse 😛" },
      { context: "Caption", text: "Weekend mode 😛" },
    ],
    contextBlocks: [
      {
        title: "😛 vs 😜",
        body: "😜 winks — more mischievous or flirty. 😛 is plain tongue-out playfulness.",
      },
      {
        title: "😛 vs 😝",
        body: "😝 squints hard for louder silly tease. 😛 is milder goof energy.",
      },
      {
        title: "😛 vs 😋",
        body: "😋 is savoring food/craving. 😛 is joking silliness, not delicious-coded.",
      },
      {
        title: "Joke softener",
        body: "A 😛 after a blunt line often signals “don’t take this seriously.”",
      },
    ],
    searchIntents: [
      "face with tongue emoji meaning",
      "😛 meaning in texting",
      "😛 vs 😜",
      "😛 vs 😝",
      "what does 😛 mean",
      "😛 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid teasing people who are already upset.",
      "Skip in formal professional messages.",
      "Do not use 😛 to dismiss a sincere question.",
    ],
    faqs: [
      {
        question: "What does 😛 mean in texting?",
        answer:
          "Playful silliness or light teasing — a simple tongue-out face.",
      },
      {
        question: "Is 😛 flirty?",
        answer:
          "Mildly at most. 😜 is the clearer mischievous-flirt tongue face.",
      },
      {
        question: "😛 vs 😜?",
        answer:
          "😜 adds a wink for mischief. 😛 is plainer playful tongue-out.",
      },
      {
        question: "😛 vs 😝?",
        answer:
          "😝 is louder squinting tease. 😛 is calmer goofiness.",
      },
      {
        question: "Can I use 😛 at work?",
        answer:
          "Only in very casual teams. Prefer clearer tone in mixed company.",
      },
    ],
  },

  "winking-face-with-tongue": {
    batchId: BATCH_ID,
    searchTitle: "Winking Face with Tongue Emoji Meaning: Flirty Tease, Joke, or Mischief?",
    snippetAnswer:
      "😜 Winking Face with Tongue means mischievous teasing or playful flirt — a wink plus tongue-out. More cheeky than plain 😛, less chaos than 😝.",
    detailedParagraphs: [
      "Winking Face with Tongue (😜) combines a wink with a stuck-out tongue. Unicode frames it as joking; culture made it the mischievous tease face.",
      "People send 😜 after flirty jokes, sarcastic digs that should stay friendly, and “I’m kidding” lines that need extra sparkle.",
      "The wink is the differentiator: it pulls toward flirt or insider joke. Without romantic history it can still mean playful friend mischief.",
      "Compared with 😉 alone, 😜 is goofier. Compared with 😝, it is less “bleh chaos” and more wink-driven cheek.",
    ],
    textingMeaning:
      "Use 😜 for cheeky jokes, light flirt, or teasing that should not be taken harshly. Alone it often means “hehe / just playing.”",
    socialMeaning:
      "Dating captions, duo posts, and meme replies use 😜 for unserious chemistry. Brands use it sparingly for playful campaigns.",
    caution:
      "Flirty 😜 toward someone who did not invite it can feel pushy. Mirror their comfort level.",
    examples: [
      { context: "Flirt tease", text: "Miss me yet 😜" },
      { context: "Joke", text: "I would never lie 😜" },
      { context: "Friend mischief", text: "Guess who ate your fries 😜" },
      { context: "Sarcasm soft", text: "Oh sure genius 😜" },
      { context: "Plan tease", text: "Wear something cute 😜" },
      { context: "Caption", text: "Trouble in the best way 😜" },
    ],
    contextBlocks: [
      {
        title: "😜 vs 😛",
        body: "😛 is plain playful tongue. 😜 adds a wink — stronger mischief or flirt cue.",
      },
      {
        title: "😜 vs 😝",
        body: "😝 is squinting loud tease/chaos. 😜 is wink-led cheeky humor.",
      },
      {
        title: "😜 vs 😉",
        body: "😉 is a cleaner wink flirt/hint. 😜 is goofier wink-plus-tongue energy.",
      },
      {
        title: "Friend vs date",
        body: "Among friends 😜 is silly. In early dating it often reads as intentional flirt.",
      },
    ],
    searchIntents: [
      "winking face with tongue emoji meaning",
      "😜 meaning in texting",
      "😜 flirty meaning",
      "😜 vs 😛",
      "what does 😜 mean",
      "😜 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not wink-tease coworkers about personal appearance.",
      "Avoid after someone shares vulnerable news.",
      "Skip if they asked you to stop flirting.",
    ],
    faqs: [
      {
        question: "What does 😜 mean in texting?",
        answer:
          "Mischievous teasing or playful flirt — wink plus tongue-out joke energy.",
      },
      {
        question: "Is 😜 always flirty?",
        answer:
          "No — friends use it platonically. Dating context makes flirt more likely.",
      },
      {
        question: "😜 vs 😝?",
        answer:
          "😝 is louder silly squint-tease. 😜 is cheekier wink mischief.",
      },
      {
        question: "😜 vs 😉?",
        answer:
          "😉 is subtler wink. 😜 is goofier and more exaggerated.",
      },
      {
        question: "Can I use 😜 at work?",
        answer:
          "Risky — easy to misread as unprofessional flirt. Prefer plain humor.",
      },
    ],
  },

  "squinting-face-with-tongue": {
    batchId: BATCH_ID,
    searchTitle: "Squinting Face with Tongue Emoji Meaning: Goofy Tease, Bleh, or Chaos?",
    snippetAnswer:
      "😝 Squinting Face with Tongue is loud goofy teasing — “bleh,” silly roast, or chaotic friend energy. Bigger silliness than 😛, less wink-flirt than 😜.",
    detailedParagraphs: [
      "Squinting Face with Tongue (😝) sticks the tongue out with tightly closed squinting eyes. Unicode’s extra-playful tongue variant; chats treat it as max silly.",
      "Friends use 😝 for light roasts, ugly-selfie jokes, and playground-style taunts that stay affectionate. It signals “I am kidding hard.”",
      "It is less romantic than 😜 because there is no wink — more chaotic humor than flirt cue. Compared with 😆, the tongue makes it tease, not just laugh.",
      "Keep it among people who get your humor. Aimed at strangers, 😝 can look childish or mean.",
    ],
    textingMeaning:
      "Send 😝 for goofy teasing, “bleh,” or chaotic jokes. Alone it often means “you’re ridiculous (affectionately).”",
    socialMeaning:
      "Meme replies, TikTok reactions, and friend spam use 😝 for unserious energy. Gamers drop it in light troll moments.",
    caution:
      "😝 at someone’s real insecurity or grief lands as bullying. Joke only where trust is clear.",
    examples: [
      { context: "Tease", text: "Nice haircut 😝" },
      { context: "Bleh", text: "Homework forever 😝" },
      { context: "Selfie joke", text: "Delete this 😝" },
      { context: "Game", text: "Got you 😝" },
      { context: "Spicy food", text: "My mouth is on fire 😝" },
      { context: "Caption", text: "Zero dignity left 😝" },
    ],
    contextBlocks: [
      {
        title: "😝 vs 😛",
        body: "😛 is milder tongue play. 😝 adds a hard squint for louder silliness.",
      },
      {
        title: "😝 vs 😜",
        body: "😜 winks toward mischief/flirt. 😝 is broader goofy tease without the wink.",
      },
      {
        title: "😝 vs 😆",
        body: "😆 is squint-laugh joy. 😝 keeps the tongue for taunt/bleh energy.",
      },
      {
        title: "Kid energy",
        body: "Matches playful rasberry vibes — harmless among close friends and family.",
      },
    ],
    searchIntents: [
      "squinting face with tongue emoji meaning",
      "😝 meaning in texting",
      "😝 vs 😜",
      "😝 vs 😛",
      "what does 😝 mean",
      "😝 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid bullying disguised as jokes.",
      "Skip in job applications and formal email.",
      "Do not 😝 someone who is clearly distressed.",
    ],
    faqs: [
      {
        question: "What does 😝 mean in texting?",
        answer:
          "Goofy teasing or silly “bleh” — loud playful tongue-out energy.",
      },
      {
        question: "😝 vs 😜?",
        answer:
          "😜 is wink-mischief/flirt. 😝 is broader chaotic silly tease.",
      },
      {
        question: "Is 😝 flirty?",
        answer:
          "Usually not by default — more goof than romance unless context says so.",
      },
      {
        question: "😝 vs 😆?",
        answer:
          "😆 laughs with a squint grin. 😝 teases with tongue out.",
      },
      {
        question: "Can I use 😝 at work?",
        answer:
          "Generally no. Too unserious for most professional chats.",
      },
    ],
  },

  "money-mouth-face": {
    batchId: BATCH_ID,
    searchTitle: "Money-Mouth Face Emoji Meaning: Payday, Rich Flex, or Greedy Joke?",
    snippetAnswer:
      "🤑 Money-Mouth Face means payday hype, wealth flex, deal excitement, or greedy humor — dollar eyes and tongue, not a normal smile.",
    detailedParagraphs: [
      "Money-Mouth Face (🤑) replaces features with cash symbols. Unicode’s wealth/greed cartoon; internet culture made it payday and hustle slang.",
      "People send 🤑 for salary hits, commissions, sales, bargains, and “I’m rich (joking)” bits. Finance meme accounts lean on it heavily.",
      "It is not gratitude 🙏 or success 🔥 alone — 🤑 specifically codes money obsession or cash excitement.",
      "Tone can flip: among friends on payday it is fun; flexing during someone else’s hardship reads tone-deaf.",
    ],
    textingMeaning:
      "Use 🤑 for money wins, deals, or greedy jokes. Alone it often means “cash incoming / paid.”",
    socialMeaning:
      "Side-hustle Reels, affiliate posts, lottery jokes, and trading memes tag 🤑. Comments use it under expensive flex content.",
    caution:
      "Do not 🤑 someone’s misfortune or mock poverty. At work, avoid loud money flex during layoffs or pay disputes.",
    examples: [
      { context: "Payday", text: "Direct deposit landed 🤑" },
      { context: "Deal", text: "70% off somehow 🤑" },
      { context: "Client win", text: "Closed the deal 🤑" },
      { context: "Joke flex", text: "Manifesting millions 🤑" },
      { context: "Tip jar", text: "Keep the tips coming 🤑" },
      { context: "Caption", text: "Side hustle season 🤑" },
    ],
    contextBlocks: [
      {
        title: "🤑 vs 💸",
        body: "💸 often means money flying away (spending/loss). 🤑 is money lust, payday, or wealth flex.",
      },
      {
        title: "🤑 vs 💰",
        body: "💰 is a money bag symbol. 🤑 is a face reacting with greedy/excited cash energy.",
      },
      {
        title: "Ironic trading",
        body: "Meme finance uses 🤑 for pumps and sometimes ironic dumps — caption tone decides.",
      },
      {
        title: "Payday ritual",
        body: "Friend groups often spam 🤑 when salaries hit — shared celebration code.",
      },
    ],
    searchIntents: [
      "money mouth face emoji meaning",
      "🤑 meaning in texting",
      "🤑 payday emoji",
      "🤑 vs 💸",
      "what does 🤑 mean",
      "🤑 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid flexing wealth at struggling friends.",
      "Skip in condolence, charity, or layoff threads.",
      "Do not use 🤑 to pressure someone about money they owe without care.",
    ],
    faqs: [
      {
        question: "What does 🤑 mean in texting?",
        answer:
          "Money excitement — payday, deals, wealth jokes, or greedy humor.",
      },
      {
        question: "Is 🤑 always bragging?",
        answer:
          "Not always — friends use it casually on payday. Overuse can feel cringe.",
      },
      {
        question: "🤑 vs 💸?",
        answer:
          "💸 leans spending/money leaving. 🤑 leans wanting or celebrating money.",
      },
      {
        question: "Can 🤑 be ironic?",
        answer:
          "Yes — especially in trading and “broke but dreaming” memes.",
      },
      {
        question: "Can I use 🤑 at work?",
        answer:
          "Only lightly in sales/win chats. Avoid loud flex in sensitive pay contexts.",
      },
    ],
  },

  "hugging-face": {
    batchId: BATCH_ID,
    searchTitle: "Hugging Face Emoji Meaning: Virtual Hug, Support, or Excited Hello?",
    snippetAnswer:
      "🤗 Hugging Face usually means a virtual hug, warm support, or open-armed excitement. It is comfort/affection — not the same as kiss faces or heart-eyes.",
    detailedParagraphs: [
      "Hugging Face (🤗) shows a smile with open hands as if offering a hug. Unicode frames it as hugging; texting made it the go-to virtual hug.",
      "People send 🤗 for comfort after bad days, congratulations with warmth, and friendly “come here” energy without romantic intensity.",
      "It can also mean excited openness — “bring it in” for good news — not only sad support. Context from the message decides.",
      "Compared with 🥰, 🤗 is hug-action more than smitten hearts. Compared with 😘, it is less kiss-flirt and more embrace.",
    ],
    textingMeaning:
      "Use 🤗 to offer a hug, soft support, or warm enthusiasm. Alone it often means “hugs” or “I’ve got you.”",
    socialMeaning:
      "Captions and comments use 🤗 for wholesome support, community welcome, and soft brand care replies.",
    caution:
      "A hug emoji is not a replacement for real help in crisis. If someone is in danger or deep distress, respond with resources and presence.",
    examples: [
      { context: "Support", text: "I'm here for you 🤗" },
      { context: "Congrats", text: "So proud of you 🤗" },
      { context: "Miss you", text: "Need a hug rn 🤗" },
      { context: "Welcome", text: "Glad you're here 🤗" },
      { context: "Thanks", text: "That means a lot 🤗" },
      { context: "Caption", text: "Friends who feel like home 🤗" },
    ],
    contextBlocks: [
      {
        title: "🤗 vs 🥰",
        body: "🥰 is smitten/loved-up face hearts. 🤗 is an offered hug — support and embrace energy.",
      },
      {
        title: "🤗 vs 😘",
        body: "😘 is a blown kiss, often flirty. 🤗 is a hug — warmer care, usually less romantic.",
      },
      {
        title: "🤗 vs ❤️",
        body: "❤️ is love/strong like as a symbol. 🤗 is specifically hug/comfort gesture energy.",
      },
      {
        title: "Work-appropriate care",
        body: "One 🤗 can soften a kind note on casual teams. Avoid over-familiar hugs with new contacts.",
      },
    ],
    searchIntents: [
      "hugging face emoji meaning",
      "🤗 meaning in texting",
      "🤗 virtual hug",
      "🤗 vs 🥰",
      "what does 🤗 mean",
      "🤗 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send only 🤗 when someone asks for concrete help or advice.",
      "Avoid if the person has said they dislike physical-affection framing.",
      "Skip as a brush-off after you caused the hurt.",
    ],
    faqs: [
      {
        question: "What does 🤗 mean in texting?",
        answer:
          "A virtual hug — support, warmth, or open-armed friendliness.",
      },
      {
        question: "Is 🤗 romantic?",
        answer:
          "Usually affectionate but not strongly romantic. Partners use it; friends do too.",
      },
      {
        question: "🤗 vs 🥰?",
        answer:
          "🥰 is adoring/loved-up. 🤗 is hug/support gesture energy.",
      },
      {
        question: "Can 🤗 mean excitement?",
        answer:
          "Yes — open arms can mean “bring it on” or excited welcome, not only comfort.",
      },
      {
        question: "Can I use 🤗 at work?",
        answer:
          "On warm casual teams yes. Keep boundaries with new or formal contacts.",
      },
    ],
  },

  "face-with-hand-over-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Face with Hand Over Mouth Emoji Meaning: Giggle, Oops, or Secret Laugh?",
    snippetAnswer:
      "🤭 Face with Hand Over Mouth usually means giggling, “oops,” or laughing while trying to stay polite. Softer than loud 😂; different from shock 🫢.",
    detailedParagraphs: [
      "Face with Hand Over Mouth (🤭) covers a smile with a hand. Unicode links it to quiet amusement; chats use it for giggles, polite shock-laugh, and coy “I shouldn’t laugh.”",
      "People send 🤭 after awkward jokes, mild embarrassment, tea they should not spill, or cute moments that make them soft-laugh.",
      "Eyes are typically smiling/closed-happy on many platforms — that is the giggle cue. It is not primarily horror or gasp.",
      "Compared with 🫢, 🤭 is amusement/coy laugh. Compared with 🤫, it is not “be quiet” instruction — it is covering a laugh or oops.",
    ],
    textingMeaning:
      "Use 🤭 for giggles, mild oops, or coy amusement. Alone it often means “hehe / I shouldn’t be laughing.”",
    socialMeaning:
      "Comments drop 🤭 under spicy gossip, awkward clips, and cute fails. Captions use it for playful secrecy-adjacent humor.",
    caution:
      "🤭 at someone’s serious humiliation can feel cruel. Save giggles for shared jokes, not their pain.",
    examples: [
      { context: "Giggle", text: "I should not find this funny 🤭" },
      { context: "Oops", text: "Sent that to the wrong chat 🤭" },
      { context: "Tea", text: "You did not hear this from me 🤭" },
      { context: "Cute", text: "They are adorable 🤭" },
      { context: "Awkward laugh", text: "Well that happened 🤭" },
      { context: "Caption", text: "Plot twist incoming 🤭" },
    ],
    contextBlocks: [
      {
        title: "🤭 vs 🫢",
        body: "🫢 is open-eyed shock/gasp with hand over mouth. 🤭 is giggling or coy oops amusement.",
      },
      {
        title: "🤭 vs 😂",
        body: "😂 is loud crying-laugh. 🤭 is quieter “covering a laugh” energy.",
      },
      {
        title: "🤭 vs 🙈",
        body: "🙈 is peekaboo embarrassment/can’t look. 🤭 covers a smile/laugh rather than eyes.",
      },
      {
        title: "🤭 vs 🤫",
        body: "🤫 asks for secrecy/quiet. 🤭 reacts with a covered giggle or oops — not a shush command.",
      },
    ],
    searchIntents: [
      "face with hand over mouth emoji meaning",
      "🤭 meaning in texting",
      "🤭 vs 🫢",
      "🤭 giggle emoji",
      "what does 🤭 mean",
      "🤭 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not giggle-emoji someone’s trauma or public shame.",
      "Avoid as the only reply to a sincere confession.",
      "Skip if you mean real shock — use 🫢 or words.",
    ],
    faqs: [
      {
        question: "What does 🤭 mean in texting?",
        answer:
          "Giggling, coy amusement, or mild oops — laughing while covering your mouth.",
      },
      {
        question: "🤭 vs 🫢?",
        answer:
          "🤭 is giggle/oops. 🫢 is shocked gasp with open eyes.",
      },
      {
        question: "Is 🤭 the same as laughing?",
        answer:
          "It is a quieter, often polite or coy laugh — not full 😂 intensity.",
      },
      {
        question: "Can 🤭 mean secret?",
        answer:
          "Sometimes “I know something” tease, but giggle/oops is more common than pure secrecy.",
      },
      {
        question: "Can I use 🤭 at work?",
        answer:
          "Lightly for harmless humor among close teammates. Avoid around sensitive mistakes.",
      },
    ],
  },

  "face-with-open-eyes-and-hand-over-mouth": {
    batchId: BATCH_ID,
    searchTitle:
      "Face with Open Eyes and Hand Over Mouth Emoji Meaning: Shock, Gasp, or Disbelief?",
    snippetAnswer:
      "🫢 Face with Open Eyes and Hand Over Mouth means shock, gasp, or stunned disbelief. Open eyes are the tell — not the giggly 🤭 cover-laugh.",
    detailedParagraphs: [
      "Face with Open Eyes and Hand Over Mouth (🫢) covers the mouth while staring wide-eyed. Unicode added it for surprise/embarrassment-adjacent shock; culture uses it as gasp.",
      "People send 🫢 for plot twists, unexpected news, secondhand horror, and “I can’t believe you said that” reactions.",
      "The open eyes differentiate it from 🤭: this is startled attention, not coy amusement. You are reacting, not giggling through it.",
      "It can soften bad news reactions (“oh no…”) without full 😱 scream energy. Still, stack carefully if someone needs calm support.",
    ],
    textingMeaning:
      "Use 🫢 for shocked gasps, stunned updates, or disbelief. Alone it often means “wait what / oh my god.”",
    socialMeaning:
      "Comments spam 🫢 under spoilers, drama clips, and reveal posts. Captions use it for suspenseful storytelling.",
    caution:
      "Do not treat someone’s crisis as entertainment with only 🫢. Pair shock with care when the news is real and painful.",
    examples: [
      { context: "Shock news", text: "They actually quit 🫢" },
      { context: "Disbelief", text: "You did not just say that 🫢" },
      { context: "Plot twist", text: "The ending though 🫢" },
      { context: "Awkward reveal", text: "Boss was on the call 🫢" },
      { context: "Surprise", text: "You got tickets 🫢" },
      { context: "Caption", text: "Did not see that coming 🫢" },
    ],
    contextBlocks: [
      {
        title: "🫢 vs 🤭",
        body: "🤭 is giggle/coy oops with a covered smile. 🫢 is open-eyed shock or gasp.",
      },
      {
        title: "🫢 vs 😱",
        body: "😱 is louder fear/scream shock. 🫢 is hand-over-mouth stunned reaction — often milder.",
      },
      {
        title: "🫢 vs 😳",
        body: "😳 is flushed embarrassment/surprise. 🫢 emphasizes the gasp cover-mouth pose.",
      },
      {
        title: "Spoilers and drama",
        body: "Internet comments use 🫢 as a quick “I am shook” stamp under reveals.",
      },
    ],
    searchIntents: [
      "face with open eyes and hand over mouth emoji meaning",
      "🫢 meaning in texting",
      "🫢 vs 🤭",
      "🫢 gasp emoji",
      "what does 🫢 mean",
      "🫢 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not gasp-react to tragedy like it is a TV plot.",
      "Avoid when you mean laughing — use 🤭 or 😂 instead.",
      "Skip as a substitute for checking if someone is okay.",
    ],
    faqs: [
      {
        question: "What does 🫢 mean in texting?",
        answer:
          "Shock, gasp, or disbelief — hand over mouth with open eyes.",
      },
      {
        question: "🫢 vs 🤭?",
        answer:
          "🤭 giggles or coy oops. 🫢 is stunned/shocked with eyes open.",
      },
      {
        question: "Is 🫢 the same as 😱?",
        answer:
          "Related surprise family, but 😱 is louder scream-fear. 🫢 is quieter gasp.",
      },
      {
        question: "Can 🫢 mean embarrassment?",
        answer:
          "Sometimes secondhand embarrassment, but shock/disbelief is the main read.",
      },
      {
        question: "Can I use 🫢 at work?",
        answer:
          "Yes for mild surprise in casual chat. Soften with words for serious incidents.",
      },
    ],
  },
};
