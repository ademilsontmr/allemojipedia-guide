---
title: "Emoji Skin Tones Explained: How They Work and Etiquette"
description: "How the five emoji skin tones work as modifiers, which emojis support them, how to set a default on iPhone, Android, Windows and Slack, and the etiquette."
excerpt: "The five skin tone modifiers, the emojis that accept them, how to set a default on every major platform, and honest answers to the etiquette questions."
pubDate: 2026-11-18
category: "How-to"
heroEmoji: "👋"
keyTakeaways:
  - "Skin tones are five separate Unicode characters, added in 2015, that attach to a base emoji and recolor it."
  - "Yellow is the intended generic default; it was designed as a non-realistic color, not as a light skin tone."
  - "Only human-form emojis and body parts take a tone, so smiley faces, zombies, genies and most group emojis stay as they are."
  - "iPhone, Mac, Android and WhatsApp remember a tone per emoji, while Windows, Slack, Discord and Teams offer one default for everything."
  - "The safest etiquette is to use the tone that represents you, or yellow, and to stay consistent in professional settings."
faqs:
  - q: "Why are emojis yellow by default?"
    a: "The Unicode Consortium recommends that human emojis without a modifier use a generic, non-realistic color, and suggests yellow, blue or gray as examples. Vendors settled on yellow because classic smiley faces already used it. The intent is that the default does not depict any real skin color, although some readers still interpret yellow as standing in for light skin."
  - q: "How do I change the skin tone of all my emojis at once on iPhone?"
    a: "You cannot set one global tone on iPhone. iOS remembers a choice separately for each emoji: touch and hold an emoji on the keyboard, pick a tone, and that emoji keeps it until you change it again. To make everything match, you need to repeat the long press for each emoji you use often."
  - q: "Why does a skin tone emoji show up as an emoji next to a colored square?"
    a: "The modifier is its own character that follows the base emoji. When the receiving device or app does not support the combination, it draws the two characters separately: the plain yellow emoji, then a small tone swatch or an empty box. Updating the operating system or app usually fixes it."
  - q: "Can I use two different skin tones in one emoji?"
    a: "Yes, for a limited set. The handshake, the couples holding hands, and the kiss and couple-with-heart emojis accept a separate tone for each person on current platforms. Multi-person family emojis do not have standardized tone options, which is one reason some vendors now draw families as neutral silhouettes."
  - q: "Is it okay to use a skin tone that is not my own?"
    a: "Most people use the tone closest to their own skin, or the yellow default. Using a much darker or lighter tone than your own is widely read as odd at best and as mockery at worst, unless you are clearly depicting someone else, such as replying about a specific friend or public figure."
  - q: "Do skin tone emojis use more characters in a text or post?"
    a: "Under the hood, yes. A toned emoji is two Unicode code points instead of one, so it takes more room in an SMS segment and in strict character counters. Some platforms normalize this; X, for example, counts every emoji as two characters whether or not it has a modifier."
related: ["hand-gesture-emojis-meaning", "why-emojis-show-as-boxes", "emojis-at-work-etiquette"]
keywords:
  - "emoji skin tones"
  - "how to change emoji skin tone"
  - "default skin tone emoji"
---

Emoji skin tones are five modifier characters that attach to a human emoji and recolor it from the default yellow to one of five shades, from light to dark. They were added to the Unicode Standard in 2015, they work on every major platform, and you pick one by long-pressing an emoji (phones) or choosing a default in the emoji picker (Windows, Slack, Discord, Teams). The rest of this guide covers how the system actually works, where it does not apply, and how to handle the etiquette questions people quietly worry about.

## Where the five tones come from

Before 2015, every human emoji came in a single appearance chosen by each vendor, and most vendors drew light-skinned people. Unicode 8.0 fixed that by adding five new characters called emoji modifiers. They are based on the Fitzpatrick scale, a six-type classification that dermatologist Thomas B. Fitzpatrick developed in the 1970s to describe how different skin responds to ultraviolet light. It was a medical tool for estimating sunburn risk, not a system designed to describe ethnicity, and that is worth keeping in mind: the tones describe a color range and nothing else.

