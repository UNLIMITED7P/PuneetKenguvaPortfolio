import {useEffect, useRef, useState, type ReactNode} from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({children, className = '', delayMs = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {threshold: 0.08, rootMargin: '0px 0px -32px 0px'},
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={delayMs > 0 ? {transitionDelay: `${delayMs}ms`} : undefined}
      className={`reveal-block ${className}`}
    >
      {children}
    </div>
  );
}
