export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    slug: "predictive-vs-preventive-maintenance",
    title: "Predictive vs Preventive: Why the Difference Matters on the Floor",
    excerpt:
      "Most teams default to preventive schedules. Here's when to make the case for predictive — and how to sell it upward.",
    category: "Maintenance",
    date: "February 14, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "leading-shift-workers",
    title: "What Leading Shift Workers Taught Me About Consistency",
    excerpt:
      "There is no 'off' in a 24/7 facility. The lessons from managing rotating shifts apply far beyond the plant.",
    category: "Leadership",
    date: "January 28, 2026",
    readTime: "4 min read",
  },
  {
    slug: "lessons-from-the-floor",
    title: "Five Things Manufacturing Taught Me About Raising Kids",
    excerpt:
      "Lean thinking, root cause analysis, and standard work — turns out these apply at home too.",
    category: "Life",
    date: "January 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "kaizen-for-the-individual",
    title: "Kaizen for the Individual: Continuous Improvement Isn't Just for Plants",
    excerpt:
      "The same philosophy that drives manufacturing excellence can transform personal growth — if you apply it honestly.",
    category: "Leadership",
    date: "December 30, 2025",
    readTime: "7 min read",
  },
  {
    slug: "building-maintenance-culture",
    title: "Building a Maintenance Culture That Outlasts You",
    excerpt:
      "Equipment can be replaced. A team's commitment to care cannot. Here's how to make maintenance a value, not a task.",
    category: "Maintenance",
    date: "December 15, 2025",
    readTime: "8 min read",
  },
];
