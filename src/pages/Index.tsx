import { Video, Music, Wifi, Play, SkipForward, QrCode, Users, Server, Github } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import { GridBackground } from "@/components/ui/grid-background";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Grid Background */}
      <GridBackground
        className="fixed inset-0 z-0"
        gridSize={50}
        gridColor="rgba(59, 130, 246, 0.15)"
        gridOpacity={1}
      />

      {/* Light Rays Background */}
      <LightRays
        className="fixed inset-0 z-0"
        count={7}
        color="rgba(59, 130, 246, 0.25)"
        blur={40}
        speed={12}
        length="80vh"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-14">
        <div className="container relative z-10 px-4 py-12 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl mb-4 sm:mb-6">
              <span className="block drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">REAL TIME</span>
              <span
                className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent skew-x-[-8deg]"
                style={{
                  fontStyle: 'italic'
                }}
              >
                MEDIA SYNC
              </span>
              <span className="block drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">SERVER</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground/80 leading-relaxed md:text-lg max-w-3xl mx-auto px-2 sm:px-4">
              A self-hosted Node.js server that lets one person control synchronized media playback for everyone on a local network.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-4">
              <Button variant="signup" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 h-auto rounded-full w-full sm:w-auto" onClick={() => navigate("/docs")}>
                Get Started <span className="ml-1">→</span>
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 h-auto rounded-full border border-border hover:bg-muted/50 w-full">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  Star on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              What can MediaSync do?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
              Experience seamless synchronization without the lag.
            </p>
          </div>
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

      {/* Code Preview */}
      <section className="py-20 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Quick Setup</h2>
            <p className="text-muted-foreground">Get started in minutes with a simple installation.</p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/80">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-sm text-muted-foreground">Terminal</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-foreground">
                <span className="text-muted-foreground"># Clone the repository</span>{"\n"}
                <span className="text-primary">git clone</span> {"https://github.com/Patel-Priyank-1602/File_Transfer.git"}{"\n"}
                <span className="text-primary">cd</span> File_Transfer{"\n\n"}
                <span className="text-muted-foreground"># Install dependencies</span>{"\n"}
                <span className="text-primary">pip install</span> -r requirements.txt{"\n\n"}
                <span className="text-muted-foreground"># Start the server</span>{"\n"}
                <span className="text-primary">python</span> app.py
              </code>
            </pre>
          </div>
        </div>
      </section>

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Index;
