'use client'

import { motion } from "framer-motion";
import { FiBriefcase, FiCpu, FiTarget, FiZap } from "react-icons/fi";

const stats = [
  { value: "10+", label: "Projects built", copy: "Web apps, mobile work, AI/ML concepts, and system-driven builds." },
  { value: "3+", label: "Hackathons", copy: "Fast execution, teamwork, and pressure-tested problem solving." },
  { value: "4", label: "Key domains", copy: "Frontend, full-stack, AI/ML, and IoT-oriented problem solving." },
];

const highlights = [
  {
    title: "Product-first mindset",
    copy: "I focus on how the product feels to use, how the codebase stays maintainable, and how the solution serves the real problem.",
    icon: FiTarget,
  },
  {
    title: "Cross-domain execution",
    copy: "My work spans responsive frontend systems, backend integration, AI/ML experimentation, and practical IoT thinking.",
    icon: FiCpu,
  },
  {
    title: "Reliable collaboration",
    copy: "Hackathons, academic projects, and team builds taught me how to communicate clearly, take ownership, and move fast.",
    icon: FiBriefcase,
  },
];

const journey = [
  {
    year: "2022",
    title: "Built the foundation",
    copy: "Started B.Tech in Computer Science at IITRAM and built a base in programming, frontend development, and web fundamentals.",
  },
  {
    year: "2023",
    title: "Shipped real products",
    copy: "Worked on full-stack projects, mobile app ideas, and hackathon builds that improved both speed and practical confidence.",
  },
  {
    year: "2024",
    title: "Expanded into new domains",
    copy: "Explored AI/ML-oriented workflows, sharper frontend execution, and system-led ideas including connected-device thinking.",
  },
  {
    year: "2025+",
    title: "Refining for opportunities",
    copy: "Continuing to strengthen DSA, full-stack delivery, responsive UI quality, and portfolio work aimed at placements and internships.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-kicker">About</span>
          <h2 className="section-title mt-6 text-balance">
            A developer focused on practical products, clean execution, and steady growth.
          </h2>
          <p className="section-copy mt-6">
            I enjoy turning ideas into reliable, responsive, and professional digital experiences. My work brings
            together frontend polish, full-stack implementation, and curiosity for AI/ML and IoT, so this portfolio
            reflects the kind of products I want to keep building in real teams.
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
                <h3 className="mt-3 text-3xl font-semibold text-white">Turning technical skills into interview-ready, real-world projects.</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  I&apos;m a Computer Science student at IITRAM who enjoys building products that look polished and work
                  reliably. My strongest interest is in frontend-led product development, but I also work comfortably
                  across backend flows, mobile app concepts, AI/ML-based features, and system-oriented ideas that solve
                  practical problems.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 sm:max-w-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiZap />
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  <li>Responsive frontend execution that feels professional on every screen</li>
                  <li>Full-stack projects with cleaner APIs, structure, and deployment readiness</li>
                  <li>Sharper DSA, AI/ML exploration, and IoT-oriented product thinking</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{stat.copy}</p>
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
            <div className="mt-6 space-y-5">
              {journey.map((item) => (
                <div key={item.year} className="relative rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 pl-7">
                  <span className="absolute left-3 top-6 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-[1.75rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 text-sky-300">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
