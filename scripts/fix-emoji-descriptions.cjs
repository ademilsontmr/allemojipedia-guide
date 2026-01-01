const fs = require('fs');
const path = require('path');

// Specific descriptions for emoji types based on name patterns
const specificDescriptions = {
  // Faces
  'face': (name, emoji) => `${emoji} ${name} expresses a specific facial emotion, perfect for adding personality to your messages.`,
  'smiling': (name, emoji) => `${emoji} ${name} shows happiness and positivity, ideal for friendly conversations and good news.`,
  'grinning': (name, emoji) => `${emoji} ${name} displays joy and excitement, great for celebrating moments.`,
  'crying': (name, emoji) => `${emoji} ${name} conveys sadness or overwhelming emotion, used when words aren't enough.`,
  'angry': (name, emoji) => `${emoji} ${name} shows frustration or anger, use sparingly in heated discussions.`,
  'thinking': (name, emoji) => `${emoji} ${name} indicates contemplation or skepticism, perfect for pondering questions.`,
  'sleeping': (name, emoji) => `${emoji} ${name} represents tiredness or boredom, often used late at night.`,
  'kissing': (name, emoji) => `${emoji} ${name} sends affection and love, popular in romantic messages.`,
  'winking': (name, emoji) => `${emoji} ${name} adds playfulness or flirtation to your message.`,
  
  // Hearts
  'heart': (name, emoji) => `${emoji} ${name} symbolizes love and affection, one of the most used emoji types.`,
  
  // Hands
  'hand': (name, emoji) => `${emoji} ${name} represents a hand gesture used in communication and expression.`,
  'finger': (name, emoji) => `${emoji} ${name} shows a specific finger gesture for pointing or indicating.`,
  'fist': (name, emoji) => `${emoji} ${name} represents strength, solidarity, or a fist bump greeting.`,
  'clapping': (name, emoji) => `${emoji} ${name} shows applause and appreciation for achievements.`,
  'thumbs': (name, emoji) => `${emoji} ${name} indicates approval or disapproval, universally understood.`,
  'waving': (name, emoji) => `${emoji} ${name} is a friendly greeting or farewell gesture.`,
  'folded hands': (name, emoji) => `${emoji} ${name} represents prayer, gratitude, or a polite request.`,
  
  // People
  'person': (name, emoji) => `${emoji} ${name} represents a person, available in multiple skin tones for inclusive communication.`,
  'man': (name, emoji) => `${emoji} ${name} depicts a male figure, with skin tone variations available.`,
  'woman': (name, emoji) => `${emoji} ${name} depicts a female figure, with skin tone variations available.`,
  'child': (name, emoji) => `${emoji} ${name} represents a young person or child.`,
  'baby': (name, emoji) => `${emoji} ${name} symbolizes infants, babies, or new beginnings.`,
  'older': (name, emoji) => `${emoji} ${name} represents elderly people or wisdom.`,
  'family': (name, emoji) => `${emoji} ${name} shows family relationships and bonds.`,
  'couple': (name, emoji) => `${emoji} ${name} represents romantic relationships and partnerships.`,
  
  // Professions
  'doctor': (name, emoji) => `${emoji} ${name} represents medical professionals and healthcare.`,
  'teacher': (name, emoji) => `${emoji} ${name} symbolizes education and teaching.`,
  'student': (name, emoji) => `${emoji} ${name} represents learners and academic life.`,
  'worker': (name, emoji) => `${emoji} ${name} depicts various professions and occupations.`,
  'police': (name, emoji) => `${emoji} ${name} represents law enforcement and security.`,
  'firefighter': (name, emoji) => `${emoji} ${name} symbolizes firefighters and emergency services.`,
  'pilot': (name, emoji) => `${emoji} ${name} represents aviation and pilots.`,
  'chef': (name, emoji) => `${emoji} ${name} symbolizes cooking and culinary arts.`,
  'artist': (name, emoji) => `${emoji} ${name} represents creativity and artistic expression.`,
  
  // Animals
  'cat': (name, emoji) => `${emoji} ${name} represents cats, popular for pet lovers and cute content.`,
  'dog': (name, emoji) => `${emoji} ${name} symbolizes dogs, man's best friend.`,
  'bird': (name, emoji) => `${emoji} ${name} represents birds and freedom.`,
  'fish': (name, emoji) => `${emoji} ${name} symbolizes aquatic life and the ocean.`,
  'monkey': (name, emoji) => `${emoji} ${name} represents monkeys, often used playfully.`,
  'bear': (name, emoji) => `${emoji} ${name} symbolizes bears, strength, or cuddly feelings.`,
  'lion': (name, emoji) => `${emoji} ${name} represents courage, royalty, and strength.`,
  'horse': (name, emoji) => `${emoji} ${name} symbolizes horses, racing, or freedom.`,
  'cow': (name, emoji) => `${emoji} ${name} represents cattle and farm life.`,
  'pig': (name, emoji) => `${emoji} ${name} symbolizes pigs, farms, or indulgence.`,
  'rabbit': (name, emoji) => `${emoji} ${name} represents rabbits, Easter, or cuteness.`,
  'fox': (name, emoji) => `${emoji} ${name} symbolizes foxes, cleverness, or cunning.`,
  'wolf': (name, emoji) => `${emoji} ${name} represents wolves, loyalty, or wildness.`,
  'tiger': (name, emoji) => `${emoji} ${name} symbolizes tigers, power, and ferocity.`,
  'elephant': (name, emoji) => `${emoji} ${name} represents elephants, memory, and wisdom.`,
  
  // Nature
  'flower': (name, emoji) => `${emoji} ${name} represents flowers, beauty, and nature.`,
  'tree': (name, emoji) => `${emoji} ${name} symbolizes trees, nature, and growth.`,
  'plant': (name, emoji) => `${emoji} ${name} represents plants and greenery.`,
  'sun': (name, emoji) => `${emoji} ${name} symbolizes sunshine, warmth, and positivity.`,
  'moon': (name, emoji) => `${emoji} ${name} represents the moon, night, or mystery.`,
  'star': (name, emoji) => `${emoji} ${name} symbolizes stars, excellence, or dreams.`,
  'cloud': (name, emoji) => `${emoji} ${name} represents clouds and weather conditions.`,
  'rain': (name, emoji) => `${emoji} ${name} symbolizes rain, sadness, or cleansing.`,
  'snow': (name, emoji) => `${emoji} ${name} represents snow, winter, and cold weather.`,
  'fire': (name, emoji) => `${emoji} ${name} symbolizes fire, passion, or something hot/trending.`,
  'water': (name, emoji) => `${emoji} ${name} represents water, hydration, or fluidity.`,
  'mountain': (name, emoji) => `${emoji} ${name} symbolizes mountains, challenges, or achievements.`,
  'ocean': (name, emoji) => `${emoji} ${name} represents the ocean, vastness, or beach vibes.`,
  
  // Food
  'fruit': (name, emoji) => `${emoji} ${name} represents fresh fruit and healthy eating.`,
  'apple': (name, emoji) => `${emoji} ${name} symbolizes apples, health, or education.`,
  'banana': (name, emoji) => `${emoji} ${name} represents bananas, tropical vibes, or humor.`,
  'pizza': (name, emoji) => `${emoji} ${name} symbolizes pizza, one of the world's favorite foods.`,
  'burger': (name, emoji) => `${emoji} ${name} represents burgers and fast food.`,
  'cake': (name, emoji) => `${emoji} ${name} symbolizes celebrations, birthdays, and desserts.`,
  'coffee': (name, emoji) => `${emoji} ${name} represents coffee, energy, and morning routines.`,
  'beer': (name, emoji) => `${emoji} ${name} symbolizes beer, celebrations, and socializing.`,
  'wine': (name, emoji) => `${emoji} ${name} represents wine, elegance, and relaxation.`,
  'rice': (name, emoji) => `${emoji} ${name} symbolizes rice and Asian cuisine.`,
  'sushi': (name, emoji) => `${emoji} ${name} represents sushi and Japanese food culture.`,
  'bread': (name, emoji) => `${emoji} ${name} symbolizes bread, baking, or basic sustenance.`,
  'egg': (name, emoji) => `${emoji} ${name} represents eggs, breakfast, or new beginnings.`,
  'meat': (name, emoji) => `${emoji} ${name} symbolizes meat and protein.`,
  'vegetable': (name, emoji) => `${emoji} ${name} represents vegetables and healthy eating.`,
  
  // Travel & Places
  'car': (name, emoji) => `${emoji} ${name} represents cars and road travel.`,
  'airplane': (name, emoji) => `${emoji} ${name} symbolizes air travel and vacations.`,
  'train': (name, emoji) => `${emoji} ${name} represents trains and rail transportation.`,
  'bus': (name, emoji) => `${emoji} ${name} symbolizes buses and public transport.`,
  'ship': (name, emoji) => `${emoji} ${name} represents ships and sea travel.`,
  'bicycle': (name, emoji) => `${emoji} ${name} symbolizes cycling and eco-friendly transport.`,
  'house': (name, emoji) => `${emoji} ${name} represents home, housing, and real estate.`,
  'building': (name, emoji) => `${emoji} ${name} symbolizes buildings and urban life.`,
  'hospital': (name, emoji) => `${emoji} ${name} represents hospitals and healthcare facilities.`,
  'school': (name, emoji) => `${emoji} ${name} symbolizes schools and education.`,
  'church': (name, emoji) => `${emoji} ${name} represents churches and religious buildings.`,
  'hotel': (name, emoji) => `${emoji} ${name} symbolizes hotels and accommodation.`,
  'beach': (name, emoji) => `${emoji} ${name} represents beaches and coastal vacations.`,
  'camping': (name, emoji) => `${emoji} ${name} symbolizes camping and outdoor adventures.`,
  
  // Objects
  'phone': (name, emoji) => `${emoji} ${name} represents phones and mobile communication.`,
  'computer': (name, emoji) => `${emoji} ${name} symbolizes computers and technology.`,
  'camera': (name, emoji) => `${emoji} ${name} represents photography and capturing moments.`,
  'book': (name, emoji) => `${emoji} ${name} symbolizes books, reading, and knowledge.`,
  'money': (name, emoji) => `${emoji} ${name} represents money, finance, and wealth.`,
  'gift': (name, emoji) => `${emoji} ${name} symbolizes gifts, presents, and generosity.`,
  'key': (name, emoji) => `${emoji} ${name} represents keys, security, or solutions.`,
  'lock': (name, emoji) => `${emoji} ${name} symbolizes security, privacy, or secrets.`,
  'tool': (name, emoji) => `${emoji} ${name} represents tools and manual work.`,
  'clock': (name, emoji) => `${emoji} ${name} symbolizes time and schedules.`,
  'light': (name, emoji) => `${emoji} ${name} represents light, ideas, or illumination.`,
  'music': (name, emoji) => `${emoji} ${name} symbolizes music and audio.`,
  
  // Symbols
  'flag': (name, emoji) => `${emoji} ${name} represents a national flag, showing country pride and identity.`,
  'arrow': (name, emoji) => `${emoji} ${name} indicates direction or navigation.`,
  'check': (name, emoji) => `${emoji} ${name} represents completion, approval, or verification.`,
  'cross': (name, emoji) => `${emoji} ${name} symbolizes rejection, error, or Christianity.`,
  'warning': (name, emoji) => `${emoji} ${name} indicates caution or potential danger.`,
  'prohibited': (name, emoji) => `${emoji} ${name} shows something is not allowed or forbidden.`,
  'question': (name, emoji) => `${emoji} ${name} represents questions or uncertainty.`,
  'exclamation': (name, emoji) => `${emoji} ${name} indicates importance or emphasis.`,
  
  // Sports
  'ball': (name, emoji) => `${emoji} ${name} represents sports and athletic activities.`,
  'soccer': (name, emoji) => `${emoji} ${name} symbolizes soccer/football, the world's most popular sport.`,
  'basketball': (name, emoji) => `${emoji} ${name} represents basketball and the NBA.`,
  'football': (name, emoji) => `${emoji} ${name} symbolizes American football and the NFL.`,
  'tennis': (name, emoji) => `${emoji} ${name} represents tennis and racket sports.`,
  'golf': (name, emoji) => `${emoji} ${name} symbolizes golf and country club culture.`,
  'swimming': (name, emoji) => `${emoji} ${name} represents swimming and water sports.`,
  'running': (name, emoji) => `${emoji} ${name} symbolizes running, fitness, and marathons.`,
  'medal': (name, emoji) => `${emoji} ${name} represents achievement, winning, and recognition.`,
  'trophy': (name, emoji) => `${emoji} ${name} symbolizes victory and championship success.`,
};


