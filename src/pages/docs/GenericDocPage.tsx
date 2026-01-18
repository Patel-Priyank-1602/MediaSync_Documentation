import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { useLocation } from "react-router-dom";

// Complete navigation order matching the sidebar
const navigationOrder = [
  // Introduction
  { title: "Overview", href: "/docs/introduction/overview" },
  { title: "Architecture & Flow", href: "/docs/introduction/architecture" },
  { title: "Use Cases", href: "/docs/introduction/use-cases" },
  // Getting Started
  { title: "System Requirements", href: "/docs/getting-started/requirements" },
  { title: "Installation", href: "/docs/getting-started/installation" },
  { title: "First-Time Setup", href: "/docs/setup" },
  { title: "Network Requirements", href: "/docs/getting-started/network" },
  // Usage Guide
  { title: "Controller Dashboard", href: "/docs/usage" },
  { title: "Joining as a Client", href: "/docs/usage/client" },
  { title: "Playback Controls", href: "/docs/usage/playback" },
  { title: "Host vs Client Behavior", href: "/docs/usage/host-vs-client" },
  // Features
  { title: "YouTube Synchronization", href: "/docs/features/youtube" },
  { title: "Local Video Sync", href: "/docs/features/local-video" },
  { title: "Local Audio Sync", href: "/docs/features/local-audio" },
  { title: "Real-Time Seek & Drift", href: "/docs/features/seek-drift" },
  { title: "QR Code Device Join", href: "/docs/features/qr-codes" },
  { title: "Multi-Client Handling", href: "/docs/features/multi-client" },
  // Dashboard
  { title: "Live Client Status", href: "/docs/dashboard/client-status" },
  { title: "Playback State Monitor", href: "/docs/dashboard/playback-state" },
  { title: "Sync Health Indicators", href: "/docs/dashboard/sync-health" },
  // Configuration
  { title: "config.json Overview", href: "/docs/config" },
  { title: "All Configuration Options", href: "/docs/config/options" },
  { title: "Performance Tuning", href: "/docs/config/performance" },
  { title: "Security Settings", href: "/docs/config/security" },
  // Internals (Advanced)
  { title: "WebSocket Sync Logic", href: "/docs/internals/websocket" },
  { title: "Time Drift Handling", href: "/docs/internals/drift" },
  { title: "Event Broadcasting Model", href: "/docs/internals/events" },
  { title: "Latency Optimization", href: "/docs/internals/latency" },
  // Troubleshooting
  { title: "Common Errors", href: "/docs/troubleshooting" },
  { title: "Sync Delay Issues", href: "/docs/troubleshooting/sync-delay" },
  { title: "Media Loading Failures", href: "/docs/troubleshooting/media-loading" },
  { title: "Network Problems", href: "/docs/troubleshooting/network" },
  // FAQ
  { title: "Supported Devices", href: "/docs/faq" },
  { title: "Media Size Limits", href: "/docs/faq/media-limits" },
  { title: "Browser Compatibility", href: "/docs/faq/browsers" },
];

const GenericDocPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Generate title from the last part of the path
  const title = pathParts[pathParts.length - 1]
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") || "Documentation";

  // Generate breadcrumb items
  const breadcrumbItems = pathParts.slice(1).map((part, index) => ({
    label: part
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    href: index < pathParts.length - 2 ? `/${pathParts.slice(0, index + 2).join("/")}` : undefined,
  }));

  // Find current page index in navigation order
  const currentIndex = navigationOrder.findIndex(
    (item) => item.href === location.pathname
  );

  // Get previous and next items
  const previousItem = currentIndex > 0 ? navigationOrder[currentIndex - 1] : undefined;
  const nextItem = currentIndex < navigationOrder.length - 1 && currentIndex !== -1 
    ? navigationOrder[currentIndex + 1] 
    : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-5xl px-6 py-8 md:px-12">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-5xl font-bold text-foreground mb-6">{title}</h1>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              This documentation page is coming soon. Check back later for more information about {title.toLowerCase()}.
            </p>

            <div className="rounded-lg border border-border bg-card p-6 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                Learn how to integrate this feature into your application with our step-by-step guide.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Prerequisites and requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Installation and setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Configuration options
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Example implementations
                </li>
              </ul>
            </div>

            <DocNavigation
              previous={previousItem}
              next={nextItem}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenericDocPage;
