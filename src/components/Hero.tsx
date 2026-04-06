'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import { PERSONAL, HERO_STATS, fadeInUp, staggerContainer } from '@/lib/constants';

// Terminal prompt segments typed out character by character
const TERMINAL_SEGMENTS = [
  { text: '$ ', className: 'text-emerald-500' },
  { text: 'cat ', className: 'text-neutral-400 dark:text-neutral-600' },
  { text: '~/adarsh/about.md', className: 'text-blue-500' },
];
const TOTAL_CHARS = TERMINAL_SEGMENTS.reduce((n, s) => n + s.text.length, 0);

export default function Hero() {
  const [typedCount, setTypedCount] = useState(0);

  // Type out the terminal command after the hero fade-in finishes
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const startDelay = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setTypedCount(i);
        if (i >= TOTAL_CHARS && interval) clearInterval(interval);
      }, 75);
    }, 700);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  // Render visible characters across colored segments
  const renderTyped = () => {
    let remaining = typedCount;
    return TERMINAL_SEGMENTS.map((seg, i) => {
      const visible = seg.text.slice(0, remaining);
      remaining = Math.max(0, remaining - seg.text.length);
      return (
        <span key={i} className={seg.className}>
          {visible}
        </span>
      );
    });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-36 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-mesh" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/3 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container text-center"
      >
        {/* Terminal prompt - types out on load */}
        <motion.div
          variants={fadeInUp}
          className="font-mono text-xs sm:text-sm mb-6 inline-flex items-center whitespace-pre"
          aria-label="cat ~/adarsh/about.md"
        >
          {renderTyped()}
          <span className="inline-block w-[7px] h-[1em] align-middle bg-blue-500 ml-0.5 animate-blink" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="text-neutral-900 dark:text-white">{PERSONAL.name.split(' ')[0]}</span>
          <br />
          <span className="gradient-text">{PERSONAL.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Title with mono accent */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 font-mono text-sm sm:text-base text-neutral-500 dark:text-neutral-400"
        >
          <span className="text-neutral-400 dark:text-neutral-600">{'// '}</span>
          {PERSONAL.title}
        </motion.p>

        {/* Tagline as JSDoc */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 flex justify-center font-mono text-[13px] sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-500"
        >
          <pre className="text-left whitespace-pre-wrap">
<span className="text-neutral-400 dark:text-neutral-700">{'/**'}</span>
{'\n'}<span className="text-neutral-400 dark:text-neutral-700">{' * '}</span>Engineering financial infrastructure that serves
{'\n'}<span className="text-neutral-400 dark:text-neutral-700">{' * '}</span>millions across Southeast Asia. From zero-to-one
{'\n'}<span className="text-neutral-400 dark:text-neutral-700">{' * '}</span>startups to platforms processing <span className="text-emerald-500">$15B+</span> annually.
{'\n'}<span className="text-neutral-400 dark:text-neutral-700">{' */'}</span>
          </pre>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={PERSONAL.resumeFile}
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download size={18} />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail size={18} />
            Get in Touch
          </button>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 max-w-3xl mx-auto"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl lg:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-500">
                {stat.label.toLowerCase().replace(/ /g, '_')}
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={scrollToAbout}
        className="relative z-10 mt-10 lg:mt-24 mx-auto flex flex-col items-center gap-2 text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer w-full"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-xs">
          <span className="text-emerald-500">$</span> scroll --down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
