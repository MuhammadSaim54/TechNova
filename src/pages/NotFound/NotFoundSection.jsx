import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Astronaut from "./Astronaut.png";
import BackgroundWave from "./BackgroundWave.webp";
import "./NotFoundSection.css";

function NotFoundSection() {
    return (
        <section className="NotFoundSection">
            <div className="NotFoundContent">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Sorry, the page you're looking for doesn't exist
                    <br />
                    or has been moved.
                </p>
                <div className="NotFoundImage">
                    <img
                        src={Astronaut}
                        alt="Astronaut"
                        loading="lazy"
                    />
                </div>
                <Link to="/" className="HomeButton">
                    Go Home
                    <ArrowRight />
                </Link>
            </div>
            <div className="BackgroundWave">
                <img
                    src={BackgroundWave}
                    alt="Background Wave"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default NotFoundSection;