/**
 * GuruOS Official Launch Website - Central Project Configuration
 * 
 * Factual source of truth for the GuruOS project.
 * 
 * When URLs or specifications are set to null or unset, the UI accurately reflects
 * the "DEVELOPMENT PREVIEW — PUBLIC RELEASE DETAILS TO BE CONFIGURED" state without
 * inventing fabricated releases, mirror links, or simulating fake downloads.
 */

export type FeatureStatus = 
  | 'Implemented' 
  | 'Experimental' 
  | 'In Progress' 
  | 'Planned' 
  | 'Unverified';

export interface FeatureItem {
  id: string;
  name: string;
  category: 'Desktop Shell' | 'Compositor' | 'System Base' | 'AI Workflow' | 'Packaging';
  status: FeatureStatus;
  description: string;
  details: string;
  hardwareDependent?: boolean;
}

export interface BuildPipelineInfo {
  builderTool: string;
  packageDefinitions: string;
  buildScript: string;
  reproducibilityStatus: string;
  internalIsoArtifact: string;
}

export interface ReleaseInfo {
  productName: string;
  channel: string;
  version: string | null;
  releaseDate: string | null;
  architecture: string;
  format: string;
  isoFileName: string | null;
  isoDownloadUrl: string | null;
  sha256Checksum: string | null;
  checksumUrl: string | null;
  releaseNotesUrl: string | null;
  fileSizeBytes: string | null;
}

export interface SiteConfig {
  // Brand Identity
  siteName: string;
  productName: string;
  tagline: string;
  headline: string;
  supportingHeadline?: string;
  supportingStatement: string;
  metaDescription: string;
  siteUrl: string;

  // Release and Distribution Configuration
  releaseStatus: string;
  releaseVersion: string | null;
  releaseDate: string | null;
  architecture: string;
  isoFileName: string | null;
  isoDownloadUrl: string | null;
  checksumUrl: string | null;
  sha256Checksum: string | null;
  sourceCodeUrl: string | null;
  releaseNotesUrl: string | null;
  documentationUrl: string | null;
  installationGuideUrl: string | null;
  communityUrl: string | null;

  // Community and Repository Links (explicit null or placeholders for release)
  githubRepoUrl: string | null;
  discussionsUrl: string | null;
  communityDiscordUrl: string | null;
  communityMatrixUrl: string | null;

  // Structured Release Helper
  release: ReleaseInfo;

  // Hardware Specifications (Explicitly null until verified)
  minimumRam: string | null;
  minimumStorage: string | null;
  supportedHardware: string | null;

  // External Utilities
  balenaEtcherUrl: string;
  rufusUrl: string;

  // Build Pipeline & Infrastructure
  buildPipeline: BuildPipelineInfo;

  // Granular Feature Matrix
  availableFeatures: FeatureItem[];

  // Convenience Flags & Notices
  isIsoAvailable: boolean;
  statusNotice: string;
}

