"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SITE_META } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient-bg">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 hero-grid-bg opacity-100" />

      {/* Accent glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent opacity-[0.03] blur-[100px] pointer-events-none" />

      {/* Two-column content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 pb-24 pt-28 lg:px-12 lg:gap-16">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Section label */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent font-body mb-6">
              {SITE_META.heroLabel}
            </span>
          </motion.div>

          {/* Name */}
          <motion.div {...fadeUp(0.2)}>
            <h1 className="font-display leading-none tracking-wide text-text-primary">
              <span style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.93 }}>
                IVAN
              </span>
              <br />
              <span style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 0.93 }}>
                GET
                <span className="text-gradient-orange">OV</span>
                <span className="inline-block w-[3px] h-[0.7em] bg-accent ml-2 align-middle animate-[blink_1s_step-end_infinite]" />
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div {...fadeUp(0.35)}>
            <p
              className="font-display text-text-secondary mt-4 leading-tight tracking-wide"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
            >
              {SITE_META.tagline}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div {...fadeUp(0.5)} className="mt-5 max-w-lg">
            <p className="font-body text-base lg:text-lg text-text-secondary leading-relaxed">
              {SITE_META.subtitle}
            </p>
          </motion.div>

          {/* Substack CTA */}
          <motion.div {...fadeUp(0.65)} className="mt-8 max-w-lg">
            <NewsletterForm size="hero" />
          </motion.div>
        </div>

        {/* ── RIGHT: Photo frame ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center justify-center shrink-0 order-first lg:order-last mb-8 lg:mb-0"
        >
          {/* Outer decorative frame */}
          <div className="relative">
            {/* Corner accent — top-left */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent z-10" />
            {/* Corner accent — bottom-right */}
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent z-10" />

            {/* Photo container — fixed ratio 1:1.83, responsive width */}
            <div
              className="relative overflow-hidden rounded-sm bg-surface-2 border border-border"
              style={{ width: "min(260px, 72vw)", aspectRatio: "704 / 1291" }}
            >
              <Image
                src="/images/headshot.png"
                alt="Ivan Getov"
                fill
                className="object-cover object-center grayscale"
                priority
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-5 -left-5 z-10 rounded-sm border border-border bg-surface px-4 py-3 shadow-lg">
              <p className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                Maintenance Leader
              </p>
              <p className="font-display text-xl text-text-primary leading-tight mt-0.5">
                10+ YEARS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator — moved to bottom-center to avoid overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="h-5 w-5 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
