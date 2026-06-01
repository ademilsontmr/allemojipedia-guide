export type GestureKnowledge = {
  verb: string;
  textingUse: string;
  socialUse: string;
  workNote: string;
  examples: Array<{ context: string; text: string }>;
  caution?: string;
};

const G: Record<string, GestureKnowledge> = {
  "waving-hand": {
    verb: "wave hello or goodbye",
    textingUse: "open a chat, leave a thread, or acknowledge someone across the room",
    socialUse: "intro reels, 'hi followers' posts, and live stream greetings",
    workNote: "Fine for informal team hellos; skip in client-facing email.",
    examples: [
      { context: "Goodbye", text: "Gotta run — see you tomorrow {u}" },
      { context: "Hello", text: "Hey! Long time {u}" },
      { context: "Acknowledgment", text: "Saw your message {u}" },
      { context: "Stream", text: "Thanks for joining live {u}" },
      { context: "Group chat", text: "Leaving the group {u}" },
    ],
  },
  "raised-hand": {
    verb: "volunteer, ask to speak, or signal stop",
    textingUse: "jump into a group decision or say 'wait, one sec'",
    socialUse: "Q&A prompts and classroom-style live streams",
    workNote: "Works in Slack when raising a point; 'stop' meaning needs context.",
    examples: [
      { context: "Volunteer", text: "I'll do it {u}" },
      { context: "Question", text: "Quick question {u}" },
      { context: "Pause", text: "Hold on {u}" },
      { context: "Meeting", text: "Can I add something? {u}" },
      { context: "Poll", text: "Pick me {u}" },
    ],
  },
  "thumbs-up": {
    verb: "show approval or agreement",
    textingUse: "confirm plans without writing a full sentence",
    socialUse: "quick agreement in comment sections",
    workNote: "Widely OK internally; can feel curt with senior clients.",
    examples: [
      { context: "Approval", text: "Sounds good {u}" },
      { context: "Done", text: "Sent the file {u}" },
      { context: "Thanks", text: "Appreciate it {u}" },
      { context: "Confirm", text: "See you at 7 {u}" },
      { context: "React", text: "Exactly {u}" },
    ],
  },
  "thumbs-down": {
    verb: "disapprove or disagree",
    textingUse: "vote no on ideas — tone can feel harsh alone",
    socialUse: "playful dislike on memes; avoid on serious posts",
    workNote: "Too blunt for performance feedback — use words.",
    examples: [
      { context: "Disagree", text: "Not my pick {u}" },
      { context: "Review", text: "That episode? {u}" },
      { context: "Poll", text: "Option B {u}" },
      { context: "Joke", text: "Hard pass {u}" },
      { context: "Food", text: "Wouldn't order again {u}" },
    ],
    caution: "A lone thumbs-down can read as rude — pair with brief text.",
  },
  "clapping-hands": {
    verb: "applaud or congratulate",
    textingUse: "celebrate wins, graduations, and promotions",
    socialUse: "achievement posts and standing-ovation memes",
    workNote: "Nice for internal kudos channels.",
    examples: [
      { context: "Congrats", text: "You nailed it {u}" },
      { context: "Performance", text: "Standing ovation {u}{u}" },
      { context: "Team win", text: "Huge quarter {u}" },
      { context: "Graduation", text: "So proud {u}" },
      { context: "Irony", text: "Slow clap {u}" },
    ],
  },
  "folded-hands": {
    verb: "say please, thanks, or prayer",
    textingUse: "gratitude, begging favors, or hopeful requests",
    socialUse: "manifestation posts and thank-you captions",
    workNote: "Gratitude OK internally; begging tone may feel unprofessional.",
    examples: [
      { context: "Thanks", text: "Really appreciate you {u}" },
      { context: "Please", text: "Please work this time {u}" },
      { context: "Hope", text: "Manifesting good news {u}" },
      { context: "Support", text: "Sending love {u}" },
      { context: "Congrats", text: "Well deserved {u}" },
    ],
  },
  "raising-hands": {
    verb: "celebrate or surrender happily",
    textingUse: "hype moments and 'we did it' energy",
    socialUse: "festival clips, PR posts, and giveaway wins",
    workNote: "Celebratory internal posts only.",
    examples: [
      { context: "Win", text: "WE DID IT {u}" },
      { context: "Friday", text: "Weekend mode {u}" },
      { context: "Concert", text: "Best night ever {u}" },
      { context: "Relief", text: "Finally submitted {u}" },
      { context: "Hype", text: "Let's go {u}" },
    ],
  },
  "handshake": {
    verb: "close a deal or greet formally",
    textingUse: "confirm agreements and new partnerships",
    socialUse: "announce collabs and signed contracts",
    workNote: "Common in sales wins — still add contract details in text.",
    examples: [
      { context: "Deal", text: "Handshake deal done {u}" },
      { context: "Welcome", text: "Welcome to the team {u}" },
      { context: "Partnership", text: "Official collab {u}" },
      { context: "Agreement", text: "Agreed {u}" },
      { context: "Meet", text: "Great meeting you {u}" },
    ],
  },
  "flexed-biceps": {
    verb: "show strength, gym progress, or determination",
    textingUse: "workout logs and 'let's get it' motivation",
    socialUse: "fitness transformations and challenge tags",
    workNote: "Fine for wellness channels; skip in formal HR docs.",
    examples: [
      { context: "Gym", text: "Leg day done {u}" },
      { context: "Motivation", text: "We got this {u}" },
      { context: "Progress", text: "New PR {u}" },
      { context: "Challenge", text: "Day 30 {u}" },
      { context: "Hype", text: "Strong finish {u}" },
    ],
  },
  "victory-hand": {
    verb: "flash a peace sign or victory",
    textingUse: "casual photos, peace-out exits, or number two",
    socialUse: "travel selfies and concert snapshots",
    workNote: "Very casual — rare in corporate comms.",
    examples: [
      { context: "Peace", text: "Peace out {u}" },
      { context: "Photo", text: "Vacay vibes {u}" },
      { context: "Win", text: "Victory lap {u}" },
      { context: "Sign-off", text: "Later {u}" },
      { context: "Count", text: "Two tickets {u}" },
    ],
  },
  "crossed-fingers": {
    verb: "hope for luck",
    textingUse: "before interviews, exams, or medical results",
    socialUse: "manifestation and superstition humor",
    workNote: "OK for rooting for teammates; not for legal outcomes.",
    examples: [
      { context: "Interview", text: "Wish me luck {u}" },
      { context: "Results", text: "Hearing back today {u}" },
      { context: "Lottery joke", text: "Manifesting {u}" },
      { context: "Health", text: "Fingers crossed for good news {u}" },
      { context: "Launch", text: "Big day {u}" },
    ],
  },
  "love-you-gesture": {
    verb: "sign 'I love you' in ASL",
    textingUse: "family affection and supportive goodbyes",
    socialUse: "inclusive posts about Deaf culture — use respectfully",
    workNote: "Warm for friends/family; know it is a real language sign.",
    examples: [
      { context: "Family", text: "Love you {u}" },
      { context: "Support", text: "Proud of you {u}" },
      { context: "Goodnight", text: "Night {u}" },
      { context: "Reunion", text: "Missed you {u}" },
      { context: "Congrats", text: "Love this for you {u}" },
    ],
    caution: "This is American Sign Language — do not use mockingly.",
  },
  "middle-finger": {
    verb: "express rude anger",
    textingUse: "blunt insult — almost always escalates conflict",
    socialUse: "edgy humor among close friends only",
    workNote: "Never appropriate at work or with strangers.",
    examples: [],
    caution: "Offensive gesture — avoid harassment and professional contexts entirely.",
  },
  "person-running": {
    verb: "signal running, cardio, or rushing",
    textingUse: "share workout stats or 'on my way' sprints",
    socialUse: "race day posts and marathon training logs",
    workNote: "Fine for wellness Slack; not for urgent client escalations.",
    examples: [
      { context: "Workout", text: "5K done {u}" },
      { context: "Late", text: "Running to the train {u}" },
      { context: "Race", text: "Race morning {u}" },
      { context: "Challenge", text: "Couch to 5K week 4 {u}" },
      { context: "Busy", text: "Nonstop day {u}" },
    ],
  },
  "person-walking": {
    verb: "show walking, strolling, or commuting on foot",
    textingUse: "step counts and neighborhood walks",
    socialUse: "city exploration and mental-health walk posts",
    workNote: "Casual status updates only.",
    examples: [
      { context: "Steps", text: "10k steps {u}" },
      { context: "Commute", text: "Walking home {u}" },
      { context: "Explore", text: "New route {u}" },
      { context: "Break", text: "Clearing my head {u}" },
      { context: "Errand", text: "Quick store run {u}" },
    ],
  },
};

export const getGestureKnowledge = (base: string, name: string, subgroup: string): GestureKnowledge => {
  if (G[base]) return G[base];

  const label = name.toLowerCase();
  const slugWords = base.split("-").filter((w) => !["person", "man", "woman", "people"].includes(w));
  const activity = slugWords.join(" ") || label;

  return {
    verb: `represent ${activity} in messages`,
    textingUse: `talk about ${activity} plans, updates, or reactions`,
    socialUse: `tag posts and stories about ${activity}`,
    workNote: "Keep gesture and people emojis informal unless your team culture says otherwise.",
    examples: [
      { context: "Update", text: `{u} ${activity} update` },
      { context: "Plans", text: `${activity} later? {u}` },
      { context: "Done", text: `Finished ${activity} {u}` },
      { context: "Invite", text: `Join for ${activity} {u}` },
      { context: "React", text: `${activity} energy {u}` },
    ],
  };
};
