'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, Calculator, Clock } from 'lucide-react';
import { useState } from 'react';

type Serie = 'tse' | 'tsexp' | 'all';

export default function PlanningPage() {
  const [selectedSerie, setSelectedSerie] = useState<Serie>('all');

  const planning = [
    { id: '1', semaine: 'Semaine du 14-20 avril 2026', chapitre: 'Nombres Complexes', serie: 'tse', matiere: 'maths', description: 'Module, argument, forme algébrique et exponentielle' },
    { id: '2', semaine: 'Semaine du 21-27 avril 2026', chapitre: 'Arithmétique', serie: 'tse', matiere: 'maths', description: 'PGCD, PPCM, nombres premiers, congruences' },
    { id: '3', semaine: 'Semaine du 28 avril - 4 mai 2026', chapitre: 'Fonctions Numériques', serie: 'tse', matiere: 'maths', description: 'Étude de fonctions, limites, continuité' },
    { id: '4', semaine: 'Semaine du 5-11 mai 2026', chapitre: 'Dérivées', serie: 'tse', matiere: 'maths', description: 'Calcul de dérivées, applications, tangentes' },
    { id: '5', semaine: 'Semaine du 12-18 mai 2026', chapitre: 'Intégrales', serie: 'tse', matiere: 'maths', description: 'Primitives, intégrales définies, applications' },
    { id: '6', semaine: 'Semaine du 19-25 mai 2026', chapitre: 'Suites', serie: 'tsexp', matiere: 'maths', description: 'Suites arithmétiques, géométriques, récurrence' },
    { id: '7', semaine: 'Semaine du 26 mai - 1er juin 2026', chapitre: 'Probabilités', serie: 'tsexp', matiere: 'maths', description: 'Loi binomiale, conditionnelles, variables aléatoires' },
    { id: '8', semaine: 'Semaine du 2-8 juin 2026', chapitre: 'Équations Différentielles', serie: 'tsexp', matiere: 'maths', description: 'Équations différentielles du premier et second ordre' },
    { id: '9', semaine: 'Semaine du 9-15 juin 2026', chapitre: 'Fonction Exponentielle', serie: 'tsexp', matiere: 'maths', description: 'Fonction exponentielle népérienne' },
    { id: '10', semaine: 'Semaine du 16-22 juin 2026', chapitre: 'Fonction Logarithme', serie: 'tsexp', matiere: 'maths', description: 'Fonction logarithme népérien' },
    { id: '11', semaine: 'Semaine du 23-29 juin 2026', chapitre: 'Limites Continuité Dérivabilité', serie: 'tsexp', matiere: 'maths', description: 'Limites, continuité, dérivabilité' },
    { id: '12', semaine: 'Semaine du 30 juin - 6 juillet 2026', chapitre: 'Primitives', serie: 'tsexp', matiere: 'maths', description: 'Calcul des primitives' },
  ];

  const filteredPlanning = planning.filter(item => {
    if (selectedSerie === 'all') return true;
    return item.serie === selectedSerie;
  });

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar size={40} className="text-[#352315]" />
          <h1 className="text-5xl md:text-6xl font-bold text-[#352315]">
            Planning Hebdo
          </h1>
        </div>
        <p className="text-xl text-[#352315] max-w-3xl mx-auto">
          Programme de révision en Mathématiques pour TSE et TSExp
        </p>
      </div>

      {/* Filters */}
      <div className="bento-card p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium text-[#352315]">Filtrer par série :</span>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSerie('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'all' 
                  ? 'bg-[#FFF8E7] text-[#352315] border border-[#352315]' 
                  : 'bg-[#FFEDCE] text-[#352315] border border-[#352315] hover:bg-[#FFF8E7]'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setSelectedSerie('tse')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tse' 
                  ? 'text-[#1F271B]' 
                  : 'bg-[#FFEDCE] text-[#352315] border border-[#352315] hover:bg-[#FFF8E7]'
              }`}
              style={selectedSerie === 'tse' ? { backgroundColor: '#EAEBED', border: '0.5px solid #352315' } : {}}
            >
              TSE
            </button>
            <button
              onClick={() => setSelectedSerie('tsexp')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tsexp' 
                  ? 'text-[#1F271B]' 
                  : 'bg-[#FFEDCE] text-[#352315] border border-[#352315] hover:bg-[#FFF8E7]'
              }`}
              style={selectedSerie === 'tsexp' ? { backgroundColor: '#EAEBED', border: '0.5px solid #352315' } : {}}
            >
              TSExp
            </button>
          </div>
        </div>
      </div>

      {/* Planning Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPlanning.map((item) => (
          <div key={item.id} className="bento-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 text-[#352315]">
                <Calendar size={24} />
                <span className="text-xs font-bold uppercase">{item.semaine}</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full border border-[#352315] text-[#352315]">
                {item.serie.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <Calculator size={20} className="text-[#352315]" />
              <h3 className="font-bold text-lg text-[#352315]">{item.chapitre}</h3>
            </div>
            <p className="text-sm text-[#352315] mb-4">{item.description}</p>
            
            <Link
              href="/lecons/maths"
              className="inline-flex items-center gap-2 text-xs font-bold py-2 px-4 rounded bg-[#FFEDCE] text-[#352315] border border-[#352315] hover:bg-[#FFF8E7]"
            >
              <Clock size={14} />
              Voir le cours <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#352315] hover:text-[#352315]"
        >
          <ArrowRight className="rotate-180" size={20} />
          <span className="font-medium">Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
