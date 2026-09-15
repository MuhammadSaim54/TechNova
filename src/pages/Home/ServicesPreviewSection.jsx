import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServicesData from "./ServicesData.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MotionNavLink = motion.create(NavLink);

const DEFAULT_TAGS = {
  "Web Development": ["Next.js", "React", "Scalable APIs"],
  "UI/UX Design": ["Figma Systems", "Wireframing", "Prototypes"],
  "Digital Marketing": ["Growth SEO", "Paid Media", "Analytics"],
};

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
    },
  },
};

// ==========================================
// Magnetic Wrapper for Interactive Elements
// ==========================================
function MagneticPull({ children, strength = 0.3, className = "" }) {
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
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// Interactive 3D Spotlight Service Card
// ==========================================
function ServiceSpotlightCard({ service, index, tags, serviceIndex }) {
  const cardRef = useRef(null);
  const Icon = service.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(smoothMouseY, [-150, 150], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-150, 150], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x - width / 2);
    mouseY.set(y - height / 2);

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full">
      <MotionNavLink
        ref={cardRef}
        to={service.path || "/services"}
        variants={cardVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="
          group relative flex flex-col justify-between
          w-full min-h-[380px] text-left
          rounded-3xl p-7 sm:p-9
          border border-border/70 dark:border-white/[0.08]
          bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
          backdrop-blur-2xl
          shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_35px_rgb(0,0,0,0.25)]
          hover:border-primary/60
          hover:shadow-[0_20px_45px_-10px_rgba(0,81,251,0.35)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          overflow-hidden cursor-pointer
        "
      >
        {/* Dynamic Cursor Spotlight Layer */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-px rounded-3xl opacity-0 
            transition-opacity duration-300 group-hover:opacity-100 -z-10
            bg-[radial-gradient(450px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(0,81,251,0.18),transparent_70%)]
          "
        />

        {/* Outer Specular Edge Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-px rounded-3xl opacity-0 
            transition-opacity duration-300 group-hover:opacity-100 z-10
            [background:radial-gradient(350px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.45),transparent_65%)]
            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            [mask-composite:exclude]
          "
        />

        <div>
          {/* Header: Icon + Monospace Service Index */}
          <div className="flex items-center justify-between w-full">
            <div
              aria-hidden="true"
              className="
                relative flex items-center justify-center w-13 h-13 rounded-2xl 
                bg-primary/10 border border-primary/25 text-primary 
                transition-all duration-300 
                group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground 
                group-hover:border-primary group-hover:shadow-[0_0_24px_rgba(0,81,251,0.6)]
              "
            >
              <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.8} />
            </div>

            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground/60 uppercase group-hover:text-primary transition-colors">
              {serviceIndex}
            </span>
          </div>

          {/* Title & Description */}
          <div className="mt-7">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              {service.title}
            </h3>

            <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Capability Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-3 py-1 text-xs font-sans font-medium rounded-lg border-border/70 group-hover:border-primary/40 group-hover:text-foreground transition-all duration-200 bg-background/40"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-8 pt-5 border-t border-border/60 dark:border-white/[0.06] flex items-center justify-between">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-1.5">
            Explore Capabilities
          </span>

          {/* 👉 PRO KINETIC CIRCULAR ARROW (Infinite Flight + Aurora Flare) */}
          <div className="relative">
            {/* Liquid Background Flare */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125 pointer-events-none"
            />

            <div
              aria-hidden="true"
              className="
                relative overflow-hidden
                w-10 h-10 rounded-full 
                border border-border/80 dark:border-white/[0.14] 
                bg-muted/40 dark:bg-white/[0.05] 
                flex items-center justify-center 
                text-foreground/80 dark:text-white/80
                transition-all duration-300 ease-out
                group-hover:border-primary 
                group-hover:bg-primary 
                group-hover:text-white
                group-hover:scale-110 
                group-hover:shadow-[0_0_20px_rgba(0,81,251,0.6)]
              "
            >
              {/* Primary Arrow (Slides Out Up-Right) */}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />

              {/* Duplicate Cloned Arrow (Slides In From Bottom-Left) */}
              <ArrowUpRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 text-white" />
            </div>
          </div>

        </div>
      </MotionNavLink>
    </div>
  );
}

// ==========================================
// Main Section
// ==========================================
function ServicesPreviewSection() {
  const previewServices = ServicesData.slice(0, 3);

  return (
    <Section
      id="services-preview"
      className="py-16 md:py-24 border-b border-border/40 relative overflow-hidden w-full"
    >
      {/* Background Accent Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Atmospheric Central Radiance */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] md:w-[700px] h-[320px] bg-primary/[0.09] rounded-full blur-[110px] pointer-events-none -z-10"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        <Badge variant="brand" className="px-3.5 py-1 text-xs gap-1.5 shadow-[0_0_15px_rgba(0,81,251,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Engineered Capabilities
        </Badge>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Services That Drive <span className="text-primary">Results</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          We provide a comprehensive suite of digital solutions engineered to help
          your business accelerate growth, streamline operations, and engage the right audience.
        </p>
      </motion.div>

      {/* Interactive Bento Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 sm:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {previewServices.map((service, index) => {
          const tags =
            service.tags ||
            DEFAULT_TAGS[service.title] || ["Enterprise", "High Impact"];
          const serviceIndex = String(index + 1).padStart(2, "0");

          return (
            <ServiceSpotlightCard
              key={service.id || index}
              service={service}
              index={index}
              tags={tags}
              serviceIndex={serviceIndex}
            />
          );
        })}
      </motion.div>

      {/* 👉 PRO MAGNETIC "VIEW ALL SERVICES" CTA WITH CYBER SHIMMER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-14 sm:mt-20 flex justify-center"
      >
        <MagneticPull strength={0.35}>
          <NavLink
            to="/services"
            className="
              group relative inline-flex items-center gap-3
              px-8 py-4 rounded-full
              border border-border/80 dark:border-white/[0.12]
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
            {/* Internal Hover Gradient Expansion */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />

            {/* Specular Liquid Shimmer Reflection Line */}
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

            <span>View All Services</span>

            {/* Arrow Snap Interaction */}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
          </NavLink>
        </MagneticPull>
      </motion.div>
    </Section>
  );
}

export default ServicesPreviewSection;