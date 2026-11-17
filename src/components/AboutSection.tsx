import {ABOUT_CONTENT} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
            {ABOUT_CONTENT.sectionLabel}
          </p>
          <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)] mb-12 md:mb-16">
            {ABOUT_CONTENT.heading}
          </h2>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-editorial text-xl md:text-2xl leading-[1.42] text-[var(--text)]">
                {ABOUT_CONTENT.leadStatement}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-[15px] md:text-base leading-[1.75] text-[var(--muted)]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="mt-14 md:mt-16 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {ABOUT_CONTENT.metadata.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="text-sm md:text-[15px] font-medium text-[var(--text)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
