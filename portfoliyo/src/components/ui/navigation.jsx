"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HiArrowDownTray, HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

import yourImage from "../../assets/images/tushrphoto.jpg";

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

        if (!sections.length) return undefined;

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

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
        >
            <div
                className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
                    isScrolled
                        ? "border-slate-200/60 bg-white/90 shadow-lg shadow-slate-200/30 backdrop-blur-md"
                        : "border-transparent bg-white/80 backdrop-blur-sm"
                }`}
            >
                {/* ─── Logo with Image ─── */}
                <a
                    href="#home"
                    className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-slate-800 uppercase"
                >
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white/90 shadow-md shadow-indigo-200/30">
                        <Image
                            src={yourImage}
                            alt="Tushar Thakor"
                            fill
                            className="object-cover object-[center_20%]"
                            sizes="40px"
                            priority
                        />
                    </span>
                    <span className="hidden font-medium tracking-normal text-slate-700 md:block">
                        Tushar Thakor
                    </span>
                </a>

                {/* ─── Desktop Navigation ─── */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                                activeLink === link.id
                                    ? "text-indigo-700"
                                    : "text-slate-600 hover:text-indigo-600"
                            }`}
                        >
                            {activeLink === link.id && (
                                <motion.span
                                    layoutId="active-nav-pill"
                                    className="absolute inset-0 rounded-full bg-indigo-50/80 backdrop-blur-sm"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </a>
                    ))}
                </nav>

                {/* ─── Desktop CTA buttons ─── */}
                <div className="hidden items-center gap-3 lg:flex">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
                    >
                        Let&apos;s talk
                    </a>
                    <motion.a
                        href={resumeLink}
                        download
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60"
                    >
                        <HiArrowDownTray className="text-lg" />
                        Resume
                    </motion.a>
                </div>

                {/* ─── Mobile menu toggle ─── */}
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm lg:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <HiMiniXMark className="text-2xl" /> : <HiBars3BottomRight className="text-2xl" />}
                </motion.button>
            </div>

            {/* ─── Mobile Dropdown ─── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.22 }}
                        className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-xl backdrop-blur-md lg:hidden"
                    >
                        <div className="space-y-1">
                            {links.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                        activeLink === link.id
                                            ? "bg-indigo-50/80 text-indigo-700"
                                            : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-800"
                                    }`}
                                >
                                    <span>{link.label}</span>
                                    {activeLink === link.id && (
                                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                    )}
                                </a>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
                            >
                                Let&apos;s talk
                            </a>
                            <a
                                href={resumeLink}
                                download
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60"
                            >
                                <HiArrowDownTray className="text-lg" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;