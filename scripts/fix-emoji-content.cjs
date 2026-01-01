const fs = require('fs');
const path = require('path');

const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
let content = fs.readFileSync(emojisFilePath, 'utf-8');

// Remove markdown headers and FAQ sections from detailedMeaning
// Pattern to match the markdown content in template literals
const patterns = [
  /## What Does .+? Mean\?\n\n/g,
  /### When to Use .+?\n\n/g,
  /### .+? Emoji Meaning in Different Contexts\n\n/g,
  /The interpretation of .+? can vary based on context:\n- \*\*Social Media\*\*: /g,
  /\n- \*\*Text Messages\*\*: Commonly used in personal conversations to add emotional depth/g,
  /\n- \*\*Professional Communication\*\*: Use thoughtfully in casual workplace chats/g,
  /\n\n### Copy and Paste .+?\n\nSimply click to copy this emoji and paste it anywhere - works on iPhone, Android, Windows, Mac, and all major platforms\./g,
  /\n\n### FAQ About .+? Emoji\n\n\*\*What does .+? mean in texting\?\*\*\nIn texting, .+? typically conveys .+? emotions and is used for .+?\.\n\n\*\*Is .+? appropriate for professional use\?\*\*\n.+? can be used in casual professional settings but consider your audience and context\.\n\n\*\*What platforms support .+?\?\*\*\n.+? is supported on iOS, Android, Windows, macOS, and all major social media platforms\./g,
];

// Simpler approach: replace the entire detailedMeaning pattern
const detailedPattern = /detailedMeaning: `## What Does ([^`]+)`/g;

let count = 0;
content = content.replace(/detailedMeaning: `(## What Does .+?)`/gs, (match, innerContent) => {
  count++;
  // Extract the useful parts and rebuild without markdown
  const emojiMatch = innerContent.match(/## What Does (.+?) Mean\?/);
  const emojiName = emojiMatch ? emojiMatch[1].trim() : 'this emoji';
  
  // Find the first paragraph after the header
  const firstPara = innerContent.match(/Mean\?\n\n([^#]+?)(?=\n\n###|\n\n\*\*|$)/s);
  const mainContent = firstPara ? firstPara[1].trim() : '';
  
  // Clean up the content - remove markdown formatting
  let cleanContent = mainContent
    .replace(/\*\*/g, '')
    .replace(/- /g, '')
    .replace(/\n\n/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
  
  if (cleanContent.length < 50) {
    cleanContent = `The ${emojiName} emoji is a versatile symbol used in digital communication to express emotions and add context to messages.`;
  }
  
  return `detailedMeaning: \`${cleanContent}\``;
});

console.log(`Updated ${count} emojis`);
fs.writeFileSync(emojisFilePath, content);
console.log('Done!');
