---
title: "Flag Emojis Explained: How They Work and Why Some Break"
description: "Flag emojis are built from pairs of letter codes, not single characters. Learn how they work, why Windows shows letters, and which flags exist or do not."
excerpt: "A flag emoji is two invisible letters that your device swaps for a picture. That design explains nearly every flag emoji problem you will run into."
pubDate: 2026-11-18
category: "Flags"
heroEmoji: "🏳️"
keyTakeaways:
  - "Country flag emojis are pairs of regional indicator letters that spell a two-letter region code, such as U plus S for the United States."
  - "England, Scotland and Wales use a different mechanism: a black flag followed by invisible tag characters."
  - "Windows does not include country flag artwork in its emoji font, so flags appear as two letters unless the app or browser supplies its own images."
  - "Which flags exist follows an international list of region codes, which is why some territories have a flag emoji and many regions and states do not."
  - "Unicode stopped accepting proposals for new flag emojis in 2022; new country flags are only added when a region receives an official code."
faqs:
  - q: "Why do flag emojis show up as letters on my computer?"
    a: "You are probably on Windows. Microsoft's emoji font does not include country flag images, so Windows displays the two regional indicator letters instead, such as US or JP. Some apps and browsers work around this by using their own emoji images. The flag is still there in the text and will display as a flag on a phone."
  - q: "How many flag emojis are there?"
    a: "There are roughly 270 in total. About 258 are country and territory flags built from letter pairs, with one more added in 2024 for Sark. Three are subdivision flags for England, Scotland and Wales, and eight are other flags such as the rainbow flag, pirate flag, chequered flag and white flag."
  - q: "Why is there no flag emoji for my state or region?"
    a: "Flag emojis are tied to an international list of two-letter country and territory codes. States, provinces and most regions do not have one, so they have no flag emoji. The only subdivisions with widely supported flags are England, Scotland and Wales, and Unicode has said it will not accept proposals for more."
  - q: "Is there a Northern Ireland flag emoji?"
    a: "No. England, Scotland and Wales have flag emojis, added in 2017, but Northern Ireland does not. It has had no official government flag of its own since 1972, and no sequence for it is on Unicode's recommended list. People commonly use the United Kingdom flag or the Ireland flag depending on context and identity."
  - q: "Why does a flag emoji count as more than one character?"
    a: "Because it is more than one character. A country flag is two regional indicator symbols, and each of those takes extra storage units in common text encodings. The rainbow flag is four code points and the England flag is seven. Apps that count by code units instead of visible symbols report surprisingly large numbers."
  - q: "Can I make a flag emoji by typing letters?"
    a: "Not with ordinary letters. Flags use special regional indicator letters, which are separate characters from A to Z. Some apps, including Slack and Discord, let you type a shortcode such as :flag-us: or :flag_us: and convert it for you. Otherwise use your emoji keyboard and search by country name."
related: ["flags-that-look-alike", "why-emojis-show-as-boxes", "how-to-type-emojis-on-any-device"]
keywords:
  - "how flag emojis work"
  - "regional indicator symbols"
  - "why flag emojis show as letters"
---

A country flag emoji is not a single character. It is a pair of special letters that spell a two-letter region code, and your device replaces the pair with a picture of the flag if it has one. The [United States flag](/emojis/flag-united-states/) is the letters U and S; the [Japan flag](/emojis/flag-japan/) is J and P. That one design decision explains why flags turn into letters on Windows, why some flags do not exist, and why deleting a flag sometimes leaves half of it behind.

## How country flags work: regional indicator pairs

Unicode contains 26 characters called **regional indicator symbols**, one for each letter from A to Z. They are not the normal Latin letters. They sit in their own block (U+1F1E6 through U+1F1FF) and exist for one purpose: to be combined in pairs.

When two regional indicators appear together and spell a recognized region code, software displays them as one flag:

| Flag | Region code | Code points |
|---|---|---|
| [Flag: Canada](/emojis/flag-canada/) | CA | U+1F1E8 U+1F1E6 |
| [Flag: Germany](/emojis/flag-germany/) | DE | U+1F1E9 U+1F1EA |
| [Flag: Brazil](/emojis/flag-brazil/) | BR | U+1F1E7 U+1F1F7 |
| [Flag: India](/emojis/flag-india/) | IN | U+1F1EE U+1F1F3 |
| [Flag: South Korea](/emojis/flag-south-korea/) | KR | U+1F1F0 U+1F1F7 |
| [Flag: United Kingdom](/emojis/flag-united-kingdom/) | GB | U+1F1EC U+1F1E7 |

The codes are the two-letter codes of the ISO 3166-1 standard, the same ones used in internet domains and on passports, as maintained for software in Unicode's CLDR data. Note that they are not always the obvious abbreviation: the United Kingdom is GB, Germany is DE (Deutschland), Spain is ES (España) and South Korea is KR.

### Why Unicode did it this way

