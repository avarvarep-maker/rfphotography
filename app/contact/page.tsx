"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, FacebookLogo, PaperPlaneRight } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const services = [
  "Nuntă", "Botez", "Logodnă", "Familie / Maternitate",
  "Majorat", "Trash the Dress", "Studio", "Video eveniment", "Alt eveniment",
];

const labelClass = "text-[10px] tracking-[0.3em] uppercase block mb-2";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", date: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-40 pb-20 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, #1c1508 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label">Să lucrăm împreună</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
          >
            Contact
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left: contact info ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <span className="section-label">Date de contact</span>
            <div className="gold-divider" />

            <div className="flex flex-col gap-5 mb-12">
              {[
                { href: "tel:+40000000000", Icon: Phone, label: "Telefon", value: "+40 000 000 000" },
                { href: "mailto:contact@rfphotography.ro", Icon: EnvelopeSimple, label: "Email", value: "contact@rfphotography.ro" },
                { href: "https://www.facebook.com/RFphotography.ro", Icon: FacebookLogo, label: "Facebook", value: "RFphotography.ro" },
              ].map(({ href, Icon, label, value }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:border-[var(--gold)]" style={{ border: "1px solid var(--border)" }}>
                    <Icon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "var(--muted)" }}>{label}</p>
                    <p className="text-sm transition-colors duration-200 group-hover:text-[color:var(--gold)]" style={{ color: "var(--text)" }}>{value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid var(--border)" }}>
                  <MapPin size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "var(--muted)" }}>Locație</p>
                  <p className="text-sm" style={{ color: "var(--text)" }}>Constanța, România</p>
                </div>
              </div>
            </div>

            <div className="p-6" style={{ backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>Program</p>
              <div className="flex flex-col gap-1">
                <p className="text-sm" style={{ color: "var(--muted)" }}>Luni – Vineri: <span style={{ color: "var(--text)" }}>09:00 – 18:00</span></p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>Weekend: <span style={{ color: "var(--text)" }}>prin programare</span></p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ border: "1px solid var(--gold)" }}>
                  <PaperPlaneRight size={28} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  Mesaj trimis!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>Vă vom contacta în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <span className="section-label">Trimite-ne un mesaj</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ color: "var(--muted)" }}>Nume *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "var(--muted)" }}>Telefon *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+40 000 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={{ color: "var(--muted)" }}>Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ color: "var(--muted)" }}>Tip eveniment</label>
                    <select
                      className="form-input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Selectează...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "var(--muted)" }}>Data evenimentului</label>
                    <input
                      type="text"
                      className="form-input"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      placeholder="ZZ/LL/AAAA"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={{ color: "var(--muted)" }}>Mesaj</label>
                  <textarea
                    rows={5}
                    className="form-input"
                    style={{ resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Spune-ne mai multe despre evenimentul tău..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold inline-flex items-center justify-center gap-2 py-4 text-xs tracking-[0.25em] uppercase mt-1"
                  style={{ minHeight: "48px" }}
                >
                  Trimite mesaj <PaperPlaneRight size={15} />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </>
  );
}
