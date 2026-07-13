// Router
import { Routes, Route } from 'react-router-dom'
// Layout
import MainLayout from './layouts/MainLayout.jsx'
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team/Team.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
// CSS
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/team' element={<Team/>}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
