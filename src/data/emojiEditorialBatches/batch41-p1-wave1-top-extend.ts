import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 1 — exclusivity for next top-extend emoji after completed P0 top-50.
 * Differentiation focus: soft smiles vs grins, grimace/neutral faces, kiss mark vs
 * blow-kiss, heart-hands vs heart/prayer, applause vs raise, deal/flex/peace/OK,
 * check button vs thumbs-up, ghost/alien slang, poop meme.
 */
const BATCH_ID = "41-p1-wave1-top-extend";

export const batch41P1Wave1TopExtend: Record<string, EmojiBatchEnrichment> = {
  "smiling-face-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Smiling Eyes Emoji Meaning: Warm, Happy, or Genuine?",
    snippetAnswer:
      "😊 Smiling Face with Smiling Eyes usually means warm, genuine happiness or friendly kindness. It is softer than a big 😀 grin and warmer than a polite 🙂 slight smile.",
    detailedParagraphs: [
      "Smiling Face with Smiling Eyes (😊) shows a closed, happy smile with curved smiling eyes — the classic “sincere smile” face. Unicode frames it as smiling; texting made it the default warm reply.",
      "People send 😊 for thanks, soft good news, friendly hellos, and “this made me smile” energy. It feels kinder and more personal than a loud open grin.",
      "Compared with 😀 (big open grin), 😊 is quieter and cuter. Compared with 🙂 (slightly smiling), 😊 usually reads more genuine and less ambiguous or passive.",
      "It is rarely ironic by default. If you need sarcasm, reach for 🙃; if you need loud excitement, use 😁 or 🎉. 😊 stays the friendly middle ground.",
    ],
    textingMeaning:
      "Use 😊 to show warm happiness, appreciation, or friendly tone. Alone it often means “aww / happy / thanks” without flirt overload.",
    socialMeaning:
      "Captions and comments use 😊 for wholesome positivity, soft compliments, and approachable brand replies. Safer than heart-eyes for casual praise.",
    caution:
      "A lone 😊 after serious conflict can look like you are glossing over the issue. Add clear words when the topic needs accountability.",
    examples: [
      { context: "Thanks", text: "That really helped 😊" },
      { context: "Soft happy", text: "I'm so glad it worked out 😊" },
      { context: "Friendly hello", text: "Nice to meet you 😊" },
      { context: "Compliment reply", text: "Aw thank you 😊" },
      { context: "Good news", text: "Got the internship 😊" },
      { context: "Caption", text: "Good coffee, good day 😊" },
    ],
    contextBlocks: [
      {
        title: "😊 vs 😀",
        body: "😀 is a big open grin — brighter and more exuberant. 😊 is softer, warmer, and often reads as more genuine kindness.",
      },
      {
        title: "😊 vs 🙂",
        body: "🙂 can feel polite, mild, or even awkward/passive. 😊 usually feels warmer and more sincerely happy.",
      },
      {
        title: "😊 vs ☺️",
        body: "☺️ is classic soft blush smile. 😊 shows smiling eyes and often feels modern-cute; many treat them as close cousins.",
      },
      {
        title: "Work chats",
        body: "One of the safest happy faces for friendly professional tone — warmer than 👍, softer than 🔥.",
      },
    ],
    searchIntents: [
      "smiling face with smiling eyes emoji meaning",
      "😊 meaning in texting",
      "😊 vs 🙂",
      "😊 vs 😀",
      "what does 😊 mean",
      "😊 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer grief or anger with only 😊.",
      "Avoid using soft smiles to dodge a direct question that needs a yes/no.",
      "Skip stacks of 😊 that look automated or dismissive.",
    ],
    faqs: [
      {
        question: "What does 😊 mean in texting?",
        answer:
          "Warm, genuine happiness or friendly kindness — softer than a big grin.",
      },
      {
        question: "😊 vs 🙂 — which is nicer?",
        answer:
          "😊 usually feels warmer and more sincere. 🙂 can read polite or slightly awkward.",
      },
      {
        question: "Is 😊 flirty?",
        answer:
          "Mildly at most. It is friendly warmth unless paired with flirt words or 😘.",
      },
      {
        question: "😊 vs 😀?",
        answer:
          "😀 is louder exuberance. 😊 is quieter, kinder smile energy.",
      },
      {
        question: "Can I use 😊 at work?",
        answer:
          "Yes — one of the safest positive faces in casual professional chat.",
      },
    ],
  },

  "slightly-smiling-face": {
    batchId: BATCH_ID,
    searchTitle: "Slightly Smiling Face Emoji Meaning: Polite, Awkward, or Passive?",
    snippetAnswer:
      "🙂 Slightly Smiling Face often means polite acknowledgment, mild positivity, or an awkward/forced smile. It is cooler and more ambiguous than warm 😊.",
    detailedParagraphs: [
      "Slightly Smiling Face (🙂) is a simple closed smile with neutral eyes. Unicode treats it as a mild smile; internet culture stretched it toward politeness, awkwardness, and soft sarcasm.",
      "In friendly chats it can still mean “okay, cool” or light positivity. In tense threads, the same 🙂 may feel forced — like smiling through discomfort.",
      "Gen Z and meme culture sometimes read lone 🙂 as passive-aggressive or “I’m fine (I’m not).” Tone depends heavily on the conversation around it.",
      "If you want clear warmth, prefer 😊. If you want big joy, use 😀. Save 🙂 for mild acknowledgment when you do not need emotional volume.",
    ],
    textingMeaning:
      "Send 🙂 for light acknowledgment, polite positivity, or a soft closer. Alone it can mean “okay” — or awkward smile, depending on context.",
    socialMeaning:
      "Less common as a hype reaction. Appears in mild captions, polite brand replies, and meme posts about forced cheer.",
    caution:
      "After emotional messages, lone 🙂 can feel cold or passive-aggressive. Add words when someone needs real empathy.",
    examples: [
      { context: "Polite ack", text: "Got it 🙂" },
      { context: "Mild positive", text: "Sounds fine 🙂" },
      { context: "Awkward", text: "Well that happened 🙂" },
      { context: "Soft close", text: "Talk later 🙂" },
      { context: "Meme energy", text: "I'm thriving 🙂" },
      { context: "Work", text: "Thanks for the note 🙂" },
    ],
    contextBlocks: [
      {
        title: "🙂 vs 😊",
        body: "😊 feels warmer and more sincere. 🙂 is milder and more likely to read polite, awkward, or ambiguous.",
      },
      {
        title: "🙂 vs 😀",
        body: "😀 is clear happy energy. 🙂 is a slight smile — lower voltage and easier to misread.",
      },
      {
        title: "Passive-aggressive reading",
        body: "Some people treat lone 🙂 like a curt 👍. If the topic is sensitive, write a sentence.",
      },
      {
        title: "Irony and memes",
        body: "“Everything is fine 🙂” often signals the opposite. Pairing with bleak words flips the smile.",
      },
    ],
    searchIntents: [
      "slightly smiling face emoji meaning",
      "🙂 meaning in texting",
      "🙂 passive aggressive",
      "🙂 vs 😊",
      "what does 🙂 mean",
      "🙂 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not reply to vulnerable shares with only 🙂.",
      "Avoid as sarcasm with people who will take the smile literally and feel dismissed.",
      "Skip when you mean clear joy — use 😊 or 😀 instead.",
    ],
    faqs: [
      {
        question: "What does 🙂 mean in texting?",
        answer:
          "Mild positivity or polite acknowledgment — sometimes awkward or forced smile energy.",
      },
      {
        question: "Is 🙂 passive-aggressive?",
        answer:
          "It can be, especially alone after tension. Intent may be neutral; reception varies.",
      },
      {
        question: "🙂 vs 😊?",
        answer:
          "😊 is warmer and usually more genuine. 🙂 is cooler and more ambiguous.",
      },
      {
        question: "Why do memes use 🙂?",
        answer:
          "The slight smile under bleak captions signals “everything is fine” irony.",
      },
      {
        question: "Can I use 🙂 at work?",
        answer:
          "Yes for light politeness. For important tone, prefer clearer words or 😊.",
      },
    ],
  },

  "grimacing-face": {
    batchId: BATCH_ID,
    searchTitle: "Grimacing Face Emoji Meaning: Awkward, Cringe, or Nervous Smile?",
    snippetAnswer:
      "😬 Grimacing Face usually means awkwardness, cringe, secondhand embarrassment, or a nervous gritted smile — not the same as anxious sweat 😅.",
    detailedParagraphs: [
      "Grimacing Face (😬) shows a gritted-teeth smile. Unicode links it to grimacing; chat culture made it the default “yikes / awkward / eek” face.",
      "People send 😬 when something is uncomfortable: bad jokes, social blunders, tight deadlines, or “I have bad news.” It is empathy for the cringe.",
      "It differs from nervous laughter faces. 😅 often softens embarrassment with a sweat drop; 😬 is the clenched awkward smile itself.",
      "Self-use is common (“I forgot your birthday 😬”). Aimed at someone else’s mistake it can feel judgmental — soften with words if you mean support.",
    ],
    textingMeaning:
      "Use 😬 for awkward moments, cringe reactions, or uneasy updates. Alone it often means “uhh… this is uncomfortable.”",
    socialMeaning:
      "Comments drop 😬 under cringe videos, plot twists, and “secondhand embarrassment” clips. Captions use it for self-aware L posts.",
    caution:
      "Do not 😬 someone’s trauma or serious failure as entertainment. In work chats, pair it with a clear next step so it does not look like panic only.",
    examples: [
      { context: "Awkward news", text: "So I may have double-booked 😬" },
      { context: "Cringe reply", text: "I watched the whole thing 😬" },
      { context: "Self-own", text: "Sent that to the wrong chat 😬" },
      { context: "Empathy", text: "That meeting looked rough 😬" },
      { context: "Anticipation", text: "Results drop tomorrow 😬" },
      { context: "Story reply", text: "Yikes 😬" },
    ],
    contextBlocks: [
      {
        title: "😬 vs 😅",
        body: "😅 is sheepish/nervous laugh energy. 😬 is gritted awkwardness or cringe — less “lol,” more “oof.”",
      },
      {
        title: "😬 vs 😐",
        body: "😐 is flat/deadpan. 😬 shows tension through the teeth — active discomfort rather than blankness.",
      },
      {
        title: "Bad news softener",
        body: "“Traffic is awful, running late 😬” softens the update without joking it away.",
      },
      {
        title: "From a crush",
        body: "Usually not flirty. More “awkward situation” than interest — check the rest of the thread.",
      },
    ],
    searchIntents: [
      "grimacing face emoji meaning",
      "😬 meaning in texting",
      "😬 vs 😅",
      "what does 😬 mean",
      "grimacing emoji awkward",
      "😬 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 😬 to mock someone’s vulnerable moment.",
      "Avoid as the only reply when clear reassurance is needed.",
      "Skip in formal client updates without explanatory words.",
    ],
    faqs: [
      {
        question: "What does 😬 mean in texting?",
        answer:
          "Awkwardness, cringe, or uneasy “yikes” energy — a gritted smile.",
      },
      {
        question: "😬 vs nervous emoji?",
        answer:
          "😅 often reads as nervous laugh. 😬 is the awkward grimace itself.",
      },
      {
        question: "Is 😬 the same as embarrassed?",
        answer:
          "Close — embarrassment, secondhand cringe, and uneasy updates all fit.",
      },
      {
        question: "What does 😬 mean from a girl?",
        answer:
          "Usually “awkward/oops,” not flirt. Context of the bad-news or cringe moment matters.",
      },
      {
        question: "Can 😬 be positive?",
        answer:
          "Rarely pure joy — more tension. Friendly self-owns still keep it light.",
      },
    ],
  },

  "neutral-face": {
    batchId: BATCH_ID,
    searchTitle: "Neutral Face Emoji Meaning: Deadpan, Meh, or Speechless?",
    snippetAnswer:
      "😐 Neutral Face usually means deadpan, meh, blank reaction, or “I have no words.” It is flatter than awkward 😬 and cooler than a slight 🙂 smile.",
    detailedParagraphs: [
      "Neutral Face (😐) shows a straight-mouth expression with open eyes. Unicode marks it as neutral; texting uses it for emotional flatness, mild disapproval, or stunned silence.",
      "People send 😐 when something is underwhelming, weird, or not worth a big reaction. It can mean “okay…” without committing to happy or sad.",
      "Deadpan humor loves 😐 — delivering a joke with a blank face emoji. It can also signal quiet judgment after a questionable take.",
      "If you mean soft politeness, 🙂 may fit better. If you mean gritted awkwardness, use 😬. 😐 is the blank middle: no smile, no frown.",
    ],
    textingMeaning:
      "Use 😐 for meh energy, deadpan replies, or speechless reactions. Alone it often means “I’m not impressed / I’m blank.”",
    socialMeaning:
      "Comments use 😐 under disappointing reveals and dry humor. Captions pair it with understated or ironic posts.",
    caution:
      "Lone 😐 after someone shares excitement can kill the vibe. Soften with words if you mean confusion rather than dislike.",
    examples: [
      { context: "Meh", text: "The movie was mid 😐" },
      { context: "Deadpan", text: "Wow. Amazing. 😐" },
      { context: "Speechless", text: "He really said that 😐" },
      { context: "Awkward blank", text: "So... anyway 😐" },
      { context: "Disappointment", text: "Cancelled again 😐" },
      { context: "Group chat", text: "I have no comment 😐" },
    ],
    contextBlocks: [
      {
        title: "😐 vs 🙂",
        body: "🙂 still smiles a little. 😐 has a flat mouth — colder, more deadpan or unimpressed.",
      },
      {
        title: "😐 vs 😬",
        body: "😬 shows awkward tension. 😐 shows blank neutrality or quiet judgment.",
      },
      {
        title: "😐 vs 😑",
        body: "😑 (expressionless) often feels more annoyed or done. 😐 is neutral/blank; both can read unimpressed.",
      },
      {
        title: "Work tone",
        body: "Risky — can look unenthusiastic. Prefer clear feedback over blank-face emoji with managers.",
      },
    ],
    searchIntents: [
      "neutral face emoji meaning",
      "😐 meaning in texting",
      "😐 vs 🙂",
      "what does 😐 mean",
      "neutral face deadpan",
      "😐 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not blank-face someone’s good news if you want to stay supportive.",
      "Avoid as the only feedback on work someone cared about.",
      "Skip in sensitive conversations where neutrality reads as coldness.",
    ],
    faqs: [
      {
        question: "What does 😐 mean in texting?",
        answer:
          "Deadpan, meh, blank, or speechless — little emotional commitment.",
      },
      {
        question: "Is 😐 rude?",
        answer:
          "It can feel dismissive after excitement or vulnerability. Context decides.",
      },
      {
        question: "😐 vs 😑?",
        answer:
          "Both are flat. 😑 often leans more annoyed; 😐 leans neutral/blank.",
      },
      {
        question: "Can 😐 be funny?",
        answer:
          "Yes — deadpan delivery is a common joke style with 😐.",
      },
      {
        question: "What does 😐 mean from a guy?",
        answer:
          "Often “not impressed” or “no words.” Rarely affectionate by itself.",
      },
    ],
  },

  "kiss-mark": {
    batchId: BATCH_ID,
    searchTitle: "Kiss Mark Emoji Meaning: Lips, Flirty Kiss, or Lipstick Mark?",
    snippetAnswer:
      "💋 Kiss Mark means a lipstick kiss, flirty affection, or “mwah” energy. It is the lips print itself — not a face blowing a kiss like 😘.",
    detailedParagraphs: [
      "Kiss Mark (💋) is a red lipstick kiss print. Unicode presents it as a kiss mark; culture uses it for romance, beauty, and playful seduction.",
      "Unlike 😘 (a face sending a kiss), 💋 is the mark left behind — more object/symbol than facial expression. It often feels glossier and more stylized.",
      "Texters use 💋 for flirty closers, beauty captions, and Valentine energy. Friends may use it playfully; strangers may read it as romantic.",
      "Beauty and fashion communities also treat 💋 as lipstick/aesthetic branding. If you mean soft wholesome affection, 😘 or ❤️ may feel clearer.",
    ],
    textingMeaning:
      "Send 💋 to flirt, seal a romantic message, or add lipstick-kiss vibe. Alone it often means “kiss / love this / xoxo.”",
    socialMeaning:
      "Captions use 💋 for makeup looks, date nights, and sultry branding. Comments drop it as a flirty or glamorous reaction.",
    caution:
      "A lone 💋 to a coworker or new acquaintance can feel too intimate or sexualized. Prefer softer faces if intent is platonic.",
    examples: [
      { context: "Flirty close", text: "Miss you 💋" },
      { context: "Goodnight", text: "Sweet dreams 💋" },
      { context: "Beauty caption", text: "Red lip moment 💋" },
      { context: "Date night", text: "See you at 8 💋" },
      { context: "Thanks cutie", text: "You're the best 💋" },
      { context: "Story reply", text: "Looking good 💋" },
    ],
    contextBlocks: [
      {
        title: "💋 vs 😘",
        body: "😘 is a face blowing a kiss — expressive and common in everyday affection. 💋 is the lipstick mark — often glossier, more stylized or flirty.",
      },
      {
        title: "💋 vs ❤️",
        body: "❤️ is general love/care. 💋 is specifically kiss/lips energy — usually more physical or glamorous.",
      },
      {
        title: "Beauty branding",
        body: "Makeup posts use 💋 for lipstick and glam, not always romance.",
      },
      {
        title: "From a crush",
        body: "Often flirtier than a plain smile. Still check relationship history — some friend groups spam kiss marks platonically.",
      },
    ],
    searchIntents: [
      "kiss mark emoji meaning",
      "💋 meaning in texting",
      "💋 vs 😘",
      "what does 💋 mean",
      "kiss mark lips emoji",
      "💋 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 💋 alone to professional contacts.",
      "Avoid if the other person asked for less romantic energy.",
      "Skip as a joke with people who may take lipstick-kiss symbolism seriously.",
    ],
    faqs: [
      {
        question: "What does 💋 mean in texting?",
        answer:
          "A kiss — often flirty, glamorous, or “xoxo,” shown as a lipstick mark.",
      },
      {
        question: "💋 vs 😘?",
        answer:
          "😘 is a kissing face; 💋 is the lips print. Both can flirt; 💋 feels more stylized.",
      },
      {
        question: "Is 💋 only romantic?",
        answer:
          "Mostly affectionate or beauty-coded. Platonic use exists but romance is a common reading.",
      },
      {
        question: "What does 💋 mean from a girl?",
        answer:
          "Often flirt, fondness, or glam energy. Friend groups may use it playfully.",
      },
      {
        question: "Can I use 💋 at work?",
        answer:
          "Usually no — too intimate for professional chat.",
      },
    ],
  },

  "heart-hands": {
    batchId: BATCH_ID,
    searchTitle: "Heart Hands Emoji Meaning: Love Gesture, Support, or Cute Thanks?",
    snippetAnswer:
      "🫶 Heart Hands means making a heart with your hands — love, support, appreciation, or “I heart you” as a gesture. It is hands shaping affection, not a red ❤️ symbol alone.",
    detailedParagraphs: [
      "Heart Hands (🫶) shows two hands forming a heart. Unicode added it as a love gesture; social media made it a staple for fans, friends, and soft support.",
      "Unlike ❤️ (the classic heart symbol), 🫶 emphasizes the human gesture — the same pose people flash in photos and concerts. It often feels cute and communal.",
      "Compared with 🙏 (thanks/prayer/please), 🫶 is specifically affectionate shape energy, not petition or gratitude-by-default — though thanks captions use it too.",
      "Creators and K-pop/fan culture helped popularize 🫶 for “love you guys.” It is warmer than 👍 and usually less romantic-intense than 😘 stacks.",
    ],
    textingMeaning:
      "Send 🫶 to show love, appreciation, or supportive “heart you” energy. Alone it can mean “love this / love you / thank you cutely.”",
    socialMeaning:
      "Captions and comments use 🫶 for fan love, friendship, and wholesome support. Common under thank-you posts and community shoutouts.",
    caution:
      "Still affectionate — may feel intimate with strangers or formal contacts. Do not use it to replace a real apology.",
    examples: [
      { context: "Friendship", text: "Love you forever 🫶" },
      { context: "Thanks", text: "Couldn't have done it without you 🫶" },
      { context: "Fan reply", text: "Thank you for the support 🫶" },
      { context: "Support", text: "Proud of you 🫶" },
      { context: "Caption", text: "My people 🫶" },
      { context: "Soft close", text: "Talk soon 🫶" },
    ],
    contextBlocks: [
      {
        title: "🫶 vs ❤️",
        body: "❤️ is the classic love symbol. 🫶 is the hand-heart gesture — often cuter, more “posing love,” and common in fan/friend culture.",
      },
      {
        title: "🫶 vs 🙏",
        body: "🙏 usually means thanks, please, or prayer. 🫶 means heart-shaped affection. Both can thank; 🫶 is more love-coded.",
      },
      {
        title: "Romance level",
        body: "Can be romantic with a partner, but frequently platonic among friends and fans.",
      },
      {
        title: "Work chats",
        body: "Fine in very casual, friendly teams. Prefer 🙏 or words with clients.",
      },
    ],
    searchIntents: [
      "heart hands emoji meaning",
      "🫶 meaning in texting",
      "🫶 vs ❤️",
      "what does 🫶 mean",
      "heart hands vs folded hands",
      "🫶 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 🫶 alone after conflict as if affection fixes everything.",
      "Avoid with formal clients or first-contact professional messages.",
      "Skip if your recipient may misread hand-heart as romantic pressure.",
    ],
    faqs: [
      {
        question: "What does 🫶 mean in texting?",
        answer:
          "Love, support, or cute appreciation — the heart-hands gesture.",
      },
      {
        question: "🫶 vs ❤️?",
        answer:
          "❤️ is the heart symbol; 🫶 is hands making a heart. Similar affection, different vibe.",
      },
      {
        question: "Is 🫶 romantic?",
        answer:
          "Sometimes. Friends and fans use it platonically all the time.",
      },
      {
        question: "🫶 vs 🙏?",
        answer:
          "🙏 leans thanks/prayer; 🫶 leans love gesture. Overlap exists in gratitude posts.",
      },
      {
        question: "What does 🫶 mean from a girl?",
        answer:
          "Warm affection or support — crush or close-friend energy depending on history.",
      },
    ],
  },

  "clapping-hands": {
    batchId: BATCH_ID,
    searchTitle: "Clapping Hands Emoji Meaning: Applause, Congrats, or Slow Clap?",
    snippetAnswer:
      "👏 Clapping Hands means applause, congratulations, or “well done.” It is rhythmic praise — different from both-hands-up celebration 🙌.",
    detailedParagraphs: [
      "Clapping Hands (👏) shows two hands mid-clap. Unicode frames it as clapping; texting uses it for congratulations, encouragement, and audience applause.",
      "People send 👏 after wins, good points, and speeches — digital standing ovation energy. Stacks of 👏 amplify the cheer.",
      "Sarcasm exists: a “slow clap 👏” can mock a weak take. Tone and timing decide praise vs shade.",
      "Compared with 🙌 (raising hands), 👏 is applause; 🙌 is arms-up hype/praise. Both celebrate; 👏 feels more like an audience reacting.",
    ],
    textingMeaning:
      "Use 👏 to congratulate, applaud a point, or cheer someone on. Alone it often means “bravo / well done.”",
    socialMeaning:
      "Comments drop 👏 under achievements, speeches, and sharp opinions. Captions use it for launch days and “give them their flowers” posts.",
    caution:
      "Sarcastic clapping can escalate arguments. In serious grief, applause emoji can feel tone-deaf — use empathy instead.",
    examples: [
      { context: "Congrats", text: "You earned that promotion 👏" },
      { context: "Good point", text: "Said what needed saying 👏" },
      { context: "Sports", text: "What a play 👏" },
      { context: "Group hype", text: "Let's gooo 👏👏" },
      { context: "Presentation", text: "Nailed the pitch 👏" },
      { context: "Caption", text: "Give her her flowers 👏" },
    ],
    contextBlocks: [
      {
        title: "👏 vs 🙌",
        body: "👏 is applause/clapping. 🙌 is both hands raised in celebration or praise — more hype/hallelujah than clap track.",
      },
      {
        title: "👏 vs 🎉",
        body: "🎉 is party celebration object. 👏 is human applause. Often paired for big wins.",
      },
      {
        title: "Slow clap shade",
        body: "In heated threads, 👏 can mean sarcastic slow clap. Warm wins usually get words plus claps.",
      },
      {
        title: "Work wins",
        body: "Friendly teams love 👏 for ship days and shoutouts. Fine casually.",
      },
    ],
    searchIntents: [
      "clapping hands emoji meaning",
      "👏 meaning in texting",
      "👏 vs 🙌",
      "what does 👏 mean",
      "clapping emoji congratulations",
      "👏 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not clap-react to tragic or sensitive news.",
      "Avoid sarcastic 👏 when you actually need a clear disagreement in words.",
      "Skip spam clapping that looks bot-like under every post.",
    ],
    faqs: [
      {
        question: "What does 👏 mean in texting?",
        answer:
          "Applause, congratulations, or “well done.”",
      },
      {
        question: "👏 vs 🙌?",
        answer:
          "👏 applauds. 🙌 raises hands in praise/celebration.",
      },
      {
        question: "Can 👏 be sarcastic?",
        answer:
          "Yes — slow-clap energy in arguments. Context matters.",
      },
      {
        question: "Is 👏 okay at work?",
        answer:
          "Yes for casual team recognition and wins.",
      },
      {
        question: "Why stack 👏👏👏?",
        answer:
          "More claps = louder ovation or emphasis on each word in older meme style.",
      },
    ],
  },

  "handshake": {
    batchId: BATCH_ID,
    searchTitle: "Handshake Emoji Meaning: Deal, Agreement, Partnership, or Respect?",
    snippetAnswer:
      "🤝 Handshake usually means agreement, a deal, partnership, or mutual respect — sealing the plan, not just casual applause.",
    detailedParagraphs: [
      "Handshake (🤝) shows two hands clasping. Unicode treats it as a handshake; business and chat culture made it shorthand for “deal,” “agreed,” or “we're aligned.”",
      "People send 🤝 after settling plans, closing negotiations, or welcoming collaboration. It feels more contractual than a simple 👍.",
      "Friendship groups also use 🤝 for mutual respect (“respect 🤝”) or matching energy — less formal deal, more “we get each other.”",
      "It is not celebration-first like 🎉 or 👏. If you mean hype, cheer; if you mean partnership locked in, 🤝 is the clearer seal.",
    ],
    textingMeaning:
      "Use 🤝 to confirm a deal, agree on terms, or show mutual respect. Alone it often means “deal / agreed / partnership.”",
    socialMeaning:
      "Captions use 🤝 for collabs, brand partnerships, and “business” meme posts. Comments drop it when two takes align.",
    caution:
      "A playful 🤝 does not replace a written contract for real money or legal commitments. Also avoid if the other person did not actually agree.",
    examples: [
      { context: "Deal", text: "You bring snacks, I bring the movie 🤝" },
      { context: "Work", text: "Aligned on the timeline 🤝" },
      { context: "Respect", text: "Respect for saying that 🤝" },
      { context: "Collab", text: "Excited to build this together 🤝" },
      { context: "Plans", text: "Saturday at noon then 🤝" },
      { context: "Sports", text: "Good game 🤝" },
    ],
    contextBlocks: [
      {
        title: "🤝 vs 👍",
        body: "👍 is quick approval or “got it.” 🤝 seals mutual agreement or partnership — more two-sided.",
      },
      {
        title: "🤝 vs 👏",
        body: "👏 applauds someone’s win. 🤝 marks shared agreement or a deal between parties.",
      },
      {
        title: "Business tone",
        body: "Common in startup and creator collab chats. Still put money terms in writing.",
      },
      {
        title: "Friendship respect",
        body: "“Real ones 🤝” signals loyalty or mutual understanding more than romance.",
      },
    ],
    searchIntents: [
      "handshake emoji meaning",
      "🤝 meaning in texting",
      "🤝 vs 👍",
      "what does 🤝 mean",
      "handshake emoji deal",
      "🤝 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤝 a deal you are not actually committing to.",
      "Avoid as a substitute for contracts on serious agreements.",
      "Skip if someone is venting and needs empathy, not a business seal.",
    ],
    faqs: [
      {
        question: "What does 🤝 mean in texting?",
        answer:
          "Agreement, deal, partnership, or mutual respect.",
      },
      {
        question: "🤝 vs 👍?",
        answer:
          "👍 is approval/ack. 🤝 is a two-sided handshake — deal energy.",
      },
      {
        question: "Is 🤝 only for business?",
        answer:
          "No — friends use it for plans and respect too.",
      },
      {
        question: "Can 🤝 mean good game?",
        answer:
          "Yes — sportsmanship and mutual respect after a match.",
      },
      {
        question: "Is 🤝 flirty?",
        answer:
          "Rarely. It reads partnership or respect, not romance.",
      },
    ],
  },

  "flexed-biceps": {
    batchId: BATCH_ID,
    searchTitle: "Flexed Biceps Emoji Meaning: Strength, Flex, Motivation, or Congrats?",
    snippetAnswer:
      "💪 Flexed Biceps usually means strength, motivation, “you got this,” or a playful flex — muscle energy, not a handshake deal.",
    detailedParagraphs: [
      "Flexed Biceps (💪) shows an arm flexing. Unicode links it to biceps/flex; fitness and texting culture made it the encouragement and strength icon.",
      "People send 💪 for workouts, hustle culture, and pep talks (“you’ll crush it 💪”). It cheers capability more than applause alone.",
      "Ironic flexing exists too — humblebrags and meme “sigma” energy. Tone can be sincere gym motivation or playful show-off.",
      "It is not agreement (🤝) and not peace (✌️). Use 💪 when the message is power, effort, or resilience.",
    ],
    textingMeaning:
      "Use 💪 to hype strength, motivate someone, or celebrate hard work. Alone it can mean “strong / let’s go / flex.”",
    socialMeaning:
      "Gym captions, hustle posts, and “new PR” stories lean on 💪. Comments use it as motivational support under grind content.",
    caution:
      "Stacking 💪 on sensitive body topics can feel pushy. Avoid shaming “get stronger” replies when someone needs empathy.",
    examples: [
      { context: "Motivation", text: "You've got this 💪" },
      { context: "Gym", text: "Leg day complete 💪" },
      { context: "Work grind", text: "Shipping Friday 💪" },
      { context: "Congrats effort", text: "That took guts 💪" },
      { context: "Pep talk", text: "One more week 💪" },
      { context: "Caption", text: "Stronger every day 💪" },
    ],
    contextBlocks: [
      {
        title: "💪 vs 👏",
        body: "👏 applauds. 💪 emphasizes strength and effort — pep-talk muscle energy.",
      },
      {
        title: "💪 vs 🔥",
        body: "🔥 means hot/elite/trending. 💪 means strong/grind. A win can earn both.",
      },
      {
        title: "Playful flex",
        body: "Friends send 💪 after small wins as joke swagger. Still usually positive.",
      },
      {
        title: "Work chats",
        body: "Fine for casual “we’ll push through 💪.” Keep formal updates clearer.",
      },
    ],
    searchIntents: [
      "flexed biceps emoji meaning",
      "💪 meaning in texting",
      "muscle emoji meaning",
      "what does 💪 mean",
      "💪 motivation emoji",
      "💪 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not flex-reply to body-image vulnerability with unsolicited gym advice.",
      "Avoid as the only response to burnout — add real support.",
      "Skip mocking someone’s strength or lack of it.",
    ],
    faqs: [
      {
        question: "What does 💪 mean in texting?",
        answer:
          "Strength, motivation, encouragement, or a playful flex.",
      },
      {
        question: "Is 💪 only for the gym?",
        answer:
          "No — any hard work, grit, or “you got this” moment fits.",
      },
      {
        question: "💪 vs 🔥?",
        answer:
          "🔥 is heat/hype. 💪 is muscle/strength energy.",
      },
      {
        question: "Can 💪 mean congratulations?",
        answer:
          "Yes — especially for effort-based wins.",
      },
      {
        question: "Is 💪 flirty?",
        answer:
          "Usually not. It is hype/strength unless paired with thirst comments.",
      },
    ],
  },

  "victory-hand": {
    batchId: BATCH_ID,
    searchTitle: "Victory Hand Emoji Meaning: Peace, Victory, or V Sign?",
    snippetAnswer:
      "✌️ Victory Hand usually means peace, victory, or a casual V-sign pose — chill positivity more than muscle flex 💪 or OK 👌.",
    detailedParagraphs: [
      "Victory Hand (✌️) shows two fingers in a V. Unicode names it victory hand; everyday use spans peace signs, win poses, and cute photo energy.",
      "In the West it often reads “peace” or playful cool. In sports and competitions it can mean victory. East Asian selfie culture also popularized the V-sign as cute posing.",
      "Texters use ✌️ for chill goodbyes (“later ✌️”), soft wins, and laid-back captions. It is lighter than 🙌 hype and less deal-focused than 🤝.",
      "Orientation and culture matter for the physical gesture historically, but the emoji is widely read as friendly peace/victory online.",
    ],
    textingMeaning:
      "Send ✌️ for peace, casual bye, or light victory vibes. Alone it often means “peace out / we won / all good.”",
    socialMeaning:
      "Selfie captions and travel posts use ✌️ as a pose substitute. Comments drop it for chill approval and win moments.",
    caution:
      "Know your audience for gesture sensitivity in some regions historically tied to insult readings of a reversed V — the emoji is usually fine, but intent clarity helps.",
    examples: [
      { context: "Peace out", text: "Heading out ✌️" },
      { context: "Win", text: "We did it ✌️" },
      { context: "Chill caption", text: "Weekend mode ✌️" },
      { context: "Photo vibe", text: "Good energy only ✌️" },
      { context: "Soft agree", text: "I'm down ✌️" },
      { context: "Travel", text: "Made it to the beach ✌️" },
    ],
    contextBlocks: [
      {
        title: "✌️ vs 👌",
        body: "👌 means OK/perfect (with regional caution). ✌️ means peace or victory V-sign — different hand shapes and vibes.",
      },
      {
        title: "✌️ vs 🙌",
        body: "🙌 is big praise/celebration hands up. ✌️ is cooler, smaller peace/victory energy.",
      },
      {
        title: "Peace vs victory",
        body: "Same glyph covers both. Sports threads lean victory; casual byes lean peace.",
      },
      {
        title: "Selfie culture",
        body: "Common as a cute V-pose stand-in even when no hands are shown in the photo.",
      },
    ],
    searchIntents: [
      "victory hand emoji meaning",
      "✌️ meaning in texting",
      "peace sign emoji meaning",
      "what does ✌️ mean",
      "✌️ vs 👌",
      "✌️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use chill ✌️ to brush off a serious conflict.",
      "Avoid assuming every culture reads it identically in sensitive contexts.",
      "Skip as a substitute for clear professional confirmation.",
    ],
    faqs: [
      {
        question: "What does ✌️ mean in texting?",
        answer:
          "Peace, victory, or casual “peace out” energy.",
      },
      {
        question: "Is ✌️ the peace sign?",
        answer:
          "Often yes in everyday chat — also used for victory and cute posing.",
      },
      {
        question: "✌️ vs 🤞?",
        answer:
          "🤞 is fingers crossed (luck/hope). ✌️ is peace/victory.",
      },
      {
        question: "Can ✌️ mean goodbye?",
        answer:
          "Yes — a common chill closer.",
      },
      {
        question: "Is ✌️ okay at work?",
        answer:
          "Fine in casual teams; less precise than written confirmation.",
      },
    ],
  },

  "ok-hand": {
    batchId: BATCH_ID,
    searchTitle: "OK Hand Emoji Meaning: Perfect, OK, or Cultural Caution?",
    snippetAnswer:
      "👌 OK Hand usually means OK, perfect, or “chef’s kiss” approval. In some regions the gesture can be offensive — use care with unknown international audiences.",
    detailedParagraphs: [
      "OK Hand (👌) shows thumb and index finger forming a circle. Unicode labels it OK hand; English texting mostly reads “OK,” “perfect,” or “exactly.”",
      "Food and quality praise use 👌 as mild chef’s-kiss energy (“that pasta was 👌”). It can affirm plans similarly to 👍, with a slightly more “perfect” flavor.",
      "Meme history added extra baggage in some online spaces; everyday friends still mostly mean simple OK. Context and community matter.",
      "Important caution: the physical OK gesture is considered rude or vulgar in parts of some countries. For global clients, 👍 or ✅ may be safer defaults.",
    ],
    textingMeaning:
      "Send 👌 for OK, perfect, or strong approval of quality. Alone it often means “sounds perfect / nailed it.”",
    socialMeaning:
      "Comments use 👌 under skilled performances, food posts, and “exactly this” takes. Captions use it for polished results.",
    caution:
      "In some regions (and some meme subcultures) 👌 can be misread or offensive. Prefer clearer words or 👍/✅ with unfamiliar international contacts.",
    examples: [
      { context: "Perfect", text: "That plan is 👌" },
      { context: "Food praise", text: "This recipe is 👌" },
      { context: "Agreement", text: "OK by me 👌" },
      { context: "Quality", text: "Design looks 👌" },
      { context: "Confirm", text: "Tuesday works 👌" },
      { context: "Compliment", text: "Your timing was 👌" },
    ],
    contextBlocks: [
      {
        title: "👌 vs 👍",
        body: "👍 is the universal approval default. 👌 often feels more “perfect/exactly,” but carries more gesture baggage cross-culturally.",
      },
      {
        title: "👌 vs ✅",
        body: "✅ marks done/correct like a checkbox. 👌 is a human “OK/perfect” gesture.",
      },
      {
        title: "Cultural note",
        body: "Briefly: the OK hand gesture is offensive in some places. When unsure internationally, choose another emoji.",
      },
      {
        title: "Meme baggage",
        body: "Some internet circles overloaded 👌 with joke meanings. Most casual chats still mean OK/perfect.",
      },
    ],
    searchIntents: [
      "ok hand emoji meaning",
      "👌 meaning in texting",
      "👌 vs 👍",
      "is ok hand offensive",
      "what does 👌 mean",
      "👌 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid with unknown audiences in regions where the OK gesture is rude.",
      "Do not rely on 👌 alone for critical legal or medical confirmations.",
      "Skip if your community associates it with hostile meme use.",
    ],
    faqs: [
      {
        question: "What does 👌 mean in texting?",
        answer:
          "Usually OK, perfect, or strong approval of quality.",
      },
      {
        question: "Is 👌 offensive?",
        answer:
          "The gesture can be in some regions. Online it is often fine among friends — know your audience.",
      },
      {
        question: "👌 vs 👍?",
        answer:
          "👍 is clearer universal approval. 👌 leans “perfect” with more cultural nuance.",
      },
      {
        question: "Can 👌 mean chef’s kiss?",
        answer:
          "Informally yes — praise for something done excellently.",
      },
      {
        question: "Is 👌 okay at work?",
        answer:
          "In casual teams yes. For global clients, safer alternatives may be better.",
      },
    ],
  },

  "check-mark-button": {
    batchId: BATCH_ID,
    searchTitle: "Check Mark Button Emoji Meaning: Done, Correct, Verified, or Approved?",
    snippetAnswer:
      "✅ Check Mark Button usually means done, correct, approved, or verified. It is a task/status mark — clearer “completed” energy than a human 👍.",
    detailedParagraphs: [
      "Check Mark Button (✅) is a green check inside a button-like mark. Unicode frames it as a check mark button; productivity culture made it the “done/correct” stamp.",
      "People use ✅ for finished tasks, confirmed lists, and “yes, that’s right.” It feels more checklist than conversational approval.",
      "Compared with 👍, ✅ is less about social agreement tone and more about correctness or completion. Brands also use it for verified-feature vibes in casual copy.",
      "In group planning, ✅ can mean “I’m in” or “item handled.” Pair with words when money, dates, or safety confirmations matter.",
    ],
    textingMeaning:
      "Send ✅ to mark something done, correct, or approved. Alone it often means “completed / confirmed / correct.”",
    socialMeaning:
      "Stories and captions use ✅ for packing lists, habit trackers, and launch checklists. Comments drop it as clean confirmation.",
    caution:
      "A lone ✅ after an emotional message can feel cold — like closing a ticket. Add warmth when the human tone matters more than status.",
    examples: [
      { context: "Task done", text: "Report submitted ✅" },
      { context: "Confirm", text: "Address is correct ✅" },
      { context: "Checklist", text: "Tickets booked ✅ Hotel booked ✅" },
      { context: "Agreement", text: "Approved on my side ✅" },
      { context: "Habit", text: "Workout done ✅" },
      { context: "Group plan", text: "I'm in ✅" },
    ],
    contextBlocks: [
      {
        title: "✅ vs 👍",
        body: "👍 is human approval or “got it.” ✅ is a check — done/correct/verified status. Both confirm; ✅ feels more checklist.",
      },
      {
        title: "✅ vs ✔️",
        body: "Both are checks. ✅ (button) is the bold green completed look popular in chat; ✔️ is a simpler check mark.",
      },
      {
        title: "Project management",
        body: "Teams spam ✅ in standups to show tickets closed. Clear and scannable.",
      },
      {
        title: "Emotional threads",
        body: "Prefer words or ❤️/🙏 when someone needs care, not a closed-ticket vibe.",
      },
    ],
    searchIntents: [
      "check mark button emoji meaning",
      "✅ meaning in texting",
      "✅ vs 👍",
      "what does ✅ mean",
      "green check emoji meaning",
      "✅ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not ✅ someone’s feelings like a closed support ticket.",
      "Avoid as the only record of a high-stakes approval — write it out.",
      "Skip if the reader needs empathy more than status.",
    ],
    faqs: [
      {
        question: "What does ✅ mean in texting?",
        answer:
          "Done, correct, approved, or confirmed — checklist energy.",
      },
      {
        question: "✅ vs 👍?",
        answer:
          "👍 is social OK/approval. ✅ marks completion or correctness.",
      },
      {
        question: "Does ✅ mean verified?",
        answer:
          "Informally it can suggest “checked/verified,” though it is not a platform badge.",
      },
      {
        question: "Can ✅ mean I’m coming?",
        answer:
          "Yes in RSVP-style lists — “count me in ✅.”",
      },
      {
        question: "Is ✅ okay at work?",
        answer:
          "Excellent for task status. Add sentences for sensitive topics.",
      },
    ],
  },

  "ghost": {
    batchId: BATCH_ID,
    searchTitle: "Ghost Emoji Meaning: Boo, Halloween, Ghosting, or Spooky Cute?",
    snippetAnswer:
      "👻 Ghost usually means spooky-cute fun, Halloween vibes, “boo,” or joking about ghosting — playful spirit energy more than literal fear.",
    detailedParagraphs: [
      "Ghost (👻) is a cartoon ghost face. Unicode presents it as a ghost; chat culture uses it for Halloween, playful scares, and internet slang around disappearing.",
      "“Boo 👻” can mean a cute jump-scare hello. Friend groups also send 👻 when referencing ghosting — leaving someone on read without goodbye.",
      "It rarely means horror terror; the design is friendly. For real fear, people reach for 😱. For dead-from-laughter, 💀 is more common than 👻.",
      "Seasonal captions spike in October, but year-round slang keeps 👻 alive for “I vanished” jokes and soft spooky aesthetic.",
    ],
    textingMeaning:
      "Use 👻 for Halloween fun, playful “boo,” or ghosting jokes. Alone it can mean “spooky / I disappeared / surprise.”",
    socialMeaning:
      "Captions use 👻 for costumes, haunted attractions, and cute spooky branding. Comments drop it under ghosting stories and October posts.",
    caution:
      "Joking 👻 about ghosting can hurt if someone was actually left hanging. Do not celebrate disappearing on people who wanted closure.",
    examples: [
      { context: "Halloween", text: "Costume ready 👻" },
      { context: "Playful boo", text: "Boo 👻" },
      { context: "Ghosting joke", text: "Sorry I went 👻 for a bit" },
      { context: "Spooky plan", text: "Horror movie night 👻" },
      { context: "Caption", text: "Feeling mysterious 👻" },
      { context: "Story reply", text: "OKAY scare me 👻" },
    ],
    contextBlocks: [
      {
        title: "👻 vs 💀",
        body: "💀 often means “I’m dead” from laughter or figurative death. 👻 is spooky-cute ghost / boo / ghosting slang.",
      },
      {
        title: "👻 vs 😱",
        body: "😱 is shocked scream face. 👻 is the ghost character — playful more than panicked.",
      },
      {
        title: "Ghosting slang",
        body: "“He 👻’d me” means disappeared from the chat. Sensitive topic — joke carefully.",
      },
      {
        title: "Seasonal use",
        body: "Peaks at Halloween but works year-round for soft spooky aesthetic.",
      },
    ],
    searchIntents: [
      "ghost emoji meaning",
      "👻 meaning in texting",
      "👻 ghosting meaning",
      "what does 👻 mean",
      "ghost emoji halloween",
      "👻 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not joke 👻 about ghosting someone who is hurt by silence.",
      "Avoid as a reply to real fear or trauma.",
      "Skip if the chat needs a serious apology, not a cute ghost.",
    ],
    faqs: [
      {
        question: "What does 👻 mean in texting?",
        answer:
          "Spooky-cute fun, boo, Halloween, or a ghosting joke.",
      },
      {
        question: "Does 👻 mean ghosting?",
        answer:
          "Sometimes — slang for disappearing from a chat. Not the only meaning.",
      },
      {
        question: "Is 👻 scary?",
        answer:
          "Usually playful, not true horror.",
      },
      {
        question: "👻 vs 💀?",
        answer:
          "💀 is often laugh-dead; 👻 is ghost/boo/ghosting vibes.",
      },
      {
        question: "Can I use 👻 year-round?",
        answer:
          "Yes — Halloween spike is common, but slang and aesthetic use continue.",
      },
    ],
  },

  "alien": {
    batchId: BATCH_ID,
    searchTitle: "Alien Emoji Meaning: Weird, Out of This World, or Extraterrestrial?",
    snippetAnswer:
      "👽 Alien usually means weird, “not from this planet,” quirky outsider vibes, or literal sci-fi fun — slang for strange more than astronomy homework.",
    detailedParagraphs: [
      "Alien (👽) is a classic gray extraterrestrial face. Unicode labels it alien; internet slang uses it for odd behavior, niche interests, and “I feel like an alien here.”",
      "People send 👽 when something is bizarre (“the wifi is acting 👽”) or when they feel socially out of place. It can be self-deprecating cute weirdness.",
      "Sci-fi fans and festival culture also use 👽 literally for space, UFOs, and Area-51 jokes. Music and meme scenes sometimes treat it as a quirky brand mark.",
      "It is less insult-coded than 🤡. Calling a situation 👽 usually means strange, not “you’re a clown” — though teasing is possible.",
    ],
    textingMeaning:
      "Use 👽 for weird/out-there moments, sci-fi jokes, or “I don’t belong” humor. Alone it often means “strange / extraterrestrial vibes.”",
    socialMeaning:
      "Captions use 👽 for festivals, neon aesthetics, and UFO humor. Comments drop it under bizarre news and niche takes.",
    caution:
      "Calling a person 👽 can feel othering if they are already excluded. Prefer situation-focused weirdness over targeting someone’s identity.",
    examples: [
      { context: "Weird day", text: "This meeting was 👽" },
      { context: "Self-joke", text: "Social battery at 0 👽" },
      { context: "Sci-fi", text: "UFO documentary night 👽" },
      { context: "Niche vibe", text: "My music taste is 👽" },
      { context: "Caption", text: "Not from around here 👽" },
      { context: "Reaction", text: "What did I just watch 👽" },
    ],
    contextBlocks: [
      {
        title: "👽 vs 🤡",
        body: "🤡 usually means foolish/shade. 👽 means weird/out-of-this-world — stranger, not necessarily clown.",
      },
      {
        title: "👽 vs 👻",
        body: "👻 is spooky ghost/boo/ghosting. 👽 is alien/weird/sci-fi.",
      },
      {
        title: "Outsider slang",
        body: "“I feel 👽 in this group chat” = socially out of place, often humorous.",
      },
      {
        title: "Literal space",
        body: "Still fine for astronomy jokes, movies, and costume parties.",
      },
    ],
    searchIntents: [
      "alien emoji meaning",
      "👽 meaning in texting",
      "👽 vs 👻",
      "what does 👽 mean",
      "alien emoji slang",
      "👽 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not other someone with 👽 over identity, accent, or appearance.",
      "Avoid as a substitute for clear feedback at work.",
      "Skip if the topic is serious discrimination rather than light weirdness.",
    ],
    faqs: [
      {
        question: "What does 👽 mean in texting?",
        answer:
          "Weird, out-of-this-world, quirky outsider vibes, or sci-fi fun.",
      },
      {
        question: "Is 👽 an insult?",
        answer:
          "Usually not as harsh as 🤡 — more “strange.” Still can feel othering if aimed at a person.",
      },
      {
        question: "Can 👽 mean I feel left out?",
        answer:
          "Yes — “alien in the room” slang is common.",
      },
      {
        question: "👽 vs 👻?",
        answer:
          "👻 is ghost/spooky/ghosting. 👽 is alien/weird/space.",
      },
      {
        question: "Is 👽 only for Halloween?",
        answer:
          "No — year-round slang and sci-fi culture use it constantly.",
      },
    ],
  },

  "pile-of-poo": {
    batchId: BATCH_ID,
    searchTitle: "Pile of Poo Emoji Meaning: Silly Joke, Trash, or Not Literal?",
    snippetAnswer:
      "💩 Pile of Poo is almost never literal — it means silly humor, “this is trash,” playful roasting, or cute-gross meme energy.",
    detailedParagraphs: [
      "Pile of Poo (💩) is the smiling poop swirl. Unicode’s cheeky icon became one of the internet’s softest swear-adjacent jokes — rude idea, friendly face.",
      "People send 💩 when something is bad (“that take was 💩”), when joking about bathroom humor, or as affectionate nonsense among friends.",
      "It is meme first, hygiene last. Kids’ stickers and soft branding sometimes treat 💩 as cute rather than insulting — tone still depends on the relationship.",
      "Compared with 🤡 (foolish shade) or 👎 (dislike), 💩 is goofier and more childish-gross. For serious criticism, words beat poop emoji.",
    ],
    textingMeaning:
      "Use 💩 for silly insults, trash reviews, or bathroom-adjacent jokes. Alone it often means “lol nonsense / that’s crap” — not a medical report.",
    socialMeaning:
      "Comments drop 💩 under bad takes and fail videos. Captions use it for self-roast (“my sleep schedule 💩”) and chaotic humor.",
    caution:
      "Can look immature in professional settings. Aimed at a person, it may feel meaner than you intend — especially with kids’ teachers, clients, or elders.",
    examples: [
      { context: "Trash take", text: "That ending was 💩" },
      { context: "Self-roast", text: "My cooking today 💩" },
      { context: "Silly joke", text: "Happy Monday 💩" },
      { context: "Game fail", text: "I played like 💩" },
      { context: "Meme reply", text: "Absolute 💩 show" },
      { context: "Friend roast", text: "Your playlist 💩 /j" },
    ],
    contextBlocks: [
      {
        title: "💩 is not literal",
        body: "Almost always joke, insult-lite, or meme. Nobody is describing bathroom logistics unless the chat is explicitly about that.",
      },
      {
        title: "💩 vs 👎",
        body: "👎 is clear disapproval. 💩 is sillier “this stinks/trash” humor.",
      },
      {
        title: "💩 vs 🤡",
        body: "🤡 targets foolishness/hypocrisy. 💩 targets quality or chaotic gross-out humor.",
      },
      {
        title: "Work and school",
        body: "Usually too childish for formal threads. Keep for friends who share the bit.",
      },
    ],
    searchIntents: [
      "pile of poo emoji meaning",
      "💩 meaning in texting",
      "poop emoji meaning",
      "what does 💩 mean",
      "💩 emoji funny",
      "💩 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 💩 in professional client or HR conversations.",
      "Avoid roasting someone’s appearance, identity, or trauma with 💩.",
      "Skip when clear serious feedback is needed — write the critique.",
    ],
    faqs: [
      {
        question: "What does 💩 mean in texting?",
        answer:
          "Silly joke, “this is trash,” or playful roast — rarely literal.",
      },
      {
        question: "Is 💩 offensive?",
        answer:
          "Mild among friends; immature or rude in formal settings or harsh personal attacks.",
      },
      {
        question: "Why does the poop emoji smile?",
        answer:
          "Design tradition made it cute-gross, which softened it into meme culture.",
      },
      {
        question: "Can 💩 be affectionate?",
        answer:
          "In some friend groups, chaotic cute nonsense — still know your audience.",
      },
      {
        question: "💩 vs 👎?",
        answer:
          "👎 is straightforward dislike. 💩 is goofier trash/joke energy.",
      },
    ],
  },
};
