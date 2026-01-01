const fs = require('fs');
const path = require('path');

const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
let content = fs.readFileSync(emojisFilePath, 'utf-8');

// Count before
const beforeCount = (content.match(/is a versatile symbol/g) || []).length;
console.log(`Found ${beforeCount} emojis with "is a versatile symbol"`);

// Replace generic detailedMeaning patterns
content = content.replace(
  /detailedMeaning: `The ([^`]+) emoji ([^\s]+) is a versatile symbol used across digital platforms to express [^`]+ sentiments\. [^`]+`/g,
  (match, name, emoji) => {
    const newMeaning = `${emoji} ${name} is used in digital communication to express specific meaning. Popular on social media, texting, and messaging apps.`;
    return `detailedMeaning: \`${newMeaning}\``;
  }
);

// Count after
const afterCount = (content.match(/is a versatile symbol/g) || []).length;
console.log(`After fix: ${afterCount} remaining`);
console.log(`Fixed: ${beforeCount - afterCount} emojis`);

fs.writeFileSync(emojisFilePath, content);
