import { Search, Moon, Sun, Menu, X, Github } from "lucide-react";
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

  const docsNavItems = [{ label: "Setup", href: "/docs/setup-guide" }];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      <header
        className={cn(
          "z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",

          isHomePage
            ? "fixed left-1/2 -translate-x-1/2"
            : "sticky top-0 w-full border-b bg-background/95 backdrop-blur",

          isHomePage &&
            !isScrolled &&
            "top-5 md:top-8 w-[95%] md:max-w-7xl rounded-full border " +
              "bg-background/90 dark:bg-background/70 backdrop-blur-xl shadow-lg " +
              "border-border/50 dark:border-white/10",

          isHomePage &&
            isScrolled &&
            "top-0 w-full max-w-none rounded-none border-b " +
              "bg-background/95 dark:bg-background/80 backdrop-blur-xl shadow-sm"
        )}
      >
        {/* Main Row */}
        <div
          className={cn(
            "flex items-center justify-between px-4 md:px-10 transition-[height] duration-500",
            isHomePage && !isScrolled ? "h-16 md:h-20" : "h-16"
          )}
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.webp"
                alt="MediaSync Logo"
                className={cn(
                  "transition-transform group-hover:scale-105",
                  isHomePage && !isScrolled
                    ? "h-9 w-9 md:h-10 md:w-10"
                    : "h-8 w-8"
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

            {/* Docs Nav */}
            {isDocsPage && (
              <nav className="hidden md:flex gap-2 ml-4">
                {docsNavItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="navGhost"
                    size="sm"
                    onClick={() => navigate(item.href)}
                    className={cn(
                      "font-medium",
                      location.pathname === item.href && "text-primary"
                    )}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            )}
          </div>

          {/* CENTER SEARCH (DOCS ONLY) */}
          {isDocsPage && (
            <div className="hidden md:flex flex-1 justify-center max-w-md">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "w-full max-w-xs justify-start gap-2 h-11",

                  // Light mode – SOLID & CLEAN
                  "bg-background text-foreground border border-border shadow-sm",

                  // Dark mode – glassy
                  "dark:bg-muted/50 dark:text-muted-foreground dark:border-transparent",

                  // Hover + focus
                  "hover:bg-muted/40 dark:hover:bg-muted/70",
                  "focus-visible:ring-2 focus-visible:ring-primary/40"
                )}
              >
                <Search className="h-4 w-4 opacity-80" />
                <span className="flex-1 text-left">Search docs...</span>
                <kbd className="pointer-events-none inline-flex h-5 items-center rounded border px-1.5 text-[10px] text-muted-foreground bg-background dark:bg-muted">
                  ⌘K
                </kbd>
              </Button>
            </div>
          )}

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {!isDocsPage && (
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex rounded-full px-6"
                onClick={() => navigate("/docs")}
              >
                Documentation
              </Button>
            )}

            {/* Docs actions */}
            {isDocsPage && (
              <>
                <Button
                  variant="navGhost"
                  size="sm"
                  className="hidden md:inline-flex"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </Button>
                <Button
                  variant="navGhost"
                  size="sm"
                  className="hidden md:inline-flex"
                  onClick={() => navigate("/about")}
                >
                  About Me
                </Button>
              </>
            )}

            <div className="hidden md:flex gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </Button>
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 transition-all origin-top",
            isMobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div
            className={cn(
              "mx-2 mt-2 rounded-3xl shadow-2xl border overflow-hidden",
              "bg-background/95 dark:bg-background/80 backdrop-blur-2xl",
              "border-border/60 dark:border-white/10"
            )}
          >
            <nav className="flex flex-col p-2 space-y-1">
              {isDocsPage && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full justify-start gap-2 h-11 rounded-xl",

                    "bg-background text-foreground border border-border",
                    "dark:bg-muted/40 dark:border-transparent",

                    "hover:bg-muted/50 dark:hover:bg-muted/70"
                  )}
                >
                  <Search className="h-4 w-4" />
                  Search documentation...
                </Button>
              )}

              <button
                onClick={() => navigate("/docs")}
                className="px-4 py-3 rounded-xl text-left hover:bg-muted/70 dark:hover:bg-muted/50"
              >
                Documentation
              </button>

              {isDocsPage && (
                <>
                  <button
                    onClick={() => navigate("/docs/setup-guide")}
                    className="px-4 py-3 rounded-xl text-left hover:bg-muted/70 dark:hover:bg-muted/50"
                  >
                    Setup
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-3 rounded-xl text-left hover:bg-muted/70 dark:hover:bg-muted/50"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => navigate("/about")}
                    className="px-4 py-3 rounded-xl text-left hover:bg-muted/70 dark:hover:bg-muted/50"
                  >
                    About Me
                  </button>
                </>
              )}

              <div className="mt-2 p-2 bg-muted/40 dark:bg-muted/20 rounded-xl flex gap-2">
                <a href="https://github.com" className="flex-1">
                  <Button variant="ghost" className="w-full">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun /> : <Moon />}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
