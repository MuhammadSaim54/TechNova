import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { buttonVariants } from "@/src/components/ui/button";

function CTASection() {
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
                border-(--Section-line)

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
                        Have a project in mind?
                    </h2>
                </div>


                {/* Description */}

                <div>
                    <p
                        className="
                            max-w-[29rem]

                            mt-2

                            font-['Manrope']
                            text-(--Text-Muted)

                            
                            max-[700px]:max-w-[25rem]
                            max-[700px]:text-[0.85rem]
                        "
                    >
                        Let's turn your ideas into reality. Our team is ready to help you achieve your goals.
                    </p>
                </div>

            </div>


            {/* ================= CTA Button ================= */}

            <div>
                <NavLink
                    to="/contact"
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
                </NavLink>
            </div>

        </section>
    );
}

export default CTASection;