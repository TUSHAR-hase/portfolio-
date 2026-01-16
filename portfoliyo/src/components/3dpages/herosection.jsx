'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import yourImage from '../../assets/images/tushrphoto.jpg';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi';

const Hero = () => {
  const roles = ['Web Developer', 'App Developer', 'Full Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let typingTimeout;
    let charIndex = isTyping ? displayText.length : displayText.length - 1;
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1));
        }, 100);
      } else {
        typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (charIndex >= 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex));
        }, 50);
      } else {
        typingTimeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 300);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden w-full"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient orbs */}
        <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-r from-violet-600/20 to-pink-500/20 blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-40 -right-40" />
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-pink-500/20 animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw', 
              y: Math.random() * 100 + 'vh',
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * 100 + 'vw', 
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
            }}
            transition={{ 
              duration: 3 + Math.random() * 7,
              repeat: Infinity,
              delay: i * 0.5 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="block text-white">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                Your Name
              </span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl md:text-2xl text-white/90">
                  I am a{' '}
                  <span className="inline-block min-w-[200px] md:min-w-[260px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentRoleIndex}
                        className="bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent font-bold text-2xl md:text-3xl"
                      >
                        {displayText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="ml-1 text-purple-300"
                        >
                          |
                        </motion.span>
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-white/80 mb-8 max-w-xl"
            >
              I create <span className="text-pink-300 font-semibold">responsive</span> and{' '}
              <span className="text-purple-300 font-semibold">scalable</span> web and mobile applications. 
              Specializing in modern technologies to build intuitive and impactful solutions. 
              Let's create something extraordinary together!
            </motion.p>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2">
                <FiCode className="text-pink-300" />
                <span className="text-white/90 text-sm">Web Development</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-4 py-2">
                <FiSmartphone className="text-purple-300" />
                <span className="text-white/90 text-sm">App Development</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <FiGlobe className="text-lg" />
                Let's Collaborate
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
           
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-xl" />
            
            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
              
              {/* Image with gradient border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <Image
                    src={yourImage}
                    alt="Your Name"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500/90 to-purple-600/90 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FiCode className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-white font-bold">12+ Projects</div>
                    <div className="text-white/80 text-sm">Completed</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500/90 to-violet-600/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FiSmartphone className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-white font-bold">5+ Apps</div>
                    <div className="text-white/80 text-sm">Developed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-pink-500/30 flex justify-center items-start p-1"
        >
          <div className="w-2 h-3 rounded-full bg-gradient-to-b from-pink-400 to-purple-400" />
        </motion.div>
        <span className="mt-2 text-sm text-white/60">Scroll Down</span>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-20" />
    </section>
  );
};

// Add custom animation for slow spin
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Hero;