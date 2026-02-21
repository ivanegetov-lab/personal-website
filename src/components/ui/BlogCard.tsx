"use client";

import { motion } from "framer-motion";
import { Post } from "@/lib/posts";

const CATEGORY_COLORS: Record<string, string> = {
  Maintenance: "text-orange-400",
  Leadership: "text-blue-400",
  Life: "text-emerald-400",
};

interface BlogCardProps {
  post: Post;
  featured?: boolean;
  index?: number;
}

export function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  const categoryColor = CATEGORY_COLORS[post.category] ?? "text-accent";

  return (
    <motion.a
      href={`/blog/${post.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col rounded-sm border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/40 card-hover-glow cursor-pointer ${
        featured ? "lg:p-8" : ""
      }`}
    >
      {/* Category */}
      <span className={`font-body text-[10px] font-semibold tracking-[0.18em] uppercase ${categoryColor} mb-4`}>
        {post.category}
      </span>

      {/* Title */}
      <h3
        className={`font-body font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors duration-200 ${
          featured ? "text-xl lg:text-2xl" : "text-lg"
        }`}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className={`mt-3 font-body text-sm text-text-secondary leading-relaxed flex-1 ${featured ? "text-base" : ""}`}>
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3 font-body text-xs text-text-muted">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>
        <span className="font-body text-xs font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          Read
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
