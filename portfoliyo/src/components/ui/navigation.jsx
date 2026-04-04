'use client'

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowDownTray, HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

const resumeLink = "/TUSHAR_THAKOR_RESUME.pdf";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#resume", id: "resume" },
  { label: "Projects", href: "#portfolio", id: "portfolio" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => links.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-white/12 bg-slate-950/78 shadow-[0_18px_50px_rgba(2,6,23,0.42)] backdrop-blur-2xl"
            : "border-white/8 bg-slate-950/52 backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-slate-100 uppercase"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-bold text-slate-950">
            TT
          </span>
          <span className="hidden sm:block">Tushar Thakor</span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold ${
                activeLink === link.id ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {activeLink === link.id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-white/8"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="button-secondary text-sm">
            Let&apos;s talk
          </a>
          <motion.a
            href={resumeLink}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="button-primary text-sm"
          >
            <HiArrowDownTray className="text-lg" />
            Resume
          </motion.a>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiMiniXMark className="text-2xl" /> : <HiBars3BottomRight className="text-2xl" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/92 p-4 shadow-[0_24px_80px_rgba(2,6,23,0.5)] backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                    activeLink === link.id
                      ? "bg-white/10 text-white"
                      : "bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeLink === link.id && <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href="#contact" onClick={() => setIsOpen(false)} className="button-secondary text-sm">
                Let&apos;s talk
              </a>
              <a href={resumeLink} download className="button-primary text-sm">
                <HiArrowDownTray className="text-lg" />
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
