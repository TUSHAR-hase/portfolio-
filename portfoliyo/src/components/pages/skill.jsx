import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker, FaAws,
    FaFigma, FaPalette, FaPencilRuler, FaUsers, FaTools, FaGraduationCap, FaBrain, FaBookOpen,FaJsSquare
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql,
    SiCircleci, SiTypescript, SiJavascript, SiGraphql, SiRedux,
    SiPython, SiDjango, SiPostgresql, SiRedis, SiKubernetes, SiJenkins,
    SiAdobephotoshop, SiAdobeillustrator, SiWebpack,SiFirebase,SiDart
} from 'react-icons/si';

const skillCategories = {
    Frontend: [
        { name: 'React', level: 90, proficiency: 'Expert', icon: <FaReact /> },
        { name: 'Next.js', level: 85, proficiency: 'Advanced', icon: <SiNextdotjs /> },
        { name: 'HTML/CSS', level: 95, proficiency: 'Expert', icon: <><FaHtml5 /><FaCss3Alt /></> },
        { name: 'Tailwind CSS', level: 92, proficiency: 'Expert', icon: <SiTailwindcss /> },
        { name: 'JavaScript', level: 93, proficiency: 'Expert', icon: <FaJsSquare /> },
    ],
    Backend: [
        { name: 'Node.js', level: 88, proficiency: 'Expert', icon: <FaNodeJs /> },
        { name: 'Express.js', level: 85, proficiency: 'Advanced', icon: <SiExpress /> },
        { name: 'MongoDB', level: 95, proficiency: 'Expert', icon: <SiMongodb /> },
        { name: 'MySQL', level: 80, proficiency: 'Advanced', icon: <SiMysql /> },
        { name: 'Firebase', level: 85, proficiency: 'Advanced', icon: <SiFirebase /> },
        { name: 'Dart', level: 80, proficiency: 'Advanced', icon: <SiDart /> },

    ],
    Design: [
        { name: 'Figma', level: 70, proficiency: 'Expert', icon: <FaFigma /> },
        { name: 'UI/UX Design', level: 85, proficiency: 'Advanced', icon: <FaPalette /> },
        { name: 'Wireframing', level: 87, proficiency: 'Advanced', icon: <FaPencilRuler /> },
        { name: 'User Research', level: 82, proficiency: 'Advanced', icon: <FaUsers /> },
    ],
    DevOps: [
        // { name: 'Docker', level: 78, proficiency: 'Intermediate', icon: <FaDocker /> },
        // { name: 'AWS', level: 75, proficiency: 'Intermediate', icon: <FaAws /> },
        // { name: 'CI/CD', level: 80, proficiency: 'Advanced', icon: <SiCircleci /> },
        { name: 'Git', level: 92, proficiency: 'Expert', icon: <FaGitAlt /> },
    ]
};

// Skills currently being learned
const learningSkills = [
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'text-pink-500' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-400' },
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-400' },
    { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-purple-500' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-300' },
    { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
    { name: 'Jenkins', icon: <SiJenkins />, color: 'text-red-400' },
    { name: 'Webpack', icon: <SiWebpack />, color: 'text-blue-200' },
    { name: 'Adobe Suite', icon: <SiAdobephotoshop />, color: 'text-pink-300' },
    { name: 'Illustrator', icon: <SiAdobeillustrator />, color: 'text-orange-400' },
];

// Proficiency badge colors
const proficiencyColors = {
    Beginner: 'bg-blue-500/20 text-blue-400',
    Intermediate: 'bg-green-500/20 text-green-400',
    Advanced: 'bg-yellow-500/20 text-yellow-400',
    Expert: 'bg-pink-500/20 text-pink-400',
};

// Icon colors for different categories
const iconColors = {
    Frontend: 'text-blue-400',
    Backend: 'text-green-400',
    Design: 'text-pink-400',
    DevOps: 'text-yellow-400'
};

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            staggerChildren: 0.1
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5
        }
    },
};

const progressVariants = {
    hidden: { pathLength: 0 },
    visible: {
        pathLength: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        }
    }
};

