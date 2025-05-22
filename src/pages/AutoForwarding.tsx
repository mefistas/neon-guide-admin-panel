
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { useAutoForwardingTranslations } from '@/hooks/useAutoForwardingTranslations';
import { Mail, Forward, Clock, Terminal } from "lucide-react";
import { Separator } from '@/components/ui/separator';

const AutoForwarding = () => {
  const { tNew } = useTranslations();
  const { t } = useAutoForwardingTranslations();
  
  return (
    <TutorialPage title={t('autoForwarding')}>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        <div className="space-y-6 bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-l-4 border-blue-500 dark:border-neonBlue pl-3">{t('uniqueMarketingTool')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t('locationPath')}</p>
          <p className="text-gray-700 dark:text-gray-300">{t('moduleDescription')}</p>
          
          <div className="space-y-3 bg-gray-50/80 dark:bg-gray-800/40 p-4 rounded-md border border-gray-200 dark:border-gray-700">
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">1</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step1')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">2</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step2')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">3</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step3')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">4</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step4')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">5</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step5')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 dark:bg-neonBlue text-white dark:text-black text-sm font-bold">6</div>
              <p className="text-gray-700 dark:text-gray-300">{t('step6')}</p>
            </div>
          </div>
          
          <p className="text-xl font-semibold text-blue-600 dark:text-neonBlue">{t('marketingLevel')}</p>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-900/40 rounded-lg p-6 border light-border">
          <img 
            src="https://i.ibb.co/tPvR7PW4/Screenshot-2025-05-20-at-2-31-04-AM.png" 
            alt="Auto forwarding interface"
            className="rounded-lg shadow-lg max-w-full border border-gray-200 dark:border-gray-700"
          />
        </div>
        
        <div className="p-4 bg-blue-50 dark:bg-neonBlue/10 rounded-md border border-blue-200 dark:border-neonBlue">
          <p className="font-semibold text-gray-800 dark:text-white">{t('tip')}:</p>
          <p className="text-gray-700 dark:text-gray-300">{t('autoForwardingTip')}</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default AutoForwarding;
