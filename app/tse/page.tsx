import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import { Calculator, FlaskConical, Atom, ArrowRight } from 'lucide-react';

export default function TSEPage() {
  const mathsChapters = [
    { title: 'Nombres Complexes', desc: 'Module, argument, forme algébrique et exponentielle' },
    { title: 'Arithmétique', desc: 'PGCD, PPCM, nombres premiers, congruences' },
    { title: 'Fonctions Numériques', desc: 'Étude de fonctions, limites, continuité' },
    { title: 'Dérivées', desc: 'Calcul de dérivées, applications, tangentes' },
    { title: 'Intégrales', desc: 'Primitives, intégrales définies, applications' },
    { title: 'Suites', desc: 'Suites arithmétiques, géométriques, récurrence' },
    { title: 'Probabilités', desc: 'Loi binomiale, conditionnelles, variables aléatoires' },
  ];

  const physicsChapters = [
    { title: 'Mécanique', desc: 'Cinématique, dynamique, travail et énergie' },
    { title: 'Optique', desc: 'Lentilles, miroirs, formation d\'images' },
    { title: 'Électricité', desc: 'Circuits, loi d\'Ohm, dipôles RC, RL, RLC' },
    { title: 'Thermodynamique', desc: 'Gaz parfaits, premier principe, changements d\'état' },
    { title: 'Induction', desc: 'Loi de Faraday, loi de Lenz, auto-induction' },
    { title: 'Oscillateurs', desc: 'Oscillations libres, forcées, amorties' },
  ];

  const chemistryChapters = [
    { title: 'Stéréochimie', desc: 'Isomérie, représentation de Cram, Newman' },
    { title: 'Alcools', desc: 'Propriétés, réactions, synthèse' },
    { title: 'Amines', desc: 'Amines primaires, secondaires, tertiaires' },
    { title: 'Acides carboxyliques', desc: 'Propriétés, réactions, dérivés' },
    { title: 'Polymères', desc: 'Polyaddition, polycondensation, synthèse' },
    { title: 'Réactions acido-basiques', desc: 'pH, solutions tampons, titrages' },
    { title: 'Solutions', desc: 'Concentration, solubilité, précipitation' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🇲🇱 BacMali - TSE
        </h1>
        <p className="text-xl text-gray-300">Sciences Exactes • Maths + Physique + Chimie</p>
        <p className="text-sm text-[#3b82f6] mt-2">Programme officiel malien bkalan</p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Maths Section */}
        <BentoCard size="large" color="green">
          <div className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-[#3b82f6]" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Mathématiques</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {mathsChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all"
                >
                  <h3 className="font-bold text-[#3b82f6] mb-1">{chapter.title}</h3>
                  <p className="text-sm text-gray-400">{chapter.desc}</p>
                  <button className="mt-2 text-xs text-[#3b82f6] hover:text-[#06b6d4] transition-colors flex items-center gap-1">
                    Voir le cours <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Physics Section */}
        <BentoCard size="large" color="yellow">
          <div className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Atom className="text-[#06b6d4]" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Physique</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {physicsChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:bg-[#06b6d4]/20 hover:border-[#06b6d4]/50 transition-all"
                >
                  <h3 className="font-bold text-[#06b6d4] mb-1">{chapter.title}</h3>
                  <p className="text-sm text-gray-400">{chapter.desc}</p>
                  <button className="mt-2 text-xs text-[#06b6d4] hover:text-[#3b82f6] transition-colors flex items-center gap-1">
                    Voir le cours <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Chemistry Section */}
        <BentoCard size="large" color="red">
          <div className="p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="text-[#8b5cf6]" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Chimie</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {chemistryChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:bg-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 transition-all"
                >
                  <h3 className="font-bold text-[#8b5cf6] mb-1">{chapter.title}</h3>
                  <p className="text-sm text-gray-400">{chapter.desc}</p>
                  <button className="mt-2 text-xs text-[#8b5cf6] hover:text-[#3b82f6] transition-colors flex items-center gap-1">
                    Voir le cours <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Motivation Card */}
        <BentoCard size="small" color="default">
          <div className="p-6 h-full flex flex-col justify-center text-center">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-[#3b82f6] mb-2">Cartonne ton bac!</h3>
            <p className="text-sm text-gray-300">
              Programme complet, exercices corrigés, conseils d'experts
            </p>
          </div>
        </BentoCard>

        {/* Back to Home */}
        <BentoCard size="small" color="green">
          <div className="p-6 h-full flex flex-col justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#3b82f6] hover:text-white transition-colors"
            >
              <ArrowRight className="rotate-180" size={20} />
              <span className="font-bold">Retour accueil</span>
            </Link>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
