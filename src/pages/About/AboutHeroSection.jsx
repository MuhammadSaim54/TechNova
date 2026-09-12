import { useState } from "react";
import { ArrowRight, Sparkles, Users, Award, ShieldCheck } from "lucide-react";

import AboutImage from "../../assets/images/developer-team.webp";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";
import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";
import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";

function AboutHeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

  return (
    <Section
      id="about-hero"
      className="border-b border-border/50 py-8 md:py-10 lg:py-14 relative overflow-hidden w-full"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Calibrated Blueprint Grid for Both Themes */}
      <div
        aria-hidden="true"
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
      <div 
        aria-hidden="true" 
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] lg:w-[680px] h-[260px] bg-primary/15 dark:bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" 
      />

      {/* Main Grid matching Home Hero proportions */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* ================= Left: Copy & Actions ================= */}
        <div className="md:col-span-7 flex flex-col items-start text-left">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 p-1 rounded-full border border-border/70 bg-card/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xs">
            <Badge variant="brand" className="gap-1.5 py-1 px-3">
              <Sparkles className="w-3 h-3 text-primary" aria-hidden="true" />
              <span>About TechNova</span>
            </Badge>
            <span className="h-3 w-px bg-border/80" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-primary px-2">
              Who We Are
            </span>
          </div>

          {/* Calibrated Headline */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.12]">
            Engineering Digital Products That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Scale.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
            We are a team of passionate creators, engineers, and digital strategists
            helping ambitious brands build high-impact web products, modernize infrastructure,
            and thrive in competitive digital markets.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <Button
              type="button"
              variant="electric"
              size="lg"
              onClick={() => setDialogOpen(true)}
              className="border-none group justify-center px-7 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setServicesDialogOpen(true)}
              className="justify-center px-7 py-5 sm:py-6 text-sm sm:text-base font-medium"
            >
              Our Services
            </Button>
          </div>

          {/* Trust Micro-Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground">
              <Users className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>Senior Talent</span>
            </Badge>

            <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>Dedicated Squads</span>
            </Badge>

            <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground">
              <Award className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>10+ Yrs Track Record</span>
            </Badge>
          </div>

        </div>

        {/* ================= Right: Visual with Contained Height ================= */}
        <div className="md:col-span-5 relative flex justify-center items-center mt-6 md:mt-0">

          {/* Backlight Glow */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10 scale-90" 
          />

          {/* Relative Wrapper */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-none flex justify-center items-center">

            {/* Visual Frame */}
            <div className="w-full overflow-hidden rounded-3xl border border-border/70 bg-card/40 dark:bg-white/[0.02] p-2 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={AboutImage}
                  alt="TechNova team collaborating on digital solutions"
                  loading="eager"
                  className="w-full h-auto max-h-[320px] lg:max-h-[360px] object-cover aspect-[16/11] transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Floating Glass Pill */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2.5 px-3.5 py-2 rounded-xl border border-border/80 dark:border-white/10 bg-background/95 dark:bg-[#070b14]/90 backdrop-blur-xl shadow-xl z-10">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-foreground leading-tight">
                  Cross-Functional Team
                </span>
                <span className="text-[10px] font-mono text-muted-foreground leading-tight">
                  Designers, Architects & Engineers
                </span>
              </div>
            </div>

          </div>

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

export default AboutHeroSection;