import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Send,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

import FooterData from "./FooterData";
import Logo from "./TechNova-Logo.png";
import { useTheme } from "../../context/ThemeContext";
import { Badge } from "@/src/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ==========================================
// Micro Magnetic Pull for Footer Socials
// ==========================================
function MagneticSocial({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 14, stiffness: 280, mass: 0.1 });
  const smoothY = useSpring(y, { damping: 14, stiffness: 280, mass: 0.1 });

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
    >
      {children}
    </motion.div>
  );
}

// Orchestrated Viewport Container Variants
const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const footerChildVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const smoothWatermarkX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const watermarkTranslate = useTransform(smoothWatermarkX, [-500, 500], [-25, 25]);

  const handleFooterMouseMove = (e) => {
    if (!footerRef.current) return;
    const { left, width } = footerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (left + width / 2));
  };

  const isDark = theme === "dark";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid work email.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);

    toast.success("Subscribed to TechNova Architecture Briefs.");
    setEmail("");
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleFooterMouseMove}
      aria-label="Site Footer" 
      className="relative w-full border-t border-border/80 dark:border-white/[0.08] bg-background/95 dark:bg-[#070b14] backdrop-blur-3xl overflow-hidden transition-colors duration-300"
    >
      {/* Top Hairline Specular Laser Reflection */}
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 dark:via-cyan-400/50 to-transparent pointer-events-none z-20" 
        aria-hidden="true" 
      />

      {/* Blueprint Grid Texture for Both Themes */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3rem_3rem] 
          [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Rhythmic Breathing Ambient Glow Core */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] sm:w-[750px] h-[280px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* ================= Main Content Container ================= */}
      <motion.div 
        variants={footerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 z-10"
      >

        {/* Top Intelligence & Newsletter Header */}
        <motion.div 
          variants={footerChildVariants}
          className="pb-14 mb-14 border-b border-border/70 dark:border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between"
        >
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="brand" className="gap-1.5 px-3 py-1 text-[11px] shadow-[0_0_12px_rgba(0,81,251,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
              <span>Intelligence Dispatches</span>
            </Badge>

            <h3 id="newsletter-heading" className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground dark:text-white leading-tight">
              Subscribe to Architecture & Product Briefs
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed font-normal">
              Curated breakdowns on enterprise system designs, modern frontend engineering, and high-converting UX principles. Zero marketing noise.
            </p>
          </div>

          {/* Interactive Subscribe Console */}
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubscribe} aria-labelledby="newsletter-heading" className="relative flex items-center w-full max-w-md lg:ml-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Work Email Address
              </label>
              
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="work@enterprise.com"
                className={`
                  w-full h-12 pl-4 pr-34 rounded-xl text-sm font-sans outline-none transition-all duration-200
                  bg-muted/40 dark:bg-[#050811] 
                  text-foreground dark:text-white 
                  placeholder:text-muted-foreground/40
                  border
                  ${isFocused 
                    ? "border-primary dark:border-cyan-400 shadow-[0_0_18px_rgba(0,81,251,0.25)] dark:shadow-[0_0_18px_rgba(56,189,248,0.3)] ring-1 ring-primary/40 dark:ring-cyan-400/50" 
                    : "border-border/80 dark:border-white/[0.08] hover:border-border dark:hover:border-white/[0.18]"
                  }
                `}
              />

              {/* Kinetic Subscribe Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
                className="
                  group absolute right-1.5 h-9 px-4 rounded-lg
                  bg-gradient-to-r from-blue-600 to-primary
                  text-white text-xs font-semibold tracking-wide
                  shadow-md shadow-primary/25 hover:shadow-primary/45
                  flex items-center gap-2 transition-all duration-200
                  hover:opacity-95 active:scale-95 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  overflow-hidden
                "
              >
                {/* Specular Sweep Shimmer */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-full top-0 w-1/2 h-full
                    bg-gradient-to-r from-transparent via-white/35 to-transparent
                    -skew-x-12 opacity-0 group-hover:opacity-100
                    group-hover:animate-[shimmer_1.2s_infinite]
                    pointer-events-none
                  "
                />

                <span>{isSubmitting ? "Syncing..." : "Subscribe"}</span>

                {/* Double Arrow Flying Jet */}
                <div className="relative overflow-hidden w-3.5 h-3.5 flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" aria-hidden="true" />
                  <Send className="w-3.5 h-3.5 absolute transition-transform duration-300 ease-out -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-white" aria-hidden="true" />
                </div>
              </button>
            </form>

            <div className="mt-2.5 flex items-center gap-3 text-[11px] font-mono text-muted-foreground lg:justify-end">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                Confidentiality Guaranteed
              </span>
              <span aria-hidden="true">•</span>
              <span>Bi-weekly Delivery</span>
            </div>
          </div>
        </motion.div>

        {/* 4-Column Structured Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 text-left">

          {/* Brand & Corporate Overview (5 Columns) */}
          <motion.div variants={footerChildVariants} className="md:col-span-5 flex flex-col items-start">
            <NavLink
              to="/"
              aria-label="TechNova Homepage"
              className="inline-flex mb-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <img
                src={Logo}
                alt="TechNova Logo"
                width="180"
                height="50"
                loading="lazy"
                className={`
                  h-14 sm:h-16 md:h-18
                  w-auto object-contain
                  transition-all duration-300
                  ${isDark ? "brightness-0 invert opacity-95" : "opacity-90"}
                `}
              />
            </NavLink>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm font-normal">
              TechNova is an engineering studio dedicated to crafting digital infrastructure, high-fidelity user experiences, and scalable web software for visionary brands worldwide.
            </p>

            {/* Live Operational Status Telemetry Box with Radar Beacon */}
            <div
              role="status"
              aria-live="polite"
              className="mt-6 flex flex-col gap-2 p-3.5 rounded-2xl border border-border/80 dark:border-white/[0.1] bg-card/60 dark:bg-white/[0.02] backdrop-blur-xl w-full max-w-xs shadow-xs"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-muted-foreground uppercase tracking-wider">Network Status</span>
                </div>
                <Badge variant="live" className="px-2 py-0.5 text-[10px]">
                  All Systems Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/80 pt-1.5 border-t border-border/60 dark:border-white/[0.06]">
                <span>Latency: 24ms</span>
                <span>Uptime: 99.98%</span>
                <span>v2.4.0</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Navigation Links (2 Columns) */}
          <motion.nav variants={footerChildVariants} aria-label="Footer Quick Links" className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-cyan-400 mb-5">
              // Navigation
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none text-xs sm:text-sm font-medium">
              {FooterData.quickLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary dark:text-cyan-400" aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Column 3: Capabilities (2 Columns) */}
          <motion.section variants={footerChildVariants} aria-label="Footer Capabilities" className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-cyan-400 mb-5">
              // Capabilities
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none text-xs sm:text-sm font-medium">
              {FooterData.services.map((service) => (
                <li key={service.id}>
                  <span className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200 cursor-pointer">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Column 4: Transmission / Coordinates (3 Columns) */}
          <motion.section variants={footerChildVariants} aria-label="Footer Contact Coordinates" className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-cyan-400 mb-5">
              // Transmission
            </h4>
            <ul className="space-y-4 p-0 m-0 list-none text-xs sm:text-sm">
              {FooterData.contact.map((item) => (
                <li key={item.id} className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground dark:text-white mt-0.5">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

        </div>

        {/* ================= Bottom Sub-Footer ================= */}
        <div className="w-full h-px mt-16 mb-8 bg-border/70 dark:border-white/[0.08]" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-muted-foreground">
            <p>© 2026 TechNova Engineering Collective.</p>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors">Security</a>
            </div>
          </div>

          {/* Magnetic Kinetic Social Chips */}
          <div className="flex items-center gap-2">
            {FooterData.socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <MagneticSocial key={social.id} strength={0.35}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title || "Social channel"} (opens in new tab)`}
                    className="
                      flex items-center justify-center
                      w-8.5 h-8.5 rounded-xl
                      border border-border/80 dark:border-white/10
                      bg-muted/40 dark:bg-white/[0.03]
                      text-muted-foreground
                      transition-all duration-200 ease-out
                      hover:border-primary hover:!bg-primary hover:text-white
                      hover:scale-110 hover:shadow-[0_0_15px_rgba(0,81,251,0.55)]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    "
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </MagneticSocial>
              );
            })}
          </div>

        </div>

      </motion.div>

      {/* Giant Parallax Floating Watermark */}
      <motion.div
        style={{ x: watermarkTranslate }}
        aria-hidden="true"
        className="
          absolute -bottom-10 left-1/2 -translate-x-1/2 
          text-[13vw] font-black tracking-tighter uppercase 
          select-none pointer-events-none -z-10 whitespace-nowrap
          text-foreground/[0.03] dark:text-white/[0.025]
        "
      >
        TECHNOVA
      </motion.div>
    </footer>
  );
}

export default Footer;