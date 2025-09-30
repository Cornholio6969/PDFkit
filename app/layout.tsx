import "./globals.css";
import { ReactNode } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: "Free PDF Tools – Merge, Split, Compress (No Watermark)",
  description: "Modern, fast PDF tools. Merge, split, and compress in seconds. No account. No watermark."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Nav />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
