import { SpecRow } from "@/types";

export const systemSpecifications: SpecRow[] = [
  {
    spec: "Target System Architecture",
    value: "x86_64 (64-bit AMD/Intel)",
    status: "Target Verified",
    type: "verified",
  },
  {
    spec: "Operating-System Foundation",
    value: "Arch Linux (Rolling Release, systemd init)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Display Protocol & Compositor",
    value: "Wayland Protocol // Hyprland Tiling Window Manager",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Desktop Shell Architecture",
    value: "Native Rust 2021 shell (GTK4 + libadwaita + gtk4-layer-shell)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Rust Workspace Structure",
    value: "15 declared modular crates (top-panel, shell-config, launcher, etc.)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Desktop Top-Panel Integration",
    value: "9 Native components (Branding, Ask GURUOS, Workspaces, Controls)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Local AI Runtime & Model",
    value: "Ollama (port 11434) running os-agent (Qwen2.5-3B-Instruct.Q4_K_M.gguf)",
    status: "Experimental",
    type: "experimental",
  },
  {
    spec: "AI Backend & Tool Dispatch",
    value: "Python FastAPI / MCP daemon (port 8000) with bounded tool registry",
    status: "Implemented",
    type: "verified",
  },
  {
    spec: "Developer Reference Hardware",
    value: "AMD A8-7410 (4 cores), 6.7 GiB RAM, Radeon graphics, RTL8723BE Wi-Fi",
    status: "Reference Benchmark",
    type: "experimental",
  },
  {
    spec: "Reference Hardware Inference",
    value: "CPU-only inference (CUDA/ROCm unavailable; latency not benchmarked)",
    status: "Evaluated",
    type: "experimental",
  },
  {
    spec: "Minimum RAM Specification",
    value: "Under evaluation (low-RAM configs can defer/disable local AI model)",
    status: "Under Evaluation",
    type: "unverified",
  },
  {
    spec: "Storage Allocation Requirement",
    value: "Under evaluation (depends on OS base footprint + 2.1 GB GGUF model)",
    status: "Under Evaluation",
    type: "unverified",
  },
  {
    spec: "GPU Acceleration Support",
    value: "Intel/AMD/NVIDIA driver profiles under testing; CPU fallback standard",
    status: "Under Evaluation",
    type: "unverified",
  },
  {
    spec: "Audio & Multimedia Stack",
    value: "PipeWire, WirePlumber, and pavucontrol interface",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Network Management",
    value: "NetworkManager daemon with nm-connection-editor panel launcher",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Bluetooth Subsystem",
    value: "BlueZ integration in progress (active service was unverified in snapshot)",
    status: "In Progress",
    type: "progress",
  },
  {
    spec: "System Tray (StatusNotifierItem)",
    value: "Not implemented in documented desktop shell snapshot",
    status: "Planned",
    type: "planned",
  },
  {
    spec: "Deployment Direction",
    value: "ArchISO test-image foundation (scripts/build-iso.sh, mkarchiso)",
    status: "In Progress",
    type: "progress",
  },
];
