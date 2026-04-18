import Link from 'next/link';
import { FileText, ArrowRight, GraduationCap, FolderOpen, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#352315' }}>
          🇲🇱 MathToBac.ml
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#352315' }}>
          Catalogue complet pour réussir le Bac malien en Mathématiques
        </p>
      </div>

      {/* Catalog Section: Ressources - EN PREMIER */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <FolderOpen size={28} style={{ color: '#352315' }} />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#352315' }}>Ressources</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Vidéo */}
          <Link href="/bibliotheque">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--card-bg)] flex flex-col items-center justify-center p-8">
              <Play size={48} style={{ color: '#352315' }} />
              <h3 className="text-2xl font-bold mb-2 text-center mt-4" style={{ color: '#352315' }}>Vidéo</h3>
              <p className="text-center" style={{ color: '#352315' }}>Vidéos éducatives TSE & TSExp</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Maths</span>
              </div>
            </div>
          </Link>
          {/* Cours */}
          <Link href="/lecons/maths">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--card-bg)] flex flex-col items-center justify-center p-8">
              <FileText size={48} style={{ color: '#352315' }} />
              <h3 className="text-2xl font-bold mb-2 text-center mt-4" style={{ color: '#352315' }}>Cours</h3>
              <p className="text-center" style={{ color: '#352315' }}>Cours complets avec aperçu PDF</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Leçons PDF</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Catalog Section: Séries */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <GraduationCap size={28} style={{ color: '#352315' }} />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#352315' }}>Séries du Baccalauréat</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Link href="/tse">
            <div className="border border-[var(--card-border)] rounded-lg aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-8">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#352315' }}>TSE</h3>
              <p className="text-center" style={{ color: '#352315' }}>Sciences Exactes</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Mathématiques</span>
              </div>
            </div>
          </Link>
          <Link href="/tsexp">
            <div className="border border-[var(--card-border)] rounded-lg aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-8">
              <div className="text-6xl mb-4">🧪</div>
              <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#352315' }}>TSExp</h3>
              <p className="text-center" style={{ color: '#352315' }}>Sciences Expérimentales</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>Mathématiques</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
