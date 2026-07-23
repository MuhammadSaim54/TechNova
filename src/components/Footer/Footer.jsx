import { NavLink } from "react-router-dom";
import "./Footer.css";
import FooterData from "./FooterData";

// Logo
import Logo from "./TechNova-Logo2.png";

function Footer() {

    return (

        <footer className="Footer">
            <div className="Container">

                {/* ================= Footer Top ================= */}

                <div className="FooterTop">

                    {/* Logo + Description */}

                    <div className="FooterColumn FooterBrand">
                        <NavLink to="/" className="FooterLogo">
                            <img
                                src={Logo}
                                alt="TechNova Logo"
                            />
                        </NavLink>
                        <p>
                            We build innovative digital products that help
                            businesses grow, scale, and succeed in the modern
                            digital world.
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div className="FooterColumn">
                        <h3>Quick Links</h3>
                        <ul>
                            {
                                FooterData.quickLinks.map((link) => (
                                    <li key={link.id}>
                                        <NavLink to={link.path}>
                                            {link.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Services */}

                    <div className="FooterColumn">
                        <h3>Services</h3>
                        <ul>
                            {
                                FooterData.services.map((service) => (
                                    <li key={service.id}>
                                        {service.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Contact */}

                    <div className="FooterColumn">
                        <h3>Contact</h3>
                        <ul>
                            {
                                FooterData.contact.map((item) => (
                                    <li key={item.id}>
                                        <strong>{item.title}</strong>
                                        <span>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* ================= Footer Divider ================= */}

                <div className="FooterDivider"></div>

                {/* ================= Footer Bottom ================= */}

                <div className="FooterBottom">

                    {/* Copyright */}

                    <p>
                        © {new Date().getFullYear()} TechNova.
                        All Rights Reserved.
                    </p>

                    {/* Social Icons */}

                    <div className="FooterSocial">
                        {
                            FooterData.socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>

    );

}

export default Footer;