'use client'

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
  <section id="resume" className="section-shell py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-3xl">
          <span className="section-kicker">Resume & Skills</span>
          <h2 className="section-title mt-6 text-balance">A concise profile built for internship applications, technical range, and execution.</h2>
          <p className="section-copy mt-6">
            This section highlights the skills, projects, and working style I want to bring into an internship role.
          </p>
        </div>

        <motion.a
          href="/TUSHAR_THAKOR_RESUME.pdf"
          download
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="button-primary w-fit"
        >
          <FiDownload className="text-lg" />
          Download Resume
        </motion.a>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Career summary</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Frontend-focused full-stack profile suited for internship opportunities.</h3>
          <p className="mt-5 text-base leading-7 text-slate-300">
            I enjoy building products that are polished, reliable, and useful. My strongest work combines responsive
            UI, clean structure, and backend integration while continuing to grow through real-world project work.
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">What I&apos;m looking for</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Internship opportunities where I can contribute to frontend, full-stack, or product-focused work while
                learning from real teams.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">How I work</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                I prefer clear structure, reusable components, responsive layouts, and motion that supports the
                interface.
              </p>
            </div>
          </div>

          <a
            href="#portfolio"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            See selected work
            <FiArrowRight />
          </a>
        </motion.div>

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
                className="glass-panel rounded-[2rem] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/20 text-sky-300">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <SkillsSection />
      </div>
    </div>
  </section>
);

export default Resume;
