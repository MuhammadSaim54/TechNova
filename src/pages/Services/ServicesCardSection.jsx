import React, { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import ServicesData from "./ServicesData.js";
import { Section } from "@/src/components/layout/Section";
import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";

// Stable references outside component lifecycle
const DEFAULT_TAGS = {
  "Web Development": ["Next.js", "React", "Scalable APIs"],
  "UI/UX Design": ["Figma Systems", "Wireframing", "Prototypes"],
  "Digital Marketing": ["Growth SEO", "Paid Media", "Analytics"],
};

const FALLBACK_TAGS = ["Enterprise", "High Impact"];

// ================= Memoized Leaf Component =================
export const ServiceCardItem = memo(function ServiceCardItem({
  title,
  description,
  icon: Icon,
  tags,
  serviceIndex,
}) {

  // console.log(`[RENDER] Card: ${title}`);
  return (
    <Card
      variant="bento"
      size="default"
      aria-label={`${title} service details`}
    >
      <div>
        {/* Header: Icon + Index */}
        <CardHeader className="flex-row items-center justify-between gap-0 pb-0">
          <div
            aria-hidden="true"
            className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover/card:scale-105 group-hover/card:bg-primary group-hover/card:text-primary-foreground group-hover/card:border-primary group-hover/card:shadow-[0_0_20px_rgba(0,81,251,0.35)]"
          >
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </div>

          <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/70 uppercase group-hover/card:text-primary transition-colors">
            {serviceIndex}
          </span>
        </CardHeader>

        {/* Title & Description */}
        <CardContent className="mt-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-3">
            {description}
          </CardDescription>

          {/* Capability Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-2.5 py-1 text-[11px] font-sans font-medium rounded-md group-hover/card:border-primary/30 group-hover/card:text-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>

      {/* Card Footer Action */}
      <CardFooter className="mt-8 pt-5">
        <span className="text-sm font-semibold text-foreground/80 group-hover/card:text-primary transition-colors">
          Explore Service
        </span>

        <div
          aria-hidden="true"
          className="w-8 h-8 rounded-full border border-border/70 bg-muted/30 dark:bg-white/[0.04] flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover/card:border-primary group-hover/card:!bg-primary group-hover/card:text-primary-foreground group-hover/card:scale-110"
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
        </div>
      </CardFooter>
    </Card>
  );
});

// ================= Parent Section Container =================
export default function ServicesCardSection() {
  return (
    <Section
      id="services-cards"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden w-full"
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[300px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ServicesData.map((service, index) => {
          const tags = service.tags || DEFAULT_TAGS[service.title] || FALLBACK_TAGS;
          const serviceIndex = String(index + 1).padStart(2, "0");

          return (
            <ServiceCardItem
              key={service.id || index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              tags={tags}
              serviceIndex={serviceIndex}
            />
          );
        })}
      </div>
    </Section>
  );
}