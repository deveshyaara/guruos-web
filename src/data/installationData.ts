import { InstallationStep } from "@/types";
import { siteConfig } from "@/config/siteConfig";

export const installationSteps: InstallationStep[] = [
  {
    num: "01",
    title: "DOWNLOAD",
    summary: "Get the official GuruOS ISO from the download section.",
    description:
      "Acquire the latest development build image directly from our official channels. Keep the checksum handy for image integrity verification.",
    actionText: "GO TO DOWNLOAD ↓",
    actionHref: "#download",
    actionType: "download-anchor",
    tag: "STEP_01 // MEDIA",
  },
  {
    num: "02",
    title: "CREATE A BOOTABLE USB",
    summary: "Use a compatible tool such as Balena Etcher or Rufus to write the ISO to a USB drive.",
    description:
      "Flash the downloaded image onto an 8GB+ USB flash drive using Balena Etcher or Rufus in DD mode. Writing an image erases all existing data on the target USB.",
    warning: "WARNING: Writing an image will permanently erase all existing data on the selected USB drive. Confirm device selection.",
    actionText: "TOOL DOCUMENTATION ↗",
    actionHref: siteConfig.balenaEtcherUrl,
    actionType: "external-tool",
    tag: "STEP_02 // FLASHING",
  },
  {
    num: "03",
    title: "BOOT INTO GURUOS",
    summary: "Back up important files, confirm hardware compatibility, and boot from the prepared USB using the computer's boot menu.",
    description:
      "Insert the USB, power on your machine, and press your BIOS/UEFI boot menu key (typically F12, F9, or Del). Boot behavior depends on your motherboard firmware.",
    actionText: "BOOT KEY MATRIX ↗",
    actionType: "boot-modal",
    tag: "STEP_03 // FIRMWARE",
  },
  {
    num: "04",
    title: "INSTALL AND CONFIGURE",
    summary: "Follow the release-specific installation documentation and post-install setup instructions.",
    description:
      "Launch the installer, select your keyboard layout, and configure storage partitions. Read disk partition instructions carefully before committing changes.",
    warning: "CRITICAL: Back up all personal files and double-check your drive selection to avoid accidental data loss.",
    actionText: "READ FULL GUIDE ↗",
    actionType: "guide-modal",
    tag: "STEP_04 // DISK_CONFIG",
  },
];