The Fitzpatrick scale has six types, but Unicode has five modifiers because the two lightest types were merged into one.

| Modifier name (CLDR) | Fitzpatrick type | Code point | Example | Slack shortcode suffix |
|---|---|---|---|---|
| Light skin tone | Types 1-2 | U+1F3FB | 👋🏻 | `:skin-tone-2:` |
| Medium-light skin tone | Type 3 | U+1F3FC | 👋🏼 | `:skin-tone-3:` |
| Medium skin tone | Type 4 | U+1F3FD | 👋🏽 | `:skin-tone-4:` |
| Medium-dark skin tone | Type 5 | U+1F3FE | 👋🏾 | `:skin-tone-5:` |
| Dark skin tone | Type 6 | U+1F3FF | 👋🏿 | `:skin-tone-6:` |

The names in the first column are the official short names from CLDR, the Unicode project that supplies emoji names to operating systems. They are also what a screen reader announces, as covered in the guide to [emoji accessibility and screen readers](/guides/emoji-accessibility-screen-readers/).

### Why the default is yellow

The Unicode Consortium's guidance is that a human emoji with no modifier should use a generic, non-realistic color. Yellow won because the smiley tradition was already yellow. The intent is "no particular person," in the same way a stick figure on a restroom sign is no particular person.

Whether yellow succeeds at being neutral is a fair debate. Some people point out that the yellow figures can read as light-skinned by default, in the way cartoon characters drawn in yellow often do. Others treat yellow as exactly what it claims to be. Both readings exist among your recipients, which matters for the etiquette section below.

## How a skin tone emoji is built

A toned emoji is not a single character. It is the base emoji followed immediately by a modifier character, and software that understands the pair draws one combined picture.

- [Waving hand](/emojis/waving-hand/) 👋 is one code point, U+1F44B.
- Waving hand with medium skin tone 👋🏽 is two: U+1F44B followed by U+1F3FD.

This design has three practical consequences.

1. **Old software degrades visibly.** A device that knows the base emoji but not the pairing shows the yellow emoji followed by a colored square or an empty box. Nothing is lost in the message itself; the recipient's software just cannot merge the two. The guide on [why emojis show as boxes](/guides/why-emojis-show-as-boxes/) covers the fixes.
2. **Toned emojis are longer.** Two code points take more room than one. In an SMS, any emoji already forces the message into a mode that fits far fewer characters per segment, and modifiers eat into that further. Strict character counters in forms and databases may count a toned emoji as two or even four units.
3. **Search and matching can miss them.** A search for 👍 in some apps will not find 👍🏾, because the underlying text differs. Emoji-aware apps such as Slack group all tones of a reaction's base emoji separately, which is why a message can end up with three slightly different [thumbs up](/emojis/thumbs-up/) reactions side by side.

Emojis made of several people are more complicated. The mixed-tone handshake 🫱🏻‍🫲🏿 is really a right-facing hand with a tone, an invisible joining character, and a left-facing hand with a different tone. That is why multi-person tones arrived years after single-person ones and why they break into pieces on older devices.

## Which emojis accept a skin tone and which do not

More than a hundred base emojis accept modifiers. The rule of thumb: if it shows human skin and depicts one person or one body part, it probably takes a tone.

**Emojis that support tones**

- Hand gestures: [thumbs up](/emojis/thumbs-up/), [folded hands](/emojis/folded-hands/), [clapping hands](/emojis/clapping-hands/), [raised fist](/emojis/raised-fist/), [victory hand](/emojis/victory-hand/), [writing hand](/emojis/writing-hand/) and nearly every other hand
- Body parts: [flexed biceps](/emojis/flexed-biceps/), ear, nose, leg, foot, and [nail polish](/emojis/nail-polish/)
- Single people and gestures: [person shrugging](/emojis/person-shrugging/), [person facepalming](/emojis/person-facepalming/), [woman dancing](/emojis/woman-dancing/), babies, children, adults, older people
- Professions and roles: health worker, teacher, astronaut, police officer and the rest
- Many activity figures: runner, swimmer, surfer, weightlifter, golfer
- Some fantasy figures: mage, fairy, vampire, merperson, elf, Santa Claus

