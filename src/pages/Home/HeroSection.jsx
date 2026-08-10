import { ArrowRight, FolderKanban, Users, Award } from "lucide-react";
import { NavLink } from "react-router-dom";

import HeroIllustration from "../../assets/images/hero-illustration.webp";

function HomeHeroSection() {
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

                    <NavLink
                        to="/contact"
                        className="
                            group 
                            flex
                            justify-center
                            items-center

                            gap-2

                            py-3
                            px-6

                            text-(--Text)
                            bg-(--Primary)

                            border
                            border-(--Primary)

                            text-base

                            cursor-pointer

                            rounded-[0.65rem]

                            no-underline

                            max-[1024px]:px-4
                        "
                    >
                        Get Started

                        <ArrowRight
                            size={20}
                            className="
                                transition-transform
                                duration-300
                                ease-in-out

                                group-hover:translate-x-1.25
                            "
                        />
                    </NavLink>


                    {/* Our Services */}

                    <NavLink
                        to="/services"
                        className="
                            flex
                            justify-center
                            items-center

                            gap-2

                            py-3
                            px-6

                            text-base

                            cursor-pointer

                            rounded-[0.65rem]

                            no-underline

                            border
                            border-(--Border)

                            text-(--Button-Text)

                            bg-transparent

                            transition-shadow
                            duration-500
                            ease-in-out

                            hover:shadow-[0_0_5px_var(--Button-Text)]

                            max-[1024px]:px-4

                            max-[480px]:hover:shadow-none
                            max-[480px]:hover:transition-none

                            max-[314px]:hover:shadow-none
                            max-[314px]:hover:transition-none
                        "
                    >
                        Our Services
                    </NavLink>

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
                    className="
                        w-full
                        max-w-176
                        h-auto
                        block
                    "
                />
            </div>

        </section>
    );
}

export default HomeHeroSection;