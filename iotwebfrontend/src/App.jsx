import Nav from "./components/nav";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/footer";
import "./index.css";
import { useEffect } from "react";
import Bg from "./utils/Bg";
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 300);
  }, []);

    return (
    <div className="relative min-h-screen overflow-hidden">
      <Bg />

      <div className="relative z-10">
        <Nav />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
