"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#prica", label: "Priča" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#bar", label: "Bar" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#140F17]/92 backdrop-blur-md shadow-[0_1px_0_var(--surface-line)] py-3.5" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
            Balde <span style={{ color: "var(--coral)" }}>food&amp;bar</span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.84rem] tracking-wide transition-colors hover:text-[var(--coral)]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-full border px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.12em] transition-all hover:bg-[var(--coral)] hover:text-[var(--background)] hover:border-[var(--coral)]"
              style={{ borderColor: "var(--button-ghost-border)", color: "var(--coral)" }}
            >
              Rezerviraj stol
            </a>
          </nav>

          <button
            aria-label="Izbornik"
            className="md:hidden z-50 text-2xl"
            style={{ color: "var(--foreground)" }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#140F17] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-xl"
            style={{ color: "var(--foreground)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="rounded-full px-6 py-3 text-sm uppercase tracking-[0.12em]"
          style={{ background: "var(--coral)", color: "var(--background)" }}
        >
          Rezerviraj stol
        </a>
      </nav>
    </>
  );
}
