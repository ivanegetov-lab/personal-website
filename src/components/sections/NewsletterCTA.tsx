import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SUBSTACK_URL } from "@/lib/constants";

export function NewsletterCTA() {
  return (
    <section id="newsletter" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 newsletter-glow-bg" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Decorative section number */}
      <div
        className="absolute right-6 top-10 font-display text-[18vw] leading-none text-border pointer-events-none select-none opacity-20 lg:right-12"
        aria-hidden
      >
        04
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: Copy */}
          <AnimatedSection delay={0.1} direction="left">
            <SectionLabel className="mb-4">Newsletter</SectionLabel>
            <h2
              className="font-display text-text-primary leading-none tracking-wide"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)" }}
            >
              DON&apos;T MISS THE
              <br />
              <span className="text-gradient-orange">NEXT ONE.</span>
            </h2>
            <p className="mt-6 font-body text-base text-text-secondary leading-relaxed max-w-sm">
              Practical insights from 10+ years on the manufacturing floor — on maintenance leadership, building teams, and the discipline it takes to keep systems running at their best.
            </p>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["bg-orange-500", "bg-blue-500", "bg-emerald-500"].map((color, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${color} border-2 border-surface flex items-center justify-center`}
                  >
                    <span className="font-body text-[10px] font-bold text-white">
                      {["M", "J", "R"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-text-muted">
                Joined by{" "}
                <span className="text-text-secondary font-semibold">manufacturing professionals</span>{" "}
                across the industry
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Substack CTA card */}
          <AnimatedSection delay={0.25} direction="right">
            <div className="rounded-sm border border-border bg-background p-8 lg:p-10">
              <p className="font-body text-sm font-semibold text-text-primary mb-1">
                Published on Substack
              </p>
              <p className="font-body text-xs text-text-muted mb-8 leading-relaxed">
                No spam. One essay when it&apos;s worth your time. Subscribe free and read it wherever you want.
              </p>

              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-accent px-7 py-4 font-body text-sm font-semibold tracking-wide text-background hover:bg-accent-dark transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Subscribe on Substack — It&apos;s Free
              </a>

              {/* Benefits */}
              <ul className="mt-6 space-y-2.5">
                {[
                  "Maintenance strategy & leadership insights",
                  "Lessons from the manufacturing floor",
                  "Thoughts on craft, fatherhood, and building what lasts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="h-4 w-4 text-accent shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-xs text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
