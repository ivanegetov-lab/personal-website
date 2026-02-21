interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-accent ${className}`}
    >
      {children}
    </span>
  );
}
