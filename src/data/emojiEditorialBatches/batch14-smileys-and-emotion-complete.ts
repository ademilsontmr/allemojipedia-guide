import type { EmojiBatchEnrichment } from "./types";

const BATCH_ID = "14-smileys-and-emotion-complete";

export const batch14SmileysAndEmotionComplete: Record<string, EmojiBatchEnrichment> = {
  "face-without-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Face Without Mouth Emoji (😶) Meaning: Speechless, Blank, and Unsure",
    snippetAnswer:
      "😶 Face Without Mouth means speechless or emotionally blank. People use it for awkward silence, not knowing what to say, or intentionally holding back.",
    detailedParagraphs: [
      "Face Without Mouth (😶) removes the mouth entirely, which makes it feel like words have vanished. Unicode design makes it a quiet reaction instead of an emotional outburst.",
      "In texting, 😶 shows 'I saw that and I have no response' after awkward confessions, shocking updates, or strange group-chat drama.",
      "It can also mean self-censorship: you have thoughts but choose not to type them. That nuance makes 😶 useful in tense threads where a louder emoji would escalate things.",
    ],
    textingMeaning: "'I'm speechless 😶', 'I don't even know what to say 😶', or 'I'm staying quiet.'",
    socialMeaning: "Comment sections use 😶 as a silent reaction when posts are uncomfortable, absurd, or unexpectedly intense.",
    caution: "If someone needs active support, 😶 alone can feel detached. Add clear words of care.",
    examples: [
      { context: "Awkward", text: "You sent that to the whole team? 😶" },
      { context: "Speechless", text: "Well... I got nothing 😶" },
      { context: "Holding back", text: "I'm not commenting on that 😶" },
      { context: "Blank reaction", text: "That was... something 😶" },
      { context: "No words", text: "Just saw the update 😶" },
    ],
    contextBlocks: [
      { title: "Silent reaction", body: "😶 is the emoji version of long pause energy in chat." },
      { title: "Self-censoring", body: "People use 😶 when they are choosing restraint instead of argument." },
      { title: "Vs 😐", body: "😐 is neutral expression. 😶 feels more wordless and muted." },
    ],
    searchIntents: ["face without mouth emoji", "😶 meaning", "speechless emoji", "blank reaction emoji"],
    whenNotToUse: ["Avoid using only 😶 when someone shares grief or trauma.", "Do not use it to stonewall important relationship conversations."],
    faqs: [
      { question: "What does 😶 mean in texting?", answer: "Usually speechless silence, awkward pause, or choosing not to respond." },
      { question: "Is 😶 rude?", answer: "It can be if used to shut people down; with context it is just quiet surprise." },
    ],
  },

  "face-in-clouds": {
    batchId: BATCH_ID,
    searchTitle: "Face in Clouds Emoji (😶‍🌫️) Meaning: Foggy, Dissociated, and Out of It",
    snippetAnswer:
      "😶‍🌫️ Face in Clouds means feeling foggy, mentally checked out, or emotionally hazy. It often describes burnout, daydreaming, or post-chaos confusion.",
    detailedParagraphs: [
      "Face in Clouds (😶‍🌫️) blends a neutral face with cloud cover, creating a visual for unclear thoughts and low mental clarity.",
      "People send 😶‍🌫️ after long workdays, poor sleep, or overstimulating events to say, 'my brain is not fully online right now.'",
      "It can also signal dreamy detachment in aesthetic posts, but in private chat it more often means tiredness, overwhelm, or dissociation-lite mood.",
    ],
    textingMeaning: "'My brain is fog 😶‍🌫️', 'I am out of it today', or 'still processing.'",
    socialMeaning: "Used in burnout memes, late-night posts, and reflective captions about mental overload.",
    caution: "Do not treat repeated 😶‍🌫️ from a friend as just a joke if they seem genuinely unwell.",
    examples: [
      { context: "Brain fog", text: "No sleep and now I'm 😶‍🌫️" },
      { context: "Overwhelmed", text: "Too many tabs open in my head 😶‍🌫️" },
      { context: "Post-event", text: "After that meeting I'm just 😶‍🌫️" },
      { context: "Daydream", text: "Staring at the window like 😶‍🌫️" },
      { context: "Burnout", text: "End of quarter mode 😶‍🌫️" },
    ],
    contextBlocks: [
      { title: "Mental haze", body: "😶‍🌫️ captures blurred focus better than basic tired emojis." },
      { title: "Burnout shorthand", body: "Team chats use 😶‍🌫️ to name cognitive overload quickly." },
      { title: "Vs 😵‍💫", body: "😵‍💫 feels dizzy/spinning. 😶‍🌫️ feels cloudy and muted." },
    ],
    searchIntents: ["face in clouds emoji", "😶‍🌫️ meaning", "brain fog emoji", "out of it emoji"],
    whenNotToUse: ["Avoid replacing serious mental-health conversations with only 😶‍🌫️.", "Do not use it to dismiss someone else's confusion."],
    faqs: [
      { question: "What does 😶‍🌫️ mean?", answer: "Feeling mentally foggy, checked out, or emotionally hazy." },
      { question: "Is 😶‍🌫️ the same as dizzy?", answer: "Not exactly. It is more clouded than spinning." },
    ],
  },

  "face-exhaling": {
    batchId: BATCH_ID,
    searchTitle: "Face Exhaling Emoji (😮‍💨) Meaning: Relief, Exhaustion, and Letting Go",
    snippetAnswer:
      "😮‍💨 Face Exhaling means deep exhale: relief after stress, emotional release, or tired resignation. It is a 'finally' emoji.",
    detailedParagraphs: [
      "Face Exhaling (😮‍💨) combines open mouth with visible breath, making it ideal for post-pressure moments.",
      "People use 😮‍💨 when deadlines end, hard talks finish, or bad outcomes are accepted. The tone can be positive relief or weary surrender.",
      "In social use, it also marks emotional decompression: 'I held it together all day and now I can breathe.'",
    ],
    textingMeaning: "'Finally done 😮‍💨', 'that was a lot 😮‍💨', or 'I'm letting it go.'",
    socialMeaning: "Common in stress-recovery posts, update threads after exams, and post-drama reactions.",
    caution: "If someone's crisis is ongoing, 😮‍💨 may sound like you are done caring. Pair with supportive language.",
    examples: [
      { context: "Relief", text: "Presentation over 😮‍💨" },
      { context: "Resignation", text: "It is what it is 😮‍💨" },
      { context: "Release", text: "Had to vent and breathe 😮‍💨" },
      { context: "After stress", text: "Made the train by seconds 😮‍💨" },
      { context: "Closure", text: "Hard convo done 😮‍💨" },
    ],
    contextBlocks: [
      { title: "Pressure release", body: "😮‍💨 represents the physical moment after holding tension." },
      { title: "Mixed tone", body: "Can be relief or fatigue depending on surrounding text." },
      { title: "Vs 😌", body: "😌 is calm satisfaction. 😮‍💨 is active exhale after strain." },
    ],
    searchIntents: ["face exhaling emoji", "😮‍💨 meaning", "relief emoji", "deep breath emoji"],
    whenNotToUse: ["Avoid using it alone in urgent support conversations.", "Do not use it as a dismissive reaction to someone's pain."],
    faqs: [
      { question: "What does 😮‍💨 mean in texting?", answer: "Usually relief, emotional release, or tired acceptance." },
      { question: "Is 😮‍💨 positive or negative?", answer: "Both are possible; context decides if it is 'finally' or 'I give up' energy." },
    ],
  },

  "head-shaking-horizontally": {
    batchId: BATCH_ID,
    searchTitle: "Head Shaking Horizontally Emoji (🙂‍↔️) Meaning: No, Nope, and Disagree",
    snippetAnswer:
      "🙂‍↔️ Head Shaking Horizontally means 'no' or 'nope' in a soft tone. It rejects something without full anger.",
    detailedParagraphs: [
      "Head Shaking Horizontally (🙂‍↔️) is the emoji version of side-to-side head movement, translated into chat language.",
      "People send 🙂‍↔️ for gentle refusal: turning down plans, disagreeing politely, or rejecting bad ideas without confrontation.",
      "Because the base face is mild, it sounds less harsh than angry emojis and works well in casual boundaries.",
    ],
    textingMeaning: "'No thanks 🙂‍↔️', 'not happening 🙂‍↔️', or 'I disagree.'",
    socialMeaning: "Used in quick reaction chains where users want to signal 'no' without writing a full reply.",
    caution: "In serious discussions, emoji-only refusal may feel evasive; explain your reasoning.",
    examples: [
      { context: "Refusal", text: "Another 8am call? 🙂‍↔️" },
      { context: "Disagree", text: "I don't think that's right 🙂‍↔️" },
      { context: "Boundary", text: "Not comfortable with that 🙂‍↔️" },
      { context: "Nope", text: "Hard pass 🙂‍↔️" },
      { context: "Plan decline", text: "Can't make it tonight 🙂‍↔️" },
    ],
    contextBlocks: [
      { title: "Soft no", body: "🙂‍↔️ says no while keeping the tone non-hostile." },
      { title: "Boundary tool", body: "Great for clear, concise declines in everyday chats." },
      { title: "Vs 🙅", body: "🙅 is stronger and more performative. 🙂‍↔️ is subtler." },
    ],
    searchIntents: ["head shaking horizontally emoji", "🙂‍↔️ meaning", "nope emoji", "disagree emoji"],
    whenNotToUse: ["Avoid emoji-only replies in legal, medical, or high-stakes decisions.", "Do not use it to mock someone's vulnerable request."],
    faqs: [
      { question: "What does 🙂‍↔️ mean?", answer: "A polite no, disagreement, or refusal." },
      { question: "Is 🙂‍↔️ rude?", answer: "Usually no; it is a gentle rejection unless used sarcastically." },
    ],
  },

  "head-shaking-vertically": {
    batchId: BATCH_ID,
    searchTitle: "Head Shaking Vertically Emoji (🙂‍↕️) Meaning: Yes, Agree, and Affirm",
    snippetAnswer:
      "🙂‍↕️ Head Shaking Vertically means 'yes' or 'I agree.' It is a calm, friendly nod in emoji form.",
    detailedParagraphs: [
      "Head Shaking Vertically (🙂‍↕️) maps to the up-and-down nod used for agreement, approval, or acknowledgment.",
      "People use it to confirm plans, endorse suggestions, or signal they are listening and aligned in group chats.",
      "Its gentle expression keeps the tone cooperative, making it useful in both personal and team communication.",
    ],
    textingMeaning: "'Yep 🙂‍↕️', 'sounds good 🙂‍↕️', or 'I agree with that.'",
    socialMeaning: "Common in fast-paced threads where quick confirmation keeps conversation moving.",
    caution: "If details matter, add text beyond 🙂‍↕️ to avoid ambiguity.",
    examples: [
      { context: "Agreement", text: "That plan works 🙂‍↕️" },
      { context: "Confirmation", text: "7pm is good 🙂‍↕️" },
      { context: "Support", text: "Exactly what I was thinking 🙂‍↕️" },
      { context: "Acknowledge", text: "Read it and noted 🙂‍↕️" },
      { context: "Approval", text: "Go ahead with it 🙂‍↕️" },
    ],
    contextBlocks: [
      { title: "Digital nod", body: "🙂‍↕️ replaces 'yes' with warmer acknowledgment." },
      { title: "Low-friction reply", body: "Useful when you want to validate quickly without long text." },
      { title: "Vs 👍", body: "👍 is broader approval; 🙂‍↕️ feels more conversational and human." },
    ],
    searchIntents: ["head shaking vertically emoji", "🙂‍↕️ meaning", "yes emoji", "agree emoji"],
    whenNotToUse: ["Avoid using only 🙂‍↕️ when formal confirmation is required.", "Do not nod-emoji something you have not actually reviewed."],
    faqs: [
      { question: "What does 🙂‍↕️ mean in texting?", answer: "Yes, agreement, or calm acknowledgment." },
      { question: "Is 🙂‍↕️ the same as thumbs up?", answer: "Similar, but 🙂‍↕️ feels more like a conversational nod." },
    ],
  },

  "relieved-face": {
    batchId: BATCH_ID,
    searchTitle: "Relieved Face Emoji (😌) Meaning: Calm, Content, and Peaceful Relief",
    snippetAnswer:
      "😌 Relieved Face means calm relief, contentment, or peaceful satisfaction. It feels like 'all good now.'",
    detailedParagraphs: [
      "Relieved Face (😌) shows closed eyes and a soft smile, giving it a serene, settled mood.",
      "People send 😌 after stressful tasks finish, when plans resolve smoothly, or when emotional tension cools down.",
      "It can also express self-care vibes: rest, quiet evenings, and gratitude moments without dramatic language.",
    ],
    textingMeaning: "'Finally at peace 😌', 'that worked out 😌', or 'feeling calm now.'",
    socialMeaning: "Used in wellness posts, gratitude captions, and low-key 'I can breathe again' updates.",
    caution: "If someone is still distressed, 😌 can feel premature or minimizing.",
    examples: [
      { context: "After stress", text: "Got it done and now 😌" },
      { context: "Peace", text: "Tea and silence tonight 😌" },
      { context: "Resolution", text: "We talked it through 😌" },
      { context: "Self-care", text: "Offline for a bit 😌" },
      { context: "Content", text: "Simple day, good mood 😌" },
    ],
    contextBlocks: [
      { title: "Quiet relief", body: "😌 communicates settled calm rather than excitement." },
      { title: "Emotional reset", body: "People use it after conflict de-escalation and closure." },
      { title: "Vs 😮‍💨", body: "😮‍💨 is active exhale. 😌 is the calm state after exhaling." },
    ],
    searchIntents: ["relieved face emoji", "😌 meaning", "calm emoji", "peaceful emoji"],
    whenNotToUse: ["Avoid replying with only 😌 to someone in active crisis.", "Do not use it to appear smug after someone else's mistake."],
    faqs: [
      { question: "What does 😌 mean?", answer: "Relief, calm satisfaction, or peaceful contentment." },
      { question: "Is 😌 flirty?", answer: "Usually no; it is more about calm and comfort than romance." },
    ],
  },

  "woozy-face": {
    batchId: BATCH_ID,
    searchTitle: "Woozy Face Emoji (🥴) Meaning: Dizzy, Drunk, and Delirious",
    snippetAnswer:
      "🥴 Woozy Face means dizzy, tipsy, disoriented, or mentally scrambled. It can be literal intoxication or figurative 'my brain is melting.'",
    detailedParagraphs: [
      "Woozy Face (🥴) has uneven eyes and wobbly mouth, making it perfect for off-balance, unstable feelings.",
      "In texting, people use 🥴 after strong drinks, zero sleep, chaotic schedules, or information overload.",
      "Online, it also marks absurdity: when a situation is so weird your brain cannot process it normally.",
    ],
    textingMeaning: "'Too tired to function 🥴', 'that hit hard 🥴', or 'I'm dizzy.'",
    socialMeaning: "Appears in nightlife recaps, overstimulation memes, and chaotic-story reactions.",
    caution: "Avoid glamorizing dangerous drinking or substance use with playful 🥴 posting.",
    examples: [
      { context: "Sleep-deprived", text: "3 hours of sleep and counting 🥴" },
      { context: "Tipsy", text: "One cocktail too many 🥴" },
      { context: "Overloaded", text: "Too much info at once 🥴" },
      { context: "Confused", text: "What is even happening 🥴" },
      { context: "Heat", text: "Sun + no water = 🥴" },
    ],
    contextBlocks: [
      { title: "Off-balance mood", body: "🥴 signals physical or mental wobble in one glyph." },
      { title: "Chaos reaction", body: "Great for 'my brain cannot compute this' internet moments." },
      { title: "Vs 😵‍💫", body: "😵‍💫 emphasizes spinning disorientation. 🥴 feels sloppy and woozy." },
    ],
    searchIntents: ["woozy face emoji", "🥴 meaning", "dizzy emoji", "tipsy emoji"],
    whenNotToUse: ["Do not joke with 🥴 about medical emergencies or poisoning.", "Avoid pressuring others into drinking culture with it."],
    faqs: [
      { question: "What does 🥴 mean in texting?", answer: "Usually dizzy, tipsy, exhausted, or mentally scrambled." },
      { question: "Is 🥴 always about alcohol?", answer: "No. It often means tired, overwhelmed, or disoriented in general." },
    ],
  },

  "face-with-crossed-out-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Face With Crossed-Out Eyes Emoji (😵) Meaning: Knocked Out, Overwhelmed, and Done",
    snippetAnswer:
      "😵 Face With Crossed-Out Eyes means overwhelmed, stunned, or figuratively knocked out. It signals mental or physical overload.",
    detailedParagraphs: [
      "Face With Crossed-Out Eyes (😵) uses X-eyes, a cartoon visual for dazed collapse or shutdown.",
      "People send 😵 after intense deadlines, shocking prices, wild plot twists, or moments that feel too much to process.",
      "It can imply exhaustion, but the core tone is being overwhelmed beyond normal reaction capacity.",
    ],
    textingMeaning: "'That news took me out 😵', 'I'm overloaded 😵', or 'I can't process this.'",
    socialMeaning: "Used in reaction memes to dramatic reveals, chaotic edits, and impossible schedules.",
    caution: "Avoid using 😵 to joke about real medical collapse or traumatic incidents.",
    examples: [
      { context: "Overload", text: "My inbox today 😵" },
      { context: "Shock", text: "Rent increased again 😵" },
      { context: "Exhaustion", text: "Back-to-back calls 😵" },
      { context: "Surprise", text: "That finale ending 😵" },
      { context: "Too much", text: "I need a reset 😵" },
    ],
    contextBlocks: [
      { title: "Cartoon knockout", body: "X-eyes encode 'taken out' energy in internet language." },
      { title: "Mental overload", body: "😵 often reflects cognitive saturation, not literal fainting." },
      { title: "Vs 😵‍💫", body: "😵 is knocked-out daze. 😵‍💫 is spinning disorientation." },
    ],
    searchIntents: ["face with crossed out eyes", "😵 meaning", "overwhelmed emoji", "knocked out emoji"],
    whenNotToUse: ["Avoid insensitive jokes about injury, seizures, or medical trauma.", "Do not use it to mock someone having a panic response."],
    faqs: [
      { question: "What does 😵 mean?", answer: "Feeling overwhelmed, stunned, or figuratively knocked out." },
      { question: "Is 😵 the same as dizzy?", answer: "Not exactly; it leans toward overload/knockout more than spinning." },
    ],
  },

  "face-with-spiral-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Face With Spiral Eyes Emoji (😵‍💫) Meaning: Dizzy, Disoriented, and Spinning",
    snippetAnswer:
      "😵‍💫 Face With Spiral Eyes means dizziness, disorientation, or being mentally spun around. It's common for chaos and sensory overload.",
    detailedParagraphs: [
      "Face With Spiral Eyes (😵‍💫) adds swirling eyes to represent spinning sensation and confused equilibrium.",
      "People use it after busy days, intense social environments, motion sickness, or information spirals.",
      "It also appears in meme captions for chaotic timelines where everything feels too fast and unstable.",
    ],
    textingMeaning: "'I'm dizzy 😵‍💫', 'my head is spinning 😵‍💫', or 'too much happening at once.'",
    socialMeaning: "Popular in overstimulation, nightlife, and 'too many updates' reaction posts.",
    caution: "Do not trivialize vertigo or neurological issues if someone is describing real symptoms.",
    examples: [
      { context: "Dizzy", text: "Stood up too fast 😵‍💫" },
      { context: "Overstimulated", text: "Crowd + loud music = 😵‍💫" },
      { context: "Motion", text: "That ride ruined me 😵‍💫" },
      { context: "Info spiral", text: "Too many messages 😵‍💫" },
      { context: "Chaos day", text: "My schedule is spinning 😵‍💫" },
    ],
    contextBlocks: [
      { title: "Spinning sensation", body: "Spiral eyes make the dizziness cue immediate and visual." },
      { title: "Modern chaos emoji", body: "Used for digital overwhelm when timelines move too fast." },
      { title: "Vs 🥴", body: "🥴 is woozy/sloppy. 😵‍💫 is spinny and disoriented." },
    ],
    searchIntents: ["face with spiral eyes", "😵‍💫 meaning", "dizzy spinning emoji", "disoriented emoji"],
    whenNotToUse: ["Avoid using it to mock chronic vestibular or neurological conditions.", "Do not use it as the only response to someone reporting serious symptoms."],
    faqs: [
      { question: "What does 😵‍💫 mean in texting?", answer: "Dizzy, disoriented, overstimulated, or mentally spinning." },
      { question: "😵‍💫 vs 😵?", answer: "😵‍💫 is spin/disorientation; 😵 is more knockout or overload." },
    ],
  },

  "face-with-open-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Face With Open Mouth Emoji (😮) Meaning: Surprise, Awe, and 'Oh!'",
    snippetAnswer:
      "😮 Face With Open Mouth means surprised 'oh!' It signals mild-to-moderate shock, sudden realization, or impressed reaction.",
    detailedParagraphs: [
      "Face With Open Mouth (😮) is one of the classic surprise emojis, with a clean open-mouth expression and neutral eyes.",
      "People send 😮 when hearing unexpected news, seeing surprising results, or reacting to abrupt changes in plans.",
      "It is less dramatic than screaming faces, so it works for everyday surprises without sounding panicked.",
    ],
    textingMeaning: "'Oh wow 😮', 'wait really? 😮', or 'I did not expect that.'",
    socialMeaning: "Frequently appears under reveal posts, before/after transformations, and mild shock reactions.",
    caution: "For serious bad news, pair 😮 with empathy so it does not sound detached.",
    examples: [
      { context: "News", text: "You got the offer? 😮" },
      { context: "Reveal", text: "The final result looks amazing 😮" },
      { context: "Unexpected", text: "Didn't see that coming 😮" },
      { context: "Realization", text: "Ohhh now I get it 😮" },
      { context: "Quick reaction", text: "Wait, what 😮" },
    ],
    contextBlocks: [
      { title: "Classic surprise", body: "😮 is a versatile 'oh' reaction for many contexts." },
      { title: "Balanced intensity", body: "Surprised but not panic-level, which keeps tone flexible." },
      { title: "Vs 😱", body: "😱 is fear-panic. 😮 is simpler surprise or awe." },
    ],
    searchIntents: ["face with open mouth emoji", "😮 meaning", "surprised emoji", "oh wow emoji"],
    whenNotToUse: ["Avoid using only 😮 in grief or emergency conversations.", "Do not use it sarcastically at someone's vulnerability."],
    faqs: [
      { question: "What does 😮 mean?", answer: "Surprise, awe, or sudden realization." },
      { question: "Is 😮 positive or negative?", answer: "It is neutral surprise; context determines tone." },
    ],
  },

  "frowning-face-with-open-mouth": {
    batchId: BATCH_ID,
    searchTitle: "Frowning Face With Open Mouth Emoji (😦) Meaning: Worried Shock and Concern",
    snippetAnswer:
      "😦 Frowning Face With Open Mouth means worried surprise. It blends shock with concern rather than pure excitement.",
    detailedParagraphs: [
      "Frowning Face With Open Mouth (😦) combines an open mouth with a downturned expression, creating uneasy surprise.",
      "People use 😦 when unexpected news feels troubling, such as setbacks, concerning updates, or difficult realizations.",
      "Compared with neutral surprise emojis, 😦 carries emotional weight and implies that what happened is not good.",
    ],
    textingMeaning: "'Oh no 😦', 'that's concerning 😦', or 'I did not expect this in a bad way.'",
    socialMeaning: "Used in response to worrying headlines, sad updates, and tense situation recaps.",
    caution: "If someone is distressed, follow 😦 with concrete support, not reaction-only messaging.",
    examples: [
      { context: "Concern", text: "You had to go to urgent care? 😦" },
      { context: "Bad surprise", text: "They canceled everything 😦" },
      { context: "Tense update", text: "That escalated fast 😦" },
      { context: "Worried reaction", text: "I don't like how this sounds 😦" },
      { context: "Uneasy", text: "Something feels off 😦" },
    ],
    contextBlocks: [
      { title: "Worried surprise", body: "😦 reacts to unexpected negative or uncertain developments." },
      { title: "Empathy gateway", body: "It opens space to ask follow-up questions with care." },
      { title: "Vs 😮", body: "😮 is neutral surprise; 😦 adds concern and discomfort." },
    ],
    searchIntents: ["frowning face with open mouth", "😦 meaning", "worried emoji", "concerned surprise emoji"],
    whenNotToUse: ["Do not stop at 😦 when real help is needed.", "Avoid using it to dramatize minor mistakes by others."],
    faqs: [
      { question: "What does 😦 mean in texting?", answer: "Worried shock or uneasy surprise." },
      { question: "How is 😦 different from 😮?", answer: "😦 feels negative and concerned, while 😮 is more neutral." },
    ],
  },

  "anguished-face": {
    batchId: BATCH_ID,
    searchTitle: "Anguished Face Emoji (😧) Meaning: Distress, Alarm, and Emotional Pain",
    snippetAnswer:
      "😧 Anguished Face signals distress, alarm, or emotional pain. It is stronger than mild concern and closer to panic discomfort.",
    detailedParagraphs: [
      "Anguished Face (😧) has raised inner brows and open mouth, visually matching a tense, pained reaction.",
      "People send 😧 when they feel overwhelmed by bad news, anxious uncertainty, or emotional strain they cannot easily contain.",
      "In chat culture, it often appears when something is objectively rough, not just inconvenient.",
    ],
    textingMeaning: "'I'm really stressed 😧', 'this is awful 😧', or 'I can't handle this right now.'",
    socialMeaning: "Seen in intense reaction threads about troubling events and high-pressure personal updates.",
    caution: "When someone sends repeated 😧, check in directly instead of treating it like normal drama.",
    examples: [
      { context: "Distress", text: "Everything hit at once 😧" },
      { context: "Bad news", text: "That update is heartbreaking 😧" },
      { context: "Anxiety", text: "Waiting for the call 😧" },
      { context: "Alarm", text: "Please text me when you're safe 😧" },
      { context: "Overwhelm", text: "I need a minute 😧" },
    ],
    contextBlocks: [
      { title: "High discomfort", body: "😧 reflects emotional strain stronger than standard worry emojis." },
      { title: "Urgent tone", body: "It can signal a need for reassurance or practical support." },
      { title: "Vs 😨", body: "😨 is fearful shock; 😧 leans into anguished distress." },
    ],
    searchIntents: ["anguished face emoji", "😧 meaning", "distress emoji", "alarmed emoji"],
    whenNotToUse: ["Avoid performative overuse for trivial issues.", "Do not reply with only 😧 to serious disclosures."],
    faqs: [
      { question: "What does 😧 mean?", answer: "Distress, alarm, or pained emotional overwhelm." },
      { question: "Is 😧 the same as panic?", answer: "Not always, but it is in the panic-adjacent range of discomfort." },
    ],
  },

  "sad-but-relieved-face": {
    batchId: BATCH_ID,
    searchTitle: "Sad but Relieved Face Emoji (😥) Meaning: Emotional Relief and 'Whew'",
    snippetAnswer:
      "😥 Sad but Relieved Face means mixed emotion: sad, stressed, but relieved something is over. It's a vulnerable 'whew' expression.",
    detailedParagraphs: [
      "Sad but Relieved Face (😥) combines a frown with a sweat drop, capturing emotional tension that is easing but not gone.",
      "People use 😥 after difficult conversations, near misses, and situations that ended better than feared yet still hurt.",
      "It is especially useful when your feeling is complex: not happy, not devastated, but emotionally drained and grateful at once.",
    ],
    textingMeaning: "'That was hard but we got through it 😥', 'close call 😥', or 'relieved and sad.'",
    socialMeaning: "Appears in posts about difficult milestones, endings, and emotionally complicated updates.",
    caution: "If someone shares loss, do not assume relief; ask before interpreting their mood.",
    examples: [
      { context: "After hard talk", text: "We finally discussed it 😥" },
      { context: "Close call", text: "Could've been much worse 😥" },
      { context: "Mixed feelings", text: "Glad it's done, still sad 😥" },
      { context: "Relief", text: "Results came back okay 😥" },
      { context: "Emotional fatigue", text: "Today was a lot 😥" },
    ],
    contextBlocks: [
      { title: "Mixed emotion", body: "😥 is ideal when sadness and relief coexist." },
      { title: "Post-crisis decompression", body: "Common after tense periods finally settle down." },
      { title: "Vs 😰", body: "😰 is anxious stress. 😥 has more emotional sadness plus relief." },
    ],
    searchIntents: ["sad but relieved face", "😥 meaning", "mixed emotion emoji", "whew sad emoji"],
    whenNotToUse: ["Avoid simplifying major grief with a single 😥 reaction.", "Do not use it sarcastically after someone else's hardship."],
    faqs: [
      { question: "What does 😥 mean in texting?", answer: "Sad relief, close-call emotion, or drained gratitude." },
      { question: "Is 😥 happy or sad?", answer: "Both elements are present; it communicates emotional complexity." },
    ],
  },

  "face-screaming-in-fear": {
    batchId: BATCH_ID,
    searchTitle: "Face Screaming in Fear Emoji (😱) Meaning: Panic, Horror, and Extreme Shock",
    snippetAnswer:
      "😱 Face Screaming in Fear means extreme shock, panic, or horror. It's the big reaction emoji for terrifying or unbelievable moments.",
    detailedParagraphs: [
      "Face Screaming in Fear (😱) is inspired by the iconic scream expression, with hands on cheeks and wide mouth.",
      "People use 😱 for jump scares, shocking announcements, and high-drama reveals when normal surprise emojis feel too small.",
      "In meme culture, 😱 is also used playfully for exaggerated excitement, but its base meaning remains intense alarm.",
    ],
    textingMeaning: "'NO WAY 😱', 'that's terrifying 😱', or 'I'm panicking.'",
    socialMeaning: "Common in horror content, celebrity shock posts, and dramatic live-event reactions.",
    caution: "Reserve 😱 for strong moments; overusing it can make serious reactions look performative.",
    examples: [
      { context: "Horror", text: "That scene made me jump 😱" },
      { context: "Shock", text: "You quit today?? 😱" },
      { context: "Panic", text: "I forgot the deadline 😱" },
      { context: "Extreme surprise", text: "They announced it already 😱" },
      { context: "Drama", text: "This update is wild 😱" },
    ],
    contextBlocks: [
      { title: "High-intensity reaction", body: "😱 conveys the top tier of emotional shock in chat." },
      { title: "Horror staple", body: "Horror fandom and spooky content rely on 😱 heavily." },
      { title: "Vs 😮", body: "😮 is mild surprise. 😱 is fear-panic intensity." },
    ],
    searchIntents: ["face screaming in fear", "😱 meaning", "panic emoji", "horror reaction emoji"],
    whenNotToUse: ["Avoid using 😱 to mock someone's trauma or safety concern.", "Do not substitute emergency assistance with emoji reactions."],
    faqs: [
      { question: "What does 😱 mean?", answer: "Extreme shock, fear, panic, or intense dramatic surprise." },
      { question: "Can 😱 be playful?", answer: "Yes, sometimes exaggerated for drama, but it still implies high intensity." },
    ],
  },

  "confounded-face": {
    batchId: BATCH_ID,
    searchTitle: "Confounded Face Emoji (😖) Meaning: Frustrated, Strained, and Agitated",
    snippetAnswer:
      "😖 Confounded Face means frustrated strain, emotional agitation, or 'this is too much.' It feels tense and uncomfortable.",
    detailedParagraphs: [
      "Confounded Face (😖) has squinted eyes and scrunched mouth, showing irritation mixed with stress.",
      "People use 😖 when plans keep failing, tasks pile up, or they feel cornered by small problems stacking together.",
      "Compared with exhausted emojis, 😖 focuses more on frustration and internal tension than pure tiredness.",
    ],
    textingMeaning: "'I'm so frustrated 😖', 'this is not working 😖', or 'I can't with this.'",
    socialMeaning: "Seen in vent posts about recurring annoyances, broken workflows, and rough days.",
    caution: "If conflict is escalating, clarify with words rather than relying only on 😖.",
    examples: [
      { context: "Frustration", text: "Same error again 😖" },
      { context: "Stress", text: "Everything is piling up 😖" },
      { context: "Agitated", text: "This delay is killing me 😖" },
      { context: "Overload", text: "Too many problems at once 😖" },
      { context: "Tense", text: "Trying to stay calm 😖" },
    ],
    contextBlocks: [
      { title: "Strained emotion", body: "😖 captures tension and agitation in one expression." },
      { title: "Venting shorthand", body: "Useful for quick frustration without writing a paragraph." },
      { title: "Vs 😣", body: "😣 feels enduring struggle; 😖 feels sharper confounded frustration." },
    ],
    searchIntents: ["confounded face emoji", "😖 meaning", "frustrated emoji", "agitated emoji"],
    whenNotToUse: ["Avoid using 😖 as a passive-aggressive substitute for direct communication.", "Do not direct it at someone sharing vulnerable feelings."],
    faqs: [
      { question: "What does 😖 mean in texting?", answer: "Frustration, agitation, or tense emotional strain." },
      { question: "Is 😖 anger?", answer: "It can include anger, but it usually mixes frustration and stress." },
    ],
  },

  "persevering-face": {
    batchId: BATCH_ID,
    searchTitle: "Persevering Face Emoji (😣) Meaning: Struggling, Enduring, and Pushing Through",
    snippetAnswer:
      "😣 Persevering Face means struggling but continuing. It conveys effort under pressure, grit, and emotional endurance.",
    detailedParagraphs: [
      "Persevering Face (😣) shows clenched discomfort, like pushing through a difficult moment without giving up.",
      "People send 😣 during hard workouts, demanding projects, emotional conversations, or stressful tasks they still intend to finish.",
      "The tone is not total collapse; it is more 'this is rough, but I'm handling it.'",
    ],
    textingMeaning: "'Trying my best 😣', 'this is hard but I'm pushing through', or 'hanging in there.'",
    socialMeaning: "Used in motivation-adjacent posts and updates about hard but meaningful progress.",
    caution: "If someone repeatedly sends 😣, check if they need real help rather than encouraging silent endurance.",
    examples: [
      { context: "Effort", text: "Final sprint 😣" },
      { context: "Workout", text: "Last set hurts 😣" },
      { context: "Project", text: "Still grinding 😣" },
      { context: "Emotional", text: "Tough day but moving forward 😣" },
      { context: "Persistence", text: "Not quitting 😣" },
    ],
    contextBlocks: [
      { title: "Grit signal", body: "😣 communicates perseverance under pressure." },
      { title: "Not giving up", body: "It marks struggle plus continued effort, not defeat." },
      { title: "Vs 😩", body: "😩 feels done and weary. 😣 feels strained but determined." },
    ],
    searchIntents: ["persevering face emoji", "😣 meaning", "struggling emoji", "pushing through emoji"],
    whenNotToUse: ["Avoid glorifying burnout by celebrating nonstop 😣 without recovery.", "Do not use it to minimize someone asking for rest."],
    faqs: [
      { question: "What does 😣 mean?", answer: "Struggling, enduring, and trying to keep going." },
      { question: "Is 😣 sadness or effort?", answer: "Mostly effort under strain, though sadness can be present." },
    ],
  },

  "downcast-face-with-sweat": {
    batchId: BATCH_ID,
    searchTitle: "Downcast Face With Sweat Emoji (😓) Meaning: Stressed, Regretful, and Uneasy",
    snippetAnswer:
      "😓 Downcast Face With Sweat means stress, regret, or uneasy embarrassment. It's a 'this went badly' and 'I'm tense' emoji.",
    detailedParagraphs: [
      "Downcast Face With Sweat (😓) combines lowered eyes with a sweat drop, signaling anxious discomfort and emotional pressure.",
      "People use 😓 after mistakes, awkward moments, and stressful obligations they are trying to handle responsibly.",
      "It can also express apology energy: not full shame, but clear awareness that something went wrong.",
    ],
    textingMeaning: "'Sorry about that 😓', 'I'm stressed 😓', or 'that was awkward.'",
    socialMeaning: "Common in accountability posts, minor fail recaps, and pressure-heavy daily updates.",
    caution: "If you made a real mistake, pair 😓 with a concrete fix, not emoji-only regret.",
    examples: [
      { context: "Regret", text: "I missed your message 😓" },
      { context: "Stress", text: "Running behind on everything 😓" },
      { context: "Awkward", text: "That came out wrong 😓" },
      { context: "Apology", text: "My bad, I'll correct it 😓" },
      { context: "Uneasy", text: "Nervous about this call 😓" },
    ],
    contextBlocks: [
      { title: "Responsible discomfort", body: "😓 often signals concern plus willingness to improve." },
      { title: "Tense apology tone", body: "Useful for softening accountability messages in casual chat." },
      { title: "Vs 😅", body: "😅 is relieved awkward laugh. 😓 is heavier stress/regret." },
    ],
    searchIntents: ["downcast face with sweat", "😓 meaning", "stressed emoji", "regret emoji"],
    whenNotToUse: ["Avoid replacing substantive apologies with a quick 😓.", "Do not use it sarcastically after harming someone."],
    faqs: [
      { question: "What does 😓 mean in texting?", answer: "Stress, awkward regret, or anxious apology tone." },
      { question: "Is 😓 the same as embarrassment?", answer: "Partly, but it also carries pressure and worry." },
    ],
  },

  "grinning-cat": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Cat Emoji (😺) Meaning: Playful Joy and Cat Meme Energy",
    snippetAnswer:
      "😺 Grinning Cat means cheerful, playful happiness with feline flavor. It is often used in cat meme culture and cute internet humor.",
    detailedParagraphs: [
      "Grinning Cat (😺) is the cat-face counterpart to a happy grin, adding pet-like mischief and internet-cat personality.",
      "People use 😺 in cat-owner chats, pet photo replies, and meme threads where regular smiley faces feel less expressive.",
      "It can also signal playful tone in gaming and fandom spaces that lean into 'chaotic cat' behavior as a joke identity.",
    ],
    textingMeaning: "'So happy 😺', 'cat mode activated 😺', or playful cheerful reaction.",
    socialMeaning: "Appears in cat meme captions, pet account comments, and cozy 'internet cat' reactions.",
    caution: "In serious conversations, cat-face emojis like 😺 can seem flippant or unserious.",
    examples: [
      { context: "Pet update", text: "He finally used the new bed 😺" },
      { context: "Cute reaction", text: "That kitten video 😺" },
      { context: "Playful", text: "Feeling silly today 😺" },
      { context: "Meme", text: "Certified orange-cat behavior 😺" },
      { context: "Joy", text: "Best news all week 😺" },
    ],
    contextBlocks: [
      { title: "Cat meme tone", body: "😺 adds feline internet humor that plain 🙂 cannot." },
      { title: "Pet community staple", body: "Cat owners use it as emotional shorthand for cute wins." },
      { title: "Vs 😄", body: "😄 is generic joy. 😺 is joy filtered through cat culture." },
    ],
    searchIntents: ["grinning cat emoji", "😺 meaning", "cat smile emoji", "cat meme emoji"],
    whenNotToUse: ["Avoid using 😺 in condolences or serious support threads.", "Do not use cat-face emojis to mock someone's vulnerability."],
    faqs: [
      { question: "What does 😺 mean?", answer: "Playful happiness, often with cat meme or pet-chat tone." },
      { question: "Why use 😺 instead of a normal smiley?", answer: "It adds feline personality and internet-cat humor." },
    ],
  },

  "grinning-cat-with-smiling-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Grinning Cat With Smiling Eyes Emoji (😸) Meaning: Happy Cat and Wholesome Mischief",
    snippetAnswer:
      "😸 Grinning Cat With Smiling Eyes means bright, wholesome cat happiness. It feels warm, friendly, and meme-ready.",
    detailedParagraphs: [
      "Grinning Cat With Smiling Eyes (😸) has joyful closed-eye energy, often read as extra wholesome and affectionate.",
      "People use 😸 in pet communities, soft meme captions, and chats where they want cheerful tone with cat personality.",
      "Compared with other cat faces, 😸 feels especially friendly and less chaotic, making it a go-to for 'cute overload' responses.",
    ],
    textingMeaning: "'That's adorable 😸', 'happy cat vibes 😸', or warm playful approval.",
    socialMeaning: "Popular in wholesome cat reels, rescue updates, and cozy meme pages.",
    caution: "Overusing cat emojis in professional threads may make your tone seem unserious.",
    examples: [
      { context: "Cute photo", text: "Look at that smile 😸" },
      { context: "Wholesome", text: "This made my day 😸" },
      { context: "Pet success", text: "She trusts me now 😸" },
      { context: "Warm reaction", text: "Awwww 😸" },
      { context: "Friendly chat", text: "Love this energy 😸" },
    ],
    contextBlocks: [
      { title: "Wholesome cat mood", body: "😸 is a comfort emoji in cat-heavy communities." },
      { title: "Pet storytelling", body: "Works well in before/after rescue and adoption narratives." },
      { title: "Vs 😺", body: "😺 is broad playful grin; 😸 feels softer and more affectionate." },
    ],
    searchIntents: ["grinning cat with smiling eyes", "😸 meaning", "happy cat emoji", "wholesome cat emoji"],
    whenNotToUse: ["Avoid in high-conflict conversations where it can seem dismissive.", "Do not substitute real emotional support with cutesy reactions."],
    faqs: [
      { question: "What does 😸 mean in texting?", answer: "A warm, happy, cat-themed reaction to something cute or good." },
      { question: "Is 😸 flirty?", answer: "Usually no; it is more wholesome and playful than romantic." },
    ],
  },

  "cat-with-tears-of-joy": {
    batchId: BATCH_ID,
    searchTitle: "Cat With Tears of Joy Emoji (😹) Meaning: Laughing Hard in Cat Meme Style",
    snippetAnswer:
      "😹 Cat With Tears of Joy means laughing hard with cat meme flavor. It is the feline version of 'I'm crying laughing.'",
    detailedParagraphs: [
      "Cat With Tears of Joy (😹) mirrors the classic tears-of-laughter face but with cat styling, making it extra internet-native.",
      "It appears in reaction to absurd cat videos, cursed pet photos, and meme captions where humor is chaotic and unserious.",
      "Using 😹 instead of 😂 can signal participation in cat meme culture and niche online humor communities.",
    ],
    textingMeaning: "'I'm dead 😹', 'that is hilarious 😹', or laughing at cat-level chaos.",
    socialMeaning: "Frequent in cat meme pages, reaction threads, and playful group-chat roasting.",
    caution: "Do not use 😹 to laugh at someone's real distress or embarrassing personal moment.",
    examples: [
      { context: "Meme laugh", text: "That orange cat fail clip 😹" },
      { context: "Group chat", text: "You actually did that? 😹" },
      { context: "Pet chaos", text: "He stole the bread again 😹" },
      { context: "Absurdity", text: "Internet never rests 😹" },
      { context: "Roast", text: "Respectfully... 😹" },
    ],
    contextBlocks: [
      { title: "Cat-laugh culture", body: "😹 is a strong marker of feline meme literacy." },
      { title: "Playful exaggeration", body: "Often used for dramatic laughter, not literal crying." },
      { title: "Vs 😂", body: "😂 is universal laugh; 😹 adds niche cat-community tone." },
    ],
    searchIntents: ["cat with tears of joy", "😹 meaning", "laughing cat emoji", "cat meme laugh emoji"],
    whenNotToUse: ["Avoid laughing-react emojis on serious disclosures.", "Do not use 😹 for mean-spirited pile-ons."],
    faqs: [
      { question: "What does 😹 mean?", answer: "Crying-laugh reaction with cat meme style." },
      { question: "When should I use 😹 instead of 😂?", answer: "Use 😹 when you want playful feline internet humor." },
    ],
  },

  "smiling-cat-with-heart-eyes": {
    batchId: BATCH_ID,
    searchTitle: "Smiling Cat With Heart-Eyes Emoji (😻) Meaning: Cat Crush and Adoration",
    snippetAnswer:
      "😻 Smiling Cat With Heart-Eyes means adoration, affection, or cat-themed infatuation. It's a cute, meme-friendly love reaction.",
    detailedParagraphs: [
      "Smiling Cat With Heart-Eyes (😻) combines feline charm with heart-eyes, signaling intense liking in a playful way.",
      "People use 😻 for adorable pets, favorite creators, perfect outfits, or anything they 'love' with exaggerated cat energy.",
      "In cat meme culture, 😻 often captions impossible levels of cuteness, from tiny meows to dramatic loaf poses.",
    ],
    textingMeaning: "'Obsessed 😻', 'so cute I can't handle it 😻', or affectionate excitement.",
    socialMeaning: "Common in pet fandom, stan posts, and wholesome visual-content comments.",
    caution: "In formal contexts, 😻 can look too casual or overly expressive.",
    examples: [
      { context: "Adoration", text: "This kitten is perfect 😻" },
      { context: "Crush vibe", text: "That smile 😻" },
      { context: "Fandom", text: "New drop is amazing 😻" },
      { context: "Cute overload", text: "Tiny paws!!! 😻" },
      { context: "Affection", text: "Love this so much 😻" },
    ],
    contextBlocks: [
      { title: "Cat-love signal", body: "😻 blends affection with playful feline tone." },
      { title: "Meme cuteness", body: "A staple reaction under viral cute-animal clips." },
      { title: "Vs 😍", body: "😍 is direct adoration; 😻 adds cat meme personality." },
    ],
    searchIntents: ["smiling cat with heart eyes", "😻 meaning", "love cat emoji", "adoration cat emoji"],
    whenNotToUse: ["Avoid unsolicited romantic intensity with strangers.", "Do not use 😻 where neutral professional tone is expected."],
    faqs: [
      { question: "What does 😻 mean in texting?", answer: "Strong affection, adoration, or obsession with something cute." },
      { question: "Is 😻 romantic?", answer: "Sometimes, but often it is playful admiration, especially in pet contexts." },
    ],
  },

  "cat-with-wry-smile": {
    batchId: BATCH_ID,
    searchTitle: "Cat With Wry Smile Emoji (😼) Meaning: Smug Cat, Sass, and Mischief",
    snippetAnswer:
      "😼 Cat With Wry Smile means smug confidence, sass, or mischievous cat attitude. It is a classic 'I know exactly what I did' emoji.",
    detailedParagraphs: [
      "Cat With Wry Smile (😼) has a sly expression that reads as self-satisfied or cunning, with strong meme potential.",
      "People send 😼 after clever jokes, successful pranks, or subtle flexes where they want playful 'villain cat' energy.",
      "In cat meme culture, 😼 fits the archetype of the cat who knocks things over on purpose and walks away proud.",
    ],
    textingMeaning: "'Hehehe 😼', 'worked exactly as planned 😼', or playful smugness.",
    socialMeaning: "Used in roast threads, prank reveals, and chaotic pet-behavior memes.",
    caution: "Too much 😼 can read as mean-spirited if someone already feels criticized.",
    examples: [
      { context: "Smug win", text: "Told you it'd work 😼" },
      { context: "Prank", text: "You fell for it 😼" },
      { context: "Sassy", text: "Not my fault... mostly 😼" },
      { context: "Cat meme", text: "Knocked the cup again 😼" },
      { context: "Playful flex", text: "Easy mode 😼" },
    ],
    contextBlocks: [
      { title: "Sly confidence", body: "😼 signals mischievous control rather than open joy." },
      { title: "Cat chaos archetype", body: "Perfect for 'problematic but cute' feline meme captions." },
      { title: "Vs 😏", body: "😏 is human smirk; 😼 is sass with cat-flavored humor." },
    ],
    searchIntents: ["cat with wry smile", "😼 meaning", "smug cat emoji", "sassy cat emoji"],
    whenNotToUse: ["Avoid using 😼 while someone is apologizing or hurt.", "Do not deploy it for manipulative superiority."],
    faqs: [
      { question: "What does 😼 mean?", answer: "Smug, sly, or mischievous cat-like confidence." },
      { question: "Is 😼 flirty?", answer: "Sometimes, but most often it is playful sass or clever mischief." },
    ],
  },

  "kissing-cat": {
    batchId: BATCH_ID,
    searchTitle: "Kissing Cat Emoji (😽) Meaning: Affectionate Cat Kiss and Cute Love",
    snippetAnswer:
      "😽 Kissing Cat means affectionate kissy energy with a cute feline tone. It is warm, soft, and playful rather than intense.",
    detailedParagraphs: [
      "Kissing Cat (😽) gives a puckered cat expression, blending tenderness and playful internet cat personality.",
      "People use 😽 in close friendships, pet-owner chats, and sweet messages where they want a lighter affectionate tone.",
      "In cat meme culture, 😽 appears under cuddle photos, rescue updates, and 'sending virtual forehead kiss' style posts.",
    ],
    textingMeaning: "'Love you 😽', 'mwah 😽', or affectionate goodnight with cat vibe.",
    socialMeaning: "Common in pet communities, soft-aesthetic captions, and friendly affection exchanges.",
    caution: "Avoid sending kiss-style emojis like 😽 where affection is unwelcome or unclear.",
    examples: [
      { context: "Affection", text: "Sleep well 😽" },
      { context: "Pet love", text: "She gave me nose boops 😽" },
      { context: "Cute message", text: "Sending virtual kisses 😽" },
      { context: "Warm goodbye", text: "Talk tomorrow 😽" },
      { context: "Sweet reaction", text: "This is precious 😽" },
    ],
    contextBlocks: [
      { title: "Gentle affection", body: "😽 communicates warmth without heavy romantic intensity." },
      { title: "Cat-cute intimacy", body: "A favorite in wholesome pet and cozy DM culture." },
      { title: "Vs 😘", body: "😘 is standard kiss face; 😽 is softer and cat-themed." },
    ],
    searchIntents: ["kissing cat emoji", "😽 meaning", "cat kiss emoji", "affectionate cat emoji"],
    whenNotToUse: ["Do not send 😽 to people who have not welcomed affectionate tone.", "Avoid in formal professional communication."],
    faqs: [
      { question: "What does 😽 mean in texting?", answer: "A cute affectionate kiss, often friendly or sweetly romantic." },
      { question: "Is 😽 romantic only?", answer: "No. It can be platonic affection, especially among close friends or pet lovers." },
    ],
  },

  "weary-cat": {
    batchId: BATCH_ID,
    searchTitle: "Weary Cat Emoji (🙀) Meaning: Shocked Cat, Panic, and Dramatic Alarm",
    snippetAnswer:
      "🙀 Weary Cat means dramatic cat panic or shock. It's used for big reactions, chaos, and 'cat scream' meme moments.",
    detailedParagraphs: [
      "Weary Cat (🙀) resembles a startled yowl, making it ideal for exaggerated alarm with feline meme flavor.",
      "People use 🙀 when sudden problems appear, surprising announcements drop, or situations become instantly chaotic.",
      "In meme culture, 🙀 maps to the classic 'screaming cat' reaction image style, often intentionally dramatic.",
    ],
    textingMeaning: "'WHAT 🙀', 'this is chaos 🙀', or panic shock with cat energy.",
    socialMeaning: "Common in dramatic reaction threads, cat meme edits, and high-intensity group-chat moments.",
    caution: "Save 🙀 for big reactions; overuse on minor events can feel performative.",
    examples: [
      { context: "Sudden shock", text: "They moved the deadline to tomorrow 🙀" },
      { context: "Panic", text: "I lost my keys again 🙀" },
      { context: "Drama", text: "No way that just happened 🙀" },
      { context: "Cat meme", text: "Live footage of me right now 🙀" },
      { context: "Alarm", text: "Please call me ASAP 🙀" },
    ],
    contextBlocks: [
      { title: "Screaming cat trope", body: "🙀 channels famous cat panic meme aesthetics." },
      { title: "Dramatic reaction", body: "Best for sudden escalations and emotional spikes." },
      { title: "Vs 😱", body: "😱 is human panic; 🙀 is panic with meme-cat personality." },
    ],
    searchIntents: ["weary cat emoji", "🙀 meaning", "screaming cat emoji", "shocked cat emoji"],
    whenNotToUse: ["Avoid using 🙀 on someone's painful real-life disclosure.", "Do not substitute practical help with dramatic emoji reactions."],
    faqs: [
      { question: "What does 🙀 mean?", answer: "Dramatic shock, panic, or alarm in cat meme style." },
      { question: "Is 🙀 the same as 😱?", answer: "Similar intensity, but 🙀 adds feline/cat-meme tone." },
    ],
  },

  "crying-cat": {
    batchId: BATCH_ID,
    searchTitle: "Crying Cat Emoji (😿) Meaning: Sad Cat, Soft Grief, and Meme Melancholy",
    snippetAnswer:
      "😿 Crying Cat means sadness with cat-themed vulnerability. It appears in sincere comfort chats and in meme melancholy posts.",
    detailedParagraphs: [
      "Crying Cat (😿) shows visible tears and downcast cat features, giving a softer, more tender sadness than aggressive crying reactions.",
      "People use 😿 when sharing disappointing news, missing someone, or reacting to emotional pet stories and rescue content.",
      "In meme culture, 😿 can represent dramatic but relatable sadness, especially in self-deprecating 'sad cat hours' jokes.",
    ],
    textingMeaning: "'I'm sad 😿', 'that hurt 😿', or tender emotional reaction with cat tone.",
    socialMeaning: "Used in heartbreak memes, pet-loss tributes, and melancholy but cute aesthetic posts.",
    caution: "If someone's pain is serious, pair 😿 with real support and not just aesthetic sadness.",
    examples: [
      { context: "Sad update", text: "Didn't get the news I hoped for 😿" },
      { context: "Missing someone", text: "Wish you were here 😿" },
      { context: "Pet story", text: "This rescue clip got me 😿" },
      { context: "Soft vent", text: "Not my day 😿" },
      { context: "Meme sadness", text: "Me at 2am overthinking 😿" },
    ],
    contextBlocks: [
      { title: "Tender sadness", body: "😿 conveys vulnerable emotion without full meltdown intensity." },
      { title: "Cat-melancholy meme", body: "A staple in cute-but-sad internet humor templates." },
      { title: "Vs 😢", body: "😢 is direct human sadness; 😿 adds feline meme softness." },
    ],
    searchIntents: ["crying cat emoji", "😿 meaning", "sad cat emoji", "melancholy cat meme emoji"],
    whenNotToUse: ["Avoid using 😿 to trivialize major grief or trauma.", "Do not use it to manipulate guilt in close relationships."],
    faqs: [
      { question: "What does 😿 mean in texting?", answer: "Sadness, disappointment, or emotional vulnerability with cat tone." },
      { question: "Is 😿 always a joke?", answer: "No. It can be sincere, though it is also common in meme sadness." },
    ],
  },

  "pouting-cat": {
    batchId: BATCH_ID,
    searchTitle: "Pouting Cat Emoji (😾) Meaning: Grumpy Cat, Irritation, and Cat Attitude",
    snippetAnswer:
      "😾 Pouting Cat means irritated, grumpy, or offended with cat-style sass. It is the feline version of annoyed mood.",
    detailedParagraphs: [
      "Pouting Cat (😾) has a tense frown and narrowed eyes, giving unmistakable grumpy-cat energy.",
      "People use 😾 when annoyed by delays, bad takes, small injustices, or playful friend-group arguments.",
      "It also fits classic internet cat attitude jokes, including references to iconic grumpy-cat meme culture.",
    ],
    textingMeaning: "'I'm annoyed 😾', 'not amused 😾', or playful grumpiness.",
    socialMeaning: "Appears in sassy replies, cat-attitude memes, and low-stakes conflict banter.",
    caution: "Repeated 😾 can escalate tension; explain the issue with words when it matters.",
    examples: [
      { context: "Irritation", text: "Another delay? 😾" },
      { context: "Grumpy mood", text: "Don't talk to me before coffee 😾" },
      { context: "Playful sass", text: "You ate my fries 😾" },
      { context: "Meme attitude", text: "Certified grumpy cat day 😾" },
      { context: "Not impressed", text: "That excuse is weak 😾" },
    ],
    contextBlocks: [
      { title: "Grumpy-cat signal", body: "😾 captures annoyed mood without full rage symbols." },
      { title: "Meme lineage", body: "Often used with cat attitude references and sass humor." },
      { title: "Vs 😠", body: "😠 is human anger; 😾 is angry tone with feline meme flavor." },
    ],
    searchIntents: ["pouting cat emoji", "😾 meaning", "grumpy cat emoji", "annoyed cat emoji"],
    whenNotToUse: ["Avoid using 😾 in serious workplace conflict threads.", "Do not use it to ridicule someone's emotional disclosure."],
    faqs: [
      { question: "What does 😾 mean?", answer: "Grumpy irritation, displeasure, or sassy annoyed mood." },
      { question: "Is 😾 aggressive?", answer: "Usually mild-to-medium annoyance, often playful in cat meme context." },
    ],
  },

  "hear-no-evil-monkey": {
    batchId: BATCH_ID,
    searchTitle: "Hear-No-Evil Monkey Emoji (🙉) Meaning: Not Listening and Oops-I-Heard-That",
    snippetAnswer:
      "🙉 Hear-No-Evil Monkey means 'I don't want to hear this' or playful avoidance. It completes the wise monkeys trio with 🙈 and 🙊.",
    detailedParagraphs: [
      "Hear-No-Evil Monkey (🙉) covers its ears, drawn from the three wise monkeys proverb tradition.",
      "People use 🙉 for oversharing moments, spoiler avoidance, awkward gossip, or joking 'lalala I can't hear you.'",
      "With 🙈 from batch 12 and 🙊, it forms the full trio used in stories about selective silence in friend-group drama.",
    ],
    textingMeaning: "'Nope, not listening 🙉', 'too much info 🙉', or spoiler avoidance.",
    socialMeaning: "Common in reaction chains about gossip, cringe audio, and drama recaps.",
    caution: "Do not use 🙉 to dismiss serious concerns someone needs you to hear.",
    examples: [
      { context: "Overshare", text: "That's way too much detail 🙉" },
      { context: "Spoiler", text: "Don't tell me the ending 🙉" },
      { context: "Drama", text: "I'm staying out of this 🙉" },
      { context: "Playful avoidance", text: "Lalala can't hear it 🙉" },
      { context: "Trio reference", text: "🙈🙉🙊 group-chat mode" },
    ],
    contextBlocks: [
      { title: "Wise monkeys set", body: "🙉 is the ear-covering member of 🙈🙉🙊." },
      { title: "Selective listening joke", body: "Used for playful refusal to absorb drama or spoilers." },
      { title: "Vs 🙊", body: "🙉 blocks hearing. 🙊 blocks speaking." },
    ],
    searchIntents: ["hear no evil monkey", "🙉 meaning", "monkey covering ears emoji", "wise monkeys emoji"],
    whenNotToUse: ["Avoid using 🙉 when someone asks for serious emotional listening.", "Do not use it to avoid accountability conversations."],
    faqs: [
      { question: "What does 🙉 mean in texting?", answer: "I don't want to hear that, spoiler avoidance, or playful selective listening." },
      { question: "How is 🙉 related to 🙈 and 🙊?", answer: "They are the three wise monkeys: see no evil, hear no evil, speak no evil." },
    ],
  },

  "speak-no-evil-monkey": {
    batchId: BATCH_ID,
    searchTitle: "Speak-No-Evil Monkey Emoji (🙊) Meaning: Oops, Secret, and Lips Sealed",
    snippetAnswer:
      "🙊 Speak-No-Evil Monkey means 'I shouldn't say this' or 'my lips are sealed.' It completes the wise monkeys set with 🙈 and 🙉.",
    detailedParagraphs: [
      "Speak-No-Evil Monkey (🙊) covers its mouth and represents restraint in speech, secrets, or playful self-censorship.",
      "People use 🙊 after almost spilling tea, revealing too much, or promising to keep private information confidential.",
      "Together with 🙈 from batch 12 and 🙉, 🙊 is often used as a trio to signal 'we saw, heard, and said nothing.'",
    ],
    textingMeaning: "'Oops I said too much 🙊', 'secret safe with me 🙊', or 'not commenting.'",
    socialMeaning: "Common in surprise-party planning, gossip chats, and spoiler-sensitive fandom threads.",
    caution: "Never use 🙊 to silence reports of harm or harassment.",
    examples: [
      { context: "Secret", text: "I know but I won't tell 🙊" },
      { context: "Almost slipped", text: "Nearly spoiled it 🙊" },
      { context: "Self-censor", text: "I should stay quiet 🙊" },
      { context: "Group drama", text: "No comment from me 🙊" },
      { context: "Trio reference", text: "🙈🙉🙊 we know nothing" },
    ],
    contextBlocks: [
      { title: "Lips sealed", body: "🙊 is the go-to emoji for controlled silence." },
      { title: "Wise monkeys completion", body: "Pairs naturally with 🙈 and 🙉 to finish the proverb set." },
      { title: "Vs 🤐", body: "🤐 is zipper-mouth direct silence; 🙊 is playful monkey-based secrecy." },
    ],
    searchIntents: ["speak no evil monkey", "🙊 meaning", "monkey covering mouth emoji", "lips sealed monkey emoji"],
    whenNotToUse: ["Avoid using 🙊 to dodge ethical reporting responsibilities.", "Do not use it to pressure others into secrecy."],
    faqs: [
      { question: "What does 🙊 mean?", answer: "Lips sealed, secret-keeping, or 'I said too much' energy." },
      { question: "Is 🙊 playful or serious?", answer: "Usually playful, but it can also indicate genuine confidentiality." },
    ],
  },

  hole: {
    batchId: BATCH_ID,
    searchTitle: "Hole Emoji (🕳️) Meaning: Void, Escape, and 'I Want to Disappear'",
    snippetAnswer:
      "🕳️ Hole means void energy, emotional sinking, or wanting to disappear. It's often used for awkward moments and existential memes.",
    detailedParagraphs: [
      "Hole (🕳️) is a simple black pit symbol that internet culture turned into a metaphor for emotional and social collapse.",
      "People send 🕳️ after embarrassing mistakes, awkward interactions, or days when they feel like dropping out of visibility.",
      "It also appears in surreal meme formats about 'falling into a rabbit hole' of content, thoughts, or obsessions.",
    ],
    textingMeaning: "'I need a hole to hide in 🕳️', 'fell into a rabbit hole 🕳️', or void mood.",
    socialMeaning: "Used in self-deprecating memes, doomscrolling jokes, and awkward-social recap posts.",
    caution: "If someone uses 🕳️ repeatedly with hopeless language, check in seriously.",
    examples: [
      { context: "Embarrassment", text: "Sent it to the wrong person 🕳️" },
      { context: "Void mood", text: "Today feels like this 🕳️" },
      { context: "Rabbit hole", text: "Three hours on random videos 🕳️" },
      { context: "Disappear joke", text: "Logging off and vanishing 🕳️" },
      { context: "Existential", text: "Staring into the void 🕳️" },
    ],
    contextBlocks: [
      { title: "Void metaphor", body: "🕳️ became shorthand for emotional sinking on social media." },
      { title: "Awkward escape fantasy", body: "Often means 'please let me disappear right now.'" },
      { title: "Vs 🫥", body: "🫥 is dotted-line disappearing face; 🕳️ is the void itself." },
    ],
    searchIntents: ["hole emoji", "🕳️ meaning", "void emoji", "disappear emoji"],
    whenNotToUse: ["Avoid joking with 🕳️ when someone expresses active self-harm intent.", "Do not weaponize void language toward vulnerable users."],
    faqs: [
      { question: "What does 🕳️ mean in texting?", answer: "Void mood, embarrassment, rabbit-hole obsession, or wanting to disappear briefly." },
      { question: "Is 🕳️ always negative?", answer: "Mostly, but it can be playful in meme contexts." },
    ],
  },

  "eye-in-speech-bubble": {
    batchId: BATCH_ID,
    searchTitle: "Eye in Speech Bubble Emoji (👁️‍🗨️) Meaning: Witness, Awareness, and 'I See This'",
    snippetAnswer:
      "👁️‍🗨️ Eye in Speech Bubble means witness, awareness, and speaking up. It signals 'I see this' in social and civic contexts.",
    detailedParagraphs: [
      "Eye in Speech Bubble (👁️‍🗨️) combines observation (eye) with communication (speech bubble), creating a symbol of visible awareness.",
      "People use it in discussions about accountability, public issues, and social messages where being seen and heard matters.",
      "It can also function as a reaction for 'I noticed that detail' in threads about subtle behavior or hidden meaning.",
    ],
    textingMeaning: "'I see what's going on 👁️‍🗨️', 'noticing this and speaking on it.'",
    socialMeaning: "Used in activism-adjacent posts, awareness campaigns, and observant commentary threads.",
    caution: "Use thoughtfully; symbolic activism should be matched with meaningful action when possible.",
    examples: [
      { context: "Awareness", text: "People are paying attention now 👁️‍🗨️" },
      { context: "Accountability", text: "We saw that and remember 👁️‍🗨️" },
      { context: "Observation", text: "Interesting detail in slide 3 👁️‍🗨️" },
      { context: "Signal support", text: "Standing with this message 👁️‍🗨️" },
      { context: "Commentary", text: "I noticed the pattern 👁️‍🗨️" },
    ],
    contextBlocks: [
      { title: "Seen + spoken", body: "👁️‍🗨️ links observation and voice in one symbol." },
      { title: "Awareness language", body: "Often appears in posts emphasizing visibility and accountability." },
      { title: "Vs 👁️", body: "👁️ is just seeing; 👁️‍🗨️ adds communicative/public dimension." },
    ],
    searchIntents: ["eye in speech bubble emoji", "👁️‍🗨️ meaning", "awareness emoji", "witness emoji"],
    whenNotToUse: ["Avoid using 👁️‍🗨️ as performative branding without real support.", "Do not use it to surveil or intimidate individuals."],
    faqs: [
      { question: "What does 👁️‍🗨️ mean?", answer: "Awareness, witnessing, and speaking up about what is seen." },
      { question: "Is 👁️‍🗨️ an activism emoji?", answer: "Often yes in practice, though it can also mean observant commentary." },
    ],
  },

  "left-speech-bubble": {
    batchId: BATCH_ID,
    searchTitle: "Left Speech Bubble Emoji (🗨️) Meaning: Conversation, Chat, and Commentary",
    snippetAnswer:
      "🗨️ Left Speech Bubble represents conversation, discussion, and open dialogue. It's used for comments, chat prompts, and talk-focused posts.",
    detailedParagraphs: [
      "Left Speech Bubble (🗨️) is a text bubble symbol that visually cues communication, replies, and interaction.",
      "People use 🗨️ to invite comments, highlight Q&A spaces, or mark content that centers conversation instead of announcements.",
      "It is especially helpful in UI-like messaging, where the symbol quickly implies 'respond here' or 'let's discuss.'",
    ],
    textingMeaning: "'Let's talk 🗨️', 'drop your thoughts 🗨️', or conversation prompt.",
    socialMeaning: "Used in community posts, discussion threads, and engagement-oriented captions.",
    caution: "If the topic is sensitive, inviting discussion with only 🗨️ can feel too casual.",
    examples: [
      { context: "Prompt", text: "Thoughts on this? 🗨️" },
      { context: "Q&A", text: "Questions welcome 🗨️" },
      { context: "Community", text: "Join the conversation 🗨️" },
      { context: "Feedback", text: "Leave your notes below 🗨️" },
      { context: "Discussion tag", text: "Open thread 🗨️" },
    ],
    contextBlocks: [
      { title: "Dialogue symbol", body: "🗨️ marks spaces where exchange is expected." },
      { title: "Engagement tool", body: "Creators use it to encourage thoughtful comments." },
      { title: "Vs 💬", body: "💬 is chat bubble emoji; 🗨️ feels more icon-like and editorial." },
    ],
    searchIntents: ["left speech bubble emoji", "🗨️ meaning", "conversation emoji", "discussion emoji"],
    whenNotToUse: ["Avoid using discussion prompts for topics that require expert moderation.", "Do not invite debate where participant safety is at risk."],
    faqs: [
      { question: "What does 🗨️ mean?", answer: "Conversation, commentary, and open discussion." },
      { question: "How is 🗨️ different from 💬?", answer: "Both mean chat, but 🗨️ is often used as a cleaner conversation icon." },
    ],
  },

  "right-anger-bubble": {
    batchId: BATCH_ID,
    searchTitle: "Right Anger Bubble Emoji (🗯️) Meaning: Angry Outburst and Heated Rant",
    snippetAnswer:
      "🗯️ Right Anger Bubble means an angry outburst, rant, or heated words. It visualizes explosive speech energy.",
    detailedParagraphs: [
      "Right Anger Bubble (🗯️) comes from comic-style rage balloons that indicate shouting or aggressive verbal intensity.",
      "People use 🗯️ to label rant posts, intense disagreement, or moments where frustration spills into strong language.",
      "It can be humorous in low-stakes complaints, but in conflict it signals sharp escalation and emotional heat.",
    ],
    textingMeaning: "'I need to rant 🗯️', 'that made me furious 🗯️', or angry speech burst.",
    socialMeaning: "Appears in vent threads, commentary clips, and dramatic reaction edits.",
    caution: "Use carefully in interpersonal conflict; 🗯️ can harden tone and reduce chances of productive dialogue.",
    examples: [
      { context: "Rant", text: "Mini rant incoming 🗯️" },
      { context: "Anger", text: "That decision was ridiculous 🗯️" },
      { context: "Comedic outrage", text: "They forgot my sauce again 🗯️" },
      { context: "Heated reaction", text: "I cannot believe this 🗯️" },
      { context: "Vent label", text: "Need to get this off my chest 🗯️" },
    ],
    contextBlocks: [
      { title: "Comic outburst cue", body: "🗯️ visually encodes yelling/rant intensity." },
      { title: "Venting marker", body: "Useful when framing a message as emotional release." },
      { title: "Vs 😠", body: "😠 is angry face mood; 🗯️ is the angry speech burst itself." },
    ],
    searchIntents: ["right anger bubble emoji", "🗯️ meaning", "rant emoji", "angry speech bubble emoji"],
    whenNotToUse: ["Avoid escalating sensitive discussions with aggressive symbols.", "Do not use 🗯️ to intimidate or harass others."],
    faqs: [
      { question: "What does 🗯️ mean in texting?", answer: "An angry rant, outburst, or heated verbal reaction." },
      { question: "Is 🗯️ always serious anger?", answer: "Not always; it can be playful outrage, but tone depends on context." },
    ],
  },
};
