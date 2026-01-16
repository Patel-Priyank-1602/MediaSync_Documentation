import { Video, Music, Wifi, Settings, Terminal, AlertTriangle, Smartphone, FileCode } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { DocCard } from "@/components/docs/DocCard";
import { Breadcrumb } from "@/components/docs/Breadcrumb";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-4 py-8 md:px-12">
            <Breadcrumb items={[{ label: "Documentation" }]} />

            <h1 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">Documentation</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Everything you need to set up and use the Real-Time Sync Media Server.
            </p>

            {/* Getting Started Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Getting Started</h2>
              <p className="text-muted-foreground mb-6">
                Learn how to install, configure, and run your own media sync server.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <DocCard
                  icon={<Settings className="h-6 w-6" />}
                  title="Installation & Setup"
                  description="Step-by-step guide to install dependencies and configure your server."
                  href="/docs/setup"
                />
                <DocCard
                  icon={<Terminal className="h-6 w-6" />}
                  title="How to Use"
                  description="Learn how to start the server and connect devices."
                  href="/docs/usage"
                />
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Features</h2>
              <p className="text-muted-foreground mb-6">
                Explore the capabilities of the Real-Time Sync Media Server.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <DocCard
                  icon={<Video className="h-6 w-6" />}
                  title="YouTube Sync"
                  description="Load and sync YouTube videos using URL or Video ID."
                  href="/docs/features/youtube"
                />
                <DocCard
                  icon={<Music className="h-6 w-6" />}
                  title="Local Media"
                  description="Upload and sync local video and audio files."
                  href="/docs/features/local-media"
                />
                <DocCard
                  icon={<Smartphone className="h-6 w-6" />}
                  title="QR Code Access"
                  description="Generate QR codes for easy WiFi and page access."
                  href="/docs/features/qr-codes"
                />
                <DocCard
                  icon={<Wifi className="h-6 w-6" />}
                  title="Status Dashboard"
                  description="Monitor connected clients in real-time."
                  href="/docs/features/dashboard"
                />
              </div>
            </section>

            {/* Configuration Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Configuration</h2>
              <p className="text-muted-foreground mb-6">
                Learn how to configure the server for your network.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <DocCard
                  icon={<FileCode className="h-6 w-6" />}
                  title="config.json"
                  description="Configure WiFi credentials and server settings."
                  href="/docs/config"
                />
                <DocCard
                  icon={<AlertTriangle className="h-6 w-6" />}
                  title="Troubleshooting"
                  description="Common issues and how to fix them."
                  href="/docs/troubleshooting"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;
