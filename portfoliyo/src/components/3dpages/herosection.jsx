"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiCode,
  FiCpu,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import { SiCplusplus, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact } from "react-icons/si";

import yourImage from "../../assets/images/tushrphoto.jpg";
import { sound } from "../../utils/sound";
import ParticleCanvas from "./particleCanvas";

const techBadges = [
  { label: "C++ / DSA", icon: SiCplusplus, color: "text-blue-400" },
  { label: "Next.js 16", icon: SiNextdotjs, color: "text-slate-300" },
  { label: "React 19", icon: SiReact, color: "text-cyan-400" },
  { label: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
  { label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { label: "Python (AI)", icon: SiPython, color: "text-amber-400" },
];

const metrics = [
  { value: "10+", label: "Systems Shipped" },
  { value: "250+", label: "DSA Solved" },
  { value: "3+", label: "Hackathons" },
  { value: "15+", label: "Tech Stacks" },
];

const socials = [
  { href: "https://github.com/TUSHAR-hase", icon: FiGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:thakorrajta859@gmail.com", icon: FiMail, label: "Email" },
];

export default function Hero({ onOpenTerminal }) {
  const [activeTab, setActiveTab] = useState("system");

  const handleTabChange = (tab) => {
    sound.playClick();
    setActiveTab(tab);
  };

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center pt-24 pb-12 lg:pt-28">
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="section-inner relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Left Column: Narrative & CS Student Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="section-kicker">
                IITRAM · B.Tech Computer Science
              </span>
              <span className="chip-success hidden text-[11px] sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for SWE Internships
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-strong sm:text-5xl lg:text-6xl">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">Scalable Systems</span> &amp; Modern Web Apps.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
              Hi, I&apos;m <strong className="text-strong font-bold">Tushar Thakor</strong>. Computer Science &amp; Engineering student at{" "}
              <strong className="text-strong font-semibold">IITRAM</strong>. I build high-performance full-stack web platforms, design RESTful microservices, optimize algorithmic bottlenecks, and integrate computer vision / ML models.
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {techBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.label}
                    className="tag border border-border/80 bg-surface/70 backdrop-blur-sm transition-all hover:border-accent hover:shadow-sm"
                  >
                    <Icon className={`mr-1 text-sm ${badge.color}`} />
                    {badge.label}
                  </span>
                );
              })}
            </div>

            {/* Location & Institution meta */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="text-sm text-cyan-400" />
                Ahmedabad, Gujarat, India
              </span>
              <span className="text-border-strong">•</span>
              <span className="inline-flex items-center gap-1.5">
                <FiCode className="text-sm text-indigo-400" />
                DSA &amp; System Design Focus
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#portfolio"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => sound.playClick()}
                className="button-primary"
              >
                Explore Projects
                <FiArrowRight className="text-lg" />
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  sound.playClick();
                  if (onOpenTerminal) onOpenTerminal();
                }}
                className="button-cyber"
              >
                <FiTerminal className="text-cyan-400" />
                Launch Dev Terminal
              </motion.button>

              <motion.a
                href="/TUSHAR_THAKOR_RESUME.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => sound.playSuccess()}
                className="button-secondary"
              >
                <FiDownload />
                CV (PDF)
              </motion.a>
            </div>

            {/* Social Channels */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-cyan-400"
                  >
                    <Icon className="text-base text-accent-bright" />
                    {social.label}
                  </a>
                );
              })}
            </div>

            {/* CSE Metric Stats Counter */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border/70 bg-surface/60 p-3.5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Developer Sandbox & System Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-cyan-500/15 to-purple-600/20 blur-2xl" />

            <div className="terminal-window overflow-hidden border border-white/15 bg-[#080c16]/95 shadow-2xl backdrop-blur-xl">
              {/* Dev Console Header Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#0c1222] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </span>
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    tushar-workspace :: iitram-node-1
                  </span>
                </div>

                {/* Switchable Tabs */}
                <div className="flex items-center gap-1">
                  {[
                    { id: "system", label: "deploy.sh" },
                    { id: "arch", label: "system.json" },
                    { id: "status", label: "health.log" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={`rounded px-2 py-0.5 font-mono text-xs transition ${
                        activeTab === tab.id
                          ? "bg-white/15 font-semibold text-cyan-300"
                          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dev Console Tab Content */}
              <div className="p-5 font-mono text-xs leading-relaxed">
                {activeTab === "system" && (
                  <div className="space-y-1.5">
                    <div className="text-slate-500">#!/usr/bin/env bash</div>
                    <div className="text-slate-500"># End-to-End Engineering Lifecycle</div>
                    <div>
                      <span className="text-indigo-400 font-semibold">init_pipeline</span>() {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">echo</span>{" "}
                      <span className="text-emerald-300">&quot;[1/4] Designing component schema in Next.js 16...&quot;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">echo</span>{" "}
                      <span className="text-emerald-300">&quot;[2/4] Architecting REST API endpoints in Node/Express...&quot;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">echo</span>{" "}
                      <span className="text-emerald-300">&quot;[3/4] Optimizing MongoDB indexes &amp; data cache...&quot;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-300">echo</span>{" "}
                      <span className="text-emerald-300">&quot;[4/4] Automated tests: 100% pass | 0 regression...&quot;</span>
                    </div>
                    <div className="pl-4 text-amber-300">
                      return <span className="text-white">&quot;SYSTEM_PRODUCTION_READY&quot;</span>
                    </div>
                    <div>{"}"}</div>
                    <div className="pt-2 text-emerald-400 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>$ init_pipeline &gt;&gt; build status: SUCCESS (0 errors)</span>
                    </div>
                  </div>
                )}

                {activeTab === "arch" && (
                  <div className="space-y-1 text-slate-300">
                    <div>{"{"}</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;engineer&quot;</span>: <span className="text-emerald-300">&quot;Tushar Thakor&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;institution&quot;</span>: <span className="text-emerald-300">&quot;IITRAM (CSE)&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;corePillars&quot;</span>: [
                    </div>
                    <div className="pl-8 text-amber-300">
                      &quot;Data Structures &amp; Algorithms&quot;,<br />
                      &quot;Full-Stack Distributed Web Systems&quot;,<br />
                      &quot;Applied Machine Learning &amp; Computer Vision&quot;,<br />
                      &quot;Hardware-Software Embedded IoT&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;latencyTarget&quot;</span>: <span className="text-purple-400">&quot;&lt;150ms P99&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">&quot;availability&quot;</span>: <span className="text-emerald-400">&quot;Immediate / Summer Internships&quot;</span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                )}

                {activeTab === "status" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Node Engine:</span>
                      <span className="font-semibold text-emerald-400">v22.x LTS (Healthy)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Database Pool:</span>
                      <span className="font-semibold text-cyan-400">MongoDB Atlas (Replica Set Active)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">DSA LeetCode Solved:</span>
                      <span className="font-semibold text-indigo-400">250+ Algorithmic Challenges</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Memory Footprint:</span>
                      <span className="font-semibold text-emerald-400">Optimized &lt;32MB RSS</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Profile Footer inside the Terminal Window */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#090e1a] p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={yourImage}
                      alt="Tushar Thakor"
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Tushar Thakor</p>
                    <p className="text-[11px] text-slate-400">Full-Stack Engineer · IITRAM</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    if (onOpenTerminal) onOpenTerminal();
                  }}
                  className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 font-mono text-[11px] font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  Inspect CLI &gt;_
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}