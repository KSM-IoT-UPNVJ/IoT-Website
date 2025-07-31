import React from 'react';
import Nav from './components/nav';
<<<<<<< HEAD
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';
=======
import Kepengurusan from './components/kepengurusan/kepengurusan';


>>>>>>> Kepengurusan
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <>
      <Nav />
<<<<<<< HEAD
      <Contact />
      <Footer />
    </>
  );
}

=======
      <Kepengurusan />
    </>
  );
}
>>>>>>> Kepengurusan
export default App;
