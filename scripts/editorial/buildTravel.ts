import type { Emoji } from "../../src/data/emojis";
import type { EmojiBatchEnrichment } from "../../src/data/emojiEditorialBatches/types";
import { buildFromNativeBase } from "./buildEnhancedEnrichment";

const HOUR_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
};

const formatTime12 = (hour: number, half: boolean): string => {
  const min = half ? ":30" : ":00";
  if (hour === 12) return half ? `12${min} PM` : `12${min} PM (noon)`;
  return `${hour}${min}`;
};

const parseClockSlug = (slug: string): { hour: number; half: boolean; label: string } | null => {
  const half = slug.endsWith("-thirty");
  const base = half ? slug.replace(/-thirty$/, "") : slug.replace(/-oclock$/, "");
  if (!HOUR_WORDS[base]) return null;
  const hour = HOUR_WORDS[base];
  const label = formatTime12(hour, half);
  return { hour, half, label };
};

const CLOCK_HOOKS: Record<number, { hook: string; social: string }> = {
  12: { hook: "noon lunch, midday meetings, and 'high noon' drama", social: "lunch plans, midday check-ins, and New Year's countdown to midnight 🕛" },
  1: { hook: "late lunch or early afternoon", social: "post-lunch slump memes and afternoon start times" },
  2: { hook: "mid-afternoon — school pickup and meeting stretch", social: "2 PM meeting jokes and coffee refill posts" },
  3: { hook: "afternoon snack o'clock and school bell energy", social: "kids' pickup, tea time, and 'almost done' work posts" },
  4: { hook: "late afternoon — last push before evening", social: "4 PM Friday energy and golden hour approaching" },
  5: { hook: "end of standard workday and happy hour", social: "clock-out posts, rush hour, and after-work drinks" },
  6: { hook: "dinner time and evening commute peak", social: "dinner reservations, evening runs, and sunset season" },
  7: { hook: "evening plans — dinner, gym, or TV time", social: "weeknight routine and restaurant meetups" },
  8: { hook: "prime evening social hour", social: "date night, events starting, and prime-time TV" },
  9: { hook: "late evening wind-down or night shift start", social: "bedtime routines for kids, late study sessions" },
  10: { hook: "late night — still up or heading out", social: "night owl posts and 'one more episode' memes" },
  11: { hook: "almost midnight — last call energy", social: "pre-midnight countdown and late-night chats" },
};

const MOON_PHASES: Record<
  string,
  { phase: string; meaning: string; social: string; vs?: string }
> = {
  "waxing-crescent-moon": {
    phase: "waxing crescent",
    meaning: "Moon growing after new moon — thin crescent on the right; new beginnings, early project energy, and night-sky aesthetics.",
    social: "manifestation posts, 'day one' habits, and astro TikTok moon tracking.",
    vs: "🌑 new moon is dark. 🌒 crescent is first visible sliver growing.",
  },
  "first-quarter-moon": {
    phase: "first quarter (half moon)",
    meaning: "Half moon waxing — decision point, momentum building, halfway to full moon.",
    social: "progress check-ins, quarterly goals, and lunar calendar posts.",
    vs: "🌓 first quarter waxes (right side lit). 🌗 last quarter wanes.",
  },
  "waxing-gibbous-moon": {
    phase: "waxing gibbous",
    meaning: "Nearly full — refinement phase before full moon; almost there energy.",
    social: "project crunch before launch, pre-event hype, and moon photography.",
  },
  "waning-gibbous-moon": {
    phase: "waning gibbous",
    meaning: "Past full moon shrinking — release, reflection, and winding down.",
    social: "post-event comedown, gratitude lists, and calm night content.",
  },
  "last-quarter-moon": {
    phase: "last quarter (half moon waning)",
    meaning: "Half moon waning — let go, edit, and close loops before new moon.",
    social: "end-of-cycle posts, declutter memes, and lunar journaling.",
    vs: "🌗 last quarter — left side lit, waning toward new moon.",
  },
  "waning-crescent-moon": {
    phase: "waning crescent",
    meaning: "Final sliver before new moon — rest, surrender, and quiet before reset.",
    social: "self-care nights, low-energy honest posts, and pre-new-moon rituals.",
  },
  "new-moon-face": {
    phase: "new moon with face",
    meaning: "Dark moon with anthropomorphic face — mysterious, spooky-cute, or new moon rituals with personality.",
    social: "witchy aesthetic, manifestation new moons, and meme 'moon judging you'.",
  },
  "first-quarter-moon-face": {
    phase: "first quarter moon face",
    meaning: "Half moon with face — playful lunar character; quirky night vibes.",
    social: "cute astro memes, side-profile moon jokes, and whimsical captions.",
  },
  "last-quarter-moon-face": {
    phase: "last quarter moon face",
    meaning: "Waning half moon with face — tired moon, end-of-cycle mood with character.",
    social: "exhausted but cute memes, late-week lunar humor.",
  },
  "full-moon-face": {
    phase: "full moon with face",
    meaning: "Full moon with smiling face — peak energy, werewolf jokes, and lunar celebration.",
    social: "full moon parties, howling memes, and peak chaos night posts.",
    vs: "🌕 full moon disc vs 🌝 full moon with face — face adds personality/humor.",
  },
};

