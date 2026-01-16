import { Link } from "react-router-dom";
import { Server, Github, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Server className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">MediaSync</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A self-hosted Node.js server for real-time media synchronization across multiple devices.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docs/setup" className="text-muted-foreground hover:text-foreground transition-colors">
                  Installation & Setup
                </Link>
              </li>
              <li>
                <Link to="/docs/usage" className="text-muted-foreground hover:text-foreground transition-colors">
                  How to Use
                </Link>
              </li>
              <li>
                <Link to="/docs/config" className="text-muted-foreground hover:text-foreground transition-colors">
                  Configuration
                </Link>
              </li>
              <li>
                <Link to="/docs/troubleshooting" className="text-muted-foreground hover:text-foreground transition-colors">
                  Troubleshooting
                </Link>
              </li>
              <li>
                <Link to="/docs/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docs/features/youtube" className="text-muted-foreground hover:text-foreground transition-colors">
                  YouTube Sync
                </Link>
              </li>
              <li>
                <Link to="/docs/features/local-media" className="text-muted-foreground hover:text-foreground transition-colors">
                  Local Media
                </Link>
              </li>
              <li>
                <Link to="/docs/features/qr-codes" className="text-muted-foreground hover:text-foreground transition-colors">
                  QR Code Access
                </Link>
              </li>
              <li>
                <Link to="/docs/features/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Status Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MediaSync. Built with Node.js, Express & Socket.io
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
