'use client';

import Link from 'next/link';
import { Calculator, FlaskConical, Atom, ArrowRight, Microscope, Play, Search, Filter } from 'lucide-react';
import { useState } from 'react';

type Serie = 'tse' | 'tsexp' | 'all';
type Matiere = 'maths' | 'all';

export default function BibliothequePage() {
  const [selectedSerie, setSelectedSerie] = useState<Serie>('all');
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere>('all');

  const videos = [
    // Maths
    { id: '1', title: '11e Maths Equations Inequations', description: 'Equations et Inéquations', youtubeId: '1QIA-ecRzfk', serie: 'tse', matiere: 'maths', chapter: 'Equations' },
    { id: '2', title: '11e Maths Equations Inequations', description: 'Equations et Inéquations', youtubeId: 'ispwJx0jfrM', serie: 'tse', matiere: 'maths', chapter: 'Equations' },
    { id: '3', title: '10e Maths Equations Inequations', description: 'Equations et Inéquations', youtubeId: 'H2RLZ0Z_WoU', serie: 'tse', matiere: 'maths', chapter: 'Equations' },
    { id: '4', title: '11e Sc Maths Equations Inequations', description: 'Equations et Inéquations séance1', youtubeId: 'CiCwT1PFWPw', serie: 'tse', matiere: 'maths', chapter: 'Equations' },
    { id: '5', title: '11e Sc Maths Equations Inequations', description: 'Equations et Inéquations séance2', youtubeId: 'XgjJ1325Exo', serie: 'tse', matiere: 'maths', chapter: 'Equations' },
    { id: '6', title: 'TSEco TSS TLL TAL Maths Etude fonction', description: 'Etude et Représentation d\'une fonction', youtubeId: 'tHLNzFwW-7M', serie: 'tse', matiere: 'maths', chapter: 'Fonctions' },
    { id: '7', title: 'TSE STI TSExp STG Maths Equations Différentielles', description: 'Equations Différentielles', youtubeId: 'gOs_HMy68b0', serie: 'tse', matiere: 'maths', chapter: 'Equations Différentielles' },
    { id: '8', title: 'TSEco TSS TLL TAL Maths Etude fonction', description: 'Etude et Représentation de fonction', youtubeId: 'Zl9O_qDrmhA', serie: 'tse', matiere: 'maths', chapter: 'Fonctions' },
    { id: '9', title: 'Equations Différentielles', description: 'Equations Différentielles - TSE - STI - TSExp - STG', youtubeId: 'Qp4c-YAv7hA', serie: 'tse', matiere: 'maths', chapter: 'Equations Différentielles' },
    { id: '10', title: 'Fonction exponentielle népérienne', description: 'Fonction exponentielle népérienne - TSE - STI - TSExp - STG', youtubeId: '_uL67aTNlGs', serie: 'tse', matiere: 'maths', chapter: 'Fonction Exponentielle' },
    { id: '11', title: 'Intégrale d\'une fonction continue', description: 'Intégrale d\'une fonction continue', youtubeId: 'RfrANZXZeXo', serie: 'tse', matiere: 'maths', chapter: 'Intégrales' },
    { id: '12', title: 'Fonction Logarithme népérien', description: 'Fonction Logarithme népérien', youtubeId: '47NeiMqj6Y0', serie: 'tse', matiere: 'maths', chapter: 'Logarithme' },
    { id: '13', title: 'Mathématiques Les Primitives', description: 'Les Primitives', youtubeId: '3KfytYvXX2I', serie: 'tse', matiere: 'maths', chapter: 'Primitives' },
    { id: '14', title: 'Mathematics Graphical representation of functions', description: 'Graphical representation of functions', youtubeId: 'BWVpOWf-amo', serie: 'tse', matiere: 'maths', chapter: 'Fonctions' },
    { id: '15', title: 'Mathématique Limite Continuité Dérivabilité', description: 'Limite - Continuité - Dérivabilité', youtubeId: 'jcT-VnUcrK8', serie: 'tse', matiere: 'maths', chapter: 'Limite Continuité Dérivabilité' },
  ];

  const filteredVideos = videos.filter(video => {
    const matchSerie = selectedSerie === 'all' || video.serie === selectedSerie;
    const matchMatiere = selectedMatiere === 'all' || video.matiere === selectedMatiere;
    return matchSerie && matchMatiere;
  });

  const getMatiereColor = (matiere: string) => {
    return 'text-gray-600';
  };

  const getMatiereIcon = (matiere: string) => {
    switch (matiere) {
      case 'maths': return <Calculator size={20} />;
      default: return <Play size={20} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Play size={40} className="border-[#352315]" />
          <h1 className="text-5xl md:text-6xl font-bold border-[#352315]">
            Bibliothèque
          </h1>
        </div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Vidéos éducatives pour le programme TSE et TSExp
        </p>
      </div>

      {/* Filters */}
      <div className="bento-card p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <span className="font-medium text-gray-700">Filtres :</span>
          </div>
          
          {/* Serie Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSerie('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'all' 
                  ? 'bg-[#FFEDCE] text-gray-900 border border-[#352315]' 
                  : 'bg-[#FFEDCE] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]'
              }`}
            >
              Toutes séries
            </button>
            <button
              onClick={() => setSelectedSerie('tse')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tse' 
                  ? 'text-gray-900' 
                  : 'bg-[#FFEDCE] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]'
              }`}
              style={selectedSerie === 'tse' ? { backgroundColor: '#FFF1E6', border: '0.5px solid #352315' } : {}}
            >
              TSE
            </button>
            <button
              onClick={() => setSelectedSerie('tsexp')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSerie === 'tsexp' 
                  ? 'text-gray-900' 
                  : 'bg-[#FFEDCE] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]'
              }`}
              style={selectedSerie === 'tsexp' ? { backgroundColor: '#FFF1E6', border: '0.5px solid #352315' } : {}}
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
                  ? 'bg-[#FFEDCE] text-gray-900 border border-[#352315]' 
                  : 'bg-[#FFEDCE] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setSelectedMatiere('maths')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedMatiere === 'maths' 
                  ? 'text-gray-900' 
                  : 'bg-[#FFEDCE] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]'
              }`}
              style={selectedMatiere === 'maths' ? { backgroundColor: '#FFF1E6', border: '0.5px solid #352315' } : {}}
            >
              Maths
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="border-[#352315]">
          <span className="font-bold">{filteredVideos.length}</span> vidéo{filteredVideos.length > 1 ? 's' : ''} trouvée{filteredVideos.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bento-card overflow-hidden">
            {/* Video Thumbnail/Preview */}
            <div className="relative aspect-video bg-[#FFEDCE]">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 border-[#352315]">
                  {getMatiereIcon(video.matiere)}
                  <span className="text-xs font-bold uppercase">{video.matiere}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-[#352315] text-gray-700">
                  {video.serie.toUpperCase()}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
              <p className="text-sm border-[#352315] mb-2">{video.description}</p>
              <p className="text-xs text-gray-500">Chapitre : {video.chapter}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredVideos.length === 0 && (
        <div className="bento-card p-12 text-center">
          <Play size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune vidéo trouvée</h3>
          <p className="text-gray-500">Essayez de modifier vos filtres pour voir plus de résultats</p>
        </div>
      )}

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
