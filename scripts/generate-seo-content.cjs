const fs = require('fs');
const path = require('path');

// SEO content templates by category and subgroup
const categoryDescriptions = {
  'smileys-and-emotion': {
    intro: 'Express your emotions digitally with',
    usage: 'Perfect for text messages, social media posts, and online conversations',
    seoFocus: 'emotional expression, digital communication, messaging'
  },
  'people-and-body': {
    intro: 'Represent people, gestures, and body parts with',
    usage: 'Ideal for describing actions, people, and physical expressions',
    seoFocus: 'human representation, gestures, body language, diversity'
  },
  'animals-and-nature': {
    intro: 'Bring nature to your messages with',
    usage: 'Great for nature lovers, pet owners, and environmental topics',
    seoFocus: 'animals, nature, wildlife, plants, weather'
  },
  'food-and-drink': {
    intro: 'Share your culinary experiences with',
    usage: 'Perfect for foodies, restaurant reviews, and cooking content',
    seoFocus: 'food, drinks, cuisine, cooking, dining'
  },
  'travel-and-places': {
    intro: 'Explore the world through',
    usage: 'Essential for travel content, location sharing, and adventure stories',
    seoFocus: 'travel, places, transportation, buildings, geography'
  },
  'activities': {
    intro: 'Share your activities and hobbies with',
    usage: 'Great for sports, hobbies, events, and celebrations',
    seoFocus: 'sports, hobbies, activities, events, entertainment'
  },
  'objects': {
    intro: 'Reference everyday items with',
    usage: 'Useful for describing objects, tools, and everyday items',
    seoFocus: 'objects, tools, technology, household items'
  },
  'symbols': {
    intro: 'Add meaning with',
    usage: 'Perfect for emphasis, directions, and symbolic communication',
    seoFocus: 'symbols, signs, arrows, numbers, punctuation'
  },
  'flags': {
    intro: 'Show national pride with',
    usage: 'Essential for international content, travel, and cultural references',
    seoFocus: 'flags, countries, nations, international, patriotic'
  }
};

