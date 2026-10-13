import { 
  WizardStepId, 
  InstallerWizardState, 
  PartitionPlanEntry, 
  DesktopComponentToggle 
} from "@/types";

export interface WizardStepMeta {
  id: WizardStepId;
  number: number;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
}

export const WIZARD_STEPS: WizardStepMeta[] = [
  {
    id: "welcome",
    number: 1,
    title: "WELCOME TO GURUOS SETUP",
    shortLabel: "WELCOME",
    tagline: "PHASE 01 // OVERVIEW & SCOPE",
    description: "Prepare an installation profile for a GuruOS test image or future native installation.",
  },
  {
    id: "destination",
    number: 2,
    title: "CHOOSE YOUR INSTALLATION DESTINATION",
    shortLabel: "DESTINATION",
    tagline: "PHASE 02 // ENVIRONMENT TARGET",
    description: "Select whether you are preparing for a virtual machine, physical computer, or exploring without installing.",
  },
  {
    id: "profile",
    number: 3,
    title: "BOOT MODE & SYSTEM PROFILE",
    shortLabel: "PROFILE",
    tagline: "PHASE 03 // FIRMWARE & FLAVOR",
    description: "Choose firmware target (UEFI vs BIOS) and select your desktop package profile.",
  },
  {
    id: "hardware",
    number: 4,
    title: "HARDWARE COMPATIBILITY CHECKLIST",
    shortLabel: "HARDWARE",
    tagline: "PHASE 04 // DETECTION & CAPABILITIES",
    description: "Review intended detection procedures and input your system capabilities for local AI evaluation.",
  },
  {
    id: "disk",
    number: 5,
    title: "INSTALLATION DISK & PARTITION REVIEW",
    shortLabel: "DISK PLAN",
    tagline: "PHASE 05 // STORAGE PLANNING (PREVIEW ONLY)",
    description: "Plan your partition schema with persistent safety protections. Browser preview only; does not touch real disks.",
  },
  {
    id: "user",
    number: 6,
    title: "USER & SYSTEM CONFIGURATION",
    shortLabel: "USER SETUP",
    tagline: "PHASE 06 // IDENTITY & LOCALIZATION",
    description: "Configure user account, hostname, timezone, locale, and keyboard layout with zero credential retention.",
  },
  {
    id: "desktop",
    number: 7,
    title: "CUSTOMIZE THE DESKTOP",
    shortLabel: "DESKTOP",
    tagline: "PHASE 07 // SHELL & COMPONENT STACK",
    description: "Select native desktop shell components and review integration maturity levels.",
  },
  {
    id: "ai",
    number: 8,
    title: "LOCAL AI CONFIGURATION",
    shortLabel: "LOCAL AI",
    tagline: "PHASE 08 // OLLAMA & OS-AGENT MODEL",
    description: "Configure local language model setup, hash verification, or defer model download.",
  },
  {
    id: "review",
    number: 9,
    title: "REVIEW CONFIGURATION",
    shortLabel: "REVIEW",
    tagline: "PHASE 09 // AUDIT & SPECIFICATION",
    description: "Inspect the generated installation profile computed from your active wizard selections.",
  },
  {
    id: "next-steps",
    number: 10,
    title: "CONTINUE TO INSTALLATION",
    shortLabel: "NEXT STEPS",
    tagline: "PHASE 10 // EXECUTION GUIDANCE",
    description: "Honest project reality: Guided installer is under development. Export configuration or proceed with test-image instructions.",
  },
];

