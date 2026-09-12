import {
  FaFacebook,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

import teamdata from "./teamdata.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";

function TeamCardsSection() {
  return (
    <Section 
      id="team-cards" 
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden w-full flex flex-col items-center"
    >
      {/* Calibrated Blueprint Grid for Both Themes */}
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

      {/* Ambient Lighting Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[300px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" 
      />

      {/* Centered Showcase Grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {teamdata.map((data, index) => {
          const memberIndex = String(index + 1).padStart(2, "0");

          return (
            <div
              key={data.id || index}
              className="
                group relative flex flex-col justify-between
                w-full max-w-sm overflow-hidden
                rounded-3xl p-3 sm:p-3.5
                border border-border/60
                bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.14)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:border-primary/50
                hover:shadow-[0_20px_40px_-15px_rgba(0,81,251,0.25)]
              "
            >
              {/* Top Specular Border Highlight */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" 
              />

              <div>
                {/* Member Portrait Shell */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-muted/30 border border-border/40">
                  <div className="absolute top-3 right-3 z-10">
                    <Badge 
                      variant="outline" 
                      className="px-2.5 py-1 rounded-lg bg-background/85 dark:bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-muted-foreground border-border/60"
                    >
                      MEMBER // {memberIndex}
                    </Badge>
                  </div>

                  <img
                    src={data.img}
                    alt={`${data.name} profile`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div 
                    aria-hidden="true" 
                    className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  />
                </div>

                {/* Profile Details */}
                <div className="pt-4 pb-2 px-2 flex flex-col items-start text-left">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {data.name}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                    {data.role}
                  </p>
                </div>
              </div>

              {/* Social Link Actions */}
              <div className="pt-3 px-2 pb-1 border-t border-border/40 flex items-center justify-between w-full">
                <span className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider font-mono">
                  Connect
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    aria-label={`${data.name} Facebook`}
                    className="
                      flex items-center justify-center
                      w-8 h-8 rounded-full
                      border border-border/70 bg-muted/40 dark:bg-white/[0.04]
                      text-muted-foreground
                      transition-all duration-300
                      hover:border-primary hover:!bg-primary hover:text-primary-foreground
                      hover:scale-110 hover:shadow-[0_0_12px_rgba(0,81,251,0.4)]
                    "
                  >
                    <FaFacebook className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    aria-label={`${data.name} GitHub`}
                    className="
                      flex items-center justify-center
                      w-8 h-8 rounded-full
                      border border-border/70 bg-muted/40 dark:bg-white/[0.04]
                      text-muted-foreground
                      transition-all duration-300
                      hover:border-primary hover:!bg-primary hover:text-primary-foreground
                      hover:scale-110 hover:shadow-[0_0_12px_rgba(0,81,251,0.4)]
                    "
                  >
                    <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    aria-label={`${data.name} X`}
                    className="
                      flex items-center justify-center
                      w-8 h-8 rounded-full
                      border border-border/70 bg-muted/40 dark:bg-white/[0.04]
                      text-muted-foreground
                      transition-all duration-300
                      hover:border-primary hover:!bg-primary hover:text-primary-foreground
                      hover:scale-110 hover:shadow-[0_0_12px_rgba(0,81,251,0.4)]
                    "
                  >
                    <FaXTwitter className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default TeamCardsSection;