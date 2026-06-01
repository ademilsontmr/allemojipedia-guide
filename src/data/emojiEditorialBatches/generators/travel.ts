import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, humanizeSubgroup, pick, pickN } from "./shared";

const batchId = "04-travel-places";

const subgroupAngles: Record<string, { domain: string; texting: string; social: string }> = {
  "place-map": { domain: "maps, geography, and location pins", texting: "share pins and meet-up spots", social: "travel maps and geolocation content" },
  "place-geographic": { domain: "landscapes, nature landmarks, and terrain", texting: "describe views and outdoor destinations", social: "national park and scenic photography" },
  "place-building": { domain: "buildings, architecture, and urban scenes", texting: "confirm addresses and venue meetups", social: "city photography and architecture posts" },
  "place-religious": { domain: "religious sites and spiritual travel", texting: "share pilgrimage or ceremony plans respectfully", social: "cultural and heritage tourism" },
  "place-other": { domain: "miscellaneous places and landmarks", texting: "mark unusual or specific locations", social: "hidden gem travel content" },
  "transport-ground": { domain: "cars, buses, trains, and road travel", texting: "commute updates and road trip coordination", social: "transit vlogs and car culture" },
  "transport-water": { domain: "boats, ferries, and water transport", texting: "ferry times and sailing plans", social: "cruise and marina content" },
  "transport-air": { domain: "planes, airports, and air travel", texting: "flight status and airport meetups", social: "aviation and travel influencer posts" },
  hotel: { domain: "hotels, lodging, and stays", texting: "check-in updates and room tours", social: "hotel reviews and travel hacks" },
  time: { domain: "clocks, schedules, and timing", texting: "meeting times and countdowns", social: "productivity and timezone jokes" },
  "sky-weather": { domain: "weather, sky conditions, and climate", texting: "forecast complaints and packing advice", social: "storm chasing and sunset posts" },
};

export const generateTravelBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const angle = subgroupAngles[emoji.subgroup] ?? {
    domain: "places, transport, and travel",
    texting: "coordinate trips and locations",
    social: "travel photography and guides",
  };
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning for Travel, Maps, and Location Texts`,
    snippetAnswer: `${u} ${name} helps describe ${angle.domain}. Travelers use it in itinerary chats, weather updates, and location-tagged social posts about ${kw}.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) sits in the ${humanizeSubgroup(emoji.subgroup)} Unicode subgroup — built for messages where place and movement matter. Instead of typing long location names, senders use ${u} as a visual shorthand.`,
        `Family trip threads combine ${u} with dates, flight numbers, and hotel names. One emoji tells everyone the message is about ${label}, not generic excitement.`,
        `Travel creators on Instagram and TikTok place ${u} early in captions so followers know the reel covers ${angle.domain} before swiping.`,
      ],
      [
        `Commuters use ${u} for daily ${label} updates — delays, arrivals, and "on my way" pings. It is practical more than poetic.`,
        `Weather tied to ${label} affects packing lists; group chats swap ${u} when forecasts shift and plans need changing.`,
        `Professional travelers keep ${u} out of client email but use it internally with colleagues they know well.`,
      ],
      [
        `International audiences recognize ${u} even when languages differ — useful in multilingual comment sections during global events.`,
        `Accessibility tip: always name the city, venue, or transport mode in text beside ${u} so screen readers and unclear renders still convey meaning.`,
        `${name} rarely implies romance unless the trip itself is a date — the emoji stays literal.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `${u} in texting usually updates friends about ${angle.texting}. Example: "${pickN(emoji.slug, [`En route ${u}`, `Made it ${u}`, `Delayed ${u}`, `Meet here ${u}`], 1, 8)[0]}".`,
      `Roommates and partners coordinate ${label} logistics with ${u} — keys, tickets, and timing.`,
      `${u} confirms the topic is travel-related before details arrive in the next message.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} tags ${angle.social}. Influencers pair it with geotags and booking links.`,
      `Live travel day vlogs use ${u} in story titles for quick topic recognition.`,
      `Followers search comments for ${u} during Q&A sessions about ${kw}.`,
    ], 2),
    caution: pick(emoji.slug, [
      `${u} alone does not share GPS coordinates — add maps links when meetup precision matters.`,
      `During travel disasters, flashy ${u} vacation posts may feel insensitive — read the news cycle.`,
      `Religious sites tied to ${label} deserve respectful captions, not pure tourism flex.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Trip", text: `Tickets booked ${u}` },
        { context: "Commute", text: `Running late ${u}` },
        { context: "Weather", text: `Pack a jacket ${u}` },
        { context: "Arrival", text: `Land safely ${u}` },
        { context: "Explore", text: `Best view ${u}` },
        { context: "Hotel", text: `Checked in ${u}` },
        { context: "Meetup", text: `See you at the station ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        { title: "Itinerary planning", body: `${u} marks messages with dates, bookings, and packing lists for ${label}.` },
        { title: "Live travel day", body: `Stories and tweets spike ${u} during transit — real-time audience updates.` },
        { title: "Weather pivots", body: `${u} appears when storms or heat waves force plan changes.` },
        { title: "Digital nomads", body: `Remote workers tag ${label} content with ${u} in coworking and cafe reviews.` },
      ],
      3,
      5
    ),
    searchIntents: [`${label} emoji meaning`, `${u} travel emoji`, `${name} copy paste`, `${label} emoji ${kw}`, `what does ${u} mean in texting`],
    whenNotToUse: [`Do not use ${u} to boast about travel during crises affecting the destination.`, `${u} is too casual for formal immigration or legal correspondence.`],
    faqs: pickN(
      emoji.slug,
      [
        { question: `What does ${u} mean in travel texts?`, answer: `Usually ${label} — movement, place, weather, or lodging updates tied to ${angle.domain}.` },
        { question: `Can I use ${u} at work?`, answer: `Only in informal internal chats. Client-facing travel updates should stay text-first.` },
      ],
      2,
      6
    ),
  });
};