// Function to generate unique description based on emoji name
function generateUniqueDescription(name, emoji, categorySlug, subgroup) {
  const nameLower = name.toLowerCase();
  
  // Try to find a matching pattern
  for (const [pattern, generator] of Object.entries(specificDescriptions)) {
    if (nameLower.includes(pattern)) {
      return generator(name, emoji);
    }
  }
  
  // Category-based fallbacks with more specific content
  const categoryDescriptions = {
    'smileys-and-emotion': `${emoji} ${name} conveys a specific emotion or feeling, adding nuance to your digital conversations.`,
    'people-and-body': `${emoji} ${name} represents human expression, available with skin tone options for inclusive messaging.`,
    'animals-and-nature': `${emoji} ${name} brings nature into your messages, perfect for animal lovers and outdoor enthusiasts.`,
    'food-and-drink': `${emoji} ${name} represents culinary delights, ideal for foodies and restaurant discussions.`,
    'travel-and-places': `${emoji} ${name} symbolizes travel and locations, great for sharing adventures and destinations.`,
    'activities': `${emoji} ${name} represents activities and hobbies, perfect for sharing what you love to do.`,
    'objects': `${emoji} ${name} depicts an everyday object, useful for describing items in conversations.`,
    'symbols': `${emoji} ${name} is a symbolic icon used for emphasis, direction, or special meaning.`,
    'flags': `${emoji} ${name} represents national or regional identity, showing pride and cultural connection.`,
  };
  
  // Subgroup-based descriptions for more specificity
  const subgroupDescriptions = {
    'face-smiling': `${emoji} ${name} shows a happy expression, spreading positivity in your messages.`,
    'face-affection': `${emoji} ${name} expresses love and affection, perfect for romantic or caring messages.`,
    'face-tongue': `${emoji} ${name} adds playfulness and humor to your conversations.`,
    'face-hand': `${emoji} ${name} combines facial expression with hand gesture for nuanced communication.`,
    'face-neutral-skeptical': `${emoji} ${name} conveys neutrality or skepticism in your responses.`,
    'face-sleepy': `${emoji} ${name} shows tiredness or sleepiness, relatable for late-night chats.`,
    'face-unwell': `${emoji} ${name} indicates feeling unwell or sick, useful for health updates.`,
    'face-concerned': `${emoji} ${name} expresses worry or concern about a situation.`,
    'face-negative': `${emoji} ${name} shows negative emotions like anger or frustration.`,
    'face-costume': `${emoji} ${name} represents costumes and fantasy characters.`,
    'hand-fingers-open': `${emoji} ${name} shows an open hand gesture for greetings or expressions.`,
    'hand-fingers-partial': `${emoji} ${name} depicts a specific hand sign or gesture.`,
    'hand-single-finger': `${emoji} ${name} shows a single finger gesture for pointing or indicating.`,
    'hand-fingers-closed': `${emoji} ${name} represents a closed hand gesture like a fist.`,
    'hands': `${emoji} ${name} shows both hands in a meaningful gesture.`,
    'person-gesture': `${emoji} ${name} depicts a person making a specific gesture or pose.`,
    'person-role': `${emoji} ${name} represents a specific profession or role in society.`,
    'person-activity': `${emoji} ${name} shows a person engaged in an activity.`,
    'person-sport': `${emoji} ${name} depicts athletic activity and sports participation.`,
    'animal-mammal': `${emoji} ${name} represents a mammal, beloved by animal enthusiasts.`,
    'animal-bird': `${emoji} ${name} depicts a bird species, symbolizing freedom and nature.`,
    'animal-marine': `${emoji} ${name} represents marine life from the ocean depths.`,
    'animal-bug': `${emoji} ${name} shows an insect or bug from the natural world.`,
    'plant-flower': `${emoji} ${name} represents beautiful flowers and botanical beauty.`,
    'food-fruit': `${emoji} ${name} depicts fresh fruit, perfect for healthy eating discussions.`,
    'food-vegetable': `${emoji} ${name} represents vegetables and nutritious foods.`,
    'food-prepared': `${emoji} ${name} shows prepared food and delicious meals.`,
    'food-asian': `${emoji} ${name} represents Asian cuisine and culinary traditions.`,
    'food-sweet': `${emoji} ${name} depicts sweet treats and desserts.`,
    'drink': `${emoji} ${name} represents beverages and drinks.`,
    'transport-ground': `${emoji} ${name} shows ground transportation and vehicles.`,
    'transport-air': `${emoji} ${name} represents air travel and aviation.`,
    'transport-water': `${emoji} ${name} depicts water transportation and boats.`,
    'place-building': `${emoji} ${name} represents buildings and architecture.`,
    'sky-weather': `${emoji} ${name} shows weather conditions and sky phenomena.`,
    'sport': `${emoji} ${name} represents sports equipment or athletic activity.`,
    'game': `${emoji} ${name} depicts games and entertainment.`,
    'country-flag': `${emoji} ${name} represents a nation's flag, symbolizing national pride and identity.`,
  };
  
  // Try subgroup first, then category
  if (subgroupDescriptions[subgroup]) {
    return subgroupDescriptions[subgroup];
  }
  
  if (categoryDescriptions[categorySlug]) {
    return categoryDescriptions[categorySlug];
  }
  
  // Ultimate fallback with emoji-specific content
  return `${emoji} ${name} is a Unicode emoji used to express specific meaning in digital communication. Copy and paste to use anywhere.`;
}


