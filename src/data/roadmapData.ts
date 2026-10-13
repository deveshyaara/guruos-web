import { FeatureStatus } from "@/types";

export interface RoadmapItem {
  id: string;
  title: string;
  category: "Desktop Shell" | "AI Backend" | "Compositor" | "System" | "Installer";
  description: string;
  status: FeatureStatus;
  auditDetail: string;
  verifiedInAudit: boolean;
}

export interface RoadmapCategory {
  title: string;
  tag: string;
  description: string;
  items: RoadmapItem[];
}

export const roadmapCategories: RoadmapCategory[] = [
  {
    title: "Implemented Components",
    tag: "LAYER: IMPLEMENTED",
    description:
      "Components with verified code in the repository. These represent implementation-status claims, not a guarantee that every component passes end-to-end acceptance tests on every hardware platform.",
    items: [
      {
        id: "rm-1",
        title: "Native GTK4 Top-Panel Layout & Widget Structure",
        category: "Desktop Shell",
        status: "Implemented",
        description: "Unified 9-component desktop bar written in Rust using GTK4, libadwaita, and gtk4-layer-shell.",
        auditDetail: "Declared in top-panel crate; renders anchored surface on Wayland layer.",
        verifiedInAudit: true,
      },
      {
        id: "rm-2",
        title: "Ask GURUOS Interaction UI & Backend Integration",
        category: "AI Backend",
        status: "Implemented",
        description: "Native GTK text-entry widget in the top panel triggers conversational overlay; dispatches requests to local Python daemon on port 8000.",
        auditDetail: "Tested in development against Ollama loopback endpoint.",
        verifiedInAudit: true,
      },
      {
        id: "rm-3",
        title: "Hyprland Dynamic Workspace Integration",
        category: "Compositor",
        status: "Implemented",
        description: "Bi-directional event synchronization with Hyprland workspace state via UNIX domain socket IPC.",
        auditDetail: "Implemented in hyprland-ipc crate; updates panel active buttons in real-time.",
        verifiedInAudit: true,
      },
      {
        id: "rm-4",
        title: "Python Validation & Allow-Listed Tool Registry",
        category: "AI Backend",
        status: "Implemented",
        description: "Structured request schema validation restricting model execution to safe, allow-listed tools.",
        auditDetail: "Implemented in ai/mcp_server.py; verified by 44 Python test cases.",
        verifiedInAudit: true,
      },
      {
        id: "rm-5",
        title: "Read-Only Developer Assistance Orchestration",
        category: "AI Backend",
        status: "Implemented",
        description: "Tool registry endpoints for file inspection, directory tree walk, git status, git log, service status, and system metrics.",
        auditDetail: "Prevents arbitrary shell execution by bounding capabilities to known safe tools.",
        verifiedInAudit: true,
      },
      {
        id: "rm-6",
        title: "First-Boot Setup Wizard Prototype",
        category: "Installer",
        status: "Implemented",
        description: "First-boot setup crate providing initial onboarding and configuration screens.",
        auditDetail: "Declared in first-boot crate; coordinates with user-scoped guruos-mcp.service.",
        verifiedInAudit: true,
      },
    ],
  },
  {
    title: "In Progress or Incomplete",
    tag: "LAYER: IN PROGRESS",
    description:
      "Components currently under active development or identified as having implementation gaps in the technical audit.",
    items: [
      {
        id: "rm-7",
        title: "Safe Command Execution Beyond Read-Only Tools",
        category: "AI Backend",
        status: "In Progress",
        description: "Extending bounded tools to safely execute write operations with explicit user confirmation modals.",
        auditDetail: "Currently restricted to read-only developer actions to prevent privilege escalation.",
        verifiedInAudit: false,
      },
      {
        id: "rm-8",
        title: "UI-Backend Capability Consistency (Issue #2)",
        category: "Desktop Shell",
        status: "In Progress",
        description: "Resolving Ask GURUOS input hint mismatch where prompt suggests workspace switching, but backend dispatcher lacks the tool.",
        auditDetail: "Tracked in GitHub Issue #2; requires dispatcher mapping to Hyprland IPC socket.",
        verifiedInAudit: false,
      },
      {
        id: "rm-9",
        title: "Native Quick-Settings Integration",
        category: "Desktop Shell",
        status: "In Progress",
        description: "Replacing external helper launches (pavucontrol, nm-connection-editor) with native GTK4 quick-settings controls.",
        auditDetail: "quick-settings crate declared in workspace; currently relies on external utilities.",
        verifiedInAudit: false,
      },
      {
        id: "rm-10",
        title: "Shell-Backend Polkit Authorization Hardening (Issue #1)",
        category: "System",
        status: "In Progress",
        description: "Remediating non-functional Polkit authorization check in shell-backend before enabling privileged system actions.",
        auditDetail: "Tracked in GitHub Issue #1; critical security boundary prerequisite.",
        verifiedInAudit: false,
      },
      {
        id: "rm-11",
        title: "Cross-Hardware Driver Compatibility",
        category: "System",
        status: "In Progress",
        description: "Testing proprietary and open-source GPU drivers (NVIDIA proprietary vs Nouveau, Intel Xe, AMD RADV) on Wayland.",
        auditDetail: "Reference testing performed primarily on AMD A8-7410 integrated graphics.",
        verifiedInAudit: false,
      },
      {
        id: "rm-12",
        title: "Automated Graphical Acceptance Tests",
        category: "System",
        status: "In Progress",
        description: "Executing graphical Wayland test plan across SDDM, Hyprland window placement, and keyboard events.",
        auditDetail: "Test plan document exists (GRAPHICAL_ACCEPTANCE_TEST.md); automated execution pending.",
        verifiedInAudit: false,
      },
    ],
  },
  {
    title: "Planned or Requiring Verification",
    tag: "LAYER: PLANNED / UNVERIFIED",
    description:
      "Future architectural milestones and unverified distribution pipelines requiring reproducible validation before public release.",
    items: [
      {
        id: "rm-13",
        title: "Complete Native OS Installer",
        category: "Installer",
        status: "Planned",
        description: "Native, user-driven installation wizard coordinating pacstrap, genfstab, mkinitcpio, and bootloader installation on disk.",
        auditDetail: "Documented in INSTALLER_DESIGN.md; disk-writing implementation is not yet built.",
        verifiedInAudit: false,
      },
      {
        id: "rm-14",
        title: "Production-Ready Live ISO & Installation Flow",
        category: "Installer",
        status: "Planned",
        description: "Bootable ArchISO live desktop environment with automatic hardware detection and installer launcher.",
        auditDetail: "Current ISO profile is a test-image foundation; GitHub Actions CI run failed at ISO step.",
        verifiedInAudit: false,
      },
      {
        id: "rm-15",
        title: "Repeatable, Fully Verified Image Building",
        category: "Installer",
        status: "Planned",
        description: "Bit-for-bit reproducible image pipeline with automated GitHub Actions CI build and checksum signing.",
        auditDetail: "mkarchiso script mostly rebuildable; CI workflow needs build step failure resolution.",
        verifiedInAudit: false,
      },
      {
        id: "rm-16",
        title: "First-Boot Hardware Configuration & Model Checksum Fetch",
        category: "AI Backend",
        status: "Planned",
        description: "Idempotent first-boot onboarding to detect displays, configure portable Hyprland profile, fetch GGUF, and verify SHA-256.",
        auditDetail: "Weights are not stored in Git; network download verification is non-fatal to desktop.",
        verifiedInAudit: false,
      },
      {
        id: "rm-17",
        title: "Signed Updates and Snapshot Rollback Mechanism",
        category: "System",
        status: "Planned",
        description: "Btrfs subvolume snapshots integrated with bootloader menu for atomic rollback upon failed updates.",
        auditDetail: "Planned for post-alpha release phase.",
        verifiedInAudit: false,
      },
      {
        id: "rm-18",
        title: "Reliable Local AI Inference Performance Benchmarks",
        category: "AI Backend",
        status: "Planned",
        description: "Formal benchmarking of Qwen2.5-3B-Instruct across CPU-only and GPU-accelerated setups for tokens/sec and memory draw.",
        auditDetail: "Tracked in GitHub Issue #5; reference AMD APU setup unbenchmarked.",
        verifiedInAudit: false,
      },
    ],
  },
];
