import { useState, useRef, lazy, Suspense } from "react";
import {
  ArrowRight,
  FolderKanban,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import HeroIllustration from "../../assets/images/hero-illustration.webp";
import { buttonVariants } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Section } from "@/src/components/layout/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const GetStartedDialog = lazy(() => import("@/src/components/auth/GetStartedDialog.jsx"));
const ServicesDialog = lazy(() => import("@/src/components/auth/ServicesDialog.jsx"));

const STATS = [
  {
    icon: FolderKanban,
    value: "120+",
    label: "Projects Completed",
    subtext: "Delivered on schedule"
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Satisfaction",
    subtext: "From global partners"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Experience",
    subtext: "Industry-proven mastery"
  },
];

// Responsive Magnetic Wrapper
function HeroMagnetic({ children, strength = 0.25 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 15, stiffness: 260, mass: 0.1 });
  const smoothY = useSpring(y, { damping: 15, stiffness: 260, mass: 0.1 });

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
      className="w-full sm:w-auto inline-block"
    >
      {children}
    </motion.div>
  );
}

function HomeHeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

  // 3D Gyroscopic Tilt Calculations for Right Illustration
  const illustrationRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 20 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(smoothTiltY, [-150, 150], [9, -9]);
  const rotateY = useTransform(smoothTiltX, [-150, 150], [-10, 10]);

  const handleIllustrationMove = (e) => {
    if (!illustrationRef.current) return;
    const { left, top, width, height } = illustrationRef.current.getBoundingClientRect();
    tiltX.set(e.clientX - (left + width / 2));
    tiltY.set(e.clientY - (top + height / 2));
  };

  const handleIllustrationLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <Section
      id="hero"
      className="border-b border-border/50 pt-10 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 relative overflow-hidden w-full"
    >
      {/* Background Blueprint Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      <div className="w-full flex flex-col gap-10 lg:gap-12">

        {/* ================= Main Hero Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Typography & Responsive CTAs */}
          <div className="md:col-span-7 flex flex-col items-start text-left w-full">

            {/* Announcement Capsule (Single-Line Fixed No-Wrap Pill) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full border border-border/70 bg-card/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xs max-w-full overflow-x-auto no-scrollbar"
            >
              <Badge variant="brand" className="gap-1 sm:gap-1.5 py-0.5 sm:py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs whitespace-nowrap shrink-0">
                <Sparkles className="w-3 h-3 text-primary animate-pulse" aria-hidden="true" />
                <span>Digital Agency</span>
              </Badge>
              <Badge variant="live" className="py-0.5 sm:py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs whitespace-nowrap shrink-0">
                Accepting New Projects
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/95 dark:to-white/70 leading-[1.15]"
            >
              We Build Digital Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                Inspire.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal"
            >
              TechNova crafts bespoke web applications, high-converting digital products,
              and resilient cloud architecture designed to elevate modern brands above the noise.
            </motion.p>

            {/* Responsive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
            >
              <HeroMagnetic strength={0.3}>
                <button
                  type="button"
                  onClick={() => setDialogOpen(true)}
                  className={buttonVariants({
                    variant: "electric",
                    className: "w-full sm:w-auto h-12 sm:h-13 px-8 text-sm sm:text-base font-semibold justify-center shadow-[0_0_25px_rgba(0,81,251,0.35)] hover:shadow-[0_0_35px_rgba(0,81,251,0.6)] active:scale-95 transition-all cursor-pointer",
                  })}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
                </button>
              </HeroMagnetic>

              <HeroMagnetic strength={0.2}>
                <button
                  type="button"
                  onClick={() => setServicesDialogOpen(true)}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full sm:w-auto h-12 sm:h-13 px-8 text-sm sm:text-base font-medium justify-center cursor-pointer active:scale-95 transition-all border-border/80 dark:border-white/[0.12] hover:border-primary/50",
                  })}
                >
                  <span>Explore Services</span>
                </button>
              </HeroMagnetic>
            </motion.div>

            {/* Trust Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Enterprise Grade</span>
              </Badge>

              <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground">
                <Zap className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Rapid Delivery</span>
              </Badge>

              <Badge variant="outline" className="gap-1.5 px-3 py-1 font-sans text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>100% Code Ownership</span>
              </Badge>
            </motion.div>

          </div>

          {/* Right Column: 3D Antigravity Canvas */}
          <div
            ref={illustrationRef}
            onMouseMove={handleIllustrationMove}
            onMouseLeave={handleIllustrationLeave}
            className="md:col-span-5 relative flex justify-center items-center mt-4 md:mt-0 [perspective:1000px] cursor-grab active:cursor-grabbing"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-none aspect-[4/3] flex justify-center items-center p-2"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-cyan-500/20 to-transparent rounded-3xl blur-3xl pointer-events-none -z-10 scale-95"
              />

              <img
                src={HeroIllustration}
                alt="TechNova digital solutions illustration"
                width="500"
                height="375"
                loading="eager"
                decoding="async"
                className="w-full h-auto max-w-[420px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.3)] select-none pointer-events-none"
              />

              {/* 3D Depth Floating Badge (Top) */}
              <motion.div
                style={{ transform: "translateZ(45px)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-1 -left-2 z-10"
              >
                <Badge variant="live" className="gap-2 px-3.5 py-2 rounded-xl bg-card/85 dark:bg-[#090e18]/85 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] border-border/80">
                  <span className="text-xs font-semibold text-foreground tracking-tight">
                    100% Production Ready
                  </span>
                </Badge>
              </motion.div>

              {/* 3D Depth Floating Badge (Bottom) */}
              <motion.div
                style={{ transform: "translateZ(55px)" }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="hidden sm:flex absolute -bottom-2 -right-1 items-center gap-2.5 px-3.5 py-2 rounded-xl border border-border/80 dark:border-white/10 bg-card/85 dark:bg-[#090e18]/85 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] z-10"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-primary/20 text-primary" aria-hidden="true">
                  <Zap className="w-3 h-3" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-foreground leading-tight">Ultra-Fast</span>
                  <span className="text-[10px] font-mono text-muted-foreground leading-tight">99+ Lighthouse Score</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* ================= Bottom Metrics Proof Bar ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 pt-2">
          {STATS.map(({ icon: Icon, value, label, subtext }) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="
                group relative flex items-center gap-4 p-4 lg:p-5 rounded-2xl
                border border-border/60
                bg-card/40 dark:bg-gradient-to-b dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-xl
                transition-all duration-300 ease-out
                hover:border-primary/50 hover:shadow-[0_12px_32px_-10px_rgba(0,81,251,0.3)]
                cursor-pointer
              "
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
              />

              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 transition-all duration-300 group-hover:scale-115 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(0,81,251,0.6)]">
                <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-tight">
                  {label}
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  {subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Dialog Portals */}
      {dialogOpen && (
        <Suspense fallback={null}>
          <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </Suspense>
      )}
      {servicesDialogOpen && (
        <Suspense fallback={null}>
          <ServicesDialog
            open={servicesDialogOpen}
            onOpenChange={setServicesDialogOpen}
          />
        </Suspense>
      )}
    </Section>
  );
}

export default HomeHeroSection;