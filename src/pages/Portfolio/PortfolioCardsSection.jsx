import React, { useState, useMemo, useRef } from "react";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";
import PortfolioData from "./portfoliodata.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const DEFAULT_METRICS = [
  { metric: "+140%", label: "Conversion Lift" },
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "2.4x", label: "Speed Index" },
];

const CATEGORY_TAGS = {
  "Web Application": ["React", "TypeScript", "Tailwind CSS"],
  "Web Development": ["Next.js", "Full Stack", "SEO Optimized"],
  "Mobile Application": ["React Native", "iOS & Android", "API Native"],
  "Branding Design": ["Figma Systems", "Identity", "Design System"],
};

// ==========================================
// 1. Dual-Theme Adaptive Kinetic Card
// ==========================================
export const PortfolioCardItem = React.memo(function PortfolioCardItem({
  data,
  index,
}) {
  const cardRef = useRef(null);

  const tags =
    data.tags ||
    CATEGORY_TAGS[data.description] || ["Enterprise", "High Impact"];
  const impact =
    data.metric || DEFAULT_METRICS[index % DEFAULT_METRICS.length];
  const projectIndex = String(index + 1).padStart(2, "0");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-180, 180], [6, -6]);
  const rotateY = useTransform(smoothX, [-180, 180], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);

    cardRef.current.style.setProperty("--cursor-x", `${x}px`);
    cardRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
      className={`w-full h-full ${data.className || ""}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="
          group relative flex flex-col justify-between
          w-full h-full min-h-[440px] sm:min-h-[470px] text-left
          rounded-[26px] p-3.5 sm:p-4
          border border-border/80 dark:border-white/[0.08]
          bg-card/90 dark:bg-[#070b14]/90
          backdrop-blur-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.45)]
          hover:border-primary/50 dark:hover:border-white/[0.2]
          hover:shadow-[0_16px_40px_rgba(0,81,251,0.15)] dark:hover:shadow-[0_16px_40px_rgba(0,81,251,0.3)]
          transition-colors duration-300
          overflow-hidden cursor-pointer
        "
      >
        {/* Specular Border Gleam */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-px rounded-[26px] opacity-0
            transition-opacity duration-300 group-hover:opacity-100 z-30
            [background:radial-gradient(280px_circle_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(0,81,251,0.45),transparent_70%)]
            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            [mask-composite:exclude]
          "
        />

        {/* Top Edge Specular Hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        />

        <div>
          {/* Mockup Frame Container */}
          <div
            className="
              relative z-20 w-full aspect-[16/10] overflow-hidden rounded-[18px] 
              bg-muted/40 dark:bg-[#02050b] 
              border border-border/70 dark:border-white/[0.08]
              shadow-inner isolate
            "
          >
            {/* Top Browser Header */}
            <div className="absolute top-0 inset-x-0 h-7 rounded-t-[18px] bg-background/90 dark:bg-[#090d18] border-b border-border/60 dark:border-white/[0.06] px-3 flex items-center justify-between z-30 backdrop-blur-md">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                CASE // {projectIndex}
              </span>
            </div>

            {/* Screenshot */}
            <img
              src={data.img}
              alt={`${data.title} portfolio showcase`}
              loading="lazy"
              className="
                relative z-10 w-full h-full object-cover object-top pt-7 
                transition-transform duration-700 ease-out group-hover:scale-[1.03] 
                select-none
              "
            />

            {/* Impact Metric Floating Badge */}
            <div className="absolute bottom-3 left-3 z-30 pointer-events-none">
              <div
                className="
                  flex items-center gap-2 px-3 py-1.5 rounded-xl
                  bg-background/95 dark:bg-[#050811]/90 backdrop-blur-xl
                  border border-border/80 dark:border-white/[0.12]
                  shadow-[0_8px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.5)]
                "
              >
                <Sparkles
                  className="w-3.5 h-3.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold tracking-tight text-foreground dark:text-white">
                    {impact.metric}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {impact.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-20 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground dark:text-white transition-colors duration-200 group-hover:text-primary">
                {data.title}
              </h3>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                {data.description}
              </span>
            </div>

            {/* Tag Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="
                    px-2.5 py-0.5 text-[11px] font-sans font-medium rounded-md
                    border-border/70 dark:border-white/[0.08]
                    bg-muted/40 dark:bg-white/[0.02]
                    text-muted-foreground
                    group-hover:border-primary/40 dark:group-hover:border-white/[0.16]
                    group-hover:text-foreground
                    transition-all duration-200
                  "
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="relative z-20 px-4 sm:px-5 pb-3.5 pt-3 flex items-center justify-between border-t border-border/60 dark:border-white/[0.06]">
          <span className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors flex items-center gap-1.5">
            Explore Case Study
          </span>

          {/* Action Arrow Pod */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125 pointer-events-none"
            />

            <div
              aria-hidden="true"
              className="
                relative overflow-hidden
                w-9 h-9 rounded-full
                border border-border/80 dark:border-white/[0.12]
                bg-muted/50 dark:bg-white/[0.04]
                flex items-center justify-center
                text-foreground dark:text-white/80
                transition-all duration-300 ease-out
                group-hover:!bg-primary
                group-hover:!border-primary
                group-hover:!text-white
                group-hover:scale-110
                group-hover:shadow-[0_0_20px_rgba(0,81,251,0.6)]
              "
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 shrink-0" />
              <ArrowUpRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 text-white shrink-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// ==========================================
// 2. Main Section
// ==========================================
function PortfolioCardsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const descriptions = (PortfolioData || [])
      .map((item) => item.description?.trim())
      .filter(Boolean);
    return ["All", ...Array.from(new Set(descriptions))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PortfolioData || [];
    return (PortfolioData || []).filter(
      (item) =>
        item.description?.trim().toLowerCase() ===
        activeCategory.trim().toLowerCase()
    );
  }, [activeCategory]);

  return (
    <Section
      id="portfolio-cards"
      className="py-14 sm:py-18 md:py-24 relative overflow-hidden w-full"
    >
      {/* Blueprint Grid Texture */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Header & Filter Controls */}
      <div className="w-full flex flex-col items-center mb-10 sm:mb-14 lg:mb-18">
        <div className="flex items-center gap-3 mb-6">
          <Badge
            variant="brand"
            className="px-3.5 py-1.5 text-xs gap-2 shadow-[0_0_15px_rgba(0,81,251,0.2)]"
          >
            <Filter className="w-3.5 h-3.5 text-primary" />
            Curated Deployments
          </Badge>
          <span className="font-mono text-xs text-muted-foreground/90 bg-muted/60 dark:bg-white/[0.03] px-2.5 py-1 rounded-lg border border-border/80 dark:border-white/[0.08]">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground dark:text-white text-center leading-[1.12]">
          Engineered for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
            Impact.
          </span>
        </h2>

        {/* 👉 RESPONSIVE FILTER CAPSULE (Touch scrollable, no text clipping) */}
        <div className="mt-8 sm:mt-10 w-full flex justify-start sm:justify-center overflow-x-auto no-scrollbar px-4 sm:px-0 py-2">
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full border border-border/80 dark:border-white/[0.1] bg-card/90 dark:bg-[#070b14]/80 backdrop-blur-2xl shadow-sm shrink-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full
                    text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap
                    transition-colors duration-200
                    focus-visible:outline-none
                    shrink-0 cursor-pointer
                    ${isActive ? "text-white" : "text-muted-foreground hover:text-foreground dark:hover:text-white"}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioFilterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className="
                        absolute inset-0 rounded-xl sm:rounded-full
                        bg-gradient-to-r from-blue-600 to-primary
                        shadow-[0_2px_15px_rgba(0,81,251,0.5)]
                        -z-10
                      "
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Showcase Grid */}
      <motion.div
        layout
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[300px] items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((data, index) => (
            <PortfolioCardItem
              key={data.id || data.title}
              data={data}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export default PortfolioCardsSection;