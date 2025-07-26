import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar';
import WhatIs from './components/AboutUs/WhatIs';
import Slogan from './components/AboutUs/Slogan';
import Goals from './components/AboutUs/Goals';
import TeamGallery from './components/AboutUs/TeamGallery';
import Footerkepengurusan from './components/Footer';

import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <WhatIs />
      <Slogan />
      <Goals />
      <TeamGallery />
      <Footerkepengurusan />
    </>
  );
}

export default App;
