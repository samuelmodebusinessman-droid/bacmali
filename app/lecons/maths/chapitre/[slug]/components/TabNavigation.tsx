'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, CheckSquare } from 'lucide-react';
import type { TabType } from '../types';

interface TabNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const tabs = [
  { id: 'cours' as TabType, label: 'Cours', icon: BookOpen, desc: 'Leçon complète' },
  { id: 'exercices' as TabType, label: 'Exercices', icon: FileText, desc: 'Fiche PDF' },
  { id: 'quiz' as TabType, label: 'Quiz', icon: CheckSquare, desc: 'Testez-vous' },
];

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="p-2 rounded-2xl bg-white border-2 border-[#352315]/10">
        <div className="flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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
  );
}
