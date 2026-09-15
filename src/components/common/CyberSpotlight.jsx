import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CyberSpotlight() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Antigravity Springs (Fluid liquid movement)
  const springX = useSpring(mouseX, { stiffness: 95, damping: 24, mass: 0.65 });
  const springY = useSpring(mouseY, { stiffness: 95, damping: 24, mass: 0.65 });

  // Trailing Chromatic Orb (Delay lag drift)
  const trailX = useSpring(mouseX, { stiffness: 45, damping: 28, mass: 1.2 });
  const trailY = useSpring(mouseY, { stiffness: 45, damping: 28, mass: 1.2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      // 👉 FIXED: z-0 (Background se upar, interactive content z-10 se neeche)
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary Electric Blue / Cyan Antigravity Core */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        className="
          absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(0,81,251,0.35)_0%,rgba(6,182,212,0.18)_40%,transparent_70%)]
          blur-[75px] sm:blur-[100px]
          mix-blend-screen dark:mix-blend-lighten
        "
      />

      {/* Trailing Indigo / Violet Orb for Chromatic Antigravity Depth */}
      <motion.div
        style={{
          left: trailX,
          top: trailY,
          x: "-50%",
          y: "-50%",
        }}
        className="
          absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,rgba(168,85,247,0.12)_45%,transparent_75%)]
          blur-[85px] sm:blur-[115px]
          mix-blend-screen dark:mix-blend-lighten
        "
      />
    </div>
  );
}