'use client';

import Link from 'next/link';
import { Calculator, FileText, ArrowRight, BookOpen, GraduationCap, ClipboardList, Sparkles, ChevronRight, Target, Atom } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TSEPage() {
  const mathsChapters = [
    { title: 'Nombres Complexes', slug: 'nombres-complexes', desc: 'Forme algébrique, trigonométrique, exponentielle, équations dans ℂ' },
    { title: 'Arithmétique', slug: 'arithmetique', desc: 'Division euclidienne, congruences, nombres premiers, PGCD/PPCM, Bézout, Gauss' },
    { title: 'Fonctions Numériques', slug: 'fonctions-numeriques', desc: 'Limites, continuité, dérivation, asymptotes, convexité' },
    { title: 'Fonctions Spéciales', slug: 'fonctions-speciales', desc: 'Logarithme népérien, exponentielle, fonctions puissances' },
    { title: 'Suites Numériques', slug: 'suites-numeriques', desc: 'Monotonie, convergence, suites arithmétiques et géométriques' },
    { title: 'Calcul Intégral', slug: 'calcul-integral', desc: 'Primitives, intégrales, aires, volumes, intégration par parties' },
    { title: 'Équations Différentielles', slug: 'equations-differentielles', desc: 'Équations du 1er ordre, équations linéaires du 2nd ordre' },
    { title: 'Probabilités', slug: 'probabilites', desc: 'Dénombrement, probabilités conditionnelles, loi binomiale, espérance' },
    { title: 'Géométrie Affine', slug: 'geometrie-affine', desc: 'Barycentres, applications affines, lignes de niveau' },
    { title: 'Coniques', slug: 'coniques', desc: 'Parabole, ellipse, hyperbole : équations, foyers, directrices' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-8 md:py-12">
      {/* Hero Section - TSE */}
      <motion.section 
        className="relative mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#352315]/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Atom size={16} className="text-[#352315]" />
            <span className="text-sm font-medium text-[#352315]">Sciences Exactes • 10 Chapitres</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="text-7xl mb-4">🔬</div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#352315] mb-4">
              TSE
            </h1>
            <p className="text-2xl md:text-3xl text-[#5a4a3a]">Terminale Sciences Exactes</p>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-[#5a4a3a] max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            La filière des <span className="font-bold text-[#352315]">passionnés des mathématiques</span>. 
            Prépare-toi aux études scientifiques supérieures et aux concours des grandes écoles.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: '10', label: 'Chapitres' },
              { value: '🔬', label: 'TSE Only' },
              { value: '🎯', label: 'Grandes Écoles' },
            ].map((stat, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-white/60 border border-[#352315]/10">
                <span className="font-bold text-[#352315]">{stat.value}</span>
                <span className="text-sm text-[#5a4a3a] ml-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Ressources Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#352315] mb-3">Ressources TSE</h2>
          <p className="text-lg text-[#5a4a3a]">Tout ce qu'il te faut pour réussir</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Sujets BAC */}
          <Link href="/sujets" className="group">
            <motion.div 
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardList size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#352315]">Sujets BAC</h3>
              <p className="text-[#5a4a3a] text-sm mb-4">Sujets et corrigés des années précédentes</p>
              <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                <span>Explorer</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* Leçons */}
          <Link href="/lecons/maths" className="group">
            <motion.div 
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#352315]">Leçons</h3>
              <p className="text-[#5a4a3a] text-sm mb-4">10 chapitres complets avec vidéos</p>
              <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                <span>Apprendre</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Programme de Mathématiques */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#352315] flex items-center justify-center">
              <Calculator size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#352315]">Programme de Mathématiques</h2>
          </div>
          <p className="text-lg text-[#5a4a3a]">Les 10 chapitres du programme TSE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mathsChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/lecons/maths/chapitre/${chapter.slug}`}
                className="group block h-full"
              >
                <div className="h-full p-5 rounded-2xl bg-white border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#352315]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#352315] transition-colors">
                      <span className="text-sm font-bold text-[#352315] group-hover:text-white">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#352315] mb-1 group-hover:text-[#4a3d2a] transition-colors">{chapter.title}</h3>
                      <p className="text-sm text-[#5a4a3a] line-clamp-2">{chapter.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/lecons/maths" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#352315] text-white rounded-full font-semibold hover:bg-[#4a3d2a] transition-all hover:scale-105 shadow-lg"
          >
            <BookOpen size={20} />
            Voir tous les cours
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.section>

      {/* Débouchés */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-[#352315] to-[#4a3d2a] rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Débouchés après le Bac TSE</h2>
          </div>
          
          <p className="text-white/90 mb-6 text-lg">
            La filière TSE ouvre les portes des filières scientifiques les plus prestigieuses :
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Mathématiques, Physique, Informatique (MPI)',
              'Physique, Chimie, Sciences de la Vie (PCSV)',
              'Sciences Économiques et Gestion (SEG)',
              'Médecine, Pharmacie, Médecine dentaire',
              'Sciences de l\'Ingénieur (SI)',
              'Écoles d\'ingénieurs (Mines, Ponts, Centrale...)',
            ].map((filiere, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="text-white/90">{filiere}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#352315] font-semibold hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="rotate-180" size={20} />
          Retour à l'accueil
        </Link>
      </motion.section>
    </div>
  );
}
