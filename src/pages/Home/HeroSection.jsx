import { useState } from "react";
import {
  ArrowRight,
  FolderKanban,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import HeroIllustration from "../../assets/images/hero-illustration.png";
import { buttonVariants } from "@/src/components/ui/button";
import { Section } from "@/src/components/layout/Section";
import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";
import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";

const STATS = [
  {
    icon: FolderKanban,
    value: "120+",
    label: "Projects Completed",
    subtext: "Delivered on schedule"
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Satisfaction",
    subtext: "From global partners"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Experience",
    subtext: "Industry-proven mastery"
  },
];

function HomeHeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

  return (
    <Section
      id="hero"
      className="border-b border-border/50 pt-10 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 relative overflow-hidden w-full"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Subtle Engineering Blueprint Grid */}
      <div
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] 
          bg-[size:3rem_3rem] sm:bg-[size:3.5rem_3.5rem] 
          opacity-[0.03] dark:opacity-[0.05]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Top Ambient Glow (Theme-adapted) */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[260px] bg-primary/15 dark:bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="w-full flex flex-col gap-10 lg:gap-12">

        {/* ================= Main Hero Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="md:col-span-7 flex flex-col items-start text-left">

            {/* Announcement Badge (Responsive wrapping on mobile) */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-sm transition-all duration-300">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 text-primary">
                <Sparkles className="w-2.5 h-2.5" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-foreground/90 uppercase">
                Digital Agency
              </span>
              <span className="hidden sm:inline-block h-3 w-px bg-border" />
              <span className="text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Accepting New Projects
              </span>
            </div>

            {/* Headline with Theme-Aware Gradient (Pure Dark in Light Mode, Specular White in Dark Mode) */}
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.15]">
              We Build Digital Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                Inspire.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              TechNova crafts bespoke web applications, high-converting digital products,
              and resilient cloud architecture designed to elevate modern brands above the noise.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "group relative justify-center px-7 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all",
                })}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setServicesDialogOpen(true)}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "justify-center px-7 py-5 sm:py-6 text-sm sm:text-base font-medium border-border/70 hover:border-primary/50 backdrop-blur-sm",
                })}
              >
                Explore Services
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/60 bg-card/40 dark:bg-white/[0.03] text-xs font-medium text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Enterprise Grade</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/60 bg-card/40 dark:bg-white/[0.03] text-xs font-medium text-muted-foreground">
                <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Rapid Delivery</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/60 bg-card/40 dark:bg-white/[0.03] text-xs font-medium text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>100% Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Illustration */}
          <div className="md:col-span-5 relative flex justify-center items-center mt-4 md:mt-0">
            {/* Visual Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-cyan-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10 scale-90" />

            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-none flex justify-center items-center p-2">
              <img
                src={HeroIllustration}
                alt="TechNova digital solutions illustration"
                className="w-full h-auto max-h-[300px] sm:max-h-[360px] lg:max-h-[400px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
              />

              {/* Floating Glass Badge (Top) - visible on tablet+ */}
              <div className="hidden sm:flex absolute -top-1 -left-2 items-center gap-2 px-3 py-2 rounded-xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground tracking-tight">
                  100% Production Ready
                </span>
              </div>

              {/* Floating Glass Badge (Bottom) - visible on tablet+ */}
              <div className="hidden sm:flex absolute -bottom-2 -right-1 items-center gap-2 px-3 py-2 rounded-xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg">
                <div className="flex items-center justify-center w-4 h-4 rounded bg-primary/20 text-primary">
                  <Zap className="w-3 h-3" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-foreground leading-tight">Ultra-Fast</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">99+ Lighthouse Score</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Bottom Metrics Proof Bar ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 pt-2">
          {STATS.map(({ icon: Icon, value, label, subtext }) => (
            <div
              key={label}
              className="
                group relative flex items-center gap-4 p-4 lg:p-5 rounded-2xl
                border border-border/60
                bg-card/40 dark:bg-gradient-to-b dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-xl
                transition-all duration-300 ease-out
                hover:border-primary/40 hover:-translate-y-0.5
              "
            >
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                  {value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-tight">
                  {label}
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  {subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dialog Portals */}
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <ServicesDialog
        open={servicesDialogOpen}
        onOpenChange={setServicesDialogOpen}
      />
    </Section>
  );
}

export default HomeHeroSection;