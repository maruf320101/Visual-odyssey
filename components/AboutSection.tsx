"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT } from "@/lib/content";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Lightbox ───────────────────────────────────────────────────
function Lightbox({
  images,
  title,
  startIndex,
  onClose,
}: {
  images: string[];
  title: string;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center transition-colors duration-300"
      style={{
        background: isDark ? "rgba(8, 12, 20, 0.90)" : "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close button — rounded-xl box, larger */}
      <button
        onClick={onClose}
        className={`absolute top-5 right-5 sm:top-7 sm:right-7 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
          isDark
            ? "text-white bg-white/10 hover:bg-white/20 border border-white/20"
            : "text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300/80 shadow-md"
        }`}
        aria-label="Close"
      >
        <X size={22} strokeWidth={2.2} />
      </button>

      {/* Prev button — clean large chevron, NO circle background */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 transition-all duration-200 hover:scale-115 active:scale-90 cursor-pointer p-2 flex items-center justify-center ${
          isDark
            ? "text-white/70 hover:text-white"
            : "text-neutral-700 hover:text-black"
        }`}
        aria-label="Previous"
      >
        <ChevronLeft size={44} strokeWidth={1.8} />
      </button>

      {/* Next button — clean large chevron, NO circle background */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 transition-all duration-200 hover:scale-115 active:scale-90 cursor-pointer p-2 flex items-center justify-center ${
          isDark
            ? "text-white/70 hover:text-white"
            : "text-neutral-700 hover:text-black"
        }`}
        aria-label="Next"
      >
        <ChevronRight size={44} strokeWidth={1.8} />
      </button>

      {/* Enlarged Image Container */}
      <div
        className="relative flex items-center justify-center w-full h-full px-4 sm:px-16 pt-8 pb-20"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} - ${index + 1}`}
            className={`w-auto h-auto max-w-[90vw] sm:max-w-[1240px] max-h-[78vh] sm:max-h-[82vh] object-contain rounded-2xl select-none ${
              isDark
                ? "shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-white/10"
                : "shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] border border-black/10"
            }`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: EASE }}
          />
        </AnimatePresence>
      </div>

      {/* Bottom: title + dots */}
      <div
        className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-2.5 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className={`text-[16px] sm:text-[17px] font-semibold tracking-wide drop-shadow-sm ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </p>
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setIndex(dotIdx)}
              aria-label={`Go to photo ${dotIdx + 1}`}
              className="transition-all duration-200 rounded-full cursor-pointer"
              style={{
                width: dotIdx === index ? 24 : 6,
                height: 6,
                background: isDark
                  ? dotIdx === index ? "#ffffff" : "rgba(255,255,255,0.35)"
                  : dotIdx === index ? "#0f172a" : "rgba(15,23,42,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Facet Carousel (in-page, click to open lightbox) ───────────
function FacetCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => {
      setPrevIndex(current);
      return (current + 1) % images.length;
    });
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => {
      setPrevIndex(current);
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  // Preload next image
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIdx];
  }, [currentIndex, images]);

  return (
    <>
      {/* Lightbox portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            title={title}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      <div
        className="group relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border bg-neutral-950 cursor-zoom-in"
        style={{ borderColor: "var(--border)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setLightboxIndex(currentIndex)}
        role="region"
        aria-label={`${title} gallery`}
      >
        {/* Base layer */}
        <img
          src={images[prevIndex]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none"
          aria-hidden="true"
        />

        {/* Active layer crossfade */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - photo ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Nav buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-3 z-10 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            aria-label="Previous photo"
            className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            aria-label="Next photo"
            className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>

        {/* Bottom dot indicators (simple, no loading animation) */}
        <div className="absolute bottom-3.5 left-0 right-0 z-10 flex items-center justify-center pointer-events-auto px-4">
          <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 max-w-full shadow-lg">
            {images.map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={(e) => { e.stopPropagation(); setPrevIndex(currentIndex); setCurrentIndex(dotIdx); }}
                  aria-label={`Jump to photo ${dotIdx + 1}`}
                  className="h-1.5 rounded-full transition-all duration-250 cursor-pointer"
                  style={{
                    width: isActive ? 20 : 6,
                    background: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full mx-auto px-4 sm:px-6 py-12 sm:py-28 scroll-mt-[95px]"
      style={{ maxWidth: "var(--content-width, 1450px)" }}
    >
      {/* Header */}
      <div className="mb-8 sm:mb-18">
        <p className="text-[12px] font-semibold tracking-[0.14em] uppercase mb-2 sm:mb-3" style={{ color: "var(--fg-muted)" }}>
          /{ABOUT.eyebrow.toLowerCase()}
        </p>
        <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          {ABOUT.title}
        </h2>
      </div>

      {/* Life Facets */}
      <div className="flex flex-col gap-10 sm:gap-24">
        {ABOUT.facets.map((facet, i) => (
          <motion.div
            key={facet.title}
            className="grid lg:grid-cols-[1fr_1.3fr] gap-5 sm:gap-14 items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
          >
            {/* Left: Number, Title, Body */}
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[28px] sm:text-[34px] font-light tabular-nums" style={{ color: "var(--border)" }}>
                  {facet.index || String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight" style={{ color: "var(--fg)" }}>
                  {facet.title}
                </h3>
              </div>
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed max-w-[560px]" style={{ color: "var(--fg-muted)" }}>
                {facet.body}
              </p>
            </div>

            {/* Right: Carousel (click → lightbox) */}
            <FacetCarousel images={facet.images} title={facet.title} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
