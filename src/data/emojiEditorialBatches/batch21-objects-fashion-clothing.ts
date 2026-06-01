import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "21-objects-fashion-clothing";

/** Batch 21 P1 — fashion, footwear, outerwear, and workwear. */
export const batch21ObjectsFashionClothing: Record<string, EmojiBatchEnrichment> = {
  purse: {
    batchId: BATCH_ID,
    searchTitle: "Purse Emoji (👛) Meaning: Handbag, Fashion, and Everyday Carry",
    snippetAnswer:
      "👛 Purse means handbag and everyday carry — outfit pairing, shopping hauls, 'what's in my bag', and gift-for-her posts.",
    detailedParagraphs: [
      "Purse (👛) shows a small clasp handbag — Unicode symbol for women's accessories and fashion context.",
      "OOTD posts pair 👛 with shoes and lipstick — capsule wardrobe coordination.",
      "Luxury unboxing and dupes culture frames 👛 as status or smart budget find.",
    ],
    textingMeaning: "'New 👛', 'Match the bag 👛', 'Treat yourself 👛'.",
    socialMeaning: "Fashion TikTok, thrift flips, and anniversary gift threads tag 👛.",
    caution: "Gendered gift assumptions around 👛 can miss — know the recipient.",
    examples: [
      { context: "Shopping", text: "Found it 👛" },
      { context: "OOTD", text: "Bag match 👛" },
      { context: "Gift", text: "Birthday 👛" },
      { context: "Thrift", text: "Vintage score 👛" },
      { context: "Travel", text: "Day bag 👛" },
    ],
    contextBlocks: [
      { title: "Vs 👜", body: "👜 is larger tote/handbag. 👛 reads smaller clutch-style purse." },
      { title: "Fashion coord", body: "👛 completes outfit posts — color pop or neutral staple." },
      { title: "WMIB videos", body: "'What's in my bag' genre defaults to 👛 thumbnail energy." },
    ],
    searchIntents: ["purse emoji", "👛 meaning", "handbag emoji", "👛 copy paste"],
    whenNotToUse: ["For men's wallet use 👝.", "Not for backpack — 🎒."],
    faqs: [
      { question: "What does 👛 mean?", answer: "Purse/handbag — fashion accessory, shopping, outfit pairing." },
      { question: "👛 vs 👜?", answer: "👛 smaller purse; 👜 larger handbag/tote — often used interchangeably." },
    ],
  },

  "clutch-bag": {
    batchId: BATCH_ID,
    searchTitle: "Clutch Bag Emoji (👝) Meaning: Evening Bag, Formal Events, and Minimal Carry",
    snippetAnswer:
      "👝 Clutch Bag marks evening and formal carry — weddings, galas, prom, and 'phone keys lip gloss only' minimal bags.",
    detailedParagraphs: [
      "Clutch Bag (👝) shows envelope-style evening pouch — Unicode symbol for dress-up events without straps.",
      "Wedding guests text 👝 when confirming formal accessory — matches heels and dress code.",
      "Red carpet and premiere recaps use 👝 in celebrity fashion breakdowns.",
    ],
    textingMeaning: "'Clutch only 👝', 'Prom bag 👝', 'Formal tonight 👝'.",
    socialMeaning: "Bridal party group chats, Met Gala commentary, and vintage resale posts tag 👝.",
    caution: "Clutch life means no hands free — plan who holds your phone for photos.",
    examples: [
      { context: "Wedding", text: "Guest bag 👝" },
      { context: "Prom", text: "Match dress 👝" },
      { context: "Gala", text: "Black tie 👝" },
      { context: "Minimal", text: "Keys only 👝" },
      { context: "Vintage", text: "Beaded 👝" },
    ],
    contextBlocks: [
      { title: "Formal events", body: "👝 signals strapless evening bag — weddings, galas, premieres." },
      { title: "Vs 👛", body: "👛 daytime purse. 👝 evening clutch — sleeker, event dress code." },
      { title: "Vs 👜", body: "👜 everyday tote. 👝 special occasion minimal carry." },
    ],
    searchIntents: ["clutch bag emoji", "👝 meaning", "evening bag emoji", "👝 copy paste"],
    whenNotToUse: ["For daily errands 👜/👛 fit better."],
    faqs: [
      { question: "What does 👝 mean?", answer: "Clutch/evening bag — formal events, minimal carry, dress-up." },
      { question: "👝 for wallet?", answer: "Sometimes used for pouch/wallet — context from outfit/event clarifies." },
    ],
  },

  "womans-clothes": {
    batchId: BATCH_ID,
    searchTitle: "Womans Clothes Emoji (👚) Meaning: Fashion, Shopping, and Wardrobe",
    snippetAnswer:
      "👚 Woman's Clothes means fashion and wardrobe — shopping trips, outfit planning, laundry day, and women's style posts.",
    detailedParagraphs: [
      "Woman's Clothes (👚) shows a blouse on hanger — Unicode generic symbol for women's apparel and fashion.",
      "Shopping haul captions lead with 👚 — try-on reels and closet refresh content.",
      "Roommates coordinate 👚 for shared laundry or borrow-with-permission threads.",
    ],
    textingMeaning: "'Shopping 👚', 'New top 👚', 'Closet clean 👚'.",
    socialMeaning: "Fashion haul TikTok, capsule wardrobe posts, and resale listing previews use 👚.",
    caution: "Unicode name is dated — use inclusive language in prose around the emoji.",
    examples: [
      { context: "Shopping", text: "Mall day 👚" },
      { context: "Haul", text: "Try-on 👚" },
      { context: "Laundry", text: "Delicates 👚" },
      { context: "Work", text: "Office fit 👚" },
      { context: "Sale", text: "Rack find 👚" },
    ],
    contextBlocks: [
      { title: "Shopping shorthand", body: "👚 tags fashion content without specifying exact garment." },
      { title: "Vs 👗", body: "👗 is dress specifically. 👚 is tops/blouse general women's clothes." },
      { title: "Vs 🧥", body: "🧥 outerwear coat. 👚 lighter apparel layer." },
    ],
    searchIntents: ["womans clothes emoji", "👚 meaning", "blouse emoji", "👚 fashion"],
    whenNotToUse: ["For specific dress use 👗.", "Avoid reducing people to clothing emoji alone."],
    faqs: [
      { question: "What does 👚 mean?", answer: "Women's clothes — fashion, shopping, wardrobe, outfit posts." },
      { question: "👚 vs shirt emoji?", answer: "👕 is unisex T-shirt. 👚 reads women's blouse/fashion top." },
    ],
  },

  "top-hat": {
    batchId: BATCH_ID,
    searchTitle: "Top Hat Emoji (🎩) Meaning: Formal Wear, Magic, and Vintage Class",
    snippetAnswer:
      "🎩 Top Hat marks formal elegance — black-tie events, magicians, vintage aesthetic, and 'classy' ironic memes.",
    detailedParagraphs: [
      "Top Hat (🎩) shows tall formal hat — Unicode symbol for Victorian class, magic acts, and fancy dress.",
      "New Year's and wedding formal posts stack 🎩 with 🥂 — old-money aesthetic TikTok.",
      "Magic and circus content uses 🎩 for rabbit-out-of-hat culture without spoiling tricks.",
    ],
    textingMeaning: "'Black tie 🎩', 'Magic show 🎩', 'Fancy 🎩'.",
    socialMeaning: "Steampunk cosplay, barbershop quartets, and monopoly meme posts tag 🎩.",
    caution: "Monopoly 'top hat' wealth memes can feel tone-deaf during inequality discourse.",
    examples: [
      { context: "Formal", text: "Gala 🎩" },
      { context: "Magic", text: "Trick night 🎩" },
      { context: "NYE", text: "Midnight 🎩" },
      { context: "Cosplay", text: "Steampunk 🎩" },
      { context: "Meme", text: "Monopoly 🎩" },
    ],
    contextBlocks: [
      { title: "Formal dress code", body: "🎩 signals white/black tie adjacent — peak formality." },
      { title: "Vs 👒", body: "👒 sun hat casual. 🎩 formal tall hat — different occasions." },
      { title: "Magic trope", body: "Pulling 🎩 rabbit is universal magician shorthand." },
    ],
    searchIntents: ["top hat emoji", "🎩 meaning", "formal hat emoji", "🎩 copy paste"],
    whenNotToUse: ["For casual caps use 🧢.", "Not military helmet — ⛑️/🪖."],
    faqs: [
      { question: "What does 🎩 mean?", answer: "Top hat — formal wear, magic, vintage classy aesthetic." },
      { question: "🎩 for fancy?", answer: "Yes — shorthand for dressed up or old-money vibe." },
    ],
  },

  "womans-hat": {
    batchId: BATCH_ID,
    searchTitle: "Womans Hat Emoji (👒) Meaning: Sun Hat, Derby, and Summer Fashion",
    snippetAnswer:
      "👒 Woman's Hat means sun hats and dressy headwear — garden parties, Kentucky Derby, beach cover, and picnic aesthetic.",
    detailedParagraphs: [
      "Woman's Hat (👒) shows wide-brim sun hat with bow — Unicode symbol for summer fashion and outdoor events.",
      "Derby and royal wedding viewing parties decorate threads with 👒 — fascinator adjacent energy.",
      "Travel bloggers pair 👒 with sundress posts — European summer and vineyard tours.",
    ],
    textingMeaning: "'Sun hat 👒', 'Derby fit 👒', 'Garden party 👒'.",
    socialMeaning: "Coastal grandmother aesthetic, picnic Pinterest, and resort wear reels tag 👒.",
    caution: "Cultural dress hats deserve respect — don't reduce traditions to costume.",
    examples: [
      { context: "Summer", text: "Beach 👒" },
      { context: "Derby", text: "Outfit 👒" },
      { context: "Garden", text: "Tea party 👒" },
      { context: "Travel", text: "Provence 👒" },
      { context: "SPF", text: "Shade 👒" },
    ],
    contextBlocks: [
      { title: "Sun protection", body: "👒 pairs with SPF reminders — fashion plus function." },
      { title: "Vs 🎩", body: "🎩 formal top hat. 👒 sun/wide-brim daytime social." },
      { title: "Event fashion", body: "Outdoor weddings and derbies — 👒 completes the look." },
    ],
    searchIntents: ["womans hat emoji", "👒 sun hat", "👒 meaning", "derby hat emoji"],
    whenNotToUse: ["For winter beanies 🧢/🎿 gear.", "For formal men 🎩."],
    faqs: [
      { question: "What does 👒 mean?", answer: "Women's sun hat — summer fashion, derby, garden parties." },
      { question: "👒 vs cowboy hat?", answer: "👒 wide-brim dressy sun hat; 🤠 is cowboy western." },
    ],
  },

  kimono: {
    batchId: BATCH_ID,
    searchTitle: "Kimono Emoji (👘) Meaning: Japanese Traditional Dress, Culture, and Fashion",
    snippetAnswer:
      "👘 Kimono marks Japanese traditional dress — festivals, cultural appreciation, travel in Japan, and formal ceremony context.",
    detailedParagraphs: [
      "Kimono (👘) depicts traditional Japanese robe — Unicode symbol for cultural dress, not fast-fashion 'kimono' cardigans.",
      "Japan travelers text 👘 when booking yukata/kimono rental for Kyoto photo walks.",
      "Cultural educators stress 👘 refers to specific garment with history — respectful context matters.",
    ],
    textingMeaning: "'Kyoto rental 👘', 'Festival 👘', 'Ceremony 👘'.",
    socialMeaning: "Japan travel vlogs, Tanabata and Coming-of-Age posts, and museum exhibits tag 👘.",
    caution: "Avoid treating 👘 as costume — learn rental etiquette and cultural significance.",
    examples: [
      { context: "Travel", text: "Gion walk 👘" },
      { context: "Festival", text: "Matsuri 👘" },
      { context: "Rental", text: "Booked 👘" },
      { context: "Ceremony", text: "Formal 👘" },
      { context: "Museum", text: "Exhibit 👘" },
    ],
    contextBlocks: [
      { title: "Japan travel", body: "👘 signals kimono/yukata experience — major tourist and cultural activity." },
      { title: "Vs 🥻", body: "🥻 is sari — South Asian dress. 👘 is Japanese kimono." },
      { title: "Respectful use", body: "Pair 👘 with cultural learning — not generic 'exotic' aesthetic." },
    ],
    searchIntents: ["kimono emoji", "👘 meaning", "japanese dress emoji", "👘 copy paste"],
    whenNotToUse: ["Don't label Western bathrobes or open cardigans as kimono.", "Avoid mocking cultural dress."],
    faqs: [
      { question: "What does 👘 mean?", answer: "Kimono — Japanese traditional dress, festivals, travel, ceremony." },
      { question: "👘 vs yukata?", answer: "Yukata is casual summer cotton; kimono is broader formal tradition — emoji reads general." },
    ],
  },

  sari: {
    batchId: BATCH_ID,
    searchTitle: "Sari Emoji (🥻) Meaning: South Asian Dress, Celebrations, and Tradition",
    snippetAnswer:
      "🥻 Sari marks South Asian traditional dress — weddings, Diwali, formal celebrations, and cultural fashion posts.",
    detailedParagraphs: [
      "Sari (🥻) shows draped South Asian garment — Unicode symbol for Indian and diaspora celebration fashion.",
      "Wedding season group chats share 🥻 with color palette plans — bridesmaid coordination.",
      "Fashion designers and weavers showcase 🥻 to highlight textile artistry and regional styles.",
    ],
    textingMeaning: "'Wedding sari 🥻', 'Diwali outfit 🥻', 'Draping 🥻'.",
    socialMeaning: "Bollywood premiere fits, festival reels, and South Asian wedding content lead with 🥻.",
    caution: "Sari styles vary by region — avoid flattening diverse traditions into one look.",
    examples: [
      { context: "Wedding", text: "Reception 🥻" },
      { context: "Diwali", text: "Lights + 🥻" },
      { context: "Family", text: "Mom's silk 🥻" },
      { context: "Fashion", text: "New drape 🥻" },
      { context: "Event", text: "Formal 🥻" },
    ],
    contextBlocks: [
      { title: "Celebration wear", body: "🥻 anchors wedding and festival OOTD — formal cultural context." },
      { title: "Vs 👘", body: "👘 Japanese kimono. 🥻 South Asian sari — distinct traditions." },
      { title: "Textile art", body: "Weaving and drape technique posts educate beyond emoji alone." },
    ],
    searchIntents: ["sari emoji", "🥻 meaning", "indian dress emoji", "🥻 copy paste"],
    whenNotToUse: ["Never use 🥻 as costume mockery.", "Don't confuse with lehenga/salwar — specific garments differ."],
    faqs: [
      { question: "What does 🥻 mean?", answer: "Sari — South Asian traditional dress, weddings, festivals." },
      { question: "🥻 for all South Asia?", answer: "Associated with sari tradition across regions — styles vary widely." },
    ],
  },

  "one-piece-swimsuit": {
    batchId: BATCH_ID,
    searchTitle: "One-Piece Swimsuit Emoji (🩱) Meaning: Swimwear, Pool, and Beach Fashion",
    snippetAnswer:
      "🩱 One-Piece Swimsuit marks one-piece swimwear — pool days, swim teams, modest swim fashion, and beach vacation packing.",
    detailedParagraphs: [
      "One-Piece Swimsuit (🩱) shows classic one-piece — Unicode swim fashion distinct from 👙 bikini.",
      "Swim moms and athletes post 🩱 for lap pool and meet day — practical swim culture.",
      "Vacation packing lists pair 🩱 with 🩴 and 🕶️ — capsule beach bag.",
    ],
    textingMeaning: "'Pool day 🩱', 'Swim meet 🩱', 'Packed 🩱'.",
    socialMeaning: "Swimwear try-ons, synchronized swimming, and resort lookbooks tag 🩱.",
    caution: "Body commentary on 🩱 posts harms — celebrate without critiquing bodies.",
    examples: [
      { context: "Pool", text: "Laps 🩱" },
      { context: "Beach", text: "Vacation 🩱" },
      { context: "Meet", text: "Race day 🩱" },
      { context: "Try-on", text: "New suit 🩱" },
      { context: "Kids", text: "Swim class 🩱" },
    ],
    contextBlocks: [
      { title: "Vs 👙", body: "👙 bikini two-piece. 🩱 one-piece — different style preference." },
      { title: "Athletic swim", body: "🩱 common in competitive and lap swimming contexts." },
      { title: "Travel packing", body: "Resort trips list 🩱 alongside sunscreen and sandals." },
    ],
    searchIntents: ["one piece swimsuit emoji", "🩱 meaning", "swimsuit emoji", "🩱 copy paste"],
    whenNotToUse: ["For men's swim trunks 🩳.", "Not underwear — context is swim."],
    faqs: [
      { question: "What does 🩱 mean?", answer: "One-piece swimsuit — pool, beach, swim fashion, athletics." },
      { question: "🩱 vs 👙?", answer: "🩱 one-piece; 👙 bikini — both swimwear, different cuts." },
    ],
  },

  "ballet-shoes": {
    batchId: BATCH_ID,
    searchTitle: "Ballet Shoes Emoji (🩰) Meaning: Dance, Ballet, and Grace Aesthetic",
    snippetAnswer:
      "🩰 Ballet Shoes mean dance and ballet — recitals, Nutcracker season, flexibility memes, and graceful aesthetic posts.",
    detailedParagraphs: [
      "Ballet Shoes (🩰) show pink pointe/slipper pair — Unicode symbol for ballet culture and dance training.",
      "Dance moms live in 🩰 season — costume fittings and recital countdown group chats.",
      "Metaphorical use: 🩰 for delicate handling — 'tip-toe around this topic'.",
    ],
    textingMeaning: "'Recital 🩰', 'Studio day 🩰', 'On pointe 🩰'.",
    socialMeaning: "Dance Instagram, Nutcracker tickets, and flexibility TikTok tag 🩰.",
    caution: "Ballet body stereotypes hurt dancers — 🩰 shouldn't shame bodies.",
    examples: [
      { context: "Recital", text: "Tonight 🩰" },
      { context: "Class", text: "Barre 🩰" },
      { context: "Nutcracker", text: "Season 🩰" },
      { context: "Gift", text: "Tiny dancer 🩰" },
      { context: "Metaphor", text: "Delicate 🩰" },
    ],
    contextBlocks: [
      { title: "Dance culture", body: "🩰 is ballet identity — years of training behind the emoji." },
      { title: "Vs 👠", body: "👠 heels fashion. 🩰 dance slippers — different function." },
      { title: "Seasonal spikes", body: "Holiday Nutcracker drives 🩰 search every December." },
    ],
    searchIntents: ["ballet shoes emoji", "🩰 meaning", "ballet emoji", "🩰 copy paste"],
    whenNotToUse: ["For generic sneakers 👟.", "Not tap/jazz unless context clarifies."],
    faqs: [
      { question: "What does 🩰 mean?", answer: "Ballet shoes — dance, recitals, grace, ballet culture." },
      { question: "🩰 pointe?", answer: "Emoji reads general ballet slippers — includes pointe culture in posts." },
    ],
  },

  "womans-boot": {
    batchId: BATCH_ID,
    searchTitle: "Womans Boot Emoji (👢) Meaning: Fall Fashion, Boots, and Winter Outfits",
    snippetAnswer:
      "👢 Woman's Boot marks boots and fall fashion — knee-high styles, rainy day footwear, and winter outfit grids.",
    detailedParagraphs: [
      "Woman's Boot (👢) shows heeled knee-high boot — Unicode symbol for autumn/winter shoe fashion.",
      "Fall outfit posts require 👢 — pumpkin spice season uniform with 🧥.",
      "Festival and rainy city trips document 👢 as practical chic choice.",
    ],
    textingMeaning: "'Boot season 👢', 'New boots 👢', 'Rain fit 👢'.",
    socialMeaning: "Fall fashion TikTok, NYFW street style, and thrift boot finds tag 👢.",
    caution: "Tall 👢 in deep snow impractical — fashion vs function tradeoff.",
    examples: [
      { context: "Fall", text: "Boot weather 👢" },
      { context: "Shopping", text: "Suede 👢" },
      { context: "Outfit", text: "Skirt + 👢" },
      { context: "Rain", text: "Puddles 👢" },
      { context: "Thrift", text: "Score 👢" },
    ],
    contextBlocks: [
      { title: "Seasonal signal", body: "👢 announces autumn/winter wardrobe shift online." },
      { title: "Vs 👠", body: "👠 heels dress shoe. 👢 boot — more coverage, seasonal." },
      { title: "Vs 🥾", body: "🥾 hiking boot functional. 👢 fashion boot aesthetic." },
    ],
    searchIntents: ["womans boot emoji", "👢 meaning", "boot emoji", "👢 fall fashion"],
    whenNotToUse: ["For hiking trails 🥾.", "Men's boots — context may use 👞/🥾."],
    faqs: [
      { question: "What does 👢 mean?", answer: "Women's boot — fall fashion, winter outfits, knee-high styles." },
      { question: "👢 vs cowboy boot?", answer: "👢 fashion knee boot; 🤠 western cowboy distinct style." },
    ],
  },

  "flat-shoe": {
    batchId: BATCH_ID,
    searchTitle: "Flat Shoe Emoji (🥿) Meaning: Comfort Shoes, Ballet Flats, and Casual Style",
    snippetAnswer:
      "🥿 Flat Shoe means comfortable flats — office commute shoes, wedding dancing backup, and 'sensible but cute' fashion.",
    detailedParagraphs: [
      "Flat Shoe (🥿) depicts ballet flat style — Unicode symbol for low comfortable women's footwear.",
      "Commuters praise 🥿 for walkable office days — heels in bag, flats on feet.",
      "Wedding guests pack 🥿 for reception dancing after ceremony heels.",
    ],
    textingMeaning: "'Flats today 🥿', 'Comfort win 🥿', 'Commute shoes 🥿'.",
    socialMeaning: "Workwear TikTok, travel packing lists, and podiatrist-approved shoe posts tag 🥿.",
    caution: "Cheap flats without support hurt — comfort branding needs reality check.",
    examples: [
      { context: "Commute", text: "Walkable 🥿" },
      { context: "Wedding", text: "Dance swap 🥿" },
      { context: "Office", text: "Friday 🥿" },
      { context: "Travel", text: "Airport 🥿" },
      { context: "New pair", text: "Broken in 🥿" },
    ],
    contextBlocks: [
      { title: "Comfort culture", body: "🥿 rejects pain-for-beauty — practical fashion win." },
      { title: "Vs 👠", body: "👠 heels height. 🥿 flat comfort — office/travel default." },
      { title: "Vs 🩰", body: "🩰 dance slippers. 🥿 everyday fashion flat." },
    ],
    searchIntents: ["flat shoe emoji", "🥿 meaning", "ballet flat emoji", "🥿 copy paste"],
    whenNotToUse: ["For sneakers 👟.", "Men's dress shoes 👞."],
    faqs: [
      { question: "What does 🥿 mean?", answer: "Flat shoe — comfort, ballet flats, commute-friendly fashion." },
      { question: "🥿 for work?", answer: "Common for office commute and walkable professional outfits." },
    ],
  },

  "thong-sandal": {
    batchId: BATCH_ID,
    searchTitle: "Thong Sandal Emoji (🩴) Meaning: Flip-Flops, Beach, and Casual Summer",
    snippetAnswer:
      "🩴 Thong Sandal means flip-flops — beach days, poolside, hostel showers, and casual summer default footwear.",
    detailedParagraphs: [
      "Thong Sandal (🩴) shows flip-flop — Unicode beach culture staple across tropical travel.",
      "Hostel and gym shower posts mention 🩴 — communal floor protection.",
      "Beach wedding guests check dress code before assuming 🩴 acceptable.",
    ],
    textingMeaning: "'Flip-flops 🩴', 'Beach shoes 🩴', 'Poolside 🩴'.",
    socialMeaning: "Island vacation reels, surf town vlogs, and summer packing lists tag 🩴.",
    caution: "Driving in 🩴 unsafe — swap before car trips.",
    examples: [
      { context: "Beach", text: "Sand 🩴" },
      { context: "Pool", text: "Deck 🩴" },
      { context: "Travel", text: "Hostel 🩴" },
      { context: "Summer", text: "Default 🩴" },
      { context: "Shower", text: "Gym bag 🩴" },
    ],
    contextBlocks: [
      { title: "Beach default", body: "🩴 is universal vacation shoe — cheap, sandy, replaceable." },
      { title: "Vs 👡", body: "👡 dressy sandal heel. 🩴 casual rubber flip-flop." },
      { title: "Vs 🥿", body: "🥿 closed flat. 🩴 open toe thong sandal." },
    ],
    searchIntents: ["flip flop emoji", "🩴 meaning", "thong sandal emoji", "🩴 copy paste"],
    whenNotToUse: ["For formal events unless beach formal.", "Not slide sandal — still reads flip-flop."],
    faqs: [
      { question: "What does 🩴 mean?", answer: "Flip-flop/thong sandal — beach, pool, casual summer." },
      { question: "🩴 name?", answer: "Unicode says thong sandal — everyone says flip-flops." },
    ],
  },

  scarf: {
    batchId: BATCH_ID,
    searchTitle: "Scarf Emoji (🧣) Meaning: Winter Cozy, Cold Weather, and Outfit Layer",
    snippetAnswer:
      "🧣 Scarf marks winter warmth — cold snaps, cozy outfits, gift season, and 'bundle up' weather posts.",
    detailedParagraphs: [
      "Scarf (🧣) shows knitted neck scarf — Unicode symbol for cold weather layering and hygge aesthetic.",
      "Weather apps get 🧣 replies when freeze warnings hit — practical fashion alert.",
      "Knitters showcase 🧣 FO (finished object) posts — handmade gift culture.",
    ],
    textingMeaning: "'Bundle up 🧣', 'Cold out 🧣', 'Knit done 🧣'.",
    socialMeaning: "Cozy autumn Pinterest, ski trip packing, and gift guide posts tag 🧣.",
    caution: "Scarf around neck safety on moving equipment — keep loose ends clear.",
    examples: [
      { context: "Cold", text: "Freeze 🧣" },
      { context: "Outfit", text: "Layer 🧣" },
      { context: "Gift", text: "Hand knit 🧣" },
      { context: "Travel", text: "Iceland 🧣" },
      { context: "Cozy", text: "Hygge 🧣" },
    ],
    contextBlocks: [
      { title: "Winter uniform", body: "🧣 + 🧥 + ☕ = seasonal content template." },
      { title: "Vs 🧤", body: "🧤 gloves hands. 🧣 neck warmth — pair together." },
      { title: "Handmade gifts", body: "Knit community celebrates 🧣 finishes before holidays." },
    ],
    searchIntents: ["scarf emoji", "🧣 meaning", "winter scarf emoji", "🧣 copy paste"],
    whenNotToUse: ["For hijab/religious head cover — different meaning; be respectful."],
    faqs: [
      { question: "What does 🧣 mean?", answer: "Scarf — cold weather, cozy outfits, winter gifts." },
      { question: "🧣 for fashion?", answer: "Yes — layering accessory beyond pure utility." },
    ],
  },

  gloves: {
    batchId: BATCH_ID,
    searchTitle: "Gloves Emoji (🧤) Meaning: Winter Hands, Sports, and Formal Wear",
    snippetAnswer:
      "🧤 Gloves mean hand coverage — winter cold, baseball/sports, formal white gloves, and cleaning day.",
    detailedParagraphs: [
      "Gloves (🧤) show pair of hand gloves — Unicode spans winter knit, sport, and formal contexts.",
      "Forecast threads add 🧤 when wind chill brutal — sibling to 🧣.",
      "Baseball and boxing borrow 🧤 for sport gear — context disambiguates.",
    ],
    textingMeaning: "'Wear 🧤', 'Freezing hands 🧤', 'Game day 🧤'.",
    socialMeaning: "Ski content, winter running, and vintage formal fashion use 🧤.",
    caution: "Disposable 🧤 during illness differ from fashion — specify hygiene context.",
    examples: [
      { context: "Winter", text: "Wind chill 🧤" },
      { context: "Ski", text: "Slope 🧤" },
      { context: "Sport", text: "Catch 🧤" },
      { context: "Formal", text: "Opera 🧤" },
      { context: "Clean", text: "Chores 🧤" },
    ],
    contextBlocks: [
      { title: "Cold hands", body: "🧤 solves texting-in-cold complaints — or touch-screen gloves brag." },
      { title: "Sports gear", body: "Baseball mitt culture maps to 🧤 in US sports posts." },
      { title: "Vs 🧣", body: "🧣 neck. 🧤 hands — winter outfit duo." },
    ],
    searchIntents: ["gloves emoji", "🧤 meaning", "winter gloves emoji", "🧤 copy paste"],
    whenNotToUse: ["Medical exam gloves need clear hygiene context."],
    faqs: [
      { question: "What does 🧤 mean?", answer: "Gloves — winter warmth, sports, formal, cleaning." },
      { question: "🧤 baseball?", answer: "Sometimes — sport glove metaphor in baseball context." },
    ],
  },

  coat: {
    batchId: BATCH_ID,
    searchTitle: "Coat Emoji (🧥) Meaning: Outerwear, Fall Layers, and Cold Weather",
    snippetAnswer:
      "🧥 Coat marks outerwear and layering — fall jackets, winter bundling, new coat shopping, and 'grab your coat' before leaving.",
    detailedParagraphs: [
      "Coat (🧥) shows trench-style outerwear — Unicode symbol for seasonal jacket fashion and warmth.",
      "Parents text 🧥 when kids leave without jacket — universal nag emoji.",
      "Fall capsule wardrobe posts center 🧥 — investment piece culture.",
    ],
    textingMeaning: "'Grab 🧥', 'New coat 🧥', 'Layer up 🧥'.",
    socialMeaning: "Autumn outfit reels, thrift coat transformations, and travel packing tag 🧥.",
    caution: "Indoor venues with 🧥 check — queue lines in winter.",
    examples: [
      { context: "Leave", text: "Bring 🧥" },
      { context: "Shopping", text: "Trench 🧥" },
      { context: "Fall", text: "Layer season 🧥" },
      { context: "Travel", text: "Pack 🧥" },
      { context: "Kids", text: "Bus stop 🧥" },
    ],
    contextBlocks: [
      { title: "Season transition", body: "🧥 announces cooler weather wardrobe shift." },
      { title: "Vs 👚", body: "👚 indoor top. 🧥 outer layer over outfit." },
      { title: "Parent nag", body: "'Don't forget your 🧥' — cross-cultural childhood memory." },
    ],
    searchIntents: ["coat emoji", "🧥 meaning", "jacket emoji", "🧥 copy paste"],
    whenNotToUse: ["For lab coat 🥼 specifically.", "Heavy parka may read 🧥 generically anyway."],
    faqs: [
      { question: "What does 🧥 mean?", answer: "Coat/outerwear — fall layers, cold weather, jacket fashion." },
      { question: "🧥 vs 🥼?", answer: "🧥 general coat. 🥼 white lab coat science/medical." },
    ],
  },

  goggles: {
    batchId: BATCH_ID,
    searchTitle: "Goggles Emoji (🥽) Meaning: Swim, Lab, Ski, and Safety Eyewear",
    snippetAnswer:
      "🥽 Goggles mean protective eyewear — swimming laps, chemistry lab, skiing, and DIY safety posts.",
    detailedParagraphs: [
      "Goggles (🥽) show safety/swim eyewear — Unicode multi-context: pool, lab, workshop.",
      "Swim meet parents pack extra 🥽 — lost goggles emergency universal.",
      "Science fair and chem lab memes lead with 🥽 — safety first humor.",
    ],
    textingMeaning: "'Pack 🥽', 'Lab day 🥽', 'Pool 🥽'.",
    socialMeaning: "Swim team groups, ski trip packing, and maker space safety tag 🥽.",
    caution: "Actual lab/ski/work requires certified gear — emoji isn't PPE compliance.",
    examples: [
      { context: "Swim", text: "Meet 🥽" },
      { context: "Lab", text: "Splash zone 🥽" },
      { context: "Ski", text: "Pow day 🥽" },
      { context: "DIY", text: "Safety 🥽" },
      { context: "Lost", text: "Backup 🥽" },
    ],
    contextBlocks: [
      { title: "Swim culture", body: "🥽 essential swim bag item — fog and strap drama included." },
      { title: "Vs 🕶️", body: "🕶️ sunglasses style. 🥽 sealed protective eyewear." },
      { title: "Lab safety", body: "Chem courses meme 🥽 — real labs require proper fit." },
    ],
    searchIntents: ["goggles emoji", "🥽 meaning", "swim goggles emoji", "🥽 copy paste"],
    whenNotToUse: ["Fashion sunglasses — 🕶️.", "VR headset — different device."],
    faqs: [
      { question: "What does 🥽 mean?", answer: "Goggles — swim, lab, ski, safety eyewear." },
      { question: "🥽 contexts?", answer: "Pool, science lab, skiing — context from chat clarifies." },
    ],
  },

  "lab-coat": {
    batchId: BATCH_ID,
    searchTitle: "Lab Coat Emoji (🥼) Meaning: Science, Medical Students, and Research",
    snippetAnswer:
      "🥼 Lab Coat marks science and medicine — med school milestones, research lab days, pharmacist life, and 'trust me I'm a scientist' jokes.",
    detailedParagraphs: [
      "Lab Coat (🥼) shows white laboratory coat — Unicode symbol for STEM, healthcare training, and research.",
      "Med students photograph 🥼 white coat ceremony — rite of passage posts.",
      "Podcast and science communicators use 🥼 brand identity — authority aesthetic.",
    ],
    textingMeaning: "'Lab all day 🥼', 'White coat 🥼', 'Research 🥼'.",
    socialMeaning: "Med Twitter, PhD life memes, and pharmacy shift updates tag 🥼.",
    caution: "White coat ≠ licensed provider alone — credentials matter in health info.",
    examples: [
      { context: "Med school", text: "Ceremony 🥼" },
      { context: "Lab", text: "PCR day 🥼" },
      { context: "Pharmacy", text: "Shift 🥼" },
      { context: "Research", text: "Grant 🥼" },
      { context: "Sci comm", text: "Episode 🥼" },
    ],
    contextBlocks: [
      { title: "White coat ceremony", body: "🥼 marks med/dental/pharmacy milestone — emotional posts." },
      { title: "Vs 🧥", body: "🧥 street coat. 🥼 professional lab/medical coat." },
      { title: "STEM identity", body: "Researchers flex 🥼 in lab selfie culture — safety with style." },
    ],
    searchIntents: ["lab coat emoji", "🥼 meaning", "scientist emoji", "🥼 copy paste"],
    whenNotToUse: ["Don't impersonate medical authority with 🥼 alone."],
    faqs: [
      { question: "What does 🥼 mean?", answer: "Lab coat — science, med school, research, pharmacy." },
      { question: "🥼 for doctor?", answer: "Often med/health training — not sole proof of licensure." },
    ],
  },

  "safety-vest": {
    batchId: BATCH_ID,
    searchTitle: "Safety Vest Emoji (🦺) Meaning: Construction, Visibility, and On-Site Work",
    snippetAnswer:
      "🦺 Safety Vest marks high-visibility workwear — construction sites, road crews, warehouse shifts, and safety-first posts.",
    detailedParagraphs: [
      "Safety Vest (🦺) shows fluorescent vest — Unicode symbol for workers needing visibility on job sites.",
      "Contractors text 🦺 when arriving on site — day-in-the-life trade content.",
      "Event production crews use 🦺 for backstage and festival build — safety culture.",
    ],
    textingMeaning: "'On site 🦺', 'Road crew 🦺', 'Safety first 🦺'.",
    socialMeaning: "Construction TikTok, infrastructure projects, and OSHA-aware posts tag 🦺.",
    caution: "Real sites need full PPE — 🦺 alone isn't compliance.",
    examples: [
      { context: "Site", text: "Hard hat + 🦺" },
      { context: "Road", text: "Crew 🦺" },
      { context: "Warehouse", text: "Shift 🦺" },
      { context: "Event", text: "Build day 🦺" },
      { context: "Training", text: "OSHA 🦺" },
    ],
    contextBlocks: [
      { title: "Visibility standard", body: "🦺 signals worker presence — drivers should slow near crews." },
      { title: "Vs ⛑️", body: "⛑️ rescue helmet. 🦺 high-vis vest — different PPE." },
      { title: "Trade content", body: "Blue-collar creators normalize 🦺 in daily vlogs." },
    ],
    searchIntents: ["safety vest emoji", "🦺 meaning", "construction vest emoji", "🦺 copy paste"],
    whenNotToUse: ["Fashion neon — context is work safety."],
    faqs: [
      { question: "What does 🦺 mean?", answer: "Safety vest — construction, road work, high-visibility jobs." },
      { question: "🦺 required?", answer: "Many job sites mandate hi-vis — emoji reflects that culture." },
    ],
  },

  "military-helmet": {
    batchId: BATCH_ID,
    searchTitle: "Military Helmet Emoji (🪖) Meaning: Army, Gaming, and Tactical Context",
    snippetAnswer:
      "🪖 Military Helmet marks military and tactical context — service members, war games, FPS gaming, and history discussions.",
    detailedParagraphs: [
      "Military Helmet (🪖) depicts combat helmet — Unicode added for armed forces representation.",
      "Veterans and active duty may use 🪖 in memorial and service posts — respectful tone essential.",
      "Gamers spam 🪖 in squad chat — Call of Duty and tactical shooter culture.",
    ],
    textingMeaning: "'Deployed 🪖', 'Squad up 🪖', 'Veterans day 🪖'.",
    socialMeaning: "Military family groups, FPS streams, and history education tag 🪖.",
    caution: "Never mock real service or trauma with gaming 🪖 jokes crossover.",
    examples: [
      { context: "Service", text: "Training 🪖" },
      { context: "Memorial", text: "Honor 🪖" },
      { context: "Gaming", text: "Squad 🪖" },
      { context: "History", text: "Unit 🪖" },
      { context: "Family", text: "Proud 🪖" },
    ],
    contextBlocks: [
      { title: "Service respect", body: "🪖 in military context deserves gravity — not costume default." },
      { title: "Vs ⛑️", body: "⛑️ rescue worker helmet. 🪖 military combat helmet." },
      { title: "Gaming", body: "FPS communities adopted 🪖 for loadout and squad memes." },
    ],
    searchIntents: ["military helmet emoji", "🪖 meaning", "army helmet emoji", "🪖 copy paste"],
    whenNotToUse: ["Avoid trivializing war for marketing.", "Not construction hard hat."],
    faqs: [
      { question: "What does 🪖 mean?", answer: "Military helmet — armed forces, tactical, FPS gaming." },
      { question: "🪖 vs ⛑️?", answer: "🪖 military. ⛑️ civil rescue/construction safety helmet." },
    ],
  },

  "rescue-workers-helmet": {
    batchId: BATCH_ID,
    searchTitle: "Rescue Workers Helmet Emoji (⛑️) Meaning: First Responders, Safety, and Help",
    snippetAnswer:
      "⛑️ Rescue Worker’s Helmet marks first responders and safety — firefighters, rescue crews, construction hard hats, and 'help is here'.",
    detailedParagraphs: [
      "Rescue Worker's Helmet (⛑️) shows white cross helmet — Unicode symbol for emergency rescue and safety workers.",
      "Disaster response threads use ⛑️ for gratitude toward first responders — serious tone.",
      "Construction safety posts pair ⛑️ with 🦺 — PPE checklist culture.",
    ],
    textingMeaning: "'First responders 🏥⛑️', 'Site safety ⛑️', 'Help arrived ⛑️'.",
    socialMeaning: "Firefighter appreciation, earthquake relief, and safety training promos tag ⛑️.",
    caution: "During active disasters, performative ⛑️ posts without action or donation help little.",
    examples: [
      { context: "Thanks", text: "Heroes ⛑️" },
      { context: "Safety", text: "PPE ⛑️" },
      { context: "Training", text: "Drill ⛑️" },
      { context: "Build", text: "Hard hat ⛑️" },
      { context: "Relief", text: "Crews ⛑️" },
    ],
    contextBlocks: [
      { title: "First responders", body: "⛑️ honors fire/rescue — cross symbol reads medical/rescue aid." },
      { title: "Vs 🪖", body: "🪖 military combat. ⛑️ civil rescue/construction safety." },
      { title: "Construction", body: "Hard hat emoji overlap — ⛑️ includes cross rescue association." },
    ],
    searchIntents: ["rescue helmet emoji", "⛑️ meaning", "first responder emoji", "⛑️ copy paste"],
    whenNotToUse: ["Don't use for military combat — 🪖.", "Avoid hero worship that ignores systemic issues."],
    faqs: [
      { question: "What does ⛑️ mean?", answer: "Rescue/safety helmet — firefighters, first aid, construction PPE." },
      { question: "⛑️ cross meaning?", answer: "Red cross association — rescue and medical aid symbol on helmet." },
    ],
  },

  socks: {
    batchId: BATCH_ID,
    searchTitle: "Socks Emoji (🧦) Meaning: Cozy, Laundry, and Gift Humor",
    snippetAnswer:
      "🧦 Socks mean cozy basics — laundry day, dad gift jokes, missing sock mystery, and winter warm feet posts.",
    detailedParagraphs: [
      "Socks (🧦) show paired socks — Unicode symbol for everyday basics and wholesome gift humor.",
      "Christmas gift roast threads feature 🧦 — 'another pair from grandma' affection.",
      "Runners debate 🧦 blister prevention — technical sock nerd content.",
    ],
    textingMeaning: "'Lost sock 🧦', 'Cozy 🧦', 'Gift 🧦'.",
    socialMeaning: "Laundry memes, holiday gift guides, and running gear reviews tag 🧦.",
    caution: "Sock gift jokes tired — know if recipient actually wants 🧦.",
    examples: [
      { context: "Laundry", text: "Missing one 🧦" },
      { context: "Gift", text: "Classic 🧦" },
      { context: "Cozy", text: "Fuzzy 🧦" },
      { context: "Run", text: "No blisters 🧦" },
      { context: "Winter", text: "Warm feet 🧦" },
    ],
    contextBlocks: [
      { title: "Gift humor", body: "🧦 is default 'boring gift' meme — often said with love." },
      { title: "Dryer mystery", body: "Single 🧦 without partner — universal laundry lore." },
      { title: "Vs 👟", body: "👟 shoes outside. 🧦 layer inside — outfit completeness." },
    ],
    searchIntents: ["socks emoji", "🧦 meaning", "sock emoji copy paste", "🧦 gift"],
    whenNotToUse: ["Weird foot connotations — keep wholesome unless clear joke among friends."],
    faqs: [
      { question: "What does 🧦 mean?", answer: "Socks — cozy, laundry, gifts, warm feet." },
      { question: "🧦 Christmas gift?", answer: "Common joke gift — practical socks also genuinely wanted." },
    ],
  },

  briefs: {
    batchId: BATCH_ID,
    searchTitle: "Briefs Emoji (🩲) Meaning: Underwear, Laundry, and Swim Adjacent",
    snippetAnswer:
      "🩲 Briefs mark men's underwear — laundry day, packing lists, swim brief adjacency, and underwear humor among friends.",
    detailedParagraphs: [
      "Briefs (🩲) show men's undergarment — Unicode symbol for underwear context, not public outfit.",
      "Travel packing memes list 🩲 — 'don't forget essentials' roommate reminders.",
      "Locker room humor stays among consenting friends — public 🩲 cringe otherwise.",
    ],
    textingMeaning: "'Pack 🩲', 'Laundry 🩲', 'Essentials 🩲'.",
    socialMeaning: "Minimalist packing TikTok, gym bag checks, and laundry day posts use 🩲 sparingly.",
    caution: "Unsolicited 🩲 messages harass — keep context appropriate.",
    examples: [
      { context: "Packing", text: "Don't forget 🩲" },
      { context: "Laundry", text: "Basket 🩲" },
      { context: "Gym bag", text: "Spare 🩲" },
      { context: "Travel", text: "Carry-on 🩲" },
      { context: "Roommate", text: "Your turn 🩲" },
    ],
    contextBlocks: [
      { title: "Underwear context", body: "🩲 always private garment — laundry/packing not lewd by default." },
      { title: "Vs 🩳", body: "🩳 shorts/swim trunks outer. 🩲 underwear brief." },
      { title: "Vs 👙", body: "👙 women's swim. 🩲 men's underwear — different use." },
    ],
    searchIntents: ["briefs emoji", "🩲 meaning", "underwear emoji", "🩲 copy paste"],
    whenNotToUse: ["Flirting strangers.", "Public outfit posts — wrong garment layer."],
    faqs: [
      { question: "What does 🩲 mean?", answer: "Men's briefs underwear — laundry, packing, essentials humor." },
      { question: "🩲 vs swim brief?", answer: "Emoji reads underwear; swim context needs clear pool/beach text." },
    ],
  },

  shorts: {
    batchId: BATCH_ID,
    searchTitle: "Shorts Emoji (🩳) Meaning: Summer, Gym, and Casual Wear",
    snippetAnswer:
      "🩳 Shorts mean casual short pants — gym sessions, beach cover, hot weather outfits, and summer wardrobe posts.",
    detailedParagraphs: [
      "Shorts (🩳) depict short trousers/swim trunks — Unicode summer and athletic staple.",
      "Gym bros post 🩳 leg day — mirror selfie culture.",
      "Heat wave threads mandate 🩳 — 'too hot for jeans' solidarity.",
    ],
    textingMeaning: "'Shorts weather 🩳', 'Gym 🩳', 'Beach 🩳'.",
    socialMeaning: "Summer fit checks, basketball pickup, and vacation packing tag 🩳.",
    caution: "Dress codes vary — 🩳 not everywhere appropriate.",
    examples: [
      { context: "Heat", text: "Jeans off 🩳" },
      { context: "Gym", text: "Leg day 🩳" },
      { context: "Beach", text: "Boardwalk 🩳" },
      { context: "Travel", text: "Packed 🩳" },
      { context: "Sport", text: "Pickup 🩳" },
    ],
    contextBlocks: [
      { title: "Summer default", body: "🩳 signals hot weather casual — gym or street." },
      { title: "Vs 🩲", body: "🩲 underwear. 🩳 outer shorts/trunks." },
      { title: "Vs 👖", body: "👖 long pants. 🩳 shortened warm-weather version." },
    ],
    searchIntents: ["shorts emoji", "🩳 meaning", "swim trunks emoji", "🩳 copy paste"],
    whenNotToUse: ["Formal events requiring long pants."],
    faqs: [
      { question: "What does 🩳 mean?", answer: "Shorts — summer, gym, swim trunks, casual wear." },
      { question: "🩳 swim or gym?", answer: "Both — context clarifies swim trunks vs athletic shorts." },
    ],
  },

  "mans-shoe": {
    batchId: BATCH_ID,
    searchTitle: "Mans Shoe Emoji (👞) Meaning: Dress Shoes, Formal, and Menswear",
    snippetAnswer:
      "👞 Man's Shoe marks men's dress footwear — interviews, weddings, office formal, and polished menswear posts.",
    detailedParagraphs: [
      "Man's Shoe (👞) shows brown dress shoe — Unicode symbol for formal men's footwear.",
      "Job interview prep lists 👞 with suit — last-minute shine panic.",
      "Menswear enthusiasts compare 👞 patina and Goodyear welt in niche forums.",
    ],
    textingMeaning: "'Dress shoes 👞', 'Interview 👞', 'Polished 👞'.",
    socialMeaning: "Wedding guest fit pics, finance bro uniform memes, and thrift resole projects tag 👞.",
    caution: "Standing all day in stiff 👞 hurts — pack backup flats for events.",
    examples: [
      { context: "Interview", text: "Shined 👞" },
      { context: "Wedding", text: "Guest fit 👞" },
      { context: "Office", text: "Monday 👞" },
      { context: "Thrift", text: "Resole 👞" },
      { context: "Formal", text: "Black tie 👞" },
    ],
    contextBlocks: [
      { title: "Formal menswear", body: "👞 completes suit posts — default dress shoe emoji." },
      { title: "Vs 👟", body: "👟 sneakers casual. 👞 leather dress formal." },
      { title: "Vs 🥿", body: "🥿 women's flat. 👞 men's dress shoe." },
    ],
    searchIntents: ["mans shoe emoji", "👞 meaning", "dress shoe emoji", "👞 copy paste"],
    whenNotToUse: ["For sneakers 👟.", "Women's heels 👠."],
    faqs: [
      { question: "What does 👞 mean?", answer: "Men's dress shoe — formal, office, interview, wedding." },
      { question: "👞 vs 👟?", answer: "👞 formal leather. 👟 athletic/casual sneaker." },
    ],
  },

  "womans-sandal": {
    batchId: BATCH_ID,
    searchTitle: "Womans Sandal Emoji (👡) Meaning: Summer Heels, Dressy Sandals, and Warm Weather",
    snippetAnswer:
      "👡 Woman's Sandal marks dressy summer footwear — heeled sandals, wedding guest shoes, and warm-weather outfit finishing.",
    detailedParagraphs: [
      "Woman's Sandal (👡) shows heeled strappy sandal — Unicode symbol for dressy warm-weather shoes.",
      "Summer wedding season coordinates 👡 with midi dress posts — outdoor venue heel sink warnings.",
      "Vacation dinner outfits pair 👡 with 🌴 — resort evening look.",
    ],
    textingMeaning: "'Sandals 👡', 'Wedding shoes 👡', 'Summer heels 👡'.",
    socialMeaning: "Bridal party shoe choices, pedicure reveal posts, and resort OOTD tag 👡.",
    caution: "Grass and cobblestone destroy 👡 heel stability — plan backup 🥿.",
    examples: [
      { context: "Wedding", text: "Guest 👡" },
      { context: "Summer", text: "Strappy 👡" },
      { context: "Pedi", text: "Show off 👡" },
      { context: "Resort", text: "Dinner 👡" },
      { context: "Outfit", text: "Dress + 👡" },
    ],
    contextBlocks: [
      { title: "Dressy summer", body: "👡 is elevated sandal — not beach flip-flop 🩴." },
      { title: "Vs 🩴", body: "🩴 rubber flip-flop casual. 👡 heeled dress sandal." },
      { title: "Vs 👠", body: "👠 closed heel pump. 👡 open sandal heel." },
    ],
    searchIntents: ["womans sandal emoji", "👡 meaning", "heel sandal emoji", "👡 copy paste"],
    whenNotToUse: ["Beach poolside — 🩴.", "Hiking — 🥾."],
    faqs: [
      { question: "What does 👡 mean?", answer: "Women's heeled sandal — summer formal, weddings, dressy warm weather." },
      { question: "👡 vs 👠?", answer: "👡 open sandal. 👠 closed dress shoe — both can be heeled." },
    ],
  },
};
