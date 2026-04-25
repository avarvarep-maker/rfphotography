"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/pachete", label: "Pachete" },
  { href: "/despre", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} />
            ))}
          </nav>

          {/* Logo center */}
          <Link href="/" className="flex flex-col items-center group">
            <span
              className="text-2xl tracking-[0.3em] uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontWeight: 600 }}
            >
              RF
            </span>
            <span
              className="text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Photography
            </span>
          </Link>

          {/* Right links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} />
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
            style={{ color: "var(--text)" }}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl tracking-widest uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: pathname === link.href ? "var(--gold)" : "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="pb-8 text-center" style={{ color: "var(--muted)", fontSize: "12px", letterSpacing: "0.2em" }}>
              Constanța, România
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="relative text-xs tracking-[0.2em] uppercase transition-colors duration-200 group"
      style={{ color: active ? "var(--gold)" : "var(--muted)" }}
    >
      {label}
      <span
        className="absolute -bottom-1 left-0 h-px transition-all duration-300"
        style={{
          backgroundColor: "var(--gold)",
          width: active ? "100%" : "0%",
        }}
      />
    </Link>
  );
}
