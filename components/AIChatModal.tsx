'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatModalProps {
  chapitreContext: {
    titre: string;
    objectifs?: string[];
    slug: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ chapitreContext, isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: `Bonjour ! Je suis Professeur Math, ton tuteur pour "${chapitreContext.titre}".\n\nPose-moi tes questions sur ce chapitre, je te guiderai sans te donner les réponses directement. C'est toi qui réfléchis ! 🧠` 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldownTime, setCooldownTime] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastRequestTime = useRef<number>(0);

  // Gestion du cooldown
  useEffect(() => {
    if (cooldownTime > 0) {
      const timer = setInterval(() => {
        setCooldownTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownTime]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading || cooldownTime > 0) return;

    // Rate limiting: minimum 3 secondes entre requêtes
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime.current;
    if (timeSinceLastRequest < 3000) {
      const waitTime = Math.ceil((3000 - timeSinceLastRequest) / 1000);
      setCooldownTime(waitTime);
      return;
    }

    setError(null);
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    lastRequestTime.current = Date.now();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          chapitreContext
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Gestion spéciale erreur 429 (rate limit)
        if (response.status === 429) {
          const retryAfter = data.retryAfter || 60;
          setCooldownTime(retryAfter);
          throw new Error(`Trop de requêtes. Attends ${retryAfter} secondes avant de réessayer.`);
        }
        throw new Error(data.error || 'Erreur de service');
      }
      
      if (data.choices?.[0]?.message) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.choices[0].message.content
        }]);
      } else {
        throw new Error('Réponse invalide du service');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚠️ ${errorMessage}`
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      <div 
        className="relative w-full sm:w-[450px] h-[85vh] sm:h-[600px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300"
        style={{ backgroundColor: 'var(--background)' }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#352315' }}
            >
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm" style={{ color: '#352315' }}>
                Professeur Math
              </h3>
              <p className="text-xs" style={{ color: '#5a4a3a' }}>
                Tuteur IA • {chapitreContext.titre}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X size={20} style={{ color: '#352315' }} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-gray-200' : ''
                }`}
                style={{ backgroundColor: msg.role === 'assistant' ? '#352315' : undefined }}
              >
                {msg.role === 'user' ? (
                  <User size={16} className="text-gray-600" />
                ) : (
                  <Bot size={16} className="text-white" />
                )}
              </div>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'rounded-br-md' 
                    : 'rounded-bl-md'
                }`}
                style={{ 
                  backgroundColor: msg.role === 'assistant' ? '#352315' : 'var(--card-bg)',
                  color: msg.role === 'assistant' ? 'white' : '#352315',
                  borderColor: 'var(--card-border)',
                  border: msg.role === 'user' ? '1px solid var(--card-border)' : 'none'
                }}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#352315' }}
              >
                <Bot size={16} className="text-white" />
              </div>
              <div 
                className="p-3 rounded-2xl rounded-bl-md"
                style={{ backgroundColor: '#352315' }}
              >
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div 
          className="p-4 border-t"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pose ta question sur ce chapitre..."
              className="flex-1 px-4 py-3 border rounded-full text-sm focus:outline-none focus:ring-2 transition-all"
              style={{ 
                borderColor: 'var(--card-border)', 
                color: '#352315',
                backgroundColor: 'var(--background)'
              }}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim() || cooldownTime > 0}
              className="p-3 rounded-full text-white disabled:opacity-50 transition-all hover:scale-105 active:scale-95 relative"
              style={{ backgroundColor: '#352315' }}
              aria-label="Envoyer"
            >
              {cooldownTime > 0 ? (
                <span className="text-xs font-bold">{cooldownTime}s</span>
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
          <p className="text-xs text-center mt-3" style={{ color: '#5a4a3a' }}>
            Gratuit via OpenRouter • Llama 3.3 70B • 20 req/min
            {cooldownTime > 0 && (
              <span className="block text-red-500 font-medium mt-1">
                ⏳ Attendez {cooldownTime}s avant de réessayer
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
