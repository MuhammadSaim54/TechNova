import { ArrowUpRight, Sparkles } from "lucide-react";
import PortfolioData from "./portfoliodata.js";
import { Section } from "@/src/components/layout/Section";

const DEFAULT_METRICS = [
  { metric: "+140%", label: "Conversion Lift" },
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "2.4x", label: "Speed Index" },
];

const DEFAULT_TAGS = {
  default: ["Next.js", "TypeScript", "Tailwind CSS"],
};

function PortfolioCardsSection() {
  return (
    <Section 
      id="portfolio-cards" 
      className="py-14 sm:py-18 md:py-24 relative overflow-hidden w-full"
    >
      {/* Blueprint Grid Accent */}
      <div 
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] 
          bg-[size:4rem_4rem] 
          opacity-[0.02] dark:opacity-[0.04]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        " 
      />

      {/* Ambient Lighting Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[800px] h-[350px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* Responsive Showcase Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
        {PortfolioData.map((data, index) => {
          const tags = data.tags || (data.category ? [data.category, "Custom App"] : DEFAULT_TAGS.default);
          const impact = data.metric || DEFAULT_METRICS[index % DEFAULT_METRICS.length];
          const projectIndex = String(index + 1).padStart(2, "0");

          return (
            <div
              key={data.id || index}
              className={`
                group relative flex flex-col justify-between
                w-full overflow-hidden
                rounded-3xl p-3 sm:p-3.5
                border border-border/60
                bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-2xl
                shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.18)]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:border-primary/50
                hover:shadow-[0_20px_45px_-10px_rgba(0,81,251,0.3)]
                cursor-pointer
                ${data.className || ""}
              `}
            >
              {/* Top Specular Border Reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Contained Radial Hover Spotlight */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* ================= Digital App Shell Mockup ================= */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted/40 dark:bg-black/40 border border-border/60 shadow-inner">
                  
                  {/* Browser Shell Top Bar (rounded-t-2xl eliminates the corner clipping artifact) */}
                  <div className="absolute top-0 inset-x-0 h-7 rounded-t-2xl bg-background/90 dark:bg-black/80 backdrop-blur-md border-b border-border/40 px-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70 uppercase">
                      CASE // {projectIndex}
                    </span>
                  </div>

                  {/* Project Screenshot */}
                  <img
                    src={data.img}
                    alt={`${data.title} portfolio showcase`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top pt-7 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Glass Impact Stat Floating Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/60 bg-background/90 dark:bg-black/75 backdrop-blur-xl shadow-lg z-10">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-black tracking-tight text-foreground">
                        {impact.metric}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {impact.label}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Content & Tech Stack */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary flex items-center justify-between">
                    <span>{data.title}</span>
                  </h3>

                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {data.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded-md border border-border/60 bg-muted/40 dark:bg-white/[0.03] text-muted-foreground group-hover:border-primary/25 group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 sm:px-5 pb-3.5 pt-3 flex items-center justify-between border-t border-border/40">
                <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  Explore Case Study
                </span>

                {/* Fixed Action Button: explicitly forces primary fill & text inversion across light and dark modes */}
                <div className="w-8 h-8 rounded-full border border-border/70 bg-muted/40 dark:bg-white/[0.04] flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:!bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,81,251,0.5)]">
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

export default PortfolioCardsSection;