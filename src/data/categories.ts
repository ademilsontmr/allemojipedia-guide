export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subgroups: string[];
}

export const categories: Category[] = [
  {
    slug: "smileys-and-emotion",
    name: "Smileys & Emotion",
    description: "Express your feelings with smiley faces, hearts, and emotional emojis. From happy grins to sad tears, find the perfect emoji to convey your mood.",
    icon: "😀",
    color: "category-smileys",
    subgroups: ["face-smiling", "face-affection", "face-tongue", "face-hand", "face-neutral-skeptical", "face-sleepy", "face-unwell", "face-hat", "face-glasses", "face-concerned", "face-negative", "face-costume", "cat-face", "monkey-face", "heart", "emotion"]
  },
  {
    slug: "people-and-body",
    name: "People & Body",
    description: "Human emojis representing gestures, body parts, and people in various activities. Includes skin tone and gender variations for inclusive communication.",
    icon: "👋",
    color: "category-people",
    subgroups: ["hand-fingers-open", "hand-fingers-partial", "hand-single-finger", "hand-fingers-closed", "hands", "hand-prop", "body-parts", "person", "person-gesture", "person-role", "person-fantasy", "person-activity", "person-sport", "person-resting", "family", "person-symbol"]
  },
  {
    slug: "animals-and-nature",
    name: "Animals & Nature",
    description: "Discover animal emojis from pets to wildlife, plus plants, flowers, and natural elements. Perfect for nature lovers and animal enthusiasts.",
    icon: "🐱",
    color: "category-animals",
    subgroups: ["animal-mammal", "animal-bird", "animal-amphibian", "animal-reptile", "animal-marine", "animal-bug", "plant-flower", "plant-other"]
  },
  {
    slug: "food-and-drink",
    name: "Food & Drink",
    description: "Delicious food and beverage emojis including fruits, vegetables, prepared foods, and drinks. Share your culinary experiences and cravings.",
    icon: "🍕",
    color: "category-food",
    subgroups: ["food-fruit", "food-vegetable", "food-prepared", "food-asian", "food-marine", "food-sweet", "drink", "dishware"]
  },
  {
    slug: "travel-and-places",
    name: "Travel & Places",
    description: "Explore location and transportation emojis including vehicles, buildings, landmarks, and geographic features for your travel stories.",
    icon: "✈️",
    color: "category-travel",
    subgroups: ["place-map", "place-geographic", "place-building", "place-religious", "place-other", "transport-ground", "transport-water", "transport-air", "hotel", "time", "sky-weather"]
  },
  {
    slug: "activities",
    name: "Activities",
    description: "Sports, games, arts, and hobby emojis. From soccer balls to video game controllers, express your favorite activities and pastimes.",
    icon: "⚽",
    color: "category-activities",
    subgroups: ["event", "award-medal", "sport", "game", "arts-crafts"]
  },
  {
    slug: "objects",
    name: "Objects",
    description: "Everyday objects and items including electronics, tools, clothing, and household items. Find the perfect object emoji for any context.",
    icon: "💡",
    color: "category-objects",
    subgroups: ["clothing", "sound", "music", "musical-instrument", "phone", "computer", "light-video", "book-paper", "money", "mail", "writing", "office", "lock", "tool", "science", "medical", "household", "other-object"]
  },
  {
    slug: "symbols",
    name: "Symbols",
    description: "Signs, symbols, arrows, and pictograms for communication. Includes zodiac signs, warning symbols, and various informational icons.",
    icon: "❤️",
    color: "category-symbols",
    subgroups: ["transport-sign", "warning", "arrow", "religion", "zodiac", "av-symbol", "gender", "math", "punctuation", "currency", "other-symbol", "keycap", "alphanum", "geometric"]
  },
  {
    slug: "flags",
    name: "Flags",
    description: "National flags and regional banners from around the world. Represent countries, territories, and international communities.",
    icon: "🏳️",
    color: "category-flags",
    subgroups: ["flag", "country-flag", "subdivision-flag"]
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const peopleSubcategories = [
  { slug: "gestures", name: "Gestures", description: "Hand gestures and body language emojis for expressing actions and emotions non-verbally.", icon: "👋" },
  { slug: "emotions", name: "Emotions", description: "People expressing various emotions through facial expressions and body language.", icon: "🤗" },
  { slug: "professions", name: "Professions", description: "Professional and occupational emojis representing various careers and jobs.", icon: "👨‍⚕️" },
  { slug: "family", name: "Family", description: "Family member emojis representing parents, children, and various family structures.", icon: "👨‍👩‍👧" }
];
