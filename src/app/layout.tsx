import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Webstar | High-Performance Digital Solutions",
  description: "We build premium websites, perform SEO audits, and integrate AI solutions to scale your business. Pixel Webstar is your partner in digital transformation.",
  openGraph: {
    title: "Pixel Webstar | Digital Alchemists",
    description: "Transforming code into business growth. Premium Web Design, Development, and SEO.",
    url: "https://pixelwebstar.com",
    siteName: "Pixel Webstar",
    images: [
      {
        url: "https://pixelwebstar.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
