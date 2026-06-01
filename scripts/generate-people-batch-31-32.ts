/**
 * Generator for batch 31 (100) + batch 32 (8) People base slugs.
 * Run: npx tsx scripts/generate-people-batch-31-32.ts
 */
import { writeFileSync } from "fs";
import { emojis } from "../src/data/emojis";
import type { EmojiBatchEnrichment } from "../src/data/emojiEditorialBatches/types";

const BATCH31_ID = "31-people-body-base-100";
const BATCH32_ID = "32-people-body-base-complete";

const BATCH31_SLUGS = [
  "man-beard", "woman-beard", "man-red-hair", "man-curly-hair", "man-white-hair", "man-bald",
  "woman-red-hair", "woman-curly-hair", "woman-white-hair", "woman-bald", "woman-blond-hair", "man-blond-hair",
  "man-frowning", "woman-frowning", "man-pouting", "woman-pouting",
  "man-wearing-turban", "woman-wearing-turban", "man-in-tuxedo", "woman-in-tuxedo", "man-with-veil", "woman-with-veil",
  "man-superhero", "woman-superhero", "man-supervillain", "woman-supervillain", "man-mage", "woman-mage",
  "man-fairy", "woman-fairy", "man-vampire", "woman-vampire", "man-elf", "woman-elf", "man-genie", "woman-genie",
  "man-zombie", "woman-zombie",
  "man-getting-massage", "woman-getting-massage", "man-getting-haircut", "woman-getting-haircut",
  "man-walking", "woman-walking", "person-walking-facing-right", "woman-walking-facing-right", "man-walking-facing-right",
  "man-standing", "woman-standing",
  "man-kneeling", "woman-kneeling", "person-kneeling-facing-right", "woman-kneeling-facing-right", "man-kneeling-facing-right",
  "person-with-white-cane-facing-right", "man-with-white-cane", "man-with-white-cane-facing-right", "woman-with-white-cane", "woman-with-white-cane-facing-right",
  "person-in-motorized-wheelchair-facing-right", "man-in-motorized-wheelchair", "man-in-motorized-wheelchair-facing-right", "woman-in-motorized-wheelchair", "woman-in-motorized-wheelchair-facing-right",
  "person-in-manual-wheelchair-facing-right", "man-in-manual-wheelchair", "man-in-manual-wheelchair-facing-right", "woman-in-manual-wheelchair", "woman-in-manual-wheelchair-facing-right",
  "man-running", "woman-running", "person-running-facing-right", "woman-running-facing-right", "man-running-facing-right",
  "woman-dancing", "man-dancing", "men-with-bunny-ears", "women-with-bunny-ears",
  "man-in-steamy-room", "woman-in-steamy-room", "man-climbing", "woman-climbing",
  "man-golfing", "woman-golfing", "man-surfing", "woman-surfing", "man-rowing-boat", "woman-rowing-boat",
  "man-swimming", "woman-swimming", "man-bouncing-ball", "woman-bouncing-ball",
  "man-lifting-weights", "woman-lifting-weights", "man-biking", "woman-biking",
  "man-mountain-biking", "woman-mountain-biking", "man-cartwheeling", "woman-cartwheeling",
];

const BATCH32_SLUGS = [
  "men-wrestling", "women-wrestling", "man-playing-water-polo", "woman-playing-water-polo",
  "man-playing-handball", "woman-playing-handball", "man-juggling", "woman-juggling",
];

type Spec = Omit<EmojiBatchEnrichment, "batchId">;

const humanize = (slug: string) =>
  slug.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");

const parseGender = (slug: string) => {
  if (slug.startsWith("man-")) return { gender: "man" as const, rest: slug.slice(4) };
  if (slug.startsWith("woman-")) return { gender: "woman" as const, rest: slug.slice(6) };
  if (slug.startsWith("men-")) return { gender: "men" as const, rest: slug.slice(4) };
  if (slug.startsWith("women-")) return { gender: "women" as const, rest: slug.slice(6) };
  return { gender: "neutral" as const, rest: slug };
};

