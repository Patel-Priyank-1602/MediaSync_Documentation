import { Navbar } from "@/components/layout/Navbar";
import { Server, Github, Heart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">
              About MediaSync
            </h1>
            <p className="text-lg text-muted-foreground">
              A passion project for synchronized media playback
            </p>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <section className="rounded-xl bg-card border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">The Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                Real-Time Sync Media Server is a self-hosted Node.js solution designed to synchronize 
                YouTube videos, local video files, and audio files across multiple devices on a local network. 
                Whether you're hosting a watch party, giving a presentation, or creating a shared audio 
                experience, this server ensures everyone stays in perfect sync.
              </p>
            </section>

            <section className="rounded-xl bg-card border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Why I Built This</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I wanted a simple, lightweight solution for synchronized media playback that doesn't 
                require complex cloud services or subscriptions. Something that works entirely on your 
                local network, giving you full control over your media experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The goal was to create something anyone can set up in minutes – just install Node.js, 
                configure your WiFi, and you're ready to go. No accounts, no tracking, no complexity.
              </p>
            </section>

            <section className="rounded-xl bg-card border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Node.js & Express</div>
                    <div className="text-sm text-muted-foreground">Server runtime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Socket.io</div>
                    <div className="text-sm text-muted-foreground">Real-time sync</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">QRCode</div>
                    <div className="text-sm text-muted-foreground">Easy device connection</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">HTML/CSS/JS</div>
                    <div className="text-sm text-muted-foreground">Client interface</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl bg-card border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Open Source</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This project is open source and free to use. Feel free to modify, distribute, 
                and contribute to make it even better.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4 text-destructive" />
                <span>Made with love for the community</span>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="signup" size="lg" onClick={() => navigate("/docs")}>
                Read Documentation
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">MediaSync</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button onClick={() => navigate("/about")} className="hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => navigate("/contact")} className="hover:text-foreground transition-colors">
                Contact
              </button>
              <button onClick={() => navigate("/docs")} className="hover:text-foreground transition-colors">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
