"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Camera,
  FilmSlate,
  Heart,
  Baby,
  Users,
  Star,
  ArrowRight,
} from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const services = [
  { icon: Heart, label: "Nuntă", desc: "Fotografie & filmare completă pentru ziua ta specială" },
  { icon: Baby, label: "Botez", desc: "Cele mai tandre momente surprinse cu grijă" },
  { icon: Camera, label: "Logodnă", desc: "Sesiuni de cuplu pline de emoție și autenticitate" },
  { icon: Users, label: "Familie & Maternitate", desc: "Portrete de familie și sesiuni maternitate" },
  { icon: FilmSlate, label: "Filmare Video", desc: "Echipament Sony profesional, steadycam, macarale video" },
  { icon: Star, label: "Majorat & Trash the Dress", desc: "Sesiuni creative de neratat" },
];


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center top, #1a1408 0%, #080808 60%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.6em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Constanța, România
            </p>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
            >
              RF
              <br />
              <span style={{ color: "var(--gold)" }}>Photography</span>
            </h1>
            <p
              className="text-sm md:text-base tracking-[0.4em] uppercase mb-12"
              style={{ color: "var(--muted)" }}
            >
              Fotografie & Filmare Profesională
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portofoliu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--bg)",
                fontWeight: 600,
                minHeight: "44px",
              }}
            >
              Vezi Portofoliu <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                minHeight: "44px",
              }}
            >
              Contactează-ne
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--muted)" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8"
            style={{ backgroundColor: "var(--gold)" }}
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg2)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Ce oferim
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
            >
              Servicii Complete
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="p-8 transition-all duration-300"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg3)" }}
              >
                <service.icon
                  size={28}
                  className="mb-4"
                  style={{ color: "var(--gold)" }}
                />
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {service.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Echipa noastră
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
            >
              Ramona & Florin
              <br />
              <span style={{ color: "var(--gold)" }}>Cojocaru</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Cu ani de experiență în fotografie și filmare profesională, echipa RF Photography surprinde
              emoția autentică a fiecărui moment. Fiecare eveniment este unic — abordăm fiecare proiect
              cu pasiune și atenție la detalii.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Echipament profesional Canon & Sony, post-procesare completă inclusă, livrare în timp optim.
            </p>
            <Link
              href="/despre"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--gold)" }}
            >
              Află mai mult <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="relative"
          >
            <div
              className="aspect-[3/4] w-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="text-center">
                <span
                  className="text-6xl block mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--gold)", opacity: 0.3 }}
                >
                  RF
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  Fotografie de la suflet
                </span>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24"
              style={{ border: "1px solid var(--gold)", opacity: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #1a1408 0%, #0d0d0d 50%, #1a1408 100%)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Rezervă acum
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
          >
            Pregătit pentru ceva extraordinar?
          </h2>
          <p className="text-sm mb-10 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Contactează-ne pentru disponibilitate și pachete personalizate. Locurile sunt limitate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--bg)",
              fontWeight: 600,
              minHeight: "44px",
            }}
          >
            Contactează-ne <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
