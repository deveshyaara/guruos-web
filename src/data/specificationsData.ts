import { SpecRow } from "@/types";

export const systemSpecifications: SpecRow[] = [
  {
    spec: "System Architecture",
    value: "x86_64",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Operating-System Base",
    value: "Arch Linux (Rolling Release)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Compositor",
    value: "Hyprland (Tiling Window Manager)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Display Protocol",
    value: "Wayland (wlroots)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Desktop Shell",
    value: "Native GTK4-based shell written in Rust",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Top Panel Integration",
    value: "9 Native components (Branding, Ask GURUOS, Workspaces, Controls)",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Notification Subsystem",
    value: "SwayNC integration active",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Local AI Infrastructure",
    value: "Tested in dev with Ollama & GuruOS MCP service (Qwen2.5-3B-Instruct)",
    status: "Experimental",
    type: "experimental",
  },
  {
    spec: "Bluetooth Integration",
    value: "Incomplete in snapshot (active BlueZ service unavailable)",
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
    spec: "Installation Method",
    value: "Follow release-specific instructions upon image tagging",
    status: "Verified",
    type: "verified",
  },
  {
    spec: "Minimum RAM & Storage",
    value: "To be confirmed for the selected release (no unverified claims)",
    status: "To be confirmed",
    type: "unverified",
  },
  {
    spec: "Supported GPU Matrix",
    value: "To be confirmed across AMD, Intel, and NVIDIA test benches",
    status: "To be confirmed",
    type: "unverified",
  },
];
