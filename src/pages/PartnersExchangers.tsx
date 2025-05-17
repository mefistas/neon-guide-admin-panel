
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { AlertTriangle } from 'lucide-react';

const PartnersExchangers = () => {
  const { tNew } = useTranslations();
  
  return (
    <TutorialPage title={tNew('withdrawFunds')}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <p className="text-gray-300 italic mb-6">
          {tNew('withdrawFundsIntro')}
        </p>
        
        {/* Crypto Withdrawal Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-neonBlue pl-3">
            1. {tNew('cryptoWithdrawal')}
          </h2>
          
          <div className="mb-5">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Crypto withdrawal interface" 
              className="w-full h-64 object-cover rounded-lg mb-4 bg-gray-800"
            />
          </div>
          
          <ul className="space-y-3 text-gray-200">
            <li>- {tNew('goToStores')}</li>
            <li>- {tNew('cryptoWithdrawalOptions')}</li>
            <li>- {tNew('ignoreUsdt')}</li>
            <li>- {tNew('selectLtcBtc')}</li>
            <li>- {tNew('enterWalletDetails')}</li>
            <li>- {tNew('courierSection')}</li>
          </ul>
          
          <div className="mt-5 bg-gray-800/70 p-4 rounded-md border-l-4 border-yellow-500">
            <p className="text-gray-300">
              {tNew('courierBalanceNote')}
            </p>
          </div>
        </section>
        
        {/* Fiat Withdrawal Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-neonBlue pl-3">
            2. {tNew('fiatWithdrawal')}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Fiat withdrawal interface" 
                className="w-full h-80 object-cover rounded-lg mb-4 bg-gray-800"
              />
            </div>
            
            <ul className="space-y-3 text-gray-200 md:w-2/3">
              <li>- {tNew('goToMain')}</li>
              <li>- {tNew('fillP2PMenu')}</li>
              <li>- {tNew('checkCredentials')}</li>
              <li>- {tNew('pressRequest')}</li>
              <li>- {tNew('trackWithdrawal')}</li>
            </ul>
          </div>
        </section>
        
        {/* Advice Section */}
        <section className="bg-gray-800/40 p-5 rounded-lg border border-yellow-600/40">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-500 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-yellow-500 mb-1">{tNew('advice')}</h3>
              <p className="text-gray-300">{tNew('exchangeAdvice')}</p>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default PartnersExchangers;
