export interface FlagQuestion {
  emoji: string;
  country: string;
  options: string[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const flagQuestionsData: FlagQuestion[] = [
  { emoji: "🇺🇸", country: "United States", options: ["United States", "Liberia", "Malaysia", "Puerto Rico"] },
  { emoji: "🇧🇷", country: "Brazil", options: ["Brazil", "Portugal", "Cape Verde", "Angola"] },
  { emoji: "🇯🇵", country: "Japan", options: ["Japan", "Bangladesh", "Palau", "South Korea"] },
  { emoji: "🇬🇧", country: "United Kingdom", options: ["United Kingdom", "Australia", "New Zealand", "Fiji"] },
  { emoji: "🇫🇷", country: "France", options: ["France", "Netherlands", "Luxembourg", "Russia"] },
  { emoji: "🇩🇪", country: "Germany", options: ["Germany", "Belgium", "Armenia", "Colombia"] },
  { emoji: "🇮🇹", country: "Italy", options: ["Italy", "Mexico", "Ireland", "Hungary"] },
  { emoji: "🇪🇸", country: "Spain", options: ["Spain", "Portugal", "Andorra", "Gibraltar"] },
  { emoji: "🇨🇦", country: "Canada", options: ["Canada", "Peru", "Austria", "Lebanon"] },
  { emoji: "🇦🇺", country: "Australia", options: ["Australia", "New Zealand", "Fiji", "Tuvalu"] },
  { emoji: "🇲🇽", country: "Mexico", options: ["Mexico", "Italy", "Hungary", "Iran"] },
  { emoji: "🇦🇷", country: "Argentina", options: ["Argentina", "Uruguay", "Nicaragua", "El Salvador"] },
  { emoji: "🇨🇳", country: "China", options: ["China", "Vietnam", "Morocco", "Turkey"] },
  { emoji: "🇮🇳", country: "India", options: ["India", "Niger", "Ireland", "Ivory Coast"] },
  { emoji: "🇰🇷", country: "South Korea", options: ["South Korea", "North Korea", "Japan", "Taiwan"] },
  { emoji: "🇷🇺", country: "Russia", options: ["Russia", "Slovakia", "Slovenia", "Serbia"] },
  { emoji: "🇿🇦", country: "South Africa", options: ["South Africa", "Kenya", "Tanzania", "Zimbabwe"] },
  { emoji: "🇳🇱", country: "Netherlands", options: ["Netherlands", "Luxembourg", "France", "Croatia"] },
  { emoji: "🇸🇪", country: "Sweden", options: ["Sweden", "Norway", "Finland", "Denmark"] },
  { emoji: "🇨🇭", country: "Switzerland", options: ["Switzerland", "Denmark", "Georgia", "England"] },
  { emoji: "🇵🇹", country: "Portugal", options: ["Portugal", "Spain", "Brazil", "Cape Verde"] },
  { emoji: "🇬🇷", country: "Greece", options: ["Greece", "Uruguay", "Israel", "Finland"] },
  { emoji: "🇹🇷", country: "Turkey", options: ["Turkey", "Tunisia", "Algeria", "Pakistan"] },
  { emoji: "🇵🇱", country: "Poland", options: ["Poland", "Indonesia", "Monaco", "Singapore"] },
  { emoji: "🇳🇴", country: "Norway", options: ["Norway", "Iceland", "Sweden", "Denmark"] },
  { emoji: "🇫🇮", country: "Finland", options: ["Finland", "Sweden", "Iceland", "Norway"] },
  { emoji: "🇩🇰", country: "Denmark", options: ["Denmark", "Norway", "Switzerland", "Iceland"] },
  { emoji: "🇦🇹", country: "Austria", options: ["Austria", "Latvia", "Peru", "Lebanon"] },
  { emoji: "🇧🇪", country: "Belgium", options: ["Belgium", "Germany", "Romania", "Chad"] },
  { emoji: "🇮🇪", country: "Ireland", options: ["Ireland", "Italy", "India", "Ivory Coast"] },
  { emoji: "🇨🇿", country: "Czech Republic", options: ["Czech Republic", "Philippines", "Chile", "Cuba"] },
  { emoji: "🇭🇺", country: "Hungary", options: ["Hungary", "Italy", "Mexico", "Bulgaria"] },
  { emoji: "🇷🇴", country: "Romania", options: ["Romania", "Chad", "Moldova", "Andorra"] },
  { emoji: "🇺🇦", country: "Ukraine", options: ["Ukraine", "Sweden", "Kazakhstan", "Palau"] },
  { emoji: "🇹🇭", country: "Thailand", options: ["Thailand", "Costa Rica", "Netherlands", "Paraguay"] },
  { emoji: "🇻🇳", country: "Vietnam", options: ["Vietnam", "China", "Morocco", "Turkey"] },
  { emoji: "🇵🇭", country: "Philippines", options: ["Philippines", "Czech Republic", "Cuba", "Chile"] },
  { emoji: "🇮🇩", country: "Indonesia", options: ["Indonesia", "Poland", "Monaco", "Singapore"] },
  { emoji: "🇲🇾", country: "Malaysia", options: ["Malaysia", "United States", "Liberia", "Puerto Rico"] },
  { emoji: "🇸🇬", country: "Singapore", options: ["Singapore", "Indonesia", "Poland", "Monaco"] },
  { emoji: "🇳🇿", country: "New Zealand", options: ["New Zealand", "Australia", "Fiji", "Cook Islands"] },
  { emoji: "🇨🇱", country: "Chile", options: ["Chile", "Texas", "Czech Republic", "Cuba"] },
  { emoji: "🇨🇴", country: "Colombia", options: ["Colombia", "Ecuador", "Venezuela", "Romania"] },
  { emoji: "🇵🇪", country: "Peru", options: ["Peru", "Canada", "Austria", "Poland"] },
  { emoji: "🇻🇪", country: "Venezuela", options: ["Venezuela", "Colombia", "Ecuador", "Spain"] },
  { emoji: "🇪🇬", country: "Egypt", options: ["Egypt", "Syria", "Iraq", "Yemen"] },
  { emoji: "🇳🇬", country: "Nigeria", options: ["Nigeria", "Ireland", "India", "Italy"] },
  { emoji: "🇰🇪", country: "Kenya", options: ["Kenya", "South Africa", "South Sudan", "Malawi"] },
  { emoji: "🇸🇦", country: "Saudi Arabia", options: ["Saudi Arabia", "Pakistan", "Turkmenistan", "Algeria"] },
  { emoji: "🇦🇪", country: "United Arab Emirates", options: ["United Arab Emirates", "Jordan", "Palestine", "Sudan"] }
];

export const flagQuestions: FlagQuestion[] = flagQuestionsData;

export function getRandomQuestion(): FlagQuestion {
  const question = flagQuestions[Math.floor(Math.random() * flagQuestions.length)];
  return {
    ...question,
    options: shuffleArray(question.options)
  };
}

export function getRandomQuestions(count: number): FlagQuestion[] {
  const shuffled = [...flagQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, flagQuestions.length)).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}
