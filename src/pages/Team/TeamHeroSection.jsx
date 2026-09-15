import { useRef } from "react";
import { Sparkles, Terminal, Palette, BrainCircuit, Globe2, ShieldCheck } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SQUAD_SPECIALIZATIONS = [
  { label: "Systems Architecture", icon: Terminal },
  { label: "Creative Direction", icon: Palette },
  { label: "AI & Neural Tooling", icon: BrainCircuit },
  { label: "Distributed Clouds", icon: Globe2 },
  { label: "Security & Auditing", icon: ShieldCheck },
];

// Interactive Micro-Chip with Spring Physics
function SquadChip({ label, icon: Icon }) {
  const chipRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 14, stiffness: 260, mass: 0.1 });
  const smoothY = useSpring(y, { damping: 14, stiffness: 260, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!chipRef.current) return;
    const { left, top, width, height } = chipRef.current.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * 0.25);
    y.set((e.clientY - (top + height / 2)) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={chipRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="
        group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full
        border border-border/80 dark:border-white/[0.1]
        bg-card/70 dark:bg-white/[0.03]
        backdrop-blur-xl
        text-xs font-mono font-medium text-muted-foreground
        shadow-xs hover:border-primary/60 hover:text-foreground
        hover:shadow-[0_0_20px_rgba(0,81,251,0.3)]
        transition-colors duration-200 cursor-default
      "
    >
      <Icon className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:scale-115" />
      <span>{label}</span>
    </motion.div>
  );
}

// Orchestration Variants
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function TeamHeroSection() {
  return (
    <Section
      id="team-hero"
      className="border-b border-border/50 py-14 sm:py-18 md:py-24 lg:py-28 relative overflow-hidden w-full"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Blueprint Perspective Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Rhythmic Breathing Atmospheric Core Glow */}
      <motion.div 
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] lg:w-[750px] h-[300px] bg-primary rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10" 
      />

      {/* Top Hairline Specular Reflection */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-24 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none z-10" 
      />

      {/* ================= Main Content Stack ================= */}
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center w-full max-w-4xl mx-auto"
      >

        {/* Eyebrow Capsule */}
        <motion.div 
          variants={heroChildVariants}
          className="inline-flex flex-wrap items-center justify-center gap-2 p-1 rounded-full border border-border/70 dark:border-white/[0.1] bg-card/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xs"
        >
          <Badge variant="brand" className="gap-1.5 py-1 px-3 shadow-[0_0_15px_rgba(0,81,251,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
            <span>Our People</span>
          </Badge>
          <Badge variant="live" className="py-1 px-3">
            World-Class Minds
          </Badge>
        </motion.div>

        {/* Semantic Theme-Aware Headline */}
        <motion.h1 
          variants={heroChildVariants}
          className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/95 to-foreground/75 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.12]"
        >
          Meet Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
            Experts.
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p 
          variants={heroChildVariants}
          className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal"
        >
          A multidisciplinary collective of architects, senior engineers, and product designers
          committed to crafting exceptional digital experiences.
        </motion.p>

        {/* Interactive Specialization Capabilities Dock */}
        <motion.div 
          variants={heroChildVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {SQUAD_SPECIALIZATIONS.map((spec) => (
            <SquadChip key={spec.label} {...spec} />
          ))}
        </motion.div>

      </motion.div>
    </Section>
  );
}

export default TeamHeroSection;