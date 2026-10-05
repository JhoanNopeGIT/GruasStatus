interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-6 max-w-3xl px-1 text-center sm:mb-8">
      <h2 className="mb-3 text-[clamp(1.6rem,5vw,2.5rem)] font-bold leading-tight text-[var(--primary)] sm:mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm leading-7 text-[var(--text-light)] sm:text-base sm:leading-8 lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
