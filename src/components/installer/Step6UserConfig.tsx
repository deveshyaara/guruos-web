"use client";

import React, { useState } from "react";
import { UserSystemConfig } from "@/types";
import { 
  User, 
  Lock, 
  Globe, 
  Keyboard, 
  Server, 
  ShieldCheck, 
  AlertCircle,
  Eye,
  EyeOff,
  CheckCircle2
} from "lucide-react";

interface Step6UserConfigProps {
  config: UserSystemConfig;
  onChange: (cfg: UserSystemConfig) => void;
}

export const Step6UserConfig: React.FC<Step6UserConfigProps> = ({ config, onChange }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleSkipToggle = (skip: boolean) => {
    onChange({
      ...config,
      skipPasswordInPreview: skip,
      passwordProvided: !skip && passwordsMatch,
    });
  };

  const updateField = <K extends keyof UserSystemConfig>(field: K, val: UserSystemConfig[K]) => {
    onChange({
      ...config,
      [field]: val,
    });
  };

  const handlePasswordChange = (p: string) => {
    setPassword(p);
    setPasswordTouched(true);
    onChange({
      ...config,
      passwordProvided: p.length >= 6 && p === confirmPassword,
    });
  };

  const handleConfirmChange = (cp: string) => {
    setConfirmPassword(cp);
    setPasswordTouched(true);
    onChange({
      ...config,
      passwordProvided: password.length >= 6 && password === cp,
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 06 // USER & LOCALIZATION CONFIGURATION
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          USER AND SYSTEM CONFIGURATION.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Configure default non-root user credentials, host naming, time zone, and language locale for the installed OS environment.
        </p>
      </div>

      {/* Zero Credential Transmission Policy Banner */}
      <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-4 sm:p-5 flex items-start gap-3 brutal-shadow">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="font-mono text-xs space-y-1">
          <div className="font-black text-[#0A0A0A] uppercase flex items-center gap-2">
            <span>ZERO CREDENTIAL RETENTION POLICY</span>
            <span className="bg-[#0A0A0A] text-[#FFFFFF] px-1.5 py-0.2 text-[10px]">CLIENT MEMORY ONLY</span>
          </div>
          <p className="text-[#0A0A0A]/80 leading-relaxed font-sans text-xs">
            Security Notice: Values entered in this preview are kept in temporary volatile browser memory only. <strong>Credentials are never sent to any remote server, never stored in localStorage, and never included in exported JSON summaries.</strong>
          </p>
        </div>
      </div>

      {/* Form Grid */}
      <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 brutal-shadow-lg space-y-6">
        
        {/* Row 1: Username & Hostname */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-mono text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Username (Primary User):</span>
            </label>
            <input
              type="text"
              value={config.username}
              onChange={(e) => updateField("username", e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
              placeholder="guru"
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            />
            <div className="text-[10px] text-[#0A0A0A]/60">
              Lowercase letters, digits, and underscores. Grants sudo access in native install.
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Computer Hostname:</span>
            </label>
            <input
              type="text"
              value={config.hostname}
              onChange={(e) => updateField("hostname", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
              placeholder="guruos-box"
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            />
            <div className="text-[10px] text-[#0A0A0A]/60">
              Identifies this machine on the local network (/etc/hostname).
            </div>
          </div>
        </div>

        {/* Password Handling Section */}
        <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAF9F6] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#0A0A0A]/15 gap-2">
            <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>USER ACCOUNT PASSWORD</span>
            </div>

            <label className="flex items-center gap-2 cursor-pointer font-mono text-xs">
              <input
                type="checkbox"
                checked={config.skipPasswordInPreview}
                onChange={(e) => handleSkipToggle(e.target.checked)}
                className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
              />
              <span className="font-bold text-[#FF5A1F]">
                Skip Password in Website Preview (Recommended)
              </span>
            </label>
          </div>

          {config.skipPasswordInPreview ? (
            <div className="p-3 bg-[#FFFFFF] border border-[#0A0A0A] text-xs font-mono text-[#0A0A0A]/80">
              <p>
                <strong>Password input skipped for preview:</strong> You do not need to provide real credentials in a web browser. When the verified native installer runs on live media, it will prompt for your real operating-system password and hash it directly using PAM sha512crypt.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="space-y-1.5">
                <label className="font-bold text-[#0A0A0A] uppercase">
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs text-[#0A0A0A] pr-10 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#0A0A0A] uppercase">
                  Confirm Password:
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => handleConfirmChange(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs text-[#0A0A0A] focus:outline-none"
                />
              </div>

              {passwordTouched && (
                <div className="sm:col-span-2 pt-1">
                  {passwordsMatch ? (
                    <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Passwords match and meet complexity criteria.</span>
                    </div>
                  ) : (
                    <div className="text-[#D83B12] font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      <span>Passwords must be at least 6 characters and match exactly.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Row 2: Localization (Timezone, Locale, Keyboard) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono text-xs">
          
          {/* Timezone */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Timezone (/etc/localtime):</span>
            </label>
            <select
              value={config.timezone}
              onChange={(e) => updateField("timezone", e.target.value)}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="UTC">UTC (Coordinated Universal Time)</option>
              <option value="America/New_York">America/New_York (EST/EDT)</option>
              <option value="America/Los_Angeles">America/Los_Angeles (PST/PDT)</option>
              <option value="America/Chicago">America/Chicago (CST/CDT)</option>
              <option value="Europe/London">Europe/London (GMT/BST)</option>
              <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
              <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
              <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
              <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
            </select>
          </div>

          {/* Locale */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>System Locale (/etc/locale.gen):</span>
            </label>
            <select
              value={config.locale}
              onChange={(e) => updateField("locale", e.target.value)}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="en_US.UTF-8">en_US.UTF-8 (English - US)</option>
              <option value="en_GB.UTF-8">en_GB.UTF-8 (English - UK)</option>
              <option value="de_DE.UTF-8">de_DE.UTF-8 (German)</option>
              <option value="fr_FR.UTF-8">fr_FR.UTF-8 (French)</option>
              <option value="ja_JP.UTF-8">ja_JP.UTF-8 (Japanese)</option>
              <option value="es_ES.UTF-8">es_ES.UTF-8 (Spanish)</option>
            </select>
          </div>

          {/* Keyboard Layout */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Keyboard className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Keyboard Layout:</span>
            </label>
            <select
              value={config.keyboardLayout}
              onChange={(e) => updateField("keyboardLayout", e.target.value)}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="us">US Standard QWERTY</option>
              <option value="uk">UK English QWERTY</option>
              <option value="de">German QWERTZ</option>
              <option value="fr">French AZERTY</option>
              <option value="dvorak">English Dvorak</option>
            </select>
          </div>

        </div>

        {/* Network Setup Selection */}
        <div className="space-y-1.5 font-mono text-xs pt-2 border-t border-[#0A0A0A]/15">
          <label className="font-bold text-[#0A0A0A] uppercase">
            Initial Network Configuration:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="network-config"
                checked={config.networkConfig === "dhcp"}
                onChange={() => updateField("networkConfig", "dhcp")}
                className="accent-[#FF5A1F]"
              />
              <span className="font-bold">DHCP (Automatic)</span>
            </label>
            <label className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="network-config"
                checked={config.networkConfig === "manual"}
                onChange={() => updateField("networkConfig", "manual")}
                className="accent-[#FF5A1F]"
              />
              <span className="font-bold">Static IP Blueprint</span>
            </label>
            <label className="border border-[#0A0A0A] p-3 bg-[#F5F3EF] flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="network-config"
                checked={config.networkConfig === "defer"}
                onChange={() => updateField("networkConfig", "defer")}
                className="accent-[#FF5A1F]"
              />
              <span className="font-bold">Configure on First Boot</span>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};
