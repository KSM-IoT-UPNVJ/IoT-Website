import Nav from './components/nav';
<<<<<<< HEAD
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';
<<<<<<< Updated upstream
=======
import Kepengurusan from './components/kepengurusan/kepengurusan';


>>>>>>> Kepengurusan
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

>>>>>>> Stashed changes
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <Router>
      <Nav />
<<<<<<< Updated upstream
<<<<<<< HEAD
      <Contact />
=======
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
>>>>>>> Stashed changes
      <Footer />
    </Router>
  );
}

=======
      <Kepengurusan />
    </>
  );
}
>>>>>>> Kepengurusan
export default App;
