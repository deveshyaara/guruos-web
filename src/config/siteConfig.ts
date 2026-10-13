import { 
  FeatureItem, 
  FeatureStatus, 
  BuildPipelineInfo, 
  ReleaseInfo, 
  KnownIssue, 
  ReferenceHardware 
} from "@/types";

export interface ModelConfig {
  name?: string;
  baseModel?: string;
  quantization?: string;
  format?: string;
  runtime: string;
  modelAlias: string;
  artifactName: string;
  manifestSha256: string;
  modelfileTemperature: number;
  modelfileOutputLimit: number;
  ollamaEndpoint: string;
  backendEndpoint: string;
  historicalModelNote: string;
}

export interface RustWorkspaceMember {
  name: string;
  status: FeatureStatus;
  description: string;
}

export interface SiteConfig {
  // Brand Identity
  siteName: string;
  productName: string;
  tagline: string;
  headline: string;
  supportingStatement: string;
  metaDescription: string;
  siteUrl: string;
  statusLabel: string;
  statusNotice: string;
  auditDate: string;

  // Authoritative Repository (Private)
  repositoryUrl: string;
  isRepositoryPrivate: boolean;
  mainCommit: string;
  onboardingCommit: string;
  documentationBaseUrl: string;

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
  isIsoAvailable: boolean;

  // External Links
  githubRepoUrl: string | null;
  discussionsUrl: string | null;
  communityDiscordUrl: string | null;
  communityMatrixUrl: string | null;
  balenaEtcherUrl: string;
  rufusUrl: string;

  // Structured Release Metadata
  release: ReleaseInfo;

  // Model & AI Runtime Configuration
  model: ModelConfig;

  // Developer Hardware Reference
  referenceHardware: ReferenceHardware;

  // Rust Workspace Structure (15 crates)
  rustWorkspace: RustWorkspaceMember[];

  // Build Pipeline & Infrastructure
  buildPipeline: BuildPipelineInfo;

  // Known GitHub Issues
  knownIssues: KnownIssue[];

  // Granular Feature Snapshot
  availableFeatures: FeatureItem[];

  // Hardware Specifications
  minimumRam: string | null;
  minimumStorage: string | null;
  supportedHardware: string | null;
}

