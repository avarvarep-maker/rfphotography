"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span
              className="text-2xl tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontWeight: 600, lineHeight: 1 }}
            >
              RF
            </span>
            <span
              className="text-[9px] tracking-[0.55em] uppercase mt-0.5"
              style={{ color: "var(--muted)" }}
            >
              Photography
            </span>
          </Link>

          {/* Right links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
            style={{ color: "var(--text)" }}
          >
            {menuOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {/* Top gold line */}
            <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

            <nav className="flex flex-col items-center justify-center flex-1 gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div
              className="pb-10 text-center flex flex-col items-center gap-2"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="pt-8 text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--muted)" }}>
                Constanța · România
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
