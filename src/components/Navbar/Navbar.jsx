import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Menu,
    X,
    ArrowRight,
    Sun,
    Moon
} from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";
import NavLinks from "./NavLinks";
import Logo from "./TechNova-Logo.webp";
import GetStartedDialog from "../auth/GetStartedDialog.jsx";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <header className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">

            {/* ================= Master Floating Capsule / Menu Wrapper ================= */}
            <div className="w-full max-w-6xl mx-auto relative pointer-events-auto">

                {/* Closed Navbar Bar */}
                <div
                    className="
                        relative
                        w-full
                        h-16 sm:h-18
                        px-4 sm:px-6
                        flex items-center justify-between
                        rounded-full
                        border border-border/80 dark:border-white/[0.12]
                        bg-background/90 dark:bg-card/85
                        backdrop-blur-2xl
                        shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                        transition-all duration-300
                    "
                >
                    {/* Top Hairline Specular Reflection */}
                    <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />

                    {/* Logo */}
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        aria-label="TechNova Homepage"
                        className="flex items-center -ml-2 sm:-ml-1 transition-transform duration-300 hover:scale-[1.02] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                    >
                        <img
                            src={Logo}
                            alt="TechNova Logo"
                            className={`
                                h-24 sm:h-28 md:h-30
                                w-auto object-contain
                                transition-all duration-300
                                ${isDark ? "brightness-0 invert opacity-95" : "opacity-90"}
                            `}
                        />
                    </NavLink>

                    {/* Desktop Navigation Links */}
                    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 xl:gap-8">
                        {NavLinks.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className={({ isActive }) => `
                                    relative py-1 text-sm font-medium transition-all duration-200
                                    rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                                    ${isActive
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
                                    }
                                `}
                            >
                                {({ isActive }) => (
                                    <span className="flex items-center gap-1.5">
                                        {link.title}
                                        {isActive && (
                                            <span 
                                                aria-hidden="true" 
                                                className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,81,251,0.8)] animate-pulse" 
                                            />
                                        )}
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Right Controls */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">

                        {/* Theme Switcher Button */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                            aria-pressed={isDark}
                            className="
                                flex items-center justify-center
                                w-10 h-10 rounded-full
                                border border-border/70 dark:border-white/[0.08]
                                bg-muted/40 dark:bg-white/[0.04]
                                text-foreground transition-all duration-200
                                hover:border-primary/50 hover:bg-muted/70 hover:scale-105
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                            "
                        >
                            {isDark ? (
                                <Sun className="w-4 h-4 text-primary transition-transform duration-300 hover:rotate-45" aria-hidden="true" />
                            ) : (
                                <Moon className="w-4 h-4 text-foreground/80 transition-transform duration-300 hover:rotate-12" aria-hidden="true" />
                            )}
                        </button>

                        {/* TechNova Electric Brand CTA */}
                        <button
                            type="button"
                            onClick={() => setDialogOpen(true)}
                            className="
                                group relative flex items-center gap-2
                                h-10 px-5 sm:px-6 rounded-full
                                bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                                text-white text-xs sm:text-sm font-semibold tracking-wide
                                shadow-[0_4px_20px_rgba(0,81,251,0.35)]
                                hover:shadow-[0_6px_25px_rgba(0,81,251,0.5)]
                                hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                                transition-all duration-300 ease-out
                                overflow-hidden
                            "
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-white/35 pointer-events-none" />
                            <span>Get Started</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Mobile Bar Trigger Controls */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                            aria-pressed={isDark}
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            {isDark ? (
                                <Sun className="w-4 h-4 text-primary" aria-hidden="true" />
                            ) : (
                                <Moon className="w-4 h-4" aria-hidden="true" />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation-menu"
                            className="
                                flex items-center justify-center
                                w-10 h-10 rounded-xl
                                bg-foreground text-background dark:bg-white dark:text-black
                                transition-transform active:scale-95
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                            "
                        >
                            {menuOpen ? (
                                <X className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <Menu className="w-5 h-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>

                {/* ================= Floating Top Dropdown Card (ColdSend Style) ================= */}
                {menuOpen && (
                    <div
                        id="mobile-navigation-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation"
                        className="
                            lg:hidden
                            absolute top-0 inset-x-0
                            rounded-[28px]
                            border border-border/80 dark:border-white/[0.12]
                            bg-background/95 dark:bg-[#090e18]/95
                            backdrop-blur-3xl
                            shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                            p-6
                            z-50
                            animate-in fade-in-0 zoom-in-95 duration-200
                        "
                    >
                        {/* Header: Brand + Close Trigger */}
                        <div className="flex items-center justify-between pb-6">
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                aria-label="TechNova Homepage"
                                className="flex items-center -ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                            >
                                <img
                                    src={Logo}
                                    alt="TechNova Logo"
                                    className={`h-22 w-auto ${isDark ? "brightness-0 invert" : ""}`}
                                />
                            </NavLink>

                            <button
                                type="button"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close navigation menu"
                                className="
                                    flex items-center justify-center
                                    w-10 h-10 rounded-xl
                                    bg-foreground text-background dark:bg-white dark:text-black
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                                "
                            >
                                <X className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Vertical Clean Navigation Links */}
                        <nav aria-label="Mobile navigation" className="flex flex-col gap-4 py-2 text-left">
                            {NavLinks.map((link) => (
                                <NavLink
                                    key={link.id}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) => `
                                        text-[15px] font-medium transition-colors
                                        rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                                        ${isActive
                                            ? "text-primary font-semibold"
                                            : "text-foreground/85 hover:text-primary"
                                        }
                                    `}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Social Icons Chips Row */}
                        <div className="flex items-center gap-2.5 pt-6 pb-6">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechNova on LinkedIn (opens in new tab)"
                                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechNova on X / Twitter (opens in new tab)"
                                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                            >
                                <FaXTwitter className="w-4 h-4" aria-hidden="true" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechNova on GitHub (opens in new tab)"
                                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                            >
                                <FaGithub className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>

                        {/* Full-Width Bottom CTA */}
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setDialogOpen(true);
                                }}
                                className="
                                    relative w-full h-12 rounded-xl
                                    bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                                    text-white text-sm font-semibold tracking-wide
                                    shadow-md shadow-primary/30
                                    flex items-center justify-center gap-2
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                                    overflow-hidden
                                "
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-white/30 pointer-events-none" />
                                <span>Get Started</span>
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                    </div>
                )}

            </div>

            {/* Get Started Dialog */}
            <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </header>
    );
}

export default Navbar;