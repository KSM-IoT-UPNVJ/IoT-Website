import Nav from './components/nav';
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
