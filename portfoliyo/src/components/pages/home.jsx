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
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400"
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[4%] h-72 w-72 rounded-full bg-sky-500/18 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-[-10%] top-[18%] h-80 w-80 rounded-full bg-violet-500/18 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute bottom-[-8%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      </div>

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
