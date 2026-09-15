import { useRef } from "react";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import { motion, useMotionValue, useSpring } from "framer-motion";

// High-Precision Magnetic Physics Wrapper
function MagneticPull({ children, strength = 0.32 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 15, stiffness: 280, mass: 0.1 });
  const smoothY = useSpring(y, { damping: 15, stiffness: 280, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * strength);
    y.set((e.clientY - (top + height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className="inline-block w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
}

function CTASection() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <Section id="cta" className="py-14 sm:py-20 md:py-28 relative overflow-hidden">
      
      {/* ================= Master Container with Kinetic Border Beam ================= */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="
          group relative w-full overflow-hidden
          rounded-[28px] sm:rounded-[32px] p-[1.5px]
          shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)]
        "
      >
        {/* Rotating Electric Blue & Cyan Laser Beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
          className="
            absolute -inset-[150%] 
            bg-[conic-gradient(from_0deg,transparent_0_300deg,#0051fb_330deg,#38bdf8_355deg,transparent_360deg)]
            pointer-events-none z-0
          "
        />

        {/* ================= Inner Solid High-End Surface ================= */}
        <div
          className="
            relative w-full h-full
            rounded-[26.5px] sm:rounded-[30.5px] p-6 sm:p-10 lg:p-16
            bg-card dark:bg-[#070c18]
            overflow-hidden z-10
            border border-border/80 dark:border-white/[0.08]
          "
        >
          {/* Subtle Technical Blueprint Grid Layer inside card */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 
              bg-[linear-gradient(to_right,rgba(0,81,251,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,81,251,0.04)_1px,transparent_1px)]
              bg-[size:2.5rem_2.5rem] 
              [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]
              pointer-events-none -z-10
            "
          />

          {/* Interactive Mouse-Tracking Core Spotlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -inset-px rounded-[26.5px] sm:rounded-[30.5px] opacity-0 
              transition-opacity duration-300 group-hover:opacity-100 -z-10
              bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(0,81,251,0.22),transparent_70%)]
            "
          />

          {/* Atmospheric Glowing Core Orb */}
          <motion.div 
            aria-hidden="true" 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[280px] bg-gradient-to-r from-primary via-cyan-500 to-indigo-600 rounded-full blur-[110px] pointer-events-none -z-10" 
          />

          {/* Top Hairline Specular Reflection */}
          <div 
            aria-hidden="true" 
            className="absolute inset-x-12 sm:inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none z-20" 
          />

          <div className="relative z-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14">
            
            {/* Content Left */}
            <div className="flex flex-col items-start text-left max-w-2xl w-full">
              
              {/* Eyebrow Badge (Single-Line No-Wrap Snug Pill) */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full border border-border/80 dark:border-white/[0.12] bg-background/80 dark:bg-white/[0.04] backdrop-blur-xl shadow-xs max-w-full overflow-x-auto no-scrollbar">
                <Badge variant="brand" className="gap-1 sm:gap-1.5 py-0.5 sm:py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(0,81,251,0.35)]">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary animate-pulse" aria-hidden="true" />
                  <span>Let's Work Together</span>
                </Badge>

                <div className="flex items-center gap-1.5 pr-2.5 pl-1 py-0.5 text-[10px] sm:text-[11px] font-mono font-medium text-muted-foreground whitespace-nowrap shrink-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="hidden sm:inline">Q3/Q4 Availability Open</span>
                  <span className="sm:hidden">Available Now</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/95 to-foreground/75 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.14]">
                Have a project in mind?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                  Let's Build It.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl font-normal">
                Let's turn your ideas into high-performing digital realities. Our engineering and design
                team is ready to help you architect, launch, and scale resilient products above the noise.
              </p>
            </div>

            {/* Action Right: Magnetic CTA Cluster */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Primary Magnetic Electric Button */}
              <MagneticPull strength={0.35}>
                <NavLink
                  to="/contact"
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    w-full sm:w-auto px-8 py-3.5 sm:py-4.5 rounded-full
                    bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                    text-white text-sm sm:text-base font-semibold tracking-wide
                    shadow-[0_4px_25px_rgba(0,81,251,0.45)]
                    hover:shadow-[0_6px_35px_rgba(0,81,251,0.7)]
                    active:scale-95
                    transition-all duration-300 ease-out
                    overflow-hidden cursor-pointer
                  "
                >
                  {/* Specular Liquid Shimmer Reflection */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute -inset-full top-0 w-1/2 h-full
                      bg-gradient-to-r from-transparent via-white/35 to-transparent
                      -skew-x-12 opacity-0 group-hover:opacity-100
                      group-hover:animate-[shimmer_1.4s_infinite]
                      pointer-events-none
                    "
                  />

                  <div className="absolute inset-x-0 top-0 h-px bg-white/40 pointer-events-none" />
                  <span>Start a Project</span>

                  {/* Kinetic Dual Arrow Snap */}
                  <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-4" />
                    <ArrowRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-4 group-hover:translate-x-0" />
                  </div>
                </NavLink>
              </MagneticPull>

              {/* Secondary Magnetic Obsidian Glass CTA */}
              <MagneticPull strength={0.22}>
                <NavLink
                  to="/contact"
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    w-full sm:w-auto px-7 py-3.5 sm:py-4.5 rounded-full
                    border border-border/80 dark:border-white/[0.14]
                    bg-muted/40 dark:bg-white/[0.04]
                    backdrop-blur-xl
                    text-foreground dark:text-white text-sm sm:text-base font-medium
                    hover:border-primary/50 hover:bg-muted/60 dark:hover:bg-white/[0.08]
                    active:scale-95
                    transition-all duration-300 ease-out
                    cursor-pointer
                  "
                >
                  <MessageSquare className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>Talk to Us</span>
                </NavLink>
              </MagneticPull>

            </div>

          </div>
        </div>

      </motion.div>
    </Section>
  );
}

export default CTASection;