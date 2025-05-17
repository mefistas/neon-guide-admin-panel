
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { AlertCircle } from 'lucide-react';

const WithdrawFunds = () => {
  const { tNew, language } = useTranslations();
  
  return (
    <TutorialPage title={tNew('withdrawFunds')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <p className="text-lg text-gray-300 mb-6">{tNew('withdrawFundsIntro')}</p>
        
        {/* Crypto Withdrawal Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white border-l-4 border-neonBlue pl-3">
            1. {tNew('cryptoWithdrawal')}
          </h2>
          
          <div className="mb-6">
            <img 
              src="https://i.ibb.co/ZRn1djK/Screenshot-2025-05-17-at-9-30-04-PM.png" 
              alt={language === 'en' ? "Crypto withdrawal interface" : "Интерфейс вывода криптовалюты"}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="whitespace-pre-line text-gray-300">
            {tNew('cryptoWithdrawalSteps')}
          </div>
        </div>
        
        {/* Fiat Withdrawal Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white border-l-4 border-neonBlue pl-3">
            2. {tNew('fiatWithdrawal')}
          </h2>
          
          <div className="mb-6 flex justify-center">
            <img 
              src="https://i.ibb.co/r20rsYq/image.png" 
              alt={language === 'en' ? "Fiat withdrawal interface" : "Интерфейс вывода фиата"}
              className="rounded-lg shadow-lg max-h-[500px]"
            />
          </div>
          
          <div className="whitespace-pre-line text-gray-300">
            {tNew('fiatWithdrawalSteps')}
          </div>
        </div>
        
        {/* Advice Section */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 flex items-start">
          <AlertCircle className="text-amber-500 mr-3 mt-0.5 shrink-0" />
          <p className="text-amber-200">{tNew('withdrawalAdvice')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default WithdrawFunds;
