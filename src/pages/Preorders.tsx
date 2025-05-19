import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const Preorders = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('preordersTitle')}>
      <div className="max-w-4xl mx-auto space-y-8">
        <BackButton to="/cards-payments" className="mb-6" />
        
        {/* Empty template */}
      </div>
    </TutorialPage>
  );
};

export default Preorders;
