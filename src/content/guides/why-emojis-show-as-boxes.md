---
title: "Why Emojis Show as Boxes or Question Marks, and the Fix"
description: "Why emojis appear as empty boxes, question marks, odd symbols or split into pieces on your phone or PC, what each symptom means, and how to fix every case."
excerpt: "An empty box, a question mark or an emoji broken into parts each point to a different cause. Match your symptom to the reason and the fix in this guide."
pubDate: 2026-11-18
category: "Platforms"
heroEmoji: "⬜"
keyTakeaways:
  - "An empty box or boxed question mark means your device has no picture for that character, usually because the emoji is newer than your software."
  - "An emoji split into two or three pieces is a joined sequence that your device only partly supports."
  - "Garbled letters or plain question marks point to a text encoding or database problem, not a missing font."
  - "Updating the operating system is the main fix on iPhone, Mac and Windows; on Android, app and system component updates also help."
  - "Senders can avoid the problem by not relying on emojis released within the last year or two."
faqs:
  - q: "Why do I see a box with a question mark instead of an emoji on my iPhone?"
    a: "The sender used an emoji that your version of iOS does not include. iPhones receive new emojis only through iOS updates, usually a point release in spring. Go to Settings, General, Software Update and install the latest version your phone supports. If your iPhone can no longer be updated, newer emojis will keep appearing as boxes."
  - q: "Why do flag emojis show as two letters on my Windows computer?"
    a: "Windows' built-in emoji font does not include country flags, so Windows shows the two-letter country code that the flag is made from, such as US or JP. Some applications bundle their own emoji font and show the flags anyway, which is why a flag may appear in one program and not another."
  - q: "Can I see what a box emoji was supposed to be?"
    a: "Usually, yes. The character is still in the text even though your device cannot draw it. Copy the box and paste it into the search field of an emoji reference site or a search engine on an up-to-date device or browser, and it will identify the emoji. Asking the sender also works."
  - q: "Why does one emoji appear as two separate emojis?"
    a: "Many emojis are built by joining simpler ones with an invisible connector. A heart on fire is a red heart joined to fire, and a mixed skin tone handshake is two hands joined together. A device that knows the parts but not the combination shows the parts side by side."
  - q: "Why do emojis look fine in WhatsApp but show as boxes in other apps?"
    a: "Some apps carry their own emoji artwork and update it with the app, while others rely on the emoji font built into your operating system. An app with its own set can display emojis that your phone's system font does not have yet, so support differs from app to app on the same device."
  - q: "Why did my emoji turn into a row of question marks after I saved it?"
    a: "The website or app stored your text in a format that cannot hold emoji characters, so each one was replaced with a question mark when saving. This is a problem on the service's side, commonly an older database character setting. You cannot fix it yourself other than by leaving the emoji out."
related: ["iphone-vs-android-emojis", "flag-emojis-explained", "new-emojis-2026"]
---

An emoji shows as a box when your device receives a character it has no picture for. The most common reason is that the sender's phone has a newer emoji set than yours; other causes are an emoji sequence your system only partly understands, a font that lacks emojis, or text that was damaged by a wrong encoding somewhere between sender and screen. Each cause produces a recognizable symptom, so the fastest route to a fix is to identify which kind of broken emoji you are looking at.

## Match the symptom to the cause

| What you see | What it means | Usual fix |
|---|---|---|
| Empty rectangle, or a box with a question mark or X inside | No font on your device has a glyph for this character | Update the operating system or the app |
| One emoji shown as two or three separate emojis | A joined (ZWJ) sequence your device does not support | Update; the sender can use a simpler emoji |
| An emoji followed by a colored square | Skin tone modifier not supported for that emoji | Update |
| Two capital letters where a flag should be | The font has no flag images (standard on Windows) | Use an app or browser that bundles its own emoji font |
| A black-and-white symbol instead of a color emoji | Text presentation was chosen instead of emoji presentation | Reinsert from an emoji picker; choose an emoji-capable font |
| Garbled text such as ðŸ˜€ | UTF-8 text was decoded with the wrong encoding | The site or file must be read as UTF-8 |
| Plain question marks: ?? or ???? | The emoji was destroyed when stored or sent through a system that cannot hold it | The service must fix its storage; resend the message |
| A black diamond with a question mark (�) | Invalid or cut-off character data | Resend; the software has a bug in how it cuts text |

