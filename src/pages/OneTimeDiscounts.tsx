
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import BackButton from '@/components/BackButton';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import useOneTimeDiscountsTranslations from '@/hooks/useOneTimeDiscountsTranslations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OneTimeDiscounts = () => {
  const { tNew } = useTranslations();
  const { t } = useOneTimeDiscountsTranslations();
  
  return (
    <TutorialPage title={t('referralSystemAndDiscounts')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/marketing" />
        </div>
        
        {/* Referral System Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{t('referralSystem')}</h2>
          
          <p className="mb-4">{t('referralSystemDesc')}</p>
          <p className="mb-4">{t('twoEditableSections')}</p>
          
          <div className="bg-gray-800/50 rounded-lg p-6 my-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">{t('referralProgram')}</h3>
                <p className="mb-4">{t('referralProgramDesc')}</p>
                <p className="mb-4">{t('referralShareDesc')}</p>
                <p className="mb-4">
                  {t('referralActiveDesc')}
                  <Link to="/custom-bot" className="text-neonBlue hover:underline ml-1">
                    {tNew('customBotTitle')}
                  </Link>
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://i.ibb.co/7tcPvs2v/Screenshot-2025-05-20-at-12-12-22-PM.png" 
                  alt="Referral program settings" 
                  className="rounded-lg border border-gray-700 shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mandatory Subscription Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{t('mandatorySubscription')}</h2>
          
          <p className="mb-4">{t('mandatorySubRequirements')}</p>
          
          <div className="space-y-4 mb-5">
            <p>{t('step1')}</p>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p>{t('step2')}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://i.ibb.co/jkH2bBs5/IMAGE-2025-05-20-12-34-52.jpg" 
                  alt="Bot setup for channel subscription" 
                  className="rounded-lg border border-gray-700 shadow-md w-full"
                />
              </div>
            </div>
            <p>{t('step3')}</p>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p>{t('step4')}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://i.ibb.co/Xvq4vHN/Screenshot-2025-05-20-at-12-32-39-PM.png" 
                  alt="Getting channel ID" 
                  className="rounded-lg border border-gray-700 shadow-md w-full"
                />
              </div>
            </div>
            <p>{t('step5')}</p>
            <p>{t('step6')}</p>
          </div>
        </section>
        
        {/* One-Time Discounts Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{t('oneTimeDiscounts')}</h2>
              <p className="mb-4">{t('oneTimeDiscountsDesc')}</p>
              <p className="mb-4">
                {t('speedTip')}
                <Link to="/clients" className="text-neonBlue hover:underline ml-1">
                  {tNew('clients')}
                </Link>
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.ibb.co/Ps0BXGXZ/132433t-Q.png" 
                alt="One-time discount settings" 
                className="rounded-lg border border-gray-700 shadow-md w-full"
              />
            </div>
          </div>
        </section>
        
        {/* First Entry Bonus Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{t('firstEntryBonus')}</h2>
          <p className="mb-4">{t('firstEntryBonusDesc')}</p>
        </section>
      </div>
    </TutorialPage>
  );
};

export default OneTimeDiscounts;
