# Deploy no Cloudflare Pages via Wrangler

## Passo 1: Instalar Wrangler (apenas uma vez)

Abra o terminal e execute:

```bash
npm install -g wrangler
```

## Passo 2: Fazer login no Cloudflare

```bash
wrangler login
```

Isso vai abrir o navegador para você autorizar. Faça login com a conta que tem o domínio allemojipedia.com.

## Passo 3: Fazer o build do projeto

```bash
npm run build
```

Isso vai criar a pasta `dist` com todos os arquivos prontos para deploy.

## Passo 4: Fazer o deploy

```bash
npx wrangler pages deploy dist --project-name=allemojipedia --branch=main
```

## Passo 5: Configurar o domínio customizado

Depois do primeiro deploy:

1. Vá em https://dash.cloudflare.com
2. Clique em **Workers e Pages**
3. Clique no projeto **allemojipedia**
4. Vá em **Custom domains**
5. Clique em **Set up a custom domain**
6. Digite: `allemojipedia.com`
7. Clique em **Continue**
8. O Cloudflare vai configurar automaticamente

## Próximos deploys

Depois da primeira vez, é só executar:

```bash
npm run build
npx wrangler pages deploy dist --project-name=allemojipedia --branch=main
```

Ou use o script que criei:

```bash
npm run deploy
```

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

# SPA fallback (must be last)
/* /index.html 200
```

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
