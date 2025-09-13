import Nav from './components/nav';
import Projects from './Projects';
import { Contact } from './contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Bg from './utils/Bg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Grup rute yang menggunakan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/aboutus" element={<div>About Us Page</div>} />
          <Route path="/kepengurusan" element={<div>Kepengurusan Page</div>} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
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
