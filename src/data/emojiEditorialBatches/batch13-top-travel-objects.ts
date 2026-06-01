import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "13-top-travel-objects";

/** Batch 13 P0 — highest-search travel & objects pages (see batch13-priority.ts). */
export const batch13TopTravelObjects: Record<string, EmojiBatchEnrichment> = {
  "bullet-train": {
    batchId: BATCH_ID,
    searchTitle: "Bullet Train Emoji (🚅) Meaning: Shinkansen, High-Speed Rail, and Japan Travel",
    snippetAnswer:
      "🚅 Bullet Train marks high-speed rail — especially Japan's Shinkansen, fast European lines, and 'zooming to the next city' travel updates.",
    detailedParagraphs: [
      "Bullet Train (🚅) shows a streamlined nose car — Unicode's symbol for high-speed passenger rail, distinct from the general 🚆 train emoji.",
      "Japan travelers text 🚅 with JR Pass plans, station meetups, and 'just boarded' updates. The emoji is shorthand for Shinkansen culture even when the photo shows any fast train.",
      "Rail fans and commute venters use 🚅 for punctuality brags or delay frustration — 'Shinkansen waits for no one' energy vs stuck on a local line.",
      "Compared to 🚄 (high-speed train alternate design), vendors render both similarly — pick either for high-speed rail; 🚅 is more common in Japan-focused content.",
    ],
    textingMeaning: "'On the Shinkansen 🚅', 'Tokyo to Osaka in 2 hours 🚅', 'Bullet train booked 🚅'.",
    socialMeaning: "Travel vlogs, Japan itinerary reels, and Eurail montages tag 🚅 in captions and comment threads.",
    caution: "During rail accidents or disasters in the news, flashy 🚅 vacation posts may feel tone-deaf — read the room.",
    examples: [
      { context: "Japan trip", text: "First Shinkansen ride 🚅" },
      { context: "Booking", text: "Reserved seats confirmed 🚅" },
      { context: "Speed", text: "Osaka in 2.5 hours 🚅" },
      { context: "Meetup", text: "Meet at Shin-Osaka 🚅" },
      { context: "Flex", text: "Living that rail life 🚅" },
    ],
    contextBlocks: [
      { title: "Shinkansen culture", body: "🚅 signals Japan high-speed rail specifically — punctual, smooth, tourist bucket-list energy." },
      { title: "Vs 🚆", body: "🚆 is general commuter rail. 🚅 is fast intercity / bullet train." },
      { title: "Travel planning", body: "Group chats planning JR routes drop 🚅 when comparing passes vs flights." },
    ],
    searchIntents: ["bullet train emoji meaning", "🚅 shinkansen emoji", "bullet train emoji copy paste", "🚅 japan travel"],
    whenNotToUse: ["Avoid 🚅 when you mean a slow scenic steam train — use 🚂 instead.", "Do not mock transit disasters with 🚅 memes."],
    faqs: [
      { question: "What does 🚅 mean in texting?", answer: "Usually high-speed or bullet train travel — especially Japan's Shinkansen." },
      { question: "🚅 vs 🚄?", answer: "Both represent high-speed rail; platforms style them slightly differently. Either works for fast trains." },
    ],
  },

  "airplane-departure": {
    batchId: BATCH_ID,
    searchTitle: "Airplane Departure Emoji (🛫) Meaning: Takeoff, Flying Out, and Trip Starts",
    snippetAnswer:
      "🛫 Airplane Departure means takeoff — leaving on a flight, starting a trip, or 'wheels up' updates from the airport.",
    detailedParagraphs: [
      "Airplane Departure (🛫) shows a plane lifting off — Unicode pairs it with 🛬 arrival for full flight lifecycle messaging.",
      "Travelers send 🛫 when boarding finishes, when the plane pushes back, or when announcing vacation mode in group chats.",
      "Remote workers use 🛫 ironically for 'logging off and disappearing' — flight metaphor for unplugging, not always literal travel.",
      "Pair 🛫 with destination names in text; alone it only signals departure, not where you're going.",
    ],
    textingMeaning: "'Wheels up 🛫', 'Flying out tonight 🛫', 'Vacation starts now 🛫'.",
    socialMeaning: "Airport selfies, trip countdown stories, and 'see you in a week' posts lead with 🛫.",
    caution: "After aviation tragedies in headlines, celebratory 🛫 posts may need sensitivity — timing matters.",
    examples: [
      { context: "Takeoff", text: "Just took off 🛫" },
      { context: "Trip start", text: "Miami bound 🛫" },
      { context: "Work trip", text: "Conference flight 🛫" },
      { context: "Vacation", text: "Out of office starts 🛫" },
      { context: "Group chat", text: "Land safe — we fly 🛫 in an hour" },
    ],
    contextBlocks: [
      { title: "Airport updates", body: "🛫 is the standard 'I'm airborne' ping — faster than typing a full status." },
      { title: "Vs 🛬", body: "🛫 = leaving. 🛬 = landing. Many trips use both in sequence." },
      { title: "Vs ✈️", body: "✈️ is generic plane. 🛫 specifically shows takeoff angle." },
    ],
    searchIntents: ["airplane departure emoji", "🛫 meaning", "takeoff emoji", "🛫 copy paste"],
    whenNotToUse: ["Avoid 🛫 for fear-of-flying jokes toward anxious friends without consent.", "Do not use as generic travel if you only mean 'thinking about flights' — ✈️ may fit better."],
    faqs: [
      { question: "What does 🛫 mean?", answer: "Plane taking off — starting a flight or trip." },
      { question: "When do people send 🛫?", answer: "Right after departure — boarding done, wheels up, or vacation mode activated." },
    ],
  },

  "airplane-arrival": {
    batchId: BATCH_ID,
    searchTitle: "Airplane Arrival Emoji (🛬) Meaning: Landing, Just Landed, and Trip End",
    snippetAnswer:
      "🛬 Airplane Arrival means landing — you've arrived, the flight ended, or someone is waiting at the terminal.",
    detailedParagraphs: [
      "Airplane Arrival (🛬) depicts a plane on descent — Unicode's landing counterpart to 🛫 departure.",
      "Texters ping 🛬 to family waiting at baggage claim, to coworkers when a business trip wraps, or to announce 'I'm back' after vacation.",
      "Travel creators close trip vlogs with 🛬 — narrative bookend after opening with 🛫.",
      "Delayed landing jokes stack 🛬 with 😅 or 😩 — 'circled for an hour then 🛬'.",
    ],
    textingMeaning: "'Just landed 🛬', 'Touchdown in NYC 🛬', 'Home safe 🛬'.",
    socialMeaning: "Return-from-trip posts, jet-lag memes, and 'back to reality' captions use 🛬.",
    caution: "If someone had a scary flight, joking 🛬 may minimize their experience — match their tone.",
    examples: [
      { context: "Landed", text: "On the ground 🛬" },
      { context: "Pickup", text: "Terminal 4 🛬 in 10" },
      { context: "Home", text: "Back in London 🛬" },
      { context: "Trip end", text: "Vacation over 🛬" },
      { context: "Delay", text: "Finally 🛬 after 3 holds" },
    ],
    contextBlocks: [
      { title: "Pickup coordination", body: "🛬 tells rideshare and family exactly when to leave for the airport." },
      { title: "Trip arc", body: "🛫 opens travel stories; 🛬 closes them — paired storytelling on Instagram." },
      { title: "Vs ✈️", body: "✈️ is neutral flight. 🛬 specifically means arrival/landing." },
    ],
    searchIntents: ["airplane arrival emoji", "🛬 meaning", "landing emoji", "🛬 copy paste"],
    whenNotToUse: ["Avoid 🛬 if the person is still mid-flight — use 🛫 or ✈️ instead.", "Do not spam 🛬 in threads about aviation incidents."],
    faqs: [
      { question: "What does 🛬 mean in texting?", answer: "The plane landed — you've arrived or the flight segment ended." },
      { question: "🛫 and 🛬 together?", answer: "Common trip update pair: departed 🛫, arrived 🛬." },
    ],
  },

  "national-park": {
    batchId: BATCH_ID,
    searchTitle: "National Park Emoji (🏞️) Meaning: Hiking, Scenic Views, and Outdoor Trips",
    snippetAnswer:
      "🏞️ National Park marks protected nature — US park road trips, hiking weekends, scenic overlooks, and outdoor adventure content.",
    detailedParagraphs: [
      "National Park (🏞️) shows a valley vista with trees and water — Unicode's landscape for preserved wilderness and scenic tourism.",
      "Hikers and campers text 🏞️ with trail names, permit wins, and 'which park this summer' polls. It reads more specific than ⛰️ mountain alone.",
      "Travel influencers use 🏞️ in captions for Yellowstone, Banff, Patagonia, and any 'nature is huge' montage.",
      "Environmental posts borrow 🏞️ for conservation messaging — protect our 🏞️ — beyond vacation bragging.",
    ],
    textingMeaning: "'Weekend at Yosemite 🏞️', 'Park pass secured 🏞️', 'Sunrise hike 🏞️'.",
    socialMeaning: "Outdoor TikTok, camping gear ads, and #OptOutside campaigns tag 🏞️.",
    caution: "During wildfire or flood crises in a named park, cheerful 🏞️ tourism posts can feel insensitive locally.",
    examples: [
      { context: "Trip plan", text: "Zion in October 🏞️" },
      { context: "Hike", text: "Trailhead at 6am 🏞️" },
      { context: "Camping", text: "Site booked 🏞️" },
      { context: "Photo", text: "This view though 🏞️" },
      { context: "Bucket list", text: "All 63 parks someday 🏞️" },
    ],
    contextBlocks: [
      { title: "US park culture", body: "🏞️ strongly ties to NPS road trips — annual pass flex and ranger meme energy." },
      { title: "Vs ⛰️", body: "⛰️ is a peak. 🏞️ is broader scenic park landscape." },
      { title: "Vs 🏕️", body: "🏕️ is camping setup. 🏞️ is the destination/wilderness setting." },
    ],
    searchIntents: ["national park emoji", "🏞️ meaning", "park emoji hiking", "🏞️ copy paste"],
    whenNotToUse: ["Avoid 🏞️ for urban city breaks with no nature angle.", "Do not use during active park closures or disasters without context."],
    faqs: [
      { question: "What does 🏞️ mean?", answer: "National park or scenic protected nature — hiking, camping, and landscape travel." },
      { question: "🏞️ vs mountain emoji?", answer: "Mountain is a peak; national park is a wider valley/park vista." },
    ],
  },

  "hot-springs": {
    batchId: BATCH_ID,
    searchTitle: "Hot Springs Emoji (♨️) Meaning: Onsen, Spa, Steam, and Relaxation",
    snippetAnswer:
      "♨️ Hot Springs means steam baths, Japanese onsen, spa days, and hot-tub relaxation — warmth and soak culture, not literal fire.",
    detailedParagraphs: [
      "Hot Springs (♨️) shows rising steam over water — Unicode borrowed from Japanese onsen signage; it tags bathing and thermal spa culture.",
      "Japan travelers post ♨️ with ryokan stays, tattoo-policy jokes, and post-hike soak plans. Domestic users mean hot tub or spa weekend.",
      "Wellness creators use ♨️ for self-care threads — bath bombs, saunas, and 'recover after leg day' content.",
      "Do not confuse ♨️ with 🔥 — steam and soak, not 'this is lit' hype (unless the pun is obvious).",
    ],
    textingMeaning: "'Onsen tonight ♨️', 'Spa day ♨️', 'Hot tub after skiing ♨️'.",
    socialMeaning: "Japan travel reels, wellness Instagram, and ski-trip recovery posts tag ♨️.",
    caution: "♨️ in work Slack about a colleague can read unprofessional — keep spa plans in personal chats.",
    examples: [
      { context: "Japan", text: "Ryokan onsen ♨️" },
      { context: "Spa", text: "Massage then steam ♨️" },
      { context: "Ski trip", text: "Après soak ♨️" },
      { context: "Self-care", text: "Bath and chill ♨️" },
      { context: "Travel", text: "Hakone day ♨️" },
    ],
    contextBlocks: [
      { title: "Onsen etiquette", body: "Japan content uses ♨️ for public bath culture — wash before soak, quiet relaxation norms." },
      { title: "Wellness shorthand", body: "♨️ packs 'steam + relax' faster than typing spa paragraphs." },
      { title: "Vs 🧖", body: "🧖 is person in steam room. ♨️ is the hot spring / steam symbol itself." },
    ],
    searchIntents: ["hot springs emoji", "♨️ onsen meaning", "hot springs emoji japan", "♨️ copy paste"],
    whenNotToUse: ["Avoid ♨️ for literal boiling danger — be explicit about safety.", "Do not confuse with fire emoji 🔥 for hype posts."],
    faqs: [
      { question: "What does ♨️ mean?", answer: "Hot springs, onsen, spa steam, or relaxing soak — context narrows it." },
      { question: "Why is ♨️ popular in Japan posts?", answer: "It matches onsen signage and ryokan culture — instant recognition for travelers." },
    ],
  },

  ferry: {
    batchId: BATCH_ID,
    searchTitle: "Ferry Emoji (⛴️) Meaning: Island Hops, Commute, and Water Transit",
    snippetAnswer:
      "⛴️ Ferry marks boat transit — island ferries, river crossings, cruise-adjacent day trips, and 'on the water' commute updates.",
    detailedParagraphs: [
      "Ferry (⛴️) depicts a passenger vessel — Unicode's symbol for scheduled water transport between ports, not luxury yacht vibes.",
      "Island travelers text ⛴️ with timetable screenshots, seasickness jokes, and 'meet at the dock' plans — Greek islands, Seattle, Hong Kong, etc.",
      "Commuters in ferry-dependent cities use ⛴️ daily for delay vents — same energy as 🚆 but on water.",
      "Compared to 🚢 cruise ship, ⛴️ feels shorter hop and functional transit rather than vacation liner.",
    ],
    textingMeaning: "'On the ferry ⛴️', 'Next boat in 20 ⛴️', 'Island hopping ⛴️'.",
    socialMeaning: "Coastal travel vlogs, PNW lifestyle content, and Mediterranean summer posts tag ⛴️.",
    caution: "During ferry accidents or storms in the news, delay humor may need to pause — check local context.",
    examples: [
      { context: "Commute", text: "Ferry delayed again ⛴️" },
      { context: "Island trip", text: "Santorini bound ⛴️" },
      { context: "Meetup", text: "Upper deck ⛴️" },
      { context: "Schedule", text: "Last boat 9pm ⛴️" },
      { context: "Travel", text: "Mainland to island ⛴️" },
    ],
    contextBlocks: [
      { title: "Island logistics", body: "⛴️ is essential emoji for ferry-dependent destinations — timetables rule the trip." },
      { title: "Vs 🚢", body: "🚢 is big cruise ship. ⛴️ is commuter/passenger ferry hop." },
      { title: "Vs ⛵", body: "⛵ is sailboat leisure. ⛴️ is scheduled transit vessel." },
    ],
    searchIntents: ["ferry emoji meaning", "⛴️ copy paste", "ferry emoji travel", "⛴️ commute"],
    whenNotToUse: ["Avoid ⛴️ for private yacht trips — ⛵ or 🛥️ may fit better.", "Do not use during maritime emergencies as joke fodder."],
    faqs: [
      { question: "What does ⛴️ mean?", answer: "Passenger ferry travel — island hops, river crossings, or water commute." },
      { question: "⛴️ vs cruise ship?", answer: "Ferry is practical transit between ports; cruise ship is vacation liner scale." },
    ],
  },

  wedding: {
    batchId: BATCH_ID,
    searchTitle: "Wedding Emoji (💒) Meaning: Marriage, Ceremony, and Celebration",
    snippetAnswer:
      "💒 Wedding marks marriage ceremonies — invites, engagement announcements, anniversary posts, and 'save the date' energy.",
    detailedParagraphs: [
      "Wedding (💒) shows a chapel with heart — Unicode's event symbol for weddings and formal union celebrations.",
      "Couples text 💒 with venue bookings, registry links, and countdown messages. Friends use it for bachelor(ette) planning threads.",
      "Social posts combine 💒 with 📸, 💍, and 👰🤵 depending on platform — 💒 anchors the ceremony itself.",
      "Metaphorically, fans joke 'they shipped it 💒' when fictional couples canonize — fandom wedding metaphor, not literal.",
    ],
    textingMeaning: "'Save the date 💒', 'Venue booked 💒', 'Can't wait 💒'.",
    socialMeaning: "Wedding Instagram, Pinterest boards, and TikTok planning content lead with 💒.",
    caution: "If someone is going through divorce or wedding trauma, unsolicited 💒 may sting — know your audience.",
    examples: [
      { context: "Invite", text: "June 14 💒" },
      { context: "Engagement", text: "She said yes — planning 💒" },
      { context: "Anniversary", text: "10 years since 💒" },
      { context: "Planning", text: "Florist meeting 💒" },
      { context: "Congrats", text: "Beautiful ceremony 💒" },
    ],
    contextBlocks: [
      { title: "Event planning", body: "Group chats for weddings spam 💒 with vendor PDFs and budget spreadsheets." },
      { title: "Vs 💍", body: "💍 is ring/proposal. 💒 is ceremony/event." },
      { title: "Vs 👰", body: "👰 is bride persona. 💒 is the venue/ceremony symbol." },
    ],
    searchIntents: ["wedding emoji meaning", "💒 copy paste", "church wedding emoji", "💒 save the date"],
    whenNotToUse: ["Avoid 💒 when mocking someone's relationship status.", "Do not use in serious breakup conversations."],
    faqs: [
      { question: "What does 💒 mean?", answer: "Wedding ceremony or marriage celebration — invites, planning, and congrats." },
      { question: "Is 💒 religious?", answer: "It looks like a chapel but is used for secular weddings too — context defines tone." },
    ],
  },

  "shinto-shrine": {
    batchId: BATCH_ID,
    searchTitle: "Shinto Shrine Emoji (⛩️) Meaning: Japan Travel, Torii Gates, and Culture",
    snippetAnswer:
      "⛩️ Shinto Shrine marks torii gates and Shinto sites — Japan travel, cultural respect, anime pilgrimage spots, and spiritual aesthetics.",
    detailedParagraphs: [
      "Shinto Shrine (⛩️) depicts the red torii gate — Unicode's symbol for Shinto shrines, especially associated with Japan.",
      "Travelers post ⛩️ with Kyoto, Fushimi Inari, and New Year hatsumode content. It signals cultural tourism, not generic 'church'.",
      "Anime and gaming fans use ⛩️ for Japan-coded aesthetics — settings, fan art, and JRPG vibes — with varying depth of cultural knowledge.",
      "Use respectfully: ⛩️ for sacred sites deserves more than backdrop-only treatment in captions about respectful visits.",
    ],
    textingMeaning: "'Kyoto day ⛩️', 'Shrine morning ⛩️', 'Japan trip highlight ⛩️'.",
    socialMeaning: "Japan travel blogs, cultural education posts, and aesthetic reels tag ⛩️.",
    caution: "Do not reduce ⛩️ to pure 'exotic backdrop' without acknowledging living religious practice.",
    examples: [
      { context: "Travel", text: "Fushimi Inari hike ⛩️" },
      { context: "Culture", text: "New Year shrine visit ⛩️" },
      { context: "Photo", text: "Torii tunnel ⛩️" },
      { context: "Itinerary", text: "Nara day trip ⛩️" },
      { context: "Aesthetic", text: "Japan mood ⛩️" },
    ],
    contextBlocks: [
      { title: "Torii symbolism", body: "⛩️ represents passage into sacred space — common in Japan travel storytelling." },
      { title: "Vs 💒", body: "💒 is Western wedding chapel. ⛩️ is Shinto shrine gate." },
      { title: "Travel respect", body: "Shrines have etiquette — bow, wash, quiet tone. Pair ⛩️ posts with respectful behavior." },
    ],
    searchIntents: ["shinto shrine emoji", "⛩️ torii meaning", "japan shrine emoji", "⛩️ copy paste"],
    whenNotToUse: ["Avoid ⛩️ as generic 'Asian temple' for non-Shinto sites — be accurate.", "Do not use disrespectfully in memes about sacred places."],
    faqs: [
      { question: "What does ⛩️ mean?", answer: "Shinto shrine / torii gate — strongly tied to Japan travel and culture." },
      { question: "Is ⛩️ only for religion?", answer: "Travel and culture posts use it broadly, but the symbol represents real Shinto sites." },
    ],
  },

  "dollar-banknote": {
    batchId: BATCH_ID,
    searchTitle: "Dollar Banknote Emoji (💵) Meaning: Money, Payday, and US Dollars",
    snippetAnswer:
      "💵 Dollar Banknote means US dollar money — payday, costs, tips, side hustle income, and 'how much?' chat shorthand.",
    detailedParagraphs: [
      "Dollar Banknote (💵) shows a green bill — Unicode's US-dollar symbol, distinct from 💰 money bag or 🤑 money-mouth face.",
      "Friends text 💵 when splitting bills, discussing rent, or hyping freelance payments. 'Invoice paid 💵' closes the loop.",
      "Side-hustle and finance TikTok use 💵 in captions about earning, budgeting, and US-centric money culture.",
      "Pair with amounts in text — 💵 alone does not specify how much or which currency for international readers.",
    ],
    textingMeaning: "'Got paid 💵', 'That'll be 💵', 'Send me 💵 for pizza'.",
    socialMeaning: "Payday memes, hustle culture posts, and tipping discourse tag 💵.",
    caution: "Bragging 💵 at someone struggling financially can feel cruel — read relationship context.",
    examples: [
      { context: "Payday", text: "Direct deposit hit 💵" },
      { context: "Split bill", text: "Your half 💵" },
      { context: "Cost", text: "Tickets were 💵" },
      { context: "Hustle", text: "Client paid 💵" },
      { context: "Tip", text: "Don't forget tip 💵" },
    ],
    contextBlocks: [
      { title: "US default", body: "💵 reads as USD to most global users — specify currency if not dollars." },
      { title: "Vs 💰", body: "💰 is generic money pile. 💵 is paper bill / cash payment." },
      { title: "Vs 🤑", body: "🤑 is greedy/excited face. 💵 is literal money reference." },
    ],
    searchIntents: ["dollar emoji meaning", "💵 money emoji", "dollar banknote emoji", "💵 copy paste"],
    whenNotToUse: ["Avoid 💵 in sensitive charity or debt conversations without empathy.", "Do not assume 💵 means euros — use 💶 for EU context."],
    faqs: [
      { question: "What does 💵 mean in texting?", answer: "Money — usually US dollars, payment, cost, or payday." },
      { question: "💵 vs money bag?", answer: "Dollar bill is specific cash; money bag is generic wealth." },
    ],
  },

  "euro-banknote": {
    batchId: BATCH_ID,
    searchTitle: "Euro Banknote Emoji (💶) Meaning: EU Money, Travel, and Payments",
    snippetAnswer:
      "💶 Euro Banknote means euro currency — Europe travel budgets, EU prices, tipping abroad, and euro-zone money talk.",
    detailedParagraphs: [
      "Euro Banknote (💶) depicts blue-tinted euro bills — Unicode's symbol for EUR, common in Schengen trip planning chats.",
      "Backpackers compare 💶 budgets for hostels, gelato, and rail passes. 'How many 💶 for two nights?' is standard group chat math.",
      "Freelancers billing EU clients drop 💶 with invoice screenshots — currency clarity for international pay.",
      "Do not use 💶 for UK pounds — 💷 exists for that; wrong currency emoji confuses travel advice threads.",
    ],
    textingMeaning: "'Need 💶 for trip', 'Paid in 💶', 'ATM gave 💶'.",
    socialMeaning: "Eurotrip content, Erasmus student posts, and EU finance threads tag 💶.",
    caution: "Exchange-rate jokes can feel insensitive during economic stress — tone matters.",
    examples: [
      { context: "Travel budget", text: "200 💶 for the week" },
      { context: "Payment", text: "Invoice in 💶" },
      { context: "ATM", text: "Withdrew 💶" },
      { context: "Price", text: "Dinner was 45 💶" },
      { context: "Split", text: "Send 💶 on Revolut" },
    ],
    contextBlocks: [
      { title: "Eurozone travel", body: "💶 instantly signals Europe trip money talk — hostel splits to café tabs." },
      { title: "Vs 💵", body: "💵 is US dollar. 💶 is euro." },
      { title: "Vs 💷", body: "💷 is British pound. Pick the emoji matching the currency." },
    ],
    searchIntents: ["euro emoji meaning", "💶 money emoji", "euro banknote emoji", "💶 copy paste"],
    whenNotToUse: ["Avoid 💶 for non-euro EU-adjacent countries that use other currencies.", "Do not confuse with generic 💰 when currency specificity matters."],
    faqs: [
      { question: "What does 💶 mean?", answer: "Euro money — prices, payments, and travel budgets in EUR." },
      { question: "When use 💶 vs 💵?", answer: "Use 💶 for euros; 💵 for US dollars." },
    ],
  },

  briefcase: {
    batchId: BATCH_ID,
    searchTitle: "Briefcase Emoji (💼) Meaning: Work, Business, and Professional Life",
    snippetAnswer:
      "💼 Briefcase means work and business — job updates, meetings, corporate travel, and 'back to the grind' professional tone.",
    detailedParagraphs: [
      "Briefcase (💼) shows a leather work bag — Unicode's office/profession symbol, broader than literal briefcase carriers.",
      "LinkedIn culture texts 💼 for new jobs, promotions, and conference trips. 'Monday 💼' memes mark return from vacation.",
      "Founders post 💼 with pitch decks and investor meeting vibes — startup professional shorthand.",
      "In dating apps, 💼 in a bio signals career focus — can attract or repel depending on reader values.",
    ],
    textingMeaning: "'Big meeting 💼', 'New job 💼', 'Work trip 💼'.",
    socialMeaning: "Career milestones, hustle posts, and business-travel flat lays tag 💼.",
    caution: "💼 during someone's unemployment stress can feel oblivious — know when to skip work flex.",
    examples: [
      { context: "New job", text: "First day 💼" },
      { context: "Meeting", text: "Boardroom at 9 💼" },
      { context: "Travel", text: "Client visit NYC 💼" },
      { context: "Monday", text: "Back to 💼" },
      { context: "Promotion", text: "Title update 💼" },
    ],
    contextBlocks: [
      { title: "Corporate shorthand", body: "💼 packs 'professional context' without typing job titles." },
      { title: "Vs 👜", body: "👜 is handbag/personal. 💼 is work/professional bag." },
      { title: "Work-life tone", body: "Overusing 💼 can signal workaholic vibes — balance with rest emojis when needed." },
    ],
    searchIntents: ["briefcase emoji meaning", "💼 work emoji", "business emoji", "💼 copy paste"],
    whenNotToUse: ["Avoid 💼 when consoling someone who lost a job.", "Do not use in casual friend hangs where work talk feels heavy."],
    faqs: [
      { question: "What does 💼 mean?", answer: "Work, business, job, or professional responsibilities." },
      { question: "💼 in dating bios?", answer: "Often signals career ambition — interpret with rest of profile, not emoji alone." },
    ],
  },

  calendar: {
    batchId: BATCH_ID,
    searchTitle: "Calendar Emoji (📅) Meaning: Dates, Scheduling, and Planning",
    snippetAnswer:
      "📅 Calendar means dates and scheduling — meetings, deadlines, events, reminders, and 'mark your calendar' announcements.",
    detailedParagraphs: [
      "Calendar (📅) shows a tear-off day calendar — Unicode's planning symbol for specific dates and appointments.",
      "Teams text 📅 with 'slot Tuesday?' and shared Google Calendar links. Event planners spam 📅 in wedding and party threads.",
      "Creators announce launches with 📅 — drop date, tour dates, album 📅 — hype with concrete timing.",
      "Vs 🗓️ spiral calendar: vendors differ; both mean scheduling — pick whichever your keyboard shows first.",
    ],
    textingMeaning: "'Free on the 12th 📅?', 'Deadline 📅 Friday', 'Save the date 📅'.",
    socialMeaning: "Event promos, product launches, and planner aesthetic posts use 📅.",
    caution: "📅 without timezone confuses international groups — add time zone in text.",
    examples: [
      { context: "Meeting", text: "Thursday 3pm 📅" },
      { context: "Deadline", text: "Due 📅 Monday" },
      { context: "Event", text: "Launch 📅 May 15" },
      { context: "Reminder", text: "Dentist 📅 9am" },
      { context: "Plan", text: "Beach trip 📅?" },
    ],
    contextBlocks: [
      { title: "Scheduling friction", body: "📅 opens the 'when works?' negotiation — universal across work and social planning." },
      { title: "Vs ⏰", body: "⏰ is time alarm. 📅 is date/day focus." },
      { title: "Vs 🗓️", body: "Both are calendars; meaning is the same — platform design differs." },
    ],
    searchIntents: ["calendar emoji meaning", "📅 schedule emoji", "calendar emoji copy paste", "📅 date emoji"],
    whenNotToUse: ["Avoid 📅 alone without the actual date in text.", "Do not use to pressure instant replies — scheduling takes negotiation."],
    faqs: [
      { question: "What does 📅 mean?", answer: "Dates, scheduling, deadlines, or 'save the date' announcements." },
      { question: "📅 vs clock emoji?", answer: "Calendar = which day; clock = what time." },
    ],
  },

  "graduation-cap": {
    batchId: BATCH_ID,
    searchTitle: "Graduation Cap Emoji (🎓) Meaning: Graduation, School, and Achievement",
    snippetAnswer:
      "🎓 Graduation Cap marks graduation, diplomas, academic milestones, and 'finally done with school' celebration.",
    detailedParagraphs: [
      "Graduation Cap (🎓) shows a mortarboard — Unicode's education completion symbol, peaking every May–June in the Northern Hemisphere.",
      "Graduates flood group chats with 🎓 and family photos. Parents reply with proud 🎓 stacks and tear emoji.",
      "Metaphorically, finishing a certification, bootcamp, or online course gets 🎓 — 'SQL bootcamp done 🎓'.",
      "Seasonal spike means 🎓 in December may mean Southern Hemisphere grad or mid-year programs — context helps.",
    ],
    textingMeaning: "'I graduated 🎓', 'Ceremony tomorrow 🎓', 'Class of 2026 🎓'.",
    socialMeaning: "Graduation Instagram, cap-throw reels, and alumni posts lead with 🎓.",
    caution: "If someone dropped out or failed, unsolicited 🎓 congrats hurt — confirm before celebrating.",
    examples: [
      { context: "Grad day", text: "We did it 🎓" },
      { context: "Congrats", text: "So proud of you 🎓" },
      { context: "Degree", text: "Masters done 🎓" },
      { context: "Ceremony", text: "Procession at 2 🎓" },
      { context: "Course", text: "Cert passed 🎓" },
    ],
    contextBlocks: [
      { title: "Seasonal spikes", body: "🎓 dominates late spring grad season — searches and texts surge globally." },
      { title: "Vs 📚", body: "📚 is studying. 🎓 is completion/graduation." },
      { title: "Beyond university", body: "Bootcamp and trade school grads use 🎓 for any credential milestone." },
    ],
    searchIntents: ["graduation cap emoji", "🎓 meaning", "graduation emoji copy paste", "🎓 congrats"],
    whenNotToUse: ["Avoid 🎓 when someone didn't graduate.", "Do not mock debt with 🎓 in bad taste toward grads."],
    faqs: [
      { question: "What does 🎓 mean?", answer: "Graduation, diploma, or academic achievement celebration." },
      { question: "Can 🎓 mean any certificate?", answer: "Yes — many use it metaphorically for finishing courses or programs." },
    ],
  },

  lipstick: {
    batchId: BATCH_ID,
    searchTitle: "Lipstick Emoji (💄) Meaning: Makeup, Beauty, and Getting Ready",
    snippetAnswer:
      "💄 Lipstick means makeup and beauty — GRWM routines, date-night prep, glam compliments, and cosmetics shopping.",
    detailedParagraphs: [
      "Lipstick (💄) shows a red tube — Unicode's beauty/makeup symbol, central to get-ready-with-me culture.",
      "Beauty creators text 💄 with shade names, haul unboxings, and 'which lip for tonight?' polls.",
      "Compliments pair 💄 with 🔥 — 'look at that 💄' — makeup skill or overall glam, context decides.",
      "Metaphorically, 💄 means polish before an event — presentation prep, not only literal lipstick.",
    ],
    textingMeaning: "'GRWM 💄', 'New shade 💄', 'Date night glam 💄'.",
    socialMeaning: "Beauty TikTok, Sephora runs, and red-carpet commentary tag 💄.",
    caution: "Commenting 💄 on someone's bare-face selfie can read as 'you need makeup' — compliment carefully.",
    examples: [
      { context: "GRWM", text: "Lips last step 💄" },
      { context: "Haul", text: "Sephora damage 💄" },
      { context: "Compliment", text: "That color 🔥💄" },
      { context: "Event", text: "Gala glam 💄" },
      { context: "Tutorial", text: "Liner then 💄" },
    ],
    contextBlocks: [
      { title: "GRWM culture", body: "💄 anchors makeup segments in get-ready videos — shorthand for beauty beat." },
      { title: "Vs 💋", body: "💋 is kiss mark/lips. 💄 is lipstick product/glam routine." },
      { title: "Vs 👄", body: "👄 is mouth/lips body part. 💄 is cosmetics." },
    ],
    searchIntents: ["lipstick emoji meaning", "💄 makeup emoji", "lipstick emoji copy paste", "💄 GRWM"],
    whenNotToUse: ["Avoid implying someone must wear makeup.", "Do not use 💄 to mock men's grooming choices."],
    faqs: [
      { question: "What does 💄 mean?", answer: "Makeup, lipstick, beauty routines, or getting glam." },
      { question: "💄 vs kiss mark?", answer: "Lipstick is product/glam; kiss mark is affection or lip print." },
    ],
  },

  bikini: {
    batchId: BATCH_ID,
    searchTitle: "Bikini Emoji (👙) Meaning: Beach, Swimwear, and Summer Vibes",
    snippetAnswer:
      "👙 Bikini means swimwear and beach season — pool parties, vacation packing, summer fashion, and hot-weather posts.",
    detailedParagraphs: [
      "Bikini (👙) shows two-piece swimwear — Unicode's beach/summer symbol, common in travel and fashion content.",
      "Friend groups text 👙 with 'packing for Bali 👙☀️' and pool party invites. It signals swim plans, not always literal outfit.",
      "Fitness and body-confidence posts use 👙 carefully — summer goals or vacation reveal, tone varies by creator.",
      "Can read sexualized in wrong context — pairing with respectful captions keeps beach/fashion intent clear.",
    ],
    textingMeaning: "'Beach week 👙', 'Pool party 👙', 'Swimsuit shopping 👙'.",
    socialMeaning: "Summer Instagram, resort travel, and swimwear brand ads tag 👙.",
    caution: "Unsolicited 👙 toward strangers feels creepy. Keep it to consensual friend or public fashion context.",
    examples: [
      { context: "Vacation", text: "Packing 👙 for Cancun" },
      { context: "Pool", text: "Saturday pool 👙" },
      { context: "Shopping", text: "New swim 👙" },
      { context: "Summer", text: "Heat wave 👙☀️" },
      { context: "Travel", text: "Resort ready 👙" },
    ],
    contextBlocks: [
      { title: "Beach travel", body: "👙 pairs with ✈️ and 🌴 in vacation planning threads." },
      { title: "Vs 🩱", body: "🩱 is one-piece swimsuit. 👙 is bikini two-piece." },
      { title: "Tone awareness", body: "Context separates fashion/travel from inappropriate DMs — words matter." },
    ],
    searchIntents: ["bikini emoji meaning", "👙 beach emoji", "swimsuit emoji", "👙 copy paste"],
    whenNotToUse: ["Avoid 👙 in unsolicited flirty DMs.", "Do not body-shame with 👙 in group chats."],
    faqs: [
      { question: "What does 👙 mean?", answer: "Bikini, swimwear, beach, pool, or summer vacation vibes." },
      { question: "👙 vs one-piece emoji?", answer: "Bikini is two-piece; one-piece swimsuit is a different emoji." },
    ],
  },
};
