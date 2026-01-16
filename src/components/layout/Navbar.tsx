import { Search, Moon, Sun, Menu, X, Server, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const isDocsPage = location.pathname.startsWith("/docs");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Home page: only Documentation link
  const mainNavItems = [
    { label: "Documentation", href: "/docs" },
  ];

  // Docs page: Setup, search (centered), Contact, About
  const docsNavItems = [
    { label: "Setup", href: "/docs/setup" },
  ];

  const navItems = isDocsPage ? docsNavItems : mainNavItems;

  return (
    <>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <Server className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold text-foreground ml-2">MediaSync</span>
                <span className="text-xs text-primary ml-1 mt-2">DOCS</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="navGhost"
                  size="sm"
                  onClick={() => navigate(item.href)}
                  className={cn(
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Center: Search - Only on docs pages */}
          {isDocsPage && (
            <div className="hidden md:flex flex-1 justify-center max-w-md mx-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full max-w-xs justify-start gap-2 text-muted-foreground hover:text-foreground bg-muted/50"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
                <span className="flex-1 text-left">Search documentation...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-xs text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
          )}

          {/* Right side items */}
          <div className="flex items-center gap-2">
            {/* Contact & About - Only on docs pages */}
            {isDocsPage && (
              <>
                <Button
                  variant="navGhost"
                  size="sm"
                  onClick={() => navigate("/contact")}
                  className="hidden md:inline-flex"
                >
                  Contact
                </Button>
                <Button
                  variant="navGhost"
                  size="sm"
                  onClick={() => navigate("/about")}
                  className="hidden md:inline-flex"
                >
                  About Me
                </Button>
              </>
            )}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hidden md:inline-flex"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden border-b border-border bg-background overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0 border-b-0"
          )}
        >
          <nav className="container px-4 py-4 space-y-2">
            {/* Mobile Search - Only on docs pages */}
            {isDocsPage && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2 text-muted-foreground mb-4"
                onClick={() => {
                  setSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Search className="h-4 w-4" />
                Search documentation...
              </Button>
            )}

            {/* Main navigation items */}
            <button
              onClick={() => {
                navigate("/docs");
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                location.pathname === "/docs"
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:bg-muted"
              )}
            >
              Documentation
            </button>

            {isDocsPage && (
              <>
                <button
                  onClick={() => {
                    navigate("/docs/setup");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                    location.pathname === "/docs/setup"
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  Setup
                </button>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                    location.pathname === "/contact"
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    navigate("/about");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                    location.pathname === "/about"
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  About Me
                </button>
              </>
            )}

            <div className="pt-2 border-t border-border flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
