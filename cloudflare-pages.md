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

- O arquivo `_redirects` na pasta `public` já está configurado para redirecionar todas as rotas para `index.html` (necessário para SPAs com React Router)
- O build gera os arquivos na pasta `dist`
- O Cloudflare Pages deve servir os arquivos da pasta `dist`, não da raiz do projeto

