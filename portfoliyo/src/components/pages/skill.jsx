'use client'

import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiRadio,
  FiServer,
} from "react-icons/fi";
import {
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const primarySkills = [
  { name: "React", level: 92, icon: <FaReact className="text-sky-400" />, copy: "Component-driven UI, stateful interactions, and polished frontend delivery." },
  { name: "Next.js", level: 88, icon: <SiNextdotjs className="text-white" />, copy: "Structured app flows, responsive rendering, and production-ready frontend work." },
  { name: "JavaScript", level: 90, icon: <FiCode className="text-yellow-300" />, copy: "Core logic, dynamic behavior, and practical problem solving across projects." },
  { name: "Node.js", level: 84, icon: <FaNodeJs className="text-green-400" />, copy: "Backend APIs, server-side logic, and app integration for complete solutions." },
  { name: "MongoDB", level: 82, icon: <SiMongodb className="text-green-500" />, copy: "Data modeling and persistence for full-stack products and systems." },
  { name: "Python", level: 78, icon: <SiPython className="text-sky-300" />, copy: "Useful for scripting, AI/ML exploration, and workflow-oriented experimentation." },
  { name: "Flutter", level: 76, icon: <SiFlutter className="text-cyan-300" />, copy: "Cross-platform mobile concepts with fast iteration and practical interfaces." },
  { name: "C++", level: 80, icon: <TbBrandCpp className="text-blue-300" />, copy: "Strong base for DSA, logic building, and systems-oriented thinking." },
];

const specializationCards = [
  {
    title: "Frontend Engineering",
    copy: "Responsive layouts, clean UI systems, motion, and interface polish that feels intentional.",
    icon: FiCode,
  },
  {
    title: "Full-Stack Delivery",
    copy: "Comfortable connecting frontend workflows to APIs, databases, and practical product logic.",
    icon: FiServer,
  },
  {
    title: "AI/ML Exploration",
    copy: "Interested in ML-backed workflows, classification ideas, and experimentation-driven product features.",
    icon: FiCpu,
  },
  {
    title: "IoT Thinking",
    copy: "Curious about connected systems, real-world problem solving, and hardware-software style products.",
    icon: FiRadio,
  },
];

const secondarySkills = [
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { label: "Express.js", icon: <SiExpress className="text-slate-200" /> },
  { label: "Firebase", icon: <SiFirebase className="text-amber-300" /> },
  { label: "MySQL", icon: <SiMysql className="text-sky-300" /> },
  { label: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { label: "Figma", icon: <FaFigma className="text-pink-400" /> },
  { label: "REST APIs", icon: <FiServer className="text-slate-200" /> },
  { label: "Machine Learning", icon: <FiCpu className="text-violet-300" /> },
];

const SkillsSection = () => (
  <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-[2rem] p-6 sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Core skills</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">Frontend strength supported by full-stack and emerging-tech depth.</h3>
      <p className="mt-5 text-sm leading-7 text-slate-400">
        These are the technologies I rely on most when building real projects. The focus is not just familiarity, but
        confidence in using them to ship polished and practical outcomes.
      </p>

      <div className="mt-8 space-y-5">
        {primarySkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-xl">
                  {skill.icon}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{skill.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{skill.copy}</p>
                </div>
              </div>
              <span className="rounded-full border border-sky-400/16 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                {skill.level}%
              </span>
            </div>

            <div className="progress-track mt-4 h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.12 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="glass-panel rounded-[2rem] p-6 sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Specializations</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">A skill set built for modern product teams.</h3>
      <p className="mt-5 text-sm leading-7 text-slate-400">
        My profile is centered on frontend quality, but it is supported by full-stack implementation and a willingness
        to explore new technical areas when the product needs them.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {specializationCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/18 text-sky-300">
                <Icon className="text-xl" />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.copy}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Toolbox</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {secondarySkills.map((tool, index) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-xl">
                  {tool.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{tool.label}</p>
                  <p className="text-xs text-slate-500">Useful in production and iteration.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-orange-400/10 p-5">
        <p className="text-sm font-semibold text-white">What stands out in my workflow</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          I care about layout rhythm, reusable structure, responsive behavior, motion details, and making the final
          product feel deliberate. That balance between engineering and user experience is where I do my best work.
        </p>
      </div>
    </motion.div>
  </div>
);

export default SkillsSection;
