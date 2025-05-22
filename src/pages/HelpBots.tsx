
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import useHelpBotsTranslations from '@/hooks/useHelpBotsTranslations';
import BackButton from '@/components/BackButton';
import { Bot, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HelpBots = () => {
  const { tNew } = useTranslations();
  const { t } = useHelpBotsTranslations();
  
  return (
    <TutorialPage title={tNew('helpBots')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>

        <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border light-border">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">{/* Removed helpBotsIntro as requested */}</p>
          
          {/* Main bot connection section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold light-text flex items-center gap-2">
              <Bot size={20} className="text-blue-600 dark:text-neonBlue" />
              {tNew('mainBotConnection')}
            </h2>
            
            <p className="light-text-secondary whitespace-pre-line">{tNew('mainBotConnectionSteps')}</p>
            
            <div className="my-6">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex justify-center p-1">
                      <img 
                        src="https://i.ibb.co/pBDsMBxC/Screenshot-2025-05-18-at-1-07-00-PM.png" 
                        alt="Bot connection step 1" 
                        className="rounded-lg shadow-lg max-w-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center p-1">
                      <img 
                        src="https://i.ibb.co/6JwysSrt/Screenshot-2025-05-18-at-1-08-20-PM.png" 
                        alt="Bot connection step 2" 
                        className="rounded-lg shadow-lg max-w-full"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
          
          {/* Employee notification bot section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold light-text flex items-center gap-2">
              <Bot size={20} className="text-blue-600 dark:text-neonBlue" />
              {tNew('employeeNotificationBot')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="light-text-secondary whitespace-pre-line">{tNew('employeeNotificationSteps')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/ZRWv6Ztw/IMAGE-2025-05-18-13-13-36.jpg" 
                  alt="Employee notification bot setup" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
          
          {/* Dispute operator bot section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold light-text flex items-center gap-2">
              <Bot size={20} className="text-blue-600 dark:text-neonBlue" />
              {tNew('disputeOperatorBot')}
            </h2>
            
            <p className="light-text-secondary whitespace-pre-line">{tNew('disputeOperatorDescription')}</p>
            
            <div className="bg-blue-50/80 dark:bg-gray-700/30 rounded-lg p-4 my-4">
              <h3 className="text-lg font-semibold light-text mb-2">{tNew('disputeOptions')}</h3>
              <ol className="list-decimal pl-5 light-text-secondary space-y-2">
                <li>{tNew('disputeOption1')}</li>
                <li>{tNew('disputeOption2')}</li>
                <li>{tNew('disputeOption3')}</li>
              </ol>
            </div>
            
            <p className="light-text-secondary flex items-start gap-2 whitespace-pre-line">
              <AlertTriangle size={20} className="text-amber-500 dark:text-yellow-400 mt-1 flex-shrink-0" />
              <span>
                {tNew('botSetupInstructions')} 
                <Link to="/how-to-add-bots" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
                  {tNew('howToAddBots')}
                </Link> 
                {tNew('botSetupInstructionsContinued')}
              </span>
            </p>
            
            <div className="flex justify-center mt-4">
              <img 
                src="https://i.ibb.co/qMw8JJDV/IMAGE-2025-05-18-13-23-20.jpg" 
                alt="Dispute operator bot setup" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
          
          {/* Bot customization section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold light-text flex items-center gap-2">
              <Bot size={20} className="text-blue-600 dark:text-neonBlue" />
              {tNew('botCustomization')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="light-text-secondary">
                {tNew('botCustomizationDescription')}
                <span className="block mt-4 text-blue-600 dark:text-blue-400"></span>
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/605ssN5v/IMAGE-2025-05-18-13-24-52.jpg" 
                  alt="Bot customization interface" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
          
          {/* Payment Acceptance Bot section - New section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold light-text flex items-center gap-2">
              <Bot size={20} className="text-blue-600 dark:text-neonBlue" />
              {t('paymentBot')}
            </h2>
            
            <p className="light-text-secondary">{t('paymentBotDescription')}</p>
            
            <div className="flex justify-center my-6">
              <img 
                src="https://i.ibb.co/qQfMbPK/Screenshot-2025-05-19-at-11-04-26-AM.png" 
                alt="Payment acceptance bot interface" 
                className="rounded-lg shadow-lg max-w-full md:max-w-2xl" 
              />
            </div>
            
            <div className="space-y-4">
              <p className="light-text-secondary whitespace-pre-line">{t('paymentBotSteps')}</p>
              <p className="light-text-secondary whitespace-pre-line">{t('paymentBotFeatures')}</p>
              <p className="light-text-secondary whitespace-pre-line">{t('paymentBotOperators')}</p>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HelpBots;
