import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CursorTrail } from "@/components/CursorTrail";
import "./globals.css";

const roobert = localFont({
  src: [
    { path: "./fonts/Roobert-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Roobert-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/Roobert-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Roobert-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-roobert",
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
      <body className={`${roobert.variable} antialiased`}>
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
