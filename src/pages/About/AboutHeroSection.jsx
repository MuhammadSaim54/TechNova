import { useState, useRef } from "react";
import { ArrowRight, Sparkles, Users, Award, ShieldCheck } from "lucide-react";

import AboutImage from "../../assets/images/developer-team.webp";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";
import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";
import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

// Orchestrator Stagger Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants = {
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

function AboutHeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

  // 3D Canvas Mouse Coordinates
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(smoothY, [-200, 200], [10, -10]);
  const rotateY = useTransform(smoothX, [-200, 200], [-10, 10]);

  // Floating HUD Badge Counter-Parallax
  const badgeX = useTransform(smoothX, [-200, 200], [-12, 12]);
  const badgeY = useTransform(smoothY, [-200, 200], [-12, 12]);

  const handleCanvasMouseMove = (e) => {
    if (!canvasRef.current) return;
    const { left, top, width, height } = canvasRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (left + width / 2));
    mouseY.set(e.clientY - (top + height / 2));
  };

  const handleCanvasMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Section
      id="about-hero"
      className="border-b border-border/50 py-10 md:py-14 lg:py-18 relative overflow-hidden w-full"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Blueprint Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Atmospheric Breathing Light */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] lg:w-[680px] h-[260px] bg-primary rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" 
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* ================= Left: Copy & Actions ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left"
        >

          {/* Eyebrow Pill */}
          <motion.div 
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 p-1 rounded-full border border-border/70 dark:border-white/[0.1] bg-card/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xs"
          >
            <Badge variant="brand" className="gap-1.5 py-1 px-3 shadow-[0_0_15px_rgba(0,81,251,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
              <span>About TechNova</span>
            </Badge>
            <span className="h-3 w-px bg-border/80 dark:bg-white/10" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-primary px-2">
              Who We Are
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeUpVariants}
            className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.12]"
          >
            Engineering Digital Products That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Scale.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeUpVariants}
            className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal"
          >
            We are a team of passionate creators, engineers, and digital strategists
            helping ambitious brands build high-impact web products, modernize infrastructure,
            and thrive in competitive digital markets.
          </motion.p>

          {/* Action CTAs with Magnetic Physics */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
          >
            <MagneticPull strength={0.35}>
              <Button
                type="button"
                variant="electric"
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="
                  group relative border-none justify-center px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold
                  shadow-[0_4px_25px_rgba(0,81,251,0.35)] hover:shadow-[0_6px_35px_rgba(0,81,251,0.6)]
                  active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer w-full sm:w-auto
                "
              >
                {/* Specular Shimmer */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-full top-0 w-1/2 h-full
                    bg-gradient-to-r from-transparent via-white/30 to-transparent
                    -skew-x-12 opacity-0 group-hover:opacity-100
                    group-hover:animate-[shimmer_1.4s_infinite]
                    pointer-events-none
                  "
                />

                <span className="relative z-10">Get Started</span>

                {/* Kinetic Dual Arrow */}
                <div className="relative overflow-hidden w-4 h-4 ml-1 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-4" />
                  <ArrowRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-4 group-hover:translate-x-0" />
                </div>
              </Button>
            </MagneticPull>

            <MagneticPull strength={0.22}>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setServicesDialogOpen(true)}
                className="
                  justify-center px-8 py-5 sm:py-6 text-sm sm:text-base font-medium
                  border-border/80 dark:border-white/[0.12] bg-card/60 dark:bg-white/[0.04]
                  backdrop-blur-xl hover:border-primary/50 hover:bg-card/90
                  active:scale-95 transition-all duration-300 cursor-pointer w-full sm:w-auto
                "
              >
                Our Services
              </Button>
            </MagneticPull>
          </motion.div>

          {/* Trust Micro-Pills with Interactive Hover */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            <Badge 
              variant="outline" 
              className="gap-1.5 px-3 py-1.5 font-sans text-xs font-medium text-muted-foreground border-border/70 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
            >
              <Users className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>Senior Talent</span>
            </Badge>

            <Badge 
              variant="outline" 
              className="gap-1.5 px-3 py-1.5 font-sans text-xs font-medium text-muted-foreground border-border/70 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>Dedicated Squads</span>
            </Badge>

            <Badge 
              variant="outline" 
              className="gap-1.5 px-3 py-1.5 font-sans text-xs font-medium text-muted-foreground border-border/70 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
            >
              <Award className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>10+ Yrs Track Record</span>
            </Badge>
          </motion.div>

        </motion.div>

        {/* ================= Right: 3D Parallax Canvas & Floating HUD ================= */}
        <div 
          ref={canvasRef}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={handleCanvasMouseLeave}
          className="md:col-span-5 relative flex justify-center items-center mt-6 md:mt-0 [perspective:1000px] select-none"
        >
          {/* Backlight Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-cyan-500/15 to-transparent rounded-3xl blur-3xl pointer-events-none -z-10 scale-95" 
          />

          {/* 3D Tilted Card Frame */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-none flex justify-center items-center"
          >
            {/* Visual Frame */}
            <div className="w-full overflow-hidden rounded-3xl border border-border/80 dark:border-white/[0.12] bg-card/50 dark:bg-[#080d1a]/80 p-2.5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
              {/* Top Hairline Specular Reflection */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none z-10" 
              />

              <div 
                style={{ transform: "translateZ(20px)" }}
                className="overflow-hidden rounded-2xl relative group"
              >
                <img
                  src={AboutImage}
                  alt="TechNova team collaborating on digital solutions"
                  loading="eager"
                  className="w-full h-auto max-h-[320px] lg:max-h-[360px] object-cover aspect-[16/11] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 pointer-events-none"
                />
              </div>
            </div>

            {/* 👉 3D Elevated Holographic HUD Pill (translateZ + Counter-Parallax) */}
            <motion.div
              style={{
                transform: "translateZ(55px)",
                x: badgeX,
                y: badgeY,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                hidden sm:flex absolute -bottom-3 -left-3 items-center gap-3.5 px-4 py-2.5 rounded-2xl
                border border-border/90 dark:border-white/[0.16]
                bg-background/95 dark:bg-[#070b14]/90
                backdrop-blur-2xl
                shadow-[0_15px_35px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                z-20 cursor-pointer
              "
            >
              {/* Live Status Beacon */}
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>

              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-foreground leading-tight">
                  Cross-Functional Team
                </span>
                <span className="text-[10px] font-mono text-muted-foreground leading-tight mt-0.5">
                  Designers, Architects & Engineers
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Dialog Portals */}
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <ServicesDialog
        open={servicesDialogOpen}
        onOpenChange={setServicesDialogOpen}
      />
    </Section>
  );
}

export default AboutHeroSection;