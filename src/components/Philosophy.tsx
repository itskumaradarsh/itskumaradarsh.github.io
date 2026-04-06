'use client';

import { motion } from 'framer-motion';
import { Layers, Shield, Minimize2, Users } from 'lucide-react';
import { PHILOSOPHY, fadeInUp, staggerContainer } from '@/lib/constants';
import SectionHeading from './SectionHeading';

const iconMap = {
  layers: Layers,
  shield: Shield,
  minimize: Minimize2,
  users: Users,
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          title="Engineering Philosophy"
          subtitle="Principles that guide how I build and lead"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PHILOSOPHY.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glow-card p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/15 dark:to-cyan-500/15 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 text-center"
        >
          <blockquote className="text-lg lg:text-xl italic text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
            &ldquo;The measure of a senior engineer is not the systems they build, but the clarity they bring to complex problems and the engineers they grow along the way.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
