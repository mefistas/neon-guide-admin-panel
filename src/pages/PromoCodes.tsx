
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
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <p className="mb-4">{t('promoCodesDesc').split('(см раздел КЛИЕНТЫ)')[0]} 
            (<Link to="/clients" className="text-neonBlue hover:underline">
              {t('clients')}
            </Link>).
          </p>
          
          <p className="mb-6">{t('promoCodesGeneration')}</p>
          
          <div className="mt-6 mb-6">
            <img 
              src="https://i.ibb.co/B7m8HdV/Screenshot-2025-05-19-at-6-55-21-PM.png" 
              alt="Promo Codes Generation Interface" 
              className="rounded-md w-full max-w-lg mx-auto border border-gray-600"
            />
          </div>
          
          <p className="mb-4">{t('promoCodesUsage')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default PromoCodes;
