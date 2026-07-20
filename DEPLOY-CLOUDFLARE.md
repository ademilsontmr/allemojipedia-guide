# Deploy no Cloudflare Pages

## Fluxo padrão: automático (Git)

1. Commit e push em `main`
2. Cloudflare Pages faz o build (`npm run build` → `dist`)
3. `https://allemojipedia.com` atualiza sozinho

Isso já está ativo (produção refletiu os commits de editorial sem `wrangler` local).

Dashboard: [Workers & Pages](https://dash.cloudflare.com) → projeto do site → **Deployments** para ver cada push.

## Deploy manual via Wrangler (opcional / emergência)

Só use se o deploy automático do Git estiver parado.

```bash
npm install -g wrangler   # uma vez
wrangler login            # uma vez — abre o navegador
npm run deploy            # build + wrangler pages deploy
```

Equivalente:

```bash
npm run build
npx wrangler pages deploy dist --project-name=allemojipedia --branch=main
```

## Domínio customizado

1. https://dash.cloudflare.com → **Workers e Pages**
2. Projeto **allemojipedia** (ou o nome atual do Pages)
3. **Custom domains** → `allemojipedia.com` (e `www` se precisar)

## Troubleshooting

Se der erro de autenticação:
```bash
wrangler logout
wrangler login
```

Se der erro de projeto não encontrado, crie o projeto primeiro:
```bash
npx wrangler pages project create allemojipedia
```


---

## Corrigir Erros de Redirecionamento no Google Search Console

Se você está vendo muitas páginas com redirecionamento no Google Search Console, siga estes passos:

### Problema: "Página com redirecionamento" com validação falha

Isso acontece quando:
1. URLs com `www` ou `http://` ainda estão sendo rastreadas pelo Google
2. Redirecionamentos em cadeia (múltiplos redirects)
3. Google ainda tem URLs antigas indexadas da migração anterior

### Solução no Cloudflare Pages

#### 1. Verificar arquivo `_redirects`

O arquivo `public/_redirects` deve ter:

```
# Force HTTPS and non-www
http://allemojipedia.com/* https://allemojipedia.com/:splat 301!
http://www.allemojipedia.com/* https://allemojipedia.com/:splat 301!
https://www.allemojipedia.com/* https://allemojipedia.com/:splat 301!
```

Não adicione fallback global `/* /index.html 200`. O build gera HTML estático para as rotas válidas e URLs inválidas devem retornar 404 real para evitar soft 404 no Google.

#### 2. Configurar Redirect Rules no Cloudflare Dashboard

Vá em: **Cloudflare Dashboard > Seu domínio > Rules > Redirect Rules**

**Regra 1: Force HTTPS**
- Nome: "Force HTTPS"
- If: `Scheme` equals `http`
- Then: Dynamic redirect
  - Type: `301 Permanent Redirect`
  - Expression: `concat("https://", http.host, http.request.uri.path)`

**Regra 2: Remove www**
- Nome: "Remove www"
- If: `Hostname` equals `www.allemojipedia.com`
- Then: Dynamic redirect
  - Type: `301 Permanent Redirect`
  - Expression: `concat("https://allemojipedia.com", http.request.uri.path)`

**Regra 3 (opcional): Force trailing slash (301)**
- Nome: "Force trailing slash"
- If (Expression):
  `(http.request.uri.path ne "/" and not ends_with(http.request.uri.path, "/") and not http.request.uri.path contains ".")`
- Then: Dynamic redirect
  - Type: `301 Permanent Redirect`
  - Expression:
    `concat("https://", http.host, http.request.uri.path, "/", if(http.request.uri.query ne "", concat("?", http.request.uri.query), ""))`

**Não use** `functions/_middleware.js` no Pages para isso — em jul/2026 isso tirou `allemojipedia.com` do ar (`ERR_CONNECTION_TIMED_OUT`). Prefira a Redirect Rule da zona ou o 308 nativo do Pages.

#### 3. Verificar Sitemap

Certifique-se que TODAS as URLs no sitemap:
- ✅ Usam `https://` (não http://)
- ✅ NÃO têm `www`
- ✅ TÊM trailing slash no final (/)

Exemplo correto:
```
https://allemojipedia.com/
https://allemojipedia.com/emoji/skull/
https://allemojipedia.com/category/smileys-and-emotion/
```

Exemplo ERRADO:
```
http://allemojipedia.com/emoji/skull/
https://www.allemojipedia.com/category/smileys-and-emotion/
```

#### 4. Aguardar Recrawl do Google

- Após a migração de servidor, é NORMAL ter muitas páginas com redirecionamento
- Google ainda tem URLs antigas indexadas (da Vercel ou configuração anterior)
- Essas URLs antigas redirecionam corretamente para as novas
- Aguarde 2-4 semanas para o Google recrawlear
- O número de redirecionamentos vai diminuir gradualmente

#### 5. (Opcional) Solicitar Reindexação

No Google Search Console:
1. Vá em "Inspeção de URL"
2. Cole URLs importantes (homepage, categorias principais)
3. Clique em "Solicitar indexação"

**NÃO faça isso para todas as URLs** - o Google vai recrawlear automaticamente.

### Por que isso acontece?

Quando você migra de servidor (Vercel → Cloudflare):
1. Google ainda tem milhares de URLs antigas indexadas
2. Essas URLs antigas redirecionam para as novas (correto!)
3. Aparecem como "Página com redirecionamento" no Search Console
4. Isso é ESPERADO e vai se resolver sozinho em 2-4 semanas

### Checklist Final ✅

- [ ] Arquivo `_redirects` configurado (força HTTPS, remove www)
- [ ] Redirect Rules no Cloudflare Dashboard criadas
- [ ] Sitemap usa apenas URLs canônicas (https, sem www, COM trailing slash)
- [ ] SSL/TLS configurado como "Full (strict)"
- [ ] Aguardando 2-4 semanas para recrawl completo do Google

### Importante ⚠️

Os 2,31 mil redirecionamentos que você está vendo são NORMAIS após migração. Não é um erro! É o Google encontrando URLs antigas que redirecionam corretamente para as novas. Com o tempo, esse número vai diminuir.
