import Link from 'next/link';
import { FileText, ArrowRight, GraduationCap, FolderOpen, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
          🇲🇱 MathToBac.ml
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Catalogue complet pour réussir le Bac malien en Mathématiques
        </p>
      </div>

      {/* Catalog Section: Ressources - EN PREMIER */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ressources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vidéo */}
          <Link href="/bibliotheque">
            <div className="border border-[#352315] rounded-xl p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFF8E7]">
              <div className="flex items-start justify-between mb-4">
                <Play size={40} className="text-gray-600" />
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Vidéo</h3>
              <p className="text-gray-600 mb-3">Vidéos éducatives TSE & TSExp</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Maths</span>
              </div>
            </div>
          </Link>
          {/* Cours */}
          <Link href="/lecons/maths">
            <div className="border border-[#352315] rounded-xl p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFF8E7]">
              <div className="flex items-start justify-between mb-4">
                <FileText size={40} className="text-gray-600" />
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Cours</h3>
              <p className="text-gray-600 mb-3">Cours complets avec aperçu PDF</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Leçons PDF</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Catalog Section: Séries */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Séries du Baccalauréat</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/tse">
            <div className="border border-[#352315] rounded-lg p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFEDCE]">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">🔬</div>
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">TSE</h3>
              <p className="text-gray-600 mb-3">Sciences Exactes</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Mathématiques</span>
              </div>
            </div>
          </Link>
          <Link href="/tsexp">
            <div className="border border-[#352315] rounded-lg p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFEDCE]">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">🧪</div>
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">TSExp</h3>
              <p className="text-gray-600 mb-3">Sciences Expérimentales</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Mathématiques</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
