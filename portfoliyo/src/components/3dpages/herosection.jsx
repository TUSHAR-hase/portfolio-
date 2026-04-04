"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiMonitor,
} from "react-icons/fi";

import yourImage from "../../assets/images/tushrphoto.jpg";

const roles = [
  "Frontend-Focused Full Stack Developer",
  "AI/ML Project Builder",
  "IoT Solution Explorer",
];

const quickStats = [
  { label: "Projects built", value: "10+" },
  { label: "Hackathons", value: "3+" },
  { label: "Core domains", value: "4" },
];

const badges = [
  { icon: FiMonitor, label: "Responsive UI" },
  { icon: FiCode, label: "Full-stack delivery" },
  { icon: FiLayers, label: "AI/ML & IoT" },
];

const socials = [
  { href: "https://github.com/TUSHAR-hase", label: "GitHub", icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: FiLinkedin,
  },
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const isComplete = displayText === role;
    const nextDelay = isDeleting ? 42 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setDisplayText(role.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText.length > 0) {
        setDisplayText(role.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, isComplete && !isDeleting ? 1600 : nextDelay);

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayText, isDeleting]);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="section-kicker">Available for placements & freelance roles</span>

          <div className="mt-8 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400"
            >
              Ahmedabad, Gujarat
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-balance text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              Building polished digital products across{" "}
              <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-orange-300 bg-clip-text text-transparent">
                web, AI/ML, and connected systems
              </span>{" "}
              with a premium feel.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-lg text-slate-200 sm:text-2xl"
            >
              <span>I&apos;m Tushar Thakor,</span>
              <span className="inline-flex min-h-10 min-w-[210px] items-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sky-300 sm:min-w-[290px]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 text-violet-300"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="section-copy mt-8 max-w-2xl"
            >
              I build responsive interfaces, full-stack applications, AI/ML-driven concepts, and practical IoT
              solutions with strong attention to interaction quality, performance, and real-world usability. My aim
              is to ship work that feels professional in interviews, hackathons, and product teams.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a href="#portfolio" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="button-primary">
              View Projects
              <FiArrowRight className="text-lg" />
            </motion.a>
            <motion.a href="#contact" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="button-secondary">
              Contact Me
            </motion.a>
            <motion.a
              href="/TUSHAR_THAKOR_RESUME.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="button-secondary"
            >
              <FiDownload className="text-lg" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="tag">
                  <Icon className="text-sky-300" />
                  {badge.label}
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.6 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {quickStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[1.75rem] p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute inset-x-12 top-6 h-48 rounded-full bg-sky-400/15 blur-3xl" />

          <div className="glass-panel relative w-full max-w-[31rem] overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/16 via-violet-500/12 to-orange-500/14" />
            <div className="relative rounded-[1.6rem] border border-white/8 bg-slate-950/65 p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Profile snapshot</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Developer portfolio</h2>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Open to work
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900">
                  <Image
                    src={yourImage}
                    alt="Tushar Thakor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 272px, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-sm font-semibold text-slate-300">Focus</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        Frontend craftsmanship, backend integration, AI/ML experimentation, and connected
                        system-oriented product thinking.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                        <FiMapPin className="text-sky-300" />
                        Ahmedabad, India
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        Open to placements, internships, and product teams where frontend quality, ownership, and
                        strong execution matter.
                      </p>
                    </div>
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
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
                        >
                          <Icon className="text-sky-300" />
                          {social.label}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-4 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Latest focus</p>
              <p className="mt-1 text-sm font-medium text-white">Responsive product UI, ML-backed workflows, and IoT problem solving</p>
            </motion.div>

            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
              className="absolute -right-3 top-20 rounded-2xl border border-sky-400/16 bg-sky-400/10 px-4 py-3 text-sm font-semibold text-sky-200 shadow-xl backdrop-blur-xl"
            >
              Smooth UI
            </motion.div> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-12 w-7 justify-center rounded-full border border-white/12 p-1"
        >
          <span className="h-3 w-2 rounded-full bg-gradient-to-b from-sky-300 to-violet-400" />
        </motion.div>
        <span className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
