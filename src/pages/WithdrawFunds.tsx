
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const WithdrawFunds = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('withdrawFunds')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <p className="text-lg text-gray-300 mb-6">{tNew('withdrawFundsIntro')}</p>
      </div>
    </TutorialPage>
  );
};

export default WithdrawFunds;
