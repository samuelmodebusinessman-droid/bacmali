import Link from 'next/link';
import { BookOpen, ClipboardList } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#352315' }}>
          🇲🇱 MaliMath
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#352315' }}>
          Catalogue complet pour réussir le Bac malien en Mathématiques
        </p>
      </div>

      {/* Catalog Section: Les 4 cases */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Sujets BAC */}
          <Link href="/sujets">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <ClipboardList size={40} style={{ color: '#352315' }} />
              <h3 className="text-xl font-bold mb-2 text-center mt-3" style={{ color: '#352315' }}>Sujets BAC</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Sujets et corrigés</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>2018-2024</span>
              </div>
            </div>
          </Link>
          {/* Leçons */}
          <Link href="/lecons/maths">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <BookOpen size={40} style={{ color: '#352315' }} />
              <h3 className="text-xl font-bold mb-2 text-center mt-3" style={{ color: '#352315' }}>Leçons</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Cours interactifs</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>TSE & TSExp</span>
              </div>
            </div>
          </Link>
          {/* TSE */}
          <Link href="/tse">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <div className="text-5xl mb-2">🔬</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#352315' }}>TSE</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Sciences Exactes</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Maths</span>
              </div>
            </div>
          </Link>
          {/* TSExp */}
          <Link href="/tsexp">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <div className="text-5xl mb-2">🧪</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#352315' }}>TSExp</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Sciences Expérimentales</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Maths</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
