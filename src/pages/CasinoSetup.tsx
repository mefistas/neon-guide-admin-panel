
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Dice1, Dice6, Target, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CasinoSetup = () => {
  const { tLocal } = useTranslations();

  return (
    <TutorialPage title={tLocal('casino')}>
      <div className="space-y-6">
        <div className="mb-4">
          <BackButton to="/" />
        </div>

        <p className="text-lg font-medium">{tLocal('casinoInstructions')}</p>
        
        <Separator className="my-6" />
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">{tLocal('storeSetupTitle')}</h2>
            <p>{tLocal('storeSetupDescription')}</p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md whitespace-pre-line">
              {tLocal('configurationSteps')}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Available Games:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                  <Dice1 size={24} className="text-neonBlue" />
                  <Dice6 size={24} className="text-neonBlue" />
                  <h3 className="text-lg font-medium">{tLocal('diceGame')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tLocal('configurationSteps')}
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={24} className="text-neonBlue" />
                  <h3 className="text-lg font-medium">{tLocal('dartsGame')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tLocal('configurationSteps')}
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={24} className="text-neonBlue" />
                  <h3 className="text-lg font-medium">{tLocal('slotGame')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {tLocal('slotMachineInfo')}
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
              <p className="font-semibold mb-2">{tLocal('gameChanceInfo')}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <label className="text-sm font-medium">{tLocal('minBet')}</label>
                  <div className="px-3 py-2 border rounded-md bg-background">10</div>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <label className="text-sm font-medium">{tLocal('maxBet')}</label>
                  <div className="px-3 py-2 border rounded-md bg-background">1000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CasinoSetup;
