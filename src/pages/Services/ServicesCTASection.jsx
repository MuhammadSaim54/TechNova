import { ArrowRight } from "lucide-react"

import './ServicesCTASection.css'

function ServicesCTASection() {
    return (
        <>
            <section className="ServicesCTASection">
                <div className="CTA-Section-Content">
                    <div className="CTA-Section-Badge">
                        <span>LET'S WORK TOGETHER</span>
                    </div>
                    <div className="CTA-Section-Heading">
                        <h2>Subscribe to take your buisness to the next level?</h2>
                    </div>
                    <div className="CTA-Section-Description">
                        <p>Let's build something amazing together.</p>
                    </div>
                </div>
                <div className="CTA-Section-Button">
                    <button>Get Started Now <ArrowRight size={18} className="CTA-Button" /></button>
                </div>
            </section>
        </>
    )
}

export default ServicesCTASection