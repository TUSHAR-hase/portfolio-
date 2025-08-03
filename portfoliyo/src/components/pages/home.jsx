'úse client'
import Hero from "../3dpages/herosection";
import Footer from "../ui/footer";
import About from "./about";
import Contact from "./contect";
import Projects from "./projects";
import Resume from "./resume";



const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden">
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