'use client';

import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ViewPDFPage() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');
  const title = searchParams.get('title') || 'Document';

  if (!file) {
    return (
      <div className="py-12">
        <div className="bento-card p-12 text-center">
          <h1 className="text-2xl font-bold text-[#352315] mb-4">Fichier non trouvé</h1>
          <Link href="/lecons/maths" className="inline-flex items-center gap-2 text-[#352315] hover:text-[#352315]">
            <ArrowRight className="rotate-180" size={20} />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
        </div>
      </div>
    );
  }

  const pdfUrl = `/leçons/maths/${file}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFEDCE' }}>
      {/* Header */}
      <div className="bg-[#FFF8E7] border-b border-[#352315] sticky top-0 z-10">
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/lecons/maths" className="p-2 hover:bg-[#FFE4B5] rounded-lg">
                <X size={20} className="text-[#352315]" />
              </Link>
              <div>
                <h1 className="text-lg font-bold text-[#352315]">{title}</h1>
                <p className="text-sm text-[#352315]">Visualisation du document</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                download
                className="flex items-center gap-2 px-4 py-2 bg-[#FFF8E7] text-[#352315] border border-[#352315] rounded-lg hover:bg-[#FFE4B5] text-sm font-medium"
              >
                <Download size={16} />
                Télécharger
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#FFF8E7] text-[#352315] border border-[#352315] rounded-lg hover:bg-[#FFE4B5] text-sm font-medium"
              >
                <ExternalLink size={16} />
                Ouvrir dans un nouvel onglet
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="py-8 px-4">
        <div className="bento-card p-4" style={{ backgroundColor: 'white' }}>
          <div className="aspect-[3/4] md:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title={title}
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
