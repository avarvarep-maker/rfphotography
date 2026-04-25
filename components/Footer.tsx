"use client";

import Link from "next/link";
import { FacebookLogo, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <span
              className="text-3xl tracking-[0.3em] uppercase block"
              style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontWeight: 600 }}
            >
              RF
            </span>
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--muted)" }}>
              Photography
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Fotografie & filmare profesională pentru cele mai importante momente ale vieții tale.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/RFphotography.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              aria-label="Facebook"
            >
              <FacebookLogo size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>
            Navigare
          </h3>
          {[
            { href: "/", label: "Acasă" },
            { href: "/portofoliu", label: "Portofoliu" },
            { href: "/pachete", label: "Pachete" },
            { href: "/despre", label: "Despre noi" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 hover:text-[var(--gold)]"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>
            Contact
          </h3>
          <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
            <MapPin size={16} />
            <span>Constanța, România</span>
          </div>
          <a
            href="tel:+40000000000"
            className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--gold)]"
            style={{ color: "var(--muted)" }}
          >
            <Phone size={16} />
            <span>+40 000 000 000</span>
          </a>
          <a
            href="mailto:contact@rfphotography.ro"
            className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--gold)]"
            style={{ color: "var(--muted)" }}
          >
            <EnvelopeSimple size={16} />
            <span>contact@rfphotography.ro</span>
          </a>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} RF Photography. Toate drepturile rezervate.
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Ramona & Florin Cojocaru
        </p>
      </div>
    </footer>
  );
}
