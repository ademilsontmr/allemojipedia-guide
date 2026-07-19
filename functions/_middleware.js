/**
 * Cloudflare Pages middleware — force trailing slash with HTTP 301.
 * Runs before static asset serving so Google sees a permanent redirect
 * instead of relying only on client-side React navigation.
 */

const FILE_EXTENSION = /\.[a-zA-Z0-9]+$/;

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const { pathname } = url;

  // Root, already canonical, static assets, and Cloudflare internals
  if (
    pathname === "/" ||
    pathname.endsWith("/") ||
    FILE_EXTENSION.test(pathname) ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/cdn-cgi/")
  ) {
    return context.next();
  }

  url.pathname = `${pathname}/`;
  return Response.redirect(url.toString(), 301);
}
