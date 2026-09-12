import { Brain, Users, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import AboutImage from "../../assets/images/developer-team.webp";
import { buttonVariants } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";

const FEATURES = [
  {
    icon: Brain,
    title: "Innovative Approach",
    desc: "Modern architectures & tools",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Senior engineering talent",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Mindset",
    desc: "Long-term partnership focus",
  },
];

function AboutPreviewSection() {
  return (
    <Section
      id="about-preview"
      className="border-b border-border/50 py-12 sm:py-16 md:py-20 relative overflow-hidden w-full"
    >
      {/* Ambient background lighting (theme-adapted) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] bg-primary/10 dark:bg-primary/[0.07] rounded-full blur-[110px] pointer-events-none -z-10" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
        
        {/* ================= Left: Framed Artwork & Floating Glass HUD ================= */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          {/* Subtle Backlight Glow */}
          <div 
            aria-hidden="true" 
            className="absolute inset-4 bg-gradient-to-tr from-primary/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" 
          />

          {/* Master Image Frame */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-border/70 bg-card/40 dark:bg-white/[0.02] p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={AboutImage}
                alt="TechNova team collaborating on digital solutions"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Floating Glass HUD Experience Badge */}
          <div
            className="
              absolute -bottom-3 -left-2 sm:bottom-6 sm:left-6
              flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl
              border border-border/80 bg-background/90 dark:bg-black/75
              backdrop-blur-2xl
              shadow-xl
              transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5
            "
          >
            {/* Theme-aware 10+ text: dark foreground in light mode, bright white in dark mode */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-primary dark:from-white dark:via-white/95 dark:to-primary">
              10+
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-foreground leading-tight">
                Years of
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight">
                Experience
              </span>
            </div>
          </div>

        </div>

        {/* ================= Right: Content & Bento Feature Chips ================= */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Eyebrow Pill */}
          <Badge variant="brand" className="gap-1.5 px-3 sm:px-3.5 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <span>About Us</span>
          </Badge>

          {/* Theme-Aware Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.15]">
            Building Solutions That Make an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Impact.
            </span>
          </h2>

          {/* Body Description */}
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
            At TechNova, we combine creativity, emerging technology, and reliable data
            to craft bespoke solutions that drive tangible growth. Our senior team is
            dedicated to executing high-standard results tailored to your long-term success.
          </p>

          {/* Feature Highlights as Theme-Aware Micro-Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="
                  group relative flex flex-col items-start p-4 rounded-2xl
                  border border-border/60 bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.04] dark:via-white/[0.02] dark:to-transparent
                  backdrop-blur-xl
                  transition-all duration-300 ease-out
                  hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div 
                  aria-hidden="true" 
                  className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>

                <span className="mt-3 text-sm font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {title}
                </span>

                <span className="mt-0.5 text-xs text-muted-foreground leading-snug">
                  {desc}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="mt-8">
            <NavLink
              to="/about"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group px-7 py-5 text-sm sm:text-base font-medium border-border/70 hover:border-primary/50 backdrop-blur-sm",
              })}
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </NavLink>
          </div>

        </div>

      </div>
    </Section>
  );
}

export default AboutPreviewSection;