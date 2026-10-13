import { FAQItem } from "@/types";

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is GuruOS?",
    answer:
      "GuruOS is an experimental Linux desktop environment combining an Arch Linux base, Hyprland running on Wayland, a native desktop shell written in Rust using GTK4, libadwaita, and GTK4 Layer Shell, and a Python-based local AI backend. Its central interaction is Ask GURUOS, an AI assistant integrated directly into the desktop shell rather than presented as a separate web application. The goal is to explore how a Linux desktop can combine system information, developer assistance, local inference, and controlled OS interactions.",
    tag: "PRODUCT IDENTITY",
  },
  {
    id: "faq-2",
    question: "Is GuruOS a separate Linux distribution?",
    answer:
      "GuruOS is built on Arch Linux as its operating-system foundation, rather than maintaining a completely independent kernel, package ecosystem, or repository infrastructure. It provides a customized desktop environment, shell, and AI backend on top of Arch's rolling-release system. GuruOS does not promise to inherit every upstream Arch Linux policy, configuration, or official support channel.",
    tag: "DISTRIBUTION BASE",
  },
  {
    id: "faq-3",
    question: "Does GuruOS use a local AI model?",
    answer:
      "Yes. The architecture is designed around local inference using Ollama running on loopback (127.0.0.1:11434). In the current repository, it targets the model alias 'os-agent' based on Qwen2.5-3B-Instruct.Q4_K_M.gguf (manifest SHA-256: 0a7744dc91d4ea7d17eb11a797be9116024d4eb69bafb3fbf1aa281982ca482e). Inference runs locally on your CPU or GPU without sending your queries to external cloud AI APIs.",
    tag: "LOCAL AI INFERENCE",
  },
  {
    id: "faq-4",
    question: "Does AI work without an internet connection?",
    answer:
      "Once the operating system and the model weights have been downloaded and verified on your device, inference itself operates locally on your machine. However, GuruOS does NOT promise that every operation is always completely offline: initial ISO downloads, model fetching during first-boot setup, pacman package updates, and general web browsing require an active internet connection.",
    tag: "NETWORK REQUIREMENTS",
  },
  {
    id: "faq-5",
    question: "Can I install GuruOS on my physical computer?",
    answer:
      "Not yet through an automated native installer. As of October 13, 2026, GuruOS is in early development with a private repository. The documented ISO profile is a test-image foundation, not a production installer, and the disk-writing native installer is still under active development. You can use our interactive Custom Installation Planner at /install to preview and plan your configuration, but you should not attempt to write incomplete test images to primary physical hardware without an isolated testing environment and complete backups.",
    tag: "HARDWARE INSTALLATION",
  },
  {
    id: "faq-6",
    question: "Is the ISO publicly available?",
    answer:
      "No. At the time of this audit, the source repository is private and no public GitHub releases have been published. A recent GitHub Actions ISO build run (Run 38157947896 on October 11, 2026) failed at the build step. Maintainers are validating build repeatability, boot reliability, and hardware compatibility before hosting public release artifacts.",
    tag: "ISO AVAILABILITY",
  },
  {
    id: "faq-7",
    question: "Can I try GuruOS in a virtual machine?",
    answer:
      "Virtual machines (such as QEMU/KVM, VirtualBox, or VMware) are the recommended path for evaluating development builds once test images are made available. A disposable VM prevents accidental disk modification on your host computer. Note that Wayland compositors (Hyprland) and local AI inference require allocating adequate virtualized GPU/CPU cores and RAM (typically 8 GB or more for model execution).",
    tag: "VIRTUAL MACHINE TESTING",
  },
  {
    id: "faq-8",
    question: "What hardware does GuruOS support?",
    answer:
      "GuruOS targets x86_64 systems running Arch Linux and Hyprland/Wayland. The documented developer reference machine is an AMD A8-7410 APU (4 cores, ~6.7 GiB RAM, integrated Radeon R5 graphics, Realtek RTL8723BE Wi-Fi), running inference on the CPU without CUDA/ROCm acceleration. These details represent an internal reference machine, not official minimum specifications. Broad OEM compatibility across diverse AMD, Intel, and NVIDIA configurations is under active evaluation.",
    tag: "HARDWARE COMPATIBILITY",
  },
  {
    id: "faq-9",
    question: "Is GuruOS production-ready?",
    answer:
      "No. GuruOS is explicitly an experimental, early-development project. While core shell layouts, the Ask GURUOS GTK trigger, and Hyprland IPC integrations exist, several components remain in progress or incomplete (such as native quick settings, safe Polkit privilege escalation, and cross-hardware testing). It should not be used as a primary production operating system for mission-critical work.",
    tag: "PROJECT READINESS",
  },
  {
    id: "faq-10",
    question: "Can I postpone model installation?",
    answer:
      "Yes. The first-boot setup workflow and the custom installation planner are designed to treat local AI as non-fatal to the desktop. If your hardware has low memory, if you prefer a lighter base system, or if your network connection is limited, you can defer model installation. The graphical desktop (Hyprland and the native Rust GTK4 shell) will remain fully functional and simply report that the AI backend is not active.",
    tag: "MODULAR AI SETUP",
  },
  {
    id: "faq-11",
    question: "How do I report a problem?",
    answer:
      "Issue tracking will occur through the official GitHub repository issue tracker once authorized public access is configured. The project maintains an honest log of known limitations, including Issue #1 (Polkit authorization hardening), Issue #2 (Ask GURUOS workspace switching mismatch), Issue #3 (shell-common crate deduplication), Issue #4 (license decision), and Issue #5 (low-resource benchmark verification).",
    tag: "ISSUE REPORTING",
  },
];
