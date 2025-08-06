import Nav from './components/nav';
import { Contact } from './contact';
import Footer from './components/footer';
import Bg from './utils/Bg';
function App() {
  return (
    <div className="relative">
      <Bg />
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
