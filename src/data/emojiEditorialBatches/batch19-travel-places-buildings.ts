import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "19-travel-places-buildings";

/** Batch 19 — buildings, accessibility, timepieces, weather gear (clocks/moon phases stay premium). */
export const batch19TravelPlacesBuildings: Record<string, EmojiBatchEnrichment> = {
  brick: {
    batchId: BATCH_ID,
    searchTitle: "Brick Emoji (🧱) Meaning: Construction, Walls, and 'Built Different'",
    snippetAnswer:
      "🧱 Brick marks construction and barriers — renovation updates, Minecraft builds, gym 'brick wall' metaphors, and blocking someone online.",
    detailedParagraphs: [
      "Brick (🧱) shows a single red clay block — Unicode symbol for construction sites, DIY walls, and literal building projects.",
      "Gamers borrowed 🧱 from Minecraft culture — 'place a brick' means incremental progress or stubborn defense.",
      "Social slang uses 🧱 for emotional walls or getting blocked — context from thread tone matters.",
    ],
    textingMeaning: "'Renovation started 🧱', 'Hit a wall 🧱', 'Minecraft night 🧱'.",
    socialMeaning: "Home improvement reels, contractor humor, and gaming memes tag 🧱.",
    caution: "Blocking jokes can sting — know your audience before 🧱 someone.",
    examples: [
      { context: "Renovation", text: "Kitchen demo 🧱" },
      { context: "Gaming", text: "Fort night 🧱" },
      { context: "Gym", text: "Leg day wall 🧱" },
      { context: "Metaphor", text: "Emotional 🧱" },
      { context: "Site", text: "Foundation poured 🧱" },
    ],
    contextBlocks: [
      { title: "Construction updates", body: "🧱 signals active build — neighbors and family track remodel progress." },
      { title: "Gaming culture", body: "Minecraft made 🧱 shorthand for crafting and stacking effort." },
      { title: "Vs 🏗️", body: "🏗️ is crane site overview. 🧱 is single unit/material focus." },
    ],
    searchIntents: ["brick emoji", "🧱 meaning", "minecraft brick emoji", "🧱 copy paste"],
    whenNotToUse: ["Avoid for LEGO unless context is playful — 🧱 reads clay brick."],
    faqs: [
      { question: "What does 🧱 mean?", answer: "Brick — construction, walls, gaming builds, or blocking metaphors." },
      { question: "🧱 for getting blocked?", answer: "Yes in slang — 'bricked' or 🧱 can mean blocked online." },
    ],
  },

  hut: {
    batchId: BATCH_ID,
    searchTitle: "Hut Emoji (🛖) Meaning: Beach Shack, Rural Homes, and Simple Living",
    snippetAnswer:
      "🛖 Hut means simple shelter — beach bungalows, tropical getaways, rural villages, and minimalist off-grid living posts.",
    detailedParagraphs: [
      "Hut (🛖) depicts a thatched or straw-roof dwelling — Unicode symbol for tropical travel and rustic architecture.",
      "Resort marketing uses 🛖 for overwater-adjacent aesthetics even when buildings differ.",
      "Minimalism and digital-nomad threads pair 🛖 with slow-living captions.",
    ],
    textingMeaning: "'Beach shack 🛖', 'Village stay 🛖', 'Off-grid week 🛖'.",
    socialMeaning: "Bali travel, island hopping, and architecture boards feature 🛖.",
    caution: "Respect local housing — 🛖 isn't poverty tourism punchline.",
    examples: [
      { context: "Beach", text: "Shack lunch 🛖" },
      { context: "Travel", text: "Island hut 🛖" },
      { context: "Stay", text: "No AC needed 🛖" },
      { context: "Photo", text: "Palm roof 🛖" },
      { context: "Minimal", text: "Less stuff 🛖" },
    ],
    contextBlocks: [
      { title: "Tropical travel", body: "🛖 evokes straw-roof beach bars and island guesthouses." },
      { title: "Vs 🏠", body: "🏠 is suburban house. 🛖 is simple rural/tropical shelter." },
      { title: "Vs 🏕️", body: "🏕️ is camping tent. 🛖 is permanent simple structure." },
    ],
    searchIntents: ["hut emoji", "🛖 meaning", "beach hut emoji", "🛖 copy paste"],
    whenNotToUse: ["Avoid mocking real housing conditions in developing regions."],
    faqs: [
      { question: "What does 🛖 mean?", answer: "Hut — beach shack, tropical stay, rural simple home." },
      { question: "🛖 vs house emoji?", answer: "Hut emphasizes simple/thatch roof; house is generic suburban." },
    ],
  },

  houses: {
    batchId: BATCH_ID,
    searchTitle: "Houses Emoji (🏘️) Meaning: Neighborhood, Suburbs, and Community",
    snippetAnswer:
      "🏘️ Houses marks neighborhoods and suburbs — HOA drama, block parties, real estate listings, and 'quiet street' lifestyle posts.",
    detailedParagraphs: [
      "Houses (🏘️) shows a row of homes — Unicode symbol for suburban life and residential districts.",
      "Realtors text 🏘️ with open-house invites and 'great block' selling points.",
      "Community organizers use 🏘️ for neighborhood watch and local event flyers.",
    ],
    textingMeaning: "'Great block 🏘️', 'Open house Sunday 🏘️', 'Suburb life 🏘️'.",
    socialMeaning: "Real estate TikTok, neighborhood Facebook groups, and city-planning threads tag 🏘️.",
    caution: "Housing access is sensitive — don't use 🏘️ to dismiss urban housing struggles.",
    examples: [
      { context: "Real estate", text: "Listed today 🏘️" },
      { context: "Block party", text: "Street closed 🏘️" },
      { context: "Move", text: "New block 🏘️" },
      { context: "Kids", text: "Trick or treat 🏘️" },
      { context: "HOA", text: "Meeting night 🏘️" },
    ],
    contextBlocks: [
      { title: "Suburban identity", body: "🏘️ reads cul-de-sac energy — multiple homes, community scale." },
      { title: "Vs 🏠", body: "🏠 is one house. 🏘️ is neighborhood cluster." },
      { title: "Real estate", body: "Listings highlight 🏘️ for family-friendly blocks and school districts." },
    ],
    searchIntents: ["houses emoji", "🏘️ neighborhood emoji", "🏘️ meaning", "suburb emoji"],
    whenNotToUse: ["Not for single-home focus — use 🏠 instead."],
    faqs: [
      { question: "What does 🏘️ mean?", answer: "Houses/neighborhood — suburbs, blocks, residential community." },
      { question: "🏘️ for real estate?", answer: "Common for listings, open houses, and 'great neighborhood' posts." },
    ],
  },

  "derelict-house": {
    batchId: BATCH_ID,
    searchTitle: "Derelict House Emoji (🏚️) Meaning: Abandoned Places, Urban Decay, and Fixer-Uppers",
    snippetAnswer:
      "🏚️ Derelict House marks abandonment and decay — urban exploration, haunted houses, fixer-upper flips, and post-apocalyptic aesthetic.",
    detailedParagraphs: [
      "Derelict House (🏚️) shows crumbling abandoned building — Unicode symbol for urbex photography and horror settings.",
      "House flippers ironically text 🏚️ before renovation reveal videos — dramatic before/after content.",
      "Horror fans and Halloween decorators use 🏚️ for haunted house vibes without gore.",
    ],
    textingMeaning: "'Urbex spot 🏚️', 'Fixer upper 🏚️', 'Haunted tour 🏚️'.",
    socialMeaning: "Abandoned places Instagram, true crime adjacency, and flip-show teasers tag 🏚️.",
    caution: "Trespassing abandoned sites is dangerous and often illegal — don't encourage from emoji alone.",
    examples: [
      { context: "Urbex", text: "No trespassing 🏚️" },
      { context: "Flip", text: "Before photo 🏚️" },
      { context: "Halloween", text: "Haunted prop 🏚️" },
      { context: "Story", text: "Empty street 🏚️" },
      { context: "Game", text: "Survival map 🏚️" },
    ],
    contextBlocks: [
      { title: "Urban exploration", body: "🏚️ labels abandoned architecture — photographers chase decay aesthetic." },
      { title: "Fixer-upper narrative", body: "Renovation creators contrast 🏚️ before with 🏡 after." },
      { title: "Vs 🏠", body: "🏠 is livable home. 🏚️ is neglected, broken-down structure." },
    ],
    searchIntents: ["derelict house emoji", "🏚️ abandoned house", "🏚️ meaning", "haunted house emoji"],
    whenNotToUse: ["Avoid glamorizing unsafe trespass or disaster zones affecting real people."],
    faqs: [
      { question: "What does 🏚️ mean?", answer: "Derelict/abandoned house — decay, urbex, fixer-upper, haunted aesthetic." },
      { question: "🏚️ for Halloween?", answer: "Yes — shorthand for spooky abandoned building without skulls." },
    ],
  },

  "post-office": {
    batchId: BATCH_ID,
    searchTitle: "Post Office Emoji (🏤) Meaning: Mail, Shipping, and Japanese Town Halls",
    snippetAnswer:
      "🏤 Post Office means mail and shipping — package drops, passport forms, and in Japan the same symbol marks town hall (yakuba).",
    detailedParagraphs: [
      "Post Office (🏤) depicts European-style postal building — Unicode symbol for snail mail and government services.",
      "In Japan, 🏤 commonly reads as town hall — travelers learn the dual meaning quickly.",
      "Small business owners text 🏤 when heading to ship orders or pick up certified mail.",
    ],
    textingMeaning: "'At the post office 🏤', 'Shipped 🏤', 'Forms here 🏤'.",
    socialMeaning: "Etsy seller updates, pen-pal communities, and Japan travel tips reference 🏤.",
    caution: "Regional meaning differs — clarify Japan town hall vs Western post office when teaching.",
    examples: [
      { context: "Shipping", text: "Line is long 🏤" },
      { context: "Japan", text: "Town hall 🏤" },
      { context: "Business", text: "Orders dropped 🏤" },
      { context: "Mail", text: "Certified sent 🏤" },
      { context: "Errand", text: "Passport forms 🏤" },
    ],
    contextBlocks: [
      { title: "Japan dual meaning", body: "🏤 on Japanese maps often means municipal office — not just mail." },
      { title: "Small business shipping", body: "Handmade sellers batch 🏤 trips for customer orders." },
      { title: "Vs 📮", body: "📮 is postbox on street. 🏤 is the building/service." },
    ],
    searchIntents: ["post office emoji", "🏤 meaning", "japan town hall emoji", "🏤 copy paste"],
    whenNotToUse: ["Don't assume US USPS branding — emoji is generic building."],
    faqs: [
      { question: "What does 🏤 mean?", answer: "Post office — mail, shipping; in Japan also town hall." },
      { question: "🏤 vs 📫?", answer: "🏤 is building; 📫/📮 are mailbox/postbox street fixtures." },
    ],
  },

  "playground-slide": {
    batchId: BATCH_ID,
    searchTitle: "Playground Slide Emoji (🛝) Meaning: Parks, Kids, and Playful Energy",
    snippetAnswer:
      "🛝 Playground Slide marks parks and play — family outings, childhood nostalgia, and 'let's keep it fun' casual energy.",
    detailedParagraphs: [
      "Playground Slide (🛝) shows a park slide — Unicode symbol added for inclusive play spaces and family recreation.",
      "Parents schedule playdates with 🛝 — quick visual for 'meet at the park'.",
      "Adults reuse 🛝 metaphorically for easy downhill paths or risky shortcuts in memes.",
    ],
    textingMeaning: "'Park at 3 🛝', 'Kids burning energy 🛝', 'Easy path 🛝'.",
    socialMeaning: "Mom groups, playground review blogs, and wholesome memes tag 🛝.",
    caution: "Supervise real playground use — emoji doesn't replace safety checks.",
    examples: [
      { context: "Playdate", text: "Slide park 🛝" },
      { context: "Weekend", text: "Outdoor time 🛝" },
      { context: "Nostalgia", text: "Grade school 🛝" },
      { context: "Meme", text: "Shortcut 🛝" },
      { context: "City", text: "New playground 🛝" },
    ],
    contextBlocks: [
      { title: "Family outings", body: "🛝 signals kid-friendly destination — parks and rec centers." },
      { title: "Vs 🎠", body: "🎠 is carousel. 🛝 is playground slide specifically." },
      { title: "Wholesome tone", body: "🛝 keeps messages light — play and childhood joy." },
    ],
    searchIntents: ["playground slide emoji", "🛝 meaning", "slide emoji", "🛝 copy paste"],
    whenNotToUse: ["Not for water park slides — context usually dry playground."],
    faqs: [
      { question: "What does 🛝 mean?", answer: "Playground slide — parks, kids, family playtime." },
      { question: "When was 🛝 added?", answer: "Unicode 14 era — newer emoji for play infrastructure." },
    ],
  },

  "barber-pole": {
    batchId: BATCH_ID,
    searchTitle: "Barber Pole Emoji (💈) Meaning: Haircuts, Barbershops, and Grooming",
    snippetAnswer:
      "💈 Barber Pole marks haircuts and barbershops — fresh fade posts, appointment reminders, and classic men's grooming culture.",
    detailedParagraphs: [
      "Barber Pole (💈) shows red-white-blue striped pole — Unicode symbol for barbershops since medieval bloodletting iconography evolved into trade sign.",
      "Clients text 💈 when en route or showing fresh line-ups on Instagram.",
      "Salon crossover happens but 💈 specifically reads barber culture — fades, beard trims, hot towel.",
    ],
    textingMeaning: "'Haircut at 4 💈', 'Fresh fade 💈', 'Barber closed Mondays 💈'.",
    socialMeaning: "Barber TikTok, grooming GRWM, and small-business shop promos use 💈.",
    caution: "Not every salon is a barbershop — 💈 implies barber aesthetic.",
    examples: [
      { context: "Appointment", text: "In the chair 💈" },
      { context: "Fresh cut", text: "Line up 💈" },
      { context: "Shop", text: "Walk-ins welcome 💈" },
      { context: "Gift", text: "Cut card 💈" },
      { context: "Before event", text: "Cleanup 💈" },
    ],
    contextBlocks: [
      { title: "Barber culture", body: "💈 is shop sign — community hub energy beyond just hair." },
      { title: "Vs 💇", body: "💇 is person getting haircut. 💈 is the shop/trade symbol." },
      { title: "Small business", body: "Independent barbers pin 💈 on Google listings and story promos." },
    ],
    searchIntents: ["barber pole emoji", "💈 meaning", "barbershop emoji", "💈 copy paste"],
    whenNotToUse: ["Avoid for women's salon unless barber-style service."],
    faqs: [
      { question: "What does 💈 mean?", answer: "Barber pole — haircuts, barbershop, grooming appointment." },
      { question: "Why striped pole?", answer: "Historic barber-surgeon sign; now universal barbershop symbol." },
    ],
  },

  "tram-car": {
    batchId: BATCH_ID,
    searchTitle: "Tram Car Emoji (🚋) Meaning: Streetcar, Light Rail, and Urban Transit",
    snippetAnswer:
      "🚋 Tram Car marks streetcars and light-rail cars — urban transit nerds, European travel, and tram-system city guides.",
    detailedParagraphs: [
      "Tram Car (🚋) shows a single tram/streetcar unit — Unicode pairs with 🚊 for full tram vs car focus.",
      "Transit enthusiasts distinguish 🚋 when discussing rolling stock and fleet photos.",
      "City travelers use 🚋 interchangeably with 🚊 for Vienna, Zurich, and Melbourne systems.",
    ],
    textingMeaning: "'Tram 2 🚋', 'Fleet photo 🚋', 'Hop on 🚋'.",
    socialMeaning: "Urbanism Twitter, railfan accounts, and European trip reels tag 🚋.",
    caution: "Casual users rarely distinguish 🚋 from 🚊 — both work for tram travel.",
    examples: [
      { context: "Transit", text: "New livery 🚋" },
      { context: "Travel", text: "Ring line 🚋" },
      { context: "Photo", text: "Heritage car 🚋" },
      { context: "Commute", text: "Crowded 🚋" },
      { context: "Guide", text: "Buy pass 🚋" },
    ],
    contextBlocks: [
      { title: "Vs 🚊", body: "🚊 shows tram vehicle front/side. 🚋 emphasizes tram car unit — often interchangeable." },
      { title: "European travel", body: "🚋 tags cities where trams define downtown mobility." },
      { title: "Railfan niche", body: "Fleet spotters prefer 🚋 for car-type discussions." },
    ],
    searchIntents: ["tram car emoji", "🚋 meaning", "streetcar emoji", "🚋 vs 🚊"],
    whenNotToUse: ["For long-distance trains use 🚆 or 🚄 instead."],
    faqs: [
      { question: "What does 🚋 mean?", answer: "Tram/streetcar car — urban rail transit and city travel." },
      { question: "🚋 vs 🚊?", answer: "Nearly interchangeable; 🚋 stresses the car unit, 🚊 the tram vehicle." },
    ],
  },

  "manual-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Manual Wheelchair Emoji (🦽) Meaning: Mobility, Accessibility, and Disability Pride",
    snippetAnswer:
      "🦽 Manual Wheelchair represents manual mobility aids — accessibility info, disability pride, and venue wheelchair access questions.",
    detailedParagraphs: [
      "Manual Wheelchair (🦽) depicts self-propelled chair — Unicode accessibility symbol for disability representation.",
      "Event planners share 🦽 with ramp maps, seating charts, and ADA compliance updates.",
      "Disability advocates use 🦽 in pride posts — identity symbol, not pity icon.",
    ],
    textingMeaning: "'Wheelchair access? 🦽', 'Ramp entrance 🦽', 'Mobility day 🦽'.",
    socialMeaning: "Accessibility activism, travel tips for wheelchair users, and inclusive event promo tag 🦽.",
    caution: "Ask respectfully — don't use 🦽 to speak over disabled people's experiences.",
    examples: [
      { context: "Venue", text: "Ramp on left 🦽" },
      { context: "Travel", text: "Accessible route 🦽" },
      { context: "Event", text: "Seating reserved 🦽" },
      { context: "Advocacy", text: "Access is human rights 🦽" },
      { context: "Question", text: "Elevator working? 🦽" },
    ],
    contextBlocks: [
      { title: "Accessibility planning", body: "🦽 flags wheelchair access needs — routes, bathrooms, seating." },
      { title: "Vs 🦼", body: "🦼 is motorized wheelchair. 🦽 is manual self-propelled." },
      { title: "Disability pride", body: "Community reclaims 🦽 as identity — not tragedy imagery." },
    ],
    searchIntents: ["manual wheelchair emoji", "🦽 meaning", "wheelchair emoji", "accessibility emoji"],
    whenNotToUse: ["Never mock disability.", "Don't use instead of asking real access questions clearly."],
    faqs: [
      { question: "What does 🦽 mean?", answer: "Manual wheelchair — mobility, accessibility, disability representation." },
      { question: "🦽 vs ♿?", answer: "♿ is universal access sign. 🦽 is specific wheelchair device." },
    ],
  },

  "motorized-wheelchair": {
    batchId: BATCH_ID,
    searchTitle: "Motorized Wheelchair Emoji (🦼) Meaning: Power Mobility and Accessibility",
    snippetAnswer:
      "🦼 Motorized Wheelchair marks power mobility — electric wheelchair users, accessibility travel, and assistive tech discussions.",
    detailedParagraphs: [
      "Motorized Wheelchair (🦼) shows powered chair — Unicode symbol for users who rely on electric mobility devices.",
      "Travel bloggers document 🦼 airline policies, cruise accessibility, and hotel roll-in showers.",
      "Healthcare threads mention 🦼 during recovery timelines — temporary or permanent mobility shifts.",
    ],
    textingMeaning: "'Power chair charged 🦼', 'Accessible room 🦼', 'Scooter rental? 🦼'.",
    socialMeaning: "Disability travel guides, assistive tech reviews, and hospital update texts use 🦼.",
    caution: "Power chair ≠ generic 'wheelchair' — respect specific device language users prefer.",
    examples: [
      { context: "Travel", text: "Airline policy 🦼" },
      { context: "Hotel", text: "Roll-in shower 🦼" },
      { context: "Charge", text: "Battery full 🦼" },
      { context: "Event", text: "Front row access 🦼" },
      { context: "Tech", text: "New joystick 🦼" },
    ],
    contextBlocks: [
      { title: "Power mobility", body: "🦼 represents electric chairs — different needs than manual 🦽." },
      { title: "Travel logistics", body: "Airlines and trains have distinct 🦼 policies — research before trips." },
      { title: "Vs 🦽", body: "🦽 is manual. 🦼 is motorized/power wheelchair." },
    ],
    searchIntents: ["motorized wheelchair emoji", "🦼 meaning", "power wheelchair emoji", "🦼 copy paste"],
    whenNotToUse: ["Don't conflate with mobility scooter unless user does.", "Avoid inspiration-porn framing."],
    faqs: [
      { question: "What does 🦼 mean?", answer: "Motorized wheelchair — power mobility and accessibility." },
      { question: "🦼 for scooters?", answer: "Sometimes used loosely; power wheelchair is the precise meaning." },
    ],
  },

  "oil-drum": {
    batchId: BATCH_ID,
    searchTitle: "Oil Drum Emoji (🛢️) Meaning: Fuel, Industry, and Environmental Debates",
    snippetAnswer:
      "🛢️ Oil Drum marks petroleum and industry — gas prices, oil news, factory aesthetic, and environmental protest context.",
    detailedParagraphs: [
      "Oil Drum (🛢️) shows metal barrel — Unicode symbol for crude oil, fuel storage, and industrial sites.",
      "Finance threads spike 🛢️ when OPEC headlines move markets — paired with charts and 💰.",
      "Climate activists reference 🛢️ in fossil-fuel discussion — serious tone, not casual travel.",
    ],
    textingMeaning: "'Gas up 🛢️', 'Oil news 🛢️', 'Factory zone 🛢️'.",
    socialMeaning: "Energy Twitter, mechanic shops, and environmental campaigns tag 🛢️.",
    caution: "Oil politics ignite arguments — expect debate if 🛢️ enters climate threads.",
    examples: [
      { context: "Gas", text: "Prices jumped 🛢️" },
      { context: "News", text: "OPEC 🛢️" },
      { context: "Industry", text: "Port storage 🛢️" },
      { context: "Climate", text: "Phase out 🛢️" },
      { context: "Mechanic", text: "Shop day 🛢️" },
    ],
    contextBlocks: [
      { title: "Energy markets", body: "🛢️ shorthand for oil sector headlines and gas price venting." },
      { title: "Industrial aesthetic", body: "Urban photo walks include 🛢️ for gritty factory zones." },
      { title: "Vs ⛽", body: "⛽ is gas pump for drivers. 🛢️ is bulk storage/industry." },
    ],
    searchIntents: ["oil drum emoji", "🛢️ meaning", "oil barrel emoji", "🛢️ copy paste"],
    whenNotToUse: ["Avoid trivializing oil spills or environmental disasters."],
    faqs: [
      { question: "What does 🛢️ mean?", answer: "Oil drum — petroleum, fuel industry, gas prices, climate debates." },
      { question: "🛢️ vs gas pump?", answer: "Drum is industrial bulk; ⛽ is consumer fuel stop." },
    ],
  },

  wheel: {
    batchId: BATCH_ID,
    searchTitle: "Wheel Emoji (🛞) Meaning: Tires, Cars, and 'Reinvent the Wheel'",
    snippetAnswer:
      "🛞 Wheel means tires and rotation — auto repair, cycling adjacency, and idioms like reinventing the wheel in work chat.",
    detailedParagraphs: [
      "Wheel (🛞) depicts a tire/wheel — Unicode symbol for automotive culture and literal wheel replacement.",
      "Mechanics and car enthusiasts text 🛞 for new rubber, alignment days, and track prep.",
      "Office slang uses 🛞 for redundant work — 'don't reinvent the 🛞' in project threads.",
    ],
    textingMeaning: "'New tires 🛞', 'Alignment 🛞', 'Same old 🛞'.",
    socialMeaning: "Car TikTok, F1 weekend jokes, and DIY garage content tag 🛞.",
    caution: "Idiom context differs from literal tire — clarify in work messages.",
    examples: [
      { context: "Auto", text: "Winter set 🛞" },
      { context: "Shop", text: "Rotation day 🛞" },
      { context: "Idiom", text: "Don't reinvent 🛞" },
      { context: "Racing", text: "Pit stop 🛞" },
      { context: "Bike", text: "Flat fixed 🛞" },
    ],
    contextBlocks: [
      { title: "Automotive", body: "🛞 signals tires, wheels, and garage maintenance days." },
      { title: "Work idiom", body: "'Reinvent the wheel' memes use 🛞 for unnecessary duplication." },
      { title: "Vs 🚗", body: "🚗 is whole car. 🛞 is wheel/tire component." },
    ],
    searchIntents: ["wheel emoji", "🛞 tire emoji", "🛞 meaning", "🛞 copy paste"],
    whenNotToUse: ["Not for steering wheel or Ferris wheel — those need context."],
    faqs: [
      { question: "What does 🛞 mean?", answer: "Wheel/tire — auto repair, driving culture, or 'reinvent the wheel' idiom." },
      { question: "New emoji?", answer: "🛞 arrived in recent Unicode — tire/wheel specific glyph." },
    ],
  },

  "ring-buoy": {
    batchId: BATCH_ID,
    searchTitle: "Ring Buoy Emoji (🛟) Meaning: Water Safety, Rescue, and Lifeguard",
    snippetAnswer:
      "🛟 Ring Buoy marks water rescue and safety — pool rules, beach lifeguard posts, boating safety, and 'throw a line' help metaphors.",
    detailedParagraphs: [
      "Ring Buoy (🛟) shows life preserver ring — Unicode symbol for maritime safety and poolside rescue equipment.",
      "Lifeguard training and swim coaches use 🛟 in safety briefings and parent pool updates.",
      "Metaphorically, 🛟 means offering help — 'throwing a lifeline' in support threads.",
    ],
    textingMeaning: "'Life ring here 🛟', 'Pool rules 🛟', 'Need help 🛟'.",
    socialMeaning: "Beach safety campaigns, sailing clubs, and mental-health support metaphors use 🛟.",
    caution: "Real drowning emergencies need emergency services — not emoji rescue.",
    examples: [
      { context: "Pool", text: "Adult watch 🛟" },
      { context: "Beach", text: "Lifeguard on 🛟" },
      { context: "Boat", text: "Safety check 🛟" },
      { context: "Support", text: "Got you 🛟" },
      { context: "Training", text: "Throw practice 🛟" },
    ],
    contextBlocks: [
      { title: "Water safety", body: "🛟 reminds groups about rescue equipment and supervision." },
      { title: "Metaphorical rescue", body: "Offering support — 'here's a 🛟' in tough times." },
      { title: "Vs 🏊", body: "🏊 is swimming. 🛟 is safety/rescue equipment." },
    ],
    searchIntents: ["ring buoy emoji", "life preserver emoji", "🛟 meaning", "🛟 copy paste"],
    whenNotToUse: ["Never substitute for real emergency response in danger."],
    faqs: [
      { question: "What does 🛟 mean?", answer: "Ring buoy/life preserver — water safety, rescue, lifeguard." },
      { question: "🛟 for mental health metaphor?", answer: "Yes — 'throw a lifeline' support usage is common." },
    ],
  },

  seat: {
    batchId: BATCH_ID,
    searchTitle: "Seat Emoji (💺) Meaning: Airplane Seats, Booking, and 'Save Me a Seat'",
    snippetAnswer:
      "💺 Seat marks seating — flight assignments, theater tickets, 'save me a seat', and conference room chair drama.",
    detailedParagraphs: [
      "Seat (💺) shows an empty chair — Unicode symbol for airlines, venues, and reserved spots.",
      "Travelers negotiate 💺 on check-in — window vs aisle debates start with this emoji.",
      "Offices joke about 💺 for hot-desking wars and meeting room squatters.",
    ],
    textingMeaning: "'Window 💺', 'Save me a 💺', 'Front row 💺'.",
    socialMeaning: "Air travel threads, event ticketing, and workplace humor tag 💺.",
    caution: "Airline seat maps need confirmation numbers — 💺 alone doesn't hold a seat.",
    examples: [
      { context: "Flight", text: "12A 💺" },
      { context: "Event", text: "Saved you 💺" },
      { context: "Office", text: "Desk free 💺" },
      { context: "Theater", text: "Middle block 💺" },
      { context: "Train", text: "Reserved 💺" },
    ],
    contextBlocks: [
      { title: "Air travel", body: "💺 is default for seat selection chatter — legroom complaints follow." },
      { title: "Events", body: "Saving seats at weddings, graduations, and concerts — 💺 promise." },
      { title: "Vs 🪑", body: "🪑 is generic chair furniture. 💺 is seated spot/assignment context." },
    ],
    searchIntents: ["seat emoji", "💺 airplane seat", "💺 meaning", "💺 copy paste"],
    whenNotToUse: ["Not for toilet humor contexts — keep travel/venue tone."],
    faqs: [
      { question: "What does 💺 mean?", answer: "Seat — airplane assignment, reserved spot, save-a-seat requests." },
      { question: "💺 for trains?", answer: "Yes — any assigned seating context works." },
    ],
  },

  "bellhop-bell": {
    batchId: BATCH_ID,
    searchTitle: "Bellhop Bell Emoji (🛎️) Meaning: Hotel Service, Room Service, and 'Ring for Help'",
    snippetAnswer:
      "🛎️ Bellhop Bell marks hotel service — front desk, room service orders, concierge requests, and attention-getting 'ding'.",
    detailedParagraphs: [
      "Bellhop Bell (🛎️) shows desk service bell — Unicode symbol for hospitality and customer service.",
      "Hotel guests text 🛎️ jokingly for slow elevators or when tipping concierge.",
      "Streamers and creators use 🛎️ for 'subscribe bell' adjacency — notification culture crossover.",
    ],
    textingMeaning: "'Room service 🛎️', 'Front desk 🛎️', 'Need towels 🛎️'.",
    socialMeaning: "Travel vlogs, luxury hotel unboxings, and service-industry memes tag 🛎️.",
    caution: "Don't harass staff — real service workers deserve respect beyond 🛎️ jokes.",
    examples: [
      { context: "Hotel", text: "Late checkout 🛎️" },
      { context: "Room service", text: "Breakfast 🛎️" },
      { context: "Concierge", text: "Tickets please 🛎️" },
      { context: "Stream", text: "Hit the bell 🛎️" },
      { context: "Help", text: "Anyone there? 🛎️" },
    ],
    contextBlocks: [
      { title: "Hospitality", body: "🛎️ instantly reads hotel — service requests and luxury travel." },
      { title: "Creator bell", body: "YouTube 'ring the bell' memes borrow 🛎️ visually." },
      { title: "Vs 🏨", body: "🏨 is hotel building. 🛎️ is service/at-desk interaction." },
    ],
    searchIntents: ["bellhop bell emoji", "🛎️ hotel bell", "🛎️ meaning", "service bell emoji"],
    whenNotToUse: ["Avoid belittling hospitality workers with excessive 🛎️ demands."],
    faqs: [
      { question: "What does 🛎️ mean?", answer: "Bellhop/service bell — hotel desk, room service, attention." },
      { question: "🛎️ for YouTube bell?", answer: "Sometimes — visual pun on notification bell." },
    ],
  },

  watch: {
    batchId: BATCH_ID,
    searchTitle: "Watch Emoji (⌚) Meaning: Time, Apple Watch, and 'Running Late'",
    snippetAnswer:
      "⌚ Watch means time and wristwear — running late texts, smartwatch fitness brags, and luxury watch collector posts.",
    detailedParagraphs: [
      "Watch (⌚) shows wristwatch — Unicode symbol for punctuality, schedules, and wearable tech.",
      "Apple Watch and Garmin users flex ⌚ with step counts and closed rings.",
      "Fashion accounts pair ⌚ with outfit grids — mechanical watches as status accessories.",
    ],
    textingMeaning: "'5 min late ⌚', 'Meeting at 3 ⌚', 'Closed all rings ⌚'.",
    socialMeaning: "Watch collector Instagram, fitness stories, and punctuality memes use ⌚.",
    caution: "Time zone confusion still happens — ⌚ doesn't replace clear timestamps.",
    examples: [
      { context: "Late", text: "Traffic ⌚" },
      { context: "Fitness", text: "10k steps ⌚" },
      { context: "Meeting", text: "Starts now ⌚" },
      { context: "Fashion", text: "Daily wear ⌚" },
      { context: "Gift", text: "Grad watch ⌚" },
    ],
    contextBlocks: [
      { title: "Punctuality", body: "⌚ signals time pressure — 'watch the clock' energy." },
      { title: "Smartwatch culture", body: "Fitness closes and heart-rate posts tag ⌚ by default." },
      { title: "Vs ⏰", body: "⏰ is alarm clock. ⌚ is wearable on wrist." },
    ],
    searchIntents: ["watch emoji", "⌚ meaning", "wristwatch emoji", "apple watch emoji"],
    whenNotToUse: ["For wall clocks use 🕐 series or 🕰️ — ⌚ is wrist-specific."],
    faqs: [
      { question: "What does ⌚ mean?", answer: "Watch — time, lateness, smartwatch fitness, wristwear fashion." },
      { question: "⌚ for Apple Watch?", answer: "Commonly yes — default wearable tech symbol." },
    ],
  },

  stopwatch: {
    batchId: BATCH_ID,
    searchTitle: "Stopwatch Emoji (⏱️) Meaning: Timing, Workouts, and Deadlines",
    snippetAnswer:
      "⏱️ Stopwatch marks precise timing — workout intervals, race results, cooking timers, and crunch-time deadline pressure.",
    detailedParagraphs: [
      "Stopwatch (⏱️) shows handheld timer — Unicode symbol for athletics, labs, and productivity sprints.",
      "Coaches text ⏱️ with split times and HIIT circuit reminders.",
      "Developers joke about ⏱️ during performance optimization — milliseconds matter.",
    ],
    textingMeaning: "'PR today ⏱️', '90 sec rest ⏱️', 'Benchmark ⏱️'.",
    socialMeaning: "CrossFit boards, running clubs, and hackathon countdowns tag ⏱️.",
    caution: "Stopwatch pressure can stress teams — use thoughtfully in work chat.",
    examples: [
      { context: "Workout", text: "Tabata ⏱️" },
      { context: "Race", text: "New PR ⏱️" },
      { context: "Cooking", text: "4 min eggs ⏱️" },
      { context: "Work", text: "Sprint ends ⏱️" },
      { context: "Test", text: "Latency ⏱️" },
    ],
    contextBlocks: [
      { title: "Athletics", body: "⏱️ is official-timing energy — splits, reps, intervals." },
      { title: "Vs ⏲️", body: "⏲️ is timer clock with dial. ⏱️ is stopwatch handheld." },
      { title: "Productivity", body: "Pomodoro and sprint culture borrows ⏱️ for focused bursts." },
    ],
    searchIntents: ["stopwatch emoji", "⏱️ meaning", "timer emoji", "⏱️ copy paste"],
    whenNotToUse: ["For casual 'what time is it' use ⌚ or clock faces."],
    faqs: [
      { question: "What does ⏱️ mean?", answer: "Stopwatch — workout timing, races, intervals, deadlines." },
      { question: "⏱️ vs ⏲️?", answer: "Stopwatch is handheld sport timing; timer clock is kitchen/desk dial." },
    ],
  },

  "timer-clock": {
    batchId: BATCH_ID,
    searchTitle: "Timer Clock Emoji (⏲️) Meaning: Kitchen Timer, Countdown, and Reminders",
    snippetAnswer:
      "⏲️ Timer Clock means countdown timers — baking, study Pomodoro, game turn limits, and 'time's running out' tension.",
    detailedParagraphs: [
      "Timer Clock (⏲️) depicts dial timer — Unicode symbol for kitchen countdowns and scheduled reminders.",
      "Home cooks set ⏲️ for pasta, cookies, and rest periods in bread recipes.",
      "Board game nights use ⏲️ for turn limits — friendly pressure without stopwatch precision.",
    ],
    textingMeaning: "'Timer set ⏲️', '10 min left ⏲️', 'Cookies done ⏲️'.",
    socialMeaning: "Recipe reels, study-with-me streams, and game night posts tag ⏲️.",
    caution: "Distinct from ⏱️ stopwatch — ⏲️ reads kitchen/desk countdown dial.",
    examples: [
      { context: "Kitchen", text: "Pasta ⏲️" },
      { context: "Study", text: "Pomodoro ⏲️" },
      { context: "Games", text: "Your turn ⏲️" },
      { context: "Reminder", text: "Oven ⏲️" },
      { context: "Deadline", text: "Hour left ⏲️" },
    ],
    contextBlocks: [
      { title: "Kitchen default", body: "⏲️ is baking and cooking timer — most common casual use." },
      { title: "Vs ⏱️", body: "⏱️ is sport stopwatch. ⏲️ is dial countdown timer." },
      { title: "Study streams", body: "Pomodoro focus sessions advertise ⏲️ in titles and overlays." },
    ],
    searchIntents: ["timer clock emoji", "⏲️ meaning", "countdown timer emoji", "⏲️ copy paste"],
    whenNotToUse: ["For exact athletic splits prefer ⏱️ stopwatch."],
    faqs: [
      { question: "What does ⏲️ mean?", answer: "Timer clock — kitchen countdown, reminders, turn limits." },
      { question: "⏲️ vs alarm clock?", answer: "Timer counts down duration; alarm clock rings at set time of day." },
    ],
  },

  "mantelpiece-clock": {
    batchId: BATCH_ID,
    searchTitle: "Mantelpiece Clock Emoji (🕰️) Meaning: Vintage Time, Decor, and Old-School",
    snippetAnswer:
      "🕰️ Mantelpiece Clock marks vintage decor — antique aesthetics, old-timey memes, elegant waiting rooms, and 'timeless' branding.",
    detailedParagraphs: [
      "Mantelpiece Clock (🕰️) shows classic shelf clock — Unicode symbol for retro interiors and formal settings.",
      "Interior designers use 🕰️ in mood boards for Victorian, library, and hotel lobby aesthetics.",
      "Metaphor posts pair 🕰️ with 'timeless' puns — fashion and architecture captions.",
    ],
    textingMeaning: "'Vintage vibe 🕰️', 'Lobby wait 🕰️', 'Timeless piece 🕰️'.",
    socialMeaning: "Antique shop finds, dark academia Pinterest, and luxury hotel posts tag 🕰️.",
    caution: "Not for precise scheduling — 🕰️ is decorative/old-fashioned connotation.",
    examples: [
      { context: "Decor", text: "Mantel find 🕰️" },
      { context: "Hotel", text: "Grand lobby 🕰️" },
      { context: "Aesthetic", text: "Dark academia 🕰️" },
      { context: "Brand", text: "Since 1920 🕰️" },
      { context: "Wait", text: "Long queue 🕰️" },
    ],
    contextBlocks: [
      { title: "Vintage aesthetic", body: "🕰️ signals antique decor — shelf clocks in parlors and studies." },
      { title: "Vs ⌚", body: "⌚ is modern wristwatch. 🕰️ is decorative mantel clock." },
      { title: "Formal waiting", body: "Doctor/lawyer office vibes — time passes slowly with 🕰️." },
    ],
    searchIntents: ["mantelpiece clock emoji", "🕰️ meaning", "vintage clock emoji", "🕰️ copy paste"],
    whenNotToUse: ["For exact meeting times use digital-friendly ⌚ or clock faces."],
    faqs: [
      { question: "What does 🕰️ mean?", answer: "Mantelpiece clock — vintage decor, old-timey, timeless aesthetic." },
      { question: "🕰️ for telling time?", answer: "Rarely literal — mostly decorative/retro mood." },
    ],
  },

  "closed-umbrella": {
    batchId: BATCH_ID,
    searchTitle: "Closed Umbrella Emoji (🌂) Meaning: Rain Gear, Fashion, and 'Rain Later'",
    snippetAnswer:
      "🌂 Closed Umbrella marks rain prep and parasol fashion — packed umbrella, boutique accessory, and 'might rain later' travel packing.",
    detailedParagraphs: [
      "Closed Umbrella (🌂) shows folded umbrella — Unicode symbol distinct from open ☔ rain.",
      "Fashion history fans associate 🌂 with parasols — Victorian and sun-protection aesthetic.",
      "Travelers pack 🌂 in daybags — 'just in case' forecast without active downpour.",
    ],
    textingMeaning: "'Bring 🌂', 'Folded in bag 🌂', 'Parasol era 🌂'.",
    socialMeaning: "Vintage fashion boards, London packing lists, and accessory flat-lays use 🌂.",
    caution: "Open ☔ means raining now — 🌂 is stored or sun parasol context.",
    examples: [
      { context: "Pack", text: "Forecast iffy 🌂" },
      { context: "Fashion", text: "Parasol shoot 🌂" },
      { context: "Travel", text: "Day bag 🌂" },
      { context: "Shop", text: "Compact 🌂" },
      { context: "Later", text: "Rain tonight 🌂" },
    ],
    contextBlocks: [
      { title: "Vs ☔", body: "☔ is open umbrella in rain. 🌂 is closed — packed or parasol." },
      { title: "Fashion parasol", body: "🌂 reads vintage accessory — not always weather practical." },
      { title: "Travel packing", body: "Prepared traveler emoji — umbrella ready but sky still clear." },
    ],
    searchIntents: ["closed umbrella emoji", "🌂 meaning", "parasol emoji", "🌂 vs ☔"],
    whenNotToUse: ["For active raining now use ☔ or 🌧️."],
    faqs: [
      { question: "What does 🌂 mean?", answer: "Closed umbrella — packed rain gear, parasol fashion, rain later." },
      { question: "🌂 vs ☔?", answer: "Closed = stored/parasol. Open ☔ = raining or protection active." },
    ],
  },

  "umbrella-on-ground": {
    batchId: BATCH_ID,
    searchTitle: "Umbrella on Ground Emoji (⛱️) Meaning: Beach Shade, Pool Days, and Vacation",
    snippetAnswer:
      "⛱️ Umbrella on Ground means beach and pool shade — resort vacations, seaside setups, and sunny day leisure posts.",
    detailedParagraphs: [
      "Umbrella on Ground (⛱️) shows beach parasol stuck in sand — Unicode symbol for coastal holidays.",
      "Travel influencers frame ⛱️ with loungers and turquoise water — default vacation thumbnail.",
      "Pool clubs use ⛱️ for cabana marketing even when umbrellas differ.",
    ],
    textingMeaning: "'Beach day ⛱️', 'Reserved cabana ⛱️', 'Shade spot ⛱️'.",
    socialMeaning: "Summer Instagram, Mediterranean trips, and pool party invites tag ⛱️.",
    caution: "Skin safety still needs SPF — ⛱️ shade isn't full UV protection.",
    examples: [
      { context: "Beach", text: "Front row ⛱️" },
      { context: "Resort", text: "Cabana booked ⛱️" },
      { context: "Pool", text: "Shade crew ⛱️" },
      { context: "Travel", text: "Amalfi ⛱️" },
      { context: "Weekend", text: "Sand and sun ⛱️" },
    ],
    contextBlocks: [
      { title: "Beach vacation", body: "⛱️ is shorthand for seaside leisure — sand, lounger, shade." },
      { title: "Vs 🏖️", body: "🏖️ is beach with umbrella scene. ⛱️ focuses on shade umbrella itself." },
      { title: "Vs 🌂", body: "🌂 is closed carry umbrella. ⛱️ is planted beach parasol." },
    ],
    searchIntents: ["umbrella on ground emoji", "beach umbrella emoji", "⛱️ meaning", "⛱️ copy paste"],
    whenNotToUse: ["Not for rain storms — use ☔. ⛱️ is sunny beach context."],
    faqs: [
      { question: "What does ⛱️ mean?", answer: "Beach umbrella on ground — pool/beach vacation, shade, resort." },
      { question: "⛱️ vs 🏖️?", answer: "⛱️ is umbrella focus; 🏖️ is wider beach scene." },
    ],
  },

  "high-voltage": {
    batchId: BATCH_ID,
    searchTitle: "High Voltage Emoji (⚡) Meaning: Power, Energy, and Lightning Speed",
    snippetAnswer:
      "⚡ High Voltage means electric power and speed — lightning storms, high energy vibes, fast performance, and danger warnings.",
    detailedParagraphs: [
      "High Voltage (⚡) shows lightning bolt — Unicode symbol for electricity, storms, and intense energy.",
      "Fitness posts stack ⚡ with PR days — explosive power and hype.",
      "Tech and gaming use ⚡ for fast charging, lag-free sessions, and overclock humor.",
    ],
    textingMeaning: "'Storm coming ⚡', 'Full energy ⚡', 'Fast charge ⚡'.",
    socialMeaning: "Workout hype, EDM festival flyers, and weather alert shares tag ⚡.",
    caution: "Real electrical hazard is deadly — don't joke near actual downed lines.",
    examples: [
      { context: "Storm", text: "Thunder ⚡" },
      { context: "Gym", text: "PR day ⚡" },
      { context: "Tech", text: "Charged ⚡" },
      { context: "Concert", text: "Main stage ⚡" },
      { context: "Speed", text: "Instant ⚡" },
    ],
    contextBlocks: [
      { title: "Energy metaphor", body: "⚡ scales from literal lightning to hype and speed." },
      { title: "Weather alerts", body: "Storm posts lead with ⚡ — check official warnings too." },
      { title: "Vs 🔋", body: "🔋 is battery charge level. ⚡ is power/lightning burst." },
    ],
    searchIntents: ["high voltage emoji", "⚡ lightning emoji", "⚡ meaning", "⚡ copy paste"],
    whenNotToUse: ["Avoid minimizing real storm injuries or electrical accidents."],
    faqs: [
      { question: "What does ⚡ mean?", answer: "High voltage/lightning — storms, energy, speed, power." },
      { question: "⚡ name vs zap?", answer: "Official name is high voltage sign; everyone says lightning/zap." },
    ],
  },

  "snowman-without-snow": {
    batchId: BATCH_ID,
    searchTitle: "Snowman Without Snow Emoji (⛄) Meaning: Winter, Cold, and Frosty Fun",
    snippetAnswer:
      "⛄ Snowman Without Snow marks winter and cold — holiday cards, 'freezing' complaints, and snowman building without ground snow in emoji art.",
    detailedParagraphs: [
      "Snowman Without Snow (⛄) shows standalone snowman — Unicode design omits snow pile but reads winter clearly.",
      "Holiday texters pair ⛄ with 🎄 for season's greetings without clutter.",
      "Cold weather vents use ⛄ — 'I'm a ⛄' when underdressed for the chill.",
    ],
    textingMeaning: "'So cold ⛄', 'Built a ⛄', 'Winter walk ⛄'.",
    socialMeaning: "Christmas memes, ski trip posts, and Midwest winter humor tag ⛄.",
    caution: "Distinct from ☃️ snowman with snowflakes — both work for winter.",
    examples: [
      { context: "Cold", text: "Frozen ⛄" },
      { context: "Holiday", text: "Card season ⛄" },
      { context: "Kids", text: "Yard ⛄" },
      { context: "Ski", text: "Apres ⛄" },
      { context: "Meme", text: "Dress warm ⛄" },
    ],
    contextBlocks: [
      { title: "Winter shorthand", body: "⛄ instantly signals cold season — simpler than full snow scene." },
      { title: "Vs ☃️", body: "☃️ includes snow detail. ⛄ is cleaner snowman glyph." },
      { title: "Vs 🥶", body: "🥶 is cold face/shivering. ⛄ is winter activity/aesthetic." },
    ],
    searchIntents: ["snowman emoji", "⛄ meaning", "snowman without snow", "⛄ copy paste"],
    whenNotToUse: ["For blizzard conditions 🌨️ or ❄️ may fit better."],
    faqs: [
      { question: "What does ⛄ mean?", answer: "Snowman — winter, cold weather, holiday fun." },
      { question: "⛄ vs ☃️?", answer: "Both snowmen; ☃️ shows snowflakes, ⛄ is simpler design." },
    ],
  },
};
