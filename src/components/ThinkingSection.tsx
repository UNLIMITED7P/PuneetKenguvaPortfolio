import {useEffect, useState} from 'react';
import {X} from 'lucide-react';
import {THINKING_NOTES, type ThinkingNote} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function ThinkingSection() {
  const [activeNote, setActiveNote] = useState<ThinkingNote | null>(null);

  useEffect(() => {
    if (!activeNote) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveNote(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeNote]);

  return (
    <section id="thinking" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
              06 / THINKING
            </p>
            <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)]">
              Things I&apos;m currently thinking about.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {THINKING_NOTES.map((note, index) => (
            <Reveal key={note.id} delayMs={index * 60}>
              <article className="group border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition-colors duration-200 p-8 md:p-9 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-[var(--border)] text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--muted)]">
                    <span>{note.category}</span>
                    <span>
                      {note.date} · {note.readTime}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl md:text-2xl font-normal leading-[1.3] text-[var(--text)] mb-4">
                    {note.title}
                  </h3>

                  <p className="text-sm md:text-[15px] leading-[1.7] text-[var(--muted)] mb-8">
                    {note.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveNote(note)}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase text-[var(--text)] hover:text-[var(--muted)] transition-colors py-1"
                  >
                    <span>READ</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Essay Reader Modal */}
      {activeNote && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="note-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17251F]/55 backdrop-blur-[2px]"
          onClick={() => setActiveNote(null)}
        >
          <article
            className="w-full max-w-xl max-h-[88vh] overflow-y-auto bg-[var(--bg)] border border-[var(--text)] p-7 sm:p-11"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 pb-5 mb-7 border-b border-[var(--border)]">
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-2">
                  {activeNote.category} · {activeNote.readTime}
                </p>
                <h3
                  id="note-modal-title"
                  className="font-editorial text-2xl sm:text-3xl font-normal leading-[1.2] text-[var(--text)]"
                >
                  {activeNote.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveNote(null)}
                aria-label="Close note"
                className="w-10 h-10 shrink-0 inline-flex items-center justify-center border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-5 text-[15px] sm:text-base leading-[1.8] text-[var(--text)]/90">
              {activeNote.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 pt-5 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-[11px] tracking-[0.16em] uppercase text-[var(--muted)]">
                PUNEET KENGUVA — NOTES
              </span>
              <button
                type="button"
                onClick={() => setActiveNote(null)}
                className="border border-[var(--text)] px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
              >
                DONE READING
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
