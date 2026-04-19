'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, GraduationCap, Filter, Sparkles, BookOpen, ChevronRight, Lightbulb, Download } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

type SerieType = 'TSE' | 'TSExp';

interface SujetBAC {
  id: string;
  annee: string;
  serie: SerieType;
  session: string;
  titre: string;
  pdfSujetUrl: string;
  pdfCorrigeUrl?: string;
  description?: string;
  isCombined?: boolean; // true si sujet et corrigé sont dans le même PDF
}

const sujetsBAC: SujetBAC[] = [
  // TSE
  {
    id: 'tse-annale-2000-2022',
    annee: '2000-2022',
    serie: 'TSE',
    session: 'Annale Complète',
    titre: 'Annale TSE STI (2000-2022)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE/annale-tse-sti-maths-2000-2022.pdf',
    description: 'Recueil complet des sujets du BAC TSE de 2000 à 2022',
  },
  {
    id: 'tse-2023',
    annee: '2023',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2023',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/BAC/CORRIGE-BAC-2023-TSE-STI-SANS-BAREMES.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus (sans barèmes)',
  },
  {
    id: 'tse-2022',
    annee: '2022',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2022',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/BAC/TSE-STI-BAC-2022.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tse-2021',
    annee: '2021',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2021',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/BAC/CORRIGE-TSE-STI-BAC-2021.pdf',
    description: 'Corrigé du BAC 2021',
  },
  {
    id: 'tse-2020',
    annee: '2020',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2020',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/BAC/BAC-TSE-STI-MATH-2020-correction.pdf',
    description: 'Sujet et corrigé',
  },
  {
    id: 'tse-2019',
    annee: '2019',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2019',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE/BAC-TSE-TSI-MATH-2019-correction.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tse-2018',
    annee: '2018',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2018',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE/BAC-TSE-TSI-MATH-2018-correction.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tse-2017',
    annee: '2017',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2017',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE/BAC-TSE-TSI-MATH-2017-correction.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tse-2016',
    annee: '2016',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2016',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE/BAC-TSE-TSI-MATH-2016-correction.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  // TSExp
  {
    id: 'tsexp-recueil',
    annee: 'TSE/TSExp',
    serie: 'TSExp',
    session: 'Recueil Complet',
    titre: 'Recueil MaliMath TSE/TSExp',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSE-TSEXP/Recueil-d\'exercices-de-mathematiques-TSE-TSEXP-MaliMath.pdf',
    description: 'Recueil d\'exercices de mathématiques pour TSE et TSExp',
  },
  {
    id: 'tsexp-2023',
    annee: '2023',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2023',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/BAC/BAC-TSEXP-2023.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tsexp-2022',
    annee: '2022',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2022',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/BAC/TSexp-BAC-2022.pdf',
    isCombined: true,
    description: 'Sujet et corrigé inclus',
  },
  {
    id: 'tsexp-2020',
    annee: '2020',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2020',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/BAC/BAC-TSExp-MATH-2020-correction.pdf',
    description: 'Sujet et corrigé',
  },
  {
    id: 'tsexp-2018',
    annee: '2018',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2018',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSEXP/BAC-TSEXP-MATH-2018-correction.pdf',
    description: 'Sujet et corrigé',
  },
  {
    id: 'tsexp-2017',
    annee: '2017',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2017',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSEXP/BAC-TSEXP-MATH-2017-correction.pdf',
    description: 'Sujet et corrigé',
  },
  {
    id: 'tsexp-2016',
    annee: '2016',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2016',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-TSEXP/BAC-TSEXP-MATH-2016-correction.pdf',
    description: 'Sujet et corrigé',
  },
];

export default function SujetsBACPage() {
  const [selectedAnnee, setSelectedAnnee] = useState<string>('all');
  const annees = ['all', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'];
  const series: SerieType[] = ['TSE', 'TSExp'];

  const getFilteredSujets = (serie: SerieType) => {
    return sujetsBAC.filter(sujet => {
      const matchesSerie = sujet.serie === serie;
      const matchesAnnee = selectedAnnee === 'all' || sujet.annee === selectedAnnee;
      return matchesSerie && matchesAnnee;
    });
  };

  return (
    <div className="py-8 md:py-12">
      {/* Modern Hero Section */}
      <motion.section 
        className="relative mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#352315]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Back Link */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-[#5a4a3a] hover:text-[#352315] transition-colors"
            >
              <ArrowLeft size={16} />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#352315]/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <BookOpen size={16} className="text-[#352315]" />
            <span className="text-sm font-medium text-[#352315]">Années 2016-2023</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-[#352315]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sujets BAC et Corrigés
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-[#5a4a3a] max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Galerie complète des sujets du Baccalauréat avec leurs corrigés. 
            Prépare-toi <span className="font-bold text-[#352315]">efficacement</span> pour l'examen en t'entraînant sur les vrais sujets des années précédentes.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: sujetsBAC.length.toString(), label: 'Sujets' },
              { value: '2', label: 'Séries' },
              { value: '8+', label: 'Années' },
            ].map((stat, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-white/60 border border-[#352315]/10">
                <span className="font-bold text-[#352315]">{stat.value}</span>
                <span className="text-sm text-[#5a4a3a] ml-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modern Filter Section */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 rounded-2xl bg-white border-2 border-[#352315]/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 text-[#352315] font-medium">
              <Filter size={18} />
              <span>Filtrer par année :</span>
            </div>
            {annees.map(annee => (
              <button 
                key={annee}
                onClick={() => setSelectedAnnee(annee)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  selectedAnnee === annee 
                    ? 'bg-[#352315] text-white shadow-lg' 
                    : 'bg-[#352315]/5 text-[#352315] hover:bg-[#352315]/10'
                }`}
              >
                {annee === 'all' ? 'Toutes' : annee}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Séries TSE et TSExp */}
      {series.map((serie, serieIndex) => (
        <motion.section 
          key={serie} 
          id={`serie-${serie}`} 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: serieIndex * 0.1 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#352315] flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#352315]">
                Série {serie}
              </h2>
              <p className="text-[#5a4a3a]">
                {serie === 'TSE' ? 'Sciences Exactes' : 'Sciences Expérimentales'}
              </p>
            </div>
            <span className="px-4 py-2 rounded-full bg-[#352315]/10 text-[#352315] font-semibold">
              {getFilteredSujets(serie).length} sujet{getFilteredSujets(serie).length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getFilteredSujets(serie).length === 0 ? (
              <motion.div 
                className="col-span-full text-center py-16 rounded-2xl bg-[#352315]/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FileText size={48} className="mx-auto mb-4 text-[#352315]/30" />
                <p className="text-lg text-[#5a4a3a]">
                  Aucun sujet pour l&apos;année {selectedAnnee}
                </p>
                <button 
                  onClick={() => setSelectedAnnee('all')}
                  className="mt-4 px-6 py-2 rounded-full bg-[#352315] text-white font-medium hover:bg-[#4a3d2a] transition-colors"
                >
                  Voir tous les sujets
                </button>
              </motion.div>
            ) : (
              getFilteredSujets(serie).map((sujet, index) => (
                <motion.div 
                  key={sujet.id}
                  className="group rounded-2xl bg-white border-2 border-[#352315]/10 overflow-hidden hover:border-[#352315] hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Card Header */}
                  <div className="p-5 border-b-2 border-[#352315]/10 bg-gradient-to-br from-[#FFF8E7] to-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#352315] text-white text-xs font-bold">
                        {sujet.annee}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#352315]/10 text-[#352315] text-xs font-medium">
                        {sujet.session}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-[#352315] group-hover:text-[#4a3d2a] transition-colors">
                      {sujet.titre}
                    </h3>
                    {sujet.description && (
                      <p className="text-sm mt-2 text-[#5a4a3a] line-clamp-2">
                        {sujet.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="p-5 space-y-3">
                    {sujet.isCombined ? (
                      /* Fichier combiné : Sujet + Corrigé dans un seul PDF */
                      <a
                        href={sujet.pdfSujetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-[#352315] text-white hover:bg-[#4a3d2a] transition-all group/btn"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                            <FileText size={20} />
                          </div>
                          <div>
                            <span className="font-semibold block">Sujet + Corrigé</span>
                            <span className="text-xs text-white/70">PDF complet</span>
                          </div>
                        </div>
                        <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                      </a>
                    ) : (
                      /* Fichiers séparés : Sujet et Corrigé séparés */
                      <>
                        <a
                          href={sujet.pdfSujetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl border-2 border-[#352315]/10 hover:border-[#352315] hover:bg-[#352315]/5 transition-all group/btn"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#352315]/10 flex items-center justify-center group-hover/btn:bg-[#352315] transition-colors">
                              <FileText size={20} className="text-[#352315] group-hover/btn:text-white transition-colors" />
                            </div>
                            <div>
                              <span className="font-semibold text-[#352315] block">Voir le sujet</span>
                              <span className="text-xs text-[#5a4a3a]">PDF</span>
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-[#352315] group-hover/btn:translate-x-1 transition-transform" />
                        </a>

                        {sujet.pdfCorrigeUrl ? (
                          <a
                            href={sujet.pdfCorrigeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl bg-[#352315] text-white hover:bg-[#4a3d2a] transition-all group/btn"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                                <CheckCircle size={20} />
                              </div>
                              <div>
                                <span className="font-semibold block">Voir le corrigé</span>
                                <span className="text-xs text-white/70">PDF</span>
                              </div>
                            </div>
                            <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                          </a>
                        ) : (
                          <div className="flex items-center justify-between p-4 rounded-xl bg-[#352315]/10 opacity-60">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-[#352315]/20 flex items-center justify-center">
                                <CheckCircle size={20} className="text-[#352315]" />
                              </div>
                              <span className="font-medium text-[#352315]">Corrigé à venir</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.section>
      ))}

      {/* Conseils Modern Section */}
      <motion.section 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-[#352315] to-[#4a3d2a] rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Conseils pour réviser avec les sujets BAC</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '1', text: "Commence par faire le sujet sans regarder le corrigé, en condition d'examen (3 heures)" },
              { num: '2', text: "Utilise le corrigé pour vérifier tes réponses et comprendre tes erreurs" },
              { num: '3', text: "Identifie les thèmes récurrents et concentre-toi sur tes points faibles" },
              { num: '4', text: "Ne mémorise pas les solutions, mais comprends la méthode" },
            ].map((conseil, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 font-bold">
                  {conseil.num}
                </div>
                <p className="text-white/90">{conseil.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
