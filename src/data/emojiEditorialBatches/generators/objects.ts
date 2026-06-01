import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, humanizeSubgroup, pick, pickN } from "./shared";

const batchId = "05-objects";

const subgroupAngles: Record<string, { domain: string; use: string }> = {
  clothing: { domain: "fashion, outfits, and wardrobe", use: "outfit checks and shopping plans" },
  sound: { domain: "audio, volume, and sound gear", use: "concerts, podcasts, and noise complaints" },
  music: { domain: "music culture and listening", use: "playlist drops and concert nights" },
  "musical-instrument": { domain: "instruments and playing music", use: "practice logs and gig announcements" },
  phone: { domain: "phones and mobile tech", use: "new device brags and low battery panic" },
  computer: { domain: "computers and digital work", use: "setup posts and WFH updates" },
  "light-video": { domain: "cameras, film, and video gear", use: "shoot days and content creation" },
  "book-paper": { domain: "books, documents, and stationery", use: "reading lists and study sessions" },
  money: { domain: "money, payments, and finance", use: "payday, bills, and splitting costs" },
  mail: { domain: "mail, packages, and delivery", use: "shipping tracking and inbox stress" },
  writing: { domain: "writing tools and signatures", use: "deadlines and contract talk" },
  office: { domain: "office supplies and workplace", use: "meetings, stationery, and desk life" },
  lock: { domain: "security, privacy, and locks", use: "account safety and locked doors" },
  tool: { domain: "tools, repair, and DIY", use: "fix-it projects and hardware store runs" },
  science: { domain: "science, labs, and research", use: "experiments and academic updates" },
  medical: { domain: "healthcare and medical items", use: "appointments and wellness check-ins" },
  household: { domain: "home items and chores", use: "cleaning, organizing, and domestic life" },
  "other-object": { domain: "everyday objects and items", use: "general references to things you own or need" },
};

export const generateObjectsBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const angle = subgroupAngles[emoji.subgroup] ?? { domain: " everyday objects", use: "referencing items in daily life" };
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning in Texting, Tech, and Daily Life`,
    snippetAnswer: `${u} ${name} represents ${angle.domain.trim()}. People use it when discussing ${label}, shopping, work setups, or ${angle.use}.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `The ${name} emoji (${u}) maps to real-world ${label} references in the ${humanizeSubgroup(emoji.subgroup)} category. Object emojis compress detail — "need a ${label}" becomes one tap.`,
        `Marketplace and buy/sell group chats use ${u} in listing titles. Buyers scan for the right object emoji before opening the thread.`,
        `Tech and hobby subreddits tag ${u} when reviews cover ${kw}. The emoji sets topic expectations in busy feeds.`,
      ],
      [
        `${u} helps coworkers signal ${angle.use} without long explanations — especially in Slack channels with rapid fire messages.`,
        `Unboxing and review TikToks put ${u} in the first line so the algorithm and humans both classify the clip.`,
        `Gift guides season spikes ${u} when ${label} appears on wishlists shared in family group chats.`,
      ],
      [
        `${name} is literal — rarely slang unless your friend group invented a private joke. Default meaning stays tied to the physical object.`,
        `When discussing expensive ${label} items, add price context; ${u} alone does not convey budget.`,
        `Accessibility: name "${label}" in text for screen readers when the object is central to your message.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `Texting with ${u} usually means ${label} — buying, fixing, showing off, or needing one. Example: "${pickN(emoji.slug, [`Need a new ${label} ${u}`, `Just got ${label} ${u}`, `Where is my ${label} ${u}`], 1, 7)[0]}".`,
      `${u} shortcuts ${angle.use} in roommate and partner chats.`,
      `Friends send ${u} when recommending ${kw} products or sharing photos of theirs.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} labels posts about ${angle.domain} — reviews, hauls, and desk tours.`,
      `Small business sellers use ${u} in Instagram shop captions for ${label}.`,
      `Tutorial creators pin ${u} so comments stay on-topic about ${kw}.`,
    ], 2),
    caution: pick(emoji.slug, [
      `${u} in medical or financial threads needs accurate words — emoji cannot replace professional advice.`,
      `Avoid ${u} when mocking someone's lack of ${label} — reads as classist.`,
      `Workplace: ${u} is fine internally; skip in contracts or legal PDFs.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Shopping", text: `Added ${label} to cart ${u}` },
        { context: "Review", text: `10/10 ${label} ${u}` },
        { context: "Need", text: `Anyone have a ${label}? ${u}` },
        { context: "Setup", text: `New ${label} day ${u}` },
        { context: "Gift", text: `Perfect ${label} gift ${u}` },
        { context: "Fix", text: `Fixed with ${label} ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        { title: "Buy/sell groups", body: `${u} in listing titles helps buyers filter for ${label} quickly.` },
        { title: "Desk and setup culture", body: `Creators showcase ${kw} with ${u} in gear tour videos.` },
        { title: "Domestic coordination", body: `Partners ping ${u} when ${label} needs replacing at home.` },
        { title: "Study and work", body: `${u} marks deadlines and tools for ${angle.domain}.` },
      ],
      3,
      5
    ),
    searchIntents: [`${label} emoji meaning`, `${u} emoji`, `${name} copy paste`, `${label} emoji ${kw}`],
    whenNotToUse: [`Skip ${u} when discussing theft or loss of ${label} — lead with empathy.`, `Medical ${label} topics need clear language, not emoji alone.`],
    faqs: pickN(
      emoji.slug,
      [
        { question: `What does ${u} mean?`, answer: `The ${name} — used literally for ${angle.domain} and ${angle.use}.` },
        { question: `Is ${u} good for product posts?`, answer: `Yes — it signals ${label} content to followers scanning captions.` },
      ],
      2,
      6
    ),
  });
};
