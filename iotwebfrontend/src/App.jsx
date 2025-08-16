import Nav from './components/nav';
import Projects from './projects';
import Footer from './components/footer';
import { useEffect } from 'react';
import Bg from './utils/Bg'
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <div className='relative'>
      <Bg />
      <Nav />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
