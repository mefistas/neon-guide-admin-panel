
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';

const Addresses = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('addressesTitle')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <BackButton to="/cards-payments" className="mb-6" />
        
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('addressesTitle')}
          </h3>
          
          <p>{tNew('addressesIntro')}</p>
          
          <div className="p-4 bg-neonBlue/10 rounded-md mt-6 border border-neonBlue">
            <p className="font-semibold">{tNew('tip')}:</p>
            <p>{tNew('addressesIntro')}</p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Addresses;
