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
 * Image build pipeline information
 */
export interface BuildPipelineInfo {
  builderTool: string;
  packageDefinitions: string;
  buildScript: string;
  reproducibilityStatus: string;
  internalIsoArtifact: string;
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
  iconName: "LayoutGrid" | "Layers" | "Bot" | "TerminalSquare";
  techSpecs: string[];
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
  actionType: "download-anchor" | "external-tool" | "boot-modal" | "guide-modal";
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
