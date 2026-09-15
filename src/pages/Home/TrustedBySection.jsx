import { Section } from "@/src/components/layout/Section";
import { motion } from "framer-motion";

// ==========================================
// Razor-Sharp Inline Vector Monograms
// ==========================================
const TECH_LOGOS_ROW_1 = [
  {
    name: "Linear",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 100 100" fill="currentColor">
        <path d="M1.22 65.17a48.88 48.88 0 0 1 33.61-63.95A48.88 48.88 0 0 1 98.78 34.83a48.88 48.88 0 0 1-33.61 63.95A48.88 48.88 0 0 1 1.22 65.17Zm12.3-9.5a36.66 36.66 0 0 0 25.21 47.96 36.66 36.66 0 0 0 47.96-25.21L13.52 55.67Zm72.96-11.34a36.66 36.66 0 0 0-25.21-47.96 36.66 36.66 0 0 0-47.96 25.21l73.17 22.75Z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 9.5a5.75 5.75 0 0 0-.49-4.75 5.92 5.92 0 0 0-5.83-2.85A5.82 5.82 0 0 0 11.5 0a5.88 5.88 0 0 0-5.59 4.02 5.82 5.82 0 0 0-3.95 2.87 5.9 5.9 0 0 0 .74 6.45 5.75 5.75 0 0 0 .49 4.75 5.92 5.92 0 0 0 5.83 2.85A5.82 5.82 0 0 0 13.5 24a5.88 5.88 0 0 0 5.59-4.02 5.82 5.82 0 0 0 3.95-2.87 5.9 5.9 0 0 0-.76-6.61ZM13.5 22.25a4.07 4.07 0 0 1-2.92-1.25l.13-.07 4.88-2.82a.88.88 0 0 0 .44-.76v-6.9l2.08 1.2a.08.08 0 0 1 .04.07v5.7a4.09 4.09 0 0 1-4.65 4.83Zm-8.4-4.88a4.11 4.11 0 0 1-.54-3.13l.13.08 4.88 2.82a.86.86 0 0 0 .88 0l5.97-3.45v2.4a.08.08 0 0 1-.04.07l-4.94 2.85a4.09 4.09 0 0 1-6.38-1.64ZM3.4 8.78a4.09 4.09 0 0 1 2.38-1.88v5.8a.86.86 0 0 0 .44.75l5.97 3.45-2.08 1.2a.08.08 0 0 1-.08 0l-4.94-2.85A4.09 4.09 0 0 1 3.4 8.78Zm14.28 2.44-5.97-3.45 2.08-1.2a.08.08 0 0 1 .08 0l4.94 2.85a4.09 4.09 0 0 1-1.13 7.2v-5.4Z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg className="w-auto h-5 sm:h-6" viewBox="0 0 1155 1000" fill="currentColor">
        <path d="m577.3 0 577.4 1000H0z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 60 25" fill="currentColor">
        <path d="M59.64 14.28c0-4.52-2.19-8.08-6.39-8.08-4.22 0-6.79 3.56-6.79 8.04 0 5.3 2.99 7.96 7.37 7.96 2.14 0 3.75-.48 4.97-1.17v-3.41c-1.22.61-2.58.94-4.14.94-1.66 0-3.08-.61-3.28-2.43h8.21c.02-.32.05-1.39.05-1.85zm-8.28-1.6c.07-1.55.97-2.26 2.21-2.26 1.2 0 2.1.71 2.17 2.26h-4.38zm-11.83 9.4c1.24 0 2.24-.26 2.89-.66v-3.41c-.65.41-1.5.64-2.5.64-2 0-2.83-.99-2.83-3.27V9.75h4.15V6.44h-4.15V1.7l-4.83 1.03v3.71h-2.31v3.31h2.31v6.92c0 3.49 1.83 5.41 5.27 5.41zM28.09 4.97c-1.57 0-2.61.73-3.16 1.27V.24l-4.85 1.03v20.65h4.85v-9.67c0-2.45 1.29-3.79 3.09-3.79.46 0 .86.05 1.15.13V5.12c-.37-.1-.77-.15-1.08-.15zm-14.77 1.3c-1.29-.53-2.92-.85-4.48-.85-3.32 0-5.54 1.73-5.54 4.63 0 4.54 6.24 3.81 6.24 5.76 0 .77-.67 1.03-1.6 1.03-1.42 0-3.24-.59-4.69-1.39v3.66c1.57.68 3.19.99 4.69.99 3.43 0 5.76-1.7 5.76-4.66 0-4.89-6.26-4.04-6.26-5.87 0-.64.54-.95 1.44-.95 1.24 0 2.76.43 3.93 1.04l.51-3.39z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 109 113" fill="currentColor">
        <path d="M63.7 110.3c-2.7 3.5-8.2 1.6-8.2-2.8V69.7H8.8c-4.4 0-6.8-5.2-3.8-8.4l49.7-53c2.7-3.5 8.2-1.6 8.2 2.8v37.8h46.7c4.4 0 6.8 5.2 3.8 8.4l-49.7 53Z" />
      </svg>
    ),
  },
  {
    name: "Raycast",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.92 10.65 19.46 8.1a4.2 4.2 0 0 0-5.94-5.94L11 4.62l5.92 6.03ZM7.54 8.08 2.16 13.46a4.2 4.2 0 0 0 5.94 5.94l5.38-5.38L7.54 8.08Zm2.9 6.96 5.48 5.48a4.2 4.2 0 0 0 5.94-5.94l-5.48-5.48-5.94 5.94Z" />
      </svg>
    ),
  },
];

