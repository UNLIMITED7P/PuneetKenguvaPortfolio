import {SITE_META} from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="top"
      className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Asymmetric Editorial Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-5">
                {SITE_META.eyebrow}
              </p>

              <h1 className="font-editorial text-[clamp(2.75rem,5.4vw,4.5rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[var(--text)] mb-6">
                {SITE_META.name}
              </h1>

              <p className="font-editorial text-[clamp(1.375rem,2.3vw,1.95rem)] font-normal leading-[1.32] text-[var(--text)] max-w-xl mb-6">
                {SITE_META.heroStatement}
              </p>

              <p className="text-[15px] md:text-base leading-[1.7] text-[var(--muted)] max-w-xl mb-10">
                {SITE_META.heroIntro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-[var(--text)] text-[var(--bg)] border border-[var(--text)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#23372E] transition-colors duration-200 whitespace-nowrap shrink-0 group"
              >
                <span>EXPLORE MY WORK</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href={SITE_META.resumePdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-transparent text-[var(--text)] border border-[var(--border-strong)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-200 whitespace-nowrap shrink-0 group"
              >
                <span>RESUME (PDF)</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex">
            <div className="w-full min-h-[360px] lg:min-h-[450px] border border-[var(--border)] bg-[var(--surface-warm)] p-6 md:p-7 flex flex-col justify-between relative">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5 text-[11px] tracking-[0.16em] uppercase text-[var(--muted)]">
                <span>PORTRAIT</span>
                <span>{SITE_META.location}</span>
              </div>

              <div className="relative flex-1 flex items-end justify-center pt-5 overflow-hidden bg-[var(--surface)] border border-[var(--border)] my-4">
                <img
                  src={SITE_META.portraitPath}
                  alt="Portrait of Puneet Kenguva"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[320px] h-[290px] sm:h-[330px] object-contain object-bottom select-none"
                />
              </div>

              <div className="border-t border-[var(--border)] pt-3.5 flex items-center justify-between text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]">
                <span>B.ARCH &amp; BBA DBE</span>
                <span>{SITE_META.initials} — 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="mt-14 md:mt-20 pt-6 border-t border-[var(--border)] flex items-center justify-between gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 group"
          >
            <span>SCROLL TO EXPLORE</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>

          <span className="hidden sm:inline text-[11px] tracking-[0.16em] uppercase text-[var(--muted)]">
            {SITE_META.location}
          </span>
        </div>
      </div>
    </section>
  );
}
