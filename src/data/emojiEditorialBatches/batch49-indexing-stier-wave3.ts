import type { EmojiBatchEnrichment } from "./types";

/**
 * Indexing S-tier wave 3 — 😍 🤔 👍 🙏 💯
 * Next ring after waves 1–2 (❤️💀🥺 + 😂🔥😭✨).
 */
const BATCH_ID = "49-indexing-stier-wave3";

export const batch49IndexingStierWave3: Record<string, EmojiBatchEnrichment> = {
  "smiling-face-with-heart-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Heart Eyes Emoji Meaning (😍): Crush, Compliment or Just Cute?",
    snippetAnswer:
      "😍 Heart Eyes means love, admiration, attraction, or strong delight. Use it for crushes and compliments — or for food, pets, and views you adore without romance.",
    detailedParagraphs: [
      "Smiling Face with Heart-Eyes (😍) replaces normal eyes with hearts — Unicode’s icon for adoration. It is louder than a polite smile and clearer than a vague “nice.” People search it when a crush drops 😍 and they need to know if it is flirty or just hype.",
      "Crush and compliment culture run on 😍. Selfies, outfits, pets, sunsets, and desserts all get heart-eyes when someone is genuinely into what they see. Stacked 😍😍 turns the volume up.",
      "Unlike ❤️, which can mean “I love you,” 😍 often means “I love this” — the look, the plate, the moment. You can 😍 a pizza without confessing romance. That split is the key to reading DMs correctly.",
      "On Instagram and TikTok, 😍 is visual applause under beauty, travel, and “obsessed” posts. In private chats it carries more weight than a public comment heart-eye.",
      "Pair with words (“you look amazing 😍”) when the compliment matters. Alone on a coworker’s photo it can feel too personal — prefer 👍 or 😊 in formal spaces.",
    ],
    textingMeaning:
      "Reply with 😍 when a photo or news makes you melt — attraction, cuteness, or pure enthusiasm. It is a high-energy yes to whatever was shared.",
    socialMeaning:
      "Comments and story replies use 😍 as fast adoration. Fans spam it under trailers and merch drops to signal obsession, not polite interest.",
    caution:
      "Heart-eyes on a coworker’s headshot can feel thirsty. On grief or medical posts, prefer supportive words over thirst-adjacent reactions.",
    examples: [
      { context: "Crush", text: "You look incredible 😍" },
      { context: "Food", text: "That cake 😍" },
      { context: "Travel", text: "This view 😍" },
      { context: "Pet", text: "Look at him 😍" },
      { context: "Outfit", text: "The dress 😍" },
      { context: "Friend photo", text: "Obsessed with this pic 😍" },
      { context: "Music", text: "This song 😍" },
      { context: "Soft launch", text: "Can't stop smiling 😍❤️" },
    ],
    contextBlocks: [
      {
        title: "Is 😍 flirty?",
        body: "Often yes on a personal selfie in a dating thread. On food or travel it is usually delight, not a confession. See [flirty emoji guide](/blog/flirty-emoji-meanings-romantic-or-friendly/).",
      },
      {
        title: "😍 vs ❤️",
        body: "❤️ can mean love for a person. 😍 is usually delight at what you see. Romance uses both; 😍 is the reaction emoji — see [red heart](/emoji/red-heart/).",
      },
      {
        title: "😍 vs 🥰",
        body: "🥰 feels warm, loved, soft. 😍 is stronger “I’m staring because this looks amazing” crush energy.",
      },
      {
        title: "From a girl or guy",
        body: "Strong liking or attraction to you or your photo. With close friends it may just mean the content is adorable.",
      },
    ],
    searchIntents: [
      "heart eyes emoji meaning",
      "😍 meaning in texting",
      "😍 meaning from a girl",
      "😍 meaning from a guy",
      "is heart eyes flirty",
      "😍 vs 🥰",
      "😍 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid 😍 on professional headshots in formal workplaces.",
      "Do not use thirst-style 😍 under posts about grief or illness.",
      "Skip if you only mean mild approval — 👍 or 😊 may fit better.",
    ],
    faqs: [
      {
        question: "What does the heart eyes emoji mean?",
        answer:
          "😍 means adoration — you love how someone or something looks, sounds, or feels in that moment.",
      },
      {
        question: "Is 😍 flirty?",
        answer:
          "Often on personal photos in a crush chat. On pizza, pets, or sunsets it is usually non-romantic delight.",
      },
      {
        question: "What does 😍 mean from a girl or guy?",
        answer:
          "Strong liking or attraction to you or your content. Friend-group use can still mean “this is adorable.”",
      },
      {
        question: "😍 vs ❤️?",
        answer:
          "❤️ often means care/love for a person. 😍 usually means “I love this” as a reaction to what you see.",
      },
      {
        question: "😍 vs 🥰?",
        answer:
          "😍 = heart eyes at something delightful. 🥰 = feeling loved/affectionate. Crush photos often get 😍; cozy love notes often get 🥰.",
      },
      {
        question: "How do I copy 😍?",
        answer:
          "Open the heart eyes page on Allemojipedia, tap 😍 to copy, and paste into any app.",
      },
    ],
  },

  "thinking-face": {
    batchId: BATCH_ID,
    searchTitle: "Thinking Face Emoji Meaning (🤔): Doubt, Curiosity or Shade?",
    snippetAnswer:
      "🤔 Thinking Face means curiosity, doubt, suspicion, or “I’m considering this.” It can be sincere, sarcastic, or skeptical — the message around it decides.",
    detailedParagraphs: [
      "Thinking Face (🤔) shows a raised brow and hand on chin — the classic “hmm” pose. Unicode framed it for pondering; the internet turned it into multipurpose side-eye. That dual use drives most searches.",
      "Sincere uses are simple: you are deciding, researching, or asking a real question. “Not sure yet 🤔” buys time without ghosting.",
      "Sarcastic uses are louder. “Interesting 🤔” after a shaky excuse signals disbelief. Memes paste 🤔 on conspiracy jokes and fake-deep takes.",
      "Because tone splits hard, words matter. If you only mean curiosity, add the question. If you mean shade, know that 🤔 alone can start an argument.",
      "Compared with 🤨 (sharper raised eyebrow) and 😶 (blank/speechless), 🤔 is active evaluation — brain on. In flirt chats “hmm 🤔” can mean intrigue; in conflict it can mean distrust.",
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
      { context: "Flirty intrigue", text: "Interesting 🤔 tell me more" },
      { context: "Work soft", text: "Quick question on the timeline 🤔" },
    ],
    contextBlocks: [
      {
        title: "Sincere vs sarcastic",
        body: "With a real question, 🤔 softens the ask. After contradictions, it reads as “I don’t buy it.” Soften shade with a clear follow-up question.",
      },
      {
        title: "🤔 vs 🤨",
        body: "🤨 is sharper skepticism. 🤔 is broader — thinking, wondering, or doubting.",
      },
      {
        title: "🤔 vs 💀",
        body: "💀 is “I’m dead” reaction energy. 🤔 is evaluation. Different jobs — see [skull](/emoji/skull/).",
      },
      {
        title: "From a guy or girl",
        body: "Same split: curiosity or doubt. In dating chats it may mean they are weighing something you said.",
      },
    ],
    searchIntents: [
      "thinking emoji meaning",
      "🤔 meaning in texting",
      "thinking face sarcastic meaning",
      "🤔 from a guy",
      "is thinking emoji rude",
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
        question: "What does the thinking face emoji mean?",
        answer:
          "🤔 means you are thinking, unsure, or skeptical. Sincere or sarcastic — the surrounding text decides.",
      },
      {
        question: "Is 🤔 rude?",
        answer:
          "It can be. Alone after someone’s explanation it often feels like disbelief. Soften with a clear question.",
      },
      {
        question: "What does 🤔 mean from a guy or girl?",
        answer:
          "Usually curiosity or doubt. In dating chats it may mean they are weighing something you said.",
      },
      {
        question: "Can 🤔 be sarcastic?",
        answer:
          "Yes — “interesting 🤔” after a weak excuse is classic side-eye. Add humor carefully.",
      },
      {
        question: "🤔 vs 🤨?",
        answer:
          "🤨 is sharper raised-eyebrow skepticism. 🤔 covers wondering, deciding, and doubting.",
      },
      {
        question: "How do I copy 🤔?",
        answer:
          "Open the thinking face page on Allemojipedia, tap 🤔 to copy, and paste anywhere.",
      },
    ],
  },

  "thumbs-up": {
    batchId: BATCH_ID,
    searchTitle: "Thumbs Up Emoji Meaning (👍): OK, Approval or Passive-Aggressive?",
    snippetAnswer:
      "👍 Thumbs Up usually means approval, agreement, or “OK.” In some work chats and Gen Z texting, a lone 👍 after a long message can feel blunt or passive-aggressive.",
    detailedParagraphs: [
      "Thumbs Up (👍) is one of the most searched approval symbols because the meaning looks simple — and sometimes is not. Most of the time it means “sounds good,” “got it,” or “nice.”",
      "Friendly chats use 👍 to confirm plans and close logistics without a paragraph. Facebook made it famous as Like; WhatsApp and iMessage still treat it as agreement.",
      "Gen Z nuance: after a long emotional message, a single 👍 can feel curt — like you are dismissing the conversation. Add a word when the topic is sensitive (“Got it, thanks 👍”).",
      "At work, 👍 is normal for quick OK in Slack. For raises, conflicts, or client approvals, write the confirmation in sentences too.",
      "International note: in some regions the physical thumbs-up gesture is offensive. Know your audience for cross-border chats. Skin-tone modifiers exist when you want them.",
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
      { context: "Warm ack", text: "Appreciate you sending this 👍" },
      { context: "Skin tone", text: "Sounds good 👍🏻" },
    ],
    contextBlocks: [
      {
        title: "Why people call 👍 passive-aggressive",
        body: "It can end a conversation without warmth. Intent may be neutral; reception depends on age and relationship. After vulnerability, lead with words.",
      },
      {
        title: "👍 vs 💯 vs ✅",
        body: "👍 = basic OK/agreement. 💯 = strong “facts/perfect.” ✅ = task done. Different stamps — see [hundred points](/emoji/hundred-points/).",
      },
      {
        title: "👍 vs 🙏",
        body: "🙏 is thanks/please/prayer energy. 👍 is approval. “Thanks 🙏” beats “Thanks 👍” when you want warmth.",
      },
      {
        title: "Work Slack and email",
        body: "Internally, 👍 is fine for quick OK. With clients on important decisions, add “approved” or “received.”",
      },
    ],
    searchIntents: [
      "thumbs up emoji meaning",
      "👍 passive aggressive",
      "thumbs up meaning at work",
      "👍 meaning in texting",
      "is thumbs up rude",
      "👍 Gen Z meaning",
      "👍 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer emotional disclosures with only 👍.",
      "Avoid with contacts in cultures where thumbs-up is rude.",
      "Skip as the only feedback on creative work someone cares about — add a note.",
    ],
    faqs: [
      {
        question: "What does the thumbs up emoji mean?",
        answer:
          "Usually approval, agreement, or “OK.” Context and warmth around it change how soft or curt it feels.",
      },
      {
        question: "Is 👍 rude or passive-aggressive?",
        answer:
          "Usually no — but alone after a long or emotional message it can feel curt to some people, especially younger texters.",
      },
      {
        question: "What does 👍 mean at work?",
        answer:
          "Approval or “got it.” Fine internally; for big decisions, write the confirmation in words too.",
      },
      {
        question: "👍 vs 💯?",
        answer:
          "👍 is basic OK. 💯 is stronger: total yes, elite, or “facts.”",
      },
      {
        question: "Can I use 👍 with my boss?",
        answer:
          "If your workplace is emoji-friendly, yes for quick acks. For conflict or formal approvals, use full sentences.",
      },
      {
        question: "How do I copy 👍?",
        answer:
          "Open the thumbs up page on Allemojipedia, tap 👍 to copy (pick a skin tone if you want), and paste.",
      },
    ],
  },

  "folded-hands": {
    batchId: BATCH_ID,
    searchTitle: "Folded Hands Emoji Meaning (🙏): Thanks, Prayer, Please or High Five?",
    snippetAnswer:
      "🙏 Folded Hands most often means thanks, please, prayer, hope, or gratitude. Some people read it as a high five, but context usually decides.",
    detailedParagraphs: [
      "Folded Hands (🙏) shows two hands pressed together. Unicode links it to prayer and please; real-world texting stretched it to thanks, hope, apology, respect — and Thanksgiving gratitude posts every November.",
      "English chats often use 🙏 for “thank you,” “please,” or “sending prayers” after hard news. Tone can be spiritual or purely polite — belief is optional.",
      "In Japan and some East Asian contexts, similar gestures can signal apology or request. Do not assume every 🙏 is church-coded.",
      "High-five readings exist in some friend groups, but they are less common than thanks/prayer. If you mean a literal high five, say so in words.",
      "After tragedy, empty 🙏 spam can feel performative. One thoughtful “Thinking of you 🙏” with a sentence beats a wall of hands with no care behind them.",
    ],
    textingMeaning:
      "Send 🙏 for thanks, earnest please, hope, or solidarity. It softens asks and warm closings: “Appreciate you 🙏.”",
    socialMeaning:
      "Captions use 🙏 for gratitude posts, giveaways, and memorial tributes. Comments drop 🙏 under recovery stories and hard announcements. Holiday season pairs it with 🦃🍁 — see [Thanksgiving emoji guide](/blog/thanksgiving-emoji-meaning/).",
    caution:
      "Clarify if you mean thanks vs religious prayer in interfaith or secular spaces. Do not use 🙏 as a lazy stand-in for real support.",
    examples: [
      { context: "Thanks", text: "Thanks so much 🙏" },
      { context: "Please", text: "Please help me with this 🙏" },
      { context: "Hope", text: "Hoping it works out 🙏" },
      { context: "Support", text: "Praying for your family 🙏" },
      { context: "Apology", text: "Sorry for the delay 🙏" },
      { context: "Gratitude post", text: "Grateful for this community 🙏" },
      { context: "Thanksgiving", text: "Grateful for you all 🦃🙏" },
      { context: "Ask soft", text: "Could you review this today 🙏" },
    ],
    contextBlocks: [
      {
        title: "Thanks vs prayer",
        body: "“Thanks 🙏” is polite gratitude. “Praying for you 🙏” is spiritual solidarity. If unclear, add a word.",
      },
      {
        title: "🙏 vs 👍",
        body: "👍 is approval/OK. 🙏 is thanks/please/hope — warmer and more earnest.",
      },
      {
        title: "High-five myth",
        body: "Some friend groups treat 🙏 as a high five. Most strangers will read thanks or prayer first — clarify if needed.",
      },
      {
        title: "Holiday gratitude",
        body: "November captions stack 🙏 with turkey and leaves. It is seasonal warmth, not only religion.",
      },
    ],
    searchIntents: [
      "folded hands emoji meaning",
      "🙏 meaning in texting",
      "🙏 thank you or prayer",
      "🙏 high five meaning",
      "what does 🙏 mean",
      "🙏 emoji copy and paste",
      "folded hands emoji thanksgiving",
    ],
    whenNotToUse: [
      "Do not spam 🙏 under tragedy posts without real words.",
      "Avoid assuming religious intent when the sender may only mean thanks.",
      "Skip as a substitute for apology content — say what you are sorry for.",
    ],
    faqs: [
      {
        question: "What does the folded hands emoji mean?",
        answer:
          "Usually thanks, please, prayer, hope, or gratitude. Context and wording decide which reading fits.",
      },
      {
        question: "Does 🙏 mean thank you or prayer?",
        answer:
          "Both are common. “Thanks 🙏” is gratitude; “praying for you 🙏” is spiritual support. Read the sentence.",
      },
      {
        question: "Is 🙏 a high five?",
        answer:
          "Sometimes in specific friend groups, but most people read thanks or prayer first. Clarify if you mean high five.",
      },
      {
        question: "🙏 vs 👍?",
        answer:
          "👍 is OK/approval. 🙏 is warmer thanks, please, or hope.",
      },
      {
        question: "Can I use 🙏 at work?",
        answer:
          "Yes for polite thanks in casual teams. For formal requests, write the ask clearly and keep 🙏 optional.",
      },
      {
        question: "How do I copy 🙏?",
        answer:
          "Open the folded hands page on Allemojipedia, tap 🙏 to copy, and paste into your chat.",
      },
    ],
  },

  "hundred-points": {
    batchId: BATCH_ID,
    searchTitle: "Hundred Points Emoji Meaning (💯): Keep It Real, Facts or Perfect?",
    snippetAnswer:
      "💯 Hundred Points means “keep it 100,” total agreement, perfection, or “facts.” It stamps something as real, correct, or elite — stronger than a plain 👍.",
    detailedParagraphs: [
      "Hundred Points (💯) comes from the perfect exam-score mark. Online it evolved into “keep it 100” — honesty, authenticity, and full agreement. That slang reading drives most modern searches.",
      "People drop 💯 after opinions they endorse (“said what needed to be said 💯”) or after performances that scored perfectly. Alone it can mean “I agree completely” without fluff.",
      "It stacks with 🔥 for hype: skill plus truth (“that verse 🔥💯”). Compared with 👍, 💯 is the louder stamp — not a mild OK.",
      "Gen Z and millennial comment culture use 💯 under hot takes, bars, and motivational posts. Overuse turns it into aesthetic spam; save it for statements you stand behind.",
      "In arguments, “I’m right 💯” can escalate. At work, casual teams accept it as praise; formal approvals still need words. Never 💯-endorse claims you have not checked.",
    ],
    textingMeaning:
      "Send 💯 to agree hard, praise honesty, or mark something as perfect. It is a truth/quality stamp, not a romance emoji.",
    socialMeaning:
      "Comments use 💯 under hot takes, verse bars, and “no cap” captions. Creators add it when they want authenticity energy.",
    caution:
      "💯 on misinformation makes you look like you endorse it. Avoid as a smug closer in fights. Skip in formal documents where slang stamps look childish.",
    examples: [
      { context: "Agreement", text: "Facts 💯" },
      { context: "Honesty", text: "Keep it 100 💯" },
      { context: "Praise", text: "That verse 💯" },
      { context: "Work win", text: "Presentation was 💯" },
      { context: "Advice", text: "This tip 💯" },
      { context: "Hype stack", text: "Fit is fire 🔥💯" },
      { context: "Support take", text: "You said it 💯" },
      { context: "Self standard", text: "Giving 💯 today" },
    ],
    contextBlocks: [
      {
        title: "Keep it 100",
        body: "Slang reading: be real, no fake energy. 💯 certifies authenticity as much as a perfect score.",
      },
      {
        title: "💯 vs 🔥 vs 👍",
        body: "🔥 is heat/hype. 👍 is basic OK. 💯 is perfect score / full truth. Together 🔥💯 means elite and correct — see [fire](/emoji/fire/) and [thumbs up](/emoji/thumbs-up/).",
      },
      {
        title: "💯 vs ✅",
        body: "✅ often means task done. 💯 means quality/agreement, not checklist completion.",
      },
      {
        title: "Is 💯 flirty?",
        body: "Not by itself. With compliments it can amplify praise, but it is not a romance substitute for ❤️ or 😍.",
      },
    ],
    searchIntents: [
      "hundred points emoji meaning",
      "💯 meaning in texting",
      "keep it 100 emoji",
      "💯 meaning on Instagram",
      "what does 💯 mean",
      "💯 vs 🔥",
      "💯 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 💯 endorse claims you have not checked.",
      "Avoid as a smug closer in fights.",
      "Skip in formal documents where slang stamps look childish.",
    ],
    faqs: [
      {
        question: "What does the 💯 emoji mean?",
        answer:
          "Full agreement, perfection, or “keep it real” — a perfect-score stamp of approval.",
      },
      {
        question: "Does 💯 mean keep it 100?",
        answer:
          "Often yes — authenticity and honesty. It also still means “perfect.”",
      },
      {
        question: "💯 vs 👍?",
        answer:
          "👍 is basic OK. 💯 is stronger: total yes / elite / facts.",
      },
      {
        question: "💯 vs 🔥?",
        answer:
          "🔥 is heat and hype. 💯 is truth/perfect score. They stack well for “elite and correct.”",
      },
      {
        question: "Is 💯 flirty?",
        answer:
          "Not by itself. It amplifies praise but is not a romance emoji.",
      },
      {
        question: "How do I copy 💯?",
        answer:
          "Open the hundred points page on Allemojipedia, tap 💯 to copy, and paste into your app.",
      },
    ],
  },
};
