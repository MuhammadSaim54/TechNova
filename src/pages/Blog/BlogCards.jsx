import { ArrowRight } from "lucide-react";
import BlogData from "./BlogData.js";

function BlogCards() {
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
            {BlogData.map((data) => (
                <article
                    key={data.id}
                    className="
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
                    "
                >
                    {/* Image */}
                    <img
                        src={data.img}
                        alt={`${data.title} blog`}
                        loading="lazy"
                        className="
                            block
                            w-full
                            max-w-108

                            rounded-xl
                        "
                    />

                    {/* Details */}
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
                                max-w-100

                                text-[0.95rem]
                                text-(--Text-Muted)

                                max-[370px]:text-[0.75rem]
                            "
                        >
                            {data.description}
                        </p>

                        {/* Learn More */}
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
                </article>
            ))}
        </section>
    );
}

export default BlogCards;