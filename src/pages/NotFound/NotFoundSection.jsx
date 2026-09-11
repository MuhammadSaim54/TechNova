import { ArrowRight, Compass, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Astronaut from "./Astronaut.png";
import BackgroundWave from "./BackgroundWave.webp";

function NotFoundSection() {
  return (
    <section
      id="not-found"
      className="relative w-full h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 px-4 sm:px-6 select-none"
    >
      {/* ================= Atmospheric Background Layers ================= */}

      {/* Blueprint Grid Accent */}
      <div 
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] 
          bg-[size:3.5rem_3.5rem] 
          opacity-[0.025] dark:opacity-[0.045]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        " 
      />

      {/* Ambient Lighting Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] h-[250px] bg-primary/15 dark:bg-primary/[0.12] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[220px] h-[220px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* ================= Core Content Console (Fitted Vertically) ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto">
        
        {/* Eyebrow Error Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 dark:border-white/10 bg-card/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-xs mb-2">
          <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-primary/15 text-primary">
            <Compass className="w-2.5 h-2.5 animate-spin-slow" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
            Telemetry Error // 404
          </span>
          <span className="h-2.5 w-px bg-border/80" />
          <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground">
            Coordinates Lost
          </span>
        </div>

        {/* Specular 404 Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-primary to-blue-600 dark:from-white dark:via-blue-300 dark:to-primary leading-none drop-shadow-[0_8px_30px_rgba(0,81,251,0.25)]">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Lost in Digital Space.
        </h2>

        {/* Concise Description */}
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          The requested coordinate does not exist or has been relocated to another cluster.
        </p>

        {/* Floating Astronaut Asset */}
        <div className="relative my-3 sm:my-4 max-w-[130px] sm:max-w-[160px] md:max-w-[180px] flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10 scale-90" />
          <img
            src={Astronaut}
            alt="Astronaut floating in deep space"
            loading="lazy"
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] animate-[bounce_5s_ease-in-out_infinite]"
          />
        </div>

        {/* Dual CTA Action Cluster */}
        <div className="flex flex-row items-center gap-3">
          <Link
            to="/"
            className="
              group relative flex items-center justify-center gap-2
              h-10 sm:h-11 px-6 rounded-xl
              bg-gradient-to-r from-blue-600 via-primary to-indigo-600
              text-white text-xs sm:text-sm font-bold tracking-wide
              shadow-[0_4px_20px_rgba(0,81,251,0.35)]
              hover:shadow-[0_6px_25px_rgba(0,81,251,0.5)]
              hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-200
              overflow-hidden
            "
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/35 pointer-events-none" />
            <Home className="w-3.5 h-3.5" />
            <span>Return to Orbit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/contact"
            className="
              flex items-center justify-center gap-2
              h-10 sm:h-11 px-5 rounded-xl
              border border-border/80 dark:border-white/10
              bg-card/60 dark:bg-white/[0.04]
              hover:bg-muted/60 dark:hover:bg-white/[0.08]
              hover:border-primary/50
              text-foreground text-xs sm:text-sm font-semibold
              backdrop-blur-xl transition-all duration-200
            "
          >
            <Mail className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Signal Support</span>
          </Link>
        </div>

      </div>

      {/* ================= Pinned Bottom Wave Decoration ================= */}
      {BackgroundWave && (
        <div className="relative w-full pointer-events-none select-none z-0 opacity-35 dark:opacity-20 contrast-125 -mb-2">
          <img
            src={BackgroundWave}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-12 sm:h-16 md:h-20 object-cover object-top block"
          />
        </div>
      )}
    </section>
  );
}

export default NotFoundSection;