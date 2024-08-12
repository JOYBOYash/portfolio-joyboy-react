import "./App.css";
import Home from "./Component/Homepage/Home";
import About from "./Component/Aboutpage/About";
import Skills from "./Component/Skillspage/Skills";
import Projects from "./Component/Projectspage/Projects";
import Contact from "./Component/Contactpage/Contact";

function App() {
  return (
    <>
      {/* <Footer /> */}
      <div className="root">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
      </div>
    </>
  );
}

export default App;
