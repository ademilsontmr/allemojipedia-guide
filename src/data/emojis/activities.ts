import { Emoji } from '../emojis';

// Activities category emojis
export const activityEmojis: Emoji[] = [
  // SPORTS
  {
    unicode: "⚽",
    name: "Soccer Ball",
    slug: "soccer-ball",
    shortMeaning: "A soccer ball (football) used in the world's most popular sport.",
    detailedMeaning: "The Soccer Ball emoji represents the sport of soccer/football, the most popular sport globally. It shows the classic black and white hexagonal pattern ball.\n\nUsed for soccer discussions, matches, World Cup, or general sports enthusiasm.",
    usageContexts: ["Soccer", "Football", "Sports", "World Cup", "Match"],
    examples: [
      { context: "Match", text: "Game tonight ⚽" },
      { context: "World Cup", text: "World Cup fever ⚽" },
      { context: "Playing", text: "Playing soccer ⚽" }
    ],
    misunderstandings: ["Called football outside North America"],
    relatedEmojis: ["goal-net", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["soccer", "football", "ball", "sport", "goal"]
  },
  {
    unicode: "🏀",
    name: "Basketball",
    slug: "basketball",
    shortMeaning: "An orange basketball used in the popular sport.",
    detailedMeaning: "The Basketball emoji shows an orange basketball with black lines. It represents the sport of basketball, NBA, and general athletic activity.\n\nUsed for basketball discussions, games, NBA references, or athletic content.",
    usageContexts: ["Basketball", "NBA", "Sports", "Game", "Hoops"],
    examples: [
      { context: "Game", text: "Hoops tonight 🏀" },
      { context: "NBA", text: "Lakers game 🏀" },
      { context: "Playing", text: "Shooting hoops 🏀" }
    ],
    misunderstandings: ["Clear basketball reference"],
    relatedEmojis: ["basketball-hoop", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["basketball", "ball", "NBA", "hoops", "sport"]
  },
  {
    unicode: "🏈",
    name: "American Football",
    slug: "american-football",
    shortMeaning: "A brown American football with white laces.",
    detailedMeaning: "The American Football emoji shows the distinctive brown oval ball with white laces used in American/Canadian football.\n\nUsed for NFL discussions, Super Bowl, American football games, or US sports culture.",
    usageContexts: ["Football", "NFL", "Super Bowl", "Sports", "American"],
    examples: [
      { context: "NFL", text: "Sunday football 🏈" },
      { context: "Super Bowl", text: "Super Bowl party 🏈" },
      { context: "Game", text: "Touchdown! 🏈" }
    ],
    misunderstandings: ["Specifically American football, not soccer"],
    relatedEmojis: ["trophy", "sports-medal", "stadium"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["football", "NFL", "American", "Super Bowl", "touchdown"]
  },
  {
    unicode: "⚾",
    name: "Baseball",
    slug: "baseball",
    shortMeaning: "A white baseball with red stitching.",
    detailedMeaning: "The Baseball emoji shows a white baseball with characteristic red stitching. It represents the sport of baseball, MLB, and America's pastime.\n\nUsed for baseball discussions, MLB games, or general American sports culture.",
    usageContexts: ["Baseball", "MLB", "Sports", "Game", "American"],
    examples: [
      { context: "Game", text: "Baseball game today ⚾" },
      { context: "MLB", text: "Yankees won! ⚾" },
      { context: "Playing", text: "Playing catch ⚾" }
    ],
    misunderstandings: ["America's pastime"],
    relatedEmojis: ["softball", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["baseball", "MLB", "ball", "American", "sport"]
  },
  {
    unicode: "🥎",
    name: "Softball",
    slug: "softball",
    shortMeaning: "A yellow softball, larger than a baseball.",
    detailedMeaning: "The Softball emoji shows a yellow softball with red stitching. It represents softball, a variant of baseball played with a larger ball.\n\nUsed for softball discussions, games, or women's sports content.",
    usageContexts: ["Softball", "Sports", "Game", "Women's sports", "Ball"],
    examples: [
      { context: "Game", text: "Softball game tonight 🥎" },
      { context: "Team", text: "Team practice 🥎" },
      { context: "Playing", text: "Playing softball 🥎" }
    ],
    misunderstandings: ["Different from baseball"],
    relatedEmojis: ["baseball", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["softball", "ball", "sport", "yellow", "game"]
  },
  {
    unicode: "🎾",
    name: "Tennis",
    slug: "tennis",
    shortMeaning: "A yellow-green tennis ball.",
    detailedMeaning: "The Tennis emoji shows a bright yellow-green tennis ball. It represents the sport of tennis, individual achievement, and racquet sports.\n\nUsed for tennis discussions, Wimbledon, US Open, or racquet sports in general.",
    usageContexts: ["Tennis", "Wimbledon", "Sports", "Racquet", "Match"],
    examples: [
      { context: "Match", text: "Tennis match 🎾" },
      { context: "Wimbledon", text: "Watching Wimbledon 🎾" },
      { context: "Playing", text: "Playing tennis 🎾" }
    ],
    misunderstandings: ["Represents tennis specifically"],
    relatedEmojis: ["badminton", "table-tennis", "trophy"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["tennis", "ball", "sport", "racquet", "Wimbledon"]
  },
  {
    unicode: "🏐",
    name: "Volleyball",
    slug: "volleyball",
    shortMeaning: "A white volleyball with colored stripes.",
    detailedMeaning: "The Volleyball emoji shows a white volleyball with blue, red, or yellow stripes. It represents volleyball, beach volleyball, and team sports.\n\nUsed for volleyball discussions, beach sports, or Olympic volleyball.",
    usageContexts: ["Volleyball", "Beach", "Sports", "Team", "Olympics"],
    examples: [
      { context: "Beach", text: "Beach volleyball 🏐" },
      { context: "Game", text: "Volleyball match 🏐" },
      { context: "Team", text: "Team practice 🏐" }
    ],
    misunderstandings: ["Indoor and beach volleyball"],
    relatedEmojis: ["beach", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["volleyball", "ball", "beach", "team", "sport"]
  },
  {
    unicode: "🏉",
    name: "Rugby Football",
    slug: "rugby-football",
    shortMeaning: "An oval rugby ball.",
    detailedMeaning: "The Rugby Football emoji shows an oval rugby ball. It represents the sport of rugby, popular in UK, Australia, New Zealand, and South Africa.\n\nUsed for rugby discussions, Six Nations, World Cup, or Commonwealth sports.",
    usageContexts: ["Rugby", "Sports", "World Cup", "Commonwealth", "Match"],
    examples: [
      { context: "Match", text: "Rugby game today 🏉" },
      { context: "World Cup", text: "Rugby World Cup 🏉" },
      { context: "Team", text: "All Blacks! 🏉" }
    ],
    misunderstandings: ["Different from American football"],
    relatedEmojis: ["american-football", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["rugby", "ball", "sport", "football", "oval"]
  },
  {
    unicode: "🎱",
    name: "Pool 8 Ball",
    slug: "pool-8-ball",
    shortMeaning: "The black 8 ball from pool/billiards.",
    detailedMeaning: "The Pool 8 Ball emoji shows the iconic black 8 ball from pool/billiards. It represents pool, billiards, or can be used as a 'magic 8 ball' reference.\n\nUsed for pool/billiards, bars, games, or asking for predictions (magic 8 ball).",
    usageContexts: ["Pool", "Billiards", "Games", "Bar", "Magic 8 ball"],
    examples: [
      { context: "Pool", text: "Playing pool 🎱" },
      { context: "Bar", text: "Pool at the bar 🎱" },
      { context: "Prediction", text: "Magic 8 ball says yes 🎱" }
    ],
    misunderstandings: ["Can represent magic 8 ball predictions"],
    relatedEmojis: ["game", "bar", "dice"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["pool", "billiards", "8 ball", "game", "magic"]
  },
  {
    unicode: "🏓",
    name: "Ping Pong",
    slug: "ping-pong",
    shortMeaning: "A table tennis paddle and ball.",
    detailedMeaning: "The Ping Pong emoji shows a table tennis paddle and ball. It represents table tennis, a fast-paced indoor sport.\n\nUsed for table tennis, games, or competitive ping pong discussions.",
    usageContexts: ["Table tennis", "Ping pong", "Games", "Sports", "Competition"],
    examples: [
      { context: "Game", text: "Ping pong match 🏓" },
      { context: "Playing", text: "Playing table tennis 🏓" },
      { context: "Fun", text: "Office ping pong 🏓" }
    ],
    misunderstandings: ["Also called table tennis"],
    relatedEmojis: ["tennis", "badminton", "game"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["ping pong", "table tennis", "paddle", "ball", "game"]
  },
  {
    unicode: "🏸",
    name: "Badminton",
    slug: "badminton",
    shortMeaning: "A badminton racquet and shuttlecock.",
    detailedMeaning: "The Badminton emoji shows a badminton racquet and shuttlecock (birdie). It represents the sport of badminton.\n\nUsed for badminton discussions, racquet sports, or Olympic badminton.",
    usageContexts: ["Badminton", "Racquet", "Sports", "Olympics", "Game"],
    examples: [
      { context: "Playing", text: "Playing badminton 🏸" },
      { context: "Game", text: "Badminton match 🏸" },
      { context: "Fun", text: "Backyard badminton 🏸" }
    ],
    misunderstandings: ["Uses shuttlecock, not ball"],
    relatedEmojis: ["tennis", "ping-pong", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["badminton", "shuttlecock", "racquet", "sport", "birdie"]
  },
  {
    unicode: "🥊",
    name: "Boxing Glove",
    slug: "boxing-glove",
    shortMeaning: "A red boxing glove representing combat sports.",
    detailedMeaning: "The Boxing Glove emoji shows a red boxing glove. It represents boxing, fighting, combat sports, or metaphorical fighting.\n\nUsed for boxing, MMA, fighting discussions, or expressing readiness to 'fight'.",
    usageContexts: ["Boxing", "Fighting", "MMA", "Combat", "Strength"],
    examples: [
      { context: "Boxing", text: "Boxing training 🥊" },
      { context: "Fighting", text: "Ready to fight 🥊" },
      { context: "Tough", text: "Feeling tough 🥊" }
    ],
    misunderstandings: ["Represents all combat sports"],
    relatedEmojis: ["martial-arts", "wrestling", "trophy"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["boxing", "glove", "fighting", "combat", "sport"]
  },
  {
    unicode: "🥋",
    name: "Martial Arts Uniform",
    slug: "martial-arts-uniform",
    shortMeaning: "A white martial arts uniform (gi) with belt.",
    detailedMeaning: "The Martial Arts Uniform emoji shows a white gi with a colored belt. It represents martial arts like karate, judo, taekwondo, and jiu-jitsu.\n\nUsed for martial arts, self-defense, discipline, or martial arts culture.",
    usageContexts: ["Martial arts", "Karate", "Judo", "Discipline", "Training"],
    examples: [
      { context: "Training", text: "Karate class 🥋" },
      { context: "Achievement", text: "Got my black belt 🥋" },
      { context: "Practice", text: "Judo practice 🥋" }
    ],
    misunderstandings: ["Represents various martial arts"],
    relatedEmojis: ["boxing-glove", "wrestling", "trophy"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["martial arts", "karate", "judo", "gi", "belt"]
  },
  {
    unicode: "⛳",
    name: "Flag in Hole",
    slug: "flag-in-hole",
    shortMeaning: "A golf flag in the hole on a putting green.",
    detailedMeaning: "The Flag in Hole emoji shows a golf flag marking the hole on a putting green. It represents golf, country clubs, and the sport of golf.\n\nUsed for golf discussions, golf outings, or professional golf events.",
    usageContexts: ["Golf", "Sports", "Country club", "Leisure", "Putting"],
    examples: [
      { context: "Golf", text: "Golf weekend ⛳" },
      { context: "Game", text: "18 holes ⛳" },
      { context: "Leisure", text: "On the green ⛳" }
    ],
    misunderstandings: ["Represents golf specifically"],
    relatedEmojis: ["golf", "trophy", "sports-medal"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["golf", "flag", "hole", "putting", "sport"]
  },
  {
    unicode: "⛸️",
    name: "Ice Skate",
    slug: "ice-skate",
    shortMeaning: "A white ice skating boot with blade.",
    detailedMeaning: "The Ice Skate emoji shows a white figure skating boot with a blade. It represents ice skating, figure skating, or winter sports.\n\nUsed for ice skating, Winter Olympics, figure skating, or winter activities.",
    usageContexts: ["Ice skating", "Figure skating", "Winter", "Olympics", "Rink"],
    examples: [
      { context: "Activity", text: "Going ice skating ⛸️" },
      { context: "Winter", text: "Winter Olympics ⛸️" },
      { context: "Rink", text: "At the ice rink ⛸️" }
    ],
    misunderstandings: ["Can be figure or recreational skating"],
    relatedEmojis: ["snowflake", "hockey", "winter"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["ice", "skating", "figure", "winter", "blade"]
  },
  {
    unicode: "🎿",
    name: "Skis",
    slug: "skis",
    shortMeaning: "A pair of skis with ski poles.",
    detailedMeaning: "The Skis emoji shows a pair of skis crossed with ski poles. It represents skiing, winter sports, and mountain activities.\n\nUsed for skiing, ski trips, winter vacations, or mountain sports.",
    usageContexts: ["Skiing", "Winter", "Mountain", "Snow", "Vacation"],
    examples: [
      { context: "Vacation", text: "Ski trip 🎿" },
      { context: "Winter", text: "Hit the slopes 🎿" },
      { context: "Mountain", text: "Alpine skiing 🎿" }
    ],
    misunderstandings: ["Represents downhill skiing"],
    relatedEmojis: ["snowboard", "mountain", "snow"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["ski", "skiing", "winter", "mountain", "snow"]
  },
  {
    unicode: "🛷",
    name: "Sled",
    slug: "sled",
    shortMeaning: "A wooden sled for snow sliding.",
    detailedMeaning: "The Sled emoji shows a traditional wooden sled. It represents sledding, winter fun, snow activities, and childhood winter memories.\n\nUsed for sledding, winter play, snow days, or bobsled sports.",
    usageContexts: ["Sledding", "Winter", "Snow", "Fun", "Childhood"],
    examples: [
      { context: "Fun", text: "Going sledding 🛷" },
      { context: "Snow day", text: "Snow day fun 🛷" },
      { context: "Winter", text: "Winter activities 🛷" }
    ],
    misunderstandings: ["Traditional or sport sledding"],
    relatedEmojis: ["snowflake", "skis", "mountain"],
    categorySlug: "activities",
    subgroup: "sport",
    keywords: ["sled", "sledding", "winter", "snow", "toboggan"]
  },
  {
    unicode: "🏋️",
    name: "Person Lifting Weights",
    slug: "person-lifting-weights",
    shortMeaning: "A person lifting a barbell over their head.",
    detailedMeaning: "The Person Lifting Weights emoji shows someone lifting a heavy barbell. It represents weightlifting, gym workouts, strength training, and fitness.\n\nUsed for gym sessions, fitness motivation, strength training, or powerlifting.",
    usageContexts: ["Gym", "Fitness", "Weightlifting", "Strength", "Workout"],
    examples: [
      { context: "Gym", text: "Gym time 🏋️" },
      { context: "Fitness", text: "Lifting heavy 🏋️" },
      { context: "Motivation", text: "Getting stronger 🏋️" }
    ],
    misunderstandings: ["Represents gym and strength training"],
    relatedEmojis: ["flexed-biceps", "running", "sports-medal"],
    categorySlug: "activities",
    subgroup: "person-sport",
    keywords: ["weightlifting", "gym", "fitness", "barbell", "strength"]
  },
  {
    unicode: "🏊",
    name: "Person Swimming",
    slug: "person-swimming",
    shortMeaning: "A person swimming in water.",
    detailedMeaning: "The Person Swimming emoji shows someone swimming. It represents swimming, water sports, pools, and aquatic exercise.\n\nUsed for swimming, pool activities, beach visits, or Olympic swimming.",
    usageContexts: ["Swimming", "Pool", "Beach", "Water", "Exercise"],
    examples: [
      { context: "Pool", text: "Pool time 🏊" },
      { context: "Exercise", text: "Morning swim 🏊" },
      { context: "Beach", text: "Swimming in the ocean 🏊" }
    ],
    misunderstandings: ["Any water swimming"],
    relatedEmojis: ["water-wave", "pool", "beach"],
    categorySlug: "activities",
    subgroup: "person-sport",
    keywords: ["swimming", "pool", "water", "sport", "aquatic"]
  },
  {
    unicode: "🚴",
    name: "Person Biking",
    slug: "person-biking",
    shortMeaning: "A person riding a bicycle.",
    detailedMeaning: "The Person Biking emoji shows someone riding a bicycle. It represents cycling, biking, bike commuting, and cycle sports.\n\nUsed for cycling, bike rides, fitness, or Tour de France discussions.",
    usageContexts: ["Cycling", "Biking", "Exercise", "Commuting", "Sport"],
    examples: [
      { context: "Ride", text: "Bike ride 🚴" },
      { context: "Commute", text: "Biking to work 🚴" },
      { context: "Sport", text: "Tour de France 🚴" }
    ],
    misunderstandings: ["Represents all cycling"],
    relatedEmojis: ["bicycle", "mountain-bike", "sports-medal"],
    categorySlug: "activities",
    subgroup: "person-sport",
    keywords: ["cycling", "bike", "bicycle", "sport", "exercise"]
  },
  {
    unicode: "🧘",
    name: "Person in Lotus Position",
    slug: "person-in-lotus-position",
    shortMeaning: "A person meditating in lotus position.",
    detailedMeaning: "The Person in Lotus Position emoji shows someone sitting cross-legged in meditation pose. It represents meditation, yoga, mindfulness, and inner peace.\n\nUsed for meditation, yoga practice, mindfulness, or spiritual content.",
    usageContexts: ["Meditation", "Yoga", "Mindfulness", "Peace", "Wellness"],
    examples: [
      { context: "Meditation", text: "Daily meditation 🧘" },
      { context: "Yoga", text: "Yoga session 🧘" },
      { context: "Peace", text: "Finding inner peace 🧘" }
    ],
    misunderstandings: ["Represents meditation and yoga"],
    relatedEmojis: ["om", "lotus", "peace"],
    categorySlug: "activities",
    subgroup: "person-resting",
    keywords: ["meditation", "yoga", "lotus", "mindfulness", "zen"]
  },
  // GAMES & ENTERTAINMENT
  {
    unicode: "🎮",
    name: "Video Game",
    slug: "video-game",
    shortMeaning: "A video game controller for console gaming.",
    detailedMeaning: "The Video Game emoji shows a classic game controller. It represents video gaming, console gaming, esports, and gaming culture.\n\nUsed for gaming sessions, video game discussions, or esports content.",
    usageContexts: ["Gaming", "Video games", "Esports", "Console", "Entertainment"],
    examples: [
      { context: "Gaming", text: "Gaming night 🎮" },
      { context: "Fun", text: "Playing video games 🎮" },
      { context: "Esports", text: "Tournament time 🎮" }
    ],
    misunderstandings: ["Universal gaming symbol"],
    relatedEmojis: ["joystick", "computer", "trophy"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["video game", "gaming", "controller", "console", "play"]
  },
  {
    unicode: "🕹️",
    name: "Joystick",
    slug: "joystick",
    shortMeaning: "A retro joystick controller for arcade games.",
    detailedMeaning: "The Joystick emoji shows a classic arcade-style joystick. It represents retro gaming, arcade games, flight simulators, and nostalgic gaming.\n\nUsed for retro gaming, arcade discussions, or vintage gaming nostalgia.",
    usageContexts: ["Retro gaming", "Arcade", "Nostalgic", "Flight sim", "Vintage"],
    examples: [
      { context: "Retro", text: "Retro gaming 🕹️" },
      { context: "Arcade", text: "Arcade vibes 🕹️" },
      { context: "Nostalgia", text: "80s gaming 🕹️" }
    ],
    misunderstandings: ["Represents retro/arcade gaming"],
    relatedEmojis: ["video-game", "alien-monster", "pacman"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["joystick", "arcade", "retro", "gaming", "vintage"]
  },
  {
    unicode: "🎲",
    name: "Game Die",
    slug: "game-die",
    shortMeaning: "A six-sided die used in board games.",
    detailedMeaning: "The Game Die emoji shows a single six-sided die (d6). It represents dice games, board games, chance, gambling, and randomness.\n\nUsed for board games, gambling, taking chances, or expressing randomness.",
    usageContexts: ["Games", "Chance", "Gambling", "Board games", "Random"],
    examples: [
      { context: "Games", text: "Roll the dice 🎲" },
      { context: "Chance", text: "Taking a gamble 🎲" },
      { context: "Random", text: "Random choice 🎲" }
    ],
    misunderstandings: ["Represents chance and games"],
    relatedEmojis: ["game", "spades", "slot-machine"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["dice", "die", "game", "chance", "gambling"]
  },
  {
    unicode: "🃏",
    name: "Joker",
    slug: "joker",
    shortMeaning: "A joker playing card, the wild card.",
    detailedMeaning: "The Joker emoji shows a joker playing card, often used as a wild card in card games. It represents card games, wild cards, tricksters, and unpredictability.\n\nUsed for card games, poker, unpredictability, or Joker character references.",
    usageContexts: ["Cards", "Wild card", "Unpredictable", "Poker", "Trickster"],
    examples: [
      { context: "Cards", text: "Wild card 🃏" },
      { context: "Unpredictable", text: "You never know 🃏" },
      { context: "Fun", text: "Playing joker 🃏" }
    ],
    misunderstandings: ["Wild card in most games"],
    relatedEmojis: ["spades", "hearts", "diamonds"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["joker", "card", "wild", "game", "trickster"]
  },
  {
    unicode: "♠️",
    name: "Spade Suit",
    slug: "spade-suit",
    shortMeaning: "The spade suit symbol from playing cards.",
    detailedMeaning: "The Spade Suit emoji shows the black spade symbol from playing cards. It represents card games, poker, and is associated with wisdom and acceptance.\n\nUsed for card games, poker discussions, or as a decorative symbol.",
    usageContexts: ["Cards", "Poker", "Games", "Suit", "Symbol"],
    examples: [
      { context: "Poker", text: "Ace of spades ♠️" },
      { context: "Cards", text: "Card night ♠️" },
      { context: "Game", text: "Playing spades ♠️" }
    ],
    misunderstandings: ["One of four card suits"],
    relatedEmojis: ["heart-suit", "diamond-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["spade", "card", "suit", "poker", "playing"]
  },
  {
    unicode: "♥️",
    name: "Heart Suit",
    slug: "heart-suit",
    shortMeaning: "The heart suit symbol from playing cards.",
    detailedMeaning: "The Heart Suit emoji shows the red heart symbol from playing cards. It represents card games, love, and emotional expression.\n\nUsed for card games or sometimes as an alternative heart/love symbol.",
    usageContexts: ["Cards", "Love", "Games", "Suit", "Heart"],
    examples: [
      { context: "Cards", text: "Queen of hearts ♥️" },
      { context: "Love", text: "Full of love ♥️" },
      { context: "Game", text: "Playing hearts ♥️" }
    ],
    misunderstandings: ["Playing card suit, also means love"],
    relatedEmojis: ["spade-suit", "diamond-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["heart", "card", "suit", "love", "playing"]
  },
  {
    unicode: "♦️",
    name: "Diamond Suit",
    slug: "diamond-suit",
    shortMeaning: "The diamond suit symbol from playing cards.",
    detailedMeaning: "The Diamond Suit emoji shows the red diamond symbol from playing cards. It represents card games and is associated with wealth and materialism.\n\nUsed for card games, poker discussions, or wealth references.",
    usageContexts: ["Cards", "Poker", "Games", "Suit", "Wealth"],
    examples: [
      { context: "Cards", text: "King of diamonds ♦️" },
      { context: "Poker", text: "Diamond flush ♦️" },
      { context: "Game", text: "Card game night ♦️" }
    ],
    misunderstandings: ["One of four card suits"],
    relatedEmojis: ["spade-suit", "heart-suit", "club-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["diamond", "card", "suit", "poker", "playing"]
  },
  {
    unicode: "♣️",
    name: "Club Suit",
    slug: "club-suit",
    shortMeaning: "The club suit symbol from playing cards.",
    detailedMeaning: "The Club Suit emoji shows the black club (clover) symbol from playing cards. It represents card games and is associated with luck and fortune.\n\nUsed for card games, poker discussions, or luck references.",
    usageContexts: ["Cards", "Poker", "Games", "Suit", "Luck"],
    examples: [
      { context: "Cards", text: "Ace of clubs ♣️" },
      { context: "Poker", text: "Club flush ♣️" },
      { context: "Lucky", text: "Feeling lucky ♣️" }
    ],
    misunderstandings: ["One of four card suits"],
    relatedEmojis: ["spade-suit", "heart-suit", "diamond-suit"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["club", "card", "suit", "poker", "clover"]
  },
  {
    unicode: "🧩",
    name: "Puzzle Piece",
    slug: "puzzle-piece",
    shortMeaning: "A single jigsaw puzzle piece.",
    detailedMeaning: "The Puzzle Piece emoji shows a single jigsaw puzzle piece. It represents puzzles, problem-solving, fitting together, and autism awareness.\n\nUsed for puzzles, problem-solving, finding the right fit, or autism awareness.",
    usageContexts: ["Puzzle", "Problem-solving", "Fitting", "Autism", "Mystery"],
    examples: [
      { context: "Puzzle", text: "Doing a puzzle 🧩" },
      { context: "Solution", text: "Found the missing piece 🧩" },
      { context: "Fitting", text: "Perfect fit 🧩" }
    ],
    misunderstandings: ["Also symbol for autism awareness"],
    relatedEmojis: ["brain", "game", "mystery"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["puzzle", "piece", "jigsaw", "solve", "fit"]
  },
  {
    unicode: "🎯",
    name: "Bullseye",
    slug: "bullseye",
    shortMeaning: "A dart in the center of a target board.",
    detailedMeaning: "The Bullseye emoji shows a dart hitting the center of a target. It represents accuracy, hitting goals, darts game, and achieving objectives.\n\nUsed for hitting targets, achieving goals, accuracy, or playing darts.",
    usageContexts: ["Target", "Goal", "Accuracy", "Darts", "Success"],
    examples: [
      { context: "Goal", text: "Hit the target 🎯" },
      { context: "Success", text: "Nailed it 🎯" },
      { context: "Darts", text: "Bullseye! 🎯" }
    ],
    misunderstandings: ["Represents accuracy and goals"],
    relatedEmojis: ["trophy", "check-mark", "medal"],
    categorySlug: "activities",
    subgroup: "game",
    keywords: ["target", "bullseye", "dart", "goal", "accuracy"]
  },
  // EVENTS & CELEBRATIONS
  {
    unicode: "🎪",
    name: "Circus Tent",
    slug: "circus-tent",
    shortMeaning: "A colorful circus big top tent.",
    detailedMeaning: "The Circus Tent emoji shows a striped big top circus tent. It represents circuses, carnivals, entertainment, and spectacle.\n\nUsed for circus references, carnival events, entertainment, or chaotic situations.",
    usageContexts: ["Circus", "Carnival", "Entertainment", "Show", "Fun"],
    examples: [
      { context: "Circus", text: "Going to the circus 🎪" },
      { context: "Chaos", text: "This place is a circus 🎪" },
      { context: "Fun", text: "Carnival time 🎪" }
    ],
    misunderstandings: ["Also means chaotic situation"],
    relatedEmojis: ["clown", "ferris-wheel", "carousel"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["circus", "tent", "carnival", "show", "entertainment"]
  },
  {
    unicode: "🎨",
    name: "Artist Palette",
    slug: "artist-palette",
    shortMeaning: "A painter's palette with colors and brush.",
    detailedMeaning: "The Artist Palette emoji shows a painter's palette with colorful paints and a brush. It represents art, painting, creativity, and artistic expression.\n\nUsed for art, painting, creativity, design, or anything artistic.",
    usageContexts: ["Art", "Painting", "Creative", "Design", "Artistic"],
    examples: [
      { context: "Art", text: "Time to paint 🎨" },
      { context: "Creative", text: "Feeling creative 🎨" },
      { context: "Design", text: "New artwork 🎨" }
    ],
    misunderstandings: ["Universal art and creativity symbol"],
    relatedEmojis: ["paintbrush", "frame", "crayon"],
    categorySlug: "activities",
    subgroup: "arts-crafts",
    keywords: ["art", "palette", "paint", "creative", "artist"]
  },
  {
    unicode: "🎬",
    name: "Clapper Board",
    slug: "clapper-board",
    shortMeaning: "A movie clapper board used in film production.",
    detailedMeaning: "The Clapper Board emoji shows a film slate used to mark scenes in movies. It represents movies, film production, Hollywood, and entertainment industry.\n\nUsed for movies, film discussions, directing, or action-related content.",
    usageContexts: ["Movies", "Film", "Hollywood", "Production", "Action"],
    examples: [
      { context: "Movies", text: "Movie night 🎬" },
      { context: "Action", text: "Action! 🎬" },
      { context: "Film", text: "New film out 🎬" }
    ],
    misunderstandings: ["Represents film industry"],
    relatedEmojis: ["movie-camera", "film-reel", "popcorn"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["movie", "film", "clapper", "Hollywood", "action"]
  },
  {
    unicode: "🎤",
    name: "Microphone",
    slug: "microphone",
    shortMeaning: "A handheld microphone for singing or speaking.",
    detailedMeaning: "The Microphone emoji shows a handheld microphone. It represents singing, karaoke, speeches, podcasts, and vocal performance.\n\nUsed for singing, karaoke, speeches, podcasting, or any vocal content.",
    usageContexts: ["Singing", "Karaoke", "Speech", "Podcast", "Performance"],
    examples: [
      { context: "Karaoke", text: "Karaoke night 🎤" },
      { context: "Singing", text: "Singing my heart out 🎤" },
      { context: "Speech", text: "Time to speak up 🎤" }
    ],
    misunderstandings: ["Universal microphone symbol"],
    relatedEmojis: ["musical-notes", "headphones", "speaker"],
    categorySlug: "activities",
    subgroup: "music",
    keywords: ["microphone", "singing", "karaoke", "speech", "voice"]
  },
  {
    unicode: "🎧",
    name: "Headphone",
    slug: "headphone",
    shortMeaning: "A pair of headphones for listening to audio.",
    detailedMeaning: "The Headphone emoji shows a pair of over-ear headphones. It represents listening to music, audio, podcasts, and focused listening.\n\nUsed for music listening, podcasts, focus mode, or DJ content.",
    usageContexts: ["Music", "Listening", "Podcast", "Focus", "DJ"],
    examples: [
      { context: "Music", text: "Listening to music 🎧" },
      { context: "Focus", text: "In the zone 🎧" },
      { context: "Podcast", text: "New podcast episode 🎧" }
    ],
    misunderstandings: ["Universal audio listening symbol"],
    relatedEmojis: ["musical-notes", "microphone", "speaker"],
    categorySlug: "activities",
    subgroup: "music",
    keywords: ["headphones", "music", "listening", "audio", "DJ"]
  },
  {
    unicode: "🎷",
    name: "Saxophone",
    slug: "saxophone",
    shortMeaning: "A golden saxophone musical instrument.",
    detailedMeaning: "The Saxophone emoji shows a golden saxophone. It represents jazz music, blues, musical performance, and smooth sounds.\n\nUsed for jazz, music discussions, saxophone playing, or smooth vibes.",
    usageContexts: ["Jazz", "Music", "Saxophone", "Blues", "Smooth"],
    examples: [
      { context: "Jazz", text: "Jazz night 🎷" },
      { context: "Music", text: "Smooth sax 🎷" },
      { context: "Vibe", text: "Smooth vibes 🎷" }
    ],
    misunderstandings: ["Specifically jazz/saxophone"],
    relatedEmojis: ["trumpet", "musical-notes", "piano"],
    categorySlug: "activities",
    subgroup: "musical-instrument",
    keywords: ["saxophone", "jazz", "music", "instrument", "blues"]
  },
  {
    unicode: "🎸",
    name: "Guitar",
    slug: "guitar",
    shortMeaning: "An electric guitar for rock music.",
    detailedMeaning: "The Guitar emoji shows an electric guitar. It represents rock music, guitar playing, musicians, and bands.\n\nUsed for rock music, guitar playing, band content, or music in general.",
    usageContexts: ["Rock", "Guitar", "Music", "Band", "Playing"],
    examples: [
      { context: "Rock", text: "Rock and roll 🎸" },
      { context: "Playing", text: "Guitar solo 🎸" },
      { context: "Band", text: "Band practice 🎸" }
    ],
    misunderstandings: ["Represents guitar/rock music"],
    relatedEmojis: ["musical-notes", "drum", "microphone"],
    categorySlug: "activities",
    subgroup: "musical-instrument",
    keywords: ["guitar", "rock", "music", "instrument", "electric"]
  },
  {
    unicode: "🎹",
    name: "Musical Keyboard",
    slug: "musical-keyboard",
    shortMeaning: "A musical keyboard/piano keys.",
    detailedMeaning: "The Musical Keyboard emoji shows piano keys. It represents piano, keyboard instruments, classical music, and musical composition.\n\nUsed for piano playing, keyboard music, classical content, or composition.",
    usageContexts: ["Piano", "Keyboard", "Classical", "Music", "Composition"],
    examples: [
      { context: "Piano", text: "Piano recital 🎹" },
      { context: "Playing", text: "Tickling the ivories 🎹" },
      { context: "Music", text: "Keyboard solo 🎹" }
    ],
    misunderstandings: ["Represents piano/keyboard"],
    relatedEmojis: ["musical-notes", "violin", "saxophone"],
    categorySlug: "activities",
    subgroup: "musical-instrument",
    keywords: ["piano", "keyboard", "music", "keys", "classical"]
  },
  {
    unicode: "🥁",
    name: "Drum",
    slug: "drum",
    shortMeaning: "A snare drum with drumsticks.",
    detailedMeaning: "The Drum emoji shows a snare drum with two drumsticks. It represents drumming, percussion, bands, and rhythm.\n\nUsed for drumming, percussion, band content, or rhythm discussions.",
    usageContexts: ["Drums", "Percussion", "Band", "Rhythm", "Music"],
    examples: [
      { context: "Drums", text: "Drum solo 🥁" },
      { context: "Rhythm", text: "Keep the beat 🥁" },
      { context: "Announcement", text: "Drumroll please 🥁" }
    ],
    misunderstandings: ["Represents drums and rhythm"],
    relatedEmojis: ["guitar", "musical-notes", "microphone"],
    categorySlug: "activities",
    subgroup: "musical-instrument",
    keywords: ["drum", "percussion", "drumstick", "beat", "rhythm"]
  },
  {
    unicode: "🎻",
    name: "Violin",
    slug: "violin",
    shortMeaning: "A violin with bow for classical music.",
    detailedMeaning: "The Violin emoji shows a violin with its bow. It represents classical music, orchestras, violin playing, and refined music.\n\nUsed for classical music, violin playing, orchestral content, or sad music.",
    usageContexts: ["Classical", "Violin", "Orchestra", "Music", "Sad"],
    examples: [
      { context: "Classical", text: "Symphony tonight 🎻" },
      { context: "Sad", text: "World's smallest violin 🎻" },
      { context: "Music", text: "Violin concerto 🎻" }
    ],
    misunderstandings: ["'World's smallest violin' = sarcastic sympathy"],
    relatedEmojis: ["piano", "musical-notes", "orchestra"],
    categorySlug: "activities",
    subgroup: "musical-instrument",
    keywords: ["violin", "classical", "orchestra", "bow", "music"]
  },
  // AWARDS & TROPHIES
  {
    unicode: "🏆",
    name: "Trophy",
    slug: "trophy",
    shortMeaning: "A gold trophy cup for winning first place.",
    detailedMeaning: "The Trophy emoji shows a gold trophy cup. It represents winning, achievement, first place, success, and championships.\n\nUsed for victories, achievements, competitions won, or celebrating success.",
    usageContexts: ["Winning", "Champion", "Achievement", "First place", "Success"],
    examples: [
      { context: "Winning", text: "We won! 🏆" },
      { context: "Achievement", text: "Goal achieved 🏆" },
      { context: "Champion", text: "Champions! 🏆" }
    ],
    misunderstandings: ["Universal winning symbol"],
    relatedEmojis: ["gold-medal", "sports-medal", "star"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["trophy", "winning", "champion", "first", "gold"]
  },
  {
    unicode: "🥇",
    name: "1st Place Medal",
    slug: "1st-place-medal",
    shortMeaning: "A gold medal for first place.",
    detailedMeaning: "The 1st Place Medal emoji shows a gold medal with a '1' on it. It represents winning first place, gold medal achievement, and being the best.\n\nUsed for first place finishes, gold medal wins, or being number one.",
    usageContexts: ["First place", "Gold", "Winner", "Best", "Champion"],
    examples: [
      { context: "First", text: "First place! 🥇" },
      { context: "Best", text: "Number one 🥇" },
      { context: "Olympics", text: "Gold medal 🥇" }
    ],
    misunderstandings: ["First place specifically"],
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
    detailedMeaning: "The 2nd Place Medal emoji shows a silver medal with a '2' on it. It represents second place, silver medal achievement, and being runner-up.\n\nUsed for second place finishes, silver medal wins, or close seconds.",
    usageContexts: ["Second place", "Silver", "Runner-up", "Almost", "Close"],
    examples: [
      { context: "Second", text: "Silver medal! 🥈" },
      { context: "Close", text: "So close! 🥈" },
      { context: "Olympics", text: "Second place 🥈" }
    ],
    misunderstandings: ["Second place specifically"],
    relatedEmojis: ["1st-place-medal", "3rd-place-medal", "trophy"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["silver", "second", "medal", "runner-up", "close"]
  },
  {
    unicode: "🥉",
    name: "3rd Place Medal",
    slug: "3rd-place-medal",
    shortMeaning: "A bronze medal for third place.",
    detailedMeaning: "The 3rd Place Medal emoji shows a bronze medal with a '3' on it. It represents third place, bronze medal achievement, and making the podium.\n\nUsed for third place finishes, bronze medal wins, or podium placements.",
    usageContexts: ["Third place", "Bronze", "Podium", "Top three", "Achievement"],
    examples: [
      { context: "Third", text: "Bronze medal! 🥉" },
      { context: "Podium", text: "Made the podium 🥉" },
      { context: "Olympics", text: "Third place 🥉" }
    ],
    misunderstandings: ["Third place specifically"],
    relatedEmojis: ["1st-place-medal", "2nd-place-medal", "trophy"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["bronze", "third", "medal", "podium", "achievement"]
  },
  {
    unicode: "🏅",
    name: "Sports Medal",
    slug: "sports-medal",
    shortMeaning: "A generic gold sports medal on a ribbon.",
    detailedMeaning: "The Sports Medal emoji shows a gold medal on a red ribbon. It represents athletic achievement, sports victories, and participation awards.\n\nUsed for sports achievements, athletic accomplishments, or participation.",
    usageContexts: ["Sports", "Achievement", "Athletic", "Winner", "Participation"],
    examples: [
      { context: "Sports", text: "Sports day medal 🏅" },
      { context: "Achievement", text: "Well earned 🏅" },
      { context: "Participation", text: "Everyone gets one 🏅" }
    ],
    misunderstandings: ["Generic sports medal"],
    relatedEmojis: ["trophy", "1st-place-medal", "ribbon"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["medal", "sports", "achievement", "athletic", "award"]
  },
  {
    unicode: "🎖️",
    name: "Military Medal",
    slug: "military-medal",
    shortMeaning: "A military medal for service or bravery.",
    detailedMeaning: "The Military Medal emoji shows a medal with a ribbon typically awarded for military service or bravery. It represents military honors, veteran recognition, and valor.\n\nUsed for military themes, veteran appreciation, or honor and bravery.",
    usageContexts: ["Military", "Honor", "Veteran", "Bravery", "Service"],
    examples: [
      { context: "Veterans", text: "Thank you for your service 🎖️" },
      { context: "Honor", text: "Medal of honor 🎖️" },
      { context: "Military", text: "Military achievement 🎖️" }
    ],
    misunderstandings: ["Specifically military honor"],
    relatedEmojis: ["sports-medal", "trophy", "salute"],
    categorySlug: "activities",
    subgroup: "award-medal",
    keywords: ["military", "medal", "honor", "veteran", "bravery"]
  },
  {
    unicode: "🎁",
    name: "Wrapped Gift",
    slug: "wrapped-gift",
    shortMeaning: "A wrapped present with a bow.",
    detailedMeaning: "The Wrapped Gift emoji shows a gift box wrapped with a bow. It represents presents, giving, birthdays, holidays, and surprises.\n\nUsed for gift-giving occasions, birthdays, Christmas, or any celebration with presents.",
    usageContexts: ["Gift", "Present", "Birthday", "Christmas", "Surprise"],
    examples: [
      { context: "Birthday", text: "Happy birthday! 🎁" },
      { context: "Christmas", text: "Christmas presents 🎁" },
      { context: "Surprise", text: "Got you something 🎁" }
    ],
    misunderstandings: ["Universal gift symbol"],
    relatedEmojis: ["birthday-cake", "christmas-tree", "party"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["gift", "present", "birthday", "Christmas", "wrapped"]
  },
  {
    unicode: "🎀",
    name: "Ribbon",
    slug: "ribbon",
    shortMeaning: "A decorative pink ribbon bow.",
    detailedMeaning: "The Ribbon emoji shows a pink decorative ribbon bow. It represents decoration, femininity, gift wrapping, and various awareness campaigns.\n\nUsed for gifts, decoration, breast cancer awareness, or feminine themes.",
    usageContexts: ["Decoration", "Gift", "Feminine", "Awareness", "Pretty"],
    examples: [
      { context: "Gift", text: "All wrapped up 🎀" },
      { context: "Cute", text: "So pretty 🎀" },
      { context: "Awareness", text: "Breast cancer awareness 🎀" }
    ],
    misunderstandings: ["Pink ribbon = breast cancer awareness"],
    relatedEmojis: ["wrapped-gift", "bow", "heart"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["ribbon", "bow", "pink", "decoration", "gift"]
  },
  {
    unicode: "🎉",
    name: "Party Popper",
    slug: "party-popper",
    shortMeaning: "A party popper releasing confetti for celebration.",
    detailedMeaning: "The Party Popper emoji shows a party popper shooting out colorful confetti and streamers. It represents celebration, parties, congratulations, and festive occasions.\n\nUsed for celebrations, congratulations, achievements, or any joyous occasion.",
    usageContexts: ["Celebration", "Party", "Congratulations", "Achievement", "Joy"],
    examples: [
      { context: "Celebration", text: "Congratulations! 🎉" },
      { context: "Party", text: "Party time 🎉" },
      { context: "Achievement", text: "You did it! 🎉" }
    ],
    misunderstandings: ["Universal celebration symbol"],
    relatedEmojis: ["confetti-ball", "balloon", "sparkles"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["party", "celebration", "confetti", "congratulations", "popper"]
  },
  {
    unicode: "🎊",
    name: "Confetti Ball",
    slug: "confetti-ball",
    shortMeaning: "A ball releasing colorful confetti.",
    detailedMeaning: "The Confetti Ball emoji shows a ball bursting with colorful confetti. It represents celebration, parties, festive occasions, and joyous moments.\n\nUsed for celebrations, New Year, parties, or congratulating someone.",
    usageContexts: ["Celebration", "Party", "Festive", "New Year", "Joy"],
    examples: [
      { context: "New Year", text: "Happy New Year! 🎊" },
      { context: "Celebration", text: "Time to celebrate 🎊" },
      { context: "Party", text: "Party vibes 🎊" }
    ],
    misunderstandings: ["Similar to party popper"],
    relatedEmojis: ["party-popper", "balloon", "sparkles"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["confetti", "celebration", "party", "festive", "ball"]
  },
  {
    unicode: "🎈",
    name: "Balloon",
    slug: "balloon",
    shortMeaning: "A colorful balloon on a string.",
    detailedMeaning: "The Balloon emoji shows a single balloon on a string. It represents parties, celebrations, birthdays, and festive decorations.\n\nUsed for birthday parties, celebrations, or expressing lightness and joy.",
    usageContexts: ["Birthday", "Party", "Celebration", "Fun", "Decoration"],
    examples: [
      { context: "Birthday", text: "Happy birthday! 🎈" },
      { context: "Party", text: "Party decorations 🎈" },
      { context: "Fun", text: "Having fun 🎈" }
    ],
    misunderstandings: ["Universal party/birthday symbol"],
    relatedEmojis: ["party-popper", "birthday-cake", "confetti-ball"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["balloon", "party", "birthday", "celebration", "decoration"]
  },
  {
    unicode: "🎂",
    name: "Birthday Cake",
    slug: "birthday-cake",
    shortMeaning: "A frosted birthday cake with candles.",
    detailedMeaning: "The Birthday Cake emoji shows a frosted cake with lit candles. It represents birthdays, celebrations, cake, and making wishes.\n\nUsed for birthday wishes, celebrating someone's birthday, or cake-related content.",
    usageContexts: ["Birthday", "Cake", "Celebration", "Wish", "Party"],
    examples: [
      { context: "Birthday", text: "Happy birthday! 🎂" },
      { context: "Wish", text: "Make a wish 🎂" },
      { context: "Celebration", text: "Birthday party 🎂" }
    ],
    misunderstandings: ["Universal birthday symbol"],
    relatedEmojis: ["balloon", "party-popper", "wrapped-gift"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["birthday", "cake", "candles", "celebration", "wish"]
  },
  {
    unicode: "🧨",
    name: "Firecracker",
    slug: "firecracker",
    shortMeaning: "A red firecracker or dynamite stick.",
    detailedMeaning: "The Firecracker emoji shows a red cylindrical firecracker with a lit fuse. It represents fireworks, celebrations, Chinese New Year, and explosive energy.\n\nUsed for Chinese New Year, fireworks, celebration, or describing something explosive.",
    usageContexts: ["Fireworks", "Chinese New Year", "Celebration", "Explosive", "Fun"],
    examples: [
      { context: "New Year", text: "Happy Chinese New Year! 🧨" },
      { context: "Celebration", text: "Fireworks time 🧨" },
      { context: "Explosive", text: "This is explosive 🧨" }
    ],
    misunderstandings: ["Firecracker, not dynamite"],
    relatedEmojis: ["fireworks", "sparkler", "dragon"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["firecracker", "fireworks", "Chinese New Year", "celebration", "explosive"]
  },
  {
    unicode: "🎇",
    name: "Sparkler",
    slug: "sparkler",
    shortMeaning: "A handheld sparkler firework.",
    detailedMeaning: "The Sparkler emoji shows a handheld sparkler shooting sparks. It represents celebrations, fireworks, holidays, and magical moments.\n\nUsed for celebrations, July 4th, New Year, or any sparkling occasion.",
    usageContexts: ["Fireworks", "Celebration", "4th of July", "New Year", "Magic"],
    examples: [
      { context: "July 4th", text: "Happy 4th! 🎇" },
      { context: "Celebration", text: "Sparkler time 🎇" },
      { context: "Magic", text: "Magical night 🎇" }
    ],
    misunderstandings: ["Handheld sparkler firework"],
    relatedEmojis: ["fireworks", "firecracker", "sparkles"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["sparkler", "fireworks", "celebration", "sparks", "holiday"]
  },
  {
    unicode: "🎆",
    name: "Fireworks",
    slug: "fireworks",
    shortMeaning: "Colorful fireworks exploding in the night sky.",
    detailedMeaning: "The Fireworks emoji shows colorful fireworks bursting in the night sky. It represents celebrations, New Year, independence days, and spectacular displays.\n\nUsed for New Year, 4th of July, celebrations, or spectacular moments.",
    usageContexts: ["New Year", "Celebration", "4th of July", "Night", "Spectacular"],
    examples: [
      { context: "New Year", text: "Happy New Year! 🎆" },
      { context: "Celebration", text: "Fireworks display 🎆" },
      { context: "Spectacular", text: "What a show 🎆" }
    ],
    misunderstandings: ["Sky fireworks display"],
    relatedEmojis: ["sparkler", "firecracker", "party-popper"],
    categorySlug: "activities",
    subgroup: "event",
    keywords: ["fireworks", "celebration", "New Year", "night", "display"]
  }
];
