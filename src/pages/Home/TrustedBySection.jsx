import { Section } from "@/src/components/layout/Section";

import Google from "../../assets/BrandsLogos/google.svg";
import Microsoft from "../../assets/BrandsLogos/microsoft.svg";
import Gitlab from "../../assets/BrandsLogos/gitlab.svg";
import DropBox from "../../assets/BrandsLogos/dropbox.svg";
import Spotify from "../../assets/BrandsLogos/spotify.svg";
import Slack from "../../assets/BrandsLogos/slack.svg";

const BRAND_LOGOS = [
    { name: "Google", src: Google },
    { name: "Microsoft", src: Microsoft },
    { name: "GitLab", src: Gitlab },
    { name: "Dropbox", src: DropBox },
    { name: "Spotify", src: Spotify },
    { name: "Slack", src: Slack },
];

function TrustedBySection() {
    return (
        <Section
            id="trusted-by"
            className="py-10 md:py-14 border-b border-border/50 bg-background/50"
        >
            <div className="flex flex-col items-center gap-8">

                {/* Eyebrow Label */}
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground/80 uppercase text-center">
                    Trusted by 500+ companies worldwide
                </p>

                {/* Responsive Logo Grid */}
                {/* Responsive Logo Grid */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-8 sm:gap-10 lg:gap-12">
                    {BRAND_LOGOS.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex items-center justify-center w-full h-12 group"
                        >
                            <img
                                src={brand.src}
                                alt={`${brand.name} logo`}
                                className="
                                        h-8 sm:h-9 md:h-10 w-auto 
                                        max-w-[150px]
                                        object-contain 
                                        opacity-60 
                                        grayscale 
                                        transition-all 
                                        duration-300 
                                        ease-out 
                                        group-hover:opacity-100 
                                        group-hover:grayscale-0 
                                        group-hover:scale-105
                                        "
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
}

export default TrustedBySection;