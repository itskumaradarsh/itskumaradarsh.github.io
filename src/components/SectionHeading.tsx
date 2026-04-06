interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
}

export default function SectionHeading({ title, subtitle, number }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      {number && (
        <div className="font-mono text-xs text-neutral-500 dark:text-neutral-600 mb-3">
          <span className="text-blue-500">{number}.</span>{' '}
          <span className="text-neutral-400 dark:text-neutral-700">
            {title.toLowerCase().replace(/ /g, '_')}.tsx
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
        <span className="font-mono text-blue-500 text-2xl sm:text-3xl lg:text-4xl align-middle mr-2">
          {'//'}
        </span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
          <span className="text-neutral-400 dark:text-neutral-700">{'/* '}</span>
          {subtitle}
          <span className="text-neutral-400 dark:text-neutral-700">{' */'}</span>
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </div>
  );
}
