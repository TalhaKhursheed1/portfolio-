import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talha Khursheed | React Native Developer Portfolio",
  description:
    "React Native & Expo developer — building and deploying cross-platform mobile apps for Android & iOS. KasaStay, Ardent Training, and more.",
  keywords: [
    "React Native Developer",
    "Expo",
    "Mobile App Developer",
    "iOS",
    "Android",
    "Firebase",
    "Talha Khursheed",
  ],
  openGraph: {
    title: "Talha Khursheed | React Native Developer",
    description:
      "Cross-platform mobile apps with React Native, Expo, Firebase & Stripe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
