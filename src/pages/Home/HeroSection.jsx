import { ArrowRight } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { Users } from "lucide-react";
import { Award } from "lucide-react";
import { NavLink } from "react-router-dom";
import HeroIllustration from "../../assets/images/hero-illustration.png";

import './HeroSection.css';

function HomeHeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span>WELCOME TO TECHNOVA</span>
                </div>
                <div className="hero-title">
                    <h1>We Build Digital Solutions That <span>Inspire</span></h1>
                </div>
                <div className="hero-description">
                    <p>We are creative digital agency delivering modern web solutions that drive buisness growth.</p>
                </div>
                <div className="hero-actions">
                    <NavLink
                        to="/contact"
                        className="hero-getstarted"
                    >
                        Get Started
                        <ArrowRight size={20} className="Hero-Button" />
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="hero-ourservices"
                    >
                        Our Services
                    </NavLink>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <FolderKanban size={26} color="#0051fb" />
                        </div>
                        <div className="stat-info">
                            <h3>120+</h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <Users size={26} color="#0051fb" />
                        </div>
                        <div className="stat-info">
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <Award size={26} color="#0051fb" />
                        </div>
                        <div className="stat-info">
                            <h3>10+</h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroIllustration} alt="hero-illustration" />
            </div>
        </section>
    )
}

export default HomeHeroSection