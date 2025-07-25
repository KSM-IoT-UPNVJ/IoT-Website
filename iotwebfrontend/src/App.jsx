import React from 'react';
import Nav from './components/nav';
import Home from './components/welcome';
import VisionMission from './components/visimisi';
import OurProgram from './components/ourprogram';
import Footerkepengurusan from './components/Footer';


function App() {
  return (
    <>
      <Nav/>
      <Home />
      <VisionMission />
      <OurProgram />
      <Footerkepengurusan />
    </>
  );
}

export default App;
