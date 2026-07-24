import ContactInfoData from "./ContactInfoData";
import "./ContactInfoSection.css";
import ContactMap from "./ContactMap.webp";

function ContactInfoSection() {
    return (
        <section className="ContactInfoSection">
            <div className="ContactCards">
                {ContactInfoData.map((item) => (
                    <div className="ContactCard" key={item.id}>
                        <div className="ContactCardIcon">
                            <item.icon />
                        </div>
                        <div className="ContactCardContent">
                            <h3>{item.title}</h3>
                            <h4>{item.value}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="ContactInfoContainer">
                {/* Left Side */}
                <div className="ContactLeft">
                    <form className="ContactForm">
                        <input
                            type="text"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                        />
                        <textarea
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>
                        <button type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
                {/* Right Side */}
                <div className="ContactRight">
                    <img
                        src={ContactMap}
                        alt="Office Location"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactInfoSection;