# Configuração do Cloudflare Pages

## Deploy automático (padrão)

Produção sobe **sozinha** a cada push em `main` no GitHub (`ademilsontmr/allemojipedia-guide`).

Não é preciso rodar `wrangler` no dia a dia: `git push origin main` → Cloudflare Pages build → `allemojipedia.com`.

Confirme no dashboard (Workers & Pages → projeto → Settings → Builds):

- **Production branch:** `main`
- **Deployments:** conectado ao repositório GitHub acima

## Build Settings

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (raiz do projeto)
- **Node.js version:** `20` (variável `NODE_VERSION` = `20`, campos name/value separados)
- **Framework preset:** None (ou Vite)

## Variáveis de Ambiente

- `NODE_VERSION` = `20` (se o build pedir Node)

Nenhuma outra variável é necessária para este projeto.

## Notas

- O arquivo `_redirects` na pasta `public` força HTTPS e remove `www`. Não use fallback global para `index.html`, porque as páginas válidas são geradas como HTML estático e URLs inválidas devem retornar 404 real.
- **Não use** `functions/_middleware.js` para trailing slash neste projeto — Pages Functions no edge chegou a causar `ERR_CONNECTION_TIMED_OUT` em produção.
- O arquivo `_headers` na pasta `public` também está configurado como backup
- O build gera os arquivos na pasta `dist`
- O Cloudflare Pages deve servir os arquivos da pasta `dist`, não da raiz do projeto

## Trailing slash (SEO)

Canônicas e sitemap usam sempre `/` no final.

1. Cloudflare Pages já redireciona pastas estáticas (`/path` → `/path/`) com **308** nativo
2. React (`TrailingSlashRedirect`) cobre o fallback no `npm run dev` e navegações SPA

Opcional no dashboard (zona Cloudflare), se quiser **301** explícito na borda (sem Pages Functions):

- **Rules → Redirect Rules → Create rule**
- Nome: `Force trailing slash 301`
- Expression:
  `(http.request.uri.path ne "/" and not ends_with(http.request.uri.path, "/") and not http.request.uri.path contains ".")`
- Target URL (Dynamic):
  `concat("https://", http.host, http.request.uri.path, "/", if(http.request.uri.query ne "", concat("?", http.request.uri.query), ""))`
- Status code: `301`
