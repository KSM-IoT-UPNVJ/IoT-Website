import Nav from './components/nav';
import HomePage from './components/homepage/homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Kepengurusan from './components/kepengurusan/kepengurusan';
import Contact from './components/contact/contact';
import Projects from './components/projects/Projects';
import ProjectsDesc from './components/projects/ProjectsDesc';
import Insight from './components/insight/IotInsight';
import Footer from './components/Footer';
import ProgramPage from './components/homepage/OurProgram/programPage';
import { useEffect, useState } from 'react';
import Bg from './utils/Bg';
import FadeIn from './utils/fadeIn';
import { motion } from 'framer-motion';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <motion.div
        key="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-white z-50"
      >
        {/* Animasi spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
      </motion.div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Grup rute yang menggunakan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/kepengurusan" element={<Kepengurusan />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insight/:division" element={<Insight />} />
          <Route path="/project/projectdesc" element={<ProjectsDesc />} />
          <Route path="/project/projectdesc/:i" element={<ProjectsDesc />} />
          <Route path="/program/:programId" element={<ProgramPage />} />
        </Route>

        {/* Rute 404 berada di luar MainLayout, sehingga tidak akan menampilkan Nav, Bg, dan Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Bg />
      <Nav />
      <main className="flex-grow">
        {/* Outlet akan merender komponen anak (halaman) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-white text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold">404</h1>
      <p className="text-xl md:text-3xl mt-4 text-biru-tua">Nyasar mas</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}

export default App;
