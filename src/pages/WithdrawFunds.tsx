
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
            {/* Placeholder for horizontal image */}
            <div className="bg-gray-700/50 h-48 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400">{language === 'en' ? 'Horizontal image placeholder' : 'Заглушка для горизонтального изображения'}</p>
            </div>
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
          
          <div className="mb-6">
            {/* Placeholder for vertical image */}
            <div className="bg-gray-700/50 h-64 w-48 mx-auto rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400">{language === 'en' ? 'Vertical image placeholder' : 'Заглушка для вертикального изображения'}</p>
            </div>
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
