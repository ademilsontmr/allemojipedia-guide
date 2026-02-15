import { Layout, Breadcrumbs } from "@/components/Layout";
import { FlagQuiz } from "@/components/FlagQuiz";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const FlagQuizPage = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Guess the Flag Emoji - World Flags Quiz Online",
    "description": "Play our country flag emoji quiz online! Interactive emoji flag game with 50 world flags. Free world flag recognition quiz and online geography challenge.",
    "url": "https://allemojipedia.com/flag-quiz",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Allemojipedia",
      "url": "https://allemojipedia.com"
    },
    "about": {
      "@type": "Thing",
      "name": "Flag Emojis and Geography Quiz",
      "description": "Educational country flag emoji game and world flags quiz online for geography learning"
    }
  };

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "Guess the Flag Emoji - Country Flag Emoji Quiz",
    "description": "Interactive world flags quiz online where players identify countries by their flag emojis. This geography emoji quiz features 50 country flag emojis and 30 questions per round. Free online geography challenge and world flag recognition quiz.",
    "genre": "Educational Geography Quiz Game",
    "numberOfPlayers": "1",
    "gamePlatform": "Web Browser",
    "playMode": "SinglePlayer",
    "keywords": "guess the flag emoji, country flag emoji quiz, world flags quiz online, emoji flag game, geography emoji quiz, world flag recognition quiz, online geography challenge"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many questions are in this world flags quiz online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each round of our country flag emoji game contains 30 randomly selected questions from a pool of 50 different country flag emojis, making it a comprehensive online geography challenge."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play this emoji flag game multiple times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! This world flag recognition quiz randomizes both questions and answer options each time, so every round of the geography emoji quiz is different. You can play as many times as you want to improve your score."
        }
      },
      {
        "@type": "Question",
        "name": "What countries are included in this guess the flag emoji quiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our country flag emoji quiz includes 50 flags from all continents: Americas (USA, Brazil, Canada, Mexico), Europe (UK, France, Germany, Italy), Asia (Japan, China, India, South Korea), Africa (South Africa, Egypt, Nigeria), and Oceania (Australia, New Zealand)."
        }
      },
      {
        "@type": "Question",
        "name": "Is this world flags quiz online free to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! This emoji flag game is completely free to play. No registration, download, or payment required. Just start playing this online geography challenge immediately!"
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Guess the Flag Emoji Quiz - World Flags Quiz Online | Allemojipedia</title>
        <meta name="description" content="Play our country flag emoji quiz online! 🌍 Test your geography knowledge with 50 world flags in this interactive emoji flag game. Free world flag recognition quiz with 30 questions. Start the online geography challenge now!" />
        <meta name="keywords" content="guess the flag emoji, country flag emoji quiz, world flags quiz online, emoji flag game, geography emoji quiz, flag emoji quiz, guess the flag game, country flag emoji game, world flag recognition quiz, online geography challenge, flag recognition game, educational quiz, geography learning, flag emojis, country flags quiz, interactive geography game, free flag quiz" />
        <meta name="author" content="Allemojipedia" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://allemojipedia.com/flag-quiz" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://allemojipedia.com/flag-quiz" />
        <meta property="og:title" content="Guess the Flag Emoji - World Flags Quiz Online" />
        <meta property="og:description" content="Play the best country flag emoji quiz online! Test your geography knowledge with our interactive emoji flag game. 50 world flags, 30 questions. Free!" />
        <meta property="og:image" content="https://allemojipedia.com/flag-quiz-og.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://allemojipedia.com/flag-quiz" />
        <meta property="twitter:title" content="Guess the Flag Emoji - World Flags Quiz Online" />
        <meta property="twitter:description" content="Play the best country flag emoji quiz online! Interactive emoji flag game with 50 world flags. Free geography challenge!" />
        <meta property="twitter:image" content="https://allemojipedia.com/flag-quiz-og.png" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-page">
        <section className="section-spacing">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Flag Quiz" }
          ]} />

          {/* H1 - Main Title */}
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Guess the Flag Emoji - World Flags Quiz Online 🌍
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Play the ultimate country flag emoji quiz! Test your geography knowledge with our interactive emoji flag game featuring 50 world flags.
            </p>
          </header>

          {/* Quiz Component */}
          <div className="mb-12">
            <FlagQuiz />
          </div>

          {/* H2 - About the Quiz */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Country Flag Emoji Game</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Welcome to the most engaging world flags quiz online! Our country flag emoji quiz is an educational game that challenges you to identify nations based on their flag emojis. This emoji flag game features 50 different flags from around the world with 30 questions per round, offering a comprehensive online geography challenge that tests your geographical knowledge.
              </p>
              <p className="text-muted-foreground">
                Whether you're a geography enthusiast preparing for a world flag recognition quiz, a student studying for a test, or just someone who loves a good geography emoji quiz, this interactive game is perfect for all skill levels. The randomized questions and answer options ensure that every playthrough of this country flag emoji game is different, making it highly replayable and educational.
              </p>
            </div>
          </section>

          {/* H2 - How to Play */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Play</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="text-4xl mb-3">1️⃣</div>
                <p className="font-semibold mb-2">View the Flag</p>
                <p className="text-sm text-muted-foreground">Each question shows you a flag emoji from one of 50 countries</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="text-4xl mb-3">2️⃣</div>
                <p className="font-semibold mb-2">Choose Answer</p>
                <p className="text-sm text-muted-foreground">Select from four country options to identify the flag</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="text-4xl mb-3">3️⃣</div>
                <p className="font-semibold mb-2">Get Feedback</p>
                <p className="text-sm text-muted-foreground">See instantly if you're correct with visual confirmation</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="text-4xl mb-3">4️⃣</div>
                <p className="font-semibold mb-2">Track Score</p>
                <p className="text-sm text-muted-foreground">Monitor your progress through all 30 questions</p>
              </div>
            </div>
          </section>

          {/* H2 - Quiz Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">World Flag Recognition Quiz Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <p className="font-semibold mb-2">30 Questions Per Round</p>
                  <p className="text-sm text-muted-foreground">Each online geography challenge presents 30 randomly selected questions for a comprehensive test of your flag knowledge</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🌎</div>
                <div>
                  <p className="font-semibold mb-2">50 World Flags</p>
                  <p className="text-sm text-muted-foreground">Country flag emojis from all continents including Americas, Europe, Asia, Africa, and Oceania in this world flags quiz online</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <p className="font-semibold mb-2">Instant Feedback</p>
                  <p className="text-sm text-muted-foreground">Get immediate visual confirmation in this emoji flag game with green for correct and red for incorrect answers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🔄</div>
                <div>
                  <p className="font-semibold mb-2">Randomized Options</p>
                  <p className="text-sm text-muted-foreground">Every playthrough of this geography emoji quiz is different with shuffled questions and answers</p>
                </div>
              </div>
            </div>
          </section>

          {/* H2 - Educational Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Play This Geography Emoji Quiz?</h2>
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    Master World Geography
                  </p>
                  <p className="text-sm text-muted-foreground">This world flags quiz online helps you learn about countries from around the world and improve your geographical awareness through interactive gameplay</p>
                </div>
                <div>
                  <p className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧠</span>
                    Enhance Visual Memory
                  </p>
                  <p className="text-sm text-muted-foreground">Train your brain with this country flag emoji quiz to recognize patterns, colors, and symbols in flag designs</p>
                </div>
                <div>
                  <p className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌐</span>
                    Cultural Awareness
                  </p>
                  <p className="text-sm text-muted-foreground">Discover what different flag elements represent and their cultural significance in this educational emoji flag game</p>
                </div>
                <div>
                  <p className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    Fun Learning Experience
                  </p>
                  <p className="text-sm text-muted-foreground">Education doesn't have to be boring - this online geography challenge makes learning fun and engaging!</p>
                </div>
              </div>
            </div>
          </section>

          {/* H2 - FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions About Our Country Flag Emoji Quiz</h2>
            <div className="space-y-4 max-w-3xl">
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="font-semibold mb-2">How many questions are in this world flags quiz online?</h3>
                <p className="text-sm text-muted-foreground">Each round of our country flag emoji game contains 30 randomly selected questions from a pool of 50 different country flag emojis, making it a comprehensive online geography challenge.</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="font-semibold mb-2">Can I play this emoji flag game multiple times?</h3>
                <p className="text-sm text-muted-foreground">Yes! This world flag recognition quiz randomizes both questions and answer options each time, so every round of the geography emoji quiz is different. Play as many times as you want to improve your score!</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="font-semibold mb-2">What countries are included in this guess the flag emoji quiz?</h3>
                <p className="text-sm text-muted-foreground">Our country flag emoji quiz includes 50 flags from all continents: Americas (USA, Brazil, Canada, Mexico), Europe (UK, France, Germany, Italy), Asia (Japan, China, India, South Korea), Africa (South Africa, Egypt, Nigeria), and Oceania (Australia, New Zealand).</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="font-semibold mb-2">Is this world flags quiz online free to play?</h3>
                <p className="text-sm text-muted-foreground">Yes! This emoji flag game is completely free to play. No registration, download, or payment required. Just start playing this online geography challenge immediately!</p>
              </div>
            </div>
          </section>

          {/* H2 - Related Content */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">More Emoji Content</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/categories" className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all">
                <div className="text-3xl mb-3">📂</div>
                <p className="font-semibold mb-2">Emoji Categories</p>
                <p className="text-sm text-muted-foreground">Browse all emoji categories and learn their meanings</p>
              </Link>
              <Link to="/emoji-comparisons" className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all">
                <div className="text-3xl mb-3">⚖️</div>
                <p className="font-semibold mb-2">Emoji Comparisons</p>
                <p className="text-sm text-muted-foreground">Compare similar emojis and understand their differences</p>
              </Link>
              <Link to="/blog/guess-the-flag-emoji-quiz" className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all">
                <div className="text-3xl mb-3">📝</div>
                <p className="font-semibold mb-2">Quiz Guide</p>
                <p className="text-sm text-muted-foreground">Read our complete guide with tips and strategies</p>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default FlagQuizPage;
