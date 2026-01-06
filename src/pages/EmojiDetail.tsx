import { useParams, Link } from "react-router-dom";
import { Layout, Breadcrumbs } from "@/components/Layout";
import { CopyEmojiCard } from "@/components/CopyEmojiCard";
import { getEmojiBySlug, getEmojisByCategory } from "@/data/emojis";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";

const EmojiDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const emoji = getEmojiBySlug(slug || "");

  if (!emoji) return <NotFound />;

  const category = getCategoryBySlug(emoji.categorySlug);
  const relatedEmojis = emoji.relatedEmojis.map(s => getEmojiBySlug(s)).filter(Boolean).slice(0, 6);
  
  const categoryEmojis = getEmojisByCategory(emoji.categorySlug)
    .filter(e => e.slug !== emoji.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const primaryRelated = relatedEmojis[0];

  const faqItems = [
    { 
      question: `O emoji ${emoji.unicode} é sarcástico?`, 
      answer: emoji.misunderstandings.length > 0 
        ? `O emoji ${emoji.name} é geralmente amigável, embora ${emoji.misunderstandings[0].toLowerCase()}` 
        : `O emoji ${emoji.name} é tipicamente usado de forma amigável e genuína para expressar ${emoji.keywords[0] || 'sentimentos positivos'}.`
    },
    { 
      question: `Posso usar ${emoji.unicode} no trabalho?`, 
      answer: emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional') || ctx.toLowerCase().includes('work'))
        ? `Sim, ${emoji.unicode} é geralmente apropriado para comunicação no trabalho quando usado em chats casuais de equipe ou e-mails amigáveis.`
        : `Use ${emoji.unicode} com cautela no trabalho. É mais adequado para chats casuais de equipe do que para e-mails formais ou comunicação com clientes.`
    },
    { 
      question: primaryRelated ? `Qual a diferença entre ${emoji.unicode} e ${primaryRelated.unicode}?` : `Como copiar o emoji ${emoji.name}?`,
      answer: primaryRelated 
        ? `Embora ambos expressem sentimentos similares, ${emoji.unicode} ${emoji.name} enfatiza ${emoji.keywords[0] || 'a emoção'}, enquanto ${primaryRelated.unicode} ${primaryRelated.name} é mais sobre ${primaryRelated.keywords?.[0] || 'um sentimento relacionado'}.`
        : `Clique no emoji ${emoji.unicode} na seção Copiar acima para copiá-lo instantaneamente para sua área de transferência.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Emoji ${emoji.unicode}: Significado e Como Usar`,
    "description": emoji.shortMeaning,
    "url": `https://allemojipedia.com/emoji/${slug}`,
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Allemojipedia",
      "url": "https://allemojipedia.com"
    },
    "about": {
      "@type": "Thing",
      "name": emoji.name,
      "description": emoji.shortMeaning
    },
    "mainEntity": {
      "@type": "DefinedTerm",
      "name": `${emoji.unicode} ${emoji.name}`,
      "description": emoji.detailedMeaning.split('\n')[0],
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Unicode Emoji",
        "url": "https://unicode.org/emoji/"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allemojipedia.com" },
      { "@type": "ListItem", "position": 2, "name": category?.name || "Category", "item": `https://allemojipedia.com/category/${emoji.categorySlug}` },
      { "@type": "ListItem", "position": 3, "name": `${emoji.unicode} ${emoji.name}` }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Como Copiar e Usar o Emoji ${emoji.unicode} ${emoji.name}`,
    "description": `Aprenda como copiar o emoji ${emoji.name} e usá-lo em suas mensagens, redes sociais e mais.`,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Clique para Copiar",
        "text": `Clique no emoji ${emoji.unicode} acima para copiá-lo instantaneamente.`
      },
      {
        "@type": "HowToStep",
        "name": "Cole em Qualquer Lugar",
        "text": "Cole o emoji em qualquer app - WhatsApp, Instagram, Twitter, Facebook ou qualquer campo de texto."
      },
      {
        "@type": "HowToStep",
        "name": "Use no Contexto",
        "text": `Use ${emoji.unicode} quando ${emoji.usageContexts[0]?.toLowerCase() || 'expressar essa emoção'}.`
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Emoji ${emoji.unicode}: Significado e Como Usar | Allemojipedia`}</title>
        <meta name="description" content={`${emoji.unicode} ${emoji.name}: ${emoji.shortMeaning} Copie e cole ${emoji.unicode} para mensagens, redes sociais e trabalho.`} />
        <meta name="keywords" content={`${emoji.name} emoji, ${emoji.unicode} significado, ${emoji.keywords.slice(0, 5).join(', ')}, copiar ${emoji.name} emoji`} />
        <link rel="canonical" href={`https://allemojipedia.com/emoji/${slug}`} />
        <meta property="og:title" content={`Emoji ${emoji.unicode}: Significado e Como Usar`} />
        <meta property="og:description" content={`${emoji.shortMeaning} Copie e cole ${emoji.unicode} para mensagens, redes sociais e trabalho.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://allemojipedia.com/emoji/${slug}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Emoji ${emoji.unicode}: Significado e Como Usar`} />
        <meta name="twitter:description" content={`${emoji.shortMeaning} Copie e cole ${emoji.unicode}.`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="container-page section-spacing">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Category", href: `/category/${emoji.categorySlug}` },
          { label: `${emoji.unicode} ${emoji.name}` }
        ]} />

        <article className="max-w-3xl">
          {/* H1 - Título Principal */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Emoji <span className="emoji">{emoji.unicode}</span>: Significado e Como Usar
            </h1>
            <p className="text-lg text-muted-foreground">{emoji.shortMeaning}</p>
          </header>

          {/* Resumo Rápido */}
          <section className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">Resumo rápido</h2>
            <p className="text-foreground">
              {emoji.shortMeaning} As pessoas comumente usam <span className="emoji">{emoji.unicode}</span> {emoji.usageContexts[0]?.toLowerCase().startsWith('to ') ? '' : 'para '}{emoji.usageContexts[0]?.toLowerCase() || 'expressar esse sentimento'}.
            </p>
          </section>

          <CopyEmojiCard unicode={emoji.unicode} name={emoji.name} />

          {/* O que significa o emoji */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">O que significa o emoji <span className="emoji">{emoji.unicode}</span></h2>
            <p className="mb-3 text-lg">{emoji.shortMeaning}</p>
            {emoji.detailedMeaning.split('\n\n').map((p, i) => (
              <p key={i} className="mb-3 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </section>

          {/* Significado em diferentes contextos */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Significado em diferentes contextos</h2>
            
            <div className="space-y-5">
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">💬 Em conversas</h3>
                <p className="text-muted-foreground">
                  Ao conversar com amigos ou família, <span className="emoji">{emoji.unicode}</span> é perfeito para {emoji.usageContexts[0]?.toLowerCase() || 'expressar seus sentimentos'}. 
                  Adiciona calor e personalidade às suas mensagens sem exagerar.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">📲 Em redes sociais</h3>
                <p className="text-muted-foreground">
                  Em plataformas como Instagram, Twitter e TikTok, <span className="emoji">{emoji.unicode}</span> ajuda a transmitir {emoji.keywords[0] || 'emoção'} em legendas e comentários. 
                  É amplamente reconhecido e adiciona contexto emocional às suas postagens.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="text-lg font-medium mb-2">💼 No trabalho</h3>
                <p className="text-muted-foreground">
                  {emoji.usageContexts.some(ctx => ctx.toLowerCase().includes('professional'))
                    ? `O emoji ${emoji.name} pode funcionar bem em comunicação casual no trabalho, como mensagens no Slack ou Teams com colegas que você conhece bem.`
                    : `Use ${emoji.unicode} com moderação no trabalho. É melhor para chats informais de equipe do que para e-mails para clientes ou executivos.`
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Como usar o emoji */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Como usar o emoji <span className="emoji">{emoji.unicode}</span></h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {emoji.usageContexts.map((ctx, i) => <li key={i}>{ctx}</li>)}
            </ul>
          </section>

          {/* Quando NÃO usar o emoji */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quando NÃO usar o emoji <span className="emoji">{emoji.unicode}</span></h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Evite usar <span className="emoji">{emoji.unicode}</span> em e-mails formais ou documentos profissionais onde emojis podem parecer pouco profissionais.</li>
              <li>Não use ao dar notícias sérias ou sensíveis — o tom pode parecer desdenhoso.</li>
              {emoji.misunderstandings.map((m, i) => (
                <li key={i}>Cuidado: {m.toLowerCase()}</li>
              ))}
              <li>Considere seu público — pessoas mais velhas ou de culturas diferentes podem interpretar de forma diferente.</li>
            </ul>
          </section>

          {/* Exemplos de uso */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exemplos de uso</h2>
            <div className="space-y-3">
              {emoji.examples.map((ex, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {ex.context.toLowerCase().includes('casual') || ex.context.toLowerCase().includes('friend') 
                      ? 'Exemplo informal' 
                      : ex.context.toLowerCase().includes('work') || ex.context.toLowerCase().includes('professional')
                      ? 'Exemplo profissional'
                      : ex.context}
                  </h3>
                  <p className="text-foreground">"{ex.text}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Perguntas frequentes */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Perguntas frequentes</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/30">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Emojis relacionados */}
          {relatedEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Emojis relacionados</h2>
              <div className="flex flex-wrap gap-3">
                {relatedEmojis.map(e => e && (
                  <Link key={e.slug} to={`/emoji/${e.slug}`} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all">
                    <span className="emoji text-2xl">{e.unicode}</span>
                    <span className="text-sm font-medium">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Variações */}
          {emoji.variations && emoji.variations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Variações e tons de pele</h2>
              <div className="flex flex-wrap gap-3">
                {emoji.variations.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <span className="emoji text-2xl">{v.emoji}</span>
                    <span className="text-sm text-muted-foreground">{v.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Explorar mais */}
          <section className="mb-8 p-5 rounded-xl bg-muted/30 border border-border">
            <h2 className="text-xl font-semibold mb-4">Explorar mais emojis</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={`/category/${emoji.categorySlug}`} className="text-primary hover:underline font-medium">
                  → Ver todos os {category?.name || 'emojis desta categoria'}
                </Link>
              </li>
              {primaryRelated && (
                <li>
                  <Link to={`/emoji/${primaryRelated.slug}`} className="text-primary hover:underline font-medium">
                    → Comparar: <span className="emoji">{emoji.unicode}</span> vs <span className="emoji">{primaryRelated.unicode}</span> {primaryRelated.name}
                  </Link>
                </li>
              )}
              {relatedEmojis[1] && (
                <li>
                  <Link to={`/emoji/${relatedEmojis[1].slug}`} className="text-primary hover:underline font-medium">
                    → Veja também: <span className="emoji">{relatedEmojis[1].unicode}</span> {relatedEmojis[1].name}
                  </Link>
                </li>
              )}
            </ul>
          </section>

          {/* Você também pode gostar */}
          {categoryEmojis.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Você também pode gostar</h2>
              <div className="grid grid-cols-3 gap-3">
                {categoryEmojis.map(e => (
                  <Link 
                    key={e.slug} 
                    to={`/emoji/${e.slug}`} 
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="emoji text-4xl group-hover:scale-110 transition-transform duration-300">{e.unicode}</span>
                    <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">{e.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </Layout>
  );
};

export default EmojiDetail;
