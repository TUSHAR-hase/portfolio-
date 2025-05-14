import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 border-t w-full border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-10 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl  left-1/3 animate-pulse" />
        <div className="absolute w-96 h-10 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl right-1/3 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        {/* Name & Tagline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Thakor Tushar
        </motion.h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Creating beautiful digital experiences with passion and precision.
        </p>

        {/* Navigation Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05 }}
              className="text-white/80 hover:text-pink-300 cursor-pointer transition-colors relative group"
            >
              {item}
              <div className="h-[1px] bg-gradient-to-r from-pink-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            © 2025 Thakor Tushar. All rights reserved.
          </p>
          <p className="text-sm text-white/40 mt-2 flex items-center justify-center gap-1">
            Made with 
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ♥
            </span> 
            from somewhere on planet Earth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;