"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  } as const;
}



/* ─── Laptop Mockup — 3D tilt + colorful screen ─────────────── */
function LaptopMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 120, damping: 18 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div
      className="relative w-full max-w-[330px] sm:max-w-[540px] mx-auto cursor-pointer select-none"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>

        {/* Screen frame */}
        <div
          className="relative rounded-t-[14px] overflow-hidden"
          style={{
            background: "#0d1117",
            border: "2px solid #30363d",
            borderBottom: "none",
            aspectRatio: "16/10",
            boxShadow: "0 0 30px rgba(59,130,246,0.10), 0 20px 40px rgba(0,0,0,0.22)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[6px] rounded-b-full z-10" style={{ background: "#1c2128" }} />

          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            <div className="ml-3 flex-1 rounded-md px-3 py-1 text-[10px] font-medium" style={{ background: "#0d1117", color: "#8b949e", border: "1px solid #30363d" }}>
              anisurmaruf.dev
            </div>
          </div>

          {/* ── Colorful screen content ── */}
          <div className="p-4" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>

            {/* Mini nav */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg" style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }} />
                <div className="h-2 w-16 rounded" style={{ background: "rgba(255,255,255,0.15)" }} />
              </div>
              <div className="flex gap-1.5">
                <div className="h-5 w-7 rounded-md" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="h-5 w-7 rounded-md" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="h-5 w-9 rounded-full" style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }} />
              </div>
            </div>

            {/* Headline skeleton */}
            <div className="mb-4">
              <div className="h-3 w-3/4 rounded mb-2" style={{ background: "rgba(255,255,255,0.85)" }} />
              <div className="h-2 w-1/2 rounded mb-3" style={{ background: "rgba(255,255,255,0.35)" }} />
            </div>

            {/* Colorful project cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { from: "#f97316", to: "#ef4444", label: "Amazon" },
                { from: "#8b5cf6", to: "#06b6d4", label: "Midday" },
                { from: "#3b82f6", to: "#10b981", label: "Dub.co" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-3 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${card.from}22, ${card.to}22)`, border: `1px solid ${card.from}44` }}
                >
                  <div className="w-5 h-5 rounded-lg mb-2" style={{ background: `linear-gradient(135deg,${card.from},${card.to})` }} />
                  <div className="h-1.5 w-full rounded mb-1" style={{ background: "rgba(255,255,255,0.15)" }} />
                  <div className="h-1.5 w-2/3 rounded" style={{ background: "rgba(255,255,255,0.10)" }} />
                  {/* Card glow */}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${card.from}55, transparent)`, transform: "translate(30%,-30%)" }} />
                </div>
              ))}
            </div>

            {/* Bottom chart bar */}
            <div className="mt-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-end gap-1.5 h-8">
                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(180deg, #3b82f6, #06b6d4)`, opacity: 0.7 + i * 0.04 }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard base */}
        <div
          style={{
            height: "20px",
            background: "linear-gradient(180deg, #2d333b 0%, #22272e 100%)",
            border: "2px solid #30363d",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            position: "relative",
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[5px] rounded-t-sm" style={{ background: "#30363d" }} />
        </div>

        {/* Stand */}
        <div className="flex justify-center">
          <div style={{ width: "70px", height: "7px", background: "#22272e", borderRadius: "0 0 6px 6px" }} />
        </div>

      </motion.div>

    
    </div>
  );
}

/* ─── Scroll indicator ───────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.button
      type="button"
      onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
      aria-label="Scroll to selected work"
      className="hidden sm:flex group cursor-pointer flex-col items-center gap-1.5 p-3 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 mb-6 sm:mb-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.6 }}
    >
      <motion.div className="flex flex-col items-center gap-[4px]" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
        <span className="block h-[3px] w-[26px] rounded-full" style={{ background: "rgba(148,163,184,0.5)" }} />
        <span className="block h-[3px] w-[18px] rounded-full" style={{ background: "rgba(148,163,184,0.5)" }} />
        <span className="block h-[3px] w-[10px] rounded-full" style={{ background: "rgba(148,163,184,0.5)" }} />
      </motion.div>
    </motion.button>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="min-h-0 sm:min-h-screen sm:min-h-[100svh] flex flex-col justify-start sm:justify-between items-center px-4 sm:px-6 lg:px-8 pt-[68px] sm:pt-[150px] pb-4 sm:pb-16 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Main grid ── */}
      <div className="w-full mx-auto max-w-[1260px] mt-2 mb-2 sm:my-auto py-1 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 max-w-[540px]">

            {/* H1 */}
            <motion.h1
              id="hero-heading"
              className="text-[1.85rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4rem] font-bold leading-[1.12] tracking-[-0.03em] mb-4 sm:mb-6"
              style={{ color: "var(--fg)" }}
              {...fadeUp(0.2)}
            >
              UI/UX Designer &{" "}
              <span className="gradient-text">Frontend</span>{" "}
              Developer
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[14.5px] sm:text-[18px] md:text-[19px] font-normal leading-relaxed mb-6 sm:mb-10 max-w-[500px] mx-auto lg:mx-0"
              style={{ color: "var(--fg-muted)" }}
              {...fadeUp(0.32)}
            >
              I&apos;m{" "}
              <strong style={{ color: "var(--fg)" }}>Anisur Rahaman Maruf.</strong>{" "}
              I design high-fidelity interfaces in Figma, build them in
              Next.js, and apply AI to accelerate every step.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 flex-wrap mb-6 sm:mb-12" {...fadeUp(0.44)}>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-[14px] sm:text-[16px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  boxShadow: "0 4px 24px rgba(59,130,246,0.45)",
                }}
              >
                View My Work
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </Link>
              <a
                href="mailto:anisurrahaman320101@gmail.com"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-[14px] sm:text-[16px] font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                }}
              >
                <Mail size={16} strokeWidth={2} />
                Contact Me
              </a>
            </motion.div>

          </div>

          {/* RIGHT — Laptop */}
          <motion.div
            className="flex items-center justify-center order-2 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <LaptopMockup />
          </motion.div>

        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
