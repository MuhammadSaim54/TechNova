import ContactInfoData from "./ContactInfoData";
import ContactMap from "./ContactMap.webp";
import { Button } from "@/src/components/ui/button.jsx";
import { Input } from "@/src/components/ui/input.jsx";
import { Textarea } from "@/src/components/ui/textarea.jsx";

function ContactInfoSection() {
    return (
        <section
            className="
                p-8 px-16

                max-[1024px]:p-8
                max-[480px]:p-4
            "
        >

            {/* ================= Contact Cards ================= */}

            <div
                className="
                    grid
                    grid-cols-3

                    gap-4
                    mb-8

                    max-[768px]:grid-cols-1
                "
            >
                {ContactInfoData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="
                                flex
                                items-center

                                gap-4
                                p-5

                                border
                                border-(--Section-line)

                                rounded-xl

                                bg-(--Background)
                            "
                        >

                            {/* Icon */}

                            <div
                                className="
                                    flex
                                    justify-center
                                    items-center
                                    shrink-0

                                    w-14
                                    h-14

                                    rounded-full

                                    bg-[rgba(37,99,235,0.08)]
                                    text-(--Primary)
                                "
                            >
                                <Icon
                                    className="w-6 h-6"
                                />
                            </div>


                            {/* Content */}

                            <div
                                className="
                                    flex
                                    flex-col

                                    gap-1
                                "
                            >
                                <h3
                                    className="
                                        text-base
                                        font-semibold
                                    "
                                >
                                    {item.title}
                                </h3>

                                <h4
                                    className="
                                        text-base
                                        font-medium
                                    "
                                >
                                    {item.value}
                                </h4>

                                <p
                                    className="
                                        text-[0.9rem]
                                        text-(--Text-Muted)
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    );
                })}
            </div>


            {/* ================= Form + Map ================= */}

            <div
                className="
                    grid
                    grid-cols-2

                    gap-8

                    max-[768px]:grid-cols-1
                "
            >

                {/* ================= Left: Form ================= */}

                <div className="flex-1">

                    <form
                        className="
                            flex
                            flex-col

                            gap-4
                        "
                    >

                        <Input
                            type="text"
                            placeholder="Your Name"
                            variant="default"
                            size="lg"
                        />

                        <Input
                            type="email"
                            placeholder="Your Email"
                            variant="default"
                            size="lg"
                        />

                        <Input
                            type="text"
                            placeholder="Subject"
                            variant="default"
                            size="lg"
                        />

                        <Textarea
                            rows="6"
                            placeholder="Your Message"
                            variant="default"
                            size="lg"
                        />
                        <Button
                            type="submit"
                            variant="default"
                            size="lg"
                            className="
                                h-auto
                                w-fit

                                px-[1.8rem]
                                py-[0.9rem]

                                rounded-xl

                                border-(--Primary)

                                text-[0.95rem]
                                font-medium

                                hover:bg-primary/80

                                active:translate-y-0
                                active:scale-[0.98]

                                transition-all
                                duration-300
                                ease-out

                                cursor-pointer

                                max-[480px]:w-full
                            "
                        >
                            Send Message
                        </Button>

                    </form>

                </div>


                {/* ================= Right: Map ================= */}

                <div
                    className="
                        flex
                        justify-center
                        items-center

                        order-2

                        max-[768px]:order-2
                    "
                >
                    <img
                        src={ContactMap}
                        alt="Office Location"
                        loading="lazy"

                        className="
                            block

                            w-full
                            max-w-xl

                            h-auto

                            rounded-2xl

                            object-cover
                        "
                    />
                </div>

            </div>

        </section >
    );
}

export default ContactInfoSection;