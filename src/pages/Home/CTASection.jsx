import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


function CTASection() {
    return (
        <section
            className="
                relative
                overflow-hidden

                flex
                justify-between
                items-center

                mx-16
                my-6

                px-8
                py-5

                rounded-xl

                border
                border-(--Text-Light)

                bg-[#0051fb12]

                shadow-sm

                max-[982px]:
                mx-6
                gap-6

                max-[700px]:
                mx-4
                flex-col
                items-start
                px-5
                py-5
            "
        >

            {/* ================= Content ================= */}

            <div>

                {/* Badge */}

                <div>
                    <span
                        className="
                            text-(--Primary)
                            text-xs
                            font-semibold

                            tracking-[1.1px]

                            font-['Manrope']
                        "
                    >
                        LET'S WORK TOGETHER
                    </span>
                </div>


                {/* Heading */}

                <div>
                    <h2
                        className="
                            mt-2

                            max-w-[24rem]

                            text-[1.75rem]
                            leading-tight
                            font-medium

                            max-[700px]:text-2xl
                        "
                    >
                        Have a Project in Mind?
                    </h2>
                </div>


                {/* Description */}

                <div>
                    <p
                        className="
                            mt-2

                            max-w-[27rem]

                            text-sm
                            leading-relaxed

                            font-['Manrope']
                            text-(--Text-Muted)
                        "
                    >
                        Let's turn your ideas into reality. Our team is ready
                        to help you build something amazing.
                    </p>
                </div>

            </div>


            {/* ================= CTA Button ================= */}

            <NavLink
                to="/contact"

                className="
                        group

                        relative
                        z-10

                        flex
                        shrink-0
                        justify-center
                        items-center

                        gap-2

                        px-6
                        py-3

                        rounded-lg

                        border
                        border-(--Primary)

                        bg-(--Primary)
                        text-(--Text)

                        no-underline

                        text-sm

                        transition-all
                        duration-300

                        hover:shadow-[0_0_14px_var(--Primary)]

                        max-[700px]:w-full
                "
            >
                Get Started

                <ArrowRight
                    size={18}
                    className="
                        transition-transform
                        duration-300
                        ease-in-out

                        group-hover:translate-x-1.25
                    "
                />

            </NavLink>

        </section>
    );
}

export default CTASection;