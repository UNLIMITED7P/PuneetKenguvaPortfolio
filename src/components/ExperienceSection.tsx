import {ACTIVITY_GROUPS, EXPERIENCE_ITEMS} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
                05 / EXPERIENCE &amp; LEADERSHIP
              </p>
              <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)]">
                Leadership &amp; student initiatives.
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-sm leading-[1.65]">
              Coordinating architectural student bodies, mentoring cohorts, and participating in diplomacy and endurance sports.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="border-t border-[var(--border)]">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div
                key={`${item.year}-${idx}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[var(--border)] items-baseline hover:bg-[var(--surface)]/70 transition-colors duration-200 px-2 -mx-2"
              >
                <div className="md:col-span-2">
                  <span className="text-xs font-medium tracking-[0.16em] uppercase text-[var(--muted)] tabular-nums">
                    {item.year}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-editorial text-xl md:text-2xl font-normal text-[var(--text)] mb-1">
                    {item.role}
                  </h3>
                  <p className="text-xs tracking-[0.1em] uppercase text-[var(--muted)] leading-[1.5]">
                    {item.organization}
                  </p>
                </div>

                <div className="md:col-span-6 space-y-2.5">
                  {item.highlights.map((bullet) => (
                    <p
                      key={bullet}
                      className="text-[15px] leading-[1.7] text-[var(--muted)] flex items-start gap-2.5"
                    >
                      <span aria-hidden="true" className="text-[var(--text)] mt-0.5">
                        —
                      </span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Honors, MUN, Sports & Activities */}
        <Reveal delayMs={140}>
          <div className="mt-16 md:mt-20">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-8">
              HONORS, MUN, SPORTS &amp; ACTIVITIES
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--border)]">
              {ACTIVITY_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="border-r border-b border-[var(--border)] p-7 bg-[var(--surface)]/60 flex flex-col justify-between"
                >
                  <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--text)] pb-4 mb-5 border-b border-[var(--border)]">
                    {group.category}
                  </h3>
                  <ul className="space-y-3 text-sm leading-[1.65] text-[var(--muted)]">
                    {group.items.map((entry) => (
                      <li key={entry} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="text-[var(--text)]">
                          ·
                        </span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
