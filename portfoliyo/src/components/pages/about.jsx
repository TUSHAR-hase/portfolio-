'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Hero quick stats (edit these to your real stats)
const STATS = [
  { label: 'Hackathons Won', value: '3+', description: 'National-level coding challenges' },
  { label: 'Projects Completed', value: '25+', description: 'From AI apps to full-stack platforms' },
  { label: 'Technologies Used', value: '50+', description: 'Covering web, mobile, AI, cloud, and more' },
  { label: 'Users Impacted', value: '100K+', description: 'Across freelance and open-source work' }
];

// Timeline: Professional Journey
const TIMELINE = [
  { year: 2022, text: 'Started B.Tech in Computer Science at IITRAM; explored React and Python.' },
  { year: 2023, text: 'Built multiple MERN stack apps and women safety system; won national hackathon (3rd place).' },
  { year: 2024, text: 'Focused on mastering DSA through GATE and placement preparation; built CS fundamentals.' },
  { year: 2025, text: 'Currently refining full-stack skills with projects like a remote work tracker and POS system; actively exploring system design, deployment, and real-world freelancing.' }
];



const VALUES = [
  { title: 'Curious Creator', detail: 'Always building something new—apps, experiments, or YouTube stories.' },
  { title: 'Team Player & Leader', detail: 'From solo developer to hackathon team lead—adapting to every role.' },
  { title: 'Future-Focused', detail: 'Learning AI, DevOps, and CS fundamentals with a clear government job goal.' }
];


const SKILLS = [
  {
    icon: '',
    title: 'Full-Stack Projects',
    content: 'Proficient in React.js, Node.js, Express, MongoDB, Tailwind CSS, and building scalable web apps.'
  },
  {
    icon: '',
    title: 'App Development',
    content: 'Worked on Flutter and React Native apps with real-time APIs and Firebase/Stripe integration.'
  },
  {
    icon: '',
    title: 'AI Integrations',
    content: 'Built apps using OpenAI, ML Kit, real-time face detection, voice translation, and animated video scripts.'
  },
  {
    icon: '',
    title: 'Cloud & DevOps',
    content: 'Deployed apps on Vercel, used GitHub Actions, CI/CD, and integrated systems with REST APIs securely.'
  }
];

const About = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const randomParticles = Array.from({ length: 34 }, () => ({
      x: `${Math.random() * 120 - 60}%`,
      y: `${Math.random() * 120 - 60}%`,
      size: 1 + Math.random() * 4,
      color: `rgba(${200 + Math.floor(Math.random()*55)}, ${70 + Math.floor(Math.random()*40)}, ${160 + Math.floor(Math.random()*80)},${0.17 + Math.random() * 0.22})`,
      blur: 1 + Math.random() * 2.5,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 3,
    }));
    setParticles(randomParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.65, 0.01, 0.35, 1] }
    }
  };
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.15 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.6, 0, 0.15, 1] }
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-24 relative overflow-hidden"
    >
      {/* Animated Creative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 0.1 }}
          transition={{ duration: 13, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute w-full h-full max-w-[1100px] max-h-[1100px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent"
        />
        <div className="absolute w-[26rem] h-[22rem] bg-gradient-to-r from-violet-800/30 to-pink-500/30 blur-3xl -top-44 left-0 animate-pulse" />
        <div className="absolute w-[28rem] h-[20rem] bg-gradient-to-r from-pink-400/35 to-purple-800/25 blur-3xl -bottom-32 right-0 rotate-180" />
      </div>

      <div className="container mx-auto px-4 z-10 max-w-7xl">

        {/* Header Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.42 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-36 h-36 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full blur-3xl opacity-25" />
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
            About Me
          </h1>
          <p className="text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-semibold">
            I shape technology <span className="text-pink-400 font-bold">into elegant products</span>—combining <span className="text-purple-300 font-bold">creative technology, user empathy,</span> and <span className="text-violet-300 font-bold">business insight</span>.<br/>
            Let's build what's next!
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-7 mb-14"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-900/85 rounded-xl px-8 py-6 border border-violet-700/25 shadow-xl flex flex-col items-center hover:-translate-y-2 group transition-transform duration-300"
            >
              <span className="text-3xl font-extrabold text-pink-400 mb-1 group-hover:scale-110 transition-transform">{stat.value}</span>
              <span className="font-bold text-gray-100">{stat.label}</span>
              <span className="text-gray-400 text-xs mt-1">{stat.description}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.23 }}
          className="mb-14"
        >
          <h2 className="text-xl text-gray-300 font-bold mb-5 text-center tracking-wide">
            Professional Journey Timeline
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 justify-center items-center max-w-4xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="bg-gray-800/80 border border-pink-400/10 rounded-xl px-6 py-4 flex flex-col items-center shadow-md min-w-[200px]">
                <span className="text-pink-400 font-extrabold text-lg mb-1">{item.year}</span>
                <span className="text-gray-200 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values & Strengths */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {VALUES.map((v, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-900/75 border border-violet-600/10 px-5 py-6 rounded-2xl shadow flex flex-col items-center text-center"
            >
              <span className="text-purple-400 font-bold mb-2 text-lg">{v.title}</span>
              <span className="text-gray-300 text-[1rem]">{v.detail}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills (with icons) */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-9"
        >
          {SKILLS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-gray-800/70 backdrop-blur-md rounded-xl p-7 border border-gray-700/40 hover:border-pink-400/20 transition-all duration-300 flex"
            >
              <span className="text-2xl md:text-3xl mr-4">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Creative Floating Particles */}
      {particles.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${pos.size * 7}px`,
            height: `${pos.size * 7}px`,
            background: pos.color,
            left: `calc(50% + ${pos.x})`,
            top: `calc(50% + ${pos.y})`,
            filter: `blur(${pos.blur}px) drop-shadow(0px 0px 4px ${pos.color})`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.07, 0.5, 0], opacity: [0, 0.8, 0.32, 0] }}
          transition={{
            duration: pos.duration,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </section>
  );
};

export default About;
