import { ArrowRight } from "lucide-react";

import AboutImage from "../../assets/images/developer-team.webp";
import { buttonVariants } from "@/src/components/ui/button";
import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";

import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";

import { useState } from "react";

function AboutHeroSection() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [servicesDialogOpen, setServicesDialogOpen] = useState(false);
    return (
        <section
            className="
                    flex
                    flex-col
                    md:flex-row

                    items-start
                    md:items-center

                    md:justify-between

                    gap-12
                    lg:gap-20

                    p-6
                    w-full

                    border-b
                    border-(--Section-line)
            "
        >

            {/* ================= Content ================= */}

            <div
                className="
                    flex
                    flex-col
                    justify-center
                    items-start

                    gap-4
                "
            >

                {/* Badge */}

                <div>
                    <span
                        className="
                            text-base
                            font-bold
                            font-['Manrope']
                            text-(--Primary)
                        "
                    >
                        ABOUT US
                    </span>
                </div>


                {/* Heading */}

                <div>
                    <h2
                        className="
                            text-[2.5rem]
                            font-bold

                            max-[1025px]:text-[2rem]
                            max-[768px]:text-[2.75rem]
                            max-[480px]:text-[2.25rem]
                            max-[314px]:text-2xl
                        "
                    >
                        About TechNova
                    </h2>
                </div>


                {/* Description */}

                <div>
                    <p
                        className="
                            w-full
                            max-w-md

                            text-(--Text-Muted)

                            max-[1025px]:text-[0.95rem]
                            max-[768px]:text-base
                            max-[480px]:text-[0.85rem]
                            max-[314px]:text-[0.75rem]
                        "
                    >
                        We are a team of passionate creators, developers and
                        strategists helping brands grow in the digital world.
                    </p>
                </div>


                {/* Actions */}

                <div
                    className="
                         flex
                         justify-start
                         items-center
                         gap-6
 
                         mt-4
                         w-full
 
                         max-[1024px]:gap-4
 
                         max-[480px]:flex-col
                         max-[480px]:items-stretch
                     "
                >

                    {/* Get Started */}

                    <button
                        type="button"
                        onClick={() => setDialogOpen(true)}
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                            className: "group",
                        })}
                    >
                        Get Started

                        <ArrowRight
                            className="
                                 transition-transform
                                 duration-300
                                 ease-in-out
 
                                 group-hover:translate-x-1.25
                             "
                        />
                    </button>


                    {/* Our Services */}

                    <button
                        type="button"
                        onClick={() => setServicesDialogOpen(true)}
                        className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                        })}
                    >
                        Our Services
                    </button>

                </div>


            </div>


            {/* ================= Image ================= */}

            <div
                className="
                w-full
                flex-1
                    flex
                    justify-center
                    items-center
                "
            >
                <img
                    src={AboutImage}
                    alt="About TechNova"
                    loading="lazy"

                    className="
                        block
                        w-full
                        h-auto
                        max-w-136

                        rounded-xl

                        max-[768px]:max-w-full
                    "
                />
            </div>

            <GetStartedDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
            />

            <ServicesDialog
                open={servicesDialogOpen}
                onOpenChange={setServicesDialogOpen}
            />

        </section>
    );
}

export default AboutHeroSection;