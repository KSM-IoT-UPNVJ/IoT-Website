import React from 'react';
import Nav from './components/nav';
import Home from './components/welcome';
import Footerkepengurusan from './components/Footer';
import Bg from './utils/Bg.jsx';
function App() {
  return (
    <div className="relative">
    <Bg />
      <Nav/>
      <Home />
      <Footerkepengurusan />
    </div>
  );
}

export default App;

