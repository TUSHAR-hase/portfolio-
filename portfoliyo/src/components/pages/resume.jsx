'use client'
import { motion } from 'framer-motion';
import yourImage from '../../assets/images/tushrphoto.jpg'; // Update with your image path
import Image from 'next/image';
import SkillsSection from './skill'; // Import the SkillsSection component

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen flex flex-col items-center w-full justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-10 h-50 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 left-1/3 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 right-1/3 rotate-180" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-12 z-10 w-full"
      >
        {/* Profile Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative w-32 h-32 rounded-full group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <Image
              src={yourImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white/20 group-hover:border-white/30 transition-all"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            My Resume
          </h1>
          <p className="text-lg text-white/80 max-w-xl text-center">
            Innovative developer passionate about creating impactful digital solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-center items-center"
        >
          {[
            {
              title: "Focus Areas",
              content: "Innovation & Problem-Solving",
             
              color: "from-pink-500/20 to-purple-600/20"
            },
            // {
            //   title: "Skills",
            //   content: ["React/Next.js", "Node.js", "Flutter", "MERN Stack"],
            //   icon: "👨💻",
            //   color: "from-purple-500/20 to-pink-600/20"
            // },
            {
              title: "Achievements",
              content: "3+ Successful Projects",
             
              color: "from-violet-500/20 to-pink-600/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity`} />
              {/* <div className="text-4xl mb-4">{item.icon}</div> */}
              <h3 className="text-lg font-semibold text-pink-300 mb-3">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <div className="flex flex-wrap gap-2">
                  {item.content.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-white/80">{item.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Download Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <motion.a
            href='/resum.pdf'
            download
            whileHover={{ y: -2 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </motion.a>
          
          {/* File Details */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 mb-2">
              Last updated: Dec 2024 | PDF format | 148 KB
            </p>
            <p className="text-xs text-white/40">
              © 2024 Thakor Tushar. All rights reserved
            </p>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* SKILLS SECTION INTEGRATION POINT */}
        {/* ========================================== */}
        <SkillsSection />
        
      </motion.div>
    </section>
  );
};

export default Resume;