import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "20-objects-mail-office-media";

/** Batch 20 P0 — mail, office, media, charts (objects category start). */
export const batch20ObjectsMailOfficeMedia: Record<string, EmojiBatchEnrichment> = {
  "e-mail": {
    batchId: BATCH_ID,
    searchTitle: "E-Mail Emoji (📧) Meaning: Email, Inbox, and Digital Messages",
    snippetAnswer:
      "📧 E-Mail marks email and digital messages — work inbox pings, 'check your email', and newsletter signup confirmations.",
    detailedParagraphs: [
      "E-Mail (📧) shows an envelope with @ symbol — Unicode's clearest email icon for digital correspondence.",
      "HR and recruiters text 📧 when offer letters land — faster than typing 'sent to your inbox'.",
      "Newsletter and SaaS onboarding threads use 📧 for confirmation and spam-folder jokes.",
    ],
    textingMeaning: "'Check 📧', 'Sent to your email 📧', 'Inbox full 📧'.",
    socialMeaning: "Job hunt updates, creator 'link in bio' funnels, and work Slack cross-posts tag 📧.",
    caution: "Phishing awareness — real banks rarely ask for secrets via random 📧 links.",
    examples: [
      { context: "Work", text: "Offer letter 📧" },
      { context: "Reminder", text: "Check spam 📧" },
      { context: "Signup", text: "Confirm 📧" },
      { context: "Recruiter", text: "Sent details 📧" },
      { context: "Newsletter", text: "Subscribed 📧" },
    ],
    contextBlocks: [
      { title: "Work communication", body: "📧 is default 'formal message arrived' — contracts, HR, invoices." },
      { title: "Vs ✉️", body: "✉️ is generic envelope. 📧 explicitly means email/digital." },
      { title: "Vs 📨", body: "📨 is incoming envelope. 📧 stresses @/email channel." },
    ],
    searchIntents: ["email emoji", "📧 meaning", "e-mail emoji copy paste", "📧 symbol"],
    whenNotToUse: ["For physical snail mail prefer 📨 or 📬."],
    faqs: [
      { question: "What does 📧 mean?", answer: "Email — digital message, inbox, check your mail." },
      { question: "📧 vs envelope emoji?", answer: "📧 includes @ — specifically email, not paper mail." },
    ],
  },

  "envelope-with-arrow": {
    batchId: BATCH_ID,
    searchTitle: "Envelope With Arrow Emoji (📩) Meaning: Sent Mail, Outgoing, and DM",
    snippetAnswer:
      "📩 Envelope With Arrow means outgoing mail — you sent it, message dispatched, or 'slide into DMs' energy.",
    detailedParagraphs: [
      "Envelope With Arrow (📩) shows letter flying out — Unicode symbol for sent messages and outgoing email.",
      "Freelancers confirm 📩 when proposals or invoices go out — closure on the sending side.",
      "Social slang borrows 📩 for DMs sent — 'just 📩 you' in creator circles.",
    ],
    textingMeaning: "'Sent 📩', 'Check your DMs 📩', 'Proposal out 📩'.",
    socialMeaning: "Outreach flex posts, cold-email humor, and 'message delivered' confirmations use 📩.",
    caution: "Unsolicited 📩 spam ruins trust — don't celebrate junk outreach.",
    examples: [
      { context: "Sent", text: "Just 📩 it" },
      { context: "Freelance", text: "Invoice sent 📩" },
      { context: "DM", text: "Slid in 📩" },
      { context: "Apply", text: "App submitted 📩" },
      { context: "Follow-up", text: "Resent 📩" },
    ],
    contextBlocks: [
      { title: "Outgoing vs incoming", body: "📩 arrow out = you sent. 📨 arrow in = you received." },
      { title: "Creator outreach", body: "📩 marks pitch sent — collab or sponsor email dispatched." },
      { title: "Vs 📤", body: "📤 is outbox tray. 📩 is single sent envelope metaphor." },
    ],
    searchIntents: ["envelope with arrow emoji", "📩 sent mail", "📩 meaning", "outgoing email emoji"],
    whenNotToUse: ["For received mail use 📨 incoming envelope."],
    faqs: [
      { question: "What does 📩 mean?", answer: "Sent/outgoing mail — email dispatched or DM sent." },
      { question: "📩 vs 📨?", answer: "📩 outgoing. 📨 incoming." },
    ],
  },

  "outbox-tray": {
    batchId: BATCH_ID,
    searchTitle: "Outbox Tray Emoji (📤) Meaning: Sent Folder, Upload, and Outgoing",
    snippetAnswer:
      "📤 Outbox Tray marks sent items — email sent folder, file uploads, and 'I already sent that' work replies.",
    detailedParagraphs: [
      "Outbox Tray (📤) depicts tray with arrow up — Unicode mirror of 📥 inbox for sent/outgoing items.",
      "Office workers cite 📤 when proof-of-send matters — 'it's in sent, check 📤'.",
      "File share contexts use 📤 for upload complete — cloud drive and WeTransfer vibes.",
    ],
    textingMeaning: "'In sent folder 📤', 'Uploaded 📤', 'Already forwarded 📤'.",
    socialMeaning: "Remote work threads, IT ticket closures, and share-link drops tag 📤.",
    caution: "Sent folder ≠ delivered — bounces still happen after 📤.",
    examples: [
      { context: "Email", text: "Check sent 📤" },
      { context: "Upload", text: "Drive link 📤" },
      { context: "Proof", text: "Timestamp in sent 📤" },
      { context: "Forward", text: "Forwarded 📤" },
      { context: "Share", text: "File 📤" },
    ],
    contextBlocks: [
      { title: "Email UX metaphor", body: "📤 maps to 'Sent' tab — millennials recognize instantly." },
      { title: "Vs 📥", body: "📥 is inbox/receive. 📤 is outbox/send." },
      { title: "Upload shorthand", body: "Beyond email, 📤 means 'pushed to cloud/shared'." },
    ],
    searchIntents: ["outbox emoji", "📤 meaning", "sent folder emoji", "📤 upload"],
    whenNotToUse: ["For single sent letter 📩 may feel more personal."],
    faqs: [
      { question: "What does 📤 mean?", answer: "Outbox/sent — outgoing mail, uploads, forwarded items." },
      { question: "📤 for uploads?", answer: "Yes — common metaphor for sending files outward." },
    ],
  },

  "inbox-tray": {
    batchId: BATCH_ID,
    searchTitle: "Inbox Tray Emoji (📥) Meaning: Inbox, Downloads, and Unread Stack",
    snippetAnswer:
      "📥 Inbox Tray means inbox and downloads — unread email piles, 'just landed in my inbox', and saved files.",
    detailedParagraphs: [
      "Inbox Tray (📥) shows tray with arrow down — Unicode pair to 📤 for received items.",
      "Inbox-zero warriors ironically spam 📥 when 2,000 unread returns after vacation.",
      "Download complete notifications borrow 📥 — browser save and app update language.",
    ],
    textingMeaning: "'Inbox zero 📥', '200 unread 📥', 'Downloaded 📥'.",
    socialMeaning: "Work burnout memes, job application floods, and torrent humor (careful legally) use 📥.",
    caution: "Bragging about unread 📥 can stress people drowning in email.",
    examples: [
      { context: "Email", text: "Inbox nightmare 📥" },
      { context: "Job hunt", text: "Rejections 📥" },
      { context: "Download", text: "Saved 📥" },
      { context: "Vacation", text: "Back to 📥 hell" },
      { context: "Newsletter", text: "Sub stack 📥" },
    ],
    contextBlocks: [
      { title: "Inbox culture", body: "📥 triggers email anxiety or productivity flex — context tells which." },
      { title: "Vs 📨", body: "📨 is one letter arriving. 📥 is tray/stack of incoming." },
      { title: "Downloads", body: "Tech chats use 📥 when file hit the downloads folder." },
    ],
    searchIntents: ["inbox emoji", "📥 meaning", "inbox tray emoji", "📥 download"],
    whenNotToUse: ["For sent items use 📤."],
    faqs: [
      { question: "What does 📥 mean?", answer: "Inbox/received — unread mail stack or downloaded files." },
      { question: "Inbox zero emoji?", answer: "📥 ironically — empty inbox posts still use the tray symbol." },
    ],
  },

  "closed-mailbox-with-raised-flag": {
    batchId: BATCH_ID,
    searchTitle: "Closed Mailbox Raised Flag Emoji (📫) Meaning: Mail Ready, Pickup, and Suburban Life",
    snippetAnswer:
      "📫 Closed Mailbox Raised Flag means mail is ready — outgoing pickup, USPS suburban icon, and 'check the mail' errands.",
    detailedParagraphs: [
      "Closed Mailbox With Raised Flag (📫) shows US-style mailbox, flag up — Unicode signal that mail awaits carrier pickup or delivery notice.",
      "Suburban roommates text 📫 when packages or letters arrived — walk to curb ritual.",
      "Small sellers raise 📫 metaphorically when orders ship via snail mail — Etsy vintage sellers.",
    ],
    textingMeaning: "'Mail came 📫', 'Flag up 📫', 'Check mailbox 📫'.",
    socialMeaning: "Nostalgia posts, pen-pal communities, and rural life vlogs tag 📫.",
    caution: "Mailbox theft is real — don't post tracking labels with address visible.",
    examples: [
      { context: "Delivery", text: "Package in 📫" },
      { context: "Errand", text: "Walk to 📫" },
      { context: "Outgoing", text: "Flag up 📫" },
      { context: "Pen pal", text: "Letter day 📫" },
      { context: "Suburbs", text: "Curbside 📫" },
    ],
    contextBlocks: [
      { title: "US mailbox culture", body: "📫 reads American suburban — raised flag = outgoing mail for carrier." },
      { title: "Vs 📭", body: "📭 lowered flag = no outgoing. 📫 raised = mail to send/pickup signal." },
      { title: "Vs 📪", body: "📪 closed lowered — empty/no outgoing. Flag position matters." },
    ],
    searchIntents: ["mailbox emoji", "📫 meaning", "closed mailbox raised flag", "📫 mail"],
    whenNotToUse: ["For UK red postbox use 📮."],
    faqs: [
      { question: "What does 📫 mean?", answer: "Mailbox with flag up — mail ready, delivery, suburban pickup." },
      { question: "Raised flag meaning?", answer: "US convention: flag up tells carrier mail to collect or that delivery occurred." },
    ],
  },

  "open-mailbox-with-raised-flag": {
    batchId: BATCH_ID,
    searchTitle: "Open Mailbox Raised Flag Emoji (📬) Meaning: Outgoing Mail and Open Box",
    snippetAnswer:
      "📬 Open Mailbox Raised Flag marks outgoing mail in an open box — letters ready for pickup and pen-pal send days.",
    detailedParagraphs: [
      "Open Mailbox With Raised Flag (📬) shows open door and raised flag — Unicode variant emphasizing visible outgoing mail.",
      "Pen-pal and stationery communities celebrate 📬 send days — photos of stacked envelopes.",
      "HOA and neighbor threads mention 📬 when misdelivered mail appears in open box.",
    ],
    textingMeaning: "'Dropped in 📬', 'Outgoing ready 📬', 'Open box 📬'.",
    socialMeaning: "Snail-mail aesthetic Instagram, wedding invite mailings, and vintage lifestyle tag 📬.",
    caution: "Rain ruins open 📬 mail — real life needs closed lid when wet.",
    examples: [
      { context: "Send", text: "Invites in 📬" },
      { context: "Pen pal", text: "Stack ready 📬" },
      { context: "Neighbor", text: "Wrong house 📬" },
      { context: "Holiday", text: "Cards out 📬" },
      { context: "Wait", text: "Carrier soon 📬" },
    ],
    contextBlocks: [
      { title: "Open vs closed", body: "📬 open door shows mail inside — more 'actively sending' than 📫." },
      { title: "Wedding invites", body: "Bulk mail days get 📬 in planning group chats." },
      { title: "Vs 📫", body: "Both raised flag outgoing; 📬 emphasizes open visible box." },
    ],
    searchIntents: ["open mailbox emoji", "📬 meaning", "mailbox raised flag open", "📬 outgoing mail"],
    whenNotToUse: ["For empty mailbox 📪/📭 with lowered flag."],
    faqs: [
      { question: "What does 📬 mean?", answer: "Open mailbox, flag up — outgoing mail ready for carrier." },
      { question: "📬 vs 📫?", answer: "Same raised-flag outgoing; 📬 shows open box with visible mail." },
    ],
  },

  loudspeaker: {
    batchId: BATCH_ID,
    searchTitle: "Loudspeaker Emoji (📢) Meaning: Announcements, Alerts, and Public Address",
    snippetAnswer:
      "📢 Loudspeaker marks loud announcements — PA systems, urgent alerts, marketing blast, and 'read this out loud' energy.",
    detailedParagraphs: [
      "Loudspeaker (📢) shows bullhorn-style PA speaker — Unicode symbol for public announcements and broadcast tone.",
      "School and office admins text 📢 before all-hands or fire drill — attention grabber.",
      "Activists and event promoters use 📢 for rally and festival stage energy — not always literal hardware.",
    ],
    textingMeaning: "'IMPORTANT 📢', 'Announcement 📢', 'Read this 📢'.",
    socialMeaning: "Discord server rules, HOA blast emails, and protest livestreams tag 📢.",
    caution: "Caps-lock 📢 spam trains people to mute — use sparingly for real news.",
    examples: [
      { context: "Alert", text: "Meeting moved 📢" },
      { context: "School", text: "Early dismissal 📢" },
      { context: "Marketing", text: "Sale live 📢" },
      { context: "Discord", text: "Rules 📢" },
      { context: "Rally", text: "Stage mic 📢" },
    ],
    contextBlocks: [
      { title: "PA system metaphor", body: "📢 means broadcast to everyone — not private DM tone." },
      { title: "Vs 📣", body: "📣 is handheld megaphone. 📢 is mounted loudspeaker/announcement." },
      { title: "Urgency", body: "Leading with 📢 signals 'stop scrolling' — verify it's worth it." },
    ],
    searchIntents: ["loudspeaker emoji", "📢 meaning", "announcement emoji", "📢 copy paste"],
    whenNotToUse: ["For personal whispers or private secrets — wrong tone."],
    faqs: [
      { question: "What does 📢 mean?", answer: "Loudspeaker/announcement — public alert, broadcast, read this." },
      { question: "📢 vs 📣?", answer: "📢 is PA/loudspeaker. 📣 is megaphone in hand — often interchangeable for hype." },
    ],
  },

  megaphone: {
    batchId: BATCH_ID,
    searchTitle: "Megaphone Emoji (📣) Meaning: Hype, Protests, and Coach Energy",
    snippetAnswer:
      "📣 Megaphone means hype and amplification — sports coaches, protest chants, product launches, and 'listen up' threads.",
    detailedParagraphs: [
      "Megaphone (📣) shows handheld bullhorn — Unicode symbol for rallies, sidelines, and attention-grabbing captions.",
      "Startup launches stack 📣 with release notes — founder announcement energy.",
      "Sports parents and fans spam 📣 on game days — cheer and referee complaint context diverge fast.",
    ],
    textingMeaning: "'Hype 📣', 'Launch day 📣', 'Coach yelled 📣'.",
    socialMeaning: "Protest coverage, stadium TikTok, and creator product drops lead with 📣.",
    caution: "Protest 📣 in sensitive geopolitical moments — words matter more than emoji.",
    examples: [
      { context: "Launch", text: "We ship 📣" },
      { context: "Sports", text: "Let's go 📣" },
      { context: "Protest", text: "March 📣" },
      { context: "Coach", text: "Halftime 📣" },
      { context: "Promo", text: "Drop live 📣" },
    ],
    contextBlocks: [
      { title: "Sideline culture", body: "📣 reads coach and cheer — high volume encouragement." },
      { title: "Activism", body: "Organizers use 📣 for march promotion — amplification literal and metaphorical." },
      { title: "Vs 📢", body: "📣 handheld megaphone. 📢 mounted loudspeaker — similar hype use." },
    ],
    searchIntents: ["megaphone emoji", "📣 meaning", "bullhorn emoji", "📣 copy paste"],
    whenNotToUse: ["Avoid 📣 on trauma-heavy news to sell products."],
    faqs: [
      { question: "What does 📣 mean?", answer: "Megaphone — hype, protests, announcements, coach energy." },
      { question: "📣 for marketing?", answer: "Common for launches and sales — loud attention request." },
    ],
  },

  "speaker-medium-volume": {
    batchId: BATCH_ID,
    searchTitle: "Speaker Medium Volume Emoji (🔉) Meaning: Audio Level, Music, and Notifications",
    snippetAnswer:
      "🔉 Speaker Medium Volume marks mid-level audio — music playing, podcast volume, and 'sound is on' settings posts.",
    detailedParagraphs: [
      "Speaker Medium Volume (🔉) shows speaker with low wave bars — Unicode middle step between 🔈 mute-low and 🔊 loud.",
      "Roommates negotiate 🔉 when someone says TV too loud — domestic volume diplomacy.",
      "App settings screenshots include 🔉 in UI threads comparing design across platforms.",
    ],
    textingMeaning: "'Volume 🔉', 'Turn it down to 🔉', 'Audio ok 🔉'.",
    socialMeaning: "Tech reviews, accessibility discussions, and study-with-me streams reference 🔉.",
    caution: "Volume preference fights aren't solved by emoji alone — communicate directly.",
    examples: [
      { context: "Home", text: "Mid volume 🔉" },
      { context: "Settings", text: "Default 🔉" },
      { context: "Podcast", text: "Comfort 🔉" },
      { context: "Roommate", text: "Is this ok 🔉" },
      { context: "UI", text: "Slider here 🔉" },
    ],
    contextBlocks: [
      { title: "Volume ladder", body: "🔈 low → 🔉 medium → 🔊 high — pick level intentionally." },
      { title: "Vs 🔊", body: "🔊 is max hype. 🔉 is everyday listening level." },
      { title: "Accessibility", body: "Hearing-sensitive folks may need 🔈 or captions — ask." },
    ],
    searchIntents: ["speaker medium volume emoji", "🔉 meaning", "volume emoji", "🔉 audio"],
    whenNotToUse: ["For silent/muted use 🔇 bell with slash or 🔈 low."],
    faqs: [
      { question: "What does 🔉 mean?", answer: "Medium speaker volume — audio on at moderate level." },
      { question: "🔉 vs 🔊?", answer: "🔉 moderate. 🔊 loud/max — context from conversation." },
    ],
  },

  newspaper: {
    batchId: BATCH_ID,
    searchTitle: "Newspaper Emoji (📰) Meaning: News, Headlines, and Journalism",
    snippetAnswer:
      "📰 Newspaper means news and headlines — breaking stories, journalism, morning read, and 'old news' sarcasm.",
    detailedParagraphs: [
      "Newspaper (📰) shows folded daily paper — Unicode symbol for journalism and current events.",
      "News junkies react 📰 when major headlines drop — paired with link or 'wow'.",
      "Sarcastic replies use 📰 for stale gossip — 'breaking news from 2019 📰'.",
    ],
    textingMeaning: "'Breaking 📰', 'Read the news 📰', 'Old news 📰'.",
    socialMeaning: "Journalism Twitter, local news promos, and media literacy threads tag 📰.",
    caution: "Verify sources — 📰 doesn't mean the linked story is factual.",
    examples: [
      { context: "Breaking", text: "Just dropped 📰" },
      { context: "Morning", text: "Coffee + 📰" },
      { context: "Sarcasm", text: "Shocking 📰" },
      { context: "Local", text: "City council 📰" },
      { context: "Journalism", text: "Support 📰" },
    ],
    contextBlocks: [
      { title: "Breaking news", body: "📰 prefixes headline shares — speed signal in group chats." },
      { title: "Vs 🗞️", body: "🗞️ is rolled newspaper. 📰 is open folded front page." },
      { title: "Media literacy", body: "Educators use 📰 when discussing sources and paywalls." },
    ],
    searchIntents: ["newspaper emoji", "📰 meaning", "news emoji", "📰 copy paste"],
    whenNotToUse: ["Don't use 📰 to spread unverified panic headlines."],
    faqs: [
      { question: "What does 📰 mean?", answer: "Newspaper/news — headlines, journalism, current events." },
      { question: "📰 for digital news?", answer: "Yes — metaphor extends to online articles and apps." },
    ],
  },

  "rolled-up-newspaper": {
    batchId: BATCH_ID,
    searchTitle: "Rolled-Up Newspaper Emoji (🗞️) Meaning: News Bundle, Discipline Meme, and Delivery",
    snippetAnswer:
      "🗞️ Rolled-Up Newspaper marks bundled news — paper route delivery, 'read all about it', and the classic discipline/threat meme.",
    detailedParagraphs: [
      "Rolled-Up Newspaper (🗞️) shows tube-shaped paper — Unicode design for delivered dailies and cartoon slapstick.",
      "Pet training and parenting humor weaponize 🗞️ — 'newspaper of justice' memes (playful only).",
      "Subscription cancel and 'print is dead' posts ironically feature 🗞️.",
    ],
    textingMeaning: "'Paper route 🗞️', 'Extra extra 🗞️', 'Bonk meme 🗞️'.",
    socialMeaning: "Retro morning delivery nostalgia, dog training jokes, and indie zine culture use 🗞️.",
    caution: "Discipline-threat memes with 🗞️ aren't OK directed at kids or partners seriously.",
    examples: [
      { context: "Delivery", text: "Porch 🗞️" },
      { context: "Meme", text: "Bonk 🗞️" },
      { context: "Retro", text: "Paperboy era 🗞️" },
      { context: "Headline", text: "Extra 🗞️" },
      { context: "Dog", text: "Training day 🗞️" },
    ],
    contextBlocks: [
      { title: "Delivery bundle", body: "🗞️ reads thrown-on-porch morning paper — suburban ritual." },
      { title: "Meme culture", body: "Cartoon bonk migrated to 🗞️ in reaction GIFs and Discord." },
      { title: "Vs 📰", body: "📰 open front page. 🗞️ rolled tube — delivery or slapstick." },
    ],
    searchIntents: ["rolled newspaper emoji", "🗞️ meaning", "newspaper bonk meme", "🗞️ copy paste"],
    whenNotToUse: ["Avoid threatening real people with 🗞️ violence jokes."],
    faqs: [
      { question: "What does 🗞️ mean?", answer: "Rolled newspaper — delivery, headlines, or bonk meme." },
      { question: "🗞️ bonk meme?", answer: "Playful cartoon discipline — rolled paper as soft 'weapon' in memes." },
    ],
  },

  "bar-chart": {
    batchId: BATCH_ID,
    searchTitle: "Bar Chart Emoji (📊) Meaning: Data, Analytics, and Business Metrics",
    snippetAnswer:
      "📊 Bar Chart marks data and analytics — quarterly results, dashboard screenshots, growth updates, and spreadsheet culture.",
    detailedParagraphs: [
      "Bar Chart (📊) shows vertical bars — Unicode go-to for metrics, KPIs, and presentation decks.",
      "Startup founders drop 📊 with MRR screenshots — wins and losses both get the emoji.",
      "Students use 📊 for stats homework and science fair project updates.",
    ],
    textingMeaning: "'Numbers up 📊', 'Dashboard 📊', 'Data says 📊'.",
    socialMeaning: "Business Twitter, data science LinkedIn, and SaaS marketing tag 📊.",
    caution: "Cherry-picked 📊 charts mislead — label axes and sources.",
    examples: [
      { context: "Business", text: "Q3 📊" },
      { context: "Growth", text: "Trend 📊" },
      { context: "School", text: "Stats project 📊" },
      { context: "Meeting", text: "Deck slide 📊" },
      { context: "Investor", text: "Metrics 📊" },
    ],
    contextBlocks: [
      { title: "KPI culture", body: "📊 signals quant talk — revenue, users, conversion." },
      { title: "Vs 📈", body: "📈 line going up. 📊 multi-bar comparison chart." },
      { title: "Vs 📉", body: "📉 declining line. 📊 can show mixed bar directions." },
    ],
    searchIntents: ["bar chart emoji", "📊 meaning", "analytics emoji", "📊 copy paste"],
    whenNotToUse: ["For single up/down trend 📈/📉 may be clearer."],
    faqs: [
      { question: "What does 📊 mean?", answer: "Bar chart — data, analytics, business metrics, reports." },
      { question: "📊 vs 📈?", answer: "📊 compares categories. 📈 shows upward trend line." },
    ],
  },

  "chart-decreasing": {
    batchId: BATCH_ID,
    searchTitle: "Chart Decreasing Emoji (📉) Meaning: Stocks Down, Losses, and Decline",
    snippetAnswer:
      "📉 Chart Decreasing means downward trend — red portfolio days, metric drops, and 'things are not going well' business venting.",
    detailedParagraphs: [
      "Chart Decreasing (📉) shows line trending down — Unicode symbol for losses in finance and performance.",
      "Crypto and stock group chats spam 📉 on crash days — commiseration ritual.",
      "Managers dread 📉 in board updates — paired with mitigation plans in better cultures.",
    ],
    textingMeaning: "'Portfolio 📉', 'Numbers bad 📉', 'Trend wrong way 📉'.",
    socialMeaning: "Finance Twitter meltdowns, startup post-mortems, and sports slump memes use 📉.",
    caution: "Mocking others' 📉 losses is cruel — empathy beats dunking.",
    examples: [
      { context: "Stocks", text: "Red day 📉" },
      { context: "Crypto", text: "Portfolio 📉" },
      { context: "Metrics", text: "Churn up 📉" },
      { context: "Sports", text: "Losing streak 📉" },
      { context: "Honest", text: "Rough quarter 📉" },
    ],
    contextBlocks: [
      { title: "Finance venting", body: "📉 is communal pain on market red days — not financial advice." },
      { title: "Vs 📈", body: "📈 up. 📉 down — mirror pair for trends." },
      { title: "Work culture", body: "Healthy teams use 📉 with action plans, not blame games." },
    ],
    searchIntents: ["chart decreasing emoji", "📉 meaning", "stocks down emoji", "📉 copy paste"],
    whenNotToUse: ["Don't taunt people losing money with 📉.", "Not for medical decline jokes."],
    faqs: [
      { question: "What does 📉 mean?", answer: "Downward chart — losses, decline, bad trend." },
      { question: "📉 for crypto?", answer: "Very common in crash memes and portfolio vent threads." },
    ],
  },

  "chart-increasing-with-yen": {
    batchId: BATCH_ID,
    searchTitle: "Chart Increasing With Yen Emoji (💹) Meaning: Japan Markets, Forex, and Yen Finance",
    snippetAnswer:
      "💹 Chart Increasing With Yen marks yen and Japanese market context — forex charts, Nikkei vibes, and Japan finance threads.",
    detailedParagraphs: [
      "Chart Increasing With Yen (💹) combines uptrend with ¥ — Unicode symbol for Japanese financial markets specifically.",
      "Forex traders text 💹 on yen volatility days — BOJ policy headlines trigger the emoji.",
      "Japan business expats use 💹 in earnings season chatter — localized 📈 alternative.",
    ],
    textingMeaning: "'Yen move 💹', 'Nikkei 💹', 'Forex 💹'.",
    socialMeaning: "Japan finance Twitter, expat investor groups, and forex education tag 💹.",
    caution: "Trend emoji ≠ buy signal — do your own research.",
    examples: [
      { context: "Forex", text: "USD/JPY 💹" },
      { context: "News", text: "BOJ 💹" },
      { context: "Market", text: "Tokyo open 💹" },
      { context: "Work", text: "Earnings 💹" },
      { context: "Expat", text: "Remit timing 💹" },
    ],
    contextBlocks: [
      { title: "Yen specificity", body: "💹 is ¥-labeled — use for Japan forex, not generic stocks." },
      { title: "Vs 📈", body: "📈 generic up chart. 💹 adds yen/market Japan context." },
      { title: "BOJ headlines", body: "Rate and intervention news spikes 💹 usage in finance circles." },
    ],
    searchIntents: ["chart with yen emoji", "💹 meaning", "yen chart emoji", "💹 japan finance"],
    whenNotToUse: ["For US markets 📈/📊 more recognizable.", "Not investment advice."],
    faqs: [
      { question: "What does 💹 mean?", answer: "Upward chart with yen — Japan markets, forex, Nikkei context." },
      { question: "💹 vs 📈?", answer: "💹 is yen-specific financial uptrend; 📈 is generic increase." },
    ],
  },

  "file-folder": {
    batchId: BATCH_ID,
    searchTitle: "File Folder Emoji (📁) Meaning: Folders, Organization, and Desktop Files",
    snippetAnswer:
      "📁 File Folder means digital or physical folders — project organization, 'it's in the folder', and desktop clutter jokes.",
    detailedParagraphs: [
      "File Folder (📁) shows manila-style tab folder — Unicode metaphor born from desktop OS file systems.",
      "Designers and devs reference 📁 for repo structure and asset directories.",
      "Teachers collect 📁 for student portfolios — physical and Google Drive parallel.",
    ],
    textingMeaning: "'In the folder 📁', 'New project 📁', 'Organize 📁'.",
    socialMeaning: "Productivity TikTok, Notion tours, and IT desktop cleanup posts tag 📁.",
    caution: "Nested 📁/📁/📁 chaos isn't organization — name your files.",
    examples: [
      { context: "Work", text: "Assets 📁" },
      { context: "School", text: "Portfolio 📁" },
      { context: "Dev", text: "Repo 📁" },
      { context: "Clean up", text: "Desktop 📁 hell" },
      { context: "Share", text: "Drive 📁 link" },
    ],
    contextBlocks: [
      { title: "Desktop metaphor", body: "📁 maps to Finder/Explorer — digital natives read instantly." },
      { title: "Vs 📂", body: "📂 open folder. 📁 closed — browsing vs active work." },
      { title: "Productivity", body: "Folder taxonomy posts flex 📁 tree screenshots." },
    ],
    searchIntents: ["file folder emoji", "📁 meaning", "folder emoji", "📁 copy paste"],
    whenNotToUse: ["For email folders 📥 may fit better."],
    faqs: [
      { question: "What does 📁 mean?", answer: "File folder — organization, project files, desktop directories." },
      { question: "📁 vs 📂?", answer: "📁 closed folder. 📂 open folder showing contents." },
    ],
  },

  "open-file-folder": {
    batchId: BATCH_ID,
    searchTitle: "Open File Folder Emoji (📂) Meaning: Open Project, Browsing Files, and WIP",
    snippetAnswer:
      "📂 Open File Folder marks open projects and browsing — files in progress, digging through archives, and active work sessions.",
    detailedParagraphs: [
      "Open File Folder (📂) shows folder with visible papers — Unicode 'currently working in this directory' signal.",
      "Editors text 📂 when pulling old drafts from archives — resurrection season.",
      "Freelancers use 📂 for client asset hunts — 'found it in 📂 from 2022'.",
    ],
    textingMeaning: "'Digging in 📂', 'Project open 📂', 'Found the file 📂'.",
    socialMeaning: "Workflow screenshots, forensic accounting memes, and dev 'node_modules' jokes reference 📂.",
    caution: "Open 📂 with sensitive files — mind screen-share leaks.",
    examples: [
      { context: "Search", text: "Old drafts 📂" },
      { context: "Client", text: "Assets 📂" },
      { context: "Active", text: "WIP 📂" },
      { context: "Archive", text: "Deep 📂" },
      { context: "Found", text: "There it is 📂" },
    ],
    contextBlocks: [
      { title: "Work in progress", body: "📂 implies folder currently open — active not archived." },
      { title: "Vs 📁", body: "📁 closed tidy. 📂 open and browsing." },
      { title: "Archive dives", body: "Nostalgia projects start with 📂 and risky old files." },
    ],
    searchIntents: ["open folder emoji", "📂 meaning", "open file folder", "📂 copy paste"],
    whenNotToUse: ["For finished/archived work 📁 closed may fit."],
    faqs: [
      { question: "What does 📂 mean?", answer: "Open file folder — browsing files, active project, WIP." },
      { question: "📂 for Google Drive?", answer: "Yes — metaphor works for any folder UI." },
    ],
  },

  pen: {
    batchId: BATCH_ID,
    searchTitle: "Pen Emoji (🖊️) Meaning: Writing, Notes, and Sign Here",
    snippetAnswer:
      "🖊️ Pen marks writing and signatures — taking notes, sign-here moments, journaling, and 'put it in writing'.",
    detailedParagraphs: [
      "Pen (🖊️) shows ballpoint-style pen — Unicode everyday writing tool for notes and contracts.",
      "Lawyers and landlords joke 🖊️ when leases need signing — ritual before keys.",
      "Students photograph 🖊️ with color-coded notes — studyblr aesthetic.",
    ],
    textingMeaning: "'Sign here 🖊️', 'Notes 🖊️', 'Put it in writing 🖊️'.",
    socialMeaning: "Stationery Instagram, bullet journal spreads, and contract milestone posts tag 🖊️.",
    caution: "Electronic signatures often legally valid — 🖊️ isn't always required.",
    examples: [
      { context: "Sign", text: "Lease 🖊️" },
      { context: "Notes", text: "Lecture 🖊️" },
      { context: "Journal", text: "Morning pages 🖊️" },
      { context: "Work", text: "Markup 🖊️" },
      { context: "Deal", text: "Ink dry 🖊️" },
    ],
    contextBlocks: [
      { title: "Signature moment", body: "🖊️ signals binding agreement — job offer, lease, deal closed." },
      { title: "Vs ✒️", body: "✒️ fountain/black nib — fancy. 🖊️ is everyday ballpoint." },
      { title: "Vs 📝", body: "📝 memo with pencil. 🖊️ emphasizes pen instrument." },
    ],
    searchIntents: ["pen emoji", "🖊️ meaning", "ballpoint emoji", "🖊️ copy paste"],
    whenNotToUse: ["For pencil edits use ✏️."],
    faqs: [
      { question: "What does 🖊️ mean?", answer: "Pen — writing, notes, signatures, put it in writing." },
      { question: "🖊️ vs fountain pen?", answer: "🖊️ ballpoint everyday; ✒️/🖋️ fancier fountain pen." },
    ],
  },

  "fountain-pen": {
    batchId: BATCH_ID,
    searchTitle: "Fountain Pen Emoji (🖋️) Meaning: Luxury Writing, Stationery, and Signatures",
    snippetAnswer:
      "🖋️ Fountain Pen means premium writing — stationery hobby, fancy signatures, calligraphy adjacency, and executive aesthetic.",
    detailedParagraphs: [
      "Fountain Pen (🖋️) shows nib pen — Unicode symbol for luxury stationery and formal document signing.",
      "Stationery TikTok showcases 🖋️ with ink swatches and slow handwriting ASMR.",
      "Historical and fantasy RP accounts use 🖋️ for quill-adjacent drama without actual feather.",
    ],
    textingMeaning: "'Signed in ink 🖋️', 'New pen 🖋️', 'Fancy notes 🖋️'.",
    socialMeaning: "Pen collector forums, wedding signature books, and executive gift posts feature 🖋️.",
    caution: "Fountain pens leak in pockets — real owners know the tragedy.",
    examples: [
      { context: "Stationery", text: "Ink test 🖋️" },
      { context: "Sign", text: "Wedding book 🖋️" },
      { context: "Gift", text: "Montblanc 🖋️" },
      { context: "Journal", text: "Slow write 🖋️" },
      { context: "Formal", text: "Contract 🖋️" },
    ],
    contextBlocks: [
      { title: "Stationery hobby", body: "🖋️ community debates nibs, inks, and paper ghosting." },
      { title: "Vs 🖊️", body: "🖊️ ballpoint casual. 🖋️ fountain luxury/formal." },
      { title: "Vs ✒️", body: "✒️ black nib icon. 🖋️ full fountain pen body." },
    ],
    searchIntents: ["fountain pen emoji", "🖋️ meaning", "luxury pen emoji", "🖋️ copy paste"],
    whenNotToUse: ["For grocery lists 🖊️ is more honest."],
    faqs: [
      { question: "What does 🖋️ mean?", answer: "Fountain pen — luxury writing, stationery, formal signatures." },
      { question: "🖋️ hobby name?", answer: "Often linked to fountain pen/stationery community and ASMR writing." },
    ],
  },

  notebook: {
    batchId: BATCH_ID,
    searchTitle: "Notebook Emoji (📓) Meaning: Notes, School, and Bullet Journal",
    snippetAnswer:
      "📓 Notebook means notes and journaling — class notes, bullet journals, meeting scribbles, and planner culture.",
    detailedParagraphs: [
      "Notebook (📓) shows spiral or bound note pad — Unicode school and productivity staple.",
      "Bullet journal community fills 📓 with grid spreads — hashtag companion emoji.",
      "Workshops pass 📓 for attendee notes — conference swag identity.",
    ],
    textingMeaning: "'Take notes 📓', 'Journal 📓', 'Meeting 📓'.",
    socialMeaning: "Studygram, planner TikTok, and writer first-draft posts tag 📓.",
    caution: "Hot take notebooks ≠ productivity if never reviewed.",
    examples: [
      { context: "School", text: "Chem 📓" },
      { context: "BuJo", text: "Spread 📓" },
      { context: "Meeting", text: "Action items 📓" },
      { context: "Writer", text: "Draft 📓" },
      { context: "Conference", text: "Swag 📓" },
    ],
    contextBlocks: [
      { title: "Bullet journal", body: "📓 pairs with ruler and washi tape culture online." },
      { title: "Vs 📔", body: "📔 decorative cover notebook. 📓 simpler spiral pad." },
      { title: "Vs 📒", body: "📒 ledger/accounting. 📓 general notes." },
    ],
    searchIntents: ["notebook emoji", "📓 meaning", "notes emoji", "📓 copy paste"],
    whenNotToUse: ["For published book use 📕/📗 closed book."],
    faqs: [
      { question: "What does 📓 mean?", answer: "Notebook — notes, school, bullet journal, meetings." },
      { question: "📓 for digital notes?", answer: "Sometimes ironic — usually physical notebook vibe." },
    ],
  },

  "closed-book": {
    batchId: BATCH_ID,
    searchTitle: "Closed Book Emoji (📕) Meaning: Finished Reading, Textbooks, and Book Stack",
    snippetAnswer:
      "📕 Closed Book marks finished reads and textbooks — BookTok done pile, semester books, and 'closed chapter' metaphors.",
    detailedParagraphs: [
      "Closed Book (📕) shows red-covered shut book — Unicode one of color-coded book set for library stacks.",
      "BookTok posts 📕 when rating a finished novel — DNF pile vs five-star stack.",
      "Therapy and self-help captions use 📕 for 'closing a chapter' life metaphors.",
    ],
    textingMeaning: "'Finished 📕', 'Textbook 📕', 'Closed chapter 📕'.",
    socialMeaning: "Reading wrap-ups, syllabus posts, and bookshelf aesthetic tag 📕.",
    caution: "Spoiler threads shouldn't hide behind 📕 — say 'spoilers' plainly.",
    examples: [
      { context: "BookTok", text: "5 stars 📕" },
      { context: "School", text: "Syllabus 📕" },
      { context: "Metaphor", text: "New chapter 📕" },
      { context: "Stack", text: "TBR done 📕" },
      { context: "Gift", text: "Signed 📕" },
    ],
    contextBlocks: [
      { title: "Book color set", body: "📕 red, 📗 green, 📘 blue, 📙 orange — shelf rainbow posts mix them." },
      { title: "Vs 📖", body: "📖 open book reading. 📕 closed finished/on shelf." },
      { title: "Vs 📚", body: "📚 stack of books. 📕 single closed volume." },
    ],
    searchIntents: ["closed book emoji", "📕 meaning", "red book emoji", "📕 copy paste"],
    whenNotToUse: ["For actively reading use 📖 open book."],
    faqs: [
      { question: "What does 📕 mean?", answer: "Closed book — finished read, textbook, closed chapter metaphor." },
      { question: "Why red book?", answer: "Unicode color variant — aesthetic stacking with other book colors." },
    ],
  },

  bookmark: {
    batchId: BATCH_ID,
    searchTitle: "Bookmark Emoji (🔖) Meaning: Save for Later, Reading, and Browser Tabs",
    snippetAnswer:
      "🔖 Bookmark means save for later — reading placeholder, browser bookmark metaphor, and 'don't lose this link'.",
    detailedParagraphs: [
      "Bookmark (🔖) shows ribbon marker in book — Unicode extended to digital save-for-later everywhere.",
      "Researchers spam 🔖 on threads worth archiving — Twitter bookmark button culture.",
      "Readers photograph 🔖 in physical novels — cozy progress flex.",
    ],
    textingMeaning: "'Bookmarking 🔖', 'Save this 🔖', 'Read later 🔖'.",
    socialMeaning: "Productivity hacks, reading lists, and 'link dump' replies use 🔖.",
    caution: "Bookmark graveyards never get read — schedule time to revisit 🔖 pile.",
    examples: [
      { context: "Read later", text: "Saving 🔖" },
      { context: "Thread", text: "Bookmark 🔖" },
      { context: "Book", text: "Chapter 12 🔖" },
      { context: "Recipe", text: "Try later 🔖" },
      { context: "Research", text: "Sources 🔖" },
    ],
    contextBlocks: [
      { title: "Digital save", body: "🔖 migrated from paper to browser — universal 'keep this'." },
      { title: "Vs 📑", body: "📑 bookmark tabs (multiple). 🔖 single ribbon marker." },
      { title: "Vs ⭐", body: "⭐ favorite/star. 🔖 read-later/archive vibe." },
    ],
    searchIntents: ["bookmark emoji", "🔖 meaning", "save for later emoji", "🔖 copy paste"],
    whenNotToUse: ["For finished reading 📕/✅ may fit better."],
    faqs: [
      { question: "What does 🔖 mean?", answer: "Bookmark — save for later, reading place, archive link." },
      { question: "🔖 vs browser star?", answer: "Similar intent — keep page to revisit." },
    ],
  },

  receipt: {
    batchId: BATCH_ID,
    searchTitle: "Receipt Emoji (🧾) Meaning: Expenses, Proof, and Splitting Bills",
    snippetAnswer:
      "🧾 Receipt marks expenses and proof — splitting dinner bills, expense reports, budgeting apps, and 'receipts' drama slang.",
    detailedParagraphs: [
      "Receipt (🧾) shows curled paper receipt — Unicode symbol for purchases and reimbursement.",
      "Roommates Venmo after 📸 of 🧾 — itemized split culture.",
      "Internet slang 'show the receipts' means evidence screenshots — drama threads, not paper.",
    ],
    textingMeaning: "'Send 🧾', 'Expense report 🧾', 'Got receipts 🧾'.",
    socialMeaning: "Budget TikTok, small business bookkeeping, and call-out threads (with proof) use 🧾.",
    caution: "Posting 🧾 with PII leaks card info — redact before sharing.",
    examples: [
      { context: "Split", text: "Venmo 🧾" },
      { context: "Work", text: "Expenses 🧾" },
      { context: "Drama", text: "Receipts 🧾" },
      { context: "Budget", text: "Track 🧾" },
      { context: "Return", text: "Keep 🧾" },
    ],
    contextBlocks: [
      { title: "Bill splitting", body: "🧾 photo is trust layer before payment apps." },
      { title: "Slang receipts", body: "'The receipts' = proof in online arguments — screenshot culture." },
      { title: "Vs 💳", body: "💳 payment method. 🧾 proof of transaction." },
    ],
    searchIntents: ["receipt emoji", "🧾 meaning", "expense emoji", "🧾 copy paste"],
    whenNotToUse: ["Don't share unredacted receipts publicly."],
    faqs: [
      { question: "What does 🧾 mean?", answer: "Receipt — expenses, splits, proof, budgeting." },
      { question: "🧾 receipts slang?", answer: "Online 'show receipts' means evidence, not literal paper." },
    ],
  },

  "telephone-receiver": {
    batchId: BATCH_ID,
    searchTitle: "Telephone Receiver Emoji (📞) Meaning: Call Me, Phone Tag, and Old-School Contact",
    snippetAnswer:
      "📞 Telephone Receiver means voice calls — 'call me', customer support, phone tag, and retro landline nostalgia.",
    detailedParagraphs: [
      "Telephone Receiver (📞) shows classic handset — Unicode symbol predating smartphone 📱 for voice calls.",
      "Customer service rants include 📞 — hold music trauma universal.",
      "Parents demand 📞 over text for serious talks — generational divide emoji.",
    ],
    textingMeaning: "'Call me 📞', 'On hold 📞', 'Ring me 📞'.",
    socialMeaning: "Support horror stories, sales cold-call jokes, and vintage aesthetic posts tag 📞.",
    caution: "Unexpected 📞 calls stress some people — ask preference first.",
    examples: [
      { context: "Call", text: "Free to 📞?" },
      { context: "Support", text: "Hour hold 📞" },
      { context: "Urgent", text: "Call not text 📞" },
      { context: "Work", text: "Client 📞" },
      { context: "Retro", text: "Landline 📞" },
    ],
    contextBlocks: [
      { title: "Voice vs text", body: "📞 explicitly requests call — heavier than DM." },
      { title: "Vs ☎️", body: "☎️ full phone unit. 📞 receiver handset alone — similar use." },
      { title: "Vs 📱", body: "📱 smartphone general. 📞 emphasizes voice call action." },
    ],
    searchIntents: ["telephone receiver emoji", "📞 meaning", "call emoji", "📞 copy paste"],
    whenNotToUse: ["For video call 📹/💻 may fit.", "Respect 'don't call me' people."],
    faqs: [
      { question: "What does 📞 mean?", answer: "Phone call — ring me, voice contact, customer service." },
      { question: "📞 vs 📱?", answer: "📞 stresses calling; 📱 is mobile device broadly." },
    ],
  },

  "ballot-box-with-ballot": {
    batchId: BATCH_ID,
    searchTitle: "Ballot Box With Ballot Emoji (🗳️) Meaning: Voting, Elections, and Civic Duty",
    snippetAnswer:
      "🗳️ Ballot Box With Ballot means voting — election day, civic duty posts, mail-in ballots, and democracy participation.",
    detailedParagraphs: [
      "Ballot Box With Ballot (🗳️) shows box with ballot inserted — Unicode symbol for democratic voting.",
      "Election seasons spike 🗳️ — 'I voted' sticker energy without the selfie.",
      "Nonpartisan GOTV campaigns lead with 🗳️ — check registration and polling hours.",
    ],
    textingMeaning: "'Vote 🗳️', 'Ballot in 🗳️', 'Election day 🗳️'.",
    socialMeaning: "Civic org Instagram, election night threads, and mail-in ballot reminders tag 🗳️.",
    caution: "Respect secret ballot — don't pressure how someone votes via emoji.",
    examples: [
      { context: "Election", text: "Polls open 🗳️" },
      { context: "Mail-in", text: "Dropped 🗳️" },
      { context: "GOTV", text: "Plan vote 🗳️" },
      { context: "Sticker", text: "Done 🗳️" },
      { context: "Local", text: "City ballot 🗳️" },
    ],
    contextBlocks: [
      { title: "I voted culture", body: "🗳️ replaces sticker brag when photos discouraged at sites." },
      { title: "Mail-in", body: "Drop box photos use 🗳️ for ballot submission — know local rules." },
      { title: "Nonpartisan tone", body: "🗳️ can encourage participation without endorsing candidates." },
    ],
    searchIntents: ["ballot box emoji", "🗳️ meaning", "voting emoji", "🗳️ election"],
    whenNotToUse: ["Avoid harassing non-voters.", "Don't imply emoji counts as legal advice on ballots."],
    faqs: [
      { question: "What does 🗳️ mean?", answer: "Voting/ballot box — elections, civic participation, I voted." },
      { question: "🗳️ partisan?", answer: "Symbol is neutral — context from message determines tone." },
    ],
  },

  "round-pushpin": {
    batchId: BATCH_ID,
    searchTitle: "Round Pushpin Emoji (📍) Meaning: Location, Pinned, and Maps",
    snippetAnswer:
      "📍 Round Pushpin marks location — map pins, 'we're here', saved places, and pinned comments/posts.",
    detailedParagraphs: [
      "Round Pushpin (📍) shows map marker pin — Unicode default for geolocation and meetup spots.",
      "Friends drop 📍 with Apple/Google Maps links — 'pull up here'.",
      "Social apps borrowed 📍 for pinned profile posts and highlighted comments.",
    ],
    textingMeaning: "'Meet 📍 here', 'Pinned 📍', 'Location 📍'.",
    socialMeaning: "Travel itineraries, restaurant recs, and event venue shares lead with 📍.",
    caution: "Sharing 📍 live location has safety implications — trust who sees it.",
    examples: [
      { context: "Meetup", text: "Pin 📍 sent" },
      { context: "Travel", text: "Hotel 📍" },
      { context: "Food", text: "Best tacos 📍" },
      { context: "Event", text: "Venue 📍" },
      { context: "Pinned", text: "Comment 📍" },
    ],
    contextBlocks: [
      { title: "Maps default", body: "📍 is the mental model for dropped pin — universal meetup language." },
      { title: "Vs 🗺️", body: "🗺️ whole map. 📍 single point location." },
      { title: "Pinned posts", body: "Profile pin features repurposed 📍 for highlight not geography." },
    ],
    searchIntents: ["pushpin emoji", "📍 meaning", "location pin emoji", "📍 copy paste"],
    whenNotToUse: ["For pushpin on cork board 📌 may fit better."],
    faqs: [
      { question: "What does 📍 mean?", answer: "Location pin — map marker, meet here, pinned highlight." },
      { question: "📍 vs 📌?", answer: "📍 map location. 📌 office pin/thumbtack on board." },
    ],
  },
};
