import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const cardVariants = cva(
  "group/card relative flex flex-col justify-between w-full overflow-hidden transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        /* Standard static surface */
        default:
          "rounded-3xl border border-border/60 bg-card/60 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",

        /* Interactive TechNova Bento Card with pure CSS lift, hover bloom, and tactile press */
        bento:
          "rounded-3xl border border-border/60 bg-card/60 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,81,251,0.25)] active:scale-[0.99] active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        /* Elevated highlight surface */
        elevated:
          "rounded-3xl border border-border/80 bg-card dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.3)]",
      },

      size: {
        default: "p-6 sm:p-8",
        sm: "p-3 sm:p-3.5",
        compact: "p-4 sm:p-5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Card({ className, variant, size, children, ...props }) {
  const isInteractive = variant === "bento";

  return (
    <div
      data-slot="card"
      data-size={size}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? "region" : undefined}
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    >
      {/* Integrated Specular Top Rim */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-20" 
      />

      {/* Integrated Radial Hover Bloom */}
      <div 
        aria-hidden="true" 
        className="absolute -top-16 -right-16 w-40 h-40 bg-primary/15 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" 
      />

      {children}
    </div>
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover/card:text-primary transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn("ml-auto flex items-center", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-6 pt-4 border-t border-border/40 flex items-center justify-between w-full",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};