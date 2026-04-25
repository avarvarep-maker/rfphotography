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
      {/* ─── HERO ─── */}
      <section className="grain relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic radial bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #221b0a 0%, #080808 65%)",
          }}
        />

        {/* Diagonal accent lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,168,76,0.025) 80px, rgba(201,168,76,0.025) 81px)",
          }}
        />

        {/* Top gold rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-8"
          >
            Constanța, România
          </motion.p>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "var(--text)",
                fontSize: "clamp(4rem, 14vw, 11rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              RF
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: "var(--gold)",
                fontSize: "clamp(2rem, 7vw, 5.5rem)",
                lineHeight: 1,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Photography
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 mb-14 text-xs tracking-[0.5em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Fotografie & Filmare Profesională
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portofoliu"
              className="btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold"
              style={{ minHeight: "48px" }}
            >
              Portofoliu <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-[0.25em] uppercase"
              style={{ minHeight: "48px" }}
            >
              Contactează-ne
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase" style={{ color: "var(--muted)" }}>
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 origin-top"
            style={{ backgroundColor: "var(--gold)" }}
          />
        </motion.div>
      </section>

      {/* ─── NUMBERS STRIP ─── */}
      <div
        className="py-10 px-6"
        style={{ backgroundColor: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x" style={{ borderColor: "var(--border)" }}>
          {[
            { num: "500+", label: "Nunți fotografiate" },
            { num: "10+", label: "Ani de experiență" },
            { num: "100%", label: "Clienți mulțumiți" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-6 py-2"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-3xl md:text-4xl mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontWeight: 600 }}
              >
                {stat.num}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--muted)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="py-28 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <span className="section-label">Ce oferim</span>
            <h2
              className="text-4xl md:text-6xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
            >
              Servicii <span style={{ color: "var(--gold)" }}>Complete</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="service-card p-8"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <service.icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)", fontWeight: 500 }}
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

      {/* ─── ABOUT SPLIT ─── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: "var(--bg2)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo frame — styled intentionally, not as a missing image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative order-2 md:order-1"
          >
            <div
              className="aspect-[4/5] w-full relative overflow-hidden"
              style={{ backgroundColor: "var(--bg3)" }}
            >
              {/* Inner frame lines */}
              <div className="absolute inset-6 pointer-events-none" style={{ border: "1px solid rgba(201,168,76,0.2)" }} />

              {/* Cinematic bars */}
              <div className="absolute top-0 left-0 right-0 h-8" style={{ backgroundColor: "rgba(8,8,8,0.7)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-8" style={{ backgroundColor: "rgba(8,8,8,0.7)" }} />

              {/* Center branding */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-12 h-px"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.5 }}
                />
                <p
                  className="text-[10px] tracking-[0.6em] uppercase"
                  style={{ color: "var(--muted)", opacity: 0.6 }}
                >
                  RF Photography
                </p>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mt-1"
                  style={{ color: "var(--muted)", opacity: 0.4 }}
                >
                  Foto echipă · Constanța
                </p>
                <div
                  className="w-12 h-px mt-1"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.5 }}
                />
              </div>

              {/* Corner accents */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-4 h-4`}
                  style={{
                    borderTop: i < 2 ? "1px solid var(--gold)" : "none",
                    borderBottom: i >= 2 ? "1px solid var(--gold)" : "none",
                    borderLeft: i % 2 === 0 ? "1px solid var(--gold)" : "none",
                    borderRight: i % 2 === 1 ? "1px solid var(--gold)" : "none",
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>

            {/* Offset gold square */}
            <div
              className="absolute -bottom-5 -right-5 w-20 h-20 -z-0"
              style={{ border: "1px solid var(--gold)", opacity: 0.2 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-1 md:order-2"
          >
            <span className="section-label">Echipa noastră</span>
            <div className="gold-divider" />
            <h2
              className="text-4xl md:text-5xl mb-8 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
            >
              Ramona & Florin
              <br />
              <span style={{ color: "var(--gold)" }}>Cojocaru</span>
            </h2>
            <p className="text-sm leading-7 mb-4" style={{ color: "var(--muted)" }}>
              Cu ani de experiență în fotografie și filmare profesională, echipa RF Photography surprinde
              emoția autentică a fiecărui moment. Fiecare eveniment este unic — abordăm fiecare proiect
              cu pasiune și atenție la detalii.
            </p>
            <p className="text-sm leading-7 mb-10" style={{ color: "var(--muted)" }}>
              Echipament profesional Canon & Sony, post-procesare completă inclusă, livrare în timp optim.
            </p>
            <Link href="/despre" className="text-link">
              Află mai mult <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="grain relative py-28 px-6 text-center overflow-hidden"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, #1f1608 0%, #080808 70%)" }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="relative z-10"
        >
          <span className="section-label">Rezervă acum</span>
          <h2
            className="text-4xl md:text-6xl mb-6 mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "var(--text)",
              maxWidth: "700px",
              lineHeight: 1.1,
            }}
          >
            Pregătit pentru ceva{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>extraordinar?</span>
          </h2>
          <p className="text-sm mb-12 max-w-md mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Contactează-ne pentru disponibilitate și pachete personalizate.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-12 py-5 text-xs tracking-[0.25em] uppercase font-semibold">
            Contactează-ne <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
