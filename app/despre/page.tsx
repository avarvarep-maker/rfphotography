"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, FilmSlate, Aperture, ArrowRight } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const equipment = [
  {
    icon: Camera,
    title: "Foto",
    items: ["Canon 6D", "Canon 5D MK II", "Canon 7D", "Blitzuri profesionale", "Obiective premium"],
  },
  {
    icon: FilmSlate,
    title: "Video",
    items: ["Sony AX2000", "Sony FX1", "Macarale video", "Steadycam", "Obiective wide", "Stație editare profesională"],
  },
  {
    icon: Aperture,
    title: "Post-procesare",
    items: ["Corecție culori profesională", "Corecție luminozitate", "Retușare avansată", "Export calitate maximă"],
  },
];

export default function DesprePage() {
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
            Cine suntem
          </p>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
          >
            Despre noi
          </h1>
        </motion.div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "var(--gold)" }}>
              Fondatorii
            </p>
            <h2
              className="text-4xl md:text-5xl mb-8 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
            >
              Ramona & Florin
              <br />
              <span style={{ color: "var(--gold)" }}>Cojocaru</span>
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                RF Photography s-a născut din pasiunea profundă pentru a surprinde emoția autentică a momentelor
                cu adevărat importante din viața oamenilor. Ramona și Florin Cojocaru aduc împreună ani de
                experiență în fotografie și filmare profesională.
              </p>
              <p>
                Fiecare eveniment pe care îl acoperim este unic. Abordăm fiecare proiect cu un ochi artistic
                rafinat și o atenție la detalii care face diferența dintre o fotografie bună și una extraordinară.
              </p>
              <p>
                Lucrăm în Constanța și în toată zona Dobrogei, dar suntem disponibili și pentru evenimente
                la nivel național.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-2 gap-4"
          >
            {/* Ramona card */}
            <div
              className="aspect-[3/4] flex flex-col justify-end p-6"
              style={{ backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                Fotograf
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Ramona
              </p>
            </div>

            {/* Florin card — offset */}
            <div
              className="aspect-[3/4] flex flex-col justify-end p-6 mt-8"
              style={{ backgroundColor: "var(--bg3)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                Fotograf
              </p>
              <p
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Florin
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg2)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Cu ce lucrăm
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
            >
              Echipament Profesional
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((eq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="p-8"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg3)" }}
              >
                <eq.icon size={28} className="mb-4" style={{ color: "var(--gold)" }} />
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {eq.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {eq.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                      <span className="w-1 h-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Filozofia noastră
            </p>
            <blockquote
              className="text-3xl md:text-4xl mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
            >
              „Fotografiem cu inima, nu doar cu aparatul."
            </blockquote>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Lucrăm împreună? <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
