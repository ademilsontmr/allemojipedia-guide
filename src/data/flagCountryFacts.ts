export type FlagCountryFact = {
  iso: string;
  capital: string;
  demonym: string;
  languages: string;
  note: string;
};

/** slug without "flag-" prefix is not used; keys are full emoji slugs. */
const ROWS = `
flag-afghanistan|AF|Kabul|Afghan|Dari and Pashto|National holidays, cricket, and diaspora WhatsApp threads use 🇦🇫 more than sports-only chats.
flag-albania|AL|Tirana|Albanian|Albanian|Double-headed eagle pride, Euro football nights, and family chats in the Albanian diaspora.
flag-algeria|DZ|Algiers|Algerian|Arabic and Tamazight|Desert travel, Rai music, and AFCON football posts tag 🇩🇿.
flag-american-samoa|AS|Pago Pago|American Samoan|Samoan and English|US territory in Polynesia — NFL combine stories and island travel, not independent World Cup hosting.
flag-andorra|AD|Andorra la Vella|Andorran|Catalan|Pyrenees microstate; ski-season and duty-free shopping captions, not a coastal beach flag.
flag-angola|AO|Luanda|Angolan|Portuguese|Oil-city Luanda nightlife, kizomba, and PALOP community posts.
flag-anguilla|AI|The Valley|Anguillian|English|Tiny Caribbean island; sailing and beach-holiday flags, easy to mix up with other UK overseas territories.
flag-antarctica|AQ|n/a|Antarctic researcher|n/a|Treaty territory, not a country — science expeditions, penguins, and climate threads, never sports fandom.
flag-antigua-barbuda|AG|St. John's|Antiguan or Barbudan|English|Caribbean cricket and carnival; two-island state, not Antigua Guatemala.
flag-argentina|AR|Buenos Aires|Argentine|Spanish|Football, tango, mate, and Malvinas/Falklands debates make 🇦🇷 politically loaded in some threads.
flag-armenia|AM|Yerevan|Armenian|Armenian|Diaspora identity, apricot-and-mountain imagery, and genocide-remembrance posts.
flag-aruba|AW|Oranjestad|Aruban|Papiamento and Dutch|One Happy Island tourism slogan, not mainland Netherlands 🇳🇱.
flag-ascension-island|AC|Georgetown|Ascension Islander|English|Remote South Atlantic RAF/NASA tracking island — almost never a sports flag.
flag-australia|AU|Canberra|Australian|English|Southern Cross flag; cricket, AFL, and Boxing Day travel — not Austria 🇦🇹.
flag-austria|AT|Vienna|Austrian|German|Red-white-red stripes; skiing, classical music, and schnitzel — mix-ups with Australia are the classic error.
flag-azerbaijan|AZ|Baku|Azerbaijani|Azerbaijani|Caspian oil city Baku, Eurovision hosting memory, and Caucasus identity posts.
flag-bahamas|BS|Nassau|Bahamian|English|Aquamarine tourism, Junkanoo, and hurricane-season family check-ins.
flag-bahrain|BH|Manama|Bahraini|Arabic|Formula 1 night race and Gulf finance chats, not mainland Saudi 🇸🇦.
flag-bangladesh|BD|Dhaka|Bangladeshi|Bengali|Cricket World Cup nights and diaspora Eid greetings; green field with a red disc.
flag-barbados|BB|Bridgetown|Barbadian|English|Rihanna, Crop Over, and republic-era pride posts since 2021.
flag-belarus|BY|Minsk|Belarusian|Belarusian and Russian|Political protest history makes 🇧🇾 sensitive — do not use as a joke in news threads.
flag-belgium|BE|Brussels|Belgian|Dutch, French, German|Waffles, comics, and Red Devils football; EU-capital chatter often pairs 🇧🇪 with 🇪🇺.
flag-belize|BZ|Belmopan|Belizean|English|Only Central American country with English as official language; reef and Maya-site travel.
flag-benin|BJ|Porto-Novo|Beninese|French|Dahomey heritage, Vodun festivals, and West African football.
flag-bermuda|BM|Hamilton|Bermudian|English|Pink-sand tourism and British Overseas Territory — not the Caribbean island of Barbados.
flag-bhutan|BT|Thimphu|Bhutanese|Dzongkha|Gross National Happiness travel captions and Himalayan trekking, not Nepal 🇳🇵.
flag-bolivia|BO|Sucre|Bolivian|Spanish and Quechua|Wiphala often appears beside 🇧🇴 in Indigenous-rights posts; altitude-tourism to La Paz.
flag-bosnia-herzegovina|BA|Sarajevo|Bosnian|Bosnian, Croatian, Serbian|Euro football nights and diaspora identity; triangle-and-stars design is unique at emoji size.
flag-botswana|BW|Gaborone|Botswanan|English and Setswana|Okavango safari travel and diamond-economy headlines.
flag-bouvet-island|BV|n/a|n/a|Norwegian|Uninhabited sub-Antarctic dependency of Norway — almost only trivia or ISO-code jokes.
flag-brazil|BR|Brasília|Brazilian|Portuguese|Carnival, football, and Portuguese-language pride — green-yellow-blue design is widely recognized.
flag-british-indian-ocean-territory|IO|Diego Garcia|n/a|English|UK territory in the Indian Ocean; Chagos/Diego Garcia politics, not a tourist sports flag.
flag-british-virgin-islands|VG|Road Town|British Virgin Islander|English|Sailing and finance-center posts; not the US Virgin Islands 🇻🇮.
flag-brunei|BN|Bandar Seri Begawan|Bruneian|Malay|Borneo sultanate, oil wealth, and Islamic monarchy — not Malaysia 🇲🇾.
flag-bulgaria|BG|Sofia|Bulgarian|Bulgarian|Cyrillic-language EU member; white-green-red tricolor, not Italy's green-white-red.
flag-burkina-faso|BF|Ouagadougou|Burkinabé|French|Sahel politics and FESPACO film festival posts.
flag-burundi|BI|Gitega|Burundian|Kirundi and French|Great Lakes East Africa; drumming heritage and careful news context.
flag-cambodia|KH|Phnom Penh|Cambodian|Khmer|Angkor Wat sits on the flag — temple travel photos almost always pair 🇰🇭 with 🏯.
flag-cameroon|CM|Yaoundé|Cameroonian|French and English|Indomitable Lions football and bilingual (Fr/En) identity.
flag-canada|CA|Ottawa|Canadian|English and French|Maple leaf, hockey, and bilingual federal chats — not a US state flag.
flag-canary-islands|IC|Las Palmas / Santa Cruz|Canarian|Spanish|Spanish Atlantic islands, not mainland Spain travel by default; volcano and beach tourism.
flag-cape-verde|CV|Praia|Cape Verdean|Portuguese|Atlantic Creole islands, Cesária Évora music, and diaspora in Europe.
flag-caribbean-netherlands|BQ|Kralendijk|Dutch Caribbean|Dutch, Papiamentu, English|Bonaire, Sint Eustatius, Saba — special Dutch municipalities, not Curaçao 🇨🇼.
flag-cayman-islands|KY|George Town|Caymanian|English|Finance and dive-tourism UK territory, not Jamaica 🇯🇲.
flag-central-african-republic|CF|Bangui|Central African|French and Sango|News and aid threads; avoid using 🇨🇫 as decoration during conflict coverage.
flag-ceuta-melilla|EA|Ceuta / Melilla|n/a|Spanish|Spanish autonomous cities in North Africa — not Morocco 🇲🇦.
flag-chad|TD|N'Djamena|Chadian|Arabic and French|Blue-yellow-red verticals look like Romania 🇷🇴 — always type the country name.
flag-chile|CL|Santiago|Chilean|Spanish|Andes-to-Pacific geography, wine, and Copa América nights; lone star is not Texas.
flag-china|CN|Beijing|Chinese|Mandarin|Five-star red flag; Lunar New Year, travel, and diaspora identity — politically sensitive in some threads.
flag-christmas-island|CX|Flying Fish Cove|Christmas Islander|English|Australian Indian Ocean territory; red crabs, not December 25 branding.
flag-clipperton-island|CP|n/a|n/a|French|Uninhabited French atoll in the Pacific — trivia ISO, not a travel destination flag.
flag-cocos-keeling-islands|CC|West Island|Cocos Islander|English, Malay|Australian Indian Ocean atolls; tiny population, not the Keeling shopping meme.
flag-colombia|CO|Bogotá|Colombian|Spanish|Yellow-blue-red tricolor; coffee, cumbia, and cycling Grand Tour fans.
flag-comoros|KM|Moroni|Comorian|Comorian, Arabic, French|Indian Ocean four-island union; not Mayotte 🇾🇹, which is a French department.
flag-congo-brazzaville|CG|Brazzaville|Congolese|French|Republic of the Congo — not DRC 🇨🇩. Diagonal green-yellow-red.
flag-congo-kinshasa|CD|Kinshasa|Congolese|French|DRC, star flag; rumba, Congo River, and news context matter — not Brazzaville 🇨🇬.
flag-cook-islands|CK|Avarua|Cook Islander|English and Cook Islands Māori|Self-governing in free association with New Zealand; Pacific dance and tourism.
flag-costa-rica|CR|San José|Costa Rican|Spanish|Central American eco-tourism and football; blue-white-red, not Thailand 🇹🇭.
flag-cote-divoire|CI|Yamoussoukro|Ivorian|French|Orange-white-green verticals are the reverse of Ireland 🇮🇪 — mix-ups are common.
flag-croatia|HR|Zagreb|Croatian|Croatian|Šahovnica checkerboard coat of arms; football and Adriatic tourism.
flag-cuba|CU|Havana|Cuban|Spanish|Triangle-star flag; salsa, rum, and diaspora politics in Miami threads.
flag-curaao|CW|Willemstad|Curaçaoan|Papiamentu, Dutch, English|Dutch Caribbean island, not Caribbean Netherlands bq or Aruba 🇦🇼.
flag-cyprus|CY|Nicosia|Cypriot|Greek and Turkish|Island divided in news coverage; map-and-olive design is unique.
flag-czechia|CZ|Prague|Czech|Czech|White-red with blue triangle; beer, Prague tourism — formerly Czech Republic in older chats.
flag-denmark|DK|Copenhagen|Danish|Danish|Dannebrog, one of the oldest flags; hygge, design, and Nordic cross — not Switzerland.
flag-diego-garcia|DG|n/a|n/a|English|British Indian Ocean atoll/military base; not a tourist sports flag.
flag-djibouti|DJ|Djibouti|Djiboutian|Arabic and French|Horn of Africa port state; not neighboring Somalia 🇸🇴 or Eritrea 🇪🇷.
flag-dominica|DM|Roseau|Dominican|English|Sisserou parrot flag — not the Dominican Republic 🇩🇴.
flag-dominican-republic|DO|Santo Domingo|Dominican|Spanish|Caribbean baseball and merengue; not Dominica 🇩🇲.
flag-ecuador|EC|Quito|Ecuadorian|Spanish|Flag looks like Colombia/Venezuela at emoji size — Galápagos travel is the unique tell.
flag-egypt|EG|Cairo|Egyptian|Arabic|Eagle of Saladin; pyramids, Ramadan, and AFCON football.
flag-el-salvador|SV|San Salvador|Salvadoran|Spanish|Smallest mainland Central American country; pupusa food posts and diaspora in the US.
flag-england|GB-ENG|London|English|English|St George's Cross, not the Union Jack 🇬🇧. Football (Three Lions) and St George's Day.
flag-equatorial-guinea|GQ|Malabo|Equatorial Guinean|Spanish, French, Portuguese|Only Spanish-official country in Africa; oil-economy headlines.
flag-eritrea|ER|Asmara|Eritrean|Tigrinya, Arabic, English|Horn of Africa; olive-branch emblem, sensitive border-news context.
flag-estonia|EE|Tallinn|Estonian|Estonian|Digital-society EU member; blue-black-white, not other Baltics.
flag-eswatini|SZ|Mbabane|Swazi|Swazi and English|Formerly Swaziland; ceremonial flag with shield — not South Africa 🇿🇦.
flag-ethiopia|ET|Addis Ababa|Ethiopian|Amharic|Green-yellow-red with pentagram; coffee origin stories and Orthodox holidays.
flag-european-union|EU|Brussels|European|24 EU languages|Circle of 12 stars; policy, travel (Schengen), and Eurovision — not a national sports team by itself.
flag-falkland-islands|FK|Stanley|Falkland Islander|English|UK overseas territory; 1982 war history makes 🇫🇰 politically charged.
flag-faroe-islands|FO|Tórshavn|Faroese|Faroese and Danish|Nordic sheep-islands; football giant-killings and sea-stack tourism.
flag-fiji|FJ|Suva|Fijian|English, Fijian, Hindi|Pacific rugby power; light-blue ensign with shield, not Australia 🇦🇺.
flag-finland|FI|Helsinki|Finnish|Finnish and Swedish|Blue Nordic cross on white; sauna, lakes, and Eurovision.
flag-france|FR|Paris|French|French|Vertical blue-white-red; cuisine, fashion, and World Cup nights — not the Netherlands (horizontal).
flag-french-guiana|GF|Cayenne|French Guianese|French|South American French department; space-center Kourou, not Guyana 🇬🇾.
flag-french-polynesia|PF|Papeete|French Polynesian|French and Tahitian|Tahiti tourism, outrigger canoes, and Pacific nuclear-test history in news.
flag-french-southern-territories|TF|Saint-Pierre (Réunion admin)|n/a|French|Scattered Indian Ocean/Antarctic districts — research and trivia, not holiday sports.
flag-gabon|GA|Libreville|Gabonese|French|Green-yellow-blue horizontals; rainforest and oil-economy posts.
flag-gambia|GM|Banjul|Gambian|English|The Gambia river state inside Senegal; red-blue-green with white fimbriation.
flag-georgia|GE|Tbilisi|Georgian|Georgian|Five-cross flag; Caucasus wine and church architecture — not the US state.
flag-germany|DE|Berlin|German|German|Black-red-gold; football (Mannschaft), Oktoberfest, and EU politics.
flag-ghana|GH|Accra|Ghanaian|English|Black star of Africa; Highlife, AFCON, and Independence Day (March 6).
flag-gibraltar|GI|Gibraltar|Gibraltarian|English|UK territory on the Iberian peninsula; red castle-and-key, Brexit-border chats.
flag-greece|GR|Athens|Greek|Greek|Blue-white stripes and cross; islands, Orthodox Easter, and Euro football.
flag-greenland|GL|Nuuk|Greenlandic|Greenlandic and Danish|Red-white Nordic circle (Erfalasorput), not Denmark's cross; Arctic climate posts.
flag-grenada|GD|St. George's|Grenadian|English|Spice Isle; nutmeg on the flag, Caribbean cricket and carnival.
flag-guadeloupe|GP|Basse-Terre|Guadeloupean|French|French Caribbean department; not independent Jamaica or Haiti.
flag-guam|GU|Hagåtña|Guamanian|English and Chamorro|US territory in Micronesia; boat emblem, military-base and typhoon updates.
flag-guatemala|GT|Guatemala City|Guatemalan|Spanish|Quetzal bird on the coat of arms; Maya heritage and Central American football.
flag-guernsey|GG|Saint Peter Port|Guernsey|English|Channel Island UK Crown Dependency; gold cross, not Jersey 🇯🇪.
flag-guinea|GN|Conakry|Guinean|French|Red-yellow-green verticals; not Guinea-Bissau 🇬🇼 or Equatorial Guinea 🇬🇶.
flag-guinea-bissau|GW|Bissau|Bissau-Guinean|Portuguese|Black star on red bar; PALOP identity, not Guinea-Conakry 🇬🇳.
flag-guyana|GY|Georgetown|Guyanese|English|Golden Arrowhead; South American English-speaking, cricket and oil-news.
flag-haiti|HT|Port-au-Prince|Haitian|Haitian Creole and French|Blue-red with coat of arms; Kompa music and diaspora in North America.
flag-heard-mcdonald-islands|HM|n/a|n/a|English|Uninhabited Australian sub-Antarctic islands — scientists and ISO trivia only.
flag-honduras|HN|Tegucigalpa|Honduran|Spanish|Five stars between blue-white-blue; Central American football and US diaspora.
flag-hong-kong|HK|Hong Kong|Hongkonger|Chinese and English|Bauhinia flower; city-state identity distinct from 🇨🇳 in local chats.
flag-hungary|HU|Budapest|Hungarian|Hungarian|Red-white-green horizontals; not Italy (vertical) or Mexico (eagle).
flag-iceland|IS|Reykjavík|Icelander|Icelandic|Red Nordic cross with blue; volcanoes, football giant-killings, and northern lights.
flag-india|IN|New Delhi|Indian|Hindi, English, and 22 scheduled|Ashoka Chakra wheel; cricket, Diwali, and huge diaspora threads.
flag-indonesia|ID|Jakarta|Indonesian|Indonesian|Red-over-white, identical at emoji size to Monaco and Poland — type the country.
flag-iran|IR|Tehran|Iranian|Persian|Green-white-red with emblem; Nowruz, football, and politically sensitive news.
flag-iraq|IQ|Baghdad|Iraqi|Arabic and Kurdish|Takbir script on the flag; news context is often sensitive.
flag-ireland|IE|Dublin|Irish|Irish and English|Green-white-orange verticals; GAA, rugby, and St Patrick's Day — reverse of Côte d'Ivoire 🇨🇮.
flag-isle-of-man|IM|Douglas|Manx|English and Manx|Triskelion three-legs; TT races, not Ireland 🇮🇪.
flag-israel|IL|Jerusalem|Israeli|Hebrew and Arabic|Star of David; holidays, news, and highly sensitive political threads.
flag-italy|IT|Rome|Italian|Italian|Green-white-red verticals; food, football, and design — not Mexico 🇲🇽 or Hungary 🇭🇺.
flag-jamaica|JM|Kingston|Jamaican|English|Gold saltire on green-black; reggae, sprinting, and carnival — no red/white/blue.
flag-japan|JP|Tokyo|Japanese|Japanese|Hinomaru disc; cherry blossom season, football (Samurai Blue), and tech.
flag-jersey|JE|Saint Helier|Jersey|English|Channel Island with red saltire and badge; finance and tourism, not Guernsey 🇬🇬.
flag-jordan|JO|Amman|Jordanian|Arabic|Pan-Arab colors with seven-pointed star; Petra travel and regional news.
flag-kazakhstan|KZ|Astana|Kazakh|Kazakh and Russian|Sky-blue with golden sun and eagle; steppe and oil-economy posts.
flag-kenya|KE|Nairobi|Kenyan|Swahili and English|Maasai shield; athletics, safari, and Premier League fandom.
flag-kiribati|KI|South Tarawa|I-Kiribati|English and Gilbertese|Frigatebird over sunrise; climate-and-ocean-rise news is common.
flag-kosovo|XK|Pristina|Kosovar|Albanian and Serbian|Gold map on blue; recognition is politically disputed — use carefully in Balkan threads.
flag-kuwait|KW|Kuwait City|Kuwaiti|Arabic|Gulf state; dhow-and-desert identity, not a UAE emirate flag.
flag-kyrgyzstan|KG|Bishkek|Kyrgyz|Kyrgyz and Russian|Red field with yellow sun (tunduk); Central Asian mountains, not Kazakhstan 🇰🇿.
flag-laos|LA|Vientiane|Lao|Lao|Blue-red with white disc; Mekong travel, not Thailand 🇹🇭.
flag-latvia|LV|Riga|Latvian|Latvian|Carmine-white-carmine; Baltic singing-revolution memory, not Austria 🇦🇹.
flag-lebanon|LB|Beirut|Lebanese|Arabic|Cedar tree; food, diaspora, and news that can be politically charged.
flag-lesotho|LS|Maseru|Mosotho|Sesotho and English|Mountain kingdom inside South Africa; hat (mokorotlo) emblem.
flag-liberia|LR|Monrovia|Liberian|English|11-stripe flag resembles the US — founding history is unique; football and diaspora.
flag-libya|LY|Tripoli|Libyan|Arabic|Horizontal red-black-green with crescent; news context is often sensitive.
flag-liechtenstein|LI|Vaduz|Liechtensteiner|German|Alpine microstate; princely crown on blue-red, not Switzerland 🇨🇭.
flag-lithuania|LT|Vilnius|Lithuanian|Lithuanian|Yellow-green-red; Baltic basketball and singing-revolution memory.
flag-luxembourg|LU|Luxembourg|Luxembourger|Luxembourgish, French, German|Lighter blue than the Netherlands 🇳🇱 — mix-ups happen at emoji size.
flag-macao|MO|Macao|Macanese|Chinese and Portuguese|Lotus-flower SAR flag; gaming-tourism and distinct from 🇭🇰 and 🇨🇳.
flag-madagascar|MG|Antananarivo|Malagasy|Malagasy and French|White-red-green; lemurs and vanilla, not a mainland African tricolor clone.
flag-malawi|MW|Lilongwe|Malawian|English and Chichewa|Rising sun; Lake Malawi travel, not Zambia 🇿🇲.
flag-malaysia|MY|Kuala Lumpur|Malaysian|Malay|14-stripe flag with crescent; nasi lemak, F1 Sepang memory, and federal monarchy.
flag-maldives|MV|Malé|Maldivian|Dhivehi|Indian Ocean atolls; overwater-villa tourism, not Sri Lanka 🇱🇰.
flag-mali|ML|Bamako|Malian|French|Green-yellow-red verticals; desert blues music, not Senegal 🇸🇳.
flag-malta|MT|Valletta|Maltese|Maltese and English|George Cross in the canton; Mediterranean islands, not the Maltese dog emoji.
flag-marshall-islands|MH|Majuro|Marshallese|Marshallese and English|Pacific atolls; nuclear-test history and climate-rise news.
flag-martinique|MQ|Fort-de-France|Martinican|French|French Caribbean department; zouk music, not independent Jamaica.
flag-mauritania|MR|Nouakchott|Mauritanian|Arabic|Green with gold crescent-star and red stripes; Sahara-Atlantic geography.
flag-mauritius|MU|Port Louis|Mauritian|English|Four-band rainbow flag; dodo history and Indian Ocean tourism.
flag-mayotte|YT|Mamoudzou|Mahoran|French|French department next to Comoros 🇰🇲 — political status is debated in regional chats.
flag-mexico|MX|Mexico City|Mexican|Spanish|Eagle-and-cactus coat of arms; food, football, and Independence Day (Sept 16).
flag-micronesia|FM|Palikir|Micronesian|English|Four stars for four states; Pacific compact with the US, not a single-island flag.
flag-moldova|MD|Chișinău|Moldovan|Romanian|Eagle coat of arms; not Romania 🇷🇴 despite similar tricolor.
flag-monaco|MC|Monaco|Monegasque|French|Red-over-white like Indonesia/Poland at emoji size; F1 and royal-wedding posts.
flag-mongolia|MN|Ulaanbaatar|Mongolian|Mongolian|Soyombo emblem; steppe, Naadam festival, and cashmere.
flag-montenegro|ME|Podgorica|Montenegrin|Montenegrin|Red with gold double-headed eagle; Adriatic tourism, not Serbia 🇷🇸.
flag-montserrat|MS|Plymouth (de jure)|Montserratian|English|UK Caribbean territory; volcano displacement history.
flag-morocco|MA|Rabat|Moroccan|Arabic and Tamazight|Green pentagram on red; Atlas travel, football, and Eid greetings.
flag-mozambique|MZ|Maputo|Mozambican|Portuguese|AK-47 on the flag is unique; PALOP identity and Indian Ocean coast.
flag-myanmar|MM|Naypyidaw|Burmese|Burmese|Yellow-green-red with white star; news context is often sensitive.
flag-namibia|NA|Windhoek|Namibian|English|Sun disc; desert dunes and independence from South Africa (1990).
flag-nauru|NR|Yaren|Nauruan|Nauruan and English|Tiny Pacific phosphate island; thin yellow line with a star.
flag-nepal|NP|Kathmandu|Nepali|Nepali|Only non-rectangular national flag — two pennants, Himalayas, and Dashain.
flag-netherlands|NL|Amsterdam|Dutch|Dutch|Horizontal red-white-blue; not France (vertical) or Luxembourg (lighter blue).
flag-new-caledonia|NC|Nouméa|New Caledonian|French|Kanak flag often used; Pacific nickel and independence-debate context.
flag-new-zealand|NZ|Wellington|New Zealander|English and Māori|Union Jack plus Southern Cross; All Blacks rugby — not Australia 🇦🇺.
flag-nicaragua|NI|Managua|Nicaraguan|Spanish|Triangle-rainbow coat of arms; Central American football and volcano tourism.
flag-niger|NE|Niamey|Nigerien|French|Orange disc; Sahel state, not Nigeria 🇳🇬.
flag-nigeria|NG|Abuja|Nigerian|English|Green-white-green; Afrobeats, Nollywood, and Super Eagles football.
flag-niue|NU|Alofi|Niuean|English and Niuean|Yellow ensign in free association with New Zealand; tiny Pacific population.
flag-norfolk-island|NF|Kingston|Norfolk Islander|English and Norfuk|Pine-tree flag; Australian external territory, not a mainland state.
flag-north-korea|KP|Pyongyang|North Korean|Korean|Red-blue with star; news is politically sensitive — not South Korea 🇰🇷.
flag-north-macedonia|MK|Skopje|Macedonian|Macedonian|Sun of Kutleš; not the Greek region of Macedonia.
flag-northern-mariana-islands|MP|Saipan|Northern Mariana Islander|English, Chamorro, Carolinian|US commonwealth in the Pacific; latte-stone emblem.
flag-norway|NO|Oslo|Norwegian|Norwegian|Red Nordic cross; fjords, oil, and winter sports — similar to Iceland/Faroes at small size.
flag-oman|OM|Muscat|Omani|Arabic|Khanjar dagger emblem; Gulf travel distinct from UAE 🇦🇪.
flag-pakistan|PK|Islamabad|Pakistani|Urdu and English|Crescent-star on green; cricket, Independence Day (Aug 14), and large diaspora.
flag-palau|PW|Ngerulmud|Palauan|Palauan and English|Golden disc on blue; Pacific diving, compact with the US.
flag-palestinian-territories|PS|Ramallah / Gaza|Palestinian|Arabic|Pan-Arab colors; news and solidarity threads are politically sensitive.
flag-panama|PA|Panama City|Panamanian|Spanish|Quartered stars; canal transit, baseball, and isthmus geography.
flag-papua-new-guinea|PG|Port Moresby|Papua New Guinean|English, Tok Pisin, Hiri Motu|Bird of paradise; Pacific rugby league and highland culture.
flag-paraguay|PY|Asunción|Paraguayan|Spanish and Guaraní|Different emblems on each side of the real flag — unique among national flags.
flag-peru|PE|Lima|Peruvian|Spanish|Red-white-red; Machu Picchu travel, ceviche, and Independence Day (July 28).
flag-philippines|PH|Manila|Filipino|Filipino and English|Blue-red with sun and stars; OFW diaspora chats and basketball.
flag-pitcairn-islands|PN|Adamstown|Pitcairn Islander|English and Pitkern|Tiny UK Pacific territory of Bounty descendants — trivia more than sports.
flag-poland|PL|Warsaw|Polish|Polish|White-over-red; not Indonesia/Monaco; pierogi, football, and Independence Day (Nov 11).
flag-portugal|PT|Lisbon|Portuguese|Portuguese|Armillary sphere; fado, football, and CPLP community.
flag-puerto-rico|PR|San Juan|Puerto Rican|Spanish and English|US territory; similar to Cuba 🇨🇺 at emoji size — music, baseball, and status debates.
flag-qatar|QA|Doha|Qatari|Arabic|Maroon serrated flag; World Cup 2022 memory and Gulf sports.
flag-romania|RO|Bucharest|Romanian|Romanian|Blue-yellow-red verticals, nearly identical to Chad 🇹🇩 at emoji size.
flag-russia|RU|Moscow|Russian|Russian|White-blue-red; news and sports use can be politically charged.
flag-rwanda|RW|Kigali|Rwandan|Kinyarwanda, French, English|Sun in the corner; post-1994 reconstruction and East African Community.
flag-runion|RE|Saint-Denis|Réunionese|French|French Indian Ocean department; volcano Piton de la Fournaise, not Mauritius 🇲🇺.
flag-samoa|WS|Apia|Samoan|Samoan and English|Independent Samoa (not American Samoa 🇦🇸); rugby and Sunday-culture posts.
flag-san-marino|SM|San Marino|Sammarinese|Italian|Microstate inside Italy; three towers, not Vatican 🇻🇦.
flag-saudi-arabia|SA|Riyadh|Saudi|Arabic|Shahada inscription; Hajj season, football, and formal-use caution (sacred text).
flag-scotland|GB-SCT|Edinburgh|Scottish|English and Scots Gaelic|Saltire (St Andrew); rugby, Hogmanay, and independence-debate context.
flag-senegal|SN|Dakar|Senegalese|French|Green-yellow-red with a star; teranga hospitality, wrestling, and AFCON.
flag-serbia|RS|Belgrade|Serbian|Serbian|Red-blue-white with coat of arms; not Russia 🇷🇺 despite similar colors.
flag-seychelles|SC|Victoria|Seychellois|Seychellois Creole, English, French|Oblique rainbow bands; Indian Ocean tourism.
flag-sierra-leone|SL|Freetown|Sierra Leonean|English|Green-white-blue; West African football and diamond-history headlines.
flag-singapore|SG|Singapore|Singaporean|English, Malay, Mandarin, Tamil|Crescent and five stars; city-state food and National Day (Aug 9).
flag-sint-maarten|SX|Philipsburg|Sint Maarten|Dutch and English|Dutch side of the island shared with French Saint Martin 🇲🇫.
flag-slovakia|SK|Bratislava|Slovak|Slovak|Double cross; not Slovenia 🇸🇮 — mountain-and-castle coat of arms.
flag-slovenia|SI|Ljubljana|Slovenian|Slovenian|Triglav mountain; Adriatic-Alpine, not Slovakia 🇸🇰.
flag-so-tom-prncipe|ST|São Tomé|São Toméan|Portuguese|Two-island Gulf of Guinea state; cocoa and PALOP identity.
flag-solomon-islands|SB|Honiara|Solomon Islander|English|Pacific five-star diagonal; WWII history and climate-rise news.
flag-somalia|SO|Mogadishu|Somali|Somali and Arabic|Five-pointed star on light blue; diaspora and news context can be sensitive.
flag-south-africa|ZA|Pretoria / Cape Town / Bloemfontein|South African|11 official languages|Y-shape rainbow flag; rugby, braai, and post-apartheid identity.
flag-south-georgia-south-sandwich-islands|GS|King Edward Point|n/a|English|UK South Atlantic research territory; penguins, not a sports nation.
flag-south-korea|KR|Seoul|South Korean|Korean|Taeguk and trigrams; K-pop, football, and Lunar New Year — not North Korea 🇰🇵.
flag-south-sudan|SS|Juba|South Sudanese|English|Newest UN member (2011); news context is often sensitive.
flag-spain|ES|Madrid|Spanish|Spanish|Red-gold-red with coat of arms; football, tapas, and regional-identity debates (Catalonia, Basque).
flag-sri-lanka|LK|Sri Jayawardenepura Kotte|Sri Lankan|Sinhala and Tamil|Lion flag; cricket, tea, and Vesak.
flag-st-barthlemy|BL|Gustavia|Saint-Barth|French|French Caribbean luxury-tourism island, not St. Martin 🇲🇫.
flag-st-helena|SH|Jamestown|Saint Helenian|English|Napoleon's exile island in the South Atlantic; UK territory.
flag-st-kitts-nevis|KN|Basseterre|Kittitian or Nevisian|English|Two-island Caribbean federation; not St. Lucia 🇱🇨.
flag-st-lucia|LC|Castries|Saint Lucian|English|Pitons-and-triangle design; Caribbean jazz and cricket.
flag-st-martin|MF|Marigot|Saint-Martinois|French|French side of the island shared with Dutch Sint Maarten 🇸🇽.
flag-st-pierre-miquelon|PM|Saint-Pierre|Saint-Pierrais|French|French islands off Canada; fishing and North Atlantic identity.
flag-st-vincent-grenadines|VC|Kingstown|Vincentian|English|Three diamonds (gems of the Antilles); Caribbean carnival and sailing.
flag-sudan|SD|Khartoum|Sudanese|Arabic and English|Pan-Arab colors; not South Sudan 🇸🇸.
flag-suriname|SR|Paramaribo|Surinamese|Dutch|South America's Dutch-speaking country; star flag and diverse cultural calendar.
flag-svalbard-jan-mayen|SJ|Longyearbyen|n/a|Norwegian|Arctic Norwegian territories; polar-night tourism and research, not a sports team.
flag-sweden|SE|Stockholm|Swedish|Swedish|Yellow Nordic cross on blue; Midsummer, football, and design.
flag-switzerland|CH|Bern|Swiss|German, French, Italian, Romansh|Square red flag with white cross; Alps, neutrality, and not Denmark's Nordic cross.
flag-syria|SY|Damascus|Syrian|Arabic|Pan-Arab colors with two stars; news and refugee-diaspora context is sensitive.
flag-taiwan|TW|Taipei|Taiwanese|Mandarin|White sun on blue canton; identity and naming are politically sensitive.
flag-tajikistan|TJ|Dushanbe|Tajik|Tajik|Persian-speaking Central Asia; crown-and-stars, not Iran 🇮🇷.
flag-tanzania|TZ|Dodoma|Tanzanian|Swahili and English|Diagonal green-yellow-blue-black; Kilimanjaro and Serengeti travel.
flag-thailand|TH|Bangkok|Thai|Thai|Red-white-blue stripes; cuisine, Buddhism, and not Costa Rica 🇨🇷.
flag-timor-leste|TL|Dili|Timorese|Tetum and Portuguese|Black triangle with star; independence from Indonesia (2002).
flag-togo|TG|Lomé|Togolese|French|Five stripes with a star; West African football, not Ghana 🇬🇭.
flag-tokelau|TK|n/a|Tokelauan|Tokelauan and English|NZ territory of three atolls; canoe-and-Southern-Cross design.
flag-tonga|TO|Nuku'alofa|Tongan|Tongan and English|Red field with white canton cross; Pacific rugby.
flag-trinidad-tobago|TT|Port of Spain|Trinidadian or Tobagonian|English|Red with black-white diagonal; Carnival and cricket.
flag-tristan-da-cunha|TA|Edinburgh of the Seven Seas|Tristanian|English|World's most remote inhabited island group; UK South Atlantic.
flag-tunisia|TN|Tunis|Tunisian|Arabic|Red with white disc and crescent-star; Mediterranean, not Turkey 🇹🇷.
flag-turkey|TR|Ankara|Turkish|Turkish|Crescent-star on red; football, tea, and large European diaspora.
flag-turkmenistan|TM|Ashgabat|Turkmen|Turkmen|Carpet-gul vertical stripe; Central Asian, not Turkey 🇹🇷.
flag-turks-caicos-islands|TC|Cockburn Town|Turks and Caicos Islander|English|UK Caribbean territory; diving and offshore-finance posts.
flag-tuvalu|TV|Funafuti|Tuvaluan|Tuvaluan and English|Pacific atolls; climate-rise news and TV-domain trivia.
flag-uganda|UG|Kampala|Ugandan|English and Swahili|Grey crowned crane; East African football and pearl-of-Africa travel.
flag-ukraine|UA|Kyiv|Ukrainian|Ukrainian|Blue-over-yellow (sky and wheat); solidarity posts surged after 2022.
flag-united-arab-emirates|AE|Abu Dhabi|Emirati|Arabic|Red-green-white-black; Dubai travel, not a single-emirate flag.
flag-united-kingdom|GB|London|British|English|Union Jack; not England 🏴󠁧󠁢󠁥󠁮󠁧󠁿, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿, or Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿.
flag-united-nations|UN|New York (HQ)|n/a|6 official UN languages|Olive branches and world map; diplomacy and humanitarian threads, not a national team.
flag-united-states|US|Washington, D.C.|American|English|Stars and stripes; sports, travel, and July 4 — 50-star canton.
flag-uruguay|UY|Montevideo|Uruguayan|Spanish|Sun of May and stripes; football overachievement and mate culture.
flag-us-outlying-islands|UM|n/a|n/a|English|ISO catch-all for tiny US Pacific/Caribbean islets — trivia, not a sports flag.
flag-us-virgin-islands|VI|Charlotte Amalie|U.S. Virgin Islander|English|US territory; not the British Virgin Islands 🇻🇬.
flag-uzbekistan|UZ|Tashkent|Uzbek|Uzbek|Crescent and 12 stars; Silk Road cities Samarkand and Bukhara.
flag-vanuatu|VU|Port Vila|Ni-Vanuatu|Bislama, English, French|Boar tusk and namele leaf; Pacific, not Papua New Guinea 🇵🇬.
flag-vatican-city|VA|Vatican City|Vatican|Italian and Latin|Keys and tiara; papal news, not San Marino 🇸🇲 or Italy 🇮🇹.
flag-venezuela|VE|Caracas|Venezuelan|Spanish|Arc of stars; diaspora chats and oil-news, similar tricolor to Colombia/Ecuador.
flag-vietnam|VN|Hanoi|Vietnamese|Vietnamese|Gold star on red; cuisine, Tết, and football.
flag-wales|GB-WLS|Cardiff|Welsh|English and Welsh|Red Dragon (Y Ddraig Goch); rugby and St David's Day, not the Union Jack.
flag-wallis-futuna|WF|Mata-Utu|Wallisian or Futunan|French|French Pacific collectivity; not mainland France travel.
flag-western-sahara|EH|Laayoune (disputed)|Sahrawi|Arabic|Polisario/SADR flag; status is disputed — sensitive in Maghreb threads.
flag-yemen|YE|Sana'a|Yemeni|Arabic|Pan-Arab horizontals; news context is often sensitive.
flag-zambia|ZM|Lusaka|Zambian|English|Eagle in flight; Victoria Falls (shared with Zimbabwe) and copper-belt identity.
flag-zimbabwe|ZW|Harare|Zimbabwean|English, Shona, Ndebele|Zimbabwe bird and colored chevron; not Zambia 🇿🇲.
flag-aland-islands|AX|Mariehamn|Åland Islander|Swedish|Autonomous Finnish islands; red-yellow Nordic cross, not Finland 🇫🇮.
flag-land-islands|AX|Mariehamn|Åland Islander|Swedish|Autonomous Finnish islands; red-yellow Nordic cross, not Finland 🇫🇮.
`.trim();

