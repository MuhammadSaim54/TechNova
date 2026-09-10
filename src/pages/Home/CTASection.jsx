import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Section } from "@/src/components/layout/Section";
import { buttonVariants } from "@/src/components/ui/button";

function CTASection() {
  return (
    <Section id="cta" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      
      {/* ================= Premium Ambient Banner Container ================= */}
      <div
        className="
          relative w-full overflow-hidden
          rounded-3xl p-8 sm:p-12 lg:p-16
          border border-white/[0.08]
          bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent
          backdrop-blur-2xl
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        "
      >
        {/* Specular top-edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Ambient radial backdrop glow inside the card */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[220px] bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Content Left */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Work Together</span>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Have a project in mind?
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Let's turn your ideas into high-performing digital realities. Our engineering and design
              team is ready to help you launch, scale, and achieve your product goals.
            </p>
          </div>

          {/* Action Right */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <NavLink
              to="/contact"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "group justify-center px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all",
              })}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </NavLink>
          </div>

        </div>

      </div>
    </Section>
  );
}

export default CTASection;