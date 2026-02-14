import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingNav from "@/components/FloatingNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel Webstar | Premium Web Design",
  description: "Crafting digital experiences that dominate.",
  openGraph: {
    title: "Pixel Webstar | Premium Web Design",
    description: "Crafting digital experiences that dominate.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <FloatingNav />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
