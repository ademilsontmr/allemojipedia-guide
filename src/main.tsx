import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeProvider } from "./hooks/use-theme";
import { preserveStaticSeoBeforeReact } from "./utils/seoStaticPreserve";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

preserveStaticSeoBeforeReact(rootElement);

createRoot(rootElement).render(
  <ErrorBoundary>
    <ThemeProvider defaultTheme="system" storageKey="allemojipedia-theme">
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
