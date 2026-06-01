import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "18-travel-places-transit";

/** Batch 18 — high-intent travel transport, places, and weather (clocks/moon phases deferred). */
export const batch18TravelPlacesTransit: Record<string, EmojiBatchEnrichment> = {
  tram: {
    batchId: BATCH_ID,
    searchTitle: "Tram Emoji (🚊) Meaning: Streetcar, Urban Transit, and City Travel",
    snippetAnswer:
      "🚊 Tram marks streetcar and light-rail transit — European city travel, downtown loops, and tram-friendly urban tourism.",
    detailedParagraphs: [
      "Tram (🚊) shows a street-level rail car — Unicode symbol for trams common in Lisbon, Prague, Melbourne, and San Francisco.",
      "Urban travelers text 🚊 for hop-on city tours and commute updates on lines that run mixed with traffic.",
      "Distinct from 🚈 light rail in casual use — 🚊 reads classic streetcar on embedded tracks.",
    ],
    textingMeaning: "'Take the 🚊', 'Tram 28 🚊', 'Downtown loop 🚊'.",
    socialMeaning: "Europe travel vlogs, urbanism posts, and city guide reels tag 🚊.",
    caution: "Clarify city — tram systems differ globally.",
    examples: [
      { context: "Travel", text: "Lisbon line 28 🚊" },
      { context: "Commute", text: "Tram delayed 🚊" },
      { context: "Tour", text: "Hop on 🚊" },
      { context: "City", text: "Car-free day 🚊" },
      { context: "Meet", text: "Central stop 🚊" },
    ],
    contextBlocks: [
      { title: "European cities", body: "🚊 instantly signals tram-heavy destinations — photos on rails in streets." },
      { title: "Vs 🚋", body: "🚋 is tram car alternate. 🚊 is full tram vehicle." },
      { title: "Vs 🚌", body: "🚌 is bus on rubber tires. 🚊 is rail streetcar." },
    ],
    searchIntents: ["tram emoji", "🚊 streetcar", "🚊 meaning", "tram emoji copy paste"],
    whenNotToUse: ["Avoid for long-distance intercity rail — 🚆 may fit better."],
    faqs: [
      { question: "What does 🚊 mean?", answer: "Tram/streetcar urban transit and city travel." },
      { question: "🚊 vs light rail?", answer: "Often used interchangeably; tram emphasizes street-level classic lines." },
    ],
  },

  monorail: {
    batchId: BATCH_ID,
    searchTitle: "Monorail Emoji (🚝) Meaning: Theme Parks, Airports, and Elevated Transit",
    snippetAnswer:
      "🚝 Monorail means elevated single-rail transit — Disney parks, airport links, and futuristic city transport posts.",
    detailedParagraphs: [
      "Monorail (🚝) depicts train on a single beam — Unicode symbol tied to theme parks and airport connectors.",
      "Disney fans treat 🚝 as park icon — 'monorail loop' is ritual before Magic Kingdom days.",
      "Urban planners showcase 🚝 for elevated systems that skip street traffic.",
    ],
    textingMeaning: "'Monorail to park 🚝', 'Airport link 🚝', 'Elevated ride 🚝'.",
    socialMeaning: "Theme park TikTok, Orlando travel, and transit nerd threads use 🚝.",
    caution: "Not every elevated train is monorail — add city name.",
    examples: [
      { context: "Disney", text: "Resort loop 🚝" },
      { context: "Airport", text: "Terminal link 🚝" },
      { context: "Travel", text: "First ride 🚝" },
      { context: "Transit", text: "Beam train 🚝" },
      { context: "Park day", text: "Monorail countdown 🚝" },
    ],
    contextBlocks: [
      { title: "Theme park culture", body: "🚝 is Disney-adjacent shorthand for vacation arrival energy." },
      { title: "Vs 🚄", body: "🚄 is high-speed rail. 🚝 is single-beam elevated system." },
      { title: "Airport links", body: "Many airports brand monorail connectors — 🚝 tags those trips." },
    ],
    searchIntents: ["monorail emoji", "🚝 meaning", "disney monorail emoji", "🚝 copy paste"],
    whenNotToUse: ["Avoid calling regular metro monorail without accuracy."],
    faqs: [
      { question: "What does 🚝 mean?", answer: "Monorail transit — theme parks, airports, elevated beam trains." },
      { question: "Why Disney association?", answer: "Orlando and Anaheim monorails made 🚝 iconic in park travel content." },
    ],
  },

  "mountain-railway": {
    batchId: BATCH_ID,
    searchTitle: "Mountain Railway Emoji (🚞) Meaning: Cog Trains, Alps, and Scenic Rail",
    snippetAnswer:
      "🚞 Mountain Railway marks cog and rack railways — Alpine ascents, scenic mountain trains, and steep incline tourism.",
    detailedParagraphs: [
      "Mountain Railway (🚞) shows train climbing slopes — Unicode symbol for Jungfrau, Darjeeling, and cogwheel scenic lines.",
      "Hikers pair 🚞 with summit plans when rail replaces hours of climbing.",
      "Rail enthusiasts collect 🚞 posts from world's steepest adhesion and cog routes.",
    ],
    textingMeaning: "'Cog train up 🚞', 'Alpine rail 🚞', 'Scenic ascent 🚞'.",
    socialMeaning: "Switzerland travel, mountain TikTok, and train photography tag 🚞.",
    caution: "Weather can cancel mountain rail — check service in text.",
    examples: [
      { context: "Alps", text: "Jungfraujoch 🚞" },
      { context: "Scenic", text: "Climb views 🚞" },
      { context: "Hike combo", text: "Rail then trail 🚞" },
      { context: "Ticket", text: "Steep line booked 🚞" },
      { context: "Photo", text: "Window seat 🚞" },
    ],
    contextBlocks: [
      { title: "Cog railways", body: "🚞 signals trains built for extreme grades — tourist bucket lists." },
      { title: "Vs 🚂", body: "🚂 is generic steam. 🚞 is mountain incline specialist." },
      { title: "Vs 🚅", body: "Bullet trains speed flat. 🚞 climbs mountains slowly scenic." },
    ],
    searchIntents: ["mountain railway emoji", "🚞 cog train", "🚞 meaning", "scenic railway emoji"],
    whenNotToUse: ["Avoid for flat commuter rail."],
    faqs: [
      { question: "What does 🚞 mean?", answer: "Mountain/scenic railway — steep cog trains and Alpine tourism." },
      { question: "🚞 examples?", answer: "Swiss Alps, Himalayan hill railways, other cog scenic lines." },
    ],
  },

  "oncoming-bus": {
    batchId: BATCH_ID,
    searchTitle: "Oncoming Bus Emoji (🚍) Meaning: Bus Commute, Transit, and City Travel",
    snippetAnswer:
      "🚍 Oncoming Bus marks bus transit — commute updates, city travel, school runs, and 'bus is here' arrival texts.",
    detailedParagraphs: [
      "Oncoming Bus (🚍) shows bus from front — Unicode pairs with 🚌 side view for transit messaging.",
      "Students and commuters text 🚍 when running for the stop or venting delays.",
      "Travelers use 🚍 for intercity coach trips and hop-on hop-off tour buses.",
    ],
    textingMeaning: "'Bus in 2 min 🚍', 'Missed it 🚍', 'Coach to Boston 🚍'.",
    socialMeaning: "Commute memes, budget travel, and public transit advocacy tag 🚍.",
    caution: "Night bus safety varies by city — practical advice beats emoji alone.",
    examples: [
      { context: "Commute", text: "Late again 🚍" },
      { context: "School", text: "Catch the 🚍" },
      { context: "Travel", text: "Overnight coach 🚍" },
      { context: "Tour", text: "Hop-on 🚍" },
      { context: "Arrival", text: "It's here 🚍" },
    ],
    contextBlocks: [
      { title: "Daily commute", body: "🚍 is universal bus-arrival ping in group chats." },
      { title: "Vs 🚌", body: "🚌 side view vs 🚍 oncoming — same bus, different angle." },
      { title: "Budget travel", body: "Backpackers post 🚍 for cheap intercity coaches." },
    ],
    searchIntents: ["bus emoji", "🚍 oncoming bus", "🚍 meaning", "bus commute emoji"],
    whenNotToUse: ["Avoid for school bus specifically — 🚌 with context works."],
    faqs: [
      { question: "What does 🚍 mean?", answer: "Bus transit — commute, travel, arrival, or delay vents." },
      { question: "🚍 vs 🚌?", answer: "Same bus — oncoming front view vs side view." },
    ],
  },

  "oncoming-taxi": {
    batchId: BATCH_ID,
    searchTitle: "Oncoming Taxi Emoji (🚖) Meaning: Cab Ride, Airport Pickup, and City Hops",
    snippetAnswer:
      "🚖 Oncoming Taxi means cab rides — airport pickups, late-night hops, Uber/Lyft context, and 'taxi's here' updates.",
    detailedParagraphs: [
      "Oncoming Taxi (🚖) shows yellow cab from front — Unicode symbol for taxi service globally (colors vary by city).",
      "Travelers text 🚖 landing at JFK or Vegas strip hops — expense venting included.",
      "Ride-share users borrow 🚖 for any hired car even when not literal taxi medallion.",
    ],
    textingMeaning: "'Cab outside 🚖', 'Split fare 🚖', 'Airport line 🚖'.",
    socialMeaning: "Travel expense threads, NYC content, and nightlife safe-ride posts use 🚖.",
    caution: "Verify licensed rides — emoji doesn't mean safe driver.",
    examples: [
      { context: "Airport", text: "Queue forever 🚖" },
      { context: "Night out", text: "Safe ride 🚖" },
      { context: "Travel", text: "Hotel hop 🚖" },
      { context: "Expense", text: "That fare hurt 🚖" },
      { context: "Arrival", text: "Driver here 🚖" },
    ],
    contextBlocks: [
      { title: "Airport ritual", body: "🚍/🚖 debates after landing — taxi line vs transit." },
      { title: "Vs 🚕", body: "🚕 is side-view taxi. 🚖 is oncoming cab." },
      { title: "Ride-share", body: "Users generalize 🚖 to any app-hailed car." },
    ],
    searchIntents: ["taxi emoji", "🚖 meaning", "cab emoji", "🚖 copy paste"],
    whenNotToUse: ["Avoid implying endorsement of unsafe operators."],
    faqs: [
      { question: "What does 🚖 mean?", answer: "Taxi or hired car ride — pickup, fare, city travel." },
      { question: "🚖 for Uber?", answer: "Casually yes — generic hired ride shorthand." },
    ],
  },

  "oncoming-automobile": {
    batchId: BATCH_ID,
    searchTitle: "Oncoming Automobile Emoji (🚘) Meaning: Driving, Road Trip, and Car Arrival",
    snippetAnswer:
      "🚘 Oncoming Automobile marks car travel — road trips, pickup arrivals, new car flex, and driving commute updates.",
    detailedParagraphs: [
      "Oncoming Automobile (🚘) shows car from front — Unicode symbol for personal vehicle travel vs side-view 🚗.",
      "Friends text 🚘 'outside your house' for pickups — classic pre-GPS coordination.",
      "Road trip posts lead with 🚘 alongside maps and mileage brags.",
    ],
    textingMeaning: "'Be there in 5 🚘', 'Road trip 🚘', 'New ride 🚘'.",
    socialMeaning: "Road trip Instagram, car culture TikTok, and commute vents tag 🚘.",
    caution: "Don't text 🚘 while driving.",
    examples: [
      { context: "Pickup", text: "Pulling up 🚘" },
      { context: "Road trip", text: "Miles today 🚘" },
      { context: "New car", text: "Garage day 🚘" },
      { context: "Commute", text: "Traffic hell 🚘" },
      { context: "ETA", text: "Ten out 🚘" },
    ],
    contextBlocks: [
      { title: "Pickup shorthand", body: "🚘 means 'I'm in the car coming' — universal friend code." },
      { title: "Vs 🚗", body: "🚗 side profile vs 🚘 oncoming front." },
      { title: "Road trips", body: "🚘 opens highway vacation content — national parks, coast drives." },
    ],
    searchIntents: ["car emoji oncoming", "🚘 meaning", "automobile emoji", "🚘 copy paste"],
    whenNotToUse: ["Never while operating vehicle.", "Avoid after DUI tragedy news locally."],
    faqs: [
      { question: "What does 🚘 mean?", answer: "Car travel — pickup, commute, road trip, new car." },
      { question: "🚘 vs 🚗?", answer: "Oncoming front vs side view — same car concept." },
    ],
  },

  "articulated-lorry": {
    batchId: BATCH_ID,
    searchTitle: "Articulated Lorry Emoji (🚛) Meaning: Semi Trucks, Freight, and Highway Haul",
    snippetAnswer:
      "🚛 Articulated Lorry means semi-truck freight — logistics, truckers, highway travel, and supply chain posts.",
    detailedParagraphs: [
      "Articulated Lorry (🚛) shows cab and trailer — Unicode symbol for big rig haulage (UK 'lorry', US 'semi').",
      "Truckers and logistics workers text 🚛 for haul updates, weigh stations, and long shift vents.",
      "Supply chain memes during shortages put 🚛 in headlines about freight backlogs.",
    ],
    textingMeaning: "'On the road 🚛', 'Haul complete 🚛', 'DOT inspection 🚛'.",
    socialMeaning: "Trucking TikTok, logistics Twitter, and highway travel posts use 🚛.",
    caution: "Highway crash news makes casual 🚛 jokes sensitive.",
    examples: [
      { context: "Haul", text: "500 miles today 🚛" },
      { context: "Work", text: "Overnight run 🚛" },
      { context: "Logistics", text: "Freight moving 🚛" },
      { context: "Rest stop", text: "Coffee break 🚛" },
      { context: "Career", text: "CDL life 🚛" },
    ],
    contextBlocks: [
      { title: "Trucker culture", body: "🚛 identifies long-haul community — miles, diners, weigh scales." },
      { title: "Vs 🚚", body: "🚚 is delivery box truck. 🚛 is articulated semi trailer." },
      { title: "Supply chain", body: "News posts use 🚛 when discussing freight and port backlogs." },
    ],
    searchIntents: ["truck emoji", "🚛 semi truck", "lorry emoji", "🚛 meaning"],
    whenNotToUse: ["Avoid glam during fatal highway accidents in news."],
    faqs: [
      { question: "What does 🚛 mean?", answer: "Semi-truck/articulated lorry — freight, trucking, logistics." },
      { question: "🚛 vs delivery truck?", answer: "Semi is long-haul trailer; delivery truck is local parcels." },
    ],
  },

  tractor: {
    batchId: BATCH_ID,
    searchTitle: "Tractor Emoji (🚜) Meaning: Farming, Rural Life, and Agriculture",
    snippetAnswer:
      "🚜 Tractor marks farming and rural life — harvest season, country living, and agriculture industry posts.",
    detailedParagraphs: [
      "Tractor (🚜) shows farm vehicle — Unicode symbol for agriculture, rural identity, and harvest work.",
      "Farm families post 🚜 during planting and harvest — dawn-to-dusk season rhythm.",
      "Metaphorically, 'city person meets 🚜' jokes contrast urban vs rural culture clash.",
    ],
    textingMeaning: "'Harvest week 🚜', 'On the farm 🚜', 'County fair 🚜'.",
    socialMeaning: "Ag TikTok, rural lifestyle Instagram, and FFA content tag 🚜.",
    caution: "Farm stress and drought years make 🚜 celebration tone-sensitive locally.",
    examples: [
      { context: "Harvest", text: "Long days 🚜" },
      { context: "Planting", text: "Fields ready 🚜" },
      { context: "Fair", text: "Tractor pull 🚜" },
      { context: "Rural", text: "Home for break 🚜" },
      { context: "Work", text: "Ag season 🚜" },
    ],
    contextBlocks: [
      { title: "Harvest calendar", body: "🚜 spikes during planting and harvest months in farm regions." },
      { title: "Rural identity", body: "🚜 signals country roots in bios and hometown posts." },
      { title: "Vs 🌾", body: "🌾 is crop/grain. 🚜 is farm machinery work." },
    ],
    searchIntents: ["tractor emoji", "🚜 farming", "🚜 meaning", "farm emoji"],
    whenNotToUse: ["Avoid mocking rural communities.", "Do not use for construction equipment."],
    faqs: [
      { question: "What does 🚜 mean?", answer: "Farming, tractors, harvest, and rural/agriculture life." },
      { question: "🚜 urban jokes?", answer: "Sometimes contrasts city vs country — context decides tone." },
    ],
  },

  "auto-rickshaw": {
    batchId: BATCH_ID,
    searchTitle: "Auto Rickshaw Emoji (🛺) Meaning: Tuk-Tuk, India Travel, and Street Rides",
    snippetAnswer:
      "🛺 Auto Rickshaw means tuk-tuk rides — India, Thailand, and Global South street transport, bargain fares, and chaotic fun.",
    detailedParagraphs: [
      "Auto Rickshaw (🛺) shows three-wheeler taxi — Unicode symbol for tuk-tuks across South and Southeast Asia.",
      "Backpackers text 🛺 with fare haggling stories and 'hold on tight' ride videos.",
      "Local commuters use 🛺 daily — emoji tags both tourism novelty and real transit.",
    ],
    textingMeaning: "'Tuk-tuk to temple 🛺', 'Negotiate fare 🛺', 'Wild ride 🛺'.",
    socialMeaning: "India travel vlogs, Bangkok content, and gap-year posts lead with 🛺.",
    caution: "Safety varies — helmet and driver checks matter more than emoji.",
    examples: [
      { context: "India", text: "Delhi hop 🛺" },
      { context: "Bargain", text: "Quoted half 🛺" },
      { context: "Chaos", text: "Best ride ever 🛺" },
      { context: "Commute", text: "Daily tuk 🛺" },
      { context: "Tour", text: "Old city loop 🛺" },
    ],
    contextBlocks: [
      { title: "Tuk-tuk tourism", body: "🛺 is quintessential Southeast Asia travel emoji — noisy, open-air, fun." },
      { title: "Fare haggling", body: "Travel threads about 🛺 always mention negotiating price." },
      { title: "Vs 🚕", body: "🚕 is four-wheel cab. 🛺 is three-wheel auto rickshaw." },
    ],
    searchIntents: ["tuk tuk emoji", "🛺 auto rickshaw", "🛺 meaning india", "rickshaw emoji"],
    whenNotToUse: ["Avoid stereotyping countries by 🛺 alone.", "Do not glam unsafe operators."],
    faqs: [
      { question: "What does 🛺 mean?", answer: "Auto rickshaw/tuk-tuk — street hired rides in Asia and beyond." },
      { question: "🛺 only India?", answer: "Common in India but also Thailand, Sri Lanka, Egypt, etc." },
    ],
  },

  canoe: {
    batchId: BATCH_ID,
    searchTitle: "Canoe Emoji (🛶) Meaning: Paddling, Lakes, and Quiet Water Trips",
    snippetAnswer:
      "🛶 Canoe means paddling trips — lakes, rivers, camping portages, and calm outdoor adventure without motor.",
    detailedParagraphs: [
      "Canoe (🛶) shows simple paddle boat — Unicode symbol for quiet water recreation and canoe-camping culture.",
      "Outdoors groups plan 🛶 weekends with portage maps and bug spray jokes.",
      "Contrasts with 🛥️ motorboat — human-powered, slower, mindful travel.",
    ],
    textingMeaning: "'Lake paddle 🛶', 'Portage day 🛶', 'Sunrise on water 🛶'.",
    socialMeaning: "Boundary Waters content, Canadian cottage culture, and scout trips tag 🛶.",
    caution: "Wear PFD — 🛶 posts should model safety on open water.",
    examples: [
      { context: "Camp", text: "Portage loaded 🛶" },
      { context: "Lake", text: "Mirror water 🛶" },
      { context: "Trip", text: "BWCA week 🛶" },
      { context: "Dawn", text: "Paddle out 🛶" },
      { context: "Scouts", text: "Badge trip 🛶" },
    ],
    contextBlocks: [
      { title: "Canoe camping", body: "🛶 signals multi-day paddle trips — tents on shore." },
      { title: "Vs 🚣", body: "🚣 is rowboat activity. 🛶 is the canoe vessel." },
      { title: "Vs kayak", body: "Canoe emoji is open canoe; kayaks use different boats often." },
    ],
    searchIntents: ["canoe emoji", "🛶 meaning", "canoe emoji copy paste", "paddling emoji"],
    whenNotToUse: ["Avoid without water safety context on rough rivers."],
    faqs: [
      { question: "What does 🛶 mean?", answer: "Canoe paddling — lakes, rivers, camping, quiet outdoors." },
      { question: "🛶 vs motorboat?", answer: "Canoe is human-powered; motorboat has engine." },
    ],
  },

  "police-car-light": {
    batchId: BATCH_ID,
    searchTitle: "Police Car Light Emoji (🚨) Meaning: Emergency, Alerts, and Sirens",
    snippetAnswer:
      "🚨 Police Car Light means emergency alert — sirens, breaking news, urgent warnings, and 'pay attention' drama.",
    detailedParagraphs: [
      "Police Car Light (🚨) shows rotating beacon — Unicode symbol for police, fire, and ambulance urgency.",
      "Group chats spam 🚨 when big news drops — album releases, sports trades, or real emergencies.",
      "Apps borrowed 🚨 for notification design — urgency without words.",
    ],
    textingMeaning: "'🚨 read this', 'Emergency 🚨', 'Sirens outside 🚨'.",
    socialMeaning: "Breaking news Twitter, true crime podcasts, and alert memes use 🚨.",
    caution: "Real disasters deserve seriousness — don't only meme 🚨 during crises.",
    examples: [
      { context: "Alert", text: "🚨 thread" },
      { context: "News", text: "Trade deadline 🚨" },
      { context: "Urgent", text: "Call me 🚨" },
      { context: "Outside", text: "Sirens all night 🚨" },
      { context: "Drop", text: "Album midnight 🚨" },
    ],
    contextBlocks: [
      { title: "Breaking alert", body: "🚨 prefixes urgent messages — gossip or genuine emergency." },
      { title: "Vs 🚔", body: "🚔 is police car. 🚨 is flashing light urgency symbol." },
      { title: "Notification design", body: "Red 🚨 mimics emergency beacon in UI metaphors." },
    ],
    searchIntents: ["police light emoji", "🚨 siren emoji", "🚨 meaning", "alert emoji"],
    whenNotToUse: ["Avoid joking 🚨 during active mass emergencies.", "Do not cry wolf repeatedly."],
    faqs: [
      { question: "What does 🚨 mean?", answer: "Emergency, urgency, sirens, or breaking alert tone." },
      { question: "🚨 non-police uses?", answer: "Yes — any 'stop and read this' urgency including fandom news." },
    ],
  },

  "aerial-tramway": {
    batchId: BATCH_ID,
    searchTitle: "Aerial Tramway Emoji (🚡) Meaning: Cable Car, Ski Resorts, and Mountain Views",
    snippetAnswer:
      "🚡 Aerial Tramway means cable cars — ski resorts, mountain sightseeing, and suspended urban gondolas.",
    detailedParagraphs: [
      "Aerial Tramway (🚡) shows cabin on cable — Unicode symbol for tourist gondolas and ski hill transport.",
      "Ski trips text 🚡 for lodge-to-summit rides and whiteout day cancellations.",
      "City gondolas (Portland, Medellín) expand 🚡 beyond ski into urban tourism.",
    ],
    textingMeaning: "'Gondola up 🚡', 'Summit views 🚡', 'Lines long 🚡'.",
    socialMeaning: "Ski Instagram, mountain travel, and cable car POV reels tag 🚡.",
    caution: "High wind closes 🚡 lines — check ops status.",
    examples: [
      { context: "Ski", text: "First chair 🚡" },
      { context: "View", text: "Summit POV 🚡" },
      { context: "Queue", text: "Hour wait 🚡" },
      { context: "Travel", text: "Medellín metro 🚡" },
      { context: "Closed", text: "Wind hold 🚡" },
    ],
    contextBlocks: [
      { title: "Ski culture", body: "🚡 is lift-line flex and summit selfie shorthand." },
      { title: "Vs 🚠", body: "🚠 is mountain cableway variant — similar ski/resort use." },
      { title: "Urban gondolas", body: "Some cities use 🚡 for commuter aerial lines." },
    ],
    searchIntents: ["cable car emoji", "🚡 aerial tramway", "🚡 gondola", "🚡 meaning"],
    whenNotToUse: ["Avoid when lifts closed for safety without noting it."],
    faqs: [
      { question: "What does 🚡 mean?", answer: "Aerial tram/gondola — ski resorts, mountains, sightseeing." },
      { question: "🚡 vs ski lift?", answer: "Tramway often enclosed cabin on cable; chairlifts differ." },
    ],
  },

  "mountain-cableway": {
    batchId: BATCH_ID,
    searchTitle: "Mountain Cableway Emoji (🚠) Meaning: Ski Lifts, Alps, and Peak Access",
    snippetAnswer:
      "🚠 Mountain Cableway marks mountain cable cars — Alpine access, ski tourism, and scenic peak transport.",
    detailedParagraphs: [
      "Mountain Cableway (🚠) depicts small cable car box — Unicode pairs with 🚡 for lift infrastructure.",
      "European ski holidays center 🚠 in daily logistics — village to mid-mountain runs.",
      "Summer mountain tourism uses same 🚠 for hiking trailheads without snow.",
    ],
    textingMeaning: "'Cable car day 🚠', 'Mid-station 🚠', 'Alpine views 🚠'.",
    socialMeaning: "Alps travel, ski vlogs, and hiking access posts use 🚠.",
    caution: "Altitude and weather affect 🚠 operations.",
    examples: [
      { context: "Ski", text: "Blue run from 🚠" },
      { context: "Hike", text: "Trailhead 🚠" },
      { context: "Alps", text: "Zermatt views 🚠" },
      { context: "Summer", text: "Hiking season 🚠" },
      { context: "Ticket", text: "Pass scanned 🚠" },
    ],
    contextBlocks: [
      { title: "Alpine tourism", body: "🚠 opens mountain resort storytelling — winter and summer." },
      { title: "Vs 🚡", body: "Both cable systems — platform art differs, meaning overlaps." },
      { title: "Vs ⛷️", body: "⛷️ is skier person. 🚠 is lift transport." },
    ],
    searchIntents: ["mountain cableway emoji", "🚠 ski lift", "🚠 meaning", "cable car emoji"],
    whenNotToUse: ["Don't confuse with urban tram 🚊."],
    faqs: [
      { question: "What does 🚠 mean?", answer: "Mountain cable car — ski and hiking resort access." },
      { question: "🚠 vs 🚡?", answer: "Very similar — both aerial mountain cable transport." },
    ],
  },

  "suspension-railway": {
    batchId: BATCH_ID,
    searchTitle: "Suspension Railway Emoji (🚟) Meaning: Hanging Rail, Wuppertal, and Futuristic Transit",
    snippetAnswer:
      "🚟 Suspension Railway means hanging monorail-style transit — Wuppertal Schwebebahn niche and futuristic elevated rail.",
    detailedParagraphs: [
      "Suspension Railway (🚟) shows train suspended under rail — Unicode symbol for rare hanging rail systems.",
      "Transit nerds post 🚟 for Wuppertal Germany and other inverted monorails.",
      "General users may confuse 🚟 with monorail 🚝 — add city names for clarity.",
    ],
    textingMeaning: "'Schwebebahn 🚟', 'Hanging train 🚟', 'Transit nerd trip 🚟'.",
    socialMeaning: "Urban exploration, Germany travel, and infrastructure photography tag 🚟.",
    caution: "Obscure emoji — explain for non-transit audiences.",
    examples: [
      { context: "Germany", text: "Wuppertal ride 🚟" },
      { context: "Nerd", text: "Bucket list 🚟" },
      { context: "Photo", text: "Under the rail 🚟" },
      { context: "Transit", text: "Inverted train 🚟" },
      { context: "Travel", text: "Infrastructure tour 🚟" },
    ],
    contextBlocks: [
      { title: "Wuppertal icon", body: "🚟 strongly ties to Schwebebahn — unique hanging railway." },
      { title: "Vs 🚝", body: "Monorail rides atop beam. Suspension hangs below." },
      { title: "Niche tourism", body: "Infrastructure tourists seek 🚟 systems worldwide." },
    ],
    searchIntents: ["suspension railway emoji", "🚟 meaning", "hanging train emoji", "🚟 wuppertal"],
    whenNotToUse: ["Avoid claiming all elevated trains are suspension type."],
    faqs: [
      { question: "What does 🚟 mean?", answer: "Suspension/hanging railway — rare inverted rail transit." },
      { question: "Where famous?", answer: "Wuppertal Schwebebahn in Germany is the classic example." },
    ],
  },

  satellite: {
    batchId: BATCH_ID,
    searchTitle: "Satellite Emoji (🛰️) Meaning: Space, Orbit, and Tech Connectivity",
    snippetAnswer:
      "🛰️ Satellite marks space orbit — Starlink, GPS, space launches, and 'signal from above' tech metaphors.",
    detailedParagraphs: [
      "Satellite (🛰️) shows orbital spacecraft — Unicode symbol for space industry and satellite internet.",
      "Space enthusiasts live-post 🛰️ during launches and ISS pass predictions.",
      "Tech threads pair 🛰️ with 📡 for ground-to-orbit connectivity jokes.",
    ],
    textingMeaning: "'Launch tonight 🛰️', 'Starlink up 🛰️', 'ISS pass 🛰️'.",
    socialMeaning: "Space Twitter, Elon launch streams, and astronomy apps reference 🛰️.",
    caution: "During satellite warfare news, casual 🛰️ may feel tone-deaf.",
    examples: [
      { context: "Launch", text: "Go Falcon 🛰️" },
      { context: "Stargaze", text: "ISS overhead 🛰️" },
      { context: "Internet", text: "Rural link 🛰️" },
      { context: "Space", text: "Orbit achieved 🛰️" },
      { context: "Track", text: "Pass at 9 🛰️" },
    ],
    contextBlocks: [
      { title: "Launch culture", body: "🛰️ spikes around SpaceX and satellite deployment news." },
      { title: "Vs 📡", body: "📡 is ground dish. 🛰️ is orbital spacecraft." },
      { title: "Connectivity", body: "Satellite internet marketing uses 🛰️ for rural broadband." },
    ],
    searchIntents: ["satellite emoji", "🛰️ meaning", "space satellite emoji", "🛰️ copy paste"],
    whenNotToUse: ["Avoid during space debris or military satellite incidents without care."],
    faqs: [
      { question: "What does 🛰️ mean?", answer: "Orbiting satellite — space, launches, GPS, satellite internet." },
      { question: "🛰️ vs 📡?", answer: "Satellite is in orbit; antenna is ground equipment." },
    ],
  },

  "roller-skate": {
    batchId: BATCH_ID,
    searchTitle: "Roller Skate Emoji (🛼) Meaning: Skating, Retro, and Rink Culture",
    snippetAnswer:
      "🛼 Roller Skate means quad skating — rink nights, retro fashion, derby, and TikTok skate revival trends.",
    detailedParagraphs: [
      "Roller Skate (🛼) shows classic quad skate — Unicode symbol distinct from inline blades.",
      "Skate revival posts pair 🛼 with disco fits and beach boardwalk clips.",
      "Roller derby community uses 🛼 for bout announcements and team pride.",
    ],
    textingMeaning: "'Rink night 🛼', 'Derby bout 🛼', 'Learning to stop 🛼'.",
    socialMeaning: "Roller skating TikTok, retro aesthetic, and derby leagues tag 🛼.",
    caution: "Pad up — wrist guards save beginners.",
    examples: [
      { context: "Rink", text: "Disco session 🛼" },
      { context: "Derby", text: "Home bout 🛼" },
      { context: "Learn", text: "First roll 🛼" },
      { context: "Retro", text: "Outfit check 🛼" },
      { context: "Boardwalk", text: "Sunset skate 🛼" },
    ],
    contextBlocks: [
      { title: "TikTok revival", body: "🛼 returned with pandemic-era outdoor skating trend." },
      { title: "Vs 🛹", body: "🛹 is skateboard. 🛼 is quad roller skate." },
      { title: "Derby", body: "Flat track derby identity uses 🛼 in team branding." },
    ],
    searchIntents: ["roller skate emoji", "🛼 meaning", "skating emoji", "🛼 copy paste"],
    whenNotToUse: ["Avoid for ice skating — ⛸️."],
    faqs: [
      { question: "What does 🛼 mean?", answer: "Roller skating — rink, derby, retro, outdoor skate culture." },
      { question: "🛼 vs inline?", answer: "Emoji shows quad skates; inline blades differ physically." },
    ],
  },

  "carousel-horse": {
    batchId: BATCH_ID,
    searchTitle: "Carousel Horse Emoji (🎠) Meaning: Merry-Go-Round, Carnivals, and Nostalgia",
    snippetAnswer:
      "🎠 Carousel Horse marks merry-go-rounds — carnivals, boardwalks, childhood nostalgia, and whimsical romance.",
    detailedParagraphs: [
      "Carousel Horse (🎠) shows ornate ride horse — Unicode symbol for fairgrounds and vintage amusement parks.",
      "Parents post 🎠 from county fairs and Disney carousel moments.",
      "Aesthetic accounts use 🎠 for cottagecore-adjacent vintage carnival mood.",
    ],
    textingMeaning: "'Fair day 🎠', 'Carousel spin 🎠', 'Nostalgia hit 🎠'.",
    socialMeaning: "Carnival Instagram, wedding carousel exits, and childhood throwbacks use 🎠.",
    caution: "Motion sickness jokes aside — wholesome default tone.",
    examples: [
      { context: "Fair", text: "Rides open 🎠" },
      { context: "Kids", text: "First spin 🎠" },
      { context: "Date", text: "Boardwalk 🎠" },
      { context: "Nostalgia", text: "Childhood summers 🎠" },
      { context: "Photo", text: "Golden hour 🎠" },
    ],
    contextBlocks: [
      { title: "County fair", body: "🎠 anchors Americana summer fair content." },
      { title: "Vs 🎡", body: "🎡 is Ferris wheel. 🎠 is carousel horse." },
      { title: "Romantic whimsy", body: "Carousel proposals and dates borrow 🎠 aesthetic." },
    ],
    searchIntents: ["carousel horse emoji", "🎠 merry go round", "🎠 meaning", "carousel emoji"],
    whenNotToUse: ["Avoid dark twists on child carnival content."],
    faqs: [
      { question: "What does 🎠 mean?", answer: "Carousel/merry-go-round — fairs, nostalgia, whimsical fun." },
      { question: "🎠 vs Ferris wheel?", answer: "Carousel horse vs big wheel ride — different fair icons." },
    ],
  },

  "department-store": {
    batchId: BATCH_ID,
    searchTitle: "Department Store Emoji (🏬) Meaning: Shopping Malls, Retail, and Black Friday",
    snippetAnswer:
      "🏬 Department Store means big-box shopping — malls, retail therapy, holiday sales, and urban commercial districts.",
    detailedParagraphs: [
      "Department Store (🏬) shows multi-floor shop — Unicode symbol for mall anchors and city retail blocks.",
      "Holiday shopping threads open with 🏬 — Black Friday, back-to-school, gift marathon.",
      "Urban planning posts discuss 🏬 vs downtown small business tension.",
    ],
    textingMeaning: "'Mall run 🏬', 'Sale starts 🏬', 'Gift marathon 🏬'.",
    socialMeaning: "Retail TikTok, mall nostalgia, and Black Friday coverage tag 🏬.",
    caution: "Consumerism brags can feel insensitive during economic stress.",
    examples: [
      { context: "Shopping", text: "All day 🏬" },
      { context: "Holiday", text: "Black Friday 🏬" },
      { context: "Gifts", text: "List crushing 🏬" },
      { context: "Meet", text: "Food court 🏬" },
      { context: "Urban", text: "Downtown retail 🏬" },
    ],
    contextBlocks: [
      { title: "Mall culture", body: "🏬 evokes suburban mall hangouts — teens, food court, cinema." },
      { title: "Vs 🛍️", body: "🛍️ is shopping bags. 🏬 is the store building." },
      { title: "Holiday peak", body: "🏬 surges November–December in retail content." },
    ],
    searchIntents: ["department store emoji", "🏬 mall emoji", "🏬 meaning", "shopping mall emoji"],
    whenNotToUse: ["Avoid flex during friends' financial hardship."],
    faqs: [
      { question: "What does 🏬 mean?", answer: "Department store/mall shopping — retail trips and sales." },
      { question: "🏬 vs shopping bags?", answer: "Building is venue; bags are purchase result." },
    ],
  },

  thermometer: {
    batchId: BATCH_ID,
    searchTitle: "Thermometer Emoji (🌡️) Meaning: Temperature, Fever, and Heat Waves",
    snippetAnswer:
      "🌡️ Thermometer marks temperature — fever checks, heat waves, cold snaps, and 'it's hot' weather posts.",
    detailedParagraphs: [
      "Thermometer (🌡️) shows mercury-style gauge — Unicode symbol for weather extremes and illness fever.",
      "Parents text 🌡️ with kid sick days; heat wave memes stack 🌡️ with 🔥.",
      "Climate posts use 🌡️ for record highs — science and activism context.",
    ],
    textingMeaning: "'Fever 🌡️', '100° again 🌡️', 'Stay inside 🌡️'.",
    socialMeaning: "Weather Twitter, flu season updates, and climate charts reference 🌡️.",
    caution: "Medical decisions need professionals — 🌡️ isn't diagnosis.",
    examples: [
      { context: "Sick", text: "Stay home 🌡️" },
      { context: "Heat", text: "Record high 🌡️" },
      { context: "Kid", text: "No school 🌡️" },
      { context: "Climate", text: "Trend line 🌡️" },
      { context: "Cold", text: "Freeze 🌡️⬇️" },
    ],
    contextBlocks: [
      { title: "Fever signal", body: "🌡️ tells boss or teacher someone is ill — quick visual." },
      { title: "Heat waves", body: "Summer posts combine 🌡️ with hydration reminders." },
      { title: "Vs 🤒", body: "🤒 is sick face. 🌡️ is temperature measurement tool." },
    ],
    searchIntents: ["thermometer emoji", "🌡️ meaning", "temperature emoji", "🌡️ fever"],
    whenNotToUse: ["Do not replace medical advice.", "Avoid joking during deadly heat emergencies locally."],
    faqs: [
      { question: "What does 🌡️ mean?", answer: "Temperature — fever, heat wave, cold, or climate data." },
      { question: "🌡️ for weather only?", answer: "Also illness fever — context from chat clarifies." },
    ],
  },

  "shooting-star": {
    batchId: BATCH_ID,
    searchTitle: "Shooting Star Emoji (🌠) Meaning: Wishes, Meteors, and Lucky Moments",
    snippetAnswer:
      "🌠 Shooting Star means meteors and wishes — Perseids watching, lucky breaks, and sparkly success posts.",
    detailedParagraphs: [
      "Shooting Star (🌠) shows streak across sky — Unicode symbol for meteor showers and make-a-wish folklore.",
      "Stargazers plan 🌠 nights for August Perseids and December Geminids.",
      "Metaphorically, 🌠 marks rare wins — 'shooting star moment' in career or sports.",
    ],
    textingMeaning: "'Make a wish 🌠', 'Meteor shower 🌠', 'Lucky break 🌠'.",
    socialMeaning: "Astrology-lite posts, meteor livestreams, and manifestation TikTok use 🌠.",
    caution: "Don't confuse with comet ☄️ — different astronomy.",
    examples: [
      { context: "Meteor", text: "Perseids peak 🌠" },
      { context: "Wish", text: "Saw one 🌠" },
      { context: "Luck", text: "Career 🌠 moment" },
      { context: "Date", text: "Blanket watch 🌠" },
      { context: "Photo", text: "Long exposure 🌠" },
    ],
    contextBlocks: [
      { title: "Meteor showers", body: "🌠 calendars peak during major annual showers." },
      { title: "Wish folklore", body: "Make-a-wish on 🌠 persists in casual superstition." },
      { title: "Vs ✨", body: "✨ is sparkles. 🌠 is specific meteor streak." },
    ],
    searchIntents: ["shooting star emoji", "🌠 meaning", "meteor emoji", "🌠 copy paste"],
    whenNotToUse: ["Avoid claiming manifestation science from 🌠 alone."],
    faqs: [
      { question: "What does 🌠 mean?", answer: "Shooting star/meteor — wishes, stargazing, lucky moments." },
      { question: "🌠 vs stars emoji?", answer: "Shooting star is moving meteor streak; ⭐ is static star." },
    ],
  },

  "milky-way": {
    batchId: BATCH_ID,
    searchTitle: "Milky Way Emoji (🌌) Meaning: Galaxy, Night Sky, and Astrophotography",
    snippetAnswer:
      "🌌 Milky Way means galaxy night skies — astrophotography, camping under stars, and cosmic aesthetic posts.",
    detailedParagraphs: [
      "Milky Way (🌌) depicts galactic band — Unicode symbol for deep sky beauty and space wonder.",
      "Photographers chase 🌌 with dark-sky maps — national parks and desert trips.",
      "Metaphorically, 🌌 scales to 'cosmic' perspective — small problems in vast universe posts.",
    ],
    textingMeaning: "'Dark sky camp 🌌', 'Galaxy core season 🌌', 'Mind blown 🌌'.",
    socialMeaning: "Astrophotography Instagram, camping reels, and space aesthetic boards tag 🌌.",
    caution: "Light pollution reality — not every camp shows 🌌 naked-eye.",
    examples: [
      { context: "Photo", text: "Core rising 🌌" },
      { context: "Camp", text: "No light pollution 🌌" },
      { context: "Trip", text: "Desert night 🌌" },
      { context: "Wonder", text: "Perspective 🌌" },
      { context: "Gear", text: "Tracker mount 🌌" },
    ],
    contextBlocks: [
      { title: "Astrophotography", body: "🌌 is holy grail shot for night sky photographers." },
      { title: "Vs 🌠", body: "🌠 is single meteor. 🌌 is whole galaxy band." },
      { title: "Dark sky parks", body: "Travel plans cite 🌌 for certified dark-sky destinations." },
    ],
    searchIntents: ["milky way emoji", "🌌 galaxy emoji", "🌌 meaning", "night sky emoji"],
    whenNotToUse: ["Avoid overpromising visible galaxy from city suburbs."],
    faqs: [
      { question: "What does 🌌 mean?", answer: "Milky Way galaxy — astrophotography, night sky, cosmic awe." },
      { question: "Can you see 🌌 everywhere?", answer: "Needs dark skies — rural/desert best; cities rarely show band." },
    ],
  },
};
