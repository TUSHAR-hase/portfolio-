"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpencv,
  SiPostman,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { sound } from "../../utils/sound";

const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "cs", label: "Core CS & Languages" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Backend & Cloud" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "tools", label: "DevOps & Tools" },
];

const skillsData = [
  // Core CS & Languages
  {
    name: "C++",
    category: "cs",
    level: 88,
    tier: "Core DSA",
    icon: SiCplusplus,
    color: "text-blue-500",
    useCase: "Data Structures & Algorithms, memory pointers, time-critical logic",
  },
  {
    name: "JavaScript (ES6+)",
    category: "cs",
    level: 93,
    tier: "Production",
    icon: SiJavascript,
    color: "text-amber-400",
    useCase: "Asynchronous I/O, Promises, Event Loop, DOM manipulation",
  },
  {
    name: "TypeScript",
    category: "cs",
    level: 84,
    tier: "Advanced",
    icon: SiTypescript,
    color: "text-blue-400",
    useCase: "Static type-safety, interface modeling, generics in Next.js",
  },
  {
    name: "Python",
    category: "cs",
    level: 86,
    tier: "Advanced",
    icon: SiPython,
    color: "text-amber-500",
    useCase: "Computer vision, ML scripting, data pipelines, automation",
  },
  {
    name: "Dart",
    category: "cs",
    level: 80,
    tier: "Confident",
    icon: SiDart,
    color: "text-cyan-400",
    useCase: "Cross-platform mobile apps, reactive streams with Flutter",
  },

  // Frontend & Web
  {
    name: "React 19",
    category: "frontend",
    level: 94,
    tier: "Production",
    icon: FaReact,
    color: "text-cyan-400",
    useCase: "Custom hooks, concurrent rendering, virtual DOM optimization",
  },
  {
    name: "Next.js 16",
    category: "frontend",
    level: 92,
    tier: "Production",
    icon: SiNextdotjs,
    color: "text-slate-300",
    useCase: "App Router, SSR/SSG, Edge runtime API endpoints, SEO optimization",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    level: 95,
    tier: "Expert",
    icon: SiTailwindcss,
    color: "text-sky-400",
    useCase: "Modern responsive design, custom glassmorphism, theme tokens",
  },

  // Backend & Cloud
  {
    name: "Node.js",
    category: "backend",
    level: 88,
    tier: "Production",
    icon: FaNodeJs,
    color: "text-emerald-500",
    useCase: "Event-driven architecture, file streaming, backend microservices",
  },
  {
    name: "Express.js",
    category: "backend",
    level: 89,
    tier: "Production",
    icon: SiExpress,
    color: "text-slate-400",
    useCase: "RESTful endpoints, middleware chains, JWT authentication",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 86,
    tier: "Production",
    icon: SiMongodb,
    color: "text-green-500",
    useCase: "Mongoose schemas, aggregation pipelines, document indexing",
  },
  {
    name: "Firebase",
    category: "backend",
    level: 82,
    tier: "Confident",
    icon: SiFirebase,
    color: "text-amber-500",
    useCase: "Real-time Firestore sync, Firebase Auth, push notifications",
  },
  {
    name: "MySQL",
    category: "backend",
    level: 82,
    tier: "Confident",
    icon: SiMysql,
    color: "text-blue-500",
    useCase: "Relational modeling, ACID compliance, joins and foreign keys",
  },

  // AI / ML
  {
    name: "YOLOv8 & OpenCV",
    category: "ai",
    level: 80,
    tier: "Applied ML",
    icon: SiOpencv,
    color: "text-rose-400",
    useCase: "Real-time object detection, video frame bounding box inference",
  },
  {
    name: "Scikit-learn & NLP",
    category: "ai",
    level: 78,
    tier: "Applied ML",
    icon: FiCpu,
    color: "text-indigo-400",
    useCase: "Text classification, speech-to-text integration (Rail Madad)",
  },

  // DevOps & Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: 90,
    tier: "Daily Driver",
    icon: FaGitAlt,
    color: "text-orange-500",
    useCase: "Feature branching, pull requests, semantic versioning",
  },
  {
    name: "Postman & REST APIs",
    category: "tools",
    level: 88,
    tier: "Confident",
    icon: SiPostman,
    color: "text-amber-600",
    useCase: "API contracts, automated test collections, endpoint profiling",
  },
  {
    name: "Flutter",
    category: "tools",
    level: 82,
    tier: "Confident",
    icon: SiFlutter,
    color: "text-cyan-400",
    useCase: "Mobile UX, geolocation APIs, emergency alert dispatching",
  },
];

const dsaTopics = [
  { topic: "Arrays & Strings", desc: "Two pointers, sliding window, prefix sums" },
  { topic: "Trees & Binary Search", desc: "BST traversals, recursion, divide & conquer" },
  { topic: "Graph Algorithms", desc: "BFS, DFS, Dijkstra shortest path, connected components" },
  { topic: "Dynamic Programming", desc: "Memoization, tabulation, optimal substructure" },
  { topic: "Hash Tables & Heaps", desc: "O(1) lookups, priority queues, frequency mapping" },
  { topic: "Time & Space Complexity", desc: "Rigorous Big-O analysis on every implementation" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleTabClick = (id) => {
    sound.playClick();
    setActiveCategory(id);
  };

  return (
    <section id="skills" className="section-shell relative">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Technical Competency</span>
            <h2 className="section-title mt-5">
              Engineering Stack &amp; Algorithmic Mastery.
            </h2>
            <p className="section-copy-md mt-5">
              From low-level data structures and memory management to distributed full-stack architecture and deployed AI vision models.
            </p>
          </div>

          <span className="glass-panel shrink-0 px-4 py-2 text-xs font-mono font-bold text-accent-bright">
            {skillsData.length} Core Technologies Profiled
          </span>
        </motion.div>

        {/* DSA Mastery Banner */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleCardMouseMove}
          className="spotlight-card mt-10 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-bright">
                <FiCode className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-strong sm:text-xl">
                  Data Structures &amp; Algorithms Proficiency
                </h3>
                <p className="text-xs text-muted font-mono">
                  250+ Algorithmic Problems Solved · C++ &amp; Python
                </p>
              </div>
            </div>
            <span className="chip-success text-xs">O(N) Complexity Obsessed</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dsaTopics.map((item) => (
              <div
                key={item.topic}
                className="rounded-xl border border-border/60 bg-surface-2/60 p-3.5 transition hover:border-accent/40"
              >
                <p className="text-xs font-bold text-strong flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                  {item.topic}
                </p>
                <p className="mt-1 text-[11px] text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleTabClick(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition ${
                activeCategory === cat.id
                  ? "bg-accent text-white shadow-md"
                  : "border border-border/80 bg-surface text-muted hover:border-accent hover:text-strong"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
                onMouseMove={handleCardMouseMove}
                className="spotlight-card flex flex-col justify-between p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-xl shadow-sm">
                        <Icon className={skill.color} />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-strong">{skill.name}</h4>
                        <span className="tag text-[10px]">{skill.tier}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-accent-bright">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="progress-track mt-4 h-1.5 w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                    />
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-secondary">
                    {skill.useCase}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}