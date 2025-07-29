import React from 'react';
import Nav from './components/nav';
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <>
      <Nav />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
