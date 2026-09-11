import { Sparkles } from "lucide-react";
import { Section } from "@/src/components/layout/Section";

function ServicesHeroSection() {
  return (
    <Section
      id="services-hero"
      className="border-b border-border/50 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Calibrated Blueprint Grid for Both Themes */}
      <div
        className="
            absolute inset-0 
            bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:3.5rem_3.5rem] 
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
            pointer-events-none -z-10
          "
      />

      {/* Ambient Lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] lg:w-[700px] h-[280px] bg-primary/15 dark:bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* ================= Content Stack ================= */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-sm transition-all duration-300">
          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 text-primary">
            <Sparkles className="w-2.5 h-2.5" />
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-foreground/90 uppercase">
            Our Services
          </span>
          <span className="h-3 w-px bg-border" />
          <span className="text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            End-to-End Solutions
          </span>
        </div>

        {/* Single-line Theme-Aware Headline */}
        <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-tight sm:whitespace-nowrap">
          Services That Drive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
            Results.
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
          We provide a comprehensive suite of digital solutions engineered to help your
          business accelerate growth, streamline operations, and engage the right audience.
        </p>

      </div>
    </Section>
  );
}

export default ServicesHeroSection;