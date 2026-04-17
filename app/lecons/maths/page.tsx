'use client';

import Link from 'next/link';
import { Calculator, ArrowRight, FileText, Download, BookOpen } from 'lucide-react';
import { useState } from 'react';

type Serie = 'tse' | 'tsexp' | 'all';

export default function LeconsMathsPage() {
  const [selectedSerie, setSelectedSerie] = useState<Serie>('all');

  const chapitres = [
    { id: '1', titre: 'Nombres Complexes', description: 'Module, argument, forme algébrique et exponentielle', fichierLocal: 'cours-complexes.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-complexes.pdf', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-complexes.pdf', serie: ['tse', 'tsexp'] },
    { id: '2', titre: 'Arithmétique', description: 'PGCD, PPCM, nombres premiers, congruences', fichierLocal: 'cours-arithmetique.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-arithmetique.pdf', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-arithmetique.pdf', serie: ['tse'] },
    { id: '3', titre: 'Fonctions Numériques', description: 'Étude de fonctions, limites, continuité', fichierLocal: 'cours-fonctions.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-fonctions.pdf', exercice: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/exo-representations-numerical-functions.pdf', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-fonctions.pdf', serie: ['tse', 'tsexp'] },
    { id: '4', titre: 'Suites Numériques', description: 'Suites arithmétiques, géométriques, récurrence', fichierLocal: 'cours-suites-numeriques.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-suites-numeriques.pdf', exerciceLocal: 'exo-numerical-sequences.pdf', exercice: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/exo-numerical-sequences.pdf', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-suites.pdf', serie: ['tse', 'tsexp'] },
    { id: '5', titre: 'Équations Différentielles', description: 'Équations différentielles du premier et second ordre', fichierLocal: 'cours-equations-differentielles.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-equations-differentielles.pdf', serie: ['tse', 'tsexp'] },
    { id: '6', titre: 'Applications Affines', description: 'Applications affines et transformations', fichierLocal: 'cours-applications-affines.pdf', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-applications-affines.pdf', serie: ['tse', 'tsexp'] },
    { id: '7', titre: 'Probabilités', description: 'Loi binomiale, conditionnelles, variables aléatoires', fichierExterne: 'https://www.bkalan.ml/api/files/mathematiques/12-SET-MTGC-MTI/cours-probabilites.pdf', serie: ['tse', 'tsexp'] },
    { id: '8', titre: 'Intégrales', description: 'Primitives, intégrales définies, applications', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-integrales.pdf', serie: ['tse', 'tsexp'] },
    { id: '9', titre: 'Barycentres', description: 'Barycentre et applications géométriques', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-barycentres.pdf', serie: ['tse', 'tsexp'] },
    { id: '10', titre: 'Coniques', description: 'Parabole, ellipse, hyperbole', malimath: 'https://www.bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/malimath-coniques.pdf', serie: ['tse', 'tsexp'] },
  ];

  const filteredChapitres = chapitres.filter(chapitre => {
    if (selectedSerie === 'all') return true;
    return chapitre.serie.includes(selectedSerie);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator size={40} className="text-gray-600" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Leçons de Mathématiques
          </h1>
        </div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Fiches de cours et exercices pour TSE et TSExp
        </p>
      </div>

      {/* Filters */}
      <div className="bento-card p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium text-gray-700">Filtrer par série :</span>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSerie('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'all' 
                  ? 'bg-[var(--card-bg)ard-bg)] text-gray-900 border border-[var(--card-border)]' 
                  : 'bg-[var(--card-bg)ard-bg)] text-gray-900 border border-[#3523var(--card-hover)er:bg-[#FFE4B5]'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setSelectedSerie('tse')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tse' 
                  ? 'text-gray-900' 
                  : 'bg-[var(--card-bg)] text-gray-900 border border-[var(--card-border)] hovvar(--card-hover)#FFE4B5]'
              }`}
              style={selectedSerie === 'tse' ? { backgroundColor: '#FFF1E6', border: '0.5px solid var(--card-border)' } : {}}
            >
              TSE
            </button>
            <button
              onClick={() => setSelectedSerie('tsexp')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tsexp' 
                  ? 'text-gray-900' 
                  : 'bg-[var(--card-bg)] text-gray-900 border border-[var(--card-border)] hovvar(--card-hover)#FFE4B5]'
              }`}
              style={selectedSerie === 'tsexp' ? { backgroundColor: '#FFF1E6', border: '0.5px solid var(--card-border)' } : {}}
            >
              TSExp
            </button>
          </div>
        </div>
      </div>

      {/* Chapitres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredChapitres.map((chapitre) => {
          const viewUrl = chapitre.fichierLocal 
            ? `/lecons/maths/view?file=${chapitre.fichierLocal}&title=${encodeURIComponent(chapitre.titre)}`
            : chapitre.fichierExterne;

          if (!viewUrl) return null;

          return (
            <Link
              key={chapitre.id}
              href={viewUrl}
              target={chapitre.fichierExterne ? '_blank' : undefined}
              rel={chapitre.fichierExterne ? 'noopener noreferrer' : undefined}
              className="bento-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow block"
            >
              {/* PDF Preview */}
              {chapitre.fichierLocal && (
                <div className="relative aspect-[3/4] md:aspect-[4/3] bg-[var(--card-bg)]">
                  <iframe
                    src={`/leçons/maths/${chapitre.fichierLocal}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={chapitre.titre}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    loading="lazy"
                  />
                </div>
              )}
              
              {!chapitre.fichierLocal && chapitre.fichierExterne && (
                <div className="relative aspect-[3/4] md:aspect-[4/3] bg-[var(--card-bg)] flex items-center justify-center">
                  <FileText size={64} className="text-gray-400" />
                </div>
              )}
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-1">
                    {chapitre.serie.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full border border-[var(--card-border)] text-gray-700"
                      >
                        {s.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-1 text-gray-900">
                  {chapitre.titre}
                </h3>
                <p className="text-sm text-gray-600 mb-3 border-b border-[var(--card-border)]">{chapitre.description}</p>
                
                <div className="flex flex-col gap-2">
                  {chapitre.exerciceLocal && (
                    <a
                      href={`/leçons/maths/${chapitre.exerciceLocal}`}
                      download
                      className="flex items-center justify-center gap-2 text-xs font-bold py-2 px-4 rounded bg-[var(--card-bg)] text-gray-900 border border-[var(--card-border)] hovvar(--card-hover)#FFE4B5]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download size={14} />
                      Télécharger les exercices
                    </a>
                  )}
                  {chapitre.malimath && (
                    <a
                      href={chapitre.malimath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-bold py-2 px-4 rounded bg-[var(--background)] text-gray-900 bordevar(--card-border)r-[#352315] hover:bg-[var(--card-hover)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <BookOpen size={14} />
                      MaliMath (Sujets + Corrigés)
                    </a>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      
      {/* Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700"
        >
          <ArrowRight className="rotate-180" size={20} />
          <span className="font-medium">Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
