import { FiCheckCircle, FiClock } from "react-icons/fi";

const technicalMilestones = [
  {
    period: "Current Focus · 2025",
    title: "Software Engineering & Full-Stack Architecture",
    domain: "Internship Preparation & Systems Development",
    description:
      "Deepening expertise in distributed web architecture, Next.js 16 App Router patterns, resilient REST API design, and daily algorithmic problem solving in C++ focusing on asymptotic time and space bounds.",
    outcomes: [
      "Benchmarking API endpoints and evaluating MongoDB query execution plans",
      "Structuring modular full-stack projects for production cloud deployment",
      "Preparing for Software Engineering and Full-Stack internship roles",
    ],
  },
  {
    period: "2024 - 2025",
    title: "Full-Stack Web Systems & Portals",
    domain: "Application Development",
    description:
      "Engineered comprehensive web applications including the Restaurant operations platform (menu management, cart state, and order tracking) and the Cab Booking portal featuring two-party OTP trip completion verification.",
    outcomes: [
      "Implemented role-segregated JWT authentication isolating administrative from customer workflows",
      "Managed client state synchronization and optimistic UI operations",
      "Configured MongoDB database collections with compound indexes for fast state lookups",
    ],
  },
  {
    period: "2024",
    title: "Applied Machine Learning & NLP Pipelines",
    domain: "Computer Vision & Text Classification",
    description:
      "Developed multi-modal applications including the Rail Madad passenger complaint classifier using Scikit-learn NLP and trained a real-time YOLOv8 convolutional object detection model for public waste localization.",
    outcomes: [
      "Constructed speech-to-text pipeline translating voice grievance calls into normalized text",
      "Trained multi-class classification models routing complaints to operational railway divisions",
      "Evaluated inference throughput on streaming video camera frames",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Mobile Applications & Embedded Hardware",
    domain: "Cross-Platform & Systems Interfacing",
    description:
      "Built the Blue Color community skill marketplace in Flutter with real-time Firestore sync, prototyped the Women Safety SOS emergency alert application, and engineered an autonomous line-follower robot in embedded C++.",
    outcomes: [
      "Developed responsive, mobile-first interfaces in Flutter and Dart",
      "Implemented real-time geolocation streaming and push notification triggers",
      "Programmed closed-loop feedback motor controllers running on Arduino hardware",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="site-shell section-padding border-b border-border">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="kicker">Current Focus</span>
          <h2 className="section-heading mt-4">
            Engineering focus &amp; development trajectory.
          </h2>
          <p className="section-lead mt-3 sm:mt-4">
            A structured breakdown of software projects, technical learning milestones, and current development priorities.
          </p>
        </div>

        {/* Structured Timeline */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
          {technicalMilestones.map((item) => (
            <div key={item.title} className="card-base p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3.5 sm:pb-4">
                <div>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg lg:text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                </div>

                <span className="badge-tech font-mono text-[11px] sm:text-xs text-text-muted self-start sm:self-auto shrink-0">
                  <FiClock />
                  {item.period}
                </span>
              </div>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>

              <div className="mt-4 sm:mt-5 border-t border-border pt-3.5 sm:pt-4">
                <h4 className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2.5">
                  Technical Implementation Details:
                </h4>
                <div className="space-y-2">
                  {item.outcomes.map((out) => (
                    <div key={out} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
