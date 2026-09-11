import { Section } from "@/src/components/layout/Section";
import Data from "./StorySectionData.js";

function AboutStorySection() {
  return (
    <Section id="about-story" className="border-b border-border/40 py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= Left: Narrative Header ================= */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <span>Our Journey</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Our Story
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            TechNova helps businesses scale through modern digital solutions.
            Our focus is on creating high-performance products, building long-term
            partnerships, and delivering measurable impact.
          </p>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for projects
            </div>
            <span className="text-border">•</span>
            <span>Global reach</span>
          </div>
        </div>

        {/* ================= Right: Premium Bento Metrics ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {Data.map((card, index) => {
            const Icon = card.icon;
            // First item spans 2 rows on desktop for an intentional bento shape, or spans full column
            const isFeatured = index === 0;

            return (
              <div
                key={card.id || index}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 sm:p-8
                  border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20
                  backdrop-blur-xl
                  shadow-sm transition-all duration-300 ease-out
                  hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5
                  flex flex-col justify-between
                  ${isFeatured ? "sm:row-span-2 min-h-[260px] sm:min-h-[320px]" : "min-h-[150px]"}
                `}
              >
                {/* Subtle card internal hover spotlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top: Icon + Badge */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                    Metric 0{index + 1}
                  </span>
                </div>

                {/* Center / Bottom: Stat & Title */}
                <div className="mt-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground bg-clip-text">
                    {card.title}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-muted-foreground leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}

export default AboutStorySection;