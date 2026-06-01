/**
 * Batch 13 priority queue — hand-written travel & objects thin pages.
 * Ranked by estimated search demand (query patterns, travel/objects intent,
 * blog/internal links). Replace with GSC impressions when available.
 *
 * Already manual (skip): train, globes, mountain, camping — batch 10.
 * Deprioritized: clock/moon-phase variants (low per-slug volume; premium engine OK).
 */

export type Batch13PriorityEntry = {
  slug: string;
  category: "travel-and-places" | "objects";
  tier: "P0" | "P1" | "P2";
  rationale: string;
};

export const batch13PriorityList: Batch13PriorityEntry[] = [
  // —— P0: highest query intent (do first) ——
  { slug: "bullet-train", category: "travel-and-places", tier: "P0", rationale: "Shinkansen / high-speed rail — huge travel search cluster" },
  { slug: "airplane-departure", category: "travel-and-places", tier: "P0", rationale: "Flight takeoff — airport & trip planning queries" },
  { slug: "airplane-arrival", category: "travel-and-places", tier: "P0", rationale: "Landing / just arrived — pairs with departure" },
  { slug: "national-park", category: "travel-and-places", tier: "P0", rationale: "Outdoors tourism — US parks, hiking trips" },
  { slug: "hot-springs", category: "travel-and-places", tier: "P0", rationale: "Onsen / spa — Japan travel + wellness" },
  { slug: "ferry", category: "travel-and-places", tier: "P0", rationale: "Island hops, commute, cruise adjacency" },
  { slug: "wedding", category: "travel-and-places", tier: "P0", rationale: "Events, invites, venue captions" },
  { slug: "shinto-shrine", category: "travel-and-places", tier: "P0", rationale: "Japan culture travel — high intent niche" },
  { slug: "dollar-banknote", category: "objects", tier: "P0", rationale: "Money emoji — payday, cost, US finance chat" },
  { slug: "euro-banknote", category: "objects", tier: "P0", rationale: "EU travel & money references" },
  { slug: "briefcase", category: "objects", tier: "P0", rationale: "Work, job, business travel" },
  { slug: "calendar", category: "objects", tier: "P0", rationale: "Scheduling, dates, planning" },
  { slug: "graduation-cap", category: "objects", tier: "P0", rationale: "Grad season — massive seasonal spikes" },
  { slug: "lipstick", category: "objects", tier: "P0", rationale: "Beauty GRWM — strong TikTok/Instagram" },
  { slug: "bikini", category: "objects", tier: "P0", rationale: "Beach travel + fashion crossover" },

  // —— P1: strong secondary demand ——
  { slug: "skateboard", category: "travel-and-places", tier: "P1", rationale: "Youth sports, street culture" },
  { slug: "delivery-truck", category: "travel-and-places", tier: "P1", rationale: "Shipping, Amazon, package tracking" },
  { slug: "construction", category: "travel-and-places", tier: "P1", rationale: "Road work, delays, commute venting" },
  { slug: "horizontal-traffic-light", category: "travel-and-places", tier: "P1", rationale: "Driving, commute, urban life" },
  { slug: "station", category: "travel-and-places", tier: "P1", rationale: "Rail hub — complements train/bullet-train" },
  { slug: "light-rail", category: "travel-and-places", tier: "P1", rationale: "Urban transit — tram/metro adjacency" },
  { slug: "foggy", category: "travel-and-places", tier: "P1", rationale: "Weather visibility — travel safety" },
  { slug: "cyclone", category: "travel-and-places", tier: "P1", rationale: "Hurricane/storm — weather news spikes" },
  { slug: "umbrella-with-rain-drops", category: "travel-and-places", tier: "P1", rationale: "Rain forecast — packing & plans" },
  { slug: "snowman", category: "travel-and-places", tier: "P1", rationale: "Winter travel, holidays, snow days" },
  { slug: "bridge-at-night", category: "travel-and-places", tier: "P1", rationale: "Scenic city travel photography" },
  { slug: "sunrise-over-mountains", category: "travel-and-places", tier: "P1", rationale: "Hiking / adventure aesthetic" },
  { slug: "cityscape", category: "travel-and-places", tier: "P1", rationale: "Urban travel, skyline posts" },
  { slug: "parachute", category: "travel-and-places", tier: "P1", rationale: "Adventure sports, skydiving" },
  { slug: "kick-scooter", category: "travel-and-places", tier: "P1", rationale: "Micromobility, city commute" },
  { slug: "pound-banknote", category: "objects", tier: "P1", rationale: "UK money & travel" },
  { slug: "yen-banknote", category: "objects", tier: "P1", rationale: "Japan travel money context" },
  { slug: "coin", category: "objects", tier: "P1", rationale: "Tips, savings, crypto adjacency" },
  { slug: "money-with-wings", category: "objects", tier: "P1", rationale: "Spending, expensive, flying away" },
  { slug: "open-book", category: "objects", tier: "P1", rationale: "Study, reading, BookTok" },
  { slug: "incoming-envelope", category: "objects", tier: "P1", rationale: "Mail, letters, job offers" },
  { slug: "postbox", category: "objects", tier: "P1", rationale: "Snail mail, UK post aesthetic" },
  { slug: "clipboard", category: "objects", tier: "P1", rationale: "Tasks, healthcare, work checklists" },
  { slug: "chart-increasing", category: "objects", tier: "P1", rationale: "Stocks, growth, business updates" },
  { slug: "magnifying-glass-tilted-right", category: "objects", tier: "P1", rationale: "Search, investigate, true crime meme" },

  // —— P2: worth manual but lower volume ——
  { slug: "oncoming-police-car", category: "travel-and-places", tier: "P2", rationale: "Emergency, chase memes, traffic" },
  { slug: "motor-boat", category: "travel-and-places", tier: "P2", rationale: "Lake/summer boat days" },
  { slug: "love-hotel", category: "travel-and-places", tier: "P2", rationale: "Japan travel niche — high intent when searched" },
  { slug: "satellite-antenna", category: "objects", tier: "P2", rationale: "Tech, signal, space aesthetic" },
  { slug: "telescope", category: "objects", tier: "P2", rationale: "Astronomy, stargazing travel" },
  { slug: "adhesive-bandage", category: "objects", tier: "P2", rationale: "Injury, self-care, bandaid meme" },
  { slug: "hiking-boot", category: "objects", tier: "P2", rationale: "Trail gear — pairs with mountain/national-park" },
  { slug: "studio-microphone", category: "objects", tier: "P2", rationale: "Podcast, streaming, creator economy" },
  { slug: "coffin", category: "objects", tier: "P2", rationale: "Halloween, dark humor, mortality memes" },
  { slug: "shield", category: "objects", tier: "P2", rationale: "Protection, gaming, security" },
];

export const batch13Slugs = batch13PriorityList.map((e) => e.slug);

export const batch13ByTier = {
  P0: batch13PriorityList.filter((e) => e.tier === "P0"),
  P1: batch13PriorityList.filter((e) => e.tier === "P1"),
  P2: batch13PriorityList.filter((e) => e.tier === "P2"),
};

/** Slugs intentionally deferred — premium engine sufficient unless GSC proves otherwise */
export const batch13DeferredSlugs = [
  "twelve-oclock",
  "one-oclock",
  "two-oclock",
  "three-oclock",
  "four-oclock",
  "five-oclock",
  "six-oclock",
  "seven-oclock",
  "eight-oclock",
  "nine-oclock",
  "ten-oclock",
  "eleven-oclock",
  "waxing-crescent-moon",
  "waning-crescent-moon",
  "first-quarter-moon",
  "last-quarter-moon",
] as const;
