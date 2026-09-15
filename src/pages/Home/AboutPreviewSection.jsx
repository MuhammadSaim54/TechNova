import { useRef } from "react";
import { Brain, Users, HeartHandshake, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import AboutImage from "../../assets/images/developer-team.webp";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

// Magnetic Physics Wrapper for Action Button
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
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// Interactive Feature Bento Card with Laser Light Rim
function FeatureBentoCard({ icon: Icon, title, desc }) {
  const cardRef = useRef(null);

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
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="
        group relative flex flex-col items-start p-5 rounded-2xl
        border border-border/70 dark:border-white/[0.08]
        bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:border-primary/60 hover:shadow-[0_12px_32px_-10px_rgba(0,81,251,0.35)]
        cursor-pointer overflow-hidden
      "
    >
      {/* Dynamic Laser Border Tracer */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-px rounded-2xl opacity-0 
          transition-opacity duration-300 group-hover:opacity-100 z-10
          [background:radial-gradient(220px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.5),transparent_70%)]
          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
          [mask-composite:exclude]
        "
      />

      {/* Subtle Internal Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-px rounded-2xl opacity-0 
          transition-opacity duration-300 group-hover:opacity-100 -z-10
          bg-[radial-gradient(240px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(0,81,251,0.15),transparent_75%)]
        "
      />

      <div 
        aria-hidden="true" 
        className="
          p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary 
          transition-all duration-300 
          group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground 
          group-hover:shadow-[0_0_20px_rgba(0,81,251,0.6)]
        "
      >
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.75} />
      </div>

      <span className="mt-3.5 text-sm font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
        {title}
      </span>

      <span className="mt-1 text-xs text-muted-foreground leading-snug">
        {desc}
      </span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AboutPreviewSection() {
  const containerRef = useRef(null);

  // High-Precision Spring Physics for 3D Multilayer Canvas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 160, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 160, damping: 22 });

  // 3D Rotations
  const rotateX = useTransform(smoothY, [-250, 250], [12, -12]);
  const rotateY = useTransform(smoothX, [-250, 250], [-12, 12]);

  // Dynamic Glare Movement
  const glareX = useTransform(smoothX, [-250, 250], ["15%", "85%"]);
  const glareY = useTransform(smoothY, [-250, 250], ["15%", "85%"]);

  // Counter-Balance Parallax for HUD Badge
  const badgeX = useTransform(smoothX, [-250, 250], [-14, 14]);
  const badgeY = useTransform(smoothY, [-250, 250], [-14, 14]);

  const handleCanvasMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (left + width / 2));
    mouseY.set(e.clientY - (top + height / 2));
  };

  const handleCanvasMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Section
      id="about-preview"
      className="border-b border-border/50 py-16 sm:py-20 md:py-28 relative overflow-hidden w-full"
    >
      {/* Atmospheric Background Aurora */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[340px] sm:w-[550px] h-[340px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-center">
        
        {/* ================= Left: Multi-Depth Holographic Artwork Canvas ================= */}
        <div 
          ref={containerRef}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={handleCanvasMouseLeave}
          className="lg:col-span-6 relative flex justify-center items-center [perspective:1200px] select-none"
        >
          {/* Deep Perspective Ambient Mesh */}
          <div 
            aria-hidden="true" 
            className="absolute inset-4 bg-gradient-to-tr from-primary/30 via-cyan-500/20 to-transparent rounded-3xl blur-3xl pointer-events-none -z-10 scale-95" 
          />

          {/* Master 3D Tilted Card Container */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full rounded-3xl border border-border/80 dark:border-white/[0.12] bg-card/40 dark:bg-white/[0.02] p-2.5 sm:p-3.5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
          >
            {/* Top Specular Rim Reflection */}
            <div
              aria-hidden="true"
              className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none z-20"
            />

            {/* Specular Liquid Glare Layer (Follows cursor angle) */}
            <motion.div
              aria-hidden="true"
              style={{
                background: `radial-gradient(550px circle at ${glareX} ${glareY}, rgba(255,255,255,0.12), transparent 70%)`,
              }}
              className="absolute inset-0 rounded-3xl pointer-events-none z-10 mix-blend-overlay"
            />

            {/* Artwork Frame with translateZ depth */}
            <div 
              style={{ transform: "translateZ(25px)" }}
              className="overflow-hidden rounded-2xl relative group"
            >
              <img
                src={AboutImage}
                alt="TechNova team collaborating on digital solutions"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* 👉 PRO HOLOGRAPHIC HUD BADGE (Elevated Z-space + Counter-Parallax) */}
          <motion.div
            style={{ 
              transform: "translateZ(75px)",
              x: badgeX,
              y: badgeY,
            }}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="
              absolute -bottom-6 -left-3 sm:bottom-6 sm:left-6
              flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl
              border border-border/90 dark:border-white/[0.18]
              bg-background/95 dark:bg-[#070b14]/90
              backdrop-blur-3xl
              shadow-[0_20px_45px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_55px_rgba(0,0,0,0.7)]
              hover:border-primary/60 transition-colors
              z-30 cursor-pointer
            "
          >
            {/* Ambient Cyan Halo behind badge */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-cyan-500/15 blur-xl pointer-events-none -z-10"
            />

            {/* Live Telemetry Animated Node */}
            <div className="relative flex items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-primary dark:from-white dark:via-white/95 dark:to-cyan-400">
                10+
              </div>
              <span className="absolute -top-1 -right-2 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
            </div>

            <div className="flex flex-col text-left border-l border-border/80 dark:border-white/[0.1] pl-3.5 sm:pl-4">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-500 dark:text-cyan-400 font-semibold">
                  Verified Mastery
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-foreground leading-tight mt-0.5">
                Years of Excellence
              </span>
              <span className="text-[11px] text-muted-foreground leading-tight">
                Architecting Cloud Solutions
              </span>
            </div>
          </motion.div>

        </div>

        {/* ================= Right: Staggered Content & Micro-Bento Chips ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          
          {/* Eyebrow Pill */}
          <motion.div variants={fadeUpVariants}>
            <Badge variant="brand" className="gap-1.5 px-3.5 py-1 text-xs shadow-[0_0_15px_rgba(0,81,251,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
              <span>About Us</span>
            </Badge>
          </motion.div>

          {/* Theme-Aware Headline */}
          <motion.h2 
            variants={fadeUpVariants}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.15]"
          >
            Building Solutions That Make an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Impact.
            </span>
          </motion.h2>

          {/* Body Description */}
          <motion.p 
            variants={fadeUpVariants}
            className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl font-normal"
          >
            At TechNova, we combine creativity, emerging technology, and reliable data
            to craft bespoke solutions that drive tangible growth. Our senior team is
            dedicated to executing high-standard results tailored to your long-term success.
          </motion.p>

          {/* Feature Highlights with Dynamic Laser Tracers */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full"
          >
            {FEATURES.map((feature) => (
              <FeatureBentoCard key={feature.title} {...feature} />
            ))}
          </motion.div>

          {/* Action CTA with Magnetic Spring & Cyber Reflection */}
          <motion.div variants={fadeUpVariants} className="mt-9">
            <MagneticPull strength={0.32}>
              <NavLink
                to="/about"
                className="
                  group relative inline-flex items-center gap-2.5
                  px-8 py-4 rounded-full
                  border border-border/80 dark:border-white/[0.14]
                  bg-card/70 dark:bg-white/[0.04]
                  backdrop-blur-2xl
                  text-sm sm:text-base font-semibold tracking-wide text-foreground
                  shadow-[0_8px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)]
                  hover:border-primary/60 hover:text-white
                  hover:shadow-[0_0_35px_rgba(0,81,251,0.5)]
                  active:scale-95
                  transition-all duration-300 ease-out
                  overflow-hidden cursor-pointer
                "
              >
                {/* Background Electric Fill on Hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />

                {/* Cyber Light Reflection Sweep */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-full top-0 w-1/2 h-full
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    -skew-x-12 opacity-0 group-hover:opacity-100
                    group-hover:animate-[shimmer_1.4s_infinite]
                    pointer-events-none
                  "
                />

                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
              </NavLink>
            </MagneticPull>
          </motion.div>

        </motion.div>

      </div>
    </Section>
  );
}

export default AboutPreviewSection;