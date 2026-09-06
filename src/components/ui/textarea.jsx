import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "cn";

const textareaVariants = cva(
    "w-full bg-transparent outline-none resize-y transition-all duration-300 ease-out placeholder:text-(--Text-Muted)",
    {
        variants: {
            variant: {
                default: "border-(--Section-line) text-(--Text-Muted) focus:border-(--Primary)",
                error: "border-destructive text-(--Text-Muted) focus:border-destructive",
            },

            size: {
                default: "min-h-16 rounded-lg border px-2.5 py-2 text-sm",
                lg: "min-h-40 rounded-xl border px-[1.2rem] py-4 text-[0.95rem]",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Textarea({ className, variant, size, ...props }) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                textareaVariants({ variant, size }),
                className
            )}
            {...props}
        />
    );
}

export { Textarea, textareaVariants };