
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const BasicSetup = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('basicSetup')}>
      <div className="space-y-6">
        <div className="bg-gray-900/70 p-6 rounded-lg formal-border">
          <p className="text-lg">{t('basicSetupDescription')}</p>
          
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">{t('basicSetupSteps')}:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>{t('basicSetupStep1')}</li>
              <li>{t('basicSetupStep2')}</li>
              <li>{t('basicSetupStep3')}</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-gray-900/70 p-4 rounded-lg formal-border">
          <h3 className="font-semibold mb-2">{t('importantNote')}:</h3>
          <p>{t('basicSetupNote')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BasicSetup;
