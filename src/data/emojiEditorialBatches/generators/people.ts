import type { Emoji } from "@/data/emojis";
import {
  buildBatch,
  cleanKeywords,
  humanize,
  humanizeSubgroup,
  parsePeopleSlug,
  pick,
  pickN,
  skinToneLabel,
} from "./shared";

const batchId = "09-people-body";

const subgroupAngles: Record<string, { action: string; texting: string; social: string; work: string }> = {
  "hand-fingers-open": { action: "open-hand gestures like waving and stopping", texting: "greetings and 'wait' signals", social: "intro videos and live streams", work: "informal hello in team chat" },
  "hand-fingers-partial": { action: "partial-hand gestures like pinching and OK signs", texting: "precision jokes and 'small amount' humor", social: "meme reactions and tutorials", work: "use carefully — some gestures vary by culture" },
  "hand-single-finger": { action: "pointing and single-finger signals", texting: "direct attention to a message or person", social: "call-out posts and highlight reels", work: "OK for internal links; rude if pointing at people" },
  "hand-fingers-closed": { action: "closed-fist and power gestures", texting: "solidarity, strength, or celebration", social: "protest imagery and gym posts", work: "avoid aggressive fist emojis with clients" },
  hands: { action: "two-hand gestures like clap, pray, handshake", texting: "thanks, agreement, and congratulations", social: "event coverage and milestone posts", work: "handshake emoji for deal closes in casual teams" },
  "hand-prop": { action: "hands holding tools or props", texting: "work-in-progress and craft updates", social: "maker and artist process videos", work: "writing hand for signature or approval lines" },
  "body-parts": { action: "body-part references", texting: "physical humor and fitness logs", social: "workout and medical awareness posts", work: "generally too casual for formal HR" },
  person: { action: "people in various roles and poses", texting: "represent someone doing an activity", social: "lifestyle and identity content", work: "diversity in marketing when appropriate" },
  "person-gesture": { action: "full-body gestures and poses", texting: "dramatic reactions and dance vibes", social: "TikTok dance and challenge tags", work: "skip in legal or client decks" },
  "person-role": { action: "professional and role-based people", texting: "job updates and cosplay", social: "career milestones and uniforms", work: "literal job reference in internal posts" },
  "person-fantasy": { action: "fantasy figures like mermaid or vampire", texting: "Halloween and fandom plans", social: "cosplay and fiction fandom", work: "keep fantasy emojis out of formal reports" },
  "person-activity": { action: "people doing activities", texting: "share what you are doing right now", social: "activity vlogs and hobby posts", work: "WFH yoga OK internally sometimes" },
  "person-sport": { action: "athletes and sports poses", texting: "game attendance and workout done", social: "fitness influencer content", work: "team morale posts" },
  "person-resting": { action: "rest, sleep, and recovery poses", texting: "cancel plans to rest", social: "self-care and lazy day posts", work: "OOO vibes — informal only" },
  family: { action: "family groups and relationships", texting: "family updates and invitations", social: "family photo captions", work: "parental leave announcements internally" },
  "person-symbol": { action: "symbolic people icons", texting: "accessibility and restroom wayfinding jokes", social: "infographics and signage content", work: "use in DEI slides with clear labels" },
};

const gestureVerbs: Record<string, string> = {
  "waving-hand": "wave hello or goodbye",
  "raised-hand": "ask a question or volunteer",
  "ok-hand": "signal OK or approval",
  "thumbs-up": "show approval or agreement",
  "thumbs-down": "disapprove or disagree",
  "clapping-hands": "applaud or congratulate",
  "folded-hands": "say please, thanks, or prayer",
  "raising-hands": "celebrate or surrender happily",
  "handshake": "close a deal or greet formally",
  "flexed-biceps": "show strength or gym progress",
  "victory-hand": "peace sign or victory",
  "crossed-fingers": "hope for luck",
  "love-you-gesture": "sign 'I love you' in ASL",
  "sign-of-the-horns": "rock on or concert hype",
  "middle-finger": "rude anger — avoid professional use",
  "pinched-fingers": "Italian 'what do you want?' gesture",
  "pinching-hand": "small amount or tiny pinch joke",
  "call-me-hand": "call me later gesture",
  "backhand-index-pointing-right": "point right",
  "backhand-index-pointing-left": "point left",
  "backhand-index-pointing-up": "point up",
  "backhand-index-pointing-down": "point down",
  "index-pointing-up": "number one or look up",
  "writing-hand": "writing or signing",
  "selfie": "take a selfie",
  "nail-polish": "casual confidence or 'unbothered'",
};

const getGestureDescription = (base: string, name: string) =>
  gestureVerbs[base] ?? `use the ${name.toLowerCase()} gesture`;