const pairSpec = (
  slug: string,
  u: string,
  name: string,
  topic: string,
  snippet: string,
  texting: string,
  social: string,
  caution: string,
  examples: Spec["examples"],
  blocks: Spec["contextBlocks"],
  intents: string[],
  avoid: string[],
  faqs: Spec["faqs"],
): Spec => ({
  searchTitle: `${name} Emoji (${u}) Meaning: ${topic}`,
  snippetAnswer: snippet,
  detailedParagraphs: [
    `${name} (${u}) shows ${parseGender(slug).gender !== "neutral" ? `${parseGender(slug).gender}-presenting ` : ""}figure — ${topic.toLowerCase()}.`,
    `Gender variant shares core meaning with neutral/pair forms — presentation explicit in emoji choice.`,
    `Common in ${social.split(" tag ")[0] || "representation and activity"} contexts.`,
  ],
  textingMeaning: texting,
  socialMeaning: social,
  caution,
  examples: examples ?? [],
  contextBlocks: blocks ?? [],
  searchIntents: intents,
  whenNotToUse: avoid,
  faqs: faqs ?? [],
});

const buildSpec = (slug: string): Spec => {
  const emoji = emojis.find((e) => e.slug === slug)!;
  const u = emoji.unicode;
  const name = emoji.name;
  const { gender, rest } = parseGender(slug);
  const g = gender === "man" ? "Man" : gender === "woman" ? "Woman" : gender === "men" ? "Men" : gender === "women" ? "Women" : "Person";
  const gl = gender === "neutral" ? "person" : gender;

  if (slug.includes("facing-right")) {
    const base = slug.replace(/-facing-right$/, "").replace(/^(man|woman)-/, "person-");
    return pairSpec(
      slug, u, name, "Direction Variant",
      `${u} ${name} faces right — same meaning as ${humanize(base)}; Unicode mirror for layout, not new semantics.`,
      `Same as ${base} ${u}.`,
      "Platform layout and bidirectional text — not a separate meme.",
      "Don't invent meaning from facing direction.",
      [{ context: "Variant", text: `Same as base ${u}` }, { context: "Layout", text: `Right ${u}` }, { context: "UI", text: `Mirror ${u}` }, { context: "Walk", text: `Heading ${u}` }, { context: "Note", text: `Direction ${u}` }],
      [{ title: "Facing right", body: "Visual mirror — meaning unchanged." }, { title: "Base", body: `See ${base} for full meaning.` }, { title: "Unicode", body: "Bidirectional emoji variant." }],
      [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`],
      ["Over-interpreting direction."],
      [{ question: `What does ${u} mean?`, answer: `Same as ${base} — facing-right variant.` }],
    );
  }

  const hairTypes: Record<string, { topic: string; snippet: string; social: string }> = {
    "red-hair": { topic: "Red Hair, Ginger", snippet: `${u} ${g} red hair — ginger pride, dye, cosplay wig, fair-skin SPF meme.`, social: "Redhead community, salon dye, St. Patrick's aesthetic" },
    "curly-hair": { topic: "Curly Hair, Curls", snippet: `${u} ${g} curly hair — wash day, curl routine, natural texture pride.`, social: "Curly hair TikTok, deva cut, humidity frizz humor" },
    "white-hair": { topic: "White Hair, Silver", snippet: `${u} ${g} white/gray hair — silver fox, aging gracefully, platinum dye.`, social: "Silver hair trend, wisdom meme, graceful aging" },
    bald: { topic: "Bald, Shaved Head", snippet: `${u} ${g} bald — buzz cut, alopecia solidarity, bald pride.`, social: "Shave head charity, bald confidence, chemo empathy" },
    "blond-hair": { topic: "Blond Hair", snippet: `${u} ${g} blond hair — salon highlights, surfer aesthetic, hair color.`, social: "Balayage reveals, beach blond, hair transformation" },
  };
  if (rest in hairTypes) {
    const h = hairTypes[rest];
    return pairSpec(slug, u, name, h.topic, h.snippet, `'${rest.replace(/-/g, " ")} ${u}'`, `${h.social} tag ${u}.`, "Avoid hair color stereotypes and slurs.", [{ context: "Hair", text: `${u}` }, { context: "Salon", text: `New ${u}` }, { context: "Natural", text: `Born ${u}` }, { context: "Pride", text: `Love ${u}` }, { context: "Style", text: `Look ${u}` }], [{ title: "Hair color", body: `${rest} variant — ${gl} presentation.` }, { title: "Vs neutral", body: `See person-${rest} for neutral base.` }, { title: "Representation", body: "Hair diversity in emoji keyboard." }], [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`], ["Mocking natural hair.", "Regional slurs for red hair."], [{ question: `What does ${u} mean?`, answer: h.snippet.split("—")[0].trim() }]);
  }

  if (rest === "beard") {
    return pairSpec(slug, u, name, gender === "woman" ? "Bearded Woman" : "Beard, Facial Hair", gender === "woman" ? `${u} bearded woman — inclusive representation; never mock.` : `${u} man beard — Movember, barber, grooming.`, `'Beard ${u}'`, gender === "woman" ? "Body positivity and hirsutism awareness" : "Movember and beard culture", gender === "woman" ? "NEVER mock — PCOS/medical hair." : "Not masculinity gatekeeping.", [{ context: "Grooming", text: `${u}` }, { context: "Month", text: `Nov ${u}` }, { context: "Barber", text: `Trim ${u}` }, { context: "Pride", text: `${u}` }, { context: "Natural", text: `Me ${u}` }], [{ title: "Facial hair", body: gender === "woman" ? "Inclusive visibility" : "Male-presenting beard" }, { title: "Vs 🧔", body: "Neutral bearded person base." }], [`${slug} emoji`, `${u} meaning`], ["Mockery."], [{ question: `What does ${u} mean?`, answer: `${name} — facial hair representation.` }]);
  }

  const gestures: Record<string, { topic: string; snippet: string }> = {
    frowning: { topic: "Frowning, Displeasure", snippet: `${u} ${g} frowning — disapproval, bad news reaction, disappointed face.` },
    pouting: { topic: "Pouting, Sulk", snippet: `${u} ${g} pouting — sulk, petty mood, cute anger meme.` },
  };
  if (rest in gestures) {
    const g2 = gestures[rest];
    return pairSpec(slug, u, name, g2.topic, g2.snippet, `'Mood ${u}'`, "Reaction posts and meme replies", "Context defines severity — not always serious anger.", [{ context: "Mood", text: `${u}` }, { context: "News", text: `Ugh ${u}` }, { context: "Sulk", text: `Fine ${u}` }, { context: "React", text: `${u}` }, { context: "Disapprove", text: `Nope ${u}` }], [{ title: "Gesture", body: g2.topic }, { title: "Vs person-*", body: `See person-${rest} neutral form.` }], [`${slug} emoji`, `${u} meaning`], ["Mocking someone's valid upset."], [{ question: `What does ${u} mean?`, answer: g2.snippet }]);
  }

  const fantasy: Record<string, { topic: string; snippet: string; social: string }> = {
    superhero: { topic: "Superhero, Hero", snippet: `${u} ${g} superhero — Marvel energy, hero arc, cosplay, save the day.`, social: "MCU hype, Halloween hero costumes" },
    supervillain: { topic: "Supervillain, Villain Arc", snippet: `${u} ${g} supervillain — chaos meme, villain arc, antagonist cosplay.`, social: "Villain arc TikTok, comic con" },
    mage: { topic: "Mage, Wizard", snippet: `${u} ${g} mage — D&D wizard, Harry Potter, spellcaster RPG.`, social: "TTRPG and fantasy fandom" },
    fairy: { topic: "Fairy, Fantasy", snippet: `${u} ${g} fairy — wings aesthetic, enchanted forest, fantasy romance.`, social: "Fantasy booktok and cosplay" },
    vampire: { topic: "Vampire, Halloween", snippet: `${u} ${g} vampire — Halloween, goth aesthetic, Twilight era nostalgia.`, social: "Spooky season and goth culture" },
    elf: { topic: "Elf, Christmas Fantasy", snippet: `${u} ${g} elf — Christmas helper, LOTR, pointy ears cosplay.`, social: "Holiday and fantasy RPG" },
    genie: { topic: "Genie, Wishes", snippet: `${u} ${g} genie — Aladdin, three wishes joke, lamp magic.`, social: "Disney and wish-granting memes" },
    zombie: { topic: "Zombie, Undead", snippet: `${u} ${g} zombie — Halloween, exhaustion zombie mode, horror.`, social: "Horror fandom and tired Monday memes" },
  };
  if (rest in fantasy) {
    const f = fantasy[rest];
    return pairSpec(slug, u, name, f.topic, f.snippet, `'${rest} ${u}'`, `${f.social} tag ${u}.`, "'Villain arc' jokes trivialize real harm — read room.", [{ context: "Cosplay", text: `${u}` }, { context: "Meme", text: `Arc ${u}` }, { context: "Halloween", text: `${u}` }, { context: "Fandom", text: `${u}` }, { context: "Fantasy", text: `${u}` }], [{ title: "Fantasy role", body: f.topic }, { title: "Vs neutral", body: `See ${rest} for gender-neutral base.` }], [`${slug} emoji`, `${u} meaning`], ["Mocking cosplayers."], [{ question: `What does ${u} mean?`, answer: f.snippet }]);
  }

  const sports: Record<string, { topic: string; snippet: string }> = {
    golfing: { topic: "Golf, Tee Time", snippet: `${u} ${g} golfing — tee time, PGA, golf clap sarcasm.` },
    surfing: { topic: "Surf, Waves", snippet: `${u} ${g} surfing — barrel, beach lifestyle, surf trip.` },
    "rowing-boat": { topic: "Rowing, Crew", snippet: `${u} ${g} rowing — crew team, kayak, lake paddle.` },
    swimming: { topic: "Swimming, Pool", snippet: `${u} ${g} swimming — laps, pool day, triathlon swim leg.` },
    "bouncing-ball": { topic: "Basketball, Dribble", snippet: `${u} ${g} bouncing ball — hoops, pickup game, NBA playoffs.` },
    "lifting-weights": { topic: "Weightlifting, Gym", snippet: `${u} ${g} lifting weights — gym PR, leg day, strength training.` },
    biking: { topic: "Cycling, Bike", snippet: `${u} ${g} biking — road ride, commute cycle, Peloton culture.` },
    "mountain-biking": { topic: "Mountain Biking, MTB", snippet: `${u} ${g} mountain biking — trail, downhill, MTB culture.` },
    cartwheeling: { topic: "Cartwheel, Gymnastics", snippet: `${u} ${g} cartwheeling — gymnastics, playful energy, cheer.` },
    "playing-water-polo": { topic: "Water Polo", snippet: `${u} ${g} water polo — pool sport, Olympics niche.` },
    "playing-handball": { topic: "Handball, Team Sport", snippet: `${u} ${g} handball — European team sport, court throw.` },
    juggling: { topic: "Juggling, Multitask", snippet: `${u} ${g} juggling — circus skill, juggling tasks metaphor.` },
  };
  if (rest in sports) {
    const s = sports[rest];
    return pairSpec(slug, u, name, s.topic, s.snippet, `'${rest.split("-").pop()} ${u}'`, `${s.topic} posts and sports Twitter`, "Don't mock athletes or beginners.", [{ context: "Sport", text: `${u}` }, { context: "Gym", text: `PR ${u}` }, { context: "Game", text: `${u}` }, { context: "Train", text: `${u}` }, { context: "Team", text: `${u}` }], [{ title: "Sport", body: s.topic }, { title: "Gender pair", body: `Same sport — ${gl} variant.` }], [`${slug} emoji`, `${u} meaning`], ["Trash talk escalation."], [{ question: `What does ${u} mean?`, answer: s.snippet }]);
  }

  const activities: Record<string, { topic: string; snippet: string }> = {
    "getting-massage": { topic: "Massage, Spa", snippet: `${u} ${g} getting massage — spa day, tension relief, self-care.` },
    "getting-haircut": { topic: "Haircut, Salon", snippet: `${u} ${g} getting haircut — fresh cut, bangs regret, barber.` },
    walking: { topic: "Walking, Steps", snippet: `${u} ${g} walking — commute, 10k steps, mindful walk.` },
    standing: { topic: "Standing, Waiting", snippet: `${u} ${g} standing — waiting in line, idle NPC meme.` },
    kneeling: { topic: "Kneeling, Proposal", snippet: `${u} ${g} kneeling — proposal, prayer, protest kneel.` },
    running: { topic: "Running, Marathon", snippet: `${u} ${g} running — marathon, late for work, cardio.` },
    dancing: { topic: "Dancing, Party", snippet: `${u} ${g} dancing — party, wedding reception, dance class.` },
    "in-steamy-room": { topic: "Sauna, Steam", snippet: `${u} ${g} in steamy room — sauna, onsen, spa steam.` },
    climbing: { topic: "Climbing, Bouldering", snippet: `${u} ${g} climbing — rock gym, crag day, send it.` },
  };
  if (rest in activities) {
    const a = activities[rest];
    return pairSpec(slug, u, name, a.topic, a.snippet, `'${rest.replace(/-/g, " ")} ${u}'`, `${a.topic} content and fitness posts`, rest === "kneeling" ? "Protest kneel carries political weight." : "Keep context clear.", [{ context: "Activity", text: `${u}` }, { context: "Today", text: `${u}` }, { context: "Weekend", text: `${u}` }, { context: "Goals", text: `${u}` }, { context: "Vibes", text: `${u}` }], [{ title: "Activity", body: a.topic }, { title: "Vs person-*", body: `See person-${rest} neutral.` }], [`${slug} emoji`, `${u} meaning`], ["Mocking disability when activity inappropriate."], [{ question: `What does ${u} mean?`, answer: a.snippet }]);
  }

  if (rest === "wearing-turban") {
    return pairSpec(slug, u, name, "Turban, Cultural Headwear", `${u} ${g} wearing turban — Sikh/cultural headwear; use respectfully, not costume.`, `'Turban ${u}'`, "Cultural and religious representation", "Sacred for Sikhs — learn before posting.", [{ context: "Culture", text: `${u}` }, { context: "Respect", text: `${u}` }, { context: "Heritage", text: `${u}` }, { context: "Vaisakhi", text: `${u}` }, { context: "Learn", text: `${u}` }], [{ title: "Turban", body: "Religious/cultural weight" }, { title: "Vs 👳 person-*", body: "Neutral turban form." }], [`${slug} emoji`, `${u} meaning`], ["Costume mockery.", "Stereotyping."], [{ question: `What does ${u} mean?`, answer: "Turban headwear — respectful cultural/religious use." }]);
  }
  if (rest === "in-tuxedo") {
    return pairSpec(slug, u, name, "Tuxedo, Formal", `${u} ${g} in tuxedo — black tie, wedding, prom formal wear.`, `'Formal ${u}'`, "Wedding and gala content", "Formal wear not gender-exclusive.", [{ context: "Wedding", text: `${u}` }, { context: "Prom", text: `${u}` }, { context: "Gala", text: `${u}` }, { context: "Black tie", text: `${u}` }, { context: "Suited", text: `${u}` }], [{ title: "Formal", body: "Tuxedo event" }, { title: "Vs 🤵 person-*", body: "Neutral tux form." }], [`${slug} emoji`, `${u} meaning`], ["Gender gatekeeping formal wear."], [{ question: `What does ${u} mean?`, answer: "Formal tuxedo — wedding, prom, black tie." }]);
  }
  if (rest === "with-veil") {
    return pairSpec(slug, u, name, "Veil, Bridal", `${u} ${g} with veil — bride, wedding veil, marriage celebration.`, `'Bride ${u}'`, "Bridal and wedding content", "Not all weddings use veils.", [{ context: "Wedding", text: `${u}` }, { context: "Bride", text: `${u}` }, { context: "Engaged", text: `${u}` }, { context: "Shower", text: `${u}` }, { context: "Love", text: `${u}` }], [{ title: "Bridal", body: "Wedding veil" }, { title: "Vs 👰 person-*", body: "Neutral veil form." }], [`${slug} emoji`, `${u} meaning`], ["Marriage pressure narratives."], [{ question: `What does ${u} mean?`, answer: "Person with wedding veil — bridal posts." }]);
  }

  if (rest.includes("white-cane")) {
    return pairSpec(slug, u, name, "White Cane, Blind Mobility", `${u} ${g} with white cane — blind/low-vision mobility; don't grab cane without permission.`, `'Cane ${u}'`, "Accessibility and blind community advocacy", "Represent respectfully — never mock blindness.", [{ context: "Access", text: `${u}` }, { context: "Mobility", text: `${u}` }, { context: "Awareness", text: `${u}` }, { context: "Travel", text: `${u}` }, { context: "Respect", text: `${u}` }], [{ title: "White cane", body: "Independence device" }, { title: "Vs 🧑‍🦯", body: "Neutral cane user." }], [`${slug} emoji`, `${u} meaning`], ["Blindness jokes.", "Touching someone's cane."], [{ question: `What does ${u} mean?`, answer: "White cane user — blind/low-vision mobility." }]);
  }
  if (rest.includes("motorized-wheelchair")) {
    return pairSpec(slug, u, name, "Power Wheelchair", `${u} ${g} in motorized wheelchair — power chair user, accessibility, ramp access.`, `'Power chair ${u}'`, "Disability rights and accessible travel", "Wheelchair ≠ tragedy — respect users.", [{ context: "Access", text: `${u}` }, { context: "Ramp", text: `${u}` }, { context: "Travel", text: `${u}` }, { context: "Rights", text: `${u}` }, { context: "Life", text: `${u}` }], [{ title: "Power chair", body: "Motorized mobility" }, { title: "Vs 🧑‍🦼", body: "Neutral form." }], [`${slug} emoji`, `${u} meaning`], ["Inspiration porn."], [{ question: `What does ${u} mean?`, answer: "Person in motorized wheelchair — accessibility." }]);
  }
  if (rest.includes("manual-wheelchair")) {
    return pairSpec(slug, u, name, "Manual Wheelchair", `${u} ${g} in manual wheelchair — para sports, disability pride, step-free access.`, `'Wheelchair ${u}'`, "Paralympics and accessibility advocacy", "Don't pity wheelchair users.", [{ context: "Para", text: `${u}` }, { context: "Access", text: `${u}` }, { context: "Pride", text: `${u}` }, { context: "Daily", text: `${u}` }, { context: "Sports", text: `${u}` }], [{ title: "Manual chair", body: "Self-propelled mobility" }, { title: "Vs 🧑‍🦽", body: "Neutral form." }], [`${slug} emoji`, `${u} meaning`], ["Wheelchair bound pity language."], [{ question: `What does ${u} mean?`, answer: "Manual wheelchair user — mobility and para sports." }]);
  }

  if (slug === "men-with-bunny-ears" || slug === "women-with-bunny-ears") {
    return pairSpec(slug, u, name, "Bunny Ears Party Duo", `${u} two ${gender} with bunny ears — matching party duo, Halloween pair, bestie costume.`, `'Party duo ${u}'`, "Coordinated costume and festival bestie posts", "Playboy association varies by audience.", [{ context: "Halloween", text: `${u}` }, { context: "Matching", text: `${u}` }, { context: "Party", text: `${u}` }, { context: "Besties", text: `${u}` }, { context: "Duo", text: `${u}` }], [{ title: "Duo", body: "Two people bunny ears" }, { title: "Vs 👯", body: "Neutral people bunny ears." }], [`${slug} emoji`, `${u} meaning`], ["Sexualizing without consent."], [{ question: `What does ${u} mean?`, answer: "Party duo with bunny ear headbands." }]);
  }

  if (slug === "men-wrestling" || slug === "women-wrestling") {
    return pairSpec(slug, u, name, "Wrestling, Grapple", `${u} ${gender} wrestling — mat sport, WWE fandom, debate heat metaphor.`, `'Wrestling ${u}'`, "Wrestling meets and WWE live tweets", "WWE scripted vs Olympic sport — know audience.", [{ context: "Mat", text: `${u}` }, { context: "WWE", text: `${u}` }, { context: "Sport", text: `${u}` }, { context: "Debate", text: `${u}` }, { context: "Pin", text: `${u}` }], [{ title: "Wrestling", body: "Grappling sport" }, { title: "Vs 🤼", body: "Neutral people wrestling." }], [`${slug} emoji`, `${u} meaning`], ["Encouraging real violence."], [{ question: `What does ${u} mean?`, answer: "People wrestling — sport or WWE fandom." }]);
  }

  return pairSpec(
    slug, u, name, humanize(rest),
    `${u} ${name} — ${humanize(rest)} in digital communication; see related neutral forms for full context.`,
    `'${humanize(rest)} ${u}'`,
    "Representation and activity posts",
    "Use with appropriate context.",
    [{ context: "Chat", text: `${u}` }, { context: "Post", text: `${u}` }, { context: "React", text: `${u}` }, { context: "Today", text: `${u}` }, { context: "Me", text: `${u}` }],
    [{ title: "Variant", body: humanize(rest) }, { title: "Context", body: "Pair with message for clarity." }],
    [`${slug.replace(/-/g, " ")} emoji`, `${u} meaning`],
    ["Vague use without context."],
    [{ question: `What does ${u} mean?`, answer: `${name} — see related person-* base slugs.` }],
  );
};

