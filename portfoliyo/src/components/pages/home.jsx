'use client'

import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "../3dpages/herosection";
import Footer from "../ui/footer";
import About from "./about";
import Contact from "./contect";
import Projects from "./projects";
import Resume from "./resume";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-blue-600"
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
