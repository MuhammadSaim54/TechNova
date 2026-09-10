import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServicesData from "./ServicesData.js";
import { Section } from "@/src/components/layout/Section";
import { buttonVariants } from "@/src/components/ui/button";

// Fallback capability tags if not present in your ServicesData.js
const DEFAULT_TAGS = {
  "Web Development": ["Next.js", "React", "Scalable APIs"],
  "UI/UX Design": ["Figma Systems", "Wireframing", "Prototypes"],
  "Digital Marketing": ["Growth SEO", "Paid Media", "Analytics"],
};

function ServicesPreviewSection() {
  // Showcase the top 3 featured services on the homepage
  const previewServices = ServicesData.slice(0, 3);

  return (
    <Section
      id="services-preview"
      className="py-16 md:py-24 border-b border-border/40 relative overflow-hidden w-full"
    >
      {/* Responsive ambient background glow (contained to prevent mobile blowout) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[320px] bg-primary/[0.08] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* ================= Header ================= */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
          Our Services
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Services That Drive <span className="text-primary">Results</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          We provide a comprehensive suite of digital solutions engineered to help
          your business accelerate growth, streamline operations, and engage the right audience.
        </p>
      </div>

      {/* ================= Premium Bento Cards ================= */}
      <div className="mt-12 sm:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {previewServices.map((service, index) => {
          const Icon = service.icon;
          const tags =
            service.tags ||
            DEFAULT_TAGS[service.title] || ["Enterprise", "High Impact"];
          const serviceIndex = String(index + 1).padStart(2, "0");

          return (
            <div
              key={service.id || index}
              className="
                group relative flex flex-col justify-between
                w-full
                rounded-3xl p-6 sm:p-8
                border border-white/[0.08]
                bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent
                backdrop-blur-2xl
                shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:border-primary/50
                hover:shadow-[0_20px_40px_-15px_rgba(0,81,251,0.25)]
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Top specular reflection line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Contained hover bloom */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon + Monospace Index */}
                <div className="flex items-center justify-between w-full">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,81,251,0.4)]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase group-hover:text-primary/70 transition-colors">
                    {serviceIndex}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capability Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md border border-white/[0.06] bg-white/[0.03] text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/90 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  Explore Service
                </span>

                <div className="w-8 h-8 rounded-full border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= View All CTA ================= */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <NavLink
          to="/services"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "group px-8 gap-2 border-border/70 hover:border-primary/50",
          })}
        >
          View All Services
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </NavLink>
      </div>
    </Section>
  );
}

export default ServicesPreviewSection;