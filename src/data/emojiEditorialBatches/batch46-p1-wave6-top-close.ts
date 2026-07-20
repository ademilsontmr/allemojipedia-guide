import type { EmojiBatchEnrichment } from "./types";

/**
 * P1 Wave 6 — close remaining topEmojiSlugs (hearts + hands/gestures).
 */
const BATCH_ID = "46-p1-wave6-top-close";

export const batch46P1Wave6TopClose: Record<string, EmojiBatchEnrichment> = {
  "love-letter": {
    batchId: BATCH_ID,
    searchTitle: "Love Letter Emoji Meaning: Romance, Confession, or Mail Flirt?",
    snippetAnswer:
      "💌 Love Letter means romantic messages, love notes, or flirty mail energy — affection delivered as a letter, not just a heart.",
    detailedParagraphs: [
      "Love Letter (💌) shows an envelope with a heart. Unicode frames it as a love note; texting uses it for romantic messages and soft confessions.",
      "People send 💌 when the vibe is written romance — emails, DMs, and 'thinking of you' notes.",
      "It is softer storytelling than a lone ❤️: the letter implies words were exchanged or will be.",
      "Valentine campaigns and couple captions lean on 💌 for classic romance aesthetics.",
    ],
    textingMeaning:
      "Send 💌 for romantic notes, flirty mail energy, or 'I wrote this for you' vibes.",
    socialMeaning:
      "Captions use 💌 for Valentine posts and soft-launch romance. Comments drop it under love confessions.",
    caution:
      "Too intimate for work. Do not 💌 spam strangers.",
    examples: [
      { context: "Romance", text: "Just for you 💌" },
      { context: "DM", text: "Check your inbox 💌" },
      { context: "Valentine", text: "Happy Valentine's 💌" },
      { context: "Confession", text: "I meant every word 💌" },
      { context: "Caption", text: "Love notes era 💌" },
      { context: "Thanks soft", text: "Your message 💌" },
    ],
    contextBlocks: [
      {
        title: "💌 vs ❤️",
        body: "❤️ is love itself. 💌 is love delivered as a message/note.",
      },
      {
        title: "💌 vs 💕",
        body: "💕 is cute affection. 💌 implies correspondence.",
      },
      {
        title: "From a girl or guy",
        body: "Usually romantic interest or sweet note energy.",
      },
      {
        title: "Marketing",
        body: "Brands use 💌 for newsletter romance aesthetics.",
      },
    ],
    searchIntents: [
      "love letter emoji meaning",
      "💌 meaning in texting",
      "love letter emoji",
      "💌 vs ❤️",
      "what does 💌 mean",
      "💌 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 💌 professional contacts.",
      "Avoid if affection is unwelcome.",
      "Skip as sarcasm in fights.",
    ],
    faqs: [
      {
        question: "What does 💌 mean in texting?",
        answer:
          "Romantic message or love-note energy.",
      },
      {
        question: "Is 💌 flirty?",
        answer:
          "Usually yes — softer than thirsty emojis.",
      },
      {
        question: "💌 vs 💖?",
        answer:
          "💖 is sparkling love. 💌 emphasizes the letter/message.",
      },
      {
        question: "What does 💌 mean from a girl?",
        answer:
          "Often sweet romantic interest.",
      },
      {
        question: "Can friends use 💌?",
        answer:
          "Rarely; it usually reads romantic.",
      },
    ],
  },
  "revolving-hearts": {
    batchId: BATCH_ID,
    searchTitle: "Revolving Hearts Emoji Meaning: Dizzy Love, Infatuation, or Spinning Crush?",
    snippetAnswer:
      "💞 Revolving Hearts means dizzy infatuation, spinning crush energy, or playful romantic whirl — love that feels in motion.",
    detailedParagraphs: [
      "Revolving Hearts (💞) shows hearts circling each other. It reads as whirlwind affection or giddy crush feelings.",
      "People use 💞 for early romance excitement and 'can't stop thinking about you' energy.",
      "It is more playful/motion-filled than a static ❤️.",
      "Aesthetic captions also use 💞 as decorative love without deep confession.",
    ],
    textingMeaning:
      "Send 💞 for giddy crush vibes or swirling romantic excitement.",
    socialMeaning:
      "Captions and stickers use 💞 for cute romance motion. Comments drop it under soft couple content.",
    caution:
      "Can feel intense early. Match pacing.",
    examples: [
      { context: "Crush", text: "Can't stop smiling 💞" },
      { context: "Couple", text: "Us lately 💞" },
      { context: "Flirty", text: "Thinking about you 💞" },
      { context: "Caption", text: "Head spinning 💞" },
      { context: "Reply", text: "This feeling 💞" },
      { context: "Aesthetic", text: "Soft spiral 💞" },
    ],
    contextBlocks: [
      {
        title: "💞 vs 💕",
        body: "💕 is two hearts fondness. 💞 emphasizes spinning/whirl infatuation.",
      },
      {
        title: "💞 vs 💓",
        body: "💓 is beating pulse. 💞 is circling motion.",
      },
      {
        title: "From a girl or guy",
        body: "Playful romantic interest.",
      },
      {
        title: "Aesthetic use",
        body: "Decorative love without heavy commitment.",
      },
    ],
    searchIntents: [
      "revolving hearts emoji meaning",
      "💞 meaning in texting",
      "revolving hearts",
      "💞 vs 💕",
      "what does 💞 mean",
      "💞 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not overwhelm new chats.",
      "Avoid at work.",
      "Skip if someone asked for space.",
    ],
    faqs: [
      {
        question: "What does 💞 mean?",
        answer:
          "Dizzy/infatuated love energy.",
      },
      {
        question: "Is 💞 romantic?",
        answer:
          "Usually yes.",
      },
      {
        question: "💞 vs 💗?",
        answer:
          "💗 grows; 💞 spins.",
      },
      {
        question: "From a girl?",
        answer:
          "Often soft crush excitement.",
      },
      {
        question: "Friends?",
        answer:
          "Less common than 💛.",
      },
    ],
  },
  "growing-heart": {
    batchId: BATCH_ID,
    searchTitle: "Growing Heart Emoji Meaning: Love Growing, Getting Closer, or Rising Feelings?",
    snippetAnswer:
      "💗 Growing Heart means love that is increasing — feelings getting stronger, affection blooming, or emotional growth.",
    detailedParagraphs: [
      "Growing Heart (💗) is a heart that looks like it is pulsing larger. Unicode links it to growing love.",
      "People send 💗 when a relationship deepens or affection is increasing.",
      "It can also mark self-love growth and healing alongside ❤️‍🩹.",
      "Softer commitment signal than stacked ❤️❤️❤️, more dynamic than a static heart.",
    ],
    textingMeaning:
      "Use 💗 when feelings are growing or you want to show affection that is building.",
    socialMeaning:
      "Captions use 💗 for relationship progress and soft love stories.",
    caution:
      "Do not imply growth the other person has not agreed to.",
    examples: [
      { context: "Growing love", text: "Falling harder 💗" },
      { context: "Progress", text: "Us getting closer 💗" },
      { context: "Self-love", text: "Choosing me 💗" },
      { context: "Caption", text: "Blooming 💗" },
      { context: "Reply", text: "This hit soft 💗" },
      { context: "Thanks", text: "Your support 💗" },
    ],
    contextBlocks: [
      {
        title: "💗 vs 💓",
        body: "💓 beats steadily. 💗 emphasizes growth/increase.",
      },
      {
        title: "💗 vs ❤️",
        body: "❤️ is love. 💗 is love getting bigger.",
      },
      {
        title: "Healing",
        body: "Pairs with recovery narratives.",
      },
      {
        title: "From a girl or guy",
        body: "Deepening affection signal.",
      },
    ],
    searchIntents: [
      "growing heart emoji meaning",
      "💗 meaning in texting",
      "growing heart",
      "💗 vs 💓",
      "what does 💗 mean",
      "💗 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid pressuring 'we're getting serious' vibes unilaterally.",
      "Skip at work.",
      "Don't use after a breakup if it confuses boundaries.",
    ],
    faqs: [
      {
        question: "What does 💗 mean?",
        answer:
          "Love growing or rising affection.",
      },
      {
        question: "Romantic?",
        answer:
          "Often yes.",
      },
      {
        question: "💗 vs 💕?",
        answer:
          "💕 is cute pair; 💗 is growth.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually deepening warmth.",
      },
      {
        question: "Self-love?",
        answer:
          "Yes in growth captions.",
      },
    ],
  },
  "beating-heart": {
    batchId: BATCH_ID,
    searchTitle: "Beating Heart Emoji Meaning: Excitement, Nervous Love, or Heart Racing?",
    snippetAnswer:
      "💓 Beating Heart means a racing heart — excitement, nervous love, crush butterflies, or emotional pulse.",
    detailedParagraphs: [
      "Beating Heart (💓) shows a heart with motion lines. It signals heartbeat intensity.",
      "Crush chats use 💓 for butterflies. Concert and sports fans use it for excitement too.",
      "It is more visceral than ❤️ — body feeling, not just symbol.",
      "Anxiety-adjacent readings exist ('my heart is pounding'), so context matters.",
    ],
    textingMeaning:
      "Send 💓 when your heart feels loud — crush nerves, hype, or emotional intensity.",
    socialMeaning:
      "Captions use 💓 for excitement and romance. Comments drop it under thrilling clips.",
    caution:
      "Can read anxious. Clarify if you mean panic vs crush.",
    examples: [
      { context: "Crush", text: "You make my heart race 💓" },
      { context: "Hype", text: "That ending 💓" },
      { context: "Nervous", text: "Before the date 💓" },
      { context: "Love", text: "Still hits 💓" },
      { context: "Caption", text: "Heartbeat era 💓" },
      { context: "Reply", text: "This song 💓" },
    ],
    contextBlocks: [
      {
        title: "💓 vs 💗",
        body: "💗 grows; 💓 races/pulses.",
      },
      {
        title: "💓 vs ❤️",
        body: "❤️ is love mark; 💓 is physical excitement.",
      },
      {
        title: "Anxiety",
        body: "May mean stress pounding — words help.",
      },
      {
        title: "From a girl or guy",
        body: "Often crush excitement.",
      },
    ],
    searchIntents: [
      "beating heart emoji meaning",
      "💓 meaning in texting",
      "beating heart",
      "💓 vs 💗",
      "what does 💓 mean",
      "💓 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't romanticize someone's panic.",
      "Avoid at work.",
      "Skip if unclear and stakes are high.",
    ],
    faqs: [
      {
        question: "What does 💓 mean?",
        answer:
          "Racing/excited heart feelings.",
      },
      {
        question: "Romantic?",
        answer:
          "Often.",
      },
      {
        question: "💓 vs 💞?",
        answer:
          "💞 whirls; 💓 pulses.",
      },
      {
        question: "From a girl?",
        answer:
          "Butterflies or hype.",
      },
      {
        question: "Anxiety?",
        answer:
          "Possible — ask if unsure.",
      },
    ],
  },
  "heart-with-arrow": {
    batchId: BATCH_ID,
    searchTitle: "Heart with Arrow Emoji Meaning: Cupid, Crush Hit, or Love Struck?",
    snippetAnswer:
      "💘 Heart with Arrow means cupid-struck love — being hit by a crush, romantic targeting, or classic valentine 'arrow through the heart.'",
    detailedParagraphs: [
      "Heart with Arrow (💘) is the cupid icon. It means love struck or romantic pursuit.",
      "People use 💘 for crush confessions and valentine aesthetics.",
      "It is more storybook romance than casual 💛 friendship.",
      "Dating apps and valentine campaigns use it heavily.",
    ],
    textingMeaning:
      "Send 💘 when you feel love-struck or want classic cupid romance vibes.",
    socialMeaning:
      "Captions lean valentine and crush. Comments under meet-cute posts collect 💘.",
    caution:
      "Can feel heavy early. Keep playful if the crush is new.",
    examples: [
      { context: "Crush", text: "You got me 💘" },
      { context: "Valentine", text: "Cupid called 💘" },
      { context: "Caption", text: "Arrow to the heart 💘" },
      { context: "Flirty", text: "Target locked 💘" },
      { context: "Couple", text: "Still struck 💘" },
      { context: "Reply", text: "This pic 💘" },
    ],
    contextBlocks: [
      {
        title: "💘 vs ❤️",
        body: "❤️ is general love; 💘 is cupid-struck romance.",
      },
      {
        title: "💘 vs ❤️‍🔥",
        body: "❤️‍🔥 is passionate heat; 💘 is classic arrow romance.",
      },
      {
        title: "From a girl or guy",
        body: "Clear crush/romance lean.",
      },
      {
        title: "Valentine",
        body: "Seasonal default.",
      },
    ],
    searchIntents: [
      "heart with arrow emoji meaning",
      "💘 meaning in texting",
      "cupid heart emoji",
      "💘 vs ❤️",
      "what does 💘 mean",
      "💘 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid with coworkers.",
      "Don't use to pressure.",
      "Skip if rejected already.",
    ],
    faqs: [
      {
        question: "What does 💘 mean?",
        answer:
          "Cupid-struck crush/romance.",
      },
      {
        question: "Flirty?",
        answer:
          "Yes.",
      },
      {
        question: "💘 vs 💕?",
        answer:
          "💕 softer fondness; 💘 more cupid hit.",
      },
      {
        question: "From a girl?",
        answer:
          "Romantic interest signal.",
      },
      {
        question: "Only Valentine?",
        answer:
          "No — year-round crush use.",
      },
    ],
  },
  "heart-with-ribbon": {
    batchId: BATCH_ID,
    searchTitle: "Heart with Ribbon Emoji Meaning: Gift Love, Cute Present, or Sweet Offer?",
    snippetAnswer:
      "💝 Heart with Ribbon means love as a gift — present affection, cute offering, or wrapped valentine sweetness.",
    detailedParagraphs: [
      "Heart with Ribbon (💝) looks gift-wrapped. It signals love given as a present.",
      "People use 💝 for gift reveals, sweet offers, and cute romance packaging.",
      "It feels celebratory and gift-coded more than raw ❤️.",
      "Retail and valentine marketing love this glyph.",
    ],
    textingMeaning:
      "Send 💝 when affection feels like a gift or you're celebrating a sweet offer.",
    socialMeaning:
      "Captions use 💝 for presents and wrapped love. Comments under gift videos drop it.",
    caution:
      "Don't imply you 'owe' romance as a transaction.",
    examples: [
      { context: "Gift", text: "For you 💝" },
      { context: "Valentine", text: "Wrapped with love 💝" },
      { context: "Surprise", text: "Open this 💝" },
      { context: "Caption", text: "Little present 💝" },
      { context: "Thanks", text: "This gift 💝" },
      { context: "Flirty", text: "A treat for you 💝" },
    ],
    contextBlocks: [
      {
        title: "💝 vs 🎁",
        body: "🎁 is any gift. 💝 is love-gift specifically.",
      },
      {
        title: "💝 vs 💌",
        body: "💌 is a letter; 💝 is a wrapped heart gift.",
      },
      {
        title: "From a girl or guy",
        body: "Sweet romantic or gift thanks.",
      },
      {
        title: "Shopping",
        body: "Common in gift hauls.",
      },
    ],
    searchIntents: [
      "heart with ribbon emoji meaning",
      "💝 meaning in texting",
      "heart ribbon emoji",
      "💝 vs ❤️",
      "what does 💝 mean",
      "💝 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid transactional love vibes.",
      "Skip at work.",
      "Don't use after someone declined gifts/attention.",
    ],
    faqs: [
      {
        question: "What does 💝 mean?",
        answer:
          "Love as a gift / wrapped affection.",
      },
      {
        question: "Romantic?",
        answer:
          "Often.",
      },
      {
        question: "💝 vs 💗?",
        answer:
          "💗 grows; 💝 is gift-coded.",
      },
      {
        question: "From a girl?",
        answer:
          "Sweet offering energy.",
      },
      {
        question: "Birthday?",
        answer:
          "Yes with gifts.",
      },
    ],
  },
  "heart-exclamation": {
    batchId: BATCH_ID,
    searchTitle: "Heart Exclamation Emoji Meaning: Heavy Love Emphasis or Dramatic Heart?",
    snippetAnswer:
      "❣️ Heart Exclamation means emphatic love or dramatic heart emphasis — a punctuation-style heart that punches emotion.",
    detailedParagraphs: [
      "Heart Exclamation (❣️) is a heart-shaped exclamation mark. It emphasizes feeling with punctuation energy.",
      "People use ❣️ to punch up affection in captions and stylish romance posts.",
      "It can feel aesthetic/editorial rather than chatty ❤️.",
      "Less common in quick texts than red heart, more design-forward.",
    ],
    textingMeaning:
      "Use ❣️ for stylized love emphasis when a plain heart feels too plain.",
    socialMeaning:
      "Captions and brand aesthetics use ❣️ as design love punctuation.",
    caution:
      "May not render identically on all older devices — confirm if critical.",
    examples: [
      { context: "Emphasis", text: "Love this ❣️" },
      { context: "Caption", text: "Always ❣️" },
      { context: "Aesthetic", text: "Soft shout ❣️" },
      { context: "Couple", text: "Us ❣️" },
      { context: "Reply", text: "Yes ❣️" },
      { context: "Brand", text: "With love ❣️" },
    ],
    contextBlocks: [
      {
        title: "❣️ vs ❤️",
        body: "❤️ is the standard heart. ❣️ is exclamation emphasis.",
      },
      {
        title: "❣️ vs ❤︎",
        body: "Variant heart forms; ❣️ reads more punctuated.",
      },
      {
        title: "Design",
        body: "Popular in stylish typography captions.",
      },
      {
        title: "From a girl or guy",
        body: "Affection with flair.",
      },
    ],
    searchIntents: [
      "heart exclamation emoji meaning",
      "❣️ meaning in texting",
      "heart exclamation",
      "❣️ vs ❤️",
      "what does ❣️ mean",
      "❣️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't rely on it if recipient's device shows tofu boxes.",
      "Avoid overuse.",
      "Skip cold professional mail.",
    ],
    faqs: [
      {
        question: "What does ❣️ mean?",
        answer:
          "Emphatic/stylized love mark.",
      },
      {
        question: "Same as ❤️?",
        answer:
          "Similar love, more punctuation flair.",
      },
      {
        question: "Romantic?",
        answer:
          "Can be.",
      },
      {
        question: "From a girl?",
        answer:
          "Affection with style.",
      },
      {
        question: "Rare?",
        answer:
          "Less common than ❤️, still understood.",
      },
    ],
  },
  "brown-heart": {
    batchId: BATCH_ID,
    searchTitle: "Brown Heart Emoji Meaning: Warmth, Neutrality, Friendship, or Aesthetic?",
    snippetAnswer:
      "🤎 Brown Heart means warm, earthy, or neutral affection — cozy care, aesthetic brown love, or friendship without loud romance colors.",
    detailedParagraphs: [
      "Brown Heart (🤎) is an earth-toned heart. It often signals cozy, grounded affection.",
      "Some use it for skin-tone solidarity aesthetics or simply favorite-color hearts.",
      "It is less coded than green jealousy or yellow friendship, more flexible/neutral-warm.",
      "Fall aesthetics and coffee-brown brands adopt it.",
    ],
    textingMeaning:
      "Send 🤎 for cozy warmth, earthy aesthetic love, or calm affection.",
    socialMeaning:
      "Captions use 🤎 for autumn and neutral love. Comments treat it as soft approval.",
    caution:
      "Still a heart — sensitive readers may over-read romance.",
    examples: [
      { context: "Cozy", text: "This vibe 🤎" },
      { context: "Friend", text: "Appreciate you 🤎" },
      { context: "Aesthetic", text: "Brown tones 🤎" },
      { context: "Support", text: "Here for you 🤎" },
      { context: "Caption", text: "Warmth 🤎" },
      { context: "Thanks", text: "Grateful 🤎" },
    ],
    contextBlocks: [
      {
        title: "🤎 vs 🧡",
        body: "🧡 is brighter cozy; 🤎 is earthier/neutral.",
      },
      {
        title: "🤎 vs 🖤",
        body: "🖤 is dark/edgy; 🤎 is warm brown.",
      },
      {
        title: "From a girl or guy",
        body: "Usually soft care.",
      },
      {
        title: "Color identity",
        body: "Favorite-color heart use.",
      },
    ],
    searchIntents: [
      "brown heart emoji meaning",
      "🤎 meaning in texting",
      "brown heart",
      "🤎 vs ❤️",
      "what does 🤎 mean",
      "🤎 emoji copy and paste",
    ],
    whenNotToUse: [
      "Clarify if romance could be misread.",
      "Skip formal docs.",
      "Don't use as the only reply to crisis.",
    ],
    faqs: [
      {
        question: "What does 🤎 mean?",
        answer:
          "Warm/earthy affection or aesthetic brown love.",
      },
      {
        question: "Romantic?",
        answer:
          "Sometimes; often cozy/neutral.",
      },
      {
        question: "🤎 vs 💛?",
        answer:
          "💛 friendship sunshine; 🤎 earthy warm.",
      },
      {
        question: "From a girl?",
        answer:
          "Soft care.",
      },
      {
        question: "New emoji?",
        answer:
          "Relatively newer color heart.",
      },
    ],
  },
  "grey-heart": {
    batchId: BATCH_ID,
    searchTitle: "Grey Heart Emoji Meaning: Dull Love, Neutral, Mourning Soft, or Aesthetic?",
    snippetAnswer:
      "🩶 Grey Heart means muted, neutral, or somber affection — soft mourning, aesthetic grey love, or 'love but toned down.'",
    detailedParagraphs: [
      "Grey Heart (🩶) is a desaturated heart. It can mean muted feelings or stylish grey aesthetics.",
      "Some use it for melancholy love or quiet support.",
      "Others treat it like any colored heart with grey as favorite color.",
      "Less cheerful than 💛; less edgy than 🖤.",
    ],
    textingMeaning:
      "Send 🩶 for muted affection, grey aesthetic, or quiet emotional tone.",
    socialMeaning:
      "Captions use 🩶 for moody love and minimal palettes.",
    caution:
      "May look sad unintentionally — add words if you mean happy aesthetic only.",
    examples: [
      { context: "Moody", text: "This weather 🩶" },
      { context: "Support", text: "Thinking of you 🩶" },
      { context: "Aesthetic", text: "Grey days 🩶" },
      { context: "Soft love", text: "Quietly 🩶" },
      { context: "Caption", text: "Muted heart 🩶" },
      { context: "Friend", text: "Here 🩶" },
    ],
    contextBlocks: [
      {
        title: "🩶 vs 🖤",
        body: "🖤 is darker/edgier; 🩶 is muted/soft grey.",
      },
      {
        title: "🩶 vs 🤍",
        body: "🤍 is pure soft white; 🩶 is duller/neutral.",
      },
      {
        title: "Mourning",
        body: "Possible soft somber reading.",
      },
      {
        title: "From a girl or guy",
        body: "Context-dependent calm affection.",
      },
    ],
    searchIntents: [
      "grey heart emoji meaning",
      "🩶 meaning in texting",
      "gray heart emoji",
      "🩶 vs 🖤",
      "what does 🩶 mean",
      "🩶 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't send as a joke under acute grief.",
      "Clarify tone if ambiguous.",
      "Skip formal mail.",
    ],
    faqs: [
      {
        question: "What does 🩶 mean?",
        answer:
          "Muted/neutral or somber-soft heart.",
      },
      {
        question: "Sad?",
        answer:
          "Can be; also aesthetic.",
      },
      {
        question: "🩶 vs 🤍?",
        answer:
          "🤍 brighter pure; 🩶 duller.",
      },
      {
        question: "From a girl?",
        answer:
          "Calm or moody affection.",
      },
      {
        question: "Spelling grey/gray?",
        answer:
          "Same emoji.",
      },
    ],
  },
  "call-me-hand": {
    batchId: BATCH_ID,
    searchTitle: "Call Me Hand Emoji Meaning: Call Me, Hang Loose Flirt, or Phone Gesture?",
    snippetAnswer:
      "🤙 Call Me Hand means 'call me,' hang-loose vibes, or casual 'hit me up' — a shaka-like phone gesture in texting.",
    detailedParagraphs: [
      "Call Me Hand (🤙) extends thumb and pinky. It reads as call me / hang loose.",
      "Surf culture overlaps with shaka; phone culture reads it as 'call me.'",
      "Flirty chats use 🤙 as casual invite energy.",
      "Less formal than 📞 and cooler than typing 'call me.'",
    ],
    textingMeaning:
      "Send 🤙 to say call me, hit me up, or keep it chill.",
    socialMeaning:
      "Captions use 🤙 for casual cool. Comments drop it under 'text me' energy.",
    caution:
      "In some contexts shaka vs call-me differ — words help internationally.",
    examples: [
      { context: "Invite", text: "Call me later 🤙" },
      { context: "Chill", text: "We good 🤙" },
      { context: "Flirty", text: "Hit me up 🤙" },
      { context: "Surf vibes", text: "Hang loose 🤙" },
      { context: "Plan", text: "Tomorrow 🤙" },
      { context: "Reply", text: "Bet 🤙" },
    ],
    contextBlocks: [
      {
        title: "🤙 vs 👋",
        body: "👋 is hello/bye wave. 🤙 is call/hang-loose.",
      },
      {
        title: "🤙 vs 📱",
        body: "📱 is the phone object; 🤙 is the gesture.",
      },
      {
        title: "From a girl or guy",
        body: "Casual invite; can be flirty.",
      },
      {
        title: "Shaka",
        body: "Surf reading exists alongside call-me.",
      },
    ],
    searchIntents: [
      "call me hand emoji meaning",
      "🤙 meaning in texting",
      "call me emoji",
      "🤙 shaka",
      "what does 🤙 mean",
      "🤙 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't use as only contact method for emergencies.",
      "Avoid if unclear culturally.",
      "Skip ultra-formal threads.",
    ],
    faqs: [
      {
        question: "What does 🤙 mean?",
        answer:
          "Call me / hang loose / hit me up.",
      },
      {
        question: "Flirty?",
        answer:
          "Can be.",
      },
      {
        question: "Same as shaka?",
        answer:
          "Overlaps visually.",
      },
      {
        question: "From a girl?",
        answer:
          "Casual invite energy.",
      },
      {
        question: "Work?",
        answer:
          "Only very casual teams.",
      },
    ],
  },
  "waving-hand": {
    batchId: BATCH_ID,
    searchTitle: "Waving Hand Emoji Meaning: Hello, Goodbye, or Friendly Hi?",
    snippetAnswer:
      "👋 Waving Hand means hello, goodbye, or a friendly wave — the default greeting gesture emoji.",
    detailedParagraphs: [
      "Waving Hand (👋) is a simple wave. It opens and closes conversations politely.",
      "People send 👋 for hi, bye, and acknowledging entry to a group chat.",
      "It is warmer than plain text 'hi' and safer than hearts.",
      "Skin-tone variants exist; base yellow remains common.",
    ],
    textingMeaning:
      "Use 👋 to say hi or bye casually.",
    socialMeaning:
      "Stories and comments use 👋 for greetings and first posts.",
    caution:
      "Waving after conflict without words can feel dismissive — add context.",
    examples: [
      { context: "Hello", text: "Hi 👋" },
      { context: "Bye", text: "Gotta run 👋" },
      { context: "Group", text: "Hey everyone 👋" },
      { context: "First message", text: "Hello there 👋" },
      { context: "Acknowledge", text: "Saw this 👋" },
      { context: "Caption", text: "New here 👋" },
    ],
    contextBlocks: [
      {
        title: "👋 vs ✋",
        body: "✋ is stop/raised hand. 👋 is waving hello/bye.",
      },
      {
        title: "👋 vs 🤝",
        body: "🤝 is deal/handshake. 👋 is greeting.",
      },
      {
        title: "From anyone",
        body: "Friendly neutral.",
      },
      {
        title: "Work",
        body: "Among safest emoji greetings.",
      },
    ],
    searchIntents: [
      "waving hand emoji meaning",
      "👋 meaning in texting",
      "wave emoji hello",
      "👋 goodbye",
      "what does 👋 mean",
      "👋 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't wave-off serious topics.",
      "Avoid as sarcasm goodbye in fights.",
      "Skip if someone asked not to contact.",
    ],
    faqs: [
      {
        question: "What does 👋 mean?",
        answer:
          "Hello or goodbye wave.",
      },
      {
        question: "Hi or bye?",
        answer:
          "Both — placement decides.",
      },
      {
        question: "👋 vs 🖐️?",
        answer:
          "🖐️ is open hand; 👋 is wave motion.",
      },
      {
        question: "Professional?",
        answer:
          "Usually fine casually.",
      },
      {
        question: "Flirty?",
        answer:
          "Rarely by itself.",
      },
    ],
  },
  "raised-hand": {
    batchId: BATCH_ID,
    searchTitle: "Raised Hand Emoji Meaning: Stop, High Five, or Question Hand?",
    snippetAnswer:
      "✋ Raised Hand means stop, raised hand to speak, or high-five energy — a palm-out gesture with multiple readings.",
    detailedParagraphs: [
      "Raised Hand (✋) shows an open palm facing you. Meanings split: stop, volunteer, or high five.",
      "Classrooms and meetings use it as 'I have a question.'",
      "In arguments it can mean 'stop right there.'",
      "Context and words are essential because readings conflict.",
    ],
    textingMeaning:
      "Send ✋ to say stop, high five, or 'hand up' — clarify with words when tone matters.",
    socialMeaning:
      "Comments use ✋ for stop/opinion. Captions vary widely.",
    caution:
      "Ambiguity risk is high. Add 'stop' or 'high five' in text.",
    examples: [
      { context: "Stop", text: "Hold up ✋" },
      { context: "High five", text: "Yes ✋" },
      { context: "Question", text: "I have a thought ✋" },
      { context: "Boundary", text: "Nope ✋" },
      { context: "Celebrate", text: "Up top ✋" },
      { context: "Meeting", text: "Question ✋" },
    ],
    contextBlocks: [
      {
        title: "✋ vs 🤚",
        body: "🤚 shows back of hand; ✋ is palm.",
      },
      {
        title: "✋ vs 🙌",
        body: "🙌 is both hands praise; ✋ is one palm.",
      },
      {
        title: "Stop vs hi-five",
        body: "Opposite vibes — write the word.",
      },
      {
        title: "From a girl or guy",
        body: "Depends entirely on sentence.",
      },
    ],
    searchIntents: [
      "raised hand emoji meaning",
      "✋ meaning in texting",
      "stop hand emoji",
      "✋ high five",
      "what does ✋ mean",
      "✋ emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't ✋ someone's feelings mid-vulnerability without care.",
      "Avoid ambiguous alone.",
      "Skip if it could silence someone unfairly.",
    ],
    faqs: [
      {
        question: "What does ✋ mean?",
        answer:
          "Stop, high five, or hand raised — context decides.",
      },
      {
        question: "Stop?",
        answer:
          "Common reading.",
      },
      {
        question: "High five?",
        answer:
          "Also common.",
      },
      {
        question: "✋ vs 👋?",
        answer:
          "👋 waves hello; ✋ is palm gesture.",
      },
      {
        question: "Work?",
        answer:
          "OK for stop/question with words.",
      },
    ],
  },
  "raised-back-of-hand": {
    batchId: BATCH_ID,
    searchTitle: "Raised Back of Hand Emoji Meaning: Backhand Wave, Flex, or Dismiss?",
    snippetAnswer:
      "🤚 Raised Back of Hand shows the back of a raised hand — often a casual wave variant, dismissive flick, or stylistic hand.",
    detailedParagraphs: [
      "Raised Back of Hand (🤚) displays knuckles/back of palm. Usage is less standardized than 👋 or ✋.",
      "Some treat it like a wave; others as a dismissive 'talk to the hand' cousin.",
      "It also appears in ASL-adjacent or stylistic sticker use.",
      "Because meaning is fuzzy, pair with words.",
    ],
    textingMeaning:
      "Use 🤚 when you want a backhand raised gesture — clarify intent in text.",
    socialMeaning:
      "Less common publicly; appears in sticker packs and niche chats.",
    caution:
      "High misread risk. Prefer 👋 or ✋ when clarity matters.",
    examples: [
      { context: "Wave variant", text: "Hey 🤚" },
      { context: "Dismiss soft", text: "Anyway 🤚" },
      { context: "Style", text: "Hand check 🤚" },
      { context: "Group", text: "Present 🤚" },
      { context: "Playful", text: "Talk to the hand 🤚" },
      { context: "Caption", text: "Backhand vibes 🤚" },
    ],
    contextBlocks: [
      {
        title: "🤚 vs ✋",
        body: "✋ palm toward you; 🤚 shows the back.",
      },
      {
        title: "🤚 vs 👋",
        body: "👋 is clearer hello/bye.",
      },
      {
        title: "Dismissive risk",
        body: "Can read rude alone.",
      },
      {
        title: "When to prefer others",
        body: "Use 👋 for greetings.",
      },
    ],
    searchIntents: [
      "raised back of hand emoji meaning",
      "🤚 meaning in texting",
      "back of hand emoji",
      "🤚 vs ✋",
      "what does 🤚 mean",
      "🤚 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid as unclear professional signal.",
      "Don't use to dismiss people.",
      "Prefer clearer emoji when possible.",
    ],
    faqs: [
      {
        question: "What does 🤚 mean?",
        answer:
          "Raised back of hand — wave/dismiss/style; clarify.",
      },
      {
        question: "Same as ✋?",
        answer:
          "No — different side of hand.",
      },
      {
        question: "Rude?",
        answer:
          "Can be if dismissive.",
      },
      {
        question: "Common?",
        answer:
          "Less than 👋.",
      },
      {
        question: "Best practice?",
        answer:
          "Add words.",
      },
    ],
  },
  "open-hands": {
    batchId: BATCH_ID,
    searchTitle: "Open Hands Emoji Meaning: Hug Offer, Shrug Soft, or Coming Clean?",
    snippetAnswer:
      "👐 Open Hands means openness, offering a hug, jazz hands, or 'nothing to hide' — palms open toward the viewer.",
    detailedParagraphs: [
      "Open Hands (👐) shows two open palms. Readings include offer, hug readiness, or shrug-adjacent openness.",
      "People use 👐 for 'bring it in,' jazz-hands hype, or transparent vibes.",
      "It is less prayer than 🙏 and less praise than 🙌.",
      "Tone depends heavily on the sentence.",
    ],
    textingMeaning:
      "Send 👐 to offer openness, a hug vibe, or playful jazz hands.",
    socialMeaning:
      "Captions use 👐 for welcome and open-energy posts.",
    caution:
      "May be confused with shrug. Clarify.",
    examples: [
      { context: "Hug offer", text: "Come here 👐" },
      { context: "Open", text: "Being honest 👐" },
      { context: "Jazz hands", text: "Tada 👐" },
      { context: "Welcome", text: "Join us 👐" },
      { context: "Playful", text: "Surprise 👐" },
      { context: "Support", text: "I got you 👐" },
    ],
    contextBlocks: [
      {
        title: "👐 vs 🤗",
        body: "🤗 is hugging face. 👐 is open hands gesture.",
      },
      {
        title: "👐 vs 🤲",
        body: "🤲 palms up together; 👐 palms more forward/open.",
      },
      {
        title: "👐 vs 🙌",
        body: "🙌 raised praise; 👐 open offer.",
      },
      {
        title: "From a girl or guy",
        body: "Warm open gesture.",
      },
    ],
    searchIntents: [
      "open hands emoji meaning",
      "👐 meaning in texting",
      "open hands emoji",
      "👐 vs 🙌",
      "what does 👐 mean",
      "👐 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't use if hug offer is unwanted.",
      "Avoid ambiguity in serious talks.",
      "Skip formal legal threads.",
    ],
    faqs: [
      {
        question: "What does 👐 mean?",
        answer:
          "Openness, offer, or jazz hands.",
      },
      {
        question: "Hug?",
        answer:
          "Can imply hug offer.",
      },
      {
        question: "👐 vs 🤲?",
        answer:
          "Different palm orientations/uses.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually warm.",
      },
      {
        question: "Praise?",
        answer:
          "🙌 is clearer praise.",
      },
    ],
  },
  "palms-up-together": {
    batchId: BATCH_ID,
    searchTitle: "Palms Up Together Emoji Meaning: Please, Duality, or Cupped Hands?",
    snippetAnswer:
      "🤲 Palms Up Together means please, offering, cupped hands, or 'dua'/prayer-adjacent ask — hands together facing up.",
    detailedParagraphs: [
      "Palms Up Together (🤲) cups both hands upward. It can mean please, receive, or spiritual ask.",
      "Some communities use it similarly to prayer/please alongside 🙏.",
      "It also appears as 'here, take this' offering gesture.",
      "Less common than 🙏 but meaningful in the right culture.",
    ],
    textingMeaning:
      "Send 🤲 for please/offering/cupped-hands asks — know your audience for spiritual readings.",
    socialMeaning:
      "Captions use 🤲 for humble asks and offerings.",
    caution:
      "Religious readings vary — don't assume.",
    examples: [
      { context: "Please", text: "Please 🤲" },
      { context: "Offer", text: "For you 🤲" },
      { context: "Hope", text: "Hoping 🤲" },
      { context: "Ask", text: "Help 🤲" },
      { context: "Caption", text: "Open hands 🤲" },
      { context: "Thanks soft", text: "Grateful 🤲" },
    ],
    contextBlocks: [
      {
        title: "🤲 vs 🙏",
        body: "🙏 folded prayer/thanks. 🤲 palms up cupped.",
      },
      {
        title: "🤲 vs 👐",
        body: "👐 more forward open; 🤲 cupped upward.",
      },
      {
        title: "Spiritual",
        body: "Possible dua/prayer-adjacent use.",
      },
      {
        title: "From a girl or guy",
        body: "Humble ask/offer.",
      },
    ],
    searchIntents: [
      "palms up together emoji meaning",
      "🤲 meaning in texting",
      "palms up emoji",
      "🤲 vs 🙏",
      "what does 🤲 mean",
      "🤲 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't mock spiritual use.",
      "Avoid if 🙏 is clearer for your audience.",
      "Skip if it could appropriate.",
    ],
    faqs: [
      {
        question: "What does 🤲 mean?",
        answer:
          "Please, offering, or cupped palms ask.",
      },
      {
        question: "Same as 🙏?",
        answer:
          "Related but different gesture.",
      },
      {
        question: "Religious?",
        answer:
          "Can be.",
      },
      {
        question: "From a girl?",
        answer:
          "Soft ask/offer.",
      },
      {
        question: "Common?",
        answer:
          "Less than 🙏.",
      },
    ],
  },
  "pinched-fingers": {
    batchId: BATCH_ID,
    searchTitle: "Pinched Fingers Emoji Meaning: Italian Gesture, Chef’s Kiss Ask, or What Do You Want?",
    snippetAnswer:
      "🤌 Pinched Fingers means the Italian hand gesture for emphasis — 'what do you want?', perfection, or dramatic 'exactly' energy.",
    detailedParagraphs: [
      "Pinched Fingers (🤌) gathers fingers upward. Popularized as an Italian gesture for questioning emphasis.",
      "Internet use spans 'chef’s kiss' adjacent perfection and dramatic 'are you serious?'",
      "Tone can be playful or confrontational.",
      "Know your audience — cultural gesture, not universal.",
    ],
    textingMeaning:
      "Send 🤌 for emphatic 'what do you mean?' or stylish Italian-meme emphasis.",
    socialMeaning:
      "Memes and Reels use 🤌 heavily. Captions lean dramatic flair.",
    caution:
      "Can read rude. Soften with words among mixed audiences.",
    examples: [
      { context: "Emphasis", text: "Exactly 🤌" },
      { context: "Question", text: "What do you want 🤌" },
      { context: "Meme", text: "The audacity 🤌" },
      { context: "Food", text: "Perfect 🤌" },
      { context: "Drama", text: "Really 🤌" },
      { context: "Caption", text: "Italian hand era 🤌" },
    ],
    contextBlocks: [
      {
        title: "🤌 vs 🤏",
        body: "🤏 is pinching small amount. 🤌 is gathered fingers emphasis.",
      },
      {
        title: "🤌 vs 👌",
        body: "👌 is OK circle. 🤌 is pinched cluster.",
      },
      {
        title: "Cultural",
        body: "Italian meme roots.",
      },
      {
        title: "From a girl or guy",
        body: "Dramatic emphasis — context decides tone.",
      },
    ],
    searchIntents: [
      "pinched fingers emoji meaning",
      "🤌 meaning in texting",
      "Italian hand emoji",
      "🤌 what do you want",
      "what does 🤌 mean",
      "🤌 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't use to bully.",
      "Avoid if it could mock accents/cultures.",
      "Skip unclear professional use.",
    ],
    faqs: [
      {
        question: "What does 🤌 mean?",
        answer:
          "Emphatic Italian-style hand — what/exactly/perfection.",
      },
      {
        question: "Rude?",
        answer:
          "Can be.",
      },
      {
        question: "Food?",
        answer:
          "Sometimes perfection.",
      },
      {
        question: "From a girl?",
        answer:
          "Emphasis/drama.",
      },
      {
        question: "Same as 🤏?",
        answer:
          "No.",
      },
    ],
  },
  "pinching-hand": {
    batchId: BATCH_ID,
    searchTitle: "Pinching Hand Emoji Meaning: Tiny Bit, Small Amount, or Wait a Sec?",
    snippetAnswer:
      "🤏 Pinching Hand means a tiny amount — 'just a little,' small size, or slight bit of something.",
    detailedParagraphs: [
      "Pinching Hand (🤏) shows thumb and finger close together. It measures smallness.",
      "People use 🤏 for 'a little tired,' 'tiny bit spicy,' or miniature emphasis.",
      "It can also mean 'hold on a sec' in some chats.",
      "Clearer size signal than vague words alone.",
    ],
    textingMeaning:
      "Send 🤏 to show a small amount or tiny degree.",
    socialMeaning:
      "Captions use 🤏 for minimalism jokes and 'just a little' admissions.",
    caution:
      "Don't minimize serious harm with 🤏.",
    examples: [
      { context: "Tiny", text: "Just a little 🤏" },
      { context: "Size", text: "This small 🤏" },
      { context: "Admission", text: "Maybe a bit mad 🤏" },
      { context: "Food", text: "Pinch of salt 🤏" },
      { context: "Wait", text: "One sec 🤏" },
      { context: "Caption", text: "Micro dose 🤏" },
    ],
    contextBlocks: [
      {
        title: "🤏 vs 🤌",
        body: "🤌 is Italian emphasis cluster; 🤏 is tiny pinch.",
      },
      {
        title: "🤏 vs 👌",
        body: "👌 OK; 🤏 small amount.",
      },
      {
        title: "Minimize risk",
        body: "Bad for serious topics.",
      },
      {
        title: "From a girl or guy",
        body: "Usually literal smallness.",
      },
    ],
    searchIntents: [
      "pinching hand emoji meaning",
      "🤏 meaning in texting",
      "pinching hand",
      "🤏 small",
      "what does 🤏 mean",
      "🤏 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't shrink someone's feelings.",
      "Avoid unclear alone.",
      "Skip if size joke is mean.",
    ],
    faqs: [
      {
        question: "What does 🤏 mean?",
        answer:
          "A tiny bit / small amount.",
      },
      {
        question: "Same as 🤌?",
        answer:
          "No.",
      },
      {
        question: "Flirty?",
        answer:
          "Rarely.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually literal.",
      },
      {
        question: "Wait meaning?",
        answer:
          "Sometimes 'one sec.'",
      },
    ],
  },
  "crossed-fingers": {
    batchId: BATCH_ID,
    searchTitle: "Crossed Fingers Emoji Meaning: Wish Luck, Hope, or Secret Lie?",
    snippetAnswer:
      "🤞 Crossed Fingers means hoping for luck — 'fingers crossed' — or, rarely, a white-lie gesture behind the back.",
    detailedParagraphs: [
      "Crossed Fingers (🤞) is the luck charm gesture. Default reading is hope.",
      "People send 🤞 before results, interviews, and risky plans.",
      "Folk meaning also includes lying with fingers crossed — rare in emoji chat vs luck.",
      "Positive hope dominates modern texting.",
    ],
    textingMeaning:
      "Send 🤞 when you hope something works out.",
    socialMeaning:
      "Captions use 🤞 before big moments. Comments wish luck with crossed fingers.",
    caution:
      "Don't fake-promise with 'lucky' vibes instead of honesty.",
    examples: [
      { context: "Luck", text: "Fingers crossed 🤞" },
      { context: "Interview", text: "Tomorrow 🤞" },
      { context: "Exam", text: "Please pass 🤞" },
      { context: "Plan", text: "Hope it works 🤞" },
      { context: "Support", text: "Rooting for you 🤞" },
      { context: "Caption", text: "Wish us luck 🤞" },
    ],
    contextBlocks: [
      {
        title: "🤞 vs 🙏",
        body: "🙏 please/thanks/prayer; 🤞 luck hope.",
      },
      {
        title: "🤞 vs ✨",
        body: "✨ sparkle; 🤞 specific luck gesture.",
      },
      {
        title: "Lie reading",
        body: "Minor/folk — usually not primary.",
      },
      {
        title: "From a girl or guy",
        body: "Hope/support.",
      },
    ],
    searchIntents: [
      "crossed fingers emoji meaning",
      "🤞 meaning in texting",
      "fingers crossed emoji",
      "🤞 luck",
      "what does 🤞 mean",
      "🤞 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't replace real commitments with 🤞.",
      "Avoid mocking hopes.",
      "Skip if dishonest.",
    ],
    faqs: [
      {
        question: "What does 🤞 mean?",
        answer:
          "Hoping for luck / fingers crossed.",
      },
      {
        question: "Lie?",
        answer:
          "Rare folk reading.",
      },
      {
        question: "🤞 vs 🙏?",
        answer:
          "Different gestures/meanings.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually genuine hope.",
      },
      {
        question: "Before exams?",
        answer:
          "Very common.",
      },
    ],
  },
  "love-you-gesture": {
    batchId: BATCH_ID,
    searchTitle: "Love-You Gesture Emoji Meaning: I Love You Sign, ILY Hand, or Fan Love?",
    snippetAnswer:
      "🤟 Love-You Gesture means 'I love you' in ASL-inspired hand shape (ILY) — fan love, affection, or rock-ish warmth.",
    detailedParagraphs: [
      "Love-You Gesture (🤟) combines I-L-Y handshape. It signals love-you without a heart.",
      "Deaf community roots matter — treat respectfully.",
      "Fans and friends use 🤟 for affectionate love-you shorthand.",
      "Looks a bit like 🤘 but means love, not metal.",
    ],
    textingMeaning:
      "Send 🤟 to say love you with the ILY hand — friends, family, fans.",
    socialMeaning:
      "Captions use 🤟 for ILY aesthetics. Concerts sometimes mix with 🤘.",
    caution:
      "Don't confuse with 🤘. Respect ASL origin — don't mock.",
    examples: [
      { context: "Love you", text: "Love you 🤟" },
      { context: "Fan", text: "Stan forever 🤟" },
      { context: "Friend", text: "Appreciate you 🤟" },
      { context: "Family", text: "Miss you 🤟" },
      { context: "Caption", text: "ILY 🤟" },
      { context: "Reply", text: "Same 🤟" },
    ],
    contextBlocks: [
      {
        title: "🤟 vs 🤘",
        body: "🤘 is rock on. 🤟 is ILY love-you.",
      },
      {
        title: "🤟 vs ❤️",
        body: "❤️ heart symbol; 🤟 hand ILY.",
      },
      {
        title: "ASL",
        body: "Inspired by I-L-Y handshape.",
      },
      {
        title: "From a girl or guy",
        body: "Affectionate love-you.",
      },
    ],
    searchIntents: [
      "love you gesture emoji meaning",
      "🤟 meaning in texting",
      "ILY hand emoji",
      "🤟 vs 🤘",
      "what does 🤟 mean",
      "🤟 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't mock ASL.",
      "Avoid confusing with metal horns in metal contexts without clarity.",
      "Skip if love-you is unwanted.",
    ],
    faqs: [
      {
        question: "What does 🤟 mean?",
        answer:
          "I love you hand gesture.",
      },
      {
        question: "Same as 🤘?",
        answer:
          "No.",
      },
      {
        question: "Romantic?",
        answer:
          "Can be; also platonic/fan.",
      },
      {
        question: "From a girl?",
        answer:
          "Affection.",
      },
      {
        question: "ASL?",
        answer:
          "Related/inspired — be respectful.",
      },
    ],
  },
  "sign-of-the-horns": {
    batchId: BATCH_ID,
    searchTitle: "Sign of the Horns Emoji Meaning: Rock On, Metal, or Hang Loose Cousin?",
    snippetAnswer:
      "🤘 Sign of the Horns means rock on / metal horns — concert energy, hype, or devil-horns fun — not the ILY love gesture.",
    detailedParagraphs: [
      "Sign of the Horns (🤘) is the metal hand. Concert culture owns it.",
      "People send 🤘 for rock hype, games, and playful 'horns up.'",
      "Distinct from 🤟 love-you — wrong swap changes meaning a lot.",
      "Also appears in sports and meme hype.",
    ],
    textingMeaning:
      "Send 🤘 for rock-on hype and metal vibes.",
    socialMeaning:
      "Captions under concerts and hype videos collect 🤘.",
    caution:
      "In some cultures horns gestures differ — know audience. Don't confuse with 🤟.",
    examples: [
      { context: "Concert", text: "Let's go 🤘" },
      { context: "Hype", text: "This track 🤘" },
      { context: "Game", text: "Won 🤘" },
      { context: "Meme", text: "Chaos 🤘" },
      { context: "Caption", text: "Horns up 🤘" },
      { context: "Reply", text: "Metal 🤘" },
    ],
    contextBlocks: [
      {
        title: "🤘 vs 🤟",
        body: "🤟 = love you. 🤘 = rock on.",
      },
      {
        title: "🤘 vs 🤙",
        body: "🤙 call/shaka; 🤘 metal.",
      },
      {
        title: "Music",
        body: "Default concert reaction.",
      },
      {
        title: "From a girl or guy",
        body: "Hype energy.",
      },
    ],
    searchIntents: [
      "sign of the horns emoji meaning",
      "🤘 meaning in texting",
      "rock on emoji",
      "🤘 vs 🤟",
      "what does 🤘 mean",
      "🤘 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't confuse with ILY.",
      "Avoid offensive regional meanings if relevant.",
      "Skip solemn contexts.",
    ],
    faqs: [
      {
        question: "What does 🤘 mean?",
        answer:
          "Rock on / metal horns.",
      },
      {
        question: "Love you?",
        answer:
          "That's 🤟.",
      },
      {
        question: "Concert?",
        answer:
          "Yes.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually hype.",
      },
      {
        question: "Devil?",
        answer:
          "Playful metal, not literal.",
      },
    ],
  },
  "writing-hand": {
    batchId: BATCH_ID,
    searchTitle: "Writing Hand Emoji Meaning: Writing, Signing, or Taking Notes?",
    snippetAnswer:
      "✍️ Writing Hand means writing, signing, journaling, or 'I'm drafting this' — a hand with a pen.",
    detailedParagraphs: [
      "Writing Hand (✍️) shows a hand writing. It marks authorship and note-taking.",
      "People use ✍️ for essays, contracts vibes, and 'let me write that down.'",
      "Creators use it for writing-day captions.",
      "Skin-tone variants exist.",
    ],
    textingMeaning:
      "Send ✍️ when talking about writing, signing, or journaling.",
    socialMeaning:
      "Captions use ✍️ for writers and signings. Comments under essays drop it.",
    caution:
      "Not a signature legally — don't imply legal signing by emoji alone.",
    examples: [
      { context: "Writing", text: "Drafting now ✍️" },
      { context: "Notes", text: "Wrote it down ✍️" },
      { context: "Author", text: "New chapter ✍️" },
      { context: "Sign", text: "Sign here vibe ✍️" },
      { context: "Caption", text: "Writer mode ✍️" },
      { context: "School", text: "Essay time ✍️" },
    ],
    contextBlocks: [
      {
        title: "✍️ vs 📝",
        body: "📝 is memo/document; ✍️ is the writing hand action.",
      },
      {
        title: "✍️ vs 🖋️",
        body: "Fountain pen object vs hand writing.",
      },
      {
        title: "Creators",
        body: "Writing process posts.",
      },
      {
        title: "From a girl or guy",
        body: "Literal writing.",
      },
    ],
    searchIntents: [
      "writing hand emoji meaning",
      "✍️ meaning in texting",
      "writing hand",
      "✍️ emoji",
      "what does ✍️ mean",
      "✍️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't treat as legal signature.",
      "Avoid if mocking someone's writing.",
      "Skip unclear alone.",
    ],
    faqs: [
      {
        question: "What does ✍️ mean?",
        answer:
          "Writing / signing / noting.",
      },
      {
        question: "Legal sign?",
        answer:
          "No.",
      },
      {
        question: "✍️ vs 📝?",
        answer:
          "Hand action vs memo.",
      },
      {
        question: "From a girl?",
        answer:
          "Usually literal.",
      },
      {
        question: "Authors?",
        answer:
          "Common.",
      },
    ],
  },
  "selfie": {
    batchId: BATCH_ID,
    searchTitle: "Selfie Emoji Meaning: Taking a Selfie, Camera Arm, or Pic Coming?",
    snippetAnswer:
      "🤳 Selfie means taking a selfie — phone held out, camera arm, or 'pic of me incoming.'",
    detailedParagraphs: [
      "Selfie (🤳) shows a hand holding a phone for a self-portrait. It labels selfie culture.",
      "People send 🤳 to announce a selfie or joke about vanity.",
      "Creators use it in 'selfie day' captions.",
      "Clearer than 📷 when the subject is specifically a selfie.",
    ],
    textingMeaning:
      "Send 🤳 when talking about selfies or sending one.",
    socialMeaning:
      "Captions tag selfie posts. Comments use 🤳 under mirror pics.",
    caution:
      "Don't shame people for selfies with 🤳 mockery.",
    examples: [
      { context: "Announce", text: "Selfie incoming 🤳" },
      { context: "Caption", text: "Mirror 🤳" },
      { context: "Joke", text: "Vanity slot 🤳" },
      { context: "Request", text: "Send a selfie 🤳" },
      { context: "Travel", text: "Tourist selfie 🤳" },
      { context: "Reply", text: "Cute 🤳" },
    ],
    contextBlocks: [
      {
        title: "🤳 vs 📷",
        body: "📷 is camera; 🤳 is selfie specifically.",
      },
      {
        title: "🤳 vs 📱",
        body: "📱 phone; 🤳 selfie pose.",
      },
      {
        title: "Culture",
        body: "Selfie-era shorthand.",
      },
      {
        title: "From a girl or guy",
        body: "Usually literal.",
      },
    ],
    searchIntents: [
      "selfie emoji meaning",
      "🤳 meaning in texting",
      "selfie emoji",
      "🤳 vs 📷",
      "what does 🤳 mean",
      "🤳 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't body-shame via selfie jokes.",
      "Avoid non-consensual selfie pressure.",
      "Skip formal docs.",
    ],
    faqs: [
      {
        question: "What does 🤳 mean?",
        answer:
          "Selfie / taking a self photo.",
      },
      {
        question: "Request?",
        answer:
          "Can ask for a selfie.",
      },
      {
        question: "🤳 vs 📸?",
        answer:
          "Selfie vs general camera snap.",
      },
      {
        question: "From a girl?",
        answer:
          "Often literal.",
      },
      {
        question: "Only Gen Z?",
        answer:
          "Widely understood.",
      },
    ],
  },
  "middle-finger": {
    batchId: BATCH_ID,
    searchTitle: "Middle Finger Emoji Meaning: Offense, Anger, or Extreme Dismissal?",
    snippetAnswer:
      "🖕 Middle Finger is an offensive gesture meaning extreme dismissal, anger, or insult — use only when you fully accept the impact.",
    detailedParagraphs: [
      "Middle Finger (🖕) is a highly offensive hand gesture in many cultures. In texting it means F-you energy or rage dismissal.",
      "Some friend groups use it jokingly; many workplaces and families treat it as harassment.",
      "Platforms may filter or judge context in reports.",
      "There is almost always a clearer, less destructive way to express anger.",
    ],
    textingMeaning:
      "Only send 🖕 if you intend a strong insult and accept consequences — never in professional or unclear relationships.",
    socialMeaning:
      "Public comments using 🖕 often escalate drama and can violate community guidelines.",
    caution:
      "High offense risk across ages and cultures. Prefer words if you need to set a boundary.",
    examples: [
      { context: "Anger", text: "I'm done 🖕" },
      { context: "Joke among friends", text: "Lol 🖕" },
      { context: "Dismissal", text: "No thanks 🖕" },
      { context: "Rage reply", text: "Absolutely not 🖕" },
      { context: "Meme", text: "Mood 🖕" },
      { context: "Boundary gone nuclear", text: "Leave me alone 🖕" },
    ],
    contextBlocks: [
      {
        title: "🖕 vs 👎",
        body: "👎 is disapproval; 🖕 is severe insult.",
      },
      {
        title: "🖕 vs 😠",
        body: "😠 shows anger face; 🖕 performs insult.",
      },
      {
        title: "Friend irony",
        body: "Only if mutual roast culture is crystal clear.",
      },
      {
        title: "Legal/work",
        body: "Can be harassment — avoid.",
      },
    ],
    searchIntents: [
      "middle finger emoji meaning",
      "🖕 meaning in texting",
      "middle finger emoji",
      "is middle finger emoji offensive",
      "what does 🖕 mean",
      "🖕 emoji copy and paste",
    ],
    whenNotToUse: [
      "Never send to coworkers, clients, teachers, or strangers.",
      "Don't use against vulnerable people.",
      "Avoid when de-escalation is needed.",
    ],
    faqs: [
      {
        question: "What does 🖕 mean?",
        answer:
          "An offensive insult gesture — extreme dismissal/anger.",
      },
      {
        question: "Is it always rude?",
        answer:
          "Yes to most audiences.",
      },
      {
        question: "OK with friends?",
        answer:
          "Only if clearly joking and mutual.",
      },
      {
        question: "Work?",
        answer:
          "No.",
      },
      {
        question: "Better alternative?",
        answer:
          "Say the boundary in words without the insult.",
      },
    ],
  },
  "backhand-index-pointing-right": {
    batchId: BATCH_ID,
    searchTitle: "Backhand Index Pointing Right Emoji Meaning: Look Right, Next, or Direction?",
    snippetAnswer:
      "👉 Backhand Index Pointing Right means look this way / next item — a rightward point for attention or lists.",
    detailedParagraphs: [
      "👉 points right. Used for directing attention, listing steps, and 'see this.'",
      "Thread replies use 👉 before links and callouts.",
      "It is utilitarian more than emotional.",
      "Pairs with 👈 for emphasis frames.",
    ],
    textingMeaning:
      "Send 👉 to point at something on the right or introduce a next point.",
    socialMeaning:
      "Captions and carousels use 👉 for swipe/next cues.",
    caution:
      "Don't point aggressively at people in sensitive talks.",
    examples: [
      { context: "List", text: "First 👉" },
      { context: "Link", text: "See here 👉" },
      { context: "Next", text: "Then 👉" },
      { context: "Callout", text: "This 👉" },
      { context: "Caption", text: "Swipe 👉" },
      { context: "Thread", text: "Point 👉" },
    ],
    contextBlocks: [
      {
        title: "👉 vs ➡️",
        body: "➡️ is arrow symbol; 👉 is pointing hand.",
      },
      {
        title: "👉 vs 👈",
        body: "Opposite directions.",
      },
      {
        title: "UX",
        body: "Common in IG captions.",
      },
      {
        title: "From anyone",
        body: "Directional.",
      },
    ],
    searchIntents: [
      "pointing right emoji meaning",
      "👉 meaning in texting",
      "backhand index pointing right",
      "👉 emoji",
      "what does 👉 mean",
      "👉 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't use to bully.",
      "Avoid overpointing spam.",
      "Skip if inaccessible without text.",
    ],
    faqs: [
      {
        question: "What does 👉 mean?",
        answer:
          "Pointing right / look here / next.",
      },
      {
        question: "Emotional?",
        answer:
          "Rarely.",
      },
      {
        question: "👉 vs ➡️?",
        answer:
          "Hand vs arrow.",
      },
      {
        question: "Lists?",
        answer:
          "Very common.",
      },
      {
        question: "Flirty?",
        answer:
          "Not by itself.",
      },
    ],
  },
  "backhand-index-pointing-left": {
    batchId: BATCH_ID,
    searchTitle: "Backhand Index Pointing Left Emoji Meaning: Look Left, Back, or That Way?",
    snippetAnswer:
      "👈 Backhand Index Pointing Left means look left / previous — a leftward point for attention or callbacks.",
    detailedParagraphs: [
      "👈 points left. Used for 'that one,' previous items, and framing text between 👉 👈.",
      "Creators sandwich words like 👉 this 👈.",
      "Utilitarian directional cue.",
      "Less 'next' than 👉 in LTR languages — more 'back/that.'",
    ],
    textingMeaning:
      "Send 👈 to point left or emphasize a sandwiched phrase.",
    socialMeaning:
      "Captions use 👈👉 frames. Threads point back to earlier messages.",
    caution:
      "Don't harass with pointing.",
    examples: [
      { context: "Frame", text: "👉 vibe 👈" },
      { context: "Back", text: "Earlier 👈" },
      { context: "Callout", text: "That 👈" },
      { context: "Caption", text: "Look left 👈" },
      { context: "List", text: "Previous 👈" },
      { context: "Reply", text: "This one 👈" },
    ],
    contextBlocks: [
      {
        title: "👈 vs 👉",
        body: "Opposite directions.",
      },
      {
        title: "👈 vs ⬅️",
        body: "Hand vs arrow.",
      },
      {
        title: "Sandwich",
        body: "👉 text 👈 pattern.",
      },
      {
        title: "From anyone",
        body: "Directional.",
      },
    ],
    searchIntents: [
      "pointing left emoji meaning",
      "👈 meaning in texting",
      "backhand index pointing left",
      "👈 emoji",
      "what does 👈 mean",
      "👈 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't bully with points.",
      "Avoid spam.",
      "Provide text alternatives.",
    ],
    faqs: [
      {
        question: "What does 👈 mean?",
        answer:
          "Pointing left / look that way.",
      },
      {
        question: "With 👉?",
        answer:
          "Emphasis frame.",
      },
      {
        question: "Emotional?",
        answer:
          "No.",
      },
      {
        question: "Lists?",
        answer:
          "Previous/back.",
      },
      {
        question: "Flirty?",
        answer:
          "No.",
      },
    ],
  },
  "backhand-index-pointing-up": {
    batchId: BATCH_ID,
    searchTitle: "Backhand Index Pointing Up Emoji Meaning: Up There, Important, or One Sec?",
    snippetAnswer:
      "👆 Backhand Index Pointing Up means up / note this / one moment — an upward point for attention above or emphasis.",
    detailedParagraphs: [
      "👆 points up. Used for 'as mentioned above,' important note, or wait-one.",
      "Thread culture points up to previous messages.",
      "Also literal 'upstairs/up there.'",
      "Can mean number one in some playful uses.",
    ],
    textingMeaning:
      "Send 👆 to point up, highlight above text, or flag importance.",
    socialMeaning:
      "Comments use 👆 under pinned points. Captions mark key notes.",
    caution:
      "Don't use as a condescending 'actually 👆.'",
    examples: [
      { context: "Above", text: "As I said 👆" },
      { context: "Important", text: "Note 👆" },
      { context: "Literal", text: "Up there 👆" },
      { context: "Wait", text: "One sec 👆" },
      { context: "Caption", text: "Key point 👆" },
      { context: "Thread", text: "See above 👆" },
    ],
    contextBlocks: [
      {
        title: "👆 vs ☝️",
        body: "☝️ is index pointing up (same idea, different emoji).",
      },
      {
        title: "👆 vs 👇",
        body: "Opposite vertical directions.",
      },
      {
        title: "Condescension risk",
        body: "Tone can feel smug.",
      },
      {
        title: "From anyone",
        body: "Directional/emphasis.",
      },
    ],
    searchIntents: [
      "pointing up emoji meaning",
      "👆 meaning in texting",
      "backhand index pointing up",
      "👆 emoji",
      "what does 👆 mean",
      "👆 emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid smug corrections.",
      "Don't spam.",
      "Be clear.",
    ],
    faqs: [
      {
        question: "What does 👆 mean?",
        answer:
          "Pointing up / see above / note.",
      },
      {
        question: "👆 vs ☝️?",
        answer:
          "Similar up-point family.",
      },
      {
        question: "Rude?",
        answer:
          "Can feel smug.",
      },
      {
        question: "Threads?",
        answer:
          "Common.",
      },
      {
        question: "Number one?",
        answer:
          "Sometimes playful.",
      },
    ],
  },
  "backhand-index-pointing-down": {
    batchId: BATCH_ID,
    searchTitle: "Backhand Index Pointing Down Emoji Meaning: Look Below, Scroll Down, or Details Under?",
    snippetAnswer:
      "👇 Backhand Index Pointing Down means look below / scroll down — a downward point to content underneath.",
    detailedParagraphs: [
      "👇 points down. Captions use it for 'link in bio' style cues and details below.",
      "Threads point to replies underneath.",
      "Utilitarian UX emoji.",
      "Pairs with 'click below' instructions.",
    ],
    textingMeaning:
      "Send 👇 to direct someone to content below.",
    socialMeaning:
      "YouTube/IG captions flood 👇 for links and reveals.",
    caution:
      "Don't overpromise 'below' if nothing follows.",
    examples: [
      { context: "Below", text: "Details 👇" },
      { context: "Link", text: "Click 👇" },
      { context: "Reveal", text: "Wait for it 👇" },
      { context: "Caption", text: "More below 👇" },
      { context: "Thread", text: "Reply 👇" },
      { context: "List", text: "Next items 👇" },
    ],
    contextBlocks: [
      {
        title: "👇 vs 👆",
        body: "Opposite directions.",
      },
      {
        title: "👇 vs ⬇️",
        body: "Hand vs arrow.",
      },
      {
        title: "Marketing",
        body: "Common CTA.",
      },
      {
        title: "From anyone",
        body: "Directional.",
      },
    ],
    searchIntents: [
      "pointing down emoji meaning",
      "👇 meaning in texting",
      "backhand index pointing down",
      "👇 emoji",
      "what does 👇 mean",
      "👇 emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't fake CTAs.",
      "Avoid spammy 👇👇👇.",
      "Provide accessible text.",
    ],
    faqs: [
      {
        question: "What does 👇 mean?",
        answer:
          "Look below / scroll down.",
      },
      {
        question: "Links?",
        answer:
          "Very common CTA.",
      },
      {
        question: "👇 vs ⬇️?",
        answer:
          "Hand vs arrow.",
      },
      {
        question: "Emotional?",
        answer:
          "No.",
      },
      {
        question: "Overuse?",
        answer:
          "Yes, can annoy.",
      },
    ],
  },
  "index-pointing-up": {
    batchId: BATCH_ID,
    searchTitle: "Index Pointing Up Emoji Meaning: One, Attention, or Point Number One?",
    snippetAnswer:
      "☝️ Index Pointing Up means one / attention / point number one — an upward index often used for 'firstly' or emphasis.",
    detailedParagraphs: [
      "Index Pointing Up (☝️) is a single finger up. Readings include the number one and 'note this.'",
      "People use ☝️ for ranked lists and 'one thing.'",
      "Similar lane to 👆 with a slightly different glyph.",
      "Can feel teacherly — tone carefully.",
    ],
    textingMeaning:
      "Send ☝️ for 'one thing' emphasis or number-one energy.",
    socialMeaning:
      "Captions use ☝️ in tips lists. Comments mark top takes.",
    caution:
      "Avoid condescending lecture vibes.",
    examples: [
      { context: "One", text: "One thing ☝️" },
      { context: "Tip", text: "Remember ☝️" },
      { context: "Rank", text: "Number one ☝️" },
      { context: "Note", text: "Important ☝️" },
      { context: "Caption", text: "Rule one ☝️" },
      { context: "Reply", text: "This ☝️" },
    ],
    contextBlocks: [
      {
        title: "☝️ vs 👆",
        body: "Both point up; ☝️ often 'one/note,' 👆 often 'above.'",
      },
      {
        title: "☝️ vs 1️⃣",
        body: "Keycap one vs hand.",
      },
      {
        title: "Teacher tone",
        body: "Can feel didactic.",
      },
      {
        title: "From anyone",
        body: "Emphasis.",
      },
    ],
    searchIntents: [
      "index pointing up emoji meaning",
      "☝️ meaning in texting",
      "index pointing up",
      "☝️ vs 👆",
      "what does ☝️ mean",
      "☝️ emoji copy and paste",
    ],
    whenNotToUse: [
      "Don't lecture people.",
      "Avoid spam.",
      "Be kind in corrections.",
    ],
    faqs: [
      {
        question: "What does ☝️ mean?",
        answer:
          "One / attention / point number one.",
      },
      {
        question: "Same as 👆?",
        answer:
          "Similar, not identical usage.",
      },
      {
        question: "Lists?",
        answer:
          "Yes.",
      },
      {
        question: "Rude?",
        answer:
          "Can feel smug.",
      },
      {
        question: "Number one?",
        answer:
          "Common reading.",
      },
    ],
  },
};
