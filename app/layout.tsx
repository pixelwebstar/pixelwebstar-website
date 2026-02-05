import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import BackgroundLayers from "@/components/BackgroundLayers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#e0e7ff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Future Vision | Pixelwebstar",
  description: "Experience the future of web design with our stunning glassmorphism interface and animated experiences.",
  keywords: ["web design", "future vision", "glassmorphism", "pixelwebstar", "nextjs", "react"],
  authors: [{ name: "Pixelwebstar" }],
  openGraph: {
    title: "Future Vision - Pixelwebstar",
    description: "Experience the future of web design with our stunning glassmorphism interface.",
    url: "https://pixelwebstar.website",
    siteName: "Future Vision",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Vision - Pixelwebstar",
    description: "Experience the future of web design with our stunning glassmorphism interface.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
        <BackgroundLayers />
      </body>
    </html>
  );
}
