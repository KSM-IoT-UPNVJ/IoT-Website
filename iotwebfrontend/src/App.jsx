import Nav from './components/nav';
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';
import Bg from './utils/Bg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <div className="relative">
      <Router>
        <Bg />
        <Nav />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/aboutus" element={<div>About Us Page</div>} />
          <Route path="/kepengurusan" element={<div>Kepengurusan Page</div>} />
          <Route path="/project" element={<div>Project Page</div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
