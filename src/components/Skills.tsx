import { SKILLS } from '@/lib/constants';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="section-container">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with daily"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
            <div key={index} className="glow-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
