
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const HelpBots = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('helpBots')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
      </div>
    </TutorialPage>
  );
};

export default HelpBots;
