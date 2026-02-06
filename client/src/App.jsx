import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


function App() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <>
      <Navbar expanded={navExpanded} setExpanded={setNavExpanded} />

      <main className={`main ${navExpanded ? "main--expanded" : ""}`}>
        <Hero />

        {/* Career trajectory */}
        <Experience />

        {/* Proof of depth */}
        <Projects />

        {/* Human side */}
        <About />

        {/* Supporting layer */}
        <Skills />

        <Contact />
      
      </main>
    </>
  );
}

export default App;
