import { CoreFeaturePillar } from "@/types";

export const coreFeaturePillars: CoreFeaturePillar[] = [
  {
    num: "01",
    tag: "CORE ARCHITECTURE",
    title: "Native Desktop Shell",
    description:
      "A native Rust desktop shell using GTK4, libadwaita, and gtk4-layer-shell. Pins a custom 9-element top panel integrating project branding, workspaces, network, audio, battery, notifications, and system clock.",
    theme: "light",
    iconName: "LayoutGrid",
    techSpecs: ["Rust Application", "GTK4 + libadwaita", "gtk4-layer-shell"],
  },
  {
    num: "02",
    tag: "WAYLAND COMPOSITOR",
    title: "Hyprland Workspaces",
    description:
      "Hyprland provides smooth Wayland-based window management. Dynamic workspace buttons in the native top panel synchronize directly with Hyprland workspace state for a fluid keyboard-driven workflow.",
    theme: "dark",
    iconName: "Layers",
    techSpecs: ["Hyprland Compositor", "Wayland Protocol", "Dynamic Tiling"],
  },
  {
    num: "03",
    tag: "EXPERIMENTAL WORKFLOW",
    title: "Ask GURUOS",
    description:
      "An experimental AI-assisted desktop workflow. A native GTK input field in the panel triggers the chat workflow on Enter. Tested in development with Ollama, a separate GuruOS MCP service, and Qwen2.5-3B-Instruct.",
    theme: "orange",
    iconName: "Bot",
    techSpecs: ["GTK Entry Trigger", "Ollama Tested", "GuruOS MCP Service"],
  },
  {
    num: "04",
    tag: "SYSTEM BASE",
    title: "Arch Linux Foundation",
    description:
      "Arch Linux provides a rolling-release foundation for developers and power users. Provides full system transparency, standard pacman package management, and complete access to the Arch User Repository (AUR).",
    theme: "soft",
    iconName: "TerminalSquare",
    techSpecs: ["Arch Linux Core", "Pacman + AUR Access", "Rolling Release"],
  },
];
