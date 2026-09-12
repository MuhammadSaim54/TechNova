import { Toaster as Sonner } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const Toaster = ({ className, toastOptions, ...props }) => {
  return (
    <Sonner
      className={cn("toaster group", className)}
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-green-500" aria-hidden="true" />
        ),
        info: (
          <InfoIcon className="size-4 text-blue-500" aria-hidden="true" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4 text-yellow-500" aria-hidden="true" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-red-500" aria-hidden="true" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
        ),
      }}
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)",
      }}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cn("cn-toast", toastOptions?.classNames?.toast),
          success: cn(
            "!bg-white !border-green-500 !text-green-600 dark:!bg-[#111827] dark:!border-green-500 dark:!text-green-400",
            toastOptions?.classNames?.success
          ),
          error: cn(
            "!bg-white !border-red-500 !text-red-600 dark:!bg-[#111827] dark:!border-red-500 dark:!text-red-400",
            toastOptions?.classNames?.error
          ),
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };