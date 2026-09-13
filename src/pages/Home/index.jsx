import { lazy, Suspense } from "react";
import HeroSection from "./HeroSection";

// Below-the-fold sections are lazy loaded to free up initial main-thread execution
const TrustedBySection = lazy(() => import("./TrustedBySection"));
const ServicesPreviewSection = lazy(() => import("./ServicesPreviewSection"));
const AboutPreviewSection = lazy(() => import("./AboutPreviewSection"));
const CTASection = lazy(() => import("./CTASection"));

function Home() {
  return (
    <>
      {/* Above-the-fold: Instant critical render */}
      <HeroSection />

      {/* Below-the-fold: Non-blocking deferred render */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <TrustedBySection />
        <ServicesPreviewSection />
        <AboutPreviewSection />
        <CTASection />
      </Suspense>
    </>
  );
}

export default Home;