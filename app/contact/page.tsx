"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, FacebookLogo, PaperPlaneRight } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const services = [
  "Nuntă", "Botez", "Logodnă", "Familie / Maternitate",
  "Majorat", "Trash the Dress", "Studio", "Video eveniment", "Alt eveniment",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration point — add serviceId/templateId/publicKey here
    setSent(true);
  };

  const inputStyle = {
    backgroundColor: "var(--bg3)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    minHeight: "44px",
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-16 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, #1a1408 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Să lucrăm împreună
          </p>
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
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "var(--gold)" }}>
              Date de contact
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a
                href="tel:+40000000000"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Phone size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                    Telefon
                  </p>
                  <p className="text-sm transition-colors duration-200 group-hover:text-[var(--gold)]" style={{ color: "var(--text)" }}>
                    +40 000 000 000
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@rfphotography.ro"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <EnvelopeSimple size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                    Email
                  </p>
                  <p className="text-sm transition-colors duration-200 group-hover:text-[var(--gold)]" style={{ color: "var(--text)" }}>
                    contact@rfphotography.ro
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <MapPin size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                    Locație
                  </p>
                  <p className="text-sm" style={{ color: "var(--text)" }}>
                    Constanța, România
                  </p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/RFphotography.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <FacebookLogo size={18} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
                    Facebook
                  </p>
                  <p className="text-sm transition-colors duration-200 group-hover:text-[var(--gold)]" style={{ color: "var(--text)" }}>
                    RFphotography.ro
                  </p>
                </div>
              </a>
            </div>

            <div
              className="p-6"
              style={{ backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                Program
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Luni – Vineri: 09:00 – 18:00
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Weekend: prin programare
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ border: "1px solid var(--gold)" }}
                >
                  <PaperPlaneRight size={28} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  Mesaj trimis!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Vă vom contacta în cel mai scurt timp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                  Trimite-ne un mesaj
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                      Nume *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      placeholder="+40 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                      Tip eveniment
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Selectează...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                      Data evenimentului
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--muted)" }}>
                    Mesaj
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Spune-ne mai multe despre evenimentul tău..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-4 text-sm tracking-widest uppercase transition-all duration-300 mt-2"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--bg)",
                    fontWeight: 600,
                    minHeight: "44px",
                  }}
                >
                  Trimite mesaj <PaperPlaneRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
