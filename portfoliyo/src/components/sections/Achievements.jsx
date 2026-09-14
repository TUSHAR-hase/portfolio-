import { FiAward, FiCheck, FiCode, FiLayers, FiZap } from "react-icons/fi";

const achievements = [
  {
    icon: FiAward,
    title: "Hackathon Competitor & Prototype Builder",
    highlight: "3+ Collegiate & National Competitions",
    description:
      "Engineered high-pressure prototypes including the Rail Madad AI grievance triage system and the Women Safety Guardian mobile SOS solution under competition constraints.",
  },
  {
    icon: FiLayers,
    title: "10+ End-to-End Systems Built & Deployed",
    highlight: "Web · Mobile · AI · Embedded Systems",
    description:
      "Delivered complete software solutions across web applications, REST APIs, mobile apps, object detection computer vision pipelines, and embedded Arduino robotics.",
  },
  {
    icon: FiCode,
    title: "Algorithmic Problem-Solving Discipline",
    highlight: "250+ Problems Solved in C++ / Python",
    description:
      "Consistent practice across Data Structures and Algorithms with a focus on graph traversals (BFS/DFS), dynamic programming, binary search, and asymptotic time/space complexity optimization.",
  },
  {
    icon: FiZap,
    title: "Academic Rigor at IITRAM",
    highlight: "B.Tech Computer Science & Engineering",
    description:
      "Maintaining strong coursework performance across Core CS disciplines including Operating Systems, Database Management Systems, Object-Oriented Programming in C++, and Computer Networks.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="site-shell section-padding border-b border-border bg-surface-subtle">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="kicker">Milestones</span>
          <h2 className="section-heading mt-4">
            Achievements &amp; engineering milestones.
          </h2>
          <p className="section-lead mt-4">
            Measurable progress in software development, hackathon building, and core computational problem solving.
          </p>
        </div>

        {/* 4 Clean Milestone Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-base p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                      <Icon className="text-lg" />
                    </span>
                    <span className="badge-tech font-mono text-[11px] text-accent">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-text-primary sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

