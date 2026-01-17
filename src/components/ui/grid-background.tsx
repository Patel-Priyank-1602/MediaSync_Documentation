import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  gridColor?: string;
  gridOpacity?: number;
}

export function GridBackground({
  className,
  gridSize = 40,
  gridColor = "rgba(59, 130, 246, 0.15)",
  gridOpacity = 1,
}: GridBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none", className)}
      style={{
        opacity: gridOpacity,
        backgroundImage: `
          linear-gradient(${gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
  );
}
