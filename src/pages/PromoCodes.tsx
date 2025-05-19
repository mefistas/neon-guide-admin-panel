
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromotionsTranslations from '@/hooks/usePromotionsTranslations';
import BackButton from '@/components/BackButton';

const PromoCodes = () => {
  const { t } = usePromotionsTranslations();
  
  return (
    <TutorialPage title={t('promoCodes')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <p>{t('promoCodesDesc')}</p>
        
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{t('tip')}:</p>
          <p>{t('promoCodesTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default PromoCodes;