export const siteConfig: SiteConfig = {
  // Brand Identity
  siteName: "GURUOS",
  productName: "GuruOS",
  tagline: "Your desktop. Your intelligence. Your control.",
  headline: "A different kind of desktop.",
  supportingStatement: "An experimental Linux desktop environment bringing local AI assistance directly into your workflow.",
  metaDescription: "GuruOS is an experimental Arch Linux desktop environment combining Hyprland on Wayland, a native Rust/GTK4 desktop shell, and a bounded local AI assistant.",
  siteUrl: "https://guruos.org",
  statusLabel: "EXPERIMENTAL · EARLY DEVELOPMENT",
  statusNotice: "EXPERIMENTAL · EARLY DEVELOPMENT (Audited: October 13, 2026). The source repository is private and no public ISO release is published yet. The documented ISO profile is a test-image foundation under active verification.",
  auditDate: "October 13, 2026",

  // Authoritative Repository Information
  repositoryUrl: "https://github.com/GuruArchitects/GuruOS",
  isRepositoryPrivate: true,
  mainCommit: "5a6e2cbbc279205f28abf2dea16fc289bf1fd053",
  onboardingCommit: "95db07ccaa915a08bcd06d51cb27c7409bba57c8",
  documentationBaseUrl: "https://github.com/GuruArchitects/GuruOS/blob/main",

  // Release and Distribution Configuration
  releaseStatus: "EXPERIMENTAL · EARLY DEVELOPMENT — ISO BUILD VERIFICATION IN PROGRESS",
  releaseVersion: "0.1.0-dev",
  releaseDate: null, // Deliberately null: no verified public release date
  architecture: "x86_64",
  isoFileName: "guruos-0.1.0-dev-x86_64.iso",
  isoDownloadUrl: null, // Deliberately null: no public ISO URL hosted yet
  checksumUrl: null,
  sha256Checksum: null, // Populated only upon verified image publication
  sourceCodeUrl: null, // Source repository is private
  releaseNotesUrl: null,
  documentationUrl: null,
  installationGuideUrl: "/install",
  communityUrl: null,
  isIsoAvailable: false,

  // External Community & Tool Links
  githubRepoUrl: null, // Private repository; public mirror to be announced
  discussionsUrl: null,
  communityDiscordUrl: null,
  communityMatrixUrl: null,
  balenaEtcherUrl: "https://etcher.balena.io",
  rufusUrl: "https://rufus.ie",

  // Structured Release Helper
  release: {
    productName: "GuruOS Test Image Foundation",
    channel: "Experimental Early Development",
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

  // Authoritative Model Specifications (Prompt Section 8 & Model contract)
  model: {
    name: "os-agent",
    baseModel: "Qwen/Qwen2.5-3B-Instruct",
    quantization: "Q4_K_M",
    format: "GGUF",
    runtime: "Ollama",
    modelAlias: "os-agent",
    artifactName: "Qwen2.5-3B-Instruct.Q4_K_M.gguf",
    manifestSha256: "0a7744dc91d4ea7d17eb11a797be9116024d4eb69bafb3fbf1aa281982ca482e",
    modelfileTemperature: 0,
    modelfileOutputLimit: 256,
    ollamaEndpoint: "http://127.0.0.1:11434",
    backendEndpoint: "http://127.0.0.1:8000",
    historicalModelNote: "Historical local development notes mention a Qwen3 1.7B quantized model; current repository default is Qwen2.5-3B-Instruct. Never mix their checksums.",
  },

  // Reference Developer Machine (Prompt Section 4 & Hardware requirements)
  referenceHardware: {
    deviceRole: "Known Developer Reference System",
    cpu: "AMD A8-7410 APU",
    cpuCores: 4,
    ramGb: 6.7,
    graphics: "AMD Radeon R5 Graphics (Integrated)",
    gpuAcceleration: "Unavailable (No CUDA / ROCm on reference machine)",
    wifiCard: "Realtek RTL8723BE 802.11bgn Wi-Fi Adapter",
    inferenceMode: "CPU-Only Inference",
    statusNotes: "Inference on this reference machine is CPU-only and has not been benchmarked sufficiently to make speed claims. System requirements remain under active evaluation.",
  },

  // 15 Rust Workspace Crates (Prompt Section 8)
  rustWorkspace: [
    { name: "hyprland-ipc", status: "Implemented", description: "Hyprland UNIX domain socket IPC event listener & client dispatcher" },
    { name: "shell-config", status: "Implemented", description: "Shared desktop shell styling, keybindings, and component schema configuration" },
    { name: "app-info", status: "Implemented", description: "Desktop entry parser (.desktop) and application indexer" },
    { name: "top-panel", status: "Implemented", description: "GTK4 layer-shell top panel hosting branding, Ask GURUOS, and status controls" },
    { name: "launcher", status: "In Progress", description: "Application launcher with search and category filtering" },
    { name: "quick-settings", status: "In Progress", description: "Native system settings menu (network, volume, display brightness)" },
    { name: "dock", status: "Planned", description: "Optional bottom application dock" },
    { name: "notifications", status: "Implemented", description: "SwayNC integration client and notification banner dispatcher" },
    { name: "settings", status: "In Progress", description: "System configuration application (display, theme, input devices)" },
    { name: "file-manager", status: "In Progress", description: "Lightweight GTK4 file browser prototype" },
    { name: "lockscreen", status: "Planned", description: "Wayland-native screen lock using PAM authentication" },
    { name: "shell-backend", status: "In Progress", description: "Backend integration daemon with Polkit authorization check (remediation pending)" },
    { name: "app-store", status: "Planned", description: "Software discovery and pacman/AUR package frontend" },
    { name: "first-boot", status: "In Progress", description: "Initial setup wizard for user creation, hardware profile, and AI download" },
    { name: "theme-manager", status: "Implemented", description: "GTK4 theme and high-contrast fire brutalist styling coordination" },
  ],

  // Build Pipeline & Infrastructure (Prompt Section 11 & CI reality)
  buildPipeline: {
    builderTool: "mkarchiso",
    packageDefinitions: "PKGBUILD",
    buildScript: "scripts/build-iso.sh",
    reproducibilityStatus: "Mostly rebuildable; complete reproducibility not yet established",
    internalIsoArtifact: "guruos-0.1.0-dev-x86_64.iso",
    lastCiRunId: "38157947896",
    lastCiRunDate: "October 11, 2026",
    lastCiRunStatus: "Failed at ISO build step",
    pythonTestCount: 44,
    pythonTestSuite: "test_phase2.py & test_phase7.py (separate from cargo test in scripts/test.sh)",
  },

  // Known GitHub Issues (Prompt Section 11)
  knownIssues: [
    {
      id: "issue-1",
      number: 1,
      title: "Shell-backend Polkit authorization hardening",
      category: "Security",
      status: "Remediating",
      description: "Non-functional Polkit authorization check in the shell-backend. Currently bounded by user-level execution, but requires remediation before privileged operations are enabled.",
      impact: "Privileged operations must not be routed through shell-backend until Polkit verification is functional.",
      workaroundOrMitigation: "Privileged actions deferred to native terminal/pacman workflows; AI tools remain strictly bounded to read-only developer commands.",
      issueUrl: "https://github.com/GuruArchitects/GuruOS/issues/1",
    },
    {
      id: "issue-2",
      number: 2,
      title: "Ask GURUOS workspace-switching mismatch",
      category: "Shell / UI",
      status: "Investigating",
      description: "Input hint in the UI suggests workspace switching via Ask GURUOS, but the current Phase 2 dispatcher does not implement that action in the approved tool registry.",
      impact: "AI assistant currently cannot switch workspaces directly through prompt dispatch.",
      workaroundOrMitigation: "Users switch workspaces via dynamic panel buttons or standard Hyprland keybindings (Super + 1..9).",
      issueUrl: "https://github.com/GuruArchitects/GuruOS/issues/2",
    },
    {
      id: "issue-3",
      number: 3,
      title: "Orphan or duplicated shell-common crate",
      category: "Architecture",
      status: "Open",
      description: "Duplication between shell-common and shell-config in the Rust workspace members list.",
      impact: "Build warnings and maintenance complexity across workspace dependencies.",
      workaroundOrMitigation: "Consolidate shared types into shell-config as single source of truth.",
      issueUrl: "https://github.com/GuruArchitects/GuruOS/issues/3",
    },
    {
      id: "issue-4",
      number: 4,
      title: "Project license decision",
      category: "Licensing",
      status: "Open",
      description: "No top-level LICENSE file is committed. Rust workspace declares GPL-3.0-or-later in Cargo.toml, while Python licensing status remains undeclared.",
      impact: "Public open-source redistribution terms remain to be formally declared by maintainers.",
      workaroundOrMitigation: "Project is presented under open-source principles while awaiting top-level license resolution.",
      issueUrl: "https://github.com/GuruArchitects/GuruOS/issues/4",
    },
    {
      id: "issue-5",
      number: 5,
      title: "Low-resource local AI performance benchmark",
      category: "Performance",
      status: "Investigating",
      description: "Local inference execution on low-memory / non-accelerated CPU setups (such as the AMD A8-7410 reference machine) needs systematic latency and memory footprint benchmarking.",
      impact: "Token generation latency on entry-level hardware has not been formally characterized.",
      workaroundOrMitigation: "The setup allows deferring or disabling local model downloads, preserving a responsive desktop environment.",
      issueUrl: "https://github.com/GuruArchitects/GuruOS/issues/5",
    },
  ],

  // Granular Feature Snapshot (Strictly matching prompt facts)
  availableFeatures: [
    {
      id: "native-panel",
      name: "Native Desktop Shell (Rust + GTK4)",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Custom top panel written in Rust using GTK4, libadwaita, and gtk4-layer-shell.",
      details: "15 workspace crates declared; pins unified 9-element top panel with branding, Ask GURUOS trigger, workspace indicators, and system controls."
    },
    {
      id: "ask-guruos-input",
      name: "Ask GURUOS Interaction Surface",
      category: "AI Workflow",
      status: "Implemented",
      description: "AI interaction surface built directly into the desktop panel rather than an external web app.",
      details: "GTK text-entry field triggers the chat overlay on Enter; communicates with local Python backend over HTTP port 8000."
    },
    {
      id: "local-ai-inference",
      name: "Local AI Inference (Ollama / Qwen2.5-3B)",
      category: "AI Workflow",
      status: "Experimental",
      description: "Ollama serves a locally configured language model (Qwen2.5-3B-Instruct.Q4_K_M.gguf under alias os-agent).",
      details: "Configured at temperature 0, 256 token output limit; tested on reference CPU without proprietary cloud dependencies."
    },
    {
      id: "bounded-developer-tools",
      name: "Bounded Developer Tools & Validation",
      category: "AI Workflow",
      status: "Implemented",
      description: "Structured request validation and an allow-listed tool registry constrain available operations.",
      details: "Dispatcher permits read-only developer actions (file search, file read, directory tree, git status, git diff, git log, service status, system stats). Reject unsupported actions."
    },
    {
      id: "dynamic-workspaces",
      name: "Hyprland Dynamic Workspaces (Wayland)",
      category: "Compositor",
      status: "Implemented",
      description: "Workspace buttons synchronized directly with Hyprland workspace state.",
      details: "Real-time updates via Hyprland UNIX domain socket IPC dispatchers. Physical keyboard input behavior remains under automated verification."
    },
    {
      id: "desktop-system-integration",
      name: "System Controls & D-Bus Integration",
      category: "Desktop Shell",
      status: "Implemented",
      description: "Network, audio, battery, and notification controls integrated into the shell.",
      details: "Network launches nm-connection-editor, audio launches pavucontrol, battery uses UPower over D-Bus, notifications run via SwayNC."
    },
    {
      id: "bluetooth-control",
      name: "Bluetooth Management Integration",
      category: "Desktop Shell",
      status: "In Progress",
      description: "Bluetooth panel indicator and pairing manager.",
      details: "Incomplete in the documented snapshot because active BlueZ service and expected management utilities were unavailable."
    },
    {
      id: "custom-installer-direction",
      name: "Custom Installation & First-Boot Workflow",
      category: "Packaging",
      status: "In Progress",
      description: "Planned guided OS installer and first-boot setup process, currently in early development.",
      details: "Interactive browser planner available at /install; disk-writing native installer is planned and under active development."
    },
    {
      id: "iso-build-verification",
      name: "ArchISO Test Image & Image Building",
      category: "Packaging",
      status: "In Progress",
      description: "ArchISO test-image foundation built with mkarchiso and scripts/build-iso.sh.",
      details: "Recent GitHub Actions build run (38157947896 on Oct 11, 2026) failed at ISO build step; full reproducible build pipeline requires verification."
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
      id: "cross-hardware-benchmarks",
      name: "Cross-Hardware Performance Matrix",
      category: "AI Workflow",
      status: "Unverified",
      description: "Guaranteed offline inference performance across diverse CPU/GPU configurations.",
      details: "Inference has been run CPU-only on reference AMD A8-7410; broader hardware verification is pending."
    }
  ],

  // Hardware Specifications (Deliberately null: no unverified official claims)
  minimumRam: null,
  minimumStorage: null,
  supportedHardware: null,
};
