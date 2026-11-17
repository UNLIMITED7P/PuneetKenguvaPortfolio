import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {SITE_META} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function ContactSection() {
  const [notice, setNotice] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const isPlaceholder = (value: string) => value.startsWith('[');

  const handlePlaceholderAction = (label: string, value: string) => {
    if (isPlaceholder(value)) {
      setNotice(
        `${label} is currently set to ${value}. Add your live ${label.toLowerCase()} URL in src/data/portfolioData.ts.`,
      );
      return;
    }
    window.open(value, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_META.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${SITE_META.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
                07 / LET&apos;S CONNECT
              </p>
              <h2 className="font-editorial text-[clamp(2rem,3.8vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.015em] text-[var(--text)] mb-6">
                Have an idea, question, or opportunity?
              </h2>
              <p className="text-[15px] md:text-base leading-[1.7] text-[var(--muted)] max-w-xl">
                Whether it&apos;s an architectural project, digital business collaboration, or a
                conversation across disciplines, I&apos;d be glad to hear from you.
              </p>
            </div>

            <div className="lg:col-span-5 lg:text-right space-y-2">
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--muted)]">
                DIRECT EMAIL
              </p>
              <div className="inline-flex items-center gap-3 flex-wrap lg:justify-end">
                <a
                  href={`mailto:${SITE_META.email}`}
                  className="font-editorial text-lg md:text-xl text-[var(--text)] hover:underline underline-offset-4"
                >
                  {SITE_META.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text)] hover:border-[var(--text)] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs tracking-[0.06em] text-[var(--muted)]">
                {SITE_META.location}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-12 pt-10 border-t border-[var(--border)] flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE_META.email}`}
              className="inline-flex items-center gap-2.5 bg-[var(--text)] text-[var(--bg)] border border-[var(--text)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#23372E] transition-colors duration-200 whitespace-nowrap group"
            >
              <span>EMAIL PUNEET</span>
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
              className="inline-flex items-center gap-2.5 bg-transparent text-[var(--text)] border border-[var(--border-strong)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-200 whitespace-nowrap group"
            >
              <span>VIEW RESUME (PDF)</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <button
              type="button"
              onClick={() => handlePlaceholderAction('LinkedIn', SITE_META.linkedinPlaceholder)}
              className="inline-flex items-center gap-2.5 bg-transparent text-[var(--text)] border border-[var(--border-strong)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-200 whitespace-nowrap group"
            >
              <span>LINKEDIN</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <button
              type="button"
              onClick={() => handlePlaceholderAction('GitHub', SITE_META.githubPlaceholder)}
              className="inline-flex items-center gap-2.5 bg-transparent text-[var(--text)] border border-[var(--border-strong)] px-6 py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-200 whitespace-nowrap group"
            >
              <span>GITHUB</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>

          {notice && (
            <p
              role="status"
              className="mt-5 text-xs text-[var(--muted)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 inline-block"
            >
              {notice}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
