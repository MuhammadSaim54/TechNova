import { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Chatbot from '../components/chat/Chatbot.jsx';

function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsChatOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col relative">
      <a
        href="#main-content"
        className="fixed top-5 left-6 z-[9999] -translate-y-36 focus:translate-y-0 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono font-bold text-xs uppercase tracking-wider shadow-[0_12px_36px_rgba(0,81,251,0.5)] border border-white/25 backdrop-blur-md outline-none ring-2 ring-primary ring-offset-2 ring-offset-background transition-transform duration-200 ease-out"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}

export default MainLayout;