"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS, ProjectItem } from "@/lib/projects";
import { WORK_ARCHIVE } from "@/lib/content";
import { Lock, ArrowUpRight, Plus } from "lucide-react";

// ─── High-Fidelity Project Showcase Card Previews ───────────────
function CardVisualPreview({ type, color, title }: { type?: string; color: string; title?: string }) {
  const showcaseMap: Record<string, { image: string; alt: string }> = {
    amazon: {
      image: "/projects/amazon_card.png",
      alt: "Amazon Marketplace & E-Commerce App",
    },
    nextadmin: {
      image: "/projects/nextadmin_card.png",
      alt: "NextAdmin — Enterprise SaaS Dashboard",
    },
    midday: {
      image: "/projects/midday_card.png",
      alt: "Midday — Financial OS & Invoicing",
    },
    dub: {
      image: "/projects/dub_card.png",
      alt: "Dub.co — Marketing Analytics Platform",
    },
    cal: {
      image: "/projects/cal_card.png",
      alt: "Cal.com — Scheduling Infrastructure",
    },
  };

  if (type && showcaseMap[type]) {
    const item = showcaseMap[type];
    return (
      <div className="relative w-full h-full overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-contain sm:object-cover object-center select-none"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback visual for Archive cards
  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center select-none"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${color} 18%, var(--card-bg)), color-mix(in srgb, ${color} 6%, var(--card-bg)))`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${color}35, transparent 75%)`,
        }}
      />
      <div
        className="relative z-10 px-3 py-1.5 rounded-lg flex items-center gap-2 border border-black/5 dark:border-white/10 shadow-sm"
        style={{
          background: "color-mix(in srgb, var(--card-bg) 85%, transparent)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0 shadow-sm"
          style={{ background: color }}
        />
        <span className="text-[11.5px] font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 truncate max-w-[140px]">
          {title || "Archive Project"}
        </span>
      </div>
    </div>
  );
}

// ─── 3D Tilt Card Wrapper ────────────────────────────────────────
function TiltCard({ children, isLg }: { children: React.ReactNode; isLg: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div
      ref={ref}
      style={{ perspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}

function WorkTile({
  title,
  blurb,
  color,
  slug,
  previewType,
  size = "lg",
  locked = false,
  isEmpty = false,
}: {
  title: string;
  blurb: string;
  tags?: string[];
  hue?: number;
  color: string;
  slug: string;
  previewType?: "amazon" | "nextadmin" | "midday" | "dub" | "cal";
  size?: "lg" | "sm";
  locked?: boolean;
  isEmpty?: boolean;
}) {
  const isLg = size === "lg";

  // Card 6: Empty slot — styled visibly as "Coming Soon"
  if (isEmpty) {
    return (
      <div className="w-full flex flex-col gap-4 select-none" aria-hidden="true">
        <div
          className={`relative overflow-hidden ${
            isLg ? "rounded-2xl" : "rounded-xl"
          } flex flex-col items-center justify-center gap-3 aspect-[16/10] ${
            isLg ? "sm:min-h-[350px] md:min-h-[380px]" : "sm:min-h-[160px] md:min-h-[195px]"
          }`}
          style={{
            background: "linear-gradient(135deg, color-mix(in srgb, #3b82f6 8%, var(--card-bg)), color-mix(in srgb, #06b6d4 4%, var(--card-bg)))",
            border: "2px dashed",
            borderColor: "color-mix(in srgb, #3b82f6 30%, var(--border))",
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "color-mix(in srgb, #3b82f6 12%, var(--card-bg))", border: "1px dashed color-mix(in srgb, #3b82f6 40%, transparent)" }}
          >
            <Plus size={18} strokeWidth={2} style={{ color: "#3b82f6" }} />
          </div>
          <div className="text-center px-6">
            <p className="text-[13px] font-bold tracking-widest uppercase" style={{ color: "#3b82f6", opacity: 0.7 }}>
              Coming Soon
            </p>
            <p className="text-[12px] mt-1" style={{ color: "var(--fg-muted)", opacity: 0.6 }}>
              Next project in progress
            </p>
          </div>
        </div>
      </div>
    );
  }

  const cardContent = (
    <article className="group flex flex-col gap-3.5 sm:gap-4 cursor-pointer">
      {/* Media card with tilt */}
      <TiltCard isLg={isLg}>
        <div
          className={`relative overflow-hidden ${
            isLg ? "rounded-2xl" : "rounded-xl"
          } border border-neutral-200/90 dark:border-neutral-800 transition-shadow duration-300 group-hover:shadow-xl aspect-[16/10] ${
            isLg ? "sm:min-h-[350px] md:min-h-[380px]" : "sm:min-h-[160px] md:min-h-[195px]"
          }`}
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
        >
          <CardVisualPreview type={previewType} color={color} title={title} />

          {/* Hover Gradient Glow Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.15), transparent 70%)",
              mixBlendMode: "soft-light",
            }}
          />

          {locked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                }}
              >
                <Lock size={13} strokeWidth={2} />
                <span>Protected</span>
              </div>
            </div>
          )}
        </div>
      </TiltCard>

      {/* Body */}
      <div className="flex flex-col gap-1.5">
        <h3
          className={`font-bold tracking-tight truncate transition-colors duration-150 group-hover:text-blue-500 flex items-center justify-between ${
            isLg ? "text-[20px] sm:text-[22px]" : "text-[16px]"
          }`}
          style={{ color: "var(--fg)" }}
        >
          <span>{title}</span>
          <ArrowUpRight
            size={isLg ? 19 : 16}
            className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500 shrink-0"
          />
        </h3>
        <p
          className={`leading-snug line-clamp-2 ${isLg ? "text-[14px] sm:text-[14.5px]" : "text-[13px]"}`}
          style={{ color: "var(--fg-muted)" }}
        >
          {blurb}
        </p>
      </div>
    </article>
  );

  return <Link href={`/work/${slug}`}>{cardContent}</Link>;
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-[50px] pb-12 sm:pb-32 scroll-mt-[45px] max-w-[1450px]"
    >
      {/* Header */}
      <div className="mb-6 sm:mb-14">
        <h1
          className="text-[2rem] sm:text-[3.2rem] md:text-[3.6rem] font-bold tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Selected work
        </h1>
      </div>

      {/* Featured — 6 cards in 2 columns (3 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-14">
        {PROJECTS.map((item) => (
          <WorkTile key={item.id} {...item} size="lg" />
        ))}
      </div>

      {/* Archive */}
      <div className="mt-12 sm:mt-24">
        <h3
          className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-4 sm:mb-8"
          style={{ color: "var(--fg-muted)" }}
        >
          Archive
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3.5 sm:gap-x-6 gap-y-7 sm:gap-y-12">
          {WORK_ARCHIVE.map((item) => (
            <WorkTile key={item.slug} {...item} size="sm" />
          ))}
        </div>
      </div>
    </section>
  );
}
