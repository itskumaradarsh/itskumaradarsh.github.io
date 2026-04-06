'use client';

import { Download, Linkedin, Mail } from 'lucide-react';
import { PERSONAL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold text-neutral-900 dark:text-white">
              {PERSONAL.name}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              {PERSONAL.title}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="p-2.5 rounded-lg text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PERSONAL.resumeFile}
              download
              className="p-2.5 rounded-lg text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="Download Resume"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            &copy; {currentYear} {PERSONAL.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
