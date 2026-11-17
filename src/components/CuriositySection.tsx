import {CURIOSITY_ITEMS} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function CuriositySection() {
  return (
    <section id="curiosity" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
                03 / AREAS OF CURIOSITY &amp; TOOLS
              </p>
              <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)]">
                Disciplines &amp; tools I work with.
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-sm leading-[1.65]">
              Instead of fixed proficiency scores, these are the areas, workflows, and tools across architecture, media, and business.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border)]">
            {CURIOSITY_ITEMS.map((item) => (
              <div
                key={item.number}
                className="border-r border-b border-[var(--border)] p-8 md:p-9 bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors duration-200 flex flex-col justify-between min-h-[235px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium tracking-[0.16em] text-[var(--muted)] tabular-nums">
                    {item.number}
                  </span>
                  <span className="w-6 h-px bg-[var(--accent)]" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[var(--muted)] mb-5">
                    {item.description}
                  </p>
                  {item.tools && (
                    <p className="pt-4 border-t border-[var(--border)] text-[11px] tracking-[0.06em] text-[var(--text)]/85">
                      {item.tools}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
