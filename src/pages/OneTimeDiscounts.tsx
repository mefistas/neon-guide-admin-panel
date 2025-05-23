
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useOneTimeDiscountsTranslations from '@/hooks/useOneTimeDiscountsTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';

const OneTimeDiscounts = () => {
  const { t } = useOneTimeDiscountsTranslations();
  
  return (
    <TutorialPage title={t('oneTimeDiscounts')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('referralSystem')}
          </h2>
          
          <p className="mb-4 light-text-secondary">{t('referralSystemDesc')}</p>
          <p className="mb-4 light-text-secondary">В данном разделе есть два пункта для редактирования</p>
          
          <h3 className="text-lg font-medium mb-3 light-text">{t('referralProgramTitle')}</h3>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary mb-4">{t('referralProgramDesc')}</p>
              <p className="light-text-secondary">
                {t('referralProgramBenefits').replace('КАСТОМИЗАЦИЯ БОТА', '')}
                <Link to="/custom-bot" className="link-text">{t('customBot')}</Link>
              </p>
            </div>
            <img 
              src="https://i.ibb.co/7tcPvs2v/Screenshot-2025-05-20-at-12-12-22-PM.png" 
              alt="Referral Program Interface" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('mandatorySubscription')}
          </h2>
          
          <p className="mb-4 light-text-secondary">{t('mandatorySubRequirements')}</p>
          
          <div className="space-y-4 light-text-secondary">
            <p>{t('step1')}</p>
            <p>{t('step2')}</p>
            
            <div className="grid md:grid-cols-2 gap-6 items-center my-6">
              <p>{t('step3')}</p>
              <img 
                src="https://i.ibb.co/jkH2bBs5/IMAGE-2025-05-20-12-34-52.jpg" 
                alt="Bot setup" 
                className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-center my-6">
              <p>{t('step4')}</p>
              <img 
                src="https://i.ibb.co/Xvq4vHN/Screenshot-2025-05-20-at-12-32-39-PM.png" 
                alt="Bot ID setup" 
                className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
            
            <p>{t('step5')}</p>
            <p>{t('step6')}</p>
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('oneTimeDiscountsTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="light-text-secondary mb-4">
                {t('oneTimeDiscountsDesc').replace('КЛИЕНТЫ', '')}
                <Link to="/clients" className="link-text">{t('clients')}</Link>,
                {t('oneTimeDiscountsDesc').split('КЛИЕНТЫ')[1]}
              </p>
              <p className="light-text-secondary">{t('oneTimeDiscountsAlternative')}</p>
            </div>
            <img 
              src="https://i.ibb.co/Ps0BXGXZ/132433t-Q.png" 
              alt="One-time discounts interface" 
              className="rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </section>

        <section className="light-card-bg rounded-lg p-6 border light-border">
          <h2 className="text-xl font-medium mb-4 border-l-4 border-blue-600 dark:border-neonBlue pl-3 light-text">
            {t('firstEntryBonus')}
          </h2>
          
          <p className="light-text-secondary">{t('firstEntryBonusDesc')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default OneTimeDiscounts;
