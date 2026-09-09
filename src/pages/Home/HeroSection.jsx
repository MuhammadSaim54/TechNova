import { useState } from "react";
import { ArrowRight, FolderKanban, Users, Award } from "lucide-react";
import HeroIllustration from "../../assets/images/hero-illustration.png";
import { buttonVariants } from "@/src/components/ui/button";
import { Section } from "@/src/components/layout/Section";
import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";
import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";

const STATS = [
  { icon: FolderKanban, value: "120+", label: "Projects Completed" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

function HomeHeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

  return (
    <Section 
      id="hero" 
      className="border-b border-border py-8 md:py-12 lg:py-16"
    >
      <div className="w-full flex flex-col gap-10 md:gap-12">
        
        {/* Main Grid: Switches to 2 columns at md (768px) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary">
              Welcome to TechNova
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
              We Build Digital Solutions That{" "}
              <span className="text-primary">Inspire</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We are a creative digital agency delivering modern web solutions
              engineered to accelerate business growth.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className={buttonVariants({
                  variant: "glow",
                  size: "lg",
                  className: "group justify-center",
                })}
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setServicesDialogOpen(true)}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "justify-center",
                })}
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex justify-center items-center">
            <img
              src={HeroIllustration}
              alt="TechNova digital solutions illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-none h-auto object-contain drop-shadow-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hidden sm:grid pt-6 border-t border-border/40 grid-cols-3 gap-4 sm:gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center sm:items-start gap-2 sm:gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 hidden md:flex">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                  {value}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-tight mt-0.5">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <ServicesDialog
        open={servicesDialogOpen}
        onOpenChange={setServicesDialogOpen}
      />
    </Section>
  );
}

export default HomeHeroSection;