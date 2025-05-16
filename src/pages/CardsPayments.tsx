
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const CardsPayments = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('cardsPayments')}>
      <div className="space-y-4">
        <p>{t('cardsPaymentsIntro')}</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>{t('cardsStep1')}</li>
          <li>{t('cardsStep2')}</li>
          <li>{t('cardsStep3')}</li>
          <li>{t('cardsStep4')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsProcessor1')}</li>
              <li>{t('cardsProcessor2')}</li>
              <li>{t('cardsProcessor3')}</li>
              <li>{t('cardsProcessor4')}</li>
              <li>{t('cardsProcessor5')}</li>
            </ul>
          </li>
          <li>{t('cardsStep5')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsCredential1')}</li>
              <li>{t('cardsCredential2')}</li>
              <li>{t('cardsCredential3')}</li>
              <li>{t('cardsCredential4')}</li>
            </ul>
          </li>
          <li>{t('cardsStep6')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsSettings1')}</li>
              <li>{t('cardsSettings2')}</li>
              <li>{t('cardsSettings3')}</li>
              <li>{t('cardsSettings4')}</li>
            </ul>
          </li>
          <li>{t('cardsStep7')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsFees1')}</li>
              <li>{t('cardsFees2')}</li>
              <li>{t('cardsFees3')}</li>
            </ul>
          </li>
          <li>{t('cardsStep8')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsSecurity1')}</li>
              <li>{t('cardsSecurity2')}</li>
              <li>{t('cardsSecurity3')}</li>
            </ul>
          </li>
          <li>{t('cardsStep9')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('cardsNotification1')}</li>
              <li>{t('cardsNotification2')}</li>
              <li>{t('cardsNotification3')}</li>
            </ul>
          </li>
          <li>{t('cardsStep10')}</li>
          <li>{t('cardsStep11')}</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{t('cardsSecurityNote')}:</p>
          <p>{t('cardsSecurityNoteText')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CardsPayments;
