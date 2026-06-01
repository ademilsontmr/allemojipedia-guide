import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "13-top-travel-objects";

/** Batch 13 P0 + P1 + P2 — full priority travel & objects queue (batch13-priority.ts). */
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

  skateboard: {
    batchId: BATCH_ID,
    searchTitle: "Skateboard Emoji (🛹) Meaning: Skating, Street Culture, and Youth Sports",
    snippetAnswer:
      "🛹 Skateboard marks skate culture — tricks, park sessions, street skating, and youth sports energy in texts and social posts.",
    detailedParagraphs: [
      "Skateboard (🛹) shows a deck with wheels — Unicode's symbol for skateboarding as sport and subculture.",
      "Skaters text 🛹 with spot meetups, new board day, and bail videos. Brands tag 🛹 in skate clips and shoe drops.",
      "Metaphorically, 'keep pushing 🛹' means persistence — grind culture beyond literal skating.",
    ],
    textingMeaning: "'At the park 🛹', 'New deck 🛹', 'Learning kickflip 🛹'.",
    socialMeaning: "Skate TikTok, GoPro fails, and streetwear collabs lead with 🛹.",
    caution: "Do not mock injuries with 🛹 if someone got hurt skating.",
    examples: [
      { context: "Session", text: "Plaza at 6 🛹" },
      { context: "Gear", text: "Fresh setup 🛹" },
      { context: "Progress", text: "Landed it 🛹" },
      { context: "Invite", text: "Mini ramp? 🛹" },
      { context: "Culture", text: "Skate or die 🛹" },
    ],
    contextBlocks: [
      { title: "Spot culture", body: "🛹 signals meet-at-the-skatepark plans faster than typing addresses." },
      { title: "Vs 🛼", body: "🛼 is roller skate. 🛹 is skateboard." },
      { title: "Streetwear", body: "Fashion posts borrow 🛹 for urban youth aesthetic even off the board." },
    ],
    searchIntents: ["skateboard emoji meaning", "🛹 copy paste", "skate emoji", "🛹 skateboard"],
    whenNotToUse: ["Avoid 🛹 when you mean scooter — use 🛴.", "Do not glorify unsafe skating spots."],
    faqs: [
      { question: "What does 🛹 mean?", answer: "Skateboarding — sessions, culture, gear, or persistence metaphors." },
      { question: "🛹 vs kick scooter?", answer: "Skateboard is deck and wheels; kick scooter has a handle." },
    ],
  },

  "delivery-truck": {
    batchId: BATCH_ID,
    searchTitle: "Delivery Truck Emoji (🚚) Meaning: Shipping, Packages, and Amazon Orders",
    snippetAnswer:
      "🚚 Delivery Truck means packages on the way — online orders, moving day, courier updates, and 'out for delivery' tracking energy.",
    detailedParagraphs: [
      "Delivery Truck (🚚) depicts a box truck — Unicode's shipping and logistics symbol for goods in transit.",
      "Online shoppers spam 🚚 when tracking hits 'out for delivery.' Roommates coordinate furniture moves with 🚚 rental jokes.",
      "Small business owners post 🚚 when batch orders ship — customer reassurance in DMs and Instagram stories.",
    ],
    textingMeaning: "'Package coming 🚚', 'Moving Saturday 🚚', 'Order shipped 🚚'.",
    socialMeaning: "E-commerce hauls, unboxing hype, and indie shop shipping updates tag 🚚.",
    caution: "During supply-chain crises or lost-package stress, bragging 🚚 hauls may irritate.",
    examples: [
      { context: "Tracking", text: "Out for delivery 🚚" },
      { context: "Move", text: "Rent the 🚚 at 8" },
      { context: "Shop", text: "Your order left 🚚" },
      { context: "Haul", text: "Amazon week 🚚" },
      { context: "Business", text: "Batch 200 shipped 🚚" },
    ],
    contextBlocks: [
      { title: "E-commerce culture", body: "🚚 is the universal 'it's on the way' emoji for online shopping threads." },
      { title: "Vs 🚛", body: "🚛 is articulated lorry/semi. 🚚 is delivery box truck." },
      { title: "Moving day", body: "Friends planning moves use 🚚 for rental truck coordination." },
    ],
    searchIntents: ["delivery truck emoji", "🚚 package emoji", "shipping emoji meaning", "🚚 copy paste"],
    whenNotToUse: ["Avoid 🚚 jokes when someone's package was stolen or lost.", "Do not confuse with garbage truck contexts."],
    faqs: [
      { question: "What does 🚚 mean in texting?", answer: "Delivery, shipping, packages en route, or moving trucks." },
      { question: "🚚 vs delivery emoji?", answer: "This is the standard box-truck symbol for parcel delivery." },
    ],
  },

  construction: {
    batchId: BATCH_ID,
    searchTitle: "Construction Emoji (🚧) Meaning: Road Work, Delays, and Detours",
    snippetAnswer:
      "🚧 Construction marks road work — commute delays, detours, work zones, and 'under construction' project updates.",
    detailedParagraphs: [
      "Construction (🚧) shows barricades and stripes — Unicode's warning for active work sites and blocked routes.",
      "Commuters vent with 🚧 when GPS reroutes through cones. Project managers text 🚧 for site status in group chats.",
      "Websites and products use 🚧 metaphorically — 'feature 🚧' means not finished yet.",
    ],
    textingMeaning: "'Road closed 🚧', 'Detour adds 20 min 🚧', 'Site starts Monday 🚧'.",
    socialMeaning: "Infrastructure memes, city complaint threads, and beta product teasers use 🚧.",
    caution: "Real accidents in work zones make careless 🚧 jokes inappropriate.",
    examples: [
      { context: "Commute", text: "Highway 🚧 again" },
      { context: "Delay", text: "GPS says 🚧 hell" },
      { context: "Project", text: "Launch still 🚧" },
      { context: "Warning", text: "Slow zone 🚧" },
      { context: "Renovation", text: "Kitchen 🚧 for weeks" },
    ],
    contextBlocks: [
      { title: "Commute venting", body: "🚧 spikes during rush hour when lane closures stack." },
      { title: "Metaphorical WIP", body: "Tech teams use 🚧 in READMEs for unfinished features." },
      { title: "Vs ⚠️", body: "⚠️ is general warning. 🚧 is specific construction/barrier." },
    ],
    searchIntents: ["construction emoji meaning", "🚧 road work emoji", "🚧 copy paste", "under construction emoji"],
    whenNotToUse: ["Avoid 🚧 humor during worker injuries or fatalities.", "Do not use for finished projects without context."],
    faqs: [
      { question: "What does 🚧 mean?", answer: "Road construction, detours, delays, or work-in-progress metaphor." },
      { question: "🚧 in apps?", answer: "Often means beta or unfinished — borrowed from physical road signs." },
    ],
  },

  "horizontal-traffic-light": {
    batchId: BATCH_ID,
    searchTitle: "Horizontal Traffic Light Emoji (🚥) Meaning: Driving, Stops, and Commute",
    snippetAnswer:
      "🚥 Horizontal Traffic Light marks driving and traffic control — red-light waits, commute stops, and urban driving life.",
    detailedParagraphs: [
      "Horizontal Traffic Light (🚥) shows signals side-by-side — Unicode pairs it with vertical 🚦 for traffic themes.",
      "Drivers text 🚥 about sitting at lights, late arrivals, and 'every light is red' frustration.",
      "Metaphorically, 🚥 means pause or go/no-go decisions — 'still on red 🚥' for pending approvals.",
    ],
    textingMeaning: "'Stuck at 🚥', 'Red light city 🚥', 'Green finally 🚥'.",
    socialMeaning: "Commute rants, driving vlogs, and city-life posts reference 🚥.",
    caution: "Do not text 🚥 while actually driving — safety first.",
    examples: [
      { context: "Late", text: "Every 🚥 against me" },
      { context: "Commute", text: "20 min of 🚥" },
      { context: "Driving", text: "Finally green 🚥" },
      { context: "City", text: "Urban 🚥 life" },
      { context: "Metaphor", text: "Project still red 🚥" },
    ],
    contextBlocks: [
      { title: "Stop-and-go", body: "🚥 captures red-light stacking during rush hour." },
      { title: "Vs 🚦", body: "🚦 is vertical lights. 🚥 is horizontal — same meaning, different design." },
      { title: "Go/no-go", body: "Teams borrow 🚥 for approval gates — waiting on green." },
    ],
    searchIntents: ["traffic light emoji", "🚥 meaning", "horizontal traffic light", "🚥 copy paste"],
    whenNotToUse: ["Avoid while driving.", "Do not use after traffic tragedies as pure joke fodder."],
    faqs: [
      { question: "What does 🚥 mean?", answer: "Traffic lights, driving stops, or wait/go metaphors." },
      { question: "🚥 vs 🚦?", answer: "Same concept — horizontal vs vertical signal design." },
    ],
  },

  station: {
    batchId: BATCH_ID,
    searchTitle: "Station Emoji (🚉) Meaning: Train Station, Transit Hub, and Meetups",
    snippetAnswer:
      "🚉 Station marks rail and transit hubs — meet at the station, platform changes, and intermodal travel planning.",
    detailedParagraphs: [
      "Station (🚉) depicts a station building — Unicode's hub symbol complementing 🚆 train and 🚈 light rail.",
      "Travelers text 🚉 with platform numbers and 'which exit?' coordination. Commuters use it for daily hub transfers.",
      "Japan and Europe content pairs 🚉 with 🚅 — station culture is half the rail trip narrative.",
    ],
    textingMeaning: "'Meet at 🚉 north exit', 'Transfer at 🚉', 'Next stop 🚉'.",
    socialMeaning: "Rail travel blogs and urbanism posts tag 🚉 for hub architecture.",
    caution: "During station incidents or attacks in news, tourism 🚉 posts need sensitivity.",
    examples: [
      { context: "Meetup", text: "Main hall 🚉" },
      { context: "Transfer", text: "Change at 🚉" },
      { context: "Travel", text: "Kyoto 🚉 first" },
      { context: "Commute", text: "Crowded 🚉 morning" },
      { context: "Platform", text: "Track 7 🚉" },
    ],
    contextBlocks: [
      { title: "Meetup anchor", body: "🚉 gives a clear rendezvous point for group rail trips." },
      { title: "Vs 🚆", body: "🚆 is the train car. 🚉 is the station building/hub." },
      { title: "Intermodal", body: "Stations link bus, metro, and regional rail — 🚉 covers the whole hub." },
    ],
    searchIntents: ["station emoji meaning", "🚉 train station", "🚉 copy paste", "rail station emoji"],
    whenNotToUse: ["Avoid confusing with gas ⛽ or bus 🚏 stops without context."],
    faqs: [
      { question: "What does 🚉 mean?", answer: "Train or transit station — meetups, transfers, and hub travel." },
      { question: "🚉 vs train emoji?", answer: "Station is the building/hub; train is the vehicle." },
    ],
  },

  "light-rail": {
    batchId: BATCH_ID,
    searchTitle: "Light Rail Emoji (🚈) Meaning: Tram, Metro, and Urban Transit",
    snippetAnswer:
      "🚈 Light Rail means tram, streetcar, and urban rail — city commutes, downtown loops, and metro-adjacent travel.",
    detailedParagraphs: [
      "Light Rail (🚈) shows a smaller urban rail car — Unicode's symbol for trams and light metro lines.",
      "City dwellers text 🚈 for daily commutes on Portland, Melbourne, or European tram networks.",
      "Travelers use 🚈 when exploring cities by rail — cheaper and scenic vs taxi hops.",
    ],
    textingMeaning: "'Take the 🚈 downtown', '🚈 every 10 min', 'Tram line 🚈'.",
    socialMeaning: "Urbanism Twitter, car-free lifestyle content, and city guides tag 🚈.",
    caution: "Service outages frustrate commuters — match tone if friends are stranded.",
    examples: [
      { context: "Commute", text: "🚈 delayed again" },
      { context: "Tourism", text: "Tram tour 🚈" },
      { context: "Meet", text: "Central 🚈 stop" },
      { context: "Car-free", text: "Sold the car — 🚈 life" },
      { context: "Schedule", text: "Last 🚈 11pm" },
    ],
    contextBlocks: [
      { title: "Urban mobility", body: "🚈 signals walkable-city transit vs suburban car culture." },
      { title: "Vs 🚆", body: "🚆 is general train. 🚈 is lighter urban/street rail." },
      { title: "Vs 🚊", body: "🚊 is tram car alternate design — similar use cases." },
    ],
    searchIntents: ["light rail emoji", "🚈 tram emoji", "🚈 meaning", "🚈 copy paste"],
    whenNotToUse: ["Avoid 🚈 for long-distance intercity rail — 🚆 or 🚅 may fit better."],
    faqs: [
      { question: "What does 🚈 mean?", answer: "Light rail, tram, or urban rail transit." },
      { question: "🚈 vs metro?", answer: "Often interchangeable in casual chat for city rail systems." },
    ],
  },

  foggy: {
    batchId: BATCH_ID,
    searchTitle: "Foggy Emoji (🌁) Meaning: Fog, Low Visibility, and Moody Weather",
    snippetAnswer:
      "🌁 Foggy means fog and low visibility — bridge-in-fog aesthetics, dangerous driving conditions, and moody city weather.",
    detailedParagraphs: [
      "Foggy (🌁) shows city silhouettes in mist — Unicode's fog symbol for reduced visibility and atmospheric mood.",
      "Drivers warn 🌁 in group chats during morning commute fog. Photographers love 🌁 for Golden Gate and skyline shots.",
      "Metaphorically, 🌁 means confusion or unclear plans — 'everything feels 🌁 today'.",
    ],
    textingMeaning: "'Dense fog 🌁 drive slow', 'Can't see the bridge 🌁', 'Moody morning 🌁'.",
    socialMeaning: "Aesthetic fog photography, noir city posts, and weather updates tag 🌁.",
    caution: "During fog-related pileups or flight cancellations, casual 🌁 aesthetics may feel off.",
    examples: [
      { context: "Driving", text: "Fog advisory 🌁" },
      { context: "Photo", text: "Bridge shots 🌁" },
      { context: "Flight", text: "Delayed by 🌁" },
      { context: "Mood", text: "Brain is 🌁" },
      { context: "Weather", text: "Zero visibility 🌁" },
    ],
    contextBlocks: [
      { title: "Travel safety", body: "🌁 in commute chats warns friends to slow down — not just aesthetics." },
      { title: "Photography", body: "Fog posts dominate travel Instagram in SF, London, and harbor cities." },
      { title: "Vs 🌫️", body: "🌫️ is fog cloud alone. 🌁 adds city/bridge in fog scene." },
    ],
    searchIntents: ["foggy emoji meaning", "🌁 fog emoji", "🌁 bridge fog", "🌁 copy paste"],
    whenNotToUse: ["Avoid 🌁 glam during active weather emergencies.", "Do not use for clear sunny trips without irony."],
    faqs: [
      { question: "What does 🌁 mean?", answer: "Fog, low visibility, moody weather, or mental 'fog' metaphor." },
      { question: "🌁 vs fog cloud?", answer: "Foggy often includes city/bridge scene; fog is just the mist." },
    ],
  },

  cyclone: {
    batchId: BATCH_ID,
    searchTitle: "Cyclone Emoji (🌀) Meaning: Hurricane, Storm, and Spiral Energy",
    snippetAnswer:
      "🌀 Cyclone marks hurricanes, typhoons, tropical storms, and chaotic spiral energy — weather news and 'everything spinning' metaphors.",
    detailedParagraphs: [
      "Cyclone (🌀) shows a spiral — Unicode's symbol for tropical cyclones and dizzy chaos.",
      "During hurricane season, 🌀 spikes in tracking threads and prep lists. News audiences recognize 🌀 instantly.",
      "Metaphorically, 🌀 means drama spiraling — group chat chaos, busy weeks, or ADHD brain memes.",
    ],
    textingMeaning: "'Cat 3 🌀 tracking us', 'Week from hell 🌀', 'Storm prep 🌀'.",
    socialMeaning: "Weather Twitter, storm chasers, and chaos memes use 🌀 heavily.",
    caution: "Communities hit by hurricanes may not appreciate casual 🌀 jokes during active disasters.",
    examples: [
      { context: "Weather", text: "🌀 landfall Friday" },
      { context: "Prep", text: "Board windows 🌀" },
      { context: "News", text: "Tracking 🌀 live" },
      { context: "Chaos", text: "My week 🌀" },
      { context: "Dizzy", text: "Head spinning 🌀" },
    ],
    contextBlocks: [
      { title: "Hurricane season", body: "🌀 is default shorthand for tropical storm coverage in US coastal chats." },
      { title: "Metaphor spiral", body: "Non-weather 🌀 means overwhelming chaos — context from words." },
      { title: "Vs 🌪️", body: "🌪️ is tornado funnel. 🌀 is broader cyclone/spiral." },
    ],
    searchIntents: ["cyclone emoji meaning", "🌀 hurricane emoji", "🌀 storm emoji", "🌀 copy paste"],
    whenNotToUse: ["Avoid 🌀 memes during active disaster relief.", "Do not confuse tornado 🌪️ coverage with 🌀."],
    faqs: [
      { question: "What does 🌀 mean?", answer: "Hurricane/cyclone weather, or metaphorical chaos/spiral." },
      { question: "🌀 for tornado?", answer: "Tornado posts often use 🌪️; 🌀 is broader cyclone/hurricane." },
    ],
  },

  "umbrella-with-rain-drops": {
    batchId: BATCH_ID,
    searchTitle: "Umbrella With Rain Drops Emoji (☔) Meaning: Rain, Weather, and Packing",
    snippetAnswer:
      "☔ Umbrella With Rain Drops means rain — forecasts, packing umbrellas, rainy-day moods, and 'bring a jacket' travel tips.",
    detailedParagraphs: [
      "Umbrella With Rain Drops (☔) combines open umbrella and falling rain — Unicode's clear wet-weather symbol.",
      "Travel planners text ☔ when checking forecasts before flights. Parents remind kids ☔ on school mornings.",
      "Romantic and sad playlists borrow ☔ for rainy-day aesthetic — not always literal weather.",
    ],
    textingMeaning: "'Pack ☔', '100% rain ☔', 'Walking home ☔'.",
    socialMeaning: "Rainy city photography, cozy indoor content, and weather apps share ☔.",
    caution: "During floods or storms, ☔ alone minimizes danger — add safety words.",
    examples: [
      { context: "Forecast", text: "All week ☔" },
      { context: "Travel", text: "London = ☔" },
      { context: "Reminder", text: "Grab ☔ before leave" },
      { context: "Mood", text: "Rainy day vibes ☔" },
      { context: "Plans", text: "Picnic cancelled ☔" },
    ],
    contextBlocks: [
      { title: "Packing shorthand", body: "☔ in trip threads means expect rain — plan gear." },
      { title: "Vs 🌧️", body: "🌧️ is rain cloud. ☔ adds umbrella — personal prep focus." },
      { title: "Vs ☂️", body: "☂️ is umbrella alone. ☔ includes rain drops." },
    ],
    searchIntents: ["umbrella rain emoji", "☔ meaning", "rain emoji umbrella", "☔ copy paste"],
    whenNotToUse: ["Avoid ☔ jokes during severe flood emergencies.", "Do not use for sunny beach posts without irony."],
    faqs: [
      { question: "What does ☔ mean?", answer: "Rainy weather — bring umbrella, expect wet conditions." },
      { question: "☔ vs rain cloud?", answer: "Umbrella emoji emphasizes personal rain prep; cloud is sky weather." },
    ],
  },

  snowman: {
    batchId: BATCH_ID,
    searchTitle: "Snowman Emoji (☃️) Meaning: Winter, Snow Days, and Holiday Fun",
    snippetAnswer:
      "☃️ Snowman marks winter joy — snow days, holiday cards, building snowmen, and cold-weather travel to snowy destinations.",
    detailedParagraphs: [
      "Snowman (☃️) shows a classic three-ball snow figure — Unicode's winter play symbol, distinct from ⛄ snowman without snowflakes on some platforms.",
      "Families text ☃️ when schools cancel for snow. Holiday greeting cards stack ☃️ with 🎄 and ❄️.",
      "Ski trip planners use ☃️ for resort vibes — Aspen, Alps, Hokkaido content.",
    ],
    textingMeaning: "'Snow day ☃️', 'Building ☃️ in the yard', 'White Christmas ☃️'.",
    socialMeaning: "Winter Instagram, holiday marketing, and cozy TikTok tag ☃️.",
    caution: "During deadly winter storms, cheerful ☃️ posts can feel insensitive locally.",
    examples: [
      { context: "Snow day", text: "School closed ☃️" },
      { context: "Holiday", text: "Merry ☃️❄️" },
      { context: "Kids", text: "First ☃️ of the year" },
      { context: "Travel", text: "Ski week ☃️" },
      { context: "Cold", text: "Freezing but cute ☃️" },
    ],
    contextBlocks: [
      { title: "Holiday cards", body: "☃️ is staple winter greeting emoji alongside snowflakes." },
      { title: "Vs ⛄", body: "Both are snowmen — vendors render slightly differently; meaning overlaps." },
      { title: "Vs ❄️", body: "❄️ is snowflake. ☃️ is built snowman character." },
    ],
    searchIntents: ["snowman emoji meaning", "☃️ winter emoji", "☃️ copy paste", "snowman emoji christmas"],
    whenNotToUse: ["Avoid ☃️ during blizzard tragedies.", "Do not use for tropical vacation posts unless ironic."],
    faqs: [
      { question: "What does ☃️ mean?", answer: "Winter, snow, snowman fun, and holiday cold-weather vibes." },
      { question: "☃️ vs ⛄?", answer: "Same idea — snowman; design differs by platform." },
    ],
  },

  "bridge-at-night": {
    batchId: BATCH_ID,
    searchTitle: "Bridge At Night Emoji (🌉) Meaning: City Lights, Night Views, and Travel",
    snippetAnswer:
      "🌉 Bridge At Night captures illuminated bridges — night skyline photos, romantic city walks, and scenic urban travel posts.",
    detailedParagraphs: [
      "Bridge At Night (🌉) shows a lit suspension bridge under stars — Unicode's scenic night-city symbol.",
      "Travel photographers lead captions with 🌉 for SF, NYC, Istanbul, and Lisbon night shoots.",
      "Date-night and anniversary posts use 🌉 for romantic city backdrop energy.",
    ],
    textingMeaning: "'Golden hour then 🌉', 'Night walk 🌉', 'View from 🌉'.",
    socialMeaning: "City travel reels, architecture accounts, and couple posts tag 🌉.",
    caution: "Generic 🌉 without naming the city can feel stock-photo vague — add location.",
    examples: [
      { context: "Photo", text: "Brooklyn 🌉 shots" },
      { context: "Date", text: "Stroll 🌉 tonight" },
      { context: "Travel", text: "Istanbul 🌉 magic" },
      { context: "Night", text: "City lights 🌉" },
      { context: "Post", text: "Golden Gate 🌉" },
    ],
    contextBlocks: [
      { title: "Iconic bridges", body: "🌉 instantly signals famous bridge tourism — pair with city names." },
      { title: "Vs 🌃", body: "🌃 is general night city. 🌉 focuses on bridge landmark." },
      { title: "Vs 🌁", body: "🌁 is fog mood. 🌉 is lit bridge at night." },
    ],
    searchIntents: ["bridge at night emoji", "🌉 meaning", "🌉 bridge emoji", "🌉 copy paste"],
    whenNotToUse: ["Avoid 🌉 for daytime bridge photos — add ☀️ or name time.", "Do not use during bridge disasters."],
    faqs: [
      { question: "What does 🌉 mean?", answer: "Night bridge views, city lights, scenic urban travel." },
      { question: "Which bridge is 🌉?", answer: "Generic design — users map it to local famous bridges." },
    ],
  },

  "sunrise-over-mountains": {
    batchId: BATCH_ID,
    searchTitle: "Sunrise Over Mountains Emoji (🌄) Meaning: Dawn Hikes, Adventure, and Views",
    snippetAnswer:
      "🌄 Sunrise Over Mountains means alpine dawn — early hikes, summit sunrises, adventure travel, and motivational new-day energy.",
    detailedParagraphs: [
      "Sunrise Over Mountains (🌄) shows sun rising behind peaks — Unicode's adventure-morning symbol.",
      "Hikers text 🌄 after pre-dawn starts and summit photos. Wellness accounts use 🌄 for 'new day' motivation.",
      "Travel creators pair 🌄 with ⛰️ and 🥾 in outdoor content calendars.",
    ],
    textingMeaning: "'Alpenglow 🌄', 'Summit sunrise 🌄', 'Up at 4 for 🌄'.",
    socialMeaning: "Adventure Instagram, national park reels, and fitness motivation tag 🌄.",
    caution: "Overused 🌄 on generic stock sunrise can feel inauthentic — real photos help.",
    examples: [
      { context: "Hike", text: "Summit 🌄 worth it" },
      { context: "Early", text: "Alarm for 🌄" },
      { context: "Travel", text: "Dolomites 🌄" },
      { context: "Motivation", text: "New day 🌄" },
      { context: "Camp", text: "Tent view 🌄" },
    ],
    contextBlocks: [
      { title: "Summit culture", body: "🌄 rewards painful early starts — standard hiking brag format." },
      { title: "Vs 🌅", body: "🌅 is sun over water/city. 🌄 adds mountain silhouette." },
      { title: "Vs 🏞️", body: "🏞️ is park vista. 🌄 emphasizes sunrise timing." },
    ],
    searchIntents: ["sunrise mountains emoji", "🌄 meaning", "🌄 hiking emoji", "🌄 copy paste"],
    whenNotToUse: ["Avoid 🌄 without context on sad news days — can read tone-deaf.", "Do not fake summit posts."],
    faqs: [
      { question: "What does 🌄 mean?", answer: "Mountain sunrise, dawn hikes, adventure mornings, new beginnings." },
      { question: "🌄 vs sunset?", answer: "Sunrise over mountains — morning/adventure, not evening." },
    ],
  },

  cityscape: {
    batchId: BATCH_ID,
    searchTitle: "Cityscape Emoji (🏙️) Meaning: Skyline, Urban Travel, and Downtown",
    snippetAnswer:
      "🏙️ Cityscape means urban skylines — downtown trips, big-city moves, metro life, and skyline photography posts.",
    detailedParagraphs: [
      "Cityscape (🏙️) shows high-rise silhouettes — Unicode's generic metropolis symbol for any major city.",
      "Relocators post 🏙️ with 'moving to Chicago 🏙️' announcements. Tourists tag skyline rooftop bars.",
      "Business content uses 🏙️ for corporate HQ and urban industry themes.",
    ],
    textingMeaning: "'Big city weekend 🏙️', 'Skyline views 🏙️', 'Downtown 🏙️'.",
    socialMeaning: "City travel guides, architecture pages, and 'day in my life' urban vlogs use 🏙️.",
    caution: "🏙️ alone doesn't say which city — name it for useful travel advice.",
    examples: [
      { context: "Move", text: "NYC bound 🏙️" },
      { context: "Trip", text: "Chicago 🏙️ weekend" },
      { context: "Work", text: "HQ downtown 🏙️" },
      { context: "Photo", text: "Rooftop 🏙️" },
      { context: "Life", text: "City kid 🏙️" },
    ],
    contextBlocks: [
      { title: "Skyline tourism", body: "🏙️ opens city-trip threads — hotels, views, nightlife." },
      { title: "Vs 🌆", body: "🌆 is dusk city scene. 🏙️ is daytime skyline buildings." },
      { title: "Vs 🌃", body: "🌃 is night with stars. 🏙️ is neutral urban towers." },
    ],
    searchIntents: ["cityscape emoji meaning", "🏙️ skyline emoji", "🏙️ city emoji", "🏙️ copy paste"],
    whenNotToUse: ["Avoid 🏙️ for rural/nature trips without city segment.", "Do not stereotype all cities as identical."],
    faqs: [
      { question: "What does 🏙️ mean?", answer: "City skyline, urban life, downtown travel, or metro moves." },
      { question: "🏙️ for any city?", answer: "Yes — generic skyline; add city name for clarity." },
    ],
  },

  parachute: {
    batchId: BATCH_ID,
    searchTitle: "Parachute Emoji (🪂) Meaning: Skydiving, Adventure, and Soft Landing",
    snippetAnswer:
      "🪂 Parachute marks skydiving, paragliding, adventure sports, and metaphorical 'safe landing' or bailout moments.",
    detailedParagraphs: [
      "Parachute (🪂) shows an open canopy — Unicode's adventure-sports symbol added for skydiving culture.",
      "Thrill seekers post 🪂 with first-jump videos and tandem bookings. Travel adventure lists include 🪂 with 🪂🌍 combos.",
      "Startups metaphorically 'deployed the 🪂' — emergency plan or pivot language in tech Twitter.",
    ],
    textingMeaning: "'First jump 🪂', 'Booked tandem 🪂', 'Pull the 🪂 on plan B'.",
    socialMeaning: "Adrenaline sports reels, travel bucket lists, and startup memes tag 🪂.",
    caution: "Real aviation emergencies are not joke material — keep 🪂 to sport or clear metaphor.",
    examples: [
      { context: "Skydive", text: "Jump day 🪂" },
      { context: "Travel", text: "NZ bucket list 🪂" },
      { context: "Metaphor", text: "Plan B 🪂 deployed" },
      { context: "Gift", text: "Tandem for his birthday 🪂" },
      { context: "Adventure", text: "Out of comfort zone 🪂" },
    ],
    contextBlocks: [
      { title: "Bucket list", body: "🪂 anchors skydiving goals in travel and life-list posts." },
      { title: "Vs ✈️", body: "✈️ is commercial flight. 🪂 is intentional jump sport." },
      { title: "Tech metaphor", body: "'Pull the parachute' means exit strategy — niche but recognizable." },
    ],
    searchIntents: ["parachute emoji meaning", "🪂 skydive emoji", "🪂 copy paste", "parachute emoji"],
    whenNotToUse: ["Avoid 🪂 jokes about real plane emergencies.", "Do not pressure anxious friends to skydive."],
    faqs: [
      { question: "What does 🪂 mean?", answer: "Skydiving, adventure sports, or metaphorical bailout/safe landing." },
      { question: "🪂 vs airplane?", answer: "Parachute is jump sport; airplane is passenger travel." },
    ],
  },

  "kick-scooter": {
    batchId: BATCH_ID,
    searchTitle: "Kick Scooter Emoji (🛴) Meaning: Scooter Commute, Lime, and City Mobility",
    snippetAnswer:
      "🛴 Kick Scooter means scooter rides — rental e-scooters, kid scooters, last-mile commutes, and micromobility city life.",
    detailedParagraphs: [
      "Kick Scooter (🛴) shows a standing scooter — Unicode's micromobility symbol for Lime/Bird-era city culture.",
      "Urban commuters text 🛴 for short hops between metro and office. Tourists rent 🛴 in European old towns.",
      "Parents coordinate kids' 🛴 park rides separately from e-scooter commute culture.",
    ],
    textingMeaning: "'Grab a 🛴', 'Scooter to meeting 🛴', 'Lime 🛴 home'.",
    socialMeaning: "City mobility posts, startup pitch decks, and commute hacks tag 🛴.",
    caution: "Scooter injuries and sidewalk debates are real — don't glam unsafe riding.",
    examples: [
      { context: "Commute", text: "Late — taking 🛴" },
      { context: "Rental", text: "Bird 🛴 to bar" },
      { context: "Kids", text: "Park 🛴 session" },
      { context: "Tourist", text: "Rome by 🛴" },
      { context: "Last mile", text: "Metro + 🛴 combo" },
    ],
    contextBlocks: [
      { title: "Micromobility boom", body: "🛴 symbolizes rental scooter era in major cities worldwide." },
      { title: "Vs 🛹", body: "🛹 is skateboard. 🛴 has handlebars for standing ride." },
      { title: "Vs 🚲", body: "🚲 is bicycle. 🛴 is smaller standing scooter." },
    ],
    searchIntents: ["scooter emoji meaning", "🛴 kick scooter", "🛴 lime scooter", "🛴 copy paste"],
    whenNotToUse: ["Avoid encouraging sidewalk speeding.", "Do not use for motorcycle — different vehicle."],
    faqs: [
      { question: "What does 🛴 mean?", answer: "Kick or e-scooter commute, rental scooters, or kid scooter play." },
      { question: "🛴 vs skateboard?", answer: "Scooter has a handle; skateboard is deck-only." },
    ],
  },

  "pound-banknote": {
    batchId: BATCH_ID,
    searchTitle: "Pound Banknote Emoji (💷) Meaning: UK Money, Pounds, and British Travel",
    snippetAnswer:
      "💷 Pound Banknote means British pounds — UK prices, London travel budgets, tipping, and sterling payment chat.",
    detailedParagraphs: [
      "Pound Banknote (💷) shows stylized GBP notes — Unicode's UK currency symbol for money talk.",
      "London visitors compare 💷 costs for pints, tubes, and theatre tickets in group chats.",
      "Freelancers billing UK clients drop 💷 on invoices — currency clarity for international pay.",
    ],
    textingMeaning: "'That was 40 💷', 'Paid in 💷', 'London is 💷 expensive'.",
    socialMeaning: "UK travel content, Brexit-era money jokes, and British finance threads tag 💷.",
    caution: "Wrong currency emoji confuses travel advice — use 💶 for euros, 💵 for dollars.",
    examples: [
      { context: "Travel", text: "Cash for 💷 tips" },
      { context: "Price", text: "Round was 60 💷" },
      { context: "Pay", text: "Invoice in 💷" },
      { context: "Budget", text: "Week in UK 💷" },
      { context: "Split", text: "Send 💷 on Monzo" },
    ],
    contextBlocks: [
      { title: "UK travel", body: "💷 instantly frames London/UK trip money math." },
      { title: "Vs 💵", body: "💵 is US dollar. 💷 is British pound." },
      { title: "Vs 💶", body: "💶 is euro. Pick 💷 for sterling." },
    ],
    searchIntents: ["pound emoji meaning", "💷 money emoji", "british pound emoji", "💷 copy paste"],
    whenNotToUse: ["Avoid 💷 for non-UK currency contexts.", "Do not flaunt during someone's financial stress."],
    faqs: [
      { question: "What does 💷 mean?", answer: "British pound money — prices, payments, UK travel budgets." },
      { question: "💷 vs 💵?", answer: "Pound is UK; dollar is US." },
    ],
  },

  "yen-banknote": {
    batchId: BATCH_ID,
    searchTitle: "Yen Banknote Emoji (💴) Meaning: Japanese Yen, Japan Travel, and Cash",
    snippetAnswer:
      "💴 Yen Banknote means Japanese yen — Japan trip cash, konbini prices, anime merch budgets, and JPY payments.",
    detailedParagraphs: [
      "Yen Banknote (💴) depicts yen notes — Unicode's Japan currency symbol, still relevant despite card growth in Japan.",
      "Japan travelers text 💴 for cash-heavy shrine donations, ramen totals, and gachapon sprees.",
      "Finance threads use 💴 for USD/JPY and Bank of Japan news — not only tourism.",
    ],
    textingMeaning: "'Need 💴 for trip', '1000 💴 lunch', 'ATM 💴'.",
    socialMeaning: "Japan travel vlogs, Tokyo shopping hauls, and currency posts tag 💴.",
    caution: "Specify yen vs generic 'money' when advising international friends.",
    examples: [
      { context: "Travel", text: "Withdraw 💴 at airport" },
      { context: "Shop", text: "Akihabara damage 💴" },
      { context: "Food", text: "Ramen 1200 💴" },
      { context: "Finance", text: "Yen weak 💴" },
      { context: "Budget", text: "Daily cap 8000 💴" },
    ],
    contextBlocks: [
      { title: "Japan cash culture", body: "💴 reminds travelers many spots still prefer cash despite cards." },
      { title: "Vs 💶", body: "💶 is euro. 💴 is Japanese yen." },
      { title: "Vs 💵", body: "💵 is US dollar. 💴 is yen." },
    ],
    searchIntents: ["yen emoji meaning", "💴 japan money", "yen banknote emoji", "💴 copy paste"],
    whenNotToUse: ["Avoid 💴 for non-Japan yen contexts without explanation.", "Do not mock exchange rates during crises."],
    faqs: [
      { question: "What does 💴 mean?", answer: "Japanese yen — Japan travel money, prices, and JPY payments." },
      { question: "Still need cash in Japan?", answer: "Many places take cards now, but 💴 still signals yen cash planning." },
    ],
  },

  coin: {
    batchId: BATCH_ID,
    searchTitle: "Coin Emoji (🪙) Meaning: Change, Tips, Savings, and Crypto Adjacent",
    snippetAnswer:
      "🪙 Coin means loose change, tips, small payments, savings jars, and sometimes crypto or 'coin flip' luck metaphors.",
    detailedParagraphs: [
      "Coin (🪙) shows a round metal coin — Unicode's symbol for small cash, tips, and arcade tokens.",
      "Servers and gig workers remind friends 🪙 for tip jars. Parents teach kids savings with 🪙 piggy bank posts.",
      "Crypto communities borrow 🪙 loosely — 'which 🪙' — though 🪙 is not Bitcoin-specific.",
    ],
    textingMeaning: "'Spare 🪙?', 'Tip jar 🪙', 'Flipping a 🪙 for it'.",
    socialMeaning: "Personal finance TikTok, arcade nostalgia, and crypto chatter use 🪙.",
    caution: "🪙 is not official crypto branding — don't imply investment advice.",
    examples: [
      { context: "Tips", text: "Cash 🪙 only" },
      { context: "Savings", text: "Jar full 🪙" },
      { context: "Small pay", text: "Side gig 🪙" },
      { context: "Luck", text: "Flip a 🪙" },
      { context: "Arcade", text: "Need 🪙 for games" },
    ],
    contextBlocks: [
      { title: "Loose change", body: "🪙 is petty cash and tip culture — smaller than banknote emojis." },
      { title: "Vs 💰", body: "💰 is money bag wealth. 🪙 is single coin change." },
      { title: "Crypto adjacency", body: "Some use 🪙 generically for tokens — context clarifies seriousness." },
    ],
    searchIntents: ["coin emoji meaning", "🪙 money emoji", "🪙 copy paste", "coin emoji crypto"],
    whenNotToUse: ["Avoid 🪙 as financial advice.", "Do not confuse with sports coin toss in serious disputes."],
    faqs: [
      { question: "What does 🪙 mean?", answer: "Coins, change, tips, small cash, or luck flip metaphors." },
      { question: "Is 🪙 a crypto emoji?", answer: "Not officially — sometimes used loosely for crypto talk." },
    ],
  },

  "money-with-wings": {
    batchId: BATCH_ID,
    searchTitle: "Money With Wings Emoji (💸) Meaning: Spending, Expensive, and Money Flying Away",
    snippetAnswer:
      "💸 Money With Wings means money flying away — expensive purchases, overspending, bills, and 'there goes my paycheck' humor.",
    detailedParagraphs: [
      "Money With Wings (💸) shows banknotes with wings — Unicode's symbol for spending, waste, or rapid cash outflow.",
      "Shoppers post 💸 after impulse buys and rent due dates. Friends joke 💸 when splitting costly dinners.",
      "Creators tag 💸 for 'payday then broke' memes — universal spending humor.",
    ],
    textingMeaning: "'Rent due 💸', 'That sale got me 💸', 'Paycheck gone 💸'.",
    socialMeaning: "Finance humor, shopping hauls, and subscription stack rants use 💸.",
    caution: "💸 at someone in debt struggles can feel mocking — know your audience.",
    examples: [
      { context: "Rent", text: "Half my check 💸" },
      { context: "Shopping", text: "Target run 💸" },
      { context: "Bills", text: "Subscriptions 💸" },
      { context: "Treat", text: "Worth it 💸" },
      { context: "Broke", text: "Wallet empty 💸" },
    ],
    contextBlocks: [
      { title: "Spending humor", body: "💸 is the default 'money disappeared' emoji for memes." },
      { title: "Vs 💵", body: "💵 is neutral cash. 💸 adds spending/flying-away connotation." },
      { title: "Vs 🤑", body: "🤑 is excited greed. 💸 is money leaving." },
    ],
    searchIntents: ["money with wings emoji", "💸 meaning", "💸 spending emoji", "💸 copy paste"],
    whenNotToUse: ["Avoid 💸 toward friends in financial crisis.", "Do not glam reckless spending without context."],
    faqs: [
      { question: "What does 💸 mean?", answer: "Money spent, expensive, bills, or paycheck disappearing." },
      { question: "💸 vs dollar emoji?", answer: "Wings imply money flying away — spending, not holding cash." },
    ],
  },

  "open-book": {
    batchId: BATCH_ID,
    searchTitle: "Open Book Emoji (📖) Meaning: Reading, Study, and BookTok",
    snippetAnswer:
      "📖 Open Book means reading and study — books, homework, BookTok, research, and 'currently reading' updates.",
    detailedParagraphs: [
      "Open Book (📖) shows spread pages — Unicode's reading symbol for literature, schoolwork, and research.",
      "BookTok creators stack 📖 with star ratings and trope tags. Students text 📖 during exam season misery.",
      "Book clubs coordinate 📖 with title polls and meeting dates in group chats.",
    ],
    textingMeaning: "'Reading 📖', 'Exam 📖 all night', 'Book club 📖'.",
    socialMeaning: "Book Instagram, studyblr, and library aesthetic posts lead with 📖.",
    caution: "Do not shame slow readers with 📖 flex — reading pace varies.",
    examples: [
      { context: "Reading", text: "50 pages tonight 📖" },
      { context: "Study", text: "Library 📖 mode" },
      { context: "Club", text: "Next pick 📖" },
      { context: "BookTok", text: "Romantasy 📖 era" },
      { context: "Research", text: "Deep dive 📖" },
    ],
    contextBlocks: [
      { title: "BookTok culture", body: "📖 anchors reading content alongside 🔥 ratings and trope hashtags." },
      { title: "Vs 📚", body: "📚 is book stack. 📖 is open active reading." },
      { title: "Vs 📕", body: "Closed book emojis show covers; 📖 emphasizes reading in progress." },
    ],
    searchIntents: ["open book emoji", "📖 reading emoji", "📖 book emoji meaning", "📖 copy paste"],
    whenNotToUse: ["Avoid 📖 to mock literacy.", "Do not spoiler in 📖 threads without warnings."],
    faqs: [
      { question: "What does 📖 mean?", answer: "Reading, studying, book clubs, or research in progress." },
      { question: "📖 vs books emoji?", answer: "Open book = actively reading; stack = collection or study pile." },
    ],
  },

  "incoming-envelope": {
    batchId: BATCH_ID,
    searchTitle: "Incoming Envelope Emoji (📨) Meaning: Mail, Letters, and New Messages",
    snippetAnswer:
      "📨 Incoming Envelope means mail arriving — letters, job offers, college decisions, and 'check your inbox' updates.",
    detailedParagraphs: [
      "Incoming Envelope (📨) shows an envelope with motion lines — Unicode's symbol for received mail or new correspondence.",
      "Job hunters anxiously text 📨 when expecting offer letters. Students wait on 📨 decision season in March.",
      "Creators use 📨 for newsletter launches — 'new 📨 every Friday' — borrowed from physical mail metaphor.",
    ],
    textingMeaning: "'Got 📨 from HR', 'Decision 📨 today', 'Check mail 📨'.",
    socialMeaning: "Career milestones, pen-pal nostalgia, and email marketing play on 📨.",
    caution: "Bad news by mail (rejection, bills) makes 📨 stressful — don't hype blindly.",
    examples: [
      { context: "Job", text: "Offer 📨!" },
      { context: "College", text: "Acceptance 📨" },
      { context: "Mail", text: "Package notice 📨" },
      { context: "Newsletter", text: "New issue 📨" },
      { context: "Waiting", text: "Any 📨 yet?" },
    ],
    contextBlocks: [
      { title: "Decision season", body: "📨 peaks for college and job offer anxiety threads." },
      { title: "Vs ✉️", body: "✉️ is static envelope. 📨 emphasizes incoming/arriving." },
      { title: "Vs 📧", body: "📧 is e-mail. 📨 feels more physical letter drama." },
    ],
    searchIntents: ["incoming envelope emoji", "📨 mail emoji", "📨 meaning", "📨 copy paste"],
    whenNotToUse: ["Avoid 📨 teasing about bills someone can't pay.", "Do not fake job offer 📨 pranks."],
    faqs: [
      { question: "What does 📨 mean?", answer: "Mail or message arriving — letters, offers, decisions." },
      { question: "📨 vs email emoji?", answer: "Incoming envelope feels like physical mail; email is digital." },
    ],
  },

  postbox: {
    batchId: BATCH_ID,
    searchTitle: "Postbox Emoji (📮) Meaning: Snail Mail, UK Post, and Sending Letters",
    snippetAnswer:
      "📮 Postbox means sending mail — letters, postcards, UK red postbox aesthetic, and old-school correspondence.",
    detailedParagraphs: [
      "Postbox (📮) shows a public mail collection box — Unicode's symbol strongly tied to British red postboxes.",
      "Pen-pal and postcard travelers snap 📮 abroad and text friends 'posted 📮'.",
      "Nostalgia posts contrast 📮 snail mail with instant DMs — slower but tangible.",
    ],
    textingMeaning: "'Dropped it in 📮', 'Postcard sent 📮', 'Mail day 📮'.",
    socialMeaning: "Travel postcards, pen-pal communities, and UK aesthetic content tag 📮.",
    caution: "International friends may not recognize 📮 as UK-specific — add context.",
    examples: [
      { context: "Postcard", text: "Sent from Paris 📮" },
      { context: "Mail", text: "Check the 📮" },
      { context: "Pen pal", text: "Letter in 📮" },
      { context: "UK", text: "Classic red 📮" },
      { context: "Slow mail", text: "Snail pace 📮" },
    ],
    contextBlocks: [
      { title: "UK icon", body: "📮 reads British to many users — red pillar box culture." },
      { title: "Vs 📨", body: "📨 is incoming. 📮 is sending/dropping mail off." },
      { title: "Travel postcards", body: "Tourists collect 📮 photos from each country mailed." },
    ],
    searchIntents: ["postbox emoji meaning", "📮 mail emoji", "📮 uk post", "📮 copy paste"],
    whenNotToUse: ["Avoid 📮 for pure email threads — use 📧.", "Do not expect instant reply jokes without context."],
    faqs: [
      { question: "What does 📮 mean?", answer: "Posting mail, postcards, snail mail, often UK postbox vibe." },
      { question: "📮 vs mailbox?", answer: "Postbox is public drop box; home mailbox is different concept." },
    ],
  },

  clipboard: {
    batchId: BATCH_ID,
    searchTitle: "Clipboard Emoji (📋) Meaning: Checklists, Tasks, and Work Orders",
    snippetAnswer:
      "📋 Clipboard means checklists and tasks — to-do lists, inspections, healthcare charts, and 'here's the plan' work updates.",
    detailedParagraphs: [
      "Clipboard (📋) shows a board with paper — Unicode's symbol for lists, audits, and field work.",
      "Managers text 📋 with meeting agendas. Nurses and coaches use 📋 for shift notes and play sheets.",
      "Productivity culture stacks 📋 with ✅ as tasks complete — GTD and Notion aesthetic.",
    ],
    textingMeaning: "'Agenda 📋', 'Inspection 📋', 'To-do 📋 attached'.",
    socialMeaning: "Productivity influencers, healthcare workers, and event planners tag 📋.",
    caution: "Overloading someone with 📋 tasks without support reads as bossy.",
    examples: [
      { context: "Work", text: "SOP 📋 ready" },
      { context: "Tasks", text: "Saturday list 📋" },
      { context: "Health", text: "Chart 📋 updated" },
      { context: "Event", text: "Run of show 📋" },
      { context: "Home", text: "Chore 📋" },
    ],
    contextBlocks: [
      { title: "Checklist culture", body: "📋 is default 'list attached' emoji in work chats." },
      { title: "Vs 📝", body: "📝 is memo writing. 📋 is structured list/form." },
      { title: "Healthcare", body: "Clinical 📋 signals patient charts or rounds — professional context." },
    ],
    searchIntents: ["clipboard emoji meaning", "📋 checklist emoji", "📋 copy paste", "📋 tasks"],
    whenNotToUse: ["Avoid dumping 📋 on burned-out teammates without empathy.", "Do not use for casual hangout plans — feels corporate."],
    faqs: [
      { question: "What does 📋 mean?", answer: "Checklists, tasks, agendas, inspections, or structured plans." },
      { question: "📋 vs memo emoji?", answer: "Clipboard is list/form; memo is freeform note." },
    ],
  },

  "chart-increasing": {
    batchId: BATCH_ID,
    searchTitle: "Chart Increasing Emoji (📈) Meaning: Growth, Stocks, and Good News",
    snippetAnswer:
      "📈 Chart Increasing means upward trend — stock gains, growth metrics, business wins, and 'numbers going up' optimism.",
    detailedParagraphs: [
      "Chart Increasing (📈) shows a line trending up — Unicode's symbol for positive metrics and markets.",
      "Finance bros text 📈 with ticker symbols. Startup founders post 📈 user growth screenshots.",
      "Fitness and habit trackers borrow 📈 for streak progress — steps, savings, gym days.",
    ],
    textingMeaning: "'Stock 📈', 'MRR 📈', 'Progress 📈'.",
    socialMeaning: "Investing Twitter, SaaS milestones, and gym progress posts tag 📈.",
    caution: "📈 gloating during others' losses feels cruel — read the room in market chats.",
    examples: [
      { context: "Stocks", text: "Portfolio 📈" },
      { context: "Startup", text: "Users 📈" },
      { context: "Fitness", text: "Lifts 📈" },
      { context: "Sales", text: "Q2 📈" },
      { context: "Crypto", text: "Bag 📈" },
    ],
    contextBlocks: [
      { title: "Market culture", body: "📈 is instant bullish signal in investing group chats." },
      { title: "Vs 📉", body: "📉 is down trend. 📈 is up — pair for before/after jokes." },
      { title: "Vs 💹", body: "💹 is chart with yen — Japanese market vibe; 📈 is generic up." },
    ],
    searchIntents: ["chart increasing emoji", "📈 stock emoji", "📈 growth emoji", "📈 copy paste"],
    whenNotToUse: ["Avoid 📈 flex during friends' financial losses.", "Do not imply guaranteed returns — not financial advice."],
    faqs: [
      { question: "What does 📈 mean?", answer: "Growth, rising stocks, improving metrics, positive trends." },
      { question: "📈 vs 📉?", answer: "Increasing chart is up; decreasing chart is down." },
    ],
  },

  "magnifying-glass-tilted-right": {
    batchId: BATCH_ID,
    searchTitle: "Magnifying Glass Tilted Right Emoji (🔎) Meaning: Search, Investigate, and Zoom In",
    snippetAnswer:
      "🔎 Magnifying Glass Tilted Right means search and investigation — fact-checking, true-crime irony, SEO, and 'let me look into it'.",
    detailedParagraphs: [
      "Magnifying Glass Tilted Right (🔎) shows a lens angled right — Unicode pairs it with 🔍 tilted left for search themes.",
      "Friends reply 🔎 when digging gossip or verifying claims — 'investigating' meme tone.",
      "True-crime podcast fans and detective aesthetic posts use 🔎 ironically or sincerely.",
      "Work chats use 🔎 for research tasks and document review — less playful than meme usage.",
    ],
    textingMeaning: "'Let me 🔎', 'Facts 🔎', 'Deep dive 🔎'.",
    socialMeaning: "True crime TikTok, debunk threads, and SEO humor tag 🔎.",
    caution: "🔎 stalking jokes toward real people cross lines — keep it consensual humor.",
    examples: [
      { context: "Search", text: "Googling now 🔎" },
      { context: "Gossip", text: "Investigating 🔎" },
      { context: "Work", text: "Audit 🔎" },
      { context: "True crime", text: "Episode 3 🔎" },
      { context: "Fact check", text: "Sources 🔎" },
    ],
    contextBlocks: [
      { title: "Investigation meme", body: "🔎 replies mean 'I'm looking into this' with playful detective energy." },
      { title: "Vs 🔍", body: "🔍 tilts left; 🔎 tilts right — same search meaning." },
      { title: "Research work", body: "Professional 🔎 means review and analysis without meme tone." },
    ],
    searchIntents: ["magnifying glass emoji", "🔎 search emoji", "🔎 investigate emoji", "🔎 copy paste"],
    whenNotToUse: ["Avoid 🔎 stalking real people.", "Do not use in serious legal matters without clarity."],
    faqs: [
      { question: "What does 🔎 mean?", answer: "Search, investigate, fact-check, or examine closely." },
      { question: "🔎 vs 🔍?", answer: "Same meaning — different tilt direction per Unicode design." },
    ],
  },

  "oncoming-police-car": {
    batchId: BATCH_ID,
    searchTitle: "Oncoming Police Car Emoji (🚔) Meaning: Cops, Emergency, and Traffic Stops",
    snippetAnswer:
      "🚔 Oncoming Police Car marks police presence — traffic stops, emergency response, chase memes, and 'cops ahead' warnings in group chats.",
    detailedParagraphs: [
      "Oncoming Police Car (🚔) shows a police vehicle from the front — Unicode's symbol for law enforcement on the road, distinct from sideways 🚓 police car.",
      "Drivers text 🚔 to warn friends about speed traps or DUI checkpoints ahead. Waze culture borrowed this emoji long before official apps existed.",
      "Meme threads use 🚔 ironically when someone gets caught lying — 'the 🚔 arrived' — playful, not literal emergency.",
      "During real police violence or tragedy in the news, casual 🚔 jokes can feel disrespectful — read the room.",
    ],
    textingMeaning: "'🚔 on the highway', 'Slow down 🚔 ahead', 'They got pulled 🚔'.",
    socialMeaning: "Driving meme pages, dashcam clips, and urban commute rants tag 🚔.",
    caution: "Never use 🚔 to mock victims of police harm. Avoid glorifying dangerous chases.",
    examples: [
      { context: "Warning", text: "Trap on I-95 🚔" },
      { context: "Pulled over", text: "Got the 🚔 treatment" },
      { context: "Meme", text: "Lies detected 🚔" },
      { context: "Commute", text: "Every corner 🚔 today" },
      { context: "Slow down", text: "🚔 ahead — brake" },
    ],
    contextBlocks: [
      { title: "Road warnings", body: "🚔 in group chats often means police ahead — community speed-trap alerts." },
      { title: "Vs 🚓", body: "🚓 shows side view. 🚔 is oncoming/front angle — same police car theme." },
      { title: "Meme usage", body: "Non-driving 🚔 means 'caught' or 'authorities arrived' in joke threads." },
    ],
    searchIntents: ["police car emoji", "🚔 meaning", "oncoming police car emoji", "🚔 copy paste"],
    whenNotToUse: ["Avoid 🚔 humor during police brutality news.", "Do not encourage evading law enforcement."],
    faqs: [
      { question: "What does 🚔 mean?", answer: "Police car, traffic stop, checkpoint warning, or 'caught' meme energy." },
      { question: "🚔 vs 🚓?", answer: "Both are police cars — oncoming vs side view depending on platform." },
    ],
  },

  "motor-boat": {
    batchId: BATCH_ID,
    searchTitle: "Motor Boat Emoji (🛥️) Meaning: Lake Days, Marina, and Summer Boating",
    snippetAnswer:
      "🛥️ Motor Boat means recreational boating — lake weekends, marina trips, summer rentals, and 'on the water' vacation updates.",
    detailedParagraphs: [
      "Motor Boat (🛥️) depicts a small powerboat — Unicode's leisure boating symbol for lakes, rivers, and coastal day trips.",
      "Friend groups text 🛥️ when booking pontoon rentals or lake houses. It reads vacation-leisure, not commercial ferry 🛥️ vs ⛴️.",
      "Fishing and wake-sport creators tag 🛥️ in summer reels — dock shots, sunset cruises, and 'boat day' culture.",
      "Compared to 🚤 speedboat, 🛥️ often feels calmer — cruiser and marina aesthetic vs racing vibe.",
    ],
    textingMeaning: "'Boat day 🛥️', 'At the marina 🛥️', 'Lake weekend 🛥️'.",
    socialMeaning: "Summer travel Instagram, lake life TikTok, and fishing content use 🛥️.",
    caution: "During boating accidents in local news, party 🛥️ posts need sensitivity.",
    examples: [
      { context: "Lake trip", text: "Pontoon at noon 🛥️" },
      { context: "Vacation", text: "First boat day 🛥️" },
      { context: "Marina", text: "Dock B 🛥️" },
      { context: "Fishing", text: "Sunrise on the water 🛥️" },
      { context: "Summer", text: "Weekend forecast: 🛥️" },
    ],
    contextBlocks: [
      { title: "Lake culture", body: "🛥️ signals Midwest and coastal summer rituals — rentals, docks, cold drinks." },
      { title: "Vs ⛴️", body: "⛴️ is passenger ferry transit. 🛥️ is recreational motorboat." },
      { title: "Vs 🚤", body: "🚤 is speedboat/racing. 🛥️ is cruiser/marina leisure." },
    ],
    searchIntents: ["motor boat emoji", "🛥️ meaning", "boat emoji lake", "🛥️ copy paste"],
    whenNotToUse: ["Avoid 🚤 confusion when you mean high-speed boat.", "Do not glam unsafe boating without life jackets."],
    faqs: [
      { question: "What does 🛥️ mean?", answer: "Recreational motorboat — lake days, marina trips, summer boating." },
      { question: "🛥️ vs ferry?", answer: "Motor boat is leisure craft; ferry is scheduled passenger transit." },
    ],
  },

  "love-hotel": {
    batchId: BATCH_ID,
    searchTitle: "Love Hotel Emoji (🏩) Meaning: Japan Hotels, Romance, and Travel Context",
    snippetAnswer:
      "🏩 Love Hotel marks Japan's short-stay hotels — travel explainer context, adult humor, and anime/manga references; tone varies from educational to cheeky.",
    detailedParagraphs: [
      "Love Hotel (🏩) shows a building with a heart — Unicode names it for Japan's love hotel industry, where couples book short private stays.",
      "Japan travelers encounter 🏩 in explainer content about lodging types — distinct from business hotels or ryokan ♨️ culture.",
      "Anime and meme communities use 🏩 ironically without always meaning literal bookings — context decides seriousness.",
      "Because of adult connotations, 🏩 in professional or family chats can embarrass — know your audience.",
    ],
    textingMeaning: "'That's giving 🏩 energy', 'Japan lodging types 🏩', 'Date night joke 🏩'.",
    socialMeaning: "Japan travel guides, culture explainers, and ironic meme posts reference 🏩.",
    caution: "Do not use 🏩 to harass or sexualize someone. Avoid in work Slack and family group chats.",
    examples: [
      { context: "Japan travel", text: "Lodging types explained 🏩" },
      { context: "Meme", text: "Bold itinerary 🏩" },
      { context: "Culture", text: "Short-stay hotels 🏩 in Tokyo guides" },
      { context: "Anime", text: "That scene energy 🏩" },
      { context: "Joke", text: "No comments 🏩" },
    ],
    contextBlocks: [
      { title: "Japan context", body: "🏩 is primarily understood through Japanese hospitality culture — educational travel posts explain it neutrally." },
      { title: "Vs 🏨", body: "🏨 is generic hotel. 🏩 specifically signals love hotel building design." },
      { title: "Tone control", body: "Same emoji spans travel education and adult humor — words around it set the tone." },
    ],
    searchIntents: ["love hotel emoji", "🏩 meaning japan", "love hotel emoji meaning", "🏩 copy paste"],
    whenNotToUse: ["Avoid 🏩 toward strangers or coworkers.", "Do not use in content for minors."],
    faqs: [
      { question: "What does 🏩 mean?", answer: "Love hotel — mainly Japan short-stay lodging; also used in memes and culture explainers." },
      { question: "Is 🏩 appropriate in travel guides?", answer: "Yes when explaining lodging types factually — not as punchline-only content." },
    ],
  },

  "satellite-antenna": {
    batchId: BATCH_ID,
    searchTitle: "Satellite Antenna Emoji (📡) Meaning: Signal, Tech, Space, and Connectivity",
    snippetAnswer:
      "📡 Satellite Antenna means signal and connectivity — Wi‑Fi jokes, space tech, broadcasting, and 'picking up the signal' meme tone.",
    detailedParagraphs: [
      "Satellite Antenna (📡) shows a dish pointing skyward — Unicode's symbol for satellite communication and broadcast reception.",
      "Tech workers text 📡 when VPN connects abroad or livestream gear works. Space enthusiasts pair 📡 with 🛰️ for mission posts.",
      "Meme usage: '📡 receiving drama' — pretending to tune into gossip like a radio dish.",
      "Old-school TV and rural internet content uses 📡 literally — dish install day and signal strength struggles.",
    ],
    textingMeaning: "'Signal locked 📡', 'Live from 📡', 'VPN connected 📡'.",
    socialMeaning: "Space Twitter, ham radio communities, and streaming setup posts tag 📡.",
    caution: "During satellite outages or space tragedies, playful 📡 may feel off.",
    examples: [
      { context: "Stream", text: "Mic and 📡 ready" },
      { context: "VPN", text: "Tunnel up 📡" },
      { context: "Space", text: "Downlink 📡" },
      { context: "Meme", text: "Gossip 📡 on" },
      { context: "Install", text: "Dish mounted 📡" },
    ],
    contextBlocks: [
      { title: "Connectivity", body: "📡 shorthand for link-up — streams, VPNs, and remote broadcast." },
      { title: "Vs 📶", body: "📶 is mobile signal bars. 📡 is satellite dish hardware." },
      { title: "Space niche", body: "Amateur radio and space fans use 📡 for downlink and tracking posts." },
    ],
    searchIntents: ["satellite emoji", "📡 meaning", "satellite antenna emoji", "📡 copy paste"],
    whenNotToUse: ["Avoid 📡 jokes during active satellite failures affecting safety.", "Do not confuse with TV 📺 alone."],
    faqs: [
      { question: "What does 📡 mean?", answer: "Satellite signal, broadcasting, connectivity, or tuning-in metaphor." },
      { question: "📡 vs wifi emoji?", answer: "Satellite dish is hardware/space signal; wifi is local wireless." },
    ],
  },

  telescope: {
    batchId: BATCH_ID,
    searchTitle: "Telescope Emoji (🔭) Meaning: Stargazing, Astronomy, and Looking Closer",
    snippetAnswer:
      "🔭 Telescope marks astronomy and stargazing — meteor showers, planet viewing, science curiosity, and 'looking closer' metaphors.",
    detailedParagraphs: [
      "Telescope (🔭) shows an optical tube on a tripod — Unicode's symbol for sky observation and scientific looking.",
      "Stargazers text 🔭 for Perseids plans, eclipse trips, and dark-sky park weekends. Science educators lead STEM posts with 🔭.",
      "Metaphorically, 🔭 means scrutinizing details — 'putting the 🔭 on that claim' in debate threads.",
      "Pairs with 🌌 and 🪐 in space aesthetic content — hobby astronomy, not professional observatory only.",
    ],
    textingMeaning: "'Meteor shower tonight 🔭', 'Planet watch 🔭', 'Zoom in 🔭'.",
    socialMeaning: "Astrophotography Instagram, science TikTok, and travel to dark-sky sites tag 🔭.",
    caution: "Do not use 🔭 to stalk or surveil people — creepy connotation if aimed at someone.",
    examples: [
      { context: "Stargazing", text: "Clear skies 🔭" },
      { context: "Eclipse", text: "Road trip for 🔭" },
      { context: "Science", text: "Lab day 🔭" },
      { context: "Metaphor", text: "Examining that take 🔭" },
      { context: "Travel", text: "Dark sky park 🔭" },
    ],
    contextBlocks: [
      { title: "Astronomy hobby", body: "🔭 anchors amateur stargazing plans — dates, gear, and weather checks." },
      { title: "Vs 🔎", body: "🔎 is detective search. 🔭 is sky/science observation." },
      { title: "Travel niche", body: "Astrotourism posts combine 🔭 with national park dark-sky tags." },
    ],
    searchIntents: ["telescope emoji meaning", "🔭 astronomy emoji", "🔭 stargazing", "🔭 copy paste"],
    whenNotToUse: ["Avoid 🔭 for invading someone's privacy.", "Do not imply professional discovery from hobby 🔭 alone."],
    faqs: [
      { question: "What does 🔭 mean?", answer: "Stargazing, astronomy, science curiosity, or looking closely at something." },
      { question: "🔭 vs magnifying glass?", answer: "Telescope is sky/science; magnifying glass is search/investigate." },
    ],
  },

  "adhesive-bandage": {
    batchId: BATCH_ID,
    searchTitle: "Adhesive Bandage Emoji (🩹) Meaning: Injury, Self-Care, and 'Bandaid Fix'",
    snippetAnswer:
      "🩹 Adhesive Bandage means minor injury, self-care, and quick fixes — scraped knees, emotional 'bandaid' solutions, and healthcare memes.",
    detailedParagraphs: [
      "Adhesive Bandage (🩹) shows a band-aid strip — Unicode's symbol for small wounds, first aid, and patch-up care.",
      "Parents text 🩹 when kids return from playground scrapes. Athletes post 🩹 after turf burns and blisters.",
      "Metaphorically, 🩹 labels temporary fixes — 'bandaid solution' for problems that need deeper work.",
      "Mental-health posts use 🩹 carefully for self-care — rest, boundaries — not to minimize serious conditions.",
    ],
    textingMeaning: "'Need a 🩹', 'Bandaid fix 🩹', 'Knee scrape 🩹'.",
    socialMeaning: "Sports injury updates, mom TikTok, and wellness content tag 🩹.",
    caution: "Serious injuries need medical words, not only 🩹. Don't mock chronic illness with bandaid jokes.",
    examples: [
      { context: "Injury", text: "Minor scrape 🩹" },
      { context: "Kids", text: "Playground survived 🩹" },
      { context: "Sports", text: "Turf burn 🩹" },
      { context: "Metaphor", text: "Temporary patch 🩹" },
      { context: "Self-care", text: "Rest day 🩹" },
    ],
    contextBlocks: [
      { title: "First aid lite", body: "🩹 signals small physical hurts — not ER emergencies." },
      { title: "Bandaid fix meme", body: "Workplaces call quick patches 🩹 when root cause stays unfixed." },
      { title: "Vs 🤕", body: "🤕 is face with bandage. 🩹 is the bandage product itself." },
    ],
    searchIntents: ["bandaid emoji", "🩹 meaning", "adhesive bandage emoji", "🩹 copy paste"],
    whenNotToUse: ["Avoid 🩹 alone for serious bleeding or fractures.", "Do not minimize mental-health crises with bandaid jokes."],
    faqs: [
      { question: "What does 🩹 mean?", answer: "Minor injury, bandage, self-care, or temporary fix metaphor." },
      { question: "🩹 vs injured face emoji?", answer: "Bandage is the product; injured face shows person hurt." },
    ],
  },

  "hiking-boot": {
    batchId: BATCH_ID,
    searchTitle: "Hiking Boot Emoji (🥾) Meaning: Trails, Gear, and Outdoor Adventures",
    snippetAnswer:
      "🥾 Hiking Boot marks trail gear — hiking trips, broken-in boots, national park plans, and outdoor adventure prep.",
    detailedParagraphs: [
      "Hiking Boot (🥾) shows a sturdy outdoor boot — Unicode's footwear symbol for trails, backpacking, and mountain treks.",
      "Hikers text 🥾 with trail conditions, blister jokes, and 'new boots need breaking in' updates.",
      "Pairs naturally with ⛰️ 🏞️ and 🌄 in adventure content — gear flex before summit photos.",
      "Metaphorically, 🥾 means ready for a hard path — new job, tough project — hiking metaphor in LinkedIn posts.",
    ],
    textingMeaning: "'Trail Saturday 🥾', 'Blisters incoming 🥾', 'Boots finally broken in 🥾'.",
    socialMeaning: "Hiking Instagram, thru-hiker TikTok, and outdoor brand posts lead with 🥾.",
    caution: "Indoor-only contexts with 🥾 feel performative — match emoji to actual outdoor plans.",
    examples: [
      { context: "Hike", text: "5am trailhead 🥾" },
      { context: "Gear", text: "New Salomons 🥾" },
      { context: "Trip", text: "Yosemite week 🥾" },
      { context: "Blisters", text: "Feet hate me 🥾" },
      { context: "Prep", text: "Lacing up 🥾" },
    ],
    contextBlocks: [
      { title: "Trail culture", body: "🥾 signals serious walking — not fashion sneakers on pavement." },
      { title: "Vs 👟", body: "👟 is sneaker/athletic shoe. 🥾 is hiking boot for rough terrain." },
      { title: "Pairs with parks", body: "National park threads combine 🥾 with 🏞️ for trip planning." },
    ],
    searchIntents: ["hiking boot emoji", "🥾 meaning", "hiking emoji", "🥾 copy paste"],
    whenNotToUse: ["Avoid 🥾 for city nightlife outfits.", "Do not glam unsafe trails without preparation context."],
    faqs: [
      { question: "What does 🥾 mean?", answer: "Hiking, trail gear, outdoor adventures, or 'tough path ahead' metaphor." },
      { question: "🥾 vs running shoe?", answer: "Hiking boot is for trails and backpacking; sneakers are for pavement/gym." },
    ],
  },

  "studio-microphone": {
    batchId: BATCH_ID,
    searchTitle: "Studio Microphone Emoji (🎙️) Meaning: Podcast, Streaming, and Recording",
    snippetAnswer:
      "🎙️ Studio Microphone means podcasting, streaming, voice recording, and creator-studio content — mic check energy.",
    detailedParagraphs: [
      "Studio Microphone (🎙️) shows a broadcast mic — Unicode's symbol for professional recording, podcasts, and live streams.",
      "Creators announce 🎙️ when launching episodes, going live on Twitch, or upgrading audio gear.",
      "Corporate webinars borrowed 🎙️ for virtual events during remote-work era — still reads creator-first.",
      "Vs 🎤 handheld mic: 🎙️ feels studio/broadcast; 🎤 feels stage karaoke and live performance.",
    ],
    textingMeaning: "'Podcast drop 🎙️', 'Live in 5 🎙️', 'Mic check 🎙️'.",
    socialMeaning: "Podcast promos, YouTube setup tours, and voice-actor bios tag 🎙️.",
    caution: "Hot mic mistakes make 🎙️ ironic — context for embarrassing audio leaks.",
    examples: [
      { context: "Podcast", text: "Episode 50 🎙️" },
      { context: "Stream", text: "Going live 🎙️" },
      { context: "Setup", text: "New interface 🎙️" },
      { context: "Recording", text: "Session tonight 🎙️" },
      { context: "Guest", text: "On the show 🎙️" },
    ],
    contextBlocks: [
      { title: "Creator economy", body: "🎙️ is default podcast/stream shorthand in bios and announcements." },
      { title: "Vs 🎤", body: "🎤 is handheld stage mic. 🎙️ is studio broadcast mic." },
      { title: "Audio quality flex", body: "Gear posts stack 🎙️ with headphones and interface photos." },
    ],
    searchIntents: ["studio microphone emoji", "🎙️ podcast emoji", "🎙️ meaning", "🎙️ copy paste"],
    whenNotToUse: ["Avoid 🎙️ for muted/no-audio situations without irony.", "Do not imply professional broadcast without disclosure."],
    faqs: [
      { question: "What does 🎙️ mean?", answer: "Podcasting, streaming, recording, or studio audio content." },
      { question: "🎙️ vs 🎤?", answer: "Studio mic is broadcast/podcast; handheld mic is stage/karaoke." },
    ],
  },

  coffin: {
    batchId: BATCH_ID,
    searchTitle: "Coffin Emoji (⚰️) Meaning: Halloween, Dark Humor, and Mortality Memes",
    snippetAnswer:
      "⚰️ Coffin marks mortality humor — Halloween, goth aesthetic, 'I'm dead' exaggeration, and dark meme tone (use carefully around grief).",
    detailedParagraphs: [
      "Coffin (⚰️) shows a burial casket — Unicode's symbol for death, Halloween decor, and morbid humor when context is clearly playful.",
      "Gen Z uses ⚰️ adjacent to 💀 for 'I'm dead' laughter — overlapping but ⚰️ feels darker and more Halloween.",
      "Goth and horror creators use ⚰️ in October content year-round sparingly — aesthetic, not literal obituaries.",
      "Never send ⚰️ to someone actively grieving — can cause real harm regardless of meme intent.",
    ],
    textingMeaning: "'Halloween mood ⚰️', 'Bury me ⚰️ (joke)', 'Spooky season ⚰️'.",
    socialMeaning: "Horror TikTok, Halloween Instagram, and dark aesthetic boards tag ⚰️.",
    caution: "Avoid ⚰️ with bereaved friends, death announcements, or real tragedy threads.",
    examples: [
      { context: "Halloween", text: "Decor up ⚰️" },
      { context: "Meme", text: "Schedule packed ⚰️" },
      { context: "Horror", text: "Movie night ⚰️" },
      { context: "Goth", text: "Aesthetic ⚰️🖤" },
      { context: "Exaggeration", text: "Monday got me ⚰️" },
    ],
    contextBlocks: [
      { title: "Halloween peak", body: "⚰️ usage spikes October — horror parties and costume planning." },
      { title: "Vs 💀", body: "💀 is laugh/'I'm dead'. ⚰️ is darker mortality and spooky decor." },
      { title: "Grief boundary", body: "Playful ⚰️ requires audience who shares meme context — never default." },
    ],
    searchIntents: ["coffin emoji meaning", "⚰️ halloween emoji", "⚰️ copy paste", "coffin emoji"],
    whenNotToUse: ["Never toward grieving people.", "Avoid on obituary or memorial posts."],
    faqs: [
      { question: "What does ⚰️ mean?", answer: "Often Halloween, dark humor, or exaggerated 'I'm done' — rarely literal death news." },
      { question: "⚰️ vs skull emoji?", answer: "Skull is Gen Z laughter; coffin is spookier Halloween/mortality tone." },
    ],
  },

  shield: {
    batchId: BATCH_ID,
    searchTitle: "Shield Emoji (🛡️) Meaning: Protection, Gaming, Security, and Defense",
    snippetAnswer:
      "🛡️ Shield means protection — cybersecurity, gaming defense, emotional boundaries, and 'I've got your back' support.",
    detailedParagraphs: [
      "Shield (🛡️) shows a medieval-style shield — Unicode's symbol for defense, security products, and blocking harm.",
      "Gamers text 🛡️ for tank roles, armor upgrades, and blocking attacks in MMO and MOBA chats.",
      "Cybersecurity marketing loves 🛡️ — VPN ads, antivirus threads, and infosec Twitter avatars.",
      "Supportive friends send 🛡️ metaphorically — 'I'll shield you from drama' — protective not violent.",
    ],
    textingMeaning: "'VPN on 🛡️', 'Tank main 🛡️', 'Boundary up 🛡️'.",
    socialMeaning: "Gaming clips, security product promos, and boundary-setting posts use 🛡️.",
    caution: "🛡️ in political fights can read militaristic — clarify protective vs aggressive intent.",
    examples: [
      { context: "Gaming", text: "Build armor 🛡️" },
      { context: "Security", text: "2FA enabled 🛡️" },
      { context: "Support", text: "I got you 🛡️" },
      { context: "Privacy", text: "Lock down 🛡️" },
      { context: "Defense", text: "Block spam 🛡️" },
    ],
    contextBlocks: [
      { title: "Gaming tanks", body: "🛡️ identifies protector roles — shields, armor, absorb damage." },
      { title: "Cybersecurity", body: "Infosec content uses 🛡️ for firewalls, MFA, and safe browsing." },
      { title: "Vs ⚔️", body: "⚔️ is attack/combat. 🛡️ is defense/protection." },
    ],
    searchIntents: ["shield emoji meaning", "🛡️ protection emoji", "🛡️ gaming", "🛡️ copy paste"],
    whenNotToUse: ["Avoid 🛡️ in real-world violence contexts.", "Do not mock trauma survivors' boundaries."],
    faqs: [
      { question: "What does 🛡️ mean?", answer: "Protection, security, gaming defense, or emotional backup." },
      { question: "🛡️ in games?", answer: "Often tank role, armor, or blocking damage — standard gaming shorthand." },
    ],
  },
};
