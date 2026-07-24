import PortfolioData from './portfoliodata.js'

import './PortfolioCardsSection.css'

function PortfolioCardsSection() {
    return (
        <>
            <section className="Portfolio-Cards">
                {PortfolioData.map((data) => {
                    return (
                        <div className={data.className} key={data.id}>
                            <img src={data.img} alt="portfolio-image" loading="lazy"/>
                            <div className="Cards-detail">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default PortfolioCardsSection