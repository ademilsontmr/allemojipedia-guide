// Cloudflare Pages Function
interface PagesFunctionContext {
  request: Request;
  next: () => Promise<Response>;
}

export const onRequest = async (context: PagesFunctionContext) => {
  const response = await context.next();
  const url = new URL(context.request.url);
  
  // Definir MIME types corretos para arquivos JavaScript
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.mjs')) {
    response.headers.set('Content-Type', 'application/javascript; charset=utf-8');
  } else if (url.pathname.endsWith('.css')) {
    response.headers.set('Content-Type', 'text/css; charset=utf-8');
  } else if (url.pathname.endsWith('.json')) {
    response.headers.set('Content-Type', 'application/json; charset=utf-8');
  } else if (url.pathname.endsWith('.html')) {
    response.headers.set('Content-Type', 'text/html; charset=utf-8');
  } else if (url.pathname.endsWith('.wasm')) {
    response.headers.set('Content-Type', 'application/wasm');
  }
  
  return response;
};

