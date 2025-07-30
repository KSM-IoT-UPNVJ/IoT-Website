import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Nav from './components/nav';
import WhatIs from './components/AboutUs/WhatIs';
import Slogan from './components/AboutUs/Slogan';
import Goals from './components/AboutUs/Goals';
import TeamGallery from './components/AboutUs/TeamGallery';
import Footer from './components/footer';
import './index.css';
import { useEffect } from 'react';
import BgKepengurusan from './components/AboutUs/BgKepengurusan';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BgKepengurusan />

      <div className="relative z-10">
        <Nav />
        <WhatIs />
        <Slogan />
        <Goals />
        <TeamGallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
