import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar';
import WhatIs from './components/WhatIs';
import Slogan from './components/Slogan';
import Goals from './components/Goals';
import Footerkepengurusan from './components/Footer';
import TeamGallery from './components/TeamGallery';

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