When emoji were standardized in 2010, the Japanese carrier sets they came from contained only ten flags: Japan, South Korea, Germany, China, the United States, France, Spain, Italy, Russia and the United Kingdom. Encoding just those ten as characters would have invited an endless argument over which flags deserved to come next, and would have put the Unicode Consortium in the position of deciding what counts as a country.

The pair system avoids both problems. Unicode encoded 26 neutral letters and pointed to an existing international list. Which flags exist is decided by the list of region codes, and what each flag looks like is decided by each platform's designers. Unicode itself does not contain a single flag image. More of that background is in the [history of emoji](/guides/history-of-emoji/).

## Subdivision flags: England, Scotland and Wales

The United Kingdom has one region code, GB, so the pair system cannot produce flags for its constituent countries. In 2017, Emoji 5.0 added a second mechanism for them called an **emoji tag sequence**.

A tag sequence starts with the [black flag](/emojis/black-flag/) emoji, followed by a string of invisible **tag characters** that spell out a subdivision code, and ends with a special cancel tag:

- **England**: black flag + tags for `gbeng` + cancel tag
- **Scotland**: black flag + tags for `gbsct` + cancel tag
- **Wales**: black flag + tags for `gbwls` + cancel tag

That is seven code points for one flag. On a system that does not understand the sequence, the tags stay invisible and you see a plain black waving flag, which is why an England flag occasionally arrives as a mysterious black one.

In principle the same method could describe any subdivision in the ISO 3166-2 list, such as a US state or a Canadian province. In practice, only these three are on Unicode's list of sequences recommended for general support, and they are the only ones major platforms ship. There is no flag emoji for Northern Ireland, Texas, Catalonia, Quebec or Bavaria.

## The other flags: joined sequences and plain characters

The remaining flags in the [flags category](/categories/flags/) are not region flags at all.

**Single characters:**

- The [chequered flag](/emojis/chequered-flag/), used for racing and finishing.
- The [triangular flag](/emojis/triangular-flag/), a red pennant often used as a "red flag" warning sign in dating talk.
- The crossed Japanese flags, a holdover from the carrier sets.
- The [white flag](/emojis/white-flag/) for surrender and the black flag.

**Zero width joiner (ZWJ) sequences**, where two emoji are glued with an invisible joining character:

- The [rainbow flag](/emojis/rainbow-flag/) is a white flag joined to a rainbow.
- The [transgender flag](/emojis/transgender-flag/) is a white flag joined to the [transgender symbol](/emojis/transgender-symbol/).
- The [pirate flag](/emojis/pirate-flag/) is a black flag joined to a [skull and crossbones](/emojis/skull-and-crossbones/).

When a device does not support one of these, it shows the parts separately: a white flag next to a rainbow, for example. That fallback is deliberate and is the general behavior described in [why emojis show as boxes](/guides/why-emojis-show-as-boxes/).

## Why Windows shows letters instead of flags

This is the most common flag emoji complaint. On Windows 10 and Windows 11, country flags typed or pasted into most programs appear as two capital letters in a simple outlined style: `US`, `FR`, `BR`.

The cause is the font. Microsoft's system emoji font, Segoe UI Emoji, includes images for other emoji but not for country flags. With no flag image available, Windows falls back to showing each regional indicator as its letter. Microsoft has not given a detailed public explanation. The common assumption is that it avoids the political disputes that flags can bring, but that is an inference, not a stated policy.

What you see therefore depends on the program:

| Where | What you usually see on Windows |
|---|---|
| Notepad, Word, File Explorer, most desktop apps | Two letters |
| Chrome and Edge on a site that uses system fonts | Two letters |
| Firefox | Flags, because Firefox bundles its own emoji font for this case |
| Sites and apps with their own emoji images (X, Discord, Slack, WhatsApp) | Flags, drawn by the app |
| The Windows emoji picker (Windows key + period) | No country flags offered |

Non-country flags such as the rainbow flag and pirate flag do display on Windows, because the font includes those.

Nothing is wrong with the text itself. If you copy the two letters from Notepad into a message and send it to a phone, the recipient sees the flag. If you need to see flags on Windows, read the text in Firefox or in an app that supplies its own images. For typing them, see [how to type emojis on any device](/guides/how-to-type-emojis-on-any-device/).

## Which flags exist, and the odd ones on the list

Because the list of flags follows region codes instead of a definition of "country," it contains entries that surprise people.

**Territories and dependencies with their own code** have a flag emoji, including [Puerto Rico](/emojis/flag-puerto-rico/), Guam, Greenland, Hong Kong, Gibraltar and Bermuda. The [Palestinian Territories](/emojis/flag-palestinian-territories/), Taiwan and Kosovo have flag emojis because they have codes that software uses, regardless of their diplomatic status. Unicode's data names each one by region and takes no position on sovereignty.

**Organizations** with reserved codes are included: the European Union (EU) and the United Nations (UN).

**Places almost nobody lives** have flags too: Antarctica, Bouvet Island, and Heard and McDonald Islands.

