import { FAQItem } from "@/types";

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is GuruOS?",
    answer:
      "GuruOS is an independent Linux operating system project built on an Arch Linux foundation. It pairs the Hyprland Wayland compositor with a custom GTK4 desktop shell written in Rust and integrates an experimental AI-assisted desktop interface called Ask GURUOS. It is designed to deliver a high-performance, transparent desktop environment for developers and power users.",
    tag: "CORE IDENTITY",
  },
  {
    id: "faq-2",
    question: "Is GuruOS based on Arch Linux?",
    answer:
      "Yes. GuruOS uses Arch Linux as its underlying base. This provides direct access to rolling-release packages, the Arch User Repository (AUR), and standard pacman package management, without adding an artificial layer of abstraction over core system files.",
    tag: "SYSTEM BASE",
  },
  {
    id: "faq-3",
    question: "Who is GuruOS designed for?",
    answer:
      "GuruOS is created for developers, Linux enthusiasts, system experimenters, and curious power users who want a responsive, keyboard-driven Wayland desktop with native system controls. It is not intended as a locked-down consumer appliance, but as an open system meant to be understood and customized.",
    tag: "AUDIENCE",
  },
  {
    id: "faq-4",
    question: "How do I download GuruOS?",
    answer:
      "During the initial prototype and pre-release development phase, public ISO images are actively being built and tested internally. You can register for launch notifications in the Download section above or monitor the official GitHub repository for published releases and signed images.",
    tag: "DISTRIBUTION",
  },
  {
    id: "faq-5",
    question: "How do I install GuruOS?",
    answer:
      "Once the ISO build is released, you will flash the image to a USB flash drive (using tools like Balena Etcher or Rufus), boot from the USB using your computer's boot menu, and follow the step-by-step installer. Exact installer behavior, partitioning tools, and post-install configuration scripts depend on the specific build and are documented in the release notes.",
    tag: "INSTALLATION",
  },
  {
    id: "faq-6",
    question: "Will installing GuruOS erase my existing files?",
    answer:
      "If you choose to erase your entire drive during installation, yes — all existing partitions and files on that disk will be permanently removed. If you configure manual partitioning or a separate disk, other drives can be preserved. However, because partitioning and filesystem operations carry inherent risk, you must always back up all critical files to an external location before starting.",
    tag: "DATA SAFETY",
  },
  {
    id: "faq-7",
    question: "Can I try GuruOS without replacing my current operating system?",
    answer:
      "In typical Linux releases, live USB sessions and virtualization tools (such as QEMU/KVM, VirtualBox, or VMware) allow testing the system without altering disk drives. Whether a fully functioning live desktop session or dual-boot wizard is supported depends on the specific build image, so please verify live session capabilities in the release notes for your version.",
    tag: "TRIAL & VIRTUALIZATION",
  },
  {
    id: "faq-8",
    question: "Where can I report bugs or contribute?",
    answer:
      "You can track development, submit bug reports, and join technical conversations through the official GitHub repository and discussions once open. As an open-source-minded project, feedback and issue triage will follow standard public issue tracking.",
    tag: "CONTRIBUTING",
  },
];
