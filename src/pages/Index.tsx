import { Video, Music, Wifi, Play, SkipForward, QrCode, Users, Server, Github } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container relative px-4 py-16 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <Server className="h-4 w-4" />
              Self-Hosted Media Sync Server
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-6xl">
              Real-Time Sync Media Server
            </h1>
            <p className="mt-2 text-lg text-primary font-medium md:text-xl">
              YouTube + Local Video + Local Audio
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed md:text-lg">
              A simple, self-hosted Node.js server designed to synchronize YouTube video, 
              Local Video and Local Audio playback across multiple clients on a local network. 
              Perfect for creating a shared viewing experience where one person can control 
              the video (play, pause, seek, load) for everyone else, all in real-time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="signup" size="lg" onClick={() => navigate("/docs")}>
                Read Documentation
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/docs/setup")}>
                Quick Setup Guide
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8 md:text-3xl">
            Features
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Video className="h-5 w-5" />}
              title="YouTube Sync"
              description="Load any YouTube video using its URL or 11-character ID. Seamlessly sync playback across all connected clients."
            >
              <div className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 border border-border">
                <div className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-muted-foreground truncate">
                  https://youtube.com/watch?v=...
                </div>
                <Button size="sm" variant="signup" className="text-xs">
                  Load
                </Button>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<Music className="h-5 w-5" />}
              title="Local Media Support"
              description="Upload your own video files (MP4/WebM) and audio files (MP3/WAV) from the controller device. Files automatically get hosted and synced."
            >
              <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted">
                  <Music className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-foreground">my-video.mp4</div>
                  <div className="text-xs text-muted-foreground">Uploading...</div>
                </div>
                <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full" />
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<Play className="h-5 w-5" />}
              title="Core Controls"
              description="Supports Play, Pause, Seek, and Restart. Full control over synchronized playback for all clients."
            >
              <div className="flex items-center justify-center gap-2 rounded-xl bg-muted/50 px-4 py-3 border border-border">
                <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                  <SkipForward className="h-4 w-4 rotate-180" />
                </Button>
                <Button size="icon" variant="signup" className="h-12 w-12 rounded-full">
                  <Play className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<QrCode className="h-5 w-5" />}
              title="QR Code Access"
              description="Generates QR codes for WiFi connection and for both controller and client pages. Easy setup for all devices."
            >
              <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 border border-border">
                <div className="h-16 w-16 bg-foreground/10 rounded-lg flex items-center justify-center">
                  <QrCode className="h-10 w-10 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-foreground font-medium">Scan to Connect</div>
                  <div className="text-xs text-muted-foreground">WiFi: YourHotspot</div>
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Status Dashboard"
              description="The controller page shows a live count of connected clients. Monitor your audience in real-time."
            >
              <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 border border-border">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary/30 border-2 border-card flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/40 border-2 border-card flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/50 border-2 border-card flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-foreground font-medium">3 Connected</span>
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<Wifi className="h-5 w-5" />}
              title="Easy Setup"
              description="Uses a simple config.json file to manage WiFi credentials. Get started in minutes with minimal configuration."
            >
              <div className="rounded-xl bg-muted/50 px-4 py-3 border border-border font-mono text-xs">
                <div className="text-muted-foreground">{"{"}</div>
                <div className="pl-4">
                  <span className="text-primary">"WIFI_SSID"</span>: <span className="text-green-400">"YourHotspot"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"WIFI_PASSWORD"</span>: <span className="text-green-400">"****"</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container px-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8 md:text-3xl">
            Tech Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <Server className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground">Server</h3>
              <p className="text-sm text-muted-foreground mt-1">Node.js, Express, Socket.io</p>
            </div>
            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <Video className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground">Client</h3>
              <p className="text-sm text-muted-foreground mt-1">HTML, CSS, JavaScript</p>
            </div>
            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <QrCode className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground">Utilities</h3>
              <p className="text-sm text-muted-foreground mt-1">qrcode (QR generation)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Index;
