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
  },
  // ANIMALS & NATURE - Additional
  {
    unicode: "🐶",
    name: "Dog Face",
    slug: "dog-face",
    shortMeaning: "A cute dog face - man's best friend!",
    detailedMeaning: "The Dog Face emoji shows a friendly dog's face, often resembling a puppy. Dogs represent loyalty, friendship, companionship, and unconditional love.\n\nUsed for dog content, expressing affection, or referring to pets and cute things.",
    usageContexts: ["Pets", "Dogs", "Cute", "Loyalty", "Friendship"],
    examples: [
      { context: "Pet", text: "My best friend 🐶" },
      { context: "Cute", text: "Such a good boy 🐶" },
      { context: "Love", text: "Dog mom life 🐶" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["dog", "paw-prints", "bone"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["dog", "puppy", "pet", "cute", "loyal"]
  },
  {
    unicode: "🐱",
    name: "Cat Face",
    slug: "cat-face",
    shortMeaning: "A cute cat face - mysterious and adorable!",
    detailedMeaning: "The Cat Face emoji shows a friendly cat's face with whiskers. Cats represent independence, curiosity, elegance, and the internet's favorite animal.\n\nUsed for cat content, expressing affection, or referring to cute and independent personalities.",
    usageContexts: ["Pets", "Cats", "Cute", "Independent", "Internet culture"],
    examples: [
      { context: "Pet", text: "Cat mom 🐱" },
      { context: "Cute", text: "My little furball 🐱" },
      { context: "Mood", text: "Cat nap time 🐱" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["cat", "black-cat", "paw-prints"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["cat", "kitten", "pet", "cute", "feline"]
  },
  {
    unicode: "🦁",
    name: "Lion",
    slug: "lion",
    shortMeaning: "The king of the jungle - strength and courage!",
    detailedMeaning: "The Lion emoji shows a lion's face with its distinctive mane. Lions represent strength, courage, leadership, and royalty as the 'king of the jungle'.\n\nUsed for strength references, zodiac Leo, Africa, or expressing courage and power.",
    usageContexts: ["Strength", "Courage", "Leo zodiac", "Africa", "Leadership"],
    examples: [
      { context: "Strong", text: "Lion mentality 🦁" },
      { context: "Zodiac", text: "Leo season 🦁" },
      { context: "Brave", text: "Be brave like a lion 🦁" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["tiger-face", "leopard", "crown"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["lion", "king", "strength", "leo", "brave"]
  },
  {
    unicode: "🐻",
    name: "Bear",
    slug: "bear",
    shortMeaning: "A friendly bear face - cuddly yet powerful.",
    detailedMeaning: "The Bear emoji shows a bear's face, often appearing friendly and cuddly. Bears represent strength, protection, and in pop culture, they're associated with being cuddly despite their power.\n\nUsed for bear content, expressing being cuddly, or referring to protective strength.",
    usageContexts: ["Animals", "Cuddly", "Strong", "Nature", "Protection"],
    examples: [
      { context: "Cuddly", text: "Bear hugs 🐻" },
      { context: "Mood", text: "Feeling like a bear 🐻" },
      { context: "Nature", text: "Wildlife watching 🐻" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["teddy-bear", "panda", "polar-bear"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["bear", "cuddly", "strong", "hug", "animal"]
  },
  {
    unicode: "🐼",
    name: "Panda",
    slug: "panda",
    shortMeaning: "An adorable panda - China's beloved treasure.",
    detailedMeaning: "The Panda emoji shows the distinctive black and white face of a giant panda. Pandas are beloved worldwide and represent China, conservation, and extreme cuteness.\n\nUsed for cute content, China references, or expressing love for these adorable animals.",
    usageContexts: ["Cute", "China", "Conservation", "Animals", "Kawaii"],
    examples: [
      { context: "Cute", text: "Panda level cuteness 🐼" },
      { context: "China", text: "Chinese treasure 🐼" },
      { context: "Mood", text: "Eating bamboo all day 🐼" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["bear", "koala", "bamboo"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["panda", "cute", "china", "bamboo", "bear"]
  },
  {
    unicode: "🦊",
    name: "Fox",
    slug: "fox",
    shortMeaning: "A clever fox - cunning and beautiful.",
    detailedMeaning: "The Fox emoji shows an orange fox face. Foxes represent cleverness, cunning, beauty, and in some cultures, trickery or wisdom.\n\nUsed for fox content, expressing cleverness, or appreciating nature's beauty.",
    usageContexts: ["Clever", "Beautiful", "Nature", "Cunning", "Autumn"],
    examples: [
      { context: "Clever", text: "Sly like a fox 🦊" },
      { context: "Autumn", text: "Fox vibes 🦊" },
      { context: "Cute", text: "What does the fox say 🦊" }
    ],
    misunderstandings: ["Clear animal meaning"],
    relatedEmojis: ["wolf", "dog-face", "fallen-leaf"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-mammal",
    keywords: ["fox", "clever", "cunning", "autumn", "orange"]
  },
  {
    unicode: "🦋",
    name: "Butterfly",
    slug: "butterfly",
    shortMeaning: "A beautiful butterfly - transformation and beauty.",
    detailedMeaning: "The Butterfly emoji shows a colorful butterfly with spread wings. Butterflies represent transformation, beauty, freedom, and the feeling of 'butterflies in your stomach'.\n\nUsed for nature content, expressing transformation, beauty, or nervous excitement.",
    usageContexts: ["Transformation", "Beauty", "Nature", "Freedom", "Nervous excitement"],
    examples: [
      { context: "Change", text: "Butterfly era 🦋" },
      { context: "Nervous", text: "Butterflies in my stomach 🦋" },
      { context: "Beautiful", text: "Beautiful soul 🦋" }
    ],
    misunderstandings: ["Clear nature meaning"],
    relatedEmojis: ["caterpillar", "flower", "rainbow"],
    categorySlug: "animals-and-nature",
    subgroup: "animal-bug",
    keywords: ["butterfly", "transformation", "beautiful", "nature", "freedom"]
  },
  {
    unicode: "🌸",
    name: "Cherry Blossom",
    slug: "cherry-blossom",
    shortMeaning: "Delicate pink cherry blossoms - Japanese spring beauty.",
    detailedMeaning: "The Cherry Blossom emoji shows a pink cherry blossom flower. These flowers represent spring, Japan, beauty, and the fleeting nature of life (mono no aware).\n\nUsed for spring content, Japanese culture, beauty, or expressing delicate elegance.",
    usageContexts: ["Spring", "Japan", "Beauty", "Flowers", "Elegance"],
    examples: [
      { context: "Spring", text: "Cherry blossom season 🌸" },
      { context: "Japan", text: "Hanami time 🌸" },
      { context: "Beautiful", text: "Pretty in pink 🌸" }
    ],
    misunderstandings: ["Specifically cherry blossom, not generic flower"],
    relatedEmojis: ["blossom", "hibiscus", "sakura"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["cherry blossom", "sakura", "spring", "japan", "pink"]
  },
  {
    unicode: "🌻",
    name: "Sunflower",
    slug: "sunflower",
    shortMeaning: "A bright sunflower - happiness and sunshine!",
    detailedMeaning: "The Sunflower emoji shows a bright yellow sunflower. Sunflowers represent happiness, sunshine, positivity, and following the light. They're also associated with Ukraine.\n\nUsed for positive content, summer vibes, or expressing happiness and optimism.",
    usageContexts: ["Happiness", "Summer", "Positivity", "Ukraine", "Sunshine"],
    examples: [
      { context: "Happy", text: "Sunshine vibes 🌻" },
      { context: "Summer", text: "Sunflower fields 🌻" },
      { context: "Support", text: "Stand with Ukraine 🌻" }
    ],
    misunderstandings: ["Strong Ukraine association currently"],
    relatedEmojis: ["sun", "yellow-heart", "blossom"],
    categorySlug: "animals-and-nature",
    subgroup: "plant-flower",
    keywords: ["sunflower", "happy", "yellow", "summer", "sunshine"]
  },
  {
    unicode: "🌈",
    name: "Rainbow",
    slug: "rainbow",
    shortMeaning: "A colorful rainbow - hope, diversity, and beauty.",
    detailedMeaning: "The Rainbow emoji shows a multicolored arc in the sky. Rainbows represent hope, diversity, LGBTQ+ pride, beauty after storms, and general positivity.\n\nUsed for weather, pride content, expressing hope, or celebrating diversity and beauty.",
    usageContexts: ["Hope", "LGBTQ+ pride", "Diversity", "Weather", "Positivity"],
    examples: [
      { context: "Hope", text: "After the storm 🌈" },
      { context: "Pride", text: "Pride month 🌈" },
      { context: "Beautiful", text: "Life in color 🌈" }
    ],
    misunderstandings: ["Often associated with LGBTQ+ pride"],
    relatedEmojis: ["rainbow-flag", "sparkles", "sun-behind-rain-cloud"],
    categorySlug: "animals-and-nature",
    subgroup: "sky-weather",
    keywords: ["rainbow", "hope", "pride", "colorful", "diversity"]
  },
  // TRAVEL & PLACES - Additional
  {
    unicode: "✈️",
    name: "Airplane",
    slug: "airplane",
    shortMeaning: "An airplane - travel, adventure, and new destinations!",
    detailedMeaning: "The Airplane emoji shows a passenger aircraft. It represents travel, vacations, adventure, and the excitement of going somewhere new.\n\nUsed for travel content, announcing trips, or expressing wanderlust.",
    usageContexts: ["Travel", "Vacation", "Flying", "Adventure", "Airport"],
    examples: [
      { context: "Travel", text: "Off we go ✈️" },
      { context: "Vacation", text: "Vacation mode ✈️" },
      { context: "Adventure", text: "New adventures await ✈️" }
    ],
    misunderstandings: ["Clear travel meaning"],
    relatedEmojis: ["luggage", "passport", "globe"],
    categorySlug: "travel-and-places",
    subgroup: "transport-air",
    keywords: ["airplane", "travel", "flight", "vacation", "adventure"]
  },
  {
    unicode: "🚗",
    name: "Car",
    slug: "car",
    shortMeaning: "A red car - road trips and daily commutes.",
    detailedMeaning: "The Car emoji shows a red automobile. It represents driving, road trips, commuting, and personal transportation.\n\nUsed for driving content, road trips, or discussing vehicles and transportation.",
    usageContexts: ["Driving", "Road trip", "Commute", "Transportation", "Travel"],
    examples: [
      { context: "Road trip", text: "Road trip time 🚗" },
      { context: "Driving", text: "On my way 🚗" },
      { context: "New", text: "New car day 🚗" }
    ],
    misunderstandings: ["Clear vehicle meaning"],
    relatedEmojis: ["taxi", "bus", "traffic-light"],
    categorySlug: "travel-and-places",
    subgroup: "transport-ground",
    keywords: ["car", "driving", "road trip", "auto", "vehicle"]
  },
  {
    unicode: "🏠",
    name: "House",
    slug: "house",
    shortMeaning: "A cozy house - home sweet home.",
    detailedMeaning: "The House emoji shows a simple house with a roof and door. It represents home, comfort, family, and the concept of belonging somewhere.\n\nUsed for home content, real estate, or expressing love for one's home.",
    usageContexts: ["Home", "Family", "Real estate", "Comfort", "Belonging"],
    examples: [
      { context: "Home", text: "Home sweet home 🏠" },
      { context: "Return", text: "Heading home 🏠" },
      { context: "Real estate", text: "House hunting 🏠" }
    ],
    misunderstandings: ["Clear home meaning"],
    relatedEmojis: ["house-with-garden", "building", "key"],
    categorySlug: "travel-and-places",
    subgroup: "place-building",
    keywords: ["house", "home", "family", "building", "cozy"]
  },
  {
    unicode: "🏝️",
    name: "Desert Island",
    slug: "desert-island",
    shortMeaning: "A tropical island with palm tree - paradise getaway!",
    detailedMeaning: "The Desert Island emoji shows a small tropical island with a palm tree. It represents vacation, paradise, beaches, and escaping to a tropical destination.\n\nUsed for vacation content, beach trips, or expressing desire to escape.",
    usageContexts: ["Vacation", "Beach", "Paradise", "Tropical", "Escape"],
    examples: [
      { context: "Vacation", text: "Island vibes 🏝️" },
      { context: "Dream", text: "Take me here 🏝️" },
      { context: "Escape", text: "Need a tropical escape 🏝️" }
    ],
    misunderstandings: ["Clear tropical meaning"],
    relatedEmojis: ["palm-tree", "beach", "sun"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["island", "tropical", "beach", "paradise", "vacation"]
  },
  {
    unicode: "🏔️",
    name: "Snow-Capped Mountain",
    slug: "snow-capped-mountain",
    shortMeaning: "A majestic mountain with snow - adventure awaits!",
    detailedMeaning: "The Snow-Capped Mountain emoji shows a tall mountain with snow on its peak. It represents nature, hiking, skiing, adventure, and overcoming challenges.\n\nUsed for outdoor content, travel, or expressing love for mountains and adventure.",
    usageContexts: ["Mountains", "Hiking", "Skiing", "Adventure", "Nature"],
    examples: [
      { context: "Hiking", text: "Summit day 🏔️" },
      { context: "Skiing", text: "Ski trip 🏔️" },
      { context: "Goal", text: "Climbing mountains 🏔️" }
    ],
    misunderstandings: ["Clear mountain meaning"],
    relatedEmojis: ["mountain", "skier", "snowflake"],
    categorySlug: "travel-and-places",
    subgroup: "place-geographic",
    keywords: ["mountain", "snow", "peak", "hiking", "adventure"]
  },
  {
    unicode: "🌅",
    name: "Sunrise",
    slug: "sunrise",
    shortMeaning: "A beautiful sunrise - new beginnings and hope.",
    detailedMeaning: "The Sunrise emoji shows the sun rising over the horizon. It represents new beginnings, hope, early mornings, and the beauty of nature's daily show.\n\nUsed for morning content, new beginnings, or expressing hope and optimism.",
    usageContexts: ["Morning", "New beginning", "Hope", "Nature", "Beauty"],
    examples: [
      { context: "Morning", text: "Good morning 🌅" },
      { context: "New start", text: "New day, new beginning 🌅" },
      { context: "Travel", text: "Sunrise views 🌅" }
    ],
    misunderstandings: ["May be confused with sunset"],
    relatedEmojis: ["sunset", "sun", "early-bird"],
    categorySlug: "travel-and-places",
    subgroup: "sky-weather",
    keywords: ["sunrise", "morning", "sun", "hope", "dawn"]
  },
  {
    unicode: "🌙",
    name: "Crescent Moon",
    slug: "crescent-moon",
    shortMeaning: "A crescent moon - nighttime and mystery.",
    detailedMeaning: "The Crescent Moon emoji shows a crescent-shaped moon. It represents nighttime, sleep, dreams, mystery, and in some cultures, Islam.\n\nUsed for night content, bedtime messages, or expressing dreamy and mysterious vibes.",
    usageContexts: ["Night", "Sleep", "Dreams", "Mystery", "Islam"],
    examples: [
      { context: "Night", text: "Good night 🌙" },
      { context: "Sleep", text: "Sweet dreams 🌙" },
      { context: "Ramadan", text: "Ramadan Mubarak 🌙" }
    ],
    misunderstandings: ["Religious significance in Islam"],
    relatedEmojis: ["full-moon", "star", "night-with-stars"],
    categorySlug: "travel-and-places",
    subgroup: "sky-weather",
    keywords: ["moon", "night", "crescent", "sleep", "dream"]
  },
  // ACTIVITIES - Additional
  {
    unicode: "⚽",
    name: "Soccer Ball",
    slug: "soccer-ball",
    shortMeaning: "A soccer ball - the world's most popular sport!",
    detailedMeaning: "The Soccer Ball emoji shows a classic black and white football (soccer ball). Soccer is the world's most popular sport, uniting billions of fans globally.\n\nUsed for football/soccer content, sports discussions, or expressing team spirit.",
    usageContexts: ["Football", "Sports", "World Cup", "Team", "Game"],
    examples: [
      { context: "Game", text: "Match day ⚽" },
      { context: "World Cup", text: "World Cup fever ⚽" },
      { context: "Play", text: "Playing football ⚽" }
    ],
    misunderstandings: ["Called football outside USA"],
    relatedEmojis: ["goal-net", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["soccer", "football", "sport", "ball", "game"]
  },
  {
    unicode: "🏀",
    name: "Basketball",
    slug: "basketball",
    shortMeaning: "A basketball - hoops, dunks, and game time!",
    detailedMeaning: "The Basketball emoji shows an orange basketball with black lines. Basketball is hugely popular, especially in the USA, with the NBA being globally famous.\n\nUsed for basketball content, sports discussions, or expressing love for the game.",
    usageContexts: ["Basketball", "NBA", "Sports", "Hoops", "Game"],
    examples: [
      { context: "Game", text: "Ball is life 🏀" },
      { context: "NBA", text: "NBA playoffs 🏀" },
      { context: "Play", text: "Shooting hoops 🏀" }
    ],
    misunderstandings: ["Clear sports meaning"],
    relatedEmojis: ["basketball-player", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["basketball", "nba", "hoops", "sport", "ball"]
  },
  {
    unicode: "🎮",
    name: "Video Game",
    slug: "video-game",
    shortMeaning: "A game controller - gaming time!",
    detailedMeaning: "The Video Game emoji shows a classic game controller. It represents gaming, video games, esports, and the gaming community.\n\nUsed for gaming content, discussing video games, or expressing gamer identity.",
    usageContexts: ["Gaming", "Video games", "Esports", "Fun", "Streaming"],
    examples: [
      { context: "Gaming", text: "Game on 🎮" },
      { context: "Stream", text: "Live stream 🎮" },
      { context: "Fun", text: "Gaming night 🎮" }
    ],
    misunderstandings: ["Clear gaming meaning"],
    relatedEmojis: ["joystick", "alien-monster", "trophy"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["gaming", "video game", "controller", "play", "gamer"]
  },
  {
    unicode: "🎬",
    name: "Clapper Board",
    slug: "clapper-board",
    shortMeaning: "A movie clapperboard - lights, camera, action!",
    detailedMeaning: "The Clapper Board emoji shows a film clapperboard used in movie production. It represents movies, film-making, Hollywood, and entertainment.\n\nUsed for movie content, film discussions, or anything related to entertainment and production.",
    usageContexts: ["Movies", "Film", "Hollywood", "Entertainment", "Production"],
    examples: [
      { context: "Movies", text: "Movie night 🎬" },
      { context: "Film", text: "Action! 🎬" },
      { context: "Recommend", text: "Must watch 🎬" }
    ],
    misunderstandings: ["Clear film meaning"],
    relatedEmojis: ["film-frames", "movie-camera", "popcorn"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["movie", "film", "cinema", "action", "hollywood"]
  },
  {
    unicode: "🎤",
    name: "Microphone",
    slug: "microphone",
    shortMeaning: "A microphone - singing, speaking, and performing!",
    detailedMeaning: "The Microphone emoji shows a handheld microphone. It represents singing, karaoke, public speaking, podcasting, and performances.\n\nUsed for music content, karaoke, speaking events, or expressing love for performing.",
    usageContexts: ["Singing", "Karaoke", "Speaking", "Podcast", "Performance"],
    examples: [
      { context: "Karaoke", text: "Karaoke night 🎤" },
      { context: "Singing", text: "Shower concert 🎤" },
      { context: "Podcast", text: "New episode 🎤" }
    ],
    misunderstandings: ["Clear performance meaning"],
    relatedEmojis: ["musical-notes", "headphone", "singer"],
    categorySlug: "activities",
    subgroup: "music",
    keywords: ["microphone", "singing", "karaoke", "music", "perform"]
  },
  {
    unicode: "🎨",
    name: "Artist Palette",
    slug: "artist-palette",
    shortMeaning: "An artist's palette - creativity and art!",
    detailedMeaning: "The Artist Palette emoji shows a painter's palette with colorful paints. It represents art, creativity, painting, and artistic expression.\n\nUsed for art content, creativity discussions, or expressing artistic endeavors.",
    usageContexts: ["Art", "Creativity", "Painting", "Design", "Expression"],
    examples: [
      { context: "Art", text: "Creating art 🎨" },
      { context: "Creative", text: "Feeling creative 🎨" },
      { context: "Design", text: "New design 🎨" }
    ],
    misunderstandings: ["Clear art meaning"],
    relatedEmojis: ["paintbrush", "framed-picture", "crayon"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["art", "paint", "creative", "palette", "artist"]
  },
  {
    unicode: "🏆",
    name: "Trophy",
    slug: "trophy",
    shortMeaning: "A golden trophy - winning and achievement!",
    detailedMeaning: "The Trophy emoji shows a golden trophy cup. It represents winning, achievement, success, and being the best at something.\n\nUsed for celebrating wins, achievements, or expressing that something or someone is top tier.",
    usageContexts: ["Winning", "Achievement", "Success", "Champion", "Best"],
    examples: [
      { context: "Win", text: "We won 🏆" },
      { context: "Achievement", text: "Goal achieved 🏆" },
      { context: "Best", text: "You're a winner 🏆" }
    ],
    misunderstandings: ["Clear achievement meaning"],
    relatedEmojis: ["sports-medal", "first-place-medal", "star"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["trophy", "winner", "champion", "award", "achievement"]
  },
  // OBJECTS - Additional
  {
    unicode: "💎",
    name: "Gem Stone",
    slug: "gem-stone",
    shortMeaning: "A sparkling diamond - luxury and value!",
    detailedMeaning: "The Gem Stone emoji shows a sparkling blue diamond or gem. It represents luxury, value, beauty, and things that are precious or high quality.\n\nUsed for expressing value, luxury items, or calling something or someone a gem.",
    usageContexts: ["Luxury", "Valuable", "Rare", "Beauty", "Quality"],
    examples: [
      { context: "Valuable", text: "You're a gem 💎" },
      { context: "Luxury", text: "Diamond life 💎" },
      { context: "Quality", text: "Hidden gem 💎" }
    ],
    misunderstandings: ["Clear luxury meaning"],
    relatedEmojis: ["ring", "crown", "sparkles"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["diamond", "gem", "jewel", "luxury", "precious"]
  },
  {
    unicode: "👑",
    name: "Crown",
    slug: "crown",
    shortMeaning: "A royal crown - royalty and being the best!",
    detailedMeaning: "The Crown emoji shows a golden royal crown. It represents royalty, being the best, self-confidence, and treating oneself like royalty.\n\nUsed for praising someone, self-celebration, or expressing that something is top tier.",
    usageContexts: ["Royalty", "Best", "Self-love", "Winner", "Praise"],
    examples: [
      { context: "Praise", text: "Queen behavior 👑" },
      { context: "Best", text: "You dropped this 👑" },
      { context: "Self-love", text: "Know your worth 👑" }
    ],
    misunderstandings: ["Clear royalty meaning"],
    relatedEmojis: ["gem-stone", "star", "trophy"],
    categorySlug: "objects",
    subgroup: "clothing",
    keywords: ["crown", "king", "queen", "royal", "best"]
  },
  {
    unicode: "🎧",
    name: "Headphone",
    slug: "headphone",
    shortMeaning: "Headphones - music, podcasts, and immersion!",
    detailedMeaning: "The Headphone emoji shows over-ear headphones. It represents listening to music, podcasts, gaming, or wanting to tune out the world.\n\nUsed for music content, podcasts, or expressing focus and immersion.",
    usageContexts: ["Music", "Podcast", "Focus", "Gaming", "Immersion"],
    examples: [
      { context: "Music", text: "Music mode 🎧" },
      { context: "Podcast", text: "Podcast time 🎧" },
      { context: "Focus", text: "Don't disturb 🎧" }
    ],
    misunderstandings: ["Clear audio meaning"],
    relatedEmojis: ["musical-notes", "microphone", "radio"],
    categorySlug: "objects",
    subgroup: "music",
    keywords: ["headphones", "music", "listen", "audio", "podcast"]
  },
  {
    unicode: "📷",
    name: "Camera",
    slug: "camera",
    shortMeaning: "A camera - capturing memories and moments!",
    detailedMeaning: "The Camera emoji shows a digital camera. It represents photography, capturing moments, memories, and visual content creation.\n\nUsed for photography content, asking for photos, or reminiscing about memories.",
    usageContexts: ["Photography", "Memories", "Pictures", "Content", "Travel"],
    examples: [
      { context: "Photo", text: "Pic please 📷" },
      { context: "Memories", text: "Making memories 📷" },
      { context: "Content", text: "Photo dump 📷" }
    ],
    misunderstandings: ["Clear photography meaning"],
    relatedEmojis: ["camera-with-flash", "selfie", "film-frames"],
    categorySlug: "objects",
    subgroup: "light-video",
    keywords: ["camera", "photo", "picture", "photography", "memory"]
  },
  {
    unicode: "💰",
    name: "Money Bag",
    slug: "money-bag",
    shortMeaning: "A bag of money - wealth and prosperity!",
    detailedMeaning: "The Money Bag emoji shows a bag with a dollar sign, representing wealth, money, prosperity, and financial success.\n\nUsed for financial content, expressing wealth, or discussing money matters.",
    usageContexts: ["Money", "Wealth", "Success", "Business", "Savings"],
    examples: [
      { context: "Wealth", text: "Secure the bag 💰" },
      { context: "Success", text: "Money moves 💰" },
      { context: "Business", text: "Business mode 💰" }
    ],
    misunderstandings: ["Clear money meaning"],
    relatedEmojis: ["dollar", "money-with-wings", "chart-increasing"],
    categorySlug: "objects",
    subgroup: "money",
    keywords: ["money", "bag", "wealth", "rich", "cash"]
  },
  // SYMBOLS - Additional
  {
    unicode: "✅",
    name: "Check Mark Button",
    slug: "check-mark-button",
    shortMeaning: "A green checkmark - done, approved, correct!",
    detailedMeaning: "The Check Mark Button emoji shows a white checkmark on a green square. It represents completion, approval, correctness, and agreement.\n\nUsed for task completion, approval, or indicating something is correct or verified.",
    usageContexts: ["Done", "Approved", "Correct", "Complete", "Agreement"],
    examples: [
      { context: "Complete", text: "Task done ✅" },
      { context: "Approved", text: "Approved ✅" },
      { context: "List", text: "Groceries ✅" }
    ],
    misunderstandings: ["Clear approval meaning"],
    relatedEmojis: ["check-mark", "thumbs-up", "green-circle"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["check", "done", "complete", "approved", "correct"]
  },
  {
    unicode: "❌",
    name: "Cross Mark",
    slug: "cross-mark",
    shortMeaning: "A red X - no, wrong, or cancelled!",
    detailedMeaning: "The Cross Mark emoji shows a red X. It represents negation, incorrectness, cancellation, or rejection.\n\nUsed for indicating something is wrong, cancelled, or to express disagreement.",
    usageContexts: ["No", "Wrong", "Cancelled", "Rejected", "Incorrect"],
    examples: [
      { context: "Wrong", text: "Wrong answer ❌" },
      { context: "No", text: "Not happening ❌" },
      { context: "Cancel", text: "Cancelled ❌" }
    ],
    misunderstandings: ["Clear negative meaning"],
    relatedEmojis: ["cross-mark-button", "no-entry", "prohibited"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["cross", "x", "no", "wrong", "cancel"]
  },
  {
    unicode: "⭐",
    name: "Star",
    slug: "star",
    shortMeaning: "A golden star - excellence and ratings!",
    detailedMeaning: "The Star emoji shows a classic golden star. It represents excellence, ratings, favorites, and outstanding performance.\n\nUsed for ratings, expressing something is star-worthy, or indicating favorites.",
    usageContexts: ["Excellent", "Rating", "Favorite", "Quality", "Special"],
    examples: [
      { context: "Rating", text: "5 stars ⭐⭐⭐⭐⭐" },
      { context: "Excellent", text: "Star performance ⭐" },
      { context: "Favorite", text: "My favorite ⭐" }
    ],
    misunderstandings: ["Clear positive meaning"],
    relatedEmojis: ["glowing-star", "sparkles", "trophy"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["star", "rating", "favorite", "excellent", "best"]
  },
  {
    unicode: "⚠️",
    name: "Warning",
    slug: "warning",
    shortMeaning: "A warning sign - caution and alert!",
    detailedMeaning: "The Warning emoji shows a yellow triangle with an exclamation mark. It represents caution, warning, alerting others to potential issues.\n\nUsed for warnings, alerts, or drawing attention to something important or dangerous.",
    usageContexts: ["Warning", "Caution", "Alert", "Danger", "Important"],
    examples: [
      { context: "Warning", text: "Heads up ⚠️" },
      { context: "Caution", text: "Be careful ⚠️" },
      { context: "Alert", text: "Important ⚠️" }
    ],
    misunderstandings: ["Clear warning meaning"],
    relatedEmojis: ["no-entry", "stop-sign", "exclamation-mark"],
    categorySlug: "symbols",
    subgroup: "warning",
    keywords: ["warning", "caution", "alert", "danger", "attention"]
  },
  {
    unicode: "♻️",
    name: "Recycling Symbol",
    slug: "recycling-symbol",
    shortMeaning: "The recycling symbol - sustainability and environment!",
    detailedMeaning: "The Recycling Symbol emoji shows the universal recycling arrows. It represents recycling, sustainability, environmental consciousness, and reusing.\n\nUsed for environmental content, sustainability discussions, or promoting eco-friendly practices.",
    usageContexts: ["Recycling", "Environment", "Sustainability", "Eco-friendly", "Reuse"],
    examples: [
      { context: "Recycle", text: "Recycle please ♻️" },
      { context: "Eco", text: "Go green ♻️" },
      { context: "Sustainable", text: "Sustainable living ♻️" }
    ],
    misunderstandings: ["Clear environmental meaning"],
    relatedEmojis: ["globe", "seedling", "leaf"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["recycle", "environment", "green", "sustainable", "eco"]
  },
  {
    unicode: "💯",
    name: "Hundred Points",
    slug: "hundred-points",
    shortMeaning: "100 points - perfect score and keeping it real!",
    detailedMeaning: "The Hundred Points emoji shows the number 100 with double underlines. It represents perfection, being 100% genuine, and full endorsement.\n\nExtremely popular in internet culture for expressing 'keeping it 100' (being real) or that something is perfect.",
    usageContexts: ["Perfect", "Authentic", "Agree", "Full support", "Excellence"],
    examples: [
      { context: "Perfect", text: "That's 💯" },
      { context: "Agree", text: "Facts 💯" },
      { context: "Real", text: "Keeping it 💯" }
    ],
    misunderstandings: ["Slang meaning beyond literal 100"],
    relatedEmojis: ["fire", "star", "check-mark-button"],
    categorySlug: "symbols",
    subgroup: "other-symbol",
    keywords: ["hundred", "perfect", "real", "facts", "authentic"]
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
