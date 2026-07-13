import { ArrowRight } from 'lucide-react'
import BlogData from './BlogData.js'

import './BlogCards.css'

function BlogCards() {
    return (
        <>
            <section className="Blog-Cards">
                {BlogData.map((data) => {
                    return (
                        <div className={data.className} key={data.id}>
                            <img src={data.img} alt="Blog-image" />
                            <div className="Cards-detail">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                                <div className="action-btn">
                                    <button>Learn More <ArrowRight size={16} color='#0051fb' className='Services-arrow' /></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default BlogCards