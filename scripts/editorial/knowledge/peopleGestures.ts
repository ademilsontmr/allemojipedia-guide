import type { EditorialOverride } from "../buildEnhancedEnrichment";

/** Rich editorial overrides for high-traffic People gesture bases (batch 33). */
export const GESTURE_OVERRIDES: Record<string, EditorialOverride> = {
  "waving-hand": {
    searchTitle: "Waving Hand Emoji (👋) Meaning: Hello, Goodbye, and Friendly Hi",
    snippetAnswer:
      "👋 Waving Hand says hello or goodbye — friendly opener in chats, stream intros, and group joins when you want warmth without a long message.",
    detailedParagraphs: [
      "Waving Hand (👋) is the default digital greeting when entering a chat, starting a video call, or saying bye after plans confirm.",
      "One 👋 feels casual; 👋👋 adds extra enthusiasm — common in Discord joins and family WhatsApp when someone comes online.",
      "In live streams, creators wave at camera on start — viewers mirror 👋 in chat as parasocial hello.",
    ],
    textingMeaning: "'Hey 👋', 'Bye 👋', 'Just joined 👋'.",
    socialMeaning: "Intro posts, new-follower replies, and travel 'made it safe' updates lead with 👋.",
    caution: "Waving at strangers in DMs can feel salesy — pair with context.",
    examples: [
      { context: "Hello", text: "Morning team 👋" },
      { context: "Goodbye", text: "Gotta run 👋" },
      { context: "Join", text: "I'm here 👋" },
      { context: "Stream", text: "Chat hi 👋" },
      { context: "Travel", text: "Landed 👋" },
    ],
    contextBlocks: [
      { title: "Vs ✋", body: "✋ raised hand = stop or question. 👋 = hello/goodbye wave." },
      { title: "Workplace", body: "Fine for internal Slack hello; skip cold outreach DMs." },
    ],
    faqs: [
      { question: "What does 👋 mean in texting?", answer: "Usually hello, hi, or goodbye — friendly greeting." },
      { question: "👋 vs 👋👋?", answer: "More waves = more enthusiasm, not a different meaning." },
    ],
  },
  "thumbs-up": {
    searchTitle: "Thumbs Up Emoji (👍) Meaning: Approval, OK, and Acknowledgment",
    snippetAnswer:
      "👍 Thumbs Up means approval, agreement, or 'got it' — quick positive close in chats, but some younger users read a lone 👍 as passive-aggressive or dismissive.",
    detailedParagraphs: [
      "Thumbs Up (👍) is one of the most universal OK gestures — confirming plans, praising work, or ending a thread without typing a paragraph.",
      "Facebook made 👍 famous as 'Like'; in iMessage it still reads as agreement or acknowledgment.",
      "Gen Z nuance: a single 👍 after a long message can feel curt — add words or use 👍 with context in sensitive threads.",
      "In some Middle Eastern cultures the thumbs-up gesture is offensive — know your international audience.",
    ],
    textingMeaning: "'Sounds good 👍', 'Got it 👍', 'Approved 👍'.",
    socialMeaning: "Comment reactions and quick replies use 👍 when full sentences feel heavy.",
    caution: "Lone 👍 after emotional news can read cold. Offensive in some regions — avoid with unknown international contacts.",
    examples: [
      { context: "Approval", text: "Great job 👍" },
      { context: "Agreement", text: "See you at 7 👍" },
      { context: "Ack", text: "Got it 👍" },
      { context: "Work", text: "LGTM 👍" },
      { context: "Caution", text: "Thanks for sharing — I'll read tonight 👍" },
    ],
    contextBlocks: [
      { title: "Passive-aggressive?", body: "Some read lone 👍 as dismissive — add a word if tone matters." },
      { title: "Vs 👎", body: "👎 explicit disapproval. 👍 approval or OK." },
    ],
    whenNotToUse: ["After bad news without supportive words.", "With clients in cultures where thumbs-up is rude."],
    faqs: [
      { question: "Is 👍 rude?", answer: "Usually no — but alone after a long message it can feel curt to younger users." },
      { question: "👍 at work?", answer: "Common internally; add words for important confirmations." },
    ],
  },
  "thumbs-down": {
    searchTitle: "Thumbs Down Emoji (👎) Meaning: Disapproval, Dislike, and No",
    snippetAnswer:
      "👎 Thumbs Down signals disapproval, dislike, or 'I disagree' — stronger negative reaction than staying silent, common on YouTube and debate threads.",
    detailedParagraphs: [
      "Thumbs Down (👎) mirrors the physical no gesture — voting against an idea, disliking content, or vetoing a plan.",
      "YouTube popularized 👎 as Dislike; in group chats it can escalate conflict if dropped without explanation.",
      "Use with care in workplace threads — 👎 alone on a colleague's proposal reads harsh.",
    ],
    textingMeaning: "'Hard pass 👎', 'Not for me 👎', 'Disagree 👎'.",
    socialMeaning: "Comment sections and poll replies tag 👎 for negative sentiment.",
    caution: "Can escalate arguments — prefer words in professional or personal conflict.",
    examples: [
      { context: "Dislike", text: "This take 👎" },
      { context: "Vote", text: "Option B 👎" },
      { context: "Food", text: "Never again 👎" },
      { context: "Meme", text: "My mood 👎" },
      { context: "Debate", text: "Strong disagree 👎" },
    ],
    faqs: [
      { question: "What does 👎 mean?", answer: "Disapproval, dislike, or disagreement." },
      { question: "👎 at work?", answer: "Avoid on people — critique ideas with words instead." },
    ],
  },
  "folded-hands": {
    searchTitle: "Folded Hands Emoji (🙏) Meaning: Please, Thanks, Prayer, and Namaste",
    snippetAnswer:
      "🙏 Folded Hands means please, thank you, prayer, or respect — also high-five in Japan and 'hope/pray for you' in English chats.",
    detailedParagraphs: [
      "Folded Hands (🙏) carries multiple readings: gratitude, pleading please, spiritual prayer, and namaste-style respect.",
      "Western texting often uses 🙏 as 'thanks' or 'sending prayers' after bad news — tone depends on belief context.",
      "Japanese users sometimes use 🙏 as apology or request — not always religious.",
    ],
    textingMeaning: "'Thank you 🙏', 'Please 🙏', 'Praying for you 🙏'.",
    socialMeaning: "Support threads after illness or loss; gratitude posts to creators and helpers.",
    caution: "Mocking prayer with 🙏 in grief threads is cruel. Respect secular and religious audiences.",
    examples: [
      { context: "Thanks", text: "Really appreciate it 🙏" },
      { context: "Please", text: "One more favor 🙏" },
      { context: "Support", text: "Thinking of you 🙏" },
      { context: "Gratitude", text: "Blessed 🙏" },
      { context: "Request", text: "Pls review 🙏" },
    ],
    contextBlocks: [
      { title: "Not always prayer", body: "Many use 🙏 as thanks or please without religious intent." },
      { title: "Vs 🙌", body: "🙌 raised hands = celebration. 🙏 folded = thanks/please/prayer." },
    ],
    faqs: [{ question: "🙏 religious?", answer: "Can be — but often just means thanks or please in chat." }],
  },
  "clapping-hands": {
    searchTitle: "Clapping Hands Emoji (👏) Meaning: Applause, Congrats, and Sarcasm",
    snippetAnswer:
      "👏 Clapping Hands applauds wins and milestones — also sarcastic slow-clap when spaced as 👏 👏 👏 in ironic threads.",
    detailedParagraphs: [
      "Clapping Hands (👏) celebrates achievements — promotions, graduations, great plays, and standing-ovation energy.",
      "Sarcasm pattern: word 👏 between 👏 emojis mimics slow clap at a bad take.",
      "Diversity posts use skin-tone 👏 variants when applauding people specifically.",
    ],
    textingMeaning: "'Well done 👏', 'So proud 👏', 'Bravo 👏'.",
    socialMeaning: "Award show live tweets, sports highlights, and creator milestone posts.",
    caution: "Sarcastic 👏 can bully — don't pile on vulnerable posts.",
    examples: [
      { context: "Congrats", text: "You did it 👏" },
      { context: "Sports", text: "What a goal 👏" },
      { context: "Work", text: "Shipped 👏" },
      { context: "Sarcasm", text: "Wow 👏 great 👏 take 👏" },
      { context: "Show", text: "Standing ovation 👏👏" },
    ],
  },
  "raising-hands": {
    searchTitle: "Raising Hands Emoji (🙌) Meaning: Celebration, Praise, and Hallelujah",
    snippetAnswer:
      "🙌 Raising Hands celebrates wins, gratitude, and hype — 'praise hands' energy for good news, festivals, and team victories.",
    detailedParagraphs: [
      "Raising Hands (🙌) signals joy and triumph — job offers, festival weekends, and 'finally done' moments.",
      "Gospel and concert culture borrowed 🙌 as praise hands — secular use is equally common.",
      "Pair with exclamation for emphasis: 'WE WON 🙌' hits harder than 🙌 alone.",
    ],
    textingMeaning: "'Let's go 🙌', 'Thank God 🙌', 'We made it 🙌'.",
    socialMeaning: "Festival recaps, sports wins, and pregnancy announcements tag 🙌.",
    examples: [
      { context: "Win", text: "Champions 🙌" },
      { context: "Relief", text: "Passed the exam 🙌" },
      { context: "Party", text: "Weekend 🙌" },
      { context: "Gratitude", text: "So grateful 🙌" },
      { context: "Team", text: "Ship day 🙌" },
    ],
  },
  handshake: {
    searchTitle: "Handshake Emoji (🤝) Meaning: Deal, Agreement, and Partnership",
    snippetAnswer:
      "🤝 Handshake marks deals, agreements, truce, and partnership — business closes, collabs, and 'we good' after conflict.",
    detailedParagraphs: [
      "Handshake (🤝) digitalizes the deal-close gesture — contracts signed, handshakes on camera, and partnership announcements.",
      "Diplomacy and sports trade posts use 🤝 for mutual respect or truce.",
      "Skin-tone variants show two people with different tones — pick variants that match who you reference.",
    ],
    textingMeaning: "'Deal 🤝', 'Partners 🤝', 'Truce 🤝'.",
    socialMeaning: "Startup collab tweets, sports transfer news, and peace memes.",
    examples: [
      { context: "Deal", text: "Signed 🤝" },
      { context: "Collab", text: "Excited to work together 🤝" },
      { context: "Sports", text: "Respect 🤝" },
      { context: "Friends", text: "We good 🤝" },
      { context: "Biz", text: "Closed 🤝" },
    ],
  },
  "flexed-biceps": {
    searchTitle: "Flexed Biceps Emoji (💪) Meaning: Strength, Gym, and You Got This",
    snippetAnswer:
      "💪 Flexed Biceps shows strength, gym progress, hustle, and encouragement — 'you got this' without typing a speech.",
    detailedParagraphs: [
      "Flexed Biceps (💪) tags workouts, PR posts, and motivational hype for friends facing hard tasks.",
      "Fitness TikTok and gym selfies lead with 💪 — also used ironically for 'barely survived Monday'.",
      "Cancer awareness and disability communities sometimes use 💪 for fighting spirit — match seriousness of thread.",
    ],
    textingMeaning: "'Leg day 💪', 'You got this 💪', 'Strong 💪'.",
    socialMeaning: "Gym check-ins, marathon training, and hustle culture memes.",
    examples: [
      { context: "Gym", text: "New PR 💪" },
      { context: "Hype", text: "Kill it today 💪" },
      { context: "Work", text: "Crunch week 💪" },
      { context: "Recovery", text: "Getting stronger 💪" },
      { context: "Meme", text: "Monday 💪" },
    ],
  },
  "victory-hand": {
    searchTitle: "Victory Hand Emoji (✌️) Meaning: Peace, Victory, and V Sign",
    snippetAnswer:
      "✌️ Victory Hand means peace sign or victory — casual bye, photo pose, or 'we won' depending on context.",
    detailedParagraphs: [
      "Victory Hand (✌️) started as V for victory; modern chat uses it as peace, casual cool, or photo pose.",
      "In UK/Ireland, palm-in V can be insulting — palm-out ✌️ is safer internationally.",
      "K-pop and anime fan posts use ✌️ in selca-style captions.",
    ],
    textingMeaning: "'Peace ✌️', 'See ya ✌️', 'Win ✌️'.",
    socialMeaning: "Concert posts, travel selfies, and chill sign-off messages.",
    caution: "Palm orientation matters in UK — context and audience.",
    examples: [
      { context: "Peace", text: "Out ✌️" },
      { context: "Win", text: "Victory ✌️" },
      { context: "Photo", text: "Day out ✌️" },
      { context: "Casual", text: "Later ✌️" },
      { context: "Concert", text: "Best night ✌️" },
    ],
  },
  "crossed-fingers": {
    searchTitle: "Crossed Fingers Emoji (🤞) Meaning: Good Luck and Hope",
    snippetAnswer:
      "🤞 Crossed Fingers wishes good luck or hopes something works out — exams, job interviews, and lottery jokes.",
    detailedParagraphs: [
      "Crossed Fingers (🤞) expresses hope without guaranteeing outcome — 'fingers crossed' for results pending.",
      "Superstition roots meet modern texting: 🤞 before announcements, medical results, or game day.",
      "Can also mean lying in some gestures — rare in emoji; context usually shows hope instead.",
    ],
    textingMeaning: "'Good luck 🤞', 'Hope it works 🤞', 'Waiting on news 🤞'.",
    socialMeaning: "Exam season, job hunt updates, and sports superstition posts.",
    examples: [
      { context: "Luck", text: "You got this 🤞" },
      { context: "Wait", text: "Results tomorrow 🤞" },
      { context: "Hope", text: "Praying 🤞" },
      { context: "Game", text: "Need a W 🤞" },
      { context: "Interview", text: "Nervous 🤞" },
    ],
  },
  "love-you-gesture": {
    searchTitle: "Love-You Gesture Emoji (🤟) Meaning: I Love You in ASL",
    snippetAnswer:
      "🤟 Love-You Gesture is the ASL sign for 'I love you' — affection for partners, family, and fandom without full sentence.",
    detailedParagraphs: [
      "Love-You Gesture (🤟) combines I-L-Y handshape from American Sign Language — not the same as 🤘 horns.",
      "Deaf and hearing communities use 🤟 authentically; hearing users should not mock sign language.",
      "Rock concerts sometimes confuse 🤟 with horns — know the difference.",
    ],
    textingMeaning: "'Love you 🤟', 'ILY 🤟', 'Miss you 🤟'.",
    socialMeaning: "Family group chats, concert love for artists, and Pride affection posts.",
    caution: "Do not mock ASL or use 🤟 to parody Deaf culture.",
    examples: [
      { context: "Family", text: "Love you mom 🤟" },
      { context: "Partner", text: "Goodnight 🤟" },
      { context: "Friends", text: "Appreciate you 🤟" },
      { context: "Concert", text: "We love you 🤟" },
      { context: "Long distance", text: "Miss you 🤟" },
    ],
    contextBlocks: [{ title: "Vs 🤘", body: "🤘 rock horns. 🤟 ASL I love you — different meaning." }],
  },
  "sign-of-the-horns": {
    searchTitle: "Sign of the Horns Emoji (🤘) Meaning: Rock On and Metal",
    snippetAnswer:
      "🤘 Sign of the Horns means rock on, metal, and concert hype — horns up at shows and gaming clutch moments.",
    detailedParagraphs: [
      "Sign of the Horns (🤘) is the metal/rock hand sign — festivals, guitar solos, and esports hype.",
      "Not the ASL love sign (🤟) — thumb position differs.",
      "Some cultures attach other meanings — default to music/gaming context online.",
    ],
    textingMeaning: "'Rock on 🤘', 'Metal 🤘', 'Epic 🤘'.",
    socialMeaning: "Concert stories, metal playlists, and boss-defeat gaming posts.",
    examples: [
      { context: "Concert", text: "Best set 🤘" },
      { context: "Gaming", text: "Clutch 🤘" },
      { context: "Playlist", text: "Friday night 🤘" },
      { context: "Metal", text: "Horns up 🤘" },
      { context: "Epic", text: "Legendary 🤘" },
    ],
  },
  "middle-finger": {
    searchTitle: "Middle Finger Emoji (🖕) Meaning: Insult and Anger",
    snippetAnswer:
      "🖕 Middle Finger is an explicit insult — anger, contempt, or aggressive joke. Never use in harassment, work, or with strangers.",
    detailedParagraphs: [
      "Middle Finger (🖕) carries the same weight as the physical gesture — hostile and often Terms-of-Service violating when targeted.",
      "Some use 🖕 ironically with friends who understand — still risky if audience misreads.",
      "Platforms may restrict accounts for targeted harassment with 🖕.",
    ],
    textingMeaning: "Hostile dismissal — avoid unless you accept consequences.",
    socialMeaning: "Rare in public posts; mostly vent DMs or meme accounts.",
    caution: "Harassment, HR violations, and platform bans — do not use at work or against strangers.",
    whenNotToUse: [
      "Always in professional contexts.",
      "Directed at individuals in public threads.",
      "When joking ambiguity could harm.",
    ],
    examples: [{ context: "Warning", text: "Don't send this to your boss 🖕" }],
    faqs: [{ question: "Is 🖕 OK to send?", answer: "Only if you accept it reads as a serious insult — never at work." }],
  },
  "pinched-fingers": {
    searchTitle: "Pinched Fingers Emoji (🤌) Meaning: Italian Gesture and Emphasis",
    snippetAnswer:
      "🤌 Pinched Fingers is the Italian 'ma che vuoi?' gesture — confusion, emphasis, chef-kiss quality, or dramatic 'what do you want?'",
    detailedParagraphs: [
      "Pinched Fingers (🤌) went viral as Italian hand talk — questioning, emphasizing, or praising perfect pasta.",
      "Meme use: 🤌 when something is chef's kiss or when drama is peak.",
      "Not exclusively Italian — but cultural origin matters; avoid stereotype mockery.",
    ],
    textingMeaning: "'Perfection 🤌', 'What even 🤌', 'Chef kiss 🤌'.",
    socialMeaning: "Food posts, drama Twitter, and fashion immaculate captions.",
    examples: [
      { context: "Food", text: "This pasta 🤌" },
      { context: "Drama", text: "The audacity 🤌" },
      { context: "Fashion", text: "Look 🤌" },
      { context: "Confusion", text: "Explain 🤌" },
      { context: "Meme", text: "Italian energy 🤌" },
    ],
  },
  "pinching-hand": {
    searchTitle: "Pinching Hand Emoji (🤏) Meaning: Small Amount and Tiny Joke",
    snippetAnswer:
      "🤏 Pinching Hand shows a tiny amount — 'a little bit', small penis joke meme, or precise measurement humor.",
    detailedParagraphs: [
      "Pinching Hand (🤏) indicates something small — portion size, patience running out, or the viral tiny meme.",
      "Korean origin meme linked 🤏 to size jokes — know audience before using in flirt or insult contexts.",
      "Also literal: 'just a pinch' of salt or spice in recipe threads.",
    ],
    textingMeaning: "'Tiny bit 🤏', 'So close 🤏', 'Little patience left 🤏'.",
    socialMeaning: "Meme replies, cooking threads, and sarcastic almost posts.",
    caution: "Size jokes can harass — avoid directed insults.",
    examples: [
      { context: "Amount", text: "Salt 🤏" },
      { context: "Meme", text: "My patience 🤏" },
      { context: "Close", text: "Almost 🤏" },
      { context: "Sarcasm", text: "Huge success 🤏" },
      { context: "Cooking", text: "Pinch of chili 🤏" },
    ],
  },
  "ok-hand": {
    searchTitle: "OK Hand Emoji (👌) Meaning: OK, Perfect, and Zero",
    snippetAnswer:
      "👌 OK Hand signals OK, perfect, or zero — widely positive, but offensive in some regions and misused by hate groups in specific contexts.",
    detailedParagraphs: [
      "OK Hand (👌) circles thumb and index for 'all good' or 'perfect' — diving OK, food approval, zero problems.",
      "Some regions treat the OK gesture as vulgar — research audience abroad.",
      "Online hate groups briefly claimed the symbol — most users still mean innocent OK.",
    ],
    textingMeaning: "'Perfect 👌', 'All good 👌', 'Zero issues 👌'.",
    socialMeaning: "Food approval, plan confirmation, and chef's perfect memes.",
    caution: "Offensive in Brazil and parts of Europe as vulgar; know context internationally.",
    examples: [
      { context: "OK", text: "All set 👌" },
      { context: "Perfect", text: "Exactly 👌" },
      { context: "Food", text: "10/10 👌" },
      { context: "Diving", text: "Underwater OK 👌" },
      { context: "Zero", text: "Problems: 👌" },
    ],
  },
  "raised-hand": {
    searchTitle: "Raised Hand Emoji (✋) Meaning: Stop, High Five, and Question",
    snippetAnswer:
      "✋ Raised Hand means stop, wait, high five, or 'pick me' — classroom volunteer energy and pause-the-conversation signal.",
    detailedParagraphs: [
      "Raised Hand (✋) stops action — 'wait ✋', boundary setting, or auction bid humor.",
      "Teachers and Zoom culture: ✋ = I have a question or answer.",
      "High-five variant when paired with another hand emoji in some threads.",
    ],
    textingMeaning: "'Wait ✋', 'Hold on ✋', 'I have a question ✋'.",
    socialMeaning: "Meeting chats, classroom memes, and boundary posts.",
    examples: [
      { context: "Stop", text: "Wait ✋" },
      { context: "Question", text: "Me ✋" },
      { context: "Boundary", text: "Not cool ✋" },
      { context: "Pause", text: "Hold up ✋" },
      { context: "Class", text: "Pick me ✋" },
    ],
  },
  "index-pointing-at-viewer": {
    searchTitle: "Index Pointing at Viewer Emoji (🫵) Meaning: You Meme and Call-Out",
    snippetAnswer:
      "🫵 Index Pointing at Viewer calls out 'YOU' — meme accusations, TikTok POV, and direct challenge to the reader.",
    detailedParagraphs: [
      "Index Pointing at Viewer (🫵) broke out as 'hey YOU' meme format — pointing at camera/reader.",
      "TikTok POV captions use 🫵 for direct address and playful call-outs.",
      "Can feel aggressive if targeting someone negatively — keep playful or supportive.",
    ],
    textingMeaning: "'YOU 🫵', 'This you 🫵', 'Calling you out 🫵'.",
    socialMeaning: "Meme replies, POV TikToks, and interactive story posts.",
    examples: [
      { context: "Meme", text: "This you 🫵" },
      { context: "POV", text: "When YOU 🫵" },
      { context: "Call-out", text: "Tag yourself 🫵" },
      { context: "Joke", text: "Guilty 🫵" },
      { context: "Direct", text: "I'm talking to YOU 🫵" },
    ],
  },
  "writing-hand": {
    searchTitle: "Writing Hand Emoji (✍️) Meaning: Writing, Signing, and Author",
    snippetAnswer:
      "✍️ Writing Hand marks writing, signing documents, authorship, and 'taking notes' — threads, contracts, and creator bylines.",
    detailedParagraphs: [
      "Writing Hand (✍️) tags essays, signature moments, and note-taking during lectures or podcasts.",
      "Authors and journalists use ✍️ in bios and pinned posts — literal craft signal.",
      "Also 'I'm writing this down' when someone says something memorable or absurd.",
    ],
    textingMeaning: "'Signing ✍️', 'Notes ✍️', 'Wrote it ✍️'.",
    socialMeaning: "Writer Twitter, contract announcements, and studyblr posts.",
    examples: [
      { context: "Sign", text: "Just signed ✍️" },
      { context: "Notes", text: "Taking notes ✍️" },
      { context: "Author", text: "New piece ✍️" },
      { context: "Study", text: "Exam prep ✍️" },
      { context: "Quote", text: "Writing that down ✍️" },
    ],
  },
  selfie: {
    searchTitle: "Selfie Emoji (🤳) Meaning: Selfie, Front Camera, and Self-Portrait",
    snippetAnswer:
      "🤳 Selfie marks self-portraits, front-camera posts, and vanity-day humor — new hair, fit check, or travel solo shot.",
    detailedParagraphs: [
      "Selfie (🤳) announces camera-facing content — Instagram stories, new glasses, gym mirror pics.",
      "Distinguishes front-camera from back-camera 📷 travel shots.",
      "Self-deprecating humor: '🤳 era' when posting too many selfies.",
    ],
    textingMeaning: "'Selfie day 🤳', 'New pic 🤳', 'Mirror check 🤳'.",
    socialMeaning: "Influencer GRWM, travel solo content, and fit checks.",
    examples: [
      { context: "New pic", text: "Fresh 🤳" },
      { context: "Hair", text: "Cut reveal 🤳" },
      { context: "Travel", text: "Solo trip 🤳" },
      { context: "Gym", text: "Post workout 🤳" },
      { context: "Humor", text: "Too many 🤳" },
    ],
  },
  "heart-hands": {
    searchTitle: "Heart Hands Emoji (🫶) Meaning: Love, Support, and Affection",
    snippetAnswer:
      "🫶 Heart Hands shows love and support — wholesome affection, fan love for creators, and gratitude without romance.",
    detailedParagraphs: [
      "Heart Hands (🫶) became wholesome love symbol — softer than ❤️ for platonic and community support.",
      "K-pop and fandom posts use 🫶 for artist appreciation.",
      "Fundraiser and mutual aid posts tag 🫶 for solidarity.",
    ],
    textingMeaning: "'Love you 🫶', 'Support 🫶', 'Thank you 🫶'.",
    socialMeaning: "Wholesome TikTok, charity drives, and friend appreciation.",
    examples: [
      { context: "Love", text: "So proud 🫶" },
      { context: "Support", text: "Here for you 🫶" },
      { context: "Fandom", text: "Stan 🫶" },
      { context: "Thanks", text: "Means a lot 🫶" },
      { context: "Community", text: "We got us 🫶" },
    ],
  },
  "vulcan-salute": {
    searchTitle: "Vulcan Salute Emoji (🖖) Meaning: Live Long and Prosper",
    snippetAnswer:
      "🖖 Vulcan Salute is Spock's Star Trek greeting — sci-fi fandom, nerd identity, and 'live long and prosper'.",
    detailedParagraphs: [
      "Vulcan Salute (🖖) requires finger split — Unicode tribute to Leonard Nimoy's Spock.",
      "Trekkie identity marker at cons, space news, and sci-fi watch parties.",
      "Some use 🖖 as generic geek hello — usually read as Trek reference.",
    ],
    textingMeaning: "'LLAP 🖖', 'Trekkie 🖖', 'Space day 🖖'.",
    socialMeaning: "Sci-fi fandom, NASA launch threads, and convention posts.",
    examples: [
      { context: "Trek", text: "Live long 🖖" },
      { context: "Con", text: "Day 1 🖖" },
      { context: "Space", text: "Launch day 🖖" },
      { context: "Nerd", text: "Greetings 🖖" },
      { context: "Farewell", text: "Prosper 🖖" },
    ],
  },
};

