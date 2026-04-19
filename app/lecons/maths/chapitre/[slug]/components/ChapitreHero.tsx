'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Lightbulb, CheckCircle, PlayCircle } from 'lucide-react';
import type { Chapitre } from '../types';

interface ChapitreHeroProps {
  chapitre: Chapitre;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function ChapitreHero({ chapitre }: ChapitreHeroProps) {
  return (
    <motion.section 
      className="mb-10"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      {/* Badge Series */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {chapitre.serie.map(s => (
          <span 
            key={s}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#352315] text-white"
          >
            <GraduationCap size={12} />
            {s.toUpperCase()}
          </span>
        ))}
        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[#352315]/10 text-[#352315]">
          <Sparkles size={12} />
          Chapitre {chapitre.id}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#352315]">
        {chapitre.titre}
      </h1>
      <p className="text-lg text-[#5a4a3a] mb-8 max-w-3xl">
        {chapitre.description}
      </p>

      {/* Objectifs Card */}
      <motion.div 
        className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF8E7] to-white border-2 border-[#352315]/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#352315] flex items-center justify-center">
            <Lightbulb size={20} className="text-white" />
          </div>
          <h3 className="font-bold text-lg text-[#352315]">Objectifs du chapitre</h3>
        </div>
        <ul className="grid md:grid-cols-2 gap-3">
          {chapitre.objectifs.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#352315]/10">
              <div className="w-6 h-6 rounded-full bg-[#352315]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle size={14} className="text-[#352315]" />
              </div>
              <span className="text-[#5a4a3a] text-sm">{obj}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Video Section */}
      {chapitre.videoUrl && (
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#352315] flex items-center justify-center">
              <PlayCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#352315]">Vidéo du cours</h3>
              <p className="text-sm text-[#5a4a3a]">Regarde la vidéo pour comprendre le chapitre</p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#352315]/10 shadow-xl">
            <iframe
              src={chapitre.videoUrl}
              title={`Cours ${chapitre.titre}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
