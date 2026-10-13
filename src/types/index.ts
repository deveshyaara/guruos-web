/**
 * Standardized status taxonomy for GuruOS features & development roadmap
 */
export type FeatureStatus =
  | "Implemented"
  | "Experimental"
  | "In Progress"
  | "Planned"
  | "Unverified";

/**
 * Item in the development status audit list
 */
export interface FeatureItem {
  id: string;
  name: string;
  category: "Desktop Shell" | "Compositor" | "System Base" | "AI Workflow" | "Packaging";
  status: FeatureStatus;
  description: string;
  details: string;
  hardwareDependent?: boolean;
}

/**
 * Known repository issue tracking
 */
export interface KnownIssue {
  id: string;
  number: number;
  title: string;
  category: "Security" | "Shell / UI" | "Architecture" | "Licensing" | "Performance";
  status: "Open" | "Remediating" | "Investigating";
  description: string;
  impact: string;
  workaroundOrMitigation: string;
  issueUrl: string;
}

/**
 * Reference developer hardware benchmark data
 */
export interface ReferenceHardware {
  deviceRole: string;
  cpu: string;
  cpuCores: number;
  ramGb: number;
  graphics: string;
  gpuAcceleration: string;
  wifiCard: string;
  inferenceMode: string;
  statusNotes: string;
}

/**
 * Image build pipeline information
 */
export interface BuildPipelineInfo {
  builderTool: string;
  packageDefinitions: string;
  buildScript: string;
  reproducibilityStatus: string;
  internalIsoArtifact: string;
  lastCiRunId: string;
  lastCiRunDate: string;
  lastCiRunStatus: "Failed at ISO build step" | "Passed" | "Pending";
  pythonTestCount: number;
  pythonTestSuite: string;
}

/**
 * Structured release metadata
 */
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

/**
 * Architecture layer in the 4-layer technical stack
 */
export interface ArchitectureLayer {
  level: number;
  name: string;
  shortTitle: string;
  protocol: string;
  tag: string;
  accent: string;
  description: string;
  disclaimer: string;
  components: Array<{ label: string; detail: string }>;
  flowTarget: string;
}

/**
 * Panel component item in the 9-element desktop shell panel
 */
export interface PanelComponentItem {
  index: number;
  title: string;
  desc: string;
  status: FeatureStatus;
}

/**
 * Core capability feature pillar
 */
export interface CoreFeaturePillar {
  num: string;
  tag: string;
  title: string;
  description: string;
  theme: "light" | "dark" | "orange" | "soft";
  iconName: "LayoutGrid" | "Layers" | "Bot" | "TerminalSquare" | "ShieldCheck" | "Cpu";
  techSpecs: string[];
  status?: FeatureStatus;
}

/**
 * Installation guide step
 */
export interface InstallationStep {
  num: string;
  title: string;
  summary: string;
  description: string;
  warning?: string;
  actionText: string;
  actionHref?: string;
  actionType: "download-anchor" | "external-tool" | "boot-modal" | "guide-modal" | "wizard-link";
  tag: string;
}

/**
 * Frequently asked question item
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

/**
 * Technical specification row
 */
export interface SpecRow {
  spec: string;
  value: string;
  status: string;
  type: "verified" | "experimental" | "progress" | "planned" | "unverified";
}

// ==========================================
// CUSTOM INSTALLATION WIZARD DATA STRUCTURES
// ==========================================

export type WizardStepId =
  | "welcome"
  | "destination"
  | "profile"
  | "hardware"
  | "disk"
  | "user"
  | "desktop"
  | "ai"
  | "review"
  | "next-steps";

export type DestinationType = "vm" | "physical" | "explore";

export type BootMode = "uefi" | "bios";

export type SystemProfileType = "recommended" | "minimal" | "custom";

export interface UserHardwareInput {
  cpuArch: string;
  cpuCores: number;
  ramGb: number;
  gpuVendor: "intel" | "amd" | "nvidia" | "other" | "unspecified";
  storageGb: number;
  displayResolution: string;
  networkType: "ethernet" | "wifi" | "both" | "offline";
  isUserProvided: boolean;
}

export type DiskPartitionMode = "entire-disk" | "custom" | "review-only";

export interface PartitionPlanEntry {
  mountPoint: string;
  label: string;
  sizeGb: number | string;
  fsType: "vfat (FAT32)" | "btrfs" | "ext4" | "linux-swap";
  flags: string;
  description: string;
}

export interface UserSystemConfig {
  username: string;
  hostname: string;
  timezone: string;
  locale: string;
  keyboardLayout: string;
  networkConfig: "dhcp" | "manual" | "defer";
  skipPasswordInPreview: boolean;
  passwordProvided: boolean;
}

export interface DesktopComponentToggle {
  id: string;
  name: string;
  category: "Core Shell" | "Integrations" | "External Helpers";
  enabled: boolean;
  status: FeatureStatus;
  description: string;
  isCore: boolean;
}

export type AiSetupDecision = "first-boot" | "defer" | "review-only";

export interface AiConfigState {
  decision: AiSetupDecision;
  runtime: string;
  modelAlias: string;
  modelArtifact: string;
  manifestSha256: string;
  temperature: number;
  maxOutputTokens: number;
  backendPort: number;
  ollamaPort: number;
  allowLowMemoryFallback: boolean;
}

export interface InstallerWizardState {
  currentStep: WizardStepId;
  destination: DestinationType;
  bootMode: BootMode;
  profile: SystemProfileType;
  hardware: UserHardwareInput;
  diskMode: DiskPartitionMode;
  targetDiskName: string;
  diskAcknowledged: boolean;
  userConfig: UserSystemConfig;
  desktopComponents: DesktopComponentToggle[];
  aiConfig: AiConfigState;
  completedSteps: WizardStepId[];
}
