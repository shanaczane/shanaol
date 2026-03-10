import type { Metadata } from "next";
import { Press_Start_2P, VT323, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "shanaol ✦ personal interest hub",
  description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} ${nunito.variable}`}
      >
        {/* Scanlines CRT overlay */}
        <div id="scanlines" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
