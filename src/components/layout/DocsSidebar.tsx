import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Settings,
  Video,
  Music,
  QrCode,
  AlertTriangle,
  FileCode,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
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
    children: [{ title: "config.json", href: "/docs/config" }],
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

function SidebarGroup({
  item,
  isCollapsed,
  onLinkClick,
}: {
  item: SidebarItem;
  isCollapsed: boolean;
  onLinkClick?: () => void;
}) {
  const location = useLocation();
  const isActive = item.children?.some(
    (child) => child.href === location.pathname
  );
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  return (
    <div className="space-y-1">
      {/* Section Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-slate-500 dark:text-slate-400",
              isActive && "text-blue-600 dark:text-blue-400"
            )}
          >
            {item.icon}
          </span>
          {!isCollapsed && <span>{item.title}</span>}
        </div>

        {!isCollapsed && (
          <ChevronRight
            className={cn(
              "h-4 w-4 text-slate-400 transition-transform",
              isOpen && "rotate-90"
            )}
          />
        )}
      </button>

      {/* Children */}
      {isOpen && !isCollapsed && item.children && (
        <div className="relative ml-3 pl-4">
          <div className="absolute left-1 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-1">
            {item.children.map((child) => {
              const active = location.pathname === child.href;

              return (
                <Link
                  key={child.href}
                  to={child.href!}
                  onClick={onLinkClick}
                  className={cn(
                    "relative block rounded-md px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400 font-medium"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200"
                  )}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                  {child.title}
                </Link>
              );
            })}
          </div>
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
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-50 md:hidden rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-14 z-50 h-[calc(100vh-3.5rem)] border-r bg-white dark:bg-[#0b0f14] transition-all duration-300",
          isCollapsed ? "w-16" : "w-72",
          isMobileOpen ? "left-0" : "-left-72 md:left-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <Link
              to="/docs"
              className="mb-4 block px-3 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              {!isCollapsed && "Documentation"}
            </Link>

            <nav className="space-y-2">
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

          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center border-t p-3 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 transition-transform",
                isCollapsed && "rotate-180"
              )}
            />
          </button>
        </div>
      </aside>
    </>
  );
}
