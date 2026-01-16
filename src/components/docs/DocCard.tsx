import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function DocCard({ icon, title, description, href, className }: DocCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:bg-muted/50",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
