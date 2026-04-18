'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import AIChatModal from './AIChatModal';

interface AIChatButtonProps {
  chapitreContext: {
    titre: string;
    objectifs?: string[];
    slug: string;
  };
}

export default function AIChatButton({ chapitreContext }: AIChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all z-40 group"
        style={{ backgroundColor: '#352315' }}
        aria-label="Parler avec le tuteur IA"
      >
        <MessageCircle size={24} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ 
            backgroundColor: '#352315', 
            color: 'white'
          }}
        >
          Professeur Math IA
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-0"
            style={{
              borderWidth: '6px 0 6px 6px',
              borderStyle: 'solid',
              borderColor: 'transparent transparent transparent #352315'
            }}
          />
        </span>
      </button>

      <AIChatModal 
        chapitreContext={chapitreContext} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
