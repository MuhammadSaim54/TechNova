import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const inputVariants = cva(
    "w-full min-w-0 border bg-transparent outline-none transition-all duration-300 ease-out placeholder:text-(--Text-Muted) disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-(--Section-line) text-(--Text-Muted) focus:border-(--Primary)",
                error: "border-destructive text-(--Text-Muted) focus:border-destructive",
            },

            size: {
                default: "h-8 rounded-lg px-2.5 py-1 text-sm",
                lg: "h-auto rounded-xl px-[1.2rem] py-4 text-[0.95rem]",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Input({ className, type, variant, size, ...props }) {
    return (
        <InputPrimitive
            type={type}
            data-slot="input"
            className={cn(inputVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { Input, inputVariants };