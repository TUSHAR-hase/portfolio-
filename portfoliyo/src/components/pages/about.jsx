'use client'

import { motion } from "framer-motion";
import { FiBriefcase, FiCpu, FiTarget, FiZap } from "react-icons/fi";

const stats = [
  { value: "10+", label: "Projects delivered" },
  { value: "3+", label: "Hackathons" },
  { value: "4", label: "Core domains" },
];

const highlights = [
  {
    title: "Product-first mindset",
    copy: "I care about usability, structure, and solving the right problem.",
    icon: FiTarget,
  },
  {
    title: "Cross-domain execution",
    copy: "My projects span web, backend, AI/ML, mobile, and systems work.",
    icon: FiCpu,
  },
  {
    title: "Reliable collaboration",
    copy: "Hackathons and team builds taught me ownership, clarity, and speed.",
    icon: FiBriefcase,
  },
];

const journey = [
  {
    year: "IITRAM",
    title: "Computer Science foundation",
    copy: "Built a strong base in programming, web fundamentals, and software problem solving.",
  },
  {
    year: "Projects",
    title: "Built across domains",
    copy: "Worked on full-stack apps, mobile concepts, AI/ML ideas, and practical system-led projects.",
  },
  {
    year: "Now",
    title: "Refining for opportunities",
    copy: "Improving frontend execution, DSA, and delivery quality for internship opportunities.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-kicker">About</span>
          <h2 className="section-title mt-6 text-balance">
            A developer focused on useful products, clean execution, and steady growth.
          </h2>
          <p className="section-copy mt-6">
            I enjoy turning ideas into reliable digital experiences. My work combines frontend polish, full-stack
            implementation, and curiosity for AI/ML and IoT.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Who I am</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Turning technical skills into practical, internship-focused projects.</h3>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  I&apos;m a Computer Science student at IITRAM with a strong interest in frontend-led product
                  development. I also work across backend flows, mobile concepts, and AI/ML or IoT-driven ideas when a
                  problem needs broader thinking.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 sm:max-w-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiZap />
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>Responsive interfaces that feel clear on every screen</li>
                  <li>Cleaner full-stack projects with stronger structure</li>
                  <li>Sharper DSA and hands-on AI/ML or IoT exploration</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Journey</p>
            <div className="mt-6 space-y-4">
              {journey.map((item) => (
                <div key={item.year} className="relative rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 pl-7">
                  <span className="absolute left-3 top-6 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-[1.75rem] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 text-sky-300">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
