import Link from "next/link";
import { Post } from "@/lib/posts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "@/components/ui/BlogCard";

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="relative bg-surface py-28 lg:py-36">
      {/* Decorative section number */}
      <div
        className="absolute left-6 top-10 font-display text-[18vw] leading-none text-border pointer-events-none select-none opacity-20 lg:left-12"
        aria-hidden
      >
        03
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection delay={0.1} className="mb-14">
          <SectionLabel className="mb-4">Latest Thinking</SectionLabel>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="font-display text-text-primary leading-none tracking-wide"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              FROM THE <span className="text-gradient-orange">FIELD</span>
            </h2>
            <Link
              href="/blog"
              className="font-body text-sm font-semibold text-accent hover:text-accent-light transition-colors flex items-center gap-1.5 shrink-0"
            >
              All articles
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured post — spans 2 cols */}
          {featured && (
            <div className="md:col-span-2">
              <BlogCard post={featured} featured index={0} />
            </div>
          )}

          {/* Remaining posts */}
          {rest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
