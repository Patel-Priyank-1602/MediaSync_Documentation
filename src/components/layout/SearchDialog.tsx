import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Settings,
  Video,
  Music,
  AlertTriangle,
  HelpCircle,
  QrCode,
  LayoutDashboard,
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

/* ----------------------------- DATA ----------------------------- */

interface SearchItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category: "Getting Started" | "Features" | "Configuration" | "Help";
}

const searchItems: SearchItem[] = [
  {
    title: "Documentation",
    description: "Read the comprehensive guides and references.",
    href: "/docs",
    icon: <FileText className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "Installation & Setup",
    description: "Step-by-step guide to get up and running.",
    href: "/docs/setup",
    icon: <Settings className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "How to Use",
    description: "Learn the basics and advanced workflows.",
    href: "/docs/usage",
    icon: <FileText className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "YouTube Sync",
    description: "Synchronize playback across multiple clients.",
    href: "/docs/features/youtube",
    icon: <Video className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "Local Media",
    description: "Manage and play your local file library.",
    href: "/docs/features/local-media",
    icon: <Music className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "QR Code Access",
    description: "Generate codes for quick mobile pairing.",
    href: "/docs/features/qr-codes",
    icon: <QrCode className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "Status Dashboard",
    description: "Monitor system health and metrics.",
    href: "/docs/features/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "config.json",
    description: "Edit server and client configuration files.",
    href: "/docs/config",
    icon: <Settings className="h-4 w-4" />,
    category: "Configuration",
  },
  {
    title: "Troubleshooting",
    description: "Solutions to common issues and errors.",
    href: "/docs/troubleshooting",
    icon: <AlertTriangle className="h-4 w-4" />,
    category: "Configuration",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions.",
    href: "/docs/faq",
    icon: <HelpCircle className="h-4 w-4" />,
    category: "Help",
  },
];

/* ------------------------- STYLE HELPERS ------------------------- */

const getCategoryIconStyle = (category: string) => {
  switch (category) {
    case "Getting Started":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "Features":
      return "bg-violet-500/10 text-violet-600 dark:text-violet-400";
    case "Configuration":
      return "bg-slate-500/10 text-slate-600 dark:text-slate-400";
    case "Help":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    default:
      return "bg-muted text-foreground";
  }
};

/* --------------------------- COMPONENT --------------------------- */

interface SearchDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const navigate = useNavigate();

  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [setIsOpen, isOpen]);

  const handleSelect = useCallback(
    (href: string) => {
      setIsOpen(false);
      navigate(href);
    },
    [navigate, setIsOpen]
  );

  const groupedItems = searchItems.reduce((acc, item) => {
    acc[item.category] ??= [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 border-b px-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <CommandInput
          placeholder="Search documentation…"
          className="h-14 bg-transparent text-sm focus:outline-none"
        />
        <kbd className="rounded-md border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
          ESC
        </kbd>
      </div>

      {/* LIST */}
      <CommandList className="max-h-[460px] p-2">
        <CommandEmpty className="py-10 text-center text-sm text-muted-foreground">
          No results found
        </CommandEmpty>

        {Object.entries(groupedItems).map(([category, items]) => (
          <CommandGroup
            key={category}
            heading={category}
            className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold"
          >
            {items.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.title} ${item.description}`}
                onSelect={() => handleSelect(item.href)}
                className="
                  group flex items-center justify-between rounded-xl px-3 py-2.5
                  transition-colors
                  hover:bg-muted/50
                  data-[selected=true]:bg-primary/10
                  data-[selected=true]:text-primary
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      getCategoryIconStyle(item.category),
                      "group-data-[selected=true]:bg-primary/20"
                    )}
                  >
                    {item.icon}
                  </div>


                  <div className="flex flex-col">
                    <span className="
  text-sm font-medium
  text-foreground
  group-data-[selected=true]:text-primary
">
                      {item.title}
                    </span>

                    <span className="
  text-xs text-muted-foreground
  group-data-[selected=true]:text-primary/70
">
                      {item.description}
                    </span>

                  </div>
                </div>

                <CornerDownLeft className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-data-[selected=true]:opacity-100" />
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>

      <CommandSeparator />

      {/* FOOTER */}
      <div className="flex h-10 items-center justify-between px-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" />
            <ArrowDown className="h-3 w-3" />
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" />
            Select
          </span>
        </div>
        <span>Search Documentation</span>
      </div>
    </CommandDialog>
  );
}
