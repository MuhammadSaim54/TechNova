import ServicesData from "./ServicesData.js";

import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


function ServicesPreviewSection() {
    return (
        <section
            className="
                flex
                justify-center
                items-center
                flex-col

                py-8
                px-6

                gap-2

                border-b
                border-(--Section-line)
            "
        >

            {/* ================= Badge ================= */}

            <div>
                <span
                    className="
                        font-medium
                        text-(--Primary)
                        font-['Manrope']

                        max-[442px]:text-[0.85rem]
                    "
                >
                    OUR SERVICES
                </span>
            </div>


            {/* ================= Title ================= */}

            <div>
                <h1
                    className="
                        text-[2.5rem]
                        font-medium

                        max-[700px]:text-[2.25rem]

                        max-[540px]:text-[1.75rem]

                        max-[442px]:text-[1.3rem]

                        max-[370px]:text-[1.25rem]

                        max-[314px]:text-[1.2rem]
                    "
                >
                    Services That Drive Results
                </h1>
            </div>


            {/* ================= Description ================= */}

            <div>
                <p
                    className="
                        w-132

                        text-center

                        max-[700px]:text-[0.95rem]
                        max-[700px]:w-md

                        max-[540px]:text-xs
                        max-[540px]:w-[20rem]

                        max-[442px]:text-xs
                        max-[442px]:w-68

                        max-[370px]:text-xs
                        max-[370px]:w-66

                        max-[314px]:text-[0.7rem]
                        max-[314px]:w-[16rem]
                    "
                >
                    We provide a wide range of digital services to help
                    your buisness to grow faster and reach the right audience.
                </p>
            </div>


            {/* ================= Service Cards ================= */}

            <div
                className="
                    flex
                    justify-center
                    items-stretch

                    gap-8

                    mt-8
                    mx-16

                    max-[982px]:flex-wrap

                    max-[442px]:mx-8
                    max-[370px]:mx-4
                "
            >

                {ServicesData.map((Service) => {

                    return (
                        <div
                            key={Service.id}
                            className={`
                                flex
                                flex-col
                                justify-center
                                items-start

                                gap-3
                                p-5

                                border
                                border-(--Section-line)
                                rounded-xl

                                cursor-pointer

                                transition-all
                                duration-300
                                ease-in-out

                                hover:border-(--Primary)
                                hover:-translate-y-1.5
                                hover:shadow-[0_0_10px_var(--Glow)]

                                max-[442px]:gap-[0.65rem]
                                max-[442px]:p-[1.15rem]
                    `}
                        >

                            {/* ================= Icon ================= */}

                            <div
                                className={`
                                    flex
                                    justify-center
                                    items-center

                                    p-2
                                    rounded-xl

                                    ${Service.id === 1 ? "bg-(--Primary)" : ""}
                                `}
                            >
                                <Service.icon
                                    size={40}
                                    color={Service.iconColor}
                                    strokeWidth={1.5}
                                    className="
                                    w-10
                                    h-10

                                    max-[442px]:w-9
                                    max-[442px]:h-9

                                    max-[370px]:w-8
                                    max-[370px]:h-8
                                "
                                />
                            </div>


                            {/* ================= Title ================= */}

                            <span
                                className="
                                    text-2xl
                                    font-medium

                                    max-[442px]:text-xl

                                    max-[370px]:text-[1.15rem]
                                "
                            >
                                {Service.title}
                            </span>


                            {/* ================= Description ================= */}

                            <p
                                className="
                                    text-[0.95rem]
                                    text-(--Text-Muted)
                                    max-w-60

                                    max-[442px]:text-[0.85rem]

                                    max-[370px]:text-xs
                                "
                            >
                                {Service.description}
                            </p>


                            {/* ================= Action ================= */}

                            <div className="mt-4">

                                <button
                                    className="
                                        flex
                                        justify-center
                                        items-center

                                        gap-1

                                        mt-4

                                        border-none
                                        bg-transparent

                                        text-(--Primary)

                                        cursor-pointer

                                        group
                                    "
                                >
                                    Learn More

                                    <ArrowRight
                                        size={16}
                                        color="#0051fb"
                                        className="
                                            transition-transform
                                            duration-300
                                            ease-in-out

                                            group-hover:translate-x-1.25
                                        "
                                    />
                                </button>

                            </div>

                        </div>
                    );

                })}

            </div>


            {/* ================= View All ================= */}

            <NavLink
                to="/services"
                className="
                    py-3
                    px-8

                    border
                    border-(--Primary)

                    rounded-lg

                    bg-transparent

                    text-(--Primary)

                    mt-4

                    cursor-pointer

                    no-underline

                    transition-all
                    duration-300
                    ease-in-out

                    hover:bg-(--Primary)
                    hover:text-(--Text)
                "
            >
                View All Services
            </NavLink>

        </section>
    );
}

export default ServicesPreviewSection;