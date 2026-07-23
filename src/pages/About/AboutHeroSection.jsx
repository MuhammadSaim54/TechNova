import { ArrowRight } from 'lucide-react';
import { NavLink } from "react-router-dom";
import AboutImage from '../../assets/images/developer-team.png'

import './AboutHeroSection.css';

function AboutHeroSection() {
    return (
        <>
            <section className="AboutHeroSection">
                <div className="About-Hero-Content">
                    <div className="About-Hero-Badge">
                        <span>ABOUT US</span>
                    </div>
                    <div className="About-Hero-Heading">
                        <h2>About TechNova</h2>
                    </div>
                    <div className="About-Hero-Description">
                        <p>We are a team of passionate creators, developers and strategists helping brands grow in the digital world.</p>
                    </div>
                    <div className="About-Hero-Action">
                        <NavLink
                            to="/contact"
                            className="getstarted"
                        >
                            Get Started
                            <ArrowRight size={18} className="getstartediccon" />
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="ourservices"
                        >
                            Our Services
                        </NavLink>
                    </div>
                </div>
                <div className="About-Hero-Image">
                    <img src={AboutImage} alt="AboutImage" />
                </div>
            </section>
        </>
    )
}

export default AboutHeroSection