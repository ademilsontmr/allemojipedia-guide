import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "11-top-smileys-emotion";

export const batch11TopSmileysEmotion: Record<string, EmojiBatchEnrichment> = {
  "grimacing-face": {
    batchId: BATCH_ID,
    searchTitle: "Grimacing Face Emoji (😬) Meaning: Awkward, Cringe, and Nervous",
    snippetAnswer:
      "😬 Grimacing Face signals awkwardness, cringe, or nervous tension — 'yikes', 'this is uncomfortable', or smiling through pain. Common after bad jokes, social fails, or tense news.",
    detailedParagraphs: [
      "Grimacing Face (😬) shows clenched teeth and a tight smile — Unicode's visual for discomfort you try to hide politely.",
      "Texters send 😬 after sending a risky text, sitting through awkward silence, or watching someone embarrass themselves. It is empathy cringe as much as self-cringe.",
      "Work chats use 😬 when deadlines slip or someone drops a blunt comment in a meeting — lighter than 😱 but not fine.",
      "Meme culture pairs 😬 with 'why did I say that' stories. It rarely means physical tooth pain unless someone mentions the dentist.",
    ],
    textingMeaning: "'That was awkward 😬', 'I shouldn't have asked 😬', 'Well… 😬'.",
    socialMeaning: "Comment sections react to second-hand embarrassment clips with 😬 spam.",
    caution: "😬 after serious personal news can look like you are mocking someone's pain — add supportive words.",
    examples: [
      { context: "Cringe", text: "Why did I wave at the wrong person 😬" },
      { context: "Risky text", text: "Just sent that message 😬" },
      { context: "Meeting", text: "That silence was long 😬" },
      { context: "Reply", text: "Um… okay 😬" },
      { context: "Self-own", text: "Forgot their name mid-intro 😬" },
    ],
    contextBlocks: [
      { title: "Second-hand embarrassment", body: "😬 is the emoji for watching someone fail socially — reaction videos live on it." },
      { title: "Nervous smile", body: "People send 😬 when they are not happy but must stay polite — performance reviews, family dinners." },
      { title: "Vs 😅", body: "😅 is relieved sweat after a close call. 😬 is ongoing awkward tension." },
    ],
    searchIntents: ["grimacing face emoji", "😬 meaning", "awkward emoji", "cringe emoji 😬"],
    whenNotToUse: ["Avoid 😬 when someone shares trauma — it can read as making light of it.", "Skip in formal apologies without explanation."],
    faqs: [
      { question: "What does 😬 mean in texting?", answer: "Usually awkwardness, cringe, or nervous 'yikes' energy — rarely literal dental pain." },
      { question: "Is 😬 rude?", answer: "Not always — often self-deprecating. Directed at someone else it can feel judgmental." },
    ],
  },

  "unamused-face": {
    batchId: BATCH_ID,
    searchTitle: "Unamused Face Emoji (😒) Meaning: Side-Eye, Annoyed, Not Impressed",
    snippetAnswer:
      "😒 Unamused Face is classic side-eye — unimpressed, annoyed, or skeptical. It says 'really?' without typing a word.",
    detailedParagraphs: [
      "Unamused Face (😒) combines flat mouth and side-glance — Unicode's go-to for disapproval that is not full anger.",
      "Friends send 😒 when someone repeats a bad joke, cancels plans last minute, or flexes too hard. It is passive-aggressive if overused.",
      "On social media, 😒 reacts to hot takes, humble brags, and obvious bait. Commenters signal 'I am not buying this'.",
      "In dating chats, 😒 from a crush might tease; from a stranger it may end the conversation. Relationship context matters.",
    ],
    textingMeaning: "'Sure 🙄' energy but quieter — 'not amused 😒', 'okay then 😒'.",
    socialMeaning: "Reaction meme for drama recaps and 'tell me you X without telling me' posts.",
    caution: "Repeated 😒 at a friend can escalate fights. Say what annoyed you in words.",
    examples: [
      { context: "Unimpressed", text: "Wow groundbreaking 😒" },
      { context: "Cancel", text: "Again? 😒" },
      { context: "Flex", text: "We get it 😒" },
      { context: "Joke fail", text: "Ha. 😒" },
      { context: "Skeptic", text: "Doubt it 😒" },
    ],
    contextBlocks: [
      { title: "Side-eye culture", body: "😒 distills eye-roll energy into one glyph — faster than typing a paragraph of shade." },
      { title: "Playful vs serious", body: "Close friends use 😒 teasingly; without rapport it lands as cold." },
      { title: "Vs 🙄", body: "🙄 is explicit eye roll. 😒 is quieter disapproval." },
    ],
    searchIntents: ["unamused face emoji", "😒 meaning", "side eye emoji", "not impressed emoji"],
    whenNotToUse: ["Do not lead with 😒 in customer support.", "Avoid when someone shares vulnerable news."],
    faqs: [
      { question: "What does 😒 mean from a girl or guy?", answer: "Usually annoyance or 'not impressed' — flirtatious teasing is possible among close friends only." },
      { question: "Is 😒 passive-aggressive?", answer: "It can be — especially without clarifying text." },
    ],
  },

  "kiss-mark": {
    batchId: BATCH_ID,
    searchTitle: "Kiss Mark Emoji (💋) Meaning: Lipstick Kiss, Flirt, and Love",
    snippetAnswer:
      "💋 Kiss Mark is a lipstick kiss stamp — flirty texts, love notes, beauty content, and 'xoxo' energy. More romantic/sensual than kissing face emojis alone.",
    detailedParagraphs: [
      "Kiss Mark (💋) shows red lips leaving a kiss — Unicode's symbol for lipstick stamps on notes and love letters.",
      "Dating apps and anniversary chats use 💋 for explicit flirt and affection — stronger than 😗, less cute than 😘 alone.",
      "Beauty influencers tag lipstick swatches, tutorials, and 'get ready with me' posts with 💋.",
      "Some send 💋 platonically between best friends ('love you babe 💋') — region and friendship norms vary.",
    ],
    textingMeaning: "'Sending kisses 💋', 'miss you 💋', playful goodbye after a date.",
    socialMeaning: "Valentine's campaigns, perfume ads, and romance book clubs use 💋 in captions.",
    caution: "💋 in work Slack reads unprofessional. Do not send unsolicited 💋 to strangers online.",
    examples: [
      { context: "Flirt", text: "Thinking of you 💋" },
      { context: "Goodbye", text: "Mwah 💋" },
      { context: "Beauty", text: "New red lip 💋" },
      { context: "Love note", text: "Xoxo 💋" },
      { context: "Date", text: "Last night 💋" },
    ],
    contextBlocks: [
      { title: "Romance shorthand", body: "💋 compresses 'kisses' in DMs — common in established flirt dynamics." },
      { title: "Beauty literal", body: "Makeup posts use 💋 for lip product focus, not always romance." },
      { title: "Vs 😘", body: "😘 is a face blowing a kiss. 💋 is the mark left behind — more sensual symbol." },
    ],
    searchIntents: ["kiss mark emoji", "💋 meaning", "lipstick kiss emoji", "💋 flirty"],
    whenNotToUse: ["Avoid with professional contacts.", "Do not use to pressure someone romantically."],
    faqs: [
      { question: "What does 💋 mean in texting?", answer: "Usually kisses, flirt, or lipstick/beauty — context from the chat decides." },
      { question: "Is 💋 always romantic?", answer: "Often yes, but close friends use it playfully; beauty posts use it literally." },
    ],
  },

  "pile-of-poo": {
    batchId: BATCH_ID,
    searchTitle: "Pile of Poo Emoji (💩) Meaning: Joke, Bad Quality, and Silly",
    snippetAnswer:
      "💩 Pile of Poo is toilet humor — silly jokes, calling something 'crap', or playful insult among friends. Unicode gave it smiling eyes so it reads cartoonish, not medical.",
    detailedParagraphs: [
      "Pile of Poo (💩) is one of Unicode's most controversial yet popular emoji — cute brown swirl with a grin.",
      "Kids and meme accounts use 💩 for absurd humor. Adults use it to pan bad movies, buggy software, or terrible takes — 'this update is 💩'.",
      "Pet parents joke about puppy accidents with 💩 — literal bathroom humor in family chats.",
      "Avoid 💩 in sincere customer complaints to brands — use clear words instead or you may get ignored.",
    ],
    textingMeaning: "'That stinks 💩' (quality), potty jokes with toddlers, ironic praise.",
    socialMeaning: "Shitposting communities embrace 💩 as mascot energy — not for polished brand pages.",
    caution: "Never use 💩 toward someone's culture, food, or appearance. Gross in HR or healthcare contexts.",
    examples: [
      { context: "Bad quality", text: "This app update 💩" },
      { context: "Joke", text: "Poop joke incoming 💩" },
      { context: "Pet", text: "Puppy had an accident 💩" },
      { context: "Irony", text: "10/10 would recommend 💩" },
      { context: "Game", text: "My team played like 💩" },
    ],
    contextBlocks: [
      { title: "Cartoon gross-out", body: "Smiling eyes keep 💩 silly — different tone from vulgar text alone." },
      { title: "Review panning", body: "Casual reviewers drop 💩 for strong dislike without writing essays." },
      { title: "Kid humor", body: "Parents report potty training milestones with 💩 — normalized in family WhatsApp." },
    ],
    searchIntents: ["poop emoji meaning", "💩 emoji", "pile of poo copy paste", "💩 in texting"],
    whenNotToUse: ["Never in formal complaints to doctors, lawyers, or bosses.", "Do not aim at individuals as harassment."],
    faqs: [
      { question: "Why does 💩 have a smile?", answer: "Unicode/vendor design choice for cartoon humor — not medical documentation." },
      { question: "Is 💩 offensive?", answer: "Among friends often no; in professional or cross-cultural settings yes — tread carefully." },
    ],
  },

  "see-no-evil-monkey": {
    batchId: BATCH_ID,
    searchTitle: "See-No-Evil Monkey (🙈) Meaning: Embarrassment, Oops, and Cringe",
    snippetAnswer:
      "🙈 See-No-Evil Monkey means 'I can't look' — embarrassment, hiding from drama, or playful denial. Part of the three wise monkeys set with 🙉 and 🙊.",
    detailedParagraphs: [
      "See-No-Evil Monkey (🙈) covers its eyes — from Japanese 'see no evil' proverb, now meme shorthand for cringe.",
      "Send 🙈 after oversharing, reading a spicy group chat, or witnessing awkward PDA. 'Didn't need to see that 🙈'.",
      "Finance and gossip chats use 🙈 when checking a scary bank balance or celebrity scandal — peeking through fingers energy.",
      "Works with 🙉 (hear no evil) and 🙊 (speak no evil) as a trio in stories about keeping secrets.",
    ],
    textingMeaning: "'I can't watch 🙈', 'pretend I didn't see that 🙈', shy embarrassment.",
    socialMeaning: "Reaction to NSFW jokes, spoiler leaks, or fail compilations in comments.",
    caution: "🙈 can seem dismissive if someone shares discrimination or harm — do not minimize serious posts.",
    examples: [
      { context: "Cringe", text: "Second-hand embarrassment 🙈" },
      { context: "Spoiler", text: "Don't tell me 🙈" },
      { context: "Overshare", text: "Why did I say that 🙈" },
      { context: "Balance", text: "Checking my account 🙈" },
      { context: "Shy", text: "Too cute 🙈" },
    ],
    contextBlocks: [
      { title: "Three monkeys", body: "🙈🙉🙊 together signal 'we saw nothing' in friend group drama." },
      { title: "Flirty shyness", body: "🙈 after a compliment reads bashful — common in early dating." },
      { title: "Vs 🫣", body: "🫣 peeking face is newer Unicode peeking. 🙈 is classic hands-over-eyes." },
    ],
    searchIntents: ["see no evil monkey", "🙈 meaning", "monkey covering eyes emoji", "🙈 embarrassed"],
    whenNotToUse: ["Avoid when someone needs serious support.", "Do not use to mock victims of harassment."],
    faqs: [
      { question: "What does 🙈 mean in texting?", answer: "Embarrassment, 'can't look', or playful hiding — rarely about real monkeys." },
      { question: "🙈 flirty?", answer: "Can be — shy/blushing tone after compliments or teasing." },
    ],
  },

  "squinting-face-with-tongue": {
    batchId: BATCH_ID,
    searchTitle: "Squinting Face With Tongue (😝) Meaning: Silly, Teasing, and Playful",
    snippetAnswer:
      "😝 Squinting Face With Tongue is goofy teasing — jokes, raspberries, 'bleh', and chaotic friend energy. Louder silliness than 😛.",
    detailedParagraphs: [
      "This emoji (😝) sticks out a tongue with tight squinting eyes — Unicode's extra-playful variant.",
      "Friends roast each other lightly with 😝 after dumb ideas or ugly selfie jokes. It signals 'I am kidding'.",
      "Gamers and sports fans spam 😝 when trolling rival teams — keep it friendly or it becomes toxic.",
      "Parents text 😝 to kids during silly dinner battles — family-safe humor.",
    ],
    textingMeaning: "'You're ridiculous 😝', 'bleh 😝', playful sticking tongue out.",
    socialMeaning: "Meme replies and TikTok duet reactions use 😝 for unserious energy.",
    caution: "😝 at someone grieving or stressed lands horribly. Not for professional settings.",
    examples: [
      { context: "Tease", text: "Nice haircut 😝" },
      { context: "Silly", text: "Blehhh 😝" },
      { context: "Game", text: "Get rekt 😝" },
      { context: "Food", text: "Too spicy 😝" },
      { context: "Selfie joke", text: "Delete this 😝" },
    ],
    contextBlocks: [
      { title: "Joke marker", body: "😝 tells the reader not to take the previous line seriously." },
      { title: "Kid energy", body: "Matches playground taunts — harmless among close friends." },
      { title: "Vs 😛", body: "😛 is calmer tongue-out. 😝 adds squint for extra chaos." },
    ],
    searchIntents: ["😝 emoji meaning", "squinting tongue face", "silly emoji 😝", "teasing emoji"],
    whenNotToUse: ["Avoid bullying disguised as jokes.", "Skip in job applications."],
    faqs: [
      { question: "What does 😝 mean?", answer: "Playful teasing or silly 'bleh' — not usually flirt unless context says so." },
      { question: "😝 vs 😜?", answer: "😜 winks — more mischievous flirt. 😝 is broader goofy tease." },
    ],
  },

  "money-mouth-face": {
    batchId: BATCH_ID,
    searchTitle: "Money-Mouth Face Emoji (🤑) Meaning: Rich, Greed, and Payday",
    snippetAnswer:
      "🤑 Money-Mouth Face shows dollar eyes and tongue — wealth flex, payday hype, side-hustle brags, or greedy joke. TikTok finance bros love it.",
    detailedParagraphs: [
      "Money-Mouth Face (🤑) replaces eyes and tongue with cash symbols — Unicode's greed/wealth cartoon.",
      "Texters send 🤑 on payday, commission wins, or finding a bargain — 'just got paid 🤑'.",
      "Crypto and trading meme accounts use 🤑 ironically when portfolios pump or dump.",
      "Can read shallow if you 🤑 about someone else's hardship — timing matters.",
    ],
    textingMeaning: "'Payday 🤑', 'that bonus hit 🤑', joking greed over free food.",
    socialMeaning: "Side-hustle reels, affiliate marketing posts, and lottery jokes tag 🤑.",
    caution: "Bragging 🤑 during layoff season at work is tone-deaf. Avoid mocking poverty.",
    examples: [
      { context: "Payday", text: "Direct deposit landed 🤑" },
      { context: "Deal", text: "50% off 🤑" },
      { context: "Hustle", text: "Closed the client 🤑" },
      { context: "Joke", text: "Manifesting millions 🤑" },
      { context: "Win", text: "Vegas luck 🤑" },
    ],
    contextBlocks: [
      { title: "Payday ritual", body: "Friends celebrate monthly 🤑 messages when salaries hit — shared ritual." },
      { title: "Meme finance", body: "Trading humor uses 🤑 for gains and ironic losses." },
      { title: "Vs 💸", body: "💸 is money flying away (spending). 🤑 is money obsession/flex." },
    ],
    searchIntents: ["money mouth face", "🤑 meaning", "rich emoji", "payday emoji"],
    whenNotToUse: ["Avoid flexing wealth at struggling friends.", "Skip in condolence or charity threads."],
    faqs: [
      { question: "What does 🤑 mean?", answer: "Money excitement — payday, deals, wealth jokes, or greedy humor." },
      { question: "Is 🤑 cringe?", answer: "Can be if overused to brag; among friends on payday it is normal." },
    ],
  },

  "shushing-face": {
    batchId: BATCH_ID,
    searchTitle: "Shushing Face Emoji (🤫) Meaning: Secret, Quiet, and Shhh",
    snippetAnswer:
      "🤫 Shushing Face asks for silence — secrets, spoilers, library vibes, or 'don't tell anyone'. Finger on lips is universal shhh.",
    detailedParagraphs: [
      "Shushing Face (🤫) shows a finger over the mouth — Unicode's quiet/secret emoji.",
      "Use 🤫 before sharing gossip, surprise party plans, or plot spoilers. 'Keep this between us 🤫'.",
      "Creators tease upcoming launches with 🤫 — mystery marketing on Instagram stories.",
      "In theaters and classrooms, 🤫 jokes about noise — literal and metaphorical quiet.",
    ],
    textingMeaning: "'Don't tell 🤫', 'spoiler 🤫', 'be quiet they're sleeping 🤫'.",
    socialMeaning: "Teaser campaigns and 'secret menu' food posts use 🤫 for intrigue.",
    caution: "🤫 about harassment or safety issues is wrong — speak up, do not hush victims.",
    examples: [
      { context: "Secret", text: "Surprise party Saturday 🤫" },
      { context: "Spoiler", text: "Don't read yet 🤫" },
      { context: "Gossip", text: "You didn't hear this from me 🤫" },
      { context: "Teaser", text: "Launch soon 🤫" },
      { context: "Quiet", text: "Baby sleeping 🤫" },
    ],
    contextBlocks: [
      { title: "Surprise planning", body: "Birthday and proposal groups coordinate with 🤫 so the target stays unaware." },
      { title: "Spoiler culture", body: "Fandom threads demand 🤫 before discussing new episodes." },
      { title: "Vs 🤐", body: "🤐 is zipper mouth (can't speak). 🤫 actively requests silence from others." },
    ],
    searchIntents: ["shushing face emoji", "🤫 meaning", "shhh emoji", "secret emoji 🤫"],
    whenNotToUse: ["Never to silence abuse reporting.", "Avoid in open team transparency when info must be shared."],
    faqs: [
      { question: "What does 🤫 mean in texting?", answer: "Keep quiet — secrets, spoilers, or don't wake someone." },
      { question: "Is 🤫 flirty?", answer: "Sometimes — 'our little secret 🤫' in dating; usually neutral intrigue." },
    ],
  },

  "zipper-mouth-face": {
    batchId: BATCH_ID,
    searchTitle: "Zipper-Mouth Face Emoji (🤐) Meaning: Can't Talk, Secret, Muted",
    snippetAnswer:
      "🤐 Zipper-Mouth Face means lips sealed — can't speak, keeping a secret, or 'I have no comment'. The zipper visualizes locked mouth.",
    detailedParagraphs: [
      "Zipper-Mouth Face (🤐) zips the lips shut — Unicode symbol for self-imposed silence.",
      "Witnesses to drama send 🤐 when refusing to take sides — 'not getting involved 🤐'.",
      "After almost spoiling a surprise: 'almost said it 🤐'. NDA jokes at work use 🤐 too.",
      "Differs from 🤫: 🤐 is you cannot/will not speak; 🤫 tells others to quiet down.",
    ],
    textingMeaning: "'My lips are sealed 🤐', 'can't talk about it 🤐', no comment.",
    socialMeaning: "Celebrity gossip accounts post 🤐 when they legally cannot confirm rumors.",
    caution: "🤐 during safety disclosures may look like covering abuse — prioritize truth over meme.",
    examples: [
      { context: "Secret", text: "Not telling 🤐" },
      { context: "NDA", text: "Can't say yet 🤐" },
      { context: "Drama", text: "Staying out of it 🤐" },
      { context: "Almost slipped", text: "Nearly spoiled it 🤐" },
      { context: "No comment", text: "🤐" },
    ],
    contextBlocks: [
      { title: "Neutral in gossip", body: "🤐 lets you stay friends with both sides without picking." },
      { title: "Work secrecy", body: "Stealth product teams joke with 🤐 before public launches." },
      { title: "Vs 🤫", body: "🤫 shushes others. 🤐 locks your own mouth." },
    ],
    searchIntents: ["zipper mouth face", "🤐 meaning", "lips sealed emoji", "🤐 secret"],
    whenNotToUse: ["Do not use when obligated to report harm.", "Avoid in customer service — looks evasive."],
    faqs: [
      { question: "What does 🤐 mean?", answer: "I won't talk — secret kept, no comment, or literally can't speak." },
      { question: "🤐 vs 🤫?", answer: "🤐 = my mouth closed. 🤫 = please be quiet (often to others)." },
    ],
  },

  "face-with-raised-eyebrow": {
    batchId: BATCH_ID,
    searchTitle: "Face With Raised Eyebrow (🤨) Meaning: Skeptical, Really?, Sus",
    snippetAnswer:
      "🤨 Face With Raised Eyebrow is skepticism and 'really?' — doubtful, suspicious, or unimpressed by a claim. The Rock meme helped popularize it.",
    detailedParagraphs: [
      "Face With Raised Eyebrow (🤨) shows one arched brow — Unicode's doubt face, famous from Dwayne Johnson memes.",
      "Reply 🤨 to obvious lies, wild excuses, or inflated stories — 'you expect me to believe that 🤨'.",
      "Dating apps see 🤨 when profiles look too perfect — catfish suspicion without accusing directly.",
      "Work Slack uses 🤨 for questionable metrics — still informal; senior leaders may not appreciate it.",
    ],
    textingMeaning: "Silent side-eye — 'sus 🤨', 'sure about that 🤨'.",
    socialMeaning: "Comment meme for fake news, Photoshop fails, and 'cap' accusations.",
    caution: "Constant 🤨 erodes trust — ask direct questions instead in serious relationships.",
    examples: [
      { context: "Doubt", text: "You sure? 🤨" },
      { context: "Sus", text: "That story 🤨" },
      { context: "Cap", text: "Sounds like cap 🤨" },
      { context: "Profile", text: "Too good to be true 🤨" },
      { context: "Reply", text: "Interesting 🤨" },
    ],
    contextBlocks: [
      { title: "Meme lineage", body: "🤨 spread via reaction GIFs — skepticism without typing paragraphs." },
      { title: "Flirt skepticism", body: "Playful '🤨' when crush compliments too hard — teasing disbelief." },
      { title: "Vs 🧐", body: "🧐 inspects details curiously. 🤨 doubts your premise." },
    ],
    searchIntents: ["raised eyebrow emoji", "🤨 meaning", "skeptical emoji", "the rock emoji"],
    whenNotToUse: ["Avoid in performance reviews.", "Don't 🤨 someone's trauma story."],
    faqs: [
      { question: "What does 🤨 mean?", answer: "Skepticism, suspicion, or 'really?' — doubtful tone." },
      { question: "Why is 🤨 a meme?", answer: "Popularized by celebrity reaction images — now standalone skeptic emoji." },
    ],
  },

  "face-with-monocle": {
    batchId: BATCH_ID,
    searchTitle: "Face With Monocle Emoji (🧐) Meaning: Inspect, Fancy, Hmm",
    snippetAnswer:
      "🧐 Face With Monocle means curious inspection — reading closely, judging quality, or fancy 'well well well'. Detective and nerd aesthetic.",
    detailedParagraphs: [
      "Face With Monocle (🧐) adds a single lens — Unicode's 'let me examine this' face.",
      "Send 🧐 when scrutinizing screenshots, contract fine print, or suspicious Instagram edits.",
      "BookTok and review threads use 🧐 for thoughtful critique — not always negative.",
      "Pairs with detective murder-mystery fandom and Victorian meme humor.",
    ],
    textingMeaning: "'Let me look closer 🧐', 'interesting detail 🧐', faux-British curiosity.",
    socialMeaning: "Art critique comments and 'spot the difference' posts invite 🧐 reactions.",
    caution: "🧐 piled on someone's appearance can feel judgy — specify constructive intent.",
    examples: [
      { context: "Inspect", text: "Zooming in 🧐" },
      { context: "Review", text: "Notes on chapter 3 🧐" },
      { context: "Spot detail", text: "Background guy 🧐" },
      { context: "Fancy", text: "Well well well 🧐" },
      { context: "Terms", text: "Reading the fine print 🧐" },
    ],
    contextBlocks: [
      { title: "Detail hunting", body: "🧐 signals eagle-eye viewers in movie mistake threads." },
      { title: "Polite scrutiny", body: "Softer than 🤨 — curiosity before judgment." },
      { title: "Vs 🤓", body: "🤓 is studious nerd pride. 🧐 is inspecting something specific." },
    ],
    searchIntents: ["monocle face emoji", "🧐 meaning", "inspect emoji", "curious emoji"],
    whenNotToUse: ["Avoid mocking someone's literacy or speech.", "Skip when quick empathy beats analysis."],
    faqs: [
      { question: "What does 🧐 mean?", answer: "Looking closely — curious inspection or fancy skepticism." },
      { question: "Is 🧐 rude?", answer: "Can be if used to judge people; fine for objects and text." },
    ],
  },

  "nerd-face": {
    batchId: BATCH_ID,
    searchTitle: "Nerd Face Emoji (🤓) Meaning: Geek, Smart, and Study Mode",
    snippetAnswer:
      "🤓 Nerd Face celebrates geek culture — studying, coding, trivia wins, and proud nerd identity. Glasses and buck teeth read playful, not insulting among friends.",
    detailedParagraphs: [
      "Nerd Face (🤓) shows thick glasses and buck teeth — Unicode's geek stereotype reclaimed by fandom.",
      "Students text 🤓 during exam season, hackathons, and Wikipedia rabbit holes — 'deep in research 🤓'.",
      "Tech Twitter uses 🤓 for explainers and RFC jokes. Reclaimed proudly in STEM communities.",
      "Can insult if aimed at someone's appearance maliciously — intent separates pride from bullying.",
    ],
    textingMeaning: "'Actually 🤓' (ackshually jokes), 'homework mode 🤓', trivia victory.",
    socialMeaning: "Comic-Con posts, D&D nights, and math meme pages lead with 🤓.",
    caution: "Calling bullies 'nerd' with 🤓 is still harassment. Read the room.",
    examples: [
      { context: "Study", text: "All-nighter 🤓" },
      { context: "Trivia", text: "Knew that one 🤓" },
      { context: "Code", text: "Fixed the bug 🤓" },
      { context: "Fact", text: "Fun fact 🤓" },
      { context: "Pride", text: "Geek and proud 🤓" },
    ],
    contextBlocks: [
      { title: "Reclaimed identity", body: "Many STEM fans use 🤓 self-referentially — pride not slur." },
      { title: "Studyblr aesthetic", body: "Study influencers tag desk setups with 🤓 during finals." },
      { title: "Vs 🧐", body: "🧐 inspects one thing. 🤓 labels you the enthusiast." },
    ],
    searchIntents: ["nerd face emoji", "🤓 meaning", "geek emoji", "glasses emoji nerd"],
    whenNotToUse: ["Never bully classmates.", "Avoid stereotyping colleagues in HR issues."],
    faqs: [
      { question: "Is 🤓 an insult?", answer: "Depends on intent — self-use is pride; aimed mockery is insulting." },
      { question: "What does 🤓 mean in texting?", answer: "Geeky excitement, studying, or dropping a smart fact." },
    ],
  },

  "disguised-face": {
    batchId: BATCH_ID,
    searchTitle: "Disguised Face Emoji (🥸) Meaning: Incognito, Fake Mustache, Sneaky",
    snippetAnswer:
      "🥸 Disguised Face is incognito joke — fake nose-glasses disguise, going undercover, or 'definitely not me'. Spy humor and anonymous antics.",
    detailedParagraphs: [
      "Disguised Face (🥸) wears classic gag disguise — Unicode's incognito symbol added in Emoji 13.0.",
      "Use 🥸 when using alt accounts, sneaking into events, or joking 'who me?' after causing trouble.",
      "Online creators tease secret projects with 🥸 — mystery persona until reveal day.",
      "Meme format: bad disguise everyone sees through — comedy relies on obviousness.",
    ],
    textingMeaning: "'It's not me 🥸', sneaking snacks, undercover boss jokes.",
    socialMeaning: "Halloween lite, cosplay teases, and anonymous tip accounts use 🥸.",
    caution: "🥸 about real stalking or harassment is not funny — keep pranks harmless.",
    examples: [
      { context: "Incognito", text: "New account who dis 🥸" },
      { context: "Sneak", text: "Midnight snack mission 🥸" },
      { context: "Deny", text: "Wasn't me 🥸" },
      { context: "Teaser", text: "Secret project 🥸" },
      { context: "Costume", text: "Bad disguise 🥸" },
    ],
    contextBlocks: [
      { title: "Alt account culture", body: "🥸 jokes about finstas and anonymous stan accounts." },
      { title: "Obvious disguise trope", body: "Comedy works because the disguise never fools anyone in-story." },
      { title: "Vs 🕵️", body: "🕵️ is serious detective. 🥸 is cartoon incognito." },
    ],
    searchIntents: ["disguised face emoji", "🥸 meaning", "incognito emoji", "fake mustache emoji"],
    whenNotToUse: ["Do not normalize doxing or real harassment.", "Skip in legal identity contexts."],
    faqs: [
      { question: "What does 🥸 mean?", answer: "Undercover joke — disguised, incognito, or 'definitely not me'." },
      { question: "When was 🥸 added?", answer: "Unicode Emoji 13.0 — relatively new but widely adopted in meme culture." },
    ],
  },

  "worried-face": {
    batchId: BATCH_ID,
    searchTitle: "Worried Face Emoji (😟) Meaning: Concern, Anxiety, and Care",
    snippetAnswer:
      "😟 Worried Face shows genuine concern — checking on someone, anxious waiting, or empathy when a friend struggles. Softer than 😰 panic.",
    detailedParagraphs: [
      "Worried Face (😟) has raised brows and a slight frown — Unicode's care/concern expression.",
      "Send 😟 when a friend is sick, late, or going through interviews — 'thinking of you 😟'.",
      "Parents text 😟 when teens are out late — caring, not angry like 😠.",
      "News cycles spike 😟 in group chats during storms or election tension — collective anxiety.",
    ],
    textingMeaning: "'Are you okay? 😟', 'waiting for results 😟', empathetic check-in.",
    socialMeaning: "Support comments on hardship posts — shows you care without long paragraphs.",
    caution: "Follow 😟 with actual help offers — emoji alone can feel hollow in crises.",
    examples: [
      { context: "Check-in", text: "You home safe? 😟" },
      { context: "Health", text: "Hope you feel better 😟" },
      { context: "Waiting", text: "Results day 😟" },
      { context: "News", text: "This headline 😟" },
      { context: "Friend", text: "Here if you need 😟" },
    ],
    contextBlocks: [
      { title: "Empathy signal", body: "😟 opens space for someone to share more — gentler than demanding answers." },
      { title: "Parent worry", body: "Family groups use 😟 before escalating to angry calls." },
      { title: "Vs 😰", body: "😰 is sweaty panic. 😟 is concerned care." },
    ],
    searchIntents: ["worried face emoji", "😟 meaning", "concerned emoji", "anxious worried 😟"],
    whenNotToUse: ["Don't replace professional mental-health support with only 😟.", "Avoid performative worry without follow-up."],
    faqs: [
      { question: "What does 😟 mean in texting?", answer: "Worry and care — checking on someone or feeling anxious for them." },
      { question: "😟 vs 😔?", answer: "😔 is sad/disappointed. 😟 is active concern about someone or something." },
    ],
  },

  "slightly-frowning-face": {
    batchId: BATCH_ID,
    searchTitle: "Slightly Frowning Face (🙁) Meaning: Mild Sad, Disappointed",
    snippetAnswer:
      "🙁 Slightly Frowning Face is low-key sadness or disappointment — not crying, just 'ah, that's a bummer'. Gentler than ☹️ full frown.",
    detailedParagraphs: [
      "Slightly Frowning Face (🙁) is a small downturned mouth — Unicode's mild negative face.",
      "Use 🙁 when plans cancel softly, favorite team loses, or mood is meh — not devastation.",
      "Work chats: '🙁' when nice idea gets rejected — professional-ish disappointment.",
      "Children and adults use 🙁 to guilt-trip playfully — 'no pizza? 🙁'.",
    ],
    textingMeaning: "'That's too bad 🙁', mild letdown, polite sympathy.",
    socialMeaning: "Comments on minor bad news — lost wallet found but cash gone, etc.",
    caution: "🙁 after major grief may look dismissive — escalate to words and stronger support.",
    examples: [
      { context: "Cancel", text: "Rain ruined plans 🙁" },
      { context: "Loss", text: "We lost by one 🙁" },
      { context: "Sympathy", text: "Sorry to hear 🙁" },
      { context: "Playful", text: "No dessert? 🙁" },
      { context: "Mood", text: "Monday 🙁" },
    ],
    contextBlocks: [
      { title: "Soft negativity", body: "🙁 communicates displeasure without starting fights." },
      { title: "Customer feedback", body: "Reviews use 🙁 for 'meh' experiences between 😊 and 😡." },
      { title: "Vs ☹️", body: "☹️ frown is stronger. 🙁 is subtle disappointment." },
    ],
    searchIntents: ["slightly frowning face", "🙁 meaning", "sad emoji mild", "disappointed emoji"],
    whenNotToUse: ["Not for serious bereavement alone.", "Avoid manipulative guilt trips."],
    faqs: [
      { question: "What does 🙁 mean?", answer: "Mild sadness or disappointment — low-intensity bad news." },
      { question: "Is 🙁 passive-aggressive?", answer: "Can be if used to guilt someone — clarify intent." },
    ],
  },

  "frowning-face": {
    batchId: BATCH_ID,
    searchTitle: "Frowning Face Emoji (☹️) Meaning: Sad, Unhappy, Down",
    snippetAnswer:
      "☹️ Frowning Face is clear unhappiness — sadder than 🙁, less dramatic than 😢 crying. Old-style simple sad face.",
    detailedParagraphs: [
      "Frowning Face (☹️) is a classic downturned mouth emoji — vintage sad symbol like ☺️'s opposite.",
      "Texters use ☹️ when disappointed, lonely, or hearing bad news without full meltdown.",
      "Feels slightly old-school on some skins — similar nostalgic vibe to ☺️ but negative.",
      "Support friends with words alongside ☹️ — emoji shows mood, not full conversation.",
    ],
    textingMeaning: "'I'm sad ☹️', 'bad day ☹️', sympathy reply.",
    socialMeaning: "Wholesome sad posting — bad grades, missed flights, gentle venting.",
    caution: "Someone in crisis needs more than ☹️ — offer calls and concrete help.",
    examples: [
      { context: "Sad", text: "Rough day ☹️" },
      { context: "Sympathy", text: "So sorry ☹️" },
      { context: "Miss", text: "Wish you were here ☹️" },
      { context: "News", text: "That's awful ☹️" },
      { context: "Mood", text: "Feeling down ☹️" },
    ],
    contextBlocks: [
      { title: "Classic sad", body: "☹️ predates many modern crying faces — still understood globally." },
      { title: "Gentle vent", body: "Sharing ☹️ invites friends to ask what's wrong." },
      { title: "Vs 😞", body: "😞 is disappointed dejection. ☹️ is simpler frown sadness." },
    ],
    searchIntents: ["frowning face emoji", "☹️ meaning", "sad face emoji", "unhappy emoji"],
    whenNotToUse: ["Don't minimize major loss with only ☹️.", "Avoid sarcastic ☹️ at joyful announcements."],
    faqs: [
      { question: "What does ☹️ mean?", answer: "Sadness or unhappiness — clearer frown than 🙁." },
      { question: "☹️ vs 😢?", answer: "😢 adds tears for stronger grief. ☹️ is quiet sad." },
    ],
  },

  "hushed-face": {
    batchId: BATCH_ID,
    searchTitle: "Hushed Face Emoji (😯) Meaning: Surprised, Wow, Speechless",
    snippetAnswer:
      "😯 Hushed Face is surprised 'oh!' — small gasp, mild shock, or speechless reaction. Less intense than 😲 or 😱.",
    detailedParagraphs: [
      "Hushed Face (😯) shows open mouth surprise without screaming — Unicode's quiet gasp.",
      "React 😯 to plot twists, unexpected gifts, or mild gossip — 'wait what 😯'.",
      "Live sports moments get 😯 when a play is close but not insane — stepping stone to 🤯.",
      "Polite surprise in work chat: 'they approved the budget 😯'.",
    ],
    textingMeaning: "'Oh wow 😯', 'didn't expect that 😯', soft shock.",
    socialMeaning: "Comment reaction to wholesome surprises and mild drama.",
    caution: "😯 at tragedy can seem underwhelmed — match severity to event.",
    examples: [
      { context: "Surprise", text: "You're here?! 😯" },
      { context: "News", text: "They resigned 😯" },
      { context: "Gift", text: "For me? 😯" },
      { context: "Plot", text: "That twist 😯" },
      { context: "Stats", text: "Already sold out 😯" },
    ],
    contextBlocks: [
      { title: "Mild shock ladder", body: "😯 → 😲 → 🤯 escalates surprise intensity in meme replies." },
      { title: "Wholesome reactions", body: "Proposal videos and reunion clips collect 😯 in comments." },
      { title: "Vs 😮", body: "😮 is open-mouth surprise variant — similar use, vendor styling differs." },
    ],
    searchIntents: ["hushed face emoji", "😯 meaning", "surprised emoji", "oh wow emoji"],
    whenNotToUse: ["Not enough for condolences.", "Avoid if stronger empathy emoji fits better."],
    faqs: [
      { question: "What does 😯 mean?", answer: "Quiet surprise or 'oh' — mild shock without screaming." },
      { question: "😯 vs 😲?", answer: "😲 is more astonished. 😯 is softer hushed gasp." },
    ],
  },

  "astonished-face": {
    batchId: BATCH_ID,
    searchTitle: "Astonished Face Emoji (😲) Meaning: Shocked, No Way, Amazed",
    snippetAnswer:
      "😲 Astonished Face is bigger surprise — jaw-drop, 'NO WAY', amazed disbelief. Stronger than 😯, not full horror like 😱.",
    detailedParagraphs: [
      "Astonished Face (😲) shows wide eyes and open mouth — Unicode's astonishment face.",
      "Use 😲 for surprise parties revealed, lottery wins, or unbelievable stats — genuine amazement.",
      "Celebrity gossip spikes 😲 in comments when unexpected couples confirm relationships.",
      "Can feel sarcastic if overused on mundane news — 'they added milk 😲'.",
    ],
    textingMeaning: "'NO WAY 😲', 'I had no idea 😲', shocked in a good or bad way.",
    socialMeaning: "Reaction compilations and magic trick reels invite 😲 spam.",
    caution: "Bad news surprises need empathy text, not only 😲.",
    examples: [
      { context: "Reveal", text: "SURPRISE 😲" },
      { context: "News", text: "They're engaged 😲" },
      { context: "Win", text: "Jackpot?? 😲" },
      { context: "Stats", text: "1M in a day 😲" },
      { context: "Return", text: "You're back?? 😲" },
    ],
    contextBlocks: [
      { title: "Positive shock", body: "Proposals and promotions earn sincere 😲 floods." },
      { title: "Negative shock", body: "Sudden layoffs or scandals also get 😲 — pair with support." },
      { title: "Vs 🤯", body: "🤯 is mind-blown overload. 😲 is classic jaw-drop." },
    ],
    searchIntents: ["astonished face emoji", "😲 meaning", "shocked emoji", "no way emoji"],
    whenNotToUse: ["Avoid only 😲 when friend needs help.", "Skip sarcastic 😲 in sensitive threads."],
    faqs: [
      { question: "What does 😲 mean?", answer: "Strong surprise or astonishment — good or bad shock." },
      { question: "Is 😲 positive?", answer: "Neutral — context decides amazement vs bad news shock." },
    ],
  },

  "flushed-face": {
    batchId: BATCH_ID,
    searchTitle: "Flushed Face Emoji (😳) Meaning: Embarrassed, Awkward, Flattered",
    snippetAnswer:
      "😳 Flushed Face means embarrassed, caught off guard, or flattered — blushing cheeks and wide eyes. 'Oops', crush compliments, or awkward moments.",
    detailedParagraphs: [
      "Flushed Face (😳) shows red cheeks — Unicode's blush/embarrassment face.",
      "Send 😳 after compliments, being called out kindly, or accidental likes on old photos.",
      "Confession threads use 😳 — admitting crushes or mistakes with vulnerable humor.",
      "Differs from 😊 happy blush — 😳 emphasizes awkward or overwhelmed embarrassment.",
    ],
    textingMeaning: "'omg stop 😳' (compliment), 'I can't believe I did that 😳'.",
    socialMeaning: "Romantic fan edits and 'he looked at me' posts tag 😳.",
    caution: "Don't use 😳 to mock someone's legitimate embarrassment in public.",
    examples: [
      { context: "Compliment", text: "You're making me blush 😳" },
      { context: "Oops", text: "Wrong chat 😳" },
      { context: "Confess", text: "I kinda like you 😳" },
      { context: "Caught", text: "You saw that?? 😳" },
      { context: "Praise", text: "Too kind 😳" },
    ],
    contextBlocks: [
      { title: "Flirt blush", body: "😳 is staple when crush compliments land — shy positive tone." },
      { title: "Social oops", body: "Accidental reply-all or like-from-2020 triggers 😳 stories." },
      { title: "Vs 🥵", body: "🥵 is hot/overheated meme. 😳 is embarrassed blush." },
    ],
    searchIntents: ["flushed face emoji", "😳 meaning", "blush emoji embarrassed", "😳 flirty"],
    whenNotToUse: ["Avoid shaming others' blush moments.", "Not for anger — use 😠 instead."],
    faqs: [
      { question: "What does 😳 mean from a crush?", answer: "Often flattered embarrassment — they may like the attention." },
      { question: "😳 vs 😊?", answer: "😊 is happy calm. 😳 is overwhelmed or awkward blush." },
    ],
  },

  "anxious-face-with-sweat": {
    batchId: BATCH_ID,
    searchTitle: "Anxious Face With Sweat (😰) Meaning: Nervous, Stressed, Whew",
    snippetAnswer:
      "😰 Anxious Face With Sweat is nervous tension — job interviews, waiting rooms, near-miss relief, or performance anxiety. Blue sweat drop signals stress.",
    detailedParagraphs: [
      "Anxious Face With Sweat (😰) combines worried eyes with a sweat drop — Unicode stress face.",
      "Texters send 😰 before presentations, flights in turbulence, or opening exam results online.",
      "Also 'whew that was close' after avoiding disaster — anxious relief overlap with 😅.",
      "Mental-health aware chats use 😰 to vent anxiety — pair with asking for support if needed.",
    ],
    textingMeaning: "'So nervous 😰', 'deadline in 1 hour 😰', 'that was close 😰'.",
    socialMeaning: "Exam season memes, job hunt content, and airport story posts use 😰.",
    caution: "If someone shares panic attacks, respond with care not meme pile-on.",
    examples: [
      { context: "Interview", text: "Waiting room 😰" },
      { context: "Deadline", text: "Due at midnight 😰" },
      { context: "Close call", text: "Almost missed the flight 😰" },
      { context: "Exam", text: "Results posting 😰" },
      { context: "Present", text: "Big meeting 😰" },
    ],
    contextBlocks: [
      { title: "Performance anxiety", body: "Students and professionals unify around 😰 during high-stakes weeks." },
      { title: "Relief nuance", body: "Sometimes 😰 means survived the scare — context clarifies pure stress vs whew." },
      { title: "Vs 😥", body: "😥 is sad relief. 😰 is anxious sweat stress." },
    ],
    searchIntents: ["anxious face sweat emoji", "😰 meaning", "nervous emoji", "stressed emoji 😰"],
    whenNotToUse: ["Don't mock clinical anxiety.", "Avoid only 😰 when friend asks for real help."],
    faqs: [
      { question: "What does 😰 mean?", answer: "Anxiety, nervous sweat, or stressed waiting — sometimes relieved 'close one'." },
      { question: "😰 vs 😅?", answer: "😅 is embarrassed relief laugh. 😰 is active anxious tension." },
    ],
  },
};