const CircularProgress = ({ value, size = 100, strokeWidth = 8, icon, category }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference * (1 - value / 100);

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#374151"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-3xl ${iconColors[category.replace(/\s+/g, '')]}`}>
                    {icon}
                </div>
            </div>
        </div>
    );
};

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    return (
        <section
            id="skills"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-20 px-6 md:px-12 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] bg-radial-gradient(from-60% at 50% 50%, rgba(192,132,252,0.2) 0%, rgba(192,132,252,0) 60%)"
                />
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 left-0 sm:-left-16 animate-pulse" />
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 right-0 sm:-right-16 rotate-180" />
            </div>

            <div className="max-w-6xl mx-auto z-10 relative">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
                        Technical Expertise
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                       With over 2+ years of experience in web development, I specialize in creating performant, accessible, and visually stunning applications.

I focus on modern JavaScript frameworks, responsive design, and creating intuitive user experiences.
                    </p>
                </motion.div>

                {/* Category Switcher */}
                <motion.div
                    className="flex justify-center flex-wrap gap-4 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Object.keys(skillCategories).map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border ${selectedCategory === cat
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/30'
                                    : 'bg-gray-800/50 backdrop-blur-sm border-gray-700 text-gray-300 hover:bg-gray-700/50'
                                }`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skill Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillCategories[selectedCategory].map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-300 h-full flex flex-col items-center">
                                <div className="mb-4">
                                    <CircularProgress
                                        value={skill.level}
                                        size={110}
                                        strokeWidth={10}
                                        icon={skill.icon}
                                        category={selectedCategory}
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-center text-white">{skill.name}</h4>

                                {/* Proficiency Badge */}
                                <div className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${proficiencyColors[skill.proficiency]}`}>
                                    {skill.proficiency}
                                </div>

                                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />

                                {/* Professional Assessment */}
                                <div className="mt-4 text-center text-sm text-gray-300">
                                    {skill.proficiency === 'Expert' && "Mastery-level proficiency with deep architectural knowledge"}
                                    {skill.proficiency === 'Advanced' && "Strong practical experience, capable of complex implementations"}
                                    {skill.proficiency === 'Intermediate' && "Proficient in core concepts with production experience"}
                                    {skill.proficiency === 'Beginner' && "Learning fundamentals, basic project experience"}
                                </div>

                                <div className="mt-4 w-full">
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span>0%</span>
                                        <span>{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-2 rounded-full">
                                        <motion.div
                                            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Proficiency Legend */}
                {/* <motion.div 
          className="mt-16 p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center text-white mb-4">Proficiency Scale</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h4 className="mt-2 font-semibold text-blue-400">Beginner</h4>
              <p className="text-xs text-gray-400 mt-1 text-center">Basic understanding, learning fundamentals</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <h4 className="mt-2 font-semibold text-green-400">Intermediate</h4>
              <p className="text-xs text-gray-400 mt-1 text-center">Practical experience, core concepts mastered</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h4 className="mt-2 font-semibold text-yellow-400">Advanced</h4>
              <p className="text-xs text-gray-400 mt-1 text-center">Complex implementations, deep knowledge</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <h4 className="mt-2 font-semibold text-pink-400">Expert</h4>
              <p className="text-xs text-gray-400 mt-1 text-center">Mastery-level, architectural proficiency</p>
            </div>
          </div>
        </motion.div> */}

                {/* Continuous Learning Section */}
                <motion.div
                    className="mt-16 p-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl border border-indigo-500/30 relative overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                            <motion.div
                                className="relative"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <FaGraduationCap className="text-6xl text-pink-400" />
                                <FaBrain className="absolute -top-2 -right-4 text-3xl text-purple-400 animate-pulse" />
                                <FaBookOpen className="absolute -bottom-4 -left-4 text-2xl text-blue-400 animate-pulse" />
                            </motion.div>
                        </div>

                        <div className="md:w-2/3 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center md:justify-start">
                                <span className="mr-3">Continuous Learning Journey</span>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <span className="text-pink-400">🚀</span>
                                </motion.div>
                            </h3>

                            <p className="text-gray-300 mb-6">
                                I'm constantly expanding my skill set and staying updated with the latest technologies
                                and best practices in web development. The tech landscape evolves rapidly, and I'm committed
                                to continuous learning through courses, documentation, and building real-world projects.
                            </p>

                            {/* <div className="mt-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Currently Exploring:</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {learningSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className={`flex items-center px-4 py-2 rounded-full bg-gray-800/60 backdrop-blur-sm ${skill.color}`}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: 'rgba(76, 29, 149, 0.5)'
                                            }}
                                        >
                                            <span className="mr-2 text-lg">{skill.icon}</span>
                                            <span className="font-medium">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: Math.random() * 100 - 50 + '%',
                                y: Math.random() * 100 - 50 + '%'
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.6, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;