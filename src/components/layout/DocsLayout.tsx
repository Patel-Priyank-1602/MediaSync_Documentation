import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden sticky top-16 z-40 flex items-center gap-2 px-4 py-2 border-b border-border bg-background/95 backdrop-blur">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(true)}
          className="gap-2"
        >
          <Menu className="h-4 w-4" />
          <span>Menu</span>
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] border-r border-border bg-background shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold text-foreground">Navigation</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <DocsSidebar />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <DocsSidebar />
        </aside>
        
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-4 py-6 md:py-8 md:px-12">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
