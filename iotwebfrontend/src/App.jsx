import React from 'react';
import Nav from './components/nav';
import Home from './components/welcome';
import VisionMission from './components/visimisi';
import OurProgram from './components/ourprogram';
import OurAchievement from './components/ourachievement';
import Footerkepengurusan from './components/Footer';


function App() {
  return (
    <>
      <Nav/>
      <Home />
      <VisionMission />
      <OurProgram />
      <OurAchievement />
      <Footerkepengurusan />
    </>
  );
}

export default App;