const TECH_LOGOS_ROW_2 = [
  {
    name: "GitHub",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 11.1h-2.12V8.98h2.12v2.12zm-2.65 0H9.21V8.98h2.12v2.12zm-2.65 0H6.56V8.98h2.12v2.12zm5.3 0h2.12V8.98h-2.12v2.12zm-5.3-2.65H6.56V6.33h2.12v2.12zm2.65 0H9.21V6.33h2.12v2.12zm2.65 0h-2.12V6.33h2.12v2.12zm5.82 2.73c-.34-.23-1.09-.34-1.74-.08-.19-.88-.73-1.39-1.43-1.77l-.46-.24-.29.43c-.42.63-.55 1.48-.44 2.21-.49.27-1.32.32-1.46.32H1.54c-.38 0-.69.31-.69.69 0 1.63.4 3.23 1.15 4.61 1.06 1.95 2.79 3.21 4.88 3.56.57.1 1.15.14 1.73.14 5.37 0 9.77-3.34 11.23-8.31.84.07 1.76-.08 2.28-.68.22-.26.33-.59.33-.94-.01-.43-.19-.77-.47-.94z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.25 0h-6.5a4.75 4.75 0 0 0 0 9.5h6.5A4.75 4.75 0 0 0 15.25 0ZM8.75 9.5a4.75 4.75 0 1 0 0 9.5h3.25V9.5H8.75ZM15.25 9.5H12v9.5h3.25a4.75 4.75 0 1 0 0-9.5ZM8.75 19a4.75 4.75 0 0 0 4.75 4.75c2.62 0 4.75-2.13 4.75-4.75v-4.75H8.75Z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.41 12.65a5.53 5.53 0 0 0-4.9-3.7 6.47 6.47 0 0 0-6.17 4.54 3.73 3.73 0 0 0-3.69 3.73c0 .17.02.34.05.51A.78.78 0 0 0 5.48 18.4h13.91a.78.78 0 0 0 .78-.71 4.7 4.7 0 0 0-.76-5.04z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="m11.83 1.09-8.77 15.2 7.02 6.62 10.86-9.14L11.83 1.09zm.4 3.32 6.2 8.65-6.85 5.76-4.6-4.34 5.25-10.07z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg className="w-auto h-6 sm:h-7" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" data-fill="true" fill="currentColor" r="90" />
          <path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.134 149.508 157.438Z" fill="#000" />
          <rect fill="#000" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
];

// Reusable Pure Agency Marquee Track
function PureMarqueeTrack({ items, reverse = false, speed = 32 }) {
  // Quadrupled for seamless infinite screen coverage
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden select-none py-1.5 group/track">
      <motion.div
        className="flex items-center gap-14 sm:gap-20 lg:gap-28 shrink-0 pr-14 sm:pr-20 lg:pr-28"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="group/logo relative flex items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-110"
          >
            {/* Cyber Radial Light Explosion Behind Logo on Hover */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0 -inset-x-10 -inset-y-6
                bg-[radial-gradient(ellipse_at_center,rgba(0,81,251,0.5)_0%,rgba(6,182,212,0.3)_40%,transparent_75%)]
                blur-2xl opacity-0 group-hover/logo:opacity-100
                transition-all duration-500 ease-out pointer-events-none scale-50 group-hover/logo:scale-130
              "
            />

            {/* Specular Cyan Ambient Spark */}
            <div
              aria-hidden="true"
              className="
                absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full 
                bg-cyan-400 blur-sm opacity-0 group-hover/logo:opacity-90 
                transition-opacity duration-300 pointer-events-none
              "
            />

            {/* Monochromatic SVG Icon */}
            <div
              className="
                relative z-10 text-foreground/40 dark:text-white/35
                transition-all duration-500 ease-out
                group-hover/logo:text-foreground dark:group-hover/logo:text-white
                group-hover/logo:drop-shadow-[0_0_18px_rgba(56,189,248,0.85)]
              "
            >
              {brand.svg}
            </div>

            {/* Brand Title (Minimalist Typography) */}
            <span
              className="
                relative z-10 font-sans text-sm sm:text-base font-bold tracking-tight
                text-foreground/40 dark:text-white/35
                transition-all duration-500 ease-out
                group-hover/logo:text-foreground dark:group-hover/logo:text-white
              "
            >
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TrustedBySection() {
  return (
    <Section
      id="trusted-by"
      className="py-16 md:py-24 border-b border-border/40 relative overflow-hidden w-full bg-card/10 dark:bg-black/20"
    >
      {/* Perspective Micro-Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:2.5rem_2.5rem] 
          [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_50%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      <div className="flex flex-col items-center gap-12 sm:gap-14">

        {/* Minimalist Agency Header */}
        <div className="flex flex-col items-center gap-3 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-primary uppercase shadow-[0_0_15px_rgba(0,81,251,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Infrastructure Standards
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground/90">
            Engineered Alongside World-Class Toolchains
          </h3>
        </div>

        {/* Dual-Direction Kinetic Ribbon */}
        <div className="relative w-full overflow-hidden flex flex-col gap-9 sm:gap-12 [mask-image:linear-gradient(to_right,transparent,black_16%,black_84%,transparent)]">
          
          {/* Deep Vignette Edge Blends */}
          <div
            aria-hidden="true"
            className="absolute left-0 inset-y-0 w-28 sm:w-52 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 inset-y-0 w-28 sm:w-52 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none"
          />

          {/* Row 1: Leftward Velocity */}
          <PureMarqueeTrack items={TECH_LOGOS_ROW_1} reverse={false} speed={30} />

          {/* Row 2: Rightward Counter-Balance */}
          <PureMarqueeTrack items={TECH_LOGOS_ROW_2} reverse={true} speed={34} />

        </div>

      </div>
    </Section>
  );
}

export default TrustedBySection;