The first three rows cover the great majority of cases for ordinary phone users. The lower rows are mostly problems with websites, documents and older software.

## The usual reason: the emoji is newer than your device

The Unicode Consortium approves a new batch of emojis roughly once a year. Each company then has to draw its own versions and ship them in a software update, which takes months. The process is described in [how new emojis get approved](/guides/how-new-emojis-get-approved/). During the gap, and forever on devices that no longer get updates, a newer emoji sent to an older device has nothing to display.

What the fallback looks like depends on the system. Apple devices typically show a question mark in a box. Android and Windows typically show an empty rectangle, sometimes with an X. This placeholder is nicknamed "tofu" among font designers, and Google's Noto font family takes its name from the goal of "no tofu."

The table below shows recent emoji versions, examples from each, and the iOS release that added them. iOS is a useful yardstick because every iPhone on the same version has the same emojis.

| Emoji version | Year approved | Examples | Arrived on iPhone in |
|---|---|---|---|
| 13.1 | 2020 | [Heart on fire](/emojis/heart-on-fire/), [face in clouds](/emojis/face-in-clouds/), [face with spiral eyes](/emojis/face-with-spiral-eyes/) | iOS 14.5 |
| 14.0 | 2021 | [Melting face](/emojis/melting-face/), [biting lip](/emojis/biting-lip/), [heart hands](/emojis/heart-hands/) | iOS 15.4 |
| 15.0 | 2022 | [Shaking face](/emojis/shaking-face/), [pink heart](/emojis/pink-heart/), [light blue heart](/emojis/light-blue-heart/) | iOS 16.4 |
| 15.1 | 2023 | [Head shaking horizontally](/emojis/head-shaking-horizontally/), phoenix, lime | iOS 17.4 |
| 16.0 | 2024 | [Face with bags under eyes](/emojis/face-with-bags-under-eyes/), fingerprint, shovel | iOS 18.4 |
| 17.0 | 2025 | Distorted face, fight cloud, orca | An iOS 26 update in 2026 |

If the box arrived in a message from someone who just updated their phone, the newest row is the likely culprit. The current batch is covered in [new emojis in 2026](/guides/new-emojis-2026/).

Android is less uniform. Google's Pixel phones, Samsung phones and other brands each ship their own emoji font on their own schedule, and Samsung in particular draws its own designs, which tend to arrive with its One UI updates. Since Android 12, Google has been able to update emoji fonts separately from full operating system upgrades, and many apps use a Google-provided compatibility library that lets them display recent emojis on older Android versions. The result is that the same Android phone may show a new emoji correctly in one app and as a box in another.

Windows adds emojis through Windows 11 updates. Windows 10 stopped at an older set and reached the end of regular support in October 2025, so it will keep showing boxes for newer emojis in programs that rely on the system font.

## Emojis that split into pieces

Many emojis are not single characters. They are sequences: two or more existing emojis glued together with an invisible character called a zero width joiner, or ZWJ. A system that recognizes the full sequence draws one picture. A system that does not falls back to drawing each part, which is why the result looks like a small rebus.

Typical examples:

