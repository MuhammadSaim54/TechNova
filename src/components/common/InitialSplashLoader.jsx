import { useEffect, useState } from "react";

export function InitialSplashLoader() {
  const [mounted, setMounted] = useState(true);
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 90);

    const onWindowLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setMounted(false), 500);
      }, 350);
    };

    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad);
      return () => {
        clearInterval(interval);
        window.removeEventListener("load", onWindowLoad);
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#070b14] text-white transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      {/* Cybernetic TechNova Loader Hub */}
      <div className="relative flex flex-col items-center gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Specular rim */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Orbit Ring */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl border border-primary/30 bg-primary/10 shadow-[0_0_25px_rgba(0,81,251,0.35)]">
          <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        </div>

        {/* Telemetry Label */}
        <div className="flex flex-col items-center gap-3 w-48">
          <div className="flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>TechNova OS</span>
            <span className="text-primary font-bold">{Math.min(progress, 100)}%</span>
          </div>

          {/* Micro Track Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-primary to-cyan-400 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}