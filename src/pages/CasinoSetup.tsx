
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const CasinoSetup = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('casinoSetup')}>
      <div className="space-y-4">
        <p>{t('casinoSetupIntro')}</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>{t('casinoStep1')}</li>
          <li>{t('casinoStep2')}</li>
          <li>{t('casinoStep3')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoSetting1')}</li>
              <li>{t('casinoSetting2')}</li>
              <li>{t('casinoSetting3')}</li>
              <li>{t('casinoSetting4')}</li>
            </ul>
          </li>
          <li>{t('casinoStep4')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoProvider1')}</li>
              <li>{t('casinoProvider2')}</li>
              <li>{t('casinoProvider3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep5')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoAccount1')}</li>
              <li>{t('casinoAccount2')}</li>
              <li>{t('casinoAccount3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep6')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoPayment1')}</li>
              <li>{t('casinoPayment2')}</li>
              <li>{t('casinoPayment3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep7')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoGambling1')}</li>
              <li>{t('casinoGambling2')}</li>
              <li>{t('casinoGambling3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep8')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoBonus1')}</li>
              <li>{t('casinoBonus2')}</li>
              <li>{t('casinoBonus3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep9')}
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('casinoCompliance1')}</li>
              <li>{t('casinoCompliance2')}</li>
              <li>{t('casinoCompliance3')}</li>
            </ul>
          </li>
          <li>{t('casinoStep10')}</li>
          <li>{t('casinoStep11')}</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">{t('casinoRegulatoryNote')}:</p>
          <p>{t('casinoRegulatoryNoteText')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CasinoSetup;
