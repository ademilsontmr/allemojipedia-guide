# Configuração do Cloudflare Pages

Para que o projeto funcione corretamente no Cloudflare Pages, certifique-se de que as seguintes configurações estejam definidas no dashboard:

## Build Settings

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (raiz do projeto)
- **Node.js version:** 20 (ou superior)

## Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para este projeto.

## Notas

- O arquivo `_redirects` na pasta `public` força HTTPS e remove `www`. Não use fallback global para `index.html`, porque as páginas válidas são geradas como HTML estático e URLs inválidas devem retornar 404 real.
- O arquivo `functions/_middleware.ts` define os MIME types corretos para arquivos JavaScript, CSS e outros (resolve o erro de "application/octet-stream")
- O arquivo `_headers` na pasta `public` também está configurado como backup
- O build gera os arquivos na pasta `dist`
- O Cloudflare Pages deve servir os arquivos da pasta `dist`, não da raiz do projeto

