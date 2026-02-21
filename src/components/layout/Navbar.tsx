"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On sub-pages, anchor links must be prefixed with / so they navigate home first
  function resolveHref(href: string) {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl tracking-wider text-text-primary hover:text-accent transition-colors duration-200"
          >
            IVAN <span className="text-accent">GETOV</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={resolveHref(link.href)}
                className="font-body text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resolveHref("#newsletter")}
              className="rounded-sm bg-accent px-5 py-2.5 font-body text-sm font-semibold text-background transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-text-primary" />
            <span className="block h-0.5 w-4 bg-text-primary" />
            <span className="block h-0.5 w-6 bg-text-primary" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-background transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-xl tracking-wider text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            IVAN <span className="text-accent">GETOV</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-text-secondary hover:text-text-primary"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              onClick={() => setMobileOpen(false)}
              className="font-display text-5xl tracking-wider text-text-primary hover:text-accent transition-colors duration-200"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href={resolveHref("#newsletter")}
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-sm bg-accent px-8 py-4 font-body text-base font-semibold text-background"
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
}
