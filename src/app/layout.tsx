import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Yeshambel | Senior Backend Developer",
  description: "Portfolio of Samuel Yeshambel, a Senior Backend Developer specializing in scalable systems, microservices, and secure architecture.",
  keywords: ["Backend Developer", "Node.js", "Nest.js", "Ethiopia", "Software Engineer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary"
        )}
      >
        <main className="flex flex-col min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