const subgroupContexts = {
  'face-smiling': { mood: 'happy', actions: ['greeting', 'celebrating', 'expressing joy'] },
  'face-affection': { mood: 'loving', actions: ['showing love', 'expressing affection', 'romantic messaging'] },
  'face-tongue': { mood: 'playful', actions: ['joking', 'teasing', 'being silly'] },
  'face-hand': { mood: 'thoughtful', actions: ['thinking', 'reacting', 'expressing surprise'] },
  'face-neutral-skeptical': { mood: 'neutral', actions: ['showing indifference', 'expressing doubt', 'being skeptical'] },
  'face-sleepy': { mood: 'tired', actions: ['expressing tiredness', 'showing boredom', 'indicating sleep'] },
  'face-unwell': { mood: 'unwell', actions: ['feeling sick', 'expressing discomfort', 'showing illness'] },
  'face-hat': { mood: 'festive', actions: ['celebrating', 'partying', 'special occasions'] },
  'face-glasses': { mood: 'cool', actions: ['being cool', 'showing intelligence', 'expressing style'] },
  'face-concerned': { mood: 'worried', actions: ['expressing concern', 'showing worry', 'feeling anxious'] },
  'face-negative': { mood: 'negative', actions: ['expressing anger', 'showing frustration', 'feeling upset'] },
  'face-costume': { mood: 'fun', actions: ['Halloween', 'costumes', 'fantasy themes'] },
  'cat-face': { mood: 'cute', actions: ['cat reactions', 'pet content', 'cute expressions'] },
  'monkey-face': { mood: 'playful', actions: ['see no evil', 'hear no evil', 'speak no evil'] },
  'heart': { mood: 'loving', actions: ['expressing love', 'showing affection', 'romantic content'] },
  'emotion': { mood: 'emotional', actions: ['expressing feelings', 'reactions', 'emotional content'] },
  'hand-fingers-open': { mood: 'expressive', actions: ['waving', 'greeting', 'gesturing'] },
  'hand-fingers-partial': { mood: 'specific', actions: ['pointing', 'counting', 'specific gestures'] },
  'hand-single-finger': { mood: 'direct', actions: ['pointing', 'indicating', 'directing attention'] },
  'hand-fingers-closed': { mood: 'strong', actions: ['fist bump', 'strength', 'solidarity'] },
  'hands': { mood: 'interactive', actions: ['clapping', 'praying', 'handshake'] },
  'hand-prop': { mood: 'active', actions: ['writing', 'working', 'creating'] },
  'body-parts': { mood: 'descriptive', actions: ['body language', 'physical description', 'anatomy'] },
  'person': { mood: 'human', actions: ['representing people', 'human activities', 'personal content'] },
  'person-gesture': { mood: 'expressive', actions: ['gesturing', 'reacting', 'body language'] },
  'person-role': { mood: 'professional', actions: ['jobs', 'professions', 'roles'] },
  'person-fantasy': { mood: 'magical', actions: ['fantasy', 'mythology', 'imagination'] },
  'person-activity': { mood: 'active', actions: ['sports', 'activities', 'hobbies'] },
  'person-sport': { mood: 'athletic', actions: ['sports', 'fitness', 'competition'] },
  'person-resting': { mood: 'relaxed', actions: ['resting', 'relaxing', 'leisure'] },
  'family': { mood: 'familial', actions: ['family content', 'relationships', 'loved ones'] },
  'person-symbol': { mood: 'symbolic', actions: ['representation', 'identity', 'symbols'] },
  'animal-mammal': { mood: 'wild', actions: ['wildlife', 'pets', 'nature content'] },
  'animal-bird': { mood: 'free', actions: ['birds', 'flying', 'nature'] },
  'animal-amphibian': { mood: 'natural', actions: ['amphibians', 'nature', 'wildlife'] },
  'animal-reptile': { mood: 'exotic', actions: ['reptiles', 'exotic animals', 'nature'] },
  'animal-marine': { mood: 'aquatic', actions: ['sea life', 'ocean', 'marine content'] },
  'animal-bug': { mood: 'small', actions: ['insects', 'bugs', 'nature'] },
  'plant-flower': { mood: 'beautiful', actions: ['flowers', 'gardens', 'nature'] },
  'plant-other': { mood: 'green', actions: ['plants', 'nature', 'gardening'] },
  'food-fruit': { mood: 'healthy', actions: ['fruits', 'healthy eating', 'nutrition'] },
  'food-vegetable': { mood: 'nutritious', actions: ['vegetables', 'cooking', 'healthy food'] },
  'food-prepared': { mood: 'delicious', actions: ['meals', 'cooking', 'food content'] },
  'food-asian': { mood: 'cultural', actions: ['Asian cuisine', 'cultural food', 'dining'] },
  'food-marine': { mood: 'seafood', actions: ['seafood', 'sushi', 'ocean food'] },
  'food-sweet': { mood: 'sweet', actions: ['desserts', 'sweets', 'treats'] },
  'drink': { mood: 'refreshing', actions: ['beverages', 'drinks', 'refreshments'] },
  'dishware': { mood: 'dining', actions: ['eating', 'dining', 'tableware'] },
  'place-map': { mood: 'geographic', actions: ['maps', 'locations', 'geography'] },
  'place-geographic': { mood: 'natural', actions: ['landscapes', 'nature', 'geography'] },
  'place-building': { mood: 'urban', actions: ['buildings', 'architecture', 'cities'] },
  'place-religious': { mood: 'spiritual', actions: ['religion', 'spirituality', 'worship'] },
  'place-other': { mood: 'varied', actions: ['places', 'locations', 'venues'] },
  'transport-ground': { mood: 'mobile', actions: ['transportation', 'vehicles', 'travel'] },
  'transport-water': { mood: 'nautical', actions: ['boats', 'ships', 'water travel'] },
  'transport-air': { mood: 'aerial', actions: ['flying', 'aviation', 'air travel'] },
  'hotel': { mood: 'hospitality', actions: ['accommodation', 'travel', 'hotels'] },
  'time': { mood: 'temporal', actions: ['time', 'schedules', 'timing'] },
  'sky-weather': { mood: 'atmospheric', actions: ['weather', 'sky', 'climate'] },
  'event': { mood: 'celebratory', actions: ['events', 'celebrations', 'parties'] },
  'award-medal': { mood: 'achievement', actions: ['awards', 'achievements', 'recognition'] },
  'sport': { mood: 'athletic', actions: ['sports', 'games', 'competition'] },
  'game': { mood: 'playful', actions: ['games', 'entertainment', 'fun'] },
  'arts-crafts': { mood: 'creative', actions: ['art', 'crafts', 'creativity'] },
};

