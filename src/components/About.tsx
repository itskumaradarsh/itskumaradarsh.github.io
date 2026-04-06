import { Briefcase, Rocket, Globe } from 'lucide-react';
import { ABOUT } from '@/lib/constants';
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

        {/* Top: Photo + Summary */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Photo - Left */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[220px]">
              {/* Soft gradient glow behind photo */}
              <div
                aria-hidden
                className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent rounded-[2rem] blur-2xl opacity-60 dark:opacity-80"
              />

              {/* Photo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">
                <img
                  src="/adarsh.jpg"
                  alt="Adarsh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Summary - Right */}
          <div className="lg:col-span-8 space-y-5">
            {ABOUT.summary.map((paragraph, i) => (
              <p
                key={i}
                className="text-base lg:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify hyphens-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom: Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT.highlights.map((highlight, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <div
                key={i}
                className="flex flex-col gap-3 p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                  <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
