const fs = require('fs');
const path = require('path');

// Read the emoji-test.txt file
const emojiTestContent = fs.readFileSync('/tmp/emoji-test.txt', 'utf-8');

// Parse existing emojis from the project
const emojisFilePath = path.join(__dirname, '../src/data/emojis.ts');
const emojisContent = fs.readFileSync(emojisFilePath, 'utf-8');

// Extract existing unicode emojis
const existingEmojis = new Set();
const unicodeRegex = /unicode:\s*"([^"]+)"/g;
let match;
while ((match = unicodeRegex.exec(emojisContent)) !== null) {
  existingEmojis.add(match[1]);
}

// Also check the separate files
const emojiFiles = ['activities.ts', 'flags.ts', 'symbols.ts'];
for (const file of emojiFiles) {
  const filePath = path.join(__dirname, '../src/data/emojis', file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let m;
    const regex = /unicode:\s*"([^"]+)"/g;
    while ((m = regex.exec(content)) !== null) {
      existingEmojis.add(m[1]);
    }
  }
}

console.log(`Existing emojis: ${existingEmojis.size}`);

// Parse emoji-test.txt
const lines = emojiTestContent.split('\n');
let currentGroup = '';
let currentSubgroup = '';
const allEmojis = [];

for (const line of lines) {
  if (line.startsWith('# group:')) {
    currentGroup = line.replace('# group:', '').trim();
  } else if (line.startsWith('# subgroup:')) {
    currentSubgroup = line.replace('# subgroup:', '').trim();
  } else if (line.includes('fully-qualified') && !line.startsWith('#')) {
    const parts = line.split('#');
    if (parts.length >= 2) {
      const emojiPart = parts[1].trim();
      const emojiMatch = emojiPart.match(/^(.+?)\s+E[\d.]+\s+(.+)$/);
      if (emojiMatch) {
        const emoji = emojiMatch[1].trim();
        const name = emojiMatch[2].trim();
        allEmojis.push({
          emoji,
          name,
          group: currentGroup,
          subgroup: currentSubgroup
        });
      }
    }
  }
}

console.log(`Total emojis in Unicode 15.1: ${allEmojis.length}`);

// Find missing emojis
const missingEmojis = allEmojis.filter(e => !existingEmojis.has(e.emoji));
console.log(`Missing emojis: ${missingEmojis.length}`);

// Group missing emojis by category
const groupedMissing = {};
for (const emoji of missingEmojis) {
  if (!groupedMissing[emoji.group]) {
    groupedMissing[emoji.group] = [];
  }
  groupedMissing[emoji.group].push(emoji);
}

console.log('\nMissing by category:');
for (const [group, emojis] of Object.entries(groupedMissing)) {
  console.log(`  ${group}: ${emojis.length}`);
}

// Helper function to create slug
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper function to create category slug
function createCategorySlug(group) {
  return group
    .toLowerCase()
    .replace(/\s+&\s+/g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Generate emoji objects for missing emojis
function generateEmojiObject(emoji) {
  const slug = createSlug(emoji.name);
  const categorySlug = createCategorySlug(emoji.group);
  const capitalizedName = emoji.name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    unicode: emoji.emoji,
    name: capitalizedName,
    slug: slug,
    shortMeaning: `The ${capitalizedName} emoji.`,
    detailedMeaning: `The ${capitalizedName} emoji represents ${emoji.name}. It belongs to the ${emoji.group} category and ${emoji.subgroup} subgroup.`,
    usageContexts: ["General use", "Social media", "Messaging"],
    examples: [
      { context: "General", text: `Check this out ${emoji.emoji}` }
    ],
    misunderstandings: [],
    relatedEmojis: [],
    categorySlug: categorySlug,
    subgroup: emoji.subgroup,
    keywords: emoji.name.toLowerCase().split(' ').filter(w => w.length > 2)
  };
}

// Generate TypeScript code for missing emojis
let output = '// Missing emojis to add\n\n';
output += 'const missingEmojis: Emoji[] = [\n';

for (const emoji of missingEmojis) {
  const obj = generateEmojiObject(emoji);
  output += `  {\n`;
  output += `    unicode: "${obj.unicode}",\n`;
  output += `    name: "${obj.name}",\n`;
  output += `    slug: "${obj.slug}",\n`;
  output += `    shortMeaning: "${obj.shortMeaning.replace(/"/g, '\\"')}",\n`;
  output += `    detailedMeaning: "${obj.detailedMeaning.replace(/"/g, '\\"')}",\n`;
  output += `    usageContexts: ${JSON.stringify(obj.usageContexts)},\n`;
  output += `    examples: ${JSON.stringify(obj.examples)},\n`;
  output += `    misunderstandings: [],\n`;
  output += `    relatedEmojis: [],\n`;
  output += `    categorySlug: "${obj.categorySlug}",\n`;
  output += `    subgroup: "${obj.subgroup}",\n`;
  output += `    keywords: ${JSON.stringify(obj.keywords)}\n`;
  output += `  },\n`;
}

output += '];\n';

fs.writeFileSync(path.join(__dirname, 'missing-emojis.ts'), output);
console.log('\nGenerated missing-emojis.ts');

// Also output a simple list
const simpleList = missingEmojis.map(e => `${e.emoji} ${e.name}`).join('\n');
fs.writeFileSync(path.join(__dirname, 'missing-emojis-list.txt'), simpleList);
console.log('Generated missing-emojis-list.txt');
