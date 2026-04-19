'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

import { 
  getChapitreBySlug, 
  getChapitreNext, 
  getChapitrePrev,
} from '../data';
import PDFExerciceViewer from './PDFExerciceViewer';
import AIChatButton from '@/components/AIChatButton';

import { useQuiz } from './hooks/useQuiz';
import type { TabType } from './types';

import {
  ChapitreBreadcrumb,
  ChapitreHero,
  TabNavigation,
  CoursTab,
  QuizTab,
  ChapitreNavigation,
} from './components';

export default function ChapitrePage() {
  const params = useParams();
  const slug = params.slug as string;
  const chapitre = getChapitreBySlug(slug);
  
  const { 
    quizAnswers, 
    showQuizResult, 
    handleQuizAnswer, 
    checkQuizAnswer 
  } = useQuiz();
  
  const [activeTab, setActiveTab] = useState<TabType>('cours');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!chapitre) {
    return (
      <div className="py-12 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#352315' }}>Chapitre non trouvé</h1>
        <Link 
          href="/lecons/maths" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#352315] text-white rounded-full font-medium hover:bg-[#4a3d2a] transition-all"
        >
          <ArrowLeft size={20} />
          Retour aux leçons
        </Link>
      </div>
    );
  }

  const chapitreNext = getChapitreNext(slug);
  const chapitrePrev = getChapitrePrev(slug);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-6 md:py-8">
      <ChapitreBreadcrumb titre={chapitre.titre} />
      <ChapitreHero chapitre={chapitre} />
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'cours' && (
        <CoursTab 
          sections={chapitre.sections}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
      )}

      {activeTab === 'exercices' && (
        <PDFExerciceViewer 
          pdfUrl={chapitre.pdfExerciceUrl}
          pdfUrlFallback={chapitre.pdfExerciceUrlFallback}
          titre={chapitre.titre}
        />
      )}

      {activeTab === 'quiz' && (
        <QuizTab 
          quiz={chapitre.quiz}
          quizAnswers={quizAnswers}
          showQuizResult={showQuizResult}
          onAnswer={handleQuizAnswer}
          onCheck={checkQuizAnswer}
        />
      )}

      <ChapitreNavigation chapitrePrev={chapitrePrev} chapitreNext={chapitreNext} />

      <AIChatButton 
        chapitreContext={{
          titre: chapitre.titre,
          objectifs: chapitre.objectifs,
          slug: chapitre.slug
        }} 
      />
    </div>
  );
}
