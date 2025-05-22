
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { AlertCircle, Clock, ArrowLeftRight, Link } from 'lucide-react';

const WithdrawFunds = () => {
  const { tNew, language } = useTranslations();
  
  return (
    <TutorialPage title={tNew('withdrawFunds')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/finance" />
        </div>
        
        <p className="text-lg light-text-secondary mb-6">{tNew('withdrawFundsIntro')}</p>
        
        {/* Crypto Withdrawal Section */}
        <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <h2 className="text-2xl font-semibold mb-4 light-text border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            1. {tNew('cryptoWithdrawal')}
          </h2>
          
          <div className="mb-6">
            <img 
              src="https://i.ibb.co/5xLtXcgR/Screenshot-2025-05-17-at-10-57-28-PM.png" 
              alt={language === 'en' ? "Crypto withdrawal interface" : "Интерфейс вывода криптовалюты"}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="whitespace-pre-line light-text-secondary mb-8">
            {tNew('cryptoWithdrawalSteps')}
          </div>
          
          {/* Auto-withdrawal section */}
          <div className="mt-6 mb-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 light-text">
              <Clock className="text-blue-600 dark:text-neonBlue" /> {tNew('autoWithdrawal')}
            </h3>
            
            <div className="mb-6">
              <img 
                src="https://i.ibb.co/Q3Bvjq83/Screenshot-2025-05-17-at-10-41-21-PM.png" 
                alt={language === 'en' ? "Auto-withdrawal settings" : "Настройки автовывода"}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="whitespace-pre-line light-text-secondary">
              {tNew('autoWithdrawalSteps')}
            </div>
          </div>
          
          {/* Exchanger withdrawal section */}
          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 light-text">
              <ArrowLeftRight className="text-blue-600 dark:text-neonBlue" /> {tNew('exchangerWithdrawal')}
            </h3>
            
            <div className="whitespace-pre-line light-text-secondary">
              {tNew('exchangerWithdrawalSteps')}
              <div className="mt-4">
                <a 
                  href="https://ff.io/terms-of-service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 dark:text-neonBlue hover:underline"
                >
                  <Link size={16} /> {tNew('termsOfService')}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fiat Withdrawal Section */}
        <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <h2 className="text-2xl font-semibold mb-4 light-text border-l-4 border-blue-500 dark:border-neonBlue pl-3">
            2. {tNew('fiatWithdrawal')}
          </h2>
          
          <div className="mb-6 flex justify-center">
            <img 
              src="https://i.ibb.co/r20rsYqq/image.png" 
              alt={language === 'en' ? "Fiat withdrawal interface" : "Интерфейс вывода фиата"}
              className="rounded-lg shadow-lg max-h-[500px]"
            />
          </div>
          
          <div className="whitespace-pre-line light-text-secondary">
            {tNew('fiatWithdrawalSteps')}
          </div>
        </div>
        
        {/* Advice Section */}
        <div className="bg-amber-100/80 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700/50 rounded-lg p-4 flex items-start">
          <AlertCircle className="text-amber-600 dark:text-amber-500 mr-3 mt-0.5 shrink-0" />
          <p className="text-amber-800 dark:text-amber-200">{tNew('withdrawalAdvice')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default WithdrawFunds;
