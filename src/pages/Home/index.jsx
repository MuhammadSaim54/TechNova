import { lazy, Suspense } from "react";
import HeroSection from "./HeroSection";

const TrustedBySection = lazy(() => import("./TrustedBySection"));
const ServicesPreviewSection = lazy(() => import("./ServicesPreviewSection"));
const AboutPreviewSection = lazy(() => import("./AboutPreviewSection"));
const CTASection = lazy(() => import("./CTASection"));

function Home() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={null}>
        <TrustedBySection />
        <ServicesPreviewSection />
        <AboutPreviewSection />
        <CTASection />
      </Suspense>
    </>
  );
}

export default Home;