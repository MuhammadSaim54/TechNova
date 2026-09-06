import { ArrowRight, FolderKanban, Users, Award } from "lucide-react";
import { NavLink } from "react-router-dom";

import HeroIllustration from "../../assets/images/hero-illustration.png";
import { buttonVariants } from "@/src/components/ui/button";

import { useTheme } from "../../context/ThemeContext";

import { useState } from "react";

import GetStartedDialog from "@/src/components/auth/GetStartedDialog.jsx";

import ServicesDialog from "@/src/components/auth/ServicesDialog.jsx";

function HomeHeroSection() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [servicesDialogOpen, setServicesDialogOpen] = useState(false);

    const { theme } = useTheme();
    return (
        <section
            className="
                flex
                justify-between
                items-center
                gap-16

                min-h-137.5
                w-full
                p-6

                border-b
                border-(--Section-line)

                max-[1280px]:gap-8

                max-[1024px]:gap-8

                max-[768px]:flex-col
                max-[768px]:items-start

                max-[480px]:p-6

                max-[314px]:p-4
            "
        >

            {/* ================= Hero Content ================= */}

            <div
                className="
                    flex-[1.1]
                    flex
                    flex-col
                    justify-center
                    gap-4
                "
            >

                {/* ================= Badge ================= */}

                <div>
                    <span
                        className="
                            text-(--Primary)
                            font-semibold
                            text-sm
                            tracking-[0.08em]
                            uppercase
                        "
                    >
                        WELCOME TO TECHNOVA
                    </span>
                </div>


                {/* ================= Title ================= */}

                <div>
                    <h1
                        className="
                            text-5xl
                            max-w-140

                            font-semibold
                            leading-tight

                            max-[1024px]:text-[2.5rem]

                            max-[768px]:text-5xl

                            max-[480px]:text-[2.25rem]

                            max-[314px]:text-[2rem]
                        "
                    >
                        We Build Digital Solutions That{" "}
                        <span className="text-(--Primary)">
                            Inspire
                        </span>
                    </h1>
                </div>


                {/* ================= Description ================= */}

                <div>
                    <p
                        className="
                            max-w-108

                            text-(--Text-Muted)
                            font-medium

                            mt-2

                            leading-[1.65]

                            font-['Manrope']
                        "
                    >
                        We are creative digital agency delivering modern
                        web solutions that drive buisness growth.
                    </p>
                </div>


                {/* ================= Actions ================= */}

                <div
                    className="
                        flex
                        justify-start
                        items-center
                        gap-6

                        mt-4

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


                {/* ================= Statistics ================= */}

                <div
                    className="
                        flex
                        items-center
                        gap-8

                        mt-8

                        max-[1024px]:gap-4

                        max-[768px]:hidden
                    "
                >

                    {/* Projects */}

                    <div
                        className="
                            flex
                            justify-center
                            items-start

                            gap-3

                            font-['Manrope']
                        "
                    >
                        <div className="flex items-center">
                            <FolderKanban
                                size={26}
                                className="text-(--Primary)"
                            />
                        </div>

                        <div>
                            <h3
                                className="
                                    font-semibold
                                    text-xl

                                    max-[1024px]:text-base
                                "
                            >
                                120+
                            </h3>

                            <p
                                className="
                                    text-(--Text-Muted)

                                    max-[1024px]:text-xs
                                "
                            >
                                Projects Completed
                            </p>
                        </div>
                    </div>


                    {/* Client Satisfaction */}

                    <div
                        className="
                            flex
                            justify-center
                            items-start

                            gap-3

                            font-['Manrope']
                        "
                    >
                        <div className="flex items-center">
                            <Users
                                size={26}
                                className="text-(--Primary)"
                            />
                        </div>

                        <div>
                            <h3
                                className="
                                    font-semibold
                                    text-xl

                                    max-[1024px]:text-base
                                "
                            >
                                98%
                            </h3>

                            <p
                                className="
                                    text-(--Text-Muted)

                                    max-[1024px]:text-xs
                                "
                            >
                                Client Satisfaction
                            </p>
                        </div>
                    </div>


                    {/* Experience */}

                    <div
                        className="
                            flex
                            justify-center
                            items-start

                            gap-3

                            font-['Manrope']
                        "
                    >
                        <div className="flex items-center">
                            <Award
                                size={26}
                                className="text-(--Primary)"
                            />
                        </div>

                        <div>
                            <h3
                                className="
                                    font-semibold
                                    text-xl

                                    max-[1024px]:text-base
                                "
                            >
                                10+
                            </h3>

                            <p
                                className="
                                    text-(--Text-Muted)

                                    max-[1024px]:text-xs
                                "
                            >
                                Years of Experience
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            {/* ================= Hero Image ================= */}

            <div
                className="
                    flex-1

                    flex
                    justify-center
                    items-center
                "
            >
                <img
                    src={HeroIllustration}
                    alt="TechNova digital solutions"
                    className={`
                         w-full
                         max-w-176
                         h-auto
                         block
                     `}
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

export default HomeHeroSection;