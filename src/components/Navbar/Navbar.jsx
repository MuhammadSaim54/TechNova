import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

import "./Navbar.css";
import NavLinks from "./NavLinks";

import Logo from "./TechNova-Logo.webp";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="Navbar">

            <div className="Container NavbarContainer">

                {/* ================= Logo ================= */}

                <NavLink
                    to="/"
                    className="NavbarLogo"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={Logo} alt="TechNova Logo" />
                </NavLink>

                {/* ================= Desktop Navigation ================= */}

                <nav className={`NavbarMenu ${menuOpen ? "active" : ""}`}>

                    {/* Mobile Header */}

                    <div className="MobileHeader">

                        <img
                            src={Logo}
                            alt="TechNova Logo"
                        />

                        <button
                            className="CloseButton"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X />
                        </button>

                    </div>

                    {/* Navigation Links */}

                    {
                        NavLinks.map((link) => (

                            <NavLink
                                key={link.id}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </NavLink>

                        ))
                    }

                    {/* Mobile CTA */}

                    <NavLink
                        to="/contact"
                        className="NavbarButton MobileButton"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Started
                        <ArrowRight size={18} />
                    </NavLink>

                </nav>

                {/* Desktop Button */}

                <NavLink
                    to="/contact"
                    className="NavbarButton DesktopButton"
                >
                    Get Started
                    <ArrowRight size={18} />
                </NavLink>

                {/* Hamburger */}

                <button
                    className="MenuButton"
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu />
                </button>

            </div>

            {/* Overlay */}

            {
                menuOpen &&

                <div
                    className="NavbarOverlay"
                    onClick={() => setMenuOpen(false)}
                ></div>

            }

        </header>

    );

}

export default Navbar;