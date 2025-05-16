
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const QuickStart = () => {
  const { t } = useLanguage();
  
  // Define the 13 main points, each with 8 notes
  const quickStartPoints = Array.from({ length: 13 }, (_, i) => ({
    point: `quickStartPoint${i + 1}`,
    notes: Array.from({ length: 8 }, (_, j) => `quickStartPoint${i + 1}Note${j + 1}`)
  }));

  return (
    <TutorialPage title={t('quickStart')}>
      <div className="space-y-8">
        <div className="bg-gray-900/70 p-6 rounded-lg formal-border">
          <p className="text-lg mb-4">{t('quickStartDescription')}</p>

          {quickStartPoints.map((item, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-semibold mb-3 text-white">
                {index + 1}. {t(item.point)}
              </h2>
              
              <div className="pl-6 space-y-2">
                {item.notes.map((note, noteIndex) => (
                  <div key={noteIndex} className="bg-gray-800/50 p-4 rounded formal-border">
                    <div className="flex items-start">
                      <span className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0">
                        {noteIndex + 1}
                      </span>
                      <p className="text-gray-100">{t(note)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TutorialPage>
  );
};

export default QuickStart;
