import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <BlogGrid posts={posts} />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
