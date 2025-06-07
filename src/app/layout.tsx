import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

// Conditionally import analytics components only in production
// const Analytics = process.env.NODE_ENV === "production" ? require("@/components/analytics").Analytics : () => null;
// const SpeedInsights = process.env.NODE_ENV === "production" ? require("@/components/speed-insights").SpeedInsights : () => null;

const Analytics = () => null;
const SpeedInsights = () => null;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Computer Science Student & Developer",
  description: "A passionate computer science student specializing in full-stack development. View my projects, skills, and experience in web development.",
  keywords: "computer science, web developer, full-stack, portfolio, projects, React, Next.js",
  authors: [{ name: "RANA SHAHZAIB NASIR" }],
  creator: "RANA SHAHZAIB NASIR",
  openGraph: {
    title: "Portfolio - Computer Science Student & Developer",
    description: "A passionate computer science student specializing in full-stack development.",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Skip to content link for accessibility */}
          <Suspense fallback={null}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Skip to content
            </a>
          </Suspense>

          <main id="main-content">{children}</main>

          {/* Performance monitoring - only in production */}
          <Suspense fallback={null}>
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
