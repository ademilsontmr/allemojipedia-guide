---
title: "iPhone vs Android Emojis: Why They Look Different"
description: "iPhone vs Android emojis: why the same emoji looks different on Apple, Google, Samsung and Microsoft devices, which ones cause mix-ups, and what gets lost."
excerpt: "The same emoji is drawn differently by Apple, Google, Samsung and Microsoft. Here is why, which designs cause misunderstandings, and what breaks in transit."
pubDate: 2026-11-18
category: "Platforms"
heroEmoji: "📱"
keyTakeaways:
  - "An emoji is sent as a code, not a picture, and the receiving device draws it with its own font."
  - "Unicode standardizes the code and a short name; Apple, Google, Samsung and Microsoft each design the artwork."
  - "Designs have converged since the mid-2010s, but faces with subtle expressions still read differently across platforms."
  - "Some apps, including WhatsApp, use their own emoji artwork instead of the phone's."
  - "New emojis reach different phones months apart, which is when boxes and broken sequences appear."
faqs:
  - q: "Why do emojis look different on iPhone and Android?"
    a: "Because an emoji travels as a Unicode code point, not an image. The phone that receives it looks up that code in its own emoji font and draws the result. Apple's font, Google's Noto Color Emoji and Samsung's set are separate pieces of artwork made by different design teams, so the same code produces three different pictures."
  - q: "Can I get iPhone emojis on an Android phone?"
    a: "Not through any official setting. Android's system emoji font belongs to the phone maker, and Apple does not license its artwork. Some keyboard and font apps claim to add Apple-style emojis, but they usually change only what you see inside that app or keyboard. What your recipients see is always decided by their own device."
  - q: "Do Samsung emojis look different from other Android emojis?"
    a: "Yes. Samsung Galaxy phones use Samsung's own emoji designs in One UI, while Google Pixel phones and many other Android brands use Google's Noto Color Emoji. A message sent between a Galaxy and a Pixel is therefore drawn in two different styles, even though both run Android."
  - q: "Why does an emoji from an iPhone show as a box on my Android phone?"
    a: "Your phone's emoji font does not yet include that character. It usually happens with emojis from the latest Unicode release, which arrive on different brands at different times. Updating the phone's software, and the messaging app, normally adds them. Until then the sender has no way to make it appear."
  - q: "Do emojis look the same in WhatsApp on iPhone and Android?"
    a: "Close, but not for the reason people assume. WhatsApp on Android and on the web draws its own emoji set, which is modeled closely on Apple's style, while WhatsApp on iPhone uses Apple's system emojis. The result is that WhatsApp chats look more consistent across phones than regular text messages do."
  - q: "Which emojis are most often misread between platforms?"
    a: "Faces with ambiguous mouths cause the most trouble, especially the grimacing face and the beaming face with smiling eyes, along with the smirk, the flushed face and the face with rolling eyes. Hand gestures and objects are generally safe. If the tone of a message depends on one subtle face, add a few words to make it unmistakable."
related: ["why-emojis-show-as-boxes", "how-to-type-emojis-on-any-device", "emoji-kitchen-guide"]
keywords:
  - "iphone vs android emojis"
  - "why emojis look different on android"
  - "apple vs google emojis"
---

Emojis look different on iPhone and Android because what travels between phones is a code, not a picture. Each device draws that code using its own emoji font, and Apple, Google, Samsung and Microsoft each design their own artwork. The meaning is supposed to be the same everywhere, but small differences in expression, color and detail can shift the tone of a message.

## How an emoji gets from one phone to another

When you tap the [red heart](/emojis/red-heart/), your phone does not attach a small image. It inserts a character, the same way it inserts the letter A. That character has a number assigned by the Unicode Consortium, the nonprofit that maintains the standard for text on computers. The red heart is U+2764, usually followed by an invisible character that asks for the color version.

The message is sent as those numbers. The receiving phone reads them, opens its emoji font, and displays whatever artwork that font has for U+2764. An iPhone shows Apple's heart. A Pixel shows Google's. A Galaxy shows Samsung's.

