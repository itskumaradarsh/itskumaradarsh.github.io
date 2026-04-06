'use client';

import { motion } from 'framer-motion';
import { PROJECTS, fadeInUp, staggerContainer } from '@/lib/constants';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          title="Work Highlights"
          subtitle="Selected projects that demonstrate scale, ownership, and impact"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`glow-card p-6 lg:p-8 flex flex-col ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="mb-1">
                    <h3 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.company}
                  </span>
                </div>
                {project.metrics && (
                  <span className="flex-shrink-0 px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Problem */}
              <div className="mb-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-800/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
                  Challenge
                </span>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.problem}
                </p>
              </div>

              {/* Impact */}
              <div className="mb-6 flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
                  Impact
                </span>
                <ul className="mt-2 space-y-1.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
