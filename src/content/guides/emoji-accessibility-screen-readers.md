---
title: "Emoji Accessibility: How Screen Readers Read Emojis"
description: "What VoiceOver, TalkBack, JAWS and NVDA actually say when they reach an emoji, the habits that make posts painful to hear, and how to write accessibly."
excerpt: "Screen readers speak every emoji's name out loud. Here is what that sounds like, which habits cause trouble, and how to keep emojis without shutting people out."
pubDate: 2026-11-18
category: "How-to"
heroEmoji: "🗣️"
keyTakeaways:
  - "A screen reader replaces each emoji with its spoken name, so ten emojis means ten interruptions."
  - "The spoken name describes the picture, not the slang meaning, so the words must carry the message on their own."
  - "Place emojis at the end of a sentence, use one to three, and never repeat the same one in a row."
  - "Emojis in display names, as bullet points, or between every word are the patterns that cause the most frustration."
  - "Fancy Unicode fonts and ASCII art are worse for accessibility than emojis are."
faqs:
  - q: "Do screen readers read emojis out loud?"
    a: "Yes. VoiceOver, TalkBack, Narrator, JAWS and NVDA all announce an emoji by speaking a short description of it, such as face with tears of joy or red heart. The wording comes from each product's own speech dictionary, usually based on Unicode CLDR names, so the exact phrase varies a little between devices and languages."
  - q: "How many emojis are too many for a screen reader user?"
    a: "There is no formal limit, but one to three per post or message is a comfortable range. Each emoji adds a spoken phrase of two to six words. A row of ten can add twenty seconds of listening before the person reaches the next real word, and many listeners will simply skip the post."
  - q: "Where is the best place to put an emoji in a sentence?"
    a: "At the end of a sentence or at the end of the post. There it works like a spoken aside after the thought is complete. In the middle of a sentence the description interrupts the grammar, and at the very start it delays the content that tells the listener whether the post is worth their time."
  - q: "Are emoticons like :) better than emojis for accessibility?"
    a: "Usually not. Depending on the screen reader and its punctuation settings, a text emoticon is either skipped silently or read as its punctuation marks, for example colon right parenthesis. A single emoji has a clear spoken name, so it is normally the more accessible way to show a smile."
  - q: "How do I make an emoji accessible on a web page?"
    a: "If the emoji carries meaning, wrap it in a span with role img and an aria-label that says what it means in context. If it is decoration next to text that already says the same thing, hide it from assistive technology with aria-hidden set to true so it is not announced twice."
  - q: "Can blind people use and enjoy emojis?"
    a: "Yes. Blind and low-vision people send emojis, search for them by name on their keyboards, and generally do not want them banned. The common request is moderation and thoughtful placement, not removal. An occasional well-chosen emoji adds tone for a listener just as it does for a reader."
related: ["emojis-at-work-etiquette", "emojis-in-marketing", "emoji-skin-tones-explained"]
---

A screen reader handles an emoji by speaking its name: 😂 becomes "face with tears of joy," 🙏 becomes "folded hands," and 👍🏽 becomes "thumbs up, medium skin tone." That works well for one or two emojis and badly for a string of twelve, emojis wedged between words, or emojis standing in for words. Writing accessibly does not mean giving emojis up; it means using few, placing them at the end, and making sure the sentence still makes sense when each picture is replaced by a short phrase.

## What a screen reader does when it reaches an emoji

Screen readers convert on-screen text to speech or braille. The main ones are VoiceOver (iPhone, iPad, Mac), TalkBack (Android), Narrator (Windows), and the third-party Windows programs JAWS and NVDA. People who use them include blind and low-vision users, and also some people with dyslexia or other reading differences who prefer to listen.

Because an emoji is a text character, the screen reader looks it up in a table and speaks the matching description. Those descriptions mostly trace back to CLDR, the Unicode Consortium's data project that publishes a short name for every emoji in many languages. Each vendor adapts the list, so wording differs slightly: one product might say "red heart," another "heavy red heart" on an older version.

Several things follow from that mechanism:

- **Every emoji is announced, every time.** There is no skimming past them at a glance the way a sighted reader does.
- **Names describe the image.** [Skull](/emojis/skull/) is announced as "skull," not "I'm dying laughing." [Nail polish](/emojis/nail-polish/) is "nail polish," not sass.
- **Modifiers are spoken.** Skin tones and gender add words: "woman facepalming, medium-dark skin tone." The mechanics are in the guide to [emoji skin tones](/guides/emoji-skin-tones-explained/).
- **Repeats are handled differently by different products.** Some read the name once per emoji, so five clapping hands is the phrase "clapping hands" five times. Others collapse a run into a count. You cannot know which your reader has.
- **Unknown emojis may vanish.** If the screen reader's dictionary is older than the emoji, the listener can hear nothing, or a generic word such as "symbol." A brand-new emoji is therefore the riskiest one to hang meaning on.
- **Braille displays show text.** A refreshable braille display typically renders the same description in braille cells, which can take up a large share of a short display line.

