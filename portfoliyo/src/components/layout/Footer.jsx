"use client";

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface-subtle py-8 sm:py-12">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-text-primary">Tushar Thakor</span>
              <span className="text-xs text-text-muted">·</span>
              <span className="text-xs text-text-muted font-mono">IITRAM CSE</span>
            </div>
            <p className="mt-1 text-xs text-text-muted">
              Software Engineer building full-stack web applications, APIs, and applied AI systems.
            </p>
          </div>

          {/* Social Links with touch targets */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/TUSHAR-hase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-text-muted transition hover:text-accent flex min-h-[40px] items-center gap-1.5 py-1.5 px-2"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thakor-tushar-a34ab3288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-text-muted transition hover:text-accent flex min-h-[40px] items-center gap-1.5 py-1.5 px-2"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a
              href="mailto:thakorrajta859@gmail.com"
              className="text-xs font-semibold text-text-muted transition hover:text-accent flex min-h-[40px] items-center gap-1.5 py-1.5 px-2"
            >
              <FiMail />
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-4 border-t border-border pt-5 sm:pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tushar Thakor. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-text-primary py-1"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex min-h-[38px] items-center gap-1 text-accent hover:underline ml-auto sm:ml-2 py-1"
            >
              Back to Top <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
