function TeamHeroSection() {
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
                    OUR TEAM
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
                    Meet Our Experts
                </h2>
            </div>


            {/* ================= Description ================= */}

            <div>
                <p
                    className="
                        w-full
                        max-w-[30rem]

                        text-center

                        font-['Manrope']
                        text-(--Text-Muted)

                        max-[768px]:text-[0.85rem]
                        max-[768px]:text-left
                    "
                >
                    We are a group of passionate people who love what we do.
                </p>
            </div>

        </section>
    );
}

export default TeamHeroSection;