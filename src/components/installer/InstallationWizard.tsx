"use client";

import React, { useState } from "react";
import { 
  WizardStepId, 
  InstallerWizardState 
} from "@/types";
import { WIZARD_STEPS, INITIAL_WIZARD_STATE } from "@/data/installerData";
import { Step1Welcome } from "./Step1Welcome";
import { Step2Destination } from "./Step2Destination";
import { Step3Profile } from "./Step3Profile";
import { Step4Hardware } from "./Step4Hardware";
import { Step5DiskPlan } from "./Step5DiskPlan";
import { Step6UserConfig } from "./Step6UserConfig";
import { Step7Desktop } from "./Step7Desktop";
import { Step8LocalAi } from "./Step8LocalAi";
import { Step9Review } from "./Step9Review";
import { Step10NextSteps } from "./Step10NextSteps";
import { 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  AlertCircle
} from "lucide-react";

interface InstallationWizardProps {
  onReadSpecs?: () => void;
}

export const InstallationWizard: React.FC<InstallationWizardProps> = ({ onReadSpecs }) => {
  const [state, setState] = useState<InstallerWizardState>(INITIAL_WIZARD_STATE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const stepOrder: WizardStepId[] = [
    "welcome",
    "destination",
    "profile",
    "hardware",
    "disk",
    "user",
    "desktop",
    "ai",
    "review",
    "next-steps",
  ];

  const currentStepIndex = stepOrder.indexOf(state.currentStep);
  const currentStepMeta = WIZARD_STEPS[currentStepIndex];

  // Validation before proceeding
  const validateCurrentStep = (): boolean => {
    setErrorMessage(null);

    if (state.currentStep === "disk") {
      if (!state.diskAcknowledged) {
        setErrorMessage("Please confirm that you acknowledge the preview-only storage disclaimer before proceeding.");
        return false;
      }
    }

    if (state.currentStep === "user") {
      if (!state.userConfig.username.trim()) {
        setErrorMessage("Please enter a username for the operating system account.");
        return false;
      }
      if (!state.userConfig.skipPasswordInPreview && !state.userConfig.passwordProvided) {
        setErrorMessage("Please either provide matching passwords or check 'Skip Password in Website Preview'.");
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;

    if (currentStepIndex < stepOrder.length - 1) {
      const nextStep = stepOrder[currentStepIndex + 1];
      setState((prev) => ({
        ...prev,
        currentStep: nextStep,
        completedSteps: Array.from(new Set([...prev.completedSteps, prev.currentStep])),
      }));
    }
  };

  const handlePrev = () => {
    setErrorMessage(null);
    if (currentStepIndex > 0) {
      const prevStep = stepOrder[currentStepIndex - 1];
      setState((prev) => ({
        ...prev,
        currentStep: prevStep,
      }));
    }
  };

  const handleJumpToStep = (step: WizardStepId) => {
    setErrorMessage(null);
    setState((prev) => ({
      ...prev,
      currentStep: step,
    }));
  };

  const handleRestart = () => {
    setState(INITIAL_WIZARD_STATE);
    setErrorMessage(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Mobile Compact Progress Bar */}
      <div className="lg:hidden bg-[#0A0A0A] text-[#FFFFFF] p-4 border-2 border-[#0A0A0A] brutal-shadow space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#FF5A1F] font-bold">
            STEP {currentStepIndex + 1} OF {stepOrder.length}
          </span>
          <span className="text-[#FFFFFF]/70 uppercase font-semibold">
            {currentStepMeta.shortLabel}
          </span>
        </div>
        <div className="w-full bg-[#222222] h-2 border border-[#FFFFFF]/20 overflow-hidden">
          <div
            className="bg-[#FF5A1F] h-full transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / stepOrder.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Grid: Left Vertical Stepper + Right Content Window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Numbered Stepper & Live Summary Sidebar (4 cols on desktop) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Stepper Panel */}
          <div className="bg-[#FFFFFF] border-3 border-[#0A0A0A] p-5 brutal-shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A0A0A] mb-4">
              <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
                <span>SETUP STEPS</span>
              </span>
              <span className="font-mono text-[11px] text-[#0A0A0A]/60">
                10 PHASES
              </span>
            </div>

            <nav aria-label="Installation wizard progress" className="space-y-1">
              {WIZARD_STEPS.map((step, idx) => {
                const isActive = step.id === state.currentStep;
                const isCompleted = state.completedSteps.includes(step.id);
                const isPast = idx < currentStepIndex;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => handleJumpToStep(step.id)}
                    className={`w-full text-left px-3 py-2.5 font-mono text-xs flex items-center justify-between transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A] font-bold brutal-shadow"
                        : isPast || isCompleted
                        ? "bg-[#F5F3EF] text-[#0A0A0A] border-[#0A0A0A]/20 hover:border-[#FF5A1F]"
                        : "bg-transparent text-[#0A0A0A]/60 border-transparent hover:bg-[#F5F3EF]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span
                        className={`w-5 h-5 flex items-center justify-center text-[10px] font-bold border shrink-0 ${
                          isActive
                            ? "bg-[#FF5A1F] text-[#0A0A0A] border-[#FF5A1F]"
                            : isPast || isCompleted
                            ? "bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A]"
                            : "bg-[#FFFFFF] text-[#0A0A0A]/50 border-[#0A0A0A]/30"
                        }`}
                      >
                        {isPast || isCompleted ? <Check className="w-3 h-3 text-[#FF5A1F]" /> : step.number}
                      </span>
                      <span className="truncate">{step.shortLabel}</span>
                    </div>

                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#FF5A1F] shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Persistent Live Blueprint Snapshot (Desktop only) */}
          <div className="hidden lg:block bg-[#F5F3EF] border-2 border-[#0A0A0A] p-5 brutal-shadow space-y-3 font-mono text-xs">
            <div className="font-bold uppercase text-[#0A0A0A] border-b border-[#0A0A0A]/20 pb-2 flex items-center justify-between">
              <span>LIVE CONFIG SUMMARY</span>
              <span className="text-[#FF5A1F] text-[10px]">ACTIVE STATE</span>
            </div>

            <div className="space-y-1.5 text-[11px] text-[#0A0A0A]/85">
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">Target:</span>
                <span className="font-bold uppercase">{state.destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">Boot Mode:</span>
                <span className="font-bold uppercase">{state.bootMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">Profile:</span>
                <span className="font-bold uppercase text-[#FF5A1F]">{state.profile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">RAM / Cores:</span>
                <span className="font-bold">{state.hardware.ramGb} GB / {state.hardware.cpuCores}c</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">Disk Plan:</span>
                <span className="font-bold uppercase">{state.diskMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">User:</span>
                <span className="font-bold">{state.userConfig.username || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/60">AI Decision:</span>
                <span className="font-bold uppercase text-[#FF5A1F]">{state.aiConfig.decision}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/60">
              * Blueprint updates in real-time as you navigate.
            </div>
          </div>

        </aside>

        {/* Right Side: Step Content & Action Navigation (8 cols on desktop) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Card Container */}
          <div className="bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg min-h-[540px] flex flex-col justify-between">
            
            {/* Step Inner View */}
            <div>
              {state.currentStep === "welcome" && (
                <Step1Welcome
                  onStart={handleNext}
                  onReadSpecs={onReadSpecs || (() => handleJumpToStep("hardware"))}
                />
              )}

              {state.currentStep === "destination" && (
                <Step2Destination
                  destination={state.destination}
                  onChange={(d) => setState((p) => ({ ...p, destination: d }))}
                />
              )}

              {state.currentStep === "profile" && (
                <Step3Profile
                  bootMode={state.bootMode}
                  profile={state.profile}
                  onBootModeChange={(m) => setState((p) => ({ ...p, bootMode: m }))}
                  onProfileChange={(pr) => setState((p) => ({ ...p, profile: pr }))}
                />
              )}

              {state.currentStep === "hardware" && (
                <Step4Hardware
                  hardware={state.hardware}
                  onChange={(h) => setState((p) => ({ ...p, hardware: h }))}
                />
              )}

              {state.currentStep === "disk" && (
                <Step5DiskPlan
                  diskMode={state.diskMode}
                  targetDiskName={state.targetDiskName}
                  acknowledged={state.diskAcknowledged}
                  onModeChange={(m) => setState((p) => ({ ...p, diskMode: m }))}
                  onDiskNameChange={(n) => setState((p) => ({ ...p, targetDiskName: n }))}
                  onAcknowledgeChange={(a) => setState((p) => ({ ...p, diskAcknowledged: a }))}
                />
              )}

              {state.currentStep === "user" && (
                <Step6UserConfig
                  config={state.userConfig}
                  onChange={(c) => setState((p) => ({ ...p, userConfig: c }))}
                />
              )}

              {state.currentStep === "desktop" && (
                <Step7Desktop
                  components={state.desktopComponents}
                  onChange={(cmps) => setState((p) => ({ ...p, desktopComponents: cmps }))}
                />
              )}

              {state.currentStep === "ai" && (
                <Step8LocalAi
                  config={state.aiConfig}
                  onChange={(a) => setState((p) => ({ ...p, aiConfig: a }))}
                />
              )}

              {state.currentStep === "review" && (
                <Step9Review
                  state={state}
                  onJumpToStep={handleJumpToStep}
                />
              )}

              {state.currentStep === "next-steps" && (
                <Step10NextSteps
                  state={state}
                  onRestart={handleRestart}
                />
              )}
            </div>

            {/* Error Message Alert (if validation failed) */}
            {errorMessage && (
              <div className="mt-6 p-4 bg-[#FFF5F0] border-2 border-[#FF5A1F] text-[#D83B12] font-mono text-xs flex items-center gap-2 animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Bottom Wizard Navigation Footer */}
            {state.currentStep !== "welcome" && state.currentStep !== "next-steps" && (
              <div className="pt-8 border-t-2 border-[#0A0A0A] mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
                
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="brutal-btn bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>PREVIOUS STEP</span>
                </button>

                <div className="flex items-center gap-3">
                  {/* Restart Action */}
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-3 text-[#0A0A0A]/60 hover:text-[#0A0A0A] border border-transparent hover:border-[#0A0A0A] transition-colors"
                    title="Restart Wizard"
                    aria-label="Restart wizard from beginning"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Next Step Button */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-7 py-3 font-black uppercase tracking-wider brutal-shadow flex items-center justify-center gap-2"
                  >
                    <span>
                      {state.currentStep === "review" ? "PROCEED TO NEXT STEPS" : "NEXT STEP"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
