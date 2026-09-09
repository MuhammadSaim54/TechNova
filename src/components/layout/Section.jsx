import { cn } from "@/src/lib/utils";

export function Section({
  children,
  className,
  id,
  size = "default",
  ...props
}) {
  const maxWidths = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <section
      id={id}
      className={cn("w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className={cn("mx-auto w-full", maxWidths[size])}>
        {children}
      </div>
    </section>
  );
}