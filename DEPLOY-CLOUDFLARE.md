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

### 1. Configurar Redirect Rules no Cloudflare

Vá em: **Cloudflare Dashboard > Seu domínio > Rules > Redirect Rules**

**Regra 1: Forçar HTTPS**
- Nome: "Force HTTPS"
- If: `Scheme` equals `http`
- Then: Dynamic redirect
  - Type: `301 Permanent Redirect`
  - Expression: `concat("https://", http.host, http.request.uri.path)`

**Regra 2: Remover www**
- Nome: "Remove www"
- If: `Hostname` equals `www.allemojipedia.com`
- Then: Static redirect
  - Type: `301 Permanent Redirect`
  - URL: `https://allemojipedia.com$request_uri`

### 2. Configurar SSL/TLS

Vá em: **SSL/TLS > Overview**
- Selecione: **Full (strict)**

### 3. Aguardar Recrawl do Google

Depois de configurar os redirecionamentos:
- Aguarde 24-48 horas para o Google recrawl
- Os erros de redirecionamento vão diminuir gradualmente
- Você pode solicitar reindexação de URLs importantes no Search Console

### 4. Verificar Sitemap

Certifique-se que o sitemap está usando apenas HTTPS sem www:
- ✅ `https://allemojipedia.com/emoji/...`
- ❌ `http://allemojipedia.com/emoji/...`
- ❌ `https://www.allemojipedia.com/emoji/...`
