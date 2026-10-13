import { ArchitectureLayer, PanelComponentItem } from "@/types";

export const architectureLayers: ArchitectureLayer[] = [
  {
    level: 1,
    name: "Operating-System Base & Kernel",
    shortTitle: "Arch Linux Core",
    protocol: "Linux Kernel 6.x // Rolling Release // x86_64",
    tag: "LAYER_01 // BASE",
    accent: "#0A0A0A",
    description:
      "Arch Linux provides the minimal, rolling-release foundation. Power users get direct access to standard pacman package management and the Arch User Repository (AUR) without an artificial layer of abstraction over core system files.",
    disclaimer:
      "Architectural Clarity: GuruOS uses Arch Linux as an operating-system base for system customization and development. GuruOS does not promise to inherit every upstream Arch Linux configuration, repository policy, or official support arrangement.",
    components: [
      { label: "Kernel & Base", detail: "Arch Linux rolling-release (x86_64)" },
      { label: "Init & Service Manager", detail: "systemd init with system & user-scoped D-Bus" },
      { label: "Package Management", detail: "Pacman package manager + standard AUR tooling" },
      { label: "Hardware Subsystems", detail: "UPower for battery discovery; PipeWire for audio; BlueZ (in dev)" },
    ],
    flowTarget: "Hyprland / Wayland Compositor",
  },
  {
    level: 2,
    name: "Window Management & Compositing",
    shortTitle: "Hyprland / Wayland",
    protocol: "Wayland Protocol // wlroots",
    tag: "LAYER_02 // COMPOSITOR",
    accent: "#FF9B42",
    description:
      "Hyprland serves as the Wayland compositor, managing dynamic workspaces and fluid window tiling with zero screen tearing. The native top panel communicates directly with Hyprland's UNIX domain socket IPC to sync workspace states in real time.",
    disclaimer:
      "Compositor Note: Workspace buttons update via Hyprland IPC event dispatching. Physical keyboard-input behavior has not yet been comprehensively verified through the available automated Wayland input-testing setup.",
    components: [
      { label: "Display Protocol", detail: "Wayland Protocol (no legacy X11 display server)" },
      { label: "Tiling Compositor", detail: "Hyprland dynamic tiling window manager" },
      { label: "IPC Mechanism", detail: "UNIX domain socket (/tmp/hypr/$HYPRLAND_INSTANCE_SIGNATURE/.socket2.sock)" },
      { label: "Workspace Model", detail: "Dynamic virtual workspaces with auto-cleanup" },
    ],
    flowTarget: "Native GTK4 Shell",
  },
  {
    level: 3,
    name: "Native Desktop Shell (Rust)",
    shortTitle: "Rust GTK4 Shell",
    protocol: "Rust 2021 // GTK4 + libadwaita + gtk4-layer-shell",
    tag: "LAYER_03 // SHELL",
    accent: "#FF5A1F",
    description:
      "The desktop shell is a native Rust application comprising 15 declared workspace members. It renders a Wayland-native top panel using gtk4-layer-shell, hosting project branding, Ask GURUOS input, workspace indicators, and system controls without heavy web runtimes.",
    disclaimer:
      "Shell Completeness: The Rust workspace defines 15 crates (top-panel, launcher, quick-settings, settings, etc.) at varying levels of implementation. Features are not marked as completed merely because an icon or UI stub exists.",
    components: [
      { label: "Language & Runtime", detail: "Rust 2021 (tokio, serde, tracing, zbus, futures)" },
      { label: "Toolkit & Protocols", detail: "GTK4, libadwaita, and gtk4-layer-shell" },
      { label: "Declared Workspace", detail: "15 modular crates (top-panel, shell-config, etc.)" },
      { label: "Notification Daemon", detail: "SwayNC integration for notification display & history" },
    ],
    flowTarget: "Ask GURUOS & Python AI Backend",
  },
  {
    level: 4,
    name: "AI Backend & Bounded Tools",
    shortTitle: "Ask GURUOS & Inference",
    protocol: "HTTP 127.0.0.1:8000 (Backend) → 127.0.0.1:11434 (Ollama)",
    tag: "LAYER_04 // INTELLIGENCE",
    accent: "#FF5A1F",
    description:
      "Ask GURUOS communicates with a local Python backend (ai/mcp_server.py on port 8000), which queries Ollama (port 11434) running the os-agent model (Qwen2.5-3B-Instruct.Q4_K_M.gguf). Model outputs pass through structured request validation and an allow-listed tool registry rather than arbitrary shell execution.",
    disclaimer:
      "Streaming & Bounded Scope: The API emits an SSE-shaped response, but live token-by-token streaming requires further verification. The bounded tool layer supports read-only developer actions (file search, git status, git log, service logs, system statistics); workspace switching via prompt remains a known UI mismatch under investigation (Issue #2).",
    components: [
      { label: "Inference Engine", detail: "Ollama (http://127.0.0.1:11434) running os-agent model" },
      { label: "Tested Model", detail: "Qwen2.5-3B-Instruct.Q4_K_M.gguf (Temp: 0, Limit: 256 tokens)" },
      { label: "AI Backend Daemon", detail: "Python FastAPI / MCP server (http://127.0.0.1:8000)" },
      { label: "Bounded Tool Scopes", detail: "get_system_stats, file_operation, service_status, git_log (read-only)" },
    ],
    flowTarget: "Desktop Shell Feedback & Output HUD",
  },
];

