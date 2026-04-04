'use client'

import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#resume" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/TUSHAR-hase",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tushar_vaghela1507?igsh=amI3dGtzNXZlMTdh",
    icon: FiInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="section-shell border-b-0 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Tushar Thakor</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Frontend-focused full-stack developer building polished web experiences while growing across AI/ML,
                mobile, and IoT-driven projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
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
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    <Icon className="text-sky-300" />
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/8 pt-6">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>(c) 2026 Tushar Thakor. All rights reserved.</p>
          <p>Crafted with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
