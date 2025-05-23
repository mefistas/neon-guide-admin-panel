
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import usePromoCodesTranslations from '@/hooks/usePromoCodesTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';

const PromoCodes = () => {
  const { t } = usePromoCodesTranslations();
  
  return (
    <TutorialPage title={t('promoCodes')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="light-card-bg rounded-lg p-6 border light-border">
          <p className="mb-4 light-text-secondary">{t('promoCodesDesc')}</p>
          <p className="mb-4 light-text-secondary">
            {t('clientsPath')} <Link to="/clients" className="link-text">{t('clients')}</Link>
          </p>
          
          <p className="mb-6 light-text-secondary">{t('promoCodesGeneration')}</p>

          <div className="mt-6 mb-6">
            <img 
              src="https://i.ibb.co/B7m8HdV/Screenshot-2025-05-19-at-6-55-21-PM.png" 
              alt="Promo Codes Interface" 
              className="rounded-md w-full max-w-lg mx-auto border border-gray-200 dark:border-gray-700"
            />
          </div>
          
          <p className="mb-4 light-text-secondary">{t('promoCodesUsage')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default PromoCodes;
