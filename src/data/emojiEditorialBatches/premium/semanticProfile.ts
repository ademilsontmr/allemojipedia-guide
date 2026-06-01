import type { Emoji } from "@/data/emojis";
import { cleanKeywords, humanize, humanizeSubgroup, parsePeopleSlug } from "../generators/shared";

const THIN_PHRASES = [
  "is used in digital communication to express",
  "is commonly used in texting, social media, and online communication",
  "Context matters - meaning can vary by platform and conversation",
  "Just posted my new photo",
  "Can't wait to see you",
  "That's amazing",
  "is a versatile symbol used in digital communication",
  "expresses a specific facial emotion, perfect for adding personality",
  "express specific meaning",
  "Popular on social media, texting, and messaging apps",
  "Express loving feelings in your digital conversations",
  "A popular choice for showing love online",
  "Add mobile vibes to your chats with the",
];

export type SemanticProfile = {
  subject: string;
  subjectLower: string;
  coreMeaning: string;
  contexts: string[];
  keywords: string[];
  subgroupLabel: string;
  emotionHint: string | null;
  objectHint: string | null;
  activityHint: string | null;
  travelDomain: string | null;
};

export const isThinPhrase = (text: string) =>
  THIN_PHRASES.some((phrase) => text.includes(phrase));

export const cleanMeaningLine = (text: string, name: string): string => {
  let line = text.trim();
  for (const phrase of THIN_PHRASES) {
    line = line.replace(phrase, "").trim();
  }
  line = line.replace(/^[^\w]+/, "").replace(/\s+/g, " ").trim();
  if (line.length < 20) {
    return `${name} is a Unicode symbol people use when the topic matches its visual meaning in chat and social posts.`;
  }
  return line.replace(/\.$/, "");
};

const GENERIC_CONTEXTS = new Set([
  "social media posts",
  "text messaging",
  "online reactions",
  "showing love",
  "expressing loving feelings",
  "digital communication",
  "everyday messaging",
  "transportation",
]);

export const primaryKeywords = (emoji: Emoji): string[] => cleanKeywords(emoji).slice(0, 5);

export const meaningfulContexts = (emoji: Emoji): string[] =>
  emoji.usageContexts
    .filter((ctx) => !isThinPhrase(ctx) && ctx.length > 2)
    .filter((ctx) => !GENERIC_CONTEXTS.has(ctx.toLowerCase().trim()))
    .map((ctx) => ctx.replace(/^to /i, "").trim())
    .slice(0, 5);

const slugEmotionHints: Record<string, string> = {
  kissing: "affection, blown kisses, or warm goodbyes",
  kiss: "affection, blown kisses, or warm goodbyes",
  heart: "love, care, or emotional warmth",
  grinning: "genuine happiness and friendly energy",
  smiling: "warmth, approval, or gentle positivity",
  beaming: "excited joy and celebration",
  laughing: "humor and shared amusement",
  cry: "sadness, overwhelm, or happy tears",
  sob: "deep sadness or emotional release",
  angry: "frustration or strong disagreement",
  rage: "intense anger — use carefully",
  worried: "concern and empathy checks",
  fearful: "fear, shock, or anxiety",
  sleepy: "fatigue, boredom, or late-night chats",
  sick: "illness, nausea, or not feeling well",
  dizzy: "confusion, overwhelm, or spinning-head jokes",
  skull: "dark humor, shock, or figurative 'I'm dead' reactions",
  clown: "goofy humor or ironic self-deprecation",
  ghost: "spooky fun, disappearing, or 'boo' jokes",
  alien: "weirdness, sci-fi fandom, or feeling out of place",
  robot: "automation jokes, AI talk, or stiff tone",
  devil: "mischief, spicy humor, or Halloween",
  angel: "innocence, sweetness, or playful virtue",
  party: "celebrations, birthdays, and events",
  mask: "costumes, COVID-era health, or hiding feelings",
  monocle: "skeptical inspection or fancy humor",
  sunglasses: "confidence, coolness, or hiding tired eyes",
  nerd: "study mode, glasses humor, or geek pride",
  tongue: "playful teasing or silly moods",
  wink: "flirting, inside jokes, or sarcasm",
  blush: "embarrassment, shyness, or flattered feelings",
  sweat: "stress, relief, or nervous effort",
  steam: "frustration boiling over",
  explode: "mind-blown reactions or extreme surprise",
  zany: "goofy chaotic energy",
  pleading: "cute requests and puppy-dog eyes",
  yawning: "boredom, sleepiness, or dismissive tone",
  shushing: "quiet please or secret-keeping",
  thinking: "considering options or skeptical pause",
  zip: "sealed lips or can't speak yet",
  neutral: "flat tone or deliberate deadpan",
  unamused: "disapproval or unimpressed reactions",
  rolling: "eye-roll sarcasm",
  grimacing: "awkward cringe moments",
  lying: "fibbing jokes or suspicious tone",
  relieved: "stress lifted after close call",
  pensive: "thoughtful or worried contemplation",
  confused: "uncertainty or mixed signals",
  upside: "sarcasm or playful contradiction",
  money: "wealth, cost, or payday talk",
  horn: "party horns and celebration noise",
  bell: "notifications, holidays, or alerts",
  warning: "caution and safety notices",
  stop: "halt, boundaries, or refusal",
  check: "completion, approval, or done",
  cross: "errors, rejection, or X marks",
  question: "uncertainty or quiz prompts",
  exclamation: "emphasis and alerts",
};

