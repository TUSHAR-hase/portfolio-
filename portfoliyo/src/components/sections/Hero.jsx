"use client";

import Image from "next/image";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import portraitImg from "../../assets/images/tuhsar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="site-shell relative border-b border-border overflow-hidden bg-[var(--bg)] pt-18 sm:pt-22 lg:pt-0"
    >
      {/* Subtle ambient lighting across the Hero background */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-accent/[0.05] blur-3xl dark:bg-accent/[0.08]"
        aria-hidden="true"
      />

      <div className="site-container">
        <div className="grid items-end gap-6 sm:gap-8 lg:grid-cols-[1.12fr_0.88fr] xl:grid-cols-[1.18fr_0.82fr] lg:gap-8 xl:gap-14">
          
          {/* Content Column (Appears after portrait on mobile, Left on desktop) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center pt-0 pb-12 sm:pb-16 lg:pt-32 lg:pb-24 xl:pt-36 xl:pb-28">
            
            {/* Status & Credibility Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="kicker text-[11px] sm:text-xs">
                IITRAM · CSE Undergraduate
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to SWE Internships
              </span>
            </div>

            {/* Responsive Headline */}
            <h1 className="mt-4 sm:mt-5 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[50px] leading-[1.15]">
              Computer Science student focused on building reliable software and engineered systems.
            </h1>

            {/* Concise Value Proposition */}
            <p className="mt-3.5 sm:mt-5 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg">
              I am <strong className="font-semibold text-text-primary">Tushar Thakor</strong>, an undergraduate at{" "}
              <strong className="font-semibold text-text-primary">IITRAM</strong> (Ahmedabad). I specialize in developing full-stack web platforms, architecting RESTful services, and implementing data structures and algorithms in C++ and JavaScript.
            </p>

            {/* Metadata Badges */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-mono text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="text-accent shrink-0" />
                Ahmedabad, India
              </span>
              <span className="hidden sm:inline">·</span>
              <span>Full-Stack Development</span>
              <span className="hidden sm:inline">·</span>
              <span>REST APIs &amp; Databases</span>
              <span className="hidden sm:inline">·</span>
              <span>DSA in C++</span>
            </div>

            {/* Responsive Action Buttons (Stack on narrow mobile, side-by-side on sm+) */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View Projects
                <FiArrowRight />
              </a>

              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Let&apos;s Connect
              </a>

              <a
                href="/TUSHAR_THAKOR_RESUME.pdf"
                download
                className="btn-secondary w-full sm:w-auto"
              >
                <FiDownload />
                Resume (PDF)
              </a>
            </div>

            {/* Verified External Channels */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5 border-t border-border pt-4 sm:pt-6">
              <a
                href="https://github.com/TUSHAR-hase"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-text-muted transition hover:text-accent"
              >
                <FiGithub className="text-sm" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/thakor-tushar-a34ab3288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-text-muted transition hover:text-accent"
              >
                <FiLinkedin className="text-sm" />
                LinkedIn
              </a>

              <a
                href="mailto:thakorrajta859@gmail.com"
                className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-text-muted transition hover:text-accent truncate max-w-[240px] sm:max-w-none"
              >
                <FiMail className="text-sm shrink-0" />
                <span className="truncate">thakorrajta859@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Portrait Column (Appears at top on mobile, Right grounded on desktop) */}
          <div className="order-1 lg:order-2 self-end flex justify-center lg:justify-end w-full pt-4 lg:pt-0">
            <div className="relative w-full max-w-[170px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[430px] xl:max-w-[470px]">
              
              {/* Atmospheric Backlight */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-accent/[0.08] blur-3xl dark:bg-accent/[0.12]"
                aria-hidden="true"
              />

              {/* Seamless Portrait Stage - Art directed with zero box or border */}
              <div className="relative aspect-[4/5] w-full hero-portrait-mask">
                <Image
                  src={portraitImg}
                  alt="Professional portrait of Tushar Thakor"
                  priority
                  fill
                  sizes="(max-width: 640px) 170px, (max-width: 1024px) 260px, 470px"
                  className="object-cover object-[center_10%] contrast-[1.02] brightness-[0.99] dark:brightness-[0.94] dark:contrast-[1.05] transition-transform duration-700 ease-out hover:scale-[1.015]"
                />

                {/* Left Edge Dissolve */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-transparent"
                  aria-hidden="true"
                />

                {/* Top Edge Dissolve */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-14 lg:h-20 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/50 to-transparent"
                  aria-hidden="true"
                />

                {/* Right Edge Dissolve */}
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/40 to-transparent"
                  aria-hidden="true"
                />

                {/* Bottom Grounding Dissolve */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-20 lg:h-32 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent"
                  aria-hidden="true"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
