
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { Wallet } from 'lucide-react';

const Finance = () => {
  const { tNew } = useTranslations();

  return (
    <TutorialPage title={tNew('financeTitle')}>
      <div className="space-y-8 max-w-4xl mx-auto">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <Wallet size={32} className="text-neonBlue" />
            <h2 className="text-2xl font-semibold">{tNew('financeTitle')}</h2>
          </div>
          
          <p className="text-lg mb-6">
            {tNew('financeShortDesc')}
          </p>
        </section>

        {/* Content will be added later */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('financeTitle')}
          </h3>
          
          <div className="space-y-4">
            <p>Content coming soon...</p>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default Finance;
