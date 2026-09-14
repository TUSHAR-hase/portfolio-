"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiZap,
} from "react-icons/fi";

import { sound } from "../../utils/sound";

const highlights = [
  {
    icon: FiCode,
    title: "Algorithmic Rigor",
    copy: "250+ DSA challenges solved. Constant evaluation of asymptotic complexity (time O(N), space O(1)) across all implementations.",
  },
  {
    icon: FiZap,
    title: "Full-Stack Deployment",
    copy: "10+ complete platforms delivered from blank repositories to production cloud hosting on Vercel and MongoDB Atlas.",
  },
  {
    icon: FiAward,
    title: "Hackathon Competitor",
    copy: "Competed in 3+ university and national hackathons, prototyping solutions in AI complaint triage and women security.",
  },
];

const recruiterSummary = [
  { label: "Target Positions", value: "Software Engineering Intern, Full-Stack Developer, Backend Engineer" },
  { label: "Availability", value: "Summer 2025 / Summer 2026 & Immediate Part-Time Internships" },
  { label: "University", value: "IITRAM (Institute of Infrastructure, Technology, Research and Management)" },
  { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
  { label: "Location", value: "Ahmedabad, Gujarat, India (Open to Remote & Relocation)" },
];

export default function Resume() {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="resume" className="section-shell relative">
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
            <span className="section-kicker">Curriculum Vitae</span>
            <h2 className="section-title mt-5">
              Engineering Credentials &amp; Recruiter Briefing.
            </h2>
            <p className="section-copy-md mt-5">
              A comprehensive summary of technical coursework, real-world development impact, and internship availability.
            </p>
          </div>

          <motion.a
            href="/TUSHAR_THAKOR_RESUME.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => sound.playSuccess()}
            className="button-primary shrink-0"
          >
            <FiDownload className="text-lg" />
            Download Official CV (PDF)
          </motion.a>
        </motion.div>

        {/* Main Resume Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Recruiter Cheat Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleCardMouseMove}
            className="spotlight-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 border-b border-border/80 pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-bright">
                <FiBriefcase className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-strong sm:text-xl">
                  Recruiter Fast Facts
                </h3>
                <p className="text-xs text-muted font-mono">
                  Quick verification for engineering hiring teams
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {recruiterSummary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/60 bg-surface-2/60 p-3.5"
                >
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-bright">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-strong sm:text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-5">
              <span className="text-xs text-muted font-mono">
                Resume PDF · Verified ATS-compliant format
              </span>
              <a
                href="/TUSHAR_THAKOR_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-bright hover:underline"
              >
                <FiExternalLink />
                Preview in Tab
              </a>
            </div>
          </motion.div>

          {/* Three Key Strengths & Objectives */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseMove={handleCardMouseMove}
                  className="spotlight-card flex flex-1 flex-col justify-center p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-bright">
                      <Icon className="text-lg" />
                    </span>
                    <h4 className="text-base font-bold text-strong">{item.title}</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-secondary sm:text-sm">
                    {item.copy}
                  </p>
                </motion.div>
              );
            })}

            {/* Quick Contact Push */}
            <div className="rounded-2xl border border-accent-border bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-transparent p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-strong">Ready for technical interview?</p>
                <p className="text-[11px] text-muted">Direct dispatch to inbox</p>
              </div>
              <a
                href="#contact"
                onClick={() => sound.playClick()}
                className="button-cyber text-xs py-2 px-3.5"
              >
                Let&apos;s Connect <FiArrowRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}