const inferHintFromSlug = (slug: string, keys: string[]): string | null => {
  for (const key of keys) {
    if (slug.includes(key)) return slugEmotionHints[key] ?? null;
  }
  return null;
};

const travelSlugDomains: Record<string, string> = {
  train: "commuter and intercity rail",
  railway: "rail lines and stations",
  bus: "bus routes and public transit",
  car: "driving, rides, and road trips",
  taxi: "cab rides and airport pickups",
  airplane: "flights and air travel",
  plane: "aviation and airport updates",
  ship: "ferries, cruises, and sailing",
  boat: "water transport and marinas",
  hotel: "lodging and check-ins",
  beach: "coastal vacations",
  mountain: "hiking and alpine trips",
  building: "landmarks and urban destinations",
  weather: "forecasts and packing decisions",
  clock: "schedules, time zones, and meetups",
  map: "location pins and geography",
  globe: "international travel and world regions",
};

const inferTravelDomain = (slug: string): string | null => {
  for (const [key, domain] of Object.entries(travelSlugDomains)) {
    if (slug.includes(key)) return domain;
  }
  return null;
};

const inferCoreMeaning = (emoji: Emoji, subject: string, profile: Partial<SemanticProfile>): string => {
  if (profile.emotionHint) {
    return `${subject} conveys ${profile.emotionHint} in digital messages.`;
  }
  switch (emoji.categorySlug) {
    case "travel-and-places":
      return profile.travelDomain
        ? `${subject} marks ${profile.travelDomain} in trip planning, commute updates, and location-tagged posts.`
        : `${subject} represents ${humanizeSubgroup(emoji.subgroup).toLowerCase()} — places, movement, or weather people reference in trip chats.`;
    case "activities":
      return `${subject} tags sports, games, hobbies, or events when the activity itself is the topic.`;
    case "objects":
      return `${subject} refers to the real-world object in shopping, work, hobby, and review conversations.`;
    case "symbols":
      return `${subject} works as a visual sign for emphasis, direction, warnings, or shorthand inside a community.`;
    case "smileys-and-emotion":
      return `${subject} adds facial expression and emotional tone to short messages.`;
    case "food-and-drink":
      return `${subject} marks food, drinks, cravings, recipes, and restaurant talk.`;
    case "animals-and-nature":
      return `${subject} represents animals, plants, or nature scenes in casual chat.`;
    default:
      return `${subject} is a Unicode emoji used when the visual meaning matches the conversation topic.`;
  }
};

export const buildSemanticProfile = (emoji: Emoji): SemanticProfile => {
  const { base } = parsePeopleSlug(emoji.slug);
  const slug = emoji.categorySlug === "people-and-body" ? base : emoji.slug;
  const subject = emoji.name.replace(/\s+with\s+(light|medium-light|medium|medium-dark|dark)\s+skin\s+tone/i, "").trim();
  const subjectLower = subject.toLowerCase();
  const subgroupLabel = humanizeSubgroup(emoji.subgroup);

  const emotionHint = inferHintFromSlug(slug, Object.keys(slugEmotionHints));
  const objectHint =
    emoji.categorySlug === "objects"
      ? `a real-world ${subjectLower} people reference in shopping, work, or hobby chats`
      : null;
  const activityHint =
    emoji.categorySlug === "activities"
      ? `${subjectLower} in sports, games, hobbies, or events`
      : null;
  const travelDomain =
    emoji.categorySlug === "travel-and-places" ? inferTravelDomain(slug) : null;

  const partial = { emotionHint, objectHint, activityHint, subgroupLabel, travelDomain };
  let coreMeaning = cleanMeaningLine(emoji.shortMeaning, subject);
  if (
    isThinPhrase(coreMeaning) ||
    isThinPhrase(emoji.shortMeaning) ||
    coreMeaning.includes("Unicode symbol people use when the topic matches")
  ) {
    coreMeaning = inferCoreMeaning(emoji, subject, partial);
  }

  const contexts = meaningfulContexts(emoji);
  const keywords = primaryKeywords(emoji);

  return {
    subject,
    subjectLower,
    coreMeaning,
    contexts,
    keywords,
    subgroupLabel,
    emotionHint,
    objectHint,
    activityHint,
    travelDomain,
  };
};

export const titleCaseContexts = (contexts: string[], fallback: string): string => {
  if (contexts.length === 0) return fallback;
  return contexts.slice(0, 3).join(", ");
};

export const relatedSlugLabel = (slug: string) => humanize(slug);
