import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import SystemVisual from "./SystemVisual";

const technicalDisciplines = [
  {
    icon: FiServer,
    title: "Full-Stack Web Development",
    detail:
      "Engineering end-to-end web applications with Next.js, React, Node.js, and Express. Focusing on modular component architecture, state management, and reliable RESTful service endpoints.",
  },
  {
    icon: FiCode,
    title: "Data Structures & Algorithms",
    detail:
      "Practicing computational problem solving in C++ with attention to time and space complexity (Big-O). Implementing graph traversals, tree operations, dynamic programming, and hash structures.",
  },
  {
    icon: FiCpu,
    title: "Applied Machine Learning & Vision",
    detail:
      "Integrating practical machine learning pipelines into user-facing software, such as real-time YOLOv8 object localization with OpenCV and Scikit-learn NLP text categorization.",
  },
  {
    icon: FiLayers,
    title: "Embedded Systems & Control",
    detail:
      "Interfacing microcontrollers and physical hardware using embedded C++, sensor arrays, and closed-loop motor control algorithms.",
  },
];

const engineeringPractices = [
  "Designing clear API contracts and separating frontend presentation from backend logic.",
  "Modeling database schemas intentionally with indexes to optimize query retrieval.",
  "Analyzing algorithm efficiency before implementation to avoid performance bottlenecks.",
  "Testing edge cases, input validation, and error states rather than assuming happy paths.",
];

export default function About() {
  return (
    <section id="about" className="site-shell section-padding border-b border-border">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="kicker">About</span>
          <h2 className="section-heading mt-4">
            Software engineering grounded in computational foundations.
          </h2>
          <p className="section-lead mt-4">
            I am a Computer Science &amp; Engineering undergraduate at <strong className="font-semibold text-text-primary">IITRAM</strong> (Ahmedabad).
            I focus on developing production-minded software solutions by combining academic computer science theory with hands-on application engineering.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Engineering Profile & Approach */}
          <div className="card-base p-6 sm:p-8">
            <h3 className="text-lg font-bold text-text-primary">
              Engineering Profile &amp; Focus
            </h3>
            <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-text-secondary">
              <p>
                My development work centers on building reliable web applications and backend services. I construct client interfaces using React and Next.js, design REST APIs with Node.js and Express, and structure data persistence layers in MongoDB and MySQL.
              </p>
              <p>
                In addition to application development, I actively study core computer science principles—including Operating Systems, Database Management Systems, and Computer Networks—translating theoretical concepts into practical implementation decisions.
              </p>
              <p>
                I am actively seeking Software Engineering and Full-Stack development internships where I can contribute to real-world codebases, collaborate with experienced engineers, and solve meaningful technical problems.
              </p>
            </div>

            {/* Core Practices */}
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                Engineering Practices
              </h4>
              <ul className="mt-4 space-y-2.5">
                {engineeringPractices.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <FiCheckCircle className="mt-0.5 text-sm shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 Technical Focus Areas */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {technicalDisciplines.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="card-base p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                      <Icon className="text-base" />
                    </span>
                    <h4 className="text-sm font-bold text-text-primary">
                      {area.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-text-muted">
                    {area.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Architecture & Runtime Topology */}
        <div className="mt-14 border-t border-border pt-12">
          <div className="max-w-2xl mb-6">
            <span className="kicker">System Architecture</span>
            <h3 className="mt-3 text-xl font-bold text-text-primary sm:text-2xl">
              Full-stack system topology &amp; runtime layers.
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
              Interactive architectural model demonstrating how client interfaces, API routing, stateless authorization, data persistence, and edge inference connect in my applications.
            </p>
          </div>
          <SystemVisual />
        </div>
      </div>
    </section>
  );
}
