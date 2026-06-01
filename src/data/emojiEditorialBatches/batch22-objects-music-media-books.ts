import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "22-objects-music-media-books";

/** Batch 22 P1 — instruments, AV tech, retro media, and book variants. */
export const batch22ObjectsMusicMediaBooks: Record<string, EmojiBatchEnrichment> = {
  "musical-score": {
    batchId: BATCH_ID,
    searchTitle: "Musical Score Emoji (🎼) Meaning: Sheet Music, Orchestra, and Composition",
    snippetAnswer:
      "🎼 Musical Score marks sheet music and composition — orchestra rehearsals, music theory homework, songwriting, and classical concert posts.",
    detailedParagraphs: [
      "Musical Score (🎼) shows staff lines with notes — Unicode symbol for written music and formal performance.",
      "Band and choir parents recognize 🎼 season — folder of parts and conductor reminders.",
      "Songwriters screenshot 🎼 apps when sharing work-in-progress — DAW export culture.",
    ],
    textingMeaning: "'Rehearsal 🎼', 'Compose 🎼', 'Theory hw 🎼'.",
    socialMeaning: "Orchestra Instagram, music school acceptances, and composer portfolios tag 🎼.",
    caution: "Copyright on shared 🎼 snippets — don't leak unreleased scores.",
    examples: [
      { context: "Rehearsal", text: "Sectionals 🎼" },
      { context: "School", text: "Theory 🎼" },
      { context: "Compose", text: "Draft 🎼" },
      { context: "Concert", text: "Program 🎼" },
      { context: "Practice", text: "Sight read 🎼" },
    ],
    contextBlocks: [
      { title: "Vs 🎵", body: "🎵 musical note melody. 🎼 full written score on staff." },
      { title: "Classical culture", body: "🎼 signals formal notation — orchestra, choir, conservatory." },
      { title: "Vs 🎹", body: "🎹 piano instrument. 🎼 paper/digital sheet music." },
    ],
    searchIntents: ["musical score emoji", "🎼 meaning", "sheet music emoji", "🎼 copy paste"],
    whenNotToUse: ["For casual song lyric quote 🎵 may fit better."],
    faqs: [
      { question: "What does 🎼 mean?", answer: "Musical score — sheet music, orchestra, composition, theory." },
      { question: "🎼 vs 🎵?", answer: "🎼 is written score; 🎵 is single note/melody symbol." },
    ],
  },

  accordion: {
    batchId: BATCH_ID,
    searchTitle: "Accordion Emoji (🪗) Meaning: Folk Music, Polka, and Street Performers",
    snippetAnswer:
      "🪗 Accordion marks folk and polka — street musicians, European festivals, Cajun and zydeco culture, and quirky indie aesthetic.",
    detailedParagraphs: [
      "Accordion (🪗) shows squeezebox instrument — Unicode symbol for folk, world music, and busker culture.",
      "Oktoberfest and folk fest posts lead with 🪗 — beer hall energy without spelling it out.",
      "Indie bands with accordion get 🪗 in promo — distinctive timbre brag.",
    ],
    textingMeaning: "'Folk fest 🪗', 'Busker 🪗', 'Polka night 🪗'.",
    socialMeaning: "World music festivals, Paris metro performer clips, and folk punk threads tag 🪗.",
    caution: "Accordion 'weird' jokes tired — respect skilled players.",
    examples: [
      { context: "Festival", text: "Oktoberfest 🪗" },
      { context: "Street", text: "Metro 🪗" },
      { context: "Band", text: "New track 🪗" },
      { context: "Dance", text: "Polka 🪗" },
      { context: "Travel", text: "Europe 🪗" },
    ],
    contextBlocks: [
      { title: "Folk identity", body: "🪗 instantly reads folk/polka — regional styles vary globally." },
      { title: "Vs 🎹", body: "🎹 piano keys. 🪗 bellows folk instrument — different vibe." },
      { title: "Street performance", body: "Busker videos often caption 🪗 for accordion players." },
    ],
    searchIntents: ["accordion emoji", "🪗 meaning", "polka emoji", "🪗 copy paste"],
    whenNotToUse: ["For generic music 🎵 unless accordion specific."],
    faqs: [
      { question: "What does 🪗 mean?", answer: "Accordion — folk, polka, street music, festivals." },
      { question: "New emoji?", answer: "🪗 added in recent Unicode — dedicated accordion glyph." },
    ],
  },

  banjo: {
    batchId: BATCH_ID,
    searchTitle: "Banjo Emoji (🪕) Meaning: Bluegrass, Country, and Folk Americana",
    snippetAnswer:
      "🪕 Banjo means bluegrass and country — Appalachian folk, banjo picking TikTok, and Americana festival posts.",
    detailedParagraphs: [
      "Banjo (🪕) depicts five-string banjo — Unicode symbol for bluegrass, old-time, and country roots.",
      "Pickin' circles and porch jam sessions caption 🪕 — rural music tradition online.",
      "Deliverance memes aside, 🪕 also marks serious folk revival and Black banjo history education.",
    ],
    textingMeaning: "'Bluegrass 🪕', 'Porch jam 🪕', 'Pickin 🪕'.",
    socialMeaning: "Country festivals, folk revival educators, and instrument tutorial channels use 🪕.",
    caution: "Stereotype jokes about banjo harm — celebrate craft and history.",
    examples: [
      { context: "Festival", text: "Bluegrass 🪕" },
      { context: "Jam", text: "Porch 🪕" },
      { context: "Learn", text: "First roll 🪕" },
      { context: "Camp", text: "Folk week 🪕" },
      { context: "Record", text: "Track 🪕" },
    ],
    contextBlocks: [
      { title: "Bluegrass culture", body: "🪕 anchors Appalachian and bluegrass identity online." },
      { title: "Vs 🎸", body: "🎸 guitar general. 🪕 banjo specific — brighter twang association." },
      { title: "History", body: "Educators tie 🪕 to African American banjo roots — not only country cliché." },
    ],
    searchIntents: ["banjo emoji", "🪕 meaning", "bluegrass emoji", "🪕 copy paste"],
    whenNotToUse: ["Generic country without banjo — 🤠/🎸 may suffice."],
    faqs: [
      { question: "What does 🪕 mean?", answer: "Banjo — bluegrass, country folk, Americana picking." },
      { question: "🪕 vs guitar?", answer: "Banjo has distinct round body and twang — emoji is instrument-specific." },
    ],
  },

  maracas: {
    batchId: BATCH_ID,
    searchTitle: "Maracas Emoji (🪇) Meaning: Latin Party, Rhythm, and Celebration",
    snippetAnswer:
      "🪇 Maracas mark Latin rhythm and party — salsa nights, carnival energy, kids' music class, and fiesta decorations.",
    detailedParagraphs: [
      "Maracas (🪇) show paired shaker percussion — Unicode symbol for Latin music and festive celebration.",
      "Party planners drop 🪇 on Cinco de Mayo and carnival invites — festive shorthand.",
      "Music teachers use 🪇 for preschool rhythm units — accessible first instrument.",
    ],
    textingMeaning: "'Fiesta 🪇', 'Salsa night 🪇', 'Shake it 🪇'.",
    socialMeaning: "Latin dance events, cruise ship entertainment, and tropical party aesthetics tag 🪇.",
    caution: "Don't reduce Latin culture to 🪇 party decoration alone — respect context.",
    examples: [
      { context: "Party", text: "Fiesta 🪇" },
      { context: "Dance", text: "Salsa 🪇" },
      { context: "Kids", text: "Music class 🪇" },
      { context: "Cruise", text: "Deck party 🪇" },
      { context: "Carnival", text: "Parade 🪇" },
    ],
    contextBlocks: [
      { title: "Latin rhythm", body: "🪇 signals percussion-forward celebration — dance and music." },
      { title: "Vs 🥁", body: "🥁 drum kit/strike. 🪇 hand shakers — lighter party vibe." },
      { title: "Kids music", body: "Early childhood music classes love 🪇 — easy shake." },
    ],
    searchIntents: ["maracas emoji", "🪇 meaning", "latin party emoji", "🪇 copy paste"],
    whenNotToUse: ["Serious political Latin threads — emoji may trivialize."],
    faqs: [
      { question: "What does 🪇 mean?", answer: "Maracas — Latin party, rhythm, fiesta, celebration." },
      { question: "New emoji?", answer: "🪇 is newer Unicode percussion — maracas specific." },
    ],
  },

  flute: {
    batchId: BATCH_ID,
    searchTitle: "Flute Emoji (🪈) Meaning: Band, Classical, and Recorder Memes",
    snippetAnswer:
      "🪈 Flute marks woodwind music — school band, orchestra, Irish trad, and 'recorder kid' nostalgia memes.",
    detailedParagraphs: [
      "Flute (🪈) shows transverse flute — Unicode symbol for concert band and classical woodwinds.",
      "Marching band and pep band alumni flashback with 🪈 — halftime trauma and glory.",
      "Meme culture conflates 🪈 with plastic recorder — school music class universal memory.",
    ],
    textingMeaning: "'Band 🪈', 'Rehearsal 🪈', 'Recorder era 🪈'.",
    socialMeaning: "Band kid TikTok, orchestra tours, and Irish session posts tag 🪈.",
    caution: "Recorder meme vs professional flute — know audience.",
    examples: [
      { context: "Band", text: "Section 🪈" },
      { context: "School", text: "Recital 🪈" },
      { context: "Meme", text: "Hot cross buns 🪈" },
      { context: "Orchestra", text: "Tuning 🪈" },
      { context: "Trad", text: "Session 🪈" },
    ],
    contextBlocks: [
      { title: "Band kid culture", body: "🪈 identifies woodwind section pride — long bus rides." },
      { title: "Recorder meme", body: "Primary school recorder lessons haunt 🪈 comment sections." },
      { title: "Vs 🎷", body: "🎷 saxophone jazz. 🪈 flute classical/band." },
    ],
    searchIntents: ["flute emoji", "🪈 meaning", "recorder emoji meme", "🪈 copy paste"],
    whenNotToUse: ["Professional flutist may dislike recorder joke — read room."],
    faqs: [
      { question: "What does 🪈 mean?", answer: "Flute — band, orchestra, woodwind, recorder memes." },
      { question: "🪈 vs recorder?", answer: "Emoji is concert flute; internet often jokes about school recorder." },
    ],
  },

  "long-drum": {
    batchId: BATCH_ID,
    searchTitle: "Long Drum Emoji (🪘) Meaning: Marching Band, Parade, and Ceremonial Beats",
    snippetAnswer:
      "🪘 Long Drum marks marching and ceremonial percussion — parade drums, samba long drums, and rhythm line energy.",
    detailedParagraphs: [
      "Long Drum (🪘) shows cylindrical long drum — Unicode symbol for parade, marching, and world percussion.",
      "Carnival and samba school content uses 🪘 — street parade pulse.",
      "Marching band pit and drumline posts distinguish 🪘 from snare — tonal depth.",
    ],
    textingMeaning: "'Parade 🪘', 'Drumline 🪘', 'Carnival 🪘'.",
    socialMeaning: "Mardi Gras crews, marching band competitions, and Afro-Brazilian rhythm education tag 🪘.",
    caution: "Sacred drum traditions deserve respect — not only party emoji.",
    examples: [
      { context: "Parade", text: "Line 🪘" },
      { context: "Carnival", text: "Samba 🪘" },
      { context: "Band", text: "Competition 🪘" },
      { context: "Ceremony", text: "Rhythm 🪘" },
      { context: "Practice", text: "Beats 🪘" },
    ],
    contextBlocks: [
      { title: "Parade culture", body: "🪘 carries street procession energy — loud and mobile." },
      { title: "Vs 🥁", body: "🥁 kit/snare set. 🪘 single long ceremonial/marching drum." },
      { title: "World music", body: "Various cultures use long drums — context from caption matters." },
    ],
    searchIntents: ["long drum emoji", "🪘 meaning", "marching drum emoji", "🪘 copy paste"],
    whenNotToUse: ["For drum kit rock 🥁.", "Don't exoticize sacred drums casually."],
    faqs: [
      { question: "What does 🪘 mean?", answer: "Long drum — parades, marching band, carnival, ceremonial rhythm." },
      { question: "🪘 vs 🥁?", answer: "Long single parade/ceremonial drum vs drum kit or snare." },
    ],
  },

  "speaker-low-volume": {
    batchId: BATCH_ID,
    searchTitle: "Speaker Low Volume Emoji (🔈) Meaning: Quiet Audio, Mute Adjacent, and Soft Sound",
    snippetAnswer:
      "🔈 Speaker Low Volume means quiet playback — low volume, late-night listening, ASMR adjacency, and 'turn it down' requests.",
    detailedParagraphs: [
      "Speaker Low Volume (🔈) shows speaker with one sound wave — Unicode quietest active volume before mute.",
      "Roommates send 🔈 when neighbor or TV too loud — polite volume negotiation.",
      "Library and study stream overlays use 🔈 — soft lo-fi aesthetic.",
    ],
    textingMeaning: "'Too loud 🔈', 'Quiet hours 🔈', 'Low vol 🔈'.",
    socialMeaning: "ASMR creators, study-with-me streams, and apartment neighbor memes tag 🔈.",
    caution: "🔈 request beats passive-aggressive notes — but say it directly too.",
    examples: [
      { context: "Roommate", text: "Please 🔈" },
      { context: "Study", text: "Lo-fi 🔈" },
      { context: "Baby", text: "Nap time 🔈" },
      { context: "Night", text: "Headphones 🔈" },
      { context: "Settings", text: "Min 🔈" },
    ],
    contextBlocks: [
      { title: "Volume ladder", body: "🔈 low → 🔉 medium → 🔊 high — step down requests." },
      { title: "Vs 🔇", body: "🔇 muted off. 🔈 still playing quietly." },
      { title: "Late night", body: "🔈 signals consideration — gaming or music at low volume." },
    ],
    searchIntents: ["speaker low volume emoji", "🔈 meaning", "quiet volume emoji", "🔈 copy paste"],
    whenNotToUse: ["Fully muted — 🔇 bell with slash."],
    faqs: [
      { question: "What does 🔈 mean?", answer: "Low speaker volume — quiet audio, turn down, soft playback." },
      { question: "🔈 vs 🔉?", answer: "🔈 lowest active level; 🔉 medium." },
    ],
  },

  "bell-with-slash": {
    batchId: BATCH_ID,
    searchTitle: "Bell With Slash Emoji (🔕) Meaning: Notifications Off, Do Not Disturb, and Mute",
    snippetAnswer:
      "🔕 Bell With Slash means notifications off — Do Not Disturb, mute group chat, focus mode, and digital peace posts.",
    detailedParagraphs: [
      "Bell With Slash (🔕) shows bell crossed out — Unicode universal mute-notifications symbol.",
      "Burnout and focus threads celebrate 🔕 — boundary setting from ping culture.",
      "Vacation auto-replies include 🔕 — offline without guilt.",
    ],
    textingMeaning: "'DND 🔕', 'Muted 🔕', 'Focus mode 🔕'.",
    socialMeaning: "Digital wellness posts, vacation OOO stories, and introvert memes lead with 🔕.",
    caution: "🔕 during emergencies — ensure critical contacts bypass DND.",
    examples: [
      { context: "Focus", text: "Deep work 🔕" },
      { context: "Vacation", text: "OOO 🔕" },
      { context: "Group", text: "Muted 🔕" },
      { context: "Sleep", text: "Night 🔕" },
      { context: "Burnout", text: "Peace 🔕" },
    ],
    contextBlocks: [
      { title: "DND culture", body: "🔕 is iOS/Android Do Not Disturb visual shorthand." },
      { title: "Vs 🔔", body: "🔔 notifications on. 🔕 alerts silenced." },
      { title: "Boundaries", body: "Work-life balance posts frame 🔕 as healthy, not rude." },
    ],
    searchIntents: ["bell with slash emoji", "🔕 meaning", "dnd emoji", "notifications off emoji"],
    whenNotToUse: ["When you need urgent reachability — clarify exceptions."],
    faqs: [
      { question: "What does 🔕 mean?", answer: "Notifications off — mute, Do Not Disturb, focus mode." },
      { question: "🔕 vs 🔇?", answer: "🔕 notification bell muted. 🔇 speaker/audio muted." },
    ],
  },

  "level-slider": {
    batchId: BATCH_ID,
    searchTitle: "Level Slider Emoji (🎚️) Meaning: Mixing, Settings, and Adjust Levels",
    snippetAnswer:
      "🎚️ Level Slider marks audio mixing and settings — studio faders, adjust brightness/volume memes, and tweak parameters.",
    detailedParagraphs: [
      "Level Slider (🎚️) shows studio fader control — Unicode symbol for mixing boards and adjustment UI.",
      "Producers post 🎚️ with mix-down screenshots — mastering session grind.",
      "Metaphorical 'slide the 🎚️' means dial intensity up or down in any context.",
    ],
    textingMeaning: "'Mixing 🎚️', 'Adjust 🎚️', 'Studio day 🎚️'.",
    socialMeaning: "Audio engineering TikTok, podcast production, and gaming settings humor tag 🎚️.",
    caution: "Ear fatigue from long 🎚️ sessions — take breaks.",
    examples: [
      { context: "Studio", text: "Mix 🎚️" },
      { context: "Podcast", text: "Levels 🎚️" },
      { context: "Metaphor", text: "Dial down 🎚️" },
      { context: "Game", text: "Sensitivity 🎚️" },
      { context: "Master", text: "Final 🎚️" },
    ],
    contextBlocks: [
      { title: "Studio culture", body: "🎚️ reads mixing desk — producers know the grind." },
      { title: "Vs 🎛️", body: "🎛️ control knobs dial. 🎚️ linear fader slider." },
      { title: "Settings metaphor", body: "Any 'adjust the level' joke maps to 🎚️." },
    ],
    searchIntents: ["level slider emoji", "🎚️ meaning", "mixer emoji", "🎚️ copy paste"],
    whenNotToUse: ["Simple on/off mute — 🔕/🔇 clearer."],
    faqs: [
      { question: "What does 🎚️ mean?", answer: "Level slider — audio mixing, faders, adjust settings." },
      { question: "🎚️ vs 🎛️?", answer: "Slider fader vs rotary knobs — both studio controls." },
    ],
  },

  "control-knobs": {
    batchId: BATCH_ID,
    searchTitle: "Control Knobs Emoji (🎛️) Meaning: DJ Deck, Studio, and Fine-Tuning",
    snippetAnswer:
      "🎛️ Control Knobs mean DJ and studio controls — turntable filters, synth tweaking, and 'fine-tune the settings' posts.",
    detailedParagraphs: [
      "Control Knobs (🎛️) depict rotary dials — Unicode symbol for DJ decks, synthesizers, and audio gear.",
      "DJ set promo flyers stack 🎛️ with 🎧 — booth identity.",
      "DevOps and eng humor borrow 🎛️ for config tuning — not only music.",
    ],
    textingMeaning: "'In the booth 🎛️', 'Tweak 🎛️', 'Synth 🎛️'.",
    socialMeaning: "DJ Instagram, synth nerd forums, and server tuning memes use 🎛️.",
    caution: "Live EQ abuse hurts ears — responsible booth culture.",
    examples: [
      { context: "DJ", text: "Set tonight 🎛️" },
      { context: "Synth", text: "Patch 🎛️" },
      { context: "Studio", text: "Outboard 🎛️" },
      { context: "Config", text: "Tune 🎛️" },
      { context: "Live", text: "Booth 🎛️" },
    ],
    contextBlocks: [
      { title: "DJ identity", body: "🎛️ signals deck work — filters, gains, live mix." },
      { title: "Vs 🎚️", body: "🎚️ faders. 🎛️ knobs — both studio, different control." },
      { title: "Tech metaphor", body: "Engineers joke 'turn the 🎛️' on server flags." },
    ],
    searchIntents: ["control knobs emoji", "🎛️ meaning", "dj emoji", "🎛️ copy paste"],
    whenNotToUse: ["Stove dials — context usually audio/tech."],
    faqs: [
      { question: "What does 🎛️ mean?", answer: "Control knobs — DJ deck, studio gear, fine-tuning settings." },
      { question: "🎛️ for DJ?", answer: "Yes — default emoji for booth and rotary control culture." },
    ],
  },

  "postal-horn": {
    batchId: BATCH_ID,
    searchTitle: "Postal Horn Emoji (📯) Meaning: Announcements, Vintage Mail, and Fanfare",
    snippetAnswer:
      "📯 Postal Horn marks announcements and vintage flair — royal proclamations, marching band fanfare, and old-post aesthetic.",
    detailedParagraphs: [
      "Postal Horn (📯) shows coiled post horn — Unicode symbol from mail carrier history and ceremonial fanfare.",
      "Historical and fantasy RP use 📯 for town crier energy — 'hear ye'.",
      "Eurovision and parade memes occasionally drop 📯 — brass announcement.",
    ],
    textingMeaning: "'Announcement 📯', 'Fanfare 📯', 'Hear ye 📯'.",
    socialMeaning: "Vintage post aesthetic, brass band content, and ironic big-news posts tag 📯.",
    caution: "Obscure emoji — audience may not parse without context.",
    examples: [
      { context: "News", text: "Big news 📯" },
      { context: "Fanfare", text: "Ta-da 📯" },
      { context: "Vintage", text: "Post horn 📯" },
      { context: "RP", text: "Town crier 📯" },
      { context: "Parade", text: "Brass 📯" },
    ],
    contextBlocks: [
      { title: "Mail history", body: "📯 from postal carrier horn — now mostly ceremonial/announcement." },
      { title: "Vs 📢", body: "📢 modern loudspeaker. 📯 vintage horn fanfare." },
      { title: "Vs 🎺", body: "🎺 trumpet instrument. 📯 coiled post/announcement horn." },
    ],
    searchIntents: ["postal horn emoji", "📯 meaning", "post horn emoji", "📯 copy paste"],
    whenNotToUse: ["Modern PA — 📢 clearer.", "Unless ironic vintage tone intended."],
    faqs: [
      { question: "What does 📯 mean?", answer: "Postal horn — announcements, fanfare, vintage mail aesthetic." },
      { question: "Who uses 📯?", answer: "Niche — history buffs, fanfare jokes, big announcement flair." },
    ],
  },

  "film-frames": {
    batchId: BATCH_ID,
    searchTitle: "Film Frames Emoji (🎞️) Meaning: Cinema, Movies, and Editing",
    snippetAnswer:
      "🎞️ Film Frames mean cinema and editing — movie nights, film student projects, reel drafts, and analog film aesthetic.",
    detailedParagraphs: [
      "Film Frames (🎞️) show strip of celluloid frames — Unicode symbol for movies, editing timelines, and analog film.",
      "Film students caption 🎞️ with thesis progress — rough cut milestones.",
      "Letterboxd and cinema threads use 🎞️ for arthouse and festival season.",
    ],
    textingMeaning: "'Rough cut 🎞️', 'Movie night 🎞️', 'Festival 🎞️'.",
    socialMeaning: "Indie film Twitter, Oscar season discourse, and editor workflow posts tag 🎞️.",
    caution: "Most movies digital now — 🎞️ reads aesthetic more than literal format.",
    examples: [
      { context: "Edit", text: "Timeline 🎞️" },
      { context: "Theater", text: "Premiere 🎞️" },
      { context: "Student", text: "Thesis 🎞️" },
      { context: "Night", text: "Marathon 🎞️" },
      { context: "Fest", text: "Selection 🎞️" },
    ],
    contextBlocks: [
      { title: "Cinema shorthand", body: "🎞️ signals film as medium — not TV episode default." },
      { title: "Vs 🎬", body: "🎬 clapper action. 🎞️ film strip editing/archive." },
      { title: "Vs 📽️", body: "📽️ projector hardware. 🎞️ celluloid frames content." },
    ],
    searchIntents: ["film frames emoji", "🎞️ meaning", "movie film emoji", "🎞️ copy paste"],
    whenNotToUse: ["TV binge — 📺.", "Single photo — 🖼️."],
    faqs: [
      { question: "What does 🎞️ mean?", answer: "Film frames — cinema, editing, movies, analog aesthetic." },
      { question: "🎞️ vs 🎬?", answer: "🎞️ strip/editing. 🎬 production/clapper action." },
    ],
  },

  "film-projector": {
    batchId: BATCH_ID,
    searchTitle: "Film Projector Emoji (📽️) Meaning: Old Cinema, Indie Film, and Screenings",
    snippetAnswer:
      "📽️ Film Projector marks projection and classic cinema — drive-in nights, indie screenings, and vintage theater aesthetic.",
    detailedParagraphs: [
      "Film Projector (📽️) shows reel projector — Unicode symbol for theatrical projection and retro cinema.",
      "Indie venues promote 🎞️📽️ double feature nights — revival house culture.",
      "Home theater nerds with real projectors flex 📽️ — basement cinema posts.",
    ],
    textingMeaning: "'Screening 📽️', 'Drive-in 📽️', 'Projector night 📽️'.",
    socialMeaning: "Film society clubs, TIFF/Cannes adjacent posts, and analog revival tag 📽️.",
    caution: "Streaming dominates — 📽️ reads event/special screening often.",
    examples: [
      { context: "Screening", text: "8pm 📽️" },
      { context: "Drive-in", text: "Double 📽️" },
      { context: "Home", text: "Basement 📽️" },
      { context: "Indie", text: "Revival 📽️" },
      { context: "Fest", text: "Q&A after 📽️" },
    ],
    contextBlocks: [
      { title: "Revival houses", body: "📽️ signals theatrical projection — not Netflix default." },
      { title: "Vs 🎞️", body: "🎞️ film strip. 📽️ projector machine showing it." },
      { title: "Drive-in", body: "Outdoor 📽️ screenings spike summer nostalgia content." },
    ],
    searchIntents: ["film projector emoji", "📽️ meaning", "projector emoji", "📽️ cinema"],
    whenNotToUse: ["Office PowerPoint projector — different context."],
    faqs: [
      { question: "What does 📽️ mean?", answer: "Film projector — cinema screenings, drive-in, vintage theater." },
      { question: "📽️ home theater?", answer: "Yes — home projector setups use 📽️ in posts." },
    ],
  },

  videocassette: {
    batchId: BATCH_ID,
    searchTitle: "Videocassette Emoji (📼) Meaning: VHS, 90s Nostalgia, and Retro Media",
    snippetAnswer:
      "📼 Videocassette means VHS nostalgia — 90s childhood, thrift store finds, horror rental store aesthetic, and retro collecting.",
    detailedParagraphs: [
      "Videocassette (📼) shows VHS tape — Unicode symbol for 80s/90s home video era.",
      "Horror fans collect 📼 slashers from estate sales — physical media revival niche.",
      "'Be kind rewind' memes immortalize 📼 — Blockbuster cultural memory.",
    ],
    textingMeaning: "'VHS 📼', 'Retro find 📼', 'Rewind 📼'.",
    socialMeaning: "90s nostalgia TikTok, vaporwave aesthetic, and media preservation posts tag 📼.",
    caution: "VHS degrades — digitize precious 📼 memories before loss.",
    examples: [
      { context: "Thrift", text: "Score 📼" },
      { context: "Horror", text: "Rental 📼" },
      { context: "Kid", text: "Home video 📼" },
      { context: "Collect", text: "Shelf 📼" },
      { context: "Meme", text: "Rewind 📼" },
    ],
    contextBlocks: [
      { title: "Blockbuster era", body: "📼 triggers Friday rental nostalgia — late fees included." },
      { title: "Vs 💿", body: "💿 DVD/CD disc. 📼 magnetic tape cassette." },
      { title: "Vs 📀", body: "📀 DVD emoji. 📼 specifically VHS videocassette." },
    ],
    searchIntents: ["vhs emoji", "📼 meaning", "videocassette emoji", "📼 copy paste"],
    whenNotToUse: ["Modern streaming — 📺/🎬 unless retro theme."],
    faqs: [
      { question: "What does 📼 mean?", answer: "VHS videocassette — 90s nostalgia, collecting, home video." },
      { question: "📼 still used?", answer: "Niche collectors and nostalgia content — not mainstream format." },
    ],
  },

  "computer-disk": {
    batchId: BATCH_ID,
    searchTitle: "Computer Disk Emoji (💽) Meaning: Floppy Disk, Save Icon, and Retro Computing",
    snippetAnswer:
      "💽 Computer Disk marks floppy disk and retro save — 90s computing, 'save your work', and vintage tech aesthetic.",
    detailedParagraphs: [
      "Computer Disk (💽) depicts minidisc/floppy-style media — Unicode retro computing symbol.",
      "Save icon lineage connects 💽 to floppy — millennials read 'save' instantly.",
      "Retro computing restorers post 💽 with beige PC builds — r/retrobattlestations energy.",
    ],
    textingMeaning: "'Save it 💽', 'Retro PC 💽', 'Backup 💽'.",
    socialMeaning: "Vaporwave art, 90s office aesthetic, and dev 'save often' jokes use 💽.",
    caution: "Actual floppies hold kilobytes — not real backup strategy.",
    examples: [
      { context: "Save", text: "Ctrl+S 💽" },
      { context: "Retro", text: "486 💽" },
      { context: "Backup", text: "Save often 💽" },
      { context: "Aesthetic", text: "Vaporwave 💽" },
      { context: "Found", text: "Box of 💽" },
    ],
    contextBlocks: [
      { title: "Save metaphor", body: "💽 inherited from floppy save icon — universal dev joke." },
      { title: "Vs 💾", body: "💾 floppy disk explicit. 💽 optical/minidisc variant design." },
      { title: "Retro tech", body: "Collectors showcase 💽 alongside CRT and dial-up memes." },
    ],
    searchIntents: ["computer disk emoji", "💽 meaning", "floppy disk emoji", "💽 save"],
    whenNotToUse: ["Modern cloud save — ☁️ unless retro joke."],
    faqs: [
      { question: "What does 💽 mean?", answer: "Computer disk — retro save, floppy/minidisc, 90s computing." },
      { question: "💽 vs 💾?", answer: "Both retro storage; 💾 more explicitly floppy in many fonts." },
    ],
  },

  dvd: {
    batchId: BATCH_ID,
    searchTitle: "DVD Emoji (📀) Meaning: DVDs, Physical Media, and Movie Collections",
    snippetAnswer:
      "📀 DVD means optical discs — movie collections, box sets, gaming discs, and physical media collector posts.",
    detailedParagraphs: [
      "DVD (📀) shows silver optical disc — Unicode symbol for DVD/CD physical media.",
      "Collectors photograph 📀 shelves — Criterion spine porn and complete series flex.",
      "Console gamers mention 📀 when physical vs digital debate resurfaces.",
    ],
    textingMeaning: "'DVD night 📀', 'Box set 📀', 'Disc install 📀'.",
    socialMeaning: "Media shelf tours, bargain bin hunts, and collector forums tag 📀.",
    caution: "Region locks frustrate 📀 imports — check player region.",
    examples: [
      { context: "Movie", text: "Collection 📀" },
      { context: "Game", text: "Install 📀" },
      { context: "Thrift", text: "Bin 📀" },
      { context: "Gift", text: "Box set 📀" },
      { context: "Criterion", text: "Shelf 📀" },
    ],
    contextBlocks: [
      { title: "Physical media", body: "📀 champions ownership vs streaming revoke fear." },
      { title: "Vs 📼", body: "📼 VHS tape. 📀 optical DVD/CD disc." },
      { title: "Vs 💿", body: "💿 generic CD. 📀 often DVD/video game disc context." },
    ],
    searchIntents: ["dvd emoji", "📀 meaning", "disc emoji", "📀 copy paste"],
    whenNotToUse: ["Streaming-only watch — 🎬 without 📀."],
    faqs: [
      { question: "What does 📀 mean?", answer: "DVD/optical disc — physical movies, games, collections." },
      { question: "📀 still relevant?", answer: "Collectors and consoles — streaming didn't kill discs entirely." },
    ],
  },

  abacus: {
    batchId: BATCH_ID,
    searchTitle: "Abacus Emoji (🧮) Meaning: Math, Counting, and Old-School Calculation",
    snippetAnswer:
      "🧮 Abacus marks math and counting — homework, accounting before calculators, mental math pride, and 'do the math' posts.",
    detailedParagraphs: [
      "Abacus (🧮) shows counting frame — Unicode symbol for arithmetic, education, and vintage calculation.",
      "Finance bros ironically 🧮 meme bad takes — 'let me calculate' dunking.",
      "Montessori and math educator content features 🧮 for early numeracy.",
    ],
    textingMeaning: "'Do the math 🧮', 'Accounting 🧮', 'Count 🧮'.",
    socialMeaning: "Math TikTok, budget threads, and spreadsheet vs abacus humor tag 🧮.",
    caution: "Abacus cultures have deep history — not only joke prop.",
    examples: [
      { context: "Math", text: "Exam 🧮" },
      { context: "Budget", text: "Run numbers 🧮" },
      { context: "Meme", text: "Calculate 🧮" },
      { context: "School", text: "Tool 🧮" },
      { context: "Finance", text: "Ledger 🧮" },
    ],
    contextBlocks: [
      { title: "Do the math", body: "🧮 prefixes fact-check dunk — show your work energy." },
      { title: "Vs 🔢", body: "🔢 input numbers. 🧮 physical counting tool." },
      { title: "Education", body: "Still taught in some schools — mental math foundation." },
    ],
    searchIntents: ["abacus emoji", "🧮 meaning", "math emoji", "🧮 copy paste"],
    whenNotToUse: ["Spreadsheet work — 📊 may fit better."],
    faqs: [
      { question: "What does 🧮 mean?", answer: "Abacus — math, counting, calculate, education." },
      { question: "🧮 meme?", answer: "'Do the math' sarcasm when debunking bad claims." },
    ],
  },

  "green-book": {
    batchId: BATCH_ID,
    searchTitle: "Green Book Emoji (📗) Meaning: Reading, Study, and Book Stack Aesthetic",
    snippetAnswer:
      "📗 Green Book marks reading and study — colored book stacks, textbook aesthetic, and 'currently reading' shelf posts.",
    detailedParagraphs: [
      "Green Book (📗) shows closed green cover — Unicode one of color-coded book emoji set.",
      "Bookshelf rainbow posts mix 📗📘📙📕 — Bookstagram organization.",
      "Students assign 📗 to subject color-code — biology green notebook match.",
    ],
    textingMeaning: "'Reading 📗', 'Textbook 📗', 'Shelf 📗'.",
    socialMeaning: "BookTok wrap-ups, studyblr, and library aesthetic tag 📗.",
    caution: "Don't confuse with film title Green Book — context differs.",
    examples: [
      { context: "Read", text: "Chapter 5 📗" },
      { context: "Shelf", text: "Rainbow 📗" },
      { context: "Study", text: "Bio 📗" },
      { context: "Gift", text: "Signed 📗" },
      { context: "TBR", text: "Stack 📗" },
    ],
    contextBlocks: [
      { title: "Color book set", body: "📗 green, 📘 blue, 📙 orange, 📕 red — stack aesthetics." },
      { title: "Vs 📖", body: "📖 open reading. 📗 closed on shelf." },
      { title: "Vs 📚", body: "📚 multiple books pile. 📗 single green volume." },
    ],
    searchIntents: ["green book emoji", "📗 meaning", "book emoji green", "📗 copy paste"],
    whenNotToUse: ["Open reading scene — 📖."],
    faqs: [
      { question: "What does 📗 mean?", answer: "Green closed book — reading, study, shelf aesthetic." },
      { question: "Why colors?", answer: "Unicode provides color variants for visual book stacks." },
    ],
  },

  "blue-book": {
    batchId: BATCH_ID,
    searchTitle: "Blue Book Emoji (📘) Meaning: Textbooks, Exams, and Study Stacks",
    snippetAnswer:
      "📘 Blue Book means textbooks and exams — blue book exam format, study stacks, and academic reading posts.",
    detailedParagraphs: [
      "Blue Book (📘) shows closed blue cover — Unicode book color variant tied to academic imagery.",
      "US students link 📘 to blue book essay exams — midterm season trauma.",
      "Book collectors color-coordinate shelves with 📘 spines — design nerd stacks.",
    ],
    textingMeaning: "'Blue book exam 📘', 'Textbook 📘', 'Study 📘'.",
    socialMeaning: "Finals week memes, law school threads, and bookshelf tours use 📘.",
    caution: "Exam 📘 stress is real — support beats mocking.",
    examples: [
      { context: "Exam", text: "In-class 📘" },
      { context: "Study", text: "Finals 📘" },
      { context: "Shelf", text: "Color row 📘" },
      { context: "Law", text: "Brief 📘" },
      { context: "Read", text: "Dense 📘" },
    ],
    contextBlocks: [
      { title: "Blue book exam", body: "US schools use blue exam booklets — 📘 triggers test anxiety memory." },
      { title: "Vs 📗", body: "Same closed book — color choice aesthetic or subject code." },
      { title: "Academic", body: "📘 reads textbook heavier than casual fiction 📕." },
    ],
    searchIntents: ["blue book emoji", "📘 meaning", "textbook emoji", "📘 exam"],
    whenNotToUse: ["Casual beach read — lighter book emoji fine."],
    faqs: [
      { question: "What does 📘 mean?", answer: "Blue closed book — textbooks, exams, study, shelves." },
      { question: "📘 blue book exam?", answer: "US students associate with in-class essay exam booklets." },
    ],
  },

  "orange-book": {
    batchId: BATCH_ID,
    searchTitle: "Orange Book Emoji (📙) Meaning: Book Stacks, Reading List, and Shelf Color",
    snippetAnswer:
      "📙 Orange Book marks reading lists and shelf color — orange spine stacks, autumn reading vibe, and book collection posts.",
    detailedParagraphs: [
      "Orange Book (📙) shows closed orange cover — Unicode completes rainbow book emoji set.",
      "Penguin orange spine collectors know 📙 — design-forward shelves.",
      "Fall reading lists use 📙 with 🍂 — cozy season book stack.",
    ],
    textingMeaning: "'Fall reads 📙', 'Stack 📙', 'Orange shelf 📙'.",
    socialMeaning: "Bookshelf rainbow Instagram, publishing design nerds, and TBR piles tag 📙.",
    caution: "Color alone doesn't rate the book — content matters.",
    examples: [
      { context: "Fall", text: "Cozy 📙" },
      { context: "Shelf", text: "Orange row 📙" },
      { context: "TBR", text: "Pile 📙" },
      { context: "Design", text: "Spine 📙" },
      { context: "Gift", text: "Wrapped 📙" },
    ],
    contextBlocks: [
      { title: "Rainbow shelves", body: "📙 with 📗📘📕 creates Instagram bookshelf gradient." },
      { title: "Vs 📕", body: "📕 red book. 📙 orange — aesthetic choice mostly." },
      { title: "Seasonal", body: "Autumn reading posts pair 📙 with warm drink emoji." },
    ],
    searchIntents: ["orange book emoji", "📙 meaning", "book emoji orange", "📙 copy paste"],
    whenNotToUse: ["When specific title matters — name the book in text."],
    faqs: [
      { question: "What does 📙 mean?", answer: "Orange closed book — reading stacks, shelf aesthetic, TBR." },
      { question: "📙 vs other book colors?", answer: "Same book emoji — pick color for visual stack variety." },
    ],
  },

  "notebook-with-decorative-cover": {
    batchId: BATCH_ID,
    searchTitle: "Decorative Notebook Emoji (📔) Meaning: Journal, Planner, and Stationery",
    snippetAnswer:
      "📔 Decorative Notebook means pretty journals and planners — bullet journal spreads, stationery hauls, and gift-worthy notebooks.",
    detailedParagraphs: [
      "Notebook With Decorative Cover (📔) shows fancy bound journal — Unicode symbol for planner culture and stationery.",
      "Stationery addicts unbox 📔 with washi and pens — ASMR unboxing genre.",
      "Therapists recommend 📔 for journaling practice — mental health adjacent posts.",
    ],
    textingMeaning: "'New journal 📔', 'BuJo 📔', 'Planner 📔'.",
    socialMeaning: "Stationery TikTok, planner setup reels, and journal prompt accounts tag 📔.",
    caution: "Empty 📔 guilt — unfinished journals are normal.",
    examples: [
      { context: "Journal", text: "Day 1 📔" },
      { context: "Gift", text: "Pretty 📔" },
      { context: "Planner", text: "2026 📔" },
      { context: "Haul", text: "Stationery 📔" },
      { context: "Therapy", text: "Prompts 📔" },
    ],
    contextBlocks: [
      { title: "Vs 📓", body: "📓 plain spiral notebook. 📔 decorative cover journal." },
      { title: "Planner culture", body: "📔 setup videos — stickers, tabs, monthly spreads." },
      { title: "Gift item", body: "📔 common thoughtful gift — weddings, graduation." },
    ],
    searchIntents: ["decorative notebook emoji", "📔 meaning", "journal emoji", "📔 planner"],
    whenNotToUse: ["Plain school notebook 📓."],
    faqs: [
      { question: "What does 📔 mean?", answer: "Decorative notebook — journal, planner, stationery gift." },
      { question: "📔 vs 📓?", answer: "📔 fancy cover journal; 📓 simple notebook." },
    ],
  },

  ledger: {
    batchId: BATCH_ID,
    searchTitle: "Ledger Emoji (📒) Meaning: Accounting, Bookkeeping, and Records",
    snippetAnswer:
      "📒 Ledger marks accounting and records — bookkeeping, expense logs, small business taxes, and 'the books' metaphors.",
    detailedParagraphs: [
      "Ledger (📒) shows bound accounting book — Unicode symbol for financial record-keeping.",
      "Freelancers fear 📒 season — tax prep and receipt sorting.",
      "Small business owners live in 📒 — QuickBooks adjacency in captions.",
    ],
    textingMeaning: "'Books 📒', 'Tax prep 📒', 'Log it 📒'.",
    socialMeaning: "Accounting TikTok, Etsy seller finance, and side-hustle tax memes tag 📒.",
    caution: "Professional CPA beats 📒 DIY for complex taxes.",
    examples: [
      { context: "Tax", text: "April 📒" },
      { context: "Business", text: "Expenses 📒" },
      { context: "Freelance", text: "Track 📒" },
      { context: "Audit", text: "Organize 📒" },
      { context: "Shop", text: "Sales 📒" },
    ],
    contextBlocks: [
      { title: "Bookkeeping", body: "📒 is old-school ledger — still metaphor for accounts." },
      { title: "Vs 📓", body: "📓 general notes. 📒 financial record book." },
      { title: "Vs 🧾", body: "🧾 single receipt. 📒 full ledger of entries." },
    ],
    searchIntents: ["ledger emoji", "📒 meaning", "accounting book emoji", "📒 copy paste"],
    whenNotToUse: ["Personal diary — 📔 journal."],
    faqs: [
      { question: "What does 📒 mean?", answer: "Ledger — accounting, bookkeeping, expense records." },
      { question: "📒 for taxes?", answer: "Common metaphor for organizing financial records before filing." },
    ],
  },

  scroll: {
    batchId: BATCH_ID,
    searchTitle: "Scroll Emoji (📜) Meaning: History, Terms, and Fantasy Quests",
    snippetAnswer:
      "📜 Scroll marks ancient documents and terms — history homework, fantasy RPG quests, long Twitter threads, and fine print.",
    detailedParagraphs: [
      "Scroll (📜) shows rolled parchment — Unicode symbol for historical documents and fantasy quest items.",
      "Law and policy nerds post 📜 for terms of service irony — 'signed the 📜'.",
      "D&D and fantasy fans use 📜 for quest handouts — medieval aesthetic.",
    ],
    textingMeaning: "'Read the 📜', 'Quest 📜', 'Thread 📜'.",
    socialMeaning: "History edutainment, fantasy art, and manifesto threads lead with 📜.",
    caution: "Actual legal terms need lawyer — 📜 emoji doesn't bind you knowingly.",
    examples: [
      { context: "History", text: "Primary source 📜" },
      { context: "RPG", text: "Quest 📜" },
      { context: "ToS", text: "Fine print 📜" },
      { context: "Thread", text: "Long 📜" },
      { context: "Museum", text: "Exhibit 📜" },
    ],
    contextBlocks: [
      { title: "Fantasy RPG", body: "📜 quest giver staple — retrieve the ancient scroll." },
      { title: "Long text", body: "Twitter 'thread 📜' means lengthy connected posts." },
      { title: "Vs 📄", body: "📄 flat document. 📜 rolled historical parchment." },
    ],
    searchIntents: ["scroll emoji", "📜 meaning", "parchment emoji", "📜 copy paste"],
    whenNotToUse: ["Modern PDF — 📄 unless fantasy tone."],
    faqs: [
      { question: "What does 📜 mean?", answer: "Scroll — history, fantasy quests, long documents, fine print." },
      { question: "📜 thread?", answer: "Slang for long social media thread — read the scroll." },
    ],
  },

  "page-facing-up": {
    batchId: BATCH_ID,
    searchTitle: "Page Facing Up Emoji (📄) Meaning: Document, Homework, and Printouts",
    snippetAnswer:
      "📄 Page Facing Up means documents and printouts — homework sheets, office PDFs, resume drafts, and 'attached document' posts.",
    detailedParagraphs: [
      "Page Facing Up (📄) shows single document sheet — Unicode symbol for generic paper/PDF file.",
      "Students photograph 📄 homework piles — Sunday night panic documentation.",
      "Job seekers attach 📄 resume in metaphorical posts — application season.",
    ],
    textingMeaning: "'See attached 📄', 'Homework 📄', 'Draft 📄'.",
    socialMeaning: "Office worker memes, academic burnout, and contract negotiation threads tag 📄.",
    caution: "Sensitive 📄 on screen share — redact before presenting.",
    examples: [
      { context: "Email", text: "Attached 📄" },
      { context: "School", text: "Worksheet 📄" },
      { context: "Job", text: "Resume 📄" },
      { context: "Office", text: "Memo 📄" },
      { context: "Print", text: "Stack 📄" },
    ],
    contextBlocks: [
      { title: "PDF metaphor", body: "📄 universal document file — digital or printed." },
      { title: "Vs 📃", body: "📃 page with curl corner. 📄 flat clean sheet." },
      { title: "Vs 📝", body: "📝 memo being written. 📄 finished document page." },
    ],
    searchIntents: ["page emoji", "📄 meaning", "document emoji", "📄 copy paste"],
    whenNotToUse: ["Historical parchment — 📜.", "Open book — 📖."],
    faqs: [
      { question: "What does 📄 mean?", answer: "Document page — homework, PDF, resume, attachment." },
      { question: "📄 vs 📃?", answer: "📄 flat page. 📃 page with dog-eared curl." },
    ],
  },

  "page-with-curl": {
    batchId: BATCH_ID,
    searchTitle: "Page With Curl Emoji (📃) Meaning: Memo, Printed Page, and Slightly Dog-Eared",
    snippetAnswer:
      "📃 Page With Curl marks printed memos — slightly worn pages, fax aesthetic, terms printout, and office paper trails.",
    detailedParagraphs: [
      "Page With Curl (📃) shows document with corner fold — Unicode variant of 📄 with used-paper character.",
      "Office nostalgia posts prefer 📃 over crisp 📄 — copier warmth.",
      "Writers stack 📃 draft pages — revision physicality before Google Docs dominance.",
    ],
    textingMeaning: "'Printout 📃', 'Memo 📃', 'Draft pages 📃'.",
    socialMeaning: "Vintage office aesthetic, writer garret posts, and fax machine humor use 📃.",
    caution: "Dog-eared 📃 organization fails — digitize important records.",
    examples: [
      { context: "Office", text: "Copies 📃" },
      { context: "Memo", text: "Circulated 📃" },
      { context: "Writer", text: "Draft 📃" },
      { context: "Print", text: "Warm 📃" },
      { context: "Terms", text: "Fine print 📃" },
    ],
    contextBlocks: [
      { title: "Vs 📄", body: "📃 curled corner — handled paper. 📄 pristine flat." },
      { title: "Office copier", body: "📃 evokes warm laser printer stack — 90s office." },
      { title: "Writer drafts", body: "Physical 📃 pile before track changes era." },
    ],
    searchIntents: ["page with curl emoji", "📃 meaning", "document curl emoji", "📃 copy paste"],
    whenNotToUse: ["Digital-native PDF — 📄 unless vintage tone wanted."],
    faqs: [
      { question: "What does 📃 mean?", answer: "Page with curl — memo, printout, handled document." },
      { question: "📃 vs 📄?", answer: "📃 dog-eared/worn corner. 📄 clean flat page." },
    ],
  },
};
