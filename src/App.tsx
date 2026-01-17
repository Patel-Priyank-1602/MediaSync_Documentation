import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import SetupPage from "./pages/docs/SetupPage";
import SetupGuidePage from "./pages/docs/SetupGuidePage";
import UsagePage from "./pages/docs/UsagePage";
import TroubleshootingPage from "./pages/docs/TroubleshootingPage";
import FAQPage from "./pages/docs/FAQPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GenericDocPage from "./pages/docs/GenericDocPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/setup" element={<SetupPage />} />
          <Route path="/docs/setup-guide" element={<SetupGuidePage />} />
          <Route path="/docs/usage" element={<UsagePage />} />
          <Route path="/docs/troubleshooting" element={<TroubleshootingPage />} />
          <Route path="/docs/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Generic doc pages for all other routes */}
          <Route path="/docs/*" element={<GenericDocPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
