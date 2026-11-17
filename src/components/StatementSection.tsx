import {Reveal} from './Reveal';

export function StatementSection() {
  return (
    <section
      aria-label="Personal statement"
      className="py-24 md:py-36 border-b border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <blockquote className="font-editorial text-[clamp(1.75rem,3.6vw,3.125rem)] font-normal leading-[1.28] tracking-[-0.015em] text-[var(--text)]">
            &ldquo;I&apos;m less interested in having everything figured out, and more interested in
            building, learning, and finding out.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
