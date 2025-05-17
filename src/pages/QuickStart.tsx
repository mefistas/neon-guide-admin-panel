
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";

const QuickStart = () => {
  const { t } = useLanguage();
  
  // Define the main quick start points (sections 1-11)
  const quickStartPoints = Array.from({ length: 11 }, (_, i) => ({
    point: `quickStartPoint${i + 1}`,
    notes: Array.from({ length: 8 }, (_, j) => `quickStartPoint${i + 1}Note${j + 1}`)
  }));

  return (
    <TutorialPage title={t('quickStart')}>
      <div className="space-y-8">
        <p className="text-lg mb-4">{t('quickStartDescription')}</p>

        <div className="space-y-6">
          {quickStartPoints.map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3 text-white">
                  {index + 1}. {t(item.point)}
                </h2>
                
                <div className="pl-6 space-y-2">
                  {item.notes.map((note, noteIndex) => {
                    // Only render notes that have content
                    const noteText = t(note);
                    if (!noteText) return null;
                    
                    return (
                      <div key={noteIndex} className="flex items-start p-4 bg-gray-700/50 rounded">
                        <span className="bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">
                          {noteIndex + 1}
                        </span>
                        <p className="text-gray-100">{noteText}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </TutorialPage>
  );
};

export default QuickStart;
