import {
    ArrowUpRight,
    Code2,
    Palette,
    Smartphone,
    Layers3,
    Globe2,
    BarChart3,
    Sparkles,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/src/components/ui/dialog";

import { NavLink } from "react-router-dom";

const services = [
    {
        number: "01",
        icon: Globe2,
        title: "Web Development",
        description:
            "High-performance, responsive websites engineered for speed, scalability, and seamless user experiences.",
    },
    {
        number: "02",
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Thoughtful interfaces and user experiences designed to make digital products intuitive, engaging, and memorable.",
    },
    {
        number: "03",
        icon: Smartphone,
        title: "App Development",
        description:
            "Modern mobile applications built with clean architecture, smooth interactions, and scalable technology.",
    },
    {
        number: "04",
        icon: Layers3,
        title: "Product Design",
        description:
            "End-to-end product experiences combining strategy, visual design, usability, and functionality.",
    },
    {
        number: "05",
        icon: Code2,
        title: "Custom Solutions",
        description:
            "Tailored digital solutions built around your unique business requirements, workflows, and objectives.",
    },
    {
        number: "06",
        icon: BarChart3,
        title: "Digital Strategy",
        description:
            "Practical digital strategies that help businesses improve their presence, reach customers, and grow.",
    },
];


function ServicesDialog({ open, onOpenChange }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent
                className="
                    w-[calc(100%-2rem)]
                    max-w-5xl

                    max-h-[88vh]
                    overflow-y-auto

                    p-0

                    gap-0

                    rounded-2xl

                    border
                    border-(--Section-line)

                    bg-(--Background)

                    shadow-[0_25px_80px_rgba(0,0,0,0.25)]
                "
            >

                {/* ================= Header ================= */}

                <DialogHeader
                    className="
                        relative

                        p-7
                        pb-6

                        border-b
                        border-(--Section-line)

                        max-[640px]:p-5
                    "
                >

                    {/* Small Label */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2

                            mb-3
                        "
                    >
                        <Sparkles
                            className="
                                w-4
                                h-4

                                text-(--Primary)
                            "
                        />

                        <span
                            className="
                                text-xs
                                font-semibold

                                tracking-[0.12em]
                                uppercase

                                text-(--Primary)
                            "
                        >
                            What We Do
                        </span>
                    </div>


                    {/* Title */}

                    <DialogTitle
                        className="
                            text-3xl
                            font-semibold
                            tracking-tight

                            text-(--Text)

                            max-[640px]:text-2xl
                        "
                    >
                        Digital solutions built to{" "}
                        <span className="text-(--Primary)">
                            move your business forward.
                        </span>
                    </DialogTitle>


                    {/* Description */}

                    <DialogDescription
                        className="
                            max-w-2xl

                            mt-3

                            text-sm
                            leading-7

                            text-(--Text-Muted)
                        "
                    >
                        From strategy and design to development and
                        optimization, we create digital experiences that
                        solve real business problems.
                    </DialogDescription>

                </DialogHeader>


                {/* ================= Services Grid ================= */}

                <div
                    className="
                        grid
                        grid-cols-2

                        max-[640px]:grid-cols-1
                    "
                >

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <div
                                key={service.number}
                                className={`
                                    group
                                    relative

                                    p-6

                                    border-(--Section-line)

                                    transition-all
                                    duration-300
                                    ease-out

                                    hover:bg-(--Secondary)

                                    ${index % 2 === 0
                                        ? "border-r"
                                        : ""
                                    }

                                    ${index < 4
                                        ? "border-b"
                                        : ""
                                    }

                                    max-[640px]:border-r-0
                                    max-[640px]:border-b

                                    max-[640px]:last:border-b-0
                                `}
                            >

                                {/* Top Row */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    {/* Icon */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-center

                                            w-11
                                            h-11

                                            rounded-xl

                                            bg-(--Secondary)

                                            border
                                            border-(--Section-line)

                                            transition-all
                                            duration-300

                                            group-hover:bg-(--Primary)
                                            group-hover:border-(--Primary)
                                        "
                                    >
                                        <Icon
                                            className="
                                                w-5
                                                h-5

                                                text-(--Primary)

                                                transition-colors
                                                duration-300

                                                group-hover:text-white
                                            "
                                        />
                                    </div>


                                    {/* Number */}

                                    <span
                                        className="
                                            text-xs
                                            font-semibold

                                            tracking-wider

                                            text-(--Text-Muted)

                                            opacity-60
                                        "
                                    >
                                        {service.number}
                                    </span>

                                </div>


                                {/* Content */}

                                <div className="mt-5">

                                    <h3
                                        className="
                                            text-lg
                                            font-semibold

                                            text-(--Text)

                                            transition-colors
                                            duration-300

                                            group-hover:text-(--Primary)
                                        "
                                    >
                                        {service.title}
                                    </h3>


                                    <p
                                        className="
                                            mt-2

                                            text-sm
                                            leading-6

                                            text-(--Text-Muted)
                                        "
                                    >
                                        {service.description}
                                    </p>

                                </div>


                                {/* Arrow */}

                                <div
                                    className="
                                        absolute
                                        right-6
                                        bottom-6

                                        flex
                                        items-center
                                        justify-center

                                        w-8
                                        h-8

                                        rounded-full

                                        opacity-0

                                        translate-y-2

                                        transition-all
                                        duration-300

                                        group-hover:opacity-100
                                        group-hover:translate-y-0

                                        bg-(--Primary)
                                        text-white
                                    "
                                >
                                    <ArrowUpRight
                                        className="
                                            w-4
                                            h-4
                                        "
                                    />
                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* ================= Footer ================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4

                        p-6

                        bg-(--Secondary)

                        max-[640px]:flex-col
                        max-[640px]:items-start
                    "
                >

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold

                                text-(--Text)
                            "
                        >
                            Have a project in mind?
                        </p>

                        <p
                            className="
                                mt-1

                                text-xs

                                text-(--Text-Muted)
                            "
                        >
                            Let&apos;s build something impactful together.
                        </p>

                    </div>


                    <NavLink
                        to="/services"
                        onClick={() => onOpenChange(false)}
                        className="
                                flex
                                items-center
                                gap-2

                                px-5
                                py-2.5

                                rounded-xl

                                bg-(--Primary)
                             text-white

                                text-sm
                                font-semibold

                                border
                                border-(--Primary)

                                no-underline

                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)]

                                max-[640px]:w-full
                                max-[640px]:justify-center
                            "
                    >
                        View

                        <ArrowUpRight
                            className="
                                w-4
                                h-4
                            "
                        />
                    </NavLink>

                </div>

            </DialogContent>

        </Dialog>
    );
}

export default ServicesDialog;