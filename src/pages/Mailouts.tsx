
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const Mailouts = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('mailouts')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <p>{tNew('mailoutsDesc')}</p>
        
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p>This is a placeholder for the Mailouts content.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Mailouts;
