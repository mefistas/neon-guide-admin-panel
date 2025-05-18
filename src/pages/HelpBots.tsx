
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
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
  
  return (
    <TutorialPage title={tNew('helpBots')}>
      <div className="space-y-8">
        <div className="mb-4">
          <BackButton to="/cards-payments" />
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <p className="text-lg text-gray-200 mb-6">{tNew('helpBotsIntro')}</p>
          
          {/* Main bot connection section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Bot size={20} className="text-neonBlue" />
              {tNew('mainBotConnection')}
            </h2>
            
            <p className="text-gray-300 whitespace-pre-line">{tNew('mainBotConnectionSteps')}</p>
            
            <div className="my-6">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex justify-center p-1">
                      <img 
                        src="https://i.ibb.co/pBDsMBx/Screenshot-2025-05-18-at-1-07-00-PM.png" 
                        alt="Bot connection step 1" 
                        className="rounded-lg shadow-lg max-w-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center p-1">
                      <img 
                        src="https://i.ibb.co/6JwysS/Screenshot-2025-05-18-at-1-08-20-PM.png" 
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
          <div className="border-t border-gray-700 my-8"></div>
          
          {/* Employee notification bot section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Bot size={20} className="text-neonBlue" />
              {tNew('employeeNotificationBot')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="text-gray-300 whitespace-pre-line">{tNew('employeeNotificationSteps')}</p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/ZRWv6Zt/IMAGE-2025-05-18-13-13-36.jpg" 
                  alt="Employee notification bot setup" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-700 my-8"></div>
          
          {/* Dispute operator bot section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Bot size={20} className="text-neonBlue" />
              {tNew('disputeOperatorBot')}
            </h2>
            
            <p className="text-gray-300 whitespace-pre-line">{tNew('disputeOperatorDescription')}</p>
            
            <div className="bg-gray-700/30 rounded-lg p-4 my-4">
              <h3 className="text-lg font-semibold text-white mb-2">{tNew('disputeOptions')}</h3>
              <ol className="list-decimal pl-5 text-gray-300 space-y-2">
                <li>{tNew('disputeOption1')}</li>
                <li>{tNew('disputeOption2')}</li>
                <li>{tNew('disputeOption3')}</li>
              </ol>
            </div>
            
            <p className="text-gray-300 flex items-start gap-2 whitespace-pre-line">
              <AlertTriangle size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <span>
                {tNew('botSetupInstructions')} 
                <Link to="/how-to-add-bots" className="text-blue-400 underline hover:text-blue-300">
                  {tNew('howToAddBots')}
                </Link> 
                {tNew('botSetupInstructionsContinued')}
              </span>
            </p>
            
            <div className="flex justify-center mt-4">
              <img 
                src="https://i.ibb.co/qMw8JJD/IMAGE-2025-05-18-13-23-20.jpg" 
                alt="Dispute operator bot setup" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-700 my-8"></div>
          
          {/* Bot customization section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Bot size={20} className="text-neonBlue" />
              {tNew('botCustomization')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <p className="text-gray-300">
                {tNew('botCustomizationDescription')}
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/605ssN5/IMAGE-2025-05-18-13-24-52.jpg" 
                  alt="Bot customization interface" 
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HelpBots;
