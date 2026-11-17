/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {ContactSection} from './components/ContactSection';
import {CuriositySection} from './components/CuriositySection';
import {EducationSection} from './components/EducationSection';
import {ExperienceSection} from './components/ExperienceSection';
import {ExploringStrip} from './components/ExploringStrip';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {ProjectsSection} from './components/ProjectsSection';
import {StatementSection} from './components/StatementSection';
import {ThinkingSection} from './components/ThinkingSection';

const OBSERVED_SECTION_IDS = [
  'about',
  'education',
  'curiosity',
  'projects',
  'experience',
  'thinking',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-22% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--text)] focus:text-[var(--bg)] focus:px-4 focus:py-2 focus:text-xs focus:tracking-[0.15em] focus:uppercase"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSection />
        <EducationSection />
        <CuriositySection />
        <ProjectsSection />
        <ExperienceSection />
        <ThinkingSection />
        <ExploringStrip />
        <StatementSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
