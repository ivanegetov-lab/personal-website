import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

// Where all .md files live
const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  contentHtml?: string; // only populated by getPostBySlug
}

/** Returns all .md filenames as slugs (without .md extension) */
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/** Reads one markdown file, parses front matter + body, returns full Post */
export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Split front matter (---) from markdown body
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm)                          // tables, strikethrough, task lists
    .use(remarkHtml, { sanitize: false })    // allow inline HTML in posts
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    featured: data.featured ?? false,
    contentHtml,
  };
}

/** Returns all posts sorted newest first, without body HTML (for cards/grids) */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      date: data.date,
      readTime: data.readTime,
      featured: data.featured ?? false,
    } as Post;
  });

  // Sort newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
