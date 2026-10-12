/**
 * GuruOS Official Launch Website - Central Project Configuration
 * 
 * Edit this file to configure release channels, download links,
 * documentation endpoints, and project repository URLs.
 * 
 * When URLs are set to null or empty string, the UI automatically
 * reflects the "Coming Soon" or "Development Prototype" state
 * without breaking user experience or faking downloads.
 */

export interface ReleaseInfo {
  productName: string;
  channel: 'Prototype' | 'Development Build' | 'Alpha' | 'Beta' | 'Stable';
  version: string | null;
  releaseDate: string | null;
  architecture: string;
  format: string;
  /** ISO download URL. Set to null when the release build is not yet published. */
  isoDownloadUrl: string | null;
  /** Direct SHA256 checksum string or null if uncomputed. */
  sha256Checksum: string | null;
  /** Link to checksum verification file or signature. */
  checksumUrl: string | null;
  /** Link to release changelog/notes. */
  releaseNotesUrl: string | null;
  /** File size estimate or actual string (e.g., "2.4 GB") or null. */
  fileSizeBytes: string | null;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  supportingHeadline: string;
  metaDescription: string;
  siteUrl: string;
  
  // Project URLs
  githubRepoUrl: string | null;
  documentationUrl: string | null;
  installationGuideUrl: string | null;
  communityDiscordUrl: string | null;
  communityMatrixUrl: string | null;
  discussionsUrl: string | null;
  
  // External Tool Links
  balenaEtcherUrl: string;
  rufusUrl: string;
  
  // Current Release Configuration
  release: ReleaseInfo;
  
  // Status Flags
  isIsoAvailable: boolean;
  statusNotice: string;
}

export const siteConfig: SiteConfig = {
  siteName: "GURUOS",
  tagline: "YOUR MACHINE. YOUR RULES.",
  supportingHeadline: "A DIFFERENT KIND OF LINUX.",
  metaDescription: "Explore GuruOS, an Arch Linux-based desktop experience. Discover its features, download available builds, and follow the installation guide.",
  siteUrl: "https://guruos.org", // Placeholder canonical site URL

  // Official Project URLs (Configurable - null indicates channel under preparation)
  githubRepoUrl: "https://github.com/guruos/guruos", // Placeholder repo
  documentationUrl: "https://docs.guruos.org", // Placeholder docs
  installationGuideUrl: null, // Full web guide draft is accessible in-app; external docs url can be set here
  communityDiscordUrl: null, // Unconfigured community channel (omitted until official launch)
  communityMatrixUrl: null, // Unconfigured community channel
  discussionsUrl: "https://github.com/guruos/guruos/discussions", // Placeholder discussions

  // External utilities
  balenaEtcherUrl: "https://etcher.balena.io",
  rufusUrl: "https://rufus.ie",

  // Current Release Status (Prototype / Development Build)
  release: {
    productName: "GuruOS Desktop ISO",
    channel: "Prototype",
    version: "v0.1.0-prototype",
    releaseDate: null, // Deliberately unset: no fabricated release date
    architecture: "x86_64",
    format: ".iso",
    // Set to null to indicate build is currently in pre-release development
    isoDownloadUrl: null,
    sha256Checksum: null, // Checksum will be populated upon official image signing
    checksumUrl: null,
    releaseNotesUrl: "https://github.com/guruos/guruos/releases",
    fileSizeBytes: null,
  },

  // Toggle true once an actual ISO binary is built and hosted
  isIsoAvailable: false,
  statusNotice: "Prototype & Development Build Phase — Public ISO images are under active internal testing.",
};
