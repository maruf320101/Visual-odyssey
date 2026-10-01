import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_PROJECTS, getProjectBySlug, ProjectItem } from "@/lib/projects";
import Footer from "@/components/Footer";
import { X, ArrowLeft, ArrowUpRight, ExternalLink, Zap } from "lucide-react";

export function generateStaticParams() {
  return ALL_PROJECTS.filter((p) => !p.isEmpty).map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} · Selected Work`,
      description: project.blurb,
    };
  });
}

function LogoMarkSmall() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none group">
      <svg width="24" height="20" viewBox="0 0 26 22" fill="none" aria-hidden="true">
        <path d="M1 2L9 20" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <path d="M9 20L17 2" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
        <path d="M19 2L24 20" stroke="#cbd5e1" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="text-[17px] font-black tracking-[0.08em] uppercase text-neutral-900 group-hover:text-blue-600 transition-colors">
        VILEN<span className="font-light text-neutral-500">DESIGN</span>
      </span>
    </Link>
  );
}

// ─── Hero Laptop Mockup Component With Direct Live Link Button ──
function HeroLaptop({ project }: { project: ProjectItem }) {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#EEF2F6] border border-neutral-200/90 p-2 sm:p-10 lg:p-12 shadow-sm flex items-center justify-center overflow-hidden">
      {/* Laptop Outer Bezel */}
      <div className="w-full max-w-[1080px] bg-neutral-950 rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-4 shadow-2xl border border-neutral-800">
        {/* Screen Bezel Header Bar */}
        <div className="flex items-center justify-between px-1.5 sm:px-2 pb-1.5 sm:pb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 tracking-wider truncate max-w-[200px] sm:max-w-[300px]">
            {project.liveUrl?.replace("https://", "") || "production-app.vercel.app"}
          </div>
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Online</span>
          </div>
        </div>

        {/* Screen Display Area */}
        <div className="w-full bg-white rounded-md sm:rounded-lg p-3 sm:p-10 min-h-0 sm:min-h-[460px] flex flex-col justify-between select-none relative overflow-hidden">
          {/* Subtle Ambient Background Tint */}
          <div
            className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: project.color }}
          />

          {/* Top Bar of Screen */}
          <div className="flex items-center justify-between pb-2 sm:pb-4 border-b border-neutral-100 relative z-10">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span
                className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full shrink-0"
                style={{ background: project.color }}
              />
              <span className="text-[10.5px] sm:text-[12px] font-bold text-neutral-800 tracking-tight truncate max-w-[200px] sm:max-w-none">
                {project.company} · Live Production Application
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[9.5px] sm:text-[11px] font-mono border border-neutral-200 shrink-0">
              Next.js 15
            </span>
          </div>

          {/* Central Call to Action (Compact on mobile) */}
          <div className="my-auto py-2.5 sm:py-8 text-center max-w-[620px] mx-auto relative z-10 flex flex-col items-center">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-[11.5px] font-semibold border border-blue-200 mb-1.5 sm:mb-4 inline-flex items-center gap-1.5">
              <Zap size={12} className="text-blue-600" />
              <span>Full-Stack Web Application</span>
            </span>

            <h2 className="text-[18px] sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              {project.title}
            </h2>

            <p className="mt-1 sm:mt-2.5 text-[11.5px] sm:text-[14px] text-neutral-600 leading-snug sm:leading-relaxed max-w-[460px] line-clamp-2 sm:line-clamp-none">
              {project.blurb}
            </p>

            {/* ─── PROMINENT LIVE LINK BUTTON ─── */}
            {project.liveUrl && (
              <div className="mt-2.5 sm:mt-7 flex flex-col items-center gap-1 sm:gap-2.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2 sm:py-3.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-[12.5px] sm:text-[14.5px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer group"
                  title="Open live website in new tab"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-[10px] sm:text-[11.5px] font-mono text-neutral-400 hidden sm:inline">
                  {project.liveUrl}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Highlights Bar of Laptop Display */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-2 sm:pt-5 border-t border-neutral-100 text-left relative z-10">
            <div className="p-1.5 sm:p-3 rounded-md sm:rounded-lg bg-neutral-50/80 border border-neutral-100">
              <p className="text-[8.5px] sm:text-[10px] font-medium text-neutral-400 uppercase tracking-wider truncate">Speed Score</p>
              <p className="text-[11px] sm:text-[14px] font-extrabold text-neutral-800 truncate">99 / 100 Mobile</p>
            </div>
            <div className="p-1.5 sm:p-3 rounded-md sm:rounded-lg bg-neutral-50/80 border border-neutral-100">
              <p className="text-[8.5px] sm:text-[10px] font-medium text-neutral-400 uppercase tracking-wider truncate">Architecture</p>
              <p className="text-[11px] sm:text-[14px] font-extrabold text-neutral-800 truncate">App Router &amp; RSC</p>
            </div>
            <div className="p-1.5 sm:p-3 rounded-md sm:rounded-lg bg-neutral-50/80 border border-neutral-100">
              <p className="text-[8.5px] sm:text-[10px] font-medium text-neutral-400 uppercase tracking-wider truncate">Deployment</p>
              <p className="text-[11px] sm:text-[14px] font-extrabold text-neutral-800 truncate">Vercel Edge Global</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Visual Components ─────────────────────────────────
function EcommerceGridCard() {
  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-neutral-200/90 p-5 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { name: "Pro Ultra Display 32\"", price: "$499.00", rating: "4.9 ★ (1,240)", badge: "Prime Choice", tag: "Electronics" },
          { name: "Wireless Noise-Canceling Buds", price: "$129.99", rating: "4.8 ★ (890)", badge: "Best Seller", tag: "Audio" },
          { name: "Mechanical RGB Keypad", price: "$89.50", rating: "4.7 ★ (450)", badge: "Top Rated", tag: "Accessories" },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200">
                {item.badge}
              </span>
              <h4 className="text-[14px] font-bold text-neutral-900 mt-2">{item.name}</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">{item.rating}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[15px] font-extrabold text-neutral-900">{item.price}</span>
              <button className="px-3 py-1 rounded bg-[#FFD814] text-neutral-900 text-[11px] font-bold shadow-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMetricsCard() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Revenue", val: "$84,250.00", change: "+24.5%", up: true },
          { label: "Active Subscriptions", val: "1,420", change: "+12.1%", up: true },
          { label: "Churn Rate", val: "1.2%", change: "-0.4%", up: true },
          { label: "Average Session", val: "4m 32s", change: "+18s", up: true },
        ].map((m) => (
          <div key={m.label} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{m.label}</span>
            <p className="text-[18px] font-extrabold text-white mt-1">{m.val}</p>
            <span className="text-[11px] font-bold text-emerald-400 mt-1 inline-block">{m.change}</span>
          </div>
        ))}
      </div>
      <div className="h-14 rounded-lg bg-slate-800/50 p-2 flex items-end gap-1.5">
        {[25, 40, 35, 60, 50, 75, 70, 90, 85, 100, 95, 110].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-emerald-400" style={{ height: `${(h / 110) * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

function FinancialTableCard() {
  return (
    <div className="w-full rounded-2xl bg-[#0F0F11] text-white border border-white/10 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Ledger Statement</span>
          <h4 className="text-[16px] font-bold text-white mt-0.5">Automated Invoicing &amp; P&amp;L</h4>
        </div>
        <span className="text-[16px] font-extrabold text-emerald-400">+$24,800.00 This Month</span>
      </div>
      <div className="space-y-2">
        {[
          { id: "INV-2026-081", client: "Stripe US Settlement", date: "Sep 28, 2026", amount: "+$8,450.00", badge: "Cleared", color: "text-emerald-400" },
          { id: "INV-2026-080", client: "AWS Cloud Infrastructure", date: "Sep 26, 2026", amount: "-$1,240.00", badge: "Automated", color: "text-neutral-400" },
          { id: "INV-2026-079", client: "Supabase Enterprise License", date: "Sep 24, 2026", amount: "-$499.00", badge: "Automated", color: "text-neutral-400" },
        ].map((r) => (
          <div key={r.id} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 text-[12px]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-neutral-400">{r.id}</span>
              <span className="font-bold text-white">{r.client}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-400">{r.date}</span>
              <span className={`font-mono font-bold ${r.color}`}>{r.amount}</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-neutral-300 font-semibold">{r.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsChartCard() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white border border-slate-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">Real-Time Traffic Engine</span>
          <h4 className="text-[16px] font-bold text-white mt-0.5">Global Link Attribution</h4>
        </div>
        <span className="text-[13px] font-mono text-neutral-300 font-bold">24,850 Clicks Tracked</span>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-neutral-400 uppercase">Top Source</span>
          <p className="text-[15px] font-bold text-white mt-1">Product Hunt &amp; X</p>
          <span className="text-[11px] text-emerald-400 font-bold">58% Share</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-neutral-400 uppercase">Average Latency</span>
          <p className="text-[15px] font-bold text-white mt-1">8.4 milliseconds</p>
          <span className="text-[11px] text-sky-400 font-bold">Edge Edge-Cached</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-neutral-400 uppercase">Top Country</span>
          <p className="text-[15px] font-bold text-white mt-1">United States (62%)</p>
          <span className="text-[11px] text-purple-400 font-bold">15,407 Clicks</span>
        </div>
      </div>
    </div>
  );
}

function CalendarSlotsCard() {
  return (
    <div className="w-full rounded-2xl bg-[#111827] text-white border border-neutral-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Appointment Engine</span>
          <h4 className="text-[16px] font-bold text-white mt-0.5">Timezone Normalization &amp; Cal Sync</h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11.5px] font-semibold border border-blue-500/30">
          UTC+6 Detected
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((slot, i) => (
          <div
            key={slot}
            className={`p-3.5 rounded-xl border text-center font-bold text-[13px] ${
              i === 0
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30"
                : "bg-white/5 border-white/10 text-neutral-300 hover:border-blue-400 transition-colors"
            }`}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}

function PerspectiveMockupCard({ project }: { project: ProjectItem }) {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#EEF2F6] border border-neutral-200/90 p-6 sm:p-10 shadow-sm flex flex-col items-center text-center">
      <div className="max-w-[540px] mb-6">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[12px] font-semibold border border-blue-200">
          Production Verification
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-2.5">
          Live Web Application Experience
        </h3>
        <p className="text-[13.5px] text-neutral-500 mt-1">
          Open and interact with this live production application directly in your browser.
        </p>
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-[14px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all cursor-pointer"
        >
          <span>Open Live Web Application</span>
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
}

// ─── Design System & Brand Visual Components (Matching LI.FI & Jumper) ───
function TokensCard() {
  const tokenNav = ["Overview", "Color", "Typography", "Spacing", "Radius", "Elevation", "Icons", "Components"];
  const tokens = [
    { name: "Primary Blue", token: "--lifi-blue-600", hex: "#2B6CB0", role: "Primary brand actions, active links" },
    { name: "Electric Violet", token: "--lifi-purple-500", hex: "#805AD5", role: "Bridge highlights, gradient stops" },
    { name: "Obsidian", token: "--lifi-dark-900", hex: "#1A202C", role: "Deep surface, high-contrast borders" },
    { name: "Mint Success", token: "--lifi-green-500", hex: "#38A169", role: "Confirmed transactions, positive slippage" },
    { name: "Coral Destructive", token: "--lifi-red-500", hex: "#E53E3E", role: "Failed transactions, gas spikes" },
    { name: "Amber Warning", token: "--lifi-amber-500", hex: "#D69E2E", role: "High price impact, low liquidity" },
    { name: "Azure Accent", token: "--lifi-sky-500", hex: "#3182CE", role: "Secondary tabs, info tooltips" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 bg-neutral-50/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="text-[12px] font-mono font-medium text-neutral-600">tokens.config.json · LI.FI AI System</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold border border-purple-200">
          7 Semantics Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="p-4 border-r border-neutral-100 bg-neutral-50/40 hidden md:block">
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Token Groups</p>
          <ul className="space-y-1">
            {tokenNav.map((item, idx) => (
              <li
                key={item}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-medium flex items-center justify-between ${
                  idx === 1
                    ? "bg-purple-50 text-purple-700 font-bold"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <span>{item}</span>
                {idx === 1 && <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tokens.map((t) => (
            <div key={t.token} className="p-3 rounded-xl border border-neutral-200/70 hover:shadow-md transition-shadow bg-neutral-50/30 flex flex-col justify-between">
              <div>
                <div
                  className="w-full h-12 rounded-lg shadow-inner mb-2.5"
                  style={{ background: t.hex }}
                />
                <h5 className="text-[13px] font-bold text-neutral-900">{t.name}</h5>
                <p className="text-[10px] text-neutral-400 font-mono mt-0.5">{t.token}</p>
                <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">{t.role}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                <span className="font-bold">{t.hex}</span>
                <span className="text-[10px] text-purple-600 uppercase font-semibold">Token</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ButtonSystemCard() {
  return (
    <div className="w-full rounded-2xl bg-[#FAFBFC] border border-neutral-200/90 p-5 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">Interactive Component Set</span>
          <h4 className="text-[16px] font-bold text-neutral-900 mt-0.5">LI.FI Multi-State Button Hierarchy</h4>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
          5 Variants · 3 Scales
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Primary Action Matrix</p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-[#7B61FF] hover:bg-[#684be3] text-white font-bold text-[13px] shadow-md shadow-purple-500/20 active:scale-95 transition-all">
              Connect Wallet
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-[#2B6CB0] hover:bg-[#235890] text-white font-bold text-[13px] shadow-md shadow-blue-500/20 active:scale-95 transition-all">
              Review Swap Route
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-[#7B61FF]/90 text-white font-bold text-[13px] flex items-center gap-2 cursor-wait">
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Routing Quotes...</span>
            </button>
            <button disabled className="px-5 py-2.5 rounded-xl bg-neutral-200 text-neutral-400 font-bold text-[13px] cursor-not-allowed">
              Insufficient Balance
            </button>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Secondary &amp; Utility Buttons</p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-[13px] shadow-sm">
              Select Token
            </button>
            <button className="px-4 py-2 rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-[13px] shadow-sm flex items-center gap-1.5">
              <span>0.5% Slippage</span>
              <span className="text-[10px] text-neutral-400 font-mono">▾</span>
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 font-semibold text-[13px]">
              Revoke Permit
            </button>
            <button className="px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[12px] font-mono">
              Gas: 18 Gwei
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerGridCard() {
  const partners = [
    { name: "Uniswap V3", category: "DEX Protocol", fee: "0.05%" },
    { name: "Stargate", category: "Omnichain Bridge", fee: "0.06%" },
    { name: "SushiSwap", category: "AMM Liquidity", fee: "0.30%" },
    { name: "Across", category: "Fast Bridge", fee: "0.04%" },
    { name: "Hop Protocol", category: "Rollup Bridge", fee: "0.04%" },
    { name: "Circle CCTP", category: "Native USDC", fee: "0.00%" },
    { name: "Connext", category: "State Bridge", fee: "0.05%" },
    { name: "1inch", category: "DEX Aggregator", fee: "Optimal" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-7 shadow-sm">
      <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">Integrated Protocols</span>
          <h4 className="text-[15px] font-bold text-neutral-900 mt-0.5">30+ Cross-Chain Liquidity Venues</h4>
        </div>
        <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Optimal Route Matching
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {partners.map((p) => (
          <div key={p.name} className="p-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-bold text-[11px] flex items-center justify-center mb-2">
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <h5 className="text-[13px] font-bold text-neutral-900 truncate">{p.name}</h5>
              <p className="text-[11px] text-neutral-500 mt-0.5">{p.category}</p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[10.5px]">
              <span className="text-neutral-400">Bridge Fee</span>
              <span className="font-mono font-bold text-neutral-800">{p.fee}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChainGridCard() {
  const chains = [
    { name: "Ethereum", symbol: "ETH", id: "1", color: "#627EEA" },
    { name: "Arbitrum One", symbol: "ARB", id: "42161", color: "#28A0F0" },
    { name: "Optimism", symbol: "OP", id: "10", color: "#FF0420" },
    { name: "Polygon PoS", symbol: "MATIC", id: "137", color: "#8247E5" },
    { name: "Base", symbol: "BASE", id: "8453", color: "#0052FF" },
    { name: "Avalanche", symbol: "AVAX", id: "43114", color: "#E84142" },
    { name: "BNB Chain", symbol: "BNB", id: "56", color: "#F3BA2F" },
    { name: "Solana", symbol: "SOL", id: "1399", color: "#14F195" },
    { name: "zkSync Era", symbol: "ERA", id: "324", color: "#3B82F6" },
    { name: "Linea", symbol: "LINEA", id: "59144", color: "#61DFFF" },
    { name: "Scroll", symbol: "SCR", id: "534352", color: "#FFE799" },
    { name: "Gnosis", symbol: "GNO", id: "100", color: "#04795B" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-7 shadow-sm">
      <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">Network Coverage</span>
          <h4 className="text-[15px] font-bold text-neutral-900 mt-0.5">25+ EVM &amp; SVM Networks</h4>
        </div>
        <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
          Automatic RPC Failover
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {chains.map((c) => (
          <div key={c.id} className="p-3 rounded-xl border border-neutral-200/70 flex items-center gap-3 bg-neutral-50/40 hover:bg-neutral-50 transition-colors">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-extrabold shrink-0 shadow-sm"
              style={{ background: c.color }}
            >
              {c.symbol.slice(0, 3)}
            </span>
            <div className="min-w-0">
              <p className="text-[12.5px] font-bold text-neutral-900 truncate">{c.name}</p>
              <p className="text-[10px] text-neutral-400 font-mono">Chain ID: {c.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonasCard() {
  const personas = [
    {
      title: "DeFi Yield Trader",
      role: "High-Frequency Swaps",
      badge: "Power User",
      metric: "$250K+ Monthly Vol",
      pain: "Needs lowest slippage, transparent gas calculation, and sub-10s route discovery.",
      color: "border-purple-500/40 bg-purple-50/20",
    },
    {
      title: "Protocol Developer",
      role: "dApp & Wallet Integrations",
      badge: "B2B Integrator",
      metric: "100+ API Calls/Sec",
      pain: "Requires drop-in React widget, reliable TypeScript SDK, and multi-RPC resilience.",
      color: "border-blue-500/40 bg-blue-50/20",
    },
    {
      title: "Arbitrage Trader",
      role: "MEV & Cross-DEX Spreads",
      badge: "Algorithmic",
      metric: "< 2s Execution Time",
      pain: "Zero tolerance for stuck bridge transactions; demands real-time mempool tracking.",
      color: "border-emerald-500/40 bg-emerald-50/20",
    },
    {
      title: "Retail Crypto User",
      role: "Casual L2 & NFT Bridging",
      badge: "Consumer",
      metric: "1-2 Swaps / Week",
      pain: "Simple one-click transfers, clear scam protection alerts, and zero jargon.",
      color: "border-amber-500/40 bg-amber-50/20",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-7 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {personas.map((p) => (
          <div key={p.title} className={`p-4 rounded-xl border ${p.color} flex flex-col justify-between`}>
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-700 uppercase">
                {p.badge}
              </span>
              <h5 className="text-[14px] font-bold text-neutral-900 mt-2.5">{p.title}</h5>
              <p className="text-[11px] font-medium text-neutral-500">{p.role}</p>
              <div className="mt-3 text-[11.5px] text-neutral-600 leading-relaxed">
                {p.pain}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-mono font-bold text-neutral-800">
              {p.metric}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoConstructionCard() {
  return (
    <div className="w-full rounded-2xl bg-[#0B0C10] text-white border border-neutral-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
        <div>
          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">Isometric Geometry</span>
          <h4 className="text-[16px] font-bold text-white mt-0.5">Jumper Chevron &amp; Diamond Mark</h4>
        </div>
        <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
          Grid: 45° Angle · 3:2 Ratio
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col items-center justify-center min-h-[180px]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#4A00E0] to-[#8E2DE2] flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M5 19L12 12L19 19" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 mt-4">Isolated Primary Mark</span>
        </div>

        <div className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col items-center justify-center min-h-[180px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4A00E0] to-[#8E2DE2] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 19L12 12L19 19" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[20px] font-black tracking-tight text-white">jumper<span className="text-purple-400">.xyz</span></span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 mt-4">Horizontal Lockup</span>
        </div>

        <div className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 relative flex flex-col items-center justify-center min-h-[180px] overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#7B61FF_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="relative z-10 text-center">
            <div className="inline-block p-3 border-2 border-dashed border-purple-400/60 rounded-xl">
              <span className="text-purple-400 font-mono text-xs font-bold">∠ 45.0° | R: 16px</span>
            </div>
            <p className="text-[11px] font-mono text-neutral-400 mt-3">Vector Blueprint Alignment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorRampCard() {
  const ramps = [
    {
      name: "Obsidian Scale",
      shades: [
        { code: "#F8FAFC", num: "50" },
        { code: "#E2E8F0", num: "200" },
        { code: "#94A3B8", num: "400" },
        { code: "#475569", num: "600" },
        { code: "#1E293B", num: "800" },
        { code: "#0B0C10", num: "950" },
      ],
    },
    {
      name: "Cosmic Indigo",
      shades: [
        { code: "#EEF2FF", num: "50" },
        { code: "#C7D2FE", num: "200" },
        { code: "#818CF8", num: "400" },
        { code: "#4F46E5", num: "600" },
        { code: "#3730A3", num: "800" },
        { code: "#1E1B4B", num: "950" },
      ],
    },
    {
      name: "Radiant Purple",
      shades: [
        { code: "#FAF5FF", num: "50" },
        { code: "#E9D5FF", num: "200" },
        { code: "#C084FC", num: "400" },
        { code: "#9333EA", num: "600" },
        { code: "#6B21A8", num: "800" },
        { code: "#3B0764", num: "950" },
      ],
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0E0F14] text-white border border-neutral-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
        <div>
          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">Color Architecture</span>
          <h4 className="text-[16px] font-bold text-white mt-0.5">High-Contrast Multi-Shade Ramp</h4>
        </div>
        <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded">
          WCAG AAA Compliant
        </span>
      </div>

      <div className="space-y-4">
        {ramps.map((ramp) => (
          <div key={ramp.name}>
            <div className="flex items-center justify-between text-[11.5px] font-mono text-neutral-400 mb-1.5">
              <span>{ramp.name}</span>
            </div>
            <div className="grid grid-cols-6 rounded-xl overflow-hidden border border-neutral-800">
              {ramp.shades.map((s) => (
                <div key={s.num} className="h-16 flex flex-col justify-end p-2 transition-transform hover:scale-105" style={{ background: s.code }}>
                  <span className={`text-[9px] font-mono font-bold ${parseInt(s.num) > 400 ? "text-white/80" : "text-neutral-900/80"}`}>
                    {s.num}
                  </span>
                  <span className={`text-[8px] font-mono ${parseInt(s.num) > 400 ? "text-white/60" : "text-neutral-900/60"}`}>
                    {s.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographySpecCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-2xl bg-[#0F0F1A] text-white border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] font-mono text-purple-400">
            <span>Display Typography</span>
            <span>Geometric Sans</span>
          </div>
          <h3 className="text-3xl font-black mt-4 tracking-tight">Urbanist</h3>
          <p className="text-[13px] text-neutral-400 mt-1">Weight: 800 Black · Letter Spacing: -0.03em</p>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <p className="text-xl font-extrabold text-white leading-tight">Every chain, one route.</p>
            <p className="text-lg font-bold text-purple-300">Swap and bridge in one place.</p>
          </div>
        </div>
        <p className="text-[11px] text-neutral-500 font-mono mt-4 pt-3 border-t border-neutral-800/80">
          Used for commanding brand headlines &amp; marketing calls to action.
        </p>
      </div>

      <div className="rounded-2xl bg-[#0F0F1A] text-white border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] font-mono text-blue-400">
            <span>Interface Typography</span>
            <span>Dynamic UI Sans</span>
          </div>
          <h3 className="text-3xl font-black mt-4 tracking-tight">Inter</h3>
          <p className="text-[13px] text-neutral-400 mt-1">Weight: 400 Regular to 600 SemiBold · Tabular Figures</p>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 font-mono text-[12px] text-neutral-300">
            <div className="flex justify-between">
              <span>ETH &gt; MATIC Route</span>
              <span className="text-emerald-400 font-bold">$1,450.20 USDC</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Gas Fee</span>
              <span className="text-neutral-400">$2.14 · 12 seconds</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-neutral-500 font-mono mt-4 pt-3 border-t border-neutral-800/80">
          Used for dense exchange tables, token inputs, and route status.
        </p>
      </div>
    </div>
  );
}

function DataVizVolumeCard() {
  const bars = [
    { period: "Jan", val: 320, h: "35%" },
    { period: "Mar", val: 580, h: "52%" },
    { period: "May", val: 890, h: "68%" },
    { period: "Jul", val: 1240, h: "78%" },
    { period: "Sep", val: 1850, h: "88%" },
    { period: "Nov", val: 2700, h: "100%" },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090A0F] text-white border border-neutral-800 p-6 sm:p-8">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6">
        <div>
          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">Protocol Metrics</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">$2.7B+</h2>
          <p className="text-[13px] text-neutral-400 mt-0.5">Cumulative Cross-Chain Bridge &amp; Swap Volume</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-bold border border-emerald-500/30">
          +480% YoY Growth
        </span>
      </div>

      <div className="h-44 sm:h-52 flex items-end gap-3 sm:gap-6 pt-4 pb-2 px-2">
        {bars.map((b, idx) => (
          <div key={b.period} className="flex-1 flex flex-col items-center h-full justify-end group">
            <span className="text-[10px] font-mono text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity mb-1.5">
              ${b.val}M
            </span>
            <div
              className={`w-full rounded-t-lg transition-all duration-300 ${
                idx === bars.length - 1
                  ? "bg-gradient-to-t from-purple-600 via-purple-500 to-fuchsia-400 shadow-lg shadow-purple-500/30"
                  : "bg-gradient-to-t from-indigo-900 to-indigo-600/80 hover:brightness-125"
              }`}
              style={{ height: b.h }}
            />
            <span className="text-[11px] font-mono text-neutral-400 mt-2">{b.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileShowcaseCard() {
  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-neutral-200/90 p-6 sm:p-10 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[620px] w-full">
        <div className="rounded-3xl bg-neutral-950 p-3 shadow-2xl border border-neutral-800">
          <div className="w-full h-full bg-neutral-900 rounded-2xl p-4 flex flex-col justify-between min-h-[340px] text-white">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
              <span>9:41</span>
              <span>●●● 5G</span>
            </div>
            <div className="my-auto text-center py-6">
              <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold">
                120Hz Native UI
              </span>
              <h4 className="text-xl font-bold mt-2">Fluid Interaction</h4>
              <p className="text-[11.5px] text-neutral-400 mt-1 max-w-[200px] mx-auto">
                Haptic response curves tuned for tactile thumb reach.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-center font-bold">
              Instant Biometric Pay
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-neutral-950 p-3 shadow-2xl border border-neutral-800 hidden sm:block">
          <div className="w-full h-full bg-neutral-900 rounded-2xl p-4 flex flex-col justify-between min-h-[340px] text-white">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
              <span>Pro Viewfinder</span>
              <span>RAW HDR</span>
            </div>
            <div className="my-auto relative flex items-center justify-center py-8">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400/80 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <span className="absolute top-2 right-2 text-[9px] font-mono text-amber-400">ISO 100 · 1/250s</span>
            </div>
            <div className="flex items-center justify-around pt-2 border-t border-white/10">
              <span className="w-7 h-7 rounded-full bg-white/20" />
              <span className="w-10 h-10 rounded-full bg-amber-400 shadow-md" />
              <span className="w-7 h-7 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Case Study Detail Page ──────────────────────────────
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.isEmpty) {
    notFound();
  }

  // More work projects (excluding current project and empty slot)
  const moreWork = ALL_PROJECTS.filter((p) => p.slug !== slug && !p.isEmpty).slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* ─── Top Sticky Header with VILEN DESIGN and Close (✕) ─── */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-neutral-200/80">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <LogoMarkSmall />

          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              target="_blank"
              className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/work"
              className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Work
            </Link>
            {/* Close Button (✕) — Returns back to Selected Work grid */}
            <Link
              href="/#work"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors ml-2"
              title="Close / Back to work"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Main Case Study Content Container (Matched to 1450px) ─── */}
      <main className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 flex flex-col gap-12 sm:gap-16">
        {/* ─── Project Title Header ─── */}
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Rounded Square Brand Icon */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md mt-1"
            style={{ background: project.iconGradient || "linear-gradient(135deg, #FF9900 0%, #146EB4 100%)" }}
          >
            <span className="text-[18px] sm:text-[22px] font-black">{project.index}</span>
          </div>

          <div className="flex-1">
            <h1 className="text-[26px] sm:text-[38px] font-bold tracking-tight text-neutral-900 leading-tight">
              {project.title}
            </h1>
            <p className="mt-1.5 text-[15px] sm:text-[17px] text-neutral-500 leading-relaxed">
              {project.heroSubtitle || project.blurb}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Hero Laptop Preview with Direct Live Link Button ─── */}
        <HeroLaptop project={project} />

        {/* ─── Modular Sections (Prepared for future Admin Panel) ─── */}
        {project.sections &&
          project.sections.map((section) => {
            if (section.id === "hero") return null;

            return (
              <article key={section.id} className="flex flex-col gap-4 scroll-mt-20" id={section.id}>
                {/* Section Header: Number & Title */}
                <div>
                  <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-neutral-400">
                    {section.number} {section.title}
                  </p>
                  {section.subtitle && (
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-neutral-800 mt-1">
                      {section.subtitle}
                    </h3>
                  )}
                  <p className="text-[14px] text-neutral-600 mt-1.5 leading-relaxed max-w-[760px]">
                    {section.description}
                  </p>
                </div>

                {/* Dynamic Visual Block for this Section */}
                <div className="mt-2">
                  {section.visualType === "ecommerce-grid" && <EcommerceGridCard />}
                  {section.visualType === "dashboard-metrics" && <DashboardMetricsCard />}
                  {section.visualType === "financial-table" && <FinancialTableCard />}
                  {section.visualType === "analytics-chart" && <AnalyticsChartCard />}
                  {section.visualType === "calendar-slots" && <CalendarSlotsCard />}
                  {section.visualType === "perspective-mockup" && <PerspectiveMockupCard project={project} />}
                  {section.visualType === "tokens-card" && <TokensCard />}
                  {section.visualType === "button-system" && <ButtonSystemCard />}
                  {section.visualType === "partner-grid" && <PartnerGridCard />}
                  {section.visualType === "chain-grid" && <ChainGridCard />}
                  {section.visualType === "personas" && <PersonasCard />}
                  {section.visualType === "logo-construction" && <LogoConstructionCard />}
                  {section.visualType === "color-ramp" && <ColorRampCard />}
                  {section.visualType === "typography-spec" && <TypographySpecCard />}
                  {section.visualType === "data-viz-volume" && <DataVizVolumeCard />}
                  {section.visualType === "mobile-showcase" && <MobileShowcaseCard />}
                </div>
              </article>
            );
          })}

        {/* ─── Bottom "More work" Row ─── */}
        <div className="pt-12 sm:pt-16 border-t border-neutral-200/80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-neutral-900">
              More work
            </h3>
            <Link
              href="/#work"
              className="text-[13px] font-medium text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>Back to all</span>
              <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {moreWork.map((item) => {
              const cardImage =
                item.slug === "amazon-marketplace"
                  ? "/projects/amazon_card.png"
                  : item.slug === "next-admin"
                  ? "/projects/nextadmin_card.png"
                  : item.slug === "midday-finance"
                  ? "/projects/midday_card.png"
                  : item.slug === "dub-analytics"
                  ? "/projects/dub_card.png"
                  : item.slug === "cal-booking"
                  ? "/projects/cal_card.png"
                  : null;

              return (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="group flex flex-col gap-2.5"
                >
                  <div className="w-full rounded-xl border border-neutral-200/80 overflow-hidden transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md aspect-[16/10] bg-white relative">
                    {cardImage ? (
                      <img
                        src={cardImage}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 select-none"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center p-4"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, ${item.color} 12%, white), color-mix(in srgb, ${item.color} 24%, white))`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg shadow-sm flex items-center justify-center text-white text-xs font-bold"
                          style={{ background: item.iconGradient || item.color }}
                        >
                          {item.index}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-neutral-800 group-hover:text-blue-600 transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] text-neutral-500 line-clamp-1">
                      {item.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