Users can change some of this. NVDA has a speech setting that controls whether Unicode Consortium data, including emoji descriptions, is used. VoiceOver on recent iOS versions has verbosity options related to emojis. But you should write for default settings, since most people never change them.

## What common emojis and patterns actually sound like

The gap between what you see and what a listener hears is easiest to grasp from examples. Wording varies by product and version; these are typical.

| What is on screen | Roughly what is spoken |
|---|---|
| Great job 👏 | "Great job, clapping hands" |
| Great 👏 job 👏 team 👏 | "Great, clapping hands, job, clapping hands, team, clapping hands" |
| 🔥🔥🔥🔥🔥 | "Fire" five times, or "five fire" |
| I ❤️ NY | "I red heart N Y" |
| 😤 | "Face with steam from nose" |
| 👁️‍🗨️ | "Eye in speech bubble" |
| 🙃 | "Upside-down face" |
| 👍🏿 | "Thumbs up, dark skin tone" |
| 🇨🇦 | "Flag: Canada" |
| :-) | Nothing, or "colon dash right paren" |
| ¯\\\_(ツ)\_/¯ | A string of punctuation names and a Japanese character name |
| 𝓗𝓮𝓵𝓵𝓸 | Nothing, or "mathematical script capital H" and so on |

Three lessons sit in that table.

First, a few official names are far from how people use the emoji. [Face with steam from nose](/emojis/face-with-steam-from-nose/) is used for frustration or determination, and the spoken name conveys neither. The [upside-down face](/emojis/upside-down-face/) signals irony to a sighted reader; "upside-down face" on its own signals very little. Experienced screen reader users learn the conventions, just as sighted users do, but newer users and newer slang do not always line up. The guide to [Gen Z emoji slang](/guides/gen-z-emoji-slang/) shows how far usage can drift from the name.

Second, an emoji that replaces a word makes the listener translate. "I red heart N Y" is decodable. "Bring 🍕 and 🍺 to the 🏠 at 7" is a puzzle delivered one clue at a time.

Third, the worst offenders are not emojis at all. Text "fonts" made from mathematical Unicode letters, ASCII art, and elaborate kaomoji are read as gibberish or skipped completely. If a bio or headline is written in those characters, a screen reader user may not be able to read your name.

## The habits that cause the most trouble

### Emojis between every word

The clap-between-words style is emphatic on screen and exhausting by ear. The sentence is chopped into single words with a two-word interruption after each. If you want emphasis, use the words themselves, and put one [clapping hands](/emojis/clapping-hands/) at the end.

### Long runs of the same emoji

Ten [loudly crying faces](/emojis/loudly-crying-face/) add nothing a listener can use after the first. On a reader that does not collapse repeats, it is the same three words ten times.

### Emojis as bullet points

A list where each line starts with ✅ or 👉 makes the listener hear "check mark button" or "backhand index pointing right" before every item. Real list formatting is announced as a list ("list, five items") and lets the user jump between items. Emoji bullets do neither.

### Emojis in display names

On social platforms and chat apps, a display name is read aloud with every post, reply and notification. A name like "Sam 🌈✨🦋" becomes "Sam rainbow sparkles butterfly" each time, including in a busy thread where Sam replies twenty times. One emoji in a name is tolerable. Several is a tax on every listener who follows you.

### Emojis that carry the only copy of the information

"Meeting moved ➡️ 🕒" tells a screen reader user that there is a right arrow and a clock showing three, if their software is detailed enough to say which clock. Dates, times, warnings, prices and instructions must be in words. The same applies to status: do not rely on a [red circle](/emojis/red-circle/) versus a [green circle](/emojis/green-circle/) alone to mark something as failing or passing, which also excludes many color-blind readers.

### Emoji-only replies where a decision is needed

A lone [thumbs up](/emojis/thumbs-up/) is announced clearly and is fine as an acknowledgment. A lone [eyes](/emojis/eyes/) or [thinking face](/emojis/thinking-face/) in reply to "Can you approve this today?" is ambiguous for everyone and more so when heard as a bare noun phrase.

## How to write accessibly with emojis

These rules cost almost nothing and cover nearly every case.

