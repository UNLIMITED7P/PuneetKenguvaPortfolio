import {SITE_META} from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="py-12 md:py-14 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)]">
              PUNEET KENGUVA
            </p>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mt-1">
              B.ARCH (UVCE) · BBA DBE (IIM BANGALORE)
            </p>
          </div>

          <p className="text-xs text-[var(--muted)] tabular-nums">
            &copy; {SITE_META.copyrightYear} {SITE_META.name}
          </p>

          <nav aria-label="Footer links" className="flex items-center gap-6">
            <a
              href={`mailto:${SITE_META.email}`}
              className="editorial-link text-xs tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              Email
            </a>
            <a
              href={SITE_META.resumePdfPath}
              target="_blank"
              rel="noreferrer"
              className="editorial-link text-xs tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="editorial-link text-xs tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              Projects
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
          <span>DESIGNED &amp; BUILT WITH CURIOSITY.</span>
          <span>{SITE_META.location}</span>
        </div>
      </div>
    </footer>
  );
}