const serializeEntry = (slug: string, entry: EmojiBatchEnrichment): string => {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const lines: string[] = [];
  lines.push(`  "${slug}": {`);
  lines.push(`    batchId: BATCH_ID,`);
  lines.push(`    searchTitle: "${esc(entry.searchTitle!)}",`);
  lines.push(`    snippetAnswer:`);
  lines.push(`      "${esc(entry.snippetAnswer!)}",`);
  lines.push(`    detailedParagraphs: [`);
  for (const p of entry.detailedParagraphs ?? []) lines.push(`      "${esc(p)}",`);
  lines.push(`    ],`);
  lines.push(`    textingMeaning: "${esc(entry.textingMeaning!)}",`);
  lines.push(`    socialMeaning: "${esc(entry.socialMeaning!)}",`);
  lines.push(`    caution: "${esc(entry.caution!)}",`);
  lines.push(`    examples: [`);
  for (const ex of entry.examples ?? []) lines.push(`      { context: "${esc(ex.context)}", text: "${esc(ex.text)}" },`);
  lines.push(`    ],`);
  lines.push(`    contextBlocks: [`);
  for (const b of entry.contextBlocks ?? []) lines.push(`      { title: "${esc(b.title)}", body: "${esc(b.body)}" },`);
  lines.push(`    ],`);
  lines.push(`    searchIntents: [${(entry.searchIntents ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`);
  lines.push(`    whenNotToUse: [${(entry.whenNotToUse ?? []).map((s) => `"${esc(s)}"`).join(", ")}],`);
  lines.push(`    faqs: [`);
  for (const f of entry.faqs ?? []) lines.push(`      { question: "${esc(f.question)}", answer: "${esc(f.answer)}" },`);
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join("\n");
};

const writeBatchFile = (filename: string, exportName: string, batchId: string, comment: string, slugs: string[]) => {
  const body = slugs
    .map((slug) => serializeEntry(slug, { batchId, ...buildSpec(slug) }))
    .join("\n\n");
  const content = `import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "${batchId}";

/** ${comment} */
export const ${exportName}: Record<string, EmojiBatchEnrichment> = {
${body}
};
`;
  writeFileSync(`src/data/emojiEditorialBatches/${filename}`, content);
  console.log(`Wrote ${filename} (${slugs.length} slugs, ${content.split("\n").length} lines)`);
};

writeBatchFile("batch31-people-body-base-100.ts", "batch31PeopleBodyBase100", BATCH31_ID, "Batch 31 — 100 remaining People base thin slugs (100-slug batch format).", BATCH31_SLUGS);
writeBatchFile("batch32-people-body-base-complete.ts", "batch32PeopleBodyBaseComplete", BATCH32_ID, "Batch 32 — final 8 People base thin slugs; base manual complete.", BATCH32_SLUGS);

console.log("Done.");
