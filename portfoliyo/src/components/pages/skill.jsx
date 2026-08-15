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
  { name: "React", level: 92, icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", level: 88, icon: <SiNextdotjs className="text-slate-700" /> },
  { name: "JavaScript", level: 90, icon: <FiCode className="text-yellow-500" /> },
  { name: "Node.js", level: 84, icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", level: 82, icon: <SiMongodb className="text-green-600" /> },
  { name: "Python", level: 78, icon: <SiPython className="text-blue-500" /> },
  { name: "Flutter", level: 76, icon: <SiFlutter className="text-cyan-500" /> },
  { name: "C++", level: 80, icon: <TbBrandCpp className="text-blue-600" /> },
];

const specializationCards = [
  {
    title: "Frontend Engineering",
    copy: "Responsive layouts, clean UI systems, and thoughtful motion.",
    icon: FiCode,
  },
  {
    title: "Full-Stack Delivery",
    copy: "Comfortable connecting UI flows to APIs, databases, and product logic.",
    icon: FiServer,
  },
  {
    title: "AI/ML Exploration",
    copy: "Interested in ML-backed workflows and experimentation-led features.",
    icon: FiCpu,
  },
  {
    title: "IoT Thinking",
    copy: "Curious about connected systems and real-world hardware-software products.",
    icon: FiRadio,
  },
];

const secondarySkills = [
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { label: "Express.js", icon: <SiExpress className="text-slate-600" /> },
  { label: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
  { label: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { label: "Git", icon: <FaGitAlt className="text-slate-600" /> },
  { label: "Figma", icon: <FaFigma className="text-blue-500" /> },
  { label: "REST APIs", icon: <FiServer className="text-slate-600" /> },
  { label: "Machine Learning", icon: <FiCpu className="text-blue-500" /> },
];

const SkillsSection = () => (
  <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-5 sm:p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Core skills</p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900">Frontend strength supported by full-stack depth.</h3>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        These are the tools I rely on most when building polished, practical products.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {primarySkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-lg border border-slate-200 bg-slate-50 p-3.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl">
                  {skill.icon}
                </div>
                <p className="text-base font-semibold text-slate-800">{skill.name}</p>
              </div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {skill.level}%
              </span>
            </div>

            <div className="progress-track mt-4 h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.12 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-blue-600"
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
      className="glass-panel p-5 sm:p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Specializations</p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900">A skill set built for modern product teams.</h3>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        My profile is centered on frontend quality and supported by full-stack implementation.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {specializationCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="text-xl" />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Toolbox</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {secondarySkills.map((tool, index) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl">
                  {tool.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{tool.label}</p>
                  <p className="text-xs text-slate-500">Production-ready tooling.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default SkillsSection;
