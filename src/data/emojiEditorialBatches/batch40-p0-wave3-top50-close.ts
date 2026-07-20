import type { EmojiBatchEnrichment } from "./types";

/**
 * P0 Wave 3 — exclusivity for remaining top-50 close search emoji.
 * Differentiation focus: sparkles vs party, clown shade, eyes tea, melt/irony/smirk,
 * kiss variants, soft smiles, hot/sweat, cry spectrum, hands/party, star-struck, secrets.
 */
const BATCH_ID = "40-p0-wave3-top50-close";

export const batch40P0Wave3Top50Close: Record<string, EmojiBatchEnrichment> = {
  "sparkles": {
    batchId: BATCH_ID,
    searchTitle: "Sparkles Emoji Meaning: Magic, Aesthetic, Clean, or Hype?",
    snippetAnswer:
      "✨ Sparkles usually mean magic, shine, aesthetic glow-up, or “this feels special.” They polish captions and compliments more softly than 🎉 party energy or 🔥 hype.",
    detailedParagraphs: [
      "Sparkles (✨) are Unicode’s glitter mark — not a face, not a party blast, just light. Online they signal magic, cleanliness, newness, or “main-character” shine.",
      "Aesthetic culture made ✨ a caption staple: soft selfies, outfit reveals, “clean girl” routines, and “something magical just happened.” One ✨ elevates; stacks feel extra.",
      "In compliments, ✨ says “you look radiant” or “this idea sparkles” without the heat of 🔥 or the crush intensity of 😍. It is polish, not fireworks.",
      "People also use ✨ for literal sparkle (jewelry, night lights) and for “manifesting” vibes. If you mean celebration volume, reach for 🎉; if you mean trending heat, use 🔥.",
    ],
    textingMeaning:
      "Drop ✨ to make a message feel prettier, prouder, or more magical — after a glow-up photo, a win that feels dreamy, or a soft brag.",
    socialMeaning:
      "Captions and bios lean on ✨ for aesthetic branding. Comments use it as gentle praise under beauty, art, and “new era” posts.",
    caution:
      "Overusing ✨ can read try-hard or spammy. Do not rely on ✨ alone for serious apologies or hard news — it can look dismissively cute.",
    examples: [
      { context: "Glow-up", text: "New hair who dis ✨" },
      { context: "Soft compliment", text: "You look amazing tonight ✨" },
      { context: "Aesthetic caption", text: "Sunday reset ✨" },
      { context: "Idea praise", text: "That plan is pure magic ✨" },
      { context: "Product drop", text: "Just launched ✨" },
      { context: "Manifest", text: "Good things coming ✨" },
    ],
    contextBlocks: [
      {
        title: "✨ vs 🎉",
        body: "🎉 is loud celebration — parties, wins, announcements. ✨ is quieter shine: aesthetic, magic, polish. Use 🎉 to cheer; use ✨ to glam.",
      },
      {
        title: "✨ vs 🔥",
        body: "🔥 means hot, elite, or trending. ✨ means pretty, special, or enchanted. A fit can get both; pure heat favors 🔥.",
      },
      {
        title: "Caption polish",
        body: "Creators sandwich words in ✨ for soft branding. It reads cleaner than stacks of party emojis.",
      },
      {
        title: "Work chats",
        body: "Fine for casual “nice work ✨” in friendly teams. Skip in formal client mail.",
      },
    ],
    searchIntents: [
      "sparkles emoji meaning",
      "✨ meaning in texting",
      "✨ vs 🎉",
      "sparkles emoji aesthetic",
      "what does ✨ mean",
      "✨ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not answer grief or conflict with lone ✨ — it can seem tone-deaf.",
      "Avoid spamming ✨ under every post; it loses meaning.",
      "Skip as a substitute for clear professional thanks in formal settings.",
    ],
    faqs: [
      {
        question: "What does ✨ mean in texting?",
        answer:
          "Magic, shine, aesthetic praise, or “this feels special.” Softer than party or fire emojis.",
      },
      {
        question: "✨ vs 🎉 — which should I send?",
        answer:
          "Send 🎉 for loud celebration. Send ✨ for glow, beauty, or magical vibes.",
      },
      {
        question: "Is ✨ flirty?",
        answer:
          "Mildly, if paired with compliments — but it is not as direct as 😘 or 😍.",
      },
      {
        question: "Why do people put ✨ in captions?",
        answer:
          "It frames the post as polished, aesthetic, or “new era” without shouting.",
      },
      {
        question: "Can ✨ mean clean or fresh?",
        answer:
          "Yes — glow-ups, resets, and “fresh start” posts often use ✨ that way.",
      },
    ],
  },

  "clown-face": {
    batchId: BATCH_ID,
    searchTitle: "Clown Face Emoji Meaning: Joke, Insult, or Calling Someone Out?",
    snippetAnswer:
      "🤡 Clown Face often means “you’re a clown,” calling out foolishness, fake behavior, or embarrassing takes — shade first, circus second.",
    detailedParagraphs: [
      "Clown Face (🤡) started as a circus character and became internet shorthand for ridicule. In slang, sending 🤡 rarely means “happy birthday party” — it means someone looks foolish.",
      "Call-out culture uses 🤡 under bad takes, hypocrisy, or cringe flexes. One 🤡 is a jab; “clown behavior 🤡” spells the insult out.",
      "Self-deprecating friends also slap 🤡 on their own mistakes (“I wore socks with sandals 🤡”). Tone flips from attack to shared embarrassment.",
      "Literal carnival or Halloween use still exists, but DMs and comments skew sarcastic. If you mean playful costume vibes only, add words so it is not read as shade.",
    ],
    textingMeaning:
      "Use 🤡 to roast a bad idea, admit your own L, or mock nonsense. Alone it usually reads as “this is clownery.”",
    socialMeaning:
      "Comments drop 🤡 under controversial posts and ratio’d opinions. Captions use it for ironic self-roast more than celebration.",
    caution:
      "🤡 is easy to escalate into bullying. Do not send it about someone’s looks, trauma, or identity. In work chats it can look hostile.",
    examples: [
      { context: "Call-out", text: "He really said that 🤡" },
      { context: "Self-roast", text: "I trusted the GPS again 🤡" },
      { context: "Group chat", text: "Clown behavior unlocked 🤡" },
      { context: "Sports", text: "That call was 🤡" },
      { context: "Irony", text: "Expert mode engaged 🤡" },
      { context: "Reply", text: "Stop playing 🤡" },
    ],
    contextBlocks: [
      {
        title: "🤡 shade vs joke",
        body: "Aimed at someone else, 🤡 is usually insult. On yourself, it is self-aware humor. Target decides tone.",
      },
      {
        title: "🤡 vs 💀",
        body: "💀 often means “I’m dead” from laughter. 🤡 means “that’s foolish.” Different jokes.",
      },
      {
        title: "Public comments",
        body: "Piling 🤡 on strangers can look like harassment. Prefer private roast with people who share the bit.",
      },
      {
        title: "From a crush",
        body: "Rarely flirty. If they 🤡 your message, they may be teasing — or actually dunking. Check warmth elsewhere.",
      },
    ],
    searchIntents: [
      "clown emoji meaning",
      "🤡 meaning in texting",
      "clown face emoji shade",
      "what does 🤡 mean",
      "🤡 meaning from a girl",
      "🤡 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤡 someone during a serious apology or vulnerable share.",
      "Avoid as a reply to marginalized people speaking about harm.",
      "Skip in professional or client-facing threads.",
    ],
    faqs: [
      {
        question: "What does 🤡 mean in texting?",
        answer:
          "Usually “you’re being ridiculous” or “that was clown behavior.” Self-use means admitting an L.",
      },
      {
        question: "Is 🤡 always an insult?",
        answer:
          "Mostly when aimed outward. Friends use it playfully; strangers may take it harshly.",
      },
      {
        question: "What does 🤡 mean from a girl?",
        answer:
          "Often teasing or calling out nonsense. Soften with context — not the same as 😂 alone.",
      },
      {
        question: "🤡 vs 🤢?",
        answer:
          "🤢 is disgust. 🤡 is folly/hypocrisy. Different flavors of rejection.",
      },
      {
        question: "Can 🤡 be literal?",
        answer:
          "Yes for costumes and circuses, but slang shade dominates online.",
      },
    ],
  },

  "eyes": {
    batchId: BATCH_ID,
    searchTitle: "Eyes Emoji Meaning: Watching, Tea, Suspicion, or Interest?",
    snippetAnswer:
      "👀 Eyes usually mean “I’m watching,” “spill the tea,” curiosity, or mild suspicion. It is the internet’s side-eye stare without a full face.",
    detailedParagraphs: [
      "Eyes (👀) are a pair of looking eyeballs — Unicode’s watchful glance. In chat they mean attention is locked: gossip, drama, or “I see what you did.”",
      "Tea culture made 👀 famous. “👀” alone under a vague story often means “details please” or “we’re listening.” It invites the plot without typing paragraphs.",
      "It can also flag attraction or interest (“saw your story 👀”) — softer than 😍, nosier than 👍. Timing and relationship decide if it feels flirty or just curious.",
      "Suspicion readings are common too: shady invoices, odd excuses, someone posting an ex. Pair with words if you mean support rather than judgment.",
    ],
    textingMeaning:
      "Send 👀 when something is juicy, suspicious, or worth noticing. Alone it can mean “tell me more” or “I see you.”",
    socialMeaning:
      "Story replies and comments use 👀 for tea, plot twists, and “we’re watching this unfold.” Brands rarely use it unless going for gossip-adjacent humor.",
    caution:
      "👀 can feel creepy if sent repeatedly to someone who did not invite attention. Avoid under sensitive posts where staring reads as gawking.",
    examples: [
      { context: "Tea", text: "Wait what happened 👀" },
      { context: "Story reply", text: "👀" },
      { context: "Suspicion", text: "Interesting excuse 👀" },
      { context: "Flirty notice", text: "Saw you out tonight 👀" },
      { context: "Group chat", text: "Plot twist incoming 👀" },
      { context: "Call-out soft", text: "We see you 👀" },
    ],
    contextBlocks: [
      {
        title: "👀 tea vs 🤔 thinking",
        body: "🤔 is processing or doubt with a thoughtful face. 👀 is watching/gossip energy — more “show me” than “hmm.”",
      },
      {
        title: "Flirty or nosy?",
        body: "After a selfie, 👀 can mean interest. After drama, it means spectatorship. Thread topic decides.",
      },
      {
        title: "Workplace",
        body: "Risky — can look passive-aggressive on shared docs or Slack. Prefer clear questions.",
      },
      {
        title: "Stacked 👀👀👀",
        body: "Amplifies “this is big” or “everyone is watching.” Can tip into pile-on vibes.",
      },
    ],
    searchIntents: [
      "eyes emoji meaning",
      "👀 meaning in texting",
      "👀 meaning tea",
      "what does 👀 mean from a girl",
      "👀 vs 🤔",
      "👀 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 👀 someone’s private crisis like entertainment.",
      "Avoid repeated 👀 DMs that feel like stalking.",
      "Skip in formal professional disagreement — it reads snarky.",
    ],
    faqs: [
      {
        question: "What does 👀 mean in texting?",
        answer:
          "Watching, curiosity, tea request, or mild suspicion. Context decides which.",
      },
      {
        question: "Does 👀 mean spill the tea?",
        answer:
          "Often yes — especially alone under a vague hint. It asks for the story.",
      },
      {
        question: "What does 👀 mean from a girl?",
        answer:
          "Could be flirty notice, gossip interest, or “I saw that.” Check the chat tone.",
      },
      {
        question: "👀 vs 😳?",
        answer:
          "😳 is embarrassed/shocked. 👀 is observing. Different reactions.",
      },
      {
        question: "Is 👀 rude?",
        answer:
          "Can be, if it feels like gawking. With friends who share tea culture, it is normal.",
      },
    ],
  },

  "melting-face": {
    batchId: BATCH_ID,
    searchTitle: "Melting Face Emoji Meaning: Embarrassed, Hot, Overwhelmed, or Done?",
    snippetAnswer:
      "🫠 Melting Face usually means secondhand embarrassment, awkward overwhelm, or “I’m dissolving” — hotter and goopier than simple 😅 awkward laughs.",
    detailedParagraphs: [
      "Melting Face (🫠) shows a smile sliding into a puddle. Unicode added it for heat and melting; Gen Z texting made it the face of cringe, exhaustion, and soft collapse.",
      "Embarrassment is the breakout meaning: you said something weird, your crush liked an old photo, or a parent joined the group chat. 🫠 = “I cannot exist right now.”",
      "It also covers heat (weather, spicy attraction) and burnout (“brain is melting”). The smile stays, so it often feels funny-miserable rather than pure despair.",
      "Compared with 🥺 pleading softness or 😭 loud emotion, 🫠 is specifically dissolving — awkward, overheated, or done with dignity intact as goo.",
    ],
    textingMeaning:
      "Send 🫠 when you are cringing, overheating, or overwhelmed in a humorous way. Alone it can mean “I’m cooked.”",
    socialMeaning:
      "Captions use 🫠 for awkward storytimes and heatwave posts. Comments drop it under cringe videos and “too real” fails.",
    caution:
      "Do not answer real medical heat emergencies with meme 🫠. Also avoid melting jokes about someone’s serious panic attack without care.",
    examples: [
      { context: "Cringe", text: "I waved at a stranger 🫠" },
      { context: "Heat", text: "This weather has me 🫠" },
      { context: "Crush fail", text: "They saw my typo 🫠" },
      { context: "Burnout", text: "Monday already 🫠" },
      { context: "Secondhand", text: "Why did they post that 🫠" },
      { context: "Flirty heat", text: "You looking like that has me 🫠" },
    ],
    contextBlocks: [
      {
        title: "🫠 embarrassment vs 😅",
        body: "😅 is nervous laugh / mild awkward. 🫠 is fuller dissolve — stronger cringe or overwhelm.",
      },
      {
        title: "🫠 vs 🥵",
        body: "🥵 is hot/aroused heat with a face still solid. 🫠 is melting — awkward or temperature collapse.",
      },
      {
        title: "🫠 vs 🥺",
        body: "🥺 asks soft/puppy. 🫠 collapses from awkwardness. Not the same plea energy.",
      },
      {
        title: "Work chats",
        body: "Okay for casual “that meeting 🫠” with close teammates. Skip with executives.",
      },
    ],
    searchIntents: [
      "melting face emoji meaning",
      "🫠 meaning in texting",
      "🫠 meaning embarrassed",
      "melting face vs hot face",
      "what does 🫠 mean",
      "🫠 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not mock someone’s sincere distress with 🫠 alone.",
      "Avoid as the only reply to harassment reports.",
      "Skip in formal status updates.",
    ],
    faqs: [
      {
        question: "What does 🫠 mean in texting?",
        answer:
          "Embarrassment, awkward overwhelm, heat, or “I’m done” — often humorous collapse.",
      },
      {
        question: "Is 🫠 flirty?",
        answer:
          "It can be (“you melt me”), but cringe and heatwave uses are more common.",
      },
      {
        question: "🫠 vs 😅?",
        answer:
          "😅 is light awkward laugh. 🫠 is stronger dissolve/cringe.",
      },
      {
        question: "Can 🫠 mean burnout?",
        answer:
          "Yes — brain-melt Mondays and deadline goo are popular readings.",
      },
      {
        question: "What does 🫠 mean from a girl?",
        answer:
          "Often secondhand cringe, cute overwhelm, or flirty melt — read the thread.",
      },
    ],
  },

  "upside-down-face": {
    batchId: BATCH_ID,
    searchTitle: "Upside-Down Face Emoji Meaning: Irony, Awkward Smile, or Passive Aggression?",
    snippetAnswer:
      "🙃 Upside-Down Face usually means irony, forced cheer, awkward acceptance, or “I’m fine (not fine).” It smiles while flipping the tone.",
    detailedParagraphs: [
      "Upside-Down Face (🙃) is a classic smile rotated 180°. Unicode’s playful invert became chat code for sarcasm, coping, and polite pain.",
      "Irony is the main job: “Great, another meeting 🙃” means the opposite of great. The smile stays so it feels dry rather than angry.",
      "Awkward friendliness also lives here — ending a weird silence, accepting bad news lightly, or soft-launching chaos. It is less hostile than 😒 unamused.",
      "Some people use 🙃 as a quirky smile with no shade. Relationship history matters: with a sarcastic friend it is a bit; with a boss it may confuse.",
    ],
    textingMeaning:
      "Send 🙃 when something is awkwardly okay, ironically fine, or mildly cursed. Alone it often means “lol help.”",
    socialMeaning:
      "Captions use 🙃 for chaotic-good storytelling and dry humor. Comments drop it under relatable misfortune.",
    caution:
      "🙃 can read passive-aggressive in work Slack. If you are actually upset, say so — upside-down smiles hide tone poorly across generations.",
    examples: [
      { context: "Irony", text: "Love when plans cancel last minute 🙃" },
      { context: "Awkward", text: "So that happened 🙃" },
      { context: "Coping", text: "Still smiling 🙃" },
      { context: "Sarcasm", text: "Perfect timing as always 🙃" },
      { context: "Self-aware", text: "I'm thriving 🙃" },
      { context: "Soft end", text: "Anyway 🙃" },
    ],
    contextBlocks: [
      {
        title: "🙃 irony vs 😏 smug",
        body: "😏 is flirt/smug knowingness. 🙃 is upside-down coping or sarcasm — not usually seductive.",
      },
      {
        title: "🙃 vs 😒",
        body: "😒 is openly unimpressed. 🙃 wraps annoyance in a smile. Milder surface, still salty.",
      },
      {
        title: "Gen Z coping",
        body: "“I’m fine 🙃” often means not fine, but joking about it.",
      },
      {
        title: "Professional risk",
        body: "Managers may miss sarcasm. Prefer plain language for blockers and deadlines.",
      },
    ],
    searchIntents: [
      "upside down face emoji meaning",
      "🙃 meaning in texting",
      "🙃 meaning irony",
      "what does 🙃 mean",
      "🙃 passive aggressive",
      "🙃 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🙃 as the only reply to someone’s real crisis.",
      "Avoid with people who take emoji literally and will think you are just happy.",
      "Skip in formal client updates where sarcasm reads unprofessional.",
    ],
    faqs: [
      {
        question: "What does 🙃 mean in texting?",
        answer:
          "Irony, awkward acceptance, or forced cheer — a smile that flips the mood.",
      },
      {
        question: "Is 🙃 passive-aggressive?",
        answer:
          "It can be. Often it is dry humor; in tense threads it may signal annoyance.",
      },
      {
        question: "🙃 vs 😊?",
        answer:
          "😊 is sincere warmth. 🙃 frequently means the opposite of the words beside it.",
      },
      {
        question: "What does 🙃 mean from a girl?",
        answer:
          "Same range: joking irony or soft frustration. Check if the message is sarcastic.",
      },
      {
        question: "Can 🙃 be friendly?",
        answer:
          "Yes — quirky smile with no shade, especially in playful friend groups.",
      },
    ],
  },

  "smirking-face": {
    batchId: BATCH_ID,
    searchTitle: "Smirking Face Emoji Meaning: Flirty, Smug, Suggestive, or Knowing?",
    snippetAnswer:
      "😏 Smirking Face usually means flirtation, smug confidence, innuendo, or “I know something you don’t.” It is cheekier than a plain smile.",
    detailedParagraphs: [
      "Smirking Face (😏) shows a half-smile with raised brows — Unicode’s knowing look. Texting turned it into the default suggestive face.",
      "Flirting loves 😏: “miss me yet 😏” or a late-night reply that implies more than it says. It is bolder than 😉 and less hearts-and-roses than 😘.",
      "Smug readings are equally common — winning an argument, being right, or teasing a friend who got caught. The smirk says “told you so.”",
      "Innuendo threads use 😏 as a wink toward double meanings. If you only mean friendly teasing, add words; alone, many people assume flirt or shade.",
    ],
    textingMeaning:
      "Send 😏 to flirt, tease, or look smug. Alone after a compliment it often means interest; after a debate it means victory energy.",
    socialMeaning:
      "Comments use 😏 under thirsty posts and gossip reveals. Captions add it for playful confidence or spicy jokes.",
    caution:
      "Unsolicited 😏 to coworkers or new contacts can feel creepy. Stacked 😏 under someone’s photos may read as objectifying.",
    examples: [
      { context: "Flirty", text: "You free later 😏" },
      { context: "Innuendo", text: "Interesting choice of words 😏" },
      { context: "Smug", text: "I called it 😏" },
      { context: "Tease", text: "Someone's jealous 😏" },
      { context: "Story reply", text: "Looking good 😏" },
      { context: "Banter", text: "Oh really 😏" },
    ],
    contextBlocks: [
      {
        title: "😏 flirt vs 😘 kiss",
        body: "😘 sends an air-kiss affection. 😏 suggests without committing — more sly than sweet.",
      },
      {
        title: "😏 vs 😉",
        body: "😉 is a lighter wink/joke. 😏 is heavier smug or suggestive energy.",
      },
      {
        title: "From a crush",
        body: "Often interest. Confirm with how they text overall — some people smirk-tease everyone.",
      },
      {
        title: "Work danger",
        body: "Almost never safe in professional chat. Reads as inappropriate innuendo.",
      },
    ],
    searchIntents: [
      "smirking face emoji meaning",
      "😏 meaning in texting",
      "😏 meaning from a girl",
      "😏 flirty or smug",
      "what does 😏 mean",
      "😏 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 😏 to people who have not invited flirty tone.",
      "Avoid in workplace, school admin, or client messages.",
      "Skip under serious posts where smirk energy feels mocking.",
    ],
    faqs: [
      {
        question: "What does 😏 mean in texting?",
        answer:
          "Flirtation, smugness, or suggestive teasing — a knowing half-smile.",
      },
      {
        question: "Is 😏 always flirty?",
        answer:
          "No. It can mean “I told you so” or playful shade. Context decides.",
      },
      {
        question: "What does 😏 mean from a girl?",
        answer:
          "Often flirty or teasing. With close friends it may just be smug banter.",
      },
      {
        question: "😏 vs 😘?",
        answer:
          "😘 is an affectionate kiss blow. 😏 is sly interest without the kiss.",
      },
      {
        question: "Can 😏 be rude?",
        answer:
          "Yes if it feels mocking or creepy. Soften with clear friendly words when unsure.",
      },
    ],
  },

  "face-blowing-a-kiss": {
    batchId: BATCH_ID,
    searchTitle: "Face Blowing a Kiss Emoji Meaning: Flirty Kiss, Thanks, or Goodbye?",
    snippetAnswer:
      "😘 Face Blowing a Kiss usually means affection, flirtation, or a playful goodbye kiss. It is warmer and more intentional than a plain 😗 kissing face.",
    detailedParagraphs: [
      "Face Blowing a Kiss (😘) shows a smiling face sending a kiss. It is one of the most common affectionate closers in texting and DMs.",
      "Romance uses it heavily: goodnight texts, “miss you,” and soft flirting. One 😘 can mean “mwah”; stacks amp the sweetness.",
      "Friends and family also send 😘 as cute thanks or bye — especially in cultures where cheek-kiss energy is normal. It is not always a crush signal.",
      "Compared with 😗 (simple kiss face without the blow), 😘 feels more directed and expressive. Compared with 😍, it is action (sending a kiss) rather than starry admiration.",
    ],
    textingMeaning:
      "Use 😘 to flirt, say goodnight sweetly, or close a warm message. Alone it often means “kiss / love this / bye cutie.”",
    socialMeaning:
      "Captions and comments use 😘 for fans, partners, and soft promo love. Influencers blow-kiss reply to supportive comments.",
    caution:
      "A lone 😘 to a coworker or new match can escalate intimacy fast. After a breakup it may reopen romantic hope.",
    examples: [
      { context: "Flirty goodnight", text: "Sleep well 😘" },
      { context: "Thanks", text: "You're the best 😘" },
      { context: "Miss you", text: "Can't wait to see you 😘" },
      { context: "Caption", text: "Date night 😘" },
      { context: "Friend bye", text: "Talk tomorrow 😘" },
      { context: "Story reply", text: "Cute pic 😘" },
    ],
    contextBlocks: [
      {
        title: "😘 vs 😗",
        body: "😗 is a simpler kissing face — often lighter or more neutral. 😘 actively blows a kiss and usually feels flirting or affectionate.",
      },
      {
        title: "😘 vs 😍",
        body: "😍 is heart-eyes admiration. 😘 is sending affection. Crush energy can use both; 😘 is the kiss action.",
      },
      {
        title: "From a girl or guy",
        body: "Often warmth or interest. Platonic friend groups still use it — check history of ❤️ vs jokes.",
      },
      {
        title: "Professional",
        body: "Usually too intimate. Prefer 🙏 or thanks in words.",
      },
    ],
    searchIntents: [
      "face blowing a kiss emoji meaning",
      "😘 meaning in texting",
      "😘 meaning from a girl",
      "😘 vs 😗",
      "what does 😘 mean",
      "😘 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 😘 alone to someone who may misread romantic intent.",
      "Avoid in HR, legal, or first-contact professional messages.",
      "Skip if the other person asked for space after dating.",
    ],
    faqs: [
      {
        question: "What does 😘 mean in texting?",
        answer:
          "Affection, flirtation, or a playful kiss goodbye — warmer than a plain smile.",
      },
      {
        question: "What does 😘 mean from a girl?",
        answer:
          "Often fondness or flirting. Close friends may use it platonically.",
      },
      {
        question: "😘 vs 😗?",
        answer:
          "😘 blows a kiss and feels more expressive; 😗 is a simpler kiss face.",
      },
      {
        question: "Is 😘 only romantic?",
        answer:
          "No — family and friends use it too. Romance is common but not exclusive.",
      },
      {
        question: "Can I use 😘 at work?",
        answer:
          "Rarely appropriate. Keep workplace thanks emoji-light.",
      },
    ],
  },

  "kissing-face": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Face Emoji Meaning: Soft Kiss, Neutral Affection, or Awkward?",
    snippetAnswer:
      "😗 Kissing Face is a simple closed-eyes kiss — softer and less theatrical than 😘 blowing a kiss. It can read cute, polite, or slightly awkward depending on the chat.",
    detailedParagraphs: [
      "Kissing Face (😗) shows puckered lips with neutral eyes closed. It is the quieter cousin of kiss emojis — affection without the blowing-hand flourish.",
      "People send 😗 for light kisses, soft goodbyes, or mild flirting that feels less charged than 😘. In some threads it lands almost formal-cute.",
      "Because it lacks heart eyes or a blown kiss, some readers find 😗 oddly blank or awkward — especially alone. Pairing with words helps.",
      "Variants nearby (😙 with smiling eyes, 😚 with closed eyes) shift warmth. 😗 stays the basic kiss face: present, but not the loudest romantic signal.",
    ],
    textingMeaning:
      "Use 😗 for a gentle kiss vibe or mild affection. Alone it can mean “kiss” without heavy flirt voltage.",
    socialMeaning:
      "Less common in viral captions than 😘. Appears in soft replies, couple posts, and sticker-like closers.",
    caution:
      "Do not assume 😗 is weaker interest every time — some people just prefer it. Conversely, do not send it to strangers expecting zero romance reading.",
    examples: [
      { context: "Soft goodbye", text: "Night 😗" },
      { context: "Light flirt", text: "Miss your face 😗" },
      { context: "Thanks", text: "Appreciate you 😗" },
      { context: "Couple chat", text: "See you soon 😗" },
      { context: "Friendly", text: "Hugs and kisses 😗" },
      { context: "Caption", text: "Morning mood 😗" },
    ],
    contextBlocks: [
      {
        title: "😗 vs 😘",
        body: "😘 blows a kiss and usually feels more flirty/expressive. 😗 is a simpler kiss face — quieter affection.",
      },
      {
        title: "😗 vs 😚",
        body: "😚 often feels cozier (closed eyes). 😗 can feel plainer; both are soft kisses.",
      },
      {
        title: "Awkward reading",
        body: "Some friend groups joke that lone 😗 looks stiff. Add ❤️ or words if you mean clear warmth.",
      },
      {
        title: "From a crush",
        body: "Still affection. Less “thirsty” than 😏 or 😘 stacks, but not platonic by default.",
      },
    ],
    searchIntents: [
      "kissing face emoji meaning",
      "😗 meaning in texting",
      "😗 vs 😘",
      "what does 😗 mean",
      "kissing face vs blowing kiss",
      "😗 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid as a cold closer after an argument — it can feel dismissive.",
      "Do not send to professional contacts.",
      "Skip if your recipient finds kiss faces too intimate.",
    ],
    faqs: [
      {
        question: "What does 😗 mean in texting?",
        answer:
          "A simple kiss — soft affection, goodbye, or light flirt, usually milder than 😘.",
      },
      {
        question: "Why does 😗 feel awkward?",
        answer:
          "The blankish expression can look stiff alone. Context and pairing fix most of that.",
      },
      {
        question: "😗 vs 😘 — which is flirty?",
        answer:
          "Both can be. 😘 is typically read as more intentional flirt; 😗 is quieter.",
      },
      {
        question: "Is 😗 romantic?",
        answer:
          "Often mildly yes, but friends use it too. Relationship history decides.",
      },
      {
        question: "What does 😗 mean from a guy?",
        answer:
          "Usually soft affection or a cute closer — less smirk, more kiss.",
      },
    ],
  },

  "grinning-face": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Face Emoji Meaning: Happy, Friendly, or Too Intense?",
    snippetAnswer:
      "😀 Grinning Face is a big open smile — classic happiness or friendly enthusiasm. It is brighter and more “hello!” than a soft ☺️ smiling face.",
    detailedParagraphs: [
      "Grinning Face (😀) is Unicode’s basic huge smile with open eyes. It reads as cheerful, eager, or sometimes a bit intense depending on platform art.",
      "People use 😀 for good news, greetings, and uncomplicated joy. It is less laugh-cry than 😂 and less shy than 😊.",
      "In some chats, lone 😀 can feel oddly formal or “dad energy” next to cooler slang faces. Younger texters may prefer 😊, 😁, or just words.",
      "Still, it remains a clear positive signal when you want happy without irony. Stacks of 😀 amp excitement; one softens a short reply.",
    ],
    textingMeaning:
      "Send 😀 to show clear happiness or friendly warmth. Good for “that’s great!” moments without meme chaos.",
    socialMeaning:
      "Captions use 😀 for wholesome positivity. Brands like it for approachable smiles; Gen Z comments may prefer other faces.",
    caution:
      "A bare 😀 after bad news can look tone-deaf. In sarcastic threads it may be misread as forced cheer.",
    examples: [
      { context: "Good news", text: "You got it 😀" },
      { context: "Greeting", text: "Morning 😀" },
      { context: "Excited", text: "Can't wait for Friday 😀" },
      { context: "Friendly reply", text: "Sounds perfect 😀" },
      { context: "Photo comment", text: "Love this energy 😀" },
      { context: "Thanks", text: "Thanks for the update 😀" },
    ],
    contextBlocks: [
      {
        title: "😀 vs 😊",
        body: "😊 is softer, warmer, often shyer happiness. 😀 is a bigger open grin — brighter and more exuberant.",
      },
      {
        title: "😀 vs 😁",
        body: "😁 shows teeth with smiling eyes — often gleeful. 😀 is the classic open grin baseline.",
      },
      {
        title: "Dad-text stereotype",
        body: "Some young users see lone 😀 as earnest/older. Still fine for sincere joy.",
      },
      {
        title: "Work appropriate",
        body: "Usually safe for casual positivity. Prefer fewer emoji in formal mail.",
      },
    ],
    searchIntents: [
      "grinning face emoji meaning",
      "😀 meaning in texting",
      "😀 vs 😊",
      "what does 😀 mean",
      "grinning face emoji",
      "😀 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not grin-reply to grief or anger with only 😀.",
      "Avoid spam stacks that look robotic.",
      "Skip if the conversation is ironic and a plain grin breaks the bit.",
    ],
    faqs: [
      {
        question: "What does 😀 mean in texting?",
        answer:
          "Straightforward happiness or friendly enthusiasm — a big open smile.",
      },
      {
        question: "Is 😀 sarcastic?",
        answer:
          "Rarely by default. Irony usually needs 🙃 or pointed words.",
      },
      {
        question: "😀 vs 😃?",
        answer:
          "Both are open grins; 😃 often feels slightly more excited with bigger eyes on many platforms.",
      },
      {
        question: "Why do some people avoid 😀?",
        answer:
          "Taste — it can feel overly basic or intense compared with softer smiles.",
      },
      {
        question: "Can I use 😀 at work?",
        answer:
          "Yes in casual teams. Keep it light and purposeful.",
      },
    ],
  },

  "smiling-face": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face Emoji Meaning: Warm, Polite, Soft Happy, or Formal?",
    snippetAnswer:
      "☺️ Smiling Face is a soft, rosy smile — warmer and gentler than 😀. It often means kindness, thanks, or quiet happiness rather than loud excitement.",
    detailedParagraphs: [
      "Smiling Face (☺️) is the classic optional-style smile with blush-like warmth. It feels polite, wholesome, and gently happy.",
      "Texters use ☺️ for thank-you notes, soft hellos, and “this made me smile” energy. It is less goofy than 😁 and less romantic than 🥰.",
      "In some cultures and older chats, ☺️ is the default friendly closer. Younger users may swap to 😊 (smiling face with smiling eyes) for a similar soft tone.",
      "Because it is calm, ☺️ rarely reads as hype or flirt by itself. Add ❤️ or 😘 if you need clearer affection voltage.",
    ],
    textingMeaning:
      "Send ☺️ to be warm, polite, or softly happy. Excellent after thanks, compliments received, or kind check-ins.",
    socialMeaning:
      "Captions use ☺️ for cozy, wholesome posts. Comments drop it as gentle approval without loud reaction energy.",
    caution:
      "Overly frequent ☺️ in tense negotiations can look passive. It is not a substitute for clear boundaries.",
    examples: [
      { context: "Thanks", text: "That means a lot ☺️" },
      { context: "Soft hello", text: "Hi again ☺️" },
      { context: "Kind reply", text: "Happy to help ☺️" },
      { context: "Wholesome", text: "This made my day ☺️" },
      { context: "Caption", text: "Simple joys ☺️" },
      { context: "Polite close", text: "Take care ☺️" },
    ],
    contextBlocks: [
      {
        title: "☺️ vs 😀",
        body: "😀 is a big open grin. ☺️ is softer, blushier warmth — polite happy rather than exuberant.",
      },
      {
        title: "☺️ vs 😊",
        body: "😊 shows smiling eyes and often feels modern-cute. ☺️ is the classic soft smile; many treat them as cousins.",
      },
      {
        title: "Flirt level",
        body: "Low by default. Warm, not thirsty.",
      },
      {
        title: "Work chats",
        body: "One of the safer happy faces for friendly professional tone.",
      },
    ],
    searchIntents: [
      "smiling face emoji meaning",
      "☺️ meaning in texting",
      "☺️ vs 😊",
      "what does ☺️ mean",
      "smiling face emoji",
      "☺️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use soft smiles to paper over conflict without addressing it.",
      "Avoid as the only response to detailed questions that need answers.",
      "Skip if your audience associates it with sarcasm in your friend group.",
    ],
    faqs: [
      {
        question: "What does ☺️ mean in texting?",
        answer:
          "Soft happiness, warmth, or polite kindness — gentler than a big grin.",
      },
      {
        question: "☺️ vs 😊?",
        answer:
          "Both are warm smiles. 😊 often feels cuter/modern; ☺️ is classic soft blush smile.",
      },
      {
        question: "Is ☺️ flirty?",
        answer:
          "Usually not strongly. It is friendly warmth unless paired with flirt words.",
      },
      {
        question: "Can I use ☺️ at work?",
        answer:
          "Yes — one of the safer positive faces in casual professional chat.",
      },
      {
        question: "Why use ☺️ instead of 😀?",
        answer:
          "When you want soft and kind rather than loud excitement.",
      },
    ],
  },

  "smiling-face-with-hearts": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Hearts Emoji Meaning: Adore, Soft Love, or Crush?",
    snippetAnswer:
      "🥰 Smiling Face with Hearts means adoring affection, soft love, or “you’re so cute I could melt” — warmer and cuddlier than starry 😍 crush eyes.",
    detailedParagraphs: [
      "Smiling Face with Hearts (🥰) shows a blissful smile surrounded by hearts. Unicode framed it as love and affection; texting made it the cute-adoration face.",
      "Unlike 😍 (heart-eyes admiration often tied to attraction or awe), 🥰 feels snuggly: gratitude, puppy love, wholesome crush energy, or “I appreciate you so much.”",
      "Couples use 🥰 for soft romance; friends use it for wholesome hype (“you’re the sweetest 🥰”). It is less thirsty than 🥵 and less kiss-action than 😘.",
      "On social, 🥰 tags adorable pets, proposals, and kind gestures. If you mean pure visual thirst, 😍 or 🔥 may land closer.",
    ],
    textingMeaning:
      "Send 🥰 when something (or someone) feels adorable, loved, or emotionally warm. Alone it often means “aww / I adore this.”",
    socialMeaning:
      "Captions use 🥰 for soft love posts. Comments drop it under cute content and wholesome couple photos.",
    caution:
      "A sudden 🥰 from a new match can feel intense. In work chats it may read overly familiar.",
    examples: [
      { context: "Crush soft", text: "You always know what to say 🥰" },
      { context: "Pet pic", text: "Look at that face 🥰" },
      { context: "Thanks", text: "This gift made me cry 🥰" },
      { context: "Couple", text: "Date night perfection 🥰" },
      { context: "Friend", text: "Proud of you 🥰" },
      { context: "Story reply", text: "Adorable 🥰" },
    ],
    contextBlocks: [
      {
        title: "🥰 vs 😍",
        body: "😍 is heart-eyes admiration — often crush/attraction or “wow.” 🥰 is cuddly adoration and soft love surrounding the face.",
      },
      {
        title: "🥰 vs ❤️",
        body: "❤️ is the love symbol. 🥰 shows the feeling on a face — more emotive and cute.",
      },
      {
        title: "From a girl or guy",
        body: "Usually genuine fondness. Softer than smirk-flirt; stronger than a plain smile.",
      },
      {
        title: "Friendship use",
        body: "Common for wholesome appreciation without full romantic claim — still warm.",
      },
    ],
    searchIntents: [
      "smiling face with hearts emoji meaning",
      "🥰 meaning in texting",
      "🥰 vs 😍",
      "what does 🥰 mean",
      "🥰 meaning from a girl",
      "🥰 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🥰 a serious complaint thread — it can seem dismissive.",
      "Avoid with strict professional contacts.",
      "Skip if you only mean polite thanks and fear romantic misread.",
    ],
    faqs: [
      {
        question: "What does 🥰 mean in texting?",
        answer:
          "Adoring affection, soft love, or “this is so cute” warmth.",
      },
      {
        question: "🥰 vs 😍?",
        answer:
          "😍 is admiring/attracted heart-eyes. 🥰 is snuggly hearts-around-face love.",
      },
      {
        question: "Is 🥰 romantic?",
        answer:
          "Often yes, but friends use it for wholesome love too.",
      },
      {
        question: "What does 🥰 mean from a girl?",
        answer:
          "Fondness or crush-soft energy. Check how she uses 😘 and ❤️ too.",
      },
      {
        question: "Can 🥰 mean thank you?",
        answer:
          "Yes — grateful affection, especially after kind gestures.",
      },
    ],
  },

  "hot-face": {
    batchId: BATCH_ID,
    searchTitle: "Hot Face Emoji Meaning: Heatwave, Spicy Attractive, or Overheated?",
    snippetAnswer:
      "🥵 Hot Face means overheating, spicy attraction, or “that’s hot” thirst — a solid flushed face, not the dissolving awkwardness of 🫠.",
    detailedParagraphs: [
      "Hot Face (🥵) shows a sweaty, flushed face with tongue out. Unicode covers heat; slang covers both weather and attractiveness.",
      "As a compliment, 🥵 is thirstier than 🔥 in some friend groups — “you look 🥵” leans bodily attraction. 🔥 can mean elite hype without the same flush.",
      "Literal heatwave and workout posts use 🥵 for “I’m dying it’s so hot.” Spicy food and hard workouts get the same face.",
      "Keep 🥵 away from professional threads. It is easy to misread as sexual even when you meant temperature.",
    ],
    textingMeaning:
      "Send 🥵 for heat, exertion, or spicy attraction. Alone under a selfie it often means “you look hot.”",
    socialMeaning:
      "Comments use 🥵 under fit checks and summer posts. Captions pair it with workouts, chili challenges, and heat advisories.",
    caution:
      "Unsolicited 🥵 on someone’s photos can feel objectifying. Do not joke 🥵 about medical heatstroke.",
    examples: [
      { context: "Flirty", text: "You look 🥵 tonight" },
      { context: "Weather", text: "This heat is criminal 🥵" },
      { context: "Workout", text: "Leg day destroyed me 🥵" },
      { context: "Spicy food", text: "That salsa ended me 🥵" },
      { context: "Story reply", text: "🥵" },
      { context: "Concert", text: "Crowd was insane 🥵" },
    ],
    contextBlocks: [
      {
        title: "🥵 vs 🫠",
        body: "🫠 melts from awkwardness or overwhelm. 🥵 stays a hot/flushed face — heat or thirst.",
      },
      {
        title: "🥵 vs 🔥",
        body: "🔥 is broad “elite/hot/trending.” 🥵 is more bodily heat or spicy attraction on a face.",
      },
      {
        title: "Thirst reading",
        body: "Under thirst traps, 🥵 is rarely about weather. Under beach sun posts, it might be literal.",
      },
      {
        title: "Work",
        body: "Unsafe — too easy to read as inappropriate.",
      },
    ],
    searchIntents: [
      "hot face emoji meaning",
      "🥵 meaning in texting",
      "🥵 meaning from a girl",
      "🥵 vs 🔥",
      "what does 🥵 mean",
      "🥵 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 🥵 to coworkers or clients.",
      "Avoid objectifying strangers with lone 🥵 comments.",
      "Skip as a joke about someone’s panic or illness.",
    ],
    faqs: [
      {
        question: "What does 🥵 mean in texting?",
        answer:
          "Overheating, spicy attraction, or intense exertion — a hot flushed face.",
      },
      {
        question: "Is 🥵 flirty?",
        answer:
          "Often yes under photos. Weather and workout uses are also common.",
      },
      {
        question: "🥵 vs 🔥?",
        answer:
          "🔥 is hype/hot praise broadly. 🥵 is more visceral heat or thirst on a face.",
      },
      {
        question: "🥵 vs 🫠?",
        answer:
          "🫠 is melting/cringe dissolve. 🥵 is hot and sweaty, not goo.",
      },
      {
        question: "What does 🥵 mean from a girl?",
        answer:
          "Could be thirst compliment or literal heat — check the photo and caption.",
      },
    ],
  },

  "grinning-face-with-sweat": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Face with Sweat Emoji Meaning: Awkward, Relieved, or Nervous Laugh?",
    snippetAnswer:
      "😅 Grinning Face with Sweat means nervous laughter, awkward relief, or “haha that was close” — lighter than 😂 pure funny and less melted than 🫠 cringe.",
    detailedParagraphs: [
      "Grinning Face with Sweat (😅) smiles through a single sweat drop. Unicode’s nervous grin became the default awkward-laugh face in texting.",
      "Use it when something is funny because it is uncomfortable: social slips, close calls, mild failure. “I forgot their name 😅” is the classic pattern.",
      "It also marks relief after stress (“made the train 😅”) or polite deflection when you do not want full 😂 energy.",
      "Compared with 😂, 😅 is not “this is hilarious” — it is “this is awkward/okay/lol help.” Compared with 🫠, it stays a grin, not a puddle.",
    ],
    textingMeaning:
      "Send 😅 for awkward humor, nervous energy, or relieved “we survived.” Alone it often softens an admission.",
    socialMeaning:
      "Captions use 😅 for relatable fails. Comments drop it under secondhand embarrassment that is still light.",
    caution:
      "😅 after someone’s serious hurt can look like you are laughing at them. Switch to empathy words when stakes are high.",
    examples: [
      { context: "Awkward admit", text: "I sent that to the wrong chat 😅" },
      { context: "Relief", text: "Finished with one minute left 😅" },
      { context: "Nervous laugh", text: "Well that was something 😅" },
      { context: "Soft fail", text: "Burned the toast again 😅" },
      { context: "Polite dodge", text: "Maybe next time 😅" },
      { context: "Close call", text: "Almost got caught 😅" },
    ],
    contextBlocks: [
      {
        title: "😅 vs 😂",
        body: "😂 is clear laughter. 😅 is nervous/awkward laugh or relieved grin — not peak comedy.",
      },
      {
        title: "😅 vs 🫠",
        body: "🫠 is stronger cringe dissolve. 😅 is a lighter sweat-smile awkward.",
      },
      {
        title: "😅 vs 😥",
        body: "😥 leans sadder relief/disappointment. 😅 keeps a grin.",
      },
      {
        title: "Work chats",
        body: "Common for “sorry for the delay 😅” — okay casually, but overuse looks unconfident.",
      },
    ],
    searchIntents: [
      "grinning face with sweat emoji meaning",
      "😅 meaning in texting",
      "😅 vs 😂",
      "what does 😅 mean",
      "awkward laugh emoji",
      "😅 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😅 someone’s trauma or grief.",
      "Avoid as a non-answer to direct accountability questions.",
      "Skip stacks of 😅 that look like you are minimizing harm.",
    ],
    faqs: [
      {
        question: "What does 😅 mean in texting?",
        answer:
          "Nervous laughter, awkward relief, or a close-call grin.",
      },
      {
        question: "😅 vs 😂?",
        answer:
          "😂 means funny. 😅 means awkward/okay/nervous funny.",
      },
      {
        question: "Is 😅 apologetic?",
        answer:
          "Often softens apologies or admissions, yes.",
      },
      {
        question: "What does 😅 mean from a girl?",
        answer:
          "Same range — awkward laugh or light embarrassment, not usually flirt alone.",
      },
      {
        question: "Can 😅 mean stress?",
        answer:
          "Mildly — sweaty grin under pressure, not full panic.",
      },
    ],
  },

  "crying-face": {
    batchId: BATCH_ID,
    searchTitle: "Crying Face Emoji Meaning: Sad, Hurt, Soft Tears, or Emotional?",
    snippetAnswer:
      "😢 Crying Face means quiet sadness, disappointment, or soft hurt — gentler and less dramatic than 😭 loudly crying.",
    detailedParagraphs: [
      "Crying Face (😢) shows a single tear on a frowning face. It is Unicode’s everyday sad face for hurt feelings and melancholy.",
      "Texters send 😢 for bad days, missed chances, and “that’s sad” empathy. It can be sincere sorrow without the theatrical flood of 😭.",
      "Sometimes 😢 marks touched emotion (a sweet video) but less often than 😭 or 🥹. When the topic is heavy, words still help.",
      "Meme culture uses 😭 more for loud funny-sad; 😢 stays closer to actual sadness for many people — especially outside Gen Z slang circles.",
    ],
    textingMeaning:
      "Use 😢 for soft sadness, sympathy, or disappointment. Alone it can mean “I’m sad” or “that hurts.”",
    socialMeaning:
      "Comments use 😢 under sad news and emotional clips. Captions pair it with heartbreak or rainy-day moods.",
    caution:
      "A lone 😢 may feel thin under real loss — add support. Do not use sad faces to guilt-trip.",
    examples: [
      { context: "Sad news", text: "I'm sorry that happened 😢" },
      { context: "Disappointment", text: "I really wanted to go 😢" },
      { context: "Empathy", text: "That sounds rough 😢" },
      { context: "Miss someone", text: "Wish you were here 😢" },
      { context: "Story", text: "Ended too soon 😢" },
      { context: "Soft hurt", text: "Ouch that stung 😢" },
    ],
    contextBlocks: [
      {
        title: "😢 vs 😭",
        body: "😭 is louder, more dramatic, and often meme-funny. 😢 is quieter sadness and soft hurt.",
      },
      {
        title: "😢 vs 😔",
        body: "😔 is pensive/downcast without a visible tear. 😢 shows crying more explicitly.",
      },
      {
        title: "Support replies",
        body: "😢 plus a sentence beats emoji-only when someone is grieving.",
      },
      {
        title: "Not always literal",
        body: "Mild disappointment texts use 😢 without sobbing — still sincere, just scaled.",
      },
    ],
    searchIntents: [
      "crying face emoji meaning",
      "😢 meaning in texting",
      "😢 vs 😭",
      "what does 😢 mean",
      "crying emoji sad",
      "😢 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not weaponize 😢 to manipulate after you hurt someone.",
      "Avoid meme-sad 😢 when the other person needs practical help.",
      "Skip in formal professional notices of serious incidents — use clear language.",
    ],
    faqs: [
      {
        question: "What does 😢 mean in texting?",
        answer:
          "Quiet sadness, disappointment, or soft sympathy.",
      },
      {
        question: "😢 vs 😭?",
        answer:
          "😢 is softer/quieter. 😭 is louder and more often dramatic or meme-used.",
      },
      {
        question: "Is 😢 always serious?",
        answer:
          "Often sincere, but scale varies from mild letdown to real tears.",
      },
      {
        question: "What does 😢 mean from a girl?",
        answer:
          "Usually genuine soft sadness or empathy — read the topic.",
      },
      {
        question: "Can 😢 mean happy tears?",
        answer:
          "Rarely; happy tears more often use 😭 or 🥹. 😢 skews sad.",
      },
    ],
  },

  "pensive-face": {
    batchId: BATCH_ID,
    searchTitle: "Pensive Face Emoji Meaning: Sad, Reflective, Disappointed, or Quiet?",
    snippetAnswer:
      "😔 Pensive Face means quiet sadness, disappointment, or reflective low mood — downcast without the tear of 😢.",
    detailedParagraphs: [
      "Pensive Face (😔) looks downward with a closed, somber mouth. It signals thoughtfulness mixed with gloom rather than active crying.",
      "People send 😔 for “I’m disappointed,” “that sucks,” or reflective nights. It is softer than angry faces and less wet than 😢.",
      "It can also mean regret after a mistake (“I messed up 😔”) without full apology paragraphs — though words still help.",
      "In group chats, 😔 is a low-energy sad react. If you need help, say so; pensive alone can look like you want space.",
    ],
    textingMeaning:
      "Send 😔 when you feel down, disappointed, or quietly regretful. Alone it often means “not great.”",
    socialMeaning:
      "Captions use 😔 for moody aesthetics and letdown posts. Comments drop it as soft sympathy.",
    caution:
      "Do not leave someone on 😔 after they ask a direct question. Also avoid pensive guilt-trips.",
    examples: [
      { context: "Disappointment", text: "They canceled again 😔" },
      { context: "Low mood", text: "Long day 😔" },
      { context: "Regret", text: "Should've said something 😔" },
      { context: "Empathy", text: "Hate that for you 😔" },
      { context: "Missed chance", text: "So close 😔" },
      { context: "Quiet night", text: "Feeling some type of way 😔" },
    ],
    contextBlocks: [
      {
        title: "😔 vs 😢",
        body: "😢 shows a tear — clearer crying. 😔 is downcast/pensive sadness without the drop.",
      },
      {
        title: "😔 vs 😞",
        body: "Both are disappointed; 😞 often reads more dejected. Many people use them interchangeably.",
      },
      {
        title: "😔 vs 🥺",
        body: "🥺 is pleading/puppy soft. 😔 is low and reflective, not asking.",
      },
      {
        title: "Check-in cue",
        body: "If a friend sends lone 😔, a kind “want to talk?” beats matching emoji only.",
      },
    ],
    searchIntents: [
      "pensive face emoji meaning",
      "😔 meaning in texting",
      "😔 vs 😢",
      "what does 😔 mean",
      "pensive emoji sad",
      "😔 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 😔 to dodge responsibility after you caused harm.",
      "Avoid as the only reply to urgent logistics.",
      "Skip in upbeat professional announcements where it confuses tone.",
    ],
    faqs: [
      {
        question: "What does 😔 mean in texting?",
        answer:
          "Quiet sadness, disappointment, or reflective low mood.",
      },
      {
        question: "😔 vs 😢?",
        answer:
          "😢 cries with a tear. 😔 is somber/downcast without it.",
      },
      {
        question: "Is 😔 depressed?",
        answer:
          "It can signal low mood, but often just temporary disappointment.",
      },
      {
        question: "What does 😔 mean from a guy?",
        answer:
          "Usually letdown or quiet sadness — same as anyone else.",
      },
      {
        question: "Can 😔 mean sorry?",
        answer:
          "Sometimes soft regret. Clear apologies still need words.",
      },
    ],
  },

  "unamused-face": {
    batchId: BATCH_ID,
    searchTitle: "Unamused Face Emoji Meaning: Side-Eye, Annoyed, Done, or Skeptical?",
    snippetAnswer:
      "😒 Unamused Face means annoyance, skepticism, or “I’m not impressed” — flatter and colder than ironic 🙃 smiles.",
    detailedParagraphs: [
      "Unamused Face (😒) shows a sideways glance with a flat mouth. It is the classic “really?” face for irritation and disbelief.",
      "Texters send 😒 when plans flake, jokes miss, or someone is being obvious nonsense. It is shade without clown-level roast.",
      "It can be playful among friends (“you’re late 😒”) or genuinely cold. Relationship temperature decides if it is banter or warning.",
      "Compared with 🙄 eye-roll, 😒 is a held stare of displeasure. Compared with 😕, it is less confused and more judgmental.",
    ],
    textingMeaning:
      "Use 😒 to show you are unimpressed, mildly annoyed, or calling out nonsense. Alone it often means “seriously?”",
    socialMeaning:
      "Comments use 😒 under cringe takes and fake-woke posts. Captions add it for dry complaint energy.",
    caution:
      "😒 escalates conflict fast with sensitive people. In work chat it can look insubordinate or petty.",
    examples: [
      { context: "Annoyed", text: "You're late again 😒" },
      { context: "Skeptical", text: "Sure Jan 😒" },
      { context: "Banter", text: "Wow thanks for nothing 😒" },
      { context: "Call-out", text: "Interesting excuse 😒" },
      { context: "Group chat", text: "Nobody asked 😒" },
      { context: "Tired of it", text: "Here we go 😒" },
    ],
    contextBlocks: [
      {
        title: "😒 vs 🙄",
        body: "🙄 is an active eye-roll. 😒 is an unamused flat stare — both annoyed, different motion.",
      },
      {
        title: "😒 vs 🙃",
        body: "🙃 wraps irony in a smile. 😒 drops the smile and shows displeasure.",
      },
      {
        title: "Playful vs mean",
        body: "With close friends, 😒 can be teasing. With new people, assume it stings.",
      },
      {
        title: "Work",
        body: "Risky. Prefer direct feedback without contempt faces.",
      },
    ],
    searchIntents: [
      "unamused face emoji meaning",
      "😒 meaning in texting",
      "😒 meaning from a girl",
      "😒 vs 🙄",
      "what does 😒 mean",
      "😒 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 😒 someone sharing vulnerability.",
      "Avoid in professional disagreement threads.",
      "Skip if you actually need a calm resolution — it pours fuel.",
    ],
    faqs: [
      {
        question: "What does 😒 mean in texting?",
        answer:
          "Annoyance, skepticism, or “I’m not amused.”",
      },
      {
        question: "Is 😒 flirty?",
        answer:
          "Rarely. At best playful irritation with someone you already tease.",
      },
      {
        question: "😒 vs 🙄?",
        answer:
          "Both show displeasure; 🙄 rolls eyes, 😒 side-eyes unimpressed.",
      },
      {
        question: "What does 😒 mean from a girl?",
        answer:
          "Usually she’s unimpressed or playfully annoyed — check severity of the topic.",
      },
      {
        question: "Can 😒 be a joke?",
        answer:
          "Yes among friends. Alone to strangers it often reads cold.",
      },
    ],
  },

  "face-with-rolling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Face with Rolling Eyes Emoji Meaning: Eye-Roll, Irritation, or Whatever?",
    snippetAnswer:
      "🙄 Face with Rolling Eyes means irritation, disbelief, or “whatever” dismissiveness — an active eye-roll rather than a flat 😒 stare.",
    detailedParagraphs: [
      "Face with Rolling Eyes (🙄) shows eyes mid-roll. It is the digital “ugh” for nonsense, nagging, and predictable drama.",
      "People send 🙄 when someone states the obvious, brags poorly, or repeats a tired argument. It dismisses without a full paragraph.",
      "Playful eye-rolls exist in sibling and couple banter. Outside that trust, 🙄 feels contemptuous.",
      "Stacking 🙄🙄 amplifies scorn. For lighter skepticism, 🤔 or words may land kinder.",
    ],
    textingMeaning:
      "Send 🙄 to show you are done, unimpressed, or mocking mild absurdity. Alone it means “eye roll.”",
    socialMeaning:
      "Comments use 🙄 under hypocritical posts. Captions add it for relatable annoyance storytelling.",
    caution:
      "🙄 in group chats can publicly embarrass someone. At work it looks unprofessional.",
    examples: [
      { context: "Dismissive", text: "Of course he said that 🙄" },
      { context: "Obvious", text: "Thanks captain obvious 🙄" },
      { context: "Banter", text: "You always do this 🙄" },
      { context: "Drama", text: "Here comes the speech 🙄" },
      { context: "Sarcasm", text: "Wow groundbreaking 🙄" },
      { context: "Tired", text: "Another group project update 🙄" },
    ],
    contextBlocks: [
      {
        title: "🙄 vs 😒",
        body: "😒 is unamused side-eye stillness. 🙄 is the motion of rolling eyes — often snarkier.",
      },
      {
        title: "🙄 vs 🤡",
        body: "🤡 calls someone a clown. 🙄 dismisses the moment without the full insult label.",
      },
      {
        title: "Couples banter",
        body: "Some partners eye-roll affectionately. New relationships should be careful.",
      },
      {
        title: "Public pile-ons",
        body: "Mass 🙄 comments can turn into bullying. Consider restraint.",
      },
    ],
    searchIntents: [
      "rolling eyes emoji meaning",
      "🙄 meaning in texting",
      "🙄 meaning from a girl",
      "🙄 vs 😒",
      "what does 🙄 mean",
      "🙄 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not eye-roll someone’s mental health share.",
      "Avoid in manager/client communication.",
      "Skip when you need collaboration, not contempt.",
    ],
    faqs: [
      {
        question: "What does 🙄 mean in texting?",
        answer:
          "Irritation, disbelief, or dismissive “whatever” energy.",
      },
      {
        question: "Is 🙄 rude?",
        answer:
          "Often yes outside playful banter. It signals contempt easily.",
      },
      {
        question: "🙄 vs 😒?",
        answer:
          "Both annoyed; 🙄 is the eye-roll action, 😒 is flat unamused.",
      },
      {
        question: "What does 🙄 mean from a girl?",
        answer:
          "She’s annoyed, unimpressed, or teasing — tone of the rest of the message decides.",
      },
      {
        question: "Can 🙄 be funny?",
        answer:
          "Yes in shared sarcasm. Alone it can still sting.",
      },
    ],
  },

  "raising-hands": {
    batchId: BATCH_ID,
    searchTitle: "Raising Hands Emoji Meaning: Praise, Celebration, Amen, or Hype?",
    snippetAnswer:
      "🙌 Raising Hands means celebration, praise, agreement, or “amen/hallelujah” energy — both hands up, not the single clap of 👏.",
    detailedParagraphs: [
      "Raising Hands (🙌) shows two raised palms. Unicode ties it to celebration and gesture; culture added praise, worship, and hype.",
      "People use 🙌 for wins (“you did that 🙌”), grateful praise, and concert energy. It is bigger than a nod and warmer than plain 👍.",
      "In faith and gospel contexts, 🙌 can mean praise or “amen.” In secular group chats it is usually pure hype.",
      "Compared with 👏 clapping, 🙌 is arms-up celebration rather than applause rhythm. Both cheer; 🙌 feels more bodily joyful.",
    ],
    textingMeaning:
      "Send 🙌 to hype someone, celebrate a win, or agree enthusiastically. Alone it can mean “yes / praise / let’s go.”",
    socialMeaning:
      "Captions use 🙌 for launch days and gratitude posts. Comments drop it as energetic approval under achievements.",
    caution:
      "In mixed cultural chats, be aware 🙌 can read worshipful. Also avoid empty 🙌 spam that feels automated.",
    examples: [
      { context: "Win", text: "You crushed it 🙌" },
      { context: "Praise", text: "All the credit to this team 🙌" },
      { context: "Agreement", text: "That plan 🙌" },
      { context: "Concert", text: "Best night ever 🙌" },
      { context: "Gratitude", text: "Thank you thank you 🙌" },
      { context: "Hype", text: "Friday finally 🙌" },
    ],
    contextBlocks: [
      {
        title: "🙌 vs 👏",
        body: "👏 is applause/clapping. 🙌 is both hands raised in celebration or praise — more “hallelujah/hype” than clap track.",
      },
      {
        title: "🙌 vs 🎉",
        body: "🎉 is party popper celebration object. 🙌 is a human praise gesture. Often paired.",
      },
      {
        title: "Faith contexts",
        body: "In church communities 🙌 can mean worship praise. Secular use is still common for hype.",
      },
      {
        title: "Work wins",
        body: "Friendly teams use 🙌 for ship days. Fine casually; keep formal emails cleaner.",
      },
    ],
    searchIntents: [
      "raising hands emoji meaning",
      "🙌 meaning in texting",
      "🙌 vs 👏",
      "what does 🙌 mean",
      "raising hands emoji praise",
      "🙌 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🙌 tragic news as if it were a win.",
      "Avoid spam-raising hands under every comment.",
      "Skip if celebration would feel insensitive to the topic.",
    ],
    faqs: [
      {
        question: "What does 🙌 mean in texting?",
        answer:
          "Celebration, praise, hype, or strong agreement — hands up.",
      },
      {
        question: "🙌 vs 👏?",
        answer:
          "👏 applauds. 🙌 raises both hands in praise/celebration.",
      },
      {
        question: "Is 🙌 religious?",
        answer:
          "It can be in faith contexts; elsewhere it is secular hype.",
      },
      {
        question: "Can 🙌 mean thank you?",
        answer:
          "Yes — grateful praise energy.",
      },
      {
        question: "Is 🙌 okay at work?",
        answer:
          "Usually yes for casual team wins.",
      },
    ],
  },

  "party-popper": {
    batchId: BATCH_ID,
    searchTitle: "Party Popper Emoji Meaning: Celebration, Congrats, Party, or Launch?",
    snippetAnswer:
      "🎉 Party Popper means celebration, congratulations, or party time — louder and more event-like than aesthetic ✨ sparkles.",
    detailedParagraphs: [
      "Party Popper (🎉) is a confetti cannon mid-burst. It is Unicode’s default “we’re celebrating” mark for birthdays, launches, and wins.",
      "Texters send 🎉 for congrats (“you got the job 🎉”), New Year energy, and group-chat hype. Stacks mean bigger party.",
      "On social, 🎉 tags announcements and milestone posts. Brands love it for release day. It is volume celebration, not soft glitter.",
      "Nearby, 🎊 confetti ball is similar party debris with a slightly different prop. ✨ sparkles glam without the party-blast meaning.",
    ],
    textingMeaning:
      "Drop 🎉 to congratulate, announce celebration, or amp good news. Alone it means “congrats / let’s party.”",
    socialMeaning:
      "Captions and stories flood 🎉 on birthdays, launches, and wins. Comments use it as instant congrats.",
    caution:
      "🎉 under somber posts is tone-deaf. Also avoid party-spamming serious work threads.",
    examples: [
      { context: "Congrats", text: "You did it 🎉" },
      { context: "Birthday", text: "Happy birthday 🎉" },
      { context: "Launch", text: "We are live 🎉" },
      { context: "New Year", text: "Hello 2026 🎉" },
      { context: "Group chat", text: "Weekend trip booked 🎉" },
      { context: "Offer accepted", text: "Signed the lease 🎉" },
    ],
    contextBlocks: [
      {
        title: "🎉 vs ✨",
        body: "✨ is magic/aesthetic shine. 🎉 is party celebration blast. Cheer with 🎉; glam with ✨.",
      },
      {
        title: "🎉 vs 🎊",
        body: "Both are party. 🎉 is a popper shooting confetti; 🎊 is a confetti ball — similar intent, different prop.",
      },
      {
        title: "🎉 vs 🙌",
        body: "🙌 is hands-up praise. 🎉 is the party object. Often used together for big wins.",
      },
      {
        title: "Work launches",
        body: "Common and friendly for ship announcements in casual cultures.",
      },
    ],
    searchIntents: [
      "party popper emoji meaning",
      "🎉 meaning in texting",
      "🎉 vs ✨",
      "🎉 vs 🎊",
      "what does 🎉 mean",
      "🎉 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not celebrate with 🎉 when the topic is grief or harm.",
      "Avoid as sarcasm unless your audience is sure to get the joke.",
      "Skip endless 🎉 in already-noisy threads where it adds clutter.",
    ],
    faqs: [
      {
        question: "What does 🎉 mean in texting?",
        answer:
          "Celebration, congratulations, or party energy.",
      },
      {
        question: "🎉 vs ✨?",
        answer:
          "🎉 is loud party congrats. ✨ is softer sparkle/aesthetic magic.",
      },
      {
        question: "🎉 vs 🎊?",
        answer:
          "Same party vibe; different confetti props. Mostly interchangeable.",
      },
      {
        question: "Is 🎉 only for birthdays?",
        answer:
          "No — any win, launch, or festivity.",
      },
      {
        question: "Can 🎉 be professional?",
        answer:
          "Yes for casual congrats and launches; keep formal letters cleaner.",
      },
    ],
  },

  "star-struck": {
    batchId: BATCH_ID,
    searchTitle: "Star-Struck Emoji Meaning: Amazed, Obsessed, Celebrity Crush, or Wow?",
    snippetAnswer:
      "🤩 Star-Struck means amazement, fandom excitement, or “I’m obsessed” — starry eyes that feel more hype-wow than soft-love 😍.",
    detailedParagraphs: [
      "Star-Struck (🤩) shows a grin with star eyes. Unicode frames it as starstruck awe; internet use covers fandom screaming and hype admiration.",
      "Send 🤩 for concerts, celebrity sightings, product drops, and “this is incredible” moments. It is louder wow than polite 😮.",
      "Compared with 😍, 🤩 leans spectacle and excitement — less romantic heart-eyes, more “I can’t believe this exists.” Romance can still use both.",
      "Creators put 🤩 in captions for launches and collabs. Comments drop it under talent videos and glow-up reveals.",
    ],
    textingMeaning:
      "Use 🤩 when you are impressed, hyped, or fanning out. Alone it means “wow / obsessed / amazing.”",
    socialMeaning:
      "Captions use 🤩 for exciting announcements. Comments are instant hype under impressive posts.",
    caution:
      "Overusing 🤩 can feel like empty hype. Under romantic photos, clarify if you mean fandom-wow vs attraction.",
    examples: [
      { context: "Fandom", text: "She actually replied 🤩" },
      { context: "Concert", text: "Best show of my life 🤩" },
      { context: "Compliment", text: "Your talent is unreal 🤩" },
      { context: "Drop", text: "New collection 🤩" },
      { context: "Food", text: "This dessert 🤩" },
      { context: "Story reply", text: "Obsessed 🤩" },
    ],
    contextBlocks: [
      {
        title: "🤩 vs 😍",
        body: "😍 is heart-eyes love/attraction. 🤩 is star-eyes amazement and hype — more wow, less soft romance by default.",
      },
      {
        title: "🤩 vs ✨",
        body: "✨ sparkles the moment aesthetically. 🤩 puts amazement on a face.",
      },
      {
        title: "Fandom voice",
        body: "Stan culture loves 🤩 for idol content — excitement more than dating confession.",
      },
      {
        title: "Flirt overlap",
        body: "Under a crush’s selfie, 🤩 can still feel admiring. 😍/🥰 may read more intimate.",
      },
    ],
    searchIntents: [
      "star struck emoji meaning",
      "🤩 meaning in texting",
      "🤩 vs 😍",
      "what does 🤩 mean",
      "star struck emoji",
      "🤩 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤩 tragic content.",
      "Avoid fake-hype 🤩 that feels like engagement bait only.",
      "Skip in dry professional specs where awe faces look odd.",
    ],
    faqs: [
      {
        question: "What does 🤩 mean in texting?",
        answer:
          "Amazement, hype, or fandom “I’m obsessed” energy.",
      },
      {
        question: "🤩 vs 😍?",
        answer:
          "😍 is loving/attracted heart-eyes. 🤩 is starry wow/excitement.",
      },
      {
        question: "Is 🤩 flirty?",
        answer:
          "It can admire someone, but it is less default-romantic than 😍 or 😘.",
      },
      {
        question: "What does 🤩 mean from a girl?",
        answer:
          "Usually excitement or strong admiration — check if the topic is you or a celebrity.",
      },
      {
        question: "Can 🤩 mean congratulations?",
        answer:
          "Yes — impressed congrats energy.",
      },
    ],
  },

  "zany-face": {
    batchId: BATCH_ID,
    searchTitle: "Zany Face Emoji Meaning: Goofy, Wild, Chaotic, or Cringe Funny?",
    snippetAnswer:
      "🤪 Zany Face means goofy chaos, playful wildness, or “I’m being ridiculous on purpose” — sillier than a standard smile.",
    detailedParagraphs: [
      "Zany Face (🤪) shows a silly tongue-out expression with uneven eyes. It is Unicode’s goofball face for intentional nonsense.",
      "Friends send 🤪 for chaotic plans, brain-rot jokes, and self-aware clowning that is affectionate rather than 🤡 shade.",
      "It can mark “I’m unhinged today” humor or exaggerate excitement. Tone is playful, not usually romantic.",
      "If you mean ironic coping, 🙃 may fit better. If you mean calling someone foolish, 🤡 is the shade tool — 🤪 is more self-goofy.",
    ],
    textingMeaning:
      "Send 🤪 when you are being silly, chaotic, or playfully unhinged. Alone it often means “lol I’m a mess (cute).”",
    socialMeaning:
      "Captions use 🤪 for chaotic vlogs and goofy selfies. Comments drop it under ridiculous but fun content.",
    caution:
      "🤪 about someone else’s serious mistake can feel mocking. Also easy to overuse until it feels noisy.",
    examples: [
      { context: "Self-goofy", text: "Brain empty 🤪" },
      { context: "Chaotic plan", text: "Road trip at 5am 🤪" },
      { context: "Joke", text: "I am the drama 🤪" },
      { context: "Friend roast soft", text: "We are not okay 🤪" },
      { context: "Caption", text: "Weekend energy 🤪" },
      { context: "Reply", text: "Help I can't stop 🤪" },
    ],
    contextBlocks: [
      {
        title: "🤪 vs 🤡",
        body: "🤡 often insults. 🤪 is usually playful self-silliness or shared chaos — less shade.",
      },
      {
        title: "🤪 vs 😜",
        body: "😜 is a wink with tongue — teasing. 🤪 is zanier and more chaotic.",
      },
      {
        title: "🤪 vs 🙃",
        body: "🙃 is ironic upside-down smile. 🤪 is loud goofball energy.",
      },
      {
        title: "Work",
        body: "Only in very casual teams. Otherwise looks unprofessional.",
      },
    ],
    searchIntents: [
      "zany face emoji meaning",
      "🤪 meaning in texting",
      "🤪 vs 🤡",
      "what does 🤪 mean",
      "zany emoji",
      "🤪 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤪 serious apologies or crises.",
      "Avoid mocking someone’s disability or mental health with zany faces.",
      "Skip in formal client communication.",
    ],
    faqs: [
      {
        question: "What does 🤪 mean in texting?",
        answer:
          "Goofy, chaotic, or playfully ridiculous energy.",
      },
      {
        question: "Is 🤪 an insult?",
        answer:
          "Usually not — unlike 🤡. It is more self-silly or shared chaos.",
      },
      {
        question: "🤪 vs 😜?",
        answer:
          "😜 teases with a wink. 🤪 is wilder and goofier.",
      },
      {
        question: "Can 🤪 be flirty?",
        answer:
          "Sometimes playful flirt, but it is not the main flirt face.",
      },
      {
        question: "What does 🤪 mean from a girl?",
        answer:
          "Often “I’m being silly” or chaotic humor — light tone.",
      },
    ],
  },

  "see-no-evil-monkey": {
    batchId: BATCH_ID,
    searchTitle: "See-No-Evil Monkey Emoji Meaning: Embarrassed, Playful Hide, or Awkward?",
    snippetAnswer:
      "🙈 See-No-Evil Monkey means embarrassed laughter, playful “I can’t look,” or cute awkwardness — hiding eyes from cringe or flirt.",
    detailedParagraphs: [
      "See-No-Evil Monkey (🙈) covers its eyes, from the classic three wise monkeys. Online it became a soft embarrassment and shy-flirt mark.",
      "People send 🙈 after saying something bold, admitting a crushy thought, or watching secondhand cringe. It is cuter than 🫠 melt and less sweaty than 😅.",
      "Flirt threads use 🙈 as coy (“I liked your photo 🙈”). Friend threads use it for “don’t look at my messy room” energy.",
      "The sibling monkeys 🙉 🙊 cover hear/speak-no-evil. 🙈 specifically is about not seeing — shame, shyness, or refusing to witness.",
    ],
    textingMeaning:
      "Send 🙈 when you are shy, embarrassed, or playfully hiding. Alone it can mean “I’m cringing / don’t look / hehe.”",
    socialMeaning:
      "Captions use 🙈 for soft launches and shy admissions. Comments drop it under cringe-funny videos.",
    caution:
      "🙈 can minimize serious topics if used instead of accountability. Also not everyone reads it as cute.",
    examples: [
      { context: "Shy flirt", text: "I may have stalked your profile 🙈" },
      { context: "Embarrassed", text: "I tripped in public 🙈" },
      { context: "Admission", text: "I ate the whole cake 🙈" },
      { context: "Cringe watch", text: "I can't watch 🙈" },
      { context: "Soft brag", text: "They said I looked cute 🙈" },
      { context: "Caption", text: "New post don't judge 🙈" },
    ],
    contextBlocks: [
      {
        title: "🙈 vs 😅",
        body: "😅 is nervous grin/sweat. 🙈 is cute hide-my-eyes embarrassment — often softer and flirty.",
      },
      {
        title: "🙈 vs 🫠",
        body: "🫠 is stronger dissolve/cringe. 🙈 is playful monkey cover-up.",
      },
      {
        title: "🙈 vs 🙊",
        body: "🙊 is speak-no-evil — secrets/oops words. 🙈 is see-no-evil — can’t look / shy eyes.",
      },
      {
        title: "Flirt cue",
        body: "With compliments, 🙈 often means coy interest. With fails, it means cute shame.",
      },
    ],
    searchIntents: [
      "see no evil monkey emoji meaning",
      "🙈 meaning in texting",
      "🙈 meaning from a girl",
      "🙈 vs 😅",
      "what does 🙈 mean",
      "🙈 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🙈 away from serious harm you caused.",
      "Avoid as the only reply when someone needs a clear yes/no.",
      "Skip if the audience finds monkey emojis childish for the context.",
    ],
    faqs: [
      {
        question: "What does 🙈 mean in texting?",
        answer:
          "Embarrassed, shy, or playful “I can’t look” energy.",
      },
      {
        question: "Is 🙈 flirty?",
        answer:
          "Often, especially after bold or crushy admissions.",
      },
      {
        question: "🙈 vs 😅?",
        answer:
          "😅 is awkward sweat-laugh. 🙈 is cuter eye-covering shame/shy.",
      },
      {
        question: "What does 🙈 mean from a girl?",
        answer:
          "Frequently coy flirt or cute embarrassment — read the message.",
      },
      {
        question: "Is 🙈 the same as 🙊?",
        answer:
          "No. 🙊 is about not speaking; 🙈 is about not seeing.",
      },
    ],
  },

  "smiling-face-with-tear": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Face with Tear Emoji Meaning: Bittersweet, Touched, or Happy-Sad?",
    snippetAnswer:
      "🥲 Smiling Face with Tear means bittersweet emotion, touched gratitude, or smiling through pain — a tear with a smile, not pure 😢 sadness.",
    detailedParagraphs: [
      "Smiling Face with Tear (🥲) mixes a smile and a single tear. Unicode made room for touched, proud, or pain-with-humor feelings.",
      "People send 🥲 for bittersweet goodbyes, wholesome pride, and “I’m fine but emotional” moments. It is gentler than 😭 floods.",
      "Internet humor also uses 🥲 for smiling through suffering — “my rent is due 🥲.” The smile keeps it wry rather than collapsed.",
      "Compared with 🥹 holding back tears, 🥲 already shows the tear with a smile. Compared with 😢, the mouth stays upturned.",
    ],
    textingMeaning:
      "Use 🥲 for bittersweet feelings, soft gratitude, or wry endurance. Alone it can mean “touched / painful smile.”",
    socialMeaning:
      "Captions use 🥲 for nostalgic posts and proud-parent moments. Comments drop it under emotional but positive videos.",
    caution:
      "🥲 can underplay real distress if you need help. Say when you are not actually okay.",
    examples: [
      { context: "Bittersweet", text: "Last day at this job 🥲" },
      { context: "Touched", text: "You remembered 🥲" },
      { context: "Wry pain", text: "My bank account 🥲" },
      { context: "Pride", text: "They grew up so fast 🥲" },
      { context: "Nostalgia", text: "Old photos hit different 🥲" },
      { context: "Thanks", text: "This means everything 🥲" },
    ],
    contextBlocks: [
      {
        title: "🥲 vs 😢",
        body: "😢 is sadder with a downturned cry. 🥲 smiles through the tear — bittersweet or touched.",
      },
      {
        title: "🥲 vs 🥹",
        body: "🥹 holds tears back with soft eyes. 🥲 already lets a tear fall while smiling.",
      },
      {
        title: "🥲 vs 😭",
        body: "😭 is loud emotion (sad or meme). 🥲 is quieter mixed feeling.",
      },
      {
        title: "Humor use",
        body: "“Smiling through the pain 🥲” is common joke framing — still check if someone needs real support.",
      },
    ],
    searchIntents: [
      "smiling face with tear emoji meaning",
      "🥲 meaning in texting",
      "🥲 vs 🥹",
      "what does 🥲 mean",
      "bittersweet emoji",
      "🥲 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not hide a crisis behind wry 🥲 if you need help.",
      "Avoid as a joke under someone else’s tragedy.",
      "Skip when a clear sad or happy face would communicate better.",
    ],
    faqs: [
      {
        question: "What does 🥲 mean in texting?",
        answer:
          "Bittersweet emotion, touched feelings, or smiling through pain.",
      },
      {
        question: "🥲 vs 🥹?",
        answer:
          "🥹 is holding tears back softly. 🥲 shows a tear with a smile.",
      },
      {
        question: "Is 🥲 sad or happy?",
        answer:
          "Both mixed — bittersweet is the point.",
      },
      {
        question: "What does 🥲 mean from a girl?",
        answer:
          "Often touched, nostalgic, or wry — not usually angry.",
      },
      {
        question: "Can 🥲 mean thank you?",
        answer:
          "Yes — grateful and emotional thanks.",
      },
    ],
  },

  "face-holding-back-tears": {
    batchId: BATCH_ID,
    searchTitle: "Face Holding Back Tears Emoji Meaning: Emotional, Grateful, or About to Cry?",
    snippetAnswer:
      "🥹 Face Holding Back Tears means soft emotion on the edge of crying — gratitude, tenderness, or “I’m going to cry” — distinct from pleading 🥺.",
    detailedParagraphs: [
      "Face Holding Back Tears (🥹) shows glossy eyes and a brave little smile. It captures emotion held in — proud, thankful, or overwhelmed softly.",
      "People send 🥹 for kind gestures, reunions, and “this is so wholesome” moments. It is the face of almost-tears without a full cry.",
      "Compared with 🥺 pleading puppy eyes, 🥹 is less “please” and more “I’m emotional.” Compared with 🥲, the tear is held back, not fallen on a smile in the same way.",
      "Gen Z adopted 🥹 heavily for soft vulnerability online. It can be sincere or lightly dramatic (“the latte art 🥹”).",
    ],
    textingMeaning:
      "Send 🥹 when you are touched, grateful, or softly about to cry. Alone it often means “this hit me emotionally.”",
    socialMeaning:
      "Captions use 🥹 for wholesome reveals and thank-you posts. Comments drop it under emotional videos and cute animals.",
    caution:
      "Do not answer hard grief with only cute 🥹 energy if someone needs grounding support. Also avoid fake-tears manipulation.",
    examples: [
      { context: "Grateful", text: "I can't believe you did this 🥹" },
      { context: "Wholesome", text: "They said yes 🥹" },
      { context: "Proud", text: "Look at you go 🥹" },
      { context: "Touched", text: "This letter 🥹" },
      { context: "Reunion", text: "Missed you so much 🥹" },
      { context: "Story reply", text: "I'm crying 🥹" },
    ],
    contextBlocks: [
      {
        title: "🥹 vs 🥺",
        body: "🥺 is pleading/puppy “please.” 🥹 is holding back tears — emotional, grateful, or tender, not primarily asking.",
      },
      {
        title: "🥹 vs 🥲",
        body: "🥲 smiles with a visible tear (bittersweet). 🥹 holds tears in with soft overwhelm.",
      },
      {
        title: "🥹 vs 😭",
        body: "😭 is loud crying (or meme sobs). 🥹 is quiet almost-crying softness.",
      },
      {
        title: "From a crush",
        body: "Often sincere soft emotion. Can feel intimate — a good sign of warmth.",
      },
    ],
    searchIntents: [
      "face holding back tears emoji meaning",
      "🥹 meaning in texting",
      "🥹 vs 🥺",
      "what does 🥹 mean",
      "🥹 meaning from a girl",
      "🥹 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use cute 🥹 to dodge a serious apology.",
      "Avoid mocking someone’s tears with parody 🥹.",
      "Skip in cold professional negotiations where vulnerability faces confuse tone.",
    ],
    faqs: [
      {
        question: "What does 🥹 mean in texting?",
        answer:
          "Soft emotion on the edge of tears — gratitude, tenderness, or overwhelm.",
      },
      {
        question: "🥹 vs 🥺?",
        answer:
          "🥺 pleads. 🥹 holds back tears from being moved.",
      },
      {
        question: "Is 🥹 sad?",
        answer:
          "It can be, but often happy-sad or grateful emotion.",
      },
      {
        question: "What does 🥹 mean from a girl?",
        answer:
          "Usually she’s touched or soft-emotional — often sincere.",
      },
      {
        question: "Can 🥹 be dramatic?",
        answer:
          "Yes lightly — for cute content — but it still reads tender.",
      },
    ],
  },

  "shushing-face": {
    batchId: BATCH_ID,
    searchTitle: "Shushing Face Emoji Meaning: Secret, Quiet, Spoilers, or Hush?",
    snippetAnswer:
      "🤫 Shushing Face means “keep it secret,” quiet please, or spoiler hush — a finger-to-lips silence cue.",
    detailedParagraphs: [
      "Shushing Face (🤫) presses a finger to smiling lips. Unicode’s hush face became the emoji for secrets, spoilers, and “don’t tell.”",
      "Friend groups send 🤫 before gossip, surprise parties, and confidential plans. Alone it can mean “this stays between us.”",
      "It also works as a playful “be quiet” in libraries, theaters, or chaotic group chats — softer than angry scolding.",
      "Compared with 🙊 speak-no-evil, 🤫 is a human shush gesture aimed at secrecy or silence. 👀 might watch tea; 🤫 locks it down.",
    ],
    textingMeaning:
      "Send 🤫 to mark a secret, warn about spoilers, or ask for quiet. Alone it often means “don’t say anything.”",
    socialMeaning:
      "Captions use 🤫 for teaser announcements and soft launches. Comments drop it under spoiler-risk posts.",
    caution:
      "🤫 is not a substitute for real consent about sharing private info. Do not shush people reporting harm.",
    examples: [
      { context: "Secret", text: "She's visiting this weekend 🤫" },
      { context: "Spoiler", text: "No spoilers past this point 🤫" },
      { context: "Surprise", text: "Don't tell him yet 🤫" },
      { context: "Gossip soft", text: "You did not hear this from me 🤫" },
      { context: "Quiet joke", text: "Inside voice 🤫" },
      { context: "Teaser", text: "Big news soon 🤫" },
    ],
    contextBlocks: [
      {
        title: "🤫 secrets vs 👀 tea",
        body: "👀 asks to watch/spill. 🤫 asks to keep quiet. Opposite gossip jobs.",
      },
      {
        title: "🤫 vs 🙊",
        body: "🙊 is monkey speak-no-evil — often cute “oops I said too much.” 🤫 actively shushes secrecy/silence.",
      },
      {
        title: "Spoilers",
        body: "Common before movie/show details. Kind warning for friends who are behind.",
      },
      {
        title: "Work",
        body: "Okay for playful “embargoed 🤫” in casual teams. Still follow real confidentiality rules.",
      },
    ],
    searchIntents: [
      "shushing face emoji meaning",
      "🤫 meaning in texting",
      "🤫 meaning secret",
      "what does 🤫 mean",
      "shushing emoji",
      "🤫 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 🤫 victims into silence.",
      "Avoid as a joke about NDAs you are actually breaking.",
      "Skip when clear spoken confidentiality language is required.",
    ],
    faqs: [
      {
        question: "What does 🤫 mean in texting?",
        answer:
          "Keep it secret, be quiet, or spoiler hush.",
      },
      {
        question: "Is 🤫 flirty?",
        answer:
          "Sometimes in “secret crush” teasing, but secrecy is the core meaning.",
      },
      {
        question: "🤫 vs 🙊?",
        answer:
          "🙊 is speak-no-evil monkey energy. 🤫 is a direct shush/secret face.",
      },
      {
        question: "Can 🤫 mean spoilers?",
        answer:
          "Yes — a common warning before revealing plot points.",
      },
      {
        question: "What does 🤫 mean from a girl?",
        answer:
          "Usually “don’t tell” or playful secrecy — check the topic.",
      },
    ],
  },
};
