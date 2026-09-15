import React, { useState, useMemo, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServicesData from "./ServicesData.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const DEFAULT_TAGS = {
  "Web Development": ["Next.js", "React", "Scalable APIs"],
  "UI/UX Design": ["Figma Systems", "Wireframing", "Prototypes"],
  "Digital Marketing": ["Growth SEO", "Paid Media", "Analytics"],
};

const FALLBACK_TAGS = ["Enterprise", "High Impact"];

const CATEGORIES = ["All", "Engineering", "Design", "Marketing"];

const getServiceCategory = (title = "") => {
  const lower = title.toLowerCase();
  if (
    lower.includes("web") ||
    lower.includes("cloud") ||
    lower.includes("dev") ||
    lower.includes("software") ||
    lower.includes("app")
  ) {
    return "Engineering";
  }
  if (
    lower.includes("design") ||
    lower.includes("ui") ||
    lower.includes("ux") ||
    lower.includes("brand")
  ) {
    return "Design";
  }
  if (
    lower.includes("marketing") ||
    lower.includes("seo") ||
    lower.includes("growth") ||
    lower.includes("media")
  ) {
    return "Marketing";
  }
  return "Engineering";
};

// ==========================================
// True 3D Kinetic Spotlight Card (Awwwards Grade)
// ==========================================
function ServiceCardItem({ title, description, icon: Icon, tags, serviceIndex, path, index }) {
  const cardRef = useRef(null);

  // Mouse coordinate physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.2 };
  const smoothX = useSpring(mouseX, { ...springConfig });
  const smoothY = useSpring(mouseY, { ...springConfig });

  const rotateX = useTransform(smoothY, [-180, 180], [10, -10]);
  const rotateY = useTransform(smoothX, [-180, 180], [-10, 10]);

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
      initial={{ opacity: 0, y: 35, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
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
        whileHover={{ scale: 1.025, z: 20 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="
          group relative flex flex-col justify-between
          w-full h-full min-h-[410px] text-left
          rounded-[28px] p-7 sm:p-9
          border border-border/80 dark:border-white/[0.1]
          bg-card/75 dark:bg-[#070c18]/90
          backdrop-blur-2xl
          shadow-[0_10px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.5)]
          hover:border-primary/60 hover:dark:border-cyan-400/50
          hover:shadow-[0_25px_60px_-12px_rgba(0,81,251,0.45)]
          transition-colors duration-300
          overflow-hidden cursor-pointer
        "
      >
        <NavLink to={path || "/contact"} className="contents">
          {/* Dynamic Laser Border Tracer */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -inset-px rounded-[28px] opacity-0
              transition-opacity duration-300 group-hover:opacity-100 z-30
              [background:radial-gradient(350px_circle_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(56,189,248,0.65),transparent_65%)]
              [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              [mask-composite:exclude]
            "
          />

          {/* Internal Cyber Spotlight Cone */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -inset-px rounded-[28px] opacity-0
              transition-opacity duration-300 group-hover:opacity-100 z-0
              bg-[radial-gradient(450px_circle_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(0,81,251,0.22),transparent_70%)]
            "
          />

          {/* Blueprint Grid */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
              bg-[size:2rem_2rem]
              [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_60%,transparent_100%)]
              pointer-events-none z-0
            "
          />

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {/* Header: Icon + Monospace Tag */}
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="flex items-center justify-between w-full"
              >
                {/* 👉 ICON CONTAINER WITH GUARANTEED HOVER BG CHANGE */}
                <div className="relative">
                  {/* Subtle Neon Halo Behind Icon */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-cyan-400/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-125"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      relative flex items-center justify-center w-14 h-14 rounded-2xl
                      bg-primary/10 dark:bg-white/[0.05]
                      border border-primary/25 dark:border-white/[0.12]
                      text-primary dark:text-cyan-400
                      transition-all duration-300 ease-out
                      group-hover:!bg-primary group-hover:dark:!bg-primary
                      group-hover:!border-primary group-hover:dark:!border-primary
                      group-hover:!text-white group-hover:dark:!text-white
                      group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,81,251,0.75)]
                    "
                  >
                    {Icon && (
                      <Icon
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                  <span className="font-mono text-xs font-bold tracking-[0.25em] text-muted-foreground/60 uppercase group-hover:text-cyan-400 transition-colors duration-300">
                    // {serviceIndex}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div style={{ transform: "translateZ(30px)" }} className="mt-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary dark:group-hover:text-cyan-300">
                  {title}
                </h3>

                <p className="mt-3.5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Capability Chips */}
              <div style={{ transform: "translateZ(20px)" }} className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="
                      px-3 py-1 text-[11px] font-sans font-medium rounded-lg
                      border-border/70 dark:border-white/[0.08] bg-background/50 dark:bg-white/[0.02]
                      group-hover:border-primary/40 group-hover:text-foreground
                      transition-all duration-200
                    "
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Card Footer Action: Guaranteed Electric Blue Pop */}
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="mt-10 pt-5 border-t border-border/60 dark:border-white/[0.08] flex items-center justify-between"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground/80 group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                Explore Capabilities
              </span>

              {/* Circular Arrow Pod */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125 pointer-events-none"
                />

                <div
                  aria-hidden="true"
                  className="
                    relative overflow-hidden
                    w-10 h-10 rounded-full
                    border border-border/80 dark:border-white/[0.14]
                    bg-muted/40 dark:bg-white/[0.05]
                    flex items-center justify-center
                    text-foreground/70 dark:text-white/70
                    transition-all duration-300 ease-out
                    group-hover:!bg-primary group-hover:dark:!bg-primary
                    group-hover:!border-primary group-hover:dark:!border-primary
                    group-hover:!text-white group-hover:dark:!text-white
                    group-hover:scale-115
                    group-hover:shadow-[0_0_25px_rgba(0,81,251,0.75)]
                  "
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 shrink-0" />
                  <ArrowUpRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 text-white shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </motion.div>
    </motion.div>
  );
}

// ==========================================
// Parent Section with Fluid Filter Orchestration
// ==========================================
export default function ServicesCardSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return ServicesData;
    return ServicesData.filter(
      (service) => getServiceCategory(service.title) === activeCategory
    );
  }, [activeCategory]);

  return (
    <Section
      id="services-cards"
      className="py-14 md:py-20 lg:py-28 relative overflow-hidden w-full"
    >
      {/* Perspective Canvas Background */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem]
          [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]
          pointer-events-none -z-10
        "
      />

      {/* Central Radiance Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] h-[340px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="flex flex-col items-center gap-10 sm:gap-14 w-full">

        {/* Sliding Fluid Filter Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full border border-border/80 dark:border-white/[0.12] bg-card/70 dark:bg-white/[0.04] backdrop-blur-2xl shadow-sm">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full
                  text-xs sm:text-sm font-semibold tracking-wide
                  transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  cursor-pointer
                  ${isActive ? "text-white" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="
                      absolute inset-0 rounded-full
                      bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                      shadow-[0_2px_15px_rgba(0,81,251,0.5)]
                      -z-10
                    "
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Morphing Cards Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const tags = service.tags || DEFAULT_TAGS[service.title] || FALLBACK_TAGS;
              const serviceIndex = String(index + 1).padStart(2, "0");

              return (
                <ServiceCardItem
                  key={service.id || service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  tags={tags}
                  serviceIndex={serviceIndex}
                  path={service.path}
                  index={index}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </Section>
  );
}