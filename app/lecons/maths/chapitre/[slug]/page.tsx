'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { 
  getChapitreBySlug, 
  getChapitreNext, 
  getChapitrePrev,
  type Serie 
} from '../data';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  ChevronDown, 
  ChevronRight,
  Video,
  CheckSquare,
  Lightbulb,
  Calculator
} from 'lucide-react';
import PDFExerciceViewer from './PDFExerciceViewer';
import AIChatButton from '@/components/AIChatButton';

export default function ChapitrePage() {
  const params = useParams();
  const slug = params.slug as string;
  const chapitre = getChapitreBySlug(slug);
  
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});
  const [showQuizResult, setShowQuizResult] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'cours' | 'exercices' | 'quiz'>('cours');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!chapitre) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#352315' }}>Chapitre non trouvé</h1>
        <Link href="/lecons/maths" className="text-[#352315] hover:underline">
          ← Retour aux leçons
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

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const checkQuizAnswer = (questionId: string, correctIndex: number) => {
    const isCorrect = quizAnswers[questionId] === correctIndex;
    setShowQuizResult(prev => ({ ...prev, [questionId]: true }));
    return isCorrect;
  };

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm" style={{ color: '#5a4a3a' }}>
        <Link href="/" className="hover:underline">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/lecons/maths" className="hover:underline">Leçons</Link>
        <span className="mx-2">/</span>
        <span style={{ color: '#352315' }} className="font-medium">{chapitre.titre}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {chapitre.serie.map(s => (
            <span 
              key={s}
              className="text-xs px-3 py-1 rounded-full border"
              style={{ 
                borderColor: 'var(--card-border)', 
                color: '#352315',
                backgroundColor: 'var(--background)'
              }}
            >
              {s.toUpperCase()}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#352315' }}>
          {chapitre.titre}
        </h1>
        <p className="text-lg mb-6" style={{ color: '#5a4a3a' }}>
          {chapitre.description}
        </p>

        {/* Objectifs */}
        <div className="border rounded-lg p-4 mb-6" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}>
          <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#352315' }}>
            <Lightbulb size={20} />
            Objectifs du chapitre
          </h3>
          <ul className="space-y-2">
            {chapitre.objectifs.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2" style={{ color: '#5a4a3a' }}>
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#352315' }} />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Vidéo */}
        {chapitre.videoUrl && (
          <div className="mb-6">
            <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#352315' }}>
              <Video size={20} />
              Vidéo du cours
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden border" style={{ borderColor: 'var(--card-border)' }}>
              <iframe
                src={chapitre.videoUrl}
                title={`Cours ${chapitre.titre}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 border-b" style={{ borderColor: 'var(--card-border)' }}>
        {[
          { id: 'cours', label: 'Cours', icon: BookOpen },
          { id: 'exercices', label: 'Exercices', icon: Calculator },
          { id: 'quiz', label: 'Quiz', icon: CheckSquare },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
              activeTab === tab.id 
                ? 'border-b-2' 
                : 'hover:opacity-80'
            }`}
            style={{ 
              color: activeTab === tab.id ? '#352315' : '#5a4a3a',
              borderColor: activeTab === tab.id ? '#352315' : 'transparent'
            }}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cours Tab */}
      {activeTab === 'cours' && (
        <div className="space-y-4">
          {chapitre.sections.map((section) => (
            <div 
              key={section.id}
              className="border rounded-lg overflow-hidden"
              style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="font-bold" style={{ color: '#352315' }}>{section.titre}</h3>
                {expandedSections.includes(section.id) ? 
                  <ChevronDown size={20} style={{ color: '#352315' }} /> : 
                  <ChevronRight size={20} style={{ color: '#352315' }} />
                }
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="px-4 pb-4">
                  <p className="mb-4" style={{ color: '#5a4a3a' }}>{section.contenu}</p>
                  
                  {section.formules && section.formules.length > 0 && (
                    <div className="border rounded-lg p-4 mt-4" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                      <h4 className="font-bold mb-3 text-sm" style={{ color: '#352315' }}>Formules clés</h4>
                      <ul className="space-y-2">
                        {section.formules.map((formule, idx) => (
                          <li key={idx} className="font-mono text-sm" style={{ color: '#352315' }}>
                            {formule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Exercices Tab */}
      {activeTab === 'exercices' && (
        <PDFExerciceViewer 
          pdfUrl={chapitre.pdfExerciceUrl}
          pdfUrlFallback={chapitre.pdfExerciceUrlFallback}
          titre={chapitre.titre}
        />
      )}

      {/* Quiz Tab */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {chapitre.quiz.map((question, idx) => (
            <div 
              key={question.id}
              className="border rounded-lg p-6"
              style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#352315', color: 'white' }}
                >
                  {idx + 1}
                </span>
                <h3 className="font-bold text-lg" style={{ color: '#352315' }}>{question.question}</h3>
              </div>
              
              <div className="space-y-2 ml-11">
                {question.options.map((option, optIdx) => {
                  const isSelected = quizAnswers[question.id] === optIdx;
                  const isCorrect = optIdx === question.correctAnswer;
                  const showResult = showQuizResult[question.id];
                  
                  return (
                    <button
                      key={optIdx}
                      onClick={() => !showResult && handleQuizAnswer(question.id, optIdx)}
                      disabled={showResult}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-colors ${
                        showResult 
                          ? isCorrect 
                            ? 'border-green-500 bg-green-50' 
                            : isSelected 
                              ? 'border-red-500 bg-red-50' 
                              : ''
                          : isSelected 
                            ? 'border-[#352315] bg-[#FFF1E6]' 
                            : ''
                      }`}
                      style={{ 
                        borderColor: showResult 
                          ? isCorrect ? '#22c55e' : isSelected ? '#ef4444' : 'var(--card-border)'
                          : isSelected ? '#352315' : 'var(--card-border)'
                      }}
                    >
                      {showResult ? (
                        isCorrect ? (
                          <CheckCircle size={20} className="text-green-500" />
                        ) : isSelected ? (
                          <XCircle size={20} className="text-red-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border" style={{ borderColor: 'var(--card-border)' }} />
                        )
                      ) : (
                        <div 
                          className={`w-5 h-5 rounded-full border ${isSelected ? 'border-4' : ''}`}
                          style={{ borderColor: isSelected ? '#352315' : 'var(--card-border)' }}
                        />
                      )}
                      <span style={{ color: '#352315' }}>{option}</span>
                    </button>
                  );
                })}
              </div>
              
              {!showQuizResult[question.id] && quizAnswers[question.id] !== undefined && (
                <button
                  onClick={() => checkQuizAnswer(question.id, question.correctAnswer)}
                  className="mt-4 ml-11 px-4 py-2 rounded-lg font-medium text-white"
                  style={{ backgroundColor: '#352315' }}
                >
                  Vérifier ma réponse
                </button>
              )}
              
              {showQuizResult[question.id] && (
                <div className="mt-4 ml-11 p-4 rounded-lg border" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
                  <p className="text-sm" style={{ color: '#5a4a3a' }}>{question.explication}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Navigation Chapitres */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t" style={{ borderColor: 'var(--card-border)' }}>
        {chapitrePrev ? (
          <Link
            href={`/lecons/maths/chapitre/${chapitrePrev.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:opacity-80 transition-opacity"
            style={{ borderColor: 'var(--card-border)', color: '#352315' }}
          >
            <ArrowLeft size={20} />
            <div className="text-left">
              <p className="text-xs" style={{ color: '#5a4a3a' }}>Précédent</p>
              <p className="font-medium">{chapitrePrev.titre}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        
        <Link
          href="/lecons/maths"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:opacity-80 transition-opacity"
          style={{ borderColor: 'var(--card-border)', color: '#352315' }}
        >
          <BookOpen size={20} />
          <span className="font-medium">Tous les chapitres</span>
        </Link>
        
        {chapitreNext ? (
          <Link
            href={`/lecons/maths/chapitre/${chapitreNext.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:opacity-80 transition-opacity text-right"
            style={{ borderColor: 'var(--card-border)', color: '#352315' }}
          >
            <div>
              <p className="text-xs" style={{ color: '#5a4a3a' }}>Suivant</p>
              <p className="font-medium">{chapitreNext.titre}</p>
            </div>
            <ArrowRight size={20} />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Bouton IA Tuteur */}
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
