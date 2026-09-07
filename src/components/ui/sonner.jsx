import { Toaster as Sonner } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"

      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-green-500" />
        ),
        info: (
          <InfoIcon className="size-4 text-blue-500" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4 text-yellow-500" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-red-500" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}

      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)",
      }}

      toastOptions={{
        classNames: {
          toast: "cn-toast",

          success: `
            !bg-white
            !border-green-500
            !text-green-600
            dark:!bg-[#111827]
            dark:!border-green-500
            dark:!text-green-400
        `,

          error: `
            !bg-white
            !border-red-500
            !text-red-600
            dark:!bg-[#111827]
            dark:!border-red-500
            dark:!text-red-400
        `,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };