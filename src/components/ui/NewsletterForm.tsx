import { SUBSTACK_URL } from "@/lib/constants";

interface NewsletterFormProps {
  size?: "hero" | "default";
}

export function NewsletterForm({ size = "default" }: NewsletterFormProps) {
  const isHero = size === "hero";

  return (
    <div className="w-full">
      <a
        href={SUBSTACK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center justify-center gap-3 rounded-sm bg-accent font-body font-semibold tracking-wide text-background
          hover:bg-accent-dark transition-colors duration-200
          ${isHero ? "px-8 py-4 text-base w-full sm:w-auto" : "px-7 py-3.5 text-sm w-full"}
        `}
      >
        {/* Substack icon */}
        <svg className={isHero ? "h-5 w-5" : "h-4 w-4"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
        Subscribe on Substack
      </a>
      {isHero && (
        <p className="mt-3 font-body text-xs text-text-muted">
          Free. No spam. Read by people who build things.
        </p>
      )}
    </div>
  );
}
