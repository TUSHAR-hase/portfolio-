"use client";

import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import SystemVisual from "./SystemVisual";

export default function Hero() {
  return (
    <section id="home" className="site-shell pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Narrative & Technical Focus */}
          <div>
            {/* Status & Credibility Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="kicker">
                IITRAM · Computer Science &amp; Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to SWE Internships
              </span>
            </div>

            {/* Confident, Professional Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Computer Science student focused on building reliable software and solving problems through thoughtful engineering.
            </h1>

            {/* Concise Value Proposition */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              I am <strong className="font-semibold text-text-primary">Tushar Thakor</strong>, an undergraduate at{" "}
              <strong className="font-semibold text-text-primary">IITRAM</strong> (Ahmedabad). I specialize in developing full-stack web platforms, architecting RESTful services, and implementing data structures and algorithms in C++ and JavaScript.
            </p>

            {/* Credibility / Location metadata */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="text-accent" />
                Ahmedabad, Gujarat, India
              </span>
              <span>·</span>
              <span>Full-Stack Development</span>
              <span>·</span>
              <span>REST APIs &amp; Databases</span>
              <span>·</span>
              <span>DSA Problem Solving</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="#projects" className="btn-primary">
                View Projects
                <FiArrowRight />
              </a>

              <a href="#contact" className="btn-secondary">
                Let&apos;s Connect
              </a>

              <a
                href="/TUSHAR_THAKOR_RESUME.pdf"
                download
                className="btn-secondary"
              >
                <FiDownload />
                Resume (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border pt-6">
              <a
                href="https://github.com/TUSHAR-hase"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted transition hover:text-accent"
              >
                <FiGithub className="text-sm" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/thakor-tushar-a34ab3288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted transition hover:text-accent"
              >
                <FiLinkedin className="text-sm" />
                LinkedIn
              </a>

              <a
                href="mailto:thakorrajta859@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted transition hover:text-accent"
              >
                <FiMail className="text-sm" />
                thakorrajta859@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Original Interactive System Architecture Visual */}
          <div className="w-full">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
