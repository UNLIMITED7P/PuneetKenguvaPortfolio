import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  {id: 'about', label: 'ABOUT'},
  {id: 'education', label: 'EDUCATION'},
  {id: 'experience', label: 'WORK'},
  {id: 'projects', label: 'PROJECTS'},
  {id: 'thinking', label: 'THINKING'},
  {id: 'contact', label: 'CONTACT'},
];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({activeSection}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[var(--bg)]/95 backdrop-blur-sm border-[var(--border)]'
          : 'bg-[var(--bg)] border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between gap-8">
        <a
          href="#top"
          className="text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--text)] whitespace-nowrap shrink-0"
        >
          PUNEET KENGUVA
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-active={isActive ? 'true' : 'false'}
                className={`editorial-link text-[11px] font-medium tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 border border-[var(--text)] px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors duration-200 whitespace-nowrap shrink-0 group"
          >
            <span>LET&apos;S TALK</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="lg:hidden fixed inset-0 top-16 z-50 bg-[var(--bg)] border-t border-[var(--border)] flex flex-col justify-between px-6 py-8 overflow-y-auto"
        >
          <nav aria-label="Mobile sections" className="flex flex-col divide-y divide-[var(--border)]">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between py-4 text-left text-sm font-medium tracking-[0.16em] uppercase text-[var(--text)] hover:text-[var(--muted)] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--muted)] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-[var(--border)] space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 border border-[var(--text)] bg-[var(--text)] text-[var(--bg)] px-5 py-3.5 text-xs font-medium tracking-[0.16em] uppercase"
            >
              <span>LET&apos;S TALK</span>
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] text-center">
              DUAL DEGREE CANDIDATE
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
