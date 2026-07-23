import Navbar from '../components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.jsx'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout