import { Download, Linkedin, Mail } from 'lucide-react';
import { PERSONAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs">
      <div className="section-container">
        {/* Git-style branch info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-500 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-400 dark:text-neutral-600">branch:</span>
              <span className="text-blue-500 dark:text-blue-400">main</span>
            </span>
            <span className="text-neutral-300 dark:text-neutral-800">·</span>
            <span>
              <span className="text-neutral-400 dark:text-neutral-600">commit:</span>{' '}
              <span className="text-emerald-500 dark:text-emerald-400">7a3f9e2</span>
            </span>
            <span className="text-neutral-300 dark:text-neutral-800">·</span>
            <span>
              <span className="text-neutral-400 dark:text-neutral-600">build:</span>{' '}
              <span className="text-emerald-500 dark:text-emerald-400">passing</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="p-2 rounded text-neutral-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-neutral-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL.resumeFile}
              download
              className="p-2 rounded text-neutral-500 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              aria-label="Download Resume"
            >
              <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
