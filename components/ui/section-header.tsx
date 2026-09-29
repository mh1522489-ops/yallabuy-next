interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 max-w-2xl">
      <div className="mb-6 font-sans text-15px uppercase tracking-widest text-slate-gray">
        {label}
      </div>

      <h2 className="font-display text-44px md:text-64px text-ink-black text-balance leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 font-sans text-20px text-slate-gray text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

