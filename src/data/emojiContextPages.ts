export type EmojiContextType = "from-a-girl" | "from-a-guy" | "whatsapp" | "instagram" | "tiktok";

export type EmojiContextPage = {
  emojiSlug: string;
  context: EmojiContextType;
  title: string;
  shortTitle: string;
  description: string;
  answer: string;
  signals: string[];
  examples: string[];
  caution: string;
  relatedContexts?: EmojiContextType[];
};

const contextLabels: Record<EmojiContextType, string> = {
  "from-a-girl": "From a Girl",
  "from-a-guy": "From a Guy",
  whatsapp: "On WhatsApp",
  instagram: "On Instagram",
  tiktok: "On TikTok",
};

export const emojiContextPages: EmojiContextPage[] = [
  {
    emojiSlug: "red-heart",
    context: "from-a-girl",
    title: "Red Heart Emoji Meaning From a Girl",
    shortTitle: "From a girl",
    description: "What the red heart emoji usually means when a girl sends it in a text, DM, or WhatsApp message.",
    answer: "When a girl sends ❤️, it usually signals warmth, affection, appreciation, or emotional closeness. It can be romantic, but it can also be friendly if the conversation is casual or supportive.",
    signals: ["She sends it with compliments, goodnight texts, or personal updates", "It appears repeatedly rather than as a one-off polite reply", "The surrounding words feel warm, playful, or emotionally open"],
    examples: ["That was so sweet ❤️", "Goodnight ❤️", "I’m proud of you ❤️"],
    caution: "Do not read ❤️ as automatically romantic. Friends and family use it often, especially in supportive messages.",
    relatedContexts: ["from-a-guy", "whatsapp", "instagram"],
  },
  {
    emojiSlug: "red-heart",
    context: "from-a-guy",
    title: "Red Heart Emoji Meaning From a Guy",
    shortTitle: "From a guy",
    description: "How to understand the red heart emoji when a guy sends it in texting or social media.",
    answer: "When a guy sends ❤️, it often means affection, appreciation, romantic interest, or sincere support. The strongest signal is whether he uses it in personal, consistent, and emotionally warm messages.",
    signals: ["He pairs it with personal compliments or caring language", "He sends it privately rather than only in group chats", "It follows a meaningful or affectionate message"],
    examples: ["You looked amazing today ❤️", "I’m here for you ❤️", "That made my day ❤️"],
    caution: "A single red heart after a thank-you can still be friendly. Look for consistency before assuming romantic intent.",
    relatedContexts: ["from-a-girl", "whatsapp", "instagram"],
  },
  {
    emojiSlug: "red-heart",
    context: "whatsapp",
    title: "Red Heart Emoji Meaning on WhatsApp",
    shortTitle: "On WhatsApp",
    description: "What ❤️ means in WhatsApp chats, family groups, and private messages.",
    answer: "On WhatsApp, ❤️ is a broad warmth signal. It can mean love, thanks, support, or closeness, and it is common in family chats, friend groups, and romantic conversations.",
    signals: ["Used after good news, encouragement, or thanks", "Appears in private chats with affectionate wording", "Sent as a standalone reaction to something emotional"],
    examples: ["Thank you so much ❤️", "Miss you ❤️", "Congratulations ❤️"],
    caution: "WhatsApp use varies heavily by family and culture, so the relationship matters more than the emoji alone.",
    relatedContexts: ["from-a-girl", "from-a-guy", "instagram"],
  },
  {
    emojiSlug: "fire",
    context: "from-a-guy",
    title: "Fire Emoji Meaning From a Guy",
    shortTitle: "From a guy",
    description: "What 🔥 usually means when a guy sends it in a text, comment, or DM.",
    answer: "When a guy sends 🔥, it usually means he thinks something is attractive, impressive, exciting, or strong. In a DM, it can be a compliment; in a group chat, it can simply mean hype.",
    signals: ["He sends it on a photo, outfit, workout, or achievement", "It appears with compliments like 'you killed it' or 'looks good'", "The conversation already has playful or flirty energy"],
    examples: ["That fit is 🔥", "You crushed it 🔥", "This song is 🔥"],
    caution: "🔥 can be flirty, but it is also common hype language. A public comment is usually weaker than a private message.",
    relatedContexts: ["instagram", "tiktok"],
  },
  {
    emojiSlug: "fire",
    context: "instagram",
    title: "Fire Emoji Meaning on Instagram",
    shortTitle: "On Instagram",
    description: "How 🔥 is used in Instagram captions, comments, stories, and DMs.",
    answer: "On Instagram, 🔥 usually means hot, impressive, stylish, trending, or high-energy. It is one of the most common compliment emojis for photos, reels, outfits, and achievements.",
    signals: ["Used in comments under photos, reels, or transformations", "Paired with words like 'hard', 'clean', 'insane', or 'goals'", "Sent as a quick story reaction"],
    examples: ["This reel is 🔥", "Outfit 🔥", "Your edit went crazy 🔥"],
    caution: "In public comments, 🔥 is often casual and low-commitment. A DM with context can carry more personal intent.",
    relatedContexts: ["from-a-guy", "tiktok"],
  },
  {
    emojiSlug: "skull",
    context: "tiktok",
    title: "Skull Emoji Meaning on TikTok",
    shortTitle: "On TikTok",
    description: "What 💀 means on TikTok comments, captions, and Gen Z slang.",
    answer: "On TikTok, 💀 usually means 'I’m dead' from laughing, shock, embarrassment, or disbelief. It often replaces 😂 when something is extremely funny or painfully awkward.",
    signals: ["Appears after a joke, roast, fail, or unexpected clip", "Used with phrases like 'nah', 'bro', 'I can’t', or 'not this'", "Shows exaggerated reaction rather than literal sadness"],
    examples: ["The ending 💀", "Not him saying that 💀", "I’m actually crying 💀"],
    caution: "💀 is casual internet slang. It may confuse people who read it literally outside TikTok or Gen Z contexts.",
    relatedContexts: ["instagram", "whatsapp"],
  },
  {
    emojiSlug: "skull",
    context: "instagram",
    title: "Skull Emoji Meaning on Instagram",
    shortTitle: "On Instagram",
    description: "How 💀 is used in Instagram comments, DMs, reels, and stories.",
    answer: "On Instagram, 💀 usually signals laughing at something ridiculous, awkward, or shocking. It is common in reel comments and DMs when someone reacts to humor with a deadpan tone.",
    signals: ["Used under funny reels, memes, or chaotic posts", "Sent after a sarcastic or teasing message", "Paired with short reactions like 'no way' or 'help'"],
    examples: ["This caption 💀", "Why is this so accurate 💀", "Help 💀"],
    caution: "It can sound teasing or sarcastic, so avoid it when someone is sharing something sensitive.",
    relatedContexts: ["tiktok", "whatsapp"],
  },
  {
    emojiSlug: "pleading-face",
    context: "from-a-girl",
    title: "Pleading Face Emoji Meaning From a Girl",
    shortTitle: "From a girl",
    description: "What 🥺 usually means when a girl sends it in texting, flirting, or requests.",
    answer: "When a girl sends 🥺, it often makes a message feel cute, soft, vulnerable, or emotionally persuasive. It can be flirty when paired with a request, compliment, or shy tone.",
    signals: ["She uses it while asking for something or reacting emotionally", "It appears with affectionate words or a playful request", "The chat already feels personal or flirty"],
    examples: ["Can you come over? 🥺", "That’s so cute 🥺", "I miss you 🥺"],
    caution: "🥺 can also mean sincere emotion or gratitude, not just flirting.",
    relatedContexts: ["from-a-guy", "tiktok"],
  },
  {
    emojiSlug: "pleading-face",
    context: "from-a-guy",
    title: "Pleading Face Emoji Meaning From a Guy",
    shortTitle: "From a guy",
    description: "How to read 🥺 when a guy sends it in a message or DM.",
    answer: "When a guy sends 🥺, he may be trying to sound sweet, apologetic, shy, or playfully needy. In flirting, it softens the message and makes a request feel less direct.",
    signals: ["He uses it with apologies, compliments, or gentle requests", "The message has a shy or playful tone", "He sends it privately rather than in a group"],
    examples: ["Don’t be mad 🥺", "You’re too cute 🥺", "One more chance? 🥺"],
    caution: "Some people use 🥺 jokingly, so read the words around it before taking it as serious emotion.",
    relatedContexts: ["from-a-girl", "tiktok"],
  },
  {
    emojiSlug: "thumbs-up",
    context: "whatsapp",
    title: "Thumbs Up Emoji Meaning on WhatsApp",
    shortTitle: "On WhatsApp",
    description: "What 👍 means in WhatsApp chats and why it can feel blunt in some conversations.",
    answer: "On WhatsApp, 👍 usually means OK, agreed, received, or approved. It can feel efficient and friendly, but as a standalone reply it may also feel cold or dismissive to some people.",
    signals: ["Used as a quick confirmation after plans or instructions", "Sent alone after a long message, which can feel blunt", "Used in group chats where short acknowledgments are normal"],
    examples: ["See you at 7 👍", "Got it 👍", "That works 👍"],
    caution: "If the message is emotional or detailed, a standalone 👍 can seem dismissive. Add a few words when tone matters.",
    relatedContexts: ["from-a-guy"],
  },
  {
    emojiSlug: "smiling-face-with-heart-eyes",
    context: "from-a-girl",
    title: "Heart Eyes Emoji Meaning From a Girl",
    shortTitle: "From a girl",
    description: "What 😍 means when a girl sends it in a text, DM, comment, or reaction.",
    answer: "When a girl sends 😍, it usually means admiration, delight, attraction, or strong approval. It can be flirty when aimed at you, your photo, or something personal.",
    signals: ["She sends it in response to a photo, compliment, outfit, or sweet message", "It appears with enthusiastic words like 'cute', 'love', or 'obsessed'", "The conversation already has playful or affectionate energy"],
    examples: ["You look so good 😍", "I love this 😍", "That’s adorable 😍"],
    caution: "😍 can also mean she loves an object, pet, outfit, or idea. The target of the emoji matters.",
    relatedContexts: ["instagram"],
  },
  {
    emojiSlug: "smiling-face-with-heart-eyes",
    context: "instagram",
    title: "Heart Eyes Emoji Meaning on Instagram",
    shortTitle: "On Instagram",
    description: "How 😍 is used in Instagram comments, stories, reels, and DMs.",
    answer: "On Instagram, 😍 means love, admiration, attraction, or strong appreciation. It is common under photos, cute posts, food, outfits, pets, and travel content.",
    signals: ["Used as a comment on a photo or story reaction", "Paired with praise like 'stunning', 'cute', or 'need this'", "Sent privately in response to a personal photo or update"],
    examples: ["This photo 😍", "Need this outfit 😍", "You two are adorable 😍"],
    caution: "A public 😍 comment is often friendly or supportive. A private DM may feel more personal.",
    relatedContexts: ["from-a-girl"],
  },
  {
    emojiSlug: "face-with-tears-of-joy",
    context: "whatsapp",
    title: "Face With Tears of Joy Emoji Meaning on WhatsApp",
    shortTitle: "On WhatsApp",
    description: "What 😂 means in WhatsApp chats, family groups, and casual messages.",
    answer: "On WhatsApp, 😂 usually means something is funny, silly, or playfully ridiculous. It is still very common in family chats and friend groups, even though younger users may use 💀 for similar reactions.",
    signals: ["Used after jokes, teasing, voice notes, or funny photos", "Appears several times when someone is laughing hard", "Softens teasing so it feels playful rather than harsh"],
    examples: ["You’re impossible 😂", "I can’t believe that happened 😂", "That voice note 😂"],
    caution: "In serious conversations, 😂 can feel like someone is not taking the topic seriously.",
    relatedContexts: ["tiktok"],
  },
  {
    emojiSlug: "face-with-tears-of-joy",
    context: "tiktok",
    title: "Face With Tears of Joy Emoji Meaning on TikTok",
    shortTitle: "On TikTok",
    description: "How 😂 is used on TikTok and how it compares with 💀 in Gen Z reactions.",
    answer: "On TikTok, 😂 still means laughing, but it can feel more mainstream or older than 💀 in some Gen Z comment sections. People use it when something is obviously funny or lighthearted.",
    signals: ["Used on light jokes, reactions, or older meme formats", "Appears with multiple laughing emojis for emphasis", "Sometimes contrasted with 💀 for darker or more deadpan humor"],
    examples: ["This took me out 😂", "The way he turned around 😂", "I watched this five times 😂"],
    caution: "Emoji style changes by community. In some TikTok spaces, 💀 may feel more current than 😂.",
    relatedContexts: ["whatsapp"],
  },
];

export const getEmojiContextPage = (emojiSlug: string, context: string) =>
  emojiContextPages.find((page) => page.emojiSlug === emojiSlug && page.context === context);

export const getEmojiContextPagesForEmoji = (emojiSlug: string) =>
  emojiContextPages.filter((page) => page.emojiSlug === emojiSlug);

export const getContextLabel = (context: EmojiContextType) => contextLabels[context];
