import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, humanizeSubgroup, pick, pickN, lowerFirst } from "./shared";

const batchId = "03-activities";

const subgroupAngles: Record<string, { hook: string; texting: string; social: string }> = {
  event: {
    hook: "celebrations, holidays, and cultural festivals",
    texting: "mark dates on the calendar — parties, parades, and family gatherings",
    social: "seasonal content, holiday decor, and event recaps",
  },
  "award-medal": {
    hook: "winning, achievement, and recognition",
    texting: "congratulate someone on a win or personal milestone",
    social: "sports podiums, academic awards, and gaming achievements",
  },
  sport: {
    hook: "sports, training, and game-day energy",
    texting: "coordinate matches, share scores, or hype teammates",
    social: "highlights, workout logs, and live match reactions",
  },
  game: {
    hook: "games, play, and leisure competition",
    texting: "invite friends to play or react to board and video games",
    social: "streaming clips, tabletop nights, and esports threads",
  },
  "arts-crafts": {
    hook: "creative hobbies, crafts, and artistic projects",
    texting: "share progress on handmade gifts and DIY projects",
    social: "tutorials, studio tours, and maker community posts",
  },
};

export const generateActivitiesBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const angle = subgroupAngles[emoji.subgroup] ?? {
    hook: "hobbies, events, and pastimes",
    texting: "tag plans with friends around shared activities",
    social: "captions for hobby and entertainment content",
  };
  const kw = cleanKeywords(emoji)[0] ?? label;
  const ctx = emoji.usageContexts[0] ?? angle.hook;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning in Sports, Events, and Social Posts`,
    snippetAnswer: `${u} ${name} tags ${angle.hook}. In texting it helps friends spot activity plans fast; on social feeds it signals ${kw} content before people read the caption.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) belongs to Unicode's ${humanizeSubgroup(emoji.subgroup)} group. People drop it when the conversation is about ${ctx.toLowerCase()} — not generic mood alone.`,
        `Weekend group chats use ${u} to vote on plans: who is in for ${label}, what time, and what to bring. One emoji saves a long poll.`,
        `On TikTok and Instagram, ${u} anchors reels about ${kw}. Viewers scroll past hundreds of posts — the emoji acts as a topic label.`,
      ],
      [
        `Unlike vague reaction emojis, ${u} points to a specific activity: ${label}. That specificity helps Google and readers understand the page topic.`,
        `Sports and hobby communities develop shorthand — ${u} might mean "training done" or "game tonight" depending on the subgroup. Local context still rules.`,
        `When safety matters (${label} with rules or equipment), pair ${u} with clear words. The emoji adds energy, not instructions.`,
      ],
      [
        `${u} rarely carries hidden romantic code. If flirting happens, it is because the date idea itself involves ${label}, not the emoji alone.`,
        `Creators planning content calendars use ${u} in draft titles to remember which posts cover ${angle.hook}.`,
        `Cross-platform, ${name} renders consistently — safe for event promo across iOS, Android, and web.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `In texting, ${u} usually means "${label}" plans — confirming attendance, sharing results, or hyping friends. Example tone: "${pickN(emoji.slug, [`Game on ${u}`, `Practice done ${u}`, `Who is in ${u}`, `Great match ${u}`], 1, 7)[0]}".`,
      `${u} replaces a short phrase in busy group chats about ${angle.texting}.`,
      `Friends react with ${u} to photos and videos when the activity matches ${label}.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} tags ${angle.social}. Creators place it in captions, thumbnails, and comment pins.`,
      `Live event threads spike ${u} usage — audiences react faster than typing full sentences.`,
      `Hashtag-light posts use ${u} as a visual keyword for ${kw}.`,
    ], 2),
    caution: pick(emoji.slug, [
      `${u} can feel flippant if someone shares an injury or loss related to ${label} — lead with empathy.`,
      `Avoid ${u} in formal workplace email unless your team already uses hobby emojis freely.`,
      `Some activities tied to ${label} have cultural or religious weight — read the room.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Invite", text: `Join us for ${label} ${u}` },
        { context: "Results", text: `We won ${u}` },
        { context: "Training", text: `Session complete ${u}` },
        { context: "Weekend", text: `${name} this Saturday? ${u}` },
        { context: "Highlight", text: `Best moment ${u}` },
        { context: "Gear", text: `New setup for ${label} ${u}` },
        { context: "Live", text: `Watching now ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        {
          title: "Friend group planning",
          body: `${u} shows up in polls about ${label}. Combined with a time emoji, it becomes a full invite.`,
        },
        {
          title: "Live events",
          body: `During matches and performances, ${u} fills comment feeds as a real-time reaction.`,
        },
        {
          title: "Content creation",
          body: `Creators batch ${label} posts under ${u} in Notion or Trello boards for topic consistency.`,
        },
        {
          title: "Kids and family",
          body: `Parents use ${u} when sharing kids' ${label} milestones in family WhatsApp groups.`,
        },
      ],
      3,
      5
    ),
    searchIntents: [
      `${label} emoji meaning`,
      `${u} meaning in texting`,
      `${name} emoji copy paste`,
      `${label} emoji ${kw}`,
      `what does ${u} mean`,
    ],
    whenNotToUse: [
      `${u} may trivialize serious injuries in ${label} — use words first when someone is hurt.`,
      `Skip ${u} in somber memorial threads unless ${label} genuinely honors the person.`,
    ],
    faqs: pickN(
      emoji.slug,
      [
        {
          question: `What does ${u} mean in texting?`,
          answer: `Usually ${label} — plans, results, or hype around ${angle.hook}. Context from the sentence confirms.`,
        },
        {
          question: `How is ${u} used on Instagram?`,
          answer: `In captions and stories about ${kw}. It tells followers the post topic at a glance.`,
        },
        {
          question: `Is ${u} informal?`,
          answer: `Yes — fine for friends and hobby communities, not for formal reports.`,
        },
      ],
      3,
      6
    ),
  });
};
