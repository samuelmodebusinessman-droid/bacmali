import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, GraduationCap, Filter } from 'lucide-react';

export const metadata = {
  title: 'Sujets BAC et Corrigés - BacMali',
  description: 'Galerie des sujets du Baccalauréat avec leurs corrigés pour TSE et TSExp',
};

type SerieType = 'TSE' | 'TSExp';

interface SujetBAC {
  id: string;
  annee: string;
  serie: SerieType;
  session: string; // 'normale' | 'rattrapage'
  titre: string;
  pdfSujetUrl: string;
  pdfCorrigeUrl?: string;
  description?: string;
}

const sujetsBAC: SujetBAC[] = [
  // TSE
  {
    id: 'tse-2024-normale',
    annee: '2024',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2024',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2024-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2024-session-normale-corrige.pdf',
    description: 'Sujet complet avec exercices sur les complexes, suites et intégrales',
  },
  {
    id: 'tse-2024-rattrapage',
    annee: '2024',
    serie: 'TSE',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSE 2024 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2024-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2024-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tse-2023-normale',
    annee: '2023',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2023',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2023-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2023-session-normale-corrige.pdf',
  },
  {
    id: 'tse-2023-rattrapage',
    annee: '2023',
    serie: 'TSE',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSE 2023 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2023-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2023-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tse-2022-normale',
    annee: '2022',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2022',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2022-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2022-session-normale-corrige.pdf',
  },
  {
    id: 'tse-2022-rattrapage',
    annee: '2022',
    serie: 'TSE',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSE 2022 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2022-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2022-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tse-2021-normale',
    annee: '2021',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2021',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2021-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2021-session-normale-corrige.pdf',
  },
  {
    id: 'tse-2020-normale',
    annee: '2020',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2020',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2020-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2020-session-normale-corrige.pdf',
  },
  {
    id: 'tse-2019-normale',
    annee: '2019',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2019',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2019-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2019-session-normale-corrige.pdf',
  },
  {
    id: 'tse-2018-normale',
    annee: '2018',
    serie: 'TSE',
    session: 'Session Normale',
    titre: 'Mathématiques TSE 2018',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/SUJETS-BAC/2018-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-STI-TSE/CORRIGES-BAC/2018-session-normale-corrige.pdf',
  },
  // TSExp
  {
    id: 'tsexp-2024-normale',
    annee: '2024',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2024',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2024-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2024-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2024-rattrapage',
    annee: '2024',
    serie: 'TSExp',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSExp 2024 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2024-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2024-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tsexp-2023-normale',
    annee: '2023',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2023',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2023-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2023-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2023-rattrapage',
    annee: '2023',
    serie: 'TSExp',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSExp 2023 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2023-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2023-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tsexp-2022-normale',
    annee: '2022',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2022',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2022-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2022-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2022-rattrapage',
    annee: '2022',
    serie: 'TSExp',
    session: 'Session de Rattrapage',
    titre: 'Mathématiques TSExp 2022 (Rattrapage)',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2022-session-rattrapage.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2022-session-rattrapage-corrige.pdf',
  },
  {
    id: 'tsexp-2021-normale',
    annee: '2021',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2021',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2021-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2021-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2020-normale',
    annee: '2020',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2020',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2020-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2020-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2019-normale',
    annee: '2019',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2019',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2019-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2019-session-normale-corrige.pdf',
  },
  {
    id: 'tsexp-2018-normale',
    annee: '2018',
    serie: 'TSExp',
    session: 'Session Normale',
    titre: 'Mathématiques TSExp 2018',
    pdfSujetUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/SUJETS-BAC/2018-session-normale.pdf',
    pdfCorrigeUrl: 'https://bkalan.ml/api/files/mathematiques/12-SCIENCES-EXPERIMENTALES-TSEXP/CORRIGES-BAC/2018-session-normale-corrige.pdf',
  },
];

export default function SujetsBACPage() {
  const annees = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
  const series: SerieType[] = ['TSE', 'TSExp'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <button className="px-4 py-2 rounded-lg font-medium text-sm bg-[#352315] text-white">
            Toutes
          </button>
          {annees.map(annee => (
            <a 
              key={annee}
              href={`#annee-${annee}`}
              className="px-4 py-2 rounded-lg font-medium text-sm border hover:opacity-80 transition-opacity"
              style={{ borderColor: 'var(--card-border)', color: '#352315', backgroundColor: 'var(--card-bg)' }}
            >
              {annee}
            </a>
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
              {sujetsBAC.filter(s => s.serie === serie).length} sujets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sujetsBAC
              .filter(sujet => sujet.serie === serie)
              .map(sujet => (
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
                    {/* Sujet */}
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

                    {/* Corrigé */}
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
                  </div>
                </div>
              ))}
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
