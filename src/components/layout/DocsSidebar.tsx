import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Settings,
  Video,
  Music,
  QrCode,
  AlertTriangle,
  Map,
  Menu,
  FileText,
  Users,
  HelpCircle,
  Wrench,
  LayoutDashboard,
  Sparkles,
  Gamepad2,
  Rocket,
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
    title: "Introduction",
    icon: <Rocket className="h-4 w-4" />,
    children: [
      { title: "Overview", href: "/docs/introduction/overview" },
      { title: "Architecture & Flow", href: "/docs/introduction/architecture" },
      { title: "Use Cases", href: "/docs/introduction/use-cases" },
    ],
  },
  {
    title: "Getting Started",
    icon: <Settings className="h-4 w-4" />,
    children: [
      { title: "System Requirements", href: "/docs/getting-started/requirements" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "First-Time Setup", href: "/docs/getting-started/setup" },
      { title: "Network Requirements", href: "/docs/getting-started/network" },
    ],
  },
  {
    title: "Usage Guide",
    icon: <Gamepad2 className="h-4 w-4" />,
    children: [
      { title: "Controller Dashboard", href: "/docs/usage/controller" },
      { title: "Joining as a Client", href: "/docs/usage/joining" },
      { title: "Playback Controls", href: "/docs/usage/playback" },
      { title: "Host vs Client Behavior", href: "/docs/usage/host-client" },
    ],
  },
  {
    title: "Features",
    icon: <Sparkles className="h-4 w-4" />,
    children: [
      { title: "YouTube Synchronization", href: "/docs/features/youtube" },
      { title: "Local Video Sync", href: "/docs/features/local-video" },
      { title: "Local Audio Sync", href: "/docs/features/local-audio" },
      { title: "Real-Time Seek & Drift", href: "/docs/features/seek-drift" },
      { title: "QR Code Device Join", href: "/docs/features/qr-code" },
      { title: "Multi-Client Handling", href: "/docs/features/multi-client" },
    ],
  },
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    children: [
      { title: "Live Client Status", href: "/docs/dashboard/status" },
      { title: "Playback State Monitor", href: "/docs/dashboard/playback" },
      { title: "Sync Health Indicators", href: "/docs/dashboard/sync-health" },
    ],
  },
  {
    title: "Configuration",
    icon: <Wrench className="h-4 w-4" />,
    children: [
      { title: "config.json Overview", href: "/docs/config/overview" },
      { title: "All Configuration Options", href: "/docs/config/options" },
      { title: "Performance Tuning", href: "/docs/config/performance" },
      { title: "Security Settings", href: "/docs/config/security" },
    ],
  },

  {
    title: "Troubleshooting",
    icon: <AlertTriangle className="h-4 w-4" />,
    children: [
      { title: "Common Errors", href: "/docs/troubleshooting/errors" },
      { title: "Sync Delay Issues", href: "/docs/troubleshooting/sync-delay" },
      { title: "Media Loading Failures", href: "/docs/troubleshooting/media" },
      { title: "Network Problems", href: "/docs/troubleshooting/network" },
    ],
  },
  {
    title: "FAQ",
    icon: <HelpCircle className="h-4 w-4" />,
    children: [
      { title: "Supported Devices", href: "/docs/faq/devices" },
      { title: "Media Size Limits", href: "/docs/faq/media-limits" },
      { title: "Browser Compatibility", href: "/docs/faq/browsers" },
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
        className="fixed bottom-20 right-4 z-50 md:hidden h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all"
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
          "fixed md:sticky top-16 z-40 h-[calc(100vh-4rem)] border-r bg-white dark:bg-[#0b0f14] transition-all duration-300",
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
