"use client";

import { useState } from "react";
import { Button } from "./Button";

interface NewsletterFormProps {
  size?: "hero" | "default";
}

export function NewsletterForm({ size = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-body text-text-secondary">
          <span className="font-semibold text-text-primary">You&apos;re in.</span> Watch your inbox.
        </p>
      </div>
    );
  }

  const isHero = size === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex ${isHero ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-3`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`
            flex-1 bg-surface-2 border border-border rounded-sm px-4 font-body text-text-primary placeholder:text-text-muted
            focus:outline-none focus:border-accent transition-colors duration-200
            ${isHero ? "py-4 text-base" : "py-3 text-sm"}
          `}
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          variant="primary"
          size={isHero ? "lg" : "md"}
          disabled={status === "loading"}
          className={isHero ? "whitespace-nowrap" : "whitespace-nowrap"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 font-body">{error}</p>
      )}
    </form>
  );
}