// Generate unique SEO-optimized content for each emoji
function generateSEOContent(emoji, name, categorySlug, subgroup) {
  const category = categoryDescriptions[categorySlug] || categoryDescriptions['symbols'];
  const subgroupCtx = subgroupContexts[subgroup] || { mood: 'expressive', actions: ['messaging', 'social media', 'communication'] };
  
  const nameWords = name.toLowerCase().split(' ').filter(w => w.length > 2);
  const mainKeyword = name;
  
  // Generate unique short meaning
  const shortMeanings = [
    `${emoji} ${mainKeyword} - Express ${subgroupCtx.mood} feelings in your digital conversations.`,
    `The ${mainKeyword} ${emoji} adds ${subgroupCtx.mood} expression to your messages and posts.`,
    `Use ${emoji} ${mainKeyword} to convey ${subgroupCtx.mood} emotions in texts and social media.`,
    `${mainKeyword} ${emoji} - A popular choice for ${subgroupCtx.actions[0]} online.`,
    `Add ${subgroupCtx.mood} vibes to your chats with the ${mainKeyword} emoji ${emoji}.`
  ];
  
  const shortMeaning = shortMeanings[Math.floor(Math.random() * shortMeanings.length)];

  // Generate detailed SEO-rich meaning
  const detailedMeaning = `## What Does ${mainKeyword} ${emoji} Mean?

The ${mainKeyword} emoji ${emoji} is a versatile symbol used across digital platforms to express ${subgroupCtx.mood} sentiments. ${category.intro} this expressive icon that has become essential in modern communication.

### When to Use ${mainKeyword} ${emoji}

${category.usage}. This emoji is particularly effective for ${subgroupCtx.actions.join(', ')}.

### ${mainKeyword} Emoji Meaning in Different Contexts

The interpretation of ${emoji} can vary based on context:
- **Social Media**: Popular on Instagram, Twitter, TikTok, and Facebook for ${subgroupCtx.actions[0]}
- **Text Messages**: Commonly used in personal conversations to add emotional depth
- **Professional Communication**: Use thoughtfully in casual workplace chats

### Copy and Paste ${mainKeyword} ${emoji}

Simply click to copy this emoji and paste it anywhere - works on iPhone, Android, Windows, Mac, and all major platforms.

### FAQ About ${mainKeyword} Emoji

**What does ${emoji} mean in texting?**
In texting, ${emoji} typically conveys ${subgroupCtx.mood} emotions and is used for ${subgroupCtx.actions[0]}.

**Is ${emoji} appropriate for professional use?**
${emoji} can be used in casual professional settings but consider your audience and context.

**What platforms support ${emoji}?**
${emoji} is supported on iOS, Android, Windows, macOS, and all major social media platforms.`;

  // Generate contextual examples
  const examples = [
    { context: "Social Media", text: `Just posted my new photo ${emoji}` },
    { context: "Texting", text: `Can't wait to see you ${emoji}` },
    { context: "Reaction", text: `That's amazing ${emoji}` }
  ];
  
  // Generate keywords
  const keywords = [
    ...nameWords,
    `${nameWords[0] || 'emoji'} emoji`,
    `${nameWords[0] || 'emoji'} meaning`,
    'copy paste',
    'unicode',
    categorySlug.replace(/-/g, ' '),
    subgroup.replace(/-/g, ' ')
  ].filter((v, i, a) => a.indexOf(v) === i); // unique
  
  // Generate usage contexts
  const usageContexts = [
    `${subgroupCtx.actions[0].charAt(0).toUpperCase() + subgroupCtx.actions[0].slice(1)}`,
    "Social media posts",
    "Text messaging",
    "Online reactions",
    `Expressing ${subgroupCtx.mood} feelings`
  ];
  
  return {
    shortMeaning,
    detailedMeaning,
    examples,
    keywords,
    usageContexts
  };
}

// Read and update the emojis file
const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
let content = fs.readFileSync(emojisFilePath, 'utf-8');

// Find all generic emojis (those with "The X emoji." pattern)
const genericPattern = /\{\s*unicode:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*shortMeaning:\s*"The [^"]+ emoji\.",\s*detailedMeaning:\s*"The [^"]+ emoji represents[^"]+",\s*usageContexts:\s*\["General use","Social media","Messaging"\],\s*examples:\s*\[\{"context":"General","text":"Check this out [^"]+"\}\],\s*misunderstandings:\s*\[\],\s*relatedEmojis:\s*\[\],\s*categorySlug:\s*"([^"]+)",\s*subgroup:\s*"([^"]+)",\s*keywords:\s*\[[^\]]+\]\s*\}/g;

let match;
let updates = 0;
const replacements = [];

while ((match = genericPattern.exec(content)) !== null) {
  const [fullMatch, unicode, name, slug, categorySlug, subgroup] = match;
  const seoContent = generateSEOContent(unicode, name, categorySlug, subgroup);
  
  const newEmoji = `{
    unicode: "${unicode}",
    name: "${name}",
    slug: "${slug}",
    shortMeaning: "${seoContent.shortMeaning.replace(/"/g, '\\"')}",
    detailedMeaning: \`${seoContent.detailedMeaning.replace(/`/g, '\\`')}\`,
    usageContexts: ${JSON.stringify(seoContent.usageContexts)},
    examples: ${JSON.stringify(seoContent.examples)},
    misunderstandings: ["Context matters - meaning can vary by platform and conversation"],
    relatedEmojis: [],
    categorySlug: "${categorySlug}",
    subgroup: "${subgroup}",
    keywords: ${JSON.stringify(seoContent.keywords)}
  }`;
  
  replacements.push({ old: fullMatch, new: newEmoji });
  updates++;
}

console.log(`Found ${updates} generic emojis to update`);

// Apply replacements
for (const r of replacements) {
  content = content.replace(r.old, r.new);
}

fs.writeFileSync(emojisFilePath, content);
console.log(`Updated ${updates} emojis with SEO content`);
