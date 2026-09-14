"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
} from "react-icons/fi";

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming (C++)",
  "Database Management Systems",
  "Operating Systems & Concurrency",
  "Computer Networks & Protocols",
  "Software Engineering Principles",
  "Artificial Intelligence & Machine Learning",
  "Microprocessors & Embedded Systems",
];

const pillars = [
  {
    icon: FiCode,
    title: "Algorithms & Complexity",
    description:
      "Trained in rigorous computational thinking. Analyzing Big-O bounds, tree/graph traversals, dynamic programming, and memory-efficient data representation.",
    tag: "DSA Focus",
  },
  {
    icon: FiServer,
    title: "Full-Stack Architecture",
    description:
      "Designing end-to-end web apps. Next.js 16 Edge runtime, Express.js micro-routes, JWT security, and resilient MongoDB/PostgreSQL schemas.",
    tag: "Production Ready",
  },
  {
    icon: FiCpu,
    title: "Applied AI & Vision",
    description:
      "Translating AI research into functional products — from YOLOv8 real-time object detection models to NLP-driven complaint triage systems.",
    tag: "ML Pipelines",
  },
  {
    icon: FiLayers,
    title: "Embedded & Systems",
    description:
      "Interfacing software directly with physical hardware using Arduino, sensor networks, motor drivers, and low-latency C++ control loops.",
    tag: "IoT & Hardware",
  },
];

const milestones = [
  {
    year: "2023 - Present",
    title: "B.Tech Computer Science & Engineering",
    org: "IITRAM (Institute of Infrastructure, Technology, Research and Management)",
    desc: "Maintaining strong academic standing while mastering core computer science foundations, systems programming, and scalable software design.",
    icon: FiBookOpen,
  },
  {
    year: "Hackathons & Builds",
    title: "Full-Stack & ML Solutions",
    org: "National & University Level Hackathons",
    desc: "Built Rail Madad complaint classifier, Women Safety SOS Flutter app, and deployed multi-role enterprise web portals.",
    icon: FiAward,
  },
  {
    year: "Continuous Shipping",
    title: "10+ End-to-End Projects",
    org: "Open Source & Real-World Deployments",
    desc: "Architected complete applications from zero commits to live production deployments on Vercel and cloud platforms.",
    icon: FiGitBranch,
  },
];

export default function About() {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="about" className="section-shell relative">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-kicker">About · CS Engineer</span>
          <h2 className="section-title mt-5">
            Grounded in Computer Science Theory. Driven by Building at Scale.
          </h2>
          <p className="section-copy-md mt-5">
            I am a Computer Science &amp; Engineering student at <strong className="text-strong font-semibold">IITRAM</strong>.
            I bridge the gap between rigorous algorithmic problem-solving and shipping clean, maintainable, user-first web applications.
          </p>
        </motion.div>

        {/* Academic Card + Core Pillars Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Engineering Academic Background Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleCardMouseMove}
            className="spotlight-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                  Academic Focus
                </p>
                <h3 className="mt-1 text-2xl font-bold text-strong">
                  IITRAM Computer Science
                </h3>
              </div>
              <span className="chip-accent text-xs">B.Tech CSE</span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-secondary">
              At IITRAM, my education combines rigorous core CS disciplines—formal data structures, algorithm design, operating systems, and network protocols—with extensive hands-on software development.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              Rather than writing throwaway scripts, I focus on system modularity, clean API contracts, and low-latency database queries.
            </p>

            {/* University Coursework Chips */}
            <div className="mt-6">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
                Key Computer Science Coursework:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="tag border border-border/80 bg-surface-2/80 text-[11px]"
                  >
                    <FiCheckCircle className="text-accent-bright" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/80 pt-6">
              <div className="rounded-xl border border-border/60 bg-surface-2/50 p-3 text-center">
                <p className="text-xl font-black text-accent-bright">250+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  DSA Problems
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface-2/50 p-3 text-center">
                <p className="text-xl font-black text-cyan-400">10+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Full Builds
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface-2/50 p-3 text-center">
                <p className="text-xl font-black text-emerald-400">3+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Hackathons
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journey / Milestone Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            onMouseMove={handleCardMouseMove}
            className="spotlight-card p-6 sm:p-8"
          >
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
              Engineering Path
            </p>
            <h3 className="mt-1 text-2xl font-bold text-strong">
              Milestones &amp; Trajectory
            </h3>

            <div className="mt-6 space-y-5">
              {milestones.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative rounded-xl border border-border/60 bg-surface-2/60 p-4 pl-12 transition hover:border-accent/40"
                  >
                    <span className="absolute left-3.5 top-4.5 flex h-6 w-6 items-center justify-center rounded-lg bg-accent-soft text-accent-bright">
                      <Icon className="text-sm" />
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-strong">{item.title}</h4>
                      <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] font-mono text-accent-bright">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-accent-cyan">
                      {item.org}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-secondary">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-8">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
              Technical Disciplines
            </span>
            <h3 className="mt-1 text-2xl font-bold text-strong">
              How I Solve Engineering Challenges
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseMove={handleCardMouseMove}
                  className="spotlight-card flex flex-col p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-bright">
                      <Icon className="text-lg" />
                    </span>
                    <span className="tag text-[10px]">{pillar.tag}</span>
                  </div>

                  <h4 className="mt-4 text-base font-bold text-strong">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-secondary flex-1">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}