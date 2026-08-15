"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiArrowRight,
    FiDownload,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiCode,
} from "react-icons/fi";

import yourImage from "../../assets/images/tushrphoto.jpg";

const Hero = () => {
    return (
        <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-white">
            {/* ─── Background ─── */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/40 via-white to-white" />
            <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-100/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-blue-50/30 blur-3xl" />

            {/* ─── Minimum gap ─── */}
            <div className="relative mx-auto w-full max-w-7xl px-4 py-12 lg:px-4">
                <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-2">
                    {/* ─── LEFT: Content ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-start text-center lg:text-left"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Open to internships
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Building digital products that are{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                                fast, robust
                            </span>{" "}
                            and{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                                delightful
                            </span>
                            .
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            I&apos;m Tushar Thakor — a full-stack developer who turns complex
                            problems into elegant, scalable web applications. Specializing in
                            React, Next.js, and modern backends.
                        </p>

                        {/* Location & Projects */}
                        <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
                            <span className="inline-flex items-center gap-1.5">
                                <FiMapPin className="text-indigo-500" />
                                Ahmedabad, Gujarat
                            </span>
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            <span className="inline-flex items-center gap-1.5">
                                <FiCode className="text-indigo-500" />
                                4+ active projects
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 grid w-full max-w-sm grid-cols-3 gap-3">
                            <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 text-center shadow-sm backdrop-blur-sm">
                                <p className="text-2xl font-bold text-slate-900">10+</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Projects
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 text-center shadow-sm backdrop-blur-sm">
                                <p className="text-2xl font-bold text-slate-900">3+</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Hackathons
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 text-center shadow-sm backdrop-blur-sm">
                                <p className="text-2xl font-bold text-slate-900">4</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Domains
                                </p>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <motion.a
                                href="#portfolio"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60"
                            >
                                Explore My Work
                                <FiArrowRight />
                            </motion.a>
                            <motion.a
                                href="/TUSHAR_THAKOR_RESUME.pdf"
                                download
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
                            >
                                <FiDownload />
                                Resume
                            </motion.a>
                        </div>

                        {/* Social */}
                        <div className="mt-8 flex items-center gap-4">
                            <span className="text-sm font-medium text-slate-500">Connect:</span>
                            <div className="flex gap-2">
                                {[
                                    { href: "https://github.com/TUSHAR-hase", icon: FiGithub, label: "GitHub" },
                                    {
                                        href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288",
                                        icon: FiLinkedin,
                                        label: "LinkedIn",
                                    },
                                    { href: "mailto:your.email@example.com", icon: FiMail, label: "Email" },
                                ].map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="rounded-full border border-slate-200/60 bg-white/80 p-2.5 text-slate-600 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
                                            aria-label={social.label}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── RIGHT: Centered Image + Title ─── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="relative">
                            {/* Outer glow */}
                            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-indigo-300/20 via-blue-300/10 to-indigo-300/20 blur-3xl" />

                            {/* Bigger circular avatar with gradient border */}
                            <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 p-1 shadow-2xl shadow-indigo-200/40 md:h-80 md:w-80">
                                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/90 bg-white">
                                    <Image
                                        src={yourImage}
                                        alt="Tushar Thakor"
                                        fill
                                        className="object-cover object-[center_20%]"
                                        sizes="(max-width: 768px) 18rem, 20rem"
                                        priority
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Status indicator */}
                            <span className="absolute bottom-4 right-4 block h-4 w-4 rounded-full border-2 border-white bg-emerald-400 shadow-lg shadow-emerald-200/50">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                            </span>
                        </div>

                        {/* ── Software Developer Engineer Title ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-5 text-center"
                        >
                            <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">
                                Software Developer Engineer
                            </p>
                            <div className="mt-1.5 flex items-center justify-center gap-3">
                                <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent to-indigo-300/60" />
                                <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
                                <span className="h-0.5 w-8 rounded-full bg-gradient-to-l from-transparent to-indigo-300/60" />
                            </div>
                            <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                                Crafting Digital Experiences
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;