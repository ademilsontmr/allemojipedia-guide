import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "23-objects-office-household";

/** Batch 23 P2 — office supplies, filing, mail variants, household tools. */
export const batch23ObjectsOfficeHousehold: Record<string, EmojiBatchEnrichment> = {
  "black-nib": {
    batchId: BATCH_ID,
    searchTitle: "Black Nib Emoji (✒️) Meaning: Calligraphy, Fountain Pen, and Formal Writing",
    snippetAnswer:
      "✒️ Black Nib marks calligraphy and formal ink — fountain pen nibs, signature moments, stationery hobby, and elegant handwriting posts.",
    detailedParagraphs: [
      "Black Nib (✒️) shows pen nib icon — Unicode symbol for calligraphy, fountain pens, and formal ink writing.",
      "Stationery TikTok pairs ✒️ with ink swatches — flex nib and flexing handwriting ASMR.",
      "Historical document posts use ✒️ for 'signed in ink' — treaties and formal letters aesthetic.",
    ],
    textingMeaning: "'Signed ✒️', 'Calligraphy ✒️', 'Ink ✒️'.",
    socialMeaning: "Pen collector forums, wedding signature books, and medieval RP tag ✒️.",
    caution: "Permanent ink stains — test paper before fancy ✒️ on rental furniture.",
    examples: [
      { context: "Sign", text: "Ink dry ✒️" },
      { context: "Calligraphy", text: "Practice ✒️" },
      { context: "Wedding", text: "Guest book ✒️" },
      { context: "Vintage", text: "Dip pen ✒️" },
      { context: "Formal", text: "Letter ✒️" },
    ],
    contextBlocks: [
      { title: "Vs 🖋️", body: "🖋️ full fountain pen. ✒️ nib alone — writing point focus." },
      { title: "Vs 🖊️", body: "🖊️ ballpoint casual. ✒️ ink/calligraphy formal." },
      { title: "Stationery hobby", body: "Nib grinds and tines alignment — deep ✒️ rabbit hole." },
    ],
    searchIntents: ["black nib emoji", "✒️ meaning", "calligraphy nib emoji", "✒️ copy paste"],
    whenNotToUse: ["Grocery list — 🖊️.", "Digital signature — doesn't need ✒️."],
    faqs: [
      { question: "What does ✒️ mean?", answer: "Pen nib — calligraphy, fountain pen, formal ink writing." },
      { question: "✒️ vs 🖋️?", answer: "✒️ nib icon; 🖋️ shows full fountain pen body." },
    ],
  },

  "card-index-dividers": {
    batchId: BATCH_ID,
    searchTitle: "Card Index Dividers Emoji (🗂️) Meaning: Organization, Filing, and Tabs",
    snippetAnswer:
      "🗂️ Card Index Dividers mark organization systems — filing tabs, sorted projects, browser-style categories, and 'get organized' posts.",
    detailedParagraphs: [
      "Card Index Dividers (🗂️) show tabbed file dividers — Unicode symbol for sorting, archiving, and label categories.",
      "Productivity influencers screenshot 🗂️-style Notion dashboards — digital filing metaphor.",
      "Office clean-out posts celebrate 🗂️ — label maker companion emoji.",
    ],
    textingMeaning: "'Organized 🗂️', 'Filed 🗂️', 'Tabs 🗂️'.",
    socialMeaning: "Declutter TikTok, paralegal filing humor, and craft room organization tag 🗂️.",
    caution: "Over-organizing procrastinates — 🗂️ folders empty still don't finish work.",
    examples: [
      { context: "Office", text: "Sorted 🗂️" },
      { context: "Notion", text: "Tabs 🗂️" },
      { context: "Craft", text: "Labeled 🗂️" },
      { context: "Archive", text: "By year 🗂️" },
      { context: "Clean", text: "Desk 🗂️" },
    ],
    contextBlocks: [
      { title: "Filing metaphor", body: "🗂️ signals categories and sorted buckets — mental model for apps." },
      { title: "Vs 📁", body: "📁 single folder. 🗂️ dividers inside organizing subsets." },
      { title: "Vs 🗃️", body: "🗃️ card file box. 🗂️ tab dividers within." },
    ],
    searchIntents: ["card index dividers emoji", "🗂️ meaning", "file dividers emoji", "🗂️ organize"],
    whenNotToUse: ["Single folder — 📁 enough."],
    faqs: [
      { question: "What does 🗂️ mean?", answer: "Card index dividers — organization, filing tabs, categories." },
      { question: "🗂️ digital?", answer: "Metaphor extends to app tabs and sorted project boards." },
    ],
  },

  "tear-off-calendar": {
    batchId: BATCH_ID,
    searchTitle: "Tear-Off Calendar Emoji (📆) Meaning: Daily Calendar, Dates, and Countdown",
    snippetAnswer:
      "📆 Tear-Off Calendar marks daily desk calendars — date checks, countdown to events, and 'what day is it' office humor.",
    detailedParagraphs: [
      "Tear-Off Calendar (📆) shows spiral desk calendar page — Unicode symbol for daily date reference.",
      "Retirement and vacation countdowns tear virtual 📆 pages — milestone tracking.",
      "Office workers flip 📆 when month ends — analog date ritual persists.",
    ],
    textingMeaning: "'Mark 📆', '3 days left 📆', 'Today's date 📆'.",
    socialMeaning: "Advent countdown adjacency, work week memes, and planner community tag 📆.",
    caution: "Distinct from 📅 calendar grid — 📆 is single tear-off page style.",
    examples: [
      { context: "Countdown", text: "5 days 📆" },
      { context: "Office", text: "Flip 📆" },
      { context: "Event", text: "Marked 📆" },
      { context: "Daily", text: "Today 📆" },
      { context: "Retire", text: "Blocks left 📆" },
    ],
    contextBlocks: [
      { title: "Vs 📅", body: "📅 month grid calendar app. 📆 daily tear-off desk pad." },
      { title: "Countdown culture", body: "Physical 📆 page tear satisfies countdown ritual." },
      { title: "Vs 🗓️", body: "🗓️ spiral wall calendar. 📆 desk tear-off variant." },
    ],
    searchIntents: ["tear off calendar emoji", "📆 meaning", "desk calendar emoji", "📆 copy paste"],
    whenNotToUse: ["Full month planning — 📅.", "Already covered by batch calendar emoji for scheduling."],
    faqs: [
      { question: "What does 📆 mean?", answer: "Tear-off desk calendar — daily date, countdown, flip page." },
      { question: "📆 vs 📅?", answer: "📆 single-day tear pad; 📅 full calendar grid." },
    ],
  },

  "spiral-notepad": {
    batchId: BATCH_ID,
    searchTitle: "Spiral Notepad Emoji (🗒️) Meaning: Notes, Lists, and Quick Jotting",
    snippetAnswer:
      "🗒️ Spiral Notepad means quick notes and lists — grocery runs, meeting scribbles, fridge pad, and pocket memo culture.",
    detailedParagraphs: [
      "Spiral Notepad (🗒️) shows small spiral-bound pad — Unicode symbol for ephemeral notes and lists.",
      "Roommates leave 🗒️ fridge lists — 'don't forget milk' domestic infrastructure.",
      "Waitstaff and retail still use 🗒️ order pads — analog reliability.",
    ],
    textingMeaning: "'Added to list 🗒️', 'Notes 🗒️', 'Fridge pad 🗒️'.",
    socialMeaning: "Minimalist productivity, diner aesthetic, and mom group list humor tag 🗒️.",
    caution: "Loose 🗒️ pages lost — photo important lists to phone backup.",
    examples: [
      { context: "Grocery", text: "List 🗒️" },
      { context: "Meeting", text: "Scribbles 🗒️" },
      { context: "Fridge", text: "Don't forget 🗒️" },
      { context: "Diner", text: "Order 🗒️" },
      { context: "Pocket", text: "Memo 🗒️" },
    ],
    contextBlocks: [
      { title: "Vs 📓", body: "📓 larger notebook. 🗒️ pocket/quick list pad." },
      { title: "Fridge list", body: "🗒️ on fridge door — household communication hub." },
      { title: "Ephemeral", body: "Tear sheet and toss — lower stakes than journal 📔." },
    ],
    searchIntents: ["spiral notepad emoji", "🗒️ meaning", "notepad emoji", "🗒️ copy paste"],
    whenNotToUse: ["Long-form journal — 📔.", "Bound ledger — 📒."],
    faqs: [
      { question: "What does 🗒️ mean?", answer: "Spiral notepad — quick notes, lists, grocery pad." },
      { question: "🗒️ vs 📝?", answer: "🗒️ pad object; 📝 memo with pencil writing action." },
    ],
  },

  "spiral-calendar": {
    batchId: BATCH_ID,
    searchTitle: "Spiral Calendar Emoji (🗓️) Meaning: Wall Planner, Schedule, and Year View",
    snippetAnswer:
      "🗓️ Spiral Calendar marks wall planners and schedules — kitchen calendar, family activity grid, and monthly overview posts.",
    detailedParagraphs: [
      "Spiral Calendar (🗓️) shows wall-hanging calendar — Unicode symbol for household scheduling and visible planning.",
      "Family command centers photograph 🗓️ with color-coded kids' activities — chaos management.",
      "Office break rooms flip 🗓️ to new month — communal date reference.",
    ],
    textingMeaning: "'On the 🗓️', 'Wall planner 🗓️', 'Month view 🗓️'.",
    socialMeaning: "Family organizer blogs, school year planning, and office admin posts tag 🗓️.",
    caution: "Digital calendars dominate — 🗓️ reads intentional analog household.",
    examples: [
      { context: "Family", text: "Soccer on 🗓️" },
      { context: "Kitchen", text: "Command center 🗓️" },
      { context: "Office", text: "Break room 🗓️" },
      { context: "School", text: "Year 🗓️" },
      { context: "Plan", text: "Month 🗓️" },
    ],
    contextBlocks: [
      { title: "Wall planner", body: "🗓️ visible to whole household — shared schedule surface." },
      { title: "Vs 📅", body: "📅 often digital grid icon. 🗓️ physical spiral wall calendar." },
      { title: "Vs 📆", body: "📆 daily tear desk. 🗓️ monthly wall hang." },
    ],
    searchIntents: ["spiral calendar emoji", "🗓️ meaning", "wall calendar emoji", "🗓️ copy paste"],
    whenNotToUse: ["App calendar UI — 📅.", "Single day — 📆."],
    faqs: [
      { question: "What does 🗓️ mean?", answer: "Spiral wall calendar — family schedule, monthly planner." },
      { question: "🗓️ vs 📅?", answer: "🗓️ wall spiral pad; 📅 generic calendar grid symbol." },
    ],
  },

  "card-index": {
    batchId: BATCH_ID,
    searchTitle: "Card Index Emoji (📇) Meaning: Rolodex, Contacts, and Indexed Records",
    snippetAnswer:
      "📇 Card Index marks contact lists and indexed records — Rolodex nostalgia, CRM metaphors, and organized lookup systems.",
    detailedParagraphs: [
      "Card Index (📇) shows rotary card file — Unicode symbol for contacts, indexes, and searchable records.",
      "Sales old-timers joke about 📇 before Salesforce — relationship memory.",
      "Genealogy and research buffs use 📇 for citation index organization.",
    ],
    textingMeaning: "'Contacts 📇', 'Indexed 📇', 'Lookup 📇'.",
    socialMeaning: "Vintage office aesthetic, networking humor, and library science posts tag 📇.",
    caution: "GDPR/privacy — don't expose real 📇 contact dumps publicly.",
    examples: [
      { context: "Contacts", text: "Rolodex 📇" },
      { context: "Sales", text: "Leads 📇" },
      { context: "Research", text: "Citations 📇" },
      { context: "Vintage", text: "Desk 📇" },
      { context: "CRM", text: "Before SaaS 📇" },
    ],
    contextBlocks: [
      { title: "Rolodex culture", body: "📇 is pre-smartphone contact memory — spin to find." },
      { title: "Vs 🗃️", body: "🗃️ box container. 📇 visible index cards in file." },
      { title: "CRM metaphor", body: "Modern CRM = digital 📇 with automation." },
    ],
    searchIntents: ["card index emoji", "📇 meaning", "rolodex emoji", "📇 copy paste"],
    whenNotToUse: ["Phone contacts app — 📱 unless retro joke."],
    faqs: [
      { question: "What does 📇 mean?", answer: "Card index/Rolodex — contacts, indexed records, lookup." },
      { question: "📇 still used?", answer: "Niche vintage office; metaphor for organized contacts." },
    ],
  },

  "card-file-box": {
    batchId: BATCH_ID,
    searchTitle: "Card File Box Emoji (🗃️) Meaning: Archive, Storage, and Filed Records",
    snippetAnswer:
      "🗃️ Card File Box means archived records — stored files, library catalog energy, backup archives, and deep storage metaphors.",
    detailedParagraphs: [
      "Card File Box (🗃️) shows drawer-style file box — Unicode symbol for archives and stored index records.",
      "IT backup threads metaphorically 🗃️ — cold storage and tape archive jokes.",
      "Museum and library posts use 🗃️ for catalogued collections — preservation vibe.",
    ],
    textingMeaning: "'Archived 🗃️', 'Deep storage 🗃️', 'Filed away 🗃️'.",
    socialMeaning: "Digital hoarding confessions, email archive humor, and GLAM sector posts tag 🗃️.",
    caution: "Archive ≠ delete — ensure you can retrieve from 🗃️.",
    examples: [
      { context: "Archive", text: "Cold 🗃️" },
      { context: "Email", text: "Old mail 🗃️" },
      { context: "Library", text: "Catalog 🗃️" },
      { context: "Backup", text: "Tape 🗃️" },
      { context: "Done", text: "Filed 🗃️" },
    ],
    contextBlocks: [
      { title: "Deep storage", body: "🗃️ means out of daily use but kept — archive drawer." },
      { title: "Vs 📁", body: "📁 active folder. 🗃️ boxed archive storage." },
      { title: "Vs 🗄️", body: "🗄️ filing cabinet drawers. 🗃️ card index box." },
    ],
    searchIntents: ["card file box emoji", "🗃️ meaning", "archive box emoji", "🗃️ copy paste"],
    whenNotToUse: ["Active project files — 📂.", "Trash — 🗑️."],
    faqs: [
      { question: "What does 🗃️ mean?", answer: "Card file box — archive, stored records, deep filing." },
      { question: "🗃️ digital archive?", answer: "Yes — metaphor for cold storage and old email archives." },
    ],
  },

  "file-cabinet": {
    batchId: BATCH_ID,
    searchTitle: "File Cabinet Emoji (🗄️) Meaning: Office Bureaucracy, HR Files, and Paperwork",
    snippetAnswer:
      "🗄️ File Cabinet marks office bureaucracy — HR files, endless paperwork, government forms, and 'buried in filing' memes.",
    detailedParagraphs: [
      "File Cabinet (🗄️) shows metal drawer cabinet — Unicode symbol for institutional paperwork and records.",
      "Government and corporate satire stacks 🗄️ — red tape and compliance culture.",
      "Decluttering offices confront 🗄️ of mystery folders — scan or shred decisions.",
    ],
    textingMeaning: "'In the 🗄️', 'Paperwork 🗄️', 'HR file 🗄️'.",
    socialMeaning: "Office Space memes, public sector humor, and records management posts tag 🗄️.",
    caution: "Retain legal docs properly — shredding wrong 🗄️ drawer costly.",
    examples: [
      { context: "HR", text: "Personnel 🗄️" },
      { context: "Gov", text: "Forms 🗄️" },
      { context: "Clean", text: "Shred day 🗄️" },
      { context: "Meme", text: "TPS reports 🗄️" },
      { context: "Archive", text: "Basement 🗄️" },
    ],
    contextBlocks: [
      { title: "Bureaucracy symbol", body: "🗄️ evokes institutional slow paper machinery." },
      { title: "Vs 📁", body: "📁 digital/desktop folder. 🗄️ physical metal bureaucracy." },
      { title: "Compliance", body: "Records retention policies govern 🗄️ contents — boring but critical." },
    ],
    searchIntents: ["file cabinet emoji", "🗄️ meaning", "filing cabinet emoji", "🗄️ copy paste"],
    whenNotToUse: ["Casual home clutter — 📦.", "Digital-only team — 📁."],
    faqs: [
      { question: "What does 🗄️ mean?", answer: "File cabinet — office paperwork, HR files, bureaucracy." },
      { question: "🗄️ meme?", answer: "Office bureaucracy and endless forms — Office Space energy." },
    ],
  },

  wastebasket: {
    batchId: BATCH_ID,
    searchTitle: "Wastebasket Emoji (🗑️) Meaning: Trash, Delete, and Throw Away",
    snippetAnswer:
      "🗑️ Wastebasket means trash and delete — throw away drafts, desk bin, digital delete metaphor, and declutter posts.",
    detailedParagraphs: [
      "Wastebasket (🗑️) shows wire or plastic bin — Unicode symbol for discard and delete actions.",
      "Designers drag layers to 🗑️ — cross-app delete icon lineage.",
      "Spring cleaning posts celebrate filling 🗑️ — declutter dopamine.",
    ],
    textingMeaning: "'Trash it 🗑️', 'Deleted 🗑️', 'Bin 🗑️'.",
    socialMeaning: "Digital cleanup threads, Marie Kondo adjacent humor, and dev 'rm -rf' jokes use 🗑️.",
    caution: "Empty 🗑️ recoverable on computer — physical 🗑️ not always.",
    examples: [
      { context: "Delete", text: "Gone 🗑️" },
      { context: "Clean", text: "Desk 🗑️" },
      { context: "Draft", text: "Trash draft 🗑️" },
      { context: "Spring", text: "Purge 🗑️" },
      { context: "Code", text: "Removed 🗑️" },
    ],
    contextBlocks: [
      { title: "Delete metaphor", body: "🗑️ universal discard — files, ideas, physical junk." },
      { title: "Vs ♻️", body: "♻️ recycle. 🗑️ straight trash — know local rules." },
      { title: "Digital UX", body: "Trash folder icon derives from 🗑️ — restore window limited." },
    ],
    searchIntents: ["wastebasket emoji", "🗑️ meaning", "trash emoji", "🗑️ delete"],
    whenNotToUse: ["Recycle content — ♻️.", "Sensitive shred — cross-cut not 🗑️ alone."],
    faqs: [
      { question: "What does 🗑️ mean?", answer: "Wastebasket/trash — delete, throw away, declutter." },
      { question: "🗑️ for digital delete?", answer: "Yes — default metaphor for removing files and drafts." },
    ],
  },

  "locked-with-pen": {
    batchId: BATCH_ID,
    searchTitle: "Locked With Pen Emoji (🔏) Meaning: Signed Document, Confidential, and Ink Lock",
    snippetAnswer:
      "🔏 Locked With Pen marks signed confidential documents — ink signature security, NDA signed, and legally locked paperwork.",
    detailedParagraphs: [
      "Locked With Pen (🔏) shows nib with lock — Unicode symbol for signed and secured documents.",
      "Legal and freelance threads use 🔏 when contract executed — binding agreement closed.",
      "Infosec occasionally borrows 🔏 for document signing certificates — digital signature adjacency.",
    ],
    textingMeaning: "'Signed & locked 🔏', 'NDA 🔏', 'Executed 🔏'.",
    socialMeaning: "Contract milestone posts, paralegal humor, and crypto doc-sign niche tag 🔏.",
    caution: "Emoji doesn't create legal binding — real signatures and laws apply.",
    examples: [
      { context: "Contract", text: "Executed 🔏" },
      { context: "NDA", text: "Signed 🔏" },
      { context: "Legal", text: "Filed 🔏" },
      { context: "Freelance", text: "Done deal 🔏" },
      { context: "Secure", text: "Locked doc 🔏" },
    ],
    contextBlocks: [
      { title: "Signed + secured", body: "🔏 combines ink signature with lock — confidential executed doc." },
      { title: "Vs 🔒", body: "🔒 generic lock. 🔏 specifically ink/signature security." },
      { title: "Vs ✒️", body: "✒️ writing nib. 🔏 nib with lock — signed and protected." },
    ],
    searchIntents: ["locked with pen emoji", "🔏 meaning", "signed document emoji", "🔏 copy paste"],
    whenNotToUse: ["Unsigned draft — 📝/📄.", "Password lock without document — 🔒."],
    faqs: [
      { question: "What does 🔏 mean?", answer: "Locked with pen — signed confidential document, executed contract." },
      { question: "🔏 legal binding?", answer: "Symbol only — real contracts need proper legal execution." },
    ],
  },

  "linked-paperclips": {
    batchId: BATCH_ID,
    searchTitle: "Linked Paperclips Emoji (🖇️) Meaning: Attachments, Links, and Paper Clips",
    snippetAnswer:
      "🖇️ Linked Paperclips mean attachments and links — email paperclip icon, connected ideas, and office supply nostalgia.",
    detailedParagraphs: [
      "Linked Paperclips (🖇️) show two chained clips — Unicode symbol for attachments and connection.",
      "Email 'see attachment' culture maps to 🖇️ — millennials recognize instantly.",
      "Metaphorical link chains use 🖇️ — connected thread posts.",
    ],
    textingMeaning: "'Attached 🖇️', 'Link chain 🖇️', 'Clipped 🖇️'.",
    socialMeaning: "Office nostalgia, email etiquette reminders, and craft supply posts tag 🖇️.",
    caution: "Verify 🖇️ attachment actually attached — Outlook trauma universal.",
    examples: [
      { context: "Email", text: "See 🖇️" },
      { context: "Forgot", text: "Resending 🖇️" },
      { context: "Craft", text: "Chain 🖇️" },
      { context: "Thread", text: "Linked 🖇️" },
      { context: "Office", text: "Desk 🖇️" },
    ],
    contextBlocks: [
      { title: "Email attachment", body: "🖇️ is the mental model for file attached — check before send." },
      { title: "Vs 📎", body: "📎 single paperclip. 🖇️ two linked clips." },
      { title: "Link metaphor", body: "Chained 🖇️ for connected posts or dependency graphs." },
    ],
    searchIntents: ["linked paperclips emoji", "🖇️ meaning", "paperclip chain emoji", "🖇️ attachment"],
    whenNotToUse: ["Single clip — 📎.", "URL link — 🔗 clearer."],
    faqs: [
      { question: "What does 🖇️ mean?", answer: "Linked paperclips — email attachment, connected links." },
      { question: "🖇️ vs 📎?", answer: "🖇️ two linked; 📎 single paperclip." },
    ],
  },

  "straight-ruler": {
    batchId: BATCH_ID,
    searchTitle: "Straight Ruler Emoji (📏) Meaning: Measure, School, and Straight Edge",
    snippetAnswer:
      "📏 Straight Ruler marks measurement and school — geometry class, 'measure twice', craft projects, and strict rule enforcement memes.",
    detailedParagraphs: [
      "Straight Ruler (📏) shows flat measuring ruler — Unicode symbol for length measure and classroom tools.",
      "Parents helping homework resurrect 📏 — metric vs imperial wars in comments.",
      "Memes use 📏 for measuring absurd standards — 'let me 📏 that take'.",
    ],
    textingMeaning: "'Measure 📏', 'Homework 📏', 'Rules 📏'.",
    socialMeaning: "Teacher TikTok, DIY craft, and debate 'by what standard' dunking tag 📏.",
    caution: "Body measuring 📏 comments harmful — keep school/DIY context.",
    examples: [
      { context: "School", text: "Math 📏" },
      { context: "DIY", text: "Cut line 📏" },
      { context: "Meme", text: "Standard 📏" },
      { context: "Craft", text: "Straight 📏" },
      { context: "Kids", text: "Supply list 📏" },
    ],
    contextBlocks: [
      { title: "School staple", body: "📏 on every August supply list — nostalgia trigger." },
      { title: "Vs 📐", body: "📐 triangular set square. 📏 straight edge ruler." },
      { title: "Measure metaphor", body: "'Short of the 📏' — failed to meet standard." },
    ],
    searchIntents: ["ruler emoji", "📏 meaning", "straight ruler emoji", "📏 copy paste"],
    whenNotToUse: ["Angles/geometry set — 📐.", "Body shaming."],
    faqs: [
      { question: "What does 📏 mean?", answer: "Straight ruler — measure, school, craft, standards metaphor." },
      { question: "📏 vs 📐?", answer: "📏 straight ruler; 📐 triangle for angles." },
    ],
  },

  "triangular-ruler": {
    batchId: BATCH_ID,
    searchTitle: "Triangular Ruler Emoji (📐) Meaning: Geometry, Angles, and Drafting",
    snippetAnswer:
      "📐 Triangular Ruler marks geometry and drafting — set squares, math homework, architecture student life, and precise angles.",
    detailedParagraphs: [
      "Triangular Ruler (📐) shows set square tool — Unicode symbol for geometry class and technical drawing.",
      "Architecture and engineering students bond over 📐 trauma — studio desk permanent resident.",
      "Math meme accounts use 📐 for proof and angle discourse — niche but loyal.",
    ],
    textingMeaning: "'Geometry 📐', 'Studio 📐', 'Angles 📐'.",
    socialMeaning: "STEM studyblr, architecture memes, and math competition posts tag 📐.",
    caution: "Exact angle claims need actual 📐 measure — not vibe geometry.",
    examples: [
      { context: "Math", text: "Proof 📐" },
      { context: "Arch", text: "Studio 📐" },
      { context: "Homework", text: "Triangles 📐" },
      { context: "Draft", text: "Plan 📐" },
      { context: "Exam", text: "Final 📐" },
    ],
    contextBlocks: [
      { title: "Geometry class", body: "📐 triggers high school math flashbacks — SOHCAHTOA era." },
      { title: "Vs 📏", body: "📏 length measure. 📐 angle/set square tool." },
      { title: "Architecture", body: "Drafting tables always had 📐 — pre-CAD generation." },
    ],
    searchIntents: ["triangular ruler emoji", "📐 meaning", "set square emoji", "📐 geometry"],
    whenNotToUse: ["Simple length — 📏.", "Non-technical angle joke may confuse."],
    faqs: [
      { question: "What does 📐 mean?", answer: "Triangular ruler — geometry, angles, drafting, architecture." },
      { question: "📐 math meme?", answer: "STEM and architecture communities use for homework and studio life." },
    ],
  },

  label: {
    batchId: BATCH_ID,
    searchTitle: "Label Emoji (🏷️) Meaning: Tags, Price, Shipping, and Organization",
    snippetAnswer:
      "🏷️ Label marks tags and pricing — sale stickers, shipping labels, organized bins, and 'tag someone' social posts.",
    detailedParagraphs: [
      "Label (🏷️) shows price tag shape — Unicode symbol for retail, organization, and metadata.",
      "Small business shipping days stack 🏷️ — print queue and scale ritual.",
      "Organizing influencers label everything 🏷️ — pantry bin aesthetic.",
    ],
    textingMeaning: "'On sale 🏷️', 'Print labels 🏷️', 'Tag 🏷️'.",
    socialMeaning: "Etsy seller life, Container Store dreams, and Instagram tag prompts use 🏷️.",
    caution: "Hide personal info on shipping 🏷️ in photos — address privacy.",
    examples: [
      { context: "Sale", text: "Clearance 🏷️" },
      { context: "Ship", text: "Print 🏷️" },
      { context: "Organize", text: "Bins 🏷️" },
      { context: "Social", text: "Tag friends 🏷️" },
      { context: "Retail", text: "Markdown 🏷️" },
    ],
    contextBlocks: [
      { title: "Price tag", body: "🏷️ retail sale signal — discount hunting." },
      { title: "Shipping", body: "Print 🏷️ day — small biz weekly rhythm." },
      { title: "Vs 🔖", body: "🔖 bookmark save. 🏷️ label/tag metadata." },
    ],
    searchIntents: ["label emoji", "🏷️ meaning", "price tag emoji", "🏷️ copy paste"],
    whenNotToUse: ["Save for later reading — 🔖.", "Hashtag alone — # works."],
    faqs: [
      { question: "What does 🏷️ mean?", answer: "Label/tag — price, shipping, organization, social tagging." },
      { question: "🏷️ tag someone?", answer: "Social 'tag' posts borrow 🏷️ — invite others into content." },
    ],
  },

  "bookmark-tabs": {
    batchId: BATCH_ID,
    searchTitle: "Bookmark Tabs Emoji (📑) Meaning: Browser Tabs, Markers, and Multi-Section",
    snippetAnswer:
      "📑 Bookmark Tabs marks tab markers and multi-section docs — browser tab overload, binder dividers, and flagged sections.",
    detailedParagraphs: [
      "Bookmark Tabs (📑) show pages with colored index tabs — Unicode symbol for section markers and tabbed organization.",
      "Developers joke about 📑 browser tabs — 47 research tabs open meme.",
      "Legal and academic binders use 📑 tabs — depo and statute organization.",
    ],
    textingMeaning: "'Too many tabs 📑', 'Section 📑', 'Flagged 📑'.",
    socialMeaning: "Productivity shame memes, law school survival, and research rabbit hole posts tag 📑.",
    caution: "Tab overload crashes browser — 📑 cleanup saves RAM and sanity.",
    examples: [
      { context: "Browser", text: "47 tabs 📑" },
      { context: "Binder", text: "Sections 📑" },
      { context: "Research", text: "Deep dive 📑" },
      { context: "Work", text: "Flagged 📑" },
      { context: "Clean", text: "Close tabs 📑" },
    ],
    contextBlocks: [
      { title: "Browser tabs", body: "📑 meme for tab hoarding — research procrastination symbol." },
      { title: "Vs 🔖", body: "🔖 single bookmark. 📑 multiple tab markers." },
      { title: "Vs 🗂️", body: "🗂️ file dividers. 📑 page edge tabs in document." },
    ],
    searchIntents: ["bookmark tabs emoji", "📑 meaning", "tab markers emoji", "📑 browser tabs"],
    whenNotToUse: ["Single saved link — 🔖.", "Folder sort — 📁."],
    faqs: [
      { question: "What does 📑 mean?", answer: "Bookmark tabs — browser tabs, section markers, flagged pages." },
      { question: "📑 tab meme?", answer: "Yes — too many open browser tabs during research." },
    ],
  },

  "closed-mailbox-with-lowered-flag": {
    batchId: BATCH_ID,
    searchTitle: "Closed Mailbox Lowered Flag Emoji (📪) Meaning: Empty Mailbox, No Mail Out",
    snippetAnswer:
      "📪 Closed Mailbox Lowered Flag means empty or idle mailbox — no outgoing mail, waiting for delivery, quiet mail day.",
    detailedParagraphs: [
      "Closed Mailbox With Lowered Flag (📪) shows US mailbox, flag down — Unicode signal no outgoing mail pending.",
      "Suburban quiet days get 📪 — nothing in box relief or disappointment for package watchers.",
      "Pairs with 📫 raised flag for mail lifecycle education posts.",
    ],
    textingMeaning: "'Empty 📪', 'No mail 📪', 'Flag down 📪'.",
    socialMeaning: "Package tracking anxiety, pen-pal dry spells, and suburban life minutiae tag 📪.",
    caution: "Theft still happens with 📪 — don't assume secure.",
    examples: [
      { context: "Empty", text: "Nothing 📪" },
      { context: "Wait", text: "Package tomorrow 📪" },
      { context: "Suburb", text: "Quiet 📪" },
      { context: "Outgoing", text: "Nothing to send 📪" },
      { context: "Check", text: "Still empty 📪" },
    ],
    contextBlocks: [
      { title: "Flag logic", body: "Lowered = no outgoing mail signal in US mailbox convention." },
      { title: "Vs 📫", body: "📫 flag raised outgoing. 📪 flag lowered idle." },
      { title: "Vs 📭", body: "📭 open empty. 📪 closed lowered — both no outgoing." },
    ],
    searchIntents: ["closed mailbox emoji", "📪 meaning", "mailbox lowered flag", "📪 no mail"],
    whenNotToUse: ["Outgoing ready — 📫/📬.", "UK postbox — 📮."],
    faqs: [
      { question: "What does 📪 mean?", answer: "Closed mailbox, flag down — no outgoing mail, empty/idle." },
      { question: "📪 vs 📭?", answer: "Both lowered flag; 📭 open box, 📪 closed box." },
    ],
  },

  "open-mailbox-with-lowered-flag": {
    batchId: BATCH_ID,
    searchTitle: "Open Mailbox Lowered Flag Emoji (📭) Meaning: No Outgoing Mail, Empty Box",
    snippetAnswer:
      "📭 Open Mailbox Lowered Flag marks open empty mailbox — checked mail, nothing outgoing, package still in transit waiting.",
    detailedParagraphs: [
      "Open Mailbox With Lowered Flag (📭) shows open door, flag down — Unicode variant of empty/no-outgoing state.",
      "Online shoppers refresh tracking then check 📭 — empty box sadness.",
      "Mail carriers emptied 📭 — daily route complete from sender side.",
    ],
    textingMeaning: "'Checked 📭', 'Still empty 📭', 'No outgoing 📭'.",
    socialMeaning: "Amazon addiction humor, pen-pal waiting, and neighborhood watch posts mention 📭.",
    caution: "Open 📭 invites theft in some areas — community awareness matters.",
    examples: [
      { context: "Package", text: "Not yet 📭" },
      { context: "Checked", text: "Empty 📭" },
      { context: "Wait", text: "Tomorrow 📭" },
      { context: "Outgoing", text: "None 📭" },
      { context: "Route", text: "Delivered 📭" },
    ],
    contextBlocks: [
      { title: "Open empty", body: "📭 door open shows checked — still nothing inside." },
      { title: "Vs 📪", body: "📪 closed lowered. 📭 open lowered — both no outgoing flag." },
      { title: "Vs 📬", body: "📬 open raised outgoing. 📭 open lowered empty idle." },
    ],
    searchIntents: ["open mailbox emoji", "📭 meaning", "empty mailbox emoji", "📭 copy paste"],
    whenNotToUse: ["Mail to send — 📬.", "Mail arrived notification — 📫 context differs."],
    faqs: [
      { question: "What does 📭 mean?", answer: "Open mailbox, flag down — empty, no outgoing, checked." },
      { question: "Mailbox emoji set?", answer: "Four US mailbox variants by open/closed and flag up/down." },
    ],
  },

  door: {
    batchId: BATCH_ID,
    searchTitle: "Door Emoji (🚪) Meaning: Opportunity, Exit, and Real Estate",
    snippetAnswer:
      "🚪 Door marks doors and thresholds — new opportunities, 'show yourself out', real estate listings, and closet skeleton memes.",
    detailedParagraphs: [
      "Door (🚪) shows closed wooden door — Unicode symbol for entry, exit, and opportunity metaphors.",
      "'When one door closes' captions use 🚪 — career pivot and breakup recovery posts.",
      "Real estate agents emoji-stack 🚪 with 🔑 — open house promotion.",
    ],
    textingMeaning: "'Open door 🚪', 'Exit 🚪', 'Opportunity 🚪'.",
    socialMeaning: "Motivational LinkedIn, horror closet jokes, and apartment hunt threads tag 🚪.",
    caution: "Leave abusive situations — 🚪 metaphor serious for some followers.",
    examples: [
      { context: "Opportunity", text: "New 🚪" },
      { context: "Exit", text: "Out 🚪" },
      { context: "Real estate", text: "Tour 🚪" },
      { context: "Meme", text: "Skeleton closet 🚪" },
      { context: "Move", text: "New place 🚪" },
    ],
    contextBlocks: [
      { title: "Opportunity metaphor", body: "🚪 opens/closes life chapter language — jobs, relationships." },
      { title: "Vs 🛗", body: "🛗 elevator transport. 🚪 threshold between spaces." },
      { title: "Real estate", body: "Listing photos rarely include 🚪 but captions do for tours." },
    ],
    searchIntents: ["door emoji", "🚪 meaning", "opportunity door emoji", "🚪 copy paste"],
    whenNotToUse: ["Car door — 🚗 context.", "Portal fantasy — unless metaphor intended."],
    faqs: [
      { question: "What does 🚪 mean?", answer: "Door — opportunity, exit, entry, real estate threshold." },
      { question: "🚪 closed door metaphor?", answer: "Rejected opportunity or ended chapter — opens another narrative." },
    ],
  },

  elevator: {
    batchId: BATCH_ID,
    searchTitle: "Elevator Emoji (🛗) Meaning: Accessibility, Buildings, and Elevator Pitch",
    snippetAnswer:
      "🛗 Elevator means building lift access — accessibility needs, high-rise living, awkward small talk, and 'elevator pitch' business memes.",
    detailedParagraphs: [
      "Elevator (🛗) shows lift doors — Unicode accessibility and urban building symbol.",
      "Disability advocates stress 🛗 access — stairs-only venues exclude.",
      "Startup culture turned 🛗 into elevator pitch — 30-second pitch metaphor.",
    ],
    textingMeaning: "'Take 🛗', 'Broken 🛗', 'Pitch 🛗'.",
    socialMeaning: "Accessibility callouts, NYC apartment tours, and founder Twitter tag 🛗.",
    caution: "Broken 🛗 traps people — report to building management urgently.",
    examples: [
      { context: "Access", text: "Step-free 🛗" },
      { context: "Apartment", text: "12th floor 🛗" },
      { context: "Startup", text: "Pitch 🛗" },
      { context: "Broken", text: "Stairs only 🛗" },
      { context: "Office", text: "Monday 🛗" },
    ],
    contextBlocks: [
      { title: "Accessibility", body: "🛗 required access — not luxury for wheelchair users and mobility needs." },
      { title: "Elevator pitch", body: "Business 🛗 pitch = concise idea sell in short ride time." },
      { title: "Vs 🚪", body: "🚪 generic door. 🛗 vertical transport between floors." },
    ],
    searchIntents: ["elevator emoji", "🛗 meaning", "lift emoji", "🛗 elevator pitch"],
    whenNotToUse: ["Escalator — different access.", "Metaphorical rise — 📈 unless pitch joke."],
    faqs: [
      { question: "What does 🛗 mean?", answer: "Elevator — building access, accessibility, elevator pitch." },
      { question: "🛗 accessibility?", answer: "Critical mobility access — venues without lifts exclude people." },
    ],
  },

  plunger: {
    batchId: BATCH_ID,
    searchTitle: "Plunger Emoji (🪠) Meaning: Plumbing, Fix It, and Bathroom Emergencies",
    snippetAnswer:
      "🪠 Plunger marks plumbing fixes — clogged toilet panic, landlord calls, DIY bathroom hero, and gross-but-necessary humor.",
    detailedParagraphs: [
      "Plunger (🪠) shows cup plunger — Unicode symbol for household plumbing emergencies.",
      "Roommates text 🪠 in crisis — shared bathroom diplomacy.",
      "Landlord meme accounts sleep until 🪠 emergency — tenant life.",
    ],
    textingMeaning: "'Need 🪠', 'Clogged 🪠', 'Landlord 🪠'.",
    socialMeaning: "First apartment TikTok, plumber appreciation, and gross roommate stories tag 🪠.",
    caution: "Sewage issues need pro — 🪠 fails on serious blockages.",
    examples: [
      { context: "Emergency", text: "Help 🪠" },
      { context: "DIY", text: "Fixed 🪠" },
      { context: "Landlord", text: "Called 🪠" },
      { context: "Move-in", text: "Buy 🪠" },
      { context: "Roommate", text: "Your turn 🪠" },
    ],
    contextBlocks: [
      { title: "First apartment", body: "🪠 on essential move-in list — learned the hard way." },
      { title: "Vs 🔧", body: "🔧 general repair. 🪠 specific plumbing clog tool." },
      { title: "Landlord delay", body: "Tenants buy own 🪠 after slow maintenance response." },
    ],
    searchIntents: ["plunger emoji", "🪠 meaning", "toilet plunger emoji", "🪠 copy paste"],
    whenNotToUse: ["Non-plumbing fix — 🔧.", "Keep bathroom humor among friends who consent."],
    faqs: [
      { question: "What does 🪠 mean?", answer: "Plunger — clogged toilet, plumbing fix, bathroom emergency." },
      { question: "🪠 meme?", answer: "First apartment and landlord neglect — universal tenant humor." },
    ],
  },

  razor: {
    batchId: BATCH_ID,
    searchTitle: "Razor Emoji (🪒) Meaning: Shaving, Grooming, and Clean Cut",
    snippetAnswer:
      "🪒 Razor marks shaving and grooming — clean shave day, barber buzz, self-care routine, and 'sharp' metaphor posts.",
    detailedParagraphs: [
      "Razor (🪒) shows safety razor — Unicode symbol for shaving, grooming, and barber culture.",
      "Barbershop posts stack 🪒 with 💈 — fade and line-up day.",
      "Metaphorical 'sharp 🪒' means crisp execution — sports and business slang.",
    ],
    textingMeaning: "'Shave day 🪒', 'Barber 🪒', 'Clean 🪒'.",
    socialMeaning: "Grooming GRWM, wet shaving hobbyists, and sports 'staying sharp' memes use 🪒.",
    caution: "Sensitive skin and gender dysphoria — shaving posts can trigger; tag thoughtfully.",
    examples: [
      { context: "Shave", text: "Fresh 🪒" },
      { context: "Barber", text: "Line up 🪒" },
      { context: "Routine", text: "Morning 🪒" },
      { context: "Sports", text: "Sharp 🪒" },
      { context: "Travel", text: "TSA 🪒" },
    ],
    contextBlocks: [
      { title: "Grooming routine", body: "🪒 daily or event prep — wedding, interview, date." },
      { title: "Vs 💈", body: "💈 barbershop sign. 🪒 razor tool itself." },
      { title: "Sharp metaphor", body: "Team 'staying 🪒' = performing at peak." },
    ],
    searchIntents: ["razor emoji", "🪒 meaning", "shaving emoji", "🪒 copy paste"],
    whenNotToUse: ["Haircut only — ✂️/💇 unless shave specific.", "Self-harm contexts — never joke."],
    faqs: [
      { question: "What does 🪒 mean?", answer: "Razor — shaving, grooming, barber, sharp metaphor." },
      { question: "🪒 vs electric?", answer: "Emoji shows manual safety razor — classic wet shave." },
    ],
  },

  "safety-pin": {
    batchId: BATCH_ID,
    searchTitle: "Safety Pin Emoji (🧷) Meaning: Punk Fashion, Quick Fix, and Solidarity",
    snippetAnswer:
      "🧷 Safety Pin means quick fixes and punk aesthetic — hem emergency, punk fashion, post-2016 solidarity symbol, and DIY hold.",
    detailedParagraphs: [
      "Safety Pin (🧷) shows clasp pin — Unicode symbol for temporary fixes and punk subculture fashion.",
      "Fashion disasters use 🧷 backstage — runway and prom emergency kit staple.",
      "Safety pin solidarity movement used 🧷 profile badges — ally symbolism period-specific.",
    ],
    textingMeaning: "'Pinned 🧷', 'Quick fix 🧷', 'Punk 🧷'.",
    socialMeaning: "Punk fashion history, cosplay repair kits, and sewing hack TikTok tag 🧷.",
    caution: "Solidarity 🧷 symbolism dated — research before adopting as ally signal today.",
    examples: [
      { context: "Fix", text: "Hem 🧷" },
      { context: "Punk", text: "Jacket 🧷" },
      { context: "Prom", text: "Emergency 🧷" },
      { context: "Cosplay", text: "Hold 🧷" },
      { context: "DIY", text: "Hack 🧷" },
    ],
    contextBlocks: [
      { title: "Quick fix", body: "🧷 temporary hold until proper sew — not permanent solution." },
      { title: "Punk aesthetic", body: "Safety pins on leather — subculture fashion icon since 70s." },
      { title: "Solidarity history", body: "Post-2016 some wore 🧷 as ally badge — context-specific." },
    ],
    searchIntents: ["safety pin emoji", "🧷 meaning", "punk pin emoji", "🧷 copy paste"],
    whenNotToUse: ["Diaper pin baby context rare for emoji.", "Don't mock solidarity movements."],
    faqs: [
      { question: "What does 🧷 mean?", answer: "Safety pin — quick fix, punk fashion, temporary hold." },
      { question: "🧷 solidarity?", answer: "Historically worn as ally symbol in specific political moments." },
    ],
  },

  basket: {
    batchId: BATCH_ID,
    searchTitle: "Basket Emoji (🧺) Meaning: Laundry, Picnic, Easter, and Shopping",
    snippetAnswer:
      "🧺 Basket marks baskets and carrying — laundry day, picnic spreads, Easter egg hunts, and farmers market hauls.",
    detailedParagraphs: [
      "Basket (🧺) shows woven carry basket — Unicode symbol for laundry, picnic, and harvest gathering.",
      "Laundry procrastination posts pile 🧺 — smell test culture.",
      "Easter and spring content centers 🧺 with eggs — seasonal spike.",
    ],
    textingMeaning: "'Laundry 🧺', 'Picnic 🧺', 'Market haul 🧺'.",
    socialMeaning: "Cottagecore aesthetic, Easter family photos, and zero-waste market trips tag 🧺.",
    caution: "Moldy 🧺 laundry health hazard — wash before reuse.",
    examples: [
      { context: "Laundry", text: "Mount 🧺" },
      { context: "Picnic", text: "Park 🧺" },
      { context: "Easter", text: "Hunt 🧺" },
      { context: "Market", text: "Produce 🧺" },
      { context: "Cottage", text: "Aesthetic 🧺" },
    ],
    contextBlocks: [
      { title: "Laundry universal", body: "🧺 hamper icon — household chore nobody escapes." },
      { title: "Vs 🛒", body: "🛒 shopping cart. 🧺 woven carry/hand basket." },
      { title: "Seasonal Easter", body: "🧺 egg hunt photos dominate spring Pinterest." },
    ],
    searchIntents: ["basket emoji", "🧺 meaning", "laundry basket emoji", "🧺 copy paste"],
    whenNotToUse: [" Basketball — 🏀.", "Waste — 🗑️."],
    faqs: [
      { question: "What does 🧺 mean?", answer: "Basket — laundry, picnic, Easter, farmers market." },
      { question: "🧺 laundry?", answer: "Most common daily use — hamper and carry basket." },
    ],
  },

  "roll-of-paper": {
    batchId: BATCH_ID,
    searchTitle: "Roll of Paper Emoji (🧻) Meaning: Toilet Paper, Crafts, and Household",
    snippetAnswer:
      "🧻 Roll of Paper means toilet paper — household staple, 2020 hoarding flashbacks, craft rolls, and 'we're out' panic texts.",
    detailedParagraphs: [
      "Roll of Paper (🧻) depicts toilet paper roll — Unicode household symbol with infamous pandemic meme era.",
      "Roommates send 🧻 when supply critical — domestic SOS.",
      "Craft uses 🧻 for kids projects — different from bathroom panic context.",
    ],
    textingMeaning: "'Out of 🧻', 'Buy 🧻', 'Craft 🧻'.",
    socialMeaning: "Pandemic flashback memes, roommate group chats, and camping pack lists tag 🧻.",
    caution: "Hoarding 🧻 harmed neighbors — share supply responsibly.",
    examples: [
      { context: "Roommate", text: "Out 🧻" },
      { context: "Store", text: "Aisle empty 🧻" },
      { context: "Camp", text: "Pack 🧻" },
      { context: "Meme", text: "2020 🧻" },
      { context: "Craft", text: "TP roll 🧻" },
    ],
    contextBlocks: [
      { title: "Household essential", body: "🧻 absence felt immediately — urgent grocery item." },
      { title: "Pandemic meme", body: "2020 TP hoarding immortalized 🧻 in internet history." },
      { title: "Vs 📜", body: "📜 scroll parchment. 🧻 modern paper roll practical." },
    ],
    searchIntents: ["toilet paper emoji", "🧻 meaning", "roll of paper emoji", "🧻 copy paste"],
    whenNotToUse: ["Fine writing paper — 📄.", "Paper towel — different product."],
    faqs: [
      { question: "What does 🧻 mean?", answer: "Toilet paper roll — household staple, out-of-stock panic." },
      { question: "🧻 pandemic?", answer: "Strong association with 2020 hoarding memes — context persists." },
    ],
  },

  sponge: {
    batchId: BATCH_ID,
    searchTitle: "Sponge Emoji (🧽) Meaning: Cleaning, Dishes, and Absorb",
    snippetAnswer:
      "🧽 Sponge marks cleaning and dishes — kitchen scrub, spring clean, absorb metaphor, and SpongeBob adjacency in memes.",
    detailedParagraphs: [
      "Sponge (🧽) shows yellow porous sponge — Unicode symbol for cleaning chores and absorption.",
      "Roommate chore charts assign 🧽 rotation — sink dispute prevention.",
      "Meme culture links 🧽 to SpongeBob — square pants association unavoidable online.",
    ],
    textingMeaning: "'Scrub 🧽', 'Dishes 🧽', 'Clean day 🧽'.",
    socialMeaning: "Clean with me TikTok, chore accountability posts, and cartoon memes tag 🧽.",
    caution: "Replace 🧽 regularly — bacteria harbor in old sponges.",
    examples: [
      { context: "Dishes", text: "Your turn 🧽" },
      { context: "Clean", text: "Saturday 🧽" },
      { context: "Kitchen", text: "New 🧽" },
      { context: "Meme", text: "Bob 🧽" },
      { context: "Spring", text: "Deep 🧽" },
    ],
    contextBlocks: [
      { title: "Chore symbol", body: "🧽 = dish duty — shared living flashpoint." },
      { title: "Absorb metaphor", body: "Sponge absorbs info/emotion language — 'info 🧽'." },
      { title: "Vs 🧼", body: "🧼 soap bar. 🧽 scrub tool — use together." },
    ],
    searchIntents: ["sponge emoji", "🧽 meaning", "cleaning sponge emoji", "🧽 copy paste"],
    whenNotToUse: ["Bath loofah — different item.", "SpongeBob cosplay — 🧽 implied anyway."],
    faqs: [
      { question: "What does 🧽 mean?", answer: "Sponge — cleaning, dishes, absorb, kitchen chores." },
      { question: "🧽 SpongeBob?", answer: "Internet inevitably connects yellow 🧽 to cartoon — meme overlap." },
    ],
  },
};