**Emojis that do not**

- Smiley faces. A [grinning face](/emojis/grinning-face/) is a symbol of an emotion, not a person, and stays yellow.
- Non-human or stylized figures: zombie, genie, troll, [speaking head](/emojis/speaking-head/) and the bust silhouettes, [people hugging](/emojis/people-hugging/), footprints
- Body parts without visible skin: eyes, mouth, tongue, brain
- A few figures where skin barely shows, such as the skier and the fencer
- Family groups with children

Two pair emojis, people with bunny ears and people wrestling, went without tone options for years. Emoji 17.0 added them, but whether you see those depends on how recent your operating system is.

### Mixed tones in pairs and groups

Support for a different tone on each person arrived in stages:

- **Couples holding hands** gained mixed-tone combinations in Emoji 12.0 (2019).
- **Kiss and couple with heart** gained tone combinations in Emoji 13.1.
- **The [handshake](/emojis/handshake/)** stayed yellow-only until Emoji 14.0 (2021), which made 25 combinations possible: five tones for each hand.

Families never got this treatment in the standard. A family of four with five possible tones each would need hundreds of combinations per family type, and they would still not cover every real family. Microsoft experimented with family tone combinations on Windows 10, but the approach did not spread. Apple now draws the family emojis as plain silhouettes, and Emoji 15.1 added gender-neutral family silhouettes, which sidesteps the problem.

### Hair is a different mechanism

Red hair, curly hair, white hair and bald are not modifiers. Since Emoji 11.0 (2018) they are separate component characters joined to a person with the same invisible joiner used in the handshake. You can combine hair with skin tone (a woman with red hair and medium-light skin, for example), but only for the specific person emojis that vendors have drawn. You cannot add red hair to a hand gesture or a profession.

## How to choose a skin tone and set a default

The interface splits into two camps: systems that remember a tone for each emoji individually, and systems with a single default for all of them.

| Platform | How to pick a tone | What it remembers |
|---|---|---|
| iPhone and iPad | Touch and hold the emoji on the keyboard | Per emoji |
| Mac | Click and hold the emoji in the Character Viewer (Control-Command-Space) | Per emoji |
| Android (Gboard) | Touch and hold the emoji | Per emoji |
| Samsung Keyboard | Touch and hold the emoji | Per emoji |
| WhatsApp (phone) | Uses your keyboard's choice | Per emoji |
| Windows 11 | Open the panel with Windows key + period, pick a tone from the selector in the People section | One default for all |
| Slack | Open the emoji picker and use the Skin Tone button at the bottom | One default for all |
| Discord | Use the tone selector at the top of the emoji picker | One default for all |
| Microsoft Teams | Choose a skin tone in the emoji picker or in Settings | One default for all |

Menu positions shift between app versions, so if a button is not where the table says, look for a small hand or colored dot in the corner of the emoji picker.

A few details save time:

- **iPhone has no global setting.** If you want every hand to match, long-press each one you use once. After that the keyboard and the Frequently Used section keep your choice.
- **Resetting to yellow** works the same way: long-press and pick the yellow option, which is always first in the row.
- **Shortcodes work in chat apps.** In Slack you can type `:wave::skin-tone-4:`. In Discord the pattern is `:wave_tone3:`, with numbers running from 1 (light) to 5 (dark). Note the mismatch: Slack numbers the tones 2 through 6 to mirror the Fitzpatrick types, while Discord counts 1 through 5.
- **Reactions follow your default.** In Slack, Teams and Discord, clicking a reaction someone else added copies their exact emoji, including their tone. If you want your own tone, add the reaction from the picker instead of clicking theirs.

For the general keyboard shortcuts that open each picker, see [how to type emojis on any device](/guides/how-to-type-emojis-on-any-device/).

