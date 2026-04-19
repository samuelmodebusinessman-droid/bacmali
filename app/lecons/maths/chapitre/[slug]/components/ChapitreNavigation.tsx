'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import type { Chapitre } from '../types';

interface ChapitreNavigationProps {
  chapitrePrev: Chapitre | null;
  chapitreNext: Chapitre | null;
}

export function ChapitreNavigation({ chapitrePrev, chapitreNext }: ChapitreNavigationProps) {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF8E7] to-white border-2 border-[#352315]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {chapitrePrev ? (
            <Link
              href={`/lecons/maths/chapitre/${chapitrePrev.slug}`}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white border-2 border-[#352315]/10 hover:border-[#352315] transition-all w-full md:w-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-[#352315]/10 flex items-center justify-center group-hover:bg-[#352315] transition-colors">
                <ArrowLeft size={20} className="text-[#352315] group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#5a4a3a]">Chapitre précédent</p>
                <p className="font-semibold text-[#352315]">{chapitrePrev.titre}</p>
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" />
          )}
          
          <Link
            href="/lecons/maths"
            className="flex items-center gap-2 px-6 py-4 rounded-xl bg-[#352315] text-white hover:bg-[#4a3d2a] transition-all font-semibold"
          >
            <BookOpen size={20} />
            <span>Tous les chapitres</span>
          </Link>
          
          {chapitreNext ? (
            <Link
              href={`/lecons/maths/chapitre/${chapitreNext.slug}`}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-[#352315] text-white hover:bg-[#4a3d2a] transition-all w-full md:w-auto"
            >
              <div className="text-right">
                <p className="text-xs text-white/70">Chapitre suivant</p>
                <p className="font-semibold">{chapitreNext.titre}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
