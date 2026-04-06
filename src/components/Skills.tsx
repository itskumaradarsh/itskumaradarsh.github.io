import { SKILLS } from '@/lib/constants';
import SectionHeading from './SectionHeading';

// Make category names safe for a pretend module name
function moduleName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="section-container">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with daily"
          number="04"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
            <div key={index} className="glow-card p-6 font-mono text-sm">
              {/* Import-style header */}
              <div className="mb-4 text-xs text-neutral-500 dark:text-neutral-500 break-words">
                <span className="text-pink-500 dark:text-pink-400">import</span>{' '}
                <span className="text-blue-500 dark:text-blue-400">*</span>{' '}
                <span className="text-pink-500 dark:text-pink-400">as</span>{' '}
                <span className="text-amber-500 dark:text-amber-400">
                  {category.name.replace(/[^A-Za-z]/g, '')}
                </span>
                <br />
                <span className="text-pink-500 dark:text-pink-400">from</span>{' '}
                <span className="text-emerald-500 dark:text-emerald-400">
                  &apos;@/{moduleName(category.name)}&apos;
                </span>
                <span className="text-neutral-400 dark:text-neutral-700">;</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default"
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
