
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const BtcCashout = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('btcCashout')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
      </div>
    </TutorialPage>
  );
};

export default BtcCashout;