Unicode publishes a code point, a short name such as "face with rolling eyes", and a simple black-and-white reference drawing. It does not dictate color, style or exact expression. That freedom is why the designs differ, and the shared name is why they usually stay close enough to mean the same thing. The [full emoji list on unicode.org](https://unicode.org/emoji/charts/full-emoji-list.html) shows the major vendors' designs side by side.

## Who draws what

| Vendor | Emoji font or set | Where you see it | Style in brief |
|---|---|---|---|
| Apple | Apple Color Emoji | iPhone, iPad, Mac, Apple Watch | Glossy, detailed, shaded |
| Google | Noto Color Emoji | Pixel phones, many Android brands, ChromeOS, Gmail and other Google web apps | Flat, bold shapes, simple gradients |
| Samsung | Samsung's One UI emoji | Galaxy phones, tablets and watches | Soft gradients; historically the most idiosyncratic set |
| Microsoft | Segoe UI Emoji (Fluent designs) | Windows, Teams, Office | Soft, rounded Fluent designs on Windows 11; flat with heavy black outlines on Windows 10 |
| WhatsApp | Its own set | WhatsApp on Android and web | Closely modeled on Apple's look |
| X (Twitter) | Twemoji | The X website; the open-source set is also used by other apps, including Discord | Flat, minimal, no outlines |
| Meta | Facebook's set | Facebook on the web and in some of Meta's apps | Glossy with strong gradients |

Two details in that table explain a lot of everyday confusion.

First, **"Android emojis" are not one thing.** A Pixel and a Galaxy both run Android but show different artwork. When someone says an emoji "looks weird on Android", ask which phone.

Second, **apps can override the phone.** WhatsApp on a Galaxy does not show Samsung's emojis; it shows WhatsApp's. Discord shows Twemoji on every platform. So the same emoji can look three different ways on a single phone depending on which app is open. Our [WhatsApp guide](/guides/whatsapp-emoji-meanings/) covers how that plays out in chats.

## The emojis that have caused real mix-ups

Most emojis translate cleanly: a pizza is a pizza in every font. Trouble comes from faces, where a slightly different mouth changes the emotion, and from a handful of objects whose designs diverged.

### Grimace or grin

The best-documented case is the [beaming face with smiling eyes](/emojis/beaming-face-with-smiling-eyes/). For years Apple drew it with a wide, clenched row of teeth that many people read as a grimace, while Google and others drew an obviously happy face. A 2016 study by the GroupLens research lab at the University of Minnesota found that people rated Apple's version as mildly negative and other vendors' versions as positive, and that people disagreed about the same emoji even within one platform. Apple later redrew it to look clearly cheerful. The actual [grimacing face](/emojis/grimacing-face/) remains easy to confuse with it at small sizes.

### The pistol that became a water gun

In 2016 Apple changed the pistol emoji from a realistic revolver to a green toy [water pistol](/emojis/water-pistol/). For roughly two years, an iPhone user could send a squirt gun and have it arrive on other platforms as a handgun. Google, Samsung, Microsoft and the others switched to toy designs in 2018, which ended the mismatch. It is the clearest example of a single vendor's design choice changing what a message meant on arrival.

### Samsung's outliers

Samsung's older designs departed from everyone else's more often. Its [face with rolling eyes](/emojis/face-with-rolling-eyes/) once looked mildly pleased rather than exasperated, and its cookie was famously drawn as a pair of saltine crackers instead of a chocolate chip cookie. Samsung redesigned its set in 2018 and brought most of these into line. If someone tells you a Samsung emoji means something odd, they may be remembering that era.

### Google's blobs and the burger

Until 2017, Google's faces were not circles at all but gumdrop-shaped "blobs". They were charming and frequently did not match the expression on other platforms. Google replaced them with round faces in Android 8.0. The same year, a widely shared complaint pointed out that Google's [hamburger](/emojis/hamburger/) had the cheese underneath the patty; Google's CEO joked about fixing it, and the next release moved the cheese on top.

### Details that carry meaning

A few design changes altered what an emoji could be used for:

- Apple removed the blood from the [syringe](/emojis/syringe/) in 2021 so it could stand for vaccination as well as blood donation, and other vendors made similar changes.
- Apple gave the [face with medical mask](/emojis/face-with-medical-mask/) smiling eyes in 2020; before that it looked ill rather than cautious.
- The [woman dancing](/emojis/woman-dancing/) is a flamenco-style dancer in a red dress on most platforms today, but earlier Google and Samsung versions looked quite different, which blunted its use as shorthand for a night out.
- The [peach](/emojis/peach/) was briefly redrawn by Apple in a 2016 beta to look more like the fruit and less like a backside. After a public outcry Apple reverted it before release.

## Why the designs have converged

If you compare emoji sets from 2014 with today's, the direction is obvious: vendors have moved toward one another. The pistol, the blobs, the cookie and the grimace were all resolved by one company changing its artwork to match the consensus.

Vendors have a practical reason. An emoji that reads differently on arrival is a failed message, and users blame the phone. Designers at the major companies now check proposed artwork against the other sets, and the Unicode Consortium's documentation for new emojis includes guidance about what the image should and should not imply.

Convergence is not uniformity. Each set keeps its own palette and rendering style, and subtle faces still vary. The [smirking face](/emojis/smirking-face/), [flushed face](/emojis/flushed-face/), [pleading face](/emojis/pleading-face/) and [slightly smiling face](/emojis/slightly-smiling-face/) all sit close enough to another emotion that a different eyebrow angle or blush changes how warm, sly or sarcastic they feel. Those are the same faces that cause misreadings between people on the same platform, as our guide to [the most misread emojis in texting](/guides/emoji-meanings-in-texting/) explains.

## When new emojis arrive on each platform

The Unicode Consortium approves a new batch of emojis roughly once a year, typically in September. Nothing appears on phones that day. Each vendor has to draw the new characters and ship them in a software update, and their schedules differ.

- **Google** usually publishes its Noto designs soon after approval and brings them to Pixel phones within months. Many Android apps can also show new emojis on older Android versions through a compatibility library, so support inside an app can run ahead of the system keyboard.
- **Apple** has in recent years added each batch in a mid-cycle iOS update in the months after approval, often the following spring, rather than in the big autumn release.
- **Samsung** bundles new emojis with One UI updates, so timing depends on when a given Galaxy model receives that version.
- **Microsoft** adds them in Windows 11 updates, typically later than the phone makers.

The practical consequence is a gap of several months each year when a new emoji exists on some phones and not others. During that gap, a recipient on an older system sees a box, a question mark, or nothing. Our guide to the [new emojis for 2026](/guides/new-emojis-2026/) tracks the current batch, and [how new emojis get approved](/guides/how-new-emojis-get-approved/) explains the process behind it.

## What gets lost between phones

Different artwork is the mild case. Sometimes part of the emoji fails to arrive at all.

- **Missing characters.** If the receiving font lacks an emoji, it shows a placeholder box, often called tofu. See [why emojis show as boxes](/guides/why-emojis-show-as-boxes/) for fixes.
- **Sequences that split apart.** Many emojis are several characters glued together with an invisible joiner: families, couples, professions, and flags like the [rainbow flag](/emojis/rainbow-flag/), which is a white flag joined to a rainbow. A device that knows the parts but not the combination shows the pieces side by side.
- **Skin tones.** A device too old to support the tone modifiers shows the yellow emoji followed by a colored square. This is rare on current phones. Our [skin tones guide](/guides/emoji-skin-tones-explained/) has the details.
- **Flags on Windows.** Microsoft's font has no country flags, so they appear as two-letter codes on many Windows apps. That is a Windows limitation, covered in [flag emojis explained](/guides/flag-emojis-explained/).
- **Things that are not emojis.** Apple's Genmoji and Memoji stickers and Google's Emoji Kitchen blends are images, not Unicode characters. They arrive as pictures, or do not arrive inline at all, depending on the app and the messaging protocol. The [Emoji Kitchen guide](/guides/emoji-kitchen-guide/) goes into this.
- **Reactions.** Tapping a reaction on a message in iMessage or Google Messages relies on both sides supporting the same feature. Between iPhone and Android this has improved considerably since Apple adopted RCS in iOS 18, but on plain SMS, or with older software on either end, a reaction can still arrive as a separate line of text describing it.
- **Animation and effects.** Animated emoji in apps such as Telegram, and full-screen effects in iMessage, are features of those apps. They do not carry over to other apps or to SMS.

## Can you change which emojis you see?

On an iPhone, no. Apple Color Emoji is the only system emoji font and there is no setting to replace it.

On Android, it depends on the manufacturer. Some brands allow system font changes through a theme store, and a few of those themes include a different emoji set; others do not expose the option. Replacing the system emoji font by other means generally requires modifying the phone in ways that are unsupported and can break with updates. Keyboard apps that advertise "iPhone emojis" typically change only the pictures on the keyboard itself.

Whatever you do on your own device has no effect on recipients. The picture is always chosen at the receiving end. The only way to control exactly what someone sees is to send an image, such as a sticker or a screenshot, rather than an emoji.

## How to check what the other person will see

1. **Look the emoji up.** Emoji reference pages, including the ones on this site, show the designs from the major vendors next to each other. Start from a category such as [smileys and emotion](/categories/smileys-and-emotion/) if you are browsing.
2. **Think about the app, not just the phone.** A message in WhatsApp or Discord uses that app's set on every device. A regular text message uses the phone's own.
3. **Be wary of brand-new emojis.** For the first several months after a release, assume some recipients will see a box.
4. **Do not hang the meaning on a subtle face.** If the difference between friendly and sarcastic rests on one emoji, add words.

## A rule of thumb for cross-platform messages

Use this table when the tone matters, for example with a client, a new match, or a family group spread across different phones.

| Situation | Safe choice | Riskier choice |
|---|---|---|
| Showing you are happy | Grinning face with smiling eyes, red heart | Grimace-adjacent toothy faces |
| Softening a request | A plain smile plus a clear sentence | A lone smirk or upside-down face |
| Using this year's new emoji | Wait a few months, or add words | Sending it alone as the whole message |
| Family and couple emojis with mixed skin tones | Fine on updated phones | Older devices may split them |
| Flags to a Windows user | Add the country name | Flag alone |
| Custom stickers, Genmoji, Emoji Kitchen | Apps that show images inline | SMS and text-only fields |

The short version: objects, hands and hearts travel well; subtle faces and anything new travel less well; and anything that is really an image depends on the app more than on the phone.
