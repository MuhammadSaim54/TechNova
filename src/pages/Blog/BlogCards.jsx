import { ArrowRight, Clock } from "lucide-react";
import BlogData from "./BlogData.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";

const DEFAULT_TAGS = ["Engineering", "Product Design", "Growth Strategy"];

function BlogCards() {
  return (
    <Section 
      id="blog-cards" 
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden w-full flex flex-col items-center"
    >
      {/* ================= Atmospheric Background Layers ================= */}

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

      {/* Centered Responsive Editorial Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {BlogData.map((data, index) => {
          const category = data.category || DEFAULT_TAGS[index % DEFAULT_TAGS.length];
          const readTime = data.readTime || "4 min read";

          return (
            <article
              key={data.id || index}
              className="
                group relative flex flex-col justify-between
                w-full max-w-md lg:max-w-none overflow-hidden
                rounded-3xl p-3 sm:p-3.5
                border border-border/60
                bg-card/50 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
                backdrop-blur-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.14)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:border-primary/50
                hover:shadow-[0_20px_40px_-15px_rgba(0,81,251,0.25)]
                cursor-pointer
              "
            >
              {/* Top Specular Border Highlight */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" 
              />

              <div>
                {/* ================= Media Container ================= */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted/30 border border-border/40">
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge 
                      variant="brand" 
                      className="px-2.5 py-1 text-[11px] font-semibold tracking-normal rounded-lg bg-background/90 dark:bg-black/75 backdrop-blur-md border-border/60"
                    >
                      {category}
                    </Badge>
                  </div>

                  {/* Read Time Tag */}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge 
                      variant="outline" 
                      className="gap-1 px-2.5 py-1 text-[10px] font-medium tracking-normal rounded-lg bg-background/90 dark:bg-black/75 backdrop-blur-md border-border/60 text-muted-foreground"
                    >
                      <Clock className="w-3 h-3 text-primary" aria-hidden="true" />
                      <span>{readTime}</span>
                    </Badge>
                  </div>

                  <img
                    src={data.img}
                    alt={`${data.title} blog cover`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* ================= Article Content ================= */}
                <div className="pt-4 pb-2 px-2 flex flex-col items-start text-left">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {data.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {data.description}
                  </p>
                </div>
              </div>

              {/* ================= Action Footer ================= */}
              <div className="pt-4 px-2 pb-1 border-t border-border/40 flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-1">
                  Read Full Article
                </span>

                <div 
                  aria-hidden="true" 
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-border/70 bg-muted/40 dark:bg-white/[0.04] text-primary transition-all duration-300 group-hover:border-primary group-hover:!bg-primary group-hover:text-primary-foreground group-hover:scale-110"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>

            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default BlogCards;