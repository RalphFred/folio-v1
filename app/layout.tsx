import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/Topbar";
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Raphael Kwaghuter | S-Class Websites in 7 Days – Next.js, React, TypeScript",
  description:
    "Raphael Kwaghuter builds high-performance, conversion-focused websites in 7 days. Specializing in React, Next.js, TypeScript, and modern UI/UX — perfect for startups, coaches, and real estate pros who want to stand out online.",
  keywords: [
    "Raphael Kwaghuter",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "high-converting websites",
    "SEO web development",
    "websites in 7 days",
    "startup websites",
    "real estate websites",
    "coach website developer",
    "S-Class websites",
    "modern web design",
  ],
  authors: [{ name: "Raphael Kwaghuter" }],
  creator: "Raphael Kwaghuter",
  openGraph: {
    title: "Raphael Kwaghuter | S-Class Websites in 7 Days",
    description:
      "Next.js, React & TypeScript websites built to perform — delivered in 7 days. SEO-ready, lightning-fast, and conversion-focused.",
    url: "https://raphaels.studio",
    siteName: "Raphael Kwaghuter",
    images: [
      {
        url: "https://raphaels.studio/og-image.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Raphael Kwaghuter Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Kwaghuter | S-Class Websites in 7 Days",
    description:
      "Next.js, React & TypeScript websites built to perform — delivered in 7 days.",
    images: ["https://yourdomain.com/og-image.png"], // Replace with your actual OG image
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
        className={`${montserrat.className} antialiased w-full min-h-screen flex justify-center px-4 py-4 sm:px-16 md:px-6 lg:py-6 duration-300`}
      >
        {/* Mobile Navigation at Bottom */}
        <MobileNav />

        {/* Main container */}
        <div className="max-w-7xl w-full lg:my-[30px] flex min-h-screen">
          {/* Sidebar (desktop only) */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 min-w-0 flex flex-col">
            <TopBar />

            <div className="bg-dark-200 rounded-3xl px-4 py-6 md:p-10 border border-dark-400 md:relative w-full overflow-hidden">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
