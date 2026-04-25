"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/animations";

const packages = [
  {
    category: "Nuntă",
    items: [
      {
        name: "Esențial",
        desc: "Perfect pentru ceremonii intime",
        features: [
          "1 fotograf profesional",
          "8 ore acoperire",
          "400+ fotografii editate",
          "Galerie online privată",
          "Post-procesare completă",
        ],
      },
      {
        name: "Premium",
        desc: "Cel mai popular pachet",
        featured: true,
        features: [
          "2 fotografi profesioniști",
          "1 cameraman",
          "12 ore acoperire",
          "700+ fotografii editate",
          "Film nuntă cinematic",
          "Galerie online privată",
          "Post-procesare completă",
          "Highlight video (3-5 min)",
        ],
      },
      {
        name: "Complet",
        desc: "Experiență totală",
        features: [
          "2 fotografi profesioniști",
          "Echipă video completă",
          "Macarale & steadycam",
          "Zi completă acoperire",
          "1000+ fotografii editate",
          "Film complet nuntă",
          "Highlight video cinematic",
          "Album foto premium",
          "Galerie online privată",
        ],
      },
    ],
  },
  {
    category: "Botez",
    items: [
      {
        name: "Botez Standard",
        desc: "Momentele esențiale",
        features: [
          "1 fotograf profesional",
          "5 ore acoperire",
          "250+ fotografii editate",
          "Galerie online privată",
          "Post-procesare completă",
        ],
      },
      {
        name: "Botez Premium",
        desc: "Fotografie + filmare",
        featured: true,
        features: [
          "1 fotograf profesional",
          "1 cameraman",
          "6 ore acoperire",
          "350+ fotografii editate",
          "Film botez complet",
          "Highlight video",
          "Galerie online privată",
        ],
      },
    ],
  },
];


export default function PachetePage() {
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
            Ofertele noastre
          </p>
          <h1
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--text)" }}
          >
            Pachete
          </h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            Prețurile sunt orientative. Contactați-ne pentru o ofertă personalizată.
          </p>
        </motion.div>
      </section>

      {/* Package sections */}
      {packages.map((section, si) => (
        <section key={si} className="py-20 px-6" style={{ backgroundColor: si % 2 === 1 ? "var(--bg2)" : "var(--bg)" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mb-12"
            >
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--text)" }}
              >
                <span style={{ color: "var(--gold)" }}>—</span> {section.category}
              </h2>
            </motion.div>

            <div className={`grid grid-cols-1 ${section.items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-3xl"} gap-6`}>
              {section.items.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="relative flex flex-col p-8"
                  style={{
                    backgroundColor: pkg.featured ? "var(--gold)" : "var(--bg3)",
                    border: `1px solid ${pkg.featured ? "var(--gold)" : "var(--border)"}`,
                  }}
                >
                  {pkg.featured && (
                    <span
                      className="absolute top-0 right-6 -translate-y-1/2 text-[10px] tracking-widest uppercase px-3 py-1"
                      style={{ backgroundColor: "var(--bg)", color: "var(--gold)", border: "1px solid var(--gold)" }}
                    >
                      Popular
                    </span>
                  )}

                  <h3
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: pkg.featured ? "var(--bg)" : "var(--text)",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-xs tracking-wide mb-6"
                    style={{ color: pkg.featured ? "rgba(8,8,8,0.6)" : "var(--muted)" }}
                  >
                    {pkg.desc}
                  </p>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {pkg.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm">
                        <Check
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: pkg.featured ? "var(--bg)" : "var(--gold)" }}
                        />
                        <span style={{ color: pkg.featured ? "var(--bg)" : "var(--muted)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase transition-all duration-300"
                    style={{
                      backgroundColor: pkg.featured ? "var(--bg)" : "transparent",
                      color: pkg.featured ? "var(--gold)" : "var(--gold)",
                      border: `1px solid ${pkg.featured ? "var(--bg)" : "var(--gold)"}`,
                      minHeight: "44px",
                    }}
                  >
                    Solicită ofertă <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note */}
      <section
        className="py-16 px-6 text-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-sm mb-6 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Toate pachetele includ post-procesare profesională (corecție culori & luminozitate).
            Contactați-ne pentru sesiuni studio, Trash the Dress, Majorat sau pachete personalizate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase"
            style={{ color: "var(--gold)" }}
          >
            Contactează-ne pentru detalii <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
