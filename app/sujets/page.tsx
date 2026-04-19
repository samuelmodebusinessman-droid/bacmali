'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, GraduationCap, Filter } from 'lucide-react';
import { useState } from 'react';

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
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm mb-4 hover:underline"
          style={{ color: '#352315' }}
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#352315' }}>
          📚 Sujets BAC et Corrigés
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: '#5a4a3a' }}>
          Galerie complète des sujets du Baccalauréat avec leurs corrigés. 
          Prépare-toi efficacement pour l'examen en t'entraînant sur les vrais sujets des années précédentes.
        </p>
      </div>

      {/* Navigation par années */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          <span className="px-3 py-2 font-medium text-sm" style={{ color: '#352315' }}>
            <Filter size={16} className="inline mr-1" />
            Années:
          </span>
          {annees.map(annee => (
            <button 
              key={annee}
              onClick={() => setSelectedAnnee(annee)}
              className={`px-4 py-2 rounded-lg font-medium text-sm border hover:opacity-80 transition-opacity whitespace-nowrap ${
                selectedAnnee === annee 
                  ? 'bg-[#352315] text-white border-[#352315]' 
                  : ''
              }`}
              style={selectedAnnee === annee 
                ? {} 
                : { borderColor: 'var(--card-border)', color: '#352315', backgroundColor: 'var(--card-bg)' }
              }
            >
              {annee === 'all' ? 'Toutes' : annee}
            </button>
          ))}
        </div>
      </div>

      {/* Séries TSE et TSExp */}
      {series.map(serie => (
        <section key={serie} id={`serie-${serie}`} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={28} style={{ color: '#352315' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#352315' }}>
              Série {serie}
            </h2>
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#352315', color: 'white' }}
            >
              {getFilteredSujets(serie).length} sujet{getFilteredSujets(serie).length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getFilteredSujets(serie).length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                Aucun sujet pour l&apos;année {selectedAnnee}
              </div>
            ) : (
              getFilteredSujets(serie).map(sujet => (
                <div 
                  key={sujet.id}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}
                >
                  {/* Card Header */}
                  <div 
                    className="p-4 border-b"
                    style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="text-xs font-medium px-2 py-1 rounded"
                        style={{ backgroundColor: '#352315', color: 'white' }}
                      >
                        {sujet.annee}
                      </span>
                      <span 
                        className="text-xs px-2 py-1 rounded border"
                        style={{ borderColor: 'var(--card-border)', color: '#5a4a3a' }}
                      >
                        {sujet.session}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: '#352315' }}>
                      {sujet.titre}
                    </h3>
                    {sujet.description && (
                      <p className="text-sm mt-1" style={{ color: '#5a4a3a' }}>
                        {sujet.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="p-4 space-y-3">
                    {sujet.isCombined ? (
                      /* Fichier combiné : Sujet + Corrigé dans un seul PDF */
                      <a
                        href={sujet.pdfSujetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#352315' }}
                      >
                        <div className="flex items-center gap-2">
                          <FileText size={20} className="text-white" />
                          <span className="font-medium text-white">
                            Voir le sujet et corrigé
                          </span>
                        </div>
                        <span className="text-xs text-white/80">PDF →</span>
                      </a>
                    ) : (
                      /* Fichiers séparés : Sujet et Corrigé séparés */
                      <>
                        <a
                          href={sujet.pdfSujetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg border hover:opacity-80 transition-opacity"
                          style={{ 
                            borderColor: 'var(--card-border)', 
                            backgroundColor: 'var(--background)'
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <FileText size={20} style={{ color: '#352315' }} />
                            <span className="font-medium" style={{ color: '#352315' }}>
                              Voir le sujet
                            </span>
                          </div>
                          <span className="text-xs" style={{ color: '#5a4a3a' }}>PDF →</span>
                        </a>

                        {sujet.pdfCorrigeUrl ? (
                          <a
                            href={sujet.pdfCorrigeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#352315' }}
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle size={20} className="text-white" />
                              <span className="font-medium text-white">
                                Voir le corrigé
                              </span>
                            </div>
                            <span className="text-xs text-white/80">PDF →</span>
                          </a>
                        ) : (
                          <div 
                            className="flex items-center justify-between p-3 rounded-lg opacity-50"
                            style={{ backgroundColor: 'var(--card-border)' }}
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle size={20} style={{ color: '#5a4a3a' }} />
                              <span style={{ color: '#5a4a3a' }}>
                                Corrigé à venir
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      ))}

      {/* Conseils */}
      <div 
        className="mt-12 p-6 rounded-lg border"
        style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}
      >
        <h3 className="font-bold text-lg mb-4" style={{ color: '#352315' }}>
          💡 Conseils pour réviser avec les sujets BAC
        </h3>
        <ul className="space-y-2" style={{ color: '#5a4a3a' }}>
          <li className="flex items-start gap-2">
            <span className="text-[#352315] font-bold">1.</span>
            <span>Commence par faire le sujet sans regarder le corrigé, en condition d'examen (3 heures)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#352315] font-bold">2.</span>
            <span>Utilise le corrigé pour vérifier tes réponses et comprendre tes erreurs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#352315] font-bold">3.</span>
            <span>Identifie les thèmes récurrents et concentre-toi sur tes points faibles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#352315] font-bold">4.</span>
            <span>Ne mémorise pas les solutions, mais comprends la méthode</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
