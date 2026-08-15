"use client";

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
        <footer className="relative overflow-hidden bg-white py-12 sm:py-16">
            {/* ─── Background (consistent with all sections) ─── */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/40 via-white to-white" />
            <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-100/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-blue-50/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                Portfolio
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Tushar Thakor</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-500">
                                Frontend-focused full-stack developer building polished products across web, AI/ML, mobile, and
                                systems work.
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
                                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm transition hover:bg-indigo-100/80 hover:text-indigo-800"
                                    >
                                        <Icon className="text-indigo-600" />
                                        {social.label}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/60 pt-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-slate-500 transition hover:text-indigo-600"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className="mt-8 flex flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p>&copy; 2026 Tushar Thakor. All rights reserved.</p>
                    <p>Crafted with React, Tailwind CSS, and Framer Motion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;