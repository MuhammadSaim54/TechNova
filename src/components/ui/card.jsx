import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "cn";


const cardVariants = cva(
    "group/card flex flex-col",
    {
        variants: {
            variant: {
                default: "",
                elevated: "",
            },

            size: {
                default: "",
                sm: "",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);


function Card({ className, variant, size, ...props }) {
    return (
        <div
            data-slot="card"
            data-size={size}
            className={cn(
                cardVariants({ variant, size }),
                className
            )}
            {...props}
        />
    );
}


function CardHeader({ className, ...props }) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "flex flex-col gap-1",
                className
            )}
            {...props}
        />
    );
}


function CardTitle({ className, ...props }) {
    return (
        <div
            data-slot="card-title"
            className={cn(
                "text-base font-medium leading-snug",
                className
            )}
            {...props}
        />
    );
}


function CardDescription({ className, ...props }) {
    return (
        <div
            data-slot="card-description"
            className={cn(
                "text-sm text-(--Text-Muted)",
                className
            )}
            {...props}
        />
    );
}


function CardAction({ className, ...props }) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "ml-auto",
                className
            )}
            {...props}
        />
    );
}


function CardContent({ className, ...props }) {
    return (
        <div
            data-slot="card-content"
            className={cn(
                "",
                className
            )}
            {...props}
        />
    );
}


function CardFooter({ className, ...props }) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center",
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