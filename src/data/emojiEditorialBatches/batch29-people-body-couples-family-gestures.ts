import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "29-people-body-couples-family";

/** Batch 29 P1 — couples, family, gestures, parenting (People & Body). */
export const batch29PeopleBodyCouplesFamilyGestures: Record<string, EmojiBatchEnrichment> = {
  "women-holding-hands": {
    batchId: BATCH_ID,
    searchTitle: "Women Holding Hands Emoji (👭) Meaning: Lesbian Couple, Besties, and Solidarity",
    snippetAnswer:
      "👭 Women Holding Hands marks two women holding hands — lesbian couple representation, best friend duo, Pride solidarity, and female friendship posts.",
    detailedParagraphs: [
      "Women Holding Hands (👭) shows two women linked hands — Unicode couple/friendship symbol.",
      "Pride month and anniversary posts celebrate 👭 — LGBTQ+ couple visibility.",
      "Platonic bestie 'we're 👭' — friendship without romance context.",
    ],
    textingMeaning: "'Us 👭', 'Girlfriends 👭', 'Besties 👭'.",
    socialMeaning: "Lesbian couple content, Galentine's posts, and women's solidarity threads tag 👭.",
    caution: "Don't assume romance vs friendship — context defines relationship.",
    examples: [
      { context: "Couple", text: "Love 👭" },
      { context: "Pride", text: "Happy 👭" },
      { context: "Besties", text: "Forever 👭" },
      { context: "Date", text: "Night out 👭" },
      { context: "Anniversary", text: "Years 👭" },
    ],
    contextBlocks: [
      { title: "Lesbian couple", body: "👭 common couple representation — Pride and love posts." },
      { title: "Vs 🧑‍🤝‍🧑", body: "🧑‍🤝‍🧑 neutral people holding hands. 👭 two women." },
      { title: "Vs 👫", body: "👫 woman and man. 👭 two women." },
    ],
    searchIntents: ["women holding hands emoji", "👭 meaning", "lesbian couple emoji", "👭 copy paste"],
    whenNotToUse: ["Fetishizing lesbian couples.", "Assuming all women pairs are romantic."],
    faqs: [
      { question: "What does 👭 mean?", answer: "Two women holding hands — lesbian couple, best friends, Pride." },
      { question: "👭 friends or couple?", answer: "Both — context of message defines relationship." },
    ],
  },

  "woman-and-man-holding-hands": {
    batchId: BATCH_ID,
    searchTitle: "Woman and Man Holding Hands Emoji (👫) Meaning: Couple, Hetero Pair, and Date",
    snippetAnswer:
      "👫 Woman and Man Holding Hands marks heterosexual couple — date night, anniversary, relationship goals, and classic romantic pair posts.",
    detailedParagraphs: [
      "Woman and Man Holding Hands (👫) shows mixed-gender couple linked — Unicode relationship symbol.",
      "Relationship milestone and 'soft launch 👫' — couple reveal shorthand.",
      "Wedding and engagement content pairs 👫 with 💍 — traditional couple icon.",
    ],
    textingMeaning: "'Us 👫', 'Date night 👫', 'Couple goals 👫'.",
    socialMeaning: "Hetero couple Instagram, anniversary captions, and prom photos tag 👫.",
    caution: "Not every man-woman pair is a couple — can be siblings; context matters.",
    examples: [
      { context: "Date", text: "Tonight 👫" },
      { context: "Anniversary", text: "Years 👫" },
      { context: "Launch", text: "Official 👫" },
      { context: "Prom", text: "Together 👫" },
      { context: "Love", text: "Forever 👫" },
    ],
    contextBlocks: [
      { title: "Hetero couple", body: "👫 default mixed-gender couple emoji — dates and anniversaries." },
      { title: "Vs 👭", body: "👭 two women. 👫 woman + man." },
      { title: "Vs 💑", body: "💑 couple with heart. 👫 holding hands without heart." },
    ],
    searchIntents: ["woman and man holding hands emoji", "👫 meaning", "couple emoji", "👫 copy paste"],
    whenNotToUse: ["Assuming every mixed pair is dating.", "Heteronormative pressure on friends."],
    faqs: [
      { question: "What does 👫 mean?", answer: "Woman and man holding hands — couple, date, relationship." },
      { question: "👫 vs 💑?", answer: "👫 hands only; 💑 adds heart for explicit romance." },
    ],
  },

  "men-holding-hands": {
    batchId: BATCH_ID,
    searchTitle: "Men Holding Hands Emoji (👬) Meaning: Gay Couple, Bromance, and Brotherhood",
    snippetAnswer:
      "👬 Men Holding Hands marks two men holding hands — gay couple representation, close friendship, Pride posts, and brotherhood solidarity.",
    detailedParagraphs: [
      "Men Holding Hands (👬) shows two men linked hands — Unicode couple/friendship symbol.",
      "Gay couple anniversary and Pride celebration use 👬 — male same-sex love.",
      "Bromance and 'brothers 👬' — platonic male closeness in some cultures.",
    ],
    textingMeaning: "'Us 👬', 'Boyfriends 👬', 'Bros 👬'.",
    socialMeaning: "Gay couple content, Pride parades, and close male friendship posts tag 👬.",
    caution: "Hand-holding between men varies by culture — don't mock.",
    examples: [
      { context: "Couple", text: "Love 👬" },
      { context: "Pride", text: "Happy 👬" },
      { context: "Friends", text: "Bros 👬" },
      { context: "Date", text: "Dinner 👬" },
      { context: "Anniversary", text: "Together 👬" },
    ],
    contextBlocks: [
      { title: "Gay couple", body: "👬 male same-sex couple — Pride and relationship posts." },
      { title: "Vs 👫", body: "👫 woman man. 👬 two men." },
      { title: "Bromance", body: "Platonic 👬 in some friend groups — context defines." },
    ],
    searchIntents: ["men holding hands emoji", "👬 meaning", "gay couple emoji", "👬 copy paste"],
    whenNotToUse: ["Homophobic mockery.", "Fetishizing gay couples."],
    faqs: [
      { question: "What does 👬 mean?", answer: "Two men holding hands — gay couple, bromance, Pride." },
      { question: "👬 Pride?", answer: "Common for gay male couple visibility and celebration." },
    ],
  },

  "kiss-woman-man": {
    batchId: BATCH_ID,
    searchTitle: "Kiss Woman Man Emoji (💏) Meaning: Kiss, Couple, and Romance",
    snippetAnswer:
      "💏 Kiss Woman Man marks a kiss between woman and man — romantic kiss, anniversary, Valentine's, and hetero couple affection posts.",
    detailedParagraphs: [
      "Kiss Woman Man (💏) shows woman and man kissing — Unicode romantic couple symbol.",
      "Valentine's Day and anniversary posts lead 💏 — classic couple kiss icon.",
      "Soft launch and 'first kiss 💏' relationship milestone content.",
    ],
    textingMeaning: "'Kiss 💏', 'Love you 💏', 'Valentine 💏'.",
    socialMeaning: "Couple photos, wedding kisses, and romance TikTok tag 💏.",
    caution: "Public affection posts — respect partners' privacy preferences.",
    examples: [
      { context: "Valentine", text: "Love 💏" },
      { context: "Anniversary", text: "Kiss 💏" },
      { context: "Wedding", text: "First 💏" },
      { context: "Missing", text: "Wish 💏" },
      { context: "Date", text: "Goodnight 💏" },
    ],
    contextBlocks: [
      { title: "Romantic kiss", body: "💏 hetero couple kiss — Valentine's staple." },
      { title: "Vs 👩‍❤️‍💋‍👨", body: "Same ZWJ kiss sequence — platform rendering varies." },
      { title: "Vs 😘", body: "😘 kiss mark face. 💏 two people kissing." },
    ],
    searchIntents: ["kiss woman man emoji", "💏 meaning", "couple kissing emoji", "💏 copy paste"],
    whenNotToUse: ["Unwanted sexual context.", "Mocking PDA couples."],
    faqs: [
      { question: "What does 💏 mean?", answer: "Kiss between woman and man — romance, Valentine's, anniversary." },
      { question: "💏 vs 😘?", answer: "💏 two people kissing; 😘 single face blowing kiss." },
    ],
  },

  "kiss-man-man": {
    batchId: BATCH_ID,
    searchTitle: "Kiss Man Man Emoji (👨‍❤️‍💋‍👨) Meaning: Gay Kiss, Pride, and Love",
    snippetAnswer:
      "👨‍❤️‍💋‍👨 Kiss Man Man marks kiss between two men — gay couple affection, Pride love, wedding kiss, and same-sex romance posts.",
    detailedParagraphs: [
      "Kiss Man Man (👨‍❤️‍💋‍👨) shows two men kissing — Unicode same-sex couple symbol.",
      "Pride month and gay wedding content celebrates 👨‍❤️‍💋‍👨 — love visibility.",
      "Anniversary and 'still kissing 👨‍❤️‍💋‍👨' — long-term couple posts.",
    ],
    textingMeaning: "'Love 👨‍❤️‍💋‍👨', 'Pride 👨‍❤️‍💋‍👨', 'Kiss 👨‍❤️‍💋‍👨'.",
    socialMeaning: "Gay couple romance, Pride celebrations, and marriage equality posts tag this emoji.",
    caution: "Don't use for homophobic bait or fetish content.",
    examples: [
      { context: "Pride", text: "Love wins 👨‍❤️‍💋‍👨" },
      { context: "Wedding", text: "Married 👨‍❤️‍💋‍👨" },
      { context: "Anniversary", text: "Years 👨‍❤️‍💋‍👨" },
      { context: "Date", text: "Goodnight 👨‍❤️‍💋‍👨" },
      { context: "Love", text: "Forever 👨‍❤️‍💋‍👨" },
    ],
    contextBlocks: [
      { title: "Gay kiss", body: "👨‍❤️‍💋‍👨 two men kissing — same-sex romance representation." },
      { title: "Vs 💏", body: "💏 woman man kiss. 👨‍❤️‍💋‍👨 man man kiss." },
      { title: "Pride", body: "Marriage equality and Pride love posts — visibility matters." },
    ],
    searchIntents: ["kiss man man emoji", "👨‍❤️‍💋‍👨 meaning", "gay kiss emoji", "👨‍❤️‍💋‍👨 copy paste"],
    whenNotToUse: ["Homophobic mockery.", "Fetishizing without consent."],
    faqs: [
      { question: "What does 👨‍❤️‍💋‍👨 mean?", answer: "Kiss between two men — gay couple, Pride, wedding, romance." },
      { question: "👨‍❤️‍💋‍👨 Pride?", answer: "Common for gay male couple love and visibility posts." },
    ],
  },

  "kiss-woman-woman": {
    batchId: BATCH_ID,
    searchTitle: "Kiss Woman Woman Emoji (👩‍❤️‍💋‍👩) Meaning: Lesbian Kiss, Pride, and Love",
    snippetAnswer:
      "👩‍❤️‍💋‍👩 Kiss Woman Woman marks kiss between two women — lesbian couple affection, Pride love, wedding kiss, and sapphic romance posts.",
    detailedParagraphs: [
      "Kiss Woman Woman (👩‍❤️‍💋‍👩) shows two women kissing — Unicode same-sex couple symbol.",
      "Lesbian visibility and Pride posts center 👩‍❤️‍💋‍👩 — love is love.",
      "Galentine's romantic twist and anniversary kisses tag this emoji.",
    ],
    textingMeaning: "'Love 👩‍❤️‍💋‍👩', 'Pride 👩‍❤️‍💋‍👩', 'Kiss 👩‍❤️‍💋‍👩'.",
    socialMeaning: "Lesbian couple content, sapphic book fandom, and marriage posts use 👩‍❤️‍💋‍👩.",
    caution: "Avoid fetishizing lesbian relationships for male gaze.",
    examples: [
      { context: "Pride", text: "Love 👩‍❤️‍💋‍👩" },
      { context: "Wedding", text: "Mrs & Mrs 👩‍❤️‍💋‍👩" },
      { context: "Anniversary", text: "Years 👩‍❤️‍💋‍👩" },
      { context: "Date", text: "Night 👩‍❤️‍💋‍👩" },
      { context: "Love", text: "Forever 👩‍❤️‍💋‍👩" },
    ],
    contextBlocks: [
      { title: "Lesbian kiss", body: "👩‍❤️‍💋‍👩 two women kissing — sapphic romance." },
      { title: "Vs 💏", body: "💏 woman man. 👩‍❤️‍💋‍👩 woman woman." },
      { title: "Visibility", body: "Pride and representation — lesbian love normalized." },
    ],
    searchIntents: ["kiss woman woman emoji", "👩‍❤️‍💋‍👩 meaning", "lesbian kiss emoji", "👩‍❤️‍💋‍👩 copy paste"],
    whenNotToUse: ["Fetish content.", "Mocking lesbian couples."],
    faqs: [
      { question: "What does 👩‍❤️‍💋‍👩 mean?", answer: "Kiss between two women — lesbian couple, Pride, romance." },
      { question: "👩‍❤️‍💋‍👩 vs 👭?", answer: "👭 holding hands; 👩‍❤️‍💋‍👩 kissing — more explicit romance." },
    ],
  },

  "couple-with-heart-woman-man": {
    batchId: BATCH_ID,
    searchTitle: "Couple With Heart Woman Man Emoji (💑) Meaning: Couple in Love, Romance, and Relationship",
    snippetAnswer:
      "💑 Couple With Heart Woman Man marks couple in love — relationship status, anniversary, Valentine's, and hetero romance with heart between.",
    detailedParagraphs: [
      "Couple With Heart Woman Man (💑) shows woman, man, and heart — Unicode in-love couple symbol.",
      "Relationship soft launch 'it's official 💑' — couple reveal format.",
      "Valentine's and anniversary graphics center 💑 — heart between pair.",
    ],
    textingMeaning: "'In love 💑', 'Official 💑', 'Us 💑'.",
    socialMeaning: "Couple goals content, engagement announcements, and romance posts tag 💑.",
    caution: "Heart implies romance — don't use for platonic pairs.",
    examples: [
      { context: "Official", text: "Together 💑" },
      { context: "Valentine", text: "Love 💑" },
      { context: "Anniversary", text: "Years 💑" },
      { context: "Launch", text: "Revealed 💑" },
      { context: "Missing", text: "Wish 💑" },
    ],
    contextBlocks: [
      { title: "In love", body: "💑 heart between couple — explicit romance." },
      { title: "Vs 👫", body: "👫 hands only. 💑 adds heart for love." },
      { title: "Vs 💏", body: "💏 kissing. 💑 standing with heart." },
    ],
    searchIntents: ["couple with heart woman man emoji", "💑 meaning", "couple in love emoji", "💑 copy paste"],
    whenNotToUse: ["Platonic friend pairs.", "Pressuring single people."],
    faqs: [
      { question: "What does 💑 mean?", answer: "Couple with heart — woman and man in love, relationship." },
      { question: "💑 vs 👫?", answer: "💑 adds heart — stronger romantic signal." },
    ],
  },

  "couple-with-heart-man-man": {
    batchId: BATCH_ID,
    searchTitle: "Couple With Heart Man Man Emoji (👨‍❤️‍👨) Meaning: Gay Couple, Love, and Pride",
    snippetAnswer:
      "👨‍❤️‍👨 Couple With Heart Man Man marks gay couple in love — relationship status, Pride, anniversary, and male same-sex romance with heart.",
    detailedParagraphs: [
      "Couple With Heart Man Man (👨‍❤️‍👨) shows two men with heart — Unicode same-sex in-love symbol.",
      "Gay relationship milestones and 'love is love 👨‍❤️‍👨' — Pride staple.",
      "Engagement and wedding announcements in gay community use this emoji.",
    ],
    textingMeaning: "'Love 👨‍❤️‍👨', 'Official 👨‍❤️‍👨', 'Pride 👨‍❤️‍👨'.",
    socialMeaning: "Gay couple Instagram, marriage equality celebration, and romance posts tag 👨‍❤️‍👨.",
    caution: "Respectful representation — not prop for jokes.",
    examples: [
      { context: "Love", text: "Forever 👨‍❤️‍👨" },
      { context: "Pride", text: "Happy 👨‍❤️‍👨" },
      { context: "Engaged", text: "Yes 👨‍❤️‍👨" },
      { context: "Anniversary", text: "Years 👨‍❤️‍👨" },
      { context: "Official", text: "Together 👨‍❤️‍👨" },
    ],
    contextBlocks: [
      { title: "Gay couple love", body: "👨‍❤️‍👨 heart between two men — in-love status." },
      { title: "Vs 👬", body: "👬 holding hands. 👨‍❤️‍👨 adds heart." },
      { title: "Vs 💑", body: "💑 woman man. 👨‍❤️‍👨 man man." },
    ],
    searchIntents: ["couple with heart man man emoji", "👨‍❤️‍👨 meaning", "gay couple love emoji", "👨‍❤️‍👨 copy paste"],
    whenNotToUse: ["Homophobic content.", "Tokenizing gay couples."],
    faqs: [
      { question: "What does 👨‍❤️‍👨 mean?", answer: "Couple with heart — two men in love, gay relationship, Pride." },
      { question: "👨‍❤️‍👨 vs 👬?", answer: "👨‍❤️‍👨 adds heart for explicit in-love status." },
    ],
  },

  "couple-with-heart-woman-woman": {
    batchId: BATCH_ID,
    searchTitle: "Couple With Heart Woman Woman Emoji (👩‍❤️‍👩) Meaning: Lesbian Couple, Love, and Pride",
    snippetAnswer:
      "👩‍❤️‍👩 Couple With Heart Woman Woman marks lesbian couple in love — relationship status, sapphic romance, Pride, and anniversary with heart.",
    detailedParagraphs: [
      "Couple With Heart Woman Woman (👩‍❤️‍👩) shows two women with heart — Unicode same-sex in-love symbol.",
      "Lesbian relationship announcements and Pride love posts use 👩‍❤️‍👩.",
      "Sapphic book couple edits and fandom shipping tag this emoji.",
    ],
    textingMeaning: "'Love 👩‍❤️‍👩', 'Official 👩‍❤️‍👩', 'Wlw 👩‍❤️‍👩'.",
    socialMeaning: "Lesbian couple content, wlw Twitter, and engagement posts tag 👩‍❤️‍👩.",
    caution: "Respectful sapphic representation — avoid fetish framing.",
    examples: [
      { context: "Love", text: "Forever 👩‍❤️‍👩" },
      { context: "Pride", text: "Happy 👩‍❤️‍👩" },
      { context: "Engaged", text: "Yes 👩‍❤️‍👩" },
      { context: "Anniversary", text: "Years 👩‍❤️‍👩" },
      { context: "Wlw", text: "Us 👩‍❤️‍👩" },
    ],
    contextBlocks: [
      { title: "Lesbian love", body: "👩‍❤️‍👩 heart between two women — in-love couple." },
      { title: "Vs 👭", body: "👭 hands. 👩‍❤️‍👩 heart for romance." },
      { title: "Vs 💑", body: "💑 hetero couple. 👩‍❤️‍👩 woman woman." },
    ],
    searchIntents: ["couple with heart woman woman emoji", "👩‍❤️‍👩 meaning", "lesbian couple emoji", "👩‍❤️‍👩 copy paste"],
    whenNotToUse: ["Fetishizing wlw.", "Mocking lesbian relationships."],
    faqs: [
      { question: "What does 👩‍❤️‍👩 mean?", answer: "Couple with heart — two women in love, lesbian relationship, Pride." },
      { question: "👩‍❤️‍👩 wlw?", answer: "Common in women-loving-women community posts." },
    ],
  },

  "family-man-man-girl-boy": {
    batchId: BATCH_ID,
    searchTitle: "Family Man Man Girl Boy Emoji (👨‍👨‍👧‍👦) Meaning: Two-Dad Family, Same-Sex Parents, and Kids",
    snippetAnswer:
      "👨‍👨‍👧‍👦 Family Man Man Girl Boy marks two fathers with daughter and son — same-sex parent family, two-dad household, and inclusive family representation.",
    detailedParagraphs: [
      "Family Man Man Girl Boy (👨‍👨‍👧‍👦) shows two men, girl, boy — Unicode same-sex parent family ZWJ.",
      "Pride family posts and adoption stories celebrate 👨‍👨‍👧‍👦 — two-dad visibility.",
      "Holiday cards and vacation 'our family 👨‍👨‍👧‍👦' — normalization content.",
    ],
    textingMeaning: "'Our family 👨‍👨‍👧‍👦', 'Two dads 👨‍👨‍👧‍👦', 'Love 👨‍👨‍👧‍👦'.",
    socialMeaning: "Gay parent blogs, adoption day posts, and family diversity content tag 👨‍👨‍👧‍👦.",
    caution: "Families form many ways — don't gatekeep parenthood narratives.",
    examples: [
      { context: "Pride", text: "Family 👨‍👨‍👧‍👦" },
      { context: "Adoption", text: "Home 👨‍👨‍👧‍👦" },
      { context: "Holiday", text: "Card 👨‍👨‍👧‍👦" },
      { context: "Vacation", text: "Us four 👨‍👨‍👧‍👦" },
      { context: "Love", text: "Dads 👨‍👨‍👧‍👦" },
    ],
    contextBlocks: [
      { title: "Two dads", body: "👨‍👨‍👧‍👦 two fathers + girl + boy — same-sex parent family." },
      { title: "Vs 👨‍👩‍👧‍👦", body: "👨‍👩‍👧‍👦 man woman parents. 👨‍👨‍👧‍👦 two men." },
      { title: "Representation", body: "Adoption and surrogacy journeys — diverse family formation." },
    ],
    searchIntents: ["family man man girl boy emoji", "👨‍👨‍👧‍👦 meaning", "two dads family emoji", "👨‍👨‍👧‍👦 copy paste"],
    whenNotToUse: ["Homophobic family comments.", "Implying kids 'need' opposite-sex parents."],
    faqs: [
      { question: "What does 👨‍👨‍👧‍👦 mean?", answer: "Two men with girl and boy — two-dad family, same-sex parents." },
      { question: "👨‍👨‍👧‍👦 adoption?", answer: "Common in gay dad adoption and family celebration posts." },
    ],
  },

  "family-woman-woman-girl-boy": {
    batchId: BATCH_ID,
    searchTitle: "Family Woman Woman Girl Boy Emoji (👩‍👩‍👧‍👦) Meaning: Two-Mom Family, Same-Sex Parents, and Kids",
    snippetAnswer:
      "👩‍👩‍👧‍👦 Family Woman Woman Girl Boy marks two mothers with daughter and son — two-mom household, same-sex parent family, and lesbian parent representation.",
    detailedParagraphs: [
      "Family Woman Woman Girl Boy (👩‍👩‍👧‍👦) shows two women, girl, boy — Unicode same-sex parent family.",
      "Two-mom family visibility and Mother's Day dual-mom posts use 👩‍👩‍👧‍👦.",
      "IVF and co-parenting journey content tags this family emoji.",
    ],
    textingMeaning: "'Two moms 👩‍👩‍👧‍👦', 'Our kids 👩‍👩‍👧‍👦', 'Family 👩‍👩‍👧‍👦'.",
    socialMeaning: "Lesbian parent Instagram, family Pride posts, and co-mom blogs tag 👩‍👩‍👧‍👦.",
    caution: "Respect family privacy — don't interrogate how kids were conceived.",
    examples: [
      { context: "Moms", text: "Us 👩‍👩‍👧‍👦" },
      { context: "Pride", text: "Family 👩‍👩‍👧‍👦" },
      { context: "Holiday", text: "Together 👩‍👩‍👧‍👦" },
      { context: "School", text: "Both moms 👩‍👩‍👧‍👦" },
      { context: "Love", text: "Home 👩‍👩‍👧‍👦" },
    ],
    contextBlocks: [
      { title: "Two moms", body: "👩‍👩‍👧‍👦 two mothers + girl + boy — lesbian parent family." },
      { title: "Vs 👨‍👩‍👧‍👦", body: "👨‍👩‍👧‍👦 mixed gender parents. 👩‍👩‍👧‍👦 two women." },
      { title: "Mother's Day", body: "Dual-mom families celebrate 👩‍👩‍👧‍👦 — both honored." },
    ],
    searchIntents: ["family woman woman girl boy emoji", "👩‍👩‍👧‍👦 meaning", "two moms family emoji", "👩‍👩‍👧‍👦 copy paste"],
    whenNotToUse: ["Homophobic comments.", "Intrusive questions about family formation."],
    faqs: [
      { question: "What does 👩‍👩‍👧‍👦 mean?", answer: "Two women with girl and boy — two-mom family, same-sex parents." },
      { question: "👩‍👩‍👧‍👦 two moms?", answer: "Standard emoji for lesbian couple with two children." },
    ],
  },

  "family-man-man-boy-boy": {
    batchId: BATCH_ID,
    searchTitle: "Family Man Man Boy Boy Emoji (👨‍👨‍👦‍👦) Meaning: Two Dads Two Sons, Same-Sex Family",
    snippetAnswer:
      "👨‍👨‍👦‍👦 Family Man Man Boy Boy marks two fathers with two sons — all-boy same-sex parent household, sports dad memes, and two-dad family of four.",
    detailedParagraphs: [
      "Family Man Man Boy Boy (👨‍👨‍👦‍👦) shows two men and two boys — Unicode same-sex parent family variant.",
      "Gay dad 'outnumbered by boys 👨‍👨‍👦‍👦' — playful household humor.",
      "Soccer dad and little league posts from two-dad families tag this emoji.",
    ],
    textingMeaning: "'All boys 👨‍👨‍👦‍👦', 'Two dads 👨‍👨‍👦‍👦', 'Chaos 👨‍👨‍👦‍👦'.",
    socialMeaning: "Gay parent family content, sports dad threads, and Pride family posts use 👨‍👨‍👦‍👦.",
    caution: "Don't reduce family to gender stereotypes.",
    examples: [
      { context: "Dads", text: "Team 👨‍👨‍👦‍👦" },
      { context: "Sports", text: "Soccer 👨‍👨‍👦‍👦" },
      { context: "Chaos", text: "Loud 👨‍👨‍👦‍👦" },
      { context: "Pride", text: "Family 👨‍👨‍👦‍👦" },
      { context: "Weekend", text: "Us four 👨‍👨‍👦‍👦" },
    ],
    contextBlocks: [
      { title: "Two dads two sons", body: "👨‍👨‍👦‍👦 all-male family unit — same-sex parents." },
      { title: "Vs 👨‍👨‍👧‍👦", body: "👨‍👨‍👧‍👦 adds daughter. 👨‍👨‍👦‍👦 two boys." },
      { title: "Dad humor", body: "Boy energy household jokes — affectionate chaos." },
    ],
    searchIntents: ["family man man boy boy emoji", "👨‍👨‍👦‍👦 meaning", "two dads two sons emoji", "👨‍👨‍👦‍👦 copy paste"],
    whenNotToUse: ["Gender essentialist jokes.", "Homophobic family mockery."],
    faqs: [
      { question: "What does 👨‍👨‍👦‍👦 mean?", answer: "Two men with two boys — two-dad family with two sons." },
      { question: "👨‍👨‍👦‍👦 vs 👨‍👨‍👧‍👦?", answer: "👨‍👨‍👦‍👦 both sons; 👨‍👨‍👧‍👦 one girl one boy." },
    ],
  },

  "family-man-boy": {
    batchId: BATCH_ID,
    searchTitle: "Family Man Boy Emoji (👨‍👦) Meaning: Single Dad, Father and Son, and Parenting",
    snippetAnswer:
      "👨‍👦 Family Man Boy marks father and son — single dad life, father-son outing, dad jokes, and one-child parenting posts.",
    detailedParagraphs: [
      "Family Man Boy (👨‍👦) shows man and boy — Unicode single-parent or father-son dyad.",
      "Single dad blogs and 'weekend with my boy 👨‍👦' — custody and bonding content.",
      "Father's Day and dad joke threads tag 👨‍👦 — paternal bond.",
    ],
    textingMeaning: "'Me and son 👨‍👦', 'Dad life 👨‍👦', 'Outing 👨‍👦'.",
    socialMeaning: "Single father content, baseball dad posts, and Father's Day use 👨‍👦.",
    caution: "Not all man-boy pairs are father-son — could be uncle, mentor; context helps.",
    examples: [
      { context: "Weekend", text: "Park 👨‍👦" },
      { context: "Dad", text: "Jokes 👨‍👦" },
      { context: "Single", text: "Us two 👨‍👦" },
      { context: "Father's Day", text: "Best 👨‍👦" },
      { context: "Game", text: "Catch 👨‍👦" },
    ],
    contextBlocks: [
      { title: "Father son", body: "👨‍👦 man + boy — dad and kid dyad." },
      { title: "Vs 👨‍👧", body: "👨‍👧 man daughter. 👨‍👦 man son." },
      { title: "Single dad", body: "Common for one father one child household posts." },
    ],
    searchIntents: ["family man boy emoji", "👨‍👦 meaning", "father son emoji", "👨‍👦 copy paste"],
    whenNotToUse: ["Mom-shaming single dad narratives.", "Assuming custody situations."],
    faqs: [
      { question: "What does 👨‍👦 mean?", answer: "Man and boy — father-son, single dad, dad outing." },
      { question: "👨‍👦 single dad?", answer: "Often used for one father raising one son." },
    ],
  },

  "family-woman-girl": {
    batchId: BATCH_ID,
    searchTitle: "Family Woman Girl Emoji (👩‍👧) Meaning: Single Mom, Mother and Daughter, and Parenting",
    snippetAnswer:
      "👩‍👧 Family Woman Girl marks mother and daughter — single mom life, mother-daughter bond, girls' day out, and one-child parenting posts.",
    detailedParagraphs: [
      "Family Woman Girl (👩‍👧) shows woman and girl — Unicode mother-daughter or single-mom dyad.",
      "Mother-daughter matching outfits and spa day 👩‍👧 — bonding content.",
      "Single mom strength posts and 'just us two 👩‍👧' — parenting narrative.",
    ],
    textingMeaning: "'Me and her 👩‍👧', 'Mom life 👩‍👧', 'Girls day 👩‍👧'.",
    socialMeaning: "Single mother blogs, mother-daughter TikTok, and Mother's Day tag 👩‍👧.",
    caution: "Respect single parent struggles — avoid pity framing.",
    examples: [
      { context: "Bonding", text: "Spa 👩‍👧" },
      { context: "Single mom", text: "Us 👩‍👧" },
      { context: "Matching", text: "Twins 👩‍👧" },
      { context: "Mother's Day", text: "Love 👩‍👧" },
      { context: "Adventure", text: "Day out 👩‍👧" },
    ],
    contextBlocks: [
      { title: "Mother daughter", body: "👩‍👧 woman + girl — maternal bond icon." },
      { title: "Vs 👩‍👦", body: "👩‍👦 woman son. 👩‍👧 woman daughter." },
      { title: "Single mom", body: "One mother one daughter — common family structure." },
    ],
    searchIntents: ["family woman girl emoji", "👩‍👧 meaning", "mother daughter emoji", "👩‍👧 copy paste"],
    whenNotToUse: ["Dad erasure in co-parent families.", "Pity narratives about single moms."],
    faqs: [
      { question: "What does 👩‍👧 mean?", answer: "Woman and girl — mother-daughter, single mom, girls' outing." },
      { question: "👩‍👧 single mom?", answer: "Frequently tags one mother raising one daughter." },
    ],
  },

  "man-facepalming": {
    batchId: BATCH_ID,
    searchTitle: "Man Facepalming Emoji (🤦‍♂️) Meaning: Facepalm, Cringe, and Disbelief",
    snippetAnswer:
      "🤦‍♂️ Man Facepalming marks facepalm reaction — cringe moment, 'I can't believe this', embarrassment, and universal 'why did I do that' meme.",
    detailedParagraphs: [
      "Man Facepalming (🤦‍♂️) shows man with hand on face — Unicode frustration/disbelief gesture.",
      "Reply-guy facepalm to bad takes 🤦‍♂️ — social media reaction staple.",
      "Self-directed 'why did I say that 🤦‍♂️' — secondhand embarrassment.",
    ],
    textingMeaning: "'Facepalm 🤦‍♂️', 'Cringe 🤦‍♂️', 'Can't 🤦‍♂️'.",
    socialMeaning: "Twitter quote-tweet reactions, fail compilations, and cringe TikTok tag 🤦‍♂️.",
    caution: "Gendered variant — woman-facepalming exists; meaning identical.",
    examples: [
      { context: "Cringe", text: "Why 🤦‍♂️" },
      { context: "Fail", text: "Nope 🤦‍♂️" },
      { context: "Self", text: "I said it 🤦‍♂️" },
      { context: "News", text: "Again 🤦‍♂️" },
      { context: "Reply", text: "This take 🤦‍♂️" },
    ],
    contextBlocks: [
      { title: "Facepalm", body: "🤦‍♂️ hand to face — disbelief, embarrassment, exhaustion." },
      { title: "Vs 🤦", body: "🤦 neutral person facepalming. 🤦‍♂️ man variant." },
      { title: "Meme", body: "Universal reaction GIF energy — cringe and fail content." },
    ],
    searchIntents: ["man facepalming emoji", "🤦‍♂️ meaning", "facepalm emoji man", "🤦‍♂️ copy paste"],
    whenNotToUse: ["Mocking someone's honest mistake cruelly.", "Ableist use on cognitive disability threads."],
    faqs: [
      { question: "What does 🤦‍♂️ mean?", answer: "Man facepalming — cringe, disbelief, embarrassment, fail reaction." },
      { question: "🤦‍♂️ vs 🤦‍♀️?", answer: "Same meaning — gender presentation differs only." },
    ],
  },

  "woman-facepalming": {
    batchId: BATCH_ID,
    searchTitle: "Woman Facepalming Emoji (🤦‍♀️) Meaning: Facepalm, Cringe, and Disbelief",
    snippetAnswer:
      "🤦‍♀️ Woman Facepalming marks facepalm reaction — cringe, secondhand embarrassment, 'I can't even', and relatable fail moment posts.",
    detailedParagraphs: [
      "Woman Facepalming (🤦‍♀️) shows woman with hand on face — Unicode disbelief gesture.",
      "Group chat reaction to someone's bad decision 🤦‍♀️ — collective cringe.",
      "Workplace 'read that email 🤦‍♀️' — professional dismay humor.",
    ],
    textingMeaning: "'Facepalm 🤦‍♀️', 'I can't 🤦‍♀️', 'Why 🤦‍♀️'.",
    socialMeaning: "Relatable cringe reels, mom reaction memes, and reply threads tag 🤦‍♀️.",
    caution: "Same as male variant — gender doesn't change facepalm meaning.",
    examples: [
      { context: "Cringe", text: "Stop 🤦‍♀️" },
      { context: "Email", text: "Read it 🤦‍♀️" },
      { context: "Self", text: "Did it again 🤦‍♀️" },
      { context: "Group chat", text: "He did WHAT 🤦‍♀️" },
      { context: "News", text: "Seriously 🤦‍♀️" },
    ],
    contextBlocks: [
      { title: "Facepalm", body: "🤦‍♀️ universal dismay — hand covers face in disbelief." },
      { title: "Vs 🤦", body: "🤦 person facepalming neutral. 🤦‍♀️ woman variant." },
      { title: "Relatable", body: "Mom/group chat cringe reactor — meme favorite." },
    ],
    searchIntents: ["woman facepalming emoji", "🤦‍♀️ meaning", "facepalm emoji woman", "🤦‍♀️ copy paste"],
    whenNotToUse: ["Piling on someone's mistake.", "Gendered mockery."],
    faqs: [
      { question: "What does 🤦‍♀️ mean?", answer: "Woman facepalming — cringe, disbelief, embarrassment." },
      { question: "🤦‍♀️ meme?", answer: "Top reaction emoji for fail and cringe content." },
    ],
  },

  "man-shrugging": {
    batchId: BATCH_ID,
    searchTitle: "Man Shrugging Emoji (🤷‍♂️) Meaning: Shrug, IDK, and Whatever",
    snippetAnswer:
      "🤷‍♂️ Man Shrugging marks shrug gesture — 'I don't know', indifference, 'not my problem', and ¯\\_(ツ)_/¯ text emoji equivalent.",
    detailedParagraphs: [
      "Man Shrugging (🤷‍♂️) shows man with raised shoulders — Unicode uncertainty/indifference symbol.",
      "'Who knows 🤷‍♂️' — dismissive or genuinely unsure.",
      "Tech support 'have you tried turning it off 🤷‍♂️' — helpless shrug.",
    ],
    textingMeaning: "'Idk 🤷‍♂️', 'Not me 🤷‍♂️', 'Whatever 🤷‍♂️'.",
    socialMeaning: "Apathetic meme replies, philosophical 'shrug life', and IDK threads tag 🤷‍♂️.",
    caution: "Can read dismissive — tone depends on relationship.",
    examples: [
      { context: "IDK", text: "No clue 🤷‍♂️" },
      { context: "Apathy", text: "Not my job 🤷‍♂️" },
      { context: "Whatever", text: "Fine 🤷‍♂️" },
      { context: "Mystery", text: "Who knows 🤷‍♂️" },
      { context: "Reply", text: "Beats me 🤷‍♂️" },
    ],
    contextBlocks: [
      { title: "IDK", body: "🤷‍♂️ shoulders up — don't know, don't care." },
      { title: "Vs 🤷", body: "🤷 person shrugging neutral. 🤷‍♂️ man variant." },
      { title: "Text emoticon", body: "¯\\_(ツ)_/¯ ASCII shrug — 🤷‍♂️ emoji version." },
    ],
    searchIntents: ["man shrugging emoji", "🤷‍♂️ meaning", "shrug emoji man", "🤷‍♂️ copy paste"],
    whenNotToUse: ["Dismissing serious concerns.", "Fake ignorance on accountability."],
    faqs: [
      { question: "What does 🤷‍♂️ mean?", answer: "Man shrugging — IDK, indifference, not my problem." },
      { question: "🤷‍♂️ idk?", answer: "Direct equivalent of 'I don't know' shrug gesture." },
    ],
  },

  "woman-shrugging": {
    batchId: BATCH_ID,
    searchTitle: "Woman Shrugging Emoji (🤷‍♀️) Meaning: Shrug, IDK, and Whatever",
    snippetAnswer:
      "🤷‍♀️ Woman Shrugging marks shrug — uncertainty, 'beats me', casual indifference, and relatable 'I have no idea' reaction.",
    detailedParagraphs: [
      "Woman Shrugging (🤷‍♀️) shows woman with raised shoulders — Unicode shrug symbol.",
      "Planner friend 'where should we eat 🤷‍♀️' — decision fatigue.",
      "'Not my circus 🤷‍♀️' — boundary and detachment idiom.",
    ],
    textingMeaning: "'Idk 🤷‍♀️', 'No idea 🤷‍♀️', 'Whatever 🤷‍♀️'.",
    socialMeaning: "Relatable indecision posts, drama detachment memes, and IDK replies use 🤷‍♀️.",
    caution: "Dismissive tone possible — clarify intent.",
    examples: [
      { context: "IDK", text: "Your guess 🤷‍♀️" },
      { context: "Drama", text: "Not my problem 🤷‍♀️" },
      { context: "Plans", text: "Either works 🤷‍♀️" },
      { context: "Mystery", text: "No idea 🤷‍♀️" },
      { context: "Reply", text: "Beats me 🤷‍♀️" },
    ],
    contextBlocks: [
      { title: "Shrug", body: "🤷‍♀️ raised shoulders — uncertainty or apathy." },
      { title: "Vs 🤷", body: "🤷 neutral shrug. 🤷‍♀️ woman variant." },
      { title: "Boundary", body: "'Not my circus' 🤷‍♀️ — opting out of drama." },
    ],
    searchIntents: ["woman shrugging emoji", "🤷‍♀️ meaning", "shrug emoji woman", "🤷‍♀️ copy paste"],
    whenNotToUse: ["Avoiding responsibility dismissively.", "Gendered 'women don't know' stereotypes."],
    faqs: [
      { question: "What does 🤷‍♀️ mean?", answer: "Woman shrugging — IDK, indifference, beats me." },
      { question: "🤷‍♀️ vs 🤷‍♂️?", answer: "Identical meaning — gender presentation only." },
    ],
  },

  "man-bowing": {
    batchId: BATCH_ID,
    searchTitle: "Man Bowing Emoji (🙇‍♂️) Meaning: Bow, Apology, and Respect",
    snippetAnswer:
      "🙇‍♂️ Man Bowing marks bow gesture — deep apology, Japanese respect culture, gratitude, and 'I'm sorry' formal deference posts.",
    detailedParagraphs: [
      "Man Bowing (🙇‍♂️) shows man bowing forward — Unicode apology/respect gesture.",
      "Anime and Japanese culture fans use 🙇‍♂️ — ojigi respect bow.",
      "Formal apology 'I messed up 🙇‍♂️' — sincere regret signal.",
    ],
    textingMeaning: "'Sorry 🙇‍♂️', 'My bad 🙇‍♂️', 'Thank you 🙇‍♂️'.",
    socialMeaning: "Apology threads, Japanese etiquette content, and gratitude posts tag 🙇‍♂️.",
    caution: "Cultural bow has depth — don't mock Japanese customs.",
    examples: [
      { context: "Sorry", text: "Deeply 🙇‍♂️" },
      { context: "Thanks", text: "Grateful 🙇‍♂️" },
      { context: "Apology", text: "My fault 🙇‍♂️" },
      { context: "Culture", text: "Ojigi 🙇‍♂️" },
      { context: "Formal", text: "Regret 🙇‍♂️" },
    ],
    contextBlocks: [
      { title: "Apology bow", body: "🙇‍♂️ head down — sincere sorry in many Asian contexts." },
      { title: "Vs 🙇", body: "🙇 person bowing neutral. 🙇‍♂️ man variant." },
      { title: "Japanese ojigi", body: "Respect and apology bow — anime/manga familiar." },
    ],
    searchIntents: ["man bowing emoji", "🙇‍♂️ meaning", "bowing apology emoji", "🙇‍♂️ copy paste"],
    whenNotToUse: ["Mocking Asian bowing customs.", "Sarcastic apology without sincerity when harm occurred."],
    faqs: [
      { question: "What does 🙇‍♂️ mean?", answer: "Man bowing — apology, respect, gratitude, Japanese ojigi." },
      { question: "🙇‍♂️ sorry?", answer: "Formal deep apology gesture — more sincere than casual my bad." },
    ],
  },

  "woman-bowing": {
    batchId: BATCH_ID,
    searchTitle: "Woman Bowing Emoji (🙇‍♀️) Meaning: Bow, Apology, and Gratitude",
    snippetAnswer:
      "🙇‍♀️ Woman Bowing marks bow — apology, thank-you deference, respect gesture, and formal 'I'm deeply sorry' communication.",
    detailedParagraphs: [
      "Woman Bowing (🙇‍♀️) shows woman bowing forward — Unicode respect/apology symbol.",
      "Customer service apology templates sometimes use 🙇‍♀️ — formal regret.",
      "Gratitude bow 'thank you so much 🙇‍♀️' — appreciative deference.",
    ],
    textingMeaning: "'Sorry 🙇‍♀️', 'Thank you 🙇‍♀️', 'Apologies 🙇‍♀️'.",
    socialMeaning: "Apology posts, Japanese culture content, and formal thanks tag 🙇‍♀️.",
    caution: "Same cultural sensitivity as male variant.",
    examples: [
      { context: "Sorry", text: "Truly 🙇‍♀️" },
      { context: "Thanks", text: "So much 🙇‍♀️" },
      { context: "Apology", text: "Forgive me 🙇‍♀️" },
      { context: "Formal", text: "Regret 🙇‍♀️" },
      { context: "Gratitude", text: "Humbled 🙇‍♀️" },
    ],
    contextBlocks: [
      { title: "Bow", body: "🙇‍♀️ forward bend — apology or thanks." },
      { title: "Vs 🙇", body: "🙇 neutral bow. 🙇‍♀️ woman variant." },
      { title: "Formal tone", body: "More ceremonial than casual 🙏 — deep bow energy." },
    ],
    searchIntents: ["woman bowing emoji", "🙇‍♀️ meaning", "bowing emoji woman", "🙇‍♀️ copy paste"],
    whenNotToUse: ["Mocking bowing cultures.", "Performative apology without change."],
    faqs: [
      { question: "What does 🙇‍♀️ mean?", answer: "Woman bowing — apology, gratitude, respect gesture." },
      { question: "🙇‍♀️ vs 🙏?", answer: "🙇‍♀️ deep forward bow; 🙏 folded hands prayer/thanks." },
    ],
  },

  "pregnant-woman": {
    batchId: BATCH_ID,
    searchTitle: "Pregnant Woman Emoji (🤰) Meaning: Pregnancy, Expecting, and Baby Bump",
    snippetAnswer:
      "🤰 Pregnant Woman marks pregnancy — baby bump, expecting announcement, maternity journey, and pregnant woman representation.",
    detailedParagraphs: [
      "Pregnant Woman (🤰) shows woman with visible pregnancy — Unicode maternity symbol.",
      "Pregnancy reveal and bump date posts lead 🤰 — expecting announcement staple.",
      "Maternity content, prenatal appointments, and nursery prep tag 🤰.",
    ],
    textingMeaning: "'Expecting 🤰', 'Bump 🤰', 'Baby coming 🤰'.",
    socialMeaning: "Pregnancy TikTok, gender reveal discourse, and maternity fashion use 🤰.",
    caution: "Pregnancy is personal — don't pressure announcements; loss sensitivity required.",
    examples: [
      { context: "Reveal", text: "Baby 🤰" },
      { context: "Bump", text: "Week 20 🤰" },
      { context: "Excited", text: "Soon 🤰" },
      { context: "Maternity", text: "Style 🤰" },
      { context: "Journey", text: "Growing 🤰" },
    ],
    contextBlocks: [
      { title: "Expecting", body: "🤰 visible pregnancy — announcement and bump updates." },
      { title: "Vs 🫄", body: "🫄 pregnant person neutral. 🤰 woman specifically." },
      { title: "Vs 👶", body: "👶 baby born. 🤰 still expecting." },
    ],
    searchIntents: ["pregnant woman emoji", "🤰 meaning", "pregnancy emoji", "🤰 copy paste"],
    whenNotToUse: ["Pregnancy loss threads without care.", "Pressure to have children."],
    faqs: [
      { question: "What does 🤰 mean?", answer: "Pregnant woman — expecting, baby bump, maternity journey." },
      { question: "🤰 vs 🫄?", answer: "🤰 woman; 🫄 gender-neutral pregnant person." },
    ],
  },

  "pregnant-man": {
    batchId: BATCH_ID,
    searchTitle: "Pregnant Man Emoji (🫃) Meaning: Pregnant Man, Trans Pregnancy, and Satire",
    snippetAnswer:
      "🫃 Pregnant Man marks pregnant man — trans masculine pregnancy representation, inclusive family planning, and occasional satirical or meme use.",
    detailedParagraphs: [
      "Pregnant Man (🫃) shows man with pregnant belly — Unicode inclusive pregnancy symbol.",
      "Trans man and nonbinary pregnancy journeys may use 🫃 — representation matters.",
      "Meme and satire contexts exist — distinguish sincere from joke use.",
    ],
    textingMeaning: "'Expecting 🫃', 'Trans dad 🫃', 'Inclusive 🫃'.",
    socialMeaning: "Trans pregnancy advocacy, inclusive health content, and LGBTQ+ family posts tag 🫃.",
    caution: "NEVER mock trans pregnancy; satire vs sincere must be clear.",
    examples: [
      { context: "Trans", text: "Journey 🫃" },
      { context: "Inclusive", text: "All paths 🫃" },
      { context: "Family", text: "Expecting 🫃" },
      { context: "Health", text: "Care 🫃" },
      { context: "Visibility", text: "Represent 🫃" },
    ],
    contextBlocks: [
      { title: "Trans pregnancy", body: "🫃 trans men and some NB people can be pregnant — valid representation." },
      { title: "Vs 🤰", body: "🤰 pregnant woman. 🫃 pregnant man." },
      { title: "Vs 🫄", body: "🫄 pregnant person neutral. 🫃 man presentation." },
    ],
    searchIntents: ["pregnant man emoji", "🫃 meaning", "trans pregnancy emoji", "🫃 copy paste"],
    whenNotToUse: ["Transphobic mockery.", "Satire on sincere pregnancy announcement threads."],
    faqs: [
      { question: "What does 🫃 mean?", answer: "Pregnant man — trans masculine pregnancy, inclusive expecting." },
      { question: "🫃 trans pregnancy?", answer: "Added for inclusive representation — trans men can be pregnant." },
    ],
  },

  "woman-with-headscarf": {
    batchId: BATCH_ID,
    searchTitle: "Woman With Headscarf Emoji (🧕) Meaning: Hijab, Headscarf, and Muslim Woman",
    snippetAnswer:
      "🧕 Woman With Headscarf marks hijab and headscarf — Muslim woman representation, modest fashion, cultural identity, and respectful visibility.",
    detailedParagraphs: [
      "Woman With Headscarf (🧕) shows woman in hijab-style head covering — Unicode religious/cultural symbol.",
      "World Hijab Day and modest fashion posts celebrate 🧕 — identity pride.",
      "Representation in emoji keyboard matters for Muslim women visibility.",
    ],
    textingMeaning: "'Hijab 🧕', 'Modest fashion 🧕', 'Represent 🧕'.",
    socialMeaning: "Muslim woman content, hijab styling TikTok, and diversity posts tag 🧕.",
    caution: "Hijab is faith practice — never costume or mockery; learn before using.",
    examples: [
      { context: "Fashion", text: "Styled 🧕" },
      { context: "Identity", text: "Proud 🧕" },
      { context: "Day", text: "Hijab Day 🧕" },
      { context: "Represent", text: "Visible 🧕" },
      { context: "Modest", text: "Outfit 🧕" },
    ],
    contextBlocks: [
      { title: "Hijab", body: "🧕 headscarf — Islamic modesty for many Muslim women." },
      { title: "Vs 👳", body: "👳 turban. 🧕 hijab/headscarf." },
      { title: "Respect", body: "Not costume — religious and cultural identity." },
    ],
    searchIntents: ["woman with headscarf emoji", "🧕 meaning", "hijab emoji", "🧕 copy paste"],
    whenNotToUse: ["Islamophobic mockery.", "Costume without understanding."],
    faqs: [
      { question: "What does 🧕 mean?", answer: "Woman with headscarf — hijab, Muslim woman, modest fashion." },
      { question: "🧕 hijab?", answer: "Represents hijab-wearing Muslim women — use respectfully." },
    ],
  },

  "woman-feeding-baby": {
    batchId: BATCH_ID,
    searchTitle: "Woman Feeding Baby Emoji (👩‍🍼) Meaning: Breastfeeding, Mother, and Nursing",
    snippetAnswer:
      "👩‍🍼 Woman Feeding Baby marks breastfeeding and bottle feeding — nursing mother, newborn care, parenting, and infant feeding normalization.",
    detailedParagraphs: [
      "Woman Feeding Baby (👩‍🍼) shows woman feeding infant — Unicode parenting/nursing symbol.",
      "Breastfeeding awareness and 'normalize nursing 👩‍🍼' — public feeding advocacy.",
      "New mom exhaustion and 3am feed posts tag 👩‍🍼 — relatable parenting.",
    ],
    textingMeaning: "'Nursing 👩‍🍼', 'Feeding 👩‍🍼', 'Newborn 👩‍🍼'.",
    socialMeaning: "Breastfeeding support groups, new parent content, and bottle vs breast discourse use 👩‍🍼.",
    caution: "Feeding choices are personal — no shaming breast or formula.",
    examples: [
      { context: "Nursing", text: "Normalize 👩‍🍼" },
      { context: "Newborn", text: "3am 👩‍🍼" },
      { context: "Mom", text: "Life 👩‍🍼" },
      { context: "Support", text: "You got this 👩‍🍼" },
      { context: "Feed", text: "Time 👩‍🍼" },
    ],
    contextBlocks: [
      { title: "Feeding", body: "👩‍🍼 breast or bottle — infant nourishment." },
      { title: "Vs 🧑‍🍼", body: "🧑‍🍼 person feeding baby neutral. 👩‍🍼 woman." },
      { title: "Normalize", body: "Public breastfeeding advocacy — 👩‍🍼 visibility." },
    ],
    searchIntents: ["woman feeding baby emoji", "👩‍🍼 meaning", "breastfeeding emoji", "👩‍🍼 copy paste"],
    whenNotToUse: ["Shaming formula feeding.", "Sexualizing breastfeeding."],
    faqs: [
      { question: "What does 👩‍🍼 mean?", answer: "Woman feeding baby — breastfeeding, bottle, new mom, nursing." },
      { question: "👩‍🍼 vs 🧑‍🍼?", answer: "👩‍🍼 woman; 🧑‍🍼 gender-neutral feeding parent." },
    ],
  },

  "man-feeding-baby": {
    batchId: BATCH_ID,
    searchTitle: "Man Feeding Baby Emoji (👨‍🍼) Meaning: Dad Feeding, Bottle, and Parenting",
    snippetAnswer:
      "👨‍🍼 Man Feeding Baby marks father feeding infant — involved dad, bottle duty, newborn care, and modern parenting equality posts.",
    detailedParagraphs: [
      "Man Feeding Baby (👨‍🍼) shows man feeding infant — Unicode involved father symbol.",
      "Dad on bottle duty at 2am 👨‍🍼 — co-parenting content.",
      "Paternity leave and hands-on father posts normalize 👨‍🍼.",
    ],
    textingMeaning: "'Dad duty 👨‍🍼', 'Bottle 👨‍🍼', 'New dad 👨‍🍼'.",
    socialMeaning: "Involved father Instagram, paternity leave advocacy, and new dad humor tag 👨‍🍼.",
    caution: "Don't frame feeding as 'babysitting' — it's parenting.",
    examples: [
      { context: "Night", text: "2am 👨‍🍼" },
      { context: "Leave", text: "Paternity 👨‍🍼" },
      { context: "Dad", text: "On duty 👨‍🍼" },
      { context: "Newborn", text: "Learning 👨‍🍼" },
      { context: "Co-parent", text: "Team 👨‍🍼" },
    ],
    contextBlocks: [
      { title: "Involved dad", body: "👨‍🍼 father feeding — equal parenting representation." },
      { title: "Vs 👩‍🍼", body: "👩‍🍼 woman feeding. 👨‍🍼 man feeding." },
      { title: "Vs 🧑‍🍼", body: "🧑‍🍼 neutral parent. 👨‍🍼 man specifically." },
    ],
    searchIntents: ["man feeding baby emoji", "👨‍🍼 meaning", "dad feeding baby emoji", "👨‍🍼 copy paste"],
    whenNotToUse: ["'Helpful dad' praise for basic parenting.", "Mom gatekeeping infant care."],
    faqs: [
      { question: "What does 👨‍🍼 mean?", answer: "Man feeding baby — involved father, bottle duty, new dad." },
      { question: "👨‍🍼 dad duty?", answer: "Normalizes fathers actively feeding and caring for infants." },
    ],
  },
};