const ASTRO_OVERRIDES: Record<string, Partial<EmojiBatchEnrichment>> = {
  "sun-with-face": {
    searchTitle: "Sun With Face Emoji (🌞) Meaning: Sunny Day, Happiness, and Good Vibes",
    snippetAnswer:
      "🌞 Sun With Face marks bright sunny days, summer joy, and cheerful energy — warmer and more playful than plain ☀️.",
    detailedParagraphs: [
      "Sun With Face (🌞) adds a smiling face to the sun — Unicode symbol for gorgeous weather and upbeat mood.",
      "Summer vacation posts, beach days, and 'good vibes only' captions lead with 🌞.",
      "Distinct from ☀️ sun without face — 🌞 feels friendlier and meme-ready.",
    ],
    textingMeaning: "'Beautiful day 🌞', 'So sunny 🌞', 'Good vibes 🌞'.",
    socialMeaning: "Summer TikTok, festival weather, and happiness posts.",
    examples: [
      { context: "Weather", text: "Perfect day 🌞" },
      { context: "Beach", text: "Beach day 🌞" },
      { context: "Mood", text: "Good vibes 🌞" },
      { context: "Summer", text: "Heat wave 🌞" },
      { context: "Morning", text: "Rise and shine 🌞" },
    ],
    contextBlocks: [
      { title: "Vs ☀️", body: "☀️ plain sun. 🌞 sun with face — cuter, more expressive." },
      { title: "Seasonal", body: "Peak use May–August in Northern Hemisphere travel posts." },
    ],
  },
  "ringed-planet": {
    searchTitle: "Ringed Planet Emoji (🪐) Meaning: Saturn, Space, and Sci-Fi",
    snippetAnswer:
      "🪐 Ringed Planet represents Saturn — space nerd content, sci-fi fandom, and 'lost in another world' escapism.",
    detailedParagraphs: [
      "Ringed Planet (🪐) depicts Saturn with rings — Unicode's primary space planet beyond Earth/Moon.",
      "NASA mission posts, telescope nights, and sci-fi watch parties tag 🪐.",
      "Metaphorically: feeling alien, orbiting someone, or head in the stars.",
    ],
    textingMeaning: "'Space 🪐', 'Saturn vibes 🪐', 'Out of this world 🪐'.",
    socialMeaning: "Astrophotography, SpaceX launches, and cosmic aesthetic Pinterest boards.",
    examples: [
      { context: "Space", text: "Stargazing 🪐" },
      { context: "Sci-fi", text: "Marathon 🪐" },
      { context: "NASA", text: "Launch day 🪐" },
      { context: "Mood", text: "In another galaxy 🪐" },
      { context: "Study", text: "Astro exam 🪐" },
    ],
    contextBlocks: [
      { title: "Saturn", body: "🪐 universally read as Saturn — the ringed planet." },
      { title: "Vs 🌍", body: "🌍 Earth. 🪐 outer planet — space/ sci-fi context." },
    ],
  },
  "wind-face": {
    searchTitle: "Wind Face Emoji (🌬️) Meaning: Windy Weather, Breath, and Blowing Air",
    snippetAnswer:
      "🌬️ Wind Face marks windy weather, gusts, cold fronts, and metaphorical ' winds of change' — also breath and exhale imagery.",
    detailedParagraphs: [
      "Wind Face (🌬️) shows a cloud blowing air — Unicode weather symbol for blustery days and storms approaching.",
      "Runners and cyclists post 🌬️ on windy workout days; sailors and kite flyers too.",
      "Metaphor: change blowing in, gossip traveling, or needing to exhale stress.",
    ],
    textingMeaning: "'So windy 🌬️', 'Cold front 🌬️', 'Breathe 🌬️'.",
    socialMeaning: "Weather alerts, autumn wind aesthetic, and mindfulness breath posts.",
    examples: [
      { context: "Weather", text: "Gusty today 🌬️" },
      { context: "Run", text: "Headwind 🌬️" },
      { context: "Change", text: "Winds shifting 🌬️" },
      { context: "Cold", text: "Winter blast 🌬️" },
      { context: "Calm", text: "Deep breath 🌬️" },
    ],
    contextBlocks: [
      { title: "Weather", body: "🌬️ literal wind — check forecast when planning outdoors." },
      { title: "Vs 💨", body: "💨 dash/smoke speed. 🌬️ wind blowing from cloud face." },
    ],
  },
};

