
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

// This file is maintained for reference but not currently used

const QuickStartOverview = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('quickStartOverview')}>
      <div className="space-y-6">
        <div className="bg-gray-900/70 p-6 rounded-lg formal-border">
          <p className="text-lg">{t('quickStartOverviewDescription')}</p>
          
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">{t('quickStartSteps')}:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>{t('quickStartStep1')}</li>
              <li>{t('quickStartStep2')}</li>
              <li>{t('quickStartStep3')}</li>
              <li>{t('quickStartStep4')}</li>
            </ol>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default QuickStartOverview;
