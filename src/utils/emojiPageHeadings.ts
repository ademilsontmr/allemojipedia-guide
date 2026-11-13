import type { Emoji } from "@/data/emojis";

export type EmojiPageHeadings = {
  quick: string;
  texting: string;
  meaning: string;
  contexts: string;
  howTo: string;
  examples: string;
  intent: string;
  searches: string;
  whenNot: string;
  faqs: string;
  facts: string;
  related: string;
};

export const getEmojiPageHeadings = (emoji: Emoji): EmojiPageHeadings => {
  const u = emoji.unicode;
  const name = emoji.name;

  switch (emoji.categorySlug) {
    case "flags":
      return {
        quick: `${u} ${name} at a glance`,
        texting: `How people send ${u} in messages`,
        meaning: `What country or identity ${u} represents`,
        contexts: `Sports, travel, and identity uses of ${u}`,
        howTo: `When ${name} belongs in a chat`,
        examples: `Real messages with ${u}`,
        intent: `Other guides related to ${name}`,
        searches: `People looking up ${u} also search`,
        whenNot: `When not to use ${u}`,
        faqs: `Questions about ${name}`,
        facts: `${name} Unicode facts`,
        related: `Emojis often paired with ${u}`,
      };
    case "food-and-drink":
      return {
        quick: `${u} ${name} in one bite`,
        texting: `${name} in food chats and captions`,
        meaning: `What ${u} means when someone sends food talk`,
        contexts: `Meals, cravings, and restaurant uses`,
        howTo: `How to use ${u} without mixing up dishes`,
        examples: `Sample texts with ${u} ${name}`,
        intent: `Related food and drink meanings`,
        searches: `Popular searches for ${u}`,
        whenNot: `When ${name} is the wrong emoji`,
        faqs: `${name} FAQ`,
        facts: `${name} Unicode facts`,
        related: `Similar food emojis to ${u}`,
      };
    case "animals-and-nature":
      return {
        quick: `${u} ${name} in one sentence`,
        texting: `Pets, wildlife, and metaphor uses of ${u}`,
        meaning: `What ${u} ${name} stands for`,
        contexts: `Where ${name} shows up online`,
        howTo: `Using ${u} in captions and chats`,
        examples: `Messages that include ${u}`,
        intent: `Related animal and nature guides`,
        searches: `Searches for ${u} ${name}`,
        whenNot: `When ${u} can be misread`,
        faqs: `${name} questions`,
        facts: `${name} Unicode facts`,
        related: `Emojis close to ${u}`,
      };
    case "people-and-body":
      return {
        quick: `${u} ${name} gesture at a glance`,
        texting: `What ${u} replaces in body language`,
        meaning: `Meaning of ${u} ${name}`,
        contexts: `Chats, livestreams, and cross-cultural reads`,
        howTo: `How to send ${u} without mixed signals`,
        examples: `Gesture examples with ${u}`,
        intent: `Related people and gesture guides`,
        searches: `Popular ${name} searches`,
        whenNot: `When ${u} can feel rude`,
        faqs: `${name} FAQ`,
        facts: `${name} Unicode facts`,
        related: `Similar gestures to ${u}`,
      };
    case "symbols":
      return {
        quick: `${u} ${name} sign at a glance`,
        texting: `How ${u} works as a shortcut`,
        meaning: `What the ${name} symbol means`,
        contexts: `Literal vs meme uses of ${u}`,
        howTo: `When ${u} is the right sign`,
        examples: `Messages using ${u}`,
        intent: `Related symbol guides`,
        searches: `Searches for ${u} ${name}`,
        whenNot: `When ${name} is the wrong sign`,
        faqs: `${name} questions`,
        facts: `${name} Unicode facts`,
        related: `Symbols next to ${u}`,
      };
    case "travel-and-places":
      return {
        quick: `${u} ${name} in trip talk`,
        texting: `Commute, weather, and travel uses of ${u}`,
        meaning: `What ${u} ${name} marks`,
        contexts: `Itineraries, delays, and check-ins`,
        howTo: `Using ${u} in plans and updates`,
        examples: `Travel texts with ${u}`,
        intent: `Related travel emoji guides`,
        searches: `People searching ${u}`,
        whenNot: `When ${name} confuses a plan`,
        faqs: `${name} FAQ`,
        facts: `${name} Unicode facts`,
        related: `Places and transit near ${u}`,
      };
    case "activities":
      return {
        quick: `${u} ${name} in one sentence`,
        texting: `Sports, hobbies, and event uses of ${u}`,
        meaning: `What ${u} ${name} tags`,
        contexts: `Game day, practice, and invites`,
        howTo: `How to use ${u} in activity chats`,
        examples: `Activity messages with ${u}`,
        intent: `Related activity guides`,
        searches: `Searches for ${u} ${name}`,
        whenNot: `When ${name} is the wrong activity`,
        faqs: `${name} questions`,
        facts: `${name} Unicode facts`,
        related: `Activities next to ${u}`,
      };
    case "objects":
      return {
        quick: `${u} ${name} at a glance`,
        texting: `Shopping, work, and hobby uses of ${u}`,
        meaning: `What ${u} ${name} refers to`,
        contexts: `Lists, reviews, and desk-setup posts`,
        howTo: `When to send ${u}`,
        examples: `Object chats with ${u}`,
        intent: `Related object guides`,
        searches: `Popular searches for ${u}`,
        whenNot: `When ${name} is the wrong object`,
        faqs: `${name} FAQ`,
        facts: `${name} Unicode facts`,
        related: `Objects similar to ${u}`,
      };
    default:
      return {
        quick: `${u} ${name} in one sentence`,
        texting: `${name} in texting and social posts`,
        meaning: `What does ${u} ${name} mean?`,
        contexts: `Meaning of ${u} in different contexts`,
        howTo: `How to use ${u} ${name} correctly`,
        examples: `Real message examples with ${u}`,
        intent: `Meaning by intent for ${name}`,
        searches: `Popular searches for ${u}`,
        whenNot: `When not to use ${u} ${name}`,
        faqs: `Frequently asked questions about ${u}`,
        facts: `${name} Unicode facts`,
        related: `Related emojis to ${u}`,
      };
  }
};