export const DEFAULT_DESKTOP_COMPONENTS: DesktopComponentToggle[] = [
  {
    id: "hyprland-compositor",
    name: "Hyprland Wayland Compositor",
    category: "Core Shell",
    enabled: true,
    status: "Implemented",
    description: "Dynamic tiling window manager with Wayland protocol and custom IPC dispatching.",
    isCore: true,
  },
  {
    id: "rust-top-panel",
    name: "Native Rust/GTK4 Top Panel",
    category: "Core Shell",
    enabled: true,
    status: "Implemented",
    description: "Anchored Wayland panel with GTK4 Layer Shell, branding, and system controls.",
    isCore: true,
  },
  {
    id: "ask-guruos-overlay",
    name: "Ask GURUOS Interaction Surface",
    category: "Core Shell",
    enabled: true,
    status: "Implemented",
    description: "Native text-entry field in top panel with contextual chat overlay.",
    isCore: true,
  },
  {
    id: "dynamic-workspaces",
    name: "Dynamic Workspace Indicators",
    category: "Core Shell",
    enabled: true,
    status: "Implemented",
    description: "Workspace buttons synchronized in real time with Hyprland IPC state.",
    isCore: true,
  },
  {
    id: "swaync-notifications",
    name: "SwayNC Notification Daemon",
    category: "Integrations",
    enabled: true,
    status: "Implemented",
    description: "Desktop notification banners and slide-out notification center history.",
    isCore: false,
  },
  {
    id: "pavucontrol-audio",
    name: "PipeWire Audio & Mixer (Pavucontrol)",
    category: "Integrations",
    enabled: true,
    status: "Implemented",
    description: "Panel audio icon launching pavucontrol over PipeWire / WirePlumber.",
    isCore: false,
  },
  {
    id: "nm-connection-editor",
    name: "NetworkManager Connection Editor",
    category: "Integrations",
    enabled: true,
    status: "Implemented",
    description: "Panel network indicator launching nm-connection-editor for Wi-Fi and Ethernet.",
    isCore: false,
  },
  {
    id: "upower-battery",
    name: "UPower Battery Discovery",
    category: "Integrations",
    enabled: true,
    status: "Implemented",
    description: "Asynchronous power state discovery over system D-Bus for laptops.",
    isCore: false,
  },
  {
    id: "quick-settings-native",
    name: "Native GTK4 Quick Settings",
    category: "Core Shell",
    enabled: false,
    status: "In Progress",
    description: "Consolidated system control popup replacing external helper app launches.",
    isCore: false,
  },
  {
    id: "gtk-file-manager",
    name: "Native File Manager Shell Prototype",
    category: "Core Shell",
    enabled: false,
    status: "In Progress",
    description: "Lightweight GTK4 file browser member from Rust workspace.",
    isCore: false,
  },
  {
    id: "bluez-bluetooth",
    name: "Bluetooth Controller Integration",
    category: "Integrations",
    enabled: false,
    status: "In Progress",
    description: "BlueZ panel indicator and pairing manager (service requires verification).",
    isCore: false,
  },
  {
    id: "system-tray-sni",
    name: "System Tray (StatusNotifierItem)",
    category: "External Helpers",
    enabled: false,
    status: "Planned",
    description: "Standard system tray for background application icons.",
    isCore: false,
  },
];

export const DEFAULT_PARTITION_SCHEMAS: Record<string, PartitionPlanEntry[]> = {
  entireDiskUefi: [
    {
      mountPoint: "/boot",
      label: "GURUOS_BOOT",
      sizeGb: "1.0 GB",
      fsType: "vfat (FAT32)",
      flags: "boot, esp",
      description: "UEFI system partition for systemd-boot bootloader and kernel initramfs images.",
    },
    {
      mountPoint: "/",
      label: "GURUOS_ROOT",
      sizeGb: "Remaining (~90%)",
      fsType: "btrfs",
      flags: "root",
      description: "Btrfs root filesystem with @root and @home subvolumes for instant snapshots.",
    },
    {
      mountPoint: "[SWAP]",
      label: "GURUOS_SWAP",
      sizeGb: "8.0 GB",
      fsType: "linux-swap",
      flags: "swap",
      description: "Linux swap partition matching RAM for hibernation and memory management.",
    },
  ],
  customExample: [
    {
      mountPoint: "/boot",
      label: "EFI_SYSTEM",
      sizeGb: "512 MB",
      fsType: "vfat (FAT32)",
      flags: "boot, esp",
      description: "Standard EFI partition for bootloader.",
    },
    {
      mountPoint: "/",
      label: "ROOT_SYSTEM",
      sizeGb: "40.0 GB",
      fsType: "ext4",
      flags: "root",
      description: "Dedicated root partition for OS base and pacman packages.",
    },
    {
      mountPoint: "/home",
      label: "HOME_DATA",
      sizeGb: "Remaining",
      fsType: "btrfs",
      flags: "home",
      description: "Dedicated home partition for user projects and local Ollama weights.",
    },
  ],
};

export const INITIAL_WIZARD_STATE: InstallerWizardState = {
  currentStep: "welcome",
  destination: "vm",
  bootMode: "uefi",
  profile: "recommended",
  hardware: {
    cpuArch: "x86_64",
    cpuCores: 4,
    ramGb: 8,
    gpuVendor: "intel",
    storageGb: 64,
    displayResolution: "1920x1080",
    networkType: "both",
    isUserProvided: true,
  },
  diskMode: "entire-disk",
  targetDiskName: "/dev/vda (Virtual Disk - 64 GB)",
  diskAcknowledged: false,
  userConfig: {
    username: "guru",
    hostname: "guruos-box",
    timezone: "UTC",
    locale: "en_US.UTF-8",
    keyboardLayout: "us",
    networkConfig: "dhcp",
    skipPasswordInPreview: true,
    passwordProvided: false,
  },
  desktopComponents: DEFAULT_DESKTOP_COMPONENTS,
  aiConfig: {
    decision: "first-boot",
    runtime: "Ollama",
    modelAlias: "os-agent",
    modelArtifact: "Qwen2.5-3B-Instruct.Q4_K_M.gguf",
    manifestSha256: "0a7744dc91d4ea7d17eb11a797be9116024d4eb69bafb3fbf1aa281982ca482e",
    temperature: 0,
    maxOutputTokens: 256,
    backendPort: 8000,
    ollamaPort: 11434,
    allowLowMemoryFallback: true,
  },
  completedSteps: [],
};

export interface FutureNativeInstallerStep {
  stepNumber: number;
  phase: string;
  action: string;
  description: string;
  safetyBoundary: string;
}

