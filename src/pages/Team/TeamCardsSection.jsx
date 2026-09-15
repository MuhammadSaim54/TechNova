import React, { useRef } from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

import teamdata from "./teamdata.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// ==========================================
// 1. Pro 3D Kinetic Team Card
// ==========================================
export const TeamCardItem = React.memo(function TeamCardItem({ data, index }) {
  const cardRef = useRef(null);
  const memberIndex = String(index + 1).padStart(2, "0");

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-180, 180], [7, -7]);
  const rotateY = useTransform(smoothX, [-180, 180], [-7, 7]);

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
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1100 }}
      className="w-full max-w-sm h-full"
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
        whileHover={{ y: -5, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="
          group relative flex flex-col justify-between
          w-full h-full min-h-[460px] text-left
          rounded-[26px] p-3.5 sm:p-4
          border border-border/80 dark:border-white/[0.09]
          bg-card/85 dark:bg-[#070b14]/90
          backdrop-blur-2xl
          shadow-[0_12px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.5)]
          hover:border-primary/60 hover:dark:border-cyan-400/40
          hover:shadow-[0_22px_55px_-10px_rgba(0,81,251,0.4)]
          transition-colors duration-300
          overflow-hidden cursor-default
        "
      >
        {/* Specular Laser Rim (Strictly along border) */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-px rounded-[26px] opacity-0
            transition-opacity duration-300 group-hover:opacity-100 z-30
            [background:radial-gradient(300px_circle_at_var(--cursor-x,0px)_var(--cursor-y,0px),rgba(56,189,248,0.6),transparent_65%)]
            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            [mask-composite:exclude]
          "
        />

        {/* Top Edge Specular Hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        />

        <div>
          {/* Member Portrait Shell (Isolated from mouse spotlight glare) */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="
              relative z-20 w-full aspect-[4/5] overflow-hidden rounded-[18px] 
              bg-[#03060d] border border-border/80 dark:border-white/[0.1] 
              shadow-inner isolate
            "
          >
            {/* Holographic Member HUD Beacon */}
            <div
              style={{ transform: "translateZ(35px)" }}
              className="absolute top-3 right-3 z-30 pointer-events-none"
            >
              <Badge
                variant="outline"
                className="
                  px-2.5 py-1 rounded-lg 
                  bg-[#050811]/90 dark:bg-[#070b14]/90 
                  backdrop-blur-xl border border-white/[0.14] 
                  text-[10px] font-mono font-bold text-muted-foreground 
                  shadow-md
                "
              >
                MEMBER // {memberIndex}
              </Badge>
            </div>

            {/* Crystal-Clear Portrait Image */}
            <img
              src={data.img}
              alt={`${data.name} profile`}
              loading="lazy"
              className="
                relative z-10 w-full h-full object-cover object-center 
                transition-transform duration-700 ease-out group-hover:scale-105 
                select-none
              "
            />

            {/* Subtle Gradient Shadow at bottom for contrast */}
            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 bottom-0 h-20 
                bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                opacity-80 pointer-events-none z-20
              "
            />
          </div>

          {/* Profile Details (translateZ) */}
          <div style={{ transform: "translateZ(20px)" }} className="relative z-20 pt-4 pb-2 px-1 flex flex-col items-start text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300">
              {data.name}
            </h3>

            <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
              {data.role}
            </p>
          </div>
        </div>

        {/* Social Link Action Bar */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="relative z-20 pt-3 px-1 pb-1 border-t border-border/60 dark:border-white/[0.08] flex items-center justify-between w-full"
        >
          <span className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider font-mono">
            Connect
          </span>

          <div className="flex items-center gap-2">
            <a
              href={data.socials?.facebook || "#"}
              aria-label={`${data.name} Facebook`}
              className="
                flex items-center justify-center
                w-8 h-8 rounded-full
                border border-border/70 dark:border-white/[0.12]
                bg-muted/40 dark:bg-white/[0.04]
                text-muted-foreground
                transition-all duration-300 ease-out
                hover:!border-primary hover:!bg-primary hover:!text-white
                hover:scale-115 hover:shadow-[0_0_15px_rgba(0,81,251,0.6)]
              "
            >
              <FaFacebook className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={data.socials?.github || "#"}
              aria-label={`${data.name} GitHub`}
              className="
                flex items-center justify-center
                w-8 h-8 rounded-full
                border border-border/70 dark:border-white/[0.12]
                bg-muted/40 dark:bg-white/[0.04]
                text-muted-foreground
                transition-all duration-300 ease-out
                hover:!border-primary hover:!bg-primary hover:!text-white
                hover:scale-115 hover:shadow-[0_0_15px_rgba(0,81,251,0.6)]
              "
            >
              <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={data.socials?.twitter || "#"}
              aria-label={`${data.name} X`}
              className="
                flex items-center justify-center
                w-8 h-8 rounded-full
                border border-border/70 dark:border-white/[0.12]
                bg-muted/40 dark:bg-white/[0.04]
                text-muted-foreground
                transition-all duration-300 ease-out
                hover:!border-primary hover:!bg-primary hover:!text-white
                hover:scale-115 hover:shadow-[0_0_15px_rgba(0,81,251,0.6)]
              "
            >
              <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// ==========================================
// 2. Main Section
// ==========================================
function TeamCardsSection() {
  return (
    <Section 
      id="team-cards" 
      className="py-14 sm:py-18 md:py-24 relative overflow-hidden w-full flex flex-col items-center"
    >
      {/* Blueprint Grid Texture */}
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

      {/* Atmospheric Core Ambient Radiance */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[750px] h-[340px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Centered Responsive Showcase Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 justify-items-center">
        {teamdata.map((data, index) => (
          <TeamCardItem 
            key={data.id || index} 
            data={data} 
            index={index} 
          />
        ))}
      </div>
    </Section>
  );
}

export default TeamCardsSection;