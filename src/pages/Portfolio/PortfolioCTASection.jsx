import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


function PortfolioCTASection() {
    return (
        <section
            className="
                flex
                justify-between
                items-center

                mx-16
                my-6

                p-6
                px-10

                bg-[#0051fb12]

                border
                border-(--Text-Light)

                border-b
                border-b-(--Section-line)

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

                <div>
                    <h2
                        className="
                            mt-4

                            text-[2rem]
                            font-medium

                            max-[700px]:text-2xl
                        "
                    >
                        Have a Project in Mind?
                    </h2>
                </div>

                <div>
                    <p
                        className="
                            max-w-[29rem]
                            mt-2

                            font-['Manrope']

                            max-[700px]:max-w-[25rem]
                            max-[700px]:text-[0.85rem]
                        "
                    >
                        Let's turn your ideas into reality. Our team is ready
                        to help you build something amazing.
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

export default PortfolioCTASection;