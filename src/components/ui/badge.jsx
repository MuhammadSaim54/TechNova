import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono font-semibold tracking-wider transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground shadow-xs",
        
        brand:
          "border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,81,251,0.2)] dark:bg-primary/[0.08]",

        live:
          "border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/[0.08]",

        outline:
          "border border-border/80 dark:border-white/10 bg-muted/30 dark:bg-white/[0.02] text-foreground backdrop-blur-md",

        secondary:
          "border border-transparent bg-secondary text-secondary-foreground",

        destructive:
          "border border-destructive/30 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant = "default", ping = false, children, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {/* Dynamic Animated Status Ping Indicator */}
      {(ping || variant === "live") && (
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };