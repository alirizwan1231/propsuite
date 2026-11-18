"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KeyIcon, MenuIcon, XIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/crm", label: "Agent CRM" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const dark = path !== "/" || scrolled;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark ? "bg-pine-950/90 shadow-[0_1px_0_rgba(200,161,92,0.25)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/70 text-gold-400">
            <KeyIcon className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[22px] tracking-wide text-ivory">
              Prop<span className="text-gold-400">Suite</span>
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-widest2 text-mist">Dubai · Est. 2016</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold-300 ${
                path === l.href ? "text-gold-400" : "text-ivory/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/properties"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-pine-950 transition hover:bg-gold-400"
          >
            Book a Viewing
          </Link>
        </nav>
        <button className="text-ivory lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-pine-950/95 px-5 py-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-[0.18em] text-ivory/85">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
