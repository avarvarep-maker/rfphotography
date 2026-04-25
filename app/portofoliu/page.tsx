"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const categories = [
  { id: "toate", label: "Toate" },
  { id: "nunta", label: "Nuntă" },
  { id: "botez", label: "Botez" },
  { id: "logodna", label: "Logodnă" },
  { id: "familie", label: "Familie" },
  { id: "majorat", label: "Majorat" },
  { id: "video", label: "Video" },
];

const portfolioItems = [
  { id: 1, category: "nunta", title: "Nuntă — 2024", year: "2024" },
  { id: 2, category: "nunta", title: "Nuntă — 2023", year: "2023" },
  { id: 3, category: "botez", title: "Botez — 2024", year: "2024" },
  { id: 4, category: "logodna", title: "Logodnă — 2024", year: "2024" },
  { id: 5, category: "familie", title: "Familie — 2023", year: "2023" },
  { id: 6, category: "nunta", title: "Nuntă — 2023", year: "2023" },
  { id: 7, category: "majorat", title: "Majorat — 2024", year: "2024" },
  { id: 8, category: "video", title: "Filmare Nuntă — 2024", year: "2024" },
  { id: 9, category: "botez", title: "Botez — 2023", year: "2023" },
  { id: 10, category: "logodna", title: "Logodnă — 2023", year: "2023" },
  { id: 11, category: "familie", title: "Maternitate — 2024", year: "2024" },
  { id: 12, category: "video", title: "Filmare Botez — 2024", year: "2024" },
];


export default function PortofoliuPage() {
  const [active, setActive] = useState("toate");

  const filtered =
    active === "toate"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

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
            Lucrările noastre
          </p>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
          >
            Portofoliu
          </h1>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 px-6 sticky top-20 z-30" style={{ backgroundColor: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-200"
              style={{
                backgroundColor: active === cat.id ? "var(--gold)" : "transparent",
                color: active === cat.id ? "var(--bg)" : "var(--muted)",
                border: "1px solid",
                borderColor: active === cat.id ? "var(--gold)" : "var(--border)",
                fontWeight: active === cat.id ? 600 : 400,
                minHeight: "44px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                  style={{ backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}
                >
                  {/* Placeholder for photo */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, #${Math.floor(Math.random() * 0x333333 + 0x111111).toString(16).padStart(6, "0")} 0%, var(--bg2) 100%)`,
                    }}
                  >
                    <span
                      className="text-4xl opacity-10"
                      style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                    >
                      RF
                    </span>
                  </div>

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}
                  >
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {item.year}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                        {item.title}
                      </p>
                      <ArrowUpRight size={16} style={{ color: "var(--gold)" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "var(--muted)" }}>Nu există lucrări în această categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 px-6 text-center">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Imaginile din portofoliu vor fi adăugate de client. Galeria afișată este un placeholder structural.
        </p>
      </section>
    </>
  );
}
