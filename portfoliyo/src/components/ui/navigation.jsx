"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FiDownload,
  FiMoon,
  FiSun,
  FiTerminal,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

import yourImage from "../../assets/images/tushrphoto.jpg";
import { sound } from "../../utils/sound";

const resumeLink = "/TUSHAR_THAKOR_RESUME.pdf";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#portfolio", id: "portfolio" },
  { label: "Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const currentTheme = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

export default function Navbar({ onOpenTerminal }) {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setThemeState] = useState("dark");
  const [isMuted, setIsMuted] = useState(false);

  const sectionIds = useMemo(() => links.map((item) => item.id), []);

  useEffect(() => {
    setThemeState(currentTheme());
    setIsMuted(sound.getMuted());
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const toggleTheme = () => {
    sound.playClick();
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("class", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem("th-theme", next);
    } catch {
      /* ignore */
    }
    setThemeState(next);
  };

  const toggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      sound.playSuccess();
    }
  };

  const handleNavClick = () => {
    sound.playClick();
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-white/15 bg-surface/85 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-[#070b14]/85"
            : "border-border/60 bg-surface/65 backdrop-blur-md dark:border-white/5 dark:bg-[#070b14]/65"
        }`}
      >
        {/* Brand Profile */}
        <a
          href="#home"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-3 text-sm font-semibold"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-border-strong/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={yourImage}
              alt="Tushar Thakor"
              fill
              className="object-cover object-[center_20%]"
              sizes="40px"
              priority
            />
            {/* Pulsing online indicator */}
            <span
              className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-emerald-500"
              title="Active · Open to SWE roles"
            />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-strong">Tushar Thakor</span>
              <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-mono font-bold text-accent-bright">
                CSE
              </span>
            </div>
            <p className="text-[11px] text-muted">IITRAM · Software Engineer</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-xl border border-border/40 bg-surface-2/60 p-1 backdrop-blur-sm lg:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`relative rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition ${
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-strong hover:bg-surface/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 z-0 rounded-lg bg-accent shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Terminal Launcher */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              sound.playClick();
              if (onOpenTerminal) onOpenTerminal();
            }}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-accent-border bg-accent-soft px-2.5 text-xs font-mono font-bold text-accent-bright shadow-sm hover:bg-accent/20"
            title="Open Interactive Terminal (Press 'T')"
            aria-label="Open developer terminal"
          >
            <FiTerminal className="text-sm text-cyan-400" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden rounded bg-black/25 px-1 text-[10px] text-muted md:inline">T</kbd>
          </motion.button>

          {/* Sound Mute Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={toggleSound}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-surface text-base text-muted hover:text-strong hover:bg-surface-2"
            aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            title={isMuted ? "Sound: Off" : "Sound: On"}
          >
            {isMuted ? <FiVolumeX className="text-rose-400" /> : <FiVolume2 className="text-emerald-400" />}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-surface text-base text-muted hover:text-strong hover:bg-surface-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? <FiSun className="text-amber-400" /> : <FiMoon className="text-indigo-600" />}
          </motion.button>

          {/* Resume CTA */}
          <motion.a
            href={resumeLink}
            download
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => sound.playSuccess()}
            className="button-primary hidden h-9 px-3.5 text-xs lg:inline-flex"
          >
            <FiDownload className="text-sm" />
            CV
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              sound.playClick();
              setIsOpen((prev) => !prev);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-surface text-lg text-strong lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiMiniXMark className="text-xl" /> : <HiBars3BottomRight className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-surface/95 p-4 shadow-xl backdrop-blur-xl lg:hidden dark:bg-[#0b1120]/95"
          >
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    activeLink === link.id
                      ? "bg-accent text-white"
                      : "text-secondary hover:bg-surface-2 hover:text-strong"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeLink === link.id && <span className="h-2 w-2 rounded-full bg-white" />}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/40 pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenTerminal) onOpenTerminal();
                }}
                className="button-cyber flex items-center justify-center text-xs"
              >
                <FiTerminal className="mr-1.5 text-cyan-400" />
                Dev Terminal
              </button>
              <a
                href={resumeLink}
                download
                onClick={() => {
                  sound.playSuccess();
                  setIsOpen(false);
                }}
                className="button-primary flex items-center justify-center text-xs"
              >
                <FiDownload className="mr-1.5" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}