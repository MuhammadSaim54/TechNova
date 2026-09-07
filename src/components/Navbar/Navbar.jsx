import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import NavLinks from "./NavLinks";
import Logo from "./TechNova-Logo.webp";

import GetStartedDialog from "../auth/GetStartedDialog.jsx";

import { buttonVariants } from "@/src/components/ui/button";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerClose,
    DrawerTrigger,
} from "@/src/components/ui/drawer";

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
            <div
                className="
                    Container
                    flex items-center justify-between
                    h-22
                    p-4
                    max-[768px]:h-20
                "
            >
                {/* Logo */}
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
                            ${
                                theme === "dark"
                                    ? "brightness-0 invert"
                                    : ""
                            }
                        `}
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <nav
                    className="
                        flex
                        items-center
                        gap-10

                        max-[992px]:hidden
                    "
                >
                    {NavLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className="
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
                            "
                        >
                            {({ isActive }) => (
                                <>
                                    {link.title}

                                    <span
                                        className={`
                                            absolute
                                            left-0
                                            bottom-[-1.2rem]
                                            h-0.5
                                            bg-(--Primary)
                                            transition-all
                                            duration-300

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
                </nav>

                {/* Desktop Theme Toggle */}
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

                {/* Desktop CTA */}
                <button
                    type="button"
                    onClick={() => setDialogOpen(true)}
                    className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: `
                            max-[992px]:hidden
                            gap-2
                            border-none
                            rounded-[14px]
                            cursor-pointer
                            transition-all
                            duration-300
                            ease-in-out
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

                {/* Mobile Drawer */}
                <Drawer
                    open={menuOpen}
                    onOpenChange={setMenuOpen}
                    swipeDirection="right"
                >
                    {/* Hamburger */}
                    <DrawerTrigger
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
                    </DrawerTrigger>

                    {/* Drawer Content */}
                    <DrawerContent
                        className="
                            !z-[1001]
                            w-[320px]
                            max-w-[85vw]
                            h-screen
                            max-h-screen
                            mt-0
                            rounded-none
                            border-l
                            border-(--Section-line)
                            bg-(--Background)
                            p-0
                        "
                    >
                        {/* Drawer Header */}
                        <DrawerHeader
                            className="
                                flex
                                flex-row
                                items-center
                                justify-between
                                w-full
                                p-8
                                pb-6
                            "
                        >
                            {/* Logo */}
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center"
                            >
                                <img
                                    src={Logo}
                                    alt="TechNova Logo"
                                    className={`
                                        h-28
                                        w-auto
                                        ${
                                            theme === "dark"
                                                ? "brightness-0 invert"
                                                : ""
                                        }
                                    `}
                                />
                            </NavLink>

                            {/* Close */}
                            <DrawerClose
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-secondary
                                    text-foreground
                                    border
                                    border-border
                                    cursor-pointer
                                    transition-all
                                    duration-300
                                    hover:bg-accent
                                    hover:-translate-y-0.5
                                "
                            >
                                <X className="w-5 h-5" />
                            </DrawerClose>
                        </DrawerHeader>

                        {/* Mobile Navigation */}
                        <div
                            className="
                                flex
                                flex-col
                                flex-1
                                gap-7
                                px-8
                                pb-8
                            "
                        >
                            {/* Navigation Links */}
                            <nav
                                className="
                                    flex
                                    flex-col
                                    gap-6
                                "
                            >
                                {NavLinks.map((link) => (
                                    <NavLink
                                        key={link.id}
                                        to={link.path}
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                        className={({ isActive }) => `
                                            group
                                            relative
                                            w-fit
                                            text-[1.05rem]
                                            font-medium
                                            no-underline
                                            transition-colors
                                            duration-300
                                            ease-in-out
                                            ${
                                                isActive
                                                    ? "text-(--Primary)"
                                                    : "text-(--Text-Muted) hover:text-(--Primary)"
                                            }
                                        `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.title}

                                                <span
                                                    className={`
                                                        absolute
                                                        left-0
                                                        -bottom-2
                                                        h-0.5
                                                        bg-(--Primary)
                                                        transition-all
                                                        duration-300
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
                            </nav>

                            {/* Bottom Actions */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-4
                                    mt-auto
                                "
                            >
                                {/* Mobile Theme Toggle */}
                                <button
                                    type="button"
                                    onClick={toggleTheme}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        w-full
                                        px-4
                                        py-3
                                        rounded-[14px]
                                        bg-secondary
                                        text-foreground
                                        border
                                        border-border
                                        cursor-pointer
                                        transition-all
                                        duration-300
                                        hover:bg-accent
                                    "
                                >
                                    <span
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >
                                        {theme === "light" ? (
                                            <Moon className="w-5 h-5" />
                                        ) : (
                                            <Sun className="w-5 h-5" />
                                        )}

                                        {theme === "light"
                                            ? "Dark Mode"
                                            : "Light Mode"}
                                    </span>

                                    <span className="text-sm text-muted-foreground">
                                        {theme === "light"
                                            ? "🌙"
                                            : "☀️"}
                                    </span>
                                </button>

                                {/* Mobile CTA */}
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
                                            w-full
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
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Get Started Dialog */}
            <GetStartedDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
            />
        </header>
    );
}

export default Navbar;