export const FUTURE_INSTALLER_SEQUENCE: FutureNativeInstallerStep[] = [
  {
    stepNumber: 1,
    phase: "Live Image Boot",
    action: "Boot ArchISO Live Media",
    description: "Boots live image via UEFI systemd-boot or BIOS Syslinux into a disposable Wayland session.",
    safetyBoundary: "Read-only live overlay; no local disks mounted.",
  },
  {
    stepNumber: 2,
    phase: "Welcome & EULA",
    action: "Launch GuruOS Setup Screen",
    description: "Initializes native GTK4 setup wizard and displays system status and experimental disclaimer.",
    safetyBoundary: "User-space process; root elevation not yet invoked.",
  },
  {
    stepNumber: 3,
    phase: "Hardware Detection",
    action: "Automated Device Inspection",
    description: "Detects CPU architecture, GPU drivers, display EDID, audio devices, and storage block devices.",
    safetyBoundary: "Non-destructive hardware querying via sysfs and udev.",
  },
  {
    stepNumber: 4,
    phase: "Disk Target Selection",
    action: "Explicit Target Drive Confirmation",
    description: "User explicitly picks the destination disk (e.g., /dev/nvme0n1) and confirms partition plan.",
    safetyBoundary: "Never defaults to host disk; requires double confirmation.",
  },
  {
    stepNumber: 5,
    phase: "User & System Config",
    action: "User Credentials & Locale Setup",
    description: "Sets up standard user account, sudo access, timezone, locale, keyboard layout, and hostname.",
    safetyBoundary: "Passwords hashed client-side with standard PAM sha512crypt.",
  },
  {
    stepNumber: 6,
    phase: "Pre-Execution Review",
    action: "Display Destructive Action Summary",
    description: "Summarizes target disk, partitions to be created/erased, and system configuration.",
    safetyBoundary: "Mandatory confirmation required before partition table modification.",
  },
  {
    stepNumber: 7,
    phase: "Target-Scoped Pacstrap",
    action: "Base Package Installation",
    description: "Runs pacstrap to install Linux kernel, Hyprland, GTK4 shell, and dependencies into /mnt.",
    safetyBoundary: "Scoped strictly to /mnt target root; uses packaged portable configs without copying developer $HOME.",
  },
  {
    stepNumber: 8,
    phase: "System Configuration",
    action: "genfstab, mkinitcpio & Bootloader",
    description: "Generates fstab, builds initramfs with mkinitcpio, and configures systemd-boot.",
    safetyBoundary: "Chrooted strictly to target; transaction logs recorded.",
  },
  {
    stepNumber: 9,
    phase: "Service Configuration",
    action: "Enable User & System Daemons",
    description: "Enables SDDM, NetworkManager, PipeWire, and user-scoped guruos-mcp.service.",
    safetyBoundary: "AI backend runs in unprivileged user scope only.",
  },
  {
    stepNumber: 10,
    phase: "First-Boot Handoff",
    action: "Reboot Prompt",
    description: "Unmounts target, flushes filesystem buffers, and prompts user to remove installation media.",
    safetyBoundary: "Clean unmount and verification of bootloader entries.",
  },
];

export interface FirstBootSequenceStep {
  stepNumber: number;
  task: string;
  details: string;
  faultTolerance: string;
}

export const FIRST_BOOT_SEQUENCE: FirstBootSequenceStep[] = [
  {
    stepNumber: 1,
    task: "User & Locale Initialization",
    details: "Applies real user credentials, verifies home directory permissions, and configures locale/timezone.",
    faultTolerance: "Idempotent; falls back to standard shell defaults.",
  },
  {
    stepNumber: 2,
    task: "Hardware Profile & Portable Hyprland",
    details: "Detects displays, generates portable Hyprland display layout without hardcoded machine monitor names.",
    faultTolerance: "Falls back to safe 1080p single-display configuration.",
  },
  {
    stepNumber: 3,
    task: "User Backend Service Start",
    details: "Starts user-scoped systemd daemon guruos-mcp.service on 127.0.0.1:8000.",
    faultTolerance: "Service isolated from root; failures logged to journalctl --user.",
  },
  {
    stepNumber: 4,
    task: "Ollama Reachability Check",
    details: "Verifies Ollama service daemon is active on 127.0.0.1:11434.",
    faultTolerance: "If Ollama is stopped, attempts starting systemd unit; skips gracefully if missing.",
  },
  {
    stepNumber: 5,
    task: "Model Fetch & SHA-256 Verification",
    details: "If user configured AI on first boot, downloads Qwen2.5-3B-Instruct.Q4_K_M.gguf and verifies SHA-256 (0a7744dc91d4ea7d17eb11a797be9116024d4eb69bafb3fbf1aa281982ca482e).",
    faultTolerance: "Non-fatal to desktop! If download or hash check fails, reports AI not ready while desktop remains 100% usable.",
  },
  {
    stepNumber: 6,
    task: "Register os-agent & Readiness Report",
    details: "Runs 'ollama create os-agent -f ai/Modelfile' and runs health probe against /v1/agent.",
    faultTolerance: "Displays actionable diagnostic notification without crashing shell.",
  },
];
