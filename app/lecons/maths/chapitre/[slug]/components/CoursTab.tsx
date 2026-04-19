'use client';

import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, Calculator } from 'lucide-react';
import type { Section } from '../types';

interface CoursTabProps {
  sections: Section[];
  expandedSections: string[];
  toggleSection: (id: string) => void;
}

export function CoursTab({ sections, expandedSections, toggleSection }: CoursTabProps) {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#352315] flex items-center justify-center">
          <BookOpen size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#352315]">Contenu du cours</h2>
          <p className="text-sm text-[#5a4a3a]">{sections.length} sections à découvrir</p>
        </div>
      </div>

      {sections.map((section, index) => (
        <motion.div 
          key={section.id}
          className="rounded-2xl border-2 border-[#352315]/10 overflow-hidden bg-white hover:border-[#352315]/30 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between p-5 text-left group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
                expandedSections.includes(section.id) 
                  ? 'bg-[#352315] text-white' 
                  : 'bg-[#352315]/10 text-[#352315]'
              }`}>
                {index + 1}
              </div>
              <h3 className="font-bold text-lg text-[#352315] group-hover:text-[#4a3d2a] transition-colors">
                {section.titre}
              </h3>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              expandedSections.includes(section.id) 
                ? 'bg-[#352315] text-white rotate-180' 
                : 'bg-[#352315]/10 text-[#352315]'
            }`}>
              <ChevronDown size={18} />
            </div>
          </button>
          
          {expandedSections.includes(section.id) && (
            <motion.div 
              className="px-5 pb-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="pl-14">
                <p className="mb-6 text-[#5a4a3a] leading-relaxed">{section.contenu}</p>
                
                {section.formules && section.formules.length > 0 && (
                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#FFF8E7] to-white border border-[#352315]/10">
                    <h4 className="font-bold mb-4 flex items-center gap-2 text-[#352315]">
                      <Calculator size={18} />
                      Formules clés à retenir
                    </h4>
                    <ul className="space-y-3">
                      {section.formules.map((formule, idx) => (
                        <li 
                          key={idx} 
                          className="font-mono text-sm p-3 rounded-lg bg-white border border-[#352315]/10 text-[#352315]"
                        >
                          {formule}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
