import type { Emoji } from "@/data/emojis";
import type { EmojiContextPage, EmojiContextType } from "@/data/emojiContextPages";
import { getEnrichedExamples, getUniqueWhenNotToUse } from "@/utils/emojiUniqueContent";

const CONTEXTS: EmojiContextType[] = ["from-a-girl", "from-a-guy", "whatsapp", "instagram", "tiktok"];

const hash = (value: string) =>
  [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);

const pick = <T>(key: string, items: T[], salt = 0): T =>
  items[Math.abs(hash(`${key}:${salt}`)) % items.length];

const lowerFirst = (value: string) =>
  value ? value.charAt(0).toLowerCase() + value.slice(1) : value;

const stripPeriod = (value: string) => value.replace(/\.$/, "");

/** Semantic slice of shortMeaning — prefers concise intent over literal pictograph descriptions. */
const cleanMeaning = (emoji: Emoji) => {
  const usage = emoji.usageContexts[0]?.trim();
  if (usage && usage.length < 60) {
    const normalized = usage.startsWith("to ") ? usage.slice(3) : usage;
    return /^[A-Z]{2,}/.test(normalized) ? normalized : lowerFirst(stripPeriod(normalized));
  }

  const raw = stripPeriod(emoji.shortMeaning);
  const parts = raw.split(/\s[-–—]\s/).map((p) => p.trim()).filter(Boolean);

  if (parts.length >= 2) {
    const [before, after] = parts;
    const semantic = after.length <= before.length ? after : before;
    return /^[A-Z]{2,}/.test(semantic) ? semantic : lowerFirst(stripPeriod(semantic));
  }

  const clause = parts[0] ?? raw;
  return /^[A-Z]{2,}/.test(clause) ? clause : lowerFirst(clause);
};

const pageKey = (slug: string, context: EmojiContextType) => `${slug}/${context}`;

type Archetype =
  | "heart"
  | "laughter"
  | "crying"
  | "flirt"
  | "gesture"
  | "hype"
  | "skeptic"
  | "primate"
  | "clown"
  | "face";

const HEART_SLUGS = new Set([
  "red-heart",
  "orange-heart",
  "yellow-heart",
  "green-heart",
  "blue-heart",
  "purple-heart",
  "black-heart",
  "white-heart",
  "brown-heart",
  "pink-heart",
  "broken-heart",
  "two-hearts",
  "heart-on-fire",
  "mending-heart",
  "sparkling-heart",
  "growing-heart",
  "revolving-hearts",
  "heart-with-arrow",
  "heart-with-ribbon",
  "kiss-mark",
]);

const LAUGHTER_SLUGS = new Set([
  "face-with-tears-of-joy",
  "rolling-on-the-floor-laughing",
  "skull",
  "zany-face",
  "grinning-squinting-face",
  "grinning-face-with-sweat",
]);

const CRYING_SLUGS = new Set([
  "loudly-crying-face",
  "crying-face",
  "melting-face",
  "face-holding-back-tears",
  "smiling-face-with-tear",
  "pensive-face",
]);

const FLIRT_SLUGS = new Set([
  "winking-face",
  "smirking-face",
  "face-blowing-a-kiss",
  "kissing-face",
  "hot-face",
  "pleading-face",
  "smiling-face-with-heart-eyes",
  "smiling-face-with-hearts",
  "face-with-tongue",
  "winking-face-with-tongue",
]);

const GESTURE_SLUGS = new Set(["thumbs-up", "folded-hands", "raising-hands", "clapping-hands"]);

const HYPE_SLUGS = new Set([
  "fire",
  "hundred-points",
  "sparkles",
  "party-popper",
  "star-struck",
  "heart-on-fire",
  "collision",
]);

const SKEPTIC_SLUGS = new Set([
  "thinking-face",
  "unamused-face",
  "face-with-rolling-eyes",
  "upside-down-face",
  "shushing-face",
  "neutral-face",
  "grimacing-face",
]);

const getArchetype = (emoji: Emoji): Archetype => {
  if (HEART_SLUGS.has(emoji.slug) || emoji.subgroup === "heart") return "heart";
  if (LAUGHTER_SLUGS.has(emoji.slug)) return "laughter";
  if (CRYING_SLUGS.has(emoji.slug)) return "crying";
  if (FLIRT_SLUGS.has(emoji.slug)) return "flirt";
  if (GESTURE_SLUGS.has(emoji.slug)) return "gesture";
  if (HYPE_SLUGS.has(emoji.slug)) return "hype";
  if (SKEPTIC_SLUGS.has(emoji.slug)) return "skeptic";
  if (emoji.slug.includes("monkey") || emoji.slug.includes("gorilla")) return "primate";
  if (emoji.slug === "clown-face") return "clown";
  return "face";
};

const usageHint = (emoji: Emoji, index = 0) => {
  const raw = emoji.usageContexts[index];
  if (!raw) return emoji.keywords[0] ?? emoji.name.toLowerCase();
  const ctx = raw.trim();
  if (/^[A-Z]{2,}/.test(ctx)) return ctx;
  const lower = ctx.toLowerCase();
  return lower.startsWith("to ") ? lower.slice(3) : lower;
};

const exampleTexts = (emoji: Emoji) => {
  const enriched = getEnrichedExamples(emoji);
  const native = emoji.examples.map((e) => e.text);
  const merged = [...native, ...enriched.map((e) => e.text)];
  return [...new Set(merged)].filter(Boolean);
};

