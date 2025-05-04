import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/Topbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kwaghuter Raphael Portfolio",
  description: "Frontend developer portfolio built with Next.js",
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