const factsBySlug = new Map<string, FlagCountryFact>();

for (const line of ROWS.split("\n")) {
  const [slug, iso, capital, demonym, languages, note] = line.split("|");
  if (!slug || !iso || !note) continue;
  factsBySlug.set(slug, { iso, capital, demonym, languages, note });
}

export const isoFromFlagEmoji = (unicode: string): string | null => {
  const chars = [...unicode];
  if (chars.length < 2) return null;
  const first = chars[0].codePointAt(0);
  const second = chars[1].codePointAt(0);
  if (
    first == null ||
    second == null ||
    first < 0x1f1e6 ||
    first > 0x1f1ff ||
    second < 0x1f1e6 ||
    second > 0x1f1ff
  ) {
    return null;
  }
  return String.fromCharCode(first - 0x1f1e6 + 65) + String.fromCharCode(second - 0x1f1e6 + 65);
};

export const getFlagCountryFact = (slug: string, unicode?: string): FlagCountryFact | undefined => {
  const direct = factsBySlug.get(slug);
  if (direct) return direct;
  if (!unicode) return undefined;
  const iso = isoFromFlagEmoji(unicode);
  if (!iso) return undefined;
  for (const fact of factsBySlug.values()) {
    if (fact.iso === iso) return fact;
  }
  return undefined;
};