// Read and update the emojis file
const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
let content = fs.readFileSync(emojisFilePath, 'utf-8');

// Pattern to match emoji objects with generic shortMeaning
const emojiPattern = /\{\s*unicode:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*shortMeaning:\s*"([^"]+)",\s*detailedMeaning:\s*`([^`]+)`,\s*usageContexts:\s*\[([^\]]+)\],\s*examples:\s*\[([^\]]+)\],\s*misunderstandings:\s*\[([^\]]*)\],\s*relatedEmojis:\s*\[([^\]]*)\],\s*categorySlug:\s*"([^"]+)",\s*subgroup:\s*"([^"]+)",\s*keywords:\s*\[([^\]]+)\]\s*\}/g;

let count = 0;
const updates = [];

let match;
while ((match = emojiPattern.exec(content)) !== null) {
  const [fullMatch, unicode, name, slug, shortMeaning, detailedMeaning, usageContexts, examples, misunderstandings, relatedEmojis, categorySlug, subgroup, keywords] = match;
  
  // Check if shortMeaning is generic (contains common generic patterns)
  const isGeneric = shortMeaning.includes('to convey expressive emotions') || 
                    shortMeaning.includes('adds expressive expression') ||
                    shortMeaning.includes('adds loving expression') ||
                    shortMeaning.includes('adds playful expression') ||
                    shortMeaning.includes('adds thoughtful expression') ||
                    shortMeaning.includes('adds neutral expression') ||
                    shortMeaning.includes('adds tired expression') ||
                    shortMeaning.includes('adds unwell expression') ||
                    shortMeaning.includes('adds worried expression') ||
                    shortMeaning.includes('adds negative expression') ||
                    shortMeaning.includes('adds fun expression') ||
                    shortMeaning.includes('adds cute expression') ||
                    shortMeaning.includes('adds emotional expression') ||
                    shortMeaning.includes('adds wild expression') ||
                    shortMeaning.includes('adds free expression') ||
                    shortMeaning.includes('adds natural expression') ||
                    shortMeaning.includes('adds exotic expression') ||
                    shortMeaning.includes('adds aquatic expression') ||
                    shortMeaning.includes('adds small expression') ||
                    shortMeaning.includes('adds beautiful expression') ||
                    shortMeaning.includes('adds green expression') ||
                    shortMeaning.includes('adds healthy expression') ||
                    shortMeaning.includes('adds nutritious expression') ||
                    shortMeaning.includes('adds delicious expression') ||
                    shortMeaning.includes('adds cultural expression') ||
                    shortMeaning.includes('adds seafood expression') ||
                    shortMeaning.includes('adds sweet expression') ||
                    shortMeaning.includes('adds refreshing expression') ||
                    shortMeaning.includes('adds dining expression') ||
                    shortMeaning.includes('adds geographic expression') ||
                    shortMeaning.includes('adds urban expression') ||
                    shortMeaning.includes('adds spiritual expression') ||
                    shortMeaning.includes('adds varied expression') ||
                    shortMeaning.includes('adds mobile expression') ||
                    shortMeaning.includes('adds nautical expression') ||
                    shortMeaning.includes('adds aerial expression') ||
                    shortMeaning.includes('adds hospitality expression') ||
                    shortMeaning.includes('adds temporal expression') ||
                    shortMeaning.includes('adds atmospheric expression') ||
                    shortMeaning.includes('adds celebratory expression') ||
                    shortMeaning.includes('adds achievement expression') ||
                    shortMeaning.includes('adds athletic expression') ||
                    shortMeaning.includes('adds creative expression') ||
                    shortMeaning.includes('adds human expression') ||
                    shortMeaning.includes('adds strong expression') ||
                    shortMeaning.includes('adds direct expression') ||
                    shortMeaning.includes('adds specific expression') ||
                    shortMeaning.includes('adds active expression') ||
                    shortMeaning.includes('adds descriptive expression') ||
                    shortMeaning.includes('adds magical expression') ||
                    shortMeaning.includes('adds relaxed expression') ||
                    shortMeaning.includes('adds familial expression') ||
                    shortMeaning.includes('adds symbolic expression') ||
                    shortMeaning.includes('adds interactive expression') ||
                    shortMeaning.includes('adds professional expression');
  
  if (isGeneric) {
    const newShortMeaning = generateUniqueDescription(name, unicode, categorySlug, subgroup);
    const newDetailedMeaning = `${newShortMeaning} ${name} is commonly used in texting, social media, and online communication to add visual context to your messages.`;
    
    updates.push({
      old: fullMatch,
      unicode,
      name,
      slug,
      newShortMeaning,
      newDetailedMeaning,
      usageContexts,
      examples,
      misunderstandings,
      relatedEmojis,
      categorySlug,
      subgroup,
      keywords
    });
    count++;
  }
}

console.log(`Found ${count} emojis with generic descriptions to update`);

// Apply updates
for (const update of updates) {
  const newEmoji = `{
    unicode: "${update.unicode}",
    name: "${update.name}",
    slug: "${update.slug}",
    shortMeaning: "${update.newShortMeaning.replace(/"/g, '\\"')}",
    detailedMeaning: \`${update.newDetailedMeaning}\`,
    usageContexts: [${update.usageContexts}],
    examples: [${update.examples}],
    misunderstandings: [${update.misunderstandings}],
    relatedEmojis: [${update.relatedEmojis}],
    categorySlug: "${update.categorySlug}",
    subgroup: "${update.subgroup}",
    keywords: [${update.keywords}]
  }`;
  
  content = content.replace(update.old, newEmoji);
}

fs.writeFileSync(emojisFilePath, content);
console.log(`Updated ${count} emojis with unique descriptions`);
