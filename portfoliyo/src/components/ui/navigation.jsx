'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'portfolio' },
   
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-white/10 shadow-2xl shadow-purple-900/20"
    >
      <div className=" px-4 py-3 flex justify-between items-center">
        {/* Logo with Gradient Border */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <Link
            to="home"
            smooth
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent relative"
          >
            {'Tushar Thakor'}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <motion.li
              key={link.id}
              className="relative"
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.id}
                smooth
                spy
                onSetActive={() => setActiveLink(link.id)}
                className={`px-4 py-2.5 cursor-pointer text-sm font-medium ${
                  activeLink === link.id 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-pink-300'
                } transition-all duration-300`}
              >
                {link.name}
                {activeLink === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 to-purple-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all"
        >
          <span className="text-white text-xl">{isOpen ? '✕' : '☰'}</span>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-2xl border-b border-white/10"
          >
            <ul className="px-4 py-3">
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  className="border-t border-white/5 first:border-0"
                >
                  <Link
                    to={link.id}
                    smooth
                    spy
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      activeLink === link.id 
                        ? 'bg-purple-900/20 text-purple-400' 
                        : 'text-gray-300 hover:bg-white/5'
                    } transition-all`}
                  >
                    {link.name}
                    {activeLink === link.id && (
                      <div className="w-2 h-[2px] bg-purple-400 mt-1 rounded-full"/>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;