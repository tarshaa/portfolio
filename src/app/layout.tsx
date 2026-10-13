import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CursorTrail } from "@/components/CursorTrail";
import "./globals.css";

const roobertSemiMono = localFont({
  src: [
    { path: "./fonts/RoobertSemiMonoTrial-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/RoobertSemiMonoTrial-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/RoobertSemiMonoTrial-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/RoobertSemiMonoTrial-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-roobert-semimono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarshaa Krishnaraj",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roobertSemiMono.variable} antialiased`}>
        <div className="page-micrographics" aria-hidden="true">
          <i className="registration-mark" />
          <i className="registration-mark" />
          <i className="registration-mark" />
          <i className="registration-mark" />
          <i className="edge-ticks edge-ticks--left" />
          <i className="edge-ticks edge-ticks--right" />
        </div>
        {children}
        <CursorTrail />
      </body>
    </html>
  );
}
