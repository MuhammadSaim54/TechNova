import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap cursor-pointer select-none transition-all duration-200 ease-out outline-none focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:scale-[0.98] active:not-aria-[haspopup]:translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Default ("Get Started"): Transparent base, brand glow & border on hover */
        default:
          "border-transparent bg-transparent text-[var(--Button-Text)] transition-all duration-300 ease-out hover:border-[var(--Primary)] hover:bg-[rgba(0,81,251,0.06)] hover:shadow-[0_0_0_1px_rgba(0,81,251,0.15),0_4px_20px_rgba(0,81,251,0.18)] max-[480px]:hover:translate-y-0 max-[480px]:hover:shadow-none max-[314px]:hover:translate-y-0 max-[314px]:hover:shadow-none",

        /* Outline ("Our Services"): Solid background fill with subtle lift */
        outline:
          "border border-border/80 dark:border-white/10 bg-muted dark:bg-[#0d1424] text-foreground transition-all duration-200 hover:bg-muted/80 dark:hover:bg-[#121b30] hover:border-primary/50 shadow-xs",

        brandOutline:
          "border !border-[var(--Primary)] bg-transparent text-[var(--Primary)] duration-300 ease-in-out hover:bg-[var(--Primary)] hover:text-[var(--Text)]",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",

        ghost:
          "border-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",

        destructive:
          "border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",

        glow:
          "border-transparent bg-primary text-primary-foreground shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300",

        electric:
          "border-transparent bg-gradient-to-r from-blue-600 via-primary to-indigo-600 text-white shadow-[0_4px_20px_rgba(0,81,251,0.35)] hover:shadow-[0_6px_25px_rgba(0,81,251,0.5)] hover:opacity-95 overflow-hidden",

        link:
          "border-transparent text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-9 gap-1.5 px-3.5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",

        xs:
          "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",

        sm:
          "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",

        lg:
          "h-12 gap-2 px-6 text-base [&_svg:not([class*='size-'])]:size-5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 max-[1024px]:px-4",

        icon:
          "size-8",

        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",

        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",

        "icon-lg":
          "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin text-current" aria-hidden="true" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </ButtonPrimitive>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };