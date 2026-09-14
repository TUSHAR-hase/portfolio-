import { FiAward, FiBookOpen, FiCalendar, FiCheckCircle, FiMapPin } from "react-icons/fi";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (C++)",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Machine Learning",
  "Microprocessors & Embedded Systems",
];

export default function Education() {
  return (
    <section id="education" className="site-shell section-padding border-b border-border bg-surface-subtle">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="kicker">Academic Background</span>
          <h2 className="section-heading mt-4">
            Computer Science &amp; Engineering at IITRAM.
          </h2>
          <p className="section-lead mt-4">
            Formal engineering education pairing theoretical computational science with practical software implementation.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="mt-10">
          <div className="card-base p-6 sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between border-b border-border pb-6">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  Undergraduate Degree
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-text-primary">
                  Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
                </h3>
                <p className="mt-1 text-base font-semibold text-text-secondary">
                  Institute of Infrastructure, Technology, Research and Management (IITRAM)
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin className="text-accent" />
                    Ahmedabad, Gujarat, India
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar className="text-accent" />
                    2023 – Present
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0 md:items-end">
                <span className="badge-tech font-semibold text-xs border-accent/30 text-accent">
                  Full-Time CSE Student
                </span>
              </div>
            </div>

            {/* Coursework Breakdown */}
            <div className="mt-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                Core Computer Science Coursework:
              </h4>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 rounded-md border border-border bg-surface-raised p-2.5 text-xs text-text-secondary"
                  >
                    <FiCheckCircle className="text-emerald-500 shrink-0 text-sm" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Focus */}
            <div className="mt-8 rounded-lg border border-border bg-surface-raised p-4 sm:p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <FiBookOpen /> Academic Focus &amp; Practical Application
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                Coursework at IITRAM focuses heavily on low-level systems logic, algorithmic time and space complexity, and structured software architecture. Academic lab assignments are reinforced through real-world full-stack development, hackathons, and independent software systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