export const siteConfig: SiteConfig = {
  // Brand Identity
  siteName: "GURUOS",
  productName: "GURUOS",
  tagline: "YOUR MACHINE. YOUR RULES.",
  headline: "BREAK THE DEFAULT.",
  supportingHeadline: "A DIFFERENT KIND OF LINUX.",
  supportingStatement: "An Arch-based desktop experience built around a native shell, dynamic workspaces, and an evolving AI-assisted workflow.",
  metaDescription: "GuruOS is a custom Arch Linux-based operating system with Hyprland, a native Rust desktop shell, and an experimental AI-assisted workflow.",
  siteUrl: "https://guruos.org",

  // Current Public-Release State
  releaseStatus: "DEVELOPMENT PREVIEW — PUBLIC RELEASE DETAILS TO BE CONFIGURED",
  releaseVersion: "0.1.0-dev",
  releaseDate: null, // Deliberately unset: no fabricated release date
  architecture: "x86_64",
  isoFileName: "guruos-0.1.0-dev-x86_64.iso", // Development ISO build artifact
  isoDownloadUrl: null, // Deliberately null: no public ISO URL hosted yet
  checksumUrl: null, // Deliberately null: uncomputed until public release signing
  sha256Checksum: null, // Checksum will be populated upon official image signing
  sourceCodeUrl: null, // Deliberately null: to be configured upon public repository launch
  releaseNotesUrl: null,
  documentationUrl: null, // Web guide is accessible in-app
  installationGuideUrl: null,
  communityUrl: null, // Deliberately null: to be configured upon official launch

  // Community and Repository Links
  githubRepoUrl: null, // To be configured upon public repository launch
  discussionsUrl: null,
  communityDiscordUrl: null,
  communityMatrixUrl: null,

  // Structured Release Metadata
  release: {
    productName: "GuruOS Desktop ISO",
    channel: "Development Preview",
    version: "0.1.0-dev",
    releaseDate: null,
    architecture: "x86_64",
    format: ".iso",
    isoFileName: "guruos-0.1.0-dev-x86_64.iso",
    isoDownloadUrl: null,
    sha256Checksum: null,
    checksumUrl: null,
    releaseNotesUrl: null,
    fileSizeBytes: null,
  },

  // Hardware Specifications (Deliberately null: no unverified claims)
  minimumRam: null,
  minimumStorage: null,
  supportedHardware: null,

  // External Flash Utilities
  balenaEtcherUrl: "https://etcher.balena.io",
  rufusUrl: "https://rufus.ie",

  // Build Pipeline & Infrastructure Metadata
  buildPipeline: {
    builderTool: "mkarchiso",
    packageDefinitions: "PKGBUILD",
    buildScript: "scripts/build-iso.sh",
    reproducibilityStatus: "Mostly rebuildable; complete reproducibility not yet established",
    internalIsoArtifact: "guruos-0.1.0-dev-x86_64.iso",
  },

  // Granular Feature Snapshot (Strictly matching Section 4)
  availableFeatures: [
    {
      id: "native-panel",
      name: "Native Desktop Panel",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Custom top panel written in Rust using GTK4, libadwaita, and gtk4-layer-shell.",
      details: "Integrates branding, Ask GURUOS input, dynamic workspace buttons, and system controls without web runtimes."
    },
    {
      id: "ask-guruos-input",
      name: "Ask GURUOS Input",
      category: "AI Workflow",
      status: "Implemented",
      description: "Native text-entry field positioned beside branding in the top panel.",
      details: "Pressing Enter initiates the desktop chat and system assistant workflow."
    },
    {
      id: "dynamic-workspaces",
      name: "Dynamic Workspaces",
      category: "Compositor",
      status: "Implemented",
      description: "Workspace buttons synchronized with Hyprland workspace state.",
      details: "Real-time updates via Hyprland IPC socket dispatchers."
    },
    {
      id: "network-control",
      name: "Network Control",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Panel network indicator and configuration launcher.",
      details: "Launches nm-connection-editor in the current development environment."
    },
    {
      id: "audio-control",
      name: "Audio Control",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Panel audio indicator and volume mixer launcher.",
      details: "Launches pavucontrol in the current development environment."
    },
    {
      id: "battery-discovery",
      name: "Battery Status",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Battery discovery and power state monitoring.",
      details: "Uses asynchronous UPower discovery over system D-Bus."
    },
    {
      id: "notifications",
      name: "Notification Center",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Desktop notification daemon and history panel.",
      details: "SwayNC is active and integrated in the current development environment."
    },
    {
      id: "local-ai-infra",
      name: "Local AI Infrastructure",
      category: "AI Workflow",
      status: "Experimental",
      description: "Development environment tested with Ollama and a separate GuruOS MCP service.",
      details: "Qwen2.5-3B-Instruct quantized model tested for local agent experimentation; exact capabilities and model availability depend on selected build and hardware configuration."
    },
    {
      id: "bluetooth-control",
      name: "Bluetooth Integration",
      category: "Desktop Shell",
      status: "In Progress",
      description: "Bluetooth panel indicator and pairing manager.",
      details: "Not fully available in the documented development environment because an active BlueZ service and expected management utilities were unavailable."
    },
    {
      id: "system-tray",
      name: "System Tray (StatusNotifierItem)",
      category: "Desktop Shell",
      status: "Planned",
      description: "Standard system tray for background application icons.",
      details: "Not implemented in the documented desktop-shell snapshot."
    },
    {
      id: "local-ai-hardware",
      name: "Local AI Hardware Performance",
      category: "AI Workflow",
      status: "Unverified",
      description: "Guaranteed offline model performance across arbitrary machines.",
      details: "Local AI model execution and hardware requirements are not guaranteed across diverse system configurations."
    },
    {
      id: "keyboard-input-behavior",
      name: "Physical Keyboard Input Verification",
      category: "Compositor",
      status: "Unverified",
      description: "Comprehensive physical keyboard-input validation on Wayland.",
      details: "Physical keyboard-input behavior has not been comprehensively verified through the available automated Wayland input-testing setup."
    },
    {
      id: "iso-reproducibility",
      name: "ISO Build Reproducibility",
      category: "Packaging",
      status: "In Progress",
      description: "Reproducible ISO creation via mkarchiso and PKGBUILD.",
      details: "The ISO build process has been reported as mostly rebuildable using scripts/build-iso.sh, but complete bit-for-bit reproducibility has not been established."
    },
    {
      id: "public-distribution",
      name: "Public Download & Official Mirrors",
      category: "Packaging",
      status: "Planned",
      description: "Publicly hosted ISO binaries, verified checksums, and official mirrors.",
      details: "A verified public download URL, official repository URL, release date, and installer procedure have not yet been supplied."
    }
  ],

  // Status Notice
  isIsoAvailable: false,
  statusNotice: "DEVELOPMENT PREVIEW — PUBLIC RELEASE DETAILS TO BE CONFIGURED. Development ISO artifact: guruos-0.1.0-dev-x86_64.iso (internal build).",
};
