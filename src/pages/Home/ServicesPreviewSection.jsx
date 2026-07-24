import ServicesData from './ServicesData.js';
import { ArrowRight } from "lucide-react";
import { NavLink } from 'react-router-dom';

import './ServicesPreviewSection.css';

function ServicesPreviewSection() {
    return (
        <>
            <section className="Home-Services">
                <div className="Home-Services-Badge">
                    <span>OUR SERVICES</span>
                </div>
                <div className="Home-Services-Title">
                    <h1>Services That Drive Results</h1>
                </div>
                <div className="Home-Services-Description">
                    <p>We provide a wide range of digital services to help your buisness to grow faster and reach the right audience.</p>
                </div>
                <div className="Home-Services-Cards">
                    {ServicesData.map((Service) => {
                        return (

                            <div className={Service.class} key={Service.id}>
                                <div className={Service.iconClass}>
                                    <Service.icon className='ServiceIcon' color={Service.iconColor} strokeWidth={1.5} />
                                </div>
                                <span>{Service.title}</span>
                                <p>{Service.description}</p>
                                <div className="action-btn">
                                    <button>Learn More <ArrowRight size={16} color='#0051fb' className='Services-arrow' /></button>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <NavLink
                    to="/services"
                    className="Home-Services-Viewall"
                >
                    View All Services
                </NavLink>
            </section>
        </>
    )
}

export default ServicesPreviewSection