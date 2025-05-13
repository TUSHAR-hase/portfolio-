import Hero from "../3dpages/herosection";
import Footer from "../ui/footer";
import About from "./about";
import Contact from "./contect";
import Projects from "./projects";
import Resume from "./resume";
import Skills from "./skills";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume></Resume>
      <Projects />
     
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;