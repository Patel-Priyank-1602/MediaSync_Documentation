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

// Introduction
import IntroductionOverview from "./pages/docs/IntroductionOverview";
import IntroductionArchitecture from "./pages/docs/IntroductionArchitecture";
import IntroductionUseCases from "./pages/docs/IntroductionUseCases";

// Getting Started
import GettingStartedRequirements from "./pages/docs/GettingStartedRequirements";
import GettingStartedInstallation from "./pages/docs/GettingStartedInstallation";
import GettingStartedSetup from "./pages/docs/GettingStartedSetup";
import GettingStartedNetwork from "./pages/docs/GettingStartedNetwork";
import SetupGuidePage from "./pages/docs/SetupGuidePage";

// Usage Guide
import UsageControllerDashboard from "./pages/docs/UsageControllerDashboard";
import UsageJoiningClient from "./pages/docs/UsageJoiningClient";
import UsagePlaybackControls from "./pages/docs/UsagePlaybackControls";
import UsageHostClient from "./pages/docs/UsageHostClient";

// Features
import FeaturesYouTubeSync from "./pages/docs/FeaturesYouTubeSync";
import FeaturesLocalVideo from "./pages/docs/FeaturesLocalVideo";
import FeaturesLocalAudio from "./pages/docs/FeaturesLocalAudio";
import FeaturesSeekDrift from "./pages/docs/FeaturesSeekDrift";
import FeaturesQRCode from "./pages/docs/FeaturesQRCode";
import FeaturesMultiClient from "./pages/docs/FeaturesMultiClient";

// Dashboard
import DashboardClientStatus from "./pages/docs/DashboardClientStatus";
import DashboardPlaybackMonitor from "./pages/docs/DashboardPlaybackMonitor";
import DashboardSyncHealth from "./pages/docs/DashboardSyncHealth";

// Configuration
import ConfigOverview from "./pages/docs/ConfigOverview";
import ConfigOptions from "./pages/docs/ConfigOptions";
import ConfigPerformance from "./pages/docs/ConfigPerformance";
import ConfigSecurity from "./pages/docs/ConfigSecurity";

// Troubleshooting
import TroubleshootingErrors from "./pages/docs/TroubleshootingErrors";
import TroubleshootingSyncDelay from "./pages/docs/TroubleshootingSyncDelay";
import TroubleshootingMedia from "./pages/docs/TroubleshootingMedia";
import TroubleshootingNetwork from "./pages/docs/TroubleshootingNetwork";

// FAQ
import FAQDevices from "./pages/docs/FAQDevices";
import FAQMediaLimits from "./pages/docs/FAQMediaLimits";
import FAQBrowsers from "./pages/docs/FAQBrowsers";

// Roadmap
import RoadmapFeatures from "./pages/docs/RoadmapFeatures";
import RoadmapLimitations from "./pages/docs/RoadmapLimitations";
import RoadmapContributing from "./pages/docs/RoadmapContributing";

// Contributing
import ContributingStructure from "./pages/docs/ContributingStructure";
import ContributingStandards from "./pages/docs/ContributingStandards";
import ContributingPR from "./pages/docs/ContributingPR";

// Legal
import LegalLicense from "./pages/docs/LegalLicense";
import LegalCredits from "./pages/docs/LegalCredits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
          <Route path="/docs/setup-guide" element={<SetupGuidePage />} />
          <Route path="/docs/getting-started/requirements" element={<GettingStartedRequirements />} />
          <Route path="/docs/getting-started/installation" element={<GettingStartedInstallation />} />
          <Route path="/docs/getting-started/setup" element={<GettingStartedSetup />} />
          <Route path="/docs/getting-started/network" element={<GettingStartedNetwork />} />
          
          {/* Usage Guide */}
          <Route path="/docs/usage/controller" element={<UsageControllerDashboard />} />
          <Route path="/docs/usage/joining" element={<UsageJoiningClient />} />
          <Route path="/docs/usage/playback" element={<UsagePlaybackControls />} />
          <Route path="/docs/usage/host-client" element={<UsageHostClient />} />
          
          {/* Features */}
          <Route path="/docs/features/youtube" element={<FeaturesYouTubeSync />} />
          <Route path="/docs/features/local-video" element={<FeaturesLocalVideo />} />
          <Route path="/docs/features/local-audio" element={<FeaturesLocalAudio />} />
          <Route path="/docs/features/seek-drift" element={<FeaturesSeekDrift />} />
          <Route path="/docs/features/qr-code" element={<FeaturesQRCode />} />
          <Route path="/docs/features/multi-client" element={<FeaturesMultiClient />} />
          
          {/* Dashboard */}
          <Route path="/docs/dashboard/status" element={<DashboardClientStatus />} />
          <Route path="/docs/dashboard/playback" element={<DashboardPlaybackMonitor />} />
          <Route path="/docs/dashboard/sync-health" element={<DashboardSyncHealth />} />
          
          {/* Configuration */}
          <Route path="/docs/config/overview" element={<ConfigOverview />} />
          <Route path="/docs/config/options" element={<ConfigOptions />} />
          <Route path="/docs/config/performance" element={<ConfigPerformance />} />
          <Route path="/docs/config/security" element={<ConfigSecurity />} />
          
          {/* Troubleshooting */}
          <Route path="/docs/troubleshooting/errors" element={<TroubleshootingErrors />} />
          <Route path="/docs/troubleshooting/sync-delay" element={<TroubleshootingSyncDelay />} />
          <Route path="/docs/troubleshooting/media" element={<TroubleshootingMedia />} />
          <Route path="/docs/troubleshooting/network" element={<TroubleshootingNetwork />} />
          
          {/* FAQ */}
          <Route path="/docs/faq/devices" element={<FAQDevices />} />
          <Route path="/docs/faq/media-limits" element={<FAQMediaLimits />} />
          <Route path="/docs/faq/browsers" element={<FAQBrowsers />} />
          
          {/* Roadmap */}
          <Route path="/docs/roadmap/features" element={<RoadmapFeatures />} />
          <Route path="/docs/roadmap/limitations" element={<RoadmapLimitations />} />
          <Route path="/docs/roadmap/contributing" element={<RoadmapContributing />} />
          
          {/* Contributing */}
          <Route path="/docs/contributing/structure" element={<ContributingStructure />} />
          <Route path="/docs/contributing/standards" element={<ContributingStandards />} />
          <Route path="/docs/contributing/pr" element={<ContributingPR />} />
          
          {/* Legal */}
          <Route path="/docs/legal/license" element={<LegalLicense />} />
          <Route path="/docs/legal/credits" element={<LegalCredits />} />
          
          {/* Other pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
