export interface CaseStudySection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  visualType: 
    | "laptop-hero"
    | "ecommerce-grid"
    | "dashboard-metrics"
    | "financial-table"
    | "analytics-chart"
    | "calendar-slots"
    | "tokens-card"
    | "button-system"
    | "partner-grid"
    | "chain-grid"
    | "perspective-mockup"
    | "logo-construction"
    | "color-ramp"
    | "typography-spec"
    | "data-viz-volume"
    | "personas"
    | "mobile-showcase";
  caption?: string;
  image?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  blurb: string;
  company: string;
  color: string;
  hue: number;
  tags: string[];
  liveUrl?: string;
  previewType?: "amazon" | "nextadmin" | "midday" | "dub" | "cal";
  isEmpty?: boolean;
  heroSubtitle?: string;
  iconGradient?: string;
  sections?: CaseStudySection[];
}

export const PROJECTS: ProjectItem[] = [
  // ─── Project 1: Amazon Marketplace & E-Commerce Web App ───
  {
    id: "amazon-marketplace",
    slug: "amazon-marketplace",
    index: "01",
    company: "Amazon Marketplace",
    title: "Amazon Marketplace & E-Commerce App",
    blurb: "Full-scale multi-category retail platform with live search, product filtering, cart drawer & Stripe checkout.",
    heroSubtitle: "Next.js App Router, Tailwind CSS, Stripe API, product catalog filtering, ratings, and responsive mobile storefront.",
    liveUrl: "https://amazon-clone-seven-nu.vercel.app",
    color: "#FF9900",
    hue: 35,
    tags: ["Next.js", "React", "E-Commerce", "Tailwind CSS", "Stripe"],
    previewType: "amazon",
    iconGradient: "linear-gradient(135deg, #FF9900 0%, #146EB4 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "An enterprise-scale e-commerce web application engineered to emulate Amazon's multi-category browsing, deals carousel, dynamic search bar, cart persistence, and Stripe checkout pipeline.",
        visualType: "laptop-hero",
      },
      {
        id: "architecture",
        number: "01",
        title: "Storefront Architecture",
        subtitle: "Multi-Category Product Feed & Filtering",
        description: "Engineered with Next.js Server Components for sub-second product hydration. Supports deep category filtering across Electronics, Fashion, Home, and Today's Deals with dynamic price filtering.",
        visualType: "ecommerce-grid",
      },
      {
        id: "cart-system",
        number: "02",
        title: "Cart & Checkout Flow",
        subtitle: "Real-Time Cart Calculation & Stripe Pipeline",
        description: "Optimistic UI state updates for immediate 'Add to Cart' feedback, quantity increments, tax calculation, and seamless integration with Stripe Checkout sessions.",
        visualType: "button-system",
      },
      {
        id: "design-system",
        number: "03",
        title: "Retail Design System",
        subtitle: "High-Density Component Hierarchy",
        description: "Amazon-standard visual hierarchy with star ratings, Prime badges, discount countdown tags, delivery location selectors, and responsive header search bars.",
        visualType: "tokens-card",
      },
      {
        id: "production-ready",
        number: "04",
        title: "Production Deployment",
        subtitle: "Live Vercel Edge Hosting",
        description: "Deployed with global edge caching and asset optimization to guarantee lightning-fast load times under high traffic loads.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Project 2: NextAdmin — Enterprise SaaS & Analytics Dashboard ───
  {
    id: "next-admin",
    slug: "next-admin",
    index: "02",
    company: "NextAdmin",
    title: "NextAdmin — Enterprise SaaS Dashboard",
    blurb: "Full-stack SaaS analytics dashboard with interactive charts, financial KPIs, user tables, and dark mode.",
    heroSubtitle: "Next.js 15, TypeScript, Tailwind CSS, ApexCharts, real-time metrics, and customizable admin portal layouts.",
    liveUrl: "https://demo.nextadmin.co",
    color: "#3C50E0",
    hue: 235,
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "ApexCharts", "SaaS"],
    previewType: "nextadmin",
    iconGradient: "linear-gradient(135deg, #3C50E0 0%, #10B981 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "A complete, modern administration platform built for SaaS businesses. Features revenue analytics, conversion tracking, team permission controls, and real-time transaction reporting.",
        visualType: "laptop-hero",
      },
      {
        id: "analytics",
        number: "01",
        title: "Revenue & KPI Analytics",
        subtitle: "Real-Time Data Visualization",
        description: "Integrated with interactive ApexCharts supporting daily, weekly, and monthly intervals. Renders revenue streams, user acquisition curves, and server load monitoring.",
        visualType: "dashboard-metrics",
      },
      {
        id: "tables",
        number: "02",
        title: "Data Table Architecture",
        subtitle: "High-Density Records & Filtering",
        description: "Performant virtualized data tables capable of sorting, multi-column search, batch actions, and export to CSV/PDF with responsive mobile cards.",
        visualType: "partner-grid",
      },
      {
        id: "theme-system",
        number: "03",
        title: "Theme & Component Tokens",
        subtitle: "Deep Dark & High-Contrast Light Modes",
        description: "Custom-tuned CSS variables ensuring seamless contrast switching between crisp studio white and deep obsidian dark mode.",
        visualType: "tokens-card",
      },
      {
        id: "live-deployment",
        number: "04",
        title: "Live Production App",
        subtitle: "Active Enterprise Portal",
        description: "Fully interactive demo showcasing real-time routing, toast notifications, profile management, and billing dashboards.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Project 3: Midday — Modern Financial OS & Invoicing ───
  {
    id: "midday-finance",
    slug: "midday-finance",
    index: "03",
    company: "Midday.ai",
    title: "Midday — Financial OS & Invoicing",
    blurb: "All-in-one business finance engine with automated invoicing, profit & loss analytics, and glassmorphism UI.",
    heroSubtitle: "Next.js, Supabase, Tailwind CSS, Server Actions, financial APIs, and ultra-smooth financial micro-interactions.",
    liveUrl: "https://midday.ai",
    color: "#7C3AED",
    hue: 270,
    tags: ["Fintech", "Next.js", "Supabase", "Invoicing", "Glassmorphism"],
    previewType: "midday",
    iconGradient: "linear-gradient(135deg, #18181B 0%, #7C3AED 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "A developer-first financial operating system unifying real-time bank reconciliation, automated tax calculations, customized invoice generation, and cashflow projections.",
        visualType: "laptop-hero",
      },
      {
        id: "invoicing",
        number: "01",
        title: "Automated Invoicing Engine",
        subtitle: "Dynamic PDF Generation & Payment Tracking",
        description: "Built-in invoicing suite supporting custom branding, multi-currency invoices, recurring billings, and automatic Stripe/Wise payment settlement links.",
        visualType: "financial-table",
      },
      {
        id: "glass-ui",
        number: "02",
        title: "Dark Glassmorphism Interface",
        subtitle: "Tactile Micro-Interactions",
        description: "Sophisticated frosted glass aesthetic utilizing backdrop filters, dynamic glow shaders, and spring physics for fluid menu and transaction inspection.",
        visualType: "tokens-card",
      },
      {
        id: "security",
        number: "03",
        title: "Bank-Grade Encryption",
        subtitle: "Supabase & Row Level Security",
        description: "End-to-end encrypted financial data storage with strict Row Level Security (RLS) policies guaranteeing total isolation between organization accounts.",
        visualType: "button-system",
      },
      {
        id: "live-showcase",
        number: "04",
        title: "Live Platform Showcase",
        subtitle: "Production Financial Software",
        description: "Explore the live platform utilized daily by thousands of startups and independent software creators worldwide.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Project 4: Dub.co — Marketing Analytics & Link Infrastructure ───
  {
    id: "dub-analytics",
    slug: "dub-analytics",
    index: "04",
    company: "Dub.co",
    title: "Dub.co — Marketing Analytics Platform",
    blurb: "Real-time link management platform with geographic conversion tracking, custom domains, and QR engine.",
    heroSubtitle: "Next.js, Upstash Redis, Framer Motion, geographic map tracking, and sub-millisecond click analytics.",
    liveUrl: "https://dub.co",
    color: "#0284C7",
    hue: 200,
    tags: ["Analytics", "Next.js", "Redis", "Framer Motion", "Geo Tracking"],
    previewType: "dub",
    iconGradient: "linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "An open-source link management and marketing attribution platform delivering sub-10ms redirection speed, real-time click heatmaps, and customizable branded domains.",
        visualType: "laptop-hero",
      },
      {
        id: "geo-analytics",
        number: "01",
        title: "Real-Time Geo Attribution",
        subtitle: "Interactive World Heatmaps",
        description: "Global traffic analysis visualizing referrer channels, device categories (mobile, desktop, tablet), operating systems, and top geographic regions with live updates.",
        visualType: "analytics-chart",
      },
      {
        id: "qr-engine",
        number: "02",
        title: "Dynamic QR Code Engine",
        subtitle: "Vector SVG & PNG Export",
        description: "In-browser high-resolution QR code generator supporting custom brand logos, color gradients, error correction levels, and scannable tracking codes.",
        visualType: "chain-grid",
      },
      {
        id: "edge-cache",
        number: "03",
        title: "Edge Caching & Low-Latency API",
        subtitle: "Serverless Upstash Redis",
        description: "Edge middleware caching ensuring redirections occur instantaneously at the edge closest to the visitor without hitting the primary origin database.",
        visualType: "tokens-card",
      },
      {
        id: "live-app",
        number: "04",
        title: "Production System",
        subtitle: "Active Enterprise Analytics Engine",
        description: "Serving hundreds of millions of link clicks every month for leading modern tech brands.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Project 5: Cal.com — Interactive Scheduling & Booking Platform ───
  {
    id: "cal-booking",
    slug: "cal-booking",
    index: "05",
    company: "Cal.com",
    title: "Cal.com — Scheduling Infrastructure",
    blurb: "Complex interactive appointment booking platform with automatic timezone routing and calendar synchronization.",
    heroSubtitle: "React, Next.js, Framer Motion, fluid appointment reservation, and multi-tenant calendar engine.",
    liveUrl: "https://cal.com",
    color: "#2563EB",
    hue: 220,
    tags: ["Scheduling", "React", "Next.js", "Timezone Routing", "Animations"],
    previewType: "cal",
    iconGradient: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "An open scheduling infrastructure for individuals and teams. Eliminates back-and-forth emails by providing real-time calendar availability, custom booking questions, and automated video room generation.",
        visualType: "laptop-hero",
      },
      {
        id: "slot-picker",
        number: "01",
        title: "Dynamic Slot Picker Engine",
        subtitle: "Timezone Normalization & Conflict Prevention",
        description: "Sophisticated calendar algorithm calculating available overlapping slots across multiple organizers in real-time, accounting for daylight savings and custom working hours.",
        visualType: "calendar-slots",
      },
      {
        id: "motion-ux",
        number: "02",
        title: "Fluid Motion Interaction",
        subtitle: "Framer Motion State Transitions",
        description: "Smooth sliding transitions between month selection, time pickers, and attendee confirmation steps, optimized for seamless finger ergonomics on touch devices.",
        visualType: "button-system",
      },
      {
        id: "integrations",
        number: "03",
        title: "Multi-Calendar Integration",
        subtitle: "Google Calendar, Outlook & Zoom",
        description: "Bi-directional synchronization preventing double bookings by querying connected Google Calendar, Office 365, and Apple iCloud APIs in parallel.",
        visualType: "partner-grid",
      },
      {
        id: "live-product",
        number: "04",
        title: "Live Production Platform",
        subtitle: "Global Scheduling Infrastructure",
        description: "Powering millions of meetings every month for global businesses and creators.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Project 6: Empty Card (As requested: "6 number jei card thakbe atay kiso dio na") ───
  {
    id: "empty-slot",
    slug: "empty-slot",
    index: "06",
    company: "",
    title: "",
    blurb: "",
    color: "#ffffff",
    hue: 0,
    tags: [],
    isEmpty: true,
  },
];

export const ARCHIVE_PROJECTS: ProjectItem[] = [
  // ─── Archive 1: LI.FI AI Design System ───
  {
    id: "lifi-design-system",
    slug: "lifi-design-system",
    index: "07",
    company: "LI.FI Protocol",
    title: "LI.FI AI Design System",
    blurb: "Token-first system for a cross-chain protocol, expanded with AI.",
    heroSubtitle: "Token-first multi-chain design system engineered with design tokens, Figma variables, responsive components, and automated code handoff.",
    liveUrl: "https://li.fi",
    color: "#805AD5",
    hue: 270,
    tags: ["Design System", "Tokens", "Figma", "Web3", "AI Workflow"],
    iconGradient: "linear-gradient(135deg, #7928CA 0%, #FF0080 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "A comprehensive, multi-platform token system built for LI.FI's cross-chain routing infrastructure. Powering seamless swaps across 25+ EVM and non-EVM blockchains.",
        visualType: "laptop-hero",
      },
      {
        id: "tokens",
        number: "01",
        title: "Tokens & Foundations",
        subtitle: "Design Tokens Generated from Code Tokens",
        description: "Semantic design tokens synchronizing color palettes, typography scales, spacing units, and radius tokens bi-directionally between Figma variables and CSS tokens.",
        visualType: "tokens-card",
      },
      {
        id: "button-system",
        number: "02",
        title: "Interactive Button Architecture",
        subtitle: "Comprehensive State Machine & Variant Matrix",
        description: "Pixel-perfect buttons supporting 5 visual hierarchy tiers (Primary, Secondary, Ghost, Destructive, Glow), interactive states (Hover, Focus, Pressed, Loading spinner), and flexible icon slots.",
        visualType: "button-system",
      },
      {
        id: "partner-grid",
        number: "03",
        title: "Ecosystem Integration",
        subtitle: "Partner Protocol & DEX Hierarchy",
        description: "Modular integration badges for 30+ leading liquidity protocols including Uniswap, Stargate, SushiSwap, Connext, Hop, Across, and Circle CCTP.",
        visualType: "partner-grid",
      },
      {
        id: "chain-grid",
        number: "04",
        title: "Multi-Chain Coverage",
        subtitle: "25+ Blockchains Supported Out-of-the-Box",
        description: "Optimized vector badges and network identifiers across Ethereum, Arbitrum, Optimism, Polygon, Solana, Base, BNB Chain, Avalanche, and more.",
        visualType: "chain-grid",
      },
      {
        id: "personas",
        number: "05",
        title: "User Personas & Archetypes",
        subtitle: "Tailored Experiences for Traders, Integrators & Creators",
        description: "In-depth user research defining workflows for high-frequency DeFi traders, protocol integration engineers, and retail crypto enthusiasts.",
        visualType: "personas",
      },
      {
        id: "color-system",
        number: "06",
        title: "Full-Spectrum Palette",
        subtitle: "Accessible High-Contrast Ramp",
        description: "WCAG AAA accessible color scales across Grey, Indigo, Purple, Accent, Emerald, and Amber hues, tested under strict dark and light mode contrast ratios.",
        visualType: "color-ramp",
      },
      {
        id: "live-deployment",
        number: "07",
        title: "Live Production Platform",
        subtitle: "LI.FI Cross-Chain Routing Engine",
        description: "Explore the live protocol processing billions in multi-chain liquidity across global networks.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Archive 2: Jumper.xyz Branding ───
  {
    id: "jumper",
    slug: "jumper",
    index: "08",
    company: "Jumper.xyz",
    title: "Jumper.xyz Branding",
    blurb: "LI.FI's consumer exchange, spun up as its own brand.",
    heroSubtitle: "Complete brand identity, custom typography system, isometric logo mark construction, and cross-chain volume visualization.",
    liveUrl: "https://jumper.xyz",
    color: "#7B61FF",
    hue: 250,
    tags: ["Brand Identity", "Design System", "Web3", "Typography", "Data Viz"],
    iconGradient: "linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Jumper is LI.FI's consumer-facing cross-chain liquidity aggregator. The brand was created from zero — establishing an energetic, trustworthy aesthetic that simplifies complex bridge operations.",
        visualType: "laptop-hero",
      },
      {
        id: "logo",
        number: "01",
        title: "Logo & Construction",
        subtitle: "Geometric Precision & Motion-Ready Mark",
        description: "The Jumper chevron mark is built on an isometric grid, symbolizing the bridge leap between disparate blockchain networks with dynamic forward momentum.",
        visualType: "logo-construction",
      },
      {
        id: "color",
        number: "02",
        title: "Color Ramp",
        subtitle: "Deep Obsidian, Cosmic Indigo & Radiant Purple",
        description: "A nocturnal color space calibrated for crypto native interfaces with electric highlights that command immediate attention on active swap buttons.",
        visualType: "color-ramp",
      },
      {
        id: "typography",
        number: "03",
        title: "Typography System",
        subtitle: "Urbanist Display & Inter High-Density Interface",
        description: "Pairing the architectural geometric geometry of Urbanist for commanding headlines with the crisp legibility of Inter for high-density token tickers and slippage rates.",
        visualType: "typography-spec",
      },
      {
        id: "data-viz",
        number: "04",
        title: "Data Visualization",
        subtitle: "$2.7B+ Processed Cross-Chain Volume",
        description: "High-contrast charts visualizing exponential transaction volumes, liquidity pool depths, and fee savings across competing routes.",
        visualType: "data-viz-volume",
      },
      {
        id: "live-deployment",
        number: "05",
        title: "Live Production App",
        subtitle: "Jumper.xyz Consumer Exchange",
        description: "Experience the live exchange powering frictionless cross-chain token swaps with real-time bridge routing.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Archive 3: Cake Web & App ───
  {
    id: "cake",
    slug: "cake",
    index: "09",
    company: "Cake Web & App",
    title: "Cake Web & App",
    blurb: "Co-founded. Brand, web, and native iOS.",
    heroSubtitle: "Co-founded consumer banking & lifestyle experience. Complete brand system, native SwiftUI iOS app, and high-conversion web platform.",
    liveUrl: "https://cake.com",
    color: "#FF6B35",
    hue: 20,
    tags: ["Founder", "iOS App", "Brand", "SwiftUI", "Fintech"],
    iconGradient: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Cake re-imagined everyday personal finance for next-generation digital natives. Led end-to-end design from seed stage brand identity to production iOS app.",
        visualType: "laptop-hero",
      },
      {
        id: "mobile-ux",
        number: "01",
        title: "Native iOS Architecture",
        subtitle: "Fluid 120Hz SwiftUI Micro-Interactions",
        description: "Custom gesture-driven card carousels, haptic feedback on balance checks, and instant biometric authorization for frictionless everyday spending.",
        visualType: "mobile-showcase",
      },
      {
        id: "brand-identity",
        number: "02",
        title: "Warm Human Brand Language",
        subtitle: "Vibrant Coral & High-Impact Warm Neutrals",
        description: "Departed from cold traditional banking blues in favor of warm, celebratory tones and inviting typography that make finance feel accessible and delightful.",
        visualType: "tokens-card",
      },
      {
        id: "growth-metrics",
        number: "03",
        title: "Product Growth & Scale",
        subtitle: "Over 50K Active Users at Launch",
        description: "Maintained a 4.9-star App Store rating, driving organic viral acquisition via personalized shareable referral cards and savings milestones.",
        visualType: "dashboard-metrics",
      },
      {
        id: "live-deployment",
        number: "04",
        title: "Platform Experience",
        subtitle: "Award-Winning Mobile Application",
        description: "Designed from ground up with obsessive attention to craft, typography, and human delight.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Archive 4: Camera Awesome ───
  {
    id: "camera-awesome",
    slug: "camera-awesome",
    index: "10",
    company: "SmugMug",
    title: "Camera Awesome",
    blurb: "Award-winning camera app for SmugMug.",
    heroSubtitle: "Groundbreaking mobile photography app with independent focus and exposure targets, real-time GPU filters, and over 30 million downloads.",
    liveUrl: "https://smugmug.com",
    color: "#FF8C42",
    hue: 30,
    tags: ["iOS", "Photography", "Consumer", "Mobile UX", "SmugMug"],
    iconGradient: "linear-gradient(135deg, #FF8C42 0%, #E65100 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Designed the flagship mobile camera application for SmugMug. Camera Awesome revolutionized iPhone photography by introducing independent focus and exposure targets, rapid burst shooting, and non-destructive image processing.",
        visualType: "laptop-hero",
      },
      {
        id: "viewfinder-ux",
        number: "01",
        title: "Pro Viewfinder UX",
        subtitle: "Independent Focus & Exposure Reticles",
        description: "Allowed photographers to lock focus on the subject with a 2-finger tap while adjusting exposure on backlighting independently — an industry first on iOS.",
        visualType: "mobile-showcase",
      },
      {
        id: "filter-engine",
        number: "02",
        title: "Real-Time GPU Filter Engine",
        subtitle: "Zero-Latency Color Grading",
        description: "Custom OpenGL/CoreImage shader filters engineered for instant preview without viewfinder frame drops, featuring 'The Awesomize Button' for intelligent 1-tap tonal correction.",
        visualType: "tokens-card",
      },
      {
        id: "app-store-scale",
        number: "03",
        title: "Global Reach & Accolades",
        subtitle: "30M+ Downloads & #1 Overall App Store Ranking",
        description: "Featured globally by Apple in keynote presentations and App of the Week showcases across 50+ countries with over 30 million cumulative downloads.",
        visualType: "dashboard-metrics",
      },
      {
        id: "live-deployment",
        number: "04",
        title: "Award-Winning Legacy",
        subtitle: "Benchmark in Mobile Photography",
        description: "One of the most celebrated photography applications in iOS history.",
        visualType: "perspective-mockup",
      },
    ],
  },

  // ─── Additional Portfolio Works ───
  {
    id: "paypal",
    slug: "paypal",
    index: "11",
    company: "PayPal",
    title: "PayPal Assembly Framework",
    blurb: "Every product team built one app from one file.",
    heroSubtitle: "Enterprise design system unifying hundreds of product teams across web, iOS, and Android at global PayPal scale.",
    liveUrl: "https://paypal.com",
    color: "#0070BA",
    hue: 230,
    tags: ["Fintech", "Design systems", "iOS", "Android", "Enterprise"],
    iconGradient: "linear-gradient(135deg, #0070BA 0%, #003087 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "PayPal Assembly unified over 80 distributed cross-functional feature teams under a single, highly disciplined multi-brand component library.",
        visualType: "laptop-hero",
      },
      {
        id: "assembly-tokens",
        number: "01",
        title: "Assembly Design Tokens",
        subtitle: "Universal Multi-Platform Token Engine",
        description: "Automated distribution of semantic color tokens, elevation models, and localized accessibility standards across iOS Swift, Android Kotlin, and Web React.",
        visualType: "tokens-card",
      },
      {
        id: "component-grid",
        number: "02",
        title: "Unified Component Library",
        subtitle: "Zero-Defect Financial Standards",
        description: "High-density transactional components guaranteed to conform to strict financial compliance, multi-currency formatting, and internationalization.",
        visualType: "button-system",
      },
    ],
  },
  {
    id: "paypal-app",
    slug: "paypal-app",
    index: "12",
    company: "PayPal",
    title: "PayPal Consumer App",
    blurb: "Screens from the PayPal consumer app.",
    heroSubtitle: "Flagship mobile consumer wallet experience serving 400M+ active accounts globally.",
    liveUrl: "https://paypal.com",
    color: "#003087",
    hue: 240,
    tags: ["Fintech", "iOS", "Android", "Product design"],
    iconGradient: "linear-gradient(135deg, #003087 0%, #0070BA 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Redesigned core mobile checkout and peer-to-peer sending workflows to reduce cognitive load and accelerate transaction completion speed.",
        visualType: "laptop-hero",
      },
      {
        id: "mobile-wallet",
        number: "01",
        title: "Streamlined Mobile Wallet",
        subtitle: "Zero-Friction Payment Routing",
        description: "Card management, dynamic QR payments, and instant cashout flows engineered with fluid spring animations.",
        visualType: "mobile-showcase",
      },
    ],
  },
  {
    id: "stargazer-wallet",
    slug: "stargazer-wallet",
    index: "13",
    company: "Constellation",
    title: "Stargazer Multi-Chain Wallet",
    blurb: "A multi-chain wallet, rebranded and rebuilt.",
    heroSubtitle: "Browser extension & mobile wallet for DAG & ERC-20 assets with biometric authorization.",
    liveUrl: "https://constellationnetwork.io",
    color: "#6B4EFF",
    hue: 260,
    tags: ["Web3", "Brand", "Design system", "Wallet"],
    iconGradient: "linear-gradient(135deg, #6B4EFF 0%, #8E2DE2 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Rebranded and rebuilt Constellation's flagship cryptocurrency wallet supporting multi-chain token swaps, NFT storage, and seamless dApp connectivity.",
        visualType: "laptop-hero",
      },
      {
        id: "wallet-ui",
        number: "01",
        title: "High-Security Key Management",
        subtitle: "Biometric & Hardware Signer Integration",
        description: "Engineered elegant seed phrase backup flows, Ledger hardware wallet synchronization, and real-time gas price estimation.",
        visualType: "tokens-card",
      },
    ],
  },
  {
    id: "the-husl",
    slug: "the-husl",
    index: "14",
    company: "HUSL",
    title: "The HUSL Music NFT Platform",
    blurb: "A blockchain record label, built as a DApp.",
    heroSubtitle: "Decentralized music rights marketplace connecting global recording artists directly with fans.",
    liveUrl: "https://thehusl.io",
    color: "#E91E8C",
    hue: 320,
    tags: ["Web3", "NFT", "Web", "Music"],
    iconGradient: "linear-gradient(135deg, #E91E8C 0%, #FF0080 100%)",
    sections: [
      {
        id: "hero",
        number: "00",
        title: "Overview",
        description: "Built the web application for the revolutionary blockchain-based music label, featuring streaming music previews, audio-reactive NFT art, and automated royalty distribution.",
        visualType: "laptop-hero",
      },
      {
        id: "audio-player",
        number: "01",
        title: "Audio-Reactive Web3 Player",
        subtitle: "WebGL Audio Visualizer & Minting Pipeline",
        description: "Interactive waveforms synced to audio buffers, allowing collectors to preview exclusive music tracks and mint limited edition releases with 1 click.",
        visualType: "analytics-chart",
      },
    ],
  },
];

export const ALL_PROJECTS: ProjectItem[] = [...PROJECTS, ...ARCHIVE_PROJECTS];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

