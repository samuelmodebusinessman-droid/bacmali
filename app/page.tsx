import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import { BookOpen, Calendar, FileText, MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Card */}
      <div className="bento-card bento-card-green p-8 md:p-12 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🇲🇱 BacMali
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Le Bento Grid pour cartonner en Maths, Physique, Chimie TSE & TSExp
            </p>
          </div>
          <div className="text-6xl md:text-8xl animate-pulse">
            🎓
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Choose Series - Large Card */}
        <BentoCard size="large" color="yellow">
          <div className="p-6 h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Choisis ta série
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/tse">
                <div className="bg-[#3498db]/10 hover:bg-[#3498db]/20 border-2 border-[#3498db]/30 hover:border-[#3498db] rounded-xl p-6 text-center transition-all cursor-pointer hover:scale-105">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="text-xl font-bold text-[#3498db]">TSE</h3>
                  <p className="text-sm text-gray-300 mt-2">Sciences Exactes</p>
                  <p className="text-xs text-gray-400 mt-1">Maths + PC</p>
                </div>
              </Link>
              <Link href="/tsexp">
                <div className="bg-[#8e44ad]/10 hover:bg-[#8e44ad]/20 border-2 border-[#8e44ad]/30 hover:border-[#8e44ad] rounded-xl p-6 text-center transition-all cursor-pointer hover:scale-105">
                  <div className="text-4xl mb-3">🧪</div>
                  <h3 className="text-xl font-bold text-[#8e44ad]">TSExp</h3>
                  <p className="text-sm text-gray-300 mt-2">Sciences Expérimentales</p>
                  <p className="text-xs text-gray-400 mt-1">PC + SVT</p>
                </div>
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* Subjects & Corrections - Large Horizontal Card */}
        <BentoCard size="large" color="green">
          <div className="p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-[#3b82f6]" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Sujets & Corrigés</h2>
            </div>
            <p className="text-gray-300 mb-4">Programme officiel malien bkalan</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                <button
                  key={year}
                  className="bg-gray-800/50 hover:bg-[#3b82f6]/30 border border-gray-700 hover:border-[#3b82f6] rounded-lg py-3 px-4 text-center transition-all"
                >
                  <span className="font-bold">{year}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">📁 Liens Google Drive disponibles bientôt</p>
          </div>
        </BentoCard>

        {/* Weekly Planning - Small Card */}
        <BentoCard size="small" color="default">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-[#06b6d4]" size={24} />
              <h3 className="text-lg font-bold">Planning hebdo</h3>
            </div>
            <p className="text-sm text-gray-300 flex-1">
              Semaine du 14-20 avril 2026
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-xs text-[#3b82f6]">• Nombres complexes</p>
              <p className="text-xs text-[#06b6d4]">• Mécanique</p>
            </div>
          </div>
        </BentoCard>

        {/* Revision Sheets - Small Card */}
        <BentoCard size="small" color="default">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="text-[#8b5cf6]" size={24} />
              <h3 className="text-lg font-bold">Fiches de révision</h3>
            </div>
            <p className="text-sm text-gray-300 flex-1">
              Résumés clairs et efficaces
            </p>
            <p className="text-xs text-[#8b5cf6] mt-3">Pas de perte de temps</p>
          </div>
        </BentoCard>

        {/* Discord Community - Large Card */}
        <BentoCard size="large" color="red">
          <div className="p-6 h-full flex flex-col justify-center items-center text-center">
            <MessageCircle className="text-[#3b82f6] mb-4" size={48} />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rejoindre la communauté
            </h2>
            <p className="text-gray-300 mb-6">
              Échange avec d'autres terminales maliens
            </p>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Rejoindre Discord</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