const contextMeta: Record<
  EmojiContextType,
  { shortTitle: string; titleSuffix: string }
> = {
  "from-a-girl": { shortTitle: "From a girl", titleSuffix: "From a Girl" },
  "from-a-guy": { shortTitle: "From a guy", titleSuffix: "From a Guy" },
  whatsapp: { shortTitle: "On WhatsApp", titleSuffix: "on WhatsApp" },
  instagram: { shortTitle: "On Instagram", titleSuffix: "on Instagram" },
  tiktok: { shortTitle: "On TikTok", titleSuffix: "on TikTok" },
};

const buildDescription = (emoji: Emoji, context: EmojiContextType): string => {
  const u = emoji.unicode;
  const name = emoji.name.toLowerCase();
  const key = pageKey(emoji.slug, context);

  const descriptions: Record<EmojiContextType, string[]> = {
    "from-a-girl": [
      `What ${u} usually means when a girl sends it in texting, DMs, or reactions.`,
      `How to read the ${name} emoji when a girl uses ${u} in a private message.`,
      `What a girl might mean when she sends ${u} — with signals and real examples.`,
    ],
    "from-a-guy": [
      `How to understand the ${name} emoji when a guy sends ${u} in texting or social media.`,
      `What ${u} usually signals when a guy sends it in a DM or private chat.`,
      `How to read ${u} from a guy — intent, tone, and conversation patterns.`,
    ],
    whatsapp: [
      `What ${u} means in WhatsApp chats, family groups, and private messages.`,
      `How ${u} reads on WhatsApp — confirmations, warmth, jokes, and reactions.`,
      `WhatsApp meaning of the ${name} emoji ${u} in everyday conversations.`,
    ],
    instagram: [
      `How ${u} is used in Instagram captions, comments, stories, and DMs.`,
      `What ${u} means on Instagram — compliments, reactions, and hype language.`,
      `Instagram use of the ${name} emoji ${u} in comments and story replies.`,
    ],
    tiktok: [
      `What ${u} means on TikTok comments, captions, and Gen Z slang.`,
      `How ${u} shows up on TikTok — meme reactions, irony, and exaggerated tone.`,
      `TikTok meaning of the ${name} emoji ${u} in comment sections.`,
    ],
  };

  return pick(key, descriptions[context], 0);
};

