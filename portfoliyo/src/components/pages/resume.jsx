'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import yourImage from '../../assets/images/tushrphoto.jpg'; // Update with your image path
import SkillsSection from './skill';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.4 }
  }
};
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.27, duration: 0.7 } }
};

const Resume = () => (
  <section
    id="resume"
    className="relative min-h-screen flex flex-col items-center w-full justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden selection:bg-pink-100 selection:text-pink-800"
  >
    {/* Creative floating blur blobs */}
    <div className="absolute inset-0 -z-10">
      <motion.div
        initial={{ scale: 0.82, opacity: 0.14 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute w-[900px] h-[900px] bg-gradient-radial from-fuchsia-500/20 via-transparent to-transparent top-[-18%] left-[-18%]"
      />
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/30 to-fuchsia-600/30 blur-3xl -top-36 left-1/4 animate-pulse" />
      <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-600/25 blur-3xl -bottom-32 right-1/4 rotate-180" />
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-12 z-10 w-full"
    >
      {/* Animated Profile Section */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col items-center mb-16"
      >
        <motion.div
          className="relative w-36 h-36 rounded-full shadow-2xl group mb-7"
          whileHover={{ scale: 1.07, rotate: [0,2,-2,1,0], transition: { duration: 1.2, repeatType: 'reverse', repeat: Infinity } }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
          <Image
            src={yourImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-white/30 group-hover:border-pink-400/70 transition-all"
            priority
          />
          <div className="absolute right-2 bottom-0 px-3 py-1 text-xs font-semibold rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-400 text-white shadow-lg">
            Open to Work!
          </div>
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-5 drop-shadow">
          My Resume
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl text-center font-medium">
          <span className="text-pink-300 font-bold">Innovative Web & Mobile Engineer</span> — turning complex problems into real digital value, with a passion for <span className="text-purple-300 font-semibold">clean design</span> and <span className="text-fuchsia-300 font-semibold">creative code</span>.
        </p>
      </motion.div>

      {/* Glassmorphic Stats Card Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 justify-center items-center"
      >
        {[
          {
            title: "Strengths",
            content: (
              <>
                 Rapid prototyping & scalable solutions<br />
        Team leadership & full-stack ownership<br />
        UI/UX with focus on user empathy & real impact
              </>
            ),
            color: "from-pink-500/20 to-purple-600/20"
          },
          {
            title: "Achievements",
            content: (
      <>
        National Hackathon (3rd Place, 2023)<br />
        Built 10+ real-world projects<br />
        Trusted by startups & academic teams
      </>
    ),
            color: "from-purple-500/20 to-pink-600/20"
          },
          {
            title: "Philosophy",
            content: (
      <>
        Build with purpose, learn constantly<br />
        Marry design with code<br />
        Technology that empowers and connects
      </>
    ),
            color: "from-violet-500/20 to-fuchsia-600/20"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.045, boxShadow: '0 6px 36px 2px #d946ef33' }}
            className="relative group bg-white/7.5 backdrop-blur-xl border border-white/15 rounded-2xl p-8 shadow-lg hover:border-pink-400/40 transition-all min-h-[170px] flex flex-col justify-between"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity`} />
            <h3 className="text-lg font-bold text-pink-300 mb-4 z-10 relative tracking-wide">{item.title}</h3>
            <div className="text-white/90 font-medium text-[16px] z-10 relative">{item.content}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-20"
      >
        <motion.a
          href='/resum.pdf'
          download
          whileHover={{ y: -2, scale: 1.065, boxShadow: '0 4px 32px #db277733' }}
          className="inline-flex items-center px-9 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-semibold text-white hover:shadow-2xl transition-all text-lg relative group"
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-all" />
        </motion.a>
        {/* File Details */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-base text-white/60 mb-2">
            Last updated: Dec 2024 | PDF, 148 KB
          </p>
          <p className="text-xs text-white/40">
            © 2024 Thakor Tushar. All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* SKILLS SECTION */}
      <motion.div variants={itemVariants} className="mt-4">
        <SkillsSection />
      </motion.div>
    </motion.div>
  </section>
);

export default Resume;
