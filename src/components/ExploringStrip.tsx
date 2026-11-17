import {useEffect, useState} from 'react';
import {EXPLORING_TOPICS} from '../data/portfolioData';

export function ExploringStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EXPLORING_TOPICS.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      aria-label="Currently exploring"
      className="py-12 md:py-16 border-b border-[var(--border)] bg-[var(--surface)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--muted)] whitespace-nowrap shrink-0">
              CURRENTLY EXPLORING
            </span>

            <div className="min-h-[2.5rem] flex items-center">
              <p
                key={EXPLORING_TOPICS[activeIndex]}
                aria-live="polite"
                className="font-editorial text-2xl sm:text-3xl text-[var(--text)] transition-opacity duration-300"
              >
                {EXPLORING_TOPICS[activeIndex]}
              </p>
            </div>
          </div>

          {/* Quiet interactive index */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            role="tablist"
            aria-label="Exploration topics"
          >
            {EXPLORING_TOPICS.map((topic, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={topic}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(index)}
                  className={`text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 whitespace-nowrap py-1 ${
                    isSelected
                      ? 'text-[var(--text)] font-semibold border-b border-[var(--text)]'
                      : 'text-[var(--muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
