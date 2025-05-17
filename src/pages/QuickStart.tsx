
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const QuickStart = () => {
  const { t } = useLanguage();
  const [expandedPoints, setExpandedPoints] = React.useState<number[]>([1]);
  
  const toggleExpand = (index: number) => {
    setExpandedPoints(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Define the main quick start points (sections 1-11)
  const quickStartPoints = Array.from({ length: 11 }, (_, i) => ({
    point: `quickStartPoint${i + 1}`,
    notes: Array.from({ length: 8 }, (_, j) => `quickStartPoint${i + 1}Note${j + 1}`)
  }));

  return (
    <TutorialPage title={t('quickStart')}>
      <div className="space-y-6">
        <p className="text-lg mb-6">{t('quickStartDescription')}</p>

        <div className="space-y-4">
          {quickStartPoints.map((item, index) => {
            // Check if this point has any content
            const hasContent = item.notes.some(note => t(note));
            if (!hasContent) return null;
            
            const isExpanded = expandedPoints.includes(index + 1);
            
            return (
              <div 
                key={index} 
                className={`rounded-lg bg-opacity-20 transition-all duration-300 ${
                  isExpanded ? 'bg-[#1e293b]' : 'bg-[#111827] hover:bg-[#1e293b]/70'
                }`}
              >
                <div 
                  className="flex items-center justify-between p-5 cursor-pointer"
                  onClick={() => toggleExpand(index + 1)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3c6e71]/40 mr-3 text-white">
                      {index + 1}
                    </div>
                    <h2 className="text-xl font-semibold text-white">{t(item.point)}</h2>
                  </div>
                  <div>
                    {isExpanded ? 
                      <ChevronUp size={20} className="text-[#5eaaa8]" /> : 
                      <ChevronDown size={20} className="text-[#5eaaa8]" />
                    }
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pt-0 pb-5">
                    <div className="pl-11 space-y-3">
                      {item.notes.map((note, noteIndex) => {
                        // Only render notes that have content
                        const noteText = t(note);
                        if (!noteText) return null;
                        
                        return (
                          <div key={noteIndex} className="p-3 bg-[#252d3f] bg-opacity-30 rounded">
                            <p className="text-gray-200">{noteText}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </TutorialPage>
  );
};

export default QuickStart;
