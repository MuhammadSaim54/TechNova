import { Brain, Users, ShieldCheck, HeartHandshakeIcon } from "lucide-react";
import AboutImage from "../../assets/images/developer-team.webp";
import { NavLink } from "react-router-dom";

import './AboutPreviewSection.css';

function AboutPreviewSection() {
    return (
        <>
            <section className="Home-about-preview">
                <div className="about-image">
                    <img src={AboutImage} alt="Our Team" loading="lazy"/>
                    <div className="experience-card">
                        <h2>10+</h2>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-badge">
                        <span>ABOUT US</span>
                    </div>
                    <div className="about-title">
                        <h2>Building Solutions That Make an Impact</h2>
                    </div>
                    <div className="about-description">
                        <p>At TechNova, we combine creativity, technology and data to build solutions that make a real impact. Our team of experts is dedicated to delivering high-quality results that drive success.</p>
                    </div>
                    <div className="about-features">
                        <div className="feature">
                            <Brain size={36} strokeWidth={1.2} color="#0051fb" />
                            <span>Innovative Approach</span>
                        </div>
                        <div className="feature">
                            <Users size={36} strokeWidth={1.2} color="#0051fb" />
                            <span>Dedicated Team</span>
                        </div>
                        <div className="feature">
                            <HeartHandshakeIcon size={36} strokeWidth={1.2} color="#0051fb" />
                            <span>Client First Mindset</span>
                        </div>
                    </div>
                    <NavLink
                    to="/about"
                    className="about-btn"
                >
                    Learn More About Us
                </NavLink>
                </div>
            </section>
        </>
    )
}

export default AboutPreviewSection