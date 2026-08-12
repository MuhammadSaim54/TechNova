import Data from "./StorySectionData.js";


function AboutStorySection() {
    return (
        <section
            className="
                grid
                grid-cols-2

                items-center

                gap-20
                p-6

                max-[768px]:grid-cols-1
                max-[768px]:gap-8
                max-[768px]:items-stretch
            "
        >

            {/* ================= Story Detail ================= */}

            <div>
                <div>
                    <h2
                        className="
                            text-[2.5rem]

                            max-[480px]:text-[2rem]
                            max-[314px]:text-[1.5rem]
                        "
                    >
                        Our Story
                    </h2>
                </div>

                <div
                    className="
                        mt-4
                        max-w-152
                        text-(--Text-Muted)

                        max-[480px]:
                            max-w-120
                            text-[0.95rem]

                        max-[314px]:
                            max-w-[30rem]
                            text-[0.75rem]
                    "
                >
                    <p>
                        TechNova helps businesses grow through modern digital
                        solutions. Our focus is on creating high-quality products,
                        building strong client relationships, and delivering
                        results that make a lasting impact.
                    </p>
                </div>
            </div>


            {/* ================= Story Cards ================= */}

            <div
                className="
                    grid
                    grid-cols-2
                    gap-3

                    items-stretch
                    justify-center

                    max-[768px]:grid-cols-1
            "
            >

                {Data.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.id}
                            className={`
                                flex
                                flex-row
                                justify-center
                                items-center

                                gap-2

                                py-11
                                px-6

                                shadow-[0_0_6px_#6060609c]

                                rounded-xl

                                max-[768px]:
                                    justify-start
                                    items-center

                                ${card.id === "2"
                                    ? `
                                            col-start-2
                                            row-span-2

                                            max-[768px]:
                                                col-start-1
                                                row-start-1
                                                row-span-1
                                        `
                                    : ""
                                }
                            `}
                        >

                            {/* Icon */}

                            <div className="shrink-0">
                                <Icon
                                    size={38}
                                    color="#0051fb"
                                />
                            </div>


                            {/* Details */}

                            <div>
                                <span
                                    className="
                                        text-2xl
                                        font-semibold

                                        max-[768px]:text-2xl
                                    "
                                >
                                    {card.title}
                                </span>

                                <p
                                    className="
                                        text-(--Text-Muted)
                                    "
                                >
                                    {card.description}
                                </p>
                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default AboutStorySection;