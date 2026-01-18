import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Introduction pages
import IntroductionOverview from "./pages/docs/IntroductionOverview";
import IntroductionArchitecture from "./pages/docs/IntroductionArchitecture";
import IntroductionUseCases from "./pages/docs/IntroductionUseCases";

// Getting Started pages
import GettingStartedRequirements from "./pages/docs/GettingStartedRequirements";
import GettingStartedInstallation from "./pages/docs/GettingStartedInstallation";
import SetupPage from "./pages/docs/SetupGuidePage";
import GettingStartedNetwork from "./pages/docs/GettingStartedNetwork";

// Usage, Troubleshooting, FAQ
import UsagePage from "./pages/docs/UsagePage";
import TroubleshootingPage from "./pages/docs/TroubleshootingPage";
import FAQPage from "./pages/docs/FAQPage";

// Fallback
import GenericDocPage from "./pages/docs/GenericDocPage";

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
          
          {/* Introduction */}
          <Route path="/docs/introduction/overview" element={<IntroductionOverview />} />
          <Route path="/docs/introduction/architecture" element={<IntroductionArchitecture />} />
          <Route path="/docs/introduction/use-cases" element={<IntroductionUseCases />} />
          
          {/* Getting Started */}
          <Route path="/docs/getting-started/requirements" element={<GettingStartedRequirements />} />
          <Route path="/docs/getting-started/installation" element={<GettingStartedInstallation />} />
          <Route path="/docs/setup" element={<SetupPage />} />
          <Route path="/docs/getting-started/network" element={<GettingStartedNetwork />} />
          
          {/* Usage Guide */}
          <Route path="/docs/usage" element={<UsagePage />} />
          
          {/* Troubleshooting */}
          <Route path="/docs/troubleshooting" element={<TroubleshootingPage />} />
          
          {/* FAQ */}
          <Route path="/docs/faq" element={<FAQPage />} />
          
          {/* Other pages */}
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
