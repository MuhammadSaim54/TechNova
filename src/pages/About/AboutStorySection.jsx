import { useRef } from "react";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import { Sparkles, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import Data from "./StorySectionData.js";

// Interactive Bento Card with Coordinate Light-Tracer
function StoryBentoCard({ card, index, isFeatured }) {
  const cardRef = useRef(null);
  const Icon = card.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className={`
        group relative overflow-hidden rounded-3xl p-6 sm:p-8
        border border-border/80 dark:border-white/[0.1]
        bg-card/60 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
        backdrop-blur-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
        transition-all duration-300 ease-out
        hover:border-primary/60 hover:shadow-[0_20px_45px_-10px_rgba(0,81,251,0.35)]
        flex flex-col justify-between cursor-default
        ${isFeatured ? "sm:row-span-2 min-h-[280px] sm:min-h-[340px]" : "min-h-[160px]"}
      `}
    >
      {/* Specular Edge Glow on Cursor Proximity */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-px rounded-3xl opacity-0 
          transition-opacity duration-300 group-hover:opacity-100 z-10
          [background:radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.45),transparent_65%)]
          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
          [mask-composite:exclude]
        "
      />

      {/* Internal Radial Atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-px rounded-3xl opacity-0 
          transition-opacity duration-300 group-hover:opacity-100 -z-10
          bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(0,81,251,0.16),transparent_70%)]
        "
      />

      {/* Top Hairline Specular Reflection */}
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
      />

      {/* Top: Icon + Metric Index */}
      <div className="flex items-center justify-between w-full relative z-20">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(0,81,251,0.5)]">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.8} />
        </div>
        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-muted-foreground/60 uppercase group-hover:text-primary transition-colors">
          Metric 0{index + 1}
        </span>
      </div>

      {/* Center / Bottom: Stat & Description */}
      <div className="mt-6 relative z-20">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/95 to-foreground/75 dark:from-white dark:via-white/95 dark:to-white/70 group-hover:from-blue-600 group-hover:via-primary group-hover:to-cyan-400 dark:group-hover:from-white dark:group-hover:via-cyan-200 dark:group-hover:to-cyan-400 transition-all duration-300">
          {card.title}
        </div>
        <p className="mt-2.5 text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

// Orchestrator Variants for Left Narrative
const leftContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const leftChildVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AboutStorySection() {
  return (
    <Section id="about-story" className="border-b border-border/40 py-18 md:py-28 relative overflow-hidden">
      
      {/* Blueprint Grid Texture */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3rem_3rem] 
          [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Atmospheric Background Radiance */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= Left: Narrative Header ================= */}
        <motion.div
          variants={leftContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          {/* Eyebrow Capsule */}
          <motion.div variants={leftChildVariants}>
            <Badge variant="brand" className="gap-1.5 px-3.5 py-1 text-xs shadow-[0_0_15px_rgba(0,81,251,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
              <span>Our Journey</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={leftChildVariants}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/95 to-foreground/75 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.12]"
          >
            Pioneering The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Digital Craft.
            </span>
          </motion.h2>

          {/* Story Narrative */}
          <motion.p 
            variants={leftChildVariants}
            className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal"
          >
            TechNova was founded on an uncompromised belief: engineering excellence and human-centered design must converge. We empower ambitious enterprises to build resilient cloud architectures, high-converting digital products, and sustainable technology flywheels.
          </motion.p>

          {/* 👉 LIVE TELEMETRY STATUS (Responsive Stack on Mobile, Single Row on Desktop) */}
          <motion.div 
            variants={leftChildVariants}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-medium p-3.5 sm:py-3 sm:px-4.5 rounded-2xl border border-border/80 dark:border-white/[0.08] bg-card/40 dark:bg-white/[0.02] backdrop-blur-xl w-full sm:w-auto"
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-foreground dark:text-white font-semibold">Active Client Deployments</span>
            </div>
            
            <span className="hidden sm:inline-block text-border/80 dark:text-white/20 select-none">•</span>
            
            <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
              <Globe2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Worldwide Execution</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= Right: Premium Bento Metrics with Dynamic Laser ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {Data.map((card, index) => {
            const isFeatured = index === 0;
            return (
              <StoryBentoCard
                key={card.id || index}
                card={card}
                index={index}
                isFeatured={isFeatured}
              />
            );
          })}
        </div>

      </div>
    </Section>
  );
}

export default AboutStorySection;