const buildClock = (emoji: Emoji): Omit<EmojiBatchEnrichment, "batchId"> => {
  const parsed = parseClockSlug(emoji.slug)!;
  const u = emoji.unicode;
  const hooks = CLOCK_HOOKS[parsed.hour];
  const timeLabel = parsed.label;

  const base = buildFromNativeBase(emoji, {
    searchTitle: `${emoji.name} Emoji (${u}) Meaning: ${timeLabel} and Time in Text`,
    extraParagraphs: [
      `${emoji.name} (${u}) shows ${timeLabel} on an analog clock face — Unicode standardizes hand positions across platforms.`,
      `Text '${timeLabel} ${u}' to propose meetups, deadlines, or appointment reminders without typing digits.`,
      `Common vibe: ${hooks.hook}. Social: ${hooks.social}.`,
      `Platform note: clock face design varies by vendor; the Unicode name defines the time shown.`,
    ],
    extraExamples: [
      { context: "Meetup", text: `See you at ${timeLabel} ${u}` },
      { context: "Schedule", text: `Meeting ${timeLabel} ${u}` },
      { context: "Reminder", text: `Don't forget ${timeLabel} ${u}` },
      { context: "Work", text: `Clock out ${u}` },
      { context: "Humor", text: `It's always ${timeLabel} somewhere ${u}` },
    ],
    extraContextBlocks: [
      { title: "Literal time", body: `${u} = ${timeLabel} on an analog clock face.` },
      { title: "Vs 🕐 generic", body: "Named clocks are precise; use when exact time matters." },
      ...(parsed.hour === 12 && !parsed.half
        ? [{ title: "Noon vs midnight", body: "🕛 is noon in Unicode naming; context clarifies midnight countdowns." }]
        : []),
      ...(parsed.hour === 5 && !parsed.half
        ? [{ title: "Five o'clock", body: "Classic end-of-work and happy hour shorthand." }]
        : []),
    ],
    extraWhenNotToUse: ["When timezone confusion matters — spell timezone and date in words too."],
    extraFaqs: [
      { question: `What time is ${u}?`, answer: `${timeLabel} — hour hand at ${parsed.hour}, ${parsed.half ? "minute at 6" : "minute at 12"}.` },
      { question: `Is ${u} AM or PM?`, answer: `Unicode names use 12-hour convention; ${timeLabel} is the standard reading.` },
    ],
  });

  return {
    ...base,
    snippetAnswer: `${u} ${emoji.name} shows ${timeLabel} on an analog clock — schedule plans, meeting times, and 'it's X o'clock' humor in chat.`,
    textingMeaning: `'${timeLabel} ${u}', 'Meet at ${timeLabel} ${u}', 'See you ${u}'.`,
    socialMeaning: hooks.social,
    examples: [
      { context: "Meetup", text: `See you at ${timeLabel} ${u}` },
      { context: "Schedule", text: `Meeting ${timeLabel} ${u}` },
      { context: "Reminder", text: `Don't forget ${timeLabel} ${u}` },
      { context: "Work", text: `Clock out ${u}` },
      { context: "Humor", text: `It's always ${timeLabel} somewhere ${u}` },
    ],
  };
};

