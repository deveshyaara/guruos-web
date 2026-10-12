import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GuruOS — Your Machine. Your Rules.",
  description:
    "Explore GuruOS, an Arch Linux-based desktop experience. Discover its features, download available builds, and follow the installation guide.",
  metadataBase: new URL("https://guruos.org"),
  authors: [{ name: "GuruOS Project Team" }],
  keywords: [
    "GuruOS",
    "Arch Linux",
    "Hyprland",
    "Wayland",
    "GTK4 Desktop Shell",
    "Linux Desktop",
    "Ask GURUOS",
    "Independent Operating System",
  ],
  openGraph: {
    title: "GuruOS — Your Machine. Your Rules.",
    description:
      "Explore GuruOS, an Arch Linux-based desktop experience. Discover its features, download available builds, and follow the installation guide.",
    url: "https://guruos.org",
    siteName: "GuruOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GuruOS — Your Machine. Your Rules.",
    description:
      "An Arch Linux-based desktop experience with a native GTK4 shell, dynamic Hyprland workspaces, and Ask GURUOS.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-pure-white text-pitch-black selection:bg-fire-orange selection:text-pitch-black flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
