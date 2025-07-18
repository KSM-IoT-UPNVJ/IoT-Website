import React from 'react';
import Navbar from './components/Navbar';
import WhatIs from './components/WhatIs';
import Slogan from './components/Slogan';
import Goals from './components/Goals';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <WhatIs />
      <Slogan />
      <Goals />
      <Footer />
    </>
  );
}

export default App;
