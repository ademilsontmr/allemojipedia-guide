const fs = require('fs');
const path = require('path');

// Read the main emojis file
const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
let emojisContent = fs.readFileSync(emojisFilePath, 'utf-8');

// Read the missing emojis file
const missingEmojisPath = path.join(__dirname, 'missing-emojis.ts');
let missingContent = fs.readFileSync(missingEmojisPath, 'utf-8');

// Extract just the emoji objects from missing-emojis.ts (without the array brackets)
// The content looks like: const missingEmojis: Emoji[] = [\n  {...},\n  {...},\n];
const startIndex = missingContent.indexOf('[\n') + 2;
const endIndex = missingContent.lastIndexOf('\n];');
let emojiObjects = missingContent.substring(startIndex, endIndex).trim();

// Make sure each emoji object ends with a comma
if (!emojiObjects.endsWith(',')) {
  emojiObjects += ',';
}

// Find the last emoji in baseEmojis and add the new ones before the closing bracket
// Pattern: find the teapot emoji (last one) and its closing brace, then add before ];
const pattern = /(keywords:\s*\["teapot"[^\]]*\]\s*\n\s*}\s*\n)(\];)/;
const match = emojisContent.match(pattern);

if (match) {
  // Add comma after the last existing emoji and insert new ones
  const newContent = emojisContent.replace(
    pattern, 
    '$1,\n  // Additional emojis from Unicode 15.1\n' + emojiObjects + '\n$2'
  );
  fs.writeFileSync(emojisFilePath, newContent);
  console.log('Successfully merged emojis!');
} else {
  console.log('Pattern not found');
}
