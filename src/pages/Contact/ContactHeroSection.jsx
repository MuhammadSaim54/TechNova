function ContactHeroSection() {
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
                    OUR CONTACT
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
                    Let's Work Together
                </h2>
            </div>


            {/* ================= Description ================= */}

            <div>
                <p
                    className="
                        w-full
                        max-w-120

                        text-center

                        font-['Manrope']
                        text-(--Text-Muted)

                        max-[768px]:text-[0.85rem]
                        max-[768px]:text-left
                    "
                >
                    Have a project in mind? Get in touch with us and let's
                    create something amazing together.
                </p>
            </div>

        </section>
    );
}

export default ContactHeroSection;