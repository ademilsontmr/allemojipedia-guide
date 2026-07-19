import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const hasFileExtension = (pathname: string) => /\.[a-z0-9]+$/i.test(pathname);

/**
 * Client fallback for local Vite / SPA navigations without a trailing slash.
 * Production 301s are handled by Cloudflare Pages `functions/_middleware.js`.
 */
const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;

    if (pathname === "/") return;
    if (hasFileExtension(pathname)) return;
    if (pathname.endsWith("/")) return;

    navigate(`${pathname}/${search}${hash}`, { replace: true });
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;
