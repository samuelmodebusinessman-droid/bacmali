import Link from 'next/link';
import { Calculator, Play, FileText, ArrowRight, BookOpen, Video, GraduationCap } from 'lucide-react';

export default function TSEPage() {
  const mathsChapters = [
    { title: 'Nombres Complexes', slug: 'nombres-complexes', desc: 'Forme algébrique, trigonométrique, exponentielle, équations dans ℂ' },
    { title: 'Arithmétique', slug: 'arithmetique', desc: 'Division euclidienne, congruences, nombres premiers, PGCD/PPCM, Bézout, Gauss (TSE)' },
    { title: 'Fonctions Numériques', slug: 'fonctions-numeriques', desc: 'Limites, continuité, dérivation, asymptotes, convexité' },
    { title: 'Fonctions Spéciales', slug: 'fonctions-speciales', desc: 'Logarithme népérien, exponentielle, fonctions puissances' },
    { title: 'Suites Numériques', slug: 'suites-numeriques', desc: 'Monotonie, convergence, suites arithmétiques et géométriques' },
    { title: 'Calcul Intégral', slug: 'calcul-integral', desc: 'Primitives, intégrales, aires, volumes, intégration par parties' },
    { title: 'Équations Différentielles', slug: 'equations-differentielles', desc: 'Équations du 1er ordre, équations linéaires du 2nd ordre' },
    { title: 'Probabilités', slug: 'probabilites', desc: 'Dénombrement, probabilités conditionnelles, loi binomiale, espérance' },
    { title: 'Géométrie Affine', slug: 'geometrie-affine', desc: 'Barycentres, applications affines, lignes de niveau (TSE)' },
    { title: 'Coniques', slug: 'coniques', desc: 'Parabole, ellipse, hyperbole : équations, foyers, directrices (TSE)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header - Présentation de la filière */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🔬</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          TSE
        </h1>
        <p className="text-2xl text-[#352315] mb-4">Terminale Sciences Exactes</p>
        <p className="text-lg text-[#352315] max-w-2xl mx-auto">
          La filière TSE est destinée aux élèves passionnés par les mathématiques et les sciences. 
          Elle prépare aux études scientifiques supérieures et aux concours d'entrée aux grandes écoles.
        </p>
      </div>

      {/* Section Ressources Principales */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <BookOpen size={28} className="text-[#352315]" />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#352315' }}>Ressources TSE</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Cours PDF */}
          <Link href="/lecons/maths">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <FileText size={40} style={{ color: '#352315' }} />
              <h3 className="text-xl font-bold mb-2 text-center mt-3" style={{ color: '#352315' }}>Cours PDF</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Cours complets</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>7 chapitres</span>
              </div>
            </div>
          </Link>
          {/* Vidéos */}
          <Link href="/bibliotheque">
            <div className="border border-[var(--card-border)] rounded-xl aspect-square cursor-pointer hover:border-[#5a3d2a] transition-colors bg-[var(--background)] flex flex-col items-center justify-center p-6">
              <Play size={40} style={{ color: '#352315' }} />
              <h3 className="text-xl font-bold mb-2 text-center mt-3" style={{ color: '#352315' }}>Vidéos</h3>
              <p className="text-center text-sm" style={{ color: '#352315' }}>Vidéos éducatives</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)]" style={{ color: '#352315' }}>15+ vidéos</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Programme de Mathématiques */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Calculator size={28} className="text-[#352315]" />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#352315' }}>Programme de Mathématiques</h2>
        </div>
        <div className="border border-[var(--card-border)] rounded-lg p-6 bg-[var(--background)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mathsChapters.map((chapter, index) => (
              <Link
                key={index}
                href={`/lecons/maths/chapitre/${chapter.slug}`}
                className="border border-[var(--card-border)] rounded-lg p-4 bg-[var(--card-bg)] cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold mb-2 text-gray-900">{chapter.title}</h3>
                <p className="text-sm text-[#352315]">{chapter.desc}</p>
                <div className="mt-2 text-xs text-[#352315] font-medium">Voir la leçon →</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/lecons/maths" className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded bg-[var(--card-bg)] text-gray-900 border border-[var(--card-border)] hover:bg-[var(--card-hover)]">
              <FileText size={18} />
              Accéder aux cours complets
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info filière */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <GraduationCap size={28} className="text-[#352315]" />
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#352315' }}>Débouchés</h2>
        </div>
        <div className="border border-[var(--card-border)] rounded-lg p-6 bg-[var(--background)]">
          <p className="text-[#352315] mb-4">
            Après le bac TSE, les élèves peuvent poursuivre dans les filières suivantes :
          </p>
          <ul className="space-y-2 text-[#352315]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--card-border)]">•</span> Mathématiques, Physique, Informatique (MPI)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--card-border)]">•</span> Physique, Chimie, Sciences de la Vie (PCSV)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--card-border)]">•</span> Sciences Économiques et Gestion (SEG)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--card-border)]">•</span> Médecine, Pharmacie, Médecine dentaire
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--card-border)]">•</span> Sciences de l'Ingénieur (SI)
            </li>
          </ul>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#352315] hover:text-gray-900"
        >
          <ArrowRight className="rotate-180" size={20} />
          <span className="font-medium">Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
