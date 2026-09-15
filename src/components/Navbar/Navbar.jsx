import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
import Magnetic from "../common/MagneticButton.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isDark = theme === "dark";

  return (
    <>
      {/* ================= Natural Flow Spacer (Hero ko apni jagah rakhne ke liye) ================= */}
      <div className="w-full h-22 sm:h-26 pointer-events-none" aria-hidden="true" />

      {/* ================= Sticky Floating Capsule Header ================= */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">

        {/* Master Capsule Wrapper */}
        <div className="w-full max-w-6xl mx-auto relative pointer-events-auto">

          {/* Main Floating Nav Shell (Original Exact Styles) */}
          <div
            className="
              relative
              w-full
              h-16 sm:h-18
              px-4 sm:px-6
              flex items-center justify-between
              rounded-full
              border border-border/80 dark:border-white/[0.12]
              bg-background/90 dark:bg-[#070b14]/90
              backdrop-blur-2xl
              shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
              transition-colors duration-300
            "
          >
            {/* Top Hairline Specular Reflection */}
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 dark:via-cyan-400/50 to-transparent pointer-events-none" />

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

            {/* Navigation Links */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NavLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={`
                      relative py-2 text-xs xl:text-sm font-medium tracking-tight transition-colors duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md
                      ${isActive 
                        ? "text-primary dark:text-white font-semibold" 
                        : "text-muted-foreground hover:text-foreground dark:hover:text-white/90"
                      }
                    `}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.title}
                    </span>

                    {/* Floating Laser Underline Streak */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavHairline"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute -bottom-1 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary dark:via-cyan-400 to-transparent shadow-[0_0_10px_rgba(0,81,251,0.8)]"
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Right Controls with Magnetic Attraction */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">

              {/* Magnetic Theme Switcher */}
              <Magnetic strength={0.35}>
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                  aria-pressed={isDark}
                  className="
                    flex items-center justify-center
                    w-10 h-10 rounded-full
                    border border-border/80 dark:border-white/[0.1]
                    bg-muted/40 dark:bg-white/[0.04]
                    text-foreground transition-all duration-200
                    hover:border-primary/50 hover:bg-muted/70 dark:hover:bg-white/[0.08]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                    cursor-pointer active:scale-95
                  "
                >
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {isDark ? (
                      <Sun className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    ) : (
                      <Moon className="w-4 h-4 text-foreground/80" aria-hidden="true" />
                    )}
                  </motion.div>
                </button>
              </Magnetic>

              {/* Magnetic TechNova Electric Brand CTA */}
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  onClick={() => setDialogOpen(true)}
                  className="
                    group relative flex items-center gap-2
                    h-10 px-5 sm:px-6 rounded-full
                    bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                    text-white text-xs sm:text-sm font-semibold tracking-wide
                    shadow-[0_4px_20px_rgba(0,81,251,0.35)]
                    hover:shadow-[0_6px_25px_rgba(0,81,251,0.55)]
                    active:scale-95
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                    transition-all duration-300 ease-out
                    overflow-hidden cursor-pointer
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute -inset-full top-0 w-1/2 h-full
                      bg-gradient-to-r from-transparent via-white/35 to-transparent
                      -skew-x-12 opacity-0 group-hover:opacity-100
                      group-hover:animate-[shimmer_1.4s_infinite]
                      pointer-events-none
                    "
                  />

                  <div className="absolute inset-x-0 top-0 h-px bg-white/35 pointer-events-none" />
                  <span>Get Started</span>

                  <div className="relative overflow-hidden w-3.5 h-3.5 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4" aria-hidden="true" />
                    <ArrowRight className="w-3.5 h-3.5 absolute transition-transform duration-300 ease-out -translate-x-4 group-hover:translate-x-0 text-white" aria-hidden="true" />
                  </div>
                </button>
              </Magnetic>
            </div>

            {/* Mobile Bar Trigger Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                aria-pressed={isDark}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border/80 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-cyan-400" aria-hidden="true" />
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

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-navigation-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
                initial={{ opacity: 0, y: -15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="
                  lg:hidden
                  absolute top-0 inset-x-0
                  rounded-[28px]
                  border border-border/80 dark:border-white/[0.12]
                  bg-background/98 dark:bg-[#070b14]/98
                  backdrop-blur-3xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                  p-6
                  z-50
                "
              >
                <div className="flex items-center justify-between pb-6 border-b border-border/60 dark:border-white/[0.08]">
                  <NavLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    aria-label="TechNova Homepage"
                    className="flex items-center -ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                  >
                    <img
                      src={Logo}
                      alt="TechNova Logo"
                      className={`h-20 w-auto ${isDark ? "brightness-0 invert" : ""}`}
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

                <nav aria-label="Mobile navigation" className="flex flex-col gap-1 py-4 text-left">
                  {NavLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <NavLink
                        key={link.id}
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          flex items-center justify-between p-3 rounded-xl text-sm font-semibold tracking-tight transition-colors
                          ${isActive
                            ? "text-primary dark:text-cyan-400 font-bold bg-primary/10"
                            : "text-foreground/80 hover:bg-muted/50 dark:hover:bg-white/[0.03] hover:text-foreground"
                          }
                        `}
                      >
                        <span>{link.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 shadow-[0_0_8px_rgba(0,81,251,0.8)]" />
                        )}
                      </NavLink>
                    );
                  })}
                </nav>

                <div className="flex items-center gap-2.5 pt-4 pb-4 border-t border-border/60 dark:border-white/[0.08]">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TechNova on LinkedIn"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TechNova on X"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary transition-colors"
                  >
                    <FaXTwitter className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TechNova on GitHub"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] text-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

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
                      shadow-[0_4px_20px_rgba(0,81,251,0.35)]
                      flex items-center justify-center gap-2
                      overflow-hidden active:scale-95 transition-all
                    "
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-white/30 pointer-events-none" />
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </header>
    </>
  );
}

export default Navbar;