- [Heart on fire](/emojis/heart-on-fire/) appears as a red heart next to fire.
- [Mending heart](/emojis/mending-heart/) appears as a red heart next to an adhesive bandage.
- [Face exhaling](/emojis/face-exhaling/) appears as a face next to a puff of wind.
- The [transgender flag](/emojis/transgender-flag/) appears as a white flag next to the transgender symbol.
- The [pirate flag](/emojis/pirate-flag/) appears as a black flag next to a skull and crossbones.
- The [rainbow flag](/emojis/rainbow-flag/) appears as a white flag next to a rainbow.
- A mixed skin tone [handshake](/emojis/handshake/) appears as two separate hands.
- Family emojis appear as a row of individual people.
- Profession emojis appear as a person next to an object, such as a person and a rocket for an astronaut.

This fallback is deliberate. Showing the parts preserves most of the meaning, which is better than a blank box. If you see a pairing that looks oddly specific, like a bird next to a black square, you are almost certainly looking at a sequence your device does not know.

### Skin tones and the stray colored square

Skin tones work in a similar way: the base emoji is followed by a modifier character. When the pairing is unsupported, you see the yellow emoji followed by a small colored square or a box. All current systems support tones on single-person emojis, so today this mostly happens with newer multi-person emojis. The details are in the guide to [emoji skin tones](/guides/emoji-skin-tones-explained/).

## Flags that appear as letters

A country flag emoji is made of two special letter characters, called regional indicators, that spell the country's two-letter code. The [United States flag](/emojis/flag-united-states/) is the indicators for U and S; the [flag of Japan](/emojis/flag-japan/) is J and P. Fonts that include flag artwork replace the pair with a flag. Fonts that do not simply show the letters.

Microsoft's emoji font for Windows has never included country flags, so in programs that rely on it, including Chromium-based browsers in most configurations, you see "US" or "JP" in small capitals. Firefox on Windows bundles its own emoji font and does show flags, and so do apps such as WhatsApp desktop or Discord that draw emojis as images. This is a design choice on Microsoft's part, not a fault with your computer, and no setting changes it.

The flags of England, Scotland and Wales use a different mechanism, a black flag followed by hidden tag characters, and on unsupported systems they appear as a plain black flag. Full details are in [flag emojis explained](/guides/flag-emojis-explained/).

## Black-and-white symbols instead of color emojis

Some characters existed as plain text symbols long before emoji: the heart ❤, the [smiling face](/emojis/smiling-face/) ☺, the [check mark](/emojis/check-mark/) ✔, the sun, the telephone. These have two presentations, a monochrome text style and a color emoji style. An invisible character called variation selector 16 requests the emoji style.

If that selector is missing or gets stripped, for example when text passes through a form that removes "invisible" characters, the [red heart](/emojis/red-heart/) can show up as a small black heart outline. The fix is to delete it and insert it again from the emoji keyboard or picker. In documents, also check the font: applying a text font that contains its own plain heart symbol forces the monochrome version.

## Garbled text, question marks and the diamond

These symptoms are not about missing pictures. The emoji's data was damaged in transit or storage.

**Strings like ðŸ˜€ or â¤ï¸.** Emojis are stored as several bytes in the UTF-8 encoding. If software reads those bytes using an older single-byte encoding, each byte becomes a separate accented letter or symbol. This garbling is called mojibake. You see it on web pages that do not declare their encoding, in CSV files opened in a spreadsheet with the wrong import setting, and in old email software. As a reader you can sometimes fix it by changing the encoding in the import dialog to UTF-8. Otherwise the publisher has to fix it.

**Plain question marks.** When a system cannot store a character at all, it often substitutes "?". A classic cause is a MySQL database using the older three-byte `utf8` character set, which cannot hold emojis; the four-byte `utf8mb4` setting is required. Once the emoji has been saved as "?", the original is gone and cannot be recovered from that copy.

**The replacement character �.** This black diamond appears when the bytes are not valid text. A common cause is software that shortens text to a fixed length and cuts an emoji in half.

**Text messages.** SMS can carry emojis, but old handsets, some carrier gateways and some automated business messaging systems convert or drop them, leaving question marks or blanks. Messages sent through internet-based services such as iMessage, RCS or WhatsApp do not have this limitation.

