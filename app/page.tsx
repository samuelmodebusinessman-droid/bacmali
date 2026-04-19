'use client';

import Link from 'next/link';
import { BookOpen, ClipboardList, GraduationCap, Target, Sparkles, ChevronRight, Star, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
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
      {/* Hero Section - Grande et Impactante */}
      <motion.section 
        className="relative mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient décoratif */}
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
            <Sparkles size={16} className="text-[#352315]" />
            <span className="text-sm font-medium text-[#352315]">100% Gratuit • Programme Officiel Malien</span>
          </motion.div>

          {/* Titre Principal */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            style={{ color: '#352315' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">🇲🇱 MaliMath</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: '#5a4a3a' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            La plateforme qui te propulse vers le <span className="font-bold text-[#352315]">Bac</span> avec les meilleures ressources en Mathématiques
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link 
              href="/sujets"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#352315] text-white rounded-full font-semibold text-lg hover:bg-[#4a3d2a] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ClipboardList size={20} />
              Commencer les révisions
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/lecons/maths"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#352315] text-[#352315] rounded-full font-semibold text-lg hover:bg-[#352315] hover:text-white transition-all"
            >
              <BookOpen size={20} />
              Voir les leçons
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: ClipboardList, value: '15+', label: 'Sujets BAC' },
            { icon: BookOpen, value: '12', label: 'Chapitres' },
            { icon: Target, value: '2', label: 'Séries' },
            { icon: Star, value: '100%', label: 'Gratuit' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#352315]/10"
              variants={fadeInUp}
            >
              <stat.icon size={24} className="mx-auto mb-2 text-[#352315]" />
              <div className="text-2xl md:text-3xl font-bold text-[#352315]">{stat.value}</div>
              <div className="text-sm text-[#5a4a3a]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#352315' }}>
            Tout ce qu'il te faut pour réussir
          </h2>
          <p className="text-lg text-[#5a4a3a] max-w-2xl mx-auto">
            Des ressources complètes et gratuites pour les Terminales TSE et TSExp
          </p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Sujets BAC */}
          <motion.div variants={fadeInUp}>
            <Link href="/sujets" className="group block h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ClipboardList size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#352315]">Sujets BAC</h3>
                <p className="text-[#5a4a3a] text-sm mb-4 leading-relaxed">
                  Tous les sujets et corrigés officiels de 2016 à 2023 pour t'entraîner dans les conditions du Bac.
                </p>
                <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                  <span>Explorer</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Leçons Interactives */}
          <motion.div variants={fadeInUp}>
            <Link href="/lecons/maths" className="group block h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#352315]">Leçons Interactives</h3>
                <p className="text-[#5a4a3a] text-sm mb-4 leading-relaxed">
                  Cours complets avec vidéos, exercices PDF et quiz pour maîtriser chaque chapitre.
                </p>
                <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                  <span>Apprendre</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TSE */}
          <motion.div variants={fadeInUp}>
            <Link href="/tse" className="group block h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  🔬
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#352315]">Série TSE</h3>
                <p className="text-[#5a4a3a] text-sm mb-4 leading-relaxed">
                  Programme complet des Sciences Exactes : 8 chapitres avec vidéos et exercices.
                </p>
                <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                  <span>Découvrir</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TSExp */}
          <motion.div variants={fadeInUp}>
            <Link href="/tsexp" className="group block h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-[#FFF8E7] border-2 border-[#352315]/10 hover:border-[#352315] transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#352315] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  🧪
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#352315]">Série TSExp</h3>
                <p className="text-[#5a4a3a] text-sm mb-4 leading-relaxed">
                  Programme adapté aux Sciences Expérimentales : 7 chapitres essentiels.
                </p>
                <div className="flex items-center gap-2 text-[#352315] font-semibold text-sm">
                  <span>Découvrir</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#352315] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi MaliMath ?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Award, text: 'Basé sur le programme officiel du Bac malien' },
                  { icon: Users, text: 'Créé par et pour les étudiants maliens' },
                  { icon: GraduationCap, text: 'Ressources vérifiées et de qualité' },
                  { icon: Sparkles, text: 'Toujours gratuit et accessible à tous' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} />
                    </div>
                    <p className="text-white/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-xl font-semibold mb-2">Objectif BAC</p>
                <p className="text-white/80">Ensemble, on y arrive !</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#352315' }}>
          Prêt à cartonner au BAC ?
        </h2>
        <p className="text-lg text-[#5a4a3a] mb-8 max-w-xl mx-auto">
          Rejoins les milliers d'étudiants qui révisent intelligemment avec MaliMath
        </p>
        <Link 
          href="/sujets"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#352315] text-white rounded-full font-bold text-xl hover:bg-[#4a3d2a] transition-all hover:scale-105 shadow-xl"
        >
          🚀 Commencer maintenant
        </Link>
      </motion.section>
    </div>
  );
}
