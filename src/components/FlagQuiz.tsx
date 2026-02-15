import { useState, useEffect } from "react";
import { getRandomQuestions, type FlagQuestion } from "@/data/flagQuiz";
import { Check, X, RotateCcw } from "lucide-react";

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function FlagQuiz() {
  const [questions, setQuestions] = useState<FlagQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    // Pega perguntas aleatórias e embaralha as opções de cada uma
    const randomQuestions = getRandomQuestions(30).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setQuestions(randomQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === questions[currentIndex].country;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (questions.length === 0) {
    return <div className="text-center py-8">Loading quiz...</div>;
  }

  if (showResult) {
    return (
      <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">
          {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👏" : "💪"}
        </div>
        <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
        <p className="text-4xl font-bold text-primary mb-4">
          {score} / {questions.length}
        </p>
        <p className="text-muted-foreground mb-6">
          {score === questions.length
            ? "Perfect score! You're a flag expert! 🌍"
            : score >= questions.length / 2
            ? "Great job! Keep practicing! 🎯"
            : "Keep learning! Try again! 📚"}
        </p>
        <button
          onClick={startQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <RotateCcw className="h-5 w-5" />
          Play Again
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className="text-sm font-medium">
          Score: <span className="text-primary font-bold">{score}</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="text-8xl md:text-9xl mb-4 emoji">{currentQuestion.emoji}</div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">Which country is this flag from?</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrectAnswer = option === currentQuestion.country;
          const showCorrect = selectedAnswer && isCorrectAnswer;
          const showWrong = isSelected && !isCorrect;

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              className={`p-4 rounded-xl border-2 font-medium transition-all duration-300 ${
                showCorrect
                  ? "bg-green-500/20 border-green-500 text-green-700 dark:text-green-400"
                  : showWrong
                  ? "bg-red-500/20 border-red-500 text-red-700 dark:text-red-400"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              } ${selectedAnswer ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showCorrect && <Check className="h-5 w-5" />}
                {showWrong && <X className="h-5 w-5" />}
              </div>
            </button>
          );
        })}
      </div>

      {isCorrect !== null && (
        <div className="mt-6 text-center">
          <p className={`text-lg font-medium ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {isCorrect ? "Correct! 🎉" : `Wrong! The answer is ${currentQuestion.country}`}
          </p>
        </div>
      )}
    </div>
  );
}
