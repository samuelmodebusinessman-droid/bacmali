import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import { BookOpen, Calendar, FileText, MessageCircle, ArrowRight, GraduationCap, FolderOpen, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#1d83e2' }}>
          🇲🇱 BacMali
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Catalogue complet pour réussir le Bac malien en Maths, Physique et Chimie
        </p>
        <p className="text-sm mt-4" style={{ color: '#e97816' }}>Programme officiel bkalan • TSE & TSExp</p>
      </div>

      {/* Catalog Section: Séries */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={28} style={{ color: '#1d83e2' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Séries du Baccalauréat</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/tse">
            <div className="bento-card bento-card-green p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">🔬</div>
                <ArrowRight size={24} style={{ color: '#1d83e2' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1d83e2' }}>TSE</h3>
              <p className="text-gray-600 mb-3">Sciences Exactes</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#e8f3fc', color: '#1d83e2' }}>Mathématiques</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#e8f3fc', color: '#1d83e2' }}>Physique</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#e8f3fc', color: '#1d83e2' }}>Chimie</span>
              </div>
            </div>
          </Link>
          <Link href="/tsexp">
            <div className="bento-card bento-card-yellow p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">🧪</div>
                <ArrowRight size={24} style={{ color: '#e9bf16' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#e9bf16' }}>TSExp</h3>
              <p className="text-gray-600 mb-3">Sciences Expérimentales</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#fdf9e8', color: '#e9bf16' }}>Mathématiques</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#fdf9e8', color: '#e9bf16' }}>Physique-Chimie</span>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#fdf9e8', color: '#e9bf16' }}>SVT</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Catalog Section: Ressources */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen size={28} style={{ color: '#e97816' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Ressources</h2>
        </div>
        <div className="bento-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 rounded-xl p-6" style={{ borderColor: '#d1d5db' }}>
              <BookOpen size={32} style={{ color: '#1d83e2' }} className="mb-4" />
              <h3 className="text-lg font-bold mb-2">Sujets & Corrigés</h3>
              <p className="text-sm text-gray-600 mb-4">Annales complètes de 2018 à 2025</p>
              <div className="grid grid-cols-4 gap-2">
                {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                  <span key={year} className="text-xs text-center py-2 rounded-lg bg-gray-100">{year}</span>
                ))}
              </div>
            </div>
            <div className="border-2 rounded-xl p-6" style={{ borderColor: '#d1d5db' }}>
              <FileText size={32} style={{ color: '#e97816' }} className="mb-4" />
              <h3 className="text-lg font-bold mb-2">Fiches de Révision</h3>
              <p className="text-sm text-gray-600 mb-4">Résumés clairs et efficaces</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Formules essentielles</li>
                <li>• Méthodes clés</li>
                <li>• Points à retenir</li>
              </ul>
            </div>
            <div className="border-2 rounded-xl p-6" style={{ borderColor: '#d1d5db' }}>
              <Calendar size={32} style={{ color: '#f73008' }} className="mb-4" />
              <h3 className="text-lg font-bold mb-2">Planning Hebdo</h3>
              <p className="text-sm text-gray-600 mb-4">Programme de révision</p>
              <div style={{ color: '#f73008' }}>
                <p className="text-xs">Semaine du 14-20 avril 2026</p>
                <p className="text-gray-500 text-xs mt-1">Nombres complexes + Mécanique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section: Communauté */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Users size={28} style={{ color: '#f73008' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Communauté</h2>
        </div>
        <div className="bento-card bento-card-red p-8 text-center">
          <MessageCircle size={48} style={{ color: '#f73008' }} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Rejoins la communauté Discord</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Échange avec d'autres terminales maliens, pose tes questions et partage tes ressources
          </p>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold py-3 px-8 rounded-lg btn-static"
            style={{ backgroundColor: '#1d83e2', color: '#ffffff' }}
          >
            <span>Rejoindre Discord</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
