"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { X, Copy, Check, ShieldCheck, Terminal, AlertTriangle, Cpu } from "lucide-react";

interface ChecksumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChecksumModal: React.FC<ChecksumModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const isoName = siteConfig.isoFileName || "guruos-0.1.0-dev-x86_64.iso";
  const modelSpec = siteConfig.model;
  const modelHash = modelSpec.manifestSha256;
  const modelFileName = modelSpec.artifactName;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checksum-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/85 backdrop-blur-xs animate-fadeIn overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#FF5A1F] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>CRYPTOGRAPHIC INTEGRITY &amp; AUDIT</span>
          </div>
          <h3
            id="checksum-modal-title"
            className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight"
          >
            VERIFY ARTIFACT CHECKSUMS.
          </h3>
          <p className="text-xs sm:text-sm text-[#0A0A0A]/70 font-mono">
            Cryptographic signatures and SHA-256 verification hashes for GuruOS releases and bundled AI weights.
          </p>
        </div>

        {/* Checksum Details */}
        <div className="space-y-6">

          {/* 1. Bundled AI Model Checksum (AUTHORITATIVE & VERIFIED) */}
          <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF5A1F]" />
                <span className="font-bold text-[#0A0A0A] uppercase">AI MODEL: {modelFileName}</span>
              </div>
              <span className="text-emerald-700 font-bold text-[10px] bg-[#FFFFFF] border border-[#0A0A0A] px-2 py-0.5 w-fit">
                VERIFIED SHA-256
              </span>
            </div>

            <div className="text-[11px] font-mono text-[#0A0A0A]/80">
              Bundled local model: <strong>{modelSpec.name}</strong> ({modelSpec.baseModel}, {modelSpec.quantization}, ~2.0 GB).
            </div>
            
            <div className="p-3 bg-[#0A0A0A] text-[#FFFFFF] font-mono text-xs break-all flex items-center justify-between gap-2 border border-[#0A0A0A]">
              <span className="text-[#FF9B42]">{modelHash}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(modelHash, "model-hash")}
                className="shrink-0 p-1.5 text-[#FF5A1F] hover:text-[#FFFFFF] cursor-pointer"
                title="Copy SHA-256 hash"
                aria-label="Copy SHA-256 hash"
              >
                {copiedKey === "model-hash" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="font-mono text-xs space-y-1">
              <span className="text-[#0A0A0A]/70 text-[11px] uppercase font-bold">Verification Command:</span>
              <div className="bg-[#171717] text-[#FFFFFF] p-2.5 border border-[#0A0A0A] flex items-center justify-between">
                <code className="text-[11px]">sha256sum {modelFileName}</code>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`sha256sum ${modelFileName}`, "model-cmd")}
                  className="text-[#FF5A1F] hover:text-[#FFFFFF] p-1 cursor-pointer"
                  title="Copy command"
                  aria-label="Copy command"
                >
                  {copiedKey === "model-cmd" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* 2. ISO Image Checksum (HONEST PRE-RELEASE STATUS) */}
          <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
              <span className="font-bold text-[#0A0A0A] uppercase">OS IMAGE: {isoName}</span>
              <span className="text-[#FF5A1F] font-bold text-[10px] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 w-fit">
                BUILD PENDING (CI FAILED)
              </span>
            </div>

            <div className="p-3 bg-[#FFF3ED] border-l-4 border-[#FF5A1F] font-mono text-xs text-[#0A0A0A] flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FF5A1F]">Notice: CI build Run 38157947896 failed at the ISO generation step.</strong>
                <p className="mt-1 text-[#0A0A0A]/80 text-[11px] leading-relaxed">
                  GuruOS never displays fabricated checksums. Official ISO SHA-256 and GPG signatures will be published immediately upon a successful GitHub Actions release build.
                </p>
              </div>
            </div>

            <div className="font-mono text-xs space-y-1">
              <span className="text-[#0A0A0A]/70 text-[11px] uppercase font-bold flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#FF5A1F]" />
                Future ISO Verification Command:
              </span>
              <div className="bg-[#171717] text-[#FFFFFF] p-2.5 border border-[#0A0A0A] flex items-center justify-between">
                <code className="text-[11px]">sha256sum -c {isoName}.sha256</code>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`sha256sum -c ${isoName}.sha256`, "iso-cmd")}
                  className="text-[#FF5A1F] hover:text-[#FFFFFF] p-1 cursor-pointer"
                  title="Copy command"
                  aria-label="Copy command"
                >
                  {copiedKey === "iso-cmd" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Cryptography Policy */}
          <div className="p-3.5 bg-[#F5F3EF] border border-[#0A0A0A] font-mono text-[11px] text-[#0A0A0A]/80 space-y-1">
            <p><strong>Integrity &amp; Anti-Tamper Policy:</strong></p>
            <p className="leading-relaxed">
              Every production ISO will be signed with our project GPG key and published with an accompanying SHA-256 checksum manifest. Always inspect hashes before writing to physical media.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full brutal-btn bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3 text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-[#FF5A1F] hover:text-[#0A0A0A] transition-colors"
            >
              CLOSE AUDIT PANEL
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

