export interface Emoji {
  unicode: string;
  name: string;
  slug: string;
  shortMeaning: string;
  detailedMeaning: string;
  usageContexts: string[];
  examples: { context: string; text: string }[];
  variations?: { description: string; emoji: string }[];
  misunderstandings: string[];
  relatedEmojis: string[];
  categorySlug: string;
  subgroup: string;
  keywords: string[];
}

export const emojis: Emoji[] = [
  // SMILEYS & EMOTION
  {
    unicode: "😀",
    name: "Grinning Face",
    slug: "grinning-face",
    shortMeaning: "A classic happy face showing genuine joy and positive vibes.",
    detailedMeaning: "The Grinning Face emoji displays a wide, open smile with visible teeth, conveying happiness, friendliness, and general positivity. It's one of the most straightforward happy emojis, representing genuine joy without any hidden meanings.\n\nThis emoji is perfect for expressing excitement, greeting someone warmly, or adding a positive tone to your message. Unlike some other smiling emojis, the grinning face is universally understood as purely happy and welcoming.",
    usageContexts: ["Greeting friends", "Expressing happiness", "Celebrating good news", "Adding positivity to messages"],
    examples: [
      { context: "Happy / Friendly", text: "Hey! Great to hear from you 😀" },
      { context: "Celebration", text: "I got the job 😀" },
      { context: "Social Media", text: "Beautiful day at the park 😀" }
    ],
    misunderstandings: ["Sometimes confused with 😃 (Grinning Face with Big Eyes), but this one is more subtle", "May appear forced or nervous on some platforms"],
    relatedEmojis: ["grinning-face-with-big-eyes", "beaming-face-with-smiling-eyes", "grinning-squinting-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["happy", "smile", "grin", "joy", "positive"]
  },
  {
    unicode: "😃",
    name: "Grinning Face with Big Eyes",
    slug: "grinning-face-with-big-eyes",
    shortMeaning: "An enthusiastic smiley with wide eyes showing excitement and joy.",
    detailedMeaning: "The Grinning Face with Big Eyes takes the classic smile up a notch with larger, more expressive eyes. This emoji conveys heightened enthusiasm, eagerness, and infectious happiness.\n\nThe big eyes add an element of wonder and excitement that makes this emoji perfect for moments of pleasant surprise or when you're genuinely thrilled about something. It's warmer and more engaging than the standard grinning face.",
    usageContexts: ["Showing enthusiasm", "Expressing excitement", "Friendly greetings", "Positive reactions"],
    examples: [
      { context: "Excitement", text: "Can't wait for the concert tonight 😃" },
      { context: "Friendly", text: "Thanks so much for your help 😃" },
      { context: "Social Media", text: "Just finished my first marathon 😃" }
    ],
    misunderstandings: ["Can seem overly enthusiastic in formal contexts", "Some interpret the big eyes as surprise rather than happiness"],
    relatedEmojis: ["grinning-face", "beaming-face-with-smiling-eyes", "star-struck"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["happy", "excited", "joy", "enthusiastic", "big eyes"]
  },
  {
    unicode: "😄",
    name: "Grinning Face with Smiling Eyes",
    slug: "grinning-face-with-smiling-eyes",
    shortMeaning: "A joyful face with squinting eyes indicating genuine happiness.",
    detailedMeaning: "This emoji shows a broad smile accompanied by eyes that crinkle with joy - the hallmark of a genuine, heartfelt smile. In psychology, this is known as a 'Duchenne smile,' which involves the muscles around the eyes.\n\nThe squinting eyes make this emoji feel more authentic and warm compared to other smiling faces. It's perfect for expressing real happiness rather than polite or surface-level cheerfulness.",
    usageContexts: ["Genuine happiness", "Warm messages", "Celebrating with friends", "Expressing gratitude"],
    examples: [
      { context: "Gratitude", text: "You're the best friend ever 😄" },
      { context: "Joy", text: "Best birthday surprise 😄" },
      { context: "Warmth", text: "So glad we could catch up today 😄" }
    ],
    misunderstandings: ["Sometimes seen as laughing when it's meant to show smiling"],
    relatedEmojis: ["grinning-face", "grinning-face-with-big-eyes", "smiling-face-with-smiling-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["happy", "genuine", "warm", "joyful", "authentic smile"]
  },
  {
    unicode: "😁",
    name: "Beaming Face with Smiling Eyes",
    slug: "beaming-face-with-smiling-eyes",
    shortMeaning: "A radiant smile showing extreme happiness or pride.",
    detailedMeaning: "The Beaming Face emoji shows a full-toothed grin with cheerful, squinted eyes, radiating pure joy and satisfaction. It's often used when someone is particularly proud, pleased, or experiencing peak happiness.\n\nThis emoji conveys a sense of achievement and contentment. The beaming quality makes it perfect for sharing accomplishments, receiving compliments, or expressing how good life feels in a particular moment.",
    usageContexts: ["Expressing pride", "Sharing achievements", "Showing satisfaction", "Radiating positivity"],
    examples: [
      { context: "Pride", text: "Just got promoted 😁" },
      { context: "Satisfaction", text: "Finally finished decorating the house 😁" },
      { context: "Happiness", text: "This vacation is everything 😁" }
    ],
    misunderstandings: ["Can sometimes appear smug or self-satisfied", "May be confused with nervous grinning"],
    relatedEmojis: ["grinning-face-with-smiling-eyes", "star-struck", "smiling-face-with-hearts"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["beaming", "proud", "radiant", "satisfied", "accomplished"]
  },
  {
    unicode: "😆",
    name: "Grinning Squinting Face",
    slug: "grinning-squinting-face",
    shortMeaning: "Eyes squeezed shut in laughter or overwhelming joy.",
    detailedMeaning: "This emoji captures the moment of intense laughter or happiness where your eyes squeeze shut involuntarily. It represents that contagious, belly-laugh kind of joy that takes over your whole face.\n\nPerfect for moments when something is genuinely hilarious or when you're so happy you can hardly contain it. The closed eyes add authenticity to the expression, showing that the emotion is overwhelming.",
    usageContexts: ["Laughing hard", "Finding something hilarious", "Overwhelming joy", "Reacting to jokes"],
    examples: [
      { context: "Laughter", text: "That joke killed me 😆" },
      { context: "Joy", text: "I can't believe we actually did it 😆" },
      { context: "Amusement", text: "Your impression is spot on 😆" }
    ],
    misunderstandings: ["Sometimes confused with 😂 (Face with Tears of Joy)", "Can seem dismissive if used in serious conversations"],
    relatedEmojis: ["face-with-tears-of-joy", "rolling-on-the-floor-laughing", "grinning-face-with-smiling-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["laughing", "hilarious", "joy", "xD", "lol"]
  },
  {
    unicode: "😅",
    name: "Grinning Face with Sweat",
    slug: "grinning-face-with-sweat",
    shortMeaning: "A nervous or relieved smile, often after an awkward situation.",
    detailedMeaning: "The Grinning Face with Sweat combines a smile with a single drop of sweat, conveying relief, nervousness, or awkwardness. It's the digital equivalent of a nervous laugh or the relief after narrowly avoiding disaster.\n\nThis versatile emoji is perfect for situations where things almost went wrong, when you're mildly embarrassed, or when you want to acknowledge an awkward moment while keeping things light.",
    usageContexts: ["Nervous situations", "Relief after stress", "Awkward moments", "Self-deprecating humor"],
    examples: [
      { context: "Relief", text: "Made it to the meeting just in time 😅" },
      { context: "Awkward", text: "Accidentally liked their old photo 😅" },
      { context: "Nervous", text: "Hope I pass this exam 😅" }
    ],
    misunderstandings: ["Sometimes confused with hot/sweaty meanings", "May not convey seriousness in genuinely stressful situations"],
    relatedEmojis: ["slightly-smiling-face", "upside-down-face", "face-with-open-mouth-and-cold-sweat"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["nervous", "awkward", "relief", "phew", "close call"]
  },
  {
    unicode: "🤣",
    name: "Rolling on the Floor Laughing",
    slug: "rolling-on-the-floor-laughing",
    shortMeaning: "Laughing so hard you're literally rolling on the floor.",
    detailedMeaning: "ROFL emoji represents extreme, uncontrollable laughter - the kind that makes you fall over. The tilted face and closed eyes show complete surrender to hilarity, representing those moments when something is so funny you lose all composure.\n\nThis emoji is the visual representation of 'ROFL' (Rolling On the Floor Laughing) and is used when 😂 just isn't enough to express how funny something is.",
    usageContexts: ["Extreme laughter", "Hilarious moments", "Comedy reactions", "When something is incredibly funny"],
    examples: [
      { context: "Hilarious", text: "I can't breathe 🤣" },
      { context: "Comedy", text: "That video is too much 🤣" },
      { context: "Jokes", text: "You really said that to your boss? 🤣" }
    ],
    misunderstandings: ["Overuse has diluted its intensity", "Can seem performative if overused"],
    relatedEmojis: ["face-with-tears-of-joy", "grinning-squinting-face", "laughing"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["ROFL", "hilarious", "dying", "lmao", "crying laughing"]
  },
  {
    unicode: "😂",
    name: "Face with Tears of Joy",
    slug: "face-with-tears-of-joy",
    shortMeaning: "Laughing so hard that tears are streaming down your face.",
    detailedMeaning: "The Face with Tears of Joy is one of the most popular emojis worldwide, representing laughter so intense it brings tears. It perfectly captures that moment when something is so funny you can't help but cry with laughter.\n\nThis emoji has become a universal symbol for 'LOL' and is used billions of times daily. Despite debates about whether it's 'overused,' it remains the go-to choice for expressing genuine amusement.",
    usageContexts: ["Laughing", "Finding something funny", "Reacting to humor", "Expressing amusement"],
    examples: [
      { context: "Funny", text: "That meme is too good 😂" },
      { context: "Humor", text: "Your story made my day 😂" },
      { context: "Reaction", text: "Why did I just snort 😂" }
    ],
    misunderstandings: ["Some consider it overused or 'uncool'", "Generational differences in usage"],
    relatedEmojis: ["rolling-on-the-floor-laughing", "grinning-squinting-face", "smiling-face-with-tear"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["laughing", "tears", "LOL", "funny", "crying laughing"]
  },
  {
    unicode: "🙂",
    name: "Slightly Smiling Face",
    slug: "slightly-smiling-face",
    shortMeaning: "A subtle, polite smile that can convey various emotions.",
    detailedMeaning: "The Slightly Smiling Face is deceptively complex. While it appears to be a simple, pleasant smile, it's often used to convey subtle emotions including passive-aggressiveness, resignation, or ironic contentment.\n\nContext is everything with this emoji. It can be genuinely friendly or carry undertones of 'I'm fine, but not really.' Its ambiguity makes it one of the most versatile and sometimes misunderstood emojis.",
    usageContexts: ["Polite responses", "Subtle irony", "Passive-aggressive tone", "Genuine contentment"],
    examples: [
      { context: "Polite", text: "Thanks for letting me know 🙂" },
      { context: "Ironic", text: "Sure, I'd love to work overtime 🙂" },
      { context: "Genuine", text: "Having a peaceful Sunday 🙂" }
    ],
    misunderstandings: ["Often interpreted as passive-aggressive", "Can seem cold or dismissive", "Meaning varies greatly by context"],
    relatedEmojis: ["upside-down-face", "smiling-face-with-smiling-eyes", "neutral-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["smile", "subtle", "polite", "content", "ironic"]
  },
  {
    unicode: "🙃",
    name: "Upside-Down Face",
    slug: "upside-down-face",
    shortMeaning: "A sarcastic or ironic smile, often indicating things aren't fine.",
    detailedMeaning: "The Upside-Down Face is the emoji equivalent of 'this is fine' while everything burns around you. It conveys sarcasm, irony, silliness, or the feeling of being in an absurd situation.\n\nThis emoji has become popular for expressing that uniquely modern feeling of accepting chaos with a smile. It's perfect for when life is ridiculous and all you can do is laugh (or cry-laugh).",
    usageContexts: ["Sarcasm", "Irony", "Accepting chaos", "Playful goofiness", "Things going wrong"],
    examples: [
      { context: "Sarcasm", text: "Love it when my code breaks right before the deadline 🙃" },
      { context: "Chaos", text: "Third coffee and still not functional 🙃" },
      { context: "Irony", text: "Of course it's raining on my day off 🙃" }
    ],
    misunderstandings: ["Not everyone understands the sarcastic undertone", "Can confuse older users"],
    relatedEmojis: ["slightly-smiling-face", "face-without-mouth", "expressionless-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["sarcasm", "irony", "silly", "upside down", "this is fine"]
  },
  {
    unicode: "😉",
    name: "Winking Face",
    slug: "winking-face",
    shortMeaning: "A playful wink suggesting humor, flirtation, or inside jokes.",
    detailedMeaning: "The Winking Face adds a layer of playfulness to any message. It can signal that you're joking, flirting, or sharing an inside joke. The wink creates a sense of complicity between sender and receiver.\n\nThis versatile emoji softens statements that might otherwise seem harsh and adds a friendly, conspiratorial tone to messages. It's the digital nudge that says 'you know what I mean.'",
    usageContexts: ["Jokes and humor", "Light flirting", "Inside jokes", "Friendly teasing", "Softening statements"],
    examples: [
      { context: "Humor", text: "I might have eaten the last cookie 😉" },
      { context: "Flirting", text: "Nice outfit 😉" },
      { context: "Inside joke", text: "Remember that thing we talked about? 😉" }
    ],
    misunderstandings: ["Can be seen as creepy if overused", "May be misinterpreted as too flirtatious"],
    relatedEmojis: ["smiling-face-with-smiling-eyes", "face-blowing-a-kiss", "smirking-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["wink", "playful", "flirty", "joke", "teasing"]
  },
  {
    unicode: "😊",
    name: "Smiling Face with Smiling Eyes",
    slug: "smiling-face-with-smiling-eyes",
    shortMeaning: "A warm, genuine smile showing happiness and contentment.",
    detailedMeaning: "This emoji represents a warm, heartfelt smile with rosy cheeks and crescent-shaped happy eyes. It conveys genuine warmth, gratitude, and positive feelings without any hidden meaning.\n\nThe blushing cheeks add a touch of shyness or modesty, making this emoji perfect for expressing appreciation, responding to compliments, or showing genuine affection in a wholesome way.",
    usageContexts: ["Warmth and affection", "Gratitude", "Responding to compliments", "Wholesome messages"],
    examples: [
      { context: "Gratitude", text: "Thank you so much for thinking of me 😊" },
      { context: "Affection", text: "You always make me smile 😊" },
      { context: "Contentment", text: "Such a lovely evening with friends 😊" }
    ],
    misunderstandings: ["Rarely misunderstood - universally positive"],
    relatedEmojis: ["grinning-face-with-smiling-eyes", "smiling-face-with-hearts", "hugging-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["warm", "genuine", "blush", "happy", "content"]
  },
  {
    unicode: "😇",
    name: "Smiling Face with Halo",
    slug: "smiling-face-with-halo",
    shortMeaning: "An innocent or angelic face, often used ironically.",
    detailedMeaning: "The Smiling Face with Halo shows an innocent expression topped with a golden halo, traditionally representing angelic or saintly behavior. However, it's frequently used ironically to suggest mischief disguised as innocence.\n\nThis emoji is perfect for when you've done something sneaky but want to appear innocent, or genuinely to express good intentions and pure-hearted actions.",
    usageContexts: ["Ironic innocence", "Feigning innocence", "Good deeds", "Angelic behavior", "Playful mischief"],
    examples: [
      { context: "Mischief", text: "I didn't eat your leftovers 😇" },
      { context: "Good deed", text: "Volunteered at the shelter today 😇" },
      { context: "Irony", text: "Me? Cause trouble? Never 😇" }
    ],
    misunderstandings: ["Can be seen as sanctimonious if used seriously", "Ironic usage may not be understood by everyone"],
    relatedEmojis: ["smiling-face-with-smiling-eyes", "slightly-smiling-face", "smiling-face-with-horns"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-smiling",
    keywords: ["angel", "innocent", "halo", "good", "pure"]
  },
  {
    unicode: "🥰",
    name: "Smiling Face with Hearts",
    slug: "smiling-face-with-hearts",
    shortMeaning: "A loving face surrounded by hearts, showing deep affection.",
    detailedMeaning: "This emoji features a smiling face surrounded by floating hearts, expressing overwhelming love, adoration, or infatuation. It's the visual representation of feeling loved up and full of affection.\n\nPerfect for romantic contexts, expressing love for friends, family, pets, or even things you're passionate about. The multiple hearts emphasize the intensity of positive feelings.",
    usageContexts: ["Romantic love", "Deep affection", "Adoration", "Loving messages", "Appreciation"],
    examples: [
      { context: "Romance", text: "Can't stop thinking about you 🥰" },
      { context: "Love", text: "My dog is the cutest thing ever 🥰" },
      { context: "Appreciation", text: "You guys are the best friends 🥰" }
    ],
    misunderstandings: ["May be too romantic for casual contexts"],
    relatedEmojis: ["smiling-face-with-heart-eyes", "face-blowing-a-kiss", "smiling-face-with-smiling-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-affection",
    keywords: ["love", "hearts", "adoring", "affection", "in love"]
  },
  {
    unicode: "😍",
    name: "Smiling Face with Heart-Eyes",
    slug: "smiling-face-with-heart-eyes",
    shortMeaning: "Heart-shaped eyes showing intense love or attraction.",
    detailedMeaning: "The Smiling Face with Heart-Eyes features heart-shaped eyes that convey intense love, attraction, or enthusiasm. It's the classic 'love at first sight' emoji, used when something or someone is so appealing it makes your eyes turn to hearts.\n\nBeyond romantic contexts, it's widely used to express excitement about anything visually appealing - from food to fashion to art.",
    usageContexts: ["Attraction", "Love at first sight", "Finding something beautiful", "Excitement", "Admiration"],
    examples: [
      { context: "Attraction", text: "Just saw your new profile pic 😍" },
      { context: "Admiration", text: "That sunset is incredible 😍" },
      { context: "Excitement", text: "New phone case arrived 😍" }
    ],
    misunderstandings: ["Can seem too forward in casual contexts", "Overused for mundane things"],
    relatedEmojis: ["smiling-face-with-hearts", "star-struck", "face-blowing-a-kiss"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-affection",
    keywords: ["love", "heart eyes", "attracted", "beautiful", "gorgeous"]
  },
  {
    unicode: "🤩",
    name: "Star-Struck",
    slug: "star-struck",
    shortMeaning: "Star eyes showing amazement, excitement, or being starstruck.",
    detailedMeaning: "The Star-Struck emoji features star-shaped eyes and a big grin, conveying extreme excitement, amazement, or the feeling of meeting a celebrity. It's perfect for moments of awe and wonder.\n\nThis emoji captures that feeling of being dazzled by something or someone impressive. Whether it's meeting your hero, seeing something incredible, or just being extremely excited, this emoji says 'wow!'",
    usageContexts: ["Meeting celebrities", "Amazing experiences", "Extreme excitement", "Being impressed", "Fan moments"],
    examples: [
      { context: "Starstruck", text: "Just met my favorite author 🤩" },
      { context: "Amazement", text: "This concert is everything 🤩" },
      { context: "Excited", text: "I got VIP tickets 🤩" }
    ],
    misunderstandings: ["Rarely misunderstood - clearly excited"],
    relatedEmojis: ["smiling-face-with-heart-eyes", "grinning-face-with-big-eyes", "face-with-open-mouth"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-affection",
    keywords: ["stars", "excited", "amazed", "celebrity", "wow"]
  },
  {
    unicode: "😘",
    name: "Face Blowing a Kiss",
    slug: "face-blowing-a-kiss",
    shortMeaning: "Blowing a kiss to show affection or say goodbye fondly.",
    detailedMeaning: "This emoji shows a face with puckered lips blowing a small heart, representing a kiss sent through the digital space. It's an affectionate gesture used to express love, gratitude, or a fond farewell.\n\nThe blown kiss is versatile - romantic between partners, friendly between close friends, or appreciative toward someone who's done something nice. The small heart adds a touch of love to the gesture.",
    usageContexts: ["Sending love", "Affectionate goodbyes", "Flirting", "Expressing gratitude", "Sign-off for messages"],
    examples: [
      { context: "Love", text: "Goodnight, sleep well 😘" },
      { context: "Gratitude", text: "Thanks for everything, you're amazing 😘" },
      { context: "Flirting", text: "See you tonight 😘" }
    ],
    misunderstandings: ["Can be too intimate for professional contexts"],
    relatedEmojis: ["smiling-face-with-hearts", "kissing-face", "red-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-affection",
    keywords: ["kiss", "love", "affection", "blow kiss", "heart"]
  },
  {
    unicode: "😋",
    name: "Face Savoring Food",
    slug: "face-savoring-food",
    shortMeaning: "Yummy! A face enjoying delicious food or anticipating it.",
    detailedMeaning: "The Face Savoring Food shows a pleased expression with a tongue licking the corner of the mouth, as if tasting something delicious. It's the perfect emoji for food-related content and cravings.\n\nBeyond literal food references, this emoji can express anticipation of any pleasurable experience or playful hunger for various things in life.",
    usageContexts: ["Delicious food", "Food cravings", "Recipes and cooking", "Anticipating treats", "Playful desire"],
    examples: [
      { context: "Food", text: "Just ordered pizza 😋" },
      { context: "Cooking", text: "Made my grandma's recipe 😋" },
      { context: "Craving", text: "Could really go for some ice cream right now 😋" }
    ],
    misunderstandings: ["Can seem suggestive in certain contexts"],
    relatedEmojis: ["drooling-face", "yum", "face-with-tongue"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-tongue",
    keywords: ["yummy", "delicious", "tasty", "food", "craving"]
  },
  {
    unicode: "😛",
    name: "Face with Tongue",
    slug: "face-with-tongue",
    shortMeaning: "A playful face sticking out its tongue.",
    detailedMeaning: "This emoji shows a face with its tongue sticking out, conveying playfulness, silliness, or lighthearted teasing. It's the digital equivalent of sticking your tongue out at someone in a friendly way.\n\nPerfect for adding a playful tone to messages, softening teasing comments, or expressing childlike silliness.",
    usageContexts: ["Playfulness", "Teasing", "Silliness", "Joking around", "Childlike fun"],
    examples: [
      { context: "Playful", text: "Bet I can beat you 😛" },
      { context: "Teasing", text: "You wish you were as cool as me 😛" },
      { context: "Silly", text: "Friday mood 😛" }
    ],
    misunderstandings: ["Rarely misunderstood"],
    relatedEmojis: ["winking-face-with-tongue", "squinting-face-with-tongue", "zany-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-tongue",
    keywords: ["tongue", "playful", "silly", "teasing", "fun"]
  },
  {
    unicode: "😜",
    name: "Winking Face with Tongue",
    slug: "winking-face-with-tongue",
    shortMeaning: "A cheeky wink with tongue out for playful mischief.",
    detailedMeaning: "Combining a wink with a stuck-out tongue, this emoji amplifies playfulness with a dash of mischievous energy. It's cheekier and more suggestive than the regular tongue emoji.\n\nThis emoji is perfect for flirty banter, inside jokes, or when you're being deliberately silly and want the recipient to know you're not being serious.",
    usageContexts: ["Cheeky flirting", "Mischief", "Playful teasing", "Inside jokes", "Being silly"],
    examples: [
      { context: "Flirty", text: "Wouldn't you like to know 😜" },
      { context: "Mischief", text: "I may have hidden your charger 😜" },
      { context: "Playful", text: "Catch me if you can 😜" }
    ],
    misunderstandings: ["Can be seen as too flirtatious", "May seem immature in serious contexts"],
    relatedEmojis: ["face-with-tongue", "zany-face", "winking-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-tongue",
    keywords: ["wink", "tongue", "cheeky", "mischief", "flirty"]
  },
  {
    unicode: "🤪",
    name: "Zany Face",
    slug: "zany-face",
    shortMeaning: "A wild, crazy face for unhinged or silly moments.",
    detailedMeaning: "The Zany Face features an asymmetrical expression with one large eye, stuck-out tongue, and tilted head, conveying complete silliness or being 'unhinged' in a fun way. It's perfect for expressing wild, carefree energy.\n\nThis emoji is great for moments of crazy fun, when you're acting goofy, or when life gets absurdly chaotic in an entertaining way.",
    usageContexts: ["Being crazy/wild", "Silly moments", "Unhinged humor", "Goofy behavior", "Chaotic energy"],
    examples: [
      { context: "Wild", text: "Third coffee and feeling dangerous 🤪" },
      { context: "Silly", text: "Dancing in the rain at midnight 🤪" },
      { context: "Chaos", text: "Who needs sleep anyway 🤪" }
    ],
    misunderstandings: ["Can seem too chaotic for some", "May not translate well across all ages"],
    relatedEmojis: ["winking-face-with-tongue", "face-with-tongue", "grinning-squinting-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-tongue",
    keywords: ["crazy", "silly", "wild", "goofy", "unhinged"]
  },
  {
    unicode: "🤗",
    name: "Hugging Face",
    slug: "hugging-face",
    shortMeaning: "Open hands offering a warm, welcoming hug.",
    detailedMeaning: "The Hugging Face shows a smiling face with open hands, as if offering or receiving a warm embrace. It conveys warmth, support, and the desire to comfort or be comforted.\n\nThis emoji is perfect for sending virtual hugs, showing support during tough times, or expressing excitement to see someone. The open gesture feels welcoming and inclusive.",
    usageContexts: ["Virtual hugs", "Emotional support", "Welcoming", "Comfort", "Expressing care"],
    examples: [
      { context: "Support", text: "I'm here for you 🤗" },
      { context: "Comfort", text: "Sending you the biggest hug 🤗" },
      { context: "Welcome", text: "So excited to see you 🤗" }
    ],
    misunderstandings: ["Some platforms render hands as jazz hands instead of hugging"],
    relatedEmojis: ["smiling-face-with-smiling-eyes", "smiling-face-with-hearts", "red-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-hand",
    keywords: ["hug", "warm", "embrace", "support", "care"]
  },
  {
    unicode: "🤔",
    name: "Thinking Face",
    slug: "thinking-face",
    shortMeaning: "Deep in thought, pondering, or skeptical about something.",
    detailedMeaning: "The Thinking Face shows a face with raised eyebrow and hand on chin in the classic 'thinker' pose. It conveys contemplation, skepticism, or genuine curiosity about a topic.\n\nThis emoji is incredibly versatile - used for actual thinking, expressing doubt, asking questions, or humorously suggesting you're not quite buying what someone's selling.",
    usageContexts: ["Pondering", "Skepticism", "Curiosity", "Considering options", "Questioning"],
    examples: [
      { context: "Thinking", text: "Hmm, what should we have for dinner 🤔" },
      { context: "Skeptical", text: "Are you sure about that 🤔" },
      { context: "Curious", text: "I wonder what that means 🤔" }
    ],
    misunderstandings: ["Can seem passive-aggressive when questioning someone", "May come across as condescending"],
    relatedEmojis: ["face-with-raised-eyebrow", "neutral-face", "confused-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-hand",
    keywords: ["thinking", "pondering", "hmm", "skeptical", "curious"]
  },
  {
    unicode: "🫢",
    name: "Face with Open Eyes and Hand Over Mouth",
    slug: "face-with-open-eyes-and-hand-over-mouth",
    shortMeaning: "Shocked surprise or accidentally saying too much.",
    detailedMeaning: "This emoji shows wide eyes with a hand covering the mouth, conveying shock, surprise, or the realization that you've said something you shouldn't have. It's the 'oops, did I say that out loud?' face.\n\nPerfect for moments of surprising revelations, accidental oversharing, or reacting to scandalous news. The covered mouth adds an element of discretion or regret.",
    usageContexts: ["Shock", "Spilling secrets", "Gossiping", "Surprise", "Oops moments"],
    examples: [
      { context: "Shock", text: "Did you hear what happened 🫢" },
      { context: "Oops", text: "I wasn't supposed to say that 🫢" },
      { context: "Gossip", text: "The tea is piping hot today 🫢" }
    ],
    misunderstandings: ["Newer emoji - not everyone recognizes it"],
    relatedEmojis: ["face-with-hand-over-mouth", "flushed-face", "face-screaming-in-fear"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-hand",
    keywords: ["shocked", "oops", "secret", "surprised", "gossip"]
  },
  {
    unicode: "🤭",
    name: "Face with Hand Over Mouth",
    slug: "face-with-hand-over-mouth",
    shortMeaning: "Giggling or mischievous, hiding a smile or secret.",
    detailedMeaning: "This emoji shows smiling eyes with a hand covering the mouth, suggesting someone giggling, keeping a secret, or trying to hide their amusement. It has a coy, playful quality.\n\nUnlike its shocked cousin, this version is more about hidden laughter or knowing something amusing. It's perfect for sharing inside jokes or reacting to something secretly funny.",
    usageContexts: ["Giggling", "Secrets", "Hidden amusement", "Coy behavior", "Inside jokes"],
    examples: [
      { context: "Giggling", text: "I shouldn't laugh but... 🤭" },
      { context: "Secret", text: "I know something you don't know 🤭" },
      { context: "Coy", text: "Maybe I did, maybe I didn't 🤭" }
    ],
    misunderstandings: ["Can seem like mocking someone"],
    relatedEmojis: ["face-with-open-eyes-and-hand-over-mouth", "smiling-face-with-smiling-eyes", "winking-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-hand",
    keywords: ["giggle", "secret", "coy", "tee-hee", "hiding smile"]
  },
  {
    unicode: "😐",
    name: "Neutral Face",
    slug: "neutral-face",
    shortMeaning: "Expressionless and unimpressed, showing no emotion.",
    detailedMeaning: "The Neutral Face displays a completely blank expression with a straight-line mouth, conveying boredom, indifference, or deliberate emotional blankness. It's the face equivalent of 'meh.'\n\nThis emoji is often used when you're unimpressed, have no reaction, or want to convey that you're intentionally withholding emotion. It can also express awkwardness or discomfort.",
    usageContexts: ["Indifference", "Unimpressed", "Boredom", "Awkwardness", "Deadpan humor"],
    examples: [
      { context: "Unimpressed", text: "Cool story 😐" },
      { context: "Bored", text: "This meeting could have been an email 😐" },
      { context: "Awkward", text: "So that just happened 😐" }
    ],
    misunderstandings: ["Can come across as rude or dismissive", "Tone is easily misread"],
    relatedEmojis: ["expressionless-face", "face-without-mouth", "unamused-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-neutral-skeptical",
    keywords: ["meh", "blank", "indifferent", "unimpressed", "neutral"]
  },
  {
    unicode: "😑",
    name: "Expressionless Face",
    slug: "expressionless-face",
    shortMeaning: "Fed up and done - a blank stare of exhaustion.",
    detailedMeaning: "With closed eyes and a flat mouth, the Expressionless Face conveys being utterly done, fed up, or emotionally drained. It's a step beyond neutral - actively choosing not to engage.\n\nThis emoji is perfect for moments when words fail you, when someone has pushed your patience too far, or when you're so tired of a situation that you've gone blank.",
    usageContexts: ["Being done", "Emotional exhaustion", "Fed up", "No words", "Deep frustration"],
    examples: [
      { context: "Done", text: "Asked to explain this for the 10th time 😑" },
      { context: "Fed up", text: "They're at it again 😑" },
      { context: "Exhausted", text: "Monday vibes 😑" }
    ],
    misunderstandings: ["Very strong negative tone - use carefully"],
    relatedEmojis: ["neutral-face", "unamused-face", "face-with-rolling-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-neutral-skeptical",
    keywords: ["done", "fed up", "exhausted", "over it", "blank"]
  },
  {
    unicode: "🙄",
    name: "Face with Rolling Eyes",
    slug: "face-with-rolling-eyes",
    shortMeaning: "An eye roll expressing annoyance, disbelief, or frustration.",
    detailedMeaning: "The Face with Rolling Eyes captures that universal gesture of exasperation - the eye roll. It conveys annoyance, frustration, or 'here we go again' energy when something is tedious or unbelievable.\n\nThis emoji is the digital sigh, perfect for expressing that you've had enough of something without having to spell it out. It's widely understood across cultures as a sign of mild contempt or weariness.",
    usageContexts: ["Annoyance", "Exasperation", "Disbelief", "Frustration", "Sarcasm"],
    examples: [
      { context: "Annoyed", text: "He's mansplaining again 🙄" },
      { context: "Exasperated", text: "Another Monday meeting 🙄" },
      { context: "Disbelief", text: "Sure, that happened 🙄" }
    ],
    misunderstandings: ["Very sassy - can offend easily", "Not suitable for professional contexts"],
    relatedEmojis: ["unamused-face", "expressionless-face", "face-exhaling"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-neutral-skeptical",
    keywords: ["eye roll", "annoyed", "frustrated", "exasperated", "sassy"]
  },
  {
    unicode: "😏",
    name: "Smirking Face",
    slug: "smirking-face",
    shortMeaning: "A sly, suggestive smirk with mischievous undertones.",
    detailedMeaning: "The Smirking Face features a half-smile that suggests you know something others don't. It's flirtatious, smug, or mischievously confident - the emoji equivalent of a knowing look.\n\nThis emoji can range from playfully suggestive to subtly arrogant. It's often used in flirty contexts, when making suggestive jokes, or when you've just done something clever.",
    usageContexts: ["Flirting", "Suggestive comments", "Smugness", "Knowing something", "Subtle bragging"],
    examples: [
      { context: "Flirty", text: "Your place or mine 😏" },
      { context: "Smug", text: "Told you so 😏" },
      { context: "Suggestive", text: "We could do other things instead 😏" }
    ],
    misunderstandings: ["Often seen as too forward or suggestive", "Can seem arrogant"],
    relatedEmojis: ["winking-face", "face-with-raised-eyebrow", "relieved-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-neutral-skeptical",
    keywords: ["smirk", "flirty", "suggestive", "smug", "knowing"]
  },
  {
    unicode: "😴",
    name: "Sleeping Face",
    slug: "sleeping-face",
    shortMeaning: "Fast asleep with Z's floating above, signaling sleep or boredom.",
    detailedMeaning: "The Sleeping Face shows closed eyes with 'ZZZ' indicating deep sleep. It's used to say goodnight, express tiredness, or indicate that something is so boring it's putting you to sleep.\n\nThis emoji is perfect for late-night conversations, expressing exhaustion, or playfully suggesting that something (like a long meeting) is sleep-inducing.",
    usageContexts: ["Going to sleep", "Feeling tired", "Something boring", "Late night chats", "Need rest"],
    examples: [
      { context: "Goodnight", text: "Time for bed, night! 😴" },
      { context: "Tired", text: "Didn't sleep at all last night 😴" },
      { context: "Boring", text: "That lecture was 😴" }
    ],
    misunderstandings: ["Using it to call something boring can offend"],
    relatedEmojis: ["sleepy-face", "yawning-face", "face-in-clouds"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-sleepy",
    keywords: ["sleep", "tired", "zzz", "boring", "goodnight"]
  },
  {
    unicode: "🤤",
    name: "Drooling Face",
    slug: "drooling-face",
    shortMeaning: "Drooling with desire for food, attraction, or something amazing.",
    detailedMeaning: "The Drooling Face shows a slack-jawed expression with drool, indicating intense desire or craving. While often used for delicious food, it extends to anything extremely attractive or desirable.\n\nThis emoji captures that visceral reaction when something is so good you can't help but drool. It's unabashedly enthusiastic about whatever has caught your attention.",
    usageContexts: ["Food cravings", "Physical attraction", "Desire", "Something amazing", "Hunger"],
    examples: [
      { context: "Food", text: "Look at this burger 🤤" },
      { context: "Attraction", text: "That new photoshoot though 🤤" },
      { context: "Want", text: "I need that car 🤤" }
    ],
    misunderstandings: ["Can seem too thirsty or crude", "Context matters a lot"],
    relatedEmojis: ["face-savoring-food", "smiling-face-with-heart-eyes", "hungry"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-sleepy",
    keywords: ["drool", "want", "hungry", "craving", "desire"]
  },
  {
    unicode: "🤒",
    name: "Face with Thermometer",
    slug: "face-with-thermometer",
    shortMeaning: "Feeling sick with a fever, usually calling in sick.",
    detailedMeaning: "This emoji shows an unwell face with a thermometer in the mouth, indicating illness, particularly fever. It's the go-to emoji for communicating that you're sick.\n\nUsed when you're genuinely ill, need to cancel plans due to sickness, or are metaphorically 'sick' of something. The thermometer specifically suggests fever-type illness.",
    usageContexts: ["Being sick", "Calling in sick", "Having a fever", "Feeling unwell", "Canceling plans"],
    examples: [
      { context: "Sick", text: "Can't make it today 🤒" },
      { context: "Unwell", text: "Think I caught the flu 🤒" },
      { context: "Rest", text: "Spending the day in bed 🤒" }
    ],
    misunderstandings: ["Clear meaning - rarely misunderstood"],
    relatedEmojis: ["nauseated-face", "sneezing-face", "face-with-head-bandage"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-unwell",
    keywords: ["sick", "fever", "ill", "unwell", "temperature"]
  },
  {
    unicode: "🤢",
    name: "Nauseated Face",
    slug: "nauseated-face",
    shortMeaning: "Feeling sick to the stomach, disgusted, or grossed out.",
    detailedMeaning: "The Nauseated Face shows a green-tinged face clearly about to be sick. It expresses physical nausea, disgust at something gross, or strong distaste for a situation.\n\nThis emoji works for actual stomach troubles, reacting to something disgusting, or expressing strong disapproval of something you find distasteful.",
    usageContexts: ["Feeling nauseous", "Disgust", "Grossed out", "Strong distaste", "Motion sickness"],
    examples: [
      { context: "Sick", text: "That seafood is not sitting right 🤢" },
      { context: "Disgusted", text: "Can't believe people eat that 🤢" },
      { context: "Distaste", text: "His behavior was 🤢" }
    ],
    misunderstandings: ["Very strong reaction - use appropriately"],
    relatedEmojis: ["face-vomiting", "face-with-thermometer", "confounded-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-unwell",
    keywords: ["nausea", "sick", "disgusted", "gross", "queasy"]
  },
  {
    unicode: "😷",
    name: "Face with Medical Mask",
    slug: "face-with-medical-mask",
    shortMeaning: "Wearing a medical mask, often to prevent spreading illness.",
    detailedMeaning: "This emoji shows a face wearing a medical mask, indicating illness prevention, health consciousness, or being sick and protecting others. Post-pandemic, its usage has become very common.\n\nUsed to indicate you're sick but being responsible, concerned about health, or in situations requiring masks. It's also used metaphorically for 'protecting yourself' from various things.",
    usageContexts: ["Wearing a mask", "Being sick", "Health consciousness", "Pandemic references", "Protection"],
    examples: [
      { context: "Sick", text: "Feeling under the weather, staying home 😷" },
      { context: "Health", text: "Mask on, staying safe 😷" },
      { context: "Caution", text: "Everyone in the office is sick 😷" }
    ],
    misunderstandings: ["Post-pandemic, meaning is well understood"],
    relatedEmojis: ["face-with-thermometer", "nauseated-face", "sneezing-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-unwell",
    keywords: ["mask", "sick", "health", "protection", "medical"]
  },
  {
    unicode: "😭",
    name: "Loudly Crying Face",
    slug: "loudly-crying-face",
    shortMeaning: "Sobbing uncontrollably with tears streaming down.",
    detailedMeaning: "The Loudly Crying Face shows a face with streams of tears, representing intense crying, overwhelming sadness, or ironically, extreme happiness or laughter. Context determines if it's genuine sadness or hyperbolic joy.\n\nThis emoji has evolved beyond pure sadness - it's often used for 'I'm crying laughing' or 'this is so beautiful I'm crying.' The intensity makes it dramatic by nature.",
    usageContexts: ["Deep sadness", "Overwhelming emotion", "Crying laughing", "Something beautiful", "Dramatic reaction"],
    examples: [
      { context: "Sad", text: "My favorite show just ended 😭" },
      { context: "Laughter", text: "I can't with this video 😭" },
      { context: "Moved", text: "This proposal is so beautiful 😭" }
    ],
    misunderstandings: ["Dual meaning (sad vs. laughing) can confuse"],
    relatedEmojis: ["crying-face", "face-with-tears-of-joy", "pleading-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-concerned",
    keywords: ["crying", "sobbing", "tears", "sad", "emotional"]
  },
  {
    unicode: "😢",
    name: "Crying Face",
    slug: "crying-face",
    shortMeaning: "A single tear falling, showing sadness or disappointment.",
    detailedMeaning: "The Crying Face shows a sad expression with a single tear, indicating genuine but contained sadness, disappointment, or hurt feelings. It's less dramatic than the loudly crying emoji.\n\nThis emoji is perfect for moments of quiet sadness, disappointment, or when something touches you emotionally but doesn't warrant full-on sobbing.",
    usageContexts: ["Sadness", "Disappointment", "Hurt feelings", "Touched emotionally", "Mild crying"],
    examples: [
      { context: "Sad", text: "Had to say goodbye today 😢" },
      { context: "Disappointed", text: "The concert got cancelled 😢" },
      { context: "Touched", text: "This story got me 😢" }
    ],
    misunderstandings: ["Clear meaning - rarely misunderstood"],
    relatedEmojis: ["loudly-crying-face", "pleading-face", "disappointed-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-concerned",
    keywords: ["tear", "sad", "cry", "disappointed", "upset"]
  },
  {
    unicode: "🥺",
    name: "Pleading Face",
    slug: "pleading-face",
    shortMeaning: "Big puppy-dog eyes begging, pleading, or showing vulnerability.",
    detailedMeaning: "The Pleading Face features large, shiny, puppy-like eyes that express begging, vulnerability, or adorable pleading. It's the emoji equivalent of making 'puppy dog eyes' at someone.\n\nThis emoji has become wildly popular for expressing soft emotions, asking for things sweetly, showing vulnerability, or reacting to something extremely cute or touching.",
    usageContexts: ["Begging", "Asking sweetly", "Showing vulnerability", "Reacting to cuteness", "Soft emotions"],
    examples: [
      { context: "Pleading", text: "Please can we get ice cream 🥺" },
      { context: "Cute", text: "Look at this puppy 🥺" },
      { context: "Vulnerable", text: "I really miss you 🥺" }
    ],
    misunderstandings: ["Overuse has diluted impact somewhat"],
    relatedEmojis: ["crying-face", "smiling-face-with-tear", "face-holding-back-tears"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-concerned",
    keywords: ["pleading", "puppy eyes", "please", "cute", "vulnerable"]
  },
  {
    unicode: "😤",
    name: "Face with Steam From Nose",
    slug: "face-with-steam-from-nose",
    shortMeaning: "Steam from the nose showing anger, frustration, or determination.",
    detailedMeaning: "This emoji shows a face with steam or air puffing from the nostrils, representing frustration, anger, or intense determination. The expression is focused and intense rather than explosive.\n\nOriginally meant to show triumph or determination (like a bull), it's now commonly used for frustration and annoyance. Context helps clarify whether it's angry or determined.",
    usageContexts: ["Frustration", "Anger", "Determination", "Intensity", "Huffing"],
    examples: [
      { context: "Frustrated", text: "This is so annoying 😤" },
      { context: "Determined", text: "Let's crush this workout 😤" },
      { context: "Angry", text: "Can't believe they did that 😤" }
    ],
    misunderstandings: ["Triumph vs. anger meaning varies", "Some see pride, others see frustration"],
    relatedEmojis: ["angry-face", "pouting-face", "triumph"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-negative",
    keywords: ["steam", "frustrated", "angry", "huffing", "determined"]
  },
  {
    unicode: "😡",
    name: "Pouting Face",
    slug: "pouting-face",
    shortMeaning: "A red face showing intense anger or extreme frustration.",
    detailedMeaning: "The Pouting Face (often appearing red) shows intense anger with a frowning, scowling expression. It represents being genuinely furious, upset, or extremely frustrated about something.\n\nThis emoji communicates strong negative emotion and should be used when something has really crossed a line. It's more serious than mild frustration emojis.",
    usageContexts: ["Intense anger", "Fury", "Extreme frustration", "Being upset", "Rage"],
    examples: [
      { context: "Angry", text: "They cancelled my order again 😡" },
      { context: "Furious", text: "How could they do this 😡" },
      { context: "Upset", text: "This policy is unacceptable 😡" }
    ],
    misunderstandings: ["Very strong - can escalate situations"],
    relatedEmojis: ["angry-face", "face-with-symbols-on-mouth", "face-with-steam-from-nose"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-negative",
    keywords: ["angry", "mad", "furious", "rage", "red face"]
  },
  {
    unicode: "😈",
    name: "Smiling Face with Horns",
    slug: "smiling-face-with-horns",
    shortMeaning: "A devilish grin for mischief, naughtiness, or temptation.",
    detailedMeaning: "The Smiling Face with Horns shows a happy purple face with devil horns, representing playful mischief, naughtiness, or giving in to temptation. It's devilish but in a fun, lighthearted way.\n\nThis emoji is perfect for when you're being a little bad, suggesting something naughty, or embracing your mischievous side. It's the 'little devil on your shoulder' personified.",
    usageContexts: ["Mischief", "Naughtiness", "Temptation", "Being bad", "Devilish fun"],
    examples: [
      { context: "Mischief", text: "Ordered dessert before dinner 😈" },
      { context: "Naughty", text: "Skip work and come to the beach? 😈" },
      { context: "Tempting", text: "One more drink won't hurt 😈" }
    ],
    misunderstandings: ["Can seem too suggestive in some contexts"],
    relatedEmojis: ["smirking-face", "angry-face-with-horns", "winking-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-negative",
    keywords: ["devil", "mischief", "naughty", "bad", "temptation"]
  },
  {
    unicode: "💀",
    name: "Skull",
    slug: "skull",
    shortMeaning: "A skull often meaning 'I'm dead' from laughter or shock.",
    detailedMeaning: "The Skull emoji has transcended its literal meaning to become a popular way of saying 'I'm dead' - meaning something is so funny, shocking, or overwhelming that you've figuratively died.\n\nIn modern usage, especially among younger generations, it's primarily a humor reaction. It can also represent death, danger, or Halloween themes in more literal contexts.",
    usageContexts: ["Dying laughing", "Extreme reaction", "Shock", "Dark humor", "Halloween"],
    examples: [
      { context: "Laughing", text: "That joke killed me 💀" },
      { context: "Shock", text: "She really said that 💀" },
      { context: "Overwhelmed", text: "This exam is going to be 💀" }
    ],
    misunderstandings: ["Older users may take literally", "Gen Z humor may not translate"],
    relatedEmojis: ["skull-and-crossbones", "face-with-tears-of-joy", "rolling-on-the-floor-laughing"],
    categorySlug: "smileys-and-emotion",
    subgroup: "face-negative",
    keywords: ["dead", "dying", "skull", "hilarious", "shocked"]
  },
  {
    unicode: "❤️",
    name: "Red Heart",
    slug: "red-heart",
    shortMeaning: "The classic symbol of love, affection, and romance.",
    detailedMeaning: "The Red Heart is the quintessential symbol of love. It represents romantic love, deep affection, and strong emotional connection. It's the most popular heart emoji and universally understood.\n\nUsed between romantic partners, close friends, and family members to express love. Its simplicity and universality make it the go-to heart for sincere expressions of love.",
    usageContexts: ["Romantic love", "Deep affection", "Family love", "Close friendships", "Valentine's Day"],
    examples: [
      { context: "Romance", text: "I love you ❤️" },
      { context: "Family", text: "Miss you, mom ❤️" },
      { context: "Friendship", text: "You're my best friend ❤️" }
    ],
    misunderstandings: ["Very clear meaning - universally understood"],
    relatedEmojis: ["smiling-face-with-hearts", "beating-heart", "growing-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["love", "heart", "romance", "affection", "valentine"]
  },
  {
    unicode: "🧡",
    name: "Orange Heart",
    slug: "orange-heart",
    shortMeaning: "Friendship, support, and care - less romantic than red.",
    detailedMeaning: "The Orange Heart represents warmth, care, and friendship. It's often used when red feels too romantic but you still want to express affection. It sits in a comfortable middle ground.\n\nPopular for friendships, showing support, or expressing care without romantic implications. Some also use it seasonally for autumn or to match aesthetics.",
    usageContexts: ["Friendship", "Caring", "Support", "Non-romantic affection", "Autumn vibes"],
    examples: [
      { context: "Friendship", text: "Thanks for being there 🧡" },
      { context: "Support", text: "You've got this 🧡" },
      { context: "Autumn", text: "Fall is here 🧡🍂" }
    ],
    misunderstandings: ["Less universal meaning than red heart"],
    relatedEmojis: ["red-heart", "yellow-heart", "growing-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["orange", "friendship", "care", "warm", "support"]
  },
  {
    unicode: "💛",
    name: "Yellow Heart",
    slug: "yellow-heart",
    shortMeaning: "Happiness, friendship, and platonic love.",
    detailedMeaning: "The Yellow Heart symbolizes happiness, friendship, and optimism. It's often associated with platonic love - the love between friends rather than romantic partners.\n\nThis sunny heart is perfect for best friends, spreading positivity, or when you want to express care without romantic undertones. It's also popular for its connection to BTS fans (ARMY).",
    usageContexts: ["Best friends", "Happiness", "Platonic love", "Positivity", "BTS/ARMY"],
    examples: [
      { context: "Friendship", text: "BFFs forever 💛" },
      { context: "Happy", text: "You brighten my day 💛" },
      { context: "Platonic", text: "Love you, bestie 💛" }
    ],
    misunderstandings: ["Some associate specifically with K-pop fandoms"],
    relatedEmojis: ["orange-heart", "green-heart", "star"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["yellow", "friendship", "happy", "platonic", "sunny"]
  },
  {
    unicode: "💚",
    name: "Green Heart",
    slug: "green-heart",
    shortMeaning: "Nature, health, jealousy, or Irish/environmental themes.",
    detailedMeaning: "The Green Heart has multiple associations: nature and environment, health and wellness, Irish identity (St. Patrick's Day), and sometimes jealousy. Context determines the intended meaning.\n\nPopular among environmental activists, health enthusiasts, and for St. Patrick's Day. Some cultures also associate green with envy, so it occasionally carries that meaning.",
    usageContexts: ["Nature", "Environment", "Health", "Irish themes", "Jealousy"],
    examples: [
      { context: "Nature", text: "Plant a tree today 💚" },
      { context: "Irish", text: "Happy St. Patrick's Day 💚☘️" },
      { context: "Health", text: "Gym life 💚" }
    ],
    misunderstandings: ["Jealousy meaning varies by culture"],
    relatedEmojis: ["yellow-heart", "blue-heart", "seedling"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["green", "nature", "health", "Irish", "envy"]
  },
  {
    unicode: "💙",
    name: "Blue Heart",
    slug: "blue-heart",
    shortMeaning: "Trust, loyalty, peace, and awareness causes.",
    detailedMeaning: "The Blue Heart represents trust, loyalty, peace, and stability. It's often used for awareness campaigns (autism, water conservation), brand aesthetics, and expressing calm, steady affection.\n\nThis heart works well for professional contexts where red might seem too personal. It conveys depth and sincerity without the intensity of romantic love.",
    usageContexts: ["Trust", "Loyalty", "Awareness causes", "Brand aesthetics", "Calm affection"],
    examples: [
      { context: "Trust", text: "You can count on me 💙" },
      { context: "Awareness", text: "World Autism Day 💙" },
      { context: "Loyal", text: "Forever and always 💙" }
    ],
    misunderstandings: ["Generally positive and understood"],
    relatedEmojis: ["green-heart", "purple-heart", "water-wave"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["blue", "trust", "loyalty", "peace", "calm"]
  },
  {
    unicode: "💜",
    name: "Purple Heart",
    slug: "purple-heart",
    shortMeaning: "BTS love, creativity, mystery, or sensitive understanding.",
    detailedMeaning: "The Purple Heart has strong associations with BTS and their ARMY fandom (borahae - 'I purple you'). Beyond K-pop, it represents spirituality, mystery, creativity, and compassionate love.\n\nUsed by BTS fans as a signature symbol, but also popular for expressing understanding, support for LGBTQ+ communities, and artistic/creative contexts.",
    usageContexts: ["BTS fandom", "Creativity", "Spirituality", "LGBTQ+ support", "Sensitive love"],
    examples: [
      { context: "BTS", text: "Borahae 💜" },
      { context: "Creative", text: "Love your art 💜" },
      { context: "Support", text: "I understand 💜" }
    ],
    misunderstandings: ["Strong BTS association may overshadow other meanings"],
    relatedEmojis: ["blue-heart", "black-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["purple", "BTS", "borahae", "creative", "spiritual"]
  },
  {
    unicode: "🖤",
    name: "Black Heart",
    slug: "black-heart",
    shortMeaning: "Dark humor, sorrow, emo aesthetics, or unconventional love.",
    detailedMeaning: "The Black Heart represents dark humor, morbid affection, grief, or alternative aesthetics. It's popular in emo, goth, and alternative communities as a way to express love with edge.\n\nCan signify deep, unconventional love, solidarity in dark times, or simply match a dark aesthetic. It's also used in Black Lives Matter contexts and for dark humor.",
    usageContexts: ["Dark humor", "Alternative aesthetics", "Grief", "Unconventional love", "BLM solidarity"],
    examples: [
      { context: "Dark humor", text: "Embracing the void 🖤" },
      { context: "Aesthetic", text: "All black everything 🖤" },
      { context: "Deep love", text: "You're my darkness 🖤" }
    ],
    misunderstandings: ["Can seem negative or edgy to some"],
    relatedEmojis: ["purple-heart", "skull", "bat"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["black", "dark", "emo", "goth", "alternative"]
  },
  {
    unicode: "💔",
    name: "Broken Heart",
    slug: "broken-heart",
    shortMeaning: "Heartbreak, sadness over loss, or emotional pain.",
    detailedMeaning: "The Broken Heart shows a red heart split in two, representing heartbreak, loss, and emotional pain. It's the visual symbol of a broken heart - that deep ache of lost love or profound disappointment.\n\nUsed for breakups, loss, disappointment, or any situation that leaves you emotionally hurt. It communicates pain without needing many words.",
    usageContexts: ["Breakups", "Loss", "Disappointment", "Emotional pain", "Sadness"],
    examples: [
      { context: "Breakup", text: "We're done 💔" },
      { context: "Loss", text: "Miss you every day 💔" },
      { context: "Hurt", text: "That really stung 💔" }
    ],
    misunderstandings: ["Clear meaning - universally understood"],
    relatedEmojis: ["crying-face", "loudly-crying-face", "mending-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["broken", "heartbreak", "sad", "loss", "pain"]
  },
  {
    unicode: "🔥",
    name: "Fire",
    slug: "fire",
    shortMeaning: "Hot, exciting, impressive, or trending - something is lit!",
    detailedMeaning: "The Fire emoji represents something that's hot, exciting, or impressive - it's 'lit' or 'fire' in slang terms. It conveys that something is particularly good, attractive, or trendy.\n\nThis extremely popular emoji is used for compliments, expressing that something is impressive, describing hot weather, or showing that content is trending. It's a universal symbol of approval.",
    usageContexts: ["Compliments", "Something impressive", "Hot/trendy", "Attractive content", "Enthusiasm"],
    examples: [
      { context: "Compliment", text: "Your new track is 🔥" },
      { context: "Hot", text: "That outfit is 🔥" },
      { context: "Trending", text: "This meme is straight 🔥" }
    ],
    misunderstandings: ["Very clear positive meaning"],
    relatedEmojis: ["hundred-points", "star-struck", "collision"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["fire", "hot", "lit", "impressive", "trending"]
  },
  {
    unicode: "✨",
    name: "Sparkles",
    slug: "sparkles",
    shortMeaning: "Magic, excitement, or adding emphasis and flair.",
    detailedMeaning: "The Sparkles emoji adds magic, emphasis, and flair to messages. Those little stars convey excitement, specialness, or that something is ✨extra special✨ in a playful way.\n\nIncredibly versatile, sparkles are used to emphasize text, express enthusiasm, show something is clean or new, or add a magical/fancy quality. They make anything feel more special.",
    usageContexts: ["Emphasis", "Magic/fantasy", "Excitement", "Cleanliness", "Making things special"],
    examples: [
      { context: "Emphasis", text: "Finally finished ✨" },
      { context: "Special", text: "New car ✨" },
      { context: "Sarcasm", text: "Adulting ✨" }
    ],
    misunderstandings: ["Sometimes used sarcastically - context matters"],
    relatedEmojis: ["star", "glowing-star", "dizzy"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["sparkle", "magic", "shiny", "special", "emphasis"]
  },
  {
    unicode: "💯",
    name: "Hundred Points",
    slug: "hundred-points",
    shortMeaning: "Perfect, 100%, keeping it real, or absolute agreement.",
    detailedMeaning: "The Hundred Points emoji represents perfection, full agreement, or 'keeping it 100' (being completely honest). The double-underlined 100 emphasizes completeness and authenticity.\n\nUsed to show full agreement, indicate something is perfect, or express that you're being completely real. It's a strong affirmation that leaves no room for doubt.",
    usageContexts: ["Perfect score", "Full agreement", "Keeping it real", "Authenticity", "Emphasis"],
    examples: [
      { context: "Agreement", text: "This is facts 💯" },
      { context: "Perfect", text: "Nailed the presentation 💯" },
      { context: "Real", text: "I'm keeping it 💯 with you" }
    ],
    misunderstandings: ["Clear meaning - universally positive"],
    relatedEmojis: ["fire", "thumbs-up", "check-mark"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["hundred", "perfect", "real", "facts", "agreement"]
  },
  {
    unicode: "💢",
    name: "Anger Symbol",
    slug: "anger-symbol",
    shortMeaning: "A symbol of anger or frustration from manga/anime.",
    detailedMeaning: "The Anger Symbol emoji shows the stylized manga symbol for anger - a popping vein. It represents frustration, annoyance, or being upset.\n\nUsed to express anger without using an angry face, often in a more stylized or humorous way.",
    usageContexts: ["Anger", "Frustration", "Annoyance", "Upset", "Irritation"],
    examples: [
      { context: "Angry", text: "Stop doing that 💢" },
      { context: "Frustrated", text: "This is so annoying 💢" },
      { context: "Irritated", text: "I can't take it 💢" }
    ],
    misunderstandings: ["May not be recognized outside anime/manga fans"],
    relatedEmojis: ["angry-face", "pouting-face", "face-with-symbols-on-mouth"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["anger", "frustration", "vein", "manga", "upset"]
  },
  {
    unicode: "💥",
    name: "Collision",
    slug: "collision",
    shortMeaning: "An explosion or impact - boom!",
    detailedMeaning: "The Collision emoji shows a comic-style explosion. It represents impact, crashes, explosions, or something mind-blowing.\n\nUsed for emphasis, explosive situations, or when something hits hard (literally or figuratively).",
    usageContexts: ["Explosion", "Impact", "Mind-blown", "Crash", "Emphasis"],
    examples: [
      { context: "Impact", text: "That news hit me hard 💥" },
      { context: "Explosion", text: "Boom! 💥" },
      { context: "Mind-blown", text: "This is explosive 💥" }
    ],
    misunderstandings: ["Clear explosive meaning"],
    relatedEmojis: ["fire", "boom", "star"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["collision", "explosion", "boom", "impact", "crash"]
  },
  {
    unicode: "💫",
    name: "Dizzy",
    slug: "dizzy",
    shortMeaning: "Dizzy, seeing stars, or something magical.",
    detailedMeaning: "The Dizzy emoji shows a circling star, like seeing stars after a hit to the head. It can represent dizziness, being stunned, or magical/dreamy vibes.\n\nUsed for feeling dizzy, overwhelmed, starstruck, or adding a dreamy quality.",
    usageContexts: ["Dizzy", "Stunned", "Magical", "Overwhelmed", "Starstruck"],
    examples: [
      { context: "Dizzy", text: "Spun around too fast 💫" },
      { context: "Overwhelmed", text: "So much happening 💫" },
      { context: "Dreamy", text: "Feeling magical 💫" }
    ],
    misunderstandings: ["Can mean dizzy or magical depending on context"],
    relatedEmojis: ["sparkles", "star", "face-with-spiral-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["dizzy", "stars", "magical", "stunned", "dreamy"]
  },
  {
    unicode: "💦",
    name: "Sweat Droplets",
    slug: "sweat-droplets",
    shortMeaning: "Sweat, water splashing, or hard work.",
    detailedMeaning: "The Sweat Droplets emoji shows drops of sweat or water. It represents hard work, effort, nervousness, or water-related activities.\n\nUsed for gym/workout content, hot weather, being nervous, or water activities.",
    usageContexts: ["Workout", "Hard Work", "Nervous", "Hot", "Water"],
    examples: [
      { context: "Workout", text: "Gym session 💦" },
      { context: "Hot", text: "It's so hot 💦" },
      { context: "Effort", text: "Working hard 💦" }
    ],
    misunderstandings: ["Context-dependent meaning"],
    relatedEmojis: ["hot-face", "person-running", "water-wave"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["sweat", "water", "workout", "hard work", "effort"]
  },
  {
    unicode: "💨",
    name: "Dashing Away",
    slug: "dashing-away",
    shortMeaning: "Moving fast, running away, or a puff of air.",
    detailedMeaning: "The Dashing Away emoji shows a puff of air/dust cloud indicating fast movement. It represents running away quickly, speed, or something vanishing.\n\nUsed when leaving quickly, showing speed, or indicating something disappeared fast.",
    usageContexts: ["Fast", "Running Away", "Speed", "Gone", "Wind"],
    examples: [
      { context: "Leaving", text: "Gotta go 💨" },
      { context: "Fast", text: "Zooming by 💨" },
      { context: "Gone", text: "He vanished 💨" }
    ],
    misunderstandings: ["Clear speed/movement meaning"],
    relatedEmojis: ["person-running", "wind-face", "person-walking"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["dash", "fast", "running", "wind", "speed"]
  },
  {
    unicode: "💬",
    name: "Speech Balloon",
    slug: "speech-balloon",
    shortMeaning: "A speech bubble - talking or commenting.",
    detailedMeaning: "The Speech Balloon emoji shows a comic-style speech bubble. It represents talking, commenting, having a conversation, or sharing thoughts.\n\nUsed to indicate speech, discussions, or that someone has something to say.",
    usageContexts: ["Talking", "Comment", "Discussion", "Chat", "Speaking"],
    examples: [
      { context: "Talking", text: "Let's chat 💬" },
      { context: "Comment", text: "Drop a comment 💬" },
      { context: "Discussion", text: "We need to talk 💬" }
    ],
    misunderstandings: ["Clear communication meaning"],
    relatedEmojis: ["thought-balloon", "left-speech-bubble", "speaking-head"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["speech", "talk", "chat", "comment", "conversation"]
  },
  {
    unicode: "💭",
    name: "Thought Balloon",
    slug: "thought-balloon",
    shortMeaning: "A thought bubble - thinking or dreaming.",
    detailedMeaning: "The Thought Balloon emoji shows a comic-style thought bubble with circles leading to it. It represents thinking, pondering, or daydreaming.\n\nUsed to share thoughts, indicate thinking, or show someone is lost in thought.",
    usageContexts: ["Thinking", "Dreaming", "Pondering", "Ideas", "Thoughts"],
    examples: [
      { context: "Thinking", text: "Just thinking 💭" },
      { context: "Ideas", text: "I have an idea 💭" },
      { context: "Dreaming", text: "Daydreaming about vacation 💭" }
    ],
    misunderstandings: ["Clear thinking meaning"],
    relatedEmojis: ["speech-balloon", "thinking-face", "brain"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["thought", "thinking", "dream", "idea", "ponder"]
  },
  {
    unicode: "💤",
    name: "Zzz",
    slug: "zzz",
    shortMeaning: "Sleeping - the classic comic snoring symbol.",
    detailedMeaning: "The Zzz emoji represents sleep with the classic comic book snoring symbol. It shows someone is sleeping, tired, or something is boring.\n\nUsed for sleeping, being tired, going to bed, or indicating boredom.",
    usageContexts: ["Sleeping", "Tired", "Bedtime", "Boring", "Nap"],
    examples: [
      { context: "Sleeping", text: "Going to bed 💤" },
      { context: "Tired", text: "So sleepy 💤" },
      { context: "Boring", text: "This lecture 💤" }
    ],
    misunderstandings: ["Clear sleep meaning"],
    relatedEmojis: ["sleeping-face", "bed", "night-with-stars"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["sleep", "zzz", "tired", "snore", "nap"]
  },
  {
    unicode: "🩷",
    name: "Pink Heart",
    slug: "pink-heart",
    shortMeaning: "A pink heart - gentle love and affection.",
    detailedMeaning: "The Pink Heart emoji is a softer, more gentle expression of love compared to the red heart. It represents sweetness, romance, and tender affection.\n\nUsed for cute love, friendship, or adding a softer romantic touch.",
    usageContexts: ["Love", "Sweet", "Gentle", "Romance", "Cute"],
    examples: [
      { context: "Love", text: "You're so sweet 🩷" },
      { context: "Cute", text: "That's adorable 🩷" },
      { context: "Affection", text: "Love you 🩷" }
    ],
    misunderstandings: ["Softer than red heart"],
    relatedEmojis: ["red-heart", "purple-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["pink", "heart", "love", "sweet", "gentle"]
  },
  {
    unicode: "🧡",
    name: "Orange Heart",
    slug: "orange-heart",
    shortMeaning: "An orange heart - warmth and friendship.",
    detailedMeaning: "The Orange Heart emoji represents warmth, caring, and comfort. It's often used for friendship love or when red feels too intense.\n\nUsed for supportive friendships, warm feelings, or autumn vibes.",
    usageContexts: ["Friendship", "Warmth", "Caring", "Support", "Autumn"],
    examples: [
      { context: "Friend", text: "Best friend 🧡" },
      { context: "Warm", text: "Sending warmth 🧡" },
      { context: "Fall", text: "Autumn vibes 🧡" }
    ],
    misunderstandings: ["Less romantic than red heart"],
    relatedEmojis: ["red-heart", "yellow-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["orange", "heart", "warm", "friendship", "caring"]
  },
  {
    unicode: "💛",
    name: "Yellow Heart",
    slug: "yellow-heart",
    shortMeaning: "A yellow heart - friendship and happiness.",
    detailedMeaning: "The Yellow Heart emoji represents friendship, happiness, and platonic love. It's bright and cheerful without romantic implications.\n\nUsed for close friendships, showing care without romance, or sunny happy feelings.",
    usageContexts: ["Friendship", "Happiness", "Platonic Love", "Cheerful", "Sunny"],
    examples: [
      { context: "Friend", text: "You're my bestie 💛" },
      { context: "Happy", text: "This makes me happy 💛" },
      { context: "Care", text: "Thinking of you 💛" }
    ],
    misunderstandings: ["Clearly friendship-focused"],
    relatedEmojis: ["red-heart", "orange-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["yellow", "heart", "friendship", "happy", "platonic"]
  },
  {
    unicode: "💚",
    name: "Green Heart",
    slug: "green-heart",
    shortMeaning: "A green heart - nature, health, or jealousy.",
    detailedMeaning: "The Green Heart emoji can represent nature, environmental causes, health, or sometimes jealousy. Its meaning varies by context.\n\nUsed for eco-friendly topics, health and wellness, Irish themes, or sometimes envy.",
    usageContexts: ["Nature", "Health", "Environment", "Irish", "Jealousy"],
    examples: [
      { context: "Eco", text: "Go green 💚" },
      { context: "Health", text: "Healthy living 💚" },
      { context: "Irish", text: "St. Patrick's Day 💚" }
    ],
    misunderstandings: ["Can mean jealousy in some contexts"],
    relatedEmojis: ["red-heart", "blue-heart", "recycling-symbol"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["green", "heart", "nature", "health", "eco"]
  },
  {
    unicode: "💙",
    name: "Blue Heart",
    slug: "blue-heart",
    shortMeaning: "A blue heart - trust, loyalty, and calm.",
    detailedMeaning: "The Blue Heart emoji represents trust, harmony, peace, and loyalty. It's often used for professional or platonic contexts.\n\nUsed for showing loyalty, trust in friendships, or supporting causes that use blue branding.",
    usageContexts: ["Trust", "Loyalty", "Peace", "Calm", "Support"],
    examples: [
      { context: "Loyalty", text: "Always here for you 💙" },
      { context: "Trust", text: "I trust you 💙" },
      { context: "Calm", text: "Peaceful vibes 💙" }
    ],
    misunderstandings: ["Less romantic than red heart"],
    relatedEmojis: ["red-heart", "purple-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["blue", "heart", "trust", "loyalty", "peace"]
  },
  {
    unicode: "💜",
    name: "Purple Heart",
    slug: "purple-heart",
    shortMeaning: "A purple heart - compassion, love, and K-pop.",
    detailedMeaning: "The Purple Heart emoji represents compassion, love, and understanding. It's heavily associated with BTS and K-pop fandoms.\n\nUsed by K-pop fans (especially BTS ARMY), for showing compassion, or luxury/glamour.",
    usageContexts: ["K-pop", "BTS", "Compassion", "Love", "Glamour"],
    examples: [
      { context: "BTS", text: "I purple you 💜" },
      { context: "Love", text: "Love you 💜" },
      { context: "Support", text: "Supporting you 💜" }
    ],
    misunderstandings: ["Strong K-pop association"],
    relatedEmojis: ["red-heart", "blue-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["purple", "heart", "BTS", "kpop", "compassion"]
  },
  {
    unicode: "🖤",
    name: "Black Heart",
    slug: "black-heart",
    shortMeaning: "A black heart - dark humor, sorrow, or edgy love.",
    detailedMeaning: "The Black Heart emoji represents dark emotions, morbid humor, or an edgy aesthetic. It can show sorrow or unconventional love.\n\nUsed for dark humor, gothic aesthetics, expressing grief, or alternative subcultures.",
    usageContexts: ["Dark Humor", "Gothic", "Grief", "Edgy", "Alternative"],
    examples: [
      { context: "Dark", text: "Dark soul 🖤" },
      { context: "Gothic", text: "Goth vibes 🖤" },
      { context: "Humor", text: "My sense of humor 🖤" }
    ],
    misunderstandings: ["Can seem negative but often ironic"],
    relatedEmojis: ["red-heart", "skull", "bat"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["black", "heart", "dark", "gothic", "edgy"]
  },
  {
    unicode: "🩶",
    name: "Grey Heart",
    slug: "grey-heart",
    shortMeaning: "A grey heart - neutral feelings or loss.",
    detailedMeaning: "The Grey Heart emoji represents neutral feelings, sadness, or something between love and indifference. It's often used for loss or fading emotions.\n\nUsed for expressing complicated feelings, memorial posts, or understated affection.",
    usageContexts: ["Neutral", "Loss", "Fading", "Memorial", "Complicated"],
    examples: [
      { context: "Neutral", text: "Feeling meh 🩶" },
      { context: "Memorial", text: "In memory 🩶" },
      { context: "Complicated", text: "It's complicated 🩶" }
    ],
    misunderstandings: ["Can indicate sadness"],
    relatedEmojis: ["white-heart", "black-heart", "broken-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["grey", "gray", "heart", "neutral", "loss"]
  },
  {
    unicode: "🤍",
    name: "White Heart",
    slug: "white-heart",
    shortMeaning: "A white heart - purity, peace, and support.",
    detailedMeaning: "The White Heart emoji represents purity, peace, and support. It's often used for BLM support or expressing pure love.\n\nUsed for showing support, pure intentions, peace, or minimalist aesthetics.",
    usageContexts: ["Purity", "Peace", "Support", "Clean", "Love"],
    examples: [
      { context: "Pure", text: "Pure love 🤍" },
      { context: "Peace", text: "Sending peace 🤍" },
      { context: "Clean", text: "Clean aesthetic 🤍" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["red-heart", "grey-heart", "dove"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["white", "heart", "pure", "peace", "clean"]
  },
  {
    unicode: "🤎",
    name: "Brown Heart",
    slug: "brown-heart",
    shortMeaning: "A brown heart - earth tones and warmth.",
    detailedMeaning: "The Brown Heart emoji represents earth tones, nature, chocolate, coffee, and inclusivity. It's warm and grounded.\n\nUsed for autumn vibes, chocolate/coffee content, or representing people of color.",
    usageContexts: ["Earth", "Autumn", "Chocolate", "Coffee", "Inclusivity"],
    examples: [
      { context: "Coffee", text: "Coffee time 🤎" },
      { context: "Autumn", text: "Fall vibes 🤎" },
      { context: "Warm", text: "Cozy feels 🤎" }
    ],
    misunderstandings: ["Clear warm/earthy meaning"],
    relatedEmojis: ["orange-heart", "red-heart", "fallen-leaf"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["brown", "heart", "earth", "warm", "autumn"]
  },
  {
    unicode: "💔",
    name: "Broken Heart",
    slug: "broken-heart",
    shortMeaning: "A broken heart - heartbreak and sadness.",
    detailedMeaning: "The Broken Heart emoji shows a heart split in two. It represents heartbreak, sadness, grief, or disappointment in love.\n\nUsed for breakups, loss, disappointment, or anything that causes emotional pain.",
    usageContexts: ["Heartbreak", "Breakup", "Sadness", "Loss", "Disappointment"],
    examples: [
      { context: "Breakup", text: "We broke up 💔" },
      { context: "Sad", text: "This breaks my heart 💔" },
      { context: "Loss", text: "Missing you 💔" }
    ],
    misunderstandings: ["Clear heartbreak meaning"],
    relatedEmojis: ["red-heart", "crying-face", "pensive-face"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["broken", "heart", "heartbreak", "sad", "breakup"]
  },
  {
    unicode: "❤️‍🔥",
    name: "Heart on Fire",
    slug: "heart-on-fire",
    shortMeaning: "A heart on fire - burning passion and desire.",
    detailedMeaning: "The Heart on Fire emoji shows a heart engulfed in flames. It represents intense passion, burning love, desire, or lust.\n\nUsed for expressing passionate love, intense desire, or strong attraction.",
    usageContexts: ["Passion", "Desire", "Intense Love", "Attraction", "Burning"],
    examples: [
      { context: "Passion", text: "My heart is on fire for you ❤️‍🔥" },
      { context: "Desire", text: "Can't stop thinking about you ❤️‍🔥" },
      { context: "Intense", text: "Burning love ❤️‍🔥" }
    ],
    misunderstandings: ["Very intense emotion"],
    relatedEmojis: ["red-heart", "fire", "smiling-face-with-heart-eyes"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["heart", "fire", "passion", "desire", "burning"]
  },
  {
    unicode: "❤️‍🩹",
    name: "Mending Heart",
    slug: "mending-heart",
    shortMeaning: "A heart with bandage - healing and recovery.",
    detailedMeaning: "The Mending Heart emoji shows a heart with a bandage. It represents emotional healing, recovery from heartbreak, or getting better.\n\nUsed for showing healing process, recovery, or supporting someone through tough times.",
    usageContexts: ["Healing", "Recovery", "Getting Better", "Support", "Care"],
    examples: [
      { context: "Healing", text: "Slowly healing ❤️‍🩹" },
      { context: "Recovery", text: "Getting better every day ❤️‍🩹" },
      { context: "Support", text: "Here for you ❤️‍🩹" }
    ],
    misunderstandings: ["Clear healing meaning"],
    relatedEmojis: ["broken-heart", "red-heart", "face-with-head-bandage"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["mending", "heart", "healing", "recovery", "bandage"]
  },
  {
    unicode: "💕",
    name: "Two Hearts",
    slug: "two-hearts",
    shortMeaning: "Two hearts - love is in the air.",
    detailedMeaning: "The Two Hearts emoji shows two pink hearts together. It represents mutual love, romance, and affection between two people.\n\nUsed for showing love between two people, cute romantic moments, or friendship love.",
    usageContexts: ["Love", "Romance", "Mutual", "Couple", "Affection"],
    examples: [
      { context: "Couple", text: "Us together 💕" },
      { context: "Love", text: "Love you so much 💕" },
      { context: "Cute", text: "You two are adorable 💕" }
    ],
    misunderstandings: ["Clear romantic meaning"],
    relatedEmojis: ["red-heart", "revolving-hearts", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["two", "hearts", "love", "romance", "together"]
  },
  {
    unicode: "💞",
    name: "Revolving Hearts",
    slug: "revolving-hearts",
    shortMeaning: "Hearts circling - being in love.",
    detailedMeaning: "The Revolving Hearts emoji shows two hearts circling around each other. It represents falling in love, romantic feelings, or a loving relationship.\n\nUsed for showing being in love, butterflies feeling, or romantic moments.",
    usageContexts: ["In Love", "Romance", "Falling", "Butterflies", "Couple"],
    examples: [
      { context: "In Love", text: "Falling for you 💞" },
      { context: "Romance", text: "Head over heels 💞" },
      { context: "Together", text: "Our love 💞" }
    ],
    misunderstandings: ["Clear romantic meaning"],
    relatedEmojis: ["two-hearts", "sparkling-heart", "heart-with-arrow"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["revolving", "hearts", "love", "falling", "romance"]
  },
  {
    unicode: "💓",
    name: "Beating Heart",
    slug: "beating-heart",
    shortMeaning: "A beating heart - strong love or excitement.",
    detailedMeaning: "The Beating Heart emoji shows a heart with vibration lines. It represents a heart beating fast from love, excitement, or nervousness.\n\nUsed for showing strong emotions, excitement, or your heart racing.",
    usageContexts: ["Excitement", "Love", "Nervous", "Racing Heart", "Alive"],
    examples: [
      { context: "Excited", text: "My heart is racing 💓" },
      { context: "Love", text: "Heart beating for you 💓" },
      { context: "Nervous", text: "So nervous 💓" }
    ],
    misunderstandings: ["Clear excitement/love meaning"],
    relatedEmojis: ["red-heart", "growing-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["beating", "heart", "love", "excited", "racing"]
  },
  {
    unicode: "💗",
    name: "Growing Heart",
    slug: "growing-heart",
    shortMeaning: "A growing heart - love increasing.",
    detailedMeaning: "The Growing Heart emoji shows a heart with concentric layers getting bigger. It represents love growing, increasing affection, or overwhelming emotions.\n\nUsed for showing love growing stronger or feelings intensifying.",
    usageContexts: ["Growing Love", "Increasing", "Overwhelming", "More", "Affection"],
    examples: [
      { context: "Growing", text: "My love for you grows 💗" },
      { context: "More", text: "Loving you more each day 💗" },
      { context: "Overwhelming", text: "So much love 💗" }
    ],
    misunderstandings: ["Clear growing love meaning"],
    relatedEmojis: ["red-heart", "beating-heart", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["growing", "heart", "love", "increase", "more"]
  },
  {
    unicode: "💖",
    name: "Sparkling Heart",
    slug: "sparkling-heart",
    shortMeaning: "A sparkling heart - exciting love and affection.",
    detailedMeaning: "The Sparkling Heart emoji shows a pink heart with sparkles. It represents exciting love, special affection, or magical romance.\n\nUsed for showing special love, magical moments, or extra affection.",
    usageContexts: ["Special Love", "Magic", "Sparkle", "Affection", "Exciting"],
    examples: [
      { context: "Special", text: "You're special to me 💖" },
      { context: "Love", text: "Sparkling love 💖" },
      { context: "Magic", text: "Magical moments 💖" }
    ],
    misunderstandings: ["Clear positive love meaning"],
    relatedEmojis: ["red-heart", "two-hearts", "sparkles"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["sparkling", "heart", "love", "special", "magic"]
  },
  {
    unicode: "💘",
    name: "Heart with Arrow",
    slug: "heart-with-arrow",
    shortMeaning: "Cupid's arrow through a heart - falling in love.",
    detailedMeaning: "The Heart with Arrow emoji shows a heart pierced by Cupid's arrow. It represents falling in love, being struck by love, or Valentine's romance.\n\nUsed for expressing falling in love, Valentine's Day, or romantic feelings.",
    usageContexts: ["Falling in Love", "Cupid", "Valentine's", "Romance", "Struck"],
    examples: [
      { context: "In Love", text: "Cupid struck me 💘" },
      { context: "Valentine", text: "Happy Valentine's 💘" },
      { context: "Falling", text: "Falling for you 💘" }
    ],
    misunderstandings: ["Clear romantic meaning"],
    relatedEmojis: ["red-heart", "bow-and-arrow", "revolving-hearts"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["arrow", "heart", "cupid", "love", "valentine"]
  },
  {
    unicode: "💝",
    name: "Heart with Ribbon",
    slug: "heart-with-ribbon",
    shortMeaning: "A gift heart - love given as a present.",
    detailedMeaning: "The Heart with Ribbon emoji shows a heart wrapped with a ribbon like a gift. It represents love as a gift, Valentine's presents, or giving your heart.\n\nUsed for Valentine's Day, love gifts, or offering your heart to someone.",
    usageContexts: ["Gift", "Valentine's", "Present", "Giving Love", "Special"],
    examples: [
      { context: "Gift", text: "My heart is yours 💝" },
      { context: "Valentine", text: "Valentine's gift 💝" },
      { context: "Special", text: "For you 💝" }
    ],
    misunderstandings: ["Clear gift/love meaning"],
    relatedEmojis: ["red-heart", "wrapped-gift", "sparkling-heart"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["ribbon", "heart", "gift", "present", "valentine"]
  },
  {
    unicode: "💟",
    name: "Heart Decoration",
    slug: "heart-decoration",
    shortMeaning: "A decorative heart - love and decoration.",
    detailedMeaning: "The Heart Decoration emoji shows a heart in a square frame like a decoration. It represents love, affection, and decorative purposes.\n\nUsed for adding a love touch, decoration, or expressing gentle affection.",
    usageContexts: ["Decoration", "Love", "Design", "Gentle", "Affection"],
    examples: [
      { context: "Decor", text: "Love decor 💟" },
      { context: "Sweet", text: "Sweet thoughts 💟" },
      { context: "Gentle", text: "Gentle love 💟" }
    ],
    misunderstandings: ["Clear decorative love meaning"],
    relatedEmojis: ["red-heart", "sparkling-heart", "peace-symbol"],
    categorySlug: "smileys-and-emotion",
    subgroup: "heart",
    keywords: ["decoration", "heart", "love", "design", "gentle"]
  },
  {
    unicode: "☮️",
    name: "Peace Symbol",
    slug: "peace-symbol",
    shortMeaning: "The peace symbol - peace and anti-war.",
    detailedMeaning: "The Peace Symbol emoji shows the iconic peace sign. It represents peace, anti-war sentiments, harmony, and 1960s counterculture.\n\nUsed for expressing desire for peace, hippie vibes, or peaceful intentions.",
    usageContexts: ["Peace", "Harmony", "Anti-war", "Hippie", "Calm"],
    examples: [
      { context: "Peace", text: "Peace and love ☮️" },
      { context: "Hippie", text: "Hippie vibes ☮️" },
      { context: "Calm", text: "Stay peaceful ☮️" }
    ],
    misunderstandings: ["Clear peace meaning"],
    relatedEmojis: ["victory-hand", "dove", "rainbow"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["peace", "symbol", "harmony", "love", "hippie"]
  },
  {
    unicode: "☯️",
    name: "Yin Yang",
    slug: "yin-yang",
    shortMeaning: "Yin and Yang - balance and harmony.",
    detailedMeaning: "The Yin Yang emoji represents balance, harmony, and the duality of nature. It's a Taoist symbol showing complementary forces.\n\nUsed for expressing balance, philosophy, or spiritual concepts.",
    usageContexts: ["Balance", "Harmony", "Philosophy", "Spiritual", "Duality"],
    examples: [
      { context: "Balance", text: "Finding balance ☯️" },
      { context: "Harmony", text: "In harmony ☯️" },
      { context: "Life", text: "Life is about balance ☯️" }
    ],
    misunderstandings: ["Clear balance meaning"],
    relatedEmojis: ["peace-symbol", "om", "lotus"],
    categorySlug: "smileys-and-emotion",
    subgroup: "emotion",
    keywords: ["yin", "yang", "balance", "harmony", "duality"]
  },
  // PEOPLE & BODY
  {
    unicode: "👋",
    name: "Waving Hand",
    slug: "waving-hand",
    shortMeaning: "A friendly wave to say hello or goodbye.",
    detailedMeaning: "The Waving Hand is a friendly gesture used for greetings and farewells. It mimics the universal hand wave that humans use to acknowledge each other from a distance.\n\nThis emoji works for saying hi, bye, getting someone's attention, or signifying your presence in a conversation. It's warm and approachable.",
    usageContexts: ["Saying hello", "Saying goodbye", "Getting attention", "Friendly greeting", "Acknowledging presence"],
    examples: [
      { context: "Hello", text: "Hey everyone 👋" },
      { context: "Goodbye", text: "Talk soon 👋" },
      { context: "Arrival", text: "Just got here 👋" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👋🏻" },
      { description: "Medium-light skin tone", emoji: "👋🏼" },
      { description: "Medium skin tone", emoji: "👋🏽" },
      { description: "Medium-dark skin tone", emoji: "👋🏾" },
      { description: "Dark skin tone", emoji: "👋🏿" }
    ],
    misunderstandings: ["Very clear meaning - rarely misunderstood"],
    relatedEmojis: ["raising-hand", "vulcan-salute", "hand-with-fingers-splayed"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["wave", "hello", "hi", "bye", "greeting"]
  },
  {
    unicode: "🤚",
    name: "Raised Back of Hand",
    slug: "raised-back-of-hand",
    shortMeaning: "The back of a raised hand - stopping or awaiting.",
    detailedMeaning: "The Raised Back of Hand shows the back of a hand with fingers together, often used to indicate 'wait' or 'stop.' It's a more subtle gesture than the palm-forward stop hand.\n\nUsed to get attention, signal to pause, or as a variant wave. The back-of-hand view gives it a slightly different feel than the palm-forward emoji.",
    usageContexts: ["Wait", "Stop", "Getting attention", "Raising hand", "Signaling"],
    examples: [
      { context: "Wait", text: "Hold on 🤚" },
      { context: "Stop", text: "Let me finish 🤚" },
      { context: "Attention", text: "Question! 🤚" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🤚🏻" },
      { description: "Medium-light skin tone", emoji: "🤚🏼" },
      { description: "Medium skin tone", emoji: "🤚🏽" },
      { description: "Medium-dark skin tone", emoji: "🤚🏾" },
      { description: "Dark skin tone", emoji: "🤚🏿" }
    ],
    misunderstandings: ["Sometimes confused with slap gesture"],
    relatedEmojis: ["raised-hand", "stop-sign", "hand-with-fingers-splayed"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["back of hand", "wait", "stop", "raised", "attention"]
  },
  {
    unicode: "✋",
    name: "Raised Hand",
    slug: "raised-hand",
    shortMeaning: "Stop! Or raising your hand to volunteer or get attention.",
    detailedMeaning: "The Raised Hand with palm facing forward is a universal stop signal, but also represents volunteering, high-fiving, or taking an oath. The palm-out position is key to its meaning.\n\nContext determines if it's 'stop,' 'I volunteer,' 'high five,' or just getting attention. In digital communication, it often precedes important points or signals you want to speak.",
    usageContexts: ["Stop/halt", "Volunteering", "High five", "Taking oath", "Getting attention"],
    examples: [
      { context: "Stop", text: "Wait right there ✋" },
      { context: "Volunteer", text: "I'll do it ✋" },
      { context: "High five", text: "Great work ✋" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "✋🏻" },
      { description: "Medium-light skin tone", emoji: "✋🏼" },
      { description: "Medium skin tone", emoji: "✋🏽" },
      { description: "Medium-dark skin tone", emoji: "✋🏾" },
      { description: "Dark skin tone", emoji: "✋🏿" }
    ],
    misunderstandings: ["Stop meaning is strong - may come across as dismissive"],
    relatedEmojis: ["raising-hand", "stop-sign", "hand-with-fingers-splayed"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["stop", "raised hand", "high five", "halt", "volunteer"]
  },
  {
    unicode: "👌",
    name: "OK Hand",
    slug: "ok-hand",
    shortMeaning: "OK! Perfect. Everything is good. Also 'chef's kiss' perfect.",
    detailedMeaning: "The OK Hand with thumb and index finger forming a circle traditionally means 'okay' or 'perfect.' It's also associated with the Italian 'chef's kiss' gesture meaning something is excellently done.\n\nNote: This gesture has been co-opted by some hate groups, though in most contexts it retains its original positive meaning. Use with awareness of your audience.",
    usageContexts: ["OK/agreement", "Perfect", "Excellent quality", "Chef's kiss", "Precision"],
    examples: [
      { context: "OK", text: "Sounds good 👌" },
      { context: "Perfect", text: "That meal was 👌" },
      { context: "Precision", text: "Just right 👌" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👌🏻" },
      { description: "Medium-light skin tone", emoji: "👌🏼" },
      { description: "Medium skin tone", emoji: "👌🏽" },
      { description: "Medium-dark skin tone", emoji: "👌🏾" },
      { description: "Dark skin tone", emoji: "👌🏿" }
    ],
    misunderstandings: ["Has been appropriated by some groups - context matters", "Meaning varies by culture"],
    relatedEmojis: ["thumbs-up", "check-mark", "hundred-points"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["ok", "perfect", "good", "okay", "chef kiss"]
  },
  {
    unicode: "✌️",
    name: "Victory Hand",
    slug: "victory-hand",
    shortMeaning: "Peace sign! Victory, peace, or just saying 'deuces.'",
    detailedMeaning: "The Victory Hand (peace sign) with index and middle fingers forming a V is one of the most recognized gestures worldwide. It represents peace, victory, or a casual 'peace out' farewell.\n\nPopularized as a peace symbol in the 1960s and a victory sign in WWII, it remains a universally positive gesture. In photos, it's often thrown up as a fun pose.",
    usageContexts: ["Peace", "Victory", "Photo poses", "Farewell", "Good vibes"],
    examples: [
      { context: "Peace", text: "Spreading love ✌️" },
      { context: "Goodbye", text: "Peace out ✌️" },
      { context: "Victory", text: "We won ✌️" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "✌🏻" },
      { description: "Medium-light skin tone", emoji: "✌🏼" },
      { description: "Medium skin tone", emoji: "✌🏽" },
      { description: "Medium-dark skin tone", emoji: "✌🏾" },
      { description: "Dark skin tone", emoji: "✌🏿" }
    ],
    misunderstandings: ["In UK, palm-inward version is offensive - emoji is palm-out"],
    relatedEmojis: ["sign-of-the-horns", "love-you-gesture", "raised-fist"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["peace", "victory", "v sign", "deuces", "cool"]
  },
  {
    unicode: "🤞",
    name: "Crossed Fingers",
    slug: "crossed-fingers",
    shortMeaning: "Fingers crossed for good luck or hoping for the best.",
    detailedMeaning: "Crossed Fingers show the index and middle finger crossed over each other, a gesture for wishing luck or hoping something goes well. It's the physical manifestation of 'fingers crossed!'\n\nUsed when hoping for good outcomes, wishing someone luck, or expressing that you're anxiously awaiting results. It conveys optimistic anticipation.",
    usageContexts: ["Good luck wishes", "Hoping for outcomes", "Nervous anticipation", "Wishing well", "Uncertainty"],
    examples: [
      { context: "Luck", text: "Interview tomorrow 🤞" },
      { context: "Hope", text: "Hope the weather holds 🤞" },
      { context: "Wishing", text: "Good luck on your test 🤞" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🤞🏻" },
      { description: "Medium-light skin tone", emoji: "🤞🏼" },
      { description: "Medium skin tone", emoji: "🤞🏽" },
      { description: "Medium-dark skin tone", emoji: "🤞🏾" },
      { description: "Dark skin tone", emoji: "🤞🏿" }
    ],
    misunderstandings: ["Sometimes used when telling white lies - 'fingers crossed behind back'"],
    relatedEmojis: ["four-leaf-clover", "prayer-beads", "wishing-star"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["luck", "hope", "crossed", "wish", "fingers"]
  },
  {
    unicode: "🤟",
    name: "Love-You Gesture",
    slug: "love-you-gesture",
    shortMeaning: "American Sign Language for 'I love you' - thumb, index, and pinky extended.",
    detailedMeaning: "The Love-You Gesture combines the ASL letters I, L, and Y to spell 'I Love You' in a single hand sign. The thumb, index finger, and pinky are extended while the middle and ring fingers are closed.\n\nThis gesture is widely used in the deaf community and has been adopted broadly to express love and affection. It's a meaningful way to say 'I love you' non-verbally.",
    usageContexts: ["Saying I love you", "ASL communication", "Affection", "Sign language", "Caring messages"],
    examples: [
      { context: "Love", text: "Love you 🤟" },
      { context: "Affection", text: "To the best parents 🤟" },
      { context: "Sign", text: "ASL is beautiful 🤟" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🤟🏻" },
      { description: "Medium-light skin tone", emoji: "🤟🏼" },
      { description: "Medium skin tone", emoji: "🤟🏽" },
      { description: "Medium-dark skin tone", emoji: "🤟🏾" },
      { description: "Dark skin tone", emoji: "🤟🏿" }
    ],
    misunderstandings: ["Sometimes confused with 'rock on' 🤘 gesture"],
    relatedEmojis: ["sign-of-the-horns", "red-heart", "victory-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["love", "ASL", "I love you", "sign language", "affection"]
  },
  {
    unicode: "🤘",
    name: "Sign of the Horns",
    slug: "sign-of-the-horns",
    shortMeaning: "Rock on! The metal/rock hand sign for awesomeness.",
    detailedMeaning: "The Sign of the Horns with index and pinky fingers extended is the iconic 'rock on' or 'metal horns' gesture associated with rock and heavy metal music. It signifies awesomeness, rebellion, and rock spirit.\n\nPopularized by Ronnie James Dio and metal culture, it's now used broadly to express that something rocks, is awesome, or to show enthusiasm for anything cool.",
    usageContexts: ["Rock music", "Something awesome", "Concerts", "Excitement", "Metal culture"],
    examples: [
      { context: "Rock", text: "Best concert ever 🤘" },
      { context: "Awesome", text: "That was sick 🤘" },
      { context: "Metal", text: "Slayer forever 🤘" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🤘🏻" },
      { description: "Medium-light skin tone", emoji: "🤘🏼" },
      { description: "Medium skin tone", emoji: "🤘🏽" },
      { description: "Medium-dark skin tone", emoji: "🤘🏾" },
      { description: "Dark skin tone", emoji: "🤘🏿" }
    ],
    misunderstandings: ["In some cultures, represents cuckoldry - be aware of audience"],
    relatedEmojis: ["love-you-gesture", "guitar", "microphone"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["rock", "metal", "horns", "rock on", "awesome"]
  },
  {
    unicode: "👍",
    name: "Thumbs Up",
    slug: "thumbs-up",
    shortMeaning: "Approval, agreement, or 'sounds good!' A classic positive gesture.",
    detailedMeaning: "The Thumbs Up is one of the most universally recognized positive gestures, indicating approval, agreement, or that something is good. It's a quick way to acknowledge or agree without words.\n\nWidely used in casual and professional contexts to show approval. However, note that some younger users perceive it as passive-aggressive or dismissive in certain contexts.",
    usageContexts: ["Approval", "Agreement", "Acknowledgment", "Positive reaction", "Confirming"],
    examples: [
      { context: "Approval", text: "Great job 👍" },
      { context: "Agreement", text: "Sounds good 👍" },
      { context: "Acknowledgment", text: "Got it 👍" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👍🏻" },
      { description: "Medium-light skin tone", emoji: "👍🏼" },
      { description: "Medium skin tone", emoji: "👍🏽" },
      { description: "Medium-dark skin tone", emoji: "👍🏾" },
      { description: "Dark skin tone", emoji: "👍🏿" }
    ],
    misunderstandings: ["Seen as passive-aggressive by some younger users", "Considered rude in some Middle Eastern cultures"],
    relatedEmojis: ["thumbs-down", "ok-hand", "clapping-hands"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["thumbs up", "like", "good", "approve", "yes"]
  },
  {
    unicode: "👎",
    name: "Thumbs Down",
    slug: "thumbs-down",
    shortMeaning: "Disapproval, dislike, or disagreement.",
    detailedMeaning: "The Thumbs Down is the opposite of thumbs up, indicating disapproval, disagreement, or dislike. It's a clear negative reaction that doesn't require explanation.\n\nUsed to express that something is bad, you disagree, or you don't approve. It's direct and unambiguous in its negativity.",
    usageContexts: ["Disapproval", "Dislike", "Disagreement", "Rejection", "Negative reaction"],
    examples: [
      { context: "Dislike", text: "Not a fan 👎" },
      { context: "Disagree", text: "Bad idea 👎" },
      { context: "Reject", text: "Hard pass 👎" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👎🏻" },
      { description: "Medium-light skin tone", emoji: "👎🏼" },
      { description: "Medium skin tone", emoji: "👎🏽" },
      { description: "Medium-dark skin tone", emoji: "👎🏾" },
      { description: "Dark skin tone", emoji: "👎🏿" }
    ],
    misunderstandings: ["Very direct - can feel harsh"],
    relatedEmojis: ["thumbs-up", "cross-mark", "disappointed-face"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["thumbs down", "dislike", "bad", "disapprove", "no"]
  },
  {
    unicode: "✊",
    name: "Raised Fist",
    slug: "raised-fist",
    shortMeaning: "Solidarity, power, resistance, or celebration of victory.",
    detailedMeaning: "The Raised Fist is a powerful symbol of solidarity, resistance, and strength. It's associated with social justice movements, protests, and expressions of unity and determination.\n\nUsed to show support for causes, express determination, or celebrate victories. It carries significant historical weight from civil rights and labor movements.",
    usageContexts: ["Solidarity", "Protest", "Strength", "Victory", "Resistance"],
    examples: [
      { context: "Solidarity", text: "We stand together ✊" },
      { context: "Strength", text: "Stay strong ✊" },
      { context: "Victory", text: "We did it ✊" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "✊🏻" },
      { description: "Medium-light skin tone", emoji: "✊🏼" },
      { description: "Medium skin tone", emoji: "✊🏽" },
      { description: "Medium-dark skin tone", emoji: "✊🏾" },
      { description: "Dark skin tone", emoji: "✊🏿" }
    ],
    misunderstandings: ["Strong political associations - use appropriately"],
    relatedEmojis: ["oncoming-fist", "victory-hand", "flexed-biceps"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["fist", "solidarity", "power", "resistance", "strength"]
  },
  {
    unicode: "👊",
    name: "Oncoming Fist",
    slug: "oncoming-fist",
    shortMeaning: "Fist bump! A friendly greeting or sign of respect.",
    detailedMeaning: "The Oncoming Fist shows a fist coming toward you, representing a fist bump - that cool, casual greeting of mutual respect. It's the digital equivalent of that satisfying knuckle-to-knuckle connection.\n\nUsed for friendly greetings, showing respect, or celebrating with someone. It's casual and cool, perfect for acknowledging something well done.",
    usageContexts: ["Fist bump", "Greeting", "Respect", "Celebration", "Acknowledgment"],
    examples: [
      { context: "Greeting", text: "What's up 👊" },
      { context: "Respect", text: "Nice work 👊" },
      { context: "Celebration", text: "We got this 👊" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👊🏻" },
      { description: "Medium-light skin tone", emoji: "👊🏼" },
      { description: "Medium skin tone", emoji: "👊🏽" },
      { description: "Medium-dark skin tone", emoji: "👊🏾" },
      { description: "Dark skin tone", emoji: "👊🏿" }
    ],
    misunderstandings: ["Could be seen as aggressive (punch) without context"],
    relatedEmojis: ["raised-fist", "clapping-hands", "handshake"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["fist bump", "punch", "bro", "respect", "greeting"]
  },
  {
    unicode: "👏",
    name: "Clapping Hands",
    slug: "clapping-hands",
    shortMeaning: "Applause and appreciation. Also used for emphasis between words.",
    detailedMeaning: "Clapping Hands represent applause, appreciation, and celebration. They're used to congratulate, show approval, or express that something deserves recognition.\n\nA modern usage involves placing claps between words for emphasis (You 👏 need 👏 to 👏 hear 👏 this). This emphasizes each word strongly.",
    usageContexts: ["Applause", "Congratulations", "Emphasis", "Appreciation", "Celebration"],
    examples: [
      { context: "Applause", text: "Amazing performance 👏" },
      { context: "Emphasis", text: "Say 👏 it 👏 louder 👏" },
      { context: "Congratulations", text: "You did it 👏👏👏" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👏🏻" },
      { description: "Medium-light skin tone", emoji: "👏🏼" },
      { description: "Medium skin tone", emoji: "👏🏽" },
      { description: "Medium-dark skin tone", emoji: "👏🏾" },
      { description: "Dark skin tone", emoji: "👏🏿" }
    ],
    misunderstandings: ["Clap-back emphasis can seem aggressive"],
    relatedEmojis: ["raising-hands", "party-popper", "trophy"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["clap", "applause", "congratulate", "bravo", "emphasis"]
  },
  {
    unicode: "🙌",
    name: "Raising Hands",
    slug: "raising-hands",
    shortMeaning: "Celebration! Hands raised in joy, praise, or excitement.",
    detailedMeaning: "Raising Hands shows two hands raised in celebration, representing 'hallelujah,' excitement, or joyful achievement. It's the emoji equivalent of throwing your hands up in celebration.\n\nUsed for celebrating wins, expressing excitement, or showing enthusiasm. It conveys uncontained joy and the desire to celebrate openly.",
    usageContexts: ["Celebration", "Excitement", "Praise", "Victory", "Joy"],
    examples: [
      { context: "Celebration", text: "Friday finally 🙌" },
      { context: "Victory", text: "We won 🙌" },
      { context: "Excitement", text: "Tickets secured 🙌" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🙌🏻" },
      { description: "Medium-light skin tone", emoji: "🙌🏼" },
      { description: "Medium skin tone", emoji: "🙌🏽" },
      { description: "Medium-dark skin tone", emoji: "🙌🏾" },
      { description: "Dark skin tone", emoji: "🙌🏿" }
    ],
    misunderstandings: ["Clear celebratory meaning"],
    relatedEmojis: ["clapping-hands", "party-popper", "confetti-ball"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["celebration", "hooray", "praise", "yay", "hands up"]
  },
  {
    unicode: "🤝",
    name: "Handshake",
    slug: "handshake",
    shortMeaning: "Agreement, partnership, or formal greeting.",
    detailedMeaning: "The Handshake emoji represents agreement, partnership, deals, and formal greetings. It's the digital representation of the traditional gesture of trust and mutual respect.\n\nUsed in business contexts for deals, agreements, or partnerships. Also represents greeting someone formally or sealing a commitment between parties.",
    usageContexts: ["Deals", "Agreements", "Partnerships", "Formal greetings", "Commitments"],
    examples: [
      { context: "Deal", text: "We have a deal 🤝" },
      { context: "Agreement", text: "Glad we could agree 🤝" },
      { context: "Partnership", text: "Looking forward to working together 🤝" }
    ],
    misunderstandings: ["Clear professional meaning"],
    relatedEmojis: ["handshake", "waving-hand", "thumbs-up"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["handshake", "deal", "agreement", "partner", "business"]
  },
  {
    unicode: "🖐️",
    name: "Hand with Fingers Splayed",
    slug: "hand-with-fingers-splayed",
    shortMeaning: "An open hand with fingers spread wide.",
    detailedMeaning: "The Hand with Fingers Splayed emoji shows an open palm with fingers spread apart. It represents openness, high fives, stopping, or the number five.\n\nUsed for high fives, saying stop, or showing open honesty.",
    usageContexts: ["High Five", "Stop", "Open", "Five", "Greeting"],
    examples: [
      { context: "High Five", text: "High five! 🖐️" },
      { context: "Stop", text: "Wait right there 🖐️" },
      { context: "Counting", text: "Five more minutes 🖐️" }
    ],
    misunderstandings: ["Clear open hand meaning"],
    relatedEmojis: ["waving-hand", "raised-hand", "vulcan-salute"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["open hand", "high five", "stop", "five", "splayed"]
  },
  {
    unicode: "🖖",
    name: "Vulcan Salute",
    slug: "vulcan-salute",
    shortMeaning: "The Vulcan greeting - 'Live long and prosper.'",
    detailedMeaning: "The Vulcan Salute emoji shows a hand with fingers split between middle and ring finger. It's the famous Star Trek greeting meaning 'Live long and prosper.'\n\nUsed by Star Trek fans, for sci-fi references, or as a nerdy greeting.",
    usageContexts: ["Star Trek", "Sci-Fi", "Greeting", "Nerdy", "Peace"],
    examples: [
      { context: "Star Trek", text: "Live long and prosper 🖖" },
      { context: "Farewell", text: "See you later 🖖" },
      { context: "Nerdy", text: "Trekkie vibes 🖖" }
    ],
    misunderstandings: ["May not be recognized by non-Star Trek fans"],
    relatedEmojis: ["waving-hand", "hand-with-fingers-splayed", "rocket"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["vulcan", "star trek", "spock", "prosper", "salute"]
  },
  {
    unicode: "🤌",
    name: "Pinched Fingers",
    slug: "pinched-fingers",
    shortMeaning: "Italian hand gesture - 'What do you want?' or 'Perfect!'",
    detailedMeaning: "The Pinched Fingers emoji shows fingers brought together in a pinch. It's the iconic Italian gesture that can mean 'What do you want?', 'Perfect!', or express emphasis.\n\nUsed for Italian references, expressing perfection, or adding dramatic flair.",
    usageContexts: ["Italian", "Perfect", "Emphasis", "Questioning", "Chef's Kiss"],
    examples: [
      { context: "Italian", text: "Mamma mia! 🤌" },
      { context: "Perfect", text: "This pasta is 🤌" },
      { context: "Questioning", text: "What are you doing? 🤌" }
    ],
    misunderstandings: ["Cultural meaning varies - mostly associated with Italian gestures"],
    relatedEmojis: ["ok-hand", "pinching-hand", "chef"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["pinched", "italian", "perfect", "what", "chef kiss"]
  },
  {
    unicode: "🤏",
    name: "Pinching Hand",
    slug: "pinching-hand",
    shortMeaning: "A small amount - 'just a little bit.'",
    detailedMeaning: "The Pinching Hand emoji shows thumb and index finger close together, indicating a small amount. It's used to show something is tiny or to ask for just a little.\n\nUsed for indicating small quantities, measurements, or minimal amounts.",
    usageContexts: ["Small", "Little Bit", "Tiny", "Amount", "Measurement"],
    examples: [
      { context: "Small", text: "Just a little 🤏" },
      { context: "Tiny", text: "It's this big 🤏" },
      { context: "Amount", text: "A pinch of salt 🤏" }
    ],
    misunderstandings: ["May be used sarcastically to minimize things"],
    relatedEmojis: ["pinched-fingers", "ok-hand", "index-pointing-up"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["pinch", "small", "tiny", "little", "amount"]
  },
  {
    unicode: "☝️",
    name: "Index Pointing Up",
    slug: "index-pointing-up",
    shortMeaning: "Pointing up - 'one moment' or drawing attention.",
    detailedMeaning: "The Index Pointing Up emoji shows a finger pointing upward. It's used to indicate 'one moment,' draw attention to something above, or represent the number one.\n\nUsed for asking to wait, pointing something out, or emphasizing importance.",
    usageContexts: ["Wait", "Attention", "Number One", "Important", "Point"],
    examples: [
      { context: "Wait", text: "One second ☝️" },
      { context: "Important", text: "This is key ☝️" },
      { context: "Number", text: "Number one ☝️" }
    ],
    misunderstandings: ["Clear pointing meaning"],
    relatedEmojis: ["backhand-index-pointing-up", "index-pointing-at-viewer", "raised-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "up", "one", "wait", "attention"]
  },
  {
    unicode: "👆",
    name: "Backhand Index Pointing Up",
    slug: "backhand-index-pointing-up",
    shortMeaning: "Pointing upward - directing attention above.",
    detailedMeaning: "The Backhand Index Pointing Up emoji shows the back of a hand with index finger pointing up. It's used to direct attention to something above or previously mentioned.\n\nUsed to reference something above in a conversation or on screen.",
    usageContexts: ["Look Up", "Above", "Previous", "Direction", "Reference"],
    examples: [
      { context: "Above", text: "Read that 👆" },
      { context: "Previous", text: "What they said 👆" },
      { context: "Direction", text: "Scroll up 👆" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["index-pointing-up", "backhand-index-pointing-down", "up-arrow"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "up", "above", "look", "previous"]
  },
  {
    unicode: "👇",
    name: "Backhand Index Pointing Down",
    slug: "backhand-index-pointing-down",
    shortMeaning: "Pointing downward - directing attention below.",
    detailedMeaning: "The Backhand Index Pointing Down emoji shows the back of a hand with index finger pointing down. It's used to direct attention to something below or following.\n\nUsed to indicate something coming next or to look below.",
    usageContexts: ["Look Down", "Below", "Next", "Direction", "Following"],
    examples: [
      { context: "Below", text: "Check this out 👇" },
      { context: "Next", text: "Link below 👇" },
      { context: "Thread", text: "Thread 👇" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["backhand-index-pointing-up", "down-arrow", "index-pointing-up"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "down", "below", "look", "next"]
  },
  {
    unicode: "👈",
    name: "Backhand Index Pointing Left",
    slug: "backhand-index-pointing-left",
    shortMeaning: "Pointing left - directing attention to the left.",
    detailedMeaning: "The Backhand Index Pointing Left emoji shows the back of a hand with index finger pointing left. It's used to direct attention to something on the left.\n\nUsed to indicate direction or point at something to the left.",
    usageContexts: ["Look Left", "Direction", "Point", "That Way", "Reference"],
    examples: [
      { context: "Direction", text: "Over there 👈" },
      { context: "Point", text: "This person 👈" },
      { context: "Exit", text: "Exit that way 👈" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["backhand-index-pointing-right", "left-arrow", "index-pointing-up"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "left", "direction", "that", "way"]
  },
  {
    unicode: "👉",
    name: "Backhand Index Pointing Right",
    slug: "backhand-index-pointing-right",
    shortMeaning: "Pointing right - directing attention to the right.",
    detailedMeaning: "The Backhand Index Pointing Right emoji shows the back of a hand with index finger pointing right. It's used to direct attention to something on the right.\n\nOften paired with other emojis to point at them or create memes.",
    usageContexts: ["Look Right", "Direction", "Point", "This", "Reference"],
    examples: [
      { context: "Point", text: "You 👉😎👉" },
      { context: "Direction", text: "Click here 👉" },
      { context: "Emphasis", text: "This is it 👉" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["backhand-index-pointing-left", "right-arrow", "index-pointing-up"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "right", "direction", "this", "click"]
  },
  {
    unicode: "🫵",
    name: "Index Pointing at the Viewer",
    slug: "index-pointing-at-viewer",
    shortMeaning: "Pointing at you - 'I'm talking to you!'",
    detailedMeaning: "The Index Pointing at the Viewer emoji shows a finger pointing directly at the viewer. It's used to address someone directly, like the famous Uncle Sam poster.\n\nUsed for calling someone out, addressing the reader directly, or recruitment-style messaging.",
    usageContexts: ["You", "Direct", "Calling Out", "Recruitment", "Address"],
    examples: [
      { context: "You", text: "Yes, you! 🫵" },
      { context: "Direct", text: "I need you 🫵" },
      { context: "Call Out", text: "Tag yourself 🫵" }
    ],
    misunderstandings: ["Can feel confrontational"],
    relatedEmojis: ["index-pointing-up", "backhand-index-pointing-right", "eyes"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["point", "you", "viewer", "direct", "calling"]
  },
  {
    unicode: "🤚",
    name: "Raised Back of Hand",
    slug: "raised-back-of-hand",
    shortMeaning: "The back of a raised hand.",
    detailedMeaning: "The Raised Back of Hand emoji shows the back of a raised hand. It's used for stopping, waiting, or as an alternative wave.\n\nUsed to say stop, wait, or as a variation of a raised hand gesture.",
    usageContexts: ["Stop", "Wait", "Halt", "Raised Hand", "Attention"],
    examples: [
      { context: "Stop", text: "Hold on 🤚" },
      { context: "Wait", text: "Wait a minute 🤚" },
      { context: "Halt", text: "Stop right there 🤚" }
    ],
    misunderstandings: ["Clear stop/wait meaning"],
    relatedEmojis: ["raised-hand", "hand-with-fingers-splayed", "stop-sign"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["back", "hand", "stop", "wait", "raised"]
  },
  {
    unicode: "🫲",
    name: "Leftwards Hand",
    slug: "leftwards-hand",
    shortMeaning: "A hand extended to the left.",
    detailedMeaning: "The Leftwards Hand emoji shows an open hand pointing left. It's used for offering, directing, or gesturing to the left.\n\nUsed for handshakes, offering something, or pointing direction.",
    usageContexts: ["Offer", "Direction", "Gesture", "Handshake", "Give"],
    examples: [
      { context: "Offer", text: "Here you go 🫲" },
      { context: "Direction", text: "This way 🫲" },
      { context: "Handshake", text: "Nice to meet you 🫲🫱" }
    ],
    misunderstandings: ["Clear directional gesture"],
    relatedEmojis: ["rightwards-hand", "handshake", "waving-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["left", "hand", "offer", "direction", "gesture"]
  },
  {
    unicode: "🫱",
    name: "Rightwards Hand",
    slug: "rightwards-hand",
    shortMeaning: "A hand extended to the right.",
    detailedMeaning: "The Rightwards Hand emoji shows an open hand pointing right. It's used for offering, directing, or gesturing to the right.\n\nUsed for handshakes, offering something, or pointing direction.",
    usageContexts: ["Offer", "Direction", "Gesture", "Handshake", "Give"],
    examples: [
      { context: "Offer", text: "Take this 🫱" },
      { context: "Direction", text: "Over here 🫱" },
      { context: "Handshake", text: "Shake hands 🫲🫱" }
    ],
    misunderstandings: ["Clear directional gesture"],
    relatedEmojis: ["leftwards-hand", "handshake", "waving-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["right", "hand", "offer", "direction", "gesture"]
  },
  {
    unicode: "🫳",
    name: "Palm Down Hand",
    slug: "palm-down-hand",
    shortMeaning: "A hand with palm facing down.",
    detailedMeaning: "The Palm Down Hand emoji shows a hand with the palm facing downward. It's used for calming down, lowering something, or dropping gestures.\n\nUsed to indicate calming down, lowering volume, or settling things.",
    usageContexts: ["Calm Down", "Lower", "Drop", "Settle", "Relax"],
    examples: [
      { context: "Calm", text: "Easy now 🫳" },
      { context: "Lower", text: "Keep it down 🫳" },
      { context: "Settle", text: "Let's settle this 🫳" }
    ],
    misunderstandings: ["Clear calming gesture"],
    relatedEmojis: ["palm-up-hand", "raised-hand", "stop-sign"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["palm", "down", "calm", "lower", "settle"]
  },
  {
    unicode: "🫴",
    name: "Palm Up Hand",
    slug: "palm-up-hand",
    shortMeaning: "A hand with palm facing up - offering or asking.",
    detailedMeaning: "The Palm Up Hand emoji shows a hand with the palm facing upward. It's used for offering, asking, or presenting something.\n\nUsed to indicate offering, beckoning, or presenting something to someone.",
    usageContexts: ["Offer", "Ask", "Present", "Beckon", "Give"],
    examples: [
      { context: "Offer", text: "Here, take it 🫴" },
      { context: "Ask", text: "May I? 🫴" },
      { context: "Present", text: "Ta-da! 🫴" }
    ],
    misunderstandings: ["Clear offering gesture"],
    relatedEmojis: ["palm-down-hand", "open-hands", "folded-hands"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["palm", "up", "offer", "ask", "present"]
  },
  {
    unicode: "🫰",
    name: "Hand with Index Finger and Thumb Crossed",
    slug: "hand-with-index-finger-and-thumb-crossed",
    shortMeaning: "A gesture meaning money or love (Korean heart).",
    detailedMeaning: "The Hand with Index Finger and Thumb Crossed emoji shows fingers forming a snapping position or money gesture. It can represent money, a snap, or the Korean finger heart.\n\nUsed for money references, snapping, or as a cute heart gesture.",
    usageContexts: ["Money", "Snap", "Korean Heart", "Love", "Expensive"],
    examples: [
      { context: "Money", text: "Cha-ching 🫰" },
      { context: "Love", text: "Finger heart 🫰" },
      { context: "Snap", text: "Just like that 🫰" }
    ],
    misunderstandings: ["Multiple meanings depending on culture"],
    relatedEmojis: ["money-bag", "heart", "ok-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["money", "snap", "heart", "korean", "finger"]
  },
  {
    unicode: "🤙",
    name: "Call Me Hand",
    slug: "call-me-hand",
    shortMeaning: "The 'call me' or 'shaka' gesture.",
    detailedMeaning: "The Call Me Hand emoji shows a hand with thumb and pinky extended. It represents 'call me' or the Hawaiian shaka sign meaning 'hang loose.'\n\nUsed for asking someone to call, surf culture references, or laid-back vibes.",
    usageContexts: ["Call Me", "Shaka", "Hang Loose", "Surf", "Chill"],
    examples: [
      { context: "Call", text: "Call me later 🤙" },
      { context: "Chill", text: "Hang loose 🤙" },
      { context: "Surf", text: "Surf's up 🤙" }
    ],
    misunderstandings: ["Clear meaning in both contexts"],
    relatedEmojis: ["waving-hand", "telephone", "surfer"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["call", "shaka", "hang loose", "surf", "phone"]
  },
  {
    unicode: "🫶",
    name: "Heart Hands",
    slug: "heart-hands",
    shortMeaning: "Hands forming a heart shape.",
    detailedMeaning: "The Heart Hands emoji shows two hands forming a heart shape. It represents love, appreciation, and affection through the iconic heart gesture.\n\nUsed to express love, support, gratitude, or admiration.",
    usageContexts: ["Love", "Support", "Gratitude", "Appreciation", "Affection"],
    examples: [
      { context: "Love", text: "Sending love 🫶" },
      { context: "Support", text: "Here for you 🫶" },
      { context: "Thanks", text: "Thank you all 🫶" }
    ],
    misunderstandings: ["Clear love/heart meaning"],
    relatedEmojis: ["red-heart", "smiling-face-with-hearts", "folded-hands"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["heart", "love", "hands", "support", "affection"]
  },
  {
    unicode: "👐",
    name: "Open Hands",
    slug: "open-hands",
    shortMeaning: "Open hands showing openness or jazz hands.",
    detailedMeaning: "The Open Hands emoji shows two open hands facing forward. It represents openness, hugs, jazz hands, or a welcoming gesture.\n\nUsed for hugs, welcoming, jazz hands celebration, or showing openness.",
    usageContexts: ["Hug", "Welcome", "Jazz Hands", "Open", "Celebration"],
    examples: [
      { context: "Hug", text: "Virtual hug 👐" },
      { context: "Jazz Hands", text: "Ta-da! 👐" },
      { context: "Welcome", text: "Welcome! 👐" }
    ],
    misunderstandings: ["Can mean hug or jazz hands"],
    relatedEmojis: ["raising-hands", "clapping-hands", "folded-hands"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["open", "hands", "hug", "jazz hands", "welcome"]
  },
  {
    unicode: "🤲",
    name: "Palms Up Together",
    slug: "palms-up-together",
    shortMeaning: "Palms together facing up - offering or prayer.",
    detailedMeaning: "The Palms Up Together emoji shows two palms facing upward together. It represents offering, receiving, prayer, or asking.\n\nUsed for offering something, religious contexts, or asking for something.",
    usageContexts: ["Offer", "Prayer", "Receive", "Ask", "Give"],
    examples: [
      { context: "Offer", text: "Here, take it 🤲" },
      { context: "Prayer", text: "Prayers for you 🤲" },
      { context: "Ask", text: "Please help 🤲" }
    ],
    misunderstandings: ["Clear offering/prayer meaning"],
    relatedEmojis: ["folded-hands", "open-hands", "palm-up-hand"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["palms", "up", "offer", "prayer", "receive"]
  },
  {
    unicode: "🤛",
    name: "Left-Facing Fist",
    slug: "left-facing-fist",
    shortMeaning: "A fist facing left - for fist bumps.",
    detailedMeaning: "The Left-Facing Fist emoji shows a fist facing left. It's typically used with the right-facing fist to create a fist bump.\n\nUsed for fist bumps, greetings, or showing solidarity with someone.",
    usageContexts: ["Fist Bump", "Greeting", "Solidarity", "Bro", "Connection"],
    examples: [
      { context: "Fist Bump", text: "Nice work! 🤜🤛" },
      { context: "Greeting", text: "What's up 🤛" },
      { context: "Solidarity", text: "We got this 🤛" }
    ],
    misunderstandings: ["Usually paired with right-facing fist"],
    relatedEmojis: ["right-facing-fist", "oncoming-fist", "handshake"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["fist", "left", "bump", "greeting", "bro"]
  },
  {
    unicode: "🤜",
    name: "Right-Facing Fist",
    slug: "right-facing-fist",
    shortMeaning: "A fist facing right - for fist bumps.",
    detailedMeaning: "The Right-Facing Fist emoji shows a fist facing right. It's typically used with the left-facing fist to create a fist bump.\n\nUsed for fist bumps, greetings, or showing connection with someone.",
    usageContexts: ["Fist Bump", "Greeting", "Connection", "Bro", "Teamwork"],
    examples: [
      { context: "Fist Bump", text: "Great job! 🤜🤛" },
      { context: "Greeting", text: "Yo! 🤜" },
      { context: "Team", text: "Teamwork 🤜🤛" }
    ],
    misunderstandings: ["Usually paired with left-facing fist"],
    relatedEmojis: ["left-facing-fist", "oncoming-fist", "handshake"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-closed",
    keywords: ["fist", "right", "bump", "greeting", "bro"]
  },
  {
    unicode: "✍️",
    name: "Writing Hand",
    slug: "writing-hand",
    shortMeaning: "A hand writing - taking notes or signing.",
    detailedMeaning: "The Writing Hand emoji shows a hand holding a pen or pencil writing. It represents writing, note-taking, signing documents, or being an author.\n\nUsed for writing, studying, signing things, or creative writing.",
    usageContexts: ["Writing", "Notes", "Signing", "Author", "Study"],
    examples: [
      { context: "Writing", text: "Working on my novel ✍️" },
      { context: "Notes", text: "Taking notes ✍️" },
      { context: "Signing", text: "Just signed the contract ✍️" }
    ],
    misunderstandings: ["Clear writing meaning"],
    relatedEmojis: ["memo", "pen", "notebook"],
    categorySlug: "people-and-body",
    subgroup: "hand-prop",
    keywords: ["writing", "hand", "pen", "notes", "author"]
  },
  {
    unicode: "🤳",
    name: "Selfie",
    slug: "selfie",
    shortMeaning: "A hand taking a selfie with a phone.",
    detailedMeaning: "The Selfie emoji shows a hand holding a phone taking a selfie. It represents taking selfies, phone photography, or social media culture.\n\nUsed for selfie references, social media posts, or phone photography.",
    usageContexts: ["Selfie", "Phone", "Photo", "Social Media", "Camera"],
    examples: [
      { context: "Selfie", text: "Selfie time 🤳" },
      { context: "Photo", text: "Taking pics 🤳" },
      { context: "Social", text: "Posting later 🤳" }
    ],
    misunderstandings: ["Clear selfie meaning"],
    relatedEmojis: ["camera", "mobile-phone", "face-with-sunglasses"],
    categorySlug: "people-and-body",
    subgroup: "hand-prop",
    keywords: ["selfie", "phone", "photo", "camera", "social"]
  },
  {
    unicode: "🙏",
    name: "Folded Hands",
    slug: "folded-hands",
    shortMeaning: "Prayer, thanks, or 'please' - hands pressed together.",
    detailedMeaning: "Folded Hands show two hands pressed together, representing prayer, gratitude, 'please,' or a respectful gesture. It's one of the most versatile emojis with cultural significance.\n\nIn Western contexts, often used for 'please' or 'thank you.' In Eastern contexts, it's a respectful greeting (namaste). Also commonly used for prayer and hope.",
    usageContexts: ["Prayer", "Please", "Thank you", "Hope", "Namaste"],
    examples: [
      { context: "Please", text: "Please help 🙏" },
      { context: "Thanks", text: "Thank you so much 🙏" },
      { context: "Hope", text: "Hoping for good news 🙏" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🙏🏻" },
      { description: "Medium-light skin tone", emoji: "🙏🏼" },
      { description: "Medium skin tone", emoji: "🙏🏽" },
      { description: "Medium-dark skin tone", emoji: "🙏🏾" },
      { description: "Dark skin tone", emoji: "🙏🏿" }
    ],
    misunderstandings: ["Sometimes debated if it's prayer or high-five - it's prayer/gratitude"],
    relatedEmojis: ["person-bowing", "place-of-worship", "heart"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["pray", "thanks", "please", "hope", "namaste"]
  },
  {
    unicode: "💪",
    name: "Flexed Biceps",
    slug: "flexed-biceps",
    shortMeaning: "Strength, power, working out, or determination.",
    detailedMeaning: "Flexed Biceps show a bent arm with tense bicep muscle, representing strength, power, and determination. It's used for anything related to being strong - physically or metaphorically.\n\nUsed for gym/workout content, showing determination, encouraging strength, or celebrating physical achievements. It represents both literal strength and inner resolve.",
    usageContexts: ["Strength", "Workouts", "Determination", "Encouragement", "Power"],
    examples: [
      { context: "Workout", text: "Gym time 💪" },
      { context: "Determination", text: "You can do this 💪" },
      { context: "Strong", text: "Feeling powerful today 💪" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "💪🏻" },
      { description: "Medium-light skin tone", emoji: "💪🏼" },
      { description: "Medium skin tone", emoji: "💪🏽" },
      { description: "Medium-dark skin tone", emoji: "💪🏾" },
      { description: "Dark skin tone", emoji: "💪🏿" }
    ],
    misunderstandings: ["Clear meaning - universally understood"],
    relatedEmojis: ["raised-fist", "person-lifting-weights", "trophy"],
    categorySlug: "people-and-body",
    subgroup: "body-parts",
    keywords: ["strong", "muscle", "gym", "power", "flex"]
  },
  {
    unicode: "👀",
    name: "Eyes",
    slug: "eyes",
    shortMeaning: "Looking, watching, or 'I see what's going on here.'",
    detailedMeaning: "The Eyes emoji shows a pair of eyes looking to the side, indicating that you're watching, noticing something interesting, or drawing attention to something noteworthy.\n\nUsed when something catches your attention, when gossiping, or to indicate you're watching a situation unfold. It has a slightly nosy but curious quality.",
    usageContexts: ["Watching", "Noticing", "Curiosity", "Drawing attention", "Gossip"],
    examples: [
      { context: "Noticing", text: "Did you see that? 👀" },
      { context: "Curious", text: "Something's happening 👀" },
      { context: "Attention", text: "New announcement 👀" }
    ],
    misunderstandings: ["Can seem like you're prying or being nosy"],
    relatedEmojis: ["eye", "face-with-monocle", "thinking-face"],
    categorySlug: "people-and-body",
    subgroup: "body-parts",
    keywords: ["looking", "watching", "eyes", "see", "notice"]
  },
  {
    unicode: "👅",
    name: "Tongue",
    slug: "tongue",
    shortMeaning: "A tongue sticking out - playful, tasty, or cheeky.",
    detailedMeaning: "The Tongue emoji shows a tongue sticking out, conveying playfulness, something tasty, or cheeky behavior. It's often used in food contexts or for silly/flirty messages.\n\nUsed for talking about delicious food, being silly, or adding a cheeky element to messages. It's playful and a bit suggestive depending on context.",
    usageContexts: ["Tasty food", "Playfulness", "Cheeky", "Silly", "Flirty"],
    examples: [
      { context: "Food", text: "This cake is 👅" },
      { context: "Silly", text: "Being goofy 👅" },
      { context: "Cheeky", text: "Miss you 👅" }
    ],
    misunderstandings: ["Can be seen as suggestive in certain contexts"],
    relatedEmojis: ["face-savoring-food", "winking-face-with-tongue", "drooling-face"],
    categorySlug: "people-and-body",
    subgroup: "body-parts",
    keywords: ["tongue", "lick", "taste", "yummy", "playful"]
  },
  // PERSON GESTURES (Emotions subcategory)
  {
    unicode: "🤗",
    name: "Hugging Face",
    slug: "hugging-face",
    shortMeaning: "A warm hug emoji showing open arms and affection.",
    detailedMeaning: "The Hugging Face emoji shows a smiling face with open hands, as if offering a warm hug. It represents affection, warmth, care, and the desire to embrace someone.\n\nUsed to send virtual hugs, express warmth and care, or show appreciation and love for someone.",
    usageContexts: ["Hugs", "Affection", "Care", "Warmth", "Comfort"],
    examples: [
      { context: "Hug", text: "Sending hugs 🤗" },
      { context: "Care", text: "Thinking of you 🤗" },
      { context: "Welcome", text: "Welcome home 🤗" }
    ],
    misunderstandings: ["Sometimes seen as jazz hands instead of hugging"],
    relatedEmojis: ["smiling-face-with-hearts", "red-heart", "folded-hands"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["hug", "embrace", "warm", "care", "affection"]
  },
  {
    unicode: "🤷",
    name: "Person Shrugging",
    slug: "person-shrugging",
    shortMeaning: "I don't know - the classic shrug gesture.",
    detailedMeaning: "The Person Shrugging emoji shows a person raising both hands with palms up in a shrug gesture. It represents uncertainty, indifference, or 'I don't know.'\n\nUsed to express confusion, uncertainty, or nonchalance. It's the perfect emoji for when you don't have an answer or don't really care.",
    usageContexts: ["Uncertainty", "I don't know", "Indifference", "Confusion", "Whatever"],
    examples: [
      { context: "Unknown", text: "Who knows 🤷" },
      { context: "Indifferent", text: "Whatever happens 🤷" },
      { context: "Confused", text: "No idea 🤷" }
    ],
    variations: [
      { description: "Woman shrugging", emoji: "🤷‍♀️" },
      { description: "Man shrugging", emoji: "🤷‍♂️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["thinking-face", "confused-face", "person-facepalming"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["shrug", "idk", "whatever", "uncertain", "indifferent"]
  },
  {
    unicode: "🤦",
    name: "Person Facepalming",
    slug: "person-facepalming",
    shortMeaning: "Facepalm - disappointment, embarrassment, or disbelief.",
    detailedMeaning: "The Person Facepalming emoji shows a person with their hand on their face in a facepalm gesture. It represents frustration, embarrassment, disbelief, or disappointment.\n\nUsed when something is frustrating, embarrassing, or unbelievable. It's the universal gesture for 'I can't believe this.'",
    usageContexts: ["Frustration", "Embarrassment", "Disbelief", "Disappointment", "Facepalm"],
    examples: [
      { context: "Frustration", text: "Not again 🤦" },
      { context: "Embarrassing", text: "Can't believe I did that 🤦" },
      { context: "Disbelief", text: "Really? 🤦" }
    ],
    variations: [
      { description: "Woman facepalming", emoji: "🤦‍♀️" },
      { description: "Man facepalming", emoji: "🤦‍♂️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["person-shrugging", "confused-face", "unamused-face"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["facepalm", "frustrated", "embarrassed", "disbelief", "disappointed"]
  },
  {
    unicode: "🙋",
    name: "Person Raising Hand",
    slug: "person-raising-hand",
    shortMeaning: "Raising hand - volunteering, asking a question, or saying hi.",
    detailedMeaning: "The Person Raising Hand emoji shows a person with their hand raised high. It represents volunteering, asking questions, getting attention, or enthusiastic participation.\n\nUsed to volunteer for something, ask a question, or enthusiastically agree or participate in something.",
    usageContexts: ["Volunteering", "Questions", "Participation", "Attention", "Hi"],
    examples: [
      { context: "Volunteer", text: "I'll do it 🙋" },
      { context: "Question", text: "Quick question 🙋" },
      { context: "Agree", text: "Me too 🙋" }
    ],
    variations: [
      { description: "Woman raising hand", emoji: "🙋‍♀️" },
      { description: "Man raising hand", emoji: "🙋‍♂️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["raised-hand", "waving-hand", "person-bowing"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["raise hand", "volunteer", "question", "me", "hi"]
  },
  {
    unicode: "🙅",
    name: "Person Gesturing No",
    slug: "person-gesturing-no",
    shortMeaning: "Crossing arms in an X - no, not allowed, or stop.",
    detailedMeaning: "The Person Gesturing No emoji shows a person with arms crossed in an X shape. It represents refusal, negation, or indicating something is not allowed.\n\nUsed to say no, decline something, or indicate that something is forbidden or not acceptable.",
    usageContexts: ["No", "Refusal", "Not allowed", "Stop", "Decline"],
    examples: [
      { context: "No", text: "Absolutely not 🙅" },
      { context: "Refuse", text: "I won't do it 🙅" },
      { context: "Stop", text: "Not happening 🙅" }
    ],
    variations: [
      { description: "Woman gesturing no", emoji: "🙅‍♀️" },
      { description: "Man gesturing no", emoji: "🙅‍♂️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["person-gesturing-ok", "cross-mark", "prohibited"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["no", "not allowed", "stop", "refuse", "decline"]
  },
  {
    unicode: "🙆",
    name: "Person Gesturing OK",
    slug: "person-gesturing-ok",
    shortMeaning: "Arms forming O above head - OK, yes, or all good.",
    detailedMeaning: "The Person Gesturing OK emoji shows a person with arms raised forming an O shape above their head. It represents agreement, approval, or indicating everything is okay.\n\nUsed to say OK, give approval, or confirm that everything is fine and acceptable.",
    usageContexts: ["OK", "Approval", "Yes", "All good", "Confirmed"],
    examples: [
      { context: "OK", text: "Sounds good 🙆" },
      { context: "Approve", text: "All clear 🙆" },
      { context: "Yes", text: "I'm in 🙆" }
    ],
    variations: [
      { description: "Woman gesturing OK", emoji: "🙆‍♀️" },
      { description: "Man gesturing OK", emoji: "🙆‍♂️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["person-gesturing-no", "ok-hand", "check-mark"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["ok", "yes", "good", "approve", "confirmed"]
  },
  {
    unicode: "🙇",
    name: "Person Bowing",
    slug: "person-bowing",
    shortMeaning: "Bowing deeply - respect, apology, or gratitude.",
    detailedMeaning: "The Person Bowing emoji shows a person bowing deeply. In many cultures, especially Asian cultures, bowing represents respect, apology, gratitude, or greeting.\n\nUsed to show deep respect, apologize sincerely, express profound gratitude, or greet someone formally.",
    usageContexts: ["Respect", "Apology", "Gratitude", "Greeting", "Honor"],
    examples: [
      { context: "Apology", text: "I'm so sorry 🙇" },
      { context: "Gratitude", text: "Thank you so much 🙇" },
      { context: "Respect", text: "Much respect 🙇" }
    ],
    variations: [
      { description: "Woman bowing", emoji: "🙇‍♀️" },
      { description: "Man bowing", emoji: "🙇‍♂️" }
    ],
    misunderstandings: ["May not be understood in Western contexts"],
    relatedEmojis: ["folded-hands", "person-raising-hand", "heart"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["bow", "respect", "apology", "gratitude", "honor"]
  },
  {
    unicode: "💁",
    name: "Person Tipping Hand",
    slug: "person-tipping-hand",
    shortMeaning: "Sassy hand flip - serving information or attitude.",
    detailedMeaning: "The Person Tipping Hand emoji shows a person with their palm facing up in a presenting gesture. It's often used to convey sassiness, serving information, or 'here's the tea.'\n\nUsed to present information, be sassy, or express 'obviously' or 'as I was saying.' It has become iconic for serving attitude.",
    usageContexts: ["Sassy", "Information", "Obviously", "Presenting", "Attitude"],
    examples: [
      { context: "Sassy", text: "As I said 💁" },
      { context: "Obvious", text: "Obviously 💁" },
      { context: "Info", text: "Here's the thing 💁" }
    ],
    variations: [
      { description: "Woman tipping hand", emoji: "💁‍♀️" },
      { description: "Man tipping hand", emoji: "💁‍♂️" }
    ],
    misunderstandings: ["Originally 'information desk person' but used for sass"],
    relatedEmojis: ["person-shrugging", "nail-polish", "face-with-raised-eyebrow"],
    categorySlug: "people-and-body",
    subgroup: "person-gesture",
    keywords: ["sassy", "information", "obviously", "attitude", "presenting"]
  },
  // PERSON ROLES (Professions subcategory)
  {
    unicode: "👨‍⚕️",
    name: "Man Health Worker",
    slug: "man-health-worker",
    shortMeaning: "A male doctor or healthcare professional.",
    detailedMeaning: "The Man Health Worker emoji shows a male healthcare professional, typically depicted wearing scrubs or a white coat with a stethoscope. It represents doctors, nurses, and medical professionals.\n\nUsed when discussing healthcare, medical topics, or referring to healthcare heroes and medical professionals.",
    usageContexts: ["Healthcare", "Doctor", "Medical", "Hospital", "Health"],
    examples: [
      { context: "Doctor", text: "Going to see the doctor 👨‍⚕️" },
      { context: "Medical", text: "Healthcare heroes 👨‍⚕️" },
      { context: "Advice", text: "Doctor says rest 👨‍⚕️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-health-worker", "hospital", "syringe"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["doctor", "nurse", "healthcare", "medical", "hospital"]
  },
  {
    unicode: "👩‍⚕️",
    name: "Woman Health Worker",
    slug: "woman-health-worker",
    shortMeaning: "A female doctor or healthcare professional.",
    detailedMeaning: "The Woman Health Worker emoji shows a female healthcare professional. It represents women in medicine including doctors, nurses, and other medical professionals.\n\nUsed to represent female healthcare workers, discuss medical topics, or honor women in medicine.",
    usageContexts: ["Healthcare", "Doctor", "Nurse", "Medical", "Hospital"],
    examples: [
      { context: "Doctor", text: "My doctor is amazing 👩‍⚕️" },
      { context: "Nurse", text: "Nurses are heroes 👩‍⚕️" },
      { context: "Medical", text: "Women in medicine 👩‍⚕️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-health-worker", "hospital", "stethoscope"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["doctor", "nurse", "healthcare", "medical", "woman"]
  },
  {
    unicode: "👨‍🏫",
    name: "Man Teacher",
    slug: "man-teacher",
    shortMeaning: "A male teacher or professor.",
    detailedMeaning: "The Man Teacher emoji shows a male educator typically at a chalkboard. It represents teachers, professors, instructors, and educators.\n\nUsed when discussing education, learning, or honoring teachers and their important work.",
    usageContexts: ["Education", "Teacher", "School", "Learning", "Professor"],
    examples: [
      { context: "School", text: "Back to school 👨‍🏫" },
      { context: "Teacher", text: "Best teacher ever 👨‍🏫" },
      { context: "Learning", text: "Teaching time 👨‍🏫" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-teacher", "school", "books"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["teacher", "professor", "education", "school", "instructor"]
  },
  {
    unicode: "👩‍🏫",
    name: "Woman Teacher",
    slug: "woman-teacher",
    shortMeaning: "A female teacher or professor.",
    detailedMeaning: "The Woman Teacher emoji shows a female educator. It represents women teachers, professors, and instructors in education.\n\nUsed to represent female educators, discuss education, or thank teachers.",
    usageContexts: ["Education", "Teacher", "School", "Learning", "Professor"],
    examples: [
      { context: "Teacher", text: "Thank you teacher 👩‍🏫" },
      { context: "School", text: "Teacher's day 👩‍🏫" },
      { context: "Education", text: "Educators rock 👩‍🏫" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-teacher", "school", "graduation-cap"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["teacher", "professor", "education", "school", "woman"]
  },
  {
    unicode: "👨‍💻",
    name: "Man Technologist",
    slug: "man-technologist",
    shortMeaning: "A male programmer or tech worker.",
    detailedMeaning: "The Man Technologist emoji shows a male working on a computer. It represents programmers, developers, IT professionals, and tech workers.\n\nUsed for discussing technology, coding, software development, or tech careers.",
    usageContexts: ["Technology", "Programming", "Coding", "Developer", "IT"],
    examples: [
      { context: "Coding", text: "Coding all night 👨‍💻" },
      { context: "Tech", text: "Tech life 👨‍💻" },
      { context: "Work", text: "Debugging 👨‍💻" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-technologist", "laptop", "keyboard"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "coder", "tech", "IT"]
  },
  {
    unicode: "👩‍💻",
    name: "Woman Technologist",
    slug: "woman-technologist",
    shortMeaning: "A female programmer or tech worker.",
    detailedMeaning: "The Woman Technologist emoji shows a female working on a computer. It represents women in tech including programmers, developers, and IT professionals.\n\nUsed to represent women in technology, discuss coding, or promote diversity in tech.",
    usageContexts: ["Technology", "Programming", "Coding", "Developer", "Women in Tech"],
    examples: [
      { context: "Coding", text: "Women who code 👩‍💻" },
      { context: "Tech", text: "Tech queen 👩‍💻" },
      { context: "Work", text: "Building apps 👩‍💻" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-technologist", "laptop", "mobile-phone"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "coder", "tech", "woman"]
  },
  {
    unicode: "👨‍🍳",
    name: "Man Cook",
    slug: "man-cook",
    shortMeaning: "A male chef or cook.",
    detailedMeaning: "The Man Cook emoji shows a male chef in a chef's hat. It represents professional chefs, cooks, and anyone who loves cooking.\n\nUsed when discussing cooking, food preparation, culinary arts, or restaurants.",
    usageContexts: ["Cooking", "Chef", "Food", "Restaurant", "Culinary"],
    examples: [
      { context: "Cooking", text: "Chef mode 👨‍🍳" },
      { context: "Food", text: "Dinner time 👨‍🍳" },
      { context: "Restaurant", text: "Master chef 👨‍🍳" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-cook", "cooking", "fork-and-knife"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "food", "kitchen", "culinary"]
  },
  {
    unicode: "👩‍🍳",
    name: "Woman Cook",
    slug: "woman-cook",
    shortMeaning: "A female chef or cook.",
    detailedMeaning: "The Woman Cook emoji shows a female chef. It represents women chefs, cooks, and culinary professionals.\n\nUsed to represent female chefs, discuss cooking, or celebrate culinary arts.",
    usageContexts: ["Cooking", "Chef", "Food", "Kitchen", "Culinary"],
    examples: [
      { context: "Cooking", text: "Cooking up something special 👩‍🍳" },
      { context: "Chef", text: "Chef life 👩‍🍳" },
      { context: "Food", text: "Home cooking 👩‍🍳" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-cook", "pot-of-food", "cooking"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "food", "kitchen", "woman"]
  },
  {
    unicode: "👮",
    name: "Police Officer",
    slug: "police-officer",
    shortMeaning: "A police officer in uniform.",
    detailedMeaning: "The Police Officer emoji shows a person in police uniform with a cap. It represents law enforcement, police, and public safety.\n\nUsed when discussing law enforcement, safety, or emergencies.",
    usageContexts: ["Police", "Law enforcement", "Safety", "Emergency", "Authority"],
    examples: [
      { context: "Police", text: "Calling the police 👮" },
      { context: "Safety", text: "Stay safe 👮" },
      { context: "Law", text: "Law and order 👮" }
    ],
    variations: [
      { description: "Woman police officer", emoji: "👮‍♀️" },
      { description: "Man police officer", emoji: "👮‍♂️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["police-car", "siren", "detective"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["police", "cop", "officer", "law", "safety"]
  },
  {
    unicode: "👷",
    name: "Construction Worker",
    slug: "construction-worker",
    shortMeaning: "A construction worker in hard hat.",
    detailedMeaning: "The Construction Worker emoji shows a person wearing a hard hat and construction gear. It represents construction workers, builders, and manual laborers.\n\nUsed when discussing construction, building, renovation, or hard work.",
    usageContexts: ["Construction", "Building", "Work", "Renovation", "Labor"],
    examples: [
      { context: "Work", text: "Hard at work 👷" },
      { context: "Building", text: "Building something great 👷" },
      { context: "Construction", text: "Construction zone 👷" }
    ],
    variations: [
      { description: "Woman construction worker", emoji: "👷‍♀️" },
      { description: "Man construction worker", emoji: "👷‍♂️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["building-construction", "hammer", "wrench"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["construction", "builder", "worker", "hard hat", "labor"]
  },
  {
    unicode: "👨‍🎨",
    name: "Man Artist",
    slug: "man-artist",
    shortMeaning: "A male artist or painter.",
    detailedMeaning: "The Man Artist emoji shows a male artist typically with a beret and paintbrush. It represents artists, painters, and creative professionals.\n\nUsed to discuss art, creativity, or artistic endeavors.",
    usageContexts: ["Art", "Painting", "Creativity", "Artist", "Design"],
    examples: [
      { context: "Art", text: "Creating art 👨‍🎨" },
      { context: "Creative", text: "Artist life 👨‍🎨" },
      { context: "Painting", text: "New painting 👨‍🎨" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-artist", "artist-palette", "framed-picture"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "art", "creative", "design"]
  },
  {
    unicode: "👩‍🎨",
    name: "Woman Artist",
    slug: "woman-artist",
    shortMeaning: "A female artist or painter.",
    detailedMeaning: "The Woman Artist emoji shows a female artist. It represents women artists, painters, and creative professionals.\n\nUsed to represent female artists, discuss art, or celebrate creativity.",
    usageContexts: ["Art", "Painting", "Creativity", "Artist", "Women in Art"],
    examples: [
      { context: "Art", text: "Woman artist 👩‍🎨" },
      { context: "Creative", text: "Creative soul 👩‍🎨" },
      { context: "Work", text: "Working on my art 👩‍🎨" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-artist", "artist-palette", "paintbrush"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "art", "creative", "woman"]
  },
  {
    unicode: "👨‍🚒",
    name: "Man Firefighter",
    slug: "man-firefighter",
    shortMeaning: "A male firefighter - a real-life hero.",
    detailedMeaning: "The Man Firefighter emoji shows a male firefighter in protective gear. Firefighters are heroes who risk their lives to save others and fight fires.\n\nUsed to represent firefighters, emergencies, bravery, or thanking first responders.",
    usageContexts: ["Firefighter", "Emergency", "Hero", "Rescue", "Brave"],
    examples: [
      { context: "Hero", text: "Firefighters are heroes 👨‍🚒" },
      { context: "Emergency", text: "Fire department 👨‍🚒" },
      { context: "Thanks", text: "Thank you first responders 👨‍🚒" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-firefighter", "fire-engine", "fire"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["firefighter", "fireman", "hero", "rescue", "emergency"]
  },
  {
    unicode: "👩‍🚒",
    name: "Woman Firefighter",
    slug: "woman-firefighter",
    shortMeaning: "A female firefighter - brave and heroic.",
    detailedMeaning: "The Woman Firefighter emoji shows a female firefighter. It represents women in firefighting and emergency services.\n\nUsed to represent female firefighters, promote diversity in emergency services, or thank first responders.",
    usageContexts: ["Firefighter", "Emergency", "Hero", "Women", "Brave"],
    examples: [
      { context: "Hero", text: "Women firefighters 👩‍🚒" },
      { context: "Brave", text: "Fearless 👩‍🚒" },
      { context: "Career", text: "Dream job 👩‍🚒" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-firefighter", "fire-engine", "fire"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["firefighter", "firewoman", "hero", "rescue", "woman"]
  },
  {
    unicode: "👨‍✈️",
    name: "Man Pilot",
    slug: "man-pilot",
    shortMeaning: "A male pilot flying high.",
    detailedMeaning: "The Man Pilot emoji shows a male pilot in uniform with a captain's hat. Pilots are skilled professionals who fly aircraft.\n\nUsed when discussing aviation, travel, or admiring pilots and their profession.",
    usageContexts: ["Pilot", "Aviation", "Travel", "Flying", "Captain"],
    examples: [
      { context: "Flying", text: "Captain speaking 👨‍✈️" },
      { context: "Travel", text: "Ready for takeoff 👨‍✈️" },
      { context: "Career", text: "Dream of flying 👨‍✈️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-pilot", "airplane", "airport"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["pilot", "captain", "aviation", "flying", "airplane"]
  },
  {
    unicode: "👩‍✈️",
    name: "Woman Pilot",
    slug: "woman-pilot",
    shortMeaning: "A female pilot soaring the skies.",
    detailedMeaning: "The Woman Pilot emoji shows a female pilot in uniform. It represents women in aviation and promotes diversity in the cockpit.\n\nUsed to represent female pilots, discuss aviation, or celebrate women in male-dominated fields.",
    usageContexts: ["Pilot", "Aviation", "Women", "Flying", "Captain"],
    examples: [
      { context: "Flying", text: "Women pilots 👩‍✈️" },
      { context: "Career", text: "Sky's not the limit 👩‍✈️" },
      { context: "Travel", text: "Captain 👩‍✈️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-pilot", "airplane", "globe"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["pilot", "captain", "aviation", "flying", "woman"]
  },
  {
    unicode: "👨‍🔬",
    name: "Man Scientist",
    slug: "man-scientist",
    shortMeaning: "A male scientist conducting research.",
    detailedMeaning: "The Man Scientist emoji shows a male scientist in a lab coat, often with goggles. Scientists pursue knowledge and make discoveries.\n\nUsed when discussing science, research, experiments, or celebrating scientific achievements.",
    usageContexts: ["Science", "Research", "Lab", "Discovery", "Experiment"],
    examples: [
      { context: "Science", text: "Science rules 👨‍🔬" },
      { context: "Research", text: "In the lab 👨‍🔬" },
      { context: "Discovery", text: "Eureka moment 👨‍🔬" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-scientist", "microscope", "test-tube"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["scientist", "research", "lab", "science", "discovery"]
  },
  {
    unicode: "👩‍🔬",
    name: "Woman Scientist",
    slug: "woman-scientist",
    shortMeaning: "A female scientist making discoveries.",
    detailedMeaning: "The Woman Scientist emoji shows a female scientist. It represents women in science and STEM fields.\n\nUsed to represent female scientists, promote women in STEM, or discuss scientific topics.",
    usageContexts: ["Science", "Research", "Women in STEM", "Lab", "Discovery"],
    examples: [
      { context: "STEM", text: "Women in science 👩‍🔬" },
      { context: "Research", text: "Lab work 👩‍🔬" },
      { context: "Career", text: "Future scientist 👩‍🔬" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-scientist", "microscope", "dna"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["scientist", "research", "lab", "STEM", "woman"]
  },
  {
    unicode: "👨‍🚀",
    name: "Man Astronaut",
    slug: "man-astronaut",
    shortMeaning: "A male astronaut exploring space.",
    detailedMeaning: "The Man Astronaut emoji shows a male astronaut in a spacesuit. Astronauts are pioneers who explore the final frontier.\n\nUsed when discussing space exploration, NASA, dreaming big, or reaching for the stars.",
    usageContexts: ["Space", "Astronaut", "NASA", "Exploration", "Dreams"],
    examples: [
      { context: "Space", text: "To infinity and beyond 👨‍🚀" },
      { context: "Dreams", text: "Reach for the stars 👨‍🚀" },
      { context: "Explore", text: "Space explorer 👨‍🚀" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-astronaut", "rocket", "moon"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["astronaut", "space", "NASA", "explorer", "rocket"]
  },
  {
    unicode: "👩‍🚀",
    name: "Woman Astronaut",
    slug: "woman-astronaut",
    shortMeaning: "A female astronaut conquering space.",
    detailedMeaning: "The Woman Astronaut emoji shows a female astronaut. It represents women in space exploration and aerospace.\n\nUsed to represent female astronauts, celebrate women in space, or discuss space exploration.",
    usageContexts: ["Space", "Astronaut", "Women", "NASA", "Exploration"],
    examples: [
      { context: "Space", text: "Women in space 👩‍🚀" },
      { context: "Dreams", text: "Sky is not the limit 👩‍🚀" },
      { context: "Hero", text: "Space hero 👩‍🚀" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-astronaut", "rocket", "stars"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["astronaut", "space", "NASA", "explorer", "woman"]
  },
  {
    unicode: "👨‍⚖️",
    name: "Man Judge",
    slug: "man-judge",
    shortMeaning: "A male judge upholding justice.",
    detailedMeaning: "The Man Judge emoji shows a male judge in robes. Judges are responsible for upholding the law and delivering justice.\n\nUsed when discussing law, courts, justice, or legal matters.",
    usageContexts: ["Law", "Justice", "Court", "Legal", "Judge"],
    examples: [
      { context: "Justice", text: "Justice served 👨‍⚖️" },
      { context: "Court", text: "Court day 👨‍⚖️" },
      { context: "Law", text: "The law 👨‍⚖️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-judge", "balance-scale", "courthouse"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["judge", "law", "justice", "court", "legal"]
  },
  {
    unicode: "👩‍⚖️",
    name: "Woman Judge",
    slug: "woman-judge",
    shortMeaning: "A female judge delivering justice.",
    detailedMeaning: "The Woman Judge emoji shows a female judge. It represents women in the legal system and judiciary.\n\nUsed to represent female judges, discuss legal matters, or promote women in law.",
    usageContexts: ["Law", "Justice", "Court", "Women", "Legal"],
    examples: [
      { context: "Justice", text: "Women in law 👩‍⚖️" },
      { context: "Court", text: "Honorable judge 👩‍⚖️" },
      { context: "Career", text: "Future judge 👩‍⚖️" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-judge", "balance-scale", "briefcase"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["judge", "law", "justice", "court", "woman"]
  },
  {
    unicode: "👨‍🌾",
    name: "Man Farmer",
    slug: "man-farmer",
    shortMeaning: "A male farmer working the land.",
    detailedMeaning: "The Man Farmer emoji shows a male farmer, typically with a straw hat. Farmers grow our food and work with nature.\n\nUsed when discussing agriculture, farming, food production, or rural life.",
    usageContexts: ["Farming", "Agriculture", "Food", "Rural", "Nature"],
    examples: [
      { context: "Farm", text: "Farm life 👨‍🌾" },
      { context: "Food", text: "Growing food 👨‍🌾" },
      { context: "Nature", text: "Working the land 👨‍🌾" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-farmer", "tractor", "corn"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "food", "rural"]
  },
  {
    unicode: "👩‍🌾",
    name: "Woman Farmer",
    slug: "woman-farmer",
    shortMeaning: "A female farmer nurturing the earth.",
    detailedMeaning: "The Woman Farmer emoji shows a female farmer. It represents women in agriculture and farming.\n\nUsed to represent female farmers, discuss agriculture, or celebrate rural life.",
    usageContexts: ["Farming", "Agriculture", "Women", "Food", "Rural"],
    examples: [
      { context: "Farm", text: "Women farmers 👩‍🌾" },
      { context: "Harvest", text: "Harvest time 👩‍🌾" },
      { context: "Nature", text: "Organic farming 👩‍🌾" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-farmer", "seedling", "vegetables"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "food", "woman"]
  },
  {
    unicode: "👨‍🔧",
    name: "Man Mechanic",
    slug: "man-mechanic",
    shortMeaning: "A male mechanic fixing things.",
    detailedMeaning: "The Man Mechanic emoji shows a male mechanic or technician. Mechanics repair vehicles, machines, and equipment.\n\nUsed when discussing repairs, vehicles, mechanical work, or skilled trades.",
    usageContexts: ["Mechanic", "Repair", "Cars", "Technical", "Fixing"],
    examples: [
      { context: "Repair", text: "Fixing it 👨‍🔧" },
      { context: "Car", text: "Car troubles 👨‍🔧" },
      { context: "Work", text: "Mechanic life 👨‍🔧" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-mechanic", "wrench", "automobile"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "fix", "car", "technician"]
  },
  {
    unicode: "👩‍🔧",
    name: "Woman Mechanic",
    slug: "woman-mechanic",
    shortMeaning: "A female mechanic getting the job done.",
    detailedMeaning: "The Woman Mechanic emoji shows a female mechanic. It represents women in mechanical trades and technical work.\n\nUsed to represent female mechanics, discuss repairs, or promote women in trades.",
    usageContexts: ["Mechanic", "Repair", "Women", "Technical", "Trades"],
    examples: [
      { context: "Work", text: "Women mechanics 👩‍🔧" },
      { context: "Fix", text: "I can fix it 👩‍🔧" },
      { context: "Career", text: "Skilled trades 👩‍🔧" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-mechanic", "wrench", "gear"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "fix", "technician", "woman"]
  },
  {
    unicode: "👨‍🎤",
    name: "Man Singer",
    slug: "man-singer",
    shortMeaning: "A male singer or rock star.",
    detailedMeaning: "The Man Singer emoji shows a male performer, often with a punk or rock style. Singers entertain and express through music.\n\nUsed when discussing music, concerts, singing, or expressing love for performers.",
    usageContexts: ["Music", "Singing", "Concert", "Performer", "Rock"],
    examples: [
      { context: "Music", text: "Rock star 👨‍🎤" },
      { context: "Concert", text: "Concert night 👨‍🎤" },
      { context: "Singing", text: "Karaoke time 👨‍🎤" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["woman-singer", "microphone", "musical-notes"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "performer", "rock", "music"]
  },
  {
    unicode: "👩‍🎤",
    name: "Woman Singer",
    slug: "woman-singer",
    shortMeaning: "A female singer or pop star.",
    detailedMeaning: "The Woman Singer emoji shows a female performer with a stylish look. It represents female musicians and vocalists.\n\nUsed when discussing music, female artists, concerts, or singing.",
    usageContexts: ["Music", "Singing", "Pop star", "Performer", "Concert"],
    examples: [
      { context: "Music", text: "Pop princess 👩‍🎤" },
      { context: "Concert", text: "Live performance 👩‍🎤" },
      { context: "Singing", text: "Singing queen 👩‍🎤" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["man-singer", "microphone", "headphone"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "performer", "pop star", "woman"]
  },
  {
    unicode: "🧑‍💼",
    name: "Office Worker",
    slug: "office-worker",
    shortMeaning: "An office worker or business professional.",
    detailedMeaning: "The Office Worker emoji shows a professional in business attire. It represents office jobs, corporate work, and business professionals.\n\nUsed when discussing work, business, corporate life, or professional environments.",
    usageContexts: ["Office", "Business", "Work", "Corporate", "Professional"],
    examples: [
      { context: "Work", text: "Office mode 🧑‍💼" },
      { context: "Business", text: "Business meeting 🧑‍💼" },
      { context: "Job", text: "9 to 5 life 🧑‍💼" }
    ],
    variations: [
      { description: "Woman office worker", emoji: "👩‍💼" },
      { description: "Man office worker", emoji: "👨‍💼" }
    ],
    misunderstandings: ["Clear profession meaning"],
    relatedEmojis: ["briefcase", "laptop", "office-building"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["office", "business", "professional", "work", "corporate"]
  },
  {
    unicode: "👨‍🎓",
    name: "Man Student",
    slug: "man-student",
    shortMeaning: "A male student or graduate.",
    detailedMeaning: "The Man Student emoji shows a male wearing a graduation cap. It represents students, graduates, and academic achievement.\n\nUsed for education, graduation, studying, or academic celebrations.",
    usageContexts: ["Education", "Graduate", "Student", "School", "University"],
    examples: [
      { context: "Graduate", text: "Graduation day 👨‍🎓" },
      { context: "Study", text: "Study mode 👨‍🎓" },
      { context: "School", text: "Back to school 👨‍🎓" }
    ],
    misunderstandings: ["Clear education meaning"],
    relatedEmojis: ["woman-student", "graduation-cap", "books"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["student", "graduate", "education", "school", "university"]
  },
  {
    unicode: "👩‍🎓",
    name: "Woman Student",
    slug: "woman-student",
    shortMeaning: "A female student or graduate.",
    detailedMeaning: "The Woman Student emoji shows a female wearing a graduation cap. It represents female students, graduates, and academic success.\n\nUsed for education, graduation celebrations, or studying.",
    usageContexts: ["Education", "Graduate", "Student", "Women", "University"],
    examples: [
      { context: "Graduate", text: "She graduated 👩‍🎓" },
      { context: "Study", text: "Studying hard 👩‍🎓" },
      { context: "Success", text: "Academic excellence 👩‍🎓" }
    ],
    misunderstandings: ["Clear education meaning"],
    relatedEmojis: ["man-student", "graduation-cap", "diploma"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["student", "graduate", "education", "school", "woman"]
  },
  {
    unicode: "👨‍⚕️",
    name: "Man Nurse",
    slug: "man-nurse",
    shortMeaning: "A male nurse or healthcare worker.",
    detailedMeaning: "The Man Nurse emoji shows a male in medical attire. It represents male nurses, healthcare workers, and medical professionals.\n\nUsed for nursing, healthcare, or medical care discussions.",
    usageContexts: ["Nurse", "Healthcare", "Medical", "Hospital", "Caregiver"],
    examples: [
      { context: "Work", text: "On shift at the hospital 👨‍⚕️" },
      { context: "Care", text: "Helping patients 👨‍⚕️" },
      { context: "Pride", text: "Proud to be a nurse 👨‍⚕️" }
    ],
    misunderstandings: ["May be confused with doctor"],
    relatedEmojis: ["woman-nurse", "hospital", "stethoscope"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["nurse", "healthcare", "medical", "hospital", "man"]
  },
  {
    unicode: "👩‍⚕️",
    name: "Woman Nurse",
    slug: "woman-nurse",
    shortMeaning: "A female nurse or healthcare worker.",
    detailedMeaning: "The Woman Nurse emoji shows a female in medical attire. It represents female nurses, healthcare workers, and medical professionals.\n\nUsed for nursing, healthcare, or medical care discussions.",
    usageContexts: ["Nurse", "Healthcare", "Medical", "Hospital", "Caregiver"],
    examples: [
      { context: "Work", text: "Night shift at the hospital 👩‍⚕️" },
      { context: "Care", text: "Taking care of patients 👩‍⚕️" },
      { context: "Pride", text: "Nursing is my calling 👩‍⚕️" }
    ],
    misunderstandings: ["May be confused with doctor"],
    relatedEmojis: ["man-nurse", "hospital", "stethoscope"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["nurse", "healthcare", "medical", "hospital", "woman"]
  },
  {
    unicode: "👨‍⚖️",
    name: "Man Lawyer",
    slug: "man-lawyer",
    shortMeaning: "A male lawyer or judge.",
    detailedMeaning: "The Man Lawyer emoji shows a male in legal attire. It represents lawyers, judges, attorneys, and legal professionals.\n\nUsed for legal discussions, court matters, or justice topics.",
    usageContexts: ["Lawyer", "Legal", "Court", "Justice", "Attorney"],
    examples: [
      { context: "Work", text: "Heading to court 👨‍⚖️" },
      { context: "Legal", text: "Consulting my lawyer 👨‍⚖️" },
      { context: "Justice", text: "Fighting for justice 👨‍⚖️" }
    ],
    misunderstandings: ["Represents both lawyers and judges"],
    relatedEmojis: ["woman-lawyer", "balance-scale", "briefcase"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["lawyer", "judge", "attorney", "legal", "court", "man"]
  },
  {
    unicode: "👩‍⚖️",
    name: "Woman Lawyer",
    slug: "woman-lawyer",
    shortMeaning: "A female lawyer or judge.",
    detailedMeaning: "The Woman Lawyer emoji shows a female in legal attire. It represents lawyers, judges, attorneys, and legal professionals.\n\nUsed for legal discussions, court matters, or justice topics.",
    usageContexts: ["Lawyer", "Legal", "Court", "Justice", "Attorney"],
    examples: [
      { context: "Work", text: "In the courtroom 👩‍⚖️" },
      { context: "Legal", text: "My attorney 👩‍⚖️" },
      { context: "Justice", text: "Justice prevails 👩‍⚖️" }
    ],
    misunderstandings: ["Represents both lawyers and judges"],
    relatedEmojis: ["man-lawyer", "balance-scale", "briefcase"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["lawyer", "judge", "attorney", "legal", "court", "woman"]
  },
  {
    unicode: "👷",
    name: "Engineer",
    slug: "engineer",
    shortMeaning: "An engineer or construction worker.",
    detailedMeaning: "The Engineer emoji shows a person wearing a hard hat. It represents engineers, construction workers, builders, and technical professionals.\n\nUsed for engineering, construction, or building discussions.",
    usageContexts: ["Engineer", "Construction", "Building", "Technical", "Work"],
    examples: [
      { context: "Work", text: "On the construction site 👷" },
      { context: "Build", text: "Building something new 👷" },
      { context: "Career", text: "Proud engineer 👷" }
    ],
    misunderstandings: ["Can mean any hard hat worker"],
    relatedEmojis: ["man-engineer", "woman-engineer", "wrench"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["engineer", "construction", "builder", "hard hat", "worker"]
  },
  {
    unicode: "👷‍♂️",
    name: "Man Engineer",
    slug: "man-engineer",
    shortMeaning: "A male engineer or construction worker.",
    detailedMeaning: "The Man Engineer emoji shows a male wearing a hard hat. It represents male engineers, construction workers, and technical professionals.\n\nUsed for engineering, construction, or technical work.",
    usageContexts: ["Engineer", "Construction", "Technical", "Building", "Work"],
    examples: [
      { context: "Work", text: "Engineering project 👷‍♂️" },
      { context: "Build", text: "Building the future 👷‍♂️" },
      { context: "Career", text: "Civil engineer 👷‍♂️" }
    ],
    misunderstandings: ["May represent any construction worker"],
    relatedEmojis: ["woman-engineer", "engineer", "hammer"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["engineer", "construction", "builder", "man", "technical"]
  },
  {
    unicode: "👷‍♀️",
    name: "Woman Engineer",
    slug: "woman-engineer",
    shortMeaning: "A female engineer or construction worker.",
    detailedMeaning: "The Woman Engineer emoji shows a female wearing a hard hat. It represents female engineers, construction workers, and technical professionals.\n\nUsed for engineering, construction, or technical work.",
    usageContexts: ["Engineer", "Construction", "Technical", "Building", "Women in STEM"],
    examples: [
      { context: "Work", text: "On the job site 👷‍♀️" },
      { context: "Career", text: "Software engineer 👷‍♀️" },
      { context: "Pride", text: "Women in engineering 👷‍♀️" }
    ],
    misunderstandings: ["May represent any construction worker"],
    relatedEmojis: ["man-engineer", "engineer", "computer"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["engineer", "construction", "builder", "woman", "technical"]
  },
  {
    unicode: "👨‍🍳",
    name: "Man Chef",
    slug: "man-chef",
    shortMeaning: "A male chef or cook.",
    detailedMeaning: "The Man Chef emoji shows a male wearing a chef's hat. It represents chefs, cooks, and culinary professionals.\n\nUsed for cooking, restaurants, or culinary discussions.",
    usageContexts: ["Chef", "Cooking", "Restaurant", "Culinary", "Food"],
    examples: [
      { context: "Work", text: "In the kitchen 👨‍🍳" },
      { context: "Cooking", text: "Making dinner 👨‍🍳" },
      { context: "Career", text: "Professional chef 👨‍🍳" }
    ],
    misunderstandings: ["Clear cooking meaning"],
    relatedEmojis: ["woman-chef", "cooking", "fork-and-knife"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "kitchen", "culinary", "man"]
  },
  {
    unicode: "👩‍🍳",
    name: "Woman Chef",
    slug: "woman-chef",
    shortMeaning: "A female chef or cook.",
    detailedMeaning: "The Woman Chef emoji shows a female wearing a chef's hat. It represents chefs, cooks, and culinary professionals.\n\nUsed for cooking, restaurants, or culinary discussions.",
    usageContexts: ["Chef", "Cooking", "Restaurant", "Culinary", "Food"],
    examples: [
      { context: "Work", text: "Running the kitchen 👩‍🍳" },
      { context: "Cooking", text: "Preparing a feast 👩‍🍳" },
      { context: "Career", text: "Head chef 👩‍🍳" }
    ],
    misunderstandings: ["Clear cooking meaning"],
    relatedEmojis: ["man-chef", "cooking", "fork-and-knife"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "kitchen", "culinary", "woman"]
  },
  {
    unicode: "👨‍🎨",
    name: "Man Artist",
    slug: "man-artist",
    shortMeaning: "A male artist or painter.",
    detailedMeaning: "The Man Artist emoji shows a male wearing a beret. It represents artists, painters, and creative professionals.\n\nUsed for art, creativity, or artistic discussions.",
    usageContexts: ["Artist", "Painting", "Creative", "Art", "Design"],
    examples: [
      { context: "Work", text: "Working on my canvas 👨‍🎨" },
      { context: "Art", text: "Creating art 👨‍🎨" },
      { context: "Career", text: "Professional artist 👨‍🎨" }
    ],
    misunderstandings: ["Represents visual artists"],
    relatedEmojis: ["woman-artist", "artist-palette", "framed-picture"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "creative", "art", "man"]
  },
  {
    unicode: "👩‍🎨",
    name: "Woman Artist",
    slug: "woman-artist",
    shortMeaning: "A female artist or painter.",
    detailedMeaning: "The Woman Artist emoji shows a female wearing a beret. It represents artists, painters, and creative professionals.\n\nUsed for art, creativity, or artistic discussions.",
    usageContexts: ["Artist", "Painting", "Creative", "Art", "Design"],
    examples: [
      { context: "Work", text: "In the studio 👩‍🎨" },
      { context: "Art", text: "Painting today 👩‍🎨" },
      { context: "Career", text: "Gallery artist 👩‍🎨" }
    ],
    misunderstandings: ["Represents visual artists"],
    relatedEmojis: ["man-artist", "artist-palette", "framed-picture"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "creative", "art", "woman"]
  },
  {
    unicode: "👮",
    name: "Police Officer",
    slug: "police-officer",
    shortMeaning: "A police officer.",
    detailedMeaning: "The Police Officer emoji shows a person in police uniform. It represents law enforcement, police, and public safety.\n\nUsed for police, law enforcement, or safety discussions.",
    usageContexts: ["Police", "Law Enforcement", "Safety", "Security", "Authority"],
    examples: [
      { context: "Safety", text: "Police on duty 👮" },
      { context: "Career", text: "Serving the community 👮" },
      { context: "Law", text: "Law enforcement 👮" }
    ],
    misunderstandings: ["Clear law enforcement meaning"],
    relatedEmojis: ["man-police-officer", "woman-police-officer", "police-car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["police", "officer", "cop", "law", "enforcement"]
  },
  {
    unicode: "👮‍♂️",
    name: "Man Police Officer",
    slug: "man-police-officer",
    shortMeaning: "A male police officer.",
    detailedMeaning: "The Man Police Officer emoji shows a male in police uniform. It represents male police officers and law enforcement.\n\nUsed for police, law enforcement, or safety discussions.",
    usageContexts: ["Police", "Law Enforcement", "Safety", "Security", "Career"],
    examples: [
      { context: "Work", text: "On patrol 👮‍♂️" },
      { context: "Career", text: "Police officer 👮‍♂️" },
      { context: "Safety", text: "Keeping peace 👮‍♂️" }
    ],
    misunderstandings: ["Clear police meaning"],
    relatedEmojis: ["woman-police-officer", "police-officer", "police-car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["police", "officer", "cop", "man", "law"]
  },
  {
    unicode: "👮‍♀️",
    name: "Woman Police Officer",
    slug: "woman-police-officer",
    shortMeaning: "A female police officer.",
    detailedMeaning: "The Woman Police Officer emoji shows a female in police uniform. It represents female police officers and law enforcement.\n\nUsed for police, law enforcement, or safety discussions.",
    usageContexts: ["Police", "Law Enforcement", "Safety", "Security", "Career"],
    examples: [
      { context: "Work", text: "On duty 👮‍♀️" },
      { context: "Career", text: "Police woman 👮‍♀️" },
      { context: "Safety", text: "Protecting citizens 👮‍♀️" }
    ],
    misunderstandings: ["Clear police meaning"],
    relatedEmojis: ["man-police-officer", "police-officer", "police-car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["police", "officer", "cop", "woman", "law"]
  },
  {
    unicode: "🕵️",
    name: "Detective",
    slug: "detective",
    shortMeaning: "A detective or spy.",
    detailedMeaning: "The Detective emoji shows a person in a trench coat and hat. It represents detectives, investigators, spies, and mystery.\n\nUsed for investigation, mystery, or detective discussions.",
    usageContexts: ["Detective", "Investigation", "Mystery", "Spy", "Secret"],
    examples: [
      { context: "Mystery", text: "Solving the case 🕵️" },
      { context: "Investigation", text: "Investigating 🕵️" },
      { context: "Secret", text: "Undercover 🕵️" }
    ],
    misunderstandings: ["Can mean spy or detective"],
    relatedEmojis: ["man-detective", "woman-detective", "magnifying-glass"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["detective", "spy", "investigator", "mystery", "secret"]
  },
  {
    unicode: "🕵️‍♂️",
    name: "Man Detective",
    slug: "man-detective",
    shortMeaning: "A male detective or spy.",
    detailedMeaning: "The Man Detective emoji shows a male in detective attire. It represents male detectives, investigators, and spies.\n\nUsed for investigation, mystery, or detective discussions.",
    usageContexts: ["Detective", "Investigation", "Mystery", "Spy", "Career"],
    examples: [
      { context: "Work", text: "On the case 🕵️‍♂️" },
      { context: "Mystery", text: "Following clues 🕵️‍♂️" },
      { context: "Secret", text: "Secret agent 🕵️‍♂️" }
    ],
    misunderstandings: ["Can represent detective or spy"],
    relatedEmojis: ["woman-detective", "detective", "magnifying-glass"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["detective", "spy", "investigator", "man", "mystery"]
  },
  {
    unicode: "🕵️‍♀️",
    name: "Woman Detective",
    slug: "woman-detective",
    shortMeaning: "A female detective or spy.",
    detailedMeaning: "The Woman Detective emoji shows a female in detective attire. It represents female detectives, investigators, and spies.\n\nUsed for investigation, mystery, or detective discussions.",
    usageContexts: ["Detective", "Investigation", "Mystery", "Spy", "Career"],
    examples: [
      { context: "Work", text: "Cracking the case 🕵️‍♀️" },
      { context: "Mystery", text: "Gathering evidence 🕵️‍♀️" },
      { context: "Secret", text: "Spy mode 🕵️‍♀️" }
    ],
    misunderstandings: ["Can represent detective or spy"],
    relatedEmojis: ["man-detective", "detective", "magnifying-glass"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["detective", "spy", "investigator", "woman", "mystery"]
  },
  {
    unicode: "💂",
    name: "Guard",
    slug: "guard",
    shortMeaning: "A royal guard or security guard.",
    detailedMeaning: "The Guard emoji shows a person in a guard uniform with a tall hat. It represents guards, security, and protection.\n\nUsed for security, guards, or British royal guard references.",
    usageContexts: ["Guard", "Security", "Protection", "British", "Royal"],
    examples: [
      { context: "Security", text: "On guard duty 💂" },
      { context: "British", text: "Buckingham Palace 💂" },
      { context: "Protection", text: "Standing guard 💂" }
    ],
    misunderstandings: ["Often associated with British royal guards"],
    relatedEmojis: ["man-guard", "woman-guard", "castle"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["guard", "security", "royal", "british", "protection"]
  },
  {
    unicode: "👨‍🎤",
    name: "Man Singer",
    slug: "man-singer",
    shortMeaning: "A male singer or musician.",
    detailedMeaning: "The Man Singer emoji shows a male with a distinctive hairstyle. It represents singers, rock stars, and musicians.\n\nUsed for music, singing, or performer discussions.",
    usageContexts: ["Singer", "Music", "Performer", "Rock Star", "Concert"],
    examples: [
      { context: "Music", text: "Performing tonight 👨‍🎤" },
      { context: "Concert", text: "Rock star mode 👨‍🎤" },
      { context: "Career", text: "Professional singer 👨‍🎤" }
    ],
    misunderstandings: ["Represents singers and musicians"],
    relatedEmojis: ["woman-singer", "microphone", "musical-notes"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "performer", "rock", "man"]
  },
  {
    unicode: "👩‍🎤",
    name: "Woman Singer",
    slug: "woman-singer",
    shortMeaning: "A female singer or musician.",
    detailedMeaning: "The Woman Singer emoji shows a female with a distinctive hairstyle. It represents singers, rock stars, and musicians.\n\nUsed for music, singing, or performer discussions.",
    usageContexts: ["Singer", "Music", "Performer", "Rock Star", "Concert"],
    examples: [
      { context: "Music", text: "On stage 👩‍🎤" },
      { context: "Concert", text: "Pop star 👩‍🎤" },
      { context: "Career", text: "Lead vocalist 👩‍🎤" }
    ],
    misunderstandings: ["Represents singers and musicians"],
    relatedEmojis: ["man-singer", "microphone", "musical-notes"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "performer", "rock", "woman"]
  },
  {
    unicode: "👨‍💻",
    name: "Man Technologist",
    slug: "man-technologist",
    shortMeaning: "A male programmer or tech worker.",
    detailedMeaning: "The Man Technologist emoji shows a male working on a laptop. It represents programmers, developers, and tech professionals.\n\nUsed for technology, coding, or IT discussions.",
    usageContexts: ["Programmer", "Developer", "Tech", "Coding", "IT"],
    examples: [
      { context: "Work", text: "Coding all day 👨‍💻" },
      { context: "Career", text: "Software developer 👨‍💻" },
      { context: "Tech", text: "Tech life 👨‍💻" }
    ],
    misunderstandings: ["Represents tech workers broadly"],
    relatedEmojis: ["woman-technologist", "laptop", "keyboard"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "coder", "tech", "man"]
  },
  {
    unicode: "👩‍💻",
    name: "Woman Technologist",
    slug: "woman-technologist",
    shortMeaning: "A female programmer or tech worker.",
    detailedMeaning: "The Woman Technologist emoji shows a female working on a laptop. It represents programmers, developers, and tech professionals.\n\nUsed for technology, coding, or IT discussions.",
    usageContexts: ["Programmer", "Developer", "Tech", "Coding", "Women in Tech"],
    examples: [
      { context: "Work", text: "Debugging code 👩‍💻" },
      { context: "Career", text: "Full-stack developer 👩‍💻" },
      { context: "Tech", text: "Women in tech 👩‍💻" }
    ],
    misunderstandings: ["Represents tech workers broadly"],
    relatedEmojis: ["man-technologist", "laptop", "keyboard"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "coder", "tech", "woman"]
  },
  {
    unicode: "👨‍🔧",
    name: "Man Mechanic",
    slug: "man-mechanic",
    shortMeaning: "A male mechanic or repairman.",
    detailedMeaning: "The Man Mechanic emoji shows a male in mechanic attire. It represents mechanics, repairmen, and technicians.\n\nUsed for repair, mechanics, or technical work discussions.",
    usageContexts: ["Mechanic", "Repair", "Cars", "Technical", "Maintenance"],
    examples: [
      { context: "Work", text: "Fixing cars 👨‍🔧" },
      { context: "Repair", text: "Repair time 👨‍🔧" },
      { context: "Career", text: "Auto mechanic 👨‍🔧" }
    ],
    misunderstandings: ["Represents repair workers"],
    relatedEmojis: ["woman-mechanic", "wrench", "car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "technician", "cars", "man"]
  },
  {
    unicode: "👩‍🔧",
    name: "Woman Mechanic",
    slug: "woman-mechanic",
    shortMeaning: "A female mechanic or repairwoman.",
    detailedMeaning: "The Woman Mechanic emoji shows a female in mechanic attire. It represents mechanics, repairwomen, and technicians.\n\nUsed for repair, mechanics, or technical work discussions.",
    usageContexts: ["Mechanic", "Repair", "Cars", "Technical", "Maintenance"],
    examples: [
      { context: "Work", text: "Under the hood 👩‍🔧" },
      { context: "Repair", text: "Fixing it up 👩‍🔧" },
      { context: "Career", text: "Master mechanic 👩‍🔧" }
    ],
    misunderstandings: ["Represents repair workers"],
    relatedEmojis: ["man-mechanic", "wrench", "car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "technician", "cars", "woman"]
  },
  {
    unicode: "👨‍🌾",
    name: "Man Farmer",
    slug: "man-farmer",
    shortMeaning: "A male farmer.",
    detailedMeaning: "The Man Farmer emoji shows a male wearing overalls and a hat. It represents farmers and agricultural workers.\n\nUsed for farming, agriculture, or rural discussions.",
    usageContexts: ["Farmer", "Agriculture", "Farm", "Rural", "Crops"],
    examples: [
      { context: "Work", text: "Harvesting crops 👨‍🌾" },
      { context: "Farm", text: "Farm life 👨‍🌾" },
      { context: "Career", text: "Family farmer 👨‍🌾" }
    ],
    misunderstandings: ["Clear farming meaning"],
    relatedEmojis: ["woman-farmer", "tractor", "corn"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "crops", "man"]
  },
  {
    unicode: "👩‍🌾",
    name: "Woman Farmer",
    slug: "woman-farmer",
    shortMeaning: "A female farmer.",
    detailedMeaning: "The Woman Farmer emoji shows a female wearing overalls and a hat. It represents farmers and agricultural workers.\n\nUsed for farming, agriculture, or rural discussions.",
    usageContexts: ["Farmer", "Agriculture", "Farm", "Rural", "Crops"],
    examples: [
      { context: "Work", text: "Tending the fields 👩‍🌾" },
      { context: "Farm", text: "Organic farming 👩‍🌾" },
      { context: "Career", text: "Farm owner 👩‍🌾" }
    ],
    misunderstandings: ["Clear farming meaning"],
    relatedEmojis: ["man-farmer", "tractor", "corn"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "crops", "woman"]
  },
  {
    unicode: "👨‍🏭",
    name: "Man Factory Worker",
    slug: "man-factory-worker",
    shortMeaning: "A male factory worker.",
    detailedMeaning: "The Man Factory Worker emoji shows a male in factory work attire. It represents factory workers, manufacturing, and industrial jobs.\n\nUsed for manufacturing, industry, or labor discussions.",
    usageContexts: ["Factory", "Manufacturing", "Industry", "Labor", "Worker"],
    examples: [
      { context: "Work", text: "On the assembly line 👨‍🏭" },
      { context: "Industry", text: "Factory shift 👨‍🏭" },
      { context: "Career", text: "Manufacturing job 👨‍🏭" }
    ],
    misunderstandings: ["Represents factory workers"],
    relatedEmojis: ["woman-factory-worker", "factory", "gear"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["factory", "worker", "manufacturing", "industry", "man"]
  },
  {
    unicode: "👩‍🏭",
    name: "Woman Factory Worker",
    slug: "woman-factory-worker",
    shortMeaning: "A female factory worker.",
    detailedMeaning: "The Woman Factory Worker emoji shows a female in factory work attire. It represents factory workers, manufacturing, and industrial jobs.\n\nUsed for manufacturing, industry, or labor discussions.",
    usageContexts: ["Factory", "Manufacturing", "Industry", "Labor", "Worker"],
    examples: [
      { context: "Work", text: "Factory floor 👩‍🏭" },
      { context: "Industry", text: "Industrial worker 👩‍🏭" },
      { context: "Career", text: "Factory supervisor 👩‍🏭" }
    ],
    misunderstandings: ["Represents factory workers"],
    relatedEmojis: ["man-factory-worker", "factory", "gear"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["factory", "worker", "manufacturing", "industry", "woman"]
  },
  {
    unicode: "👨‍💼",
    name: "Man Office Worker",
    slug: "man-office-worker",
    shortMeaning: "A male office worker or businessman.",
    detailedMeaning: "The Man Office Worker emoji shows a male in business attire. It represents office workers, businessmen, and corporate professionals.\n\nUsed for business, corporate, or office discussions.",
    usageContexts: ["Office", "Business", "Corporate", "Professional", "Work"],
    examples: [
      { context: "Work", text: "At the office 👨‍💼" },
      { context: "Business", text: "Business meeting 👨‍💼" },
      { context: "Career", text: "Corporate life 👨‍💼" }
    ],
    misunderstandings: ["Represents office workers broadly"],
    relatedEmojis: ["woman-office-worker", "briefcase", "office-building"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["office", "business", "corporate", "professional", "man"]
  },
  {
    unicode: "👩‍💼",
    name: "Woman Office Worker",
    slug: "woman-office-worker",
    shortMeaning: "A female office worker or businesswoman.",
    detailedMeaning: "The Woman Office Worker emoji shows a female in business attire. It represents office workers, businesswomen, and corporate professionals.\n\nUsed for business, corporate, or office discussions.",
    usageContexts: ["Office", "Business", "Corporate", "Professional", "Work"],
    examples: [
      { context: "Work", text: "Running the meeting 👩‍💼" },
      { context: "Business", text: "CEO vibes 👩‍💼" },
      { context: "Career", text: "Corporate executive 👩‍💼" }
    ],
    misunderstandings: ["Represents office workers broadly"],
    relatedEmojis: ["man-office-worker", "briefcase", "office-building"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["office", "business", "corporate", "professional", "woman"]
  },
  // FAMILY (Family subcategory)
  {
    unicode: "👨‍👩‍👧",
    name: "Family: Man, Woman, Girl",
    slug: "family-man-woman-girl",
    shortMeaning: "A family with father, mother, and daughter.",
    detailedMeaning: "This family emoji shows a family unit with a man, woman, and girl child. It represents traditional family structures and parent-child relationships.\n\nUsed to discuss family, parenting, or family activities.",
    usageContexts: ["Family", "Parents", "Children", "Home", "Parenting"],
    examples: [
      { context: "Family", text: "Family time 👨‍👩‍👧" },
      { context: "Home", text: "Home with my family 👨‍👩‍👧" },
      { context: "Love", text: "Love my family 👨‍👩‍👧" }
    ],
    misunderstandings: ["Clear family meaning"],
    relatedEmojis: ["family-man-woman-boy", "family-man-woman-girl-boy", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "parents", "daughter", "girl", "home"]
  },
  {
    unicode: "👨‍👩‍👧‍👦",
    name: "Family: Man, Woman, Girl, Boy",
    slug: "family-man-woman-girl-boy",
    shortMeaning: "A family with father, mother, daughter, and son.",
    detailedMeaning: "This family emoji shows a family with parents and two children - a girl and a boy. It represents larger family units.\n\nUsed to discuss family, siblings, or family gatherings.",
    usageContexts: ["Family", "Siblings", "Parents", "Children", "Home"],
    examples: [
      { context: "Family", text: "My whole family 👨‍👩‍👧‍👦" },
      { context: "Kids", text: "The kids 👨‍👩‍👧‍👦" },
      { context: "Together", text: "Family complete 👨‍👩‍👧‍👦" }
    ],
    misunderstandings: ["Clear family meaning"],
    relatedEmojis: ["family-man-woman-girl", "family-man-woman-boy-boy", "house"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "siblings", "kids", "parents", "complete"]
  },
  {
    unicode: "👨‍👩‍👦",
    name: "Family: Man, Woman, Boy",
    slug: "family-man-woman-boy",
    shortMeaning: "A family with father, mother, and son.",
    detailedMeaning: "This family emoji shows a family unit with a man, woman, and boy child. It represents family with a son.\n\nUsed to discuss family, parenting, or family life.",
    usageContexts: ["Family", "Parents", "Son", "Children", "Home"],
    examples: [
      { context: "Family", text: "Family day 👨‍👩‍👦" },
      { context: "Son", text: "Our boy 👨‍👩‍👦" },
      { context: "Home", text: "Home is where they are 👨‍👩‍👦" }
    ],
    misunderstandings: ["Clear family meaning"],
    relatedEmojis: ["family-man-woman-girl", "family-man-woman-boy-boy", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "parents", "son", "boy", "home"]
  },
  {
    unicode: "👩‍👩‍👧",
    name: "Family: Woman, Woman, Girl",
    slug: "family-woman-woman-girl",
    shortMeaning: "A family with two mothers and daughter.",
    detailedMeaning: "This family emoji shows two women and a girl, representing same-sex parents with a daughter. It promotes inclusive family representation.\n\nUsed to represent diverse family structures and LGBTQ+ families.",
    usageContexts: ["Family", "LGBTQ+", "Mothers", "Daughter", "Inclusive"],
    examples: [
      { context: "Family", text: "Our family 👩‍👩‍👧" },
      { context: "Pride", text: "Love is love 👩‍👩‍👧" },
      { context: "Home", text: "Two moms 👩‍👩‍👧" }
    ],
    misunderstandings: ["Represents LGBTQ+ families"],
    relatedEmojis: ["family-man-man-girl", "rainbow-flag", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "lgbtq", "mothers", "daughter", "inclusive"]
  },
  {
    unicode: "👨‍👨‍👦",
    name: "Family: Man, Man, Boy",
    slug: "family-man-man-boy",
    shortMeaning: "A family with two fathers and son.",
    detailedMeaning: "This family emoji shows two men and a boy, representing same-sex parents with a son. It promotes inclusive family representation.\n\nUsed to represent diverse family structures and LGBTQ+ families.",
    usageContexts: ["Family", "LGBTQ+", "Fathers", "Son", "Inclusive"],
    examples: [
      { context: "Family", text: "Our family 👨‍👨‍👦" },
      { context: "Pride", text: "Two dads 👨‍👨‍👦" },
      { context: "Love", text: "Family is family 👨‍👨‍👦" }
    ],
    misunderstandings: ["Represents LGBTQ+ families"],
    relatedEmojis: ["family-woman-woman-boy", "rainbow-flag", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "lgbtq", "fathers", "son", "inclusive"]
  },
  {
    unicode: "👶",
    name: "Baby",
    slug: "baby",
    shortMeaning: "A cute baby face.",
    detailedMeaning: "The Baby emoji shows a baby's face. It represents babies, infants, newborns, and new beginnings.\n\nUsed when discussing babies, pregnancy, new parents, or anything adorably innocent.",
    usageContexts: ["Baby", "Newborn", "Infant", "Pregnancy", "Cute"],
    examples: [
      { context: "Baby", text: "Baby on the way 👶" },
      { context: "Cute", text: "So precious 👶" },
      { context: "New", text: "Welcome baby 👶" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👶🏻" },
      { description: "Medium skin tone", emoji: "👶🏽" },
      { description: "Dark skin tone", emoji: "👶🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["baby-bottle", "baby-angel", "family"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["baby", "infant", "newborn", "child", "cute"]
  },
  {
    unicode: "👧",
    name: "Girl",
    slug: "girl",
    shortMeaning: "A young girl.",
    detailedMeaning: "The Girl emoji shows a young female child's face. It represents girls, daughters, and female children.\n\nUsed when talking about daughters, girls, or young females.",
    usageContexts: ["Girl", "Daughter", "Child", "Young", "Female"],
    examples: [
      { context: "Daughter", text: "My little girl 👧" },
      { context: "Child", text: "When I was a girl 👧" },
      { context: "Cute", text: "Sweet girl 👧" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👧🏻" },
      { description: "Medium skin tone", emoji: "👧🏽" },
      { description: "Dark skin tone", emoji: "👧🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["boy", "baby", "woman"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["girl", "daughter", "child", "young", "female"]
  },
  {
    unicode: "👦",
    name: "Boy",
    slug: "boy",
    shortMeaning: "A young boy.",
    detailedMeaning: "The Boy emoji shows a young male child's face. It represents boys, sons, and male children.\n\nUsed when talking about sons, boys, or young males.",
    usageContexts: ["Boy", "Son", "Child", "Young", "Male"],
    examples: [
      { context: "Son", text: "My little boy 👦" },
      { context: "Child", text: "Growing up fast 👦" },
      { context: "Cute", text: "Good boy 👦" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👦🏻" },
      { description: "Medium skin tone", emoji: "👦🏽" },
      { description: "Dark skin tone", emoji: "👦🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["girl", "baby", "man"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["boy", "son", "child", "young", "male"]
  },
  {
    unicode: "👨",
    name: "Man",
    slug: "man",
    shortMeaning: "An adult man.",
    detailedMeaning: "The Man emoji shows an adult male face. It represents men, adults, and the male gender.\n\nUsed when referring to men, adult males, or the male perspective.",
    usageContexts: ["Man", "Adult", "Male", "Person", "Gender"],
    examples: [
      { context: "Man", text: "A good man 👨" },
      { context: "Adult", text: "Grown man things 👨" },
      { context: "Person", text: "This man 👨" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👨🏻" },
      { description: "Medium skin tone", emoji: "👨🏽" },
      { description: "Dark skin tone", emoji: "👨🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["woman", "boy", "person"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["man", "male", "adult", "person", "guy"]
  },
  {
    unicode: "👩",
    name: "Woman",
    slug: "woman",
    shortMeaning: "An adult woman.",
    detailedMeaning: "The Woman emoji shows an adult female face. It represents women, adults, and the female gender.\n\nUsed when referring to women, adult females, or the female perspective.",
    usageContexts: ["Woman", "Adult", "Female", "Person", "Gender"],
    examples: [
      { context: "Woman", text: "A strong woman 👩" },
      { context: "Adult", text: "Woman of the year 👩" },
      { context: "Person", text: "This woman 👩" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "👩🏻" },
      { description: "Medium skin tone", emoji: "👩🏽" },
      { description: "Dark skin tone", emoji: "👩🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["man", "girl", "person"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["woman", "female", "adult", "person", "lady"]
  },
  {
    unicode: "🧓",
    name: "Older Person",
    slug: "older-person",
    shortMeaning: "An elderly person.",
    detailedMeaning: "The Older Person emoji shows an elderly person's face with gray hair. It represents seniors, grandparents, and the elderly.\n\nUsed when discussing seniors, aging, wisdom, or grandparents.",
    usageContexts: ["Elderly", "Senior", "Grandparent", "Wisdom", "Aging"],
    examples: [
      { context: "Grandparent", text: "Love my grandparents 🧓" },
      { context: "Wisdom", text: "Elder wisdom 🧓" },
      { context: "Respect", text: "Respect your elders 🧓" }
    ],
    variations: [
      { description: "Light skin tone", emoji: "🧓🏻" },
      { description: "Medium skin tone", emoji: "🧓🏽" },
      { description: "Dark skin tone", emoji: "🧓🏿" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["old-man", "old-woman", "family"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["elderly", "senior", "old", "grandparent", "wisdom"]
  },
  // MORE PROFESSIONS
  {
    unicode: "👨‍⚕️",
    name: "Man Health Worker",
    slug: "man-health-worker",
    shortMeaning: "A male doctor or healthcare worker.",
    detailedMeaning: "The Man Health Worker emoji shows a male in medical attire, representing doctors, nurses, and healthcare professionals.\n\nUsed for medical discussions, hospital visits, and healthcare appreciation.",
    usageContexts: ["Medical", "Doctor", "Healthcare", "Hospital", "Professional"],
    examples: [
      { context: "Medical", text: "Going to the doctor 👨‍⚕️" },
      { context: "Healthcare", text: "Thank you healthcare heroes 👨‍⚕️" },
      { context: "Profession", text: "Medical professional 👨‍⚕️" }
    ],
    misunderstandings: ["Represents all healthcare workers"],
    relatedEmojis: ["woman-health-worker", "hospital", "stethoscope"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["doctor", "nurse", "medical", "healthcare", "hospital"]
  },
  {
    unicode: "👩‍⚕️",
    name: "Woman Health Worker",
    slug: "woman-health-worker",
    shortMeaning: "A female doctor or healthcare worker.",
    detailedMeaning: "The Woman Health Worker emoji shows a female in medical attire, representing doctors, nurses, and healthcare professionals.\n\nUsed for medical discussions, hospital visits, and healthcare appreciation.",
    usageContexts: ["Medical", "Doctor", "Healthcare", "Hospital", "Professional"],
    examples: [
      { context: "Medical", text: "Nurse on duty 👩‍⚕️" },
      { context: "Healthcare", text: "Healthcare worker 👩‍⚕️" },
      { context: "Profession", text: "Female doctor 👩‍⚕️" }
    ],
    misunderstandings: ["Represents all healthcare workers"],
    relatedEmojis: ["man-health-worker", "hospital", "stethoscope"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["doctor", "nurse", "medical", "healthcare", "hospital"]
  },
  {
    unicode: "👨‍🎓",
    name: "Man Student",
    slug: "man-student",
    shortMeaning: "A male student or graduate.",
    detailedMeaning: "The Man Student emoji shows a male wearing a graduation cap, representing students, graduates, and education.\n\nUsed for graduation, education, and academic achievements.",
    usageContexts: ["Student", "Graduate", "Education", "School", "Academic"],
    examples: [
      { context: "Graduate", text: "Graduated 👨‍🎓" },
      { context: "Student", text: "Student life 👨‍🎓" },
      { context: "Education", text: "Back to school 👨‍🎓" }
    ],
    misunderstandings: ["Clear student/graduate meaning"],
    relatedEmojis: ["woman-student", "graduation-cap", "school"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["student", "graduate", "education", "school", "academic"]
  },
  {
    unicode: "👩‍🎓",
    name: "Woman Student",
    slug: "woman-student",
    shortMeaning: "A female student or graduate.",
    detailedMeaning: "The Woman Student emoji shows a female wearing a graduation cap, representing students, graduates, and education.\n\nUsed for graduation, education, and academic achievements.",
    usageContexts: ["Student", "Graduate", "Education", "School", "Academic"],
    examples: [
      { context: "Graduate", text: "Class of 2024 👩‍🎓" },
      { context: "Student", text: "Studying hard 👩‍🎓" },
      { context: "Education", text: "PhD complete 👩‍🎓" }
    ],
    misunderstandings: ["Clear student/graduate meaning"],
    relatedEmojis: ["man-student", "graduation-cap", "school"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["student", "graduate", "education", "school", "academic"]
  },
  {
    unicode: "👨‍🏫",
    name: "Man Teacher",
    slug: "man-teacher",
    shortMeaning: "A male teacher or professor.",
    detailedMeaning: "The Man Teacher emoji shows a male at a blackboard, representing teachers, professors, and educators.\n\nUsed for education, teaching, and school discussions.",
    usageContexts: ["Teacher", "Professor", "Education", "School", "Teaching"],
    examples: [
      { context: "Teacher", text: "Best teacher 👨‍🏫" },
      { context: "Professor", text: "Professor mode 👨‍🏫" },
      { context: "Teaching", text: "Teaching today 👨‍🏫" }
    ],
    misunderstandings: ["Clear teacher meaning"],
    relatedEmojis: ["woman-teacher", "school", "books"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["teacher", "professor", "educator", "school", "teaching"]
  },
  {
    unicode: "👩‍🏫",
    name: "Woman Teacher",
    slug: "woman-teacher",
    shortMeaning: "A female teacher or professor.",
    detailedMeaning: "The Woman Teacher emoji shows a female at a blackboard, representing teachers, professors, and educators.\n\nUsed for education, teaching, and school discussions.",
    usageContexts: ["Teacher", "Professor", "Education", "School", "Teaching"],
    examples: [
      { context: "Teacher", text: "Favorite teacher 👩‍🏫" },
      { context: "Professor", text: "Lecture time 👩‍🏫" },
      { context: "Teaching", text: "Educator life 👩‍🏫" }
    ],
    misunderstandings: ["Clear teacher meaning"],
    relatedEmojis: ["man-teacher", "school", "books"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["teacher", "professor", "educator", "school", "teaching"]
  },
  {
    unicode: "👨‍🍳",
    name: "Man Cook",
    slug: "man-cook",
    shortMeaning: "A male chef or cook.",
    detailedMeaning: "The Man Cook emoji shows a male wearing a chef's hat, representing chefs, cooks, and culinary professionals.\n\nUsed for cooking, restaurants, and food-related content.",
    usageContexts: ["Chef", "Cook", "Culinary", "Restaurant", "Food"],
    examples: [
      { context: "Cooking", text: "Chef mode 👨‍🍳" },
      { context: "Restaurant", text: "Head chef 👨‍🍳" },
      { context: "Food", text: "Cooking up something 👨‍🍳" }
    ],
    misunderstandings: ["Clear chef/cook meaning"],
    relatedEmojis: ["woman-cook", "cooking", "fork-and-knife"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "culinary", "restaurant", "food"]
  },
  {
    unicode: "👩‍🍳",
    name: "Woman Cook",
    slug: "woman-cook",
    shortMeaning: "A female chef or cook.",
    detailedMeaning: "The Woman Cook emoji shows a female wearing a chef's hat, representing chefs, cooks, and culinary professionals.\n\nUsed for cooking, restaurants, and food-related content.",
    usageContexts: ["Chef", "Cook", "Culinary", "Restaurant", "Food"],
    examples: [
      { context: "Cooking", text: "Master chef 👩‍🍳" },
      { context: "Restaurant", text: "Kitchen queen 👩‍🍳" },
      { context: "Food", text: "Homemade by 👩‍🍳" }
    ],
    misunderstandings: ["Clear chef/cook meaning"],
    relatedEmojis: ["man-cook", "cooking", "fork-and-knife"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["chef", "cook", "culinary", "restaurant", "food"]
  },
  {
    unicode: "👨‍🔧",
    name: "Man Mechanic",
    slug: "man-mechanic",
    shortMeaning: "A male mechanic or technician.",
    detailedMeaning: "The Man Mechanic emoji shows a male with a wrench, representing mechanics, technicians, and repair workers.\n\nUsed for car repairs, fixing things, and mechanical work.",
    usageContexts: ["Mechanic", "Repair", "Car", "Technician", "Fix"],
    examples: [
      { context: "Car", text: "Car trouble 👨‍🔧" },
      { context: "Repair", text: "Fixing it 👨‍🔧" },
      { context: "Work", text: "Mechanic life 👨‍🔧" }
    ],
    misunderstandings: ["Clear mechanic meaning"],
    relatedEmojis: ["woman-mechanic", "wrench", "automobile"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "technician", "fix", "car"]
  },
  {
    unicode: "👩‍🔧",
    name: "Woman Mechanic",
    slug: "woman-mechanic",
    shortMeaning: "A female mechanic or technician.",
    detailedMeaning: "The Woman Mechanic emoji shows a female with a wrench, representing mechanics, technicians, and repair workers.\n\nUsed for car repairs, fixing things, and mechanical work.",
    usageContexts: ["Mechanic", "Repair", "Car", "Technician", "Fix"],
    examples: [
      { context: "Car", text: "I can fix it 👩‍🔧" },
      { context: "Repair", text: "Handy work 👩‍🔧" },
      { context: "Work", text: "Female mechanic 👩‍🔧" }
    ],
    misunderstandings: ["Clear mechanic meaning"],
    relatedEmojis: ["man-mechanic", "wrench", "automobile"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["mechanic", "repair", "technician", "fix", "car"]
  },
  {
    unicode: "👨‍🏭",
    name: "Man Factory Worker",
    slug: "man-factory-worker",
    shortMeaning: "A male factory or industrial worker.",
    detailedMeaning: "The Man Factory Worker emoji shows a male in industrial gear, representing factory workers and manufacturing.\n\nUsed for manufacturing, factory work, and industrial jobs.",
    usageContexts: ["Factory", "Manufacturing", "Industrial", "Worker", "Labor"],
    examples: [
      { context: "Factory", text: "Factory shift 👨‍🏭" },
      { context: "Work", text: "Industrial worker 👨‍🏭" },
      { context: "Labor", text: "Hard work 👨‍🏭" }
    ],
    misunderstandings: ["Clear factory worker meaning"],
    relatedEmojis: ["woman-factory-worker", "factory", "gear"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["factory", "manufacturing", "industrial", "worker", "labor"]
  },
  {
    unicode: "👩‍🏭",
    name: "Woman Factory Worker",
    slug: "woman-factory-worker",
    shortMeaning: "A female factory or industrial worker.",
    detailedMeaning: "The Woman Factory Worker emoji shows a female in industrial gear, representing factory workers and manufacturing.\n\nUsed for manufacturing, factory work, and industrial jobs.",
    usageContexts: ["Factory", "Manufacturing", "Industrial", "Worker", "Labor"],
    examples: [
      { context: "Factory", text: "On the floor 👩‍🏭" },
      { context: "Work", text: "Manufacturing 👩‍🏭" },
      { context: "Labor", text: "Women in industry 👩‍🏭" }
    ],
    misunderstandings: ["Clear factory worker meaning"],
    relatedEmojis: ["man-factory-worker", "factory", "gear"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["factory", "manufacturing", "industrial", "worker", "labor"]
  },
  {
    unicode: "👨‍💻",
    name: "Man Technologist",
    slug: "man-technologist",
    shortMeaning: "A male programmer or tech worker.",
    detailedMeaning: "The Man Technologist emoji shows a male at a computer, representing programmers, developers, and tech workers.\n\nUsed for coding, tech work, and software development.",
    usageContexts: ["Programming", "Tech", "Developer", "Coding", "Computer"],
    examples: [
      { context: "Coding", text: "Coding time 👨‍💻" },
      { context: "Tech", text: "Tech bro 👨‍💻" },
      { context: "Work", text: "Developer life 👨‍💻" }
    ],
    misunderstandings: ["Clear tech worker meaning"],
    relatedEmojis: ["woman-technologist", "laptop", "keyboard"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "tech", "coding", "computer"]
  },
  {
    unicode: "👩‍💻",
    name: "Woman Technologist",
    slug: "woman-technologist",
    shortMeaning: "A female programmer or tech worker.",
    detailedMeaning: "The Woman Technologist emoji shows a female at a computer, representing programmers, developers, and tech workers.\n\nUsed for coding, tech work, and software development.",
    usageContexts: ["Programming", "Tech", "Developer", "Coding", "Computer"],
    examples: [
      { context: "Coding", text: "Women in tech 👩‍💻" },
      { context: "Tech", text: "Debugging 👩‍💻" },
      { context: "Work", text: "Software engineer 👩‍💻" }
    ],
    misunderstandings: ["Clear tech worker meaning"],
    relatedEmojis: ["man-technologist", "laptop", "keyboard"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["programmer", "developer", "tech", "coding", "computer"]
  },
  {
    unicode: "👨‍🎨",
    name: "Man Artist",
    slug: "man-artist",
    shortMeaning: "A male artist or painter.",
    detailedMeaning: "The Man Artist emoji shows a male with a beret and palette, representing artists, painters, and creative professionals.\n\nUsed for art, creativity, and artistic work.",
    usageContexts: ["Art", "Artist", "Painter", "Creative", "Design"],
    examples: [
      { context: "Art", text: "Creating art 👨‍🎨" },
      { context: "Creative", text: "Artist at work 👨‍🎨" },
      { context: "Painting", text: "Painting time 👨‍🎨" }
    ],
    misunderstandings: ["Clear artist meaning"],
    relatedEmojis: ["woman-artist", "artist-palette", "frame-with-picture"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "creative", "art", "design"]
  },
  {
    unicode: "👩‍🎨",
    name: "Woman Artist",
    slug: "woman-artist",
    shortMeaning: "A female artist or painter.",
    detailedMeaning: "The Woman Artist emoji shows a female with a beret and palette, representing artists, painters, and creative professionals.\n\nUsed for art, creativity, and artistic work.",
    usageContexts: ["Art", "Artist", "Painter", "Creative", "Design"],
    examples: [
      { context: "Art", text: "Artist vibes 👩‍🎨" },
      { context: "Creative", text: "Creating beauty 👩‍🎨" },
      { context: "Design", text: "Female artist 👩‍🎨" }
    ],
    misunderstandings: ["Clear artist meaning"],
    relatedEmojis: ["man-artist", "artist-palette", "frame-with-picture"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["artist", "painter", "creative", "art", "design"]
  },
  {
    unicode: "👨‍🚒",
    name: "Man Firefighter",
    slug: "man-firefighter",
    shortMeaning: "A male firefighter.",
    detailedMeaning: "The Man Firefighter emoji shows a male in firefighter gear, representing firefighters and emergency responders.\n\nUsed for fire safety, emergencies, and honoring first responders.",
    usageContexts: ["Firefighter", "Emergency", "First Responder", "Fire", "Hero"],
    examples: [
      { context: "Hero", text: "Real heroes 👨‍🚒" },
      { context: "Emergency", text: "Fire department 👨‍🚒" },
      { context: "Safety", text: "Fire safety 👨‍🚒" }
    ],
    misunderstandings: ["Clear firefighter meaning"],
    relatedEmojis: ["woman-firefighter", "fire-engine", "fire"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["firefighter", "fireman", "emergency", "hero", "rescue"]
  },
  {
    unicode: "👩‍🚒",
    name: "Woman Firefighter",
    slug: "woman-firefighter",
    shortMeaning: "A female firefighter.",
    detailedMeaning: "The Woman Firefighter emoji shows a female in firefighter gear, representing firefighters and emergency responders.\n\nUsed for fire safety, emergencies, and honoring first responders.",
    usageContexts: ["Firefighter", "Emergency", "First Responder", "Fire", "Hero"],
    examples: [
      { context: "Hero", text: "Female firefighter 👩‍🚒" },
      { context: "Emergency", text: "First responder 👩‍🚒" },
      { context: "Strong", text: "Brave women 👩‍🚒" }
    ],
    misunderstandings: ["Clear firefighter meaning"],
    relatedEmojis: ["man-firefighter", "fire-engine", "fire"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["firefighter", "firewoman", "emergency", "hero", "rescue"]
  },
  {
    unicode: "👮",
    name: "Police Officer",
    slug: "police-officer",
    shortMeaning: "A police officer.",
    detailedMeaning: "The Police Officer emoji shows a person in police uniform, representing law enforcement and police.\n\nUsed for police, law enforcement, and safety discussions.",
    usageContexts: ["Police", "Law Enforcement", "Safety", "Officer", "Authority"],
    examples: [
      { context: "Police", text: "Police on duty 👮" },
      { context: "Safety", text: "Keeping us safe 👮" },
      { context: "Law", text: "Law enforcement 👮" }
    ],
    misunderstandings: ["Context-sensitive due to police discussions"],
    relatedEmojis: ["police-car", "detective", "oncoming-police-car"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["police", "officer", "cop", "law", "enforcement"]
  },
  {
    unicode: "🕵️",
    name: "Detective",
    slug: "detective",
    shortMeaning: "A detective or spy.",
    detailedMeaning: "The Detective emoji shows a person in a trench coat and hat, representing detectives, investigators, and mystery.\n\nUsed for investigation, mystery, and sleuthing content.",
    usageContexts: ["Detective", "Mystery", "Investigation", "Spy", "Secret"],
    examples: [
      { context: "Mystery", text: "Case closed 🕵️" },
      { context: "Investigation", text: "Investigating 🕵️" },
      { context: "Sneaky", text: "Detective mode 🕵️" }
    ],
    misunderstandings: ["Clear detective meaning"],
    relatedEmojis: ["magnifying-glass", "police-officer", "eye"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["detective", "spy", "mystery", "investigation", "sleuth"]
  },
  {
    unicode: "💂",
    name: "Guard",
    slug: "guard",
    shortMeaning: "A royal guard or soldier.",
    detailedMeaning: "The Guard emoji shows a person in ceremonial guard uniform (British bearskin hat), representing guards and soldiers.\n\nUsed for British guards, military, and protection content.",
    usageContexts: ["Guard", "British", "Military", "Royal", "Protection"],
    examples: [
      { context: "British", text: "London vibes 💂" },
      { context: "Guard", text: "Standing guard 💂" },
      { context: "Royal", text: "Buckingham Palace 💂" }
    ],
    misunderstandings: ["Specifically British royal guard"],
    relatedEmojis: ["police-officer", "uk-flag", "crown"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["guard", "British", "royal", "soldier", "protection"]
  },
  {
    unicode: "👷",
    name: "Construction Worker",
    slug: "construction-worker",
    shortMeaning: "A construction worker.",
    detailedMeaning: "The Construction Worker emoji shows a person in a hard hat, representing construction workers and builders.\n\nUsed for construction, building, and manual labor content.",
    usageContexts: ["Construction", "Building", "Worker", "Hard hat", "Labor"],
    examples: [
      { context: "Construction", text: "Under construction 👷" },
      { context: "Building", text: "Building something 👷" },
      { context: "Work", text: "Construction site 👷" }
    ],
    misunderstandings: ["Clear construction worker meaning"],
    relatedEmojis: ["building-construction", "hammer", "wrench"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["construction", "builder", "worker", "hard hat", "labor"]
  },
  {
    unicode: "👨‍🌾",
    name: "Man Farmer",
    slug: "man-farmer",
    shortMeaning: "A male farmer.",
    detailedMeaning: "The Man Farmer emoji shows a male with a straw hat, representing farmers and agriculture.\n\nUsed for farming, agriculture, and rural content.",
    usageContexts: ["Farming", "Agriculture", "Rural", "Farm", "Harvest"],
    examples: [
      { context: "Farm", text: "Farm life 👨‍🌾" },
      { context: "Agriculture", text: "Harvest time 👨‍🌾" },
      { context: "Rural", text: "Country living 👨‍🌾" }
    ],
    misunderstandings: ["Clear farmer meaning"],
    relatedEmojis: ["woman-farmer", "tractor", "sheaf-of-rice"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "rural", "harvest"]
  },
  {
    unicode: "👩‍🌾",
    name: "Woman Farmer",
    slug: "woman-farmer",
    shortMeaning: "A female farmer.",
    detailedMeaning: "The Woman Farmer emoji shows a female with a straw hat, representing farmers and agriculture.\n\nUsed for farming, agriculture, and rural content.",
    usageContexts: ["Farming", "Agriculture", "Rural", "Farm", "Harvest"],
    examples: [
      { context: "Farm", text: "Farm fresh 👩‍🌾" },
      { context: "Agriculture", text: "Growing food 👩‍🌾" },
      { context: "Rural", text: "Farmer's market 👩‍🌾" }
    ],
    misunderstandings: ["Clear farmer meaning"],
    relatedEmojis: ["man-farmer", "tractor", "sheaf-of-rice"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["farmer", "agriculture", "farm", "rural", "harvest"]
  },
  {
    unicode: "👨‍🎤",
    name: "Man Singer",
    slug: "man-singer",
    shortMeaning: "A male singer or rock star.",
    detailedMeaning: "The Man Singer emoji shows a male performer, representing singers, musicians, and rock stars.\n\nUsed for music, singing, and performance content.",
    usageContexts: ["Singer", "Music", "Performance", "Rock star", "Concert"],
    examples: [
      { context: "Music", text: "Rock star 👨‍🎤" },
      { context: "Singing", text: "Lead singer 👨‍🎤" },
      { context: "Concert", text: "Concert night 👨‍🎤" }
    ],
    misunderstandings: ["Clear singer/performer meaning"],
    relatedEmojis: ["woman-singer", "microphone", "guitar"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "rock star", "performer", "music"]
  },
  {
    unicode: "👩‍🎤",
    name: "Woman Singer",
    slug: "woman-singer",
    shortMeaning: "A female singer or pop star.",
    detailedMeaning: "The Woman Singer emoji shows a female performer, representing singers, musicians, and pop stars.\n\nUsed for music, singing, and performance content.",
    usageContexts: ["Singer", "Music", "Performance", "Pop star", "Concert"],
    examples: [
      { context: "Music", text: "Pop star 👩‍🎤" },
      { context: "Singing", text: "Diva vibes 👩‍🎤" },
      { context: "Concert", text: "On stage 👩‍🎤" }
    ],
    misunderstandings: ["Clear singer/performer meaning"],
    relatedEmojis: ["man-singer", "microphone", "musical-notes"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["singer", "musician", "pop star", "performer", "music"]
  },
  {
    unicode: "👨‍✈️",
    name: "Man Pilot",
    slug: "man-pilot",
    shortMeaning: "A male pilot.",
    detailedMeaning: "The Man Pilot emoji shows a male in pilot uniform, representing pilots and aviation professionals.\n\nUsed for flying, aviation, and travel content.",
    usageContexts: ["Pilot", "Aviation", "Flying", "Airplane", "Travel"],
    examples: [
      { context: "Flying", text: "Ready for takeoff 👨‍✈️" },
      { context: "Aviation", text: "Captain speaking 👨‍✈️" },
      { context: "Travel", text: "Pilot life 👨‍✈️" }
    ],
    misunderstandings: ["Clear pilot meaning"],
    relatedEmojis: ["woman-pilot", "airplane", "small-airplane"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["pilot", "captain", "aviation", "flying", "airplane"]
  },
  {
    unicode: "👩‍✈️",
    name: "Woman Pilot",
    slug: "woman-pilot",
    shortMeaning: "A female pilot.",
    detailedMeaning: "The Woman Pilot emoji shows a female in pilot uniform, representing pilots and aviation professionals.\n\nUsed for flying, aviation, and travel content.",
    usageContexts: ["Pilot", "Aviation", "Flying", "Airplane", "Travel"],
    examples: [
      { context: "Flying", text: "Female pilot 👩‍✈️" },
      { context: "Aviation", text: "Captain in command 👩‍✈️" },
      { context: "Career", text: "Women in aviation 👩‍✈️" }
    ],
    misunderstandings: ["Clear pilot meaning"],
    relatedEmojis: ["man-pilot", "airplane", "small-airplane"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["pilot", "captain", "aviation", "flying", "airplane"]
  },
  {
    unicode: "👨‍🚀",
    name: "Man Astronaut",
    slug: "man-astronaut",
    shortMeaning: "A male astronaut.",
    detailedMeaning: "The Man Astronaut emoji shows a male in a spacesuit, representing astronauts and space exploration.\n\nUsed for space, NASA, and exploration content.",
    usageContexts: ["Astronaut", "Space", "NASA", "Exploration", "Science"],
    examples: [
      { context: "Space", text: "To the moon 👨‍🚀" },
      { context: "NASA", text: "Houston 👨‍🚀" },
      { context: "Dream", text: "Dream big 👨‍🚀" }
    ],
    misunderstandings: ["Clear astronaut meaning"],
    relatedEmojis: ["woman-astronaut", "rocket", "crescent-moon"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["astronaut", "space", "NASA", "rocket", "exploration"]
  },
  {
    unicode: "👩‍🚀",
    name: "Woman Astronaut",
    slug: "woman-astronaut",
    shortMeaning: "A female astronaut.",
    detailedMeaning: "The Woman Astronaut emoji shows a female in a spacesuit, representing astronauts and space exploration.\n\nUsed for space, NASA, and exploration content.",
    usageContexts: ["Astronaut", "Space", "NASA", "Exploration", "Science"],
    examples: [
      { context: "Space", text: "Women in space 👩‍🚀" },
      { context: "NASA", text: "NASA astronaut 👩‍🚀" },
      { context: "Dream", text: "Reach for the stars 👩‍🚀" }
    ],
    misunderstandings: ["Clear astronaut meaning"],
    relatedEmojis: ["man-astronaut", "rocket", "crescent-moon"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["astronaut", "space", "NASA", "rocket", "exploration"]
  },
  {
    unicode: "👨‍⚖️",
    name: "Man Judge",
    slug: "man-judge",
    shortMeaning: "A male judge.",
    detailedMeaning: "The Man Judge emoji shows a male in judge's robes, representing judges and the legal system.\n\nUsed for legal discussions, courts, and justice content.",
    usageContexts: ["Judge", "Legal", "Court", "Justice", "Law"],
    examples: [
      { context: "Legal", text: "Court is in session 👨‍⚖️" },
      { context: "Justice", text: "Justice served 👨‍⚖️" },
      { context: "Judge", text: "The judge 👨‍⚖️" }
    ],
    misunderstandings: ["Clear judge meaning"],
    relatedEmojis: ["woman-judge", "balance-scale", "classical-building"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["judge", "legal", "court", "justice", "law"]
  },
  {
    unicode: "👩‍⚖️",
    name: "Woman Judge",
    slug: "woman-judge",
    shortMeaning: "A female judge.",
    detailedMeaning: "The Woman Judge emoji shows a female in judge's robes, representing judges and the legal system.\n\nUsed for legal discussions, courts, and justice content.",
    usageContexts: ["Judge", "Legal", "Court", "Justice", "Law"],
    examples: [
      { context: "Legal", text: "Order in the court 👩‍⚖️" },
      { context: "Justice", text: "Female judge 👩‍⚖️" },
      { context: "Law", text: "Legal eagle 👩‍⚖️" }
    ],
    misunderstandings: ["Clear judge meaning"],
    relatedEmojis: ["man-judge", "balance-scale", "classical-building"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["judge", "legal", "court", "justice", "law"]
  },
  {
    unicode: "👨‍🔬",
    name: "Man Scientist",
    slug: "man-scientist",
    shortMeaning: "A male scientist.",
    detailedMeaning: "The Man Scientist emoji shows a male in a lab coat, representing scientists and researchers.\n\nUsed for science, research, and laboratory content.",
    usageContexts: ["Scientist", "Science", "Research", "Lab", "Discovery"],
    examples: [
      { context: "Science", text: "Science time 👨‍🔬" },
      { context: "Research", text: "In the lab 👨‍🔬" },
      { context: "Discovery", text: "Eureka 👨‍🔬" }
    ],
    misunderstandings: ["Clear scientist meaning"],
    relatedEmojis: ["woman-scientist", "microscope", "test-tube"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["scientist", "science", "research", "lab", "discovery"]
  },
  {
    unicode: "👩‍🔬",
    name: "Woman Scientist",
    slug: "woman-scientist",
    shortMeaning: "A female scientist.",
    detailedMeaning: "The Woman Scientist emoji shows a female in a lab coat, representing scientists and researchers.\n\nUsed for science, research, and laboratory content.",
    usageContexts: ["Scientist", "Science", "Research", "Lab", "Discovery"],
    examples: [
      { context: "Science", text: "Women in STEM 👩‍🔬" },
      { context: "Research", text: "Researcher life 👩‍🔬" },
      { context: "Lab", text: "Lab work 👩‍🔬" }
    ],
    misunderstandings: ["Clear scientist meaning"],
    relatedEmojis: ["man-scientist", "microscope", "test-tube"],
    categorySlug: "people-and-body",
    subgroup: "person-role",
    keywords: ["scientist", "science", "research", "lab", "STEM"]
  },
  // MORE GESTURES
  {
    unicode: "🤝",
    name: "Handshake",
    slug: "handshake",
    shortMeaning: "Two hands shaking - deal or agreement.",
    detailedMeaning: "The Handshake emoji shows two hands clasped together, representing agreement, deals, partnerships, and greetings.\n\nUsed for business deals, agreements, and showing partnership.",
    usageContexts: ["Deal", "Agreement", "Partnership", "Greeting", "Business"],
    examples: [
      { context: "Deal", text: "Deal 🤝" },
      { context: "Agreement", text: "We're in agreement 🤝" },
      { context: "Partnership", text: "Partners 🤝" }
    ],
    misunderstandings: ["Clear handshake meaning"],
    relatedEmojis: ["waving-hand", "thumbs-up", "check-mark"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["handshake", "deal", "agreement", "partnership", "greeting"]
  },
  {
    unicode: "🙏",
    name: "Folded Hands",
    slug: "folded-hands",
    shortMeaning: "Hands pressed together - prayer, thanks, or please.",
    detailedMeaning: "The Folded Hands emoji shows two hands pressed together, representing prayer, gratitude, hope, or pleading.\n\nUsed for prayer, saying thanks, asking please, or expressing hope.",
    usageContexts: ["Prayer", "Thanks", "Please", "Hope", "Gratitude"],
    examples: [
      { context: "Thanks", text: "Thank you so much 🙏" },
      { context: "Please", text: "Please help 🙏" },
      { context: "Hope", text: "Praying for you 🙏" }
    ],
    misunderstandings: ["Not a high-five - it's prayer/thanks"],
    relatedEmojis: ["pray", "thankful", "hope"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["prayer", "thanks", "please", "hope", "gratitude"]
  },
  {
    unicode: "🤲",
    name: "Palms Up Together",
    slug: "palms-up-together",
    shortMeaning: "Open palms facing up.",
    detailedMeaning: "The Palms Up Together emoji shows two open palms facing upward, representing offering, receiving, or the Islamic dua prayer gesture.\n\nUsed for offering, receiving, prayer, or presenting something.",
    usageContexts: ["Offering", "Receiving", "Prayer", "Open", "Dua"],
    examples: [
      { context: "Offering", text: "Here you go 🤲" },
      { context: "Prayer", text: "Dua time 🤲" },
      { context: "Open", text: "Open hands 🤲" }
    ],
    misunderstandings: ["Islamic prayer gesture"],
    relatedEmojis: ["folded-hands", "raising-hands", "open-hands"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["palms", "offering", "receiving", "prayer", "dua"]
  },
  {
    unicode: "👐",
    name: "Open Hands",
    slug: "open-hands",
    shortMeaning: "Open hands showing palms.",
    detailedMeaning: "The Open Hands emoji shows two open hands with palms forward, representing openness, hugs, or jazz hands.\n\nUsed for hugs, openness, jazz hands, and friendly gestures.",
    usageContexts: ["Hug", "Open", "Jazz hands", "Friendly", "Welcoming"],
    examples: [
      { context: "Hug", text: "Virtual hug 👐" },
      { context: "Jazz", text: "Jazz hands 👐" },
      { context: "Welcome", text: "Welcome 👐" }
    ],
    misunderstandings: ["Clear open/welcoming meaning"],
    relatedEmojis: ["raising-hands", "hugging-face", "palms-up-together"],
    categorySlug: "people-and-body",
    subgroup: "hands",
    keywords: ["open", "hands", "hug", "jazz hands", "welcome"]
  },
  {
    unicode: "🤌",
    name: "Pinched Fingers",
    slug: "pinched-fingers",
    shortMeaning: "Italian hand gesture - perfection or emphasis.",
    detailedMeaning: "The Pinched Fingers emoji shows the Italian hand gesture with fingertips pinched together, representing Italian culture, perfection, or 'what do you want?'\n\nUsed for Italian references, chef's kiss, or expressing perfection.",
    usageContexts: ["Italian", "Perfection", "Chef's kiss", "Emphasis", "What"],
    examples: [
      { context: "Italian", text: "Bellissimo 🤌" },
      { context: "Perfection", text: "Chef's kiss 🤌" },
      { context: "Emphasis", text: "What do you mean 🤌" }
    ],
    misunderstandings: ["Specifically Italian gesture"],
    relatedEmojis: ["ok-hand", "italian-flag", "pizza"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["Italian", "pinched", "chef", "perfection", "gesture"]
  },
  {
    unicode: "🤏",
    name: "Pinching Hand",
    slug: "pinching-hand",
    shortMeaning: "Thumb and finger close together - small or little.",
    detailedMeaning: "The Pinching Hand emoji shows a thumb and index finger close together, representing something small, a tiny amount, or 'just a little.'\n\nUsed for small amounts, tiny things, or showing something is little.",
    usageContexts: ["Small", "Little", "Tiny", "Bit", "Pinch"],
    examples: [
      { context: "Small", text: "Just a little 🤏" },
      { context: "Tiny", text: "This much 🤏" },
      { context: "Bit", text: "A pinch 🤏" }
    ],
    misunderstandings: ["Sometimes used mockingly for 'small'"],
    relatedEmojis: ["pinched-fingers", "ok-hand", "ant"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["small", "pinch", "little", "tiny", "bit"]
  },
  {
    unicode: "🖐️",
    name: "Hand with Fingers Splayed",
    slug: "hand-with-fingers-splayed",
    shortMeaning: "Open hand with fingers spread - high five or stop.",
    detailedMeaning: "The Hand with Fingers Splayed emoji shows an open hand with all fingers spread apart, representing high fives, stop, or the number five.\n\nUsed for high fives, stop gestures, or counting.",
    usageContexts: ["High five", "Stop", "Five", "Hand", "Gesture"],
    examples: [
      { context: "High five", text: "High five 🖐️" },
      { context: "Stop", text: "Wait 🖐️" },
      { context: "Five", text: "Give me five 🖐️" }
    ],
    misunderstandings: ["Clear hand gesture"],
    relatedEmojis: ["waving-hand", "raised-hand", "victory-hand"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["hand", "five", "high five", "stop", "spread"]
  },
  {
    unicode: "🤙",
    name: "Call Me Hand",
    slug: "call-me-hand",
    shortMeaning: "Shaka sign - call me or hang loose.",
    detailedMeaning: "The Call Me Hand emoji shows the shaka/hang loose sign with thumb and pinky extended, representing surfing culture, 'call me,' or laid-back vibes.\n\nUsed for Hawaii/surfing content, 'call me,' or chill vibes.",
    usageContexts: ["Call me", "Shaka", "Hawaii", "Surf", "Chill"],
    examples: [
      { context: "Call", text: "Call me 🤙" },
      { context: "Surf", text: "Hang loose 🤙" },
      { context: "Chill", text: "Chill vibes 🤙" }
    ],
    misunderstandings: ["Clear shaka/call meaning"],
    relatedEmojis: ["waving-hand", "surfboard", "sun"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-partial",
    keywords: ["call", "shaka", "hang loose", "Hawaii", "surf"]
  },
  {
    unicode: "💪",
    name: "Flexed Biceps",
    slug: "flexed-biceps",
    shortMeaning: "Flexed arm - strength and power.",
    detailedMeaning: "The Flexed Biceps emoji shows a flexed arm muscle, representing strength, power, working out, and determination.\n\nUsed for gym content, showing strength, or expressing determination.",
    usageContexts: ["Strength", "Gym", "Power", "Determination", "Strong"],
    examples: [
      { context: "Gym", text: "Gym time 💪" },
      { context: "Strong", text: "Stay strong 💪" },
      { context: "Power", text: "We got this 💪" }
    ],
    misunderstandings: ["Clear strength meaning"],
    relatedEmojis: ["person-lifting-weights", "running", "trophy"],
    categorySlug: "people-and-body",
    subgroup: "body-parts",
    keywords: ["strong", "muscle", "flex", "gym", "power"]
  },
  {
    unicode: "🦾",
    name: "Mechanical Arm",
    slug: "mechanical-arm",
    shortMeaning: "A robotic prosthetic arm.",
    detailedMeaning: "The Mechanical Arm emoji shows a robotic/prosthetic arm, representing technology, strength, disability representation, and futurism.\n\nUsed for tech content, super strength, and disability awareness.",
    usageContexts: ["Technology", "Prosthetic", "Strong", "Cyborg", "Future"],
    examples: [
      { context: "Strong", text: "Bionic strength 🦾" },
      { context: "Tech", text: "Upgraded 🦾" },
      { context: "Disability", text: "Differently abled 🦾" }
    ],
    misunderstandings: ["Represents prosthetics and technology"],
    relatedEmojis: ["flexed-biceps", "robot", "gear"],
    categorySlug: "people-and-body",
    subgroup: "body-parts",
    keywords: ["mechanical", "prosthetic", "bionic", "strong", "robot"]
  },
  {
    unicode: "🖖",
    name: "Vulcan Salute",
    slug: "vulcan-salute",
    shortMeaning: "Star Trek Vulcan salute - live long and prosper.",
    detailedMeaning: "The Vulcan Salute emoji shows the Star Trek hand gesture with fingers split in a V, representing 'live long and prosper.'\n\nUsed for Star Trek references, sci-fi content, and friendly greetings.",
    usageContexts: ["Star Trek", "Sci-fi", "Greeting", "Nerd", "Prosper"],
    examples: [
      { context: "Trek", text: "Live long and prosper 🖖" },
      { context: "Greeting", text: "Greetings 🖖" },
      { context: "Nerd", text: "Fellow Trekkie 🖖" }
    ],
    misunderstandings: ["Star Trek specific reference"],
    relatedEmojis: ["waving-hand", "alien", "rocket"],
    categorySlug: "people-and-body",
    subgroup: "hand-fingers-open",
    keywords: ["Vulcan", "Star Trek", "Spock", "prosper", "greeting"]
  },
  {
    unicode: "👆",
    name: "Backhand Index Pointing Up",
    slug: "backhand-index-pointing-up",
    shortMeaning: "Finger pointing up - look up or important.",
    detailedMeaning: "The Backhand Index Pointing Up emoji shows a hand with index finger pointing upward, representing 'look up,' importance, or referencing something above.\n\nUsed for directing attention upward or emphasizing importance.",
    usageContexts: ["Up", "Important", "Look", "Above", "Point"],
    examples: [
      { context: "Important", text: "Read that again 👆" },
      { context: "Up", text: "Look up 👆" },
      { context: "Reference", text: "This 👆" }
    ],
    misunderstandings: ["Clear pointing gesture"],
    relatedEmojis: ["index-pointing-up", "backhand-index-pointing-down", "eyes"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["up", "point", "finger", "look", "important"]
  },
  {
    unicode: "👇",
    name: "Backhand Index Pointing Down",
    slug: "backhand-index-pointing-down",
    shortMeaning: "Finger pointing down - look down or below.",
    detailedMeaning: "The Backhand Index Pointing Down emoji shows a hand with index finger pointing downward, representing 'look down,' referencing something below, or emphasis.\n\nUsed for directing attention downward or referencing content below.",
    usageContexts: ["Down", "Below", "Look", "Reference", "Point"],
    examples: [
      { context: "Below", text: "Check this out 👇" },
      { context: "Down", text: "Look down 👇" },
      { context: "Reference", text: "Link below 👇" }
    ],
    misunderstandings: ["Clear pointing gesture"],
    relatedEmojis: ["backhand-index-pointing-up", "index-pointing-down", "eyes"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["down", "point", "finger", "below", "look"]
  },
  {
    unicode: "👈",
    name: "Backhand Index Pointing Left",
    slug: "backhand-index-pointing-left",
    shortMeaning: "Finger pointing left.",
    detailedMeaning: "The Backhand Index Pointing Left emoji shows a hand with index finger pointing left, used for directing attention or referencing something to the left.\n\nUsed for pointing left or emphasizing something on the left side.",
    usageContexts: ["Left", "Point", "Direction", "Reference", "That way"],
    examples: [
      { context: "Direction", text: "Over there 👈" },
      { context: "Point", text: "This person 👈" },
      { context: "Left", text: "To the left 👈" }
    ],
    misunderstandings: ["Clear pointing gesture"],
    relatedEmojis: ["backhand-index-pointing-right", "backhand-index-pointing-up", "eyes"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["left", "point", "finger", "direction", "that"]
  },
  {
    unicode: "👉",
    name: "Backhand Index Pointing Right",
    slug: "backhand-index-pointing-right",
    shortMeaning: "Finger pointing right.",
    detailedMeaning: "The Backhand Index Pointing Right emoji shows a hand with index finger pointing right, used for directing attention or the popular 'finger guns' combo.\n\nUsed for pointing right, finger guns, or emphasizing something.",
    usageContexts: ["Right", "Point", "Finger guns", "Direction", "Reference"],
    examples: [
      { context: "Direction", text: "This way 👉" },
      { context: "Finger guns", text: "Gotcha 👉" },
      { context: "Point", text: "You 👉" }
    ],
    misunderstandings: ["Often used for finger guns with 👈"],
    relatedEmojis: ["backhand-index-pointing-left", "backhand-index-pointing-up", "eyes"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["right", "point", "finger", "direction", "you"]
  },
  {
    unicode: "🖕",
    name: "Middle Finger",
    slug: "middle-finger",
    shortMeaning: "The middle finger - offensive gesture.",
    detailedMeaning: "The Middle Finger emoji shows a hand with middle finger extended, representing the offensive 'flipping the bird' gesture.\n\nUsed to express anger, frustration, or as an insult. Use with caution.",
    usageContexts: ["Anger", "Frustration", "Insult", "Offensive", "Rude"],
    examples: [
      { context: "Angry", text: "To my haters 🖕" },
      { context: "Frustration", text: "This day 🖕" },
      { context: "Rude", text: "[use cautiously] 🖕" }
    ],
    misunderstandings: ["Offensive gesture - use carefully"],
    relatedEmojis: ["raised-fist", "angry-face", "thumbs-down"],
    categorySlug: "people-and-body",
    subgroup: "hand-single-finger",
    keywords: ["middle finger", "offensive", "rude", "angry", "flip off"]
  },
  // MORE FAMILIES
  {
    unicode: "👨‍👩‍👦‍👦",
    name: "Family: Man, Woman, Boy, Boy",
    slug: "family-man-woman-boy-boy",
    shortMeaning: "A family with father, mother, and two sons.",
    detailedMeaning: "This family emoji shows a family with parents and two boys, representing families with two sons.\n\nUsed to discuss families with multiple boys.",
    usageContexts: ["Family", "Sons", "Brothers", "Parents", "Home"],
    examples: [
      { context: "Family", text: "My boys 👨‍👩‍👦‍👦" },
      { context: "Sons", text: "Two sons 👨‍👩‍👦‍👦" },
      { context: "Home", text: "Full house 👨‍👩‍👦‍👦" }
    ],
    misunderstandings: ["Clear family meaning"],
    relatedEmojis: ["family-man-woman-girl-girl", "family-man-woman-boy", "boy"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "sons", "boys", "brothers", "parents"]
  },
  {
    unicode: "👨‍👩‍👧‍👧",
    name: "Family: Man, Woman, Girl, Girl",
    slug: "family-man-woman-girl-girl",
    shortMeaning: "A family with father, mother, and two daughters.",
    detailedMeaning: "This family emoji shows a family with parents and two girls, representing families with two daughters.\n\nUsed to discuss families with multiple girls.",
    usageContexts: ["Family", "Daughters", "Sisters", "Parents", "Home"],
    examples: [
      { context: "Family", text: "My girls 👨‍👩‍👧‍👧" },
      { context: "Daughters", text: "Two daughters 👨‍👩‍👧‍👧" },
      { context: "Home", text: "Girl dad 👨‍👩‍👧‍👧" }
    ],
    misunderstandings: ["Clear family meaning"],
    relatedEmojis: ["family-man-woman-boy-boy", "family-man-woman-girl", "girl"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "daughters", "girls", "sisters", "parents"]
  },
  {
    unicode: "👩‍👩‍👦",
    name: "Family: Woman, Woman, Boy",
    slug: "family-woman-woman-boy",
    shortMeaning: "A family with two mothers and son.",
    detailedMeaning: "This family emoji shows two women and a boy, representing same-sex parents with a son. It promotes inclusive family representation.\n\nUsed to represent diverse family structures and LGBTQ+ families.",
    usageContexts: ["Family", "LGBTQ+", "Mothers", "Son", "Inclusive"],
    examples: [
      { context: "Family", text: "Our family 👩‍👩‍👦" },
      { context: "Pride", text: "Two moms 👩‍👩‍👦" },
      { context: "Love", text: "Family love 👩‍👩‍👦" }
    ],
    misunderstandings: ["Represents LGBTQ+ families"],
    relatedEmojis: ["family-man-man-boy", "rainbow-flag", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "lgbtq", "mothers", "son", "inclusive"]
  },
  {
    unicode: "👨‍👨‍👧",
    name: "Family: Man, Man, Girl",
    slug: "family-man-man-girl",
    shortMeaning: "A family with two fathers and daughter.",
    detailedMeaning: "This family emoji shows two men and a girl, representing same-sex parents with a daughter. It promotes inclusive family representation.\n\nUsed to represent diverse family structures and LGBTQ+ families.",
    usageContexts: ["Family", "LGBTQ+", "Fathers", "Daughter", "Inclusive"],
    examples: [
      { context: "Family", text: "Our girl 👨‍👨‍👧" },
      { context: "Pride", text: "Two dads 👨‍👨‍👧" },
      { context: "Love", text: "Daddy's girl 👨‍👨‍👧" }
    ],
    misunderstandings: ["Represents LGBTQ+ families"],
    relatedEmojis: ["family-woman-woman-girl", "rainbow-flag", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["family", "lgbtq", "fathers", "daughter", "inclusive"]
  },
  {
    unicode: "👴",
    name: "Old Man",
    slug: "old-man",
    shortMeaning: "An elderly man.",
    detailedMeaning: "The Old Man emoji shows an elderly male face with gray hair, representing grandfathers, elderly men, and wisdom.\n\nUsed when discussing grandfathers, aging, or elderly men.",
    usageContexts: ["Grandfather", "Elderly", "Wisdom", "Old", "Senior"],
    examples: [
      { context: "Grandpa", text: "Love you grandpa 👴" },
      { context: "Elderly", text: "Getting older 👴" },
      { context: "Wisdom", text: "Wise man 👴" }
    ],
    misunderstandings: ["Clear elderly man meaning"],
    relatedEmojis: ["old-woman", "older-person", "family"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["old", "elderly", "grandfather", "grandpa", "senior"]
  },
  {
    unicode: "👵",
    name: "Old Woman",
    slug: "old-woman",
    shortMeaning: "An elderly woman.",
    detailedMeaning: "The Old Woman emoji shows an elderly female face with gray hair, representing grandmothers, elderly women, and wisdom.\n\nUsed when discussing grandmothers, aging, or elderly women.",
    usageContexts: ["Grandmother", "Elderly", "Wisdom", "Old", "Senior"],
    examples: [
      { context: "Grandma", text: "Love you grandma 👵" },
      { context: "Elderly", text: "Like grandma used to 👵" },
      { context: "Wisdom", text: "Wise woman 👵" }
    ],
    misunderstandings: ["Clear elderly woman meaning"],
    relatedEmojis: ["old-man", "older-person", "family"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["old", "elderly", "grandmother", "grandma", "senior"]
  },
  {
    unicode: "🧒",
    name: "Child",
    slug: "child",
    shortMeaning: "A gender-neutral child.",
    detailedMeaning: "The Child emoji shows a young person's face, representing children in a gender-neutral way.\n\nUsed when discussing children without specifying gender.",
    usageContexts: ["Child", "Kid", "Young", "Gender-neutral", "Youth"],
    examples: [
      { context: "Child", text: "The kids 🧒" },
      { context: "Young", text: "When I was young 🧒" },
      { context: "Youth", text: "Youth today 🧒" }
    ],
    misunderstandings: ["Gender-neutral child representation"],
    relatedEmojis: ["boy", "girl", "baby"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["child", "kid", "young", "neutral", "youth"]
  },
  {
    unicode: "🧑",
    name: "Person",
    slug: "person",
    shortMeaning: "A gender-neutral adult person.",
    detailedMeaning: "The Person emoji shows an adult face in a gender-neutral presentation, representing any adult without specifying gender.\n\nUsed when referring to people without specifying gender.",
    usageContexts: ["Person", "Adult", "Gender-neutral", "Individual", "Human"],
    examples: [
      { context: "Person", text: "That person 🧑" },
      { context: "Adult", text: "Adults only 🧑" },
      { context: "Neutral", text: "Anyone 🧑" }
    ],
    misunderstandings: ["Gender-neutral person representation"],
    relatedEmojis: ["man", "woman", "child"],
    categorySlug: "people-and-body",
    subgroup: "person",
    keywords: ["person", "adult", "neutral", "individual", "human"]
  },
  {
    unicode: "💑",
    name: "Couple with Heart",
    slug: "couple-with-heart",
    shortMeaning: "A couple in love.",
    detailedMeaning: "The Couple with Heart emoji shows two people with a heart between them, representing romantic love and relationships.\n\nUsed for couples, relationships, and romantic content.",
    usageContexts: ["Couple", "Love", "Relationship", "Romance", "Together"],
    examples: [
      { context: "Love", text: "In love 💑" },
      { context: "Relationship", text: "Couple goals 💑" },
      { context: "Romance", text: "My love 💑" }
    ],
    misunderstandings: ["Clear romantic couple meaning"],
    relatedEmojis: ["kiss", "heart", "two-hearts"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["couple", "love", "romance", "relationship", "heart"]
  },
  {
    unicode: "💏",
    name: "Kiss",
    slug: "kiss",
    shortMeaning: "Two people kissing.",
    detailedMeaning: "The Kiss emoji shows two people kissing with a heart, representing romantic kisses and love.\n\nUsed for kisses, romance, and intimate moments.",
    usageContexts: ["Kiss", "Romance", "Love", "Couple", "Intimate"],
    examples: [
      { context: "Kiss", text: "Kisses 💏" },
      { context: "Romance", text: "Romantic moment 💏" },
      { context: "Love", text: "Love you 💏" }
    ],
    misunderstandings: ["Clear romantic kiss meaning"],
    relatedEmojis: ["couple-with-heart", "kiss-mark", "heart"],
    categorySlug: "people-and-body",
    subgroup: "family",
    keywords: ["kiss", "romance", "love", "couple", "intimate"]
  },
  // ANIMALS & NATURE
  {
    unicode: "🐶",
    name: "Dog Face",
    slug: "dog-face",
    shortMeaning: "A cute dog face representing man's best friend.",
    detailedMeaning: "The Dog Face emoji shows an adorable cartoon dog, typically a golden/brown dog with floppy ears. It represents dogs in general, puppies, cuteness, and loyalty.\n\nUsed when talking about dogs, expressing 'puppy dog eyes,' or conveying loyalty and friendship. It's a universally loved emoji representing our canine companions.",
    usageContexts: ["Dogs/puppies", "Cuteness", "Loyalty", "Pets", "Adorable things"],
    examples: [
      { context: "Pet", text: "Miss my 🐶" },
      { context: "Cute", text: "You're so 🐶" },
      { context: "Dogs", text: "Going to the dog park 🐶" }
    ],
    misunderstandings: ["Clear meaning - everyone loves dogs"],
    relatedEmojis: ["dog", "guide-dog", "paw-prints"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["dog", "puppy", "pet", "cute", "loyal"]
  },
  {
    unicode: "🐱",
    name: "Cat Face",
    slug: "cat-face",
    shortMeaning: "A cute cat face for feline lovers everywhere.",
    detailedMeaning: "The Cat Face emoji shows an adorable cartoon cat with whiskers and pointed ears. It represents cats, kittens, and the mysterious, independent nature of felines.\n\nUsed when talking about cats, expressing cattiness, or showing love for our feline friends. Cats are one of the most popular pets worldwide, making this emoji well-loved.",
    usageContexts: ["Cats/kittens", "Cat lovers", "Pets", "Cattiness", "Cute animals"],
    examples: [
      { context: "Cat", text: "My 🐱 is judging me" },
      { context: "Love", text: "Cat person forever 🐱" },
      { context: "Cute", text: "Found a stray kitten 🐱" }
    ],
    misunderstandings: ["Clear meaning - cat lovers unite"],
    relatedEmojis: ["cat", "cat-with-tears-of-joy", "pouting-cat"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cat", "kitten", "pet", "feline", "meow"]
  },
  {
    unicode: "🦊",
    name: "Fox",
    slug: "fox",
    shortMeaning: "A clever fox representing cunning and beauty.",
    detailedMeaning: "The Fox emoji shows a cute fox face with pointed ears and distinctive orange coloring. Foxes are associated with cleverness, cunning, and natural beauty.\n\nUsed in contexts about foxes, expressing cleverness, or appreciating nature. Also popular because foxes are considered adorable wild animals.",
    usageContexts: ["Foxes", "Cleverness", "Nature", "Wildlife", "Cute animals"],
    examples: [
      { context: "Clever", text: "Sly as a 🦊" },
      { context: "Cute", text: "Saw a 🦊 in the yard" },
      { context: "Wildlife", text: "Nature walk spotted 🦊" }
    ],
    misunderstandings: ["Sometimes used for 'foxy' meaning attractive"],
    relatedEmojis: ["dog-face", "wolf", "raccoon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["fox", "clever", "sly", "cunning", "cute"]
  },
  {
    unicode: "🦁",
    name: "Lion",
    slug: "lion",
    shortMeaning: "The king of the jungle - strength, courage, and royalty.",
    detailedMeaning: "The Lion emoji shows a majestic lion face with its iconic mane. Lions symbolize strength, courage, leadership, and royalty - they're the 'king of the jungle.'\n\nUsed to represent bravery, leadership, the Leo zodiac sign, or appreciation for these magnificent big cats. Also used for sports teams with lion mascots.",
    usageContexts: ["Strength", "Courage", "Leadership", "Leo zodiac", "Wildlife"],
    examples: [
      { context: "Brave", text: "Face your fears like a 🦁" },
      { context: "Zodiac", text: "Leo season 🦁" },
      { context: "Strong", text: "King of the office 🦁" }
    ],
    misunderstandings: ["Clear meaning - universally recognized"],
    relatedEmojis: ["tiger", "leopard", "crown"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["lion", "king", "brave", "courage", "Leo"]
  },
  {
    unicode: "🐻",
    name: "Bear",
    slug: "bear",
    shortMeaning: "A cuddly bear face - strength wrapped in cuteness.",
    detailedMeaning: "The Bear emoji shows a brown bear face that appears friendly and cuddly. Bears represent strength, nature, and the cute/fierce duality of these powerful yet adorable animals.\n\nUsed for talking about bears, expressing 'bear hugs,' or anything cozy and strong. Also used affectionately for loved ones (calling someone a 'bear').",
    usageContexts: ["Bears", "Bear hugs", "Strength", "Cuddly", "Nature"],
    examples: [
      { context: "Hugs", text: "Sending 🐻 hugs" },
      { context: "Cute", text: "You're such a teddy 🐻" },
      { context: "Nature", text: "Saw bears at the park 🐻" }
    ],
    misunderstandings: ["LGBTQ+ community uses 'bear' with specific meaning"],
    relatedEmojis: ["teddy-bear", "polar-bear", "panda"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["bear", "teddy", "hug", "cuddly", "strong"]
  },
  {
    unicode: "🐼",
    name: "Panda",
    slug: "panda",
    shortMeaning: "An adorable panda - cuteness and conservation symbol.",
    detailedMeaning: "The Panda emoji shows the iconic black and white giant panda face. Pandas are universally beloved for their cuteness and are important conservation symbols.\n\nUsed to express cuteness, love for pandas, discussions about conservation, or anything black and white. Pandas have massive cultural significance, especially in Chinese culture.",
    usageContexts: ["Pandas", "Cuteness", "Conservation", "China", "Adorable things"],
    examples: [
      { context: "Cute", text: "Pandas are the cutest 🐼" },
      { context: "Conservation", text: "Protect wildlife 🐼" },
      { context: "Mood", text: "Lazy panda day 🐼" }
    ],
    misunderstandings: ["Clear meaning - universally loved"],
    relatedEmojis: ["bear", "koala", "bamboo"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["panda", "cute", "China", "bamboo", "conservation"]
  },
  {
    unicode: "🐨",
    name: "Koala",
    slug: "koala",
    shortMeaning: "A sleepy koala - Australia's cuddly marsupial.",
    detailedMeaning: "The Koala emoji shows the adorable face of Australia's iconic marsupial. Koalas are known for sleeping up to 22 hours a day and their cute, fluffy appearance.\n\nUsed to represent Australia, cuteness, sleepiness, or love for these gentle creatures. Gained significance during Australian bushfire awareness campaigns.",
    usageContexts: ["Koalas", "Australia", "Sleepiness", "Cuteness", "Wildlife"],
    examples: [
      { context: "Australia", text: "G'day mate 🐨" },
      { context: "Sleepy", text: "Koala mode today 🐨" },
      { context: "Cute", text: "So cuddly 🐨" }
    ],
    misunderstandings: ["Clear meaning - koalas are beloved"],
    relatedEmojis: ["kangaroo", "sloth", "australia"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["koala", "Australia", "cute", "sleepy", "eucalyptus"]
  },
  {
    unicode: "🦋",
    name: "Butterfly",
    slug: "butterfly",
    shortMeaning: "A beautiful butterfly symbolizing transformation and beauty.",
    detailedMeaning: "The Butterfly emoji shows a colorful butterfly with delicate wings. Butterflies symbolize transformation, beauty, freedom, and the fleeting nature of life.\n\nUsed for spring/summer themes, expressing beauty, discussing transformation or change, or that 'butterflies in stomach' feeling of nervousness/excitement.",
    usageContexts: ["Transformation", "Beauty", "Nature", "Spring", "Nervous excitement"],
    examples: [
      { context: "Beauty", text: "Feeling beautiful today 🦋" },
      { context: "Change", text: "New chapter 🦋" },
      { context: "Spring", text: "Spring is here 🦋" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["caterpillar", "flower", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["butterfly", "beautiful", "transform", "spring", "nature"]
  },
  {
    unicode: "🌸",
    name: "Cherry Blossom",
    slug: "cherry-blossom",
    shortMeaning: "Delicate pink cherry blossoms - beauty and spring in Japan.",
    detailedMeaning: "The Cherry Blossom emoji shows the beautiful pink flowers of the sakura tree, deeply significant in Japanese culture. They represent spring, beauty, and the transient nature of life.\n\nUsed for spring themes, Japanese culture, beauty, and the philosophical concept of appreciating fleeting moments. Popular in aesthetic and kawaii contexts.",
    usageContexts: ["Spring", "Japan", "Beauty", "Aesthetics", "Fleeting moments"],
    examples: [
      { context: "Japan", text: "Hanami season 🌸" },
      { context: "Beauty", text: "Life is beautiful 🌸" },
      { context: "Spring", text: "Cherry blossoms are blooming 🌸" }
    ],
    misunderstandings: ["Clear positive meaning - widely loved"],
    relatedEmojis: ["blossom", "hibiscus", "sakura"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["cherry", "blossom", "sakura", "Japan", "spring"]
  },
  {
    unicode: "🌹",
    name: "Rose",
    slug: "rose",
    shortMeaning: "A red rose - the ultimate symbol of love and romance.",
    detailedMeaning: "The Rose emoji shows a classic red rose, the universal symbol of romantic love, passion, and beauty. It's deeply associated with Valentine's Day and romantic gestures.\n\nUsed for romantic expressions, Valentine's Day, beauty, and sometimes in condolence contexts. Red roses have been symbols of love across cultures for centuries.",
    usageContexts: ["Romance", "Love", "Valentine's Day", "Beauty", "Passion"],
    examples: [
      { context: "Love", text: "For you, my love 🌹" },
      { context: "Romance", text: "Date night 🌹" },
      { context: "Valentine's", text: "Happy Valentine's Day 🌹" }
    ],
    misunderstandings: ["Strong romantic connotation - use appropriately"],
    relatedEmojis: ["bouquet", "red-heart", "hibiscus"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["rose", "love", "romance", "flower", "Valentine"]
  },
  {
    unicode: "🌻",
    name: "Sunflower",
    slug: "sunflower",
    shortMeaning: "A bright sunflower radiating happiness and positivity.",
    detailedMeaning: "The Sunflower emoji shows the cheerful yellow flower known for turning toward the sun. Sunflowers symbolize happiness, positivity, loyalty, and adoration.\n\nUsed for expressing happiness, summer vibes, positivity, and loyalty. Sunflowers are associated with following the light and maintaining optimism.",
    usageContexts: ["Happiness", "Summer", "Positivity", "Sunshine", "Cheerfulness"],
    examples: [
      { context: "Happy", text: "Good vibes only 🌻" },
      { context: "Summer", text: "Sunflower fields 🌻" },
      { context: "Positive", text: "Be like a sunflower 🌻" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["sun", "blossom", "hibiscus"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["sunflower", "happy", "summer", "yellow", "sunny"]
  },
  {
    unicode: "🌲",
    name: "Evergreen Tree",
    slug: "evergreen-tree",
    shortMeaning: "A pine/evergreen tree - nature, forests, and winter.",
    detailedMeaning: "The Evergreen Tree emoji shows a tall coniferous tree like a pine or spruce. These trees represent nature, forests, Christmas, and permanence (staying green year-round).\n\nUsed for outdoor activities, nature appreciation, Christmas themes, and environmental discussions. Evergreens symbolize eternal life and resilience.",
    usageContexts: ["Nature", "Forests", "Christmas", "Outdoors", "Environment"],
    examples: [
      { context: "Nature", text: "Hiking in the forest 🌲" },
      { context: "Christmas", text: "Tree shopping time 🌲" },
      { context: "Environment", text: "Plant more trees 🌲" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["christmas-tree", "deciduous-tree", "national-park"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["tree", "pine", "forest", "nature", "evergreen"]
  },
  {
    unicode: "🌙",
    name: "Crescent Moon",
    slug: "crescent-moon",
    shortMeaning: "A crescent moon for nighttime, dreams, and magic.",
    detailedMeaning: "The Crescent Moon emoji shows a golden crescent moon, symbolizing nighttime, dreams, mystery, and magic. It's associated with sleep, the night sky, and mystical themes.\n\nUsed for goodnight messages, nighttime activities, mystical/witchy aesthetics, and Islamic symbolism. The crescent moon has significance across many cultures.",
    usageContexts: ["Nighttime", "Sleep", "Dreams", "Magic", "Islam"],
    examples: [
      { context: "Goodnight", text: "Sweet dreams 🌙" },
      { context: "Night", text: "Late night vibes 🌙" },
      { context: "Magic", text: "Mystical evening 🌙" }
    ],
    misunderstandings: ["Islamic significance should be respected"],
    relatedEmojis: ["full-moon", "star", "night-with-stars"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["moon", "night", "crescent", "sleep", "dream"]
  },
  {
    unicode: "⭐",
    name: "Star",
    slug: "star",
    shortMeaning: "A classic star - excellence, magic, and aspiration.",
    detailedMeaning: "The Star emoji shows a classic five-pointed star in golden yellow. Stars represent excellence, achievement, magic, and aspirations. They're universal symbols of standing out.\n\nUsed for rating things, expressing that something is excellent, representing celebrities/fame, and adding sparkle to messages.",
    usageContexts: ["Excellence", "Ratings", "Fame", "Magic", "Achievement"],
    examples: [
      { context: "Excellent", text: "5 ⭐ review" },
      { context: "Star", text: "You're a ⭐" },
      { context: "Achieve", text: "Reach for the ⭐" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["glowing-star", "sparkles", "shooting-star"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["star", "excellent", "rating", "shine", "bright"]
  },
  {
    unicode: "☀️",
    name: "Sun",
    slug: "sun",
    shortMeaning: "The bright sun - warmth, happiness, and good weather.",
    detailedMeaning: "The Sun emoji shows a bright yellow sun with rays, representing warmth, good weather, happiness, and positive energy. It's a universal symbol of light and life.\n\nUsed for sunny weather, positive vibes, summer activities, and anything associated with brightness and warmth. The sun represents hope and positivity.",
    usageContexts: ["Weather", "Happiness", "Summer", "Warmth", "Positivity"],
    examples: [
      { context: "Weather", text: "Beautiful sunny day ☀️" },
      { context: "Happy", text: "Rise and shine ☀️" },
      { context: "Summer", text: "Beach day ☀️" }
    ],
    misunderstandings: ["Clear meaning - universally positive"],
    relatedEmojis: ["sun-with-face", "sunflower", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sun", "sunny", "bright", "warm", "summer"]
  },
  {
    unicode: "🌈",
    name: "Rainbow",
    slug: "rainbow",
    shortMeaning: "A colorful rainbow - hope, diversity, and LGBTQ+ pride.",
    detailedMeaning: "The Rainbow emoji shows the beautiful arc of colors after rain. Rainbows symbolize hope, promise, diversity, and are strongly associated with LGBTQ+ pride and community.\n\nUsed after storms (literal or metaphorical), for LGBTQ+ pride, expressing hope, and celebrating diversity. The rainbow has powerful symbolism across many contexts.",
    usageContexts: ["Hope", "LGBTQ+ pride", "Diversity", "After the storm", "Colorful"],
    examples: [
      { context: "Hope", text: "Rainbow after the rain 🌈" },
      { context: "Pride", text: "Happy Pride Month 🌈" },
      { context: "Diversity", text: "Celebrating differences 🌈" }
    ],
    misunderstandings: ["Strong LGBTQ+ association - be aware of context"],
    relatedEmojis: ["pride-flag", "sparkles", "sun"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["rainbow", "pride", "hope", "LGBTQ", "colorful"]
  },
  {
    unicode: "🐭",
    name: "Mouse Face",
    slug: "mouse-face",
    shortMeaning: "A cute mouse face.",
    detailedMeaning: "The Mouse Face emoji shows a friendly grey mouse. It represents mice, small creatures, and sometimes shyness.\n\nUsed for mouse references, being quiet/shy, or cute small things.",
    usageContexts: ["Mouse", "Small", "Cute", "Quiet", "Shy"],
    examples: [
      { context: "Small", text: "Quiet as a mouse 🐭" },
      { context: "Cute", text: "So tiny 🐭" },
      { context: "Pet", text: "My little mouse 🐭" }
    ],
    misunderstandings: ["Clear mouse meaning"],
    relatedEmojis: ["rat", "hamster", "cheese"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["mouse", "small", "cute", "quiet", "rodent"]
  },
  {
    unicode: "🐹",
    name: "Hamster",
    slug: "hamster",
    shortMeaning: "A cute hamster face with chubby cheeks.",
    detailedMeaning: "The Hamster emoji shows a hamster with adorable chubby cheeks. It represents hamsters, pet rodents, and cuteness.\n\nUsed for hamster lovers, cute pet content, or showing adorable chubby things.",
    usageContexts: ["Hamster", "Pet", "Cute", "Chubby", "Adorable"],
    examples: [
      { context: "Pet", text: "My hamster 🐹" },
      { context: "Cute", text: "Chubby cheeks 🐹" },
      { context: "Food", text: "Stuffing my face like 🐹" }
    ],
    misunderstandings: ["Clear hamster meaning"],
    relatedEmojis: ["mouse-face", "rabbit-face", "guinea-pig"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["hamster", "pet", "cute", "cheeks", "rodent"]
  },
  {
    unicode: "🐰",
    name: "Rabbit Face",
    slug: "rabbit-face",
    shortMeaning: "A cute bunny face with long ears.",
    detailedMeaning: "The Rabbit Face emoji shows an adorable bunny with long ears. It represents rabbits, bunnies, Easter, and cuteness.\n\nUsed for Easter, pet bunnies, cute content, or Playboy references.",
    usageContexts: ["Rabbit", "Easter", "Cute", "Pet", "Bunny"],
    examples: [
      { context: "Easter", text: "Easter bunny 🐰" },
      { context: "Pet", text: "My bunny 🐰" },
      { context: "Cute", text: "Bunny vibes 🐰" }
    ],
    misunderstandings: ["Can have playful/flirty connotations"],
    relatedEmojis: ["rabbit", "carrot", "easter-egg"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rabbit", "bunny", "Easter", "cute", "ears"]
  },
  {
    unicode: "🐯",
    name: "Tiger Face",
    slug: "tiger-face",
    shortMeaning: "A fierce tiger face.",
    detailedMeaning: "The Tiger Face emoji shows an orange and black striped tiger. It represents tigers, power, fierceness, and wild beauty.\n\nUsed for showing strength, fierceness, or love for big cats.",
    usageContexts: ["Tiger", "Fierce", "Strong", "Wild", "Power"],
    examples: [
      { context: "Fierce", text: "Fierce like a tiger 🐯" },
      { context: "Strong", text: "Tiger mode 🐯" },
      { context: "Wild", text: "Wild cat 🐯" }
    ],
    misunderstandings: ["Clear tiger meaning"],
    relatedEmojis: ["lion", "leopard", "cat-face"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["tiger", "fierce", "stripes", "wild", "power"]
  },
  {
    unicode: "🐮",
    name: "Cow Face",
    slug: "cow-face",
    shortMeaning: "A friendly cow face.",
    detailedMeaning: "The Cow Face emoji shows a black and white spotted cow. It represents cows, farm life, milk, and rural areas.\n\nUsed for farm references, dairy content, or countryside vibes.",
    usageContexts: ["Cow", "Farm", "Milk", "Rural", "Dairy"],
    examples: [
      { context: "Farm", text: "Farm life 🐮" },
      { context: "Milk", text: "Got milk? 🐮" },
      { context: "Cute", text: "Holy cow 🐮" }
    ],
    misunderstandings: ["Clear cow meaning"],
    relatedEmojis: ["ox", "water-buffalo", "glass-of-milk"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cow", "farm", "milk", "moo", "dairy"]
  },
  {
    unicode: "🐷",
    name: "Pig Face",
    slug: "pig-face",
    shortMeaning: "A cute pink pig face.",
    detailedMeaning: "The Pig Face emoji shows a pink pig with a snout. It represents pigs, farm animals, cuteness, or sometimes gluttony.\n\nUsed for farm references, cute content, or eating a lot.",
    usageContexts: ["Pig", "Farm", "Cute", "Eating", "Pink"],
    examples: [
      { context: "Eating", text: "Pigging out 🐷" },
      { context: "Cute", text: "Little piggy 🐷" },
      { context: "Farm", text: "Farm animals 🐷" }
    ],
    misunderstandings: ["Can be negative if calling someone a pig"],
    relatedEmojis: ["pig-nose", "boar", "bacon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["pig", "piggy", "pink", "farm", "oink"]
  },
  {
    unicode: "🐸",
    name: "Frog",
    slug: "frog",
    shortMeaning: "A green frog face - often used for Kermit memes.",
    detailedMeaning: "The Frog emoji shows a green frog face. It's heavily associated with Kermit memes like 'But that's none of my business' and Pepe.\n\nUsed for frog lovers, Kermit memes, or tea-spilling gossip.",
    usageContexts: ["Frog", "Meme", "Kermit", "Tea", "Gossip"],
    examples: [
      { context: "Meme", text: "But that's none of my business 🐸☕" },
      { context: "Cute", text: "Little froggy 🐸" },
      { context: "Gossip", text: "Spill the tea 🐸" }
    ],
    misunderstandings: ["Strong meme association"],
    relatedEmojis: ["snake", "lizard", "crocodile"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-amphibian",
    keywords: ["frog", "Kermit", "meme", "tea", "green"]
  },
  {
    unicode: "🐵",
    name: "Monkey Face",
    slug: "monkey-face",
    shortMeaning: "A cute monkey face.",
    detailedMeaning: "The Monkey Face emoji shows a brown monkey. It represents monkeys, playfulness, and mischief.\n\nUsed for playful situations, monkey business, or expressing silliness.",
    usageContexts: ["Monkey", "Playful", "Silly", "Mischief", "Fun"],
    examples: [
      { context: "Playful", text: "Monkeying around 🐵" },
      { context: "Silly", text: "Being silly 🐵" },
      { context: "Fun", text: "Monkey business 🐵" }
    ],
    misunderstandings: ["Clear monkey meaning"],
    relatedEmojis: ["see-no-evil-monkey", "hear-no-evil-monkey", "gorilla"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["monkey", "playful", "silly", "fun", "primate"]
  },
  {
    unicode: "🐔",
    name: "Chicken",
    slug: "chicken",
    shortMeaning: "A chicken - the farm bird.",
    detailedMeaning: "The Chicken emoji shows a white chicken. It represents chickens, farm birds, or calling someone a coward.\n\nUsed for farm references, food discussions, or playfully calling someone chicken.",
    usageContexts: ["Chicken", "Farm", "Coward", "Food", "Bird"],
    examples: [
      { context: "Food", text: "Fried chicken 🐔" },
      { context: "Coward", text: "Don't be a chicken 🐔" },
      { context: "Farm", text: "Farm fresh 🐔" }
    ],
    misunderstandings: ["Can imply cowardice"],
    relatedEmojis: ["rooster", "hatching-chick", "egg"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["chicken", "hen", "farm", "bird", "coward"]
  },
  {
    unicode: "🐧",
    name: "Penguin",
    slug: "penguin",
    shortMeaning: "An adorable penguin.",
    detailedMeaning: "The Penguin emoji shows a cute black and white penguin. It represents penguins, cold weather, Antarctica, and cuteness.\n\nUsed for penguin lovers, winter content, or expressing adorableness.",
    usageContexts: ["Penguin", "Cold", "Cute", "Winter", "Antarctica"],
    examples: [
      { context: "Cold", text: "Freezing like a penguin 🐧" },
      { context: "Cute", text: "Waddle waddle 🐧" },
      { context: "Winter", text: "Winter vibes 🐧" }
    ],
    misunderstandings: ["Clear penguin meaning"],
    relatedEmojis: ["snowflake", "ice", "polar-bear"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["penguin", "cold", "cute", "Antarctica", "waddle"]
  },
  {
    unicode: "🐦",
    name: "Bird",
    slug: "bird",
    shortMeaning: "A generic bird.",
    detailedMeaning: "The Bird emoji shows a blue bird. It represents birds in general, freedom, Twitter/X, and nature.\n\nUsed for bird watching, nature content, or Twitter references.",
    usageContexts: ["Bird", "Twitter", "Nature", "Freedom", "Flying"],
    examples: [
      { context: "Nature", text: "Bird watching 🐦" },
      { context: "Free", text: "Free as a bird 🐦" },
      { context: "Morning", text: "Early bird 🐦" }
    ],
    misunderstandings: ["Clear bird meaning"],
    relatedEmojis: ["dove", "eagle", "parrot"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["bird", "flying", "nature", "Twitter", "free"]
  },
  {
    unicode: "🦅",
    name: "Eagle",
    slug: "eagle",
    shortMeaning: "A majestic eagle - symbol of freedom.",
    detailedMeaning: "The Eagle emoji shows a brown eagle. It represents America, freedom, power, and patriotism.\n\nUsed for American patriotism, expressing freedom, or showing power.",
    usageContexts: ["Eagle", "America", "Freedom", "Power", "Patriotic"],
    examples: [
      { context: "America", text: "USA! 🦅" },
      { context: "Freedom", text: "Soaring free 🦅" },
      { context: "Power", text: "Eagle eye 🦅" }
    ],
    misunderstandings: ["Strong American association"],
    relatedEmojis: ["american-flag", "statue-of-liberty", "bird"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["eagle", "America", "freedom", "bald eagle", "patriotic"]
  },
  {
    unicode: "🦆",
    name: "Duck",
    slug: "duck",
    shortMeaning: "A cute duck.",
    detailedMeaning: "The Duck emoji shows a colorful mallard duck. It represents ducks, ponds, and waterfowl.\n\nUsed for duck references, pond/lake content, or the phrase 'duck it'.",
    usageContexts: ["Duck", "Pond", "Lake", "Water", "Bird"],
    examples: [
      { context: "Pond", text: "Feeding the ducks 🦆" },
      { context: "Cute", text: "Quack quack 🦆" },
      { context: "Water", text: "Duck pond 🦆" }
    ],
    misunderstandings: ["Clear duck meaning"],
    relatedEmojis: ["swan", "goose", "bird"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["duck", "quack", "pond", "mallard", "waterfowl"]
  },
  {
    unicode: "🦉",
    name: "Owl",
    slug: "owl",
    shortMeaning: "A wise owl.",
    detailedMeaning: "The Owl emoji shows a brown owl. It represents wisdom, night, knowledge, and mystery.\n\nUsed for expressing wisdom, night owl lifestyle, or Halloween.",
    usageContexts: ["Owl", "Wise", "Night", "Knowledge", "Halloween"],
    examples: [
      { context: "Wise", text: "Wise as an owl 🦉" },
      { context: "Night", text: "Night owl 🦉" },
      { context: "Smart", text: "Owl energy 🦉" }
    ],
    misunderstandings: ["Clear owl meaning"],
    relatedEmojis: ["bat", "moon", "night-with-stars"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["owl", "wise", "night", "hoot", "knowledge"]
  },
  {
    unicode: "🐝",
    name: "Honeybee",
    slug: "honeybee",
    shortMeaning: "A busy honeybee.",
    detailedMeaning: "The Honeybee emoji shows a yellow and black bee. It represents bees, hard work, honey, and being busy.\n\nUsed for being busy, Beyoncé (Beyhive), or environmental topics about bees.",
    usageContexts: ["Bee", "Busy", "Honey", "Hard Work", "Beyoncé"],
    examples: [
      { context: "Busy", text: "Busy bee 🐝" },
      { context: "Work", text: "Working hard 🐝" },
      { context: "Queen", text: "Queen Bey 🐝" }
    ],
    misunderstandings: ["Clear bee meaning"],
    relatedEmojis: ["honey-pot", "sunflower", "ladybug"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["bee", "busy", "honey", "work", "buzz"]
  },
  {
    unicode: "🐛",
    name: "Bug",
    slug: "bug",
    shortMeaning: "A green caterpillar or bug.",
    detailedMeaning: "The Bug emoji shows a green caterpillar or generic bug. It represents bugs, insects, or software bugs.\n\nUsed for insects, software bugs, or things that 'bug' you.",
    usageContexts: ["Bug", "Insect", "Software", "Caterpillar", "Nature"],
    examples: [
      { context: "Software", text: "Found a bug 🐛" },
      { context: "Annoying", text: "This bugs me 🐛" },
      { context: "Nature", text: "Little bug 🐛" }
    ],
    misunderstandings: ["Can mean software bug"],
    relatedEmojis: ["butterfly", "ant", "ladybug"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["bug", "caterpillar", "insect", "software", "creepy"]
  },
  {
    unicode: "🐌",
    name: "Snail",
    slug: "snail",
    shortMeaning: "A slow snail with its shell.",
    detailedMeaning: "The Snail emoji shows a snail with a spiral shell. It represents slowness, patience, and taking your time.\n\nUsed for expressing being slow, taking it easy, or snail mail.",
    usageContexts: ["Snail", "Slow", "Patience", "Mail", "Easy"],
    examples: [
      { context: "Slow", text: "Moving at snail pace 🐌" },
      { context: "Mail", text: "Snail mail 🐌" },
      { context: "Patience", text: "Slow and steady 🐌" }
    ],
    misunderstandings: ["Clear slow meaning"],
    relatedEmojis: ["turtle", "sloth", "mail"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["snail", "slow", "shell", "patience", "steady"]
  },
  {
    unicode: "🐢",
    name: "Turtle",
    slug: "turtle",
    shortMeaning: "A green turtle.",
    detailedMeaning: "The Turtle emoji shows a green sea turtle. It represents turtles, slowness, longevity, and ocean life.\n\nUsed for being slow, ocean content, or expressing patience and wisdom.",
    usageContexts: ["Turtle", "Slow", "Ocean", "Patience", "Longevity"],
    examples: [
      { context: "Slow", text: "Turtle speed 🐢" },
      { context: "Ocean", text: "Sea turtle 🐢" },
      { context: "Wise", text: "Slow and wise 🐢" }
    ],
    misunderstandings: ["Clear turtle meaning"],
    relatedEmojis: ["snail", "ocean", "coral"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["turtle", "slow", "shell", "ocean", "patience"]
  },
  {
    unicode: "🐍",
    name: "Snake",
    slug: "snake",
    shortMeaning: "A green snake - can mean sneaky or treacherous.",
    detailedMeaning: "The Snake emoji shows a green snake. It represents snakes, sneakiness, betrayal, or the Slytherin house.\n\nUsed for calling someone a snake (untrustworthy), Slytherin references, or actual snakes.",
    usageContexts: ["Snake", "Sneaky", "Betrayal", "Slytherin", "Reptile"],
    examples: [
      { context: "Betrayal", text: "She's such a snake 🐍" },
      { context: "Slytherin", text: "Slytherin pride 🐍" },
      { context: "Sneaky", text: "Snake behavior 🐍" }
    ],
    misunderstandings: ["Often negative meaning"],
    relatedEmojis: ["lizard", "crocodile", "dragon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["snake", "sneaky", "sly", "Slytherin", "reptile"]
  },
  {
    unicode: "🦎",
    name: "Lizard",
    slug: "lizard",
    shortMeaning: "A green lizard.",
    detailedMeaning: "The Lizard emoji shows a green lizard. It represents lizards, reptiles, and cold-blooded creatures.\n\nUsed for lizard lovers, reptile content, or desert vibes.",
    usageContexts: ["Lizard", "Reptile", "Desert", "Pet", "Cold-blooded"],
    examples: [
      { context: "Pet", text: "My lizard 🦎" },
      { context: "Desert", text: "Desert life 🦎" },
      { context: "Chill", text: "Lizard vibes 🦎" }
    ],
    misunderstandings: ["Clear lizard meaning"],
    relatedEmojis: ["snake", "crocodile", "gecko"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["lizard", "reptile", "gecko", "desert", "cold-blooded"]
  },
  {
    unicode: "🦈",
    name: "Shark",
    slug: "shark",
    shortMeaning: "A fierce shark.",
    detailedMeaning: "The Shark emoji shows a grey shark. It represents sharks, danger, the ocean, and fierceness.\n\nUsed for Shark Week, ocean content, or business sharks.",
    usageContexts: ["Shark", "Ocean", "Fierce", "Danger", "Business"],
    examples: [
      { context: "Business", text: "Shark mode 🦈" },
      { context: "Ocean", text: "Shark Week 🦈" },
      { context: "Fierce", text: "Shark mentality 🦈" }
    ],
    misunderstandings: ["Can imply aggressive business tactics"],
    relatedEmojis: ["whale", "dolphin", "ocean"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["shark", "ocean", "fierce", "danger", "teeth"]
  },
  {
    unicode: "🐳",
    name: "Spouting Whale",
    slug: "spouting-whale",
    shortMeaning: "A whale spouting water.",
    detailedMeaning: "The Spouting Whale emoji shows a blue whale with water spouting. It represents whales, the ocean, and large things.\n\nUsed for ocean content, expressing something is huge, or crypto 'whales'.",
    usageContexts: ["Whale", "Ocean", "Huge", "Crypto", "Marine"],
    examples: [
      { context: "Big", text: "Having a whale of a time 🐳" },
      { context: "Crypto", text: "Crypto whale 🐳" },
      { context: "Ocean", text: "Whale watching 🐳" }
    ],
    misunderstandings: ["Crypto whale meaning"],
    relatedEmojis: ["whale", "dolphin", "ocean"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["whale", "ocean", "spout", "big", "marine"]
  },
  {
    unicode: "🐬",
    name: "Dolphin",
    slug: "dolphin",
    shortMeaning: "A playful dolphin.",
    detailedMeaning: "The Dolphin emoji shows a grey dolphin. It represents dolphins, intelligence, playfulness, and ocean life.\n\nUsed for beach vacations, marine life, or expressing playfulness and intelligence.",
    usageContexts: ["Dolphin", "Ocean", "Playful", "Smart", "Beach"],
    examples: [
      { context: "Smart", text: "Smart as a dolphin 🐬" },
      { context: "Beach", text: "Beach day 🐬" },
      { context: "Playful", text: "Dolphin vibes 🐬" }
    ],
    misunderstandings: ["Clear dolphin meaning"],
    relatedEmojis: ["whale", "shark", "ocean"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["dolphin", "ocean", "smart", "playful", "marine"]
  },
  {
    unicode: "🐙",
    name: "Octopus",
    slug: "octopus",
    shortMeaning: "An orange octopus with tentacles.",
    detailedMeaning: "The Octopus emoji shows an orange octopus. It represents octopi, the ocean, multitasking, and cleverness.\n\nUsed for ocean content, multitasking, or expressing flexibility.",
    usageContexts: ["Octopus", "Ocean", "Multitask", "Clever", "Flexible"],
    examples: [
      { context: "Multitask", text: "Multitasking like an octopus 🐙" },
      { context: "Ocean", text: "Under the sea 🐙" },
      { context: "Hug", text: "Octopus hug 🐙" }
    ],
    misunderstandings: ["Clear octopus meaning"],
    relatedEmojis: ["squid", "jellyfish", "crab"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["octopus", "tentacles", "ocean", "smart", "marine"]
  },
  {
    unicode: "🦀",
    name: "Crab",
    slug: "crab",
    shortMeaning: "A red crab - also Cancer zodiac.",
    detailedMeaning: "The Crab emoji shows a red crab. It represents crabs, seafood, beaches, and the Cancer zodiac sign.\n\nUsed for beach content, seafood discussions, or Cancer zodiac references.",
    usageContexts: ["Crab", "Beach", "Cancer", "Seafood", "Ocean"],
    examples: [
      { context: "Beach", text: "Beach vibes 🦀" },
      { context: "Zodiac", text: "Cancer season 🦀" },
      { context: "Seafood", text: "Crab dinner 🦀" }
    ],
    misunderstandings: ["Clear crab meaning"],
    relatedEmojis: ["lobster", "shrimp", "beach"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["crab", "beach", "Cancer", "seafood", "ocean"]
  },
  {
    unicode: "🐠",
    name: "Tropical Fish",
    slug: "tropical-fish",
    shortMeaning: "A colorful tropical fish.",
    detailedMeaning: "The Tropical Fish emoji shows a colorful striped fish. It represents aquariums, tropical seas, and colorful fish.\n\nUsed for aquarium content, snorkeling/diving, or tropical vacations.",
    usageContexts: ["Fish", "Tropical", "Aquarium", "Ocean", "Colorful"],
    examples: [
      { context: "Aquarium", text: "At the aquarium 🐠" },
      { context: "Tropical", text: "Tropical vibes 🐠" },
      { context: "Diving", text: "Snorkeling 🐠" }
    ],
    misunderstandings: ["Clear fish meaning"],
    relatedEmojis: ["fish", "blowfish", "coral"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["fish", "tropical", "aquarium", "colorful", "ocean"]
  },
  {
    unicode: "🐊",
    name: "Crocodile",
    slug: "crocodile",
    shortMeaning: "A green crocodile.",
    detailedMeaning: "The Crocodile emoji shows a green crocodile. It represents crocodiles, alligators, danger, and swamps.\n\nUsed for crocodile/alligator references, Florida content, or expressing danger.",
    usageContexts: ["Crocodile", "Alligator", "Danger", "Swamp", "Florida"],
    examples: [
      { context: "Florida", text: "Florida vibes 🐊" },
      { context: "Danger", text: "Watch out 🐊" },
      { context: "Wild", text: "Crocodile hunter 🐊" }
    ],
    misunderstandings: ["Can mean alligator too"],
    relatedEmojis: ["snake", "lizard", "frog"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["crocodile", "alligator", "swamp", "danger", "reptile"]
  },
  {
    unicode: "🦓",
    name: "Zebra",
    slug: "zebra",
    shortMeaning: "A black and white zebra.",
    detailedMeaning: "The Zebra emoji shows a striped zebra. It represents zebras, Africa, uniqueness, and safari.\n\nUsed for safari content, African wildlife, or expressing uniqueness.",
    usageContexts: ["Zebra", "Africa", "Safari", "Stripes", "Unique"],
    examples: [
      { context: "Safari", text: "On safari 🦓" },
      { context: "Unique", text: "Earn your stripes 🦓" },
      { context: "Africa", text: "African wildlife 🦓" }
    ],
    misunderstandings: ["Clear zebra meaning"],
    relatedEmojis: ["giraffe", "elephant", "lion"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["zebra", "stripes", "Africa", "safari", "unique"]
  },
  {
    unicode: "🦒",
    name: "Giraffe",
    slug: "giraffe",
    shortMeaning: "A tall giraffe with spots.",
    detailedMeaning: "The Giraffe emoji shows a tall spotted giraffe. It represents giraffes, Africa, height, and safari.\n\nUsed for safari content, being tall, or African wildlife.",
    usageContexts: ["Giraffe", "Tall", "Africa", "Safari", "Spots"],
    examples: [
      { context: "Tall", text: "Feeling tall 🦒" },
      { context: "Safari", text: "Safari life 🦒" },
      { context: "Zoo", text: "At the zoo 🦒" }
    ],
    misunderstandings: ["Clear giraffe meaning"],
    relatedEmojis: ["zebra", "elephant", "lion"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["giraffe", "tall", "spots", "Africa", "safari"]
  },
  {
    unicode: "🐘",
    name: "Elephant",
    slug: "elephant",
    shortMeaning: "A grey elephant with tusks.",
    detailedMeaning: "The Elephant emoji shows a grey elephant. It represents elephants, memory, wisdom, and size. Also the Republican party symbol.\n\nUsed for elephants, good memory, or political references.",
    usageContexts: ["Elephant", "Memory", "Big", "Wise", "Republican"],
    examples: [
      { context: "Memory", text: "Elephant never forgets 🐘" },
      { context: "Big", text: "Elephant in the room 🐘" },
      { context: "Safari", text: "Safari day 🐘" }
    ],
    misunderstandings: ["Political connotation in US"],
    relatedEmojis: ["mammoth", "rhinoceros", "hippopotamus"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["elephant", "big", "memory", "wise", "tusks"]
  },
  {
    unicode: "🦛",
    name: "Hippopotamus",
    slug: "hippopotamus",
    shortMeaning: "A grey hippo.",
    detailedMeaning: "The Hippopotamus emoji shows a grey hippo. It represents hippos, Africa, rivers, and surprisingly dangerous animals.\n\nUsed for hippo content, African wildlife, or things that are unexpectedly dangerous.",
    usageContexts: ["Hippo", "Africa", "River", "Dangerous", "Wildlife"],
    examples: [
      { context: "Cute", text: "Hippo vibes 🦛" },
      { context: "Hungry", text: "Hungry hungry hippo 🦛" },
      { context: "Africa", text: "African wildlife 🦛" }
    ],
    misunderstandings: ["Clear hippo meaning"],
    relatedEmojis: ["elephant", "rhinoceros", "crocodile"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["hippo", "hippopotamus", "Africa", "river", "big"]
  },
  {
    unicode: "🦏",
    name: "Rhinoceros",
    slug: "rhinoceros",
    shortMeaning: "A grey rhino with a horn.",
    detailedMeaning: "The Rhinoceros emoji shows a grey rhino. It represents rhinos, endangered species, strength, and conservation.\n\nUsed for conservation topics, safari content, or expressing toughness.",
    usageContexts: ["Rhino", "Conservation", "Strong", "Africa", "Safari"],
    examples: [
      { context: "Strong", text: "Tough as a rhino 🦏" },
      { context: "Conservation", text: "Save the rhinos 🦏" },
      { context: "Safari", text: "Big five 🦏" }
    ],
    misunderstandings: ["Clear rhino meaning"],
    relatedEmojis: ["elephant", "hippopotamus", "buffalo"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rhino", "rhinoceros", "horn", "Africa", "endangered"]
  },
  {
    unicode: "🐪",
    name: "Camel",
    slug: "camel",
    shortMeaning: "A one-humped camel (dromedary).",
    detailedMeaning: "The Camel emoji shows a dromedary camel with one hump. It represents deserts, Middle East, Wednesday (hump day), and endurance.\n\nUsed for desert content, hump day references, or Middle Eastern themes.",
    usageContexts: ["Camel", "Desert", "Hump Day", "Middle East", "Endurance"],
    examples: [
      { context: "Wednesday", text: "Hump day 🐪" },
      { context: "Desert", text: "Desert vibes 🐪" },
      { context: "Travel", text: "Camel ride 🐪" }
    ],
    misunderstandings: ["Hump day association"],
    relatedEmojis: ["two-hump-camel", "desert", "cactus"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["camel", "desert", "hump", "Wednesday", "dromedary"]
  },
  {
    unicode: "🦙",
    name: "Llama",
    slug: "llama",
    shortMeaning: "A fluffy llama.",
    detailedMeaning: "The Llama emoji shows a white llama. It represents llamas, alpacas, South America, and drama (drama llama).\n\nUsed for llama lovers, South American content, or 'no drama llama' memes.",
    usageContexts: ["Llama", "South America", "Drama", "Fluffy", "Peru"],
    examples: [
      { context: "Drama", text: "No drama llama 🦙" },
      { context: "Peru", text: "Machu Picchu vibes 🦙" },
      { context: "Cute", text: "Fluffy llama 🦙" }
    ],
    misunderstandings: ["Drama llama meme"],
    relatedEmojis: ["alpaca", "camel", "goat"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["llama", "alpaca", "Peru", "drama", "fluffy"]
  },
  {
    unicode: "🦘",
    name: "Kangaroo",
    slug: "kangaroo",
    shortMeaning: "An Australian kangaroo.",
    detailedMeaning: "The Kangaroo emoji shows a brown kangaroo. It represents Australia, jumping, and outback life.\n\nUsed for Australian content, jumping/hopping, or boxing references.",
    usageContexts: ["Kangaroo", "Australia", "Jumping", "Outback", "Boxing"],
    examples: [
      { context: "Australia", text: "G'day mate 🦘" },
      { context: "Jump", text: "Hopping around 🦘" },
      { context: "Outback", text: "Outback life 🦘" }
    ],
    misunderstandings: ["Clear kangaroo meaning"],
    relatedEmojis: ["koala", "australia", "boomerang"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["kangaroo", "Australia", "hop", "jump", "outback"]
  },
  {
    unicode: "🦔",
    name: "Hedgehog",
    slug: "hedgehog",
    shortMeaning: "A cute spiky hedgehog.",
    detailedMeaning: "The Hedgehog emoji shows a small brown hedgehog. It represents hedgehogs, cuteness, and Sonic the Hedgehog.\n\nUsed for hedgehog lovers, Sonic references, or expressing cuteness with spikes.",
    usageContexts: ["Hedgehog", "Cute", "Sonic", "Spiky", "Pet"],
    examples: [
      { context: "Cute", text: "So cute 🦔" },
      { context: "Sonic", text: "Gotta go fast 🦔" },
      { context: "Spiky", text: "Little spiky friend 🦔" }
    ],
    misunderstandings: ["Clear hedgehog meaning"],
    relatedEmojis: ["hamster", "squirrel", "mouse"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["hedgehog", "spiky", "cute", "Sonic", "pet"]
  },
  {
    unicode: "🦇",
    name: "Bat",
    slug: "bat",
    shortMeaning: "A flying bat.",
    detailedMeaning: "The Bat emoji shows a black bat. It represents bats, Halloween, vampires, and night creatures.\n\nUsed for Halloween, spooky content, Batman references, or night owl vibes.",
    usageContexts: ["Bat", "Halloween", "Night", "Vampire", "Batman"],
    examples: [
      { context: "Halloween", text: "Spooky season 🦇" },
      { context: "Night", text: "Night creature 🦇" },
      { context: "Batman", text: "I'm Batman 🦇" }
    ],
    misunderstandings: ["Clear bat meaning"],
    relatedEmojis: ["vampire", "ghost", "jack-o-lantern"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["bat", "Halloween", "night", "vampire", "spooky"]
  },
  {
    unicode: "🦃",
    name: "Turkey",
    slug: "turkey",
    shortMeaning: "A Thanksgiving turkey.",
    detailedMeaning: "The Turkey emoji shows a brown turkey. It represents Thanksgiving, autumn, and American holidays.\n\nUsed for Thanksgiving content, autumn vibes, or calling something a 'turkey'.",
    usageContexts: ["Turkey", "Thanksgiving", "Autumn", "Holiday", "Food"],
    examples: [
      { context: "Thanksgiving", text: "Happy Thanksgiving 🦃" },
      { context: "Fall", text: "Autumn vibes 🦃" },
      { context: "Feast", text: "Turkey time 🦃" }
    ],
    misunderstandings: ["Clear Thanksgiving meaning"],
    relatedEmojis: ["fallen-leaf", "corn", "pumpkin"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["turkey", "Thanksgiving", "autumn", "bird", "feast"]
  },
  {
    unicode: "🦚",
    name: "Peacock",
    slug: "peacock",
    shortMeaning: "A beautiful peacock with colorful feathers.",
    detailedMeaning: "The Peacock emoji shows a colorful peacock. It represents beauty, pride, showing off, and elegance.\n\nUsed for showing off, expressing beauty, or peacock/NBC references.",
    usageContexts: ["Peacock", "Beautiful", "Pride", "Show Off", "Colorful"],
    examples: [
      { context: "Beauty", text: "Feeling fabulous 🦚" },
      { context: "Show Off", text: "Peacocking 🦚" },
      { context: "Pride", text: "Proud moment 🦚" }
    ],
    misunderstandings: ["Can imply showing off"],
    relatedEmojis: ["parrot", "flamingo", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["peacock", "beautiful", "feathers", "colorful", "pride"]
  },
  {
    unicode: "🦜",
    name: "Parrot",
    slug: "parrot",
    shortMeaning: "A colorful parrot.",
    detailedMeaning: "The Parrot emoji shows a colorful parrot. It represents parrots, tropical birds, pirates, and mimicking.\n\nUsed for tropical vibes, pirates, or repeating/mimicking someone.",
    usageContexts: ["Parrot", "Tropical", "Pirate", "Mimic", "Colorful"],
    examples: [
      { context: "Tropical", text: "Tropical vibes 🦜" },
      { context: "Pirate", text: "Ahoy matey 🦜" },
      { context: "Repeat", text: "Stop parroting me 🦜" }
    ],
    misunderstandings: ["Clear parrot meaning"],
    relatedEmojis: ["peacock", "flamingo", "palm-tree"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["parrot", "tropical", "colorful", "pirate", "bird"]
  },
  {
    unicode: "🦩",
    name: "Flamingo",
    slug: "flamingo",
    shortMeaning: "A pink flamingo.",
    detailedMeaning: "The Flamingo emoji shows a pink flamingo. It represents flamingos, Florida, tropical vibes, and standing out.\n\nUsed for tropical content, Florida, or being unique (standing out).",
    usageContexts: ["Flamingo", "Pink", "Florida", "Tropical", "Unique"],
    examples: [
      { context: "Florida", text: "Florida vibes 🦩" },
      { context: "Pink", text: "Pretty in pink 🦩" },
      { context: "Stand Out", text: "Be a flamingo 🦩" }
    ],
    misunderstandings: ["Clear flamingo meaning"],
    relatedEmojis: ["parrot", "peacock", "palm-tree"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["flamingo", "pink", "Florida", "tropical", "unique"]
  },
  {
    unicode: "🐺",
    name: "Wolf",
    slug: "wolf",
    shortMeaning: "A grey wolf face.",
    detailedMeaning: "The Wolf emoji shows a grey wolf. It represents wolves, pack mentality, lone wolf, and wild nature.\n\nUsed for wolf lovers, expressing independence (lone wolf), or pack/team references.",
    usageContexts: ["Wolf", "Pack", "Wild", "Lone Wolf", "Night"],
    examples: [
      { context: "Lone", text: "Lone wolf 🐺" },
      { context: "Pack", text: "Wolf pack 🐺" },
      { context: "Wild", text: "Wild spirit 🐺" }
    ],
    misunderstandings: ["Clear wolf meaning"],
    relatedEmojis: ["fox", "dog-face", "moon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["wolf", "pack", "wild", "lone", "howl"]
  },
  {
    unicode: "🐴",
    name: "Horse Face",
    slug: "horse-face",
    shortMeaning: "A brown horse face.",
    detailedMeaning: "The Horse Face emoji shows a brown horse. It represents horses, racing, riding, and strength.\n\nUsed for horse lovers, racing, or expressing freedom and power.",
    usageContexts: ["Horse", "Racing", "Riding", "Strong", "Free"],
    examples: [
      { context: "Racing", text: "Race day 🐴" },
      { context: "Riding", text: "Horseback riding 🐴" },
      { context: "Free", text: "Wild and free 🐴" }
    ],
    misunderstandings: ["Clear horse meaning"],
    relatedEmojis: ["unicorn", "racehorse", "carousel-horse"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["horse", "racing", "riding", "equine", "free"]
  },
  {
    unicode: "🦄",
    name: "Unicorn",
    slug: "unicorn",
    shortMeaning: "A magical unicorn - rare and special.",
    detailedMeaning: "The Unicorn emoji shows a colorful unicorn. It represents magic, uniqueness, fantasy, and rare things.\n\nUsed for magical content, expressing uniqueness, or describing something rare (unicorn startup).",
    usageContexts: ["Unicorn", "Magic", "Rare", "Unique", "Fantasy"],
    examples: [
      { context: "Magic", text: "Believe in magic 🦄" },
      { context: "Rare", text: "You're a unicorn 🦄" },
      { context: "Special", text: "Unicorn vibes 🦄" }
    ],
    misunderstandings: ["Startup term for billion-dollar companies"],
    relatedEmojis: ["rainbow", "sparkles", "horse-face"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["unicorn", "magic", "rare", "rainbow", "fantasy"]
  },
  {
    unicode: "🐿️",
    name: "Chipmunk",
    slug: "chipmunk",
    shortMeaning: "A cute chipmunk with chubby cheeks.",
    detailedMeaning: "The Chipmunk emoji shows a small brown chipmunk. It represents chipmunks, squirrels, autumn, and gathering food.\n\nUsed for autumn content, cute animals, or storing things away.",
    usageContexts: ["Chipmunk", "Autumn", "Cute", "Nuts", "Storing"],
    examples: [
      { context: "Autumn", text: "Fall vibes 🐿️" },
      { context: "Cute", text: "So cute 🐿️" },
      { context: "Saving", text: "Storing for later 🐿️" }
    ],
    misunderstandings: ["Clear chipmunk meaning"],
    relatedEmojis: ["squirrel", "acorn", "fallen-leaf"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["chipmunk", "squirrel", "autumn", "cute", "nuts"]
  },
  {
    unicode: "🦨",
    name: "Skunk",
    slug: "skunk",
    shortMeaning: "A black and white skunk.",
    detailedMeaning: "The Skunk emoji shows a black and white skunk. It represents skunks, bad smells, and being avoided.\n\nUsed for something stinky, someone being avoided, or actual skunk references.",
    usageContexts: ["Skunk", "Stinky", "Avoided", "Black and White", "Spray"],
    examples: [
      { context: "Stinky", text: "Something smells 🦨" },
      { context: "Avoided", text: "Being avoided like a skunk 🦨" },
      { context: "Cute", text: "Even skunks are cute 🦨" }
    ],
    misunderstandings: ["Often implies bad smell"],
    relatedEmojis: ["nose", "raccoon", "badger"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["skunk", "stinky", "spray", "black and white", "smell"]
  },
  {
    unicode: "🦝",
    name: "Raccoon",
    slug: "raccoon",
    shortMeaning: "A masked raccoon.",
    detailedMeaning: "The Raccoon emoji shows a grey raccoon with its distinctive mask. It represents raccoons, trash pandas, sneakiness, and nocturnal creatures.\n\nUsed for 'trash panda' memes, sneaky behavior, or night creature references.",
    usageContexts: ["Raccoon", "Trash Panda", "Sneaky", "Night", "Masked"],
    examples: [
      { context: "Trash Panda", text: "Trash panda vibes 🦝" },
      { context: "Sneaky", text: "Being sneaky 🦝" },
      { context: "Night", text: "Night creature 🦝" }
    ],
    misunderstandings: ["Trash panda meme"],
    relatedEmojis: ["fox", "skunk", "badger"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["raccoon", "trash panda", "sneaky", "masked", "night"]
  },
  {
    unicode: "🦥",
    name: "Sloth",
    slug: "sloth",
    shortMeaning: "A slow, lazy sloth.",
    detailedMeaning: "The Sloth emoji shows a grey sloth hanging from a branch. It represents slowness, laziness, taking it easy, and relaxation.\n\nUsed for lazy days, taking things slow, or expressing tiredness.",
    usageContexts: ["Sloth", "Lazy", "Slow", "Relaxed", "Tired"],
    examples: [
      { context: "Lazy", text: "Sloth mode 🦥" },
      { context: "Slow", text: "Taking it slow 🦥" },
      { context: "Relaxed", text: "Sunday vibes 🦥" }
    ],
    misunderstandings: ["Clear lazy/slow meaning"],
    relatedEmojis: ["koala", "turtle", "snail"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["sloth", "lazy", "slow", "relaxed", "tired"]
  },
  {
    unicode: "🐀",
    name: "Rat",
    slug: "rat",
    shortMeaning: "A grey rat.",
    detailedMeaning: "The Rat emoji shows a grey rat. It represents rats, the Chinese zodiac, or calling someone a snitch/traitor.\n\nUsed for Chinese New Year, pet rats, or calling someone out as a rat.",
    usageContexts: ["Rat", "Snitch", "Chinese Zodiac", "Traitor", "Pet"],
    examples: [
      { context: "Snitch", text: "You're such a rat 🐀" },
      { context: "Zodiac", text: "Year of the Rat 🐀" },
      { context: "Pet", text: "My pet rat 🐀" }
    ],
    misunderstandings: ["Can imply snitch/traitor"],
    relatedEmojis: ["mouse-face", "hamster", "cheese"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rat", "snitch", "rodent", "zodiac", "traitor"]
  },
  {
    unicode: "🐇",
    name: "Rabbit",
    slug: "rabbit",
    shortMeaning: "A full-body white rabbit.",
    detailedMeaning: "The Rabbit emoji shows a white rabbit. It represents rabbits, Easter, speed, and multiplication.\n\nUsed for Easter, fast reproduction jokes, or bunny references.",
    usageContexts: ["Rabbit", "Easter", "Fast", "Bunny", "White"],
    examples: [
      { context: "Easter", text: "Easter time 🐇" },
      { context: "Fast", text: "Quick like a bunny 🐇" },
      { context: "Lucky", text: "Lucky rabbit 🐇" }
    ],
    misunderstandings: ["Clear rabbit meaning"],
    relatedEmojis: ["rabbit-face", "carrot", "easter-egg"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rabbit", "bunny", "Easter", "fast", "white"]
  },
  {
    unicode: "🐕",
    name: "Dog",
    slug: "dog",
    shortMeaning: "A full-body dog.",
    detailedMeaning: "The Dog emoji shows a full-body brown dog. It represents dogs, pets, loyalty, and companionship.\n\nUsed for dog lovers, pet content, or expressing loyalty.",
    usageContexts: ["Dog", "Pet", "Loyal", "Friend", "Companion"],
    examples: [
      { context: "Pet", text: "Walking the dog 🐕" },
      { context: "Loyal", text: "Best friend 🐕" },
      { context: "Love", text: "Dog lover 🐕" }
    ],
    misunderstandings: ["Clear dog meaning"],
    relatedEmojis: ["dog-face", "paw-prints", "bone"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["dog", "pet", "loyal", "friend", "companion"]
  },
  {
    unicode: "🐈",
    name: "Cat",
    slug: "cat",
    shortMeaning: "A full-body orange cat.",
    detailedMeaning: "The Cat emoji shows a full-body orange cat. It represents cats, pets, and feline companions.\n\nUsed for cat lovers, pet content, or expressing independence.",
    usageContexts: ["Cat", "Pet", "Feline", "Independent", "Orange"],
    examples: [
      { context: "Pet", text: "My cat 🐈" },
      { context: "Cute", text: "Cat life 🐈" },
      { context: "Love", text: "Cat lover 🐈" }
    ],
    misunderstandings: ["Clear cat meaning"],
    relatedEmojis: ["cat-face", "black-cat", "paw-prints"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cat", "pet", "feline", "orange", "tabby"]
  },
  {
    unicode: "🐈‍⬛",
    name: "Black Cat",
    slug: "black-cat",
    shortMeaning: "A black cat - mysterious and Halloween-y.",
    detailedMeaning: "The Black Cat emoji shows a full-body black cat. It represents black cats, Halloween, superstition, and mystery.\n\nUsed for Halloween, spooky content, or black cat appreciation.",
    usageContexts: ["Black Cat", "Halloween", "Spooky", "Mysterious", "Superstition"],
    examples: [
      { context: "Halloween", text: "Spooky season 🐈‍⬛" },
      { context: "Pet", text: "My black cat 🐈‍⬛" },
      { context: "Lucky", text: "Black cats are good luck 🐈‍⬛" }
    ],
    misunderstandings: ["Superstition about bad luck"],
    relatedEmojis: ["cat", "bat", "jack-o-lantern"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["black cat", "Halloween", "spooky", "mysterious", "superstition"]
  },
  {
    unicode: "🦮",
    name: "Guide Dog",
    slug: "guide-dog",
    shortMeaning: "A guide dog with harness.",
    detailedMeaning: "The Guide Dog emoji shows a golden retriever in a guide dog harness. It represents service dogs, accessibility, and assistance animals.\n\nUsed for service dog content, accessibility discussions, or showing appreciation for working dogs.",
    usageContexts: ["Guide Dog", "Service", "Accessibility", "Helper", "Blind"],
    examples: [
      { context: "Service", text: "Service dog 🦮" },
      { context: "Helper", text: "Best helper 🦮" },
      { context: "Appreciation", text: "Thank you guide dogs 🦮" }
    ],
    misunderstandings: ["Clear service dog meaning"],
    relatedEmojis: ["dog", "dog-face", "wheelchair-symbol"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["guide dog", "service", "helper", "blind", "accessibility"]
  },
  {
    unicode: "🐕‍🦺",
    name: "Service Dog",
    slug: "service-dog",
    shortMeaning: "A service dog with vest.",
    detailedMeaning: "The Service Dog emoji shows a dog wearing a service vest. It represents service dogs, working animals, and assistance dogs.\n\nUsed for service dog content, accessibility, or appreciation for working dogs.",
    usageContexts: ["Service Dog", "Working", "Assistance", "Helper", "Vest"],
    examples: [
      { context: "Service", text: "Working dog 🐕‍🦺" },
      { context: "Helper", text: "Service animal 🐕‍🦺" },
      { context: "Appreciation", text: "Amazing service dogs 🐕‍🦺" }
    ],
    misunderstandings: ["Clear service dog meaning"],
    relatedEmojis: ["guide-dog", "dog", "dog-face"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["service dog", "working", "helper", "vest", "assistance"]
  },
  {
    unicode: "🐩",
    name: "Poodle",
    slug: "poodle",
    shortMeaning: "A fancy groomed poodle.",
    detailedMeaning: "The Poodle emoji shows a groomed white poodle. It represents poodles, fancy dogs, grooming, and elegance.\n\nUsed for poodle lovers, fancy/groomed content, or expressing elegance.",
    usageContexts: ["Poodle", "Fancy", "Groomed", "Elegant", "French"],
    examples: [
      { context: "Fancy", text: "Feeling fancy 🐩" },
      { context: "Groomed", text: "Freshly groomed 🐩" },
      { context: "Pet", text: "My poodle 🐩" }
    ],
    misunderstandings: ["Clear poodle meaning"],
    relatedEmojis: ["dog", "dog-face", "bow"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["poodle", "fancy", "groomed", "elegant", "french"]
  },
  {
    unicode: "🦌",
    name: "Deer",
    slug: "deer",
    shortMeaning: "A brown deer with antlers.",
    detailedMeaning: "The Deer emoji shows a deer with antlers. It represents deer, nature, forest, and Christmas (reindeer).\n\nUsed for nature content, hunting season, or Christmas references.",
    usageContexts: ["Deer", "Forest", "Nature", "Hunting", "Christmas"],
    examples: [
      { context: "Nature", text: "Saw a deer 🦌" },
      { context: "Forest", text: "Forest life 🦌" },
      { context: "Christmas", text: "Reindeer vibes 🦌" }
    ],
    misunderstandings: ["Clear deer meaning"],
    relatedEmojis: ["christmas-tree", "forest", "goat"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["deer", "forest", "nature", "antlers", "reindeer"]
  },
  {
    unicode: "🦬",
    name: "Bison",
    slug: "bison",
    shortMeaning: "A large brown bison.",
    detailedMeaning: "The Bison emoji shows a large brown bison. It represents bison, buffalo, American wildlife, and strength.\n\nUsed for American prairie content, national parks, or expressing strength.",
    usageContexts: ["Bison", "Buffalo", "American", "Strong", "Prairie"],
    examples: [
      { context: "American", text: "American wildlife 🦬" },
      { context: "Strong", text: "Strong like a bison 🦬" },
      { context: "Nature", text: "Yellowstone vibes 🦬" }
    ],
    misunderstandings: ["Sometimes confused with buffalo"],
    relatedEmojis: ["cow-face", "ox", "mammoth"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["bison", "buffalo", "American", "prairie", "strong"]
  },
  {
    unicode: "🐐",
    name: "Goat",
    slug: "goat",
    shortMeaning: "A goat - also means Greatest Of All Time.",
    detailedMeaning: "The Goat emoji shows a white goat. It represents goats, farms, and most importantly, GOAT (Greatest Of All Time).\n\nUsed to call someone the greatest, farm content, or Capricorn zodiac.",
    usageContexts: ["GOAT", "Greatest", "Farm", "Capricorn", "Legend"],
    examples: [
      { context: "Greatest", text: "You're the GOAT 🐐" },
      { context: "Legend", text: "Absolute legend 🐐" },
      { context: "Best", text: "The greatest 🐐" }
    ],
    misunderstandings: ["GOAT meaning is very popular"],
    relatedEmojis: ["trophy", "crown", "star"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["goat", "GOAT", "greatest", "legend", "best"]
  },
  {
    unicode: "🐑",
    name: "Ewe",
    slug: "ewe",
    shortMeaning: "A white sheep.",
    detailedMeaning: "The Ewe emoji shows a fluffy white sheep. It represents sheep, wool, farms, and counting sheep (sleep).\n\nUsed for farm content, wool references, or counting sheep to sleep.",
    usageContexts: ["Sheep", "Wool", "Farm", "Sleep", "Fluffy"],
    examples: [
      { context: "Sleep", text: "Counting sheep 🐑" },
      { context: "Farm", text: "Farm life 🐑" },
      { context: "Wool", text: "Fluffy wool 🐑" }
    ],
    misunderstandings: ["Clear sheep meaning"],
    relatedEmojis: ["ram", "goat", "yarn"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["sheep", "wool", "fluffy", "farm", "sleep"]
  },
  {
    unicode: "🦧",
    name: "Orangutan",
    slug: "orangutan",
    shortMeaning: "An orange orangutan.",
    detailedMeaning: "The Orangutan emoji shows an orange orangutan. It represents orangutans, great apes, and rainforest conservation.\n\nUsed for primate content, rainforest discussions, or conservation topics.",
    usageContexts: ["Orangutan", "Ape", "Rainforest", "Conservation", "Orange"],
    examples: [
      { context: "Conservation", text: "Save the orangutans 🦧" },
      { context: "Smart", text: "Smart like an orangutan 🦧" },
      { context: "Rainforest", text: "Rainforest life 🦧" }
    ],
    misunderstandings: ["Clear orangutan meaning"],
    relatedEmojis: ["gorilla", "monkey-face", "palm-tree"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["orangutan", "ape", "rainforest", "conservation", "orange"]
  },
  {
    unicode: "🦍",
    name: "Gorilla",
    slug: "gorilla",
    shortMeaning: "A strong gorilla.",
    detailedMeaning: "The Gorilla emoji shows a grey gorilla. It represents gorillas, strength, great apes, and Harambe memes.\n\nUsed for strength, crypto 'apes', or great ape content.",
    usageContexts: ["Gorilla", "Strong", "Ape", "Crypto", "Harambe"],
    examples: [
      { context: "Strong", text: "Gorilla strength 🦍" },
      { context: "Crypto", text: "Ape together strong 🦍" },
      { context: "Wild", text: "Wild gorilla 🦍" }
    ],
    misunderstandings: ["Crypto ape reference"],
    relatedEmojis: ["orangutan", "monkey-face", "flexed-biceps"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["gorilla", "strong", "ape", "powerful", "crypto"]
  },
  {
    unicode: "🐲",
    name: "Dragon Face",
    slug: "dragon-face",
    shortMeaning: "A green dragon face.",
    detailedMeaning: "The Dragon Face emoji shows a green Eastern-style dragon. It represents dragons, Chinese culture, power, and fantasy.\n\nUsed for Chinese New Year, fantasy content, or expressing power.",
    usageContexts: ["Dragon", "Chinese", "Fantasy", "Power", "Zodiac"],
    examples: [
      { context: "Chinese", text: "Year of the Dragon 🐲" },
      { context: "Fantasy", text: "Dragon energy 🐲" },
      { context: "Power", text: "Dragon mode 🐲" }
    ],
    misunderstandings: ["Chinese dragon vs Western dragon"],
    relatedEmojis: ["dragon", "fire", "chinese-new-year"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["dragon", "Chinese", "fantasy", "power", "zodiac"]
  },
  {
    unicode: "🐉",
    name: "Dragon",
    slug: "dragon",
    shortMeaning: "A full-body green dragon.",
    detailedMeaning: "The Dragon emoji shows a full Eastern-style dragon. It represents dragons, Chinese mythology, and power.\n\nUsed for Chinese culture, fantasy content, or expressing majesty.",
    usageContexts: ["Dragon", "Chinese", "Mythology", "Power", "Fantasy"],
    examples: [
      { context: "Chinese", text: "Dragon dance 🐉" },
      { context: "Fantasy", text: "Mythical dragon 🐉" },
      { context: "Power", text: "Dragon spirit 🐉" }
    ],
    misunderstandings: ["Eastern dragon style"],
    relatedEmojis: ["dragon-face", "fire", "red-envelope"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["dragon", "Chinese", "mythology", "power", "serpent"]
  },
  // PLANTS & FLOWERS
  {
    unicode: "🌸",
    name: "Cherry Blossom",
    slug: "cherry-blossom",
    shortMeaning: "A delicate pink cherry blossom flower.",
    detailedMeaning: "The Cherry Blossom emoji represents the beautiful pink flowers of cherry trees, especially associated with Japan's sakura season. It symbolizes spring, renewal, beauty, and the fleeting nature of life.\n\nUsed for spring content, Japanese culture, beauty appreciation, and expressing delicate femininity.",
    usageContexts: ["Spring", "Japan", "Beauty", "Nature", "Renewal"],
    examples: [
      { context: "Spring", text: "Cherry blossom season 🌸" },
      { context: "Beauty", text: "So pretty 🌸" },
      { context: "Japan", text: "Tokyo in spring 🌸" }
    ],
    misunderstandings: ["Clear meaning - universally beautiful"],
    relatedEmojis: ["blossom", "hibiscus", "tulip"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["cherry", "blossom", "sakura", "spring", "Japan", "pink"]
  },
  {
    unicode: "🌷",
    name: "Tulip",
    slug: "tulip",
    shortMeaning: "A colorful tulip flower.",
    detailedMeaning: "The Tulip emoji shows a pink/red tulip flower, representing spring, gardens, and Dutch culture. Tulips are associated with elegance, love, and the Netherlands.\n\nUsed for spring content, gardening, romantic gestures, and expressing appreciation for beauty.",
    usageContexts: ["Spring", "Gardens", "Romance", "Netherlands", "Flowers"],
    examples: [
      { context: "Spring", text: "Tulip season 🌷" },
      { context: "Garden", text: "My garden is blooming 🌷" },
      { context: "Gift", text: "Flowers for you 🌷" }
    ],
    misunderstandings: ["Clear flower meaning"],
    relatedEmojis: ["cherry-blossom", "rose", "bouquet"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["tulip", "flower", "spring", "garden", "Netherlands"]
  },
  {
    unicode: "🌹",
    name: "Rose",
    slug: "rose",
    shortMeaning: "A beautiful red rose - the flower of love.",
    detailedMeaning: "The Rose emoji shows a red rose, the universal symbol of love and romance. Roses are associated with Valentine's Day, romantic gestures, and deep affection.\n\nUsed for expressing love, romance, appreciation, and beauty. Red roses carry strong romantic connotations.",
    usageContexts: ["Romance", "Love", "Valentine's Day", "Beauty", "Gifts"],
    examples: [
      { context: "Romance", text: "For you my love 🌹" },
      { context: "Valentine", text: "Happy Valentine's Day 🌹" },
      { context: "Beauty", text: "Beautiful like a rose 🌹" }
    ],
    misunderstandings: ["Strong romantic connotation"],
    relatedEmojis: ["red-heart", "bouquet", "hibiscus"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["rose", "love", "romance", "red", "Valentine"]
  },
  {
    unicode: "🌺",
    name: "Hibiscus",
    slug: "hibiscus",
    shortMeaning: "A tropical hibiscus flower.",
    detailedMeaning: "The Hibiscus emoji shows a bright pink tropical flower, associated with Hawaii, tropical islands, and exotic beauty. Hibiscus flowers represent vacation vibes and warmth.\n\nUsed for tropical content, Hawaiian themes, summer vibes, and expressing exotic beauty.",
    usageContexts: ["Tropical", "Hawaii", "Summer", "Vacation", "Beauty"],
    examples: [
      { context: "Hawaii", text: "Aloha 🌺" },
      { context: "Vacation", text: "Tropical paradise 🌺" },
      { context: "Summer", text: "Island vibes 🌺" }
    ],
    misunderstandings: ["Clear tropical flower meaning"],
    relatedEmojis: ["palm-tree", "beach", "pineapple"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["hibiscus", "tropical", "Hawaii", "flower", "island"]
  },
  {
    unicode: "🌻",
    name: "Sunflower",
    slug: "sunflower",
    shortMeaning: "A bright yellow sunflower.",
    detailedMeaning: "The Sunflower emoji shows a large yellow sunflower, representing happiness, summer, and positivity. Sunflowers are known for following the sun and symbolize warmth and joy.\n\nUsed for expressing happiness, summer content, positivity, and bright energy.",
    usageContexts: ["Summer", "Happiness", "Positivity", "Nature", "Bright"],
    examples: [
      { context: "Happy", text: "You're my sunshine 🌻" },
      { context: "Summer", text: "Sunflower fields 🌻" },
      { context: "Positive", text: "Stay bright 🌻" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["sun", "yellow-heart", "blossom"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["sunflower", "yellow", "summer", "happy", "bright"]
  },
  {
    unicode: "🌼",
    name: "Blossom",
    slug: "blossom",
    shortMeaning: "A simple yellow/white flower blossom.",
    detailedMeaning: "The Blossom emoji shows a simple flower with white or yellow petals, representing spring, blooming, and natural beauty. It's a generic flower for various contexts.\n\nUsed for spring content, nature appreciation, gardening, and general floral themes.",
    usageContexts: ["Spring", "Nature", "Gardens", "Growth", "Beauty"],
    examples: [
      { context: "Spring", text: "Spring is here 🌼" },
      { context: "Garden", text: "Flowers blooming 🌼" },
      { context: "Pretty", text: "So lovely 🌼" }
    ],
    misunderstandings: ["Generic flower meaning"],
    relatedEmojis: ["cherry-blossom", "tulip", "bouquet"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["blossom", "flower", "spring", "bloom", "nature"]
  },
  {
    unicode: "💐",
    name: "Bouquet",
    slug: "bouquet",
    shortMeaning: "A colorful bouquet of flowers.",
    detailedMeaning: "The Bouquet emoji shows a wrapped bundle of colorful flowers, representing gifts, celebrations, and appreciation. Bouquets are given for various occasions from romance to congratulations.\n\nUsed for expressing appreciation, congratulations, romantic gestures, and celebrations.",
    usageContexts: ["Gifts", "Romance", "Congratulations", "Appreciation", "Celebrations"],
    examples: [
      { context: "Gift", text: "Flowers for you 💐" },
      { context: "Congrats", text: "Congratulations 💐" },
      { context: "Thanks", text: "Thank you so much 💐" }
    ],
    misunderstandings: ["Clear gift/appreciation meaning"],
    relatedEmojis: ["rose", "tulip", "gift"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["bouquet", "flowers", "gift", "arrangement", "celebration"]
  },
  {
    unicode: "🪻",
    name: "Hyacinth",
    slug: "hyacinth",
    shortMeaning: "A fragrant purple hyacinth flower.",
    detailedMeaning: "The Hyacinth emoji shows a purple hyacinth flower, known for its strong fragrance and spring blooming. Hyacinths represent playfulness, sport, and sincerity.\n\nUsed for spring content, fragrant garden discussions, and expressing purple aesthetic.",
    usageContexts: ["Spring", "Fragrance", "Gardens", "Purple", "Beauty"],
    examples: [
      { context: "Spring", text: "Hyacinths blooming 🪻" },
      { context: "Garden", text: "Smells amazing 🪻" },
      { context: "Purple", text: "Purple vibes 🪻" }
    ],
    misunderstandings: ["Less common flower"],
    relatedEmojis: ["tulip", "lavender", "cherry-blossom"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["hyacinth", "purple", "fragrant", "spring", "flower"]
  },
  {
    unicode: "🪷",
    name: "Lotus",
    slug: "lotus",
    shortMeaning: "A sacred lotus flower.",
    detailedMeaning: "The Lotus emoji shows a pink lotus flower, sacred in many Asian cultures. The lotus represents purity, enlightenment, and spiritual growth as it blooms from muddy waters.\n\nUsed for spirituality, meditation, yoga, Buddhism, and expressing inner peace.",
    usageContexts: ["Spirituality", "Meditation", "Yoga", "Buddhism", "Peace"],
    examples: [
      { context: "Meditation", text: "Finding peace 🪷" },
      { context: "Yoga", text: "Namaste 🪷" },
      { context: "Spiritual", text: "Inner growth 🪷" }
    ],
    misunderstandings: ["Has spiritual significance"],
    relatedEmojis: ["om", "yoga", "peace-symbol"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["lotus", "spiritual", "meditation", "Buddhism", "purity"]
  },
  {
    unicode: "🌾",
    name: "Sheaf of Rice",
    slug: "sheaf-of-rice",
    shortMeaning: "Golden stalks of rice or wheat.",
    detailedMeaning: "The Sheaf of Rice emoji shows golden grain stalks, representing harvest, agriculture, and abundance. It can represent rice, wheat, or other cereal crops.\n\nUsed for harvest themes, farming content, fall/autumn, and expressing abundance.",
    usageContexts: ["Harvest", "Agriculture", "Autumn", "Abundance", "Farming"],
    examples: [
      { context: "Harvest", text: "Harvest season 🌾" },
      { context: "Farm", text: "Golden fields 🌾" },
      { context: "Fall", text: "Autumn vibes 🌾" }
    ],
    misunderstandings: ["Agricultural meaning"],
    relatedEmojis: ["ear-of-corn", "wheat", "tractor"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["rice", "wheat", "harvest", "grain", "agriculture"]
  },
  {
    unicode: "🌵",
    name: "Cactus",
    slug: "cactus",
    shortMeaning: "A green cactus from the desert.",
    detailedMeaning: "The Cactus emoji shows a green cactus, representing desert environments, the American Southwest, and resilience. Cacti survive in harsh conditions with little water.\n\nUsed for desert content, Arizona/Texas themes, resilience, and trendy plant decor.",
    usageContexts: ["Desert", "Southwest", "Resilience", "Plants", "Decor"],
    examples: [
      { context: "Desert", text: "Arizona vibes 🌵" },
      { context: "Strong", text: "Stay sharp 🌵" },
      { context: "Plants", text: "New plant baby 🌵" }
    ],
    misunderstandings: ["Clear desert plant meaning"],
    relatedEmojis: ["desert", "sun", "scorpion"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["cactus", "desert", "succulent", "prickly", "Southwest"]
  },
  {
    unicode: "🌲",
    name: "Evergreen Tree",
    slug: "evergreen-tree",
    shortMeaning: "A tall evergreen pine tree.",
    detailedMeaning: "The Evergreen Tree emoji shows a tall conifer/pine tree, representing forests, nature, and outdoor activities. Evergreens stay green year-round and symbolize resilience.\n\nUsed for nature content, camping, hiking, Pacific Northwest vibes, and forest themes.",
    usageContexts: ["Nature", "Forest", "Camping", "Hiking", "Outdoors"],
    examples: [
      { context: "Nature", text: "Into the woods 🌲" },
      { context: "Camping", text: "Camping weekend 🌲" },
      { context: "Fresh", text: "Fresh forest air 🌲" }
    ],
    misunderstandings: ["Clear tree meaning"],
    relatedEmojis: ["deciduous-tree", "national-park", "tent"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["pine", "evergreen", "forest", "tree", "nature"]
  },
  {
    unicode: "🌳",
    name: "Deciduous Tree",
    slug: "deciduous-tree",
    shortMeaning: "A leafy green deciduous tree.",
    detailedMeaning: "The Deciduous Tree emoji shows a round, leafy tree that loses its leaves in fall. It represents parks, shade, nature, and environmental themes.\n\nUsed for nature content, parks, environmental discussions, and general tree references.",
    usageContexts: ["Nature", "Parks", "Environment", "Shade", "Green"],
    examples: [
      { context: "Park", text: "Picnic under the tree 🌳" },
      { context: "Nature", text: "Tree hugger 🌳" },
      { context: "Green", text: "Go green 🌳" }
    ],
    misunderstandings: ["Clear tree meaning"],
    relatedEmojis: ["evergreen-tree", "fallen-leaf", "park"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["tree", "deciduous", "green", "park", "nature"]
  },
  {
    unicode: "🌴",
    name: "Palm Tree",
    slug: "palm-tree",
    shortMeaning: "A tropical palm tree.",
    detailedMeaning: "The Palm Tree emoji shows a tropical palm tree, instantly evoking beaches, vacations, and warm climates. Palm trees are iconic symbols of tropical paradise.\n\nUsed for vacation content, beach themes, tropical vibes, and summer feeling.",
    usageContexts: ["Vacation", "Beach", "Tropical", "Summer", "Paradise"],
    examples: [
      { context: "Vacation", text: "Beach vibes 🌴" },
      { context: "Paradise", text: "Tropical paradise 🌴" },
      { context: "Summer", text: "Summer mode 🌴" }
    ],
    misunderstandings: ["Clear tropical meaning"],
    relatedEmojis: ["beach", "coconut", "hibiscus"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["palm", "tropical", "beach", "vacation", "island"]
  },
  {
    unicode: "🎋",
    name: "Tanabata Tree",
    slug: "tanabata-tree",
    shortMeaning: "A bamboo tree with wishes for Tanabata.",
    detailedMeaning: "The Tanabata Tree emoji shows a bamboo tree decorated with colorful paper wishes, used during the Japanese Tanabata festival. It represents wishes, Japanese culture, and celebration.\n\nUsed for Japanese festivals, making wishes, and cultural celebrations.",
    usageContexts: ["Japan", "Festival", "Wishes", "Culture", "Celebration"],
    examples: [
      { context: "Tanabata", text: "Happy Tanabata 🎋" },
      { context: "Wish", text: "Making a wish 🎋" },
      { context: "Japan", text: "Japanese summer 🎋" }
    ],
    misunderstandings: ["Specific Japanese cultural meaning"],
    relatedEmojis: ["bamboo", "star", "wind-chime"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["tanabata", "bamboo", "wish", "Japan", "festival"]
  },
  {
    unicode: "🎍",
    name: "Pine Decoration",
    slug: "pine-decoration",
    shortMeaning: "A Japanese New Year pine decoration.",
    detailedMeaning: "The Pine Decoration emoji shows kadomatsu, a traditional Japanese New Year decoration made of pine and bamboo. It represents Japanese New Year traditions and fresh starts.\n\nUsed for Japanese New Year greetings and cultural celebrations.",
    usageContexts: ["New Year", "Japan", "Tradition", "Celebration", "Fresh start"],
    examples: [
      { context: "New Year", text: "Happy New Year 🎍" },
      { context: "Japan", text: "Akemashite omedetou 🎍" },
      { context: "Fresh", text: "New beginnings 🎍" }
    ],
    misunderstandings: ["Specific Japanese cultural meaning"],
    relatedEmojis: ["new-year", "fireworks", "sake"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["kadomatsu", "pine", "New Year", "Japan", "tradition"]
  },
  {
    unicode: "🍀",
    name: "Four Leaf Clover",
    slug: "four-leaf-clover",
    shortMeaning: "A lucky four-leaf clover.",
    detailedMeaning: "The Four Leaf Clover emoji represents luck and good fortune, as finding a four-leaf clover is rare. It's associated with Irish culture and St. Patrick's Day.\n\nUsed for wishing luck, Irish themes, and expressing hope for good fortune.",
    usageContexts: ["Luck", "Irish", "St. Patrick's Day", "Fortune", "Hope"],
    examples: [
      { context: "Luck", text: "Good luck 🍀" },
      { context: "Irish", text: "Happy St. Paddy's 🍀" },
      { context: "Hope", text: "Fingers crossed 🍀" }
    ],
    misunderstandings: ["Clear luck meaning"],
    relatedEmojis: ["shamrock", "leprechaun", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["clover", "luck", "Irish", "fortune", "green"]
  },
  {
    unicode: "☘️",
    name: "Shamrock",
    slug: "shamrock",
    shortMeaning: "A three-leaf shamrock - symbol of Ireland.",
    detailedMeaning: "The Shamrock emoji shows a three-leaf clover, the national symbol of Ireland. Unlike the four-leaf clover, this is the traditional Irish shamrock used by St. Patrick.\n\nUsed for Irish themes, St. Patrick's Day, and Irish pride.",
    usageContexts: ["Ireland", "St. Patrick's Day", "Irish", "Green", "Celtic"],
    examples: [
      { context: "Irish", text: "Irish pride ☘️" },
      { context: "St. Patrick", text: "Erin go bragh ☘️" },
      { context: "Green", text: "Wearing green ☘️" }
    ],
    misunderstandings: ["Different from four-leaf clover"],
    relatedEmojis: ["four-leaf-clover", "irish-flag", "green-heart"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["shamrock", "Ireland", "Irish", "St. Patrick", "Celtic"]
  },
  {
    unicode: "🍃",
    name: "Leaf Fluttering in Wind",
    slug: "leaf-fluttering-in-wind",
    shortMeaning: "Green leaves blowing in the wind.",
    detailedMeaning: "The Leaf Fluttering in Wind emoji shows green leaves being carried by the wind. It represents nature, fresh air, and peaceful outdoor moments.\n\nUsed for nature content, breezy weather, fresh feelings, and tranquil moments.",
    usageContexts: ["Nature", "Wind", "Fresh", "Peaceful", "Breeze"],
    examples: [
      { context: "Fresh", text: "Fresh breeze 🍃" },
      { context: "Nature", text: "Nature walk 🍃" },
      { context: "Calm", text: "Peaceful day 🍃" }
    ],
    misunderstandings: ["Sometimes associated with marijuana"],
    relatedEmojis: ["wind", "fallen-leaf", "herb"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["leaf", "wind", "breeze", "nature", "fresh"]
  },
  {
    unicode: "🍂",
    name: "Fallen Leaf",
    slug: "fallen-leaf",
    shortMeaning: "Autumn fallen leaves.",
    detailedMeaning: "The Fallen Leaf emoji shows dried, autumn-colored leaves, representing fall season, change, and the passage of time. Fallen leaves evoke nostalgia and seasonal transitions.\n\nUsed for autumn content, seasonal changes, and cozy fall vibes.",
    usageContexts: ["Autumn", "Fall", "Change", "Seasonal", "Cozy"],
    examples: [
      { context: "Fall", text: "Fall vibes 🍂" },
      { context: "Autumn", text: "Autumn is here 🍂" },
      { context: "Cozy", text: "Sweater weather 🍂" }
    ],
    misunderstandings: ["Clear autumn meaning"],
    relatedEmojis: ["maple-leaf", "pumpkin", "hot-beverage"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["autumn", "fall", "leaves", "seasonal", "change"]
  },
  {
    unicode: "🍁",
    name: "Maple Leaf",
    slug: "maple-leaf",
    shortMeaning: "A red maple leaf - symbol of Canada.",
    detailedMeaning: "The Maple Leaf emoji shows a red maple leaf, the national symbol of Canada. It also represents autumn and fall foliage.\n\nUsed for Canadian content, fall themes, and autumn appreciation.",
    usageContexts: ["Canada", "Autumn", "Fall", "Nature", "Seasons"],
    examples: [
      { context: "Canada", text: "Oh Canada 🍁" },
      { context: "Fall", text: "Autumn colors 🍁" },
      { context: "Nature", text: "Fall foliage 🍁" }
    ],
    misunderstandings: ["Clear Canada/autumn meaning"],
    relatedEmojis: ["fallen-leaf", "canada-flag", "pumpkin"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["maple", "Canada", "autumn", "fall", "red"]
  },
  {
    unicode: "🪴",
    name: "Potted Plant",
    slug: "potted-plant",
    shortMeaning: "A houseplant in a pot.",
    detailedMeaning: "The Potted Plant emoji shows a green plant in a terracotta pot, representing houseplants, indoor gardening, and plant parenthood. Houseplants are trendy for home decor.\n\nUsed for plant content, home decor, gardening, and the plant parent lifestyle.",
    usageContexts: ["Houseplants", "Decor", "Gardening", "Home", "Green"],
    examples: [
      { context: "Plants", text: "Plant mom 🪴" },
      { context: "Decor", text: "Home jungle 🪴" },
      { context: "New", text: "New plant baby 🪴" }
    ],
    misunderstandings: ["Clear houseplant meaning"],
    relatedEmojis: ["seedling", "herb", "cactus"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["plant", "houseplant", "pot", "indoor", "decor"]
  },
  {
    unicode: "🌱",
    name: "Seedling",
    slug: "seedling",
    shortMeaning: "A young plant seedling sprouting.",
    detailedMeaning: "The Seedling emoji shows a small green sprout emerging from the ground, representing new beginnings, growth, and environmental awareness. Seedlings symbolize potential.\n\nUsed for growth themes, new beginnings, environmental content, and starting fresh.",
    usageContexts: ["Growth", "New beginnings", "Environment", "Potential", "Fresh start"],
    examples: [
      { context: "Growth", text: "Growing every day 🌱" },
      { context: "New", text: "Fresh start 🌱" },
      { context: "Green", text: "Go green 🌱" }
    ],
    misunderstandings: ["Clear growth meaning"],
    relatedEmojis: ["potted-plant", "herb", "leaf"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["seedling", "growth", "plant", "new", "sprout"]
  },
  {
    unicode: "🌿",
    name: "Herb",
    slug: "herb",
    shortMeaning: "A green herb sprig.",
    detailedMeaning: "The Herb emoji shows a green herb with multiple leaves. It can represent various herbs for cooking or sometimes marijuana.\n\nUsed for cooking content, natural themes, and sometimes cannabis references.",
    usageContexts: ["Cooking", "Nature", "Fresh", "Green", "Cannabis"],
    examples: [
      { context: "Cooking", text: "Fresh herbs 🌿" },
      { context: "Natural", text: "All natural 🌿" },
      { context: "Fresh", text: "Fresh and green 🌿" }
    ],
    misunderstandings: ["Sometimes associated with marijuana"],
    relatedEmojis: ["seedling", "leaf", "salad"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["herb", "green", "plant", "fresh", "natural"]
  },
  {
    unicode: "🪹",
    name: "Empty Nest",
    slug: "empty-nest",
    shortMeaning: "An empty bird's nest.",
    detailedMeaning: "The Empty Nest emoji shows a bird's nest without eggs, representing the 'empty nest' feeling when children leave home, or simply a nest.\n\nUsed for empty nest syndrome, nature content, and home themes.",
    usageContexts: ["Empty nest", "Nature", "Home", "Birds", "Parenting"],
    examples: [
      { context: "Kids", text: "Empty nester now 🪹" },
      { context: "Nature", text: "Bird's home 🪹" },
      { context: "Quiet", text: "Quiet house 🪹" }
    ],
    misunderstandings: ["Emotional family meaning"],
    relatedEmojis: ["nest-with-eggs", "bird", "house"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["nest", "empty", "bird", "home", "parenting"]
  },
  {
    unicode: "🪺",
    name: "Nest with Eggs",
    slug: "nest-with-eggs",
    shortMeaning: "A bird's nest with eggs.",
    detailedMeaning: "The Nest with Eggs emoji shows a bird's nest containing eggs, representing family, new life, and nurturing. Nests with eggs symbolize anticipation and care.\n\nUsed for pregnancy announcements, family themes, spring, and nurturing content.",
    usageContexts: ["Family", "Pregnancy", "Spring", "Nurturing", "New life"],
    examples: [
      { context: "Baby", text: "Baby announcement 🪺" },
      { context: "Spring", text: "New life 🪺" },
      { context: "Family", text: "Growing family 🪺" }
    ],
    misunderstandings: ["Can be pregnancy-related"],
    relatedEmojis: ["baby-chick", "bird", "egg"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["nest", "eggs", "bird", "family", "spring"]
  },
  {
    unicode: "🍄",
    name: "Mushroom",
    slug: "mushroom",
    shortMeaning: "A red and white spotted mushroom.",
    detailedMeaning: "The Mushroom emoji shows a classic red and white spotted toadstool, reminiscent of fairy tales and video games like Mario. It can also represent actual mushrooms or psychedelics.\n\nUsed for fairy tale themes, gaming references, food, and sometimes psychedelic culture.",
    usageContexts: ["Fairy tales", "Gaming", "Food", "Nature", "Psychedelics"],
    examples: [
      { context: "Gaming", text: "Power up 🍄" },
      { context: "Fairy tale", text: "Magical forest 🍄" },
      { context: "Food", text: "Mushroom risotto 🍄" }
    ],
    misunderstandings: ["Can reference psychedelics"],
    relatedEmojis: ["fairy", "video-game", "forest"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["mushroom", "toadstool", "Mario", "fairy", "fungus"]
  },
  {
    unicode: "🪨",
    name: "Rock",
    slug: "rock",
    shortMeaning: "A solid gray rock or boulder.",
    detailedMeaning: "The Rock emoji shows a large gray rock or boulder. It represents stability, strength, and reliability, or can be used literally for rocks and geology.\n\nUsed for expressing stability, rock climbing, geology, or 'you rock' expressions.",
    usageContexts: ["Stability", "Strength", "Geology", "Nature", "Climbing"],
    examples: [
      { context: "Strong", text: "Solid as a rock 🪨" },
      { context: "Thanks", text: "You rock 🪨" },
      { context: "Nature", text: "Rock formations 🪨" }
    ],
    misunderstandings: ["Sometimes used for 'The Rock' Dwayne Johnson"],
    relatedEmojis: ["mountain", "gem", "brick"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["rock", "stone", "boulder", "solid", "strong"]
  },
  {
    unicode: "🪵",
    name: "Wood",
    slug: "wood",
    shortMeaning: "A log of wood.",
    detailedMeaning: "The Wood emoji shows a brown wooden log, representing lumber, campfires, and natural materials. Wood is associated with craftsmanship and outdoor activities.\n\nUsed for camping, woodworking, natural materials, and rustic themes.",
    usageContexts: ["Camping", "Woodworking", "Natural", "Rustic", "Fire"],
    examples: [
      { context: "Camping", text: "Campfire time 🪵" },
      { context: "Craft", text: "Woodworking project 🪵" },
      { context: "Natural", text: "Natural materials 🪵" }
    ],
    misunderstandings: ["Clear wood meaning"],
    relatedEmojis: ["fire", "axe", "carpenter"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["wood", "log", "lumber", "campfire", "natural"]
  },
  // WEATHER & SKY
  {
    unicode: "☀️",
    name: "Sun",
    slug: "sun",
    shortMeaning: "A bright yellow sun.",
    detailedMeaning: "The Sun emoji shows a bright yellow sun with rays, representing sunny weather, warmth, happiness, and positivity. The sun is a universal symbol of light and life.\n\nUsed for sunny weather, positive vibes, summer content, and expressing brightness.",
    usageContexts: ["Weather", "Summer", "Positivity", "Warmth", "Bright"],
    examples: [
      { context: "Weather", text: "Sunny day ☀️" },
      { context: "Happy", text: "Sunshine vibes ☀️" },
      { context: "Summer", text: "Beach weather ☀️" }
    ],
    misunderstandings: ["Clear sun meaning"],
    relatedEmojis: ["sunflower", "beach", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sun", "sunny", "bright", "warm", "summer"]
  },
  {
    unicode: "🌤️",
    name: "Sun Behind Small Cloud",
    slug: "sun-behind-small-cloud",
    shortMeaning: "Partly cloudy with sun.",
    detailedMeaning: "The Sun Behind Small Cloud emoji shows the sun partially covered by a small cloud, representing partly cloudy or fair weather. It's a pleasant weather condition.\n\nUsed for weather updates, pleasant days, and mild conditions.",
    usageContexts: ["Weather", "Partly cloudy", "Pleasant", "Fair", "Mild"],
    examples: [
      { context: "Weather", text: "Nice day out 🌤️" },
      { context: "Forecast", text: "Partly cloudy 🌤️" },
      { context: "Plans", text: "Good for a walk 🌤️" }
    ],
    misunderstandings: ["Clear weather meaning"],
    relatedEmojis: ["sun", "cloud", "sun-behind-cloud"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sun", "cloud", "partly cloudy", "fair", "weather"]
  },
  {
    unicode: "⛅",
    name: "Sun Behind Cloud",
    slug: "sun-behind-cloud",
    shortMeaning: "Partly cloudy weather.",
    detailedMeaning: "The Sun Behind Cloud emoji shows the sun half-covered by a cloud, representing partly cloudy conditions. It indicates mixed weather that's neither fully sunny nor overcast.\n\nUsed for weather descriptions and moderate conditions.",
    usageContexts: ["Weather", "Partly cloudy", "Mixed", "Moderate", "Forecast"],
    examples: [
      { context: "Weather", text: "Partly cloudy today ⛅" },
      { context: "Forecast", text: "Mixed conditions ⛅" },
      { context: "Mood", text: "Meh kind of day ⛅" }
    ],
    misunderstandings: ["Standard weather emoji"],
    relatedEmojis: ["sun", "cloud", "sun-behind-rain-cloud"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["partly cloudy", "weather", "sun", "cloud", "mixed"]
  },
  {
    unicode: "🌥️",
    name: "Sun Behind Large Cloud",
    slug: "sun-behind-large-cloud",
    shortMeaning: "Mostly cloudy with some sun.",
    detailedMeaning: "The Sun Behind Large Cloud emoji shows mostly cloudy conditions with the sun peeking from behind a large cloud. It represents overcast weather with occasional brightness.\n\nUsed for cloudy weather updates and gloomy days.",
    usageContexts: ["Weather", "Cloudy", "Overcast", "Gloomy", "Forecast"],
    examples: [
      { context: "Weather", text: "Mostly cloudy 🌥️" },
      { context: "Gloomy", text: "Gray day 🌥️" },
      { context: "Mood", text: "Cloudy mood 🌥️" }
    ],
    misunderstandings: ["Clear weather meaning"],
    relatedEmojis: ["cloud", "sun-behind-cloud", "fog"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["cloudy", "overcast", "weather", "gray", "gloomy"]
  },
  {
    unicode: "☁️",
    name: "Cloud",
    slug: "cloud",
    shortMeaning: "A white fluffy cloud.",
    detailedMeaning: "The Cloud emoji shows a simple white cloud, representing cloudy weather, cloud computing, or dreamy/floaty feelings.\n\nUsed for weather, cloud technology, daydreaming, and soft aesthetic.",
    usageContexts: ["Weather", "Technology", "Dreamy", "Soft", "Fluffy"],
    examples: [
      { context: "Weather", text: "Cloudy day ☁️" },
      { context: "Tech", text: "Cloud storage ☁️" },
      { context: "Dreamy", text: "Head in the clouds ☁️" }
    ],
    misunderstandings: ["Tech vs weather context"],
    relatedEmojis: ["sun-behind-cloud", "fog", "rain"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["cloud", "cloudy", "weather", "computing", "fluffy"]
  },
  {
    unicode: "🌦️",
    name: "Sun Behind Rain Cloud",
    slug: "sun-behind-rain-cloud",
    shortMeaning: "Sun with rain showers.",
    detailedMeaning: "The Sun Behind Rain Cloud emoji shows a rain shower while the sun is visible, often creating rainbow conditions. It represents mixed weather with sunshine and rain.\n\nUsed for sun showers, unpredictable weather, and rainbow-making conditions.",
    usageContexts: ["Weather", "Sun shower", "Rain", "Mixed", "Rainbow"],
    examples: [
      { context: "Weather", text: "Sun shower 🌦️" },
      { context: "Mixed", text: "Crazy weather 🌦️" },
      { context: "Rainbow", text: "Rainbow weather 🌦️" }
    ],
    misunderstandings: ["Unusual weather condition"],
    relatedEmojis: ["rainbow", "rain", "sun"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sun shower", "rain", "mixed", "weather", "rainbow"]
  },
  {
    unicode: "🌧️",
    name: "Cloud with Rain",
    slug: "cloud-with-rain",
    shortMeaning: "Rainy weather.",
    detailedMeaning: "The Cloud with Rain emoji shows a dark cloud with raindrops falling, representing rainy weather. Rain can symbolize sadness, coziness, or renewal depending on context.\n\nUsed for rainy weather, sad feelings, cozy indoor days, and cleansing themes.",
    usageContexts: ["Weather", "Rain", "Sad", "Cozy", "Indoor"],
    examples: [
      { context: "Weather", text: "Rainy day 🌧️" },
      { context: "Cozy", text: "Perfect for staying in 🌧️" },
      { context: "Mood", text: "Feeling blue 🌧️" }
    ],
    misunderstandings: ["Can imply sadness"],
    relatedEmojis: ["umbrella", "rain", "cloud"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["rain", "rainy", "weather", "wet", "storm"]
  },
  {
    unicode: "⛈️",
    name: "Cloud with Lightning and Rain",
    slug: "cloud-with-lightning-and-rain",
    shortMeaning: "Thunderstorm weather.",
    detailedMeaning: "The Cloud with Lightning and Rain emoji shows a severe thunderstorm with lightning and rain. It represents intense weather, drama, or powerful emotions.\n\nUsed for storm warnings, dramatic situations, and intense feelings.",
    usageContexts: ["Weather", "Storm", "Drama", "Intense", "Power"],
    examples: [
      { context: "Weather", text: "Thunderstorm alert ⛈️" },
      { context: "Drama", text: "Things got intense ⛈️" },
      { context: "Power", text: "Electric energy ⛈️" }
    ],
    misunderstandings: ["Indicates severe weather"],
    relatedEmojis: ["lightning", "rain", "tornado"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["storm", "thunder", "lightning", "rain", "severe"]
  },
  {
    unicode: "🌩️",
    name: "Cloud with Lightning",
    slug: "cloud-with-lightning",
    shortMeaning: "Lightning storm without rain.",
    detailedMeaning: "The Cloud with Lightning emoji shows a cloud with lightning bolt, representing electrical storms or sudden inspiration. Lightning symbolizes power and sudden events.\n\nUsed for storms, sudden ideas, power, and dramatic moments.",
    usageContexts: ["Storm", "Power", "Ideas", "Sudden", "Electric"],
    examples: [
      { context: "Storm", text: "Lightning storm 🌩️" },
      { context: "Idea", text: "Struck by inspiration 🌩️" },
      { context: "Power", text: "Electric vibes 🌩️" }
    ],
    misunderstandings: ["Dramatic weather"],
    relatedEmojis: ["high-voltage", "cloud", "storm"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["lightning", "storm", "electric", "thunder", "power"]
  },
  {
    unicode: "🌨️",
    name: "Cloud with Snow",
    slug: "cloud-with-snow",
    shortMeaning: "Snowy weather.",
    detailedMeaning: "The Cloud with Snow emoji shows a cloud dropping snowflakes, representing winter weather, snow days, and cold conditions.\n\nUsed for snow forecasts, winter content, and cold weather discussions.",
    usageContexts: ["Weather", "Snow", "Winter", "Cold", "Forecast"],
    examples: [
      { context: "Weather", text: "Snow day 🌨️" },
      { context: "Winter", text: "Snowing outside 🌨️" },
      { context: "Cold", text: "Bundle up 🌨️" }
    ],
    misunderstandings: ["Clear winter weather meaning"],
    relatedEmojis: ["snowflake", "snowman", "cold-face"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["snow", "winter", "cold", "weather", "blizzard"]
  },
  {
    unicode: "❄️",
    name: "Snowflake",
    slug: "snowflake",
    shortMeaning: "A detailed snowflake crystal.",
    detailedMeaning: "The Snowflake emoji shows a detailed ice crystal, representing winter, cold, uniqueness (like each snowflake), or as slang for sensitive people.\n\nUsed for winter themes, cold weather, uniqueness, and sometimes as an insult.",
    usageContexts: ["Winter", "Cold", "Unique", "Snow", "Sensitive"],
    examples: [
      { context: "Winter", text: "Winter wonderland ❄️" },
      { context: "Cold", text: "Freezing out ❄️" },
      { context: "Unique", text: "One of a kind ❄️" }
    ],
    misunderstandings: ["'Snowflake' can be derogatory"],
    relatedEmojis: ["cloud-with-snow", "cold-face", "ice"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["snowflake", "winter", "cold", "unique", "ice"]
  },
  {
    unicode: "🌪️",
    name: "Tornado",
    slug: "tornado",
    shortMeaning: "A destructive tornado.",
    detailedMeaning: "The Tornado emoji shows a destructive twister/tornado, representing severe weather, chaos, or moving through life quickly.\n\nUsed for tornado warnings, chaotic situations, and whirlwind activities.",
    usageContexts: ["Weather", "Chaos", "Disaster", "Fast", "Whirlwind"],
    examples: [
      { context: "Weather", text: "Tornado warning 🌪️" },
      { context: "Chaos", text: "What a whirlwind 🌪️" },
      { context: "Busy", text: "Crazy busy week 🌪️" }
    ],
    misunderstandings: ["Serious weather warning"],
    relatedEmojis: ["wind-face", "storm", "cyclone"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["tornado", "twister", "storm", "disaster", "wind"]
  },
  {
    unicode: "🌫️",
    name: "Fog",
    slug: "fog",
    shortMeaning: "Foggy or misty conditions.",
    detailedMeaning: "The Fog emoji represents foggy, misty conditions with reduced visibility. Fog can symbolize mystery, uncertainty, or early morning atmospheres.\n\nUsed for weather updates, mysterious vibes, and unclear situations.",
    usageContexts: ["Weather", "Mystery", "Unclear", "Misty", "Atmosphere"],
    examples: [
      { context: "Weather", text: "Foggy morning 🌫️" },
      { context: "Mystery", text: "Things are hazy 🌫️" },
      { context: "Mood", text: "Mysterious vibes 🌫️" }
    ],
    misunderstandings: ["Can mean confusion"],
    relatedEmojis: ["cloud", "mist", "bridge-at-night"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["fog", "mist", "hazy", "weather", "unclear"]
  },
  {
    unicode: "💨",
    name: "Dashing Away",
    slug: "dashing-away",
    shortMeaning: "Wind or running fast.",
    detailedMeaning: "The Dashing Away emoji shows a puff of wind/air, often used to represent speed, running away quickly, or passing gas (fart humor).\n\nUsed for speed, wind, leaving quickly, and sometimes flatulence humor.",
    usageContexts: ["Speed", "Wind", "Running", "Fast", "Gas"],
    examples: [
      { context: "Fast", text: "Gotta run 💨" },
      { context: "Wind", text: "Windy day 💨" },
      { context: "Quick", text: "Zoom zoom 💨" }
    ],
    misunderstandings: ["Often used for fart jokes"],
    relatedEmojis: ["wind-face", "runner", "dash"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["wind", "fast", "running", "speed", "dash"]
  },
  {
    unicode: "🌈",
    name: "Rainbow",
    slug: "rainbow",
    shortMeaning: "A colorful rainbow.",
    detailedMeaning: "The Rainbow emoji shows a colorful arc of rainbow colors, representing hope, LGBTQ+ pride, beauty after storms, and good fortune.\n\nUsed for LGBTQ+ content, hope, positivity, and beautiful weather moments.",
    usageContexts: ["Pride", "Hope", "Beauty", "LGBTQ+", "Positivity"],
    examples: [
      { context: "Pride", text: "Happy Pride 🌈" },
      { context: "Hope", text: "After the storm 🌈" },
      { context: "Beautiful", text: "Look at that rainbow 🌈" }
    ],
    misunderstandings: ["Strong LGBTQ+ association"],
    relatedEmojis: ["pride-flag", "sparkles", "sun"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["rainbow", "pride", "hope", "colorful", "LGBTQ"]
  },
  {
    unicode: "🌙",
    name: "Crescent Moon",
    slug: "crescent-moon",
    shortMeaning: "A crescent moon.",
    detailedMeaning: "The Crescent Moon emoji shows a waxing or waning crescent moon, representing nighttime, sleep, dreams, and Islamic symbolism.\n\nUsed for night content, sleep themes, Ramadan, and mystical aesthetics.",
    usageContexts: ["Night", "Sleep", "Dreams", "Islamic", "Mystical"],
    examples: [
      { context: "Night", text: "Good night 🌙" },
      { context: "Sleep", text: "Time for bed 🌙" },
      { context: "Ramadan", text: "Ramadan Mubarak 🌙" }
    ],
    misunderstandings: ["Islamic significance"],
    relatedEmojis: ["full-moon", "star", "night"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["moon", "night", "crescent", "sleep", "dreams"]
  },
  {
    unicode: "🌕",
    name: "Full Moon",
    slug: "full-moon",
    shortMeaning: "A bright full moon.",
    detailedMeaning: "The Full Moon emoji shows a complete circular moon, representing full moons, werewolf jokes, and lunacy/craziness.\n\nUsed for full moon events, night content, and 'crazy' behavior references.",
    usageContexts: ["Moon", "Night", "Werewolf", "Lunacy", "Full moon"],
    examples: [
      { context: "Moon", text: "Full moon tonight 🌕" },
      { context: "Crazy", text: "Full moon energy 🌕" },
      { context: "Night", text: "Beautiful moon 🌕" }
    ],
    misunderstandings: ["Associated with 'lunacy'"],
    relatedEmojis: ["crescent-moon", "wolf", "night"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["full moon", "moon", "night", "werewolf", "lunar"]
  },
  {
    unicode: "🌑",
    name: "New Moon",
    slug: "new-moon",
    shortMeaning: "A dark new moon.",
    detailedMeaning: "The New Moon emoji shows a completely dark moon (new moon phase), representing new beginnings, darkness, or lunar cycles.\n\nUsed for moon phases, new beginnings, and dark aesthetics.",
    usageContexts: ["Moon phase", "New beginning", "Dark", "Lunar", "Cycle"],
    examples: [
      { context: "Phase", text: "New moon tonight 🌑" },
      { context: "New", text: "Fresh start 🌑" },
      { context: "Dark", text: "Dark vibes 🌑" }
    ],
    misunderstandings: ["Represents dark/new phase"],
    relatedEmojis: ["full-moon", "crescent-moon", "star"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["new moon", "dark", "moon", "lunar", "phase"]
  },
  {
    unicode: "⭐",
    name: "Star",
    slug: "star",
    shortMeaning: "A golden star.",
    detailedMeaning: "The Star emoji shows a classic golden star, representing excellence, ratings, achievements, and celestial objects. Stars symbolize brilliance and aspiration.\n\nUsed for ratings, achievements, favorites, and expressing excellence.",
    usageContexts: ["Rating", "Achievement", "Excellent", "Favorite", "Night sky"],
    examples: [
      { context: "Rating", text: "5 stars ⭐" },
      { context: "Excellent", text: "You're a star ⭐" },
      { context: "Favorite", text: "Starred this ⭐" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["glowing-star", "sparkles", "trophy"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["star", "rating", "excellent", "gold", "achievement"]
  },
  {
    unicode: "🌟",
    name: "Glowing Star",
    slug: "glowing-star",
    shortMeaning: "A sparkling, glowing star.",
    detailedMeaning: "The Glowing Star emoji shows a star with sparkle effects, representing something special, magical, or outstanding. It's more emphatic than the regular star.\n\nUsed for highlighting excellence, magic, and special moments.",
    usageContexts: ["Special", "Magic", "Outstanding", "Highlight", "Excellence"],
    examples: [
      { context: "Special", text: "You're amazing 🌟" },
      { context: "Magic", text: "Magical moment 🌟" },
      { context: "Highlight", text: "Star of the show 🌟" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["star", "sparkles", "shooting-star"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["star", "glowing", "special", "magic", "sparkle"]
  },
  {
    unicode: "💫",
    name: "Dizzy",
    slug: "dizzy-star",
    shortMeaning: "Stars orbiting - dizziness or amazement.",
    detailedMeaning: "The Dizzy emoji shows a star with a swirl, representing dizziness, seeing stars after impact, or being starstruck/amazed.\n\nUsed for dizziness, amazement, and whimsical/magical feelings.",
    usageContexts: ["Dizzy", "Amazed", "Starstruck", "Impact", "Magical"],
    examples: [
      { context: "Dizzy", text: "Spinning 💫" },
      { context: "Amazed", text: "Mind blown 💫" },
      { context: "Magic", text: "Magical vibes 💫" }
    ],
    misunderstandings: ["Can mean dizziness or amazement"],
    relatedEmojis: ["sparkles", "star", "collision"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["dizzy", "star", "spinning", "amazed", "magical"]
  },
  {
    unicode: "✨",
    name: "Sparkles",
    slug: "sparkles",
    shortMeaning: "Magical sparkles.",
    detailedMeaning: "The Sparkles emoji shows three sparkle stars, representing magic, glamour, excitement, and adding flair to messages. It's one of the most popular aesthetic emojis.\n\nUsed to add emphasis, excitement, magic, and aesthetic flair to any message.",
    usageContexts: ["Magic", "Glamour", "Excitement", "Aesthetic", "Emphasis"],
    examples: [
      { context: "Excited", text: "So excited ✨" },
      { context: "New", text: "Fresh start ✨" },
      { context: "Pretty", text: "Looking good ✨" }
    ],
    misunderstandings: ["Very versatile - rarely misunderstood"],
    relatedEmojis: ["star", "glowing-star", "magic-wand"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sparkles", "magic", "glamour", "shiny", "aesthetic"]
  },
  {
    unicode: "☄️",
    name: "Comet",
    slug: "comet",
    shortMeaning: "A comet with a tail.",
    detailedMeaning: "The Comet emoji shows a comet streaking through space with its tail. Comets represent rare events, speed, and cosmic phenomena.\n\nUsed for space content, rare occurrences, and dramatic entrances/exits.",
    usageContexts: ["Space", "Rare", "Speed", "Cosmic", "Dramatic"],
    examples: [
      { context: "Rare", text: "Once in a lifetime ☄️" },
      { context: "Fast", text: "Blazing through ☄️" },
      { context: "Space", text: "Cosmic vibes ☄️" }
    ],
    misunderstandings: ["Sometimes confused with meteor"],
    relatedEmojis: ["shooting-star", "rocket", "star"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["comet", "space", "cosmic", "rare", "tail"]
  },
  {
    unicode: "🌊",
    name: "Water Wave",
    slug: "water-wave",
    shortMeaning: "A large ocean wave.",
    detailedMeaning: "The Water Wave emoji shows a large curling ocean wave, representing the sea, surfing, and powerful water. It's inspired by Hokusai's famous wave artwork.\n\nUsed for beach/ocean content, surfing, and making waves (impact).",
    usageContexts: ["Ocean", "Beach", "Surfing", "Impact", "Water"],
    examples: [
      { context: "Beach", text: "Beach day 🌊" },
      { context: "Surf", text: "Catching waves 🌊" },
      { context: "Impact", text: "Making waves 🌊" }
    ],
    misunderstandings: ["Clear water meaning"],
    relatedEmojis: ["beach", "surfer", "dolphin"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["wave", "ocean", "water", "beach", "surf"]
  },
  {
    unicode: "🔥",
    name: "Fire",
    slug: "fire",
    shortMeaning: "Flames - something hot or awesome.",
    detailedMeaning: "The Fire emoji shows orange/red flames, representing literal fire, something hot/attractive, something excellent, or trending content.\n\nUsed extensively to express that something is amazing, hot, or exciting. One of the most popular emojis.",
    usageContexts: ["Hot", "Awesome", "Trending", "Attractive", "Intense"],
    examples: [
      { context: "Amazing", text: "This is fire 🔥" },
      { context: "Hot", text: "Looking hot 🔥" },
      { context: "Trending", text: "Trending now 🔥" }
    ],
    misunderstandings: ["Very versatile - widely understood"],
    relatedEmojis: ["hundred-points", "star-struck", "hot-face"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["fire", "hot", "lit", "awesome", "flames"]
  },
  {
    unicode: "💧",
    name: "Droplet",
    slug: "droplet",
    shortMeaning: "A water droplet.",
    detailedMeaning: "The Droplet emoji shows a single water drop, representing water, sweat, tears, or sometimes used suggestively.\n\nUsed for water content, sweating, hydration, and various contexts involving liquids.",
    usageContexts: ["Water", "Sweat", "Tears", "Hydration", "Liquid"],
    examples: [
      { context: "Water", text: "Stay hydrated 💧" },
      { context: "Sweat", text: "What a workout 💧" },
      { context: "Tears", text: "Crying 💧" }
    ],
    misunderstandings: ["Can be suggestive in certain contexts"],
    relatedEmojis: ["sweat-droplets", "water-wave", "rain"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["water", "drop", "sweat", "tear", "hydrate"]
  },
  {
    unicode: "💦",
    name: "Sweat Droplets",
    slug: "sweat-droplets",
    shortMeaning: "Multiple sweat or water droplets.",
    detailedMeaning: "The Sweat Droplets emoji shows multiple water drops spraying, representing sweating from exercise, heat, nervousness, or sometimes used suggestively.\n\nUsed for workouts, heat, exertion, and various adult contexts.",
    usageContexts: ["Sweat", "Exercise", "Hot", "Effort", "Suggestive"],
    examples: [
      { context: "Workout", text: "Post-gym 💦" },
      { context: "Hot", text: "So hot today 💦" },
      { context: "Work", text: "Working hard 💦" }
    ],
    misunderstandings: ["Often used suggestively"],
    relatedEmojis: ["droplet", "hot-face", "exercise"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["sweat", "splash", "water", "workout", "hot"]
  },
  // MORE PETS
  {
    unicode: "🐕",
    name: "Dog",
    slug: "dog",
    shortMeaning: "A full-body dog.",
    detailedMeaning: "The Dog emoji shows a full-body dog, representing dogs, pets, and man's best friend.\n\nUsed for dog content, walking dogs, and pet appreciation.",
    usageContexts: ["Dog", "Pet", "Walk", "Loyal", "Friend"],
    examples: [
      { context: "Pet", text: "My best friend 🐕" },
      { context: "Walk", text: "Dog walk time 🐕" },
      { context: "Love", text: "Dog life 🐕" }
    ],
    misunderstandings: ["Clear dog meaning"],
    relatedEmojis: ["dog-face", "guide-dog", "paw-prints"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["dog", "pet", "puppy", "canine", "loyal"]
  },
  {
    unicode: "🦮",
    name: "Guide Dog",
    slug: "guide-dog",
    shortMeaning: "A guide dog for the visually impaired.",
    detailedMeaning: "The Guide Dog emoji shows a guide dog with harness, representing service animals and accessibility.\n\nUsed for guide dogs, accessibility discussions, and service animals.",
    usageContexts: ["Service", "Guide", "Accessibility", "Helper", "Blind"],
    examples: [
      { context: "Service", text: "Service dog 🦮" },
      { context: "Guide", text: "Guide dog 🦮" },
      { context: "Helper", text: "Best helper 🦮" }
    ],
    misunderstandings: ["Specifically guide/service dog"],
    relatedEmojis: ["dog", "dog-face", "person-with-white-cane"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["guide", "dog", "service", "helper", "accessibility"]
  },
  {
    unicode: "🐕‍🦺",
    name: "Service Dog",
    slug: "service-dog",
    shortMeaning: "A service dog wearing a vest.",
    detailedMeaning: "The Service Dog emoji shows a dog wearing a service vest, representing trained assistance animals.\n\nUsed for service dogs, working animals, and disability assistance.",
    usageContexts: ["Service", "Working", "Assistance", "Helper", "Trained"],
    examples: [
      { context: "Service", text: "Working dog 🐕‍🦺" },
      { context: "Help", text: "Service animal 🐕‍🦺" },
      { context: "Trained", text: "Trained helper 🐕‍🦺" }
    ],
    misunderstandings: ["Service/working dog specifically"],
    relatedEmojis: ["guide-dog", "dog", "dog-face"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["service", "dog", "working", "vest", "helper"]
  },
  {
    unicode: "🐩",
    name: "Poodle",
    slug: "poodle",
    shortMeaning: "A groomed poodle dog.",
    detailedMeaning: "The Poodle emoji shows a fancy groomed poodle, representing poodles, fancy dogs, and dog grooming.\n\nUsed for poodle lovers, fancy pets, and grooming content.",
    usageContexts: ["Poodle", "Fancy", "Groomed", "Elegant", "Dog"],
    examples: [
      { context: "Fancy", text: "Fancy puppy 🐩" },
      { context: "Groomed", text: "Fresh from the groomer 🐩" },
      { context: "Poodle", text: "Poodle life 🐩" }
    ],
    misunderstandings: ["Specifically poodle breed"],
    relatedEmojis: ["dog-face", "dog", "scissors"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["poodle", "fancy", "groomed", "dog", "elegant"]
  },
  {
    unicode: "🐈",
    name: "Cat",
    slug: "cat",
    shortMeaning: "A full-body cat.",
    detailedMeaning: "The Cat emoji shows a full-body cat, representing cats, pets, and feline companions.\n\nUsed for cat content, pet appreciation, and feline love.",
    usageContexts: ["Cat", "Pet", "Feline", "Independent", "Cute"],
    examples: [
      { context: "Pet", text: "Cat life 🐈" },
      { context: "Love", text: "My fur baby 🐈" },
      { context: "Cat", text: "Cat person 🐈" }
    ],
    misunderstandings: ["Clear cat meaning"],
    relatedEmojis: ["cat-face", "black-cat", "paw-prints"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cat", "pet", "feline", "kitty", "meow"]
  },
  {
    unicode: "🐈‍⬛",
    name: "Black Cat",
    slug: "black-cat",
    shortMeaning: "A black cat.",
    detailedMeaning: "The Black Cat emoji shows a black cat, associated with Halloween, superstition, and witches.\n\nUsed for Halloween, superstition, black cats, and spooky vibes.",
    usageContexts: ["Halloween", "Superstition", "Witchy", "Spooky", "Cat"],
    examples: [
      { context: "Halloween", text: "Spooky season 🐈‍⬛" },
      { context: "Witchy", text: "Witch vibes 🐈‍⬛" },
      { context: "Pet", text: "My black cat 🐈‍⬛" }
    ],
    misunderstandings: ["Superstition associations"],
    relatedEmojis: ["cat", "jack-o-lantern", "witch"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["black cat", "Halloween", "superstition", "witchy", "spooky"]
  },
  {
    unicode: "🐇",
    name: "Rabbit",
    slug: "rabbit",
    shortMeaning: "A full-body white rabbit.",
    detailedMeaning: "The Rabbit emoji shows a white rabbit, representing rabbits, Easter, and cuteness.\n\nUsed for Easter, pet rabbits, and cute animal content.",
    usageContexts: ["Rabbit", "Easter", "Cute", "Pet", "Bunny"],
    examples: [
      { context: "Easter", text: "Easter bunny 🐇" },
      { context: "Pet", text: "Pet rabbit 🐇" },
      { context: "Cute", text: "So fluffy 🐇" }
    ],
    misunderstandings: ["Clear rabbit meaning"],
    relatedEmojis: ["rabbit-face", "carrot", "egg"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rabbit", "bunny", "Easter", "pet", "cute"]
  },
  {
    unicode: "🐰",
    name: "Rabbit Face",
    slug: "rabbit-face",
    shortMeaning: "A cute rabbit face.",
    detailedMeaning: "The Rabbit Face emoji shows an adorable bunny face, representing cuteness, Easter, and innocence.\n\nUsed for cute content, Easter, and expressing innocence.",
    usageContexts: ["Cute", "Easter", "Innocent", "Bunny", "Adorable"],
    examples: [
      { context: "Cute", text: "Bunny face 🐰" },
      { context: "Easter", text: "Happy Easter 🐰" },
      { context: "Innocent", text: "Who, me? 🐰" }
    ],
    misunderstandings: ["Clear bunny meaning"],
    relatedEmojis: ["rabbit", "carrot", "egg"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["rabbit", "bunny", "face", "cute", "Easter"]
  },
  {
    unicode: "🐹",
    name: "Hamster",
    slug: "hamster",
    shortMeaning: "A cute hamster face.",
    detailedMeaning: "The Hamster emoji shows a hamster with chubby cheeks, representing hamsters, small pets, and cuteness.\n\nUsed for small pets, cute animal content, and hoarding jokes.",
    usageContexts: ["Hamster", "Pet", "Cute", "Small", "Cheeks"],
    examples: [
      { context: "Pet", text: "My hamster 🐹" },
      { context: "Cute", text: "Chubby cheeks 🐹" },
      { context: "Hoarding", text: "Saving snacks 🐹" }
    ],
    misunderstandings: ["Clear hamster meaning"],
    relatedEmojis: ["mouse", "rat", "wheel"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["hamster", "pet", "cheeks", "cute", "small"]
  },
  {
    unicode: "🐾",
    name: "Paw Prints",
    slug: "paw-prints",
    shortMeaning: "Animal paw prints.",
    detailedMeaning: "The Paw Prints emoji shows animal footprints, representing pets, animals, and tracking.\n\nUsed for pet content, animal lovers, and furry fandom.",
    usageContexts: ["Pets", "Animals", "Tracking", "Furry", "Prints"],
    examples: [
      { context: "Pet", text: "Pet parent 🐾" },
      { context: "Love", text: "Animal lover 🐾" },
      { context: "Track", text: "Following tracks 🐾" }
    ],
    misunderstandings: ["Clear paw print meaning"],
    relatedEmojis: ["dog", "cat", "bear"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["paw", "prints", "pet", "animal", "tracks"]
  },
  // MORE WILDLIFE
  {
    unicode: "🦁",
    name: "Lion",
    slug: "lion",
    shortMeaning: "A lion face - king of the jungle.",
    detailedMeaning: "The Lion emoji shows a majestic lion face, representing power, royalty, and the Leo zodiac sign.\n\nUsed for strength, bravery, Leo zodiac, and African wildlife.",
    usageContexts: ["Power", "Leo", "King", "Brave", "Safari"],
    examples: [
      { context: "Strong", text: "King of the jungle 🦁" },
      { context: "Leo", text: "Leo season 🦁" },
      { context: "Brave", text: "Brave heart 🦁" }
    ],
    misunderstandings: ["Clear lion/Leo meaning"],
    relatedEmojis: ["tiger", "crown", "leo"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["lion", "king", "Leo", "brave", "mane"]
  },
  {
    unicode: "🐯",
    name: "Tiger Face",
    slug: "tiger-face",
    shortMeaning: "A fierce tiger face.",
    detailedMeaning: "The Tiger emoji shows a tiger face, representing power, fierceness, and the Chinese zodiac.\n\nUsed for strength, Chinese New Year, and fierce energy.",
    usageContexts: ["Fierce", "Power", "Chinese zodiac", "Strong", "Wild"],
    examples: [
      { context: "Fierce", text: "Eye of the tiger 🐯" },
      { context: "Strong", text: "Fierce energy 🐯" },
      { context: "Zodiac", text: "Year of the Tiger 🐯" }
    ],
    misunderstandings: ["Clear tiger meaning"],
    relatedEmojis: ["lion", "leopard", "cat"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["tiger", "fierce", "power", "stripes", "zodiac"]
  },
  {
    unicode: "🐆",
    name: "Leopard",
    slug: "leopard",
    shortMeaning: "A spotted leopard.",
    detailedMeaning: "The Leopard emoji shows a leopard with spots, representing leopards, cheetahs, and wild cats.\n\nUsed for wild cats, speed (cheetah), and spotted patterns.",
    usageContexts: ["Leopard", "Spots", "Wild", "Fast", "Safari"],
    examples: [
      { context: "Fast", text: "Fast like a leopard 🐆" },
      { context: "Wild", text: "Wild cat 🐆" },
      { context: "Pattern", text: "Leopard print 🐆" }
    ],
    misunderstandings: ["Can mean leopard or cheetah"],
    relatedEmojis: ["tiger", "lion", "jaguar"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["leopard", "cheetah", "spots", "fast", "wild"]
  },
  {
    unicode: "🐺",
    name: "Wolf",
    slug: "wolf",
    shortMeaning: "A wolf face.",
    detailedMeaning: "The Wolf emoji shows a grey wolf face, representing wolves, pack mentality, and wildness.\n\nUsed for wolf content, lone wolf personality, and howling at the moon.",
    usageContexts: ["Wolf", "Pack", "Lone", "Wild", "Howl"],
    examples: [
      { context: "Lone", text: "Lone wolf 🐺" },
      { context: "Pack", text: "Pack mentality 🐺" },
      { context: "Howl", text: "Howling at the moon 🐺" }
    ],
    misunderstandings: ["Clear wolf meaning"],
    relatedEmojis: ["fox", "dog", "moon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["wolf", "pack", "lone", "howl", "wild"]
  },
  {
    unicode: "🦊",
    name: "Fox",
    slug: "fox",
    shortMeaning: "A clever fox face.",
    detailedMeaning: "The Fox emoji shows an orange fox face, representing foxes, cleverness, and cunning.\n\nUsed for cleverness, 'foxy' (attractive), and fox appreciation.",
    usageContexts: ["Clever", "Foxy", "Cunning", "Cute", "Sly"],
    examples: [
      { context: "Clever", text: "Clever like a fox 🦊" },
      { context: "Foxy", text: "Looking foxy 🦊" },
      { context: "Cute", text: "So cute 🦊" }
    ],
    misunderstandings: ["Foxy can mean attractive"],
    relatedEmojis: ["wolf", "dog", "raccoon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["fox", "clever", "foxy", "cunning", "orange"]
  },
  {
    unicode: "🦌",
    name: "Deer",
    slug: "deer",
    shortMeaning: "A deer with antlers.",
    detailedMeaning: "The Deer emoji shows a deer with antlers, representing deer, nature, and grace.\n\nUsed for hunting, forest animals, Christmas (reindeer), and grace.",
    usageContexts: ["Deer", "Forest", "Hunting", "Grace", "Nature"],
    examples: [
      { context: "Forest", text: "Forest friend 🦌" },
      { context: "Grace", text: "Graceful 🦌" },
      { context: "Nature", text: "Nature walk 🦌" }
    ],
    misunderstandings: ["Clear deer meaning"],
    relatedEmojis: ["forest", "antlers", "moose"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["deer", "antlers", "forest", "grace", "nature"]
  },
  {
    unicode: "🦬",
    name: "Bison",
    slug: "bison",
    shortMeaning: "An American bison/buffalo.",
    detailedMeaning: "The Bison emoji shows an American bison, representing the American West, wildlife, and strength.\n\nUsed for American wildlife, Western themes, and strength.",
    usageContexts: ["Bison", "Buffalo", "American", "West", "Strong"],
    examples: [
      { context: "American", text: "American wildlife 🦬" },
      { context: "West", text: "Wild West 🦬" },
      { context: "Strong", text: "Strong as a buffalo 🦬" }
    ],
    misunderstandings: ["American bison specifically"],
    relatedEmojis: ["cow", "ox", "bull"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["bison", "buffalo", "American", "west", "strong"]
  },
  {
    unicode: "🐂",
    name: "Ox",
    slug: "ox",
    shortMeaning: "An ox or bull.",
    detailedMeaning: "The Ox emoji shows an ox, representing strength, stubbornness, and the Chinese zodiac Year of the Ox.\n\nUsed for strength, Chinese New Year, and determination.",
    usageContexts: ["Ox", "Strong", "Zodiac", "Stubborn", "Work"],
    examples: [
      { context: "Zodiac", text: "Year of the Ox 🐂" },
      { context: "Strong", text: "Strong as an ox 🐂" },
      { context: "Work", text: "Working hard 🐂" }
    ],
    misunderstandings: ["Chinese zodiac animal"],
    relatedEmojis: ["cow", "bull", "bison"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["ox", "bull", "strong", "zodiac", "work"]
  },
  {
    unicode: "🐄",
    name: "Cow",
    slug: "cow",
    shortMeaning: "A spotted dairy cow.",
    detailedMeaning: "The Cow emoji shows a black and white dairy cow, representing cows, milk, and farm life.\n\nUsed for farms, dairy, and country life.",
    usageContexts: ["Cow", "Dairy", "Farm", "Milk", "Country"],
    examples: [
      { context: "Farm", text: "Farm life 🐄" },
      { context: "Dairy", text: "Fresh milk 🐄" },
      { context: "Country", text: "Country vibes 🐄" }
    ],
    misunderstandings: ["Clear cow meaning"],
    relatedEmojis: ["milk", "cheese", "farm"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cow", "dairy", "milk", "farm", "spots"]
  },
  {
    unicode: "🐖",
    name: "Pig",
    slug: "pig",
    shortMeaning: "A full-body pig.",
    detailedMeaning: "The Pig emoji shows a pink pig, representing pigs, farms, and the Chinese zodiac.\n\nUsed for farm animals, Chinese New Year, and eating/indulgence.",
    usageContexts: ["Pig", "Farm", "Zodiac", "Eating", "Pink"],
    examples: [
      { context: "Zodiac", text: "Year of the Pig 🐖" },
      { context: "Farm", text: "Farm animal 🐖" },
      { context: "Eating", text: "Pigging out 🐖" }
    ],
    misunderstandings: ["Chinese zodiac animal"],
    relatedEmojis: ["pig-face", "bacon", "farm"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["pig", "pink", "farm", "zodiac", "oink"]
  },
  {
    unicode: "🐑",
    name: "Ewe",
    slug: "ewe",
    shortMeaning: "A fluffy white sheep.",
    detailedMeaning: "The Ewe emoji shows a white sheep, representing sheep, wool, and gentle nature.\n\nUsed for sheep, counting sheep (sleep), and farm content.",
    usageContexts: ["Sheep", "Wool", "Sleep", "Farm", "Fluffy"],
    examples: [
      { context: "Sleep", text: "Counting sheep 🐑" },
      { context: "Fluffy", text: "So fluffy 🐑" },
      { context: "Farm", text: "Farm life 🐑" }
    ],
    misunderstandings: ["Clear sheep meaning"],
    relatedEmojis: ["ram", "goat", "wool"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["sheep", "ewe", "wool", "fluffy", "sleep"]
  },
  {
    unicode: "🐐",
    name: "Goat",
    slug: "goat",
    shortMeaning: "A goat with horns.",
    detailedMeaning: "The Goat emoji shows a goat, representing actual goats and 'GOAT' (Greatest Of All Time) slang.\n\nUsed for 'GOAT' status, Capricorn zodiac, and farm animals.",
    usageContexts: ["GOAT", "Capricorn", "Farm", "Greatest", "Stubborn"],
    examples: [
      { context: "Greatest", text: "He's the GOAT 🐐" },
      { context: "Capricorn", text: "Capricorn energy 🐐" },
      { context: "Farm", text: "Farm goat 🐐" }
    ],
    misunderstandings: ["GOAT slang is common"],
    relatedEmojis: ["trophy", "crown", "sheep"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["goat", "GOAT", "greatest", "Capricorn", "horns"]
  },
  {
    unicode: "🦘",
    name: "Kangaroo",
    slug: "kangaroo",
    shortMeaning: "An Australian kangaroo.",
    detailedMeaning: "The Kangaroo emoji shows a kangaroo with joey, representing Australia and unique wildlife.\n\nUsed for Australian content, jumping, and carrying (joey in pouch).",
    usageContexts: ["Australia", "Jumping", "Outback", "Joey", "Wildlife"],
    examples: [
      { context: "Australia", text: "Aussie vibes 🦘" },
      { context: "Jump", text: "Jumping around 🦘" },
      { context: "Wildlife", text: "Australian wildlife 🦘" }
    ],
    misunderstandings: ["Clear Australian meaning"],
    relatedEmojis: ["koala", "australia-flag", "outback"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["kangaroo", "Australia", "joey", "jump", "outback"]
  },
  // MORE BIRDS
  {
    unicode: "🦅",
    name: "Eagle",
    slug: "eagle",
    shortMeaning: "A majestic bald eagle.",
    detailedMeaning: "The Eagle emoji shows a bald eagle, representing America, freedom, and power.\n\nUsed for patriotic content, freedom, and majestic birds.",
    usageContexts: ["America", "Freedom", "Power", "Majestic", "Patriotic"],
    examples: [
      { context: "America", text: "Murica 🦅" },
      { context: "Freedom", text: "Freedom 🦅" },
      { context: "Power", text: "Soaring high 🦅" }
    ],
    misunderstandings: ["American patriotic symbol"],
    relatedEmojis: ["us-flag", "statue-of-liberty", "bird"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["eagle", "America", "freedom", "bald", "majestic"]
  },
  {
    unicode: "🦆",
    name: "Duck",
    slug: "duck",
    shortMeaning: "A mallard duck.",
    detailedMeaning: "The Duck emoji shows a duck, representing ducks, ponds, and the phrase 'if it looks like a duck.'\n\nUsed for ducks, water birds, and ducking (dodging).",
    usageContexts: ["Duck", "Pond", "Water", "Cute", "Quack"],
    examples: [
      { context: "Pond", text: "Duck pond 🦆" },
      { context: "Cute", text: "Quack quack 🦆" },
      { context: "Dodge", text: "Duck and cover 🦆" }
    ],
    misunderstandings: ["Clear duck meaning"],
    relatedEmojis: ["swan", "goose", "pond"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["duck", "mallard", "quack", "pond", "water"]
  },
  {
    unicode: "🦢",
    name: "Swan",
    slug: "swan",
    shortMeaning: "An elegant white swan.",
    detailedMeaning: "The Swan emoji shows a graceful white swan, representing beauty, elegance, and transformation (ugly duckling story).\n\nUsed for grace, ballet, romance, and elegant beauty.",
    usageContexts: ["Swan", "Elegant", "Grace", "Ballet", "Beauty"],
    examples: [
      { context: "Elegant", text: "Swan-like grace 🦢" },
      { context: "Ballet", text: "Swan Lake 🦢" },
      { context: "Beauty", text: "Beautiful 🦢" }
    ],
    misunderstandings: ["Clear swan meaning"],
    relatedEmojis: ["duck", "goose", "ballet"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["swan", "elegant", "grace", "white", "beauty"]
  },
  {
    unicode: "🦉",
    name: "Owl",
    slug: "owl",
    shortMeaning: "A wise owl.",
    detailedMeaning: "The Owl emoji shows an owl, representing wisdom, night, and watchfulness.\n\nUsed for wisdom, night owls, Halloween, and being observant.",
    usageContexts: ["Owl", "Wise", "Night", "Watchful", "Halloween"],
    examples: [
      { context: "Wise", text: "Wise owl 🦉" },
      { context: "Night", text: "Night owl 🦉" },
      { context: "Watch", text: "Keeping watch 🦉" }
    ],
    misunderstandings: ["Clear owl meaning"],
    relatedEmojis: ["moon", "night", "wisdom"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["owl", "wise", "night", "hoot", "wisdom"]
  },
  {
    unicode: "🦜",
    name: "Parrot",
    slug: "parrot",
    shortMeaning: "A colorful parrot.",
    detailedMeaning: "The Parrot emoji shows a colorful parrot, representing tropical birds, talking/mimicking, and pirates.\n\nUsed for tropical vibes, repeating things, and pirate themes.",
    usageContexts: ["Parrot", "Tropical", "Repeat", "Colorful", "Pirate"],
    examples: [
      { context: "Repeat", text: "Parrot everything 🦜" },
      { context: "Tropical", text: "Tropical bird 🦜" },
      { context: "Pirate", text: "Pirate's friend 🦜" }
    ],
    misunderstandings: ["Can mean repeating/copying"],
    relatedEmojis: ["tropical", "pirate", "colorful"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["parrot", "tropical", "colorful", "talk", "pirate"]
  },
  {
    unicode: "🦚",
    name: "Peacock",
    slug: "peacock",
    shortMeaning: "A peacock with colorful feathers.",
    detailedMeaning: "The Peacock emoji shows a peacock displaying feathers, representing beauty, pride, and showing off.\n\nUsed for beauty, showing off, and colorful displays.",
    usageContexts: ["Peacock", "Beautiful", "Proud", "Show off", "Colorful"],
    examples: [
      { context: "Proud", text: "Proud peacock 🦚" },
      { context: "Beautiful", text: "Stunning colors 🦚" },
      { context: "Show off", text: "Showing off 🦚" }
    ],
    misunderstandings: ["Can mean showing off"],
    relatedEmojis: ["feather", "rainbow", "sparkles"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["peacock", "feathers", "proud", "beautiful", "colors"]
  },
  {
    unicode: "🐧",
    name: "Penguin",
    slug: "penguin",
    shortMeaning: "A cute black and white penguin.",
    detailedMeaning: "The Penguin emoji shows an adorable penguin, representing cold climates, Antarctica, and cute waddling birds.\n\nUsed for penguins, cold weather, Linux, and cuteness.",
    usageContexts: ["Penguin", "Cold", "Antarctica", "Cute", "Linux"],
    examples: [
      { context: "Cold", text: "Penguin weather 🐧" },
      { context: "Cute", text: "Waddle waddle 🐧" },
      { context: "Linux", text: "Linux user 🐧" }
    ],
    misunderstandings: ["Linux mascot"],
    relatedEmojis: ["snowflake", "ice", "antarctic"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["penguin", "cold", "Antarctica", "cute", "waddle"]
  },
  {
    unicode: "🦩",
    name: "Flamingo",
    slug: "flamingo",
    shortMeaning: "A pink flamingo.",
    detailedMeaning: "The Flamingo emoji shows a pink flamingo, representing Florida, tropics, and lawn ornaments.\n\nUsed for tropical vibes, Florida, and pink aesthetics.",
    usageContexts: ["Flamingo", "Pink", "Florida", "Tropical", "Aesthetic"],
    examples: [
      { context: "Florida", text: "Florida vibes 🦩" },
      { context: "Pink", text: "Pretty in pink 🦩" },
      { context: "Tropical", text: "Tropical bird 🦩" }
    ],
    misunderstandings: ["Florida association"],
    relatedEmojis: ["palm-tree", "pink-heart", "tropical"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bird",
    keywords: ["flamingo", "pink", "Florida", "tropical", "bird"]
  },
  // MORE MARINE LIFE
  {
    unicode: "🐳",
    name: "Spouting Whale",
    slug: "spouting-whale",
    shortMeaning: "A whale spouting water.",
    detailedMeaning: "The Spouting Whale emoji shows a whale with water spout, representing whales, ocean life, and size.\n\nUsed for whales, ocean content, and crypto (whale = big investor).",
    usageContexts: ["Whale", "Ocean", "Big", "Crypto", "Marine"],
    examples: [
      { context: "Ocean", text: "Whale watching 🐳" },
      { context: "Crypto", text: "Crypto whale 🐳" },
      { context: "Size", text: "Whale of a time 🐳" }
    ],
    misunderstandings: ["Crypto whale meaning"],
    relatedEmojis: ["whale", "dolphin", "ocean"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["whale", "spout", "ocean", "big", "marine"]
  },
  {
    unicode: "🐬",
    name: "Dolphin",
    slug: "dolphin",
    shortMeaning: "A friendly dolphin.",
    detailedMeaning: "The Dolphin emoji shows a playful dolphin, representing dolphins, intelligence, and ocean fun.\n\nUsed for ocean activities, intelligence, and playful energy.",
    usageContexts: ["Dolphin", "Smart", "Playful", "Ocean", "Beach"],
    examples: [
      { context: "Ocean", text: "Swimming with dolphins 🐬" },
      { context: "Smart", text: "Smart as a dolphin 🐬" },
      { context: "Playful", text: "Playful vibes 🐬" }
    ],
    misunderstandings: ["Clear dolphin meaning"],
    relatedEmojis: ["whale", "ocean", "wave"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["dolphin", "smart", "playful", "ocean", "marine"]
  },
  {
    unicode: "🦈",
    name: "Shark",
    slug: "shark",
    shortMeaning: "A shark.",
    detailedMeaning: "The Shark emoji shows a grey shark, representing sharks, danger, and predators.\n\nUsed for sharks, Shark Week, danger, and aggressive business practices.",
    usageContexts: ["Shark", "Danger", "Predator", "Ocean", "Week"],
    examples: [
      { context: "Danger", text: "Shark alert 🦈" },
      { context: "Week", text: "Shark week 🦈" },
      { context: "Business", text: "Shark mode 🦈" }
    ],
    misunderstandings: ["Can mean aggressive business"],
    relatedEmojis: ["ocean", "fish", "danger"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-marine",
    keywords: ["shark", "danger", "predator", "ocean", "week"]
  },
  {
    unicode: "🐢",
    name: "Turtle",
    slug: "turtle",
    shortMeaning: "A green turtle.",
    detailedMeaning: "The Turtle emoji shows a turtle, representing slowness, longevity, and steady progress.\n\nUsed for slow pace, sea turtles, and 'slow and steady wins the race.'",
    usageContexts: ["Turtle", "Slow", "Steady", "Ocean", "Longevity"],
    examples: [
      { context: "Slow", text: "Taking it slow 🐢" },
      { context: "Steady", text: "Slow and steady 🐢" },
      { context: "Ocean", text: "Sea turtle 🐢" }
    ],
    misunderstandings: ["Clear turtle meaning"],
    relatedEmojis: ["snail", "tortoise", "ocean"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["turtle", "slow", "steady", "shell", "ocean"]
  },
  {
    unicode: "🦋",
    name: "Butterfly",
    slug: "butterfly",
    shortMeaning: "A colorful butterfly.",
    detailedMeaning: "The Butterfly emoji shows a beautiful butterfly, representing transformation, beauty, and butterflies in stomach.\n\nUsed for transformation, spring, nature, and nervous excitement.",
    usageContexts: ["Butterfly", "Transform", "Beautiful", "Spring", "Nervous"],
    examples: [
      { context: "Transform", text: "Glow up 🦋" },
      { context: "Nervous", text: "Butterflies in my stomach 🦋" },
      { context: "Spring", text: "Spring vibes 🦋" }
    ],
    misunderstandings: ["Transformation meaning"],
    relatedEmojis: ["caterpillar", "flower", "spring"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["butterfly", "transform", "beautiful", "wings", "spring"]
  },
  {
    unicode: "🐝",
    name: "Honeybee",
    slug: "honeybee",
    shortMeaning: "A busy bee.",
    detailedMeaning: "The Honeybee emoji shows a honeybee, representing hard work, bees, and Beyoncé fans (Beyhive).\n\nUsed for being busy, productivity, honey, and Beyoncé.",
    usageContexts: ["Bee", "Busy", "Work", "Honey", "Beyoncé"],
    examples: [
      { context: "Busy", text: "Busy bee 🐝" },
      { context: "Work", text: "Working hard 🐝" },
      { context: "Fan", text: "Beyhive 🐝" }
    ],
    misunderstandings: ["Beyoncé fandom"],
    relatedEmojis: ["honey", "flower", "work"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["bee", "busy", "honey", "work", "Beyoncé"]
  },
  {
    unicode: "🐛",
    name: "Bug",
    slug: "bug",
    shortMeaning: "A green caterpillar/bug.",
    detailedMeaning: "The Bug emoji shows a caterpillar, representing bugs, insects, and software bugs.\n\nUsed for insects, software bugs, and transformation (future butterfly).",
    usageContexts: ["Bug", "Caterpillar", "Software", "Insect", "Transform"],
    examples: [
      { context: "Software", text: "Found a bug 🐛" },
      { context: "Caterpillar", text: "Future butterfly 🐛" },
      { context: "Insect", text: "Little bug 🐛" }
    ],
    misunderstandings: ["Software bug meaning"],
    relatedEmojis: ["butterfly", "lady-beetle", "ant"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["bug", "caterpillar", "insect", "software", "crawl"]
  },
  {
    unicode: "🐜",
    name: "Ant",
    slug: "ant",
    shortMeaning: "A small ant.",
    detailedMeaning: "The Ant emoji shows a tiny ant, representing ants, hard work, and small but mighty.\n\nUsed for ants, teamwork, being small, and picnic problems.",
    usageContexts: ["Ant", "Small", "Work", "Team", "Picnic"],
    examples: [
      { context: "Work", text: "Ant work ethic 🐜" },
      { context: "Small", text: "Tiny but mighty 🐜" },
      { context: "Picnic", text: "Ants at a picnic 🐜" }
    ],
    misunderstandings: ["Clear ant meaning"],
    relatedEmojis: ["bee", "bug", "spider"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["ant", "small", "work", "team", "insect"]
  },
  {
    unicode: "🕷️",
    name: "Spider",
    slug: "spider",
    shortMeaning: "A black spider.",
    detailedMeaning: "The Spider emoji shows a spider, representing spiders, Halloween, and spider webs.\n\nUsed for spiders, Halloween, fears, and web content.",
    usageContexts: ["Spider", "Halloween", "Web", "Scary", "Creepy"],
    examples: [
      { context: "Halloween", text: "Spooky spider 🕷️" },
      { context: "Fear", text: "Spider alert 🕷️" },
      { context: "Web", text: "Spider web 🕷️" }
    ],
    misunderstandings: ["Often associated with fear"],
    relatedEmojis: ["web", "Halloween", "creepy"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["spider", "web", "Halloween", "creepy", "eight legs"]
  },
  {
    unicode: "🦎",
    name: "Lizard",
    slug: "lizard",
    shortMeaning: "A green lizard.",
    detailedMeaning: "The Lizard emoji shows a green lizard, representing lizards, reptiles, and cold-blooded creatures.\n\nUsed for lizards, reptile pets, and sunbathing.",
    usageContexts: ["Lizard", "Reptile", "Pet", "Sunbathing", "Cold-blooded"],
    examples: [
      { context: "Pet", text: "Pet lizard 🦎" },
      { context: "Sun", text: "Sunbathing like a lizard 🦎" },
      { context: "Reptile", text: "Reptile friend 🦎" }
    ],
    misunderstandings: ["Clear lizard meaning"],
    relatedEmojis: ["snake", "gecko", "chameleon"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["lizard", "reptile", "green", "sun", "cold-blooded"]
  },
  {
    unicode: "🐍",
    name: "Snake",
    slug: "snake",
    shortMeaning: "A green snake.",
    detailedMeaning: "The Snake emoji shows a snake, representing snakes, sneakiness, and betrayal.\n\nUsed for snakes, sneaky behavior, and calling someone a 'snake.'",
    usageContexts: ["Snake", "Sneaky", "Betrayal", "Reptile", "Sly"],
    examples: [
      { context: "Sneaky", text: "Such a snake 🐍" },
      { context: "Pet", text: "Pet snake 🐍" },
      { context: "Zodiac", text: "Year of the Snake 🐍" }
    ],
    misunderstandings: ["Can mean betrayal/sneaky"],
    relatedEmojis: ["lizard", "dragon", "backstab"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-reptile",
    keywords: ["snake", "sneaky", "reptile", "sly", "betrayal"]
  },
  {
    unicode: "🐸",
    name: "Frog",
    slug: "frog",
    shortMeaning: "A green frog face.",
    detailedMeaning: "The Frog emoji shows a frog face, representing frogs, rainy weather, and memes (Kermit, Pepe).\n\nUsed for frogs, 'but that's none of my business' meme, and rain.",
    usageContexts: ["Frog", "Meme", "Rain", "Green", "Pond"],
    examples: [
      { context: "Meme", text: "But that's none of my business 🐸" },
      { context: "Rain", text: "Frog weather 🐸" },
      { context: "Cute", text: "Ribbit 🐸" }
    ],
    misunderstandings: ["Kermit tea meme"],
    relatedEmojis: ["tea", "lily-pad", "rain"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-amphibian",
    keywords: ["frog", "ribbit", "green", "meme", "tea"]
  },
  // MORE PLANTS
  {
    unicode: "🌵",
    name: "Cactus",
    slug: "cactus",
    shortMeaning: "A green cactus.",
    detailedMeaning: "The Cactus emoji shows a desert cactus, representing deserts, the Southwest, and prickly personalities.\n\nUsed for desert vibes, Arizona/Texas, and being tough/resilient.",
    usageContexts: ["Cactus", "Desert", "Southwest", "Prickly", "Tough"],
    examples: [
      { context: "Desert", text: "Desert vibes 🌵" },
      { context: "Arizona", text: "Arizona life 🌵" },
      { context: "Prickly", text: "Don't touch 🌵" }
    ],
    misunderstandings: ["Clear cactus meaning"],
    relatedEmojis: ["desert", "sun", "cowboy"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["cactus", "desert", "Southwest", "prickly", "tough"]
  },
  {
    unicode: "🌴",
    name: "Palm Tree",
    slug: "palm-tree",
    shortMeaning: "A tropical palm tree.",
    detailedMeaning: "The Palm Tree emoji shows a palm tree, representing tropical places, beaches, and vacations.\n\nUsed for tropical vibes, beaches, Florida/California, and island life.",
    usageContexts: ["Tropical", "Beach", "Vacation", "Florida", "Island"],
    examples: [
      { context: "Beach", text: "Beach life 🌴" },
      { context: "Vacation", text: "Vacation mode 🌴" },
      { context: "Florida", text: "Florida vibes 🌴" }
    ],
    misunderstandings: ["Clear tropical meaning"],
    relatedEmojis: ["beach", "coconut", "island"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["palm", "tree", "tropical", "beach", "vacation"]
  },
  {
    unicode: "🌲",
    name: "Evergreen Tree",
    slug: "evergreen-tree",
    shortMeaning: "A tall evergreen pine tree.",
    detailedMeaning: "The Evergreen Tree emoji shows a tall pine tree, representing forests, nature, and the outdoors.\n\nUsed for forests, hiking, Pacific Northwest, and nature content.",
    usageContexts: ["Forest", "Nature", "Hiking", "Christmas", "PNW"],
    examples: [
      { context: "Forest", text: "Forest walk 🌲" },
      { context: "Nature", text: "Into the woods 🌲" },
      { context: "PNW", text: "Pacific Northwest 🌲" }
    ],
    misunderstandings: ["Clear forest meaning"],
    relatedEmojis: ["deciduous-tree", "mountain", "camping"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["tree", "pine", "forest", "evergreen", "nature"]
  },
  {
    unicode: "🌳",
    name: "Deciduous Tree",
    slug: "deciduous-tree",
    shortMeaning: "A leafy green tree.",
    detailedMeaning: "The Deciduous Tree emoji shows a tree with full green leaves, representing trees, parks, and nature.\n\nUsed for nature, parks, trees, and outdoor spaces.",
    usageContexts: ["Tree", "Nature", "Park", "Green", "Shade"],
    examples: [
      { context: "Park", text: "Park day 🌳" },
      { context: "Nature", text: "Nature lover 🌳" },
      { context: "Shade", text: "Under the tree 🌳" }
    ],
    misunderstandings: ["Clear tree meaning"],
    relatedEmojis: ["evergreen-tree", "park", "leaf"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["tree", "deciduous", "leafy", "green", "park"]
  },
  {
    unicode: "💮",
    name: "White Flower",
    slug: "white-flower",
    shortMeaning: "A white flower stamp.",
    detailedMeaning: "The White Flower emoji shows a stylized white flower, often used in Japan as a stamp for 'well done' on schoolwork.\n\nUsed for good job, well done, and floral aesthetics.",
    usageContexts: ["Good job", "Well done", "Flower", "Japan", "Stamp"],
    examples: [
      { context: "Good", text: "Well done 💮" },
      { context: "Praise", text: "Excellent work 💮" },
      { context: "Flower", text: "Pretty flower 💮" }
    ],
    misunderstandings: ["Japanese 'well done' stamp"],
    relatedEmojis: ["blossom", "check-mark", "star"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["flower", "white", "stamp", "well done", "Japan"]
  },
  {
    unicode: "🌾",
    name: "Sheaf of Rice",
    slug: "sheaf-of-rice",
    shortMeaning: "A sheaf of rice or wheat.",
    detailedMeaning: "The Sheaf of Rice emoji shows grain stalks, representing harvest, agriculture, and autumn.\n\nUsed for harvest, farming, Thanksgiving, and agricultural themes.",
    usageContexts: ["Harvest", "Farm", "Rice", "Autumn", "Agriculture"],
    examples: [
      { context: "Harvest", text: "Harvest time 🌾" },
      { context: "Farm", text: "Farm fresh 🌾" },
      { context: "Autumn", text: "Fall harvest 🌾" }
    ],
    misunderstandings: ["Clear agricultural meaning"],
    relatedEmojis: ["farmer", "rice", "wheat"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-other",
    keywords: ["rice", "wheat", "harvest", "grain", "farm"]
  },
  // FOOD & DRINK
  {
    unicode: "🍕",
    name: "Pizza",
    slug: "pizza",
    shortMeaning: "A slice of pizza - everyone's favorite comfort food.",
    detailedMeaning: "The Pizza emoji shows a slice of pepperoni pizza, representing one of the world's most popular foods. Pizza is associated with casual meals, parties, and comfort food.\n\nUsed when talking about pizza, ordering food, or expressing love for this universally beloved dish. Pizza emojis often appear in food discussions and hunger expressions.",
    usageContexts: ["Food", "Pizza night", "Comfort food", "Parties", "Takeout"],
    examples: [
      { context: "Craving", text: "Need 🍕 now" },
      { context: "Plans", text: "Pizza party tonight 🍕" },
      { context: "Food", text: "Best pizza ever 🍕" }
    ],
    misunderstandings: ["Clear meaning - pizza is universal"],
    relatedEmojis: ["cheese", "italian-flag", "takeout-box"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["pizza", "food", "Italian", "slice", "pepperoni"]
  },
  {
    unicode: "🍔",
    name: "Hamburger",
    slug: "hamburger",
    shortMeaning: "A juicy hamburger - classic American fast food.",
    detailedMeaning: "The Hamburger emoji shows a classic burger with patty, lettuce, and a bun. It represents fast food, American cuisine, and casual dining.\n\nUsed for food discussions, expressing hunger, or anything related to burgers and fast food culture. The hamburger is iconic in food emoji usage.",
    usageContexts: ["Fast food", "Burgers", "American food", "Hunger", "Casual dining"],
    examples: [
      { context: "Food", text: "Burger time 🍔" },
      { context: "Hungry", text: "Could really go for a 🍔" },
      { context: "Meal", text: "Best burger in town 🍔" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["french-fries", "hot-dog", "sandwich"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["burger", "hamburger", "fast food", "beef", "American"]
  },
  {
    unicode: "🍟",
    name: "French Fries",
    slug: "french-fries",
    shortMeaning: "Golden french fries - the perfect side dish.",
    detailedMeaning: "The French Fries emoji shows a classic red container of golden fries. Fries are beloved worldwide as the perfect accompaniment to burgers, sandwiches, and many other meals.\n\nUsed for fast food discussions, expressing cravings, or as part of meal descriptions. French fries are a universal comfort food.",
    usageContexts: ["Fast food", "Side dishes", "Cravings", "Snacks", "Meals"],
    examples: [
      { context: "Side", text: "Burger and 🍟" },
      { context: "Snack", text: "Just some 🍟 for now" },
      { context: "Craving", text: "Craving salty 🍟" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["hamburger", "hot-dog", "ketchup"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["fries", "chips", "fast food", "potato", "side"]
  },
  {
    unicode: "🍦",
    name: "Soft Ice Cream",
    slug: "soft-ice-cream",
    shortMeaning: "Swirled soft serve ice cream - sweet summer treat.",
    detailedMeaning: "The Soft Ice Cream emoji shows swirled soft serve ice cream in a cone, representing sweet treats, summer, and dessert indulgence.\n\nUsed for dessert discussions, summer activities, treating yourself, or expressing a sweet tooth. Ice cream is a beloved treat across all ages.",
    usageContexts: ["Dessert", "Summer", "Treats", "Sweet tooth", "Celebration"],
    examples: [
      { context: "Treat", text: "I deserve this 🍦" },
      { context: "Summer", text: "Beach day needs 🍦" },
      { context: "Dessert", text: "Ice cream for dinner 🍦" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["ice-cream", "shaved-ice", "doughnut"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["ice cream", "dessert", "sweet", "cone", "summer"]
  },
  {
    unicode: "🍩",
    name: "Doughnut",
    slug: "doughnut",
    shortMeaning: "A frosted doughnut with sprinkles - sweet indulgence.",
    detailedMeaning: "The Doughnut emoji shows a classic ring doughnut with pink frosting and sprinkles. Doughnuts represent sweet treats, breakfast indulgence, and desserts.\n\nUsed for discussing sweet foods, treating yourself, or as part of fun food content. The colorful appearance makes it visually appealing.",
    usageContexts: ["Sweet treats", "Breakfast", "Dessert", "Indulgence", "Snacks"],
    examples: [
      { context: "Treat", text: "Donut worry, be happy 🍩" },
      { context: "Breakfast", text: "Coffee and 🍩" },
      { context: "Sweet", text: "Sweet tooth activated 🍩" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["cookie", "cake", "cupcake"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["doughnut", "donut", "sweet", "sprinkles", "dessert"]
  },
  {
    unicode: "☕",
    name: "Hot Beverage",
    slug: "hot-beverage",
    shortMeaning: "A hot cup of coffee or tea - fuel for the day.",
    detailedMeaning: "The Hot Beverage emoji shows a steaming cup, typically representing coffee or tea. It's associated with morning routines, energy, relaxation, and social coffee dates.\n\nUsed for coffee/tea discussions, expressing need for caffeine, morning greetings, or invitations to catch up. Coffee culture has made this emoji very popular.",
    usageContexts: ["Coffee", "Tea", "Morning", "Caffeine", "Social meetups"],
    examples: [
      { context: "Morning", text: "Need my ☕" },
      { context: "Invite", text: "Coffee? ☕" },
      { context: "Energy", text: "Running on ☕" }
    ],
    misunderstandings: ["Clear meaning - universally loved"],
    relatedEmojis: ["teacup-without-handle", "bubble-tea", "coffee"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["coffee", "tea", "hot", "caffeine", "morning"]
  },
  {
    unicode: "🍺",
    name: "Beer Mug",
    slug: "beer-mug",
    shortMeaning: "A frothy beer mug - cheers and celebrations!",
    detailedMeaning: "The Beer Mug emoji shows a traditional glass mug filled with golden beer and foam. It represents beer, bars, celebrations, and social drinking.\n\nUsed for beer-related content, celebrating, bar outings, and casual social gatherings. Beer is associated with relaxation and good times with friends.",
    usageContexts: ["Beer", "Celebrations", "Bars", "Social drinking", "Cheers"],
    examples: [
      { context: "Cheers", text: "Friday finally 🍺" },
      { context: "Social", text: "Beers after work? 🍺" },
      { context: "Celebrate", text: "Cheers to that 🍺" }
    ],
    misunderstandings: ["Alcohol reference - context matters"],
    relatedEmojis: ["clinking-beer-mugs", "wine-glass", "cocktail-glass"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["beer", "cheers", "bar", "drink", "celebrate"]
  },
  {
    unicode: "🍷",
    name: "Wine Glass",
    slug: "wine-glass",
    shortMeaning: "A glass of red wine - elegance and relaxation.",
    detailedMeaning: "The Wine Glass emoji shows a glass of red wine, representing sophistication, relaxation, and celebration. Wine is associated with fine dining, romance, and unwinding.\n\nUsed for wine discussions, date nights, relaxation, and more formal celebrations. Wine culture has a refined, elegant connotation.",
    usageContexts: ["Wine", "Relaxation", "Romance", "Dining", "Celebrations"],
    examples: [
      { context: "Relax", text: "Wine time 🍷" },
      { context: "Date", text: "Dinner and 🍷" },
      { context: "Unwind", text: "Much needed 🍷" }
    ],
    misunderstandings: ["Alcohol reference - context matters"],
    relatedEmojis: ["beer-mug", "champagne", "grapes"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["wine", "red wine", "glass", "elegant", "relax"]
  },
  // ASIAN CUISINE
  {
    unicode: "🍣",
    name: "Sushi",
    slug: "sushi",
    shortMeaning: "A piece of sushi - Japanese delicacy.",
    detailedMeaning: "The Sushi emoji shows a piece of nigiri sushi with fish on rice, representing Japanese cuisine, fine dining, and fresh seafood.\n\nUsed for sushi cravings, Japanese food, and upscale dining experiences.",
    usageContexts: ["Japanese", "Sushi", "Seafood", "Dining", "Fresh"],
    examples: [
      { context: "Craving", text: "Sushi night 🍣" },
      { context: "Dining", text: "All you can eat 🍣" },
      { context: "Food", text: "Fresh sushi 🍣" }
    ],
    misunderstandings: ["Clear sushi meaning"],
    relatedEmojis: ["rice-ball", "chopsticks", "fish"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["sushi", "Japanese", "fish", "rice", "seafood"]
  },
  {
    unicode: "🍜",
    name: "Steaming Bowl",
    slug: "steaming-bowl",
    shortMeaning: "A steaming bowl of noodles - ramen time!",
    detailedMeaning: "The Steaming Bowl emoji shows a bowl of hot noodles with steam rising, representing ramen, pho, and Asian noodle soups.\n\nUsed for noodle cravings, Asian cuisine, and comfort food.",
    usageContexts: ["Ramen", "Pho", "Noodles", "Asian", "Comfort food"],
    examples: [
      { context: "Ramen", text: "Ramen weather 🍜" },
      { context: "Comfort", text: "Hot soup 🍜" },
      { context: "Asian", text: "Noodle time 🍜" }
    ],
    misunderstandings: ["Could be any noodle soup"],
    relatedEmojis: ["sushi", "chopsticks", "hot-beverage"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["noodles", "ramen", "pho", "soup", "Asian"]
  },
  {
    unicode: "🍛",
    name: "Curry Rice",
    slug: "curry-rice",
    shortMeaning: "A plate of curry with rice.",
    detailedMeaning: "The Curry Rice emoji shows a plate of curry sauce with rice, representing Indian, Japanese, and Thai curry dishes.\n\nUsed for curry cravings, Indian food, and spicy dishes.",
    usageContexts: ["Curry", "Indian", "Spicy", "Rice", "Comfort food"],
    examples: [
      { context: "Indian", text: "Curry night 🍛" },
      { context: "Spicy", text: "Need something spicy 🍛" },
      { context: "Food", text: "Comfort food 🍛" }
    ],
    misunderstandings: ["Could be any curry style"],
    relatedEmojis: ["rice", "hot-pepper", "indian-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["curry", "rice", "Indian", "spicy", "comfort"]
  },
  {
    unicode: "🍚",
    name: "Cooked Rice",
    slug: "cooked-rice",
    shortMeaning: "A bowl of cooked white rice.",
    detailedMeaning: "The Cooked Rice emoji shows a bowl of steamed white rice, a staple food in many Asian cultures.\n\nUsed for Asian cuisine, rice dishes, and simple meals.",
    usageContexts: ["Rice", "Asian", "Staple", "Meal", "Comfort"],
    examples: [
      { context: "Meal", text: "Rice with everything 🍚" },
      { context: "Asian", text: "Rice is life 🍚" },
      { context: "Simple", text: "Simple dinner 🍚" }
    ],
    misunderstandings: ["Clear rice meaning"],
    relatedEmojis: ["curry-rice", "sushi", "chopsticks"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["rice", "white rice", "Asian", "staple", "bowl"]
  },
  {
    unicode: "🍙",
    name: "Rice Ball",
    slug: "rice-ball",
    shortMeaning: "A Japanese rice ball (onigiri).",
    detailedMeaning: "The Rice Ball emoji shows a Japanese onigiri wrapped in nori seaweed, a popular snack and lunch item in Japan.\n\nUsed for Japanese food, bento, and quick snacks.",
    usageContexts: ["Japanese", "Onigiri", "Snack", "Bento", "Lunch"],
    examples: [
      { context: "Snack", text: "Onigiri time 🍙" },
      { context: "Japanese", text: "Japanese lunch 🍙" },
      { context: "Bento", text: "Packed lunch 🍙" }
    ],
    misunderstandings: ["Clear onigiri meaning"],
    relatedEmojis: ["sushi", "cooked-rice", "bento-box"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["rice ball", "onigiri", "Japanese", "snack", "seaweed"]
  },
  {
    unicode: "🍘",
    name: "Rice Cracker",
    slug: "rice-cracker",
    shortMeaning: "A Japanese rice cracker.",
    detailedMeaning: "The Rice Cracker emoji shows a senbei (Japanese rice cracker) with nori seaweed, a popular Asian snack.\n\nUsed for Japanese snacks, crackers, and tea time treats.",
    usageContexts: ["Japanese", "Snack", "Cracker", "Tea time", "Asian"],
    examples: [
      { context: "Snack", text: "Rice cracker snack 🍘" },
      { context: "Tea", text: "Tea and crackers 🍘" },
      { context: "Japanese", text: "Senbei time 🍘" }
    ],
    misunderstandings: ["Clear rice cracker meaning"],
    relatedEmojis: ["rice-ball", "teacup", "cookie"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["rice cracker", "senbei", "Japanese", "snack", "Asian"]
  },
  {
    unicode: "🍱",
    name: "Bento Box",
    slug: "bento-box",
    shortMeaning: "A Japanese bento box meal.",
    detailedMeaning: "The Bento Box emoji shows a compartmentalized Japanese lunch box with various foods, representing organized meals and Japanese cuisine.\n\nUsed for Japanese food, meal prep, and organized lunches.",
    usageContexts: ["Japanese", "Bento", "Lunch", "Meal prep", "Organized"],
    examples: [
      { context: "Lunch", text: "Bento for lunch 🍱" },
      { context: "Japanese", text: "Japanese lunch box 🍱" },
      { context: "Meal prep", text: "Meal prepping 🍱" }
    ],
    misunderstandings: ["Clear bento meaning"],
    relatedEmojis: ["rice-ball", "sushi", "chopsticks"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["bento", "Japanese", "lunch box", "meal", "organized"]
  },
  {
    unicode: "🥟",
    name: "Dumpling",
    slug: "dumpling",
    shortMeaning: "A steamed or fried dumpling.",
    detailedMeaning: "The Dumpling emoji shows a Asian dumpling (gyoza, jiaozi, mandu), representing dumplings from various Asian cuisines.\n\nUsed for Chinese food, dim sum, and Asian dumplings.",
    usageContexts: ["Chinese", "Dumplings", "Dim sum", "Asian", "Steamed"],
    examples: [
      { context: "Dim sum", text: "Dim sum time 🥟" },
      { context: "Chinese", text: "Dumplings for dinner 🥟" },
      { context: "Craving", text: "Craving dumplings 🥟" }
    ],
    misunderstandings: ["Could be any Asian dumpling"],
    relatedEmojis: ["takeout-box", "chopsticks", "steaming-bowl"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["dumpling", "gyoza", "dim sum", "Chinese", "Asian"]
  },
  {
    unicode: "🥡",
    name: "Takeout Box",
    slug: "takeout-box",
    shortMeaning: "A Chinese takeout container.",
    detailedMeaning: "The Takeout Box emoji shows the iconic Chinese takeout container, representing takeout food, delivery, and late-night eating.\n\nUsed for Chinese food, takeout orders, and delivery meals.",
    usageContexts: ["Takeout", "Chinese", "Delivery", "Late night", "Food"],
    examples: [
      { context: "Takeout", text: "Chinese takeout 🥡" },
      { context: "Delivery", text: "Ordering in 🥡" },
      { context: "Late night", text: "Late night eats 🥡" }
    ],
    misunderstandings: ["Clear takeout meaning"],
    relatedEmojis: ["dumpling", "chopsticks", "steaming-bowl"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["takeout", "Chinese", "delivery", "container", "food"]
  },
  {
    unicode: "🥢",
    name: "Chopsticks",
    slug: "chopsticks",
    shortMeaning: "A pair of chopsticks.",
    detailedMeaning: "The Chopsticks emoji shows a pair of chopsticks, the eating utensils used throughout Asia.\n\nUsed for Asian cuisine, sushi, noodles, and Chinese/Japanese food.",
    usageContexts: ["Asian", "Utensils", "Sushi", "Noodles", "Chinese"],
    examples: [
      { context: "Asian", text: "Chopstick skills 🥢" },
      { context: "Sushi", text: "Sushi time 🥢" },
      { context: "Noodles", text: "Slurping noodles 🥢" }
    ],
    misunderstandings: ["Clear chopsticks meaning"],
    relatedEmojis: ["sushi", "steaming-bowl", "rice-ball"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["chopsticks", "Asian", "utensils", "eating", "Japanese"]
  },
  // MEXICAN & LATIN CUISINE
  {
    unicode: "🌮",
    name: "Taco",
    slug: "taco",
    shortMeaning: "A delicious taco - Taco Tuesday!",
    detailedMeaning: "The Taco emoji shows a hard shell taco with fillings, representing Mexican cuisine and the beloved Taco Tuesday tradition.\n\nUsed for Mexican food, Taco Tuesday, and Latin American cuisine.",
    usageContexts: ["Mexican", "Taco Tuesday", "Food", "Latin", "Casual"],
    examples: [
      { context: "Tuesday", text: "Taco Tuesday 🌮" },
      { context: "Mexican", text: "Mexican night 🌮" },
      { context: "Food", text: "Taco time 🌮" }
    ],
    misunderstandings: ["Clear taco meaning"],
    relatedEmojis: ["burrito", "hot-pepper", "avocado"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["taco", "Mexican", "Tuesday", "food", "shell"]
  },
  {
    unicode: "🌯",
    name: "Burrito",
    slug: "burrito",
    shortMeaning: "A wrapped burrito.",
    detailedMeaning: "The Burrito emoji shows a wrapped tortilla burrito, representing Mexican and Tex-Mex cuisine.\n\nUsed for Mexican food, burritos, and hearty wrapped meals.",
    usageContexts: ["Mexican", "Burrito", "Wrap", "Tex-Mex", "Hearty"],
    examples: [
      { context: "Mexican", text: "Burrito bowl 🌯" },
      { context: "Lunch", text: "Big burrito 🌯" },
      { context: "Food", text: "Burrito run 🌯" }
    ],
    misunderstandings: ["Clear burrito meaning"],
    relatedEmojis: ["taco", "hot-pepper", "beans"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["burrito", "Mexican", "wrap", "Tex-Mex", "tortilla"]
  },
  {
    unicode: "🫔",
    name: "Tamale",
    slug: "tamale",
    shortMeaning: "A wrapped tamale.",
    detailedMeaning: "The Tamale emoji shows a corn husk-wrapped tamale, representing traditional Mexican and Latin American cuisine.\n\nUsed for Mexican holidays, traditional food, and Latin American cuisine.",
    usageContexts: ["Mexican", "Traditional", "Holiday", "Latin", "Homemade"],
    examples: [
      { context: "Holiday", text: "Homemade tamales 🫔" },
      { context: "Mexican", text: "Grandma's tamales 🫔" },
      { context: "Traditional", text: "Traditional recipe 🫔" }
    ],
    misunderstandings: ["Clear tamale meaning"],
    relatedEmojis: ["taco", "burrito", "hot-pepper"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["tamale", "Mexican", "corn", "traditional", "Latin"]
  },
  {
    unicode: "🥑",
    name: "Avocado",
    slug: "avocado",
    shortMeaning: "A halved avocado - millennial favorite!",
    detailedMeaning: "The Avocado emoji shows a halved avocado with pit, representing healthy eating, guacamole, and millennial food culture.\n\nUsed for healthy food, avocado toast, guacamole, and trendy eating.",
    usageContexts: ["Healthy", "Avocado toast", "Guacamole", "Trendy", "Millennial"],
    examples: [
      { context: "Healthy", text: "Avocado toast 🥑" },
      { context: "Guac", text: "Guac is extra 🥑" },
      { context: "Trendy", text: "Basic but delicious 🥑" }
    ],
    misunderstandings: ["Associated with millennial culture"],
    relatedEmojis: ["taco", "salad", "bread"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["avocado", "guacamole", "healthy", "green", "millennial"]
  },
  // EUROPEAN CUISINE
  {
    unicode: "🥐",
    name: "Croissant",
    slug: "croissant",
    shortMeaning: "A flaky French croissant.",
    detailedMeaning: "The Croissant emoji shows a golden, flaky French pastry, representing French cuisine, breakfast, and café culture.\n\nUsed for French food, breakfast, Paris references, and café vibes.",
    usageContexts: ["French", "Breakfast", "Pastry", "Paris", "Café"],
    examples: [
      { context: "Breakfast", text: "Croissant and coffee 🥐" },
      { context: "French", text: "Feeling French 🥐" },
      { context: "Paris", text: "Paris vibes 🥐" }
    ],
    misunderstandings: ["Clear croissant meaning"],
    relatedEmojis: ["baguette", "hot-beverage", "french-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["croissant", "French", "pastry", "breakfast", "flaky"]
  },
  {
    unicode: "🥖",
    name: "Baguette Bread",
    slug: "baguette-bread",
    shortMeaning: "A French baguette.",
    detailedMeaning: "The Baguette Bread emoji shows a long French baguette, representing French cuisine and artisan bread.\n\nUsed for French food, bread, and stereotypical French imagery.",
    usageContexts: ["French", "Bread", "Bakery", "Paris", "Artisan"],
    examples: [
      { context: "French", text: "Fresh baguette 🥖" },
      { context: "Bakery", text: "Bakery run 🥖" },
      { context: "Paris", text: "So French 🥖" }
    ],
    misunderstandings: ["Clear baguette meaning"],
    relatedEmojis: ["croissant", "cheese", "french-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["baguette", "French", "bread", "bakery", "loaf"]
  },
  {
    unicode: "🧀",
    name: "Cheese Wedge",
    slug: "cheese-wedge",
    shortMeaning: "A wedge of cheese.",
    detailedMeaning: "The Cheese Wedge emoji shows a yellow cheese wedge with holes, representing cheese, dairy, and European cuisine.\n\nUsed for cheese, pizza toppings, and cheesy expressions.",
    usageContexts: ["Cheese", "Pizza", "Dairy", "European", "Cheesy"],
    examples: [
      { context: "Cheese", text: "Cheese plate 🧀" },
      { context: "Cheesy", text: "That's so cheesy 🧀" },
      { context: "Pizza", text: "Extra cheese 🧀" }
    ],
    misunderstandings: ["Can mean corny/cheesy"],
    relatedEmojis: ["pizza", "mouse", "wine-glass"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["cheese", "dairy", "wedge", "cheesy", "European"]
  },
  {
    unicode: "🍝",
    name: "Spaghetti",
    slug: "spaghetti",
    shortMeaning: "A plate of spaghetti with tomato sauce.",
    detailedMeaning: "The Spaghetti emoji shows a plate of pasta with red sauce and a fork, representing Italian cuisine and pasta dishes.\n\nUsed for Italian food, pasta dinners, and carb cravings.",
    usageContexts: ["Italian", "Pasta", "Dinner", "Carbs", "Comfort food"],
    examples: [
      { context: "Italian", text: "Italian night 🍝" },
      { context: "Pasta", text: "Pasta time 🍝" },
      { context: "Dinner", text: "Spaghetti dinner 🍝" }
    ],
    misunderstandings: ["Clear pasta meaning"],
    relatedEmojis: ["pizza", "cheese-wedge", "tomato"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["spaghetti", "pasta", "Italian", "tomato", "carbs"]
  },
  // AMERICAN CLASSICS
  {
    unicode: "🌭",
    name: "Hot Dog",
    slug: "hot-dog",
    shortMeaning: "A hot dog in a bun.",
    detailedMeaning: "The Hot Dog emoji shows a frankfurter in a bun, representing American fast food, baseball games, and BBQs.\n\nUsed for BBQs, sports events, and American casual food.",
    usageContexts: ["American", "BBQ", "Baseball", "Fast food", "Summer"],
    examples: [
      { context: "Baseball", text: "Ballpark frank 🌭" },
      { context: "BBQ", text: "Hot dogs on the grill 🌭" },
      { context: "Fast food", text: "Quick lunch 🌭" }
    ],
    misunderstandings: ["Clear hot dog meaning"],
    relatedEmojis: ["hamburger", "french-fries", "baseball"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["hot dog", "frankfurter", "American", "BBQ", "fast food"]
  },
  {
    unicode: "🥪",
    name: "Sandwich",
    slug: "sandwich",
    shortMeaning: "A layered sandwich.",
    detailedMeaning: "The Sandwich emoji shows a multi-layered sandwich with bread, meat, and vegetables, representing lunch, deli food, and quick meals.\n\nUsed for lunch, sandwiches, and deli content.",
    usageContexts: ["Lunch", "Sandwich", "Deli", "Quick meal", "Picnic"],
    examples: [
      { context: "Lunch", text: "Sandwich for lunch 🥪" },
      { context: "Deli", text: "Deli run 🥪" },
      { context: "Picnic", text: "Packed lunch 🥪" }
    ],
    misunderstandings: ["Clear sandwich meaning"],
    relatedEmojis: ["hamburger", "bread", "cheese-wedge"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["sandwich", "lunch", "deli", "bread", "meal"]
  },
  {
    unicode: "🥓",
    name: "Bacon",
    slug: "bacon",
    shortMeaning: "Crispy strips of bacon.",
    detailedMeaning: "The Bacon emoji shows crispy bacon strips, representing breakfast, brunch, and the beloved pork product.\n\nUsed for breakfast, bacon lovers, and adding bacon to everything.",
    usageContexts: ["Breakfast", "Bacon", "Brunch", "Meat", "Delicious"],
    examples: [
      { context: "Breakfast", text: "Bacon and eggs 🥓" },
      { context: "Love", text: "Bacon makes everything better 🥓" },
      { context: "Brunch", text: "Brunch time 🥓" }
    ],
    misunderstandings: ["Clear bacon meaning"],
    relatedEmojis: ["egg", "pancakes", "sandwich"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["bacon", "breakfast", "crispy", "pork", "meat"]
  },
  {
    unicode: "🍳",
    name: "Cooking",
    slug: "cooking",
    shortMeaning: "A fried egg in a pan.",
    detailedMeaning: "The Cooking emoji shows a fried egg in a frying pan, representing cooking, breakfast, and homemade meals.\n\nUsed for cooking, breakfast, and homemade food content.",
    usageContexts: ["Cooking", "Breakfast", "Eggs", "Homemade", "Kitchen"],
    examples: [
      { context: "Breakfast", text: "Eggs for breakfast 🍳" },
      { context: "Cooking", text: "Cooking up something 🍳" },
      { context: "Homemade", text: "Home cooking 🍳" }
    ],
    misunderstandings: ["Represents cooking, not just eggs"],
    relatedEmojis: ["bacon", "pancakes", "chef"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["cooking", "egg", "breakfast", "frying", "pan"]
  },
  {
    unicode: "🥞",
    name: "Pancakes",
    slug: "pancakes",
    shortMeaning: "A stack of pancakes.",
    detailedMeaning: "The Pancakes emoji shows a stack of pancakes with butter and syrup, representing breakfast, brunch, and comfort food.\n\nUsed for breakfast, brunch, and weekend morning meals.",
    usageContexts: ["Breakfast", "Brunch", "Pancakes", "Weekend", "Comfort"],
    examples: [
      { context: "Breakfast", text: "Pancake breakfast 🥞" },
      { context: "Weekend", text: "Sunday pancakes 🥞" },
      { context: "Brunch", text: "Brunch stack 🥞" }
    ],
    misunderstandings: ["Clear pancake meaning"],
    relatedEmojis: ["bacon", "cooking", "maple-syrup"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["pancakes", "breakfast", "stack", "syrup", "brunch"]
  },
  {
    unicode: "🧇",
    name: "Waffle",
    slug: "waffle",
    shortMeaning: "A golden waffle.",
    detailedMeaning: "The Waffle emoji shows a Belgian waffle with its distinctive grid pattern, representing breakfast, brunch, and sweet treats.\n\nUsed for breakfast, brunch, and waffle cravings.",
    usageContexts: ["Breakfast", "Brunch", "Waffle", "Sweet", "Weekend"],
    examples: [
      { context: "Breakfast", text: "Waffle time 🧇" },
      { context: "Brunch", text: "Belgian waffles 🧇" },
      { context: "Sweet", text: "Waffles and berries 🧇" }
    ],
    misunderstandings: ["Clear waffle meaning"],
    relatedEmojis: ["pancakes", "strawberry", "whipped-cream"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["waffle", "breakfast", "Belgian", "brunch", "grid"]
  },
  // FRUITS
  {
    unicode: "🍎",
    name: "Red Apple",
    slug: "red-apple",
    shortMeaning: "A red apple - healthy and classic.",
    detailedMeaning: "The Red Apple emoji shows a shiny red apple, representing health, teachers, and the classic fruit.\n\nUsed for healthy eating, teachers, and fruit-related content.",
    usageContexts: ["Healthy", "Teacher", "Fruit", "School", "Fresh"],
    examples: [
      { context: "Healthy", text: "An apple a day 🍎" },
      { context: "Teacher", text: "For the teacher 🍎" },
      { context: "Fresh", text: "Fresh fruit 🍎" }
    ],
    misunderstandings: ["Associated with teachers and school"],
    relatedEmojis: ["green-apple", "pear", "cherries"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["apple", "red", "fruit", "healthy", "teacher"]
  },
  {
    unicode: "🍊",
    name: "Tangerine",
    slug: "tangerine",
    shortMeaning: "A tangerine/orange citrus fruit.",
    detailedMeaning: "The Tangerine emoji shows an orange citrus fruit, representing oranges, vitamin C, and fresh fruit.\n\nUsed for citrus fruits, healthy eating, and orange-colored things.",
    usageContexts: ["Citrus", "Orange", "Healthy", "Vitamin C", "Fruit"],
    examples: [
      { context: "Healthy", text: "Vitamin C boost 🍊" },
      { context: "Fruit", text: "Fresh oranges 🍊" },
      { context: "Color", text: "Orange vibes 🍊" }
    ],
    misunderstandings: ["Clear orange/citrus meaning"],
    relatedEmojis: ["lemon", "red-apple", "banana"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["orange", "tangerine", "citrus", "fruit", "vitamin"]
  },
  {
    unicode: "🍋",
    name: "Lemon",
    slug: "lemon",
    shortMeaning: "A yellow lemon.",
    detailedMeaning: "The Lemon emoji shows a bright yellow lemon, representing sour, citrus, and the phrase 'when life gives you lemons.'\n\nUsed for citrus, sour things, and optimistic expressions.",
    usageContexts: ["Citrus", "Sour", "Lemonade", "Optimism", "Fresh"],
    examples: [
      { context: "Saying", text: "When life gives you 🍋" },
      { context: "Drink", text: "Fresh lemonade 🍋" },
      { context: "Sour", text: "Sour face 🍋" }
    ],
    misunderstandings: ["Associated with 'lemons' idiom"],
    relatedEmojis: ["tangerine", "lime", "lemonade"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["lemon", "citrus", "sour", "yellow", "fruit"]
  },
  {
    unicode: "🍌",
    name: "Banana",
    slug: "banana",
    shortMeaning: "A yellow banana.",
    detailedMeaning: "The Banana emoji shows a peeled banana, representing the popular fruit, potassium, and sometimes comedic/suggestive content.\n\nUsed for fruit, smoothies, and healthy snacks.",
    usageContexts: ["Fruit", "Healthy", "Smoothie", "Potassium", "Snack"],
    examples: [
      { context: "Healthy", text: "Banana for energy 🍌" },
      { context: "Smoothie", text: "Banana smoothie 🍌" },
      { context: "Snack", text: "Quick snack 🍌" }
    ],
    misunderstandings: ["Sometimes used suggestively"],
    relatedEmojis: ["red-apple", "strawberry", "monkey"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["banana", "fruit", "yellow", "potassium", "healthy"]
  },
  {
    unicode: "🍇",
    name: "Grapes",
    slug: "grapes",
    shortMeaning: "A bunch of purple grapes.",
    detailedMeaning: "The Grapes emoji shows a cluster of purple grapes, representing wine, fruit, and vineyards.\n\nUsed for fruit, wine references, and grape-flavored things.",
    usageContexts: ["Fruit", "Wine", "Vineyard", "Purple", "Healthy"],
    examples: [
      { context: "Wine", text: "Wine grapes 🍇" },
      { context: "Fruit", text: "Fresh grapes 🍇" },
      { context: "Snack", text: "Healthy snack 🍇" }
    ],
    misunderstandings: ["Associated with wine"],
    relatedEmojis: ["wine-glass", "cherries", "blueberries"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["grapes", "purple", "fruit", "wine", "vineyard"]
  },
  {
    unicode: "🍓",
    name: "Strawberry",
    slug: "strawberry",
    shortMeaning: "A red strawberry.",
    detailedMeaning: "The Strawberry emoji shows a red strawberry with green leaves, representing sweetness, summer, and fresh berries.\n\nUsed for berries, desserts, and sweet content.",
    usageContexts: ["Berries", "Sweet", "Summer", "Dessert", "Fresh"],
    examples: [
      { context: "Sweet", text: "Sweet as a strawberry 🍓" },
      { context: "Dessert", text: "Strawberry shortcake 🍓" },
      { context: "Summer", text: "Berry season 🍓" }
    ],
    misunderstandings: ["Clear strawberry meaning"],
    relatedEmojis: ["cherries", "blueberries", "whipped-cream"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["strawberry", "berry", "red", "sweet", "fruit"]
  },
  {
    unicode: "🍒",
    name: "Cherries",
    slug: "cherries",
    shortMeaning: "A pair of red cherries.",
    detailedMeaning: "The Cherries emoji shows two red cherries on a stem, representing sweetness and sometimes romantic or flirty content.\n\nUsed for fruit, desserts, and sometimes flirtatious messages.",
    usageContexts: ["Fruit", "Sweet", "Flirty", "Dessert", "Summer"],
    examples: [
      { context: "Sweet", text: "Cherry on top 🍒" },
      { context: "Dessert", text: "Cherry pie 🍒" },
      { context: "Cute", text: "So cherry 🍒" }
    ],
    misunderstandings: ["Sometimes used flirtatiously"],
    relatedEmojis: ["strawberry", "grapes", "peach"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["cherries", "fruit", "red", "sweet", "pair"]
  },
  {
    unicode: "🍑",
    name: "Peach",
    slug: "peach",
    shortMeaning: "A fuzzy peach.",
    detailedMeaning: "The Peach emoji shows an orange peach, representing the fruit but also commonly used as a butt emoji due to its shape.\n\nUsed for peaches, summer fruit, and often suggestively for buttocks.",
    usageContexts: ["Fruit", "Summer", "Suggestive", "Georgia", "Sweet"],
    examples: [
      { context: "Fruit", text: "Peachy keen 🍑" },
      { context: "Georgia", text: "Georgia peach 🍑" },
      { context: "Flirty", text: "Looking good 🍑" }
    ],
    misunderstandings: ["Commonly used to represent buttocks"],
    relatedEmojis: ["cherries", "eggplant", "strawberry"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["peach", "fruit", "butt", "summer", "fuzzy"]
  },
  {
    unicode: "🥭",
    name: "Mango",
    slug: "mango",
    shortMeaning: "A tropical mango.",
    detailedMeaning: "The Mango emoji shows an orange-yellow mango, representing tropical fruit and exotic flavors.\n\nUsed for tropical fruit, summer, and mango-flavored things.",
    usageContexts: ["Tropical", "Fruit", "Exotic", "Summer", "Sweet"],
    examples: [
      { context: "Tropical", text: "Tropical vibes 🥭" },
      { context: "Fruit", text: "Fresh mango 🥭" },
      { context: "Sweet", text: "Mango smoothie 🥭" }
    ],
    misunderstandings: ["Clear mango meaning"],
    relatedEmojis: ["pineapple", "coconut", "peach"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["mango", "tropical", "fruit", "exotic", "sweet"]
  },
  {
    unicode: "🍍",
    name: "Pineapple",
    slug: "pineapple",
    shortMeaning: "A tropical pineapple.",
    detailedMeaning: "The Pineapple emoji shows a pineapple with its spiky top, representing tropical vibes, hospitality, and the pizza topping debate.\n\nUsed for tropical themes, summer, and the pineapple on pizza debate.",
    usageContexts: ["Tropical", "Summer", "Hospitality", "Hawaii", "Sweet"],
    examples: [
      { context: "Tropical", text: "Tropical paradise 🍍" },
      { context: "Hawaii", text: "Hawaii vibes 🍍" },
      { context: "Debate", text: "Pineapple on pizza 🍍" }
    ],
    misunderstandings: ["Symbol of hospitality"],
    relatedEmojis: ["coconut", "mango", "palm-tree"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["pineapple", "tropical", "Hawaii", "fruit", "summer"]
  },
  {
    unicode: "🥥",
    name: "Coconut",
    slug: "coconut",
    shortMeaning: "A halved coconut.",
    detailedMeaning: "The Coconut emoji shows a coconut cut in half, representing tropical islands, coconut water, and beach vibes.\n\nUsed for tropical themes, beach content, and coconut products.",
    usageContexts: ["Tropical", "Beach", "Island", "Healthy", "Summer"],
    examples: [
      { context: "Beach", text: "Beach vibes 🥥" },
      { context: "Healthy", text: "Coconut water 🥥" },
      { context: "Tropical", text: "Island life 🥥" }
    ],
    misunderstandings: ["Clear coconut meaning"],
    relatedEmojis: ["pineapple", "palm-tree", "beach-with-umbrella"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["coconut", "tropical", "beach", "island", "fruit"]
  },
  {
    unicode: "🍉",
    name: "Watermelon",
    slug: "watermelon",
    shortMeaning: "A slice of watermelon.",
    detailedMeaning: "The Watermelon emoji shows a red slice of watermelon with seeds, representing summer, picnics, and refreshing fruit.\n\nUsed for summer, BBQs, picnics, and hot weather content.",
    usageContexts: ["Summer", "Picnic", "BBQ", "Refreshing", "Hot weather"],
    examples: [
      { context: "Summer", text: "Summer vibes 🍉" },
      { context: "Picnic", text: "Picnic snack 🍉" },
      { context: "Refreshing", text: "So refreshing 🍉" }
    ],
    misunderstandings: ["Clear watermelon meaning"],
    relatedEmojis: ["strawberry", "grapes", "sun"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["watermelon", "summer", "fruit", "picnic", "refreshing"]
  },
  // VEGETABLES
  {
    unicode: "🥕",
    name: "Carrot",
    slug: "carrot",
    shortMeaning: "An orange carrot.",
    detailedMeaning: "The Carrot emoji shows an orange carrot with green top, representing vegetables, healthy eating, and rabbits.\n\nUsed for healthy food, cooking, and bunny-related content.",
    usageContexts: ["Healthy", "Vegetables", "Cooking", "Rabbit", "Orange"],
    examples: [
      { context: "Healthy", text: "Eat your veggies 🥕" },
      { context: "Cooking", text: "Fresh carrots 🥕" },
      { context: "Bunny", text: "Bunny food 🥕" }
    ],
    misunderstandings: ["Clear carrot meaning"],
    relatedEmojis: ["broccoli", "salad", "rabbit"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["carrot", "vegetable", "orange", "healthy", "rabbit"]
  },
  {
    unicode: "🥦",
    name: "Broccoli",
    slug: "broccoli",
    shortMeaning: "A head of broccoli.",
    detailedMeaning: "The Broccoli emoji shows green broccoli florets, representing healthy eating, vegetables, and nutritious food.\n\nUsed for healthy eating, vegetables, and green food.",
    usageContexts: ["Healthy", "Vegetables", "Green", "Nutritious", "Cooking"],
    examples: [
      { context: "Healthy", text: "Eat your broccoli 🥦" },
      { context: "Green", text: "Green and healthy 🥦" },
      { context: "Cooking", text: "Steamed broccoli 🥦" }
    ],
    misunderstandings: ["Clear broccoli meaning"],
    relatedEmojis: ["carrot", "salad", "leafy-green"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["broccoli", "vegetable", "green", "healthy", "nutritious"]
  },
  {
    unicode: "🌶️",
    name: "Hot Pepper",
    slug: "hot-pepper",
    shortMeaning: "A red hot chili pepper.",
    detailedMeaning: "The Hot Pepper emoji shows a red chili pepper, representing spicy food, heat, and something being 'hot' or attractive.\n\nUsed for spicy food, Mexican cuisine, and describing something as hot/attractive.",
    usageContexts: ["Spicy", "Hot", "Mexican", "Attractive", "Heat"],
    examples: [
      { context: "Spicy", text: "Make it spicy 🌶️" },
      { context: "Hot", text: "That's hot 🌶️" },
      { context: "Mexican", text: "Mexican heat 🌶️" }
    ],
    misunderstandings: ["Can mean attractive/hot"],
    relatedEmojis: ["taco", "fire", "curry-rice"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["pepper", "hot", "spicy", "chili", "heat"]
  },
  {
    unicode: "🧄",
    name: "Garlic",
    slug: "garlic",
    shortMeaning: "A head of garlic.",
    detailedMeaning: "The Garlic emoji shows a garlic bulb, representing cooking, flavor, and vampire repellent jokes.\n\nUsed for cooking, Italian food, and garlic bread references.",
    usageContexts: ["Cooking", "Italian", "Flavor", "Vampire", "Garlic bread"],
    examples: [
      { context: "Cooking", text: "More garlic always 🧄" },
      { context: "Italian", text: "Garlic bread 🧄" },
      { context: "Joke", text: "Keeping vampires away 🧄" }
    ],
    misunderstandings: ["Vampire jokes"],
    relatedEmojis: ["onion", "spaghetti", "pizza"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["garlic", "cooking", "Italian", "flavor", "vampire"]
  },
  {
    unicode: "🧅",
    name: "Onion",
    slug: "onion",
    shortMeaning: "A yellow onion.",
    detailedMeaning: "The Onion emoji shows a brown/yellow onion, representing cooking and the 'layers' metaphor.\n\nUsed for cooking, tears from cutting onions, and the layers concept.",
    usageContexts: ["Cooking", "Tears", "Layers", "Flavor", "Vegetable"],
    examples: [
      { context: "Cooking", text: "Chopping onions 🧅" },
      { context: "Tears", text: "Crying from onions 🧅" },
      { context: "Layers", text: "Like an onion 🧅" }
    ],
    misunderstandings: ["Layers/Shrek reference"],
    relatedEmojis: ["garlic", "carrot", "cooking"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["onion", "cooking", "tears", "layers", "vegetable"]
  },
  {
    unicode: "🍄",
    name: "Mushroom",
    slug: "mushroom",
    shortMeaning: "A red mushroom with white spots.",
    detailedMeaning: "The Mushroom emoji shows a red and white spotted mushroom (fly agaric), representing mushrooms, nature, and sometimes psychedelic themes.\n\nUsed for mushrooms, nature, cooking, and sometimes drug references.",
    usageContexts: ["Nature", "Cooking", "Psychedelic", "Forest", "Vegetable"],
    examples: [
      { context: "Cooking", text: "Mushroom risotto 🍄" },
      { context: "Nature", text: "Forest finds 🍄" },
      { context: "Cute", text: "Cottagecore vibes 🍄" }
    ],
    misunderstandings: ["Can reference psychedelics"],
    relatedEmojis: ["evergreen-tree", "broccoli", "herb"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["mushroom", "fungus", "nature", "forest", "cooking"]
  },
  {
    unicode: "🥔",
    name: "Potato",
    slug: "potato",
    shortMeaning: "A brown potato.",
    detailedMeaning: "The Potato emoji shows a brown potato, representing the versatile vegetable and sometimes used as self-deprecating humor.\n\nUsed for potatoes, fries, and calling oneself a 'potato.'",
    usageContexts: ["Vegetable", "French fries", "Self-deprecating", "Comfort", "Versatile"],
    examples: [
      { context: "Self", text: "I'm a potato 🥔" },
      { context: "Food", text: "Mashed potatoes 🥔" },
      { context: "Lazy", text: "Couch potato 🥔" }
    ],
    misunderstandings: ["Self-deprecating humor"],
    relatedEmojis: ["french-fries", "carrot", "cooking"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["potato", "vegetable", "fries", "couch potato", "comfort"]
  },
  {
    unicode: "🍆",
    name: "Eggplant",
    slug: "eggplant",
    shortMeaning: "A purple eggplant.",
    detailedMeaning: "The Eggplant emoji shows a purple eggplant/aubergine, but is widely known as a phallic symbol in digital communication.\n\nUsed suggestively or for actual eggplant/cooking content.",
    usageContexts: ["Suggestive", "Cooking", "Purple", "Flirty", "Vegetable"],
    examples: [
      { context: "Cooking", text: "Eggplant parmesan 🍆" },
      { context: "Color", text: "Purple vibes 🍆" },
      { context: "Suggestive", text: "[context dependent] 🍆" }
    ],
    misunderstandings: ["Commonly used as phallic symbol"],
    relatedEmojis: ["peach", "hot-pepper", "cucumber"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["eggplant", "aubergine", "purple", "suggestive", "vegetable"]
  },
  {
    unicode: "🥒",
    name: "Cucumber",
    slug: "cucumber",
    shortMeaning: "A green cucumber.",
    detailedMeaning: "The Cucumber emoji shows a green cucumber, representing the vegetable, pickles, and spa treatments (cucumber on eyes).\n\nUsed for vegetables, pickles, and spa/relaxation content.",
    usageContexts: ["Vegetable", "Pickle", "Spa", "Healthy", "Cool"],
    examples: [
      { context: "Healthy", text: "Cool as a cucumber 🥒" },
      { context: "Spa", text: "Spa day 🥒" },
      { context: "Food", text: "Pickles 🥒" }
    ],
    misunderstandings: ["Clear cucumber meaning"],
    relatedEmojis: ["salad", "carrot", "spa"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["cucumber", "pickle", "vegetable", "spa", "cool"]
  },
  {
    unicode: "🥗",
    name: "Green Salad",
    slug: "green-salad",
    shortMeaning: "A bowl of green salad.",
    detailedMeaning: "The Green Salad emoji shows a bowl of mixed salad, representing healthy eating, dieting, and fresh vegetables.\n\nUsed for healthy eating, diets, and light meals.",
    usageContexts: ["Healthy", "Diet", "Vegetables", "Light meal", "Fresh"],
    examples: [
      { context: "Diet", text: "Eating healthy 🥗" },
      { context: "Light", text: "Light lunch 🥗" },
      { context: "Fresh", text: "Fresh salad 🥗" }
    ],
    misunderstandings: ["Clear salad meaning"],
    relatedEmojis: ["broccoli", "carrot", "avocado"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["salad", "healthy", "vegetables", "diet", "fresh"]
  },
  // DESSERTS & SWEETS
  {
    unicode: "🍰",
    name: "Shortcake",
    slug: "shortcake",
    shortMeaning: "A slice of strawberry shortcake.",
    detailedMeaning: "The Shortcake emoji shows a slice of cake with strawberry, representing dessert, celebrations, and sweet treats.\n\nUsed for desserts, birthdays, and cake cravings.",
    usageContexts: ["Dessert", "Birthday", "Celebration", "Sweet", "Cake"],
    examples: [
      { context: "Birthday", text: "Birthday cake 🍰" },
      { context: "Dessert", text: "Dessert time 🍰" },
      { context: "Sweet", text: "Sweet treat 🍰" }
    ],
    misunderstandings: ["Clear cake meaning"],
    relatedEmojis: ["birthday-cake", "cupcake", "pie"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["cake", "shortcake", "dessert", "strawberry", "sweet"]
  },
  {
    unicode: "🧁",
    name: "Cupcake",
    slug: "cupcake",
    shortMeaning: "A frosted cupcake.",
    detailedMeaning: "The Cupcake emoji shows a cupcake with frosting and a cherry, representing sweet treats, birthdays, and baking.\n\nUsed for desserts, baking, and cute sweet content.",
    usageContexts: ["Dessert", "Baking", "Sweet", "Birthday", "Cute"],
    examples: [
      { context: "Baking", text: "Baking cupcakes 🧁" },
      { context: "Sweet", text: "Sweet treat 🧁" },
      { context: "Cute", text: "So cute 🧁" }
    ],
    misunderstandings: ["Clear cupcake meaning"],
    relatedEmojis: ["shortcake", "doughnut", "cookie"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["cupcake", "dessert", "frosting", "baking", "sweet"]
  },
  {
    unicode: "🥧",
    name: "Pie",
    slug: "pie",
    shortMeaning: "A slice of pie.",
    detailedMeaning: "The Pie emoji shows a slice of pie (often depicted as pumpkin), representing Thanksgiving, dessert, and American traditions.\n\nUsed for Thanksgiving, desserts, and pie cravings.",
    usageContexts: ["Thanksgiving", "Dessert", "American", "Fall", "Sweet"],
    examples: [
      { context: "Thanksgiving", text: "Pumpkin pie 🥧" },
      { context: "Dessert", text: "Pie for dessert 🥧" },
      { context: "Math", text: "Easy as pie 🥧" }
    ],
    misunderstandings: ["Clear pie meaning"],
    relatedEmojis: ["shortcake", "turkey", "maple-leaf"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["pie", "dessert", "Thanksgiving", "pumpkin", "sweet"]
  },
  {
    unicode: "🍫",
    name: "Chocolate Bar",
    slug: "chocolate-bar",
    shortMeaning: "A chocolate bar.",
    detailedMeaning: "The Chocolate Bar emoji shows a wrapped chocolate bar, representing sweets, comfort food, and chocolate cravings.\n\nUsed for chocolate cravings, desserts, and comfort eating.",
    usageContexts: ["Chocolate", "Sweet", "Comfort", "Dessert", "Craving"],
    examples: [
      { context: "Craving", text: "Need chocolate 🍫" },
      { context: "Comfort", text: "Comfort food 🍫" },
      { context: "Sweet", text: "Chocolate fix 🍫" }
    ],
    misunderstandings: ["Clear chocolate meaning"],
    relatedEmojis: ["cookie", "candy", "ice-cream"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["chocolate", "candy", "sweet", "bar", "comfort"]
  },
  {
    unicode: "🍬",
    name: "Candy",
    slug: "candy",
    shortMeaning: "A wrapped candy.",
    detailedMeaning: "The Candy emoji shows a wrapped piece of candy, representing sweets, Halloween, and treats.\n\nUsed for candy, Halloween, and sweet treats.",
    usageContexts: ["Sweet", "Halloween", "Treat", "Candy", "Kids"],
    examples: [
      { context: "Halloween", text: "Trick or treat 🍬" },
      { context: "Sweet", text: "Sweet tooth 🍬" },
      { context: "Treat", text: "Candy time 🍬" }
    ],
    misunderstandings: ["Clear candy meaning"],
    relatedEmojis: ["lollipop", "chocolate-bar", "jack-o-lantern"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["candy", "sweet", "Halloween", "treat", "wrapper"]
  },
  {
    unicode: "🍭",
    name: "Lollipop",
    slug: "lollipop",
    shortMeaning: "A colorful swirled lollipop.",
    detailedMeaning: "The Lollipop emoji shows a rainbow swirled lollipop on a stick, representing candy, childhood, and sweet treats.\n\nUsed for candy, sweets, and colorful/fun content.",
    usageContexts: ["Candy", "Sweet", "Colorful", "Fun", "Childhood"],
    examples: [
      { context: "Sweet", text: "Sweet as a lollipop 🍭" },
      { context: "Fun", text: "Candy land 🍭" },
      { context: "Colorful", text: "Rainbow vibes 🍭" }
    ],
    misunderstandings: ["Clear lollipop meaning"],
    relatedEmojis: ["candy", "rainbow", "cupcake"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["lollipop", "candy", "sweet", "swirl", "rainbow"]
  },
  {
    unicode: "🍪",
    name: "Cookie",
    slug: "cookie",
    shortMeaning: "A chocolate chip cookie.",
    detailedMeaning: "The Cookie emoji shows a chocolate chip cookie, representing baking, treats, and the phrase 'that's how the cookie crumbles.'\n\nUsed for cookies, baking, and sweet snacks.",
    usageContexts: ["Baking", "Sweet", "Snack", "Treat", "Cookie"],
    examples: [
      { context: "Baking", text: "Fresh cookies 🍪" },
      { context: "Snack", text: "Cookie break 🍪" },
      { context: "Saying", text: "That's the way the cookie crumbles 🍪" }
    ],
    misunderstandings: ["Clear cookie meaning"],
    relatedEmojis: ["cupcake", "chocolate-bar", "milk"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["cookie", "baking", "chocolate chip", "sweet", "snack"]
  },
  // MORE DRINKS
  {
    unicode: "🧃",
    name: "Beverage Box",
    slug: "beverage-box",
    shortMeaning: "A juice box with straw.",
    detailedMeaning: "The Beverage Box emoji shows a juice box with straw, representing kids' drinks, juice, and packed lunches.\n\nUsed for juice, kids' lunches, and casual drinks.",
    usageContexts: ["Juice", "Kids", "Lunch", "Drink", "Casual"],
    examples: [
      { context: "Lunch", text: "Packed lunch 🧃" },
      { context: "Kids", text: "Juice time 🧃" },
      { context: "Casual", text: "Sippin' juice 🧃" }
    ],
    misunderstandings: ["Clear juice box meaning"],
    relatedEmojis: ["glass-of-milk", "cup-with-straw", "red-apple"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["juice", "box", "straw", "kids", "drink"]
  },
  {
    unicode: "🧋",
    name: "Bubble Tea",
    slug: "bubble-tea",
    shortMeaning: "A cup of bubble tea with tapioca pearls.",
    detailedMeaning: "The Bubble Tea emoji shows a cup of boba/bubble tea with tapioca pearls, representing the popular Taiwanese drink.\n\nUsed for boba tea, Asian drinks, and trendy beverages.",
    usageContexts: ["Boba", "Asian", "Trendy", "Sweet", "Tea"],
    examples: [
      { context: "Boba", text: "Boba run 🧋" },
      { context: "Treat", text: "Treat yourself 🧋" },
      { context: "Asian", text: "Bubble tea time 🧋" }
    ],
    misunderstandings: ["Clear boba meaning"],
    relatedEmojis: ["hot-beverage", "teacup", "cup-with-straw"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["bubble tea", "boba", "tapioca", "Asian", "trendy"]
  },
  {
    unicode: "🍵",
    name: "Teacup Without Handle",
    slug: "teacup-without-handle",
    shortMeaning: "A Japanese teacup with green tea.",
    detailedMeaning: "The Teacup Without Handle emoji shows a Japanese-style teacup with matcha/green tea, representing tea, zen, and relaxation.\n\nUsed for tea, matcha, and calm/zen moments.",
    usageContexts: ["Tea", "Matcha", "Zen", "Relaxation", "Japanese"],
    examples: [
      { context: "Tea", text: "Tea time 🍵" },
      { context: "Zen", text: "Finding my zen 🍵" },
      { context: "Matcha", text: "Matcha latte 🍵" }
    ],
    misunderstandings: ["Japanese-style tea specifically"],
    relatedEmojis: ["hot-beverage", "bubble-tea", "herb"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["tea", "matcha", "green tea", "Japanese", "zen"]
  },
  {
    unicode: "🥤",
    name: "Cup with Straw",
    slug: "cup-with-straw",
    shortMeaning: "A disposable cup with straw.",
    detailedMeaning: "The Cup with Straw emoji shows a fast food soft drink cup with straw, representing soda, fast food drinks, and takeout beverages.\n\nUsed for soft drinks, fast food, and takeout.",
    usageContexts: ["Soda", "Fast food", "Takeout", "Drink", "Cold"],
    examples: [
      { context: "Fast food", text: "Combo meal 🥤" },
      { context: "Soda", text: "Cold drink 🥤" },
      { context: "Takeout", text: "Drive-thru 🥤" }
    ],
    misunderstandings: ["Clear soft drink meaning"],
    relatedEmojis: ["hamburger", "french-fries", "beverage-box"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["soda", "drink", "straw", "cup", "fast food"]
  },
  {
    unicode: "🥛",
    name: "Glass of Milk",
    slug: "glass-of-milk",
    shortMeaning: "A glass of milk.",
    detailedMeaning: "The Glass of Milk emoji shows a glass of white milk, representing dairy, cookies and milk, and wholesome nutrition.\n\nUsed for dairy, breakfast, and cookies and milk pairing.",
    usageContexts: ["Dairy", "Breakfast", "Cookies", "Wholesome", "Nutrition"],
    examples: [
      { context: "Cookies", text: "Cookies and milk 🥛" },
      { context: "Breakfast", text: "Morning milk 🥛" },
      { context: "Wholesome", text: "Got milk 🥛" }
    ],
    misunderstandings: ["Clear milk meaning"],
    relatedEmojis: ["cookie", "cow", "baby-bottle"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["milk", "dairy", "glass", "white", "breakfast"]
  },
  {
    unicode: "🍸",
    name: "Cocktail Glass",
    slug: "cocktail-glass",
    shortMeaning: "A martini/cocktail glass.",
    detailedMeaning: "The Cocktail Glass emoji shows a martini glass with olive, representing cocktails, bars, and sophisticated drinking.\n\nUsed for cocktails, martinis, and fancy drinks.",
    usageContexts: ["Cocktails", "Bar", "Martini", "Fancy", "Night out"],
    examples: [
      { context: "Bar", text: "Cocktail hour 🍸" },
      { context: "Fancy", text: "Feeling fancy 🍸" },
      { context: "Night", text: "Night out 🍸" }
    ],
    misunderstandings: ["Alcohol reference"],
    relatedEmojis: ["wine-glass", "tropical-drink", "beer-mug"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["cocktail", "martini", "drink", "bar", "fancy"]
  },
  {
    unicode: "🍹",
    name: "Tropical Drink",
    slug: "tropical-drink",
    shortMeaning: "A tropical cocktail with umbrella.",
    detailedMeaning: "The Tropical Drink emoji shows a colorful cocktail with umbrella and fruit, representing vacation, beach bars, and tropical vibes.\n\nUsed for vacation, tropical destinations, and summer drinks.",
    usageContexts: ["Vacation", "Tropical", "Beach", "Summer", "Cocktail"],
    examples: [
      { context: "Vacation", text: "Vacation mode 🍹" },
      { context: "Beach", text: "Beach bar 🍹" },
      { context: "Summer", text: "Summer vibes 🍹" }
    ],
    misunderstandings: ["Clear tropical drink meaning"],
    relatedEmojis: ["palm-tree", "beach-with-umbrella", "cocktail-glass"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["tropical", "cocktail", "vacation", "beach", "umbrella"]
  },
  {
    unicode: "🍾",
    name: "Bottle with Popping Cork",
    slug: "bottle-with-popping-cork",
    shortMeaning: "Champagne bottle with cork popping.",
    detailedMeaning: "The Bottle with Popping Cork emoji shows a champagne bottle with cork flying off, representing celebration, New Year's, and special occasions.\n\nUsed for celebrations, champagne toasts, and big announcements.",
    usageContexts: ["Celebration", "Champagne", "New Year", "Toast", "Victory"],
    examples: [
      { context: "Celebrate", text: "Pop the champagne 🍾" },
      { context: "New Year", text: "Happy New Year 🍾" },
      { context: "Toast", text: "Cheers 🍾" }
    ],
    misunderstandings: ["Clear celebration meaning"],
    relatedEmojis: ["wine-glass", "party-popper", "clinking-glasses"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["champagne", "celebration", "pop", "cork", "toast"]
  },
  {
    unicode: "🥂",
    name: "Clinking Glasses",
    slug: "clinking-glasses",
    shortMeaning: "Two champagne glasses clinking.",
    detailedMeaning: "The Clinking Glasses emoji shows two champagne flutes toasting, representing celebration, cheers, and special moments.\n\nUsed for toasts, celebrations, and congratulations.",
    usageContexts: ["Toast", "Cheers", "Celebration", "Wedding", "Congrats"],
    examples: [
      { context: "Cheers", text: "Cheers 🥂" },
      { context: "Celebration", text: "Congratulations 🥂" },
      { context: "Wedding", text: "To the happy couple 🥂" }
    ],
    misunderstandings: ["Clear toast/cheers meaning"],
    relatedEmojis: ["bottle-with-popping-cork", "wine-glass", "party-popper"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["cheers", "toast", "champagne", "celebration", "clinking"]
  },
  // MORE DESSERTS
  {
    unicode: "🎂",
    name: "Birthday Cake",
    slug: "birthday-cake",
    shortMeaning: "A birthday cake with candles.",
    detailedMeaning: "The Birthday Cake emoji shows a frosted cake with lit candles, representing birthdays, celebrations, and wishes.\n\nUsed for birthday wishes, celebrations, and party content.",
    usageContexts: ["Birthday", "Celebration", "Party", "Cake", "Wishes"],
    examples: [
      { context: "Birthday", text: "Happy birthday 🎂" },
      { context: "Celebration", text: "Make a wish 🎂" },
      { context: "Party", text: "Party time 🎂" }
    ],
    misunderstandings: ["Clear birthday meaning"],
    relatedEmojis: ["shortcake", "balloon", "party-popper"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["birthday", "cake", "candles", "celebration", "party"]
  },
  {
    unicode: "🍧",
    name: "Shaved Ice",
    slug: "shaved-ice",
    shortMeaning: "A bowl of colorful shaved ice.",
    detailedMeaning: "The Shaved Ice emoji shows a bowl of colorful shaved ice dessert, representing summer treats and frozen desserts.\n\nUsed for summer, frozen treats, and refreshing desserts.",
    usageContexts: ["Summer", "Frozen", "Dessert", "Refreshing", "Colorful"],
    examples: [
      { context: "Summer", text: "Summer treat 🍧" },
      { context: "Refreshing", text: "So refreshing 🍧" },
      { context: "Dessert", text: "Shaved ice 🍧" }
    ],
    misunderstandings: ["Clear shaved ice meaning"],
    relatedEmojis: ["soft-ice-cream", "ice-cream", "snowflake"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["shaved ice", "frozen", "summer", "colorful", "dessert"]
  },
  {
    unicode: "🍨",
    name: "Ice Cream",
    slug: "ice-cream",
    shortMeaning: "A bowl of ice cream scoops.",
    detailedMeaning: "The Ice Cream emoji shows a bowl with scoops of ice cream, representing dessert, summer, and sweet indulgence.\n\nUsed for ice cream, desserts, and treating yourself.",
    usageContexts: ["Dessert", "Summer", "Sweet", "Treat", "Indulgence"],
    examples: [
      { context: "Dessert", text: "Ice cream time 🍨" },
      { context: "Treat", text: "Treat yourself 🍨" },
      { context: "Summer", text: "Summer favorite 🍨" }
    ],
    misunderstandings: ["Clear ice cream meaning"],
    relatedEmojis: ["soft-ice-cream", "shaved-ice", "chocolate-bar"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["ice cream", "dessert", "bowl", "scoops", "sweet"]
  },
  {
    unicode: "🍮",
    name: "Custard",
    slug: "custard",
    shortMeaning: "A caramel custard/flan.",
    detailedMeaning: "The Custard emoji shows a caramel custard or flan dessert, representing creamy desserts and Latin American/Asian cuisine.\n\nUsed for flan, pudding, and custard desserts.",
    usageContexts: ["Dessert", "Flan", "Custard", "Creamy", "Sweet"],
    examples: [
      { context: "Dessert", text: "Flan for dessert 🍮" },
      { context: "Sweet", text: "Creamy custard 🍮" },
      { context: "Treat", text: "Sweet treat 🍮" }
    ],
    misunderstandings: ["Clear custard/flan meaning"],
    relatedEmojis: ["shortcake", "pie", "pudding"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["custard", "flan", "dessert", "caramel", "pudding"]
  },
  {
    unicode: "🧈",
    name: "Butter",
    slug: "butter",
    shortMeaning: "A stick of butter.",
    detailedMeaning: "The Butter emoji shows a stick of yellow butter, representing baking, cooking, and rich flavors.\n\nUsed for baking, cooking, and buttery expressions.",
    usageContexts: ["Baking", "Cooking", "Rich", "Spread", "Dairy"],
    examples: [
      { context: "Baking", text: "Butter makes it better 🧈" },
      { context: "Toast", text: "Toast and butter 🧈" },
      { context: "Smooth", text: "Smooth like butter 🧈" }
    ],
    misunderstandings: ["Clear butter meaning"],
    relatedEmojis: ["bread", "pancakes", "cookie"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["butter", "dairy", "baking", "spread", "rich"]
  },
  {
    unicode: "🧂",
    name: "Salt",
    slug: "salt",
    shortMeaning: "A salt shaker.",
    detailedMeaning: "The Salt emoji shows a salt shaker, representing seasoning and the slang term 'salty' meaning upset or bitter.\n\nUsed for cooking, seasoning, and expressing saltiness/bitterness.",
    usageContexts: ["Cooking", "Seasoning", "Salty", "Bitter", "Flavor"],
    examples: [
      { context: "Cooking", text: "Add some salt 🧂" },
      { context: "Salty", text: "Don't be salty 🧂" },
      { context: "Flavor", text: "Needs more seasoning 🧂" }
    ],
    misunderstandings: ["Salty means upset in slang"],
    relatedEmojis: ["hot-pepper", "garlic", "cooking"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["salt", "salty", "seasoning", "cooking", "flavor"]
  },
  {
    unicode: "🍯",
    name: "Honey Pot",
    slug: "honey-pot",
    shortMeaning: "A pot of golden honey.",
    detailedMeaning: "The Honey Pot emoji shows a jar of honey with a dipper, representing sweetness, bees, and natural sweeteners.\n\nUsed for honey, sweetness, and terms of endearment like 'honey.'",
    usageContexts: ["Sweet", "Honey", "Natural", "Endearment", "Bees"],
    examples: [
      { context: "Sweet", text: "Sweet as honey 🍯" },
      { context: "Endearment", text: "Hey honey 🍯" },
      { context: "Natural", text: "Natural sweetness 🍯" }
    ],
    misunderstandings: ["Term of endearment"],
    relatedEmojis: ["bee", "pancakes", "tea"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["honey", "sweet", "bee", "natural", "pot"]
  },
  {
    unicode: "🥜",
    name: "Peanuts",
    slug: "peanuts",
    shortMeaning: "Peanuts in shells.",
    detailedMeaning: "The Peanuts emoji shows peanuts in their shells, representing nuts, snacks, and peanut butter.\n\nUsed for nuts, snacks, and baseball games.",
    usageContexts: ["Snack", "Nuts", "Baseball", "Peanut butter", "Protein"],
    examples: [
      { context: "Snack", text: "Peanut snack 🥜" },
      { context: "Baseball", text: "Ballpark peanuts 🥜" },
      { context: "Butter", text: "Peanut butter time 🥜" }
    ],
    misunderstandings: ["Allergy awareness"],
    relatedEmojis: ["chestnut", "bread", "baseball"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["peanuts", "nuts", "snack", "protein", "baseball"]
  },
  {
    unicode: "🌰",
    name: "Chestnut",
    slug: "chestnut",
    shortMeaning: "A chestnut nut.",
    detailedMeaning: "The Chestnut emoji shows a brown chestnut, representing fall, roasted chestnuts, and the holiday season.\n\nUsed for fall, winter holidays, and roasted chestnuts.",
    usageContexts: ["Fall", "Winter", "Roasted", "Holidays", "Nuts"],
    examples: [
      { context: "Winter", text: "Chestnuts roasting 🌰" },
      { context: "Fall", text: "Autumn vibes 🌰" },
      { context: "Holiday", text: "Holiday treats 🌰" }
    ],
    misunderstandings: ["Clear chestnut meaning"],
    relatedEmojis: ["peanuts", "maple-leaf", "fire"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["chestnut", "nut", "fall", "roasted", "winter"]
  },
  // MORE INTERNATIONAL CUISINE
  {
    unicode: "🫕",
    name: "Fondue",
    slug: "fondue",
    shortMeaning: "A pot of melted fondue.",
    detailedMeaning: "The Fondue emoji shows a fondue pot with dipping forks, representing Swiss cuisine, cheese, and chocolate fondue.\n\nUsed for fondue parties, Swiss food, and dipping treats.",
    usageContexts: ["Swiss", "Cheese", "Chocolate", "Party", "Dipping"],
    examples: [
      { context: "Party", text: "Fondue night 🫕" },
      { context: "Cheese", text: "Cheese fondue 🫕" },
      { context: "Chocolate", text: "Chocolate fondue 🫕" }
    ],
    misunderstandings: ["Clear fondue meaning"],
    relatedEmojis: ["cheese-wedge", "chocolate-bar", "switzerland-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["fondue", "Swiss", "cheese", "chocolate", "dipping"]
  },
  {
    unicode: "🥫",
    name: "Canned Food",
    slug: "canned-food",
    shortMeaning: "A can of food.",
    detailedMeaning: "The Canned Food emoji shows a sealed can of food, representing preserved foods, soup, and pantry staples.\n\nUsed for canned goods, soup, and food storage.",
    usageContexts: ["Canned", "Soup", "Pantry", "Preserved", "Storage"],
    examples: [
      { context: "Soup", text: "Canned soup 🥫" },
      { context: "Pantry", text: "Stocking up 🥫" },
      { context: "Emergency", text: "Emergency supplies 🥫" }
    ],
    misunderstandings: ["Clear canned food meaning"],
    relatedEmojis: ["steaming-bowl", "bread", "spoon"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["canned", "food", "soup", "preserved", "pantry"]
  },
  {
    unicode: "🍱",
    name: "Bento Box",
    slug: "bento-box",
    shortMeaning: "A Japanese bento box meal.",
    detailedMeaning: "The Bento Box emoji shows a compartmentalized Japanese lunch box with various foods, representing organized meals and Japanese cuisine.\n\nUsed for Japanese food, meal prep, and organized eating.",
    usageContexts: ["Japanese", "Lunch", "Organized", "Meal prep", "Bento"],
    examples: [
      { context: "Lunch", text: "Bento for lunch 🍱" },
      { context: "Prep", text: "Meal prep done 🍱" },
      { context: "Japanese", text: "Japanese lunch 🍱" }
    ],
    misunderstandings: ["Clear bento meaning"],
    relatedEmojis: ["rice-ball", "sushi", "chopsticks"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["bento", "Japanese", "lunch", "box", "organized"]
  },
  {
    unicode: "🍲",
    name: "Pot of Food",
    slug: "pot-of-food",
    shortMeaning: "A pot of stew or soup.",
    detailedMeaning: "The Pot of Food emoji shows a pot filled with stew or hearty food, representing home cooking, comfort food, and warm meals.\n\nUsed for stews, soups, and homemade comfort food.",
    usageContexts: ["Stew", "Soup", "Comfort", "Homemade", "Warm"],
    examples: [
      { context: "Comfort", text: "Comfort food 🍲" },
      { context: "Winter", text: "Warm stew 🍲" },
      { context: "Homemade", text: "Homemade goodness 🍲" }
    ],
    misunderstandings: ["Clear stew/pot meaning"],
    relatedEmojis: ["steaming-bowl", "curry-rice", "hot-beverage"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["stew", "soup", "pot", "comfort", "homemade"]
  },
  {
    unicode: "🫓",
    name: "Flatbread",
    slug: "flatbread",
    shortMeaning: "A round flatbread.",
    detailedMeaning: "The Flatbread emoji shows a round flatbread like pita, naan, or tortilla, representing various international breads.\n\nUsed for pita, naan, tortilla, and flatbread dishes.",
    usageContexts: ["Bread", "Pita", "Naan", "Tortilla", "International"],
    examples: [
      { context: "Mediterranean", text: "Fresh pita 🫓" },
      { context: "Indian", text: "Warm naan 🫓" },
      { context: "Mexican", text: "Homemade tortillas 🫓" }
    ],
    misunderstandings: ["Various types of flatbread"],
    relatedEmojis: ["baguette-bread", "taco", "falafel"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["flatbread", "pita", "naan", "tortilla", "bread"]
  },
  {
    unicode: "🧆",
    name: "Falafel",
    slug: "falafel",
    shortMeaning: "Deep-fried falafel balls.",
    detailedMeaning: "The Falafel emoji shows fried falafel balls, representing Middle Eastern cuisine and vegetarian protein.\n\nUsed for Middle Eastern food, vegetarian options, and street food.",
    usageContexts: ["Middle Eastern", "Vegetarian", "Street food", "Chickpea", "Fried"],
    examples: [
      { context: "Vegetarian", text: "Falafel wrap 🧆" },
      { context: "Middle Eastern", text: "Mediterranean lunch 🧆" },
      { context: "Street food", text: "Street food vibes 🧆" }
    ],
    misunderstandings: ["Clear falafel meaning"],
    relatedEmojis: ["flatbread", "salad", "hummus"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["falafel", "Middle Eastern", "vegetarian", "chickpea", "fried"]
  },
  {
    unicode: "🥙",
    name: "Stuffed Flatbread",
    slug: "stuffed-flatbread",
    shortMeaning: "A pita stuffed with fillings.",
    detailedMeaning: "The Stuffed Flatbread emoji shows a pita pocket filled with meat and vegetables, representing gyros, shawarma, and Mediterranean food.\n\nUsed for gyros, shawarma, kebabs, and Mediterranean cuisine.",
    usageContexts: ["Gyro", "Shawarma", "Mediterranean", "Kebab", "Wrap"],
    examples: [
      { context: "Mediterranean", text: "Gyro time 🥙" },
      { context: "Shawarma", text: "Shawarma run 🥙" },
      { context: "Lunch", text: "Mediterranean wrap 🥙" }
    ],
    misunderstandings: ["Various Mediterranean wraps"],
    relatedEmojis: ["falafel", "flatbread", "salad"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["gyro", "shawarma", "pita", "Mediterranean", "wrap"]
  },
  {
    unicode: "🥚",
    name: "Egg",
    slug: "egg",
    shortMeaning: "A whole egg.",
    detailedMeaning: "The Egg emoji shows a white/brown egg, representing eggs, breakfast, and baking ingredient.\n\nUsed for eggs, breakfast, Easter, and baking.",
    usageContexts: ["Breakfast", "Baking", "Easter", "Protein", "Ingredient"],
    examples: [
      { context: "Breakfast", text: "Eggs for breakfast 🥚" },
      { context: "Easter", text: "Easter eggs 🥚" },
      { context: "Baking", text: "Fresh eggs 🥚" }
    ],
    misunderstandings: ["Clear egg meaning"],
    relatedEmojis: ["cooking", "bacon", "chicken"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["egg", "breakfast", "Easter", "baking", "protein"]
  },
  {
    unicode: "🫛",
    name: "Pea Pod",
    slug: "pea-pod",
    shortMeaning: "A green pea pod.",
    detailedMeaning: "The Pea Pod emoji shows a green pea pod with peas inside, representing vegetables, healthy eating, and 'like two peas in a pod.'\n\nUsed for vegetables, healthy eating, and close friendships.",
    usageContexts: ["Vegetables", "Healthy", "Friendship", "Green", "Fresh"],
    examples: [
      { context: "Healthy", text: "Eat your greens 🫛" },
      { context: "Friendship", text: "Two peas in a pod 🫛" },
      { context: "Fresh", text: "Fresh peas 🫛" }
    ],
    misunderstandings: ["Peas in a pod idiom"],
    relatedEmojis: ["broccoli", "salad", "carrot"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["peas", "pod", "vegetable", "green", "healthy"]
  },
  {
    unicode: "🫑",
    name: "Bell Pepper",
    slug: "bell-pepper",
    shortMeaning: "A green bell pepper.",
    detailedMeaning: "The Bell Pepper emoji shows a green bell pepper, representing vegetables, cooking, and colorful produce.\n\nUsed for cooking, vegetables, and colorful food.",
    usageContexts: ["Vegetable", "Cooking", "Colorful", "Fresh", "Healthy"],
    examples: [
      { context: "Cooking", text: "Stuffed peppers 🫑" },
      { context: "Healthy", text: "Fresh veggies 🫑" },
      { context: "Colorful", text: "Colorful salad 🫑" }
    ],
    misunderstandings: ["Clear bell pepper meaning"],
    relatedEmojis: ["hot-pepper", "broccoli", "salad"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["bell pepper", "vegetable", "green", "cooking", "fresh"]
  },
  {
    unicode: "🥬",
    name: "Leafy Green",
    slug: "leafy-green",
    shortMeaning: "A leafy green vegetable.",
    detailedMeaning: "The Leafy Green emoji shows a leafy vegetable like bok choy or lettuce, representing healthy eating and greens.\n\nUsed for salads, healthy eating, and green vegetables.",
    usageContexts: ["Healthy", "Salad", "Green", "Vegetable", "Diet"],
    examples: [
      { context: "Healthy", text: "Eating my greens 🥬" },
      { context: "Salad", text: "Salad time 🥬" },
      { context: "Diet", text: "Healthy choices 🥬" }
    ],
    misunderstandings: ["Clear leafy green meaning"],
    relatedEmojis: ["broccoli", "salad", "cucumber"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["leafy", "green", "vegetable", "healthy", "salad"]
  },
  {
    unicode: "🍠",
    name: "Roasted Sweet Potato",
    slug: "roasted-sweet-potato",
    shortMeaning: "A roasted sweet potato.",
    detailedMeaning: "The Roasted Sweet Potato emoji shows a split roasted sweet potato, representing Japanese street food and healthy carbs.\n\nUsed for sweet potatoes, healthy eating, and fall foods.",
    usageContexts: ["Sweet potato", "Healthy", "Fall", "Japanese", "Roasted"],
    examples: [
      { context: "Healthy", text: "Sweet potato love 🍠" },
      { context: "Fall", text: "Fall comfort food 🍠" },
      { context: "Roasted", text: "Roasted goodness 🍠" }
    ],
    misunderstandings: ["Clear sweet potato meaning"],
    relatedEmojis: ["potato", "carrot", "maple-leaf"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["sweet potato", "roasted", "healthy", "fall", "Japanese"]
  },
  {
    unicode: "🥯",
    name: "Bagel",
    slug: "bagel",
    shortMeaning: "A bagel with cream cheese.",
    detailedMeaning: "The Bagel emoji shows a bagel, often associated with New York and breakfast culture.\n\nUsed for breakfast, NYC food, and deli culture.",
    usageContexts: ["Breakfast", "NYC", "Deli", "Bagel", "Morning"],
    examples: [
      { context: "Breakfast", text: "Bagel and coffee 🥯" },
      { context: "NYC", text: "NYC breakfast 🥯" },
      { context: "Deli", text: "Everything bagel 🥯" }
    ],
    misunderstandings: ["Clear bagel meaning"],
    relatedEmojis: ["bread", "hot-beverage", "cheese-wedge"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["bagel", "breakfast", "NYC", "deli", "bread"]
  },
  {
    unicode: "🥨",
    name: "Pretzel",
    slug: "pretzel",
    shortMeaning: "A twisted pretzel.",
    detailedMeaning: "The Pretzel emoji shows a twisted pretzel, representing German cuisine, snacks, and festivals.\n\nUsed for snacks, Oktoberfest, and German food.",
    usageContexts: ["Snack", "German", "Oktoberfest", "Festival", "Salty"],
    examples: [
      { context: "Snack", text: "Pretzel snack 🥨" },
      { context: "Oktoberfest", text: "Oktoberfest vibes 🥨" },
      { context: "German", text: "German bakery 🥨" }
    ],
    misunderstandings: ["Clear pretzel meaning"],
    relatedEmojis: ["beer-mug", "bread", "german-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["pretzel", "German", "snack", "twisted", "Oktoberfest"]
  },
  {
    unicode: "🍿",
    name: "Popcorn",
    slug: "popcorn",
    shortMeaning: "A box of popcorn.",
    detailedMeaning: "The Popcorn emoji shows a red and white striped box of popcorn, representing movies, entertainment, and snacking.\n\nUsed for movies, drama watching, and entertainment.",
    usageContexts: ["Movies", "Snack", "Entertainment", "Drama", "Theater"],
    examples: [
      { context: "Movies", text: "Movie night 🍿" },
      { context: "Drama", text: "Watching the drama 🍿" },
      { context: "Snack", text: "Popcorn time 🍿" }
    ],
    misunderstandings: ["Used for watching drama unfold"],
    relatedEmojis: ["movie-camera", "clapper-board", "candy"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["popcorn", "movies", "snack", "theater", "drama"]
  },
  {
    unicode: "🧅",
    name: "Onion",
    slug: "onion",
    shortMeaning: "A yellow onion.",
    detailedMeaning: "The Onion emoji shows an onion, representing cooking, layers, and crying while chopping.\n\nUsed for cooking, tears, and the 'layers' concept.",
    usageContexts: ["Cooking", "Layers", "Tears", "Vegetable", "Flavor"],
    examples: [
      { context: "Cooking", text: "Chopping onions 🧅" },
      { context: "Tears", text: "Making me cry 🧅" },
      { context: "Layers", text: "Like an onion 🧅" }
    ],
    misunderstandings: ["Shrek layers reference"],
    relatedEmojis: ["garlic", "cooking", "carrot"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["onion", "cooking", "layers", "tears", "vegetable"]
  },
  {
    unicode: "🫚",
    name: "Ginger Root",
    slug: "ginger-root",
    shortMeaning: "A piece of fresh ginger.",
    detailedMeaning: "The Ginger Root emoji shows fresh ginger root, representing Asian cooking, health remedies, and spicy flavor.\n\nUsed for cooking, tea, and health remedies.",
    usageContexts: ["Cooking", "Health", "Asian", "Tea", "Spicy"],
    examples: [
      { context: "Cooking", text: "Fresh ginger 🫚" },
      { context: "Health", text: "Ginger tea 🫚" },
      { context: "Asian", text: "Asian cooking 🫚" }
    ],
    misunderstandings: ["Clear ginger meaning"],
    relatedEmojis: ["garlic", "hot-beverage", "herb"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["ginger", "root", "cooking", "Asian", "health"]
  },
  // MORE BEVERAGES
  {
    unicode: "🍶",
    name: "Sake",
    slug: "sake",
    shortMeaning: "A bottle of sake and cup.",
    detailedMeaning: "The Sake emoji shows a bottle and cup of Japanese rice wine, representing Japanese culture and drinking.\n\nUsed for sake, Japanese dining, and Asian cuisine.",
    usageContexts: ["Japanese", "Sake", "Drinking", "Dining", "Asian"],
    examples: [
      { context: "Japanese", text: "Sake with sushi 🍶" },
      { context: "Toast", text: "Kanpai 🍶" },
      { context: "Dining", text: "Japanese dinner 🍶" }
    ],
    misunderstandings: ["Japanese rice wine"],
    relatedEmojis: ["sushi", "japanese-flag", "wine-glass"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["sake", "Japanese", "rice wine", "drink", "alcohol"]
  },
  {
    unicode: "🫖",
    name: "Teapot",
    slug: "teapot",
    shortMeaning: "A ceramic teapot.",
    detailedMeaning: "The Teapot emoji shows a decorative teapot, representing tea time, British culture, and hospitality.\n\nUsed for tea, British culture, and cozy moments.",
    usageContexts: ["Tea", "British", "Hospitality", "Cozy", "Afternoon"],
    examples: [
      { context: "Tea time", text: "Tea time 🫖" },
      { context: "British", text: "British vibes 🫖" },
      { context: "Cozy", text: "Cozy afternoon 🫖" }
    ],
    misunderstandings: ["Clear teapot meaning"],
    relatedEmojis: ["hot-beverage", "teacup-without-handle", "british-flag"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["teapot", "tea", "British", "afternoon", "cozy"]
  },
  {
    unicode: "🍻",
    name: "Clinking Beer Mugs",
    slug: "clinking-beer-mugs",
    shortMeaning: "Two beer mugs toasting.",
    detailedMeaning: "The Clinking Beer Mugs emoji shows two beer mugs clinking together, representing cheers, celebration, and drinking with friends.\n\nUsed for toasts, celebrations, and drinking with friends.",
    usageContexts: ["Cheers", "Toast", "Friends", "Celebration", "Beer"],
    examples: [
      { context: "Cheers", text: "Cheers 🍻" },
      { context: "Friends", text: "Beers with friends 🍻" },
      { context: "Celebration", text: "Celebrating 🍻" }
    ],
    misunderstandings: ["Clear beer toast meaning"],
    relatedEmojis: ["beer-mug", "clinking-glasses", "party-popper"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["beer", "cheers", "toast", "celebration", "clinking"]
  },
  {
    unicode: "🥃",
    name: "Tumbler Glass",
    slug: "tumbler-glass",
    shortMeaning: "A glass of whiskey.",
    detailedMeaning: "The Tumbler Glass emoji shows a short glass with amber liquid, representing whiskey, bourbon, and sophisticated drinking.\n\nUsed for whiskey, bourbon, and refined drinks.",
    usageContexts: ["Whiskey", "Bourbon", "Sophisticated", "Evening", "Classy"],
    examples: [
      { context: "Whiskey", text: "Whiskey neat 🥃" },
      { context: "Evening", text: "Evening drink 🥃" },
      { context: "Classy", text: "Classy vibes 🥃" }
    ],
    misunderstandings: ["Clear whiskey meaning"],
    relatedEmojis: ["cocktail-glass", "wine-glass", "ice-cube"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["whiskey", "bourbon", "tumbler", "drink", "alcohol"]
  },
  {
    unicode: "🧊",
    name: "Ice",
    slug: "ice",
    shortMeaning: "An ice cube.",
    detailedMeaning: "The Ice emoji shows a blue ice cube, representing cold drinks, ice, and the slang term 'ice' for diamonds/jewelry.\n\nUsed for cold drinks, cooling down, and slang for jewelry.",
    usageContexts: ["Cold", "Drinks", "Ice", "Diamonds", "Cool"],
    examples: [
      { context: "Cold", text: "On the rocks 🧊" },
      { context: "Cooling", text: "Need to cool down 🧊" },
      { context: "Slang", text: "Iced out 🧊" }
    ],
    misunderstandings: ["Slang for diamonds/jewelry"],
    relatedEmojis: ["snowflake", "tumbler-glass", "cold-face"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["ice", "cold", "cube", "frozen", "cool"]
  },
  {
    unicode: "🍼",
    name: "Baby Bottle",
    slug: "baby-bottle",
    shortMeaning: "A baby's milk bottle.",
    detailedMeaning: "The Baby Bottle emoji shows a baby bottle with milk, representing babies, parenting, and infant feeding.\n\nUsed for babies, parenting, and newborn content.",
    usageContexts: ["Baby", "Parenting", "Milk", "Newborn", "Feeding"],
    examples: [
      { context: "Baby", text: "Feeding time 🍼" },
      { context: "Parenting", text: "New parent life 🍼" },
      { context: "Newborn", text: "Baby content 🍼" }
    ],
    misunderstandings: ["Clear baby bottle meaning"],
    relatedEmojis: ["baby", "glass-of-milk", "pacifier"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["baby", "bottle", "milk", "feeding", "infant"]
  },
  {
    unicode: "🫘",
    name: "Beans",
    slug: "beans",
    shortMeaning: "A pile of beans.",
    detailedMeaning: "The Beans emoji shows kidney beans, representing legumes, protein, and Mexican/Latin cuisine.\n\nUsed for beans, healthy eating, and Latin American food.",
    usageContexts: ["Beans", "Protein", "Mexican", "Healthy", "Legumes"],
    examples: [
      { context: "Mexican", text: "Refried beans 🫘" },
      { context: "Healthy", text: "Plant protein 🫘" },
      { context: "Cooking", text: "Bean stew 🫘" }
    ],
    misunderstandings: ["Clear beans meaning"],
    relatedEmojis: ["taco", "burrito", "pot-of-food"],
    categorySlug: "food-and-drink",
    subgroup: "food-vegetable",
    keywords: ["beans", "legumes", "protein", "Mexican", "healthy"]
  },
  {
    unicode: "🥮",
    name: "Moon Cake",
    slug: "moon-cake",
    shortMeaning: "A Chinese mooncake.",
    detailedMeaning: "The Moon Cake emoji shows a traditional Chinese mooncake, representing the Mid-Autumn Festival and Chinese culture.\n\nUsed for Mid-Autumn Festival, Chinese celebrations, and traditional desserts.",
    usageContexts: ["Chinese", "Festival", "Traditional", "Dessert", "Moon"],
    examples: [
      { context: "Festival", text: "Mid-Autumn Festival 🥮" },
      { context: "Chinese", text: "Mooncake time 🥮" },
      { context: "Traditional", text: "Traditional treat 🥮" }
    ],
    misunderstandings: ["Chinese festival food"],
    relatedEmojis: ["full-moon", "chinese-flag", "lantern"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["mooncake", "Chinese", "festival", "Mid-Autumn", "traditional"]
  },
  {
    unicode: "🫙",
    name: "Jar",
    slug: "jar",
    shortMeaning: "An empty jar.",
    detailedMeaning: "The Jar emoji shows a glass jar, representing canning, storage, and homemade preserves.\n\nUsed for canning, mason jars, and food storage.",
    usageContexts: ["Canning", "Storage", "Homemade", "Preserves", "Mason jar"],
    examples: [
      { context: "Canning", text: "Canning season 🫙" },
      { context: "Homemade", text: "Homemade jam 🫙" },
      { context: "Storage", text: "Storing goodies 🫙" }
    ],
    misunderstandings: ["Clear jar meaning"],
    relatedEmojis: ["honey-pot", "strawberry", "tomato"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["jar", "mason", "canning", "storage", "preserves"]
  },
  {
    unicode: "🍢",
    name: "Oden",
    slug: "oden",
    shortMeaning: "Japanese oden on a skewer.",
    detailedMeaning: "The Oden emoji shows skewered oden ingredients, representing Japanese street food and winter comfort food.\n\nUsed for Japanese food, street food, and winter comfort meals.",
    usageContexts: ["Japanese", "Street food", "Winter", "Skewer", "Comfort"],
    examples: [
      { context: "Japanese", text: "Japanese street food 🍢" },
      { context: "Winter", text: "Winter warmth 🍢" },
      { context: "Street food", text: "Food stall vibes 🍢" }
    ],
    misunderstandings: ["Japanese oden specifically"],
    relatedEmojis: ["steaming-bowl", "chopsticks", "japanese-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["oden", "Japanese", "skewer", "street food", "winter"]
  },
  {
    unicode: "🍡",
    name: "Dango",
    slug: "dango",
    shortMeaning: "Japanese dango sweets.",
    detailedMeaning: "The Dango emoji shows colorful Japanese dango on a stick, representing Japanese sweets and festivals.\n\nUsed for Japanese sweets, festivals, and cute food.",
    usageContexts: ["Japanese", "Sweets", "Festival", "Cute", "Colorful"],
    examples: [
      { context: "Japanese", text: "Japanese sweets 🍡" },
      { context: "Festival", text: "Festival treats 🍡" },
      { context: "Cute", text: "So cute 🍡" }
    ],
    misunderstandings: ["Japanese dango specifically"],
    relatedEmojis: ["oden", "rice-ball", "cherry-blossom"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["dango", "Japanese", "sweets", "festival", "colorful"]
  },
  {
    unicode: "🍘",
    name: "Rice Cracker",
    slug: "rice-cracker",
    shortMeaning: "A Japanese rice cracker.",
    detailedMeaning: "The Rice Cracker emoji shows a senbei rice cracker, representing Japanese snacks and tea time treats.\n\nUsed for Japanese snacks, tea time, and Asian crackers.",
    usageContexts: ["Japanese", "Snack", "Tea time", "Cracker", "Asian"],
    examples: [
      { context: "Snack", text: "Snack time 🍘" },
      { context: "Tea", text: "Tea and crackers 🍘" },
      { context: "Japanese", text: "Japanese snacks 🍘" }
    ],
    misunderstandings: ["Japanese senbei specifically"],
    relatedEmojis: ["rice-ball", "teacup-without-handle", "cookie"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["rice cracker", "senbei", "Japanese", "snack", "tea"]
  },
  {
    unicode: "🍥",
    name: "Fish Cake with Swirl",
    slug: "fish-cake-with-swirl",
    shortMeaning: "A Japanese narutomaki fish cake.",
    detailedMeaning: "The Fish Cake with Swirl emoji shows a narutomaki fish cake with pink swirl, representing ramen toppings and Japanese cuisine.\n\nUsed for ramen, Japanese food, and the Naruto anime reference.",
    usageContexts: ["Ramen", "Japanese", "Naruto", "Topping", "Anime"],
    examples: [
      { context: "Ramen", text: "Ramen topping 🍥" },
      { context: "Japanese", text: "Japanese food 🍥" },
      { context: "Anime", text: "Naruto reference 🍥" }
    ],
    misunderstandings: ["Naruto anime reference"],
    relatedEmojis: ["steaming-bowl", "sushi", "chopsticks"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["narutomaki", "fish cake", "ramen", "Japanese", "swirl"]
  },
  {
    unicode: "🦪",
    name: "Oyster",
    slug: "oyster",
    shortMeaning: "An oyster with pearl.",
    detailedMeaning: "The Oyster emoji shows an opened oyster, representing seafood, luxury dining, and pearls.\n\nUsed for seafood, oyster bars, and the phrase 'the world is your oyster.'",
    usageContexts: ["Seafood", "Luxury", "Pearl", "Oyster bar", "Opportunity"],
    examples: [
      { context: "Seafood", text: "Fresh oysters 🦪" },
      { context: "Luxury", text: "Oyster bar 🦪" },
      { context: "Saying", text: "World is your oyster 🦪" }
    ],
    misunderstandings: ["Oyster idiom"],
    relatedEmojis: ["shrimp", "crab", "lobster"],
    categorySlug: "food-and-drink",
    subgroup: "food-marine",
    keywords: ["oyster", "seafood", "pearl", "luxury", "shellfish"]
  },
  {
    unicode: "🦐",
    name: "Shrimp",
    slug: "shrimp",
    shortMeaning: "A cooked shrimp.",
    detailedMeaning: "The Shrimp emoji shows a curved orange shrimp, representing seafood and the slang 'shrimp' for a small person.\n\nUsed for seafood, sushi, and small/short person jokes.",
    usageContexts: ["Seafood", "Shrimp", "Small", "Sushi", "Cocktail"],
    examples: [
      { context: "Seafood", text: "Shrimp cocktail 🦐" },
      { context: "Sushi", text: "Ebi sushi 🦐" },
      { context: "Slang", text: "Little shrimp 🦐" }
    ],
    misunderstandings: ["Slang for small person"],
    relatedEmojis: ["lobster", "crab", "sushi"],
    categorySlug: "food-and-drink",
    subgroup: "food-marine",
    keywords: ["shrimp", "prawn", "seafood", "small", "pink"]
  },
  {
    unicode: "🦞",
    name: "Lobster",
    slug: "lobster",
    shortMeaning: "A red lobster.",
    detailedMeaning: "The Lobster emoji shows a red lobster, representing luxury seafood, New England, and fancy dining.\n\nUsed for lobster, fancy dinners, and coastal cuisine.",
    usageContexts: ["Seafood", "Luxury", "New England", "Fancy", "Coastal"],
    examples: [
      { context: "Fancy", text: "Lobster dinner 🦞" },
      { context: "Coastal", text: "Maine vibes 🦞" },
      { context: "Seafood", text: "Fresh catch 🦞" }
    ],
    misunderstandings: ["Clear lobster meaning"],
    relatedEmojis: ["crab", "shrimp", "butter"],
    categorySlug: "food-and-drink",
    subgroup: "food-marine",
    keywords: ["lobster", "seafood", "luxury", "red", "New England"]
  },
  {
    unicode: "🦀",
    name: "Crab",
    slug: "crab",
    shortMeaning: "A red crab.",
    detailedMeaning: "The Crab emoji shows a red crab, representing seafood, beach, and the Cancer zodiac sign.\n\nUsed for seafood, beach content, and Cancer zodiac.",
    usageContexts: ["Seafood", "Beach", "Cancer zodiac", "Coastal", "Crab"],
    examples: [
      { context: "Seafood", text: "Crab legs 🦀" },
      { context: "Beach", text: "Beach vibes 🦀" },
      { context: "Zodiac", text: "Cancer season 🦀" }
    ],
    misunderstandings: ["Cancer zodiac association"],
    relatedEmojis: ["lobster", "shrimp", "beach-with-umbrella"],
    categorySlug: "food-and-drink",
    subgroup: "food-marine",
    keywords: ["crab", "seafood", "Cancer", "beach", "shellfish"]
  },
  {
    unicode: "🍤",
    name: "Fried Shrimp",
    slug: "fried-shrimp",
    shortMeaning: "A breaded fried shrimp.",
    detailedMeaning: "The Fried Shrimp emoji shows a tempura or breaded fried shrimp, representing Japanese cuisine and fried seafood.\n\nUsed for tempura, fried seafood, and Japanese food.",
    usageContexts: ["Japanese", "Tempura", "Fried", "Seafood", "Crispy"],
    examples: [
      { context: "Tempura", text: "Shrimp tempura 🍤" },
      { context: "Fried", text: "Crispy shrimp 🍤" },
      { context: "Japanese", text: "Japanese food 🍤" }
    ],
    misunderstandings: ["Clear fried shrimp meaning"],
    relatedEmojis: ["shrimp", "sushi", "chopsticks"],
    categorySlug: "food-and-drink",
    subgroup: "food-marine",
    keywords: ["shrimp", "tempura", "fried", "Japanese", "crispy"]
  },
  {
    unicode: "🫒",
    name: "Olive",
    slug: "olive",
    shortMeaning: "A green olive.",
    detailedMeaning: "The Olive emoji shows a green olive, representing Mediterranean cuisine, olive oil, and martinis.\n\nUsed for Mediterranean food, olive oil, and cocktails.",
    usageContexts: ["Mediterranean", "Olive oil", "Martini", "Greek", "Italian"],
    examples: [
      { context: "Mediterranean", text: "Mediterranean flavors 🫒" },
      { context: "Martini", text: "Dirty martini 🫒" },
      { context: "Olive oil", text: "Extra virgin 🫒" }
    ],
    misunderstandings: ["Clear olive meaning"],
    relatedEmojis: ["cocktail-glass", "salad", "cheese-wedge"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["olive", "Mediterranean", "oil", "Greek", "martini"]
  },
  {
    unicode: "🫐",
    name: "Blueberries",
    slug: "blueberries",
    shortMeaning: "Fresh blueberries.",
    detailedMeaning: "The Blueberries emoji shows a cluster of blueberries, representing healthy berries and antioxidants.\n\nUsed for berries, healthy eating, and smoothies.",
    usageContexts: ["Berries", "Healthy", "Antioxidants", "Smoothie", "Fresh"],
    examples: [
      { context: "Healthy", text: "Antioxidant power 🫐" },
      { context: "Smoothie", text: "Blueberry smoothie 🫐" },
      { context: "Fresh", text: "Fresh berries 🫐" }
    ],
    misunderstandings: ["Clear blueberry meaning"],
    relatedEmojis: ["strawberry", "grapes", "cherries"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["blueberries", "berries", "healthy", "antioxidants", "blue"]
  },
  {
    unicode: "🥝",
    name: "Kiwi Fruit",
    slug: "kiwi-fruit",
    shortMeaning: "A sliced kiwi.",
    detailedMeaning: "The Kiwi Fruit emoji shows a halved kiwi fruit, representing exotic fruit and New Zealand.\n\nUsed for kiwi, exotic fruits, and New Zealand references.",
    usageContexts: ["Kiwi", "Exotic", "New Zealand", "Fruit", "Green"],
    examples: [
      { context: "Fruit", text: "Fresh kiwi 🥝" },
      { context: "Healthy", text: "Vitamin C boost 🥝" },
      { context: "Exotic", text: "Tropical fruits 🥝" }
    ],
    misunderstandings: ["New Zealand bird/people reference"],
    relatedEmojis: ["mango", "strawberry", "new-zealand-flag"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["kiwi", "fruit", "New Zealand", "green", "exotic"]
  },
  {
    unicode: "🍈",
    name: "Melon",
    slug: "melon",
    shortMeaning: "A whole melon.",
    detailedMeaning: "The Melon emoji shows a honeydew or cantaloupe melon, representing sweet fruit and summer.\n\nUsed for melons, summer, and sweet fruit.",
    usageContexts: ["Melon", "Summer", "Sweet", "Fruit", "Refreshing"],
    examples: [
      { context: "Summer", text: "Summer melon 🍈" },
      { context: "Sweet", text: "Sweet treat 🍈" },
      { context: "Refreshing", text: "Refreshing fruit 🍈" }
    ],
    misunderstandings: ["Clear melon meaning"],
    relatedEmojis: ["watermelon", "pineapple", "grapes"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["melon", "honeydew", "cantaloupe", "summer", "sweet"]
  },
  {
    unicode: "🍐",
    name: "Pear",
    slug: "pear",
    shortMeaning: "A green pear.",
    detailedMeaning: "The Pear emoji shows a green pear, representing the fruit and sometimes body shape references.\n\nUsed for pears, healthy eating, and autumn.",
    usageContexts: ["Pear", "Fruit", "Healthy", "Fall", "Green"],
    examples: [
      { context: "Fruit", text: "Fresh pear 🍐" },
      { context: "Healthy", text: "Healthy snack 🍐" },
      { context: "Fall", text: "Autumn fruit 🍐" }
    ],
    misunderstandings: ["Body shape reference"],
    relatedEmojis: ["red-apple", "green-apple", "grapes"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["pear", "fruit", "green", "healthy", "fall"]
  },
  {
    unicode: "🍏",
    name: "Green Apple",
    slug: "green-apple",
    shortMeaning: "A green apple.",
    detailedMeaning: "The Green Apple emoji shows a Granny Smith apple, representing healthy eating and tart flavor.\n\nUsed for apples, healthy food, and sour/tart references.",
    usageContexts: ["Apple", "Healthy", "Tart", "Green", "Fruit"],
    examples: [
      { context: "Healthy", text: "Apple a day 🍏" },
      { context: "Tart", text: "Tart and crisp 🍏" },
      { context: "Green", text: "Green goodness 🍏" }
    ],
    misunderstandings: ["Clear green apple meaning"],
    relatedEmojis: ["red-apple", "pear", "lemon"],
    categorySlug: "food-and-drink",
    subgroup: "food-fruit",
    keywords: ["apple", "green", "Granny Smith", "tart", "healthy"]
  },
  {
    unicode: "🥰",
    name: "Mate",
    slug: "mate",
    shortMeaning: "A mate gourd drink.",
    detailedMeaning: "The Mate emoji shows a traditional South American mate drink with bombilla straw, representing Argentine and Uruguayan culture.\n\nUsed for mate, South American culture, and traditional drinks.",
    usageContexts: ["Argentine", "South American", "Traditional", "Mate", "Tea"],
    examples: [
      { context: "Argentine", text: "Argentine vibes 🧉" },
      { context: "Traditional", text: "Morning mate 🧉" },
      { context: "Culture", text: "South American culture 🧉" }
    ],
    misunderstandings: ["South American drink specifically"],
    relatedEmojis: ["hot-beverage", "teapot", "argentina-flag"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["mate", "Argentine", "bombilla", "tea", "South American"]
  },
  {
    unicode: "🧉",
    name: "Mate",
    slug: "mate-drink",
    shortMeaning: "A traditional mate drink.",
    detailedMeaning: "The Mate emoji shows the South American yerba mate drink in a gourd with metal straw, representing Argentine and Uruguayan culture.\n\nUsed for mate, South American traditions, and herbal drinks.",
    usageContexts: ["Argentine", "Uruguayan", "Traditional", "Yerba", "Culture"],
    examples: [
      { context: "Culture", text: "Sharing mate 🧉" },
      { context: "Morning", text: "Morning ritual 🧉" },
      { context: "South American", text: "Latin vibes 🧉" }
    ],
    misunderstandings: ["South American cultural drink"],
    relatedEmojis: ["hot-beverage", "teapot", "herb"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["mate", "yerba", "Argentine", "gourd", "traditional"]
  },
  // TRAVEL & PLACES
  {
    unicode: "✈️",
    name: "Airplane",
    slug: "airplane",
    shortMeaning: "An airplane for travel, flights, and adventures.",
    detailedMeaning: "The Airplane emoji shows a commercial aircraft, representing air travel, vacations, and journey. It's associated with adventure, moving fast, and global connectivity.\n\nUsed for travel planning, announcing trips, airport content, and anything related to flying. The airplane symbolizes freedom and exploration.",
    usageContexts: ["Travel", "Flights", "Vacations", "Airports", "Adventures"],
    examples: [
      { context: "Travel", text: "Off to Paris ✈️" },
      { context: "Vacation", text: "Vacation mode ✈️" },
      { context: "Excited", text: "Can't wait to fly ✈️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["airport", "world-map", "luggage"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["plane", "airplane", "travel", "flight", "vacation"]
  },
  {
    unicode: "🚗",
    name: "Automobile",
    slug: "automobile",
    shortMeaning: "A car for driving, road trips, and transportation.",
    detailedMeaning: "The Automobile emoji shows a red car/sedan, representing driving, transportation, and road trips. Cars are essential to daily life and travel for many people.\n\nUsed for discussing driving, road trips, car-related content, or commuting. The car emoji is practical and widely used.",
    usageContexts: ["Driving", "Road trips", "Transportation", "Commuting", "Cars"],
    examples: [
      { context: "Road trip", text: "Road trip time 🚗" },
      { context: "Drive", text: "On my way 🚗" },
      { context: "Traffic", text: "Stuck in traffic 🚗" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["taxi", "bus", "motorway"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["car", "drive", "road trip", "auto", "vehicle"]
  },
  {
    unicode: "🏠",
    name: "House",
    slug: "house",
    shortMeaning: "A simple house - home sweet home.",
    detailedMeaning: "The House emoji shows a simple residential house, representing home, family, and domestic life. Home is associated with comfort, safety, and belonging.\n\nUsed for discussions about going home, real estate, family, or expressing the concept of home and belonging.",
    usageContexts: ["Home", "Family", "Real estate", "Domestic life", "Comfort"],
    examples: [
      { context: "Home", text: "Finally home 🏠" },
      { context: "Cozy", text: "Home sweet home 🏠" },
      { context: "Plans", text: "Staying in tonight 🏠" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["house-with-garden", "family", "couch-and-lamp"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["home", "house", "family", "domestic", "residence"]
  },
  {
    unicode: "🏝️",
    name: "Desert Island",
    slug: "desert-island",
    shortMeaning: "A tropical island paradise - vacation dreams.",
    detailedMeaning: "The Desert Island emoji shows a small tropical island with a palm tree, representing vacation destinations, paradise, and escape from everyday life.\n\nUsed for vacation content, tropical destinations, beach holidays, or expressing desire to escape and relax somewhere beautiful.",
    usageContexts: ["Vacation", "Tropical", "Paradise", "Beach", "Escape"],
    examples: [
      { context: "Vacation", text: "Need a vacation 🏝️" },
      { context: "Dream", text: "Paradise calling 🏝️" },
      { context: "Travel", text: "Island hopping 🏝️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["beach-with-umbrella", "palm-tree", "sun"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["island", "tropical", "vacation", "paradise", "beach"]
  },
  {
    unicode: "🚕",
    name: "Taxi",
    slug: "taxi",
    shortMeaning: "A yellow taxi cab.",
    detailedMeaning: "The Taxi emoji shows a classic yellow taxi cab, representing urban transportation, New York City vibes, and getting around town.\n\nUsed for taxi rides, NYC content, and urban transportation discussions.",
    usageContexts: ["Transportation", "NYC", "Urban", "Travel", "Ride"],
    examples: [
      { context: "Ride", text: "Calling a cab 🚕" },
      { context: "NYC", text: "NYC vibes 🚕" },
      { context: "Travel", text: "Taxi to the airport 🚕" }
    ],
    misunderstandings: ["Clear taxi meaning"],
    relatedEmojis: ["automobile", "bus", "oncoming-taxi"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["taxi", "cab", "yellow", "NYC", "ride"]
  },
  {
    unicode: "🚌",
    name: "Bus",
    slug: "bus",
    shortMeaning: "A public transit bus.",
    detailedMeaning: "The Bus emoji shows a public transit bus, representing public transportation, commuting, and affordable travel.\n\nUsed for bus travel, public transit discussions, and school bus references.",
    usageContexts: ["Public transit", "Commute", "Travel", "School", "Transport"],
    examples: [
      { context: "Commute", text: "Taking the bus 🚌" },
      { context: "Travel", text: "Bus tour 🚌" },
      { context: "School", text: "School bus 🚌" }
    ],
    misunderstandings: ["Clear bus meaning"],
    relatedEmojis: ["bus-stop", "trolleybus", "automobile"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bus", "public transit", "commute", "transport", "school"]
  },
  {
    unicode: "🚂",
    name: "Locomotive",
    slug: "locomotive",
    shortMeaning: "A steam train locomotive.",
    detailedMeaning: "The Locomotive emoji shows a classic steam train engine, representing rail travel, nostalgia, and powerful forward movement.\n\nUsed for train travel, vintage vibes, and expressions of moving forward with power.",
    usageContexts: ["Train", "Travel", "Vintage", "Power", "Journey"],
    examples: [
      { context: "Travel", text: "All aboard 🚂" },
      { context: "Progress", text: "Full steam ahead 🚂" },
      { context: "Vintage", text: "Old school 🚂" }
    ],
    misunderstandings: ["Nostalgic train type"],
    relatedEmojis: ["railway-car", "station", "steam"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["train", "locomotive", "steam", "railway", "vintage"]
  },
  {
    unicode: "🚃",
    name: "Railway Car",
    slug: "railway-car",
    shortMeaning: "A train passenger car.",
    detailedMeaning: "The Railway Car emoji shows a train passenger car, representing train travel, commuting by rail, and subway systems.\n\nUsed for train rides, metro/subway references, and rail travel.",
    usageContexts: ["Train", "Metro", "Subway", "Commute", "Rail"],
    examples: [
      { context: "Commute", text: "On the train 🚃" },
      { context: "Metro", text: "Taking the subway 🚃" },
      { context: "Travel", text: "Train journey 🚃" }
    ],
    misunderstandings: ["Generic train car"],
    relatedEmojis: ["locomotive", "metro", "station"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["train", "railway", "metro", "subway", "car"]
  },
  {
    unicode: "🚄",
    name: "High-Speed Train",
    slug: "high-speed-train",
    shortMeaning: "A modern bullet train.",
    detailedMeaning: "The High-Speed Train emoji shows a sleek bullet train, representing modern rail travel, speed, and efficiency. Associated with Japan's Shinkansen.\n\nUsed for fast train travel, Japanese culture, and modern transportation.",
    usageContexts: ["Fast", "Modern", "Japan", "Efficient", "Travel"],
    examples: [
      { context: "Japan", text: "Riding the Shinkansen 🚄" },
      { context: "Fast", text: "Speeding through 🚄" },
      { context: "Modern", text: "Future of travel 🚄" }
    ],
    misunderstandings: ["Specifically high-speed rail"],
    relatedEmojis: ["locomotive", "japan", "speed"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bullet train", "shinkansen", "fast", "speed", "Japan"]
  },
  {
    unicode: "🚁",
    name: "Helicopter",
    slug: "helicopter",
    shortMeaning: "A helicopter.",
    detailedMeaning: "The Helicopter emoji shows a helicopter, representing aerial transportation, rescue operations, and VIP travel.\n\nUsed for helicopter rides, emergency services, and luxury travel references.",
    usageContexts: ["Air travel", "Emergency", "VIP", "Rescue", "Aerial"],
    examples: [
      { context: "VIP", text: "Helicopter ride 🚁" },
      { context: "Rescue", text: "Air rescue 🚁" },
      { context: "View", text: "Aerial view 🚁" }
    ],
    misunderstandings: ["Clear helicopter meaning"],
    relatedEmojis: ["airplane", "small-airplane", "parachute"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["helicopter", "chopper", "aerial", "rescue", "fly"]
  },
  {
    unicode: "🛳️",
    name: "Passenger Ship",
    slug: "passenger-ship",
    shortMeaning: "A large cruise ship.",
    detailedMeaning: "The Passenger Ship emoji shows a large cruise liner, representing ocean travel, cruises, and maritime adventures.\n\nUsed for cruise vacations, ocean travel, and nautical themes.",
    usageContexts: ["Cruise", "Ocean", "Vacation", "Maritime", "Travel"],
    examples: [
      { context: "Cruise", text: "Cruise vacation 🛳️" },
      { context: "Ocean", text: "Setting sail 🛳️" },
      { context: "Luxury", text: "Luxury cruise 🛳️" }
    ],
    misunderstandings: ["Large passenger vessel"],
    relatedEmojis: ["ship", "anchor", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["cruise", "ship", "boat", "ocean", "travel"]
  },
  {
    unicode: "⛵",
    name: "Sailboat",
    slug: "sailboat",
    shortMeaning: "A sailboat on the water.",
    detailedMeaning: "The Sailboat emoji shows a small sailing boat, representing sailing, nautical activities, and peaceful water travel.\n\nUsed for sailing content, beach/ocean themes, and leisurely boating.",
    usageContexts: ["Sailing", "Ocean", "Leisure", "Nautical", "Water"],
    examples: [
      { context: "Sailing", text: "Smooth sailing ⛵" },
      { context: "Vacation", text: "Day on the water ⛵" },
      { context: "Peace", text: "Sailing away ⛵" }
    ],
    misunderstandings: ["Clear sailing meaning"],
    relatedEmojis: ["boat", "anchor", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["sail", "boat", "sailing", "nautical", "ocean"]
  },
  {
    unicode: "🚲",
    name: "Bicycle",
    slug: "bicycle",
    shortMeaning: "A bicycle for cycling.",
    detailedMeaning: "The Bicycle emoji shows a standard bicycle, representing cycling, exercise, eco-friendly transportation, and outdoor activities.\n\nUsed for biking content, fitness, and sustainable transportation.",
    usageContexts: ["Cycling", "Exercise", "Eco-friendly", "Transport", "Outdoor"],
    examples: [
      { context: "Exercise", text: "Morning bike ride 🚲" },
      { context: "Commute", text: "Biking to work 🚲" },
      { context: "Eco", text: "Green transport 🚲" }
    ],
    misunderstandings: ["Clear bicycle meaning"],
    relatedEmojis: ["person-biking", "motorcycle", "scooter"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bicycle", "bike", "cycling", "exercise", "eco"]
  },
  {
    unicode: "🏍️",
    name: "Motorcycle",
    slug: "motorcycle",
    shortMeaning: "A motorcycle or motorbike.",
    detailedMeaning: "The Motorcycle emoji shows a motorcycle/motorbike, representing freedom, speed, and two-wheeled travel.\n\nUsed for motorcycle content, biker culture, and adventurous travel.",
    usageContexts: ["Motorcycle", "Speed", "Freedom", "Biker", "Adventure"],
    examples: [
      { context: "Ride", text: "Motorcycle ride 🏍️" },
      { context: "Freedom", text: "Open road 🏍️" },
      { context: "Adventure", text: "Biker life 🏍️" }
    ],
    misunderstandings: ["Clear motorcycle meaning"],
    relatedEmojis: ["racing-car", "bicycle", "helmet"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["motorcycle", "motorbike", "biker", "speed", "ride"]
  },
  {
    unicode: "🚀",
    name: "Rocket",
    slug: "rocket",
    shortMeaning: "A rocket ship launching.",
    detailedMeaning: "The Rocket emoji shows a rocket launching, representing space travel, rapid growth, and taking off. Very popular in tech/startup culture.\n\nUsed for launches, crypto/stocks, space content, and rapid progress.",
    usageContexts: ["Launch", "Space", "Growth", "Startup", "Progress"],
    examples: [
      { context: "Launch", text: "Launch day 🚀" },
      { context: "Growth", text: "To the moon 🚀" },
      { context: "Success", text: "Taking off 🚀" }
    ],
    misunderstandings: ["Crypto/stock market connotation"],
    relatedEmojis: ["sparkles", "star", "astronaut"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["rocket", "launch", "space", "moon", "startup"]
  },
  {
    unicode: "🛸",
    name: "Flying Saucer",
    slug: "flying-saucer",
    shortMeaning: "A UFO/flying saucer.",
    detailedMeaning: "The Flying Saucer emoji shows a classic UFO, representing aliens, sci-fi, and otherworldly things.\n\nUsed for alien/UFO content, sci-fi themes, and expressing weirdness.",
    usageContexts: ["UFO", "Aliens", "Sci-fi", "Weird", "Space"],
    examples: [
      { context: "Alien", text: "Alien vibes 🛸" },
      { context: "Weird", text: "Out of this world 🛸" },
      { context: "Sci-fi", text: "UFO spotted 🛸" }
    ],
    misunderstandings: ["Playful alien meaning"],
    relatedEmojis: ["alien", "rocket", "star"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["UFO", "alien", "spaceship", "flying saucer", "sci-fi"]
  },
  // BUILDINGS & LANDMARKS
  {
    unicode: "🏢",
    name: "Office Building",
    slug: "office-building",
    shortMeaning: "A tall office building.",
    detailedMeaning: "The Office Building emoji shows a generic office tower, representing work, corporate life, and urban business districts.\n\nUsed for work content, office life, and business discussions.",
    usageContexts: ["Work", "Office", "Corporate", "Business", "Urban"],
    examples: [
      { context: "Work", text: "Back to the office 🏢" },
      { context: "Corporate", text: "Office life 🏢" },
      { context: "City", text: "Downtown 🏢" }
    ],
    misunderstandings: ["Generic office meaning"],
    relatedEmojis: ["briefcase", "cityscape", "building-construction"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["office", "building", "work", "corporate", "business"]
  },
  {
    unicode: "🏥",
    name: "Hospital",
    slug: "hospital",
    shortMeaning: "A hospital building.",
    detailedMeaning: "The Hospital emoji shows a hospital with a medical cross, representing healthcare, medical facilities, and health matters.\n\nUsed for health discussions, medical visits, and healthcare topics.",
    usageContexts: ["Health", "Medical", "Hospital", "Doctor", "Care"],
    examples: [
      { context: "Visit", text: "Hospital visit 🏥" },
      { context: "Health", text: "Getting checked 🏥" },
      { context: "Care", text: "Healthcare heroes 🏥" }
    ],
    misunderstandings: ["Clear medical meaning"],
    relatedEmojis: ["ambulance", "doctor", "nurse"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["hospital", "medical", "health", "doctor", "care"]
  },
  {
    unicode: "🏫",
    name: "School",
    slug: "school",
    shortMeaning: "A school building.",
    detailedMeaning: "The School emoji shows a school building, representing education, learning, and academic institutions.\n\nUsed for education content, back-to-school, and learning discussions.",
    usageContexts: ["Education", "Learning", "School", "Students", "Academic"],
    examples: [
      { context: "School", text: "Back to school 🏫" },
      { context: "Learning", text: "Study time 🏫" },
      { context: "Education", text: "School days 🏫" }
    ],
    misunderstandings: ["Clear education meaning"],
    relatedEmojis: ["graduation-cap", "books", "teacher"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["school", "education", "learning", "student", "class"]
  },
  {
    unicode: "🏛️",
    name: "Classical Building",
    slug: "classical-building",
    shortMeaning: "A classical Greek/Roman style building.",
    detailedMeaning: "The Classical Building emoji shows a building with classical columns, representing government, law, museums, and history.\n\nUsed for government, legal matters, museums, and historical content.",
    usageContexts: ["Government", "Museum", "History", "Law", "Classical"],
    examples: [
      { context: "Government", text: "Capitol building 🏛️" },
      { context: "Museum", text: "Museum visit 🏛️" },
      { context: "History", text: "Ancient history 🏛️" }
    ],
    misunderstandings: ["Government or museum context"],
    relatedEmojis: ["bank", "statue-of-liberty", "scroll"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["classical", "government", "museum", "columns", "history"]
  },
  {
    unicode: "🏰",
    name: "Castle",
    slug: "castle",
    shortMeaning: "A European castle.",
    detailedMeaning: "The Castle emoji shows a medieval European castle, representing royalty, fairy tales, and historical sites.\n\nUsed for Disney references, European travel, fantasy themes, and historical content.",
    usageContexts: ["Royalty", "Fantasy", "Disney", "Europe", "Medieval"],
    examples: [
      { context: "Disney", text: "Disney castle 🏰" },
      { context: "Europe", text: "Castle tour 🏰" },
      { context: "Fantasy", text: "Fairy tale vibes 🏰" }
    ],
    misunderstandings: ["Western/European castle style"],
    relatedEmojis: ["crown", "princess", "knight"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["castle", "royal", "medieval", "Disney", "fairy tale"]
  },
  {
    unicode: "🗼",
    name: "Tokyo Tower",
    slug: "tokyo-tower",
    shortMeaning: "The iconic Tokyo Tower.",
    detailedMeaning: "The Tokyo Tower emoji shows the famous red Tokyo Tower, representing Japan, Tokyo, and Japanese culture.\n\nUsed for Japan travel, Tokyo references, and Japanese content.",
    usageContexts: ["Japan", "Tokyo", "Travel", "Landmark", "Asia"],
    examples: [
      { context: "Tokyo", text: "Tokyo vibes 🗼" },
      { context: "Japan", text: "Visit Japan 🗼" },
      { context: "Travel", text: "Tokyo trip 🗼" }
    ],
    misunderstandings: ["Specifically Tokyo Tower, not Eiffel Tower"],
    relatedEmojis: ["japan", "mount-fuji", "shinkansen"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["Tokyo", "Japan", "tower", "landmark", "travel"]
  },
  {
    unicode: "🗽",
    name: "Statue of Liberty",
    slug: "statue-of-liberty",
    shortMeaning: "The Statue of Liberty.",
    detailedMeaning: "The Statue of Liberty emoji shows the iconic New York landmark, representing America, freedom, and New York City.\n\nUsed for NYC content, American themes, and freedom/liberty discussions.",
    usageContexts: ["NYC", "America", "Freedom", "Liberty", "Landmark"],
    examples: [
      { context: "NYC", text: "New York City 🗽" },
      { context: "America", text: "USA 🗽" },
      { context: "Freedom", text: "Liberty 🗽" }
    ],
    misunderstandings: ["Clear American symbol"],
    relatedEmojis: ["us-flag", "new-york", "freedom"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["Statue of Liberty", "NYC", "America", "freedom", "landmark"]
  },
  {
    unicode: "🗿",
    name: "Moai",
    slug: "moai",
    shortMeaning: "An Easter Island moai statue.",
    detailedMeaning: "The Moai emoji shows an Easter Island stone head, representing stoicism, mystery, and the 'bruh' meme expression.\n\nUsed for deadpan reactions, meme culture, and mysterious vibes.",
    usageContexts: ["Meme", "Stoic", "Deadpan", "Mystery", "Bruh"],
    examples: [
      { context: "Meme", text: "Bruh 🗿" },
      { context: "Deadpan", text: "No reaction 🗿" },
      { context: "Mystery", text: "Ancient mystery 🗿" }
    ],
    misunderstandings: ["Popular meme usage"],
    relatedEmojis: ["stone", "statue", "ancient"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["moai", "Easter Island", "stone", "bruh", "meme"]
  },
  {
    unicode: "⛪",
    name: "Church",
    slug: "church",
    shortMeaning: "A Christian church building.",
    detailedMeaning: "The Church emoji shows a Christian church with a cross, representing Christianity, worship, and religious services.\n\nUsed for religious content, Sunday services, and Christian themes.",
    usageContexts: ["Religion", "Christianity", "Worship", "Sunday", "Faith"],
    examples: [
      { context: "Sunday", text: "Church Sunday ⛪" },
      { context: "Faith", text: "Blessed ⛪" },
      { context: "Wedding", text: "Church wedding ⛪" }
    ],
    misunderstandings: ["Christian-specific"],
    relatedEmojis: ["cross", "pray", "bible"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["church", "religion", "Christian", "worship", "faith"]
  },
  {
    unicode: "🕌",
    name: "Mosque",
    slug: "mosque",
    shortMeaning: "An Islamic mosque.",
    detailedMeaning: "The Mosque emoji shows an Islamic mosque with domes and minarets, representing Islam, Muslim worship, and Islamic culture.\n\nUsed for Islamic content, Ramadan, and Muslim community discussions.",
    usageContexts: ["Islam", "Muslim", "Ramadan", "Worship", "Faith"],
    examples: [
      { context: "Ramadan", text: "Ramadan Mubarak 🕌" },
      { context: "Prayer", text: "Prayer time 🕌" },
      { context: "Faith", text: "Blessed 🕌" }
    ],
    misunderstandings: ["Islamic-specific"],
    relatedEmojis: ["crescent-moon", "star-and-crescent", "prayer-beads"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["mosque", "Islam", "Muslim", "Ramadan", "prayer"]
  },
  {
    unicode: "🕍",
    name: "Synagogue",
    slug: "synagogue",
    shortMeaning: "A Jewish synagogue.",
    detailedMeaning: "The Synagogue emoji shows a Jewish synagogue with the Star of David, representing Judaism, Jewish worship, and Jewish culture.\n\nUsed for Jewish content, holidays, and Jewish community discussions.",
    usageContexts: ["Judaism", "Jewish", "Worship", "Holidays", "Faith"],
    examples: [
      { context: "Shabbat", text: "Shabbat Shalom 🕍" },
      { context: "Holiday", text: "Happy Hanukkah 🕍" },
      { context: "Faith", text: "Temple visit 🕍" }
    ],
    misunderstandings: ["Jewish-specific"],
    relatedEmojis: ["star-of-david", "menorah", "dreidel"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["synagogue", "Jewish", "Judaism", "temple", "worship"]
  },
  {
    unicode: "🏟️",
    name: "Stadium",
    slug: "stadium",
    shortMeaning: "A large sports stadium.",
    detailedMeaning: "The Stadium emoji shows a large sports arena/stadium, representing sports events, concerts, and large gatherings.\n\nUsed for sports games, concerts, and major events.",
    usageContexts: ["Sports", "Concert", "Event", "Game", "Arena"],
    examples: [
      { context: "Sports", text: "Game day 🏟️" },
      { context: "Concert", text: "Concert tonight 🏟️" },
      { context: "Event", text: "Big game 🏟️" }
    ],
    misunderstandings: ["Clear stadium meaning"],
    relatedEmojis: ["soccer-ball", "football", "microphone"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["stadium", "arena", "sports", "concert", "event"]
  },
  {
    unicode: "🏖️",
    name: "Beach with Umbrella",
    slug: "beach-with-umbrella",
    shortMeaning: "A beach scene with umbrella.",
    detailedMeaning: "The Beach with Umbrella emoji shows a sandy beach with an umbrella, representing beach vacations, summer, and relaxation.\n\nUsed for beach trips, summer content, and vacation planning.",
    usageContexts: ["Beach", "Vacation", "Summer", "Relaxation", "Sun"],
    examples: [
      { context: "Vacation", text: "Beach day 🏖️" },
      { context: "Summer", text: "Summer vibes 🏖️" },
      { context: "Relax", text: "Beach life 🏖️" }
    ],
    misunderstandings: ["Clear beach meaning"],
    relatedEmojis: ["desert-island", "sun", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["beach", "vacation", "summer", "sand", "umbrella"]
  },
  {
    unicode: "🏔️",
    name: "Snow-Capped Mountain",
    slug: "snow-capped-mountain",
    shortMeaning: "A mountain with snow on top.",
    detailedMeaning: "The Snow-Capped Mountain emoji shows a mountain with snow, representing mountains, hiking, skiing, and nature adventures.\n\nUsed for mountain travel, skiing, hiking, and majestic nature content.",
    usageContexts: ["Mountain", "Skiing", "Hiking", "Nature", "Adventure"],
    examples: [
      { context: "Ski", text: "Ski trip 🏔️" },
      { context: "Hiking", text: "Mountain hiking 🏔️" },
      { context: "View", text: "Mountain views 🏔️" }
    ],
    misunderstandings: ["Clear mountain meaning"],
    relatedEmojis: ["mountain", "skier", "snowflake"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["mountain", "snow", "ski", "hiking", "nature"]
  },
  {
    unicode: "🗻",
    name: "Mount Fuji",
    slug: "mount-fuji",
    shortMeaning: "Japan's iconic Mount Fuji.",
    detailedMeaning: "The Mount Fuji emoji shows Japan's famous mountain, representing Japan, natural beauty, and iconic landmarks.\n\nUsed for Japan travel, Japanese content, and mountain appreciation.",
    usageContexts: ["Japan", "Mountain", "Iconic", "Travel", "Nature"],
    examples: [
      { context: "Japan", text: "Mount Fuji view 🗻" },
      { context: "Travel", text: "Japan trip 🗻" },
      { context: "Beautiful", text: "Fuji-san 🗻" }
    ],
    misunderstandings: ["Specifically Mount Fuji"],
    relatedEmojis: ["japan", "tokyo-tower", "cherry-blossom"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["Fuji", "Japan", "mountain", "iconic", "nature"]
  },
  {
    unicode: "🌋",
    name: "Volcano",
    slug: "volcano",
    shortMeaning: "An erupting volcano.",
    detailedMeaning: "The Volcano emoji shows a volcano with lava, representing volcanic activity, explosive energy, and intense situations.\n\nUsed for volcano content, explosive emotions, and intense situations.",
    usageContexts: ["Volcano", "Explosive", "Intense", "Nature", "Hot"],
    examples: [
      { context: "Intense", text: "About to explode 🌋" },
      { context: "Nature", text: "Volcano tour 🌋" },
      { context: "Hot", text: "Things are heating up 🌋" }
    ],
    misunderstandings: ["Can mean explosive anger"],
    relatedEmojis: ["fire", "mountain", "lava"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["volcano", "lava", "eruption", "hot", "explosive"]
  },
  {
    unicode: "🏜️",
    name: "Desert",
    slug: "desert",
    shortMeaning: "A sandy desert landscape.",
    detailedMeaning: "The Desert emoji shows a desert with dunes and cacti, representing arid regions, the Southwest, and extreme conditions.\n\nUsed for desert travel, Arizona/Southwest content, and dry humor.",
    usageContexts: ["Desert", "Southwest", "Hot", "Dry", "Nature"],
    examples: [
      { context: "Travel", text: "Desert road trip 🏜️" },
      { context: "Hot", text: "Desert heat 🏜️" },
      { context: "Southwest", text: "Arizona vibes 🏜️" }
    ],
    misunderstandings: ["Clear desert meaning"],
    relatedEmojis: ["cactus", "sun", "camel"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["desert", "sand", "hot", "dry", "Southwest"]
  },
  {
    unicode: "🌃",
    name: "Night with Stars",
    slug: "night-with-stars",
    shortMeaning: "A city skyline at night with stars.",
    detailedMeaning: "The Night with Stars emoji shows a city at night with stars, representing urban nightlife, city living, and beautiful night scenes.\n\nUsed for night content, city life, and romantic evening vibes.",
    usageContexts: ["Night", "City", "Urban", "Stars", "Evening"],
    examples: [
      { context: "Night", text: "City nights 🌃" },
      { context: "Urban", text: "Downtown evening 🌃" },
      { context: "Romance", text: "Romantic night 🌃" }
    ],
    misunderstandings: ["Clear nighttime city meaning"],
    relatedEmojis: ["cityscape", "star", "moon"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["night", "city", "stars", "urban", "evening"]
  },
  {
    unicode: "🌆",
    name: "Cityscape at Dusk",
    slug: "cityscape-at-dusk",
    shortMeaning: "A city skyline at sunset.",
    detailedMeaning: "The Cityscape at Dusk emoji shows a city at sunset with orange/pink sky, representing evening, urban beauty, and the end of day.\n\nUsed for sunset content, city appreciation, and evening vibes.",
    usageContexts: ["Sunset", "City", "Evening", "Urban", "Dusk"],
    examples: [
      { context: "Sunset", text: "City sunset 🌆" },
      { context: "Evening", text: "Golden hour 🌆" },
      { context: "Beautiful", text: "Skyline views 🌆" }
    ],
    misunderstandings: ["Clear sunset city meaning"],
    relatedEmojis: ["sunrise", "cityscape", "sun"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["dusk", "sunset", "city", "skyline", "evening"]
  },
  {
    unicode: "🌇",
    name: "Sunset",
    slug: "sunset",
    shortMeaning: "A beautiful sunset scene.",
    detailedMeaning: "The Sunset emoji shows the sun setting on the horizon with orange sky, representing endings, beauty, and peaceful transitions.\n\nUsed for sunset photos, ending of day, and beautiful moments.",
    usageContexts: ["Sunset", "Evening", "Beautiful", "End", "Peace"],
    examples: [
      { context: "Beautiful", text: "Gorgeous sunset 🌇" },
      { context: "Evening", text: "Day is done 🌇" },
      { context: "Peace", text: "Peaceful evening 🌇" }
    ],
    misunderstandings: ["Clear sunset meaning"],
    relatedEmojis: ["sunrise", "sun", "dusk"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["sunset", "sun", "evening", "orange", "beautiful"]
  },
  {
    unicode: "🌅",
    name: "Sunrise",
    slug: "sunrise",
    shortMeaning: "A sunrise over the horizon.",
    detailedMeaning: "The Sunrise emoji shows the sun rising over water, representing new beginnings, morning, and hope.\n\nUsed for morning content, new starts, and hopeful messages.",
    usageContexts: ["Morning", "New beginning", "Hope", "Sunrise", "Fresh"],
    examples: [
      { context: "Morning", text: "Early riser 🌅" },
      { context: "New", text: "New day, new start 🌅" },
      { context: "Beautiful", text: "Sunrise views 🌅" }
    ],
    misunderstandings: ["Clear sunrise meaning"],
    relatedEmojis: ["sunset", "sun", "morning"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["sunrise", "morning", "new day", "hope", "beginning"]
  },
  {
    unicode: "🎡",
    name: "Ferris Wheel",
    slug: "ferris-wheel",
    shortMeaning: "A colorful ferris wheel.",
    detailedMeaning: "The Ferris Wheel emoji shows an amusement park ride, representing fun, carnivals, and entertainment.\n\nUsed for amusement parks, fair/carnival content, and fun activities.",
    usageContexts: ["Amusement park", "Carnival", "Fun", "Fair", "Entertainment"],
    examples: [
      { context: "Fun", text: "Amusement park day 🎡" },
      { context: "Fair", text: "County fair 🎡" },
      { context: "Date", text: "Carnival date 🎡" }
    ],
    misunderstandings: ["Clear amusement meaning"],
    relatedEmojis: ["roller-coaster", "carousel", "circus-tent"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["ferris wheel", "carnival", "fair", "amusement", "fun"]
  },
  {
    unicode: "🎢",
    name: "Roller Coaster",
    slug: "roller-coaster",
    shortMeaning: "A thrilling roller coaster.",
    detailedMeaning: "The Roller Coaster emoji shows a roller coaster track, representing thrill rides, ups and downs, and exciting experiences.\n\nUsed for amusement parks, life's ups and downs, and thrilling experiences.",
    usageContexts: ["Thrill", "Amusement park", "Ups and downs", "Exciting", "Ride"],
    examples: [
      { context: "Fun", text: "Roller coaster time 🎢" },
      { context: "Life", text: "What a ride 🎢" },
      { context: "Emotions", text: "Emotional roller coaster 🎢" }
    ],
    misunderstandings: ["Can mean emotional ups and downs"],
    relatedEmojis: ["ferris-wheel", "carousel", "scream"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["roller coaster", "thrill", "ride", "amusement", "exciting"]
  },
  {
    unicode: "⛲",
    name: "Fountain",
    slug: "fountain",
    shortMeaning: "A decorative water fountain.",
    detailedMeaning: "The Fountain emoji shows a decorative fountain, representing parks, plazas, and beautiful public spaces.\n\nUsed for park visits, European travel, and peaceful settings.",
    usageContexts: ["Park", "Plaza", "Peaceful", "Water", "Decor"],
    examples: [
      { context: "Park", text: "Park fountain ⛲" },
      { context: "Travel", text: "Beautiful plaza ⛲" },
      { context: "Peaceful", text: "Relaxing by the fountain ⛲" }
    ],
    misunderstandings: ["Clear fountain meaning"],
    relatedEmojis: ["park", "water", "statue"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["fountain", "water", "park", "plaza", "decorative"]
  },
  {
    unicode: "⛺",
    name: "Tent",
    slug: "tent",
    shortMeaning: "A camping tent.",
    detailedMeaning: "The Tent emoji shows a camping tent, representing outdoor camping, nature adventures, and roughing it.\n\nUsed for camping trips, outdoor adventures, and nature content.",
    usageContexts: ["Camping", "Outdoor", "Nature", "Adventure", "Sleep"],
    examples: [
      { context: "Camping", text: "Camping weekend ⛺" },
      { context: "Nature", text: "Into the wild ⛺" },
      { context: "Adventure", text: "Tent life ⛺" }
    ],
    misunderstandings: ["Clear camping meaning"],
    relatedEmojis: ["campfire", "mountain", "forest"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["tent", "camping", "outdoor", "nature", "adventure"]
  },
  {
    unicode: "🗺️",
    name: "World Map",
    slug: "world-map",
    shortMeaning: "A map of the world.",
    detailedMeaning: "The World Map emoji shows a flat world map, representing travel, geography, and global thinking.\n\nUsed for travel planning, global content, and world exploration.",
    usageContexts: ["Travel", "World", "Geography", "Global", "Explore"],
    examples: [
      { context: "Travel", text: "Where to next? 🗺️" },
      { context: "Plan", text: "Planning adventures 🗺️" },
      { context: "Global", text: "Around the world 🗺️" }
    ],
    misunderstandings: ["Clear world/travel meaning"],
    relatedEmojis: ["globe", "compass", "airplane"],
    categorySlug: "travel-and-places",
    subgroup: "place-map",
    keywords: ["map", "world", "travel", "geography", "explore"]
  },
  {
    unicode: "🧭",
    name: "Compass",
    slug: "compass",
    shortMeaning: "A navigation compass.",
    detailedMeaning: "The Compass emoji shows a navigation compass, representing direction, exploration, and finding your way.\n\nUsed for travel, life direction, and navigation themes.",
    usageContexts: ["Navigation", "Direction", "Travel", "Explore", "Guidance"],
    examples: [
      { context: "Direction", text: "Finding my way 🧭" },
      { context: "Travel", text: "Adventure awaits 🧭" },
      { context: "Life", text: "Following my compass 🧭" }
    ],
    misunderstandings: ["Can mean life direction"],
    relatedEmojis: ["world-map", "globe", "adventure"],
    categorySlug: "travel-and-places",
    subgroup: "place-map",
    keywords: ["compass", "direction", "navigation", "explore", "guide"]
  },
  // FAMOUS LANDMARKS
  {
    unicode: "🗽",
    name: "Statue of Liberty",
    slug: "statue-of-liberty",
    shortMeaning: "The Statue of Liberty in New York.",
    detailedMeaning: "The Statue of Liberty emoji shows America's iconic statue, representing freedom, New York City, and the American dream.\n\nUsed for NYC travel, American content, and freedom themes.",
    usageContexts: ["New York", "America", "Freedom", "Landmark", "Travel"],
    examples: [
      { context: "NYC", text: "New York trip 🗽" },
      { context: "Freedom", text: "Land of the free 🗽" },
      { context: "Travel", text: "Visiting Lady Liberty 🗽" }
    ],
    misunderstandings: ["Clear NYC/America meaning"],
    relatedEmojis: ["us-flag", "cityscape", "airplane"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["statue", "liberty", "NYC", "New York", "America"]
  },
  {
    unicode: "🗼",
    name: "Tokyo Tower",
    slug: "tokyo-tower",
    shortMeaning: "Tokyo Tower in Japan.",
    detailedMeaning: "The Tokyo Tower emoji shows Japan's famous red tower, representing Tokyo and Japanese culture.\n\nUsed for Japan travel, Tokyo content, and Japanese themes.",
    usageContexts: ["Tokyo", "Japan", "Landmark", "Travel", "Tower"],
    examples: [
      { context: "Tokyo", text: "Tokyo nights 🗼" },
      { context: "Japan", text: "Japan trip 🗼" },
      { context: "Travel", text: "Visiting Tokyo Tower 🗼" }
    ],
    misunderstandings: ["Specifically Tokyo Tower"],
    relatedEmojis: ["japan-flag", "mount-fuji", "cherry-blossom"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["Tokyo", "tower", "Japan", "landmark", "red"]
  },
  {
    unicode: "🗾",
    name: "Map of Japan",
    slug: "map-of-japan",
    shortMeaning: "A silhouette map of Japan.",
    detailedMeaning: "The Map of Japan emoji shows the shape of Japan's islands, representing the country and Japanese culture.\n\nUsed for Japan-related content and travel.",
    usageContexts: ["Japan", "Map", "Travel", "Geography", "Asia"],
    examples: [
      { context: "Japan", text: "Japan bound 🗾" },
      { context: "Travel", text: "Exploring Japan 🗾" },
      { context: "Geography", text: "Japan map 🗾" }
    ],
    misunderstandings: ["Specifically Japan's shape"],
    relatedEmojis: ["japan-flag", "tokyo-tower", "mount-fuji"],
    categorySlug: "travel-and-places",
    subgroup: "place-map",
    keywords: ["Japan", "map", "islands", "geography", "Asia"]
  },
  {
    unicode: "🏯",
    name: "Japanese Castle",
    slug: "japanese-castle",
    shortMeaning: "A traditional Japanese castle.",
    detailedMeaning: "The Japanese Castle emoji shows a traditional Japanese castle, representing Japanese history, architecture, and feudal era.\n\nUsed for Japanese history, travel, and cultural content.",
    usageContexts: ["Japan", "Castle", "History", "Architecture", "Travel"],
    examples: [
      { context: "Travel", text: "Visiting castles 🏯" },
      { context: "History", text: "Japanese history 🏯" },
      { context: "Architecture", text: "Beautiful castle 🏯" }
    ],
    misunderstandings: ["Specifically Japanese style"],
    relatedEmojis: ["european-castle", "japan-flag", "pagoda"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["castle", "Japanese", "history", "architecture", "feudal"]
  },
  {
    unicode: "🏰",
    name: "Castle",
    slug: "castle",
    shortMeaning: "A European-style castle.",
    detailedMeaning: "The Castle emoji shows a European medieval castle, representing royalty, fairy tales, and European history.\n\nUsed for European travel, fairy tales, and fantasy content.",
    usageContexts: ["Europe", "Castle", "Fairy tale", "Royalty", "Fantasy"],
    examples: [
      { context: "Europe", text: "Castle tour 🏰" },
      { context: "Fairy tale", text: "Like a fairy tale 🏰" },
      { context: "Fantasy", text: "Medieval vibes 🏰" }
    ],
    misunderstandings: ["European/fairy tale style"],
    relatedEmojis: ["japanese-castle", "crown", "princess"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["castle", "European", "medieval", "royalty", "fairy tale"]
  },
  {
    unicode: "🕌",
    name: "Mosque",
    slug: "mosque",
    shortMeaning: "An Islamic mosque.",
    detailedMeaning: "The Mosque emoji shows a mosque with domes and minarets, representing Islam and Islamic architecture.\n\nUsed for Islamic content, mosque visits, and religious discussions.",
    usageContexts: ["Islam", "Mosque", "Prayer", "Religion", "Architecture"],
    examples: [
      { context: "Prayer", text: "Mosque visit 🕌" },
      { context: "Travel", text: "Beautiful mosque 🕌" },
      { context: "Religion", text: "Ramadan 🕌" }
    ],
    misunderstandings: ["Islamic religious symbol"],
    relatedEmojis: ["star-and-crescent", "prayer-beads", "kaaba"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["mosque", "Islam", "prayer", "religion", "minaret"]
  },
  {
    unicode: "🕍",
    name: "Synagogue",
    slug: "synagogue",
    shortMeaning: "A Jewish synagogue.",
    detailedMeaning: "The Synagogue emoji shows a synagogue with Star of David, representing Judaism and Jewish worship.\n\nUsed for Jewish content, synagogue visits, and religious discussions.",
    usageContexts: ["Judaism", "Synagogue", "Prayer", "Religion", "Jewish"],
    examples: [
      { context: "Prayer", text: "Synagogue service 🕍" },
      { context: "Religion", text: "Shabbat 🕍" },
      { context: "Holiday", text: "High holidays 🕍" }
    ],
    misunderstandings: ["Jewish religious symbol"],
    relatedEmojis: ["star-of-david", "menorah", "pray"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["synagogue", "Judaism", "Jewish", "prayer", "religion"]
  },
  {
    unicode: "⛪",
    name: "Church",
    slug: "church",
    shortMeaning: "A Christian church.",
    detailedMeaning: "The Church emoji shows a church with steeple and cross, representing Christianity and Christian worship.\n\nUsed for Christian content, church services, and religious discussions.",
    usageContexts: ["Christianity", "Church", "Prayer", "Religion", "Worship"],
    examples: [
      { context: "Sunday", text: "Sunday service ⛪" },
      { context: "Wedding", text: "Church wedding ⛪" },
      { context: "Religion", text: "Blessed ⛪" }
    ],
    misunderstandings: ["Christian religious symbol"],
    relatedEmojis: ["latin-cross", "pray", "bible"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["church", "Christianity", "prayer", "religion", "cross"]
  },
  {
    unicode: "🛕",
    name: "Hindu Temple",
    slug: "hindu-temple",
    shortMeaning: "A Hindu temple.",
    detailedMeaning: "The Hindu Temple emoji shows a Hindu temple, representing Hinduism and Indian religious architecture.\n\nUsed for Hindu content, temple visits, and religious discussions.",
    usageContexts: ["Hinduism", "Temple", "India", "Religion", "Prayer"],
    examples: [
      { context: "Temple", text: "Temple visit 🛕" },
      { context: "Religion", text: "Diwali celebrations 🛕" },
      { context: "India", text: "India travel 🛕" }
    ],
    misunderstandings: ["Hindu religious symbol"],
    relatedEmojis: ["om", "india-flag", "pray"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["temple", "Hindu", "India", "religion", "prayer"]
  },
  {
    unicode: "🕋",
    name: "Kaaba",
    slug: "kaaba",
    shortMeaning: "The Kaaba in Mecca.",
    detailedMeaning: "The Kaaba emoji shows the sacred Islamic site in Mecca, representing the holiest site in Islam and pilgrimage.\n\nUsed for Hajj, Mecca content, and Islamic discussions.",
    usageContexts: ["Islam", "Mecca", "Hajj", "Pilgrimage", "Sacred"],
    examples: [
      { context: "Hajj", text: "Hajj pilgrimage 🕋" },
      { context: "Sacred", text: "Holy site 🕋" },
      { context: "Islam", text: "Mecca 🕋" }
    ],
    misunderstandings: ["Sacred Islamic site"],
    relatedEmojis: ["mosque", "star-and-crescent", "pray"],
    categorySlug: "travel-and-places",
    subgroup: "place-religious",
    keywords: ["Kaaba", "Mecca", "Islam", "Hajj", "pilgrimage"]
  },
  // MORE TRANSPORTATION
  {
    unicode: "🚗",
    name: "Automobile",
    slug: "automobile",
    shortMeaning: "A red car/automobile.",
    detailedMeaning: "The Automobile emoji shows a red sedan car, representing cars, driving, and road trips.\n\nUsed for driving content, car discussions, and transportation.",
    usageContexts: ["Car", "Driving", "Road trip", "Transport", "Vehicle"],
    examples: [
      { context: "Drive", text: "Road trip 🚗" },
      { context: "Car", text: "New car 🚗" },
      { context: "Travel", text: "Driving there 🚗" }
    ],
    misunderstandings: ["Clear car meaning"],
    relatedEmojis: ["taxi", "bus", "racing-car"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["car", "automobile", "driving", "vehicle", "road"]
  },
  {
    unicode: "🚕",
    name: "Taxi",
    slug: "taxi",
    shortMeaning: "A yellow taxi cab.",
    detailedMeaning: "The Taxi emoji shows a yellow taxi, representing taxis, cabs, and urban transportation.\n\nUsed for taxi rides, NYC vibes, and urban transport.",
    usageContexts: ["Taxi", "Cab", "NYC", "Urban", "Transport"],
    examples: [
      { context: "Ride", text: "Taking a taxi 🚕" },
      { context: "NYC", text: "Yellow cab 🚕" },
      { context: "Urban", text: "Cab ride 🚕" }
    ],
    misunderstandings: ["Clear taxi meaning"],
    relatedEmojis: ["automobile", "bus", "oncoming-taxi"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["taxi", "cab", "yellow", "NYC", "transport"]
  },
  {
    unicode: "🚌",
    name: "Bus",
    slug: "bus",
    shortMeaning: "A public transit bus.",
    detailedMeaning: "The Bus emoji shows a public bus, representing public transit and commuting.\n\nUsed for bus travel, public transit, and commuting.",
    usageContexts: ["Bus", "Transit", "Commute", "Public", "Transport"],
    examples: [
      { context: "Commute", text: "Bus to work 🚌" },
      { context: "Transit", text: "Taking the bus 🚌" },
      { context: "Travel", text: "Bus trip 🚌" }
    ],
    misunderstandings: ["Clear bus meaning"],
    relatedEmojis: ["taxi", "train", "bus-stop"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bus", "transit", "commute", "public", "transport"]
  },
  {
    unicode: "🚎",
    name: "Trolleybus",
    slug: "trolleybus",
    shortMeaning: "An electric trolleybus.",
    detailedMeaning: "The Trolleybus emoji shows an electric bus connected to overhead wires, representing eco-friendly public transit.\n\nUsed for public transit and electric transportation.",
    usageContexts: ["Transit", "Electric", "Bus", "Public", "Eco-friendly"],
    examples: [
      { context: "Transit", text: "Trolley ride 🚎" },
      { context: "Electric", text: "Electric bus 🚎" },
      { context: "City", text: "City transit 🚎" }
    ],
    misunderstandings: ["Electric trolleybus specifically"],
    relatedEmojis: ["bus", "tram", "train"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["trolleybus", "electric", "transit", "bus", "eco"]
  },
  {
    unicode: "🚐",
    name: "Minibus",
    slug: "minibus",
    shortMeaning: "A minibus or van.",
    detailedMeaning: "The Minibus emoji shows a small bus or van, representing group travel and shuttle services.\n\nUsed for group travel, shuttles, and van life.",
    usageContexts: ["Van", "Group", "Shuttle", "Travel", "Transport"],
    examples: [
      { context: "Group", text: "Group trip 🚐" },
      { context: "Shuttle", text: "Shuttle service 🚐" },
      { context: "Van", text: "Van life 🚐" }
    ],
    misunderstandings: ["Clear minibus/van meaning"],
    relatedEmojis: ["bus", "automobile", "rv"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["minibus", "van", "shuttle", "group", "travel"]
  },
  {
    unicode: "🚑",
    name: "Ambulance",
    slug: "ambulance",
    shortMeaning: "An emergency ambulance.",
    detailedMeaning: "The Ambulance emoji shows an emergency medical vehicle, representing emergencies and medical transport.\n\nUsed for emergencies, medical content, and first responders.",
    usageContexts: ["Emergency", "Medical", "Hospital", "First responder", "Urgent"],
    examples: [
      { context: "Emergency", text: "Call an ambulance 🚑" },
      { context: "Medical", text: "Emergency services 🚑" },
      { context: "Hospital", text: "To the hospital 🚑" }
    ],
    misunderstandings: ["Clear emergency meaning"],
    relatedEmojis: ["hospital", "doctor", "police-car"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["ambulance", "emergency", "medical", "hospital", "urgent"]
  },
  {
    unicode: "🚒",
    name: "Fire Engine",
    slug: "fire-engine",
    shortMeaning: "A red fire truck.",
    detailedMeaning: "The Fire Engine emoji shows a red fire truck, representing firefighters and emergency services.\n\nUsed for fire emergencies, firefighters, and emergency services.",
    usageContexts: ["Fire", "Emergency", "Firefighter", "Rescue", "Red"],
    examples: [
      { context: "Emergency", text: "Fire truck 🚒" },
      { context: "Firefighter", text: "Firefighters 🚒" },
      { context: "Rescue", text: "To the rescue 🚒" }
    ],
    misunderstandings: ["Clear fire truck meaning"],
    relatedEmojis: ["firefighter", "fire", "ambulance"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["fire", "engine", "truck", "firefighter", "emergency"]
  },
  {
    unicode: "🚓",
    name: "Police Car",
    slug: "police-car",
    shortMeaning: "A police car.",
    detailedMeaning: "The Police Car emoji shows a police vehicle, representing law enforcement and emergencies.\n\nUsed for police, law enforcement, and emergency content.",
    usageContexts: ["Police", "Law", "Emergency", "Patrol", "Authority"],
    examples: [
      { context: "Police", text: "Police patrol 🚓" },
      { context: "Emergency", text: "Call the police 🚓" },
      { context: "Law", text: "Law enforcement 🚓" }
    ],
    misunderstandings: ["Clear police meaning"],
    relatedEmojis: ["police-officer", "ambulance", "fire-engine"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["police", "car", "patrol", "law", "emergency"]
  },
  {
    unicode: "🚙",
    name: "Sport Utility Vehicle",
    slug: "sport-utility-vehicle",
    shortMeaning: "An SUV or crossover vehicle.",
    detailedMeaning: "The SUV emoji shows a sport utility vehicle, representing SUVs, adventure, and family vehicles.\n\nUsed for SUV owners, adventure travel, and family trips.",
    usageContexts: ["SUV", "Adventure", "Family", "Off-road", "Vehicle"],
    examples: [
      { context: "Adventure", text: "Road trip ready 🚙" },
      { context: "Family", text: "Family car 🚙" },
      { context: "SUV", text: "New SUV 🚙" }
    ],
    misunderstandings: ["Clear SUV meaning"],
    relatedEmojis: ["automobile", "pickup-truck", "racing-car"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["SUV", "vehicle", "adventure", "family", "off-road"]
  },
  {
    unicode: "🛻",
    name: "Pickup Truck",
    slug: "pickup-truck",
    shortMeaning: "A pickup truck.",
    detailedMeaning: "The Pickup Truck emoji shows a pickup truck, representing trucks, country life, and work vehicles.\n\nUsed for truck owners, country vibes, and hauling.",
    usageContexts: ["Truck", "Country", "Work", "Hauling", "Vehicle"],
    examples: [
      { context: "Country", text: "Truck life 🛻" },
      { context: "Work", text: "Work truck 🛻" },
      { context: "Hauling", text: "Moving stuff 🛻" }
    ],
    misunderstandings: ["Clear pickup truck meaning"],
    relatedEmojis: ["automobile", "suv", "tractor"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["pickup", "truck", "country", "work", "hauling"]
  },
  {
    unicode: "🏎️",
    name: "Racing Car",
    slug: "racing-car",
    shortMeaning: "A Formula 1 racing car.",
    detailedMeaning: "The Racing Car emoji shows a F1-style racing car, representing speed, racing, and high performance.\n\nUsed for racing, F1, and speed content.",
    usageContexts: ["Racing", "F1", "Speed", "Fast", "Performance"],
    examples: [
      { context: "Racing", text: "Race day 🏎️" },
      { context: "Speed", text: "Going fast 🏎️" },
      { context: "F1", text: "Formula 1 🏎️" }
    ],
    misunderstandings: ["Clear racing meaning"],
    relatedEmojis: ["automobile", "motorcycle", "trophy"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["racing", "car", "F1", "speed", "fast"]
  },
  {
    unicode: "🚲",
    name: "Bicycle",
    slug: "bicycle",
    shortMeaning: "A bicycle.",
    detailedMeaning: "The Bicycle emoji shows a bicycle, representing cycling, eco-friendly transport, and exercise.\n\nUsed for biking, cycling, and eco-friendly content.",
    usageContexts: ["Bike", "Cycling", "Eco", "Exercise", "Transport"],
    examples: [
      { context: "Bike", text: "Bike ride 🚲" },
      { context: "Eco", text: "Green commute 🚲" },
      { context: "Exercise", text: "Cycling workout 🚲" }
    ],
    misunderstandings: ["Clear bicycle meaning"],
    relatedEmojis: ["motorcycle", "scooter", "person-biking"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bicycle", "bike", "cycling", "eco", "exercise"]
  },
  {
    unicode: "🛵",
    name: "Motor Scooter",
    slug: "motor-scooter",
    shortMeaning: "A motor scooter/Vespa.",
    detailedMeaning: "The Motor Scooter emoji shows a Vespa-style scooter, representing scooters, European travel, and urban transport.\n\nUsed for scooter content, Italy vibes, and urban travel.",
    usageContexts: ["Scooter", "Italy", "Urban", "Vespa", "Transport"],
    examples: [
      { context: "Italy", text: "Rome on a Vespa 🛵" },
      { context: "Urban", text: "City scooter 🛵" },
      { context: "Fun", text: "Scooter ride 🛵" }
    ],
    misunderstandings: ["Clear scooter meaning"],
    relatedEmojis: ["motorcycle", "bicycle", "automobile"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["scooter", "Vespa", "motor", "urban", "Italy"]
  },
  {
    unicode: "🏍️",
    name: "Motorcycle",
    slug: "motorcycle",
    shortMeaning: "A motorcycle.",
    detailedMeaning: "The Motorcycle emoji shows a motorcycle, representing bikes, freedom, and rebel spirit.\n\nUsed for motorcycle content, bikers, and freedom themes.",
    usageContexts: ["Motorcycle", "Biker", "Freedom", "Ride", "Speed"],
    examples: [
      { context: "Ride", text: "Motorcycle ride 🏍️" },
      { context: "Biker", text: "Biker life 🏍️" },
      { context: "Freedom", text: "Open road 🏍️" }
    ],
    misunderstandings: ["Clear motorcycle meaning"],
    relatedEmojis: ["racing-car", "bicycle", "scooter"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["motorcycle", "bike", "biker", "freedom", "ride"]
  },
  {
    unicode: "🚂",
    name: "Locomotive",
    slug: "locomotive",
    shortMeaning: "A steam locomotive train.",
    detailedMeaning: "The Locomotive emoji shows a classic steam train, representing trains, travel, and vintage transport.\n\nUsed for train travel, vintage themes, and railway content.",
    usageContexts: ["Train", "Steam", "Vintage", "Railway", "Travel"],
    examples: [
      { context: "Train", text: "All aboard 🚂" },
      { context: "Vintage", text: "Steam train 🚂" },
      { context: "Travel", text: "Train journey 🚂" }
    ],
    misunderstandings: ["Vintage steam train style"],
    relatedEmojis: ["railway-car", "bullet-train", "station"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["locomotive", "train", "steam", "railway", "vintage"]
  },
  {
    unicode: "🚇",
    name: "Metro",
    slug: "metro",
    shortMeaning: "A metro/subway train.",
    detailedMeaning: "The Metro emoji shows a subway/metro train, representing underground transit and urban transport.\n\nUsed for subway, metro, and urban transit content.",
    usageContexts: ["Metro", "Subway", "Underground", "Transit", "Urban"],
    examples: [
      { context: "Subway", text: "Taking the subway 🚇" },
      { context: "Metro", text: "Metro commute 🚇" },
      { context: "Urban", text: "Underground 🚇" }
    ],
    misunderstandings: ["Clear metro/subway meaning"],
    relatedEmojis: ["locomotive", "bus", "station"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["metro", "subway", "underground", "transit", "train"]
  },
  {
    unicode: "🚁",
    name: "Helicopter",
    slug: "helicopter",
    shortMeaning: "A helicopter.",
    detailedMeaning: "The Helicopter emoji shows a helicopter, representing air transport, rescue, and aerial views.\n\nUsed for helicopter content, rescue, and aerial themes.",
    usageContexts: ["Helicopter", "Aerial", "Rescue", "Flying", "Transport"],
    examples: [
      { context: "Aerial", text: "Helicopter tour 🚁" },
      { context: "Rescue", text: "Rescue helicopter 🚁" },
      { context: "Flying", text: "Chopper ride 🚁" }
    ],
    misunderstandings: ["Clear helicopter meaning"],
    relatedEmojis: ["airplane", "small-airplane", "rocket"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["helicopter", "chopper", "aerial", "flying", "rescue"]
  },
  {
    unicode: "✈️",
    name: "Airplane",
    slug: "airplane",
    shortMeaning: "An airplane for travel.",
    detailedMeaning: "The Airplane emoji shows a commercial aircraft, representing air travel, vacations, and flying.\n\nUsed for travel, flights, and vacation content.",
    usageContexts: ["Travel", "Flight", "Vacation", "Airport", "Flying"],
    examples: [
      { context: "Travel", text: "Off to Paris ✈️" },
      { context: "Vacation", text: "Vacation mode ✈️" },
      { context: "Flying", text: "Taking off ✈️" }
    ],
    misunderstandings: ["Clear airplane meaning"],
    relatedEmojis: ["helicopter", "airport", "world-map"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["airplane", "plane", "travel", "flight", "vacation"]
  },
  {
    unicode: "🛩️",
    name: "Small Airplane",
    slug: "small-airplane",
    shortMeaning: "A small private airplane.",
    detailedMeaning: "The Small Airplane emoji shows a small private plane, representing private aviation and leisure flying.\n\nUsed for private planes, aviation, and small aircraft.",
    usageContexts: ["Private", "Aviation", "Small", "Flying", "Leisure"],
    examples: [
      { context: "Private", text: "Private jet 🛩️" },
      { context: "Aviation", text: "Small plane 🛩️" },
      { context: "Flying", text: "Learning to fly 🛩️" }
    ],
    misunderstandings: ["Smaller/private plane"],
    relatedEmojis: ["airplane", "helicopter", "pilot"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["small", "airplane", "private", "aviation", "flying"]
  },
  {
    unicode: "🚀",
    name: "Rocket",
    slug: "rocket",
    shortMeaning: "A rocket launching to space.",
    detailedMeaning: "The Rocket emoji shows a rocket launching, representing space travel, startups, and rapid growth.\n\nUsed for space, crypto/stocks, startups, and growth themes.",
    usageContexts: ["Space", "Launch", "Startup", "Growth", "Fast"],
    examples: [
      { context: "Space", text: "To the moon 🚀" },
      { context: "Startup", text: "Launching soon 🚀" },
      { context: "Growth", text: "Let's go 🚀" }
    ],
    misunderstandings: ["Crypto/stock connotation"],
    relatedEmojis: ["astronaut", "crescent-moon", "sparkles"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["rocket", "launch", "space", "startup", "moon"]
  },
  {
    unicode: "🛸",
    name: "Flying Saucer",
    slug: "flying-saucer",
    shortMeaning: "A UFO/flying saucer.",
    detailedMeaning: "The Flying Saucer emoji shows a UFO, representing aliens, sci-fi, and extraterrestrials.\n\nUsed for alien content, sci-fi, and playful space themes.",
    usageContexts: ["UFO", "Alien", "Sci-fi", "Space", "Weird"],
    examples: [
      { context: "Alien", text: "Aliens exist 🛸" },
      { context: "Weird", text: "This is weird 🛸" },
      { context: "Sci-fi", text: "Sci-fi vibes 🛸" }
    ],
    misunderstandings: ["Playful alien meaning"],
    relatedEmojis: ["alien", "rocket", "star"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["UFO", "flying saucer", "alien", "space", "sci-fi"]
  },
  {
    unicode: "🚢",
    name: "Ship",
    slug: "ship",
    shortMeaning: "A large passenger ship.",
    detailedMeaning: "The Ship emoji shows a large vessel, representing cruise ships, ocean travel, and maritime transport.\n\nUsed for cruises, ocean travel, and ship content.",
    usageContexts: ["Ship", "Cruise", "Ocean", "Maritime", "Travel"],
    examples: [
      { context: "Cruise", text: "Cruise vacation 🚢" },
      { context: "Ocean", text: "Setting sail 🚢" },
      { context: "Travel", text: "Ship life 🚢" }
    ],
    misunderstandings: ["Clear ship meaning"],
    relatedEmojis: ["sailboat", "anchor", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["ship", "cruise", "ocean", "boat", "travel"]
  },
  {
    unicode: "⛵",
    name: "Sailboat",
    slug: "sailboat",
    shortMeaning: "A sailboat on water.",
    detailedMeaning: "The Sailboat emoji shows a sailing boat, representing sailing, ocean, and leisure.\n\nUsed for sailing, nautical content, and water activities.",
    usageContexts: ["Sailing", "Ocean", "Nautical", "Leisure", "Water"],
    examples: [
      { context: "Sailing", text: "Smooth sailing ⛵" },
      { context: "Ocean", text: "On the water ⛵" },
      { context: "Leisure", text: "Sailing weekend ⛵" }
    ],
    misunderstandings: ["Clear sailing meaning"],
    relatedEmojis: ["ship", "anchor", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["sailboat", "sailing", "ocean", "boat", "nautical"]
  },
  {
    unicode: "🚤",
    name: "Speedboat",
    slug: "speedboat",
    shortMeaning: "A fast speedboat.",
    detailedMeaning: "The Speedboat emoji shows a fast motorboat, representing speed on water and boating.\n\nUsed for boating, water sports, and speed on water.",
    usageContexts: ["Speedboat", "Fast", "Boating", "Water", "Sports"],
    examples: [
      { context: "Speed", text: "Speeding on water 🚤" },
      { context: "Boating", text: "Boat day 🚤" },
      { context: "Fun", text: "Water fun 🚤" }
    ],
    misunderstandings: ["Clear speedboat meaning"],
    relatedEmojis: ["ship", "sailboat", "water-wave"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["speedboat", "fast", "boat", "water", "motor"]
  },
  {
    unicode: "⚓",
    name: "Anchor",
    slug: "anchor",
    shortMeaning: "A ship's anchor.",
    detailedMeaning: "The Anchor emoji shows a ship's anchor, representing nautical themes, stability, and maritime.\n\nUsed for nautical content, staying grounded, and maritime themes.",
    usageContexts: ["Nautical", "Anchor", "Maritime", "Stability", "Ocean"],
    examples: [
      { context: "Nautical", text: "Anchors aweigh ⚓" },
      { context: "Stable", text: "Stay grounded ⚓" },
      { context: "Maritime", text: "Sailor vibes ⚓" }
    ],
    misunderstandings: ["Symbol of stability"],
    relatedEmojis: ["ship", "sailboat", "ocean"],
    categorySlug: "travel-and-places",
    subgroup: "transport-water",
    keywords: ["anchor", "nautical", "maritime", "ship", "stable"]
  },
  // MORE BUILDINGS
  {
    unicode: "🏠",
    name: "House",
    slug: "house",
    shortMeaning: "A simple house.",
    detailedMeaning: "The House emoji shows a basic house, representing home, family, and domestic life.\n\nUsed for home content, family, and housing discussions.",
    usageContexts: ["Home", "House", "Family", "Domestic", "Living"],
    examples: [
      { context: "Home", text: "Home sweet home 🏠" },
      { context: "Family", text: "Back home 🏠" },
      { context: "Housing", text: "House hunting 🏠" }
    ],
    misunderstandings: ["Clear home meaning"],
    relatedEmojis: ["house-with-garden", "family", "key"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["house", "home", "family", "domestic", "living"]
  },
  {
    unicode: "🏡",
    name: "House with Garden",
    slug: "house-with-garden",
    shortMeaning: "A house with a garden.",
    detailedMeaning: "The House with Garden emoji shows a house with landscaping, representing suburban life and gardening.\n\nUsed for home content with emphasis on outdoor space.",
    usageContexts: ["Home", "Garden", "Suburban", "Outdoor", "Living"],
    examples: [
      { context: "Home", text: "Dream home 🏡" },
      { context: "Garden", text: "Garden goals 🏡" },
      { context: "Suburban", text: "Suburb life 🏡" }
    ],
    misunderstandings: ["Clear home with garden meaning"],
    relatedEmojis: ["house", "deciduous-tree", "garden"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["house", "garden", "home", "suburban", "yard"]
  },
  {
    unicode: "🏢",
    name: "Office Building",
    slug: "office-building",
    shortMeaning: "A tall office building.",
    detailedMeaning: "The Office Building emoji shows a multi-story office, representing work, business, and corporate life.\n\nUsed for work content, corporate discussions, and office life.",
    usageContexts: ["Office", "Work", "Business", "Corporate", "Building"],
    examples: [
      { context: "Work", text: "At the office 🏢" },
      { context: "Business", text: "Business district 🏢" },
      { context: "Corporate", text: "Corporate life 🏢" }
    ],
    misunderstandings: ["Clear office meaning"],
    relatedEmojis: ["briefcase", "cityscape", "businessman"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["office", "building", "work", "corporate", "business"]
  },
  {
    unicode: "🏣",
    name: "Japanese Post Office",
    slug: "japanese-post-office",
    shortMeaning: "A Japanese post office.",
    detailedMeaning: "The Japanese Post Office emoji shows a post office with JP post symbol, representing mail in Japan.\n\nUsed for mail, Japan, and postal content.",
    usageContexts: ["Post", "Mail", "Japan", "Postal", "Delivery"],
    examples: [
      { context: "Mail", text: "Sending mail 🏣" },
      { context: "Japan", text: "Japanese post 🏣" },
      { context: "Postal", text: "Post office 🏣" }
    ],
    misunderstandings: ["Specifically Japanese style"],
    relatedEmojis: ["post-office", "envelope", "package"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["post office", "Japanese", "mail", "postal", "delivery"]
  },
  {
    unicode: "🏥",
    name: "Hospital",
    slug: "hospital",
    shortMeaning: "A hospital building.",
    detailedMeaning: "The Hospital emoji shows a hospital with medical cross, representing healthcare and medical facilities.\n\nUsed for medical content, hospital visits, and healthcare.",
    usageContexts: ["Hospital", "Medical", "Health", "Emergency", "Care"],
    examples: [
      { context: "Medical", text: "At the hospital 🏥" },
      { context: "Health", text: "Healthcare 🏥" },
      { context: "Visit", text: "Hospital visit 🏥" }
    ],
    misunderstandings: ["Clear hospital meaning"],
    relatedEmojis: ["ambulance", "doctor", "nurse"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["hospital", "medical", "health", "emergency", "care"]
  },
  {
    unicode: "🏦",
    name: "Bank",
    slug: "bank",
    shortMeaning: "A bank building.",
    detailedMeaning: "The Bank emoji shows a classical bank building, representing banking, money, and finance.\n\nUsed for banking, finance, and money discussions.",
    usageContexts: ["Bank", "Money", "Finance", "Banking", "Institution"],
    examples: [
      { context: "Bank", text: "Going to the bank 🏦" },
      { context: "Money", text: "Bank account 🏦" },
      { context: "Finance", text: "Banking 🏦" }
    ],
    misunderstandings: ["Clear bank meaning"],
    relatedEmojis: ["money-bag", "credit-card", "dollar"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["bank", "money", "finance", "banking", "institution"]
  },
  {
    unicode: "🏨",
    name: "Hotel",
    slug: "hotel",
    shortMeaning: "A hotel building.",
    detailedMeaning: "The Hotel emoji shows a hotel with H sign, representing hotels, travel, and accommodation.\n\nUsed for travel, hotel stays, and vacation content.",
    usageContexts: ["Hotel", "Travel", "Stay", "Vacation", "Accommodation"],
    examples: [
      { context: "Stay", text: "Hotel check-in 🏨" },
      { context: "Travel", text: "Vacation hotel 🏨" },
      { context: "Trip", text: "Staying at 🏨" }
    ],
    misunderstandings: ["Clear hotel meaning"],
    relatedEmojis: ["bed", "luggage", "airplane"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["hotel", "travel", "stay", "vacation", "accommodation"]
  },
  {
    unicode: "🏪",
    name: "Convenience Store",
    slug: "convenience-store",
    shortMeaning: "A convenience store.",
    detailedMeaning: "The Convenience Store emoji shows a small store open late, representing convenience stores and quick shopping.\n\nUsed for convenience store runs and quick purchases.",
    usageContexts: ["Store", "Convenience", "Shopping", "Quick", "Late night"],
    examples: [
      { context: "Store", text: "Convenience store run 🏪" },
      { context: "Quick", text: "Quick snack 🏪" },
      { context: "Late", text: "Late night shopping 🏪" }
    ],
    misunderstandings: ["Clear convenience store meaning"],
    relatedEmojis: ["shopping-cart", "supermarket", "money"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["convenience", "store", "shop", "quick", "7-eleven"]
  },
  {
    unicode: "🏫",
    name: "School",
    slug: "school",
    shortMeaning: "A school building.",
    detailedMeaning: "The School emoji shows a school building, representing education, students, and learning.\n\nUsed for school, education, and student life content.",
    usageContexts: ["School", "Education", "Student", "Learning", "Class"],
    examples: [
      { context: "School", text: "Back to school 🏫" },
      { context: "Education", text: "School days 🏫" },
      { context: "Student", text: "Student life 🏫" }
    ],
    misunderstandings: ["Clear school meaning"],
    relatedEmojis: ["student", "teacher", "books"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["school", "education", "student", "learning", "class"]
  },
  {
    unicode: "🏭",
    name: "Factory",
    slug: "factory",
    shortMeaning: "An industrial factory.",
    detailedMeaning: "The Factory emoji shows a factory with smokestacks, representing industry, manufacturing, and production.\n\nUsed for industrial content, manufacturing, and factory work.",
    usageContexts: ["Factory", "Industry", "Manufacturing", "Production", "Work"],
    examples: [
      { context: "Industry", text: "Factory work 🏭" },
      { context: "Manufacturing", text: "Made in factory 🏭" },
      { context: "Production", text: "Production line 🏭" }
    ],
    misunderstandings: ["Clear industrial meaning"],
    relatedEmojis: ["gear", "wrench", "worker"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["factory", "industry", "manufacturing", "production", "industrial"]
  },
  {
    unicode: "🏛️",
    name: "Classical Building",
    slug: "classical-building",
    shortMeaning: "A classical Greek/Roman building.",
    detailedMeaning: "The Classical Building emoji shows a building with columns, representing government, museums, and ancient architecture.\n\nUsed for government, museums, and classical architecture.",
    usageContexts: ["Government", "Museum", "Classical", "Architecture", "Historic"],
    examples: [
      { context: "Museum", text: "Museum visit 🏛️" },
      { context: "Government", text: "Capitol building 🏛️" },
      { context: "Architecture", text: "Classical style 🏛️" }
    ],
    misunderstandings: ["Government/museum connotation"],
    relatedEmojis: ["statue-of-liberty", "column", "bank"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["classical", "building", "columns", "government", "museum"]
  },
  {
    unicode: "🏗️",
    name: "Building Construction",
    slug: "building-construction",
    shortMeaning: "A building under construction.",
    detailedMeaning: "The Building Construction emoji shows a crane at a construction site, representing construction and development.\n\nUsed for construction, building, and development content.",
    usageContexts: ["Construction", "Building", "Development", "Work", "Progress"],
    examples: [
      { context: "Building", text: "Under construction 🏗️" },
      { context: "Development", text: "New development 🏗️" },
      { context: "Progress", text: "Work in progress 🏗️" }
    ],
    misunderstandings: ["Clear construction meaning"],
    relatedEmojis: ["construction-worker", "wrench", "hammer"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["construction", "building", "crane", "development", "work"]
  },
  {
    unicode: "⛽",
    name: "Fuel Pump",
    slug: "fuel-pump",
    shortMeaning: "A gas station fuel pump.",
    detailedMeaning: "The Fuel Pump emoji shows a gas pump, representing fuel, gas stations, and filling up.\n\nUsed for gas stations, fuel, and road trip content.",
    usageContexts: ["Gas", "Fuel", "Station", "Road trip", "Car"],
    examples: [
      { context: "Fuel", text: "Need gas ⛽" },
      { context: "Road trip", text: "Pit stop ⛽" },
      { context: "Car", text: "Filling up ⛽" }
    ],
    misunderstandings: ["Clear gas/fuel meaning"],
    relatedEmojis: ["automobile", "road", "money"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["gas", "fuel", "pump", "station", "car"]
  },
  {
    unicode: "🚏",
    name: "Bus Stop",
    slug: "bus-stop",
    shortMeaning: "A bus stop sign.",
    detailedMeaning: "The Bus Stop emoji shows a bus stop sign, representing public transit stops and waiting for the bus.\n\nUsed for public transit and bus-related content.",
    usageContexts: ["Bus", "Transit", "Stop", "Wait", "Public"],
    examples: [
      { context: "Wait", text: "At the bus stop 🚏" },
      { context: "Transit", text: "Taking the bus 🚏" },
      { context: "Public", text: "Public transit 🚏" }
    ],
    misunderstandings: ["Clear bus stop meaning"],
    relatedEmojis: ["bus", "trolleybus", "train"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["bus", "stop", "transit", "wait", "public"]
  },
  {
    unicode: "🚦",
    name: "Vertical Traffic Light",
    slug: "vertical-traffic-light",
    shortMeaning: "A traffic light.",
    detailedMeaning: "The Traffic Light emoji shows a vertical stoplight, representing traffic, driving, and road signals.\n\nUsed for traffic, driving, and stop/go metaphors.",
    usageContexts: ["Traffic", "Driving", "Signal", "Stop", "Go"],
    examples: [
      { context: "Traffic", text: "Traffic lights 🚦" },
      { context: "Driving", text: "Green light 🚦" },
      { context: "Metaphor", text: "Go ahead 🚦" }
    ],
    misunderstandings: ["Clear traffic signal meaning"],
    relatedEmojis: ["automobile", "stop-sign", "road"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["traffic", "light", "signal", "stop", "go"]
  },
  {
    unicode: "🛤️",
    name: "Railway Track",
    slug: "railway-track",
    shortMeaning: "Train railway tracks.",
    detailedMeaning: "The Railway Track emoji shows train tracks disappearing into distance, representing railroads and journeys.\n\nUsed for train travel, journey metaphors, and paths.",
    usageContexts: ["Train", "Railway", "Journey", "Path", "Travel"],
    examples: [
      { context: "Journey", text: "Long journey 🛤️" },
      { context: "Train", text: "Train tracks 🛤️" },
      { context: "Path", text: "On track 🛤️" }
    ],
    misunderstandings: ["Can mean life journey"],
    relatedEmojis: ["locomotive", "train", "station"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["railway", "tracks", "train", "journey", "path"]
  },
  {
    unicode: "🛣️",
    name: "Motorway",
    slug: "motorway",
    shortMeaning: "A highway/motorway road.",
    detailedMeaning: "The Motorway emoji shows a highway stretching into distance, representing road trips and highways.\n\nUsed for road trips, driving, and journey content.",
    usageContexts: ["Highway", "Road trip", "Driving", "Journey", "Travel"],
    examples: [
      { context: "Road trip", text: "Open road 🛣️" },
      { context: "Drive", text: "Long drive 🛣️" },
      { context: "Journey", text: "The journey ahead 🛣️" }
    ],
    misunderstandings: ["Clear highway meaning"],
    relatedEmojis: ["automobile", "fuel-pump", "road"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["motorway", "highway", "road", "drive", "journey"]
  },
  {
    unicode: "🗿",
    name: "Moai",
    slug: "moai",
    shortMeaning: "A Moai statue from Easter Island.",
    detailedMeaning: "The Moai emoji shows an Easter Island stone head, representing ancient mysteries, stoic faces, and internet memes.\n\nUsed for Easter Island, stone-faced expressions, and meme culture.",
    usageContexts: ["Easter Island", "Stone face", "Meme", "Ancient", "Stoic"],
    examples: [
      { context: "Meme", text: "Bruh moment 🗿" },
      { context: "Stoic", text: "Stone faced 🗿" },
      { context: "Travel", text: "Easter Island 🗿" }
    ],
    misunderstandings: ["Popular meme usage"],
    relatedEmojis: ["statue-of-liberty", "classical-building", "stone"],
    categorySlug: "travel-and-places",
    subgroup: "place-other",
    keywords: ["moai", "Easter Island", "stone", "statue", "meme"]
  },
  // ACTIVITIES
  {
    unicode: "⚽",
    name: "Soccer Ball",
    slug: "soccer-ball",
    shortMeaning: "A soccer/football - the world's most popular sport.",
    detailedMeaning: "The Soccer Ball emoji shows the classic black and white ball, representing soccer/football, the world's most popular sport. It's associated with games, sports enthusiasm, and World Cup fever.\n\nUsed for soccer/football discussions, sports content, game days, and expressing love for the beautiful game.",
    usageContexts: ["Soccer/Football", "Sports", "Games", "World Cup", "Exercise"],
    examples: [
      { context: "Game", text: "Match day ⚽" },
      { context: "Playing", text: "Heading to practice ⚽" },
      { context: "Fan", text: "Go team ⚽" }
    ],
    misunderstandings: ["Called 'football' in most of the world, 'soccer' in US"],
    relatedEmojis: ["goal-net", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["soccer", "football", "sport", "ball", "game"]
  },
  {
    unicode: "🏀",
    name: "Basketball",
    slug: "basketball",
    shortMeaning: "A basketball - shooting hoops and NBA action.",
    detailedMeaning: "The Basketball emoji shows an orange basketball, representing the sport, NBA culture, and playing hoops. Basketball has massive global popularity, especially in the US.\n\nUsed for basketball content, sports discussions, game days, and athletic activities.",
    usageContexts: ["Basketball", "Sports", "NBA", "Games", "Athletic"],
    examples: [
      { context: "Game", text: "Game night 🏀" },
      { context: "Playing", text: "Shooting hoops 🏀" },
      { context: "Fan", text: "Lakers fan 🏀" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["person-bouncing-ball", "trophy", "stadium"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["basketball", "sport", "NBA", "hoops", "ball"]
  },
  {
    unicode: "🎮",
    name: "Video Game",
    slug: "video-game",
    shortMeaning: "A video game controller - gaming time!",
    detailedMeaning: "The Video Game emoji shows a game controller, representing video gaming, esports, and digital entertainment. Gaming has become a major entertainment industry and culture.\n\nUsed for gaming discussions, inviting others to play, expressing love for games, or discussing esports and gaming culture.",
    usageContexts: ["Gaming", "Video games", "Esports", "Entertainment", "Playing"],
    examples: [
      { context: "Gaming", text: "Gaming night 🎮" },
      { context: "Invite", text: "Wanna play? 🎮" },
      { context: "Fun", text: "New game day 🎮" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["joystick", "alien-monster", "trophy"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["game", "gaming", "controller", "video game", "play"]
  },
  {
    unicode: "🎬",
    name: "Clapper Board",
    slug: "clapper-board",
    shortMeaning: "A movie clapperboard - film, cinema, and action!",
    detailedMeaning: "The Clapper Board emoji shows a film slate/clapperboard, representing movies, filmmaking, and cinema. It's associated with Hollywood, productions, and dramatic moments.\n\nUsed for movie discussions, film-related content, expressing drama, or indicating something is 'action' worthy.",
    usageContexts: ["Movies", "Filmmaking", "Cinema", "Drama", "Entertainment"],
    examples: [
      { context: "Movie", text: "Movie night 🎬" },
      { context: "Drama", text: "And the drama begins 🎬" },
      { context: "Film", text: "Watching classics 🎬" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["film-frames", "movie-camera", "popcorn"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["movie", "film", "cinema", "action", "Hollywood"]
  },
  {
    unicode: "🎉",
    name: "Party Popper",
    slug: "party-popper",
    shortMeaning: "Party popper exploding with confetti - celebration time!",
    detailedMeaning: "The Party Popper emoji shows a party popper releasing confetti, representing celebration, excitement, and festive occasions. It's the go-to emoji for any kind of celebration.\n\nUsed for birthdays, achievements, announcements, and any moment worth celebrating. It adds festive energy to any message.",
    usageContexts: ["Celebrations", "Parties", "Achievements", "Birthdays", "Good news"],
    examples: [
      { context: "Birthday", text: "Happy birthday 🎉" },
      { context: "Celebrate", text: "We did it 🎉" },
      { context: "Congrats", text: "Congratulations 🎉" }
    ],
    misunderstandings: ["Clear celebratory meaning"],
    relatedEmojis: ["confetti-ball", "balloon", "birthday-cake"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["party", "celebrate", "confetti", "birthday", "hooray"]
  },
  {
    unicode: "🎁",
    name: "Wrapped Gift",
    slug: "wrapped-gift",
    shortMeaning: "A wrapped present with a bow - gift giving time!",
    detailedMeaning: "The Wrapped Gift emoji shows a beautifully wrapped present with a ribbon bow, representing gifts, presents, and generosity. It's associated with birthdays, holidays, and special occasions.\n\nUsed for gift-giving occasions, expressing generosity, or hinting about presents and surprises.",
    usageContexts: ["Gifts", "Presents", "Birthdays", "Holidays", "Surprises"],
    examples: [
      { context: "Gift", text: "Got something for you 🎁" },
      { context: "Birthday", text: "Birthday present time 🎁" },
      { context: "Surprise", text: "Surprise 🎁" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["party-popper", "birthday-cake", "christmas-tree"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["gift", "present", "birthday", "holiday", "surprise"]
  },
  // MORE SPORTS
  {
    unicode: "🏈",
    name: "American Football",
    slug: "american-football",
    shortMeaning: "An American football - touchdown time!",
    detailedMeaning: "The American Football emoji shows the distinctive brown oval ball, representing NFL football, Super Bowl, and American sports culture.\n\nUsed for football games, tailgating, Super Bowl parties, and American sports enthusiasm.",
    usageContexts: ["NFL", "Football", "Sports", "Super Bowl", "Touchdown"],
    examples: [
      { context: "Game", text: "Game day 🏈" },
      { context: "Super Bowl", text: "Super Bowl party 🏈" },
      { context: "Fan", text: "Go Cowboys 🏈" }
    ],
    misunderstandings: ["Only refers to American football, not soccer"],
    relatedEmojis: ["soccer-ball", "trophy", "stadium"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["football", "NFL", "American", "touchdown", "sport"]
  },
  {
    unicode: "⚾",
    name: "Baseball",
    slug: "baseball",
    shortMeaning: "A baseball - America's pastime.",
    detailedMeaning: "The Baseball emoji shows a white baseball with red stitching, representing baseball, MLB, and America's national pastime.\n\nUsed for baseball games, World Series, and expressing love for the sport.",
    usageContexts: ["Baseball", "MLB", "Sports", "World Series", "Games"],
    examples: [
      { context: "Game", text: "Take me out to the ball game ⚾" },
      { context: "Sports", text: "Baseball season ⚾" },
      { context: "Fan", text: "Yankees fan ⚾" }
    ],
    misunderstandings: ["Clear baseball meaning"],
    relatedEmojis: ["softball", "baseball-cap", "stadium"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["baseball", "MLB", "sport", "ball", "pitcher"]
  },
  {
    unicode: "🥎",
    name: "Softball",
    slug: "softball",
    shortMeaning: "A softball - larger and yellow.",
    detailedMeaning: "The Softball emoji shows a yellow softball, representing the sport that's similar to baseball but with a larger ball.\n\nUsed for softball games, women's sports, and athletic activities.",
    usageContexts: ["Softball", "Sports", "Games", "Athletic", "Team"],
    examples: [
      { context: "Game", text: "Softball practice 🥎" },
      { context: "Sports", text: "Softball season 🥎" },
      { context: "Team", text: "Go team 🥎" }
    ],
    misunderstandings: ["Sometimes confused with baseball"],
    relatedEmojis: ["baseball", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["softball", "sport", "ball", "game", "athletic"]
  },
  {
    unicode: "🎾",
    name: "Tennis",
    slug: "tennis",
    shortMeaning: "A tennis ball - game, set, match!",
    detailedMeaning: "The Tennis emoji shows a bright yellow-green tennis ball, representing tennis, racket sports, and athletic elegance.\n\nUsed for tennis content, Wimbledon, and racket sport discussions.",
    usageContexts: ["Tennis", "Sports", "Wimbledon", "Racket", "Athletic"],
    examples: [
      { context: "Game", text: "Tennis time 🎾" },
      { context: "Sports", text: "Wimbledon finals 🎾" },
      { context: "Play", text: "Let's hit some balls 🎾" }
    ],
    misunderstandings: ["Clear tennis meaning"],
    relatedEmojis: ["badminton", "ping-pong", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["tennis", "sport", "ball", "racket", "Wimbledon"]
  },
  {
    unicode: "🏐",
    name: "Volleyball",
    slug: "volleyball",
    shortMeaning: "A volleyball - beach and indoor fun.",
    detailedMeaning: "The Volleyball emoji shows a white and colored volleyball, representing both beach and indoor volleyball.\n\nUsed for volleyball games, beach activities, and team sports.",
    usageContexts: ["Volleyball", "Beach", "Sports", "Team", "Games"],
    examples: [
      { context: "Beach", text: "Beach volleyball 🏐" },
      { context: "Game", text: "Volleyball match 🏐" },
      { context: "Sports", text: "Spike it 🏐" }
    ],
    misunderstandings: ["Clear volleyball meaning"],
    relatedEmojis: ["beach-with-umbrella", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["volleyball", "beach", "sport", "ball", "team"]
  },
  {
    unicode: "🏉",
    name: "Rugby Football",
    slug: "rugby-football",
    shortMeaning: "A rugby ball - the rough and tumble sport.",
    detailedMeaning: "The Rugby Football emoji shows the distinctive oval rugby ball, representing rugby union and rugby league.\n\nUsed for rugby matches, World Cup, and the physical team sport.",
    usageContexts: ["Rugby", "Sports", "World Cup", "Team", "Athletic"],
    examples: [
      { context: "Game", text: "Rugby match 🏉" },
      { context: "Sports", text: "Rugby World Cup 🏉" },
      { context: "Play", text: "Scrum time 🏉" }
    ],
    misunderstandings: ["Sometimes confused with American football"],
    relatedEmojis: ["american-football", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["rugby", "sport", "ball", "team", "scrum"]
  },
  {
    unicode: "🎱",
    name: "Pool 8 Ball",
    slug: "pool-8-ball",
    shortMeaning: "The 8 ball from pool/billiards.",
    detailedMeaning: "The Pool 8 Ball emoji shows the iconic black 8 ball from pool/billiards, representing the game, bars, and hanging out.\n\nUsed for pool games, bars, and the phrase 'behind the 8 ball.'",
    usageContexts: ["Pool", "Billiards", "Bar", "Games", "Hanging out"],
    examples: [
      { context: "Game", text: "Pool night 🎱" },
      { context: "Bar", text: "At the bar 🎱" },
      { context: "Fun", text: "Who's up for pool 🎱" }
    ],
    misunderstandings: ["Magic 8 ball fortune telling context"],
    relatedEmojis: ["video-game", "dart", "bowling"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["pool", "billiards", "8 ball", "game", "bar"]
  },
  {
    unicode: "🏓",
    name: "Ping Pong",
    slug: "ping-pong",
    shortMeaning: "A ping pong paddle and ball.",
    detailedMeaning: "The Ping Pong emoji shows a red paddle and white ball, representing table tennis and office games.\n\nUsed for ping pong, table tennis, and recreational sports.",
    usageContexts: ["Ping Pong", "Table Tennis", "Games", "Office", "Recreation"],
    examples: [
      { context: "Game", text: "Ping pong break 🏓" },
      { context: "Office", text: "Office tournament 🏓" },
      { context: "Fun", text: "Table tennis time 🏓" }
    ],
    misunderstandings: ["Clear ping pong meaning"],
    relatedEmojis: ["tennis", "badminton", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["ping pong", "table tennis", "paddle", "game", "sport"]
  },
  {
    unicode: "🏸",
    name: "Badminton",
    slug: "badminton",
    shortMeaning: "A badminton racket and shuttlecock.",
    detailedMeaning: "The Badminton emoji shows a racket and shuttlecock (birdie), representing the popular racket sport.\n\nUsed for badminton games, backyard activities, and racket sports.",
    usageContexts: ["Badminton", "Sports", "Backyard", "Games", "Recreation"],
    examples: [
      { context: "Game", text: "Badminton time 🏸" },
      { context: "Backyard", text: "Backyard badminton 🏸" },
      { context: "Sports", text: "Shuttlecock smash 🏸" }
    ],
    misunderstandings: ["Clear badminton meaning"],
    relatedEmojis: ["tennis", "ping-pong", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["badminton", "racket", "shuttlecock", "sport", "game"]
  },
  {
    unicode: "🥊",
    name: "Boxing Glove",
    slug: "boxing-glove",
    shortMeaning: "A red boxing glove - fight night!",
    detailedMeaning: "The Boxing Glove emoji shows a red boxing glove, representing boxing, combat sports, and fighting spirit.\n\nUsed for boxing matches, UFC/MMA, fighting metaphors, and staying strong.",
    usageContexts: ["Boxing", "Fighting", "Combat", "Strength", "Determination"],
    examples: [
      { context: "Fight", text: "Fight night 🥊" },
      { context: "Motivation", text: "Keep fighting 🥊" },
      { context: "Sports", text: "Boxing training 🥊" }
    ],
    misunderstandings: ["Can mean aggression or fighting spirit"],
    relatedEmojis: ["martial-arts-uniform", "trophy", "flexed-biceps"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["boxing", "glove", "fight", "combat", "punch"]
  },
  {
    unicode: "🥋",
    name: "Martial Arts Uniform",
    slug: "martial-arts-uniform",
    shortMeaning: "A martial arts gi/uniform.",
    detailedMeaning: "The Martial Arts Uniform emoji shows a white karate gi with a belt, representing martial arts like karate, judo, and taekwondo.\n\nUsed for martial arts training, discipline, and combat sports.",
    usageContexts: ["Martial Arts", "Karate", "Judo", "Training", "Discipline"],
    examples: [
      { context: "Training", text: "Karate practice 🥋" },
      { context: "Martial Arts", text: "Belt test today 🥋" },
      { context: "Discipline", text: "Training hard 🥋" }
    ],
    misunderstandings: ["Clear martial arts meaning"],
    relatedEmojis: ["boxing-glove", "sports-medal", "flexed-biceps"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["martial arts", "karate", "judo", "uniform", "gi"]
  },
  {
    unicode: "⛳",
    name: "Flag in Hole",
    slug: "flag-in-hole",
    shortMeaning: "A golf flag in the hole.",
    detailedMeaning: "The Flag in Hole emoji shows a golf green with flag, representing golf and the country club lifestyle.\n\nUsed for golf content, relaxation, and upscale leisure activities.",
    usageContexts: ["Golf", "Sports", "Leisure", "Relaxation", "Country Club"],
    examples: [
      { context: "Golf", text: "Golf day ⛳" },
      { context: "Sports", text: "18 holes ⛳" },
      { context: "Leisure", text: "Tee time ⛳" }
    ],
    misunderstandings: ["Clear golf meaning"],
    relatedEmojis: ["sports-medal", "trophy", "sun"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["golf", "hole", "flag", "sport", "course"]
  },
  {
    unicode: "⛷️",
    name: "Skier",
    slug: "skier",
    shortMeaning: "A person skiing down slopes.",
    detailedMeaning: "The Skier emoji shows a person skiing, representing winter sports, mountain vacations, and alpine adventures.\n\nUsed for skiing trips, winter sports, and mountain activities.",
    usageContexts: ["Skiing", "Winter", "Mountains", "Sports", "Vacation"],
    examples: [
      { context: "Skiing", text: "Hitting the slopes ⛷️" },
      { context: "Vacation", text: "Ski trip ⛷️" },
      { context: "Winter", text: "Fresh powder ⛷️" }
    ],
    misunderstandings: ["Clear skiing meaning"],
    relatedEmojis: ["snowboarder", "mountain", "snow"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["ski", "skiing", "winter", "snow", "sport"]
  },
  {
    unicode: "🏂",
    name: "Snowboarder",
    slug: "snowboarder",
    shortMeaning: "A person snowboarding.",
    detailedMeaning: "The Snowboarder emoji shows a person on a snowboard, representing snowboarding, winter sports, and extreme mountain activities.\n\nUsed for snowboarding, winter sports, and mountain adventures.",
    usageContexts: ["Snowboarding", "Winter", "Mountains", "Extreme", "Sports"],
    examples: [
      { context: "Snowboard", text: "Shredding the gnar 🏂" },
      { context: "Vacation", text: "Snowboard trip 🏂" },
      { context: "Winter", text: "Catching air 🏂" }
    ],
    misunderstandings: ["Clear snowboarding meaning"],
    relatedEmojis: ["skier", "mountain", "snow"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["snowboard", "winter", "snow", "sport", "extreme"]
  },
  {
    unicode: "🏋️",
    name: "Person Lifting Weights",
    slug: "person-lifting-weights",
    shortMeaning: "A person lifting weights - gym time!",
    detailedMeaning: "The Person Lifting Weights emoji shows someone lifting a barbell, representing weightlifting, gym culture, and fitness.\n\nUsed for gym sessions, fitness goals, and showing dedication to working out.",
    usageContexts: ["Gym", "Fitness", "Weightlifting", "Workout", "Strength"],
    examples: [
      { context: "Gym", text: "Gym time 🏋️" },
      { context: "Fitness", text: "Leg day 🏋️" },
      { context: "Workout", text: "Gains incoming 🏋️" }
    ],
    misunderstandings: ["Clear weightlifting meaning"],
    relatedEmojis: ["flexed-biceps", "running-shoe", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["weights", "gym", "fitness", "workout", "lifting"]
  },
  {
    unicode: "🤸",
    name: "Person Cartwheeling",
    slug: "person-cartwheeling",
    shortMeaning: "A person doing a cartwheel.",
    detailedMeaning: "The Person Cartwheeling emoji shows someone doing a cartwheel, representing gymnastics, flexibility, and playful energy.\n\nUsed for gymnastics, excitement, and expressing joy through movement.",
    usageContexts: ["Gymnastics", "Joy", "Excitement", "Playful", "Athletic"],
    examples: [
      { context: "Joy", text: "So happy I could cartwheel 🤸" },
      { context: "Gymnastics", text: "Gymnastics practice 🤸" },
      { context: "Playful", text: "Feeling free 🤸" }
    ],
    misunderstandings: ["Clear cartwheeling meaning"],
    relatedEmojis: ["person-doing-cartwheel", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["cartwheel", "gymnastics", "acrobatic", "flip", "athletic"]
  },
  {
    unicode: "🏊",
    name: "Person Swimming",
    slug: "person-swimming",
    shortMeaning: "A person swimming.",
    detailedMeaning: "The Person Swimming emoji shows someone swimming, representing swimming, water sports, and aquatic fitness.\n\nUsed for swimming, pool time, beach activities, and water fitness.",
    usageContexts: ["Swimming", "Pool", "Beach", "Water", "Fitness"],
    examples: [
      { context: "Pool", text: "Pool time 🏊" },
      { context: "Swimming", text: "Lap swimming 🏊" },
      { context: "Fitness", text: "Morning swim 🏊" }
    ],
    misunderstandings: ["Clear swimming meaning"],
    relatedEmojis: ["water-wave", "beach-with-umbrella", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["swim", "swimming", "pool", "water", "sport"]
  },
  {
    unicode: "🚴",
    name: "Person Biking",
    slug: "person-biking",
    shortMeaning: "A person riding a bicycle.",
    detailedMeaning: "The Person Biking emoji shows someone cycling, representing cycling, biking, and eco-friendly transportation.\n\nUsed for biking, cycling, commuting, and fitness activities.",
    usageContexts: ["Biking", "Cycling", "Commute", "Fitness", "Eco-friendly"],
    examples: [
      { context: "Commute", text: "Biking to work 🚴" },
      { context: "Fitness", text: "Morning bike ride 🚴" },
      { context: "Sports", text: "Cycling race 🚴" }
    ],
    misunderstandings: ["Clear cycling meaning"],
    relatedEmojis: ["bicycle", "person-mountain-biking", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["bike", "cycling", "bicycle", "ride", "sport"]
  },
  {
    unicode: "🚵",
    name: "Person Mountain Biking",
    slug: "person-mountain-biking",
    shortMeaning: "A person mountain biking.",
    detailedMeaning: "The Person Mountain Biking emoji shows someone on a mountain bike, representing off-road cycling and adventure sports.\n\nUsed for mountain biking, trail riding, and outdoor adventures.",
    usageContexts: ["Mountain Biking", "Trails", "Adventure", "Outdoor", "Sports"],
    examples: [
      { context: "Trails", text: "Trail riding 🚵" },
      { context: "Adventure", text: "Mountain bike adventure 🚵" },
      { context: "Sports", text: "Hitting the trails 🚵" }
    ],
    misunderstandings: ["Clear mountain biking meaning"],
    relatedEmojis: ["person-biking", "mountain", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["mountain bike", "cycling", "trail", "adventure", "sport"]
  },
  {
    unicode: "🧘",
    name: "Person in Lotus Position",
    slug: "person-in-lotus-position",
    shortMeaning: "A person meditating in lotus position.",
    detailedMeaning: "The Person in Lotus Position emoji shows someone meditating, representing yoga, meditation, and mindfulness.\n\nUsed for meditation, yoga, relaxation, and spiritual practice.",
    usageContexts: ["Meditation", "Yoga", "Mindfulness", "Relaxation", "Wellness"],
    examples: [
      { context: "Meditation", text: "Meditation time 🧘" },
      { context: "Yoga", text: "Yoga class 🧘" },
      { context: "Wellness", text: "Finding my zen 🧘" }
    ],
    misunderstandings: ["Clear meditation/yoga meaning"],
    relatedEmojis: ["om", "yin-yang", "pray"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["meditation", "yoga", "lotus", "zen", "mindfulness"]
  },
  {
    unicode: "🏇",
    name: "Horse Racing",
    slug: "horse-racing",
    shortMeaning: "A jockey on a racing horse.",
    detailedMeaning: "The Horse Racing emoji shows a jockey on a racing horse, representing horse racing, Kentucky Derby, and equestrian sports.\n\nUsed for horse racing, derby events, and betting contexts.",
    usageContexts: ["Horse Racing", "Derby", "Betting", "Sports", "Equestrian"],
    examples: [
      { context: "Derby", text: "Kentucky Derby 🏇" },
      { context: "Racing", text: "Race day 🏇" },
      { context: "Sports", text: "And they're off 🏇" }
    ],
    misunderstandings: ["Clear horse racing meaning"],
    relatedEmojis: ["horse", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["horse", "racing", "jockey", "derby", "sport"]
  },
  // AWARDS & MEDALS
  {
    unicode: "🏆",
    name: "Trophy",
    slug: "trophy",
    shortMeaning: "A golden trophy - winner!",
    detailedMeaning: "The Trophy emoji shows a gold trophy cup, representing victory, achievement, and being the best at something.\n\nUsed for winning, achievements, congratulations, and recognizing excellence.",
    usageContexts: ["Winning", "Achievement", "Champion", "Best", "Success"],
    examples: [
      { context: "Win", text: "We won 🏆" },
      { context: "Achievement", text: "First place 🏆" },
      { context: "Praise", text: "You're a champion 🏆" }
    ],
    misunderstandings: ["Clear trophy/winner meaning"],
    relatedEmojis: ["gold-medal", "sports-medal", "crown"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["trophy", "winner", "champion", "award", "victory"]
  },
  {
    unicode: "🥇",
    name: "1st Place Medal",
    slug: "1st-place-medal",
    shortMeaning: "A gold medal for first place.",
    detailedMeaning: "The 1st Place Medal emoji shows a gold medal with a ribbon, representing first place, winning, and gold medal achievement.\n\nUsed for first place finishes, gold medal moments, and being the best.",
    usageContexts: ["First Place", "Gold", "Winner", "Champion", "Best"],
    examples: [
      { context: "Winner", text: "Gold medal 🥇" },
      { context: "First", text: "First place finish 🥇" },
      { context: "Best", text: "You're number one 🥇" }
    ],
    misunderstandings: ["Clear first place meaning"],
    relatedEmojis: ["2nd-place-medal", "3rd-place-medal", "trophy"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["gold", "first", "medal", "winner", "champion"]
  },
  {
    unicode: "🥈",
    name: "2nd Place Medal",
    slug: "2nd-place-medal",
    shortMeaning: "A silver medal for second place.",
    detailedMeaning: "The 2nd Place Medal emoji shows a silver medal with a ribbon, representing second place and silver medal achievement.\n\nUsed for second place finishes and runner-up positions.",
    usageContexts: ["Second Place", "Silver", "Runner-up", "Achievement", "Almost"],
    examples: [
      { context: "Runner-up", text: "Silver medal 🥈" },
      { context: "Second", text: "Second place 🥈" },
      { context: "Close", text: "So close 🥈" }
    ],
    misunderstandings: ["Clear second place meaning"],
    relatedEmojis: ["1st-place-medal", "3rd-place-medal", "trophy"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["silver", "second", "medal", "runner-up", "achievement"]
  },
  {
    unicode: "🥉",
    name: "3rd Place Medal",
    slug: "3rd-place-medal",
    shortMeaning: "A bronze medal for third place.",
    detailedMeaning: "The 3rd Place Medal emoji shows a bronze medal with a ribbon, representing third place and bronze medal achievement.\n\nUsed for third place finishes and podium positions.",
    usageContexts: ["Third Place", "Bronze", "Podium", "Achievement", "Top Three"],
    examples: [
      { context: "Bronze", text: "Bronze medal 🥉" },
      { context: "Third", text: "Third place 🥉" },
      { context: "Podium", text: "Made the podium 🥉" }
    ],
    misunderstandings: ["Clear third place meaning"],
    relatedEmojis: ["1st-place-medal", "2nd-place-medal", "trophy"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["bronze", "third", "medal", "podium", "achievement"]
  },
  {
    unicode: "🏅",
    name: "Sports Medal",
    slug: "sports-medal",
    shortMeaning: "A sports medal on a ribbon.",
    detailedMeaning: "The Sports Medal emoji shows a gold medal on a ribbon, representing athletic achievement and sports excellence.\n\nUsed for athletic accomplishments, finishing races, and sports achievements.",
    usageContexts: ["Sports", "Achievement", "Athletic", "Finish", "Award"],
    examples: [
      { context: "Race", text: "Finished the marathon 🏅" },
      { context: "Sports", text: "Personal best 🏅" },
      { context: "Achievement", text: "Earned my medal 🏅" }
    ],
    misunderstandings: ["Generic sports medal, not specific place"],
    relatedEmojis: ["1st-place-medal", "trophy", "running-shoe"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["medal", "sports", "athletic", "award", "achievement"]
  },
  {
    unicode: "🎖️",
    name: "Military Medal",
    slug: "military-medal",
    shortMeaning: "A military medal for service.",
    detailedMeaning: "The Military Medal emoji shows a medal of honor, representing military service, bravery, and distinguished achievement.\n\nUsed for veterans, military recognition, and honoring service.",
    usageContexts: ["Military", "Veterans", "Service", "Honor", "Bravery"],
    examples: [
      { context: "Veterans", text: "Thank you for your service 🎖️" },
      { context: "Honor", text: "True hero 🎖️" },
      { context: "Military", text: "Medal of honor 🎖️" }
    ],
    misunderstandings: ["Specifically military, not sports"],
    relatedEmojis: ["sports-medal", "trophy", "star"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["military", "medal", "honor", "service", "veteran"]
  },
  // CELEBRATIONS & EVENTS
  {
    unicode: "🎂",
    name: "Birthday Cake",
    slug: "birthday-cake",
    shortMeaning: "A birthday cake with candles.",
    detailedMeaning: "The Birthday Cake emoji shows a cake with lit candles, representing birthdays, celebrations, and making wishes.\n\nUsed for birthday wishes, celebrations, and special occasions.",
    usageContexts: ["Birthday", "Celebration", "Cake", "Party", "Wishes"],
    examples: [
      { context: "Birthday", text: "Happy birthday 🎂" },
      { context: "Celebration", text: "Make a wish 🎂" },
      { context: "Party", text: "Party time 🎂" }
    ],
    misunderstandings: ["Clear birthday meaning"],
    relatedEmojis: ["party-popper", "balloon", "wrapped-gift"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["birthday", "cake", "candles", "party", "celebration"]
  },
  {
    unicode: "🎈",
    name: "Balloon",
    slug: "balloon",
    shortMeaning: "A colorful party balloon.",
    detailedMeaning: "The Balloon emoji shows a red balloon on a string, representing parties, celebrations, and festive occasions.\n\nUsed for parties, birthdays, celebrations, and adding festive flair.",
    usageContexts: ["Party", "Celebration", "Birthday", "Festive", "Happy"],
    examples: [
      { context: "Party", text: "Party time 🎈" },
      { context: "Birthday", text: "Happy birthday 🎈" },
      { context: "Festive", text: "Celebration mode 🎈" }
    ],
    misunderstandings: ["Clear party/celebration meaning"],
    relatedEmojis: ["party-popper", "birthday-cake", "confetti-ball"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["balloon", "party", "celebration", "birthday", "festive"]
  },
  {
    unicode: "🎊",
    name: "Confetti Ball",
    slug: "confetti-ball",
    shortMeaning: "A confetti ball exploding.",
    detailedMeaning: "The Confetti Ball emoji shows a ball releasing confetti, representing celebration, New Year's, and festive moments.\n\nUsed for celebrations, New Year's, and congratulatory messages.",
    usageContexts: ["Celebration", "New Year", "Congrats", "Party", "Festive"],
    examples: [
      { context: "New Year", text: "Happy New Year 🎊" },
      { context: "Celebration", text: "Congratulations 🎊" },
      { context: "Party", text: "Let's celebrate 🎊" }
    ],
    misunderstandings: ["Clear celebration meaning"],
    relatedEmojis: ["party-popper", "balloon", "sparkles"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["confetti", "celebration", "party", "New Year", "festive"]
  },
  {
    unicode: "✨",
    name: "Sparkles",
    slug: "sparkles",
    shortMeaning: "Sparkles and glitter.",
    detailedMeaning: "The Sparkles emoji shows twinkling stars or glitter, representing magic, excitement, newness, and special qualities.\n\nUsed to add emphasis, show something is special, express excitement, or add aesthetic flair.",
    usageContexts: ["Magic", "Special", "Aesthetic", "Excitement", "New"],
    examples: [
      { context: "Special", text: "You're amazing ✨" },
      { context: "New", text: "New look ✨" },
      { context: "Aesthetic", text: "Vibes ✨" }
    ],
    misunderstandings: ["Overused for aesthetic purposes"],
    relatedEmojis: ["star", "glowing-star", "dizzy"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["sparkle", "glitter", "magic", "special", "shine"]
  },
  {
    unicode: "🎇",
    name: "Sparkler",
    slug: "sparkler",
    shortMeaning: "A lit sparkler firework.",
    detailedMeaning: "The Sparkler emoji shows a handheld sparkler firework, representing celebrations, holidays, and festive occasions.\n\nUsed for Fourth of July, New Year's, and celebration moments.",
    usageContexts: ["Celebration", "Fourth of July", "New Year", "Fireworks", "Party"],
    examples: [
      { context: "Fourth of July", text: "Happy 4th 🎇" },
      { context: "Celebration", text: "Sparkler time 🎇" },
      { context: "Party", text: "Light it up 🎇" }
    ],
    misunderstandings: ["Clear sparkler/firework meaning"],
    relatedEmojis: ["fireworks", "party-popper", "confetti-ball"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["sparkler", "firework", "celebration", "holiday", "festive"]
  },
  {
    unicode: "🎆",
    name: "Fireworks",
    slug: "fireworks",
    shortMeaning: "Colorful fireworks in the night sky.",
    detailedMeaning: "The Fireworks emoji shows fireworks exploding in the night sky, representing celebrations, New Year's, and spectacular displays.\n\nUsed for New Year's, Fourth of July, and any spectacular celebration.",
    usageContexts: ["Celebration", "New Year", "Fourth of July", "Night", "Spectacular"],
    examples: [
      { context: "New Year", text: "Happy New Year 🎆" },
      { context: "Celebration", text: "Fireworks show 🎆" },
      { context: "Fourth", text: "July 4th 🎆" }
    ],
    misunderstandings: ["Clear fireworks meaning"],
    relatedEmojis: ["sparkler", "party-popper", "night-stars"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["fireworks", "celebration", "New Year", "night", "explosion"]
  },
  {
    unicode: "🧨",
    name: "Firecracker",
    slug: "firecracker",
    shortMeaning: "A red firecracker.",
    detailedMeaning: "The Firecracker emoji shows a red firecracker/dynamite, representing celebrations, Chinese New Year, and explosive situations.\n\nUsed for Chinese New Year, celebrations, or expressing something explosive.",
    usageContexts: ["Chinese New Year", "Celebration", "Explosive", "Exciting", "Bang"],
    examples: [
      { context: "Chinese New Year", text: "Happy Lunar New Year 🧨" },
      { context: "Explosive", text: "Mind blown 🧨" },
      { context: "Exciting", text: "This is fire 🧨" }
    ],
    misunderstandings: ["Can look like dynamite"],
    relatedEmojis: ["fireworks", "sparkler", "fire"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["firecracker", "celebration", "Chinese New Year", "explosive", "bang"]
  },
  // ARTS & HOBBIES
  {
    unicode: "🎨",
    name: "Artist Palette",
    slug: "artist-palette",
    shortMeaning: "A painter's palette - art and creativity!",
    detailedMeaning: "The Artist Palette emoji shows a painter's palette with colors, representing art, creativity, and artistic expression.\n\nUsed for art content, creative projects, and expressing artistic energy.",
    usageContexts: ["Art", "Creativity", "Painting", "Design", "Creative"],
    examples: [
      { context: "Art", text: "Art time 🎨" },
      { context: "Creative", text: "Feeling creative 🎨" },
      { context: "Design", text: "New design 🎨" }
    ],
    misunderstandings: ["Clear art/creativity meaning"],
    relatedEmojis: ["frame-with-picture", "paintbrush", "crayon"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["art", "palette", "paint", "creative", "artist"]
  },
  {
    unicode: "🖌️",
    name: "Paintbrush",
    slug: "paintbrush",
    shortMeaning: "A paintbrush for art.",
    detailedMeaning: "The Paintbrush emoji shows an artist's paintbrush, representing painting, art, and creative expression.\n\nUsed for art, painting, decorating, and creative activities.",
    usageContexts: ["Painting", "Art", "Creative", "Decorating", "Design"],
    examples: [
      { context: "Painting", text: "Painting day 🖌️" },
      { context: "Art", text: "New artwork 🖌️" },
      { context: "Creative", text: "Getting creative 🖌️" }
    ],
    misunderstandings: ["Clear paintbrush meaning"],
    relatedEmojis: ["artist-palette", "crayon", "frame-with-picture"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["paintbrush", "art", "paint", "creative", "brush"]
  },
  {
    unicode: "🖍️",
    name: "Crayon",
    slug: "crayon",
    shortMeaning: "A colorful crayon.",
    detailedMeaning: "The Crayon emoji shows a wax crayon, representing childhood art, coloring, and simple creativity.\n\nUsed for kids' activities, coloring, and nostalgic creative moments.",
    usageContexts: ["Kids", "Coloring", "Art", "Childhood", "Creative"],
    examples: [
      { context: "Kids", text: "Coloring time 🖍️" },
      { context: "Art", text: "Drawing with crayons 🖍️" },
      { context: "Fun", text: "Staying in the lines 🖍️" }
    ],
    misunderstandings: ["Clear crayon meaning"],
    relatedEmojis: ["artist-palette", "paintbrush", "pencil"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["crayon", "coloring", "kids", "art", "draw"]
  },
  {
    unicode: "🎭",
    name: "Performing Arts",
    slug: "performing-arts",
    shortMeaning: "Theater masks - drama and performance.",
    detailedMeaning: "The Performing Arts emoji shows comedy and tragedy theater masks, representing drama, theater, and performing arts.\n\nUsed for theater, drama, acting, and expressing the range of emotions.",
    usageContexts: ["Theater", "Drama", "Acting", "Performance", "Arts"],
    examples: [
      { context: "Theater", text: "Opening night 🎭" },
      { context: "Drama", text: "Drama queen 🎭" },
      { context: "Acting", text: "Break a leg 🎭" }
    ],
    misunderstandings: ["Can represent drama in relationships"],
    relatedEmojis: ["clapper-board", "microphone", "ticket"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["theater", "drama", "masks", "performance", "acting"]
  },
  {
    unicode: "🎪",
    name: "Circus Tent",
    slug: "circus-tent",
    shortMeaning: "A colorful circus big top.",
    detailedMeaning: "The Circus Tent emoji shows a striped circus big top, representing circus, carnival, and spectacular entertainment.\n\nUsed for circus themes, carnival events, and describing chaotic situations.",
    usageContexts: ["Circus", "Carnival", "Entertainment", "Chaos", "Fun"],
    examples: [
      { context: "Circus", text: "Going to the circus 🎪" },
      { context: "Chaos", text: "This place is a circus 🎪" },
      { context: "Fun", text: "Carnival time 🎪" }
    ],
    misunderstandings: ["Can mean chaos metaphorically"],
    relatedEmojis: ["clown-face", "ferris-wheel", "balloon"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["circus", "tent", "carnival", "entertainment", "show"]
  },
  {
    unicode: "🎤",
    name: "Microphone",
    slug: "microphone",
    shortMeaning: "A microphone - sing or speak up!",
    detailedMeaning: "The Microphone emoji shows a handheld microphone, representing singing, karaoke, public speaking, and performances.\n\nUsed for singing, karaoke, speeches, podcasts, and expressing voice.",
    usageContexts: ["Singing", "Karaoke", "Speaking", "Performance", "Podcast"],
    examples: [
      { context: "Karaoke", text: "Karaoke night 🎤" },
      { context: "Singing", text: "Drop the mic 🎤" },
      { context: "Speaking", text: "Let me speak 🎤" }
    ],
    misunderstandings: ["Clear microphone meaning"],
    relatedEmojis: ["musical-notes", "headphones", "studio-microphone"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["microphone", "singing", "karaoke", "music", "speak"]
  },
  {
    unicode: "🎧",
    name: "Headphones",
    slug: "headphones",
    shortMeaning: "Headphones for music listening.",
    detailedMeaning: "The Headphones emoji shows a pair of headphones, representing music, audio, and immersive listening.\n\nUsed for listening to music, podcasts, focus time, and audio content.",
    usageContexts: ["Music", "Podcast", "Focus", "Audio", "Listening"],
    examples: [
      { context: "Music", text: "Vibing 🎧" },
      { context: "Focus", text: "Do not disturb 🎧" },
      { context: "Podcast", text: "Podcast time 🎧" }
    ],
    misunderstandings: ["Clear headphones meaning"],
    relatedEmojis: ["microphone", "musical-notes", "speaker-high-volume"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["headphones", "music", "audio", "listen", "podcast"]
  },
  {
    unicode: "🎹",
    name: "Musical Keyboard",
    slug: "musical-keyboard",
    shortMeaning: "A musical keyboard/piano.",
    detailedMeaning: "The Musical Keyboard emoji shows piano keys, representing piano, keyboards, and musical composition.\n\nUsed for piano, music production, and musical content.",
    usageContexts: ["Piano", "Music", "Keyboard", "Composition", "Playing"],
    examples: [
      { context: "Piano", text: "Piano practice 🎹" },
      { context: "Music", text: "Making beats 🎹" },
      { context: "Playing", text: "Tickling the ivories 🎹" }
    ],
    misunderstandings: ["Clear keyboard/piano meaning"],
    relatedEmojis: ["musical-notes", "violin", "saxophone"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["piano", "keyboard", "music", "keys", "instrument"]
  },
  {
    unicode: "🎸",
    name: "Guitar",
    slug: "guitar",
    shortMeaning: "An electric guitar - rock on!",
    detailedMeaning: "The Guitar emoji shows an electric guitar, representing rock music, guitar playing, and musical performance.\n\nUsed for guitar content, rock music, and expressing musical passion.",
    usageContexts: ["Guitar", "Rock", "Music", "Playing", "Performance"],
    examples: [
      { context: "Rock", text: "Rock on 🎸" },
      { context: "Music", text: "Guitar solo 🎸" },
      { context: "Playing", text: "Jam session 🎸" }
    ],
    misunderstandings: ["Clear guitar meaning"],
    relatedEmojis: ["musical-keyboard", "musical-notes", "microphone"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["guitar", "rock", "music", "instrument", "play"]
  },
  {
    unicode: "🎷",
    name: "Saxophone",
    slug: "saxophone",
    shortMeaning: "A saxophone - jazz it up!",
    detailedMeaning: "The Saxophone emoji shows a saxophone, representing jazz music, smooth sounds, and musical sophistication.\n\nUsed for jazz, music appreciation, and smooth vibes.",
    usageContexts: ["Jazz", "Music", "Saxophone", "Smooth", "Performance"],
    examples: [
      { context: "Jazz", text: "Jazz night 🎷" },
      { context: "Smooth", text: "Smooth vibes 🎷" },
      { context: "Music", text: "Sax solo 🎷" }
    ],
    misunderstandings: ["Clear saxophone meaning"],
    relatedEmojis: ["trumpet", "musical-notes", "guitar"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["saxophone", "jazz", "music", "instrument", "smooth"]
  },
  {
    unicode: "🎺",
    name: "Trumpet",
    slug: "trumpet",
    shortMeaning: "A trumpet - make some noise!",
    detailedMeaning: "The Trumpet emoji shows a brass trumpet, representing brass music, fanfare, and bold announcements.\n\nUsed for music, celebrations, and making bold statements.",
    usageContexts: ["Music", "Fanfare", "Announcement", "Brass", "Celebration"],
    examples: [
      { context: "Announcement", text: "Breaking news 🎺" },
      { context: "Music", text: "Trumpet solo 🎺" },
      { context: "Fanfare", text: "Ta-da 🎺" }
    ],
    misunderstandings: ["Clear trumpet meaning"],
    relatedEmojis: ["saxophone", "musical-notes", "megaphone"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["trumpet", "music", "brass", "fanfare", "instrument"]
  },
  {
    unicode: "🎻",
    name: "Violin",
    slug: "violin",
    shortMeaning: "A violin - classical elegance.",
    detailedMeaning: "The Violin emoji shows a violin with bow, representing classical music, elegance, and the 'world's smallest violin' meme.\n\nUsed for classical music, sarcasm (smallest violin), and musical elegance.",
    usageContexts: ["Classical", "Music", "Sarcasm", "Elegance", "Violin"],
    examples: [
      { context: "Sarcasm", text: "Playing the world's smallest violin 🎻" },
      { context: "Classical", text: "Classical concert 🎻" },
      { context: "Music", text: "Violin solo 🎻" }
    ],
    misunderstandings: ["Often used sarcastically"],
    relatedEmojis: ["musical-keyboard", "saxophone", "musical-notes"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["violin", "classical", "music", "instrument", "sarcasm"]
  },
  {
    unicode: "🥁",
    name: "Drum",
    slug: "drum",
    shortMeaning: "A drum - beat it!",
    detailedMeaning: "The Drum emoji shows a snare drum with drumsticks, representing drumming, rhythm, and musical beats.\n\nUsed for drums, music, building suspense (drum roll), and rhythm.",
    usageContexts: ["Drums", "Music", "Rhythm", "Drum Roll", "Beat"],
    examples: [
      { context: "Suspense", text: "Drum roll please 🥁" },
      { context: "Music", text: "Beat drop 🥁" },
      { context: "Drums", text: "Drum solo 🥁" }
    ],
    misunderstandings: ["Clear drum meaning"],
    relatedEmojis: ["guitar", "musical-notes", "microphone"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["drum", "beat", "music", "rhythm", "instrument"]
  },
  {
    unicode: "🎲",
    name: "Game Die",
    slug: "game-die",
    shortMeaning: "A dice - roll the dice!",
    detailedMeaning: "The Game Die emoji shows a six-sided die, representing gambling, board games, and taking chances.\n\nUsed for games, luck, gambling, and taking risks or chances.",
    usageContexts: ["Games", "Gambling", "Luck", "Chance", "Risk"],
    examples: [
      { context: "Luck", text: "Roll the dice 🎲" },
      { context: "Games", text: "Game night 🎲" },
      { context: "Chance", text: "Taking a chance 🎲" }
    ],
    misunderstandings: ["Clear dice/game meaning"],
    relatedEmojis: ["slot-machine", "playing-cards", "video-game"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["dice", "game", "gambling", "luck", "chance"]
  },
  {
    unicode: "🎯",
    name: "Bullseye",
    slug: "bullseye",
    shortMeaning: "A dart hitting the bullseye - on target!",
    detailedMeaning: "The Bullseye emoji shows a dart in the center of a target, representing accuracy, goals, and hitting the mark.\n\nUsed for achieving goals, accuracy, darts, and being on point.",
    usageContexts: ["Goals", "Accuracy", "Darts", "On Point", "Target"],
    examples: [
      { context: "Goals", text: "Hit my target 🎯" },
      { context: "Accuracy", text: "Nailed it 🎯" },
      { context: "Darts", text: "Darts night 🎯" }
    ],
    misunderstandings: ["Clear target/goal meaning"],
    relatedEmojis: ["trophy", "check-mark", "star"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["bullseye", "target", "dart", "goal", "accuracy"]
  },
  {
    unicode: "🧩",
    name: "Puzzle Piece",
    slug: "puzzle-piece",
    shortMeaning: "A puzzle piece - fitting together.",
    detailedMeaning: "The Puzzle Piece emoji shows a single puzzle piece, representing puzzles, fitting in, and the autism awareness symbol.\n\nUsed for puzzles, problem solving, fitting in, and autism awareness.",
    usageContexts: ["Puzzles", "Problem Solving", "Fitting In", "Autism", "Games"],
    examples: [
      { context: "Puzzle", text: "Puzzle time 🧩" },
      { context: "Solution", text: "Found the missing piece 🧩" },
      { context: "Fit", text: "It all fits together 🧩" }
    ],
    misunderstandings: ["Associated with autism awareness"],
    relatedEmojis: ["game-die", "brain", "thinking-face"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["puzzle", "piece", "game", "autism", "problem"]
  },
  {
    unicode: "🃏",
    name: "Joker Card",
    slug: "joker-card",
    shortMeaning: "The joker playing card.",
    detailedMeaning: "The Joker Card emoji shows a joker from a deck of cards, representing wild cards, tricksters, and unpredictability.\n\nUsed for card games, joking around, and wild card situations.",
    usageContexts: ["Cards", "Joker", "Wild Card", "Trickster", "Games"],
    examples: [
      { context: "Joking", text: "Just joking 🃏" },
      { context: "Wild", text: "Wild card 🃏" },
      { context: "Cards", text: "Card shark 🃏" }
    ],
    misunderstandings: ["Can reference the Batman villain"],
    relatedEmojis: ["game-die", "spades", "hearts"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["joker", "card", "wild", "trickster", "game"]
  },
  {
    unicode: "♠️",
    name: "Spade Suit",
    slug: "spade-suit",
    shortMeaning: "The spade card suit.",
    detailedMeaning: "The Spade Suit emoji shows the black spade from playing cards, representing card games and the spade suit.\n\nUsed for card games, poker, and gambling themes.",
    usageContexts: ["Cards", "Poker", "Gambling", "Games", "Suit"],
    examples: [
      { context: "Poker", text: "Ace of spades ♠️" },
      { context: "Cards", text: "Poker night ♠️" },
      { context: "Games", text: "All in ♠️" }
    ],
    misunderstandings: ["Clear card suit meaning"],
    relatedEmojis: ["heart-suit", "diamond-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["spade", "cards", "poker", "suit", "game"]
  },
  {
    unicode: "♥️",
    name: "Heart Suit",
    slug: "heart-suit",
    shortMeaning: "The heart card suit.",
    detailedMeaning: "The Heart Suit emoji shows the red heart from playing cards, representing card games and the heart suit.\n\nUsed for card games and can also represent love (different from emoji hearts).",
    usageContexts: ["Cards", "Poker", "Love", "Games", "Suit"],
    examples: [
      { context: "Cards", text: "Queen of hearts ♥️" },
      { context: "Poker", text: "Card night ♥️" },
      { context: "Games", text: "Full house ♥️" }
    ],
    misunderstandings: ["Different from love heart emojis"],
    relatedEmojis: ["spade-suit", "diamond-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["heart", "cards", "poker", "suit", "game"]
  },
  {
    unicode: "♦️",
    name: "Diamond Suit",
    slug: "diamond-suit",
    shortMeaning: "The diamond card suit.",
    detailedMeaning: "The Diamond Suit emoji shows the red diamond from playing cards, representing card games and the diamond suit.\n\nUsed for card games, poker, and gambling themes.",
    usageContexts: ["Cards", "Poker", "Gambling", "Games", "Suit"],
    examples: [
      { context: "Cards", text: "King of diamonds ♦️" },
      { context: "Poker", text: "Poker face ♦️" },
      { context: "Games", text: "High stakes ♦️" }
    ],
    misunderstandings: ["Different from gem stone diamond"],
    relatedEmojis: ["spade-suit", "heart-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["diamond", "cards", "poker", "suit", "game"]
  },
  {
    unicode: "♣️",
    name: "Club Suit",
    slug: "club-suit",
    shortMeaning: "The club card suit.",
    detailedMeaning: "The Club Suit emoji shows the black club from playing cards, representing card games and the club suit.\n\nUsed for card games, poker, and gambling themes.",
    usageContexts: ["Cards", "Poker", "Gambling", "Games", "Suit"],
    examples: [
      { context: "Cards", text: "Jack of clubs ♣️" },
      { context: "Poker", text: "Texas hold'em ♣️" },
      { context: "Games", text: "Dealer's choice ♣️" }
    ],
    misunderstandings: ["Clear card suit meaning"],
    relatedEmojis: ["spade-suit", "heart-suit", "diamond-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["club", "cards", "poker", "suit", "game"]
  },
  {
    unicode: "🎳",
    name: "Bowling",
    slug: "bowling",
    shortMeaning: "A bowling ball and pin.",
    detailedMeaning: "The Bowling emoji shows a bowling ball and pin, representing bowling, strikes, and social outings.\n\nUsed for bowling, game nights, and social activities.",
    usageContexts: ["Bowling", "Games", "Social", "Strike", "Fun"],
    examples: [
      { context: "Bowling", text: "Bowling night 🎳" },
      { context: "Strike", text: "Strike 🎳" },
      { context: "Fun", text: "Let's bowl 🎳" }
    ],
    misunderstandings: ["Clear bowling meaning"],
    relatedEmojis: ["pool-8-ball", "video-game", "trophy"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["bowling", "ball", "pin", "strike", "game"]
  },
  {
    unicode: "🪁",
    name: "Kite",
    slug: "kite",
    shortMeaning: "A colorful flying kite.",
    detailedMeaning: "The Kite emoji shows a diamond-shaped kite, representing kite flying, outdoor fun, and childhood activities.\n\nUsed for outdoor activities, spring, and carefree moments.",
    usageContexts: ["Outdoor", "Spring", "Fun", "Wind", "Childhood"],
    examples: [
      { context: "Outdoor", text: "Perfect kite weather 🪁" },
      { context: "Spring", text: "Spring day 🪁" },
      { context: "Fun", text: "Flying high 🪁" }
    ],
    misunderstandings: ["Clear kite meaning"],
    relatedEmojis: ["wind-face", "sun", "park"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["kite", "flying", "outdoor", "wind", "fun"]
  },
  {
    unicode: "🧵",
    name: "Thread",
    slug: "thread",
    shortMeaning: "A spool of thread.",
    detailedMeaning: "The Thread emoji shows a spool of thread, representing sewing, crafting, and online discussion threads.\n\nUsed for sewing, crafts, and the social media term 'thread.'",
    usageContexts: ["Sewing", "Crafts", "Thread", "Social Media", "DIY"],
    examples: [
      { context: "Craft", text: "Sewing project 🧵" },
      { context: "Social", text: "Thread incoming 🧵" },
      { context: "DIY", text: "Needle and thread 🧵" }
    ],
    misunderstandings: ["Can mean social media thread"],
    relatedEmojis: ["yarn", "scissors", "needle"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["thread", "sewing", "craft", "spool", "Twitter"]
  },
  {
    unicode: "🧶",
    name: "Yarn",
    slug: "yarn",
    shortMeaning: "A ball of yarn.",
    detailedMeaning: "The Yarn emoji shows a ball of yarn, representing knitting, crocheting, and cozy crafts.\n\nUsed for knitting, crafting, and cozy winter activities.",
    usageContexts: ["Knitting", "Crochet", "Crafts", "Cozy", "DIY"],
    examples: [
      { context: "Knitting", text: "Knitting time 🧶" },
      { context: "Craft", text: "New project 🧶" },
      { context: "Cozy", text: "Cozy crafts 🧶" }
    ],
    misunderstandings: ["Clear yarn meaning"],
    relatedEmojis: ["thread", "scarf", "needle"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["yarn", "knitting", "crochet", "craft", "cozy"]
  },
  // OBJECTS
  {
    unicode: "💡",
    name: "Light Bulb",
    slug: "light-bulb",
    shortMeaning: "A light bulb - ideas, innovation, and bright moments!",
    detailedMeaning: "The Light Bulb emoji represents ideas, innovation, and moments of insight or inspiration. The classic 'light bulb moment' is when you suddenly understand or think of something brilliant.\n\nUsed for sharing ideas, expressing understanding, or indicating innovation and creativity. It's the universal symbol for 'eureka!'",
    usageContexts: ["Ideas", "Innovation", "Understanding", "Creativity", "Insight"],
    examples: [
      { context: "Idea", text: "I've got it 💡" },
      { context: "Insight", text: "Light bulb moment 💡" },
      { context: "Creative", text: "New idea 💡" }
    ],
    misunderstandings: ["Clear meaning - universal symbol"],
    relatedEmojis: ["brain", "thinking-face", "sparkles"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["idea", "light", "innovation", "bulb", "bright"]
  },
  {
    unicode: "💻",
    name: "Laptop",
    slug: "laptop",
    shortMeaning: "A laptop computer - work, tech, and digital life.",
    detailedMeaning: "The Laptop emoji shows a laptop computer, representing technology, remote work, digital life, and computing. Laptops are essential tools for modern work and entertainment.\n\nUsed for work-related content, tech discussions, remote work, or anything involving computers and digital activities.",
    usageContexts: ["Work", "Technology", "Remote work", "Computing", "Digital life"],
    examples: [
      { context: "Work", text: "Work mode 💻" },
      { context: "Remote", text: "Working from home 💻" },
      { context: "Tech", text: "New laptop day 💻" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["desktop-computer", "keyboard", "mouse"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["laptop", "computer", "work", "tech", "digital"]
  },
  {
    unicode: "📱",
    name: "Mobile Phone",
    slug: "mobile-phone",
    shortMeaning: "A smartphone - our constant digital companion.",
    detailedMeaning: "The Mobile Phone emoji shows a smartphone, representing mobile technology, communication, and our constant digital connection. Phones have become essential to modern life.\n\nUsed for anything phone-related, asking someone to call or text, or discussing mobile technology and apps.",
    usageContexts: ["Phones", "Communication", "Apps", "Technology", "Contact"],
    examples: [
      { context: "Call", text: "Call me 📱" },
      { context: "Phone", text: "New phone who dis 📱" },
      { context: "Tech", text: "Always on my 📱" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["telephone", "laptop", "calling"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["phone", "mobile", "smartphone", "cell", "call"]
  },
  {
    unicode: "📚",
    name: "Books",
    slug: "books",
    shortMeaning: "A stack of books - reading, learning, and education.",
    detailedMeaning: "The Books emoji shows a stack of colorful books, representing reading, education, learning, and literature. Books symbolize knowledge and intellectual pursuit.\n\nUsed for reading content, study sessions, book recommendations, or expressing love for literature and learning.",
    usageContexts: ["Reading", "Education", "Learning", "Literature", "Study"],
    examples: [
      { context: "Reading", text: "Reading time 📚" },
      { context: "Study", text: "Study session 📚" },
      { context: "Books", text: "Book haul 📚" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["open-book", "bookmark", "pencil"],
    categorySlug: "objects",
    subgroup: "book-paper",
    keywords: ["books", "read", "study", "education", "learn"]
  },
  {
    unicode: "🔑",
    name: "Key",
    slug: "key",
    shortMeaning: "A key - unlocking doors, solutions, or success.",
    detailedMeaning: "The Key emoji shows a classic key, representing keys (literal), solutions, access, and unlocking potential. 'Key' is often used metaphorically for important things.\n\nUsed for discussing keys, unlocking things (literal or metaphorical), expressing something is 'key' to success, or security topics.",
    usageContexts: ["Keys", "Solutions", "Access", "Important", "Unlocking"],
    examples: [
      { context: "Important", text: "This is key 🔑" },
      { context: "Unlock", text: "Key to success 🔑" },
      { context: "Literal", text: "Found my keys 🔑" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["locked", "unlocked", "old-key"],
    categorySlug: "objects",
    subgroup: "lock",
    keywords: ["key", "unlock", "access", "important", "solution"]
  },
  // TECHNOLOGY
  {
    unicode: "🖥️",
    name: "Desktop Computer",
    slug: "desktop-computer",
    shortMeaning: "A desktop computer with monitor.",
    detailedMeaning: "The Desktop Computer emoji shows a desktop PC with monitor, representing office work, gaming setups, and computing.\n\nUsed for work content, gaming, and technology discussions.",
    usageContexts: ["Work", "Gaming", "Technology", "Office", "Computer"],
    examples: [
      { context: "Work", text: "At my desk 🖥️" },
      { context: "Gaming", text: "Gaming setup 🖥️" },
      { context: "Office", text: "Office life 🖥️" }
    ],
    misunderstandings: ["Clear computer meaning"],
    relatedEmojis: ["laptop", "keyboard", "mouse"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["desktop", "computer", "PC", "monitor", "work"]
  },
  {
    unicode: "⌨️",
    name: "Keyboard",
    slug: "keyboard",
    shortMeaning: "A computer keyboard.",
    detailedMeaning: "The Keyboard emoji shows a computer keyboard, representing typing, computing, and work.\n\nUsed for typing content, work discussions, and tech setups.",
    usageContexts: ["Typing", "Work", "Computer", "Tech", "Writing"],
    examples: [
      { context: "Typing", text: "Keyboard warrior ⌨️" },
      { context: "Work", text: "Typing away ⌨️" },
      { context: "Tech", text: "New keyboard ⌨️" }
    ],
    misunderstandings: ["Clear keyboard meaning"],
    relatedEmojis: ["laptop", "desktop-computer", "mouse"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["keyboard", "typing", "computer", "keys", "tech"]
  },
  {
    unicode: "🖱️",
    name: "Computer Mouse",
    slug: "computer-mouse",
    shortMeaning: "A computer mouse.",
    detailedMeaning: "The Computer Mouse emoji shows a computer mouse, representing computing and navigation.\n\nUsed for computer content and tech discussions.",
    usageContexts: ["Computer", "Tech", "Click", "Navigate", "Work"],
    examples: [
      { context: "Tech", text: "New mouse 🖱️" },
      { context: "Work", text: "Click click 🖱️" },
      { context: "Gaming", text: "Gaming mouse 🖱️" }
    ],
    misunderstandings: ["Clear computer mouse meaning"],
    relatedEmojis: ["keyboard", "laptop", "desktop-computer"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["mouse", "computer", "click", "tech", "cursor"]
  },
  {
    unicode: "🖨️",
    name: "Printer",
    slug: "printer",
    shortMeaning: "A computer printer.",
    detailedMeaning: "The Printer emoji shows an office printer, representing printing, documents, and office work.\n\nUsed for printing content, office work, and document discussions.",
    usageContexts: ["Printing", "Office", "Documents", "Work", "Paper"],
    examples: [
      { context: "Print", text: "Printing now 🖨️" },
      { context: "Office", text: "Printer jam again 🖨️" },
      { context: "Work", text: "Print this out 🖨️" }
    ],
    misunderstandings: ["Clear printer meaning"],
    relatedEmojis: ["page", "desktop-computer", "fax"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["printer", "print", "office", "paper", "document"]
  },
  {
    unicode: "💾",
    name: "Floppy Disk",
    slug: "floppy-disk",
    shortMeaning: "A retro floppy disk - save icon!",
    detailedMeaning: "The Floppy Disk emoji shows a classic floppy disk, representing saving files, retro tech, and nostalgia. Still used as the 'save' icon in software.\n\nUsed for save references, retro tech content, and nostalgic computing.",
    usageContexts: ["Save", "Retro", "Nostalgia", "Tech", "Storage"],
    examples: [
      { context: "Save", text: "Don't forget to save 💾" },
      { context: "Retro", text: "Old school 💾" },
      { context: "Nostalgia", text: "90s vibes 💾" }
    ],
    misunderstandings: ["Younger people may not recognize it"],
    relatedEmojis: ["cd", "dvd", "computer"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["floppy", "save", "disk", "retro", "storage"]
  },
  {
    unicode: "💿",
    name: "Optical Disk",
    slug: "optical-disk",
    shortMeaning: "A CD or DVD disc.",
    detailedMeaning: "The Optical Disk emoji shows a CD/DVD, representing music, data storage, and 90s/2000s nostalgia.\n\nUsed for music content, burning CDs, and retro references.",
    usageContexts: ["Music", "CD", "DVD", "Retro", "Storage"],
    examples: [
      { context: "Music", text: "Burn a CD 💿" },
      { context: "Nostalgia", text: "CD collection 💿" },
      { context: "Data", text: "Backup disc 💿" }
    ],
    misunderstandings: ["Less common with streaming"],
    relatedEmojis: ["floppy-disk", "dvd", "music"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["CD", "DVD", "disc", "music", "storage"]
  },
  {
    unicode: "📷",
    name: "Camera",
    slug: "camera",
    shortMeaning: "A camera for taking photos.",
    detailedMeaning: "The Camera emoji shows a digital camera, representing photography, taking pictures, and capturing moments.\n\nUsed for photography content, photo requests, and camera discussions.",
    usageContexts: ["Photography", "Photos", "Camera", "Capture", "Picture"],
    examples: [
      { context: "Photo", text: "Photo time 📷" },
      { context: "Request", text: "Send pics 📷" },
      { context: "Hobby", text: "Photography lover 📷" }
    ],
    misunderstandings: ["Clear camera meaning"],
    relatedEmojis: ["camera-with-flash", "video-camera", "selfie"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["camera", "photo", "picture", "photography", "capture"]
  },
  {
    unicode: "📹",
    name: "Video Camera",
    slug: "video-camera",
    shortMeaning: "A video camera for recording.",
    detailedMeaning: "The Video Camera emoji shows a camcorder, representing video recording, filming, and content creation.\n\nUsed for video content, filming, and recording discussions.",
    usageContexts: ["Video", "Recording", "Filming", "Content", "Camera"],
    examples: [
      { context: "Record", text: "Recording now 📹" },
      { context: "Film", text: "Behind the scenes 📹" },
      { context: "Content", text: "Vlog time 📹" }
    ],
    misunderstandings: ["Clear video camera meaning"],
    relatedEmojis: ["camera", "movie-camera", "clapper-board"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["video", "camera", "record", "film", "camcorder"]
  },
  {
    unicode: "🎥",
    name: "Movie Camera",
    slug: "movie-camera",
    shortMeaning: "A classic movie camera.",
    detailedMeaning: "The Movie Camera emoji shows a professional film camera, representing movies, cinema, and filmmaking.\n\nUsed for movie content, film industry, and cinema discussions.",
    usageContexts: ["Movies", "Film", "Cinema", "Hollywood", "Recording"],
    examples: [
      { context: "Movie", text: "Movie night 🎥" },
      { context: "Film", text: "Action! 🎥" },
      { context: "Cinema", text: "Film buff 🎥" }
    ],
    misunderstandings: ["Professional film context"],
    relatedEmojis: ["clapper-board", "projector", "film-frames"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["movie", "camera", "film", "cinema", "Hollywood"]
  },
  {
    unicode: "📺",
    name: "Television",
    slug: "television",
    shortMeaning: "A TV set.",
    detailedMeaning: "The Television emoji shows a TV, representing watching TV, streaming, and entertainment.\n\nUsed for TV content, shows, and streaming discussions.",
    usageContexts: ["TV", "Shows", "Streaming", "Entertainment", "Watch"],
    examples: [
      { context: "Watch", text: "Binge watching 📺" },
      { context: "Show", text: "New series 📺" },
      { context: "Chill", text: "Netflix and chill 📺" }
    ],
    misunderstandings: ["Clear TV meaning"],
    relatedEmojis: ["movie-camera", "popcorn", "couch"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["TV", "television", "watch", "show", "streaming"]
  },
  {
    unicode: "📻",
    name: "Radio",
    slug: "radio",
    shortMeaning: "A radio receiver.",
    detailedMeaning: "The Radio emoji shows a portable radio, representing radio broadcasting, music, and retro technology.\n\nUsed for radio content, music, and retro references.",
    usageContexts: ["Radio", "Music", "Broadcast", "Retro", "Audio"],
    examples: [
      { context: "Music", text: "Radio vibes 📻" },
      { context: "Retro", text: "Old school 📻" },
      { context: "Listen", text: "Tuning in 📻" }
    ],
    misunderstandings: ["Retro device"],
    relatedEmojis: ["speaker", "microphone", "headphones"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["radio", "music", "broadcast", "audio", "retro"]
  },
  {
    unicode: "🎧",
    name: "Headphones",
    slug: "headphones",
    shortMeaning: "Headphones for listening.",
    detailedMeaning: "The Headphones emoji shows over-ear headphones, representing music listening, podcasts, and audio entertainment.\n\nUsed for music content, podcast listening, and audio discussions.",
    usageContexts: ["Music", "Podcasts", "Audio", "Listen", "Focus"],
    examples: [
      { context: "Music", text: "In my zone 🎧" },
      { context: "Podcast", text: "Podcast time 🎧" },
      { context: "Focus", text: "Headphones on 🎧" }
    ],
    misunderstandings: ["Clear headphones meaning"],
    relatedEmojis: ["musical-note", "microphone", "speaker"],
    categorySlug: "objects",
    subgroup: "music",
    keywords: ["headphones", "music", "listen", "audio", "podcast"]
  },
  {
    unicode: "🎤",
    name: "Microphone",
    slug: "microphone",
    shortMeaning: "A microphone for singing or speaking.",
    detailedMeaning: "The Microphone emoji shows a handheld mic, representing singing, karaoke, public speaking, and performances.\n\nUsed for singing content, karaoke, podcasts, and speaking events.",
    usageContexts: ["Singing", "Karaoke", "Speaking", "Podcast", "Performance"],
    examples: [
      { context: "Sing", text: "Karaoke night 🎤" },
      { context: "Podcast", text: "New episode 🎤" },
      { context: "Perform", text: "Mic drop 🎤" }
    ],
    misunderstandings: ["Clear microphone meaning"],
    relatedEmojis: ["musical-notes", "speaker", "headphones"],
    categorySlug: "objects",
    subgroup: "music",
    keywords: ["microphone", "mic", "sing", "karaoke", "speak"]
  },
  {
    unicode: "🔊",
    name: "Speaker High Volume",
    slug: "speaker-high-volume",
    shortMeaning: "A speaker at high volume.",
    detailedMeaning: "The Speaker High Volume emoji shows a speaker with sound waves, representing loud audio, announcements, and volume.\n\nUsed for music, announcements, and loud sounds.",
    usageContexts: ["Loud", "Music", "Announcement", "Volume", "Sound"],
    examples: [
      { context: "Loud", text: "Turn it up 🔊" },
      { context: "Music", text: "Blasting music 🔊" },
      { context: "Announce", text: "Announcement 🔊" }
    ],
    misunderstandings: ["Clear volume meaning"],
    relatedEmojis: ["speaker-muted", "headphones", "musical-note"],
    categorySlug: "objects",
    subgroup: "sound",
    keywords: ["speaker", "loud", "volume", "sound", "audio"]
  },
  {
    unicode: "🔔",
    name: "Bell",
    slug: "bell",
    shortMeaning: "A ringing bell.",
    detailedMeaning: "The Bell emoji shows a golden bell, representing notifications, alerts, and ringing for attention.\n\nUsed for notification references, alerts, and attention-getting.",
    usageContexts: ["Notification", "Alert", "Ring", "Attention", "Reminder"],
    examples: [
      { context: "Notify", text: "Ring the bell 🔔" },
      { context: "YouTube", text: "Hit the bell 🔔" },
      { context: "Alert", text: "Alert 🔔" }
    ],
    misunderstandings: ["YouTube notification association"],
    relatedEmojis: ["bell-with-slash", "megaphone", "notification"],
    categorySlug: "objects",
    subgroup: "sound",
    keywords: ["bell", "notification", "ring", "alert", "reminder"]
  },
  // TOOLS
  {
    unicode: "🔧",
    name: "Wrench",
    slug: "wrench",
    shortMeaning: "A wrench tool.",
    detailedMeaning: "The Wrench emoji shows a wrench/spanner, representing fixing, repairs, and mechanical work.\n\nUsed for repair content, settings, and fixing discussions.",
    usageContexts: ["Repair", "Fix", "Settings", "Tools", "Mechanical"],
    examples: [
      { context: "Fix", text: "Fixing things 🔧" },
      { context: "Settings", text: "Tweaking settings 🔧" },
      { context: "Repair", text: "Repair time 🔧" }
    ],
    misunderstandings: ["Clear tool meaning"],
    relatedEmojis: ["hammer", "screwdriver", "gear"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["wrench", "fix", "repair", "tool", "settings"]
  },
  {
    unicode: "🔨",
    name: "Hammer",
    slug: "hammer",
    shortMeaning: "A hammer tool.",
    detailedMeaning: "The Hammer emoji shows a hammer, representing building, construction, and hitting things.\n\nUsed for construction, building, and work discussions.",
    usageContexts: ["Build", "Construction", "Work", "Tools", "Hit"],
    examples: [
      { context: "Build", text: "Building something 🔨" },
      { context: "Work", text: "Hard at work 🔨" },
      { context: "DIY", text: "DIY project 🔨" }
    ],
    misunderstandings: ["Clear hammer meaning"],
    relatedEmojis: ["wrench", "saw", "construction"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["hammer", "build", "construction", "tool", "hit"]
  },
  {
    unicode: "🪛",
    name: "Screwdriver",
    slug: "screwdriver",
    shortMeaning: "A screwdriver tool.",
    detailedMeaning: "The Screwdriver emoji shows a screwdriver, representing repairs, assembly, and fixing things.\n\nUsed for repair content, assembly, and tool discussions.",
    usageContexts: ["Repair", "Assembly", "Fix", "Tools", "DIY"],
    examples: [
      { context: "Fix", text: "Fixing it 🪛" },
      { context: "Assembly", text: "Building furniture 🪛" },
      { context: "DIY", text: "DIY mode 🪛" }
    ],
    misunderstandings: ["Clear tool meaning"],
    relatedEmojis: ["wrench", "hammer", "gear"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["screwdriver", "fix", "repair", "tool", "assembly"]
  },
  {
    unicode: "🪚",
    name: "Carpentry Saw",
    slug: "carpentry-saw",
    shortMeaning: "A hand saw for cutting wood.",
    detailedMeaning: "The Carpentry Saw emoji shows a hand saw, representing woodworking, carpentry, and cutting.\n\nUsed for woodworking, construction, and DIY projects.",
    usageContexts: ["Woodworking", "Carpentry", "Cutting", "DIY", "Building"],
    examples: [
      { context: "Wood", text: "Woodworking day 🪚" },
      { context: "DIY", text: "Building shelves 🪚" },
      { context: "Cut", text: "Cutting wood 🪚" }
    ],
    misunderstandings: ["Clear saw meaning"],
    relatedEmojis: ["hammer", "wood", "carpenter"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["saw", "carpentry", "wood", "cut", "build"]
  },
  {
    unicode: "🔩",
    name: "Nut and Bolt",
    slug: "nut-and-bolt",
    shortMeaning: "A nut and bolt fastener.",
    detailedMeaning: "The Nut and Bolt emoji shows hardware fasteners, representing assembly, mechanics, and construction.\n\nUsed for mechanical work, assembly, and 'nuts and bolts' discussions.",
    usageContexts: ["Assembly", "Mechanical", "Hardware", "Construction", "Details"],
    examples: [
      { context: "Assembly", text: "Putting it together 🔩" },
      { context: "Details", text: "The nuts and bolts 🔩" },
      { context: "Hardware", text: "Hardware store run 🔩" }
    ],
    misunderstandings: ["Clear hardware meaning"],
    relatedEmojis: ["wrench", "gear", "screwdriver"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["nut", "bolt", "hardware", "assembly", "mechanical"]
  },
  {
    unicode: "⚙️",
    name: "Gear",
    slug: "gear",
    shortMeaning: "A mechanical gear.",
    detailedMeaning: "The Gear emoji shows a cogwheel, representing settings, mechanics, and how things work.\n\nUsed for settings, mechanics, and system discussions.",
    usageContexts: ["Settings", "Mechanics", "System", "Work", "Technical"],
    examples: [
      { context: "Settings", text: "Adjusting settings ⚙️" },
      { context: "Work", text: "Gears turning ⚙️" },
      { context: "Technical", text: "Behind the scenes ⚙️" }
    ],
    misunderstandings: ["Often means settings"],
    relatedEmojis: ["wrench", "hammer-and-wrench", "nut-and-bolt"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["gear", "settings", "cog", "mechanical", "system"]
  },
  {
    unicode: "🔗",
    name: "Link",
    slug: "link",
    shortMeaning: "Chain links - connection or URL.",
    detailedMeaning: "The Link emoji shows chain links, representing connections, URLs, and linking things together.\n\nUsed for sharing links, connections, and relationships.",
    usageContexts: ["URL", "Connection", "Link", "Chain", "Share"],
    examples: [
      { context: "URL", text: "Link in bio 🔗" },
      { context: "Share", text: "Check this link 🔗" },
      { context: "Connect", text: "Linked up 🔗" }
    ],
    misunderstandings: ["Clear link meaning"],
    relatedEmojis: ["chain", "link-symbol", "paperclip"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["link", "chain", "URL", "connection", "share"]
  },
  // CLOTHING
  {
    unicode: "👓",
    name: "Glasses",
    slug: "glasses",
    shortMeaning: "Eyeglasses for vision.",
    detailedMeaning: "The Glasses emoji shows eyeglasses, representing vision correction, intelligence, and a studious look.\n\nUsed for glasses content, reading, and intellectual themes.",
    usageContexts: ["Vision", "Reading", "Glasses", "Smart", "Style"],
    examples: [
      { context: "Read", text: "Reading mode 👓" },
      { context: "Smart", text: "Nerd alert 👓" },
      { context: "Style", text: "New glasses 👓" }
    ],
    misunderstandings: ["Can imply intelligence"],
    relatedEmojis: ["sunglasses", "monocle", "nerd-face"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["glasses", "eyeglasses", "vision", "read", "smart"]
  },
  {
    unicode: "🕶️",
    name: "Sunglasses",
    slug: "sunglasses",
    shortMeaning: "Cool sunglasses.",
    detailedMeaning: "The Sunglasses emoji shows dark sunglasses, representing coolness, summer, and looking stylish.\n\nUsed for cool vibes, summer content, and stylish looks.",
    usageContexts: ["Cool", "Summer", "Style", "Sun", "Fashion"],
    examples: [
      { context: "Cool", text: "Cool vibes 🕶️" },
      { context: "Summer", text: "Summer ready 🕶️" },
      { context: "Style", text: "Looking fly 🕶️" }
    ],
    misunderstandings: ["Clear cool meaning"],
    relatedEmojis: ["smiling-face-with-sunglasses", "sun", "beach"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["sunglasses", "cool", "summer", "shades", "style"]
  },
  {
    unicode: "👔",
    name: "Necktie",
    slug: "necktie",
    shortMeaning: "A formal necktie.",
    detailedMeaning: "The Necktie emoji shows a business tie, representing formal wear, professionalism, and business settings.\n\nUsed for work content, formal events, and professional discussions.",
    usageContexts: ["Business", "Formal", "Work", "Professional", "Office"],
    examples: [
      { context: "Work", text: "Business mode 👔" },
      { context: "Formal", text: "Dressed up 👔" },
      { context: "Interview", text: "Job interview 👔" }
    ],
    misunderstandings: ["Clear formal/business meaning"],
    relatedEmojis: ["suit", "briefcase", "office-building"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["tie", "necktie", "business", "formal", "professional"]
  },
  {
    unicode: "👗",
    name: "Dress",
    slug: "dress",
    shortMeaning: "A woman's dress.",
    detailedMeaning: "The Dress emoji shows a dress, representing fashion, femininity, and dressing up.\n\nUsed for fashion content, events, and outfit discussions.",
    usageContexts: ["Fashion", "Dress", "Outfit", "Event", "Style"],
    examples: [
      { context: "Event", text: "New dress for the party 👗" },
      { context: "Fashion", text: "Dress shopping 👗" },
      { context: "Style", text: "Feeling cute 👗" }
    ],
    misunderstandings: ["Clear fashion meaning"],
    relatedEmojis: ["high-heel", "handbag", "lipstick"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["dress", "fashion", "outfit", "feminine", "style"]
  },
  {
    unicode: "👕",
    name: "T-Shirt",
    slug: "t-shirt",
    shortMeaning: "A casual t-shirt.",
    detailedMeaning: "The T-Shirt emoji shows a basic tee, representing casual wear, comfort, and everyday clothing.\n\nUsed for casual fashion, comfort, and clothing discussions.",
    usageContexts: ["Casual", "Fashion", "Comfort", "Clothing", "Everyday"],
    examples: [
      { context: "Casual", text: "T-shirt weather 👕" },
      { context: "Comfort", text: "Comfy fit 👕" },
      { context: "Merch", text: "New merch 👕" }
    ],
    misunderstandings: ["Clear casual clothing meaning"],
    relatedEmojis: ["jeans", "shorts", "running-shirt"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["t-shirt", "tee", "casual", "clothing", "shirt"]
  },
  {
    unicode: "👖",
    name: "Jeans",
    slug: "jeans",
    shortMeaning: "Blue jeans pants.",
    detailedMeaning: "The Jeans emoji shows blue denim jeans, representing casual wear and classic fashion.\n\nUsed for fashion content, casual outfits, and clothing discussions.",
    usageContexts: ["Casual", "Fashion", "Jeans", "Denim", "Outfit"],
    examples: [
      { context: "Outfit", text: "Jeans and a tee 👖" },
      { context: "Fashion", text: "New jeans 👖" },
      { context: "Casual", text: "Casual Friday 👖" }
    ],
    misunderstandings: ["Clear jeans meaning"],
    relatedEmojis: ["t-shirt", "shorts", "running-shirt"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["jeans", "pants", "denim", "casual", "fashion"]
  },
  {
    unicode: "👟",
    name: "Running Shoe",
    slug: "running-shoe",
    shortMeaning: "A sneaker or athletic shoe.",
    detailedMeaning: "The Running Shoe emoji shows a sneaker, representing athletics, running, and casual footwear.\n\nUsed for fitness content, sneaker culture, and sports.",
    usageContexts: ["Running", "Fitness", "Sneakers", "Sports", "Fashion"],
    examples: [
      { context: "Run", text: "Morning run 👟" },
      { context: "Sneakers", text: "New kicks 👟" },
      { context: "Fitness", text: "Workout time 👟" }
    ],
    misunderstandings: ["Clear sneaker meaning"],
    relatedEmojis: ["person-running", "athletic-shoe", "footprints"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["sneaker", "running", "shoe", "athletic", "kicks"]
  },
  {
    unicode: "👠",
    name: "High-Heeled Shoe",
    slug: "high-heeled-shoe",
    shortMeaning: "A red high heel shoe.",
    detailedMeaning: "The High-Heeled Shoe emoji shows a red stiletto heel, representing fashion, femininity, and dressing up.\n\nUsed for fashion content, nights out, and glamorous occasions.",
    usageContexts: ["Fashion", "Glamour", "Night out", "Feminine", "Style"],
    examples: [
      { context: "Night out", text: "Heels on 👠" },
      { context: "Fashion", text: "Shoe shopping 👠" },
      { context: "Glam", text: "Feeling fancy 👠" }
    ],
    misunderstandings: ["Clear fashion meaning"],
    relatedEmojis: ["dress", "lipstick", "cocktail-glass"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["heels", "high heels", "shoe", "fashion", "glamour"]
  },
  {
    unicode: "🎒",
    name: "Backpack",
    slug: "backpack",
    shortMeaning: "A school or travel backpack.",
    detailedMeaning: "The Backpack emoji shows a backpack, representing school, travel, and carrying essentials.\n\nUsed for school content, travel, and back-to-school themes.",
    usageContexts: ["School", "Travel", "Back-to-school", "Adventure", "Carry"],
    examples: [
      { context: "School", text: "Back to school 🎒" },
      { context: "Travel", text: "Backpacking trip 🎒" },
      { context: "Ready", text: "Packed and ready 🎒" }
    ],
    misunderstandings: ["Clear backpack meaning"],
    relatedEmojis: ["school", "luggage", "books"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["backpack", "school", "bag", "travel", "carry"]
  },
  {
    unicode: "👑",
    name: "Crown",
    slug: "crown",
    shortMeaning: "A royal crown.",
    detailedMeaning: "The Crown emoji shows a golden crown, representing royalty, excellence, and being the best. Often used to hype someone up.\n\nUsed for expressing that someone is royalty/the best, self-confidence, and achievement.",
    usageContexts: ["Royalty", "Best", "Excellence", "King/Queen", "Achievement"],
    examples: [
      { context: "Best", text: "You're the queen 👑" },
      { context: "Excellence", text: "Crown yourself 👑" },
      { context: "Confidence", text: "King energy 👑" }
    ],
    misunderstandings: ["Clear royalty/excellence meaning"],
    relatedEmojis: ["princess", "gem-stone", "trophy"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["crown", "royal", "king", "queen", "best"]
  },
  {
    unicode: "💍",
    name: "Ring",
    slug: "ring",
    shortMeaning: "A diamond ring.",
    detailedMeaning: "The Ring emoji shows a diamond engagement ring, representing engagement, marriage, and commitment.\n\nUsed for engagement announcements, marriage, and romantic commitment.",
    usageContexts: ["Engagement", "Marriage", "Proposal", "Love", "Commitment"],
    examples: [
      { context: "Engaged", text: "She said yes 💍" },
      { context: "Wedding", text: "Wedding bells 💍" },
      { context: "Love", text: "Forever 💍" }
    ],
    misunderstandings: ["Strong marriage/engagement meaning"],
    relatedEmojis: ["wedding", "heart", "bouquet"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["ring", "engagement", "diamond", "wedding", "marriage"]
  },
  {
    unicode: "👜",
    name: "Handbag",
    slug: "handbag",
    shortMeaning: "A fashion handbag.",
    detailedMeaning: "The Handbag emoji shows a stylish purse, representing fashion, shopping, and accessories.\n\nUsed for fashion content, shopping, and accessory discussions.",
    usageContexts: ["Fashion", "Shopping", "Accessories", "Style", "Purse"],
    examples: [
      { context: "Shopping", text: "New bag 👜" },
      { context: "Fashion", text: "Bag of the day 👜" },
      { context: "Style", text: "Accessorized 👜" }
    ],
    misunderstandings: ["Clear fashion meaning"],
    relatedEmojis: ["dress", "high-heeled-shoe", "shopping-bags"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["handbag", "purse", "bag", "fashion", "accessory"]
  },
  {
    unicode: "🧢",
    name: "Billed Cap",
    slug: "billed-cap",
    shortMeaning: "A baseball cap.",
    detailedMeaning: "The Billed Cap emoji shows a baseball cap, representing casual style, sports, and 'cap' slang (meaning lie).\n\nUsed for casual fashion, sports, and the 'cap/no cap' slang.",
    usageContexts: ["Casual", "Sports", "Cap slang", "Style", "Baseball"],
    examples: [
      { context: "Style", text: "Cap on 🧢" },
      { context: "Slang", text: "No cap 🧢" },
      { context: "Sports", text: "Game day 🧢" }
    ],
    misunderstandings: ["'Cap' means lie in slang"],
    relatedEmojis: ["baseball", "top-hat", "sunglasses"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["cap", "hat", "baseball", "casual", "no cap"]
  },
  // EVERYDAY ITEMS
  {
    unicode: "🔒",
    name: "Locked",
    slug: "locked",
    shortMeaning: "A locked padlock.",
    detailedMeaning: "The Locked emoji shows a closed padlock, representing security, privacy, and protection.\n\nUsed for security topics, privacy, and locked/secure status.",
    usageContexts: ["Security", "Privacy", "Locked", "Protection", "Safe"],
    examples: [
      { context: "Security", text: "Secure and locked 🔒" },
      { context: "Private", text: "Private account 🔒" },
      { context: "Safe", text: "Locked in 🔒" }
    ],
    misunderstandings: ["Clear security meaning"],
    relatedEmojis: ["unlocked", "key", "shield"],
    categorySlug: "objects",
    subgroup: "lock",
    keywords: ["lock", "locked", "security", "private", "safe"]
  },
  {
    unicode: "🔓",
    name: "Unlocked",
    slug: "unlocked",
    shortMeaning: "An unlocked padlock.",
    detailedMeaning: "The Unlocked emoji shows an open padlock, representing access, unlocking, and open status.\n\nUsed for access granted, unlocked achievements, and open status.",
    usageContexts: ["Access", "Unlocked", "Open", "Achievement", "Free"],
    examples: [
      { context: "Access", text: "Unlocked 🔓" },
      { context: "Achievement", text: "New level unlocked 🔓" },
      { context: "Open", text: "Open access 🔓" }
    ],
    misunderstandings: ["Clear unlocked meaning"],
    relatedEmojis: ["locked", "key", "open"],
    categorySlug: "objects",
    subgroup: "lock",
    keywords: ["unlock", "open", "access", "unlocked", "free"]
  },
  {
    unicode: "💳",
    name: "Credit Card",
    slug: "credit-card",
    shortMeaning: "A credit or debit card.",
    detailedMeaning: "The Credit Card emoji shows a payment card, representing shopping, payments, and financial transactions.\n\nUsed for shopping, payment discussions, and financial content.",
    usageContexts: ["Shopping", "Payment", "Money", "Financial", "Buy"],
    examples: [
      { context: "Shop", text: "Shopping spree 💳" },
      { context: "Pay", text: "Card ready 💳" },
      { context: "Money", text: "Payday 💳" }
    ],
    misunderstandings: ["Clear payment meaning"],
    relatedEmojis: ["money-bag", "dollar", "shopping-cart"],
    categorySlug: "objects",
    subgroup: "money",
    keywords: ["credit card", "payment", "shopping", "money", "buy"]
  },
  {
    unicode: "💰",
    name: "Money Bag",
    slug: "money-bag",
    shortMeaning: "A bag full of money.",
    detailedMeaning: "The Money Bag emoji shows a bag with a dollar sign, representing wealth, money, and financial success.\n\nUsed for money discussions, wealth, and financial success.",
    usageContexts: ["Money", "Wealth", "Rich", "Success", "Financial"],
    examples: [
      { context: "Money", text: "Getting paid 💰" },
      { context: "Wealth", text: "Money moves 💰" },
      { context: "Success", text: "Bag secured 💰" }
    ],
    misunderstandings: ["Clear money meaning"],
    relatedEmojis: ["dollar", "flying-money", "credit-card"],
    categorySlug: "objects",
    subgroup: "money",
    keywords: ["money", "bag", "wealth", "rich", "cash"]
  },
  {
    unicode: "💎",
    name: "Gem Stone",
    slug: "gem-stone",
    shortMeaning: "A sparkling diamond/gem.",
    detailedMeaning: "The Gem Stone emoji shows a cut diamond, representing luxury, value, and something precious.\n\nUsed for expressing value, luxury, and precious things or people.",
    usageContexts: ["Luxury", "Value", "Precious", "Diamond", "Quality"],
    examples: [
      { context: "Precious", text: "You're a gem 💎" },
      { context: "Luxury", text: "Diamond life 💎" },
      { context: "Value", text: "Quality content 💎" }
    ],
    misunderstandings: ["Clear value/precious meaning"],
    relatedEmojis: ["ring", "crown", "sparkles"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["diamond", "gem", "precious", "luxury", "sparkle"]
  },
  {
    unicode: "🧲",
    name: "Magnet",
    slug: "magnet",
    shortMeaning: "A horseshoe magnet.",
    detailedMeaning: "The Magnet emoji shows a red horseshoe magnet, representing attraction, magnetism, and pulling things together.\n\nUsed for attraction topics, being magnetic/attractive, and science content.",
    usageContexts: ["Attraction", "Magnetic", "Pull", "Science", "Draw"],
    examples: [
      { context: "Attract", text: "Money magnet 🧲" },
      { context: "Pull", text: "Magnetic personality 🧲" },
      { context: "Science", text: "Science experiment 🧲" }
    ],
    misunderstandings: ["Can mean attraction"],
    relatedEmojis: ["sparkles", "attraction", "science"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["magnet", "attract", "pull", "magnetic", "draw"]
  },
  {
    unicode: "🧪",
    name: "Test Tube",
    slug: "test-tube",
    shortMeaning: "A laboratory test tube.",
    detailedMeaning: "The Test Tube emoji shows a test tube with liquid, representing science, experiments, and laboratory work.\n\nUsed for science content, experiments, and chemistry discussions.",
    usageContexts: ["Science", "Experiment", "Lab", "Chemistry", "Test"],
    examples: [
      { context: "Science", text: "Science experiment 🧪" },
      { context: "Lab", text: "Lab results 🧪" },
      { context: "Test", text: "Testing something 🧪" }
    ],
    misunderstandings: ["Clear science meaning"],
    relatedEmojis: ["microscope", "petri-dish", "dna"],
    categorySlug: "objects",
    subgroup: "science",
    keywords: ["test tube", "science", "lab", "chemistry", "experiment"]
  },
  {
    unicode: "🔬",
    name: "Microscope",
    slug: "microscope",
    shortMeaning: "A scientific microscope.",
    detailedMeaning: "The Microscope emoji shows a microscope, representing science, research, and detailed examination.\n\nUsed for science content, research, and looking closely at things.",
    usageContexts: ["Science", "Research", "Examine", "Detail", "Study"],
    examples: [
      { context: "Science", text: "Science class 🔬" },
      { context: "Research", text: "Researching 🔬" },
      { context: "Detail", text: "Looking closely 🔬" }
    ],
    misunderstandings: ["Clear science meaning"],
    relatedEmojis: ["test-tube", "petri-dish", "scientist"],
    categorySlug: "objects",
    subgroup: "science",
    keywords: ["microscope", "science", "research", "examine", "lab"]
  },
  {
    unicode: "🧬",
    name: "DNA",
    slug: "dna",
    shortMeaning: "A DNA double helix.",
    detailedMeaning: "The DNA emoji shows a DNA double helix, representing genetics, biology, and identity.\n\nUsed for science content, genetics, and 'it's in my DNA' expressions.",
    usageContexts: ["Science", "Genetics", "Biology", "Identity", "Nature"],
    examples: [
      { context: "Genetics", text: "It's in my DNA 🧬" },
      { context: "Science", text: "Biology class 🧬" },
      { context: "Identity", text: "Who I am 🧬" }
    ],
    misunderstandings: ["Can mean inherent traits"],
    relatedEmojis: ["microscope", "test-tube", "scientist"],
    categorySlug: "objects",
    subgroup: "science",
    keywords: ["DNA", "genetics", "biology", "science", "helix"]
  },
  {
    unicode: "💊",
    name: "Pill",
    slug: "pill",
    shortMeaning: "A medicine pill/capsule.",
    detailedMeaning: "The Pill emoji shows a medicine capsule, representing medication, health, and sometimes the Matrix red/blue pill reference.\n\nUsed for medicine discussions, health content, and philosophical 'red pill' references.",
    usageContexts: ["Medicine", "Health", "Pills", "Matrix", "Treatment"],
    examples: [
      { context: "Medicine", text: "Time for meds 💊" },
      { context: "Health", text: "Vitamins 💊" },
      { context: "Matrix", text: "Red pill 💊" }
    ],
    misunderstandings: ["Matrix reference common"],
    relatedEmojis: ["syringe", "hospital", "doctor"],
    categorySlug: "objects",
    subgroup: "medical",
    keywords: ["pill", "medicine", "capsule", "health", "medication"]
  },
  {
    unicode: "💉",
    name: "Syringe",
    slug: "syringe",
    shortMeaning: "A medical syringe.",
    detailedMeaning: "The Syringe emoji shows a medical syringe, representing injections, vaccines, and medical procedures.\n\nUsed for vaccine discussions, medical content, and blood donation.",
    usageContexts: ["Medical", "Vaccine", "Injection", "Blood", "Health"],
    examples: [
      { context: "Vaccine", text: "Got vaccinated 💉" },
      { context: "Medical", text: "Doctor visit 💉" },
      { context: "Blood", text: "Blood donation 💉" }
    ],
    misunderstandings: ["Can reference drugs"],
    relatedEmojis: ["pill", "hospital", "drop-of-blood"],
    categorySlug: "objects",
    subgroup: "medical",
    keywords: ["syringe", "vaccine", "injection", "medical", "needle"]
  },
  {
    unicode: "🩺",
    name: "Stethoscope",
    slug: "stethoscope",
    shortMeaning: "A doctor's stethoscope.",
    detailedMeaning: "The Stethoscope emoji shows a medical stethoscope, representing doctors, healthcare, and medical check-ups.\n\nUsed for healthcare content, doctor visits, and medical themes.",
    usageContexts: ["Doctor", "Medical", "Healthcare", "Check-up", "Health"],
    examples: [
      { context: "Doctor", text: "Doctor's appointment 🩺" },
      { context: "Health", text: "Health check 🩺" },
      { context: "Medical", text: "Healthcare heroes 🩺" }
    ],
    misunderstandings: ["Clear medical meaning"],
    relatedEmojis: ["hospital", "pill", "syringe"],
    categorySlug: "objects",
    subgroup: "medical",
    keywords: ["stethoscope", "doctor", "medical", "health", "checkup"]
  },
  {
    unicode: "🪥",
    name: "Toothbrush",
    slug: "toothbrush",
    shortMeaning: "A toothbrush for dental hygiene.",
    detailedMeaning: "The Toothbrush emoji shows a toothbrush, representing dental hygiene, morning/night routines, and self-care.\n\nUsed for hygiene reminders, routines, and dental content.",
    usageContexts: ["Hygiene", "Dental", "Routine", "Morning", "Self-care"],
    examples: [
      { context: "Routine", text: "Bedtime routine 🪥" },
      { context: "Hygiene", text: "Brush your teeth 🪥" },
      { context: "Morning", text: "Morning vibes 🪥" }
    ],
    misunderstandings: ["Clear hygiene meaning"],
    relatedEmojis: ["tooth", "soap", "shower"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["toothbrush", "teeth", "dental", "hygiene", "brush"]
  },
  {
    unicode: "🧼",
    name: "Soap",
    slug: "soap",
    shortMeaning: "A bar of soap.",
    detailedMeaning: "The Soap emoji shows a bar of soap with bubbles, representing cleanliness, hygiene, and washing.\n\nUsed for hygiene content, clean vibes, and handwashing reminders.",
    usageContexts: ["Hygiene", "Clean", "Wash", "Soap", "Self-care"],
    examples: [
      { context: "Clean", text: "Squeaky clean 🧼" },
      { context: "Wash", text: "Wash your hands 🧼" },
      { context: "Hygiene", text: "Stay clean 🧼" }
    ],
    misunderstandings: ["Clear hygiene meaning"],
    relatedEmojis: ["shower", "bathtub", "lotion-bottle"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["soap", "clean", "wash", "hygiene", "bubbles"]
  },
  {
    unicode: "🧴",
    name: "Lotion Bottle",
    slug: "lotion-bottle",
    shortMeaning: "A lotion or skincare bottle.",
    detailedMeaning: "The Lotion Bottle emoji shows a pump bottle, representing skincare, moisturizing, and self-care routines.\n\nUsed for skincare content, beauty routines, and self-care.",
    usageContexts: ["Skincare", "Lotion", "Self-care", "Beauty", "Moisturize"],
    examples: [
      { context: "Skincare", text: "Skincare routine 🧴" },
      { context: "Moisturize", text: "Hydrated skin 🧴" },
      { context: "Self-care", text: "Self-care Sunday 🧴" }
    ],
    misunderstandings: ["Clear skincare meaning"],
    relatedEmojis: ["soap", "lipstick", "nail-polish"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["lotion", "skincare", "moisturizer", "bottle", "beauty"]
  },
  {
    unicode: "🛁",
    name: "Bathtub",
    slug: "bathtub",
    shortMeaning: "A bathtub for relaxation.",
    detailedMeaning: "The Bathtub emoji shows a bathtub, representing relaxation, baths, and self-care time.\n\nUsed for bath time, relaxation, and spa-like experiences.",
    usageContexts: ["Bath", "Relax", "Self-care", "Spa", "Unwind"],
    examples: [
      { context: "Relax", text: "Bubble bath time 🛁" },
      { context: "Self-care", text: "Self-care night 🛁" },
      { context: "Unwind", text: "Time to unwind 🛁" }
    ],
    misunderstandings: ["Clear bath meaning"],
    relatedEmojis: ["soap", "shower", "lotion-bottle"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["bathtub", "bath", "relax", "bubble bath", "spa"]
  },
  {
    unicode: "🧹",
    name: "Broom",
    slug: "broom",
    shortMeaning: "A broom for sweeping.",
    detailedMeaning: "The Broom emoji shows a broom, representing cleaning, sweeping, and household chores. Also associated with witches.\n\nUsed for cleaning content, chores, and Halloween/witch themes.",
    usageContexts: ["Cleaning", "Chores", "Sweep", "Witch", "Halloween"],
    examples: [
      { context: "Clean", text: "Cleaning day 🧹" },
      { context: "Chores", text: "House chores 🧹" },
      { context: "Witch", text: "Witch vibes 🧹" }
    ],
    misunderstandings: ["Can mean witch/Halloween"],
    relatedEmojis: ["mop", "sponge", "witch"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["broom", "sweep", "clean", "chores", "witch"]
  },
  {
    unicode: "🪣",
    name: "Bucket",
    slug: "bucket",
    shortMeaning: "A bucket for carrying.",
    detailedMeaning: "The Bucket emoji shows a bucket, representing cleaning, carrying water, and bucket lists.\n\nUsed for cleaning, beach content, and 'bucket list' expressions.",
    usageContexts: ["Cleaning", "Beach", "Bucket list", "Water", "Carry"],
    examples: [
      { context: "Clean", text: "Mopping time 🪣" },
      { context: "Beach", text: "Beach bucket 🪣" },
      { context: "Goals", text: "Bucket list item 🪣" }
    ],
    misunderstandings: ["Bucket list reference"],
    relatedEmojis: ["mop", "beach", "water"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["bucket", "pail", "water", "clean", "beach"]
  },
  {
    unicode: "🛋️",
    name: "Couch and Lamp",
    slug: "couch-and-lamp",
    shortMeaning: "A cozy couch with lamp.",
    detailedMeaning: "The Couch and Lamp emoji shows living room furniture, representing home comfort, relaxation, and coziness.\n\nUsed for home content, relaxation, and cozy vibes.",
    usageContexts: ["Home", "Cozy", "Relax", "Living room", "Comfort"],
    examples: [
      { context: "Cozy", text: "Cozy night in 🛋️" },
      { context: "Relax", text: "Couch potato mode 🛋️" },
      { context: "Home", text: "Home sweet home 🛋️" }
    ],
    misunderstandings: ["Clear home comfort meaning"],
    relatedEmojis: ["house", "television", "blanket"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["couch", "sofa", "lamp", "living room", "cozy"]
  },
  {
    unicode: "🛏️",
    name: "Bed",
    slug: "bed",
    shortMeaning: "A comfortable bed.",
    detailedMeaning: "The Bed emoji shows a bed, representing sleep, rest, and bedroom activities.\n\nUsed for sleep content, tiredness, and bedtime discussions.",
    usageContexts: ["Sleep", "Bed", "Rest", "Tired", "Bedroom"],
    examples: [
      { context: "Sleep", text: "Time for bed 🛏️" },
      { context: "Tired", text: "Need my bed 🛏️" },
      { context: "Rest", text: "Sunday rest 🛏️" }
    ],
    misunderstandings: ["Can be suggestive"],
    relatedEmojis: ["sleeping", "zzz", "night"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["bed", "sleep", "rest", "bedroom", "tired"]
  },
  {
    unicode: "🚿",
    name: "Shower",
    slug: "shower",
    shortMeaning: "A shower head with water.",
    detailedMeaning: "The Shower emoji shows a shower head, representing showering, cleaning, and morning/evening routines.\n\nUsed for hygiene content, routines, and refreshing moments.",
    usageContexts: ["Shower", "Hygiene", "Routine", "Clean", "Fresh"],
    examples: [
      { context: "Routine", text: "Morning shower 🚿" },
      { context: "Fresh", text: "Feeling fresh 🚿" },
      { context: "Clean", text: "Shower time 🚿" }
    ],
    misunderstandings: ["Clear shower meaning"],
    relatedEmojis: ["bathtub", "soap", "droplet"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["shower", "water", "clean", "hygiene", "wash"]
  },
  {
    unicode: "🚽",
    name: "Toilet",
    slug: "toilet",
    shortMeaning: "A toilet.",
    detailedMeaning: "The Toilet emoji shows a toilet, representing bathroom needs and potty humor.\n\nUsed for bathroom breaks, potty humor, and sometimes expressing something is bad.",
    usageContexts: ["Bathroom", "Humor", "Break", "Potty", "Bad"],
    examples: [
      { context: "Break", text: "BRB 🚽" },
      { context: "Humor", text: "Potty humor 🚽" },
      { context: "Bad", text: "This is trash 🚽" }
    ],
    misunderstandings: ["Can express something is garbage"],
    relatedEmojis: ["poop", "roll-of-paper", "bathroom"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["toilet", "bathroom", "potty", "restroom", "WC"]
  },
  {
    unicode: "🪞",
    name: "Mirror",
    slug: "mirror",
    shortMeaning: "A mirror for reflection.",
    detailedMeaning: "The Mirror emoji shows a hand mirror, representing self-reflection, beauty, and looking at oneself.\n\nUsed for self-reflection, beauty content, and mirror selfies.",
    usageContexts: ["Reflection", "Beauty", "Selfie", "Mirror", "Look"],
    examples: [
      { context: "Selfie", text: "Mirror selfie 🪞" },
      { context: "Beauty", text: "Getting ready 🪞" },
      { context: "Reflect", text: "Self-reflection 🪞" }
    ],
    misunderstandings: ["Can mean introspection"],
    relatedEmojis: ["lipstick", "selfie", "sparkles"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["mirror", "reflection", "selfie", "beauty", "look"]
  },
  {
    unicode: "🪟",
    name: "Window",
    slug: "window",
    shortMeaning: "A window frame.",
    detailedMeaning: "The Window emoji shows a window, representing views, looking out, and Microsoft Windows.\n\nUsed for views, looking outside, and sometimes Windows OS references.",
    usageContexts: ["View", "Window", "Outside", "Light", "Microsoft"],
    examples: [
      { context: "View", text: "Window views 🪟" },
      { context: "Look", text: "Looking out 🪟" },
      { context: "Tech", text: "Windows update 🪟" }
    ],
    misunderstandings: ["Microsoft Windows reference"],
    relatedEmojis: ["house", "sunrise", "cityscape"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["window", "view", "glass", "look", "outside"]
  },
  {
    unicode: "🪑",
    name: "Chair",
    slug: "chair",
    shortMeaning: "A simple chair.",
    detailedMeaning: "The Chair emoji shows a wooden chair, representing sitting, furniture, and taking a seat.\n\nUsed for sitting down, furniture content, and rest.",
    usageContexts: ["Sit", "Furniture", "Rest", "Chair", "Home"],
    examples: [
      { context: "Sit", text: "Have a seat 🪑" },
      { context: "Furniture", text: "New chair 🪑" },
      { context: "Rest", text: "Take a seat 🪑" }
    ],
    misunderstandings: ["Clear chair meaning"],
    relatedEmojis: ["couch-and-lamp", "desk", "house"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["chair", "seat", "sit", "furniture", "wooden"]
  },
  {
    unicode: "🕯️",
    name: "Candle",
    slug: "candle",
    shortMeaning: "A lit candle.",
    detailedMeaning: "The Candle emoji shows a burning candle, representing ambiance, romance, relaxation, and memorials.\n\nUsed for cozy vibes, romance, memorial tributes, and spa content.",
    usageContexts: ["Cozy", "Romance", "Memorial", "Relaxation", "Ambiance"],
    examples: [
      { context: "Cozy", text: "Candle lit evening 🕯️" },
      { context: "Memorial", text: "In memory 🕯️" },
      { context: "Romance", text: "Romantic dinner 🕯️" }
    ],
    misunderstandings: ["Can mean memorial/tribute"],
    relatedEmojis: ["fire", "bath", "heart"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["candle", "light", "cozy", "romance", "memorial"]
  },
  {
    unicode: "📦",
    name: "Package",
    slug: "package",
    shortMeaning: "A cardboard shipping box.",
    detailedMeaning: "The Package emoji shows a cardboard box, representing deliveries, shipping, and packages.\n\nUsed for online shopping arrivals, shipping content, and deliveries.",
    usageContexts: ["Delivery", "Shipping", "Package", "Online shopping", "Box"],
    examples: [
      { context: "Delivery", text: "Package arrived 📦" },
      { context: "Shopping", text: "Unboxing time 📦" },
      { context: "Ship", text: "Just shipped 📦" }
    ],
    misunderstandings: ["Clear package meaning"],
    relatedEmojis: ["gift", "shopping-cart", "mailbox"],
    categorySlug: "objects",
    subgroup: "mail",
    keywords: ["package", "box", "delivery", "shipping", "mail"]
  },
  {
    unicode: "✉️",
    name: "Envelope",
    slug: "envelope",
    shortMeaning: "A mail envelope.",
    detailedMeaning: "The Envelope emoji shows a mail envelope, representing letters, email, and correspondence.\n\nUsed for mail content, email references, and sending messages.",
    usageContexts: ["Mail", "Email", "Letter", "Message", "Send"],
    examples: [
      { context: "Mail", text: "You've got mail ✉️" },
      { context: "Email", text: "Check your email ✉️" },
      { context: "Letter", text: "Sending a letter ✉️" }
    ],
    misunderstandings: ["Clear mail meaning"],
    relatedEmojis: ["incoming-envelope", "mailbox", "package"],
    categorySlug: "objects",
    subgroup: "mail",
    keywords: ["envelope", "mail", "letter", "email", "message"]
  },
  {
    unicode: "📝",
    name: "Memo",
    slug: "memo",
    shortMeaning: "A memo or note with pencil.",
    detailedMeaning: "The Memo emoji shows a note with pencil, representing writing, notes, and documentation.\n\nUsed for note-taking, reminders, and writing content.",
    usageContexts: ["Notes", "Writing", "Memo", "Reminder", "Document"],
    examples: [
      { context: "Note", text: "Taking notes 📝" },
      { context: "Remind", text: "Note to self 📝" },
      { context: "Write", text: "Writing it down 📝" }
    ],
    misunderstandings: ["Clear note meaning"],
    relatedEmojis: ["notebook", "pencil", "clipboard"],
    categorySlug: "objects",
    subgroup: "writing",
    keywords: ["memo", "note", "write", "pencil", "document"]
  },
  {
    unicode: "✏️",
    name: "Pencil",
    slug: "pencil",
    shortMeaning: "A yellow pencil.",
    detailedMeaning: "The Pencil emoji shows a classic yellow pencil, representing writing, drawing, and editing.\n\nUsed for writing content, art, and edit references.",
    usageContexts: ["Write", "Draw", "Edit", "Art", "School"],
    examples: [
      { context: "Write", text: "Writing mode ✏️" },
      { context: "Draw", text: "Sketching ✏️" },
      { context: "Edit", text: "Editing time ✏️" }
    ],
    misunderstandings: ["Clear writing meaning"],
    relatedEmojis: ["pen", "memo", "art"],
    categorySlug: "objects",
    subgroup: "writing",
    keywords: ["pencil", "write", "draw", "edit", "yellow"]
  },
  {
    unicode: "📎",
    name: "Paperclip",
    slug: "paperclip",
    shortMeaning: "A metal paperclip.",
    detailedMeaning: "The Paperclip emoji shows a paperclip, representing attachments, office supplies, and organization.\n\nUsed for attachment references, office content, and organizing.",
    usageContexts: ["Attachment", "Office", "Organize", "Clip", "Document"],
    examples: [
      { context: "Attach", text: "Attached below 📎" },
      { context: "Office", text: "Office supplies 📎" },
      { context: "Organize", text: "Getting organized 📎" }
    ],
    misunderstandings: ["Clear office supply meaning"],
    relatedEmojis: ["pushpin", "scissors", "page"],
    categorySlug: "objects",
    subgroup: "office",
    keywords: ["paperclip", "attach", "office", "clip", "organize"]
  },
  {
    unicode: "✂️",
    name: "Scissors",
    slug: "scissors",
    shortMeaning: "A pair of scissors.",
    detailedMeaning: "The Scissors emoji shows scissors, representing cutting, crafts, and editing.\n\nUsed for crafts, cutting content, and haircutting references.",
    usageContexts: ["Cut", "Crafts", "Edit", "Hair", "Create"],
    examples: [
      { context: "Craft", text: "Crafting time ✂️" },
      { context: "Cut", text: "Cutting it out ✂️" },
      { context: "Hair", text: "Haircut day ✂️" }
    ],
    misunderstandings: ["Clear cutting meaning"],
    relatedEmojis: ["art", "ruler", "pencil"],
    categorySlug: "objects",
    subgroup: "office",
    keywords: ["scissors", "cut", "craft", "snip", "edit"]
  },
  {
    unicode: "📌",
    name: "Pushpin",
    slug: "pushpin",
    shortMeaning: "A red pushpin.",
    detailedMeaning: "The Pushpin emoji shows a pushpin/thumbtack, representing pinning, marking locations, and important notes.\n\nUsed for pinned content, location marking, and highlighting importance.",
    usageContexts: ["Pin", "Location", "Important", "Mark", "Note"],
    examples: [
      { context: "Pin", text: "Pinned post 📌" },
      { context: "Location", text: "Mark the spot 📌" },
      { context: "Important", text: "Important note 📌" }
    ],
    misunderstandings: ["Clear pin meaning"],
    relatedEmojis: ["round-pushpin", "paperclip", "memo"],
    categorySlug: "objects",
    subgroup: "office",
    keywords: ["pushpin", "pin", "tack", "location", "mark"]
  },
  {
    unicode: "🔍",
    name: "Magnifying Glass Tilted Left",
    slug: "magnifying-glass-tilted-left",
    shortMeaning: "A magnifying glass for searching.",
    detailedMeaning: "The Magnifying Glass emoji shows a magnifying glass, representing search, investigation, and looking closely.\n\nUsed for search references, investigating, and detailed examination.",
    usageContexts: ["Search", "Look", "Investigate", "Find", "Examine"],
    examples: [
      { context: "Search", text: "Searching for 🔍" },
      { context: "Look", text: "Looking closely 🔍" },
      { context: "Find", text: "Let me find it 🔍" }
    ],
    misunderstandings: ["Clear search meaning"],
    relatedEmojis: ["magnifying-glass-tilted-right", "eye", "detective"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["search", "magnifying glass", "find", "look", "examine"]
  },
  // MORE ELECTRONICS
  {
    unicode: "📱",
    name: "Mobile Phone",
    slug: "mobile-phone",
    shortMeaning: "A smartphone.",
    detailedMeaning: "The Mobile Phone emoji shows a smartphone, representing communication, apps, and modern technology.\n\nUsed for phone calls, texting, and mobile technology.",
    usageContexts: ["Phone", "Text", "Call", "Apps", "Mobile"],
    examples: [
      { context: "Call", text: "Call me 📱" },
      { context: "Text", text: "Text me 📱" },
      { context: "Tech", text: "New phone 📱" }
    ],
    misunderstandings: ["Clear smartphone meaning"],
    relatedEmojis: ["telephone", "laptop", "camera"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["phone", "mobile", "smartphone", "cell", "call"]
  },
  {
    unicode: "📲",
    name: "Mobile Phone with Arrow",
    slug: "mobile-phone-with-arrow",
    shortMeaning: "A phone receiving a call or download.",
    detailedMeaning: "The Mobile Phone with Arrow emoji shows a phone with incoming arrow, representing receiving calls or downloads.\n\nUsed for incoming calls, downloads, and receiving notifications.",
    usageContexts: ["Incoming", "Download", "Receive", "Call", "Notification"],
    examples: [
      { context: "Call", text: "Incoming call 📲" },
      { context: "Download", text: "Download complete 📲" },
      { context: "Receive", text: "Got it 📲" }
    ],
    misunderstandings: ["Clear incoming meaning"],
    relatedEmojis: ["mobile-phone", "telephone", "bell"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["phone", "incoming", "download", "call", "receive"]
  },
  {
    unicode: "☎️",
    name: "Telephone",
    slug: "telephone",
    shortMeaning: "A classic rotary telephone.",
    detailedMeaning: "The Telephone emoji shows a vintage rotary phone, representing phone calls and retro communication.\n\nUsed for phone calls, retro vibes, and customer service.",
    usageContexts: ["Call", "Retro", "Telephone", "Contact", "Communication"],
    examples: [
      { context: "Call", text: "Give me a ring ☎️" },
      { context: "Retro", text: "Old school ☎️" },
      { context: "Contact", text: "Call us ☎️" }
    ],
    misunderstandings: ["Retro phone style"],
    relatedEmojis: ["mobile-phone", "fax-machine", "receiver"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["telephone", "phone", "call", "rotary", "retro"]
  },
  {
    unicode: "📟",
    name: "Pager",
    slug: "pager",
    shortMeaning: "A pager/beeper.",
    detailedMeaning: "The Pager emoji shows a pager device, representing 90s technology, doctors on call, and retro communication.\n\nUsed for retro references, medical contexts, and 90s nostalgia.",
    usageContexts: ["Retro", "90s", "Doctor", "Beeper", "Communication"],
    examples: [
      { context: "Retro", text: "90s vibes 📟" },
      { context: "Doctor", text: "On call 📟" },
      { context: "Nostalgia", text: "Remember these? 📟" }
    ],
    misunderstandings: ["Outdated technology"],
    relatedEmojis: ["mobile-phone", "telephone", "floppy-disk"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["pager", "beeper", "90s", "retro", "doctor"]
  },
  {
    unicode: "📠",
    name: "Fax Machine",
    slug: "fax-machine",
    shortMeaning: "A fax machine.",
    detailedMeaning: "The Fax Machine emoji shows a fax machine, representing office communication and outdated but still-used technology.\n\nUsed for office humor, bureaucracy, and retro tech references.",
    usageContexts: ["Office", "Retro", "Bureaucracy", "Document", "Communication"],
    examples: [
      { context: "Office", text: "Office life 📠" },
      { context: "Retro", text: "Still using fax? 📠" },
      { context: "Document", text: "Fax it over 📠" }
    ],
    misunderstandings: ["Often used ironically"],
    relatedEmojis: ["printer", "telephone", "desktop-computer"],
    categorySlug: "objects",
    subgroup: "phone",
    keywords: ["fax", "office", "retro", "document", "machine"]
  },
  {
    unicode: "🔋",
    name: "Battery",
    slug: "battery",
    shortMeaning: "A full battery.",
    detailedMeaning: "The Battery emoji shows a charged battery, representing power levels, energy, and device charging.\n\nUsed for energy levels, charging, and power references.",
    usageContexts: ["Power", "Energy", "Charge", "Battery", "Full"],
    examples: [
      { context: "Energy", text: "Fully charged 🔋" },
      { context: "Ready", text: "Battery at 100% 🔋" },
      { context: "Power", text: "Powered up 🔋" }
    ],
    misunderstandings: ["Can mean personal energy too"],
    relatedEmojis: ["electric-plug", "mobile-phone", "laptop"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["battery", "power", "charge", "energy", "full"]
  },
  {
    unicode: "🔌",
    name: "Electric Plug",
    slug: "electric-plug",
    shortMeaning: "An electrical plug.",
    detailedMeaning: "The Electric Plug emoji shows an electric plug, representing charging, electricity, and connection.\n\nUsed for charging devices, electrical work, and plugging in.",
    usageContexts: ["Charge", "Electric", "Connect", "Power", "Plug"],
    examples: [
      { context: "Charge", text: "Plugging in 🔌" },
      { context: "Connect", text: "Connected 🔌" },
      { context: "Power", text: "Power up 🔌" }
    ],
    misunderstandings: ["Clear charging meaning"],
    relatedEmojis: ["battery", "light-bulb", "mobile-phone"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["plug", "electric", "charge", "power", "outlet"]
  },
  {
    unicode: "💻",
    name: "Laptop",
    slug: "laptop-computer",
    shortMeaning: "A laptop computer.",
    detailedMeaning: "The Laptop emoji shows a laptop computer, representing work, computing, and digital life.\n\nUsed for work content, computing, and remote work.",
    usageContexts: ["Work", "Computer", "Remote", "Tech", "Digital"],
    examples: [
      { context: "Work", text: "Working from home 💻" },
      { context: "Remote", text: "Remote work 💻" },
      { context: "Tech", text: "New laptop 💻" }
    ],
    misunderstandings: ["Clear laptop meaning"],
    relatedEmojis: ["desktop-computer", "keyboard", "mouse"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["laptop", "computer", "work", "tech", "remote"]
  },
  {
    unicode: "🖥️",
    name: "Desktop Computer",
    slug: "desktop-computer-screen",
    shortMeaning: "A desktop computer monitor.",
    detailedMeaning: "The Desktop Computer emoji shows a computer monitor, representing desktop computing and office work.\n\nUsed for work content, gaming setups, and computing.",
    usageContexts: ["Computer", "Work", "Gaming", "Office", "Desktop"],
    examples: [
      { context: "Work", text: "Office setup 🖥️" },
      { context: "Gaming", text: "Gaming rig 🖥️" },
      { context: "Tech", text: "New monitor 🖥️" }
    ],
    misunderstandings: ["Clear desktop meaning"],
    relatedEmojis: ["laptop", "keyboard", "mouse"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["desktop", "computer", "monitor", "screen", "PC"]
  },
  {
    unicode: "🖨️",
    name: "Printer",
    slug: "printer-machine",
    shortMeaning: "A printer.",
    detailedMeaning: "The Printer emoji shows a desktop printer, representing printing documents and office equipment.\n\nUsed for printing, office work, and document creation.",
    usageContexts: ["Print", "Office", "Document", "Paper", "Copy"],
    examples: [
      { context: "Print", text: "Printing now 🖨️" },
      { context: "Office", text: "Office essentials 🖨️" },
      { context: "Document", text: "Print it out 🖨️" }
    ],
    misunderstandings: ["Clear printer meaning"],
    relatedEmojis: ["desktop-computer", "page", "fax-machine"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["printer", "print", "office", "paper", "document"]
  },
  {
    unicode: "🖱️",
    name: "Computer Mouse",
    slug: "computer-mouse-device",
    shortMeaning: "A computer mouse.",
    detailedMeaning: "The Computer Mouse emoji shows a computer mouse, representing computing and navigation.\n\nUsed for computer content, clicking, and tech discussions.",
    usageContexts: ["Computer", "Click", "Navigate", "Tech", "Cursor"],
    examples: [
      { context: "Click", text: "Click here 🖱️" },
      { context: "Computer", text: "Mouse and keyboard 🖱️" },
      { context: "Tech", text: "New mouse 🖱️" }
    ],
    misunderstandings: ["Clear computer mouse meaning"],
    relatedEmojis: ["keyboard", "laptop", "desktop-computer"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["mouse", "computer", "click", "cursor", "navigate"]
  },
  {
    unicode: "🖲️",
    name: "Trackball",
    slug: "trackball",
    shortMeaning: "A computer trackball.",
    detailedMeaning: "The Trackball emoji shows a trackball input device, representing computer navigation and retro computing.\n\nUsed for computing, retro tech, and input devices.",
    usageContexts: ["Computer", "Input", "Retro", "Navigate", "Tech"],
    examples: [
      { context: "Retro", text: "Old school input 🖲️" },
      { context: "Tech", text: "Trackball user 🖲️" },
      { context: "Navigate", text: "Navigating 🖲️" }
    ],
    misunderstandings: ["Less common device"],
    relatedEmojis: ["computer-mouse", "keyboard", "joystick"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["trackball", "computer", "input", "navigate", "retro"]
  },
  {
    unicode: "🕹️",
    name: "Joystick",
    slug: "joystick",
    shortMeaning: "A gaming joystick.",
    detailedMeaning: "The Joystick emoji shows a gaming joystick, representing gaming, arcade games, and retro gaming.\n\nUsed for gaming content, arcade references, and retro gaming.",
    usageContexts: ["Gaming", "Arcade", "Retro", "Play", "Control"],
    examples: [
      { context: "Gaming", text: "Game on 🕹️" },
      { context: "Arcade", text: "Arcade vibes 🕹️" },
      { context: "Retro", text: "Retro gaming 🕹️" }
    ],
    misunderstandings: ["Clear gaming meaning"],
    relatedEmojis: ["video-game", "alien-monster", "game-die"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["joystick", "gaming", "arcade", "retro", "controller"]
  },
  {
    unicode: "🎮",
    name: "Video Game",
    slug: "video-game",
    shortMeaning: "A game controller.",
    detailedMeaning: "The Video Game emoji shows a game controller, representing gaming, video games, and entertainment.\n\nUsed for gaming content, video game discussions, and player culture.",
    usageContexts: ["Gaming", "Controller", "Video games", "Play", "Entertainment"],
    examples: [
      { context: "Gaming", text: "Gaming night 🎮" },
      { context: "Play", text: "Let's play 🎮" },
      { context: "Games", text: "New game 🎮" }
    ],
    misunderstandings: ["Clear gaming meaning"],
    relatedEmojis: ["joystick", "alien-monster", "trophy"],
    categorySlug: "objects",
    subgroup: "computer",
    keywords: ["gaming", "controller", "video game", "play", "console"]
  },
  {
    unicode: "📷",
    name: "Camera",
    slug: "camera-photo",
    shortMeaning: "A digital camera.",
    detailedMeaning: "The Camera emoji shows a camera, representing photography, pictures, and capturing moments.\n\nUsed for photography, taking pictures, and camera content.",
    usageContexts: ["Photo", "Camera", "Picture", "Capture", "Photography"],
    examples: [
      { context: "Photo", text: "Photo time 📷" },
      { context: "Capture", text: "Capturing memories 📷" },
      { context: "Photography", text: "Photography day 📷" }
    ],
    misunderstandings: ["Clear camera meaning"],
    relatedEmojis: ["camera-with-flash", "video-camera", "selfie"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["camera", "photo", "picture", "capture", "photography"]
  },
  {
    unicode: "📸",
    name: "Camera with Flash",
    slug: "camera-with-flash",
    shortMeaning: "A camera with flash going off.",
    detailedMeaning: "The Camera with Flash emoji shows a camera with flash, representing taking photos, paparazzi, and photo shoots.\n\nUsed for taking pictures, celebrity/paparazzi content, and flash photography.",
    usageContexts: ["Photo", "Flash", "Paparazzi", "Shoot", "Picture"],
    examples: [
      { context: "Photo", text: "Say cheese 📸" },
      { context: "Paparazzi", text: "Paparazzi moment 📸" },
      { context: "Shoot", text: "Photo shoot 📸" }
    ],
    misunderstandings: ["Often means taking a photo"],
    relatedEmojis: ["camera", "video-camera", "sparkles"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["camera", "flash", "photo", "paparazzi", "picture"]
  },
  {
    unicode: "📹",
    name: "Video Camera",
    slug: "video-camera-device",
    shortMeaning: "A video camera.",
    detailedMeaning: "The Video Camera emoji shows a camcorder, representing recording video, filming, and video creation.\n\nUsed for video content, recording, and filming.",
    usageContexts: ["Video", "Record", "Film", "Camera", "Content"],
    examples: [
      { context: "Record", text: "Recording now 📹" },
      { context: "Video", text: "Making a video 📹" },
      { context: "Film", text: "Filming time 📹" }
    ],
    misunderstandings: ["Clear video camera meaning"],
    relatedEmojis: ["camera", "movie-camera", "clapper-board"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["video", "camera", "record", "film", "camcorder"]
  },
  {
    unicode: "📺",
    name: "Television",
    slug: "television-set",
    shortMeaning: "A television set.",
    detailedMeaning: "The Television emoji shows a TV, representing watching shows, entertainment, and streaming.\n\nUsed for TV watching, streaming content, and entertainment.",
    usageContexts: ["TV", "Watch", "Streaming", "Entertainment", "Show"],
    examples: [
      { context: "Watch", text: "Binge watching 📺" },
      { context: "Streaming", text: "Netflix time 📺" },
      { context: "Show", text: "New show 📺" }
    ],
    misunderstandings: ["Clear TV meaning"],
    relatedEmojis: ["movie-camera", "popcorn", "couch-and-lamp"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["TV", "television", "watch", "show", "streaming"]
  },
  {
    unicode: "📻",
    name: "Radio",
    slug: "radio-device",
    shortMeaning: "A portable radio.",
    detailedMeaning: "The Radio emoji shows a radio, representing music, broadcasts, and retro audio technology.\n\nUsed for music, radio shows, and retro tech content.",
    usageContexts: ["Music", "Radio", "Broadcast", "Retro", "Audio"],
    examples: [
      { context: "Music", text: "Radio jams 📻" },
      { context: "Broadcast", text: "Live on radio 📻" },
      { context: "Retro", text: "Old school vibes 📻" }
    ],
    misunderstandings: ["Clear radio meaning"],
    relatedEmojis: ["speaker", "headphones", "microphone"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["radio", "music", "broadcast", "audio", "retro"]
  },
  {
    unicode: "🔦",
    name: "Flashlight",
    slug: "flashlight",
    shortMeaning: "A flashlight/torch.",
    detailedMeaning: "The Flashlight emoji shows a flashlight, representing light, searching in the dark, and camping.\n\nUsed for light sources, searching, and camping content.",
    usageContexts: ["Light", "Search", "Dark", "Camping", "Illuminate"],
    examples: [
      { context: "Light", text: "Shining a light 🔦" },
      { context: "Camping", text: "Camping gear 🔦" },
      { context: "Search", text: "Searching 🔦" }
    ],
    misunderstandings: ["Clear flashlight meaning"],
    relatedEmojis: ["light-bulb", "candle", "camping"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["flashlight", "torch", "light", "search", "dark"]
  },
  {
    unicode: "🏮",
    name: "Red Paper Lantern",
    slug: "red-paper-lantern",
    shortMeaning: "A red paper lantern.",
    detailedMeaning: "The Red Paper Lantern emoji shows a Japanese/Chinese lantern, representing Asian culture, festivals, and restaurants.\n\nUsed for Asian restaurants, festivals, and cultural celebrations.",
    usageContexts: ["Asian", "Festival", "Restaurant", "Culture", "Celebration"],
    examples: [
      { context: "Restaurant", text: "Japanese restaurant 🏮" },
      { context: "Festival", text: "Lantern festival 🏮" },
      { context: "Culture", text: "Cultural vibes 🏮" }
    ],
    misunderstandings: ["Asian cultural item"],
    relatedEmojis: ["sushi", "chopsticks", "japanese-flag"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["lantern", "red", "Japanese", "Chinese", "festival"]
  },
  // MORE TOOLS
  {
    unicode: "🔧",
    name: "Wrench Tool",
    slug: "wrench-tool",
    shortMeaning: "A wrench for repairs.",
    detailedMeaning: "The Wrench emoji shows a wrench, representing fixing, repairs, and mechanical work.\n\nUsed for repair content, settings, and fixing things.",
    usageContexts: ["Fix", "Repair", "Settings", "Tool", "Mechanical"],
    examples: [
      { context: "Fix", text: "Fixing it 🔧" },
      { context: "Settings", text: "Tweaking settings 🔧" },
      { context: "Repair", text: "Under repair 🔧" }
    ],
    misunderstandings: ["Clear tool meaning"],
    relatedEmojis: ["hammer", "screwdriver", "gear"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["wrench", "fix", "repair", "tool", "settings"]
  },
  {
    unicode: "🪓",
    name: "Axe",
    slug: "axe",
    shortMeaning: "A wood-chopping axe.",
    detailedMeaning: "The Axe emoji shows an axe, representing chopping wood, lumberjacks, and cutting.\n\nUsed for chopping, outdoors content, and lumberjack references.",
    usageContexts: ["Chop", "Wood", "Lumberjack", "Outdoors", "Cut"],
    examples: [
      { context: "Chop", text: "Chopping wood 🪓" },
      { context: "Outdoors", text: "Cabin life 🪓" },
      { context: "Lumberjack", text: "Lumberjack vibes 🪓" }
    ],
    misunderstandings: ["Clear axe meaning"],
    relatedEmojis: ["wood", "evergreen-tree", "carpentry-saw"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["axe", "chop", "wood", "lumberjack", "cut"]
  },
  {
    unicode: "⛏️",
    name: "Pick",
    slug: "pick",
    shortMeaning: "A mining pickaxe.",
    detailedMeaning: "The Pick emoji shows a pickaxe, representing mining, digging, and Minecraft references.\n\nUsed for mining, construction, and gaming references.",
    usageContexts: ["Mining", "Dig", "Minecraft", "Construction", "Work"],
    examples: [
      { context: "Mining", text: "Mining time ⛏️" },
      { context: "Minecraft", text: "Minecraft vibes ⛏️" },
      { context: "Dig", text: "Digging deep ⛏️" }
    ],
    misunderstandings: ["Minecraft association"],
    relatedEmojis: ["hammer", "gem-stone", "mountain"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["pick", "pickaxe", "mining", "dig", "Minecraft"]
  },
  {
    unicode: "⚒️",
    name: "Hammer and Pick",
    slug: "hammer-and-pick",
    shortMeaning: "A hammer and pick crossed.",
    detailedMeaning: "The Hammer and Pick emoji shows crossed tools, representing mining, hard work, and labor.\n\nUsed for mining, construction, and work themes.",
    usageContexts: ["Mining", "Labor", "Work", "Construction", "Tools"],
    examples: [
      { context: "Work", text: "Hard at work ⚒️" },
      { context: "Mining", text: "Mining operation ⚒️" },
      { context: "Labor", text: "Labor day ⚒️" }
    ],
    misunderstandings: ["Soviet imagery association"],
    relatedEmojis: ["hammer", "pick", "gear"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["hammer", "pick", "mining", "work", "labor"]
  },
  {
    unicode: "🛠️",
    name: "Hammer and Wrench",
    slug: "hammer-and-wrench",
    shortMeaning: "Tools for building and fixing.",
    detailedMeaning: "The Hammer and Wrench emoji shows crossed tools, representing building, repairs, and technical work.\n\nUsed for DIY projects, repairs, and construction content.",
    usageContexts: ["Build", "Fix", "DIY", "Repair", "Tools"],
    examples: [
      { context: "Build", text: "Building something 🛠️" },
      { context: "DIY", text: "DIY project 🛠️" },
      { context: "Fix", text: "Under construction 🛠️" }
    ],
    misunderstandings: ["Clear tools meaning"],
    relatedEmojis: ["hammer", "wrench", "gear"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["hammer", "wrench", "tools", "build", "fix"]
  },
  {
    unicode: "🗜️",
    name: "Clamp",
    slug: "clamp",
    shortMeaning: "A C-clamp tool.",
    detailedMeaning: "The Clamp emoji shows a C-clamp, representing gripping, woodworking, and holding things in place.\n\nUsed for woodworking, DIY projects, and holding tight.",
    usageContexts: ["Woodworking", "Hold", "Grip", "DIY", "Tool"],
    examples: [
      { context: "Woodworking", text: "Clamping it down 🗜️" },
      { context: "Hold", text: "Holding tight 🗜️" },
      { context: "DIY", text: "Workshop tool 🗜️" }
    ],
    misunderstandings: ["Clear clamp meaning"],
    relatedEmojis: ["carpentry-saw", "hammer", "wrench"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["clamp", "grip", "hold", "tool", "woodworking"]
  },
  {
    unicode: "🧰",
    name: "Toolbox",
    slug: "toolbox",
    shortMeaning: "A red toolbox.",
    detailedMeaning: "The Toolbox emoji shows a toolbox, representing tools, repairs, and being prepared.\n\nUsed for repair content, DIY projects, and having the right tools.",
    usageContexts: ["Tools", "Repair", "DIY", "Prepared", "Work"],
    examples: [
      { context: "Repair", text: "Got my toolbox 🧰" },
      { context: "DIY", text: "DIY ready 🧰" },
      { context: "Prepared", text: "Fully equipped 🧰" }
    ],
    misunderstandings: ["Clear toolbox meaning"],
    relatedEmojis: ["hammer", "wrench", "screwdriver"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["toolbox", "tools", "repair", "DIY", "prepared"]
  },
  {
    unicode: "🔐",
    name: "Locked with Key",
    slug: "locked-with-key",
    shortMeaning: "A locked padlock with key.",
    detailedMeaning: "The Locked with Key emoji shows a padlock with key, representing security, privacy, and access control.\n\nUsed for security content, privacy, and authorized access.",
    usageContexts: ["Security", "Privacy", "Access", "Protected", "Key"],
    examples: [
      { context: "Security", text: "Secured 🔐" },
      { context: "Privacy", text: "Private content 🔐" },
      { context: "Access", text: "Authorized only 🔐" }
    ],
    misunderstandings: ["Strong security meaning"],
    relatedEmojis: ["locked", "key", "shield"],
    categorySlug: "objects",
    subgroup: "lock",
    keywords: ["lock", "key", "security", "private", "secure"]
  },
  {
    unicode: "🗝️",
    name: "Old Key",
    slug: "old-key",
    shortMeaning: "An antique key.",
    detailedMeaning: "The Old Key emoji shows an ornate antique key, representing secrets, unlocking mysteries, and vintage items.\n\nUsed for secrets, mysteries, and vintage/antique content.",
    usageContexts: ["Secret", "Mystery", "Vintage", "Unlock", "Antique"],
    examples: [
      { context: "Secret", text: "The key to success 🗝️" },
      { context: "Mystery", text: "Unlocking secrets 🗝️" },
      { context: "Vintage", text: "Vintage vibes 🗝️" }
    ],
    misunderstandings: ["Can mean solution/answer"],
    relatedEmojis: ["key", "locked", "treasure"],
    categorySlug: "objects",
    subgroup: "lock",
    keywords: ["key", "old", "antique", "secret", "mystery"]
  },
  {
    unicode: "⚖️",
    name: "Balance Scale",
    slug: "balance-scale",
    shortMeaning: "A balance scale for weighing.",
    detailedMeaning: "The Balance Scale emoji shows scales, representing justice, law, balance, and the Libra zodiac.\n\nUsed for legal content, fairness, balance, and Libra references.",
    usageContexts: ["Justice", "Law", "Balance", "Libra", "Fair"],
    examples: [
      { context: "Justice", text: "Justice served ⚖️" },
      { context: "Balance", text: "Finding balance ⚖️" },
      { context: "Libra", text: "Libra season ⚖️" }
    ],
    misunderstandings: ["Libra zodiac association"],
    relatedEmojis: ["gavel", "court", "statue-of-liberty"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["scale", "balance", "justice", "law", "Libra"]
  },
  {
    unicode: "🧲",
    name: "Magnet Tool",
    slug: "magnet-tool",
    shortMeaning: "A horseshoe magnet.",
    detailedMeaning: "The Magnet emoji shows a magnet, representing attraction, magnetism, and drawing things together.\n\nUsed for attraction topics, being magnetic, and science content.",
    usageContexts: ["Attract", "Magnetic", "Pull", "Science", "Draw"],
    examples: [
      { context: "Attract", text: "Attracting success 🧲" },
      { context: "Magnetic", text: "Magnetic personality 🧲" },
      { context: "Science", text: "Science project 🧲" }
    ],
    misunderstandings: ["Can mean attractive"],
    relatedEmojis: ["sparkles", "lightning", "science"],
    categorySlug: "objects",
    subgroup: "tool",
    keywords: ["magnet", "attract", "pull", "magnetic", "science"]
  },
  // MORE HOUSEHOLD ITEMS
  {
    unicode: "🪤",
    name: "Mouse Trap",
    slug: "mouse-trap",
    shortMeaning: "A mouse trap.",
    detailedMeaning: "The Mouse Trap emoji shows a mouse trap, representing catching mice, traps, and being caught.\n\nUsed for pest control, trap references, and falling for tricks.",
    usageContexts: ["Trap", "Catch", "Mouse", "Trick", "Bait"],
    examples: [
      { context: "Trap", text: "It's a trap 🪤" },
      { context: "Catch", text: "Caught 🪤" },
      { context: "Mouse", text: "Mouse problem 🪤" }
    ],
    misunderstandings: ["Can mean any kind of trap"],
    relatedEmojis: ["mouse", "cheese-wedge", "warning"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["trap", "mouse", "catch", "bait", "pest"]
  },
  {
    unicode: "🪜",
    name: "Ladder",
    slug: "ladder",
    shortMeaning: "A step ladder.",
    detailedMeaning: "The Ladder emoji shows a ladder, representing climbing, reaching heights, and career advancement.\n\nUsed for climbing, reaching goals, and career content.",
    usageContexts: ["Climb", "Reach", "Career", "Height", "Progress"],
    examples: [
      { context: "Career", text: "Climbing the ladder 🪜" },
      { context: "Reach", text: "Reaching new heights 🪜" },
      { context: "Progress", text: "Moving up 🪜" }
    ],
    misunderstandings: ["Career advancement metaphor"],
    relatedEmojis: ["chart-increasing", "trophy", "star"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["ladder", "climb", "reach", "career", "height"]
  },
  {
    unicode: "🧯",
    name: "Fire Extinguisher",
    slug: "fire-extinguisher",
    shortMeaning: "A fire extinguisher.",
    detailedMeaning: "The Fire Extinguisher emoji shows a fire extinguisher, representing safety, emergencies, and putting out fires.\n\nUsed for safety content, emergencies, and calming situations.",
    usageContexts: ["Safety", "Emergency", "Fire", "Calm", "Extinguish"],
    examples: [
      { context: "Safety", text: "Safety first 🧯" },
      { context: "Calm", text: "Putting out fires 🧯" },
      { context: "Emergency", text: "Emergency ready 🧯" }
    ],
    misunderstandings: ["Can mean calming drama"],
    relatedEmojis: ["fire", "firefighter", "warning"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["extinguisher", "fire", "safety", "emergency", "calm"]
  },
  {
    unicode: "🛒",
    name: "Shopping Cart",
    slug: "shopping-cart",
    shortMeaning: "A shopping cart.",
    detailedMeaning: "The Shopping Cart emoji shows a shopping cart, representing shopping, groceries, and online shopping.\n\nUsed for shopping content, e-commerce, and grocery runs.",
    usageContexts: ["Shopping", "Groceries", "Cart", "E-commerce", "Buy"],
    examples: [
      { context: "Shopping", text: "Shopping time 🛒" },
      { context: "Groceries", text: "Grocery run 🛒" },
      { context: "Online", text: "Add to cart 🛒" }
    ],
    misunderstandings: ["Clear shopping meaning"],
    relatedEmojis: ["credit-card", "shopping-bags", "receipt"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["cart", "shopping", "groceries", "buy", "store"]
  },
  {
    unicode: "🛍️",
    name: "Shopping Bags",
    slug: "shopping-bags",
    shortMeaning: "Colorful shopping bags.",
    detailedMeaning: "The Shopping Bags emoji shows shopping bags, representing retail therapy, shopping sprees, and purchases.\n\nUsed for shopping hauls, retail content, and fashion shopping.",
    usageContexts: ["Shopping", "Retail", "Haul", "Fashion", "Bags"],
    examples: [
      { context: "Haul", text: "Shopping haul 🛍️" },
      { context: "Retail", text: "Retail therapy 🛍️" },
      { context: "Fashion", text: "New purchases 🛍️" }
    ],
    misunderstandings: ["Clear shopping meaning"],
    relatedEmojis: ["shopping-cart", "credit-card", "dress"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["shopping", "bags", "retail", "haul", "fashion"]
  },
  {
    unicode: "🎁",
    name: "Wrapped Gift",
    slug: "wrapped-gift",
    shortMeaning: "A wrapped gift box.",
    detailedMeaning: "The Wrapped Gift emoji shows a gift box with bow, representing presents, surprises, and celebrations.\n\nUsed for gifts, birthdays, holidays, and surprises.",
    usageContexts: ["Gift", "Present", "Birthday", "Holiday", "Surprise"],
    examples: [
      { context: "Birthday", text: "Happy birthday 🎁" },
      { context: "Holiday", text: "Holiday gifts 🎁" },
      { context: "Surprise", text: "Surprise for you 🎁" }
    ],
    misunderstandings: ["Clear gift meaning"],
    relatedEmojis: ["party-popper", "birthday-cake", "christmas-tree"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["gift", "present", "birthday", "holiday", "wrapped"]
  },
  {
    unicode: "🪔",
    name: "Diya Lamp",
    slug: "diya-lamp",
    shortMeaning: "A traditional oil lamp.",
    detailedMeaning: "The Diya Lamp emoji shows an Indian oil lamp, representing Diwali, light, and Hindu celebrations.\n\nUsed for Diwali, Indian culture, and spiritual light.",
    usageContexts: ["Diwali", "Indian", "Light", "Spiritual", "Festival"],
    examples: [
      { context: "Diwali", text: "Happy Diwali 🪔" },
      { context: "Light", text: "Festival of lights 🪔" },
      { context: "Culture", text: "Indian traditions 🪔" }
    ],
    misunderstandings: ["Indian cultural item"],
    relatedEmojis: ["candle", "fire", "india-flag"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["diya", "lamp", "Diwali", "Indian", "light"]
  },
  {
    unicode: "🧿",
    name: "Nazar Amulet",
    slug: "nazar-amulet",
    shortMeaning: "An evil eye amulet.",
    detailedMeaning: "The Nazar Amulet emoji shows the evil eye bead, representing protection, Turkish/Greek culture, and warding off bad luck.\n\nUsed for protection, cultural references, and aesthetic content.",
    usageContexts: ["Protection", "Evil eye", "Turkish", "Greek", "Amulet"],
    examples: [
      { context: "Protection", text: "Protected 🧿" },
      { context: "Culture", text: "Mediterranean vibes 🧿" },
      { context: "Aesthetic", text: "Evil eye aesthetic 🧿" }
    ],
    misunderstandings: ["Cultural protection symbol"],
    relatedEmojis: ["eye", "sparkles", "prayer-beads"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["nazar", "evil eye", "amulet", "protection", "Turkish"]
  },
  {
    unicode: "📿",
    name: "Prayer Beads",
    slug: "prayer-beads",
    shortMeaning: "A string of prayer beads.",
    detailedMeaning: "The Prayer Beads emoji shows beads used for prayer/meditation, representing spirituality, religion, and mindfulness.\n\nUsed for spiritual content, meditation, and religious practices.",
    usageContexts: ["Prayer", "Meditation", "Spiritual", "Religious", "Mindful"],
    examples: [
      { context: "Prayer", text: "In prayer 📿" },
      { context: "Meditation", text: "Meditation time 📿" },
      { context: "Spiritual", text: "Spiritual practice 📿" }
    ],
    misunderstandings: ["Religious/spiritual item"],
    relatedEmojis: ["nazar-amulet", "om", "person-in-lotus-position"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["prayer", "beads", "meditation", "spiritual", "rosary"]
  },
  {
    unicode: "🪶",
    name: "Feather",
    slug: "feather",
    shortMeaning: "A bird feather.",
    detailedMeaning: "The Feather emoji shows a feather, representing lightness, birds, writing quills, and Native American culture.\n\nUsed for light topics, birds, writing, and cultural references.",
    usageContexts: ["Light", "Bird", "Writing", "Native", "Soft"],
    examples: [
      { context: "Light", text: "Light as a feather 🪶" },
      { context: "Writing", text: "Old school writing 🪶" },
      { context: "Bird", text: "Bird feather 🪶" }
    ],
    misunderstandings: ["Cultural significance varies"],
    relatedEmojis: ["bird", "peacock", "pen"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["feather", "bird", "light", "quill", "soft"]
  },
  {
    unicode: "🪵",
    name: "Wood",
    slug: "wood",
    shortMeaning: "A log of wood.",
    detailedMeaning: "The Wood emoji shows a wood log, representing lumber, camping, fires, and natural materials.\n\nUsed for camping, firewood, woodworking, and nature content.",
    usageContexts: ["Wood", "Camping", "Fire", "Natural", "Lumber"],
    examples: [
      { context: "Camping", text: "Campfire wood 🪵" },
      { context: "Nature", text: "Back to nature 🪵" },
      { context: "Woodworking", text: "Woodworking project 🪵" }
    ],
    misunderstandings: ["Clear wood meaning"],
    relatedEmojis: ["fire", "axe", "evergreen-tree"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["wood", "log", "lumber", "camping", "fire"]
  },
  {
    unicode: "🪨",
    name: "Rock",
    slug: "rock",
    shortMeaning: "A large rock.",
    detailedMeaning: "The Rock emoji shows a boulder/rock, representing stability, strength, and the phrase 'you rock.'\n\nUsed for stability, strength expressions, and nature content.",
    usageContexts: ["Rock", "Stable", "Strong", "Nature", "Solid"],
    examples: [
      { context: "Praise", text: "You rock 🪨" },
      { context: "Stable", text: "Solid as a rock 🪨" },
      { context: "Nature", text: "Nature vibes 🪨" }
    ],
    misunderstandings: ["You rock expression"],
    relatedEmojis: ["mountain", "gem-stone", "wood"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["rock", "stone", "boulder", "solid", "stable"]
  },
  {
    unicode: "⏰",
    name: "Alarm Clock",
    slug: "alarm-clock",
    shortMeaning: "An alarm clock.",
    detailedMeaning: "The Alarm Clock emoji shows an alarm clock, representing time, wake-up calls, and deadlines.\n\nUsed for time references, alarms, and deadlines.",
    usageContexts: ["Time", "Alarm", "Wake up", "Deadline", "Clock"],
    examples: [
      { context: "Wake up", text: "Alarm set ⏰" },
      { context: "Time", text: "Time check ⏰" },
      { context: "Deadline", text: "Time's running out ⏰" }
    ],
    misunderstandings: ["Clear time meaning"],
    relatedEmojis: ["clock", "timer", "hourglass"],
    categorySlug: "objects",
    subgroup: "time",
    keywords: ["alarm", "clock", "time", "wake", "deadline"]
  },
  {
    unicode: "⏳",
    name: "Hourglass Not Done",
    slug: "hourglass-not-done",
    shortMeaning: "An hourglass with sand flowing.",
    detailedMeaning: "The Hourglass Not Done emoji shows sand still flowing, representing time passing, waiting, and patience.\n\nUsed for waiting, time passing, and patience.",
    usageContexts: ["Waiting", "Time", "Patience", "Progress", "Passing"],
    examples: [
      { context: "Waiting", text: "Still waiting ⏳" },
      { context: "Time", text: "Time is passing ⏳" },
      { context: "Patience", text: "Patience ⏳" }
    ],
    misunderstandings: ["Waiting/in progress"],
    relatedEmojis: ["hourglass-done", "clock", "timer"],
    categorySlug: "objects",
    subgroup: "time",
    keywords: ["hourglass", "time", "waiting", "patience", "sand"]
  },
  {
    unicode: "⌛",
    name: "Hourglass Done",
    slug: "hourglass-done",
    shortMeaning: "An hourglass with sand finished.",
    detailedMeaning: "The Hourglass Done emoji shows sand finished flowing, representing time's up, completion, and urgency.\n\nUsed for deadlines, time's up, and completed waiting.",
    usageContexts: ["Done", "Time's up", "Deadline", "Complete", "Finished"],
    examples: [
      { context: "Time's up", text: "Time's up ⌛" },
      { context: "Deadline", text: "Deadline passed ⌛" },
      { context: "Complete", text: "Wait is over ⌛" }
    ],
    misunderstandings: ["Time expired"],
    relatedEmojis: ["hourglass-not-done", "clock", "alarm-clock"],
    categorySlug: "objects",
    subgroup: "time",
    keywords: ["hourglass", "done", "time", "finished", "expired"]
  },
  {
    unicode: "🧭",
    name: "Compass",
    slug: "compass",
    shortMeaning: "A navigation compass.",
    detailedMeaning: "The Compass emoji shows a compass, representing direction, navigation, and finding your way.\n\nUsed for navigation, direction, and finding purpose.",
    usageContexts: ["Direction", "Navigate", "Travel", "Purpose", "Guide"],
    examples: [
      { context: "Direction", text: "Finding my way 🧭" },
      { context: "Navigate", text: "Navigating life 🧭" },
      { context: "Travel", text: "Adventure awaits 🧭" }
    ],
    misunderstandings: ["Can mean moral compass"],
    relatedEmojis: ["world-map", "airplane", "hiking-boot"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["compass", "direction", "navigate", "travel", "guide"]
  },
  {
    unicode: "🧳",
    name: "Luggage",
    slug: "luggage",
    shortMeaning: "A rolling suitcase.",
    detailedMeaning: "The Luggage emoji shows a suitcase, representing travel, packing, and trips.\n\nUsed for travel content, packing, and vacation planning.",
    usageContexts: ["Travel", "Packing", "Trip", "Vacation", "Suitcase"],
    examples: [
      { context: "Travel", text: "Bags packed 🧳" },
      { context: "Vacation", text: "Vacation ready 🧳" },
      { context: "Trip", text: "Off on a trip 🧳" }
    ],
    misunderstandings: ["Clear travel meaning"],
    relatedEmojis: ["airplane", "passport", "world-map"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["luggage", "suitcase", "travel", "packing", "trip"]
  },
  {
    unicode: "☂️",
    name: "Umbrella",
    slug: "umbrella",
    shortMeaning: "An open umbrella.",
    detailedMeaning: "The Umbrella emoji shows an open umbrella, representing rain, protection, and weather.\n\nUsed for rainy weather, protection, and weather discussions.",
    usageContexts: ["Rain", "Weather", "Protection", "Umbrella", "Wet"],
    examples: [
      { context: "Rain", text: "Rainy day ☂️" },
      { context: "Protection", text: "Stay dry ☂️" },
      { context: "Weather", text: "Don't forget your umbrella ☂️" }
    ],
    misunderstandings: ["Clear umbrella meaning"],
    relatedEmojis: ["cloud-with-rain", "raindrops", "sun-behind-rain-cloud"],
    categorySlug: "objects",
    subgroup: "household",
    keywords: ["umbrella", "rain", "weather", "protection", "wet"]
  },
  // SYMBOLS
  {
    unicode: "✅",
    name: "Check Mark Button",
    slug: "check-mark-button",
    shortMeaning: "Green check mark - done, complete, or correct!",
    detailedMeaning: "The Check Mark Button shows a white check mark in a green square, indicating completion, approval, or correctness. It's the universal symbol for 'done' or 'yes.'\n\nUsed for to-do lists, confirming tasks are complete, indicating correct answers, or approving something.",
    usageContexts: ["Done", "Complete", "Correct", "Approved", "Confirmed"],
    examples: [
      { context: "Done", text: "Task complete ✅" },
      { context: "Correct", text: "That's right ✅" },
      { context: "List", text: "Groceries ✅" }
    ],
    misunderstandings: ["Clear meaning - universally understood"],
    relatedEmojis: ["check-mark", "cross-mark", "thumbs-up"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["check", "done", "complete", "yes", "correct"]
  },
  {
    unicode: "❌",
    name: "Cross Mark",
    slug: "cross-mark",
    shortMeaning: "Red X mark - no, wrong, or cancelled.",
    detailedMeaning: "The Cross Mark shows a red X, indicating rejection, incorrectness, or cancellation. It's the opposite of the check mark and clearly signals 'no' or 'wrong.'\n\nUsed for rejecting ideas, indicating wrong answers, showing something is cancelled, or expressing disagreement.",
    usageContexts: ["No", "Wrong", "Cancelled", "Rejected", "Error"],
    examples: [
      { context: "Wrong", text: "That's incorrect ❌" },
      { context: "No", text: "Hard no ❌" },
      { context: "Cancelled", text: "Plans cancelled ❌" }
    ],
    misunderstandings: ["Clear meaning - very direct"],
    relatedEmojis: ["check-mark-button", "prohibited", "thumbs-down"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["x", "no", "wrong", "cancel", "reject"]
  },
  {
    unicode: "❓",
    name: "Question Mark",
    slug: "question-mark",
    shortMeaning: "A red question mark - asking or expressing confusion.",
    detailedMeaning: "The Question Mark emoji shows a bold red question mark, used for asking questions, expressing confusion, or highlighting uncertainty.\n\nUsed when asking questions, expressing doubt, or emphasizing that something is unknown or confusing.",
    usageContexts: ["Questions", "Confusion", "Uncertainty", "Doubt", "Inquiry"],
    examples: [
      { context: "Question", text: "What happened ❓" },
      { context: "Confused", text: "I'm so confused ❓" },
      { context: "Doubt", text: "Are you sure ❓" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["exclamation-mark", "thinking-face", "confused-face"],
    categorySlug: "symbols",
    subgroup: "punctuation",
    keywords: ["question", "ask", "confused", "what", "why"]
  },
  {
    unicode: "❗",
    name: "Exclamation Mark",
    slug: "exclamation-mark",
    shortMeaning: "A red exclamation mark - important, urgent, or emphasis!",
    detailedMeaning: "The Exclamation Mark emoji shows a bold red exclamation point, used for emphasis, urgency, or highlighting something important.\n\nUsed to draw attention, express urgency, add emphasis, or indicate excitement about something important.",
    usageContexts: ["Important", "Urgent", "Emphasis", "Attention", "Excitement"],
    examples: [
      { context: "Important", text: "Urgent ❗" },
      { context: "Attention", text: "Please read ❗" },
      { context: "Excitement", text: "Amazing news ❗" }
    ],
    misunderstandings: ["Can seem too urgent if overused"],
    relatedEmojis: ["question-mark", "warning", "loudspeaker"],
    categorySlug: "symbols",
    subgroup: "punctuation",
    keywords: ["important", "urgent", "attention", "emphasis", "exclaim"]
  },
  {
    unicode: "➡️",
    name: "Right Arrow",
    slug: "right-arrow",
    shortMeaning: "Arrow pointing right - next, forward, or direction.",
    detailedMeaning: "The Right Arrow emoji shows an arrow pointing right, indicating direction, moving forward, or pointing to the next thing. Arrows are universal directional symbols.\n\nUsed for indicating direction, showing progression, pointing to content, or expressing 'moving forward.'",
    usageContexts: ["Direction", "Next", "Forward", "Pointing", "Navigation"],
    examples: [
      { context: "Next", text: "Swipe for more ➡️" },
      { context: "Direction", text: "This way ➡️" },
      { context: "Forward", text: "Moving on ➡️" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["left-arrow", "up-arrow", "down-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["arrow", "right", "next", "forward", "direction"]
  },
  {
    unicode: "🎵",
    name: "Musical Note",
    slug: "musical-note",
    shortMeaning: "Musical notes - music, songs, and melodies.",
    detailedMeaning: "The Musical Note emoji shows music notes, representing music, songs, and anything melodic. Music is a universal language and this emoji captures that spirit.\n\nUsed when discussing music, sharing songs, expressing that something is music to your ears, or anything music-related.",
    usageContexts: ["Music", "Songs", "Melody", "Listening", "Musical"],
    examples: [
      { context: "Music", text: "Listening to 🎵" },
      { context: "Song", text: "This song 🎵" },
      { context: "Mood", text: "Musical mood 🎵" }
    ],
    misunderstandings: ["Clear meaning"],
    relatedEmojis: ["musical-notes", "headphone", "microphone"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["music", "note", "song", "melody", "tune"]
  },
  // HEARTS
  {
    unicode: "❤️",
    name: "Red Heart",
    slug: "red-heart",
    shortMeaning: "Classic red heart - love and affection.",
    detailedMeaning: "The Red Heart is the classic symbol of love, romance, and deep affection. It's the most popular heart emoji and carries strong emotional significance.\n\nUsed for expressing love, romance, gratitude, and strong emotional connections.",
    usageContexts: ["Love", "Romance", "Affection", "Gratitude", "Care"],
    examples: [
      { context: "Love", text: "I love you ❤️" },
      { context: "Gratitude", text: "Thank you so much ❤️" },
      { context: "Affection", text: "You're the best ❤️" }
    ],
    misunderstandings: ["Very strong romantic connotation"],
    relatedEmojis: ["heart-with-arrow", "two-hearts", "beating-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "love", "red", "romance", "affection"]
  },
  {
    unicode: "🧡",
    name: "Orange Heart",
    slug: "orange-heart",
    shortMeaning: "Orange heart - friendship and care.",
    detailedMeaning: "The Orange Heart represents friendship, support, and care without romantic implications. It's warmer than yellow but less intense than red.\n\nUsed for expressing friendly love, support, and autumn vibes.",
    usageContexts: ["Friendship", "Support", "Care", "Autumn", "Warm"],
    examples: [
      { context: "Friend", text: "You're amazing 🧡" },
      { context: "Support", text: "I'm here for you 🧡" },
      { context: "Autumn", text: "Fall vibes 🧡" }
    ],
    misunderstandings: ["Less romantic than red heart"],
    relatedEmojis: ["red-heart", "yellow-heart", "green-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["orange", "heart", "friendship", "warm", "care"]
  },
  {
    unicode: "💛",
    name: "Yellow Heart",
    slug: "yellow-heart",
    shortMeaning: "Yellow heart - friendship and happiness.",
    detailedMeaning: "The Yellow Heart represents happiness, friendship, and positivity. It's associated with sunshine and platonic love.\n\nUsed for close friendships, positivity, and joyful connections.",
    usageContexts: ["Friendship", "Happiness", "Positivity", "Joy", "Platonic"],
    examples: [
      { context: "Friend", text: "Best friends 💛" },
      { context: "Happy", text: "You make me smile 💛" },
      { context: "Positive", text: "Good vibes only 💛" }
    ],
    misunderstandings: ["On Snapchat means #1 best friend"],
    relatedEmojis: ["orange-heart", "green-heart", "sun"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["yellow", "heart", "friendship", "happy", "sunshine"]
  },
  {
    unicode: "💚",
    name: "Green Heart",
    slug: "green-heart",
    shortMeaning: "Green heart - nature, health, and jealousy.",
    detailedMeaning: "The Green Heart can represent nature, health, growth, or sometimes jealousy. It's associated with environmental themes and wellness.\n\nUsed for eco-friendly content, health themes, Irish pride, and sometimes jealousy.",
    usageContexts: ["Nature", "Health", "Irish", "Environment", "Jealousy"],
    examples: [
      { context: "Nature", text: "Go green 💚" },
      { context: "Irish", text: "Happy St. Patrick's 💚" },
      { context: "Health", text: "Healthy living 💚" }
    ],
    misunderstandings: ["Can mean jealousy"],
    relatedEmojis: ["yellow-heart", "blue-heart", "shamrock"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["green", "heart", "nature", "eco", "jealousy"]
  },
  {
    unicode: "💙",
    name: "Blue Heart",
    slug: "blue-heart",
    shortMeaning: "Blue heart - trust, loyalty, and peace.",
    detailedMeaning: "The Blue Heart represents trust, loyalty, peace, and sometimes awareness causes. Blue is calming and represents stability.\n\nUsed for expressing trust, supporting causes, brand loyalty, and calm love.",
    usageContexts: ["Trust", "Loyalty", "Peace", "Awareness", "Calm"],
    examples: [
      { context: "Trust", text: "I trust you 💙" },
      { context: "Loyalty", text: "Always got your back 💙" },
      { context: "Calm", text: "Peaceful vibes 💙" }
    ],
    misunderstandings: ["Less intense than red heart"],
    relatedEmojis: ["green-heart", "purple-heart", "water-wave"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["blue", "heart", "trust", "loyalty", "peace"]
  },
  {
    unicode: "💜",
    name: "Purple Heart",
    slug: "purple-heart",
    shortMeaning: "Purple heart - compassion and K-pop.",
    detailedMeaning: "The Purple Heart represents compassion, support, and is especially popular in K-pop fandoms (BTS Army). It's also associated with royalty and luxury.\n\nUsed heavily by BTS fans, expressing compassion, and luxury themes.",
    usageContexts: ["K-pop", "BTS", "Compassion", "Luxury", "Support"],
    examples: [
      { context: "BTS", text: "I purple you 💜" },
      { context: "Support", text: "Sending love 💜" },
      { context: "Luxury", text: "Royal vibes 💜" }
    ],
    misunderstandings: ["Strong K-pop association"],
    relatedEmojis: ["blue-heart", "black-heart", "sparkles"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["purple", "heart", "BTS", "kpop", "compassion"]
  },
  {
    unicode: "🖤",
    name: "Black Heart",
    slug: "black-heart",
    shortMeaning: "Black heart - dark humor, sorrow, or edgy aesthetic.",
    detailedMeaning: "The Black Heart represents dark humor, sorrow, morbidity, or an edgy/alternative aesthetic. It's popular in goth and emo communities.\n\nUsed for dark humor, expressing grief, or edgy/alternative aesthetic.",
    usageContexts: ["Dark humor", "Goth", "Sorrow", "Edgy", "Alternative"],
    examples: [
      { context: "Dark", text: "Dark soul 🖤" },
      { context: "Aesthetic", text: "All black everything 🖤" },
      { context: "Humor", text: "Dead inside 🖤" }
    ],
    misunderstandings: ["Can seem negative or sad"],
    relatedEmojis: ["purple-heart", "skull", "bat"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["black", "heart", "dark", "goth", "edgy"]
  },
  {
    unicode: "🤍",
    name: "White Heart",
    slug: "white-heart",
    shortMeaning: "White heart - purity and support.",
    detailedMeaning: "The White Heart represents purity, support for causes, and clean aesthetics. It's associated with peace and remembrance.\n\nUsed for expressing pure love, support, and minimalist aesthetic.",
    usageContexts: ["Purity", "Support", "Clean", "Remembrance", "Peace"],
    examples: [
      { context: "Pure", text: "Pure love 🤍" },
      { context: "Support", text: "Sending support 🤍" },
      { context: "Aesthetic", text: "Clean vibes 🤍" }
    ],
    misunderstandings: ["Sometimes used for mourning"],
    relatedEmojis: ["black-heart", "dove", "peace-symbol"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["white", "heart", "pure", "peace", "support"]
  },
  {
    unicode: "🤎",
    name: "Brown Heart",
    slug: "brown-heart",
    shortMeaning: "Brown heart - earth tones and BLM support.",
    detailedMeaning: "The Brown Heart represents earth tones, nature, and has been used in support of Black Lives Matter and racial equality movements.\n\nUsed for earthy themes, autumn vibes, and solidarity with POC communities.",
    usageContexts: ["Earth", "BLM", "Autumn", "Nature", "Solidarity"],
    examples: [
      { context: "Earth", text: "Earthy vibes 🤎" },
      { context: "Autumn", text: "Fall colors 🤎" },
      { context: "Support", text: "Solidarity 🤎" }
    ],
    misunderstandings: ["Can have political meaning"],
    relatedEmojis: ["green-heart", "orange-heart", "fallen-leaf"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["brown", "heart", "earth", "autumn", "solidarity"]
  },
  {
    unicode: "💔",
    name: "Broken Heart",
    slug: "broken-heart",
    shortMeaning: "Broken heart - heartbreak and sadness.",
    detailedMeaning: "The Broken Heart shows a heart split in two, representing heartbreak, loss, and emotional pain.\n\nUsed for breakups, disappointment, and expressing emotional hurt.",
    usageContexts: ["Heartbreak", "Breakup", "Sadness", "Loss", "Pain"],
    examples: [
      { context: "Breakup", text: "We broke up 💔" },
      { context: "Sad", text: "Heartbroken 💔" },
      { context: "Loss", text: "Missing you 💔" }
    ],
    misunderstandings: ["Clear heartbreak meaning"],
    relatedEmojis: ["red-heart", "crying-face", "mending-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["broken", "heart", "sad", "breakup", "hurt"]
  },
  {
    unicode: "❤️‍🔥",
    name: "Heart on Fire",
    slug: "heart-on-fire",
    shortMeaning: "Heart on fire - passionate love.",
    detailedMeaning: "The Heart on Fire represents passionate, intense love and burning desire. It's a newer emoji showing strong romantic feelings.\n\nUsed for expressing intense passion, attraction, and fiery love.",
    usageContexts: ["Passion", "Desire", "Intense love", "Attraction", "Hot"],
    examples: [
      { context: "Passion", text: "Burning love ❤️‍🔥" },
      { context: "Attraction", text: "So hot ❤️‍🔥" },
      { context: "Intense", text: "Fire in my heart ❤️‍🔥" }
    ],
    misunderstandings: ["Very intense romantic meaning"],
    relatedEmojis: ["red-heart", "fire", "smiling-face-with-heart-eyes"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "fire", "passion", "love", "burning"]
  },
  {
    unicode: "❤️‍🩹",
    name: "Mending Heart",
    slug: "mending-heart",
    shortMeaning: "Heart with bandage - healing from heartbreak.",
    detailedMeaning: "The Mending Heart shows a heart with a bandage, representing emotional healing and recovery from heartbreak.\n\nUsed for expressing recovery from emotional pain and the healing process.",
    usageContexts: ["Healing", "Recovery", "Moving on", "Self-care", "Growth"],
    examples: [
      { context: "Healing", text: "Getting better ❤️‍🩹" },
      { context: "Recovery", text: "Healing takes time ❤️‍🩹" },
      { context: "Growth", text: "Growing stronger ❤️‍🩹" }
    ],
    misunderstandings: ["Represents healing, not broken"],
    relatedEmojis: ["broken-heart", "red-heart", "bandage"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "mending", "healing", "bandage", "recovery"]
  },
  {
    unicode: "💕",
    name: "Two Hearts",
    slug: "two-hearts",
    shortMeaning: "Two hearts together - love and affection.",
    detailedMeaning: "Two Hearts shows two pink hearts, representing love between two people, mutual affection, and romantic feelings.\n\nUsed for expressing mutual love, cute affection, and romantic messages.",
    usageContexts: ["Love", "Couple", "Affection", "Cute", "Together"],
    examples: [
      { context: "Couple", text: "Us forever 💕" },
      { context: "Love", text: "Love you 💕" },
      { context: "Cute", text: "So cute 💕" }
    ],
    misunderstandings: ["Clear romantic meaning"],
    relatedEmojis: ["red-heart", "revolving-hearts", "heart-with-arrow"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["two", "hearts", "love", "couple", "together"]
  },
  {
    unicode: "💞",
    name: "Revolving Hearts",
    slug: "revolving-hearts",
    shortMeaning: "Hearts revolving around each other.",
    detailedMeaning: "Revolving Hearts shows two hearts circling each other, representing mutual love and reciprocal feelings.\n\nUsed for expressing mutual love and the feeling of being in love.",
    usageContexts: ["Mutual love", "In love", "Reciprocal", "Romance", "Together"],
    examples: [
      { context: "In love", text: "Falling for you 💞" },
      { context: "Mutual", text: "We match 💞" },
      { context: "Romance", text: "Love you too 💞" }
    ],
    misunderstandings: ["Romantic context"],
    relatedEmojis: ["two-hearts", "beating-heart", "sparkling-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["revolving", "hearts", "mutual", "love", "together"]
  },
  {
    unicode: "💓",
    name: "Beating Heart",
    slug: "beating-heart",
    shortMeaning: "A heart beating with excitement.",
    detailedMeaning: "The Beating Heart shows a heart with vibration lines, representing a pounding heart from excitement, love, or nervousness.\n\nUsed for expressing excitement, love, and heart-racing moments.",
    usageContexts: ["Excitement", "Love", "Nervous", "Anticipation", "Heart racing"],
    examples: [
      { context: "Excited", text: "Heart is racing 💓" },
      { context: "Love", text: "My heart beats for you 💓" },
      { context: "Nervous", text: "So nervous 💓" }
    ],
    misunderstandings: ["Clear heart/love meaning"],
    relatedEmojis: ["growing-heart", "sparkling-heart", "red-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["beating", "heart", "excited", "love", "pulse"]
  },
  {
    unicode: "💗",
    name: "Growing Heart",
    slug: "growing-heart",
    shortMeaning: "A heart growing larger with love.",
    detailedMeaning: "The Growing Heart shows concentric hearts getting bigger, representing growing love, affection, and overflowing feelings.\n\nUsed for expressing increasing love and overwhelming affection.",
    usageContexts: ["Growing love", "Affection", "Overwhelming", "More", "Expanding"],
    examples: [
      { context: "Love", text: "Love you more 💗" },
      { context: "Growing", text: "My heart is full 💗" },
      { context: "Affection", text: "So much love 💗" }
    ],
    misunderstandings: ["Clear growing love meaning"],
    relatedEmojis: ["beating-heart", "sparkling-heart", "red-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["growing", "heart", "love", "expanding", "more"]
  },
  {
    unicode: "💖",
    name: "Sparkling Heart",
    slug: "sparkling-heart",
    shortMeaning: "A pink heart with sparkles.",
    detailedMeaning: "The Sparkling Heart shows a heart with sparkle effects, representing magical love, excitement, and special affection.\n\nUsed for expressing extra-special love and magical feelings.",
    usageContexts: ["Special love", "Magical", "Sparkle", "Affection", "Cute"],
    examples: [
      { context: "Special", text: "You're special 💖" },
      { context: "Love", text: "Magical love 💖" },
      { context: "Cute", text: "So adorable 💖" }
    ],
    misunderstandings: ["Very positive meaning"],
    relatedEmojis: ["growing-heart", "sparkles", "red-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["sparkling", "heart", "love", "magical", "special"]
  },
  {
    unicode: "💘",
    name: "Heart with Arrow",
    slug: "heart-with-arrow",
    shortMeaning: "Heart pierced by Cupid's arrow.",
    detailedMeaning: "The Heart with Arrow shows Cupid's arrow through a heart, representing falling in love, Valentine's Day, and being struck by love.\n\nUsed for Valentine's Day, expressing that you've fallen for someone.",
    usageContexts: ["Valentine", "Cupid", "Falling in love", "Struck", "Romance"],
    examples: [
      { context: "Valentine", text: "Happy Valentine's 💘" },
      { context: "Love", text: "Struck by love 💘" },
      { context: "Falling", text: "Fell for you 💘" }
    ],
    misunderstandings: ["Very romantic meaning"],
    relatedEmojis: ["red-heart", "cupid", "valentine"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "arrow", "cupid", "valentine", "love"]
  },
  {
    unicode: "💝",
    name: "Heart with Ribbon",
    slug: "heart-with-ribbon",
    shortMeaning: "A heart-shaped gift box.",
    detailedMeaning: "The Heart with Ribbon shows a heart-shaped gift box, representing gift of love, Valentine's presents, and romantic gifts.\n\nUsed for gift-giving occasions, Valentine's Day, and romantic presents.",
    usageContexts: ["Gift", "Valentine", "Present", "Love", "Special"],
    examples: [
      { context: "Gift", text: "For you 💝" },
      { context: "Valentine", text: "Valentine's gift 💝" },
      { context: "Special", text: "Something special 💝" }
    ],
    misunderstandings: ["Gift/present context"],
    relatedEmojis: ["gift", "red-heart", "ribbon"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "ribbon", "gift", "present", "valentine"]
  },
  // ARROWS
  {
    unicode: "⬆️",
    name: "Up Arrow",
    slug: "up-arrow",
    shortMeaning: "Arrow pointing up - increase or upward.",
    detailedMeaning: "The Up Arrow points upward, representing increase, improvement, or upward direction.\n\nUsed for indicating growth, pointing up, or expressing improvement.",
    usageContexts: ["Up", "Increase", "Growth", "Improve", "Direction"],
    examples: [
      { context: "Growth", text: "Numbers are up ⬆️" },
      { context: "Improve", text: "Leveling up ⬆️" },
      { context: "Direction", text: "Look up ⬆️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["down-arrow", "right-arrow", "chart-increasing"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["up", "arrow", "increase", "rise", "growth"]
  },
  {
    unicode: "⬇️",
    name: "Down Arrow",
    slug: "down-arrow",
    shortMeaning: "Arrow pointing down - decrease or downward.",
    detailedMeaning: "The Down Arrow points downward, representing decrease, decline, or downward direction.\n\nUsed for indicating decrease, pointing down, or downloading.",
    usageContexts: ["Down", "Decrease", "Download", "Drop", "Direction"],
    examples: [
      { context: "Download", text: "Download below ⬇️" },
      { context: "Decrease", text: "Prices dropped ⬇️" },
      { context: "Direction", text: "Scroll down ⬇️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["up-arrow", "right-arrow", "chart-decreasing"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["down", "arrow", "decrease", "drop", "download"]
  },
  {
    unicode: "⬅️",
    name: "Left Arrow",
    slug: "left-arrow",
    shortMeaning: "Arrow pointing left - back or previous.",
    detailedMeaning: "The Left Arrow points left, representing going back, previous, or leftward direction.\n\nUsed for indicating back, previous content, or left direction.",
    usageContexts: ["Back", "Previous", "Left", "Return", "Direction"],
    examples: [
      { context: "Back", text: "Go back ⬅️" },
      { context: "Previous", text: "Previous slide ⬅️" },
      { context: "Direction", text: "This way ⬅️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["right-arrow", "up-arrow", "back-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["left", "arrow", "back", "previous", "return"]
  },
  {
    unicode: "↗️",
    name: "Up-Right Arrow",
    slug: "up-right-arrow",
    shortMeaning: "Arrow pointing up and to the right.",
    detailedMeaning: "The Up-Right Arrow points diagonally, often representing growth, progress, or external links.\n\nUsed for indicating growth, external links, and positive trends.",
    usageContexts: ["Growth", "External link", "Progress", "Trend", "Positive"],
    examples: [
      { context: "Growth", text: "Trending up ↗️" },
      { context: "Link", text: "Learn more ↗️" },
      { context: "Progress", text: "Moving forward ↗️" }
    ],
    misunderstandings: ["Often means external link"],
    relatedEmojis: ["up-arrow", "right-arrow", "chart-increasing"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["up-right", "arrow", "growth", "external", "link"]
  },
  {
    unicode: "↩️",
    name: "Right Arrow Curving Left",
    slug: "right-arrow-curving-left",
    shortMeaning: "Arrow curving back - reply or return.",
    detailedMeaning: "This curved arrow represents replying, returning, or going back. It's commonly used as a reply symbol.\n\nUsed for replies, undo actions, and going back.",
    usageContexts: ["Reply", "Return", "Undo", "Back", "Response"],
    examples: [
      { context: "Reply", text: "Replying ↩️" },
      { context: "Return", text: "Going back ↩️" },
      { context: "Undo", text: "Undo that ↩️" }
    ],
    misunderstandings: ["Clear reply/return meaning"],
    relatedEmojis: ["left-arrow", "back-arrow", "repeat"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["reply", "return", "back", "undo", "curve"]
  },
  {
    unicode: "🔄",
    name: "Counterclockwise Arrows Button",
    slug: "counterclockwise-arrows-button",
    shortMeaning: "Circular arrows - refresh or repeat.",
    detailedMeaning: "The Counterclockwise Arrows represent refreshing, repeating, or cycling through something.\n\nUsed for refresh actions, repeating content, and cycles.",
    usageContexts: ["Refresh", "Repeat", "Cycle", "Reload", "Again"],
    examples: [
      { context: "Refresh", text: "Refreshing 🔄" },
      { context: "Repeat", text: "On repeat 🔄" },
      { context: "Reload", text: "Reload page 🔄" }
    ],
    misunderstandings: ["Clear refresh/repeat meaning"],
    relatedEmojis: ["repeat-button", "arrows", "cycle"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["refresh", "repeat", "cycle", "reload", "arrows"]
  },
  // ZODIAC
  {
    unicode: "♈",
    name: "Aries",
    slug: "aries",
    shortMeaning: "Aries zodiac sign - The Ram.",
    detailedMeaning: "Aries is the first zodiac sign (March 21 - April 19), represented by the Ram. Aries are known for being bold, ambitious, and competitive.\n\nUsed by Aries individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Aries", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Aries season ♈" },
      { context: "Identity", text: "Proud Aries ♈" },
      { context: "Astrology", text: "Aries energy ♈" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["taurus", "star", "fire"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["aries", "zodiac", "ram", "astrology", "fire sign"]
  },
  {
    unicode: "♉",
    name: "Taurus",
    slug: "taurus",
    shortMeaning: "Taurus zodiac sign - The Bull.",
    detailedMeaning: "Taurus is the second zodiac sign (April 20 - May 20), represented by the Bull. Taurus are known for being reliable, patient, and practical.\n\nUsed by Taurus individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Taurus", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Taurus season ♉" },
      { context: "Identity", text: "Stubborn Taurus ♉" },
      { context: "Astrology", text: "Earth sign vibes ♉" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["aries", "gemini", "earth"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["taurus", "zodiac", "bull", "astrology", "earth sign"]
  },
  {
    unicode: "♊",
    name: "Gemini",
    slug: "gemini",
    shortMeaning: "Gemini zodiac sign - The Twins.",
    detailedMeaning: "Gemini is the third zodiac sign (May 21 - June 20), represented by the Twins. Geminis are known for being adaptable, curious, and communicative.\n\nUsed by Gemini individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Gemini", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Gemini season ♊" },
      { context: "Identity", text: "Two-faced Gemini ♊" },
      { context: "Astrology", text: "Air sign energy ♊" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["taurus", "cancer", "air"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["gemini", "zodiac", "twins", "astrology", "air sign"]
  },
  {
    unicode: "♋",
    name: "Cancer",
    slug: "cancer",
    shortMeaning: "Cancer zodiac sign - The Crab.",
    detailedMeaning: "Cancer is the fourth zodiac sign (June 21 - July 22), represented by the Crab. Cancers are known for being emotional, nurturing, and protective.\n\nUsed by Cancer individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Cancer", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Cancer season ♋" },
      { context: "Identity", text: "Emotional Cancer ♋" },
      { context: "Astrology", text: "Water sign feels ♋" }
    ],
    misunderstandings: ["Astrological context, not the disease"],
    relatedEmojis: ["gemini", "leo", "crab"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["cancer", "zodiac", "crab", "astrology", "water sign"]
  },
  {
    unicode: "♌",
    name: "Leo",
    slug: "leo",
    shortMeaning: "Leo zodiac sign - The Lion.",
    detailedMeaning: "Leo is the fifth zodiac sign (July 23 - August 22), represented by the Lion. Leos are known for being confident, dramatic, and natural leaders.\n\nUsed by Leo individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Leo", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Leo season ♌" },
      { context: "Identity", text: "King Leo ♌" },
      { context: "Astrology", text: "Fire sign energy ♌" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["cancer", "virgo", "lion"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["leo", "zodiac", "lion", "astrology", "fire sign"]
  },
  {
    unicode: "♍",
    name: "Virgo",
    slug: "virgo",
    shortMeaning: "Virgo zodiac sign - The Maiden.",
    detailedMeaning: "Virgo is the sixth zodiac sign (August 23 - September 22), represented by the Maiden. Virgos are known for being analytical, practical, and detail-oriented.\n\nUsed by Virgo individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Virgo", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Virgo season ♍" },
      { context: "Identity", text: "Perfectionist Virgo ♍" },
      { context: "Astrology", text: "Earth sign vibes ♍" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["leo", "libra", "earth"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["virgo", "zodiac", "maiden", "astrology", "earth sign"]
  },
  {
    unicode: "♎",
    name: "Libra",
    slug: "libra",
    shortMeaning: "Libra zodiac sign - The Scales.",
    detailedMeaning: "Libra is the seventh zodiac sign (September 23 - October 22), represented by the Scales. Libras are known for being diplomatic, fair-minded, and social.\n\nUsed by Libra individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Libra", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Libra season ♎" },
      { context: "Identity", text: "Balanced Libra ♎" },
      { context: "Astrology", text: "Air sign energy ♎" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["virgo", "scorpio", "balance-scale"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["libra", "zodiac", "scales", "astrology", "air sign"]
  },
  {
    unicode: "♏",
    name: "Scorpio",
    slug: "scorpio",
    shortMeaning: "Scorpio zodiac sign - The Scorpion.",
    detailedMeaning: "Scorpio is the eighth zodiac sign (October 23 - November 21), represented by the Scorpion. Scorpios are known for being passionate, determined, and mysterious.\n\nUsed by Scorpio individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Scorpio", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Scorpio season ♏" },
      { context: "Identity", text: "Intense Scorpio ♏" },
      { context: "Astrology", text: "Water sign vibes ♏" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["libra", "sagittarius", "scorpion"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["scorpio", "zodiac", "scorpion", "astrology", "water sign"]
  },
  {
    unicode: "♐",
    name: "Sagittarius",
    slug: "sagittarius",
    shortMeaning: "Sagittarius zodiac sign - The Archer.",
    detailedMeaning: "Sagittarius is the ninth zodiac sign (November 22 - December 21), represented by the Archer. Sagittarians are known for being adventurous, optimistic, and freedom-loving.\n\nUsed by Sagittarius individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Sagittarius", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Sagittarius season ♐" },
      { context: "Identity", text: "Adventurous Sag ♐" },
      { context: "Astrology", text: "Fire sign energy ♐" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["scorpio", "capricorn", "bow-and-arrow"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["sagittarius", "zodiac", "archer", "astrology", "fire sign"]
  },
  {
    unicode: "♑",
    name: "Capricorn",
    slug: "capricorn",
    shortMeaning: "Capricorn zodiac sign - The Sea-Goat.",
    detailedMeaning: "Capricorn is the tenth zodiac sign (December 22 - January 19), represented by the Sea-Goat. Capricorns are known for being disciplined, ambitious, and practical.\n\nUsed by Capricorn individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Capricorn", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Capricorn season ♑" },
      { context: "Identity", text: "Hardworking Cap ♑" },
      { context: "Astrology", text: "Earth sign vibes ♑" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["sagittarius", "aquarius", "goat"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["capricorn", "zodiac", "goat", "astrology", "earth sign"]
  },
  {
    unicode: "♒",
    name: "Aquarius",
    slug: "aquarius",
    shortMeaning: "Aquarius zodiac sign - The Water Bearer.",
    detailedMeaning: "Aquarius is the eleventh zodiac sign (January 20 - February 18), represented by the Water Bearer. Aquarians are known for being independent, progressive, and humanitarian.\n\nUsed by Aquarius individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Aquarius", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Aquarius season ♒" },
      { context: "Identity", text: "Unique Aquarius ♒" },
      { context: "Astrology", text: "Air sign energy ♒" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["capricorn", "pisces", "water"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["aquarius", "zodiac", "water bearer", "astrology", "air sign"]
  },
  {
    unicode: "♓",
    name: "Pisces",
    slug: "pisces",
    shortMeaning: "Pisces zodiac sign - The Fish.",
    detailedMeaning: "Pisces is the twelfth zodiac sign (February 19 - March 20), represented by the Fish. Pisces are known for being intuitive, artistic, and compassionate.\n\nUsed by Pisces individuals and in astrology discussions.",
    usageContexts: ["Zodiac", "Astrology", "Pisces", "Horoscope", "Birthday"],
    examples: [
      { context: "Zodiac", text: "Pisces season ♓" },
      { context: "Identity", text: "Dreamy Pisces ♓" },
      { context: "Astrology", text: "Water sign feels ♓" }
    ],
    misunderstandings: ["Astrological context"],
    relatedEmojis: ["aquarius", "aries", "fish"],
    categorySlug: "symbols",
    subgroup: "zodiac",
    keywords: ["pisces", "zodiac", "fish", "astrology", "water sign"]
  },
  // WARNING & INFORMATION SYMBOLS
  {
    unicode: "⚠️",
    name: "Warning",
    slug: "warning",
    shortMeaning: "Yellow warning triangle - caution!",
    detailedMeaning: "The Warning symbol is a yellow triangle with an exclamation mark, indicating caution, hazard, or important alerts.\n\nUsed for warnings, safety alerts, and important cautions.",
    usageContexts: ["Warning", "Caution", "Alert", "Danger", "Important"],
    examples: [
      { context: "Caution", text: "Be careful ⚠️" },
      { context: "Alert", text: "Warning ⚠️" },
      { context: "Important", text: "Read this first ⚠️" }
    ],
    misunderstandings: ["Clear warning meaning"],
    relatedEmojis: ["exclamation-mark", "no-entry", "stop-sign"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["warning", "caution", "alert", "danger", "hazard"]
  },
  {
    unicode: "🚫",
    name: "Prohibited",
    slug: "prohibited",
    shortMeaning: "Red circle with line - not allowed.",
    detailedMeaning: "The Prohibited symbol shows a red circle with a diagonal line, indicating something is not allowed or forbidden.\n\nUsed for expressing prohibition, rejection, and things that are not allowed.",
    usageContexts: ["Not allowed", "Forbidden", "Reject", "Ban", "Stop"],
    examples: [
      { context: "Forbidden", text: "Not allowed 🚫" },
      { context: "Reject", text: "Nope 🚫" },
      { context: "Ban", text: "No smoking 🚫" }
    ],
    misunderstandings: ["Clear prohibition meaning"],
    relatedEmojis: ["no-entry", "cross-mark", "stop-sign"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["prohibited", "not allowed", "forbidden", "ban", "no"]
  },
  {
    unicode: "⛔",
    name: "No Entry",
    slug: "no-entry",
    shortMeaning: "Red no entry sign - do not enter.",
    detailedMeaning: "The No Entry sign is a solid red circle, indicating that entry is not permitted.\n\nUsed for no entry, off limits, and forbidden access.",
    usageContexts: ["No entry", "Off limits", "Forbidden", "Stop", "Private"],
    examples: [
      { context: "Private", text: "Off limits ⛔" },
      { context: "Stop", text: "Do not enter ⛔" },
      { context: "Forbidden", text: "Keep out ⛔" }
    ],
    misunderstandings: ["Clear no entry meaning"],
    relatedEmojis: ["prohibited", "stop-sign", "warning"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["no entry", "stop", "forbidden", "off limits", "private"]
  },
  {
    unicode: "🛑",
    name: "Stop Sign",
    slug: "stop-sign",
    shortMeaning: "Red octagon stop sign.",
    detailedMeaning: "The Stop Sign is the classic red octagon, indicating to stop immediately.\n\nUsed for stopping, pausing, and demanding attention.",
    usageContexts: ["Stop", "Halt", "Pause", "Wait", "Attention"],
    examples: [
      { context: "Stop", text: "Stop right there 🛑" },
      { context: "Halt", text: "Hold on 🛑" },
      { context: "Attention", text: "Wait 🛑" }
    ],
    misunderstandings: ["Clear stop meaning"],
    relatedEmojis: ["no-entry", "prohibited", "warning"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["stop", "sign", "halt", "wait", "red"]
  },
  {
    unicode: "🔞",
    name: "No One Under Eighteen",
    slug: "no-one-under-eighteen",
    shortMeaning: "18+ age restriction symbol.",
    detailedMeaning: "This symbol indicates content is restricted to adults 18 years and older.\n\nUsed for adult content warnings and age restrictions.",
    usageContexts: ["Adult", "18+", "Mature", "Restricted", "Age limit"],
    examples: [
      { context: "Adult", text: "Adults only 🔞" },
      { context: "Warning", text: "Mature content 🔞" },
      { context: "Restrict", text: "18+ 🔞" }
    ],
    misunderstandings: ["Clear adult content meaning"],
    relatedEmojis: ["prohibited", "warning", "adult"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["18", "adult", "mature", "restricted", "age"]
  },
  {
    unicode: "ℹ️",
    name: "Information",
    slug: "information",
    shortMeaning: "Information symbol - learn more.",
    detailedMeaning: "The Information symbol indicates additional information is available.\n\nUsed for sharing info, help sections, and additional details.",
    usageContexts: ["Info", "Help", "Details", "Learn", "About"],
    examples: [
      { context: "Info", text: "More info ℹ️" },
      { context: "Help", text: "Need help? ℹ️" },
      { context: "Details", text: "Details here ℹ️" }
    ],
    misunderstandings: ["Clear information meaning"],
    relatedEmojis: ["question-mark", "help", "book"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["information", "info", "help", "details", "about"]
  },
  {
    unicode: "🆘",
    name: "SOS Button",
    slug: "sos-button",
    shortMeaning: "SOS emergency signal.",
    detailedMeaning: "The SOS Button represents an emergency distress signal, indicating urgent help is needed.\n\nUsed for emergencies, urgent help requests, and SOS situations.",
    usageContexts: ["Emergency", "Help", "Urgent", "Distress", "SOS"],
    examples: [
      { context: "Emergency", text: "Help needed 🆘" },
      { context: "Urgent", text: "SOS 🆘" },
      { context: "Distress", text: "Urgent situation 🆘" }
    ],
    misunderstandings: ["Should be used for actual urgency"],
    relatedEmojis: ["warning", "exclamation-mark", "ambulance"],
    categorySlug: "symbols",
    subgroup: "alphanum",
    keywords: ["SOS", "emergency", "help", "urgent", "distress"]
  },
  {
    unicode: "🆕",
    name: "NEW Button",
    slug: "new-button",
    shortMeaning: "NEW label - something fresh.",
    detailedMeaning: "The NEW Button indicates something is new, fresh, or recently added.\n\nUsed for announcing new content, products, or features.",
    usageContexts: ["New", "Fresh", "Recent", "Launch", "Update"],
    examples: [
      { context: "Product", text: "New release 🆕" },
      { context: "Content", text: "Just added 🆕" },
      { context: "Feature", text: "New feature 🆕" }
    ],
    misunderstandings: ["Clear new meaning"],
    relatedEmojis: ["sparkles", "star", "announcement"],
    categorySlug: "symbols",
    subgroup: "alphanum",
    keywords: ["new", "fresh", "recent", "launch", "update"]
  },
  {
    unicode: "🆓",
    name: "FREE Button",
    slug: "free-button",
    shortMeaning: "FREE label - no cost.",
    detailedMeaning: "The FREE Button indicates something is available at no cost.\n\nUsed for free offers, promotions, and no-cost items.",
    usageContexts: ["Free", "No cost", "Gratis", "Offer", "Promo"],
    examples: [
      { context: "Offer", text: "Get it free 🆓" },
      { context: "Promo", text: "Free shipping 🆓" },
      { context: "Deal", text: "Free download 🆓" }
    ],
    misunderstandings: ["Clear free meaning"],
    relatedEmojis: ["money-bag", "gift", "tag"],
    categorySlug: "symbols",
    subgroup: "alphanum",
    keywords: ["free", "gratis", "no cost", "offer", "promo"]
  },
  {
    unicode: "🔴",
    name: "Red Circle",
    slug: "red-circle",
    shortMeaning: "A red circle.",
    detailedMeaning: "The Red Circle can represent live streaming, recording, or a simple marker.\n\nUsed for live indicators, recording, and attention markers.",
    usageContexts: ["Live", "Recording", "Marker", "Stop", "Alert"],
    examples: [
      { context: "Live", text: "Going live 🔴" },
      { context: "Record", text: "Recording 🔴" },
      { context: "Alert", text: "Important 🔴" }
    ],
    misunderstandings: ["Often means live streaming"],
    relatedEmojis: ["blue-circle", "green-circle", "record"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["red", "circle", "live", "recording", "alert"]
  },
  {
    unicode: "🟢",
    name: "Green Circle",
    slug: "green-circle",
    shortMeaning: "A green circle.",
    detailedMeaning: "The Green Circle often represents online status, go signal, or approval.\n\nUsed for online indicators, approval, and green lights.",
    usageContexts: ["Online", "Go", "Approved", "Active", "Available"],
    examples: [
      { context: "Online", text: "I'm online 🟢" },
      { context: "Go", text: "Green light 🟢" },
      { context: "Active", text: "Available 🟢" }
    ],
    misunderstandings: ["Often means online/available"],
    relatedEmojis: ["red-circle", "check-mark", "available"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["green", "circle", "online", "go", "available"]
  },
  {
    unicode: "🔵",
    name: "Blue Circle",
    slug: "blue-circle",
    shortMeaning: "A blue circle.",
    detailedMeaning: "The Blue Circle can represent status, markers, or simply the color blue.\n\nUsed for status indicators, markers, and blue themes.",
    usageContexts: ["Status", "Marker", "Blue", "Indicator", "Theme"],
    examples: [
      { context: "Status", text: "Status update 🔵" },
      { context: "Theme", text: "Blue vibes 🔵" },
      { context: "Marker", text: "Mark this 🔵" }
    ],
    misunderstandings: ["General marker"],
    relatedEmojis: ["red-circle", "green-circle", "blue-heart"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["blue", "circle", "marker", "status", "indicator"]
  },
  {
    unicode: "⚪",
    name: "White Circle",
    slug: "white-circle",
    shortMeaning: "A white circle.",
    detailedMeaning: "The White Circle represents neutrality, empty status, or a simple marker.\n\nUsed for neutral status, empty indicators, and markers.",
    usageContexts: ["Neutral", "Empty", "Marker", "Clean", "Simple"],
    examples: [
      { context: "Empty", text: "Slot available ⚪" },
      { context: "Neutral", text: "Neutral status ⚪" },
      { context: "Clean", text: "Clean slate ⚪" }
    ],
    misunderstandings: ["Neutral marker"],
    relatedEmojis: ["black-circle", "red-circle", "white-heart"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["white", "circle", "neutral", "empty", "clean"]
  },
  {
    unicode: "⚫",
    name: "Black Circle",
    slug: "black-circle",
    shortMeaning: "A black circle.",
    detailedMeaning: "The Black Circle can represent a bullet point, marker, or dark theme.\n\nUsed for bullet points, markers, and dark aesthetic.",
    usageContexts: ["Bullet", "Marker", "Dark", "Point", "List"],
    examples: [
      { context: "List", text: "Point one ⚫" },
      { context: "Dark", text: "Dark mode ⚫" },
      { context: "Marker", text: "Mark here ⚫" }
    ],
    misunderstandings: ["General marker"],
    relatedEmojis: ["white-circle", "black-heart", "record-button"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["black", "circle", "bullet", "marker", "dark"]
  },
  // MORE SYMBOLS
  {
    unicode: "♻️",
    name: "Recycling Symbol",
    slug: "recycling-symbol",
    shortMeaning: "Recycling symbol - environmental awareness.",
    detailedMeaning: "The Recycling Symbol represents recycling, sustainability, and environmental consciousness.\n\nUsed for environmental topics, sustainability, and recycling discussions.",
    usageContexts: ["Recycle", "Environment", "Sustainable", "Green", "Eco"],
    examples: [
      { context: "Recycle", text: "Please recycle ♻️" },
      { context: "Eco", text: "Eco-friendly ♻️" },
      { context: "Green", text: "Sustainable choice ♻️" }
    ],
    misunderstandings: ["Clear environmental meaning"],
    relatedEmojis: ["earth", "seedling", "green-heart"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["recycle", "environment", "green", "eco", "sustainable"]
  },
  {
    unicode: "☮️",
    name: "Peace Symbol",
    slug: "peace-symbol",
    shortMeaning: "Peace symbol - peace and love.",
    detailedMeaning: "The Peace Symbol represents peace, anti-war sentiment, and harmony.\n\nUsed for peace messages, hippie culture, and harmony themes.",
    usageContexts: ["Peace", "Harmony", "Love", "Hippie", "Anti-war"],
    examples: [
      { context: "Peace", text: "Peace and love ☮️" },
      { context: "Harmony", text: "Choose peace ☮️" },
      { context: "Vibes", text: "Peaceful vibes ☮️" }
    ],
    misunderstandings: ["Clear peace meaning"],
    relatedEmojis: ["dove", "white-flag", "rainbow"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["peace", "symbol", "love", "harmony", "hippie"]
  },
  {
    unicode: "☯️",
    name: "Yin Yang",
    slug: "yin-yang",
    shortMeaning: "Yin Yang symbol - balance and duality.",
    detailedMeaning: "The Yin Yang represents balance, harmony, and the duality of opposite forces.\n\nUsed for balance themes, Eastern philosophy, and harmony discussions.",
    usageContexts: ["Balance", "Harmony", "Philosophy", "Duality", "Eastern"],
    examples: [
      { context: "Balance", text: "Finding balance ☯️" },
      { context: "Harmony", text: "Harmony in life ☯️" },
      { context: "Philosophy", text: "Zen vibes ☯️" }
    ],
    misunderstandings: ["Eastern philosophical meaning"],
    relatedEmojis: ["peace-symbol", "om", "lotus"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["yin yang", "balance", "harmony", "duality", "zen"]
  },
  {
    unicode: "✝️",
    name: "Latin Cross",
    slug: "latin-cross",
    shortMeaning: "Christian cross symbol.",
    detailedMeaning: "The Latin Cross is the primary symbol of Christianity, representing faith and Jesus Christ.\n\nUsed for Christian content, faith discussions, and religious themes.",
    usageContexts: ["Christianity", "Faith", "Religion", "Church", "Pray"],
    examples: [
      { context: "Faith", text: "Blessed ✝️" },
      { context: "Church", text: "Sunday service ✝️" },
      { context: "Pray", text: "Prayers up ✝️" }
    ],
    misunderstandings: ["Christian religious symbol"],
    relatedEmojis: ["church", "pray", "angel"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["cross", "christian", "faith", "religion", "Jesus"]
  },
  {
    unicode: "☪️",
    name: "Star and Crescent",
    slug: "star-and-crescent",
    shortMeaning: "Islamic symbol - star and crescent moon.",
    detailedMeaning: "The Star and Crescent is associated with Islam, representing the Muslim faith.\n\nUsed for Islamic content, Ramadan, and Muslim community discussions.",
    usageContexts: ["Islam", "Muslim", "Ramadan", "Faith", "Religion"],
    examples: [
      { context: "Ramadan", text: "Ramadan Mubarak ☪️" },
      { context: "Faith", text: "Blessed ☪️" },
      { context: "Muslim", text: "Islamic art ☪️" }
    ],
    misunderstandings: ["Islamic religious symbol"],
    relatedEmojis: ["mosque", "crescent-moon", "pray"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["islam", "muslim", "star", "crescent", "ramadan"]
  },
  {
    unicode: "🕉️",
    name: "Om",
    slug: "om",
    shortMeaning: "Om symbol - Hindu and Buddhist sacred sound.",
    detailedMeaning: "Om is a sacred sound and spiritual symbol in Hinduism, Buddhism, and other religions, representing the universe.\n\nUsed for spiritual content, meditation, and yoga themes.",
    usageContexts: ["Hinduism", "Buddhism", "Meditation", "Yoga", "Spiritual"],
    examples: [
      { context: "Meditation", text: "Om 🕉️" },
      { context: "Yoga", text: "Namaste 🕉️" },
      { context: "Spiritual", text: "Inner peace 🕉️" }
    ],
    misunderstandings: ["Sacred religious symbol"],
    relatedEmojis: ["lotus", "yin-yang", "pray"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["om", "hindu", "buddhist", "meditation", "spiritual"]
  },
  {
    unicode: "✡️",
    name: "Star of David",
    slug: "star-of-david",
    shortMeaning: "Jewish Star of David symbol.",
    detailedMeaning: "The Star of David is the symbol of Judaism and Jewish identity.\n\nUsed for Jewish content, holidays, and cultural discussions.",
    usageContexts: ["Judaism", "Jewish", "Israel", "Faith", "Religion"],
    examples: [
      { context: "Holiday", text: "Happy Hanukkah ✡️" },
      { context: "Faith", text: "Jewish pride ✡️" },
      { context: "Culture", text: "Shabbat Shalom ✡️" }
    ],
    misunderstandings: ["Jewish religious symbol"],
    relatedEmojis: ["synagogue", "menorah", "pray"],
    categorySlug: "symbols",
    subgroup: "religion",
    keywords: ["star of david", "jewish", "judaism", "israel", "faith"]
  },
  {
    unicode: "🎶",
    name: "Musical Notes",
    slug: "musical-notes",
    shortMeaning: "Multiple musical notes - music playing.",
    detailedMeaning: "Musical Notes show multiple notes, representing music playing, singing, or musical content.\n\nUsed for music content, singing, and musical moods.",
    usageContexts: ["Music", "Singing", "Song", "Melody", "Playing"],
    examples: [
      { context: "Music", text: "Listening to music 🎶" },
      { context: "Singing", text: "Singing along 🎶" },
      { context: "Mood", text: "Musical vibes 🎶" }
    ],
    misunderstandings: ["Clear music meaning"],
    relatedEmojis: ["musical-note", "headphones", "microphone"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["music", "notes", "melody", "song", "singing"]
  },
  {
    unicode: "💯",
    name: "Hundred Points",
    slug: "hundred-points",
    shortMeaning: "100 - perfect score or keeping it real.",
    detailedMeaning: "The Hundred Points emoji represents perfection, keeping it real, and 100% authenticity.\n\nUsed for expressing perfection, agreement, and authenticity.",
    usageContexts: ["Perfect", "Real", "Authentic", "Agree", "Facts"],
    examples: [
      { context: "Perfect", text: "Nailed it 💯" },
      { context: "Real", text: "Keeping it 💯" },
      { context: "Agree", text: "Facts 💯" }
    ],
    misunderstandings: ["Slang for authentic/real"],
    relatedEmojis: ["fire", "check-mark", "trophy"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["hundred", "perfect", "real", "authentic", "100"]
  },
  {
    unicode: "💤",
    name: "Zzz",
    slug: "zzz",
    shortMeaning: "Zzz - sleeping or tired.",
    detailedMeaning: "The Zzz symbol represents sleep, tiredness, or boredom. It's the visual representation of snoring.\n\nUsed for expressing tiredness, going to sleep, or boredom.",
    usageContexts: ["Sleep", "Tired", "Bored", "Night", "Rest"],
    examples: [
      { context: "Sleep", text: "Good night 💤" },
      { context: "Tired", text: "So sleepy 💤" },
      { context: "Bored", text: "Boring 💤" }
    ],
    misunderstandings: ["Clear sleep meaning"],
    relatedEmojis: ["sleeping-face", "bed", "moon"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["sleep", "zzz", "tired", "snore", "rest"]
  },
  {
    unicode: "💬",
    name: "Speech Balloon",
    slug: "speech-balloon",
    shortMeaning: "Speech bubble - talking or commenting.",
    detailedMeaning: "The Speech Balloon represents talking, commenting, or dialogue in comics style.\n\nUsed for comments, conversations, and speaking references.",
    usageContexts: ["Talk", "Comment", "Chat", "Speak", "Discuss"],
    examples: [
      { context: "Comment", text: "Comment below 💬" },
      { context: "Chat", text: "Let's chat 💬" },
      { context: "Speak", text: "Speaking up 💬" }
    ],
    misunderstandings: ["Clear speech meaning"],
    relatedEmojis: ["thought-balloon", "left-speech-bubble", "microphone"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["speech", "talk", "comment", "chat", "balloon"]
  },
  {
    unicode: "💭",
    name: "Thought Balloon",
    slug: "thought-balloon",
    shortMeaning: "Thought bubble - thinking or daydreaming.",
    detailedMeaning: "The Thought Balloon represents thinking, daydreaming, or internal thoughts in comics style.\n\nUsed for expressing thoughts, wondering, and pondering.",
    usageContexts: ["Think", "Wonder", "Dream", "Ponder", "Imagine"],
    examples: [
      { context: "Think", text: "Thinking about 💭" },
      { context: "Wonder", text: "I wonder 💭" },
      { context: "Dream", text: "Daydreaming 💭" }
    ],
    misunderstandings: ["Clear thought meaning"],
    relatedEmojis: ["speech-balloon", "thinking-face", "cloud"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["thought", "think", "wonder", "dream", "balloon"]
  },
  {
    unicode: "🔱",
    name: "Trident Emblem",
    slug: "trident-emblem",
    shortMeaning: "Trident symbol - power and the sea.",
    detailedMeaning: "The Trident is associated with Poseidon/Neptune and represents the sea, power, and maritime themes.\n\nUsed for ocean content, power themes, and mythology references.",
    usageContexts: ["Sea", "Power", "Poseidon", "Maritime", "Mythology"],
    examples: [
      { context: "Sea", text: "Ocean king 🔱" },
      { context: "Power", text: "Powerful 🔱" },
      { context: "Myth", text: "Poseidon vibes 🔱" }
    ],
    misunderstandings: ["Greek mythology reference"],
    relatedEmojis: ["ocean", "merman", "water"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["trident", "poseidon", "sea", "power", "neptune"]
  },
  {
    unicode: "⚜️",
    name: "Fleur-de-lis",
    slug: "fleur-de-lis",
    shortMeaning: "Fleur-de-lis symbol - French royalty.",
    detailedMeaning: "The Fleur-de-lis is a stylized lily associated with French royalty, New Orleans, and scouting.\n\nUsed for French content, New Orleans references, and scouts.",
    usageContexts: ["French", "Royalty", "New Orleans", "Scouts", "Elegant"],
    examples: [
      { context: "French", text: "Vive la France ⚜️" },
      { context: "NOLA", text: "New Orleans love ⚜️" },
      { context: "Elegant", text: "Royal vibes ⚜️" }
    ],
    misunderstandings: ["French royalty symbol"],
    relatedEmojis: ["crown", "castle", "french-flag"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["fleur-de-lis", "french", "royalty", "new orleans", "lily"]
  },
  {
    unicode: "©️",
    name: "Copyright",
    slug: "copyright",
    shortMeaning: "Copyright symbol.",
    detailedMeaning: "The Copyright symbol indicates copyrighted content and intellectual property protection.\n\nUsed for copyright notices and content ownership.",
    usageContexts: ["Copyright", "Legal", "Ownership", "Rights", "IP"],
    examples: [
      { context: "Legal", text: "All rights reserved ©️" },
      { context: "Content", text: "Copyright 2024 ©️" },
      { context: "Ownership", text: "Original content ©️" }
    ],
    misunderstandings: ["Legal symbol"],
    relatedEmojis: ["trademark", "registered", "memo"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["copyright", "legal", "rights", "ownership", "IP"]
  },
  {
    unicode: "™️",
    name: "Trade Mark",
    slug: "trade-mark",
    shortMeaning: "Trademark symbol.",
    detailedMeaning: "The Trademark symbol indicates a trademarked brand, name, or phrase.\n\nUsed for trademark notices and brand references.",
    usageContexts: ["Trademark", "Brand", "Legal", "Business", "Name"],
    examples: [
      { context: "Brand", text: "Brand name™️" },
      { context: "Joke", text: "That's my thing™️" },
      { context: "Legal", text: "Trademarked ™️" }
    ],
    misunderstandings: ["Often used humorously"],
    relatedEmojis: ["copyright", "registered", "briefcase"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["trademark", "brand", "legal", "TM", "business"]
  },
  // MORE ARROWS
  {
    unicode: "➡️",
    name: "Right Arrow",
    slug: "right-arrow-symbol",
    shortMeaning: "Arrow pointing right - next or forward.",
    detailedMeaning: "The Right Arrow points right, representing forward movement, next steps, or continuation.\n\nUsed for indicating next, forward, and continuation.",
    usageContexts: ["Next", "Forward", "Continue", "Right", "Direction"],
    examples: [
      { context: "Next", text: "Next slide ➡️" },
      { context: "Forward", text: "Moving forward ➡️" },
      { context: "Continue", text: "Continue ➡️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["left-arrow", "up-arrow", "down-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["right", "arrow", "next", "forward", "direction"]
  },
  {
    unicode: "↕️",
    name: "Up-Down Arrow",
    slug: "up-down-arrow",
    shortMeaning: "Arrow pointing up and down.",
    detailedMeaning: "The Up-Down Arrow points both directions, representing range, variability, or vertical scrolling.\n\nUsed for indicating range, scrolling, and bidirectional movement.",
    usageContexts: ["Range", "Scroll", "Variable", "Both ways", "Vertical"],
    examples: [
      { context: "Range", text: "Prices fluctuate ↕️" },
      { context: "Scroll", text: "Scroll up or down ↕️" },
      { context: "Variable", text: "Results vary ↕️" }
    ],
    misunderstandings: ["Clear bidirectional meaning"],
    relatedEmojis: ["up-arrow", "down-arrow", "left-right-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["up-down", "arrow", "vertical", "range", "scroll"]
  },
  {
    unicode: "↔️",
    name: "Left-Right Arrow",
    slug: "left-right-arrow",
    shortMeaning: "Arrow pointing left and right.",
    detailedMeaning: "The Left-Right Arrow points both directions, representing exchange, comparison, or horizontal navigation.\n\nUsed for indicating comparison, exchange, and horizontal movement.",
    usageContexts: ["Exchange", "Compare", "Both ways", "Horizontal", "Between"],
    examples: [
      { context: "Exchange", text: "Trade between ↔️" },
      { context: "Compare", text: "Compare these ↔️" },
      { context: "Navigate", text: "Swipe left or right ↔️" }
    ],
    misunderstandings: ["Clear bidirectional meaning"],
    relatedEmojis: ["left-arrow", "right-arrow", "up-down-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["left-right", "arrow", "horizontal", "exchange", "compare"]
  },
  {
    unicode: "↖️",
    name: "Up-Left Arrow",
    slug: "up-left-arrow",
    shortMeaning: "Arrow pointing up and to the left.",
    detailedMeaning: "The Up-Left Arrow points diagonally up-left, representing back, previous, or northwest direction.\n\nUsed for indicating back, previous content, or diagonal direction.",
    usageContexts: ["Back", "Previous", "Northwest", "Diagonal", "Return"],
    examples: [
      { context: "Back", text: "Go back ↖️" },
      { context: "Previous", text: "Previous page ↖️" },
      { context: "Direction", text: "This way ↖️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["up-arrow", "left-arrow", "up-right-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["up-left", "arrow", "back", "diagonal", "northwest"]
  },
  {
    unicode: "↘️",
    name: "Down-Right Arrow",
    slug: "down-right-arrow",
    shortMeaning: "Arrow pointing down and to the right.",
    detailedMeaning: "The Down-Right Arrow points diagonally, often indicating decrease with progress or southeast direction.\n\nUsed for trends, directions, and diagonal movement.",
    usageContexts: ["Trend", "Direction", "Southeast", "Diagonal", "Move"],
    examples: [
      { context: "Trend", text: "Trending down ↘️" },
      { context: "Direction", text: "Southeast ↘️" },
      { context: "Move", text: "Move here ↘️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["down-arrow", "right-arrow", "down-left-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["down-right", "arrow", "diagonal", "southeast", "trend"]
  },
  {
    unicode: "↙️",
    name: "Down-Left Arrow",
    slug: "down-left-arrow",
    shortMeaning: "Arrow pointing down and to the left.",
    detailedMeaning: "The Down-Left Arrow points diagonally down-left, representing southwest direction or decline.\n\nUsed for directions, declines, and diagonal movement.",
    usageContexts: ["Direction", "Southwest", "Diagonal", "Decline", "Move"],
    examples: [
      { context: "Direction", text: "Southwest ↙️" },
      { context: "Decline", text: "Going down ↙️" },
      { context: "Move", text: "Move here ↙️" }
    ],
    misunderstandings: ["Clear directional meaning"],
    relatedEmojis: ["down-arrow", "left-arrow", "down-right-arrow"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["down-left", "arrow", "diagonal", "southwest", "decline"]
  },
  {
    unicode: "↪️",
    name: "Left Arrow Curving Right",
    slug: "left-arrow-curving-right",
    shortMeaning: "Arrow curving forward - forward or redo.",
    detailedMeaning: "This curved arrow represents forwarding, sharing, or redo actions.\n\nUsed for forwarding content, share buttons, and redo.",
    usageContexts: ["Forward", "Share", "Redo", "Send", "Continue"],
    examples: [
      { context: "Forward", text: "Forwarding ↪️" },
      { context: "Share", text: "Share this ↪️" },
      { context: "Redo", text: "Redo action ↪️" }
    ],
    misunderstandings: ["Clear forward/share meaning"],
    relatedEmojis: ["right-arrow-curving-left", "share", "repeat"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["forward", "share", "redo", "curve", "arrow"]
  },
  {
    unicode: "🔃",
    name: "Clockwise Vertical Arrows",
    slug: "clockwise-vertical-arrows",
    shortMeaning: "Arrows going clockwise - sync or reload.",
    detailedMeaning: "Clockwise arrows represent synchronization, reloading, or updating content.\n\nUsed for sync, reload, and update actions.",
    usageContexts: ["Sync", "Reload", "Update", "Refresh", "Cycle"],
    examples: [
      { context: "Sync", text: "Syncing now 🔃" },
      { context: "Update", text: "Updating 🔃" },
      { context: "Reload", text: "Reload page 🔃" }
    ],
    misunderstandings: ["Clear sync/reload meaning"],
    relatedEmojis: ["counterclockwise-arrows", "repeat", "cycle"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["clockwise", "sync", "reload", "update", "arrows"]
  },
  {
    unicode: "🔁",
    name: "Repeat Button",
    slug: "repeat-button",
    shortMeaning: "Repeat arrows - loop or repeat.",
    detailedMeaning: "The Repeat Button shows two arrows forming a loop, representing repeat, loop, or continuous play.\n\nUsed for repeat mode in music, looping, and continuous actions.",
    usageContexts: ["Repeat", "Loop", "Music", "Continuous", "Again"],
    examples: [
      { context: "Music", text: "On repeat 🔁" },
      { context: "Loop", text: "Looping this 🔁" },
      { context: "Again", text: "Play again 🔁" }
    ],
    misunderstandings: ["Clear repeat/loop meaning"],
    relatedEmojis: ["repeat-single-button", "shuffle", "musical-note"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["repeat", "loop", "continuous", "music", "again"]
  },
  {
    unicode: "🔂",
    name: "Repeat Single Button",
    slug: "repeat-single-button",
    shortMeaning: "Repeat one - loop single song.",
    detailedMeaning: "The Repeat Single Button shows repeat arrows with a '1', representing single track repeat.\n\nUsed for repeating one song, single item loops.",
    usageContexts: ["Repeat one", "Single loop", "Music", "Song", "Track"],
    examples: [
      { context: "Music", text: "This song on repeat 🔂" },
      { context: "Loop", text: "Playing this one 🔂" },
      { context: "Obsessed", text: "Can't stop listening 🔂" }
    ],
    misunderstandings: ["Clear single repeat meaning"],
    relatedEmojis: ["repeat-button", "musical-note", "headphones"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["repeat", "one", "single", "loop", "song"]
  },
  {
    unicode: "🔀",
    name: "Shuffle Tracks Button",
    slug: "shuffle-tracks-button",
    shortMeaning: "Shuffle arrows - random play.",
    detailedMeaning: "The Shuffle Button shows crossing arrows, representing random or shuffled playback.\n\nUsed for shuffle mode in music, randomization, and mixing up.",
    usageContexts: ["Shuffle", "Random", "Music", "Mix", "Playlist"],
    examples: [
      { context: "Music", text: "Shuffle playlist 🔀" },
      { context: "Random", text: "Random order 🔀" },
      { context: "Mix", text: "Mix it up 🔀" }
    ],
    misunderstandings: ["Clear shuffle meaning"],
    relatedEmojis: ["repeat-button", "musical-notes", "headphones"],
    categorySlug: "symbols",
    subgroup: "arrow",
    keywords: ["shuffle", "random", "mix", "music", "playlist"]
  },
  {
    unicode: "⏩",
    name: "Fast-Forward Button",
    slug: "fast-forward-button",
    shortMeaning: "Fast forward arrows - skip ahead.",
    detailedMeaning: "The Fast-Forward Button shows double right arrows, representing skipping ahead or fast forwarding.\n\nUsed for fast forwarding, skipping ahead, and speeding up.",
    usageContexts: ["Fast forward", "Skip", "Speed up", "Ahead", "Video"],
    examples: [
      { context: "Skip", text: "Skipping ahead ⏩" },
      { context: "Fast", text: "Fast forward ⏩" },
      { context: "Time", text: "Let's skip to the good part ⏩" }
    ],
    misunderstandings: ["Clear fast forward meaning"],
    relatedEmojis: ["rewind-button", "play-button", "next-track-button"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["fast forward", "skip", "ahead", "speed", "forward"]
  },
  {
    unicode: "⏪",
    name: "Rewind Button",
    slug: "rewind-button",
    shortMeaning: "Rewind arrows - go back.",
    detailedMeaning: "The Rewind Button shows double left arrows, representing rewinding or going back.\n\nUsed for rewinding, going back, and revisiting.",
    usageContexts: ["Rewind", "Go back", "Reverse", "Replay", "Video"],
    examples: [
      { context: "Rewind", text: "Let me rewind ⏪" },
      { context: "Back", text: "Going back ⏪" },
      { context: "Replay", text: "Replay that ⏪" }
    ],
    misunderstandings: ["Clear rewind meaning"],
    relatedEmojis: ["fast-forward-button", "play-button", "previous-track-button"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["rewind", "back", "reverse", "replay", "backward"]
  },
  {
    unicode: "⏯️",
    name: "Play or Pause Button",
    slug: "play-or-pause-button",
    shortMeaning: "Play/pause toggle button.",
    detailedMeaning: "The Play or Pause Button combines both symbols, representing media control and toggle.\n\nUsed for media controls, starting/stopping content.",
    usageContexts: ["Play", "Pause", "Media", "Video", "Music"],
    examples: [
      { context: "Media", text: "Press play ⏯️" },
      { context: "Control", text: "Play/pause ⏯️" },
      { context: "Start", text: "Ready to go ⏯️" }
    ],
    misunderstandings: ["Clear media control meaning"],
    relatedEmojis: ["play-button", "pause-button", "stop-button"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["play", "pause", "media", "toggle", "control"]
  },
  {
    unicode: "▶️",
    name: "Play Button",
    slug: "play-button",
    shortMeaning: "Play button - start.",
    detailedMeaning: "The Play Button represents starting, playing, or beginning media playback.\n\nUsed for starting videos, music, and action.",
    usageContexts: ["Play", "Start", "Begin", "Video", "Music"],
    examples: [
      { context: "Play", text: "Press play ▶️" },
      { context: "Start", text: "Let's go ▶️" },
      { context: "Video", text: "Watch now ▶️" }
    ],
    misunderstandings: ["Clear play meaning"],
    relatedEmojis: ["pause-button", "stop-button", "fast-forward-button"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["play", "start", "begin", "video", "music"]
  },
  {
    unicode: "⏸️",
    name: "Pause Button",
    slug: "pause-button",
    shortMeaning: "Pause button - stop temporarily.",
    detailedMeaning: "The Pause Button represents temporary stop, break, or pause.\n\nUsed for pausing content, taking breaks, and waiting.",
    usageContexts: ["Pause", "Break", "Wait", "Stop", "Hold"],
    examples: [
      { context: "Pause", text: "Taking a pause ⏸️" },
      { context: "Break", text: "Break time ⏸️" },
      { context: "Wait", text: "Hold on ⏸️" }
    ],
    misunderstandings: ["Clear pause meaning"],
    relatedEmojis: ["play-button", "stop-button", "break"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["pause", "stop", "break", "wait", "hold"]
  },
  {
    unicode: "⏹️",
    name: "Stop Button",
    slug: "stop-button",
    shortMeaning: "Stop button - end playback.",
    detailedMeaning: "The Stop Button represents complete stop, ending, or termination.\n\nUsed for stopping content, ending actions, and completion.",
    usageContexts: ["Stop", "End", "Finish", "Terminate", "Complete"],
    examples: [
      { context: "Stop", text: "Stop here ⏹️" },
      { context: "End", text: "That's it ⏹️" },
      { context: "Finish", text: "Done ⏹️" }
    ],
    misunderstandings: ["Clear stop meaning"],
    relatedEmojis: ["play-button", "pause-button", "end"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["stop", "end", "finish", "terminate", "done"]
  },
  {
    unicode: "⏺️",
    name: "Record Button",
    slug: "record-button",
    shortMeaning: "Record button - recording.",
    detailedMeaning: "The Record Button represents recording, capturing, or documenting.\n\nUsed for recording content, live sessions, and capturing moments.",
    usageContexts: ["Record", "Capture", "Live", "Document", "Save"],
    examples: [
      { context: "Record", text: "Recording now ⏺️" },
      { context: "Live", text: "Going live ⏺️" },
      { context: "Capture", text: "Capturing this ⏺️" }
    ],
    misunderstandings: ["Clear recording meaning"],
    relatedEmojis: ["red-circle", "camera", "microphone"],
    categorySlug: "symbols",
    subgroup: "av-symbol",
    keywords: ["record", "recording", "live", "capture", "save"]
  },
  // MORE HEARTS
  {
    unicode: "🩷",
    name: "Pink Heart",
    slug: "pink-heart",
    shortMeaning: "A pink heart - cute affection.",
    detailedMeaning: "The Pink Heart represents gentle love, cuteness, and soft affection.\n\nUsed for cute content, soft love, and feminine affection.",
    usageContexts: ["Cute", "Soft", "Affection", "Pink", "Sweet"],
    examples: [
      { context: "Cute", text: "So cute 🩷" },
      { context: "Love", text: "Love you 🩷" },
      { context: "Sweet", text: "Sweet vibes 🩷" }
    ],
    misunderstandings: ["Clear cute/love meaning"],
    relatedEmojis: ["red-heart", "sparkling-heart", "two-hearts"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["pink", "heart", "cute", "soft", "affection"]
  },
  {
    unicode: "🩵",
    name: "Light Blue Heart",
    slug: "light-blue-heart",
    shortMeaning: "A light blue heart - calm love.",
    detailedMeaning: "The Light Blue Heart represents calm, peaceful love and tranquility.\n\nUsed for peaceful affection, calm vibes, and cool love.",
    usageContexts: ["Calm", "Peace", "Cool", "Tranquil", "Light"],
    examples: [
      { context: "Calm", text: "Peaceful vibes 🩵" },
      { context: "Love", text: "Calm love 🩵" },
      { context: "Cool", text: "Cool and collected 🩵" }
    ],
    misunderstandings: ["Clear calm/peaceful meaning"],
    relatedEmojis: ["blue-heart", "white-heart", "peace-symbol"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["light blue", "heart", "calm", "peace", "tranquil"]
  },
  {
    unicode: "🩶",
    name: "Grey Heart",
    slug: "grey-heart",
    shortMeaning: "A grey heart - neutral affection.",
    detailedMeaning: "The Grey Heart represents neutral affection, loss, or a subdued emotional state.\n\nUsed for neutral feelings, loss, and muted emotions.",
    usageContexts: ["Neutral", "Loss", "Subdued", "Grey", "Muted"],
    examples: [
      { context: "Neutral", text: "Feeling grey 🩶" },
      { context: "Loss", text: "Missing you 🩶" },
      { context: "Muted", text: "Quiet love 🩶" }
    ],
    misunderstandings: ["Can mean sadness or loss"],
    relatedEmojis: ["white-heart", "black-heart", "broken-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["grey", "heart", "neutral", "loss", "muted"]
  },
  {
    unicode: "❤️‍🔥",
    name: "Heart on Fire",
    slug: "heart-on-fire-symbol",
    shortMeaning: "A heart on fire - passionate love.",
    detailedMeaning: "The Heart on Fire represents intense passion, burning desire, and fiery love.\n\nUsed for expressing intense romantic feelings and passion.",
    usageContexts: ["Passion", "Intense", "Fire", "Desire", "Hot"],
    examples: [
      { context: "Passion", text: "Burning for you ❤️‍🔥" },
      { context: "Intense", text: "Intense feelings ❤️‍🔥" },
      { context: "Hot", text: "On fire ❤️‍🔥" }
    ],
    misunderstandings: ["Very intense romantic meaning"],
    relatedEmojis: ["red-heart", "fire", "smiling-face-with-hearts"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "fire", "passion", "intense", "burning"]
  },
  {
    unicode: "💔",
    name: "Broken Heart Symbol",
    slug: "broken-heart-symbol",
    shortMeaning: "A broken heart - heartbreak and sadness.",
    detailedMeaning: "The Broken Heart represents heartbreak, emotional pain, and loss.\n\nUsed for expressing sadness, breakups, and emotional pain.",
    usageContexts: ["Heartbreak", "Sad", "Loss", "Pain", "Breakup"],
    examples: [
      { context: "Breakup", text: "Heart is broken 💔" },
      { context: "Sad", text: "So sad 💔" },
      { context: "Loss", text: "Missing you 💔" }
    ],
    misunderstandings: ["Clear heartbreak meaning"],
    relatedEmojis: ["mending-heart", "crying-face", "red-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["broken", "heart", "sad", "breakup", "pain"]
  },
  {
    unicode: "❣️",
    name: "Heart Exclamation",
    slug: "heart-exclamation",
    shortMeaning: "A heart exclamation mark - strong love.",
    detailedMeaning: "The Heart Exclamation represents emphatic love, strong affection, and heartfelt emphasis.\n\nUsed for emphasizing love and strong affection.",
    usageContexts: ["Emphasis", "Strong love", "Affection", "Heartfelt", "Exclaim"],
    examples: [
      { context: "Love", text: "Love this ❣️" },
      { context: "Emphasis", text: "So important ❣️" },
      { context: "Affection", text: "Really love you ❣️" }
    ],
    misunderstandings: ["Clear emphatic love meaning"],
    relatedEmojis: ["red-heart", "exclamation-mark", "sparkling-heart"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "exclamation", "love", "emphasis", "strong"]
  },
  {
    unicode: "💟",
    name: "Heart Decoration",
    slug: "heart-decoration",
    shortMeaning: "A decorative heart.",
    detailedMeaning: "The Heart Decoration shows a heart in a decorative frame, representing love in a more formal or aesthetic context.\n\nUsed for decorative love expressions and aesthetic content.",
    usageContexts: ["Decoration", "Aesthetic", "Love", "Design", "Pretty"],
    examples: [
      { context: "Aesthetic", text: "Pretty vibes 💟" },
      { context: "Decoration", text: "Decorating 💟" },
      { context: "Love", text: "Love this look 💟" }
    ],
    misunderstandings: ["Decorative heart style"],
    relatedEmojis: ["sparkling-heart", "red-heart", "sparkles"],
    categorySlug: "symbols",
    subgroup: "heart",
    keywords: ["heart", "decoration", "aesthetic", "pretty", "design"]
  },
  // MORE GEOMETRIC SHAPES
  {
    unicode: "🟠",
    name: "Orange Circle",
    slug: "orange-circle",
    shortMeaning: "An orange circle.",
    detailedMeaning: "The Orange Circle can represent warning status, away mode, or a marker.\n\nUsed for status indicators, warnings, and markers.",
    usageContexts: ["Status", "Away", "Warning", "Marker", "Orange"],
    examples: [
      { context: "Status", text: "Away 🟠" },
      { context: "Warning", text: "Caution 🟠" },
      { context: "Marker", text: "Mark this 🟠" }
    ],
    misunderstandings: ["Often means away/idle status"],
    relatedEmojis: ["yellow-circle", "red-circle", "orange-heart"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["orange", "circle", "away", "status", "warning"]
  },
  {
    unicode: "🟡",
    name: "Yellow Circle",
    slug: "yellow-circle",
    shortMeaning: "A yellow circle.",
    detailedMeaning: "The Yellow Circle can represent caution, pending status, or a marker.\n\nUsed for caution, pending indicators, and markers.",
    usageContexts: ["Caution", "Pending", "Yellow", "Status", "Marker"],
    examples: [
      { context: "Caution", text: "Proceed with care 🟡" },
      { context: "Pending", text: "Pending review 🟡" },
      { context: "Marker", text: "Note this 🟡" }
    ],
    misunderstandings: ["Often means pending"],
    relatedEmojis: ["orange-circle", "green-circle", "yellow-heart"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["yellow", "circle", "caution", "pending", "status"]
  },
  {
    unicode: "🟣",
    name: "Purple Circle",
    slug: "purple-circle",
    shortMeaning: "A purple circle.",
    detailedMeaning: "The Purple Circle represents creativity, royalty, or a marker.\n\nUsed for creative themes, royalty, and markers.",
    usageContexts: ["Creative", "Royal", "Purple", "Marker", "Special"],
    examples: [
      { context: "Creative", text: "Creative vibes 🟣" },
      { context: "Royal", text: "Royal purple 🟣" },
      { context: "Marker", text: "Mark this 🟣" }
    ],
    misunderstandings: ["General marker"],
    relatedEmojis: ["purple-heart", "blue-circle", "sparkles"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["purple", "circle", "creative", "royal", "marker"]
  },
  {
    unicode: "🟤",
    name: "Brown Circle",
    slug: "brown-circle",
    shortMeaning: "A brown circle.",
    detailedMeaning: "The Brown Circle represents earth, nature, or neutral markers.\n\nUsed for earth themes, natural elements, and markers.",
    usageContexts: ["Earth", "Natural", "Brown", "Marker", "Neutral"],
    examples: [
      { context: "Earth", text: "Earth tones 🟤" },
      { context: "Natural", text: "Natural vibes 🟤" },
      { context: "Marker", text: "Note this 🟤" }
    ],
    misunderstandings: ["General marker"],
    relatedEmojis: ["brown-heart", "black-circle", "earth"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["brown", "circle", "earth", "natural", "marker"]
  },
  {
    unicode: "🔶",
    name: "Large Orange Diamond",
    slug: "large-orange-diamond",
    shortMeaning: "An orange diamond shape.",
    detailedMeaning: "The Large Orange Diamond is a geometric shape used for emphasis or decoration.\n\nUsed for bullet points, emphasis, and decoration.",
    usageContexts: ["Emphasis", "Bullet", "Decoration", "Orange", "Shape"],
    examples: [
      { context: "Bullet", text: "Point one 🔶" },
      { context: "Emphasis", text: "Important 🔶" },
      { context: "Design", text: "Decorating 🔶" }
    ],
    misunderstandings: ["Decorative shape"],
    relatedEmojis: ["small-orange-diamond", "large-blue-diamond", "orange-circle"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["orange", "diamond", "shape", "bullet", "emphasis"]
  },
  {
    unicode: "🔷",
    name: "Large Blue Diamond",
    slug: "large-blue-diamond",
    shortMeaning: "A blue diamond shape.",
    detailedMeaning: "The Large Blue Diamond is a geometric shape used for emphasis or decoration.\n\nUsed for bullet points, emphasis, and decoration.",
    usageContexts: ["Emphasis", "Bullet", "Decoration", "Blue", "Shape"],
    examples: [
      { context: "Bullet", text: "Point one 🔷" },
      { context: "Emphasis", text: "Key item 🔷" },
      { context: "Design", text: "Decorating 🔷" }
    ],
    misunderstandings: ["Decorative shape"],
    relatedEmojis: ["small-blue-diamond", "large-orange-diamond", "blue-circle"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["blue", "diamond", "shape", "bullet", "emphasis"]
  },
  {
    unicode: "🔸",
    name: "Small Orange Diamond",
    slug: "small-orange-diamond",
    shortMeaning: "A small orange diamond.",
    detailedMeaning: "The Small Orange Diamond is a geometric shape for bullet points and emphasis.\n\nUsed for lists, bullets, and small emphasis.",
    usageContexts: ["Bullet", "List", "Small", "Orange", "Point"],
    examples: [
      { context: "List", text: "Item one 🔸" },
      { context: "Point", text: "Sub-point 🔸" },
      { context: "Emphasis", text: "Note 🔸" }
    ],
    misunderstandings: ["Decorative bullet"],
    relatedEmojis: ["large-orange-diamond", "small-blue-diamond", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["small", "orange", "diamond", "bullet", "point"]
  },
  {
    unicode: "🔹",
    name: "Small Blue Diamond",
    slug: "small-blue-diamond",
    shortMeaning: "A small blue diamond.",
    detailedMeaning: "The Small Blue Diamond is a geometric shape for bullet points and emphasis.\n\nUsed for lists, bullets, and small emphasis.",
    usageContexts: ["Bullet", "List", "Small", "Blue", "Point"],
    examples: [
      { context: "List", text: "Item one 🔹" },
      { context: "Point", text: "Sub-point 🔹" },
      { context: "Emphasis", text: "Note 🔹" }
    ],
    misunderstandings: ["Decorative bullet"],
    relatedEmojis: ["large-blue-diamond", "small-orange-diamond", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["small", "blue", "diamond", "bullet", "point"]
  },
  {
    unicode: "▪️",
    name: "Black Small Square",
    slug: "black-small-square",
    shortMeaning: "A small black square.",
    detailedMeaning: "The Black Small Square is used for bullet points and simple markers.\n\nUsed for lists, bullets, and minimal markers.",
    usageContexts: ["Bullet", "List", "Marker", "Square", "Point"],
    examples: [
      { context: "List", text: "Item ▪️" },
      { context: "Bullet", text: "Point ▪️" },
      { context: "Marker", text: "Mark ▪️" }
    ],
    misunderstandings: ["Simple bullet point"],
    relatedEmojis: ["white-small-square", "black-circle", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["black", "square", "small", "bullet", "marker"]
  },
  {
    unicode: "▫️",
    name: "White Small Square",
    slug: "white-small-square",
    shortMeaning: "A small white square.",
    detailedMeaning: "The White Small Square is used for bullet points and simple markers.\n\nUsed for lists, bullets, and minimal markers.",
    usageContexts: ["Bullet", "List", "Marker", "Square", "Point"],
    examples: [
      { context: "List", text: "Item ▫️" },
      { context: "Bullet", text: "Point ▫️" },
      { context: "Marker", text: "Mark ▫️" }
    ],
    misunderstandings: ["Simple bullet point"],
    relatedEmojis: ["black-small-square", "white-circle", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["white", "square", "small", "bullet", "marker"]
  },
  {
    unicode: "◾",
    name: "Black Medium-Small Square",
    slug: "black-medium-small-square",
    shortMeaning: "A black medium-small square.",
    detailedMeaning: "The Black Medium-Small Square is used for bullet points and emphasis.\n\nUsed for lists and medium emphasis.",
    usageContexts: ["Bullet", "List", "Medium", "Square", "Emphasis"],
    examples: [
      { context: "List", text: "Item ◾" },
      { context: "Emphasis", text: "Point ◾" },
      { context: "Marker", text: "Mark ◾" }
    ],
    misunderstandings: ["Decorative bullet"],
    relatedEmojis: ["black-small-square", "black-large-square", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["black", "square", "medium", "bullet", "marker"]
  },
  {
    unicode: "◽",
    name: "White Medium-Small Square",
    slug: "white-medium-small-square",
    shortMeaning: "A white medium-small square.",
    detailedMeaning: "The White Medium-Small Square is used for bullet points and emphasis.\n\nUsed for lists and medium emphasis.",
    usageContexts: ["Bullet", "List", "Medium", "Square", "Emphasis"],
    examples: [
      { context: "List", text: "Item ◽" },
      { context: "Emphasis", text: "Point ◽" },
      { context: "Marker", text: "Mark ◽" }
    ],
    misunderstandings: ["Decorative bullet"],
    relatedEmojis: ["white-small-square", "white-large-square", "bullet"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["white", "square", "medium", "bullet", "marker"]
  },
  {
    unicode: "⬛",
    name: "Black Large Square",
    slug: "black-large-square",
    shortMeaning: "A large black square.",
    detailedMeaning: "The Black Large Square is a solid geometric shape for emphasis or dark themes.\n\nUsed for emphasis, dark themes, and large markers.",
    usageContexts: ["Dark", "Emphasis", "Large", "Square", "Block"],
    examples: [
      { context: "Dark", text: "Dark theme ⬛" },
      { context: "Block", text: "Block this ⬛" },
      { context: "Emphasis", text: "Important ⬛" }
    ],
    misunderstandings: ["Large geometric shape"],
    relatedEmojis: ["black-circle", "black-heart", "black-medium-small-square"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["black", "square", "large", "block", "dark"]
  },
  {
    unicode: "⬜",
    name: "White Large Square",
    slug: "white-large-square",
    shortMeaning: "A large white square.",
    detailedMeaning: "The White Large Square is a solid geometric shape for emphasis or light themes.\n\nUsed for emphasis, light themes, and large markers.",
    usageContexts: ["Light", "Emphasis", "Large", "Square", "Block"],
    examples: [
      { context: "Light", text: "Light theme ⬜" },
      { context: "Block", text: "Blank space ⬜" },
      { context: "Emphasis", text: "Clean slate ⬜" }
    ],
    misunderstandings: ["Large geometric shape"],
    relatedEmojis: ["white-circle", "white-heart", "white-medium-small-square"],
    categorySlug: "symbols",
    subgroup: "geometric",
    keywords: ["white", "square", "large", "block", "clean"]
  },
  {
    unicode: "⭐",
    name: "Star",
    slug: "star",
    shortMeaning: "A yellow star.",
    detailedMeaning: "The Star represents excellence, favorites, and rating.\n\nUsed for ratings, favorites, and highlighting quality.",
    usageContexts: ["Favorite", "Rating", "Excellent", "Star", "Quality"],
    examples: [
      { context: "Rating", text: "Five stars ⭐" },
      { context: "Favorite", text: "My favorite ⭐" },
      { context: "Quality", text: "Top quality ⭐" }
    ],
    misunderstandings: ["Clear star/rating meaning"],
    relatedEmojis: ["glowing-star", "sparkles", "trophy"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["star", "favorite", "rating", "excellent", "quality"]
  },
  {
    unicode: "🌟",
    name: "Glowing Star",
    slug: "glowing-star",
    shortMeaning: "A glowing star with sparkles.",
    detailedMeaning: "The Glowing Star represents something special, outstanding, or magical.\n\nUsed for highlighting excellence and special moments.",
    usageContexts: ["Special", "Outstanding", "Magical", "Glow", "Shine"],
    examples: [
      { context: "Special", text: "You're a star 🌟" },
      { context: "Outstanding", text: "Amazing 🌟" },
      { context: "Magical", text: "Magical night 🌟" }
    ],
    misunderstandings: ["Clear excellence meaning"],
    relatedEmojis: ["star", "sparkles", "trophy"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["glowing", "star", "special", "outstanding", "shine"]
  },
  {
    unicode: "✨",
    name: "Sparkles",
    slug: "sparkles",
    shortMeaning: "Sparkling stars - magic and excitement.",
    detailedMeaning: "Sparkles represent magic, excitement, and something special or new.\n\nUsed for emphasizing something magical, new, or exciting.",
    usageContexts: ["Magic", "New", "Exciting", "Special", "Clean"],
    examples: [
      { context: "New", text: "Brand new ✨" },
      { context: "Magic", text: "Magical ✨" },
      { context: "Clean", text: "Sparkling clean ✨" }
    ],
    misunderstandings: ["Very versatile emoji"],
    relatedEmojis: ["star", "glowing-star", "fire"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["sparkles", "magic", "new", "exciting", "special"]
  },
  {
    unicode: "💫",
    name: "Dizzy",
    slug: "dizzy",
    shortMeaning: "A shooting star or dizzy symbol.",
    detailedMeaning: "The Dizzy emoji represents dizziness, stars when hit, or a shooting star effect.\n\nUsed for expressing dizziness, amazement, or impact.",
    usageContexts: ["Dizzy", "Amazed", "Star", "Impact", "Spinning"],
    examples: [
      { context: "Dizzy", text: "Feeling dizzy 💫" },
      { context: "Amazed", text: "Mind blown 💫" },
      { context: "Star", text: "Shooting star 💫" }
    ],
    misunderstandings: ["Can mean both dizzy and star"],
    relatedEmojis: ["star", "sparkles", "face-with-spiral-eyes"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["dizzy", "star", "shooting", "spinning", "amazed"]
  },
  {
    unicode: "🔥",
    name: "Fire",
    slug: "fire",
    shortMeaning: "Fire - hot, lit, or trending.",
    detailedMeaning: "Fire represents something hot, exciting, trendy, or excellent in modern slang.\n\nUsed for expressing that something is amazing, trending, or 'lit.'",
    usageContexts: ["Hot", "Lit", "Trending", "Excellent", "Amazing"],
    examples: [
      { context: "Hot", text: "This is fire 🔥" },
      { context: "Trending", text: "Trending 🔥" },
      { context: "Excellent", text: "So good 🔥" }
    ],
    misunderstandings: ["Slang for excellent"],
    relatedEmojis: ["hundred-points", "sparkles", "star"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["fire", "hot", "lit", "trending", "amazing"]
  },
  {
    unicode: "💥",
    name: "Collision",
    slug: "collision",
    shortMeaning: "An explosion or impact.",
    detailedMeaning: "The Collision emoji represents an explosion, impact, or something mind-blowing.\n\nUsed for expressing impact, excitement, and explosive content.",
    usageContexts: ["Explosion", "Impact", "Boom", "Exciting", "Mind-blowing"],
    examples: [
      { context: "Impact", text: "Boom 💥" },
      { context: "Exciting", text: "Explosive news 💥" },
      { context: "Mind-blowing", text: "Mind blown 💥" }
    ],
    misunderstandings: ["Clear impact meaning"],
    relatedEmojis: ["fire", "sparkles", "exclamation-mark"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["collision", "explosion", "boom", "impact", "bang"]
  },
  // FLAGS
  {
    unicode: "🏳️",
    name: "White Flag",
    slug: "white-flag",
    shortMeaning: "A white flag symbolizing peace, surrender, or truce.",
    detailedMeaning: "The White Flag emoji represents surrender, peace, or a truce. Historically used in warfare to indicate the desire to negotiate or surrender, it has evolved to symbolize peace and the end of conflict.\n\nCommonly used to express giving up (in a humorous way), asking for peace in an argument, or representing pacifism and peaceful intentions.",
    usageContexts: ["Surrender", "Peace", "Truce", "Giving up", "Pacifism"],
    examples: [
      { context: "Surrender", text: "I give up, you win 🏳️" },
      { context: "Peace", text: "Can we call a truce? 🏳️" },
      { context: "Humor", text: "Monday already won 🏳️" }
    ],
    misunderstandings: ["May be confused with other plain flags"],
    relatedEmojis: ["peace-symbol", "dove", "checkered-flag"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["white", "surrender", "peace", "truce", "flag"]
  },
  {
    unicode: "🏴",
    name: "Black Flag",
    slug: "black-flag",
    shortMeaning: "A black flag often associated with anarchy or piracy.",
    detailedMeaning: "The Black Flag emoji is a solid black flag that can represent various concepts including anarchy, piracy, or rebellion. In some contexts, it's associated with mourning or protest.\n\nUsed in discussions about alternative movements, pirate themes, or as a symbol of defiance and non-conformity.",
    usageContexts: ["Anarchy", "Piracy", "Rebellion", "Protest", "Alternative culture"],
    examples: [
      { context: "Pirate", text: "Pirate life 🏴" },
      { context: "Rebellion", text: "Against the system 🏴" },
      { context: "Metal", text: "Black metal vibes 🏴" }
    ],
    misunderstandings: ["Can have political connotations"],
    relatedEmojis: ["pirate-flag", "skull-and-crossbones", "white-flag"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["black", "anarchy", "pirate", "rebellion", "flag"]
  },
  {
    unicode: "🏴‍☠️",
    name: "Pirate Flag",
    slug: "pirate-flag",
    shortMeaning: "The Jolly Roger - the classic skull and crossbones pirate flag.",
    detailedMeaning: "The Pirate Flag emoji shows the iconic Jolly Roger - a black flag with a white skull and crossbones. This symbol has been associated with pirates since the early 18th century.\n\nUsed for pirate-themed content, expressing rebellion, adventure, or a love for pirate culture in movies, games, and literature.",
    usageContexts: ["Pirates", "Adventure", "Rebellion", "Gaming", "Movies"],
    examples: [
      { context: "Pirate", text: "Ahoy matey 🏴‍☠️" },
      { context: "Gaming", text: "Playing Sea of Thieves 🏴‍☠️" },
      { context: "Adventure", text: "Treasure hunting 🏴‍☠️" }
    ],
    misunderstandings: ["Clear pirate reference"],
    relatedEmojis: ["skull-and-crossbones", "black-flag", "ship"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["pirate", "jolly roger", "skull", "crossbones", "adventure"]
  },
  {
    unicode: "🏁",
    name: "Chequered Flag",
    slug: "chequered-flag",
    shortMeaning: "A checkered flag signaling the finish line or completion.",
    detailedMeaning: "The Chequered Flag emoji represents the finish line in racing, particularly motorsports. The black and white checkered pattern is universally recognized as the signal for race completion.\n\nUsed to celebrate finishing something, reaching goals, motorsport discussions, or indicating the end of a task or project.",
    usageContexts: ["Racing", "Finish line", "Completion", "Goals", "Motorsports"],
    examples: [
      { context: "Completion", text: "Project done 🏁" },
      { context: "Racing", text: "F1 race day 🏁" },
      { context: "Achievement", text: "Finally finished the marathon 🏁" }
    ],
    misunderstandings: ["Clear racing/finish meaning"],
    relatedEmojis: ["racing-car", "trophy", "medal"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["racing", "finish", "checkered", "motorsport", "complete"]
  },
  {
    unicode: "🚩",
    name: "Triangular Flag",
    slug: "triangular-flag",
    shortMeaning: "A red triangular flag often meaning 'red flag' or warning.",
    detailedMeaning: "The Triangular Flag emoji has gained significant popularity as 'red flag' slang, indicating warning signs in relationships, situations, or behaviors. Originally representing location markers or golf course flags.\n\nExtremely popular in social media to point out concerning behaviors or warning signs, especially in dating and relationship contexts.",
    usageContexts: ["Red flags", "Warnings", "Dating advice", "Location marking", "Golf"],
    examples: [
      { context: "Warning", text: "He doesn't like dogs 🚩" },
      { context: "Red flag", text: "That's a major red flag 🚩" },
      { context: "Social media", text: "Says they have no drama 🚩🚩🚩" }
    ],
    misunderstandings: ["Originally meant location marker, now primarily means warning"],
    relatedEmojis: ["warning", "stop-sign", "no-entry"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["red flag", "warning", "danger", "alert", "triangular"]
  },
  {
    unicode: "🎌",
    name: "Crossed Flags",
    slug: "crossed-flags",
    shortMeaning: "Two crossed Japanese flags representing celebration in Japan.",
    detailedMeaning: "The Crossed Flags emoji shows two Japanese flags crossed, traditionally used to represent Japanese celebrations and national holidays. It's a symbol of festivity and national pride in Japan.\n\nUsed during Japanese holidays, cultural events, or to express connection to Japanese culture and celebrations.",
    usageContexts: ["Japanese holidays", "Celebrations", "Cultural events", "National pride", "Festivals"],
    examples: [
      { context: "Holiday", text: "Happy Children's Day 🎌" },
      { context: "Culture", text: "Japanese festival time 🎌" },
      { context: "Pride", text: "Celebrating Japan 🎌" }
    ],
    misunderstandings: ["Specifically Japanese, not generic celebration"],
    relatedEmojis: ["flag-japan", "cherry-blossom", "mount-fuji"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["japan", "celebration", "holiday", "crossed", "festival"]
  },
  {
    unicode: "🇦🇫",
    name: "Flag: Afghanistan",
    slug: "flag-afghanistan",
    shortMeaning: "The national flag of Afghanistan.",
    detailedMeaning: "The Flag of Afghanistan emoji displays the national flag of Afghanistan. The flag features three vertical stripes of black, red, and green with the national emblem in the center.\n\nUsed to represent Afghanistan, its people, culture, and in discussions about the country.",
    usageContexts: ["Afghanistan", "National identity", "Culture", "Travel", "Sports"],
    examples: [
      { context: "Pride", text: "Afghan pride 🇦🇫" },
      { context: "Sports", text: "Go Afghanistan 🇦🇫" },
      { context: "Culture", text: "Afghan heritage 🇦🇫" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["globe-showing-asia-australia"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["afghanistan", "afghan", "flag", "country", "nation"]
  },
  {
    unicode: "🇦🇷",
    name: "Flag: Argentina",
    slug: "flag-argentina",
    shortMeaning: "The national flag of Argentina.",
    detailedMeaning: "The Flag of Argentina emoji shows the light blue and white striped flag with the Sun of May in the center. Argentina is known for football, tango, and its vibrant culture.\n\nUsed to represent Argentina, especially during football matches, cultural discussions, or by Argentinians expressing national pride.",
    usageContexts: ["Argentina", "Football", "Tango", "South America", "Sports"],
    examples: [
      { context: "Football", text: "Vamos Argentina 🇦🇷" },
      { context: "Pride", text: "Argentinian and proud 🇦🇷" },
      { context: "Culture", text: "Tango night 🇦🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["soccer-ball", "mate", "globe-showing-americas"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["argentina", "argentine", "flag", "south america", "football"]
  },
  {
    unicode: "🇦🇺",
    name: "Flag: Australia",
    slug: "flag-australia",
    shortMeaning: "The national flag of Australia.",
    detailedMeaning: "The Flag of Australia emoji displays the blue flag with the Union Jack, the Commonwealth Star, and the Southern Cross constellation. Australia is known for its unique wildlife and outdoor culture.\n\nUsed to represent Australia, Australians abroad, discussions about the country, and during sporting events.",
    usageContexts: ["Australia", "Sports", "Travel", "Wildlife", "Culture"],
    examples: [
      { context: "Sports", text: "Go Aussies 🇦🇺" },
      { context: "Travel", text: "G'day from Australia 🇦🇺" },
      { context: "Pride", text: "Aussie pride 🇦🇺" }
    ],
    misunderstandings: ["Similar to New Zealand flag"],
    relatedEmojis: ["kangaroo", "koala", "boomerang"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["australia", "aussie", "flag", "oceania", "down under"]
  },
  {
    unicode: "🇧🇷",
    name: "Flag: Brazil",
    slug: "flag-brazil",
    shortMeaning: "The national flag of Brazil.",
    detailedMeaning: "The Flag of Brazil emoji shows the distinctive green flag with a yellow diamond and blue globe featuring stars and the motto 'Ordem e Progresso'. Brazil is famous for football, carnival, and samba.\n\nWidely used during the World Cup, carnival season, and to express Brazilian identity and cultural pride.",
    usageContexts: ["Brazil", "Football", "Carnival", "Samba", "South America"],
    examples: [
      { context: "Football", text: "Brasil! 🇧🇷⚽" },
      { context: "Carnival", text: "Carnival vibes 🇧🇷" },
      { context: "Pride", text: "Brazilian pride 🇧🇷" }
    ],
    misunderstandings: ["Clear and distinctive flag"],
    relatedEmojis: ["soccer-ball", "palm-tree", "parrot"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["brazil", "brazilian", "flag", "south america", "football"]
  },
  {
    unicode: "🇨🇦",
    name: "Flag: Canada",
    slug: "flag-canada",
    shortMeaning: "The national flag of Canada with maple leaf.",
    detailedMeaning: "The Flag of Canada emoji displays the iconic red and white flag with the maple leaf. Canada is known for its friendly people, hockey, and stunning natural landscapes.\n\nUsed to represent Canada, Canadian identity, hockey discussions, and to express the famous Canadian friendliness.",
    usageContexts: ["Canada", "Hockey", "Maple syrup", "Politeness", "Nature"],
    examples: [
      { context: "Hockey", text: "Go Leafs Go 🇨🇦🏒" },
      { context: "Pride", text: "Canadian eh 🇨🇦" },
      { context: "Culture", text: "Maple syrup season 🇨🇦" }
    ],
    misunderstandings: ["Very distinctive flag"],
    relatedEmojis: ["maple-leaf", "hockey", "moose"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["canada", "canadian", "maple", "flag", "north america"]
  },
  {
    unicode: "🇨🇳",
    name: "Flag: China",
    slug: "flag-china",
    shortMeaning: "The national flag of China.",
    detailedMeaning: "The Flag of China emoji shows the red flag with five yellow stars. China is known for its ancient history, culture, cuisine, and as one of the world's major economies.\n\nUsed to represent China, Chinese culture, traditions, and by Chinese people expressing national identity.",
    usageContexts: ["China", "Chinese culture", "History", "Cuisine", "Festivals"],
    examples: [
      { context: "Culture", text: "Chinese New Year 🇨🇳🧧" },
      { context: "Pride", text: "Chinese heritage 🇨🇳" },
      { context: "Travel", text: "Visiting China 🇨🇳" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["dragon", "red-envelope", "dumpling"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["china", "chinese", "flag", "asia", "prc"]
  },
  {
    unicode: "🇨🇴",
    name: "Flag: Colombia",
    slug: "flag-colombia",
    shortMeaning: "The national flag of Colombia.",
    detailedMeaning: "The Flag of Colombia emoji displays the yellow, blue, and red horizontal striped flag. Colombia is known for its coffee, music, biodiversity, and warm culture.\n\nUsed to represent Colombia, Colombian identity, and in discussions about the country's rich culture and natural beauty.",
    usageContexts: ["Colombia", "Coffee", "Culture", "South America", "Music"],
    examples: [
      { context: "Pride", text: "Colombian pride 🇨🇴" },
      { context: "Culture", text: "Colombian coffee ☕🇨🇴" },
      { context: "Sports", text: "Vamos Colombia 🇨🇴" }
    ],
    misunderstandings: ["Similar to Ecuador and Venezuela flags"],
    relatedEmojis: ["coffee", "globe-showing-americas"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["colombia", "colombian", "flag", "south america", "coffee"]
  },
  {
    unicode: "🇩🇪",
    name: "Flag: Germany",
    slug: "flag-germany",
    shortMeaning: "The national flag of Germany.",
    detailedMeaning: "The Flag of Germany emoji shows the black, red, and gold horizontal tricolor. Germany is known for engineering, beer, football, and its central role in European culture.\n\nUsed to represent Germany, German culture, during football matches, and discussions about German engineering or traditions.",
    usageContexts: ["Germany", "Football", "Engineering", "Beer", "Europe"],
    examples: [
      { context: "Football", text: "Deutschland! 🇩🇪⚽" },
      { context: "Culture", text: "Oktoberfest 🇩🇪🍺" },
      { context: "Pride", text: "German engineering 🇩🇪" }
    ],
    misunderstandings: ["Similar to Belgian flag colors but different order"],
    relatedEmojis: ["beer-mug", "pretzel", "soccer-ball"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["germany", "german", "flag", "europe", "deutschland"]
  },
  {
    unicode: "🇪🇬",
    name: "Flag: Egypt",
    slug: "flag-egypt",
    shortMeaning: "The national flag of Egypt.",
    detailedMeaning: "The Flag of Egypt emoji displays the red, white, and black horizontal stripes with the golden Eagle of Saladin in the center. Egypt is famous for its ancient pyramids and rich history.\n\nUsed to represent Egypt, Egyptian heritage, discussions about ancient history, and modern Egyptian culture.",
    usageContexts: ["Egypt", "Ancient history", "Pyramids", "Culture", "Africa"],
    examples: [
      { context: "History", text: "Land of the pharaohs 🇪🇬" },
      { context: "Travel", text: "Visiting the pyramids 🇪🇬" },
      { context: "Pride", text: "Egyptian heritage 🇪🇬" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["pyramid", "sphinx", "camel"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["egypt", "egyptian", "flag", "africa", "pyramids"]
  },
  {
    unicode: "🇪🇸",
    name: "Flag: Spain",
    slug: "flag-spain",
    shortMeaning: "The national flag of Spain.",
    detailedMeaning: "The Flag of Spain emoji shows the red and yellow flag with the coat of arms. Spain is known for flamenco, bullfighting, football, and its vibrant Mediterranean culture.\n\nUsed to represent Spain, Spanish culture, during La Liga matches, and to express love for Spanish traditions and lifestyle.",
    usageContexts: ["Spain", "Football", "Flamenco", "Tapas", "Mediterranean"],
    examples: [
      { context: "Football", text: "¡Vamos España! 🇪🇸⚽" },
      { context: "Culture", text: "Tapas night 🇪🇸" },
      { context: "Travel", text: "Hola from Barcelona 🇪🇸" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["flamenco", "paella", "bull"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["spain", "spanish", "flag", "europe", "espana"]
  },
  {
    unicode: "🇫🇷",
    name: "Flag: France",
    slug: "flag-france",
    shortMeaning: "The national flag of France - the Tricolore.",
    detailedMeaning: "The Flag of France emoji displays the famous blue, white, and red vertical tricolor. France is known for fashion, cuisine, art, romance, and the Eiffel Tower.\n\nUsed to represent France, French culture, discussions about fashion, wine, cuisine, and expressions of love for Paris and French lifestyle.",
    usageContexts: ["France", "Fashion", "Cuisine", "Paris", "Romance"],
    examples: [
      { context: "Travel", text: "Bonjour from Paris 🇫🇷" },
      { context: "Culture", text: "French wine and cheese 🇫🇷🍷" },
      { context: "Fashion", text: "Paris Fashion Week 🇫🇷" }
    ],
    misunderstandings: ["May be confused with other tricolors"],
    relatedEmojis: ["eiffel-tower", "baguette", "wine-glass"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["france", "french", "flag", "europe", "paris"]
  },
  {
    unicode: "🇬🇧",
    name: "Flag: United Kingdom",
    slug: "flag-united-kingdom",
    shortMeaning: "The Union Jack - flag of the United Kingdom.",
    detailedMeaning: "The Flag of the United Kingdom emoji shows the Union Jack, combining the crosses of England, Scotland, and Ireland. The UK is known for tea, the Royal Family, and British culture.\n\nUsed to represent the UK, British culture, during sporting events, and discussions about British traditions and history.",
    usageContexts: ["United Kingdom", "British culture", "Tea", "Royalty", "Sports"],
    examples: [
      { context: "Culture", text: "Tea time 🇬🇧☕" },
      { context: "Sports", text: "Come on England 🇬🇧" },
      { context: "Pride", text: "British and proud 🇬🇧" }
    ],
    misunderstandings: ["Often confused with just England"],
    relatedEmojis: ["crown", "tea", "big-ben"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["uk", "britain", "british", "union jack", "england"]
  },
  {
    unicode: "🇮🇳",
    name: "Flag: India",
    slug: "flag-india",
    shortMeaning: "The national flag of India with Ashoka Chakra.",
    detailedMeaning: "The Flag of India emoji displays the saffron, white, and green tricolor with the navy blue Ashoka Chakra in the center. India is known for its diverse culture, cuisine, Bollywood, and rich history.\n\nUsed to represent India, Indian culture, during cricket matches, and to express pride in Indian heritage and traditions.",
    usageContexts: ["India", "Cricket", "Bollywood", "Culture", "Festivals"],
    examples: [
      { context: "Cricket", text: "Go India 🇮🇳🏏" },
      { context: "Festival", text: "Happy Diwali 🇮🇳🪔" },
      { context: "Pride", text: "Indian heritage 🇮🇳" }
    ],
    misunderstandings: ["May be confused with similar tricolors"],
    relatedEmojis: ["diya-lamp", "curry-rice", "peacock"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["india", "indian", "flag", "asia", "cricket"]
  },
  {
    unicode: "🇮🇹",
    name: "Flag: Italy",
    slug: "flag-italy",
    shortMeaning: "The national flag of Italy - the Italian Tricolore.",
    detailedMeaning: "The Flag of Italy emoji shows the green, white, and red vertical tricolor. Italy is famous for pizza, pasta, fashion, art, and its romantic culture.\n\nUsed to represent Italy, Italian culture, cuisine discussions, football matches, and expressions of Italian identity and style.",
    usageContexts: ["Italy", "Food", "Fashion", "Football", "Art"],
    examples: [
      { context: "Food", text: "Pizza time 🇮🇹🍕" },
      { context: "Football", text: "Forza Italia 🇮🇹" },
      { context: "Culture", text: "Italian style 🇮🇹" }
    ],
    misunderstandings: ["Similar to Mexican flag but different emblem"],
    relatedEmojis: ["pizza", "spaghetti", "wine-glass"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["italy", "italian", "flag", "europe", "italia"]
  },
  {
    unicode: "🇯🇵",
    name: "Flag: Japan",
    slug: "flag-japan",
    shortMeaning: "The national flag of Japan - the Rising Sun.",
    detailedMeaning: "The Flag of Japan emoji displays the simple but iconic white flag with a red circle representing the sun. Japan is known for technology, anime, sushi, and its unique blend of tradition and modernity.\n\nUsed to represent Japan, Japanese culture, anime discussions, travel, and expressions of appreciation for Japanese traditions.",
    usageContexts: ["Japan", "Anime", "Sushi", "Technology", "Culture"],
    examples: [
      { context: "Culture", text: "Japanese culture 🇯🇵" },
      { context: "Food", text: "Sushi night 🇯🇵🍣" },
      { context: "Anime", text: "New anime season 🇯🇵" }
    ],
    misunderstandings: ["Very distinctive flag"],
    relatedEmojis: ["cherry-blossom", "sushi", "mount-fuji"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["japan", "japanese", "flag", "asia", "nihon"]
  },
  {
    unicode: "🇰🇷",
    name: "Flag: South Korea",
    slug: "flag-south-korea",
    shortMeaning: "The national flag of South Korea - Taegukgi.",
    detailedMeaning: "The Flag of South Korea emoji displays the Taegukgi with its yin-yang symbol and four trigrams. South Korea is known for K-pop, technology, cuisine, and its dynamic modern culture.\n\nUsed to represent South Korea, K-pop fandom, Korean culture discussions, and expressions of appreciation for Korean entertainment and traditions.",
    usageContexts: ["South Korea", "K-pop", "K-drama", "Technology", "Food"],
    examples: [
      { context: "K-pop", text: "BTS concert 🇰🇷" },
      { context: "Food", text: "Korean BBQ 🇰🇷" },
      { context: "Culture", text: "K-drama marathon 🇰🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["kimchi", "microphone", "headphone"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["korea", "korean", "south korea", "flag", "kpop"]
  },
  {
    unicode: "🇲🇽",
    name: "Flag: Mexico",
    slug: "flag-mexico",
    shortMeaning: "The national flag of Mexico with eagle emblem.",
    detailedMeaning: "The Flag of Mexico emoji displays the green, white, and red vertical stripes with the coat of arms featuring an eagle eating a snake. Mexico is famous for tacos, tequila, mariachi, and vibrant culture.\n\nUsed to represent Mexico, Mexican culture, during national celebrations like Cinco de Mayo, and to express Mexican pride and heritage.",
    usageContexts: ["Mexico", "Food", "Culture", "Celebrations", "Music"],
    examples: [
      { context: "Food", text: "Taco Tuesday 🇲🇽🌮" },
      { context: "Celebration", text: "Cinco de Mayo 🇲🇽" },
      { context: "Pride", text: "Viva Mexico 🇲🇽" }
    ],
    misunderstandings: ["Similar to Italian flag but with emblem"],
    relatedEmojis: ["taco", "cactus", "hot-pepper"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["mexico", "mexican", "flag", "north america", "taco"]
  },
  {
    unicode: "🇳🇬",
    name: "Flag: Nigeria",
    slug: "flag-nigeria",
    shortMeaning: "The national flag of Nigeria.",
    detailedMeaning: "The Flag of Nigeria emoji displays the green and white vertical stripes. Nigeria is Africa's most populous country, known for its music, Nollywood, and diverse cultures.\n\nUsed to represent Nigeria, Nigerian pride, Afrobeats music discussions, and during football matches.",
    usageContexts: ["Nigeria", "Afrobeats", "Football", "Nollywood", "Culture"],
    examples: [
      { context: "Music", text: "Afrobeats vibes 🇳🇬" },
      { context: "Football", text: "Super Eagles 🇳🇬⚽" },
      { context: "Pride", text: "Nigerian pride 🇳🇬" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["musical-notes", "soccer-ball"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["nigeria", "nigerian", "flag", "africa", "afrobeats"]
  },
  {
    unicode: "🇳🇱",
    name: "Flag: Netherlands",
    slug: "flag-netherlands",
    shortMeaning: "The national flag of the Netherlands.",
    detailedMeaning: "The Flag of the Netherlands emoji displays the red, white, and blue horizontal stripes. The Netherlands is known for tulips, windmills, cycling, and its liberal culture.\n\nUsed to represent the Netherlands, Dutch culture, during football matches, and discussions about Dutch traditions and lifestyle.",
    usageContexts: ["Netherlands", "Football", "Tulips", "Cycling", "Culture"],
    examples: [
      { context: "Football", text: "Hup Holland Hup 🇳🇱" },
      { context: "Culture", text: "Tulip season 🇳🇱🌷" },
      { context: "Pride", text: "Dutch pride 🇳🇱" }
    ],
    misunderstandings: ["Similar to other red-white-blue flags"],
    relatedEmojis: ["tulip", "bicycle", "windmill"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["netherlands", "dutch", "holland", "flag", "europe"]
  },
  {
    unicode: "🇵🇭",
    name: "Flag: Philippines",
    slug: "flag-philippines",
    shortMeaning: "The national flag of the Philippines.",
    detailedMeaning: "The Flag of the Philippines emoji shows the blue and red flag with the white triangle, sun, and stars. The Philippines is known for its beautiful islands, hospitality, and vibrant culture.\n\nUsed to represent the Philippines, Filipino pride, discussions about the country's beautiful beaches and culture.",
    usageContexts: ["Philippines", "Islands", "Culture", "Travel", "Pride"],
    examples: [
      { context: "Pride", text: "Filipino pride 🇵🇭" },
      { context: "Travel", text: "Philippine beaches 🇵🇭🏝️" },
      { context: "Culture", text: "Mabuhay 🇵🇭" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beach", "palm-tree", "sun"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["philippines", "filipino", "flag", "asia", "islands"]
  },
  {
    unicode: "🇵🇱",
    name: "Flag: Poland",
    slug: "flag-poland",
    shortMeaning: "The national flag of Poland.",
    detailedMeaning: "The Flag of Poland emoji displays the white and red horizontal bicolor. Poland is known for its rich history, culture, and resilient people.\n\nUsed to represent Poland, Polish heritage, during football matches, and discussions about Polish culture and traditions.",
    usageContexts: ["Poland", "Culture", "History", "Football", "Europe"],
    examples: [
      { context: "Pride", text: "Polish pride 🇵🇱" },
      { context: "Football", text: "Polska! 🇵🇱⚽" },
      { context: "Culture", text: "Polish heritage 🇵🇱" }
    ],
    misunderstandings: ["Similar to Indonesian and Monaco flags (inverted)"],
    relatedEmojis: ["pierogi", "eagle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["poland", "polish", "polska", "flag", "europe"]
  },
  {
    unicode: "🇵🇹",
    name: "Flag: Portugal",
    slug: "flag-portugal",
    shortMeaning: "The national flag of Portugal.",
    detailedMeaning: "The Flag of Portugal emoji shows the green and red flag with the armillary sphere and Portuguese shield. Portugal is known for football, pastéis de nata, and its maritime history.\n\nUsed to represent Portugal, Portuguese culture, during football matches, and discussions about Portuguese traditions and cuisine.",
    usageContexts: ["Portugal", "Football", "Cuisine", "History", "Culture"],
    examples: [
      { context: "Football", text: "Força Portugal 🇵🇹⚽" },
      { context: "Food", text: "Pastéis de nata 🇵🇹" },
      { context: "Pride", text: "Portuguese pride 🇵🇹" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["soccer-ball", "ship"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["portugal", "portuguese", "flag", "europe", "football"]
  },
  {
    unicode: "🇷🇺",
    name: "Flag: Russia",
    slug: "flag-russia",
    shortMeaning: "The national flag of Russia.",
    detailedMeaning: "The Flag of Russia emoji displays the white, blue, and red horizontal tricolor. Russia is known for its vast size, rich culture, literature, and ballet.\n\nUsed to represent Russia, Russian culture, and discussions about Russian traditions, literature, and arts.",
    usageContexts: ["Russia", "Culture", "Literature", "Ballet", "History"],
    examples: [
      { context: "Culture", text: "Russian culture 🇷🇺" },
      { context: "Pride", text: "Russian heritage 🇷🇺" },
      { context: "Arts", text: "Ballet night 🇷🇺🩰" }
    ],
    misunderstandings: ["Similar to other tricolor flags"],
    relatedEmojis: ["matryoshka", "ballet-shoes"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["russia", "russian", "flag", "europe", "asia"]
  },
  {
    unicode: "🇸🇦",
    name: "Flag: Saudi Arabia",
    slug: "flag-saudi-arabia",
    shortMeaning: "The national flag of Saudi Arabia.",
    detailedMeaning: "The Flag of Saudi Arabia emoji shows the green flag with the Shahada and sword. Saudi Arabia is known for its Islamic heritage, oil wealth, and hosting holy sites Mecca and Medina.\n\nUsed to represent Saudi Arabia, Saudi culture, and discussions about the country's heritage and traditions.",
    usageContexts: ["Saudi Arabia", "Islam", "Culture", "Heritage", "Travel"],
    examples: [
      { context: "Pride", text: "Saudi Arabia 🇸🇦" },
      { context: "Culture", text: "Saudi heritage 🇸🇦" },
      { context: "Travel", text: "Visiting Riyadh 🇸🇦" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["mosque", "camel", "desert"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["saudi arabia", "saudi", "flag", "middle east", "arabia"]
  },
  {
    unicode: "🇿🇦",
    name: "Flag: South Africa",
    slug: "flag-south-africa",
    shortMeaning: "The national flag of South Africa.",
    detailedMeaning: "The Flag of South Africa emoji displays the distinctive Y-shaped design with six colors. South Africa is known as the Rainbow Nation for its diverse cultures and history.\n\nUsed to represent South Africa, South African pride, during sporting events, and discussions about the country's diverse heritage.",
    usageContexts: ["South Africa", "Rainbow Nation", "Sports", "Culture", "Heritage"],
    examples: [
      { context: "Sports", text: "Go Springboks 🇿🇦🏉" },
      { context: "Pride", text: "South African pride 🇿🇦" },
      { context: "Culture", text: "Rainbow Nation 🇿🇦" }
    ],
    misunderstandings: ["Distinctive and recognizable flag"],
    relatedEmojis: ["rugby-football", "lion", "elephant"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["south africa", "african", "flag", "africa", "rainbow nation"]
  },
  {
    unicode: "🇹🇷",
    name: "Flag: Turkey",
    slug: "flag-turkey",
    shortMeaning: "The national flag of Turkey.",
    detailedMeaning: "The Flag of Turkey emoji shows the red flag with white crescent moon and star. Turkey is known for its unique position bridging Europe and Asia, rich history, and delicious cuisine.\n\nUsed to represent Turkey, Turkish culture, discussions about the country's cuisine, history, and tourism.",
    usageContexts: ["Turkey", "Culture", "Cuisine", "History", "Travel"],
    examples: [
      { context: "Food", text: "Turkish kebab 🇹🇷" },
      { context: "Pride", text: "Turkish pride 🇹🇷" },
      { context: "Travel", text: "Istanbul calling 🇹🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["mosque", "tea", "crescent-moon"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["turkey", "turkish", "flag", "europe", "asia"]
  },
  {
    unicode: "🇺🇦",
    name: "Flag: Ukraine",
    slug: "flag-ukraine",
    shortMeaning: "The national flag of Ukraine.",
    detailedMeaning: "The Flag of Ukraine emoji displays the blue and yellow horizontal bicolor, representing the sky and wheat fields. Ukraine is known for its rich culture, history, and resilient spirit.\n\nUsed to represent Ukraine, Ukrainian identity, expressions of support, and discussions about Ukrainian culture and heritage.",
    usageContexts: ["Ukraine", "Support", "Culture", "Identity", "Heritage"],
    examples: [
      { context: "Support", text: "Slava Ukraini 🇺🇦" },
      { context: "Pride", text: "Ukrainian pride 🇺🇦" },
      { context: "Culture", text: "Ukrainian heritage 🇺🇦" }
    ],
    misunderstandings: ["Very recognizable currently"],
    relatedEmojis: ["sunflower", "wheat", "heart"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["ukraine", "ukrainian", "flag", "europe", "support"]
  },
  {
    unicode: "🇺🇸",
    name: "Flag: United States",
    slug: "flag-united-states",
    shortMeaning: "The Stars and Stripes - flag of the United States.",
    detailedMeaning: "The Flag of the United States emoji displays the iconic Stars and Stripes with 50 stars and 13 stripes. The USA is known for its cultural influence, entertainment industry, and diverse population.\n\nWidely used to represent the United States, American culture, patriotism, and during national celebrations and sporting events.",
    usageContexts: ["United States", "Patriotism", "Sports", "Culture", "Holidays"],
    examples: [
      { context: "Holiday", text: "Happy 4th of July 🇺🇸" },
      { context: "Sports", text: "USA! USA! 🇺🇸" },
      { context: "Pride", text: "American dream 🇺🇸" }
    ],
    misunderstandings: ["Very distinctive flag"],
    relatedEmojis: ["statue-of-liberty", "eagle", "fireworks"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["usa", "america", "american", "united states", "flag"]
  },
  {
    unicode: "🇻🇪",
    name: "Flag: Venezuela",
    slug: "flag-venezuela",
    shortMeaning: "The national flag of Venezuela.",
    detailedMeaning: "The Flag of Venezuela emoji displays the yellow, blue, and red horizontal stripes with stars. Venezuela is known for its natural beauty, music, and oil reserves.\n\nUsed to represent Venezuela, Venezuelan identity, and discussions about the country's culture and heritage.",
    usageContexts: ["Venezuela", "Culture", "Music", "Heritage", "Identity"],
    examples: [
      { context: "Pride", text: "Venezuelan pride 🇻🇪" },
      { context: "Culture", text: "Venezuelan heritage 🇻🇪" },
      { context: "Music", text: "Venezuelan music 🇻🇪" }
    ],
    misunderstandings: ["Similar to Colombia and Ecuador flags"],
    relatedEmojis: ["arepa", "musical-notes"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["venezuela", "venezuelan", "flag", "south america"]
  },
  {
    unicode: "🇻🇳",
    name: "Flag: Vietnam",
    slug: "flag-vietnam",
    shortMeaning: "The national flag of Vietnam.",
    detailedMeaning: "The Flag of Vietnam emoji displays the red flag with a yellow star in the center. Vietnam is known for its beautiful landscapes, delicious cuisine, and rich history.\n\nUsed to represent Vietnam, Vietnamese culture, discussions about Vietnamese cuisine and travel.",
    usageContexts: ["Vietnam", "Cuisine", "Travel", "Culture", "History"],
    examples: [
      { context: "Food", text: "Pho night 🇻🇳🍜" },
      { context: "Pride", text: "Vietnamese pride 🇻🇳" },
      { context: "Travel", text: "Vietnam trip 🇻🇳" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["steaming-bowl", "rice", "water-buffalo"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["vietnam", "vietnamese", "flag", "asia", "pho"]
  },
  {
    unicode: "🏳️‍🌈",
    name: "Rainbow Flag",
    slug: "rainbow-flag",
    shortMeaning: "The rainbow Pride flag representing LGBTQ+ community.",
    detailedMeaning: "The Rainbow Flag emoji displays the iconic six-color rainbow Pride flag, symbolizing LGBTQ+ pride and diversity. Designed by Gilbert Baker in 1978, it has become a universal symbol of acceptance and celebration.\n\nWidely used during Pride month, to express LGBTQ+ identity, show allyship, and celebrate diversity and inclusion.",
    usageContexts: ["Pride", "LGBTQ+", "Diversity", "Inclusion", "Celebration"],
    examples: [
      { context: "Pride", text: "Happy Pride Month 🏳️‍🌈" },
      { context: "Identity", text: "Proud to be me 🏳️‍🌈" },
      { context: "Support", text: "Love is love 🏳️‍🌈" }
    ],
    misunderstandings: ["Well-understood symbol"],
    relatedEmojis: ["rainbow", "sparkles", "heart"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["pride", "lgbtq", "rainbow", "gay", "diversity"]
  },
  {
    unicode: "🏳️‍⚧️",
    name: "Transgender Flag",
    slug: "transgender-flag",
    shortMeaning: "The transgender Pride flag representing trans community.",
    detailedMeaning: "The Transgender Flag emoji displays the light blue, pink, and white striped flag designed by Monica Helms in 1999. It represents the transgender community and trans pride.\n\nUsed to express transgender identity, show support for trans rights, and celebrate transgender visibility and pride.",
    usageContexts: ["Trans pride", "LGBTQ+", "Identity", "Support", "Visibility"],
    examples: [
      { context: "Pride", text: "Trans pride 🏳️‍⚧️" },
      { context: "Support", text: "Trans rights are human rights 🏳️‍⚧️" },
      { context: "Identity", text: "Proud to be trans 🏳️‍⚧️" }
    ],
    misunderstandings: ["Well-understood symbol"],
    relatedEmojis: ["rainbow-flag", "sparkles", "heart"],
    categorySlug: "flags",
    subgroup: "flag",
    keywords: ["transgender", "trans", "pride", "lgbtq", "flag"]
  },
  {
    unicode: "🇦🇪",
    name: "Flag: United Arab Emirates",
    slug: "flag-united-arab-emirates",
    shortMeaning: "The national flag of the United Arab Emirates.",
    detailedMeaning: "The Flag of the UAE emoji displays the green, white, black, and red flag. The UAE is known for Dubai, luxury tourism, and modern architecture.\n\nUsed to represent the UAE, discussions about Dubai, Abu Dhabi, and the country's rapid development.",
    usageContexts: ["UAE", "Dubai", "Luxury", "Travel", "Business"],
    examples: [
      { context: "Travel", text: "Dubai vibes 🇦🇪" },
      { context: "Pride", text: "UAE 🇦🇪" },
      { context: "Business", text: "UAE business 🇦🇪" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["desert", "money-bag", "airplane"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["uae", "dubai", "emirates", "flag", "middle east"]
  },
  {
    unicode: "🇮🇩",
    name: "Flag: Indonesia",
    slug: "flag-indonesia",
    shortMeaning: "The national flag of Indonesia.",
    detailedMeaning: "The Flag of Indonesia emoji displays the red and white bicolor known as Merah Putih. Indonesia is the world's largest archipelago, known for Bali, diverse cultures, and rich biodiversity.\n\nUsed to represent Indonesia, Indonesian culture, discussions about travel to Bali and other islands.",
    usageContexts: ["Indonesia", "Bali", "Travel", "Culture", "Islands"],
    examples: [
      { context: "Travel", text: "Bali calling 🇮🇩" },
      { context: "Pride", text: "Indonesian pride 🇮🇩" },
      { context: "Culture", text: "Indonesian heritage 🇮🇩" }
    ],
    misunderstandings: ["Similar to Poland and Monaco flags"],
    relatedEmojis: ["palm-tree", "rice", "volcano"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["indonesia", "indonesian", "bali", "flag", "asia"]
  },
  {
    unicode: "🇹🇭",
    name: "Flag: Thailand",
    slug: "flag-thailand",
    shortMeaning: "The national flag of Thailand.",
    detailedMeaning: "The Flag of Thailand emoji displays the red, white, and blue horizontal stripes. Thailand is known as the Land of Smiles, famous for temples, beaches, and cuisine.\n\nUsed to represent Thailand, Thai culture, discussions about travel and Thai food.",
    usageContexts: ["Thailand", "Travel", "Food", "Culture", "Beaches"],
    examples: [
      { context: "Food", text: "Thai food 🇹🇭" },
      { context: "Travel", text: "Thailand vacation 🇹🇭" },
      { context: "Culture", text: "Sawadee 🇹🇭" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["elephant", "temple", "curry-rice"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["thailand", "thai", "flag", "asia", "beaches"]
  },
  {
    unicode: "🇸🇬",
    name: "Flag: Singapore",
    slug: "flag-singapore",
    shortMeaning: "The national flag of Singapore.",
    detailedMeaning: "The Flag of Singapore emoji displays the red and white flag with crescent moon and five stars. Singapore is known for its cleanliness, efficiency, and blend of cultures.\n\nUsed to represent Singapore, Singaporean identity, discussions about the city-state's modern culture.",
    usageContexts: ["Singapore", "Business", "Travel", "Culture", "Cleanliness"],
    examples: [
      { context: "Travel", text: "Singapore trip 🇸🇬" },
      { context: "Pride", text: "Singaporean pride 🇸🇬" },
      { context: "Food", text: "Hawker food 🇸🇬" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["cityscape", "airplane", "noodles"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["singapore", "singaporean", "flag", "asia", "city"]
  },
  {
    unicode: "🇲🇾",
    name: "Flag: Malaysia",
    slug: "flag-malaysia",
    shortMeaning: "The national flag of Malaysia.",
    detailedMeaning: "The Flag of Malaysia emoji displays the Jalur Gemilang with red and white stripes, blue canton, crescent and 14-point star. Malaysia is known for its diverse cultures and tropical beauty.\n\nUsed to represent Malaysia, Malaysian identity, and discussions about the country's culture.",
    usageContexts: ["Malaysia", "Culture", "Travel", "Food", "Diversity"],
    examples: [
      { context: "Pride", text: "Malaysian pride 🇲🇾" },
      { context: "Food", text: "Malaysian food 🇲🇾" },
      { context: "Travel", text: "Malaysia trip 🇲🇾" }
    ],
    misunderstandings: ["Similar design to US flag"],
    relatedEmojis: ["palm-tree", "tropical-drink"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["malaysia", "malaysian", "flag", "asia", "culture"]
  },
  {
    unicode: "🇳🇿",
    name: "Flag: New Zealand",
    slug: "flag-new-zealand",
    shortMeaning: "The national flag of New Zealand.",
    detailedMeaning: "The Flag of New Zealand emoji displays the blue flag with Union Jack and Southern Cross stars. New Zealand is known for stunning landscapes, the All Blacks, and Maori culture.\n\nUsed to represent New Zealand, Kiwi identity, during rugby matches, and discussions about the country.",
    usageContexts: ["New Zealand", "Rugby", "Nature", "Maori", "Travel"],
    examples: [
      { context: "Rugby", text: "All Blacks 🇳🇿🏉" },
      { context: "Pride", text: "Kiwi pride 🇳🇿" },
      { context: "Travel", text: "New Zealand adventure 🇳🇿" }
    ],
    misunderstandings: ["Similar to Australian flag"],
    relatedEmojis: ["kiwi-bird", "rugby-football", "mountain"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["new zealand", "kiwi", "nz", "flag", "oceania"]
  },
  {
    unicode: "🇮🇪",
    name: "Flag: Ireland",
    slug: "flag-ireland",
    shortMeaning: "The national flag of Ireland.",
    detailedMeaning: "The Flag of Ireland emoji displays the green, white, and orange tricolor. Ireland is known for its rolling green landscapes, Celtic culture, and friendly people.\n\nUsed to represent Ireland, Irish pride, during St. Patrick's Day, and discussions about Irish culture.",
    usageContexts: ["Ireland", "St. Patrick's Day", "Celtic", "Culture", "Heritage"],
    examples: [
      { context: "Holiday", text: "Happy St. Patrick's Day 🇮🇪☘️" },
      { context: "Pride", text: "Irish pride 🇮🇪" },
      { context: "Culture", text: "Irish heritage 🇮🇪" }
    ],
    misunderstandings: ["May be confused with Ivory Coast flag (inverted)"],
    relatedEmojis: ["shamrock", "beer-mug", "four-leaf-clover"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["ireland", "irish", "flag", "europe", "celtic"]
  },
  {
    unicode: "🇸🇪",
    name: "Flag: Sweden",
    slug: "flag-sweden",
    shortMeaning: "The national flag of Sweden.",
    detailedMeaning: "The Flag of Sweden emoji displays the blue flag with yellow Nordic cross. Sweden is known for IKEA, ABBA, design, and high quality of life.\n\nUsed to represent Sweden, Swedish culture, discussions about Scandinavian lifestyle.",
    usageContexts: ["Sweden", "Scandinavia", "Design", "Culture", "IKEA"],
    examples: [
      { context: "Culture", text: "Swedish design 🇸🇪" },
      { context: "Pride", text: "Swedish pride 🇸🇪" },
      { context: "Music", text: "ABBA vibes 🇸🇪" }
    ],
    misunderstandings: ["Clear Nordic flag design"],
    relatedEmojis: ["snowflake", "christmas-tree"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["sweden", "swedish", "flag", "europe", "scandinavia"]
  },
  {
    unicode: "🇳🇴",
    name: "Flag: Norway",
    slug: "flag-norway",
    shortMeaning: "The national flag of Norway.",
    detailedMeaning: "The Flag of Norway emoji displays the red flag with blue-bordered white Nordic cross. Norway is known for fjords, Vikings, and stunning natural beauty.\n\nUsed to represent Norway, Norwegian identity, and discussions about Norwegian culture and landscapes.",
    usageContexts: ["Norway", "Fjords", "Vikings", "Nature", "Scandinavia"],
    examples: [
      { context: "Nature", text: "Norwegian fjords 🇳🇴" },
      { context: "Pride", text: "Norwegian pride 🇳🇴" },
      { context: "Culture", text: "Viking heritage 🇳🇴" }
    ],
    misunderstandings: ["Clear Nordic flag design"],
    relatedEmojis: ["mountain", "snowflake", "ship"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["norway", "norwegian", "flag", "europe", "scandinavia"]
  },
  {
    unicode: "🇩🇰",
    name: "Flag: Denmark",
    slug: "flag-denmark",
    shortMeaning: "The national flag of Denmark - the Dannebrog.",
    detailedMeaning: "The Flag of Denmark emoji displays the Dannebrog, the oldest state flag still in use, featuring a white Nordic cross on red. Denmark is known for hygge, Vikings, and high happiness.\n\nUsed to represent Denmark, Danish identity, and discussions about Scandinavian culture.",
    usageContexts: ["Denmark", "Hygge", "Vikings", "Culture", "Scandinavia"],
    examples: [
      { context: "Culture", text: "Danish hygge 🇩🇰" },
      { context: "Pride", text: "Danish pride 🇩🇰" },
      { context: "Food", text: "Danish pastry 🇩🇰" }
    ],
    misunderstandings: ["Clear Nordic flag design"],
    relatedEmojis: ["croissant", "snowflake"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["denmark", "danish", "flag", "europe", "scandinavia"]
  },
  {
    unicode: "🇫🇮",
    name: "Flag: Finland",
    slug: "flag-finland",
    shortMeaning: "The national flag of Finland.",
    detailedMeaning: "The Flag of Finland emoji displays the white flag with blue Nordic cross. Finland is known for saunas, education, Nokia, and beautiful lakes.\n\nUsed to represent Finland, Finnish identity, and discussions about Finnish culture and lifestyle.",
    usageContexts: ["Finland", "Sauna", "Education", "Nature", "Scandinavia"],
    examples: [
      { context: "Culture", text: "Sauna time 🇫🇮" },
      { context: "Pride", text: "Finnish pride 🇫🇮" },
      { context: "Nature", text: "Finnish lakes 🇫🇮" }
    ],
    misunderstandings: ["Clear Nordic flag design"],
    relatedEmojis: ["evergreen-tree", "snowflake"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["finland", "finnish", "flag", "europe", "nordic"]
  },
  {
    unicode: "🇨🇭",
    name: "Flag: Switzerland",
    slug: "flag-switzerland",
    shortMeaning: "The national flag of Switzerland.",
    detailedMeaning: "The Flag of Switzerland emoji displays the distinctive square red flag with white cross. Switzerland is known for neutrality, chocolate, watches, and the Alps.\n\nUsed to represent Switzerland, Swiss identity, and discussions about Swiss products and culture.",
    usageContexts: ["Switzerland", "Alps", "Chocolate", "Watches", "Neutrality"],
    examples: [
      { context: "Travel", text: "Swiss Alps 🇨🇭🏔️" },
      { context: "Culture", text: "Swiss chocolate 🇨🇭🍫" },
      { context: "Pride", text: "Swiss quality 🇨🇭" }
    ],
    misunderstandings: ["Inverted to Red Cross symbol"],
    relatedEmojis: ["snow-capped-mountain", "chocolate-bar", "watch"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["switzerland", "swiss", "flag", "europe", "alps"]
  },
  {
    unicode: "🇦🇹",
    name: "Flag: Austria",
    slug: "flag-austria",
    shortMeaning: "The national flag of Austria.",
    detailedMeaning: "The Flag of Austria emoji displays the red and white horizontal stripes. Austria is known for classical music, Mozart, the Alps, and Viennese culture.\n\nUsed to represent Austria, Austrian identity, and discussions about Austrian culture and music.",
    usageContexts: ["Austria", "Music", "Vienna", "Alps", "Culture"],
    examples: [
      { context: "Music", text: "Mozart vibes 🇦🇹🎵" },
      { context: "Pride", text: "Austrian pride 🇦🇹" },
      { context: "Travel", text: "Vienna trip 🇦🇹" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["musical-note", "mountain", "snowflake"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["austria", "austrian", "flag", "europe", "vienna"]
  },
  {
    unicode: "🇧🇪",
    name: "Flag: Belgium",
    slug: "flag-belgium",
    shortMeaning: "The national flag of Belgium.",
    detailedMeaning: "The Flag of Belgium emoji displays the black, yellow, and red vertical stripes. Belgium is known for chocolate, waffles, beer, and being home to EU institutions.\n\nUsed to represent Belgium, Belgian identity, and discussions about Belgian culture and products.",
    usageContexts: ["Belgium", "Chocolate", "Waffles", "Beer", "EU"],
    examples: [
      { context: "Food", text: "Belgian waffles 🇧🇪🧇" },
      { context: "Culture", text: "Belgian chocolate 🇧🇪🍫" },
      { context: "Pride", text: "Belgian pride 🇧🇪" }
    ],
    misunderstandings: ["Similar to German flag colors but different order"],
    relatedEmojis: ["waffle", "chocolate-bar", "beer-mug"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["belgium", "belgian", "flag", "europe", "brussels"]
  },
  {
    unicode: "🇬🇷",
    name: "Flag: Greece",
    slug: "flag-greece",
    shortMeaning: "The national flag of Greece.",
    detailedMeaning: "The Flag of Greece emoji displays the blue and white stripes with cross in the canton. Greece is known for ancient history, philosophy, mythology, and beautiful islands.\n\nUsed to represent Greece, Greek identity, and discussions about Greek culture and history.",
    usageContexts: ["Greece", "Ancient history", "Islands", "Mythology", "Culture"],
    examples: [
      { context: "Travel", text: "Greek islands 🇬🇷🏝️" },
      { context: "History", text: "Ancient Greece 🇬🇷" },
      { context: "Pride", text: "Greek pride 🇬🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["classical-building", "olive", "beach"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["greece", "greek", "flag", "europe", "hellas"]
  },
  {
    unicode: "🇮🇱",
    name: "Flag: Israel",
    slug: "flag-israel",
    shortMeaning: "The national flag of Israel.",
    detailedMeaning: "The Flag of Israel emoji displays the white flag with two blue horizontal stripes and the Star of David. Israel is known for its historical significance and diverse culture.\n\nUsed to represent Israel, Israeli identity, and discussions about Israeli culture.",
    usageContexts: ["Israel", "Culture", "History", "Heritage", "Travel"],
    examples: [
      { context: "Pride", text: "Israeli pride 🇮🇱" },
      { context: "Culture", text: "Israeli heritage 🇮🇱" },
      { context: "Travel", text: "Tel Aviv trip 🇮🇱" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["star-of-david", "menorah"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["israel", "israeli", "flag", "middle east", "jewish"]
  },
  {
    unicode: "🇵🇰",
    name: "Flag: Pakistan",
    slug: "flag-pakistan",
    shortMeaning: "The national flag of Pakistan.",
    detailedMeaning: "The Flag of Pakistan emoji displays the green flag with white crescent and star, and white stripe. Pakistan is known for cricket, rich culture, and historical heritage.\n\nUsed to represent Pakistan, Pakistani identity, and during cricket matches.",
    usageContexts: ["Pakistan", "Cricket", "Culture", "Heritage", "Sports"],
    examples: [
      { context: "Cricket", text: "Pakistan zindabad 🇵🇰🏏" },
      { context: "Pride", text: "Pakistani pride 🇵🇰" },
      { context: "Culture", text: "Pakistani heritage 🇵🇰" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["cricket-game", "crescent-moon"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["pakistan", "pakistani", "flag", "asia", "cricket"]
  },
  {
    unicode: "🇧🇩",
    name: "Flag: Bangladesh",
    slug: "flag-bangladesh",
    shortMeaning: "The national flag of Bangladesh.",
    detailedMeaning: "The Flag of Bangladesh emoji displays the green flag with red circle. Bangladesh is known for cricket, textiles, and its river deltas.\n\nUsed to represent Bangladesh, Bangladeshi identity, and during cricket matches.",
    usageContexts: ["Bangladesh", "Cricket", "Culture", "Heritage", "Textiles"],
    examples: [
      { context: "Pride", text: "Bangladeshi pride 🇧🇩" },
      { context: "Cricket", text: "Go Bangladesh 🇧🇩🏏" },
      { context: "Culture", text: "Bengali heritage 🇧🇩" }
    ],
    misunderstandings: ["Similar to Japanese flag with different colors"],
    relatedEmojis: ["cricket-game", "rice"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["bangladesh", "bangladeshi", "bengali", "flag", "asia"]
  },
  {
    unicode: "🇨🇱",
    name: "Flag: Chile",
    slug: "flag-chile",
    shortMeaning: "The national flag of Chile.",
    detailedMeaning: "The Flag of Chile emoji displays the white and red horizontal bands with blue canton and white star. Chile is known for its long geography, wine, and stunning landscapes.\n\nUsed to represent Chile, Chilean identity, and discussions about Chilean culture.",
    usageContexts: ["Chile", "Wine", "Landscapes", "Culture", "South America"],
    examples: [
      { context: "Pride", text: "Chilean pride 🇨🇱" },
      { context: "Wine", text: "Chilean wine 🇨🇱🍷" },
      { context: "Travel", text: "Patagonia adventure 🇨🇱" }
    ],
    misunderstandings: ["Similar to Texas state flag"],
    relatedEmojis: ["wine-glass", "mountain", "llama"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["chile", "chilean", "flag", "south america", "wine"]
  },
  {
    unicode: "🇵🇪",
    name: "Flag: Peru",
    slug: "flag-peru",
    shortMeaning: "The national flag of Peru.",
    detailedMeaning: "The Flag of Peru emoji displays the red and white vertical stripes. Peru is known for Machu Picchu, rich history, and diverse cuisine.\n\nUsed to represent Peru, Peruvian identity, and discussions about Peruvian culture and heritage.",
    usageContexts: ["Peru", "Machu Picchu", "History", "Cuisine", "Andes"],
    examples: [
      { context: "Travel", text: "Machu Picchu trip 🇵🇪" },
      { context: "Pride", text: "Peruvian pride 🇵🇪" },
      { context: "Food", text: "Peruvian cuisine 🇵🇪" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["llama", "mountain", "potato"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["peru", "peruvian", "flag", "south america", "andes"]
  },
  {
    unicode: "🇪🇨",
    name: "Flag: Ecuador",
    slug: "flag-ecuador",
    shortMeaning: "The national flag of Ecuador.",
    detailedMeaning: "The Flag of Ecuador emoji displays the yellow, blue, and red horizontal stripes with coat of arms. Ecuador is known for the Galápagos Islands and biodiversity.\n\nUsed to represent Ecuador, Ecuadorian identity, and discussions about the Galápagos.",
    usageContexts: ["Ecuador", "Galápagos", "Biodiversity", "Nature", "South America"],
    examples: [
      { context: "Travel", text: "Galápagos adventure 🇪🇨" },
      { context: "Pride", text: "Ecuadorian pride 🇪🇨" },
      { context: "Nature", text: "Ecuador biodiversity 🇪🇨" }
    ],
    misunderstandings: ["Similar to Colombia and Venezuela flags"],
    relatedEmojis: ["turtle", "parrot", "volcano"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["ecuador", "ecuadorian", "flag", "south america", "galapagos"]
  },
  {
    unicode: "🇨🇺",
    name: "Flag: Cuba",
    slug: "flag-cuba",
    shortMeaning: "The national flag of Cuba.",
    detailedMeaning: "The Flag of Cuba emoji displays the blue and white stripes with red triangle and white star. Cuba is known for cigars, music, classic cars, and vibrant culture.\n\nUsed to represent Cuba, Cuban identity, and discussions about Cuban culture.",
    usageContexts: ["Cuba", "Music", "Cigars", "Culture", "Caribbean"],
    examples: [
      { context: "Culture", text: "Cuban salsa 🇨🇺💃" },
      { context: "Pride", text: "Cuban pride 🇨🇺" },
      { context: "Travel", text: "Havana nights 🇨🇺" }
    ],
    misunderstandings: ["Similar to Puerto Rico flag (inverted colors)"],
    relatedEmojis: ["man-dancing", "musical-notes", "palm-tree"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["cuba", "cuban", "flag", "caribbean", "havana"]
  },
  {
    unicode: "🇯🇲",
    name: "Flag: Jamaica",
    slug: "flag-jamaica",
    shortMeaning: "The national flag of Jamaica.",
    detailedMeaning: "The Flag of Jamaica emoji displays the distinctive diagonal cross in gold with green and black triangles. Jamaica is known for reggae, Bob Marley, and sprinting.\n\nUsed to represent Jamaica, Jamaican identity, and discussions about reggae culture.",
    usageContexts: ["Jamaica", "Reggae", "Bob Marley", "Athletics", "Caribbean"],
    examples: [
      { context: "Music", text: "Reggae vibes 🇯🇲🎵" },
      { context: "Pride", text: "Jamaican pride 🇯🇲" },
      { context: "Sports", text: "Usain Bolt 🇯🇲🏃" }
    ],
    misunderstandings: ["Distinctive flag design"],
    relatedEmojis: ["musical-notes", "runner", "palm-tree"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["jamaica", "jamaican", "flag", "caribbean", "reggae"]
  },
  {
    unicode: "🇭🇹",
    name: "Flag: Haiti",
    slug: "flag-haiti",
    shortMeaning: "The national flag of Haiti.",
    detailedMeaning: "The Flag of Haiti emoji displays the blue and red horizontal bands with coat of arms. Haiti was the first free Black republic and has a rich cultural heritage.\n\nUsed to represent Haiti, Haitian identity, and discussions about Haitian culture and history.",
    usageContexts: ["Haiti", "Culture", "History", "Heritage", "Caribbean"],
    examples: [
      { context: "Pride", text: "Haitian pride 🇭🇹" },
      { context: "Culture", text: "Haitian heritage 🇭🇹" },
      { context: "History", text: "First free Black republic 🇭🇹" }
    ],
    misunderstandings: ["Similar to Liechtenstein flag"],
    relatedEmojis: ["palm-tree", "drum"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["haiti", "haitian", "flag", "caribbean", "creole"]
  },
  {
    unicode: "🇩🇴",
    name: "Flag: Dominican Republic",
    slug: "flag-dominican-republic",
    shortMeaning: "The national flag of the Dominican Republic.",
    detailedMeaning: "The Flag of the Dominican Republic emoji displays the blue and red quartered flag with white cross and coat of arms. The DR is known for baseball, merengue, and beautiful beaches.\n\nUsed to represent the Dominican Republic, Dominican identity, and discussions about Dominican culture.",
    usageContexts: ["Dominican Republic", "Baseball", "Merengue", "Beaches", "Caribbean"],
    examples: [
      { context: "Sports", text: "Dominican baseball 🇩🇴⚾" },
      { context: "Pride", text: "Dominican pride 🇩🇴" },
      { context: "Music", text: "Merengue night 🇩🇴" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["baseball", "palm-tree", "beach"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["dominican republic", "dominican", "flag", "caribbean", "baseball"]
  },
  {
    unicode: "🇵🇷",
    name: "Flag: Puerto Rico",
    slug: "flag-puerto-rico",
    shortMeaning: "The flag of Puerto Rico.",
    detailedMeaning: "The Flag of Puerto Rico emoji displays the red and white stripes with blue triangle and white star. Puerto Rico is a US territory known for its culture, music, and beautiful beaches.\n\nUsed to represent Puerto Rico, Puerto Rican identity and pride, and discussions about the island's culture.",
    usageContexts: ["Puerto Rico", "Culture", "Music", "Beaches", "Heritage"],
    examples: [
      { context: "Pride", text: "Boricua pride 🇵🇷" },
      { context: "Music", text: "Reggaeton vibes 🇵🇷" },
      { context: "Culture", text: "Puerto Rican heritage 🇵🇷" }
    ],
    misunderstandings: ["Similar to Cuban flag (inverted colors)"],
    relatedEmojis: ["palm-tree", "musical-notes", "beach"],
    categorySlug: "flags",
    subgroup: "subdivision-flag",
    keywords: ["puerto rico", "boricua", "flag", "caribbean", "territory"]
  },
  {
    unicode: "🇰🇪",
    name: "Flag: Kenya",
    slug: "flag-kenya",
    shortMeaning: "The national flag of Kenya.",
    detailedMeaning: "The Flag of Kenya emoji displays the black, red, and green horizontal stripes with white borders and Maasai shield. Kenya is known for safaris, marathons, and diverse wildlife.\n\nUsed to represent Kenya, Kenyan identity, and discussions about Kenyan culture and nature.",
    usageContexts: ["Kenya", "Safari", "Running", "Wildlife", "Africa"],
    examples: [
      { context: "Wildlife", text: "Kenyan safari 🇰🇪🦁" },
      { context: "Sports", text: "Kenyan runners 🇰🇪🏃" },
      { context: "Pride", text: "Kenyan pride 🇰🇪" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["lion", "elephant", "runner"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["kenya", "kenyan", "flag", "africa", "safari"]
  },
  {
    unicode: "🇬🇭",
    name: "Flag: Ghana",
    slug: "flag-ghana",
    shortMeaning: "The national flag of Ghana.",
    detailedMeaning: "The Flag of Ghana emoji displays the red, yellow, and green horizontal stripes with black star. Ghana was the first African country to gain independence from colonialism.\n\nUsed to represent Ghana, Ghanaian identity, and discussions about Ghanaian culture.",
    usageContexts: ["Ghana", "Culture", "History", "Heritage", "Africa"],
    examples: [
      { context: "Pride", text: "Ghanaian pride 🇬🇭" },
      { context: "Football", text: "Black Stars 🇬🇭⚽" },
      { context: "Culture", text: "Ghanaian heritage 🇬🇭" }
    ],
    misunderstandings: ["Similar to other African tricolors"],
    relatedEmojis: ["drum", "soccer-ball"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["ghana", "ghanaian", "flag", "africa", "gold coast"]
  },
  {
    unicode: "🇪🇹",
    name: "Flag: Ethiopia",
    slug: "flag-ethiopia",
    shortMeaning: "The national flag of Ethiopia.",
    detailedMeaning: "The Flag of Ethiopia emoji displays the green, yellow, and red horizontal stripes with emblem. Ethiopia has never been colonized and has rich ancient history.\n\nUsed to represent Ethiopia, Ethiopian identity, and discussions about Ethiopian culture and history.",
    usageContexts: ["Ethiopia", "Culture", "History", "Coffee", "Africa"],
    examples: [
      { context: "Pride", text: "Ethiopian pride 🇪🇹" },
      { context: "Culture", text: "Birthplace of coffee 🇪🇹☕" },
      { context: "History", text: "Ethiopian heritage 🇪🇹" }
    ],
    misunderstandings: ["Pan-African color inspiration"],
    relatedEmojis: ["coffee", "lion"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["ethiopia", "ethiopian", "flag", "africa", "coffee"]
  },
  {
    unicode: "🇲🇦",
    name: "Flag: Morocco",
    slug: "flag-morocco",
    shortMeaning: "The national flag of Morocco.",
    detailedMeaning: "The Flag of Morocco emoji displays the red flag with green pentagram (Solomon's Seal). Morocco is known for its markets, culture, and beautiful architecture.\n\nUsed to represent Morocco, Moroccan identity, and discussions about Moroccan culture.",
    usageContexts: ["Morocco", "Culture", "Travel", "Cuisine", "Africa"],
    examples: [
      { context: "Travel", text: "Marrakech vibes 🇲🇦" },
      { context: "Pride", text: "Moroccan pride 🇲🇦" },
      { context: "Culture", text: "Moroccan heritage 🇲🇦" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["camel", "tea", "mosque"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["morocco", "moroccan", "flag", "africa", "marrakech"]
  },
  {
    unicode: "🇹🇿",
    name: "Flag: Tanzania",
    slug: "flag-tanzania",
    shortMeaning: "The national flag of Tanzania.",
    detailedMeaning: "The Flag of Tanzania emoji displays the diagonal green, yellow, and blue sections with black diagonal band. Tanzania is home to Mount Kilimanjaro and Serengeti.\n\nUsed to represent Tanzania, Tanzanian identity, and discussions about the country.",
    usageContexts: ["Tanzania", "Kilimanjaro", "Safari", "Nature", "Africa"],
    examples: [
      { context: "Nature", text: "Climbing Kilimanjaro 🇹🇿🏔️" },
      { context: "Pride", text: "Tanzanian pride 🇹🇿" },
      { context: "Safari", text: "Serengeti adventure 🇹🇿" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["mountain", "lion", "elephant"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["tanzania", "tanzanian", "flag", "africa", "kilimanjaro"]
  },
  {
    unicode: "🇺🇬",
    name: "Flag: Uganda",
    slug: "flag-uganda",
    shortMeaning: "The national flag of Uganda.",
    detailedMeaning: "The Flag of Uganda emoji displays black, yellow, and red horizontal stripes with crane emblem. Uganda is known as the Pearl of Africa for its natural beauty.\n\nUsed to represent Uganda, Ugandan identity, and discussions about the country.",
    usageContexts: ["Uganda", "Nature", "Wildlife", "Culture", "Africa"],
    examples: [
      { context: "Pride", text: "Ugandan pride 🇺🇬" },
      { context: "Nature", text: "Pearl of Africa 🇺🇬" },
      { context: "Wildlife", text: "Gorilla trekking 🇺🇬🦍" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["gorilla", "bird"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["uganda", "ugandan", "flag", "africa", "pearl of africa"]
  },
  {
    unicode: "🇿🇼",
    name: "Flag: Zimbabwe",
    slug: "flag-zimbabwe",
    shortMeaning: "The national flag of Zimbabwe.",
    detailedMeaning: "The Flag of Zimbabwe emoji displays green, yellow, red, and black stripes with white triangle containing the Zimbabwe Bird. Known for Victoria Falls and rich heritage.\n\nUsed to represent Zimbabwe, Zimbabwean identity, and discussions about the country.",
    usageContexts: ["Zimbabwe", "Culture", "Victoria Falls", "Heritage", "Africa"],
    examples: [
      { context: "Pride", text: "Zimbabwean pride 🇿🇼" },
      { context: "Travel", text: "Victoria Falls 🇿🇼" },
      { context: "Culture", text: "Zimbabwean heritage 🇿🇼" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["waterfall", "bird"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["zimbabwe", "zimbabwean", "flag", "africa", "victoria falls"]
  },
  {
    unicode: "🇨🇿",
    name: "Flag: Czechia",
    slug: "flag-czechia",
    shortMeaning: "The national flag of the Czech Republic.",
    detailedMeaning: "The Flag of Czechia emoji displays the white and red horizontal bands with blue triangle. Czechia is known for Prague, beer, and rich history.\n\nUsed to represent Czechia, Czech identity, and discussions about Czech culture.",
    usageContexts: ["Czechia", "Prague", "Beer", "Culture", "Europe"],
    examples: [
      { context: "Travel", text: "Prague trip 🇨🇿" },
      { context: "Pride", text: "Czech pride 🇨🇿" },
      { context: "Culture", text: "Czech beer 🇨🇿🍺" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beer-mug", "castle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["czechia", "czech", "flag", "europe", "prague"]
  },
  {
    unicode: "🇭🇺",
    name: "Flag: Hungary",
    slug: "flag-hungary",
    shortMeaning: "The national flag of Hungary.",
    detailedMeaning: "The Flag of Hungary emoji displays the red, white, and green horizontal stripes. Hungary is known for Budapest, thermal baths, and rich culture.\n\nUsed to represent Hungary, Hungarian identity, and discussions about Hungarian culture.",
    usageContexts: ["Hungary", "Budapest", "Culture", "Thermal baths", "Europe"],
    examples: [
      { context: "Travel", text: "Budapest trip 🇭🇺" },
      { context: "Pride", text: "Hungarian pride 🇭🇺" },
      { context: "Culture", text: "Hungarian heritage 🇭🇺" }
    ],
    misunderstandings: ["Similar to other tricolors"],
    relatedEmojis: ["hot-springs", "castle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["hungary", "hungarian", "flag", "europe", "budapest"]
  },
  {
    unicode: "🇷🇴",
    name: "Flag: Romania",
    slug: "flag-romania",
    shortMeaning: "The national flag of Romania.",
    detailedMeaning: "The Flag of Romania emoji displays the blue, yellow, and red vertical stripes. Romania is known for Transylvania, castles, and Carpathian mountains.\n\nUsed to represent Romania, Romanian identity, and discussions about Romanian culture.",
    usageContexts: ["Romania", "Transylvania", "Castles", "Culture", "Europe"],
    examples: [
      { context: "Travel", text: "Transylvania trip 🇷🇴" },
      { context: "Pride", text: "Romanian pride 🇷🇴" },
      { context: "Culture", text: "Romanian heritage 🇷🇴" }
    ],
    misunderstandings: ["Similar to Chad flag"],
    relatedEmojis: ["castle", "bat", "mountain"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["romania", "romanian", "flag", "europe", "transylvania"]
  },
  {
    unicode: "🇧🇬",
    name: "Flag: Bulgaria",
    slug: "flag-bulgaria",
    shortMeaning: "The national flag of Bulgaria.",
    detailedMeaning: "The Flag of Bulgaria emoji displays the white, green, and red horizontal stripes. Bulgaria is known for its Black Sea coast and rose oil production.\n\nUsed to represent Bulgaria, Bulgarian identity, and discussions about Bulgarian culture.",
    usageContexts: ["Bulgaria", "Black Sea", "Culture", "Roses", "Europe"],
    examples: [
      { context: "Pride", text: "Bulgarian pride 🇧🇬" },
      { context: "Travel", text: "Black Sea vacation 🇧🇬" },
      { context: "Culture", text: "Bulgarian heritage 🇧🇬" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["rose", "beach"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["bulgaria", "bulgarian", "flag", "europe", "balkans"]
  },
  {
    unicode: "🇭🇷",
    name: "Flag: Croatia",
    slug: "flag-croatia",
    shortMeaning: "The national flag of Croatia.",
    detailedMeaning: "The Flag of Croatia emoji displays the red, white, and blue horizontal stripes with checkerboard coat of arms. Croatia is known for Dubrovnik and Adriatic coast.\n\nUsed to represent Croatia, Croatian identity, and during football matches.",
    usageContexts: ["Croatia", "Dubrovnik", "Football", "Adriatic", "Europe"],
    examples: [
      { context: "Football", text: "Vatreni! 🇭🇷⚽" },
      { context: "Travel", text: "Dubrovnik trip 🇭🇷" },
      { context: "Pride", text: "Croatian pride 🇭🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["soccer-ball", "beach", "castle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["croatia", "croatian", "flag", "europe", "adriatic"]
  },
  {
    unicode: "🇷🇸",
    name: "Flag: Serbia",
    slug: "flag-serbia",
    shortMeaning: "The national flag of Serbia.",
    detailedMeaning: "The Flag of Serbia emoji displays the red, blue, and white horizontal stripes with coat of arms. Serbia is known for Belgrade, hospitality, and sports.\n\nUsed to represent Serbia, Serbian identity, and discussions about Serbian culture.",
    usageContexts: ["Serbia", "Belgrade", "Culture", "Sports", "Europe"],
    examples: [
      { context: "Pride", text: "Serbian pride 🇷🇸" },
      { context: "Sports", text: "Go Serbia 🇷🇸" },
      { context: "Culture", text: "Serbian heritage 🇷🇸" }
    ],
    misunderstandings: ["Similar to other Slavic flags"],
    relatedEmojis: ["tennis", "castle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["serbia", "serbian", "flag", "europe", "balkans"]
  },
  {
    unicode: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    name: "Flag: England",
    slug: "flag-england",
    shortMeaning: "The flag of England - St George's Cross.",
    detailedMeaning: "The Flag of England emoji displays the St George's Cross - a red cross on white background. England is the largest country in the United Kingdom.\n\nUsed to represent England specifically (not the UK), during football matches, and discussions about English culture.",
    usageContexts: ["England", "Football", "Culture", "Sports", "UK"],
    examples: [
      { context: "Football", text: "Come on England 🏴󠁧󠁢󠁥󠁮󠁧󠁿⚽" },
      { context: "Pride", text: "English pride 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { context: "Sports", text: "Three Lions 🏴󠁧󠁢󠁥󠁮󠁧󠁿🦁" }
    ],
    misunderstandings: ["Often confused with UK flag"],
    relatedEmojis: ["flag-united-kingdom", "soccer-ball", "crown"],
    categorySlug: "flags",
    subgroup: "subdivision-flag",
    keywords: ["england", "english", "flag", "uk", "st george"]
  },
  {
    unicode: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    name: "Flag: Scotland",
    slug: "flag-scotland",
    shortMeaning: "The flag of Scotland - the Saltire.",
    detailedMeaning: "The Flag of Scotland emoji displays the Saltire or St Andrew's Cross - a white diagonal cross on blue background. Scotland is known for highlands, bagpipes, and whisky.\n\nUsed to represent Scotland, Scottish identity, during rugby matches, and discussions about Scottish culture.",
    usageContexts: ["Scotland", "Highlands", "Whisky", "Rugby", "UK"],
    examples: [
      { context: "Pride", text: "Scottish pride 🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
      { context: "Culture", text: "Scottish whisky 🏴󠁧󠁢󠁳󠁣󠁴󠁿🥃" },
      { context: "Rugby", text: "Go Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿🏉" }
    ],
    misunderstandings: ["Clear Scottish flag"],
    relatedEmojis: ["flag-united-kingdom", "whisky", "bagpipes"],
    categorySlug: "flags",
    subgroup: "subdivision-flag",
    keywords: ["scotland", "scottish", "flag", "uk", "saltire"]
  },
  {
    unicode: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    name: "Flag: Wales",
    slug: "flag-wales",
    shortMeaning: "The flag of Wales with red dragon.",
    detailedMeaning: "The Flag of Wales emoji displays the distinctive Red Dragon (Y Ddraig Goch) on green and white. Wales is known for rugby, singing, and beautiful landscapes.\n\nUsed to represent Wales, Welsh identity, during rugby matches, and discussions about Welsh culture.",
    usageContexts: ["Wales", "Rugby", "Dragon", "Culture", "UK"],
    examples: [
      { context: "Rugby", text: "Cymru am byth 🏴󠁧󠁢󠁷󠁬󠁳󠁿🏉" },
      { context: "Pride", text: "Welsh pride 🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
      { context: "Culture", text: "Welsh heritage 🏴󠁧󠁢󠁷󠁬󠁳󠁿🐉" }
    ],
    misunderstandings: ["Very distinctive with dragon"],
    relatedEmojis: ["flag-united-kingdom", "dragon", "rugby-football"],
    categorySlug: "flags",
    subgroup: "subdivision-flag",
    keywords: ["wales", "welsh", "flag", "uk", "dragon"]
  },
  {
    unicode: "🇻🇳",
    name: "Flag: Vietnam",
    slug: "flag-vietnam",
    shortMeaning: "The national flag of Vietnam.",
    detailedMeaning: "The Flag of Vietnam emoji displays the red flag with yellow star. Vietnam is known for its rich history, delicious cuisine (pho, banh mi), and stunning landscapes.\n\nUsed to represent Vietnam, Vietnamese identity, and discussions about Vietnamese culture.",
    usageContexts: ["Vietnam", "Culture", "Food", "History", "Southeast Asia"],
    examples: [
      { context: "Food", text: "Vietnamese pho 🇻🇳🍜" },
      { context: "Pride", text: "Vietnamese pride 🇻🇳" },
      { context: "Travel", text: "Hanoi trip 🇻🇳" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["steaming-bowl", "rice", "conical-hat"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["vietnam", "vietnamese", "flag", "asia", "pho"]
  },
  {
    unicode: "🇵🇭",
    name: "Flag: Philippines",
    slug: "flag-philippines",
    shortMeaning: "The national flag of the Philippines.",
    detailedMeaning: "The Flag of the Philippines emoji displays the blue and red flag with white triangle and sun. The Philippines is known for its beautiful islands, hospitality, and rich culture.\n\nUsed to represent the Philippines, Filipino identity, and discussions about Filipino culture.",
    usageContexts: ["Philippines", "Islands", "Culture", "Heritage", "Southeast Asia"],
    examples: [
      { context: "Pride", text: "Mabuhay 🇵🇭" },
      { context: "Travel", text: "Island hopping 🇵🇭" },
      { context: "Culture", text: "Filipino heritage 🇵🇭" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beach", "palm-tree", "tropical-fish"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["philippines", "filipino", "flag", "asia", "islands"]
  },
  {
    unicode: "🇳🇬",
    name: "Flag: Nigeria",
    slug: "flag-nigeria",
    shortMeaning: "The national flag of Nigeria.",
    detailedMeaning: "The Flag of Nigeria emoji displays the green and white vertical stripes. Nigeria is Africa's most populous country, known for its film industry (Nollywood) and music.\n\nUsed to represent Nigeria, Nigerian identity, and discussions about Nigerian culture.",
    usageContexts: ["Nigeria", "Nollywood", "Music", "Culture", "Africa"],
    examples: [
      { context: "Pride", text: "Nigerian pride 🇳🇬" },
      { context: "Music", text: "Afrobeats 🇳🇬🎵" },
      { context: "Football", text: "Super Eagles 🇳🇬⚽" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["musical-notes", "soccer-ball"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["nigeria", "nigerian", "flag", "africa", "afrobeats"]
  },
  {
    unicode: "🇪🇬",
    name: "Flag: Egypt",
    slug: "flag-egypt",
    shortMeaning: "The national flag of Egypt.",
    detailedMeaning: "The Flag of Egypt emoji displays the red, white, and black horizontal stripes with eagle emblem. Egypt is known for pyramids, ancient history, and the Nile.\n\nUsed to represent Egypt, Egyptian identity, and discussions about Egyptian culture and history.",
    usageContexts: ["Egypt", "Pyramids", "History", "Nile", "Africa"],
    examples: [
      { context: "History", text: "Pyramids of Giza 🇪🇬🔺" },
      { context: "Pride", text: "Egyptian pride 🇪🇬" },
      { context: "Travel", text: "Egypt trip 🇪🇬" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["pyramid", "camel", "sphinx"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["egypt", "egyptian", "flag", "africa", "pyramids"]
  },
  {
    unicode: "🇨🇴",
    name: "Flag: Colombia",
    slug: "flag-colombia",
    shortMeaning: "The national flag of Colombia.",
    detailedMeaning: "The Flag of Colombia emoji displays the yellow, blue, and red horizontal stripes. Colombia is known for coffee, cumbia music, and beautiful landscapes.\n\nUsed to represent Colombia, Colombian identity, and discussions about Colombian culture.",
    usageContexts: ["Colombia", "Coffee", "Music", "Culture", "South America"],
    examples: [
      { context: "Coffee", text: "Colombian coffee 🇨🇴☕" },
      { context: "Pride", text: "Colombian pride 🇨🇴" },
      { context: "Music", text: "Cumbia vibes 🇨🇴" }
    ],
    misunderstandings: ["Similar to Ecuador and Venezuela flags"],
    relatedEmojis: ["coffee", "musical-notes", "parrot"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["colombia", "colombian", "flag", "south america", "coffee"]
  },
  {
    unicode: "🇻🇪",
    name: "Flag: Venezuela",
    slug: "flag-venezuela",
    shortMeaning: "The national flag of Venezuela.",
    detailedMeaning: "The Flag of Venezuela emoji displays the yellow, blue, and red horizontal stripes with stars. Venezuela is known for Angel Falls and rich oil reserves.\n\nUsed to represent Venezuela, Venezuelan identity, and discussions about Venezuelan culture.",
    usageContexts: ["Venezuela", "Culture", "Heritage", "Angel Falls", "South America"],
    examples: [
      { context: "Pride", text: "Venezuelan pride 🇻🇪" },
      { context: "Nature", text: "Angel Falls 🇻🇪" },
      { context: "Culture", text: "Venezuelan heritage 🇻🇪" }
    ],
    misunderstandings: ["Similar to Colombia and Ecuador flags"],
    relatedEmojis: ["waterfall", "baseball"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["venezuela", "venezuelan", "flag", "south america", "angel falls"]
  },
  {
    unicode: "🇮🇶",
    name: "Flag: Iraq",
    slug: "flag-iraq",
    shortMeaning: "The national flag of Iraq.",
    detailedMeaning: "The Flag of Iraq emoji displays the red, white, and black horizontal stripes with Takbir. Iraq is known for its ancient Mesopotamian history.\n\nUsed to represent Iraq, Iraqi identity, and discussions about Iraqi culture.",
    usageContexts: ["Iraq", "Mesopotamia", "History", "Culture", "Middle East"],
    examples: [
      { context: "Pride", text: "Iraqi pride 🇮🇶" },
      { context: "History", text: "Cradle of civilization 🇮🇶" },
      { context: "Culture", text: "Iraqi heritage 🇮🇶" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["mosque", "ancient"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["iraq", "iraqi", "flag", "middle east", "mesopotamia"]
  },
  {
    unicode: "🇮🇷",
    name: "Flag: Iran",
    slug: "flag-iran",
    shortMeaning: "The national flag of Iran.",
    detailedMeaning: "The Flag of Iran emoji displays the green, white, and red horizontal stripes with emblem. Iran is known for Persian culture, poetry, and ancient history.\n\nUsed to represent Iran, Iranian/Persian identity, and discussions about Persian culture.",
    usageContexts: ["Iran", "Persia", "Culture", "Poetry", "Middle East"],
    examples: [
      { context: "Pride", text: "Iranian pride 🇮🇷" },
      { context: "Culture", text: "Persian heritage 🇮🇷" },
      { context: "History", text: "Persepolis 🇮🇷" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["poem", "ancient-building"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["iran", "iranian", "persian", "flag", "middle east"]
  },
  {
    unicode: "🇰🇼",
    name: "Flag: Kuwait",
    slug: "flag-kuwait",
    shortMeaning: "The national flag of Kuwait.",
    detailedMeaning: "The Flag of Kuwait emoji displays the green, white, red horizontal stripes with black trapezoid. Kuwait is known for oil wealth and modern development.\n\nUsed to represent Kuwait, Kuwaiti identity, and discussions about the country.",
    usageContexts: ["Kuwait", "Gulf", "Culture", "Heritage", "Middle East"],
    examples: [
      { context: "Pride", text: "Kuwaiti pride 🇰🇼" },
      { context: "Culture", text: "Kuwaiti heritage 🇰🇼" },
      { context: "Travel", text: "Kuwait City 🇰🇼" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["desert", "cityscape"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["kuwait", "kuwaiti", "flag", "middle east", "gulf"]
  },
  {
    unicode: "🇶🇦",
    name: "Flag: Qatar",
    slug: "flag-qatar",
    shortMeaning: "The national flag of Qatar.",
    detailedMeaning: "The Flag of Qatar emoji displays the distinctive maroon and white flag. Qatar is known for hosting the 2022 FIFA World Cup and modern architecture.\n\nUsed to represent Qatar, Qatari identity, and discussions about the country.",
    usageContexts: ["Qatar", "World Cup", "Gulf", "Culture", "Middle East"],
    examples: [
      { context: "Football", text: "World Cup 2022 🇶🇦⚽" },
      { context: "Pride", text: "Qatari pride 🇶🇦" },
      { context: "Travel", text: "Doha trip 🇶🇦" }
    ],
    misunderstandings: ["Distinctive color and shape"],
    relatedEmojis: ["soccer-ball", "trophy", "cityscape"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["qatar", "qatari", "flag", "middle east", "world cup"]
  },
  {
    unicode: "🇯🇴",
    name: "Flag: Jordan",
    slug: "flag-jordan",
    shortMeaning: "The national flag of Jordan.",
    detailedMeaning: "The Flag of Jordan emoji displays the black, white, and green horizontal stripes with red triangle and star. Jordan is known for Petra and historical sites.\n\nUsed to represent Jordan, Jordanian identity, and discussions about the country.",
    usageContexts: ["Jordan", "Petra", "History", "Culture", "Middle East"],
    examples: [
      { context: "Travel", text: "Visiting Petra 🇯🇴" },
      { context: "Pride", text: "Jordanian pride 🇯🇴" },
      { context: "History", text: "Ancient wonders 🇯🇴" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["desert", "ancient-building"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["jordan", "jordanian", "flag", "middle east", "petra"]
  },
  {
    unicode: "🇱🇧",
    name: "Flag: Lebanon",
    slug: "flag-lebanon",
    shortMeaning: "The national flag of Lebanon.",
    detailedMeaning: "The Flag of Lebanon emoji displays the red and white stripes with green cedar tree. Lebanon is known for its rich cuisine, history, and the iconic cedar.\n\nUsed to represent Lebanon, Lebanese identity, and discussions about Lebanese culture.",
    usageContexts: ["Lebanon", "Cedar", "Cuisine", "Culture", "Middle East"],
    examples: [
      { context: "Food", text: "Lebanese cuisine 🇱🇧" },
      { context: "Pride", text: "Lebanese pride 🇱🇧" },
      { context: "Culture", text: "Cedar of Lebanon 🇱🇧" }
    ],
    misunderstandings: ["Distinctive cedar symbol"],
    relatedEmojis: ["evergreen-tree", "falafel"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["lebanon", "lebanese", "flag", "middle east", "cedar"]
  },
  {
    unicode: "🇦🇱",
    name: "Flag: Albania",
    slug: "flag-albania",
    shortMeaning: "The national flag of Albania.",
    detailedMeaning: "The Flag of Albania emoji displays the red flag with black double-headed eagle. Albania is known for its Adriatic coast and historic sites.\n\nUsed to represent Albania, Albanian identity, and discussions about Albanian culture.",
    usageContexts: ["Albania", "Eagle", "Adriatic", "Culture", "Balkans"],
    examples: [
      { context: "Pride", text: "Shqipëria 🇦🇱" },
      { context: "Culture", text: "Albanian heritage 🇦🇱" },
      { context: "Travel", text: "Albanian Riviera 🇦🇱" }
    ],
    misunderstandings: ["Distinctive eagle design"],
    relatedEmojis: ["eagle", "beach"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["albania", "albanian", "flag", "balkans", "eagle"]
  },
  {
    unicode: "🇺🇾",
    name: "Flag: Uruguay",
    slug: "flag-uruguay",
    shortMeaning: "The national flag of Uruguay.",
    detailedMeaning: "The Flag of Uruguay emoji displays blue and white stripes with the Sun of May. Uruguay is known for football, mate tea, and high quality of life.\n\nUsed to represent Uruguay, Uruguayan identity, and discussions about the country.",
    usageContexts: ["Uruguay", "Football", "Mate", "Culture", "South America"],
    examples: [
      { context: "Football", text: "Uruguay football 🇺🇾⚽" },
      { context: "Pride", text: "Uruguayan pride 🇺🇾" },
      { context: "Culture", text: "Mate time 🇺🇾🧉" }
    ],
    misunderstandings: ["Similar sun to Argentina flag"],
    relatedEmojis: ["soccer-ball", "mate", "sun"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["uruguay", "uruguayan", "flag", "south america", "football"]
  },
  {
    unicode: "🇵🇾",
    name: "Flag: Paraguay",
    slug: "flag-paraguay",
    shortMeaning: "The national flag of Paraguay.",
    detailedMeaning: "The Flag of Paraguay emoji displays the red, white, and blue horizontal stripes with emblem. Paraguay is unique for having different emblems on each side of its flag.\n\nUsed to represent Paraguay, Paraguayan identity, and discussions about the country.",
    usageContexts: ["Paraguay", "Culture", "Heritage", "South America", "Unique"],
    examples: [
      { context: "Pride", text: "Paraguayan pride 🇵🇾" },
      { context: "Culture", text: "Paraguayan heritage 🇵🇾" },
      { context: "Unique", text: "Two-sided flag 🇵🇾" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["harp", "sun"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["paraguay", "paraguayan", "flag", "south america", "guarani"]
  },
  {
    unicode: "🇧🇴",
    name: "Flag: Bolivia",
    slug: "flag-bolivia",
    shortMeaning: "The national flag of Bolivia.",
    detailedMeaning: "The Flag of Bolivia emoji displays the red, yellow, and green horizontal stripes. Bolivia is known for its high-altitude cities and indigenous culture.\n\nUsed to represent Bolivia, Bolivian identity, and discussions about the country.",
    usageContexts: ["Bolivia", "Andes", "Culture", "Heritage", "South America"],
    examples: [
      { context: "Pride", text: "Bolivian pride 🇧🇴" },
      { context: "Culture", text: "Bolivian heritage 🇧🇴" },
      { context: "Travel", text: "Salar de Uyuni 🇧🇴" }
    ],
    misunderstandings: ["Similar to other South American tricolors"],
    relatedEmojis: ["llama", "mountain"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["bolivia", "bolivian", "flag", "south america", "andes"]
  },
  {
    unicode: "🇳🇵",
    name: "Flag: Nepal",
    slug: "flag-nepal",
    shortMeaning: "The unique non-rectangular flag of Nepal.",
    detailedMeaning: "The Flag of Nepal emoji displays the only non-rectangular national flag in the world - two stacked triangles with sun and moon symbols. Nepal is home to Mount Everest.\n\nUsed to represent Nepal, Nepalese identity, and discussions about the country.",
    usageContexts: ["Nepal", "Everest", "Himalaya", "Unique", "Asia"],
    examples: [
      { context: "Travel", text: "Climbing Everest 🇳🇵🏔️" },
      { context: "Pride", text: "Nepalese pride 🇳🇵" },
      { context: "Unique", text: "Only non-rectangular flag 🇳🇵" }
    ],
    misunderstandings: ["Very distinctive shape"],
    relatedEmojis: ["mountain", "snow-capped-mountain"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["nepal", "nepalese", "flag", "asia", "everest"]
  },
  {
    unicode: "🇱🇰",
    name: "Flag: Sri Lanka",
    slug: "flag-sri-lanka",
    shortMeaning: "The national flag of Sri Lanka.",
    detailedMeaning: "The Flag of Sri Lanka emoji displays the lion flag with green and orange stripes. Sri Lanka is known for tea, ancient temples, and beautiful beaches.\n\nUsed to represent Sri Lanka, Sri Lankan identity, and discussions about the country.",
    usageContexts: ["Sri Lanka", "Tea", "Temples", "Beaches", "Asia"],
    examples: [
      { context: "Tea", text: "Ceylon tea 🇱🇰☕" },
      { context: "Pride", text: "Sri Lankan pride 🇱🇰" },
      { context: "Cricket", text: "Sri Lanka cricket 🇱🇰🏏" }
    ],
    misunderstandings: ["Distinctive lion design"],
    relatedEmojis: ["tea", "lion", "beach"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["sri lanka", "sri lankan", "flag", "asia", "ceylon"]
  },
  {
    unicode: "🇲🇲",
    name: "Flag: Myanmar",
    slug: "flag-myanmar",
    shortMeaning: "The national flag of Myanmar (Burma).",
    detailedMeaning: "The Flag of Myanmar emoji displays the yellow, green, and red horizontal stripes with white star. Myanmar is known for ancient temples and rich Buddhist heritage.\n\nUsed to represent Myanmar, Burmese identity, and discussions about the country.",
    usageContexts: ["Myanmar", "Burma", "Temples", "Buddhism", "Southeast Asia"],
    examples: [
      { context: "Pride", text: "Myanmar pride 🇲🇲" },
      { context: "Travel", text: "Bagan temples 🇲🇲" },
      { context: "Culture", text: "Burmese heritage 🇲🇲" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["temple", "lotus"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["myanmar", "burma", "burmese", "flag", "asia"]
  },
  {
    unicode: "🇰🇭",
    name: "Flag: Cambodia",
    slug: "flag-cambodia",
    shortMeaning: "The national flag of Cambodia.",
    detailedMeaning: "The Flag of Cambodia emoji displays the blue and red stripes with Angkor Wat depiction. Cambodia is famous for Angkor Wat and Khmer Empire history.\n\nUsed to represent Cambodia, Cambodian identity, and discussions about the country.",
    usageContexts: ["Cambodia", "Angkor Wat", "Temples", "History", "Southeast Asia"],
    examples: [
      { context: "Travel", text: "Angkor Wat 🇰🇭" },
      { context: "Pride", text: "Cambodian pride 🇰🇭" },
      { context: "History", text: "Khmer heritage 🇰🇭" }
    ],
    misunderstandings: ["Only flag with building depiction"],
    relatedEmojis: ["temple", "ancient-building"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["cambodia", "cambodian", "khmer", "flag", "angkor"]
  },
  {
    unicode: "🇱🇦",
    name: "Flag: Laos",
    slug: "flag-laos",
    shortMeaning: "The national flag of Laos.",
    detailedMeaning: "The Flag of Laos emoji displays the red and blue stripes with white circle. Laos is known for its French colonial heritage and Buddhist temples.\n\nUsed to represent Laos, Laotian identity, and discussions about the country.",
    usageContexts: ["Laos", "Temples", "Culture", "Heritage", "Southeast Asia"],
    examples: [
      { context: "Pride", text: "Laotian pride 🇱🇦" },
      { context: "Travel", text: "Luang Prabang 🇱🇦" },
      { context: "Culture", text: "Laotian heritage 🇱🇦" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["temple", "rice"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["laos", "laotian", "flag", "asia", "mekong"]
  },
  {
    unicode: "🇧🇳",
    name: "Flag: Brunei",
    slug: "flag-brunei",
    shortMeaning: "The national flag of Brunei.",
    detailedMeaning: "The Flag of Brunei emoji displays the yellow flag with diagonal black and white stripes and emblem. Brunei is known for its oil wealth and Sultan.\n\nUsed to represent Brunei, Bruneian identity, and discussions about the country.",
    usageContexts: ["Brunei", "Sultan", "Oil", "Culture", "Southeast Asia"],
    examples: [
      { context: "Pride", text: "Bruneian pride 🇧🇳" },
      { context: "Culture", text: "Bruneian heritage 🇧🇳" },
      { context: "Travel", text: "Bandar Seri Begawan 🇧🇳" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["mosque", "crown"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["brunei", "bruneian", "flag", "asia", "sultan"]
  },
  {
    unicode: "🇲🇻",
    name: "Flag: Maldives",
    slug: "flag-maldives",
    shortMeaning: "The national flag of Maldives.",
    detailedMeaning: "The Flag of Maldives emoji displays the red flag with green rectangle and white crescent. Maldives is known for luxury resorts, clear waters, and coral reefs.\n\nUsed to represent Maldives, Maldivian identity, and travel discussions.",
    usageContexts: ["Maldives", "Beach", "Resort", "Luxury", "Island"],
    examples: [
      { context: "Travel", text: "Maldives vacation 🇲🇻🏝️" },
      { context: "Luxury", text: "Paradise found 🇲🇻" },
      { context: "Beach", text: "Crystal clear waters 🇲🇻" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beach", "palm-tree", "tropical-fish"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["maldives", "maldivian", "flag", "asia", "paradise"]
  },
  {
    unicode: "🇫🇯",
    name: "Flag: Fiji",
    slug: "flag-fiji",
    shortMeaning: "The national flag of Fiji.",
    detailedMeaning: "The Flag of Fiji emoji displays the light blue flag with Union Jack and coat of arms. Fiji is known for beautiful islands and friendly people.\n\nUsed to represent Fiji, Fijian identity, and travel discussions.",
    usageContexts: ["Fiji", "Islands", "Pacific", "Travel", "Beach"],
    examples: [
      { context: "Travel", text: "Fiji vacation 🇫🇯🏝️" },
      { context: "Pride", text: "Bula! 🇫🇯" },
      { context: "Rugby", text: "Fiji rugby 🇫🇯🏉" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["palm-tree", "beach", "rugby-football"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["fiji", "fijian", "flag", "pacific", "islands"]
  },
  {
    unicode: "🇮🇸",
    name: "Flag: Iceland",
    slug: "flag-iceland",
    shortMeaning: "The national flag of Iceland.",
    detailedMeaning: "The Flag of Iceland emoji displays the blue flag with red-bordered white Nordic cross. Iceland is known for volcanoes, geysers, and Northern Lights.\n\nUsed to represent Iceland, Icelandic identity, and discussions about the country.",
    usageContexts: ["Iceland", "Northern Lights", "Volcanoes", "Nature", "Nordic"],
    examples: [
      { context: "Nature", text: "Northern Lights 🇮🇸" },
      { context: "Pride", text: "Icelandic pride 🇮🇸" },
      { context: "Travel", text: "Iceland adventure 🇮🇸" }
    ],
    misunderstandings: ["Clear Nordic flag design"],
    relatedEmojis: ["volcano", "snowflake", "geyser"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["iceland", "icelandic", "flag", "nordic", "aurora"]
  },
  {
    unicode: "🇱🇺",
    name: "Flag: Luxembourg",
    slug: "flag-luxembourg",
    shortMeaning: "The national flag of Luxembourg.",
    detailedMeaning: "The Flag of Luxembourg emoji displays the red, white, and light blue horizontal stripes. Luxembourg is known for banking, castles, and multilingual culture.\n\nUsed to represent Luxembourg, Luxembourgish identity, and EU discussions.",
    usageContexts: ["Luxembourg", "EU", "Banking", "Castles", "Europe"],
    examples: [
      { context: "Pride", text: "Luxembourgish pride 🇱🇺" },
      { context: "EU", text: "EU institutions 🇱🇺" },
      { context: "Travel", text: "Luxembourg castles 🇱🇺" }
    ],
    misunderstandings: ["Similar to Netherlands flag"],
    relatedEmojis: ["castle", "bank", "european-union"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["luxembourg", "luxembourgish", "flag", "europe", "grand duchy"]
  },
  {
    unicode: "🇲🇹",
    name: "Flag: Malta",
    slug: "flag-malta",
    shortMeaning: "The national flag of Malta.",
    detailedMeaning: "The Flag of Malta emoji displays the white and red vertical halves with George Cross. Malta is known for historic sites, beaches, and Mediterranean culture.\n\nUsed to represent Malta, Maltese identity, and discussions about the country.",
    usageContexts: ["Malta", "Mediterranean", "History", "Beaches", "Europe"],
    examples: [
      { context: "Travel", text: "Malta vacation 🇲🇹" },
      { context: "Pride", text: "Maltese pride 🇲🇹" },
      { context: "History", text: "Knights of Malta 🇲🇹" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beach", "castle", "ancient-building"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["malta", "maltese", "flag", "europe", "mediterranean"]
  },
  {
    unicode: "🇨🇾",
    name: "Flag: Cyprus",
    slug: "flag-cyprus",
    shortMeaning: "The national flag of Cyprus.",
    detailedMeaning: "The Flag of Cyprus emoji displays the white flag with copper-colored island map and olive branches. Cyprus is known for beaches, history, and being a divided island.\n\nUsed to represent Cyprus, Cypriot identity, and discussions about the country.",
    usageContexts: ["Cyprus", "Mediterranean", "Beaches", "History", "Europe"],
    examples: [
      { context: "Travel", text: "Cyprus beaches 🇨🇾" },
      { context: "Pride", text: "Cypriot pride 🇨🇾" },
      { context: "Culture", text: "Cypriot heritage 🇨🇾" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["beach", "olive", "ancient-building"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["cyprus", "cypriot", "flag", "europe", "mediterranean"]
  },
  {
    unicode: "🇪🇪",
    name: "Flag: Estonia",
    slug: "flag-estonia",
    shortMeaning: "The national flag of Estonia.",
    detailedMeaning: "The Flag of Estonia emoji displays the blue, black, and white horizontal stripes. Estonia is known for digital innovation and Baltic culture.\n\nUsed to represent Estonia, Estonian identity, and discussions about the country.",
    usageContexts: ["Estonia", "Baltic", "Digital", "Culture", "Europe"],
    examples: [
      { context: "Tech", text: "Digital Estonia 🇪🇪💻" },
      { context: "Pride", text: "Estonian pride 🇪🇪" },
      { context: "Culture", text: "Estonian heritage 🇪🇪" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["laptop", "forest"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["estonia", "estonian", "flag", "europe", "baltic"]
  },
  {
    unicode: "🇱🇻",
    name: "Flag: Latvia",
    slug: "flag-latvia",
    shortMeaning: "The national flag of Latvia.",
    detailedMeaning: "The Flag of Latvia emoji displays the carmine red and white horizontal stripes. Latvia is known for its Baltic heritage and Riga's art nouveau architecture.\n\nUsed to represent Latvia, Latvian identity, and discussions about the country.",
    usageContexts: ["Latvia", "Baltic", "Riga", "Culture", "Europe"],
    examples: [
      { context: "Travel", text: "Riga trip 🇱🇻" },
      { context: "Pride", text: "Latvian pride 🇱🇻" },
      { context: "Culture", text: "Latvian heritage 🇱🇻" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["castle", "forest"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["latvia", "latvian", "flag", "europe", "baltic"]
  },
  {
    unicode: "🇱🇹",
    name: "Flag: Lithuania",
    slug: "flag-lithuania",
    shortMeaning: "The national flag of Lithuania.",
    detailedMeaning: "The Flag of Lithuania emoji displays the yellow, green, and red horizontal stripes. Lithuania is known for basketball and Baltic heritage.\n\nUsed to represent Lithuania, Lithuanian identity, and discussions about the country.",
    usageContexts: ["Lithuania", "Baltic", "Basketball", "Culture", "Europe"],
    examples: [
      { context: "Sports", text: "Lithuanian basketball 🇱🇹🏀" },
      { context: "Pride", text: "Lithuanian pride 🇱🇹" },
      { context: "Culture", text: "Lithuanian heritage 🇱🇹" }
    ],
    misunderstandings: ["Clear national flag"],
    relatedEmojis: ["basketball", "castle"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["lithuania", "lithuanian", "flag", "europe", "baltic"]
  },
  {
    unicode: "🇸🇰",
    name: "Flag: Slovakia",
    slug: "flag-slovakia",
    shortMeaning: "The national flag of Slovakia.",
    detailedMeaning: "The Flag of Slovakia emoji displays the white, blue, and red horizontal stripes with coat of arms. Slovakia is known for castles, Tatras mountains, and rich folk traditions.\n\nUsed to represent Slovakia, Slovak identity, and discussions about the country.",
    usageContexts: ["Slovakia", "Castles", "Mountains", "Culture", "Europe"],
    examples: [
      { context: "Travel", text: "Slovak castles 🇸🇰🏰" },
      { context: "Pride", text: "Slovak pride 🇸🇰" },
      { context: "Nature", text: "High Tatras 🇸🇰🏔️" }
    ],
    misunderstandings: ["Similar to Slovenian flag"],
    relatedEmojis: ["castle", "mountain"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["slovakia", "slovak", "flag", "europe", "tatras"]
  },
  {
    unicode: "🇸🇮",
    name: "Flag: Slovenia",
    slug: "flag-slovenia",
    shortMeaning: "The national flag of Slovenia.",
    detailedMeaning: "The Flag of Slovenia emoji displays the white, blue, and red horizontal stripes with coat of arms. Slovenia is known for Lake Bled, Alps, and excellent wines.\n\nUsed to represent Slovenia, Slovenian identity, and discussions about the country.",
    usageContexts: ["Slovenia", "Lake Bled", "Alps", "Wine", "Europe"],
    examples: [
      { context: "Travel", text: "Lake Bled 🇸🇮" },
      { context: "Pride", text: "Slovenian pride 🇸🇮" },
      { context: "Nature", text: "Julian Alps 🇸🇮🏔️" }
    ],
    misunderstandings: ["Similar to Slovak flag"],
    relatedEmojis: ["mountain", "wine-glass", "lake"],
    categorySlug: "flags",
    subgroup: "country-flag",
    keywords: ["slovenia", "slovenian", "flag", "europe", "alps"]
  },
  // FOOD & DRINK - Additional
  {
    unicode: "🍕",
    name: "Pizza",
    slug: "pizza",
    shortMeaning: "A delicious slice of pizza - everyone's favorite comfort food.",
    detailedMeaning: "The Pizza emoji shows a triangular slice of pizza with pepperoni toppings. Pizza is one of the world's most beloved foods, representing comfort, fun, and sharing good times with friends.\n\nUsed when talking about food, ordering pizza, expressing hunger, or just sharing your love for this iconic dish.",
    usageContexts: ["Food", "Hunger", "Party food", "Comfort", "Italian cuisine"],
    examples: [
      { context: "Hungry", text: "Pizza time 🍕" },
      { context: "Party", text: "Ordered pizza for the gang 🍕" },
      { context: "Love", text: "Pizza is life 🍕" }
    ],
    misunderstandings: ["Universally loved symbol"],
    relatedEmojis: ["hamburger", "french-fries", "cheese"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["pizza", "food", "italian", "slice", "pepperoni"]
  },
  {
    unicode: "🍔",
    name: "Hamburger",
    slug: "hamburger",
    shortMeaning: "A juicy hamburger - classic American comfort food.",
    detailedMeaning: "The Hamburger emoji shows a classic burger with lettuce, tomato, and cheese between sesame buns. It represents American cuisine, fast food, and satisfying hunger.\n\nUsed for food discussions, expressing hunger, or talking about burgers and American-style dining.",
    usageContexts: ["Food", "Fast food", "American cuisine", "Hunger", "Grilling"],
    examples: [
      { context: "Hungry", text: "Craving a burger 🍔" },
      { context: "BBQ", text: "Grilling burgers 🍔" },
      { context: "Food", text: "Best burger ever 🍔" }
    ],
    misunderstandings: ["Clear food meaning"],
    relatedEmojis: ["pizza", "french-fries", "hot-dog"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["burger", "hamburger", "food", "fast food", "american"]
  },
  {
    unicode: "🍟",
    name: "French Fries",
    slug: "french-fries",
    shortMeaning: "Golden crispy french fries - the perfect side dish.",
    detailedMeaning: "The French Fries emoji shows a red container filled with golden fried potato sticks. Fries are the ultimate side dish and comfort food enjoyed worldwide.\n\nUsed when talking about food, ordering fast food, or expressing love for this crispy snack.",
    usageContexts: ["Food", "Snack", "Fast food", "Side dish", "Comfort food"],
    examples: [
      { context: "Snack", text: "Need fries 🍟" },
      { context: "Order", text: "Extra large fries please 🍟" },
      { context: "Love", text: "Fries before guys 🍟" }
    ],
    misunderstandings: ["Clear food meaning"],
    relatedEmojis: ["hamburger", "pizza", "ketchup"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["fries", "french fries", "potato", "fast food", "snack"]
  },
  {
    unicode: "🍣",
    name: "Sushi",
    slug: "sushi",
    shortMeaning: "Delicate sushi - Japanese culinary art.",
    detailedMeaning: "The Sushi emoji shows a piece of nigiri sushi with salmon on rice. Sushi represents Japanese cuisine, fine dining, and culinary artistry.\n\nUsed for food discussions, Japanese culture, or expressing appreciation for this elegant cuisine.",
    usageContexts: ["Japanese food", "Fine dining", "Seafood", "Culture", "Date night"],
    examples: [
      { context: "Dinner", text: "Sushi date 🍣" },
      { context: "Food", text: "All you can eat sushi 🍣" },
      { context: "Craving", text: "I need sushi 🍣" }
    ],
    misunderstandings: ["Clear food meaning"],
    relatedEmojis: ["rice-ball", "chopsticks", "fish"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["sushi", "japanese", "fish", "rice", "seafood"]
  },
  {
    unicode: "🍜",
    name: "Steaming Bowl",
    slug: "steaming-bowl",
    shortMeaning: "A hot bowl of noodle soup - comfort in a bowl.",
    detailedMeaning: "The Steaming Bowl emoji shows a bowl of hot noodle soup with steam rising, often representing ramen or pho. It's the ultimate comfort food, especially on cold days.\n\nUsed for food discussions, Asian cuisine, or expressing the need for something warm and comforting.",
    usageContexts: ["Noodles", "Asian food", "Comfort food", "Warm meal", "Ramen"],
    examples: [
      { context: "Food", text: "Ramen time 🍜" },
      { context: "Comfort", text: "Soup weather 🍜" },
      { context: "Craving", text: "Need some pho 🍜" }
    ],
    misunderstandings: ["Could be any noodle soup"],
    relatedEmojis: ["sushi", "chopsticks", "hot-beverage"],
    categorySlug: "food-and-drink",
    subgroup: "food-asian",
    keywords: ["noodles", "ramen", "pho", "soup", "bowl"]
  },
  {
    unicode: "🌮",
    name: "Taco",
    slug: "taco",
    shortMeaning: "A delicious taco - Mexican flavor fiesta!",
    detailedMeaning: "The Taco emoji shows a traditional taco with meat, lettuce, and cheese in a hard shell. Tacos represent Mexican cuisine, fun dining, and Taco Tuesday celebrations.\n\nUsed for food discussions, Mexican culture, or celebrating the joy of tacos.",
    usageContexts: ["Mexican food", "Taco Tuesday", "Party food", "Street food", "Celebration"],
    examples: [
      { context: "Tuesday", text: "Taco Tuesday 🌮" },
      { context: "Food", text: "Taco night 🌮" },
      { context: "Craving", text: "I could eat 10 tacos 🌮" }
    ],
    misunderstandings: ["Clear food meaning"],
    relatedEmojis: ["burrito", "hot-pepper", "avocado"],
    categorySlug: "food-and-drink",
    subgroup: "food-prepared",
    keywords: ["taco", "mexican", "food", "tuesday", "fiesta"]
  },
  {
    unicode: "🍦",
    name: "Soft Ice Cream",
    slug: "soft-ice-cream",
    shortMeaning: "Swirly soft serve ice cream - sweet summer treat!",
    detailedMeaning: "The Soft Ice Cream emoji shows a swirly soft serve cone, typically vanilla. It represents summer, sweet treats, dessert, and childhood joy.\n\nUsed for dessert discussions, hot weather, or expressing the need for something sweet and cold.",
    usageContexts: ["Dessert", "Summer", "Sweet treat", "Hot weather", "Celebration"],
    examples: [
      { context: "Summer", text: "Ice cream weather 🍦" },
      { context: "Treat", text: "Treating myself 🍦" },
      { context: "Hot", text: "So hot I need ice cream 🍦" }
    ],
    misunderstandings: ["Clear dessert meaning"],
    relatedEmojis: ["ice-cream", "doughnut", "cake"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["ice cream", "dessert", "sweet", "summer", "cone"]
  },
  {
    unicode: "🍩",
    name: "Doughnut",
    slug: "doughnut",
    shortMeaning: "A frosted doughnut with sprinkles - sweet indulgence!",
    detailedMeaning: "The Doughnut emoji shows a ring-shaped fried dough with pink frosting and colorful sprinkles. Doughnuts are a beloved treat associated with breakfast, police culture, and sweet cravings.\n\nUsed for breakfast content, sweet treats, or expressing love for these circular delights.",
    usageContexts: ["Breakfast", "Sweet treat", "Coffee companion", "Indulgence", "Celebration"],
    examples: [
      { context: "Breakfast", text: "Donuts and coffee 🍩☕" },
      { context: "Treat", text: "Donut day 🍩" },
      { context: "Love", text: "I donut care 🍩" }
    ],
    misunderstandings: ["Clear food meaning"],
    relatedEmojis: ["coffee", "cake", "cupcake"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["donut", "doughnut", "sweet", "sprinkles", "breakfast"]
  },
  {
    unicode: "🎂",
    name: "Birthday Cake",
    slug: "birthday-cake",
    shortMeaning: "A cake with candles - happy birthday celebrations!",
    detailedMeaning: "The Birthday Cake emoji shows a cake with lit candles on top, ready for birthday wishes. It's the universal symbol for birthday celebrations and making wishes.\n\nUsed for birthday wishes, celebrations, or any cake-related content.",
    usageContexts: ["Birthday", "Celebration", "Wishes", "Party", "Milestone"],
    examples: [
      { context: "Birthday", text: "Happy Birthday 🎂" },
      { context: "Celebration", text: "Cake time 🎂" },
      { context: "Wish", text: "Make a wish 🎂" }
    ],
    misunderstandings: ["Clear birthday meaning"],
    relatedEmojis: ["party-popper", "balloon", "wrapped-gift"],
    categorySlug: "food-and-drink",
    subgroup: "food-sweet",
    keywords: ["birthday", "cake", "candles", "celebration", "wish"]
  },
  {
    unicode: "☕",
    name: "Hot Beverage",
    slug: "hot-beverage",
    shortMeaning: "A steaming cup - coffee, tea, or hot chocolate.",
    detailedMeaning: "The Hot Beverage emoji shows a cup with steam rising, representing coffee, tea, or any hot drink. It symbolizes morning routines, energy, relaxation, and cozy moments.\n\nUsed for coffee/tea content, morning greetings, or expressing the need for caffeine.",
    usageContexts: ["Coffee", "Tea", "Morning", "Energy", "Cozy"],
    examples: [
      { context: "Morning", text: "But first, coffee ☕" },
      { context: "Break", text: "Coffee break ☕" },
      { context: "Cozy", text: "Tea and book weather ☕" }
    ],
    misunderstandings: ["Could mean coffee or tea"],
    relatedEmojis: ["teacup", "doughnut", "croissant"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["coffee", "tea", "hot", "morning", "caffeine"]
  },
  {
    unicode: "🍺",
    name: "Beer Mug",
    slug: "beer-mug",
    shortMeaning: "A foamy beer mug - cheers and celebrations!",
    detailedMeaning: "The Beer Mug emoji shows a glass mug filled with golden beer and foamy head. It represents social drinking, celebrations, relaxation, and good times with friends.\n\nUsed for drinks content, celebrations, weekends, or expressing the need to unwind.",
    usageContexts: ["Drinks", "Celebration", "Weekend", "Social", "Relaxation"],
    examples: [
      { context: "Weekend", text: "Friday beers 🍺" },
      { context: "Cheers", text: "Cheers 🍺" },
      { context: "Relax", text: "Beer o'clock 🍺" }
    ],
    misunderstandings: ["Clear drink meaning"],
    relatedEmojis: ["wine-glass", "cocktail-glass", "clinking-beer-mugs"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["beer", "drink", "alcohol", "cheers", "mug"]
  },
  {
    unicode: "🍷",
    name: "Wine Glass",
    slug: "wine-glass",
    shortMeaning: "A glass of red wine - elegance and relaxation.",
    detailedMeaning: "The Wine Glass emoji shows a glass of red wine, representing sophistication, relaxation, and fine dining. Wine is associated with celebrations, romantic dinners, and unwinding.\n\nUsed for wine content, elegant occasions, relaxation, or romantic contexts.",
    usageContexts: ["Wine", "Elegant", "Romantic", "Relaxation", "Dinner"],
    examples: [
      { context: "Evening", text: "Wine time 🍷" },
      { context: "Dinner", text: "Wine and dine 🍷" },
      { context: "Relax", text: "Wine down 🍷" }
    ],
    misunderstandings: ["Clear drink meaning"],
    relatedEmojis: ["beer-mug", "champagne", "grapes"],
    categorySlug: "food-and-drink",
    subgroup: "drink",
    keywords: ["wine", "glass", "red wine", "drink", "elegant"]
  }
];

export const getEmojiBySlug = (slug: string): Emoji | undefined => {
  return emojis.find(e => e.slug === slug);
};

export const getEmojisByCategory = (categorySlug: string): Emoji[] => {
  return emojis.filter(e => e.categorySlug === categorySlug);
};

export const searchEmojis = (query: string): Emoji[] => {
  const lowerQuery = query.toLowerCase();
  return emojis.filter(e => 
    e.name.toLowerCase().includes(lowerQuery) ||
    e.unicode.includes(query) ||
    e.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
    e.shortMeaning.toLowerCase().includes(lowerQuery)
  );
};

export const getTrendingEmojis = (): Emoji[] => {
  // Return popular emojis
  const trendingSlugs = [
    "face-with-tears-of-joy", "red-heart", "fire", "loudly-crying-face",
    "smiling-face-with-heart-eyes", "thinking-face", "skull", "sparkles",
    "pleading-face", "hundred-points", "thumbs-up", "folded-hands"
  ];
  return trendingSlugs.map(slug => getEmojiBySlug(slug)).filter((e): e is Emoji => e !== undefined);
};

export const getPopularCombos = () => [
  { emojis: "😂💀", meaning: "Dying laughing - something is extremely funny" },
  { emojis: "❤️‍🔥", meaning: "Intense passion or burning love" },
  { emojis: "🥺👉👈", meaning: "Shy or hesitant request, asking cutely" },
  { emojis: "✨💅", meaning: "Self-confidence and treating yourself" },
  { emojis: "🙈🙉🙊", meaning: "See no evil, hear no evil, speak no evil" },
  { emojis: "💀⚰️", meaning: "Dead from laughter or something shocking" },
  { emojis: "🔥💯", meaning: "Something is absolutely perfect and impressive" },
  { emojis: "🥹🫶", meaning: "Touched and showing love/appreciation" }
];

export const getRecentlyAdded = (): Emoji[] => {
  // Simulate recently added (newer emojis)
  const recentSlugs = [
    "face-with-open-eyes-and-hand-over-mouth", "smiling-face-with-tear",
    "face-holding-back-tears", "melting-face"
  ];
  return recentSlugs.map(slug => getEmojiBySlug(slug)).filter((e): e is Emoji => e !== undefined);
};
