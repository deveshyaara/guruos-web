"use client";

import React from "react";
import { DiskPartitionMode } from "@/types";
import { DEFAULT_PARTITION_SCHEMAS } from "@/data/installerData";
import { 
  HardDrive, 
  ShieldAlert
} from "lucide-react";

interface Step5DiskPlanProps {
  diskMode: DiskPartitionMode;
  targetDiskName: string;
  acknowledged: boolean;
  onModeChange: (mode: DiskPartitionMode) => void;
  onDiskNameChange: (name: string) => void;
  onAcknowledgeChange: (ack: boolean) => void;
}

export const Step5DiskPlan: React.FC<Step5DiskPlanProps> = ({
  diskMode,
  targetDiskName,
  acknowledged,
  onModeChange,
  onDiskNameChange,
  onAcknowledgeChange,
}) => {
  const customPartitions = DEFAULT_PARTITION_SCHEMAS.customExample;

  const activePartitions =
    diskMode === "entire-disk"
      ? DEFAULT_PARTITION_SCHEMAS.entireDiskUefi
      : customPartitions;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 05 // STORAGE ARCHITECTURE BLUEPRINT
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          INSTALLATION DISK & PARTITION REVIEW.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Plan your target disk schema. Review schematic partition layouts and safety boundaries for the future native installer.
        </p>
      </div>

      {/* Prominent Mandatory Safety Disclaimer Box */}
      <div className="border-3 border-[#0A0A0A] bg-[#FFF5F0] p-5 sm:p-6 brutal-shadow-orange space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5A1F] uppercase">
          <ShieldAlert className="w-5 h-5 text-[#FF5A1F]" />
          <span>MANDATORY PREVIEW DISCLAIMER // SAFETY PROTOCOL</span>
        </div>
        <p className="font-mono text-xs text-[#0A0A0A] leading-relaxed">
          &ldquo;Disk planning on this website is a preview only. It does not scan or modify your physical disks. Actual installation requires a verified native installer and explicit target-disk confirmation.&rdquo;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-[#0A0A0A]/80 pt-1">
          <div className="border border-[#0A0A0A] p-2 bg-[#FFFFFF]">
            <strong>• No Disk Access:</strong> The browser cannot mount or format storage.
          </div>
          <div className="border border-[#0A0A0A] p-2 bg-[#FFFFFF]">
            <strong>• No Root Commands:</strong> Zero privilege escalation in browser.
          </div>
          <div className="border border-[#0A0A0A] p-2 bg-[#FFFFFF]">
            <strong>• AI Is Bounded:</strong> AI assistant cannot trigger disk actions.
          </div>
        </div>
      </div>

      {/* Target Drive Specification Input */}
      <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#0A0A0A]/15 pb-2">
          <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#FF5A1F]" />
            <span>TARGET DISK IDENTIFIER (PLANNING PREVIEW)</span>
          </div>
          <span className="font-mono text-[11px] text-[#0A0A0A]/60">BLOCK DEVICE SPEC</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase">
              Target Device Node:
            </label>
            <input
              type="text"
              value={targetDiskName}
              onChange={(e) => onDiskNameChange(e.target.value)}
              placeholder="/dev/nvme0n1 or /dev/vda"
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs text-[#0A0A0A] font-bold focus:outline-none"
            />
            <div className="text-[10px] text-[#0A0A0A]/60">
              * Example planning label. Real block devices must be selected inside native installer.
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase">
              Planning Partition Mode:
            </label>
            <select
              value={diskMode}
              onChange={(e) => onModeChange(e.target.value as DiskPartitionMode)}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs text-[#0A0A0A] font-bold focus:outline-none"
            >
              <option value="entire-disk">Use Dedicated Entire Disk (Recommended for VMs/Dedicated PC)</option>
              <option value="custom">Custom Partitioning Blueprint (Btrfs / ext4 / Swap)</option>
              <option value="review-only">Review Existing Partition Layout (Read-Only Inspection)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Schematic Partition Visualizer (Planning Illustration) */}
      <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 brutal-shadow-lg space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#0A0A0A] pb-3 gap-2">
          <div>
            <div className="font-mono text-[10px] text-[#FF5A1F] font-bold uppercase">
              SCHEMATIC PARTITION LAYOUT // PLANNING ILLUSTRATION
            </div>
            <h4 className="font-black text-lg uppercase text-[#0A0A0A]">
              {diskMode === "entire-disk"
                ? "DEDICATED DISK LAYOUT (BTRFS SUBVOLUMES)"
                : diskMode === "custom"
                ? "CUSTOM MULTI-PARTITION SPECIFICATION"
                : "READ-ONLY LAYOUT INSPECTION"}
            </h4>
          </div>
          <span className="font-mono text-[11px] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 font-bold uppercase self-start sm:self-auto">
            TARGET: {targetDiskName}
          </span>
        </div>

        {/* Visual Partition Bar */}
        <div className="space-y-2">
          <div className="flex w-full h-12 border-2 border-[#0A0A0A] overflow-hidden text-xs font-mono font-bold">
            <div className="w-[15%] bg-[#0A0A0A] text-[#FFFFFF] flex items-center justify-center p-1 text-center truncate border-r border-[#FFFFFF]/20">
              <span>ESP /boot (1 GB)</span>
            </div>
            <div className="w-[70%] bg-[#FF5A1F] text-[#FFFFFF] flex items-center justify-center p-1 text-center truncate border-r border-[#0A0A0A]">
              <span>Root / (Btrfs @root + @home)</span>
            </div>
            <div className="w-[15%] bg-[#171717] text-[#FF9B42] flex items-center justify-center p-1 text-center truncate">
              <span>Swap (8 GB)</span>
            </div>
          </div>
          <div className="flex justify-between font-mono text-[10px] text-[#0A0A0A]/60">
            <span>Sector 0 (GPT Table)</span>
            <span className="text-[#FF5A1F] font-bold">[SCHEMATIC PREVIEW — NO REAL DISK OPERATION]</span>
            <span>End of Disk</span>
          </div>
        </div>

        {/* Partition Details Table */}
        <div className="border-2 border-[#0A0A0A] overflow-hidden">
          <div className="bg-[#0A0A0A] text-[#FFFFFF] px-4 py-2 font-mono text-[11px] font-bold uppercase grid grid-cols-12">
            <div className="col-span-3">Mount Point</div>
            <div className="col-span-3">Label</div>
            <div className="col-span-2">Filesystem</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-2 text-right">Flags</div>
          </div>
          <div className="divide-y divide-[#0A0A0A] font-mono text-xs">
            {activePartitions.map((part, idx) => (
              <div key={idx} className="px-4 py-3 grid grid-cols-12 items-center bg-[#FFFFFF] hover:bg-[#F5F3EF]">
                <div className="col-span-3 font-bold text-[#FF5A1F]">{part.mountPoint}</div>
                <div className="col-span-3 text-[#0A0A0A] font-medium">{part.label}</div>
                <div className="col-span-2 text-[#0A0A0A]/80">{part.fsType}</div>
                <div className="col-span-2 text-[#0A0A0A] font-bold">{part.sizeGb}</div>
                <div className="col-span-2 text-right text-[11px] text-[#0A0A0A]/60">{part.flags}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Acknowledgment Checkbox */}
      <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-5 brutal-shadow space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => onAcknowledgeChange(e.target.checked)}
            className="w-5 h-5 accent-[#FF5A1F] mt-0.5 shrink-0 cursor-pointer"
          />
          <div className="font-mono text-xs space-y-1">
            <div className="font-bold text-[#0A0A0A] uppercase">
              I understand that this is a browser configuration blueprint only.
            </div>
            <p className="text-[#0A0A0A]/80 leading-relaxed font-sans text-xs">
              I acknowledge that no disks are being scanned, erased, or partitioned right now. When the native operating-system installer is completed and released, real destructive disk writes will require booting from verified media and explicitly confirming the target drive before any partition changes can occur.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
