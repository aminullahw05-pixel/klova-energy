import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klova Energy | UK Property Compliance Certificates",
  description:
    "Klova Energy connects homeowners, landlords and letting agents with vetted local professionals for EPC, Gas Safety, EICR, floorplans and landlord compliance bundles — UK-wide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${dmSans.variable} ${dmMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