export const generatePeopleBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const { base, skinTone } = parsePeopleSlug(emoji.slug);
  const toneLabel = skinToneLabel(skinTone);
  const tonePhrase = toneLabel ? ` with ${toneLabel}` : "";
  const displayName = toneLabel ? `${humanize(base)} (${toneLabel})` : name;
  const gesture = getGestureDescription(base, humanize(base));
  const angle = subgroupAngles[emoji.subgroup] ?? {
    action: "human gestures and body language",
    texting: "replace short phrases in chat",
    social: "expressive captions and reactions",
    work: "informal internal teams only",
  };
  const kw = cleanKeywords(emoji)[0] ?? base.replace(/-/g, " ");

  return buildBatch(emoji, batchId, {
    searchTitle: `${displayName} Emoji (${u}) Meaning, Gesture, and Texting Use`,
    snippetAnswer: `${u} shows ${displayName.toLowerCase()}${tonePhrase} — used to ${gesture}. Skin-tone variants help people match identity in messages about ${angle.action}.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `The ${name} emoji (${u}) represents ${angle.action} in Unicode's ${humanizeSubgroup(emoji.subgroup)} set. Hand and people emojis function as digital body language — they replace gestures you would make on video.`,
        toneLabel
          ? `This variant uses ${toneLabel}. Unicode added skin-tone modifiers so senders can align emoji with their own or someone else's appearance in respectful, representative messages.`
          : `Without a skin-tone modifier, platforms pick a default yellow tone — many users prefer selecting a tone that matches identity when available.`,
        `In WhatsApp and iMessage, ${u} often ends a short reply where the gesture alone communicates the reaction. Example intent: ${gesture}.`,
      ],
      [
        `${displayName} appears in ${angle.texting}. Groups coordinating events use ${u} as quick confirmation; creators use it in ${angle.social}.`,
        `Cross-cultural caution: some ${base.replace(/-/g, " ")} gestures read differently abroad. With international colleagues, add words if the gesture could be ambiguous.`,
        `Search queries like "${base} emoji meaning" and "${base} ${toneLabel ?? "emoji"}" lead here because gesture pages need nuance beyond generic definitions.`,
      ],
      [
        `At work, ${angle.work}. Client-facing lawyers and accountants should skip ${u} unless the client started emoji use.`,
        `Fitness and sports threads use ${u} literally when the pose matches — not as abstract hype.`,
        `Copy ${u} from this page to paste the exact ${toneLabel ?? "default"} variant into any app that supports Unicode 14+ skin tones.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `In texting, ${u} usually means someone wants to ${gesture}. Close friends send it alone after memes; coworkers pair it with words.`,
      toneLabel
        ? `Choosing ${toneLabel} can show solidarity or self-representation when discussing people and identity — not just decoration.`
        : `${u} clarifies tone when words feel too flat — especially in group chats with rapid replies.`,
      `Example flow: "${pickN(emoji.slug, [`Hey ${u}`, `Good job ${u}`, `See you ${u}`, `Like this ${u}`], 1, 9)[0]}".`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} tags ${angle.social}. Influencers use gesture emojis in thumbnails to hint at the video's energy.`,
      `Live streams see ${u} spammed when viewers mirror the host's ${base.replace(/-/g, " ")}.`,
      `Story stickers with ${displayName} personalize polls and Q&A prompts.`,
    ], 2),
    caution: pick(emoji.slug, [
      base === "middle-finger"
        ? `${u} is offensive in most professional and family contexts — never send in anger.`
        : `${u} may be rude in some cultures — verify before messaging international clients.`,
      `Do not use ${u} to mock disabilities or ASL signs — respect beats humor.`,
      toneLabel ? `Avoid assuming someone's skin tone — let them pick their own emoji.` : `Pick a skin-tone variant when messaging about a specific person when appropriate.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Greeting", text: `Hey there ${u}` },
        { context: "Congrats", text: `Well done ${u}` },
        { context: "Agreement", text: `Exactly ${u}` },
        { context: "Invite", text: `Your turn ${u}` },
        { context: "React", text: `This ${u}` },
        { context: "Support", text: `Got you ${u}` },
        { context: "Humor", text: `Mood ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        { title: "Gesture replacement", body: `${u} stands in for ${gesture} when video is off.` },
        { title: "Inclusive representation", body: toneLabel ? `${toneLabel} variants matter in messages about people and community.` : `Skin-tone options let readers see themselves in ${base} gestures.` },
        { title: "Workplace norms", body: angle.work },
        { title: "Live reactions", body: `Comment sections use ${u} for instant feedback during streams.` },
      ],
      3,
      5
    ),
    searchIntents: [
      `${base.replace(/-/g, " ")} emoji meaning`,
      toneLabel ? `${base} ${toneLabel} emoji` : `${base} emoji`,
      `${u} meaning in texting`,
      `${displayName.toLowerCase()} copy paste`,
      `${kw} emoji ${u}`,
    ],
    whenNotToUse: [
      base === "middle-finger" ? `Never use ${u} in harassment or HR contexts.` : `${u} is too casual for legal contracts and formal apologies.`,
      `Skip ${u} when discussing discrimination — use thoughtful words instead.`,
    ],
    faqs: pickN(
      emoji.slug,
      [
        {
          question: `What does ${u} mean in texting?`,
          answer: `It mimics ${displayName.toLowerCase()} — typically to ${gesture}. Context from the chat clarifies sincerity vs sarcasm.`,
        },
        toneLabel
          ? {
              question: `Why pick ${toneLabel} for ${humanize(base)}?`,
              answer: `Skin-tone modifiers represent diversity. Choose the tone that matches you or the person you reference when identity is part of the message.`,
            }
          : {
              question: `Are there skin tone versions of ${humanize(base)}?`,
              answer: `Yes — search "${humanize(base)}" plus light, medium, or dark skin tone to find ${u} variants on this site.`,
            },
        {
          question: `Is ${u} OK at work?`,
          answer: angle.work,
        },
      ],
      3,
      6
    ),
  });
};
