import {EDUCATION_CONTENT, TIMELINE_ITEMS} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function EducationSection() {
  const featuredItem = EDUCATION_CONTENT.items.find((item) => item.featured);
  const degreeItems = EDUCATION_CONTENT.items.filter((item) => !item.featured);

  return (
    <section id="education" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
              {EDUCATION_CONTENT.sectionLabel}
            </p>
            <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)] mb-4">
              {EDUCATION_CONTENT.heading}
            </h2>
            <p className="text-[15px] md:text-base leading-[1.7] text-[var(--muted)]">
              {EDUCATION_CONTENT.subtext}
            </p>
          </div>
        </Reveal>

        {/* Primary Dual-Degree Overview + Active University Cards */}
        <Reveal delayMs={80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {featuredItem && (
              <article className="lg:col-span-5 border border-[var(--border-strong)] bg-[var(--surface-warm)] p-8 md:p-9 flex flex-col justify-between transition-colors duration-200 hover:border-[var(--text)]">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 mb-7 border-b border-[var(--border)]">
                    <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--text)]">
                      {featuredItem.category}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--muted)] tabular-nums">
                      {featuredItem.period}
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl font-normal tracking-[-0.01em] text-[var(--text)] mb-3">
                    {featuredItem.title}
                  </h3>

                  <div className="space-y-1.5 mb-6">
                    <p className="text-base font-medium leading-[1.45] text-[var(--text)]">
                      {featuredItem.program}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{featuredItem.institution}</p>
                  </div>

                  <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
                    {featuredItem.description}
                  </p>
                </div>

                <div className="mt-10 pt-5 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase">
                  <span className="text-[var(--muted)]">{featuredItem.footerLeft}</span>
                  <span className="text-[var(--text)]">{featuredItem.footerRight}</span>
                </div>
              </article>
            )}

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                {degreeItems.map((item) => (
                  <article
                    key={item.id}
                    className="border border-[var(--border)] bg-[var(--surface)] p-7 flex flex-col justify-between transition-colors duration-200 hover:border-[var(--border-strong)]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[var(--border)]">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--muted)]">
                          {item.category}
                        </span>
                        <span className="text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] tabular-nums whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-editorial text-xl md:text-2xl font-normal leading-[1.25] text-[var(--text)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--text)] mb-3">{item.program}</p>
                      <p className="text-sm leading-[1.65] text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-7 pt-4 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-medium tracking-[0.16em] uppercase">
                      <span className="text-[var(--muted)]">{item.footerLeft}</span>
                      <span className="text-[var(--text)]">{item.footerRight}</span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pre-University & Secondary Academic Record */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {EDUCATION_CONTENT.schoolFoundations.map((school) => (
                  <article
                    key={school.institution}
                    className="border border-[var(--border)] bg-[var(--bg)] p-6 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-2">
                        {school.qualification}
                      </p>
                      <h4 className="font-editorial text-lg text-[var(--text)] mb-1">
                        {school.institution}
                      </h4>
                    </div>
                    <p className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text)]">
                      {school.standing}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Minimal Academic Timeline */}
        <Reveal delayMs={140}>
          <div className="mt-20 md:mt-24 pt-12 border-t border-[var(--border)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--text)]">
                THE JOURNEY SO FAR
              </h3>
              <p className="text-xs text-[var(--muted)]">
                Academic progression across Bengaluru institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-[var(--border)]"
              />

              {TIMELINE_ITEMS.map((step, index) => (
                <div key={step.year} className="relative pl-7 md:pl-0 md:pt-8">
                  {index < TIMELINE_ITEMS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden absolute left-[6px] top-4 bottom-[-40px] w-px bg-[var(--border)]"
                    />
                  )}

                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 md:top-0 w-[14px] h-[14px] rounded-full border transition-colors ${
                      index === TIMELINE_ITEMS.length - 1
                        ? 'bg-[var(--text)] border-[var(--text)]'
                        : 'bg-[var(--bg)] border-[var(--text)]'
                    }`}
                  />

                  <p className="text-xs font-medium tracking-[0.16em] uppercase text-[var(--muted)] tabular-nums mb-2">
                    {step.year}
                  </p>
                  <h4 className="font-editorial text-xl text-[var(--text)] mb-1">
                    {step.milestone}
                  </h4>
                  <p className="text-xs tracking-[0.06em] text-[var(--muted)] mb-3">
                    {step.institution}
                  </p>
                  <p className="text-sm leading-[1.65] text-[var(--muted)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
