interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}
