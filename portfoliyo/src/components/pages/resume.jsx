'use client'

import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiBriefcase, FiDownload, FiPenTool } from "react-icons/fi";

import SkillsSection from "./skill";

const focusCards = [
  {
    title: "Placement-ready profile",
    copy: "Projects, problem solving, and portfolio presentation designed to make a strong first impression.",
    icon: FiBriefcase,
  },
  {
    title: "Builder mentality",
    copy: "Comfortable taking an idea from UI concept to deployed product with frontend and backend ownership.",
    icon: FiPenTool,
  },
  {
    title: "Results under pressure",
    copy: "Hackathon experience and practical shipping habits help me move fast without sacrificing clarity.",
    icon: FiAward,
  },
];

const Resume = () => (
  <section id="resume" className="section-shell py-24 sm:py-28">
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
          <h2 className="section-title mt-6 text-balance">A concise snapshot of what I bring to modern product teams.</h2>
          <p className="section-copy mt-6">
            This section highlights the way I work, what I prioritize, and the technologies I use most confidently.
            It&apos;s structured to quickly communicate readiness for interviews, internships, and frontend-focused roles.
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

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Career summary</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Full-stack development with sharp frontend execution.</h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I enjoy building products that are technically solid and visually convincing. My strongest work usually
            combines responsive UI, thoughtful component structure, clean API integration, and an eye for detail that
            makes the final result feel complete.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">What I&apos;m looking for</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Placement roles, internships, and product teams where frontend quality, learning velocity, and
                ownership are valued.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">How I work</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                I like clear structure, reusable components, solid spacing systems, and subtle animations that support
                the experience instead of distracting from it.
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

        <div className="grid gap-6 md:grid-cols-3">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-[2rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/20 text-sky-300">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <SkillsSection />
      </div>
    </div>
  </section>
);

export default Resume;
