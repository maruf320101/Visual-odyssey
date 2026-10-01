"use client";

import { motion } from "framer-motion";
import { AI_SECTION } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AISection() {
  return (
    <section id="ai" className="w-full mx-auto px-4 sm:px-6 py-20 sm:py-28" style={{ maxWidth: "var(--content-width, 1450px)" }}>
      <motion.div
        className="rounded-3xl p-10 sm:p-16 relative overflow-hidden"
        style={{ background: "var(--nav-bg)", border: "1px solid var(--border)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "var(--card-shadow)" }}
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

        <p className="text-[12px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "var(--fg-muted)" }}>
          /{AI_SECTION.eyebrow.toLowerCase()}
        </p>
        <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-semibold tracking-tight leading-tight mb-14 sm:mb-16 max-w-[480px]"
          style={{ color: "var(--fg)" }}>{AI_SECTION.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {AI_SECTION.points.map((point, i) => (
            <motion.div key={point.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[15px] font-light tabular-nums" style={{ color: "var(--fg-muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[18px] sm:text-[19px] font-semibold tracking-tight" style={{ color: "var(--fg)" }}>
                  {point.title}
                </h3>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-relaxed ml-9" style={{ color: "var(--fg-muted)" }}>
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
