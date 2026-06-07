export type EmojiPlatformSlug = "apple" | "google" | "samsung";

export type PlatformHubVariant =
  | "default"
  | "apple"
  | "iphone-emojis"
  | "copy-iphone-emojis"
  | "google"
  | "android-emojis"
  | "copy-android-emojis"
  | "samsung"
  | "samsung-emojis"
  | "copy-samsung-emojis";

export type EmojiPlatform = {
  slug: EmojiPlatformSlug;
  name: string;
  brandLabel: string;
  icon: string;
  description: string;
  keywords: string;
  copyGuide: string;
  featuredEmojiSlugs: string[];
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const featuredSlugs = [
  "face-with-tears-of-joy", "red-heart", "skull", "fire", "pleading-face", "eyes",
  "smiling-face-with-heart-eyes", "thumbs-up", "folded-hands", "loudly-crying-face",
  "melting-face", "purple-heart", "black-heart", "hundred-points", "sparkles",
  "winking-face", "smirking-face", "face-blowing-a-kiss", "rolling-on-the-floor-laughing",
  "clown-face", "thinking-face", "grinning-face", "smiling-face", "kissing-face",
  "hot-face", "party-popper", "star-struck", "two-hearts", "broken-heart", "white-heart",
  "blue-heart", "pink-heart", "green-heart", "yellow-heart", "orange-heart",
  "crying-face", "pensive-face", "unamused-face", "face-with-rolling-eyes",
  "upside-down-face", "zany-face", "see-no-evil-monkey", "heart-on-fire",
  "grinning-face-with-sweat", "smiling-face-with-hearts", "raising-hands",
  "face-holding-back-tears", "shushing-face", "mending-heart", "smiling-face-with-tear",
];

export const emojiPlatforms: EmojiPlatform[] = [
  {
    slug: "apple",
    name: "Apple / iPhone",
    brandLabel: "Apple iOS",
    icon: "🍎",
    description:
      "Browse and copy every emoji as it appears on iPhone and iPad. One-click copy for iMessage, Instagram, TikTok, WhatsApp, and Notes—plus meanings for each symbol.",
    keywords:
      "iphone emoji, apple emoji, emoji iphone, copy iphone emoji, ios emoji list, apple emoji copy paste, emoji de iphone",
    copyGuide:
      "Tap any emoji below to copy it instantly. Paste into iMessage, WhatsApp, Instagram, TikTok, or any iPhone app. Designs render in Apple's native emoji style on iOS and macOS.",
    featuredEmojiSlugs: featuredSlugs,
    sections: [
      {
        heading: "How iPhone emojis work",
        body:
          "Apple designs its own emoji artwork for iOS, iPadOS, and macOS. The Unicode code point is the same across Android and Samsung—but the look changes by platform. Use this hub to copy the character and read what it means in real conversations.",
      },
      {
        heading: "Copy iPhone emojis in one click",
        body:
          "Every emoji below copies the Unicode character your iPhone keyboard uses. You do not need a third-party app—click, paste, send. For full meanings, open the linked emoji page.",
      },
      {
        heading: "iPhone emoji vs Android emoji",
        body:
          "The same ❤️ or 💀 can look different on iPhone and Android. If someone screenshots an emoji, the style reveals their device. Compare platforms in our Google and Samsung hubs.",
      },
    ],
    faqs: [
      {
        question: "How do I copy iPhone emojis?",
        answer:
          "Click any emoji on this page to copy it to your clipboard. Paste into iMessage, Notes, Instagram, or any text field on your iPhone or Mac.",
      },
      {
        question: "Are these the same emojis on my iPhone keyboard?",
        answer:
          "Yes—the Unicode character is identical to what iOS uses. Visual style is rendered by Apple on iPhone; other phones may display a different design for the same code point.",
      },
      {
        question: "What is the difference between emoji iPhone and emoji Android?",
        answer:
          "Unicode defines the character; each platform (Apple, Google, Samsung) supplies its own artwork. Meaning stays the same—only the look changes.",
      },
    ],
  },
  {
    slug: "google",
    name: "Google / Android",
    brandLabel: "Google Noto Emoji",
    icon: "🤖",
    description:
      "Copy emojis in Google's Android style. Full list with meanings for Pixel, Samsung-with-Gboard, and cross-platform texting.",
    keywords:
      "android emoji, google emoji, emoji android, copy android emoji, gboard emoji, noto emoji",
    copyGuide:
      "Click to copy any emoji below. On Android with Gboard, pasted characters match Google's emoji set. Use with WhatsApp, Messages, and social apps.",
    featuredEmojiSlugs: featuredSlugs,
    sections: [
      {
        heading: "Google emoji on Android",
        body:
          "Google maintains the Noto Color Emoji set used on stock Android and Gboard. Samsung devices may show Samsung designs instead—but the copied Unicode works everywhere.",
      },
      {
        heading: "Gboard and emoji copy",
        body:
          "Gboard is Google's keyboard for Android and iOS. Copying from this page gives you the same code points Gboard inserts—ideal when you want a specific character without hunting keyboards.",
      },
    ],
    faqs: [
      {
        question: "How do I copy Android emojis?",
        answer: "Tap any emoji here to copy. Paste into WhatsApp, Messages, Slack, or social apps on your phone.",
      },
      {
        question: "Is Google emoji the same as Samsung emoji?",
        answer:
          "No—Samsung uses its own designs on Galaxy devices. The Unicode character is the same; only the visual style differs.",
      },
    ],
  },
  {
    slug: "samsung",
    name: "Samsung / Galaxy",
    brandLabel: "Samsung One UI",
    icon: "📱",
    description:
      "Copy emojis for Samsung Galaxy phones. One UI emoji style with meanings and paste-ready characters for texting and social media.",
    keywords:
      "samsung emoji, galaxy emoji, samsung emoji copy, android samsung emoji, one ui emoji",
    copyGuide:
      "Copy any emoji below for use on Samsung Galaxy devices. Characters paste into Samsung Messages, WhatsApp, and Instagram with Samsung's native rendering.",
    featuredEmojiSlugs: featuredSlugs,
    sections: [
      {
        heading: "Samsung One UI emoji style",
        body:
          "Samsung Galaxy phones use a distinct emoji font in One UI. Rounded, glossy designs differ from Apple and Google—but Unicode compatibility stays global.",
      },
      {
        heading: "When to use this hub",
        body:
          "Use this list to copy characters quickly and learn meanings. If you are texting someone on a Galaxy phone, they will see Samsung styling on their end.",
      },
    ],
    faqs: [
      {
        question: "How do I copy Samsung emojis?",
        answer: "Click any emoji on this page to copy the Unicode character. It displays in Samsung style on Galaxy devices.",
      },
      {
        question: "Do Samsung emojis work on iPhone?",
        answer:
          "The character copies and sends correctly, but iPhone recipients see Apple's design—not Samsung's artwork.",
      },
    ],
  },
];

export const platformAliasRoutes: Array<{ path: string; platform: EmojiPlatformSlug; variant: PlatformHubVariant }> = [
  { path: "/apple", platform: "apple", variant: "apple" },
  { path: "/iphone-emojis", platform: "apple", variant: "iphone-emojis" },
  { path: "/copy-iphone-emojis", platform: "apple", variant: "copy-iphone-emojis" },
  { path: "/google-emojis", platform: "google", variant: "google" },
  { path: "/android-emojis", platform: "google", variant: "android-emojis" },
  { path: "/copy-android-emojis", platform: "google", variant: "copy-android-emojis" },
  { path: "/samsung-emojis", platform: "samsung", variant: "samsung-emojis" },
  { path: "/copy-samsung-emojis", platform: "samsung", variant: "copy-samsung-emojis" },
];

const variantH1: Partial<Record<PlatformHubVariant, string>> = {
  apple: "Apple Emoji — iPhone & iOS",
  "iphone-emojis": "iPhone Emojis — Full List (2026)",
  "copy-iphone-emojis": "Copy iPhone Emojis — One Click",
  google: "Google Emoji — Android & Gboard",
  "android-emojis": "Android Emojis — Full List (2026)",
  "copy-android-emojis": "Copy Android Emojis — One Click",
  samsung: "Samsung Galaxy Emoji — One UI",
  "samsung-emojis": "Samsung Emojis — Galaxy List (2026)",
  "copy-samsung-emojis": "Copy Samsung Emojis — One Click",
};

export const getPlatformAliasH1 = (variant: PlatformHubVariant, platform: EmojiPlatform) =>
  variantH1[variant] ?? `${platform.icon} ${platform.name} Emojis`;

export const getPlatformAliasPath = (variant: PlatformHubVariant): string | null => {
  const paths: Partial<Record<PlatformHubVariant, string>> = {
    apple: "/apple/",
    "iphone-emojis": "/iphone-emojis/",
    "copy-iphone-emojis": "/copy-iphone-emojis/",
    google: "/google-emojis/",
    "android-emojis": "/android-emojis/",
    "copy-android-emojis": "/copy-android-emojis/",
    "samsung-emojis": "/samsung-emojis/",
    "copy-samsung-emojis": "/copy-samsung-emojis/",
    samsung: "/samsung-emojis/",
  };
  return paths[variant] ?? null;
};

export const getEmojiPlatform = (slug: string) => emojiPlatforms.find((p) => p.slug === slug);

export const getPlatformVariantSeo = (variant: PlatformHubVariant) => {
  const defaults = {
    default: {
      title: "Emoji Platforms — Apple, Google & Samsung Copy Hubs",
      description: "Copy emojis by platform: iPhone (Apple), Android (Google), and Samsung Galaxy—with meanings.",
    },
    apple: {
      title: "Apple Emoji — iPhone & iOS Emoji List | Copy Instantly",
      description: "Browse Apple emoji for iPhone and iPad. Copy any iOS emoji in one click with meanings for texting and social media.",
    },
    "iphone-emojis": {
      title: "iPhone Emojis — Full List & Meanings (2026)",
      description: "Complete iPhone emoji list with copy-paste and meanings. Every emoji your iOS keyboard uses—one click to copy.",
    },
    "copy-iphone-emojis": {
      title: "Copy iPhone Emojis — One-Click Apple Emoji Copy Paste",
      description: "Copy iPhone emojis instantly. Tap any Apple emoji to paste into iMessage, WhatsApp, Instagram, or TikTok.",
    },
    google: {
      title: "Google Emoji — Android & Gboard Copy List",
      description: "Browse Google Noto emojis for Android. Copy any Gboard emoji in one click with meanings.",
    },
    "android-emojis": {
      title: "Android Emojis — Full List & Meanings (2026)",
      description: "Complete Android emoji list with copy-paste and meanings for Gboard, WhatsApp, and social apps.",
    },
    "copy-android-emojis": {
      title: "Copy Android Emojis — One-Click Google Emoji Copy Paste",
      description: "Copy Android emojis instantly. Tap any Google/Gboard emoji to paste into Messages, WhatsApp, or Instagram.",
    },
    samsung: {
      title: "Samsung Galaxy Emoji — One UI Copy List",
      description: "Browse Samsung Galaxy emojis in One UI style. Copy and learn meanings for Galaxy texting.",
    },
    "samsung-emojis": {
      title: "Samsung Emojis — Galaxy Full List (2026)",
      description: "Complete Samsung emoji list with copy-paste and meanings for Galaxy phones.",
    },
    "copy-samsung-emojis": {
      title: "Copy Samsung Emojis — One-Click Galaxy Emoji Copy",
      description: "Copy Samsung Galaxy emojis instantly for Messages, WhatsApp, and social media.",
    },
  };
  return defaults[variant];
};
