
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useOneTimeDiscountsTranslations from '@/hooks/useOneTimeDiscountsTranslations';
import BackButton from '@/components/BackButton';

const OneTimeDiscounts = () => {
  const { t } = useOneTimeDiscountsTranslations();
  
  return (
    <TutorialPage title={t('oneTimeDiscounts')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('oneTimeDiscountsDesc')}</p>
          
          <p className="mb-6 text-gray-700 dark:text-gray-300">{t('oneTimeDiscountsExplanation')}</p>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('oneTimeDiscountsPath')}</p>

          <div className="mt-6 mb-6">
            <img 
              src="https://i.ibb.co/GQW2TGr/image.png" 
              alt="One Time Discounts Interface" 
              className="rounded-md w-full max-w-lg mx-auto border border-gray-200 dark:border-gray-700"
            />
          </div>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">{t('oneTimeDiscountsSetupInstructions')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default OneTimeDiscounts;
