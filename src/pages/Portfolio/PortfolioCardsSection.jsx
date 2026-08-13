import PortfolioData from "./portfoliodata.js";


function PortfolioCardsSection() {
    return (
        <section
            className="
                flex
                justify-center
                items-center
                flex-wrap

                gap-5
                m-6
            "
        >

            {PortfolioData.map((data) => (
                <div
                    key={data.id}
                    className={`
                        ${data.className}

                            border
                            border-(--Section-line)
                            rounded-xl
                            overflow-hidden

                            transition-all
                            duration-300
                            ease-out

                            cursor-pointer

                            hover:-translate-y-1
                            hover:border-(--Primary)
                            hover:shadow-[0_8px_25px_rgba(0,81,251,0.12)]
                    `}
                >

                    {/* ================= Image ================= */}

                    <img
                        src={data.img}
                        alt={`${data.title} portfolio project`}
                        loading="lazy"
                        className="
                            block
                            w-full
                            max-w-96

                            rounded-t-xl
                        "
                    />


                    {/* ================= Details ================= */}

                    <div className="p-4">

                        <h3
                            className="
                                font-semibold

                                max-[370px]:text-[0.85rem]
                            "
                        >
                            {data.title}
                        </h3>

                        <p
                            className="
                                mt-2

                                text-[0.95rem]
                                text-(--Text-Muted)

                                max-[370px]:text-[0.75rem]
                            "
                        >
                            {data.description}
                        </p>

                    </div>

                </div>
            ))}

        </section>
    );
}

export default PortfolioCardsSection;