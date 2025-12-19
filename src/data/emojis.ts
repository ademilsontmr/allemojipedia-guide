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
