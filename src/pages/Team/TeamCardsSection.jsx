import { FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";
import teamdata from './teamdata.js'

import './TeamCardsSection.css'

function TeamCardsSection() {
    return (
        <>
            <section className="TeamSectionCards">
                {teamdata.map((data) => {
                    return (
                        <div key={data.id} className="Team-Card">
                            <img src={data.img} alt="image" loading="lazy"/>
                            <div className="Team-Detail">
                                <h3>{data.name}</h3>
                                <p>{data.role}</p>
                                <div className="icons">
                                  <a href="#"><FaFacebook className="team-social-icons" /></a>
                                  <a href="#"><FaGithub className="team-social-icons" /></a>
                                  <a href="#"><FaXTwitter className="team-social-icons" /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default TeamCardsSection