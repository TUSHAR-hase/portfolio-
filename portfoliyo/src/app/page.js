import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";

export default function Page() {
  return (
    <div className="site-shell">
      {/* Sticky Precision Header */}
      <Navbar />

      {/* Main Engineering Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
