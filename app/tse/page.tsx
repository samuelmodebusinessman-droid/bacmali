import Link from 'next/link';
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
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1d83e2' }}>
          🇲🇱 TSE
        </h1>
        <p className="text-xl text-gray-600">Sciences Exactes</p>
      </div>

      {/* Catalog Section: Mathématiques */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Calculator size={28} style={{ color: '#1d83e2' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Mathématiques</h2>
          <span className="text-xs px-3 py-1 rounded-full ml-auto" style={{ backgroundColor: '#e8f3fc', color: '#1d83e2' }}>{mathsChapters.length} chapitres</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mathsChapters.map((chapter, index) => (
            <div
              key={index}
              className="bento-card p-6 cursor-pointer"
            >
              <h3 className="font-bold mb-2" style={{ color: '#1d83e2' }}>{chapter.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{chapter.desc}</p>
              <button className="text-xs font-bold py-2 px-4 rounded btn-static" style={{ color: '#1d83e2' }}>
                Voir le cours <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog Section: Physique */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Atom size={28} style={{ color: '#e97816' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Physique</h2>
          <span className="text-xs px-3 py-1 rounded-full ml-auto" style={{ backgroundColor: '#fdf2e8', color: '#e97816' }}>{physicsChapters.length} chapitres</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {physicsChapters.map((chapter, index) => (
            <div
              key={index}
              className="bento-card p-6 cursor-pointer"
            >
              <h3 className="font-bold mb-2" style={{ color: '#e97816' }}>{chapter.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{chapter.desc}</p>
              <button className="text-xs font-bold py-2 px-4 rounded btn-static" style={{ color: '#e97816' }}>
                Voir le cours <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog Section: Chimie */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical size={28} style={{ color: '#f73008' }} />
          <h2 className="text-2xl md:text-3xl font-bold">Chimie</h2>
          <span className="text-xs px-3 py-1 rounded-full ml-auto" style={{ backgroundColor: '#feeae6', color: '#f73008' }}>{chemistryChapters.length} chapitres</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chemistryChapters.map((chapter, index) => (
            <div
              key={index}
              className="bento-card p-6 cursor-pointer"
            >
              <h3 className="font-bold mb-2" style={{ color: '#f73008' }}>{chapter.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{chapter.desc}</p>
              <button className="text-xs font-bold py-2 px-4 rounded btn-static" style={{ color: '#f73008' }}>
                Voir le cours <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

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
