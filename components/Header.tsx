"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md dark:border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-base tracking-tight text-stone-900 dark:text-stone-100"
        >
          {site.name}
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-stone-700 md:hidden dark:text-stone-300"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 md:hidden dark:border-white/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-stone-700 hover:bg-black/5 dark:text-stone-300 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