**Duplicates** are a side effect. Some territories have a region code but no distinct flag, so platforms show the flag of the governing country. Bouvet Island and Svalbard and Jan Mayen display Norway's flag. The US Outlying Islands display the US flag. Heard and McDonald Islands display Australia's. On most platforms, Clipperton Island and Saint Martin display the French tricolor. They look identical to the [Norway-style](/guides/flags-that-look-alike/) or [France](/emojis/flag-france/) flags in your keyboard, but they are different characters, which matters if you search or filter by flag.

**Exceptions to the rule** are a handful of codes that are reserved in the ISO standard without being full entries, such as Ascension Island, Tristan da Cunha, the Canary Islands, and Ceuta and Melilla. The newest flag came this way: Sark, one of the Channel Islands, received a reserved code (CQ), and its flag was added in Emoji 16.0 in 2024.

**Regional visibility** can differ. Platforms decide what their keyboards show in each market. The best-documented case is that Apple devices set to the China mainland region do not display the Taiwan flag emoji.

## Why new flags are no longer being added

In 2022 the Unicode Consortium announced that it would stop accepting proposals for new flag emoji in any category. Its explanation covered several points: flags are among the least used emoji relative to how many there are; adding one group's flag invites requests from every comparable group; and a flag, once added, can never be removed even if the real flag changes or the entity ceases to exist.

Two paths remain open:

1. **New region codes.** When a country or territory is given an official two-letter code, its flag becomes a valid sequence automatically, and platforms add artwork in a later update.
2. **Design changes.** When a country changes its flag, no new emoji is needed. The code stays the same and each vendor updates its picture, on its own schedule. For a while after any change, different phones may show different designs for the same flag.

So a campaign for a regional or cause-based flag emoji is very unlikely to succeed today. The general rules are in [how new emojis get approved](/guides/how-new-emojis-get-approved/).

## Common flag emoji problems and what causes them

**Half a flag is left after pressing backspace.** Some text fields delete one code point at a time instead of one visible symbol. Deleting half of a flag leaves a single regional indicator, shown as a boxed letter. Press backspace again.

**Several flags in a row turn into the wrong flags.** Regional indicators are paired off from left to right. If one stray indicator is inserted or deleted in a row of flags with no spaces, every pair after it shifts by one letter, and the rest of the line becomes different flags or loose letters. Putting a space between flags prevents this.

**The flag looks different on another phone.** Each vendor draws its own. Some draw flags as waving cloth, some as flat rectangles or circles, and shades of blue and red vary. That can make similar flags harder to tell apart, a problem covered in [flags that look alike](/guides/flags-that-look-alike/). The broader design differences are in [iPhone vs Android emojis](/guides/iphone-vs-android-emojis/).

**A character counter says the flag is 4, 7 or 14 characters.** A country flag is two code points, and each takes two units in the UTF-16 encoding many systems count with. Subdivision flags are much longer. If a form has a tight limit, flags will use more of it than they appear to.

**A screen reader reads "flag: United States."** That is correct behavior; flags are announced by their region name. A username decorated with ten flags is tedious to listen to, a point made in [emoji accessibility and screen readers](/guides/emoji-accessibility-screen-readers/).

## Using flag emojis well

A flag is a blunt symbol, and a few habits avoid most misunderstandings.

- **Do not use flags for languages.** The [Spain flag](/emojis/flag-spain/) does not represent Spanish speakers in [Mexico](/emojis/flag-mexico/), and the UK flag does not represent English speakers in [Australia](/emojis/flag-australia/) or [Nigeria](/emojis/flag-nigeria/). Write the language name.
- **Check look-alikes before posting.** The [Ireland flag](/emojis/flag-ireland/) and the Ivory Coast flag are mirror images, and the mix-up is common every March.
- **Remember that Windows users may see letters.** If the flag carries the meaning of your message, add the country name.
- **Be aware of context.** Flags in a bio or display name are read as statements of identity or political position, especially for flags tied to current conflicts, such as [Ukraine](/emojis/flag-ukraine/). That may be exactly what you intend; it is worth being deliberate about it. Regional readings are discussed in [emojis across cultures](/guides/emojis-across-cultures/).

If you want to test how well you know them, try the [flag emoji quiz](/flag-emoji-quiz/).

## Quick reference: the four kinds of flag emoji

| Kind | How it is built | Examples | Fallback when unsupported |
|---|---|---|---|
| Country and territory flags | Two regional indicator letters | United States, Japan, Puerto Rico, EU | The two letters |
| Subdivision flags | Black flag + invisible tag letters + cancel tag | England, Scotland, Wales | A plain black flag |
| Joined flags | Flag + zero width joiner + second emoji | Rainbow, transgender, pirate | The two emoji side by side |
| Single-character flags | One code point | Chequered, triangular, white, black | An empty box |

The rule of thumb: if a flag looks wrong, it is almost always being shown in its fallback form. Letters mean the device has no artwork for that country flag, a black flag means a subdivision sequence was not recognized, and two separate emoji mean a joined flag was not recognized. The text is intact in every case, and it will display correctly on a device that supports it.
