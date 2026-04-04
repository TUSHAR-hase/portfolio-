'use client'

import { motion } from "framer-motion";
import { FiBriefcase, FiCpu, FiTarget, FiZap } from "react-icons/fi";

const stats = [
  { value: "3+", label: "Hackathons won", copy: "Competitive problem solving and rapid product execution." },
  { value: "10+", label: "Real projects", copy: "Web, mobile, dashboards, and system-focused products." },
  { value: "15+", label: "Tools used", copy: "Frontend, backend, cloud, and design workflows." },
];

const highlights = [
  {
    title: "Product mindset",
    copy: "I care about how the interface feels, how the code scales, and how the product solves the actual problem.",
    icon: FiTarget,
  },
  {
    title: "Modern engineering",
    copy: "React, Next.js, Node.js, MongoDB, Tailwind CSS, and mobile stacks for polished end-to-end delivery.",
    icon: FiCpu,
  },
  {
    title: "Strong communication",
    copy: "Hackathons, team work, and freelance-style collaboration taught me how to build clearly and move fast.",
    icon: FiBriefcase,
  },
];

const journey = [
  {
    year: "2022",
    title: "Built the foundation",
    copy: "Started B.Tech in Computer Science at IITRAM and began exploring React, JavaScript, and backend workflows.",
  },
  {
    year: "2023",
    title: "Shipped under pressure",
    copy: "Built real MERN projects, participated in hackathons, and earned strong practical confidence in product building.",
  },
  {
    year: "2024",
    title: "Focused on depth",
    copy: "Strengthened DSA, CS fundamentals, system thinking, and frontend quality for placements and interview readiness.",
  },
  {
    year: "2025+",
    title: "Refining the edge",
    copy: "Continuing to ship cleaner UX, stronger full-stack systems, and portfolio work that reflects real-world quality.",
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
            A developer who blends clean engineering with a strong visual sense.
          </h2>
          <p className="section-copy mt-6">
            I enjoy turning ideas into responsive, reliable, and attractive digital products. My work sits at the
            intersection of frontend polish, backend practicality, and thoughtful user experience, which makes this
            portfolio a reflection of how I like to build in real projects too.
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
                <h3 className="mt-3 text-3xl font-semibold text-white">Building for placements, products, and people.</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  I&apos;m a Computer Science student at IITRAM who enjoys building full-stack products with a premium
                  frontend feel. I&apos;m especially interested in developer portfolios, dashboards, business systems,
                  and user-facing apps that feel intentional instead of generic.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiZap />
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  <li>Premium frontend execution for interview-ready projects</li>
                  <li>Stronger DSA and CS depth for placements</li>
                  <li>Clean full-stack shipping with modern UI systems</li>
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
