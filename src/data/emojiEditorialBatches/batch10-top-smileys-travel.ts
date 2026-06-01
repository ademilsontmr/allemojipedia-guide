import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "10-top-smileys-travel";

export const batch10TopSmileysTravel: Record<string, EmojiBatchEnrichment> = {
  "smiling-face": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face Emoji (☺️) Meaning: Warm, Shy, and Old-School Texting",
    snippetAnswer:
      "☺️ Smiling Face is a gentle, slightly old-school happy emoji — softer than 😊 and less loud than 😁. It reads warm, shy, or politely pleased in texts, bios, and nostalgic posts.",
    detailedParagraphs: [
      "Smiling Face (☺️) is one of the original emoji designs — a simple closed smile without big teeth. Unicode kept it as a classic symbol of mild happiness, approval, or friendly tone.",
      "In texting, ☺️ feels softer than 😊 or 😀. People send it when they want warmth without sounding over-the-top: thanking someone, agreeing gently, or ending a sweet message.",
      "Because it looks vintage on some platforms, ☺️ also tags nostalgic content — throwback photos, old songs, or 'remember when' threads. Gen Z sometimes uses it ironically for wholesome vibes.",
      "Do not assume ☺️ is romantic by itself. Context decides: ☺️ after 'goodnight' can feel flirty; ☺️ after 'thanks for the file' is simply polite.",
    ],
    textingMeaning:
      "☺️ often closes a kind message — 'Sounds good ☺️', 'Thank you ☺️'. It is less intense than heart emojis and less loud than 😂.",
    socialMeaning:
      "On Instagram and Pinterest-style feeds, ☺️ tags aesthetic, cozy, or soft content. Commenters use it for wholesome compliments.",
    caution:
      "☺️ can feel dismissive if someone shares bad news — add words of support. On some Android skins it renders smaller and easy to miss.",
    examples: [
      { context: "Thanks", text: "Really appreciate you ☺️" },
      { context: "Goodnight", text: "Sleep well ☺️" },
      { context: "Agreement", text: "That works for me ☺️" },
      { context: "Compliment", text: "You look great in that photo ☺️" },
      { context: "Nostalgia", text: "Throwback vibes ☺️" },
    ],
    contextBlocks: [
      {
        title: "Soft tone in DMs",
        body: "☺️ helps when you want to sound friendly but not flirty or hyped. Common in older relatives' messages and polite coworker chats.",
      },
      {
        title: "Vintage aesthetic",
        body: "Creators pair ☺️ with film grain filters and retro fonts. The emoji itself signals 'gentle' more than 'party'.",
      },
      {
        title: "Compared to 😊",
        body: "😊 shows open eyes and reads more modern and visible. ☺️ is subtler — pick ☺️ when you want understated warmth.",
      },
    ],
    searchIntents: [
      "smiling face emoji meaning",
      "☺️ meaning in texting",
      "☺️ vs 😊",
      "white smiling face emoji",
      "smiling face emoji copy paste",
    ],
    whenNotToUse: [
      "Avoid ☺️ alone when someone shares grief or stress — it can read as brushing them off.",
      "Do not use ☺️ in formal legal or HR messages.",
    ],
    faqs: [
      {
        question: "What does ☺️ mean in texting?",
        answer:
          "Usually mild happiness, thanks, or a sweet goodbye. It is softer than big-grin emojis and less romantic than hearts unless the chat is already flirty.",
      },
      {
        question: "Is ☺️ the same as 😊?",
        answer:
          "Both are positive, but ☺️ is subtler and more old-school. 😊 is bolder and easier to see on small screens.",
      },
      {
        question: "Why does ☺️ look different on iPhone vs Android?",
        answer:
          "Vendors style Unicode differently. The emotion stays 'gentle smile' — add words if your tone must be precise.",
      },
    ],
  },

  "kissing-face": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face Emoji (😗) Meaning: Kiss, Flirt, and Goodbye",
    snippetAnswer:
      "😗 Kissing Face shows a small kiss — affection, blown kisses, or playful flirt. It is less intense than 😘 and common in dating chats, goodnights, and sweet reactions.",
    detailedParagraphs: [
      "Kissing Face (😗) puckers the lips toward the viewer — Unicode's neutral kissing face before variants added hearts or closed eyes.",
      "In texting, 😗 often means 'kiss' literally: goodnight messages, anniversary notes, or thanking someone you care about. Friends use it platonically in close groups.",
      "On social media, 😗 tags couple content lightly — not always romantic. Beauty and skincare creators sometimes use it for 'kissable lips' jokes.",
      "Tone scales with relationship: 😗 from a crush feels flirty; 😗 from a parent feels affectionate. One emoji rarely carries the whole story.",
    ],
    textingMeaning:
      "Send 😗 when you would air-kiss in person — goodbye, love you, or 'that was sweet'. Pair with words if platonic vs romantic matters.",
    socialMeaning:
      "Captions about dates, weddings, or Valentine's posts use 😗 as a light affection marker without full ❤️ energy.",
    caution:
      "😗 can misread as romantic in professional chats. Skip with clients unless they use kiss emojis first.",
    examples: [
      { context: "Goodnight", text: "Night night 😗" },
      { context: "Thanks", text: "You're the best 😗" },
      { context: "Date", text: "See you soon 😗" },
      { context: "Sweet", text: "That was so kind 😗" },
      { context: "Family", text: "Love you mum 😗" },
    ],
    contextBlocks: [
      { title: "Dating apps", body: "😗 is a step below 😘 — flirty but not overwhelming. Many use it after a good first date message." },
      { title: "Platonic friends", body: "Close friend groups send 😗 ironically or warmly. Context from years of friendship prevents misreads." },
      { title: "Compared to 😘", body: "😘 adds a heart and feels more romantic. 😗 is the lighter blown-kiss option." },
    ],
    searchIntents: ["kissing face emoji meaning", "😗 meaning in texting", "😗 vs 😘", "kissing face copy paste"],
    whenNotToUse: ["Avoid 😗 with coworkers you do not know well.", "Do not send 😗 when rejecting someone — mixed signals."],
    faqs: [
      { question: "What does 😗 mean from a girl or guy?", answer: "Often affection or flirt — check whether you already have romantic context. It is not a marriage proposal on its own." },
      { question: "Is 😗 romantic?", answer: "It can be, but close friends and family use it warmly too. The words around it matter most." },
    ],
  },

  "kissing-face-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face With Smiling Eyes (😙) Meaning in Texting",
    snippetAnswer:
      "😙 Kissing Face With Smiling Eyes blends a kiss with a happy squint — warm affection, gratitude, or playful love. It feels friendlier and less intense than 😘.",
    detailedParagraphs: [
      "This emoji (😙) shows puckered lips plus smiling eyes — Unicode's way of combining kiss and joy. It reads sincere and soft, not dramatic.",
      "Texters use 😙 for grateful affection: 'thanks for helping me move 😙' or cute goodbyes between partners and close friends.",
      "Because the eyes smile, 😙 rarely looks angry or sarcastic. It is a safe pick when you want sweetness without heart-eye intensity.",
      "On TikTok comments, 😙 sometimes reacts to wholesome couple or pet content — affection without words.",
    ],
    textingMeaning:
      "😙 signals happy affection — you are pleased with someone and sending a virtual kiss. Less flirty than 😍, warmer than plain 😊.",
    socialMeaning:
      "Relationship and friendship posts use 😙 in captions celebrating small moments — anniversaries, reunions, or 'miss you' notes.",
    caution:
      "Still affectionate — avoid with professional contacts. Do not use 😙 to apologize for something serious without actual words.",
    examples: [
      { context: "Gratitude", text: "You saved me today 😙" },
      { context: "Missing someone", text: "Wish you were here 😙" },
      { context: "Congrats", text: "So happy for you two 😙" },
      { context: "Goodbye", text: "Drive safe 😙" },
      { context: "Sweet joke", text: "Stop being cute 😙" },
    ],
    contextBlocks: [
      { title: "Long-distance couples", body: "😙 is a staple in nightly texts when hugs are not possible — visual kiss plus warmth." },
      { title: "Friend appreciation", body: "Platonic 'love you' energy between best friends often uses 😙 instead of ❤️." },
      { title: "Vs 😚", body: "😚 closes the eyes more — slightly more intimate. 😙 keeps a visible happy eye crinkle." },
    ],
    searchIntents: ["😙 emoji meaning", "kissing face smiling eyes", "😙 in texting", "😙 vs 😘"],
    whenNotToUse: ["Skip in job interviews or formal email.", "Avoid when someone is upset — affection emojis can feel dismissive."],
    faqs: [
      { question: "What does 😙 mean in texting?", answer: "Warm kiss energy — gratitude, love, or playful affection with a happy tone." },
      { question: "😙 vs 😘 — which is stronger?", answer: "😘 with the heart is usually more romantic. 😙 is softer happy-affection." },
    ],
  },

  "kissing-face-with-closed-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face With Closed Eyes (😚) Meaning: Sweet Kiss Text",
    snippetAnswer:
      "😚 Kissing Face With Closed Eyes is a tender blown kiss — common in goodnight texts, 'miss you' notes, and affectionate replies. Closed eyes signal sincerity more than joke.",
    detailedParagraphs: [
      "Kissing Face With Closed Eyes (😚) shows lips puckered and eyes shut — like leaning in for a real kiss. Unicode groups it with affection faces.",
      "People choose 😚 when the moment feels intimate or sincere: signing off a call with a partner, thanking a spouse, or telling family you love them.",
      "It is less meme-heavy than 😘 but more affectionate than 😗. Closed eyes reduce 'ironic kiss' readings in many chats.",
      "Beauty and romance niches on Instagram use 😚 in captions for soft aesthetic posts — candles, dates, and slow-living content.",
    ],
    textingMeaning:
      "😚 closes emotional messages — 'love you 😚', 'goodnight 😚'. The closed eyes imply you mean it.",
    socialMeaning:
      "Couple photographers and wedding tags use 😚 for understated romance without flashy heart eyes.",
    caution:
      "Highly affectionate — misread risk in mixed-gender work chats. Do not use 😚 to manipulate guilt ('fine 😚' passive aggression).",
    examples: [
      { context: "Goodnight", text: "Sweet dreams 😚" },
      { context: "Love", text: "Love you always 😚" },
      { context: "Reunion", text: "Can't wait to hug you 😚" },
      { context: "Thanks", text: "You're amazing 😚" },
      { context: "Anniversary", text: "Five years 😚" },
    ],
    contextBlocks: [
      { title: "Goodnight ritual", body: "Partners often end the day with 😚 — a consistent signal that the chat is safe and loving." },
      { title: "Sincerity cue", body: "Closed eyes differentiate 😚 from ironic kisses. Recipients read it as genuine more often than 😗." },
      { title: "Vs 😘", body: "😘 adds a visible heart — more playful flirt. 😚 is quiet tenderness." },
    ],
    searchIntents: ["😚 emoji meaning", "kissing face closed eyes", "😚 goodnight text", "😚 copy paste"],
    whenNotToUse: ["Avoid with strangers online.", "Do not use during arguments — it can feel manipulative."],
    faqs: [
      { question: "What does 😚 mean from a crush?", answer: "Likely romantic interest or strong affection — especially with goodnight or 'miss you' context." },
      { question: "Is 😚 appropriate for friends?", answer: "Yes in very close friendships; otherwise it may read as flirtation." },
    ],
  },

  "clown-face": {
    batchId: BATCH_ID,
    searchTitle: "Clown Face Emoji (🤡) Meaning: Joke, Roast, and Self-Own",
    snippetAnswer:
      "🤡 Clown Face calls someone (or yourself) clownish — foolish behavior, bad takes, or ironic self-roast. It is meme-heavy and rarely literal circus talk.",
    detailedParagraphs: [
      "Clown Face (🤡) exploded in internet culture as shorthand for 'I'm a clown' or 'you're clowning' — admitting a mistake or mocking a bad decision.",
      "In group chats, 🤡 follows stories of texting an ex, missing a flight, or believing obvious bait. It softens embarrassment through humor.",
      "On X and TikTok, 🤡 reacts to political hot takes, bad fashion, or failed predictions. Tone is usually sarcastic, not a threat.",
      "Some people find 🤡 harsh. Use it with friends who appreciate roast humor — not in sensitive mental-health threads.",
    ],
    textingMeaning:
      "Self-own: 'I stayed up till 3am again 🤡'. Roast: 'You thought that would work 🤡'. Rarely means literal birthday clown.",
    socialMeaning:
      "Comment sections spam 🤡 when someone embarrasses themselves publicly — viral fails and 'main character' moments.",
    caution:
      "🤡 can bully if aimed at vulnerable people. Never use it in workplace harassment. Halloween posts are the exception for literal clowns.",
    examples: [
      { context: "Self-roast", text: "I believed him again 🤡" },
      { context: "React", text: "That take 🤡" },
      { context: "Fail", text: "Forgot my wallet 🤡" },
      { context: "Meme", text: "Circus is in town 🤡" },
      { context: "Irony", text: "Genius move 🤡" },
    ],
    contextBlocks: [
      { title: "'I'm clowning' meme", body: "🤡 admits you played yourself — buying unnecessary sale items, double-texting, etc." },
      { title: "Roast culture", body: "Friends roast with 🤡 when trust is high. Without that trust, it stings." },
      { title: "Halloween literal use", body: "October posts about costumes may use 🤡 sincerely — read caption context." },
    ],
    searchIntents: ["clown emoji meaning", "🤡 meaning in texting", "clown emoji insult", "🤡 meme"],
    whenNotToUse: ["Do not call strangers clowns in heated arguments.", "Avoid in professional Slack with senior leadership."],
    faqs: [
      { question: "Is 🤡 an insult?", answer: "Often yes — it mocks foolishness. Among friends it can be playful; context decides." },
      { question: "What does 🤡 mean on TikTok?", answer: "Usually sarcasm or 'bad take' reactions — not literal clowns." },
    ],
  },

  ghost: {
    batchId: BATCH_ID,
    searchTitle: "Ghost Emoji (👻) Meaning: Boo, Snapchat, and Ghosting",
    snippetAnswer:
      "👻 Ghost means spooky fun, Halloween, or 'boo' — but in dating slang it also nods to ghosting (disappearing). Snapchat made 👻 iconic for its app brand.",
    detailedParagraphs: [
      "Ghost (👻) is Unicode's white cartoon spirit — tongue out on some platforms for playful spook, not horror.",
      "Snapchat users associate 👻 with the app's ghost logo and streak culture. 'Add my snap 👻' still appears in bios worldwide.",
      "Dating slang borrowed 'ghosting' — vanishing without reply. 👻 in a dating chat might joke about that behavior ironically or warn 'don't ghost me 👻'.",
      "October content — haunted houses, costumes, pumpkin patches — uses 👻 literally. Off-season, it is usually humor or Snapchat reference.",
    ],
    textingMeaning:
      "Playful scare: 'Boo 👻'. Snapchat handle hint. Irony about disappearing: 'You ghosted 👻'.",
    socialMeaning:
      "Halloween reels, spooky season playlists, and haunted café posts lead with 👻 in captions.",
    caution:
      "Accusing someone of ghosting with 👻 can escalate tension — use carefully in fragile dating chats.",
    examples: [
      { context: "Halloween", text: "Spooky season starts 👻" },
      { context: "Snapchat", text: "Add me 👻 username" },
      { context: "Joke scare", text: "Boo 👻" },
      { context: "Dating joke", text: "Don't ghost 👻" },
      { context: "Costume", text: "Sheet ghost costume 👻" },
    ],
    contextBlocks: [
      { title: "Snapchat culture", body: "👻 remains linked to Snap streaks and teen social graphs even outside the app." },
      { title: "Ghosting slang", body: "Modern dating vocabulary turned 'ghost' into a verb — 👻 visualizes that idea." },
      { title: "Wholesome spooky", body: "Family Halloween posts use 👻 for cute-scary, not genuine fright." },
    ],
    searchIntents: ["ghost emoji meaning", "👻 snapchat", "ghost emoji ghosting", "👻 copy paste"],
    whenNotToUse: ["Avoid mocking someone grieving a death with 👻.", "Do not use 👻 in serious HR complaints about being ignored."],
    faqs: [
      { question: "Why is 👻 linked to Snapchat?", answer: "Snapchat's logo is a ghost — users adopted 👻 as shorthand for their Snap identity." },
      { question: "Does 👻 mean ghosting?", answer: "Sometimes in dating contexts — but also Halloween and jokes. Read the thread." },
    ],
  },

  "exploding-head": {
    batchId: BATCH_ID,
    searchTitle: "Exploding Head Emoji (🤯) Meaning: Mind Blown Reactions",
    snippetAnswer:
      "🤯 Exploding Head means mind blown — shock, disbelief, or overwhelming info. Common when news is crazy, plots twist, or stats surprise you.",
    detailedParagraphs: [
      "Exploding Head (🤯) depicts a head bursting with shock — Unicode's dramatic 'I cannot process this' face.",
      "Reaction comments use 🤯 for plot twists, sports upsets, and unbelievable sale prices. It is hyperbolic, not literal distress.",
      "Work chats use 🤯 when deadlines stack or a launch exceeds expectations — '500 signups in an hour 🤯'.",
      "Pair with words in serious news threads so 🤯 does not look like you trivialize tragedy.",
    ],
    textingMeaning:
      "'No way 🤯' after surprising gossip. '🤯' alone when a meme breaks your brain.",
    socialMeaning:
      "YouTube thumbnails and TikTok titles use 🤯 for shock-content — life hacks, facts, and drama recaps.",
    caution:
      "After real disasters or personal trauma shared in chat, 🤯 looks insensitive — respond with empathy instead.",
    examples: [
      { context: "Shock", text: "They actually did it 🤯" },
      { context: "Plot twist", text: "Episode 6 🤯" },
      { context: "Stats", text: "1M views overnight 🤯" },
      { context: "Price", text: "That cheap?? 🤯" },
      { context: "News", text: "Wild headline 🤯" },
    ],
    contextBlocks: [
      { title: "Hyperbole culture", body: "🤯 exaggerates surprise — recipients know you are amplifying, not reporting injury." },
      { title: "Content hooks", body: "Creators put 🤯 in titles to promise surprising information." },
      { title: "Vs 😱", body: "😱 is fear/scream energy. 🤯 is cognitive overload — 'too much to think'." },
    ],
    searchIntents: ["exploding head emoji meaning", "🤯 mind blown", "🤯 in texting", "mind blown emoji"],
    whenNotToUse: ["Avoid when someone shares personal tragedy.", "Skip in formal executive summaries."],
    faqs: [
      { question: "What does 🤯 mean in texting?", answer: "Overwhelming surprise or disbelief — the 'mind blown' meme in one emoji." },
      { question: "Is 🤯 positive or negative?", answer: "Usually neutral hype — can be good shock (amazing news) or bad shock (drama)." },
    ],
  },

  "partying-face": {
    batchId: BATCH_ID,
    searchTitle: "Partying Face Emoji (🥳) Meaning: Celebrate and Party Time",
    snippetAnswer:
      "🥳 Partying Face is pure celebration — birthdays, promotions, Friday energy, and 'we did it' moments. The party hat and horn signal hype, not sarcasm.",
    detailedParagraphs: [
      "Partying Face (🥳) combines a big grin with party hat and blower — Unicode's dedicated celebration emoji.",
      "Texters drop 🥳 for birthdays, graduations, new jobs, and team wins. It is louder than 🎉 alone because the face adds human excitement.",
      "Friday messages and holiday countdowns use 🥳 — 'long weekend 🥳'. Offices with emoji culture send it in Slack for milestones.",
      "Unlike 🥂, 🥳 is informal and all-ages — fine for family birthday threads.",
    ],
    textingMeaning:
      "Congratulations and hype: 'You got the role 🥳', 'It's Friday 🥳'.",
    socialMeaning:
      "Birthday Instagram stories, New Year's posts, and graduation car photos tag 🥳 in captions.",
    caution:
      "🥳 after someone shares bad news is tone-deaf. Do not use in sympathy messages.",
    examples: [
      { context: "Birthday", text: "Happy birthday!! 🥳" },
      { context: "Promotion", text: "YOU DID IT 🥳" },
      { context: "Friday", text: "Weekend mode 🥳" },
      { context: "Team win", text: "Champions 🥳" },
      { context: "Launch", text: "We shipped 🥳" },
    ],
    contextBlocks: [
      { title: "Birthday default", body: "🥳 is replacing plain 🎂 in many chats because it feels more energetic." },
      { title: "Work milestones", body: "Startups celebrate funding or launches with 🥳 in team channels." },
      { title: "Vs 🎉", body: "🎉 is confetti without a face. 🥳 adds personal excitement — 'I am celebrating with you'." },
    ],
    searchIntents: ["partying face emoji", "🥳 meaning", "celebration emoji", "🥳 birthday"],
    whenNotToUse: ["Never for condolences.", "Avoid when layoffs or bad company news break."],
    faqs: [
      { question: "What does 🥳 mean?", answer: "Celebration and party energy — birthdays, wins, and hype moments." },
      { question: "🥳 vs 🎉?", answer: "Both celebrate; 🥳 feels more personal and expressive with the face." },
    ],
  },

  "smiling-face-with-sunglasses": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face With Sunglasses (😎) Meaning: Cool, Confident, Smug",
    snippetAnswer:
      "😎 Smiling Face With Sunglasses signals confidence, coolness, or smug satisfaction — 'I nailed it', summer vibes, or ironic boss energy.",
    detailedParagraphs: [
      "This emoji (😎) pairs a smile with dark shades — Unicode's 'cool face'. It channels movie-hero confidence more than fashion advice.",
      "Texters send 😎 after wins: exams passed, stylish outfit, or witty comeback. It can read smug if overused.",
      "Summer travel posts — beaches, pools, road trips — literally tag 😎 for sunshine and leisure.",
      "Meme culture uses 😎 unironically for 'deal with it' GIF energy and ironically for awkward brags.",
    ],
    textingMeaning:
      "'Handled it 😎'. 'Too cool 😎' after a flex. Less romantic, more swagger.",
    socialMeaning:
      "Fit checks, car photos, and sunset flex posts use 😎 in captions. DJs and music pages adopt it for vibe.",
    caution:
      "😎 after someone else's failure looks arrogant. Sensitive topics need words, not shades.",
    examples: [
      { context: "Win", text: "Exam done 😎" },
      { context: "Flex", text: "New wheels 😎" },
      { context: "Comeback", text: "As I said 😎" },
      { context: "Vacation", text: "Island mode 😎" },
      { context: "Joke swagger", text: "Main character 😎" },
    ],
    contextBlocks: [
      { title: "Confidence shorthand", body: "😎 tells friends you are unbothered or proud — context shows if it is joke swagger." },
      { title: "Summer literal", body: "Beach holidays genuinely use 😎 for sun and sunglasses — not always metaphor." },
      { title: "Vs 🕶️", body: "🕶️ is just glasses. 😎 is face + attitude." },
    ],
    searchIntents: ["😎 emoji meaning", "cool emoji sunglasses", "😎 in texting", "sunglasses face emoji"],
    whenNotToUse: ["Avoid when consoling someone.", "Skip in apology messages — looks unrepentant."],
    faqs: [
      { question: "What does 😎 mean in texting?", answer: "Cool, confident, or smug — you are pleased with yourself or the vibe." },
      { question: "Is 😎 flirty?", answer: "Sometimes low-key flirt or flex, but usually swagger not romance." },
    ],
  },

  "confused-face": {
    batchId: BATCH_ID,
    searchTitle: "Confused Face Emoji (😕) Meaning: Unsure, Huh, and Mixed Feelings",
    snippetAnswer:
      "😕 Confused Face shows uncertainty, mild disappointment, or 'wait, what?' — softer than 😵 and less sad than 😞.",
    detailedParagraphs: [
      "Confused Face (😕) has a slight frown and raised brows — Unicode's puzzled reaction without full distress.",
      "Use 😕 when plans change unexpectedly, instructions contradict, or a message confuses you. It invites clarification.",
      "In group chats, 😕 responds to vague announcements — 'Meeting moved? 😕'. It is polite confusion, not attack.",
      "Customer service threads use 😕 to express dissatisfaction gently before escalating to 😠.",
    ],
    textingMeaning:
      "'I don't follow 😕'. 'That wasn't what I expected 😕'. Ask questions after it.",
    socialMeaning:
      "Commenters use 😕 on unclear policy posts or ambiguous celebrity drama — signaling confusion publicly.",
    caution:
      "Repeated 😕 at someone can sound passive-aggressive. Explain what confused you.",
    examples: [
      { context: "Clarify", text: "Which day again? 😕" },
      { context: "Surprise", text: "Didn't see that coming 😕" },
      { context: "Mixed", text: "Not sure how I feel 😕" },
      { context: "Reply", text: "Wait what 😕" },
      { context: "Plans", text: "Thought we agreed on 7 😕" },
    ],
    contextBlocks: [
      { title: "Soft confusion", body: "😕 asks for help understanding — good for avoiding harsh confrontation." },
      { title: "Customer tone", body: "Reviews with 😕 signal mixed experiences without one-star rage." },
      { title: "Vs 😵‍💫", body: "Dizzy face is overwhelm. 😕 is simpler 'huh?'." },
    ],
    searchIntents: ["confused face emoji", "😕 meaning", "confused emoji texting", "😕 vs 😔"],
    whenNotToUse: ["Do not spam 😕 to mock someone's accent or language.", "Avoid in urgent safety instructions — be explicit."],
    faqs: [
      { question: "What does 😕 mean?", answer: "Confusion, uncertainty, or mild disappointment — 'I'm not sure about this'." },
      { question: "Is 😕 rude?", answer: "Usually not — but tone stacks if you send many without explaining." },
    ],
  },

  train: {
    batchId: BATCH_ID,
    searchTitle: "Train Emoji (🚆) Meaning: Commute, Delays, and Rail Travel",
    snippetAnswer:
      "🚆 Train marks rail travel — commutes, intercity trips, Eurail plans, and 'on my way' updates. It is practical transit talk, not metaphorical hype.",
    detailedParagraphs: [
      "Train (🚆) depicts a passenger rail car — Unicode's general train symbol for ground rail (not high-speed bullet variants).",
      "Daily commuters text 🚆 for delays, platform changes, and arrival ETAs. 'Stuck on the 🚆' is universal urban venting.",
      "Travel influencers planning European rail passes or scenic routes use 🚆 in captions with city names and dates.",
      "Unlike ✈️, 🚆 signals middle-distance or local rail — suburban lines, national networks, and metro-adjacent trips.",
    ],
    textingMeaning:
      "'On the train 🚆', 'Train delayed 20 min 🚆', 'Meet at the station 🚆'.",
    socialMeaning:
      "Travel vlogs, Japan rail content, and UK train drama threads tag 🚆 for authenticity.",
    caution:
      "During train accidents in the news, flashy vacation 🚆 posts may feel insensitive — read the room.",
    examples: [
      { context: "Commute", text: "Train delayed again 🚆" },
      { context: "Trip", text: "Interrail starts today 🚆" },
      { context: "Meetup", text: "Platform 4 🚆" },
      { context: "Arrival", text: "Just pulled in 🚆" },
      { context: "Booking", text: "Tickets confirmed 🚆" },
    ],
    contextBlocks: [
      { title: "Urban commute venting", body: "🚆 spikes during rush hour when lines fail — shared suffering in group chats." },
      { title: "Scenic rail tourism", body: "Swiss Alps and Japan shinkansen content uses 🚆 even when photos show bullet trains." },
      { title: "Vs 🚄", body: "🚄 is high-speed bullet train. 🚆 is general passenger rail." },
    ],
    searchIntents: ["train emoji meaning", "🚆 commute", "train emoji copy paste", "🚆 in texting"],
    whenNotToUse: ["Do not use 🚆 to mock transit disasters.", "Avoid confusing 🚆 with 🚂 steam train nostalgia posts."],
    faqs: [
      { question: "What does 🚆 mean in texting?", answer: "Usually literal train travel — commuting, trips, or delays." },
      { question: "🚆 vs 🚂?", answer: "🚂 is often vintage steam aesthetic. 🚆 is modern passenger rail." },
    ],
  },

  "globe-showing-americas": {
    batchId: BATCH_ID,
    searchTitle: "Globe Showing Americas (🌎) Meaning: Americas, Travel, and Location",
    snippetAnswer:
      "🌎 Globe Showing Americas highlights North and South America — travel to the Americas, US/Canada/Latin posts, and 'Western Hemisphere' context.",
    detailedParagraphs: [
      "This globe emoji (🌎) centers the American continents — Unicode offers three globes for different hemispheres.",
      "Use 🌎 when your story is Americas-specific: backpacking Latin America, US road trips, or HQ announcements for American offices.",
      "International company posts split 🌎 🌍 🌏 to show regional teams — quick visual geography for global followers.",
      "Wrong globe choice confuses readers planning travel — pair 🌎 with country names in text.",
    ],
    textingMeaning:
      "'Trip to the Americas 🌎', 'LATAM launch 🌎', 'Based in the US 🌎'.",
    socialMeaning:
      "Travel creators editing Americas montages use 🌎 in titles. NGOs post 🌎 for Western Hemisphere programs.",
    caution:
      "Do not use 🌎 as generic 'world' if you mean global — pick 🌍 or 🌐 instead.",
    examples: [
      { context: "Travel", text: "South America route 🌎" },
      { context: "Work", text: "AMER team wins 🌎" },
      { context: "Move", text: "Relocating to Canada 🌎" },
      { context: "Event", text: "Summit in NYC 🌎" },
      { context: "Study abroad", text: "Semester in Mexico 🌎" },
    ],
    contextBlocks: [
      { title: "Hemisphere pickers", body: "Unicode's three globes let you be geographically precise — 🌎 for Americas focus." },
      { title: "Business regions", body: "Corporate posts map sales regions with continent globes — faster than paragraphs." },
      { title: "Vs 🌏", body: "🌏 centers Asia-Australia. 🌎 centers the Americas." },
    ],
    searchIntents: ["globe americas emoji", "🌎 meaning", "americas globe emoji", "🌎 copy paste"],
    whenNotToUse: ["Avoid 🌎 when discussing Europe-only trips.", "Do not use as generic planet emoji for climate posts without clarity."],
    faqs: [
      { question: "What does 🌎 represent?", answer: "Earth viewed with the Americas facing forward — Western Hemisphere emphasis." },
      { question: "🌎 vs 🌍?", answer: "🌍 shows Europe-Africa centered. 🌎 shows the Americas." },
    ],
  },

  "globe-showing-europe-africa": {
    batchId: BATCH_ID,
    searchTitle: "Globe Showing Europe-Africa (🌍) Meaning: Travel and Global Posts",
    snippetAnswer:
      "🌍 Globe Showing Europe-Africa is the default 'world' emoji for many users — Europe, Africa, Middle East travel, and general global topics.",
    detailedParagraphs: [
      "Globe Showing Europe-Africa (🌍) is the most common globe in casual chat — Unicode centers Europe and Africa on the visible face.",
      "Backpackers posting Schengen trips, safaris, or Mediterranean cruises lead captions with 🌍 even when countries vary.",
      "Climate and humanitarian posts use 🌍 for planetary scale — 'save 🌍' messaging and Earth Day campaigns.",
      "When precision matters (Americas-only vs Asia-only), pick 🌎 or 🌏 instead of defaulting to 🌍.",
    ],
    textingMeaning:
      "'Europe trip 🌍', 'global launch 🌍', 'around the world 🌍'.",
    socialMeaning:
      "NGOs, travel aggregators, and study-abroad pages use 🌍 as generic international branding.",
    caution:
      "🌍 as 'whole planet' is fine rhetorically; for geography homework-level accuracy, name continents in text.",
    examples: [
      { context: "Travel", text: "Eurotrip starts 🌍" },
      { context: "Africa", text: "Safari booked 🌍" },
      { context: "Global", text: "Worldwide release 🌍" },
      { context: "Earth Day", text: "Protect 🌍" },
      { context: "Remote work", text: "Working from anywhere 🌍" },
    ],
    contextBlocks: [
      { title: "Default world symbol", body: "Many phones list 🌍 first in globe search — it became the generic 'world' emoji." },
      { title: "Climate discourse", body: "Environmental threads use 🌍 for planet-scale urgency." },
      { title: "Travel marketing", body: "Agencies use 🌍 in ads for multi-country packages centered on Europe/Africa routes." },
    ],
    searchIntents: ["globe emoji meaning", "🌍 earth emoji", "europe africa globe", "🌍 copy paste"],
    whenNotToUse: ["Avoid 🌍 when your content is strictly Americas-only — use 🌎."],
    faqs: [
      { question: "What does 🌍 mean?", answer: "Often 'world' or travel involving Europe/Africa — context narrows it." },
      { question: "Why is 🌍 most popular?", answer: "Keyboard order and design made it the default globe on many platforms." },
    ],
  },

  "globe-showing-asia-australia": {
    batchId: BATCH_ID,
    searchTitle: "Globe Showing Asia-Australia (🌏) Meaning: APAC and Travel",
    snippetAnswer:
      "🌏 Globe Showing Asia-Australia highlights Asia, Oceania, and Australia — APAC business, Southeast Asia travel, and Australia/New Zealand posts.",
    detailedParagraphs: [
      "Globe Showing Asia-Australia (🌏) faces the Pacific — Unicode's third regional globe alongside 🌎 and 🌍.",
      "Tech and gaming companies tag APAC announcements with 🌏 — server launches, conferences in Singapore or Tokyo.",
      "Travel creators posting Bali, Japan, or Sydney content use 🌏 to signal region without listing every country.",
      "K-pop and anime fandom international posts sometimes use 🌏 when discussing Asian media markets globally.",
    ],
    textingMeaning:
      "'APAC team 🌏', 'Japan trip 🌏', 'Australia bound 🌏'.",
    socialMeaning:
      "Conference hashtags for Web Summit Asia, Gamescom Asia, etc. combine 🌏 with city tags.",
    caution:
      "Do not use 🌏 for Europe-only stories — followers expect Pacific-adjacent content.",
    examples: [
      { context: "Travel", text: "Southeast Asia loop 🌏" },
      { context: "Work", text: "APAC launch 🌏" },
      { context: "Move", text: "Moving to Sydney 🌏" },
      { context: "Fandom", text: "Tour dates Asia 🌏" },
      { context: "Timezone", text: "Early call for 🌏 team 🌏" },
    ],
    contextBlocks: [
      { title: "APAC business shorthand", body: "Corporate Slack uses 🌏 for Asia-Pacific region updates distinct from EMEA 🌍." },
      { title: "Travel niches", body: "Digital nomad content in Thailand/Vietnam often opens with 🌏." },
      { title: "Vs 🌎", body: "🌎 is Americas-centered. 🌏 is Asia-Australia centered." },
    ],
    searchIntents: ["🌏 globe emoji", "asia australia globe meaning", "APAC emoji", "🌏 copy paste"],
    whenNotToUse: ["Avoid for Americas-only product launches."],
    faqs: [
      { question: "What region does 🌏 show?", answer: "Asia and Australia/Oceania facing the viewer — APAC shorthand." },
      { question: "When should brands use 🌏?", answer: "When announcing Asia-Pacific news — clearer than generic 🌍." },
    ],
  },

  "globe-with-meridians": {
    batchId: BATCH_ID,
    searchTitle: "Globe With Meridians (🌐) Meaning: Internet, Global, and WWW",
    snippetAnswer:
      "🌐 Globe With Meridians signals the internet, worldwide web, global connectivity, and multilingual reach — more 'online' than physical travel.",
    detailedParagraphs: [
      "Globe With Meridians (🌐) adds grid lines to the globe — Unicode designed it for international network and web symbolism.",
      "Tech posts use 🌐 for website launches, DNS/CDN jokes, and remote teams spanning time zones.",
      "Language-learning communities tag 🌐 when practicing multiple languages or hosting global Zoom calls.",
      "Unlike 🌍, 🌐 emphasizes connectivity over vacation — 'live on the 🌐' vs 'backpacking 🌍'.",
    ],
    textingMeaning:
      "'Link is live 🌐', 'global stream 🌐', 'meet online 🌐'.",
    socialMeaning:
      "SaaS startups, open-source projects, and esports orgs use 🌐 in bios for worldwide audience.",
    caution:
      "Older users may read 🌐 as travel — add 'online' if you mean webinar not holiday.",
    examples: [
      { context: "Website", text: "Site is up 🌐" },
      { context: "Remote", text: "Team across time zones 🌐" },
      { context: "Stream", text: "Global premiere 🌐" },
      { context: "Languages", text: "Polyglot hour 🌐" },
      { context: "Esports", text: "Worlds bracket 🌐" },
    ],
    contextBlocks: [
      { title: "Web culture", body: "🌐 nods to WWW history — globe with grid lines as early internet iconography." },
      { title: "Remote work", body: "Distributed companies celebrate hires 'across the 🌐'." },
      { title: "Vs 🌍", body: "🌍 leans travel/planet. 🌐 leans network and digital global." },
    ],
    searchIntents: ["globe with meridians emoji", "🌐 internet emoji", "🌐 meaning", "web globe emoji"],
    whenNotToUse: ["Avoid 🌐 for single-country tourism posts without online angle."],
    faqs: [
      { question: "What does 🌐 mean?", answer: "Global internet connectivity — websites, online events, worldwide digital reach." },
      { question: "🌐 vs 🌍 for travel?", answer: "Use 🌍 for trips; 🌐 when the story is online/global digital." },
    ],
  },

  mountain: {
    batchId: BATCH_ID,
    searchTitle: "Mountain Emoji (⛰️) Meaning: Hiking, Outdoors, and Adventure",
    snippetAnswer:
      "⛰️ Mountain marks hiking, alpine trips, national parks, and outdoor adventure — literal peaks, not metaphorical 'big challenge' unless context says so.",
    detailedParagraphs: [
      "Mountain (⛰️) shows a rocky peak — Unicode's simple mountain for nature and elevation themes.",
      "Hikers text ⛰️ with trail names, summit photos, and elevation stats. 'Summit day ⛰️' is standard Strava caption energy.",
      "Travel planners use ⛰️ for Rockies, Alps, Andes content — pairing with 🥾 and 🏕️ for full outdoor story.",
      "Motivational posts occasionally metaphorize ⛰️ as 'climbing your goals' — usually with explicit wording.",
    ],
    textingMeaning:
      "'Weekend hike ⛰️', 'View from the top ⛰️', 'National park trip ⛰️'.",
    socialMeaning:
      "Outdoor Instagram and AllTrails shares use ⛰️ in captions for discoverability among hiking communities.",
    caution:
      "During mountain rescue news in a region, insensitive flex posts with ⛰️ may backlash — timing matters.",
    examples: [
      { context: "Hike", text: "Summit reached ⛰️" },
      { context: "Plan", text: "Alpine route next month ⛰️" },
      { context: "Photo", text: "What a view ⛰️" },
      { context: "Training", text: "Elevation day ⛰️" },
      { context: "Park", text: "Yosemite weekend ⛰️" },
    ],
    contextBlocks: [
      { title: "Hiking culture", body: "⛰️ signals trail content before followers read the caption — key for outdoor creators." },
      { title: "National parks", body: "US and Canada park posts cluster ⛰️ 🌲 🦌 emoji combos." },
      { title: "Vs 🏔️", body: "🏔️ shows snow-capped alpine peaks. ⛰️ is generic rocky mountain." },
    ],
    searchIntents: ["mountain emoji meaning", "⛰️ hiking", "mountain emoji copy paste", "⛰️ outdoors"],
    whenNotToUse: ["Do not use ⛰️ to mock climbing accidents.", "Avoid vague ⛰️ in urban posts with no outdoor link."],
    faqs: [
      { question: "What does ⛰️ mean in captions?", answer: "Usually literal mountains — hiking, travel, or nature photography." },
      { question: "⛰️ vs 🏔️?", answer: "🏔️ emphasizes snowy alpine peaks; ⛰️ is a general mountain." },
    ],
  },

  camping: {
    batchId: BATCH_ID,
    searchTitle: "Camping Emoji (🏕️) Meaning: Campsite, Outdoors, and Glamping",
    snippetAnswer:
      "🏕️ Camping means tent trips, campsites, festivals, and outdoor weekends — from backcountry backpacking to family campground stays.",
    detailedParagraphs: [
      "Camping (🏕️) shows a tent under stars — Unicode's symbol for overnight outdoor stays.",
      "Friends coordinate gear lists and campsite bookings with 🏕️ — 'who brings the stove 🏕️'.",
      "Music festivals with camping tickets use 🏕️ in group chats and social promos.",
      "Glamping and van-life creators adopted 🏕️ even when tents are optional — it still means 'sleeping outdoors'.",
    ],
    textingMeaning:
      "'Camping this weekend 🏕️', 'Site booked 🏕️', 'festival camp 🏕️'.",
    socialMeaning:
      "REI-style brands, scout troops, and family adventure blogs tag 🏕️ consistently.",
    caution:
      "Wildfire season in your area may make 🏕️ posts sensitive — check local conditions and news.",
    examples: [
      { context: "Weekend", text: "Lake campsite 🏕️" },
      { context: "Festival", text: "Camp pass secured 🏕️" },
      { context: "Gear", text: "Need sleeping bags 🏕️" },
      { context: "Family", text: "Kids' first camp 🏕️" },
      { context: "Van life", text: "Stars tonight 🏕️" },
    ],
    contextBlocks: [
      { title: "Trip coordination", body: "Group chats use 🏕️ to split firewood, food, and tent duties." },
      { title: "Festival culture", body: "Multi-day events sell camping add-ons — 🏕️ marks those threads." },
      { title: "Vs 🏠", body: "🏠 is indoors. 🏕️ explicitly overnight outdoor sleeping." },
    ],
    searchIntents: ["camping emoji meaning", "🏕️ tent emoji", "camping copy paste", "🏕️ outdoors"],
    whenNotToUse: ["Avoid promoting camping where fire bans exist.", "Do not use 🏕️ for hotel-only trips."],
    faqs: [
      { question: "What does 🏕️ mean?", answer: "Camping and tent trips — outdoor overnight adventures." },
      { question: "Does 🏕️ include glamping?", answer: "Yes in casual use — any styled outdoor stay often gets 🏕️." },
    ],
  },
};
