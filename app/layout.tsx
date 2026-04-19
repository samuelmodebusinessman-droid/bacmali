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
  title: "MaliMath - Maths TSE TSExp",
  description: "Le Bento Grid pour cartonner en Mathématiques TSE & TSExp - Programme officiel malien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.className} overflow-x-hidden`} style={{ backgroundColor: 'var(--background)', color: '#1a1a1a' }}>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'var(--background)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
              {children}
            </div>
          </main>
          <footer className="text-center py-8 text-gray-600 border-t border-[#352315]/30 mt-16" style={{ backgroundColor: 'var(--background)' }}>
            <p className="text-sm">Zéro budget • Fait pour les terminales maliens • Partage à tes camarades</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
