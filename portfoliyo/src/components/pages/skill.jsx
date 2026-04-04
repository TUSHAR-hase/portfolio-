'use client'

import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
} from "react-icons/si";

const primarySkills = [
  { name: "React", level: 92, icon: <FaReact className="text-sky-400" />, copy: "Reusable UI, state-driven apps, smooth interactions." },
  { name: "Next.js", level: 84, icon: <SiNextdotjs className="text-white" />, copy: "App structure, performance-focused rendering, portfolio-grade layouts." },
  { name: "JavaScript", level: 90, icon: <FaJsSquare className="text-yellow-300" />, copy: "Core logic, dynamic interfaces, and problem-solving comfort." },
  { name: "Tailwind CSS", level: 93, icon: <SiTailwindcss className="text-cyan-400" />, copy: "Design systems, responsive layout work, and polished utility-first styling." },
  { name: "Node.js", level: 86, icon: <FaNodeJs className="text-green-400" />, copy: "API integration, backend logic, and product shipping support." },
  { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" />, copy: "Schema-driven work for full-stack apps and business systems." },
];

const secondarySkills = [
  { label: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { label: "Express.js", icon: <SiExpress className="text-slate-200" /> },
  { label: "MySQL", icon: <SiMysql className="text-sky-300" /> },
  { label: "Firebase", icon: <SiFirebase className="text-amber-300" /> },
  { label: "Dart", icon: <SiDart className="text-sky-400" /> },
  { label: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { label: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

const SkillsSection = () => (
  <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-[2rem] p-6 sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Core skills</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">Frontend-first, full-stack capable.</h3>
      <p className="mt-5 text-sm leading-7 text-slate-400">
        These are the tools I rely on most when building modern interfaces and end-to-end projects. The emphasis is
        on practical confidence, not just familiarity.
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
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Toolbox</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">Supporting technologies that help me ship faster.</h3>
      <p className="mt-5 text-sm leading-7 text-slate-400">
        Beyond the main stack, these tools support design workflows, backend delivery, collaboration, and
        experimentation across projects.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {secondarySkills.map((tool, index) => (
          <motion.div
            key={tool.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
            whileHover={{ y: -3 }}
            className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-xl">
                {tool.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{tool.label}</p>
                <p className="text-xs text-slate-500">Ready for production and iteration.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-orange-400/10 p-5">
        <p className="text-sm font-semibold text-white">What stands out in my workflow</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          I care about layout rhythm, clean component structure, motion details, and making the final interface feel
          deliberate. That balance between engineering and UX is the part of frontend work I enjoy most.
        </p>
      </div>
    </motion.div>
  </div>
);

export default SkillsSection;
