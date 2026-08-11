import {
    Brain,
    Users,
    HeartHandshakeIcon,
} from "lucide-react";

import AboutImage from "../../assets/images/developer-team.webp";
import { NavLink } from "react-router-dom";


function AboutPreviewSection() {
    return (
        <section
            className="
                flex
                justify-stretch
                items-center

                gap-16

                py-[clamp(1rem,3vw,2rem)]
                px-[clamp(1rem,5vw,4rem)]

                max-[1024px]:gap-8

                max-[768px]:flex-col
                max-[768px]:justify-center
                max-[768px]:items-center
            "
        >

            {/* ================= Image ================= */}

            <div
                className="
                    relative

                    flex
                    justify-center
                    items-center

                    flex-1
                    w-full
                    max-w-[clamp(20rem,50vw,38rem)]
                "
            >

                <img
                    src={AboutImage}
                    alt="Our Team"
                    loading="lazy"

                    className="
                        block
                        w-full
                        h-auto

                        max-w-[clamp(20rem,50vw,38rem)]

                        rounded-xl

                        max-[768px]:w-full
                    "
                />


                {/* ================= Experience Card ================= */}

                <div
                    className="
                        absolute

                        bottom-3
                        left-2

                        bg-(--Primary)

                        rounded-xl

                        p-4

                        max-[314px]:p-2
                    "
                >

                    <h2
                        className="
                            text-[2.5rem]
                            text-(--Text)
                            font-medium

                            max-[768px]:text-2xl

                            max-[314px]:text-base
                        "
                    >
                        10+
                    </h2>

                    <p
                        className="
                            text-(--Text)

                            w-20

                            text-[0.85rem]

                            max-[768px]:w-15
                            max-[768px]:text-xs

                            max-[314px]:w-11
                            max-[314px]:text-[0.5rem]
                        "
                    >
                        Years of Experience
                    </p>

                </div>

            </div>


            {/* ================= Content ================= */}

            <div
                className="
                    flex-1

                    flex
                    flex-col
                    justify-center
                    items-start

                    gap-3
                "
            >

                {/* ================= Badge ================= */}

                <div>
                    <span
                        className="
                            text-(--Primary)

                            text-base
                            font-medium

                            font-['Manrope']
                        "
                    >
                        ABOUT US
                    </span>
                </div>


                {/* ================= Title ================= */}

                <div>
                    <h2
                        className="
                            text-2xl
                            font-medium

                            max-w-104

                            max-[1024px]:text-2xl
                            max-[768px]:text-2xl
                        "
                    >
                        Building Solutions That Make an Impact
                    </h2>
                </div>


                {/* ================= Description ================= */}

                <div>
                    <p
                        className="
                            text-base

                            max-w-120

                            text-(--Text-Muted)

                            max-[1024px]:text-[0.85rem]
                        "
                    >
                        At TechNova, we combine creativity, technology and
                        data to build solutions that make a real impact.
                        Our team of experts is dedicated to delivering
                        high-quality results that drive success.
                    </p>
                </div>


                {/* ================= Features ================= */}

                <div
                    className="
                        flex
                        justify-center
                        items-center

                        gap-12

                        max-[1024px]:gap-6

                        max-[768px]:flex-col
                        max-[768px]:gap-3
                    "
                >

                    {/* Feature 1 */}

                    <div
                        className="
                            flex
                            justify-center
                            items-center

                            gap-2

                            mt-4
                        "
                    >
                        <Brain
                            size={36}
                            strokeWidth={1.2}
                            color="#0051fb"
                        />

                        <span
                            className="
                                w-20
                                text-[0.95rem]

                                max-[768px]:w-44
                                max-[768px]:text-base
                            "
                        >
                            Innovative Approach
                        </span>
                    </div>


                    {/* Feature 2 */}

                    <div
                        className="
                            flex
                            justify-center
                            items-center

                            gap-2

                            mt-4
                        "
                    >
                        <Users
                            size={36}
                            strokeWidth={1.2}
                            color="#0051fb"
                        />

                        <span
                            className="
                                w-20
                                text-[0.95rem]

                                max-[768px]:w-44
                                max-[768px]:text-base
                            "
                        >
                            Dedicated Team
                        </span>
                    </div>


                    {/* Feature 3 */}

                    <div
                        className="
                            flex
                            justify-center
                            items-center

                            gap-2

                            mt-4
                        "
                    >
                        <HeartHandshakeIcon
                            size={36}
                            strokeWidth={1.2}
                            color="#0051fb"
                        />

                        <span
                            className="
                                w-20
                                text-[0.95rem]

                                max-[768px]:w-44
                                max-[768px]:text-base
                            "
                        >
                            Client First Mindset
                        </span>
                    </div>

                </div>


                {/* ================= CTA ================= */}

                <NavLink
                    to="/about"

                    className="
                        py-3
                        px-6

                        mt-4

                        border
                        border-(--Primary)

                        bg-transparent

                        rounded-lg

                        text-(--Primary)

                        cursor-pointer
                        no-underline

                        transition-all
                        duration-300
                        ease-in-out

                        hover:bg-(--Primary)
                        hover:text-(--Text)
                    "
                >
                    Learn More About Us
                </NavLink>

            </div>

        </section>
    );
}

export default AboutPreviewSection;