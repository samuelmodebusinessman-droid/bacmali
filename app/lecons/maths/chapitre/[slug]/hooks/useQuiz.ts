'use client';

import { useState, useCallback } from 'react';

interface UseQuizReturn {
  quizAnswers: Record<string, number | null>;
  showQuizResult: Record<string, boolean>;
  handleQuizAnswer: (questionId: string, answerIndex: number) => void;
  checkQuizAnswer: (questionId: string, correctIndex: number) => boolean;
}

export function useQuiz(): UseQuizReturn {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({});
  const [showQuizResult, setShowQuizResult] = useState<Record<string, boolean>>({});

  const handleQuizAnswer = useCallback((questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  }, []);

  const checkQuizAnswer = useCallback((questionId: string, correctIndex: number) => {
    const isCorrect = quizAnswers[questionId] === correctIndex;
    setShowQuizResult(prev => ({ ...prev, [questionId]: true }));
    return isCorrect;
  }, [quizAnswers]);

  return {
    quizAnswers,
    showQuizResult,
    handleQuizAnswer,
    checkQuizAnswer,
  };
}
