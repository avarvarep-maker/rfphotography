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

const categoryGradients: Record<string, string> = {
  nunta:   "linear-gradient(150deg, #2a1e0e 0%, #150f07 100%)",
  botez:   "linear-gradient(150deg, #0d1a22 0%, #070e14 100%)",
  logodna: "linear-gradient(150deg, #221428 0%, #120a16 100%)",
  familie: "linear-gradient(150deg, #0e2018 0%, #07110d 100%)",
  majorat: "linear-gradient(150deg, #221c0a 0%, #120f05 100%)",
  video:   "linear-gradient(150deg, #141430 0%, #0a0a1a 100%)",
};

const portfolioItems = [
  { id: 1, category: "nunta", title: "Nuntă", year: "2024" },
  { id: 2, category: "nunta", title: "Nuntă", year: "2023" },
  { id: 3, category: "botez", title: "Botez", year: "2024" },
  { id: 4, category: "logodna", title: "Logodnă", year: "2024" },
  { id: 5, category: "familie", title: "Familie", year: "2023" },
  { id: 6, category: "nunta", title: "Nuntă", year: "2023" },
  { id: 7, category: "majorat", title: "Majorat", year: "2024" },
  { id: 8, category: "video", title: "Filmare Nuntă", year: "2024" },
  { id: 9, category: "botez", title: "Botez", year: "2023" },
  { id: 10, category: "logodna", title: "Logodnă", year: "2023" },
  { id: 11, category: "familie", title: "Maternitate", year: "2024" },
  { id: 12, category: "video", title: "Filmare Botez", year: "2024" },
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
        className="pt-40 pb-20 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, #1c1508 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Lucrările noastre</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
          >
            Portofoliu
          </h1>
        </motion.div>
      </section>

      {/* Filter tabs — sticky */}
      <div
        className="sticky top-20 z-30 py-5 px-6"
        style={{
          backgroundColor: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-200"
              style={{
                backgroundColor: active === cat.id ? "var(--gold)" : "transparent",
                color: active === cat.id ? "var(--bg)" : "var(--muted)",
                border: "1px solid",
                borderColor: active === cat.id ? "var(--gold)" : "var(--border)",
                fontWeight: active === cat.id ? 600 : 400,
                minHeight: "40px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="portfolio-card group relative aspect-[3/4] overflow-hidden cursor-pointer"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {/* Deterministic category gradient */}
                  <div
                    className="inner absolute inset-0 flex items-center justify-center"
                    style={{ background: categoryGradients[item.category] ?? "var(--bg3)" }}
                  >
                    {/* Cinematic frame lines */}
                    <div className="absolute inset-4 pointer-events-none" style={{ border: "1px solid rgba(201,168,76,0.08)" }} />
                    <div className="text-center">
                      <p
                        className="text-3xl"
                        style={{ fontFamily: "var(--font-display)", color: "var(--gold)", opacity: 0.12, fontWeight: 600 }}
                      >
                        RF
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="overlay absolute inset-0 flex flex-col justify-end p-5"
                    style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
                  >
                    <span className="text-[9px] tracking-[0.4em] uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {item.year}
                    </span>
                    <div className="flex items-end justify-between">
                      <p
                        className="text-base leading-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontWeight: 400 }}
                      >
                        {item.title}
                      </p>
                      <ArrowUpRight size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-sm" style={{ color: "var(--muted)" }}>Nu există lucrări în această categorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
