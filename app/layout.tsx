import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "MathToBac.ml - Maths TSE TSExp",
  description: "Le Bento Grid pour cartonner en Mathématiques TSE & TSExp - Programme officiel malien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={playfair.className} style={{ backgroundColor: '#FFEDCE', color: '#1a1a1a' }}>
        <div className="min-h-screen">
          <Navbar />
          <main className="min-h-screen" style={{ backgroundColor: '#FFEDCE' }}>
            {children}
          </main>
          <footer className="text-center py-8 text-gray-600 border-t border-[#352315]/30 mt-16" style={{ backgroundColor: '#FFEDCE' }}>
            <p className="text-sm">Zéro budget • Fait pour les terminales maliens • Partage à tes camarades</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
