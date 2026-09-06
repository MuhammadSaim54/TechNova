import {
    FaFacebook,
    FaXTwitter,
    FaGithub,
} from "react-icons/fa6";

import teamdata from "./teamdata.js";

import {
    Card,
} from "@/src/components/ui/card.jsx";


function TeamCardsSection() {
    return (
        <section
            className="
                flex
                justify-center
                items-stretch
                flex-wrap

                w-full

                gap-5
                p-6

                max-[768px]:gap-4
                max-[768px]:p-4

                max-[480px]:
                flex-row
                items-center
            "
        >

            {teamdata.map((data) => (
                <Card
                    key={data.id}
                    variant="default"
                    size="default"
                    className="
                        flex
                        flex-col
                        justify-center
                        items-start

                        w-[20rem]
                        shrink-0

                        border
                        border-(--Section-line)

                        rounded-xl

                        overflow-hidden

                        cursor-pointer

                        transition-all
                        duration-300
                        ease-out

                        hover:border-(--Primary)
                        hover:-translate-y-1.5
                        hover:shadow-[0_0_10px_var(--Glow)]

                        max-[768px]:
                        w-full
                        max-w-88

                        max-[480px]:
                        w-full
                        max-w-88
                    "
                >

                    {/* ================= Image ================= */}

                    <img
                        src={data.img}
                        alt={`${data.name} profile`}
                        loading="lazy"

                        className="
                            block
                            w-full
                            h-auto
                        "
                    />


                    {/* ================= Team Detail ================= */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-center
                            items-start

                            mx-6
                            my-4

                            gap-1
                            font-normal

                            max-[480px]:m-4
                        "
                    >

                        <h3 className="font-semibold">
                            {data.name}
                        </h3>


                        <p
                            className="
                                font-['Manrope']
                                text-(--Text-Muted)

                                max-[480px]:text-[0.9rem]
                            "
                        >
                            {data.role}
                        </p>


                        {/* ================= Social Icons ================= */}

                        <div
                            className="
                                flex
                                justify-center
                                items-center

                                gap-2

                                mt-3

                                max-[480px]:flex-wrap
                            "
                        >

                            <a
                                href="#"
                                aria-label={`${data.name} Facebook`}
                                className="
                                    flex
                                    justify-center
                                    items-center

                                    w-9.5
                                    h-9.5

                                    bg-transparent

                                    border
                                    border-(--Section-line)

                                    rounded-full

                                    text-(--Button-Text)

                                    transition-all
                                    duration-300
                                    ease-in-out

                                    hover:bg-(--Primary)
                                    hover:border-(--Primary)
                                    hover:text-white
                                    hover:shadow-[0_0_10px_var(--Glow)]
                                "
                            >
                                <FaFacebook className="w-4.5 h-4.5" />
                            </a>


                            <a
                                href="#"
                                aria-label={`${data.name} GitHub`}
                                className="
                                    flex
                                    justify-center
                                    items-center

                                    w-9.5
                                    h-9.5

                                    bg-transparent

                                    border
                                    border-(--Section-line)

                                    rounded-full

                                    text-(--Button-Text)

                                    transition-all
                                    duration-300
                                    ease-in-out

                                    hover:bg-(--Primary)
                                    hover:border-(--Primary)
                                    hover:text-white
                                    hover:shadow-[0_0_10px_var(--Glow)]
                                "
                            >
                                <FaGithub className="w-4.5 h-4.5" />
                            </a>


                            <a
                                href="#"
                                aria-label={`${data.name} X`}
                                className="
                                    flex
                                    justify-center
                                    items-center

                                    w-9.5
                                    h-9.5

                                    bg-transparent

                                    border
                                    border-(--Section-line)

                                    rounded-full

                                    text-(--Button-Text)

                                    transition-all
                                    duration-300
                                    ease-in-out

                                    hover:bg-(--Primary)
                                    hover:border-(--Primary)
                                    hover:text-white
                                    hover:shadow-[0_0_10px_var(--Glow)]
                                "
                            >
                                <FaXTwitter className="w-4.5 h-4.5" />
                            </a>

                        </div>

                    </div>

                </Card>
            ))}
        </section>
    );
}

export default TeamCardsSection;