import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "17-activities-complete";

/** Completes category 6 — all remaining thin Activities pages (jack-o-lantern already in batch 12). */
export const batch17ActivitiesComplete: Record<string, EmojiBatchEnrichment> = {
  "christmas-tree": {
    batchId: BATCH_ID,
    searchTitle: "Christmas Tree Emoji (🎄) Meaning: Holidays, Decor, and December Vibes",
    snippetAnswer:
      "🎄 Christmas Tree marks holiday season — decorating, gifts, December posts, and winter celebration energy from Thanksgiving through New Year.",
    detailedParagraphs: [
      "Christmas Tree (🎄) shows a decorated evergreen — Unicode's anchor symbol for Christmas and broader winter holiday content.",
      "Families text 🎄 when trimming the tree, sharing wish lists, or counting down to December 25. Retail and brands flood feeds with 🎄 from November onward.",
      "Secular winter posts use 🎄 for cozy aesthetic even without religious tone — context from caption clarifies intent.",
    ],
    textingMeaning: "'Tree is up 🎄', 'Holiday mode 🎄', 'Secret Santa 🎄'.",
    socialMeaning: "Holiday Instagram, gift guides, and cozy TikTok tag 🎄 peak Q4.",
    caution: "In mixed-faith groups, pair 🎄 with inclusive wording if celebrating broadly.",
    examples: [
      { context: "Decor", text: "Lights finally done 🎄" },
      { context: "Gifts", text: "Wish list dropped 🎄" },
      { context: "Party", text: "Ugly sweater night 🎄" },
      { context: "Travel", text: "Flying home 🎄" },
      { context: "Cozy", text: "December mood 🎄☕" },
    ],
    contextBlocks: [
      { title: "Holiday season", body: "🎄 opens Q4 content calendars — retail, family, and travel home." },
      { title: "Vs 🎅", body: "🎅 is Santa. 🎄 is the tree and decor centerpiece." },
      { title: "Vs ❄️", body: "❄️ is winter weather. 🎄 is Christmas/holiday celebration." },
    ],
    searchIntents: ["christmas tree emoji", "🎄 meaning", "christmas emoji copy paste", "🎄 holiday"],
    whenNotToUse: ["Avoid 🎄-only greetings to friends who don't celebrate without knowing them.", "Do not use during somber December grief threads."],
    faqs: [
      { question: "What does 🎄 mean?", answer: "Christmas, holiday decorating, December celebration, and winter festivity." },
      { question: "🎄 vs snowflake?", answer: "Tree is holiday/Christmas; snowflake is cold weather." },
    ],
  },

  "japanese-dolls": {
    batchId: BATCH_ID,
    searchTitle: "Japanese Dolls Emoji (🎎) Meaning: Hinamatsuri, Girls' Day, and Japan Culture",
    snippetAnswer:
      "🎎 Japanese Dolls marks Hinamatsuri (Girls' Day) — ornamental hina dolls, March 3 Japan culture, and traditional festival posts.",
    detailedParagraphs: [
      "Japanese Dolls (🎎) depicts emperor and empress hina dolls on tiers — Unicode symbol for Japan's Doll Festival.",
      "Japan culture accounts post 🎎 each early March with peach blossoms and family traditions.",
      "Travelers use 🎎 when sharing doll museum visits or explaining seasonal festivals to international audiences.",
    ],
    textingMeaning: "'Hinamatsuri 🎎', 'March 3 in Japan 🎎', 'Doll display 🎎'.",
    socialMeaning: "Japan travel, cultural education, and anime festival arcs reference 🎎.",
    caution: "Treat 🎎 as cultural symbol — not costume prop for casual jokes about Japan.",
    examples: [
      { context: "Festival", text: "Happy Hinamatsuri 🎎" },
      { context: "Culture", text: "Doll tiers explained 🎎" },
      { context: "Travel", text: "Kyoto doll museum 🎎" },
      { context: "March", text: "Peach season 🎎" },
      { context: "Learn", text: "Girls' Day traditions 🎎" },
    ],
    contextBlocks: [
      { title: "Hinamatsuri", body: "🎎 peaks March 3 — families display hina dolls and eat festive foods." },
      { title: "Vs 🪆", body: "🪆 is Russian nesting dolls. 🎎 is Japanese hina dolls." },
      { title: "Travel niche", body: "High intent when users search Japan festival dates and customs." },
    ],
    searchIntents: ["japanese dolls emoji", "🎎 hinamatsuri", "hina dolls emoji", "🎎 meaning"],
    whenNotToUse: ["Avoid reducing 🎎 to generic 'cute dolls' without cultural context.", "Do not use for unrelated toy posts."],
    faqs: [
      { question: "What does 🎎 mean?", answer: "Japanese Hinamatsuri dolls — Girls' Day festival and cultural tradition." },
      { question: "When is 🎎 used?", answer: "Most around March 3 and Japan culture content year-round." },
    ],
  },

  "carp-streamer": {
    batchId: BATCH_ID,
    searchTitle: "Carp Streamer Emoji (🎏) Meaning: Children's Day, Koinobori, and Japan",
    snippetAnswer:
      "🎏 Carp Streamer means koinobori — Japan Children's Day (May 5) windsocks, family celebration, and spring festival imagery.",
    detailedParagraphs: [
      "Carp Streamer (🎏) shows colorful fish banners on poles — Unicode symbol for Kodomo no Hi in Japan.",
      "Families fly 🎏 imagery in May posts celebrating children, strength, and spring traditions.",
      "Anime and Japan travel content uses 🎏 as quick visual shorthand for Japanese suburban May scenery.",
    ],
    textingMeaning: "'Children's Day 🎏', 'Koinobori season 🎏', 'May in Japan 🎏'.",
    socialMeaning: "Japan culture TikTok, travel vlogs, and festival explainers tag 🎏.",
    caution: "🎏 is specific — not generic fish or fishing emoji.",
    examples: [
      { context: "Festival", text: "Koinobori up 🎏" },
      { context: "May", text: "Golden Week vibes 🎏" },
      { context: "Family", text: "Kids' day 🎏" },
      { context: "Travel", text: "Suburban Japan 🎏" },
      { context: "Culture", text: "Carp symbolism 🎏" },
    ],
    contextBlocks: [
      { title: "Kodomo no Hi", body: "🎏 represents carp climbing waterfalls — strength wishes for children." },
      { title: "Vs 🐟", body: "🐟 is fish animal. 🎏 is festival windsock banner." },
      { title: "Seasonal spike", body: "Search volume rises each April–May in Japan-related content." },
    ],
    searchIntents: ["carp streamer emoji", "🎏 koinobori", "🎏 meaning japan", "koinobori emoji"],
    whenNotToUse: ["Avoid for fishing trips — use 🎣 or 🐟.", "Do not confuse with generic streamers/flags."],
    faqs: [
      { question: "What does 🎏 mean?", answer: "Japanese carp streamers for Children's Day — koinobori festival." },
      { question: "🎏 vs fish emoji?", answer: "Carp streamer is decorative festival banner, not a live fish." },
    ],
  },

  "wind-chime": {
    batchId: BATCH_ID,
    searchTitle: "Wind Chime Emoji (🎐) Meaning: Summer Japan, Furin, and Breeze",
    snippetAnswer:
      "🎐 Wind Chime marks Japanese furin — summer breeze, yukata season, and peaceful outdoor sound aesthetic.",
    detailedParagraphs: [
      "Wind Chime (🎐) shows a glass or metal furin — Unicode symbol for Japanese summer cooling imagery.",
      "Japan summer posts pair 🎐 with 🎋 and fireworks — nostalgic Showa-era suburban feel.",
      "Mindfulness and lo-fi aesthetic creators use 🎐 for calm, airy mood boards.",
    ],
    textingMeaning: "'Summer night 🎐', 'Breeze sounds 🎐', 'Furin season 🎐'.",
    socialMeaning: "Japan summer Instagram, anime slice-of-life, and calm study playlists tag 🎐.",
    caution: "Not a generic bell 🔔 — furin has specific summer Japan connotation.",
    examples: [
      { context: "Summer", text: "Humid but peaceful 🎐" },
      { context: "Japan", text: "Furin on the porch 🎐" },
      { context: "Aesthetic", text: "Lo-fi mood 🎐" },
      { context: "Balcony", text: "Windy evening 🎐" },
      { context: "Nostalgia", text: "Childhood summers 🎐" },
    ],
    contextBlocks: [
      { title: "Furin culture", body: "🎐 signals Japanese summer — glass chimes on humid evenings." },
      { title: "Vs 🔔", body: "🔔 is notification bell. 🎐 is decorative wind chime." },
      { title: "Calm aesthetic", body: "Wellness posts borrow 🎐 for gentle sound and breeze imagery." },
    ],
    searchIntents: ["wind chime emoji", "🎐 furin", "🎐 meaning japan", "wind chime copy paste"],
    whenNotToUse: ["Avoid 🎐 for alarm or doorbell contexts.", "Do not use as generic music note substitute."],
    faqs: [
      { question: "What does 🎐 mean?", answer: "Japanese furin wind chime — summer breeze and calm aesthetic." },
      { question: "🎐 vs bell emoji?", answer: "Wind chime is outdoor summer decor; bell is alert/notification." },
    ],
  },

  "moon-viewing-ceremony": {
    batchId: BATCH_ID,
    searchTitle: "Moon Viewing Ceremony Emoji (🎑) Meaning: Tsukimi, Autumn Moon, and Japan",
    snippetAnswer:
      "🎑 Moon Viewing Ceremony marks tsukimi — Japanese mid-autumn moon appreciation, dango, and harvest moon traditions.",
    detailedParagraphs: [
      "Moon Viewing Ceremony (🎑) shows grass, moon, and offerings — Unicode symbol for tsukimi festival.",
      "Japan autumn content spikes in September–October with 🎑, moon photos, and seasonal sweets.",
      "Poetry and aesthetic accounts use 🎑 for harvest moon mood beyond Japan when context is clear.",
    ],
    textingMeaning: "'Tsukimi tonight 🎑', 'Full moon party 🎑', 'Autumn moon 🎑'.",
    socialMeaning: "Japan festival posts, moon photography, and seasonal food content tag 🎑.",
    caution: "Distinct from 🌕 full moon alone — 🎑 includes ceremony/grass motif.",
    examples: [
      { context: "Festival", text: "Tsukimi dango 🎑" },
      { context: "Moon", text: "Harvest moon watch 🎑" },
      { context: "Autumn", text: "September vibes 🎑" },
      { context: "Culture", text: "Moon viewing explained 🎑" },
      { context: "Food", text: "Seasonal sweets 🎑" },
    ],
    contextBlocks: [
      { title: "Tsukimi", body: "🎑 represents appreciating the autumn moon — rabbits and dango lore in Japan." },
      { title: "Vs 🌕", body: "🌕 is moon only. 🎑 is moon-viewing ceremony scene." },
      { title: "Seasonal", body: "Peaks mid-autumn in Japan-related calendars and travel posts." },
    ],
    searchIntents: ["moon viewing emoji", "🎑 tsukimi", "🎑 meaning", "japanese moon festival emoji"],
    whenNotToUse: ["Avoid for unrelated astronomy without cultural context.", "Do not confuse with Mid-Autumn Festival 🥮 unless explaining parallels."],
    faqs: [
      { question: "What does 🎑 mean?", answer: "Japanese tsukimi — moon viewing ceremony and autumn tradition." },
      { question: "🎑 vs full moon?", answer: "Ceremony emoji includes festival elements; full moon is just the moon." },
    ],
  },

  "red-envelope": {
    batchId: BATCH_ID,
    searchTitle: "Red Envelope Emoji (🧧) Meaning: Lunar New Year, Hongbao, and Lucky Money",
    snippetAnswer:
      "🧧 Red Envelope means hongbao/lai see — Lunar New Year lucky money, weddings, and gift cash traditions in Chinese and East Asian culture.",
    detailedParagraphs: [
      "Red Envelope (🧧) shows a red packet for cash gifts — Unicode symbol for prosperity and celebration giving.",
      "Lunar New Year threads explode with 🧧 — family transfers, boss gifts, and digital red packets on WeChat/Alipay.",
      "Wedding and birthday posts in diaspora communities use 🧧 for traditional cash gifting etiquette.",
    ],
    textingMeaning: "'Sent 🧧', 'LNY luck 🧧', 'Digital hongbao 🧧'.",
    socialMeaning: "Lunar New Year marketing, culture explainers, and fintech posts tag 🧧.",
    caution: "Respect cultural meaning — not generic 'money gift' without context in cross-cultural settings.",
    examples: [
      { context: "LNY", text: "Happy New Year 🧧" },
      { context: "Gift", text: "Uncle sent 🧧" },
      { context: "Wedding", text: "Blessing envelope 🧧" },
      { context: "App", text: "WeChat 🧧 war" },
      { context: "Kids", text: "Lucky money day 🧧" },
    ],
    contextBlocks: [
      { title: "Lunar New Year", body: "🧧 is core LNY symbol — luck, respect, and family giving." },
      { title: "Vs 💵", body: "💵 is generic cash. 🧧 is ceremonial red packet tradition." },
      { title: "Digital era", body: "Virtual 🧧 transfers are huge in East Asian messaging apps." },
    ],
    searchIntents: ["red envelope emoji", "🧧 hongbao", "lunar new year emoji", "🧧 meaning"],
    whenNotToUse: ["Avoid mocking cultural gifting customs.", "Do not use as bribe implication toward officials."],
    faqs: [
      { question: "What does 🧧 mean?", answer: "Red envelope lucky money — Lunar New Year and celebratory gifting." },
      { question: "🧧 vs money emoji?", answer: "Red envelope is cultural gift tradition; dollar emoji is generic cash." },
    ],
  },

  "reminder-ribbon": {
    batchId: BATCH_ID,
    searchTitle: "Reminder Ribbon Emoji (🎗️) Meaning: Awareness, Causes, and Support",
    snippetAnswer:
      "🎗️ Reminder Ribbon marks awareness campaigns — charity causes, memorial support, and 'remember this' advocacy posts.",
    detailedParagraphs: [
      "Reminder Ribbon (🎗️) shows a folded awareness ribbon — Unicode's generic cause symbol (color varies by platform).",
      "Nonprofits and survivors tag 🎗️ during awareness months — pair with cause name in text since color isn't standardized in emoji.",
      "Support messages use 🎗️ for 'thinking of you' during health or grief journeys when words feel small.",
    ],
    textingMeaning: "'Breast cancer month 🎗️', 'Supporting you 🎗️', 'Awareness walk 🎗️'.",
    socialMeaning: "Charity Instagram, memorial posts, and health advocacy campaigns use 🎗️.",
    caution: "Name the cause in text — emoji alone doesn't specify which ribbon color/cause.",
    examples: [
      { context: "Awareness", text: "October 🎗️" },
      { context: "Support", text: "Standing with you 🎗️" },
      { context: "Walk", text: "Charity 5K 🎗️" },
      { context: "Memorial", text: "Never forget 🎗️" },
      { context: "Donate", text: "Link in bio 🎗️" },
    ],
    contextBlocks: [
      { title: "Cause marketing", body: "🎗️ anchors awareness month content — always spell out the cause." },
      { title: "Vs 🎀", body: "🎀 is decorative bow. 🎗️ is awareness/reminder ribbon." },
      { title: "Support tone", body: "Friends send 🎗️ to show solidarity during health battles." },
    ],
    searchIntents: ["reminder ribbon emoji", "🎗️ awareness ribbon", "🎗️ meaning", "ribbon emoji cause"],
    whenNotToUse: ["Avoid vague 🎗️ without naming the cause — can confuse.", "Do not use for fashion bow contexts."],
    faqs: [
      { question: "What does 🎗️ mean?", answer: "Awareness ribbon — charity, cause support, remembrance." },
      { question: "Which cause is 🎗️?", answer: "Generic in emoji — add text for pink, red, or other campaign colors." },
    ],
  },

  "admission-tickets": {
    batchId: BATCH_ID,
    searchTitle: "Admission Tickets Emoji (🎟️) Meaning: Events, Concerts, and Entry Passes",
    snippetAnswer:
      "🎟️ Admission Tickets means event entry — concerts, movies, theme parks, and 'got tickets' hype posts.",
    detailedParagraphs: [
      "Admission Tickets (🎟️) shows two stub tickets — Unicode symbol for paid entry to shows and venues.",
      "Fans text 🎟️ when presale hits, screenshots arrive, or scalper drama unfolds in group chats.",
      "Creators promote drops with 🎟️ — limited seats, RSVP links, and tour announcements.",
    ],
    textingMeaning: "'Got 🎟️!', 'Sold out 🎟️', 'Doors at 7 🎟️'.",
    socialMeaning: "Concert Instagram, festival hype threads, and event marketing lead with 🎟️.",
    caution: "Scalping and fake 🎟️ scams exist — verify sellers in text.",
    examples: [
      { context: "Concert", text: "Floor seats 🎟️" },
      { context: "Sold out", text: "Missed 🎟️" },
      { context: "Theme park", text: "Passes booked 🎟️" },
      { context: "Movie", text: "Premiere night 🎟️" },
      { context: "Hype", text: "Tour drops Friday 🎟️" },
    ],
    contextBlocks: [
      { title: "Concert culture", body: "🎟️ is default 'I got in' flex for live events." },
      { title: "Vs 🎫", body: "🎟️ is admission pair. 🎫 is single ticket — often interchangeable." },
      { title: "FOMO energy", body: "Missing 🎟️ posts drive resale and watch-party alternatives." },
    ],
    searchIntents: ["admission tickets emoji", "🎟️ concert tickets", "🎟️ meaning", "tickets emoji"],
    whenNotToUse: ["Avoid bragging 🎟️ when friends couldn't get seats.", "Do not promote scalpers."],
    faqs: [
      { question: "What does 🎟️ mean?", answer: "Event tickets — concerts, shows, parks, and entry passes." },
      { question: "🎟️ vs 🎫?", answer: "Both mean tickets; admission tickets shows two stubs on most platforms." },
    ],
  },

  ticket: {
    batchId: BATCH_ID,
    searchTitle: "Ticket Emoji (🎫) Meaning: Entry Pass, Lottery, and 'Your Turn'",
    snippetAnswer:
      "🎫 Ticket marks a single entry pass — raffles, queues, travel boarding, and metaphorical 'take a number' turns.",
    detailedParagraphs: [
      "Ticket (🎫) shows one perforated ticket — Unicode symbol for admission, lottery, and queue systems.",
      "Travelers use 🎫 for boarding passes and train confirmations alongside ✈️ and 🚆.",
      "Metaphorically, '🎫' means you earned access — VIP, invite-only, or winning a slot.",
    ],
    textingMeaning: "'Here's your 🎫', 'Raffle winner 🎫', 'Boarding 🎫'.",
    socialMeaning: "Giveaways, travel check-ins, and event promos use 🎫.",
    caution: "Screenshot 🎫 can expose barcodes — blur codes before posting.",
    examples: [
      { context: "Event", text: "VIP 🎫 secured" },
      { context: "Travel", text: "Boarding pass 🎫" },
      { context: "Raffle", text: "Winner 🎫" },
      { context: "Queue", text: "Number 42 🎫" },
      { context: "Invite", text: "You're on the list 🎫" },
    ],
    contextBlocks: [
      { title: "Single stub", body: "🎫 reads one admission — raffle, queue, or boarding." },
      { title: "Vs 🎟️", body: "🎟️ often shows ticket pair. 🎫 is single ticket design." },
      { title: "Access metaphor", body: "'Got a ticket' means permission to enter — literal or social." },
    ],
    searchIntents: ["ticket emoji meaning", "🎫 copy paste", "admission ticket emoji", "🎫 concert"],
    whenNotToUse: ["Do not post live barcodes publicly.", "Avoid 🎫 flex during friends' sold-out frustration."],
    faqs: [
      { question: "What does 🎫 mean?", answer: "Entry ticket, boarding pass, raffle stub, or access pass." },
      { question: "🎫 vs 🎟️?", answer: "Same general meaning — single vs double ticket art differs by platform." },
    ],
  },

  "flying-disc": {
    batchId: BATCH_ID,
    searchTitle: "Flying Disc Emoji (🥏) Meaning: Ultimate Frisbee, Disc Golf, and Park Games",
    snippetAnswer:
      "🥏 Flying Disc means frisbee sports — ultimate, disc golf, beach toss, and casual park catch sessions.",
    detailedParagraphs: [
      "Flying Disc (🥏) shows a disc mid-flight — Unicode symbol for frisbee culture and disc sports.",
      "College ultimate teams and disc golf players text 🥏 for practice, tournaments, and course reviews.",
      "Beach and dog-park content uses 🥏 for casual toss — less competitive than league ultimate.",
    ],
    textingMeaning: "'Ultimate at 6 🥏', 'Disc golf round 🥏', 'Beach toss 🥏'.",
    socialMeaning: "Disc golf TikTok, ultimate league posts, and outdoor recreation tag 🥏.",
    caution: "🥏 near faces in photos — real discs can injure; joke carefully.",
    examples: [
      { context: "Ultimate", text: "Regionals 🥏" },
      { context: "Disc golf", text: "Birdie on 7 🥏" },
      { context: "Beach", text: "Sunset toss 🥏" },
      { context: "Dog park", text: "Fetch king 🥏" },
      { context: "Practice", text: "Stack drills 🥏" },
    ],
    contextBlocks: [
      { title: "Ultimate frisbee", body: "🥏 identifies the sport community — layout, huck, spirit of the game." },
      { title: "Disc golf boom", body: "🥏 surged with disc golf popularity on social media course vlogs." },
      { title: "Vs ⚾", body: "⚾ is baseball. 🥏 is flying disc sports and casual catch." },
    ],
    searchIntents: ["frisbee emoji", "🥏 flying disc", "disc golf emoji", "🥏 ultimate frisbee"],
    whenNotToUse: ["Avoid for UFO jokes without context — use 🛸 instead.", "Do not throw at unaware people."],
    faqs: [
      { question: "What does 🥏 mean?", answer: "Frisbee, ultimate, disc golf, or casual disc toss." },
      { question: "🥏 vs ball sports?", answer: "Flying disc is specific to frisbee/disc sports culture." },
    ],
  },

  "cricket-game": {
    batchId: BATCH_ID,
    searchTitle: "Cricket Game Emoji (🏏) Meaning: Cricket, Test Matches, and Commonwealth Sports",
    snippetAnswer:
      "🏏 Cricket Game marks cricket — Test matches, IPL, Ashes, street cricket, and Commonwealth sports culture.",
    detailedParagraphs: [
      "Cricket Game (🏏) shows bat and ball — Unicode symbol for one of the world's biggest sports by viewership.",
      "Fans text 🏏 during IPL, World Cup, and The Ashes with score updates and meme reactions.",
      "Street cricket and backyard posts from South Asia, UK, and Australia lead with 🏏.",
    ],
    textingMeaning: "'Match day 🏏', 'What a six 🏏', 'Rain delay 🏏'.",
    socialMeaning: "Cricket Twitter, IPL Instagram, and pub watch-along posts tag 🏏.",
    caution: "US-centric chats may not know 🏏 — add context for international friends.",
    examples: [
      { context: "IPL", text: "Final tonight 🏏" },
      { context: "Six", text: "Out of the park 🏏" },
      { context: "Rain", text: "DLS time 🏏" },
      { context: "Street", text: "Gully cricket 🏏" },
      { context: "Pub", text: "Watch party 🏏" },
    ],
    contextBlocks: [
      { title: "Global fandom", body: "🏏 dominates South Asia, UK, Australia — massive live-thread emoji." },
      { title: "Vs 🏑", body: "🏑 is field hockey. 🏏 is cricket bat and ball." },
      { title: "Vs ⚾", body: "⚾ is baseball. 🏏 is cricket — different rules and culture." },
    ],
    searchIntents: ["cricket emoji", "🏏 meaning", "cricket bat emoji", "🏏 copy paste"],
    whenNotToUse: ["Avoid 🏏 for baseball — use ⚾.", "Do not use during match-fixing scandals insensitively."],
    faqs: [
      { question: "What does 🏏 mean?", answer: "Cricket sport — matches, fandom, and bat-and-ball culture." },
      { question: "🏏 vs baseball?", answer: "Cricket emoji is for cricket; baseball is ⚾." },
    ],
  },

  "field-hockey": {
    batchId: BATCH_ID,
    searchTitle: "Field Hockey Emoji (🏑) Meaning: Hockey on Grass, Sticks, and Tournament Play",
    snippetAnswer:
      "🏑 Field Hockey means outdoor hockey on turf or grass — Olympics, school teams, and stick-and-ball field sport.",
    detailedParagraphs: [
      "Field Hockey (🏑) depicts stick and ball on grass — Unicode symbol distinct from ice hockey 🏒.",
      "Players and alumni post 🏑 for school seasons, club nationals, and Olympic cycles.",
      "Common in Europe, India, and Argentina — less default in North American casual chat.",
    ],
    textingMeaning: "'Game at 4 🏑', 'Tournament bound 🏑', 'Olympic hockey 🏑'.",
    socialMeaning: "Team sports Instagram, school athletics, and Olympic content tag 🏑.",
    caution: "Clarify field vs ice — NA users may assume 🏒 first.",
    examples: [
      { context: "Match", text: "Semifinals 🏑" },
      { context: "Practice", text: "Early turf 🏑" },
      { context: "School", text: "Varsity 🏑" },
      { context: "Olympics", text: "Gold match 🏑" },
      { context: "Win", text: "Penalty corner goal 🏑" },
    ],
    contextBlocks: [
      { title: "Turf sport", body: "🏑 is outdoor field hockey — stick skills on grass or synthetic turf." },
      { title: "Vs 🏒", body: "🏒 is ice hockey on rink. 🏑 is field hockey." },
      { title: "Global pockets", body: "Strong followings in Europe, India, Oceania — regional fandom spikes." },
    ],
    searchIntents: ["field hockey emoji", "🏑 meaning", "hockey stick emoji grass", "🏑 copy paste"],
    whenNotToUse: ["Avoid for ice hockey — use 🏒.", "Do not confuse with lacrosse 🥍."],
    faqs: [
      { question: "What does 🏑 mean?", answer: "Field hockey — outdoor stick-and-ball sport." },
      { question: "🏑 vs 🏒?", answer: "Field hockey is on grass/turf; ice hockey is on ice." },
    ],
  },

  "ice-hockey": {
    batchId: BATCH_ID,
    searchTitle: "Ice Hockey Emoji (🏒) Meaning: NHL, Rink Culture, and Winter Sports",
    snippetAnswer:
      "🏒 Ice Hockey marks hockey on ice — NHL, pond hockey, Stanley Cup season, and cold-country sports identity.",
    detailedParagraphs: [
      "Ice Hockey (🏒) shows stick and puck — Unicode symbol for rink hockey, especially North American NHL culture.",
      "Fans live-tweet 🏒 during playoffs — overtime, fights, and goalie saves drive meme replies.",
      "Canadian and Nordic identity posts use 🏒 year-round, not only winter.",
    ],
    textingMeaning: "'Puck drop 🏒', 'OT thriller 🏒', 'Pond hockey 🏒'.",
    socialMeaning: "NHL Twitter, sports bars, and winter outdoor rink posts tag 🏒.",
    caution: "Field hockey fans may correct 🏒 vs 🏑 — pick the right sport.",
    examples: [
      { context: "NHL", text: "Playoffs 🏒" },
      { context: "Game", text: "Third period 🏒" },
      { context: "Outdoor", text: "Pond skate 🏒" },
      { context: "Bar", text: "Watch party 🏒" },
      { context: "Kids", text: "Learn to skate 🏒" },
    ],
    contextBlocks: [
      { title: "NHL culture", body: "🏒 peaks April–June during Stanley Cup runs in North America." },
      { title: "Vs 🏑", body: "🏑 is field hockey. 🏒 is ice hockey with puck." },
      { title: "National identity", body: "Canada especially treats 🏒 as cultural shorthand beyond sport." },
    ],
    searchIntents: ["ice hockey emoji", "🏒 meaning", "hockey emoji nhl", "🏒 copy paste"],
    whenNotToUse: ["Avoid for field hockey.", "Do not glorify injury fights without context."],
    faqs: [
      { question: "What does 🏒 mean?", answer: "Ice hockey — NHL, rink games, puck and stick culture." },
      { question: "🏒 vs field hockey?", answer: "Ice hockey uses puck on ice; field hockey is 🏑 on turf." },
    ],
  },

  lacrosse: {
    batchId: BATCH_ID,
    searchTitle: "Lacrosse Emoji (🥍) Meaning: Lax, Stick Skills, and East Coast Sports",
    snippetAnswer:
      "🥍 Lacrosse marks lacrosse — prep and college lax, PLL, Indigenous stick tradition, and fast field sport culture.",
    detailedParagraphs: [
      "Lacrosse (🥍) shows crosse and ball — Unicode symbol for a sport strong in US/Canada northeast and growing nationally.",
      "Players text 🥍 for tournament weekends, recruiting, and 'lax bro' culture ironically or sincerely.",
      "Indigenous history educators pair 🥍 with respectful context — sport originates from Native stick games.",
    ],
    textingMeaning: "'Tournament 🥍', 'Face-off win 🥍', 'Spring season 🥍'.",
    socialMeaning: "College lax Instagram, PLL highlights, and prep school athletics tag 🥍.",
    caution: "Acknowledge Indigenous origins when posting educational content — avoid shallow bro stereotypes.",
    examples: [
      { context: "Game", text: "OT win 🥍" },
      { context: "Tourney", text: "Bracket time 🥍" },
      { context: "Practice", text: "Wall ball 🥍" },
      { context: "College", text: "Commit day 🥍" },
      { context: "PLL", text: "Highlight reel 🥍" },
    ],
    contextBlocks: [
      { title: "Lax culture", body: "🥍 signals spring sport season — prep, college, and pro PLL fandom." },
      { title: "Indigenous roots", body: "Respectful posts note Native origins of stick-and-ball traditions." },
      { title: "Vs 🏑", body: "🏑 is field hockey different rules. 🥍 is lacrosse crosse." },
    ],
    searchIntents: ["lacrosse emoji", "🥍 meaning", "lax emoji", "🥍 copy paste"],
    whenNotToUse: ["Avoid stereotype jokes about Native culture.", "Do not use for unrelated stick sports."],
    faqs: [
      { question: "What does 🥍 mean?", answer: "Lacrosse — stick sport, tournaments, and lax culture." },
      { question: "Why 🥍 not 🏑?", answer: "Lacrosse has its own stick design and rules — separate emoji." },
    ],
  },

  "goal-net": {
    batchId: BATCH_ID,
    searchTitle: "Goal Net Emoji (🥅) Meaning: Scoring, Hockey, and Soccer Goals",
    snippetAnswer:
      "🥅 Goal Net marks scoring — hockey goals, soccer nets, 'he scores!' moments, and sports highlight clips.",
    detailedParagraphs: [
      "Goal Net (🥅) shows an empty net — Unicode symbol for the target in hockey, soccer, and lacrosse highlights.",
      "Fans reply 🥅 when a clip ends in a goal — shorthand for scoring play without naming the sport.",
      "Coaches use 🥅 metaphorically for objectives — 'hit the net' on KPIs in playful work chat.",
    ],
    textingMeaning: "'Into the 🥅!', 'Empty net 🥅', 'Score 🥅'.",
    socialMeaning: "Sports highlight reels, FIFA and NHL clips tag 🥅 on goals.",
    caution: "Sport-agnostic — pair with ⚽ or 🏒 in text if sport matters.",
    examples: [
      { context: "Goal", text: "Top shelf 🥅" },
      { context: "Soccer", text: "Stoppage time 🥅" },
      { context: "Hockey", text: "Empty netter 🥅" },
      { context: "Highlight", text: "Replay worth it 🥅" },
      { context: "Metaphor", text: "Hit the KPI 🥅" },
    ],
    contextBlocks: [
      { title: "Scoring shorthand", body: "🥅 comments under any goal video — cross-sport reaction." },
      { title: "Vs ⚽", body: "⚽ is the ball. 🥅 is the net/goal structure." },
      { title: "Empty net", body: "Hockey fans know empty-net 🥅 means late-game insurance goal context." },
    ],
    searchIntents: ["goal net emoji", "🥅 meaning", "hockey net emoji", "🥅 soccer goal"],
    whenNotToUse: ["Avoid without sport context if audience is mixed.", "Do not use for fishing nets."],
    faqs: [
      { question: "What does 🥅 mean?", answer: "Goal/scoring — hockey, soccer, lacrosse net moments." },
      { question: "🥅 for soccer?", answer: "Yes — common reaction to goal highlights across field and ice sports." },
    ],
  },

  "fishing-pole": {
    batchId: BATCH_ID,
    searchTitle: "Fishing Pole Emoji (🎣) Meaning: Fishing, Bait, and 'Fishing for Compliments'",
    snippetAnswer:
      "🎣 Fishing Pole means angling — lake trips, catch photos, and metaphorical 'fishing' for attention or info online.",
    detailedParagraphs: [
      "Fishing Pole (🎣) shows rod, line, and fish — Unicode symbol for recreational fishing and catch brags.",
      "Anglers text 🎣 with early morning plans, tackle upgrades, and release-vs-keep debates.",
      "Internet slang 'fishing for compliments' uses 🎣 when someone posts obvious bait — ironic tone.",
    ],
    textingMeaning: "'Dawn on the lake 🎣', 'Nice catch 🎣', 'Stop fishing 🎣'.",
    socialMeaning: "Fishing TikTok, bass tournaments, and fly-fishing aesthetic tag 🎣.",
    caution: "'Phishing' cybersecurity puns overlap verbally — spell 'phishing' in security contexts.",
    examples: [
      { context: "Trip", text: "Boat at 5am 🎣" },
      { context: "Catch", text: "Personal best 🎣" },
      { context: "Meme", text: "Compliment fishing 🎣" },
      { context: "Weekend", text: "No phones 🎣" },
      { context: "Kids", text: "First trout 🎣" },
    ],
    contextBlocks: [
      { title: "Angling culture", body: "🎣 anchors catch-and-release vs dinner debates in outdoor forums." },
      { title: "Online 'fishing'", body: "🎣 means baiting reactions — compliments, drama, or DMs." },
      { title: "Vs 🐟", body: "🐟 is the fish. 🎣 is the fishing activity." },
    ],
    searchIntents: ["fishing emoji", "🎣 meaning", "fishing pole emoji", "🎣 copy paste"],
    whenNotToUse: ["Avoid 🎣 for cybersecurity without clarifying 'phishing'.", "Do not glam illegal fishing practices."],
    faqs: [
      { question: "What does 🎣 mean?", answer: "Fishing trips, catches, or metaphorical 'fishing' for attention." },
      { question: "🎣 vs fish emoji?", answer: "Pole emoji is the activity; fish emoji is the animal/catch." },
    ],
  },

  "diving-mask": {
    batchId: BATCH_ID,
    searchTitle: "Diving Mask Emoji (🤿) Meaning: Snorkeling, Scuba, and Underwater Travel",
    snippetAnswer:
      "🤿 Diving Mask means snorkeling and scuba — reef trips, pool practice, and underwater adventure travel posts.",
    detailedParagraphs: [
      "Diving Mask (🤿) shows goggles and snorkel — Unicode symbol for underwater exploration and dive culture.",
      "Travelers text 🤿 with Caribbean, Maldives, and Great Barrier Reef itineraries.",
      "Certification course updates — open water, advanced — often lead with 🤿 in diver group chats.",
    ],
    textingMeaning: "'Reef day 🤿', 'Pool skills 🤿', 'Snorkel tour 🤿'.",
    socialMeaning: "Dive travel Instagram, GoPro underwater clips, and resort promos tag 🤿.",
    caution: "Never encourage unsafe diving without certification — add safety context.",
    examples: [
      { context: "Trip", text: "Two tank day 🤿" },
      { context: "Snorkel", text: "Turtle spotted 🤿" },
      { context: "Cert", text: "OW complete 🤿" },
      { context: "Pool", text: "Skills refresh 🤿" },
      { context: "Travel", text: "Coral garden 🤿" },
    ],
    contextBlocks: [
      { title: "Dive travel", body: "🤿 signals bucket-list reef trips and liveaboard plans." },
      { title: "Vs 🏊", body: "🏊 is swimming. 🤿 is snorkel/scuba gear." },
      { title: "Safety", body: "Responsible posts mention certification and buddy systems." },
    ],
    searchIntents: ["diving mask emoji", "🤿 snorkeling emoji", "🤿 scuba meaning", "🤿 copy paste"],
    whenNotToUse: ["Avoid encouraging breath-hold stunts.", "Do not use for pool party without water context."],
    faqs: [
      { question: "What does 🤿 mean?", answer: "Snorkeling, scuba diving, and underwater adventure." },
      { question: "🤿 vs swimmer?", answer: "Diving mask is snorkel/scuba; swimmer is general swimming." },
    ],
  },

  "running-shirt": {
    batchId: BATCH_ID,
    searchTitle: "Running Shirt Emoji (🎽) Meaning: Running, Races, and Track Events",
    snippetAnswer:
      "🎽 Running Shirt means running — race bibs, marathons, track meets, and cardio training posts.",
    detailedParagraphs: [
      "Running Shirt (🎽) shows a sash/bib style top — Unicode symbol for athletics and distance running.",
      "Runners text 🎽 on race morning, PR announcements, and marathon training block updates.",
      "Track and cross-country seasons use 🎽 for meet days and relay teams.",
    ],
    textingMeaning: "'Race day 🎽', 'New PR 🎽', 'Long run Sunday 🎽'.",
    socialMeaning: "Marathon Instagram, Strava screenshot culture, and track meet stories tag 🎽.",
    caution: "Injured runners may find 🎽 race flex painful — know your audience.",
    examples: [
      { context: "Marathon", text: "26.2 done 🎽" },
      { context: "Training", text: "20 miler 🎽" },
      { context: "Track", text: "Meet at 9 🎽" },
      { context: "PR", text: "Sub-4 🎽" },
      { context: "Bib", text: "Corral B 🎽" },
    ],
    contextBlocks: [
      { title: "Race culture", body: "🎽 is bib-and-safety-pin energy — organized road races." },
      { title: "Vs 👟", body: "👟 is footwear. 🎽 is runner/race kit." },
      { title: "Vs 🏃", body: "🏃 is person running. 🎽 emphasizes race/event context." },
    ],
    searchIntents: ["running shirt emoji", "🎽 running emoji", "marathon emoji", "🎽 meaning"],
    whenNotToUse: ["Avoid 🎽 brags to injured friends.", "Do not use for non-running athletics without context."],
    faqs: [
      { question: "What does 🎽 mean?", answer: "Running, races, marathons, and track athletics." },
      { question: "🎽 vs runner emoji?", answer: "Running shirt highlights race bib/event; runner shows person jogging." },
    ],
  },

  "curling-stone": {
    batchId: BATCH_ID,
    searchTitle: "Curling Stone Emoji (🥌) Meaning: Curling, Olympics, and Ice Strategy",
    snippetAnswer:
      "🥌 Curling Stone marks curling — Winter Olympics, sweepers, bonspiel culture, and niche ice sport fandom.",
    detailedParagraphs: [
      "Curling Stone (🥌) shows the granite rock on ice — Unicode symbol for curling's deliberate strategy sport.",
      "Olympic years spike 🥌 in memes — 'sweep!' becomes mainstream joke during Winter Games.",
      "Canadian clubs and bonspiel social scenes post 🥌 with beer-and-broom camaraderie.",
    ],
    textingMeaning: "'Sweep! 🥌', 'Bonspiel weekend 🥌', 'Olympic curling 🥌'.",
    socialMeaning: "Winter Olympics threads, Canadian sports humor, and club league posts tag 🥌.",
    caution: "Obscure to many countries — brief explainer helps international friends.",
    examples: [
      { context: "Olympics", text: "Gold match 🥌" },
      { context: "Club", text: "League night 🥌" },
      { context: "Meme", text: "HARD 🥌" },
      { context: "Bonspiel", text: "Social league 🥌" },
      { context: "Watch", text: "Extra end 🥌" },
    ],
    contextBlocks: [
      { title: "Olympic meme", body: "🥌 goes viral every Winter Olympics when sweep memes hit timelines." },
      { title: "Strategy sport", body: "Curling is chess on ice — 🥌 marks thoughtful slow sport fandom." },
      { title: "Vs 🏒", body: "🏒 is hockey speed. 🥌 is curling stone precision." },
    ],
    searchIntents: ["curling emoji", "🥌 meaning", "curling stone emoji", "🥌 olympics"],
    whenNotToUse: ["Avoid assuming global audience knows curling.", "Do not use for generic sliding stones."],
    faqs: [
      { question: "What does 🥌 mean?", answer: "Curling — stone, sweepers, bonspiels, and Winter Olympics." },
      { question: "Why popular in Olympics?", answer: "Meme-friendly 'sweep' moments boost 🥌 every four years." },
    ],
  },

  "yo-yo": {
    batchId: BATCH_ID,
    searchTitle: "Yo-Yo Emoji (🪀) Meaning: Toys, Skill Tricks, and 'Emotional Yo-Yo'",
    snippetAnswer:
      "🪀 Yo-yo marks yo-yo toys, trick culture, childhood nostalgia, and 'on again off again' relationship metaphors.",
    detailedParagraphs: [
      "Yo-yo (🪀) shows classic toy on string — Unicode symbol for skill toys and 90s nostalgia.",
      "Collectors and trick circuses post 🪀 with unboxing and freestyle clips.",
      "Metaphorically, 'yo-yo relationship' or 'yo-yo dieting' uses 🪀 for back-and-forth patterns.",
    ],
    textingMeaning: "'Trick learn 🪀', 'Childhood toy 🪀', 'Stop yo-yoing me 🪀'.",
    socialMeaning: "Toy TikTok, nostalgia reels, and relationship meme accounts use 🪀.",
    caution: "Relationship 🪀 jokes can sting during breakups — timing matters.",
    examples: [
      { context: "Tricks", text: "Land the bind 🪀" },
      { context: "Nostalgia", text: "Duncan days 🪀" },
      { context: "Relationship", text: "Hot and cold 🪀" },
      { context: "Gift", text: "Stocking stuffer 🪀" },
      { context: "Skill toy", text: "1A practice 🪀" },
    ],
    contextBlocks: [
      { title: "Skill toy scene", body: "🪀 connects to yo-yo freestyle community — tricks beyond walk the dog." },
      { title: "Metaphor", body: "Emotional yo-yo means inconsistent push-pull dynamics." },
      { title: "Vs 🧸", body: "🧸 is teddy comfort toy. 🪀 is active skill toy." },
    ],
    searchIntents: ["yo yo emoji", "🪀 meaning", "yoyo emoji copy paste", "🪀 toy"],
    whenNotToUse: ["Avoid 🪀 relationship jokes during fresh breakups.", "Do not use for unrelated spinning objects."],
    faqs: [
      { question: "What does 🪀 mean?", answer: "Yo-yo toy, tricks, nostalgia, or on-off relationship metaphor." },
      { question: "🪀 metaphor?", answer: "Yes — 'yo-yoing' means inconsistent back-and-forth behavior." },
    ],
  },

  "water-pistol": {
    batchId: BATCH_ID,
    searchTitle: "Water Pistol Emoji (🔫) Meaning: Water Guns, Summer Play, and Platform History",
    snippetAnswer:
      "🔫 Water Pistol means water gun play — summer fights, pool parties, and (on most platforms) toy gun redesigned from old pistol emoji.",
    detailedParagraphs: [
      "Water Pistol (🔫) now renders as green/orange water gun on major platforms — Unicode history shifted from realistic pistol to toy for safety.",
      "Parents text 🔫 for backyard battles and camp packing lists — summer activity, not violence.",
      "Older articles may still discuss 'gun emoji' — current design reads squirt gun for most users.",
    ],
    textingMeaning: "'Water fight 🔫', 'Arm the kids 🔫💦', 'Summer war 🔫'.",
    socialMeaning: "Summer pool content, camp memes, and 2016 emoji-redesign discourse reference 🔫.",
    caution: "In sensitive regions or after shootings, even toy 🔫 may upset — context critical.",
    examples: [
      { context: "Summer", text: "Backyard battle 🔫" },
      { context: "Pool", text: "Super soaker era 🔫" },
      { context: "Camp", text: "Pack swim gear 🔫" },
      { context: "Kids", text: "Birthday arsenal 🔫" },
      { context: "Nostalgia", text: "90s summers 🔫" },
    ],
    contextBlocks: [
      { title: "Design history", body: "🔫 changed from pistol to water gun on Apple/Google — know platform age." },
      { title: "Summer play", body: "Primary modern use — squirt guns and harmless water fights." },
      { title: "Sensitivity", body: "Avoid in threads about gun violence even as toy emoji." },
    ],
    searchIntents: ["water gun emoji", "🔫 meaning", "squirt gun emoji", "🔫 water pistol"],
    whenNotToUse: ["Never in threats even as joke.", "Avoid during active shooting news cycles."],
    faqs: [
      { question: "Is 🔫 a real gun emoji?", answer: "On modern phones it's usually a water pistol — toy squirt gun design." },
      { question: "Why did 🔫 change?", answer: "Platforms redesigned to reduce violent connotation — now water gun on most devices." },
    ],
  },

  "crystal-ball": {
    batchId: BATCH_ID,
    searchTitle: "Crystal Ball Emoji (🔮) Meaning: Fortune, Predictions, and Mystic Aesthetic",
    snippetAnswer:
      "🔮 Crystal Ball means fortune telling, predictions, tarot aesthetic, and 'I saw it coming' hindsight posts.",
    detailedParagraphs: [
      "Crystal Ball (🔮) shows a mystic orb — Unicode symbol for divination, horoscopes, and spooky aesthetic.",
      "Friends send 🔮 before asking 'what do you think will happen?' — playful prophecy tone.",
      "Wellness and witchtok communities use 🔮 in bios and captions — spiritual but often lighthearted.",
    ],
    textingMeaning: "'Predictions? 🔮', 'Called it 🔮', 'Tarot night 🔮'.",
    socialMeaning: "Astrology Instagram, witch aesthetic TikTok, and prediction memes tag 🔮.",
    caution: "Do not present 🔮 as medical or financial advice — entertainment framing only.",
    examples: [
      { context: "Predict", text: "Who wins? 🔮" },
      { context: "Hindsight", text: "Saw it 🔮" },
      { context: "Tarot", text: "Pull at midnight 🔮" },
      { context: "Meme", text: "No crystal ball 🔮" },
      { context: "Aesthetic", text: "Mystic mood 🔮" },
    ],
    contextBlocks: [
      { title: "Fortune tone", body: "🔮 invites guesses about future — sports, dating, or plot twists." },
      { title: "Witch aesthetic", body: "Spiritual creators use 🔮 without claiming literal magic." },
      { title: "Vs 🧙", body: "🧙 is wizard person. 🔮 is the divination tool." },
    ],
    searchIntents: ["crystal ball emoji", "🔮 meaning", "fortune emoji", "🔮 copy paste"],
    whenNotToUse: ["Avoid mocking sincere spiritual practices.", "Do not fake certainty about real-world harm."],
    faqs: [
      { question: "What does 🔮 mean?", answer: "Predictions, fortune telling, mystic vibe, or 'I predicted this'." },
      { question: "🔮 serious or joke?", answer: "Often playful — context from chat decides sincerity." },
    ],
  },

  "magic-wand": {
    batchId: BATCH_ID,
    searchTitle: "Magic Wand Emoji (🪄) Meaning: Magic, Fixes, and 'Like Magic' Solutions",
    snippetAnswer:
      "🪄 Magic Wand means magic tricks, fairy-tale fixes, photo retouch 'magic,' and 'that worked like magic' reactions.",
    detailedParagraphs: [
      "Magic Wand (🪄) shows a sparkled wand — Unicode symbol for spells, wizards, and effortless fixes.",
      "Designers joke 🪄 when one click fixes layout — Photoshop 'magic wand tool' insider humor.",
      "Kids' party and Disney aesthetic posts use 🪄 for princess and wizard themes.",
    ],
    textingMeaning: "'Fixed it 🪄', 'Abracadabra 🪄', 'Magic solution 🪄'.",
    socialMeaning: "Cosplay, toddler birthdays, and SaaS 'it just works' marketing borrow 🪄.",
    caution: "Overpromising 'magic' fixes in finance or health is misleading — keep playful.",
    examples: [
      { context: "Fix", text: "One line patch 🪄" },
      { context: "Party", text: "Wizard theme 🪄" },
      { context: "Design", text: "Wand tool saved me 🪄" },
      { context: "Kid", text: "Fairy costume 🪄" },
      { context: "Surprise", text: "Worked first try 🪄" },
    ],
    contextBlocks: [
      { title: "Dev/design joke", body: "🪄 nods to magic wand selection tools in image editors." },
      { title: "Fairy tale", body: "Princess and wizard party decor tags 🪄 on Pinterest." },
      { title: "Vs ✨", body: "✨ is sparkles. 🪄 is wand casting magic action." },
    ],
    searchIntents: ["magic wand emoji", "🪄 meaning", "wizard wand emoji", "🪄 copy paste"],
    whenNotToUse: ["Avoid claiming real supernatural results.", "Do not mock magicians' craft dismissively."],
    faqs: [
      { question: "What does 🪄 mean?", answer: "Magic, easy fixes, fairy-tale spells, or 'worked like magic'." },
      { question: "🪄 in design?", answer: "Insider nod to magic wand tools in Photoshop and similar apps." },
    ],
  },

  "slot-machine": {
    batchId: BATCH_ID,
    searchTitle: "Slot Machine Emoji (🎰) Meaning: Gambling, Luck, and Jackpot Hype",
    snippetAnswer:
      "🎰 Slot Machine means gambling luck — casinos, jackpots, risky bets, and 'taking a chance' metaphors.",
    detailedParagraphs: [
      "Slot Machine (🎰) shows three reels — Unicode symbol for casino games and random luck.",
      "Vegas trip posts lead with 🎰 — slots, lights, and responsible-or-not gambling stories.",
      "Metaphorically, '🎰 move' means high-risk decision with uncertain payoff.",
    ],
    textingMeaning: "'Vegas 🎰', 'Jackpot 🎰', 'Risky bet 🎰'.",
    socialMeaning: "Casino travel, gambling streams, and luck meme accounts tag 🎰.",
    caution: "Gambling addiction is real — avoid glam without responsible gambling notes.",
    examples: [
      { context: "Vegas", text: "Strip nights 🎰" },
      { context: "Win", text: "Mini jackpot 🎰" },
      { context: "Risk", text: "All in 🎰" },
      { context: "Meme", text: "Life gamble 🎰" },
      { context: "Trip", text: "Weekend slots 🎰" },
    ],
    contextBlocks: [
      { title: "Casino tourism", body: "🎰 anchors Vegas and Macau travel content." },
      { title: "Luck metaphor", body: "Any random outcome joke can use 🎰 — job apps, dating, crypto." },
      { title: "Responsible play", body: "Healthy posts mention limits — addiction awareness matters." },
    ],
    searchIntents: ["slot machine emoji", "🎰 meaning", "casino emoji", "🎰 copy paste"],
    whenNotToUse: ["Avoid encouraging problem gambling.", "Do not target minors with 🎰 casino content."],
    faqs: [
      { question: "What does 🎰 mean?", answer: "Slots, casino luck, jackpots, or risky chance metaphors." },
      { question: "🎰 vs dice?", answer: "Slot machine is casino reels; dice 🎲 is table/board randomness." },
    ],
  },

  "teddy-bear": {
    batchId: BATCH_ID,
    searchTitle: "Teddy Bear Emoji (🧸) Meaning: Comfort, Gifts, and Soft Wholesome Vibes",
    snippetAnswer:
      "🧸 Teddy Bear means comfort toys — gifts for kids, plush aesthetic, wholesome affection, and gentle reassurance.",
    detailedParagraphs: [
      "Teddy Bear (🧸) shows a classic stuffed bear — Unicode symbol for comfort, childhood, and soft gifts.",
      "Partners send 🧸 for get-well and long-distance comfort — sweeter than romantic ❤️ overload.",
      "Collectors and kawaii aesthetic accounts build feeds around 🧸 and plush hauls.",
    ],
    textingMeaning: "'Get well 🧸', 'Thinking of you 🧸', 'Plush haul 🧸'.",
    socialMeaning: "Gift guides, nursery decor, and wholesome TikTok tag 🧸.",
    caution: "Infantilizing adults with 🧸 can feel patronizing — know relationship tone.",
    examples: [
      { context: "Gift", text: "Sent a bear 🧸" },
      { context: "Comfort", text: "Hugs via 🧸" },
      { context: "Kids", text: "New plushie 🧸" },
      { context: "Collect", text: "Shelf update 🧸" },
      { context: "Wholesome", text: "Soft day 🧸" },
    ],
    contextBlocks: [
      { title: "Comfort gift", body: "🧸 works when words feel too heavy — illness, stress, distance." },
      { title: "Vs 🐻", body: "🐻 is live bear animal. 🧸 is stuffed toy." },
      { title: "Kawaii culture", body: "Plush collectors use 🧸 in unboxing and display posts." },
    ],
    searchIntents: ["teddy bear emoji", "🧸 meaning", "teddy emoji copy paste", "🧸 plush"],
    whenNotToUse: ["Avoid patronizing tone toward colleagues.", "Do not sexualize plush content toward minors."],
    faqs: [
      { question: "What does 🧸 mean?", answer: "Teddy bear plush — comfort, gifts, wholesome affection." },
      { question: "🧸 vs bear emoji?", answer: "Teddy is toy; bear is the animal." },
    ],
  },

  piata: {
    batchId: BATCH_ID,
    searchTitle: "Piñata Emoji (🪅) Meaning: Parties, Birthdays, and Latin Celebrations",
    snippetAnswer:
      "🪅 Piñata marks party celebrations — birthdays, Cinco de Mayo, kids' parties, and candy-filled festivity.",
    detailedParagraphs: [
      "Piñata (🪅) shows a starry hanging piñata — Unicode symbol for Mexican party tradition gone global.",
      "Party planners text 🪅 for supply runs, birthday themes, and fiesta decor mood boards.",
      "Cultural posts explain piñata history respectfully — not only sombrero-and-taco stereotype kits.",
    ],
    textingMeaning: "'Fiesta 🪅', 'Birthday setup 🪅', 'Candy chaos 🪅'.",
    socialMeaning: "Kids' party Instagram, Cinco celebrations, and craft DIY reels tag 🪅.",
    caution: "Use 🪅 with cultural respect — avoid reducing Latin culture to party props only.",
    examples: [
      { context: "Birthday", text: "Pinata time 🪅" },
      { context: "Fiesta", text: "Decor hung 🪅" },
      { context: "Kids", text: "Candy scramble 🪅" },
      { context: "Craft", text: "DIY star 🪅" },
      { context: "Party", text: "Weekend fiesta 🪅" },
    ],
    contextBlocks: [
      { title: "Party centerpiece", body: "🪅 signals candy-filled climax of many kids' parties." },
      { title: "Cultural roots", body: "Piñata tradition spans Mexico and wider Latin celebrations — explain when educating." },
      { title: "Vs 🎉", body: "🎉 is generic party popper. 🪅 is specific piñata activity." },
    ],
    searchIntents: ["pinata emoji", "🪅 meaning", "piñata emoji copy paste", "🪅 party"],
    whenNotToUse: ["Avoid stereotype-only Cinco posts.", "Do not use for violent 'beating' jokes toward people."],
    faqs: [
      { question: "What does 🪅 mean?", answer: "Piñata party — birthdays, fiestas, candy celebration." },
      { question: "🪅 cultural context?", answer: "Rooted in Mexican celebration tradition — use respectfully in party content." },
    ],
  },

  "mirror-ball": {
    batchId: BATCH_ID,
    searchTitle: "Mirror Ball Emoji (🪩) Meaning: Disco, Parties, and Dance Floor Energy",
    snippetAnswer:
      "🪩 Mirror Ball means disco and dance parties — club nights, wedding receptions, 70s aesthetic, and 'disco era' revivals.",
    detailedParagraphs: [
      "Mirror Ball (🪩) shows a spinning disco ball — Unicode symbol for dance floors and nightlife sparkle.",
      "Wedding DJs and prom committees text 🪩 when lighting and playlist planning starts.",
      "2020s disco revival pop culture brought 🪩 back into mainstream captions and album eras.",
    ],
    textingMeaning: "'Club night 🪩', 'Disco playlist 🪩', 'Reception vibes 🪩'.",
    socialMeaning: "Nightlife Instagram, wedding content, and retro aesthetic TikTok tag 🪩.",
    caution: "Strobe/light posts should warn photosensitive followers when relevant.",
    examples: [
      { context: "Club", text: "Saturday 🪩" },
      { context: "Wedding", text: "Dance floor lit 🪩" },
      { context: "Prom", text: "Glitter era 🪩" },
      { context: "Playlist", text: "Donna summer 🪩" },
      { context: "Retro", text: "70s night 🪩" },
    ],
    contextBlocks: [
      { title: "Disco revival", body: "🪩 resurged with pop disco aesthetics and wedding dance trends." },
      { title: "Vs ✨", body: "✨ is generic sparkles. 🪩 is disco ball party fixture." },
      { title: "Vs 🎉", body: "🎉 is party celebration. 🪩 is specifically dance-floor disco." },
    ],
    searchIntents: ["disco ball emoji", "🪩 mirror ball", "🪩 meaning", "disco emoji"],
    whenNotToUse: ["Avoid for quiet/low-key events.", "Warn photosensitive audiences for strobe content."],
    faqs: [
      { question: "What does 🪩 mean?", answer: "Disco ball — clubs, weddings, dance parties, retro disco vibe." },
      { question: "🪩 vs sparkles?", answer: "Mirror ball is specific disco fixture; sparkles are general shine." },
    ],
  },

  "nesting-dolls": {
    batchId: BATCH_ID,
    searchTitle: "Nesting Dolls Emoji (🪆) Meaning: Matryoshka, Russia, and Layered Metaphors",
    snippetAnswer:
      "🪆 Nesting Dolls means matryoshka — Russian folk craft, travel souvenirs, and 'layers within layers' metaphors.",
    detailedParagraphs: [
      "Nesting Dolls (🪆) shows matryoshka dolls — Unicode symbol for Russian nested wooden figures.",
      "Travelers post 🪆 from Moscow gift shops and folk art museums.",
      "Metaphorically, 🪆 means hidden layers — plot twists, nested ideas, or Russian doll memes online.",
    ],
    textingMeaning: "'Matryoshka 🪆', 'Layers inside 🪆', 'Moscow souvenir 🪆'.",
    socialMeaning: "Travel blogs, folk art aesthetics, and metaphor memes use 🪆.",
    caution: "Respect cultural origin — not generic 'cute dolls' without Russia/folk context when educating.",
    examples: [
      { context: "Travel", text: "Arbat find 🪆" },
      { context: "Gift", text: "Hand painted 🪆" },
      { context: "Metaphor", text: "Plot had layers 🪆" },
      { context: "Decor", text: "Shelf lineup 🪆" },
      { context: "Culture", text: "Folk art 🪆" },
    ],
    contextBlocks: [
      { title: "Matryoshka", body: "🪆 represents nested dolls — each figure opens to reveal smaller ones." },
      { title: "Vs 🎎", body: "🎎 is Japanese hina dolls. 🪆 is Russian matryoshka." },
      { title: "Layer meme", body: "Internet uses 🪆 for stories with reveals inside reveals." },
    ],
    searchIntents: ["nesting dolls emoji", "🪆 matryoshka", "🪆 meaning", "russian dolls emoji"],
    whenNotToUse: ["Avoid political reduction of Russia to souvenir only during crises.", "Do not confuse with Japanese dolls 🎎."],
    faqs: [
      { question: "What does 🪆 mean?", answer: "Matryoshka nesting dolls — Russian folk art and layer metaphors." },
      { question: "🪆 metaphor?", answer: "Often means something with hidden inner layers — ideas or plot twists." },
    ],
  },

  "chess-pawn": {
    batchId: BATCH_ID,
    searchTitle: "Chess Pawn Emoji (♟️) Meaning: Chess, Strategy, and 'Pawn' Metaphors",
    snippetAnswer:
      "♟️ Chess Pawn marks chess culture — strategy games, pawn sacrifices, and metaphorical 'being a pawn' in power dynamics.",
    detailedParagraphs: [
      "Chess Pawn (♟️) shows the smallest chess piece — Unicode symbol for chess and strategic thinking.",
      "Chess boom from streaming brought ♟️ into Twitch clips, puzzle posts, and school club updates.",
      "'Pawn in their game' uses ♟️ for manipulation metaphors — political or workplace discourse.",
    ],
    textingMeaning: "'Chess club ♟️', 'Sac the pawn ♟️', 'Not your pawn ♟️'.",
    socialMeaning: "Chess.com memes, grandmaster tournament threads, and strategy TikTok tag ♟️.",
    caution: "Political pawn metaphors can inflame — clarify intent in heated threads.",
    examples: [
      { context: "Game", text: "Endgame study ♟️" },
      { context: "Stream", text: "Puzzle rush ♟️" },
      { context: "Metaphor", text: "Won't be your ♟️" },
      { context: "Club", text: "Tournament Saturday ♟️" },
      { context: "Sacrifice", text: "Tempo gain ♟️" },
    ],
    contextBlocks: [
      { title: "Chess revival", body: "♟️ rides post-2020 chess streaming popularity — not just grandmasters." },
      { title: "Pawn sacrifice", body: "Chess tactic term — giving pawn for position; literal and metaphorical." },
      { title: "Vs 🎲", body: "🎲 is luck games. ♟️ is skill strategy." },
    ],
    searchIntents: ["chess pawn emoji", "♟️ meaning", "chess emoji", "♟️ copy paste"],
    whenNotToUse: ["Avoid dehumanizing people as pawns in harassment.", "Do not use for checkers — different game."],
    faqs: [
      { question: "What does ♟️ mean?", answer: "Chess pawn — strategy, sacrifices, or powerlessness metaphor." },
      { question: "♟️ political?", answer: "Can be — 'pawn' means used by powerful players; context decides." },
    ],
  },

  "mahjong-red-dragon": {
    batchId: BATCH_ID,
    searchTitle: "Mahjong Red Dragon Emoji (🀄) Meaning: Mahjong, Tiles, and East Asian Games",
    snippetAnswer:
      "🀄 Mahjong Red Dragon marks mahjong tile — game nights, Chinese mahjong culture, and Red Dragon tile specifically.",
    detailedParagraphs: [
      "Mahjong Red Dragon (🀄) shows the red dragon tile — Unicode symbol for mahjong, widely recognized in East Asia.",
      "Family gatherings during Lunar New Year often include mahjong — 🀄 in photo captions and invite texts.",
      "Western mahjong social clubs grew post-2020 — 🀄 tags learning nights and tile set unboxings.",
    ],
    textingMeaning: "'Mahjong night 🀄', 'Red dragon 🀄', 'Tile math 🀄'.",
    socialMeaning: "Game night posts, LNY family content, and mahjong tutorial TikTok use 🀄.",
    caution: "Distinct tile meaning in rules — not generic 'Chinese symbol' without game context.",
    examples: [
      { context: "Game night", text: "Table ready 🀄" },
      { context: "LNY", text: "Family tiles 🀄" },
      { context: "Win", text: "Mahjong! 🀄" },
      { context: "Learn", text: "Beginner club 🀄" },
      { context: "Set", text: "New tiles 🀄" },
    ],
    contextBlocks: [
      { title: "Red dragon tile", body: "🀄 is one specific honor tile — mahjong players recognize instantly." },
      { title: "Social gaming", body: "Mahjong is loud family/table culture — 🀄 invites signal game night." },
      { title: "Vs 🎴", body: "🎴 is Japanese flower cards. 🀄 is mahjong red dragon." },
    ],
    searchIntents: ["mahjong emoji", "🀄 red dragon", "🀄 meaning", "mahjong tile emoji"],
    whenNotToUse: ["Avoid as generic 'Asian' symbol without mahjong context.", "Do not confuse with Japanese hanafuda 🎴."],
    faqs: [
      { question: "What does 🀄 mean?", answer: "Mahjong red dragon tile — game nights and East Asian table culture." },
      { question: "🀄 only for experts?", answer: "No — popular symbol for mahjong broadly, even beginner posts." },
    ],
  },

  "flower-playing-cards": {
    batchId: BATCH_ID,
    searchTitle: "Flower Playing Cards Emoji (🎴) Meaning: Hanafuda, Japanese Cards, and Games",
    snippetAnswer:
      "🎴 Flower Playing Cards means hanafuda — Japanese flower card decks, traditional games, and Nintendo historical roots.",
    detailedParagraphs: [
      "Flower Playing Cards (🎴) depicts hanafuda-style art — Unicode symbol for Japanese playing cards with floral seasons.",
      "Culture posts link 🎴 to Nintendo's origin as a hanafuda company — gaming history niche.",
      "Koi-Koi and other hanafuda games see 🎴 in tutorial and game-night invites.",
    ],
    textingMeaning: "'Hanafuda night 🎴', 'Koi-koi 🎴', 'Season cards 🎴'.",
    socialMeaning: "Japan game history, traditional craft posts, and anime game references tag 🎴.",
    caution: "Not mahjong 🀄 — different deck and rules; don't interchange blindly.",
    examples: [
      { context: "Game", text: "Koi-koi rematch 🎴" },
      { context: "History", text: "Nintendo roots 🎴" },
      { context: "Craft", text: "Vintage deck 🎴" },
      { context: "Learn", text: "Rules finally clicked 🎴" },
      { context: "Anime", text: "That arc vibes 🎴" },
    ],
    contextBlocks: [
      { title: "Hanafuda", body: "🎴 represents seasonal flower cards — twelve suits in traditional decks." },
      { title: "Nintendo lore", body: "Gaming historians cite hanafuda when telling Nintendo origin story." },
      { title: "Vs 🀄", body: "🀄 is mahjong tile. 🎴 is hanafuda flower cards." },
    ],
    searchIntents: ["flower playing cards emoji", "🎴 hanafuda", "🎴 meaning", "japanese cards emoji"],
    whenNotToUse: ["Avoid confusing with poker/western 🃏.", "Do not use as generic playing card without hanafuda context."],
    faqs: [
      { question: "What does 🎴 mean?", answer: "Hanafuda — Japanese flower playing cards and traditional games." },
      { question: "🎴 vs mahjong?", answer: "Different games — flower cards vs mahjong tile set." },
    ],
  },

  "framed-picture": {
    batchId: BATCH_ID,
    searchTitle: "Framed Picture Emoji (🖼️) Meaning: Art, Gallery, and Home Decor",
    snippetAnswer:
      "🖼️ Framed Picture means art on the wall — gallery visits, home decor, museum posts, and 'picture this' metaphors.",
    detailedParagraphs: [
      "Framed Picture (🖼️) shows art in a frame — Unicode symbol for visual art display and interior design.",
      "Interior design reels use 🖼️ for gallery walls, thrift flips, and museum day trips.",
      "Metaphorically, 'picture this 🖼️' sets scene in storytelling — less common but recognizable.",
    ],
    textingMeaning: "'Gallery day 🖼️', 'New wall layout 🖼️', 'Museum date 🖼️'.",
    socialMeaning: "Home decor Pinterest, art exhibition openings, and NFT-as-art discourse sometimes use 🖼️.",
    caution: "NFT scams abused art framing — 🖼️ doesn't imply investment value.",
    examples: [
      { context: "Museum", text: "New exhibit 🖼️" },
      { context: "Decor", text: "Gallery wall done 🖼️" },
      { context: "Thrift", text: "Frame score 🖼️" },
      { context: "Opening", text: "Artist reception 🖼️" },
      { context: "Gift", text: "Print arrived 🖼️" },
    ],
    contextBlocks: [
      { title: "Gallery wall trend", body: "🖼️ tags coordinated frame layouts in home makeover content." },
      { title: "Vs 🎨", body: "🎨 is making art. 🖼️ is displaying framed art." },
      { title: "Museum culture", body: "Travel posts use 🖼️ for MoMA, Louvre, and local gallery hops." },
    ],
    searchIntents: ["framed picture emoji", "🖼️ art emoji", "🖼️ meaning", "picture frame emoji"],
    whenNotToUse: ["Avoid implying forged art is valuable.", "Do not use for photo camera 📷 contexts alone."],
    faqs: [
      { question: "What does 🖼️ mean?", answer: "Framed artwork — decor, museums, gallery walls." },
      { question: "🖼️ vs artist palette?", answer: "Frame is display; palette is creating art." },
    ],
  },

  "sewing-needle": {
    batchId: BATCH_ID,
    searchTitle: "Sewing Needle Emoji (🪡) Meaning: Sewing, Crafts, and DIY Fixes",
    snippetAnswer:
      "🪡 Sewing Needle means sewing and mending — DIY fashion, embroidery, cosplay builds, and quick clothing fixes.",
    detailedParagraphs: [
      "Sewing Needle (🪡) shows needle and thread — Unicode symbol for textile crafts and repair.",
      "Cosplayers and thrift flippers text 🪡 for last-minute convention fixes and hem jobs.",
      "Sustainable fashion posts use 🪡 for mending over buying new — visible repair aesthetic.",
    ],
    textingMeaning: "'Hem fix 🪡', 'Embroidery WIP 🪡', 'Cosplay panic sew 🪡'.",
    socialMeaning: "Sewing TikTok, slow fashion, and craft fair posts tag 🪡.",
    caution: "Needle injuries happen — joke carefully about 'stabbing' fabric vs people.",
    examples: [
      { context: "Fix", text: "Button saved 🪡" },
      { context: "Cosplay", text: "Night before sew 🪡" },
      { context: "Embroidery", text: "WIP hoop 🪡" },
      { context: "Mend", text: "Visible repair 🪡" },
      { context: "Craft", text: "Market prep 🪡" },
    ],
    contextBlocks: [
      { title: "Slow fashion", body: "🪡 symbolizes mend-and-wear versus fast fashion discard." },
      { title: "Cosplay crunch", body: "Convention eve 🪡 posts are universal maker experience." },
      { title: "Vs 🧵", body: "🧵 is spool of thread. 🪡 is needle actively sewing." },
    ],
    searchIntents: ["sewing needle emoji", "🪡 meaning", "sewing emoji", "🪡 copy paste"],
    whenNotToUse: ["Avoid threatening needle imagery.", "Do not use for medical syringes — use 💉."],
    faqs: [
      { question: "What does 🪡 mean?", answer: "Sewing, mending, embroidery, and DIY textile crafts." },
      { question: "🪡 vs thread emoji?", answer: "Needle is the tool sewing; thread spool is material." },
    ],
  },

  knot: {
    batchId: BATCH_ID,
    searchTitle: "Knot Emoji (🪢) Meaning: Tying, Climbing, and 'Tied Up' Metaphors",
    snippetAnswer:
      "🪢 Knot marks rope knots — climbing, sailing, scouts, macramé, and metaphorical being 'tied up' or bound.",
    detailedParagraphs: [
      "Knot (🪢) shows a tied rope — Unicode symbol for knot-tying skills across outdoor and craft contexts.",
      "Climbers and sailors post 🪢 when practicing bowlines and figure-eights — safety-critical skills.",
      "Metaphorically, '🪢 in knots' means anxious stomach or complicated situation — idiomatic stretch.",
    ],
    textingMeaning: "'Practice knots 🪢', 'Macramé 🪢', 'Stomach in knots 🪢'.",
    socialMeaning: "Climbing gym posts, sailing life, and macramé DIY tag 🪢.",
    caution: "Bondage or restraint jokes with 🪢 need consent and audience awareness.",
    examples: [
      { context: "Climb", text: "Belay certified 🪢" },
      { context: "Sail", text: "Dock lines 🪢" },
      { context: "Craft", text: "Wall hanging 🪢" },
      { context: "Scouts", text: "Badge test 🪢" },
      { context: "Stress", text: "Nerves 🪢" },
    ],
    contextBlocks: [
      { title: "Outdoor skills", body: "🪢 represents knot literacy — climbing, boating, camping safety." },
      { title: "Macramé craze", body: "Home decor knot art revived 🪢 in Etsy and TikTok tutorials." },
      { title: "Idiom", body: "'Stomach in knots' borrows 🪢 for anxiety — not literal rope." },
    ],
    searchIntents: ["knot emoji", "🪢 meaning", "rope knot emoji", "🪢 copy paste"],
    whenNotToUse: ["Avoid non-consensual restraint jokes.", "Do not use for marriage 'tying the knot' alone — 💒 clearer."],
    faqs: [
      { question: "What does 🪢 mean?", answer: "Rope knots — climbing, sailing, crafts, or anxiety idiom." },
      { question: "🪢 for wedding?", answer: "Sometimes 'tie the knot' wordplay — 💒 is clearer for weddings." },
    ],
  },
};