export const panelItems: PanelComponentItem[] = [
  { index: 1, title: "GURUOS Branding", desc: "Project wordmark and flame emblem anchor with status tooltip", status: "Implemented" },
  { index: 2, title: "Ask GURUOS Text Input", desc: "Native GTK entry field in panel; Enter triggers AI assistant workflow over port 8000", status: "Implemented" },
  { index: 3, title: "Dynamic Workspace Buttons", desc: "Real-time sync with Hyprland workspace state via socket IPC", status: "Implemented" },
  { index: 4, title: "Network Control", desc: "Launches nm-connection-editor in development setup", status: "Implemented" },
  { index: 5, title: "Audio Control", desc: "Launches pavucontrol in development setup via PipeWire/WirePlumber", status: "Implemented" },
  { index: 6, title: "Bluetooth Control", desc: "Incomplete in dev snapshot (active BlueZ service was unavailable)", status: "In Progress" },
  { index: 7, title: "Battery Status", desc: "Asynchronous UPower power state discovery via system D-Bus", status: "Implemented" },
  { index: 8, title: "Notifications", desc: "Integrated with active SwayNC notification daemon and history panel", status: "Implemented" },
  { index: 9, title: "System Clock", desc: "System time with 12h/24h toggle and calendar overlay", status: "Implemented" },
];

export interface RequestFlowStep {
  step: number;
  label: string;
  source: string;
  destination: string;
  description: string;
  securityNote: string;
}

export const requestFlowSteps: RequestFlowStep[] = [
  {
    step: 1,
    label: "Panel Text Entry",
    source: "Rust/GTK4 Top-Panel",
    destination: "Python AI Backend (127.0.0.1:8000)",
    description: "User submits query via Ask GURUOS text entry in the GTK4 panel. Dispatched over local loopback HTTP POST /v1/agent.",
    securityNote: "Loopback only; no external network transmission of user prompts.",
  },
  {
    step: 2,
    label: "Request Validation",
    source: "Python Backend (FastAPI)",
    destination: "Request Validator",
    description: "Input sanitized and validated against schema before reaching model dispatcher.",
    securityNote: "Rejects malformed payloads or unapproved request patterns.",
  },
  {
    step: 3,
    label: "Local Inference Query",
    source: "Python Backend",
    destination: "Ollama (127.0.0.1:11434/api/generate)",
    description: "Queries Ollama instance hosting the os-agent model (Qwen2.5-3B-Instruct quantized).",
    securityNote: "CPU/GPU local execution. No proprietary telemetry or cloud model API.",
  },
  {
    step: 4,
    label: "Agent Dispatcher & Tool Registry",
    source: "Model Structured Output",
    destination: "Allow-Listed Tool Registry",
    description: "Model outputs are mapped to strictly allow-listed tool functions (system stats, service status, git status, file inspect).",
    securityNote: "Does not execute raw shell commands. Arbitrary root commands are forbidden.",
  },
  {
    step: 5,
    label: "Desktop Shell Response",
    source: "Python Backend",
    destination: "Rust/GTK4 Overlay Window",
    description: "Formatted response and tool output returned to the desktop shell HUD.",
    securityNote: "Emits SSE-shaped response; displayed in native desktop context.",
  },
];