const buildAnswer = (emoji: Emoji, context: EmojiContextType, archetype: Archetype): string => {
  const u = emoji.unicode;
  const name = emoji.name;
  const meaning = cleanMeaning(emoji);
  const usage = usageHint(emoji);
  const usage2 = usageHint(emoji, 1);
  const key = pageKey(emoji.slug, context);
  const detailSnippet = stripPeriod(
    emoji.detailedMeaning.split("\n\n").find((p) => p.length > 40)?.slice(0, 120) ??
      emoji.shortMeaning
  );

  const heartColorNote = () => {
    if (emoji.slug === "purple-heart") return "BTS fans and creative communities also use it as a signature warmth marker.";
    if (emoji.slug === "blue-heart") return "It often reads as steady trust or calm affection rather than fiery romance.";
    if (emoji.slug === "black-heart") return "It can signal dark humor, grief, or alternative aesthetics depending on the chat.";
    if (emoji.slug === "broken-heart") return "It usually marks heartbreak, disappointment, or dramatic emphasis—not always literal sadness.";
    if (emoji.slug === "heart-on-fire") return "It amplifies passion, obsession, or intense approval beyond a plain heart.";
    if (emoji.slug === "mending-heart") return "It often signals healing, moving on, or emotional recovery.";
    return "";
  };

  const answersByArchetype: Record<Archetype, Record<EmojiContextType, string[]>> = {
    heart: {
      "from-a-girl": [
        `When a girl sends ${u}, it usually signals ${meaning}. ${heartColorNote()} Private chats and repeated use carry more weight than a one-off group reply.`,
        `A girl using ${u} often adds warmth around ${usage}. It can be romantic, supportive, or fandom-coded depending on your relationship and the words nearby.`,
        `${u} from a girl commonly expresses ${meaning}. Look at whether she sends it after compliments, goodnight texts, or personal updates—not just polite acknowledgments.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it often reflects ${meaning}. Consistent private use matters more than a single reaction in a busy group chat.`,
        `${u} from a guy can mean affection, appreciation, or sincere support tied to ${usage}. The surrounding message usually clarifies whether it is romantic or friendly.`,
        `If a guy sends ${u} after something personal, it commonly signals ${meaning}. ${heartColorNote()}`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} is a broad warmth signal for ${usage} and ${usage2}. Family groups, close friends, and partners all use it differently.`,
        `WhatsApp users drop ${u} after thanks, encouragement, good news, or emotional updates. ${heartColorNote()}`,
        `In WhatsApp threads, ${u} usually means ${meaning}. Relationship history and chat culture matter more than the emoji alone.`,
      ],
      instagram: [
        `On Instagram, ${u} tags admiration, support, or aesthetic appreciation around ${usage}. Comments, story replies, and DMs each shift the tone.`,
        `Instagram users add ${u} under photos, reels, outfits, and milestone posts when something feels ${usage}. ${heartColorNote()}`,
        `${u} on Instagram often means ${meaning}—especially under visual content where a quick reaction beats a long comment.`,
      ],
      tiktok: [
        `On TikTok, ${u} shows up in captions and comments when creators or fans react to ${usage}. Fandom and aesthetic communities give it extra subtext.`,
        `TikTok comment sections use ${u} for wholesome hype, ship culture, or exaggerated affection around ${usage2}. ${heartColorNote()}`,
        `${u} on TikTok frequently marks ${meaning}, often paired with short internet-native phrases rather than full sentences.`,
      ],
    },
    laughter: {
      "from-a-girl": [
        `When a girl sends ${u}, she is usually laughing at something funny, ridiculous, or playfully embarrassing. It softens teasing so the joke lands warmly.`,
        `${u} from a girl often means ${meaning}. Multiple reactions in a row usually mean she found it genuinely hilarious.`,
        `If a girl drops ${u} after your message, she likely thinks the moment is ${usage}—not that she is upset.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it commonly signals ${meaning}—a joke landed, a meme hit, or a moment felt absurd in a good way.`,
        `${u} from a guy is usually light teasing or shared humor around ${usage}. Tone stays casual unless the words turn serious.`,
        `A guy using ${u} after a voice note, screenshot, or story usually means he is reacting with ${meaning}.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} still means something is funny or playfully ridiculous. It is common after jokes, teasing, and funny photos in family and friend groups.`,
        `WhatsApp chats use ${u} to show ${meaning} without typing a full reply—especially after voice notes or long stories.`,
        `In WhatsApp groups, ${u} often follows ${usage}. It keeps banter friendly when the topic is clearly humorous.`,
      ],
      instagram: [
        `On Instagram, ${u} appears under reels, memes, and chaotic posts when something is ${usage}. It is a fast deadpan laugh reaction.`,
        `Instagram commenters use ${u} when a caption, edit, or fail clip feels ${meaning}. It signals amused disbelief more than sadness.`,
        `${u} on Instagram usually reacts to humor tied to ${usage2}—especially in meme-heavy comment threads.`,
      ],
      tiktok: [
        `On TikTok, ${u} often means "I'm dead" from laughing—especially under chaotic, cringe, or unexpectedly funny clips. ${emoji.slug === "skull" ? "It is core Gen Z comment slang." : "Some communities prefer 💀 for the same deadpan tone."}`,
        `TikTok users spam ${u} when a video nails ${usage} or ${usage2}. The tone is exaggerated and meme-native.`,
        `${u} in TikTok comments signals ${meaning}, usually with phrases like "not me", "help", or "I can't".`,
      ],
    },
    crying: {
      "from-a-girl": [
        `When a girl sends ${u}, it often means strong emotion—laughing hard, feeling overwhelmed, or playful drama. It is flexible and context-heavy.`,
        `${u} from a girl can express ${meaning} or exaggerated reaction. Read the words around it before assuming she is sad.`,
        `If a girl stacks ${u}, she is usually emphasizing intensity around ${usage}, not reporting literal tears.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it may show intense reaction—humor, embarrassment, or genuine feeling. Modern texting uses it for more than sadness.`,
        `${u} from a guy commonly signals ${meaning}. Private chats make the tone feel more personal than public comments.`,
        `A guy using ${u} after something ${usage} is usually amplifying emotion for effect, not asking for comfort.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} can mean laughing, sympathy, overwhelm, or dramatic emphasis. Voice-note reactions and family chats use it constantly.`,
        `WhatsApp users send ${u} after long stories, cute updates, or absurd jokes. Meaning tracks ${usage} in the same message.`,
        `In WhatsApp, ${u} often pairs with laughing words rather than sad ones—${meaning}.`,
      ],
      instagram: [
        `On Instagram, ${u} reacts to wholesome, shocking, or painfully relatable content. It signals ${meaning} in comments and DMs.`,
        `Creators and followers use ${u} under emotional reels, transformations, and chaotic humor when something hits ${usage}.`,
        `${u} on Instagram usually shows exaggerated feeling around ${usage2}, not a formal announcement of sadness.`,
      ],
      tiktok: [
        `On TikTok, ${u} frequently means extreme reaction—hilarious, embarrassing, wholesome, or overwhelming. It often sits beside 💀 in comment threads.`,
        `TikTok commenters use ${u} when a clip is too real, too funny, or too chaotic. Tone is meme-exaggerated.`,
        `${u} on TikTok signals ${meaning}, especially under second-hand embarrassment or emotional plot twists.`,
      ],
    },
    flirt: {
      "from-a-girl": [
        `When a girl sends ${u}, it often adds playfulness, softness, or flirty subtext around ${usage}. The chat usually already feels personal.`,
        `${u} from a girl can make a request, compliment, or tease feel cuter and less direct—${meaning}.`,
        `If a girl uses ${u} privately after something about you, it commonly signals ${meaning} with warm or shy energy.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it often means flirting, confidence, or teasing tied to ${usage}. Private messages carry more intent than group replies.`,
        `${u} from a guy can soften a bold line and make the tone feel ${meaning}. Look for consistency across your thread.`,
        `A guy dropping ${u} after a compliment or inside joke usually signals playful interest—not a neutral acknowledgment.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} spices up private chats with ${usage} energy. It is more common between people who already banter freely.`,
        `WhatsApp users add ${u} to apologies, compliments, and late-night messages when the tone is ${meaning}.`,
        `In WhatsApp, ${u} often appears with short affectionate lines rather than logistics—${usage2} context helps clarify intent.`,
      ],
      instagram: [
        `On Instagram, ${u} shows up in story replies, photo comments, and DMs when someone reacts with ${meaning}.`,
        `Instagram users pair ${u} with praise like "cute", "stunning", or "need this" when the content fits ${usage}.`,
        `${u} on Instagram can be public hype or private flirtation depending on whether it is a comment or DM.`,
      ],
      tiktok: [
        `On TikTok, ${u} lands in thirst traps, crush edits, and playful comment threads where tone is ${meaning}.`,
        `Creators and viewers use ${u} under clips about ${usage} with internet-native captions—often ironic but still flirty.`,
        `${u} on TikTok frequently exaggerates ${meaning} for comedic or parasocial effect, not always literal intent.`,
      ],
    },
    gesture: {
      "from-a-girl": [
        `When a girl sends ${u}, it usually functions as a clear gesture around ${usage}. The emoji replaces a short phrase in fast chats.`,
        `${u} from a girl commonly means ${meaning}. Watch whether she adds words or sends it alone—that changes how direct it feels.`,
        `If a girl uses ${u} after plans or favors, it often confirms ${usage} with efficient, friendly tone.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it typically signals ${meaning}—a quick agreement, thanks, or celebration without extra wording.`,
        `${u} from a guy is often practical: ${usage}. In private chats it can feel warmer than in a large group.`,
        `A guy using ${u} after instructions or good news usually means ${meaning}, not a deep emotional statement.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} is a workhorse for ${usage} and ${usage2}. Many chats treat it as efficient confirmation.`,
        `WhatsApp users send ${u} after plans, favors, and updates. ${emoji.slug === "thumbs-up" ? "A standalone 👍 can feel blunt after long emotional messages." : "Tone still depends on relationship norms."}`,
        `In WhatsApp groups, ${u} commonly means ${meaning}—fast, visible, and easy to scan in busy threads.`,
      ],
      instagram: [
        `On Instagram, ${u} works as a quick reaction on posts about ${usage}. It is shorter than typing a full compliment.`,
        `Commenters use ${u} under achievements, tutorials, and lifestyle posts when something deserves ${meaning}.`,
        `${u} on Instagram often signals approval around ${usage2} without starting a longer conversation.`,
      ],
      tiktok: [
        `On TikTok, ${u} appears in tutorial comments, challenge replies, and "we did it" moments tied to ${usage}.`,
        `Viewers drop ${u} to agree with a creator's point or celebrate ${usage2} in a clip—usually casual hype.`,
        `${u} on TikTok means ${meaning} in fast-moving comment feeds where brevity wins.`,
      ],
    },
    hype: {
      "from-a-girl": [
        `When a girl sends ${u}, she often thinks something is impressive, attractive, or tied to ${meaning}.`,
        `${u} from a girl can hype your outfit, achievement, or idea when the topic is ${usage}. Private DMs may feel more personal than public comments.`,
        `If a girl reacts with ${u}, she is usually amplifying ${meaning} around something visual or exciting.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it usually means he thinks something is ${meaning}—a compliment, not a neutral reply.`,
        `${u} from a guy commonly signals ${meaning}. In DMs it can read flirty; in group chats it is often pure hype.`,
        `A guy dropping ${u} on a photo, track, or win usually means ${meaning} with enthusiastic tone.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} celebrates good news, impressive photos, and ${usage}. Family and friend groups use it as shared hype language.`,
        `WhatsApp chats fire ${u} after wins, recipes, workouts, or hot takes—${meaning}.`,
        `In WhatsApp, ${u} is a visual exclamation for ${usage2}, especially when nobody wants to type a paragraph.`,
      ],
      instagram: [
        `On Instagram, ${u} is classic compliment language for photos, reels, outfits, and edits—${meaning}.`,
        `Creators expect ${u} under high-energy content about ${usage}. It is one of the fastest approval signals in comments.`,
        `${u} on Instagram marks ${usage2} content as impressive or trending without needing a long reply.`,
      ],
      tiktok: [
        `On TikTok, ${u} hypes transitions, fits, edits, and viral moments—${meaning}. Comment sections treat it as default praise.`,
        `TikTok users spam ${u} when a clip is ${usage} or unexpectedly clean. Tone is loud, casual, and meme-friendly.`,
        `${u} on TikTok signals ${meaning}, often beside "insane", "clean", or "need this" energy.`,
      ],
    },
    skeptic: {
      "from-a-girl": [
        `When a girl sends ${u}, she may be doubting, teasing, or thinking out loud—${meaning}. Sarcasm is common.`,
        `${u} from a girl can add side-eye, curiosity, or playful suspicion around ${usage}. Read the sentence it follows.`,
        `If a girl uses ${u} after a bold claim, it often signals ${meaning} rather than full agreement.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it often means skepticism, irony, or "let me think about that"—${meaning}.`,
        `${u} from a guy can soften a challenge or add dry humor when the topic is ${usage}.`,
        `A guy using ${u} after a hot take usually signals ${meaning}, not enthusiastic support.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} shows up when someone side-eyes a plan, joke, or excuse—${meaning}.`,
        `Group chats use ${u} to react to unbelievable stories or mild drama around ${usage}.`,
        `On WhatsApp, ${u} often punctuates a skeptical reply instead of writing a full disagreement.`,
      ],
      instagram: [
        `On Instagram, ${u} reacts to bold claims, staged photos, or chaotic captions with ${meaning}.`,
        `Commenters use ${u} when a post feels ironic, debatable, or too good to be true—${usage} context helps.`,
        `${u} on Instagram is often a low-effort skeptical reaction in meme and commentary threads.`,
      ],
      tiktok: [
        `On TikTok, ${u} fits reaction videos, call-outs, and "wait what" moments—${meaning}.`,
        `Users comment ${u} when a plot twist, rant, or tutorial feels ${usage}. Tone can be sincere or sarcastic.`,
        `${u} on TikTok frequently marks disbelief or second-guessing in fast comment culture.`,
      ],
    },
    primate: {
      "from-a-girl": [
        `When a girl sends ${u}, she is often playfully saying "I didn't see that" or dodging accountability—${meaning}.`,
        `${u} from a girl can add mischievous humor around ${usage} without a long explanation.`,
        `If a girl uses ${u} after gossip or a reveal, it usually signals amused denial or "pretend I didn't notice."`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it commonly means joking denial, shyness, or "I shouldn't have seen that"—${meaning}.`,
        `${u} from a guy is usually meme humor tied to ${usage}, not a serious statement.`,
        `A guy dropping ${u} after an awkward screenshot often signals playful embarrassment.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} works as a light "none of my business" reaction after juicy updates or photos.`,
        `Family and friend groups use ${u} when someone shares drama and others pretend not to watch—${meaning}.`,
        `On WhatsApp, ${u} keeps teasing playful around ${usage} without escalating conflict.`,
      ],
      instagram: [
        `On Instagram, ${u} reacts to scandalous stories, glow-ups, or obvious subtweets with humorous denial.`,
        `Commenters use ${u} when a post is clearly directed at someone and viewers play along—${usage} energy.`,
        `${u} on Instagram signals ${meaning} in gossip-heavy comment threads.`,
      ],
      tiktok: [
        `On TikTok, ${u} is meme shorthand for "I saw it but I'm not saying anything"—${meaning}.`,
        `Users spam ${u} under drama recaps, exposed clips, and chaotic confessions about ${usage}.`,
        `${u} on TikTok fits ironic distance—laughing while pretending not to engage.`,
      ],
    },
    clown: {
      "from-a-girl": [
        `When a girl sends ${u}, she may be calling someone foolish, mocking herself, or joking about a bad take—${meaning}.`,
        `${u} from a girl can be self-deprecating humor around ${usage} rather than a direct insult.`,
        `If a girl uses ${u} after a failed plan, it often signals playful "we messed up" energy.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it often means "that's clown behavior"—${meaning}—usually as a joke.`,
        `${u} from a guy can roast a take, a fail, or his own mistake with ${usage} humor.`,
        `A guy sending ${u} in a group chat is typically banter, not a serious character attack.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} lands after bad decisions, obvious lies, or self-owned mistakes in friend groups.`,
        `Chats use ${u} to label ridiculous moments around ${usage} without writing a full roast.`,
        `On WhatsApp, ${u} keeps criticism playful when everyone knows the tone is ${meaning}.`,
      ],
      instagram: [
        `On Instagram, ${u} comments on overedited photos, bad takes, or ironic self-owns—${meaning}.`,
        `Users reply with ${u} when a caption or stunt is clearly ${usage} for comedic effect.`,
        `${u} on Instagram is usually meme criticism, not sincere bullying.`,
      ],
      tiktok: [
        `On TikTok, ${u} is standard commentary for cringe, delusion, or spectacular fails—${meaning}.`,
        `Comment sections use ${u} when someone becomes the joke in a ${usage} clip.`,
        `${u} on TikTok signals ironic mockery in fast, exaggerated comment culture.`,
      ],
    },
    face: {
      "from-a-girl": [
        `When a girl sends ${u}, it usually reflects ${meaning}. Tone depends on whether the chat is casual, supportive, or flirty.`,
        `${u} from a girl often appears when the moment fits ${usage}—the surrounding words do most of the work.`,
        `If a girl uses ${u} repeatedly in your private thread, it commonly signals ${meaning} with familiar, relaxed energy.`,
      ],
      "from-a-guy": [
        `When a guy sends ${u}, it typically maps to ${meaning} in the current conversation—not a fixed rule for every guy.`,
        `${u} from a guy is often a quick emotional shorthand for ${usage}. Private use feels more intentional than a group reaction.`,
        `A guy dropping ${u} after a personal update usually aligns with ${meaning}, especially when the message already sounds warm or playful.`,
      ],
      whatsapp: [
        `On WhatsApp, ${u} helps friends and family express ${usage} without typing more. Group norms shape how strong it reads.`,
        `WhatsApp users choose ${u} when a message is about ${usage2}—${detailSnippet}.`,
        `In WhatsApp, ${u} commonly means ${meaning}, whether the chat is logistical, emotional, or full of memes.`,
      ],
      instagram: [
        `On Instagram, ${u} works in comments, story replies, and captions tied to ${usage}. It is a visual tone marker for public posts.`,
        `Followers use ${u} when content matches ${meaning}—especially on reels and photo dumps.`,
        `${u} on Instagram signals quick approval when a post is clearly about ${usage2}.`,
      ],
      tiktok: [
        `On TikTok, ${u} shows up when videos hit ${usage} or ${usage2} nerves—${meaning}.`,
        `Commenters use ${u} with short slang phrases when a clip feels ${meaning} in a Gen Z feed.`,
        `${u} on TikTok is usually an exaggerated reaction, not a formal statement about ${name.toLowerCase()}.`,
      ],
    },
  };

  return pick(key, answersByArchetype[archetype][context], 1);
};

const buildSignals = (emoji: Emoji, context: EmojiContextType, archetype: Archetype): string[] => {
  const u = emoji.unicode;
  const name = emoji.name;
  const usage = usageHint(emoji);
  const usage2 = usageHint(emoji, 1);
  const keyword = emoji.keywords[0] ?? usage;
  const key = pageKey(emoji.slug, context);
  const ex = exampleTexts(emoji);
  const meaning = cleanMeaning(emoji);

  const contextSignals: Record<EmojiContextType, string[]> = {
    "from-a-girl": [
      `She sends ${u} when the topic involves ${usage} or ${usage2}`,
      `Her ${name.toLowerCase()} emoji appears in private chats more than cold group replies`,
      ex[0] ? `Message rhythm matches examples like "${ex[0]}"` : `The bubble already sounds personal before ${u} appears`,
      `Repeated ${u} in your thread signals more than a polite one-off`,
      `She pairs ${u} with wording about ${keyword}, not just logistics`,
    ],
    "from-a-guy": [
      `He uses ${u} when reacting to ${usage} or something visual in your chat`,
      `Private ${name.toLowerCase()} emoji use carries more weight than a public comment`,
      ex[1] ? `Tone aligns with "${ex[1]}"` : `His message sounds intentional, not accidental`,
      `He does not only drop ${u} in large stranger-heavy group chats`,
      `${u} follows personal topics—${usage2}—rather than scheduling-only texts`,
    ],
    whatsapp: [
      `Shows up mid-conversation when the topic is ${usage}`,
      `WhatsApp groups treat ${u} differently—family vs friends changes the read`,
      `Often follows voice notes, photos, or long updates about ${usage2}`,
      `Standalone ${u} reads shorter than ${u} plus a full sentence`,
      `Matches how your chat already uses ${name.toLowerCase()} reactions`,
    ],
    instagram: [
      `Comment or story reply under content about ${usage}`,
      `Paired with short praise tied to ${keyword}`,
      `Public ${u} is often casual; DMs may feel more personal`,
      ex[2] ? `Similar comment energy to "${ex[2]}"` : `Fits posts where ${usage2} is the obvious theme`,
      `Used when a visual post makes ${meaning} the instant reaction`,
    ],
    tiktok: [
      `Commenters drop ${u} on clips about ${usage} or ${usage2}`,
      `Shows up with meme phrases—not formal sentences`,
      `Tone is exaggerated; irony is common for ${name.toLowerCase()}`,
      ex[0] ? `Comment energy like "${ex[0]}"` : `Fits ${archetype} humor in fast-scroll feeds`,
      `May read differently to viewers outside TikTok-native slang`,
    ],
  };

  const pool = contextSignals[context];
  const start = Math.abs(hash(key)) % pool.length;
  return [...pool.slice(start), ...pool.slice(0, start)].slice(0, 3);
};

const adaptExample = (text: string, context: EmojiContextType, emoji: Emoji): string => {
  const u = emoji.unicode;
  if (text.includes(u)) return text;

  const suffixes: Record<EmojiContextType, string[]> = {
    "from-a-girl": [`${text} ${u}`, `${text.replace(/\.$/, "")} ${u}`],
    "from-a-guy": [`${text} ${u}`, `Had to say it — ${text.toLowerCase()} ${u}`],
    whatsapp: [`${text} ${u}`, `${text.replace(/\.$/, "")} ${u}`],
    instagram: [`${text} ${u}`, `${text.split(" ").slice(0, 4).join(" ")} ${u}`],
    tiktok: [`${text} ${u}`, `not me ${text.toLowerCase()} ${u}`],
  };

  return pick(pageKey(emoji.slug, context), suffixes[context], 7);
};

const contextualizeExample = (
  text: string,
  context: EmojiContextType,
  emoji: Emoji,
  index: number
): string => {
  const u = emoji.unicode;
  const usage = usageHint(emoji);
  const key = pageKey(emoji.slug, context);

  if (text.includes(u)) {
    const prefixes: Record<EmojiContextType, string[]> = {
      "from-a-girl": ["", "okay but ", "literally "],
      "from-a-guy": ["", "lowkey ", "had to say — "],
      whatsapp: ["", "quick one — ", ""],
      instagram: ["", "this post — ", "need this — "],
      tiktok: ["not me ", "the way ", "why is "],
    };
    const prefix = pick(key, prefixes[context], index + 3);
    if (!prefix) return text;
    let body = text.replace(u, "").trim();
    if (prefix && body) body = lowerFirst(body);
    const merged = `${prefix}${body} ${u}`.replace(/\s+/g, " ").trim();
    return merged.charAt(0).toUpperCase() + merged.slice(1);
  }

  return adaptExample(text, context, emoji);
};

const buildExamples = (emoji: Emoji, context: EmojiContextType, archetype: Archetype): string[] => {
  const u = emoji.unicode;
  const usage = usageHint(emoji);
  const usage2 = usageHint(emoji, 1);
  const keyword = emoji.keywords[0] ?? emoji.name.toLowerCase();
  const key = pageKey(emoji.slug, context);
  const native = emoji.examples.map((e) => e.text);
  const enriched = getEnrichedExamples(emoji).map((e) => e.text);
  const source = [...new Set([...native, ...enriched])];

  const contextTemplates: Record<EmojiContextType, string[]> = {
    "from-a-girl": [
      `You would love this ${u}`,
      `Still thinking about ${keyword} ${u}`,
      `Had to send this ${u}`,
    ],
    "from-a-guy": [
      `Had to tell you ${u}`,
      `This ${keyword} moment ${u}`,
      `No cap ${u}`,
    ],
    whatsapp: [
      `Quick update ${u}`,
      `About that ${usage} thing ${u}`,
      `FYI ${u}`,
    ],
    instagram: [
      `This ${keyword} post ${u}`,
      `Needed on my feed ${u}`,
      `The ${usage2} vibe ${u}`,
    ],
    tiktok: [
      `This ${keyword} clip ${u}`,
      `Not me relating ${u}`,
      `The ${usage} part ${u}`,
    ],
  };

  const templates = contextTemplates[context].map((t) => t.replace("keyword", keyword));

  if (source.length >= 2) {
    const start = Math.abs(hash(key)) % source.length;
    const rotated = [...source.slice(start), ...source.slice(0, start)];
    const fromData = rotated.slice(0, 2).map((t, i) => contextualizeExample(t, context, emoji, i));
    const fromTemplate = pick(key, templates, 8);
    return [...new Set([...fromData, fromTemplate])].slice(0, 3);
  }

  const fallbackByContext: Record<EmojiContextType, Record<Archetype, string[]>> = {
    "from-a-girl": {
      heart: [`Goodnight ${u}`, `That meant a lot ${u}`, `So proud of you ${u}`],
      laughter: [`You're impossible ${u}`, `I can't ${u}`, `Stoppp ${u}`],
      crying: [`This is so cute ${u}`, `Why are you like this ${u}`, `I'm done ${u}`],
      flirt: [`Don't be shy ${u}`, `Maybe later ${u}`, `You're trouble ${u}`],
      gesture: [`Thank you ${u}`, `Perfect ${u}`, `See you then ${u}`],
      hype: [`You ate that ${u}`, `This is insane ${u}`, `So good ${u}`],
      skeptic: [`Sure about that ${u}`, `Interesting ${u}`, `Hmm ${u}`],
      primate: [`I didn't see anything ${u}`, `No comment ${u}`, `Pretend I wasn't here ${u}`],
      clown: [`We're clowns ${u}`, `That was a choice ${u}`, `I can't defend this ${u}`],
      face: [`That's so you ${u}`, `Needed that ${u}`, `Okay wow ${u}`],
    },
    "from-a-guy": {
      heart: [`Made my day ${u}`, `Thinking of you ${u}`, `You killed it ${u}`],
      laughter: [`Bro ${u}`, `I'm weak ${u}`, `No way ${u}`],
      crying: [`Too real ${u}`, `That's tough ${u}`, `I felt that ${u}`],
      flirt: [`You looked great ${u}`, `Miss me? ${u}`, `Bold ${u}`],
      gesture: [`Sounds good ${u}`, `Appreciate it ${u}`, `Let's go ${u}`],
      hype: [`That fit ${u}`, `Huge W ${u}`, `Clean ${u}`],
      skeptic: [`Bold claim ${u}`, `You sure? ${u}`, `Alright then ${u}`],
      primate: [`Didn't see that ${u}`, `My bad ${u}`, `Nothing happened ${u}`],
      clown: [`We lost ${u}`, `Terrible idea ${u}`, `Certified moment ${u}`],
      face: [`Fair point ${u}`, `Respect ${u}`, `Needed to say it ${u}`],
    },
    whatsapp: {
      heart: [`Thank you so much ${u}`, `Miss you ${u}`, `Congratulations ${u}`],
      laughter: [`That voice note ${u}`, `You're wild ${u}`, `I can't breathe ${u}`],
      crying: [`Stop ${u}`, `I'm actually crying ${u}`, `Too much ${u}`],
      flirt: [`See you soon ${u}`, `Don't tell anyone ${u}`, `Cutee ${u}`],
      gesture: [`Got it ${u}`, `See you at 7 ${u}`, `That works ${u}`],
      hype: [`Huge news ${u}`, `Well done ${u}`, `Looks amazing ${u}`],
      skeptic: [`Really though? ${u}`, `Not convinced ${u}`, `We'll see ${u}`],
      primate: [`I saw nothing ${u}`, `Let's not talk about it ${u}`, `Moving on ${u}`],
      clown: [`What a mess ${u}`, `We tried ${u}`, `That plan ${u}`],
      face: [`On my way ${u}`, `Thanks again ${u}`, `Love this ${u}`],
    },
    instagram: {
      heart: [`This photo ${u}`, `Need this energy ${u}`, `So beautiful ${u}`],
      laughter: [`The caption ${u}`, `Why is this so accurate ${u}`, `Help ${u}`],
      crying: [`I'm sobbing ${u}`, `Too wholesome ${u}`, `The ending ${u}`],
      flirt: [`Stunning ${u}`, `Okay model ${u}`, `Need this fit ${u}`],
      gesture: [`Well deserved ${u}`, `Huge congrats ${u}`, `Approved ${u}`],
      hype: [`This reel ${u}`, `Outfit ${u}`, `Edit goes crazy ${u}`],
      skeptic: [`The math isn't mathing ${u}`, `Bold caption ${u}`, `Sure ${u}`],
      primate: [`I peeped that ${u}`, `No words ${u}`, `Caught in 4K ${u}`],
      clown: [`The audacity ${u}`, `Self-own ${u}`, `Main character moment ${u}`],
      face: [`Mood ${u}`, `Needed this post ${u}`, `So relatable ${u}`],
    },
    tiktok: {
      heart: [`This duo ${u}`, `I ship it ${u}`, `Soft vibes ${u}`],
      laughter: [`The ending ${u}`, `Not him doing that ${u}`, `I'm deceased ${u}`],
      crying: [`I'm sobbing ${u}`, `This hit ${u}`, `Why is this me ${u}`],
      flirt: [`The tension ${u}`, `Down bad ${u}`, `He knows ${u}`],
      gesture: [`W tutorial ${u}`, `Take my money ${u}`, `Done ${u}`],
      hype: [`This goes hard ${u}`, `No skips ${u}`, `Elite ${u}`],
      skeptic: [`The logic ${u}`, `Make it make sense ${u}`, `I have questions ${u}`],
      primate: [`Not me watching ${u}`, `Pretend I didn't see ${u}`, `Caught ${u}`],
      clown: [`The delusion ${u}`, `Clown behavior ${u}`, `We lost the plot ${u}`],
      face: [`This is so real ${u}`, `Core memory ${u}`, `Rent free ${u}`],
    },
  };

  const pool = fallbackByContext[context][archetype];
  const customized = pool.map((line) =>
    line.includes(name) ? line : line.replace(u, u)
  );

  const extra = pick(key, [
    `${usage.charAt(0).toUpperCase() + usage.slice(0, 40)} ${u}`,
    `${emoji.keywords[0] ?? "mood"} check ${u}`,
    `Exactly the vibe ${u}`,
  ], 9);

  return [...new Set([...customized.slice(0, 2), extra])].slice(0, 3);
};

