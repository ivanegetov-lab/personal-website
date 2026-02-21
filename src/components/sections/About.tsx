import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "20+", label: "Years in Manufacturing" },
  { value: "100s", label: "of Team Members Led" },
  { value: "0", label: "Unplanned Shutdowns Accepted" },
  { value: "2", label: "Kids Who Keep Me Sharp" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background py-28 lg:py-36">
      {/* Decorative section number */}
      <div
        className="absolute right-6 top-10 font-display text-[18vw] leading-none text-border pointer-events-none select-none opacity-20 lg:right-12"
        aria-hidden
      >
        02
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Left: Bio — 3 cols */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="mb-4">About Ivan</SectionLabel>
              <h2
                className="font-display text-text-primary leading-none tracking-wide"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                20+ YEARS OF KEEPING
                <br />
                <span className="text-gradient-orange">THINGS RUNNING.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-8 space-y-5">
              <p className="font-body text-base leading-relaxed text-text-secondary">
                I&apos;ve spent my career inside manufacturing facilities — not in the boardroom, but on the floor. Managing maintenance teams, troubleshooting equipment failures at 2 AM, and building the systems that keep production moving when everything is on the line.
              </p>
              <p className="font-body text-base leading-relaxed text-text-secondary">
                Leadership, to me, isn&apos;t a title. It&apos;s showing up consistently, raising the standards around you, and investing in the people on your team. The same principles that drive operational excellence apply everywhere — including at home.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-accent pl-6 my-8">
                <p className="font-body text-lg font-medium text-text-primary italic leading-relaxed">
                  &ldquo;The best maintenance plan is one your team actually follows — and the best leadership is the kind that outlasts your tenure.&rdquo;
                </p>
              </blockquote>

              <p className="font-body text-base leading-relaxed text-text-secondary">
                Outside work, I&apos;m a father — and that&apos;s shaped how I think about everything. Every standard I set, every habit I build, every decision I make: I&apos;m teaching my kids what it looks like to do things right.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Stats card — 2 cols */}
          <AnimatedSection
            delay={0.3}
            direction="right"
            className="lg:col-span-2"
          >
            <div className="rounded-sm border border-border bg-surface p-8 lg:p-10">
              <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-8">
                By the Numbers
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span
                      className="font-display text-text-primary leading-none"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                    >
                      {stat.value}
                    </span>
                    <div className="h-px w-8 bg-accent my-2" />
                    <span className="font-body text-xs text-text-muted leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
