import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/ui/BlogCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Ivan Getov",
  description: "Articles on maintenance leadership, manufacturing, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-background pt-32 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionLabel className="mb-4">All Articles</SectionLabel>
          <h1
            className="font-display text-text-primary leading-none tracking-wide mb-14"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            FROM THE <span className="text-gradient-orange">FIELD</span>
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
