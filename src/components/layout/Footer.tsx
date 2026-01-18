import { Link } from "react-router-dom";
import { 
  Github, 
  Mail, 
  ExternalLink, 
  ArrowUp, 
  Server, 
  Twitter, 
  Download,
  Contact,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-background pt-10 md:pt-20 pb-24 md:pb-10 overflow-hidden border-t border-border/40">
      
      {/* --- Visual Effects --- */}
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      {/* Background Glow Blobs */}
      <div className="absolute -top-[200px] -left-[200px] w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 relative mx-auto">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 group">
                <img src="/logo.webp" alt="MediaSync" className="h-9 w-9 md:h-12 md:w-12" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                MediaSync
              </span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed mb-5 md:mb-8 max-w-sm text-sm md:text-base">
              A self-hosted Node.js server for real-time media synchronization. 
              Simple, secure, and built for high-performance streaming.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3">
              <SocialLink 
                href="https://github.com/Patel-Priyank-1602" 
                icon={<Github className="h-5 w-5" />} 
                label="Github" 
              />
              <SocialLink 
                href="mailto:patelpriyank2526@gmail.com" 
                icon={<Mail className="h-5 w-5" />} 
                label="Email" 
              />
              <SocialLink 
                href="https://x.com/Priyank_P16" 
                icon={<Twitter className="h-5 w-5" />} 
                label="Twitter" 
              />
              <SocialLink 
                href="https://www.linkedin.com/in/patel-priyank-945131288/" 
                icon={<Linkedin className="h-5 w-5" />} 
                label="Website" 
              />
            </div>
          </div>

          {/* 2. Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
                Documentation
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <FooterLink to="/docs/setup">Installation</FooterLink>
                <FooterLink to="/docs/usage">How to Use</FooterLink>
                <FooterLink to="/docs/config">Configuration</FooterLink>
                <FooterLink to="/docs/troubleshooting">Troubleshooting</FooterLink>
                <FooterLink to="/docs/faq">FAQ</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
                Features
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <FooterLink to="/features/youtube">YouTube Sync</FooterLink>
                <FooterLink to="/features/local">Local Media</FooterLink>
                <FooterLink to="/features/qr">QR Access</FooterLink>
                <FooterLink to="/features/dashboard">Dashboard</FooterLink>
              </ul>
            </div>
          </div>

          {/* 3. Call to Action Card */}
          <div className="lg:col-span-3">
            <div className="rounded-xl md:rounded-2xl border border-border/50 bg-card p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-1.5 md:mb-2 text-sm md:text-base">
                Ready to Sync?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                Get your server running in less than 5 minutes.
              </p>
              
              <div className="space-y-3">
                <Button 
                  asChild 
                  className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                >
                  <Link to="/docs/setup-guide">
                    <Download className="h-4 w-4 mr-2" />
                    Start Setup
                  </Link>
                </Button>
                
                <a 
                  href="/contact"
                  className="flex items-center justify-center w-full py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Contact className="h-4 w-4 mr-2" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Priyank Patel. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground hover:bg-accent/50 gap-2 transition-colors"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

// ----------------------------------------------------------------------
// Helper Components
// ----------------------------------------------------------------------

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={to} 
        className="group flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary/0 transition-all duration-200 group-hover:bg-primary" />
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg border border-border/50 bg-background text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 [&_svg]:h-4 [&_svg]:w-4 md:[&_svg]:h-5 md:[&_svg]:w-5"
    >
      {icon}
    </a>
  );
}