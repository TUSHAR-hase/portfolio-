"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import yourImage from "../../assets/images/tushrphoto.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Sync initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("class", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem("th-theme", next);
    } catch {
      // ignore
    }
    setTheme(next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        isScrolled
          ? "border-border bg-surface/90 backdrop-blur-md shadow-sm"
          : "border-transparent bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <div className="site-container flex h-16 items-center justify-between">
        {/* Brand Name */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 overflow-hidden rounded-md border border-border">
            <Image
              src={yourImage}
              alt="Tushar Thakor"
              fill
              className="object-cover object-[center_20%]"
              sizes="32px"
              priority
            />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-text-primary">
              Tushar Thakor
            </span>
            <span className="ml-2 hidden rounded bg-surface-raised px-1.5 py-0.5 text-[10px] font-mono font-medium text-accent sm:inline">
              IITRAM CSE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-xs font-semibold text-text-muted transition hover:text-text-primary hover:bg-surface-raised"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition hover:text-text-primary hover:bg-surface-raised"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
          </button>

          <a
            href="/TUSHAR_THAKOR_RESUME.pdf"
            download
            className="btn-primary hidden sm:inline-flex py-1.5 px-3 text-xs"
          >
            <FiDownload />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-text-primary md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="border-b border-border bg-surface px-5 py-4 md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-text-secondary hover:bg-surface-raised hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <a
              href="/TUSHAR_THAKOR_RESUME.pdf"
              download
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary flex w-full items-center justify-center text-xs"
            >
              <FiDownload />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

