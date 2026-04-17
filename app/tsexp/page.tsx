import Link from 'next/link';
import { Calculator, Play, FileText, ArrowRight, BookOpen, GraduationCap, FlaskConical } from 'lucide-react';

export default function TSExpPage() {
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
        <div className="text-6xl mb-4">🧪</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          TSExp
        </h1>
        <p className="text-2xl text-gray-700 mb-4">Terminale Sciences Expérimentales</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La filière TSExp est destinée aux élèves intéressés par les sciences expérimentales 
          et souhaitant poursuivre dans les domaines de la médecine, de la pharmacie, 
          de l'agronomie et des sciences de la vie.
        </p>
      </div>

      {/* Section Ressources Principales */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ressources TSExp</h2>
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
              <p className="text-gray-600 mb-4">Tous les cours de mathématiques en PDF avec exercices corrigés pour la TSExp.</p>
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
              <p className="text-gray-600 mb-4">Sélection de vidéos éducatives spécialement adaptées au programme TSExp.</p>
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
          <FlaskConical size={28} className="text-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Matières principales</h2>
        </div>
        <div className="border border-[#352315] rounded-lg p-6 bg-[#FFEDCE]">
          <p className="text-gray-700 mb-4">
            Le programme TSExp comprend les matières scientifiques suivantes :
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Mathématiques
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences de la Vie et de la Terre (SVT)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Physique-Chimie
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Après le bac TSExp, les élèves peuvent poursuivre dans les filières suivantes :
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Médecine, Pharmacie, Médecine dentaire
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences de la Santé (Infirmier, Sage-femme, etc.)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Agronomie et Métiers de l'Eau
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences de la Vie et de la Terre
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#352315]">•</span> Sciences Économiques et Gestion (SEG)
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
