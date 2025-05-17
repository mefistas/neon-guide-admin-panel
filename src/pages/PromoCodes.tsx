
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const PromoCodes = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('promoCodes')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <p>{tNew('promoCodesDesc')}</p>
        
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{tNew('tip')}:</p>
          <p>{tNew('promoCodesTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default PromoCodes;
