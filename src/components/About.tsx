'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Rocket, Globe } from 'lucide-react';
import { ABOUT, PERSONAL, fadeInUp, staggerContainer } from '@/lib/constants';
import SectionHeading from './SectionHeading';

const highlightIcons = [Briefcase, Rocket, Globe, Briefcase];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="A decade of building high-stakes systems at scale"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Summary - Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3 space-y-5"
          >
            {ABOUT.summary.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Location Badge */}
            <motion.div variants={fadeInUp} className="pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                <MapPin size={16} />
                {PERSONAL.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Highlights - Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 space-y-4"
          >
            {ABOUT.highlights.map((highlight, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {highlight}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