const buildCaution = (emoji: Emoji, context: EmojiContextType, archetype: Archetype): string => {
  const u = emoji.unicode;
  const key = pageKey(emoji.slug, context);
  const misunderstandings = emoji.misunderstandings
    .filter((m) => !m.toLowerCase().includes("context matters"))
    .map((m) => stripPeriod(m));
  const whenNot = getUniqueWhenNotToUse(emoji);

  const contextCautions: Record<EmojiContextType, string[]> = {
    "from-a-girl": [
      `Do not read ${u} as automatically romantic or serious. One emoji rarely defines intent without the full conversation.`,
      `A single ${u} after a polite thank-you can still be friendly. Look for patterns across messages, not one bubble.`,
      misunderstandings[0]
        ? `${u} caveat: ${lowerFirst(misunderstandings[0])}.`
        : `Her tone varies by relationship—friends, family, and partners all use ${u} differently.`,
    ],
    "from-a-guy": [
      `A standalone ${u} after logistics can be neutral. Consistency and privacy matter more than one message.`,
      `${u} from a guy is not a confession by itself. Read the words around it and how often it appears.`,
      whenNot[0] ?? `Some audiences read ${u} differently across age groups—ask if tone feels unclear.`,
    ],
    whatsapp: [
      `WhatsApp tone varies by culture and family. Relationship history matters more than ${u} alone.`,
      `In emotional threads, ${u} without words may feel too short. Add a line when stakes are high.`,
      misunderstandings[0]
        ? `On WhatsApp, remember: ${lowerFirst(misunderstandings[0])}.`
        : `Group chats and private chats use ${u} with very different levels of intimacy.`,
    ],
    instagram: [
      `Public comments with ${u} are often casual hype. Private DMs may carry more personal intent.`,
      `${u} under a viral post is low-commitment praise—not always a deep statement.`,
      whenNot[0] ?? `Avoid ${u} on sensitive posts where humor could read as dismissive.`,
    ],
    tiktok: [
      `${u} on TikTok is often ironic or exaggerated. It may confuse audiences outside meme-native spaces.`,
      `Gen Z comment culture shifts fast—${u} here may not match how older relatives use it on WhatsApp.`,
      misunderstandings[0]
        ? `TikTok users should note: ${lowerFirst(misunderstandings[0])}.`
        : `Sarcasm is common in TikTok replies; do not take every ${u} literally.`,
    ],
  };

  const archetypeExtra: Partial<Record<Archetype, string>> = {
    heart: `Color and fandom context change how ${u} lands—${emoji.slug.replace(/-/g, " ")} has its own subtext.`,
    crying: `${u} does not always mean sadness in modern texting. Read the surrounding words first.`,
    laughter: `${u} can feel dismissive in serious conversations. Skip it when someone shares bad news.`,
    gesture:
      emoji.slug === "thumbs-up"
        ? `A lone ${u} after a long emotional message can feel blunt. Add a few words when tone matters.`
        : undefined,
    skeptic: `${u} can sound rude if the topic is sincere. Use words to soften disagreement.`,
  };

  const options = [...contextCautions[context]];
  if (archetypeExtra[archetype]) options.push(archetypeExtra[archetype]!);

  return pick(key, options, 11);
};

export const buildUniqueContextPage = (
  emoji: Emoji,
  context: EmojiContextType
): EmojiContextPage => {
  const meta = contextMeta[context];
  const archetype = getArchetype(emoji);
  const otherContexts = CONTEXTS.filter((c) => c !== context);

  return {
    emojiSlug: emoji.slug,
    context,
    title: `${emoji.name} Emoji Meaning ${meta.titleSuffix}`,
    shortTitle: meta.shortTitle,
    description: buildDescription(emoji, context),
    answer: buildAnswer(emoji, context, archetype),
    signals: buildSignals(emoji, context, archetype),
    examples: buildExamples(emoji, context, archetype),
    caution: buildCaution(emoji, context, archetype),
    relatedContexts: otherContexts.slice(0, 3),
  };
};
