import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import CategoryWrapper from "./pages/CategoryWrapper";
import EmojiDetailWrapper from "./pages/EmojiDetailWrapper";
import People from "./pages/People";
import PeopleSubcategoryWrapper from "./pages/PeopleSubcategoryWrapper";
import Sitemap from "./pages/Sitemap";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryWrapper />} />
            <Route path="/emoji/:slug" element={<EmojiDetailWrapper />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:slug" element={<PeopleSubcategoryWrapper />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
