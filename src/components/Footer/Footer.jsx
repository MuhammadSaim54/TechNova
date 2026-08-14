import { NavLink } from "react-router-dom";
import FooterData from "./FooterData";

import Logo from "./TechNova-Logo.png";

function Footer() {
    return (
        <footer
            className="
                w-full
                bg-(--Background)
                border-t
                border-(--Section-line)

                pt-20
                pb-8

                max-[768px]:pt-16
                max-[576px]:pt-12
                max-[576px]:pb-6
            "
        >
            <div className="w-full">

                {/* =====================================================
                    FOOTER TOP
                ===================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1

                        gap-10
                        px-6

                        md:grid-cols-[1.5fr_1fr_1fr_1fr]
                        md:gap-12
                        md:px-4
                    "
                >

                    {/* ================= BRAND ================= */}

                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            justify-start

                            text-left
                        "
                    >
                        <NavLink
                            to="/"
                            className="inline-flex mb-5"
                        >
                            <img
                                src={Logo}
                                alt="TechNova Logo"
                                className="
                                    block
                                    h-10
                                    w-auto
                                "
                            />
                        </NavLink>

                        <p
                            className="
                                max-w-[24rem]

                                text-(--Text-Muted)
                                leading-[1.8]

                                
                                max-[768px]:max-w-[28rem]

                                
                                max-[576px]:text-[0.95rem]
                                max-[576px]:leading-[1.7]
                            "
                        >
                            We build innovative digital products that help
                            businesses grow, scale, and succeed in the modern
                            digital world.
                        </p>
                    </div>


                    {/* ================= QUICK LINKS ================= */}

                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            text-left
                        "
                    >
                        <h3
                            className="
                                mb-6

                                text-[1.15rem]
                                font-semibold
                                text-(--Button-Text)

                                
                                max-[576px]:mb-4
                                max-[576px]:text-[1.05rem]
                            "
                        >
                            Quick Links
                        </h3>

                        <ul
                            className="
                                m-0
                                p-0
                                list-none

                                space-y-3
                            "
                        >
                            {FooterData.quickLinks.map((link) => (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.path}
                                        className="
                                            block
                                            no-underline

                                            text-(--Text-Muted)
                                            text-[0.95rem]

                                            transition-colors
                                            duration-300

                                            hover:text-(--Primary)
                                        "
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* ================= SERVICES ================= */}

                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            text-left
                        "
                    >
                        <h3
                            className="
                                mb-6

                                text-[1.15rem]
                                font-semibold
                                text-(--Button-Text)

                                
                                max-[576px]:mb-4
                                max-[576px]:text-[1.05rem]
                            "
                        >
                            Services
                        </h3>

                        <ul
                            className="
                                m-0
                                p-0
                                list-none

                                space-y-3
                            "
                        >
                            {FooterData.services.map((service) => (
                                <li
                                    key={service.id}
                                    className="
                                        block
                                        cursor-pointer

                                        text-(--Text-Muted)
                                        text-[0.95rem]

                                        transition-colors
                                        duration-300

                                        hover:text-(--Primary)
                                    "
                                >
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* ================= CONTACT ================= */}

                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            text-left
                        "
                    >
                        <h3
                            className="
                                mb-6

                                text-[1.15rem]
                                font-semibold
                                text-(--Button-Text)

                                
                                max-[576px]:mb-4
                                max-[576px]:text-[1.05rem]
                            "
                        >
                            Contact
                        </h3>

                        <ul
                            className="
                                m-0
                                p-0
                                list-none

                                space-y-4
                            "
                        >
                            {FooterData.contact.map((item) => (
                                <li
                                    key={item.id}
                                    className="
                                        block
                                        text-left
                                        text-(--Text-Muted)
                                        text-[0.95rem]
                                    "
                                >
                                    <strong
                                        className="
                                            block
                                            mb-1

                                            font-semibold
                                            text-(--Button-Text)
                                        "
                                    >
                                        {item.title}
                                    </strong>

                                    <span
                                        className="
                                            block

                                            text-(--Text-Muted)
                                            leading-[1.6]
                                        "
                                    >
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>


                {/* =====================================================
                    DIVIDER
                ===================================================== */}

                <div
                    className="
                        w-full
                        h-px

                        mt-12
                        mb-8

                        bg-(--Section-line)

                        max-[576px]:mt-10
                            
                        max-[576px]:mb-6
                    "
                />


                {/* =====================================================
                    FOOTER BOTTOM
                ===================================================== */}

                <div
                    className="
                        flex
                        flex-row

                        items-center
                        justify-center

                        px-4

                        
                        max-[768px]:flex-col
                        max-[768px]:justify-between
                        max-[768px]:gap-6
                        max-[768px]:text-center

                        max-[576px]:px-6
                    "
                >

                    {/* Copyright */}

                    <p
                        className="
                            text-(--Text-Muted)
                            text-[0.95rem]

                            max-[576px]:text-[0.9rem]
                        "
                    >
                        © {new Date().getFullYear()} TechNova.
                        All Rights Reserved.
                    </p>


                    {/* Social Icons */}

                    <div
                        className="
                            flex
                            items-center
                            gap-3

                            max-[576px]:gap-[0.6rem]
                        "
                    >
                        {FooterData.socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={
                                        social.title || "Social media"
                                    }
                                    className="
                                        flex
                                        justify-center
                                        items-center

                                        w-[42px]
                                        h-[42px]

                                        border
                                        border-(--Section-line)

                                        rounded-full

                                        text-(--Button-Text)

                                        transition-all
                                        duration-300
                                        ease-out

                                        hover:bg-(--Primary)
                                        hover:border-(--Primary)
                                        hover:text-white
                                        hover:-translate-y-1

                                        max-[576px]:w-[38px]
                                        max-[576px]:h-[38px]
                                    "
                                >
                                    <Icon
                                        className="
                                            w-[18px]
                                            h-[18px]

                                            
                                            max-[576px]:w-4
                                            max-[576px]:h-4
                                        "
                                    />
                                </a>
                            );
                        })}
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;