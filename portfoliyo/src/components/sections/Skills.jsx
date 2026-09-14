import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="site-shell section-padding border-b border-border bg-surface-subtle">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="kicker">Technical Competency</span>
          <h2 className="section-heading mt-4">
            Technologies &amp; Computer Science foundation.
          </h2>
          <p className="section-lead mt-4">
            Structured into clear functional disciplines. Every technology listed has been utilized in real, working projects and academic coursework.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="card-base flex flex-col p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                    <Icon className="text-base" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-text-muted">
                      {category.skills.length} competencies
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-text-muted">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="mt-4 flex-1 space-y-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="rounded-md border border-border/80 bg-surface-raised p-2.5 transition hover:border-border-strong"
                      >
                        <div className="flex items-center gap-2">
                          <SkillIcon className="text-sm text-accent shrink-0" />
                          <span className="text-xs font-semibold text-text-primary">
                            {skill.name}
                          </span>
                        </div>
                        {skill.note && (
                          <p className="mt-1 text-[11px] text-text-muted pl-5">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

