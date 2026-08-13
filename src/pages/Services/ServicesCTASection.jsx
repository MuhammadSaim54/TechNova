import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


function ServicesCTASection() {
    return (
        <section
            className="
                flex
                justify-between
                items-center

                mx-16
                my-10

                p-6
                px-10

                bg-[#0051fb12]

                border
                border-(--Text-Light)

                rounded-xl

                max-[982px]:flex-col
                max-[982px]:items-start
                max-[982px]:gap-6
                max-[982px]:mx-0
                max-[982px]:my-6
                max-[982px]:rounded-none

                max-[700px]:px-5
            "
        >

            {/* ================= Content ================= */}

            <div>

                {/* Badge */}

                <div>
                    <span
                        className="
                            text-(--Primary)
                            font-semibold
                            tracking-[1.1px]
                            font-['Manrope']

                            max-[700px]:text-[0.85rem]
                        "
                    >
                        LET'S WORK TOGETHER
                    </span>
                </div>


                {/* Heading */}

                <div>
                    <h2
                        className="
                            mt-4

                            text-[2rem]
                            font-medium

                            max-[700px]:text-2xl
                        "
                    >
                        Subscribe to take your buisness to the next level?
                    </h2>
                </div>


                {/* Description */}

                <div>
                    <p
                        className="
                            max-w-[29rem]

                            mt-2

                            font-['Manrope']

                            max-[700px]:
                                max-w-[25rem]
                                text-[0.85rem]
                        "
                    >
                        Let's build something amazing together.
                    </p>
                </div>

            </div>


            {/* ================= CTA Button ================= */}

            <div>
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

                        border
                        border-(--Primary)

                        rounded-xl

                        text-(--Text)

                        bg-(--Primary)

                        cursor-pointer
                        no-underline

                        transition-all
                        duration-300
                        ease-out

                        hover:shadow-[0_0_14px_var(--Primary)]

                        max-[700px]:text-[0.95rem]
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
            </div>

        </section>
    );
}

export default ServicesCTASection;