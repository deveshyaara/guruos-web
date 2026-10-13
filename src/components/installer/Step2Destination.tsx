"use client";

import React from "react";
import { DestinationType } from "@/types";
import { 
  Laptop, 
  Server, 
  Compass, 
  AlertTriangle, 
  CheckCircle2
} from "lucide-react";

interface Step2DestinationProps {
  destination: DestinationType;
  onChange: (val: DestinationType) => void;
}

export const Step2Destination: React.FC<Step2DestinationProps> = ({ destination, onChange }) => {
  const options = [
    {
      id: "vm" as DestinationType,
      title: "VIRTUAL MACHINE (RECOMMENDED)",
      tag: "DISPOSABLE TEST BED",
      icon: Server,
      accent: "#FF5A1F",
      recommendation: "Recommended for exploration & testing",
      description:
        "Run GuruOS inside an isolated virtual environment such as QEMU/KVM, VirtualBox, or VMware. Recommended for initial testing of early development builds because it cannot alter your host computer's disks or partition tables.",
      requirements: [
        "Allocated RAM: Minimum 8 GB recommended for local AI model inference",
        "Virtual Storage: 32 GB – 64 GB dynamically allocated virtual disk",
        "Wayland & 3D Acceleration: Enabled (virtio-gpu or VirGL where supported)",
        "Host Isolation: Host disks remain completely untouched and unmounted",
      ],
      warning:
        "Note: The website does not automatically create or start a VM on your machine. You will configure your hypervisor manually using the provided parameters.",
    },
    {
      id: "physical" as DestinationType,
      title: "PHYSICAL COMPUTER",
      tag: "BARE-METAL HARDWARE",
      icon: Laptop,
      accent: "#D83B12",
      recommendation: "Dedicated test hardware only",
      description:
        "Install GuruOS directly onto dedicated x86_64 PC hardware to test native Hyprland performance, GPU drivers, Wi-Fi hardware, and direct CPU/GPU model inference.",
      requirements: [
        "Dedicated Machine: Do NOT install on your sole production or mission-critical workstation",
        "Full External Backup: Completely back up all existing documents, encryption keys, and data",
        "UEFI or BIOS: Modern 64-bit x86_64 firmware with boot menu access",
        "USB Flash Drive: 8 GB+ USB 3.0 drive for writing installation media",
      ],
      warning:
        "CRITICAL DATA LOSS WARNING: Writing an operating system to physical storage partitions can permanently erase existing data. Real installation will require explicit disk selection in the future native installer.",
    },
    {
      id: "explore" as DestinationType,
      title: "EXPLORE INSTALLATION PROCESS",
      tag: "INTERACTIVE WALKTHROUGH",
      icon: Compass,
      accent: "#0A0A0A",
      recommendation: "Planning & Architecture Inspection",
      description:
        "Walk through the full installation blueprint without preparing for an immediate deployment. Explore available profiles, examine storage layouts, preview user configurations, and inspect AI setup choices.",
      requirements: [
        "Zero Hardware Commitment: No VM or spare PC required",
        "Educational Overview: Inspect how Arch Linux, Hyprland, and Ollama integrate",
        "Configuration Export: Generate and save an install blueprint JSON file",
        "Direct Next Steps: Review test-image instructions and GitHub development status",
      ],
      warning: null,
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 02 // TARGET SELECTION
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          CHOOSE YOUR INSTALLATION DESTINATION.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Select the environment you are preparing to configure. Each target dictates hardware expectations, safety boundaries, and recommended storage layouts.
        </p>
      </div>

      {/* Target Options Cards */}
      <div className="grid grid-cols-1 gap-4">
        {options.map((opt) => {
          const isSelected = destination === opt.id;
          const Icon = opt.icon;

          return (
            <div
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`border-3 p-5 sm:p-6 transition-all cursor-pointer relative ${
                isSelected
                  ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange-lg"
                  : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0A0A0A]/15 gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 border-2 border-[#0A0A0A] flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#FF5A1F] text-[#FFFFFF]" : "bg-[#F5F3EF] text-[#0A0A0A]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg sm:text-xl uppercase text-[#0A0A0A]">
                        {opt.title}
                      </span>
                      {isSelected && (
                        <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] bg-[#0A0A0A] text-[#FFFFFF] px-2 py-0.5 font-bold uppercase">
                          <CheckCircle2 className="w-3 h-3 text-[#FF5A1F]" />
                          SELECTED
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-[11px] text-[#FF5A1F] font-bold">
                      {opt.recommendation}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[10px] px-2 py-0.5 border border-[#0A0A0A] bg-[#F5F3EF] font-bold uppercase">
                    {opt.tag}
                  </span>
                  <input
                    type="radio"
                    name="destination-type"
                    checked={isSelected}
                    onChange={() => onChange(opt.id)}
                    className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                    aria-label={opt.title}
                  />
                </div>
              </div>

              <div className="pt-4 space-y-3 font-mono text-xs">
                <p className="text-[#0A0A0A]/85 text-xs sm:text-sm font-sans leading-relaxed">
                  {opt.description}
                </p>

                {/* Requirements / Considerations Grid */}
                <div className="bg-[#F5F3EF] border border-[#0A0A0A] p-3 space-y-1.5">
                  <div className="font-bold uppercase text-[#0A0A0A] text-[11px]">
                    Key Considerations:
                  </div>
                  <ul className="space-y-1 text-[#0A0A0A]/80 text-[11px]">
                    {opt.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#FF5A1F] font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Warning if Bare Metal */}
                {opt.warning && (
                  <div className="p-3 bg-[#FFF5F0] border-l-4 border-[#FF5A1F] border-t border-r border-b border-[#0A0A0A] flex items-start gap-2 text-[11px] text-[#0A0A0A]">
                    <AlertTriangle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>{opt.warning}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
