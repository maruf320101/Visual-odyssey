import { SITE, FOOTER } from "@/lib/content";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-14" style={{ maxWidth: "var(--content-width, 1450px)" }}>
      <div
        className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center gap-3 sm:gap-4 text-[12px]"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
      >
        {/* Logo mark + Statement */}
        <div className="flex items-center justify-center gap-2">
          <svg width="16" height="14" viewBox="0 0 26 22" fill="none" aria-hidden="true">
            <path d="M1 2L9 20" stroke="url(#ft-grad)" strokeWidth="2.8" strokeLinecap="round"/>
            <path d="M9 20L17 2" stroke="url(#ft-grad)" strokeWidth="2.8" strokeLinecap="round"/>
            <path d="M19 2L24 20" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="ft-grad" x1="1" y1="2" x2="17" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>

          <span className="font-medium" style={{ color: "var(--fg)" }}>
            {FOOTER.statement}
          </span>
        </div>

        {/* Side project link */}
        <a
          href={FOOTER.sideProject.href}
          target="_blank"
          rel="noopener"
          className="transition-colors duration-150 hover:text-blue-500"
          style={{ color: "var(--fg-muted)" }}
        >
          {FOOTER.sideProject.label}
        </a>

        {/* Copyright */}
        <span style={{ color: "var(--fg-muted)" }}>
          © {year} {SITE.copyright}
        </span>

        {/* LinkedIn */}
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors duration-150 hover:text-blue-500"
          style={{ color: "var(--fg-muted)" }}
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
