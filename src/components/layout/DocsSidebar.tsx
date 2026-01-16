import { useState } from "react";
import { ChevronRight, ChevronLeft, Settings, Terminal, Video, Music, QrCode, Wifi, AlertTriangle, FileCode, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Getting Started",
    icon: <Settings className="h-4 w-4" />,
    children: [
      { title: "Installation & Setup", href: "/docs/setup" },
      { title: "How to Use", href: "/docs/usage" },
    ],
  },
  {
    title: "Features",
    icon: <Video className="h-4 w-4" />,
    children: [
      { title: "YouTube Sync", href: "/docs/features/youtube" },
      { title: "Local Media", href: "/docs/features/local-media" },
      { title: "QR Code Access", href: "/docs/features/qr-codes" },
      { title: "Status Dashboard", href: "/docs/features/dashboard" },
    ],
  },
  {
    title: "Configuration",
    icon: <FileCode className="h-4 w-4" />,
    children: [
      { title: "config.json", href: "/docs/config" },
    ],
  },
  {
    title: "Help",
    icon: <AlertTriangle className="h-4 w-4" />,
    children: [
      { title: "Troubleshooting", href: "/docs/troubleshooting" },
      { title: "FAQ", href: "/docs/faq" },
    ],
  },
];

interface SidebarGroupProps {
  item: SidebarItem;
  isCollapsed: boolean;
  onLinkClick?: () => void;
}

function SidebarGroup({ item, isCollapsed, onLinkClick }: SidebarGroupProps) {
  const location = useLocation();
  const isActive = item.children?.some((child) => child.href === location.pathname);
  const [isOpen, setIsOpen] = useState<boolean>(isActive ? true : true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground hover:text-primary hover:bg-muted/50"
        )}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          {!isCollapsed && (
            <>
              <span>{item.title}</span>
              {item.badge && <span className="text-xs">{item.badge}</span>}
            </>
          )}
        </div>
        {!isCollapsed && (
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-90"
            )}
          />
        )}
      </button>

      {isOpen && !isCollapsed && item.children && (
        <div className="ml-4 mt-1 border-l border-border pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href || "#"}
              onClick={onLinkClick}
              className={cn(
                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                location.pathname === child.href
                  ? "text-primary bg-primary/10 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function DocsSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-50 md:hidden rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-14 h-[calc(100vh-3.5rem)] border-r border-border bg-sidebar transition-all duration-300 z-50",
          isCollapsed ? "w-16" : "w-72",
          isMobileOpen ? "left-0" : "-left-72 md:left-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            <Link
              to="/docs"
              onClick={() => setIsMobileOpen(false)}
              className="mb-4 block text-sm font-semibold text-primary"
            >
              {!isCollapsed && "Documentation"}
            </Link>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <SidebarGroup 
                  key={item.title} 
                  item={item} 
                  isCollapsed={isCollapsed}
                  onLinkClick={() => setIsMobileOpen(false)}
                />
              ))}
            </nav>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center border-t border-border p-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                isCollapsed && "rotate-180"
              )}
            />
          </button>
        </div>
      </aside>
    </>
  );
}
