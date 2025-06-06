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
  title: "Portfolio - Computer Science Student & Developer",
  description: "A passionate computer science student specializing in full-stack development. View my projects, skills, and experience in web development.",
  keywords: "computer science, web developer, full-stack, portfolio, projects, React, Next.js",
  authors: [{ name: "RANA SHAHZAIB NASIR" }],
  creator: "RANA SHAHZAIB NASIR",
  openGraph: {
    title: "Portfolio - Computer Science Student & Developer",
    description: "A passionate computer science student specializing in full-stack development.",
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
