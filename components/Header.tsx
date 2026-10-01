"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function LogoMark() {
  return (
    <Link href="/" aria-label="Home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
      {/* Unique SVG gradient ID to avoid page-wide conflicts */}
      <svg width="22" height="19" viewBox="0 0 26 22" fill="none" aria-hidden="true"
        className="sm:w-[30px] sm:h-[25px] transition-opacity duration-200 group-hover:opacity-70 shrink-0">
        <path d="M1 2L9 20" stroke="url(#nav-logo-grad)" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M9 20L17 2" stroke="url(#nav-logo-grad)" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M19 2L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--border)" }}/>
        <defs>
          <linearGradient id="nav-logo-grad" x1="1" y1="2" x2="17" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6"/>
            <stop offset="1" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[14px] sm:text-[21px] md:text-[22px] font-black tracking-[0.06em] sm:tracking-[0.08em] uppercase" style={{ color: "var(--fg)" }}>
        Visual<span className="font-light hidden min-[420px]:inline" style={{ color: "var(--fg-muted)" }}>Odyssey</span>
      </span>
    </Link>
  );
}

function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-[42px] h-[42px] sm:w-[74px] sm:h-[74px] shrink-0 flex items-center justify-center rounded-[50px] transition-all duration-200 hover:scale-[1.04] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
      style={{
        background: "var(--nav-bg)",
        border: "1px solid var(--nav-border, var(--border))",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.18 }}
          >
            <Sun size={17} className="sm:w-[23px] sm:h-[23px]" strokeWidth={1.8} style={{ color: "var(--fg-muted)" }} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.18 }}
          >
            <Moon size={17} className="sm:w-[23px] sm:h-[23px]" strokeWidth={1.8} style={{ color: "var(--fg-muted)" }} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center px-2.5 sm:px-6 lg:px-8 pt-3 sm:pt-5">
      <div className="w-full max-w-[1450px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Main Nav Pill — Refined, sleek, luxurious */}
        <nav
          className="flex-1 min-w-0 flex items-center justify-between px-3 sm:px-8 h-[46px] sm:h-[74px] rounded-[50px] transition-all duration-150"
          style={{
            background: "var(--nav-bg)",
            border: "1px solid var(--nav-border, var(--border))",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <LogoMark />

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Resume Button */}
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-6 py-1 sm:py-2.5 rounded-[50px] text-[12.5px] sm:text-[17px] font-semibold transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--card-bg)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              Resume
            </Link>

            {/* Work Button */}
            <Link
              href="/work"
              className="px-3.5 sm:px-7 py-1 sm:py-2.5 rounded-[50px] text-[12.5px] sm:text-[17px] font-semibold text-white transition-all duration-200 hover:opacity-95 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_14px_rgba(0,102,178,0.30)]"
              style={{
                background: "#0066b2",
              }}
            >
              Work
            </Link>
          </div>
        </nav>

        {/* Separate Satellite Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </header>
  );
}
