
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const Promotions = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('promotions')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <p>{tNew('promotionsDesc')}</p>
        
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{tNew('tip')}:</p>
          <p>{tNew('promotionsTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Promotions;
