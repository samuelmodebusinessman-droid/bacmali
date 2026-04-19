'use client';

import { motion } from 'framer-motion';
import { CheckSquare, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface QuizTabProps {
  quiz: QuizQuestion[];
  quizAnswers: Record<string, number | null>;
  showQuizResult: Record<string, boolean>;
  onAnswer: (questionId: string, answerIndex: number) => void;
  onCheck: (questionId: string, correctIndex: number) => void;
}

export function QuizTab({ 
  quiz, 
  quizAnswers, 
  showQuizResult, 
  onAnswer, 
  onCheck 
}: QuizTabProps) {
  return (
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
          <p className="text-sm text-[#5a4a3a]">{quiz.length} questions pour tester tes connaissances</p>
        </div>
      </div>

      {quiz.map((question, idx) => (
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
                    onClick={() => !showResult && onAnswer(question.id, optIdx)}
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
                onClick={() => onCheck(question.id, question.correctAnswer)}
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
  );
}