## Etiquette: yellow, your own tone, or someone else's

There is no official rule, and the Unicode Consortium does not issue etiquette guidance. What exists is a set of common expectations that have settled since 2015.

**Using your own tone is the ordinary case.** Most people who use modifiers pick the one closest to their own skin. For many people of color, the modifiers were the first time a thumbs up or a wave on screen looked like their own hand, and using them is simply self-description.

**Using yellow is also ordinary.** Plenty of people of every background never touch the modifiers. Reasons vary: habit, speed, not wanting to bring identity into a quick reply, or a feeling that yellow is the "emoji color" and a toned hand is a more personal statement.

**Some light-skinned users hesitate, and the reasoning cuts both ways.** One view is that choosing the light tone needlessly announces whiteness in a conversation where race is not the subject. The opposite view is that defaulting to yellow while everyone else specifies treats light skin as the unmarked norm. Neither position has won, and neither choice is likely to offend on its own. If you are unsure, either is defensible; consistency matters more than which one you pick.

**Using a tone far from your own is where problems start.** A light-skinned person habitually sending dark-toned gestures is often read as performing an identity that is not theirs, especially when paired with borrowed slang. The exception is depiction: if a friend asks "is that me in the photo?" and you answer with an emoji in their tone, or you are describing a specific person, you are representing someone, not impersonating them.

**Do not use tone to make a point about someone.** Switching to a darker or lighter modifier to mock, to mimic, or to mark a person as an outsider is the clearly unacceptable use, and it is the one that gets people reported at work.

### At work and for brands

In workplace chat, almost any consistent choice is fine. What reads strangely is switching tones from message to message, because colleagues notice and wonder what changed. Pick your tone or yellow once in Slack or Teams and leave it. The broader norms are in the guide to [emojis at work](/guides/emojis-at-work-etiquette/).

Company accounts are different. A brand is not a person and has no skin, so the long-standing convention is for brand posts, newsletters and push notifications to use the yellow default. When a campaign does depict people, a mix of tones in the artwork or a rotation across posts is more defensible than choosing one tone to stand for all customers. More on that in [emojis in marketing](/guides/emojis-in-marketing/).

## Common problems and how to fix them

**The emoji shows as yellow plus a colored square.** The recipient's device does not support that tone pairing. Updating the operating system fixes it. If it happens in one app only, update the app, since some apps ship their own emoji artwork.

**The handshake or couple splits into two separate pieces.** Mixed-tone group emojis are joined sequences, and older systems draw the parts individually. Send the yellow version to people on old devices.

**My chosen tone keeps resetting.** On phones the choice is stored by the keyboard app. Switching keyboards, clearing the keyboard's data, or resetting the keyboard dictionary wipes it. In Slack and Discord the default is stored per account and occasionally per device.

**A tone looks different on my friend's phone.** Each vendor paints the five tones with its own palette, so Apple's medium is not identical to Google's or Samsung's medium. The modifier is the same; the artwork differs. The guide to [iPhone vs Android emojis](/guides/iphone-vs-android-emojis/) shows how far designs can drift.

**The same reaction appears several times on one message.** Different tones are different emojis as far as the app is concerned. Teams that find this cluttered sometimes agree to react with yellow.

**I cannot find a tone option for a particular emoji.** It probably does not accept one. Check the lists above: faces, creatures and families are the usual surprises.

## Quick reference: choosing well

- Yellow means "generic," and it is always acceptable.
- Your own tone is always acceptable too. You do not owe anyone an explanation for either choice.
- Stay consistent within a workplace or group chat.
- Use another tone only to depict a specific other person, never to imitate or tease.
- For brand and company accounts, default to yellow unless artwork deliberately shows a range of people.
- When sending to people on older phones, avoid mixed-tone pair emojis, which are the first to break.
- If the meaning of the gesture itself is what you are unsure about, the tone will not rescue it; check [hand gesture meanings](/guides/hand-gesture-emojis-meaning/) first.
