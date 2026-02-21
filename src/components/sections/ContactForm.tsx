"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const CONTACT_METHODS = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "ivanegetov@gmail.com",
    href: "mailto:ivanegetov@gmail.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/ivan-getov-mba",
    href: "https://www.linkedin.com/in/ivan-getov-mba",
  },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  const inputClass =
    "w-full bg-surface-2 border border-border rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-28 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-40" />
      {/* Accent glow */}
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Decorative section number */}
      <div
        className="absolute left-6 top-24 font-display text-[20vw] leading-none text-border pointer-events-none select-none opacity-15 lg:left-12"
        aria-hidden
      >
        05
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">

          {/* Left: Info — 2 cols */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="mb-4">Get in Touch</SectionLabel>
              <h1
                className="font-display text-text-primary leading-none tracking-wide"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                LET&apos;S
                <br />
                <span className="text-gradient-orange">CONNECT.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-8">
              <p className="font-body text-base text-text-secondary leading-relaxed">
                Whether you have a question about maintenance leadership, want to collaborate, or just want to say hello — I read every message and respond to every one that&apos;s worth a reply.
              </p>
            </AnimatedSection>

            {/* Contact methods */}
            <AnimatedSection delay={0.3} className="mt-10 space-y-4">
              {CONTACT_METHODS.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-text-muted group-hover:border-accent group-hover:text-accent transition-all duration-200">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-text-muted">
                      {method.label}
                    </p>
                    <p className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </AnimatedSection>

            {/* Response time note */}
            <AnimatedSection delay={0.4} className="mt-10">
              <div className="rounded-sm border border-border bg-surface p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-body text-xs font-semibold text-accent tracking-wide">Typically responds within 48 hours</span>
                </div>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  I prioritize messages from manufacturing professionals, maintenance teams, and people serious about leadership.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form — 3 cols */}
          <AnimatedSection delay={0.2} direction="right" className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex h-full min-h-[480px] flex-col items-center justify-center rounded-sm border border-border bg-surface p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-3xl text-text-primary tracking-wide mb-3">
                  MESSAGE SENT
                </h2>
                <p className="font-body text-sm text-text-secondary max-w-xs">
                  Thanks for reaching out, {form.name}. I&apos;ll be in touch within 48 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 font-body text-sm text-accent hover:text-accent-light transition-colors"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-border bg-surface p-8 lg:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-text-muted">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ivan Getov"
                      className={inputClass}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-text-muted">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-text-muted">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                    disabled={status === "loading"}
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="collaboration">Collaboration / Partnership</option>
                    <option value="consulting">Consulting / Advisory</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="newsletter">Newsletter / Content</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-text-muted">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what's on your mind..."
                    rows={6}
                    className={`${inputClass} resize-none`}
                    disabled={status === "loading"}
                  />
                </div>

                {error && (
                  <p className="font-body text-sm text-red-400">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                <p className="font-body text-xs text-text-muted text-center">
                  Your message is private and won&apos;t be shared with anyone.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
