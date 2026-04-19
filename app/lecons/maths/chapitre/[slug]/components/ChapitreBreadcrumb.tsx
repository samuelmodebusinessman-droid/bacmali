'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, GraduationCap, ChevronRight } from 'lucide-react';

interface ChapitreBreadcrumbProps {
  titre: string;
}

export function ChapitreBreadcrumb({ titre }: ChapitreBreadcrumbProps) {
  return (
    <motion.nav 
      className="mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 text-sm p-3 rounded-xl bg-white border border-[#352315]/10">
        <Link href="/" className="flex items-center gap-1 text-[#5a4a3a] hover:text-[#352315] transition-colors">
          <Home size={16} />
          <span className="hidden sm:inline">Accueil</span>
        </Link>
        <ChevronRight size={16} className="text-[#352315]/30" />
        <Link href="/lecons/maths" className="flex items-center gap-1 text-[#5a4a3a] hover:text-[#352315] transition-colors">
          <GraduationCap size={16} />
          <span className="hidden sm:inline">Leçons</span>
        </Link>
        <ChevronRight size={16} className="text-[#352315]/30" />
        <span className="font-medium text-[#352315] truncate max-w-[200px]">{titre}</span>
      </div>
    </motion.nav>
  );
}