export const pointingOverride = (direction: string): EditorialOverride => ({
  snippetAnswer: `Points ${direction} to highlight a message, link, or detail — classic 'look ${direction}' in threads and carousels.`,
  detailedParagraphs: [
    `Pointing ${direction} directs readers to a reply, screenshot, or slide — creators write 'link ${direction}' with the emoji in captions.`,
    `Without words, direction alone may confuse — always label what you point at.`,
    `Accessibility: write 'see below' or 'link in bio' explicitly; emoji direction is visual only.`,
  ],
  textingMeaning: `'Look ${direction}', 'Details ${direction}', 'This one ${direction}'.`,
  socialMeaning: `Instagram/TikTok CTAs, thread highlights, and tutorial steps pointing ${direction}.`,
  examples: [
    { context: "CTA", text: `Full recipe ${direction}` },
    { context: "Thread", text: `Answer ${direction}` },
    { context: "Carousel", text: `Slide 2 ${direction}` },
    { context: "Tutorial", text: `Settings ${direction}` },
    { context: "Meme", text: `My mood ${direction}` },
  ],
  contextBlocks: [
    { title: "Caption pattern", body: `Pair with text — '${direction}' alone may not scroll the reader.` },
    { title: "Skin-tone variants", body: "Inclusive skin-tone modifiers available for pointing hand emojis." },
  ],
});
