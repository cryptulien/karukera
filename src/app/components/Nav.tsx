"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/multiply", label: "Multiply" },
    { href: "/pricing", label: "Pricing" },
    { href: "/playbook", label: "Playbook" },
  ];

  return (
    <header className="border-b border-white/10 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold">
            KARUKERA<span className="text-[var(--color-accent)]">.</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <a
          href="https://x.com/GustaveCEO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
        >
          @GustaveCEO
        </a>
      </div>
    </header>
  );
}
