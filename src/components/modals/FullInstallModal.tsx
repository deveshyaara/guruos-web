"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { 
  X, 
  AlertTriangle, 
  Terminal, 
  ExternalLink, 
  BookOpen,
  CheckCircle2
} from "lucide-react";

interface FullInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullInstallModal: React.FC<FullInstallModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"prep" | "usb" | "boot" | "install">("prep");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A0A0A]/85 backdrop-blur-xs animate-fadeIn overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] z-20"
          aria-label="Close installation guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#FF5A1F] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>DRAFT INSTALLATION DOCUMENTATION // REV 0.1</span>
          </div>
          <h3
            id="install-modal-title"
            className="text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A] tracking-tight"
          >
            COMPLETE INSTALLATION GUIDE.
          </h3>
          <p className="text-xs sm:text-sm text-[#0A0A0A]/70 font-mono">
            Step-by-step instructions for preparing, booting, and configuring GuruOS on modern x86_64 hardware.
          </p>
        </div>

        {/* Important Draft Warning Alert */}
        <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] space-y-2 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5A1F] uppercase">
            <AlertTriangle className="w-4 h-4 text-[#FF5A1F]" />
            <span>CRITICAL PRE-RELEASE NOTICE: DRAFT PROCEDURES</span>
          </div>
          <p className="font-mono text-xs text-[#0A0A0A]/80 leading-relaxed">
            The exact installer capabilities, boot behavior, partitioning wizard, and hardware support are subject to change as development images progress. <strong>Always create complete backups of your personal data before altering disk partitions.</strong>
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex border-b-2 border-[#0A0A0A] mb-6 font-mono text-xs font-bold uppercase overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("prep")}
            className={`px-4 py-2.5 border-r-2 border-[#0A0A0A] transition-colors ${
              activeTab === "prep" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "hover:bg-[#F5F3EF] text-[#0A0A0A]"
            }`}
          >
            01 / Preparation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("usb")}
            className={`px-4 py-2.5 border-r-2 border-[#0A0A0A] transition-colors ${
              activeTab === "usb" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "hover:bg-[#F5F3EF] text-[#0A0A0A]"
            }`}
          >
            02 / Flash USB
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("boot")}
            className={`px-4 py-2.5 border-r-2 border-[#0A0A0A] transition-colors ${
              activeTab === "boot" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "hover:bg-[#F5F3EF] text-[#0A0A0A]"
            }`}
          >
            03 / Boot Menu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("install")}
            className={`px-4 py-2.5 transition-colors ${
              activeTab === "install" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "hover:bg-[#F5F3EF] text-[#0A0A0A]"
            }`}
          >
            04 / Install & Disk
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6 font-mono text-xs sm:text-sm">
          
          {activeTab === "prep" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase text-[#0A0A0A] font-sans">
                Phase 1: Pre-Installation Checklist
              </h4>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                Before doing anything with operating system installation media, guarantee your current system is protected:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] space-y-1">
                  <div className="font-bold text-[#0A0A0A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                    <span>External Backup</span>
                  </div>
                  <div className="text-[11px] text-[#0A0A0A]/70">
                    Copy documents, encryption keys, and bookmarks to an external drive or cloud storage.
                  </div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] space-y-1">
                  <div className="font-bold text-[#0A0A0A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                    <span>Target USB Flash Drive</span>
                  </div>
                  <div className="text-[11px] text-[#0A0A0A]/70">
                    A dedicated USB 3.0 flash drive with at least 8 GB of storage space.
                  </div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] space-y-1">
                  <div className="font-bold text-[#0A0A0A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                    <span>UEFI Firmware Setting</span>
                  </div>
                  <div className="text-[11px] text-[#0A0A0A]/70">
                    Verify UEFI mode is enabled. Secure Boot support depends on kernel signing keys in the build.
                  </div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] space-y-1">
                  <div className="font-bold text-[#0A0A0A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                    <span>Internet Access</span>
                  </div>
                  <div className="text-[11px] text-[#0A0A0A]/70">
                    Ethernet or Wi-Fi connectivity during post-install for rolling package updates.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "usb" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase text-[#0A0A0A] font-sans">
                Phase 2: Writing the ISO to USB
              </h4>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                Writing an ISO to a flash drive rewrites the drive block-by-block. <strong>All existing files on the USB will be destroyed.</strong>
              </p>

              <div className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-3">
                <div className="font-bold uppercase text-[#0A0A0A]">Recommended GUI Tools:</div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.balenaEtcherUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-[#F5F3EF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] border border-[#0A0A0A] px-4 py-2.5 text-xs text-[#0A0A0A] flex items-center justify-between"
                  >
                    <span>Balena Etcher (Cross-platform)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                  <a
                    href={siteConfig.rufusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-[#F5F3EF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] border border-[#0A0A0A] px-4 py-2.5 text-xs text-[#0A0A0A] flex items-center justify-between"
                  >
                    <span>Rufus (Windows / DD mode)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

              <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-4 space-y-2">
                <div className="text-[#FF9B42] font-bold flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Linux Command Line (dd method):</span>
                </div>
                <pre className="text-xs text-[#FFFFFF]/90 bg-[#171717] p-2.5 border border-[#FFFFFF]/10 overflow-x-auto">
                  sudo dd bs=4M if=guruos-x86_64.iso of=/dev/sdX status=progress oflag=sync
                </pre>
                <div className="text-[11px] text-[#FFFFFF]/50">
                  * Replace `/dev/sdX` with your exact USB device letter. Do not write to system partitions.
                </div>
              </div>
            </div>
          )}

          {activeTab === "boot" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase text-[#0A0A0A] font-sans">
                Phase 3: Booting from Live Media
              </h4>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                Reboot your computer with the USB drive inserted. As soon as the manufacturer logo appears, press your machine&apos;s boot menu key:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                <div className="border border-[#0A0A0A] p-2 text-center bg-[#F5F3EF]">
                  <div className="font-bold text-[#FF5A1F]">F12</div>
                  <div className="text-[10px] text-[#0A0A0A]/70">Dell, Lenovo, Acer</div>
                </div>
                <div className="border border-[#0A0A0A] p-2 text-center bg-[#F5F3EF]">
                  <div className="font-bold text-[#FF5A1F]">F9 / Esc</div>
                  <div className="text-[10px] text-[#0A0A0A]/70">HP Laptops</div>
                </div>
                <div className="border border-[#0A0A0A] p-2 text-center bg-[#F5F3EF]">
                  <div className="font-bold text-[#FF5A1F]">F8 / F11</div>
                  <div className="text-[10px] text-[#0A0A0A]/70">ASUS, MSI Boards</div>
                </div>
                <div className="border border-[#0A0A0A] p-2 text-center bg-[#F5F3EF]">
                  <div className="font-bold text-[#FF5A1F]">Option / Alt</div>
                  <div className="text-[10px] text-[#0A0A0A]/70">Intel Apple Mac</div>
                </div>
              </div>

              <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] text-xs space-y-1">
                <strong>Live Environment Selection:</strong>
                <p className="text-[#0A0A0A]/80">
                  Select &quot;GuruOS Live Session (x86_64)&quot; from the bootloader menu. Hyprland and the native GTK4 shell will initialize into a live test environment.
                </p>
              </div>
            </div>
          )}

          {activeTab === "install" && (
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase text-[#0A0A0A] font-sans">
                Phase 4: Installation & Partitioning
              </h4>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                In the live session, launch the GuruOS installer from the top panel or by pressing <kbd className="px-1.5 py-0.5 border border-[#0A0A0A] bg-[#FFFFFF]">Super</kbd> + <kbd className="px-1.5 py-0.5 border border-[#0A0A0A] bg-[#FFFFFF]">Space</kbd> and typing <code>guruos-installer</code>.
              </p>

              <div className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-2">
                <div className="font-bold uppercase text-[#FF5A1F]">Disk Partitioning Modes:</div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-1.5 shrink-0" />
                    <span><strong>Erase entire disk:</strong> Recommended for dedicated machines. Replaces existing OS and formats Btrfs subvolumes for instant snapshots.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-1.5 shrink-0" />
                    <span><strong>Manual partitioning:</strong> Advanced users. Create EFI system partition (512MB /boot), Root (/) partition, and optional swap space.</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FF5A1F] bg-[#F5F3EF] p-3 text-xs text-[#0A0A0A]/80">
                <strong>Post-Install First Boot:</strong> Remove the USB drive when prompted and reboot. On first login, the Ask GURUOS welcome assistant guides your keybindings and display arrangement.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[11px] text-[#0A0A0A]/60">
            {"// DOCUMENTATION DRAFT: VALIDATED AGAINST ARCH 2026 ROADMAP"}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="brutal-btn bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
          >
            CLOSE GUIDE
          </button>
        </div>

      </div>
    </div>
  );
};
