function ServicesHeroSection() {
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
                        font-bold
                        font-['Manrope']
                        text-(--Primary)

                        max-[768px]:text-[0.85rem]
                    "
                >
                    OUR SERVICES
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
                    Services That Drive Results
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
                    We provide a wide range of digital services to help your
                    buisness to grow faster and reach the right audience.
                </p>
            </div>

        </section>
    );
}

export default ServicesHeroSection;