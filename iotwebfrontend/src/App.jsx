import Nav from "./components/nav";
import Projects from "/src/Projects.jsx";
import Footerkepengurusan from "./components/Footerkepengurusan";

function App() {
  return (
    <>
      <Nav />

      <Projects />

      <div className="overflow-x-hidden mt-20">
        <Footerkepengurusan />
      </div>
    </>
  );
}

export default App;
