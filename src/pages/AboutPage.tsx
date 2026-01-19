import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
  ArrowLeft,
  Music,
  MonitorPlay,
  Youtube,
  Globe,
  Speaker,
  Code2,
  Laptop2Icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { RetroGrid } from "@/components/ui/retro-grid"
import { Footer } from "@/components/layout/Footer";

const AboutMe = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof document !== "undefined") {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const journeySteps = [
    {
      icon: Speaker,
      title: "The Late Night Audio Problem",
      description: "It started late one night when a friend and I wanted to listen to music. We didn't have external speakers, and our individual laptop speakers just weren't loud enough. We tried to hit the 'Spacebar' on both laptops at the exact same time to double the volume, but there was always a minor split-second delay that caused an annoying echo. I realized manual syncing was impossible.",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500/30",
    },
    {
      icon: Youtube,
      title: "The Search & First Prototype",
      description: "I searched the internet for a solution, but I couldn't find a free tool that did exactly what I wanted. So, I decided to build it myself. My first iteration was designed specifically for YouTube videos. I built a mechanism where one 'host' could control the play/pause state and timestamp, and the other client would sync up instantly. It worked, and the echo was gone.",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500",
      borderColor: "border-red-500/30",
    },
    {
      icon: Code2,
      title: "Overcoming API Limits",
      description: "Naturally, I wanted to extend this to Spotify. However, I hit a wall with API permissions and restrictions that made real-time synchronization difficult for a custom app. Instead of giving up, I pivoted to supporting Local Video and Local Music files. This actually made the tool more powerful, allowing users to play their own high-quality offline media files in perfect sync.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Globe,
      title: "Free & Open Source for Everyone",
      description: "Today, Media Sync successfully handles Local Video, Local Music, and YouTube playback. It turns multiple devices into a unified sound system. I decided to make this project completely free and open source so that anyone facing that same 'quiet laptop' problem can solve it instantly without paying for premium software.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/logo.webp"
                                alt="FileTransfer Logo"
                                className="h-9 w-9 object-contain"
                            />
                            <span className="font-semibold text-lg">MediaSync</span>
                        </Link>
            <div className="flex items-center gap-2">
              {/* Desktop Back Home Button */}
              <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
                <Link to="/docs">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back Home
                </Link>
              </Button>
              {/* Mobile Back Home Button */}
              <Button variant="outline" size="icon" asChild className="flex sm:hidden h-9 w-9">
                <Link to="/docs">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back Home</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero with Retro Grid Background */}
        <div className="relative h-[500px] w-full overflow-hidden bg-background">
          <RetroGrid className="opacity-100" />

          <section className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-background/40 to-background/80">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                {/* Profile Image */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl" />
                    <div className="
      relative
      w-48 h-48 
      md:w-56 md:h-56 
      rounded-3xl 
      bg-gradient-to-br from-primary/20 to-primary/5 
      border-2 border-primary/40 
      overflow-hidden 
      shadow-xl
    ">
                    <img
                      src="/Priyank.jpeg"
                      alt="Priyank Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-black mb-3 text-foreground">
                    Priyank Patel
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Developer & Creator
                  </p>
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    Building tools that solve everyday problems.
                    Media Sync allows you to synchronize video and audio playback across multiple devices
                    perfectly, turning laptops into a unified sound system.
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Gandhinagar, Gujarat, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:patelpriyank2626@gmail.com" className="hover:text-primary transition-colors">
                        patelpriyank2626@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Patel-Priyank-1602" target="_blank" rel="noopener noreferrer" className="gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.linkedin.com/in/patel-priyank-945131288/" target="_blank" rel="noopener noreferrer" className="gap-2">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <Link to="/contact">
                        <Mail className="h-4 w-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Origin Story Banner */}
        <section className="py-8 px-4 bg-primary/5 border-y border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary mb-2">THE SPARK</p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Born from a late-night struggle with quiet laptop speakers</span> and a failed attempt to manual sync.
            </p>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                How It Started
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The journey from pressing the spacebar at the same time to a fully automated synchronization platform.
              </p>
            </div>

            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-primary/50 to-transparent md:left-8" />
                  )}

                  {/* Step Card */}
                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} flex items-center justify-center relative z-10`}>
                      <step.icon className={`h-6 w-6 md:h-8 md:w-8 ${step.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Pledge Section */}
        <section className="py-16 px-4 bg-card/30 backdrop-blur-sm border-y border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 w-full">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-background rounded-full border border-primary/20">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Open Source & Community Driven
              </h3>

              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                I believe that basic utilities like this should be accessible to everyone.
                That's why I made Media Sync <span className="text-primary font-semibold">100% Free and Open Source</span>.
                Whether you want to inspect the code, contribute a new feature, or just use it to watch movies with friends, the project is yours to explore.
              </p>

              <Button variant="outline" size="lg" asChild className="gap-2">
                <a href="https://github.com/Patel-Priyank-1602/Media_Sync" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Let's Build Something Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have an idea or want to collaborate? I'm always interested in working on meaningful projects
              that solve real problems. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a href="https://priyank.pages.dev" target="_blank" rel="noopener noreferrer">
                  <Laptop2Icon className="h-5 w-5" />
                  My Portfolio
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;