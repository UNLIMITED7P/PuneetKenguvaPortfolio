import {useEffect, useState} from 'react';
import {X} from 'lucide-react';
import {PROJECT_ITEMS, type ProjectItem} from '../data/portfolioData';
import {Reveal} from './Reveal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!selectedProject) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({...prev, [id]: true}));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-4">
              04 / SELECTED WORK
            </p>
            <h2 className="font-editorial text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--text)]">
              Things I&apos;ve built, explored, or worked on.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECT_ITEMS.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 60}>
              <article className="group border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--text)] flex flex-col h-full">
                {/* Large 4:3 Visual Frame */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full text-left overflow-hidden border-b border-[var(--border)] bg-[var(--surface-warm)] aspect-[4/3] relative focus-visible:outline-offset-[-3px]"
                  aria-label={`Inspect ${project.name}`}
                >
                  {!failedImages[project.id] ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[var(--surface-warm)]">
                      <span className="font-editorial text-4xl text-[var(--text)] mb-2 tabular-nums">
                        {project.number}
                      </span>
                      <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] text-center">
                        {project.name}
                      </span>
                    </div>
                  )}
                </button>

                {/* Structured Editorial Metadata */}
                <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)]">
                      <span className="tabular-nums">{project.number}</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="font-editorial text-2xl md:text-[26px] font-normal leading-[1.25] text-[var(--text)] mb-3 transition-transform duration-200 group-hover:translate-x-1">
                      {project.name}
                    </h3>

                    <p className="text-sm md:text-[15px] leading-[1.7] text-[var(--muted)] mb-7">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-t border-b border-[var(--border)] text-xs mb-6">
                      <div>
                        <dt className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                          ROLE
                        </dt>
                        <dd className="text-[var(--text)] font-medium">{project.role}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                          YEAR
                        </dt>
                        <dd className="text-[var(--text)] font-medium tabular-nums">
                          {project.year}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                          TECH / TOOLS
                        </dt>
                        <dd className="text-[var(--text)] font-medium">{project.tools}</dd>
                      </div>
                    </dl>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase text-[var(--text)] hover:text-[var(--muted)] transition-colors py-1 whitespace-nowrap"
                    >
                      <span>VIEW PROJECT</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Dossier Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17251F]/55 backdrop-blur-[2px]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--bg)] border border-[var(--text)] p-6 sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 pb-5 mb-6 border-b border-[var(--border)]">
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--muted)] mb-2">
                  PROJECT {selectedProject.number} · {selectedProject.category}
                </p>
                <h3
                  id="project-modal-title"
                  className="font-editorial text-2xl sm:text-3xl font-normal text-[var(--text)]"
                >
                  {selectedProject.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="w-10 h-10 shrink-0 inline-flex items-center justify-center border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!failedImages[selectedProject.id] && (
              <div className="aspect-[16/9] w-full overflow-hidden border border-[var(--border)] mb-7 bg-[var(--surface)]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 mb-6 border-b border-[var(--border)] text-xs">
              <div>
                <span className="block text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                  ROLE
                </span>
                <span className="font-medium text-[var(--text)]">{selectedProject.role}</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                  YEAR
                </span>
                <span className="font-medium text-[var(--text)] tabular-nums">
                  {selectedProject.year}
                </span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] mb-1">
                  TECH / TOOLS
                </span>
                <span className="font-medium text-[var(--text)]">{selectedProject.tools}</span>
              </div>
            </div>

            <div className="space-y-6 text-[15px] leading-[1.7] text-[var(--muted)]">
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text)] mb-2">
                  OVERVIEW
                </h4>
                <p>{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text)] mb-2">
                  FOCUS AREAS
                </h4>
                <ul className="space-y-2">
                  {selectedProject.focusAreas.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="text-[var(--text)] mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[var(--border)] bg-[var(--surface)] p-4 text-xs text-[var(--muted)]">
                {selectedProject.outcomeNote}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[var(--border)] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="border border-[var(--text)] px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
              >
                CLOSE BRIEF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
