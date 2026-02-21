import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SUBSTACK_URL } from "@/lib/constants";

export const metadata = {
  title: "Publications — Ivan Getov",
  description:
    "Books and publications by Ivan Getov on maintenance leadership, manufacturing, and building things that last.",
};

/* ─── Book data ──────────────────────────────────────────────────────────── */
const FEATURED_BOOK = {
  title: "Built to Last",
  subtitle: "A Maintenance Leader's Guide to Building Systems, Teams, and a Career That Endures",
  description:
    "After two decades on the plant floor, I've seen exactly what separates a maintenance program that quietly holds everything together from one that collapses the moment pressure mounts. This book is the distillation of those years — the frameworks, the failures, the hard-won lessons. Written for the maintenance supervisor who wants to stop firefighting and start leading.",
  status: "Coming Soon",
  coverImage: "/images/3d_book_cover.png",
  topics: [
    "Predictive vs. preventive strategy",
    "Building a maintenance culture that outlasts you",
    "Leading shift workers with consistency and respect",
    "Kaizen thinking for the individual technician",
    "Career development in manufacturing leadership",
  ],
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function PublicationsPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero / Featured Book ─────────────────────────────────────────── */}
      <section className="min-h-screen bg-background pt-32 pb-20 relative overflow-hidden">

        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <SectionLabel className="mb-4">Publications</SectionLabel>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* Left — book cover */}
            <div className="flex-shrink-0 w-full max-w-sm lg:max-w-[360px] order-1 lg:order-2">
              <div className="relative group">
                {/* Glow behind cover */}
                <div
                  className="absolute -inset-8 rounded-full opacity-60 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.18) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />
                <div className="relative">
                  <Image
                    src={FEATURED_BOOK.coverImage}
                    alt={`${FEATURED_BOOK.title} book cover`}
                    width={360}
                    height={460}
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                    style={{
                      filter: "drop-shadow(0 40px 60px rgba(249, 115, 22, 0.25))",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right — book info */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Status badge */}
              <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {FEATURED_BOOK.status}
              </span>

              {/* Title */}
              <h1
                className="font-display text-text-primary leading-none tracking-wide mb-4"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                {FEATURED_BOOK.title.toUpperCase()}
              </h1>

              {/* Subtitle */}
              <p className="font-body text-text-secondary text-lg leading-relaxed mb-6 max-w-xl">
                {FEATURED_BOOK.subtitle}
              </p>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-accent mb-6" />

              {/* Description */}
              <p className="font-body text-text-muted text-base leading-relaxed mb-8 max-w-xl">
                {FEATURED_BOOK.description}
              </p>

              {/* Topics */}
              <div className="mb-10">
                <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  What&apos;s Inside
                </p>
                <ul className="space-y-2">
                  {FEATURED_BOOK.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 font-body text-sm text-text-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-background hover:bg-accent-dark transition-colors duration-200"
                >
                  {/* Bell icon */}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Get Notified on Launch
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  Read the Blog
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter Strip ─────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-2">
                Be First in Line
              </p>
              <h2
                className="font-display text-text-primary leading-none tracking-wide"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                DON&apos;T MISS THE LAUNCH
              </h2>
              <p className="font-body text-text-muted text-sm mt-2 max-w-md">
                Subscribe on Substack and you&apos;ll be the first to know when the book drops — plus get early access to chapters.
              </p>
            </div>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold tracking-wide text-background hover:bg-accent-dark transition-colors duration-200"
            >
              {/* Substack icon */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              Follow on Substack
            </a>
          </div>
        </div>
      </section>

      {/* ── Future Books ─────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionLabel className="mb-4">The Library</SectionLabel>
          <h2
            className="font-display text-text-primary leading-none tracking-wide mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            MORE TO <span className="text-accent">COME</span>
          </h2>

          {/* Placeholder book slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "02",
                title: "The Shift Leader",
                description: "Leading people through high-pressure, around-the-clock environments. A field guide for front-line manufacturing supervisors.",
              },
              {
                number: "03",
                title: "Kaizen at Home",
                description: "What happens when a manufacturing professional applies continuous improvement principles to family, home, and personal growth.",
              },
              {
                number: "04",
                title: "Untitled",
                description: "The next chapter is still being written — follow along on Substack as the ideas take shape.",
              },
            ].map((book) => (
              <div
                key={book.number}
                className="group relative border border-border bg-surface rounded-sm p-8 hover:border-accent/40 card-hover-glow transition-all duration-300"
              >
                {/* Number watermark */}
                <span
                  className="font-display text-8xl leading-none select-none absolute top-4 right-6 text-border"
                  aria-hidden="true"
                >
                  {book.number}
                </span>

                {/* Content */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-sm border border-border flex items-center justify-center mb-6 group-hover:border-accent/40 transition-colors duration-300">
                    <svg className="h-5 w-5 text-text-muted group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-wide text-text-primary mb-3">
                    {book.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Author Strip ─────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Author photo */}
            <div className="flex-shrink-0">
              <div className="relative h-28 w-28 rounded-sm overflow-hidden border border-border">
                <Image
                  src="/images/headshot.png"
                  alt="Ivan Getov"
                  fill
                  className="object-cover object-top grayscale"
                />
              </div>
            </div>
            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-2">
                About the Author
              </p>
              <h3 className="font-display text-3xl tracking-wide text-text-primary mb-3">
                IVAN GETOV
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed max-w-2xl">
                Ivan Getov is a maintenance leader and manufacturing professional with over two decades of experience keeping complex industrial systems running. He writes about leadership, operational reliability, and the craft of building things — and teams — that last. He lives with his wife and kids and is currently working on his first book.
              </p>
              <div className="flex gap-6 mt-5 justify-center md:justify-start">
                <Link
                  href="/blog"
                  className="font-body text-sm text-accent hover:text-accent-light transition-colors font-semibold"
                >
                  Read the Blog →
                </Link>
                <Link
                  href="/contact"
                  className="font-body text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
