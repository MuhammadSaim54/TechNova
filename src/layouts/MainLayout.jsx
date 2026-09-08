import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer.jsx'
import Chatbot from '../components/chat/Chatbot.jsx'

function MainLayout() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsChatOpen(false);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen flex-col relative">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
    );
}

export default MainLayout;