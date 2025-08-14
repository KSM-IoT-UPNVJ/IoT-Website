import Nav from "./components/nav";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer";
import Bg from './utils/Bg.jsx';

function App() {
    return (
      <div className="relative">
      <Bg />
        <Nav />
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;
