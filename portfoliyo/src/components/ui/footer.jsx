"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiClock,
  FiCode,
  FiGitBranch,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTerminal,
} from "react-icons/fi";

import { sound } from "../../utils/sound";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About & CS", href: "#about" },
  { label: "Skills & Matrix", href: "#skills" },
  { label: "Engineered Systems", href: "#portfolio" },
  { label: "Resume (CV)", href: "#resume" },
  { label: "Contact Dispatch", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/TUSHAR-hase", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tushar_vaghela1507",
    icon: FiInstagram,
  },
];

export default function Footer({ onOpenTerminal }) {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-shell border-t border-border/80 bg-surface/80 pt-16 pb-12 dark:bg-[#070b14]">
      <div className="section-inner py-0">
        <div className="glass-panel p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-accent-bright uppercase tracking-wider">
                  IITRAM Computer Science &amp; Engineering
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              <h3 className="mt-2 text-3xl font-black text-strong">
                Tushar Thakor
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-secondary sm:text-sm">
                Full-Stack Software Engineer &amp; CSE Undergraduate. Designing reliable distributed web architectures, high-efficiency algorithms, and applied machine learning models.
              </p>

              {/* Live IST clock + Git build tag */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-2/60 px-2.5 py-1">
                  <FiClock className="text-cyan-400" />
                  Ahmedabad, IN · {istTime || "12:00:00 PM"} IST
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-2/60 px-2.5 py-1">
                  <FiGitBranch className="text-indigo-400" />
                  main@cse-v2.4
                </span>
              </div>
            </div>

            {/* Quick Actions & Social Channels */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => sound.playClick()}
                      className="button-secondary flex items-center gap-2 py-2 px-3.5 text-xs"
                    >
                      <Icon className="text-base text-accent-bright" />
                      <span>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Terminal Launcher */}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onOpenTerminal) onOpenTerminal();
                }}
                className="button-cyber flex items-center justify-center text-xs py-2 px-3.5"
              >
                <FiTerminal className="mr-1.5 text-cyan-400" />
                Open Interactive Terminal (CLI)
              </button>
            </div>
          </div>

          {/* Links Row */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sound.playClick()}
                className="text-xs font-semibold text-muted transition hover:text-accent-bright"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-8 flex flex-col gap-4 text-xs font-mono text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tushar Thakor. All code rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>Press [T] for CLI</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface px-3 py-1.5 text-xs font-semibold text-accent-bright transition hover:bg-surface-2"
            >
              Back to Top
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}