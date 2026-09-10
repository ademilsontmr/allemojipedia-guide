import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { signalContentReady } from "@/utils/seoStaticPreserve";

/**
 * Reveals React UI after the first route paint when SSG HTML was preserved.
 * EmojiDetail also signals when emoji data is ready (stronger for that route).
 */
export const ContentReadySignal = () => {
  const location = useLocation();

  useEffect(() => {
    // Single-emoji detail pages signal from EmojiDetail after data loads.
    const path = location.pathname.replace(/\/$/, "") || "/";
    const emojiDetailOnly = /^\/emoji\/[^/]+$/.test(path) && !path.includes("-vs-");
    if (emojiDetailOnly) return;

    const id = window.requestAnimationFrame(() => signalContentReady());
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return null;
};
