'use client';

import Link from 'next/link';
import { Calculator, ArrowRight, BookOpen, PlayCircle, ChevronRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { chapitres, type Serie } from './chapitre/data';

type FilterSerie = Serie | 'all';

export default function LeconsMathsPage() {
  const [selectedSerie, setSelectedSerie] = useState<FilterSerie>('all');

  const filteredChapitres = chapitres.filter(chapitre => {
    if (selectedSerie === 'all') return true;
    return chapitre.serie.includes(selectedSerie);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator size={40} style={{ color: '#352315' }} />
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#352315' }}>
            Leçons de Mathématiques
          </h1>
        </div>
        <p className="text-xl" style={{ color: '#5a4a3a' }}>
          Cours interactifs avec vidéos, exercices et quiz pour TSE et TSExp
        </p>
      </div>

      {/* Filters */}
      <div className="border rounded-lg p-6 mb-8" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium" style={{ color: '#352315' }}>Filtrer par série :</span>
          <div className="flex gap-2">
            {(['all', 'tse', 'tsexp'] as const).map((serie) => (
              <button
                key={serie}
                onClick={() => setSelectedSerie(serie)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border`}
                style={{
                  borderColor: 'var(--card-border)',
                  backgroundColor: selectedSerie === serie ? '#FFF1E6' : 'var(--background)',
                  color: '#352315'
                }}
              >
                {serie === 'all' ? 'Toutes' : serie.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapitres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredChapitres.map((chapitre) => (
          <Link
            key={chapitre.id}
            href={`/lecons/maths/chapitre/${chapitre.slug}`}
            className="border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow block"
            style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}
          >
            {/* Preview */}
            <div className="relative aspect-video flex items-center justify-center" style={{ backgroundColor: 'var(--card-bg)' }}>
              {chapitre.videoUrl ? (
                <PlayCircle size={48} style={{ color: '#352315' }} />
              ) : (
                <BookOpen size={48} style={{ color: '#352315' }} />
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex gap-1">
                  {chapitre.serie.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{ borderColor: 'var(--card-border)', color: '#352315' }}
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-1" style={{ color: '#352315' }}>
                {chapitre.titre}
              </h3>
              <p className="text-sm mb-3" style={{ color: '#5a4a3a' }}>
                {chapitre.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs" style={{ color: '#5a4a3a' }}>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {chapitre.sections.length} sections
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle size={12} />
                    {chapitre.exercices.length} exercices
                  </span>
                </div>
                <ChevronRight size={20} style={{ color: '#352315' }} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#352315' }}
        >
          <ArrowRight className="rotate-180" size={20} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
