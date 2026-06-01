import type { Emoji } from "@/data/emojis";
import { buildBatch, cleanKeywords, humanizeSubgroup, pick, pickN } from "./shared";

const batchId = "07-smileys-emotion";

const subgroupAngles: Record<string, { tone: string; texting: string; social: string }> = {
  "face-smiling": { tone: "happiness and warmth", texting: "greetings and good news", social: "positive captions and celebrations" },
  "face-affection": { tone: "love and affection", texting: "flirting, gratitude, and care", social: "relationship and family posts" },
  "face-tongue": { tone: "playfulness and teasing", texting: "jokes and light sarcasm", social: "memes and silly reels" },
  "face-hand": { tone: "surprise and facepalm reactions", texting: "react to shocking or awkward news", social: "reaction content and story replies" },
  "face-neutral-skeptical": { tone: "skepticism or indifference", texting: "side-eye and 'really?' energy", social: "commentary and hot takes" },
  "face-sleepy": { tone: "tiredness and boredom", texting: "late nights and low energy", social: "relatable fatigue memes" },
  "face-unwell": { tone: "sickness and discomfort", texting: "cancel plans when ill", social: "health updates with friends" },
  "face-hat": { tone: "party and costume fun", texting: "event invites and celebrations", social: "Halloween and themed parties" },
  "face-glasses": { tone: "cool, smart, or confident vibes", texting: "flex or self-deprecating nerd humor", social: "outfit and persona posts" },
  "face-concerned": { tone: "worry and empathy", texting: "check on friends", social: "supportive comment sections" },
  "face-negative": { tone: "anger and frustration", texting: "vent carefully — tone escalates fast", social: "frustration memes and rants" },
  "face-costume": { tone: "fantasy and spooky fun", texting: "seasonal jokes", social: "cosplay and Halloween feeds" },
  "cat-face": { tone: "cat-like reactions", texting: "pet parent humor", social: "cat meme culture" },
  "monkey-face": { tone: "see-no-evil style humor", texting: "embarrassment and secrecy jokes", social: "reaction images" },
  heart: { tone: "love and emotional warmth", texting: "affection across relationships", social: "love announcements and support" },
  emotion: { tone: "strong feelings and symbols", texting: "dramatic emphasis", social: "aesthetic and emotional posts" },
};

export const generateSmileysBatch = (emoji: Emoji) => {
  const u = emoji.unicode;
  const name = emoji.name;
  const label = name.toLowerCase();
  const angle = subgroupAngles[emoji.subgroup] ?? {
    tone: "emotion and expression",
    texting: "add feeling to short messages",
    social: "reactions and captions",
  };
  const kw = cleanKeywords(emoji)[0] ?? label;

  return buildBatch(emoji, batchId, {
    searchTitle: `${name} Emoji (${u}) Meaning in Texting, Memes, and Reactions`,
    snippetAnswer: `${u} ${name} conveys ${angle.tone}. In texting it ${angle.texting}; on social media it fits ${angle.social}. Tone shifts with who sends it and what came before.`,
    detailedParagraphs: pickN(emoji.slug, [
      [
        `${name} (${u}) is part of the ${humanizeSubgroup(emoji.subgroup)} family — one of the most searched emoji groups because small face changes carry big tone shifts.`,
        `A single ${u} after a short reply can soften criticism, show sincerity, or signal sarcasm depending on your relationship with the reader.`,
        `Gen Z, millennial, and boomer chats sometimes interpret ${u} differently — when stakes are high, add explicit words beside the emoji.`,
      ],
      [
        `Reaction culture on TikTok and Instagram normalized ${u} in comment sections where typing full sentences feels too formal.`,
        `WhatsApp voice-note threads use ${u} to tell the sender how their audio landed before the chat moves on.`,
        `${name} rarely means only one thing across cultures; eyebrow and mouth details change platform renders slightly.`,
      ],
      [
        `Search traffic for "${label} emoji meaning" spikes when ${u} trends in a viral clip — newcomers need context for ${kw}.`,
        `Avoid ${u} when someone shares grief, medical results, or job loss unless you know they prefer emoji-heavy comfort.`,
        `Compare similar faces on this site if ${u} feels too strong or too weak for your message.`,
      ],
    ], 1, 0)[0],
    textingMeaning: pick(emoji.slug, [
      `In texting, ${u} usually adds ${angle.tone} to a short line. Example: "${pickN(emoji.slug, [`Thanks ${u}`, `Wow ${u}`, `Sure ${u}`, `I feel that ${u}`], 1, 8)[0]}".`,
      `${u} can rescue a blunt sentence — or make it sound sarcastic. Read the full thread before sending.`,
      `Close friends send ${u} alone as a complete reaction to memes and screenshots.`,
    ], 1),
    socialMeaning: pick(emoji.slug, [
      `${u} tags ${angle.social}. Creators use it in captions when the mood matches ${angle.tone}.`,
      `Live comment sections flood ${u} during funny or emotional moments — speed beats paragraphs.`,
      `Story replies with ${u} acknowledge the poster without starting a long DM.`,
    ], 2),
    caution: pick(emoji.slug, [
      `${u} alone may feel dismissive in serious threads about money, health, or conflict.`,
      `Work Slack: ${u} is OK with peers who emoji freely — not with executives you do not know.`,
      `Sarcasm misreads happen — clarify if ${u} is joking.`,
    ], 3),
    examples: pickN(
      emoji.slug,
      [
        { context: "Reaction", text: `That video ${u}` },
        { context: "Reply", text: `Fair point ${u}` },
        { context: "Mood", text: `Today summed up ${u}` },
        { context: "Support", text: `Here for you ${u}` },
        { context: "Joke", text: `Caught me ${u}` },
      ],
      5,
      4
    ),
    contextBlocks: pickN(
      emoji.slug,
      [
        { title: "Private chats", body: `${u} softens teasing and shows empathy between close friends.` },
        { title: "Public comments", body: `${u} is a fast reaction on viral posts when quotes feel too heavy.` },
        { title: "Cross-generational gaps", body: `Older relatives may read ${u} literally; younger cousins may read it as irony.` },
      ],
      3,
      5
    ),
    searchIntents: [`${label} emoji meaning`, `${u} meaning in texting`, `${name} emoji copy paste`, `what does ${u} mean from a guy`, `what does ${u} mean from a girl`],
    whenNotToUse: [`Avoid ${u} when someone shares bad news unless you know they want emoji comfort.`, `${u} can read unprofessional in formal email.`],
    faqs: pickN(
      emoji.slug,
      [
        { question: `What does ${u} mean in texting?`, answer: `Usually ${angle.tone} — but sender and context change it. Check the messages around it.` },
        { question: `Is ${u} sarcastic?`, answer: `Sometimes. Sincere chats use ${u} straight; meme threads use it ironically.` },
      ],
      2,
      6
    ),
  });
};
