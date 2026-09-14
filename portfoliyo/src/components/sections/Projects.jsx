"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from "react-icons/fi";
import { projects } from "../../data/projects";
import ProjectModal from "../ui/ProjectModal";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Full-Stack Web" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "app", label: "Mobile Apps" },
  { id: "systems", label: "Systems & Embedded" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="site-shell section-padding border-b border-border">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="kicker">Engineered Systems</span>
            <h2 className="section-heading mt-4">
              Featured projects &amp; technical builds.
            </h2>
            <p className="section-lead mt-3 sm:mt-4">
              Structured around real problems, architectural decisions, and working implementations across web, mobile, AI, and systems engineering.
            </p>
          </div>

          <span className="font-mono text-xs text-text-muted self-start lg:self-auto">
            {filteredProjects.length} Systems Cataloged
          </span>
        </div>

        {/* Category Filters */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide transition flex items-center ${
                  isSelected
                    ? "bg-accent text-on-accent"
                    : "border border-border bg-surface text-text-muted hover:border-border-strong hover:text-text-primary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured Projects (Spacious architectural layout) */}
        {featuredProjects.length > 0 && (
          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card-base card-hover overflow-hidden border border-border bg-surface grid gap-0 lg:grid-cols-12"
              >
                {/* Visual Cover */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-raised lg:aspect-auto lg:border-b-0 lg:border-r lg:col-span-5 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-tech bg-surface/90 backdrop-blur-sm text-accent font-semibold border-border text-[11px]">
                      Featured System
                    </span>
                  </div>
                </div>

                {/* Narrative & Details */}
                <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    <h3
                      className="mt-2 text-lg font-bold text-text-primary cursor-pointer hover:text-accent transition sm:text-xl lg:text-2xl"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs font-mono text-text-muted">
                      {project.tagline}
                    </p>

                    {/* Problem → Solution Flow */}
                    <div className="mt-4 sm:mt-5 space-y-2.5 text-xs leading-relaxed text-text-secondary border-t border-border pt-4">
                      <div>
                        <strong className="text-text-primary font-mono text-[11px] uppercase tracking-wider">
                          Problem:
                        </strong>{" "}
                        {project.problem}
                      </div>
                      <div>
                        <strong className="text-text-primary font-mono text-[11px] uppercase tracking-wider">
                          Solution:
                        </strong>{" "}
                        {project.solution}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="badge-tech">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 sm:pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline py-1"
                    >
                      <FiLayers />
                      Inspect Architecture &amp; Layers
                    </button>

                    <div className="flex items-center gap-2 sm:gap-3">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-2 px-3 min-h-[40px]"
                        >
                          <FiGithub />
                          Code
                        </a>
                      )}

                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs py-2 px-3 min-h-[40px]"
                        >
                          Demo
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="mt-10 sm:mt-12">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-4 sm:mb-6">
              Additional Technical Systems &amp; Prototypes
            </h3>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="card-base card-hover flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-raised cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                        {project.metrics && (
                          <span className="font-mono text-[10px] text-text-muted truncate max-w-[140px] sm:max-w-[160px]">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      <h4
                        className="mt-2 text-base font-bold text-text-primary cursor-pointer hover:text-accent transition"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-text-secondary line-clamp-3">
                        {project.problem}
                      </p>

                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="badge-tech text-[10px]">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="badge-tech text-[10px] text-text-muted">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-border pt-3.5 sm:pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="min-h-[38px] text-xs font-semibold text-accent hover:underline flex items-center"
                      >
                        Details
                      </button>

                      <div className="flex items-center gap-2">
                        {project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[38px] min-w-[38px] flex items-center justify-center text-text-muted hover:text-text-primary"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <FiGithub className="text-sm" />
                          </a>
                        )}
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[38px] min-w-[38px] flex items-center justify-center text-text-muted hover:text-accent"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <FiExternalLink className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
