
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import BackButton from '@/components/BackButton';
import useTranslations from '@/hooks/useTranslations';
import { Search, Users } from "lucide-react";

const Clients = () => {
  const { t } = useLanguage();
  const { tLocal } = useTranslations();

  return (
    <TutorialPage title={t('clients')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-300">{tLocal('clientsDescription')}</p>
           <p className="text-lg text-gray-300">{tLocal('clientsDescription1')}</p>
          
          {/* Search section */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Search size={20} className="text-neonBlue" />
              <h3 className="text-lg font-medium">{t('search')}</h3>
            </div>
            <p className="text-gray-300">{tLocal('clientsSearch')}</p>
          </div>
        </div>

        {/* Client management section */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} className="text-neonBlue" />
            <h2 className="text-xl font-semibold">{tLocal('clientsCardTitle')}</h2>
          </div>
          
          <p className="text-gray-300 mb-6">{tLocal('clientsCardDescription')}</p>
          
          {/* Client management image */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.ibb.co/nMrGQNWf/Screenshot-2025-05-17-at-11-19-23-PM.png" 
              alt="Client management interface"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default Clients;
