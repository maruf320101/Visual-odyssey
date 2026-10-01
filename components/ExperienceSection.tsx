"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function ExperienceAvatar({ type }: { type: string }) {
  switch (type) {
    case "dwa":
    case "youtube":
      return (
        <div className="relative shrink-0 mt-0.5 sm:mt-1">
          {/* Main Disc: YouTube Red */}
          <div
            className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            style={{ background: "linear-gradient(135deg, #FF0000 0%, #D90000 100%)" }}
            title="Design w Anis (YouTube)"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          {/* Overlapping Sub-Badge: Figma */}
          <div
            className="absolute -bottom-1 -right-1 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "#18181B",
              border: "2.5px solid var(--bg)",
            }}
            title="Figma UI/UX"
          >
            <svg className="w-3 h-3 fill-none stroke-purple-400" viewBox="0 0 24 24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
            </svg>
          </div>
        </div>
      );

    case "freelance":
    case "uiux":
      return (
        <div className="relative shrink-0 mt-0.5 sm:mt-1">
          {/* Main Disc: UI/UX Frame */}
          <div
            className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)" }}
            title="UI/UX Design Systems"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          {/* Overlapping Sub-Badge: Code </> */}
          <div
            className="absolute -bottom-1 -right-1 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center shadow-md text-[#38BDF8]"
            style={{
              background: "#0F172A",
              border: "2.5px solid var(--bg)",
            }}
            title="Frontend Code"
          >
            <svg className="w-3 h-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>
      );

    case "ai":
    case "research":
      return (
        <div className="relative shrink-0 mt-0.5 sm:mt-1">
          {/* Main Disc: Computer Vision & AI */}
          <div
            className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            style={{ background: "linear-gradient(135deg, #0284C7 0%, #0D9488 100%)" }}
            title="Computer Vision & AI"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <circle cx="12" cy="12" r="4" />
              <path d="m4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          {/* Overlapping Sub-Badge: PyTorch Flame */}
          <div
            className="absolute -bottom-1 -right-1 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center shadow-md text-[#F97316]"
            style={{
              background: "#0F172A",
              border: "2.5px solid var(--bg)",
            }}
            title="PyTorch Deep Learning"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2c.2 1.5-.5 3-1.5 4-1.2 1.2-2 2.5-2 4a5 5 0 0 0 10 0c0-2-1-3.5-2-4.5-.5-.5-.8-1.2-.8-2 0-.3 0-.6.1-.8A7 7 0 0 1 19 12a7 7 0 0 1-14 0c0-3.5 2.5-6.5 7-10z" />
            </svg>
          </div>
        </div>
      );

    case "leadership":
    case "event":
    default:
      return (
        <div className="relative shrink-0 mt-0.5 sm:mt-1">
          {/* Main Disc: Green University Emerald Leadership */}
          <div
            className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            style={{ background: "linear-gradient(135deg, #059669 0%, #10B981 100%)" }}
            title="Team Leadership & Events"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          {/* Overlapping Sub-Badge: Award Star */}
          <div
            className="absolute -bottom-1 -right-1 w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] rounded-full flex items-center justify-center shadow-md text-[#EAB308]"
            style={{
              background: "#0F172A",
              border: "2.5px solid var(--bg)",
            }}
            title="Executive Coordinator"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
      );
  }
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full mx-auto px-4 sm:px-6 py-20 sm:py-28 scroll-mt-[95px]"
      style={{ maxWidth: "var(--content-width, 1450px)" }}
    >
      {/* Section Header */}
      <div className="mb-14 sm:mb-18">
        <p className="text-[12px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--fg-muted)" }}>
          Experience
        </p>
        <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          Where I&apos;ve worked
        </h2>
      </div>

      {/* Experience Timeline List */}
      <div className="flex flex-col">
        {EXPERIENCE.map((job, idx) => {
          const isLast = idx === EXPERIENCE.length - 1;
          return (
            <motion.div
              key={idx}
              className="flex items-stretch gap-4 sm:gap-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: idx * 0.08 }}
            >
              {/* Left Column: Avatar + Connecting Vertical Line */}
              <div className="w-[50px] sm:w-[56px] shrink-0 flex flex-col items-center">
                <ExperienceAvatar type={job.logoType || job.logos?.[0] || "leadership"} />
                {!isLast && (
                  <div
                    className="flex-1 w-[1.5px] mt-2 mb-0"
                    style={{ background: "var(--border)" }}
                  />
                )}
              </div>

              {/* Right Column: Title, Year, and Bulleted Points */}
              <div className={`flex-1 min-w-0 max-w-[720px] ${isLast ? "pb-0" : "pb-14 sm:pb-20"}`}>
                {/* Role & Company Header */}
                <h3 className="text-[22px] sm:text-[26px] font-bold tracking-tight leading-snug" style={{ color: "var(--fg)" }}>
                  {job.role} <span className="font-normal text-[var(--fg-muted)]">·</span> {job.company}
                </h3>

                {/* Year / Period */}
                <p className="text-[14px] sm:text-[15px] font-normal mt-1 mb-4 sm:mb-5 tracking-wide" style={{ color: "var(--fg-muted)" }}>
                  {job.period}
                </p>

                {/* Bullet Points with constrained reading width (max-w-[680px]) and clean normal font-weight */}
                <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-3 sm:space-y-3.5 text-[15px] sm:text-[16px] leading-[1.65] font-normal max-w-[680px]" style={{ color: "var(--fg-muted)" }}>
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
