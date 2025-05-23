
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromoCodesTranslations from '@/hooks/usePromoCodesTranslations';
import BackButton from '@/components/BackButton';

const PromoCodes = () => {
  const { t } = usePromoCodesTranslations();
  
  return (
    <TutorialPage title={t('promoCodes')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('promoCodesDesc')}</p>
          
          <p className="mb-6 text-gray-700 dark:text-gray-300">{t('promoCodesExplanation')}</p>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('promoCodesPath')}</p>

          <div className="mt-6 mb-6">
            <img 
              src="https://i.ibb.co/M5zKSHM2/image.png" 
              alt="Promo Codes Interface" 
              className="rounded-md w-full max-w-lg mx-auto border border-gray-200 dark:border-gray-700"
            />
          </div>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('promoCodesSetupInstructions')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default PromoCodes;
