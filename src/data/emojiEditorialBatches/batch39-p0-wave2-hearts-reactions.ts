import type { EmojiBatchEnrichment } from "./types";

/**
 * P0 Wave 2 — exclusivity for colored hearts + high-demand reactions.
 * Differentiation focus: each heart color gets a distinct social code (not “heart = love”).
 */
const BATCH_ID = "39-p0-wave2-hearts-reactions";

export const batch39P0Wave2HeartsReactions: Record<string, EmojiBatchEnrichment> = {
  "purple-heart": {
    batchId: BATCH_ID,
    searchTitle: "Purple Heart Emoji Meaning: Friendship, Fandom, Love, and Texting",
    snippetAnswer:
      "💜 Purple Heart often means deep friendship, loyalty, fandom love, or soft spiritual vibes — less default-romantic than ❤️, more “I really care about this bond.”",
    detailedParagraphs: [
      "Purple Heart (💜) is a colored love mark with niche energy. Where ❤️ is classic romance, 💜 frequently signals chosen family, best-friend devotion, or obsessive fandom affection.",
      "Friend groups use 💜 for “I got you” warmth without the dating implication a red heart can carry. It is common in long-running group chats and supportive DMs.",
      "Fandom culture adopted 💜 for idols, ships, and purple-branded artists. Seeing 💜 under a comeback post often means stan love, not a romantic confession to the commenter.",
      "Some people also link purple to creativity or calm spirituality. Read the thread: playlist shares and late-night talks lean friendship; couple captions can still be romantic.",
    ],
    textingMeaning:
      "Send 💜 to thank a close friend, hype a favorite creator, or show care that feels deep but not automatically flirty.",
    socialMeaning:
      "Comments and captions use 💜 for fandom, friendship aesthetics, and soft loyalty posts. Brands with purple identity lean on it for community love.",
    caution:
      "Do not assume 💜 is always platonic — some couples prefer it. Likewise, do not treat every 💜 as a crush signal.",
    examples: [
      { context: "Best friend", text: "Couldn't do this without you 💜" },
      { context: "Fandom", text: "New album forever 💜" },
      { context: "Support", text: "Proud of you always 💜" },
      { context: "Group chat", text: "Love this crew 💜" },
      { context: "Playlist", text: "This song is us 💜" },
      { context: "Thank you", text: "Thanks for checking in 💜" },
    ],
    contextBlocks: [
      {
        title: "💜 vs ❤️",
        body: "❤️ is the default romantic/general love heart. 💜 often codes deeper friendship or fandom unless the relationship is clearly romantic.",
      },
      {
        title: "From a girl or guy",
        body: "Usually warm loyalty. In a flirt thread it can still mean interest — pair with how often they use red hearts elsewhere.",
      },
      {
        title: "Fandom shorthand",
        body: "Stan accounts and reply guys under purple-branded artists flood 💜 as identity, not dating.",
      },
      {
        title: "Work chats",
        body: "Safer than ❤️ for casual teammate thanks, but still informal — skip with strict clients.",
      },
    ],
    searchIntents: [
      "purple heart emoji meaning",
      "💜 meaning in texting",
      "💜 meaning from a girl",
      "purple heart vs red heart",
      "what does purple heart mean",
      "💜 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 💜 alone if the other person may misread romance or fandom slang.",
      "Avoid as the only reply to serious grief without words.",
      "Skip in formal professional mail.",
    ],
    faqs: [
      {
        question: "What does 💜 mean in texting?",
        answer:
          "Deep care, friendship, or fandom love. Less automatically romantic than ❤️, but context still decides.",
      },
      {
        question: "Is 💜 romantic?",
        answer:
          "Sometimes. Many people use it platonically for best friends; couples may choose it as their color.",
      },
      {
        question: "💜 vs 💙?",
        answer:
          "💙 often loyalty/trust or calm affection. 💜 leans friendship-depth, creativity, or fandom.",
      },
      {
        question: "What does 💜 mean from a girl?",
        answer:
          "Usually warmth and closeness. Check whether she also sends ❤️ — that mix helps separate friend vs crush.",
      },
      {
        question: "Why do fans use 💜?",
        answer:
          "Purple branding and stan culture made 💜 a loyalty badge under idols, ships, and artist posts.",
      },
    ],
  },

  "blue-heart": {
    batchId: BATCH_ID,
    searchTitle: "Blue Heart Emoji Meaning: Trust, Loyalty, Friendship, and Texting",
    snippetAnswer:
      "💙 Blue Heart usually means trust, loyalty, calm affection, or “I’ve got your back” — often friendship or brotherhood energy rather than classic red romance.",
    detailedParagraphs: [
      "Blue Heart (💙) carries cooler warmth than ❤️. People reach for it when they want care without the full romantic voltage of red.",
      "Loyalty and trust are the dominant readings: teammates, long friendships, and “always here” check-ins. Sports fans also use team-blue hearts.",
      "It can mark sadness or melancholy in some threads (“feeling blue 💙”), but that reading is secondary to supportive affection.",
      "In family and friend groups, 💙 is a safe heart when red might confuse boundaries. Couples still use it when blue is “their” color.",
    ],
    textingMeaning:
      "Use 💙 for loyal support, calm love, or friendship gratitude. Soft close after advice or encouragement.",
    socialMeaning:
      "Captions use 💙 for friendship posts, memorial calm, brand-blue communities, and sports loyalty. Comments drop 💙 as steady approval.",
    caution:
      "After a breakup, 💙 can still feel intimate. “Feeling blue” jokes may miss if someone is actually grieving.",
    examples: [
      { context: "Loyalty", text: "Always in your corner 💙" },
      { context: "Friendship", text: "Miss our talks 💙" },
      { context: "Support", text: "You handled that so well 💙" },
      { context: "Sports", text: "Game day 💙" },
      { context: "Family", text: "Love you, bro 💙" },
      { context: "Calm thanks", text: "Appreciate you 💙" },
    ],
    contextBlocks: [
      {
        title: "💙 vs ❤️",
        body: "❤️ is classic love/romance default. 💙 is trust, loyalty, and cooler affection — often safer for platonic bonds.",
      },
      {
        title: "Brotherhood and friendship",
        body: "Guys’ group chats frequently prefer 💙 over ❤️ to keep vibes supportive without flirt risk.",
      },
      {
        title: "Sports and brands",
        body: "Team colors and blue logos turn 💙 into identity, not romance.",
      },
      {
        title: "Sadness reading",
        body: "Rarely, 💙 pairs with “feeling down.” Words make that clear — otherwise assume supportive love.",
      },
    ],
    searchIntents: [
      "blue heart emoji meaning",
      "💙 meaning in texting",
      "💙 meaning from a guy",
      "blue heart vs red heart",
      "what does blue heart mean",
      "💙 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 💙 as a vague reply to trauma without supportive words.",
      "Avoid if your only intent is romance and the person expects ❤️ clarity.",
      "Skip in ultra-formal professional contexts.",
    ],
    faqs: [
      {
        question: "What does 💙 mean in texting?",
        answer:
          "Trust, loyalty, or calm affection — often friendship. Romance is possible but less default than ❤️.",
      },
      {
        question: "What does 💙 mean from a guy?",
        answer:
          "Usually “I care / I’ve got you” energy. With a crush it can be soft interest; with friends it is loyalty.",
      },
      {
        question: "Is 💙 romantic?",
        answer:
          "It can be, especially if blue is a couple’s color. Alone it more often reads supportive than steamy.",
      },
      {
        question: "💙 vs 💜?",
        answer:
          "💜 skews friendship-depth/fandom. 💙 skews loyalty/trust and cooler support.",
      },
      {
        question: "Can 💙 mean sad?",
        answer:
          "Sometimes with “feeling blue,” but most texts mean care. Context decides.",
      },
    ],
  },

  "black-heart": {
    batchId: BATCH_ID,
    searchTitle: "Black Heart Emoji Meaning: Dark Humor, Aesthetic, Mourning, or Love?",
    snippetAnswer:
      "🖤 Black Heart can mean dark humor, edgy aesthetic love, dry affection, or mourning — not classic sweet romance. Tone depends heavily on the chat.",
    detailedParagraphs: [
      "Black Heart (🖤) rejects the soft candy vibe of pink/red hearts. It signals love with an edge: ironic, gothic, mourning, or “I’m dead inside but I care.”",
      "Friend groups that share dark humor use 🖤 as affectionate dryness — compliments without sugary energy.",
      "Memorial and grief posts sometimes use 🖤 for somber love. That reading is serious; meme use elsewhere should not collide with real loss threads.",
      "Aesthetic communities (alt fashion, night photography, metal playlists) treat 🖤 as style identity. Romance still happens, just cooler and less fairy-tale.",
    ],
    textingMeaning:
      "Send 🖤 for edgy affection, shared cynicism, or solemn support. It says care without sounding cute.",
    socialMeaning:
      "Captions use 🖤 for dark aesthetics, breakup aftermath, and ironic love. Comments drop 🖤 under moody art and memorial posts.",
    caution:
      "Do not meme-spam 🖤 under someone’s real funeral announcement. Older relatives may only see “death” and worry.",
    examples: [
      { context: "Dark humor", text: "We're both disasters 🖤" },
      { context: "Aesthetic", text: "Night walk mood 🖤" },
      { context: "Dry affection", text: "Miss your chaos 🖤" },
      { context: "Memorial", text: "Forever in our hearts 🖤" },
      { context: "Playlist", text: "This album owns me 🖤" },
      { context: "Friend bond", text: "Ride or die 🖤" },
    ],
    contextBlocks: [
      {
        title: "🖤 vs ❤️",
        body: "❤️ is warm classic love. 🖤 is cooler, darker, or more ironic — same “care,” different costume.",
      },
      {
        title: "Mourning vs meme",
        body: "In grief posts, 🖤 is solemn. In meme chats, it is aesthetic sarcasm. Never mix those registers.",
      },
      {
        title: "From a girl or guy",
        body: "Often edgy closeness. In flirt threads it can mean attraction with attitude, not soft butterflies.",
      },
      {
        title: "🖤 vs 💀",
        body: "💀 is “I’m dead” reaction. 🖤 is affection/identity with darkness — not the same joke.",
      },
    ],
    searchIntents: [
      "black heart emoji meaning",
      "🖤 meaning in texting",
      "black heart emoji from a girl",
      "🖤 vs ❤️",
      "what does black heart mean",
      "🖤 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use joking 🖤 in real bereavement threads.",
      "Avoid with people who only know hearts as romance/cute.",
      "Skip in cheerful brand campaigns unless dark aesthetic is intentional.",
    ],
    faqs: [
      {
        question: "What does 🖤 mean in texting?",
        answer:
          "Edgy affection, dark humor bond, aesthetic love, or mourning — context picks the lane.",
      },
      {
        question: "Is 🖤 romantic?",
        answer:
          "It can be, usually in a cooler/alt way. It is less “sweet valentine” than ❤️.",
      },
      {
        question: "Does 🖤 mean death?",
        answer:
          "Not by itself in slang chats. In memorial posts it can signal grief. Read the caption.",
      },
      {
        question: "🖤 vs 💔?",
        answer:
          "💔 is heartbreak. 🖤 is dark love or mood — pain is optional.",
      },
      {
        question: "What does 🖤 mean from a girl?",
        answer:
          "Often “I like you with an edge” or shared aesthetic. Rarely the softest crush signal.",
      },
    ],
  },

  "white-heart": {
    batchId: BATCH_ID,
    searchTitle: "White Heart Emoji Meaning: Pure Love, Soft Aesthetic, or Support?",
    snippetAnswer:
      "🤍 White Heart usually means pure, soft, or clean affection — gentle love, aesthetic warmth, or calm support without loud romance colors.",
    detailedParagraphs: [
      "White Heart (🤍) feels minimal and soft. People use it when red feels too intense and pink feels too cute-coded.",
      "It shows up in clean aesthetic posts, wedding whites, memorial calm, and “pure vibes” friendship messages.",
      "Some send 🤍 as neutral love — caring without declaring a color tribe (blue loyalty, purple fandom, black edge).",
      "On light-mode chats it can look subtle; on dark themes it pops. Either way, the tone stays quiet and sincere more often than flirty-hot.",
    ],
    textingMeaning:
      "Use 🤍 for gentle thanks, soft love, or calm encouragement when ❤️ would feel heavy.",
    socialMeaning:
      "Captions lean bridal, minimalist, pet memorials, and soft lifestyle feeds. Comments use 🤍 as polite warm approval.",
    caution:
      "Because it is subtle, a lone 🤍 can feel vague. Add words for important emotions. Some platforms render it differently — confirm it sent as intended.",
    examples: [
      { context: "Soft love", text: "Thinking of you 🤍" },
      { context: "Aesthetic", text: "Morning light 🤍" },
      { context: "Support", text: "Here for you 🤍" },
      { context: "Wedding", text: "Congrats you two 🤍" },
      { context: "Pet", text: "Best boy 🤍" },
      { context: "Thank you", text: "Grateful 🤍" },
    ],
    contextBlocks: [
      {
        title: "🤍 vs ❤️",
        body: "❤️ is bold classic love. 🤍 is quieter, cleaner affection — often less romantic voltage.",
      },
      {
        title: "🤍 vs 🩷",
        body: "🩷 is cuter/pink aesthetic. 🤍 is minimal and soft without pink coding.",
      },
      {
        title: "Memorial use",
        body: "White can signal peace and remembrance. Keep captions respectful when that is the intent.",
      },
      {
        title: "From a girl or guy",
        body: "Usually gentle care. Less thirsty than 😍 or 🔥; more “soft presence.”",
      },
    ],
    searchIntents: [
      "white heart emoji meaning",
      "🤍 meaning in texting",
      "white heart vs red heart",
      "what does white heart mean",
      "🤍 meaning from a girl",
      "🤍 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not rely on 🤍 alone for urgent emotional support — write the message.",
      "Avoid if the recipient cannot see white-on-white rendering clearly.",
      "Skip as a joke in grief threads.",
    ],
    faqs: [
      {
        question: "What does 🤍 mean in texting?",
        answer:
          "Soft, pure, or calm affection — gentle love or support without loud color codes.",
      },
      {
        question: "Is 🤍 romantic?",
        answer:
          "It can be, usually softly. Many use it for friendship or aesthetic warmth too.",
      },
      {
        question: "🤍 vs 💛?",
        answer:
          "💛 often friendship/happiness. 🤍 is cleaner/softer neutrality or pure vibes.",
      },
      {
        question: "What does 🤍 mean from a girl?",
        answer:
          "Gentle care or soft interest. Less intense than ❤️ on a first flirt.",
      },
      {
        question: "Can 🤍 mean mourning?",
        answer:
          "Yes in some memorial contexts. Captions about loss make that reading clear.",
      },
    ],
  },

  "broken-heart": {
    batchId: BATCH_ID,
    searchTitle: "Broken Heart Emoji Meaning: Breakup, Heartbreak, and Texting",
    snippetAnswer:
      "💔 Broken Heart means heartbreak, breakup pain, disappointment, or emotional hurt. It is the clear “my heart is cracked” signal in texting and captions.",
    detailedParagraphs: [
      "Broken Heart (💔) is rarely ambiguous: something hurt. Breakups, rejections, friend fallouts, and crushed expectations all land here.",
      "People send 💔 to narrate their own pain (“it’s over 💔”) or to empathize (“that’s awful 💔”). Empathy use needs warmth around it.",
      "Hyperbolic uses exist (“my team lost 💔”), but even jokes borrow real heartbreak imagery — know your audience.",
      "Healing counterparts like ❤️‍🩹 (mending heart) mark recovery. 💔 is the wound; mending is the bandage.",
    ],
    textingMeaning:
      "Use 💔 when you are hurt, announcing a breakup vibe, or acknowledging someone else’s heartbreak with care.",
    socialMeaning:
      "Captions under sad songs, ex photos, and vent posts fill with 💔. Comments offer solidarity; creators use it for emotional storytelling.",
    caution:
      "Do not celebrate someone’s breakup with mocking 💔. Avoid dumping 💔 on acquaintances who did not ask for drama.",
    examples: [
      { context: "Breakup", text: "We ended it 💔" },
      { context: "Empathy", text: "I'm so sorry 💔" },
      { context: "Disappointment", text: "I really thought this would work 💔" },
      { context: "Song", text: "This chorus 💔" },
      { context: "Friend fight", text: "Hate that we argued 💔" },
      { context: "Sports joke", text: "Season over 💔" },
    ],
    contextBlocks: [
      {
        title: "💔 vs 😢",
        body: "😢 is general sadness. 💔 specifically points to love/attachment pain or deep disappointment.",
      },
      {
        title: "💔 vs ❤️‍🩹",
        body: "💔 is the break. ❤️‍🩹 is healing afterward — hope after hurt.",
      },
      {
        title: "Supportive replies",
        body: "Reply with words plus optional 💔. Emoji alone can feel thin when someone is devastated.",
      },
      {
        title: "Public captions",
        body: "Posting 💔 publicly may notify an ex’s circle. Decide if you want that audience.",
      },
    ],
    searchIntents: [
      "broken heart emoji meaning",
      "💔 meaning in texting",
      "broken heart emoji breakup",
      "💔 vs ❤️‍🩹",
      "what does broken heart mean",
      "💔 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not weaponize 💔 to guilt someone after a normal boundary.",
      "Avoid joking 💔 under real bereavement or medical trauma.",
      "Skip as a passive-aggressive hint — say the issue.",
    ],
    faqs: [
      {
        question: "What does 💔 mean in texting?",
        answer:
          "Heartbreak, breakup pain, or deep disappointment about something you cared about.",
      },
      {
        question: "Is 💔 only for romance?",
        answer:
          "Mostly love/attachment, but friendship fallouts and crushed hopes use it too.",
      },
      {
        question: "💔 vs 🖤?",
        answer:
          "🖤 can be dark aesthetic love. 💔 is specifically broken/hurt.",
      },
      {
        question: "What to reply to 💔?",
        answer:
          "Offer support in words: “Want to talk?” A lone emoji is usually not enough.",
      },
      {
        question: "Can 💔 be dramatic?",
        answer:
          "Yes for minor letdowns. Match intensity — save heavy 💔 for real hurt.",
      },
    ],
  },

  "pink-heart": {
    batchId: BATCH_ID,
    searchTitle: "Pink Heart Emoji Meaning: Cute Love, Soft Romance, and Aesthetic Texting",
    snippetAnswer:
      "🩷 Pink Heart means cute, soft, or playful affection — often lighter and more aesthetic than classic ❤️ romance.",
    detailedParagraphs: [
      "Pink Heart (🩷) is the soft-focus love mark. It shows up in cute couples, best-friend aesthetic chats, and pastel-branded posts.",
      "Compared with ❤️, pink feels sweeter and less formal — crush energy, compliments, and “you’re adorable” vibes.",
      "Friend groups that share pink aesthetics use 🩷 platonically. Dating chats use it as gentle flirtation before full red-heart intensity.",
      "Product and beauty communities treat 🩷 as brand mood. The emoji says sweetness more than solemn commitment.",
    ],
    textingMeaning:
      "Send 🩷 for cute affection, soft flirting, or aesthetic warmth when ❤️ feels too serious.",
    socialMeaning:
      "Captions and stickers lean girly, kawaii, soft-launch romance, and pastel feeds. Comments use 🩷 as adorable approval.",
    caution:
      "Some people still read any heart as romantic. If you mean friendship, keep the rest of the message clearly platonic.",
    examples: [
      { context: "Flirty soft", text: "You made my day 🩷" },
      { context: "Cute couple", text: "Coffee date 🩷" },
      { context: "Friendship aesthetic", text: "Love our chaos 🩷" },
      { context: "Compliment", text: "That selfie 🩷" },
      { context: "Thank you", text: "You're the sweetest 🩷" },
      { context: "Caption", text: "Soft life loading 🩷" },
    ],
    contextBlocks: [
      {
        title: "🩷 vs ❤️",
        body: "❤️ is classic strong love. 🩷 is cuter, lighter, and more aesthetic — often early crush or soft vibes.",
      },
      {
        title: "🩷 vs 🤍",
        body: "🤍 is minimal/pure. 🩷 is explicitly cute and pink-coded.",
      },
      {
        title: "From a girl",
        body: "Frequently soft interest or sweet friendship. With late-night timing it can lean crush.",
      },
      {
        title: "Beauty and lifestyle",
        body: "Brands and creators use 🩷 as moodboard energy, not a relationship status.",
      },
    ],
    searchIntents: [
      "pink heart emoji meaning",
      "🩷 meaning in texting",
      "pink heart vs red heart",
      "🩷 meaning from a girl",
      "what does pink heart mean",
      "🩷 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🩷 alone for serious apologies — add real words.",
      "Avoid if the other person asked for clearer communication.",
      "Skip in formal professional threads.",
    ],
    faqs: [
      {
        question: "What does 🩷 mean in texting?",
        answer:
          "Cute or soft affection — playful love, aesthetic warmth, or gentle flirting.",
      },
      {
        question: "🩷 vs ❤️?",
        answer:
          "❤️ is stronger/default romance. 🩷 is sweeter and lighter.",
      },
      {
        question: "Is 🩷 flirty?",
        answer:
          "Often yes in crush chats. With best friends it can stay platonic and cute.",
      },
      {
        question: "What does 🩷 mean from a girl?",
        answer:
          "Sweet interest or soft care. Watch whether ❤️ appears too — that raises intensity.",
      },
      {
        question: "Is pink heart new?",
        answer:
          "It is a newer Unicode heart color; older phones may fall back differently, but meaning stays soft affection.",
      },
    ],
  },

  "green-heart": {
    batchId: BATCH_ID,
    searchTitle: "Green Heart Emoji Meaning: Jealousy, Nature, Health, or Friendship?",
    snippetAnswer:
      "💚 Green Heart can mean jealousy (“green with envy”), nature/eco vibes, health, or playful friendship — context chooses the lane.",
    detailedParagraphs: [
      "Green Heart (💚) is one of the most dual-coded hearts. Internet slang borrowed “green with envy,” so 💚 sometimes marks jealousy in dating chats.",
      "Equally common: nature, plants, eco brands, and wellness. A hiking photo with 💚 is rarely about envy.",
      "Friend groups also use 💚 as just another colored heart for platonic love, especially if green is a favorite color or team color.",
      "Because meanings split, words matter. “Proud of you 💚” is support; “oh 💚” under a flirt screenshot may mean jealousy.",
    ],
    textingMeaning:
      "Use 💚 for plant/nature love, health wins, team green, or — carefully — playful jealousy when the joke is mutual.",
    socialMeaning:
      "Eco accounts, gardeners, and wellness creators lean on 💚. Drama comments may use it for envy under couple posts.",
    caution:
      "Accidental jealousy readings can start fights. If you mean nature or friendship, say so. Do not weaponize 💚 to control a partner.",
    examples: [
      { context: "Nature", text: "Forest day 💚" },
      { context: "Health", text: "Finally feeling better 💚" },
      { context: "Friendship", text: "Love you guys 💚" },
      { context: "Playful jealousy", text: "Who's that 💚" },
      { context: "Eco", text: "Refill store run 💚" },
      { context: "Support", text: "Rooting for you 💚" },
    ],
    contextBlocks: [
      {
        title: "Jealousy slang",
        body: "In dating DMs, 💚 can mean “I’m jealous.” Pair with humor only if the relationship can handle it.",
      },
      {
        title: "Nature and eco",
        body: "Outdoor and sustainability posts treat 💚 as planet love — the safest public reading.",
      },
      {
        title: "💚 vs ❤️",
        body: "❤️ is romance default. 💚 is color-coded niche: envy, nature, or green identity.",
      },
      {
        title: "Sports and schools",
        body: "Team green turns 💚 into loyalty, similar to 💙 for blue teams.",
      },
    ],
    searchIntents: [
      "green heart emoji meaning",
      "💚 meaning in texting",
      "green heart jealousy",
      "💚 meaning from a girl",
      "what does green heart mean",
      "💚 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send jealous 💚 to punish someone for normal socializing.",
      "Avoid ambiguous 💚 in tense relationships — clarify in words.",
      "Skip as a vague professional sign-off.",
    ],
    faqs: [
      {
        question: "What does 💚 mean in texting?",
        answer:
          "Nature/health love, green identity, friendship — or jealousy if the chat is about rivals/flirting.",
      },
      {
        question: "Does 💚 mean jealousy?",
        answer:
          "Sometimes, from “green with envy.” Not always — plant posts prove otherwise.",
      },
      {
        question: "💚 vs 💛?",
        answer:
          "💛 often friendship/happiness. 💚 is nature/jealousy/green fandom more often.",
      },
      {
        question: "What does 💚 mean from a girl?",
        answer:
          "Could be playful envy, plant-girl aesthetic, or just her favorite heart color. Ask the thread.",
      },
      {
        question: "Is 💚 romantic?",
        answer:
          "Less default than ❤️. Romance appears when green is “your color” as a couple.",
      },
    ],
  },

  "yellow-heart": {
    batchId: BATCH_ID,
    searchTitle: "Yellow Heart Emoji Meaning: Friendship, Happiness, and Warm Texting",
    snippetAnswer:
      "💛 Yellow Heart usually means friendship, happiness, or warm platonic love — a sunny alternative when ❤️ might feel too romantic.",
    detailedParagraphs: [
      "Yellow Heart (💛) is the friendship favorite. People use it for close pals, family sunshine, and cheerful support without dating implications.",
      "Happiness and positivity are built in: congratulations, good news, and “you got this” energy pair naturally with 💛.",
      "Some couple and friend groups still adopt yellow as “their” color, but culturally it stays one of the safest platonic hearts.",
      "Compared with 🧡, yellow reads brighter and friendlier; orange can feel cozier or autumn-coded.",
    ],
    textingMeaning:
      "Send 💛 to celebrate friends, thank someone warmly, or keep affection clearly non-romantic.",
    socialMeaning:
      "Captions use 💛 for friendship posts, birthdays, and positive lifestyle content. Comments drop 💛 as wholesome approval.",
    caution:
      "A few people still misread any heart as flirtation. If boundaries are sensitive, add “friend” clarity in words.",
    examples: [
      { context: "Friendship", text: "Bestie love 💛" },
      { context: "Congrats", text: "You did it 💛" },
      { context: "Support", text: "Proud of you 💛" },
      { context: "Family", text: "Love you, sis 💛" },
      { context: "Good morning", text: "Hope your day is soft 💛" },
      { context: "Group chat", text: "Grateful for this chat 💛" },
    ],
    contextBlocks: [
      {
        title: "💛 vs ❤️",
        body: "❤️ can imply romance. 💛 usually signals friendship and happiness — the safer platonic pick.",
      },
      {
        title: "💛 vs 🧡",
        body: "🧡 is warm/cozy. 💛 is brighter friendship sunshine.",
      },
      {
        title: "From a girl or guy",
        body: "Typically platonic care. Still sweet — just less “I have a crush” than 🩷 or 😍.",
      },
      {
        title: "Schools and teams",
        body: "Yellow school colors turn 💛 into spirit, not dating.",
      },
    ],
    searchIntents: [
      "yellow heart emoji meaning",
      "💛 meaning in texting",
      "yellow heart friendship",
      "💛 vs ❤️",
      "what does yellow heart mean",
      "💛 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 💛 to downplay someone’s romantic confession if you need to be clear.",
      "Avoid as the only response to deep grief — add real support.",
      "Skip in formal corporate documents.",
    ],
    faqs: [
      {
        question: "What does 💛 mean in texting?",
        answer:
          "Friendship, happiness, or warm platonic love — sunny care without default romance.",
      },
      {
        question: "Is 💛 romantic?",
        answer:
          "Usually no. Some couples use it, but culturally it reads friendship-first.",
      },
      {
        question: "💛 vs 💜?",
        answer:
          "💜 can feel deeper/fandom. 💛 is brighter everyday friendship.",
      },
      {
        question: "What does 💛 mean from a girl?",
        answer:
          "Often best-friend energy or cheerful support. Soft, not necessarily flirty.",
      },
      {
        question: "Can 💛 mean jealousy?",
        answer:
          "That role belongs more to 💚. 💛 stays positive/friend-coded.",
      },
    ],
  },

  "orange-heart": {
    batchId: BATCH_ID,
    searchTitle: "Orange Heart Emoji Meaning: Warmth, Friendship, and Cozy Texting",
    snippetAnswer:
      "🧡 Orange Heart means warm, cozy, or friendly affection — supportive love with less romantic intensity than ❤️ and a softer glow than 💛.",
    detailedParagraphs: [
      "Orange Heart (🧡) sits between friendship yellow and romantic red. It feels warm, approachable, and slightly cozy.",
      "Autumn aesthetics, Halloween-adjacent feeds, and sunset captions love 🧡. The color itself carries seasonal warmth.",
      "In texting it often means “I care” without proposing romance. Supportive coworkers in casual cultures may use it more freely than ❤️.",
      "Some LGBTQ+ and community spaces also treat orange hearts as identity-adjacent warmth; local group norms decide that reading.",
    ],
    textingMeaning:
      "Send 🧡 for cozy thanks, friendly love, or warm encouragement when you want color without red’s romance default.",
    socialMeaning:
      "Lifestyle and seasonal posts use 🧡 for fall vibes and friendly community. Comments treat it as kind approval.",
    caution:
      "Still a heart — sensitive recipients may over-read romance. Clarify if needed. Avoid overusing in formal client mail.",
    examples: [
      { context: "Warm thanks", text: "Thanks for today 🧡" },
      { context: "Friendship", text: "Glad we talked 🧡" },
      { context: "Autumn", text: "Pumpkin patch day 🧡" },
      { context: "Support", text: "You've got this 🧡" },
      { context: "Family", text: "Home feels good 🧡" },
      { context: "Caption", text: "Golden hour 🧡" },
    ],
    contextBlocks: [
      {
        title: "🧡 vs ❤️",
        body: "❤️ is classic romance/strong love. 🧡 is warmer friendship-cozy energy with lower dating voltage.",
      },
      {
        title: "🧡 vs 💛",
        body: "💛 is bright friendship sunshine. 🧡 is cozier, autumn-leaning warmth.",
      },
      {
        title: "Seasonal aesthetic",
        body: "Fall content and orange branding make 🧡 decorative as well as emotional.",
      },
      {
        title: "From a girl or guy",
        body: "Usually friendly warmth. Less crush-coded than 🩷; sweeter than a plain 👍.",
      },
    ],
    searchIntents: [
      "orange heart emoji meaning",
      "🧡 meaning in texting",
      "orange heart vs yellow heart",
      "what does orange heart mean",
      "🧡 meaning from a girl",
      "🧡 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🧡 as a substitute for a clear romantic answer.",
      "Avoid in legal/HR threads.",
      "Skip if the person asked you to stop emoji-only replies.",
    ],
    faqs: [
      {
        question: "What does 🧡 mean in texting?",
        answer:
          "Warm, cozy, friendly affection — care with less automatic romance than ❤️.",
      },
      {
        question: "Is 🧡 romantic?",
        answer:
          "Sometimes, but it often reads platonic-warm. Couples may adopt it as their color.",
      },
      {
        question: "🧡 vs 💛?",
        answer:
          "💛 = bright friendship. 🧡 = cozy/warm friendship or seasonal glow.",
      },
      {
        question: "What does 🧡 mean from a girl?",
        answer:
          "Friendly warmth or soft care. Milder than ❤️ on most first readings.",
      },
      {
        question: "Can 🧡 mean support?",
        answer:
          "Yes — encouragement and gratitude are common non-romantic uses.",
      },
    ],
  },

  "two-hearts": {
    batchId: BATCH_ID,
    searchTitle: "Two Hearts Emoji Meaning: Budding Romance, Affection, and Texting",
    snippetAnswer:
      "💕 Two Hearts means affectionate love, budding romance, or sweet fondness — often lighter and cuter than a single bold ❤️.",
    detailedParagraphs: [
      "Two Hearts (💕) shows a pair of pinkish hearts floating together. Unicode frames it as loving affection; texting uses it for crushy sweetness.",
      "It often marks early romance: flirting, soft launches, and “I like you” energy without the full weight of ❤️ alone.",
      "Friends still use 💕 for cute platonic love, especially in aesthetic or feminine-coded chats. The double heart emphasizes mutual warmth.",
      "Compared with 💖 (sparkling heart), 💕 feels classic cute; compared with ❤️, it feels playful rather than solemn.",
    ],
    textingMeaning:
      "Send 💕 for sweet affection, crush vibes, or cute couple energy. Great after compliments and goodnight texts.",
    socialMeaning:
      "Captions use 💕 for date posts, anniversaries, and soft friendship love. Comments drop 💕 under adorable couple or pet content.",
    caution:
      "On a brand-new match, 💕 can feel fast. Match pace. In work chats it usually looks too intimate.",
    examples: [
      { context: "Crush", text: "Had fun tonight 💕" },
      { context: "Goodnight", text: "Sleep well 💕" },
      { context: "Couple", text: "Us 💕" },
      { context: "Friendship cute", text: "Love you forever 💕" },
      { context: "Compliment", text: "You're so sweet 💕" },
      { context: "Caption", text: "Little moments 💕" },
    ],
    contextBlocks: [
      {
        title: "💕 vs ❤️",
        body: "❤️ is stronger/default love. 💕 is cuter budding affection — often earlier or softer romance.",
      },
      {
        title: "💕 vs 💗",
        body: "Growing heart 💗 can imply increasing love. 💕 is already-pair affection, playful and present.",
      },
      {
        title: "From a girl",
        body: "Frequently soft romantic interest or very affectionate friendship. Timing and other emojis clarify.",
      },
      {
        title: "Public soft launch",
        body: "Couples use 💕 in captions before full relationship posts — hint without essay.",
      },
    ],
    searchIntents: [
      "two hearts emoji meaning",
      "💕 meaning in texting",
      "💕 meaning from a girl",
      "two hearts vs red heart",
      "what does 💕 mean",
      "💕 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send 💕 to coworkers or clients.",
      "Avoid if someone asked for space after a breakup.",
      "Skip as sarcasm in serious conflict — it can look mocking.",
    ],
    faqs: [
      {
        question: "What does 💕 mean in texting?",
        answer:
          "Sweet affection or budding romance — cute love energy, often lighter than ❤️.",
      },
      {
        question: "Is 💕 flirty?",
        answer:
          "Often yes. With close friends it can stay platonic-cute.",
      },
      {
        question: "💕 vs 😍?",
        answer:
          "😍 reacts to how something looks. 💕 expresses affectionate feeling toward the person/moment.",
      },
      {
        question: "What does 💕 mean from a girl?",
        answer:
          "Usually warm interest or soft love. Stronger than 💛; softer than stacked ❤️❤️❤️ sometimes.",
      },
      {
        question: "Can friends use 💕?",
        answer:
          "Yes in many friend groups. Culture and gender norms in the chat decide how romantic it feels.",
      },
    ],
  },

  "heart-on-fire": {
    batchId: BATCH_ID,
    searchTitle: "Heart on Fire Emoji Meaning: Passionate Love, Lust, or Intense Feelings?",
    snippetAnswer:
      "❤️‍🔥 Heart on Fire means passionate love, intense desire, or feelings that are “on fire” — hotter and more dramatic than a plain ❤️.",
    detailedParagraphs: [
      "Heart on Fire (❤️‍🔥) combines the red heart with flames. Unicode presents it for passionate love; internet use stretches to lust, obsession, and high-drama romance.",
      "It upgrades a normal heart: not just “I like you,” but “this is intense.” Anniversaries, reunions, and thirsty compliments all fit.",
      "Non-romantic hype exists (“this fandom ❤️‍🔥”) but the default reading is heated emotion toward a person or moment.",
      "Pair with care — fire hearts can overwhelm early chats. After trust is built, they read as romantic voltage.",
    ],
    textingMeaning:
      "Send ❤️‍🔥 when affection feels passionate, lusty, or overwhelmingly strong. Save it for heat, not casual thanks.",
    socialMeaning:
      "Couple captions, thirst replies, and dramatic love songs collect ❤️‍🔥. Creators use it for spicy romance content.",
    caution:
      "Too early ❤️‍🔥 can scare someone off. Avoid under professional photos. Do not use about real dangerous fires.",
    examples: [
      { context: "Passionate", text: "Can't stop thinking about you ❤️‍🔥" },
      { context: "Anniversary", text: "Still us ❤️‍🔥" },
      { context: "Thirsty compliment", text: "You look unreal ❤️‍🔥" },
      { context: "Song", text: "This bridge ❤️‍🔥" },
      { context: "Reunion", text: "Finally ❤️‍🔥" },
      { context: "Caption", text: "All in ❤️‍🔥" },
    ],
    contextBlocks: [
      {
        title: "❤️‍🔥 vs ❤️",
        body: "❤️ is love. ❤️‍🔥 is love with heat — passion, desire, intensity.",
      },
      {
        title: "❤️‍🔥 vs 🔥",
        body: "🔥 can compliment anything hot/impressive. ❤️‍🔥 ties the heat specifically to heart/romance feelings.",
      },
      {
        title: "From a girl or guy",
        body: "Strong romantic or sexual interest signal. Much louder than 🩷 or 💛.",
      },
      {
        title: "Public posts",
        body: "Soft-launch couples use ❤️‍🔥 to show seriousness with drama. Know your audience.",
      },
    ],
    searchIntents: [
      "heart on fire emoji meaning",
      "❤️‍🔥 meaning in texting",
      "heart on fire vs red heart",
      "❤️‍🔥 meaning from a girl",
      "what does heart on fire mean",
      "❤️‍🔥 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send ❤️‍🔥 on a first polite hello.",
      "Avoid in work or family group chats where heat is inappropriate.",
      "Skip about literal fire disasters.",
    ],
    faqs: [
      {
        question: "What does ❤️‍🔥 mean in texting?",
        answer:
          "Passionate love or intense desire — feelings that feel “on fire.”",
      },
      {
        question: "Is ❤️‍🔥 sexual?",
        answer:
          "It can be. It also covers non-sexual passionate romance. Tone of the chat decides.",
      },
      {
        question: "❤️‍🔥 vs 😍?",
        answer:
          "😍 is adoring reaction to looks/moments. ❤️‍🔥 is hotter emotional/romantic intensity.",
      },
      {
        question: "What does ❤️‍🔥 mean from a girl?",
        answer:
          "Strong interest — romantic and possibly lusty. Louder than a plain heart.",
      },
      {
        question: "When should I use ❤️‍🔥?",
        answer:
          "When the relationship or moment already has heat. Not for casual logistics.",
      },
    ],
  },

  "mending-heart": {
    batchId: BATCH_ID,
    searchTitle: "Mending Heart Emoji Meaning: Healing After Heartbreak and Recovery",
    snippetAnswer:
      "❤️‍🩹 Mending Heart means healing after heartbreak, emotional recovery, or “I’m putting myself back together” — hope after 💔.",
    detailedParagraphs: [
      "Mending Heart (❤️‍🩹) shows a heart with a bandage. Unicode designed it for mending and healing; texting uses it for post-breakup recovery and emotional repair.",
      "It answers 💔: the wound existed, but care and time are working. People post it on therapy wins, no-contact progress, and self-love eras.",
      "Friends send ❤️‍🩹 to support someone healing — “proud of you for resting” energy rather than fresh grief only.",
      "It can also cover non-romantic healing: friendship repair, burnout recovery, or community care after hard news.",
    ],
    textingMeaning:
      "Use ❤️‍🩹 when you are healing, encouraging someone’s recovery, or marking progress after hurt.",
    socialMeaning:
      "Captions about growth, therapy, and soft comebacks use ❤️‍🩹. Comments offer gentle solidarity under vulnerability posts.",
    caution:
      "Do not rush someone with ❤️‍🩹 if they are still in acute grief. Healing timelines differ — never force the “moved on” narrative.",
    examples: [
      { context: "Self", text: "Taking it day by day ❤️‍🩹" },
      { context: "Support", text: "Proud of how you're healing ❤️‍🩹" },
      { context: "After breakup", text: "Learning to choose me ❤️‍🩹" },
      { context: "Friendship repair", text: "Glad we talked it out ❤️‍🩹" },
      { context: "Caption", text: "Soft reset ❤️‍🩹" },
      { context: "Encouragement", text: "You're allowed to heal slowly ❤️‍🩹" },
    ],
    contextBlocks: [
      {
        title: "❤️‍🩹 vs 💔",
        body: "💔 is the break. ❤️‍🩹 is the repair — use mending when hope or progress is part of the message.",
      },
      {
        title: "Self-love era",
        body: "Creators use ❤️‍🩹 for boundaries, therapy, and rebuilding confidence after toxic dynamics.",
      },
      {
        title: "How to reply",
        body: "Affirm the effort: “That takes strength.” Avoid “you’ll find someone else” unless asked.",
      },
      {
        title: "Non-romantic healing",
        body: "Burnout, family stress, and friendship rifts also fit ❤️‍🩹 when care is the theme.",
      },
    ],
    searchIntents: [
      "mending heart emoji meaning",
      "❤️‍🩹 meaning in texting",
      "mending heart vs broken heart",
      "❤️‍🩹 healing meaning",
      "what does mending heart mean",
      "❤️‍🩹 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not send ❤️‍🩹 to minimize fresh trauma (“just heal”).",
      "Avoid as a smug reply to an ex’s pain.",
      "Skip if you mean ongoing heartbreak — use 💔 instead.",
    ],
    faqs: [
      {
        question: "What does ❤️‍🩹 mean in texting?",
        answer:
          "Healing after hurt — emotional recovery, self-repair, or supportive hope after heartbreak.",
      },
      {
        question: "❤️‍🩹 vs 💔?",
        answer:
          "💔 = broken now. ❤️‍🩹 = mending/getting better.",
      },
      {
        question: "Is ❤️‍🩹 only for breakups?",
        answer:
          "No — any emotional repair fits, including friendship and self-care arcs.",
      },
      {
        question: "What does ❤️‍🩹 mean from a friend?",
        answer:
          "Usually solidarity with your healing, not romance.",
      },
      {
        question: "Can I use ❤️‍🩹 for myself?",
        answer:
          "Yes — it is common in self-talk captions about recovery and growth.",
      },
    ],
  },

  "winking-face": {
    batchId: BATCH_ID,
    searchTitle: "Winking Face Emoji Meaning: Flirty, Joking, or Sarcastic?",
    snippetAnswer:
      "😉 Winking Face usually means flirting, joking, or “don’t take this too seriously.” It softens teasing and can signal playful interest.",
    detailedParagraphs: [
      "Winking Face (😉) is a classic tone marker. Unicode shows a wink and smile — the face of shared secrets, light sarcasm, and flirtation.",
      "In jokes, 😉 says “I’m kidding” after a roast that might otherwise sting. In flirting, it adds sparkle to compliments and plans.",
      "Work chats use it carefully: a wink after a pun can be fine among friends; after a critique it may look slimy.",
      "Because wink culture varies by age, some readers see charm and others see dad-joke energy. Know your audience.",
    ],
    textingMeaning:
      "Add 😉 when teasing, flirting, or marking a punchline. It tells the reader the message has a playful side.",
    socialMeaning:
      "Captions and comments use 😉 for coy hints, affiliate jokes, and soft provocation. Influencers wink to imply insider tone.",
    caution:
      "A wink on sensitive topics can feel creepy or dismissive. Avoid with strangers in professional first contact.",
    examples: [
      { context: "Flirty", text: "Save me a seat 😉" },
      { context: "Joke", text: "I'm always right 😉" },
      { context: "Tease", text: "Somebody's jealous 😉" },
      { context: "Plan", text: "Maybe I'll tell you later 😉" },
      { context: "Compliment", text: "You cleaned up nice 😉" },
      { context: "Sarcasm soft", text: "Totally professional of me 😉" },
    ],
    contextBlocks: [
      {
        title: "Flirt vs joke",
        body: "Same wink, two lanes. Late-night compliments lean flirt; obvious puns lean joke. Words carry the load.",
      },
      {
        title: "😉 vs 😏",
        body: "😏 is smugger/sexier side-eye. 😉 is friendlier wink energy.",
      },
      {
        title: "From a girl or guy",
        body: "Often playful interest. Not a confession alone — more of a spark indicator.",
      },
      {
        title: "Work risk",
        body: "Skip 😉 with clients, HR, or anyone who might read it as inappropriate.",
      },
    ],
    searchIntents: [
      "winking face emoji meaning",
      "😉 meaning in texting",
      "😉 flirty meaning",
      "wink emoji from a girl",
      "what does 😉 mean",
      "😉 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not wink after delivering bad news.",
      "Avoid with people who already said your tone feels creepy.",
      "Skip in formal complaints or legal threads.",
    ],
    faqs: [
      {
        question: "What does 😉 mean in texting?",
        answer:
          "Playful tone — flirting, joking, or soft sarcasm. “Don’t take this too seriously.”",
      },
      {
        question: "Is 😉 always flirty?",
        answer:
          "No. Many winks are joke markers. Flirt reading rises with compliments and timing.",
      },
      {
        question: "😉 vs 😊?",
        answer:
          "😊 is friendly/warm. 😉 adds mischief or flirt.",
      },
      {
        question: "What does 😉 mean from a girl?",
        answer:
          "Often playful interest or teasing. Context decides flirt vs humor.",
      },
      {
        question: "Can 😉 be sarcastic?",
        answer:
          "Yes — “nice job 😉” after a fail can sting. Pair carefully.",
      },
    ],
  },

  "rolling-on-the-floor-laughing": {
    batchId: BATCH_ID,
    searchTitle: "ROFL Emoji Meaning: 🤣 vs 😂 in Texting and Memes",
    snippetAnswer:
      "🤣 Rolling on the Floor Laughing means something is extremely funny — louder and more physical than a standard 😂 laugh.",
    detailedParagraphs: [
      "Rolling on the Floor Laughing (🤣) is Unicode’s ROFL face: tilted back, tears, mouth wide. It marks humor that feels bodily — wheezing, not polite chuckle.",
      "Compared with 😂, 🤣 often reads as a bigger reaction. Some friend groups treat them as twins; others reserve 🤣 for peak comedy.",
      "Comment sections under chaos clips stack 🤣 when the video is unhinged. Creators add it to captions promising laughs.",
      "Like other laugh emojis, it is wrong for grief. Intensity does not equal permission to laugh at pain.",
    ],
    textingMeaning:
      "Send 🤣 when a joke actually wrecked you. Use stacks for emphasis; one 🤣 already beats a mild “haha.”",
    socialMeaning:
      "Memes, Reels, and group chats use 🤣 as high-score laughter. It performs “I lost it” in public comments.",
    caution:
      "Overusing 🤣 on weak jokes can feel fake. Never reply 🤣 to serious vulnerability.",
    examples: [
      { context: "Peak joke", text: "I can't breathe 🤣" },
      { context: "Meme", text: "This meme 🤣🤣" },
      { context: "Voice note", text: "Your story killed me 🤣" },
      { context: "Group chat", text: "Stop I'm crying 🤣" },
      { context: "Fail video", text: "The way he slipped 🤣" },
      { context: "Sarcasm risk", text: "Yeah that meeting was so fun 🤣" },
    ],
    contextBlocks: [
      {
        title: "🤣 vs 😂",
        body: "😂 is the mainstream laugh. 🤣 is often the louder ROFL tier — use it when something is physically hilarious.",
      },
      {
        title: "🤣 vs 💀",
        body: "💀 is deadpan “I’m deceased.” 🤣 is open, noisy laughter.",
      },
      {
        title: "Family chats",
        body: "Both 😂 and 🤣 work; older relatives may treat them identically as “funny.”",
      },
      {
        title: "Fake laugh risk",
        body: "If you 🤣 everything, friends stop believing the big reactions. Save it for real hits.",
      },
    ],
    searchIntents: [
      "rofl emoji meaning",
      "🤣 meaning in texting",
      "🤣 vs 😂",
      "rolling on the floor laughing emoji",
      "what does 🤣 mean",
      "🤣 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not use 🤣 on bad news or sensitive disclosures.",
      "Avoid sarcastic 🤣 that humiliates someone publicly.",
      "Skip in formal client email.",
    ],
    faqs: [
      {
        question: "What does 🤣 mean in texting?",
        answer:
          "Extreme laughter — ROFL energy, usually stronger than a mild laugh.",
      },
      {
        question: "🤣 vs 😂?",
        answer:
          "Many treat them alike; when distinguished, 🤣 is the bigger, more physical laugh.",
      },
      {
        question: "Is 🤣 the same as LOL?",
        answer:
          "It is closer to ROFL / “I’m wheezing” than a tiny lol.",
      },
      {
        question: "Can 🤣 be sarcastic?",
        answer:
          "Yes, especially after something awkward. Tone and wording decide.",
      },
      {
        question: "🤣 vs 😭 funny use?",
        answer:
          "😭 can mean funny overwhelm or sadness. 🤣 is clearer “this is hilarious.”",
      },
    ],
  },

  "hundred-points": {
    batchId: BATCH_ID,
    searchTitle: "Hundred Points Emoji Meaning: 💯 Keep It Real, Perfect, or Agree?",
    snippetAnswer:
      "💯 Hundred Points means “keep it 100,” total agreement, perfection, or “facts.” It certifies something as real, correct, or elite.",
    detailedParagraphs: [
      "Hundred Points (💯) comes from the perfect exam score mark. Online it evolved into “keep it 100” — honesty, authenticity, and full agreement.",
      "People drop 💯 after opinions they endorse (“said what needed to be said 💯”) or after performances that scored perfectly.",
      "It stacks with 🔥 for hype: skill plus truth. Alone it can mean “I agree completely” without extra fluff.",
      "In some threads it is aesthetic spam; overuse weakens the stamp. Save 💯 for statements you actually stand behind.",
    ],
    textingMeaning:
      "Send 💯 to agree hard, praise honesty, or mark something as perfect. It is a truth/quality stamp.",
    socialMeaning:
      "Comments use 💯 under hot takes, verse bars, and motivational posts. Captions add it when the creator wants “no cap” energy.",
    caution:
      "💯 on misinformation makes you look like you endorse it. In arguments it can escalate (“I’m right 💯”). Use with care at work.",
    examples: [
      { context: "Agreement", text: "Facts 💯" },
      { context: "Honesty", text: "Keep it 100 💯" },
      { context: "Praise", text: "That verse 💯" },
      { context: "Work win", text: "Presentation was 💯" },
      { context: "Advice", text: "This tip 💯" },
      { context: "Hype stack", text: "Fit is fire 🔥💯" },
    ],
    contextBlocks: [
      {
        title: "Keep it 100",
        body: "Slang reading: be real, no fake energy. 💯 certifies authenticity.",
      },
      {
        title: "💯 vs 🔥",
        body: "🔥 is heat/hype. 💯 is perfect score / full truth. Together they mean elite and correct.",
      },
      {
        title: "💯 vs ✅",
        body: "✅ often means task done. 💯 means quality/agreement, not checklist completion.",
      },
      {
        title: "From a girl or guy",
        body: "Usually strong agreement or praise — not romantic by itself.",
      },
    ],
    searchIntents: [
      "hundred points emoji meaning",
      "💯 meaning in texting",
      "keep it 100 emoji",
      "💯 meaning on Instagram",
      "what does 💯 mean",
      "💯 emoji copy and paste",
    ],
    whenNotToUse: [
      "Do not 💯 endorse claims you have not checked.",
      "Avoid as a smug closer in fights.",
      "Skip in formal documents where slang stamps look childish.",
    ],
    faqs: [
      {
        question: "What does 💯 mean in texting?",
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
        question: "Is 💯 flirty?",
        answer:
          "Not by itself. With compliments it can amplify praise, but it is not a romance emoji.",
      },
      {
        question: "Can I use 💯 at work?",
        answer:
          "In casual teams yes for praise. For formal approvals, write the decision in words.",
      },
    ],
  },
};
