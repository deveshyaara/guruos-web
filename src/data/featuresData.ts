import { CoreFeaturePillar } from "@/types";

export const coreFeaturePillars: CoreFeaturePillar[] = [
  {
    num: "01",
    tag: "NATIVE DESKTOP SHELL",
    title: "Rust & GTK4 Architecture",
    description:
      "A native desktop shell project written from scratch in Rust 2021, using GTK4, libadwaita, and gtk4-layer-shell. Spans 15 declared workspace crates integrated with Hyprland on Wayland, eliminating heavyweight web wrappers.",
    theme: "light",
    iconName: "LayoutGrid",
    techSpecs: ["Rust 2021 Workspace", "GTK4 + libadwaita", "gtk4-layer-shell", "Wayland Protocol"],
    status: "Implemented",
  },
  {
    num: "02",
    tag: "AI INTERACTION SURFACE",
    title: "Ask GURUOS",
    description:
      "An AI interaction surface built directly into the desktop panel rather than presented solely as a separate browser tab. Pressing Enter initiates a contextual overlay communicating with a local Python service.",
    theme: "orange",
    iconName: "Bot",
    techSpecs: ["Panel-Embedded Trigger", "Contextual HUD", "Local HTTP Port 8000", "No Cloud Web View"],
    status: "Implemented",
  },
  {
    num: "03",
    tag: "LOCAL AI INFERENCE",
    title: "Ollama & os-agent",
    description:
      "Ollama serves a locally configured language model (Qwen2.5-3B-Instruct.Q4_K_M.gguf registered as os-agent). Inference runs entirely on local hardware; users only need internet access to download the OS image or model weights during setup.",
    theme: "dark",
    iconName: "Cpu",
    techSpecs: ["Ollama Runtime :11434", "Qwen2.5-3B-Instruct Q4_K_M", "Temp 0 // 256 Tokens", "CPU & GPU Capable"],
    status: "Experimental",
  },
  {
    num: "04",
    tag: "BOUNDED TOOL LAYER",
    title: "Structured Tool Dispatch",
    description:
      "The Python AI backend uses structured request validation and an allow-listed tool registry. Restricts available operations to read-only developer actions (file search, git status, git log, service logs, system metrics) to prevent unintended execution.",
    theme: "light",
    iconName: "ShieldCheck",
    techSpecs: ["Allow-listed Registry", "Pydantic Validation", "Read-Only Dev Scopes", "No Arbitrary Root"],
    status: "Implemented",
  },
  {
    num: "05",
    tag: "SYSTEM INTEGRATION",
    title: "Hyprland & D-Bus Controls",
    description:
      "Deep desktop integration uniting Hyprland workspace IPC, SwayNC notification history, UPower battery monitoring, and launcher bindings for external tools (pavucontrol and nm-connection-editor) with graceful fallback handling.",
    theme: "dark",
    iconName: "Layers",
    techSpecs: ["Hyprland IPC Sockets", "System D-Bus Services", "SwayNC Daemon", "UPower Discovery"],
    status: "Implemented",
  },
  {
    num: "06",
    tag: "INSTALLATION DIRECTION",
    title: "Custom Installation & First Boot",
    description:
      "A planned guided OS installation and first-boot setup process, clearly marked as under early development. Pairs an interactive browser configuration planner with a documented future ArchISO and native disk installer workflow.",
    theme: "soft",
    iconName: "TerminalSquare",
    techSpecs: ["Interactive Planner (/install)", "ArchISO Foundation", "Future Native Installer", "First-Boot Wizard"],
    status: "In Progress",
  },
];
