import React, { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";
import BlogData from "./BlogData.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const DEFAULT_TAGS = ["Engineering", "Product Design", "Growth Strategy"];

// ==========================================
// 1. Pro 3D Kinetic Blog Article Card
// ==========================================
export const BlogCardItem = React.memo(function BlogCardItem({ data, index }) {
  const cardRef = useRef(null);
  const category = data.category || DEFAULT_TAGS[index % DEFAULT_TAGS.length];
  const readTime = data.readTime || "4 min read";

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-180, 180], [6, -6]);
  const rotateY = useTransform(smoothX, [-180, 180], [-6, 6]);

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
    <motion.article
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1100 }}
      className="w-full max-w-md lg:max-w-none h-full"
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
          overflow-hidden cursor-pointer
        "
      >
        {/* Specular Laser Rim (Strictly on borders via mask) */}
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
          {/* Media Container (Isolated from mouse cursor glare) */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="
              relative z-20 w-full aspect-[16/10] overflow-hidden rounded-[18px] 
              bg-[#03060d] border border-border/80 dark:border-white/[0.1] 
              shadow-inner isolate
            "
          >
            {/* Category Pill Tag (Elevated Z-space) */}
            <div
              style={{ transform: "translateZ(35px)" }}
              className="absolute top-3 left-3 z-30 pointer-events-none"
            >
              <Badge 
                variant="brand" 
                className="
                  px-2.5 py-1 text-[11px] font-semibold tracking-normal rounded-lg 
                  bg-[#050811]/90 dark:bg-[#070b14]/90 backdrop-blur-xl 
                  border border-white/[0.14] shadow-md
                "
              >
                {category}
              </Badge>
            </div>

            {/* Read Time Tag (Elevated Z-space) */}
            <div
              style={{ transform: "translateZ(35px)" }}
              className="absolute top-3 right-3 z-30 pointer-events-none"
            >
              <Badge 
                variant="outline" 
                className="
                  gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-normal rounded-lg 
                  bg-[#050811]/90 dark:bg-[#070b14]/90 backdrop-blur-xl 
                  border border-white/[0.14] text-muted-foreground shadow-md
                "
              >
                <Clock className="w-3 h-3 text-primary animate-pulse" aria-hidden="true" />
                <span>{readTime}</span>
              </Badge>
            </div>

            {/* Crystal-Clear Cover Image */}
            <img
              src={data.img}
              alt={`${data.title} blog cover`}
              loading="lazy"
              className="
                relative z-10 w-full h-full object-cover object-center 
                transition-transform duration-700 ease-out group-hover:scale-105 
                select-none
              "
            />

            {/* Bottom Subtle Contrast Vignette */}
            <div 
              aria-hidden="true" 
              className="
                absolute inset-x-0 bottom-0 h-16 
                bg-gradient-to-t from-black/50 via-transparent to-transparent 
                opacity-70 pointer-events-none z-20
              " 
            />
          </div>

          {/* Article Content */}
          <div style={{ transform: "translateZ(20px)" }} className="relative z-20 pt-4 pb-2 px-1 flex flex-col items-start text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary dark:group-hover:text-cyan-300 line-clamp-2">
              {data.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 font-normal">
              {data.description}
            </p>
          </div>
        </div>

        {/* Action Footer: Guaranteed Electric Blue Pop + Flythrough Arrow */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="relative z-20 pt-4 px-1 pb-1 border-t border-border/60 dark:border-white/[0.08] flex items-center justify-between w-full"
        >
          <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            Read Full Article
          </span>

          <div className="relative">
            {/* Neon Glow on Hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125 pointer-events-none"
            />

            <div 
              aria-hidden="true" 
              className="
                relative overflow-hidden
                flex items-center justify-center 
                w-9 h-9 rounded-full 
                border border-border/70 dark:border-white/[0.12] 
                bg-muted/40 dark:bg-white/[0.04] 
                text-foreground/70 dark:text-white/70 
                transition-all duration-300 ease-out 
                group-hover:!border-primary group-hover:dark:!border-primary 
                group-hover:!bg-primary group-hover:dark:!bg-primary 
                group-hover:!text-white group-hover:dark:!text-white 
                group-hover:scale-115 
                group-hover:shadow-[0_0_20px_rgba(0,81,251,0.7)]
              "
            >
              {/* Arrow 1: Flies out Right */}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-6 shrink-0" />

              {/* Arrow 2: Flies in from Left */}
              <ArrowRight className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-6 group-hover:translate-x-0 text-white shrink-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
});

// ==========================================
// 2. Main Section
// ==========================================
function BlogCards() {
  return (
    <Section 
      id="blog-cards" 
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

      {/* Atmospheric Central Radiance */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[750px] h-[340px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Responsive Editorial Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 justify-items-center">
        {BlogData.map((data, index) => (
          <BlogCardItem 
            key={data.id || index} 
            data={data} 
            index={index} 
          />
        ))}
      </div>
    </Section>
  );
}

export default BlogCards;