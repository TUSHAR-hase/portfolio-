"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "../3dpages/herosection";
import Footer from "../ui/footer";
import Navbar from "../ui/navigation";
import About from "./about";
import Contact from "./contect";
import Projects from "./projects";
import Resume from "./resume";
import SkillsSection from "./skill";
import Terminal from "./terminal";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  // Global keyboard shortcuts: 'T' or 'Cmd+K' / 'Ctrl+K' toggles developer terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid triggering when user is typing inside an input/textarea
      const tag = e.target?.tagName?.toLowerCase();
      const isInput = tag === "input" || tag === "textarea" || e.target?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "t" && !isInput && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400"
      />

      {/* Navigation Dock */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <SkillsSection />
        <Projects />
        <Resume />
        <Contact />
        <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
      </main>

      {/* Interactive Developer Terminal CLI Modal */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
