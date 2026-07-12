import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import ServicesPreviewSection from "./ServicesPreviewSection";
import AboutPreviewSection from "./AboutPreviewSection";
import CTASection from "./CTASection";

import "./Home.css"

function Home() {
    return (
        <>
            <HeroSection />
            <TrustedBySection />
            <ServicesPreviewSection />
            <AboutPreviewSection />
            <CTASection />
        </>
    );
}

export default Home;