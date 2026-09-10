import type { EmojiBatchEnrichment } from "./types";

/**
 * Indexing S-tier rewrite — pages already in GSC “Crawled – currently not indexed”
 * (❤️ 💀 🥺). Hand-expanded uniqueness beyond prior P0 batches for re-crawl quality.
 */
const BATCH_ID = "47-indexing-stier-gsc";

export const batch47IndexingStierGsc: Record<string, EmojiBatchEnrichment> = {
  "red-heart": {
    batchId: BATCH_ID,
    searchTitle: "Red Heart Emoji Meaning (❤️): Love, Friendship & Texting Tone",
    snippetAnswer:
      "❤️ Red Heart means love, affection, warmth, or strong appreciation. It can be romantic with a crush or partner, and purely caring with family and close friends — relationship context decides.",
    detailedParagraphs: [
      "Red Heart (❤️) is the default digital heart — the symbol people search when a message feels warmer than words alone. Unicode defines it as the classic love heart; every major keyboard puts ❤️ first among colored hearts.",
      "In romance, ❤️ softens goodnights, “miss you” texts, and early “I care” moments without typing “I love you” too soon. One heart after a thoughtful reply often lands as affection, not a full confession.",
      "Friends, siblings, and parents use ❤️ constantly for gratitude and support. “Thanks for showing up ❤️” is platonic warmth. The same glyph to a new match after one date can read flirty — history and timing matter more than the icon.",
      "Searchers comparing hearts should treat ❤️ as the strongest universal default. 🩷 feels cuter/softer, 💜 can mean deep friendship or fandom, 🖤 often signals aesthetic or grief-adjacent tone. When unsure, red is the clearest “I care.”",
      "On Instagram and TikTok, comment ❤️ is low-effort approval that still feels warmer than a silent like. In captions it tags couple posts, memorials, and “we love this” brand energy — read the photo before assuming romance.",
    ],
    textingMeaning:
      "Send ❤️ for love, gratitude, or emotional support. Alone it can mean “love you”; with words it softens apologies, congrats, and long-distance check-ins. Stacks (❤️❤️) intensify without changing the core meaning.",
    socialMeaning:
      "Public hearts signal approval and warmth. Private DMs carry more weight — a ❤️ in a one-to-one thread is stronger evidence of care than a comment heart under a viral post.",
    caution:
      "A lone ❤️ to a coworker, client, or stranger can feel too intimate. After a breakup, ❤️ may reopen the door — say “friends only” in words if that is what you mean.",
    examples: [
      { context: "Romantic", text: "Miss you already ❤️" },
      { context: "Friendship", text: "Thanks for showing up today ❤️" },
      { context: "Family", text: "Proud of you ❤️" },
      { context: "Support", text: "I'm here if you need me ❤️" },
      { context: "Goodnight", text: "Sleep well ❤️" },
      { context: "From a crush", text: "Had a really good time ❤️" },
      { context: "Caption", text: "Weekend with my people ❤️" },
      { context: "Work-casual", text: "You saved the launch ❤️" },
    ],
    contextBlocks: [
      {
        title: "Quick read: romantic or friendly?",
        body: "Romantic signals: private chat, repeated hearts, compliments, late-night timing. Friendly signals: group chat, thank-you context, same ❤️ they send everyone. One heart is weak evidence; a pattern is stronger.",
      },
      {
        title: "❤️ from a girl or guy",
        body: "Warmth or affection either way. Pair with how often they heart you versus others, and whether the thread is already flirty. See also our [flirty emoji guide](/blog/flirty-emoji-meanings-romantic-or-friendly/).",
      },
      {
        title: "❤️ vs 🩷 vs 💜",
        body: "🩷 softer/cuter; 💜 friendship/fandom/spiritual in some circles; ❤️ classic and strongest default for genuine affection.",
      },
      {
        title: "❤️ vs 😍",
        body: "😍 often means “I love this” (photo, outfit, pizza). ❤️ more often means “I care about you.” Both can flirt — 😍 is louder admiration.",
      },
      {
        title: "Work and school",
        body: "Casual teams may accept ❤️ as warm thanks. Formal Slack, email, or first-contact messages should prefer 👍 or plain text.",
      },
    ],
    searchIntents: [
      "red heart emoji meaning",
      "❤️ meaning in texting",
      "❤️ meaning from a girl",
      "❤️ meaning from a guy",
      "red heart vs pink heart",
      "heart emoji meaning",
      "❤️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send ❤️ alone if it could be misread as romantic interest.",
      "Avoid in HR, legal, or cold professional outreach.",
      "Skip ❤️ mid-argument if it might look dismissive instead of caring.",
    ],
    faqs: [
      {
        question: "What does the red heart emoji mean?",
        answer:
          "❤️ usually means love, affection, warmth, or strong appreciation. Romantic with partners; often platonic with family and close friends.",
      },
      {
        question: "What does ❤️ mean from a girl?",
        answer:
          "Warmth or affection — sometimes flirty, sometimes friendly. Check how often she hearts your chats and whether the conversation is already personal.",
      },
      {
        question: "What does ❤️ mean from a guy?",
        answer:
          "Same core meaning: care or appreciation. In a dating thread it often leans interest; among guy friends it can still be solid platonic support.",
      },
      {
        question: "Is ❤️ only romantic?",
        answer:
          "No. Parents, siblings, and best friends use it constantly. Relationship context and message wording decide the tone.",
      },
      {
        question: "❤️ vs 💕 or 💖?",
        answer:
          "❤️ is the classic solid love heart. Two-heart or sparkling variants often feel cuter or more playful; red remains the strongest default.",
      },
      {
        question: "How do I copy ❤️?",
        answer:
          "Open the red heart page on Allemojipedia, tap ❤️ to copy, and paste into WhatsApp, iMessage, Instagram, or any app.",
      },
    ],
  },

  skull: {
    batchId: BATCH_ID,
    searchTitle: "Skull Emoji Meaning (💀): Gen Z “I’m Dead,” TikTok & Texting",
    snippetAnswer:
      "💀 Skull in modern texting usually means “I’m dead” from laughter, shock, cringe, or disbelief — not literal death. It is a deadpan Gen Z reaction on TikTok, Instagram, and group chats.",
    detailedParagraphs: [
      "Skull (💀) is one of the most searched slang emojis because the meaning flipped. Unicode still shows a skull; Gen Z and meme culture use it as figurative death from comedy, secondhand embarrassment, or pure disbelief.",
      "Short replies do the work: “bro 💀”, “the ending 💀”, “help 💀.” The tone is drier than 😂 — more “I cannot believe this” than belly-laugh. That dryness is why 💀 replaced older laugh stacks in many teen and twenty-something threads.",
      "TikTok and Instagram comment sections trained the habit. Chaotic clips, roasts, and plot twists collect 💀 as low-effort proof you watched and felt the absurdity. Creators read skull spikes as “this landed.”",
      "Literal uses still exist: Halloween, horror, gaming, pirate flags, true-crime aesthetics. Words like “costume,” “October,” or “horror movie” flip the register back to bones-and-spooky.",
      "If someone shares grief, illness, or real danger, never answer with 💀. Older relatives may also read it literally and panic — add words or pick 😂 when the audience is mixed.",
    ],
    textingMeaning:
      "Send 💀 when a joke ends you, someone says something outrageous, or cringe hits hard. It replaces typing “I’m dead” or “I can’t” in fast chats. Pair with a few words if the topic could be misread as dark.",
    socialMeaning:
      "Public 💀 is a mute-button reaction: you engaged without quoting the post. In DMs among meme-fluent friends it feels affectionate. In serious channels it can look cold.",
    caution:
      "Never use 💀 on death, diagnosis, or trauma news. Keep it out of professional email unless the workplace is openly meme-native. Do not use 💀 to threaten — platforms may treat that as harassment.",
    examples: [
      { context: "Laughing", text: "That joke killed me 💀" },
      { context: "Shock", text: "She really said that 💀" },
      { context: "TikTok", text: "The ending 💀" },
      { context: "Embarrassment", text: "I just watched myself on camera 💀" },
      { context: "Instagram", text: "This caption 💀" },
      { context: "Cringe", text: "Why did I send that text 💀" },
      { context: "Sports", text: "That missed shot 💀" },
      { context: "Halloween", text: "Costume night 💀🎃" },
    ],
    contextBlocks: [
      {
        title: "💀 vs 😂 vs 😭",
        body: "😂 is classic loud laugh. 😭 can be meme tears or real sadness. 💀 is deadpan “I’m deceased” — often funnier-awkward than cheerful laughter.",
      },
      {
        title: "💀 vs 🗿",
        body: "🗿 is stone-faced / unbothered deadpan. 💀 is “this destroyed me.” Different flavors of internet chill.",
      },
      {
        title: "From a girl or guy",
        body: "Same slang for most people. In flirt threads 💀 can mean “you’re ridiculous (affectionately).” It is rarely a romantic heart substitute — see [❤️](/emoji/red-heart/) for that.",
      },
      {
        title: "When parents misread it",
        body: "If a relative asks “is everything okay?”, explain the meme: 💀 = laughing/shock, not danger. Switch to clearer emojis with mixed-age groups.",
      },
    ],
    searchIntents: [
      "skull emoji meaning",
      "💀 meaning in texting",
      "skull emoji Gen Z meaning",
      "💀 meaning on TikTok",
      "what does skull emoji mean",
      "💀 emoji copy and paste",
      "does skull emoji mean death",
    ],
    whenNotToUse: [
      "Never use 💀 when someone shares death, diagnosis, or trauma.",
      "Avoid with bosses, clients, or teachers unless you know they use internet slang.",
      "Do not use 💀 to threaten or intimidate.",
    ],
    faqs: [
      {
        question: "What does the skull emoji mean?",
        answer:
          "In Gen Z texting, 💀 usually means “I’m dead” from laughter, shock, or cringe — figurative, not literal death.",
      },
      {
        question: "What does 💀 mean on TikTok?",
        answer:
          "A strong reaction to something funny, awkward, or shocking in a video or comment — often next to “bro,” “nah,” or “help.”",
      },
      {
        question: "Does 💀 mean someone died?",
        answer:
          "In everyday slang, no. Literal readings appear in Halloween, horror, or when the surrounding words are about real danger.",
      },
      {
        question: "Is 💀 rude?",
        answer:
          "Among friends who share meme humor, no. On serious topics or with strangers, it can feel dismissive or morbid.",
      },
      {
        question: "💀 vs 😂 — which should I use?",
        answer:
          "Use 😂 for clear cheerful laughter. Use 💀 when the reaction is “I can’t believe this” or secondhand embarrassment.",
      },
      {
        question: "How do I copy 💀?",
        answer:
          "Open the skull page on Allemojipedia, tap 💀 to copy, and paste anywhere — or search “skull” on your emoji keyboard.",
      },
    ],
  },

  "pleading-face": {
    batchId: BATCH_ID,
    searchTitle: "Pleading Face Emoji Meaning (🥺): Cute, Begging, Soft or Flirty?",
    snippetAnswer:
      "🥺 Pleading Face means begging, cuteness, vulnerability, or soft emotional appeal. In flirting it makes a request feel shy and hard to refuse; with friends it is often just adorable emphasis.",
    detailedParagraphs: [
      "Pleading Face (🥺) is the puppy-dog look of emoji keyboards — glossy eyes, tiny frown, maximum “please?” energy. People search it when a crush or friend drops 🥺 and they need to know if it is cute, needy, or flirty.",
      "As a request softener, 🥺 turns blunt asks into gentle ones: pizza, one more episode, a photo, a second chance. It says “I’m asking nicely” without sounding entitled — unless you spam it after a clear no.",
      "Flirting loves 🥺 because vulnerability reads as sweet. “Miss you 🥺” or “come over 🥺” feels softer than the same line bare. Combined with late-night timing, it often leans romantic.",
      "Empathy uses exist too. Reacting to rough news with 🥺 can mean “that hurts, I feel you” — quieter than 😭, less dramatic than a paragraph.",
      "Compared with 😔 (quietly sad) and 😭 (loud emotion or meme tears), 🥺 stays in the cute-plea lane. If the topic is money, health, or boundaries, write the ask in plain words and keep 🥺 optional.",
    ],
    textingMeaning:
      "Use 🥺 when you want something, feel soft/sad-cute, or want a message to sound less blunt. It turns commands into pleas. One 🥺 is charming; a campaign of 🥺 after rejection is pressure.",
    socialMeaning:
      "Captions use 🥺 for soft-launch affection, pet photos, and “don’t be mad” energy. Comments drop 🥺 under adorable or emotional clips as a gentle reaction.",
    caution:
      "Overusing 🥺 can feel manipulative — especially after someone already said no. In work asks or serious negotiations, clear language beats puppy-dog eyes.",
    examples: [
      { context: "Ask", text: "Can we get pizza tonight 🥺" },
      { context: "Flirty", text: "Come hang out 🥺" },
      { context: "Apology", text: "Please don't be mad 🥺" },
      { context: "Missing someone", text: "I miss you 🥺" },
      { context: "Pet photo", text: "Look at him 🥺" },
      { context: "Empathy", text: "That sounds exhausting 🥺" },
      { context: "Soft launch", text: "Can't stop smiling 🥺❤️" },
      { context: "Friend ask", text: "Please come I don't want to go alone 🥺" },
    ],
    contextBlocks: [
      {
        title: "Is 🥺 flirty?",
        body: "Often yes in crush chats. With close friends it may be pure cute emphasis. Read the rest of the thread — see [flirty emoji meanings](/blog/flirty-emoji-meanings-romantic-or-friendly/).",
      },
      {
        title: "🥺 from a girl or guy",
        body: "Usually a gentle ask or soft affection. Late-night + personal compliments raise the romantic odds. Daytime logistics (“can you bring charger 🥺”) stay practical.",
      },
      {
        title: "🥺 vs 😭 vs 😔",
        body: "😭 is loud emotion or meme tears. 😔 is quiet disappointment. 🥺 is pleading / adorable vulnerability — “please” more than “I’m destroyed.”",
      },
      {
        title: "🥺 vs ❤️",
        body: "❤️ states care or love. 🥺 asks or softens. Together (“miss you 🥺❤️”) they stack affection + plea.",
      },
      {
        title: "Consent and boundaries",
        body: "If someone said no, repeating 🥺 pressures them. Respect the answer; save pleading faces for light, reversible asks.",
      },
    ],
    searchIntents: [
      "pleading face emoji meaning",
      "🥺 meaning in texting",
      "🥺 from a girl",
      "🥺 from a guy",
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
        question: "What does the pleading face emoji mean?",
        answer:
          "🥺 means soft begging, cuteness, or vulnerable emotion — “please,” “miss you,” or “that’s adorable/sad.”",
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
        question: "What does 🥺 mean from a guy?",
        answer:
          "Same soft-plea or cute emphasis. In a dating context it often signals interest; in logistics it can just mean “please.”",
      },
      {
        question: "🥺 vs 👀?",
        answer:
          "👀 is “I’m watching / interested / spill.” 🥺 is emotional pleading or soft vibes, not curiosity alone.",
      },
      {
        question: "Can 🥺 be annoying?",
        answer:
          "Yes if it replaces a clear request or pressures someone after a no. One 🥺 is sweet; a guilt campaign is not.",
      },
    ],
  },
};
