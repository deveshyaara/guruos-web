"use client";

import React from "react";
import { AiConfigState, AiSetupDecision } from "@/types";
import { siteConfig } from "@/config/siteConfig";
import { 
  Bot, 
  ShieldCheck, 
  CheckCircle2
} from "lucide-react";

interface Step8LocalAiProps {
  config: AiConfigState;
  onChange: (cfg: AiConfigState) => void;
}

export const Step8LocalAi: React.FC<Step8LocalAiProps> = ({ config, onChange }) => {
  const { model } = siteConfig;

  const handleDecisionChange = (dec: AiSetupDecision) => {
    onChange({
      ...config,
      decision: dec,
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 08 // INTELLIGENCE SUBSYSTEM SPECIFICATION
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          LOCAL AI CONFIGURATION.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Configure local language model deployment parameters. Local inference runs via Ollama loopback without proprietary cloud services.
        </p>
      </div>

      {/* Model Identity & Manifest Audit Card */}
      <div className="border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 brutal-shadow-orange-lg space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#FFFFFF]/20 gap-2">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-[#FF5A1F]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
              DOCUMENTED REPOSITORY MODEL MANIFEST
            </span>
          </div>
          <span className="font-mono text-[10px] bg-[#1a1410] border border-[#FF5A1F] text-[#FF9B42] px-2 py-0.5 font-bold uppercase">
            RUNTIME: OLLAMA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">MODEL ALIAS</div>
            <div className="font-bold text-sm text-[#FF5A1F]">{model.modelAlias}</div>
            <div className="text-[10px] text-[#FFFFFF]/60">Registered inside Ollama instance</div>
          </div>

          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">BASE ARTIFACT</div>
            <div className="font-bold text-xs text-[#FFFFFF] truncate">{model.artifactName}</div>
            <div className="text-[10px] text-[#FFFFFF]/60">4-bit medium quantized GGUF</div>
          </div>

          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">MODELFILE LIMITS</div>
            <div className="font-bold text-xs text-[#FFFFFF]">Temp: 0 // Limit: 256 tokens</div>
            <div className="text-[10px] text-[#FFFFFF]/60">Deterministic developer answers</div>
          </div>

          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">BACKEND DAEMON</div>
            <div className="font-bold text-xs text-[#FFFFFF]">{model.backendEndpoint}</div>
            <div className="text-[10px] text-[#FFFFFF]/60">Python FastAPI / MCP on port 8000</div>
          </div>

          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">OLLAMA SERVICE</div>
            <div className="font-bold text-xs text-[#FFFFFF]">{model.ollamaEndpoint}</div>
            <div className="text-[10px] text-[#FFFFFF]/60">Local HTTP API on port 11434</div>
          </div>

          <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3 space-y-1">
            <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">WEIGHT STORAGE</div>
            <div className="font-bold text-xs text-[#FF9B42]">Not in Git</div>
            <div className="text-[10px] text-[#FFFFFF]/60">Fetched during first-boot network setup</div>
          </div>
        </div>

        {/* Verified SHA-256 Checksum Display */}
        <div className="bg-[#141414] border border-[#FF5A1F]/50 p-3 font-mono text-xs space-y-1.5">
          <div className="text-[10px] text-[#FF5A1F] font-bold uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>AUTHORITATIVE SHA-256 MANIFEST CHECKSUM</span>
          </div>
          <code className="block bg-[#0A0A0A] p-2 border border-[#FFFFFF]/10 text-[11px] text-emerald-400 select-all overflow-x-auto">
            {model.manifestSha256}
          </code>
          <div className="text-[10px] text-[#FFFFFF]/50">
            * First-boot setup validates this exact digest before creating the <code>os-agent</code> container. Unverified artifacts are rejected.
          </div>
        </div>

        {/* Note on Historical Model Disambiguation (Prompt Section 8 requirement) */}
        <div className="text-[11px] font-mono text-[#FFFFFF]/70 bg-[#171717] p-2.5 border-l-2 border-[#FF9B42]">
          <strong>Historical Note:</strong> {model.historicalModelNote}
        </div>
      </div>

      {/* Deployment Decision Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2">
          <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>SELECT FIRST-BOOT AI INITIALIZATION STRATEGY</span>
          </span>
          <span className="font-mono text-[11px] text-[#0A0A0A]/60">CHOICE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          
          {/* Strategy 1: First-Boot Download */}
          <div
            onClick={() => handleDecisionChange("first-boot")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              config.decision === "first-boot"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/15">
                <span className="font-black text-sm uppercase text-[#0A0A0A]">
                  CONFIGURE ON FIRST BOOT
                </span>
                <input
                  type="radio"
                  name="ai-decision"
                  checked={config.decision === "first-boot"}
                  onChange={() => handleDecisionChange("first-boot")}
                  className="accent-[#FF5A1F] w-4 h-4 cursor-pointer"
                  aria-label="Configure on First Boot"
                />
              </div>
              <div className="text-[#FF5A1F] font-bold text-[11px]">
                Recommended (Internet Required on 1st Boot)
              </div>
              <p className="text-[#0A0A0A]/85 font-sans text-xs leading-relaxed">
                During first-boot onboarding, the system checks Ollama reachability, downloads the verified 2.1 GB model weights, checks the SHA-256 hash, and registers <code>os-agent</code>.
              </p>
            </div>
            <div className="pt-3 border-t border-[#0A0A0A]/10 mt-3 text-[10px] text-[#0A0A0A]/60">
              * Non-fatal: if download fails, desktop remains 100% usable.
            </div>
          </div>

          {/* Strategy 2: Defer AI Setup */}
          <div
            onClick={() => handleDecisionChange("defer")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              config.decision === "defer"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/15">
                <span className="font-black text-sm uppercase text-[#0A0A0A]">
                  DEFER AI SETUP
                </span>
                <input
                  type="radio"
                  name="ai-decision"
                  checked={config.decision === "defer"}
                  onChange={() => handleDecisionChange("defer")}
                  className="accent-[#FF5A1F] w-4 h-4 cursor-pointer"
                  aria-label="Defer AI Setup"
                />
              </div>
              <div className="text-[#0A0A0A]/70 font-bold text-[11px]">
                Lightweight Boot / Low Memory
              </div>
              <p className="text-[#0A0A0A]/85 font-sans text-xs leading-relaxed">
                Do not download model weights during first boot. Recommended for machines with &lt;8 GB RAM, metered networks, or users wanting a pure Hyprland desktop without active inference.
              </p>
            </div>
            <div className="pt-3 border-t border-[#0A0A0A]/10 mt-3 text-[10px] text-[#0A0A0A]/60">
              * Can be manually downloaded later with <code>ollama pull</code>.
            </div>
          </div>

          {/* Strategy 3: Review Only */}
          <div
            onClick={() => handleDecisionChange("review-only")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              config.decision === "review-only"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/15">
                <span className="font-black text-sm uppercase text-[#0A0A0A]">
                  REVIEW ARCHITECTURE ONLY
                </span>
                <input
                  type="radio"
                  name="ai-decision"
                  checked={config.decision === "review-only"}
                  onChange={() => handleDecisionChange("review-only")}
                  className="accent-[#FF5A1F] w-4 h-4 cursor-pointer"
                  aria-label="Review Architecture Only"
                />
              </div>
              <div className="text-[#0A0A0A]/70 font-bold text-[11px]">
                Specification Blueprint Inspection
              </div>
              <p className="text-[#0A0A0A]/85 font-sans text-xs leading-relaxed">
                Review model specifications and integration flow without configuring an automated download. Ideal for users planning to connect an existing external Ollama server.
              </p>
            </div>
            <div className="pt-3 border-t border-[#0A0A0A]/10 mt-3 text-[10px] text-[#0A0A0A]/60">
              * Exports parameters to configuration profile.
            </div>
          </div>

        </div>
      </div>

      {/* Fault Tolerance & Safety Guarantee */}
      <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] font-mono text-xs space-y-1">
        <div className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>FAULT TOLERANCE GUARANTEE</span>
        </div>
        <p className="text-[#0A0A0A]/80 font-sans text-xs leading-relaxed">
          The first-boot workflow is designed so that AI backend failures are non-fatal to the desktop. If network drops, model download halts, or Ollama fails to respond, the Wayland session and native GTK4 shell will boot normally and display a clear diagnostics panel rather than a broken black screen.
        </p>
      </div>
    </div>
  );
};
