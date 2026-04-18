'use client';

import { useState, useEffect } from 'react';
import { FileText, Download, AlertCircle, Loader2 } from 'lucide-react';

interface PDFExerciceViewerProps {
  pdfUrl?: string;
  pdfUrlFallback?: string;
  titre: string;
}

export default function PDFExerciceViewer({ pdfUrl, pdfUrlFallback, titre }: PDFExerciceViewerProps) {
  const [currentUrl, setCurrentUrl] = useState<string | null>(pdfUrl || null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pdfUrl) {
      setCurrentUrl(pdfUrl);
      setError(false);
      setLoading(true);
    }
  }, [pdfUrl]);

  const handleError = () => {
    if (currentUrl === pdfUrl && pdfUrlFallback) {
      // Essayer l'URL de fallback
      setCurrentUrl(pdfUrlFallback);
    } else {
      // Les deux URLs ont échoué
      setError(true);
      setLoading(false);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (!pdfUrl && !pdfUrlFallback) {
    return (
      <div className="border rounded-lg p-8 text-center" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}>
        <FileText size={48} className="mx-auto mb-4" style={{ color: '#352315' }} />
        <h3 className="font-bold text-lg mb-2" style={{ color: '#352315' }}>Exercices non disponibles</h3>
        <p style={{ color: '#5a4a3a' }}>
          Les exercices pour ce chapitre seront bientôt disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header avec bouton téléchargement */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border rounded-lg" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}>
        <div className="flex items-center gap-3">
          <FileText size={24} style={{ color: '#352315' }} />
          <div>
            <h3 className="font-bold" style={{ color: '#352315' }}>Fiche d'exercices</h3>
            <p className="text-sm" style={{ color: '#5a4a3a' }}>{titre}</p>
          </div>
        </div>
        <a
          href={currentUrl || pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#352315' }}
        >
          <Download size={18} />
          Télécharger le PDF
        </a>
      </div>

      {/* Viewer PDF */}
      {error ? (
        <div className="border rounded-lg p-8 text-center" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
          <AlertCircle size={48} className="mx-auto mb-4" style={{ color: '#dc2626' }} />
          <h3 className="font-bold text-lg mb-2" style={{ color: '#352315' }}>Impossible de charger le PDF</h3>
          <p className="mb-4" style={{ color: '#5a4a3a' }}>
            Le fichier d'exercices ne peut pas être affiché. Vous pouvez essayer de le télécharger directement.
          </p>
          <a
            href={pdfUrlFallback || pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#352315' }}
          >
            <Download size={18} />
            Télécharger
          </a>
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden" style={{ borderColor: 'var(--card-border)' }}>
          {loading && (
            <div className="flex items-center justify-center p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
              <Loader2 size={32} className="animate-spin mr-3" style={{ color: '#352315' }} />
              <span style={{ color: '#352315' }}>Chargement des exercices...</span>
            </div>
          )}
          {currentUrl && (
            <iframe
              src={`${currentUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title={`Exercices - ${titre}`}
              className="w-full"
              style={{ 
                border: 'none', 
                height: loading ? '0' : '800px',
                minHeight: '600px'
              }}
              onError={handleError}
              onLoad={handleLoad}
            />
          )}
        </div>
      )}

      {/* Info source */}
      <div className="text-center text-sm p-4" style={{ color: '#5a4a3a' }}>
        <p>Exercices fournis par BKalan - Plateforme éducative malienne</p>
        <p className="mt-1">
          Source: {currentUrl?.includes('bkalan.ml') ? 'bkalan.ml' : 'Source externe'}
        </p>
      </div>
    </div>
  );
}
