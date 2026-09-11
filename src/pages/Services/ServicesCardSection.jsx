import { ArrowUpRight } from "lucide-react";
import ServicesData from "./ServicesData.js";
import { Section } from "@/src/components/layout/Section";

const DEFAULT_TAGS = {
  "Web Development": ["Next.js", "React", "Scalable APIs"],
  "UI/UX Design": ["Figma Systems", "Wireframing", "Prototypes"],
  "Digital Marketing": ["Growth SEO", "Paid Media", "Analytics"],
};

function ServicesCardSection() {
  return (
    <Section 
      id="services-cards" 
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden w-full"
    >
      {/* Responsive ambient background glow (theme-adaptive) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[300px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ServicesData.map((service, index) => {
          const Icon = service.icon;
          const tags = service.tags || DEFAULT_TAGS[service.title] || ["Enterprise", "High Impact"];
          const serviceIndex = String(index + 1).padStart(2, "0");

          return (
            <div
              key={service.id || index}
              className="
                group relative flex flex-col justify-between
                w-full
                rounded-3xl p-6 sm:p-8
                border border-border/60
                bg-card/60 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:border-primary/50
                hover:shadow-[0_20px_40px_-15px_rgba(0,81,251,0.25)]
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Top specular border reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Contained hover bloom */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon + Index */}
                <div className="flex items-center justify-between w-full">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,81,251,0.35)]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase group-hover:text-primary transition-colors">
                    {serviceIndex}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capability Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md border border-border/60 bg-muted/40 dark:bg-white/[0.03] text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-5 border-t border-border/40 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  Explore Service
                </span>

                <div className="w-8 h-8 rounded-full border border-border/70 bg-muted/30 dark:bg-white/[0.04] flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ServicesCardSection;