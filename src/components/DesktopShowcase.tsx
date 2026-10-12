"use client";

import React, { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { 
  Terminal, 
  Wifi, 
  Volume2, 
  Search, 
  CheckCircle2,
  Bluetooth,
  Battery,
  Bell,
  X,
  Send,
  AlertCircle
} from "lucide-react";

export const DesktopShowcase: React.FC = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<number>(1);
  const [panelInputText, setPanelInputText] = useState<string>("ask guruos: reorganize workspace");
  const [chatOpen, setChatOpen] = useState<boolean>(true);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // Chat conversation state
  const [chatMessages, setChatMessages] = useState<Array<{
    sender: "user" | "guruos";
    text: string;
    action?: string;
    details?: string;
    timestamp: string;
  }>>([
    {
      sender: "user",
      text: "Arrange development workspace: Rust project in Neovim left, terminal right",
      timestamp: "10:46:12"
    },
    {
      sender: "guruos",
      text: "Dispatched Hyprland window arrangement. Split ratio 60/40. Initialized Rust Analyzer LSP.",
      action: "hyprctl dispatch workspace 1; splitv; alacritty -e nvim",
      details: "Tiling active on eDP-1. Latency: 38ms (local IPC).",
      timestamp: "10:46:13"
    }
  ]);

  const [inputVal, setInputVal] = useState<string>("");

  const promptPresets = [
    {
      label: "Rust Dev Layout",
      prompt: "Reorganize workspace: split terminal left and open Neovim with Rust LSP",
      action: "hyprctl dispatch workspace 1; splitv; alacritty -e nvim",
      detail: "Configured dual pane tiling. Wayland scale 1.0. Zero frame latency.",
      reply: "Configured dual pane tiling on workspace 1. Rust language server initialized."
    },
    {
      label: "Network Diagnostics",
      prompt: "Check network connectivity and ping Arch Linux mirrors",
      action: "guru-net --check-mirrors --rank-by-speed",
      detail: "Mirror rank updated: Fastest mirror selected (latency 14ms).",
      reply: "Network interfaces checked. Active connection: wlan0. Primary Arch mirror verified."
    },
    {
      label: "Fire-Orange Accent",
      prompt: "Switch desktop shell accent to High-Contrast Fire Orange",
      action: "gtk4-theme-daemon --set-accent '#FF5A1F' --borders heavy",
      detail: "Applied #FF5A1F accents across GTK4 panel, Wayland borders, and Alacritty.",
      reply: "Applied #FF5A1F fire-brutalist theme across native shell and terminal colors."
    },
    {
      label: "Arch Kernel Status",
      prompt: "List recently updated AUR packages and system kernel version",
      action: "pacman -Qe; uname -r",
      detail: "Arch Linux 6.12.1-arch1-1-zen // 12 packages up-to-date.",
      reply: "Kernel: Linux 6.12.1-arch. Pacman cache clean. 0 orphan dependencies."
    },
  ];

  const handleSendPrompt = (textToSend?: string) => {
    const query = textToSend || inputVal || panelInputText;
    if (!query.trim()) return;

    const matchedPreset = promptPresets.find((p) => p.prompt.toLowerCase() === query.toLowerCase());

    const userMsg = {
      sender: "user" as const,
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    const guruMsg = {
      sender: "guruos" as const,
      text: matchedPreset 
        ? matchedPreset.reply 
        : `Processed via experimental Ollama/MCP pipeline: "${query}". Contextual system action prepared.`,
      action: matchedPreset ? matchedPreset.action : "guru-mcp --dispatch-action context_eval",
      details: matchedPreset ? matchedPreset.detail : "Evaluated with local Qwen2.5-3B-Instruct model (quantized dev prototype).",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg, guruMsg]);
    setInputVal("");
    setChatOpen(true);
  };

  const handlePanelAction = (label: string, detail: string) => {
    setActiveNotification(`${label}: ${detail}`);
    setTimeout(() => setActiveNotification(null), 4000);
  };

  return (
    <section id="showcase" className="relative bg-[#0A0A0A] text-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A] overflow-hidden">
      {/* Background dark grid lines */}
      <div className="absolute inset-0 bg-grid-lines-dark pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="05"
          categoryTag="INTERACTIVE DESKTOP HUD"
          titlePart1="TAKE A LOOK"
          titlePart2="INSIDE."
          description="Interactive desktop preview. Test the 9 primary top panel elements, switch dynamic workspaces, and experience the Ask GURUOS chat workflow."
          isDark={true}
        />

        {/* Temporary Notification Banner for panel interactions */}
        {activeNotification && (
          <div className="mb-4 p-3 bg-[#FF5A1F] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-wide flex items-center justify-between border-2 border-[#FFFFFF] animate-fadeIn">
            <span>{activeNotification}</span>
            <button 
              type="button" 
              onClick={() => setActiveNotification(null)}
              className="text-[#0A0A0A] hover:text-[#FFFFFF] cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Large Desktop Mockup Stage */}
        <div className="border-3 border-[#FFFFFF]/30 bg-[#121212] brutal-shadow-orange-lg overflow-hidden">
          
          {/* Top Panel: The 9 Primary Panel Items as specified in Section 3 & 4 */}
          <div className="bg-[#181818] border-b-2 border-[#0A0A0A] px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between font-mono text-xs gap-2 select-none">
            
            {/* Left Group: Item 1 (Brand) + Item 2 (Ask Input) + Item 3 (Workspaces) */}
            <div className="flex items-center gap-3">
              
              {/* Item 1: GURUOS Branding */}
              <div 
                onClick={() => handlePanelAction("GURUOS Core", "Native GTK4 Shell Daemon in Rust // Arch Linux Base")}
                className="flex items-center gap-1.5 font-black text-sm text-[#FFFFFF] tracking-tight cursor-pointer hover:text-[#FF5A1F] transition-colors"
                title="1. GURUOS Branding"
              >
                <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
                <span>GURUOS</span>
              </div>

              <div className="h-4 w-[1px] bg-[#FFFFFF]/20 hidden sm:block" />

              {/* Item 2: Ask GURUOS Text Input (Native GTK Entry Mockup) */}
              <div className="relative flex items-center bg-[#0D0D0D] border border-[#FFFFFF]/30 hover:border-[#FF5A1F] transition-all px-2.5 py-1">
                <Search className="w-3 h-3 text-[#FF5A1F] mr-1.5 shrink-0" />
                <input
                  type="text"
                  value={panelInputText}
                  onChange={(e) => setPanelInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendPrompt(panelInputText);
                    }
                  }}
                  className="bg-transparent text-[11px] text-[#FFFFFF] font-mono focus:outline-none w-36 sm:w-48 placeholder-[#FFFFFF]/40"
                  placeholder="Ask GURUOS... (Enter)"
                  title="2. Ask GURUOS Input: Type instruction and press Enter"
                />
                <button
                  type="button"
                  onClick={() => handleSendPrompt(panelInputText)}
                  className="text-[9px] bg-[#FF5A1F] text-[#0A0A0A] px-1 font-bold ml-1 hover:bg-[#FFFFFF] cursor-pointer"
                  title="Press Enter to launch chat"
                >
                  ↵
                </button>
              </div>

              <div className="h-4 w-[1px] bg-[#FFFFFF]/20 hidden md:block" />

              {/* Item 3: Dynamic Workspace Buttons (Synchronized with Hyprland) */}
              <div className="flex items-center gap-1 font-bold text-[11px]" title="3. Dynamic Workspaces: Synced with Hyprland">
                {[1, 2, 3, 4].map((ws) => {
                  const wsNames = ["DEV", "DOC", "WEB", "SYS"];
                  const isCurrent = activeWorkspace === ws;
                  return (
                    <button
                      key={ws}
                      type="button"
                      onClick={() => setActiveWorkspace(ws)}
                      className={`px-2 py-0.5 transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-[#FF5A1F] text-[#0A0A0A]"
                          : "bg-[#FFFFFF]/10 text-[#FFFFFF]/80 hover:bg-[#FFFFFF]/20"
                      }`}
                    >
                      {ws}:{wsNames[ws - 1]}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Group: Items 4 to 9 (Network, Audio, Bluetooth, Battery, Notifications, Clock) */}
            <div className="flex items-center gap-3 text-[11px] text-[#FFFFFF]/80 font-mono">
              
              {/* Item 4: Network Control (launches nm-connection-editor) */}
              <button
                type="button"
                onClick={() => handlePanelAction("Network Control", "Launches nm-connection-editor (Wi-Fi: Connected)")}
                className="flex items-center gap-1 hover:text-[#FF5A1F] cursor-pointer p-1"
                title="4. Network: Launches nm-connection-editor"
              >
                <Wifi className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span className="hidden lg:inline">wlan0</span>
              </button>

              {/* Item 5: Audio Control (launches pavucontrol) */}
              <button
                type="button"
                onClick={() => handlePanelAction("Audio Control", "Launches pavucontrol (Volume: 74% / PipeWire)")}
                className="flex items-center gap-1 hover:text-[#FF5A1F] cursor-pointer p-1"
                title="5. Audio: Launches pavucontrol"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#FF9B42]" />
                <span className="hidden lg:inline">74%</span>
              </button>

              {/* Item 6: Bluetooth Indicator / Control (In Progress) */}
              <button
                type="button"
                onClick={() => handlePanelAction("Bluetooth Status", "IN PROGRESS: BlueZ service and utilities unavailable in current dev snapshot")}
                className="flex items-center gap-1 text-[#FFFFFF]/50 hover:text-[#FF9B42] cursor-pointer p-1 border border-[#FFFFFF]/10"
                title="6. Bluetooth: In Progress (BlueZ service not active)"
              >
                <Bluetooth className="w-3.5 h-3.5 text-[#FF9B42]" />
                <span className="text-[9px] text-[#FF9B42] hidden xl:inline">IN PROGRESS</span>
              </button>

              {/* Item 7: Battery Status (UPower discovery) */}
              <button
                type="button"
                onClick={() => handlePanelAction("Battery Status", "Asynchronous UPower discovery via D-Bus: 92% (Discharging)")}
                className="flex items-center gap-1 hover:text-[#FF5A1F] cursor-pointer p-1"
                title="7. Battery: Asynchronous UPower discovery"
              >
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">92%</span>
              </button>

              {/* Item 8: Notifications (SwayNC) */}
              <button
                type="button"
                onClick={() => handlePanelAction("Notification Daemon", "SwayNC integration active // 0 unread alerts")}
                className="flex items-center gap-1 hover:text-[#FF5A1F] cursor-pointer p-1 relative"
                title="8. Notifications: SwayNC active"
              >
                <Bell className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span className="w-1.5 h-1.5 bg-[#FF5A1F] rounded-full absolute top-0.5 right-0.5" />
              </button>

              {/* Item 9: Clock */}
              <div 
                onClick={() => handlePanelAction("System Clock", "Mon 12 Oct 2026 10:47:00 UTC // Arch Linux")}
                className="font-bold text-[#FFFFFF] pl-1 cursor-pointer hover:text-[#FF5A1F]"
                title="9. System Clock"
              >
                10:47 AM
              </div>

            </div>

          </div>

          {/* Desktop Workspace Interior */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#0D0D0D] space-y-6 relative min-h-[520px]">
            
            {/* Ask GURUOS Floating Chat Workflow Overlay (Layer 4) */}
            {chatOpen ? (
              <div className="border-2 border-[#FF5A1F] bg-[#14100D] p-4 sm:p-6 brutal-shadow-orange max-w-4xl mx-auto space-y-4 relative">
                
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-[#FF5A1F]/30 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#FF5A1F] flex items-center justify-center text-[#0A0A0A] font-black text-xs">
                      AI
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-[#FF9B42] uppercase tracking-wider flex items-center gap-2">
                        <span>Ask GURUOS // Desktop Chat Workflow</span>
                        <span className="text-[10px] bg-[#FF5A1F] text-[#0A0A0A] font-bold px-1.5 py-0.2 uppercase">
                          EXPERIMENTAL
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-[#FFFFFF]/60">
                        Tested with Ollama &amp; GuruOS MCP service // Qwen2.5-3B-Instruct quantized test model
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setChatOpen(false)}
                    className="p-1 text-[#FFFFFF]/60 hover:text-[#FF5A1F] border border-[#FFFFFF]/20 hover:border-[#FF5A1F] cursor-pointer"
                    title="Minimize HUD"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Chat Conversation History */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1 font-mono text-xs">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 border ${
                        msg.sender === "user"
                          ? "bg-[#1F1814] border-[#FF5A1F]/40 text-[#FFFFFF] ml-8"
                          : "bg-[#0A0A0A] border-[#FFFFFF]/20 text-[#FFFFFF]/90 mr-4 space-y-2"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-[#FFFFFF]/50 pb-1 border-b border-[#FFFFFF]/10">
                        <span className="font-bold text-[#FF9B42]">
                          {msg.sender === "user" ? "YOU // TERMINAL CLIENT" : "GURUOS ASSISTANT"}
                        </span>
                        <span>{msg.timestamp}</span>
                      </div>

                      <div className="text-xs sm:text-sm font-sans font-medium text-[#FFFFFF]">
                        {msg.text}
                      </div>

                      {msg.action && (
                        <div className="mt-2 p-2 bg-[#171717] border-l-2 border-[#FF5A1F] font-mono text-[11px] space-y-1">
                          <div className="text-[#FF5A1F] font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Action: {msg.action}</span>
                          </div>
                          {msg.details && (
                            <div className="text-[#FFFFFF]/70 text-[10px]">
                              {msg.details}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input Bar */}
                <div className="flex items-center gap-2 bg-[#0A0A0A] border border-[#FF5A1F] p-2.5">
                  <Terminal className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSendPrompt();
                      }
                    }}
                    placeholder="Enter desktop command or natural language instruction..."
                    className="bg-transparent text-xs sm:text-sm font-mono text-[#FFFFFF] w-full focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleSendPrompt()}
                    className="brutal-btn bg-[#FF5A1F] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] text-[#0A0A0A] px-3 py-1.5 text-xs font-black uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 mr-1" />
                    <span>SEND</span>
                  </button>
                </div>

                {/* Presets Row */}
                <div className="pt-1">
                  <div className="text-[10px] font-mono uppercase text-[#FFFFFF]/50 mb-1.5">
                    Suggested test instructions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {promptPresets.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => handleSendPrompt(preset.prompt)}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#1C1714] border border-[#FF5A1F]/40 hover:border-[#FF5A1F] text-[#FFFFFF]/80 hover:text-[#FFFFFF] cursor-pointer"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Honest Limitation Disclaimer on AI */}
                <div className="p-2.5 bg-[#0A0A0A] border border-[#FFFFFF]/10 font-mono text-[10px] text-[#FFFFFF]/60 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Prototype Notice:</strong> AI integration is an experimental concept tested in development with Ollama and a GuruOS MCP service. It is not guaranteed to be bundled into every ISO image, operate offline on all hardware tiers, or run smoothly on minimal systems.
                  </span>
                </div>

              </div>
            ) : (
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  onClick={() => setChatOpen(true)}
                  className="px-6 py-3 font-mono text-xs font-black uppercase tracking-wider"
                >
                  <Search className="w-4 h-4 mr-2" />
                  <span>OPEN ASK GURUOS DESKTOP HUD (ENTER)</span>
                </Button>
              </div>
            )}

            {/* Split Tiling Windows Simulation: Terminal + Hyprland Monitor */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Window 1: Terminal running fastfetch / guruos status */}
              <div className="lg:col-span-8 border-2 border-[#FFFFFF]/20 bg-[#0A0A0A] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-2 text-[11px] text-[#FFFFFF]/60">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    <span>alacritty — guru@arch-box:~ [workspace {activeWorkspace}]</span>
                  </div>
                  <span className="text-[#FF9B42]">SHELL: RUST-GTK4</span>
                </div>

                <div className="space-y-1.5 text-[11px] sm:text-xs">
                  <div className="text-[#FF5A1F] font-bold">
                    {"  /\\       GURUOS // ARCH LINUX BASE"}
                  </div>
                  <div className="text-[#FF5A1F] font-bold">
                    {" /  \\      COMPOSITOR: Hyprland (Wayland)"}
                  </div>
                  <div className="text-[#FF9B42]">
                    {"/ /\\ \\     PANEL: Native Rust GTK4 Layer Shell (9 Items)"}
                  </div>
                  <div className="text-[#FF9B42]">
                    {"\\ \\/ /     WORKSPACES: Dynamic IPC Synced (Current: WS {activeWorkspace})"}
                  </div>
                  <div className="text-[#FFFFFF]/80">
                    {" \\  /      NOTIFICATIONS: SwayNC Active"}
                  </div>
                  <div className="text-[#FFFFFF]/80">
                    {"  \\/       LOCAL AI: Tested via Ollama + GuruOS MCP (Experimental)"}
                  </div>
                </div>

                <div className="pt-2 text-[#FF5A1F] text-xs">
                  <span className="text-[#FFFFFF]/50">guru@machine:~$ </span>
                  <span>guruos-info --status-report</span>
                  <span className="inline-block w-2 h-3.5 bg-[#FF5A1F] ml-1 animate-cursor-blink align-middle" />
                </div>
              </div>

              {/* Window 2: Hyprland Workspace Monitor */}
              <div className="lg:col-span-4 border-2 border-[#FFFFFF]/20 bg-[#141414] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-2 text-[11px] text-[#FFFFFF]/60">
                  <span>HYPRCTL STATE</span>
                  <span className="text-[#FF5A1F]">WAYLAND IPC</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#FFFFFF]/80">
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Active Workspace:</span>
                    <span className="font-bold text-[#FF5A1F]">Workspace {activeWorkspace}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Panel Protocol:</span>
                    <span className="font-bold text-[#FFFFFF]">gtk4-layer-shell</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Battery Discovery:</span>
                    <span className="text-emerald-400">UPower (Async)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FFFFFF]/50">Bluetooth:</span>
                    <span className="text-[#FF9B42]">In Progress</span>
                  </div>
                </div>

                <div className="p-2 bg-[#0A0A0A] border border-[#FF5A1F]/30 text-[10px] text-[#FF9B42]">
                  [KEYBOARD] Mod + 1..4: Switch Hyprland Workspaces
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Desktop Showcase Bar */}
          <div className="bg-[#171717] border-t-2 border-[#0A0A0A] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-[#FFFFFF]/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A1F]" />
              <span className="text-[#FFFFFF] font-bold">DESKTOP INTERFACE PROTOTYPE // RUST + GTK4 + HYPRLAND</span>
            </div>
            <div className="text-[11px] text-[#FFFFFF]/40 italic">
              [HONEST PREVIEW // NOT AN EMULATED BROWSER OS]
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
