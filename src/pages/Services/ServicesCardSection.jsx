import { ArrowRight } from "lucide-react"
import ServicesData from "./ServicesData.js"

import './ServicesCardSection.css'

function ServicesCardSection() {
    return (
        <>
            <div className="ServicesCardSection">
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
        </>
    )
}

export default ServicesCardSection