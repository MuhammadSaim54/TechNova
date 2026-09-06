import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import NavLinks from "./NavLinks";
import Logo from "./TechNova-Logo.webp";

import GetStartedDialog from "../auth/GetStartedDialog.jsx";

import { buttonVariants } from "@/src/components/ui/button";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();

    return (
        <header
            className="
                sticky top-0 z-999
                w-full
                bg-(--Background)
                border-b border-(--Section-line)
                max-[480px]:px-1
            "
        >

            {/* ================= Navbar Container ================= */}

            <div
                className="
                    Container
                    flex items-center justify-between
                    h-22
                    p-4

                    max-[768px]:h-20
                "
            >

                {/* ================= Logo ================= */}

                <NavLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center"
                >
                    <img
                        src={Logo}
                        alt="TechNova Logo"
                        className={`
                            h-44
                            w-auto

                            max-[768px]:h-28

                            ${theme === "dark" ? "brightness-0 invert" : ""}
                        `}
                    />
                </NavLink>


                {/* ================= Navigation Menu ================= */}

                <nav
                    className={`
                        flex items-center gap-10

                        max-[992px]:fixed
                        max-[992px]:top-0
                        max-[992px]:z-1001

                        max-[992px]:flex-col
                        max-[992px]:items-start
                        max-[992px]:justify-start

                        max-[992px]:w-[320px]
                        max-[992px]:max-w-full
                        max-[992px]:h-screen

                        max-[992px]:gap-[1.8rem]
                        max-[992px]:p-8
                        max-[992px]:mr-0

                        max-[992px]:bg-background

                        max-[992px]:transition-[right]
                        max-[992px]:duration-300
                        max-[992px]:ease-in-out

                        ${
                            menuOpen
                                ? "max-[992px]:right-0"
                                : "max-[992px]:-right-full"
                        }
                    `}
                >

                    {/* ================= Mobile Header ================= */}

                    <div
                        className="
                            hidden

                            max-[992px]:flex
                            max-[992px]:w-full
                            max-[992px]:items-center
                            max-[992px]:justify-center
                            max-[992px]:gap-31
                            max-[992px]:mb-8
                        "
                    >

                        <div className="flex items-center justify-between w-full">

                            <img
                                src={Logo}
                                alt="TechNova Logo"
                                className={`
                                    h-28

                                    ${theme === "dark"
                                        ? "brightness-0 invert"
                                        : ""
                                    }
                                `}
                            />

                            <button
                                type="button"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-center

                                    bg-transparent
                                    border-0

                                    cursor-pointer
                                "
                            >
                                <X className="w-7 h-7" />
                            </button>

                        </div>

                    </div>


                    {/* ================= Navigation Links ================= */}

                    {NavLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => `
                                group
                                relative

                                text-(--Text-Muted)
                                text-base
                                font-medium
                                no-underline

                                transition-colors
                                duration-300
                                ease-in-out

                                hover:text-(--Primary)

                                max-[992px]:text-[1.05rem]
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    {link.title}

                                    {/* Active / Hover underline */}

                                    <span
                                        className={`
                                            absolute
                                            left-0
                                            bottom-[-1.2rem]

                                            h-0.5

                                            bg-(--Primary)

                                            transition-all
                                            duration-300

                                            max-[992px]:-bottom-2

                                            ${
                                                isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }
                                        `}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}


                    {/* ================= Mobile Theme Toggle ================= */}

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="
                            hidden

                            max-[992px]:flex
                            items-center
                            justify-between

                            w-full
                            mt-2
                            px-4
                            py-3

                            rounded-[14px]

                            bg-secondary
                            text-foreground

                            border
                            border-border

                            cursor-pointer
                        "
                    >

                        <span className="flex items-center gap-3">

                            {theme === "light" ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}

                            {theme === "light"
                                ? "Dark Mode"
                                : "Light Mode"
                            }

                        </span>


                        <span className="text-sm text-muted-foreground">
                            {theme === "light" ? "🌙" : "☀️"}
                        </span>

                    </button>


                    {/* ================= Mobile CTA ================= */}

                    <button
                        type="button"
                        onClick={() => {
                            setMenuOpen(false);
                            setDialogOpen(true);
                        }}
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                            className: `
                                !hidden
                                max-[992px]:!flex

                                w-full

                                mt-4

                                gap-2

                                rounded-[14px]

                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)]

                                group
                            `,
                        })}
                    >
                        Get Started

                        <ArrowRight
                            className="
                                w-4.5
                                h-4.5

                                transition-transform
                                duration-300
                                ease-in-out

                                group-hover:translate-x-1.25
                            "
                        />
                    </button>

                </nav>


                {/* ================= Theme Toggle ================= */}

                <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                        flex
                        items-center
                        justify-center

                        w-11
                        h-11

                        rounded-full

                        bg-secondary
                        text-foreground

                        border
                        border-border

                        cursor-pointer

                        transition-all
                        duration-300
                        ease-in-out

                        hover:-translate-y-0.5
                        hover:bg-accent

                        max-[992px]:hidden
                    "
                    aria-label="Toggle theme"
                >

                    {theme === "light" ? (
                        <Moon className="w-5 h-5" />
                    ) : (
                        <Sun className="w-5 h-5" />
                    )}

                </button>


                {/* ================= Desktop CTA ================= */}

                <button
                    type="button"
                    onClick={() => setDialogOpen(true)}
                    className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: `
                            max-[992px]:hidden

                            gap-2

                            rounded-[14px]

                            transition-all
                            duration-300
                            ease-in-out

                            hover:-translate-y-0.5
                            hover:shadow-[0_12px_30px_rgba(37,99,251,0.25)]

                            group
                        `,
                    })}
                >
                    Get Started

                    <ArrowRight
                        className="
                            w-4.5
                            h-4.5

                            transition-transform
                            duration-300
                            ease-in-out

                            group-hover:translate-x-1.25
                        "
                    />
                </button>


                {/* ================= Hamburger ================= */}

                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="
                        hidden
                        max-[992px]:flex
                        items-center
                        justify-center

                        bg-transparent
                        border-0

                        cursor-pointer
                    "
                >
                    <Menu
                        className="
                            w-7.5
                            h-7.5

                            text-(--Button-Text)
                        "
                    />
                </button>

            </div>


            {/* ================= Get Started Dialog ================= */}

            <GetStartedDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
            />


            {/* ================= Overlay ================= */}

            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="
                        fixed
                        inset-0
                        z-1000

                        bg-black/35
                        backdrop-blur-[2px]
                    "
                />
            )}

        </header>
    );
}

export default Navbar;