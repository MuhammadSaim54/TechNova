import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import { Toaster } from "./components/ui/sonner.jsx";
import ScrollToTop from "./utils/ScrollToTop";
import { TopProgressBar } from "./components/common/TopProgressBar";
import { InitialSplashLoader } from "./components/common/InitialSplashLoader";
import './App.css';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Team = lazy(() => import("./pages/Team"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      {/* 1. Initial screen blocker: covers everything until bundle is parsed */}
      <InitialSplashLoader />

      {/* 2. YouTube laser progress bar: triggers instantly on nav clicks */}
      <TopProgressBar />

      <Toaster />
      <ScrollToTop />

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
    </>
  );
}

export default App;