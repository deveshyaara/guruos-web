"use client";

import React, { useState } from "react";
import { SparkIcon } from "../icons/SparkIcon";
import { X, CheckCircle, BellRing, ArrowRight } from "lucide-react";

interface LaunchNotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchNotifyModal: React.FC<LaunchNotifyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [hardware, setHardware] = useState("x86_64 Laptop / Desktop");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="launch-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg">
        
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
            <SparkIcon className="w-3 h-3 text-[#FF5A1F]" />
            <span>DEVELOPMENT PROTOCOL NOTIFICATION</span>
          </div>
          <h3
            id="launch-modal-title"
            className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight"
          >
            JOIN THE GURUOS LAUNCH.
          </h3>
          <p className="text-xs sm:text-sm text-[#0A0A0A]/70 font-mono">
            Public ISO images are currently in early testing. Enter your email to receive direct notification and test builds as soon as they are signed.
          </p>
        </div>

        {/* State: Submitted Success */}
        {submitted ? (
          <div className="bg-[#F5F3EF] border-2 border-[#0A0A0A] p-6 space-y-4 text-center">
            <div className="w-12 h-12 bg-[#FF5A1F] text-[#FFFFFF] mx-auto flex items-center justify-center border-2 border-[#0A0A0A]">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-mono text-base font-bold uppercase text-[#0A0A0A]">
                YOU&apos;RE ON THE RADAR.
              </h4>
              <p className="font-mono text-xs text-[#0A0A0A]/70">
                Notification registered for <span className="font-bold text-[#0A0A0A]">{email}</span>. We will dispatch the ISO link when the build is signed.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="brutal-btn bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-6 py-2 text-xs font-bold uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
        ) : (
          /* Form Input */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="user-email" className="block font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                YOUR EMAIL ADDRESS <span className="text-[#FF5A1F]">*</span>
              </label>
              <input
                id="user-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@domain.org"
                className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-mono text-sm text-[#0A0A0A] focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="user-hardware" className="block font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                TARGET TEST ENVIRONMENT
              </label>
              <select
                id="user-hardware"
                value={hardware}
                onChange={(e) => setHardware(e.target.value)}
                className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs text-[#0A0A0A] focus:outline-none focus:border-[#FF5A1F]"
              >
                <option value="x86_64 Laptop / Desktop">Bare Metal: x86_64 Laptop / Desktop</option>
                <option value="KVM / QEMU Virtual Machine">Virtualization: KVM / QEMU / Proxmox</option>
                <option value="VirtualBox / VMware">Virtualization: VirtualBox / VMware</option>
                <option value="Dual Boot Configuration">Bare Metal: Dual Boot (Linux/Windows)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3.5 text-xs font-black uppercase tracking-widest brutal-shadow"
              >
                <span>REGISTER FOR ISO NOTIFICATION</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="font-mono text-[10px] text-[#0A0A0A]/50 text-center">
              No marketing noise. Only official build announcements and release files.
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
