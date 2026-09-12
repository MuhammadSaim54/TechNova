import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Section } from "@/src/components/layout/Section";
import { buttonVariants } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";

function PortfolioCTASection() {
  return (
    <Section
      id="portfolio-cta"
      className="py-14 sm:py-18 md:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* ================= Premium Ambient Banner Container ================= */}
      <div
        className="
          relative w-full overflow-hidden
          rounded-3xl p-8 sm:p-12 lg:p-16
          border border-border/60
          bg-card/60 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
          backdrop-blur-2xl
          shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        "
      >
        {/* Specular top-edge reflection */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none"
        />

        {/* Ambient radial backdrop glow inside the card */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[220px] bg-primary/15 dark:bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10"
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">

          {/* Content Left */}
          <div className="flex flex-col items-start text-left max-w-2xl">

            {/* Eyebrow badge */}
            <Badge variant="brand" className="gap-1.5 px-3.5 py-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span>Let's Work Together</span>
            </Badge>

            {/* Theme-Aware Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.15]">
              Have a project in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                mind?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Let's turn your ideas into high-performing digital realities. Our engineering and design
              team is ready to help you launch, scale, and achieve your product goals.
            </p>
          </div>

          {/* Action Right */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <NavLink
              to="/contact"
              className={buttonVariants({
                variant: "electric",
                size: "lg",
                className: "group justify-center px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all",
              })}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
            </NavLink>
          </div>

        </div>

      </div>
    </Section>
  );
}

export default PortfolioCTASection;