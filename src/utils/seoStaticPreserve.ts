/** Keep SSG HTML visible until the React route has real content (avoids soft-404 “Loading…” snapshots). */

export const SEO_STATIC_PRESERVE_ID = "seo-static-preserve";
export const CONTENT_READY_EVENT = "allemojipedia:content-ready";

export const signalContentReady = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONTENT_READY_EVENT));
};

/**
 * Clone `.static-seo-fallback` out of `#root` before React mounts, hide `#root`
 * until content is ready, then swap. Crawlers that execute JS still see article HTML.
 */
export const preserveStaticSeoBeforeReact = (rootElement: HTMLElement): void => {
  const staticFallback = rootElement.querySelector(".static-seo-fallback");
  if (!staticFallback || document.getElementById(SEO_STATIC_PRESERVE_ID)) return;

  const preserved = document.createElement("div");
  preserved.id = SEO_STATIC_PRESERVE_ID;
  preserved.appendChild(staticFallback.cloneNode(true));
  rootElement.parentElement?.insertBefore(preserved, rootElement);

  rootElement.style.display = "none";
  rootElement.setAttribute("data-seo-waiting", "true");

  const reveal = () => {
    preserved.remove();
    rootElement.style.display = "";
    rootElement.removeAttribute("data-seo-waiting");
  };

  window.addEventListener(CONTENT_READY_EVENT, reveal, { once: true });
  // Safety net if a route never signals (error boundary, etc.)
  window.setTimeout(reveal, 10000);
};