## How to fix missing emojis on each device

### iPhone and iPad

1. Open Settings, then General, then Software Update, and install the newest version offered.
2. New emojis usually arrive in a spring point release, not the big autumn release, so a phone that is "up to date" in October may still gain emojis in March or April.
3. There is no way to add emojis to an iPhone separately from iOS. If your model no longer receives updates, newer emojis will remain boxes.

### Android

1. Install system updates: Settings, then System or Software update. The wording varies by manufacturer.
2. Install Google Play system updates, found under Settings in the Security or About sections on most phones. These can deliver newer emoji fonts on Android 12 and later.
3. Update the app where you see the box, and update your keyboard app. Gboard and messaging apps often gain emoji support through the Play Store.
4. If only one app shows boxes, the issue is that app's emoji support, not your phone.
5. Avoid font-replacement tricks that require rooting the phone. They can break banking apps and system updates.

### Windows

1. Run Windows Update. Windows 11 feature updates carry the new emoji font.
2. For flags, use Firefox or an app that draws its own emojis.
3. On Windows 10, expect boxes for recent emojis in most desktop programs.

### Mac

1. Open System Settings, then General, then Software Update. macOS gets new emojis in the release that pairs with the matching iOS update.

### Linux

1. Install a color emoji font. On Debian and Ubuntu the package is `fonts-noto-color-emoji`; other distributions have an equivalent Noto Color Emoji package.
2. Refresh the font cache with `fc-cache -f` and restart the application.
3. Terminal emulators vary widely in emoji support, so a box in the terminal may not mean a box elsewhere.

### In documents and design software

Emojis in a PDF, slide deck or design file depend on the fonts available where the file is opened or exported. If an emoji turns into a box after export, embed fonts in the export settings or convert the emoji to an image. Many print workflows cannot handle color fonts at all.

## If you are the sender, or you run a website

**For anyone sending messages:**

- Emojis released in the past year or two will be boxes for part of any large audience. For invitations, announcements and anything you send to customers, use established emojis. This matters most in [marketing messages](/guides/emojis-in-marketing/).
- Do not let a new emoji carry essential meaning. Put the information in words.
- Mixed skin tone pairs, families and profession emojis are the most fragile. Simple faces and objects are the most durable.
- If someone tells you they see a box, tell them the emoji's name instead of resending it.
- Remember that even when an emoji displays, it may be drawn differently on the other person's phone. See [iPhone vs Android emojis](/guides/iphone-vs-android-emojis/).

**For site and app owners:**

- Serve every page as UTF-8 and declare it with `<meta charset="utf-8">`.
- Use a database character set that can store four-byte characters, such as `utf8mb4` in MySQL.
- Never truncate text by bytes or by UTF-16 code units; cut at whole characters so emojis and sequences stay intact.
- Do not strip zero width joiners or variation selectors when sanitizing input.
- List emoji fonts in your CSS font stack, for example Apple Color Emoji, Segoe UI Emoji and Noto Color Emoji, or ship an emoji web font or image set if consistent display matters.

## Quick diagnosis checklist

- **Box or boxed question mark:** your device lacks the emoji. Update the system, then the app.
- **Two or three emojis where one was intended:** an unsupported sequence. Update, or read the parts as a clue.
- **Emoji plus colored square:** an unsupported skin tone pairing.
- **Two letters:** a flag on a system without flag artwork, almost always Windows.
- **Monochrome symbol:** the emoji lost its color selector or a text font was applied.
- **Accented gibberish:** wrong text encoding on a page or file.
- **Plain question marks:** the emoji was lost in storage or over SMS and must be resent.
- **Works in one app, not another:** the apps use different emoji sets; update the one that fails.
- **Want to know what it was:** copy the box and paste it into a search on an up-to-date device, or check how you would insert it yourself with [how to type emojis on any device](/guides/how-to-type-emojis-on-any-device/).
