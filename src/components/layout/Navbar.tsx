import { Search, Moon, Menu, X, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Documentation", href: "/docs" },
    { label: "Setup", href: "/docs/setup" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
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
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full hidden md:inline-flex">
            <Moon className="h-4 w-4" />
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
          isMobileMenuOpen ? "max-h-64" : "max-h-0 border-b-0"
        )}
      >
        <nav className="container px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-border">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
