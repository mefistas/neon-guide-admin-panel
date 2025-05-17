
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

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">🏪 {tLocal('casinoInstructions')}</h2>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">{tLocal('storeSetupTitle')}</h2>
            <div className="space-y-2 whitespace-pre-line">
              {tLocal('casinoSteps')}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h2 className="text-xl font-semibold mb-4">{tLocal('availableGames')}</h2>
            <div className="space-y-4 whitespace-pre-line">
              {tLocal('gamesList')}
            </div>
            
            <div className="p-4 bg-neonBlue/10 rounded-md mt-6 border border-neonBlue">
              <p className="whitespace-pre-line">{tLocal('gameChanceInfo')}</p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <Sparkles size={24} className="text-neonBlue" /> {tLocal('slotMachines')}
            </h2>
            <div className="space-y-2 whitespace-pre-line">
              {tLocal('slotMachineInfo')}
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CasinoSetup;