1. **Write the sentence so it works without the emoji.** Read it back with the emoji deleted. If meaning is lost, add words.
2. **Put emojis at the end.** End of sentence is good; end of the post is best. The thought finishes, then the tone marker arrives.
3. **Use one to three.** Treat each as a spoken phrase you are asking someone to sit through.
4. **Do not repeat.** One [fire](/emojis/fire/) says it.
5. **Do not substitute emojis for words.** Add them to words instead.
6. **Prefer well-known emojis.** Older, common emojis have stable, familiar names in every screen reader. A just-released emoji may be silent.
7. **Check the official name of anything ambiguous.** Each emoji page on this site lists its name. If the name would sound strange or misleading in your sentence, choose another. A sympathy message ending in [folded hands](/emojis/folded-hands/) sounds fine; one ending in an emoji whose name is "face with open mouth" does not.
8. **Skip decorative text characters.** No mathematical-alphabet fonts, no small-caps Unicode, no ASCII art without a plain-text equivalent.
9. **Keep hashtags readable.** Capitalize each word (#WorldEmojiDay) so speech engines can separate the words, and keep emojis out of the hashtag.
10. **Add alt text to images of emojis.** A screenshot of a text thread or a meme built from emojis is an image; describe what matters in it.

A before-and-after shows the difference:

- Before: "🚨🚨 BIG 👏 NEWS 👏 🚨🚨 our 🆕 app is 🔥🔥🔥 ⬇️⬇️"
- After: "Big news: our new app is live. Download link below. 🎉"

The second version is also clearer for sighted readers, people using translation tools, and anyone reading in a hurry.

## Beyond screen readers: low vision, color and cognition

Screen reader users are not the only audience to consider.

- **Low vision.** At normal text size many faces are nearly indistinguishable: the difference between a [slightly smiling face](/emojis/slightly-smiling-face/) and a [neutral face](/emojis/neutral-face/) is a few pixels of mouth. People using screen magnification see a small part of the line at a time, so an emoji far from the words it relates to loses its context.
- **Contrast.** A [white heart](/emojis/white-heart/) on a white background or a [black heart](/emojis/black-heart/) in dark mode can effectively disappear. Yellow faces on white have weak edges on some platforms. Do not rely on a low-contrast emoji to carry meaning.
- **Color.** Colored circles, squares and hearts used as a code (red for stop, green for go) fail for many people with color vision deficiency unless a word accompanies them.
- **Cognitive and language differences.** Some people find ambiguous emojis hard to interpret, including some autistic readers and many people reading in a second language. Others find a clear emoji helpful as a tone signal. The dependable approach is the same as above: plain words first, a conventional emoji as support. Sarcastic uses, such as the smile that means the opposite, are the ones most likely to misfire; see [passive-aggressive emojis](/guides/passive-aggressive-emojis/).
- **Different artwork.** The same emoji is drawn differently by Apple, Google, Samsung and Microsoft, so even sighted readers do not all see what you sent. The guide to [iPhone vs Android emojis](/guides/iphone-vs-android-emojis/) has examples.

## For people who build websites, apps and emails

If you publish emojis in a product, you control how they are exposed to assistive technology.

- **Meaningful emoji.** Give it a role and a label that states its meaning in context: `<span role="img" aria-label="Warning">⚠️</span>`. The label can be more useful than the default name; "Sold out" is better than "cross mark" beside a product.
- **Decorative emoji.** If the adjacent text already says it, hide the emoji: `<span aria-hidden="true">🎉</span> Order confirmed`. Otherwise the user hears "party popper, order confirmed" on every confirmation.
- **Buttons and links.** An emoji-only button needs an accessible name. Without one, the user hears only the emoji's description, or just "button."
- **Page titles and headings.** The title is the first thing announced when a page loads, and headings are how screen reader users navigate. Emojis there are read every time. Keep them out or put them last.
- **Custom emojis.** Workspace emojis in Slack, Discord and similar apps are images. They are announced by the name the uploader gave them, so `:shipit:` is meaningful and `:img_4032:` is not. Name them in plain words.
- **Email subject lines.** The subject is announced in the inbox list for every message. A leading emoji delays the words; a trailing one does not. There is more on this in [emojis in marketing](/guides/emojis-in-marketing/).
- **CSS-inserted emojis.** Emojis added through CSS generated content are often still announced. Do not assume they are invisible to assistive technology.

## Hear it yourself in two minutes

The fastest way to build judgment is to listen to your own post. Every major platform includes a screen reader at no cost.

| Device | Screen reader | How to turn it on |
|---|---|---|
| iPhone or iPad | VoiceOver | Settings, Accessibility, VoiceOver; or ask Siri to turn on VoiceOver |
| Android | TalkBack | Settings, Accessibility, TalkBack (location varies by manufacturer) |
| Mac | VoiceOver | Command-F5, or System Settings, Accessibility, VoiceOver |
| Windows | Narrator | Windows key + Control + Enter |
| Windows | NVDA | Free download from NV Access |

Touch gestures change while a phone screen reader is on: you tap once to select and double-tap to activate. Learn how to turn it off before you turn it on. On iPhone, asking Siri to turn off VoiceOver is the easy exit.

Then paste your draft into a note and listen. If you find yourself impatient before the end, your audience will be too.

## Pre-post checklist

- The message makes complete sense with every emoji removed.
- No emoji replaces a word, a date, a time, a price or an instruction.
- Emojis sit at the end of the sentence or the post, not the start or the middle.
- Three or fewer, with no back-to-back repeats.
- No emoji bullets where real list formatting is available.
- No decorative Unicode fonts or ASCII art.
- Display name has at most one emoji.
- Any emoji whose official name differs from how you mean it has been swapped or explained in words.
- Color-coded emojis are paired with a word.
- Images, screenshots and custom emojis have text descriptions or sensible names.

If you post for a team or an employer, the same list fits neatly beside the norms in [emojis at work](/guides/emojis-at-work-etiquette/).
