
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';

const BalanceTopUps = () => {
  const { t } = useLanguage();
  
  return (
    <TutorialPage title={t('balanceTopUps')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <p>{t('balanceTopUpsDescription')}</p>
        
        <div className="space-y-4">
          <div className="p-4 bg-neonBlue/10 rounded-md border border-neonBlue">
            <p className="font-semibold">{t('note')}:</p>
            <p>This is a placeholder for the Balance Top-Ups content.</p>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default BalanceTopUps;
