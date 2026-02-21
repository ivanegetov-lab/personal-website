import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} — Ivan Getov`,
      description: post.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <main>
      <Navbar />
      <article className="min-h-screen bg-background pt-32 pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-accent transition-colors mb-12"
          >
            <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            All articles
          </Link>

          {/* Category */}
          <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="font-display text-text-primary leading-none tracking-wide mt-4 mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {post.title.toUpperCase()}
          </h1>

          {/* Date + read time */}
          <div className="flex items-center gap-4 font-body text-sm text-text-muted mb-12 pb-8 border-b border-border">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{post.readTime}</span>
          </div>

          {/* Rendered markdown content */}
          <div
            className="prose-post"
            dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
          />

          {/* Bottom nav */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent hover:text-accent-light transition-colors"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
