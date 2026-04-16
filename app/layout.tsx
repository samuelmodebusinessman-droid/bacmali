import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BacMali - Maths PC TSE TSExp",
  description: "Le Bento Grid pour cartonner en Maths, Physique, Chimie TSE & TSExp - Programme officiel malien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className} style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="text-center py-8 text-gray-400 border-t border-gray-800 mt-16">
          <p className="text-sm">Zéro budget • Fait pour les terminales maliens • Partage à tes camarades</p>
        </footer>
      </body>
    </html>
  );
}
