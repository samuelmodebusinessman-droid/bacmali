'use client';

import Link from 'next/link';
import { Calculator, ArrowRight, BookOpen, PlayCircle, ChevronRight, CheckCircle, Sparkles, GraduationCap, Target, Video, FileText, Brain } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { chapitres, type Serie } from './chapitre/data';

type FilterSerie = Serie | 'all';

export default function LeconsMathsPage() {
  const [selectedSerie, setSelectedSerie] = useState<FilterSerie>('all');

  const filteredChapitres = chapitres.filter(chapitre => {
    if (selectedSerie === 'all') return true;
    return chapitre.serie.includes(selectedSerie);
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-8 md:py-12">
      {/* Hero Section */}
      <motion.section 
        className="relative mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#352315]/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-[#352315]" />
            <span className="text-sm font-medium text-[#352315]">12 Chapitres Complets • Vidéos & Exercices</span>
          </motion.div>

          {/* Title */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#352315] flex items-center justify-center">
              <Calculator size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#352315]">
              Leçons de Mathématiques
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-[#5a4a3a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Cours complets avec <span className="font-bold text-[#352315]">vidéos</span>, <span className="font-bold text-[#352315]">exercices PDF</span> et <span className="font-bold text-[#352315]">tuteur IA</span>
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Video, value: '12+', label: 'Vidéos' },
              { icon: FileText, value: '12', label: 'Fiches PDF' },
              { icon: Brain, value: '1', label: 'Tuteur IA' },
              { icon: GraduationCap, value: '2', label: 'Séries' },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-[#352315]/10">
                <stat.icon size={18} className="text-[#352315]" />
                <span className="font-bold text-[#352315]">{stat.value}</span>
                <span className="text-sm text-[#5a4a3a]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Banner */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-[#352315] to-[#4a3d2a] rounded-2xl p-6 md:p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Video size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Vidéos Explicatives</h3>
                <p className="text-white/80 text-sm">Comprends chaque concept avec des vidéos claires et détaillées</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Exercices PDF</h3>
                <p className="text-white/80 text-sm">Pratique avec des fiches d&apos;exercices téléchargeables et corrigés</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Brain size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Tuteur IA</h3>
                <p className="text-white/80 text-sm">Pose tes questions au Professeur Math, ton assistant personnel</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-white border-2 border-[#352315]/10">
          <div className="flex items-center gap-2">
            <Target size={20} className="text-[#352315]" />
            <span className="font-semibold text-[#352315]">Filtrer par série :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {([
              { key: 'all', label: 'Toutes les séries', icon: GraduationCap },
              { key: 'tse', label: 'TSE', icon: Calculator },
              { key: 'tsexp', label: 'TSExp', icon: BookOpen }
            ] as const).map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectedSerie(option.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSerie === option.key 
                    ? 'bg-[#352315] text-white shadow-lg' 
                    : 'bg-[#352315]/10 text-[#352315] hover:bg-[#352315]/20'
                }`}
              >
                <option.icon size={16} />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Chapitres Grid */}
      <motion.section 
        className="mb-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapitres.map((chapitre, index) => (
            <motion.div key={chapitre.id} variants={fadeInUp}>
              <Link
                href={`/lecons/maths/chapitre/${chapitre.slug}`}
                className="group block h-full"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1">
                  {/* Icon & Series */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      chapitre.videoUrl ? 'bg-[#352315]' : 'bg-[#352315]/10'
                    }`}>
                      {chapitre.videoUrl ? (
                        <PlayCircle size={28} className="text-white" />
                      ) : (
                        <BookOpen size={28} className="text-[#352315]" />
                      )}
                    </div>
                    <div className="flex gap-1">
                      {chapitre.serie.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded-full bg-[#352315]/10 text-[#352315] font-medium"
                        >
                          {s.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-lg mb-2 text-[#352315] group-hover:text-[#4a3d2a] transition-colors">
                    {chapitre.titre}
                  </h3>
                  <p className="text-sm text-[#5a4a3a] mb-4 line-clamp-2">
                    {chapitre.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex items-center gap-3 text-xs text-[#5a4a3a] mb-4">
                    <span className="flex items-center gap-1 bg-[#352315]/5 px-2 py-1 rounded">
                      <BookOpen size={12} />
                      {chapitre.sections.length} sections
                    </span>
                    <span className="flex items-center gap-1 bg-[#352315]/5 px-2 py-1 rounded">
                      <CheckCircle size={12} />
                      {chapitre.exercices.length} exercices
                    </span>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                    <span>Commencer le chapitre</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredChapitres.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-[#352315] mb-2">Aucun chapitre trouvé</h3>
            <p className="text-[#5a4a3a]">Sélectionne une autre série pour voir les chapitres disponibles</p>
          </div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#FFF8E7] rounded-2xl p-8 md:p-12 border-2 border-[#352315]/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#352315]">
            Prêt à maîtriser les Mathématiques ?
          </h2>
          <p className="text-lg text-[#5a4a3a] mb-6 max-w-xl mx-auto">
            Choisis un chapitre et commence ton apprentissage avec vidéos, exercices et quiz interactifs
          </p>
          <Link 
            href={filteredChapitres.length > 0 ? `/lecons/maths/chapitre/${filteredChapitres[0].slug}` : '/lecons/maths/chapitre/nombres-complexes'}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#352315] text-white rounded-full font-bold text-lg hover:bg-[#4a3d2a] transition-all hover:scale-105 shadow-lg"
          >
            <PlayCircle size={20} />
            Commencer le premier chapitre
            <ChevronRight size={20} />
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#352315] font-medium hover:opacity-80 transition-opacity"
          >
            <ArrowRight className="rotate-180" size={20} />
            Retour à l&apos;accueil
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
