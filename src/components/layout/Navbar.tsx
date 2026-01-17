import { Search, Moon, Sun, Menu, X, Server, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDocsPage = location.pathname.startsWith("/docs");
  const isHomePage = location.pathname === "/";

  const docsNavItems = [
    { label: "Setup", href: "/docs/setup-guide" },
  ];

  const navItems = isDocsPage ? docsNavItems : [];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <header 
        className={cn(
          "z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
          
          // --- LAYOUT STRATEGY ---
          // Home Page: Fixed & Centered (Floating Pill logic)
          // Other Pages: Sticky Top
          isHomePage 
            ? "fixed left-1/2 -translate-x-1/2" 
            : "sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          
          // --- HOME PAGE STATES ---

          // State 1: Floating Pill (Home + Not Scrolled)
          // Mobile: w-[95%] top-5
          // Desktop: max-w-7xl top-8
          isHomePage && !isScrolled && "top-5 md:top-8 w-[95%] md:max-w-7xl rounded-full border bg-background/70 backdrop-blur-xl shadow-lg border-white/10",
          
          // State 2: Scrolled Bar (Home + Scrolled)
          // Snaps to full width top-0
          isHomePage && isScrolled && "top-0 w-full max-w-none rounded-none border-b bg-background/80 backdrop-blur-xl shadow-sm"
        )}
      >
        <div className={cn(
            "flex items-center justify-between px-4 md:px-10 transition-[height] duration-500",
            // Height: Taller when floating (h-16 mobile, h-20 desktop), Compact when scrolled
            isHomePage && !isScrolled ? "h-16 md:h-20" : "h-16"
          )}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <img 
                src="/logo.webp" 
                alt="MediaSync Logo" 
                className={cn(
                  "transition-all duration-300 group-hover:scale-105",
                  isHomePage && !isScrolled ? "h-8 w-8 md:h-10 md:w-10" : "h-8 w-8"
                )}
              />
              <div className="flex flex-col">
                <span className={cn(
                  "font-bold text-foreground tracking-tight transition-all leading-none",
                  isHomePage && !isScrolled ? "text-lg md:text-2xl" : "text-lg md:text-xl"
                )}>
                  MediaSync
                </span>
                {/* Only show 'DOCS' badge on desktop or if space permits */}
                <span className="hidden md:block text-[10px] text-primary font-mono opacity-80 leading-none mt-1">DOCS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 ml-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="navGhost"
                  size={isHomePage && !isScrolled ? "default" : "sm"}
                  onClick={() => navigate(item.href)}
                  className={cn(
                    "font-medium transition-colors hover:text-primary",
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Center: Search (Docs only, Desktop) */}
          {isDocsPage && (
            <div className="hidden md:flex flex-1 justify-center max-w-md mx-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full max-w-xs justify-start gap-2 text-muted-foreground hover:text-foreground bg-muted/50 h-10 transition-all hover:bg-muted/80 border-transparent focus:border-primary/20"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
                <span className="flex-1 text-left">Search docs...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
          )}

          {/* Right side items */}
          <div className="flex items-center gap-2 md:gap-3">
            {!isDocsPage && (
              <Button
                variant="ghost"
                size={isHomePage && !isScrolled ? "default" : "sm"}
                onClick={() => navigate("/docs")}
                className={cn(
                  "hidden md:inline-flex rounded-full px-6 font-medium hover:bg-primary/10 transition-colors",
                  isHomePage && !isScrolled ? "hover:bg-background/50 text-base" : "text-sm"
                )}
              >
                Documentation
              </Button>
            )}

            {isDocsPage && (
              <>
                <Button variant="navGhost" size="sm" onClick={() => navigate("/contact")} className="hidden md:inline-flex">Contact</Button>
                <Button variant="navGhost" size="sm" onClick={() => navigate("/about")} className="hidden md:inline-flex">About Me</Button>
              </>
            )}

            <div className="hidden md:flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/60 transition-colors w-10 h-10">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-muted/60 transition-colors w-10 h-10"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden rounded-full transition-colors",
                isHomePage && !isScrolled ? "h-10 w-10 hover:bg-background/50" : "h-9 w-9"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU - Refined "Floating Card" Style
            - Opens just below the main pill/bar
            - Rounded corners to match the aesthetic
            - Scale animation for slick open/close
        */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top",
            
            // Positioning & Styling
            isHomePage && !isScrolled 
              ? "top-full mt-2 mx-0 w-full" // Pill Mode: Floating card logic is handled by internal padding/wrapper
              : "top-full border-b border-border bg-background w-full", // Bar Mode: Standard drop
            
            // Visibility State
            isMobileMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none h-0"
          )}
        >
          {/* Inner Card Wrapper for Pill Mode */}
          <div className={cn(
            "bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden",
            isHomePage && !isScrolled ? "rounded-3xl mx-0 mt-1" : "bg-background" // If in Pill mode, make it look like a floating rounded card
          )}>
            <nav className="flex flex-col p-2 space-y-1">
              
              {isDocsPage && (
                <div className="px-2 pt-2 pb-1">
                   <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start gap-2 text-muted-foreground h-10 rounded-xl bg-muted/30 border-transparent"
                    onClick={() => { setSearchOpen(true); setIsMobileMenuOpen(false); }}
                  >
                    <Search className="h-4 w-4" />
                    Search documentation...
                  </Button>
                </div>
              )}

              <button
                onClick={() => navigate("/docs")}
                className="flex items-center w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium hover:bg-muted/50 active:scale-[0.98]"
              >
                <span className={cn(location.pathname === "/docs" ? "text-primary" : "text-foreground")}>
                  Documentation
                </span>
              </button>

              {isDocsPage && (
                <>
                  <button
                    onClick={() => navigate("/docs/setup-guide")}
                    className="flex items-center w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium hover:bg-muted/50 active:scale-[0.98]"
                  >
                     <span className={cn(location.pathname === "/docs/setup-guide" ? "text-primary" : "text-foreground")}>Setup</span>
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium hover:bg-muted/50 active:scale-[0.98]"
                  >
                     <span className={cn(location.pathname === "/contact" ? "text-primary" : "text-foreground")}>Contact</span>
                  </button>
                  <button
                    onClick={() => navigate("/about")}
                    className="flex items-center w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium hover:bg-muted/50 active:scale-[0.98]"
                  >
                     <span className={cn(location.pathname === "/about" ? "text-primary" : "text-foreground")}>About Me</span>
                  </button>
                </>
              )}

              {/* Mobile Actions Footer */}
              <div className="mt-2 p-2 bg-muted/20 rounded-2xl flex items-center gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full justify-center gap-2 h-10 rounded-xl hover:bg-background/80">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <div className="w-px h-6 bg-border/50"></div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl h-10 w-10 hover:bg-background/80"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}