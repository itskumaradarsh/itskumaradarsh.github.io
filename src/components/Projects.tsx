import { PROJECTS } from '@/lib/constants';
import SectionHeading from './SectionHeading';

// Generate a file-path slug from a project title
function projectSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          title="Work Highlights"
          subtitle="Selected projects that demonstrate scale, ownership, and impact"
          number="03"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`glow-card overflow-hidden flex flex-col ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* File header bar */}
              <div className="flex items-center justify-between gap-3 px-5 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500 truncate">
                    ~/projects/{projectSlug(project.title)}.md
                  </span>
                </div>
                {project.metrics && (
                  <span className="flex-shrink-0 font-mono text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-blue-500 dark:text-blue-400">
                    @ {project.company}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem */}
                <div className="mb-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/30 border-l-2 border-amber-500/60">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {'// challenge'}
                  </span>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.problem}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-6 flex-1">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {'// impact'}
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="flex-shrink-0 font-mono text-emerald-500 select-none">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono text-xs rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
