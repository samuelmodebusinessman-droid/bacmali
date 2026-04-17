import Link from 'next/link';
import { Calculator, Play, FileText, ArrowRight, BookOpen, Video, GraduationCap } from 'lucide-react';

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header - Présentation de la filière */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🔬</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          TSE
        </h1>
        <p className="text-2xl text-gray-700 mb-4">Terminale Sciences Exactes</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La filière TSE est destinée aux élèves passionnés par les mathématiques et les sciences. 
          Elle prépare aux études scientifiques supérieures et aux concours d'entrée aux grandes écoles.
        </p>
      </div>

      {/* Section Ressources Principales */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ressources TSE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cours PDF */}
          <Link href="/lecons/maths">
            <div className="border border-[#352315] rounded-xl p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFF8E7] hover:bg-[#FFE4B5]">
              <div className="flex items-start justify-between mb-4">
                <FileText size={48} className="text-gray-700" />
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Cours PDF</h3>
              <p className="text-gray-600 mb-4">Tous les cours de mathématiques en PDF avec exercices corrigés pour la TSE.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">7 chapitres</span>
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Exercices</span>
              </div>
            </div>
          </Link>
          {/* Vidéos */}
          <Link href="/bibliotheque">
            <div className="border border-[#352315] rounded-xl p-8 cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[#FFF8E7] hover:bg-[#FFE4B5]">
              <div className="flex items-start justify-between mb-4">
                <Play size={48} className="text-gray-700" />
                <ArrowRight size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Vidéos</h3>
              <p className="text-gray-600 mb-4">Sélection de vidéos éducatives spécialement adaptées au programme TSE.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">15+ vidéos</span>
                <span className="text-xs px-3 py-1 rounded-full border border-[#352315] text-gray-700">Toutes matières</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Programme de Mathématiques */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Calculator size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Programme de Mathématiques</h2>
        </div>
        <div className="border border-[#352315] rounded-lg p-6 bg-[#FFEDCE]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mathsChapters.map((chapter, index) => (
              <div
                key={index}
                className="border border-[#352315] rounded-lg p-4 bg-[#FFF8E7]"
              >
                <h3 className="font-bold mb-2 text-gray-900">{chapter.title}</h3>
                <p className="text-sm text-gray-600">{chapter.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/lecons/maths" className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded bg-[#FFF8E7] text-gray-900 border border-[#352315] hover:bg-[#FFE4B5]">
              <FileText size={18} />
              Accéder aux cours complets
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info filière */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Débouchés</h2>
        </div>
        <div className="border border-[#352315] rounded-lg p-6 bg-[#FFEDCE]">
          <p className="text-gray-700 mb-4">
            Après le bac TSE, les élèves peuvent poursuivre dans les filières suivantes :
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Mathématiques, Physique, Informatique (MPI)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Physique, Chimie, Sciences de la Vie (PCSV)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences Économiques et Gestion (SEG)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Médecine, Pharmacie, Médecine dentaire
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences de l'Ingénieur (SI)
            </li>
          </ul>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowRight className="rotate-180" size={20} />
          <span className="font-medium">Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
