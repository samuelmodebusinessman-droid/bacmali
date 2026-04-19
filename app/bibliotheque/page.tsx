'use client';

import Link from 'next/link';
import { Calculator, FlaskConical, Atom, ArrowRight, Microscope, Play, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import VideoModal from '@/components/VideoModal';

type Serie = 'tse' | 'tsexp' | 'all';
type Matiere = 'maths' | 'all';

export default function BibliothequePage() {
  const [selectedSerie, setSelectedSerie] = useState<Serie>('all');
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere>('all');
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const videos = [
    // TSE - Maths
    { id: '1', title: 'Nombres Complexes - TSE', description: 'Module, argument, forme algébrique et exponentielle', youtubeId: '1QIA-ecRzfk', serie: 'tse', matiere: 'maths', chapter: 'Nombres Complexes' },
    { id: '2', title: 'Arithmétique - TSE', description: 'PGCD, PPCM, nombres premiers, congruences', youtubeId: 'ispwJx0jfrM', serie: 'tse', matiere: 'maths', chapter: 'Arithmétique' },
    { id: '3', title: 'Fonctions Numériques - TSE', description: 'Étude de fonctions, limites, continuité', youtubeId: 'H2RLZ0Z_WoU', serie: 'tse', matiere: 'maths', chapter: 'Fonctions Numériques' },
    { id: '4', title: 'Dérivées - TSE', description: 'Calcul de dérivées, applications, tangentes', youtubeId: 'CiCwT1PFWPw', serie: 'tse', matiere: 'maths', chapter: 'Dérivées' },
    { id: '5', title: 'Intégrales - TSE', description: 'Primitives, intégrales définies, applications', youtubeId: 'XgjJ1325Exo', serie: 'tse', matiere: 'maths', chapter: 'Intégrales' },
    { id: '6', title: 'Suites Numériques - TSE', description: 'Suites arithmétiques, géométriques, récurrence', youtubeId: 'tHLNzFwW-7M', serie: 'tse', matiere: 'maths', chapter: 'Suites' },
    { id: '7', title: 'Équations Différentielles - TSE', description: 'Équations différentielles du premier et second ordre', youtubeId: 'gOs_HMy68b0', serie: 'tse', matiere: 'maths', chapter: 'Équations Différentielles' },
    { id: '8', title: 'Probabilités - TSE', description: 'Loi binomiale, conditionnelles, variables aléatoires', youtubeId: 'Zl9O_qDrmhA', serie: 'tse', matiere: 'maths', chapter: 'Probabilités' },
    
    // TSExp - Maths
    { id: '9', title: 'Nombres Complexes - TSExp', description: 'Module, argument, forme algébrique et exponentielle', youtubeId: 'Qp4c-YAv7hA', serie: 'tsexp', matiere: 'maths', chapter: 'Nombres Complexes' },
    { id: '10', title: 'Fonction Exponentielle - TSExp', description: 'Fonction exponentielle népérienne', youtubeId: '_uL67aTNlGs', serie: 'tsexp', matiere: 'maths', chapter: 'Fonction Exponentielle' },
    { id: '11', title: 'Intégrales - TSExp', description: 'Intégrale d\'une fonction continue', youtubeId: 'RfrANZXZeXo', serie: 'tsexp', matiere: 'maths', chapter: 'Intégrales' },
    { id: '12', title: 'Fonction Logarithme - TSExp', description: 'Fonction Logarithme népérien', youtubeId: '47NeiMqj6Y0', serie: 'tsexp', matiere: 'maths', chapter: 'Logarithme' },
    { id: '13', title: 'Primitives - TSExp', description: 'Les Primitives', youtubeId: '3KfytYvXX2I', serie: 'tsexp', matiere: 'maths', chapter: 'Primitives' },
    { id: '14', title: 'Suites Numériques - TSExp', description: 'Suites arithmétiques, géométriques', youtubeId: 'BWVpOWf-amo', serie: 'tsexp', matiere: 'maths', chapter: 'Suites' },
    { id: '15', title: 'Limite Continuité Dérivabilité - TSExp', description: 'Limite - Continuité - Dérivabilité', youtubeId: 'jcT-VnUcrK8', serie: 'tsexp', matiere: 'maths', chapter: 'Limite Continuité Dérivabilité' },
  ];

  const filteredVideos = videos.filter(video => {
    const matchSerie = selectedSerie === 'all' || video.serie === selectedSerie;
    const matchMatiere = selectedMatiere === 'all' || video.matiere === selectedMatiere;
    return matchSerie && matchMatiere;
  });

  const getMatiereColor = (matiere: string) => {
    return 'text-[#352315]';
  };

  const getMatiereIcon = (matiere: string) => {
    switch (matiere) {
      case 'maths': return <Calculator size={20} />;
      default: return <Play size={20} />;
    }
  };

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Play size={40} style={{ color: '#352315' }} />
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#352315' }}>
            Bibliothèque
          </h1>
        </div>
        <p className="text-xl text-[#352315] max-w-3xl mx-auto">
          Vidéos éducatives pour le programme TSE et TSExp
        </p>
      </div>

      {/* Filters */}
      <div className="bento-card p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-[#352315]" />
            <span className="font-medium text-[#352315]">Filtres :</span>
          </div>
          
          {/* Serie Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSerie('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'all' 
                  ? 'bg-[var(--background)] text-[#352315] border border-[#352315]' 
                  : 'bg-[var(--background)] text-[#352315] border border-[#352315] hover:bg-[var(--card-hover)]'
              }`}
            >
              Toutes séries
            </button>
            <button
              onClick={() => setSelectedSerie('tse')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tse' 
                  ? 'text-[#352315]' 
                  : 'bg-[var(--background)] text-[#352315] border border-[#352315] hover:bg-[var(--card-hover)]'
              }`}
              style={selectedSerie === 'tse' ? { backgroundColor: '#FFF1E6', border: '0.5px solid var(--card-border)' } : {}}
            >
              TSE
            </button>
            <button
              onClick={() => setSelectedSerie('tsexp')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tsexp' 
                  ? 'text-[#352315]' 
                  : 'bg-[var(--background)] text-[#352315] border border-[#352315] hover:bg-[var(--card-hover)]'
              }`}
              style={selectedSerie === 'tsexp' ? { backgroundColor: '#FFF1E6', border: '0.5px solid var(--card-border)' } : {}}
            >
              TSExp
            </button>
          </div>

          {/* Matiere Filter */}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setSelectedMatiere('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedMatiere === 'all' 
                  ? 'bg-[var(--background)] text-[#352315] border border-[#352315]' 
                  : 'bg-[var(--background)] text-[#352315] border border-[#352315] hover:bg-[var(--card-hover)]'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setSelectedMatiere('maths')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedMatiere === 'maths' 
                  ? 'text-[#352315]' 
                  : 'bg-[var(--background)] text-[#352315] border border-[#352315] hover:bg-[var(--card-hover)]'
              }`}
              style={selectedMatiere === 'maths' ? { backgroundColor: '#FFF1E6', border: '0.5px solid var(--card-border)' } : {}}
            >
              Maths
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 text-center">
        <p style={{ color: '#352315' }}>
          <span className="font-bold">{filteredVideos.length}</span> vidéo{filteredVideos.length > 1 ? 's' : ''} trouvée{filteredVideos.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 max-w-7xl mx-auto">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bento-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
               onClick={() => setSelectedVideo({ id: video.youtubeId, title: video.title })}>
            {/* Video Thumbnail/Preview */}
            <div className="relative aspect-video bg-[var(--background)] group">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 rounded-full p-4">
                  <Play size={32} className="text-[#352315]" />
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 border-[var(--card-border)]">
                  {getMatiereIcon(video.matiere)}
                  <span className="text-xs font-bold uppercase">{video.matiere}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-[var(--card-border)] text-[#352315]">
                  {video.serie.toUpperCase()}
                </span>
              </div>
              <h3 className="font-bold text-[#352315] mb-1">{video.title}</h3>
              <p className="text-sm border-[var(--card-border)] mb-2">{video.description}</p>
              <p className="text-xs text-[#352315]">Chapitre : {video.chapter}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredVideos.length === 0 && (
        <div className="bento-card p-12 text-center">
          <Play size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-[#352315] mb-2">Aucune vidéo trouvée</h3>
          <p className="text-[#352315]">Essayez de modifier vos filtres pour voir plus de résultats</p>
        </div>
      )}

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

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.id || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}
