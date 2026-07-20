import type { EmojiBatchEnrichment } from "./types";

/**
 * P0 Wave 1 — exclusivity rewrite for top-search emoji pages that were
 * override/template-thin. Pattern matches batch00 (hand-written, search-intent FAQs).
 * Covers: ❤️ 😭 🔥 🥺 😍 🤔 + polish upgrades for 👍 🙏.
 */
const BATCH_ID = "38-p0-wave1-top-search";

export const batch38P0Wave1TopSearch: Record<string, EmojiBatchEnrichment> = {
  "red-heart": {
    batchId: BATCH_ID,
    searchTitle: "Red Heart Emoji Meaning: Love, Friendship, Texting, and When to Use It",
    snippetAnswer:
      "❤️ Red Heart usually means love, affection, warmth, or strong appreciation. It can be romantic, but in close friendships and family chats it often just shows care.",
    detailedParagraphs: [
      "Red Heart (❤️) is the default digital heart — the emoji people reach for when they want to say “I care” without typing a paragraph. Unicode treats it as the classic love symbol; platforms render it as a solid red heart.",
      "In romance it signals affection, attraction, or “I love you” energy. A single ❤️ after a goodnight text often lands softer than typing the words, especially early in a relationship.",
      "Friends and family use ❤️ just as often for non-romantic warmth: thank-you messages, proud-parent replies, and “thinking of you” check-ins. Context and relationship history decide whether it reads flirty or platonic.",
      "Colored hearts (🩷 💜 💙 🖤) carry niche codes in some friend groups, but ❤️ remains the most universal. If you are unsure which heart to send, red is the safest default for genuine affection.",
    ],
    textingMeaning:
      "Send ❤️ to show love, gratitude, or emotional support. Alone it can mean “love you”; paired with words it softens apologies, congratulations, or long-distance check-ins.",
    socialMeaning:
      "On Instagram and TikTok, ❤️ tags romantic captions, couple posts, memorial tributes, and brand “we love this” energy. Comment hearts are low-effort approval that still feels warmer than a like.",
    caution:
      "A lone ❤️ to a coworker, client, or new acquaintance can feel too intimate. After a breakup, sending ❤️ may reopen the conversation — use clear words if you only mean friendship.",
    examples: [
      { context: "Romantic", text: "Miss you already ❤️" },
      { context: "Friendship", text: "Thanks for showing up today ❤️" },
      { context: "Family", text: "Proud of you, kid ❤️" },
      { context: "Support", text: "I'm here if you need me ❤️" },
      { context: "Goodnight", text: "Sleep well ❤️" },
      { context: "Caption", text: "Weekend with my people ❤️" },
    ],
    contextBlocks: [
      {
        title: "From a girl or guy",
        body: "❤️ from a crush often means interest or warmth. From a close friend it can be pure platonic love. Read the rest of the thread — flirty timing vs. comfort replies change the meaning.",
      },
      {
        title: "❤️ vs 🩷 pink heart",
        body: "🩷 often feels softer, cuter, or more aesthetic. ❤️ is classic and stronger. Many people still treat them as interchangeable affection.",
      },
      {
        title: "❤️ vs 💜 purple heart",
        body: "💜 can signal deep friendship, fandom, or spiritual vibes in some circles. ❤️ stays the default romantic or general love emoji.",
      },
      {
        title: "Work and group chats",
        body: "In casual teams ❤️ can thank someone warmly. In formal Slack or email, skip it unless your culture clearly allows emoji affection.",
      },
    ],
    searchIntents: [
      "red heart emoji meaning",
      "❤️ meaning from a girl",
      "❤️ meaning in texting",
      "red heart vs pink heart",
      "heart emoji meaning",
      "❤️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send ❤️ alone to someone who may misread it as romantic interest.",
      "Avoid in HR, legal, or first-contact professional messages.",
      "Skip ❤️ in arguments if it could look dismissive instead of caring.",
    ],
    faqs: [
      {
        question: "What does ❤️ mean in texting?",
        answer:
          "Usually love, affection, or strong appreciation. Romantic with a partner; often platonic with family and close friends.",
      },
      {
        question: "What does ❤️ mean from a girl?",
        answer:
          "Warmth or affection — sometimes flirty, sometimes friendly. Pair it with how often she hearts your messages and whether the chat is already romantic.",
      },
      {
        question: "❤️ vs 💕 or 💖?",
        answer:
          "❤️ is the classic solid love heart. Sparkling or two-heart variants often feel cuter or more playful; red remains the strongest default.",
      },
      {
        question: "Is ❤️ only romantic?",
        answer:
          "No. Parents, siblings, and best friends use it constantly for care and gratitude. Relationship context decides the tone.",
      },
      {
        question: "Can I use ❤️ at work?",
        answer:
          "Only in informal cultures with people you know well. Prefer 👍 or plain thanks with clients and managers.",
      },
    ],
  },

  "loudly-crying-face": {
    batchId: BATCH_ID,
    searchTitle: "Loudly Crying Face Emoji Meaning: Sad, Funny, or Overwhelmed?",
    snippetAnswer:
      "😭 Loudly Crying Face can mean real sadness, intense emotion, or exaggerated laughter. In casual texting it is often dramatic rather than literally sad.",
    detailedParagraphs: [
      "Loudly Crying Face (😭) shows a face streaming tears with an open mouth — Unicode’s mark for loud, obvious crying. Online, the same glyph covers grief, overwhelm, and “I’m crying laughing” hyperbole.",
      "Genuine sadness still uses 😭: breakups, bad news, homesick nights. One 😭 with supportive words reads earnest; stacks of 😭 amplify the emotion.",
      "Comedy texting flipped the emoji. Friends reply “stop 😭” or “I’m deceased 😭” when something is too funny, too accurate, or too cringe — closer to theatrical tears than despair.",
      "Tone depends on the thread. After “my dog died,” 😭 is empathy. After a chaotic meme, 😭 is entertainment. If the topic is heavy, add words so your reaction cannot be misread as a joke.",
    ],
    textingMeaning:
      "Use 😭 for big feelings — sadness, relief tears, or dramatic humor. Alone it can mean “this hit me hard”; with “lol” or a meme it usually means exaggerated laughter.",
    socialMeaning:
      "Captions and comments use 😭 under emotional videos, plot twists, and “too real” posts. Creators add it when a story is meant to feel raw or hilariously overwhelming.",
    caution:
      "Do not answer serious grief with lone 😭 laughing-energy slang. Older relatives may only read literal crying. In work chats, prefer clear language over dramatic tear faces.",
    examples: [
      { context: "Sad news", text: "I can't believe it's over 😭" },
      { context: "Funny overwhelm", text: "This video ended me 😭" },
      { context: "Relatable", text: "Why is this so accurate 😭" },
      { context: "Happy tears", text: "She said yes 😭❤️" },
      { context: "Story reply", text: "Stop I'm crying 😭" },
      { context: "Support", text: "That sounds so hard 😭 I'm here" },
    ],
    contextBlocks: [
      {
        title: "😭 vs 😂",
        body: "😂 is clear laughter. 😭 can be laughter or sadness. If you mean funny, 😂 (or 💀) is safer; reserve 😭 for emotion that feels bigger than a chuckle.",
      },
      {
        title: "😭 vs 😢",
        body: "😢 is quieter sadness. 😭 is louder, more dramatic, and more likely to be used for memes.",
      },
      {
        title: "Gen Z dramatic use",
        body: "“I’m screaming 😭” often means the content is extreme — funny, awkward, or emotionally loud — not that someone is literally sobbing.",
      },
      {
        title: "Supportive replies",
        body: "When someone vents, 😭 plus a sentence (“that sucks, want to talk?”) lands kinder than emoji alone.",
      },
    ],
    searchIntents: [
      "😭 meaning",
      "loudly crying emoji meaning",
      "😭 meaning in texting",
      "😭 vs 😂",
      "loudly crying face funny or sad",
      "😭 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use meme-style 😭 when someone shares real loss or trauma.",
      "Avoid stacks of 😭 in professional updates — it looks unprofessional.",
      "Skip 😭 if the reader may not share internet slang and will assume literal despair.",
    ],
    faqs: [
      {
        question: "What does 😭 mean in texting?",
        answer:
          "Strong emotion — often sadness, but frequently exaggerated laughter or “this is too much.” Read the message around it.",
      },
      {
        question: "Is 😭 funny or sad?",
        answer:
          "Both. With jokes and memes it is theatrical; with bad news it is sincere. Context decides.",
      },
      {
        question: "😭 vs 😂 — which should I send?",
        answer:
          "Send 😂 for clear “that was funny.” Send 😭 when the feeling is bigger, messier, or emotionally overloaded.",
      },
      {
        question: "What does 😭 mean from a girl?",
        answer:
          "Same dual use: she may be upset, overwhelmed, or laughing hard. Check whether the chat topic is serious or playful.",
      },
      {
        question: "Can 😭 mean happy tears?",
        answer:
          "Yes — weddings, reunions, and surprise gifts often get 😭 paired with ❤️ or congratulations.",
      },
    ],
  },

  "fire": {
    batchId: BATCH_ID,
    searchTitle: "Fire Emoji Meaning: Hot, Attractive, Trending, or Impressive?",
    snippetAnswer:
      "🔥 Fire means something is hot, impressive, exciting, attractive, or trending. It is a go-to compliment for looks, performances, sports plays, and viral posts.",
    detailedParagraphs: [
      "Fire (🔥) started as a literal flame and became internet slang for “that’s hot” or “that’s elite.” Unicode’s fire emoji now carries hype energy across texting, comments, and captions.",
      "As a compliment, 🔥 praises outfits, selfies, music, food pics, and game-winning moments. One 🔥 says “impressive”; 🔥🔥🔥 raises the volume.",
      "On Instagram and TikTok, 🔥 marks content that feels trending, high-energy, or stylish. Creators put it in captions when they want hype, not softness.",
      "It can also mean literal fire — camping, candles, spicy food — but slang uses dominate DMs. If you mean danger or a real emergency, write words; do not rely on 🔥 alone.",
    ],
    textingMeaning:
      "Drop 🔥 after a photo, fit check, or win to compliment without a long sentence. In flirting it can mean “you look good”; among friends it often means “that was sick.”",
    socialMeaning:
      "Comments and story replies use 🔥 as fast praise. Brands and artists lean on it for launch posts, drops, and highlight reels.",
    caution:
      "Repeated 🔥 under someone’s photos can feel thirsty or spammy. Avoid 🔥 jokes about real fires, accidents, or tragedies.",
    examples: [
      { context: "Outfit", text: "That fit is 🔥" },
      { context: "Flirty", text: "You look 🔥 tonight" },
      { context: "Music", text: "New track is 🔥" },
      { context: "Sports", text: "What a play 🔥" },
      { context: "Food", text: "This pasta 🔥" },
      { context: "Work win", text: "Presentation was 🔥" },
    ],
    contextBlocks: [
      {
        title: "🔥 from a guy or girl",
        body: "Often a looks or vibe compliment. In a flirt thread it leans attractive; in a friend group it can just mean “awesome.”",
      },
      {
        title: "Instagram and TikTok",
        body: "🔥 under a reel signals hype. Creators track fire comments as social proof that the post landed.",
      },
      {
        title: "🔥 vs ❤️",
        body: "❤️ is affection or love. 🔥 is heat, skill, or trend energy — compliment without necessarily saying “I love you.”",
      },
      {
        title: "Spicy food and literal flame",
        body: "Menus and camping posts still use 🔥 literally. Words like “hot sauce” or “bonfire” make the literal reading obvious.",
      },
    ],
    searchIntents: [
      "fire emoji meaning",
      "🔥 meaning in texting",
      "fire emoji from a guy",
      "🔥 meaning on Instagram",
      "what does fire emoji mean",
      "🔥 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🔥 about real disasters, arson news, or injury.",
      "Avoid spamming 🔥 on every selfie — it loses meaning and can feel creepy.",
      "Skip in formal reports where slang hype looks childish.",
    ],
    faqs: [
      {
        question: "What does 🔥 mean in texting?",
        answer:
          "Usually “hot,” “impressive,” or “awesome.” It is a compliment for people, posts, food, music, or moments.",
      },
      {
        question: "What does 🔥 mean from a guy?",
        answer:
          "Often that he finds you or your post attractive or impressive. In sports or music chats it can simply mean “elite.”",
      },
      {
        question: "Is 🔥 flirty?",
        answer:
          "It can be. On a selfie it often leans flirty; on a highlight reel among friends it may just mean hype.",
      },
      {
        question: "🔥 vs 💯?",
        answer:
          "💯 means “keep it real” or perfect score energy. 🔥 is heat and hype. They stack well: “that verse 🔥💯.”",
      },
      {
        question: "Can 🔥 mean spicy?",
        answer:
          "Yes for food. In most DMs though, slang “this is fire” beats the chili-pepper reading.",
      },
    ],
  },

  "pleading-face": {
    batchId: BATCH_ID,
    searchTitle: "Pleading Face Emoji Meaning: Cute, Begging, Emotional, or Flirty?",
    snippetAnswer:
      "🥺 Pleading Face means begging, cuteness, vulnerability, or soft emotional appeal. In flirting it makes a request feel shy, sweet, or hard to refuse.",
    detailedParagraphs: [
      "Pleading Face (🥺) shows glossy eyes and a small frown — the “please?” look. Unicode added it for a puppy-dog, emotionally open expression that text alone rarely captures.",
      "In requests it softens asks: hang out, forgive me, send the photo, stay a bit longer. 🥺 says “I’m asking nicely” without sounding demanding.",
      "Flirting loves 🥺 because vulnerability reads as cute. “Miss you 🥺” or “come over 🥺” feels softer than the same line with no emoji.",
      "It also marks empathy — reacting to sad news with 🥺 can mean “that hurts, I feel you.” Tone stays gentle; it is not the loud despair of 😭.",
    ],
    textingMeaning:
      "Use 🥺 when you want something, when you feel soft or sad-cute, or when you want a message to sound less blunt. It turns commands into pleas.",
    socialMeaning:
      "Captions use 🥺 for soft-launch affection, pet photos, and “don’t be mad” energy. Comments drop 🥺 under emotional or adorable clips.",
    caution:
      "Overusing 🥺 can feel manipulative — especially after you already got a no. In serious negotiations or work asks, clear words beat puppy-dog eyes.",
    examples: [
      { context: "Ask", text: "Can we get pizza tonight 🥺" },
      { context: "Flirty", text: "Come hang out 🥺" },
      { context: "Apology", text: "Please don't be mad 🥺" },
      { context: "Missing someone", text: "I miss you 🥺" },
      { context: "Pet photo", text: "Look at him 🥺" },
      { context: "Empathy", text: "That sounds exhausting 🥺" },
    ],
    contextBlocks: [
      {
        title: "🥺 from a girl or guy",
        body: "Often soft affection or a gentle ask. In a flirt chat it can mean interest; with friends it may just be cute emphasis.",
      },
      {
        title: "🥺 vs 😔",
        body: "😔 is quietly sad or disappointed. 🥺 is pleading, adorable, and more likely flirty or request-based.",
      },
      {
        title: "🥺 vs 😭",
        body: "😭 is loud emotion or meme tears. 🥺 is softer — “please” and “cute sad,” not full meltdown.",
      },
      {
        title: "Consent and boundaries",
        body: "If someone said no, repeating 🥺 can pressure them. Respect the answer; save pleading faces for light asks.",
      },
    ],
    searchIntents: [
      "pleading face emoji meaning",
      "🥺 meaning in texting",
      "🥺 from a girl",
      "pleading emoji flirty meaning",
      "what does 🥺 mean",
      "🥺 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🥺 to guilt someone after they set a boundary.",
      "Avoid in formal requests to managers or clients.",
      "Skip if the topic needs clarity (money, health, legal) — write the ask plainly.",
    ],
    faqs: [
      {
        question: "What does 🥺 mean in texting?",
        answer:
          "Soft begging, cuteness, or vulnerable emotion — “please,” “miss you,” or “that’s adorable/sad.”",
      },
      {
        question: "Is 🥺 flirty?",
        answer:
          "Often yes in crush chats. With close friends it can be purely cute without romance.",
      },
      {
        question: "What does 🥺 mean from a girl?",
        answer:
          "Usually a gentle ask or soft affection. Combined with late-night timing it can lean romantic.",
      },
      {
        question: "🥺 vs 👀?",
        answer:
          "👀 is “I’m watching / interested / spill.” 🥺 is emotional pleading or soft vibes, not curiosity alone.",
      },
      {
        question: "Can 🥺 be annoying?",
        answer:
          "Yes if it replaces a clear request or pressures someone. One 🥺 is sweet; a campaign of 🥺 is pushy.",
      },
    ],
  },

  "smiling-face-with-heart-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Heart Eyes Emoji Meaning: Love, Crushes, Compliments, and Reactions",
    snippetAnswer:
      "😍 Heart Eyes means love, admiration, attraction, or strong delight. Use it for crushes, compliments, cute photos, food, outfits, and anything you adore.",
    detailedParagraphs: [
      "Smiling Face with Heart-Eyes (😍) replaces normal eyes with hearts — Unicode’s icon for adoration. It is louder than a polite smile and clearer than a vague “nice.”",
      "Crush and compliment culture run on 😍. Selfies, outfits, pets, sunsets, and plated desserts all get heart-eyes when someone is genuinely into what they see.",
      "Unlike ❤️, which can mean “I love you,” 😍 often means “I love this” — the thing, the look, the moment. You can 😍 a pizza without confessing romance.",
      "Stacked 😍😍 intensifies the reaction. Pairing with words (“you look amazing 😍”) keeps compliments from feeling lazy in important conversations.",
    ],
    textingMeaning:
      "Reply with 😍 when a photo or news makes you melt — attraction, cuteness, or pure enthusiasm. It is a high-energy yes to whatever was shared.",
    socialMeaning:
      "Comments and story replies use 😍 as visual applause. Influencers and brands lean on it for beauty, travel, and product “obsessed” energy.",
    caution:
      "Heart-eyes on a coworker’s photo can feel too personal. On sensitive body or medical posts, prefer supportive words over thirst-adjacent reactions.",
    examples: [
      { context: "Crush", text: "You look incredible 😍" },
      { context: "Food", text: "That cake 😍" },
      { context: "Travel", text: "This view 😍" },
      { context: "Pet", text: "Baby 😍" },
      { context: "Outfit", text: "The dress 😍" },
      { context: "Friend photo", text: "Obsessed with this pic 😍" },
    ],
    contextBlocks: [
      {
        title: "😍 vs 🥰",
        body: "🥰 (smiling face with hearts) feels warm, loved, and soft. 😍 is more “I’m staring because I love how this looks” — stronger visual crush energy.",
      },
      {
        title: "😍 vs ❤️",
        body: "❤️ can mean love for a person. 😍 usually means delight at what you see. Both appear in romance; 😍 is the reaction emoji.",
      },
      {
        title: "From a girl or guy",
        body: "Often attraction or strong compliment. In friend groups it can still mean “this is adorable” with no romance attached.",
      },
      {
        title: "Brand and fandom use",
        body: "Fans spam 😍 under comebacks, trailers, and merch drops. It signals obsession more than polite interest.",
      },
    ],
    searchIntents: [
      "heart eyes emoji meaning",
      "😍 meaning from a girl",
      "😍 meaning in texting",
      "heart eyes vs smiling face with hearts",
      "what does 😍 mean",
      "😍 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid 😍 on professional headshots in formal workplaces.",
      "Do not use thirst-style 😍 under posts about grief or illness.",
      "Skip if you only mean mild approval — 👍 or 😊 may fit better.",
    ],
    faqs: [
      {
        question: "What does 😍 mean in texting?",
        answer:
          "Adoration — you love how someone or something looks, sounds, or feels in that moment.",
      },
      {
        question: "What does 😍 mean from a girl?",
        answer:
          "Strong liking or attraction to you or your photo. With friends it may just mean she finds the content adorable.",
      },
      {
        question: "😍 vs 🥰?",
        answer:
          "😍 = heart eyes at something delightful. 🥰 = feeling loved/affectionate. Crush photos often get 😍; cozy love notes often get 🥰.",
      },
      {
        question: "Is 😍 only romantic?",
        answer:
          "No — food, travel, pets, and art get 😍 constantly. Romance is common but not required.",
      },
      {
        question: "Can 😍 be too much?",
        answer:
          "On a first message to a stranger it can feel intense. Match the other person’s energy.",
      },
    ],
  },

  "thinking-face": {
    batchId: BATCH_ID,
    searchTitle: "Thinking Face Emoji Meaning: Questioning, Doubt, Suspicion, or Curiosity",
    snippetAnswer:
      "🤔 Thinking Face means curiosity, doubt, suspicion, or “I’m considering this.” It can be sincere, sarcastic, or skeptical depending on the message.",
    detailedParagraphs: [
      "Thinking Face (🤔) shows a raised brow and hand on chin — the classic “hmm” pose. Unicode framed it for pondering; the internet turned it into a multipurpose side-eye.",
      "Sincere uses are simple: you are deciding, researching, or asking a real question. “Not sure yet 🤔” buys time without ghosting.",
      "Sarcastic uses are louder. “Interesting 🤔” after a shaky excuse signals disbelief. Memes paste 🤔 on conspiracy jokes and fake-deep takes.",
      "Because tone splits so hard, words matter. If you only mean curiosity, add the question. If you mean shade, know that 🤔 alone can start an argument.",
    ],
    textingMeaning:
      "Send 🤔 when you are unsure, suspicious, or playfully judging a take. It replaces “hmm,” “idk,” or “explain?” in short replies.",
    socialMeaning:
      "Comments use 🤔 under theories, plot holes, and spicy opinions. Creators add it to captions that invite debate (“is this weird 🤔”).",
    caution:
      "A lone 🤔 under someone’s vulnerable post can feel mocking. In work threads, prefer “I have a question” over ambiguous thinking faces.",
    examples: [
      { context: "Deciding", text: "Not sure which one to pick 🤔" },
      { context: "Doubt", text: "He said he was busy 🤔" },
      { context: "Curious", text: "How does that even work 🤔" },
      { context: "Sarcastic", text: "Sure, totally believable 🤔" },
      { context: "Group chat", text: "Do we trust this plan 🤔" },
      { context: "Caption", text: "Am I overthinking this 🤔" },
    ],
    contextBlocks: [
      {
        title: "Sincere curiosity",
        body: "With a real question, 🤔 softens the ask — you are thinking with the other person, not attacking them.",
      },
      {
        title: "Sarcasm and side-eye",
        body: "After contradictions or excuses, 🤔 reads as “I don’t buy it.” Add humor carefully; some people only hear accusation.",
      },
      {
        title: "🤔 vs 🤨",
        body: "🤨 (raised eyebrow) is sharper skepticism. 🤔 is broader — thinking, wondering, or doubting.",
      },
      {
        title: "From a guy or girl",
        body: "Same emoji, same split. In flirt chats “hmm 🤔” can mean intrigue; in conflict it can mean distrust.",
      },
    ],
    searchIntents: [
      "thinking emoji meaning",
      "🤔 meaning in texting",
      "thinking face sarcastic meaning",
      "🤔 from a guy",
      "what does 🤔 mean",
      "🤔 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not reply with only 🤔 when someone shares painful news.",
      "Avoid as a first reaction to identity, politics, or trauma posts.",
      "Skip in formal approval threads where ambiguity creates risk.",
    ],
    faqs: [
      {
        question: "What does 🤔 mean in texting?",
        answer:
          "You are thinking, unsure, or skeptical. Sincere or sarcastic — the surrounding text decides.",
      },
      {
        question: "Is 🤔 rude?",
        answer:
          "It can be. Alone after someone’s explanation it often feels like disbelief. Soften with a clear question.",
      },
      {
        question: "What does 🤔 mean from a guy?",
        answer:
          "Usually the same range: curiosity or doubt. In dating chats it may mean he is weighing something you said.",
      },
      {
        question: "🤔 vs 😶?",
        answer:
          "😶 is speechless or blank. 🤔 is active evaluation — brain on, not frozen.",
      },
      {
        question: "Can 🤔 be funny?",
        answer:
          "Yes in meme culture — fake-deep captions and conspiracy jokes thrive on 🤔.",
      },
    ],
  },

  "thumbs-up": {
    batchId: BATCH_ID,
    searchTitle: "Thumbs Up Emoji Meaning: Approval, OK, or Passive-Aggressive?",
    snippetAnswer:
      "👍 Thumbs Up usually means approval, agreement, or “OK.” In some work chats or Gen Z texting, a lone 👍 can feel blunt or passive-aggressive.",
    detailedParagraphs: [
      "Thumbs Up (👍) is one of the most universal approval gestures online — confirming plans, praising work, or closing a thread without a paragraph.",
      "In friendly chats it means “sounds good,” “got it,” or “nice.” Facebook made 👍 famous as Like; iMessage and WhatsApp still treat it as agreement.",
      "Gen Z nuance matters: after a long emotional message, a single 👍 can feel curt — like you are dismissing the conversation. Add a word when the topic is sensitive.",
      "International note: in some regions the physical thumbs-up gesture is offensive. Know your audience for cross-border client chats.",
    ],
    textingMeaning:
      "Use 👍 to confirm plans, acknowledge receipt, or approve something quickly. For emotional topics, pair it with a short sentence.",
    socialMeaning:
      "Reactions and comments use 👍 for low-key agreement when ❤️ or 🔥 would feel too strong. Useful in group polls and logistical threads.",
    caution:
      "Lone 👍 after bad news or a vulnerable share can read cold. Offensive in some cultures — avoid with unknown international contacts.",
    examples: [
      { context: "Plans", text: "See you at 7 👍" },
      { context: "Work", text: "LGTM 👍" },
      { context: "Ack", text: "Got it 👍" },
      { context: "Praise", text: "Great job 👍" },
      { context: "Soft close", text: "Thanks for the update — I'll review tonight 👍" },
      { context: "Group", text: "I'm in 👍" },
    ],
    contextBlocks: [
      {
        title: "Passive-aggressive reading",
        body: "Some younger users treat lone 👍 as dismissive. If someone poured their heart out, reply with words first.",
      },
      {
        title: "Work Slack and email",
        body: "Internally, 👍 is normal for quick OK. With clients, add “approved” or “received” for important confirmations.",
      },
      {
        title: "👍 vs 👎",
        body: "👎 is explicit disapproval. 👍 is approval or acknowledgment — not a detailed review.",
      },
      {
        title: "👍 vs ✅",
        body: "✅ often marks a completed task. 👍 marks human agreement. Both appear in checklists and project chats.",
      },
    ],
    searchIntents: [
      "thumbs up emoji meaning",
      "👍 passive aggressive",
      "thumbs up meaning at work",
      "👍 meaning in texting",
      "is thumbs up rude",
      "👍 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer emotional disclosures with only 👍.",
      "Avoid with contacts in cultures where thumbs-up is rude.",
      "Skip as the only feedback on creative work someone cares about — add a note.",
    ],
    faqs: [
      {
        question: "Is 👍 rude?",
        answer:
          "Usually no — but alone after a long or emotional message it can feel curt to some people.",
      },
      {
        question: "What does 👍 mean at work?",
        answer:
          "Approval or “got it.” Fine internally; for big decisions, write the confirmation in words too.",
      },
      {
        question: "Why do people say 👍 is passive-aggressive?",
        answer:
          "Because it can end a conversation without warmth. Intent may be neutral; reception depends on the relationship.",
      },
      {
        question: "👍 vs 👌?",
        answer:
          "👌 can mean OK or “perfect,” but also carries unrelated meme meanings. 👍 is the clearer approval default.",
      },
      {
        question: "Can I use 👍 with my boss?",
        answer:
          "If your workplace is emoji-friendly, yes for quick acks. For raises, conflict, or formal approvals, use full sentences.",
      },
    ],
  },

  "folded-hands": {
    batchId: BATCH_ID,
    searchTitle: "Folded Hands Emoji Meaning: Prayer, Thanks, Please, or High Five?",
    snippetAnswer:
      "🙏 Folded Hands most often means prayer, thanks, please, hope, or gratitude. Some people use it as a high five, but context usually decides the meaning.",
    detailedParagraphs: [
      "Folded Hands (🙏) shows two hands pressed together. Unicode links it to prayer and please; real-world texting stretched it to thanks, hope, apology, and respect.",
      "English chats often use 🙏 for “thank you,” “please,” or “sending prayers” after hard news. Tone can be spiritual or purely polite — belief is optional.",
      "In Japan and some East Asian contexts, similar gestures can signal apology or request. Travelers should not assume every 🙏 is church-coded.",
      "High-five readings exist in some friend groups, but they are less common than thanks/prayer. If you mean a literal high five, words help (“high five 🙏” vs “praying for you 🙏”).",
    ],
    textingMeaning:
      "Send 🙏 for thanks, earnest please, hope, or solidarity. It softens asks and warm closings: “Appreciate you 🙏.”",
    socialMeaning:
      "Captions use 🙏 for gratitude posts, giveaways, and memorial tributes. Comments drop 🙏 under recovery stories and hard announcements.",
    caution:
      "After tragedy, empty 🙏 spam can feel performative. In interfaith or secular spaces, clarify if you mean thanks vs religious prayer.",
    examples: [
      { context: "Thanks", text: "Thanks so much 🙏" },
      { context: "Please", text: "Please help me with this 🙏" },
      { context: "Hope", text: "Hoping it works out 🙏" },
      { context: "Support", text: "Praying for your family 🙏" },
      { context: "Apology", text: "Sorry for the delay 🙏" },
      { context: "Gratitude post", text: "Grateful for this community 🙏" },
    ],
    contextBlocks: [
      {
        title: "Prayer vs thanks",
        body: "“Thank you 🙏” is everyday gratitude. “Praying for you 🙏” leans spiritual. Match the recipient’s comfort with religious language.",
      },
      {
        title: "High five myth",
        body: "Some users insist 🙏 is a high five. Most English threads still read thanks/please/prayer first — clarify if needed.",
      },
      {
        title: "🙏 vs 🤲",
        body: "🤲 (palms up together) can mean offering or receiving. 🙏 remains the default please/thanks/prayer hands.",
      },
      {
        title: "Work and clients",
        body: "🙏 works for polite thanks in casual industries. In formal legal or medical mail, write gratitude in words.",
      },
    ],
    searchIntents: [
      "folded hands emoji meaning",
      "🙏 meaning",
      "prayer hands emoji",
      "🙏 high five meaning",
      "🙏 meaning in texting",
      "🙏 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not spam 🙏 under every tragedy post without a personal message.",
      "Avoid assuming religious comfort — some people prefer “thinking of you.”",
      "Skip in cold professional outreach where emoji feels unearned.",
    ],
    faqs: [
      {
        question: "What does 🙏 mean in texting?",
        answer:
          "Usually thanks, please, hope, or prayer. Relationship and wording decide which reading fits.",
      },
      {
        question: "Is 🙏 a high five?",
        answer:
          "Sometimes in niche usage, but most people still read prayer/thanks/please. Say “high five” if that is what you mean.",
      },
      {
        question: "Is 🙏 religious?",
        answer:
          "It can be — and it often is not. Plenty of secular thanks messages use 🙏 with zero spiritual intent.",
      },
      {
        question: "🙏 vs ❤️ for support?",
        answer:
          "❤️ is warmth/love. 🙏 is gratitude, plea, or solidarity. Both appear in support threads; 🙏 fits “please heal / thank you for help.”",
      },
      {
        question: "Can I use 🙏 at work?",
        answer:
          "Yes for casual thanks among teammates who use emoji. Prefer full sentences with executives and external legal threads.",
      },
    ],
  },
};
