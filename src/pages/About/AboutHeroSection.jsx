import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import AboutImage from "../../assets/images/developer-team.webp";


function AboutHeroSection() {
    return (
        <section
            className="
                    flex
                    flex-col
                    md:flex-row

                    items-start
                    md:items-center

                    justify-between

                    gap-8
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
        justify-center
        items-center

        gap-6
        mt-4

        max-[1025px]:gap-4

        max-[480px]:flex-col
        max-[480px]:items-stretch
        max-[480px]:w-full
        max-[480px]:gap-2

        max-[314px]:gap-4
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

                                px-8
                                py-4

                                rounded-xl

                                border
                                border-(--Primary)

                                bg-(--Primary)
                                text-(--Text)

                                no-underline

                                transition-all
                                duration-300
                                ease-out

                                hover:-translate-y-0.5
                                hover:shadow-[0_8px_30px_rgba(0,81,251,0.25)]

                                active:translate-y-0
                                active:scale-[0.98]

                                max-[1025px]:px-6
                                max-[1025px]:py-3

                                max-[768px]:px-8
                                max-[768px]:py-4

                                max-[314px]:px-6
                                max-[314px]:py-3
                        "
                    >
                        Get Started

                        <ArrowRight
                            size={18}
                            className="
                                transition-transform
                                duration-300
                                ease-out

                                group-hover:translate-x-1
                            "
                        />
                    </NavLink>


                    {/* Our Services */}

                    <NavLink
                        to="/services"
                        className="
                            group

                            flex
                            justify-center
                            items-center
                            gap-2

                            px-8
                            py-4

                            rounded-xl

                            border
                            border-(--Border)

                            bg-transparent
                         text-black

                            no-underline

                            transition-all
                            duration-300
                            ease-out

                            hover:-translate-y-0.5
                            hover:border-(--Primary)
                            hover:bg-(--Primary)/5
                            hover:shadow-[0_8px_25px_rgba(0,81,251,0.08)]

                            active:translate-y-0
                            active:scale-[0.98]

                            max-[1025px]:px-6
                            max-[1025px]:py-3

                            max-[768px]:px-8
                            max-[768px]:py-4

                            max-[314px]:px-6
                            max-[314px]:py-3
                        "
                    >
                        Our Services
                    </NavLink>

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

        </section>
    );
}

export default AboutHeroSection;