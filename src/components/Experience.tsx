import { EXPERIENCE } from '@/lib/constants';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="10 years of building at the intersection of engineering and product"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="relative lg:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[16px] top-8 w-[15px] h-[15px] rounded-full border-[3px] border-blue-500 bg-white dark:bg-neutral-950 z-10 hidden lg:block" />

                {/* Card */}
                <div className="glow-card p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="space-y-1 mb-6">
                    {exp.roles.map((role, ri) => (
                      <div key={ri} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                        <span className={`text-sm font-semibold ${ri === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-600 dark:text-neutral-400'}`}>
                          {role.title}
                        </span>
                        <span className="text-sm text-neutral-400 dark:text-neutral-600 font-mono">
                          {role.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50"
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
      </div>
    </section>
  );
}
