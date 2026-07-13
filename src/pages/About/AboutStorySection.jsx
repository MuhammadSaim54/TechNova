import Data from './StorySectionData.js';
import './AboutStorySection.css';

function AboutStorySection() {
    return (
        <>
            <section className="AboutStorySection">
                <div className="About-Story-Detail">
                    <div className="About-Story-Heading">
                        <h2>Our Story</h2>
                    </div>
                    <div className="About-Story-Description">
                        <p>TechNova helps businesses grow through modern digital solutions. Our focus is on creating high-quality products, building strong client relationships, and delivering results that make a lasting impact.</p>
                    </div>
                </div>
                <div className="About-Story-Cards">
                    {Data.map((card) => {
                        return (
                            <div className={card.className} key={card.id}>
                                <div className="icon">
                                    <card.icon size={38} color='#0051fb'/>
                                </div>
                                <div className="details">
                                    <span>{card.title}</span>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default AboutStorySection