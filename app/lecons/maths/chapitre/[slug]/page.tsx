'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Calculator,
  Home,
  GraduationCap,
  FileText,
  Brain,
  Sparkles,
  PlayCircle
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

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const checkQuizAnswer = (questionId: string, correctIndex: number) => {
    const isCorrect = quizAnswers[questionId] === correctIndex;
    setShowQuizResult(prev => ({ ...prev, [questionId]: true }));
    return isCorrect;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="py-6 md:py-8">
      {/* Modern Breadcrumb */}
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
          <span className="font-medium text-[#352315] truncate max-w-[200px]">{chapitre.titre}</span>
        </div>
      </motion.nav>

      {/* Hero Header */}
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

      {/* Modern Navigation Tabs */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="p-2 rounded-2xl bg-white border-2 border-[#352315]/10">
          <div className="flex gap-2">
            {[
              { id: 'cours', label: 'Cours', icon: BookOpen, desc: 'Leçon complète' },
              { id: 'exercices', label: 'Exercices', icon: FileText, desc: 'Fiche PDF' },
              { id: 'quiz', label: 'Quiz', icon: CheckSquare, desc: 'Testez-vous' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 flex flex-col items-center gap-1 p-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#352315] text-white shadow-lg' 
                    : 'hover:bg-[#352315]/5 text-[#5a4a3a]'
                }`}
              >
                <tab.icon size={22} />
                <span className="text-sm">{tab.label}</span>
                <span className={`text-xs ${activeTab === tab.id ? 'text-white/70' : 'text-[#5a4a3a]/70'}`}>
                  {tab.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Cours Tab - Modern Accordion */}
      {activeTab === 'cours' && (
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
              <p className="text-sm text-[#5a4a3a]">{chapitre.sections.length} sections à découvrir</p>
            </div>
          </div>

          {chapitre.sections.map((section, index) => (
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
      )}

      {/* Exercices Tab */}
      {activeTab === 'exercices' && (
        <PDFExerciceViewer 
          pdfUrl={chapitre.pdfExerciceUrl}
          pdfUrlFallback={chapitre.pdfExerciceUrlFallback}
          titre={chapitre.titre}
        />
      )}

      {/* Quiz Tab - Modern Design */}
      {activeTab === 'quiz' && (
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#352315] flex items-center justify-center">
              <CheckSquare size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#352315]">Quiz du chapitre</h2>
              <p className="text-sm text-[#5a4a3a]">{chapitre.quiz.length} questions pour tester tes connaissances</p>
            </div>
          </div>

          {chapitre.quiz.map((question, idx) => (
            <motion.div 
              key={question.id}
              className="rounded-2xl border-2 border-[#352315]/10 overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#352315] flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#352315] pt-2">{question.question}</h3>
                </div>
                
                <div className="space-y-3 pl-14">
                  {question.options.map((option, optIdx) => {
                    const isSelected = quizAnswers[question.id] === optIdx;
                    const isCorrect = optIdx === question.correctAnswer;
                    const showResult = showQuizResult[question.id];
                    
                    return (
                      <button
                        key={optIdx}
                        onClick={() => !showResult && handleQuizAnswer(question.id, optIdx)}
                        disabled={showResult}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                          showResult 
                            ? isCorrect 
                              ? 'border-green-500 bg-green-50' 
                              : isSelected 
                                ? 'border-red-500 bg-red-50' 
                                : 'border-[#352315]/10 hover:border-[#352315]/30'
                            : isSelected 
                              ? 'border-[#352315] bg-[#FFF8E7]' 
                              : 'border-[#352315]/10 hover:border-[#352315]/30 hover:bg-[#352315]/5'
                        }`}
                      >
                        {showResult ? (
                          isCorrect ? (
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                              <CheckCircle size={16} className="text-white" />
                            </div>
                          ) : isSelected ? (
                            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                              <XCircle size={16} className="text-white" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-[#352315]/20 flex-shrink-0" />
                          )
                        ) : (
                          <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 transition-all ${
                            isSelected 
                              ? 'border-[#352315] bg-[#352315]' 
                              : 'border-[#352315]/30'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white m-auto mt-1.5" />}
                          </div>
                        )}
                        <span className={`font-medium ${
                          showResult 
                            ? isCorrect 
                              ? 'text-green-700' 
                              : isSelected 
                                ? 'text-red-700' 
                                : 'text-[#352315]'
                            : 'text-[#352315]'
                        }`}>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
                
                {!showQuizResult[question.id] && quizAnswers[question.id] !== undefined && (
                  <button
                    onClick={() => checkQuizAnswer(question.id, question.correctAnswer)}
                    className="mt-5 ml-14 px-6 py-3 rounded-xl font-semibold text-white bg-[#352315] hover:bg-[#4a3d2a] transition-all shadow-lg hover:shadow-xl"
                  >
                    Vérifier ma réponse
                  </button>
                )}
                
                {showQuizResult[question.id] && (
                  <motion.div 
                    className="mt-5 ml-14 p-5 rounded-xl bg-gradient-to-br from-[#FFF8E7] to-white border border-[#352315]/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h4 className="font-bold text-[#352315] mb-2 flex items-center gap-2">
                      <Lightbulb size={18} />
                      Explication
                    </h4>
                    <p className="text-sm text-[#5a4a3a]">{question.explication}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modern Navigation Chapitres */}
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
