# GuruOS — Launch Website (Prototype)

> **"YOUR MACHINE. YOUR RULES."**  
> An Arch Linux-based desktop experience built around Hyprland, a native GTK4 shell, and an integrated AI assistant (Ask GURUOS).

---

## 1. Overview

This is the first prototype of the official **GuruOS Launch Website**, engineered using **Next.js 16 (Turbopack)**, **TypeScript**, and **Tailwind CSS v4**.

The visual identity follows **Fire Brutalism** — a collision of brutalist editorial typography, Linux developer culture, high-contrast black-and-white structural grids, and energetic fire-orange accents.

---

## 2. Quickstart

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `10+`

### Installation & Development
```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Production Build
```bash
# Build static / optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 3. Central Configuration (`src/config/siteConfig.ts`)

All release metadata, download targets, checksums, and external community links are centralized in [`src/config/siteConfig.ts`](./src/config/siteConfig.ts).

### How to configure real release URLs:
```typescript
// src/config/siteConfig.ts
export const siteConfig: SiteConfig = {
  // 1. Official Repository & Docs
  githubRepoUrl: "https://github.com/guruos/guruos",
  documentationUrl: "https://docs.guruos.org",
  
  // 2. Release Status & ISO Binary
  release: {
    productName: "GuruOS Desktop ISO",
    channel: "Prototype", // Switch to "Alpha" | "Beta" | "Stable"
    version: "v0.1.0-alpha",
    architecture: "x86_64",
    format: ".iso",
    // When the ISO is published, paste the direct URL here:
    isoDownloadUrl: "https://releases.guruos.org/guruos-x86_64.iso",
    // Cryptographic hash for verification:
    sha256Checksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    checksumUrl: "https://releases.guruos.org/guruos-x86_64.iso.sha256",
    releaseNotesUrl: "https://github.com/guruos/guruos/releases/tag/v0.1.0-alpha",
    fileSizeBytes: "2.4 GB",
  },

  // 3. Flip this boolean to true once the ISO is hosted:
  isIsoAvailable: true,
};
```

> **Note on Prototype Honesty:**  
> When `isIsoAvailable` is `false` (default), the download button gracefully switches to **"JOIN THE LAUNCH — GET EARLY ACCESS"**, opening a notification modal without faking non-existent downloads.

---

## 4. Replacing Mockups with Genuine Screenshots

The prototype distinguishes illustrative concept artwork with the label `[ILLUSTRATIVE DESKTOP MOCKUP // EARLY PROTOCOL]`.

When verified screenshots of the running desktop become available:
1. Save your screenshot in `public/screenshots/desktop-main.png`.
2. Open [`src/components/DesktopShowcase.tsx`](./src/components/DesktopShowcase.tsx) and [`src/components/HeroSection.tsx`](./src/components/HeroSection.tsx).
3. Replace the vector/ASCII window mockup container with Next.js `<Image />` referencing `/screenshots/desktop-main.png`.
4. Update the annotation badge to `[VERIFIED SYSTEM SCREENSHOT // V0.1]`.

---

## 5. Design System: Fire Brutalism

| Color | Hex | Purpose |
|---|---|---|
| **Pure White** | `#FFFFFF` | Primary page canvas & high-contrast surfaces |
| **Pitch Black** | `#0A0A0A` | Heavy typography, navigation borders, dark sections |
| **Fire Orange** | `#FF5A1F` | Primary accent, CTA buttons, active state highlights |
| **Flame Amber** | `#FF9B42` | Gradients, glow effects, secondary technical badges |
| **Soft Off-White** | `#F5F3EF` | Neutral cards, technical callouts, specs rows |

### Brutalist Characteristics
- **Borders:** `2px` and `3px` solid `#0A0A0A`.
- **Hard Drop Shadows:** `shadow-[4px_4px_0px_0px_#0A0A0A]` (`.brutal-shadow`).
- **Typography:** Space Grotesk (geometric editorial headings) and JetBrains Mono (technical code labels).
- **Motion:** Micro-interactions with zero sluggishness; full `prefers-reduced-motion` compliance.

---

## 6. Page Structure

- **Section 1: Navigation (`Navbar.tsx`)** — Sticky brutalist header, mobile drawer, anchor navigation.
- **Section 2: Hero (`HeroSection.tsx`)** — "BREAK THE DEFAULT", geometric fire sun, illustrative desktop composition.
- **Section 3: Product Intro (`ProductIntro.tsx`)** — Two-column editorial layout and 3 core philosophical pillars.
- **Section 4: Feature Grid (`FeatureGrid.tsx`)** — Asymmetric 4-card grid (GTK4 Shell, Hyprland, Ask GURUOS, Linux Freedom).
- **Section 5: Desktop Showcase (`DesktopShowcase.tsx`)** — Immersive dark shell + live simulated **Ask GURUOS HUD**.
- **Section 6: Download (`DownloadSection.tsx`)** — Official release panel, status guards, checksum dialog.
- **Section 7: Installation Guide (`InstallationGuide.tsx`)** — 4-step setup guide + full installation drawer modal.
- **Section 8: System Requirements (`SystemRequirements.tsx`)** — Honest technical audit matrix.
- **Section 9: Community & Source (`CommunitySection.tsx`)** — GitHub and open-source documentation gateway.
- **Section 10: FAQ (`FAQSection.tsx`)** — Keyboard-accessible accordion with 8 comprehensive answers.
- **Section 11: Footer (`Footer.tsx`)** — Brutalist footer, dynamic year, back-to-top button.
