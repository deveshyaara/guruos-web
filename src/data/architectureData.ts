import { ArchitectureLayer, PanelComponentItem } from "@/types";

export const architectureLayers: ArchitectureLayer[] = [
  {
    level: 1,
    name: "Operating-System Foundation",
    shortTitle: "Arch Linux Core",
    protocol: "Linux Kernel 6.x // Rolling Release",
    tag: "LAYER_01 // BASE",
    accent: "#0A0A0A",
    description:
      "Arch Linux provides the rolling-release Linux foundation. It gives technically curious users a minimal, transparent base with full access to standard pacman package management and the Arch User Repository (AUR).",
    disclaimer:
      "Architectural Clarity: GuruOS uses Arch Linux as an operating-system base for system customization and development. GuruOS does not promise to inherit every Arch Linux upstream configuration, repository policy, compatibility guarantee, or formal support arrangement.",
    components: [
      { label: "Kernel & Base", detail: "Arch Linux rolling-release (x86_64)" },
      { label: "Init & Service Layer", detail: "systemd init with system D-Bus" },
      { label: "Package System", detail: "Pacman package manager + AUR access" },
      { label: "Hardware Abstraction", detail: "UPower for battery, BlueZ (in dev) for BT" },
    ],
    flowTarget: "Hyprland / Wayland",
  },
  {
    level: 2,
    name: "Window Management & Display",
    shortTitle: "Hyprland / Wayland",
    protocol: "Wayland Protocol // wlroots",
    tag: "LAYER_02 // COMPOSITOR",
    accent: "#FF9B42",
    description:
      "Hyprland serves as the Wayland compositor, managing dynamic workspaces and fluid window tiling with zero screen tearing. Workspace buttons on the shell communicate directly with Hyprland's IPC socket.",
    disclaimer:
      "Compositor Note: Keyboard-driven tiling and dynamic workspaces are synchronized with Hyprland workspace state. Physical keyboard input behavior has not been comprehensively verified through the automated Wayland input-testing setup.",
    components: [
      { label: "Compositor", detail: "Hyprland dynamic tiling window manager" },
      { label: "Display Protocol", detail: "Wayland (no legacy X11 display server)" },
      { label: "IPC Mechanism", detail: "UNIX domain socket for event dispatching" },
      { label: "Workspace Model", detail: "Dynamic virtual workspaces with auto-cleanup" },
    ],
    flowTarget: "Native GTK4 Shell",
  },
  {
    level: 3,
    name: "Native Desktop Shell",
    shortTitle: "Native Rust GTK4 Shell",
    protocol: "GTK4 + libadwaita + gtk4-layer-shell",
    tag: "LAYER_03 // SHELL",
    accent: "#FF5A1F",
    description:
      "Written from scratch in Rust, the desktop shell renders a native top panel pinned via gtk4-layer-shell. It integrates project branding, workspace selectors, and essential desktop controls without heavy Electron or web runtimes.",
    disclaimer:
      "Environment Note: The prototype accurately represents this architecture without suggesting that every component offers identical functionality on every installation. For example, Bluetooth and system tray vary by environment.",
    components: [
      { label: "Language & Runtime", detail: "Rust (Memory safe, native machine code)" },
      { label: "Toolkit & Protocols", detail: "GTK4, libadwaita, and gtk4-layer-shell" },
      { label: "Primary Panel", detail: "Unified 9-element top desktop bar" },
      { label: "Notification Daemon", detail: "SwayNC integration for notification display" },
    ],
    flowTarget: "Desktop Controls & Ask GURUOS",
  },
  {
    level: 4,
    name: "AI-Assisted Workflow",
    shortTitle: "Ask GURUOS Workflow",
    protocol: "Native GTK Input → Chat Workflow Overlay",
    tag: "LAYER_04 // INTELLIGENCE",
    accent: "#FF5A1F",
    description:
      "Ask GURUOS is the desktop's AI-assisted interaction concept. A native GTK input field in the top panel triggers the chat interface upon pressing Enter, allowing natural language assistance and desktop interaction.",
    disclaimer:
      "Critical Prototype Distinction: The development setup has been tested with Ollama and a separate GuruOS MCP service using a Qwen2.5-3B-Instruct quantized model for local agent experimentation. We distinguish this experimental integration from a universally available, pre-bundled release feature. Do not expect that every ISO bundles the model or that every hardware configuration runs local models smoothly.",
    components: [
      { label: "Panel Trigger", detail: "Native GTK entry field with Enter key detection" },
      { label: "Interface Workflow", detail: "Floating chat window with context HUD" },
      { label: "Tested Dev Backends", detail: "Ollama runtime + standalone GuruOS MCP service" },
      { label: "Experimental Model", detail: "Qwen2.5-3B-Instruct quantized (tested in dev)" },
    ],
    flowTarget: "System Feedback & User Actions",
  },
];

export const panelItems: PanelComponentItem[] = [
  { index: 1, title: "GURUOS Branding", desc: "Project wordmark and flame emblem", status: "Implemented" },
  { index: 2, title: "Ask GURUOS Text Input", desc: "Native GTK input field; Enter triggers chat workflow", status: "Implemented" },
  { index: 3, title: "Dynamic Workspace Buttons", desc: "Real-time sync with Hyprland workspace state", status: "Implemented" },
  { index: 4, title: "Network Control", desc: "Launches nm-connection-editor in development setup", status: "Implemented" },
  { index: 5, title: "Audio Control", desc: "Launches pavucontrol in development setup", status: "Implemented" },
  { index: 6, title: "Bluetooth Indicator / Control", desc: "Incomplete in dev snapshot (BlueZ service not active)", status: "In Progress" },
  { index: 7, title: "Battery Status", desc: "Asynchronous UPower discovery via system D-Bus", status: "Implemented" },
  { index: 8, title: "Notifications", desc: "Integrated with active SwayNC notification daemon", status: "Implemented" },
  { index: 9, title: "Clock", desc: "System time with 12h/24h toggle and date HUD", status: "Implemented" },
];
