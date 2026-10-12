"use client";

import React, { useState } from "react";
import { SparkIcon } from "../icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";
import { X, Copy, Check, ShieldCheck, Terminal } from "lucide-react";

interface ChecksumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChecksumModal: React.FC<ChecksumModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const checksumString = siteConfig.release.sha256Checksum || "SHA256 CHECKSUM PENDING SIGNATURE (PRE-RELEASE)";
  const verifyCommand = `sha256sum -c guruos-x86_64.iso.sha256`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checksum-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#FF5A1F] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>IMAGE INTEGRITY & CRYPTOGRAPHY</span>
          </div>
          <h3
            id="checksum-modal-title"
            className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight"
          >
            VERIFY GURUOS IMAGE.
          </h3>
          <p className="text-xs sm:text-sm text-[#0A0A0A]/70 font-mono">
            Always verify the cryptographic signature and checksum before flashing installation media to prevent corruption or tampering.
          </p>
        </div>

        {/* Checksum Details */}
        <div className="space-y-4">
          
          <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-4 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs font-bold uppercase text-[#0A0A0A]">
              <span>SHA-256 HASH (STATUS)</span>
              <span className="text-[#FF5A1F] text-[10px] bg-[#FFFFFF] border border-[#0A0A0A] px-1.5 py-0.5">
                {siteConfig.release.sha256Checksum ? "PUBLISHED" : "UNPUBLISHED (PROTOTYPE)"}
              </span>
            </div>
            
            <div className="p-2.5 bg-[#0A0A0A] text-[#FFFFFF] font-mono text-xs break-all flex items-center justify-between gap-2 border border-[#0A0A0A]">
              <span>{checksumString}</span>
              {siteConfig.release.sha256Checksum && (
                <button
                  type="button"
                  onClick={() => copyToClipboard(checksumString)}
                  className="shrink-0 p-1 text-[#FF5A1F] hover:text-[#FFFFFF]"
                  aria-label="Copy checksum"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>

          {/* Terminal Command for Verification */}
          <div className="space-y-2 font-mono text-xs">
            <div className="font-bold uppercase text-[#0A0A0A] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>LINUX VERIFICATION COMMAND</span>
            </div>
            <div className="bg-[#171717] text-[#FFFFFF] p-3 border-2 border-[#0A0A0A] flex items-center justify-between">
              <code>{verifyCommand}</code>
              <button
                type="button"
                onClick={() => copyToClipboard(verifyCommand)}
                className="text-[#FF5A1F] hover:text-[#FFFFFF] p-1"
                aria-label="Copy verify command"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#FFFFFF] border border-[#0A0A0A] font-mono text-[11px] text-[#0A0A0A]/70 space-y-1">
            <p><strong>Note on Pre-Release Integrity:</strong></p>
            <p>Official cryptographic hashes (SHA-256 and GPG signatures) will be published directly alongside the ISO binary once the public milestone is tagged on GitHub.</p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full brutal-btn bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3 text-xs font-bold uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
