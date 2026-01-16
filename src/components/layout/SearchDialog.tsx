import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Settings, Video, Music, AlertTriangle, HelpCircle } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchItem {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const searchItems: SearchItem[] = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Overview of all documentation",
    icon: <FileText className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "Installation & Setup",
    href: "/docs/setup",
    description: "Step-by-step guide to install and configure",
    icon: <Settings className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "How to Use",
    href: "/docs/usage",
    description: "Learn how to start the server and connect devices",
    icon: <FileText className="h-4 w-4" />,
    category: "Getting Started",
  },
  {
    title: "YouTube Sync",
    href: "/docs/features/youtube",
    description: "Load and sync YouTube videos",
    icon: <Video className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "Local Media",
    href: "/docs/features/local-media",
    description: "Upload and sync local video and audio files",
    icon: <Music className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "QR Code Access",
    href: "/docs/features/qr-codes",
    description: "Generate QR codes for easy access",
    icon: <FileText className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "Status Dashboard",
    href: "/docs/features/dashboard",
    description: "Monitor connected clients in real-time",
    icon: <FileText className="h-4 w-4" />,
    category: "Features",
  },
  {
    title: "config.json",
    href: "/docs/config",
    description: "Configure WiFi credentials and server settings",
    icon: <Settings className="h-4 w-4" />,
    category: "Configuration",
  },
  {
    title: "Troubleshooting",
    href: "/docs/troubleshooting",
    description: "Common issues and how to fix them",
    icon: <AlertTriangle className="h-4 w-4" />,
    category: "Configuration",
  },
  {
    title: "FAQ",
    href: "/docs/faq",
    description: "Frequently asked questions",
    icon: <HelpCircle className="h-4 w-4" />,
    category: "Help",
  },
];

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
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  const handleSelect = useCallback(
    (href: string) => {
      setIsOpen(false);
      navigate(href);
    },
    [navigate, setIsOpen]
  );

  const groupedItems = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Search documentation..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(groupedItems).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.title} ${item.description}`}
                onSelect={() => handleSelect(item.href)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-muted">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
