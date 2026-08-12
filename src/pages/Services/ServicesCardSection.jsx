import { ArrowRight } from "lucide-react";
import ServicesData from "./ServicesData.js";


function ServicesCardSection() {
    return (
        <div
            className="
                flex
                justify-center
                items-stretch
                flex-wrap

                gap-8

                mx-16
                mt-8

                max-[768px]:mx-8
            "
        >

            {ServicesData.map((Service) => {
                return (
                    <div
                        key={Service.id}
                        className="
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

                            max-[768px]:
                                gap-[0.65rem]
                                p-[1.15rem]
                        "
                    >

                        {/* ================= Icon ================= */}

                        <div
                            className={`
                                flex
                                justify-center
                                items-center

                                p-2
                                rounded-xl

                                ${
                                    Service.id === 1
                                        ? "bg-(--Primary)"
                                        : ""
                                }
                            `}
                        >
                            <Service.icon
                                size={40}
                                color={Service.iconColor}
                                strokeWidth={1.5}
                                className="
                                    w-10
                                    h-10

                                    max-[768px]:w-9
                                    max-[768px]:h-9
                                "
                            />
                        </div>


                        {/* ================= Title ================= */}

                        <span
                            className="
                                text-2xl
                                font-medium

                                max-[768px]:text-xl
                            "
                        >
                            {Service.title}
                        </span>


                        {/* ================= Description ================= */}

                        <p
                            className="
                                text-[0.95rem]
                                text-(--Text-Muted)

                                max-w-[15rem]

                                max-[768px]:text-[0.85rem]
                            "
                        >
                            {Service.description}
                        </p>


                        {/* ================= Action ================= */}

                        <div className="mt-4">

                            <button
                                type="button"
                                className="
                                    group

                                    flex
                                    justify-center
                                    items-center

                                    gap-1

                                    border-0
                                    bg-transparent

                                    text-(--Primary)

                                    cursor-pointer
                                "
                            >
                                Learn More

                                <ArrowRight
                                    size={16}
                                    color="#0051fb"
                                    className="
                                        transition-transform
                                        duration-300
                                        ease-out

                                        group-hover:translate-x-1
                                    "
                                />
                            </button>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}

export default ServicesCardSection;