const buildMoon = (emoji: Emoji, withFace: boolean): Omit<EmojiBatchEnrichment, "batchId"> => {
  const u = emoji.unicode;
  const info = MOON_PHASES[emoji.slug]!;
  const faceNote = withFace ? " The anthropomorphic face adds humor and meme personality." : "";

  const base = buildFromNativeBase(emoji, {
    searchTitle: `${emoji.name} Emoji (${u}) Meaning: Lunar Phase and Night Sky`,
    extraParagraphs: [
      `${emoji.name} (${u}) marks the ${info.phase} in the lunar cycle — ${info.meaning}${faceNote}`,
      "Moon emojis tag night photography, astrology content, menstrual cycle tracking (with care), and spooky season.",
      "Lunar calendar users pair phase emojis with dates for full/new moon announcements.",
    ],
    extraExamples: [
      { context: "Sky", text: `Look up ${u}` },
      { context: "Astro", text: `Full cycle ${u}` },
      { context: "Photo", text: `Moon shot ${u}` },
      { context: "Mood", text: `Night vibes ${u}` },
      { context: "Calendar", text: `Phase today ${u}` },
    ],
    extraContextBlocks: [
      { title: "Lunar cycle", body: `${info.phase} — part of the 29.5-day moon phase sequence.` },
      ...(info.vs ? [{ title: "Vs similar", body: info.vs }] : []),
      ...(withFace ? [{ title: "Face variant", body: "Face adds expressive/meme tone vs plain moon disc." }] : []),
    ],
    extraFaqs: [
      { question: `What does ${u} mean?`, answer: `${info.phase} — ${info.meaning}` },
      { question: "Moon emoji for astrology?", answer: "Common in astro posts — pair with sign or date for clarity." },
    ],
  });

  return {
    ...base,
    snippetAnswer: `${u} ${info.phase} — ${info.meaning.split(";")[0]}.`,
    textingMeaning: `'${info.phase} tonight ${u}', 'Moon phase ${u}', 'Night sky ${u}'.`,
    socialMeaning: info.social,
    examples: [
      { context: "Sky", text: `Look up ${u}` },
      { context: "Astro", text: `Full cycle ${u}` },
      { context: "Photo", text: `Moon shot ${u}` },
      { context: "Mood", text: `Night vibes ${u}` },
      { context: "Calendar", text: `Phase today ${u}` },
    ],
  };
};

export const buildTravelSpec = (emoji: Emoji, batchId: string): EmojiBatchEnrichment => {
  const astro = ASTRO_OVERRIDES[emoji.slug];
  if (astro) {
    const base = buildFromNativeBase(emoji, {
      searchTitle: astro.searchTitle ?? `${emoji.name} Emoji (${emoji.unicode}) Meaning`,
    });
    return {
      batchId,
      ...base,
      ...astro,
      detailedParagraphs: astro.detailedParagraphs ?? base.detailedParagraphs,
      examples: astro.examples ?? base.examples,
      contextBlocks: astro.contextBlocks ?? base.contextBlocks,
      faqs: astro.faqs ?? base.faqs,
    };
  }

  if (MOON_PHASES[emoji.slug]) {
    return {
      batchId,
      ...buildMoon(emoji, emoji.slug.includes("-face")),
    };
  }

  if (parseClockSlug(emoji.slug)) {
    return { batchId, ...buildClock(emoji) };
  }

  return {
    batchId,
    ...buildFromNativeBase(emoji, {
      searchTitle: `${emoji.name} Emoji (${emoji.unicode}) Meaning: Travel & Sky`,
    }),
  };
};
