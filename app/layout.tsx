import type { Metadata } from "next";
import { Press_Start_2P, VT323, Nunito } from "next/font/google";
import "./globals.css";
import Navbar    from "@/components/Navbar";
import StarField  from "@/components/StarField";
import Sparkle    from "@/components/Sparkle";
import Cursor     from "@/components/Cursor";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default:  'shanaol ✦ personal interest hub',
    template: '%s — shanaol',
  },
  description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
  openGraph: {
    type:        'website',
    siteName:    'shanaol',
    title:       'shanaol ✦ personal interest hub',
    description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
    locale:      'en_US',
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@shanaol',
    title:       'shanaol ✦ personal interest hub',
    description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable} ${nunito.variable}`}>
      <body>
        <Cursor />
        <StarField />
        <Sparkle />
        <div id="scanlines" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
