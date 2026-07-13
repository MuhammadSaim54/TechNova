import { ArrowRight } from 'lucide-react'

import './PortfolioCTASection.css'

function PortfolioCTASection() {
    return (
        <>
            <section className="Portfolio-CTA-Section">
                <div className="CTA-Section-Content">
                    <div className="CTA-Section-Badge">
                        <span>LET'S WORK TOGETHER</span>
                    </div>
                    <div className="CTA-Section-Heading">
                        <h2>Have a Project in Mind?</h2>
                    </div>
                    <div className="CTA-Section-Description">
                        <p>Let's turn your ideas into reality. Our team is ready to help you build something amazing.</p>
                    </div>
                </div>
                <div className="CTA-Section-Button">
                    <button>Get Started Now <ArrowRight size={18} className="CTA-Button" /></button>
                </div>
            </section>
        </>
    )
}

export default PortfolioCTASection