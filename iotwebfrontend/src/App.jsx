import Nav from './components/nav';
import { Contact } from './contact';
import Footer from './components/footer';
import { useEffect } from 'react';
import Bg from './utils/Bg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
