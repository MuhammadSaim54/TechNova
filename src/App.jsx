import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import { Toaster } from "./components/ui/sonner.jsx";
import ScrollToTop from "./utils/ScrollToTop";
import { TopProgressBar } from "./components/common/TopProgressBar";
import CyberSpotlight from "./components/common/CyberSpotlight.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Team = lazy(() => import("./pages/Team"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Fullscreen Cyberpunk Initial Preloader
function InitialPreloader() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#050811] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl border-2 border-primary/30 border-t-primary animate-spin" />
        <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] animate-ping" />
      </div>
      <div className="mt-6 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        TechNova Core // Initializing
      </div>
    </div>
  );
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      
      {/* 1. Underlying Blueprint Grid (-z-10) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none fixed inset-0 -z-10
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem]
          [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]
        "
      />

      {/* 2. Floating Cyber Spotlight (z-0: Grid ke upar, content ke peeche) */}
      <CyberSpotlight />

      <TopProgressBar />
      <Toaster />
      <ScrollToTop />

      {/* Initial Website Entry Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999]"
          >
            <InitialPreloader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Content Layer (relative z-10) */}
      <div className="relative z-10">
        <Suspense fallback={<InitialPreloader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/services' element={<Services />} />
              <Route path='/team' element={<Team />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

    </div>
  );
}

export default App;