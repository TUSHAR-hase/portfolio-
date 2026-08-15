"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiBriefcase, FiDownload, FiPenTool } from "react-icons/fi";

import SkillsSection from "./skill";

const focusCards = [
    {
        title: "Internship-ready profile",
        copy: "A portfolio and resume shaped to present my strengths clearly for internship roles.",
        icon: FiBriefcase,
    },
    {
        title: "End-to-end builder",
        copy: "Comfortable moving from UI ideas to working product flows.",
        icon: FiPenTool,
    },
    {
        title: "Hands-on experimentation",
        copy: "Hackathons and side projects keep me learning across new domains.",
        icon: FiAward,
    },
];

const Resume = () => (
    <section
        id="resume"
        className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
        {/* ─── Background (same as Hero & About) ─── */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/40 via-white to-white" />
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-100/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-blue-50/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6">
            {/* ─── Header ─── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            >
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                        Resume & Skills
                    </span>
                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        A concise profile built for internship applications, technical range, and execution.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        This section highlights the skills, projects, and working style I want to bring into an internship role.
                    </p>
                </div>

                <motion.a
                    href="/TUSHAR_THAKOR_RESUME.pdf"
                    download
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60"
                >
                    <FiDownload className="text-lg" />
                    Download Resume
                </motion.a>
            </motion.div>

            {/* ─── Main Grid: Career Summary + Focus Cards ─── */}
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                {/* ── Left: Career Summary ── */}
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                        Career summary
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                        Frontend-focused full-stack profile suited for internship opportunities.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                        I enjoy building products that are polished, reliable, and useful. My strongest work combines responsive
                        UI, clean structure, and backend integration while continuing to grow through real-world project work.
                    </p>

                    <div className="mt-6 space-y-3">
                        <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                            <p className="text-sm font-semibold text-slate-800">What I&apos;m looking for</p>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Internship opportunities where I can contribute to frontend, full-stack, or product-focused work while
                                learning from real teams.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                            <p className="text-sm font-semibold text-slate-800">How I work</p>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                I prefer clear structure, reusable components, responsive layouts, and motion that supports the
                                interface.
                            </p>
                        </div>
                    </div>

                    <a
                        href="#portfolio"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                    >
                        See selected work
                        <FiArrowRight />
                    </a>
                </motion.div>

                {/* ── Right: Focus Cards ── */}
                <div className="grid gap-4 md:grid-cols-3">
                    {focusCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:border-indigo-200/80 hover:shadow-indigo-100/40"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-700">
                                    <Icon className="text-xl" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{card.copy}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* ─── Skills Section ─── */}
            <div className="mt-12">
                <SkillsSection />
            </div>
        </div>
    </section>
);

export default Resume;