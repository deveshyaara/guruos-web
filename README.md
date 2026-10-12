# GuruOS — Launch Website

> **"YOUR MACHINE. YOUR RULES."**  
> An Arch Linux-based desktop operating system featuring Hyprland, a native Rust/GTK4 desktop shell, dynamic workspaces, and an evolving Ask GURUOS AI-assisted workflow.

---

## 1. Overview

The **GuruOS Launch Website** is built using **Next.js 16 (App Router with Turbopack)**, **TypeScript**, and **Tailwind CSS**.

The visual identity follows **Fire Brutalism** — high-contrast black-and-white structural grids, hard drop shadows, crisp borders, and energetic fire-orange accents, reflecting the philosophy of Arch Linux and custom desktop engineering.

---

## 2. Architecture & File Structure

The project employs a clean separation of concerns between configuration, domain types, structured data collections, reusable atomic UI primitives, and layout sections:

```text
guruos-web/
├── public/
│   ├── icons/
│   └── screenshots/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global fonts, metadata, OpenGraph tags
│   │   ├── page.tsx           # Assembled page structure (Server Component)
│   │   ├── globals.css        # Tailwind CSS tokens & brutalist utilities
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── ui/                # Shared atomic brutalist primitives
│   │   │   ├── Button.tsx         # Polymorphic typed button / link
│   │   │   ├── StatusBadge.tsx    # 5-tier status taxonomy badge
│   │   │   └── SectionHeader.tsx  # Eyebrow, numbered title & description
│   │   │
│   │   ├── modals/            # Interactive portal dialogs
│   │   │   ├── ChecksumModal.tsx     # Cryptographic integrity & sha256 verification
│   │   │   ├── FullInstallModal.tsx  # 4-stage step-by-step installation guide
│   │   │   └── LaunchNotifyModal.tsx # Early-access notification modal
│   │   │
│   │   ├── icons/             # Custom SVG brand assets (e.g. SparkIcon)
│   │   │
│   │   ├── Navbar.tsx         # Sticky header with mobile drawer (Client)
│   │   ├── HeroSection.tsx    # Fire brutalist hero banner (Server)
│   │   ├── ProductIntro.tsx   # Editorial identity & philosophy (Server)
│   │   ├── ArchitectureSection.tsx # 4-layer system stack & 9 native items (Client)
│   │   ├── FeatureGrid.tsx    # Asymmetric 4-pillar capability cards (Server)
│   │   ├── DesktopShowcase.tsx # Live simulated desktop shell & Ask GURUOS HUD (Client)
│   │   ├── SystemRequirements.tsx # Technical specifications matrix (Server)
│   │   ├── DevelopmentStatus.tsx # Filterable 5-badge roadmap audit (Client)
│   │   ├── DownloadSection.tsx # Official ISO release panel with guards (Client)
│   │   ├── InstallationGuide.tsx # 4-step quickstart with full guide trigger (Client)
│   │   ├── CommunitySection.tsx # Open-source philosophy & links (Server)
│   │   ├── FAQSection.tsx     # Keyboard-accessible accordion (Client)
│   │   └── Footer.tsx         # Brutalist dark footer with native smooth scroll (Server)
│   │
│   ├── config/
│   │   └── siteConfig.ts      # Single source of truth for release info & links
│   │
│   ├── data/                  # Decoupled, typed content collections
│   │   ├── architectureData.ts # 4 system layers & 9 top panel components
│   │   ├── featuresData.ts     # Core capability pillars
│   │   ├── installationData.ts # Installation steps
│   │   ├── specificationsData.ts # System hardware & compatibility matrix
│   │   └── faqData.ts          # Complete FAQ entries
│   │
│   └── types/                 # Domain TypeScript interfaces
│       └── index.ts           # Status taxonomy, specs, features, releases
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 3. Rendering Strategy: Server vs. Client Components

To ensure optimal initial paint performance and minimal client bundle overhead, components are classified strictly by interactivity needs:

| Component | Type | Reason |
|---|---|---|
| `page.tsx` | **Server** | Root page assembly; zero hydration overhead |
| `HeroSection.tsx` | **Server** | Static hero layout and typography |
| `ProductIntro.tsx` | **Server** | Pure editorial content |
| `ArchitectureSection.tsx` | **Client** | Interactive layer selection tabs |
| `FeatureGrid.tsx` | **Server** | Data-driven static card grid |
| `DesktopShowcase.tsx` | **Client** | Interactive HUD workspace switching & chat simulation |
| `SystemRequirements.tsx` | **Server** | Data-driven static specifications matrix |
| `DevelopmentStatus.tsx` | **Client** | Search query filter & category tabs |
| `DownloadSection.tsx` | **Client** | Modal dialog triggers & copy-to-clipboard |
| `InstallationGuide.tsx` | **Client** | Full installation guide modal trigger |
| `CommunitySection.tsx` | **Server** | Pure content and external resource links |
| `FAQSection.tsx` | **Client** | Accessible accordion open/close state |
| `Footer.tsx` | **Server** | Pure layout with native `#` smooth scroll |

---

## 4. Single Source of Truth (`src/config/siteConfig.ts`)

All release details, download URLs, SHA-256 checksums, and external repository links are declared once in [`src/config/siteConfig.ts`](./src/config/siteConfig.ts):

- **Release Status:** `status: "development-preview"`
- **ISO Artifact:** `isoFileName: "guruos-0.1.0-dev-x86_64.iso"`
- **Architecture:** `architecture: "x86_64"`
- **Public Availability:** `isAvailable: false` (Safely prevents broken or fake downloads; redirects to early access notification dialog).

---

## 5. Status Taxonomy

GuruOS uses an honest 5-tier status taxonomy for all features:

1. **Implemented** (Emerald) — Fully built and verified.
2. **Experimental** (Orange) — Working prototype; active testing.
3. **In Progress** (Amber) — Under active development.
4. **Planned** (Zinc) — On the architecture roadmap.
5. **Unverified** (Red) — Not yet tested across heterogeneous hardware.

---

## 6. Development & Quality Commands

```bash
# Start local development server
npm run dev

# Run static analysis and linting (0 errors, 0 warnings)
npm run lint

# Build production bundle with Turbopack
npm run build

# Start production server
npm run start
```
