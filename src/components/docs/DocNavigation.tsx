import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
}

interface DocNavigationProps {
  previous?: NavItem;
  next?: NavItem;
}

export function DocNavigation({ previous, next }: DocNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
      {previous ? (
        <Link
          to={previous.href}
          className="flex-1 group rounded-lg border border-border bg-card p-3 md:p-4 hover:border-primary/50 hover:bg-card/80 transition-all"
        >
          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">
            <ChevronLeft className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:-translate-x-1 transition-transform" />
            Previous
          </div>
          <div className="font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
            {previous.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      
      {next ? (
        <Link
          to={next.href}
          className="flex-1 group rounded-lg border border-border bg-card p-3 md:p-4 hover:border-primary/50 hover:bg-card/80 transition-all text-right"
        >
          <div className="flex items-center justify-end gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">
            Next
            <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
            {next.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
