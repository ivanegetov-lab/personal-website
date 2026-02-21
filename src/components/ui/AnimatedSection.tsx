"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: AnimatedSectionProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 28 : 0,
    x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
