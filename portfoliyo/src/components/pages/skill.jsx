'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma,
  FaJsSquare
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiFirebase, SiDart
} from 'react-icons/si';

const SKILL_ICON_MAP = {
  "React": <FaReact className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-slate-100" />,
  "HTML/CSS": <><FaHtml5 className="text-orange-400"/> <FaCss3Alt className="text-blue-300"/></>,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "JavaScript": <FaJsSquare className="text-yellow-300" />,

  "Node.js": <FaNodeJs className="text-green-400"/>,
  "Express.js": <SiExpress className="text-neutral-200" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "MySQL": <SiMysql className="text-blue-300" />,
  "Firebase": <SiFirebase className="text-yellow-400" />,
  "Dart": <SiDart className="text-blue-400" />,

  "Figma": <FaFigma className="text-pink-400" />,
  "UI/UX Design": <FaFigma className="text-violet-300" />, // Just an example
  "Wireframing": <FaFigma className="text-indigo-200" />, // Just an example
  "User Research": <FaFigma className="text-purple-200" />, // Just an example
  "Git": <FaGitAlt className="text-red-400" />,
};

const GROUPED_SKILLS = {
  Expert: [
    { name: 'Figma',      category: 'Design' },
    { name: 'Git',        category: 'DevOps'  },
    { name: 'HTML/CSS',   category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'MongoDB',    category: 'Backend'  },
    { name: 'Node.js',    category: 'Backend'  },
    { name: 'React',      category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' }
  ],
  Advanced: [
    { name: 'Dart',         category: 'Backend' },
    { name: 'Express.js',   category: 'Backend' },
    { name: 'Firebase',     category: 'Backend' },
    { name: 'MySQL',        category: 'Backend' },
    { name: 'Next.js',      category: 'Frontend' },
    { name: 'UI/UX Design', category: 'Design' },
    { name: 'User Research',category: 'Design' },
    { name: 'Wireframing',  category: 'Design' }
  ]
}

const cardColors = {
  "Frontend": "from-sky-500/30 to-purple-500/10",
  "Backend": "from-green-500/30 to-gray-900/10",
  "Design": "from-pink-500/30 to-yellow-300/10",
  "DevOps": "from-orange-400/30 to-gray-900/10"
}

const proficiencyColors = {
  Expert: "bg-gradient-to-r from-pink-500/90 to-purple-500/90 text-white",
  Advanced: "bg-gradient-to-r from-yellow-400/90 to-violet-400/90 text-white"
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: .8, staggerChildren: .17 } }
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: .34, duration: .6 } }
};

const SkillsSection = () => (
  <section
    id="skills"
    className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-x-hidden">
    {/* Motion background could go here */}

    <motion.div
      className="text-center mb-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <h2 className="text-5xl mb-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        My Core Skills
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto text-lg mb-6 font-medium">
        Recognized for <b>expertise in modern JavaScript frameworks, API design, and UI/UX</b>. I bring human-centered, business-focused thinking and deep technical skill to every project.
      </p>
    </motion.div>

    {/* Expert Level */}
    <motion.div
      className="mb-14"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="mb-4 text-xl font-bold text-pink-400 tracking-wider text-center flex items-center justify-center">
        Expert Level
        <span className="ml-3 px-4 py-1 rounded-2xl text-base font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white">EXPERT</span>
      </h3>
      <div className="grid md:grid-cols-4 gap-7">
        {GROUPED_SKILLS.Expert.map((skill, idx) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{ scale: 1.08, backgroundColor: "#C026D3AA" }}
            className={`
              group bg-gradient-to-tr ${cardColors[skill.category]} rounded-2xl border border-gray-700 shadow-md
              p-5 flex flex-col items-center transition-all duration-200 ease-in cursor-pointer hover:shadow-2xl
            `}
          >
            <div className="mb-3 text-4xl transition-all group-hover:scale-125">{SKILL_ICON_MAP[skill.name]}</div>
            <div className="text-xl font-bold text-gray-100 mb-1">{skill.name}</div>
            <div className="text-xs px-3 py-1 rounded-full font-semibold tracking-wider mt-2 bg-pink-500/20 text-pink-300 border-pink-400 border-1">Expert</div>
            <p className="text-sm mt-3 text-gray-300 text-center">Proven in real-world projects. Can design, mentor, & solve complex challenges with this skill.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Advanced Level */}
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-2"
    >
      <h3 className="mb-4 text-xl font-bold text-yellow-400 tracking-wider text-center flex items-center justify-center">
        Advanced Level
        <span className="ml-3 px-4 py-1 rounded-2xl text-base font-bold bg-gradient-to-r from-yellow-400 to-violet-400 text-white">ADVANCED</span>
      </h3>
      <div className="grid md:grid-cols-4 gap-7">
        {GROUPED_SKILLS.Advanced.map((skill, idx) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{ scale: 1.08, backgroundColor: "#FACC15AA" }}
            className={`
              group bg-gradient-to-tr ${cardColors[skill.category]} rounded-2xl border border-gray-700 shadow-md
              p-5 flex flex-col items-center transition-all duration-200 ease-in cursor-pointer hover:shadow-2xl
            `}
          >
            <div className="mb-3 text-4xl transition-all group-hover:scale-125">{SKILL_ICON_MAP[skill.name]}</div>
            <div className="text-xl font-bold text-gray-100 mb-1">{skill.name}</div>
            <div className="text-xs px-3 py-1 rounded-full font-semibold tracking-wider mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-400 border-1">Advanced</div>
            <p className="text-sm mt-3 text-gray-300 text-center">Strong experience. Confidently build, contribute, and deliver value using this skill.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    
    <motion.div
      className="mt-16 text-gray-400 text-center text-sm"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <span>
        <b>Note:</b> This is a curated list of my strongest skills.
        If you need details on other tools, learning paths, or certifications, just ask!
      </span>
    </motion.div>
  </section>
);

export default SkillsSection;
