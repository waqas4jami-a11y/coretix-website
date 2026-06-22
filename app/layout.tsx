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
  title: "Coretix Technologies | Business Software, SaaS & Websites",
  description:
    "Coretix Technologies builds Transport Management Systems, online booking software, SaaS platforms, business websites and AI business solutions.",
  keywords: [
    "Coretix Technologies",
    "Transport Management System",
    "TMS Software",
    "School Transport Software",
    "Online Booking System",
    "SaaS Development",
    "Business Websites",
    "AI Business Solutions",
    "Driving Instructor Diary",
    "Software Development UK",
  ],
  openGraph: {
    title: "Coretix Technologies | Business Software, SaaS & Websites",
    description:
      "Transport management systems, online booking software, SaaS platforms, business websites and AI solutions.",
    url: "https://coretix.co.uk",
    siteName: "Coretix Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
