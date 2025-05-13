import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import yourImage from '../../assets/images/tushrphoto.jpg';

const Hero = () => {
  const roles = ['Web Developer', 'App Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let charIndex = isTyping ? displayText.length : displayText.length - 1;
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        // Add next character
        typingTimeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1));
        }, 100);
      } else {
        // Pause after typing, then start deleting
        typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (charIndex >= 0) {
        // Remove last character
        typingTimeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex));
        }, 50);
      } else {
        // Switch to next role and start typing
        typingTimeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 300);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 -left-32 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 -right-32 rotate-180" />
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto px-4 py-12 md:py-24 z-10">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-2"
          >
            Hi, I'm Your Name
          </motion.span>

          {/* Developer Title with Typewriter Effect */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              I am a{' '}
            </span>
            <span className="inline-block min-w-[200px]">
              <AnimatePresence>
                {displayText.split('').map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                    className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl text-white/90 mb-6"
          >
            Crafting Jakas Digital Experiences
          </motion.h2>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-white/80 mb-8 max-w-md"
          >
            Passionate about creating <span className="text-pink-300 font-semibold">responsive</span> and{' '}
            <span className="text-pink-300 font-semibold">scalable</span> web and mobile applications. I
            specialize in React, Tailwind, and modern JavaScript to build intuitive and impactful
            solutions. Let’s create something extraordinary!
          </motion.p>

          {/* Collaborate Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
          >
            Let's Collaborate
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 group hover:border-white/30 transition-all duration-300">
            <img
              src={yourImage}
              alt="Your Name"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-pink-500/10" />
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
           
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-4 h-8 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
          />
        </div>
        <span className="mt-2 text-sm text-white/50">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;