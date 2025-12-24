import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formabaya - Empowering Youth Through Innovation",
  description: "Join Formabaya, a dynamic organization dedicated to empowering youth through innovative educational programs, community engagement, and impactful events. Building future leaders together.",
  keywords: ["Formabaya", "youth organization", "educational programs", "community development", "youth empowerment", "innovation"],
  authors: [{ name: "Formabaya" }],
  openGraph: {
    title: "Formabaya - Empowering Youth Through Innovation",
    description: "Join Formabaya and be part of something extraordinary. Empowering youth through innovation and community engagement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
