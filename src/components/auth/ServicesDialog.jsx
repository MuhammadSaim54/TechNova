import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Layers3,
  Globe2,
  BarChart3,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/src/components/ui/dialog";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Engineering",
    tag: "Next.js / React / TypeScript",
    description:
      "Scalable web applications built with server-rendered architectures, micro-interactions, and 99+ Lighthouse speed.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design Systems",
    tag: "Design Tokens / Figma / Motion",
    description:
      "Enterprise design systems, interactive component libraries, and ergonomic interface flows that drive product conversion.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    tag: "React Native / iOS / Android",
    description:
      "Cross-platform mobile apps with native gesture handling, offline state synchronization, and tactical responsiveness.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Product Strategy & SOW",
    tag: "Discovery / Technical Specs",
    description:
      "Comprehensive product scoping sprints combining user discovery, click-through prototypes, and architecture roadmaps.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Cloud Software & APIs",
    tag: "Microservices / GraphQL / AWS",
    description:
      "Resilient backend architectures, secure auth boundaries, and serverless infrastructures built for operational growth.",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Performance & SEO Audits",
    tag: "Core Web Vitals / Schema",
    description:
      "Deep technical audits, bundle tree-shaking, edge delivery caching, and semantic indexing that scales discoverability.",
  },
];

function ServicesDialog({ open, onOpenChange }) {
  const scrollContainerRef = useRef(null);

  // Auto-focus scroll container so arrow keys and wheel work immediately
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
          scrollContainerRef.current.focus();
        }
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          scrollContainerRef.current?.focus();
        }}
        className="
          !w-[94vw]
          !max-w-3xl
          lg:!max-w-4xl
          h-[84vh]
          max-h-[720px]
          p-0
          gap-0
          rounded-3xl
          border border-border/80 dark:border-white/[0.12]
          bg-background/95 dark:bg-[#070b14]/95
          backdrop-blur-3xl
          shadow-[0_25px_70px_rgba(0,0,0,0.4)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.9)]
          flex flex-col
          overflow-hidden
          z-[1050]
          [&>button]:z-50
          [&>button]:top-5
          [&>button]:right-5
        "
      >
        {/* Top Hairline Specular Reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none z-30" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-28 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* ================= Header ================= */}
        <div className="relative px-6 sm:px-8 py-5 border-b border-border/60 dark:border-white/[0.08] bg-background/80 dark:bg-[#070b14]/80 backdrop-blur-xl shrink-0 z-20 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center justify-center w-4 h-4 rounded bg-primary/15 text-primary">
              <Sparkles className="w-2.5 h-2.5" />
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-primary">
              Engineering Disciplines
            </span>
          </div>

          <DialogHeader className="p-0 text-left space-y-0.5">
            <DialogTitle className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground pr-10">
              Capabilities & Architecture Matrix
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground leading-relaxed max-w-xl">
              Inspect our production disciplines, tech stacks, and engineering standards.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* ================= Keyboard-Scrollable Content Engine ================= */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          aria-label="Capabilities grid"
          className="
            flex-1
            w-full
            min-h-0
            overflow-y-auto
            overscroll-contain
            outline-none
            focus:outline-none
            focus-visible:ring-1 focus-visible:ring-primary/30
            p-5 sm:p-6
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* Spacious 2-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="
                    group relative flex flex-col justify-between
                    p-4 sm:p-5 rounded-2xl
                    border border-border/70 dark:border-white/[0.08]
                    bg-card/50 dark:bg-white/[0.02]
                    hover:border-primary/50 hover:bg-card/80 dark:hover:bg-white/[0.05]
                    shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(0,81,251,0.2)]
                    hover:-translate-y-0.5
                    transition-all duration-200 ease-out
                    text-left
                    cursor-default
                  "
                >
                  <div>
                    {/* Header Row: Icon + Title + Number */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl border border-border/70 dark:border-white/10 bg-background/80 dark:bg-black/40 text-primary group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_12px_rgba(0,81,251,0.4)] transition-all duration-200 shrink-0">
                          <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <span className="inline-block text-[10px] font-mono text-muted-foreground/80">
                            {service.tag}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0">
                        {service.number}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed pl-12">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro Footer Action */}
                  <div className="mt-3.5 pt-2.5 pl-12 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                      View Architecture
                    </span>
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-muted/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= Compact Pinned Footer ================= */}
        <div className="px-6 sm:px-8 py-3.5 border-t border-border/60 dark:border-white/[0.08] bg-background/90 dark:bg-[#070b14]/90 backdrop-blur-xl shrink-0 z-20 flex items-center justify-between gap-4 max-[600px]:flex-col max-[600px]:items-stretch">
          <div className="text-left">
            <p className="text-xs sm:text-sm font-bold text-foreground">
              Ready to kick off a dedicated build?
            </p>
            <p className="text-[10px] text-muted-foreground">
              Direct access to senior engineering leads and sprint estimates.
            </p>
          </div>

          <NavLink
            to="/services"
            onClick={() => onOpenChange(false)}
            className="
              group relative flex items-center justify-center gap-2
              h-10 px-5 rounded-xl
              bg-gradient-to-r from-blue-600 via-primary to-indigo-600
              text-white text-xs font-bold tracking-wide
              shadow-md shadow-primary/25 hover:shadow-primary/40
              transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0
              shrink-0 overflow-hidden text-center
            "
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/35 pointer-events-none" />
            <span>Full Catalog</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ServicesDialog;