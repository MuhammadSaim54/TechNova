function PortfolioHeroSection() {
    return (
        <section
            className="
                flex
                flex-col
                justify-center
                items-center

                p-6
                gap-3

                max-[768px]:items-start
            "
        >

            {/* ================= Badge ================= */}

            <div>
                <span
                    className="
                        font-['Manrope']
                        font-bold
                        text-(--Primary)

                        max-[768px]:text-[0.85rem]
                    "
                >
                    OUR PORTFOLIO
                </span>
            </div>


            {/* ================= Heading ================= */}

            <div>
                <h2
                    className="
                        text-[2.75rem]
                        font-semibold

                        max-[768px]:text-[2.25rem]
                    "
                >
                    Our Latest Work
                </h2>
            </div>


            {/* ================= Description ================= */}

            <div>
                <p
                    className="
                        w-full
                        font-['Manrope']
                        text-(--Text-Muted)

                        max-w-120

                        text-center

                        max-[768px]:text-[0.85rem]
                        max-[768px]:text-left
                    "
                >
                    Here are some of the projects we've worked on, We build
                    solutions that make an impact.
                </p>
            </div>

        </section>
    );
}

export default PortfolioHeroSection;