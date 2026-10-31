import type { EmojiBatchEnrichment } from "./types";

/**
 * Holiday-season S-tier — 🎄 🎅 🤶 🧑‍🎄 ☃️ 🕎 🎁 🎆
 * Seasonal allowlist pages that peak in Nov–Jan searches.
 */
const BATCH_ID = "50-holiday-season-stier";

export const batch50HolidaySeasonStier: Record<string, EmojiBatchEnrichment> = {
  "christmas-tree": {
    batchId: BATCH_ID,
    searchTitle: "Christmas Tree Emoji Meaning (🎄): Merry Christmas & Holiday Cheer",
    snippetAnswer:
      "🎄 Christmas Tree means Christmas, the holiday season, and festive cheer. People send it for “Merry Christmas,” tree-decorating photos, December plans, and anything that feels like the holidays.",
    detailedParagraphs: [
      "Christmas Tree (🎄) shows a decorated evergreen, usually with ornaments and a star on top. It is the default Christmas emoji on every keyboard and the one people reach for first when December starts. Searches for it climb in November and peak in the week before December 25.",
      "Most of the time 🎄 is simple seasonal shorthand: “the holidays are here.” Put it after a greeting (“Merry Christmas 🎄”), under a photo of a lit tree, or in a group chat planning a gift exchange. It reads warm and cheerful, never sarcastic on its own.",
      "The emoji also marks the start of the season. “Tree is up 🎄” is one of the most common November and early-December texts, and many people change their display name or Instagram bio to include 🎄 for the whole month.",
      "For Christians the tree is a sign of life and hope in winter, gathered around the birth of Christ — see our [Christmas tree Christian meaning](/blog/christmas-tree-christian-meaning/) guide. If you want a post to read as religious rather than only festive, pair 🎄 with ✝️, 🙏, or a line about Jesus. On its own, 🎄 is understood as the cultural holiday that people of many backgrounds celebrate.",
      "Stacks change the mood. 🎄🎅🎁 is classic family Christmas; 🎄✨ is cozy aesthetic; 🎄❄️☃️ is winter wonderland. For a full copy list and combos, read [Christmas emojis meaning](/blog/christmas-emojis-meaning/) and [Christmas emoji combos](/blog/christmas-emoji-combos/).",
    ],
    textingMeaning:
      "Send 🎄 to wish someone a Merry Christmas, to say the tree is up, or to tag December plans. It is festive and friendly, safe for family, friends, and most coworkers.",
    socialMeaning:
      "On Instagram and TikTok, 🎄 tags tree-decorating reels, holiday outfits, and December photo dumps. In bios it signals the season; in comments it is quick holiday cheer.",
    caution:
      "Not everyone celebrates Christmas. In mixed workplaces or community groups, a neutral “Happy holidays ✨” or ❄️ is more inclusive. Avoid 🎄 in replies to grief or bad news, even in December.",
    examples: [
      { context: "Greeting", text: "Merry Christmas to you and your family 🎄" },
      { context: "Decorating", text: "Tree is finally up 🎄✨" },
      { context: "Plans", text: "Christmas Eve at my parents’ this year 🎄" },
      { context: "Gift exchange", text: "Secret Santa names drawn 🎄🎁" },
      { context: "Countdown", text: "Two weeks till Christmas 🎄" },
      { context: "Caption", text: "First tree in our new place 🎄🏡" },
      { context: "Faith", text: "Christ is born — Merry Christmas 🎄✝️" },
      { context: "Work-safe", text: "Office party Friday 🎄" },
    ],
    contextBlocks: [
      {
        title: "Is 🎄 religious?",
        body: "It can be, but most people read it as the general holiday. Add ✝️ or 🙏 if you mean the religious feast; see [nativity scene meaning](/blog/nativity-scene-meaning/) for the center of the Christian story.",
      },
      {
        title: "🎄 vs 🎅",
        body: "🎄 is the season and home; [🎅 Santa](/emoji/santa-claus/) is gifts, kids, and playful magic. Use 🎄 for greetings and decorating, 🎅 for presents and Secret Santa.",
      },
      {
        title: "🎄 vs ❄️ and ☃️",
        body: "❄️ and [☃️](/emoji/snowman/) say winter, not Christmas. They work for “Happy holidays” and snow days without naming a specific holiday.",
      },
      {
        title: "When to start using 🎄",
        body: "Many people start the day after Thanksgiving in the US, or on December 1. Earlier is fine for “tree is up” posts; just expect the occasional “already?” reply.",
      },
    ],
    searchIntents: [
      "christmas tree emoji meaning",
      "🎄 meaning in texting",
      "christmas tree emoji copy and paste",
      "merry christmas emoji",
      "🎄 vs 🎅",
      "christmas emoji combos",
    ],
    whenNotToUse: [
      "Skip 🎄 in condolence messages, even during the holidays.",
      "In inclusive workplace channels, prefer “Happy holidays” with ✨ or ❄️.",
      "Do not use it for non-holiday plant or forest posts — 🌲 Evergreen Tree is the plain tree.",
    ],
    faqs: [
      {
        question: "What does the Christmas tree emoji mean?",
        answer:
          "🎄 means Christmas and the holiday season: greetings, decorating, gift exchanges, and December plans.",
      },
      {
        question: "Is 🎄 a religious emoji?",
        answer:
          "It is mostly read as the cultural holiday. For a religious Christmas message, pair 🎄 with ✝️ or 🙏, or mention Jesus in words.",
      },
      {
        question: "What is the difference between 🎄 and 🌲?",
        answer:
          "🎄 is a decorated Christmas tree. 🌲 Evergreen Tree is a plain conifer for nature, hiking, and forests.",
      },
      {
        question: "Can I use 🎄 at work?",
        answer:
          "Yes for office parties and casual greetings. In large or diverse teams, “Happy holidays ✨” is the safer default.",
      },
      {
        question: "What emojis go with 🎄?",
        answer:
          "🎅🎁 for family Christmas, ✨❄️ for cozy winter, ✝️🙏 for the religious feast, 🥂🎆 when moving into New Year.",
      },
      {
        question: "How do I copy 🎄?",
        answer: "Tap 🎄 at the top of this page to copy it, then paste into any app.",
      },
    ],
  },

  "santa-claus": {
    batchId: BATCH_ID,
    searchTitle: "Santa Emoji Meaning (🎅): Gifts, Secret Santa & Christmas Spirit",
    snippetAnswer:
      "🎅 Santa Claus means Christmas gifts, holiday magic, and festive fun. People use it for Secret Santa, kids’ Christmas, “ho ho ho” jokes, and wish lists.",
    detailedParagraphs: [
      "Santa Claus (🎅) shows the red-suited, white-bearded gift-bringer of Christmas folklore. Where 🎄 says “it’s the season,” 🎅 says “presents are coming.” That is why it dominates Secret Santa chats, wish lists, and kids’ countdowns.",
      "In families the emoji carries childhood magic: letters to Santa, cookies by the fireplace, “Santa came!” on Christmas morning. Parents use 🎅 to keep the story going in texts the kids might see.",
      "Among adults 🎅 turns playful. “Ho ho ho 🎅” is a joke opener, “Santa’s coming early” teases a gift, and “I’ve been good this year 🎅” flirts with wish lists. It is lighthearted and almost never serious.",
      "Office and friend groups lean on 🎅 for gift exchanges. “Secret Santa names are out 🎅🎁” is one of the top December messages in workplace chats; see our [Santa emoji guide](/blog/santa-emoji-meaning/) for more.",
      "Unicode also includes [🤶 Mrs. Claus](/emoji/mrs-claus/) and [🧑‍🎄 Mx Claus](/emoji/mx-claus/), plus skin-tone variants of 🎅. Pick the one that fits your family or the person you are describing.",
    ],
    textingMeaning:
      "Send 🎅 for gifts, Secret Santa, kids’ Christmas, or playful “ho ho ho” energy. It is cheerful and works with almost anyone in December.",
    socialMeaning:
      "Santa visit photos, gift hauls, and Christmas morning reels use 🎅. Brands add it to holiday sales; creators use it for “what I got” posts.",
    caution:
      "Be careful in chats where young kids can read along — jokes that “Santa is your parents” spoil the magic. Outside December, 🎅 can read as random.",
    examples: [
      { context: "Secret Santa", text: "Secret Santa names are out 🎅🎁" },
      { context: "Kids", text: "Someone wrote their letter to Santa today 🎅" },
      { context: "Christmas morning", text: "Santa came! 🎅🎄" },
      { context: "Wish list", text: "Sending my list to Santa 🎅" },
      { context: "Joke", text: "Ho ho ho 🎅" },
      { context: "Mall visit", text: "Santa photos done, no tears this year 🎅" },
      { context: "Gift tease", text: "Santa might be early this year 👀🎅" },
      { context: "Work", text: "Gift exchange budget is $25 🎅" },
    ],
    contextBlocks: [
      {
        title: "🎅 vs 🎄",
        body: "🎅 is gifts and fun; [🎄](/emoji/christmas-tree/) is the season and home. “Merry Christmas” works with either, but gift talk leans 🎅.",
      },
      {
        title: "🎅 vs 🤶 vs 🧑‍🎄",
        body: "🎅 is Santa, [🤶](/emoji/mrs-claus/) is Mrs. Claus, [🧑‍🎄](/emoji/mx-claus/) is a gender-neutral Claus. All share the same gift-giving meaning.",
      },
      {
        title: "Is 🎅 flirty?",
        body: "Rarely. “Have you been naughty or nice? 🎅” can tease in a couple chat, but in most threads it is just holiday fun.",
      },
      {
        title: "Secret Santa etiquette",
        body: "Use 🎅🎁 when announcing names, budgets, and exchange dates. Pair with 🤫 if you are hinting without revealing who you drew.",
      },
    ],
    searchIntents: [
      "santa emoji meaning",
      "🎅 meaning in texting",
      "secret santa emoji",
      "santa claus emoji copy and paste",
      "🎅 vs 🤶",
      "ho ho ho emoji",
    ],
    whenNotToUse: [
      "Avoid spoiler jokes about Santa where children can read the chat.",
      "Skip 🎅 in condolence or serious work messages.",
      "Outside the holiday season it can look out of place.",
    ],
    faqs: [
      {
        question: "What does the Santa emoji mean?",
        answer:
          "🎅 means Christmas gifts, holiday magic, and festive fun — Secret Santa, wish lists, and Christmas morning.",
      },
      {
        question: "What does 🎅 mean in a text?",
        answer:
          "Usually gift talk or playful holiday cheer: “Santa came,” “Secret Santa names,” or “ho ho ho.”",
      },
      {
        question: "Is there a female Santa emoji?",
        answer: "Yes. 🤶 Mrs. Claus and 🧑‍🎄 Mx Claus share Santa’s meaning.",
      },
      {
        question: "What emojis go with 🎅?",
        answer: "🎁 for gifts, 🎄 for the season, 🦌 for reindeer, 🍪🥛 for cookies left out on Christmas Eve.",
      },
      {
        question: "Can I use 🎅 at work?",
        answer: "Yes for gift exchanges and holiday parties. It reads light and friendly.",
      },
      {
        question: "How do I copy 🎅?",
        answer: "Tap 🎅 at the top of this page to copy it, then paste anywhere.",
      },
    ],
  },

  "mrs-claus": {
    batchId: BATCH_ID,
    searchTitle: "Mrs. Claus Emoji Meaning (🤶): Christmas Mom, Baking & Holiday Host",
    snippetAnswer:
      "🤶 Mrs. Claus means Christmas cheer with a warm, motherly twist. People use it for holiday moms, baking, hosting, festive outfits, and anyone running the Christmas show.",
    detailedParagraphs: [
      "Mrs. Claus (🤶) shows Santa’s partner in a red hat and trimmed coat. Unicode added her in 2016 so Christmas posts would not have only one face. Her meaning matches 🎅 — gifts and holiday magic — with a homier tone.",
      "The most common use is the holiday host. The mom, grandma, aunt, or friend who bakes, wraps, decorates, and keeps everyone fed often gets tagged 🤶. “Mrs. Claus mode activated 🤶” means the planning and baking have begun.",
      "🤶 also shows up for festive outfits and costumes — a red velvet dress, a Santa hat, an ugly-sweater party look. In captions it signals playful, cozy Christmas energy rather than kids’ Santa magic.",
      "Partners use 🎅🤶 together for couple Christmas photos and matching pajamas. In Secret Santa chats, 🤶 is a fun alternative to 🎅 when a woman is organizing the exchange.",
      "If you want a gender-neutral version, use [🧑‍🎄 Mx Claus](/emoji/mx-claus/). For the classic gift-giver, use [🎅 Santa](/emoji/santa-claus/).",
    ],
    textingMeaning:
      "Send 🤶 to cheer on the holiday host, to describe baking and wrapping marathons, or to tag a festive outfit. It is warm, affectionate, and playful.",
    socialMeaning:
      "Instagram and TikTok use 🤶 for Christmas baking reels, hosting prep, couple costumes, and “holiday mom” posts.",
    caution:
      "Calling someone “Mrs. Claus” about their body or age can land wrong. Keep it about hosting, baking, or the outfit.",
    examples: [
      { context: "Baking", text: "Cookie marathon starts tonight 🤶🍪" },
      { context: "Host", text: "Mom is in full Mrs. Claus mode 🤶" },
      { context: "Outfit", text: "Party dress is giving Mrs. Claus 🤶❤️" },
      { context: "Couple", text: "Matching pajamas this year 🎅🤶" },
      { context: "Wrapping", text: "Wrapped 30 gifts, send help 🤶🎁" },
      { context: "Grandma", text: "Grandma’s kitchen on Christmas Eve 🤶" },
      { context: "Secret Santa", text: "I’m organizing the gift exchange 🤶" },
      { context: "Thanks", text: "Thank you for hosting, you’re the real Mrs. Claus 🤶" },
    ],
    contextBlocks: [
      {
        title: "🤶 vs 🎅",
        body: "Same Christmas meaning. 🎅 is gifts and kids’ magic; 🤶 is warmer and homier — baking, hosting, and holiday moms.",
      },
      {
        title: "🤶 vs 🧑‍🎄",
        body: "🧑‍🎄 Mx Claus is the gender-neutral Claus. Choose whichever describes the person or the costume.",
      },
      {
        title: "Is 🤶 a compliment?",
        body: "Yes when it praises hosting, cooking, or a festive look. It means “you made Christmas happen.”",
      },
    ],
    searchIntents: [
      "mrs claus emoji meaning",
      "🤶 meaning",
      "female santa emoji",
      "mrs claus emoji copy and paste",
      "🎅🤶 meaning",
    ],
    whenNotToUse: [
      "Avoid using 🤶 as a joke about someone’s age or weight.",
      "Skip it outside the holiday season — it reads as random.",
    ],
    faqs: [
      {
        question: "What does the Mrs. Claus emoji mean?",
        answer:
          "🤶 means Christmas cheer with a homey twist — baking, hosting, festive outfits, and holiday moms.",
      },
      {
        question: "Is 🤶 the female Santa emoji?",
        answer: "Yes. 🤶 is Mrs. Claus, Santa’s partner. 🧑‍🎄 Mx Claus is the gender-neutral version.",
      },
      {
        question: "What does 🎅🤶 mean?",
        answer: "A couple at Christmas — matching outfits, couple photos, or two hosts sharing the holidays.",
      },
      {
        question: "When was 🤶 added?",
        answer: "Mrs. Claus joined Unicode in 2016 (Emoji 4.0), alongside more gender options for people emojis.",
      },
      {
        question: "How do I copy 🤶?",
        answer: "Tap 🤶 at the top of this page to copy it.",
      },
    ],
  },

  "mx-claus": {
    batchId: BATCH_ID,
    searchTitle: "Mx Claus Emoji Meaning (🧑‍🎄): Gender-Neutral Santa for Christmas",
    snippetAnswer:
      "🧑‍🎄 Mx Claus is the gender-neutral Santa. It means the same thing as 🎅 — gifts, Christmas cheer, and holiday magic — without specifying a gender.",
    detailedParagraphs: [
      "Mx Claus (🧑‍🎄) is built from the person emoji plus a Christmas tree, a technique Unicode uses for neutral roles. It arrived in 2020 so Christmas posts could include a Claus without saying man or woman.",
      "The meaning is identical to [🎅 Santa](/emoji/santa-claus/) and [🤶 Mrs. Claus](/emoji/mrs-claus/): presents, Secret Santa, festive costumes, and holiday fun. Only the presentation is different.",
      "People choose 🧑‍🎄 when describing a non-binary friend, when they do not want to assign a gender to the gift-bringer, or when they want an inclusive holiday graphic for a team or school.",
      "On older phones 🧑‍🎄 can appear as two separate emojis, 🧑 and 🎄, side by side. That is a font limitation, not a different meaning; it combines on current iOS, Android, and Windows.",
      "For the season in general, [🎄](/emoji/christmas-tree/) is still the clearest choice. Use 🧑‍🎄 when you specifically want a Claus figure.",
    ],
    textingMeaning:
      "Send 🧑‍🎄 the same way you would send 🎅: gift exchanges, holiday greetings, and festive jokes, in a gender-neutral way.",
    socialMeaning:
      "Inclusive holiday campaigns, school newsletters, and non-binary creators use 🧑‍🎄 for Christmas posts and costumes.",
    caution:
      "Some older devices split it into 🧑🎄. If your audience is on old phones, add the word “Santa” so the meaning stays clear.",
    examples: [
      { context: "Inclusive greeting", text: "Happy holidays from the whole team 🧑‍🎄🎄" },
      { context: "Secret Santa", text: "Gift exchange draw is Friday 🧑‍🎄🎁" },
      { context: "Friend", text: "Our resident gift wizard 🧑‍🎄" },
      { context: "Costume", text: "Claus costume ready for the party 🧑‍🎄" },
      { context: "School", text: "Holiday market this weekend 🧑‍🎄" },
      { context: "Gift", text: "Something is coming your way 🧑‍🎄📦" },
    ],
    contextBlocks: [
      {
        title: "🧑‍🎄 vs 🎅",
        body: "Same Christmas meaning. 🎅 is Santa; 🧑‍🎄 is a Claus without a specified gender.",
      },
      {
        title: "Why does 🧑‍🎄 look like two emojis?",
        body: "It is a ZWJ sequence: 🧑 + joiner + 🎄. Older fonts show the parts separately; newer ones draw one figure.",
      },
      {
        title: "Who uses 🧑‍🎄?",
        body: "Anyone wanting a neutral Santa: inclusive teams, schools, and people describing non-binary friends at Christmas.",
      },
    ],
    searchIntents: [
      "mx claus emoji meaning",
      "gender neutral santa emoji",
      "🧑‍🎄 meaning",
      "mx claus emoji copy and paste",
    ],
    whenNotToUse: [
      "If your audience uses old phones, add the word “Santa” — it may render as 🧑🎄.",
      "Skip it outside December unless you are making a holiday joke.",
    ],
    faqs: [
      {
        question: "What does the Mx Claus emoji mean?",
        answer: "🧑‍🎄 is a gender-neutral Santa. It means Christmas gifts and holiday cheer, just like 🎅.",
      },
      {
        question: "Why was 🧑‍🎄 added?",
        answer: "Unicode added it in 2020 so Christmas posts could include a Claus without assigning a gender.",
      },
      {
        question: "Why does 🧑‍🎄 show as 🧑🎄 on my phone?",
        answer: "Your font does not support the combined sequence yet. Updating the operating system usually fixes it.",
      },
      {
        question: "How do I copy 🧑‍🎄?",
        answer: "Tap 🧑‍🎄 at the top of this page to copy the full sequence.",
      },
    ],
  },

  snowman: {
    batchId: BATCH_ID,
    searchTitle: "Snowman Emoji Meaning (☃️): Winter, Snow Days & Happy Holidays",
    snippetAnswer:
      "☃️ Snowman means winter fun, snow days, and the holiday season. It is a cozy, neutral way to say “Happy holidays” without naming one specific celebration.",
    detailedParagraphs: [
      "Snowman (☃️) shows a snowman with falling snow around it. It is one of the oldest emoji characters — the symbol existed in Unicode in 1993, long before color emoji — and it still reads as pure winter joy.",
      "The core meaning is snow and play: school snow days, building a snowman, sledding, and first-snowfall excitement. “Snow day!! ☃️” is the classic text from kids and parents alike.",
      "Because ☃️ is wintery rather than religious, it is a favorite for inclusive greetings. “Happy holidays ☃️” works for Christmas, Hanukkah, New Year, or simply the season, which is why teams and brands use it in December messages.",
      "It also carries cozy energy: hot chocolate, blankets, and winter outfits. Pair it with ❄️ and ☕ for a cold-weather vibe, or with 🎄 when the snow is part of a Christmas post.",
      "Unicode has a second snowman, [⛄ Snowman Without Snow](/emoji/snowman-without-snow/). Most people treat them as interchangeable; ☃️ includes the snowflakes and feels slightly more like a scene, ⛄ is a simple icon.",
    ],
    textingMeaning:
      "Send ☃️ for snow days, winter plans, cold weather, or a neutral “Happy holidays.” It is cheerful and safe for any audience.",
    socialMeaning:
      "Winter photo dumps, ski trips, and snowy walks get ☃️ in captions. Brands use it for seasonal sales because it says winter without naming a holiday.",
    caution:
      "In warm climates ☃️ can read as ironic (“so-called winter ☃️ at 30°C”). That is fine for jokes, but be clear if you mean real snow.",
    examples: [
      { context: "Snow day", text: "School’s closed! Snow day ☃️" },
      { context: "Greeting", text: "Happy holidays from all of us ☃️❄️" },
      { context: "Activity", text: "Built our first snowman of the year ☃️" },
      { context: "Cozy", text: "Blanket, cocoa, movie ☃️☕" },
      { context: "Weather", text: "First snow tonight ☃️" },
      { context: "Travel", text: "Ski trip booked ☃️🎿" },
      { context: "Joke", text: "Winter in Florida: 24°C ☃️😂" },
    ],
    contextBlocks: [
      {
        title: "☃️ vs ⛄",
        body: "Both mean snowman and winter. ☃️ shows falling snow; [⛄](/emoji/snowman-without-snow/) is the plain snowman. Use either.",
      },
      {
        title: "☃️ vs 🎄",
        body: "[🎄](/emoji/christmas-tree/) names Christmas. ☃️ says winter and works for “Happy holidays” across traditions.",
      },
      {
        title: "☃️ vs ❄️",
        body: "[❄️](/emoji/snowflake/) is cold, snow, or chilly vibes (sometimes a cold personality). ☃️ is playful winter fun.",
      },
      {
        title: "Inclusive holiday greeting",
        body: "In mixed groups, “Happy holidays ☃️✨” is warm and neutral. Add specific emojis only when you know what someone celebrates.",
      },
    ],
    searchIntents: [
      "snowman emoji meaning",
      "☃️ meaning",
      "☃️ vs ⛄",
      "winter emoji",
      "happy holidays emoji",
      "snowman emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid ☃️ in messages about storm damage or dangerous weather — it reads too playful.",
      "Skip it in summer unless you are joking about the heat.",
    ],
    faqs: [
      {
        question: "What does the snowman emoji mean?",
        answer: "☃️ means winter fun, snow days, and the holiday season — a cozy, neutral seasonal emoji.",
      },
      {
        question: "What is the difference between ☃️ and ⛄?",
        answer: "☃️ shows a snowman with falling snow; ⛄ is a snowman without snow. They mean the same thing.",
      },
      {
        question: "Is ☃️ a Christmas emoji?",
        answer: "It is a winter emoji. It fits Christmas posts but also works for Hanukkah, New Year, or any “Happy holidays.”",
      },
      {
        question: "What emojis go with ☃️?",
        answer: "❄️ for snow, ☕ for cozy, 🎿 for ski trips, 🎄 when the post is about Christmas.",
      },
      {
        question: "How do I copy ☃️?",
        answer: "Tap ☃️ at the top of this page to copy it.",
      },
    ],
  },

  menorah: {
    batchId: BATCH_ID,
    searchTitle: "Menorah Emoji Meaning (🕎): Hanukkah & the Festival of Lights",
    snippetAnswer:
      "🕎 Menorah means Hanukkah, the eight-night Jewish Festival of Lights. People use it for “Happy Hanukkah,” candle lighting, and Jewish faith and heritage.",
    detailedParagraphs: [
      "Menorah (🕎) shows a branched candelabrum. On most platforms it has nine branches — the hanukkiah used at Hanukkah, with eight candles for the eight nights and a ninth, the shamash, used to light the others. Unicode added it in 2015.",
      "Hanukkah remembers the rededication of the Temple in Jerusalem and the tradition that a small amount of oil lasted eight days. Each night families light one more candle, so the emoji naturally means light growing in the dark, family, and celebration.",
      "The most common use is the greeting: “Happy Hanukkah 🕎” or “Chag sameach 🕎.” People also post 🕎 with photos of candle lighting, latkes, sufganiyot (jelly doughnuts), and dreidel games during the eight nights in late November or December.",
      "🕎 is also a broader symbol of Jewish identity; the seven-branch menorah is an ancient emblem of the Temple and appears on Israel’s coat of arms. In everyday messages, though, the emoji almost always points to Hanukkah.",
      "Use [✡️ Star of David](/emoji/star-of-david/) when you mean Jewish identity in general, and 🕎 when you mean the Festival of Lights. Paired with ✨ or [🕯️ candle](/emoji/candle/), it reads as warm holiday light.",
    ],
    textingMeaning:
      "Send 🕎 to wish someone a Happy Hanukkah, to share candle-lighting moments, or to mark a Jewish holiday gathering. It is respectful and warm.",
    socialMeaning:
      "During Hanukkah, 🕎 tags lighting photos, family dinners, and greetings from brands, schools, and public figures. It appears with ✨ and 💙🤍 (the blue and white of Jewish holiday decor).",
    caution:
      "Use 🕎 for Hanukkah wishes to people who celebrate it — not as a generic winter decoration. Do not mix it into jokes; it is a religious symbol.",
    examples: [
      { context: "Greeting", text: "Happy Hanukkah to you and your family 🕎✨" },
      { context: "Lighting", text: "Night three, three candles 🕎" },
      { context: "Food", text: "Latkes are frying 🕎🥔" },
      { context: "Family", text: "Lighting at grandma’s tonight 🕎💙" },
      { context: "Hebrew greeting", text: "Chag sameach 🕎" },
      { context: "Inclusive team", text: "Happy Hanukkah to everyone celebrating 🕎" },
      { context: "Last night", text: "All eight candles lit 🕎✨" },
    ],
    contextBlocks: [
      {
        title: "Why does 🕎 have nine branches?",
        body: "The Hanukkah menorah holds eight candles for the eight nights plus the shamash, the helper candle used to light the others.",
      },
      {
        title: "🕎 vs ✡️",
        body: "[✡️](/emoji/star-of-david/) is the Star of David, a symbol of Jewish identity year-round. 🕎 specifically points to Hanukkah and its lights.",
      },
      {
        title: "🕎 vs 🕯️",
        body: "[🕯️](/emoji/candle/) is any candle — vigils, prayer, or cozy light. 🕎 is the Hanukkah candelabrum.",
      },
      {
        title: "Saying Happy Hanukkah",
        body: "“Happy Hanukkah 🕎” is always fine to send to someone who celebrates. “Chag sameach” is the Hebrew “happy holiday.”",
      },
    ],
    searchIntents: [
      "menorah emoji meaning",
      "🕎 meaning",
      "hanukkah emoji",
      "happy hanukkah emoji",
      "menorah emoji copy and paste",
      "🕎 vs ✡️",
    ],
    whenNotToUse: [
      "Do not use 🕎 as generic winter decoration for people who do not celebrate Hanukkah.",
      "Avoid it in jokes or memes — it is a religious symbol.",
      "For Jewish identity outside Hanukkah, ✡️ is the clearer choice.",
    ],
    faqs: [
      {
        question: "What does the menorah emoji mean?",
        answer: "🕎 means Hanukkah, the eight-night Jewish Festival of Lights, and candle lighting with family.",
      },
      {
        question: "How many candles are on the 🕎 emoji?",
        answer: "Usually nine: eight for the nights of Hanukkah and the shamash used to light them.",
      },
      {
        question: "Is 🕎 a Christmas emoji?",
        answer: "No. It is the Hanukkah menorah. Use it for Hanukkah greetings, not as a Christmas decoration.",
      },
      {
        question: "What emojis go with 🕎?",
        answer: "✨ for light, 💙🤍 for holiday colors, 🥔 for latkes, 🍩 for sufganiyot.",
      },
      {
        question: "How do I copy 🕎?",
        answer: "Tap 🕎 at the top of this page to copy it.",
      },
    ],
  },

  "wrapped-gift": {
    batchId: BATCH_ID,
    searchTitle: "Gift Emoji Meaning (🎁): Presents, Birthdays, Christmas & Surprises",
    snippetAnswer:
      "🎁 Wrapped Gift means a present, a surprise, or a celebration. People send it for birthdays, Christmas, gift ideas, giveaways, and “I have something for you.”",
    detailedParagraphs: [
      "Wrapped Gift (🎁) shows a box tied with a ribbon. It is the universal “present” emoji and works for any occasion where something is given: birthdays, Christmas, anniversaries, baby showers, and thank-you surprises.",
      "In birthday messages, 🎁 sits next to 🎂 and 🎉 as the classic trio. “Happy birthday 🎂🎁” is one of the most-sent emoji lines in the world.",
      "December turns 🎁 into the Christmas shopping emoji. Wish lists, gift guides, Secret Santa, and “just finished wrapping” photos all lean on it; see our [gift emoji guide](/blog/gift-emoji-meaning/) for seasonal combos.",
      "🎁 also means surprise and teasing. “I have something for you 🎁” builds anticipation, and creators use it for giveaways and launches: “🎁 GIVEAWAY” signals a free prize.",
      "Figuratively, people call good things gifts: “This song is a gift 🎁” or “You’re a gift.” It reads warm and appreciative. In scam messages 🎁 is often used to bait clicks, so be cautious with unknown senders.",
    ],
    textingMeaning:
      "Send 🎁 for birthdays, Christmas, gift ideas, or to tease a surprise. It is upbeat and generous.",
    socialMeaning:
      "Giveaways, unboxing videos, gift guides, and holiday sales use 🎁. In comments it can mean “this is a gift” — a compliment for great content.",
    caution:
      "“You won a gift 🎁 — click here” from an unknown number is a classic scam pattern. Do not click links from strangers using 🎁.",
    examples: [
      { context: "Birthday", text: "Happy birthday! 🎂🎁🎉" },
      { context: "Christmas", text: "All wrapped and under the tree 🎁🎄" },
      { context: "Surprise", text: "I have something for you 🎁" },
      { context: "Giveaway", text: "🎁 GIVEAWAY — comment to enter" },
      { context: "Wish list", text: "Sending you my gift list 🎁" },
      { context: "Thank you", text: "Thank you for the gift, I love it 🎁❤️" },
      { context: "Compliment", text: "This album is a gift 🎁" },
      { context: "Secret Santa", text: "Gift budget $30 🎁🎅" },
    ],
    contextBlocks: [
      {
        title: "🎁 vs 🎀",
        body: "🎀 Ribbon is a bow — cute, girly, or aesthetic. 🎁 is the full present. Use 🎁 when an actual gift is involved.",
      },
      {
        title: "🎁 at Christmas",
        body: "Pair with [🎄](/emoji/christmas-tree/) and [🎅](/emoji/santa-claus/) for family Christmas, gift exchanges, and wrapping posts.",
      },
      {
        title: "🎁 in giveaways",
        body: "Brands and creators use 🎁 to mean free prizes. Real giveaways explain rules; vague “claim your 🎁” DMs are usually scams.",
      },
      {
        title: "“You’re a gift 🎁”",
        body: "A sincere compliment: the person or thing is valuable and appreciated.",
      },
    ],
    searchIntents: [
      "gift emoji meaning",
      "🎁 meaning in texting",
      "present emoji",
      "birthday gift emoji",
      "christmas gift emoji",
      "gift emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid 🎁 in messages that ask someone for money or gifts — it can feel pushy.",
      "Do not trust 🎁 “prize” messages from unknown senders.",
      "Skip it in condolence messages.",
    ],
    faqs: [
      {
        question: "What does the gift emoji mean?",
        answer: "🎁 means a present or surprise — birthdays, Christmas, giveaways, and “I have something for you.”",
      },
      {
        question: "What does 🎁 mean from a girl or guy?",
        answer: "Usually a surprise or a gift on the way. In a flirty chat it can tease something special.",
      },
      {
        question: "What does 🎁🎄 mean?",
        answer: "Christmas presents — wrapping, gift exchanges, or gifts under the tree.",
      },
      {
        question: "Is 🎁 used in scams?",
        answer: "Often. “You won a 🎁, click here” from strangers is a common phishing pattern. Ignore it.",
      },
      {
        question: "What emojis go with 🎁?",
        answer: "🎂🎉 for birthdays, 🎄🎅 for Christmas, ❤️ for thank-yous, 👀 for teasing a surprise.",
      },
      {
        question: "How do I copy 🎁?",
        answer: "Tap 🎁 at the top of this page to copy it.",
      },
    ],
  },

  fireworks: {
    batchId: BATCH_ID,
    searchTitle: "Fireworks Emoji Meaning (🎆): New Year, Celebrations & Big Wins",
    snippetAnswer:
      "🎆 Fireworks means a big celebration — New Year’s Eve, July 4th, festivals, and huge personal wins. It is the emoji for “this deserves a show.”",
    detailedParagraphs: [
      "Fireworks (🎆) shows colorful bursts against a night sky. It is the peak-celebration emoji: louder than 🎉, more dramatic than ✨. People send it when an event is big enough to light up the sky.",
      "New Year’s Eve is its biggest moment. “Happy New Year 🎆🥂” floods chats at midnight in every time zone, and countdown posts stack 🎆🎇🎉. See [New Year emoji meanings](/blog/new-year-emoji-meanings/) for full combos.",
      "National holidays come next: the Fourth of July in the US, Bonfire Night in the UK, Diwali, Lunar New Year, and city festivals. In those posts 🎆 means the literal show and the shared celebration.",
      "Figuratively, 🎆 marks huge wins: a job offer, a graduation, an engagement, a team championship. “Got the job 🎆” is stronger than “Got the job 🎉” — it signals a once-a-year level moment.",
      "[🎇 Sparkler](/emoji/sparkler/) is the smaller cousin — handheld sparkle, cozy and personal. For more, read our [fireworks emoji guide](/blog/fireworks-emoji-meaning/).",
    ],
    textingMeaning:
      "Send 🎆 for New Year, national holidays, or big news worth celebrating loudly. It is joyful and high-energy.",
    socialMeaning:
      "Midnight New Year reels, July 4th shows, festival videos, and milestone announcements use 🎆. In comments it is a loud congratulations.",
    caution:
      "Fireworks can upset people with PTSD and pets. In messages about those topics, or about real explosions and war, avoid 🎆.",
    examples: [
      { context: "New Year", text: "Happy New Year!! 🎆🥂" },
      { context: "Countdown", text: "10 minutes to midnight 🎆🎇" },
      { context: "July 4th", text: "Best view of the fireworks 🎆🇺🇸" },
      { context: "Big win", text: "We got the house!! 🎆" },
      { context: "Graduation", text: "Officially graduated 🎆🎓" },
      { context: "Festival", text: "Diwali lights and fireworks tonight 🎆🪔" },
      { context: "Engagement", text: "She said yes 🎆💍" },
      { context: "Sports", text: "CHAMPIONS 🎆🏆" },
    ],
    contextBlocks: [
      {
        title: "🎆 vs 🎇",
        body: "🎆 is a sky full of fireworks; [🎇](/emoji/sparkler/) is a handheld sparkler. 🎆 = big public celebration, 🎇 = small personal sparkle.",
      },
      {
        title: "🎆 vs 🎉",
        body: "[🎉](/emoji/party-popper/) is everyday congrats and party energy. 🎆 is bigger — New Year, national holidays, life milestones.",
      },
      {
        title: "🎆 at New Year",
        body: "Pair with [🥂](/emoji/clinking-glasses/) and [🍾](/emoji/bottle-with-popping-cork/) for midnight toasts. 🎆🎇🎉 is the classic countdown stack.",
      },
      {
        title: "Sensitive contexts",
        body: "Skip 🎆 in posts about pets scared by fireworks, veterans with PTSD, or real explosions.",
      },
    ],
    searchIntents: [
      "fireworks emoji meaning",
      "🎆 meaning",
      "new year emoji",
      "🎆 vs 🎇",
      "fourth of july emoji",
      "fireworks emoji copy and paste",
    ],
    whenNotToUse: [
      "Avoid 🎆 in news about explosions, war, or accidents.",
      "Skip it in posts about pets or people distressed by fireworks.",
      "For small wins, 🎉 or 👏 fits better than a full fireworks show.",
    ],
    faqs: [
      {
        question: "What does the fireworks emoji mean?",
        answer: "🎆 means a big celebration — New Year, national holidays, festivals, or a major personal win.",
      },
      {
        question: "What is the difference between 🎆 and 🎇?",
        answer: "🎆 is a fireworks display in the sky; 🎇 is a handheld sparkler. 🎆 feels bigger and more public.",
      },
      {
        question: "What emojis go with 🎆 for New Year?",
        answer: "🥂🍾 for the toast, 🎇🎉 for the countdown, ✨ for the new-year glow.",
      },
      {
        question: "Can I use 🎆 for good news?",
        answer: "Yes. “Got the job 🎆” or “We’re engaged 🎆” shows once-a-year excitement.",
      },
      {
        question: "How do I copy 🎆?",
        answer: "Tap 🎆 at the top of this page to copy it.",
      },
    ],
  },
};
