import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que automaticamente faz scroll para o topo da página
 * quando a rota muda. Imperceptível ao usuário.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
