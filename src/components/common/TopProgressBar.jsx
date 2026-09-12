import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const timerRef = useRef(null);

  // Global click interceptor: catches any navigation link click immediately
  useEffect(() => {
    const handleNavigationClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        target !== "_blank" &&
        href !== window.location.pathname
      ) {
        // Start laser bar instantly on click
        if (timerRef.current) clearInterval(timerRef.current);
        setVisible(true);
        setProgress(20);

        // Dynamic crawl: trickles toward 85% while route chunk downloads over network
        timerRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 85) {
              clearInterval(timerRef.current);
              return 85;
            }
            const step = Math.max(0.5, (88 - prev) * 0.1);
            return Math.min(prev + step, 85);
          });
        }, 120);
      }
    };

    document.addEventListener("click", handleNavigationClick);
    return () => document.removeEventListener("click", handleNavigationClick);
  }, []);

  // Complete the bar when the new page actually mounts
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (timerRef.current) clearInterval(timerRef.current);
      
      setProgress(100);
      const hideTimeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setProgress(0), 200);
      }, 250);

      return () => clearTimeout(hideTimeout);
    }
  }, [location.pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[99999] h-[3px] pointer-events-none overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-primary to-cyan-400 transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 12px #0051fb, 0 0 6px #38bdf8",
        }}
      />
    </div>
  );
}