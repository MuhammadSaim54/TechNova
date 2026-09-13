import { useEffect, useState } from "react";

export function InitialSplashLoader() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Single dismiss timer instead of high-frequency intervals
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setMounted(false), 300);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#070b14] text-white transition-opacity duration-300 pointer-events-none ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-primary/30 bg-primary/10 shadow-[0_0_25px_rgba(0,81,251,0.35)]">
        <div className="w-7 h-7 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
      </div>
    </div>
  );
}